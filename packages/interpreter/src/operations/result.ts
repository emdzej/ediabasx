/**
 * BEST2 Result Operations
 *
 * Collects job results emitted by ERG* opcodes.
 */

import { RegisterSet } from "../registers";
import type {
  FloatRegisterRef,
  IntRegisterRef,
  StringRegisterRef,
} from "./register-refs";

export type {
  FloatRegisterRef,
  IntRegisterRef,
  StringRegisterRef,
} from "./register-refs";

export interface JobResult {
  name: string;
  type: "byte" | "word" | "dword" | "int" | "real" | "string" | "binary";
  value: number | string | Uint8Array;
  unit?: string;
  comment?: string;
}

// Types are defined in register-refs.

export type StringSource = string | StringRegisterRef;

function normalizeKey(name: string): string {
  return name.toUpperCase();
}

function cloneValue(value: JobResult["value"]): JobResult["value"] {
  if (value instanceof Uint8Array) {
    return new Uint8Array(value);
  }
  return value;
}

export class ResultCollector {
  private readonly results = new Map<string, JobResult>();

  add(result: JobResult): void {
    const key = normalizeKey(result.name);
    const stored: JobResult = {
      name: result.name,
      type: result.type,
      value: cloneValue(result.value),
    };

    if (result.unit !== undefined) {
      stored.unit = result.unit;
    }

    if (result.comment !== undefined) {
      stored.comment = result.comment;
    }

    this.results.set(key, stored);
  }

  record(
    name: string,
    type: JobResult["type"],
    value: JobResult["value"],
    unit?: string,
    comment?: string
  ): void {
    this.add({ name, type, value, unit, comment });
  }

  get(name: string): JobResult | undefined {
    return this.results.get(normalizeKey(name));
  }

  has(name: string): boolean {
    return this.results.has(normalizeKey(name));
  }

  clear(): void {
    this.results.clear();
  }

  list(): JobResult[] {
    return Array.from(this.results.values());
  }

  get size(): number {
    return this.results.size;
  }
}

function resolveString(registers: RegisterSet, source: StringSource): string {
  if (typeof source === "string") {
    return source;
  }
  return registers.getS(source.index);
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

function getFloatValue(registers: RegisterSet, ref: FloatRegisterRef): number {
  return registers.getF(ref.index);
}

function maskUnsigned(value: number, bits: 8 | 16 | 32): number {
  const unsigned = value >>> 0;
  switch (bits) {
    case 8:
      return unsigned & 0xff;
    case 16:
      return unsigned & 0xffff;
    case 32:
      return unsigned >>> 0;
  }
}

function toSigned16(value: number): number {
  const masked = maskUnsigned(value, 16);
  if ((masked & 0x8000) !== 0) {
    return masked - 0x10000;
  }
  return masked;
}

export function ergb(
  registers: RegisterSet,
  collector: ResultCollector,
  name: StringSource,
  value: IntRegisterRef
): void {
  const resultName = resolveString(registers, name);
  const raw = getIntValue(registers, value);
  collector.record(resultName, "byte", maskUnsigned(raw, 8));
}

export function ergw(
  registers: RegisterSet,
  collector: ResultCollector,
  name: StringSource,
  value: IntRegisterRef
): void {
  const resultName = resolveString(registers, name);
  const raw = getIntValue(registers, value);
  collector.record(resultName, "word", maskUnsigned(raw, 16));
}

export function ergd(
  registers: RegisterSet,
  collector: ResultCollector,
  name: StringSource,
  value: IntRegisterRef
): void {
  const resultName = resolveString(registers, name);
  const raw = getIntValue(registers, value);
  collector.record(resultName, "dword", maskUnsigned(raw, 32));
}

export function ergi(
  registers: RegisterSet,
  collector: ResultCollector,
  name: StringSource,
  value: IntRegisterRef
): void {
  const resultName = resolveString(registers, name);
  const raw = getIntValue(registers, value);
  collector.record(resultName, "int", toSigned16(raw));
}

export function ergr(
  registers: RegisterSet,
  collector: ResultCollector,
  name: StringSource,
  value: FloatRegisterRef
): void {
  const resultName = resolveString(registers, name);
  const raw = getFloatValue(registers, value);
  collector.record(resultName, "real", raw);
}

export function ergs(
  registers: RegisterSet,
  collector: ResultCollector,
  name: StringSource,
  value: StringSource
): void {
  const resultName = resolveString(registers, name);
  const raw = resolveString(registers, value);
  collector.record(resultName, "string", raw);
}

export function ergy(
  registers: RegisterSet,
  collector: ResultCollector,
  name: StringSource,
  value: Uint8Array
): void {
  const resultName = resolveString(registers, name);
  collector.record(resultName, "binary", value);
}
