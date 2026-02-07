# BEST2 Interpreter Documentation

This document provides comprehensive documentation for the BEST2 interpreter implementation, including PRG/GRB file structure, register architecture, bytecode reference, and execution model.

## Table of Contents

1. [PRG/GRB File Structure](#prggr-file-structure)
2. [Register Architecture](#register-architecture)
3. [Addressing Modes](#addressing-modes)
4. [CPU Flags](#cpu-flags)
5. [Bytecode Reference](#bytecode-reference)
6. [Stack Operations](#stack-operations)
7. [String Handling](#string-handling)
8. [Result Collection](#result-collection)
9. [Job Execution Flow](#job-execution-flow)
10. [Error Handling](#error-handling)

## PRG/GRB File Structure

### File Formats

BEST2 supports two file formats:

#### 1. Legacy Binary Format (PRG)

```
Header:
  +0x00: magic      (4 bytes) - 0x00475250 ("PRG\0" little-endian)
  +0x04: version    (4 bytes) - File type: 0 = GRP, 1 = PRG
  +0x08: stringTableOffset (4 bytes)
  +0x0C: stringTableSize   (4 bytes)
  +0x10: jobTableOffset    (4 bytes)
  +0x14: jobCount          (4 bytes)
  +0x18: codeOffset        (4 bytes)
  +0x1C: codeSize          (4 bytes)
```

#### 2. EDIABAS OBJECT Format (Modern)

```
Header (0xA0 bytes):
  +0x00: magic      (16 bytes) - "@EDIABAS OBJECT\0"
  +0x10: version    (4 bytes)  - 0 = GRP (group), 1 = PRG (program)
  +0x84: tableListOffset (4 bytes) - Points to table directory
  +0x88: jobListOffset   (4 bytes) - Points to job directory

Data Section (from 0xA0 onwards):
  - XOR encrypted with key 0xF7
  - Contains text metadata and embedded binary structures
```

### XOR Encoding

All data from offset `0xA0` onwards is XOR-encoded with key `0xF7`:

```typescript
decoded[i] = buffer[i] ^ 0xF7  // for i >= 0xA0
```

### Text Metadata Format

After decoding, the data section contains text with key-value pairs:

```
ECU:BMW E46 DME MS43
ORIGIN:BMW AG
REVISION:1.2.3
AUTHOR:Ediabas Team
ECUCOMMENT:Engine control unit

JOBNAME:INIT
JOBCOMMENT:Initialize ECU communication
RESULT:ECU_NAME
RESULTTYPE:STRING
RESULTCOMMENT:ECU identification
ARG:BAUDRATE
ARGTYPE:INT
ARGCOMMENT:Communication baud rate
```

### Binary Job Table

Job list structure at offset referenced by `0x88`:

```
+0x00: jobCount (4 bytes) - NOT XOR encoded
+0x04: job entries (0x44 bytes each) - XOR encoded

Job Entry (0x44 bytes):
  +0x00: name (64 bytes) - Null-terminated string
  +0x40: bytecodeOffset (4 bytes) - Offset in file where job code starts
```

### Binary Table Structure

Table list at offset referenced by `0x84`:

```
+0x00: tableCount (4 bytes) - Encoding varies by file
+0x04: table entries (0x50 bytes each) - XOR encoded

Table Entry (0x50 bytes):
  +0x00: name (64 bytes) - Null-terminated string
  +0x40: columnOffset (4 bytes) - Offset to table data
  +0x48: columns (4 bytes) - Number of columns
  +0x4C: rows (4 bytes) - Number of data rows (excluding header)

Table Data:
  - Row 0: Column headers (null-terminated strings)
  - Rows 1..N: Data cells (null-terminated strings)
  - All XOR encoded with 0xF7
```

## Register Architecture

### Register Types

The BEST2 interpreter provides multiple register types with different sizes and purposes:

| Type | Count | Size | Range | Description |
|------|-------|------|-------|-------------|
| **B** | 16 (B0-BF) | 8-bit | 0-255 | Byte registers |
| **A** | 16 (A0-AF) | 8-bit | 0-255 | Auxiliary byte registers |
| **I** | 16 (I0-IF) | 16-bit | 0-65535 | Integer/Word registers |
| **L** | 8 (L0-L7) | 32-bit | 0-4294967295 | Long/Double-word registers |
| **S** | 16 (S0-SF) | Variable | 0-255 chars | String registers |
| **F** | 8 (F0-F7) | 64-bit | IEEE 754 | Float/Double registers |

### Register Encoding in Bytecode

Register operands are encoded as single bytes:

```
0x00-0x0F : B0-BF  (byte registers)
0x10-0x17 : I0-I7  (word registers, lower)
0x18-0x1B : L0-L3  (long registers, lower)
0x1C-0x23 : S0-S7  (string registers, lower)
0x24-0x2B : F0-F7  (float registers)
0x2C-0x33 : S8-SF  (string registers, upper)
0x80-0x8F : A0-AF  (auxiliary byte registers)
0x90-0x97 : I8-IF  (word registers, upper)
0x98-0x9B : L4-L7  (long registers, upper)
```

### String Register Behavior

- Default maximum length: 255 characters (configurable via SSIZE)
- Stored as UTF-8 internally, converted to/from CP1252 for binary operations
- Automatically truncated to max length on write
- Support indexed access: `S0[I0]`, `S1[#$10]#$20`

## Addressing Modes

Instructions encode operand addressing modes in a single byte following the opcode:

```
Byte format: [arg0_mode:4][arg1_mode:4]
  - Upper nibble: arg0 addressing mode
  - Lower nibble: arg1 addressing mode
```

### Mode Definitions

| Mode | Value | Format | Example | Description |
|------|-------|--------|---------|-------------|
| **NONE** | 0 | - | - | No operand |
| **REG_S** | 1 | reg | S0 | String register |
| **REG_AB** | 2 | reg | B0, A5 | Byte register |
| **REG_I** | 3 | reg | I2 | Word register |
| **REG_L** | 4 | reg | L0 | Long register |
| **IMM8** | 5 | byte | #$41.B | 8-bit immediate |
| **IMM16** | 6 | word | #$1234.I | 16-bit immediate |
| **IMM32** | 7 | dword | #$ABCD1234.L | 32-bit immediate |
| **IMM_STR** | 8 | len+data | "Hello" | Inline string |
| **IDX_IMM** | 9 | reg+word | S0[#$10] | Indexed by immediate |
| **IDX_REG** | 10 | reg+reg | S0[I0] | Indexed by register |
| **IDX_REG_IMM** | 11 | reg+reg+word | S0[I0,#$2] | Indexed with offset |
| **IDX_IMM_LEN_IMM** | 12 | reg+word+word | S0[#$10]#$5 | Slice with immediate length |
| **IDX_IMM_LEN_REG** | 13 | reg+word+reg | S0[#$10]I1 | Slice with register length |
| **IDX_REG_LEN_IMM** | 14 | reg+reg+word | S0[I0]#$5 | Indexed slice |
| **IDX_REG_LEN_REG** | 15 | reg+reg+reg | S0[I0]I1 | Fully dynamic slice |

### Immediate String Format (Mode 8)

```
+0x00: length (2 bytes, little-endian)
+0x02: data (length bytes, null-terminated CP1252)
```

## CPU Flags

### Flag Register

The interpreter maintains four CPU flags updated by arithmetic and comparison operations:

| Flag | Name | Set When |
|------|------|----------|
| **Z** | Zero | Result equals 0 |
| **C** | Carry | Unsigned overflow/borrow occurred |
| **V** | Overflow | Signed overflow occurred |
| **S** | Sign | Result is negative (MSB = 1) |

### Flag Update Rules

**Arithmetic Operations** (`ADD`, `SUB`, `INC`, `DEC`, etc.):
- **Z**: Set if masked result == 0
- **C**: Set if result exceeds bit width (unsigned)
- **S**: Set if MSB of masked result is 1
- **V**: Set if signed overflow (result outside signed range)

**Comparison** (`CMP`, `TEST`):
```
result = a - b  (or a & b for TEST)
Z = (result == 0)
C = (a < b)  // unsigned
S = (result < 0)  // signed
V = signed overflow occurred
```

### Conditional Jumps

| Mnemonic | Condition | Description |
|----------|-----------|-------------|
| `jz` | Z == 1 | Jump if zero |
| `jnz` | Z == 0 | Jump if not zero |
| `jc` | C == 1 | Jump if carry |
| `jnc` | C == 0 | Jump if no carry |
| `jmi` | S == 1 | Jump if minus/negative |
| `jpl` | S == 0 | Jump if plus/positive |
| `jv` | V == 1 | Jump if overflow |
| `jnv` | V == 0 | Jump if no overflow |
| `jg` | Z==0 && S==V | Jump if greater (signed) |
| `jge` / `jnl` | S == V | Jump if greater or equal (signed) |
| `jl` | S != V | Jump if less (signed) |
| `jle` / `jng` | Z==1 \|\| S!=V | Jump if less or equal (signed) |
| `ja` | C==0 && Z==0 | Jump if above (unsigned) |
| `jbe` / `jna` | C==1 \|\| Z==1 | Jump if below or equal (unsigned) |

## Bytecode Reference

### Instruction Format

```
+0x00: opcode (1 byte)
+0x01: addressing mode (1 byte) [arg0_mode:4][arg1_mode:4]
+0x02: operand 0 data (variable length)
+0x??: operand 1 data (variable length)
```

### Opcode Table

#### Data Movement (0x00-0x01)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x00 | `move` | dst, src | Copy value from src to dst |
| 0x01 | `clear` | reg | Set register to 0 |

#### Arithmetic (0x02-0x06, 0x18-0x1B, 0x49-0x4A)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x02 | `comp` | a, b | Compare (a - b), update flags only |
| 0x03 | `subb` | dst, src | dst = dst - src |
| 0x04 | `adds` | dst, src | dst = dst + src |
| 0x05 | `mult` | dst, src | dst = dst * src |
| 0x06 | `divs` | dst, src | dst = dst / src |
| 0x18 | `asr` | reg, count | Arithmetic shift right (sign-extend) |
| 0x19 | `lsl` | reg, count | Logical shift left |
| 0x1A | `lsr` | reg, count | Logical shift right |
| 0x1B | `asl` | reg, count | Arithmetic shift left |
| 0x49 | `addc` | dst, src | Add with carry |
| 0x4A | `subc` | dst, src | Subtract with carry/borrow |
| 0x6A | `test` | a, b | Bitwise AND (a & b), update flags only |

#### Bitwise Logic (0x07-0x0A)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x07 | `and` | dst, src | dst = dst & src |
| 0x08 | `or` | dst, src | dst = dst \| src |
| 0x09 | `xor` | dst, src | dst = dst ^ src |
| 0x0A | `not` | reg | reg = ~reg |

#### Control Flow (0x0B-0x0F, 0x10-0x15, 0x47-0x48, 0x5A-0x5F)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x0B | `jump` | offset | Unconditional jump (PC += offset) |
| 0x0C | `jtsr` | offset | Call subroutine (push PC, jump) |
| 0x0D | `ret` | - | Return from subroutine (pop PC) |
| 0x0E | `jc` | offset | Jump if carry |
| 0x0F | `jae` | offset | Jump if above or equal (jnc) |
| 0x10 | `jz` | offset | Jump if zero |
| 0x11 | `jnz` | offset | Jump if not zero |
| 0x12 | `jv` | offset | Jump if overflow |
| 0x13 | `jnv` | offset | Jump if no overflow |
| 0x14 | `jmi` | offset | Jump if minus (negative) |
| 0x15 | `jpl` | offset | Jump if plus (positive) |
| 0x47 | `jt` | offset | Jump if error trap set |
| 0x48 | `jnt` | offset | Jump if no error trap |
| 0x5A | `jg` | offset | Jump if greater (signed) |
| 0x5B | `jge` / `jnl` | offset | Jump if greater or equal (signed) |
| 0x5C | `jl` | offset | Jump if less (signed) |
| 0x5D | `jle` / `jng` | offset | Jump if less or equal (signed) |
| 0x5E | `ja` | offset | Jump if above (unsigned) |
| 0x5F | `jbe` / `jna` | offset | Jump if below or equal (unsigned) |

**Note**: Jump offsets are 32-bit signed relative to the instruction after the operand.

#### Flag Manipulation (0x16-0x17, 0x4C)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x16 | `clrc` | - | Clear carry flag |
| 0x17 | `setc` | - | Set carry flag |
| 0x4C | `clrv` | - | Clear overflow flag |

#### Stack (0x1E-0x1F, 0x4E-0x51, 0x6F)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x1E | `push` | src | Push value onto data stack |
| 0x1F | `pop` | dst | Pop value from data stack |
| 0x4E | `popf` | - | Pop flags from stack |
| 0x4F | `pushf` | - | Push flags to stack |
| 0x50 | `atsp` | dst, offset | Load from stack at offset |
| 0x51 | `swap` | str[idx]len | Byte-swap string slice |

#### String Operations (0x20-0x25, 0x53-0x54, 0x67, 0x79-0x7A, 0x7E, 0x8C, 0x8E-0x92, 0xAB)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x20 | `scmp` | a, b | String compare (deprecated, use strcmp) |
| 0x21 | `scat` | dst, src | String concatenate (deprecated, use strcat) |
| 0x22 | `scut` | str, idx, len | Extract substring |
| 0x23 | `slen` | dst, str | Get string length (deprecated, use strlen) |
| 0x24 | `spaste` | dst, src, idx | Insert string at position |
| 0x25 | `serase` | str, idx, len | Erase substring |
| 0x52 | `setspc` | sep, idx | Set token separator and index |
| 0x53 | `srevrs` | str | Reverse string |
| 0x54 | `stoken` | dst, src | Extract token using separator |
| 0x67 | `a2fix` | dst, str | Parse ASCII to integer |
| 0x79 | `fix2hex` | str, val | Convert integer to hex string |
| 0x7A | `fix2dez` | str, val | Convert integer to decimal string |
| 0x7E | `strcat` | dst, src | Concatenate strings |
| 0x8C | `a2y` | dst, src | ASCII string to binary Y-register |
| 0x8E | `hex2y` | dst, hex | Hex string to binary Y-register |
| 0x8F | `strcmp` | a, b | Compare strings, set flags |
| 0x90 | `strlen` | dst, str | Get string length |
| 0x91 | `y2bcd` | dst, bin | Binary to BCD string |
| 0x92 | `y2hex` | dst, bin | Binary to hex string |
| 0xAB | `ufix2dez` | str, val | Unsigned integer to decimal string |
| 0xB5 | `ssize` | size | Set maximum string size |

#### Floating Point (0x3A-0x3E, 0x68, 0x87-0x88, 0x96, 0x9B-0x9E, 0xA1)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x3A | `a2flt` | dst, str | Parse ASCII to float |
| 0x3B | `fadd` | dst, src | Float addition |
| 0x3C | `fsub` | dst, src | Float subtraction |
| 0x3D | `fmul` | dst, src | Float multiplication |
| 0x3E | `fdiv` | dst, src | Float division |
| 0x68 | `fix2flt` | fdst, isrc | Convert integer to float |
| 0x87 | `flt2a` | str, fsrc | Convert float to ASCII string |
| 0x88 | `setflt` | precision | Set float-to-string precision |
| 0x96 | `flt2fix` | idst, fsrc | Convert float to integer |
| 0x9B | `flt2y4` | ydst, fsrc | Float to 4-byte binary (IEEE 754 single) |
| 0x9C | `flt2y8` | ydst, fsrc | Float to 8-byte binary (IEEE 754 double) |
| 0x9D | `y42flt` | fdst, ysrc | 4-byte binary to float |
| 0x9E | `y82flt` | fdst, ysrc | 8-byte binary to float |
| 0xA1 | `fcomp` | a, b | Float compare, set flags |

#### Result Collection (0x34-0x39, 0x3F, 0x40-0x41, 0x81-0x82, 0x95)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x34 | `ergb` | name, val | Record result (byte) |
| 0x35 | `ergw` | name, val | Record result (word) |
| 0x36 | `ergd` | name, val | Record result (dword) |
| 0x37 | `ergi` | name, val | Record result (integer, auto-detect size) |
| 0x38 | `ergr` | name, fval | Record result (float) |
| 0x39 | `ergs` | name, str | Record result (string) |
| 0x3F | `ergy` | name, binary | Record result (binary data) |
| 0x40 | `enewset` | - | Clear all results (new result set) |
| 0x41 | `etag` | offset, name | Skip result if not requested |
| 0x81 | `ergc` | name, val | Record result (signed char) |
| 0x82 | `ergl` | name, val | Record result (signed long) |
| 0x95 | `ergsysi` | name, val | Record system info result |

#### Parameters (0x55-0x58, 0x69, 0x7F-0x80)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x55 | `parb` | dst, idx | Get parameter byte |
| 0x56 | `parw` | dst, idx | Get parameter word |
| 0x57 | `parl` | dst, idx | Get parameter long |
| 0x58 | `pars` | dst, idx | Get parameter string |
| 0x69 | `parr` | fdst, idx | Get parameter float |
| 0x7F | `pary` | dst | Get all parameters as binary |
| 0x80 | `parn` | dst | Get parameter count |

#### Communication (0x26-0x33, 0x42, 0x6E, 0x71-0x77, 0x84-0x86, 0x8D, 0xAF-0xB4)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x26 | `xconnect` | - | Connect to ECU |
| 0x27 | `xhangup` | - | Disconnect from ECU |
| 0x28 | `xsetpar` | param, val | Set communication parameter |
| 0x29 | `xawlen` | dst | Get response length |
| 0x2A | `xsend` | data | Send data to ECU |
| 0x2B | `xsendf` | flags | Send data with flags |
| 0x2C | `xrequf` | dst, flags | Request data with flags |
| 0x2D | `xstopf` | - | Stop communication |
| 0x2E | `xkeyb` | dst | Check keyboard input |
| 0x2F | `xstate` | dst | Get communication state |
| 0x30 | `xboot` | mode | Enter bootloader mode |
| 0x31 | `xreset` | - | Reset ECU |
| 0x32 | `xtype` | dst | Get interface type |
| 0x33 | `xvers` | dst | Get interface version |
| 0x42 | `xreps` | dst | Get number of repetitions |
| 0x6E | `xbatt` | dst | Get battery voltage |
| 0x71 | `xgetport` | dst, port | Get port parameter |
| 0x72 | `xignit` | dst | Get ignition state |
| 0x73 | `xloopt` | timeout | Set loop timeout |
| 0x74 | `xprog` | mode | Enter programming mode |
| 0x75 | `xraw` | resp, req | Raw ECU communication |
| 0x76 | `xsetport` | param, port | Set port parameter |
| 0x77 | `xsireset` | mode | Reset SI (serial interface) |

#### File Operations (0x59-0x66)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x59 | `fclose` | handle | Close file |
| 0x60 | `fopen` | handle, path | Open file |
| 0x61 | `fread` | handle, dst | Read byte from file |
| 0x62 | `freadln` | str, handle | Read line from file |
| 0x63 | `fseek` | handle, pos | Seek to byte position |
| 0x64 | `fseekln` | handle, line | Seek to line number |
| 0x65 | `ftell` | dst, handle | Get current byte position |
| 0x66 | `ftellln` | dst, handle | Get current line number |

#### Time Operations (0x43-0x46, 0x6B-0x6D, 0xAD-0xAE)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x43 | `gettmr` | dst | Get timer value |
| 0x44 | `settmr` | val | Set timer value |
| 0x45 | `sett` | bit | Set error trap bit |
| 0x46 | `clrt` | - | Clear error trap |
| 0x47 | `jt` | offset | Jump if trap set |
| 0x48 | `jnt` | offset | Jump if trap not set |
| 0x4D | `eerr` | - | Execute error (trigger trap) |
| 0x6B | `wait` | ms | Wait milliseconds |
| 0x6C | `date` | dst | Get current date |
| 0x6D | `time` | dst | Get current time |
| 0xAD | `ticks` | dst | Get system ticks |
| 0xAE | `waitex` | ticks | Wait for ticks |

#### Table Operations (0x7B-0x7D, 0x83, 0x9A, 0xAA, 0xB6-0xB7)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x7B | `tabset` | name | Set active table |
| 0x7C | `tabseek` | col, val | Seek row where column == value |
| 0x7D | `tabget` | dst, col | Get value from current row/column |
| 0x83 | `tabline` | row | Set current row index |
| 0x9A | `tabseeku` | col, val | Seek row (unsigned compare) |
| 0xAA | `tabsetex` | name | Set active table (extended) |
| 0xB6 | `tabcols` | dst | Get number of columns |
| 0xB7 | `tabrows` | dst | Get number of rows |

#### Shared Memory (0x93-0x94)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x93 | `shmset` | key, val | Store value in shared memory |
| 0x94 | `shmget` | dst, key | Retrieve value from shared memory |

#### Configuration (0x89-0x8B)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x89 | `cfgig` | dst, key | Get config value (integer) |
| 0x8A | `cfgsg` | dst, key | Get config value (string) |
| 0x8B | `cfgis` | key, val | Set config value (integer) |

#### Procedures (0x9F-0xA9)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x9F | `plink` | id | Link procedure ID to handler |
| 0xA0 | `pcall` | - | Call procedure (legacy, no-op) |
| 0xA2 | `plinkv` | id | Link procedure with validation |
| 0xA3 | `ppush` | val | Push integer to procedure stack |
| 0xA4 | `ppop` | dst | Pop integer from procedure stack |
| 0xA5 | `ppushflt` | fval | Push float to procedure stack |
| 0xA6 | `ppopflt` | fdst | Pop float from procedure stack |
| 0xA7 | `ppushy` | binary | Push binary data to procedure stack |
| 0xA8 | `ppopy` | dst | Pop binary data from procedure stack |
| 0xA9 | `pjtsr` | id | Jump to subroutine via procedure |

#### Progress Reporting (0x97-0x99)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x97 | `iupdate` | text | Update progress message |
| 0x98 | `irange` | max | Set progress range |
| 0x99 | `iincpos` | inc | Increment progress position |

#### System (0x1C-0x1D, 0x4B, 0xAC)

| Hex | Mnemonic | Operands | Description |
|-----|----------|----------|-------------|
| 0x1C | `nop` | - | No operation |
| 0x1D | `eoj` | - | End of job (halt execution) |
| 0x4B | `break` | - | User break (EDIABAS_BIP_0008) |
| 0xAC | `generr` | code | Generate error with code |

## Stack Operations

### Call Stack

Used for subroutine calls:
- `jtsr offset`: Push PC, jump to PC+offset
- `ret`: Pop PC

Maximum depth: 256 entries (configurable)

### Data Stack

Generic value stack for temporary storage:

| Operation | Description |
|-----------|-------------|
| `push src` | Push value onto stack |
| `pop dst` | Pop value from stack into register |
| `pushf` | Push flag register (Z, C, V, S as bitfield) |
| `popf` | Pop flag register |
| `atsp dst, offset` | Load stack value at offset without popping |

**Flag Encoding for `pushf/popf`:**
```
Bit 0: Z (Zero)
Bit 1: C (Carry)
Bit 2: V (Overflow)
Bit 3: S (Sign)
```

Maximum depth: 1024 entries (configurable)

## String Handling

### String Register Storage

- Internally stored as UTF-8
- Converted to/from CP1252 for binary operations
- Null-terminated when written to binary

### Binary vs Text Operations

**Text Operations** (UTF-8 aware):
- `strcmp`, `strlen`, `strcat`, `srev`
- Operate on character level

**Binary Operations** (byte-level):
- `ergy`, `a2y`, `hex2y`, `y2hex`, `y2bcd`
- Operate on raw bytes (CP1252 encoding)

### Indexed String Access

```
S0[I0]       - Single character at index I0
S0[#$10]     - Single character at offset 16
S0[I0]#$5    - 5 characters starting at I0
S0[#$10]I1   - Length I1 starting at offset 16
S0[I0,#$2]   - Auto-increment I0 by 2 after access
```

### Token Parsing

```
setspc " ", #$1        ; Set separator to space, token index to 1
stoken S0, S1          ; Extract first token from S1 into S0
```

## Result Collection

### Result Types

Jobs collect results in a key-value store with typed values:

| Type | Opcode | Description |
|------|--------|-------------|
| `byte` | ergb | 8-bit unsigned |
| `word` | ergw | 16-bit unsigned |
| `dword` | ergd | 32-bit unsigned |
| `int` | ergi | Integer (auto-sized) |
| `char` | ergc | 8-bit signed |
| `long` | ergl | 32-bit signed |
| `real` | ergr | Float/double |
| `string` | ergs | Text string |
| `binary` | ergy | Binary data |

### Result Set Management

```
enewset              ; Clear all results (start fresh)
ergw "STATUS", I0    ; Record STATUS = I0 (word)
ergs "ECU_NAME", S0  ; Record ECU_NAME = S0 (string)
```

### Selective Result Collection (etag)

```
etag __SKIP, "OPTIONAL_RESULT"
ergd "OPTIONAL_RESULT", L0
__SKIP:
```

If `OPTIONAL_RESULT` is not in the results request set, jump to `__SKIP`.

### System Results

```
ergsysi "!INITIALISIERUNG", #$1  ; Request system initialization
```

Special result names starting with `!` trigger system actions.

## Job Execution Flow

### Initialization

1. Locate job by name in job table
2. Resolve bytecode offset (from binary job table)
3. Initialize interpreter state:
   - PC = job offset
   - Reset registers (optional, depending on execution mode)
   - Clear results (unless chaining jobs)
   - Set parameters from caller

### Execution Loop

```
while (!halted):
  1. Decode instruction at PC
  2. PC += instruction length
  3. Execute instruction handler
  4. Check for halt condition (eoj, break, error)
```

### Termination

- **Normal**: `eoj` instruction sets halted flag
- **Break**: `break` instruction throws EDIABAS_BIP_0008 error
- **Error**: Uncaught exception terminates job

### Inter-Job Communication

**Parameters**: Passed from caller via `parb`, `parw`, `parl`, `pars`, `parr`, `pary`, `parn`

**Results**: Retrieved by caller after job completes

**Shared Memory**: Persistent key-value store across jobs (`shmset`, `shmget`)

## Error Handling

### Error Trap System

The interpreter provides a trap mechanism for error detection:

```
clrt                    ; Clear trap
sett #$5                ; Set trap bit 5
xconnect                ; Communication operation
jt __ERROR              ; Jump if error occurred
...
__ERROR:
  eerr                  ; Execute error handler
```

### Trap State

- **errorTrapMask**: Bitmask of trap conditions
- **errorTrapBitNr**: Most recently triggered trap bit (-1 if none)

### Trap Instructions

| Instruction | Description |
|-------------|-------------|
| `sett val` | Set trap bit (1 << val) |
| `clrt` | Clear all trap bits |
| `jt offset` | Jump if any trap bit is set |
| `jnt offset` | Jump if no trap bits set |
| `eerr` | Execute error (throw exception with trap mask) |
| `gettmr dst` | Get current trap mask and update flags |

### Error Codes

Defined in `@ediabas/core/EdiabasErrorCodes`:

```typescript
REGISTER_ERROR          // Invalid register access
INVALID_INSTRUCTION     // Unknown opcode or malformed instruction
STACK_OVERFLOW          // Call/data stack overflow
STACK_UNDERFLOW         // Pop from empty stack
DIVISION_BY_ZERO        // Arithmetic error
EDIABAS_BIP_0008        // User break
UNKNOWN                 // Generic error
```

### Communication Errors

Communication operations (`xconnect`, `xsend`, etc.) set trap bits on failure:
- Bit 0: Timeout
- Bit 1: Protocol error
- Bit 2: NAK received
- Bit 3: Interface error

Always check trap after communication operations:

```
xsend S0
jt __COMM_ERROR
```

---

**Generated**: 2025-02-07  
**Source**: Analyzed from `packages/interpreter/`, `packages/best-parser/`, `packages/core/`  
**Version**: Based on commit `7d52b83`
