import { RegisterSet } from "../registers";
import { Flags, type BitWidth } from "../flags";
import { getIntValue, setIntValue } from "./register-values";
import type { AnyRegisterRef } from "./register-refs";

export const RegisterKinds = {
  B: "B",
  A: "A",
  I: "I",
  L: "L",
} as const;

export type RegisterKind =
  (typeof RegisterKinds)[keyof typeof RegisterKinds];

export type RegisterRef = {
  kind: RegisterKind;
  index: number;
};

export type RegisterOrValue = RegisterRef | number;

const REGISTER_BIT_WIDTHS: Record<RegisterKind, BitWidth> = {
  B: 8,
  A: 8,
  I: 16,
  L: 32,
};

const MAX_UNSIGNED: Record<BitWidth, number> = {
  8: 0xff,
  16: 0xffff,
  32: 0xffffffff,
};

const SIGN_MASK: Record<BitWidth, number> = {
  8: 0x80,
  16: 0x8000,
  32: 0x80000000,
};

function getBitWidth(register: RegisterRef): BitWidth {
  return REGISTER_BIT_WIDTHS[register.kind];
}


function maskValue(value: number, bits: BitWidth): number {
  const unsigned = value >>> 0;
  if (bits === 32) {
    return unsigned;
  }
  return unsigned & MAX_UNSIGNED[bits];
}

function resolveRightValue(registers: RegisterSet, right: RegisterOrValue): number {
  if (typeof right === "number") {
    return right;
  }
  return getIntValue(registers, right);
}

function updateZeroSign(flags: Flags, value: number, bits: BitWidth): void {
  const masked = maskValue(value, bits);
  flags.z = masked === 0;
  flags.s = (masked & SIGN_MASK[bits]) !== 0;
}

function isNegative(value: number, bits: BitWidth): boolean {
  return (maskValue(value, bits) & SIGN_MASK[bits]) !== 0;
}

function setOverflowAdd(
  flags: Flags,
  left: number,
  right: number,
  result: number,
  bits: BitWidth
): void {
  const signLeft = isNegative(left, bits);
  const signRight = isNegative(right, bits);
  const signResult = isNegative(result, bits);
  flags.v = signLeft === signRight && signResult !== signLeft;
}

function setOverflowSub(
  flags: Flags,
  left: number,
  right: number,
  result: number,
  bits: BitWidth
): void {
  const signLeft = isNegative(left, bits);
  const signRight = isNegative(right, bits);
  const signResult = isNegative(result, bits);
  flags.v = signLeft !== signRight && signResult !== signLeft;
}

function getSignedValue(value: number, bits: BitWidth): number {
  const masked = maskValue(value, bits);
  const signMask = SIGN_MASK[bits];
  if ((masked & signMask) === 0) {
    return masked;
  }
  return masked - (MAX_UNSIGNED[bits] + 1);
}

function getShiftAmount(value: number): number {
  return value | 0;
}

export function add(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef,
  source: RegisterOrValue
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const value1 = maskValue(resolveRightValue(registers, source), bits);
  const sum = value0 + value1;
  const result = maskValue(sum, bits);

  setIntValue(registers, destination, result);
  updateZeroSign(flags, result, bits);
  setOverflowAdd(flags, value0, value1, result, bits);
  flags.c = sum > MAX_UNSIGNED[bits];
}

export function sub(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef,
  source: RegisterOrValue
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const value1 = maskValue(resolveRightValue(registers, source), bits);
  const diff = value0 - value1;
  const result = maskValue(diff, bits);

  setIntValue(registers, destination, result);
  updateZeroSign(flags, result, bits);
  setOverflowSub(flags, value0, value1, result, bits);
  flags.c = value0 < value1;
}

export function mul(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef,
  source: RegisterOrValue
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const value1 = maskValue(resolveRightValue(registers, source), bits);

  let resultSigned: number;
  if (bits === 32) {
    resultSigned = Math.imul(value0 | 0, value1 | 0);
  } else {
    resultSigned = getSignedValue(value0, bits) * getSignedValue(value1, bits);
  }

  const resultUnsigned = resultSigned >>> 0;
  const result = maskValue(resultUnsigned, bits);

  setIntValue(registers, destination, result);
  updateZeroSign(flags, result, bits);
  flags.v = false;

  const resultHigh = maskValue(resultUnsigned >>> bits, bits);
  if (typeof source !== "number") {
    setIntValue(registers, source, resultHigh);
  }
}

export function div(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef,
  source: RegisterOrValue
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const value1 = maskValue(resolveRightValue(registers, source), bits);

  let result = 0;
  let remainder = 0;
  let error = false;

  if (value1 === 0) {
    error = true;
  } else {
    try {
      switch (bits) {
        case 8:
        case 16: {
          result = Math.trunc(value0 / value1);
          remainder = value0 % value1;
          break;
        }
        case 32: {
          const numerator = value0 | 0;
          const denominator = value1 | 0;
          result = Math.trunc(numerator / denominator);
          remainder = numerator % denominator;
          break;
        }
      }
    } catch (errorThrown) {
      error = true;
    }
  }

  flags.v = false;
  updateZeroSign(flags, result, bits);

  if (error) {
    result = value0;
  }

  setIntValue(registers, destination, result);
  if (typeof source !== "number") {
    setIntValue(registers, source, remainder);
  }
}

export function mod(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef,
  source: RegisterOrValue
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const value1 = maskValue(resolveRightValue(registers, source), bits);

  let result = 0;
  let error = false;

  if (value1 === 0) {
    error = true;
  } else {
    try {
      switch (bits) {
        case 8:
        case 16:
          result = value0 % value1;
          break;
        case 32: {
          const numerator = value0 | 0;
          const denominator = value1 | 0;
          result = numerator % denominator;
          break;
        }
      }
    } catch (errorThrown) {
      error = true;
    }
  }

  flags.v = false;
  updateZeroSign(flags, result, bits);

  if (error) {
    result = value0;
  }

  setIntValue(registers, destination, result);
}

export function neg(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const diff = 0 - value0;
  const result = maskValue(diff, bits);

  setIntValue(registers, destination, result);
  updateZeroSign(flags, result, bits);
  setOverflowSub(flags, 0, value0, result, bits);
  flags.c = value0 !== 0;
}

export function inc(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const sum = value0 + 1;
  const result = maskValue(sum, bits);

  setIntValue(registers, destination, result);
  updateZeroSign(flags, result, bits);
  setOverflowAdd(flags, value0, 1, result, bits);
  flags.c = sum > MAX_UNSIGNED[bits];
}

export function dec(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const diff = value0 - 1;
  const result = maskValue(diff, bits);

  setIntValue(registers, destination, result);
  updateZeroSign(flags, result, bits);
  setOverflowSub(flags, value0, 1, result, bits);
  flags.c = value0 < 1;
}

export function and(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef,
  source: RegisterOrValue
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const value1 = maskValue(resolveRightValue(registers, source), bits);
  const result = maskValue(value0 & value1, bits);

  setIntValue(registers, destination, result);
  flags.v = false;
  updateZeroSign(flags, result, bits);
}

export function or(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef,
  source: RegisterOrValue
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const value1 = maskValue(resolveRightValue(registers, source), bits);
  const result = maskValue(value0 | value1, bits);

  setIntValue(registers, destination, result);
  flags.v = false;
  updateZeroSign(flags, result, bits);
}

export function xor(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef,
  source: RegisterOrValue
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const value1 = maskValue(resolveRightValue(registers, source), bits);
  const result = maskValue(value0 ^ value1, bits);

  setIntValue(registers, destination, result);
  flags.v = false;
  updateZeroSign(flags, result, bits);
}

export function not(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const result = maskValue(~value0, bits);

  setIntValue(registers, destination, result);
  flags.v = false;
  updateZeroSign(flags, result, bits);
}

export function shl(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef,
  source: RegisterOrValue
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const shift = getShiftAmount(resolveRightValue(registers, source));
  let result = value0;

  if (shift < 0) {
    // keep carry as-is
  } else if (shift === 0) {
    flags.c = false;
  } else {
    if (shift > bits) {
      flags.c = false;
    } else {
      const carryShift = bits - shift;
      const carryMask = Math.pow(2, carryShift);
      flags.c = (value0 & carryMask) !== 0;
    }

    if (shift >= bits) {
      result = 0;
    } else {
      result = maskValue((value0 << shift) >>> 0, bits);
    }
  }

  setIntValue(registers, destination, result);
  flags.v = false;
  updateZeroSign(flags, result, bits);
}

export function shr(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef,
  source: RegisterOrValue
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const shift = getShiftAmount(resolveRightValue(registers, source));
  let result = value0;

  if (shift < 0) {
    // keep carry as-is
  } else if (shift === 0) {
    flags.c = false;
  } else {
    if (shift > bits) {
      flags.c = false;
    } else {
      const carryShift = shift - 1;
      const carryMask = Math.pow(2, carryShift);
      flags.c = (value0 & carryMask) !== 0;
    }

    if (shift >= bits) {
      result = 0;
    } else {
      result = maskValue(value0 >>> shift, bits);
    }
  }

  setIntValue(registers, destination, result);
  flags.v = false;
  updateZeroSign(flags, result, bits);
}

export function cmp(
  registers: RegisterSet,
  flags: Flags,
  left: RegisterRef,
  right: RegisterOrValue
): void {
  const bits = getBitWidth(left);
  const value0 = maskValue(getIntValue(registers, left), bits);
  const value1 = maskValue(resolveRightValue(registers, right), bits);
  const diff = value0 - value1;
  const result = maskValue(diff, bits);

  updateZeroSign(flags, result, bits);
  setOverflowSub(flags, value0, value1, result, bits);
  flags.c = value0 < value1;
}

export function test(
  registers: RegisterSet,
  flags: Flags,
  left: RegisterRef,
  right: RegisterOrValue
): void {
  const bits = getBitWidth(left);
  const value0 = maskValue(getIntValue(registers, left), bits);
  const value1 = maskValue(resolveRightValue(registers, right), bits);
  const result = maskValue(value0 & value1, bits);

  flags.v = false;
  updateZeroSign(flags, result, bits);
}

export function move(
  registers: RegisterSet,
  destination: RegisterRef,
  source: RegisterOrValue
): void {
  const value = resolveRightValue(registers, source);
  setIntValue(registers, destination, value);
}

export function clear(
  registers: RegisterSet,
  destination: AnyRegisterRef
): void {
  if (destination.kind === "S") {
    registers.setS(destination.index, "");
  } else if (destination.kind === "F") {
    registers.setF(destination.index, 0);
  } else {
    setIntValue(registers, destination, 0);
  }
}

export const comp = cmp;
export const subb = sub;
export const adds = add;
export const mult = mul;
export const divs = div;
export const lsl = shl;
export const lsr = shr;
export const asl = shl;
export const asr = shr;

/**
 * Add with carry (ADDC).
 * Adds source to destination plus the carry flag.
 */
export function addc(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef,
  source: RegisterOrValue
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const value1 = maskValue(resolveRightValue(registers, source), bits);
  const carryIn = flags.c ? 1 : 0;
  const sum = value0 + value1 + carryIn;
  const result = maskValue(sum, bits);

  setIntValue(registers, destination, result);
  updateZeroSign(flags, result, bits);
  setOverflowAdd(flags, value0, value1 + carryIn, result, bits);
  flags.c = sum > MAX_UNSIGNED[bits];
}

/**
 * Subtract with carry/borrow (SUBC).
 * Subtracts source from destination minus the carry flag (borrow).
 * C=1 means borrow input, C=1 output means borrow occurred.
 */
export function subc(
  registers: RegisterSet,
  flags: Flags,
  destination: RegisterRef,
  source: RegisterOrValue
): void {
  const bits = getBitWidth(destination);
  const value0 = maskValue(getIntValue(registers, destination), bits);
  const value1 = maskValue(resolveRightValue(registers, source), bits);
  // Borrow is carry flag directly
  const borrow = flags.c ? 1 : 0;
  const diff = value0 - value1 - borrow;
  const result = maskValue(diff, bits);

  setIntValue(registers, destination, result);
  updateZeroSign(flags, result, bits);
  setOverflowSub(flags, value0, value1 + borrow, result, bits);
  flags.c = (value0 < value1 + borrow);
}
