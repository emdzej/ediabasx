import { RegisterSet } from "../registers";
import type { IntRegisterRef, StringRegisterRef } from "./register-refs";

export type { IntRegisterRef, StringRegisterRef } from "./register-refs";

export type TimeValueRef = IntRegisterRef | number;
export type DateTimeDestination = StringRegisterRef | IntRegisterRef;

export class Timer {
  private baseMs = 0;
  private startedAt: number;

  constructor(private readonly now: () => number = () => Date.now()) {
    this.startedAt = this.now();
  }

  set(valueMs = 0): void {
    this.baseMs = valueMs;
    this.startedAt = this.now();
  }

  read(): number {
    return this.baseMs + (this.now() - this.startedAt);
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

function resolveTimeValue(registers: RegisterSet, value: TimeValueRef): number {
  return typeof value === "number" ? value : getIntValue(registers, value);
}

function setDateTimeDestination(
  registers: RegisterSet,
  destination: DateTimeDestination,
  value: { text: string; numeric: number }
): void {
  if (destination.kind === "S") {
    registers.setS(destination.index, value.text);
    return;
  }
  setIntValue(registers, destination, value.numeric);
}

function pad2(value: number): string {
  return value.toString().padStart(2, "0");
}

export function gettmr(
  registers: RegisterSet,
  timer: Timer,
  destination: IntRegisterRef
): void {
  setIntValue(registers, destination, timer.read());
}

export function settmr(
  registers: RegisterSet,
  timer: Timer,
  value: TimeValueRef
): void {
  timer.set(resolveTimeValue(registers, value));
}

export function getdate(
  registers: RegisterSet,
  destination: DateTimeDestination,
  now: Date = new Date()
): void {
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const text = `${year}-${pad2(month)}-${pad2(day)}`;
  const numeric = year * 10000 + month * 100 + day;
  setDateTimeDestination(registers, destination, { text, numeric });
}

export function gettime(
  registers: RegisterSet,
  destination: DateTimeDestination,
  now: Date = new Date()
): void {
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const text = `${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}`;
  const numeric = hours * 10000 + minutes * 100 + seconds;
  setDateTimeDestination(registers, destination, { text, numeric });
}

export function wait(
  registers: RegisterSet,
  duration: TimeValueRef
): Promise<void> {
  const durationMs = Math.max(0, resolveTimeValue(registers, duration));
  return new Promise((resolve) => {
    setTimeout(resolve, durationMs);
  });
}

export const date = getdate;
export const time = gettime;
