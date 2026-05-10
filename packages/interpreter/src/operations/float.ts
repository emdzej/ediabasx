/**
 * BEST2 Float Operations
 *
 * This module implements floating-point opcodes for the BEST2 interpreter:
 * - FADD, FSUB, FMUL, FDIV (float arithmetic)
 * - FCMP (float compare, set flags)
 * - FABS, FNEG (absolute value, negate)
 * - FTOI/ITOF (float to int / int to float)
 * - FTOS/STOF (float to string / string to float)
 * - FSQRT, FPOW (sqrt, power)
 * - FMOD (float modulo)
 * - FROUND, FFLOOR, FCEIL (rounding operations)
 *
 * All float operations work with F registers (F0-F7).
 * Float registers use IEEE 754 double precision (64-bit).
 */

import { RegisterSet } from "../registers";
import { Flags } from "../flags";
import type {
  FloatRegisterRef,
  IntRegisterRef,
  StringRegisterRef,
} from "./register-refs";
import {
  getFloatValue,
  getIntValue,
  getStringValue,
  setFloatValue,
  setIntValue,
  setStringValue,
} from "./register-values";

/**
 * Callback signature for the soft-error sink. C# float arithmetic calls
 * `SetError(EDIABAS_BIP_0011)` on Inf/NaN and **still writes** the result;
 * trap-mask-respecting termination happens via the standard error path.
 * The float-op functions write the result unconditionally and invoke this
 * callback when the result is Inf/NaN.
 */
export type FloatErrorSink = (op: string) => void;

export type {
  FloatRegisterRef,
  IntRegisterRef,
  StringRegisterRef,
} from "./register-refs";

// Types are defined in register-refs.

/**
 * Update flags based on float comparison result.
 */
function updateFloatFlags(flags: Flags, value: number): void {
  flags.z = value === 0 || Object.is(value, -0);
  flags.s = value < 0;
  flags.c = false;
  flags.v = !Number.isFinite(value);
}

/**
 * Update flags based on float comparison.
 */
function updateFloatCompareFlags(flags: Flags, left: number, right: number): void {
  const diff = left - right;
  if (!Number.isFinite(diff)) {
    flags.c = true;
  }
  // ReSharper disable once CompareOfFloatsByEqualityOperator
  flags.z = left === right;
  flags.s = left < right;
  flags.v = false;
}

/**
 * FADD - Float addition.
 *
 * destination = destination + source
 *
 * @param registers - Register set
 * @param flags - CPU flags (updated with result state)
 * @param destination - Destination F register (modified)
 * @param source - Source F register
 *
 * @example
 * ```ts
 * // F0 = 1.5, F1 = 2.5
 * fadd(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
 * // F0 = 4.0
 * ```
 */
export function fadd(
  registers: RegisterSet,
  flags: Flags,
  destination: FloatRegisterRef,
  source: FloatRegisterRef,
  onError?: FloatErrorSink
): void {
  void flags;
  const destValue = getFloatValue(registers, destination);
  const srcValue = getFloatValue(registers, source);
  const result = destValue + srcValue;
  // C# OpFadd writes the result first, then SetError(BIP_0011) on Inf/NaN.
  setFloatValue(registers, destination, result);
  if (!Number.isFinite(result) || Number.isNaN(result)) onError?.("fadd");
}

/**
 * FSUB - Float subtraction.
 *
 * destination = destination - source
 *
 * @param registers - Register set
 * @param flags - CPU flags (updated with result state)
 * @param destination - Destination F register (modified)
 * @param source - Source F register
 *
 * @example
 * ```ts
 * // F0 = 5.0, F1 = 2.5
 * fsub(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
 * // F0 = 2.5
 * ```
 */
export function fsub(
  registers: RegisterSet,
  flags: Flags,
  destination: FloatRegisterRef,
  source: FloatRegisterRef,
  onError?: FloatErrorSink
): void {
  void flags;
  const destValue = getFloatValue(registers, destination);
  const srcValue = getFloatValue(registers, source);
  const result = destValue - srcValue;
  setFloatValue(registers, destination, result);
  if (!Number.isFinite(result) || Number.isNaN(result)) onError?.("fsub");
}

/**
 * FMUL - Float multiplication.
 *
 * destination = destination * source
 *
 * @param registers - Register set
 * @param flags - CPU flags (updated with result state)
 * @param destination - Destination F register (modified)
 * @param source - Source F register
 *
 * @example
 * ```ts
 * // F0 = 3.0, F1 = 2.5
 * fmul(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
 * // F0 = 7.5
 * ```
 */
export function fmul(
  registers: RegisterSet,
  flags: Flags,
  destination: FloatRegisterRef,
  source: FloatRegisterRef,
  onError?: FloatErrorSink
): void {
  void flags;
  const destValue = getFloatValue(registers, destination);
  const srcValue = getFloatValue(registers, source);
  const result = destValue * srcValue;
  setFloatValue(registers, destination, result);
  if (!Number.isFinite(result) || Number.isNaN(result)) onError?.("fmul");
}

/**
 * FDIV - Float division.
 *
 * destination = destination / source
 * Division by zero results in Infinity or -Infinity.
 *
 * @param registers - Register set
 * @param flags - CPU flags (V set on div by zero or overflow)
 * @param destination - Destination F register (modified)
 * @param source - Source F register
 *
 * @example
 * ```ts
 * // F0 = 10.0, F1 = 4.0
 * fdiv(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
 * // F0 = 2.5
 * ```
 */
export function fdiv(
  registers: RegisterSet,
  flags: Flags,
  destination: FloatRegisterRef,
  source: FloatRegisterRef,
  onError?: FloatErrorSink
): void {
  void flags;
  const destValue = getFloatValue(registers, destination);
  const srcValue = getFloatValue(registers, source);
  const result = destValue / srcValue;
  setFloatValue(registers, destination, result);
  if (!Number.isFinite(result) || Number.isNaN(result)) onError?.("fdiv");
}

/**
 * FCMP - Float compare.
 *
 * Compares two floats and sets CPU flags.
 * - Z flag: set if equal
 * - S flag: set if left < right
 * - C flag: set if left < right (unsigned interpretation)
 * - V flag: set if either operand is NaN
 *
 * @param registers - Register set
 * @param flags - CPU flags (modified)
 * @param left - First F register
 * @param right - Second F register
 *
 * @example
 * ```ts
 * // F0 = 3.14, F1 = 2.71
 * fcmp(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
 * // Z = false, S = false (3.14 > 2.71)
 * ```
 */
export function fcmp(
  registers: RegisterSet,
  flags: Flags,
  left: FloatRegisterRef,
  right: FloatRegisterRef
): void {
  const leftValue = getFloatValue(registers, left);
  const rightValue = getFloatValue(registers, right);
  updateFloatCompareFlags(flags, leftValue, rightValue);
}

/**
 * FABS - Float absolute value.
 *
 * destination = |destination|
 *
 * @param registers - Register set
 * @param flags - CPU flags (updated)
 * @param destination - F register (modified in place)
 *
 * @example
 * ```ts
 * // F0 = -3.14
 * fabs(registers, flags, { kind: "F", index: 0 });
 * // F0 = 3.14
 * ```
 */
export function fabs(
  registers: RegisterSet,
  flags: Flags,
  destination: FloatRegisterRef
): void {
  const value = getFloatValue(registers, destination);
  const result = Math.abs(value);
  setFloatValue(registers, destination, result);
  updateFloatFlags(flags, result);
}

/**
 * FNEG - Float negate.
 *
 * destination = -destination
 *
 * @param registers - Register set
 * @param flags - CPU flags (updated)
 * @param destination - F register (modified in place)
 *
 * @example
 * ```ts
 * // F0 = 3.14
 * fneg(registers, flags, { kind: "F", index: 0 });
 * // F0 = -3.14
 * ```
 */
export function fneg(
  registers: RegisterSet,
  flags: Flags,
  destination: FloatRegisterRef
): void {
  const value = getFloatValue(registers, destination);
  const result = -value;
  setFloatValue(registers, destination, result);
  updateFloatFlags(flags, result);
}

/**
 * FTOI - Float to integer.
 *
 * Converts a float to an integer by truncating toward zero.
 * Sets V flag if value is out of integer range.
 *
 * @param registers - Register set
 * @param flags - CPU flags (V set on overflow/underflow)
 * @param destination - Destination integer register
 * @param source - Source F register
 *
 * @example
 * ```ts
 * // F0 = 3.7
 * ftoi(registers, flags, { kind: "L", index: 0 }, { kind: "F", index: 0 });
 * // L0 = 3
 * ```
 */
export function ftoi(
  registers: RegisterSet,
  flags: Flags,
  destination: IntRegisterRef,
  source: FloatRegisterRef
): void {
  const value = getFloatValue(registers, source);
  const truncated = Number.isFinite(value) ? Math.trunc(value) : 0;
  const raw = truncated >>> 0;

  setIntValue(registers, destination, raw);
  flags.v = false;
  flags.z = raw === 0;
  flags.s = (raw & 0x80000000) !== 0;
}

/**
 * ITOF - Integer to float.
 *
 * Converts an integer to a float.
 *
 * @param registers - Register set
 * @param destination - Destination F register
 * @param source - Source integer register
 *
 * @example
 * ```ts
 * // L0 = 42
 * itof(registers, { kind: "F", index: 0 }, { kind: "L", index: 0 });
 * // F0 = 42.0
 * ```
 */
export function itof(
  registers: RegisterSet,
  destination: FloatRegisterRef,
  source: IntRegisterRef
): void {
  const value = getIntValue(registers, source);
  let signedValue: number;

  switch (source.kind) {
    case "B":
    case "A":
      signedValue = value & 0x80 ? value - 0x100 : value;
      break;
    case "I":
      signedValue = value & 0x8000 ? value - 0x10000 : value;
      break;
    case "L":
      signedValue = value & 0x80000000 ? value - 0x100000000 : value;
      break;
    default:
      signedValue = value;
  }

  setFloatValue(registers, destination, signedValue);
}

/**
 * FTOS - Float to string.
 *
 * Converts a float to its string representation.
 *
 * @param registers - Register set
 * @param destination - Destination S register
 * @param source - Source F register
 * @param precisionReg - Optional precision (decimal places)
 *
 * @example
 * ```ts
 * // F0 = 3.14159
 * ftos(registers, { kind: "S", index: 0 }, { kind: "F", index: 0 });
 * // S0 = "3.14159"
 * ```
 */
export function ftos(
  registers: RegisterSet,
  destination: StringRegisterRef,
  source: FloatRegisterRef,
  precisionReg?: IntRegisterRef
): void {
  const value = getFloatValue(registers, source);
  
  let str: string;
  if (precisionReg) {
    const precision = getIntValue(registers, precisionReg);
    if (precision >= 0 && precision <= 20) {
      str = value.toFixed(precision);
    } else {
      str = value.toString();
    }
  } else {
    str = value.toString();
  }
  
  setStringValue(registers, destination, str);
}

/**
 * STOF - String to float.
 *
 * Parses a string as a floating-point number.
 * Sets flags: Z if parsing failed, V if result is not finite.
 *
 * @param registers - Register set
 * @param flags - CPU flags (Z set on parse error)
 * @param destination - Destination F register
 * @param source - Source S register
 *
 * @example
 * ```ts
 * // S0 = "3.14"
 * stof(registers, flags, { kind: "F", index: 0 }, { kind: "S", index: 0 });
 * // F0 = 3.14
 * ```
 */
export function stof(
  registers: RegisterSet,
  flags: Flags,
  destination: FloatRegisterRef,
  source: StringRegisterRef
): void {
  const str = getStringValue(registers, source).trim();
  const value = parseFloat(str);
  
  if (isNaN(value)) {
    setFloatValue(registers, destination, 0);
    flags.z = true;
    flags.c = true;
    flags.v = true;
    flags.s = false;
  } else {
    setFloatValue(registers, destination, value);
    flags.z = value === 0;
    flags.c = false;
    flags.v = !Number.isFinite(value);
    flags.s = value < 0;
  }
}

/**
 * FSQRT - Float square root.
 *
 * destination = sqrt(destination)
 * Sets V flag if input is negative (result is NaN).
 *
 * @param registers - Register set
 * @param flags - CPU flags (V set on error)
 * @param destination - F register (modified in place)
 *
 * @example
 * ```ts
 * // F0 = 16.0
 * fsqrt(registers, flags, { kind: "F", index: 0 });
 * // F0 = 4.0
 * ```
 */
export function fsqrt(
  registers: RegisterSet,
  flags: Flags,
  destination: FloatRegisterRef
): void {
  const value = getFloatValue(registers, destination);
  const result = Math.sqrt(value);
  setFloatValue(registers, destination, result);
  updateFloatFlags(flags, result);
}

/**
 * FPOW - Float power.
 *
 * destination = destination ^ exponent
 *
 * @param registers - Register set
 * @param flags - CPU flags (V set on error)
 * @param base - Base F register (modified to hold result)
 * @param exponent - Exponent F register
 *
 * @example
 * ```ts
 * // F0 = 2.0, F1 = 3.0
 * fpow(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
 * // F0 = 8.0
 * ```
 */
export function fpow(
  registers: RegisterSet,
  flags: Flags,
  base: FloatRegisterRef,
  exponent: FloatRegisterRef
): void {
  const baseValue = getFloatValue(registers, base);
  const expValue = getFloatValue(registers, exponent);
  const result = Math.pow(baseValue, expValue);
  setFloatValue(registers, base, result);
  updateFloatFlags(flags, result);
}

/**
 * FMOD - Float modulo.
 *
 * destination = destination % source
 *
 * @param registers - Register set
 * @param flags - CPU flags (V set on div by zero)
 * @param destination - Destination F register (modified)
 * @param source - Source F register (divisor)
 *
 * @example
 * ```ts
 * // F0 = 5.5, F1 = 2.0
 * fmod(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
 * // F0 = 1.5
 * ```
 */
export function fmod(
  registers: RegisterSet,
  flags: Flags,
  destination: FloatRegisterRef,
  source: FloatRegisterRef
): void {
  const destValue = getFloatValue(registers, destination);
  const srcValue = getFloatValue(registers, source);
  const result = destValue % srcValue;
  setFloatValue(registers, destination, result);
  updateFloatFlags(flags, result);
}

/**
 * FROUND - Round float to nearest integer.
 *
 * destination = round(destination)
 *
 * @param registers - Register set
 * @param flags - CPU flags (updated)
 * @param destination - F register (modified in place)
 *
 * @example
 * ```ts
 * // F0 = 3.7
 * fround(registers, flags, { kind: "F", index: 0 });
 * // F0 = 4.0
 * ```
 */
export function fround(
  registers: RegisterSet,
  flags: Flags,
  destination: FloatRegisterRef
): void {
  const value = getFloatValue(registers, destination);
  const result = Math.round(value);
  setFloatValue(registers, destination, result);
  updateFloatFlags(flags, result);
}

/**
 * FFLOOR - Floor float (round toward negative infinity).
 *
 * destination = floor(destination)
 *
 * @param registers - Register set
 * @param flags - CPU flags (updated)
 * @param destination - F register (modified in place)
 *
 * @example
 * ```ts
 * // F0 = 3.7
 * ffloor(registers, flags, { kind: "F", index: 0 });
 * // F0 = 3.0
 * ```
 */
export function ffloor(
  registers: RegisterSet,
  flags: Flags,
  destination: FloatRegisterRef
): void {
  const value = getFloatValue(registers, destination);
  const result = Math.floor(value);
  setFloatValue(registers, destination, result);
  updateFloatFlags(flags, result);
}

/**
 * FCEIL - Ceiling float (round toward positive infinity).
 *
 * destination = ceil(destination)
 *
 * @param registers - Register set
 * @param flags - CPU flags (updated)
 * @param destination - F register (modified in place)
 *
 * @example
 * ```ts
 * // F0 = 3.2
 * fceil(registers, flags, { kind: "F", index: 0 });
 * // F0 = 4.0
 * ```
 */
export function fceil(
  registers: RegisterSet,
  flags: Flags,
  destination: FloatRegisterRef
): void {
  const value = getFloatValue(registers, destination);
  const result = Math.ceil(value);
  setFloatValue(registers, destination, result);
  updateFloatFlags(flags, result);
}

/**
 * FCLEAR - Clear float register (set to 0.0).
 *
 * @param registers - Register set
 * @param destination - F register to clear
 *
 * @example
 * ```ts
 * fclear(registers, { kind: "F", index: 0 });
 * // F0 = 0.0
 * ```
 */
export function fclear(
  registers: RegisterSet,
  destination: FloatRegisterRef
): void {
  setFloatValue(registers, destination, 0);
}

/**
 * FCOPY - Copy float from source to destination.
 *
 * @param registers - Register set
 * @param destination - Destination F register
 * @param source - Source F register
 *
 * @example
 * ```ts
 * // F1 = 3.14
 * fcopy(registers, { kind: "F", index: 0 }, { kind: "F", index: 1 });
 * // F0 = 3.14
 * ```
 */
export function fcopy(
  registers: RegisterSet,
  destination: FloatRegisterRef,
  source: FloatRegisterRef
): void {
  const value = getFloatValue(registers, source);
  setFloatValue(registers, destination, value);
}

/**
 * FSET_IMM - Set float to immediate value.
 *
 * @param registers - Register set
 * @param destination - Destination F register
 * @param value - Float value to set
 *
 * @example
 * ```ts
 * fsetImm(registers, { kind: "F", index: 0 }, 3.14159);
 * // F0 = 3.14159
 * ```
 */
export function fsetImm(
  registers: RegisterSet,
  destination: FloatRegisterRef,
  value: number
): void {
  setFloatValue(registers, destination, value);
}

function stringToFloat(input: string): { result: number; valid: boolean } {
  let valid = false;
  let result = 0;

  const asciiOnly = [...input].every((char) => char.charCodeAt(0) <= 0x7f);
  if (!asciiOnly) {
    return { result, valid };
  }

  const normalized = input.replace(/,/g, ".").trim();
  if (normalized.length === 0) {
    return { result, valid };
  }

  const parsed = Number(normalized);
  if (!Number.isNaN(parsed)) {
    result = parsed;
    valid = true;
  }

  return { result, valid };
}

function roundToSignificantDigits(value: number, digits: number): number {
  if (value === 0) {
    return 0;
  }

  const scale = Math.pow(10, Math.floor(Math.log10(Math.abs(value))) + 1);
  return scale * Math.round(value / scale * Math.pow(10, digits)) / Math.pow(10, digits);
}

// Aliases for EdiabasLib compatibility
/**
 * FCOMP - Float compare (alias for FCMP).
 */
export const fcomp = fcmp;

/**
 * A2FLT - ASCII to float.
 */
export function a2flt(
  registers: RegisterSet,
  destination: FloatRegisterRef,
  source: StringRegisterRef
): void {
  const { result } = stringToFloat(getStringValue(registers, source));
  setFloatValue(registers, destination, result);
}

/**
 * FLT2A - Float to ASCII.
 */
export function flt2a(
  registers: RegisterSet,
  destination: StringRegisterRef,
  source: FloatRegisterRef,
  precision: number = 4
): void {
  const value = getFloatValue(registers, source);
  const valueConv = roundToSignificantDigits(value, precision);

  let result = `${valueConv}`;
  let digitCount = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] >= "0" && result[i] <= "9") {
      digitCount++;
      if (digitCount >= precision) {
        result = result.slice(0, i + 1);
        break;
      }
    }
  }

  setStringValue(registers, destination, result);
}

export const fix2flt = itof;
export const flt2fix = ftoi;
