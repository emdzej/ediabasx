# BEST2 Virtual Machine Reference

## Overview

BEST2 (BMW Enhanced Scripting Technology 2) is a stack-based bytecode virtual machine used in BMW diagnostic files (`.prg` and `.grp`). It was designed for executing diagnostic jobs on ECUs (Electronic Control Units).

## File Format

### PRG/GRP Structure

Files are XOR-encrypted with key `0xF7` (for bytecode) or `0x5A` (for older format).

```
Offset  Size  Description
------  ----  -----------
0x00    16    Magic: "@EDIABAS OBJECT"
0x10    4     File type: 0=GRP (group), 1=PRG (program)
0x14    4     Reserved (-1)
0x18    4     SSIZE (max string register size)
0x78    4     Reserved pointer
0x7C    4     Uses list offset
0x80    4     Job code offset
0x84    4     Table list offset
0x88    4     Job list offset
0x8C    4     Reserved pointer
0x90    4     Description offset
0x94    4     Version info offset
0x98    4     Reserved
```

**Job Entry (0x44 bytes):**
```
Offset  Size  Description
------  ----  -----------
0x00    64    Job name (null-terminated, Windows-1252)
0x40    4     Job bytecode offset
```

**Table Entry (0x50 bytes):**
```
Offset  Size  Description
------  ----  -----------
0x00    64    Table name (null-terminated)
0x40    4     Column data offset
0x48    4     Column count
0x4C    4     Row count
```

---

## Register Architecture

### 8-bit Registers (32 total)
| Register | Code  | Description |
|----------|-------|-------------|
| B0-BF    | 0x00-0x0F | General purpose byte registers |
| A0-AF    | 0x80-0x8F | Additional byte registers |

### 16-bit Registers (16 total)
| Register | Code  | Description |
|----------|-------|-------------|
| I0-I7    | 0x10-0x17 | Integer registers (low bank) |
| I8-IF    | 0x90-0x97 | Integer registers (high bank) |

### 32-bit Registers (8 total)
| Register | Code  | Description |
|----------|-------|-------------|
| L0-L3    | 0x18-0x1B | Long registers (low bank) |
| L4-L7    | 0x98-0x9B | Long registers (high bank) |

### String Registers (16 total)
| Register | Code  | Description |
|----------|-------|-------------|
| S0-S7    | 0x1C-0x23 | String registers (low bank) |
| S8-SF    | 0x2C-0x33 | String registers (high bank) |

### Float Registers (8 total)
| Register | Code  | Description |
|----------|-------|-------------|
| F0-F7    | 0x24-0x2B | 64-bit floating point (double precision) |

---

## Addressing Modes

| Mode | Code | Format | Description |
|------|------|--------|-------------|
| NONE | 0x0 | - | No operand |
| REG_S | 0x1 | Sn | String register |
| REG_AB | 0x2 | An/Bn | 8-bit register |
| REG_I | 0x3 | In | 16-bit register |
| REG_L | 0x4 | Ln | 32-bit register |
| IMM8 | 0x5 | #$XX.B | 8-bit immediate |
| IMM16 | 0x6 | #$XXXX.I | 16-bit immediate |
| IMM32 | 0x7 | #$XXXXXXXX.L | 32-bit immediate |
| IMM_STR | 0x8 | "text" | String immediate |
| IDX_IMM | 0x9 | Rn[#idx] | Indexed with immediate offset |
| IDX_REG | 0xA | Rn[Rm] | Indexed with register offset |
| IDX_REG_IMM | 0xB | Rn[Rm,#off] | Indexed with register + immediate |
| IDX_IMM_LEN_IMM | 0xC | Rn[#idx]#len | Indexed with immediate, length immediate |
| IDX_IMM_LEN_REG | 0xD | Rn[#idx]Rm | Indexed with immediate, length in register |
| IDX_REG_LEN_IMM | 0xE | Rn[Rm]#len | Indexed with register, length immediate |
| IDX_REG_LEN_REG | 0xF | Rn[Rm]Rp | Indexed with register, length in register |

---

## Instruction Format

Each instruction consists of:
```
[opcode:1] [addr_mode:1] [operand0:n] [operand1:m]
```

Where `addr_mode` byte encodes:
- High nibble (bits 4-7): Addressing mode for operand 0
- Low nibble (bits 0-3): Addressing mode for operand 1

---

## CPU Flags

| Flag | Description | Set by |
|------|-------------|--------|
| Z (Zero) | Set if result is zero | Arithmetic, compare ops |
| C (Carry) | Set on unsigned overflow/borrow | Arithmetic ops |
| V (Overflow) | Set on signed overflow | Arithmetic ops |
| S (Sign/Minus) | Set if result is negative | Arithmetic ops |
| T (Timer) | Timer flag | `sett`, `clrt` |

---

## Instruction Set (184 opcodes)

### Data Movement (0x00-0x01)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x00 | `move` | dst, src | Copy value from src to dst |
| 0x01 | `clear` | dst | Set register to zero |

### Arithmetic (0x02-0x06, 0x49-0x4A)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x02 | `comp` | op1, op2 | Compare (op1 - op2), set flags only |
| 0x03 | `subb` | dst, src | dst = dst - src |
| 0x04 | `adds` | dst, src | dst = dst + src |
| 0x05 | `mult` | dst, src | dst = dst × src |
| 0x06 | `divs` | dst, src | dst = dst ÷ src |
| 0x49 | `addc` | dst, src | Add with carry |
| 0x4A | `subc` | dst, src | Subtract with carry |

### Logic (0x07-0x0A)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x07 | `and` | dst, src | Bitwise AND |
| 0x08 | `or` | dst, src | Bitwise OR |
| 0x09 | `xor` | dst, src | Bitwise XOR |
| 0x0A | `not` | dst | Bitwise NOT |
| 0x6A | `test` | op1, op2 | AND and set flags, don't store |

### Shifts (0x18-0x1B)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x18 | `asr` | dst, count | Arithmetic shift right |
| 0x19 | `lsl` | dst, count | Logical shift left |
| 0x1A | `lsr` | dst, count | Logical shift right |
| 0x1B | `asl` | dst, count | Arithmetic shift left |

### Control Flow (0x0B-0x15, 0x47-0x48, 0x5A-0x5F)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x0B | `jump` | addr | Unconditional jump |
| 0x0C | `jtsr` | addr | Jump to subroutine |
| 0x0D | `ret` | - | Return from subroutine |
| 0x0E | `jc` | addr | Jump if carry |
| 0x0F | `jae` | addr | Jump if above or equal (≥ unsigned) |
| 0x10 | `jz` | addr | Jump if zero |
| 0x11 | `jnz` | addr | Jump if not zero |
| 0x12 | `jv` | addr | Jump if overflow |
| 0x13 | `jnv` | addr | Jump if no overflow |
| 0x14 | `jmi` | addr | Jump if minus (S flag) |
| 0x15 | `jpl` | addr | Jump if plus (no S flag) |
| 0x47 | `jt` | addr | Jump if timer flag |
| 0x48 | `jnt` | addr | Jump if no timer flag |
| 0x5A | `jg` | addr | Jump if greater (signed) |
| 0x5B | `jge` | addr | Jump if greater or equal (signed) |
| 0x5C | `jl` | addr | Jump if less (signed) |
| 0x5D | `jle` | addr | Jump if less or equal (signed) |
| 0x5E | `ja` | addr | Jump if above (unsigned) |
| 0x5F | `jbe` | addr | Jump if below or equal (unsigned) |

### Flags (0x16-0x17, 0x4C)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x16 | `clrc` | - | Clear carry flag |
| 0x17 | `setc` | - | Set carry flag |
| 0x4C | `clrv` | - | Clear overflow flag |

### Stack (0x1E-0x1F, 0x4E-0x51)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x1C | `nop` | - | No operation |
| 0x1D | `eoj` | - | End of job |
| 0x1E | `push` | src | Push value onto stack |
| 0x1F | `pop` | dst | Pop value from stack |
| 0x4E | `popf` | dst | Pop flags |
| 0x4F | `pushf` | src | Push flags |
| 0x50 | `atsp` | dst | Get stack pointer |
| 0x51 | `swap` | op1, op2 | Swap register values |
| 0x4B | `break` | - | Breakpoint (debugging) |

### String Operations (0x20-0x25, 0x53-0x54, 0x7E, 0x8F-0x90, 0xB5)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x20 | `scmp` | str1, str2 | String compare (legacy) |
| 0x21 | `scat` | dst, src | String concatenate (legacy) |
| 0x22 | `scut` | str, pos | String cut (substring) |
| 0x23 | `slen` | str | Get string length (legacy) |
| 0x24 | `spaste` | dst, src, pos | Insert string at position |
| 0x25 | `serase` | str, pos, len | Erase substring |
| 0x53 | `srevrs` | str | Reverse string |
| 0x54 | `stoken` | dst, src, delim | Tokenize string |
| 0x7E | `strcat` | dst, src | String concatenate |
| 0x8F | `strcmp` | str1, str2 | String compare |
| 0x90 | `strlen` | str | Get string length |
| 0xB5 | `ssize` | reg | Get string buffer size |

### Conversion (0x67, 0x79-0x7A, 0x8C, 0x8E, 0x91-0x92, 0xAB)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x67 | `a2fix` | dst, str | ASCII to integer |
| 0x79 | `fix2hex` | dst, val | Integer to hex string |
| 0x7A | `fix2dez` | dst, val | Integer to decimal string (signed) |
| 0x8C | `a2y` | dst, str | ASCII hex to binary |
| 0x8E | `hex2y` | dst, str | Hex string to binary |
| 0x91 | `y2bcd` | dst, bin | Binary to BCD |
| 0x92 | `y2hex` | dst, bin | Binary to hex string |
| 0xAB | `ufix2dez` | dst, val | Integer to decimal string (unsigned) |

### Float Operations (0x3A-0x3E, 0x68, 0x87, 0x96, 0x9B-0x9E, 0xA1)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x3A | `a2flt` | dst, str | ASCII to float |
| 0x3B | `fadd` | dst, src | Float add |
| 0x3C | `fsub` | dst, src | Float subtract |
| 0x3D | `fmul` | dst, src | Float multiply |
| 0x3E | `fdiv` | dst, src | Float divide |
| 0x68 | `fix2flt` | dst, int | Integer to float |
| 0x87 | `flt2a` | dst, flt | Float to ASCII |
| 0x88 | `setflt` | dst, val | Set float value |
| 0x96 | `flt2fix` | dst, flt | Float to integer |
| 0x9B | `flt2y4` | dst, flt | Float to 4-byte binary |
| 0x9C | `flt2y8` | dst, flt | Float to 8-byte binary |
| 0x9D | `y42flt` | dst, bin | 4-byte binary to float |
| 0x9E | `y82flt` | dst, bin | 8-byte binary to float |
| 0xA1 | `fcomp` | flt1, flt2 | Float compare |

### Communication - Basic (0x26-0x33, 0x42)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x26 | `xconnect` | - | Open interface connection |
| 0x27 | `xhangup` | - | Close interface connection |
| 0x28 | `xsetpar` | name, val | Set interface parameter |
| 0x29 | `xawlen` | len | Set answer length |
| 0x2A | `xsend` | data | Send data to ECU |
| 0x2B | `xsendf` | data | Send data (fast mode) |
| 0x2C | `xrequf` | - | Request fast mode |
| 0x2D | `xstopf` | - | Stop fast mode |
| 0x2E | `xkeyb` | - | Get keybytes |
| 0x2F | `xstate` | - | Get interface state |
| 0x30 | `xboot` | - | Boot ECU |
| 0x31 | `xreset` | - | Reset ECU |
| 0x32 | `xtype` | - | Get interface type |
| 0x33 | `xvers` | - | Get interface version |
| 0x42 | `xreps` | - | Get response |

### Communication - Extended (0x6E, 0x71-0x78, 0x84-0x86, 0x8D, 0xAF-0xB4)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x6E | `xbatt` | - | Get battery voltage |
| 0x71 | `xgetport` | - | Get port settings |
| 0x72 | `xignit` | - | Check ignition state |
| 0x73 | `xloopt` | - | Loop test |
| 0x74 | `xprog` | - | Programming mode |
| 0x75 | `xraw` | data | Send raw data |
| 0x76 | `xsetport` | - | Set port settings |
| 0x77 | `xsireset` | - | Software interface reset |
| 0x78 | `xstoptr` | - | Stop transmission |
| 0x84 | `xsendr` | data, len | Send with response |
| 0x85 | `xrecv` | dst | Receive data |
| 0x86 | `xinfo` | - | Get info |
| 0x8D | `xparraw` | - | Raw parameter mode |
| 0xAF | `xopen` | cfg | Open interface |
| 0xB0 | `xclose` | - | Close interface |
| 0xB1 | `xcloseex` | - | Close interface extended |
| 0xB2 | `xswitch` | - | Switch interface |
| 0xB3 | `xsendex` | data | Send extended |
| 0xB4 | `xrecvex` | dst | Receive extended |

### Results (0x34-0x39, 0x3F-0x41, 0x81-0x82, 0x95)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x34 | `ergb` | name, val | Result byte |
| 0x35 | `ergw` | name, val | Result word (16-bit) |
| 0x36 | `ergd` | name, val | Result dword (32-bit) |
| 0x37 | `ergi` | name, val | Result integer (signed) |
| 0x38 | `ergr` | name, val | Result real (float) |
| 0x39 | `ergs` | name, val | Result string |
| 0x3F | `ergy` | name, val | Result binary |
| 0x40 | `enewset` | - | Create new result set |
| 0x41 | `etag` | name | Tag/label for results |
| 0x81 | `ergc` | name, val | Result char |
| 0x82 | `ergl` | name, val | Result long |
| 0x95 | `ergsysi` | name | System info result |

### Parameters (0x55-0x58, 0x69, 0x7F-0x80)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x55 | `parb` | dst, idx | Get parameter byte |
| 0x56 | `parw` | dst, idx | Get parameter word |
| 0x57 | `parl` | dst, idx | Get parameter long |
| 0x58 | `pars` | dst, idx | Get parameter string |
| 0x69 | `parr` | dst, idx | Get parameter real |
| 0x7F | `pary` | dst, idx | Get parameter binary |
| 0x80 | `parn` | - | Get parameter count |

### Tables (0x7B-0x7D, 0x83, 0x9A, 0xAA, 0xB6-0xB7)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x7B | `tabset` | name | Set active table |
| 0x7C | `tabseek` | col, val | Seek in table (case-sensitive) |
| 0x7D | `tabget` | dst, col | Get value from current row |
| 0x83 | `tabline` | row | Set current row |
| 0x9A | `tabseeku` | col, val | Seek in table (case-insensitive) |
| 0xAA | `tabsetex` | name, opts | Set table extended |
| 0xB6 | `tabcols` | dst | Get column count |
| 0xB7 | `tabrows` | dst | Get row count |

### Timers (0x43-0x46, 0x6B-0x6D, 0xAD-0xAE)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x43 | `gettmr` | dst | Get timer value |
| 0x44 | `settmr` | val | Set timer value |
| 0x45 | `sett` | - | Set timer flag |
| 0x46 | `clrt` | - | Clear timer flag |
| 0x6B | `wait` | ms | Wait milliseconds |
| 0x6C | `date` | dst | Get current date |
| 0x6D | `time` | dst | Get current time |
| 0xAD | `ticks` | dst | Get system ticks |
| 0xAE | `waitex` | ms | Wait extended |

### File I/O (0x59-0x66)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x59 | `fclose` | handle | Close file |
| 0x60 | `fopen` | handle, path | Open file |
| 0x61 | `fread` | dst, handle | Read from file |
| 0x62 | `freadln` | dst, handle | Read line from file |
| 0x63 | `fseek` | handle, pos | Seek in file |
| 0x64 | `fseekln` | handle, line | Seek to line |
| 0x65 | `ftell` | dst, handle | Get file position |
| 0x66 | `ftellln` | dst, handle | Get line number |

### Procedures (0x9F-0xA0, 0xA2-0xA9)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x9F | `plink` | proc | Link procedure |
| 0xA0 | `pcall` | proc | Call procedure |
| 0xA2 | `plinkv` | proc | Link procedure with validation |
| 0xA3 | `ppush` | val | Push to procedure stack |
| 0xA4 | `ppop` | dst | Pop from procedure stack |
| 0xA5 | `ppushflt` | val | Push float to procedure stack |
| 0xA6 | `ppopflt` | dst | Pop float from procedure stack |
| 0xA7 | `ppushy` | val | Push binary to procedure stack |
| 0xA8 | `ppopy` | dst | Pop binary from procedure stack |
| 0xA9 | `pjtsr` | addr | Jump to subroutine (procedure) |

### Shared Memory (0x93-0x94)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x93 | `shmset` | key, val | Set shared memory |
| 0x94 | `shmget` | dst, key | Get shared memory |

### Configuration (0x89-0x8B)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x89 | `cfgig` | key | Config get integer |
| 0x8A | `cfgsg` | key | Config get string |
| 0x8B | `cfgis` | key, val | Config set integer |

### Misc (0x4D, 0x52, 0x6F, 0x70, 0x97-0x99, 0xAC)
| Opcode | Mnemonic | Operands | Description |
|--------|----------|----------|-------------|
| 0x4D | `eerr` | - | Enable error handling |
| 0x52 | `setspc` | - | Set special mode |
| 0x6F | `tosp` | - | To stack pointer |
| 0x70 | `xdownl` | - | Download |
| 0x97 | `iupdate` | - | Interface update |
| 0x98 | `irange` | - | Interface range |
| 0x99 | `iincpos` | - | Interface increment position |
| 0xAC | `generr` | code | Generate error |

---

## Error Codes

| Code Range | Category | Description |
|------------|----------|-------------|
| 0x0000-0x0FFF | IFH | Interface handler errors |
| 0x1000-0x1FFF | BIP | Bytecode interpreter errors |
| 0x2000-0x2FFF | SYS | System errors |
| 0x3000-0x3FFF | API | API errors |
| 0x4000-0x4FFF | NET | Network errors |
| 0x5000-0x5FFF | RUN | Runtime errors |

---

## Example Disassembly

```asm
; Job: STATUS_LESEN
0000: move    I0, #$0001.I       ; Initialize counter
0004: tabset  "STATUS_TABLE"     ; Set active table
000A: tabseek #$00, "CODE"       ; Find CODE column
0010: jz      __EXIT             ; Jump if not found
0014: tabget  S0, #$01           ; Get value from column 1
0018: ergs    "RESULT", S0       ; Output result string
001E: adds    I0, #$0001.I       ; Increment counter
0022: comp    I0, #$0064.I       ; Compare with 100
0026: jl      __000A             ; Loop if less
002A: eoj                        ; End of job
```

---

## Implementation Notes

### TypeScript Implementation

The EdiabasX project includes a full TypeScript implementation:
- `@ediabasx/best-parser` - File parsing and disassembly
- `@ediabasx/interpreter` - Full VM implementation
- `@ediabasx/core` - Shared types and utilities

### XOR Decryption

```typescript
const XOR_KEY = 0xF7;

function decrypt(data: Uint8Array): Uint8Array {
  return data.map(b => b ^ XOR_KEY);
}
```

### Register Access

```typescript
// 8-bit: B0-BF (0x00-0x0F), A0-AF (0x80-0x8F)
// 16-bit: I0-IF (0x10-0x17, 0x90-0x97)
// 32-bit: L0-L7 (0x18-0x1B, 0x98-0x9B)
// String: S0-SF (0x1C-0x23, 0x2C-0x33)
// Float: F0-F7 (0x24-0x2B)

function getRegisterType(code: number): 'byte' | 'int' | 'long' | 'string' | 'float' {
  if (code < 0x10 || (code >= 0x80 && code < 0x90)) return 'byte';
  if ((code >= 0x10 && code < 0x18) || (code >= 0x90 && code < 0x98)) return 'int';
  if ((code >= 0x18 && code < 0x1C) || (code >= 0x98 && code < 0x9C)) return 'long';
  if ((code >= 0x1C && code < 0x24) || (code >= 0x2C && code < 0x34)) return 'string';
  if (code >= 0x24 && code < 0x2C) return 'float';
  throw new Error(`Unknown register: 0x${code.toString(16)}`);
}
```

---

## References

- Original EdiabasLib: https://github.com/uholeschak/ediabaslib
- EdiabasX (TypeScript): https://github.com/emdzej/ediabasx
- BMW EDIABAS documentation (internal)
- ISO 14229 (UDS)
- ISO 14230 (KWP2000)
- ISO 13400 (DoIP)
