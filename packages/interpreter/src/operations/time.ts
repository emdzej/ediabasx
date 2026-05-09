import { EdiabasError, EdiabasErrorCodes, type EdiabasErrorCode } from "@emdzej/ediabasx-core";
import { RegisterSet } from "../registers";
import type { IntRegisterRef, StringRegisterRef } from "./register-refs";
import { getIntValue, setIntValue } from "./register-values";
import { TrapBitDict } from "../trap-bits";

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

function setDateTimeBytes(
  registers: RegisterSet,
  destination: DateTimeDestination,
  bytes: Uint8Array
): void {
  if (destination.kind === "S") {
    registers.setSBinary(destination.index, bytes);
    return;
  }
  // Pack little-endian into the int register's natural size.
  let value = 0;
  for (let i = bytes.length - 1; i >= 0; i--) {
    value = ((value << 8) | bytes[i]) >>> 0;
  }
  setIntValue(registers, destination, value);
}

/**
 * ISO-8601 week-of-year (Monday-based, with weeks 1 having 4+ days in the new year).
 * Mirrors C# CultureInfo.InvariantCulture.Calendar.GetWeekOfYear with FirstFourDayWeek/Monday.
 */
function isoWeekOfYear(date: Date): number {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNr = (target.getUTCDay() + 6) % 7;
  target.setUTCDate(target.getUTCDate() - dayNr + 3);
  const firstThursday = new Date(Date.UTC(target.getUTCFullYear(), 0, 4));
  const firstDayNr = (firstThursday.getUTCDay() + 6) % 7;
  firstThursday.setUTCDate(firstThursday.getUTCDate() - firstDayNr + 3);
  const diffMs = target.getTime() - firstThursday.getTime();
  return 1 + Math.round(diffMs / (7 * 24 * 3600 * 1000));
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

/**
 * BEST2 getdate — writes a 5-byte packed array:
 *   [day, month, year%100, weekOfYear, dayOfWeek (Mon=1..Sun=7)].
 * Mirrors C# OpDate.
 */
export function getdate(
  registers: RegisterSet,
  destination: DateTimeDestination,
  now: Date = new Date()
): void {
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const week = isoWeekOfYear(now);
  let dayOfWeek = now.getDay(); // 0=Sunday..6=Saturday
  if (dayOfWeek === 0) dayOfWeek = 7;
  const bytes = new Uint8Array([
    day & 0xff,
    month & 0xff,
    year % 100 & 0xff,
    week & 0xff,
    dayOfWeek & 0xff,
  ]);
  setDateTimeBytes(registers, destination, bytes);
}

/**
 * BEST2 gettime — writes a 3-byte packed array: [hour, minute, second].
 * Mirrors C# OpTime.
 */
export function gettime(
  registers: RegisterSet,
  destination: DateTimeDestination,
  now: Date = new Date()
): void {
  const bytes = new Uint8Array([
    now.getHours() & 0xff,
    now.getMinutes() & 0xff,
    now.getSeconds() & 0xff,
  ]);
  setDateTimeBytes(registers, destination, bytes);
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

/** EERR - Execute error */
export function eerr(state: ErrorTrapState): void {
  if (state.errorTrapBitNr >= 0) {
    // Check if the current trap bit corresponds to a specific known error
    // Iterate over known trap bits to find a match
    for (const [errorCode, bitNr] of Object.entries(TrapBitDict)) {
      if (bitNr === state.errorTrapBitNr) {
        const code = Number(errorCode) as EdiabasErrorCode;
        throw new EdiabasError(
          code,
          `Error trap triggered: ${state.errorTrapBitNr}`
        );
      }
    }
    // Fallback to generic internal error if no specific mapping found
    throw new EdiabasError(
      EdiabasErrorCodes.EDIABAS_BIP_0000,
      `Error trap triggered: ${state.errorTrapBitNr}`
    );
  }
}

export const date = getdate;
export const time = gettime;
