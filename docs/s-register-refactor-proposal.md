# Refactor proposal: S-register storage as `Uint8Array`

**Status:** proposal — not implemented. The byte-level corruption that this proposal targets has been mitigated by [making the CP1252 encode table cover the 5 undefined slots](../packages/core/src/encoding.ts) so binary data survives the bytes ↔ string round-trip. That fix is sufficient for the C_FA_LESEN class of bug. This document captures the longer-term direction.

## Why

The BEST2 S registers (S0–SF) are used in two distinct ways:

1. **String storage** — `move S, "literal"`, `tabget`, `realtostring` results, error messages. UTF-8/CP1252 conversions are meaningful here.
2. **Binary byte buffers** — `xsend` responses land in S, `move S[#$N], B` writes individual bytes (used as counters, pointers, packed structs), `tabseek` reads bytes for table lookup.

Our current implementation stores S as a `string[]` and converts at the boundary:

```ts
// packages/interpreter/src/registers.ts
private readonly sRegisters: string[];

setSBinary(reg: number, value: Uint8Array): void {
  const str = cp1252ToUtf8(value);                  // bytes → JS string
  this.sRegisters[reg] = str.slice(0, this.maxStringSize);
}

getSBinary(reg: number): Uint8Array {
  return utf8ToCp1252(this.sRegisters[reg]);        // string → bytes
}
```

The C_FA_LESEN hang exposed the cost: any byte value whose CP1252 → Unicode → CP1252 round-trip isn't bit-exact silently corrupts. The 5 CP1252-undefined slots (`0x81, 0x8D, 0x8F, 0x90, 0x9D`) were the immediate trigger. Even with those patched, the model has structural issues:

- **Performance.** Every byte-level read/write (and BEST2 jobs do a lot of these — `xsend` response parsing, table lookups, byte-counter increments) goes through two TextDecoder/TextEncoder conversions. A 36-byte response → 36-char string → 36-byte read on each comp is wasted work.
- **Length semantics drift.** A JS `string`'s `.length` counts UTF-16 code units, not bytes. Any non-BMP character (none appear in CP1252 today, but the type allows them) would make `.length !== byte_count`. Length-sensitive opcodes (`scmp`, `slen`, `serase`) currently rely on the invariant that 1 char ≡ 1 byte — true for CP1252 but fragile.
- **Trailing-NUL hacks.** `getS` strips a trailing `"\0"` because `setSBinary` of bytes ending in NUL leaves one in the string; some callers want the NUL (for `scmp`), some don't (for display). The split is enforced by a comment, not the type system.

## Proposed shape

Store S as `Uint8Array[]` natively, expose string views as derived methods:

```ts
class RegisterSet {
  private readonly sRegisters: Uint8Array[];   // ← was string[]
  private readonly maxStringSize: number;

  /** Raw binary view — primary storage, no conversions. */
  getSBinary(reg: number): Uint8Array {
    validateIndex(reg, RegisterSet.S_COUNT, "S");
    return this.sRegisters[reg];               // hand out a view; copy on write
  }

  setSBinary(reg: number, value: Uint8Array): void {
    validateIndex(reg, RegisterSet.S_COUNT, "S");
    const truncated = value.length > this.maxStringSize
      ? value.subarray(0, this.maxStringSize)
      : value;
    this.sRegisters[reg] = new Uint8Array(truncated);  // own a copy
  }

  /** String view — for display, message boxes, ergs results. Converts lazily. */
  getS(reg: number): string {
    const bytes = this.sRegisters[reg];
    // Strip single trailing NUL (matches GetStringData convention).
    const end = bytes.length > 0 && bytes[bytes.length - 1] === 0
      ? bytes.length - 1
      : bytes.length;
    return cp1252ToUtf8(bytes.subarray(0, end));
  }

  setS(reg: number, value: string): void {
    this.setSBinary(reg, utf8ToCp1252(value));
  }

  /** Indexed byte access — the hot path for binary jobs. */
  getSByte(reg: number, offset: number): number {
    return this.sRegisters[reg][offset] ?? 0;
  }

  setSByte(reg: number, offset: number, byte: number): void {
    const buf = this.sRegisters[reg];
    if (offset >= buf.length) {
      // Extend (capped at maxStringSize).
      const next = new Uint8Array(Math.min(offset + 1, this.maxStringSize));
      next.set(buf);
      this.sRegisters[reg] = next;
    }
    this.sRegisters[reg][offset] = byte & 0xff;
  }
}
```

## Migration cost

- **Touch surface:** `packages/interpreter/src/registers.ts`, plus every consumer of `getS`/`setS`/`getSBinary`/`setSBinary`. A grep shows ~40 call sites across `operations/` (string ops, communication, time, result, parameters), the interpreter's indexed-move dispatch, and a few tests.
- **No bytecode-level change.** Opcode handlers keep their existing signatures; only the underlying register class changes.
- **CP1252 helpers stay.** They're still needed at the string-view boundary (`getS`, `setS`, `ergs`-style result emission). The fix that landed this week (allowing 0x80..0x9F to round-trip) becomes a defensive measure rather than a correctness requirement.
- **Tests:** existing `string.spec.ts` and `flags.spec.ts` exercise S-register behaviour pretty thoroughly — refactor regression coverage is in place.

## Risks

- **Behavioural drift on string-typed sites.** `tabget` of a CP1252-text column writes bytes via `setSBinary`; readers via `getS` need to keep getting the trimmed-NUL string. The proposed `getS` preserves that semantics.
- **`scmp` length semantics.** Currently `scmp` compares byte-arrays — that path already uses `getSBinary` and is unaffected.
- **`ergs` (string result emission).** Goes through `getS` (string view). Unchanged.
- **Web bundle.** `TextEncoder`/`TextDecoder` are still browser-available; the refactor doesn't change that.

## When to take this on

- After the next user-facing milestone — this is a structural refactor, not a feature.
- Together with — or after — a planned audit of `serase` / `scmp` / `sset` to make sure their semantics match C# `EdiabasNet` byte-array compares for all edge cases (empty strings, trailing NULs, length-suffixed `S[i]L` reads). The audit is the better trigger: when those semantics change, switching the underlying storage in the same commit is cheap.

## Reference: the bug this proposal would have prevented

Single-line repro:

```ts
const r = new RegisterSet();
r.setSBinary(0, Uint8Array.from([0x81]));
const b = r.getSBinary(0)[0];
// Pre-fix: b === 0x3F (CP1252 round-trip via encode-table excluded the 0x81 slot)
// Post-fix (current): b === 0x81 (round-trip preserved)
// Post-refactor: b === 0x81 (no conversion involved at all)
```

In context: C_FA_LESEN's loop-3 counter at `S0[#$0..1]` would hit byte `0x81` on the way to its `0x180` exit max, get silently rewritten as `0x3F`, and loop forever within the `0x40..0x81` range. The current encode-table fix patches the symptom in core; the refactor would eliminate the entire conversion in the hot path.
