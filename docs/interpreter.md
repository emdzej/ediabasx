# EDIABAS Interpreter & Bytecode Reference

This document is generated from the actual TypeScript interpreter implementation in `packages/interpreter` and the PRG parser/disassembler in `packages/best-parser`. It describes how PRG/GRB files are structured, how operands are encoded, and how each bytecode opcode behaves.

---

## 1. PRG/GRB File Structure

The parser supports **two formats**:

### 1.1 Legacy binary PRG/GRP

Magic header is the 32‑bit little‑endian integer `0x00475250` (`"PRG\0"`). The header layout (all `uint32` LE unless noted) is:

| Offset | Field | Description |
| --- | --- | --- |
| 0x00 | magic | `0x00475250` (`"PRG\0"`) |
| 0x04 | version | 0 = GRP, 1 = PRG |
| 0x08 | stringTableOffset | Start of string table |
| 0x0C | stringTableSize | Bytes in string table |
| 0x10 | jobTableOffset | Start of job table |
| 0x14 | jobCount | Number of job entries |
| 0x18 | codeOffset | Start of bytecode |
| 0x1C | codeSize | Bytes of bytecode |

Derived ranges:

- `stringTableEnd = stringTableOffset + stringTableSize`
- `jobTableEnd = jobTableOffset + jobCount * 12`
- `codeEnd = codeOffset + codeSize`

**String table:** null‑terminated cp1252 strings.

**Job table (12 bytes each):**

| Field | Size | Meaning |
| --- | --- | --- |
| nameOffset | u32 | Offset into string table |
| offset | u32 | Bytecode offset |
| argCount | u16 | Argument count |
| resultCount | u16 | Result count |

### 1.2 EDIABAS OBJECT format

Magic header is ASCII `"@EDIABAS OBJECT"` (16 bytes). Layout:

| Offset | Field | Description |
| --- | --- | --- |
| 0x00 | magic | `"@EDIABAS OBJECT"` (ASCII, padded with NUL) |
| 0x10 | version | 0 = GRP, 1 = PRG |
| 0x84 | tableListOffset | Offset to table list (uint32, **not XOR**) |
| 0x88 | jobListOffset | Offset to job list (uint32, **not XOR**) |
| 0xA0 | dataOffset | Start of XOR‑encoded data |

**XOR encoding:** bytes from `0xA0` onwards are XOR‑encoded with key `0xF7`.

The decoded data area contains human‑readable text, including:

```
JOBNAME:<name>
JOBCOMMENT:<comment>
RESULT:<name>
RESULTTYPE:<type>
RESULTCOMMENT:<comment>
ARG:<name>
ARGTYPE:<type>
ARGCOMMENT:<comment>
```

**Binary job list** (compiled PRG):

- `jobListOffset` points to a structure:
  - `int32 jobCount` (NOT XOR‑encoded)
  - `jobCount` entries of size `0x44`
- Entry layout (XOR‑encoded fields):
  - `0x00..0x3F` — job name (64 bytes, cp1252, XOR‑encoded, NUL‑terminated)
  - `0x40..0x43` — bytecode offset (uint32, XOR‑encoded)

**Binary table list**:

- `tableListOffset` points to a structure:
  - `int32 tableCount` (encoding inconsistent; parser tries raw then XOR‑decoded)
  - `tableCount` entries of size `0x50`
- Entry layout (XOR‑encoded fields):
  - `0x00..0x3F` — table name (64 bytes, cp1252, XOR‑encoded)
  - `0x40..0x43` — column offset (uint32, XOR‑encoded)
  - `0x48..0x4B` — number of columns (uint32, XOR‑encoded)
  - `0x4C..0x4F` — number of rows (uint32, XOR‑encoded)

**Table data:** a sequence of XOR‑encoded, NUL‑terminated strings. The first row is headers, then `rows` data rows.

### 1.3 Bytecode placement & XOR decoding

- In the **legacy format**, bytecode is stored in the `code` range.
- In the **EDIABAS OBJECT format**, bytecode is embedded in the raw file and is XOR‑encoded with `0xF7`. The interpreter decodes the raw buffer when it needs to execute code.

---

## 2. Registers and Addressing Modes

### 2.1 Register set

The interpreter implements the BEST2 register model:

| Register group | Count | Width | Notes |
| --- | --- | --- | --- |
| **B0–BF** | 16 | 8‑bit | Unsigned byte |
| **A0–AF** | 16 | 8‑bit | Unsigned byte |
| **I0–IF** | 16 | 16‑bit | Unsigned word |
| **L0–L7** | 8 | 32‑bit | Unsigned dword |
| **S0–SF** | 16 | string | Stored as cp1252 bytes (default max length 255) |
| **F0–F7** | 8 | 64‑bit float | IEEE‑754 double |

**Internal interpreter state (not directly addressable as registers):**

- **PC** — program counter
- **Flags** — Z (zero), C (carry), V (overflow), S (sign)
- **Call stack** — return addresses for subroutines
- **Data stack** — byte‑addressable stack for PUSH/POP operations
- **Error trap state** — `errorTrapMask`, `errorTrapBitNr`
- **Progress state** — text, range, position (`iupdate`, `irange`, `iincpos`)
- **Token separator / index** — used by `stoken`
- **Table state** — active table and row

### 2.2 Register encoding in operands

Register operands use a **single byte** with the following mapping:

| Byte range | Register mapping |
| --- | --- |
| `0x00–0x0F` | B0–BF |
| `0x10–0x17` | I0–I7 |
| `0x18–0x1B` | L0–L3 |
| `0x1C–0x23` | S0–S7 |
| `0x24–0x2B` | F0–F7 |
| `0x2C–0x33` | S8–SF |
| `0x80–0x8F` | A0–AF |
| `0x90–0x97` | I8–IF |
| `0x98–0x9B` | L4–L7 |

### 2.3 Operand/addressing modes

Every instruction is encoded as:

```
[opcode:1][addrMode:1][arg0...][arg1...]
```

The **addressing mode byte** packs two 4‑bit nibbles:

- **high nibble** = mode for **arg0**
- **low nibble** = mode for **arg1**

| Mode (hex) | Name | Encoding | Notes |
| --- | --- | --- | --- |
| `0x0` | NONE | (no bytes) | operand omitted |
| `0x1` | REG_S | 1 byte register | any register class |
| `0x2` | REG_AB | 1 byte register | same as REG_S in interpreter |
| `0x3` | REG_I | 1 byte register | same as REG_S in interpreter |
| `0x4` | REG_L | 1 byte register | same as REG_S in interpreter |
| `0x5` | IMM8 | 1 byte immediate | unsigned 8‑bit |
| `0x6` | IMM16 | 2 bytes immediate | signed 16‑bit LE |
| `0x7` | IMM32 | 4 bytes immediate | signed 32‑bit LE |
| `0x8` | IMM_STR | 2‑byte length + data | length includes trailing NUL in many files |
| `0x9` | IDX_IMM | reg + i16 index | `Sx[#imm]` |
| `0xA` | IDX_REG | reg + reg | `Sx[reg]` |
| `0xB` | IDX_REG_IMM | reg + reg + i16 offset | `Sx[reg,#imm]` |
| `0xC` | IDX_IMM_LEN_IMM | reg + i16 index + i16 length | `Sx[#idx]#len` |
| `0xD` | IDX_IMM_LEN_REG | reg + i16 index + reg length | `Sx[#idx]reg` |
| `0xE` | IDX_REG_LEN_IMM | reg + reg index + i16 length | `Sx[reg]#len` |
| `0xF` | IDX_REG_LEN_REG | reg + reg index + reg length | `Sx[reg]reg` |

**Indexed operands** always use **S registers** as the base. Index/length can be immediate or register.

### 2.4 Jump offsets

All jump opcodes accept a **relative offset**, applied to the current PC *after* decoding the instruction. For some opcodes, the interpreter accepts either an immediate relative offset or a register containing a **target address** (it converts target to a relative offset internally).

---

## 3. Bytecode Reference

**Legend**

- **int reg** = B/A/I/L
- **float reg** = F
- **string reg** = S
- **idx** = indexed string operand (Sx[...])
- **imm** = immediate (8/16/32‑bit)

> The interpreter strictly enforces operand types (e.g., integer opcodes do not accept string or float registers).

| Opcode | Mnemonic | Description | Registers used | Operand format | Example |
| --- | --- | --- | --- | --- | --- |
| 0x00 | move | Move/copy between registers or to/from string slices. Supports int, float, string and indexed operands. | any reg, S‑idx | `dest, src` | `move I0, #$0010.I` |
| 0x01 | clear | Clear register (0 or empty string). | any reg | `dest` | `clear S0` |
| 0x02 | comp | Compare integers (sets flags). | int regs | `left, right` | `comp I0, I1` |
| 0x03 | subb | Subtract integers (sets flags). | int regs | `dest, src` | `subb I0, #$0001.I` |
| 0x04 | adds | Add integers (sets flags). | int regs | `dest, src` | `adds B0, B1` |
| 0x05 | mult | Multiply integers (sets flags; high part stored in src if reg). | int regs | `dest, src` | `mult I0, I1` |
| 0x06 | divs | Divide integers (dest=quotient; src=rem if reg). | int regs | `dest, src` | `divs L0, L1` |
| 0x07 | and | Bitwise AND. | int regs | `dest, src` | `and B0, #$0F.B` |
| 0x08 | or | Bitwise OR. | int regs | `dest, src` | `or B0, B1` |
| 0x09 | xor | Bitwise XOR. | int regs | `dest, src` | `xor I0, I1` |
| 0x0A | not | Bitwise NOT. | int reg | `dest` | `not A0` |
| 0x0B | jump | Unconditional relative jump. | — | `offset` | `jump #$00000010.L` |
| 0x0C | jtsr | Call subroutine (push PC, jump). | call stack | `offset` | `jtsr #$FFFFFFF0.L` |
| 0x0D | ret | Return from subroutine. | call stack | — | `ret` |
| 0x0E | jc | Jump if carry. | flags | `offset` | `jc #$00000020.L` |
| 0x0F | jae | Jump if no carry (aka JNC/JAE). | flags | `offset` | `jae #$00000020.L` |
| 0x10 | jz | Jump if zero. | flags | `offset` | `jz #$00000020.L` |
| 0x11 | jnz | Jump if not zero. | flags | `offset` | `jnz #$00000020.L` |
| 0x12 | jv | Jump if overflow. | flags | `offset` | `jv #$00000020.L` |
| 0x13 | jnv | Jump if no overflow. | flags | `offset` | `jnv #$00000020.L` |
| 0x14 | jmi | Jump if minus/sign. | flags | `offset` | `jmi #$FFFFFFF0.L` |
| 0x15 | jpl | Jump if plus/no sign. | flags | `offset` | `jpl #$00000008.L` |
| 0x16 | clrc | Clear carry flag. | flags | — | `clrc` |
| 0x17 | setc | Set carry flag. | flags | — | `setc` |
| 0x18 | asr | Arithmetic shift right (implemented as SHR). | int regs | `dest, count` | `asr I0, #$01.B` |
| 0x19 | lsl | Logical shift left (implemented as SHL). | int regs | `dest, count` | `lsl I0, #$01.B` |
| 0x1A | lsr | Logical shift right (implemented as SHR). | int regs | `dest, count` | `lsr I0, #$01.B` |
| 0x1B | asl | Arithmetic shift left (implemented as SHL). | int regs | `dest, count` | `asl I0, #$01.B` |
| 0x1C | nop | No operation. | — | — | `nop` |
| 0x1D | eoj | End of job (halt). | — | — | `eoj` |
| 0x1E | push | Push integer or immediate to data stack. | int regs, stack | `src` | `push I0` |
| 0x1F | pop | Pop integer from data stack. | int regs, stack | `dest` | `pop I0` |
| 0x20 | scmp | Compare binary/string values (Z set if equal). | string regs | `left, right` | `scmp S0, S1` |
| 0x21 | scat | Concatenate binary/string data (append). | string regs | `dest, src` | `scat S0, S1` |
| 0x22 | scut | Cut N bytes from end of string. | string + int | `dest, len` | `scut S0, I0` |
| 0x23 | slen | Store byte length of binary/string. | int + string | `dest, src` | `slen I0, S0` |
| 0x24 | spaste | Insert binary/string into indexed target. | S‑idx + string | `destIdx, src` | `spaste S0[#2], S1` |
| 0x25 | serase | Remove bytes from indexed range. | S‑idx + int | `destIdx, len` | `serase S0[#2], I0` |
| 0x26 | xconnect | Open communication interface. | comm | — | `xconnect` |
| 0x27 | xhangup | Close communication interface. | comm | — | `xhangup` |
| 0x28 | xsetpar | Set communication parameters from buffer. | comm + string | `src` | `xsetpar S0` |
| 0x29 | xawlen | Set answer lengths from buffer. | comm + string | `src` | `xawlen S0` |
| 0x2A | xsend | Send request and receive response. | comm + string | `resp, req` | `xsend S0, S1` |
| 0x2B | xsendf | Send frequent data. | comm + string | `payload` | `xsendf S0` |
| 0x2C | xrequf | Receive frequent data. | comm + string | `dest` | `xrequf S0` |
| 0x2D | xstopf | Stop frequent mode. | comm | — | `xstopf` |
| 0x2E | xkeyb | Read key bytes. | comm + string | `dest` | `xkeyb S0` |
| 0x2F | xstate | Read interface state. | comm + string | `dest` | `xstate S0` |
| 0x30 | xboot | Boot/reset interface (if supported). | comm | — | `xboot` |
| 0x31 | xreset | Reset interface. | comm | — | `xreset` |
| 0x32 | xtype | Get interface type string. | comm + string | `dest` | `xtype S0` |
| 0x33 | xvers | Get interface version. | comm + int | `dest` | `xvers I0` |
| 0x34 | ergb | Emit byte result (unsigned 8‑bit). | results + int | `name, value` | `ergb "RPM", I0` |
| 0x35 | ergw | Emit word result (unsigned 16‑bit). | results + int | `name, value` | `ergw "RPM", I0` |
| 0x36 | ergd | Emit dword result (unsigned 32‑bit). | results + int | `name, value` | `ergd "RPM", L0` |
| 0x37 | ergi | Emit int result (signed 16‑bit). | results + int | `name, value` | `ergi "TEMP", I0` |
| 0x38 | ergr | Emit real (float) result. | results + float | `name, value` | `ergr "LAMBDA", F0` |
| 0x39 | ergs | Emit string result. | results + string | `name, value` | `ergs "VIN", S0` |
| 0x3A | a2flt | Parse string to float. | float + string | `dest, src` | `a2flt F0, S0` |
| 0x3B | fadd | Float add. | float regs | `dest, src` | `fadd F0, F1` |
| 0x3C | fsub | Float subtract. | float regs | `dest, src` | `fsub F0, F1` |
| 0x3D | fmul | Float multiply. | float regs | `dest, src` | `fmul F0, F1` |
| 0x3E | fdiv | Float divide. | float regs | `dest, src` | `fdiv F0, F1` |
| 0x3F | ergy | Emit binary result. | results + string | `name, value` | `ergy "RAW", S0` |
| 0x40 | enewset | Clear result set. | results | — | `enewset` |
| 0x41 | etag | Conditional result skip based on requested set. | results + string | `jumpTarget, name` | `etag #$10.L, S0` |
| 0x42 | xreps | Set repeat counter. | comm + int | `count` | `xreps I0` |
| 0x43 | gettmr | Read error trap mask. | int regs | `dest` | `gettmr I0` |
| 0x44 | settmr | Set error trap mask. | int | `value` | `settmr I0` |
| 0x45 | sett | Set error trap bit. | int | `bit` | `sett I0` |
| 0x46 | clrt | Clear error trap bit. | — | — | `clrt` |
| 0x47 | jt | Jump if trap/error detected. | flags+trap | `offset, testBit?` | `jt #$20.L, I0` |
| 0x48 | jnt | Jump if no trap/error. | flags+trap | `offset, testBit?` | `jnt #$20.L, I0` |
| 0x49 | addc | Add with carry. | int regs | `dest, src` | `addc I0, I1` |
| 0x4A | subc | Subtract with carry/borrow. | int regs | `dest, src` | `subc I0, I1` |
| 0x4B | break | Raise user break error (EDIABAS_BIP_0008). | — | — | `break` |
| 0x4C | clrv | Clear overflow flag. | flags | — | `clrv` |
| 0x4D | eerr | Throw error for current trap bit. | trap | — | `eerr` |
| 0x4E | popf | Pop flags from data stack. | flags + stack | — | `popf` |
| 0x4F | pushf | Push flags to data stack. | flags + stack | — | `pushf` |
| 0x50 | atsp | Read value at stack offset. | int regs + stack | `dest, offset` | `atsp I0, #$0004.I` |
| 0x51 | swap | Reverse bytes in string or slice. | string regs | `dest/idx` | `swap S0[#0]#4` |
| 0x52 | setspc | Token separator/index for `stoken`. | string/int | `separator, index?` | `setspc S0, I0` |
| 0x53 | srevrs | Reverse string. | string reg | `dest` | `srevrs S0` |
| 0x54 | stoken | Extract token from string. | string regs | `dest, src` | `stoken S0, S1` |
| 0x55 | parb | Read parameter byte. | int regs | `dest, index` | `parb B0, #$01.B` |
| 0x56 | parw | Read parameter word. | int regs | `dest, index` | `parw I0, #$01.B` |
| 0x57 | parl | Read parameter dword. | int regs | `dest, index` | `parl L0, #$01.B` |
| 0x58 | pars | Read parameter string. | string regs | `dest, index` | `pars S0, #$01.B` |
| 0x59 | fclose | Close file handle. | file + int | `handle` | `fclose I0` |
| 0x5A | jg | Jump if greater (signed). | flags | `offset` | `jg #$10.L` |
| 0x5B | jge | Jump if greater/equal (signed). | flags | `offset` | `jge #$10.L` |
| 0x5C | jl | Jump if less (signed). | flags | `offset` | `jl #$10.L` |
| 0x5D | jle | Jump if less/equal (signed). | flags | `offset` | `jle #$10.L` |
| 0x5E | ja | Jump if above (unsigned). | flags | `offset` | `ja #$10.L` |
| 0x5F | jbe | Jump if below/equal (unsigned). | flags | `offset` | `jbe #$10.L` |
| 0x60 | fopen | Open file. | file + int/string | `handle, path` | `fopen I0, S0` |
| 0x61 | fread | Read one byte from file into int dest. | file + int | `dest, handle` | `fread I0, I1` |
| 0x62 | freadln | Read line from file into string. | file + string/int | `dest, handle` | `freadln S0, I0` |
| 0x63 | fseek | Seek file position. | file + int | `handle, offset` | `fseek I0, I1` |
| 0x64 | fseekln | Seek file line number. | file + int | `handle, line` | `fseekln I0, I1` |
| 0x65 | ftell | Get file position. | file + int | `dest, handle` | `ftell I0, I1` |
| 0x66 | ftellln | Get file line number. | file + int | `dest, handle` | `ftellln I0, I1` |
| 0x67 | a2fix | Parse string to int. | int + string | `dest, src` | `a2fix I0, S0` |
| 0x68 | fix2flt | Convert int to float. | float + int | `dest, src` | `fix2flt F0, I0` |
| 0x69 | parr | Read parameter float. | float + int | `dest, index` | `parr F0, #$01.B` |
| 0x6A | test | Bitwise TEST (AND sets flags). | int regs | `left, right` | `test I0, #$01.B` |
| 0x6B | wait | Delay in seconds. | int | `duration` | `wait I0` |
| 0x6C | date | Get date (string or int). | string/int | `dest` | `date S0` |
| 0x6D | time | Get time (string or int). | string/int | `dest` | `time S0` |
| 0x6E | xbatt | Get battery voltage. | comm + int | `dest` | `xbatt I0` |
| 0x6F | tosp | Legacy/unused (no‑op). | — | — | `tosp` |
| 0x70 | xdownl | Legacy/unused (no‑op). | — | — | `xdownl` |
| 0x71 | xgetport | Read interface port value. | comm + int | `dest, port` | `xgetport I0, #$01.B` |
| 0x72 | xignit | Get ignition voltage. | comm + int | `dest` | `xignit I0` |
| 0x73 | xloopt | Loop test. | comm + int | `dest` | `xloopt I0` |
| 0x74 | xprog | Set program voltage. | comm + int | `value` | `xprog I0` |
| 0x75 | xraw | Raw send/receive. | comm + string | `resp, req` | `xraw S0, S1` |
| 0x76 | xsetport | Set interface port value. | comm + string/int | `portIndex, value` | `xsetport S0, I0` |
| 0x77 | xsireset | Service interval reset. | comm + int | `value` | `xsireset I0` |
| 0x78 | xstoptr | Legacy/unused (no‑op). | — | — | `xstoptr` |
| 0x79 | fix2hex | Int to hex string. | string + int | `dest, src` | `fix2hex S0, I0` |
| 0x7A | fix2dez | Int to decimal string. | string + int | `dest, src` | `fix2dez S0, I0` |
| 0x7B | tabset | Select active table by name. | table + string | `name` | `tabset S0` |
| 0x7C | tabseek | Seek row by string value. | table + string | `column, value` | `tabseek S0, S1` |
| 0x7D | tabget | Read table cell into string. | table + string | `dest, column` | `tabget S0, S1` |
| 0x7E | strcat | Concatenate strings (alias for SCAT; accepts imm/indexed). | string regs | `dest, src` | `strcat S0, "OK"` |
| 0x7F | pary | Read binary parameter. | string | `dest` | `pary S0` |
| 0x80 | parn | Read parameter count. | int | `dest` | `parn I0` |
| 0x81 | ergc | Emit char result (signed 8‑bit). | results + int | `name, value` | `ergc "C", B0` |
| 0x82 | ergl | Emit long result (signed 32‑bit). | results + int | `name, value` | `ergl "VAL", L0` |
| 0x83 | tabline | Set current table row by index. | table + int | `row` | `tabline I0` |
| 0x84 | xsendr | Legacy stub (clears destination). | string | `dest` | `xsendr S0` |
| 0x85 | xrecv | Legacy stub (clears destination). | string | `dest` | `xrecv S0` |
| 0x86 | xinfo | Legacy stub (empty string). | string | `dest` | `xinfo S0` |
| 0x87 | flt2a | Float to string. | string + float | `dest, src` | `flt2a S0, F0` |
| 0x88 | setflt | Set float precision. | int | `precision` | `setflt I0` |
| 0x89 | cfgig | Config get int. | int + string | `dest, key` | `cfgig I0, "PORT"` |
| 0x8A | cfgsg | Config get string. | string + string | `dest, key` | `cfgsg S0, "DEVICE"` |
| 0x8B | cfgis | Config set int. | string + int | `key, value` | `cfgis "TIMEOUT", I0` |
| 0x8C | a2y | ASCII string to Y (binary). | string regs | `dest, src` | `a2y S0, S1` |
| 0x8D | xparraw | Legacy/unused (no‑op). | — | — | `xparraw` |
| 0x8E | hex2y | Hex string to Y (binary). | string regs | `dest, src` | `hex2y S0, S1` |
| 0x8F | strcmp | String compare (flags). | string regs | `left, right` | `strcmp S0, S1` |
| 0x90 | strlen | String length (bytes). | int + string | `dest, src` | `strlen I0, S0` |
| 0x91 | y2bcd | Binary Y to BCD string. | string regs | `dest, src` | `y2bcd S0, S1` |
| 0x92 | y2hex | Binary Y to hex string. | string regs | `dest, src` | `y2hex S0, S1` |
| 0x93 | shmset | Set shared memory value. | string regs | `key, value` | `shmset "K", S0` |
| 0x94 | shmget | Get shared memory value. | string regs | `dest, key` | `shmget S0, "K"` |
| 0x95 | ergsysi | System info result / init request. | results + int | `name, value` | `ergsysi "!INITIALISIERUNG", I0` |
| 0x96 | flt2fix | Float to int. | int + float | `dest, src` | `flt2fix I0, F0` |
| 0x97 | iupdate | Update progress text. | string | `text` | `iupdate S0` |
| 0x98 | irange | Set progress range. | int | `range` | `irange I0` |
| 0x99 | iincpos | Increment progress position. | int | `delta` | `iincpos I0` |
| 0x9A | tabseeku | Seek row by numeric value. | table + string/int | `column, value` | `tabseeku S0, I0` |
| 0x9B | flt2y4 | Float to 4‑byte Y. | string + float | `dest, src` | `flt2y4 S0, F0` |
| 0x9C | flt2y8 | Float to 8‑byte Y. | string + float | `dest, src` | `flt2y8 S0, F0` |
| 0x9D | y42flt | 4‑byte Y to float. | float + string | `dest, src` | `y42flt F0, S0` |
| 0x9E | y82flt | 8‑byte Y to float. | float + string | `dest, src` | `y82flt F0, S0` |
| 0x9F | plink | Link procedure handler. | procedures + int | `id` | `plink I0` |
| 0xA0 | pcall | Legacy stub (no‑op). | — | — | `pcall` |
| 0xA1 | fcomp | Float compare (flags). | float regs | `left, right` | `fcomp F0, F1` |
| 0xA2 | plinkv | Link procedure with validation (stub). | procedures + int | `id` | `plinkv I0` |
| 0xA3 | ppush | Push int to procedure stack. | proc stack + int | `src` | `ppush I0` |
| 0xA4 | ppop | Pop int from procedure stack. | proc stack + int | `dest` | `ppop I0` |
| 0xA5 | ppushflt | Push float to procedure stack. | proc stack + float | `src` | `ppushflt F0` |
| 0xA6 | ppopflt | Pop float from procedure stack. | proc stack + float | `dest` | `ppopflt F0` |
| 0xA7 | ppushy | Push binary/string to procedure stack. | proc stack + string | `src` | `ppushy S0` |
| 0xA8 | ppopy | Pop binary/string from procedure stack. | proc stack + string | `dest` | `ppopy S0` |
| 0xA9 | pjtsr | Procedure jump to subroutine (stub). | — | — | `pjtsr` |
| 0xAA | tabsetex | Table set (extended alias). | table + string | `name` | `tabsetex S0` |
| 0xAB | ufix2dez | Unsigned int to decimal string. | string + int | `dest, src` | `ufix2dez S0, I0` |
| 0xAC | generr | Generate error (throws). | int | `code` | `generr I0` |
| 0xAD | ticks | Get system ticks (ms). | int | `dest` | `ticks I0` |
| 0xAE | waitex | Delay in ms. | int | `duration` | `waitex I0` |
| 0xAF | xopen | Legacy stub (no‑op). | — | — | `xopen` |
| 0xB0 | xclose | Legacy stub (no‑op). | — | — | `xclose` |
| 0xB1 | xcloseex | Legacy stub (no‑op). | — | — | `xcloseex` |
| 0xB2 | xswitch | Legacy stub (no‑op). | — | — | `xswitch` |
| 0xB3 | xsendex | Legacy stub (no‑op). | — | — | `xsendex` |
| 0xB4 | xrecvex | Legacy stub (clears destination). | string | `dest` | `xrecvex S0` |
| 0xB5 | ssize | String byte length (cp1252). | int + string | `dest, src` | `ssize I0, S0` |
| 0xB6 | tabcols | Get table column count. | table + int | `dest` | `tabcols I0` |
| 0xB7 | tabrows | Get table row count. | table + int | `dest` | `tabrows I0` |

---

## 4. Additional Interpreter Behavior

### 4.1 Stack operations

**Data stack** is byte‑based (`DataStack`).

- `push` pushes register values little‑endian by register width.
- `pop` pops bytes and reconstructs value big‑endian inside the opcode helper.
- `pushf` / `popf` store flags as a 32‑bit bitfield: `C=1, Z=2, S=4, V=8`.
- `atsp` reads bytes from an offset relative to the top of the stack (without popping).
- `swap` reverses bytes within a string or string slice.

### 4.2 String handling

- String registers store **binary bytes** encoded as cp1252 strings.
- Many opcodes accept **indexed string slices** (Sx[...]) for binary operations.
- `slen`/`strlen` and `ssize` report length in **bytes**, not UTF‑16 length.
- `setflt` affects `flt2a` formatting precision (default `4`).

### 4.3 Result collection mechanism

Results are collected in a `ResultCollector`:

- Each result is stored by a **case‑insensitive key** (uppercased).
- `enewset` clears all results.
- `etag` lets you skip results if a **requested set** is provided to the interpreter.

Result types are:

`byte`, `word`, `dword`, `char`, `int`, `long`, `real`, `string`, `binary`.

### 4.4 Job execution flow

1. **Start:** `Interpreter.start(jobName)` resolves a job by name and finds its bytecode offset.
2. **Fetch/Decode:** instruction = `[opcode][addrMode][operands...]`.
3. **Execute:** handler enforces operand types and updates flags/registers/stacks.
4. **Control flow:** jumps use **relative** offsets; subroutines use the call stack.
5. **End:** `eoj` halts execution. `execute()` returns the collected results.

### 4.5 Error handling & trap bits

- Errors are thrown as `EdiabasError` with `EdiabasErrorCodes`.
- `sett` sets `errorTrapBitNr`, `clrt` clears it.
- `jt` / `jnt` jump based on trap state and optional test bit.
- `eerr` throws an error mapped via `TrapBitDict`, or a generic internal error if no mapping exists.

### 4.6 Communication interface

Communication opcodes call a `CommunicationInterface` which wraps the implementation in `@ediabas/interface-base`.

Capabilities include:

- `connect`, `disconnect`, `send`, `receive`
- Frequent transmit/receive (`xsendf`, `xrequf`, `xstopf`)
- Interface metadata (`xtype`, `xvers`)
- Electrical info (`xbatt`, `xignit`, `xprog`, `xsireset`)

The interpreter validates capability presence and throws `EdiabasError` on unsupported operations or timeouts.
