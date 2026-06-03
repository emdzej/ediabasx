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
doesn't have to derive them from git history + reading 20 package.jsons.

### Workspace layout

18 library packages under `packages/` + 2 end-user apps under `apps/`.
What each does:

| Path | Role |
|---|---|
| `packages/core` | CP1252 encoding, XOR (key `0xF7`) decryption, error codes, shared types, `IEdiabas` interface |
| `packages/best-parser` | PRG / GRP byte-level parser; disassembles the BEST2 bytecode |
| `packages/best-decompiler` | BEST/2 near-source decompiler — lifts bytecode to `.b2v` pseudo-source |
| `packages/interpreter` | BEST2 VM — registers, flags, call/value stacks, ~184 opcodes. The TS port of EdiabasLib's interpreter core |
| `packages/interface-base` | Abstract `EdiabasInterface` + in-memory `SimulationInterface` |
| `packages/interface-serial` | K-line / K+DCAN / serial transport, DS2 / KWP / ISO-TP / TP2.0 sessions. Browser-safe core; Node-only `/node` subpath ships the `serialport`-backed transport |
| `packages/interface-j2534` | SAE J2534 PassThru transport via Tactrix OpenPort 2.0. Frame-level integrity that K+DCAN UART bridges can't provide |
| `packages/interface-enet` | DoIP / HSFZ over Ethernet |
| `packages/interfaces` | Factory (`createInterface(name, opts)`), interface registry, JSON-RPC gateway server + client. Browser-safe `/client` subpath exports `GatewayClient` only |
| `packages/protocol-uds` | UDS (ISO 14229) service IDs, NRCs, ISO-TP framing |
| `packages/protocol-kwp` | KWP2000 / KWP1281 service IDs, NRCs |
| `packages/protocol-doip` | DoIP / HSFZ (ISO 13400) primitives — WIP |
| `packages/ediabas` | Main `Ediabas` class — loads PRG/GRP, drives the VM, returns grouped result sets. Exports `LOG_CATEGORIES` for UI/config surfaces |
| `packages/ediabasx-server` | JSON-RPC server — exposes `init`, `end`, `job`, `listSgbd`, `listJobs`, `getJobMetadata`, `disassembleJob`, `log.subscribe`/`log.unsubscribe` over TCP or WebSocket. Accepts external standard WebSockets via `attachStandardWebSocket()` (relay / Bimmerz Connect). Node-only |
| `packages/ediabasx-client` | JSON-RPC client (`EdiabasClient`) + embedded in-process wrapper (`EmbeddedEdiabas`), both implementing `IEdiabas`. Accepts pre-connected WebSockets via `socket` option (relay / Bimmerz Connect). Browser-safe `./client` subpath exports `EdiabasClient` only |
| `packages/host-config` | Shared loader for `~/.config/ediabasx/config.json` + interface-selection resolver + SGBD path resolution. Node-only (CJS) |
| `packages/mac-ftdi-latency` | macOS-only native addon: sets the FTDI USB-side latency timer via IOSSDATALAT ioctl |
| `packages/web-ui` | Shared Svelte 5 source-only components (`ConnectButton`, `ConnectConfigPanel`, `InterfaceConfigPanel`, `ModeConfigPanel`, `ServerConfigPanel`) + config types. Consumed by ediabasx-web, inpax-web, ncsx-web. Requires `@emdzej/bimmerz-theme` Tailwind preset |
| `apps/cli` | `ediabasx` terminal binary — `info` / `jobs` / `job` / `tables` / `table` / `decompile` / `run` / `explore` / `gateway` / `serve` (with `--connect` for Bimmerz Connect relay) / `simulator` / `configure` / `interfaces` / `docs` subcommands. Has a TUI for interactive job runs |
| `apps/web` | Browser SPA at `ediabasx.bimmerz.app` — two modes: **embedded** (local Web Serial / J2534 / gateway + File System Access, Chromium-only) and **client** (connects to a remote `ediabasx serve` instance over WebSocket, any browser). PWA-installable |

### Sibling repos (consumers)

`@emdzej/ediabasx-*` packages are consumed by three sibling monorepos
(single maintainer, same npm scope). Bumps here ripple through each
via npm pins (not workspace links):

| Repo | Location | What consumes ediabasx |
|---|---|---|
| **inpax** | `~/Projects/my/inpax` | `apps/cli`, `apps/inpax-web`, `packages/ediabasx-provider` |
| **ncsx** | `~/Projects/my/ncsx` | `apps/cli`, `apps/ncsx-web`, coding/NCS runtime |
| **nfsx** | `~/Projects/my/nfsx` | `apps/cli`, `nfsx-runtime`, flash/FSC orchestration |

When changing a public API surface, ping all consumers to update their
pins. Browser-bundling fixes propagate automatically via `^x.y` semver
ranges on next install.

### Server / client architecture

`packages/ediabasx-server` + `packages/ediabasx-client` form the
remote-diagnostics layer:

- **`EdiabasServer`** — JSON-RPC 2.0 server over TCP or WebSocket.
  Owns the cable, SGBD directory, and an `Ediabas` instance. Methods:
  `init`, `end`, `job`, `listSgbd`, `listJobs`, `getJobMetadata`,
  `disassembleJob`, `log.subscribe`, `log.unsubscribe`. Sends log
  entries as JSON-RPC notifications (`method: "log"`, no `id`).
  CLI: `ediabasx serve --sgbd-path <dir> --interface <name>`.
  `attachStandardWebSocket(ws)` accepts a pre-connected standard
  `WebSocket` (e.g. from Bimmerz Connect relay); `ensureBroadcastSink()`
  and `bindSignalHandlers()` are public for relay-only mode (no local
  TCP/WS listener).
- **`EdiabasClient`** — JSON-RPC client implementing `IEdiabas`.
  Uses `globalThis.WebSocket` — browser-ready. Has convenience
  methods beyond `IEdiabas`: `listSgbd()`, `listJobs()`,
  `getJobMetadata()`, `disassembleJob()`, `subscribeLogs()`.
  Constructor accepts `onNotification` callback for server-pushed
  log entries. Accepts `socket` option to use a pre-connected
  `WebSocket` (e.g. from `@emdzej/swsrs-client`'s `dial()`).
- **`EmbeddedEdiabas`** — in-process `IEdiabas` wrapper around the
  real `Ediabas` class. Lives in the same package (`ediabasx-client`).

**Browser-safe subpath:** `@emdzej/ediabasx-client/client` exports only
`EdiabasClient` (no Node deps). Browser bundles (ediabasx-web) must use
this subpath, not the default entry which also exports `EmbeddedEdiabas`
(pulls in Node-only `@emdzej/ediabasx-ediabas`).

**`IEdiabas` interface** (`packages/core/src/ediabas-api.ts`): shared
contract that both `EdiabasClient` and `EmbeddedEdiabas` implement.
Defines `init()`, `end()`, `job()`, `state`.

### Gateway architecture

`packages/interfaces` ships a lower-level JSON-RPC gateway (predates
the server/client packages above — the gateway proxies raw interface
commands, while the server proxies ediabas-level jobs):

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

- **Uniform versioning.** All 20 `package.json` files move in lockstep.
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

### Web app modes

The web app (`apps/web`) supports two runtime modes, selectable in Settings:

- **Embedded** — local hardware via Web Serial (K+DCAN), J2534 (Tactrix
  OpenPort 2.0), or gateway (remote cable via `ediabasx gateway`). SGBD
  files loaded from disk via File System Access API. Chromium-only.
- **Client** — connects to a remote `ediabasx serve` instance over
  WebSocket. The server owns the cable + SGBD files. Works in any
  browser (Firefox, Safari, mobile). SGBD list, job metadata, and
  disassembly are fetched from the server. Log entries stream as
  JSON-RPC notifications. Two connection methods:
  - **Direct** — enter a `ws://host:port` server URL (LAN / VPN).
  - **Bimmerz Connect** — relay-mediated via `connect.bimmerz.app`.
    The server operator runs `ediabasx serve --connect` and shares a
    session token (or a deep link). No port forwarding needed.
    Deep link format: `https://ediabasx.bimmerz.app?connect=<sessionId.token>`.

Config types (`AppMode`, `ModeConfig`, `InterfaceConfig`,
`ClientConnectionMethod`) and shared components (`ModeConfigPanel`,
`ConnectConfigPanel`, `ServerConfigPanel`, `InterfaceConfigPanel`,
`ConnectButton`) live in `@emdzej/ediabasx-web-ui`.

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
- **Embedded mode needs Web Serial AND File System Access** — Chromium-only.
  Non-Chromium users see a banner suggesting they switch to **client mode**
  (connects to a remote `ediabasx serve` instance — no browser APIs needed).
- **Gateway server's signal handler force-exits.** SIGINT / SIGTERM now
  disconnects the backend interface AND calls `process.exit(0)` — open
  serial port handles were keeping the event loop alive forever in
  0.2.0. Second signal during shutdown hard-exits immediately so a
  hung cable disconnect can't get the user stuck.

### Gotchas

- **No `v` prefix on git tags** — `0.2.1`, not `v0.2.1`.
- **Browser bundles must use `/client` subpath** of
  `@emdzej/ediabasx-interfaces` and `@emdzej/ediabasx-client`, never
  the default entry. The factory + server + Node-only transports live
  behind the default entry. Never use deep `dist/` imports — always
  use proper `exports` subpaths defined in `package.json`.
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
- **Web**: Svelte 5 (runes: `$state`, `$derived`, `$effect`) + Vite + Tailwind CSS
- **Logging**: `@emdzej/bimmerz-logger` (external, not in-repo) — structured, hierarchical category system, configurable sinks. Replaces the old `packages/logger` (pino-based, removed)
- **Theming**: `@emdzej/bimmerz-theme` (external) — Tailwind preset with semantic tokens (`bg-surface`, `text-muted`, `border-divider`, etc.)

### External `bimmerz-*` packages

These are published npm packages outside this monorepo, consumed as
regular dependencies (not `workspace:*`):

| Package | Purpose |
|---|---|
| `@emdzej/bimmerz-logger` | Structured logger with hierarchical categories, configurable sinks (`consoleSink`, `multiSink`), `configureLogger()`, `levelPasses()` |
| `@emdzej/bimmerz-theme` | Tailwind CSS preset — semantic color tokens, shared across all bimmerz-family web apps |
| `@emdzej/swsrs-client` | Client SDK for the Simple WebSocket Relay Service (swsrs). `dial()` / `accept()` → `PeerConnection { socket: WebSocket }`, `AdminClient`, `discoverConfig()`, `deviceLogin()`. Browser-safe default entry; Node-only `./node` subpath exports `FileTokenStore`. Used by Bimmerz Connect |

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
