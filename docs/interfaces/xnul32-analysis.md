# XNul32.dll - Null Interface Analysis

Decompilation analysis of the EDIABAS Null/Dummy interface driver.

## Overview

**Purpose:** Stub/dummy interface that returns simulated responses without actual hardware communication.

**Use Case:** Testing, development, offline simulation.

**Size:** ~5.7K lines of decompiled code

---

## Exported Functions

| Export | Ordinal | Description |
|--------|---------|-------------|
| `dllStartupIFH` | 6 | Initialize interface |
| `dllShutdownIFH` | 5 | Shutdown interface |
| `dllCheckIFH` | 2 | Check interface capability |
| `dllCallIFH` | 1 | Execute IFH command |

---

## Function Analysis

### dllStartupIFH

```c
uint dllStartupIFH(undefined4 unused, char* ifh_name) {
    // Copy IFH name to global buffer (max ~256 bytes)
    size_t len = strlen(ifh_name);
    memcpy(&global_ifh_name, ifh_name, len);
    
    // Return success (high word = 0)
    return 0;
}
```

**Parameters:**
- `unused` - Not used
- `ifh_name` - Interface name string

**Returns:** 0 on success

---

### dllShutdownIFH

```c
void dllShutdownIFH(void) {
    // No-op - nothing to clean up
    return;
}
```

---

### dllCheckIFH

```c
byte dllCheckIFH(short cmd) {
    // Only command 6 (GET_INFO) returns 0 (supported)
    // All others return 0x1D (29 = not supported)
    if (cmd == 6) {
        return 0;
    }
    return 0x1D;
}
```

**Commands:**
| Code | Supported | Description |
|------|-----------|-------------|
| 6 | Yes | Get interface info |
| Other | No | Returns error 0x1D |

---

### dllCallIFH

Main command dispatcher. Handles IFH commands 2-51.

```c
uint dllCallIFH(short* request, short* response) {
    short cmd;
    
    // Validate request
    uint result = validate_request(&request, response);
    if (result != 0) {
        return result;  // Error in high word cleared
    }
    
    cmd = *request;
    
    // Dispatch based on command (2-51 range)
    if (cmd - 2 >= 50) {
        return 0;  // Out of range - ignore
    }
    
    switch (cmd) {
        case 2:  // IFH_INIT
            result = handle_init();
            response[1] = 0;
            // Copy interface name to response
            strcpy((char*)&response[2], global_ifh_name);
            break;
            
        case 3:  // IFH_END
            break;
            
        case 4:  // IFH_CONNECT
            // Return success
            response[1] = 0;
            break;
            
        case 5:  // IFH_DISCONNECT
            break;
            
        case 6:  // IFH_SYSINFO
            // Return interface info
            response[1] = 0;
            response[2] = 0x0001;  // Version
            break;
            
        case 0x16:  // IFH_SEND
            // Simulate send - always succeeds
            break;
            
        case 0x17:  // IFH_RECEIVE
            // Return empty response
            response[1] = 0;  // No data
            break;
            
        case 0x1E:  // IFH_GETERROR
            // Return no error
            response[1] = 0;
            break;
            
        case 0x22:  // IFH_SETPARAMETER
            // Accept any parameters
            break;
            
        case 0x23:  // IFH_GETPARAMETER
            // Return empty
            response[1] = 0;
            break;
            
        default:
            // Unsupported command
            break;
    }
    
    return 0;
}
```

---

## IFH Command Codes

| Code | Hex | Name | Description |
|------|-----|------|-------------|
| 2 | 0x02 | IFH_INIT | Initialize interface |
| 3 | 0x03 | IFH_END | Terminate interface |
| 4 | 0x04 | IFH_CONNECT | Connect to ECU |
| 5 | 0x05 | IFH_DISCONNECT | Disconnect from ECU |
| 6 | 0x06 | IFH_SYSINFO | Get system info |
| 22 | 0x16 | IFH_SEND | Send telegram |
| 23 | 0x17 | IFH_RECEIVE | Receive telegram |
| 30 | 0x1E | IFH_GETERROR | Get last error |
| 34 | 0x22 | IFH_SETPARAMETER | Set parameters |
| 35 | 0x23 | IFH_GETPARAMETER | Get parameters |

---

## Global Variables

| Address | Name | Purpose |
|---------|------|---------|
| `DAT_10009e3c` | `global_ifh_name` | Stored interface name |
| `DAT_10009d00` | `work_buffer` | Temporary work buffer |

---

## Error Codes

| Code | Hex | Description |
|------|-----|-------------|
| 0 | 0x00 | Success |
| 29 | 0x1D | Command not supported |

---

## Notes

1. **No Hardware:** This interface performs no actual I/O
2. **Simulation:** All operations succeed without side effects
3. **Testing:** Useful for unit tests and SGBD validation
4. **Minimal:** Only implements essential IFH commands
