# VM / interpreter logging — planned work

Status: **planned, not implemented.** Captures the trace-point survey done after
the bimmerz-logger 0.1.x migration so we don't lose context.

This is a follow-up to the work that:

- Moved every library log site onto `@emdzej/bimmerz-logger`.
- Deleted the per-instance `Ediabas.config.logging` boolean.
- Reserved `EDIABASX.ediabas.wire` as the wire-trace category address
  (populated by future interface-side migrations).

Three trace sites still bypass the logger and write to `process.stderr`
based on `process.env.EDIABASX_VERBOSE`. Library code shouldn't read env
vars (it has to stay browser-portable), so this is a leak we should
finish closing.

## Existing trace sites to migrate (Tier 0)

| Site | What it traces | File | Future category |
|---|---|---|---|
| `0x7c tabseek` opcode | Column / search / matched row / Z flag | `packages/interpreter/src/interpreter.ts:2451` | `EDIABASX.vm.tabseek` |
| `0x7d tabget` opcode | Column / retrieved value into S-register | `packages/interpreter/src/interpreter.ts:2462` | `EDIABASX.vm.tabget` |
| `0x8f strcmp` opcode | Both operands + Z verdict | `packages/interpreter/src/interpreter.ts:2636` | `EDIABASX.vm.strcmp` |
| `xsend*` family | Request / response bytes | `packages/interpreter/src/operations/communication.ts:106` | `EDIABASX.vm.xsend` |

All four currently gated on `EDIABASX_VERBOSE=1`; once migrated, the CLI's
`EDIABASX_LOG_CATEGORIES` (or the web app's Settings) controls them.

## Net-new trace points to add — by ROI tier

### Tier 1 — almost-certainly worth it

| Category | Coverage | Justification |
|---|---|---|
| `EDIABASX.vm.exec` | Every opcode at `trace`, with `pc`, raw bytes, decoded name | Today we have nothing when chasing "job took the wrong branch." Disassembly + prayer. |
| `EDIABASX.vm.flow` | Jumps (jb/jc/jz/jnb/jnc/jnz), calls, returns, jump-frame setups | The 0x29 retb, 0x2f j*, 0x35 call, 0x36 ret family. 90% of "why did this job exit early." |
| `EDIABASX.vm.errors` | EDIABAS error register transitions: every `setEdiabasError`, `clearEdiabasError`, `testEdiabasError` read | Same shape as the `CDHSetError`/`CDHTestError` bug that masked SG_CODIEREN failures in ncsx 0.2.0. SGBDs use error-register polling for control flow — when a job fails silently, this is the trace you want. |
| `EDIABASX.vm.file` | `readln` / `freadln` / `filewrite` / `shmget` — filename + bytes-read/written + EOF flag | SGBDs read `.dat` text tables via these opcodes. When a job can't find a table row, the trace pinpoints whether the file was read, whether the row matched, and which line. |

### Tier 2 — useful when chasing specific bugs

| Category | Coverage | When it pays off |
|---|---|---|
| `EDIABASX.vm.params` | `pari`, `pars`, `pary`, parameter set construction | When a job throws `ERROR_NUMBER_ARGUMENT`, it's almost always a parameter-channel issue. |
| `EDIABASX.vm.results` | Every `erg*` opcode that writes a result set | Mirror of params — "the result has the wrong field." |
| `EDIABASX.vm.registers` | Big register writes (S0, S1, R0) | Too noisy at trace without an allowlist; would need `_REGISTERS_TO_LOG`. |
| `EDIABASX.vm.cabd` | CDH calls that originate from inside the IPO interpreter | Crosses package boundaries; would need a hook into the cabi-provider chain. |

### Tier 3 — diminishing returns (skip unless a specific need arises)

| Category | Why it's tier 3 |
|---|---|
| `EDIABASX.vm.stack` | Push/pop noise dwarfs signal. Stack state is reconstructible from `exec` + R0/SP. |
| `EDIABASX.vm.flags` | Z/C transitions are inferable from `exec`. Only useful for "why didn't the branch take." |
| `EDIABASX.vm.frame` | Call-frame push/pop with frame-pointer + locals window. Rare actual need. |

## Performance consideration

The VM dispatch loop runs 1000 – 100,000 opcodes per typical job. A
`log.trace({...}, "op")` call costs ~200 ns even when it short-circuits
below threshold (Map.get + dot-segment walk). At 10 000 opcodes that's
2 ms of overhead per job — measurable.

Pattern for hot-path traces: cache the threshold at job entry and gate
the call site explicitly.

```ts
const execLog = getLogger("EDIABASX.vm.exec");
const flowLog = getLogger("EDIABASX.vm.flow");

async function runJob() {
  // Snapshot per job. Costs us "level changes mid-job don't take
  // effect until next job" — fine; jobs are millisecond-class.
  const traceExec = execLog.level === "trace";
  const traceFlow = flowLog.level === "trace";

  // hot loop:
  for (each opcode) {
    if (traceExec) execLog.trace({ pc, op, name }, "op");
    // …
  }
}
```

For **non-hot-path** categories (`xsend`, `file`, `errors`, `results` —
fire only on specific opcodes), per-call evaluation is fine.

## Suggested order when picking this up

1. **Migrate Tier 0** — finish the existing-but-env-driven traces.
   Mechanical change, ~30 LOC, no design judgement needed.
2. **Add Tier 1** — `exec` + `flow` + `errors` + `file` with the
   cached-threshold pattern. ~80 LOC across `interpreter.ts` and
   `operations/`.
3. **Update `LOG_CATEGORIES`** in `@emdzej/ediabasx-ediabas` so
   consuming apps (ediabasx-web Settings, inpax-web Settings) pick
   up the new categories without code changes.

Skip Tier 2/3 until a specific bug calls for them; speculative trace
code rots.
