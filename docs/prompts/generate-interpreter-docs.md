# Prompt: Regenerate interpreter + bytecode documentation

You are documenting the Ediabas BEST2 interpreter based **only on code** in this repo.

## Target files
1. `docs/interpreter.md`
2. `docs/prompts/generate-interpreter-docs.md` (this file)

## Required structure for `docs/interpreter.md`
1. **PRG/GRB File Structure** (header, layout, XOR encoding)
2. **Registers and Addressing Modes**
3. **Bytecode Reference** (hex, mnemonic, description, registers, operands)
4. **Stack operations, string handling, result collection**
5. **Job execution flow, error handling**

## Code locations to analyze
- `packages/interpreter/src/`
- `packages/best-parser/src/`
- `packages/interpreter/src/operations/`

## Must include (from code)
- Legacy vs `@EDIABAS OBJECT` file layouts
- XOR decoding details (`0xA0`+ with key `0xF7`)
- Job/table list offsets for EDIABAS OBJECT (0x88/0x84)
- Register encoding map and address mode nibble layout
- Opcode list from `packages/best-parser/src/disassembler.ts`
- Opcode behavior from `packages/interpreter/src/interpreter.ts`
- Notes on stub/legacy opcodes (no‑ops or compatibility behavior)

## Style
- Use Markdown tables for opcode reference.
- Provide concise but complete descriptions; point out special cases (flags, side effects).
- Do **not** copy existing docs; derive from code.

## Validation
Run:
```
pnpm lint
pnpm build
```

If they fail, fix issues or explain why.
