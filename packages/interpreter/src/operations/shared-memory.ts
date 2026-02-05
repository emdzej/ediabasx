import { cp1252ToUtf8, utf8ToCp1252 } from "@ediabas/core";
import { RegisterSet } from "../registers";
import type { StringRegisterRef } from "./register-refs";
import { getStringValue, setStringValue } from "./register-values";

export type { StringRegisterRef } from "./register-refs";

export type SharedMemoryKey = StringRegisterRef | string;
export type SharedMemoryValue = StringRegisterRef | Uint8Array | string;
export type SharedMemoryKeyOperand = SharedMemoryKey;
export type SharedMemoryValueOperand = SharedMemoryValue;

export class SharedMemory {
  private readonly entries = new Map<string, Uint8Array>();

  set(key: string, value: Uint8Array): void {
    this.entries.set(key, new Uint8Array(value));
  }

  get(key: string): Uint8Array {
    return this.entries.get(key) ?? new Uint8Array();
  }
}

function resolveKey(registers: RegisterSet, value: SharedMemoryKey): string {
  return typeof value === "string" ? value : getStringValue(registers, value);
}

function resolveValue(registers: RegisterSet, value: SharedMemoryValue): Uint8Array {
  if (value instanceof Uint8Array) {
    return new Uint8Array(value);
  }
  if (typeof value === "string") {
    return utf8ToCp1252(value);
  }
  return utf8ToCp1252(getStringValue(registers, value));
}

export function shmset(
  registers: RegisterSet,
  memory: SharedMemory,
  key: SharedMemoryKey,
  value: SharedMemoryValue
): void {
  const resolvedKey = resolveKey(registers, key);
  const resolvedValue = resolveValue(registers, value);
  memory.set(resolvedKey, resolvedValue);
}

export function shmget(
  registers: RegisterSet,
  memory: SharedMemory,
  destination: StringRegisterRef,
  key: SharedMemoryKey
): void {
  const resolvedKey = resolveKey(registers, key);
  const value = memory.get(resolvedKey);
  setStringValue(registers, destination, cp1252ToUtf8(value));
}
