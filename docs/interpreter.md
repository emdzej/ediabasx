# EDIABAS BEST2 Interpreter & Bytecode Reference

This document describes the BEST2 bytecode interpreter implementation in TypeScript. It covers the PRG/GRB file format, register architecture, addressing modes, instruction set, and runtime behavior. All information is derived from the actual source code in `packages/interpreter` and `packages/best-parser`.

---

## Table of Contents

1. [PRG/GRB File Structure](#1-prggrb-file-structure)
2. [Registers and Addressing Modes](#2-registers-and-addressing-modes)
3. [CPU Flags](#3-cpu-flags)
4. [Bytecode Instruction Set](#4-bytecode-instruction-set)
5. [Stack Operations](#5-stack-operations)
6. [String and Binary Handling](#6-string-and-binary-handling)
7. [Result Collection](#7-result-collection)
8. [Error Handling and Trap Bits](#8-error-handling-and-trap-bits)
9. [Job Execution Flow](#9-job-execution-flow)
10. [Communication Interface](#10-communication-interface)
11. [File System Operations](#11-file-system-operations)
12. [Table Operations](#12-table-operations)

---

## 1. PRG/GRB File Structure

EDIABAS programs are stored in two main formats: **legacy binary PRG/GRP** and **EDIABAS OBJECT format**. The parser in `packages/best-parser` supports both formats.

### 1.1 Legacy Binary PRG/GRP Format

The legacy format uses a 32-byte header with the magic number `0x00475250` (`"PRG\0"`).

#### Header Layout

All fields are **little-endian uint32** unless otherwise noted:

| Offset | Field              | Description                                          |
|--------|--------------------|------------------------------------------------------|
| 0x00   | magic              | `0x00475250` (`"PRG\0"`)                             |
| 0x04   | version            | 0 = GRP (group), 1 = PRG (program)                   |
| 0x08   | stringTableOffset  | Start of string table                                |
| 0x0C   | stringTableSize    | Size of string table in bytes                        |
| 0x10   | jobTableOffset     | Start of job table                                   |
| 0x14   | jobCount           | Number of job entries                                |
| 0x18   | codeOffset         | Start of bytecode section                            |
| 0x1C   | codeSize           | Size of bytecode section in bytes                    |

#### Derived Boundaries

```
stringTableEnd = stringTableOffset + stringTableSize
jobTableEnd = jobTableOffset + (jobCount * 12)
codeEnd = codeOffset + codeSize
```

#### String Table

The string table contains **null-terminated CP1252-encoded strings**. Strings are referenced by offset from the start of the table.

#### Job Table

Each job entry is **12 bytes**:

| Field         | Type   | Description                              |
|---------------|--------|------------------------------------------|
| nameOffset    | uint32 | Offset into string table                 |
| offset        | uint32 | Bytecode offset (start of job code)      |
| argCount      | uint16 | Number of arguments expected             |
| resultCount   | uint16 | Number of results produced               |

### 1.2 EDIABAS OBJECT Format

The EDIABAS OBJECT format is identified by the ASCII string `"@EDIABAS OBJECT"` (16 bytes, NUL-padded).

#### Header Layout

| Offset | Field            | Description                                      |
|--------|------------------|--------------------------------------------------|
| 0x00   | magic            | `"@EDIABAS OBJECT"` (16 bytes, ASCII/NUL-padded) |
| 0x10   | version          | 0 = GRP, 1 = PRG                                 |
| 0x84   | tableListOffset  | Offset to table list (uint32, **not XOR**)      |
| 0x88   | jobListOffset    | Offset to job list (uint32, **not XOR**)        |
| 0xA0   | dataOffset       | Start of XOR-encoded data                        |

#### XOR Encoding

All data **from offset 0xA0 onwards** is XOR-encoded with the key **`0xF7`**. This includes:

- Job metadata (text format)
- Binary job list entries
- Table data
- Bytecode (if embedded)

To decode: `decodedByte = encodedByte ^ 0xF7`

#### Text Metadata Section

The decoded data area contains human-readable metadata in text format:

```
JOBNAME:<jobname>
JOBCOMMENT:<comment>
RESULT:<name>
RESULTTYPE:<type>
RESULTCOMMENT:<comment>
ARG:<name>
ARGTYPE:<type>
ARGCOMMENT:<comment>
```

#### Binary Job List

The `jobListOffset` points to a structure containing:

- **Job count** (int32, **NOT XOR-encoded**)
- Job entries (size `0x44` each, XOR-encoded)

Each job entry (XOR-encoded):

| Offset     | Field          | Type   | Description                                    |
|------------|----------------|--------|------------------------------------------------|
| 0x00–0x3F  | name           | char[64] | Job name (CP1252, XOR-encoded, NUL-terminated) |
| 0x40–0x43  | offset         | uint32 | Bytecode offset (XOR-encoded)                  |

#### Binary Table List

The `tableListOffset` points to:

- **Table count** (int32, encoding inconsistent — parser tries raw then XOR-decoded)
- Table entries (size `0x50` each, XOR-encoded)

Each table entry (XOR-encoded):

| Offset     | Field        | Type   | Description                             |
|------------|--------------|--------|-----------------------------------------|
| 0x00–0x3F  | name         | char[64] | Table name (CP1252, XOR-encoded)        |
| 0x40–0x43  | columnOffset | uint32 | Column data offset (XOR-encoded)        |
| 0x48–0x4B  | columns      | uint32 | Number of columns (XOR-encoded)         |
| 0x4C–0x4F  | rows         | uint32 | Number of data rows (XOR-encoded)       |

Table data consists of XOR-encoded, NUL-terminated CP1252 strings. The first row contains column headers, followed by `rows` data rows.

---

## 2. Registers and Addressing Modes

The BEST2 interpreter implements a **register-based virtual machine** with six register types.

### 2.1 Register Set

| Register Type | Count | Width      | Description                                   |
|---------------|-------|------------|-----------------------------------------------|
| **B0–BF**     | 16    | 8-bit      | Unsigned byte registers                       |
| **A0–AF**     | 16    | 8-bit      | Unsigned byte registers (alternate set)       |
| **I0–IF**     | 16    | 16-bit     | Unsigned word registers                       |
| **L0–L7**     | 8     | 32-bit     | Unsigned double-word registers                |
| **S0–SF**     | 16    | String     | String/binary data (default max 255 bytes)    |
| **F0–F7**     | 8     | 64-bit     | IEEE-754 double-precision floating-point      |

**Total:** 32 × 8-bit, 16 × 16-bit, 8 × 32-bit, 16 × string, 8 × float

### 2.2 Internal CPU State

The interpreter maintains additional state not directly addressable as registers:

| Component          | Description                                              |
|--------------------|----------------------------------------------------------|
| **PC**             | Program counter (bytecode offset)                        |
| **Flags**          | Z (zero), C (carry), V (overflow), S (sign)              |
| **Call Stack**     | Return addresses for `jtsr`/`ret`                        |
| **Data Stack**     | Byte stack for `push`/`pop`/`pushf`/`popf`               |
| **Procedure Stack**| Procedure parameter stack (`ppush`/`ppop`)               |
| **Error Trap**     | Mask and bit number for error handling                   |
| **Progress**       | Text, range, position for UI updates                     |
| **Token State**    | Separator and index for `stoken`                         |
| **Table State**    | Active table reference and current row                   |
| **Float Precision**| Decimal places for `flt2a` (default 4)                   |

### 2.3 Register Encoding

Registers are encoded in operands as a **single byte**:

| Byte Range | Registers | Mapping                        |
|------------|-----------|--------------------------------|
| 0x00–0x0F  | B0–BF     | B[byte - 0x00]                 |
| 0x10–0x17  | I0–I7     | I[byte - 0x10]                 |
| 0x18–0x1B  | L0–L3     | L[byte - 0x18]                 |
| 0x1C–0x23  | S0–S7     | S[byte - 0x1C]                 |
| 0x24–0x2B  | F0–F7     | F[byte - 0x24]                 |
| 0x2C–0x33  | S8–SF     | S[byte - 0x2C + 8]             |
| 0x80–0x8F  | A0–AF     | A[byte - 0x80]                 |
| 0x90–0x97  | I8–IF     | I[byte - 0x90 + 8]             |
| 0x98–0x9B  | L4–L7     | L[byte - 0x98 + 4]             |

Examples:
- `0x00` → B0
- `0x10` → I0
- `0x1C` → S0
- `0x80` → A0
- `0x90` → I8
- `0x98` → L4

### 2.4 Addressing Modes

Every instruction is encoded as:

```
[opcode:1][addrMode:1][arg0...][arg1...]
```

The **addressing mode byte** encodes two 4-bit nibbles:

- **High nibble (bits 7–4)**: Mode for **arg0**
- **Low nibble (bits 3–0)**: Mode for **arg1**

#### Addressing Mode Table

| Mode | Name              | Encoding                      | Description                                         |
|------|-------------------|-------------------------------|-----------------------------------------------------|
| 0x0  | NONE              | —                             | No operand (omitted)                                |
| 0x1  | REG_S             | 1 byte register               | Any register (B/A/I/L/S/F)                          |
| 0x2  | REG_AB            | 1 byte register               | Same as REG_S (legacy distinction)                  |
| 0x3  | REG_I             | 1 byte register               | Same as REG_S (legacy distinction)                  |
| 0x4  | REG_L             | 1 byte register               | Same as REG_S (legacy distinction)                  |
| 0x5  | IMM8              | 1 byte immediate              | Unsigned 8-bit immediate value                      |
| 0x6  | IMM16             | 2 bytes immediate (LE)        | Signed 16-bit immediate value                       |
| 0x7  | IMM32             | 4 bytes immediate (LE)        | Signed 32-bit immediate value                       |
| 0x8  | IMM_STR           | 2-byte length + data          | String immediate (length includes NUL in many files)|
| 0x9  | IDX_IMM           | reg + i16 index               | `Sx[#imm]`                                          |
| 0xA  | IDX_REG           | reg + reg                     | `Sx[reg]`                                           |
| 0xB  | IDX_REG_IMM       | reg + reg + i16 offset        | `Sx[reg,#imm]`                                      |
| 0xC  | IDX_IMM_LEN_IMM   | reg + i16 index + i16 length  | `Sx[#idx]#len`                                      |
| 0xD  | IDX_IMM_LEN_REG   | reg + i16 index + reg length  | `Sx[#idx]reg`                                       |
| 0xE  | IDX_REG_LEN_IMM   | reg + reg index + i16 length  | `Sx[reg]#len`                                       |
| 0xF  | IDX_REG_LEN_REG   | reg + reg index + reg length  | `Sx[reg]reg`                                        |

**Indexed operands** always use **S registers** as the base. The index and length can be immediate values or register references.

#### Example Instruction Encoding

```
move I0, #$1234
```

Encoded as:

```
[0x00]  [0x61]  [0x10]  [0x34] [0x12]
  ↑       ↑       ↑       ↑      ↑
opcode  mode   arg0    imm16 (little-endian)
       (6:REG, 1:IMM16)
```

- Opcode: `0x00` (move)
- Addressing mode: `0x61` (arg0=REG_S, arg1=IMM16)
- Arg0: `0x10` (I0)
- Arg1: `0x3412` (little-endian 0x1234)

### 2.5 Jump Offsets

Jump instructions accept a **relative offset** applied to the PC **after** decoding the instruction. Some jump opcodes also accept a register containing an **absolute target address**, which the interpreter converts to a relative offset internally.

---

## 3. CPU Flags

The interpreter maintains four CPU flags that are updated by arithmetic and comparison operations and tested by conditional jump instructions.

### 3.1 Flag Descriptions

| Flag | Name     | Description                                                      |
|------|----------|------------------------------------------------------------------|
| **Z**| Zero     | Set when the result of an operation is zero                     |
| **C**| Carry    | Set on unsigned overflow (result exceeds bit width)              |
| **V**| Overflow | Set on signed overflow (sign bit changes unexpectedly)           |
| **S**| Sign     | Set when the result is negative (MSB = 1)                        |

### 3.2 Flag Update Operations

Flags are updated by:

- **Arithmetic**: `adds`, `subb`, `mult`, `divs`, `addc`, `subc`
- **Bitwise**: `and`, `or`, `xor`, `not`, `test`
- **Shift**: `asr`, `asl`, `lsr`, `lsl`
- **Comparison**: `comp` (integer), `fcomp` (float), `strcmp` (string)
- **Explicit**: `clrc`, `setc`, `clrv`

### 3.3 Flag Test Operations (Conditional Jumps)

| Instruction | Condition              | Flags Tested        |
|-------------|------------------------|---------------------|
| `jz`        | Zero                   | Z = 1               |
| `jnz`       | Not zero               | Z = 0               |
| `jc`        | Carry                  | C = 1               |
| `jae`/`jnc` | No carry (above/equal) | C = 0               |
| `jmi`       | Minus (negative)       | S = 1               |
| `jpl`       | Plus (positive)        | S = 0               |
| `jv`        | Overflow               | V = 1               |
| `jnv`       | No overflow            | V = 0               |
| `jg`        | Greater (signed)       | Z=0 AND S=V         |
| `jge`/`jnl` | Greater/equal (signed) | S = V               |
| `jl`        | Less (signed)          | S ≠ V               |
| `jle`/`jng` | Less/equal (signed)    | Z=1 OR S≠V          |
| `ja`        | Above (unsigned)       | C=0 AND Z=0         |
| `jbe`/`jna` | Below/equal (unsigned) | C=1 OR Z=1          |

### 3.4 Flag Stack Operations

Flags can be saved and restored using the data stack:

- **`pushf`**: Push flags to data stack (stored as 32-bit bitfield: C=1, Z=2, S=4, V=8)
- **`popf`**: Pop flags from data stack

---

## 4. Bytecode Instruction Set

The BEST2 interpreter implements **184 opcodes**. Below is a comprehensive reference table for all opcodes.

### 4.1 Legend

- **int reg** = B/A/I/L (integer register)
- **float reg** = F (float register)
- **string reg** = S (string register)
- **idx** = indexed string operand (`Sx[...]`)
- **imm** = immediate value (8/16/32-bit)

### 4.2 Complete Opcode Table

| Opcode | Mnemonic   | Description                                                | Registers/State      | Operand Format    | Example                      |
|--------|------------|------------------------------------------------------------|----------------------|-------------------|------------------------------|
| 0x00   | move       | Move/copy value between registers or memory                | any reg, idx         | dest, src         | `move I0, #$10`              |
| 0x01   | clear      | Clear register (set to 0 or empty string)                  | any reg              | dest              | `clear S0`                   |
| 0x02   | comp       | Compare integers (sets flags)                              | int regs, flags      | left, right       | `comp I0, I1`                |
| 0x03   | subb       | Subtract integers (sets flags)                             | int regs, flags      | dest, src         | `subb I0, #1`                |
| 0x04   | adds       | Add integers (sets flags)                                  | int regs, flags      | dest, src         | `adds B0, B1`                |
| 0x05   | mult       | Multiply integers (high part → src if reg)                 | int regs, flags      | dest, src         | `mult I0, I1`                |
| 0x06   | divs       | Divide integers (quotient → dest, remainder → src if reg)  | int regs, flags      | dest, src         | `divs L0, L1`                |
| 0x07   | and        | Bitwise AND                                                | int regs, flags      | dest, src         | `and B0, #$0F`               |
| 0x08   | or         | Bitwise OR                                                 | int regs, flags      | dest, src         | `or B0, B1`                  |
| 0x09   | xor        | Bitwise XOR                                                | int regs, flags      | dest, src         | `xor I0, I1`                 |
| 0x0A   | not        | Bitwise NOT                                                | int reg, flags       | dest              | `not A0`                     |
| 0x0B   | jump       | Unconditional relative jump                                | PC                   | offset            | `jump #$10`                  |
| 0x0C   | jtsr       | Jump to subroutine (call)                                  | call stack, PC       | offset            | `jtsr #$FFF0`                |
| 0x0D   | ret        | Return from subroutine                                     | call stack, PC       | —                 | `ret`                        |
| 0x0E   | jc         | Jump if carry                                              | flags, PC            | offset            | `jc #$20`                    |
| 0x0F   | jae        | Jump if above/equal (no carry)                             | flags, PC            | offset            | `jae #$20`                   |
| 0x10   | jz         | Jump if zero                                               | flags, PC            | offset            | `jz #$20`                    |
| 0x11   | jnz        | Jump if not zero                                           | flags, PC            | offset            | `jnz #$20`                   |
| 0x12   | jv         | Jump if overflow                                           | flags, PC            | offset            | `jv #$20`                    |
| 0x13   | jnv        | Jump if no overflow                                        | flags, PC            | offset            | `jnv #$20`                   |
| 0x14   | jmi        | Jump if minus/sign                                         | flags, PC            | offset            | `jmi #$FFF0`                 |
| 0x15   | jpl        | Jump if plus/no sign                                       | flags, PC            | offset            | `jpl #$08`                   |
| 0x16   | clrc       | Clear carry flag                                           | flags                | —                 | `clrc`                       |
| 0x17   | setc       | Set carry flag                                             | flags                | —                 | `setc`                       |
| 0x18   | asr        | Arithmetic shift right (impl: logical shift right)         | int regs, flags      | dest, count       | `asr I0, #1`                 |
| 0x19   | lsl        | Logical shift left                                         | int regs, flags      | dest, count       | `lsl I0, #1`                 |
| 0x1A   | lsr        | Logical shift right                                        | int regs, flags      | dest, count       | `lsr I0, #1`                 |
| 0x1B   | asl        | Arithmetic shift left (impl: same as lsl)                  | int regs, flags      | dest, count       | `asl I0, #1`                 |
| 0x1C   | nop        | No operation                                               | —                    | —                 | `nop`                        |
| 0x1D   | eoj        | End of job (halt execution)                                | halted               | —                 | `eoj`                        |
| 0x1E   | push       | Push integer or immediate to data stack                    | stack, int reg       | src               | `push I0`                    |
| 0x1F   | pop        | Pop integer from data stack                                | stack, int reg       | dest              | `pop I0`                     |
| 0x20   | scmp       | Compare binary/string values (Z=1 if equal)                | string regs, flags   | left, right       | `scmp S0, S1`                |
| 0x21   | scat       | Concatenate binary/string data (append)                    | string regs          | dest, src         | `scat S0, S1`                |
| 0x22   | scut       | Cut N bytes from end of string                             | string reg, int      | dest, len         | `scut S0, I0`                |
| 0x23   | slen       | Store byte length of binary/string                         | int reg, string reg  | dest, src         | `slen I0, S0`                |
| 0x24   | spaste     | Insert binary/string into indexed target                   | idx, string reg      | destIdx, src      | `spaste S0[#2], S1`          |
| 0x25   | serase     | Remove bytes from indexed range                            | idx, int             | destIdx, len      | `serase S0[#2], I0`          |
| 0x26   | xconnect   | Open communication interface                               | comm                 | —                 | `xconnect`                   |
| 0x27   | xhangup    | Close communication interface                              | comm                 | —                 | `xhangup`                    |
| 0x28   | xsetpar    | Set communication parameters from buffer                   | comm, string reg     | src               | `xsetpar S0`                 |
| 0x29   | xawlen     | Set answer lengths from buffer                             | comm, string reg     | src               | `xawlen S0`                  |
| 0x2A   | xsend      | Send request and receive response                          | comm, string regs    | resp, req         | `xsend S0, S1`               |
| 0x2B   | xsendf     | Send frequent data                                         | comm, string reg     | payload           | `xsendf S0`                  |
| 0x2C   | xrequf     | Receive frequent data                                      | comm, string reg     | dest              | `xrequf S0`                  |
| 0x2D   | xstopf     | Stop frequent mode                                         | comm                 | —                 | `xstopf`                     |
| 0x2E   | xkeyb      | Read key bytes                                             | comm, string reg     | dest              | `xkeyb S0`                   |
| 0x2F   | xstate     | Read interface state                                       | comm, string reg     | dest              | `xstate S0`                  |
| 0x30   | xboot      | Boot/reset interface (if supported)                        | comm                 | —                 | `xboot`                      |
| 0x31   | xreset     | Reset interface                                            | comm                 | —                 | `xreset`                     |
| 0x32   | xtype      | Get interface type string                                  | comm, string reg     | dest              | `xtype S0`                   |
| 0x33   | xvers      | Get interface version                                      | comm, int reg        | dest              | `xvers I0`                   |
| 0x34   | ergb       | Emit byte result (unsigned 8-bit)                          | results, int         | name, value       | `ergb "RPM", I0`             |
| 0x35   | ergw       | Emit word result (unsigned 16-bit)                         | results, int         | name, value       | `ergw "RPM", I0`             |
| 0x36   | ergd       | Emit dword result (unsigned 32-bit)                        | results, int         | name, value       | `ergd "RPM", L0`             |
| 0x37   | ergi       | Emit int result (signed 16-bit)                            | results, int         | name, value       | `ergi "TEMP", I0`            |
| 0x38   | ergr       | Emit real (float) result                                   | results, float reg   | name, value       | `ergr "LAMBDA", F0`          |
| 0x39   | ergs       | Emit string result                                         | results, string reg  | name, value       | `ergs "VIN", S0`             |
| 0x3A   | a2flt      | Parse string to float                                      | float reg, string    | dest, src         | `a2flt F0, S0`               |
| 0x3B   | fadd       | Float add                                                  | float regs, flags    | dest, src         | `fadd F0, F1`                |
| 0x3C   | fsub       | Float subtract                                             | float regs, flags    | dest, src         | `fsub F0, F1`                |
| 0x3D   | fmul       | Float multiply                                             | float regs, flags    | dest, src         | `fmul F0, F1`                |
| 0x3E   | fdiv       | Float divide                                               | float regs, flags    | dest, src         | `fdiv F0, F1`                |
| 0x3F   | ergy       | Emit binary result                                         | results, string reg  | name, value       | `ergy "RAW", S0`             |
| 0x40   | enewset    | Clear result set                                           | results              | —                 | `enewset`                    |
| 0x41   | etag       | Conditional result skip based on requested set             | results, PC          | jumpTarget, name  | `etag #$10, S0`              |
| 0x42   | xreps      | Set repeat counter                                         | comm, int            | count             | `xreps I0`                   |
| 0x43   | gettmr     | Read error trap mask                                       | int reg, trap        | dest              | `gettmr I0`                  |
| 0x44   | settmr     | Set error trap mask                                        | trap, int            | value             | `settmr I0`                  |
| 0x45   | sett       | Set error trap bit                                         | trap, int            | bit               | `sett I0`                    |
| 0x46   | clrt       | Clear error trap bit                                       | trap                 | —                 | `clrt`                       |
| 0x47   | jt         | Jump if trap/error detected                                | flags, trap, PC      | offset, testBit?  | `jt #$20, I0`                |
| 0x48   | jnt        | Jump if no trap/error                                      | flags, trap, PC      | offset, testBit?  | `jnt #$20, I0`               |
| 0x49   | addc       | Add with carry                                             | int regs, flags      | dest, src         | `addc I0, I1`                |
| 0x4A   | subc       | Subtract with carry/borrow                                 | int regs, flags      | dest, src         | `subc I0, I1`                |
| 0x4B   | break      | Raise user break error (EDIABAS_BIP_0008)                  | —                    | —                 | `break`                      |
| 0x4C   | clrv       | Clear overflow flag                                        | flags                | —                 | `clrv`                       |
| 0x4D   | eerr       | Throw error for current trap bit                           | trap                 | —                 | `eerr`                       |
| 0x4E   | popf       | Pop flags from data stack                                  | stack, flags         | —                 | `popf`                       |
| 0x4F   | pushf      | Push flags to data stack                                   | stack, flags         | —                 | `pushf`                      |
| 0x50   | atsp       | Read value at stack offset (without popping)               | stack, int reg       | dest, offset      | `atsp I0, #4`                |
| 0x51   | swap       | Reverse bytes in string or slice                           | string reg, idx      | dest/idx          | `swap S0[#0]#4`              |
| 0x52   | setspc     | Set token separator/index for `stoken`                     | string/int           | separator, index? | `setspc S0, I0`              |
| 0x53   | srevrs     | Reverse string                                             | string reg           | dest              | `srevrs S0`                  |
| 0x54   | stoken     | Extract token from string                                  | string regs          | dest, src         | `stoken S0, S1`              |
| 0x55   | parb       | Read parameter byte                                        | int reg, params      | dest, index       | `parb B0, #1`                |
| 0x56   | parw       | Read parameter word                                        | int reg, params      | dest, index       | `parw I0, #1`                |
| 0x57   | parl       | Read parameter dword                                       | int reg, params      | dest, index       | `parl L0, #1`                |
| 0x58   | pars       | Read parameter string                                      | string reg, params   | dest, index       | `pars S0, #1`                |
| 0x59   | fclose     | Close file handle                                          | file, int reg        | handle            | `fclose I0`                  |
| 0x5A   | jg         | Jump if greater (signed)                                   | flags, PC            | offset            | `jg #$10`                    |
| 0x5B   | jge        | Jump if greater/equal (signed)                             | flags, PC            | offset            | `jge #$10`                   |
| 0x5C   | jl         | Jump if less (signed)                                      | flags, PC            | offset            | `jl #$10`                    |
| 0x5D   | jle        | Jump if less/equal (signed)                                | flags, PC            | offset            | `jle #$10`                   |
| 0x5E   | ja         | Jump if above (unsigned)                                   | flags, PC            | offset            | `ja #$10`                    |
| 0x5F   | jbe        | Jump if below/equal (unsigned)                             | flags, PC            | offset            | `jbe #$10`                   |
| 0x60   | fopen      | Open file                                                  | file, int/string     | handle, path      | `fopen I0, S0`               |
| 0x61   | fread      | Read one byte from file                                    | file, int regs       | dest, handle      | `fread I0, I1`               |
| 0x62   | freadln    | Read line from file into string                            | file, string/int     | dest, handle      | `freadln S0, I0`             |
| 0x63   | fseek      | Seek file position                                         | file, int regs       | handle, offset    | `fseek I0, I1`               |
| 0x64   | fseekln    | Seek file line number                                      | file, int regs       | handle, line      | `fseekln I0, I1`             |
| 0x65   | ftell      | Get file position                                          | file, int regs       | dest, handle      | `ftell I0, I1`               |
| 0x66   | ftellln    | Get file line number                                       | file, int regs       | dest, handle      | `ftellln I0, I1`             |
| 0x67   | a2fix      | Parse string to int                                        | int reg, string      | dest, src         | `a2fix I0, S0`               |
| 0x68   | fix2flt    | Convert int to float                                       | float reg, int       | dest, src         | `fix2flt F0, I0`             |
| 0x69   | parr       | Read parameter float                                       | float reg, params    | dest, index       | `parr F0, #1`                |
| 0x6A   | test       | Bitwise TEST (AND without storing result)                  | int regs, flags      | left, right       | `test I0, #1`                |
| 0x6B   | wait       | Delay in seconds                                           | —                    | duration          | `wait I0`                    |
| 0x6C   | date       | Get date (string or int)                                   | string/int reg       | dest              | `date S0`                    |
| 0x6D   | time       | Get time (string or int)                                   | string/int reg       | dest              | `time S0`                    |
| 0x6E   | xbatt      | Get battery voltage                                        | comm, int reg        | dest              | `xbatt I0`                   |
| 0x6F   | tosp       | Legacy/unused (no-op)                                      | —                    | —                 | `tosp`                       |
| 0x70   | xdownl     | Legacy/unused (no-op)                                      | —                    | —                 | `xdownl`                     |
| 0x71   | xgetport   | Read interface port value                                  | comm, int regs       | dest, port        | `xgetport I0, #1`            |
| 0x72   | xignit     | Get ignition voltage                                       | comm, int reg        | dest              | `xignit I0`                  |
| 0x73   | xloopt     | Loop test                                                  | comm, int reg        | dest              | `xloopt I0`                  |
| 0x74   | xprog      | Set program voltage                                        | comm, int            | value             | `xprog I0`                   |
| 0x75   | xraw       | Raw send/receive                                           | comm, string regs    | resp, req         | `xraw S0, S1`                |
| 0x76   | xsetport   | Set interface port value                                   | comm, string/int     | portIndex, value  | `xsetport S0, I0`            |
| 0x77   | xsireset   | Service interval reset                                     | comm, int            | value             | `xsireset I0`                |
| 0x78   | xstoptr    | Legacy/unused (no-op)                                      | —                    | —                 | `xstoptr`                    |
| 0x79   | fix2hex    | Int to hex string                                          | string reg, int      | dest, src         | `fix2hex S0, I0`             |
| 0x7A   | fix2dez    | Int to decimal string                                      | string reg, int      | dest, src         | `fix2dez S0, I0`             |
| 0x7B   | tabset     | Select active table by name                                | table, string        | name              | `tabset S0`                  |
| 0x7C   | tabseek    | Seek row by string value                                   | table, string regs   | column, value     | `tabseek S0, S1`             |
| 0x7D   | tabget     | Read table cell into string                                | table, string regs   | dest, column      | `tabget S0, S1`              |
| 0x7E   | strcat     | Concatenate strings (alias for SCAT; accepts imm/indexed)  | string regs          | dest, src         | `strcat S0, "OK"`            |
| 0x7F   | pary       | Read binary parameter                                      | string reg, params   | dest              | `pary S0`                    |
| 0x80   | parn       | Read parameter count                                       | int reg, params      | dest              | `parn I0`                    |
| 0x81   | ergc       | Emit char result (signed 8-bit)                            | results, int         | name, value       | `ergc "C", B0`               |
| 0x82   | ergl       | Emit long result (signed 32-bit)                           | results, int         | name, value       | `ergl "VAL", L0`             |
| 0x83   | tabline    | Set current table row by index                             | table, int           | row               | `tabline I0`                 |
| 0x84   | xsendr     | Legacy stub (clears destination)                           | string reg           | dest              | `xsendr S0`                  |
| 0x85   | xrecv      | Legacy stub (clears destination)                           | string reg           | dest              | `xrecv S0`                   |
| 0x86   | xinfo      | Legacy stub (empty string)                                 | string reg           | dest              | `xinfo S0`                   |
| 0x87   | flt2a      | Float to string                                            | string reg, float    | dest, src         | `flt2a S0, F0`               |
| 0x88   | setflt     | Set float precision (for flt2a)                            | —                    | precision         | `setflt I0`                  |
| 0x89   | cfgig      | Config get int                                             | int reg, string      | dest, key         | `cfgig I0, "PORT"`           |
| 0x8A   | cfgsg      | Config get string                                          | string regs          | dest, key         | `cfgsg S0, "DEVICE"`         |
| 0x8B   | cfgis      | Config set int                                             | string, int          | key, value        | `cfgis "TIMEOUT", I0`        |
| 0x8C   | a2y        | ASCII string to Y (binary)                                 | string regs          | dest, src         | `a2y S0, S1`                 |
| 0x8D   | xparraw    | Legacy/unused (no-op)                                      | —                    | —                 | `xparraw`                    |
| 0x8E   | hex2y      | Hex string to Y (binary)                                   | string regs          | dest, src         | `hex2y S0, S1`               |
| 0x8F   | strcmp     | String compare (sets flags)                                | string regs, flags   | left, right       | `strcmp S0, S1`              |
| 0x90   | strlen     | String length (bytes)                                      | int reg, string      | dest, src         | `strlen I0, S0`              |
| 0x91   | y2bcd      | Binary Y to BCD string                                     | string regs          | dest, src         | `y2bcd S0, S1`               |
| 0x92   | y2hex      | Binary Y to hex string                                     | string regs          | dest, src         | `y2hex S0, S1`               |
| 0x93   | shmset     | Set shared memory value                                    | string regs, shmem   | key, value        | `shmset "K", S0`             |
| 0x94   | shmget     | Get shared memory value                                    | string regs, shmem   | dest, key         | `shmget S0, "K"`             |
| 0x95   | ergsysi    | System info result / init request                          | results, int         | name, value       | `ergsysi "!INITIALISIERUNG", I0` |
| 0x96   | flt2fix    | Float to int                                               | int reg, float       | dest, src         | `flt2fix I0, F0`             |
| 0x97   | iupdate    | Update progress text                                       | progress             | text              | `iupdate S0`                 |
| 0x98   | irange     | Set progress range                                         | progress             | range             | `irange I0`                  |
| 0x99   | iincpos    | Increment progress position                                | progress             | delta             | `iincpos I0`                 |
| 0x9A   | tabseeku   | Seek row by numeric value                                  | table, string/int    | column, value     | `tabseeku S0, I0`            |
| 0x9B   | flt2y4     | Float to 4-byte Y (IEEE 754 single, LE)                    | string reg, float    | dest, src         | `flt2y4 S0, F0`              |
| 0x9C   | flt2y8     | Float to 8-byte Y (IEEE 754 double, LE)                    | string reg, float    | dest, src         | `flt2y8 S0, F0`              |
| 0x9D   | y42flt     | 4-byte Y to float                                          | float reg, string    | dest, src         | `y42flt F0, S0`              |
| 0x9E   | y82flt     | 8-byte Y to float                                          | float reg, string    | dest, src         | `y82flt F0, S0`              |
| 0x9F   | plink      | Link procedure handler                                     | proc registry, int   | id                | `plink I0`                   |
| 0xA0   | pcall      | Legacy stub (no-op)                                        | —                    | —                 | `pcall`                      |
| 0xA1   | fcomp      | Float compare (sets flags)                                 | float regs, flags    | left, right       | `fcomp F0, F1`               |
| 0xA2   | plinkv     | Link procedure with validation (stub)                      | proc registry, int   | id                | `plinkv I0`                  |
| 0xA3   | ppush      | Push int to procedure stack                                | proc stack, int      | src               | `ppush I0`                   |
| 0xA4   | ppop       | Pop int from procedure stack                               | proc stack, int      | dest              | `ppop I0`                    |
| 0xA5   | ppushflt   | Push float to procedure stack                              | proc stack, float    | src               | `ppushflt F0`                |
| 0xA6   | ppopflt    | Pop float from procedure stack                             | proc stack, float    | dest              | `ppopflt F0`                 |
| 0xA7   | ppushy     | Push binary/string to procedure stack                      | proc stack, string   | src               | `ppushy S0`                  |
| 0xA8   | ppopy      | Pop binary/string from procedure stack                     | proc stack, string   | dest              | `ppopy S0`                   |
| 0xA9   | pjtsr      | Procedure jump to subroutine (stub)                        | —                    | —                 | `pjtsr`                      |
| 0xAA   | tabsetex   | Table set (extended alias, same as tabset)                 | table, string        | name              | `tabsetex S0`                |
| 0xAB   | ufix2dez   | Unsigned int to decimal string                             | string reg, int      | dest, src         | `ufix2dez S0, I0`            |
| 0xAC   | generr     | Generate error (throws EdiabasError)                       | —                    | code              | `generr I0`                  |
| 0xAD   | ticks      | Get system ticks (ms since epoch, truncated to 32-bit)     | int reg              | dest              | `ticks I0`                   |
| 0xAE   | waitex     | Delay in milliseconds                                      | —                    | duration          | `waitex I0`                  |
| 0xAF   | xopen      | Legacy stub (no-op)                                        | —                    | —                 | `xopen`                      |
| 0xB0   | xclose     | Legacy stub (no-op)                                        | —                    | —                 | `xclose`                     |
| 0xB1   | xcloseex   | Legacy stub (no-op)                                        | —                    | —                 | `xcloseex`                   |
| 0xB2   | xswitch    | Legacy stub (no-op)                                        | —                    | —                 | `xswitch`                    |
| 0xB3   | xsendex    | Legacy stub (no-op)                                        | —                    | —                 | `xsendex`                    |
| 0xB4   | xrecvex    | Legacy stub (clears destination)                           | string reg           | dest              | `xrecvex S0`                 |
| 0xB5   | ssize      | String byte length (cp1252)                                | int reg, string      | dest, src         | `ssize I0, S0`               |
| 0xB6   | tabcols    | Get table column count                                     | table, int reg       | dest              | `tabcols I0`                 |
| 0xB7   | tabrows    | Get table row count                                        | table, int reg       | dest              | `tabrows I0`                 |

### 4.3 Notes on Legacy/Stubbed Opcodes

The following opcodes are **no-ops** or **stubs** in the TypeScript interpreter (EdiabasLib compatibility):

- **0x6F** (tosp), **0x70** (xdownl), **0x78** (xstoptr), **0x8D** (xparraw)
- **0x84** (xsendr), **0x85** (xrecv), **0x86** (xinfo)
- **0xA0** (pcall), **0xA9** (pjtsr)
- **0xAF** (xopen), **0xB0** (xclose), **0xB1** (xcloseex), **0xB2** (xswitch), **0xB3** (xsendex), **0xB4** (xrecvex)

These opcodes either clear their destination register or perform no action. They exist for backward compatibility with legacy EDIABAS programs.

---

## 5. Stack Operations

The interpreter maintains **two separate stacks**:

### 5.1 Data Stack

The **data stack** is a byte-addressable stack used for:

- Pushing/popping integer register values (`push`, `pop`)
- Saving/restoring CPU flags (`pushf`, `popf`)
- Reading stack values at an offset (`atsp`)

#### Data Stack Operations

| Opcode | Mnemonic | Description                                                |
|--------|----------|------------------------------------------------------------|
| 0x1E   | push     | Push integer register or immediate value (LE byte order)   |
| 0x1F   | pop      | Pop bytes into integer register (BE reconstruction)        |
| 0x4F   | pushf    | Push flags as 32-bit value (C=1, Z=2, S=4, V=8)            |
| 0x4E   | popf     | Pop 32-bit value and restore flags                         |
| 0x50   | atsp     | Read value at stack offset (relative to top, no pop)       |

#### Push/Pop Byte Order

- **push**: Stores bytes in **little-endian** order (LSB first)
- **pop**: Reconstructs value in **big-endian** order (MSB first) — this is an implementation quirk

Example:

```assembly
push I0      ; I0=0x1234 → stack: [0x34, 0x12]
pop I1       ; I1 ← 0x1234 (reconstructed)
```

### 5.2 Procedure Stack

The **procedure stack** is used by procedure-related opcodes for passing parameters to external procedures:

| Opcode | Mnemonic | Description                                  |
|--------|----------|----------------------------------------------|
| 0xA3   | ppush    | Push integer to procedure stack              |
| 0xA4   | ppop     | Pop integer from procedure stack             |
| 0xA5   | ppushflt | Push float to procedure stack                |
| 0xA6   | ppopflt  | Pop float from procedure stack               |
| 0xA7   | ppushy   | Push binary/string to procedure stack        |
| 0xA8   | ppopy    | Pop binary/string from procedure stack       |

The procedure stack is separate from the data stack and is only used for external procedure calls (via `plink`).

### 5.3 Call Stack

The **call stack** stores return addresses for subroutine calls:

- **jtsr (0x0C)**: Push current PC to call stack, jump to offset
- **ret (0x0D)**: Pop return address from call stack, jump to it

---

## 6. String and Binary Handling

String registers (`S0–SF`) store **binary data** internally, encoded as CP1252 bytes but represented as UTF-8 strings in the TypeScript implementation.

### 6.1 String Encoding

- **Storage**: Internally stored as UTF-8 strings (converted from CP1252 bytes)
- **Operations**: Binary operations use `utf8ToCp1252()` to convert back to bytes
- **Max length**: Default 255 bytes (configurable via `RegisterSetOptions.maxStringSize`)

### 6.2 String Operations

| Operation  | Opcode | Description                                        |
|------------|--------|----------------------------------------------------|
| move       | 0x00   | Copy string or indexed slice                       |
| clear      | 0x01   | Clear string (set to empty)                        |
| scmp       | 0x20   | Binary compare (sets Z flag if equal)              |
| scat       | 0x21   | Concatenate (append src to dest)                   |
| scut       | 0x22   | Cut N bytes from end                               |
| slen       | 0x23   | Get byte length                                    |
| spaste     | 0x24   | Insert bytes at indexed position                   |
| serase     | 0x25   | Remove bytes from indexed range                    |
| swap       | 0x51   | Reverse byte order (entire string or slice)        |
| srevrs     | 0x53   | Reverse entire string                              |
| stoken     | 0x54   | Extract token by separator                         |
| strcmp     | 0x8F   | String compare (sets flags)                        |
| strlen     | 0x90   | String length (bytes)                              |
| ssize      | 0xB5   | String size in bytes (CP1252)                      |

### 6.3 Indexed String Operands

Indexed operands allow operations on **string slices**:

```
Sx[index]          — slice starting at index
Sx[index]#length   — slice with fixed length
Sx[reg]            — slice with register index
Sx[reg,#offset]    — slice with register index + offset
```

Examples:

```assembly
move I0, S0[#2]#4    ; Read 4 bytes from S0 starting at offset 2
spaste S1[#0], S2    ; Insert S2 at the start of S1
swap S0[#0]#4        ; Reverse first 4 bytes of S0
```

### 6.4 Binary Conversion Operations

| Operation | Opcode | Description                                           |
|-----------|--------|-------------------------------------------------------|
| a2y       | 0x8C   | ASCII string to binary (Y-register)                   |
| hex2y     | 0x8E   | Hex string to binary (e.g., "48656C6C6F" → bytes)    |
| y2bcd     | 0x91   | Binary to BCD string                                  |
| y2hex     | 0x92   | Binary to hex string (uppercase)                      |

---

## 7. Result Collection

Results are collected using `erg*` opcodes and returned to the caller after job execution.

### 7.1 Result Types

| Opcode | Mnemonic | Type     | Size         | Description                           |
|--------|----------|----------|--------------|---------------------------------------|
| 0x34   | ergb     | byte     | 8-bit        | Unsigned byte (0–255)                 |
| 0x35   | ergw     | word     | 16-bit       | Unsigned word (0–65535)               |
| 0x36   | ergd     | dword    | 32-bit       | Unsigned dword (0–4294967295)         |
| 0x81   | ergc     | char     | 8-bit        | Signed byte (-128 to 127)             |
| 0x37   | ergi     | int      | 16-bit       | Signed word (-32768 to 32767)         |
| 0x82   | ergl     | long     | 32-bit       | Signed dword (-2147483648 to ...)     |
| 0x38   | ergr     | real     | 64-bit       | IEEE-754 double-precision float       |
| 0x39   | ergs     | string   | Variable     | String (CP1252)                       |
| 0x3F   | ergy     | binary   | Variable     | Binary data                           |

### 7.2 Result Management

- **enewset (0x40)**: Clear all results (start new result set)
- **etag (0x41)**: Conditional result skip — if a "results request" set is provided and the result name is not in it, jump to the specified offset

### 7.3 System Results

- **ergsysi (0x95)**: Emit system info result or set initialization request flag
  - If name is `"!INITIALISIERUNG"` and value is non-zero, sets the `requestInit` flag

### 7.4 Result Naming

Result names are **case-insensitive** (converted to uppercase internally). The result name can be:

- An immediate string (e.g., `ergs "VIN", S0`)
- A string register (e.g., `ergs S1, S0`)

---

## 8. Error Handling and Trap Bits

The interpreter supports **error trapping** via trap bits, allowing programs to handle specific error conditions.

### 8.1 Trap Bit System

Error trapping uses:

- **Error trap mask** (`errorTrapMask`): 32-bit bitmask indicating which errors should be trapped
- **Error trap bit number** (`errorTrapBitNr`): The last trap bit that was set

### 8.2 Trap Bit Operations

| Opcode | Mnemonic | Description                                      |
|--------|----------|--------------------------------------------------|
| 0x43   | gettmr   | Read error trap mask into integer register       |
| 0x44   | settmr   | Set error trap mask from integer register        |
| 0x45   | sett     | Set error trap bit (store bit number)            |
| 0x46   | clrt     | Clear error trap bit                             |
| 0x47   | jt       | Jump if trap detected (optionally test bit)      |
| 0x48   | jnt      | Jump if no trap detected (optionally test bit)   |
| 0x4D   | eerr     | Throw error for current trap bit                 |

### 8.3 Trap Bit to Error Code Mapping

The `TrapBitDict` maps error codes to trap bit numbers:

| Error Code            | Trap Bit |
|-----------------------|----------|
| EDIABAS_BIP_0002      | 2        |
| EDIABAS_BIP_0006      | 6        |
| EDIABAS_BIP_0011      | 8        |
| EDIABAS_BIP_0009      | 9        |
| EDIABAS_BIP_0010      | 10       |
| EDIABAS_IFH_0001      | 11       |
| EDIABAS_IFH_0002      | 12       |
| EDIABAS_IFH_0003      | 13       |
| EDIABAS_IFH_0004      | 14       |
| EDIABAS_IFH_0005      | 15       |
| EDIABAS_IFH_0006      | 16       |
| EDIABAS_IFH_0007      | 17       |
| EDIABAS_IFH_0008      | 18       |
| EDIABAS_IFH_0009      | 19       |
| EDIABAS_IFH_0010      | 20       |
| EDIABAS_IFH_0011      | 21       |
| EDIABAS_IFH_0012      | 22       |
| EDIABAS_IFH_0013      | 23       |
| EDIABAS_IFH_0014      | 24       |
| EDIABAS_IFH_0015      | 25       |
| EDIABAS_IFH_0016      | 26       |
| EDIABAS_IFH_0069      | 28       |
| EDIABAS_IFH_0074      | 29       |

### 8.4 Error Handling Example

```assembly
settmr #$0800     ; Enable trap for bit 11 (EDIABAS_IFH_0001)
xconnect          ; Try to connect (may fail)
jt error_handler  ; Jump if error trapped
; ... success path ...
error_handler:
  eerr            ; Re-throw the error
```

---

## 9. Job Execution Flow

### 9.1 Execution Model

The interpreter executes jobs using a **fetch-decode-execute** cycle:

1. **Fetch**: Read opcode byte at PC
2. **Decode**: Read addressing mode byte, decode operands
3. **Execute**: Call opcode handler, update PC
4. **Repeat**: Until `eoj` (0x1D) or error

### 9.2 Job Initialization

To execute a job:

1. Call `Interpreter.start(jobName, parameters)`
2. Interpreter resolves job name to bytecode offset
3. Registers, flags, stacks, and state are initialized
4. Parameters are loaded into `ParameterSet`

### 9.3 Job Termination

A job terminates when:

- **eoj (0x1D)**: Normal completion (sets `halted = true`)
- **Error thrown**: Exception propagates to caller
- **break (0x4B)**: User break (throws `EDIABAS_BIP_0008`)

### 9.4 Return Value

`Interpreter.execute()` returns a `ResultCollector` containing all results emitted by `erg*` opcodes.

---

## 10. Communication Interface

Communication opcodes (`x*` opcodes) interact with an external `CommunicationInterface` (e.g., OBD-II, K-line, ENET).

### 10.1 Communication Lifecycle

| Opcode | Mnemonic  | Description                             |
|--------|-----------|-----------------------------------------|
| 0x26   | xconnect  | Open/connect interface                  |
| 0x27   | xhangup   | Close/disconnect interface              |
| 0x31   | xreset    | Reset interface                         |
| 0x30   | xboot     | Boot/reset interface (if supported)     |

### 10.2 Configuration

| Opcode | Mnemonic | Description                                   |
|--------|----------|-----------------------------------------------|
| 0x28   | xsetpar  | Set communication parameters (from buffer)    |
| 0x29   | xawlen   | Set answer lengths (from buffer)              |
| 0x42   | xreps    | Set repeat counter                            |

### 10.3 Data Transfer

| Opcode | Mnemonic | Description                                         |
|--------|----------|-----------------------------------------------------|
| 0x2A   | xsend    | Send request, receive response                      |
| 0x75   | xraw     | Raw send/receive (no protocol processing)           |
| 0x2B   | xsendf   | Send frequent data (continuous transmission)        |
| 0x2C   | xrequf   | Receive frequent data                               |
| 0x2D   | xstopf   | Stop frequent mode                                  |

### 10.4 Interface Information

| Opcode | Mnemonic  | Description                              |
|--------|-----------|------------------------------------------|
| 0x32   | xtype     | Get interface type string                |
| 0x33   | xvers     | Get interface version                    |
| 0x2F   | xstate    | Get interface state                      |
| 0x2E   | xkeyb     | Read key bytes                           |

### 10.5 Hardware Control

| Opcode | Mnemonic  | Description                              |
|--------|-----------|------------------------------------------|
| 0x6E   | xbatt     | Get battery voltage (mV)                 |
| 0x72   | xignit    | Get ignition voltage (mV)                |
| 0x74   | xprog     | Set programming voltage (mV)             |
| 0x71   | xgetport  | Read interface port value                |
| 0x76   | xsetport  | Set interface port value                 |
| 0x73   | xloopt    | Loop test                                |
| 0x77   | xsireset  | Service interval reset                   |

---

## 11. File System Operations

File opcodes provide access to the host file system (if a `FileSystem` implementation is provided).

### 11.1 File Operations

| Opcode | Mnemonic | Description                                       |
|--------|----------|---------------------------------------------------|
| 0x60   | fopen    | Open file (handle ← int, path ← string)          |
| 0x59   | fclose   | Close file handle                                 |
| 0x61   | fread    | Read one byte from file                           |
| 0x62   | freadln  | Read line from file (into string register)        |
| 0x63   | fseek    | Seek file position (byte offset)                  |
| 0x64   | fseekln  | Seek file line number                             |
| 0x65   | ftell    | Get current file position (bytes)                 |
| 0x66   | ftellln  | Get current file line number                      |

### 11.2 File Operations Example

```assembly
fopen I0, S0      ; Open file at path in S0, store handle in I0
freadln S1, I0    ; Read line from file I0 into S1
fclose I0         ; Close file I0
```

---

## 12. Table Operations

Table opcodes provide access to embedded lookup tables (parsed from EDIABAS OBJECT files).

### 12.1 Table Management

| Opcode | Mnemonic  | Description                                    |
|--------|-----------|------------------------------------------------|
| 0x7B   | tabset    | Select active table by name                    |
| 0xAA   | tabsetex  | Select active table (alias for tabset)         |
| 0x83   | tabline   | Set current row by index                       |
| 0xB6   | tabcols   | Get column count                               |
| 0xB7   | tabrows   | Get row count (excluding header)               |

### 12.2 Table Data Access

| Opcode | Mnemonic  | Description                                    |
|--------|-----------|------------------------------------------------|
| 0x7C   | tabseek   | Seek row by string value (column, value)       |
| 0x9A   | tabseeku  | Seek row by numeric value (column, value)      |
| 0x7D   | tabget    | Read cell value into string register           |

### 12.3 Table Operations Example

```assembly
tabset S0         ; Select table by name in S0
tabseek S1, S2    ; Find row where column S1 equals value S2
tabget S3, S4     ; Read value from column S4 into S3
```

---

## Appendix A: Operand Encoding Examples

### Example 1: Register to Register

```
move I0, I1
```

Encoding:

```
[0x00][0x11][0x10][0x11]
  ^     ^    ^     ^
opcode mode  I0    I1
      (REG,REG)
```

### Example 2: Immediate to Register

```
adds B0, #$42
```

Encoding:

```
[0x04][0x15][0x00][0x42]
  ^     ^    ^     ^
opcode mode  B0   imm8
      (REG,IMM8)
```

### Example 3: Indexed String Operand

```
move I0, S0[#2]#4
```

Encoding:

```
[0x00][0xC1][0x10][0x1C][0x02][0x00][0x04][0x00]
  ^     ^    ^     ^     ^-------^   ^-------^
opcode mode  I0    S0    index(LE)   length(LE)
      (IDX_IMM_LEN_IMM, REG)
```

### Example 4: String Immediate

```
ergs "VIN", S0
```

Encoding:

```
[0x39][0x81][0x04][0x00]['V']['I']['N'][0x00][0x1C]
  ^     ^    ^-------^   ^-----------------^   ^
opcode mode  str_len     string_data(CP1252)  S0
      (IMM_STR, REG_S)
```

---

## Appendix B: Implementation Notes

### B.1 Byte Order

- **File headers**: Little-endian
- **Immediates**: Little-endian (IMM16, IMM32)
- **Stack push**: Little-endian byte order
- **Stack pop**: Big-endian reconstruction (implementation quirk)

### B.2 Type Enforcement

The interpreter **strictly enforces operand types**:

- Integer opcodes (`adds`, `subb`, etc.) reject float or string registers
- Float opcodes (`fadd`, `fsub`, etc.) require float registers
- String opcodes (`scat`, `slen`, etc.) require string registers

Violating type constraints throws `EdiabasError` with code `REGISTER_ERROR`.

### B.3 String Encoding

- **Storage**: Strings are stored as UTF-8 in JavaScript/TypeScript
- **Operations**: Binary operations convert to CP1252 bytes via `utf8ToCp1252()`
- **Indexed access**: Operates on CP1252 byte offsets, not UTF-8 character offsets

### B.4 Progress Reporting

The interpreter supports progress reporting for long-running jobs:

- **iupdate (0x97)**: Update progress text
- **irange (0x98)**: Set progress range (total steps)
- **iincpos (0x99)**: Increment progress position

External code can poll `progressText`, `progressRange`, and `progressPos` from the interpreter state.

---

## Appendix C: Disassembler

The `@ediabas/best-parser` package includes a **disassembler** that converts bytecode to human-readable assembly:

```typescript
import { disassemble } from "@ediabas/best-parser";

const instructions = disassemble(code, offset);
for (const instr of instructions) {
  console.log(`${instr.offset.toString(16)}: ${instr.mnemonic} ${instr.operands.join(", ")}`);
}
```

Example output:

```
0: move I0, #$0010
5: adds B0, B1
7: jz #$0020
c: jtsr #$0100
11: eoj
```

---

## Document Metadata

- **Generated from**: `packages/interpreter/src/` and `packages/best-parser/src/`
- **Interpreter version**: As of commit 0e3ebe8 (2026-02-07)
- **Opcode count**: 184 (0x00–0xB7)
- **Register types**: 6 (B, A, I, L, S, F)
- **Addressing modes**: 16 (0x0–0xF)

For implementation details, refer to the source code in the [emdzej/ediabas](https://github.com/emdzej/ediabas) repository.
