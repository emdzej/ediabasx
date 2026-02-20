# IFH (Interface Handler) Layer

The IFH layer provides hardware communication between EDIABAS and diagnostic interfaces.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│  EDIABAS VM (ebas32.dll)                                │
│  ┌─────────────────────────────────────────────────────┐│
│  │  X* Opcodes (XCONNECT, XSEND, XRECV...)            ││
│  │           ↓                                         ││
│  │  IFH Wrapper Functions (FUN_1002a0c0...)           ││
│  │           ↓                                         ││
│  │  FUN_1002b300 (dllCallIFH wrapper)                 ││
│  └─────────────────────────────────────────────────────┘│
│                          ↓                              │
│  ┌─────────────────────────────────────────────────────┐│
│  │  IFH DLL (e.g., EDIABAS\HARDWARE\OBD\*.DLL)        ││
│  │  - dllCallIFH@8                                    ││
│  │  - dllStartupIFH@8                                 ││
│  │  - dllShutdownIFH@0                                ││
│  │  - dllExitIFH@0                                    ││
│  │  - dllCheckIFH@4                                   ││
│  │  - dllLockIFH@0                                    ││
│  │  - dllUnlockIFH@0                                  ││
│  └─────────────────────────────────────────────────────┘│
│                          ↓                              │
│  ┌─────────────────────────────────────────────────────┐│
│  │  Hardware (K-Line, CAN, MOST, etc.)                ││
│  └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
```

## Message Structure

### Request Buffer (`DAT_100d0580`)

| Offset | Size | Name | Description |
|--------|------|------|-------------|
| 0x00 | 2 | command | IFH command code |
| 0x02 | 2 | flags | Request flags |
| 0x04 | 2 | reserved | Always 0 |
| 0x06 | 2 | channel | Channel handle |
| 0x08 | 2 | length | Data length |
| 0x0A | 4 | data_ptr | Pointer to data buffer |

### Response Buffer (`DAT_100d0448`)

| Offset | Size | Name | Description |
|--------|------|------|-------------|
| 0x00 | 2 | command | Echo of request command |
| 0x02 | 2 | status | Result status (0 = OK) |
| 0x04 | 4 | ??? | Unknown |
| 0x08 | 2 | length | Response data length |
| 0x0A | 4 | data_ptr | Pointer to response data |

## IFH Command Codes

| Code | Function | IFH Operation | VM Opcode |
|------|----------|---------------|-----------|
| 0x0B | `FUN_1002ac80` | ifhConnect (internal) | - |
| 0x0C | `FUN_1002ad40` | ifhSendTelegram | XSEND |
| 0x0D | `FUN_1002ae90` | ifhReceive | XRECV |
| 0x0E | `FUN_1002afd0` | ifhGetBatteryInfo | EOJ |
| 0x14 | `FUN_1002a0c0` | ifhConnect (SGBD) | XCONNECT |
| 0x15 | `FUN_1002a130` | ifhDisconnect | XHANGUP |
| 0x16 | `FUN_1002a260` | ifhReset | XRESET |
| 0x17 | `FUN_1002a2c0` | ifhWarmstart | XBOOT |
| 0x18 | `FUN_1002a320` | ifhRequestState | XSTATE |
| 0x19 | `FUN_1002a380` | ifhRequestKeybytes | XKEYB |
| 0x1A | `FUN_1002a3e0` | ifhInterfaceType | XTYPE |
| 0x1B | `FUN_1002a440` | ifhSetParameter | XSETPAR |
| 0x1C | `FUN_1002a4a0` | ifhSetParameterRaw | XPARRAW |
| 0x1D | `FUN_1002a500` | ifhSetTelPreface | - |
| 0x1E | `FUN_1002a560` | ifhSendTelegramSync | - |
| 0x1F | `FUN_1002a5c0` | ifhSend | - |
| 0x20 | `FUN_1002a620` | ifhReceive | - |
| 0x21 | `FUN_1002a680` | ifhRequTelegramFrequ | XREQUF |
| 0x23 | `FUN_1002a6e0` | ifhStopFreqTelegram | XSTOPF |
| 0x24 | `FUN_1002a740` | ifhDownload | XDOWNL |
| 0x25 | `FUN_1002a7a0` | ifhGetPort | XGETPORT |
| 0x26 | `FUN_1002a800` | ifhIgnition | XIGNIT |
| 0x27 | `FUN_1002a860` | ifhLoopTest | XLOOPT |
| 0x28 | `FUN_1002a8c0` | ifhSetProgramVoltage | XPROG |
| 0x29 | `FUN_1002a920` | ifhRawMode | XRAW |
| 0x2A | `FUN_1002a980` | ifhVersion | XVERS |
| 0x2B | `FUN_1002a9e0` | ifhPowerSupply | XBATT |
| 0x2C | `FUN_1002aa40` | ifhSysInfo | XINFO |
| 0x2D | `FUN_1002aaa0` | ifhSetPort | XSETPORT |
| 0x2E | `FUN_1002ab00` | ifhSIReset | XSIRESET |
| 0x2F | `FUN_1002ab60` | ifhStopTransmit | XSTOPTR |
| 0x30 | `FUN_1002a180` | ifhReadPort | - |
| 0x31 | `FUN_1002a200` | ifhBreak | XREPS |
| 0x32 | `FUN_1002abc0` | ifhOpen | XOPEN |
| 0x33 | `FUN_1002ac20` | ifhClose | XCLOSE |
| 0x36 | `FUN_1002b080` | ifhSwitch | XSWITCH |

## Key Functions

### FUN_1002b300 - dllCallIFH Wrapper

```c
undefined2 __cdecl FUN_1002b300(short *request, short *response) {
    // Copy request to response
    response[0] = request[0];  // command
    response[1] = 0;           // status
    response[2..3] = request[2..3];
    response[4] = request[4];
    response[5] = 0;
    response[6..7] = request[6..7];
    
    // Check if DLL loaded
    if (DAT_100d0598 == 0) return 0x1C;  // IFH_NOT_LOADED
    if (DAT_100d0594 == 0) return 0x13;  // IFH_NOT_INITIALIZED
    
    // Call actual DLL function
    DAT_100d06c0 = 1;  // Lock
    result = (*DAT_100d05b4)(request, response);  // dllCallIFH
    DAT_100d06c0 = 0;  // Unlock
    
    return result;
}
```

### FUN_1002b0e0 - Load IFH DLL

Loads the IFH DLL from `EDIABAS\HARDWARE\<type>\<name>.DLL`.

### FUN_100223b8 - Open Channel

Opens a communication channel (max 16 channels).

### FUN_100224ed - Close Channel

Closes a communication channel.

## Channel Management

- **Max channels:** 16
- **Channel array:** `DAT_100d00dc` (6 bytes per channel)
- **Current channel:** `DAT_100d00d8` (handle)

## Error Codes

| Code | Name | Description |
|------|------|-------------|
| 0x00 | OK | Success |
| 0x13 | IFH_NOT_INITIALIZED | IFH not started |
| 0x1C | IFH_NOT_LOADED | IFH DLL not loaded |
| 0x20 | IFH_INVALID_PARAM | Invalid parameter |
| 0x5E | IFH_ERROR | General IFH error |

## VM Opcode → IFH Flow Example

### XCONNECT (opcode 0x26)

```
1. FUN_100211c6 (XCONNECT handler)
   │
   ├─→ FUN_100225a8(0, 1)        // Close all channels
   │
   ├─→ FUN_1002a0c0(SGBD_name)   // ifhConnect
   │   │
   │   ├─→ Set DAT_100d0580 = 0x14
   │   ├─→ Set SGBD name as parameter
   │   └─→ FUN_1002b300()        // Call dllCallIFH
   │
   └─→ FUN_100223b8(1)           // Open channel
```

### XSEND (opcode 0x2A)

```
1. FUN_100214e8 (XSEND handler)
   │
   ├─→ FUN_10010182()            // Log "XSEND..."
   │
   ├─→ FUN_1002ad40()            // ifhSendTelegram
   │   │
   │   ├─→ Set DAT_100d0580 = 0x0C
   │   ├─→ Set telegram data
   │   └─→ FUN_1002b300()        // Call dllCallIFH
   │
   └─→ Check result, set error if needed
```
