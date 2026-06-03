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

for (const set of response.sets) {
  for (const [name, entry] of Object.entries(set)) {
    console.log(`${name}: ${entry.value}`);
  }
}

// Granular accessors (EDIABAS C API compat)
console.log(client.resultText("VARIANTE", 0));
console.log(client.resultSets());

await client.end();
```

The WebSocket transport uses `globalThis.WebSocket` (Node 22+ / browsers) — no native dependencies. TCP uses a dynamic `import("node:net")` so the module stays browser-bundleable when only the WebSocket path is used.

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
