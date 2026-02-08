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

function stripNullTerminator(value: string): string {
  return value.replace(/\0.*$/, "");
}

export function getStringValue(
  registers: RegisterSet,
  ref: StringRegisterRef
): string {
  return stripNullTerminator(registers.getS(ref.index));
}

export function setStringValue(
  registers: RegisterSet,
  ref: StringRegisterRef,
  value: string
): void {
  registers.setS(ref.index, value);
}

/**
 * Get binary data from string register.
 * String registers store binary data as cp1252-encoded strings.
 */
export function getBinaryValue(
  registers: RegisterSet,
  ref: StringRegisterRef
): Uint8Array {
  return registers.getSBinary(ref.index);
}

/**
 * Set binary data to string register.
 */
export function setBinaryValue(
  registers: RegisterSet,
  ref: StringRegisterRef,
  value: Uint8Array
): void {
  registers.setSBinary(ref.index, value);
}

/**
 * Resolve string value from register reference (for operands that can be either immediate string or register).
 */
export function resolveStringValue(
  registers: RegisterSet,
  ref: StringRegisterRef
): string {
  return stripNullTerminator(registers.getS(ref.index));
}
