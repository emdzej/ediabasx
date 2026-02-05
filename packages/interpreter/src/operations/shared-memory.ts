import { RegisterSet } from "../registers";
import type { IntRegisterRef, StringRegisterRef } from "./register-refs";
import { getIntValue, setIntValue, resolveStringValue, getBinaryValue, setBinaryValue } from "./register-values";

export type { IntRegisterRef, StringRegisterRef } from "./register-refs";

/**
 * Shared memory between jobs/SGBDs.
 * Keys are strings (uppercase normalized), values are binary data (Uint8Array).
 */
export class SharedMemory {
  private readonly entries = new Map<string, Uint8Array>();

  set(key: string, value: Uint8Array): void {
    this.entries.set(key.toUpperCase(), value);
  }

  get(key: string): Uint8Array | undefined {
    return this.entries.get(key.toUpperCase());
  }

  has(key: string): boolean {
    return this.entries.has(key.toUpperCase());
  }

  delete(key: string): boolean {
    return this.entries.delete(key.toUpperCase());
  }

  clear(): void {
    this.entries.clear();
  }
}

export type SharedMemoryKeyOperand = 
  | { kind: "string"; value: string }
  | { kind: "register"; ref: StringRegisterRef };

export type SharedMemoryValueOperand = 
  | { kind: "string"; value: string; raw?: Uint8Array }
  | { kind: "register"; ref: StringRegisterRef };

function resolveKey(registers: RegisterSet, operand: SharedMemoryKeyOperand): string {
  if (operand.kind === "string") {
    return operand.value;
  }
  return resolveStringValue(registers, operand.ref);
}

function resolveValue(registers: RegisterSet, operand: SharedMemoryValueOperand): Uint8Array {
  if (operand.kind === "string") {
    // Use raw bytes if available, otherwise encode string
    if (operand.raw) {
      return operand.raw;
    }
    return new TextEncoder().encode(operand.value);
  }
  return getBinaryValue(registers, operand.ref);
}

export function shmset(
  registers: RegisterSet,
  memory: SharedMemory,
  keyOperand: SharedMemoryKeyOperand,
  valueOperand: SharedMemoryValueOperand
): void {
  const key = resolveKey(registers, keyOperand);
  const value = resolveValue(registers, valueOperand);
  memory.set(key, value);
}

export function shmget(
  registers: RegisterSet,
  memory: SharedMemory,
  destination: StringRegisterRef,
  keyOperand: SharedMemoryKeyOperand
): void {
  const key = resolveKey(registers, keyOperand);
  const value = memory.get(key);
  if (value) {
    setBinaryValue(registers, destination, value);
  } else {
    // Clear destination if key not found
    setBinaryValue(registers, destination, new Uint8Array(0));
  }
}
