# AGENTS.md - EdiabasX TypeScript

Guidelines for AI agents working on this codebase.

## Project Overview

TypeScript implementation of BMW EDIABAS (Electronic Diagnostic Basic System).
Migrating from C# EdiabasLib to a modern TypeScript monorepo.

---

## Repository Orientation

Read this first when resuming a session. The sections below cover the
workspace map, the cross-repo dependency, the release / deploy story,
and the limitations / gotchas accumulated in real use — so a new agent
doesn't have to derive them from git history + reading 14 package.jsons.

### Workspace layout

12 library packages under `packages/` + 2 end-user apps under `apps/`.
What each does:

| Path | Role |
|---|---|
| `packages/core` | CP1252 encoding, XOR (key `0xF7`) decryption, error codes, shared types |
| `packages/best-parser` | PRG / GRP byte-level parser; disassembles the BEST2 bytecode |
| `packages/interpreter` | BEST2 VM — registers, flags, call/value stacks, ~184 opcodes. The TS port of EdiabasLib's interpreter core |
| `packages/interface-base` | Abstract `EdiabasInterface` + in-memory `SimulationInterface` |
| `packages/interface-serial` | K-line / K+DCAN / serial transport, DS2 / KWP / ISO-TP / TP2.0 sessions. Browser-safe core; Node-only `/node` subpath ships the `serialport`-backed transport |
| `packages/interface-enet` | DoIP / HSFZ over Ethernet |
| `packages/interfaces` | Factory (`createInterface(name, opts)`), interface registry, JSON-RPC gateway server + client. Browser-safe `/client` subpath exports `GatewayClient` only |
| `packages/protocol-uds` | UDS (ISO 14229) service IDs, NRCs, ISO-TP framing |
| `packages/protocol-kwp` | KWP2000 / KWP1281 service IDs, NRCs |
| `packages/protocol-doip` | DoIP / HSFZ (ISO 13400) primitives — WIP |
| `packages/ediabas` | Main `Ediabas` class — loads PRG/GRP, drives the VM, returns grouped result sets |
| `packages/logger` | pino-backed structured logger, honours `EDIABASX_LOG_LEVEL` |
| `apps/cli` | `ediabasx` terminal binary — `info` / `jobs` / `tables` / `parse` / `disasm` / `run` / `explore` / `gateway` / `simulator` / `configure` / `docs` subcommands. Has a TUI for interactive job runs |
| `apps/web` | Browser SPA at `ediabasx.bimmerz.app` — pick a PRG/GRP file, configure an interface, browse jobs. PWA-installable |

### Sibling repo: inpax (consumer)

`@emdzej/ediabasx-*` packages are consumed by the **inpax** monorepo at
`~/Projects/my/inpax` (single maintainer, same npm scope). Bumps here
ripple through inpax's `apps/cli`, `apps/inpax-web`, and
`packages/ediabasx-provider` via *npm pins* (not workspace links). When
changing a public API surface, ping inpax to update its pins; when
shipping a fix that affects browser bundling, the inpax-web app picks
it up automatically through the `^x.y` semver range on next install.

### Gateway architecture

`packages/interfaces` ships a JSON-RPC gateway in two pieces:

- **Server** (`GatewayServer`, default `.` export) — runs anywhere the
  cable is (Node, typically `ediabasx gateway --transport <tcp|websocket>
  -i kdcan --serial-port /dev/...`). Owns the hardware link, hands JSON-RPC
  frames over the wire. Statically imports `node:net`, `node:http`, and
  the `ws` package — **not browser-safe**.
- **Client** (`GatewayClient`, exposed via the `./client` subpath) —
  imports `node:net` *lazily inside `connectTcp()`* so the WebSocket
  path is browser-safe. Uses `globalThis.WebSocket` (Node 22+ /
  every browser).

**Rule:** browser bundles must import from `@emdzej/ediabasx-interfaces/client`,
not the default entry. ediabasx-web and inpax-web both do this. Vite's
`optimizeDeps.include` should list the subpath explicitly.

### Build / test / lint

```bash
pnpm install                            # workspace bootstrap
pnpm -r build                           # all packages
pnpm -r test                            # all packages
pnpm --filter @emdzej/ediabasx-web dev  # vite, port 5173
                                        # (inpax-web is 5174)
pnpm --filter @emdzej/ediabasx-cli build && \
  node apps/cli/dist/index.js <command>
```

Individual filters use the package name (`@emdzej/ediabasx-interpreter`,
etc.), not the directory path.

### Versioning & release

- **Uniform versioning.** All 14 `package.json` files move in lockstep.
  Canonical commit shape: `chore: bump packages to X.Y.Z`.
- **Tags use plain `0.2.1` form** — no `v` prefix.
- **CHANGELOG.md** at the repo root, Keep-a-Changelog format with
  `## [X.Y.Z] — YYYY-MM-DD` headings. Each entry groups by
  Added / Changed / Fixed / Removed / Documentation as appropriate.
- **Publish:** `pnpm -r publish --otp=<code>` pushes the public packages
  to npm. `apps/web` is `private: true` and deploys to GitHub Pages
  instead.

### Deploy: `ediabasx.bimmerz.app`

`.github/workflows/deploy-web.yml` builds `apps/web` and publishes via
`actions/deploy-pages` with a `CNAME` for the custom domain. **Manual
trigger** (`workflow_dispatch`) — click "Run workflow" in Actions.
Concurrency-gated on the `pages` group.

### Known limitations

- **`xbatt` / `xignit` return constants, not measured values.**
  `SerialInterface.batteryVoltage` / `.ignitionVoltage` return `12000`
  mV when DSR is high, `0` otherwise — matches EdiabasLib's
  `EdInterfaceObd.BatteryVoltage` (which returns `BatteryVoltageValue`,
  default 12000 mV). The K+DCAN adapter probe's `adapterVoltage` byte
  is *not* what the BEST2 bytecode reads; that's a separate
  `AdapterVoltage` property the opcodes don't consult. A real
  state-of-ignition query would need an active runtime 0xFA-0xFA probe.
- **`xsendf-1..4` interpretation:** the legacy reverse-engineering note
  that "handler returns 0xffff means EOJ" was retracted — `0xffff`
  means `yield/continue` (DAT_100878c6 == -1); only an explicit
  `eoj` opcode (DAT_100878c6 == 0) ends the job. See
  `docs/vm-ebas32-audit.md`.
- **Auto-IDENT chain skipped on explicit `IDENTIFIKATION` over `.grp`.**
  Previously the bootstrap `runIdentAfterInit` would swap to the
  resolved `.prg` *before* the user's own `IDENTIFIKATION` call ran,
  which then hit the new `.prg`'s bytecode (different operand layout
  → `Unknown register opcode 0x44`). Fixed in 0.2.0; user's explicit
  call IS the IDENT, a post-job hook captures VARIANTE for subsequent
  jobs.
- **Web app needs Web Serial AND File System Access** — Chromium-only.
  Firefox / Safari users see an "Unsupported browser" message at the
  picker.
- **Gateway server's signal handler force-exits.** SIGINT / SIGTERM now
  disconnects the backend interface AND calls `process.exit(0)` — open
  serial port handles were keeping the event loop alive forever in
  0.2.0. Second signal during shutdown hard-exits immediately so a
  hung cable disconnect can't get the user stuck.

### Gotchas

- **No `v` prefix on git tags** — `0.2.1`, not `v0.2.1`.
- **Browser bundles must use `/client` subpath** of
  `@emdzej/ediabasx-interfaces`, never the default entry. The factory +
  server + Node-only transports live behind the default entry.
- **`xbatt` / `xignit` returning 12000 mV / 0 is *correct* per
  EdiabasLib** — don't "fix" it by sampling the cable probe byte. The
  scripts expect the constant; the cable-probe byte is a separate
  diagnostic surface (`AdapterVoltage`).
- **CP1252 — not UTF-8.** All PRG/GRP text content is CP1252; the
  `core` package's encoding helpers do the conversion. New string
  handling must round-trip through them.
- **XOR key is `0xF7`, not `0xD7`** (see PRG/GRP File Format below).
  Documenting this twice because the wrong constant has been
  copy-pasted before.
- **Port 5173 is ediabasx-web's dev server**; inpax-web is on 5174. If
  both are running locally for cross-repo work, they coexist.
- **Service worker autoUpdate** — `vite-plugin-pwa` configured with
  `registerType: "autoUpdate"`, new builds activate silently after the
  next reload. No user-facing refresh prompt.
- **Conventional commit prefixes per scope:**
  `feat(interfaces): …`, `fix(interface-serial): …`,
  `chore: bump packages to X.Y.Z`, `docs(cli): …`.

---

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

### Code Organization

- **Keep files small** — aim for ~300 lines per file; not a hard limit, but a signal to consider splitting
- **One responsibility per file** — commands, utilities, types in separate files
- **Group by feature** — use subdirectories (`commands/`, `utils/`, `types/`) to organize related code
- **Barrel exports** — use `index.ts` for re-exports, not for logic

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
`~/.openclaw/workspace/projects/ediabasx/test-data/`

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
- Issues: https://github.com/emdzej/ediabasx/issues
