# Prompt: Generate/Update EDIABAS Technical Documentation

## Goal
Create or update the technical documentation for the EDIABAS TypeScript monorepo. Produce four documents in `docs/`:

- `docs/ARCHITECTURE.md`
- `docs/PACKAGES.md`
- `docs/CLI.md`
- `docs/DEVELOPMENT.md`

The documentation must reflect the current codebase. Use concrete names and options from the source.

## Inputs (read these before writing)
1. `README.md` and `CONCEPT.md` (project overview & feature set)
2. `packages/` directory structure
3. CLI entrypoint: `packages/cli/src/index.ts`
4. Interface metadata: `packages/interfaces/src/registry.ts`
5. Core abstractions:
   - `packages/ediabas/src/ediabas.ts`
   - `packages/interface-base/src/EdiabasInterface.ts`
   - `packages/interpreter/src/interpreter.ts`

## Output Requirements
### `docs/ARCHITECTURE.md`
- High-level overview of the project purpose
- Monorepo structure and package roles (brief)
- Data flow diagram: **PRG/GRP → Parser → Interpreter → Interface → ECU**
- Key abstractions: `Ediabas`, `EdiabasInterface`, `CommunicationInterface`, parser, interpreter, gateway

### `docs/PACKAGES.md`
- Short description of each package in `packages/`:
  - `@ediabas/core`
  - `@ediabas/best-parser`
  - `@ediabas/interpreter`
  - `@ediabas/interface-base`
  - `@ediabas/interface-serial`
  - `@ediabas/interface-enet`
  - `@ediabas/interfaces`
  - `@ediabas/protocol-uds`
  - `@ediabas/protocol-kwp`
  - `@ediabas/protocol-doip`
  - `@ediabas/ediabas`
  - `@ediabas/cli`

### `docs/CLI.md`
- List all CLI commands with examples:
  - `run`, `explore`, `simulator`, `gateway`
  - also include `interfaces`, `parse`, `info`, `jobs`, `tables`, `table`, `disasm`
- Document interface options (`--interface`, `--serial-*`, `--enet-*`, `--gateway-*`, `--timeout`, `--simulation`, `--results`, etc.)
- Use values and defaults from the CLI source and interface registry

### `docs/DEVELOPMENT.md`
- Build, test, lint, typecheck commands (from root `package.json`)
- How to add new opcodes (where to implement + where to register in interpreter)
- How to add new interfaces (extend `EdiabasInterface`, register in `@ediabas/interfaces`, update CLI)
- Contributing guidelines (branch naming, conventional commits, tests, docs updates)

## Style & Formatting
- Write in clear English, concise, technical tone
- Use Markdown headings and code blocks
- Include a Mermaid diagram for data flow (if supported)

## Delivery Checklist
- Files created/updated: `ARCHITECTURE.md`, `PACKAGES.md`, `CLI.md`, `DEVELOPMENT.md`
- Content matches current source code
- Examples are runnable and use real options
