# XEnet32.dll - Ethernet Interface Analysis

Decompilation analysis of the EDIABAS Ethernet interface driver for BMW ENET/HSFZ protocol.

## Overview

**Purpose:** Ethernet-based diagnostic communication with BMW vehicles using the HSFZ protocol over TCP/IP.

**Protocol:** BMW ENET (Ethernet diagnostics), also known as HSFZ (High-Speed Functional Zero)

**Ports:**
- **Diagnostic Port:** 6801 (0x1A91) - Main diagnostic communication
- **Control Port:** 6811 (0x1A9B) - Vehicle control functions

**Size:** ~36K lines of decompiled code

---

## Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                          XEnet32.dll                              │
├──────────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐     ┌─────────────────────────────────────┐ │
│  │  IFHController  │────▶│         CBMWGateway                 │ │
│  │   (API Layer)   │     │  (Communication & Protocol Mgmt)    │ │
│  └─────────────────┘     └─────────────────────────────────────┘ │
│           │                         │                             │
│           │              ┌──────────┴──────────┐                 │
│           │              ▼                      ▼                 │
│           │     ┌───────────────┐     ┌───────────────────┐      │
│           │     │CBMWDiagnostic │     │    CChannel       │      │
│           │     │   Channel     │     │ (TCP Connection)  │      │
│           │     └───────────────┘     └───────────────────┘      │
│           │              │                      │                 │
│           ▼              ▼                      ▼                 │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │              TCP/IP Stack (Winsock)                       │    │
│  │      Port 6801 (Diagnostic)  |  Port 6811 (Control)       │    │
│  └──────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │   BMW Vehicle     │
                    │   (ENET Gateway)  │
                    │   IP: typically   │
                    │   169.254.x.x     │
                    └───────────────────┘
```

---

## Exported Functions (IFHController)

| Export | Description |
|--------|-------------|
| `dllStartupIFH` | Initialize interface, create channels |
| `dllShutdownIFH` | Shutdown, cleanup resources |
| `dllCheckIFH` | Check interface capability |
| `dllCallIFH` | Execute IFH command |
| `dllExitIFH` | Exit interface |

---

## IFHController Class

Main API handler for all IFH commands.

```c
class IFHController {
    // State
    bool initialized;            // DAT_1004ec48
    bool fatal_error;            // DAT_1004ec4c
    uint16_t current_state;      // DAT_100280cc
    uint16_t command_code;       // DAT_100280ce
    
    // Channels (max 32)
    void* channels[32];          // DAT_1004eb5c
    
    // Parameters
    uint16_t param_count;        // DAT_1002d2b0
    byte params[200];            // DAT_1002d1e8
    
    uint Startup(LPCSTR config_path, uint* params) {
        log_entry("IFHController::Startup");
        
        if (is_internal_call()) {
            log("IFHController::Startup - INTERNAL");
            return 1;
        }
        
        // Initialize tracing
        init_trace_system();
        init_console("IFH 0000");
        
        // Load configuration
        result = load_config(&config_context);
        if (result != 0) {
            return result + 0x95;  // Offset error code
        }
        
        // Initialize critical sections
        init_critical_section(&gateway_cs);
        init_channels();
        
        // Clear channel buffer (64KB)
        memset(channel_buffer, 0, 0xFFFF);
        
        initialized = true;
        return 0;
    }
    
    void Shutdown() {
        if (!initialized) return;
        
        log_entry("IFHController::Shutdown");
        
        // Cleanup channels
        cleanup_channels();
        
        // Cleanup gateway
        cleanup_critical_section(&gateway_cs);
        cleanup_config(&config_context);
        
        // Cleanup trace
        cleanup_trace();
        dllExitIFH();
        
        // Cleanup internal state
        cleanup_internal(internal_context);
        
        initialized = false;
    }
    
    uint Init() {
        log_entry("IFHController::Init");
        
        current_state = 1;
        command_code = 1;
        
        init_critical_section(&gateway_cs);
        result = init_channels();
        
        current_state = 0;
        command_code = 0xFFFF;
        
        return result;
    }
    
    uint16_t End() {
        log_entry("IFHController::End");
        
        command_code = 0xFFFF;
        current_state = 0;
        
        cleanup_channels();
        cleanup_internal(internal_context);
        cleanup_critical_section(&gateway_cs);
        
        current_state = 1;
        return 0;
    }
    
    uint GetChannel(uint16_t channel_id) {
        // Validate channel ID (1-32)
        if (channel_id == 0 || channel_id > 0x20) {
            return 0;
        }
        
        if (channels[channel_id] == NULL) {
            return 0;
        }
        
        return get_channel_handle(channels[channel_id]);
    }
    
    short SetParameters(uint16_t channel_id, short* params, int size) {
        log_entry("IFHController::SetParameters on Ch:%d", channel_id);
        
        if (fatal_error) return 0;
        
        if (channel_id == 0 || channel_id > 0x20 || 
            channels[channel_id] == NULL) {
            return 0x39;  // Invalid channel
        }
        
        result = channel_set_params(channels[channel_id], params, size);
        
        if (result == 0) {
            // Store parameters locally
            param_count = min(size, 200);
            memcpy(local_params, params, param_count);
        }
        
        return result;
    }
    
    short Connect() {
        log_entry("IFHController::Connect");
        
        command_code = 0x14;  // IFH_CONNECT
        current_state = 1;
        
        if (fatal_error) {
            current_state = 0;
            return 0;
        }
        
        if (!initialized) {
            current_state = 2;
            last_error = 0x13;  // Not initialized
            return 0x13;
        }
        
        last_error = gateway_connect(&gateway_context);
        current_state = (last_error != 0) ? 2 : 0;
        
        return last_error;
    }
    
    void Disconnect() {
        log_entry("IFHController::Disconnect");
        
        command_code = 0x15;  // IFH_DISCONNECT
        current_state = 0;
        
        if (!initialized || fatal_error) return;
        
        gateway_disconnect(&gateway_context);
        reset_channels();
        init_channels();
    }
    
    short SendTelegram(uint16_t channel_id, void* data, int len) {
        log_entry("IFHController::SendTelegram on Ch:%d", channel_id);
        
        if (fatal_error) return 0x1B;
        
        if (channel_id == 0 || channel_id > 0x20 ||
            channels[channel_id] == NULL) {
            return 0x39;
        }
        
        return channel_send(channels[channel_id], data, len);
    }
    
    short Send(uint16_t channel_id, void* data, int len) {
        log_entry("IFHController::Send on Ch:%d", channel_id);
        
        if (fatal_error) return 0x1B;
        
        if (channel_id == 0 || channel_id > 0x20 ||
            channels[channel_id] == NULL) {
            return 0x39;
        }
        
        return channel_send_raw(channels[channel_id], data, len);
    }
    
    uint Receive(uint16_t channel_id) {
        log_entry("IFHController::Receive on Ch:%d", channel_id);
        
        if (fatal_error) return 0x1B;
        
        if (channel_id == 0 || channel_id > 0x20 ||
            channels[channel_id] == NULL) {
            return 0x39;
        }
        
        return channel_receive(channels[channel_id]);
    }
};
```

---

## CBMWGateway Class

BMW-specific gateway handling ENET protocol.

```c
class CBMWGateway {
    // Offsets from decompilation
    void* diag_channel;          // +0x106E2
    int channel_slots[256];      // +0x10722 (14 bytes each)
    int primary_slot[14];        // +0x11522
    int active_channels;         // +0x11530
    int error_flag;              // +0x11834
    
    short GetIgnition() {
        // Read ignition status from vehicle
        result = send_control_request(IGNITION_STATUS);
        if (result != 0) {
            log_error("CBMWGateway::GetIgnition - ERROR reading ign_kl15");
            return result;
        }
        
        // Parse response
        if (response_len < expected_len) {
            log_error("CBMWGateway::GetIgnition - ERROR: wrong response length");
            return ERROR_INVALID_RESPONSE;
        }
        
        return parse_ignition_status(response);
    }
    
    short GetPowerSupply() {
        log_entry("CBMWGateway::GetPowerSupply");
        
        // Query vehicle power status
        return query_power_status();
    }
    
    short SendEtherTel(void* channel_info, void* telegram, int mode, int flags) {
        byte slot;
        int channel_id;
        
        // Get slot number based on protocol version
        if (protocol_version == 0) {
            slot = telegram[10];  // Newer protocol
        } else {
            slot = telegram[7];   // Legacy protocol
        }
        
        channel_id = *(int*)(channel_info + 4);
        
        if (mode == 1) {
            // Physical addressing mode
            if (this->channel_slots[slot * 14 + 4] == 0) {
                // New slot allocation
                copy_channel_info(slot, channel_info);
                this->channel_slots[slot * 14 + 4] = channel_id;
                this->active_channels++;
            } else if (this->channel_slots[slot * 14 + 4] != channel_id) {
                log_error("CBMWGateway::SendEtherTel - Physical address conflict");
                return 0x49;  // Channel conflict
            }
        } else {
            // Functional addressing mode
            if (is_busy()) {
                return 0x48;  // Busy
            }
            
            if (this->active_channels == 0) {
                // First functional channel
                this->active_channels = 0x100;
                copy_channel_info(&this->primary_slot, channel_info);
            } else if (channel_id != this->primary_slot[4] ||
                       this->active_channels < 0x100) {
                log_error("CBMWGateway::SendEtherTel - Functional address conflict");
                return 0x49;
            }
        }
        
        // Send telegram via diagnostic channel
        if (this->error_flag == 1) {
            return 0;  // Skip on error
        }
        
        result = tcp_send(this->diag_channel, &telegram[4], telegram[0x1000A], flags);
        if (result != 0) {
            // Cleanup on error
            if (mode != 1 && this->primary_slot[4] == channel_id) {
                clear_channel_info(&this->primary_slot);
                this->active_channels = 0;
            }
            
            log_error("CBMWGateway::run - ERROR:Couldn't send telegram");
            return 4;
        }
        
        // Set tester address in telegram (0xF1)
        if (protocol_version == 0) {
            telegram[10] = 0xF1;
        } else {
            telegram[7] = 0xF1;
        }
        
        return 0;
    }
};
```

---

## CBMWDiagnosticChannel Class

Handles diagnostic message flow.

```c
class CBMWDiagnosticChannel {
    void* connection;
    uint16_t timeout;
    
    void TriggerReceive() {
        log_entry("CBMWDiagnosticChannel::TriggerReceive (Async)");
        // Trigger async receive
        trigger_async_recv(this->connection);
    }
    
    void TriggerReceiveSync() {
        log_entry("CBMWDiagnosticChannel::TriggerReceive (Sync)");
        // Synchronous receive
        recv_sync(this->connection, this->timeout);
    }
    
    void OnReceive(void* data, int len) {
        log_entry("CBMWDiagnosticChannel::OnReceive (Callback)");
        // Process received diagnostic message
        process_diagnostic_response(data, len);
    }
    
    void OnReceiveComplete() {
        log_entry("CBMWDiagnosticChannel::OnReceive (Complete)");
        // Notify completion
        signal_receive_complete();
    }
    
    void OnErrorReceive(int error_code) {
        log_entry("CBMWDiagnosticChannel::OnErrorReceive");
        // Handle receive error
        set_error_state(error_code);
    }
};
```

---

## CChannel Class

TCP connection management.

```c
class CChannel {
    SOCKET socket;
    char* remote_host;
    uint16_t remote_port;
    bool connected;
    
    void OnConnect() {
        log("CChannel::OnConnect : Connected to %s:%d", 
            remote_host, remote_port);
        connected = true;
    }
    
    void OnDisconnect() {
        log("CChannel::OnDisconnect : Disconnected from %s:%d",
            remote_host, remote_port);
        connected = false;
    }
    
    void OnSend(int bytes_sent) {
        log("CChannel::OnSend : %lu bytes sent", bytes_sent);
    }
    
    void OnReceive(int bytes_received) {
        log("CChannel::OnReceive : %lu bytes received", bytes_received);
    }
    
    void OnErrorConnect(int error) {
        log("CChannel::OnErrorConnect : Connection error %d", error);
    }
    
    void OnErrorSend(int error) {
        log("CChannel::OnErrorSend : Send error %d", error);
    }
    
    void OnErrorReceive(int error) {
        log("CChannel::OnErrorReceive : Receive error %d", error);
    }
};
```

---

## Network Configuration

From INI file `[XEthernet]` section:

| Key | Default | Description |
|-----|---------|-------------|
| `DiagnosticPort` | 6801 | Diagnostic communication port |
| `ControlPort` | 6811 | Vehicle control port |
| `TimeoutConnect` | varies | Connection timeout (ms) |

---

## HSFZ Protocol Overview

BMW ENET uses the HSFZ (High-Speed Functional Zero) protocol:

### Frame Structure

```
┌─────────┬─────────┬─────────┬─────────┬─────────────────┐
│ Length  │  Type   │  Flags  │  Addr   │    Payload      │
│ (4 bytes)│(2 bytes)│(1 byte) │(1 byte) │   (variable)    │
└─────────┴─────────┴─────────┴─────────┴─────────────────┘
```

### Message Types

| Type | Name | Description |
|------|------|-------------|
| 0x01 | Diagnostic Request | UDS request to ECU |
| 0x02 | Diagnostic Response | UDS response from ECU |
| 0x10 | Vehicle ID Request | Query VIN/ident |
| 0x11 | Vehicle ID Response | VIN/ident response |

### Addressing

| Address | Description |
|---------|-------------|
| 0xF1 | Diagnostic Tester (external tool) |
| 0x10-0xEF | ECU physical addresses |
| 0xDF | Functional broadcast |

---

## Communication Flow

```
1. Startup
   ├── Load configuration from INI
   ├── Initialize channel array (32 slots)
   └── Create gateway objects

2. Connect (IFH_CONNECT = 0x14)
   ├── Open TCP socket to vehicle (169.254.x.x:6801)
   ├── Establish diagnostic session
   └── Query ignition status

3. Open Channel (IFH_OPEN_CHANNEL = 0x28)
   ├── Allocate channel slot
   ├── Configure channel parameters
   └── Return channel handle

4. Send Telegram (IFH_SEND_TELEGRAM = 0x16)
   ├── Format HSFZ frame
   ├── Send via TCP socket
   └── Wait for acknowledgment

5. Receive (IFH_RECEIVE = 0x17)
   ├── Wait for response with timeout
   ├── Parse HSFZ frame
   └── Return diagnostic data

6. Close Channel (IFH_CLOSE_CHANNEL = 0x29)
   ├── Free channel slot
   └── Cleanup resources

7. Disconnect (IFH_DISCONNECT = 0x15)
   ├── Close TCP connections
   └── Reset channel state

8. Shutdown
   ├── Signal all threads to exit
   ├── Close sockets
   └── Free memory
```

---

## Error Codes

| Code | Hex | Description |
|------|-----|-------------|
| 0 | 0x00 | Success |
| 4 | 0x04 | Send failed |
| 7 | 0x07 | Not connected |
| 19 | 0x13 | Not initialized |
| 27 | 0x1B | Fatal error active |
| 29 | 0x1D | Command not supported |
| 57 | 0x39 | Invalid channel |
| 72 | 0x48 | Interface busy |
| 73 | 0x49 | Channel conflict |

---

## Global Variables

| Address | Name | Purpose |
|---------|------|---------|
| `DAT_1004ec48` | `initialized` | Interface initialized flag |
| `DAT_1004ec4c` | `fatal_error` | Fatal error flag |
| `DAT_100280cc` | `current_state` | Current operation state |
| `DAT_100280ce` | `command_code` | Current IFH command |
| `DAT_1004eb5c` | `channels[]` | Channel pointer array (32) |
| `DAT_10051574` | `protocol_version` | HSFZ protocol version |
| `DAT_10051580` | `is_busy` | Busy flag |

---

## Notes

1. **BMW Specific:** This interface is specifically for BMW ENET diagnostics
2. **TCP/IP Based:** Uses standard Windows sockets (Winsock2)
3. **Multi-Channel:** Supports up to 32 simultaneous channels
4. **HSFZ Protocol:** High-Speed Functional Zero for fast diagnostics
5. **Link-Local:** Typically uses 169.254.x.x addresses (APIPA)
6. **Dual Port:** Separate ports for diagnostic (6801) and control (6811)
