# Prompt: Generate interpreter & bytecode documentation (EDIABAS)

You are updating documentation based on **actual source code** in the `emdzej/ediabas` repository.

## Task
Generate comprehensive interpreter and bytecode documentation for the BEST2 interpreter.

## Output files
1. `docs/interpreter.md` — Full interpreter documentation
2. `docs/prompts/generate-interpreter-docs.md` — This prompt file (update if needed)

## What to analyze
- `packages/interpreter/src/` — interpreter runtime, opcode dispatch, registers, flags, stacks
- `packages/interpreter/src/operations/` — opcode semantics
- `packages/best-parser/src/` — PRG/GRB parsing and disassembler (file structure & opcode list)

## Documentation structure for `docs/interpreter.md`

### 1. PRG/GRB File Structure
- File header format (legacy PRG and EDIABAS OBJECT)
- Binary layout and offsets
- Sections (jobs, strings, bytecode offsets, tables)
- XOR encoding (0xF7)

### 2. Registers and Addressing Modes
- All registers (B/A/I/L/S/F and internal state)
- Register opcode encoding
- Addressing modes (immediate, register, indexed)
- Address mode encoding (high/low nibble)

### 3. Bytecode Reference
Create a table for each opcode with:
- Hex code
- Mnemonic
- Short description
- Registers used
- Operand format
- Example

### 4. Additional sections
- Stack operations
- String handling
- Result collection mechanism
- Job execution flow
- Error handling / trap bits
- Communication interface

## Requirements
- Base everything on actual code behavior (not older docs).
- Note which opcodes are stubbed/no‑op in the interpreter.
- Keep examples concise and consistent with operand types.

## Optional validation
After updates:
- `pnpm lint`
- `pnpm build`
