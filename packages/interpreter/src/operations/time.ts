import { RegisterSet } from "../registers";
import type { IntRegisterRef, StringRegisterRef } from "./register-refs";
import { getIntValue, setIntValue } from "./register-values";

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
