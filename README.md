# EdiabasX

A TypeScript port of BMW's EDIABAS (Electronic Diagnostic Basic System) — a modern, cross-platform implementation of the [EdiabasLib](https://github.com/uholeschak/ediabaslib) C# library for parsing BMW diagnostic description files (PRG/GRP) and running the BEST2 bytecode they contain against real ECUs.

## Features

- **PRG/GRP parsing** — full BMW diagnostic file format support (CP1252 encoding, XOR-decoded payload, job/result/argument metadata, lookup tables)
- **BEST/2 decompiler** — readable assembly output bounded by next-job offsets so multi-`eoj` jobs (e.g. `FS_LESEN` fault iteration) decode in full
- **BEST/2 interpreter** — register file (B/A/I/L/S/F), flags (Z/C/V/S), call & data stacks, 184 opcodes, table/file/timer/shared-memory state, `enewset`-aware result sets matching C# `_resultSetsTemp`
- **Hardware interfaces** — Serial K-Line / K+DCAN (DS2 + ISO-TP), SAE J2534 PassThru (Tactrix OpenPort 2.0), Ethernet/ENET (DoIP), JSON-RPC gateway client/server
- **Remote diagnostics** — `ediabasx serve` JSON-RPC server + `EdiabasClient` for remote job execution. **Bimmerz Connect** tunnels traffic through `connect.bimmerz.app` for NAT traversal — no port forwarding or VPN needed
- **Protocols** — KWP2000 (ISO 14230), UDS (ISO 14229), DoIP/HSFZ (ISO 13400)
- **CLI + TUI** — `ediabasx` command with interactive job browser, batch run, decompile, info, job/table inspection
- **Logging** — structured logs via `@emdzej/bimmerz-logger` (hierarchical categories, configurable sinks)
- **C11 native port** — companion implementation in [`native/`](native/) targeting embedded hosts (POSIX serial today, ESP32 dongle next). Feature-parity with the TS interpreter for opcode dispatch + GRP→PRG variant switching; ~50 KB VM struct, no malloc in hot paths. See [`native/README.md`](native/README.md).

## Installation

Packages are published to **npmjs.org** under the `@emdzej` scope.

```bash
# Most users want the main library + a CLI
pnpm add @emdzej/ediabasx-ediabas
pnpm add -D @emdzej/ediabasx-cli
```

Or install the CLI globally:

```bash
npm install -g @emdzej/ediabasx-cli
ediabasx --help
```

### From source

```bash
git clone https://github.com/emdzej/ediabasx.git
cd ediabasx
pnpm install
pnpm build
```

## CLI usage

The `ediabasx` command bundles parsing, decompilation, and live-ECU execution.

### `info` — quick file summary

```bash
ediabasx info file.prg
```

```
File summary
File: d_motor.prg
Jobs: 10
Tables: 0
ECU info
ECU: n/a
Origin: BMW TI-430 Drexel
Revision: 1.14
Author: Softing Taubert, BMW TI-430 Drexel, BMW TP-421 Teepe, BMW TI-430 Haase
```

### `jobs` / `job` — list or inspect jobs

```bash
ediabasx jobs file.prg                  # every job with args + results
ediabasx job file.prg IDENT             # one job: args, results, comments
ediabasx job file.prg IDENT --json      # JSON for piping
ediabasx job file.prg IDENT --csv       # args+results as CSV
```

### `tables` / `table` — inspect lookup tables

```bash
ediabasx tables file.prg
ediabasx table file.prg JobResult
```

### `decompile` — render BEST/2 bytecode as assembly

The decompiler bounds each job by the next job's file offset, so jobs with multiple `eoj` instructions (early returns reached via backward jumps from later code) decode completely instead of stopping at the first `eoj`.

```bash
ediabasx decompile file.prg             # all jobs
ediabasx decompile file.prg FS_LESEN    # one job
```

### `run` — execute a job against an ECU

```bash
# Serial K-Line (KWP2000)
ediabasx run file.prg IDENT \
  --interface serial \
  --serial-port /dev/ttyUSB0 \
  --serial-baud 9600 \
  --serial-protocol kwp

# K+DCAN cable (DS2 or ISO-TP)
ediabasx run file.prg FS_LESEN \
  --interface kdcan \
  --serial-port /dev/cu.usbserial-A50285BI \
  --serial-protocol isotp \
  --serial-tester-can-id 0x7e0 \
  --serial-ecu-can-id 0x7e8

# SAE J2534 (Tactrix OpenPort 2.0)
ediabasx run file.prg IDENT \
  --interface j2534

# ENET (DoIP)
ediabasx run file.prg IDENT \
  --interface enet \
  --enet-host 192.168.0.1

# Via a remote gateway (TCP — default)
ediabasx run file.prg IDENT \
  --interface gateway \
  --gateway 192.168.1.50:6801

# Same, but over WebSocket (browser-friendly framing)
ediabasx run file.prg IDENT \
  --interface gateway \
  --gateway 192.168.1.50:6801 \
  --gateway-transport websocket

# Simulation (no hardware; canned responses)
ediabasx run file.prg IDENT --simulation
```

If you omit `--interface`, the CLI reads `~/.config/ediabasx/config.json`. Run `ediabasx configure` for an interactive wizard.

Output shows one labelled section per emitted result set — multi-record jobs like `FS_LESEN` emit one set per fault entry (matching BMW INPA / Tool32). Pass `--json` for machine-readable output.

### `gateway` — share a local interface over JSON-RPC

Run the gateway on the host that owns the cable, then drive it from any process or machine. Two transports are supported on the same JSON-RPC vocabulary:

- **`tcp`** (default) — line-delimited JSON-RPC; lowest overhead.
- **`websocket`** — one JSON-RPC message per WebSocket frame, served via `http.Server` + `ws`. Browser pages can `new WebSocket(...)` directly.

```bash
# TCP gateway
ediabasx gateway --interface serial --serial-port /dev/ttyUSB0 --serial-baud 9600

# WebSocket gateway (browser-friendly)
ediabasx gateway --transport websocket --interface kdcan --serial-port /dev/cu.usbserial-A50285BI
```

The server prints its backend interface + transport on startup, and forwards the full BEST2 communication surface (`setCommParameter`, `setAnswerLength`, `setRepeatCounter`, `transmitData`, …) so `INITIALISIERUNG` and downstream jobs run unmodified through the gateway.

### Remote diagnostics — `serve` + Bimmerz Connect

The EdiabasX server wraps the full runtime (SGBD loading, job execution, result caching) behind a JSON-RPC API. Clients send `job("IKE", "IDENT")` — no local SGBD files or hardware needed.

Two ways to connect:

- **Direct** — `ws://host:port` on the same LAN or VPN.
- **Bimmerz Connect** — relay-mediated NAT traversal via `connect.bimmerz.app`. No port forwarding, no VPN.

#### End-to-end walkthrough (Bimmerz Connect)

**1. Server side** — the machine with the cable and SGBD files:

```bash
ediabasx serve --connect \
  --sgbd-path ~/ECU --interface kdcan --serial-port /dev/cu.usbserial-A50285BI
```

First run opens a device-flow login: the CLI prints a short code and a URL. Open the URL in any browser, enter the code, and authorize. Credentials are cached for subsequent runs.

Once authenticated, the server prints:

```
Bimmerz Connect session active

  Session token: Zmh1wHft.rycSNAOMhAd
  Link:          https://ediabasx.bimmerz.app?connect=Zmh1wHft.rycSNAOMhAd
```

**2. Browser side** — any machine, any network:

- **Deep link** — click (or share) the link. The web app opens, auto-connects through the relay, and shows the SGBD sidebar.
- **Manual** — open [ediabasx.bimmerz.app](https://ediabasx.bimmerz.app), go to Settings → Client mode → Bimmerz Connect, then click **Connect** and paste the session token.

**3. Run jobs** — pick an ECU from the sidebar, select a job, click Run. Results, metadata, disassembly, and server logs all stream through the relay in real time.

#### Direct server (LAN)

```bash
# Start the server
ediabasx serve --sgbd-path ~/ECU \
  --interface kdcan --serial-port /dev/cu.usbserial-A50285BI

# Run a job from another terminal or machine
ediabasx run IKE IDENT --server 192.168.1.50:6802

# Or open the web app → Settings → Client → Direct → ws://192.168.1.50:6802
```

Combine `--connect` with `--host`/`--port` to serve both locally and via the relay simultaneously.

See [`@emdzej/ediabasx-server`](packages/ediabasx-server) and [`@emdzej/ediabasx-client`](packages/ediabasx-client) for the library APIs.

### `simulator` — interactive ECU response simulator for development

```bash
ediabasx simulator
```

### `explore` — TUI for browsing a PRG/GRP

```bash
ediabasx explore file.prg
```

## Library usage

```typescript
import { Ediabas } from "@emdzej/ediabasx-ediabas";

const ediabas = new Ediabas({
  ecuPath: "./ecu",
  interface: new SimulationInterface(),  // or any other EdiabasInterface for real hardware
});

await ediabas.loadSgbd("D_MOTOR.prg");

// `executeJob` returns EdiabasJobResult[][] in the **native EDIABAS
// C-API shape** — index 0 is the system set, indices 1..N are the
// data sets emitted by the bytecode:
//
//   sets[0]    — system set: VARIANTE, OBJECT, JOBNAME, SAETZE (= data-
//                set count) + persistent metadata (ECU, ORIGIN, REVISION,
//                AUTHOR, COMMENT, PACKAGE, SPRACHE, JOB_STATUS). Matches
//                C# `EdiabasNet._resultSets[0]`.
//   sets[1..N] — data sets. Single-record jobs have one; multi-record
//                jobs (e.g. FS_LESEN with N fault entries) have N.
const sets = await ediabas.executeJob("FS_LESEN");

// System set — read SGBD identity and metadata
const sysSet = sets[0];
console.log("VARIANTE:", sysSet.find(r => r.name === "VARIANTE")?.value);
console.log("SAETZE:",   sysSet.find(r => r.name === "SAETZE")?.value);

// Data sets — one section per fault record
for (let i = 1; i < sets.length; i++) {
  console.log(`Data set ${i}/${sets.length - 1}`);
  for (const result of sets[i]) {
    console.log(`  ${result.name} (${result.type}) = ${result.value}`);
  }
}
```

### Choosing a transport

```typescript
import { Ediabas } from "@emdzej/ediabasx-ediabas";
import { createInterface } from "@emdzej/ediabasx-interfaces";

const iface = createInterface("kdcan", {
  port: "/dev/cu.usbserial-A50285BI",
  baudRate: 9600,
  protocol: "isotp",
});

const ediabas = new Ediabas({ ecuPath: "./ecu", interface: iface });
await ediabas.connect();
const sets = await ediabas.executeJob("STATUS_LESEN");
await ediabas.disconnect();
```

Supported interfaces: `simulation`, `serial`, `kdcan`, `enet`, `gateway`.

## Repo layout

pnpm + Turborepo monorepo split into **libraries** (`packages/`) and **applications** (`apps/`) that consume them.

### Libraries — `packages/*`

All published to npmjs.org under the `@emdzej/ediabasx-*` namespace.

| Package | Purpose |
|---|---|
| `@emdzej/ediabasx-core` | Types, CP1252 encoding, XOR decryption, error codes |
| `@emdzej/ediabasx-best-parser` | PRG/GRP file parser + BEST2 disassembler |
| `@emdzej/ediabasx-interpreter` | BEST2 VM (registers, flags, stack, 184 opcodes, result sets) |
| `@emdzej/ediabasx-interface-base` | Abstract interface + simulation |
| `@emdzej/ediabasx-interface-serial` | Serial K-Line / K+DCAN cable driver (browser + Node) |
| `@emdzej/ediabasx-interface-enet` | Ethernet / ENET (DoIP) driver |
| `@emdzej/ediabasx-server` | JSON-RPC server — remote job execution over TCP/WebSocket + Bimmerz Connect relay |
| `@emdzej/ediabasx-client` | JSON-RPC client (`EdiabasClient`) + in-process wrapper (`EmbeddedEdiabas`) |
| `@emdzej/ediabasx-web-ui` | Shared Svelte 5 components (ConnectButton, ConnectConfigPanel, InterfaceConfigPanel, etc.) |
| `@emdzej/ediabasx-interfaces` | Factory: `createInterface(name, options)` |
| `@emdzej/ediabasx-protocol-kwp` | KWP2000 (ISO 14230) |
| `@emdzej/ediabasx-protocol-uds` | UDS (ISO 14229) |
| `@emdzej/ediabasx-protocol-doip` | DoIP + HSFZ (ISO 13400) |
| `@emdzej/ediabasx-ediabas` | Main entry — combines parser, interpreter, transports |

### Applications — `apps/*`

| App | Purpose |
|---|---|
| `apps/cli` — `@emdzej/ediabasx-cli` | `ediabasx` terminal command + Ink TUI |
| `apps/web` — `@emdzej/ediabasx-web` | Browser SPA (Svelte 5 + Vite + Tailwind) — pick a PRG/GRP, configure, browse jobs, run via Web Serial |

## Development

```bash
pnpm install
pnpm build         # turbo build, in dependency order
pnpm test          # vitest across all packages
pnpm lint          # eslint
pnpm typecheck     # tsc --noEmit
```

### Run an app from the repo root

```bash
pnpm cli <args>           # apps/cli — invokes dist/index.js
pnpm web                  # apps/web — vite dev server on :5173
pnpm web:build            # apps/web — production bundle to apps/web/dist
pnpm web:preview          # apps/web — preview the production bundle
```

Or run anything via the workspace filter directly:

```bash
pnpm --filter @emdzej/ediabasx-cli build
pnpm --filter @emdzej/ediabasx-web dev
```

### Logging

Powered by [`@emdzej/bimmerz-logger`](https://github.com/emdzej/bimmerz/tree/main/packages/logger).
The library never reads `process.env`; the CLI translates env vars and the
config file's `logging` section onto the central logger config before
each command runs.

Env namespace (CLI-only — the library is portable to the browser):

| Variable | Values | Purpose |
|---|---|---|
| `EDIABASX_LOG_LEVEL` | `trace\|debug\|info\|warn\|error\|fatal\|silent` | Default level when no category matches |
| `EDIABASX_LOG_CATEGORIES` | `cat=lvl,cat=lvl,…` | Per-category overrides (hierarchical) |
| `EDIABASX_LOG_DESTINATION` | path | Write to file instead of stdout |
| `EDIABASX_LOG_FORMAT` | `pretty\|json` | Output format |

Examples:

```bash
# Bump everything to debug
EDIABASX_LOG_LEVEL=debug ediabasx run file.prg FS_LESEN

# Just see raw send / recv bytes — no other noise
EDIABASX_LOG_CATEGORIES="EDIABASX.ediabas.wire=trace" ediabasx run file.prg FS_LESEN

# Mixed: debug for ediabas, trace for wire, info default
EDIABASX_LOG_CATEGORIES="EDIABASX.ediabas=debug,EDIABASX.ediabas.wire=trace" \
  ediabasx run file.prg FS_LESEN 2> trace.log
```

Or in the config file:

```jsonc
{
  "interface": "serial",
  "options": { /* … */ },
  "logging": {
    "level": "info",
    "categories": {
      "EDIABASX.ediabas.wire": "trace"
    },
    "destination": "/tmp/ediabasx.log",
    "pretty": false
  }
}
```

#### Categories

Hierarchical dot-paths — rules walk up the tree (a rule for
`EDIABASX` covers every subcategory unless something more specific
matches).

| Category | What it covers |
|---|---|
| `EDIABASX` | Catch-all for the ediabasx subsystem — overrides any unmatched subtree below. |
| `EDIABASX.ediabas` | SGBD load / variant resolve / job dispatch lifecycle. `debug` shows "Loaded SGBD: …", "Executing job: …", "Swapped to variant …". |
| `EDIABASX.ediabas.config-loader` | Per-config-file load events from `@emdzej/ediabasx-ediabas`'s `createFromConfigFile` / `loadConfig` helpers. |
| `EDIABASX.ediabas.wire` | Reserved — raw send / recv / xsend / xrecv bytes. Will populate once the interface implementations (`interface-serial`, `interface-enet`, …) route through bimmerz-logger. Set to `trace` today and you'll get nothing; it'll start emitting on the next interface-side migration. |
| `EDIABASX.best-parser.parse-real` | Standalone PRG/GRP parse script (`scripts/parse-real.ts`). |
| `EDIABASX.best-parser.tests` | best-parser test fixtures. |

To raise everything in one shot: `EDIABASX_LOG_CATEGORIES="EDIABASX=debug"`.

Env vars override file values entry-by-entry — `EDIABASX_LOG_CATEGORIES`
merges with the file's categories rather than replacing it wholesale.

> **0.3.0 breaking change:** `EDIABASX_VERBOSE=1` is gone. Use
> `EDIABASX_LOG_CATEGORIES="EDIABASX=debug"` for the same effect, or
> `EDIABASX_LOG_LEVEL=debug` for a global bump. The per-instance
> `Ediabas.config.logging` boolean is also removed — lifecycle messages
> are now at `debug`, wire-level traces at `trace` on
> `EDIABASX.ediabas.wire`.

### Workflow

1. Branch off `main` using `feature/`, `bugfix/`, or `chore/` prefix
2. Conventional commits: `feat(scope): summary` / `fix(scope): summary`
3. `pnpm lint && pnpm typecheck && pnpm test` before opening a PR
4. See [AGENTS.md](./AGENTS.md) for the full contributor guide

## Technical notes

### PRG/GRP file format

- Magic header `@EDIABAS OBJECT\0` (16 bytes)
- `0x10`: file type (uint32 LE) — `0` = GRP, `1` = PRG
- `0x18`: `SSIZE` (max string register size)
- `0x7C` / `0x80` / `0x84` / `0x88` / `0x90` / `0x94`: pointers into the uses-list / job code / table list / job list / description / version info sections
- Everything after `0xA0` is XOR-encoded with key **`0xF7`** (single-byte, stateless)

The parser handles decryption transparently.

### Result sets (`enewset`) and the system-set convention

BMW BEST2 jobs emit "result sets" via the `enewset` opcode — each call commits the current collector and starts a new one. The interpreter layer (`@emdzej/ediabasx-interpreter`) returns just those data sets.

The Ediabas layer above the interpreter (`@emdzej/ediabasx-ediabas`, plus the `IEdiabas` adapters in `@emdzej/ediabasx-client` / `@emdzej/ediabasx-server`) **prepends a system set at index 0** so the returned shape matches native EDIABAS / C# `EdiabasNet._resultSets`:

- `sets[0]` — system set, materialised fresh per job. Always contains `VARIANTE`, `OBJECT`, `JOBNAME`, `SAETZE` (= data-set count), plus a merge from the persistent `Ediabas.getSystemResults()` accumulator (ECU/ORIGIN/REVISION/AUTHOR/COMMENT/PACKAGE/SPRACHE/JOB_STATUS …). Mirrors C# `CreateSystemResultDict`.
- `sets[1..N]` — data sets emitted by the bytecode. Multi-record jobs (e.g. `FS_LESEN`) emit one set per record.

Granular accessors mirror the native EDIABAS C API:

- `resultSets()` returns the **data**-set count (i.e. `sets.length - 1`) — matches `apiResultSets`.
- `resultText(name, 0, …)` reads the system set; `resultText(name, 1..N, …)` reads data sets.

`EdiabasJobResult` carries `name`/`type`/`value`/`unit`/`comment` — all five fields propagate through the JSON-RPC wire to remote clients.

## Contributing

See [AGENTS.md](./AGENTS.md). All contributions should:

- Use TypeScript strict mode
- Follow conventional commit format
- Include tests for new functionality (vitest)
- Update documentation when public APIs change

## Support

If you find this project useful, consider [buying me a coffee](https://buymeacoffee.com/emdzej) ☕ or [sponsoring on GitHub](https://github.com/sponsors/emdzej) or if it's your thing: via PayPal

[![Donate with PayPal](https://www.paypalobjects.com/en_US/PL/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate/?business=TDBR3A97PLQRQ&no_recurring=0&item_name=%28emdzej%29&currency_code=PLN)

## License

[PolyForm Noncommercial 1.0.0](./LICENSE). Free for personal, research, and non-commercial use; commercial use requires a separate licence.

## References

- [EdiabasLib](https://github.com/uholeschak/ediabaslib) — original C# implementation this port tracks
- ISO 14230 (KWP2000), ISO 14229 (UDS), ISO 13400 (DoIP) — diagnostic protocol standards

## Right to Repair

The [Right to Repair](https://repair.eu) movement advocates for consumers' ability to fix the products they own — from electronics to vehicles — without being locked out by manufacturers through proprietary tools, paywalled documentation, or artificial restrictions.

**I build these tools because I believe repair is a fundamental right, not a privilege.**

Too often, service manuals, diagnostic software, and technical documentation are kept behind closed doors — unavailable to individuals even when they're willing to pay. This wasn't always the case. Products once shipped with schematics and repair guides as standard. The increasing complexity of modern technology doesn't change the fact that capable people exist who can — and should be allowed to — use that information.

These projects exist to preserve access to technical knowledge and ensure that owners aren't left at the mercy of vendors who may discontinue support, charge prohibitive fees, or simply refuse service.
