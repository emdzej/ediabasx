# Opcode comparison: TypeScript interpreter vs EdiabasLib

This document summarizes how our TypeScript interpreter opcode implementations compare to **EdiabasLib** (EdiabasNet.cs `OcList`). It highlights what is fully implemented, partial, stubbed, or not implemented, and calls out known differences and future work.

## Overview

- The TypeScript interpreter covers the full opcode table and provides handlers for each opcode ID.
- Most opcodes are fully implemented and match EdiabasLib behavior closely.
- A small set of opcodes are **partial** (behavior simplified) or **stubbed** (legacy opcodes with `null` handlers in EdiabasLib).
- Some opcodes that EdiabasLib implements are currently no-op in the TS interpreter and need follow‑up work.

## Comparison methodology

1. **Reference source:** EdiabasLib `EdiabasNet.cs` opcode list (`OcList`).
2. **TypeScript source:** `packages/interpreter/src/interpreter.ts` handler map and `packages/interpreter/src/operations/*`.
3. **Status bucket:**
   - **Fully implemented** – behavior matches EdiabasLib or is functionally equivalent.
   - **Partial** – implemented but simplified or missing some side‑effects.
   - **Stub (EdiabasLib null)** – EdiabasLib lists a `null` handler (legacy opcode); TS keeps no‑op/empty behavior for compatibility.
   - **Not implemented** – EdiabasLib provides behavior, but TS handler is a no‑op or missing key behavior.

## Status by category

### Fully implemented

All opcodes listed in [`docs/opcodes.md`](./opcodes.md) **except** those called out below are treated as fully implemented. These cover arithmetic, flow control, strings, floats, results, parameters, timers, tables, shared memory, and core interface ops.

### Partial implementations

| Opcode | Mnemonic | Notes |
| --- | --- | --- |
| 0x20 | `scmp` | Only sets `Z` flag; EdiabasLib sets additional flags (S/C) on compare. |
| 0x6B | `wait` | Uses seconds (`value * 1000`) while docs note milliseconds; confirm against EdiabasLib. |
| 0x89 | `cfgig` | Stubbed to return `0` (no config lookup). |
| 0x8A | `cfgsg` | Read‑only config lookup; no “set” behavior implemented. |
| 0x8B | `cfgis` | Stubbed to return `0` (not set). |
| 0xA2 | `plinkv` | No validation; behaves like a basic link. |
| 0xA9 | `pjtsr` | No‑op; procedure subroutine jumps not supported. |
| 0xAC | `generr` | Throws a generic error without recording EDIABAS error results. |

### Stub (EdiabasLib null)

EdiabasLib’s opcode list marks these as `null` handlers (legacy). We keep no‑op or empty behavior for compatibility:

| Opcode | Mnemonic | TS behavior |
| --- | --- | --- |
| 0x6F | `tosp` | No‑op |
| 0x70 | `xdownl` | No‑op |
| 0x78 | `xstoptr` | No‑op |
| 0x84 | `xsendr` | Clears response string |
| 0x85 | `xrecv` | Clears destination string |
| 0x86 | `xinfo` | Returns empty string |
| 0x8D | `xparraw` | No‑op |
| 0xAF | `xopen` | No‑op |
| 0xB0 | `xclose` | No‑op |
| 0xB1 | `xcloseex` | No‑op |
| 0xB2 | `xswitch` | No‑op |
| 0xB3 | `xsendex` | No‑op |
| 0xB4 | `xrecvex` | Clears destination string |

### Not implemented (EdiabasLib has behavior)

These opcodes are no‑op in the TS interpreter but are expected to execute logic in EdiabasLib:

| Opcode | Mnemonic | Gap |
| --- | --- | --- |
| 0xA0 | `pcall` | Procedure calls are not wired; no handler invocation. |

## Notable differences / limitations

- **Procedure calls:** `plink` is supported, but `pcall` is currently a no‑op. This blocks external procedure invocation chains.
- **Configuration opcodes:** `cfgig`/`cfgis` are hard‑coded to `0`; `cfgsg` only reads a normalized config map.
- **String compare flags:** `scmp` sets only `Z` flag (others ignored).
- **Timing semantics:** `wait` uses seconds, while `waitex` uses milliseconds. Verify against EdiabasLib and align units.
- **Legacy interface ops:** `xsendr`, `xrecv`, `xinfo`, `xopen/xclose/xcloseex/xswitch/xsendex/xrecvex` are currently stubs with no interface interaction.
- **`generr` behavior:** throws a generic interpreter error without populating `F_ERRORCODE`/`F_ERRORTEXT` results.

## Future work

1. Implement `pcall` and `pjtsr` to enable procedure call stacks and subroutines.
2. Wire legacy interface opcodes (`xsendr`, `xrecv`, `xopen`, `xclose*`, `xswitch`, `xsendex`, `xrecvex`) to the communication interface.
3. Implement full config semantics for `cfgig`, `cfgsg`, `cfgis`.
4. Align `scmp` flag behavior with EdiabasLib (Z/S/C).
5. Resolve `wait` unit discrepancy and document consistent timing semantics.
6. Enhance `generr` to emit standard error results before throwing.
