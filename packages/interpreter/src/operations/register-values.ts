import { RegisterSet } from "../registers";
import type { FloatRegisterRef, IntRegisterRef, StringRegisterRef } from "./register-refs";

export function getIntValue(registers: RegisterSet, ref: IntRegisterRef): number {
  switch (ref.kind) {
    case "B":
      return registers.getB(ref.index);
    case "A":
      return registers.getA(ref.index);
    case "I":
      return registers.getI(ref.index);
    case "L":
      return registers.getL(ref.index);
  }
}

export function setIntValue(
  registers: RegisterSet,
  ref: IntRegisterRef,
  value: number
): void {
  switch (ref.kind) {
    case "B":
      registers.setB(ref.index, value);
      return;
    case "A":
      registers.setA(ref.index, value);
      return;
    case "I":
      registers.setI(ref.index, value);
      return;
    case "L":
      registers.setL(ref.index, value);
      return;
  }
}

export function getFloatValue(registers: RegisterSet, ref: FloatRegisterRef): number {
  return registers.getF(ref.index);
}

export function setFloatValue(
  registers: RegisterSet,
  ref: FloatRegisterRef,
  value: number
): void {
  registers.setF(ref.index, value);
}

// NOTE: post byte-backed-S-register refactor, `RegisterSet.getS()` already
// terminates at the first 0x00 byte (matches C# `GetStringData`). The
// previous `stripNullTerminator()` helper around `getS()` is now
// redundant — kept lean by just delegating to the register directly.

export function getStringValue(
  registers: RegisterSet,
  ref: StringRegisterRef
): string {
  return registers.getS(ref.index);
}

export function setStringValue(
  registers: RegisterSet,
  ref: StringRegisterRef,
  value: string
): void {
  // Mirror C# Operand.SetStringData: append a trailing NUL byte so the
  // stored buffer's logical length includes the terminator. This matters
  // for `scmp` (byte-array compare): an IMM_STR "2" stored by the
  // compiler is [0x32, 0x00] (length 2), and tabget("DATA_TYPE")="2"
  // must match by-length AND by-bytes — without the appended NUL the
  // tabget side ends up length-1 and `scmp` mismatches.
  //
  // Appending `\0` to the JS string works because CP1252 has 0x00 in
  // its codepage (byte 0x00 → U+0000); `setS` CP1252-encodes the result
  // so the buffer ends in a real `0x00` byte.
  const normalized = value.endsWith("\0") ? value : value + "\0";
  registers.setS(ref.index, normalized);
}

/**
 * Get binary data from string register — returns the full buffer up to
 * the register's logical length, including any embedded `0x00` bytes.
 * No codec involvement.
 */
export function getBinaryValue(
  registers: RegisterSet,
  ref: StringRegisterRef
): Uint8Array {
  return registers.getSBinary(ref.index);
}

/**
 * Set binary data to a string register.
 */
export function setBinaryValue(
  registers: RegisterSet,
  ref: StringRegisterRef,
  value: Uint8Array
): void {
  registers.setSBinary(ref.index, value);
}

/**
 * Resolve string value from register reference (for operands that can
 * be either immediate string or register). Now identical to
 * `getStringValue` since the codec / NUL-trim live in `getS`.
 */
export function resolveStringValue(
  registers: RegisterSet,
  ref: StringRegisterRef
): string {
  return registers.getS(ref.index);
}
