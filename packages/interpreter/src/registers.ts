/**
 * BEST2 Register System
 *
 * Register types and their ranges:
 * - B0-BF (16 registers) + A0-AF (16 registers) = 32 x 8-bit registers
 * - I0-IF = 16 x 16-bit registers
 * - L0-L7 = 8 x 32-bit registers
 * - S0-SF = 16 x String registers (max length configurable, default 255)
 * - F0-F7 = 8 x Float/Double registers
 */

/** Default maximum string size (SSIZE) */
export const DEFAULT_SSIZE = 255;

/** Configuration options for RegisterSet */
export interface RegisterSetOptions {
  /** Maximum string length for S registers (default: 255) */
  maxStringSize?: number;
}

/**
 * Masks a value to fit within the specified bit width.
 * Handles overflow by wrapping (modulo).
 */
function maskToWidth(value: number, bits: 8 | 16 | 32): number {
  // Convert to unsigned integer first
  const unsigned = value >>> 0;
  switch (bits) {
    case 8:
      return unsigned & 0xff;
    case 16:
      return unsigned & 0xffff;
    case 32:
      return unsigned >>> 0; // Ensure 32-bit unsigned
  }
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
  /** 8-bit B registers (B0-BF) */
  private readonly bRegisters: Uint8Array;

  /** 8-bit A registers (A0-AF) */
  private readonly aRegisters: Uint8Array;

  /** 16-bit I registers (I0-IF) */
  private readonly iRegisters: Uint16Array;

  /** 32-bit L registers (L0-L7) */
  private readonly lRegisters: Uint32Array;

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

  constructor(options: RegisterSetOptions = {}) {
    this.maxStringSize = options.maxStringSize ?? DEFAULT_SSIZE;

    this.bRegisters = new Uint8Array(RegisterSet.B_COUNT);
    this.aRegisters = new Uint8Array(RegisterSet.A_COUNT);
    this.iRegisters = new Uint16Array(RegisterSet.I_COUNT);
    this.lRegisters = new Uint32Array(RegisterSet.L_COUNT);
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
    return this.bRegisters[reg];
  }

  /**
   * Set the value of a B register (B0-BF).
   * @param reg Register index (0-15)
   * @param value Value to set (will be masked to 8 bits)
   */
  setB(reg: number, value: number): void {
    validateIndex(reg, RegisterSet.B_COUNT, "B");
    this.bRegisters[reg] = maskToWidth(value, 8);
  }

  /**
   * Get the value of an A register (A0-AF).
   * @param reg Register index (0-15)
   * @returns 8-bit unsigned value (0-255)
   */
  getA(reg: number): number {
    validateIndex(reg, RegisterSet.A_COUNT, "A");
    return this.aRegisters[reg];
  }

  /**
   * Set the value of an A register (A0-AF).
   * @param reg Register index (0-15)
   * @param value Value to set (will be masked to 8 bits)
   */
  setA(reg: number, value: number): void {
    validateIndex(reg, RegisterSet.A_COUNT, "A");
    this.aRegisters[reg] = maskToWidth(value, 8);
  }

  /**
   * Get the value of an I register (I0-IF).
   * @param reg Register index (0-15)
   * @returns 16-bit unsigned value (0-65535)
   */
  getI(reg: number): number {
    validateIndex(reg, RegisterSet.I_COUNT, "I");
    return this.iRegisters[reg];
  }

  /**
   * Set the value of an I register (I0-IF).
   * @param reg Register index (0-15)
   * @param value Value to set (will be masked to 16 bits)
   */
  setI(reg: number, value: number): void {
    validateIndex(reg, RegisterSet.I_COUNT, "I");
    this.iRegisters[reg] = maskToWidth(value, 16);
  }

  /**
   * Get the value of an L register (L0-L7).
   * @param reg Register index (0-7)
   * @returns 32-bit unsigned value (0-4294967295)
   */
  getL(reg: number): number {
    validateIndex(reg, RegisterSet.L_COUNT, "L");
    return this.lRegisters[reg];
  }

  /**
   * Set the value of an L register (L0-L7).
   * @param reg Register index (0-7)
   * @param value Value to set (will be masked to 32 bits)
   */
  setL(reg: number, value: number): void {
    validateIndex(reg, RegisterSet.L_COUNT, "L");
    this.lRegisters[reg] = maskToWidth(value, 32);
  }

  /**
   * Get the value of an S register (S0-SF).
   * @param reg Register index (0-15)
   * @returns String value
   */
  getS(reg: number): string {
    validateIndex(reg, RegisterSet.S_COUNT, "S");
    return this.sRegisters[reg];
  }

  /**
   * Set the value of an S register (S0-SF).
   * @param reg Register index (0-15)
   * @param value String value (will be truncated to maxStringSize)
   */
  setS(reg: number, value: string): void {
    validateIndex(reg, RegisterSet.S_COUNT, "S");
    // Truncate to max string size
    this.sRegisters[reg] =
      value.length > this.maxStringSize
        ? value.slice(0, this.maxStringSize)
        : value;
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
    this.bRegisters.fill(0);
    this.aRegisters.fill(0);
    this.iRegisters.fill(0);
    this.lRegisters.fill(0);
    this.sRegisters.fill("");
    this.fRegisters.fill(0);
  }

  /**
   * Create a snapshot of all register values for debugging.
   */
  snapshot(): RegisterSnapshot {
    return {
      b: Array.from(this.bRegisters),
      a: Array.from(this.aRegisters),
      i: Array.from(this.iRegisters),
      l: Array.from(this.lRegisters),
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
