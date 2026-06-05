# @emdzej/ediabasx-client

Remote and in-process implementations of the [`IEdiabas`](../core/src/ediabas-api.ts) interface from [`@emdzej/ediabasx-core`](../core). Gives consumers a unified API regardless of whether the EDIABAS runtime is local or on a remote server.

## Install

```bash
pnpm add @emdzej/ediabasx-client
```

## EdiabasClient (remote)

Connects to an [`EdiabasServer`](../ediabasx-server) over TCP or WebSocket. No local SGBD files needed — the server resolves ECU names.

```ts
import { EdiabasClient } from "@emdzej/ediabasx-client";

const client = new EdiabasClient({
  host: "192.168.1.50",
  port: 6802,
  transport: "websocket", // or "tcp"
});

await client.init();
const response = await client.job("IKE", "IDENT");

// `response.sets` matches the native EDIABAS C-API shape (see
// @emdzej/ediabasx-ediabas README — "Result-set shape"):
//
//   sets[0]    — system set (VARIANTE, OBJECT, JOBNAME, SAETZE +
//                persistent metadata: ECU, ORIGIN, REVISION, JOB_STATUS, …)
//   sets[1..N] — data sets emitted by the bytecode
for (let i = 1; i < response.sets.length; i++) {
  for (const [name, entry] of Object.entries(response.sets[i])) {
    console.log(`${name}: ${entry.value}`);
  }
}

// Granular accessors mirror the native EDIABAS C API:
//   resultText("VARIANTE", 0, …) reads from the system set
//   resultText(name, 1..N, …)    reads from data sets 1..N
//   resultSets()                 returns the **data**-set count
//                                (== sets.length - 1), matching apiResultSets
console.log(client.resultText("VARIANTE", 0));  // resolved variant name
console.log(client.resultSets());

await client.end();
```

Each `EdiabasResultEntry` carries `name`, `type`, `value`, plus optional `unit` and `comment` — all five fields propagate through the JSON-RPC wire untouched.

The WebSocket transport uses `globalThis.WebSocket` (Node 22+ / browsers) — no native dependencies. TCP uses a dynamic `import("node:net")` so the module stays browser-bundleable when only the WebSocket path is used.

### Pre-connected WebSocket (Bimmerz Connect)

Pass a `socket` option to use a pre-connected `WebSocket` instead of creating one internally — used for relay-mediated connections via `@emdzej/swsrs-client`:

```ts
import { dial } from "@emdzej/swsrs-client";

const peer = await dial({ relayURL: "wss://connect.bimmerz.app", sessionId, token });
const client = new EdiabasClient({ transport: "websocket", socket: peer.socket });
await client.init();
```

## EmbeddedEdiabas (in-process)

Wraps the [`Ediabas`](../ediabas) class behind the same `IEdiabas` interface. Use this when the cable and SGBD files are local but you want the unified API.

```ts
import { EmbeddedEdiabas } from "@emdzej/ediabasx-client";
import { createInterface } from "@emdzej/ediabasx-interfaces";

const iface = createInterface("kdcan", {
  port: "/dev/cu.usbserial-A50285BI",
  baudRate: 9600,
});

const ediabas = new EmbeddedEdiabas({
  sgbdPath: "/path/to/ecu/files",
  interface: iface,
});

await ediabas.init();
const response = await ediabas.job("IKE", "IDENT");
console.log(ediabas.resultText("VARIANTE", 0));
await ediabas.end();
```

## Binary params (`apiJobData`)

`job(ecu, name, params)` covers both the indexed-string channel (`apiJob` — `pari` / `pars` opcodes) and the binary channel (`apiJobData` — `pary` / `parb` / `parw` / `parl` / `parr`). The element type carries the channel:

```ts
// All string params — semicolon shorthand for indexed slots.
await ediabas.job("KMBI_E60", "STATUS_LESEN", "param1;param2");

// Single binary buffer — apiJobData. Required for binbuf-using SGBDs
// like NCS coding (C_S_LESEN / C_S_SCHREIBEN / C_S_AUFTRAG).
await ediabas.job("KMBI_E60", "C_S_AUFTRAG", new Uint8Array([0x06, 0x10, /*…*/]));

// Mixed — interleave string and binary params in one call.
await ediabas.job("KMBI_E60", "JOB", ["prefix", new Uint8Array([0xDE, 0xAD]), "suffix"]);
```

Same shape for `EdiabasClient` — the wire encoding base64s binary entries automatically.

## Choosing between them

| | `EdiabasClient` | `EmbeddedEdiabas` |
|---|---|---|
| SGBD files | On the server | Local |
| Hardware interface | On the server | Local |
| Network round-trip | Yes | No |
| Browser-compatible | Yes (WebSocket) | No (`node:fs`) |
| Use case | Remote diagnostics, web UIs | CLI tools, local scripts |

Both implement `IEdiabas` — swap one for the other without changing calling code.

## See also

- [`@emdzej/ediabasx-server`](../ediabasx-server) — the JSON-RPC server that `EdiabasClient` talks to.
- [`@emdzej/ediabasx-core`](../core) — the `IEdiabas` interface definition and wire types.

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
