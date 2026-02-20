# OBD32.dll - OBD Interface Analysis

Decompilation analysis of the EDIABAS OBD (On-Board Diagnostics) interface driver.

## Overview

**Purpose:** Serial communication with OBD-II compliant vehicles and BMW-specific protocols.

**Protocols Supported:**
- ISO 9141-2 (K-Line, 5-baud init)
- ISO 14230 (KWP2000)
- BMW DS2 (Diagnostic System 2)
- BMW KBUS (Body Bus)

**Size:** ~11K lines of decompiled code

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        OBD32.dll                            │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │  Command     │  │   Protocol   │  │   Serial I/O     │  │
│  │  Dispatcher  │→ │   Handler    │→ │   (COM Port)     │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
│         │                │                    │             │
│         ▼                ▼                    ▼             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Win32 Serial API                        │   │
│  │    CreateFile / SetCommState / WriteFile / ReadFile  │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## Connection Setup

### OpenConnection

```c
uint OpenConnection(LPCSTR com_port) {
    // Open COM port with exclusive access
    handle = CreateFileA(
        com_port,           // e.g., "COM1"
        GENERIC_READ | GENERIC_WRITE,  // 0xC0000000
        0,                  // No sharing
        NULL,               // Default security
        OPEN_EXISTING,      // 3
        0,                  // No flags
        NULL
    );
    
    if (handle == INVALID_HANDLE_VALUE) {
        handle = cached_handle;  // Try cached handle
    }
    cached_handle = handle;
    
    log("OpenConnection Handle=", handle);
    
    if (handle == INVALID_HANDLE_VALUE) {
        return 0xFFFF0000;  // Error
    }
    
    // Setup buffers (20KB each direction)
    SetupComm(handle, 20000, 20000);
    PurgeComm(handle, PURGE_RXCLEAR | PURGE_TXCLEAR);
    
    // Get current settings
    GetCommState(handle, &dcb);
    
    // Configure default serial parameters
    dcb.DCBlength = 0x1C;
    dcb.BaudRate = 9600;      // 0x2580
    dcb.ByteSize = 8;
    dcb.Parity = EVENPARITY;  // 2
    dcb.StopBits = ONESTOPBIT;
    dcb.fDtrControl = DTR_CONTROL_ENABLE;
    dcb.fRtsControl = RTS_CONTROL_ENABLE;
    dcb.XonLim = 0;
    dcb.XoffLim = 0;
    
    SetCommState(handle, &dcb);
    ClearCommError(handle, &errors, &comstat);
    
    return 1;  // Success
}
```

---

### SetupConnection

```c
uint SetupConnection(byte* params) {
    // Parameter structure:
    // +0x00: Konzept (protocol type)
    // +0x04: Baudrate
    // +0x28: ByteSize (data bits)
    // +0x2C: Parity
    // +0x38: Pullup (DTR/RTS control)
    
    log("SetupConnection Konzept=", params[0x00]);
    log("SetupConnection Baudrate=", *(DWORD*)(params + 0x04));
    log("SetupConnection ByteSize=", params[0x28]);
    log("SetupConnection Parity=", params[0x2C]);
    log("SetupConnection Pullup=", params[0x38]);
    
    PurgeComm(handle, PURGE_RXCLEAR | PURGE_TXCLEAR);
    GetCommState(handle, &dcb);
    
    dcb.BaudRate = *(DWORD*)(params + 0x04);
    dcb.ByteSize = params[0x28];
    dcb.Parity = params[0x2C];
    
    // Pullup control (DTR/RTS)
    uint pullup = *(uint*)(params + 0x38);
    dcb.fDtrControl = (pullup & 0x03) << 4;
    dcb.fRtsControl = dcb.fRtsControl | 0x83;
    
    dcb.DCBlength = 0x1C;
    dcb.StopBits = ONESTOPBIT;
    
    SetCommState(handle, &dcb);
    ClearCommError(handle, &errors, &comstat);
    
    return 1;
}
```

---

### CloseConnection

```c
uint CloseConnection(void) {
    log("CloseConnection handle=", handle);
    
    if (handle != INVALID_HANDLE_VALUE) {
        SetCommMask(handle, 0);
        PurgeComm(handle, PURGE_TXABORT | PURGE_RXABORT | 
                          PURGE_TXCLEAR | PURGE_RXCLEAR);
        CloseHandle(handle);
        handle = INVALID_HANDLE_VALUE;
    }
    
    return 1;
}
```

---

## Command Dispatcher

Main entry point for interface commands.

```c
void execute_command(uint cmd_len, byte* cmd_data, 
                     ushort* response_len, byte* response) {
    *response_len = 0;
    
    log(">execute_command", cmd_len, cmd_data);
    
    byte result;
    
    switch (cmd_data[0]) {
        case 0x01:  // Initialize interface
            result = cmd_init(&state);
            break;
            
        case 0x02:  // Check interface ready
            result = cmd_check_ready(&state);
            break;
            
        case 0x03:  // Get parameter (returns 2 bytes)
            result = cmd_get_param(&param);
            *(uint16_t*)(response + 3) = param;
            *response_len = 2;
            break;
            
        case 0x04:  // Set parameter
            result = cmd_set_param(&param);
            *(uint16_t*)(response + 3) = param;
            *response_len = 2;
            break;
            
        case 0x05:  // Setup connection parameters
            result = cmd_setup_connection(
                (uint*)(cmd_data + 3),
                cmd_len - 3,
                &state
            );
            *response_len = 0;
            break;
            
        case 0x06:  // Send/receive telegram
            // Copy request data
            request_len = cmd_len - 3;
            memcpy(request_buffer, cmd_data + 3, request_len);
            
            result = cmd_send_recv(
                &request_buffer,
                &rx_buffer,
                &state
            );
            
            if (result == 1) {
                // Copy response
                memcpy(response + 3, rx_buffer + 2, request_len);
                *response_len = request_len;
            }
            break;
            
        case 0x07:  // Receive only
            result = cmd_receive(&rx_buffer, &state);
            if (result == 1) {
                memcpy(response + 3, rx_buffer + 2, rx_buffer[0]);
                *response_len = rx_buffer[0];
            }
            break;
            
        case 0x08:  // Clear buffers
            result = cmd_clear_buffers();
            *response_len = 0;
            break;
            
        case 0x09:  // Get status
            result = cmd_get_status();
            *(uint16_t*)(response + 3) = status;
            *response_len = 2;
            break;
            
        case 0x0A:  // Reset interface
            result = cmd_reset(&state);
            *response_len = 0;
            break;
            
        case 0x0B:  // Get version
            result = 1;
            response[3] = 0xD1;  // Version high
            response[4] = 0x00;  // Version low
            response[5] = 0x00;
            response[6] = 0x00;
            *response_len = 4;
            break;
            
        case 0x0C:  // Enable echo
            result = cmd_enable_echo();
            *response_len = 0;
            break;
            
        case 0x0D:  // Disable echo
            result = cmd_disable_echo();
            *response_len = 0;
            break;
            
        case 0x0E:  // Set timing
            result = cmd_set_timing();
            *response_len = 0;
            break;
            
        case 0x10:  // Start TesterPresent
            result = cmd_start_tester_present();
            *response_len = 0;
            break;
            
        case 0x11:  // Stop TesterPresent
            result = cmd_stop_tester_present();
            *response_len = 0;
            break;
            
        case 0x12:  // Get last error
            *(uint32_t*)(response + 3) = last_error;
            *response_len = 4;
            result = 1;
            break;
            
        case 0x13:  // Get byte count
            result = cmd_get_byte_count(&count);
            response[3] = count;
            *response_len = 1;
            break;
            
        case 0x14:  // Break
            result = cmd_break();
            *response_len = 0;
            break;
            
        case 0x15:  // Extended send/receive
            result = cmd_extended_send_recv(
                &state,
                (uint*)(cmd_data + 3),
                cmd_data + 0x23
            );
            *response_len = 0;
            break;
            
        default:
            *response_len = 0;
            result = 5;  // Unknown command
            break;
    }
    
    // Build response header
    *response_len += 3;
    response[0] = result;
    response[1] = *response_len & 0xFF;
    response[2] = (*response_len >> 8) & 0xFF;
    
    if (result == 1) {
        log("<execute_command", *response_len, response);
    }
}
```

---

## Data Transmission

### SendData

```c
int SendData(uint length, byte* data, uint params) {
    // Wait for inter-message delay
    if (params->inter_msg_delay > 0) {
        DWORD now = timeGetTime();
        while (now < last_send_time + 1) {
            Sleep(1);
            now = timeGetTime();
        }
    }
    
    log("SendData", length, data);
    
    // Clear buffers
    PurgeComm(handle, PURGE_RXCLEAR | PURGE_TXCLEAR);
    
    // Check if byte delay is needed
    if (params->byte_delay > 0) {
        // Send with inter-byte delay
        send_byte_index = 0;
        send_byte_count = length;
        byte_delay_ms = params->byte_delay;
        send_state = SENDING;
        
        // Start timer for byte-by-byte transmission
        timer_id = timeSetEvent(1, 1, SendData_Byte_delay_callback, data, 0);
        
        if (timer_id != 0) {
            // Wait for completion with timeout
            DWORD start = timeGetTime();
            DWORD timeout = start + 20 + 
                           (length * 11000 / params->baudrate) +
                           (length * params->byte_delay);
            
            while (send_state == SENDING && timeGetTime() < timeout) {
                Sleep(2);
            }
            
            if (send_state != COMPLETE) {
                return 1;  // Error
            }
        } else {
            // Fallback: manual byte-by-byte send
            for (int i = 0; i < length; i++) {
                if (i > 0) Sleep(params->byte_delay);
                
                DWORD written;
                WriteFile(handle, &data[i], 1, &written, NULL);
                FlushFileBuffers(handle);
                
                if (written != 1) {
                    return 1;
                }
            }
        }
    } else {
        // Send all at once
        DWORD written;
        WriteFile(handle, data, length, &written, NULL);
        FlushFileBuffers(handle);
        
        if (written != length) {
            return 1;
        }
    }
    
    // Wait for echo (half-duplex K-Line)
    DWORD timeout = timeGetTime() + 20 + 
                   (length * 11000 / params->baudrate);
    
    do {
        Sleep(1);
        ClearCommError(handle, &errors, &comstat);
    } while (comstat.cbInQue < length && timeGetTime() < timeout);
    
    if (comstat.cbInQue < length) {
        log("SendData echo timeout, got:", comstat.cbInQue);
        return 1;
    }
    
    // Read and discard echo
    ReadFile(handle, echo_buffer, length, &read, NULL);
    
    return 0;  // Success
}
```

---

### SendData_Byte_delay (Timer Callback)

```c
uint CALLBACK SendData_Byte_delay(uint timer_id, uint msg, 
                                   DWORD_PTR data_ptr, 
                                   DWORD_PTR dw1, DWORD_PTR dw2) {
    byte* data = (byte*)data_ptr;
    
    // Kill current timer
    current_timer = 0;
    
    // Schedule next byte if not done
    if (send_byte_index + 1 < send_byte_count) {
        current_timer = timeSetEvent(
            byte_delay_ms, 1,
            SendData_Byte_delay,
            (DWORD_PTR)(data + 1),
            TIME_ONESHOT
        );
    }
    
    // Write one byte
    DWORD written;
    if (!WriteFile(handle, data, 1, &written, NULL)) {
        send_state = ERROR;
        timeKillEvent(current_timer);
        return 1;
    }
    
    FlushFileBuffers(handle);
    
    if (written != 1) {
        send_state = ERROR;
        timeKillEvent(current_timer);
        return 1;
    }
    
    send_byte_index++;
    
    if (send_byte_index >= send_byte_count) {
        send_state = COMPLETE;
    }
    
    return send_state;
}
```

---

## Wakeup Sequence (5-Baud Init)

ISO 9141-2 slow initialization.

```c
int Wakeup_timer(uint timer_id, uint msg, int state,
                 DWORD_PTR dw1, DWORD_PTR dw2) {
    // State machine for 5-baud address transmission
    switch (state) {
        case 0:  // Start - send LOW (break)
            timer_id = timeSetEvent(wakeup_low_ms, 1, 
                                    Wakeup_timer, 1, 0);
            break;
            
        case 1:  // After LOW - send HIGH
            timer_id = timeSetEvent(wakeup_high_ms, 1,
                                    Wakeup_timer, 2, 0);
            break;
            
        case 2:  // Complete
            wakeup_state = COMPLETE;
            break;
    }
    
    return 0;
}

char do_wakeup(ushort* response, uint params) {
    bool manual_wakeup = false;
    
    wakeup_state = WAKING;
    
    // Start wakeup timer
    timer_id = timeSetEvent(1, 1, Wakeup_timer, 0, 0);
    log("Wake Up Timer=", timer_id);
    
    if (timer_id == 0) {
        // Fallback: manual SetCommBreak/ClearCommBreak
        manual_wakeup = true;
        
        SetCommBreak(handle);   // Drive K-Line LOW
        Sleep(25);              // 25ms LOW
        ClearCommBreak(handle); // Drive K-Line HIGH
        Sleep(25);              // 25ms HIGH
    } else {
        // Wait for timer completion
        DWORD start = timeGetTime();
        while (wakeup_state == WAKING && 
               timeGetTime() < start + 100) {
            Sleep(1);
        }
    }
    
    // Copy wakeup response data
    uint16_t resp_len = *(uint16_t*)(params + 0x57);
    *response = resp_len;
    
    if (resp_len != 0) {
        if (params->skip_first_byte) {
            *response = resp_len - 1;
        }
        memcpy(response + 1, params + 0x5B, *response);
    }
    
    // Send initialization telegram if needed
    char result;
    if (*response == 0) {
        result = 1;
    } else {
        result = send_init_telegram(response, params);
    }
    
    // Start TesterPresent service if configured
    if (result == 1 && tester_present_timer == 0 &&
        params->tester_present_interval > 0 &&
        params->tester_present_enabled && !manual_wakeup) {
        
        tester_present_timer = timeSetEvent(
            params->tester_present_interval,
            10,
            TesterPresentService,
            params,
            TIME_PERIODIC
        );
        log("TesterPresent TimerID=", tester_present_timer);
    }
    
    return result;
}
```

---

## TesterPresent Service (KWP2000 Keep-Alive)

```c
void CALLBACK TesterPresentService(uint timer_id, uint msg,
                                    DWORD_PTR params,
                                    DWORD_PTR dw1, DWORD_PTR dw2) {
    // Clear timer ID
    tester_present_timer = 0;
    
    // Set flag for byte delay handling
    use_byte_delay = (*(int*)(params + 0x20) != 0);
    
    // Send TesterPresent (0x3E) service
    char result = send_tester_present();
    
    if (result == 1) {
        // Reschedule timer
        tester_present_timer = timeSetEvent(
            *(UINT*)(params + 0x44),  // Interval
            10,                        // Resolution
            TesterPresentService,
            params,
            TIME_ONESHOT
        );
        use_byte_delay = 0;
        return;
    }
    
    // Failed - stop service
    tester_present_active = 0;
    use_byte_delay = 0;
}

void stop_tester_present(void) {
    tester_present_active = 0;
    
    if (tester_present_timer != 0) {
        log("exit kwp2000: TesterPresent TimerID=", tester_present_timer);
        timeKillEvent(tester_present_timer);
        tester_present_timer = 0;
    }
}
```

---

## Protocol Format Conversion

### DS2 to KBUS Format

```c
void DS2_to_KBUS(ushort* telegram) {
    // DS2 format: [LEN][DATA...]
    // KBUS format: [SRC][LEN][DST][DATA...]
    
    // Shift data to make room for header
    memmove(telegram + 5, telegram + 2, *telegram - 2);
    
    // Insert KBUS header
    telegram[2] = telegram[1];  // Copy original byte
    *telegram += 1;
    telegram[1] = 0x3F;         // KBUS address
    telegram[3]--;              // Adjust length
    
    // Recalculate checksum if needed
    if (params->recalc_checksum) {
        *telegram -= 1;
        recalculate_checksum(telegram);
    }
    
    log("DS2 Format in KBUS Format", *telegram, telegram + 1);
}
```

### KBUS to DS2 Format

```c
void KBUS_to_DS2(ushort* telegram) {
    // KBUS format: [SRC][LEN][DST][DATA...]
    // DS2 format: [LEN][DATA...]
    
    // Remove KBUS header
    memmove(telegram + 2, telegram + 5, *telegram);
    *telegram -= 2;
    telegram[3]++;  // Adjust length
    
    // Recalculate checksum
    recalculate_checksum(telegram);
    
    log("KBUS Format in DS2 Format", *telegram, telegram + 1);
}
```

---

## Configuration (INI File)

Read from `EDIABAS.ini` in `[OBD]` section:

| Key | Default | Description |
|-----|---------|-------------|
| `WAKEUP_LOW` | 25 | Low time for 5-baud init (ms) |
| `WAKEUP_HIGH` | 25 | High time for 5-baud init (ms) |
| `TRACE` | 0 | Trace level (0-7) |
| `TRACELEVEL` | 0 | Alternative trace level |

Environment variable: `EDIABAS_CONFIG_DIR` for config file location.

---

## Command Codes Summary

| Code | Name | Description |
|------|------|-------------|
| 0x01 | INIT | Initialize interface |
| 0x02 | CHECK_READY | Check if interface ready |
| 0x03 | GET_PARAM | Get parameter value |
| 0x04 | SET_PARAM | Set parameter value |
| 0x05 | SETUP | Setup connection parameters |
| 0x06 | SEND_RECV | Send request, receive response |
| 0x07 | RECEIVE | Receive only |
| 0x08 | CLEAR | Clear buffers |
| 0x09 | STATUS | Get interface status |
| 0x0A | RESET | Reset interface |
| 0x0B | VERSION | Get version (returns 0xD1) |
| 0x0C | ECHO_ON | Enable echo |
| 0x0D | ECHO_OFF | Disable echo |
| 0x0E | SET_TIMING | Set timing parameters |
| 0x10 | TP_START | Start TesterPresent |
| 0x11 | TP_STOP | Stop TesterPresent |
| 0x12 | GET_ERROR | Get last error code |
| 0x13 | GET_COUNT | Get byte count |
| 0x14 | BREAK | Send break condition |
| 0x15 | EXT_SEND_RECV | Extended send/receive |

---

## Error Codes

| Code | Description |
|------|-------------|
| 0x01 | Success |
| 0x05 | Unknown command |
| 0x71 ('q') | Send error |

---

## Global Variables

| Address | Name | Purpose |
|---------|------|---------|
| `DAT_1000d1e8` | `handle` | COM port handle |
| `DAT_1000d1ec` | `cached_handle` | Cached handle |
| `DAT_10011864` | `last_send_time` | Timestamp of last send |
| `DAT_10011868` | `byte_timer_id` | Byte delay timer |
| `DAT_1001188c` | `wakeup_timer_id` | Wakeup timer |
| `DAT_10011890` | `tp_timer_id` | TesterPresent timer |
| `DAT_1000d954` | `wakeup_low_ms` | Low time (ms) |
| `DAT_1000d958` | `wakeup_high_ms` | High time (ms) |
| `DAT_10011870` | `trace_level` | Trace verbosity |

---

## Notes

1. **Half-Duplex:** K-Line is half-duplex; driver reads back echo after each send
2. **Timer-Based:** Uses Windows multimedia timers for precise timing
3. **BMW Protocols:** Supports DS2 and KBUS format conversion
4. **TesterPresent:** Automatic keep-alive for KWP2000 sessions
5. **5-Baud Init:** Implements ISO 9141-2 slow initialization via break signal
6. **Default Config:** 9600 baud, 8 data bits, even parity, 1 stop bit
