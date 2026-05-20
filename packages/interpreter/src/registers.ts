import { cp1252ToUtf8, utf8ToCp1252 } from "@emdzej/ediabasx-core";

/**
 * BEST2 Register System
 *
 * Register types and their ranges:
 * - B0-BF (16 registers) + A0-AF (16 registers) = 32 x 8-bit registers
 * - I0-IF = 16 x 16-bit registers
 * - L0-L7 = 8 x 32-bit registers
 * - S0-SF = 16 x String registers (max length configurable, default 255)
 * - F0-F7 = 8 x Float/Double registers
 *
 * B/A/I/L all alias to a single 32-byte buffer (matches C# EdiabasNet._byteRegisters):
 *   B[n] at byte[n]          (n = 0..15)
 *   A[n] at byte[n + 16]     (n = 0..15)
 *   I[n] at byte[n*2..n*2+1] little-endian (n = 0..15; I8..IF overlap A0..AF)
 *   L[n] at byte[n*4..n*4+3] little-endian (n = 0..7;  L4..L7 overlap A0..AF)
 */

/** Default maximum string size (SSIZE) */
export const DEFAULT_SSIZE = 255;

/** Configuration options for RegisterSet */
export interface RegisterSetOptions {
  /** Maximum string length for S registers (default: 255) */
  maxStringSize?: number;
}

/**
 * Validates that a register index is within bounds.
 */
function validateIndex(reg: number, max: number, name: string): void {
  if (!Number.isInteger(reg) || reg < 0 || reg >= max) {
    throw new RangeError(
      `Register index ${reg} out of range for ${name} (0-${max - 1})`
    );
  }
}

/**
 * BEST2 Register Set implementation.
 *
 * Provides access to all BEST2 register types with proper bit-width enforcement
 * and overflow handling.
 */
export class RegisterSet {
  /** Shared 32-byte buffer that B/A/I/L register classes alias into. */
  private readonly byteRegisters: Uint8Array;

  /**
   * String S registers (S0–SF), stored as raw byte buffers with a separate
   * logical-length tracker. Mirrors C# EdiabasLib's `StringData` (a
   * fixed-capacity `byte[] _data` plus an `EdValueType _length`).
   *
   * **Why bytes, not strings.** BEST2 uses S registers for both text
   * (`tabget` results, `ergs` outputs) and binary buffers (`xsend`
   * responses, packed control payloads, counter slots written via
   * `move S[#$N], B`). When storage was a JS `string`, every byte-level
   * write/read went through a CP1252 ⇄ UTF-8 round-trip, which used to
   * mangle the five "undefined" CP1252 slots (`0x81, 0x8D, 0x8F, 0x90,
   * 0x9D`) into `0x3F`. The 0.2.2 codec patch closed those slots, but
   * the structural risk — every byte op pays codec cost, length is
   * UTF-16 code units rather than bytes, embedded `\0` confuses callers
   * — remained. Native `Uint8Array` storage eliminates the conversion
   * from the hot path. See `docs/s-register-refactor-proposal.md`.
   *
   * **Encoding now only at the string-view boundary.** `getS()` /
   * `setS()` are the only methods that touch `cp1252ToUtf8` /
   * `utf8ToCp1252`. Everything else (`getSBinary`, `setSBinary`,
   * indexed reads, byte-array compares) operates on raw bytes.
   */
  private readonly sBuffers: Uint8Array[];

  /**
   * Logical byte length of each S register's contents. `sBuffers[i]` is
   * always sized at `maxStringSize`, but the live content runs
   * `sBuffers[i][0..sLengths[i])`. Same model as C# `StringData._length`
   * vs `_data.Length`.
   */
  private readonly sLengths: number[];

  /** Float F registers (F0-F7) */
  private readonly fRegisters: Float64Array;

  /** Maximum string size for S registers */
  private readonly maxStringSize: number;

  /** Number of B registers */
  static readonly B_COUNT = 16;

  /** Number of A registers */
  static readonly A_COUNT = 16;

  /** Number of I registers */
  static readonly I_COUNT = 16;

  /** Number of L registers */
  static readonly L_COUNT = 8;

  /** Number of S registers */
  static readonly S_COUNT = 16;

  /** Number of F registers */
  static readonly F_COUNT = 8;

  /** Total size of the aliased byte register buffer. */
  static readonly BYTE_REGISTER_COUNT = 32;

  constructor(options: RegisterSetOptions = {}) {
    this.maxStringSize = options.maxStringSize ?? DEFAULT_SSIZE;

    this.byteRegisters = new Uint8Array(RegisterSet.BYTE_REGISTER_COUNT);
    this.sBuffers = new Array(RegisterSet.S_COUNT);
    for (let i = 0; i < RegisterSet.S_COUNT; i++) {
      this.sBuffers[i] = new Uint8Array(this.maxStringSize);
    }
    this.sLengths = new Array(RegisterSet.S_COUNT).fill(0);
    this.fRegisters = new Float64Array(RegisterSet.F_COUNT);
  }

  /**
   * Get the value of a B register (B0-BF).
   * @param reg Register index (0-15)
   * @returns 8-bit unsigned value (0-255)
   */
  getB(reg: number): number {
    validateIndex(reg, RegisterSet.B_COUNT, "B");
    return this.byteRegisters[reg];
  }

  /**
   * Set the value of a B register (B0-BF).
   * @param reg Register index (0-15)
   * @param value Value to set (will be masked to 8 bits)
   */
  setB(reg: number, value: number): void {
    validateIndex(reg, RegisterSet.B_COUNT, "B");
    this.byteRegisters[reg] = value & 0xff;
  }

  /**
   * Get the value of an A register (A0-AF).
   * @param reg Register index (0-15)
   * @returns 8-bit unsigned value (0-255)
   */
  getA(reg: number): number {
    validateIndex(reg, RegisterSet.A_COUNT, "A");
    return this.byteRegisters[reg + 16];
  }

  /**
   * Set the value of an A register (A0-AF).
   * @param reg Register index (0-15)
   * @param value Value to set (will be masked to 8 bits)
   */
  setA(reg: number, value: number): void {
    validateIndex(reg, RegisterSet.A_COUNT, "A");
    this.byteRegisters[reg + 16] = value & 0xff;
  }

  /**
   * Get the value of an I register (I0-IF).
   * Aliases two bytes of the shared register buffer (little-endian).
   * @param reg Register index (0-15)
   * @returns 16-bit unsigned value (0-65535)
   */
  getI(reg: number): number {
    validateIndex(reg, RegisterSet.I_COUNT, "I");
    const offset = reg << 1;
    return this.byteRegisters[offset] | (this.byteRegisters[offset + 1] << 8);
  }

  /**
   * Set the value of an I register (I0-IF).
   * Writes two bytes of the shared register buffer (little-endian).
   * @param reg Register index (0-15)
   * @param value Value to set (will be masked to 16 bits)
   */
  setI(reg: number, value: number): void {
    validateIndex(reg, RegisterSet.I_COUNT, "I");
    const offset = reg << 1;
    this.byteRegisters[offset] = value & 0xff;
    this.byteRegisters[offset + 1] = (value >>> 8) & 0xff;
  }

  /**
   * Get the value of an L register (L0-L7).
   * Aliases four bytes of the shared register buffer (little-endian).
   * @param reg Register index (0-7)
   * @returns 32-bit unsigned value (0-4294967295)
   */
  getL(reg: number): number {
    validateIndex(reg, RegisterSet.L_COUNT, "L");
    const offset = reg << 2;
    return (
      (this.byteRegisters[offset] |
        (this.byteRegisters[offset + 1] << 8) |
        (this.byteRegisters[offset + 2] << 16) |
        (this.byteRegisters[offset + 3] << 24)) >>>
      0
    );
  }

  /**
   * Set the value of an L register (L0-L7).
   * Writes four bytes of the shared register buffer (little-endian).
   * @param reg Register index (0-7)
   * @param value Value to set (will be masked to 32 bits)
   */
  setL(reg: number, value: number): void {
    validateIndex(reg, RegisterSet.L_COUNT, "L");
    const offset = reg << 2;
    const v = value >>> 0;
    this.byteRegisters[offset] = v & 0xff;
    this.byteRegisters[offset + 1] = (v >>> 8) & 0xff;
    this.byteRegisters[offset + 2] = (v >>> 16) & 0xff;
    this.byteRegisters[offset + 3] = (v >>> 24) & 0xff;
  }

  /**
   * Get the string view of an S register.
   *
   * Mirrors C# `Operand.GetStringData()`: walk `_data` to the first
   * `\0` (C-string terminator), CP1252-decode that slice, return the
   * resulting JS string. Bytes after the first NUL are not visible
   * through this method — use `getSBinary` for the raw buffer.
   *
   * This is the only S-register read path that touches the codec.
   * Indexed byte access (`getSBinary`), table-walking ops, and
   * byte-array compares (`scmp`) all stay in the raw-bytes domain.
   *
   * @param reg Register index (0-15)
   * @returns String value, terminated at first `0x00` (or end of buffer)
   */
  getS(reg: number): string {
    validateIndex(reg, RegisterSet.S_COUNT, "S");
    const buf = this.sBuffers[reg];
    const limit = this.sLengths[reg];
    let end = limit;
    for (let i = 0; i < limit; i++) {
      if (buf[i] === 0) {
        end = i;
        break;
      }
    }
    return cp1252ToUtf8(buf.subarray(0, end));
  }

  /**
   * Set the value of an S register from a JS string.
   *
   * CP1252-encodes the string into bytes and stores them via
   * `setSBinary`. Together with `getS`, this is the only path that
   * crosses the codec boundary.
   *
   * @param reg Register index (0-15)
   * @param value String value (will be truncated to maxStringSize on
   *   the byte side after CP1252 encoding)
   */
  setS(reg: number, value: string): void {
    this.setSBinary(reg, utf8ToCp1252(value));
  }

  /**
   * Get the raw binary content of an S register.
   *
   * Returns a fresh `Uint8Array` view of `_data[0..length)`. Callers
   * are free to mutate the result without affecting the register
   * (matches C# `StringData.GetData(false)` which `Array.Copy`s).
   *
   * @param reg Register index (0-15)
   * @returns Binary data as a fresh Uint8Array of length `sLengths[reg]`
   */
  getSBinary(reg: number): Uint8Array {
    validateIndex(reg, RegisterSet.S_COUNT, "S");
    const buf = this.sBuffers[reg];
    const len = this.sLengths[reg];
    // Return a copy so caller mutation doesn't corrupt the register.
    const out = new Uint8Array(len);
    out.set(buf.subarray(0, len));
    return out;
  }

  /**
   * Set the raw binary content of an S register.
   *
   * Copies up to `maxStringSize` bytes into the fixed-capacity backing
   * buffer and updates the logical length. Excess bytes are truncated
   * silently — C# signals `EDIABAS_BIP_0001` ("string size exceeded")
   * via `SetError` but our impl doesn't yet plumb error codes through
   * `RegisterSet`; a follow-up should route through a vm-level error
   * channel so over-long writes are visible.
   *
   * @param reg Register index (0-15)
   * @param value Binary data
   */
  setSBinary(reg: number, value: Uint8Array): void {
    validateIndex(reg, RegisterSet.S_COUNT, "S");
    const len = Math.min(value.length, this.maxStringSize);
    const buf = this.sBuffers[reg];
    buf.set(value.subarray(0, len), 0);
    // Zero out any tail beyond the new logical length so a subsequent
    // `getS` that walks past `len` (defensively — it shouldn't) doesn't
    // see stale bytes from a previous write. Matches the spirit of
    // `Array.Copy`-into-cleared-buffer used by C# for new data.
    if (len < this.sLengths[reg]) {
      buf.fill(0, len, this.sLengths[reg]);
    }
    this.sLengths[reg] = len;
  }

  /**
   * Get the value of an F register (F0-F7).
   * @param reg Register index (0-7)
   * @returns Float/Double value
   */
  getF(reg: number): number {
    validateIndex(reg, RegisterSet.F_COUNT, "F");
    return this.fRegisters[reg];
  }

  /**
   * Set the value of an F register (F0-F7).
   * @param reg Register index (0-7)
   * @param value Float/Double value
   */
  setF(reg: number, value: number): void {
    validateIndex(reg, RegisterSet.F_COUNT, "F");
    this.fRegisters[reg] = value;
  }

  /**
   * Get the configured maximum string size.
   */
  getMaxStringSize(): number {
    return this.maxStringSize;
  }

  /**
   * Reset all registers to their default values.
   * - Numeric registers are set to 0
   * - String registers are set to empty string
   */
  reset(): void {
    this.byteRegisters.fill(0);
    for (let i = 0; i < RegisterSet.S_COUNT; i++) {
      this.sBuffers[i].fill(0);
      this.sLengths[i] = 0;
    }
    this.fRegisters.fill(0);
  }

  /**
   * Create a snapshot of all register values for debugging.
   */
  snapshot(): RegisterSnapshot {
    const b: number[] = new Array(RegisterSet.B_COUNT);
    for (let i = 0; i < RegisterSet.B_COUNT; i++) {
      b[i] = this.byteRegisters[i];
    }
    const a: number[] = new Array(RegisterSet.A_COUNT);
    for (let i = 0; i < RegisterSet.A_COUNT; i++) {
      a[i] = this.byteRegisters[i + 16];
    }
    const iArr: number[] = new Array(RegisterSet.I_COUNT);
    for (let i = 0; i < RegisterSet.I_COUNT; i++) {
      iArr[i] = this.getI(i);
    }
    const l: number[] = new Array(RegisterSet.L_COUNT);
    for (let i = 0; i < RegisterSet.L_COUNT; i++) {
      l[i] = this.getL(i);
    }
    return {
      b,
      a,
      i: iArr,
      l,
      // Snapshot exposes the *string view* for debugging (matches the
      // previous `string[]` contract). Use `getSBinary` directly when
      // you need raw bytes — e.g. tooling that wants to surface
      // embedded NULs or compare lengths against `_data.Length`.
      s: Array.from({ length: RegisterSet.S_COUNT }, (_, i) => this.getS(i)),
      f: Array.from(this.fRegisters),
    };
  }
}

/**
 * Snapshot of all register values.
 */
export interface RegisterSnapshot {
  b: number[];
  a: number[];
  i: number[];
  l: number[];
  s: string[];
  f: number[];
}
