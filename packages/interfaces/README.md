# @emdzej/ediabasx-interfaces

Factory and JSON-RPC gateway for all [EdiabasX](https://github.com/emdzej/ediabasx) transports. Lets you select an interface by name and a plain options object — useful for config-file-driven setups and for sharing a single physical cable across processes.

## Install

```bash
pnpm add @emdzej/ediabasx-interfaces
```

(Pulls in all `@emdzej/ediabasx-interface-*` packages as dependencies.)

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

Supported names: `simulation`, `serial`, `kdcan`, `enet`, `gateway`.

## JSON-RPC gateway

Share one physical cable across processes / machines.

### Server (where the cable is)

```ts
import { GatewayServer, createInterface } from "@emdzej/ediabasx-interfaces";

const upstream = createInterface("kdcan", { port: "/dev/cu.usbserial-A50285BI", baudRate: 9600 });
await upstream.connect();

const server = new GatewayServer({ port: 6801, upstream });
await server.listen();
```

### Client (anywhere)

```ts
import { GatewayClient } from "@emdzej/ediabasx-interfaces";

const transport = new GatewayClient({ host: "192.168.1.50", port: 6801 });
await transport.connect();
// Use `transport` anywhere an EdiabasInterface is expected.
```

Equivalent in the CLI:

```bash
# Server side
ediabasx gateway --interface kdcan --serial-port /dev/cu.usbserial-A50285BI --serial-baud 9600

# Client side
ediabasx run file.prg IDENT --interface gateway --gateway-host 192.168.1.50 --gateway-port 6801
```

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
