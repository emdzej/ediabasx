import { describe, expect, it, beforeEach, vi } from "vitest";
import { RegisterSet } from "./registers";
import { Timer, gettmr, settmr, getdate, gettime, wait, sett, clrt } from "./operations/time";

const S0 = { kind: "S", index: 0 } as const;
const S1 = { kind: "S", index: 1 } as const;
const I0 = { kind: "I", index: 0 } as const;
const I1 = { kind: "I", index: 1 } as const;

describe("Time and date operations", () => {
  let registers: RegisterSet;

  beforeEach(() => {
    registers = new RegisterSet();
  });

  it("gettmr returns elapsed time since settmr", () => {
    let now = 1000;
    const timer = new Timer(() => now);
    registers.setI(0, 500);

    settmr(registers, timer, I0);
    now = 1500;

    gettmr(registers, timer, I1);
    expect(registers.getI(1)).toBe(1000);
  });

  it("getdate writes formatted string and numeric date", () => {
    const date = new Date(2026, 1, 5, 10, 5, 7);

    getdate(registers, S0, date);
    getdate(registers, I0, date);

    expect(registers.getS(0)).toBe("2026-02-05");
    expect(registers.getI(0)).toBe(20260205 & 0xffff);
  });

  it("gettime writes formatted string and numeric time", () => {
    const date = new Date(2026, 1, 5, 10, 5, 7);

    gettime(registers, S1, date);
    gettime(registers, I1, date);

    expect(registers.getS(1)).toBe("10:05:07");
    expect(registers.getI(1)).toBe(100507 & 0xffff);
  });

  it("wait resolves after duration", async () => {
    vi.useFakeTimers();
    const promise = wait(registers, 500);
    vi.advanceTimersByTime(500);
    await promise;
    vi.useRealTimers();
  });
});

describe("Timer flag operations", () => {
  it("sett sets timer flag to true", () => {
    const state = { timerFlag: false };
    sett(state);
    expect(state.timerFlag).toBe(true);
  });

  it("clrt clears timer flag to false", () => {
    const state = { timerFlag: true };
    clrt(state);
    expect(state.timerFlag).toBe(false);
  });

  it("sett then clrt resets flag", () => {
    const state = { timerFlag: false };
    sett(state);
    expect(state.timerFlag).toBe(true);
    clrt(state);
    expect(state.timerFlag).toBe(false);
  });
});
