import { EventEmitter } from "events";
import type { SerialPort } from "serialport";
import { afterEach, describe, expect, it, vi } from "vitest";
import { SerialTimeoutError } from "../errors";
import { NodeSerialTransport } from "../nodeSerialTransport";

class FakeSerialPort extends EventEmitter {
  static instances: FakeSerialPort[] = [];

  isOpen = false;
  readonly options: Record<string, unknown>;
  readonly writeLog: Buffer[] = [];
  readonly signalLog: Array<Record<string, unknown>> = [];
  flushCount = 0;

  constructor(options: Record<string, unknown>) {
    super();
    this.options = options;
    FakeSerialPort.instances.push(this);
  }

  open(callback: (error?: Error | null) => void): void {
    this.isOpen = true;
    callback();
  }

  close(callback: (error?: Error | null) => void): void {
    this.isOpen = false;
    callback();
  }

  write(data: Buffer, callback: (error?: Error | null) => void): void {
    this.writeLog.push(Buffer.from(data));
    callback();
  }

  drain(callback: (error?: Error | null) => void): void {
    callback();
  }

  set(signals: Record<string, unknown>, callback: (error?: Error | null) => void): void {
    this.signalLog.push({ ...signals });
    callback();
  }

  flush(callback: (error?: Error | null) => void): void {
    this.flushCount += 1;
    callback();
  }

  emitData(data: Uint8Array): void {
    this.emit("data", Buffer.from(data));
  }
}

describe("NodeSerialTransport", () => {
  afterEach(() => {
    FakeSerialPort.instances = [];
    vi.useRealTimers();
  });

  it("reads full length when data arrives", async () => {
    const transport = new NodeSerialTransport({
      portClass: FakeSerialPort as unknown as typeof SerialPort
    });
    await transport.open("/dev/mock");
    const port = FakeSerialPort.instances[0];

    const readPromise = transport.read(3, 1000);
    port.emitData(Uint8Array.from([0x01]));
    port.emitData(Uint8Array.from([0x02, 0x03]));

    await expect(readPromise).resolves.toEqual(Uint8Array.from([0x01, 0x02, 0x03]));
  });

  it("returns partial data on telegram-end timeout", async () => {
    vi.useFakeTimers();
    const transport = new NodeSerialTransport({
      portClass: FakeSerialPort as unknown as typeof SerialPort,
      telegramEndTimeoutMs: 10
    });
    await transport.open("/dev/mock");
    const port = FakeSerialPort.instances[0];

    const readPromise = transport.read(5, 1000);
    port.emitData(Uint8Array.from([0xaa, 0xbb]));

    await vi.advanceTimersByTimeAsync(11);

    await expect(readPromise).resolves.toEqual(Uint8Array.from([0xaa, 0xbb]));
  });

  it("times out when no data arrives", async () => {
    vi.useFakeTimers();
    const transport = new NodeSerialTransport({
      portClass: FakeSerialPort as unknown as typeof SerialPort,
      telegramEndTimeoutMs: 50
    });
    await transport.open("/dev/mock");

    const readPromise = transport.read(1, 5);
    const expectation = expect(readPromise).rejects.toBeInstanceOf(SerialTimeoutError);

    await vi.advanceTimersByTimeAsync(5);

    await expectation;
  });

  it("writes and sets control lines", async () => {
    const transport = new NodeSerialTransport({
      portClass: FakeSerialPort as unknown as typeof SerialPort
    });
    await transport.open("/dev/mock");
    const port = FakeSerialPort.instances[0];

    await transport.write(Uint8Array.from([0x10, 0x20]));
    expect(port.writeLog[0]).toEqual(Buffer.from([0x10, 0x20]));

    await transport.setDtr(true);
    await transport.setRts(false);
    expect(port.signalLog).toEqual([{ dtr: true }, { rts: false }]);
  });

  it("toggles break and purges buffers", async () => {
    vi.useFakeTimers();
    const transport = new NodeSerialTransport({
      portClass: FakeSerialPort as unknown as typeof SerialPort
    });
    await transport.open("/dev/mock");
    const port = FakeSerialPort.instances[0];

    const breakPromise = transport.setBreak(10);
    await vi.advanceTimersByTimeAsync(10);
    await breakPromise;

    expect(port.signalLog).toEqual([{ brk: true }, { brk: false }]);

    await transport.purge();
    expect(port.flushCount).toBe(1);
  });
});
