# EDIABAS VM Opcode Handlers - Detailed Analysis

Reverse-engineered opcode handlers from `ebas32.dll` decompilation.

## VM State Variables

### CPU Flags
| Address | Name | Description |
|---------|------|-------------|
| `DAT_100d1740` | Zero Flag (ZF) | Set when result is zero |
| `_DAT_100d1742` | Carry Flag (CF) | Set on unsigned overflow/borrow |
| `DAT_100d1744` | Sign Flag (SF) | Set when result is negative |
| `DAT_100d1746` | Overflow Flag (OF) | Set on signed overflow |

### Operand Pointers
| Address | Name | Description |
|---------|------|-------------|
| `DAT_100d1760` | `operand0_ptr` | Destination operand pointer |
| `DAT_100d1764` | `operand0_len_ptr` | Pointer to operand0 length |
| `DAT_100d1768` | `operand0_offset` | Operand0 byte offset |
| `DAT_100d1770` | `operand0_type` | Operand0 type code |
| `DAT_100d1774` | `operand1_ptr` | Source operand pointer |
| `DAT_100d1778` | `operand1_len_ptr` | Pointer to operand1 length |
| `DAT_100d177c` | `operand1_offset` | Operand1 byte offset |
| `_DAT_100d178c` | `operand_size` | Size for indexed operations |
| `DAT_100d1788` | `immediate_value` | Immediate operand value |
| `DAT_100d1790` | `operation_size` | Size of operation in bytes |

### Stack & Execution
| Address | Name | Description |
|---------|------|-------------|
| `DAT_100d1794` | `stack_pointer` | Return address stack pointer |
| `DAT_100d17a0` | `return_stack[]` | Return address stack (2048 bytes) |
| `DAT_100d1748` | `nesting_level` | Subroutine nesting depth |
| `DAT_100d014c` | `program_counter` | Current bytecode position |

### Special Registers
| Address | Name | Description |
|---------|------|-------------|
| `DAT_100d174a` | `reg_flag` | Register comparison flag |
| `DAT_100d174c` | `reg_value` | Register comparison value |
| `DAT_100d1750` | `temp_register` | Temporary calculation register |

---

## Identified Opcode Handlers

### Data Movement

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10023f01` | ? | **MOVE** | Copy data: `memcpy(dest, src, size)` |
| `FUN_10023f76` | ? | **CLEAR** | Zero memory: `memset(dest, 0, size)` |

### Arithmetic Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10023fc9` | ? | **COMP** | Compare (subtract without storing) |
| `FUN_100240f6` | ? | **SUB** | Subtract: `dest = dest - src` |
| `FUN_10024229` | ? | **SUBC** | Subtract with carry |
| `FUN_10024353` | ? | **ADD** | Add: `dest = dest + src` |
| `FUN_10024481` | ? | **ADDC** | Add with carry |

### Logical Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_1002483d` | ? | **ANDS** | AND (compare only, no store) |
| `FUN_1002489d` | ? | **AND** | Bitwise AND (compare only) |
| `FUN_100248fe` | ? | **OR** | Bitwise OR: `dest |= src` |
| `FUN_1002495e` | ? | **XOR** | Bitwise XOR: `dest ^= src` |
| `FUN_100249be` | ? | **NOT** | Bitwise NOT: `dest = ~dest` |

### Shift Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10024da2` | ? | **ASR** | Arithmetic shift right (sign extend) |
| `FUN_10024e78` | ? | **LSR** | Logical shift right (zero fill) |
| `FUN_10024f38` | ? | **ASL/LSL** | Shift left |

### Unconditional Control Flow

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10024a17` | ? | **JMP** | Unconditional jump |
| `FUN_10024a30` | ? | **JTSR** | Jump to subroutine (CALL) |
| `FUN_10024aac` | ? | **RET** | Return from subroutine |
| `FUN_10024fec` | ? | **NOP** | No operation |

### Conditional Jumps (Flags-based)

| Function | Opcode | Mnemonic | Condition |
|----------|--------|----------|-----------|
| `FUN_10024b43` | ? | **JNC** | Jump if No Carry (CF=0) |
| `FUN_10024b68` | ? | **JC** | Jump if Carry (CF=1) |
| `FUN_10024b8d` | ? | **JNZ** | Jump if Not Zero (ZF=0) |
| `FUN_10024bb2` | ? | **JO** | Jump if Overflow (OF=1) |
| `FUN_10024bd7` | ? | **JNO** | Jump if No Overflow (OF=0) |
| `FUN_10024bfc` | ? | **JN/JM** | Jump if Negative (SF=1) |
| `FUN_10024c21` | ? | **JP** | Jump if Positive (SF=0) |
| `FUN_10024d1e` | ? | **JBE** | Jump if Below/Equal (CF=0 && ZF=0) |
| `FUN_10024d4e` | ? | **JA** | Jump if Above (CF=1 \|\| ZF=1) |

### Flag Manipulation

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10024d7e` | ? | **CLC** | Clear Carry flag |
| `FUN_10024d90` | ? | **STC** | Set Carry flag |

### Stack Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10024ff5` | ? | **PUSH** | Push operand onto stack |
| `FUN_10025068` | ? | **POP** | Pop operand from stack |

### String Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_100250d2` | ? | **SCMP** | String compare (sets flags) |
| `FUN_1002517c` | ? | **SCAT** | String concatenate (append) |
| `FUN_1002520d` | ? | **SCPY** | String copy (with null term) |
| `FUN_10025299` | ? | **SCUT** | String cut/truncate |

### Byte Order Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_100252e1` | ? | **SWAP** | Byte swap (endianness conversion) |

### Result Output (ERG*)

| Function | Type Code | Mnemonic | Description |
|----------|-----------|----------|-------------|
| `FUN_1002558a` | 0 | **ERGC** | Output signed char result |
| `FUN_10025503` | 1 | **ERGB** | Output unsigned byte result |
| `FUN_10025699` | 2 | **ERGW** | Output word (16-bit) result |
| `FUN_10025611` | 3 | **ERGL** | Output long (32-bit) result |
| `FUN_100257a8` | 4 | **ERGI** | Output signed integer result |
| `FUN_10025721` | 5 | **ERGD** | Output unsigned dword result |
| `FUN_100258b8` | 6 | **ERGS** | Output string result |
| `FUN_1002599f` | 7 | **ERGY** | Output binary result |
| `FUN_1002582f` | 8 | **ERGR** | Output real (double) result |

### Result Structure (DAT_100d226c)

```c
struct Result {
    int32_t  flags;          // offset 0x00 - set to 1 when valid
    int32_t  row_index;      // offset 0x04 - DAT_100d0204 value
    char     name[256];      // offset 0x0C - result name
    int32_t  type;           // offset 0x10C - type code (0-8)
    union {                  // offset 0x110 - value
        uint8_t  byte_val;
        uint16_t word_val;
        uint32_t dword_val;
        double   real_val;
        char     string_val[...];
        uint8_t  binary_val[...];
    } value;
};
```

### Register Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10025b1c` | ? | **LDRG** | Load register value |
| `FUN_10025afe` | ? | **STRG** | Store register value |
| `FUN_10025b38` | ? | **SETRG** | Set register compare mode |
| `FUN_10025b67` | ? | **CLRRG** | Clear register compare mode |
| `FUN_10025b82` | ? | **JRG** | Jump if register matches |
| `FUN_10025bef` | ? | **JNRG** | Jump if register doesn't match |

### Conversion Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10025c50` | ? | **ATOI** | ASCII to integer (hex: 0x, binary: 0y) |

### Table Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10025a56` | ? | **TABSEEK** | Search in table |

### Control

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10025a44` | ? | **NEWSET** | Start new result set |

---

## Handler Implementation Pattern

All handlers follow this pattern:

```c
undefined4 handler_function(void) {
    // 1. Access operands via global pointers
    //    DAT_100d1760 (dest), DAT_100d1774 (src)
    //    DAT_100d1790 (size)
    
    // 2. Perform operation
    // ...
    
    // 3. Update flags if needed
    FUN_10028d4d(result_ptr, size);  // Updates sign/zero flags
    
    // 4. Return status
    return CONCAT22(high_word, 2);  // 2 = continue execution
                                    // 1 = result ready, yield
                                    // -1 = error
}
```

## Flag Update Function

`FUN_10028d4d(void* data, int size)` - analyzes data and sets:
- `DAT_100d1740` (Zero Flag) - if all bytes are 0
- `DAT_100d1744` (Sign Flag) - if MSB is set

---

## Execution Loop States

| Value | Meaning |
|-------|---------|
| 2 | Continue execution |
| 1 | Result ready, yield to caller |
| -1 | Error/Exit |
| -3 | Continue after interrupt |

---

---

## IFH (Interface Handler) Layer

The VM communicates with hardware through the IFH layer, loaded as a DLL.

### IFH DLL Exports
```c
dllCallIFH@8     // Main communication function
dllExitIFH@0     // Cleanup
dllCheckIFH@4    // Check status
dllShutdownIFH@0 // Shutdown
dllStartupIFH@8  // Startup
dllUnlockIFH@0   // Unlock
dllLockIFH@0     // Lock
```

### IFH Internal Functions (called by VM)

| Function | String | Description |
|----------|--------|-------------|
| `FUN_100210aa` | `ifhInit...` | Initialize IFH |
| `FUN_10021111` | `ifhBreak...` | Break communication |
| `FUN_1002116a` | `ifhEnd...` | End IFH session |
| `FUN_100211c6` | `ifhConnect...` | Connect to ECU |
| `FUN_1002123a` | `ifhDisconnect...` | Disconnect from ECU |
| `FUN_10021296` | `ifhSysInfo...` | Get system info |
| ? | `ifhSetParameter...` | Set parameter |
| ? | `ifhSetParameterRaw...` | Set raw parameter |
| ? | `ifhSetTelPreface...` | Set telegram preface |
| ? | `ifhSendTelegram...` | Send telegram |
| ? | `ifhSendTelegramFrequent...` | Send frequent telegram |
| ? | `ifhSend...` | Send data |
| ? | `ifhReceive...` | Receive data |
| ? | `ifhRequTelegramFrequ...` | Request frequent telegram |
| ? | `ifhStopFreqTelegram...` | Stop frequent telegram |
| ? | `ifhRequestKeybytes...` | Request keybytes |
| ? | `ifhRequestState...` | Request state |
| ? | `ifhWarmstart...` | Warmstart |
| ? | `ifhReset...` | Reset |
| ? | `ifhInterfaceType...` | Get interface type |
| ? | `ifhVersion...` | Get version |
| ? | `ifhPowerSupply...` | Check power supply |
| ? | `ifhDownload...` | Download |
| ? | `ifhGetPort...` | Get port info |
| ? | `ifhIgnition...` | Check ignition |
| ? | `ifhLoopTest...` | Loopback test |
| ? | `ifhSetProgramVoltage...` | Set programming voltage |
| ? | `ifhRawMode...` | Raw mode |

### IFH Command Codes

Commands are sent via `_DAT_100d0580`:

| Code | Description |
|------|-------------|
| 0x16 | ? |
| 0x17 | ? |
| 0x18 | ? |
| 0x19 | ? |
| 0x1a | ? |
| 0x1b | ? (3 params) |
| 0x1c | ? (3 params) |
| 0x1d | ? (3 params) |
| 0x1e | ? (3 params) |
| 0x31 | ? |

### IFH Channel Management

- Up to 16 channels (`DAT_100d00dc` + 6 bytes each)
- `FUN_100223b8` - Open channel
- `FUN_100224ed` - Close channel
- `FUN_100225a8` - Close all channels
- `FUN_1002260c` - Get channel by handle
- `FUN_1002267c` - Get current channel handle

---

## File I/O Operations

File handle table: `DAT_100d20c0` (6 entries × 8 bytes = handles 0-5)

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10025fbd` | ? | **FREAD** | Read bytes from file |
| `FUN_1002606b` | ? | **FRDLN** | Read line from file |
| `FUN_1002618e` | ? | **FSEEK** | Seek to position |
| `FUN_1002621e` | ? | **FSLINE** | Seek to line number |
| `FUN_10026394` | ? | **FSIZE** | Get file size |
| `FUN_10026415` | ? | **FLINES** | Count lines in file |

### File Read Example

```c
// FUN_10025fbd - FREAD
undefined4 FUN_10025fbd(void) {
    char handle = DAT_100d178c;      // File handle (0-5)
    _DAT_100d1742 = 1;               // Assume EOF
    
    if (handle > 5) error(0x5f, 0);  // Invalid handle
    
    int fd = FUN_1001fc84(&DAT_100d20c0[handle * 8]);
    if (fd == 0) error(0x5f, 0);     // File not open
    
    int result = FUN_1001dd40(fd, DAT_100d1760, 1);  // Read 1 byte
    if (result < 0) error(0x5f, 0);
    if (result == 1) _DAT_100d1742 = 0;  // Not EOF
    
    return CONCAT22(0, 1);  // Yield
}
```

---

## Date/Time Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10026c55` | ? | **GETTM** | Get current time (HH:MM:SS) |
| `FUN_10026xxx` | ? | **GETDT** | Get current date + week number |

---

## Stack/Flag Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_1002658c` | ? | **PUSHF** | Push all flags (14 bytes) |
| `FUN_100265df` | ? | **POPF** | Pop all flags (14 bytes) |

---

## Table Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10025a56` | ? | **TABSEEK** | Search in table |
| `FUN_1002662a` | ? | **TABSET** | Set table search params |
| `FUN_10026663` | ? | **REVERSE** | Reverse byte order |
| `FUN_100266e4` | ? | **TABGET** | Get value from table |
| `FUN_10027141` | ? | **TABLINE** | Get table line |
| `FUN_100271cb` | ? | **TABCOL** | Iterate table columns |
| `FUN_1002733a` | ? | **TABROW** | Iterate table rows |
| `FUN_100274be` | ? | **TABFIND** | Find in table |

---

## Conversion Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10025c50` | ? | **ATOI** | ASCII to integer |
| `FUN_10027ac8` | ? | **HTOB** | Hex string to bytes |
| `FUN_100284ab` | ? | **DTOF** | Double to float |
| `FUN_10028550` | ? | **FTOD** | Float to double |
| `FUN_100285c8` | ? | **ITOF** | Integer to float |
| `FUN_10028611` | ? | **MOVI** | Move with type conversion |
| `FUN_10027598` | ? | **ITOD** | Immediate to double |

---

## Progress/Status Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_1002838f` | ? | **PRGMAX** | Set progress max value |
| `FUN_100283b8` | ? | **PRGADD** | Add to progress counter |
| `FUN_10028306` | ? | **INFO** | Output info message |

---

## System Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10028cc6` | ? | **GETTICK** | Get system tick count |
| `FUN_10028cee` | ? | **GETCOL** | Get table columns count |
| `FUN_10028d15` | ? | **GETROW** | Get table rows count |
| `FUN_10028b69` | ? | **WAIT** | Wait/delay |
| `FUN_10028c16` | ? | **SETERR** | Set error code |

---

## Floating-Point Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_1002762f` | ? | **FADD** | Double addition |
| `FUN_10027670` | ? | **FSUB** | Double subtraction |
| `FUN_100276b1` | ? | **FMUL** | Double multiplication |
| `FUN_100276f2` | ? | **FDIV** | Double division |

---

## Wait/Timing Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_1002691a` | ? | **WAITS** | Wait seconds (uses Sleep) |
| `FUN_100269e8` | ? | **WAITMS** | Wait milliseconds |
| `FUN_10028b69` | ? | **WAIT** | Wait/delay |
| `FUN_10028cc6` | ? | **GETTICK** | Get system tick count |

---

## Argument Handling

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10026d39` | ? | **GETARG** | Get argument as string |
| `FUN_10026db0` | ? | **ATODR** | ASCII to double (from arg) |
| `FUN_10026de7` | ? | **GETARGRAW** | Get raw argument bytes |
| `FUN_10026e6d` | ? | **ARGCOUNT** | Count arguments (`;` separated) |

---

## Helper Functions

| Function | Purpose |
|----------|---------|
| `FUN_10028d4d` | Update Zero/Sign/Overflow flags |
| `FUN_10028dd4` | Update flags for float operations |
| `FUN_10028e40` | Read dword (little-endian) |
| `FUN_10028e4a` | Write dword (little-endian) |
| `FUN_10028e91` | Read word (little-endian) |
| `FUN_10028e9c` | Write word (little-endian) |
| `FUN_10028ec2` | Read byte |
| `FUN_10028ecc` | Write byte |
| `FUN_10013f10` | Memory copy (memmove) |
| `FUN_10013ac0` | String copy (strcpy) |
| `FUN_10013ad0` | String append (strcat) |
| `FUN_10013bb0` | String tokenize (strtok) |
| `FUN_10023ca5` | Set program counter (jump) |
| `FUN_10023c2e` | Read from bytecode stream |
| `FUN_10023b44` | Read N bytes from bytecode |
| `FUN_10023b1c` | Get current bytecode position |

---

## Complete Handler Count

| Category | Count | Notes |
|----------|-------|-------|
| Data Movement | 2 | MOVE, CLEAR |
| Arithmetic | 5 | ADD, ADDC, SUB, SUBC, COMP |
| Logical | 5 | AND, ANDS, OR, XOR, NOT |
| Shift | 3 | ASR, LSR, ASL |
| Control Flow | 13 | JMP, JTSR, RET, conditional jumps |
| Stack | 6 | PUSH, POP, PUSHF, POPF, PEEK, POKE |
| Flags | 3 | CLC, STC, CLO |
| String | 8 | SCMP, SCAT, SCPY, SCUT, STRLEN, STRCMP, SINS, SDEL |
| Result Output | 9 | ERG* family |
| File I/O | 8 | FOPEN, FCLOSE, FREAD, FRDLN, FSEEK, FSLINE, FSIZE, FLINES |
| Table | 7 | TABSEEK, TABSET, TABGET, etc. |
| Conversion | 11 | ATOI, ITOA, ATOD, DTOA, HTOB, BTOH, DTOF, FTOD, ITOF, ITOD, SWAP |
| Floating-Point | 4 | FADD, FSUB, FMUL, FDIV |
| Wait/Timing | 4 | WAIT, WAITS, WAITMS, GETTICK |
| Arguments | 4 | GETARG, GETARGRAW, ARGCOUNT, ATODR |
| System | 4 | GETBUFSIZE, GETCOL, GETROW, SETERR |
| Register | 6 | LDRG, STRG, SETRG, CLRRG, JRG, JNRG |
| Error/Control | 2 | ERROR, CHKERR |
| IFH/Comm | 28+ | ifhConnect, ifhSend, ifhReceive, etc. |
| Other | 2 | NOP, REVERSE |
| **Total Identified** | **~134** | Out of ~184 total |

---

## Handler Table Structure

The opcode handler table starts at `0x10088400` with entries of 28 bytes (0x1C) each.

### Entry Format (28 bytes)
```
Offset  Size  Name                Description
0x00    1     default_operand     Default operand type
0x01    4     handler_ptr         Pointer to handler function
0x05    4     name_ptr            Pointer to mnemonic string
0x09    1     operand_type[0]     Operand 0 type for mode 0
0x0A    1     operand_type[1]     Operand 0 type for mode 1
...
0x17    1     operand_type[14]    Operand 0 type for mode 14
0x18    4     ???                 Unknown (possibly flags)
```

### Operand Type Table

Located at `DAT_10089864` and `DAT_10089874` (17 entries × N types).

### Table Access Pattern

```c
// FUN_10022838 - Get handler for opcode
undefined* FUN_10022838(uint opcode, byte mode1, byte mode2) {
    if (opcode >= DAT_10087eba) {
        error(0x62, opcode);  // Invalid opcode
    }
    
    int entry_offset = opcode * 0x1C;
    
    // Get operand type for this mode combination
    char op_type1 = *(char*)(entry_offset + 0x100883f1 + mode1);  // offset 0x51
    char op_type2 = (&DAT_10088401)[entry_offset];                 // offset 0x01
    
    // Check if operand types are valid
    if ((&DAT_10089864)[mode2 + op_type1 * 0x11] == 0) {
        if ((&DAT_10089864)[mode2 + op_type2 * 0x11] == 0) {
            // ... more checks
        }
    }
    
    return (&PTR_FUN_10088402)[opcode * 7];  // 7 = 28/4
}
```

### Known Base Addresses

| Address | Description |
|---------|-------------|
| `0x10088400` | Handler table base |
| `0x10088401` | First entry: default_operand |
| `0x10088402` | First entry: handler_ptr |
| `0x10088406` | First entry: name_ptr |
| `0x100883f1` | Operand type array (offset 0x51 in entry?) |
| `0x10089864` | Operand validity table 1 |
| `0x10089874` | Operand validity table 2 |
| `0x10087eba` | Number of opcodes (ushort) |

---

## Additional String Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10025370` | ? | **SINS** | String insert |
| `FUN_10025477` | ? | **SDEL** | String delete |
| `FUN_10027b53` | ? | **HTOB** | Hex string to bytes |
| `FUN_10027cbc` | ? | **STRCMP** | String compare |
| `FUN_10027d8d` | ? | **STRLEN** | Get string length |
| `FUN_10027e4c` | ? | **BTOH** | Bytes to hex string |

---

## Stack Operations (Extended)

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10024ff5` | ? | **PUSH** | Push operand onto stack |
| `FUN_10025068` | ? | **POP** | Pop operand from stack |
| `FUN_1002658c` | ? | **PUSHF** | Push all flags (14 bytes) |
| `FUN_100265df` | ? | **POPF** | Pop all flags (14 bytes) |
| `FUN_10025da7` | ? | **PEEK** | Read from stack (no pop) |
| `FUN_10025df7` | ? | **POKE** | Write to stack (no push) |

---

## File I/O Operations (Complete)

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10025ee2` | ? | **FOPEN** | Open file (returns handle 0-5) |
| `FUN_10025ea1` | ? | **FCLOSE** | Close file by handle |
| `FUN_10025fbd` | ? | **FREAD** | Read bytes from file |
| `FUN_1002606b` | ? | **FRDLN** | Read line from file |
| `FUN_1002618e` | ? | **FSEEK** | Seek to position |
| `FUN_1002621e` | ? | **FSLINE** | Seek to line number |
| `FUN_10026394` | ? | **FSIZE** | Get file size |
| `FUN_10026415` | ? | **FLINES** | Count lines in file |

---

## Flag Operations (Complete)

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10024d7e` | ? | **CLC** | Clear Carry flag |
| `FUN_10024d90` | ? | **STC** | Set Carry flag |
| `FUN_10025e5f` | ? | **CLO** | Clear Overflow flag |

---

## Error/Control Operations

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10025e46` | ? | **ERROR** | Raise user error (code 0x5A) |
| `FUN_10025e71` | ? | **CHKERR** | Check error flag |

---

## System Operations (Extended)

| Function | Opcode | Mnemonic | Description |
|----------|--------|----------|-------------|
| `FUN_10025352` | ? | **GETBUFSIZE** | Get buffer size (DAT_10087ebc) |
| `FUN_10028cc6` | ? | **GETTICK** | Get system tick count |
| `FUN_10028cee` | ? | **GETCOL** | Get table columns count |
| `FUN_10028d15` | ? | **GETROW** | Get table rows count |
| `FUN_10028b69` | ? | **WAIT** | Wait/delay |
| `FUN_10028c16` | ? | **SETERR** | Set error code |

---

## Next Steps for Complete Mapping

1. **Trace handler table** - `PTR_FUN_10088402` contains all handlers
2. **Extract opcode values** - Map function addresses to opcode numbers
3. **Analyze remaining ~70 handlers** - ~115 identified so far
4. **Document IFH command codes** - Match 0x16-0x31 to functions
5. **Cross-reference with BEST2 compiler** - Mnemonic strings in Best32.dll
