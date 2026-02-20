# OBD32 Protocol Documentation

Detailed protocol analysis from OBD32.dll decompilation.

## Supported Protocols

| Protocol | Standard | Baud Rate | Initialization |
|----------|----------|-----------|----------------|
| ISO 9141-2 | OBD-II | 10400 | 5-baud slow init |
| ISO 14230 (KWP2000) | OBD-II | 10400 | Fast init or 5-baud |
| BMW DS2 | Proprietary | 9600 | Direct |
| BMW KBUS | Proprietary | 9600 | Direct |

---

## 1. ISO 9141-2 (K-Line)

### Overview

ISO 9141-2 is a serial protocol using a single bidirectional K-Line at 10.4 kbaud with 5-baud initialization.

### Physical Layer

```
┌─────────────────────────────────────────────────────────┐
│                    K-Line (half-duplex)                  │
│                                                          │
│   Tester ◄──────────────────────────────────────► ECU   │
│                                                          │
│   Idle: HIGH (~12V)                                      │
│   Active: LOW (0V) / HIGH (~12V)                         │
└─────────────────────────────────────────────────────────┘
```

### Serial Configuration

```c
// Default configuration
DCB config = {
    .BaudRate = 10400,      // 10.4 kbaud
    .ByteSize = 8,          // 8 data bits
    .Parity = NOPARITY,     // No parity (0)
    .StopBits = ONESTOPBIT  // 1 stop bit
};
```

### 5-Baud Initialization Sequence

The 5-baud init sends the ECU address (typically 0x33) at 5 baud using break signals:

```
Time (ms)
    0   ─┬─────────────────────────────────────────────────
        │                    IDLE (HIGH)
   200  ─┼─────────────────────────────────────────────────
        │ ┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐
        │ │ ST  │     │ b0  │     │ b1  │     │ ... │
        │─┘     └─────┘     └─────┘     └─────┘     └──────
        │  LOW    HIGH  LOW   HIGH  ...
        │
        │  Start  Bit0  Bit1  ...  Bit7  Stop
        │  200ms  200ms 200ms      200ms 200ms
```

**Implementation:**

```c
int Wakeup_timer(uint timer_id, uint msg, int state, ...) {
    switch (state) {
        case 0:  // Start - drive K-Line LOW
            SetCommBreak(handle);
            timer_id = timeSetEvent(wakeup_low_ms, 1, Wakeup_timer, 1, 0);
            break;
            
        case 1:  // After LOW period - drive K-Line HIGH
            ClearCommBreak(handle);
            timer_id = timeSetEvent(wakeup_high_ms, 1, Wakeup_timer, 2, 0);
            break;
            
        case 2:  // Complete
            wakeup_complete = true;
            break;
    }
    return state;
}
```

**Configuration (EDIABAS.ini):**

```ini
[OBD]
WAKEUP_LOW=25     ; LOW period in ms (default 25)
WAKEUP_HIGH=25    ; HIGH period in ms (default 25)
```

### KeyBytes Response

After 5-baud init, ECU responds with sync byte and key bytes:

```
┌────────────────────────────────────────────────────────┐
│  Byte  │  Value  │  Description                        │
├────────┼─────────┼─────────────────────────────────────┤
│    1   │  0x55   │  Sync pattern (01010101)            │
│    2   │  0x08   │  Key Byte 1 (protocol info)         │
│    3   │  0x08   │  Key Byte 2 (protocol info)         │
│    4   │  ~KB2   │  Inverted Key Byte 2 (ACK)          │
└────────────────────────────────────────────────────────┘
```

### Message Format

```
┌─────────┬─────────┬─────────┬─────────────┬──────────┐
│ Format  │ Target  │ Source  │   Data      │ Checksum │
│ (1 byte)│ (1 byte)│ (1 byte)│ (n bytes)   │ (1 byte) │
└─────────┴─────────┴─────────┴─────────────┴──────────┘

Format byte:
  Bit 7:   0 = No additional length byte
           1 = Additional length byte follows
  Bit 6:   0 = Physical addressing
           1 = Functional addressing
  Bits 5-0: Data length (if bit 7 = 0)
```

---

## 2. ISO 14230 (KWP2000)

### Overview

KWP2000 extends ISO 9141 with standardized diagnostic services.

### Serial Configuration

```c
// KWP2000 configuration
DCB config = {
    .BaudRate = 10400,       // Can also be 9600 or higher
    .ByteSize = 8,
    .Parity = NOPARITY,
    .StopBits = ONESTOPBIT
};
```

### Fast Initialization

KWP2000 supports fast init (no 5-baud sequence):

```
Time (ms)
    0   ─┬─ IDLE (HIGH)
        │
   25   ─┼─ TiniL ──────┐
        │              │ LOW (break)
   50   ─┼─────────────┘
        │   TiniH ──────┐
   75   ─┼─             │ HIGH
        │──────────────┘
        │
        │   Start Pattern Request (0xC1 0x33 0xF1)
```

### Message Format

```
Header formats:

Format 1 - No address info:
┌─────────┬─────────────┬──────────┐
│  Fmt    │    Data     │ Checksum │
│ (1 byte)│  (n bytes)  │ (1 byte) │
└─────────┴─────────────┴──────────┘

Format 2 - With address:
┌─────────┬─────────┬─────────┬─────────────┬──────────┐
│  Fmt    │ Target  │ Source  │    Data     │ Checksum │
│ (1 byte)│ (1 byte)│ (1 byte)│  (n bytes)  │ (1 byte) │
└─────────┴─────────┴─────────┴─────────────┴──────────┘

Format 3 - With length byte:
┌─────────┬─────────┬─────────┬─────────┬─────────────┬──────────┐
│  Fmt    │ Target  │ Source  │  Length │    Data     │ Checksum │
│ (1 byte)│ (1 byte)│ (1 byte)│ (1 byte)│  (n bytes)  │ (1 byte) │
└─────────┴─────────┴─────────┴─────────┴─────────────┴──────────┘
```

### Format Byte

```
Bit 7-6: Address mode
  00 = No address information
  01 = Exception (CARB mode)
  10 = Physical addressing
  11 = Functional addressing

Bit 5-0: Length (0-63 bytes)
  If 0, additional length byte follows
```

### Common Addresses

| Address | Description |
|---------|-------------|
| 0x33 | ECU physical address (OBD) |
| 0xF1 | Tester address |
| 0x7F | Functional broadcast |

### TesterPresent Service (Keep-Alive)

KWP2000 sessions timeout after inactivity. TesterPresent (0x3E) keeps session alive:

```c
void TesterPresentService(uint timer_id, uint msg, DWORD_PTR params) {
    // Send TesterPresent request: [Fmt][Tgt][Src][0x3E][CS]
    byte telegram[] = {0x81, 0x33, 0xF1, 0x3E};  // + checksum
    
    result = send_telegram(telegram);
    
    if (result == SUCCESS) {
        // Reschedule timer (default ~2 seconds)
        timer_id = timeSetEvent(
            tester_present_interval,  // params + 0x44
            10,
            TesterPresentService,
            params,
            TIME_ONESHOT
        );
    }
}
```

### Common KWP2000 Services

| SID | Name | Description |
|-----|------|-------------|
| 0x10 | StartDiagnosticSession | Enter diagnostic mode |
| 0x20 | StopDiagnosticSession | Exit diagnostic mode |
| 0x21 | ReadDataByLocalId | Read data by local ID |
| 0x22 | ReadDataByCommonId | Read data by common ID |
| 0x27 | SecurityAccess | Unlock ECU |
| 0x2E | WriteDataByLocalId | Write data |
| 0x30 | InputOutputControlByLocalId | Actuator test |
| 0x31 | StartRoutineByLocalId | Run routine |
| 0x34 | RequestDownload | Start download |
| 0x36 | TransferData | Transfer data block |
| 0x3E | TesterPresent | Keep-alive |

---

## 3. BMW DS2 (Diagnostic System 2)

### Overview

BMW proprietary protocol used in E36, E38, E39, E46, E53 vehicles.

### Serial Configuration

```c
// DS2 configuration
DCB config = {
    .BaudRate = 9600,        // Standard DS2 baud
    .ByteSize = 8,
    .Parity = EVENPARITY,    // Even parity (2)
    .StopBits = ONESTOPBIT
};
```

### Message Format

```
┌─────────┬─────────┬─────────────┬──────────┐
│ Address │  Length │    Data     │ Checksum │
│ (1 byte)│ (1 byte)│  (n bytes)  │ (1 byte) │
└─────────┴─────────┴─────────────┴──────────┘

Address: ECU address (0x00-0xFF)
Length:  Total message length including header
Data:    Command + parameters
Checksum: XOR of all preceding bytes
```

### Checksum Calculation

```c
// XOR checksum (used for DS2)
void calculate_xor_checksum(ushort* telegram) {
    byte checksum = 0;
    ushort length = *telegram;
    
    for (int i = 0; i < length; i++) {
        checksum ^= ((byte*)telegram)[i + 2];
    }
    
    // Append checksum
    ((byte*)telegram)[length + 2] = checksum;
    *telegram = length + 1;
}

// Verify checksum
bool verify_xor_checksum(ushort* telegram) {
    byte checksum = 0;
    ushort length = *telegram;
    
    for (int i = 0; i < length; i++) {
        checksum ^= ((byte*)telegram)[i + 2];
    }
    
    return checksum == 0;  // Valid if XOR of all bytes = 0
}
```

### Common DS2 ECU Addresses

| Address | Module |
|---------|--------|
| 0x00 | DME/DDE (Engine) |
| 0x08 | EGS (Transmission) |
| 0x18 | ABS/DSC |
| 0x20 | EWS (Immobilizer) |
| 0x44 | Airbag |
| 0x60 | IKE (Instrument Cluster) |
| 0x68 | Radio/Navigation |
| 0x80 | GM (Body Module) |

---

## 4. BMW KBUS (Body Bus)

### Overview

BMW body CAN-like serial bus for comfort electronics.

### Serial Configuration

```c
// KBUS configuration
DCB config = {
    .BaudRate = 9600,        // KBUS speed
    .ByteSize = 8,
    .Parity = EVENPARITY,    // Even parity
    .StopBits = ONESTOPBIT
};
```

### Message Format

```
┌─────────┬─────────┬─────────┬─────────────┬──────────┐
│ Source  │  Length │  Dest   │    Data     │ Checksum │
│ (1 byte)│ (1 byte)│ (1 byte)│  (n bytes)  │ (1 byte) │
└─────────┴─────────┴─────────┴─────────────┴──────────┘

Source:   Sender address
Length:   Bytes following (including checksum)
Dest:     Destination address (0x3F = broadcast)
Data:     Message content
Checksum: XOR of all preceding bytes
```

### DS2 ↔ KBUS Format Conversion

OBD32.dll automatically converts between formats:

```c
// DS2 to KBUS conversion
void DS2_to_KBUS(ushort* telegram) {
    // DS2: [Addr][Len][Data...][CS]
    // KBUS: [Src][Len][Dst][Data...][CS]
    
    // Shift data right by 1 byte
    memmove(&telegram[5], &telegram[2], *telegram - 2);
    
    // Insert KBUS header
    telegram[2] = telegram[1];    // Copy address
    *telegram += 1;               // Increase length
    telegram[1] = 0x3F;           // KBUS broadcast address
    telegram[3]--;                // Adjust inner length
    
    // Recalculate checksum if needed
    if (use_checksum) {
        *telegram -= 1;
        calculate_xor_checksum(telegram);
    }
    
    log("DS2 Format in KBUS Format", *telegram, &telegram[1]);
}

// KBUS to DS2 conversion
void KBUS_to_DS2(ushort* telegram) {
    // KBUS: [Src][Len][Dst][Data...][CS]
    // DS2: [Addr][Len][Data...][CS]
    
    // Shift data left by 2 bytes (remove Src and Dst)
    memmove(&telegram[2], &telegram[5], *telegram);
    *telegram -= 2;
    telegram[3]++;                // Adjust length
    
    calculate_xor_checksum(telegram);
    
    log("KBUS Format in DS2 Format", *telegram, &telegram[1]);
}
```

### KBUS Address Detection

The driver detects KBUS format by checking the second byte:

```c
// 0xB8 indicates KBUS format header
if ((char)telegram[1] == 0xB8) {  // -0x48 signed = 0xB8
    // KBUS format - parse accordingly
    parse_kbus_telegram();
} else {
    // DS2 format
    parse_ds2_telegram();
}
```

### Common KBUS Addresses

| Address | Module |
|---------|--------|
| 0x00 | GM (General Module) |
| 0x08 | SHD (Sunroof) |
| 0x18 | CDC (CD Changer) |
| 0x28 | RDC (Tire Pressure) |
| 0x3F | Broadcast (all modules) |
| 0x44 | EWS |
| 0x50 | MFL (Steering Wheel) |
| 0x60 | PDC (Parking Sensors) |
| 0x68 | RAD (Radio) |
| 0x6A | DSP (Audio Amp) |
| 0x80 | IKE (Cluster) |
| 0xBF | LCM (Light Module) |
| 0xC0 | MID (Multi-Info Display) |
| 0xC8 | TEL (Phone) |
| 0xE0 | IRIS |
| 0xED | TV |
| 0xF0 | NAV (Navigation) |

---

## 5. Protocol Parameters Structure

Based on decompilation, the protocol parameters structure:

```c
struct ProtocolParams {
    /* 0x00 */ uint32_t konzept;         // Protocol type
    /* 0x04 */ uint32_t baudrate;        // Baud rate
    /* 0x08 */ uint32_t reserved1[8];
    /* 0x28 */ uint8_t  data_bits;       // Data bits (8)
    /* 0x2C */ uint8_t  parity;          // 0=None, 1=Odd, 2=Even
    /* 0x30 */ uint32_t verify_checksum; // 1 = verify checksum
    /* 0x34 */ uint32_t add_checksum;    // 1 = add checksum to TX
    /* 0x38 */ uint32_t pullup;          // DTR/RTS control
    /* 0x3C */ uint32_t max_retries;     // Max retry count
    /* 0x40 */ uint32_t retry_delay;     // Retry delay (ms)
    /* 0x44 */ uint32_t tp_interval;     // TesterPresent interval (ms)
    /* 0x48 */ uint32_t tp_enabled;      // TesterPresent enabled
    /* 0x4C */ uint8_t  tp_telegram[11]; // TesterPresent data
    /* 0x57 */ uint16_t wakeup_len;      // Wakeup telegram length
    /* 0x5B */ uint8_t  wakeup_data[32]; // Wakeup telegram data
    /* ... */
};

// Protocol types (Konzept)
enum ProtocolType {
    KONZEPT_DS2    = 0x06,   // BMW DS2
    KONZEPT_KWP    = 0x0F,   // KWP2000
    KONZEPT_KBUS   = 0x??    // KBUS (DS2 variant)
};
```

---

## 6. Timing Parameters

### Inter-byte Timing (P1)

Time between bytes within a message:

```c
// Byte delay transmission
if (params->byte_delay > 0) {
    for (int i = 0; i < length; i++) {
        if (i > 0) Sleep(params->byte_delay);
        WriteFile(handle, &data[i], 1, &written, NULL);
    }
}
```

### Inter-message Timing (P2/P3)

```c
// Wait between messages
if (params->inter_msg_delay > 0) {
    while (timeGetTime() < last_send_time + 1) {
        Sleep(1);
    }
}
```

### Response Timeout

```c
// Timeout calculation
DWORD timeout = timeGetTime() + 20 +                    // Base
                (length * 11000 / baudrate) +           // TX time
                (length * byte_delay);                  // Delay time

do {
    Sleep(1);
    ClearCommError(handle, &errors, &comstat);
} while (comstat.cbInQue < length && timeGetTime() < timeout);
```

---

## 7. Error Handling

### Error Codes

| Code | Description |
|------|-------------|
| 0x01 | Success |
| 0x02 | Timeout on first byte |
| 0x03 | Timeout on subsequent bytes |
| 0x05 | Unknown command |
| 0x06 | Init failed |
| 0x08 | Not supported |
| 0x0B | TesterPresent failed |
| 0x71 ('q') | Send error |

### Retry Logic

```c
// Retry mechanism for send/receive
int result = send_receive(telegram, params);

if (result == 2) {  // Timeout
    // Retry once
    result = send_receive(telegram, params);
}
```

---

## Protocol Selection Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    OBD32.dll Protocol Flow                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. SetupConnection(konzept, baudrate, parity, ...)         │
│                        │                                     │
│                        ▼                                     │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Configure COM port (SetCommState)                   │    │
│  └─────────────────────────────────────────────────────┘    │
│                        │                                     │
│                        ▼                                     │
│  2. Check Konzept (protocol type)                           │
│                        │                                     │
│         ┌──────────────┼──────────────┐                     │
│         ▼              ▼              ▼                      │
│     DS2/KBUS        KWP2000        Other                    │
│         │              │              │                      │
│         │         ┌────┴────┐        │                      │
│         │         ▼         ▼        │                      │
│         │     5-baud     Fast        │                      │
│         │      init      init        │                      │
│         │         │         │        │                      │
│         └────────┬┴─────────┴────────┘                      │
│                  ▼                                           │
│  3. Send/Receive telegrams                                  │
│     - Add checksum if configured                            │
│     - Convert DS2↔KBUS if needed                            │
│     - Handle echo (half-duplex)                             │
│     - Verify response checksum                              │
│                        │                                     │
│                        ▼                                     │
│  4. TesterPresent (if KWP2000 and enabled)                  │
│     - Periodic 0x3E service                                 │
│     - Keeps diagnostic session alive                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```
