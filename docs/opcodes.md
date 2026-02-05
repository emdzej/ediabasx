# EDIABAS Interpreter Opcodes

This document lists **all opcodes implemented** in the TypeScript interpreter (`packages/interpreter/src/interpreter.ts`).
Descriptions are derived from the handler map and the operation implementations in `packages/interpreter/src/operations/*`.
Mnemonic names follow the disassembler table in `packages/best-parser/src/disassembler.ts`.

---

## Quick Reference Table

### Arithmetic & Bitwise

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x00 | move | Copy value between registers |
| 0x01 | clear | Set register to 0 |
| 0x02 | comp | Compare integers, set flags |
| 0x03 | subb | Subtract: arg0 = arg0 - arg1 |
| 0x04 | adds | Add: arg0 = arg0 + arg1 |
| 0x05 | mult | Multiply (low in arg0, high in arg1) |
| 0x06 | divs | Divide (quotient in arg0, remainder in arg1) |
| 0x07 | and | Bitwise AND |
| 0x08 | or | Bitwise OR |
| 0x09 | xor | Bitwise XOR |
| 0x0a | not | Bitwise NOT |
| 0x18 | asr | Arithmetic shift right |
| 0x19 | lsl | Logical shift left |
| 0x1a | lsr | Logical shift right |
| 0x1b | asl | Arithmetic shift left |
| 0x49 | addc | Add with carry |
| 0x4a | subc | Subtract with borrow |
| 0x6a | test | Test AND (flags only) |

### Control Flow

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x0b | jump | Unconditional relative jump |
| 0x0c | jtsr | Call subroutine (push return addr) |
| 0x0d | ret | Return from subroutine |
| 0x0e | jc | Jump if carry |
| 0x0f | jae | Jump if above/equal (unsigned) |
| 0x10 | jz | Jump if zero |
| 0x11 | jnz | Jump if not zero |
| 0x12 | jv | Jump if overflow |
| 0x13 | jnv | Jump if no overflow |
| 0x14 | jmi | Jump if minus (negative) |
| 0x15 | jpl | Jump if plus (positive) |
| 0x47 | jt | Jump if timer flag set |
| 0x48 | jnt | Jump if timer flag not set |
| 0x5a | jg | Jump if greater (signed) |
| 0x5b | jge | Jump if greater/equal (signed) |
| 0x5c | jl | Jump if less (signed) |
| 0x5d | jle | Jump if less/equal (signed) |
| 0x5e | ja | Jump if above (unsigned) |
| 0x5f | jbe | Jump if below/equal (unsigned) |
| 0x1c | nop | No operation |
| 0x1d | eoj | End of job (halt) |

### Flags & Stack

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x16 | clrc | Clear carry flag |
| 0x17 | setc | Set carry flag |
| 0x45 | sett | Set timer flag |
| 0x46 | clrt | Clear timer flag |
| 0x4c | clrv | Clear overflow flag |
| 0x4e | popf | Pop flags from stack |
| 0x4f | pushf | Push flags to stack |
| 0x1e | push | Push integer to stack |
| 0x1f | pop | Pop integer from stack |
| 0x50 | atsp | Read value at stack offset |
| 0x51 | swap | Swap top two stack values |

### String Operations

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x20 | scmp | String compare |
| 0x21 | scat | String concatenate |
| 0x22 | scut | Cut N chars from end |
| 0x23 | slen | Get string length |
| 0x24 | spaste | Insert string at index |
| 0x25 | serase | Erase chars at index |
| 0x52 | setspc | Set token separator |
| 0x53 | srevrs | Reverse string |
| 0x54 | stoken | Extract token |
| 0x7e | strcat | String concatenate (alias) |
| 0x8f | strcmp | String compare (alias) |
| 0x90 | strlen | String length (alias) |
| 0xb5 | ssize | String size in bytes |

### Conversions

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x67 | a2fix | ASCII string to integer |
| 0x3a | a2flt | ASCII string to float |
| 0x68 | fix2flt | Integer to float |
| 0x96 | flt2fix | Float to integer |
| 0x79 | fix2hex | Integer to hex string |
| 0x7a | fix2dez | Integer to decimal string |
| 0xab | ufix2dez | Unsigned to decimal string |
| 0x87 | flt2a | Float to string |
| 0x8c | a2y | ASCII to binary (Y) |
| 0x8e | hex2y | Hex string to binary |
| 0x91 | y2bcd | Binary to BCD string |
| 0x92 | y2hex | Binary to hex string |
| 0x9b | flt2y4 | Float to 4-byte binary |
| 0x9c | flt2y8 | Float to 8-byte binary |
| 0x9d | y42flt | 4-byte binary to float |
| 0x9e | y82flt | 8-byte binary to float |

### Floating Point

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x3b | fadd | Float add |
| 0x3c | fsub | Float subtract |
| 0x3d | fmul | Float multiply |
| 0x3e | fdiv | Float divide |
| 0xa1 | fcomp | Float compare |
| 0x88 | setflt | Set float immediate |

### Results

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x34 | ergb | Result: byte (unsigned 8-bit) |
| 0x35 | ergw | Result: word (unsigned 16-bit) |
| 0x36 | ergd | Result: dword (unsigned 32-bit) |
| 0x37 | ergi | Result: int (signed 16-bit) |
| 0x38 | ergr | Result: real (float) |
| 0x39 | ergs | Result: string |
| 0x3f | ergy | Result: binary (Y) |
| 0x40 | enewset | Clear/new result set |
| 0x41 | etag | Conditional result skip |
| 0x81 | ergc | Result: char (byte) |
| 0x82 | ergl | Result: long (dword) |
| 0x95 | ergsysi | System info result |
| 0x4d | eerr | Error result |
| 0xac | generr | Generate/throw error |

### Parameters

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x55 | parb | Get parameter byte |
| 0x56 | parw | Get parameter word |
| 0x57 | parl | Get parameter long |
| 0x58 | pars | Get parameter string |
| 0x69 | parr | Get parameter float |
| 0x7f | pary | Get parameter binary |
| 0x80 | parn | Get parameter count |

### Communication (Interface)

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x26 | xconnect | Connect interface |
| 0x27 | xhangup | Disconnect interface |
| 0x28 | xsetpar | Set interface parameter |
| 0x29 | xawlen | Set answer length |
| 0x2a | xsend | Send data |
| 0x2b | xsendf | Formatted send |
| 0x2c | xrequf | Formatted request |
| 0x2d | xstopf | Stop formatted |
| 0x2e | xkeyb | Read keyboard |
| 0x2f | xstate | Get interface state |
| 0x30 | xboot | Boot interface |
| 0x31 | xreset | Reset interface |
| 0x32 | xtype | Get interface type |
| 0x33 | xvers | Get interface version |
| 0x42 | xreps | Set response |
| 0xaf | xopen | Open interface |
| 0xb0 | xclose | Close interface |
| 0xb1 | xcloseex | Close interface extended |
| 0xb2 | xswitch | Switch interface |
| 0xb3 | xsendex | Extended send |
| 0xb4 | xrecvex | Extended receive |

### Tables

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x7b | tabset | Select table by name |
| 0x7c | tabseek | Seek to row |
| 0x7d | tabget | Get cell value |
| 0x83 | tabline | Get row line number |
| 0x9a | tabseeku | Seek row (case-insensitive) |
| 0xaa | tabsetex | Select table extended |
| 0xb6 | tabcols | Get column count |
| 0xb7 | tabrows | Get row count |

### Files

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x59 | fclose | Close file |
| 0x60 | fopen | Open file |
| 0x61 | fread | Read bytes |
| 0x62 | freadln | Read line |
| 0x63 | fseek | Seek position |
| 0x64 | fseekln | Seek line |
| 0x65 | ftell | Tell position |
| 0x66 | ftellln | Tell line number |

### Timers & System

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x43 | gettmr | Get timer value |
| 0x44 | settmr | Set timer value |
| 0x6b | wait | Wait milliseconds |
| 0xae | waitex | Extended wait |
| 0xad | ticks | Get system ticks |
| 0x6c | date | Get current date |
| 0x6d | time | Get current time |

### Procedures

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x9f | plink | Link external procedure |
| 0xa0 | pcall | Call linked procedure |
| 0xa3 | ppush | Push int to procedure stack |
| 0xa4 | ppop | Pop int from procedure stack |
| 0xa5 | ppushflt | Push float to procedure stack |
| 0xa6 | ppopflt | Pop float from procedure stack |
| 0xa7 | ppushy | Push binary to procedure stack |
| 0xa8 | ppopy | Pop binary from procedure stack |

### Shared Memory

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x93 | shmset | Set shared memory value |
| 0x94 | shmget | Get shared memory value |

### Progress

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x97 | iupdate | Update progress text |
| 0x98 | irange | Set progress range |
| 0x99 | iincpos | Increment progress position |

### Stubs (No-op / Minimal)

| Hex | Mnemonic | Description |
|-----|----------|-------------|
| 0x4b | break | Breakpoint (no-op) |
| 0x6e | xbatt | Battery voltage (stub) |
| 0x6f | tosp | To stack pointer (stub) |
| 0x70 | xdownl | Download (stub) |
| 0x78 | xstoptr | Stop transfer (stub) |
| 0x86 | xinfo | Interface info (stub) |
| 0x89 | cfgig | Config get int (stub) |
| 0x8a | cfgsg | Config set/get (stub) |
| 0x8b | cfgis | Config is set (stub) |
| 0x8d | xparraw | Raw parameters (stub) |
| 0xa2 | plinkv | Link proc w/ validation (stub) |
| 0xa9 | pjtsr | Proc jump to subroutine (stub) |

---

## Operand conventions

Most instructions take up to two operands (`arg0`, `arg1`) encoded by addressing modes:

- **Integer registers**: `B`, `A`, `I`, `L` (8/8/16/32-bit)
- **String registers**: `S` (text/binary)
- **Float registers**: `F` (IEEE-754 double)
- **Immediate values**: integer or string literals
- **Indexed string operands**: `Sx[index]` optionally with length and/or offset

Unless stated otherwise, integer operands can be **register or immediate**; string operands can be **string register, immediate string**, or **indexed string**.

---

## Detailed Reference

## Arithmetic & Bitwise (integer)

### 0x00 - move (Move/Copy Value)
Copies value from source integer register to destination integer register.

**Arguments:**
- arg0: Destination integer register (B/A/I/L)
- arg1: Source integer register (B/A/I/L)

### 0x01 - clear (Clear Register)
Sets destination integer register to 0.

**Arguments:**
- arg0: Destination integer register (B/A/I/L)

### 0x02 - comp (Compare Integers)
Compares `arg0` and `arg1` and updates flags (Z/S/V/C). Result is not stored.

**Arguments:**
- arg0: Left integer register (B/A/I/L)
- arg1: Right integer register (B/A/I/L)

### 0x03 - subb (Subtract)
`arg0 = arg0 - arg1` (integer). Updates flags.

**Arguments:**
- arg0: Destination integer register
- arg1: Source integer register

### 0x04 - adds (Add)
`arg0 = arg0 + arg1` (integer). Updates flags.

**Arguments:**
- arg0: Destination integer register
- arg1: Source integer register

### 0x05 - mult (Multiply)
Signed multiply. Low part stored in `arg0`, high part stored in `arg1` (source register).
Updates flags (Z/S), clears V.

**Arguments:**
- arg0: Destination integer register (low result)
- arg1: Source integer register (high result)

### 0x06 - divs (Divide)
Integer division. `arg0 = arg0 / arg1`, `arg1 = remainder`.
On divide by zero, leaves `arg0` unchanged. Updates flags.

**Arguments:**
- arg0: Dividend / quotient integer register
- arg1: Divisor / remainder integer register

### 0x07 - and (Bitwise AND)
`arg0 = arg0 & arg1`. Updates flags.

**Arguments:**
- arg0: Destination integer register
- arg1: Source integer register

### 0x08 - or (Bitwise OR)
`arg0 = arg0 | arg1`. Updates flags.

**Arguments:**
- arg0: Destination integer register
- arg1: Source integer register

### 0x09 - xor (Bitwise XOR)
`arg0 = arg0 ^ arg1`. Updates flags.

**Arguments:**
- arg0: Destination integer register
- arg1: Source integer register

### 0x0a - not (Bitwise NOT)
`arg0 = ~arg0`. Updates flags.

**Arguments:**
- arg0: Destination integer register

### 0x18 - asr (Arithmetic Shift Right)
Right shift `arg0` by `arg1` bits. Carry flag updated per shift-out bit. Updates flags.

**Arguments:**
- arg0: Destination integer register
- arg1: Shift count integer register

### 0x19 - lsl (Logical Shift Left)
Left shift `arg0` by `arg1` bits. Carry flag updated. Updates flags.

**Arguments:**
- arg0: Destination integer register
- arg1: Shift count integer register

### 0x1a - lsr (Logical Shift Right)
Right shift `arg0` by `arg1` bits (same implementation as `asr` in this interpreter).
Carry flag updated. Updates flags.

**Arguments:**
- arg0: Destination integer register
- arg1: Shift count integer register

### 0x1b - asl (Arithmetic Shift Left)
Left shift `arg0` by `arg1` bits (same implementation as `lsl` in this interpreter).
Carry flag updated. Updates flags.

**Arguments:**
- arg0: Destination integer register
- arg1: Shift count integer register

### 0x49 - addc (Add with Carry)
`arg0 = arg0 + arg1 + C`. Updates flags.

**Arguments:**
- arg0: Destination integer register
- arg1: Source integer register

### 0x4a - subc (Subtract with Borrow)
`arg0 = arg0 - arg1 - C`. Updates flags.

**Arguments:**
- arg0: Destination integer register
- arg1: Source integer register

### 0x6a - test (Test AND)
Computes `arg0 & arg1` and updates flags. Result not stored.

**Arguments:**
- arg0: Left integer register
- arg1: Right integer register

---

## Control Flow

### 0x0b - jump (Unconditional Jump)
Relative jump: `PC = PC + arg0`.

**Arguments:**
- arg0: Relative offset (int register or immediate)

### 0x0c - jtsr (Call Subroutine)
Pushes return address to call stack and jumps relative.

**Arguments:**
- arg0: Relative offset (int register or immediate)

### 0x0d - ret (Return)
Returns to the last address on the call stack.

**Arguments:**
- (none)

### 0x0e - jc (Jump if Carry)
Jumps if carry flag set.

**Arguments:**
- arg0: Relative offset

### 0x0f - jae (Jump if Above or Equal)
Jumps if carry flag clear (unsigned >=).

**Arguments:**
- arg0: Relative offset

### 0x10 - jz (Jump if Zero)
Jumps if zero flag set.

**Arguments:**
- arg0: Relative offset

### 0x11 - jnz (Jump if Not Zero)
Jumps if zero flag clear.

**Arguments:**
- arg0: Relative offset

### 0x12 - jv (Jump if Overflow)
Jumps if overflow flag set.

**Arguments:**
- arg0: Relative offset

### 0x13 - jnv (Jump if No Overflow)
Jumps if overflow flag clear.

**Arguments:**
- arg0: Relative offset

### 0x14 - jmi (Jump if Minus)
Jumps if sign flag set (negative result).

**Arguments:**
- arg0: Relative offset

### 0x15 - jpl (Jump if Plus)
Jumps if sign flag clear.

**Arguments:**
- arg0: Relative offset

### 0x47 - jt (Jump if Timer Flag Set)
Jumps if the internal timer flag is set.

**Arguments:**
- arg0: Relative offset

### 0x48 - jnt (Jump if Timer Flag Not Set)
Jumps if the internal timer flag is clear.

**Arguments:**
- arg0: Relative offset

### 0x5a - jg (Jump if Greater)
Signed compare: jump if `arg0 > arg1` from last compare (Z=0, S=V).

**Arguments:**
- arg0: Relative offset

### 0x5b - jge (Jump if Greater or Equal)
Signed compare: jump if `arg0 >= arg1` (S=V).

**Arguments:**
- arg0: Relative offset

### 0x5c - jl (Jump if Less)
Signed compare: jump if `arg0 < arg1` (S!=V).

**Arguments:**
- arg0: Relative offset

### 0x5d - jle (Jump if Less or Equal)
Signed compare: jump if `arg0 <= arg1` (Z=1 or S!=V).

**Arguments:**
- arg0: Relative offset

### 0x5e - ja (Jump if Above)
Unsigned compare: jump if `arg0 > arg1` (C=0 and Z=0).

**Arguments:**
- arg0: Relative offset

### 0x5f - jbe (Jump if Below or Equal)
Unsigned compare: jump if `arg0 <= arg1` (C=1 or Z=1).

**Arguments:**
- arg0: Relative offset

### 0x1c - nop (No Operation)
Does nothing.

**Arguments:**
- (none)

### 0x1d - eoj (End of Job / Halt)
Halts interpreter execution.

**Arguments:**
- (none)

---

## Flags

### 0x16 - clrc (Clear Carry)
Clears carry flag.

**Arguments:**
- (none)

### 0x17 - setc (Set Carry)
Sets carry flag.

**Arguments:**
- (none)

### 0x4c - clrv (Clear Overflow)
Clears overflow flag.

**Arguments:**
- (none)

### 0x4e - popf (Pop Flags)
Pops flags from data stack.

**Arguments:**
- (none)

### 0x4f - pushf (Push Flags)
Pushes flags to data stack.

**Arguments:**
- (none)

---

## Stack (data)

### 0x1e - push (Push)
Pushes integer register value to data stack.

**Arguments:**
- arg0: Source integer register

### 0x1f - pop (Pop)
Pops value from data stack into integer register.

**Arguments:**
- arg0: Destination integer register

### 0x50 - atsp (At Stack Position)
Reads value at stack offset and stores to register. Offset 0 is top.

**Arguments:**
- arg0: Destination integer register
- arg1: Offset (int register or immediate)

### 0x51 - swap (Swap Top)
Swaps the top two values on the data stack.

**Arguments:**
- (none)

---

## String & Text

### 0x20 - scmp (String Compare)
Compares two strings and updates flags (Z/S/C).

**Arguments:**
- arg0: Left string register
- arg1: Right string register

### 0x21 - scat (String Concatenate)
Appends `arg1` to `arg0`.

**Arguments:**
- arg0: Destination string register
- arg1: Source string (string register, immediate string, or indexed)

### 0x22 - scut (String Cut from End)
Removes the last `N` characters from `arg0`.

**Arguments:**
- arg0: Destination string register
- arg1: Number of characters to remove (int reg or immediate)

### 0x23 - slen (String Length)
Stores string length in integer register.

**Arguments:**
- arg0: Destination integer register
- arg1: Source string register

### 0x24 - spaste (String Paste/Insert)
Inserts `arg1` into the base string at indexed position. `arg0` must be an indexed S operand.

**Arguments:**
- arg0: Indexed string destination (base S register + index/offset)
- arg1: String to insert (string reg or immediate)

### 0x25 - serase (String Erase)
Removes `length` characters from base string at indexed position.

**Arguments:**
- arg0: Indexed string target (base S register + index/offset)
- arg1: Length to erase (int reg or immediate)

### 0x53 - srevrs (Reverse String)
Reverses the string in-place.

**Arguments:**
- arg0: Destination string register

### 0x52 - setspc (Set Token Separator / Index)
Configures token extraction: sets separator string and optional token index.

**Arguments:**
- arg0: Separator string (string reg or immediate)
- arg1: Optional token index (int reg or immediate, 1-based)

### 0x54 - stoken (Extract Token)
Splits `arg1` by the configured separator (from `setspc`) and writes the selected token to `arg0`.
Sets Z flag if separator missing or index out of range.

**Arguments:**
- arg0: Destination string register
- arg1: Source string (string reg, immediate, or indexed)

### 0x7e - strcat (String Concatenate Alias)
Alias of `scat`.

**Arguments:**
- arg0: Destination string register
- arg1: Source string register

### 0x79 - fix2hex (Integer to Hex String)
Converts integer to uppercase hex string.

**Arguments:**
- arg0: Destination string register
- arg1: Source integer register

### 0x7a - fix2dez (Integer to Decimal String)
Converts integer to decimal string.

**Arguments:**
- arg0: Destination string register
- arg1: Source integer register

### 0x67 - a2fix (ASCII to Integer)
Parses decimal string and stores integer. Sets flags on parse error.

**Arguments:**
- arg0: Destination integer register
- arg1: Source string register

### 0x8f - strcmp (String Compare Alias)
Alias of `scmp`.

**Arguments:**
- arg0: Left string register
- arg1: Right string register

### 0x90 - strlen (String Length Alias)
Alias of `slen`.

**Arguments:**
- arg0: Destination integer register
- arg1: Source string register

### 0x8c - a2y (ASCII to Y/Binary)
Copies string bytes into Y-register (binary string).

**Arguments:**
- arg0: Destination string register
- arg1: Source string register

### 0x8e - hex2y (Hex String to Binary)
Parses hex string into raw bytes stored in destination string register.

**Arguments:**
- arg0: Destination string register
- arg1: Source string register

### 0x91 - y2bcd (Binary to BCD String)
Converts binary bytes to BCD string (two digits per nibble).

**Arguments:**
- arg0: Destination string register
- arg1: Source string register (binary)

### 0x92 - y2hex (Binary to Hex String)
Converts binary bytes to uppercase hex string.

**Arguments:**
- arg0: Destination string register
- arg1: Source string register (binary)

### 0xb5 - ssize (String Size in Bytes)
Stores byte length of string (CP1252 encoded) in integer register.

**Arguments:**
- arg0: Destination integer register
- arg1: Source string register

---

## Floating Point

### 0x3a - a2flt (ASCII to Float)
Parses string to float, sets flags on error.

**Arguments:**
- arg0: Destination float register
- arg1: Source string register

### 0x3b - fadd (Float Add)
`arg0 = arg0 + arg1`.

**Arguments:**
- arg0: Destination float register
- arg1: Source float register

### 0x3c - fsub (Float Subtract)
`arg0 = arg0 - arg1`.

**Arguments:**
- arg0: Destination float register
- arg1: Source float register

### 0x3d - fmul (Float Multiply)
`arg0 = arg0 * arg1`.

**Arguments:**
- arg0: Destination float register
- arg1: Source float register

### 0x3e - fdiv (Float Divide)
`arg0 = arg0 / arg1`.

**Arguments:**
- arg0: Destination float register
- arg1: Source float register

### 0xa1 - fcomp (Float Compare)
Compares two floats and updates flags (Z/S/C/V).

**Arguments:**
- arg0: Left float register
- arg1: Right float register

### 0x87 - flt2a (Float to String)
Converts float to string.

**Arguments:**
- arg0: Destination string register
- arg1: Source float register

### 0x88 - setflt (Set Float Immediate)
Sets float register to immediate value or copies from float register.

**Arguments:**
- arg0: Destination float register
- arg1: Float immediate or float register

### 0x68 - fix2flt (Integer to Float)
Converts integer to float.

**Arguments:**
- arg0: Destination float register
- arg1: Source integer register

### 0x96 - flt2fix (Float to Integer)
Converts float to integer with truncation. Updates flags.

**Arguments:**
- arg0: Destination integer register
- arg1: Source float register

### 0x9b - flt2y4 (Float to 4-byte Binary)
Stores IEEE-754 single (big-endian) in destination string register.

**Arguments:**
- arg0: Destination string register
- arg1: Source float register

### 0x9c - flt2y8 (Float to 8-byte Binary)
Stores IEEE-754 double (big-endian) in destination string register.

**Arguments:**
- arg0: Destination string register
- arg1: Source float register

### 0x9d - y42flt (4-byte Binary to Float)
Reads IEEE-754 single (big-endian) from string register.

**Arguments:**
- arg0: Destination float register
- arg1: Source string register (binary)

### 0x9e - y82flt (8-byte Binary to Float)
Reads IEEE-754 double (big-endian) from string register.

**Arguments:**
- arg0: Destination float register
- arg1: Source string register (binary)

### 0x6e - xbatt (Battery Voltage Stub)
Stub: stores `12.0` in float register.

**Arguments:**
- arg0: Destination float register

---

## Result Collection

### 0x34 - ergb (Result: Byte)
Records a byte result.

**Arguments:**
- arg0: Result name (string reg or immediate)
- arg1: Integer register (value masked to 8 bits)

### 0x35 - ergw (Result: Word)
Records a word result.

**Arguments:**
- arg0: Result name (string reg or immediate)
- arg1: Integer register (value masked to 16 bits)

### 0x36 - ergd (Result: Dword)
Records a dword result.

**Arguments:**
- arg0: Result name (string reg or immediate)
- arg1: Integer register (value masked to 32 bits)

### 0x37 - ergi (Result: Int)
Records a signed 16-bit integer result.

**Arguments:**
- arg0: Result name (string reg or immediate)
- arg1: Integer value (register or immediate)

### 0x38 - ergr (Result: Real)
Records a floating-point result.

**Arguments:**
- arg0: Result name (string reg or immediate)
- arg1: Float register

### 0x39 - ergs (Result: String)
Records a string result.

**Arguments:**
- arg0: Result name (string reg or immediate)
- arg1: String (string reg or immediate)

### 0x3f - ergy (Result: Binary)
Records a binary result.

**Arguments:**
- arg0: Result name (string reg or immediate)
- arg1: Binary source (string reg or immediate/indexed)

### 0x81 - ergc (Result: Char/Byte)
Records a byte (char) result. Value masked to 8 bits.

**Arguments:**
- arg0: Result name (string reg or immediate)
- arg1: Integer value (register or immediate)

### 0x82 - ergl (Result: Long/Dword)
Records a 32-bit unsigned result.

**Arguments:**
- arg0: Result name (string reg or immediate)
- arg1: Integer value (register or immediate)

### 0x95 - ergsysi (System Info Result)
Records a string result under a system info name.

**Arguments:**
- arg0: Result name (string reg or immediate)
- arg1: Result value (string reg or immediate)

### 0x40 - enewset (New Result Set)
Clears current result collector.

**Arguments:**
- (none)

### 0x41 - etag (Conditional Result Skip)
If a results filter is configured and `arg1` is not requested, jumps to `arg0`.

**Arguments:**
- arg0: Relative offset (int reg or immediate)
- arg1: Result name (string reg or immediate)

### 0x4d - eerr (Error Result)
Records `F_ERRORCODE` and `F_ERRORTEXT` results from arguments.

**Arguments:**
- arg0: Error code (int reg or immediate)
- arg1: Error text (string reg or immediate)

### 0xac - generr (Generate Error)
Records error info and throws an interpreter error.

**Arguments:**
- arg0: Error code (int reg or immediate)
- arg1: Error text (string reg or immediate)

---

## Parameters

### 0x55 - parb (Get Parameter Byte)
Reads parameter at index into integer register.

**Arguments:**
- arg0: Destination integer register
- arg1: Parameter index (int reg or immediate)

### 0x56 - parw (Get Parameter Word)
Alias of `parb` (reads parameter as int).

**Arguments:**
- arg0: Destination integer register
- arg1: Parameter index

### 0x57 - parl (Get Parameter Long)
Alias of `parb` (reads parameter as int).

**Arguments:**
- arg0: Destination integer register
- arg1: Parameter index

### 0x58 - pars (Get Parameter String)
Reads parameter as string into S register.

**Arguments:**
- arg0: Destination string register
- arg1: Parameter index

### 0x69 - parr (Get Parameter Float)
Reads parameter as float into F register.

**Arguments:**
- arg0: Destination float register
- arg1: Parameter index

### 0x7f - pary (Get Parameter Binary)
Reads parameter as binary/string into S register.

**Arguments:**
- arg0: Destination string register
- arg1: Parameter index

### 0x80 - parn (Parameter Count)
Stores number of parameters in integer register.

**Arguments:**
- arg0: Destination integer register

---

## Time & Timer

### 0x43 - gettmr (Get Timer)
Reads timer value (ms) into integer register.

**Arguments:**
- arg0: Destination integer register

### 0x44 - settmr (Set Timer)
Sets timer base value.

**Arguments:**
- arg0: Timer value (int reg or immediate)

### 0x45 - sett (Set Timer Flag)
Sets internal timer flag (used by `jt/jnt`).

**Arguments:**
- (none)

### 0x46 - clrt (Clear Timer Flag)
Clears internal timer flag.

**Arguments:**
- (none)

### 0x6b - wait (Wait)
Sleeps for the given duration in milliseconds.

**Arguments:**
- arg0: Duration (int reg or immediate)

### 0xae - waitex (Extended Wait)
Same as `wait`, takes duration in milliseconds.

**Arguments:**
- arg0: Duration (int reg or immediate)

### 0x6c - date (Get Date)
Stores current date into int or string register (`YYYYMMDD` or `YYYY-MM-DD`).

**Arguments:**
- arg0: Destination integer or string register

### 0x6d - time (Get Time)
Stores current time into int or string register (`HHMMSS` or `HH:MM:SS`).

**Arguments:**
- arg0: Destination integer or string register

### 0xad - ticks (System Ticks)
Stores `Date.now()` (ms since epoch, masked to 32-bit) into integer register.

**Arguments:**
- arg0: Destination integer register

---

## Communication (Interface)

### 0x26 - xconnect (Connect Interface)
Connects the communication interface.

**Arguments:**
- (none)

### 0x27 - xhangup (Disconnect Interface)
Disconnects the communication interface.

**Arguments:**
- (none)

### 0x28 - xsetpar (Set Parameter)
Sets interface parameter.

**Arguments:**
- arg0: Parameter id (int register)
- arg1: Value (int register)

### 0x29 - xawlen (Set Answer Length)
Sets expected answer length.

**Arguments:**
- arg0: Length (int register)

### 0x2a - xsend (Send)
Sends raw bytes from string register.

**Arguments:**
- arg0: Source string register (binary)

### 0x2b - xsendf (Formatted Send)
Sends formatted request.

**Arguments:**
- arg0: Format string register
- arg1: Payload string register

### 0x2c - xrequf (Formatted Request)
Sends formatted request and receives formatted response.

**Arguments:**
- arg0: Format string register
- arg1: Payload string register (response stored here)

### 0x2d - xstopf (Stop Formatted)
Stops a formatted request/response operation.

**Arguments:**
- (none)

### 0x2e - xkeyb (Read Keyboard)
Reads keyboard input into string register.

**Arguments:**
- arg0: Destination string register

### 0x2f - xstate (Interface State)
Reads interface state into integer register.

**Arguments:**
- arg0: Destination integer register

### 0x30 - xboot (Boot)
Boots the interface (if supported).

**Arguments:**
- (none)

### 0x31 - xreset (Reset)
Resets the interface.

**Arguments:**
- (none)

### 0x32 - xtype (Interface Type)
Writes interface type string to destination.

**Arguments:**
- arg0: Destination string register

### 0x33 - xvers (Interface Version)
Writes interface version to destination.

**Arguments:**
- arg0: Destination integer register

### 0x42 - xreps (Set Response)
Sets fixed response bytes for interface.

**Arguments:**
- arg0: Source string register (binary)

### 0xaf - xopen (Open Interface)
Opens the interface. Optional mode parameter.

**Arguments:**
- arg0: Optional mode (int register) or none

### 0xb0 - xclose (Close Interface)
Closes the interface.

**Arguments:**
- (none)

### 0xb1 - xcloseex (Close Interface Extended)
Closes interface with optional mode.

**Arguments:**
- arg0: Optional mode (int register) or none

### 0xb2 - xswitch (Switch Interface)
Switches to interface index.

**Arguments:**
- arg0: Interface index (int register)

### 0xb3 - xsendex (Extended Send)
Sends extended payload (falls back to `xsend`).

**Arguments:**
- arg0: Source string register (binary)

### 0xb4 - xrecvex (Extended Receive)
Receives extended payload (falls back to `xrecv`).

**Arguments:**
- arg0: Destination string register
- arg1: Optional timeout (int register)

### 0x78 - xstoptr (Stop Transfer) [Stub]
No-op stub.

**Arguments:**
- (none)

### 0x70 - xdownl (Download) [Stub]
No-op stub.

**Arguments:**
- (none)

### 0x86 - xinfo (Interface Info) [Stub]
Stores empty string into destination.

**Arguments:**
- arg0: Destination string register

### 0x8d - xparraw (Raw Parameters) [Stub]
No-op stub.

**Arguments:**
- (none)

---

## Files

### 0x59 - fclose (Close File)
Closes file handle.

**Arguments:**
- arg0: File handle (int register)

### 0x60 - fopen (Open File)
Opens file and returns handle.

**Arguments:**
- arg0: Destination integer register (handle)
- arg1: File path (string register)

### 0x61 - fread (Read File Bytes)
Reads `I0` bytes from file into string register.

**Arguments:**
- arg0: Destination string register
- arg1: File handle (int register)

### 0x62 - freadln (Read Line)
Reads one line from file into string register.

**Arguments:**
- arg0: Destination string register
- arg1: File handle (int register)

### 0x63 - fseek (Seek)
Seeks to byte offset.

**Arguments:**
- arg0: File handle (int register)
- arg1: Offset (int register)

### 0x64 - fseekln (Seek Line)
Seeks forward by line count (from current).

**Arguments:**
- arg0: File handle (int register)
- arg1: Line offset (int register)

### 0x65 - ftell (Tell Position)
Stores current byte offset.

**Arguments:**
- arg0: Destination integer register
- arg1: File handle (int register)

### 0x66 - ftellln (Tell Line)
Stores current line number.

**Arguments:**
- arg0: Destination integer register
- arg1: File handle (int register)

---

## Tables

### 0x7b - tabset (Select Table)
Sets active table by name. Updates flags on missing table.

**Arguments:**
- arg0: Table name (string register)

### 0xaa - tabsetex (Select Table Extended)
Same as `tabset`.

**Arguments:**
- arg0: Table name (string register)

### 0x7c - tabseek (Seek Row)
Searches for value in column, sets row index and flags.

**Arguments:**
- arg0: Search value (string register)
- arg1: Column index (int register)

### 0x9a - tabseeku (Seek Row Case-Insensitive)
Case-insensitive variant of `tabseek`.

**Arguments:**
- arg0: Search value (string register)
- arg1: Column index (int register)

### 0x7d - tabget (Get Cell)
Reads current row cell into string register.

**Arguments:**
- arg0: Destination string register
- arg1: Column index (int register)

### 0x83 - tabline (Get Row Line)
Gets current row as delimited string (default tab).

**Arguments:**
- arg0: Destination string register
- arg1: Optional delimiter string register

### 0xb6 - tabcols (Column Count)
Stores number of columns in table.

**Arguments:**
- arg0: Destination integer register

### 0xb7 - tabrows (Row Count)
Stores number of rows in table.

**Arguments:**
- arg0: Destination integer register

---

## Shared Memory

### 0x93 - shmset (Shared Memory Set)
Stores binary/string value under key.

**Arguments:**
- arg0: Key (string reg or immediate)
- arg1: Value (string reg, immediate, or indexed)

### 0x94 - shmget (Shared Memory Get)
Loads value for key into destination string register.

**Arguments:**
- arg0: Destination string register
- arg1: Key (string reg or immediate)

---

## Procedures (External Callouts)

### 0x9f - plink (Link Procedure)
Links a procedure id to a handler via `procedureLinker`.

**Arguments:**
- arg0: Procedure id (int reg or immediate)

### 0xa2 - plinkv (Link Procedure w/ Validation) [Stub]
Same as `plink`, no validation in interpreter.

**Arguments:**
- arg0: Procedure id (int reg or immediate)

### 0xa0 - pcall (Call Procedure)
Calls linked procedure with current procedure stack arguments.

**Arguments:**
- arg0: Procedure id (int reg or immediate)

### 0xa3 - ppush (Push Procedure Int)
Pushes integer onto procedure stack.

**Arguments:**
- arg0: Source integer register

### 0xa4 - ppop (Pop Procedure Int)
Pops integer from procedure stack.

**Arguments:**
- arg0: Destination integer register

### 0xa5 - ppushflt (Push Procedure Float)
Pushes float onto procedure stack.

**Arguments:**
- arg0: Source float register

### 0xa6 - ppopflt (Pop Procedure Float)
Pops float from procedure stack.

**Arguments:**
- arg0: Destination float register

### 0xa7 - ppushy (Push Procedure Binary)
Pushes binary bytes from string register onto procedure stack.

**Arguments:**
- arg0: Source string register

### 0xa8 - ppopy (Pop Procedure Binary)
Pops binary bytes into string register.

**Arguments:**
- arg0: Destination string register

### 0xa9 - pjtsr (Procedure Jump to Subroutine) [Stub]
No-op stub.

**Arguments:**
- (none)

---

## Progress / UI

### 0x97 - iupdate (Update Progress Text)
Updates progress text string.

**Arguments:**
- arg0: Text (string reg or immediate)

### 0x98 - irange (Set Progress Range)
Sets progress range and resets position to -1.

**Arguments:**
- arg0: Range (int reg or immediate)

### 0x99 - iincpos (Increment Progress Position)
Increments progress position by given amount (clamped to range).

**Arguments:**
- arg0: Increment (int reg or immediate)

---

## Misc / Stubs

### 0x4b - break (Breakpoint)
No-op in normal execution.

**Arguments:**
- (none)

### 0x6f - tosp (To Stack Pointer) [Stub]
No-op stub.

**Arguments:**
- (none)

### 0x89 - cfgig (Config Get Int) [Stub]
Returns 0 in destination register.

**Arguments:**
- arg0: Destination integer register

### 0x8a - cfgsg (Config Set/Get) [Stub]
No-op stub.

**Arguments:**
- (none)

### 0x8b - cfgis (Config Is Set) [Stub]
Returns 0 (not set).

**Arguments:**
- arg0: Destination integer register

### 0xab - ufix2dez (Unsigned Int to Decimal String)
Converts unsigned int to decimal string.

**Arguments:**
- arg0: Destination string register
- arg1: Source integer register
