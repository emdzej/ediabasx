# Prompt: Generate/Update Ediabas User Documentation

You are updating the **ediabas** user documentation. Follow these steps exactly and keep output in Markdown. Use current CLI help and repo docs as the source of truth.

## Checklist
1. Read `AGENTS.md` in the repo root.
2. Pull latest `main`.
3. Inspect existing docs (`README.md`, `docs/`, `packages/cli/src/index.ts`) and run CLI help:
   - `node packages/cli/dist/index.js --help`
   - `node packages/cli/dist/index.js run --help`
   - `node packages/cli/dist/index.js simulator --help`
   - `node packages/cli/dist/index.js interfaces --help`
   - `node packages/cli/dist/index.js gateway --help`
4. Create/refresh the user docs in `docs/user/`:
   - `GETTING-STARTED.md`
   - `INTERFACES.md`
   - `RUNNING-JOBS.md`
   - `SIMULATOR.md`
   - `TROUBLESHOOTING.md`

## Style
- Concise, practical, and user-facing.
- Use code blocks for commands.
- Prefer explicit CLI flags from help output.
- Avoid speculative claims; align with repo capabilities.

## Required Content
### `docs/user/GETTING-STARTED.md`
- What is ediabas (TypeScript BMW diagnostics)
- Installation (npm/pnpm)
- Quick start example
- Requirements (Node.js, hardware interfaces)

### `docs/user/INTERFACES.md`
- Available interfaces and when to use each:
  - Simulation — testing without hardware
  - Serial (K-Line) — older BMWs via OBD-II
  - K+DCAN — K+DCAN adapter for K-Line and D-CAN
  - ENET — newer BMWs via Ethernet (F/G series)
  - Gateway — remote interface via TCP
- Hardware requirements for each
- Connection examples

### `docs/user/RUNNING-JOBS.md`
- What are jobs (PRG files, ECU definitions)
- Running a job from CLI: `ediabas run <file> <job> [args]`
- Using the TUI runner: `ediabas run <file>`
- Understanding results
- Common jobs (IDENT, STATUS_LESEN, etc.)

### `docs/user/SIMULATOR.md`
- What is the simulator
- Starting: `ediabas simulator`
- Human-in-the-loop testing
- RAW/HEX panels
- Responding to JSON-RPC requests

### `docs/user/TROUBLESHOOTING.md`
- Common errors and solutions
- Connection issues
- Timeout problems
- "Not supported" errors

## After Writing
- Ensure `docs/user/` exists and files are created.
- Run a quick skim for accuracy and consistency.
