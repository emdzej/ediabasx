# @emdzej/ediabasx-ediabas

Main library for the [EdiabasX](https://github.com/emdzej/ediabasx) project. Load a BMW PRG/GRP file, run BEST2 jobs against a configured EDIABAS communication interface, get back grouped result sets — the high-level entry point that most consumers want.

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

const iface = createInterface("kdcan", {
  port: "/dev/cu.usbserial-A50285BI",
  baudRate: 9600,
  protocol: "isotp",
});

const ediabas = new Ediabas({ ecuPath: "./ecu", interface: iface });

await ediabas.loadSgbd("MS430DS0.prg");
await ediabas.connect();
const sets = await ediabas.executeJob("FS_LESEN");
await ediabas.disconnect();

// `sets` is EdiabasJobResult[][] in the **native EDIABAS C-API shape**:
//
//   sets[0]    — system set (VARIANTE, OBJECT, JOBNAME, SAETZE + the
//                persistent metadata accumulator — ECU, ORIGIN, REVISION,
//                AUTHOR, COMMENT, PACKAGE, SPRACHE, JOB_STATUS, …).
//                Same content native EDIABAS exposes via
//                `apiResultText(name, 0, …)`.
//   sets[1..N] — data sets emitted by the bytecode. Multi-record jobs
//                like FS_LESEN return one set per fault record.
//
// So sets.length === data-set-count + 1 (system set at index 0).
// `sets[0].find(r => r.name === "SAETZE")?.value` gives the data-set
// count, mirroring C# `EdiabasNet._resultSets.Count - 1`.
for (let i = 1; i < sets.length; i++) {
  console.log(`Data set ${i}/${sets.length - 1}`);
  for (const r of sets[i]) console.log(`  ${r.name} (${r.type}) = ${r.value}`);
}
```

## Simulation (no hardware)

```ts
const ediabas = new Ediabas({ ecuPath: "./ecu", interface: new SimulationInterface() });
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

- `loadSgbd(filename)` — parse a PRG/GRP file from `ecuPath`. For `.grp` files, runs INFO at load time to seed the persistent system-results accumulator.
- `executeJob(name, { params })` — run a BEST2 job, returns `[systemSet, ...dataSets]` (see [Result-set shape](#result-set-shape) below).
- `connect()` / `disconnect()` — transport lifecycle
- `getJobs()` / `getJob(name)` — job introspection
- `getSystemResults()` — the **persistent** system-results map (`_resultSysDict` analogue). Survives across jobs; holds INFO outputs, IDENT-resolved VARIANTE, latest JOB_STATUS.
- Auto-runs the SGBD's `INITIALISIERUNG` bootstrap on the first job + `IDENTIFIKATION` / variant swap for `.grp` files (mirrors EDIABAS host behaviour).

### Result-set shape

`executeJob` returns `EdiabasJobResult[][]` in the native EDIABAS C-API shape — index 0 is **always** the system set, indices 1..N are the data sets emitted by the bytecode. Matches C# `EdiabasNet._resultSets` exactly.

| Index    | Content                                                                                                  | C-API equivalent                  |
|----------|----------------------------------------------------------------------------------------------------------|-----------------------------------|
| `sets[0]` | System set — `VARIANTE`, `OBJECT`, `JOBNAME`, `SAETZE` (= data-set count) + merge from the persistent system-results map (ECU/ORIGIN/REVISION/AUTHOR/COMMENT/PACKAGE/SPRACHE/JOB_STATUS) | `apiResultText(name, 0, …)`       |
| `sets[i]` (i ≥ 1) | One emission per `enewset`, plus a trailing set with anything `ergX` wrote after the last `enewset` (e.g. `JOB_STATUS = "OKAY"`). For multi-record jobs like `FS_LESEN`, one set per record. | `apiResultText(name, i, …)`       |

The system set is materialised fresh per job from the persistent accumulator (`getSystemResults()`) plus four always-present fields. Mutating the persistent map between jobs (advanced; SGBDs do this via `ergsysi`) influences what the next job sees at `sets[0]`.

`EdiabasJobResult` carries `name`, `type`, `value`, and optional `unit` / `comment` — all five are preserved when the result travels over the JSON-RPC wire to `EdiabasClient`.

### Parameter channels — string vs. binary

`executeJob` accepts `params: (string | Uint8Array)[]`. The element
type picks which BEST2 parameter channel the SGBD reads from:

| Element type | Channel  | BEST2 opcodes that read it                            | EDIABAS C API |
|---|---|---|---|
| `string`     | `parameters[i]`  | `pari`, `pars`                                | `apiJob`      |
| `Uint8Array` | `binaryPayload`  | `pary` (whole buffer) + `parb` / `parw` / `parl` / `parr` (slot-indexed reads off the same buffer) | `apiJobData` |

Mixing both shapes in a single call is supported — the binary payload
is shared across all `parY` reads while string parameters are
per-position.

```ts
// Binbuf-driven SGBD (BMW NCS coding — C_S_LESEN / C_S_SCHREIBEN / C_S_AUFTRAG
// and F-series equivalents) reads its payload via `pary`. Passing the
// bytes hex-encoded as a string lands in the wrong channel — the SGBD's
// prologue trips `pary S1; jz ERROR_NO_BIN_BUFFER` and the job aborts
// with JOB_STATUS = "ERROR_NO_BIN_BUFFER".
const para = new Uint8Array([0x01, 0x02, /* … */]);
const sets = await ediabas.executeJob("C_S_LESEN", { params: [para] });
```

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
