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

## Konzept IDs (Protocol Types)

From decompilation of the protocol selection switch:

| Konzept | Hex | Protocol | Baud Rate | Description |
|---------|-----|----------|-----------|-------------|
| 5 | 0x05 | DS2 | 9600 | Converted to 6 internally |
| **6** | 0x06 | **BMW DS2** | 9600 | Standard DS2 protocol |
| 11 | 0x0B | Special | varies | Extended protocol |
| **12** | 0x0C | **KWP2000 + Wakeup** | 10400 | With 5-baud init |
| 13 | 0x0D | ISO 9141-2 | 10400 | Basic K-Line |
| **15** | 0x0F | **KWP2000** | 10400/115200 | Fast init |
| 16 | 0x10 | Extended KWP | varies | Extended protocol |

### Protocol Selection Logic

```c
switch ((char)*konzept) {
    case 0x05:
        *konzept = 6;      // Convert to DS2
        // fall through
        
    case 0x06:             // BMW DS2
        setup_ds2_params(params, state);
        if (kbus_mode) {
            // Use KBUS variant
            return ds2_kbus_send_recv(telegram, state);
        }
        return ds2_send_recv(telegram, state);
        
    case 0x0B:             // Extended
        return extended_protocol(params, state);
        
    case 0x0C:             // KWP2000 with wakeup
        if (!session_active) {
            do_5baud_wakeup(response, state);
            session_active = true;
        }
        return kwp_send_recv(telegram, state);
        
    case 0x0D:             // ISO 9141-2
        return iso9141_send_recv(telegram, state);
        
    case 0x0F:             // KWP2000
        if (subtype == 0) {
            setup_kwp_8bit(params, state);
        } else {
            setup_kwp_32bit(params, state);
        }
        return kwp_send_recv(telegram, state);
        
    case 0x10:             // Extended KWP
        return extended_kwp(params, state);
        
    default:
        *state = 0;
        return ERROR_INVALID_KONZEPT;
}

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
Length:  Total message length including header and checksum
Data:    Command + parameters
Checksum: XOR of all preceding bytes
```

### DS2 Frame Structure (Detailed)

```
Byte:     0        1        2        3...n-1    n
       ┌────────┬────────┬────────┬──────────┬────────┐
       │  ADDR  │  LEN   │  CMD   │  DATA    │   CS   │
       └────────┴────────┴────────┴──────────┴────────┘
       
ADDR:  Target ECU address
LEN:   Total frame length (including ADDR, LEN, and CS)
CMD:   Command/Service ID
DATA:  Command parameters (variable length)
CS:    XOR checksum of bytes 0 to n-1
```

### DS2 Protocol Parameters

```c
// DS2 setup (Konzept 6)
struct DS2_Params {
    uint16_t konzept;       // [0] = 6
    uint16_t baudrate;      // [1] = 0x2580 (9600)
    uint16_t reserved[4];   // [2-5] = 0
    uint16_t timeout;       // [6] = 100 ms
    uint16_t retry_delay;   // [7] = 10 ms
    uint16_t inter_byte;    // [8] = 10 ms
};

// Internal state structure
param_3[0]  = konzept;       // Protocol type (6)
param_3[1]  = baudrate;      // 9600
param_3[10] = 8;             // Data bits
param_3[11] = 2;             // Parity (EVEN)
param_3[14] = 0;             // Flags
```

### DS2 Auto-Detection Sequence

OBD32 can auto-detect protocol by sending probe telegrams:

```c
// Step 1: Try DS2 @ 9600 baud
setup_params = {
    .konzept = 6,
    .baudrate = 0x2580,  // 9600
    .timeout = 100,
    .retry = 10
};
configure_port(setup_params);

// Send probe: [00][55][FF]
probe_telegram = {0x00, 0x55, 0xFF};
if (send_receive(probe_telegram) == SUCCESS) {
    return PROTOCOL_DS2;
}

// Step 2: Try KWP2000 @ 115200 baud
setup_params = {
    .konzept = 0x0F,
    .baudrate = 0x1C200,  // 115200
    .timeout = 100
};
configure_port(setup_params);

// Send same probe
if (send_receive(probe_telegram) == SUCCESS) {
    return PROTOCOL_KWP;
}

return PROTOCOL_UNKNOWN;
```

### Common DS2 Commands

| Command | Name | Description |
|---------|------|-------------|
| 0x00 | IDENT | Read ECU identification |
| 0x04 | STATUS_LESEN | Read status |
| 0x05 | DIAGNOSE | Read diagnostic data |
| 0x06 | ENDE | End diagnostic session |
| 0x07 | STEUERN | Actuator control |
| 0x08 | LESEN | Read memory |
| 0x10 | SCHREIBEN | Write memory |
| 0x12 | JOB_STATUS | Read job status |

### Common DS2 ECU Addresses

| Address | Hex | Module | Description |
|---------|-----|--------|-------------|
| 0 | 0x00 | DME/DDE | Engine control |
| 8 | 0x08 | EGS | Transmission |
| 16 | 0x10 | ASC | Stability control |
| 24 | 0x18 | ABS | Anti-lock brakes |
| 32 | 0x20 | EWS | Immobilizer |
| 40 | 0x28 | Airbag | SRS |
| 48 | 0x30 | Steering | Active steering |
| 68 | 0x44 | SZM | Central body |
| 96 | 0x60 | IKE | Instrument cluster |
| 104 | 0x68 | Radio | Audio/Navigation |
| 128 | 0x80 | GM | General Module |
| 160 | 0xA0 | LCM | Light check |
| 176 | 0xB0 | IHKA | Climate control |
| 208 | 0xD0 | PDC | Parking distance |

---

## 4. BMW KBUS (Body Bus)

### Overview

BMW body CAN-like serial bus for comfort electronics. KBUS is essentially DS2 with source/destination addressing.

### Serial Configuration

```c
// KBUS configuration (same as DS2)
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

Source:   Sender module address
Length:   Bytes following (Dest + Data + Checksum)
Dest:     Destination address (0x3F = broadcast)
Data:     Message content
Checksum: XOR of all preceding bytes
```

### KBUS Frame Structure (Detailed)

```
Byte:     0        1        2        3...n-1    n
       ┌────────┬────────┬────────┬──────────┬────────┐
       │  SRC   │  LEN   │  DST   │  DATA    │   CS   │
       └────────┴────────┴────────┴──────────┴────────┘
       
SRC:   Source module address
LEN:   Number of bytes following (DST + DATA + CS)
DST:   Destination address (0x3F = broadcast to all)
DATA:  Message payload
CS:    XOR checksum of bytes 0 to n-1
```

### DS2 vs KBUS Format Comparison

```
DS2 Format:
┌────────┬────────┬────────────────────────┬────────┐
│  ADDR  │  LEN   │         DATA           │   CS   │
└────────┴────────┴────────────────────────┴────────┘
   ECU     Total              Payload           XOR

KBUS Format:
┌────────┬────────┬────────┬────────────────┬────────┐
│  SRC   │  LEN   │  DST   │     DATA       │   CS   │
└────────┴────────┴────────┴────────────────┴────────┘
  From     Rest     To          Payload          XOR
```

### DS2 ↔ KBUS Format Conversion

OBD32.dll automatically converts between formats based on frame analysis:

```c
// Detection: Compare total length with LEN field
// DS2: total_len == telegram[1]
// KBUS: total_len == telegram[1] + 2 (SRC + LEN bytes not counted)

bool is_kbus_format(ushort* telegram) {
    byte len_field = ((byte*)telegram)[3];  // LEN byte
    ushort total_len = *telegram;
    
    // KBUS: length field counts from DST onwards
    // DS2: length field is total frame length
    return (total_len == len_field - 1);
}

// DS2 to KBUS conversion
void DS2_to_KBUS(ushort* telegram) {
    ushort len = *telegram;
    
    // Check if conversion needed (len > 3 and matches DS2 format)
    byte ds2_len = ((byte*)telegram)[3];
    if (ds2_len <= 3) return;
    if (len != ds2_len && len != ds2_len - 1) return;
    
    // Shift data right to make room for DST byte
    memmove(&telegram[5], &telegram[4], len - 2);
    
    // Build KBUS header
    ((byte*)telegram)[4] = ((byte*)telegram)[2];  // Copy original addr to DST
    *telegram += 1;                                // Increase total length
    ((byte*)telegram)[2] = 0x3F;                   // SRC = broadcast (tester)
    ((byte*)telegram)[3]--;                        // Adjust LEN field
    
    // Recalculate checksum if needed
    if (!use_raw_checksum) {
        *telegram -= 1;
        calculate_xor_checksum(telegram);
    }
    
    log("DS2 Format in KBUS Format", *telegram, &telegram[1]);
}

// KBUS to DS2 conversion
void KBUS_to_DS2(ushort* telegram) {
    // Remove SRC and DST, keep only ADDR+LEN+DATA+CS
    memmove(&telegram[4], &telegram[5], *telegram);
    *telegram -= 2;                    // Decrease total length
    ((byte*)telegram)[3]++;            // Adjust LEN field
    
    calculate_xor_checksum(telegram);
    
    log("KBUS Format in DS2 Format", *telegram, &telegram[1]);
}
```

### KBUS Detection in Response

The driver detects KBUS responses by checking header patterns:

```c
// 0xB8 (signed: -0x48) indicates KBUS-style extended header
if ((char)telegram[1] == 0xB8) {
    // Extended KBUS format - different parsing
    parse_extended_kbus(telegram);
} else {
    // Standard DS2/KBUS format
    parse_standard(telegram);
}

// Also check format byte upper bits for KWP addressing mode
byte format = telegram[1];
if ((format & 0xC0) == 0xC0) {
    // Functional addressing (broadcast)
} else if ((format & 0xC0) == 0x80) {
    // Physical addressing
}
```

### Common KBUS Addresses

| Address | Hex | Module | Full Name |
|---------|-----|--------|-----------|
| 0 | 0x00 | GM | General Module (Body) |
| 8 | 0x08 | SHD | Sunroof Module |
| 24 | 0x18 | CDC | CD Changer |
| 40 | 0x28 | RDC | Tire Pressure Monitor |
| 48 | 0x30 | CCM | Check Control Module |
| **63** | **0x3F** | **BROADCAST** | **All modules** |
| 68 | 0x44 | EWS | Immobilizer |
| 80 | 0x50 | MFL | Steering Wheel Buttons |
| 96 | 0x60 | PDC | Park Distance Control |
| 104 | 0x68 | RAD | Radio |
| 106 | 0x6A | DSP | Audio Amplifier |
| 128 | 0x80 | IKE | Instrument Cluster |
| 156 | 0x9C | SES | Seat Memory |
| 160 | 0xA0 | AHL | Headlight Aim |
| 176 | 0xB0 | IHKA | Climate Control |
| 187 | 0xBB | NAV | Navigation Computer |
| 191 | 0xBF | LCM | Light Control Module |
| 192 | 0xC0 | MID | Multi-Info Display |
| 200 | 0xC8 | TEL | Telephone |
| 210 | 0xD2 | SM | Seat Module |
| 224 | 0xE0 | IRIS | Integrated Radio Info System |
| 237 | 0xED | TV | Television Module |
| 240 | 0xF0 | BM | On-board Monitor |
| 255 | 0xFF | LOC | Local (internal) |

### KBUS Message Examples

**Lights On (from LCM to all):**
```
SRC=0xBF  LEN=0x05  DST=0x3F  DATA=0x4B,0x00  CS=XOR
[BF] [05] [3F] [4B] [00] [CS]
```

**Key Status (from GM to IKE):**
```
SRC=0x00  LEN=0x05  DST=0x80  DATA=0x11,0x01  CS=XOR
[00] [05] [80] [11] [01] [CS]
```

**CD Track Info (from RAD to MID):**
```
SRC=0x68  LEN=0x07  DST=0xC0  DATA=0x39,0x02,0x01,0x00  CS=XOR
[68] [07] [C0] [39] [02] [01] [00] [CS]
```

---

## 5. Checksum Algorithms

### XOR Checksum (DS2/KBUS)

```c
// Calculate XOR checksum and append to telegram
void calculate_xor_checksum(ushort* telegram) {
    byte checksum = 0;
    ushort length = *telegram;
    byte* data = (byte*)(telegram + 1);
    
    // XOR all bytes
    for (int i = 0; i < length; i++) {
        checksum ^= data[i];
    }
    
    // Append checksum byte
    data[length] = checksum;
    *telegram = length + 1;
}

// Verify XOR checksum (result should be 0)
bool verify_xor_checksum(ushort* telegram) {
    byte checksum = 0;
    ushort length = *telegram;
    byte* data = (byte*)(telegram + 1);
    
    // XOR all bytes including checksum
    for (int i = 0; i < length; i++) {
        checksum ^= data[i];
    }
    
    return checksum == 0;  // Valid if all XOR to zero
}
```

### ADD Checksum (Alternative)

Some protocols use simple addition:

```c
// Calculate ADD checksum
void calculate_add_checksum(ushort* telegram) {
    char checksum = 0;
    ushort length = *telegram;
    byte* data = (byte*)(telegram + 1);
    
    // Sum all bytes (with overflow)
    for (int i = 0; i < length; i++) {
        checksum += data[i];
    }
    
    // Append checksum
    data[length] = checksum;
    *telegram = length + 1;
}
```

---

## 6. Protocol Parameters Structure

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
