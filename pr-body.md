## Summary
- add BEST bytecode disassembler and formatting utilities to best-parser
- export Instruction type and disassembler entry points
- add `ediabas disasm` CLI command to dump job bytecode
- add disassembler tests with jump and XOR-decoding coverage

Closes #4.

## Testing
- pnpm turbo build typecheck test
