# @emdzej/ediabasx-cli

Command-line tool for the [EdiabasX](https://github.com/emdzej/ediabasx) project. Parse, disassemble, inspect, and run BMW PRG/GRP diagnostic files — with a built-in TUI for interactive browsing and job runs.

## Install

Global (recommended for day-to-day use):

```bash
npm install -g @emdzej/ediabasx-cli
ediabasx --help
```

Or via npx without installing:

```bash
npx @emdzej/ediabasx-cli info ./MS430DS0.prg
```

From inside this monorepo (after `pnpm install && pnpm build`):

```bash
pnpm cli info ./MS430DS0.prg
```

## Commands

| Command | Purpose |
|---|---|
| `ediabasx info <file>` | One-screen ECU / file summary (origin, revision, author, job/table counts) |
| `ediabasx jobs <file>` | List every job with arguments, results, and comments |
| `ediabasx job <file> <name>` | Print a single job (args, results, comments) |
| `ediabasx tables <file>` | List every lookup table with row/column counts |
| `ediabasx table <file> <name>` | Print a single table |
| `ediabasx decompile <file> [job]` | Decompile BEST/2 bytecode (all jobs or one) |
| `ediabasx run <file> [job] [params...]` | Execute a job against an ECU (or pop a TUI to browse jobs) |
| `ediabasx explore <file>` | TUI for browsing jobs / tables / metadata side by side |
| `ediabasx gateway [opts]` | Share a local interface over JSON-RPC (TCP or WebSocket) |
| `ediabasx serve` | Start the EdiabasX JSON-RPC server for remote job execution |
| `ediabasx serve --connect` | Start the server with Bimmerz Connect relay (NAT traversal) |
| `ediabasx serve configure` | Interactive server configuration wizard |
| `ediabasx simulator [opts]` | Interactive ECU response simulator |
| `ediabasx configure` | Interactive config wizard (interface + sgbdPath) |
| `ediabasx docs <src> <out>` | Generate Markdown documentation for a directory of PRG/GRP files |

## Hardware

```bash
# K+DCAN cable, ISO-TP for D-CAN ECUs
ediabasx run file.prg FS_LESEN \
  --interface kdcan \
  --serial-port /dev/cu.usbserial-A50285BI \
  --serial-protocol isotp \
  --serial-tester-can-id 0x7e0 \
  --serial-ecu-can-id 0x7e8

# Serial K-line (KWP2000)
ediabasx run file.prg IDENT \
  --interface serial \
  --serial-port /dev/ttyUSB0 \
  --serial-baud 9600 \
  --serial-protocol kwp

# ENET (DoIP)
ediabasx run file.prg IDENT --interface enet --enet-host 192.168.0.1

# Simulation (no hardware)
ediabasx run file.prg IDENT --simulation
```

If you omit `--interface`, the CLI reads `~/.config/ediabasx/config.json`. Run `ediabasx configure` for the interactive wizard.

## Gateway

Run the JSON-RPC gateway on the host that owns the cable, then drive it from anywhere. TCP is the default; WebSocket adds browser-friendly framing.

```bash
# Host — TCP gateway in front of a real K+DCAN cable
ediabasx gateway --interface kdcan --serial-port /dev/cu.usbserial-A50285BI --serial-baud 115200

# Host — WebSocket gateway (same port, different wire framing)
ediabasx gateway --transport websocket \
  --interface kdcan --serial-port /dev/cu.usbserial-A50285BI

# Client — connect over TCP
ediabasx run file.prg IDENT \
  --interface gateway \
  --gateway 192.168.1.50:6801

# Client — connect over WebSocket
ediabasx run file.prg IDENT \
  --interface gateway \
  --gateway 192.168.1.50:6801 \
  --gateway-transport websocket

# Client — explicit URL (wss://, custom path, etc.)
ediabasx run file.prg IDENT \
  --interface gateway \
  --gateway-url wss://gateway.example.com/ediabasx
```

On startup the server prints the backend interface and active transport — handy for confirming which cable a remote gateway is serving:

```
Backend interface: KDCAN · /dev/cu.usbserial-A50285BI @ 115200
Gateway server listening on 127.0.0.1:6801 (transport=websocket)
```

> The server-binding flag is `--transport`; the client-side flag is `--gateway-transport`. They're deliberately named differently because the same `run` invocation can mix a gateway client with other interface flags.

## EdiabasX Server

Higher-level than the gateway: the server wraps the full `Ediabas` runtime (SGBD loading, job execution, result caching). Clients send `job("IKE", "IDENT")` — no local SGBD files needed.

```bash
# Start the server (reads sgbdPath + server config from ~/.config/ediabasx/config.json)
ediabasx serve

# Or with explicit flags
ediabasx serve --sgbd-path ~/ECU --port 6802 --transport websocket \
  --interface kdcan --serial-port /dev/cu.usbserial-A50285BI

# Interactive server config wizard
ediabasx serve configure
```

### Bimmerz Connect (relay-mediated remote access)

When the server is behind NAT or on a different network, `--connect` tunnels JSON-RPC traffic through the `connect.bimmerz.app` relay — no port forwarding or VPN needed.

```bash
# Register on the relay (first run authenticates via device flow)
ediabasx serve --connect \
  --sgbd-path ~/ECU --interface kdcan --serial-port /dev/cu.usbserial-A50285BI
```

The server prints a session token and deep link:

```
Session token: abc123.def456...
Link:          https://ediabasx.bimmerz.app?connect=abc123.def456...
```

Share the link with the remote user — clicking it opens the web app and auto-connects through the relay. Or the remote user can paste the session token manually via the Connect button in the web app.

Options:
- `--connect` — register on the Bimmerz Connect relay
- `--relay-url <url>` — custom relay URL (default: `https://connect.bimmerz.app`)

Combine with `--host`/`--port` to serve both locally and via the relay simultaneously. Without `--host`/`--port`, relay-only mode runs (no local TCP/WS listener).

### Remote job execution

Use `--server` on the `run` command to execute jobs via a remote EdiabasX server instead of locally:

```bash
# Connect to server from config (server.host / server.port)
ediabasx run IKE IDENT --server

# Explicit server address
ediabasx run IKE IDENT --server 192.168.1.50:6802

# JSON output
ediabasx run IKE IDENT --server --json

# Filter results
ediabasx run IKE IDENT --server --results VARIANTE,JOB_STATUS
```

In server mode, the first argument is the ECU name (resolved by the server) and the second is the job name. No local PRG file is needed.

## Bare ECU names

When `sgbdPath` is configured (in `~/.config/ediabasx/config.json` or via `ediabasx configure`), the `run` command accepts bare ECU names instead of file paths:

```bash
# Instead of:
ediabasx run /path/to/ECU/IKE.prg IDENT

# You can write:
ediabasx run IKE IDENT
```

Resolution order: `.prg` > `.PRG` > `.grp` > `.GRP`, then uppercase variants. Paths with separators or extensions bypass resolution.

## TUI

`ediabasx run <file>` (without a job name) opens the **Run TUI** — jobs list on the left, results on the right, with interface status and an optional details panel.

| Key | Action |
|---|---|
| `↑` `↓` | Move within the focused panel |
| `Enter` / `R` | Run the highlighted job |
| `Tab` | Cycle focus: jobs → details (if shown) → results |
| `i` | Toggle the job details panel |
| `/` | Filter the jobs list |
| `Q` / `Ctrl+C` | Quit |

`ediabasx explore <file>` opens a similar TUI for static inspection — jobs / tables / metadata, with disassembly in the content panel and per-item details below.

## Logging

Configured via `EDIABASX_LOG_*` env vars at the CLI boundary
(see the [main README](../../README.md#logging) for the full table)
or the `logging` section of the config file (`logging.level`,
`logging.categories`, `logging.destination`, `logging.pretty`). Env
vars override file values entry-by-entry; categories merge.

```bash
# Bump everything to debug
EDIABASX_LOG_LEVEL=debug ediabasx run file.prg FS_LESEN

# Per-category — narrow trace scope
EDIABASX_LOG_CATEGORIES="EDIABASX.ediabas=debug" ediabasx run file.prg FS_LESEN

# JSON output, file destination
EDIABASX_LOG_FORMAT=json EDIABASX_LOG_DESTINATION=/tmp/ediabasx.log \
  ediabasx run file.prg FS_LESEN
```

Currently-active categories: `EDIABASX`, `EDIABASX.ediabas`,
`EDIABASX.ediabas.config-loader`, `EDIABASX.ediabas.wire` (reserved
— populated by future interface-side migration). Per-opcode VM
traces (`xsend`, `tabseek`, `tabget`, `strcmp`) are planned but not
yet migrated to the new logger — see
[`docs/logging-plan.md`](../../docs/logging-plan.md).

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
