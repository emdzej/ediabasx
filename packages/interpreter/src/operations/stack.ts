import { RegisterSet } from "../registers";
import { Flags } from "../flags";
import { DataStack } from "../stack";
import type { IntRegisterRef, StringRegisterRef } from "./register-refs";
import { getBinaryValue, getIntValue, setBinaryValue, setIntValue } from "./register-values";

function encodeFlags(flags: Flags): number {
  return (flags.c ? 1 : 0)
    | (flags.z ? 2 : 0)
    | (flags.s ? 4 : 0)
    | (flags.v ? 8 : 0);
}

function decodeFlags(flags: Flags, value: number): void {
  flags.c = (value & 1) !== 0;
  flags.z = (value & 2) !== 0;
  flags.s = (value & 4) !== 0;
  flags.v = (value & 8) !== 0;
}

function registerByteLength(source: IntRegisterRef): number {
  switch (source.kind) {
    case "B":
    case "A":
      return 1;
    case "I":
      return 2;
    case "L":
      return 4;
  }
}

export function push(
  registers: RegisterSet,
  stack: DataStack,
  source: IntRegisterRef
): void {
  let value = getIntValue(registers, source) >>> 0;
  const length = registerByteLength(source);

  for (let i = 0; i < length; i += 1) {
    stack.pushByte(value & 0xff);
    value >>>= 8;
  }
}

export function pop(
  registers: RegisterSet,
  stack: DataStack,
  destination: IntRegisterRef
): void {
  const length = registerByteLength(destination);
  if (stack.depth() < length) {
    throw new RangeError("Stack underflow");
  }

  let value = 0;
  for (let i = 0; i < length; i += 1) {
    value = (value << 8) | stack.popByte();
  }

  setIntValue(registers, destination, value >>> 0);
}

export function pushf(
  stack: DataStack,
  flags: Flags
): void {
  let value = encodeFlags(flags) >>> 0;
  for (let i = 0; i < 4; i += 1) {
    stack.pushByte(value & 0xff);
    value >>>= 8;
  }
}

export function popf(
  stack: DataStack,
  flags: Flags
): void {
  if (stack.depth() < 4) {
    throw new RangeError("Stack underflow");
  }
  let value = 0;
  for (let i = 0; i < 4; i += 1) {
    value = (value << 8) | stack.popByte();
  }
  decodeFlags(flags, value >>> 0);
}

export function atsp(
  registers: RegisterSet,
  stack: DataStack,
  destination: IntRegisterRef,
  offset: number = 0
): void {
  const length = registerByteLength(destination);
  const index = offset - length;
  if (index < 0) {
    throw new RangeError("Invalid stack index");
  }

  let value = 0;
  for (let i = 0; i < length; i += 1) {
    const byte = stack.peekByte(index + i) ?? 0;
    value = (value << 8) | byte;
  }

  setIntValue(registers, destination, value >>> 0);
}

export function swap(
  registers: RegisterSet,
  destination: StringRegisterRef,
  start: number,
  length: number
): void {
  if (length <= 0) {
    return;
  }

  const maxSize = registers.getMaxStringSize();
  if (start + length > maxSize) {
    throw new Error("Swap exceeds maximum string size");
  }

  const current = getBinaryValue(registers, destination);
  const requiredLength = Math.max(current.length, start + length);
  const buffer = new Uint8Array(Math.min(requiredLength, maxSize));
  buffer.set(current.slice(0, buffer.length));

  const slice = buffer.slice(start, start + length).reverse();
  buffer.set(slice, start);

  setBinaryValue(registers, destination, buffer);
}

export function setspc(
  stack: DataStack,
  depth: number
): void {
  stack.setDepth(depth);
}
