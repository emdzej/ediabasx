# Prompt: Generate EDIABAS Interpreter & Bytecode Documentation

You are tasked with generating **comprehensive** interpreter and bytecode documentation for the BEST2 bytecode interpreter in the `emdzej/ediabas` TypeScript repository.

## Context

The EDIABAS interpreter is a **register-based virtual machine** that executes compiled BEST2 bytecode from PRG/GRB files. It implements 184 opcodes covering arithmetic, control flow, string manipulation, communication, file I/O, tables, and result collection.

## Output Files

1. **`docs/interpreter.md`** — Complete interpreter documentation (~1000+ lines)
2. **`docs/prompts/generate-interpreter-docs.md`** — This prompt file (update if needed)

## Source Code to Analyze

### Core Implementation
- `packages/interpreter/src/interpreter.ts` — Main interpreter, opcode dispatch, state management
- `packages/interpreter/src/registers.ts` — Register set (B/A/I/L/S/F)
- `packages/interpreter/src/flags.ts` — CPU flags (Z/C/V/S)
- `packages/interpreter/src/callstack.ts` — Subroutine call stack
- `packages/interpreter/src/stack.ts` — Data stack for push/pop
- `packages/interpreter/src/trap-bits.ts` — Error trap bit mappings

### Opcode Implementations
- `packages/interpreter/src/operations/arithmetic.ts` — Integer arithmetic (add, sub, mul, div, bitwise)
- `packages/interpreter/src/operations/control-flow.ts` — Jumps, calls, returns
- `packages/interpreter/src/operations/float.ts` — Floating-point operations
- `packages/interpreter/src/operations/string.ts` — String manipulation
- `packages/interpreter/src/operations/stack.ts` — Stack operations
- `packages/interpreter/src/operations/result.ts` — Result collection (erg* opcodes)
- `packages/interpreter/src/operations/communication.ts` — Interface operations (x* opcodes)
- `packages/interpreter/src/operations/file.ts` — File I/O operations
- `packages/interpreter/src/operations/table.ts` — Table operations
- `packages/interpreter/src/operations/parameters.ts` — Job parameter access
- `packages/interpreter/src/operations/procedures.ts` — Procedure stack and linking
- `packages/interpreter/src/operations/time.ts` — Time, date, wait, error traps
- `packages/interpreter/src/operations/shared-memory.ts` — Shared memory operations

### File Format Parsing
- `packages/best-parser/src/parser.ts` — PRG/GRB file parser
- `packages/best-parser/src/disassembler.ts` — Bytecode disassembler
- `packages/best-parser/src/types.ts` — File structure definitions

## Documentation Structure for `docs/interpreter.md`

### 1. PRG/GRB File Structure
- **Legacy PRG/GRP format**: Header layout, job table, string table, bytecode section
- **EDIABAS OBJECT format**: Magic header, XOR encoding (0xF7), job list, table list, metadata
- Binary encoding details (little-endian, CP1252 strings, NUL-terminated)

### 2. Registers and Addressing Modes
- **Register types**: B/A/I/L/S/F (counts, widths, descriptions)
- **Internal state**: PC, flags, stacks, trap state, progress, tables
- **Register encoding**: Byte mappings (0x00–0x0F = B0–BF, etc.)
- **Addressing modes**: 16 modes (NONE, REG_S, IMM8/16/32, IMM_STR, indexed operands)
- **Operand encoding**: High/low nibbles in addressing mode byte
- **Jump offsets**: Relative vs. absolute addressing

### 3. CPU Flags
- **Flag descriptions**: Z (zero), C (carry), V (overflow), S (sign)
- **Flag update operations**: Arithmetic, bitwise, comparison
- **Conditional jumps**: Complete table of jz/jnz/jc/jae/jg/jl/ja/jbe/etc.
- **Flag stack operations**: pushf/popf encoding

### 4. Bytecode Instruction Set
- **Complete opcode table** (184 opcodes: 0x00–0xB7)
  - Hex code
  - Mnemonic
  - Description
  - Registers/state used
  - Operand format
  - Example usage
- **Legacy/stubbed opcodes**: Note which opcodes are no-ops
- **Type enforcement**: Integer vs. float vs. string register restrictions

### 5. Stack Operations
- **Data stack**: push/pop byte order (LE push, BE pop quirk), atsp, swap
- **Procedure stack**: ppush/ppop/ppushflt/ppopflt/ppushy/ppopy
- **Call stack**: jtsr/ret for subroutines
- **Flag stack**: pushf/popf (32-bit bitfield encoding)

### 6. String and Binary Handling
- **Encoding**: CP1252 bytes ↔ UTF-8 strings
- **Max length**: 255 bytes default (configurable)
- **String operations**: move, clear, scmp, scat, scut, slen, spaste, serase, swap, srevrs, stoken
- **Indexed operands**: Sx[index], Sx[index]#length, Sx[reg], Sx[reg,#offset]
- **Binary conversions**: a2y, hex2y, y2bcd, y2hex

### 7. Result Collection
- **Result types**: byte, word, dword, char, int, long, real, string, binary
- **Opcode table**: ergb/ergw/ergd/ergi/ergr/ergs/ergy/ergc/ergl
- **Result management**: enewset, etag (conditional skip)
- **System results**: ergsysi (initialization request)
- **Naming**: Case-insensitive, immediate or register

### 8. Error Handling and Trap Bits
- **Trap system**: errorTrapMask, errorTrapBitNr
- **Trap operations**: gettmr, settmr, sett, clrt, jt, jnt, eerr
- **Trap bit → error code mapping**: Full TrapBitDict table
- **Error handling example**: Code snippet showing trap usage

### 9. Job Execution Flow
- **Execution model**: Fetch-decode-execute cycle
- **Job initialization**: start(jobName, parameters)
- **Job termination**: eoj, error, break
- **Return value**: ResultCollector

### 10. Communication Interface
- **Lifecycle**: xconnect, xhangup, xreset, xboot
- **Configuration**: xsetpar, xawlen, xreps
- **Data transfer**: xsend, xraw, xsendf/xrequf/xstopf
- **Interface info**: xtype, xvers, xstate, xkeyb
- **Hardware control**: xbatt, xignit, xprog, xgetport, xsetport, xloopt, xsireset

### 11. File System Operations
- **File opcodes**: fopen, fclose, fread, freadln, fseek, fseekln, ftell, ftellln
- **Example**: Code snippet

### 12. Table Operations
- **Table management**: tabset, tabsetex, tabline, tabcols, tabrows
- **Data access**: tabseek, tabseeku, tabget
- **Example**: Code snippet

### Appendices
- **A. Operand Encoding Examples**: Byte-level breakdown of 4–5 instruction encodings
- **B. Implementation Notes**: Byte order, type enforcement, string encoding, progress reporting
- **C. Disassembler**: Example usage
- **Document metadata**: Source packages, commit, opcode count

## Requirements

- **Base everything on actual source code** — no guessing, no external references
- **Comprehensive coverage** — aim for 900+ lines (current doc is 439 lines; this should be ~1000+)
- **Accurate opcode count** — all 184 opcodes (0x00–0xB7)
- **Complete addressing mode table** — all 16 modes with encodings
- **Full flag descriptions** — Z/C/V/S with update rules
- **Mark legacy opcodes** — clearly note which opcodes are stubs/no-ops
- **Include examples** — at least 1 example per major section
- **Tables and code blocks** — use Markdown tables for structured data, code fences for examples

## Validation Steps

After generating documentation:

1. Check line count: `wc -l docs/interpreter.md` (should be 900+)
2. Verify opcode count: Grep for `| 0x` — should be 184 entries
3. Run linter: `pnpm lint`
4. Build project: `pnpm build`
5. Review for accuracy against source code

## Regeneration

To regenerate this documentation:

```bash
cd /tmp/ediabas
git checkout main && git pull
# Analyze source code in packages/interpreter and packages/best-parser
# Generate docs/interpreter.md with comprehensive content
pnpm lint && pnpm build
```

## Notes

- The interpreter is written in TypeScript but executes binary BEST2 bytecode
- PRG files can be in two formats: legacy binary or EDIABAS OBJECT (XOR-encoded)
- The interpreter strictly enforces operand types (int/float/string)
- Stack operations have a quirk: push is LE, pop reconstructs as BE
- Communication opcodes delegate to an external `CommunicationInterface` implementation
- Many legacy opcodes (tosp, xdownl, xparraw, pcall, etc.) are no-ops for compatibility

## Success Criteria

✅ Documentation covers all 184 opcodes
✅ File structure (both formats) fully documented
✅ All register types and addressing modes explained
✅ CPU flags and conditional jumps complete
✅ Stack, string, result, trap, communication, file, table sections present
✅ Examples and appendices included
✅ 900+ lines of comprehensive content
✅ Passes pnpm lint && pnpm build
