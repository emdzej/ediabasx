import { SerialTimeoutError } from "./errors";
import { SerialTransport, SerialTransportConfig } from "./types";

type PendingRead = {
  length: number;
  collected: number[];
  resolve: (data: Uint8Array) => void;
  reject: (error: Error) => void;
  timeoutId?: ReturnType<typeof setTimeout>;
  telegramTimeoutId?: ReturnType<typeof setTimeout>;
};

type ScheduledChunk = {
  data: Uint8Array;
  delayMs: number;
};

const DEFAULT_TELEGRAM_END_TIMEOUT_MS = 20;

export class MockSerialTransport implements SerialTransport {
  private isOpen = false;
  private config: SerialTransportConfig = {
    baudRate: 9600,
    dataBits: 8,
    parity: "none",
    stopBits: 1
  };
  private bufferedData: number[] = [];
  private pendingReads: PendingRead[] = [];
  private telegramEndTimeoutMs: number;
  private readonly writeLog: Uint8Array[] = [];

  constructor(options: { telegramEndTimeoutMs?: number } = {}) {
    this.telegramEndTimeoutMs =
      options.telegramEndTimeoutMs ?? DEFAULT_TELEGRAM_END_TIMEOUT_MS;
  }

  async open(port: string): Promise<void> {
    void port;
    this.isOpen = true;
  }

  async close(): Promise<void> {
    this.isOpen = false;
    this.bufferedData = [];
    this.failPendingReads(new Error("Serial port closed"));
  }

  async configure(config: SerialTransportConfig): Promise<void> {
    this.config = { ...config };
  }

  async setDtr(value: boolean): Promise<void> {
    void value;
    this.assertOpen();
  }

  async setRts(value: boolean): Promise<void> {
    void value;
    this.assertOpen();
  }

  async setBreak(durationMs: number): Promise<void> {
    void durationMs;
    this.assertOpen();
  }

  setTelegramEndTimeout(ms: number): void {
    if (Number.isFinite(ms) && ms > 0) {
      this.telegramEndTimeoutMs = ms;
    }
  }

  async purge(): Promise<void> {
    this.bufferedData = [];
  }

  async read(length: number, timeoutMs: number): Promise<Uint8Array> {
    if (length <= 0) {
      return new Uint8Array();
    }
    this.assertOpen();

    const fromBuffer = this.consumeBuffered(length);
    if (fromBuffer.length >= length) {
      return fromBuffer;
    }

    return new Promise<Uint8Array>((resolve, reject) => {
      const pending: PendingRead = {
        length,
        collected: Array.from(fromBuffer),
        resolve,
        reject
      };

      if (timeoutMs > 0) {
        pending.timeoutId = setTimeout(() => {
          this.removePending(pending);
          reject(new SerialTimeoutError());
        }, timeoutMs);
      }

      if (pending.collected.length > 0) {
        this.resetTelegramTimer(pending);
      }

      this.pendingReads.push(pending);
    });
  }

  async write(data: Uint8Array): Promise<void> {
    this.assertOpen();
    this.writeLog.push(Uint8Array.from(data));
  }

  enqueueRead(data: Uint8Array | number[], delayMs = 0): void {
    const payload = data instanceof Uint8Array ? data : Uint8Array.from(data);
    const chunk: ScheduledChunk = { data: payload, delayMs };
    if (delayMs > 0) {
      void this.scheduleChunkAsync(chunk);
    } else {
      this.scheduleChunkSync(chunk);
    }
  }

  getWrites(): Uint8Array[] {
    return [...this.writeLog];
  }

  private async scheduleChunkAsync(chunk: ScheduledChunk): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, chunk.delayMs));
    this.scheduleChunkSync(chunk);
  }

  private scheduleChunkSync(chunk: ScheduledChunk): void {
    for (const value of chunk.data.values()) {
      this.bufferedData.push(value);
    }
    this.flushPendingReads();
  }

  private consumeBuffered(length: number): Uint8Array {
    if (this.bufferedData.length === 0 || length <= 0) {
      return new Uint8Array();
    }
    const takeCount = Math.min(length, this.bufferedData.length);
    const chunk = this.bufferedData.splice(0, takeCount);
    return Uint8Array.from(chunk);
  }

  private flushPendingReads(): void {
    while (this.pendingReads.length > 0) {
      const pending = this.pendingReads[0];
      const available = this.consumeBuffered(pending.length - pending.collected.length);
      if (available.length > 0) {
        pending.collected.push(...available);
        this.resetTelegramTimer(pending);
      }

      if (pending.collected.length >= pending.length) {
        this.pendingReads.shift();
        this.resolvePending(pending);
        continue;
      }

      if (pending.collected.length > 0) {
        this.resetTelegramTimer(pending);
      }

      break;
    }
  }

  private resetTelegramTimer(pending: PendingRead): void {
    if (this.telegramEndTimeoutMs <= 0) {
      return;
    }
    if (pending.telegramTimeoutId) {
      clearTimeout(pending.telegramTimeoutId);
    }
    pending.telegramTimeoutId = setTimeout(() => {
      this.removePending(pending);
      pending.resolve(Uint8Array.from(pending.collected));
    }, this.telegramEndTimeoutMs);
  }

  private resolvePending(pending: PendingRead): void {
    if (pending.timeoutId) {
      clearTimeout(pending.timeoutId);
    }
    if (pending.telegramTimeoutId) {
      clearTimeout(pending.telegramTimeoutId);
    }
    pending.resolve(Uint8Array.from(pending.collected));
  }

  private failPendingReads(error: Error): void {
    const pending = this.pendingReads.splice(0);
    for (const entry of pending) {
      if (entry.timeoutId) {
        clearTimeout(entry.timeoutId);
      }
      if (entry.telegramTimeoutId) {
        clearTimeout(entry.telegramTimeoutId);
      }
      entry.reject(error);
    }
  }

  private removePending(pending: PendingRead): void {
    const index = this.pendingReads.indexOf(pending);
    if (index >= 0) {
      this.pendingReads.splice(index, 1);
    }
    if (pending.timeoutId) {
      clearTimeout(pending.timeoutId);
    }
    if (pending.telegramTimeoutId) {
      clearTimeout(pending.telegramTimeoutId);
    }
  }

  private assertOpen(): void {
    if (!this.isOpen) {
      throw new Error("Serial port not open");
    }
  }
}
