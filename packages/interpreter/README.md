# @emdzej/ediabasx-interpreter

BEST2 virtual machine — a TypeScript port of [EdiabasLib](https://github.com/uholeschak/ediabaslib)'s C# core, used by [EdiabasX](https://github.com/emdzej/ediabasx) to actually execute BMW PRG/GRP bytecode.

## Install

```bash
pnpm add @emdzej/ediabasx-interpreter @emdzej/ediabasx-best-parser
```

## What it implements

- **Register file**: B0–BF / A0–AF (8-bit, 32 regs), I0–IF (16-bit), L0–L7 (32-bit), S0–SF (string), F0–F7 (double-precision float)
- **Flags**: Z, C, V, S — with per-opcode update rules matching C# `OpCode` handlers (incl. the `strcmp` Z-inversion, `pop`'s flag refresh, …)
- **Call stack** and **data stack** with the exact push/pop byte ordering EdiabasLib uses
- **184 opcodes** dispatched from a single table — arithmetic, control flow, string, float, communication (`x*`), result emission (`erg*`), parameters (`par*`), tables, file I/O, timers, shared memory, error traps
- **Result sets**: `enewset` commits the current collector into an archive and starts a new one. `execute()` returns `JobResult[][]` — one entry per emitted set, with the trailing pending set auto-committed (mirrors C# `ExecuteJobPrivate`)
- **Trap bits** and `eerr` for structured error handling

## Usage

```ts
import { parsePrg } from "@emdzej/ediabasx-best-parser";
import { Interpreter } from "@emdzej/ediabasx-interpreter";
import { readFile } from "node:fs/promises";

const buffer = new Uint8Array(await readFile("./MS430DS0.prg"));
const prg = parsePrg(buffer);

const interpreter = new Interpreter(prg);
const sets = await interpreter.execute("FS_LESEN", {
  // optional: parameters, communicationInterface, tableState, …
});

// Multi-record jobs (FS_LESEN: N fault entries) return N+ sets, each
// with the same field names (F_ORT_NR, F_ORT_TEXT, …).
for (const [i, set] of sets.entries()) {
  console.log(`Set ${i + 1}/${sets.length}`);
  for (const r of set) console.log(`  ${r.name} (${r.type}) = ${r.value}`);
}
```

## Communication interface

`xsend` / `xrecv` / `xsetpar` / etc. need a transport. You can build one yourself by implementing the `CommunicationInterface` shape, or use a ready-made one from `@emdzej/ediabasx-interface-serial`, `@emdzej/ediabasx-interface-enet`, or `@emdzej/ediabasx-interface-base` (simulation).

## Tracing

Per-op VM traces (`xsend`, `tabseek`, `tabget`, `strcmp`) currently
still gate on `EDIABASX_VERBOSE=1` and write to stderr — they're
the last sites that pre-date the bimmerz-logger migration. Migrating
them to category-aware loggers (`EDIABASX.vm.xsend`,
`EDIABASX.vm.tabseek`, …) is planned alongside Tier 1 VM categories
(`EDIABASX.vm.exec`, `.vm.flow`, `.vm.errors`, `.vm.file`); see
[`docs/logging-plan.md`](../../docs/logging-plan.md). Until that
lands, `EDIABASX_VERBOSE=1` keeps working for these specific traces.

For ediabas-level logs (SGBD load, job dispatch, etc.) use the new
`EDIABASX_LOG_*` namespace — see the
[main README](../../README.md#logging).

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
