# @emdzej/ediabasx-interfaces

Factory and JSON-RPC gateway for all [EdiabasX](https://github.com/emdzej/ediabasx) transports. Lets you select an interface by name and a plain options object — useful for config-file-driven setups and for sharing a single physical cable across processes.

## Install

```bash
pnpm add @emdzej/ediabasx-interfaces
```

(Pulls in all `@emdzej/ediabasx-interface-*` packages as dependencies. The `@emdzej/j2534-*` USB packages are peer deps — auto-installed on pnpm, declare manually on classic npm.)

## Factory

```ts
import { createInterface, listInterfaces, getInterfaceMetadata } from "@emdzej/ediabasx-interfaces";

const transport = createInterface("kdcan", {
  port: "/dev/cu.usbserial-A50285BI",
  baudRate: 9600,
  protocol: "isotp",
});

// Or discover available interfaces and their options:
for (const meta of listInterfaces()) console.log(meta.name, meta.options);
```

Supported names: `simulation`, `serial`, `kdcan`, `j2534`, `enet`, `gateway`.

`kdcan` is a flavour of `serial` — same `SerialInterface` class with `probeAdapterOnConnect: true` so the K+DCAN cable's adapter telegrams (type / version / serial / voltage) are queried on connect. The factory injects `NodeSerialTransport` in this package; browser consumers construct `SerialInterface` directly with `WebSerialTransport`.

`j2534` and the `j2534-*` USB transports are **peer dependencies** of this package — consumers control the version. `pnpm add @emdzej/ediabasx-interfaces` will install required peers automatically (pnpm ≥ 7) or warn on classic npm.

## JSON-RPC gateway

Share one physical cable across processes / machines. Two transports are supported:

- **`websocket`** (default) — one JSON-RPC message per WebSocket frame, served via `http.Server` + `ws`. Works from both Node 22+ (global WebSocket) and browsers — any page can `new WebSocket("ws://host:6801")`.
- **`tcp`** — line-delimited JSON-RPC over a raw TCP socket. Node-only clients; lowest overhead. Set explicitly when you need it.

Both speak the same JSON-RPC 2.0 vocabulary; only the framing differs. Pick one transport per server instance (no multiplexing).

### Server (where the cable is)

```ts
import { GatewayServer, createInterface } from "@emdzej/ediabasx-interfaces";

const iface = createInterface("kdcan", { port: "/dev/cu.usbserial-A50285BI", baudRate: 9600 });

const server = new GatewayServer({
  port: 6801,
  // transport defaults to "websocket"; set "tcp" for Node-only line-delimited clients.
  interface: iface,
});
await server.start();
```

### Client (anywhere)

```ts
import { GatewayClient } from "@emdzej/ediabasx-interfaces";

const transport = new GatewayClient({
  host: "192.168.1.50",
  port: 6801,
  transport: "websocket", // omit for TCP
  // url: "wss://gateway.example.com/ediabasx", // optional, overrides host/port
});
await transport.connect();
// Use `transport` anywhere an EdiabasInterface is expected.
```

The client uses `globalThis.WebSocket` (Node 22+ / every browser) so the module stays dep-free for browser bundling. The server uses the `ws` package because Node has no built-in WebSocket server.

### Forwarded methods

The gateway is transparent for the full BEST2 communication surface. In addition to the obvious `connect` / `send` / `receive`, the server delegates these to the backing interface when present:

| JSON-RPC method | Purpose |
|---|---|
| `setParam` | Single comm parameter (P1, P2, CAN IDs, …) |
| `setCommParameter` | Bulk parameter array (the BEST2 `xsetpar` opcode — falls back to a `setParam` loop if the backend only has the singular setter) |
| `setAnswerLength` | One-shot answer length hint |
| `setRepeatCounter` | Repeat counter for retried jobs |
| `transmitData` | DS2 / synchronous request-response |
| `rawData` | Adapter-level raw byte exchange |
| `getPort` / `setPort` | Hardware port access |
| `getIgnitionVoltage` / `getBatteryVoltage` / `getLoopTest` | Cable diagnostics |
| `setProgramVoltage`, `switchSiRelais` | EPROM / programming pins |

### CLI

```bash
# Server side — TCP (default)
ediabasx gateway --interface kdcan --serial-port /dev/cu.usbserial-A50285BI --serial-baud 9600

# Server side — WebSocket
ediabasx gateway --transport websocket --interface kdcan --serial-port /dev/cu.usbserial-A50285BI

# Client side — TCP
ediabasx run file.prg IDENT --interface gateway --gateway-host 192.168.1.50 --gateway-port 6801

# Client side — WebSocket
ediabasx run file.prg IDENT --interface gateway \
  --gateway-host 192.168.1.50 --gateway-port 6801 \
  --gateway-transport websocket

# Client side — explicit URL (for wss:// or path-based deployments)
ediabasx run file.prg IDENT --interface gateway --gateway-url wss://gateway.example.com/ediabasx
```

On startup the server prints the backend interface it's bound to, so it's easy to confirm which cable a remote gateway is serving:

```
Backend interface: KDCAN · /dev/cu.usbserial-A50285BI @ 115200
Gateway server listening on 127.0.0.1:6801 (transport=websocket)
```

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
