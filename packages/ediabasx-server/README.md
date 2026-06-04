# @emdzej/ediabasx-server

JSON-RPC server for [EdiabasX](https://github.com/emdzej/ediabasx) — run diagnostic jobs remotely over TCP or WebSocket. One machine owns the cable and the SGBD files; clients connect and execute jobs via the `IEdiabas` contract.

## Install

```bash
pnpm add @emdzej/ediabasx-server
```

## Usage

```ts
import { EdiabasServer } from "@emdzej/ediabasx-server";
import { createInterface } from "@emdzej/ediabasx-interfaces";

const iface = createInterface("kdcan", {
  port: "/dev/cu.usbserial-A50285BI",
  baudRate: 9600,
});

const server = new EdiabasServer({
  sgbdPath: "/path/to/ecu/files",
  interface: iface,
  port: 6802,
  transport: "websocket", // or "tcp"
});

await server.start();
```

## JSON-RPC methods

All requests follow [JSON-RPC 2.0](https://www.jsonrpc.org/specification). Requests without an `id` are treated as notifications (fire-and-forget).

| Method | Params | Returns | Purpose |
|---|---|---|---|
| `init` | — | `{ ok: true }` | Ensure the shared Ediabas's transport is connected. **Idempotent** — does not replace the persistent Ediabas instance the server owns; just primes per-client state for the next job. |
| `end` | — | `{ ok: true }` | Clear per-client cached results. **Does not** disconnect the shared Ediabas (other clients may still be using it). The transport is torn down only via `server.stop()`. |
| `job` | `{ ecu, job, params? }` | `{ sets: EdiabasResultSet[] }` | Execute a job — resolves bare ECU names via `sgbdPath`. `sets[0]` is the system set; `sets[1..N]` are data sets. See [Result-set shape](#result-set-shape) below. |
| `resultSets` | — | `{ count }` | Number of **data** sets from the last job (excludes the system set at index 0). Matches `apiResultSets`. |
| `resultText` | `{ name, set }` | `{ value }` | Read a text result. `set=0` reads the system set; `set>=1` reads data set N. |
| `resultInt` | `{ name, set }` | `{ value }` | Same indexing as `resultText`. |
| `resultReal` | `{ name, set }` | `{ value }` | Same indexing as `resultText`. |
| `resultBinary` | `{ name, set }` | `{ value: number[] }` | Same indexing as `resultText`. |
| `resultFormat` | `{ name, set }` | `{ format }` | Same indexing as `resultText`. |
| `state` | — | `{ state }` | Current server state (`ready` / `busy` / `error` / `break`) |
| `break` | — | `{ ok: true }` | Signal a break |
| `errorCode` | — | `{ code }` | Last error code |
| `errorText` | — | `{ text }` | Last error message |
| `info` | — | connection / server metadata | Server and connection status |

The `job` method is the primary entry point — it resolves the ECU name, loads the SGBD (skipped if the same ECU is targeted by consecutive jobs — INITIALISIERUNG and IDENT/swap state stays warm across calls), executes the job, and returns all result sets in one response. The granular `resultText` / `resultInt` / etc. accessors operate on the cached results from the last `job` call, matching the native EDIABAS C API pattern.

### Result-set shape

`job` returns `{ sets: EdiabasResultSet[] }` where `sets` follows the native EDIABAS C-API convention (also used by `Ediabas.executeJob` and mirrored in C# `EdiabasNet._resultSets`):

- **`sets[0]` — system set.** Always present. Contains `VARIANTE`, `OBJECT`, `JOBNAME`, `SAETZE` (data-set count) plus the persistent system-results accumulator (`ECU`, `ORIGIN`, `REVISION`, `AUTHOR`, `COMMENT`, `PACKAGE`, `SPRACHE`, `JOB_STATUS`, …). Materialised fresh per job.
- **`sets[1..N]` — data sets.** One per `enewset` plus the trailing batch (whatever the job emitted after the last `enewset`). Multi-record jobs (e.g. `FS_LESEN`) emit one set per record.

Each `EdiabasResultEntry` carries `name`, `type`, `value` and optional `unit` / `comment` — all preserved on the wire.

### Single-Ediabas-per-server lifecycle

The server holds **one** `Ediabas` instance for its lifetime — lazily created on the first `init`, never replaced. Multiple clients connecting do **not** trigger transport teardown / re-INITIALISIERUNG / variant-swap re-runs. Subsequent jobs against the same ECU also skip a redundant `loadSgbd`, preserving the cached `initialized` / `identRan` / `systemResults` state. The transport is closed only when the server itself stops.

## Transports

- **`websocket`** (default) — one JSON-RPC message per WebSocket frame. Works from browsers and Node 22+.
- **`tcp`** — newline-delimited JSON-RPC over raw TCP. Node-only, lowest overhead.

## CLI

```bash
# Start the server
ediabasx serve --sgbd-path ~/ECU \
  --interface kdcan --serial-port /dev/cu.usbserial-A50285BI

# With Bimmerz Connect relay (NAT traversal, no port forwarding)
ediabasx serve --connect \
  --sgbd-path ~/ECU --interface kdcan --serial-port /dev/cu.usbserial-A50285BI

# Interactive server config wizard
ediabasx serve configure
```

## Bimmerz Connect (relay)

`attachStandardWebSocket(ws)` accepts a pre-connected standard `WebSocket` — used by the CLI's `--connect` flag to tunnel JSON-RPC through the `connect.bimmerz.app` relay. In relay-only mode (no `--host`/`--port`), call `ensureBroadcastSink()` and `bindSignalHandlers()` directly instead of `start()`.

```ts
import { accept } from "@emdzej/swsrs-client";

const peer = await accept({ relayURL, sessionId, token });
server.attachStandardWebSocket(peer.socket);
server.ensureBroadcastSink();
server.bindSignalHandlers();
```

## Architecture

The server is single-tenant: one active session at a time, matching the physical bus reality. Requests are queued sequentially via an internal promise chain — no concurrent job execution. The shared `Ediabas` instance is created on first `init` and lives for the server's lifetime (see [Single-Ediabas-per-server lifecycle](#single-ediabas-per-server-lifecycle)).

## See also

- [`@emdzej/ediabasx-client`](../ediabasx-client) — remote and in-process `IEdiabas` implementations.
- [`@emdzej/ediabasx-core`](../core) — shared `IEdiabas` interface and wire types.
- [`@emdzej/ediabasx-interfaces`](../interfaces) — the lower-level gateway (raw interface forwarding, no SGBD layer).

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
