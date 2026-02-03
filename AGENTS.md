# AGENTS.md - Ediabas TypeScript

Guidelines for AI agents working on this codebase.

## Project Overview

TypeScript implementation of BMW EDIABAS (Electronic Diagnostic Basic System).
Migrating from C# EdiabasLib to a modern TypeScript monorepo.

## Stack

- **Monorepo**: pnpm + Turborepo
- **Testing**: Vitest
- **Linting**: ESLint + Prettier
- **Build**: TypeScript (`tsc`)
- **CLI**: Commander + Ink + @clack/prompts

## Package Structure

```
packages/
├── core/           # Types, encoding (CP1252), crypto (XOR)
├── best-parser/    # PRG/GRP file parser
├── interpreter/    # BEST VM (planned)
├── interface-*/    # Communication interfaces
├── protocol-*/     # UDS, KWP, DoIP protocols
├── ediabas/        # Main library
└── cli/            # CLI tool
```

## PRG/GRP File Format

Files start with `@EDIABAS OBJECT\0` (16 bytes):
- `0x10`: Version (uint32 LE) — 0=GRP, 1=PRG
- `0xA0+`: XOR-encoded data (key: **0xF7**)
- Decoded content is text with JOBNAME:, RESULT:, ARG: metadata

**Critical**: XOR key is `0xF7`, not `0xD7`!

## Commands

```bash
pnpm install          # Install deps
pnpm test             # Run all tests
pnpm lint             # Lint all packages
pnpm build            # Build all packages
pnpm typecheck        # Type check
```

## Workflow

1. Create feature branch: `feature/issue-XXX-description`
2. Make changes, run `pnpm test && pnpm lint`
3. Commit with conventional commits: `feat(package): description`
4. Push and create PR with `--body-file` (not inline `--body`)
5. Wait for CI, address review comments
6. Merge when approved

## Test Data

Test PRG/GRP files are in the maintainer's local workspace:
`~/.openclaw/workspace/projects/ediabas/test-data/`

**DO NOT commit test files** — they contain BMW intellectual property.

## Code Style

- All code, comments, and commits in **English**
- Use TypeScript strict mode
- Prefer `Uint8Array` for binary data
- Use `iconv-lite` for CP1252 encoding (not custom tables)

## Reference

- Original: [EdiabasLib](https://github.com/uholeschak/ediabaslib) (C#)
- Issues: https://github.com/emdzej/ediabas/issues
