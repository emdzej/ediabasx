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
import { getFloatValue, getIntValue, getStringValue } from "./register-values";

export type {
  FloatRegisterRef,
  IntRegisterRef,
  StringRegisterRef,
} from "./register-refs";

export interface JobResult {
  name: string;
  type:
    | "byte"
    | "word"
    | "dword"
    | "char"
    | "int"
    | "long"
    | "real"
    | "string"
    | "binary";
  value: number | string | Uint8Array;
  unit?: string;
  comment?: string;
}

// Types are defined in register-refs.

export type StringSource = string | StringRegisterRef;

function stripNullTerminator(value: string): string {
  return value.replace(/\0.*$/, "");
}

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
    return stripNullTerminator(source);
  }
  return stripNullTerminator(getStringValue(registers, source));
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

function toSigned8(value: number): number {
  const masked = maskUnsigned(value, 8);
  if ((masked & 0x80) !== 0) {
    return masked - 0x100;
  }
  return masked;
}

function toSigned16(value: number): number {
  const masked = maskUnsigned(value, 16);
  if ((masked & 0x8000) !== 0) {
    return masked - 0x10000;
  }
  return masked;
}

function toSigned32(value: number): number {
  const masked = maskUnsigned(value, 32);
  if ((masked & 0x80000000) !== 0) {
    return masked - 0x1_0000_0000;
  }
  return masked;
}

export function ergb(
  registers: RegisterSet,
  collector: ResultCollector,
  name: StringSource,
  value: IntRegisterRef | number
): void {
  const resultName = resolveString(registers, name);
  const raw = typeof value === "number" ? value : getIntValue(registers, value);
  collector.record(resultName, "byte", maskUnsigned(raw, 8));
}

export function ergw(
  registers: RegisterSet,
  collector: ResultCollector,
  name: StringSource,
  value: IntRegisterRef | number
): void {
  const resultName = resolveString(registers, name);
  const raw = typeof value === "number" ? value : getIntValue(registers, value);
  collector.record(resultName, "word", maskUnsigned(raw, 16));
}

export function ergd(
  registers: RegisterSet,
  collector: ResultCollector,
  name: StringSource,
  value: IntRegisterRef | number
): void {
  const resultName = resolveString(registers, name);
  const raw = typeof value === "number" ? value : getIntValue(registers, value);
  collector.record(resultName, "dword", maskUnsigned(raw, 32));
}

export function ergi(
  registers: RegisterSet,
  collector: ResultCollector,
  name: StringSource,
  value: IntRegisterRef | number
): void {
  const resultName = resolveString(registers, name);
  const raw = typeof value === "number" ? value : getIntValue(registers, value);
  collector.record(resultName, "int", toSigned16(raw));
}

/**
 * ergi variant that takes a resolved value directly (for immediate operands)
 */
export function ergiValue(
  collector: ResultCollector,
  name: string,
  value: number
): void {
  collector.record(name, "int", toSigned16(value));
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
  const clean = raw.replace(/\0.*$/, "");
  collector.record(resultName, "string", clean);
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

export function ergc(
  registers: RegisterSet,
  collector: ResultCollector,
  name: StringSource,
  value: IntRegisterRef | number
): void {
  const resultName = resolveString(registers, name);
  const raw = typeof value === "number" ? value : getIntValue(registers, value);
  collector.record(resultName, "char", toSigned8(raw));
}

export function ergl(
  registers: RegisterSet,
  collector: ResultCollector,
  name: StringSource,
  value: IntRegisterRef | number
): void {
  const resultName = resolveString(registers, name);
  const raw = typeof value === "number" ? value : getIntValue(registers, value);
  collector.record(resultName, "long", toSigned32(raw));
}
