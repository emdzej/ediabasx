# XStd32.dll - Standard Interface Analysis

Decompilation analysis of the EDIABAS Standard serial interface driver.

## Overview

**Purpose:** Serial/COM port communication with diagnostic interfaces (OBD-II adapters, EDIABAS interfaces).

**Protocols:** K-Line (ISO 9141-2, ISO 14230 KWP2000), supports various diagnostic protocols.

**Size:** ~22K lines of decompiled code

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        XStd32.dll                           │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────────┐  │
│  │  IFH Layer  │  │   Protocol   │  │   Gateway/Thread  │  │
│  │  dllCallIFH │→ │  CProtocol   │→ │   CStdGateway     │  │
│  └─────────────┘  └──────────────┘  └───────────────────┘  │
│         │                │                    │             │
│         ▼                ▼                    ▼             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Interface Communication                 │   │
│  │         (COM Port / USB Serial Adapter)             │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

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
uint dllStartupIFH(LPCSTR config_path, uint* ifh_params) {
    char interface_path[260];
    
    // Initialize tracing system
    init_tracing();
    
    // Read trace level from INI file
    UINT trace_level = GetPrivateProfileIntA(
        "Configuration",
        "SystemTraceIfh",
        0,
        config_path
    );
    set_trace_level(trace_level);
    
    log_entry("comsdll", "XSTD::dllStartupIFH", 1);
    
    // Parse interface parameters
    char* ifh_name = parse_params(ifh_params, "IFH");
    if (ifh_name == NULL || ifh_name[0] == '\0') {
        log_error("XSTD::dllStartupIFH", "error", 0x1C);
        return 0x1C;  // Invalid parameter
    }
    
    // Copy interface name
    if (strlen(ifh_name) >= 0x105) {
        return 0x1C;  // Name too long
    }
    strncpy(interface_path, ifh_name, 0x105);
    
    // Load configuration
    load_config("Application", &app_config);
    load_config("_intern_StdApplication", interface_path);
    
    // Append "32.dll" suffix
    strncat(interface_path, "32.dll", 0x104);
    
    // Load interface DLL
    short result = load_interface_dll(interface_path);
    if (result != 0) {
        log_error("dllName", interface_path);
        return result;
    }
    
    // Allocate gateway object (0x330F30 bytes!)
    void* gateway = operator_new(0x330F30);
    if (gateway == NULL) {
        global_gateway = NULL;
    } else {
        global_gateway = CStdGateway_constructor(gateway, NULL);
    }
    
    // Initialize subsystems
    init_ediabas_module("Ediabas", 1);
    start_gateway();
    
    log_exit("XSTD::dllStartupIFH", 1);
    return 0;
}
```

**Key Points:**
- Gateway object is ~3.3MB (0x330F30 bytes)
- Loads a sub-interface DLL dynamically
- Reads configuration from INI file

---

### dllShutdownIFH

```c
void dllShutdownIFH(void) {
    unload_interface_dll();
    
    log_entry("comsdll", "XSTD::dllShutdownIFH", 1);
    
    EnterCriticalSection(&gateway_critical_section);
    
    if (global_gateway != NULL) {
        // Stop gateway threads
        CStdGateway_stop(global_gateway);
        
        // Destroy gateway object
        delete global_gateway;
        global_gateway = NULL;
    }
    
    LeaveCriticalSection(&gateway_critical_section);
    
    log_exit("XSTD::dllShutdownIFH", 1);
}
```

---

### dllCheckIFH

```c
byte dllCheckIFH(short cmd) {
    // Only command 6 (GET_INFO) returns 0 (supported)
    if (cmd == 6) {
        return 0;
    }
    return 0x1D;  // Not supported
}
```

---

### dllCallIFH

Main command dispatcher with critical section protection.

```c
uint dllCallIFH(ushort* request, uint* response) {
    ushort cmd;
    ushort channel;
    
    log_entry("comsdll", "dllCallIFH", 1);
    
    cmd = *request;
    log_command(cmd);
    
    EnterCriticalSection(&gateway_critical_section);
    
    // Initialize response
    *(ushort*)response = cmd;
    channel = request[4];
    *(ushort*)(response + 2) = channel;
    *(ushort*)(response + 1) = 1;  // Channel count
    response[3] = 0;  // Clear error
    
    if (global_gateway == NULL) {
        LeaveCriticalSection(&gateway_critical_section);
        log_error("dllCallIFH", "Gateway not initialized");
        return 0x1C;
    }
    
    // Dispatch command
    switch (cmd) {
        case 0x02:  // IFH_INIT
            result = gateway_init(global_gateway);
            break;
            
        case 0x03:  // IFH_END
            result = gateway_end(global_gateway);
            break;
            
        case 0x04:  // IFH_CONNECT
            result = gateway_connect(global_gateway);
            break;
            
        case 0x05:  // IFH_DISCONNECT
            result = gateway_disconnect(global_gateway);
            break;
            
        case 0x16:  // IFH_SEND_TELEGRAM
            result = gateway_send(global_gateway, request);
            break;
            
        case 0x17:  // IFH_RECEIVE
            result = gateway_receive(global_gateway, response);
            break;
            
        case 0x22:  // IFH_SET_PARAMETER
            result = gateway_set_params(global_gateway, request);
            break;
            
        case 0x23:  // IFH_GET_PARAMETER
            result = gateway_get_params(global_gateway, response);
            break;
            
        case 0x28:  // IFH_OPEN_CHANNEL
            result = gateway_open_channel(global_gateway, request);
            break;
            
        case 0x29:  // IFH_CLOSE_CHANNEL
            result = gateway_close_channel(global_gateway, request);
            break;
            
        default:
            result = 0x1D;  // Unknown command
    }
    
    LeaveCriticalSection(&gateway_critical_section);
    
    log_exit("dllCallIFH", 1);
    return result;
}
```

---

## CProtocol Class

Protocol handling for telegram formatting and parsing.

```c
class CProtocol {
    void* interface;     // +0x0E: Interface pointer
    uint16_t timeout;    // +0x2C: Response timeout
    // ... more fields
    
    short Shutdown() {
        log_entry("CProtocol", "Shutdown", 1);
        // Reset protocol state
        clear_state();
        log_exit("CProtocol", "Shutdown", 1);
        return 0;
    }
    
    short SetParameters(void* params, int size) {
        log_entry("CProtocol", "SetParameters", 1);
        if (size > MAX_PARAMS) {
            log_exit("CProtocol", "SetParameters", 1);
            return ERROR_INVALID_SIZE;
        }
        memcpy(&this->params, params, size);
        log_exit("CProtocol", "SetParameters", 1);
        return 0;
    }
    
    short AnalyzeTelegram(byte* data, int len) {
        log_entry("CProtocol", "AnalyzeTelegram", 0x40);
        
        // Validate telegram format
        if (len < MIN_TELEGRAM_SIZE) {
            log_exit("CProtocol", "AnalyzeTelegram", 0x40);
            return ERROR_INVALID_FORMAT;
        }
        
        // Parse header, check CRC, etc.
        result = parse_telegram(data, len);
        
        log_exit("CProtocol", "AnalyzeTelegram", 0x40);
        return result;
    }
    
    short SendTelegram(byte* data, int len) {
        log_entry("CProtocol", "SendTelegram", 1);
        
        // Send via interface
        result = interface_send(this->interface, data, len);
        
        log_exit("CProtocol", "SendTelegram", 1);
        return result;
    }
    
    short OnSend(byte* data, int len) {
        log_entry("CProtocol", "OnSend", 0x40);
        
        // Set timer for response
        if (need_timer) {
            set_timer(this->timeout);
        }
        
        // Transmit data
        result = transmit(data, len);
        
        log_exit("CProtocol", "OnSend", 0x40);
        return result;
    }
    
    short OnReceive(byte* buffer, int* len) {
        log_entry("CProtocol", "OnReceive", 0x40);
        
        // Wait for response with timeout
        result = wait_response(this->timeout);
        
        if (result == 0) {
            // Copy received data
            *len = received_len;
            memcpy(buffer, rx_buffer, received_len);
        }
        
        log_exit("CProtocol", "OnReceive", 0x40);
        return result;
    }
};
```

---

## CStdGateway Class

Gateway thread for async communication.

```c
class CStdGateway {
    // Offsets from decompilation
    HANDLE thread_handle;        // +0x00
    int state;                   // +0x22
    void* protocol;              // +0x28
    int is_running;              // +0x94
    CRITICAL_SECTION cs;         // +0xA0
    HANDLE shutdown_event;       // +0xBC
    HANDLE ready_event;          // +0xC8
    int channel_slots[256];      // +0x556
    int primary_channel;         // +0x956
    int active_channels;         // +0x95A
    int error_state;             // +0x95E
    uint16_t status;             // +0xA40
    uint16_t flags;              // +0xA42
    // Total size: ~0x330F30 bytes (3.3MB)
    
    short SendTelDirect(int channel, byte slot, int mode, 
                        void* data, int len) {
        log_entry("CStdGateway", "SendTelDirect", 1);
        
        reset_error();
        
        if (!is_connected()) {
            return 7;  // Not connected
        }
        
        if (mode == 1) {
            // Exclusive mode
            if (is_busy()) {
                return 0x48;  // Busy
            }
            
            if (this->primary_channel == 0) {
                this->active_channels = 0x100;
                this->primary_channel = channel;
            } else {
                if (channel != this->primary_channel || 
                    this->active_channels < 0x100) {
                    return 0x49;  // Channel conflict
                }
                this->active_channels = 0x100;
            }
        } else {
            // Shared mode
            if (this->active_channels >= 0x100) {
                return 0x49;
            }
            
            if (this->channel_slots[slot] == 0) {
                this->channel_slots[slot] = channel;
                this->active_channels++;
            } else if (this->channel_slots[slot] != channel) {
                return 0x49;
            }
        }
        
        // Send telegram
        result = send_telegram(0x28, data, len);
        
        if (result != 0) {
            // Clean up on error
            cleanup_channel(slot);
        }
        
        log_exit("CStdGateway", "SendTelDirect", 1);
        return result;
    }
    
    uint Startup(byte* interface_name) {
        log_entry("CStdGateway", "Startup", 1);
        
        // Reset state
        this->error_state = 0;
        this->status = 0;
        this->flags = 0;
        
        if (interface_name != NULL) {
            log_info("Interface:", interface_name);
            
            // Check for special interface
            if (strcmp(interface_name, "SPECIAL") == 0) {
                this->flags |= 1;
            }
        }
        
        // Create events
        this->shutdown_event = CreateEvent(NULL, FALSE, FALSE, NULL);
        this->ready_event = CreateEvent(NULL, TRUE, FALSE, NULL);
        
        // Start gateway thread
        this->thread_handle = CreateThread(
            NULL, 0,
            gateway_thread_proc,
            this,
            0, NULL
        );
        
        log_exit("CStdGateway", "Startup", 1);
        return 0;
    }
    
    void Shutdown(int force) {
        log_entry("CStdGateway", "Shutdown", 1);
        
        // Acquire lock
        EnterCriticalSection(&this->cs);
        this->is_running = FALSE;
        LeaveCriticalSection(&this->cs);
        
        // Signal shutdown
        if (this->shutdown_event != NULL) {
            log_info("Terminate Gateway Thread...");
            SetEvent(this->shutdown_event);
        }
        
        if (force == 0) {
            // Wait for graceful shutdown
            int result = wait_thread_exit(this, 2000);
            if (result != 0) {
                log_info("... Gateway thread terminated");
            } else {
                goto force_kill;
            }
        } else {
force_kill:
            log_info("... Gateway thread killed");
            OutputDebugString("CStdGateway::Shutdown Kill Gateway Thread");
            kill_thread(this, 0);
        }
        
        // Cleanup
        if (this->shutdown_event != NULL) {
            ResetEvent(this->shutdown_event);
        }
        this->status = 0;
        this->flags = 0;
        
        log_exit("CStdGateway", "Shutdown", 1);
    }
};
```

---

## Communication Flow

```
1. dllStartupIFH(config, params)
   ├── Load configuration from INI
   ├── Load sub-interface DLL (e.g., OBD32.dll)
   ├── Create CStdGateway object (3.3MB)
   └── Start gateway thread

2. dllCallIFH(IFH_CONNECT)
   ├── Gateway opens COM port
   ├── Set baud rate, parity, etc.
   └── Initialize protocol

3. dllCallIFH(IFH_SEND_TELEGRAM)
   ├── Protocol formats telegram
   ├── Gateway sends via COM port
   ├── Start response timer
   └── Wait for ACK/response

4. dllCallIFH(IFH_RECEIVE)
   ├── Wait for data with timeout
   ├── Protocol validates response
   └── Return data to caller

5. dllCallIFH(IFH_DISCONNECT)
   ├── Close COM port
   └── Reset protocol state

6. dllShutdownIFH()
   ├── Signal gateway thread to exit
   ├── Wait/kill thread
   └── Free resources
```

---

## Configuration

Read from INI file (EDIABAS.ini):

| Section | Key | Description |
|---------|-----|-------------|
| Configuration | SystemTraceIfh | Trace level (0-7) |
| Application | * | Application-specific settings |

---

## Error Codes

| Code | Hex | Description |
|------|-----|-------------|
| 0 | 0x00 | Success |
| 7 | 0x07 | Not connected |
| 19 | 0x13 | Initialization error |
| 28 | 0x1C | Invalid parameter |
| 29 | 0x1D | Command not supported |
| 72 | 0x48 | Interface busy |
| 73 | 0x49 | Channel conflict |

---

## Notes

1. **Thread Safety:** Uses critical sections for gateway access
2. **Dynamic Loading:** Loads interface DLL at runtime
3. **Large Memory:** Gateway object is ~3.3MB
4. **Async Communication:** Gateway runs in separate thread
5. **Logging:** Extensive trace logging for debugging
