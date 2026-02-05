import { RegisterSet } from "../registers";
import { Flags } from "../flags";
import { DataStack } from "../stack";
import type { IntRegisterRef } from "./register-refs";
import { getIntValue, setIntValue } from "./register-values";

function encodeFlags(flags: Flags): number {
  return (flags.z ? 1 : 0)
    | (flags.c ? 2 : 0)
    | (flags.v ? 4 : 0)
    | (flags.s ? 8 : 0);
}

function decodeFlags(flags: Flags, value: number): void {
  flags.z = (value & 1) !== 0;
  flags.c = (value & 2) !== 0;
  flags.v = (value & 4) !== 0;
  flags.s = (value & 8) !== 0;
}

export function push(
  registers: RegisterSet,
  stack: DataStack,
  source: IntRegisterRef
): void {
  stack.push(getIntValue(registers, source));
}

export function pop(
  registers: RegisterSet,
  stack: DataStack,
  destination: IntRegisterRef
): void {
  const value = stack.pop();
  setIntValue(registers, destination, value);
}

export function pushf(
  stack: DataStack,
  flags: Flags
): void {
  stack.push(encodeFlags(flags));
}

export function popf(
  stack: DataStack,
  flags: Flags
): void {
  const value = stack.pop();
  decodeFlags(flags, value);
}

export function atsp(
  registers: RegisterSet,
  stack: DataStack,
  destination: IntRegisterRef,
  offset: number = 0
): void {
  const value = stack.peek(offset) ?? 0;
  setIntValue(registers, destination, value);
}

export function swap(
  stack: DataStack
): void {
  stack.swap();
}

export function setspc(
  stack: DataStack,
  depth: number
): void {
  stack.setDepth(depth);
}
