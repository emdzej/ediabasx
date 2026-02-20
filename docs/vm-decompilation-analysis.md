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
