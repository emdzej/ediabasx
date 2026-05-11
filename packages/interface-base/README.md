# @emdzej/ediabasx-interface-base

Abstract communication interface for the [EdiabasX](https://github.com/emdzej/ediabasx) BEST2 interpreter, plus an in-memory simulation transport useful for tests and offline development.

## Install

```bash
pnpm add @emdzej/ediabasx-interface-base
```

## What it exports

- `EdiabasInterface` — abstract base class. Concrete transports (`@emdzej/ediabasx-interface-serial`, `@emdzej/ediabasx-interface-enet`, the JSON-RPC gateway client) extend this.
- `SimulationInterface` — in-memory transport. Register canned responses keyed by the request bytes; `send()` replays them on the matching request. Lets you run BEST2 jobs without hardware.
- `EdiabasTimeoutError` — thrown by `receive(timeoutMs)` when no data arrives in time.

## Usage

```ts
import { SimulationInterface } from "@emdzej/ediabasx-interface-base";
import { Ediabas } from "@emdzej/ediabasx-ediabas";

const sim = new SimulationInterface();
// Map request bytes → canned response (BMW DS2 telegram including header
// and checksum, just like the wire format).
sim.setResponse([0x12, 0x04, 0x00], [0x12, 0x2e, 0xa0, /* …fault data… */]);

const ediabas = new Ediabas({ ecuPath: "./ecu", transport: sim });
await ediabas.loadSgbd("MS430DS0.prg");
const sets = await ediabas.executeJob("FS_LESEN");
```

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
