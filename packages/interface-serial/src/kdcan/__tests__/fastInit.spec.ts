import { afterEach, describe, expect, it, vi } from "vitest";
import { MockSerialTransport } from "../../mockSerialTransport";
import { FAST_INIT_BREAK_MS, FAST_INIT_IDLE_MS } from "../constants";
import { KwpProtocols, parseKeyBytes, sendFastInit } from "../fastInit";

describe("fast init", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("sends 25ms break + 25ms idle with DTR and L-line", async () => {
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

    let resolved = false;
    const promise = sendFastInit(transport, { setDtr: true, useLLine: true }).then(
      () => {
        resolved = true;
      }
    );

    await vi.advanceTimersByTimeAsync(FAST_INIT_BREAK_MS + FAST_INIT_IDLE_MS - 1);
    expect(resolved).toBe(false);

    await vi.advanceTimersByTimeAsync(1);
    await promise;

    expect(setBreakSpy).toHaveBeenCalledWith(FAST_INIT_BREAK_MS);
    expect(setDtrSpy.mock.calls).toEqual([[true], [false]]);
    expect(setRtsSpy.mock.calls).toEqual([[true], [false]]);
  });

  it("uses pulse control when available", async () => {
    const transport = new MockSerialTransport() as MockSerialTransport & {
      sendPulse: (
        dataBits: number,
        length: number,
        pulseWidthMs: number,
        setDtr: boolean,
        bothLines: boolean
      ) => Promise<void>;
    };
    await transport.open("/dev/mock");

    transport.sendPulse = async () => undefined;
    const sendPulseSpy = vi
      .spyOn(transport, "sendPulse")
      .mockResolvedValue(undefined);
    const setBreakSpy = vi.spyOn(transport, "setBreak");
    const setDtrSpy = vi.spyOn(transport, "setDtr");

    await sendFastInit(transport, { setDtr: true, useLLine: true });

    expect(sendPulseSpy).toHaveBeenCalledWith(
      0x02,
      2,
      FAST_INIT_BREAK_MS,
      true,
      true
    );
    expect(setBreakSpy).not.toHaveBeenCalled();
    expect(setDtrSpy).not.toHaveBeenCalled();
  });

  it("parses key bytes into protocol type", () => {
    expect(parseKeyBytes(Uint8Array.from([0x12, 0x8f]))).toBe(
      KwpProtocols.Kwp2000
    );
    expect(parseKeyBytes(Uint8Array.from([0x12, 0x01]))).toBe(
      KwpProtocols.Kwp1281
    );
  });

  it("throws when key bytes are incomplete", () => {
    expect(() => parseKeyBytes(Uint8Array.from([0x12]))).toThrow(
      "Key bytes response must include at least 2 bytes"
    );
  });
});
