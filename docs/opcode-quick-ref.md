# EDIABAS Opcode Quick Reference

Single-table reference of all implemented opcodes sorted by hex value.

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
| 0x16 | clrc | Clear carry flag |
| 0x17 | setc | Set carry flag |
| 0x18 | asr | Arithmetic shift right |
| 0x19 | lsl | Logical shift left |
| 0x1a | lsr | Logical shift right |
| 0x1b | asl | Arithmetic shift left |
| 0x1c | nop | No operation |
| 0x1d | eoj | End of job (halt) |
| 0x1e | push | Push integer to stack |
| 0x1f | pop | Pop integer from stack |
| 0x20 | scmp | String compare |
| 0x21 | scat | String concatenate |
| 0x22 | scut | Cut N chars from end |
| 0x23 | slen | Get string length |
| 0x24 | spaste | Insert string at index |
| 0x25 | serase | Erase chars at index |
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
| 0x34 | ergb | Result: byte (unsigned 8-bit) |
| 0x35 | ergw | Result: word (unsigned 16-bit) |
| 0x36 | ergd | Result: dword (unsigned 32-bit) |
| 0x37 | ergi | Result: int (signed 16-bit) |
| 0x38 | ergr | Result: real (float) |
| 0x39 | ergs | Result: string |
| 0x3a | a2flt | ASCII string to float |
| 0x3b | fadd | Float add |
| 0x3c | fsub | Float subtract |
| 0x3d | fmul | Float multiply |
| 0x3e | fdiv | Float divide |
| 0x3f | ergy | Result: binary (Y) |
| 0x40 | enewset | Clear/new result set |
| 0x41 | etag | Conditional result skip |
| 0x42 | xreps | Set response |
| 0x43 | gettmr | Get timer value |
| 0x44 | settmr | Set timer value |
| 0x45 | sett | Set timer flag |
| 0x46 | clrt | Clear timer flag |
| 0x47 | jt | Jump if timer flag set |
| 0x48 | jnt | Jump if timer flag not set |
| 0x49 | addc | Add with carry |
| 0x4a | subc | Subtract with borrow |
| 0x4b | break | Breakpoint (raises EDIABAS_BIP_0008) |
| 0x4c | clrv | Clear overflow flag |
| 0x4d | eerr | Execute error (error trap mechanism) |
| 0x4e | popf | Pop flags from stack |
| 0x4f | pushf | Push flags to stack |
| 0x50 | atsp | Read value at stack offset |
| 0x51 | swap | Swap top two stack values |
| 0x52 | setspc | Set token separator |
| 0x53 | srevrs | Reverse string |
| 0x54 | stoken | Extract token |
| 0x55 | parb | Get parameter byte |
| 0x56 | parw | Get parameter word |
| 0x57 | parl | Get parameter long |
| 0x58 | pars | Get parameter string |
| 0x59 | fclose | Close file |
| 0x5a | jg | Jump if greater (signed) |
| 0x5b | jge | Jump if greater/equal (signed) |
| 0x5c | jl | Jump if less (signed) |
| 0x5d | jle | Jump if less/equal (signed) |
| 0x5e | ja | Jump if above (unsigned) |
| 0x5f | jbe | Jump if below/equal (unsigned) |
| 0x60 | fopen | Open file |
| 0x61 | fread | Read bytes from file |
| 0x62 | freadln | Read line from file |
| 0x63 | fseek | Seek position in file |
| 0x64 | fseekln | Seek line in file |
| 0x65 | ftell | Tell position in file |
| 0x66 | ftellln | Tell line number in file |
| 0x67 | a2fix | ASCII string to integer |
| 0x68 | fix2flt | Integer to float |
| 0x69 | parr | Get parameter float |
| 0x6a | test | Test AND (flags only) |
| 0x6b | wait | Wait milliseconds |
| 0x6c | date | Get current date |
| 0x6d | time | Get current time |
| 0x6e | xbatt | Battery voltage (stub) |
| 0x6f | tosp | To stack pointer (stub) |
| 0x70 | xdownl | Download (stub) |
| 0x71 | xgetport | Get hardware port value |
| 0x72 | xignit | Get ignition voltage |
| 0x73 | xloopt | Loop test result |
| 0x74 | xprog | Set programming voltage |
| 0x75 | xraw | Raw data send/receive |
| 0x76 | xsetport | Set hardware port value |
| 0x77 | xsireset | SI relais reset |
| 0x78 | xstoptr | Stop transfer (stub) |
| 0x79 | fix2hex | Integer to hex string |
| 0x7a | fix2dez | Integer to decimal string |
| 0x7b | tabset | Select table by name |
| 0x7c | tabseek | Seek to row in table |
| 0x7d | tabget | Get cell value from table |
| 0x7e | strcat | String concatenate (alias) |
| 0x7f | pary | Get parameter binary |
| 0x80 | parn | Get parameter count |
| 0x81 | ergc | Result: char (byte) |
| 0x82 | ergl | Result: long (dword) |
| 0x83 | tabline | Get row line number |
| 0x86 | xinfo | Interface info (stub) |
| 0x87 | flt2a | Float to string |
| 0x88 | setflt | Set float immediate |
| 0x89 | cfgig | Config get integer |
| 0x8a | cfgsg | Config get string |
| 0x8b | cfgis | Config set integer |
| 0x8c | a2y | ASCII to binary (Y) |
| 0x8d | xparraw | Raw parameters (stub) |
| 0x8e | hex2y | Hex string to binary |
| 0x8f | strcmp | String compare (alias) |
| 0x90 | strlen | String length (alias) |
| 0x91 | y2bcd | Binary to BCD string |
| 0x92 | y2hex | Binary to hex string |
| 0x93 | shmset | Set shared memory value |
| 0x94 | shmget | Get shared memory value |
| 0x95 | ergsysi | System info result |
| 0x96 | flt2fix | Float to integer |
| 0x97 | iupdate | Update progress text |
| 0x98 | irange | Set progress range |
| 0x99 | iincpos | Increment progress position |
| 0x9a | tabseeku | Seek row (case-insensitive) |
| 0x9b | flt2y4 | Float to 4-byte binary |
| 0x9c | flt2y8 | Float to 8-byte binary |
| 0x9d | y42flt | 4-byte binary to float |
| 0x9e | y82flt | 8-byte binary to float |
| 0x9f | plink | Link external procedure |
| 0xa0 | pcall | Call linked procedure |
| 0xa1 | fcomp | Float compare |
| 0xa2 | plinkv | Link proc w/ validation (stub) |
| 0xa3 | ppush | Push int to procedure stack |
| 0xa4 | ppop | Pop int from procedure stack |
| 0xa5 | ppushflt | Push float to procedure stack |
| 0xa6 | ppopflt | Pop float from procedure stack |
| 0xa7 | ppushy | Push binary to procedure stack |
| 0xa8 | ppopy | Pop binary from procedure stack |
| 0xa9 | pjtsr | Proc jump to subroutine (stub) |
| 0xaa | tabsetex | Select table extended |
| 0xab | ufix2dez | Unsigned to decimal string |
| 0xac | generr | Generate/throw error |
| 0xad | ticks | Get system ticks |
| 0xae | waitex | Extended wait |
| 0xaf | xopen | Open interface |
| 0xb0 | xclose | Close interface |
| 0xb1 | xcloseex | Close interface extended |
| 0xb2 | xswitch | Switch interface |
| 0xb3 | xsendex | Extended send |
| 0xb4 | xrecvex | Extended receive |
| 0xb5 | ssize | String size in bytes |
| 0xb6 | tabcols | Get column count |
| 0xb7 | tabrows | Get row count |

---

**Total: 150 opcodes implemented**

For detailed descriptions with argument specifications, see [opcodes.md](./opcodes.md).
