# Ediabas BEST2 Interpreter & Bytecode

This document describes the BEST2 interpreter and bytecode format as implemented in this repo (packages/interpreter, packages/best-parser). It is based on the code paths in the interpreter and parser rather than existing documentation.

## 1. PRG/GRP File Structure

The parser (`packages/best-parser/src/parser.ts`) supports **two formats**:

### 1.1 Legacy binary PRG/GRP

* **Magic**: `0x00475250` (little‑endian for `"PRG\0"`).
* **Version**: `0 = GRP (group)`, `1 = PRG (program)`.
* Header layout (all little‑endian uint32):
  | Offset | Field | Meaning |
  | --- | --- | --- |
  | 0x00 | magic | `0x00475250` |
  | 0x04 | version | 0/1 |
  | 0x08 | stringTableOffset | start of null‑terminated string table |
  | 0x0C | stringTableSize | byte length |
  | 0x10 | jobTableOffset | job table start |
  | 0x14 | jobCount | number of job entries |
  | 0x18 | codeOffset | bytecode start |
  | 0x1C | codeSize | bytecode length |

* **String table**: concatenated CP‑1252 strings separated by `0x00`.
* **Job table entries** (12 bytes each):
  * `nameOffset` (uint32 into string table)
  * `offset` (uint32 bytecode offset)
  * `argCount` (uint16)
  * `resultCount` (uint16)

### 1.2 “@EDIABAS OBJECT” (XOR‑encoded) format

* **Magic**: first 16 bytes are `"@EDIABAS OBJECT\0"`.
* **Version**: uint32 at offset `0x10` (0 = GRP, 1 = PRG).
* **Data encoding**: bytes **from `0xA0` onward are XOR‑encoded with `0xF7`**.
* **Decoded text content** (from `0xA0`) includes metadata and JOB/ARG/RESULT definitions:
  * `ECU:`, `ORIGIN:`, `REVISION:`, `AUTHOR:`, `ECUCOMMENT:`
  * `JOBNAME:`, `JOBCOMMENT:`, `RESULT:` / `RESULTTYPE:` / `RESULTCOMMENT:`
  * `ARG:` / `ARGTYPE:` / `ARGCOMMENT:`
* **Binary job list** (in raw, XOR‑encoded region):
  * Offset to list stored at `0x88` (uint32, **not XOR‑encoded**).
  * At list start: `jobCount` (int32, **not XOR‑encoded**).
  * Each entry is 0x44 bytes (68):
    * 64‑byte name (XOR‑decoded, null‑terminated)
    * 4‑byte bytecode offset (XOR‑decoded)
* **Binary table list** (raw, XOR‑encoded):
  * Offset stored at `0x84` (uint32, not XOR‑encoded).
  * At list start: `tableCount` (int32, **may be raw or XOR‑encoded**; parser tries both).
  * Each entry is 0x50 bytes (80):
    * 64‑byte name (XOR‑decoded)
    * `columnOffset` (uint32, XOR‑decoded)
    * `columns` (uint32, XOR‑decoded)
    * `rows` (uint32, XOR‑decoded)
  * Table data is a series of null‑terminated XOR‑encoded CP‑1252 strings (headers + rows).

**Note:** For EDIABAS OBJECT files, `parsePrg` returns `code = []` and keeps the raw buffer; the interpreter uses `rawBuffer` and XOR‑decodes it when needed.

## 2. Registers & Addressing Modes

### 2.1 Register set

The interpreter implements BEST2 register types (`packages/interpreter/src/registers.ts`):

| Type | Count | Size | Purpose |
| --- | --- | --- | --- |
| **B0–BF** | 16 | 8‑bit | byte registers |
| **A0–AF** | 16 | 8‑bit | alternate byte registers |
| **I0–IF** | 16 | 16‑bit | word registers |
| **L0–L7** | 8 | 32‑bit | long registers |
| **S0–SF** | 16 | string | CP‑1252 strings (max length configurable, default 255) |
| **F0–F7** | 8 | float64 | floating‑point registers |

### 2.2 Register encoding (bytecode)

Register operands are encoded as a single byte. The interpreter maps codes as follows:

```
0x00–0x0F  -> B0–BF
0x10–0x17  -> I0–I7
0x18–0x1B  -> L0–L3
0x1C–0x23  -> S0–S7
0x24–0x2B  -> F0–F7
0x2C–0x33  -> S8–SF
0x80–0x8F  -> A0–AF
0x90–0x97  -> I8–IF
0x98–0x9B  -> L4–L7
```

### 2.3 Addressing mode byte

Each instruction is:

```
[ opcode ][ addrMode ][ operands... ]
```

* `addrMode` high nibble = **arg0** mode, low nibble = **arg1** mode.
* Integer immediates are **little‑endian signed** (`int16`, `int32`).
* String immediates are **CP‑1252** and stored as: `len:int16` followed by `len` bytes; if last byte is `0x00`, it is trimmed for the string value.

**Addressing modes**:

| Mode | Value | Meaning | Operand bytes |
| --- | --- | --- | --- |
| NONE | 0x0 | no operand | 0 |
| REG_S / REG_AB / REG_I / REG_L | 0x1–0x4 | register operand (byte code) | 1 |
| IMM8 | 0x5 | immediate 8‑bit | 1 |
| IMM16 | 0x6 | immediate 16‑bit | 2 |
| IMM32 | 0x7 | immediate 32‑bit | 4 |
| IMM_STR | 0x8 | immediate string | 2 + len |
| IDX_IMM | 0x9 | `Sx[imm16]` | 1 + 2 |
| IDX_REG | 0xA | `Sx[reg]` | 2 |
| IDX_REG_IMM | 0xB | `Sx[reg, imm16]` | 2 + 2 |
| IDX_IMM_LEN_IMM | 0xC | `Sx[imm16]#imm16` | 1 + 2 + 2 |
| IDX_IMM_LEN_REG | 0xD | `Sx[imm16]#reg` | 1 + 2 + 1 |
| IDX_REG_LEN_IMM | 0xE | `Sx[reg]#imm16` | 2 + 2 |
| IDX_REG_LEN_REG | 0xF | `Sx[reg]#reg` | 3 |

Indexed operands **must use an S register as base**. The interpreter treats them as slices of the underlying CP‑1252 byte array.

## 3. Bytecode Reference

The table below lists all implemented opcodes (as in `disassembler.ts` and `interpreter.ts`).

**Operand notation**:
* `R` = register operand (type depends on opcode)
* `I` = integer immediate (`IMM8/16/32`)
* `S` = string operand (`IMM_STR` or S register)
* `Y` = binary/string payload (S register or `IMM_STR`)
* `Idx` = indexed string operand (`Sx[...]`)

### 3.1 Arithmetic / bit ops

| Hex | Mnemonic | Operands | Description |
| --- | --- | --- | --- |
| 0x00 | move | R/Idx, R/I/S/Idx | Universal move. Supports numeric, float, string, and indexed writes; sets flags for numeric moves. |
| 0x01 | clear | R | Zero register (numeric/float/string). Flags: Z=1, C=0, S=0, V=0. |
| 0x02 | comp | R, R/I | Compare (CMP). Updates Z/S/C/V. |
| 0x03 | subb | R, R/I | Subtract (SUB). Updates flags. |
| 0x04 | adds | R, R/I | Add (ADD). Updates flags. |
| 0x05 | mult | R, R/I | Multiply. Stores high part into source if source is a register. |
| 0x06 | divs | R, R/I | Divide. Stores remainder into source if source is a register. |
| 0x07 | and | R, R/I | Bitwise AND. |
| 0x08 | or | R, R/I | Bitwise OR. |
| 0x09 | xor | R, R/I | Bitwise XOR. |
| 0x0A | not | R | Bitwise NOT. |
| 0x18 | asr | R, R/I | Shift right. Carry = last shifted bit. |
| 0x19 | lsl | R, R/I | Shift left. Carry = last shifted bit. |
| 0x1A | lsr | R, R/I | Alias of shift right. |
| 0x1B | asl | R, R/I | Alias of shift left. |
| 0x49 | addc | R, R/I | Add with carry flag. |
| 0x4A | subc | R, R/I | Subtract with carry/borrow. |
| 0x6A | test | R, R/I | Bit test (AND into flags only). |

### 3.2 Control flow & flags

| Hex | Mnemonic | Operands | Description |
| --- | --- | --- | --- |
| 0x0B | jump | I/R | Unconditional jump. Immediate is relative offset; register uses `target - pc`. |
| 0x0C | jtsr | I/R | Call subroutine (push return address, jump). |
| 0x0D | ret | — | Return from subroutine. |
| 0x0E | jc | I/R | Jump if carry set. |
| 0x0F | jae | I/R | Jump if carry clear (unsigned ≥). |
| 0x10 | jz | I/R | Jump if zero. |
| 0x11 | jnz | I/R | Jump if not zero. |
| 0x12 | jv | I/R | Jump if overflow set. |
| 0x13 | jnv | I/R | Jump if overflow clear. |
| 0x14 | jmi | I/R | Jump if sign set (minus). |
| 0x15 | jpl | I/R | Jump if sign clear (plus). |
| 0x16 | clrc | — | Clear carry flag. |
| 0x17 | setc | — | Set carry flag. |
| 0x1C | nop | — | No operation. |
| 0x1D | eoj | — | End of job (halt). |
| 0x4C | clrv | — | Clear overflow flag. |
| 0x47 | jt | I/R, R/I? | Jump if error trap detected (optional test bit in arg1). |
| 0x48 | jnt | I/R, R/I? | Jump if no error trap detected (optional test bit in arg1). |
| 0x5A | jg | I/R | Jump if greater (signed). |
| 0x5B | jge | I/R | Jump if greater or equal (signed). |
| 0x5C | jl | I/R | Jump if less (signed). |
| 0x5D | jle | I/R | Jump if less or equal (signed). |
| 0x5E | ja | I/R | Jump if above (unsigned). |
| 0x5F | jbe | I/R | Jump if below or equal (unsigned). |
| 0x4B | break | — | Throws EDIABAS_BIP_0008 error. |

### 3.3 Stack & flags on stack

| Hex | Mnemonic | Operands | Description |
| --- | --- | --- | --- |
| 0x1E | push | R/I | Push integer register or immediate (byte/word/long) to data stack. |
| 0x1F | pop | R | Pop into integer register; updates Z/S/V. |
| 0x4E | popf | — | Pop flags from stack (4 bytes). |
| 0x4F | pushf | — | Push flags to stack (4 bytes). |
| 0x50 | atsp | R, I | Read stack bytes at offset into register (peek). Updates Z/S/V. |
| 0x51 | swap | S/Idx | Reverse bytes within string or indexed slice. |
| 0x6F | tosp | — | Legacy/unused no‑op. |

### 3.4 String & binary operations

| Hex | Mnemonic | Operands | Description |
| --- | --- | --- | --- |
| 0x20 | scmp | Y, Y | Compare binary data; sets Z if equal. |
| 0x21 | scat | S, Y | Append source bytes to S register. |
| 0x22 | scut | S, R/I | Remove N bytes from end of S. |
| 0x23 | slen | R, Y | Byte length of binary/string operand. Updates Z/S. |
| 0x24 | spaste | Idx, Y | Insert bytes at indexed position. |
| 0x25 | serase | Idx, R/I | Remove bytes from indexed position. |
| 0x53 | srevrs | S | Reverse string contents. |
| 0x54 | stoken | S, S | Extract token using separator set by `setspc` (opcode 0x52). Z=1 if not found. |
| 0x7E | strcat | S, S/Y | Concatenate strings. Supports immediate or indexed in arg1. |
| 0x79 | fix2hex | S, R | Integer → hex string (uppercase). |
| 0x7A | fix2dez | S, R | Integer → decimal string. |
| 0x8F | strcmp | S, S | Lexicographic compare (flags). |
| 0x90 | strlen | R, S | String length (character count). Updates Z/S. |
| 0x8C | a2y | S, S | ASCII string → binary (Y) (CP‑1252). |
| 0x8E | hex2y | S, S | Hex string → binary (Y). |
| 0x91 | y2bcd | S, S | Binary (Y) → BCD string. |
| 0x92 | y2hex | S, S | Binary (Y) → hex string. |
| 0x9B | flt2y4 | S, F | Float → 4‑byte IEEE 754 (LE) in Y. |
| 0x9C | flt2y8 | S, F | Float → 8‑byte IEEE 754 (LE) in Y. |
| 0x9D | y42flt | F, S | Y (4 bytes) → float32. |
| 0x9E | y82flt | F, S | Y (8 bytes) → float64. |
| 0xB5 | ssize | R, S | Byte length of string encoded as CP‑1252. |

### 3.5 Floating‑point ops

| Hex | Mnemonic | Operands | Description |
| --- | --- | --- | --- |
| 0x3A | a2flt | F, S | Parse string → float. |
| 0x3B | fadd | F, F | Float add. |
| 0x3C | fsub | F, F | Float subtract. |
| 0x3D | fmul | F, F | Float multiply. |
| 0x3E | fdiv | F, F | Float divide. |
| 0xA1 | fcomp | F, F | Float compare (flags). |
| 0x68 | fix2flt | F, R | Integer → float. |
| 0x96 | flt2fix | R, F | Float → integer (with flags). |
| 0x87 | flt2a | S, F | Float → string with precision (see `setflt`). |
| 0x88 | setflt | R/I | Set float string precision (default 4). |

### 3.6 Result collection (ERG*)

| Hex | Mnemonic | Operands | Description |
| --- | --- | --- | --- |
| 0x34 | ergb | S, R/I | Record result: **byte** (unsigned 8‑bit). |
| 0x35 | ergw | S, R/I | Record result: **word** (unsigned 16‑bit). |
| 0x36 | ergd | S, R/I | Record result: **dword** (unsigned 32‑bit). |
| 0x37 | ergi | S, R/I | Record result: **int** (signed 16‑bit). |
| 0x38 | ergr | S, F | Record result: **real** (float). |
| 0x39 | ergs | S, S | Record result: **string**. |
| 0x3F | ergy | S, Y | Record result: **binary**. |
| 0x81 | ergc | S, R/I | Record result: **char** (signed 8‑bit). |
| 0x82 | ergl | S, R/I | Record result: **long** (signed 32‑bit). |
| 0x40 | enewset | — | Clear result set. |
| 0x41 | etag | I/R, S | Conditional result skip: if `resultsRequest` is set and name not requested, jump. |
| 0x95 | ergsysi | S, R/I | System result. If name is `!INITIALISIERUNG`, sets `requestInit` when value != 0. |

### 3.7 Parameters & configuration

| Hex | Mnemonic | Operands | Description |
| --- | --- | --- | --- |
| 0x55 | parb | R, I | Read parameter N (1‑based) as int → dest. |
| 0x56 | parw | R, I | Same as parb. |
| 0x57 | parl | R, I | Same as parb. |
| 0x58 | pars | S, I | Read parameter N as string. |
| 0x69 | parr | F, I | Read parameter N as float. |
| 0x7F | pary | S | Read binary payload. |
| 0x80 | parn | R | Read parameter count. Updates Z/S. |
| 0x89 | cfgig | R, S | Read config int by key. |
| 0x8A | cfgsg | S, S | Read config string by key. |
| 0x8B | cfgis | S, R/I | Set config int by key. |

### 3.8 Time / error traps / progress

| Hex | Mnemonic | Operands | Description |
| --- | --- | --- | --- |
| 0x43 | gettmr | R | Read error‑trap mask. Updates Z/S. |
| 0x44 | settmr | R/I | Set error‑trap mask. |
| 0x45 | sett | R/I | Set error‑trap bit number. |
| 0x46 | clrt | — | Clear error‑trap bit. |
| 0x4D | eerr | — | Trigger trap error (`TrapBitDict` mapping or generic). |
| 0x6B | wait | R/I | Wait for N seconds (integer). |
| 0x6C | date | R/S | Get date (`YYYY-MM-DD` or numeric `YYYYMMDD`). |
| 0x6D | time | R/S | Get time (`HH:MM:SS` or numeric `HHMMSS`). |
| 0xAD | ticks | R | Store `Date.now()` (ms, lower 32 bits). |
| 0xAE | waitex | R/I | Wait N milliseconds. |
| 0x97 | iupdate | S | Set progress text. |
| 0x98 | irange | R/I | Set progress range; resets position to -1. |
| 0x99 | iincpos | R/I | Increment progress position. |

### 3.9 Tables

| Hex | Mnemonic | Operands | Description |
| --- | --- | --- | --- |
| 0x7B | tabset | S | Select table by name (Z=1 if not found). |
| 0x7C | tabseek | S, S | Seek row by column name + string value. |
| 0x7D | tabget | S, S | Get cell into S register. |
| 0x83 | tabline | R/I | Set row index. |
| 0x9A | tabseeku | S, R/I | Seek by column name + numeric value. |
| 0xAA | tabsetex | S | Same as tabset (extended). |
| 0xB6 | tabcols | R | Get column count. |
| 0xB7 | tabrows | R | Get row count (includes header). |

### 3.10 Communication & file I/O

| Hex | Mnemonic | Operands | Description |
| --- | --- | --- | --- |
| 0x26 | xconnect | — | Connect interface. |
| 0x27 | xhangup | — | Disconnect interface. |
| 0x28 | xsetpar | S | Set communication parameters (binary). |
| 0x29 | xawlen | S | Set answer lengths (binary). |
| 0x2A | xsend | S, S | Send request; receive reply. |
| 0x2B | xsendf | S | Send frequent data. |
| 0x2C | xrequf | S | Receive frequent data. |
| 0x2D | xstopf | — | Stop frequent transfer. |
| 0x2E | xkeyb | S | Read key bytes. |
| 0x2F | xstate | S | Read interface state. |
| 0x30 | xboot | — | Boot interface (if supported). |
| 0x31 | xreset | — | Reset interface. |
| 0x32 | xtype | S | Read interface type string. |
| 0x33 | xvers | R | Read interface version. |
| 0x42 | xreps | R | Set repeat counter. |
| 0x6E | xbatt | R | Read battery voltage. |
| 0x71 | xgetport | R, R/I | Read port value. |
| 0x72 | xignit | R | Read ignition voltage. |
| 0x73 | xloopt | R | Loop test. |
| 0x74 | xprog | R/I | Set program voltage. |
| 0x75 | xraw | S, S | Raw request/response. |
| 0x76 | xsetport | S, R/I | Set port value. |
| 0x77 | xsireset | R/I | Service interval reset. |
| 0x84 | xsendr | S | Legacy stub (clears response). |
| 0x85 | xrecv | S | Legacy stub (clears destination). |
| 0x86 | xinfo | S | Legacy stub (clears destination). |
| 0x70 | xdownl | — | Legacy no‑op. |
| 0x78 | xstoptr | — | Legacy no‑op. |
| 0x8D | xparraw | — | Legacy no‑op. |
| 0xAF | xopen | — | Legacy no‑op. |
| 0xB0 | xclose | — | Legacy no‑op. |
| 0xB1 | xcloseex | — | Legacy no‑op. |
| 0xB2 | xswitch | — | Legacy no‑op. |
| 0xB3 | xsendex | — | Legacy no‑op. |
| 0xB4 | xrecvex | S | Legacy stub (clears destination). |
| 0x59 | fclose | R | Close file handle. |
| 0x60 | fopen | R, S | Open file; dest is handle. |
| 0x61 | fread | R, R | Read bytes into buffer. |
| 0x62 | freadln | S, R | Read line. |
| 0x63 | fseek | R, R | Seek to position. |
| 0x64 | fseekln | R, R | Seek to line. |
| 0x65 | ftell | R, R | Get position. |
| 0x66 | ftellln | R, R | Get line number. |

### 3.11 Procedures & shared memory

| Hex | Mnemonic | Operands | Description |
| --- | --- | --- | --- |
| 0x9F | plink | R/I | Link procedure id using `procedureLinker`. |
| 0xA0 | pcall | — | Legacy no‑op (procedure calls not implemented). |
| 0xA2 | plinkv | R/I | Link procedure id (validation stub). |
| 0xA3 | ppush | R | Push integer arg to procedure stack. |
| 0xA4 | ppop | R | Pop integer arg from procedure stack. |
| 0xA5 | ppushflt | F | Push float arg. |
| 0xA6 | ppopflt | F | Pop float arg. |
| 0xA7 | ppushy | S | Push binary arg (CP‑1252 bytes). |
| 0xA8 | ppopy | S | Pop binary arg into S register. |
| 0xA9 | pjtsr | — | Legacy no‑op. |
| 0x93 | shmset | S/Y, Y | Store value in shared memory. |
| 0x94 | shmget | S, S/Y | Load value from shared memory; sets C if missing. |
| 0xAC | generr | R/I | Throw generic error (`GENERR`). |

## 4. Stack, Strings & Results

### 4.1 Data stack

* `DataStack` stores **bytes** (little‑endian when pushing multi‑byte registers).
* Default depth: **256**. Overflow/underflow raise `EdiabasError`.
* Stack ops: `push`, `pop`, `atsp`, `pushf`, `popf`, `swap`.

### 4.2 Strings / binary handling

* Strings are stored internally as **UTF‑8** but **encoded/decoded as CP‑1252** when reading/writing binary payloads.
* Indexed addressing (`Sx[...]`) operates on the **raw CP‑1252 byte array**.
* `S` registers are limited by `SSIZE` (default 255). Writes are truncated.

### 4.3 Result collection

* Results are stored in a `ResultCollector` keyed by **uppercase name**.
* Types include: `byte`, `word`, `dword`, `char`, `int`, `long`, `real`, `string`, `binary`.
* ERG* opcodes **overwrite any existing result with the same name**.

## 5. Job Execution Flow & Error Handling

### 5.1 Job start

1. `Interpreter.start(jobName)` resolves job metadata + binary offset.
2. The program counter (`pc`) is set to the job’s bytecode offset.
3. Interpreter state is initialized: registers, flags, stacks, parameters, results, shared memory, tables, config, timer, and trap state.

### 5.2 Instruction cycle

For each step:

1. Decode `[opcode][addrMode][arg0][arg1]`.
2. Resolve operands (register, immediate, string, indexed).
3. Dispatch to handler for that opcode.
4. Update `pc` (default = next instruction; jumps override).
5. Stop on `eoj` (0x1D).

### 5.3 Error handling

* **Unknown opcode** ⇒ `EdiabasError(INVALID_INSTRUCTION)`.
* **Invalid register type** ⇒ `EdiabasError(REGISTER_ERROR)`.
* **Stack underflow/overflow** ⇒ `EdiabasError(STACK_UNDERFLOW/STACK_OVERFLOW)`.
* **BREAK (0x4B)** ⇒ `EDIABAS_BIP_0008`.
* **EERR (0x4D)**: uses `TrapBitDict` to map trap bit → error code, or falls back to `EDIABAS_BIP_0000`.
* **GENERR (0xAC)**: throws a generic error with the provided code.

### 5.4 Error trap logic

* `sett` sets an error‑trap bit number (or `0x40000000` when value is 0).
* `clrt` clears it.
* `jt` / `jnt` optionally compare against a test bit. If no arg provided, behavior is based on whether *any* trap is active.

---

This document reflects the behavior implemented in the interpreter, parser, and disassembler code in this repository.
