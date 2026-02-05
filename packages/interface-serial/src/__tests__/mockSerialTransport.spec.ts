import { describe, expect, it, vi, afterEach } from "vitest";
import { MockSerialTransport } from "../mockSerialTransport";
import { SerialTimeoutError } from "../errors";

describe("MockSerialTransport", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns enqueued data", async () => {
    const transport = new MockSerialTransport();
    await transport.open("/dev/mock");
    transport.enqueueRead([0x01, 0x02, 0x03]);

    await expect(transport.read(3, 1000)).resolves.toEqual(
      Uint8Array.from([0x01, 0x02, 0x03])
    );
  });

  it("returns partial data after telegram-end timeout", async () => {
    vi.useFakeTimers();
    const transport = new MockSerialTransport({ telegramEndTimeoutMs: 10 });
    await transport.open("/dev/mock");

    const readPromise = transport.read(5, 1000);
    transport.enqueueRead([0xaa, 0xbb]);

    await vi.advanceTimersByTimeAsync(11);

    await expect(readPromise).resolves.toEqual(Uint8Array.from([0xaa, 0xbb]));
  });

  it("times out when no data arrives", async () => {
    vi.useFakeTimers();
    const transport = new MockSerialTransport();
    await transport.open("/dev/mock");

    const readPromise = transport.read(1, 5);
    const expectRejection = expect(readPromise).rejects.toThrow(
      SerialTimeoutError
    );

    await vi.advanceTimersByTimeAsync(5);
    await expectRejection;
  });

  it("captures writes", async () => {
    const transport = new MockSerialTransport();
    await transport.open("/dev/mock");

    await transport.write(Uint8Array.from([0x10, 0x20]));

    const writes = transport.getWrites();
    expect(writes).toHaveLength(1);
    expect(writes[0]).toEqual(Uint8Array.from([0x10, 0x20]));
  });
});
