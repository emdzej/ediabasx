## Summary

This PR adds comprehensive documentation for the ediabas project, addressing issue #32.

## Changes

### README.md (new)

- **Project overview** - TypeScript port of BMW EdiabasLib for vehicle diagnostics
- **Installation instructions** - git clone, pnpm install, pnpm build
- **CLI usage with real examples** - All commands tested against `test-data/d_motor.prg`:
  - `ediabas parse` - Full JSON output
  - `ediabas info` - Quick file summary
  - `ediabas jobs` - List jobs with args/results
  - `ediabas tables` - List tables
  - `ediabas disasm` - Disassemble bytecode
- **Package structure** - Explains all packages and their purposes
- **Development section** - pnpm turbo commands for build/test/typecheck
- **Technical details** - PRG/GRP format and XOR decryption

### AGENTS.md

- Added documentation section with note to keep README updated when adding new features or CLI commands

## Testing

- All CLI commands were run against `test-data/d_motor.prg` to capture real output for examples
- Examples in README reflect actual command behavior

## Closes

Closes #32
