import { utf8ToCp1252 } from "@emdzej/ediabasx-core";
import { RegisterSet } from "../registers";
import type { StringRegisterRef } from "./register-refs";
import { getStringValue, setBinaryValue } from "./register-values";
import type { Flags } from "../flags";

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

  has(key: string): boolean {
    return this.entries.has(key);
  }
}

function resolveKey(registers: RegisterSet, value: SharedMemoryKey): string {
  const key = typeof value === "string" ? value : getStringValue(registers, value);
  return key.toUpperCase();
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
  key: SharedMemoryKey,
  flags?: Flags
): void {
  // Mirrors C# `OpShmget` (EdOperations.cs:2136): writes the stored
  // bytes verbatim via `SetArrayData(byte[])`. Missing key → empty
  // buffer (C# `ByteArray0`). The string path would grow non-zero-
  // tailed payloads by one, breaking any caller that round-trips
  // through `shmset`/`shmget` and length-checks.
  const resolvedKey = resolveKey(registers, key);
  const exists = memory.has(resolvedKey);
  const value = memory.get(resolvedKey);
  setBinaryValue(registers, destination, value);
  if (flags) {
    flags.c = !exists;
  }
}
