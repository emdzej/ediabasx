import { SerialPort } from "serialport";
import { SerialTimeoutError } from "./errors";
import { SerialTransport, SerialTransportConfig } from "./types";

type SerialPortCtor = typeof SerialPort;

type SerialPortSignals = {
  dtr?: boolean;
  rts?: boolean;
  brk?: boolean;
};

type SerialPortLike = {
  isOpen: boolean;
  open: (callback: (error?: Error | null) => void) => void;
  close: (callback: (error?: Error | null) => void) => void;
  write: (data: Buffer, callback: (error?: Error | null) => void) => void;
  drain: (callback: (error?: Error | null) => void) => void;
  set: (signals: SerialPortSignals, callback: (error?: Error | null) => void) => void;
  flush?: (callback: (error?: Error | null) => void) => void;
  on: (event: "data", listener: (data: Buffer) => void) => void;
  on: (event: "error", listener: (error: Error) => void) => void;
  removeAllListeners: () => void;
};

type PendingRead = {
  length: number;
  collected: number[];
  resolve: (data: Uint8Array) => void;
  reject: (error: Error) => void;
  timeoutId?: ReturnType<typeof setTimeout>;
  telegramTimeoutId?: ReturnType<typeof setTimeout>;
};

type NodeSerialTransportOptions = {
  portClass?: SerialPortCtor;
  telegramEndTimeoutMs?: number;
};

const DEFAULT_CONFIG: SerialTransportConfig = {
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1
};

const DEFAULT_TELEGRAM_END_TIMEOUT_MS = 20;

export class NodeSerialTransport implements SerialTransport {
  private port: SerialPortLike | null = null;
  private portPath: string | null = null;
  private config: SerialTransportConfig = { ...DEFAULT_CONFIG };
  private readonly portClass: SerialPortCtor;
  private readonly telegramEndTimeoutMs: number;
  private bufferedData: number[] = [];
  private pendingReads: PendingRead[] = [];

  constructor(options: NodeSerialTransportOptions = {}) {
    this.portClass = options.portClass ?? SerialPort;
    this.telegramEndTimeoutMs =
      options.telegramEndTimeoutMs ?? DEFAULT_TELEGRAM_END_TIMEOUT_MS;
  }

  async open(port: string): Promise<void> {
    if (this.port?.isOpen) {
      return;
    }
    this.portPath = port;
    this.port = new this.portClass({
      path: port,
      baudRate: this.config.baudRate,
      dataBits: this.config.dataBits,
      stopBits: this.config.stopBits,
      parity: this.config.parity,
      autoOpen: false
    }) as SerialPortLike;

    await new Promise<void>((resolve, reject) => {
      this.port?.open((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });

    this.port.on("data", (data) => this.handleData(data));
    this.port.on("error", (error) => this.handleError(error));
  }

  async close(): Promise<void> {
    if (!this.port) {
      return;
    }

    await new Promise<void>((resolve, reject) => {
      if (!this.port || !this.port.isOpen) {
        resolve();
        return;
      }
      this.port.close((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });

    this.port.removeAllListeners();
    this.port = null;
    this.bufferedData = [];
    this.failPendingReads(new Error("Serial port closed"));
  }

  async configure(config: SerialTransportConfig): Promise<void> {
    this.config = { ...config };
    if (this.port?.isOpen && this.portPath) {
      await this.close();
      await this.open(this.portPath);
    }
  }

  async setDtr(value: boolean): Promise<void> {
    await this.setSignals({ dtr: value });
  }

  async setRts(value: boolean): Promise<void> {
    await this.setSignals({ rts: value });
  }

  async setBreak(durationMs: number): Promise<void> {
    if (durationMs <= 0) {
      await this.setSignals({ brk: false });
      return;
    }
    await this.setSignals({ brk: true });
    await this.delay(durationMs);
    await this.setSignals({ brk: false });
  }

  async purge(): Promise<void> {
    this.bufferedData = [];
    if (!this.port) {
      return;
    }
    await new Promise<void>((resolve, reject) => {
      const flush = this.port?.flush;
      if (!flush) {
        resolve();
        return;
      }
      flush.call(this.port, (error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
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
    if (data.length === 0) {
      return;
    }

    await new Promise<void>((resolve, reject) => {
      this.port?.write(Buffer.from(data), (error) => {
        if (error) {
          reject(error);
          return;
        }
        this.port?.drain((drainError) => {
          if (drainError) {
            reject(drainError);
            return;
          }
          resolve();
        });
      });
    });
  }

  private handleData(data: Buffer): void {
    for (const value of data.values()) {
      this.bufferedData.push(value);
    }
    this.flushPendingReads();
  }

  private handleError(error: Error): void {
    this.failPendingReads(error);
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

  private async setSignals(signals: SerialPortSignals): Promise<void> {
    this.assertOpen();
    await new Promise<void>((resolve, reject) => {
      this.port?.set(signals, (error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }

  private assertOpen(): void {
    if (!this.port || !this.port.isOpen) {
      throw new Error("Serial port not open");
    }
  }

  private delay(durationMs: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, durationMs));
  }
}
