# EDIABAS VM Opcode Reference

Extracted from `ebas32.dll` binary.

**Total opcodes: 186**

## Quick Reference

| Opcode | Mnemonic | Handler | Description |
|--------|----------|---------|-------------|
| 0x00 | **MOVE** | `FUN_10023f01` | Copy data |
| 0x01 | **CLEAR** | `FUN_10023f76` | Clear/zero data |
| 0x02 | **COMP** | `FUN_10023fc9` | Compare values |
| 0x03 | **SUBB** | `FUN_100240f6` | Subtract with borrow |
| 0x04 | **ADDS** | `FUN_10024481` | Add signed |
| 0x05 | **MULT** | `FUN_100245b8` | Multiply |
| 0x06 | **DIVS** | `FUN_10024714` | Divide signed |
| 0x07 | **AND** | `FUN_1002483d` | Bitwise AND |
| 0x08 | **OR** | `FUN_100248fe` | Bitwise OR |
| 0x09 | **XOR** | `FUN_1002495e` | Bitwise XOR |
| 0x0A | **NOT** | `FUN_100249be` | Bitwise NOT |
| 0x0B | **JUMP** | `FUN_10024a17` | Unconditional jump |
| 0x0C | **JTSR** | `FUN_10024a30` | Jump to subroutine |
| 0x0D | **RET** | `FUN_10024aac` | Return from subroutine |
| 0x0E | **JC** | `FUN_10024b1e` | Jump if carry |
| 0x0F | **JAE** | `FUN_10024b43` | Jump if above/equal |
| 0x10 | **JZ** | `FUN_10024b68` | Jump if zero |
| 0x11 | **JNZ** | `FUN_10024b8d` | Jump if not zero |
| 0x12 | **JV** | `FUN_10024bb2` | Jump if overflow |
| 0x13 | **JNV** | `FUN_10024bd7` | Jump if no overflow |
| 0x14 | **JMI** | `FUN_10024bfc` | Jump if minus |
| 0x15 | **JPL** | `FUN_10024c21` | Jump if plus |
| 0x16 | **CLRC** | `FUN_10024d7e` | Clear carry flag |
| 0x17 | **SETC** | `FUN_10024d90` | Set carry flag |
| 0x18 | **ASR** | `FUN_10024da2` | Arithmetic shift right |
| 0x19 | **LSL** | `FUN_10024f38` | Logical shift left |
| 0x1A | **LSR** | `FUN_10024e78` | Logical shift right |
| 0x1B | **ASL** | `FUN_10024f38` | Arithmetic shift left |
| 0x1C | **NOP** | `FUN_10024fec` | No operation |
| 0x1D | **EOJ** | `FUN_10020ec0` | End of job |
| 0x1E | **PUSH** | `FUN_10024ff5` | Push to stack |
| 0x1F | **POP** | `FUN_10025068` | Pop from stack |
| 0x20 | **SCMP** | `FUN_100250d2` | String compare |
| 0x21 | **SCAT** | `FUN_1002517c` | String concatenate |
| 0x22 | **SCUT** | `FUN_10025299` | String cut/substring |
| 0x23 | **SLEN** | `FUN_100252e1` | String length |
| 0x24 | **SPASTE** | `FUN_10025370` | String paste/insert |
| 0x25 | **SERASE** | `FUN_10025477` | String erase |
| 0x26 | **XCONNECT** | `FUN_100211c6` | Connect to ECU |
| 0x27 | **XHANGUP** | `FUN_1002123a` | Disconnect from ECU |
| 0x28 | **XSETPAR** | `FUN_1002132c` | Set communication parameter |
| 0x29 | **XAWLEN** | `FUN_10021452` | Set answer length |
| 0x2A | **XSEND** | `FUN_100214e8` | Send telegram |
| 0x2B | **XSENDF** | `FUN_1002157e` | Send frequent telegram |
| 0x2C | **XREQUF** | `FUN_10021732` | Request frequent telegram |
| 0x2D | **XSTOPF** | `FUN_1002178b` | Stop frequent telegram |
| 0x2E | **XKEYB** | `FUN_100217e4` | Get keybytes |
| 0x2F | **XSTATE** | `FUN_1002183d` | Get ECU state |
| 0x30 | **XBOOT** | `FUN_100218ab` | ECU warmstart |
| 0x31 | **XRESET** | `FUN_10021904` | ECU reset |
| 0x32 | **XTYPE** | `FUN_1002195d` | Get interface type |
| 0x33 | **XVERS** | `FUN_100219b6` | Get interface version |
| 0x34 | **ERGB** | `FUN_10025503` | Output byte result |
| 0x35 | **ERGW** | `FUN_10025611` | Output word result |
| 0x36 | **ERGD** | `FUN_10025721` | Output dword result |
| 0x37 | **ERGI** | `FUN_10025699` | Output integer result |
| 0x38 | **ERGR** | `FUN_1002582f` | Output real result |
| 0x39 | **ERGS** | `FUN_100258b8` | Output string result |
| 0x3A | **A2FLT** | `FUN_100275ae` | ASCII to float |
| 0x3B | **FADD** | `FUN_1002762f` | Float add |
| 0x3C | **FSUB** | `FUN_10027670` | Float subtract |
| 0x3D | **FMUL** | `FUN_100276b1` | Float multiply |
| 0x3E | **FDIV** | `FUN_100276f2` | Float divide |
| 0x3F | **ERGY** | `FUN_1002599f` | Output binary result |
| 0x40 | **ENEWSET** | `FUN_10025a44` |  |
| 0x41 | **ETAG** | `FUN_10025a56` |  |
| 0x42 | **XREPS** | `FUN_10021896` |  |
| 0x43 | **GETTMR** | `FUN_10025afe` |  |
| 0x44 | **SETTMR** | `FUN_10025b1c` |  |
| 0x45 | **SETT** | `FUN_10025b38` |  |
| 0x46 | **CLRT** | `FUN_10025b67` |  |
| 0x47 | **JT** | `FUN_10025b82` |  |
| 0x48 | **JNT** | `FUN_10025bef` |  |
| 0x49 | **ADDC** | `FUN_10024353` | Add with carry |
| 0x4A | **SUBC** | `FUN_10024229` | Subtract with carry |
| 0x4B | **BREAK** | `FUN_10025e46` | User break/error |
| 0x4C | **CLRV** | `FUN_10025e5f` | Clear overflow flag |
| 0x4D | **EERR** | `FUN_10025e71` | Check error flag |
| 0x4E | **POPF** | `FUN_100265df` | Pop flags |
| 0x4F | **PUSHF** | `FUN_1002658c` | Push flags |
| 0x50 | **ATSP** | `FUN_10025da7` |  |
| 0x51 | **SWAP** | `FUN_100267a6` | Swap bytes |
| 0x52 | **SETSPC** | `FUN_1002662a` |  |
| 0x53 | **SREVRS** | `FUN_10026663` |  |
| 0x54 | **STOKEN** | `FUN_100266e4` |  |
| 0x55 | **PARB** | `FUN_10026cb5` | Get byte parameter |
| 0x56 | **PARW** | `FUN_10026ce1` | Get word parameter |
| 0x57 | **PARL** | `FUN_10026d0d` | Get long parameter |
| 0x58 | **PARS** | `FUN_10026d39` | Get string parameter |
| 0x59 | **FCLOSE** | `FUN_10025ea1` | Close file |
| 0x5A | **JG** | `FUN_10024c46` |  |
| 0x5B | **JGE** | `FUN_10024c7c` |  |
| 0x5C | **JL** | `FUN_10024ce8` |  |
| 0x5D | **JLE** | `FUN_10024cb2` |  |
| 0x5E | **JA** | `FUN_10024d1e` |  |
| 0x5F | **JBE** | `FUN_10024d4e` |  |
| 0x60 | **FOPEN** | `FUN_10025ee2` | Open file |
| 0x61 | **FREAD** | `FUN_10025fbd` | Read from file |
| 0x62 | **FREADLN** | `FUN_1002606b` | Read line from file |
| 0x63 | **FSEEK** | `FUN_1002618e` | Seek in file |
| 0x64 | **FSEEKLN** | `FUN_1002621e` | Seek to line |
| 0x65 | **FTELL** | `FUN_10026394` | Get file position |
| 0x66 | **FTELLLN** | `FUN_10026415` | Get line number |
| 0x67 | **A2FIX** | `FUN_10025c50` | ASCII to integer |
| 0x68 | **FIX2FLT** | `FUN_10027598` |  |
| 0x69 | **PARR** | `FUN_10026db0` | Get real parameter |
| 0x6A | **TEST** | `FUN_1002489d` |  |
| 0x6B | **WAIT** | `FUN_1002691a` | Wait/delay |
| 0x6C | **DATE** | `FUN_10026ab0` | Get current date |
| 0x6D | **TIME** | `FUN_10026c55` | Get current time |
| 0x6E | **XBATT** | `FUN_10021a0f` |  |
| 0x6F | **TOSP** | `FUN_10025df7` |  |
| 0x70 | **XDOWNL** | `FUN_10021a68` |  |
| 0x71 | **XGETPORT** | `FUN_10021afe` |  |
| 0x72 | **XIGNIT** | `FUN_10021b86` |  |
| 0x73 | **XLOOPT** | `FUN_10021bdf` |  |
| 0x74 | **XPROG** | `FUN_10021c38` |  |
| 0x75 | **XRAW** | `FUN_10021cc1` |  |
| 0x76 | **XSETPORT** | `FUN_10021d57` |  |
| 0x77 | **XSIRESET** | `FUN_10021e1f` |  |
| 0x78 | **XSTOPTR** | `FUN_10021ea8` |  |
| 0x79 | **FIX2HEX** | `FUN_10027051` | Integer to hex |
| 0x7A | **FIX2DEZ** | `FUN_10026f64` | Integer to ASCII |
| 0x7B | **TABSET** | `FUN_10027141` | Set table data |
| 0x7C | **TABSEEK** | `FUN_100271cb` | Seek in table |
| 0x7D | **TABGET** | `FUN_100274be` | Get from table |
| 0x7E | **STRCAT** | `FUN_1002520d` |  |
| 0x7F | **PARY** | `FUN_10026de7` | Get binary parameter |
| 0x80 | **PARN** | `FUN_10026e6d` | Get parameter count |
| 0x81 | **ERGC** | `FUN_1002558a` | Output char result |
| 0x82 | **ERGL** | `FUN_100257a8` | Output long result |
| 0x83 | **TABLINE** | `FUN_1002733a` | Get table line |
| 0x84 | **XSENDR** | `FUN_10021614` |  |
| 0x85 | **XRECV** | `FUN_100216aa` | Receive telegram |
| 0x86 | **XINFO** | `FUN_10021296` | Get system info |
| 0x87 | **FLT2A** | `FUN_10027743` | Float to ASCII |
| 0x88 | **SETFLT** | `FUN_10027996` |  |
| 0x89 | **CFGIG** | `FUN_100279d4` |  |
| 0x8A | **CFGSG** | `FUN_10027a27` |  |
| 0x8B | **CFGIS** | `FUN_10027a90` |  |
| 0x8C | **A2Y** | `FUN_10027ac8` |  |
| 0x8D | **XPARRAW** | `FUN_100213c2` |  |
| 0x8E | **HEX2Y** | `FUN_10027b53` | Hex string to bytes |
| 0x8F | **STRCMP** | `FUN_10027cbc` | String compare (C-style) |
| 0x90 | **STRLEN** | `FUN_10027d8d` | String length (C-style) |
| 0x91 | **Y2BCD** | `FUN_10027e4c` |  |
| 0x92 | **Y2HEX** | `FUN_10027f71` | Bytes to hex string |
| 0x93 | **SHMSET** | `FUN_100281fa` |  |
| 0x94 | **SHMGET** | `FUN_10028123` |  |
| 0x95 | **ERGSYSI** | `FUN_1002809b` |  |
| 0x96 | **FLT2FIX** | `FUN_10028259` |  |
| 0x97 | **IUPDATE** | `FUN_10028306` |  |
| 0x98 | **IRANGE** | `FUN_1002838f` |  |
| 0x99 | **IINCPOS** | `FUN_100283b8` |  |
| 0x9A | **TABSEEKU** | `FUN_10028658` |  |
| 0x9B | **FLT2Y4** | `FUN_100284ab` |  |
| 0x9C | **FLT2Y8** | `FUN_10028550` |  |
| 0x9D | **Y42FLT** | `FUN_100285c8` |  |
| 0x9E | **Y82FLT** | `FUN_10028611` |  |
| 0x9F | **PLINK** | `FUN_100288ff` |  |
| 0xA0 | **PCALL** | `FUN_10028943` |  |
| 0xA1 | **FCOMP** | `FUN_10028831` |  |
| 0xA2 | **PLINKV** | `FUN_100289b6` |  |
| 0xA3 | **PPUSH** | `FUN_10028a1c` |  |
| 0xA4 | **PPOP** | `FUN_10028a50` |  |
| 0xA5 | **PPUSHFLT** | `FUN_10028aa6` |  |
| 0xA6 | **PPOPFLT** | `FUN_10028ac5` |  |
| 0xA7 | **PPUSHY** | `FUN_10028b06` |  |
| 0xA8 | **PPOPY** | `FUN_10028b25` |  |
| 0xA9 | **PJTSR** | `FUN_10028b69` |  |
| 0xAA | **TABSETEX** | `FUN_10028b89` |  |
| 0xAB | **UFIX2DEZ** | `FUN_10026f9e` |  |
| 0xAC | **GENERR** | `FUN_10028c16` | Generate error |
| 0xAD | **TICKS** | `FUN_10028cc6` | Get system ticks |
| 0xAE | **WAITEX** | `FUN_100269e8` | Wait extended (ms) |
| 0xAF | **XOPEN** | `FUN_10021f01` |  |
| 0xB0 | **XCLOSE** | `FUN_10021f4f` |  |
| 0xB1 | **XCLOSEEX** | `FUN_10021f85` |  |
| 0xB2 | **XSWITCH** | `FUN_10021fa4` |  |
| 0xB3 | **XSENDEX** | `FUN_1002204b` |  |
| 0xB4 | **XRECVEX** | `FUN_100220e4` |  |
| 0xB5 | **SSIZE** | `FUN_10025352` |  |
| 0xB6 | **TABCOLS** | `FUN_10028cee` |  |
| 0xB7 | **TABROWS** | `FUN_10028d15` |  |
| 0xB8 | **JB** | `FUN_10024b1e` |  |
| 0xB9 | **JNC** | `FUN_10024b43` |  |

## Category Summary

| Category | Opcodes |
|----------|---------|
| Data Movement | 2 |
| Arithmetic | 7 |
| Logical | 4 |
| Shift | 4 |
| Control Flow | 21 |
| Stack | 4 |
| String | 18 |
| Communication (X*) | 35 |
| File I/O | 20 |
| Table | 8 |
| Result Output (ERG*) | 10 |
| Parameter (PAR*) | 6 |
| Other | 47 |
| **Total** | **186** |
