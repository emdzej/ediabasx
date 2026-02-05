import { afterEach, describe, expect, it, vi } from "vitest";
import { MockSerialTransport } from "../../mockSerialTransport";
import {
  FIVE_BAUD_BIT_TIME_MS,
  build5BaudDataBits,
  send5BaudInit
} from "../slowInit";

describe("5-baud init", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("sends 200ms per bit with DTR and both lines", async () => {
    vi.useFakeTimers();
    const transport = new MockSerialTransport();
    await transport.open("/dev/mock");

    const setDtrSpy = vi.spyOn(transport, "setDtr");
    const setRtsSpy = vi.spyOn(transport, "setRts");
    const setBreakSpy = vi
      .spyOn(transport, "setBreak")
      .mockImplementation(
        (durationMs) => new Promise((resolve) => setTimeout(resolve, durationMs))
      );

    const promise = send5BaudInit(transport, 0x33, {
      setDtr: true,
      bothLines: true,
      bitTimeMs: FIVE_BAUD_BIT_TIME_MS
    });

    await vi.runAllTimersAsync();
    await promise;

    expect(setDtrSpy.mock.calls).toEqual([[true], [false]]);
    expect(setRtsSpy.mock.calls).toEqual([[true], [false]]);

    expect(setBreakSpy.mock.calls.map(([duration]) => duration)).toEqual([
      200,
      0,
      0,
      200,
      200,
      0,
      0,
      200,
      200,
      0
    ]);
  });

  it("uses pulse control when available", async () => {
    const transport = new MockSerialTransport() as MockSerialTransport & {
      sendPulse: (
        dataBits: number,
        length: number,
        pulseWidthMs: number,
        setDtr: boolean,
        bothLines: boolean,
        autoKeyByteDelay?: number
      ) => Promise<void>;
    };
    await transport.open("/dev/mock");

    transport.sendPulse = async () => undefined;
    const sendPulseSpy = vi
      .spyOn(transport, "sendPulse")
      .mockResolvedValue(undefined);
    const setBreakSpy = vi.spyOn(transport, "setBreak");
    const setDtrSpy = vi.spyOn(transport, "setDtr");

    await send5BaudInit(transport, 0x55, {
      setDtr: true,
      bothLines: true,
      autoKeyByteDelay: 12
    });

    expect(sendPulseSpy).toHaveBeenCalledWith(
      build5BaudDataBits(0x55),
      10,
      FIVE_BAUD_BIT_TIME_MS,
      true,
      true,
      12
    );
    expect(setBreakSpy).not.toHaveBeenCalled();
    expect(setDtrSpy).not.toHaveBeenCalled();
  });

  it("builds 5-baud data bits with start/stop", () => {
    expect(build5BaudDataBits(0x33)).toBe((0x33 << 1) | 0x0200);
  });
});
