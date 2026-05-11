# @emdzej/ediabasx-ediabas

Main library for the [EdiabasX](https://github.com/emdzej/ediabasx) project. Load a BMW PRG/GRP file, run BEST2 jobs against a configured transport, get back grouped result sets — the high-level entry point that most consumers want.

## Install

```bash
pnpm add @emdzej/ediabasx-ediabas
```

For real hardware, pair it with one of:

```bash
pnpm add @emdzej/ediabasx-interfaces           # factory for all transports
# or pick directly:
pnpm add @emdzej/ediabasx-interface-serial
pnpm add @emdzej/ediabasx-interface-enet
```

## Usage

```ts
import { Ediabas } from "@emdzej/ediabasx-ediabas";
import { createInterface } from "@emdzej/ediabasx-interfaces";

const transport = createInterface("kdcan", {
  port: "/dev/cu.usbserial-A50285BI",
  baudRate: 9600,
  protocol: "isotp",
});

const ediabas = new Ediabas({ ecuPath: "./ecu", transport });

await ediabas.loadSgbd("MS430DS0.prg");
await ediabas.connect();
const sets = await ediabas.executeJob("FS_LESEN");
await ediabas.disconnect();

// `sets` is EdiabasJobResult[][] — one entry per result set emitted by
// the bytecode. Multi-record jobs like FS_LESEN return one set per fault
// record, plus a trailing JOB_STATUS set.
for (const [i, set] of sets.entries()) {
  console.log(`Set ${i + 1}/${sets.length}`);
  for (const r of set) console.log(`  ${r.name} (${r.type}) = ${r.value}`);
}
```

## Simulation (no hardware)

```ts
const ediabas = new Ediabas({ ecuPath: "./ecu", simulation: true });
await ediabas.loadSgbd("D_MOTOR.prg");
const sets = await ediabas.executeJob("IDENT");
```

## Config file

`createFromConfigFile()` accepts the same schema the CLI uses (`~/.config/ediabasx/config.json`):

```json
{
  "version": 1,
  "interface": {
    "type": "kdcan",
    "kdcan": {
      "port": "/dev/cu.usbserial-A50285BI",
      "baudRate": 9600,
      "protocol": "isotp"
    }
  },
  "paths": { "sgbd": "./ecu" },
  "timeouts": { "connect": 5000, "response": 2000 }
}
```

```ts
import { createFromConfigFile } from "@emdzej/ediabasx-ediabas";
const ediabas = await createFromConfigFile("./ediabas.config.json");
```

## What you get

- `loadSgbd(filename)` — parse a PRG/GRP file from `ecuPath`
- `executeJob(name, { params })` — run a BEST2 job, get all emitted result sets
- `connect()` / `disconnect()` — transport lifecycle
- `getJobs()` / `getJob(name)` — job introspection
- Auto-runs the SGBD's `INITIALISIERUNG` bootstrap on the first job (mirrors EDIABAS host behaviour)

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
