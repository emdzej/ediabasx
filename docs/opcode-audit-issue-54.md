# Opcode audit (Issue #54)

Source: EdiabasLib `EdiabasNet.cs` OcList

| Opcode | Mnemonic | Status | Notes |
| ------ | -------- | ------ | ----- |
| 0x00 | move | implemented | move |
| 0x01 | clear | implemented | clear |
| 0x02 | comp | implemented | alias -> cmp |
| 0x03 | subb | implemented | alias -> sub |
| 0x04 | adds | implemented | alias -> add |
| 0x05 | mult | implemented | alias -> mul |
| 0x06 | divs | implemented | alias -> div |
| 0x07 | and | implemented | and |
| 0x08 | or | implemented | or |
| 0x09 | xor | implemented | xor |
| 0x0A | not | implemented | not |
| 0x0B | jump | implemented | alias -> jmp |
| 0x0C | jtsr | implemented | jtsr |
| 0x0D | ret | implemented | ret |
| 0x0E | jc | implemented | jc |
| 0x0F | jae | implemented | jae |
| 0x10 | jz | implemented | jz |
| 0x11 | jnz | implemented | jnz |
| 0x12 | jv | implemented | jv |
| 0x13 | jnv | implemented | jnv |
| 0x14 | jmi | implemented | jmi |
| 0x15 | jpl | implemented | jpl |
| 0x16 | clrc | implemented | clrc |
| 0x17 | setc | implemented | setc |
| 0x18 | asr | implemented | alias -> shr |
| 0x19 | lsl | implemented | alias -> shl |
| 0x1A | lsr | implemented | alias -> shr |
| 0x1B | asl | implemented | alias -> shl |
| 0x1C | nop | missing |  |
| 0x1D | eoj | missing |  |
| 0x1E | push | implemented | push |
| 0x1F | pop | implemented | pop |
| 0x20 | scmp | implemented | scmp |
| 0x21 | scat | implemented | scat |
| 0x22 | scut | missing |  |
| 0x23 | slen | implemented | slen |
| 0x24 | spaste | implemented | spaste |
| 0x25 | serase | implemented | serase |
| 0x26 | xconnect | implemented | xconnect |
| 0x27 | xhangup | implemented | xhangup |
| 0x28 | xsetpar | implemented |  |
| 0x29 | xawlen | implemented |  |
| 0x2A | xsend | implemented | xsend |
| 0x2B | xsendf | implemented |  |
| 0x2C | xrequf | implemented |  |
| 0x2D | xstopf | implemented |  |
| 0x2E | xkeyb | implemented |  |
| 0x2F | xstate | implemented |  |
| 0x30 | xboot | implemented |  |
| 0x31 | xreset | implemented | xreset |
| 0x32 | xtype | implemented | xtype |
| 0x33 | xvers | implemented | xvers |
| 0x34 | ergb | implemented | ergb |
| 0x35 | ergw | implemented | ergw |
| 0x36 | ergd | implemented | ergd |
| 0x37 | ergi | implemented | ergi |
| 0x38 | ergr | implemented | ergr |
| 0x39 | ergs | implemented | ergs |
| 0x3A | a2flt | implemented | a2flt |
| 0x3B | fadd | implemented | fadd |
| 0x3C | fsub | implemented | fsub |
| 0x3D | fmul | implemented | fmul |
| 0x3E | fdiv | implemented | fdiv |
| 0x3F | ergy | implemented | ergy |
| 0x40 | enewset | missing |  |
| 0x41 | etag | missing |  |
| 0x42 | xreps | implemented |  |
| 0x43 | gettmr | implemented |  |
| 0x44 | settmr | implemented |  |
| 0x45 | sett | missing |  |
| 0x46 | clrt | missing |  |
| 0x47 | jt | missing |  |
| 0x48 | jnt | missing |  |
| 0x49 | addc | missing |  |
| 0x4A | subc | missing |  |
| 0x4B | break | missing |  |
| 0x4C | clrv | implemented | clrv |
| 0x4D | eerr | missing |  |
| 0x4E | popf | implemented | popf |
| 0x4F | pushf | implemented | pushf |
| 0x50 | atsp | implemented | atsp |
| 0x51 | swap | implemented | swap |
| 0x52 | setspc | implemented | setspc |
| 0x53 | srevrs | implemented | alias -> srev |
| 0x54 | stoken | implemented | stoken |
| 0x55 | parb | implemented |  |
| 0x56 | parw | implemented |  |
| 0x57 | parl | implemented |  |
| 0x58 | pars | implemented |  |
| 0x59 | fclose | implemented |  |
| 0x5A | jg | implemented | jg |
| 0x5B | jge | implemented | jge |
| 0x5C | jl | implemented | jl |
| 0x5D | jle | implemented | jle |
| 0x5E | ja | implemented | ja |
| 0x5F | jbe | implemented | jbe |
| 0x60 | fopen | implemented |  |
| 0x61 | fread | implemented |  |
| 0x62 | freadln | missing |  |
| 0x63 | fseek | implemented |  |
| 0x64 | fseekln | implemented |  |
| 0x65 | ftell | missing |  |
| 0x66 | ftellln | missing |  |
| 0x67 | a2fix | implemented |  |
| 0x68 | fix2flt | implemented |  |
| 0x69 | parr | implemented |  |
| 0x6A | test | implemented | test |
| 0x6B | wait | implemented |  |
| 0x6C | date | implemented |  |
| 0x6D | time | implemented |  |
| 0x6E | xbatt | missing |  |
| 0x6F | tosp | missing |  |
| 0x70 | xdownl | missing |  |
| 0x71 | xgetport | implemented |  |
| 0x72 | xignit | implemented |  |
| 0x73 | xloopt | implemented |  |
| 0x74 | xprog | implemented |  |
| 0x75 | xraw | implemented |  |
| 0x76 | xsetport | implemented |  |
| 0x77 | xsireset | implemented |  |
| 0x78 | xstoptr | missing |  |
| 0x79 | fix2hex | implemented |  |
| 0x7A | fix2dez | implemented |  |
| 0x7B | tabset | implemented | tabset |
| 0x7C | tabseek | implemented | tabseek |
| 0x7D | tabget | implemented | tabget |
| 0x7E | strcat | implemented | strcat |
| 0x7F | pary | implemented |  |
| 0x80 | parn | implemented |  |
| 0x81 | ergc | missing |  |
| 0x82 | ergl | missing |  |
| 0x83 | tabline | implemented | tabline |
| 0x84 | xsendr | implemented | xsendr |
| 0x85 | xrecv | implemented | xrecv |
| 0x86 | xinfo | missing |  |
| 0x87 | flt2a | implemented | flt2a |
| 0x88 | setflt | missing |  |
| 0x89 | cfgig | missing |  |
| 0x8A | cfgsg | missing |  |
| 0x8B | cfgis | missing |  |
| 0x8C | a2y | missing |  |
| 0x8D | xparraw | missing |  |
| 0x8E | hex2y | missing |  |
| 0x8F | strcmp | implemented | strcmp |
| 0x90 | strlen | implemented | strlen |
| 0x91 | y2bcd | missing |  |
| 0x92 | y2hex | missing |  |
| 0x93 | shmset | implemented |  |
| 0x94 | shmget | implemented |  |
| 0x95 | ergsysi | missing |  |
| 0x96 | flt2fix | implemented |  |
| 0x97 | iupdate | missing |  |
| 0x98 | irange | missing |  |
| 0x99 | iincpos | missing |  |
| 0x9A | tabseeku | implemented | tabseeku |
| 0x9B | flt2y4 | missing |  |
| 0x9C | flt2y8 | missing |  |
| 0x9D | y42flt | missing |  |
| 0x9E | y82flt | missing |  |
| 0x9F | plink | implemented |  |
| 0xA0 | pcall | implemented |  |
| 0xA1 | fcomp | implemented | fcomp |
| 0xA2 | plinkv | missing |  |
| 0xA3 | ppush | implemented |  |
| 0xA4 | ppop | missing |  |
| 0xA5 | ppushflt | implemented |  |
| 0xA6 | ppopflt | missing |  |
| 0xA7 | ppushy | implemented |  |
| 0xA8 | ppopy | missing |  |
| 0xA9 | pjtsr | missing |  |
| 0xAA | tabsetex | missing |  |
| 0xAB | ufix2dez | implemented |  |
| 0xAC | generr | missing |  |
| 0xAD | ticks | missing |  |
| 0xAE | waitex | missing |  |
| 0xAF | xopen | implemented |  |
| 0xB0 | xclose | implemented |  |
| 0xB1 | xcloseex | implemented |  |
| 0xB2 | xswitch | implemented |  |
| 0xB3 | xsendex | implemented |  |
| 0xB4 | xrecvex | implemented |  |
| 0xB5 | ssize | missing |  |
| 0xB6 | tabcols | implemented | tabcols |
| 0xB7 | tabrows | implemented | tabrows |