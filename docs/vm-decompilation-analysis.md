# EDIABAS VM Decompilation Analysis

Analysis of the BEST2 virtual machine based on Ghidra decompilation of `ebas32.dll` and `Best32.dll`.

## Module Overview

| File | Purpose | Key Functions |
|------|---------|---------------|
| **Best32.dll** | BEST2 Compiler | `__best2Cc`, `__best2Init`, `__best2Config` |
| **ebas32.dll** | EDIABAS Runtime + VM | `FUN_10022700`, `FUN_10022838`, `__api32Job*` |
| **ebas32.exe** | GUI Application (MFC) | Windows UI wrapper |
| **api32.dll** | API Wrapper | Delegates to ebas32.dll |

---

## VM Architecture (from ebas32.dll)

### Main Execution Loop

**Location:** `FUN_10022700` (ebas32.dll)

```c
// Decompiled structure (simplified)
undefined4 __cdecl FUN_10022700(short param_1) {
  local_10 = DAT_10089ffc;  // Opcode count limit
  
  do {
    switch(param_1) {
    case 2:
      param_1 = 1;
    case 1:
      // Fetch next instruction
      sVar2 = FUN_1000f77d(1);
      if (sVar2 == 7) {
        DAT_100d014c = FUN_10023b1c();  // Get bytecode pointer
      }
      
      // Read instruction (2 bytes: opcode + addr_mode)
      FUN_10023b44(&local_18, 2);
      
      // Extract opcode and addressing modes
      bVar4 = (local_17 & 0xf0) >> 4;  // addr_mode_0 (high nibble)
      local_c = local_17 & 0xf;         // addr_mode_1 (low nibble)
      local_8 = local_18;               // opcode
      
      // Get handler for this opcode+modes combination
      DAT_100d0148 = FUN_10022838(local_18, bVar4, local_c);
      
      // Setup operands
      FUN_100229d7(local_17._3_1_, local_c);
      
      // Execute handler
      param_1 = (*DAT_100d0148)(param_1);
      break;
      
    case -3:
      param_1 = 1;
    default:
      // Continue execution with current handler
      param_1 = (*DAT_100d0148)(param_1);
      break;
      
    case -1:
      // Error/exit handling
      uVar3 = FUN_1002213d();
      param_1 = (short)uVar3;
    }
  } while ((param_1 == 2) && (local_10-- != 0));
  
  return param_1;
}
```

### Opcode Handler Lookup

**Location:** `FUN_10022838` (ebas32.dll)

```c
// Decompiled handler lookup
undefined * __cdecl FUN_10022838(uint opcode, byte addr_mode_0, byte addr_mode_1) {
  // Validate opcode range
  if (DAT_10087eba <= (opcode & 0xff)) {
    FUN_100226a0(0, 0, 0x62, opcode & 0xff);  // Error: invalid opcode
  }
  
  uVar2 = opcode & 0xff;
  iVar3 = uVar2 * 0x1c;  // 28 bytes per opcode entry (7 pointers × 4 bytes)
  
  // Debug trace
  if (trace_enabled) {
    FUN_1000fdc4(1, &DAT_1008a000);           // "PC="
    FUN_1000ff9b(1, DAT_100d014c);            // program counter
    FUN_1000fdc4(1, (&PTR_DAT_10088406)[uVar2 * 7]);  // opcode name
    FUN_1000fe1b(1, addr_mode_0);             // addr mode 0
    FUN_1000fe1b(1, addr_mode_1);             // addr mode 1
  }
  
  // Lookup in addressing mode validity tables
  // DAT_10089864, DAT_10089874 - validity tables for addr mode combinations
  
  // Return handler function pointer
  return (&PTR_FUN_10088402)[uVar2 * 7];  // Handler table
}
```

### Key Global Variables

| Address | Name | Purpose |
|---------|------|---------|
| `DAT_10087eba` | `opcode_count` | Maximum valid opcode number |
| `PTR_FUN_10088402` | `opcode_handlers[]` | Array of handler function pointers |
| `PTR_DAT_10088406` | `opcode_names[]` | Array of opcode name strings |
| `DAT_100d0148` | `current_handler` | Currently executing handler |
| `DAT_100d014c` | `program_counter` | Current bytecode position |
| `DAT_10089ffc` | `opcode_limit` | Max opcodes per execution cycle |
| `DAT_10089864` | `addr_mode_valid_0[]` | Addressing mode 0 validity table |
| `DAT_10089874` | `addr_mode_valid_1[]` | Addressing mode 1 validity table |

### Handler Table Structure

Each opcode has a 28-byte entry (7 × 4-byte pointers):

```
Offset  Content
------  -------
0x00    Primary handler function pointer
0x04    Opcode name string pointer
0x08    Handler for addr_mode variant 1
0x0C    Handler for addr_mode variant 2
0x10    Handler for addr_mode variant 3
0x14    Handler for addr_mode variant 4
0x18    Handler for addr_mode variant 5
```

**Total opcodes:** Up to 184 (based on existing documentation)

---

## Operand Processing

**Location:** `FUN_100229d7` (ebas32.dll)

```c
void __cdecl FUN_100229d7(byte operand_type, byte addr_mode) {
  // Allocate operand buffers if needed
  if (DAT_100d176c == NULL) {
    DAT_100d176c = _malloc(DAT_10087ebc);  // Operand buffer 0
  }
  if (DAT_100d1780 == NULL) {
    DAT_100d1780 = _malloc(DAT_10087ebc);  // Operand buffer 1
  }
  
  // Initialize operand state
  DAT_100d1760 = NULL;  // Operand 0 pointer
  DAT_100d1764 = NULL;  // Operand 0 size
  DAT_100d1768 = 0;     // Operand 0 flags
  
  switch(operand_type) {
  case 0:
    break;  // No operand
    
  case 1:  // String/binary operand
    FUN_10023b44(&local_c, 1);
    pbVar2 = FUN_10023a0d(local_c);  // Get register
    iVar3 = FUN_10023a61(pbVar2);
    DAT_100d1760 = *(int **)(iVar3 + 2);  // Data pointer
    DAT_100d1764 = *(uint **)(iVar3 + 6); // Size pointer
    DAT_100d1770 = 8;
    break;
    
  case 2:  // Byte operand
    FUN_10023b44(&local_c, 1);
    pbVar2 = FUN_10023a0d(local_c);
    DAT_100d1760 = *(int **)(pbVar2 + 2);
    DAT_100d1770 = 1;
    DAT_100d1788 = (int)(char)*DAT_100d1760;
    break;
    
  case 3:  // Word (16-bit) operand
    FUN_10023b44(&local_c, 1);
    pbVar2 = FUN_10023a0d(local_c);
    DAT_100d1760 = *(int **)(pbVar2 + 2);
    DAT_100d1770 = 2;
    DAT_100d1788 = (int)(short)*DAT_100d1760;
    break;
    
  case 4:  // Dword (32-bit) operand
    // Similar pattern...
    break;
    
  // Additional cases for float, immediate, indexed, etc.
  }
}
```

### Operand Type Encoding

Based on decompilation analysis:

| Type | Code | Description |
|------|------|-------------|
| None | 0 | No operand |
| String/Binary | 1 | String register reference |
| Byte | 2 | 8-bit value |
| Word | 3 | 16-bit value |
| Dword | 4 | 32-bit value |
| Float | 5 | 64-bit floating point |
| Immediate8 | 6 | 8-bit immediate |
| Immediate16 | 7 | 16-bit immediate |
| Immediate32 | 8 | 32-bit immediate |
| ImmediateStr | 9 | String immediate |
| Indexed | 10+ | Various indexed modes |

---

## Job Execution API

### __api32Job

**Location:** `__api32Job` (ebas32.dll @ 0x1230)

```c
void __cdecl __api32Job(char *ecu, char *job, char *params, char *result_filter) {
  // Calculate param length
  uint len = strlen(params);
  
  // Delegate to internal handler
  FUN_10001ce0(&DAT_1008a5d8,  // Session context
               0,              // Mode: simple job
               ecu,            // ECU/SGBD name
               job,            // Job name
               NULL,           // Binary params
               0,              // Binary param size
               params,         // String params
               len,            // Param length
               result_filter,  // Result filter
               0);             // Flags
}
```

### __api32JobData

```c
void __cdecl __api32JobData(char *ecu, char *job, char *params, 
                            uint param_len, char *result_filter) {
  FUN_10001ce0(&DAT_1008a5d8, 1, ecu, job, NULL, 0, 
               params, param_len, result_filter, 0);
}
```

### __api32JobExt

```c
void __cdecl __api32JobExt(char *ecu, char *job, 
                           void *bin_params, uint bin_len,
                           char *str_params, uint str_len,
                           char *result_filter, uint flags) {
  FUN_10001ce0(&DAT_1008a5d8, 2, ecu, job, 
               bin_params, bin_len, str_params, str_len, 
               result_filter, flags);
}
```

---

## State Machine (Job Processing)

The job execution follows a state machine pattern:

```
STATE_SELECT_ECU → STATE_LOAD_ECU → STATE_INITJOB_ENTRY → 
STATE_INITJOB_CONTINUE → STATE_INITJOB_READY →
STATE_IDENTJOB_ENTRY → STATE_IDENTJOB_CONTINUE → 
STATE_GROUP_IDENTJOB_ENTRY → STATE_GROUP_IDENTJOB_CONTINUE →
STATE_GROUP_IDENTJOB_READY → [Job Execution] → 
STATE_RUNNING → STATE_COMPLETE
```

Key functions:
- `FUN_1000d0a4` - Find job by name
- `FUN_1000d162` - Load job bytecode
- `FUN_1000d30f` - Execute job handler

---

## BEST2 Compiler (Best32.dll)

### Entry Points

| Export | Function | Description |
|--------|----------|-------------|
| `__best2Init` | Initialize compiler | Setup compiler state |
| `__best2Config` | Configure compiler | Set paths, options |
| `__best2Options` | Set options | Compiler flags |
| `__best2Cc` | Compile | Main compilation entry |
| `__best2Rev` | Get revision | Version info |
| `__best2AsmTotal` | Get asm count | Statistics |

### Compiler Strings (Code Generation)

Found in Best32.dll - these are assembly templates used during compilation:

```
move S1,S%X        ; Move string
move F0,F%d        ; Move float
move L0,S0[#%d]    ; Move from indexed string to long
move I0,S0[#%d]    ; Move from indexed string to int
move B0,S0[#%d]    ; Move from indexed string to byte
ergb "%s",B0       ; Result byte
ergw "%s",I0       ; Result word
ergd "%s",L0       ; Result dword
ergy "%s",S1       ; Result binary
ergs "%s",S1       ; Result string
ergr "%s",F0       ; Result real
ergc "%s",B0       ; Result char
ergi "%s",I0       ; Result integer
ergl "%s",L0       ; Result long
clear S1           ; Clear string
atsp %s,#%d        ; Stack access
parb B0,#%d        ; Parameter byte
parw I0,#%d        ; Parameter word
parl L0,#%d        ; Parameter long
parr F0,#%d        ; Parameter real
pars S1,#%d        ; Parameter string
pary S1            ; Parameter binary
```

---

## Error Codes (from decompilation)

Error handler: `FUN_100226a0(severity, subsystem, error_code, param)`

| Code | Meaning |
|------|---------|
| 0x62 | Invalid opcode |
| 0x68 | Memory allocation failed |
| 0x5d | Job not found |
| 0x63 | Job execution error |

---

## Tuning Functions

### hdTuneOpcodeCount

```c
void hdTuneOpcodeCount(short count) {
  // Sets max opcodes executed per cycle
  FUN_100226e0(count);  // → DAT_10089ffc = count
}
```

### hdTuneSeekSteps

```c
void hdTuneSeekSteps(short steps) {
  // Sets table seek step count
  FUN_10023ee0(steps);
}
```

---

## Memory Layout

### Session Context Structure

Base: `DAT_1008a5d8` (passed to all Job functions)

```
Offset  Size  Description
------  ----  -----------
0x02    4     Thread mode flag
0x06    4     Async mode flag
0x10    2     Job mode
0x12    2     Job status
0x16    64    ECU name
0x56    64    Job name
0x96    1024  Binary parameters
0x496   4     Binary param size
0x49a   64KB  String parameters
0x1049a 4     String param size
0x1049e 256   Result filter
0x1059e 4     Execution status
0x105a2 4     Error code
0x105a6 256   Error text
0x109a6 24    Critical section
0x109be HANDLE Semaphore
0x109c6 HANDLE Event (job start)
0x109ca HANDLE Event (job done)
```

---

## Conclusions

1. **VM is table-driven** - opcodes dispatched via function pointer table
2. **184 opcodes** supported (based on existing docs, confirmed by handler table size)
3. **16 addressing modes** - encoded in 2nd byte after opcode (4 bits each)
4. **Jump tables not recovered** - Ghidra couldn't reconstruct large switch statements
5. **Compiler generates assembly** - Best32.dll emits textual mnemonics
6. **Threaded execution** - supports async job execution via Win32 events

### Limitations of Analysis

- Individual opcode implementations not visible (jump table recovery failed)
- Register file structure not directly exposed
- Stack implementation details unclear
- Communication protocol handlers not analyzed

---

## Detailed Function Pseudocode

### Job Execution Entry (`FUN_10001ce0`)

Main entry point for job execution - handles both sync and async modes.

```c
void FUN_10001ce0(
    SessionContext* ctx,    // this
    int mode,               // 0=simple, 1=data, 2=extended
    char* ecu_name,
    char* job_name,
    void* bin_params,
    uint bin_params_len,
    char* str_params,
    uint str_params_len,
    char* result_filter,
    uint flags
) {
    // Check if running in thread mode
    if (ctx->thread_mode == 0) {
        // Synchronous mode
        if (ctx->async_mode != 0) {
            notify_progress(PROGRESS_CONTEXT, 3, 0);
        }
        
        switch (mode) {
            case 0:  // Simple job
                execute_simple_job(ecu_name, job_name, str_params, result_filter);
                return;
            case 1:  // Data job
                execute_data_job(ecu_name, job_name, str_params, str_params_len, result_filter);
                return;
            case 2:  // Extended job
                execute_ext_job(ecu_name, job_name, bin_params, bin_params_len,
                               str_params, str_params_len, result_filter, flags);
                return;
        }
    }
    else {
        // Asynchronous mode - copy params to context and signal worker thread
        WaitForSingleObject(ctx->semaphore, INFINITE);
        
        ctx->job_mode = mode;
        
        // Copy ECU name (max 64 chars)
        memccpy(ctx->ecu_name, ecu_name, 0, 0x40);
        
        // Copy job name (max 64 chars)
        memccpy(ctx->job_name, job_name, 0, 0x40);
        
        // Copy binary params (max 1024 bytes)
        if (bin_params_len > 0x400) {
            bin_params_len = 0x400;
        }
        ctx->bin_params_len = bin_params_len;
        memcpy(ctx->bin_params, bin_params, bin_params_len);
        
        // Copy string params (max 64KB)
        if (str_params_len > 0x10000) {
            str_params_len = 0x10000;
        }
        ctx->str_params_len = str_params_len;
        memcpy(ctx->str_params, str_params, str_params_len);
        
        // Copy result filter (max 256 chars)
        memccpy(ctx->result_filter, result_filter, 0, 0x100);
        
        // Initialize execution state
        ctx->exec_status = 0;
        ctx->error_code = 0xFFFFFFFF;
        strcpy(ctx->error_text, "");
        
        // Signal worker thread
        ResetEvent(ctx->event_done);
        SetEvent(ctx->event_start);
    }
}
```

---

### Find Job by Name (`FUN_1000d0a4`)

Searches for a job in the loaded SGBD file.

```c
uint find_job_by_name(byte* job_name) {
    bool found = false;
    bool error = false;
    int index = 0;
    
    while (index < job_count && !found && !error) {
        // Load job entry from file
        int result = load_job_entry(
            file_handle,           // DAT_100ae720
            job_name_buffer,       // DAT_100ae160
            &job_offset,           // DAT_10083580
            index
        );
        
        if (result == 0) {
            error = true;
        }
        else {
            // Case-insensitive compare
            if (stricmp(job_name, job_name_buffer, 0x40) == 0) {
                found = true;
                job_handler = default_handler;  // FUN_1001ea89
            }
        }
        index++;
    }
    
    if (error) {
        job_offset = 0xFFFFFFFF;
    }
    else {
        job_offset = found ? job_offset : 0;
    }
    
    return job_offset;
}
```

---

### Load Job Entry (`FUN_1000d162`)

Reads job metadata from SGBD file.

```c
int load_job_entry(
    uint file_handle,
    char* job_name_out,
    uint* job_offset_out,
    int job_index
) {
    int result = 0;
    
    if (job_index <= job_count) {
        // Calculate file offset: header_offset + 4 + index * 0x44
        DWORD seek_pos = header_offset + 4 + job_index * 0x44;
        
        // Seek to job entry
        DWORD actual = file_seek(file_handle, seek_pos, SEEK_SET);
        
        if (actual == seek_pos) {
            // Read job entry (0x44 = 68 bytes)
            // Format: name[64] + offset[4]
            int bytes_read = file_read(file_handle, job_entry_buffer, 0x44);
            
            if (bytes_read == 0x44) {
                // Copy job name (max 63 chars + null)
                strncpy(job_name_out, job_entry_buffer, 0x3F);
                
                // Copy job bytecode offset
                *job_offset_out = *(uint*)(job_entry_buffer + 0x40);
                
                result = 1;
            }
        }
    }
    
    return result;
}
```

---

### Job Handler Dispatch (`FUN_1000d30f`)

Executes job bytecode through handler function.

```c
uint execute_job_handler() {
    // Debug: log handler invocation
    if (is_debug_enabled(0, 7)) {
        if (handler_mode == 0) {
            log("  hdlData handler    >");
        }
        else {
            log("Handler input data (new job)...");
            log_newline();
            log("jobName: ");
            log(current_job_name);
            log_newline();
            log("jobPara: ");
            log_int(job_params_len);
            log(" Bytes: ");
            if (job_params_len > 0) {
                log_hex(job_params, job_params_len);
            }
            log_newline();
            log("jobResult: ");
            log(result_filter);
        }
        log_flush();
    }
    
    // Call registered handler function
    short status = (*job_handler)(handler_mode, &job_context, &result_context);
    
    // Debug: log handler result
    if (is_debug_enabled(0, 7)) {
        log("  hdlData handler -> ");
        log_short(status);
        log_flush();
    }
    
    handler_mode = 0;
    
    // Check for special job (VARIANTE)
    if (result_count > 0 && result_context[0] == '!') {
        if (stricmp("INITIALISIERUNG", &result_context[1], 0xFE) == 0) {
            if (result_type == STRING && result_value != 0) {
                need_init = 1;
                log("Run INITIALISIERUNG before next job");
            }
        }
    }
    
    return status;
}
```

---

### Register Lookup (`FUN_10023a0d`)

Finds register entry by ID in register table.

```c
byte* get_register(byte register_id) {
    byte* reg_ptr = &register_table;  // DAT_10087ec0
    
    // Linear search through register table
    // Each entry is 14 bytes (0x0E)
    while (*reg_ptr != register_id) {
        reg_ptr += 0x0E;
        
        if (*reg_ptr == 0xFF) {
            // End of table - invalid register
            error(0, 0, ERROR_INVALID_OPCODE, register_id);
        }
    }
    
    return reg_ptr;
}
```

**Register Table Entry Format (14 bytes):**
```
Offset  Size  Field
------  ----  -----
0x00    1     Register ID
0x01    1     Type flags
0x02    4     Data pointer
0x06    4     Size pointer
0x0A    4     Reserved
```

---

### Initialize Register (`FUN_10023a61`)

Allocates and initializes register storage if needed.

```c
int init_register(int reg_entry) {
    // Check if already allocated
    if (*(int*)(reg_entry + 2) == 0) {
        // Allocate buffer (max_string_size bytes)
        void* buffer = malloc(max_string_size);  // DAT_10087ebc
        *(void**)(reg_entry + 2) = buffer;
        
        if (buffer == NULL) {
            error(0, 0, ERROR_MEMORY_ALLOC, 0xFFFF);
        }
        
        // Zero-initialize buffer
        memset(buffer, 0, max_string_size);
        
        // Set length to 0
        **(uint**)(reg_entry + 6) = 0;
    }
    
    return reg_entry;
}
```

---

### Get Program Counter (`FUN_10023b1c`)

Returns current bytecode execution position.

```c
uint get_program_counter() {
    return bytecode_position;  // DAT_100d0164
}
```

---

### Read Bytecode (`FUN_10023b44`)

Reads bytes from bytecode stream and advances PC.

```c
void read_bytecode(void* dest, uint count) {
    // Check if we need to load more data
    if (bytecode_end <= bytecode_position + count) {
        // Load next bytecode block
        load_bytecode_block(bytecode_position);
    }
    
    // Bounds check
    if (bytecode_end < bytecode_position + count) {
        error(0, 0, ERROR_BYTECODE_OVERFLOW, 1);
    }
    
    // Copy bytes from bytecode buffer
    memcpy(dest, 
           &bytecode_buffer[bytecode_position - bytecode_base],
           count);
    
    // Advance program counter
    bytecode_position += count;
}
```

---

### Error Handler (`FUN_100226a0`)

Reports errors and optionally terminates execution.

```c
int error_handler(
    int severity,       // 0=warning, 1=error, 2=fatal
    int subsystem,      // Module ID
    int error_code,     // Error number
    int param           // Additional parameter
) {
    // Format error message based on code
    switch (error_code) {
        case 0x55:  // String overflow
            log_error("String buffer overflow");
            break;
        case 0x57:  // Table error
            log_error("Table operation error");
            break;
        case 0x58:  // Communication error
            log_error("Communication error");
            break;
        case 0x5B:  // Bytecode overflow
            log_error("Bytecode read past end");
            break;
        case 0x5D:  // Job not found
            log_error("Job not found");
            break;
        case 0x5E:  // IFH error
            log_error("Interface handler error: %d", param);
            break;
        case 0x5F:  // File error
            log_error("File operation error");
            break;
        case 0x60:  // Stack error
            log_error("Stack %s", param == 1 ? "overflow" : "underflow");
            break;
        case 0x62:  // Invalid opcode
            log_error("Invalid opcode: 0x%02X", param);
            break;
        case 0x63:  // Execution error
            log_error("Job execution error");
            break;
        case 0x68:  // Memory allocation
            log_error("Memory allocation failed");
            break;
        case 0x99:  // General error
            log_error("General error");
            break;
        case 0x100: // IFH specific
            log_error("IFH error code: 0x%02X", param);
            break;
    }
    
    // Store in context
    last_error_code = error_code;
    last_error_param = param;
    
    // For fatal errors, longjmp to error handler
    if (severity >= 2) {
        longjmp(error_jmpbuf, error_code);
    }
    
    return error_code;
}
```

---

### Opcode Handler Lookup (Extended) (`FUN_10022838`)

Full handler lookup with addressing mode validation.

```c
void* get_opcode_handler(
    uint opcode,
    byte addr_mode_0,
    byte addr_mode_1
) {
    // Validate opcode range
    if (opcode >= max_opcode_count) {  // DAT_10087eba
        error(0, 0, ERROR_INVALID_OPCODE, opcode);
    }
    
    // Calculate table index (28 bytes per opcode)
    int table_offset = opcode * 0x1C;
    
    // Debug trace
    if (is_trace_enabled()) {
        log("PC=");
        log_hex(program_counter);
        log(" ");
        log(opcode_names[opcode]);      // PTR_DAT_10088406
        log(" ");
        log_byte(addr_mode_0);
        log(",");
        log_byte(addr_mode_1);
        log_flush();
    }
    
    // Get default operand type for this opcode
    byte default_operand = handler_table[table_offset];
    
    // Validate addressing mode 0
    if (addr_mode_0 != 0) {
        byte* valid_modes_0 = &addr_mode_valid_table_0[default_operand * 17];
        if (valid_modes_0[addr_mode_0] == 0) {
            // Invalid addressing mode for operand 0
            error(0, 0, ERROR_INVALID_OPCODE, opcode);
        }
    }
    
    // Validate addressing mode 1
    if (addr_mode_1 != 0) {
        byte* valid_modes_1 = &addr_mode_valid_table_1[default_operand * 17];
        if (valid_modes_1[addr_mode_1] == 0) {
            // Check if this opcode allows this mode
            byte operand_type = handler_table[table_offset + 1 + addr_mode_0];
            if (addr_mode_valid_table_1[operand_type * 17] == 0) {
                error(0, 0, ERROR_INVALID_OPCODE, opcode);
            }
        }
    }
    
    // Return handler function pointer
    return handler_table[table_offset + 4];  // PTR_FUN_10088402
}
```

---

### Session Context Structure (Complete)

```c
typedef struct SessionContext {
    // +0x00
    uint16_t reserved_0;
    
    // +0x02: Thread mode (0=sync, 1=async)
    int32_t thread_mode;
    
    // +0x06: Async notification mode
    int32_t async_mode;
    
    // +0x0A: Reserved
    byte reserved_1[6];
    
    // +0x10: Job mode (0=simple, 1=data, 2=extended)
    int16_t job_mode;
    
    // +0x12: Job status
    int16_t job_status;
    
    // +0x14: Reserved
    byte reserved_2[2];
    
    // +0x16: ECU/SGBD name (64 bytes)
    char ecu_name[64];
    
    // +0x56: Job name (64 bytes)
    char job_name[64];
    
    // +0x96: Binary parameters (1024 bytes max)
    byte bin_params[1024];
    
    // +0x496: Binary params length
    uint32_t bin_params_len;
    
    // +0x49A: String parameters (64KB max)
    char str_params[0x10000];
    
    // +0x1049A: String params length
    uint32_t str_params_len;
    
    // +0x1049E: Result filter (256 bytes)
    char result_filter[256];
    
    // +0x1059E: Execution status
    int32_t exec_status;
    
    // +0x105A2: Error code
    int32_t error_code;
    
    // +0x105A6: Error text (256 bytes)
    char error_text[256];
    
    // +0x106A6: Reserved
    byte reserved_3[768];
    
    // +0x109A6: Critical section (24 bytes)
    CRITICAL_SECTION critical_section;
    
    // +0x109BE: Semaphore handle
    HANDLE semaphore;
    
    // +0x109C2: Reserved
    byte reserved_4[4];
    
    // +0x109C6: Event - job start signal
    HANDLE event_start;
    
    // +0x109CA: Event - job done signal
    HANDLE event_done;
    
} SessionContext;  // Total: ~0x109CE bytes
```

---

### Register Table Entry

```c
typedef struct RegisterEntry {
    byte id;              // +0x00: Register ID (B0-B7, A0-A7, I0-I7, L0-L7, S0-S7, F0-F7)
    byte type;            // +0x01: Type flags
    void* data_ptr;       // +0x02: Pointer to data buffer
    uint32_t* size_ptr;   // +0x06: Pointer to current size
    uint32_t max_size;    // +0x0A: Maximum size (for strings)
} RegisterEntry;  // 14 bytes (0x0E)
```

**Register ID Encoding:**
- `0x00-0x07`: B0-B7 (byte registers)
- `0x10-0x17`: A0-A7 (byte aliases)
- `0x20-0x27`: I0-I7 (word registers)
- `0x30-0x37`: L0-L7 (long registers)
- `0x40-0x47`: S0-S7 (string registers)
- `0x50-0x57`: F0-F7 (float registers)
- `0xFF`: End of table marker

---

## Error Code Reference (Complete)

| Code | Hex | Name | Description |
|------|-----|------|-------------|
| 85 | 0x55 | STRING_OVERFLOW | String buffer overflow |
| 87 | 0x57 | TABLE_ERROR | Table operation failed |
| 88 | 0x58 | COMM_ERROR | Communication error |
| 91 | 0x5B | BYTECODE_OVERFLOW | Read past bytecode end |
| 93 | 0x5D | JOB_NOT_FOUND | Job name not found |
| 94 | 0x5E | IFH_ERROR | Interface handler error |
| 95 | 0x5F | FILE_ERROR | File I/O error |
| 96 | 0x60 | STACK_ERROR | Stack overflow/underflow |
| 98 | 0x62 | INVALID_OPCODE | Invalid opcode |
| 99 | 0x63 | EXEC_ERROR | Execution error |
| 100 | 0x64 | IFH_SPECIFIC | IFH specific error |
| 104 | 0x68 | MEMORY_ALLOC | Memory allocation failed |
| 153 | 0x99 | GENERAL_ERROR | General/unknown error |
