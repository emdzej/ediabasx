# Prompt: Generate Interpreter Documentation

This prompt was used to generate `docs/interpreter.md` from the source code.

## Instructions

Generate comprehensive interpreter and bytecode documentation for the Ediabas TypeScript implementation by analyzing the source code.

### Analysis Scope

Analyze these source directories:
- `packages/interpreter/src/` — Interpreter implementation, execution engine, operations
- `packages/best-parser/src/` — PRG/GRB file parser, disassembler, type definitions
- `packages/core/src/` — Error handling, encoding utilities

### Documentation Structure

Create `docs/interpreter.md` with these sections:

#### 1. PRG/GRB File Structure
- **Legacy Binary Format**: Header layout, offsets, magic bytes
- **EDIABAS OBJECT Format**: Modern format with XOR encoding
- **XOR Encoding**: Key (0xF7), encoding from offset 0xA0
- **Text Metadata**: Key-value format (ECU, JOBNAME, RESULT, ARG, etc.)
- **Binary Job Table**: Structure at offset 0x88, entry format (0x44 bytes)
- **Binary Table Structure**: Structure at offset 0x84, entry format (0x50 bytes), data layout

**Sources**:
- `packages/best-parser/src/types.ts` — Type definitions
- `packages/best-parser/src/parser.ts` — Parsing logic, XOR decoding, metadata parsing

#### 2. Register Architecture
- **Register Types**: B (byte), A (auxiliary byte), I (word), L (long), S (string), F (float)
- **Register Counts**: Exact ranges (B0-BF, I0-IF, L0-L7, S0-SF, F0-F7, A0-AF)
- **Register Encoding**: Byte values for each register in bytecode
- **String Register Behavior**: Max length (SSIZE), UTF-8 storage, CP1252 conversion

**Sources**:
- `packages/interpreter/src/registers.ts` — RegisterSet implementation
- `packages/best-parser/src/disassembler.ts` — REGISTER_NAMES map

#### 3. Addressing Modes
- **Mode Table**: Complete list (NONE, REG_S, REG_AB, IMM8, IMM16, IMM32, IMM_STR, IDX_*, etc.)
- **Encoding**: How modes are encoded in the addressing byte (nibbles)
- **Immediate String Format**: Length + data structure
- **Indexed Access**: All variants (immediate, register, with offset, with length)

**Sources**:
- `packages/interpreter/src/interpreter.ts` — OpAddrModes constants, decodeOperand function
- `packages/best-parser/src/disassembler.ts` — readOperand function

#### 4. CPU Flags
- **Flag Types**: Z (zero), C (carry), V (overflow), S (sign)
- **Update Rules**: When each flag is set for arithmetic and comparison
- **Conditional Jumps**: Complete mapping (jz, jnz, jc, jg, ja, etc.)

**Sources**:
- `packages/interpreter/src/flags.ts` — Flags class, updateFromResult, updateFromCompare
- `packages/interpreter/src/operations/control-flow.ts` — Jump condition logic

#### 5. Bytecode Reference
- **Instruction Format**: Opcode, addressing byte, operands
- **Complete Opcode Table**: All opcodes (0x00-0xB7) with hex, mnemonic, operands, description
- **Categorized Sections**:
  - Data Movement
  - Arithmetic
  - Bitwise Logic
  - Control Flow
  - Flag Manipulation
  - Stack
  - String Operations
  - Floating Point
  - Result Collection
  - Parameters
  - Communication
  - File Operations
  - Time Operations
  - Table Operations
  - Shared Memory
  - Configuration
  - Procedures
  - Progress Reporting
  - System

**Sources**:
- `packages/best-parser/src/disassembler.ts` — OPCODES map (authoritative mnemonic list)
- `packages/interpreter/src/interpreter.ts` — getHandler method (opcode implementations)
- `packages/interpreter/src/operations/*.ts` — Individual operation implementations

#### 6. Stack Operations
- **Call Stack**: Used by jtsr/ret, max depth
- **Data Stack**: Used by push/pop/atsp, max depth
- **Flag Stack**: pushf/popf, encoding format

**Sources**:
- `packages/interpreter/src/callstack.ts` — CallStack implementation
- `packages/interpreter/src/stack.ts` — DataStack implementation
- `packages/interpreter/src/operations/stack.ts` — Stack operations

#### 7. String Handling
- **Storage**: UTF-8 internal, CP1252 conversion
- **Binary vs Text**: Which operations use which encoding
- **Indexed Access**: Syntax and examples
- **Token Parsing**: setspc, stoken usage

**Sources**:
- `packages/interpreter/src/operations/string.ts` — String operations
- `packages/core/src/encoding.ts` — cp1252ToUtf8, utf8ToCp1252

#### 8. Result Collection
- **Result Types**: byte, word, dword, int, char, long, real, string, binary
- **Opcodes**: ergb, ergw, ergd, ergi, ergc, ergl, ergr, ergs, ergy
- **Result Set Management**: enewset
- **Selective Collection**: etag usage
- **System Results**: ergsysi

**Sources**:
- `packages/interpreter/src/operations/result.ts` — Result collection implementation

#### 9. Job Execution Flow
- **Initialization**: Job lookup, offset resolution, state setup
- **Execution Loop**: Decode → Execute → Check halt
- **Termination**: eoj, break, errors
- **Inter-Job Communication**: Parameters, results, shared memory

**Sources**:
- `packages/interpreter/src/interpreter.ts` — start, execute, step methods

#### 10. Error Handling
- **Error Trap System**: sett, clrt, jt, jnt, eerr, gettmr
- **Trap State**: errorTrapMask, errorTrapBitNr
- **Error Codes**: EDIABAS_BIP_0008, REGISTER_ERROR, etc.
- **Communication Errors**: Trap bit meanings

**Sources**:
- `packages/interpreter/src/operations/time.ts` — Trap operations
- `packages/core/src/errors.ts` — Error code definitions

### Key Principles

1. **Code is Truth**: Document what the CODE does, not what comments say
2. **Complete Coverage**: Include ALL opcodes from the OPCODES map
3. **Accurate Encoding**: Verify byte layouts, XOR keys, offsets from actual parsing code
4. **Real Examples**: Use actual syntax from disassembler output
5. **Cross-Reference**: Link related concepts (e.g., jumps → flags, results → parameters)

### Quality Checks

Before finalizing:
- [ ] All 184 opcodes documented (count from OPCODES map)
- [ ] Register encoding table matches REGISTER_NAMES exactly
- [ ] Addressing mode values match OpAddrModes constants
- [ ] XOR key and offset verified from parser code
- [ ] Jump conditions match control-flow operation logic
- [ ] File format offsets match parser implementation

### Output Format

- **Markdown**: Use tables, code blocks, clear headings
- **Technical Depth**: Detailed enough for implementers
- **Reference Quality**: Can be used to understand/debug bytecode

### Regeneration

To update this documentation:

```bash
# 1. Pull latest code
git checkout main && git pull

# 2. Analyze source files
# Focus on packages/interpreter/src/, packages/best-parser/src/

# 3. Regenerate docs/interpreter.md following this prompt

# 4. Validate
pnpm lint && pnpm build

# 5. Create PR
git checkout -b docs/update-interpreter-docs
git add docs/interpreter.md
git commit -m "docs: update interpreter documentation"
git push origin docs/update-interpreter-docs
```

---

**Prompt Version**: 1.0  
**Created**: 2025-02-07  
**Source Commit**: `7d52b83`  
**Generated By**: AI assistant analyzing TypeScript implementation
