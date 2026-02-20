# EDIABAS Interface Drivers

Analysis of decompiled EDIABAS interface handler (IFH) DLLs from Ghidra.

## Overview

EDIABAS uses pluggable interface drivers (IFH DLLs) for communication with diagnostic hardware. Each driver implements the standard IFH API.

## Available Drivers

| Driver | Purpose | Protocol | Size |
|--------|---------|----------|------|
| [XEnet32](./xenet32-analysis.md) | BMW Ethernet diagnostics | HSFZ/ENET | ~36K lines |
| [XStd32](./xstd32-analysis.md) | Standard serial interface | K-Line, KWP2000 | ~22K lines |
| [XNul32](./xnul32-analysis.md) | Null/dummy interface | None (simulation) | ~5.7K lines |

## IFH API

All interface drivers export the same API:

| Export | Description |
|--------|-------------|
| `dllStartupIFH` | Initialize interface |
| `dllShutdownIFH` | Shutdown interface |
| `dllCheckIFH` | Check capability |
| `dllCallIFH` | Execute command |

## Command Codes

| Code | Hex | Name | Description |
|------|-----|------|-------------|
| 2 | 0x02 | IFH_INIT | Initialize |
| 3 | 0x03 | IFH_END | Terminate |
| 4 | 0x04 | IFH_CONNECT | Connect to vehicle |
| 5 | 0x05 | IFH_DISCONNECT | Disconnect |
| 6 | 0x06 | IFH_SYSINFO | Get system info |
| 22 | 0x16 | IFH_SEND_TELEGRAM | Send diagnostic telegram |
| 23 | 0x17 | IFH_RECEIVE | Receive response |
| 30 | 0x1E | IFH_GETERROR | Get last error |
| 34 | 0x22 | IFH_SETPARAMETER | Set parameters |
| 35 | 0x23 | IFH_GETPARAMETER | Get parameters |
| 40 | 0x28 | IFH_OPEN_CHANNEL | Open channel |
| 41 | 0x29 | IFH_CLOSE_CHANNEL | Close channel |

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    ebas32.dll                           │
│                  (EDIABAS Runtime)                      │
└────────────────────────┬────────────────────────────────┘
                         │
                         │ IFH API
                         ▼
┌─────────────┬─────────────────┬─────────────────────────┐
│  XEnet32    │     XStd32      │       XNul32            │
│  (Ethernet) │    (Serial)     │     (Simulator)         │
└─────────────┴─────────────────┴─────────────────────────┘
      │               │                    │
      ▼               ▼                    ▼
┌───────────┐  ┌─────────────┐      ┌───────────┐
│ TCP/IP    │  │ COM Port    │      │   None    │
│ Winsock   │  │ Serial API  │      │           │
└───────────┘  └─────────────┘      └───────────┘
```

## Common Error Codes

| Code | Hex | Description |
|------|-----|-------------|
| 0 | 0x00 | Success |
| 7 | 0x07 | Not connected |
| 19 | 0x13 | Not initialized |
| 27 | 0x1B | Fatal error |
| 28 | 0x1C | Invalid parameter |
| 29 | 0x1D | Not supported |
| 57 | 0x39 | Invalid channel |
| 72 | 0x48 | Busy |
| 73 | 0x49 | Channel conflict |
