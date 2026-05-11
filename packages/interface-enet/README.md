# @emdzej/ediabasx-interface-enet

Ethernet / **DoIP** transport for the [EdiabasX](https://github.com/emdzej/ediabasx) BEST2 interpreter — for modern BMW vehicles that expose diagnostics over the OBD-II Ethernet pins.

> **Status: work in progress.** The class skeleton is in place; the DoIP / HSFZ message handling lives in [`@emdzej/ediabasx-protocol-doip`](../protocol-doip) and is being wired in. Not all DS2-over-IP variants are supported yet.

## Install

```bash
pnpm add @emdzej/ediabasx-interface-enet
```

## Usage

```ts
import { EnetInterface } from "@emdzej/ediabasx-interface-enet";

const transport = new EnetInterface({ host: "192.168.0.1", port: 6801 });
await transport.connect();
```

Or via the factory:

```ts
import { createInterface } from "@emdzej/ediabasx-interfaces";
const transport = createInterface("enet", { host: "192.168.0.1", port: 6801 });
```

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
