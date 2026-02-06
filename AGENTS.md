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
- **CLI**: Commander + Ink

---

## Tech Guidelines

When working with specific technologies, load the relevant guide:

| Technology | Guide                                                            | When to load                     |
| ---------- | ---------------------------------------------------------------- | -------------------------------- |
| TypeScript | [`docs/guidelines/typescript.md`](docs/guidelines/typescript.md) | Types, const objects, binary ops |

**Rule:** Load the relevant guide(s) before starting work in that area.

---

## Package Structure

```
packages/
├── core/           # Types, encoding (CP1252), crypto (XOR), errors
├── best-parser/    # PRG/GRP file parser + disassembler
├── interpreter/    # BEST VM: registers, flags, callstack, ops
├── interface-*/    # Communication interfaces (serial, ENET)
├── protocol-*/     # Protocols (UDS, KWP, DoIP)
├── ediabas/        # Main library integration
└── cli/            # CLI tool with TUI
```

---

## PRG/GRP File Format

Files start with `@EDIABAS OBJECT\0` (16 bytes):
- `0x10`: Version (uint32 LE) — 0=GRP, 1=PRG
- `0xA0+`: XOR-encoded data (key: **0xF7**)
- Decoded content is text with JOBNAME:, RESULT:, ARG: metadata

**Critical**: XOR key is `0xF7`, not `0xD7`!

---

## Commands

```bash
pnpm install          # Install deps
pnpm test             # Run all tests
pnpm lint             # Lint all packages
pnpm build            # Build all packages
pnpm typecheck        # Type check
```

---

## Core Rules

### Language

- **All code, comments, and commit messages in English**
- Documentation can be bilingual

### Git Workflow

**Branches:**
| Prefix | Usage | Example |
|--------|-------|---------|
| `feature/` | New features | `feature/interpreter-registers` |
| `bugfix/` | Bug fixes | `bugfix/fix-xor-decoding` |
| `chore/` | Maintenance | `chore/update-dependencies` |

**Commits (Conventional):**

```
<type>(<scope>): <description>

Types: feat, fix, docs, style, refactor, test, chore
Scopes: core, best-parser, interpreter, cli, etc.
```

**Before every PR:**

```bash
pnpm lint && pnpm typecheck && pnpm test
```

**PR Body:** Use `--body-file /tmp/pr.md` (not inline `--body`) for proper formatting.

---

## Test Data

Test PRG/GRP files are in the maintainer's local workspace:
`~/.openclaw/workspace/projects/ediabas/test-data/`

**DO NOT commit test files** — they contain BMW intellectual property.

---

## Opcode Implementation Rules

**Golden rule:** If EdiabasLib has an implementation, we implement it too.

- **Never leave opcodes as no-op** if EdiabasLib has actual logic
- If something is missing, implement it — don't skip
- Reference: `EdiabasNet.cs` → `ExecuteJobPrivate()` + `OcList[]`
- Reference: `EdOperations.cs` → individual `Op*` methods

When auditing opcodes:
1. Find the EdiabasLib implementation
2. Match our behavior exactly
3. If we can't implement (missing infrastructure), create an issue — don't silently no-op

---

## Reference

- Original: [EdiabasLib](https://github.com/uholeschak/ediabaslib) (C#)
- Issues: https://github.com/emdzej/ediabas/issues
