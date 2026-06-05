# ediabasx-native

C11 port of the BMW BEST/2 interpreter — embedded-friendly companion to the
TypeScript reference at `packages/interpreter/`. The wrapper layer in
`ediabas.h` / `ediabas.c` mirrors the TS `Ediabas` class (one layer above
the pure interpreter).

## What's here

| Path | Purpose |
|------|---------|
| `include/ediabasx/` | Public headers. `vm.h` is the low-level interpreter; `ediabas.h` is the higher-level wrapper (the recommended entry point). |
| `src/vm.c`, `src/opcodes_*.c` | Portable VM core + BEST/2 opcode handlers. No POSIX / no filesystem assumptions. |
| `src/ediabas.c` | `edxn_ediabas_t` wrapper — persistent system results, INIT/IDENT bootstrap, variant swap, materialised `[system_set, …data_sets]` result shape. |
| `platform/posix/` | POSIX-specific backends (serial K-line, file loaders). |
| `platform/esp32/` | Reserved for the ESP32 dongle port. Empty for now. |
| `test/` | Unit tests + `edxn_run` CLI driver (uses the wrapper). |

## Build

```bash
./build.sh         # cmake -B build && cmake --build build
./build/edxn_run --help
```

Tests:

```bash
cd build && ctest --output-on-failure
```

## Run a job against a real ECU

```bash
./build/edxn_run --port /dev/cu.usbserial-XXXX path/to/MS420DS0.prg IDENT
```

The runner dumps PRG metadata + tables, then executes the named job through
the `edxn_ediabas_t` wrapper. With a `.grp` group file the wrapper runs
INITIALISIERUNG + IDENTIFIKATION first, looks up `VARIANTE` in the IDENT
results, calls the registered `sgbd_loader` to fetch the resolved
variant's `.prg` from the same directory, swaps the variant in, and
re-dispatches subsequent jobs against it — mirrors TS
`Ediabas.runIdentAfterInit` + `swapToVariant`.

Output uses the **C-API-compatible result shape**: a labelled `System set`
section (VARIANTE/OBJECT/JOBNAME/SAETZE + persistent metadata from the
SGBD's INFO job and IDENT-resolved variant), followed by `Data set N/M`
sections — one per emission in `result_sets[]` plus the trailing
`current_results` batch if non-empty.

## Library layering

```
edxn_ediabas_t        ← recommended entry point (C-API-compatible result shape)
  ↓ uses
edxn_vm_t             ← pure BEST/2 interpreter (data sets only, no system set)
```

The wrapper owns: persistent `system_results` (ECU/ORIGIN/REVISION/AUTHOR/
COMMENT/PACKAGE/SPRACHE/JOB_STATUS + IDENT-resolved VARIANTE), the loaded
PRG, the group→variant mapping cache, INIT/IDENT bootstrap state. Per job
it materialises `[system_set, …data_sets]` into `built_sets` and exposes
that array via `edxn_ediabas_get_sets()`. The interpreter (`edxn_vm_t`)
stays at the bytecode-execution layer and is also publicly callable
(`edxn_vm_exec`, `edxn_vm_exec_raw`) for embedders that don't want the
Ediabas-layer state machine. New code should prefer the wrapper.

For jobs that take a binary payload (`apiJobData` channel — `pary` opcode
0x7F and the slot-indexed `parb`/`parw`/`parl`/`parr` reads, used by BMW
NCS coding SGBDs and other binbuf-driven flows), call the `_data`
sibling entry points: `edxn_ediabas_exec_data(eb, name, args, bin,
bin_len)` or `edxn_vm_exec_data(vm, name, args, bin, bin_len)`. The
non-`_data` variants are now thin wrappers passing `NULL, 0` for the
binary payload, so existing callers don't need to change. The payload
size is capped at `EDXN_PARAM_BINARY_MAX` (1 KiB); excess is truncated
to mirror the TS runtime where the SGBD's own length check is
authoritative.

## Architecture

The VM is structured as a `struct edxn_vm` that owns:

- **Registers**: B0–B15 (byte), I0–I15 (16-bit), L0–L7 (32-bit), S0–S15 (string/binary),
  F0–F7 (IEEE 754 double), A0–A15 (alternate byte).
- **Flags**: Z (zero), C (carry), V (overflow), S (sign).
- **Stacks**: 256-byte data stack, call stack (subroutine returns).
- **Program**: parsed PRG (jobs, tables, decoded bytecode, header).
- **Transport**: opaque vtable (`edxn_transport_t`) for ECU comms. Platform
  backends fill it in.
- **Trap state**: BEST/2 has soft errors gated by a mask + a "current bit
  number" register. Mirrors C# `EdiabasNet.SetError` semantics.
- **Loader callbacks**: `sgbd_loader` (GRP→PRG variant resolution),
  `table_loader` (tabsetex external table files).

### Opcode dispatch

`vm.c::dispatch()` routes by opcode hex into one of seven handler files. The
ranges mostly group by category but the BEST/2 ISA has historical gaps that
require explicit per-opcode cases. **All semantics mirror the TS reference at
`packages/interpreter/src/operations/*.ts`** — if you change behaviour here,
the TS code is the source of truth.

| File | Opcodes |
|------|---------|
| `opcodes_arith.c` | 0x00 move, 0x01 clear, 0x02–0x0A arithmetic + logic, 0x18–0x1B shifts, 0x3A–0x3E floats, 0x49/0x4A addc/subc, 0x6A test, 0xA1 fcomp |
| `opcodes_flow.c` | 0x0B–0x15 jumps/call/ret, 0x47/0x48 jt/jnt (trap-conditional), 0x5A–0x5F signed/unsigned comparison jumps |
| `opcodes_string.c` | 0x20–0x25 binary ops, 0x51/0x53/0x54 swap/srevrs/stoken, 0x79/0x7A fix2hex/fix2dez, 0x7E strcat, 0x87 flt2a, 0x8C a2y, 0x8E hex2y, 0x8F strcmp, 0x90–0x92 strlen/y2bcd/y2hex, 0xAB ufix2dez |
| `opcodes_result.c` | 0x34–0x39 ergb/ergw/ergd/ergi/ergr/ergs, 0x3F ergy, 0x40 enewset, 0x41 etag, 0x81/0x82 ergc/ergl, 0x95 ergsysi |
| `opcodes_table.c` | 0x7B/0x7C/0x7D tabset/tabseek/tabget, 0x83 tabline, 0x9A tabseeku, 0xAA tabsetex, 0xB6/0xB7 tabcols/tabrows |
| `opcodes_comm.c` | 0x26–0x33 xconnect/xhangup/xsetpar/xawlen/xsend/…/xtype/xvers, 0x42 xreps, 0x6E xbatt, 0x71–0x77 xgetport/xignit/xloopt/xprog/xraw/xsetport/xsireset |
| `opcodes_misc.c` | Everything else: stack ops (push/pop/atsp/popf/pushf), trap (sett/clrt/eerr/break/generr), date/time, parameters (parb/parw/parl/pars/parr/pary/parn), config (cfgig/cfgsg/cfgis), shared memory (shmset/shmget), file I/O (fopen/fread/freadln/fseek/fseekln/ftell/ftellln/fclose), float-byte conversions (flt2y4/flt2y8/y42flt/y82flt), wait/waitex/ticks |

### Polymorphic operand reads

A core BEST/2 idiom is "this opcode accepts any operand type and reads it as
the natural shape". The shared helpers in `vm_internal.h` cover this:

- `edxn_resolve_int(vm, op)` — int from immediate / int register / S register
  bytes (LE) / string literal bytes (LE) / indexed slice. Mirrors TS
  `readPolyValue`.
- `edxn_resolve_binary(vm, op, &len)` — raw bytes from any operand. Integer
  registers serialize to their LE byte representation (mirrors TS
  `readPolyBytes`). Returns NULL for `EDXN_OP_NONE`.
- `edxn_resolve_string(vm, op, buf, cap)` — NUL-terminated string from binary,
  truncated at first NUL.

If you're adding a new opcode that takes "an integer, however the bytecode
chose to express it", reach for these — don't switch on `op->kind` directly.

### Trap machinery

BEST/2 has a two-channel error model:

- `error_trap_mask` (uint32) — which BIP bits the program wants to ignore.
  Set via `settmr` (0x44), read via `gettmr` (0x43).
- `error_trap_bit_nr` (int32) — the most recently raised error's bit
  number, or -1 if no current trap. `0x40000000` is the "generic error"
  sentinel (transport failure that doesn't map to a specific BIP).

`sett` (0x45) sets `bit_nr`. `clrt` (0x46) clears it. `eerr` (0x4D) re-raises
when `bit_nr >= 0`. `jt`/`jnt` (0x47/0x48) jump conditional on
`bit_nr`, with arg1 optionally narrowing the match to a specific bit. See
`opcodes_misc.c::trap_is_detected` for the matching rules — they mirror TS
`isTrapErrorDetected` exactly.

The hot path in `comm_error()` (opcodes_comm.c) sets `bit_nr = 0x40000000`
when the trap mask is non-zero, letting the SGBD's own `jt` handle the
failure instead of bubbling an unchecked transport error.

### GRP → PRG variant switching

BMW ships two file types:

- **`.prg`** — a single ECU variant's diagnostic program.
- **`.grp`** — a "group" file whose only real job is `IDENTIFIKATION`, which
  probes the ECU through a sequence of concepts (CAN, DS1, DS2, …) and emits
  `VARIANTE = "MS420DS0"` once one matches.

The wrapper (`edxn_ediabas_load_sgbd` + first `edxn_ediabas_exec`) detects
a GRP via header `version == 0`, runs INITIALISIERUNG + IDENTIFIKATION,
scans for `VARIANTE`, and asks the registered `sgbd_loader` to produce the
matching `.prg`. The variant prg replaces the wrapper's `prg`; the
originally requested job is then looked up in the variant's job table.
The group → variant mapping is cached, so a subsequent `load_sgbd` of the
same `.grp` short-circuits straight to the variant `.prg` (matches TS
`Ediabas.groupMappingCache`).

`edxn_vm_exec` (legacy direct VM entry point) does the same auto-bootstrap
internally — kept around so existing consumers that haven't migrated to
the wrapper don't break. New code should use the wrapper. If no
`sgbd_loader` is registered, the GRP runs as-is — useful for embedded
hosts that ship a single hard-linked variant.

### tabsetex external tables

`tabsetex` (0xAA) takes a table name in arg0 and an optional external file
name in arg1. When arg1 is non-empty and a `table_loader` is registered, the
external file is loaded as a mini-PRG and its table registry becomes the
active source for subsequent `tabget`/`tabseek` calls. `tabset` (0x7B)
resets the source back to the loaded SGBD's own tables.

The `source_prg` field on `edxn_table_state_t` tracks which registry
`table_idx` indexes into — this is what lets the table opcodes work
uniformly across local + external registries without forking the code paths.

## Platform backends

Backends sit under `platform/<name>/` and provide the implementations that
the portable VM expects via callbacks. Currently:

- **`platform/posix/`** — POSIX serial (termios) + file-backed SGBD and
  table loaders (case-insensitive directory scan for BMW disk layout).

Future targets (ESP32, bare-metal) plug in here by implementing the same
transport + loader interfaces. See `include/ediabasx/transport.h` and the
loader signatures in `include/ediabasx/vm.h`.

## Result-set shape

`edxn_ediabas_exec` materialises results into `built_sets` matching the
native EDIABAS C-API shape (also used by the TS `Ediabas` class and C#
`EdiabasNet._resultSets`):

| Index | Content |
|-------|---------|
| `sets[0]` | **System set.** Always present. `VARIANTE`, `OBJECT`, `JOBNAME`, `SAETZE` (= data-set count), then merge from the persistent `system_results` accumulator (ECU/ORIGIN/REVISION/AUTHOR/COMMENT/PACKAGE/SPRACHE/JOB_STATUS, IDENT-resolved VARIANTE, …). |
| `sets[1..N]` | **Data sets.** One per `enewset`; the trailing `current_results` batch if non-empty. Multi-record jobs (e.g. `FS_LESEN`) emit one set per record. |

Access via:

- `edxn_ediabas_get_sets(eb, &count)` — full array (including system set at `[0]`).
- `edxn_ediabas_result_sets(eb)` — **data**-set count (i.e. `count - 1`). Matches `apiResultSets`.
- `edxn_ediabas_find_result(eb, name, set_index)` — `set_index = 0` reads the system set, `set_index >= 1` reads data sets.
- `edxn_ediabas_get_system_results(eb)` — the **persistent** accumulator (analogue of C# `_resultSysDict`). Survives across jobs; the per-job set-0 view is materialised fresh from it via `build_system_set` (mirrors `CreateSystemResultDict`).

The raw `edxn_vm_t.result_sets[]` (data sets only) and `edxn_vm_t.system_results` (per-job accumulator wiped on every `edxn_vm_reset`) remain accessible at the interpreter layer for embedders that don't want the wrapper's bookkeeping.

## Status vs the TS reference

The native port targets feature-parity with the TS interpreter for the
opcode dispatch surface, and now also with the TS `Ediabas` wrapper
class for the result-shape / system-set / variant-swap semantics. Three
ongoing gaps:

1. **Comm transport surface** is a subset of the TS
   `CommunicationInterface` — frequent-mode, port write, programming
   voltage, SI relay, loopback test, and multi-byte `xstate` work only on
   backends that implement the corresponding callback. Missing callbacks
   degrade to a silent no-op (preserves pre-audit behaviour, no hard fail).
2. **No simulation backend** — the TS port has a `SimulationInterface`
   that records and replays job traffic; the native port doesn't ship one
   yet. Use a real ECU or build one against the `edxn_transport_t` interface.
3. **No cooperative break / cancel signal** on the C VM yet. TS has
   `Interpreter.requestBreak()` (+ `Ediabas.break()` /
   `EmbeddedEdiabas.break()` / `EdiabasServer` break-method
   forwarding, bypassing the request queue) that aborts the
   in-flight job with `EDIABAS_BIP_0008`. The native port doesn't
   expose an equivalent yet.

The TS interpreter and TypeScript Ediabas class remain the source of truth
for every opcode's semantics. If you find a behavioural mismatch, the TS
side wins — file a fix against the C port.
