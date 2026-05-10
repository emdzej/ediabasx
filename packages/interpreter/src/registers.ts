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

  /** String S registers (S0-SF) */
  private readonly sRegisters: string[];

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
    this.sRegisters = new Array(RegisterSet.S_COUNT).fill("");
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
   * Get the value of an S register (S0-SF).
   *
   * Mirrors C# `Operand.GetStringData()` for the common case: when operations
   * like `move S, ImmStr` / `tabget` store data via `SetStringData` they append
   * a trailing NUL byte to `_data` so the stored length includes it (needed for
   * length-sensitive byte-array compares like `scmp`). The string-level view
   * should not surface that terminator. Use `getSBinary` for the raw bytes.
   *
   * @param reg Register index (0-15)
   * @returns String value (single trailing NUL stripped if present)
   */
  getS(reg: number): string {
    validateIndex(reg, RegisterSet.S_COUNT, "S");
    const stored = this.sRegisters[reg];
    return stored.endsWith("\0") ? stored.slice(0, -1) : stored;
  }

  /**
   * Set the value of an S register (S0-SF).
   * @param reg Register index (0-15)
   * @param value String value (will be truncated to maxStringSize)
   */
  setS(reg: number, value: string): void {
    validateIndex(reg, RegisterSet.S_COUNT, "S");
    this.sRegisters[reg] =
      value.length > this.maxStringSize
        ? value.slice(0, this.maxStringSize)
        : value;
  }

  /**
   * Get binary data from an S register.
   * Converts the UTF-8 string back to cp1252 bytes.
   * @param reg Register index (0-15)
   * @returns Binary data as Uint8Array
   */
  getSBinary(reg: number): Uint8Array {
    validateIndex(reg, RegisterSet.S_COUNT, "S");
    return utf8ToCp1252(this.sRegisters[reg]);
  }

  /**
   * Set binary data to an S register.
   * Converts cp1252 bytes to UTF-8 string for storage.
   * @param reg Register index (0-15)
   * @param value Binary data
   */
  setSBinary(reg: number, value: Uint8Array): void {
    validateIndex(reg, RegisterSet.S_COUNT, "S");
    const str = cp1252ToUtf8(value);
    this.sRegisters[reg] =
      str.length > this.maxStringSize
        ? str.slice(0, this.maxStringSize)
        : str;
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
    this.sRegisters.fill("");
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
      s: [...this.sRegisters],
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
