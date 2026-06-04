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
- **Result sets**: `enewset` commits the current collector into an archive and starts a new one. `execute()` returns `JobResult[][]` containing **just the data sets** — one entry per emitted set, with the trailing pending set auto-committed (mirrors C# `_resultSetsTemp` *before* the system set is prepended). The Ediabas-layer wrapper above the interpreter (`@emdzej/ediabasx-ediabas`) is responsible for materialising the per-job system set and returning `[systemSet, ...dataSets]` to consumers; the interpreter itself stays at the bytecode-execution layer.
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

// Multi-record jobs (FS_LESEN: N fault entries) return N sets, each
// with the same field names (F_ORT_NR, F_ORT_TEXT, …). Note: only
// **data** sets are returned here — the system set (VARIANTE / OBJECT /
// JOBNAME / SAETZE) lives one layer up in `@emdzej/ediabasx-ediabas`'s
// `Ediabas.executeJob`. Use that wrapper if you want the C-API-compatible
// `[systemSet, ...dataSets]` shape.
for (const [i, set] of sets.entries()) {
  console.log(`Set ${i + 1}/${sets.length}`);
  for (const r of set) console.log(`  ${r.name} (${r.type}) = ${r.value}`);
}
```

## Break / cancel

`requestBreak()` asks the step loop to abort the in-flight job at the next instruction boundary — `step()` throws `EdiabasError(EDIABAS_BIP_0008)`, matching native EDIABAS `apiBreak` semantics. The flag is cooperative: an `xrecv` already in flight only unwinds once its timeout fires. Call it from outside the loop while `execute()` is in flight.

Higher layers forward to it: `Ediabas.break()` tracks the active interpreter and calls `requestBreak()` on it; `EmbeddedEdiabas.break()` forwards through `Ediabas.break()` while **bypassing** the internal queue (otherwise the abort would only fire after the job it's trying to interrupt finished); `EdiabasServer` does the same on the JSON-RPC `break` method (dispatched inline, not enqueued); `EdiabasClient.break()` sends the RPC and the in-flight `client.job(...)` promise rejects with `EDIABAS_BIP_0008` once the server's interpreter reaches its next instruction.

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
