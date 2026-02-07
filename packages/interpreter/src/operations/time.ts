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

export interface ErrorTrapState {
  errorTrapMask: number;
  errorTrapBitNr: number;
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
  state: ErrorTrapState,
  destination: IntRegisterRef
): void {
  setIntValue(registers, destination, state.errorTrapMask);
}

export function settmr(
  registers: RegisterSet,
  state: ErrorTrapState,
  value: TimeValueRef
): void {
  state.errorTrapMask = resolveTimeValue(registers, value);
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
  const durationSeconds = Math.max(0, resolveTimeValue(registers, duration));
  return new Promise((resolve) => {
    setTimeout(resolve, durationSeconds * 1000);
  });
}

/**
 * Timer flag operations.
 * The timer flag is a separate boolean from the timer value.
 */

/** SETT - Set error trap bit */
export function sett(
  registers: RegisterSet,
  state: ErrorTrapState,
  value: TimeValueRef
): void {
  let bit = resolveTimeValue(registers, value);
  if (bit === 0) {
    bit = 0x40000000;
  }
  state.errorTrapBitNr = bit;
}

/** CLRT - Clear error trap bit */
export function clrt(state: ErrorTrapState): void {
  state.errorTrapBitNr = -1;
}

export const date = getdate;
export const time = gettime;
