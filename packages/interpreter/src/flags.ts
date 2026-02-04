/**
 * BEST2 CPU Flags
 *
 * The Flags class implements CPU status flags used by conditional jump instructions.
 * These flags are updated after arithmetic and comparison operations.
 *
 * Flags:
 * - Z (Zero)     - Set when result equals 0
 * - C (Carry)    - Set on unsigned overflow (result exceeds bit width)
 * - V (Overflow) - Set on signed overflow (sign bit changes unexpectedly)
 * - S (Sign)     - Set when result is negative (MSB is 1)
 *
 * Usage with conditional jumps:
 * - jz/jnz   - Jump if zero / not zero
 * - jc/jnc   - Jump if carry / no carry
 * - jmi/jpl  - Jump if minus / plus (sign flag)
 * - jov/jnov - Jump if overflow / no overflow
 */

/** Supported bit widths for flag operations */
export type BitWidth = 8 | 16 | 32;

/** Maximum unsigned values for each bit width */
const MAX_UNSIGNED: Record<BitWidth, number> = {
  8: 0xff,
  16: 0xffff,
  32: 0xffffffff,
};

/** Maximum signed values for each bit width */
const MAX_SIGNED: Record<BitWidth, number> = {
  8: 0x7f, // 127
  16: 0x7fff, // 32767
  32: 0x7fffffff, // 2147483647
};

/** Minimum signed values for each bit width */
const MIN_SIGNED: Record<BitWidth, number> = {
  8: -128,
  16: -32768,
  32: -2147483648,
};

/** Sign bit masks for each bit width */
const SIGN_BIT: Record<BitWidth, number> = {
  8: 0x80,
  16: 0x8000,
  32: 0x80000000,
};

/**
 * Converts an unsigned value to its signed representation for the given bit width.
 */
function toSigned(value: number, bits: BitWidth): number {
  const masked = (value >>> 0) & MAX_UNSIGNED[bits];
  if (masked & SIGN_BIT[bits]) {
    // Value has sign bit set, convert to negative
    return masked - (MAX_UNSIGNED[bits] + 1);
  }
  return masked;
}

/**
 * BEST2 CPU Flags implementation.
 *
 * Provides status flags that are updated after arithmetic operations
 * and used by conditional jump instructions.
 */
export class Flags {
  /** Zero flag - set when result is 0 */
  z: boolean = false;

  /** Carry flag - set on unsigned overflow */
  c: boolean = false;

  /** Overflow flag - set on signed overflow */
  v: boolean = false;

  /** Sign flag - set when result is negative (MSB is 1) */
  s: boolean = false;

  /**
   * Updates all flags based on an arithmetic result.
   *
   * This method should be called after arithmetic operations (ADD, SUB, INC, DEC, etc.)
   * to update the flags appropriately.
   *
   * @param value - The result value (can be outside the bit width range)
   * @param bits - The bit width of the operation (8, 16, or 32)
   *
   * @example
   * ```ts
   * flags.updateFromResult(0, 8);     // Z=true, C=false, V=false, S=false
   * flags.updateFromResult(256, 8);   // Z=true, C=true, V=false, S=false (overflow)
   * flags.updateFromResult(-1, 8);    // Z=false, C=true, V=false, S=true (255 as unsigned)
   * flags.updateFromResult(128, 8);   // Z=false, C=false, V=false, S=true (negative in signed)
   * ```
   */
  updateFromResult(value: number, bits: BitWidth): void {
    const maxUnsigned = MAX_UNSIGNED[bits];
    const signBit = SIGN_BIT[bits];

    // Mask the value to the bit width
    const masked = (value >>> 0) & maxUnsigned;

    // Z flag: set if masked result is 0
    this.z = masked === 0;

    // C flag: set if unsigned overflow occurred
    // This happens when the original value is outside [0, maxUnsigned]
    this.c = value < 0 || value > maxUnsigned;

    // S flag: set if MSB (sign bit) is 1
    this.s = (masked & signBit) !== 0;

    // V flag: set if signed overflow occurred
    // For single-value update, we check if the value exceeds signed bounds
    const signedValue = toSigned(masked, bits);
    const minSigned = MIN_SIGNED[bits];
    const maxSigned = MAX_SIGNED[bits];
    this.v = value < minSigned || value > maxSigned;
  }

  /**
   * Updates flags based on a comparison operation (a - b).
   *
   * This method simulates a subtraction without storing the result,
   * updating flags as if `result = a - b` was computed.
   *
   * Used by CMP instructions to set flags for conditional jumps.
   *
   * @param a - First operand (minuend)
   * @param b - Second operand (subtrahend)
   * @param bits - The bit width of the operation (8, 16, or 32). Defaults to 32.
   *
   * @example
   * ```ts
   * flags.updateFromCompare(5, 5);    // Z=true (equal)
   * flags.updateFromCompare(3, 5);    // Z=false, S=true, C=true (a < b unsigned)
   * flags.updateFromCompare(5, 3);    // Z=false, S=false, C=false (a > b)
   * ```
   */
  updateFromCompare(a: number, b: number, bits: BitWidth = 32): void {
    const maxUnsigned = MAX_UNSIGNED[bits];
    const signBit = SIGN_BIT[bits];

    // Mask operands to bit width
    const maskedA = (a >>> 0) & maxUnsigned;
    const maskedB = (b >>> 0) & maxUnsigned;

    // Compute the subtraction result
    const result = maskedA - maskedB;
    const maskedResult = (result >>> 0) & maxUnsigned;

    // Z flag: set if result is 0 (a == b)
    this.z = maskedResult === 0;

    // C flag: set if unsigned borrow occurred (a < b as unsigned)
    this.c = maskedA < maskedB;

    // S flag: set if result has sign bit set
    this.s = (maskedResult & signBit) !== 0;

    // V flag: set if signed overflow occurred in subtraction
    // Overflow happens when: positive - negative = negative, or negative - positive = positive
    const signedA = toSigned(maskedA, bits);
    const signedB = toSigned(maskedB, bits);
    const signedResult = toSigned(maskedResult, bits);

    // Signed overflow: the sign of the result is wrong given the signs of operands
    // For a - b: overflow if (a > 0 && b < 0 && result < 0) || (a < 0 && b > 0 && result > 0)
    const aPos = signedA >= 0;
    const bPos = signedB >= 0;
    const rPos = signedResult >= 0;

    this.v = (aPos && !bPos && !rPos) || (!aPos && bPos && rPos);
  }

  /**
   * Resets all flags to their default state (false).
   */
  reset(): void {
    this.z = false;
    this.c = false;
    this.v = false;
    this.s = false;
  }

  /**
   * Creates a snapshot of the current flag state for debugging.
   */
  snapshot(): FlagSnapshot {
    return {
      z: this.z,
      c: this.c,
      v: this.v,
      s: this.s,
    };
  }

  /**
   * Returns a string representation of the flags.
   * Active flags are shown as uppercase letters, inactive as dashes.
   *
   * @example
   * ```ts
   * flags.z = true; flags.s = true;
   * flags.toString(); // "Z--S"
   * ```
   */
  toString(): string {
    return [
      this.z ? "Z" : "-",
      this.c ? "C" : "-",
      this.v ? "V" : "-",
      this.s ? "S" : "-",
    ].join("");
  }
}

/**
 * Snapshot of flag values.
 */
export interface FlagSnapshot {
  z: boolean;
  c: boolean;
  v: boolean;
  s: boolean;
}
