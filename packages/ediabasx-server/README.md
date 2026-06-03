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
| `init` | — | `{ ok: true }` | Connect to the hardware interface |
| `end` | — | `{ ok: true }` | Disconnect and reset |
| `job` | `{ ecu, job, params? }` | `{ sets: EdiabasResultSet[] }` | Execute a job — resolves bare ECU names via `sgbdPath` |
| `resultSets` | — | `{ count }` | Number of result sets from the last job (EDIABAS compat) |
| `resultText` | `{ name, set }` | `{ value }` | Read a text result from the cache |
| `resultInt` | `{ name, set }` | `{ value }` | Read an integer result from the cache |
| `resultReal` | `{ name, set }` | `{ value }` | Read a real/float result from the cache |
| `resultBinary` | `{ name, set }` | `{ value: number[] }` | Read a binary result from the cache |
| `resultFormat` | `{ name, set }` | `{ format }` | Get the wire type of a cached result |
| `state` | — | `{ state }` | Current server state (`ready` / `busy` / `error` / `break`) |
| `break` | — | `{ ok: true }` | Signal a break |
| `errorCode` | — | `{ code }` | Last error code |
| `errorText` | — | `{ text }` | Last error message |
| `info` | — | connection / server metadata | Server and connection status |

The `job` method is the primary entry point — it resolves the ECU name, loads the SGBD, executes the job, and returns all result sets in one response. The granular `resultText` / `resultInt` / etc. accessors operate on the cached results from the last `job` call, matching the original EDIABAS C API pattern.

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

The server is single-tenant: one active session at a time, matching the physical bus reality. Requests are queued sequentially via an internal promise chain — no concurrent job execution.

## See also

- [`@emdzej/ediabasx-client`](../ediabasx-client) — remote and in-process `IEdiabas` implementations.
- [`@emdzej/ediabasx-core`](../core) — shared `IEdiabas` interface and wire types.
- [`@emdzej/ediabasx-interfaces`](../interfaces) — the lower-level gateway (raw interface forwarding, no SGBD layer).

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
