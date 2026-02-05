import { RegisterSet } from "../registers";
import type { IntRegisterRef } from "./register-refs";

export type { IntRegisterRef } from "./register-refs";

export type SharedMemoryKey = IntRegisterRef | number;
export type SharedMemoryValue = IntRegisterRef | number;

export class SharedMemory {
  private readonly entries = new Map<number, number>();

  set(key: number, value: number): void {
    this.entries.set(key >>> 0, value >>> 0);
  }

  get(key: number): number {
    return this.entries.get(key >>> 0) ?? 0;
  }
}

function getIntValue(registers: RegisterSet, ref: IntRegisterRef): number {
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

function setIntValue(registers: RegisterSet, ref: IntRegisterRef, value: number): void {
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

function resolveKey(registers: RegisterSet, value: SharedMemoryKey): number {
  return typeof value === "number" ? value : getIntValue(registers, value);
}

function resolveValue(registers: RegisterSet, value: SharedMemoryValue): number {
  return typeof value === "number" ? value : getIntValue(registers, value);
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
  destination: IntRegisterRef,
  key: SharedMemoryKey
): void {
  const resolvedKey = resolveKey(registers, key);
  setIntValue(registers, destination, memory.get(resolvedKey));
}
