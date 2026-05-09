import { describe, expect, it, beforeEach, vi } from "vitest";
import { RegisterSet } from "./registers";
import { gettmr, settmr, getdate, gettime, wait, sett, clrt, eerr } from "./operations/time";
import type { ErrorTrapState } from "./operations/time";
import { EdiabasError, EdiabasErrorCodes } from "@emdzej/ediabasx-core";

const S0 = { kind: "S", index: 0 } as const;
const S1 = { kind: "S", index: 1 } as const;
const I0 = { kind: "I", index: 0 } as const;
const I1 = { kind: "I", index: 1 } as const;

describe("Time and date operations", () => {
  let registers: RegisterSet;

  beforeEach(() => {
    registers = new RegisterSet();
  });

  it("gettmr returns error trap mask", () => {
    const state: ErrorTrapState = { errorTrapMask: 1234, errorTrapBitNr: -1 };

    gettmr(registers, state, I1);

    expect(registers.getI(1)).toBe(1234);
  });

  it("settmr updates error trap mask", () => {
    const state: ErrorTrapState = { errorTrapMask: 0, errorTrapBitNr: -1 };
    registers.setI(0, 2048);

    settmr(registers, state, I0);

    expect(state.errorTrapMask).toBe(2048);
  });

  it("getdate writes 5-byte packed array (day, month, year%100, week, dayOfWeek)", () => {
    // 2026-02-05 is a Thursday (dayOfWeek=4 in EDIABAS Mon=1..Sun=7).
    const date = new Date(2026, 1, 5, 10, 5, 7);

    getdate(registers, S0, date);

    const bytes = registers.getSBinary(0);
    expect(Array.from(bytes)).toEqual([5, 2, 26, 6, 4]);
  });

  it("getdate packs into integer register little-endian", () => {
    const date = new Date(2026, 1, 5, 10, 5, 7);

    getdate(registers, I0, date);

    // Lower 16 bits = day | (month<<8) = 5 | (2<<8) = 0x0205
    expect(registers.getI(0)).toBe(0x0205);
  });

  it("gettime writes 3-byte packed array (hour, minute, second)", () => {
    const date = new Date(2026, 1, 5, 10, 5, 7);

    gettime(registers, S1, date);

    const bytes = registers.getSBinary(1);
    expect(Array.from(bytes)).toEqual([10, 5, 7]);
  });

  it("gettime packs into integer register little-endian", () => {
    const date = new Date(2026, 1, 5, 10, 5, 7);

    gettime(registers, I1, date);

    // Lower 16 bits = hour | (minute<<8) = 10 | (5<<8) = 0x050a
    expect(registers.getI(1)).toBe(0x050a);
  });

  it("wait resolves after duration", async () => {
    vi.useFakeTimers();
    const promise = wait(registers, 1);
    vi.advanceTimersByTime(1000);
    await promise;
    vi.useRealTimers();
  });
});

describe("Error trap operations", () => {
  let registers: RegisterSet;

  beforeEach(() => {
    registers = new RegisterSet();
  });

  it("sett sets error trap bit", () => {
    const state: ErrorTrapState = { errorTrapMask: 0, errorTrapBitNr: -1 };
    registers.setI(0, 7);

    sett(registers, state, I0);

    expect(state.errorTrapBitNr).toBe(7);
  });

  it("sett uses default when bit is zero", () => {
    const state: ErrorTrapState = { errorTrapMask: 0, errorTrapBitNr: -1 };
    registers.setI(0, 0);

    sett(registers, state, I0);

    expect(state.errorTrapBitNr).toBe(0x40000000);
  });

  it("clrt clears error trap bit", () => {
    const state: ErrorTrapState = { errorTrapMask: 0, errorTrapBitNr: 12 };

    clrt(state);

    expect(state.errorTrapBitNr).toBe(-1);
  });

  it("eerr throws mapped error for trap bit", () => {
    const state: ErrorTrapState = { errorTrapMask: 0, errorTrapBitNr: 8 };

    try {
      eerr(state);
      throw new Error("Expected eerr to throw");
    } catch (error) {
      expect(error).toBeInstanceOf(EdiabasError);
      const ediabasError = error as EdiabasError;
      expect(ediabasError.code).toBe(EdiabasErrorCodes.EDIABAS_BIP_0011);
    }
  });

  it("eerr throws generic error when trap bit has no mapping", () => {
    const state: ErrorTrapState = { errorTrapMask: 0, errorTrapBitNr: 123 };

    try {
      eerr(state);
      throw new Error("Expected eerr to throw");
    } catch (error) {
      expect(error).toBeInstanceOf(EdiabasError);
      const ediabasError = error as EdiabasError;
      expect(ediabasError.code).toBe(EdiabasErrorCodes.EDIABAS_BIP_0000);
    }
  });

  it("eerr does nothing when trap bit is cleared", () => {
    const state: ErrorTrapState = { errorTrapMask: 0, errorTrapBitNr: -1 };

    expect(() => eerr(state)).not.toThrow();
  });
});
