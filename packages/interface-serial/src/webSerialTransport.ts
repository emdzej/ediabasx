import { SerialTimeoutError } from "./errors";
import type { SerialTransport, SerialTransportConfig } from "./types";

// Minimal subset of the Web Serial API surface this transport touches. Kept
// local so the package doesn't need `"lib": ["DOM"]` in its tsconfig — the
// Node side (NodeSerialTransport, gateway, …) compiles cleanly without DOM
// types, and browser consumers get a SerialPort object from
// `navigator.serial.requestPort()` that conforms to this shape.

interface WebSerialOptions {
  baudRate: number;
  dataBits?: 7 | 8;
  parity?: "none" | "even" | "odd";
  stopBits?: 1 | 2;
  bufferSize?: number;
  flowControl?: "none" | "hardware";
}

interface WebSerialSignals {
  dataTerminalReady?: boolean;
  requestToSend?: boolean;
  break?: boolean;
}

interface WebReadable {
  getReader(): WebReader;
  cancel(reason?: unknown): Promise<void>;
}

interface WebReader {
  read(): Promise<{ value?: Uint8Array; done: boolean }>;
  cancel(reason?: unknown): Promise<void>;
  releaseLock(): void;
}

interface WebWritable {
  getWriter(): WebWriter;
  abort(reason?: unknown): Promise<void>;
}

interface WebWriter {
  write(chunk: Uint8Array): Promise<void>;
  close(): Promise<void>;
  releaseLock(): void;
  ready: Promise<void>;
}

export interface WebSerialPortLike {
  readable: WebReadable | null;
  writable: WebWritable | null;
  open(options: WebSerialOptions): Promise<void>;
  close(): Promise<void>;
  setSignals(signals: WebSerialSignals): Promise<void>;
  forget?(): Promise<void>;
}

const DEFAULT_CONFIG: SerialTransportConfig = {
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1,
};

type PendingRead = {
  length: number;
  collected: number[];
  resolve: (data: Uint8Array) => void;
  reject: (error: Error) => void;
  timeoutId?: ReturnType<typeof setTimeout>;
  telegramTimeoutId?: ReturnType<typeof setTimeout>;
};

type WebSerialTransportOptions = {
  /**
   * Idle-detection timeout once at least one byte has arrived — mirrors
   * NodeSerialTransport's `telegramEndTimeoutMs`. Defaults to 20 ms.
   */
  telegramEndTimeoutMs?: number;
};

/**
 * `SerialTransport` implementation backed by the Web Serial API
 * (`navigator.serial`). Construct with a `SerialPort` obtained from
 * `navigator.serial.requestPort()` — this transport owns the port from
 * `open()` until `close()` and re-applies the active `SerialTransportConfig`
 * on each open.
 *
 * Web Serial doesn't allow reconfiguring an open port, so `configure()`
 * closes and re-opens the port when it has to change baud/parity/etc.
 * mid-session (e.g. K-line baud switching between adapter probe and KWP).
 *
 * The port is supplied externally rather than constructed via
 * `navigator.serial.requestPort()` here so the consumer can run the
 * permission prompt in response to a user gesture (a browser requirement)
 * and persist the granted port via `navigator.serial.getPorts()` across
 * page reloads.
 */
export class WebSerialTransport implements SerialTransport {
  private readonly port: WebSerialPortLike;
  private readonly telegramEndTimeoutMs: number;
  private config: SerialTransportConfig = { ...DEFAULT_CONFIG };
  private opened = false;
  private reader: WebReader | null = null;
  private writer: WebWriter | null = null;
  private bufferedData: number[] = [];
  private pendingReads: PendingRead[] = [];
  private readLoop: Promise<void> | null = null;
  private closing = false;

  constructor(port: WebSerialPortLike, options: WebSerialTransportOptions = {}) {
    this.port = port;
    this.telegramEndTimeoutMs = options.telegramEndTimeoutMs ?? 20;
  }

  async open(_port?: string): Promise<void> {
    if (this.opened) return;
    await this.port.open({
      baudRate: this.config.baudRate,
      dataBits: this.config.dataBits,
      parity: this.config.parity,
      stopBits: this.config.stopBits,
    });
    this.opened = true;
    this.attachWriter();
    this.startReadLoop();
  }

  async close(): Promise<void> {
    if (!this.opened) return;
    this.closing = true;
    // Reject any outstanding reads so callers don't hang on close.
    for (const pending of this.pendingReads.splice(0)) {
      if (pending.timeoutId) clearTimeout(pending.timeoutId);
      if (pending.telegramTimeoutId) clearTimeout(pending.telegramTimeoutId);
      pending.reject(new Error("Serial port closed"));
    }
    try {
      this.writer?.releaseLock();
    } catch {
      /* ignore */
    }
    this.writer = null;
    try {
      await this.reader?.cancel();
    } catch {
      /* ignore */
    }
    try {
      this.reader?.releaseLock();
    } catch {
      /* ignore */
    }
    this.reader = null;
    // Wait for the read loop to fully unwind so the next open() doesn't race.
    if (this.readLoop) {
      try {
        await this.readLoop;
      } catch {
        /* ignore — cancellation surfaces here */
      }
      this.readLoop = null;
    }
    try {
      await this.port.close();
    } catch {
      /* ignore */
    }
    this.opened = false;
    this.closing = false;
    this.bufferedData.length = 0;
  }

  async configure(config: SerialTransportConfig): Promise<void> {
    const same =
      this.config.baudRate === config.baudRate &&
      this.config.dataBits === config.dataBits &&
      this.config.parity === config.parity &&
      this.config.stopBits === config.stopBits;
    this.config = { ...config };
    if (!this.opened || same) return;
    // Web Serial doesn't allow live reconfiguration. The K+DCAN path
    // legitimately switches baud mid-session (e.g. 115200 for the cable's
    // adapter telegrams, then K-line baud through the adapter); close and
    // re-open with the new parameters.
    await this.close();
    await this.open();
  }

  async setDtr(value: boolean): Promise<void> {
    if (!this.opened) return;
    await this.port.setSignals({ dataTerminalReady: value });
  }

  async setRts(value: boolean): Promise<void> {
    if (!this.opened) return;
    await this.port.setSignals({ requestToSend: value });
  }

  async setBreak(durationMs: number): Promise<void> {
    if (!this.opened) return;
    await this.port.setSignals({ break: true });
    await new Promise<void>((resolve) => setTimeout(resolve, Math.max(0, durationMs)));
    await this.port.setSignals({ break: false });
  }

  async purge(): Promise<void> {
    this.bufferedData.length = 0;
  }

  async write(data: Uint8Array): Promise<void> {
    if (!this.opened || !this.writer) {
      throw new Error("Serial port is not open");
    }
    await this.writer.ready;
    // Web Serial writers accept Uint8Array directly. Clone so the caller can
    // reuse the buffer without us holding a reference past the await.
    await this.writer.write(new Uint8Array(data));
  }

  read(length: number, timeoutMs: number): Promise<Uint8Array> {
    if (length <= 0) {
      return Promise.resolve(new Uint8Array(0));
    }
    return new Promise<Uint8Array>((resolve, reject) => {
      const pending: PendingRead = {
        length,
        collected: [],
        resolve,
        reject,
      };
      // Drain anything already buffered.
      if (this.bufferedData.length > 0) {
        const take = Math.min(this.bufferedData.length, length);
        pending.collected = this.bufferedData.splice(0, take);
        if (pending.collected.length === length) {
          resolve(Uint8Array.from(pending.collected));
          return;
        }
      }
      this.pendingReads.push(pending);
      if (timeoutMs > 0) {
        pending.timeoutId = setTimeout(() => {
          this.removePending(pending);
          reject(new SerialTimeoutError(`Serial read timed out after ${timeoutMs}ms (got ${pending.collected.length}/${length})`));
        }, timeoutMs);
      }
    });
  }

  private attachWriter(): void {
    if (!this.port.writable) {
      throw new Error("Serial port has no writable stream");
    }
    this.writer = this.port.writable.getWriter();
  }

  private startReadLoop(): void {
    if (!this.port.readable) {
      throw new Error("Serial port has no readable stream");
    }
    const reader = this.port.readable.getReader();
    this.reader = reader;
    this.readLoop = (async () => {
      try {
        while (this.opened) {
          const { value, done } = await reader.read();
          if (done) break;
          if (value && value.length > 0) {
            this.onIncomingChunk(value);
          }
        }
      } catch (error) {
        if (!this.closing) {
          // Surface the error to any pending readers so they don't hang.
          for (const pending of this.pendingReads.splice(0)) {
            if (pending.timeoutId) clearTimeout(pending.timeoutId);
            if (pending.telegramTimeoutId) clearTimeout(pending.telegramTimeoutId);
            pending.reject(error as Error);
          }
        }
      }
    })();
  }

  private onIncomingChunk(chunk: Uint8Array): void {
    for (let i = 0; i < chunk.length; i++) {
      this.bufferedData.push(chunk[i]);
    }
    this.deliverToPendingReads();
  }

  private deliverToPendingReads(): void {
    while (this.pendingReads.length > 0 && this.bufferedData.length > 0) {
      const pending = this.pendingReads[0];
      const needed = pending.length - pending.collected.length;
      const take = Math.min(needed, this.bufferedData.length);
      const slice = this.bufferedData.splice(0, take);
      pending.collected.push(...slice);

      // Refresh the idle-detection timer each time a byte lands. Once N bytes
      // have arrived, the telegram is treated as complete after
      // telegramEndTimeoutMs of silence — mirrors NodeSerialTransport.
      if (pending.telegramTimeoutId) {
        clearTimeout(pending.telegramTimeoutId);
      }

      if (pending.collected.length === pending.length) {
        this.completePending(pending);
      } else if (this.telegramEndTimeoutMs > 0) {
        pending.telegramTimeoutId = setTimeout(() => {
          // Idle timeout — return whatever we've collected so far so the
          // caller can decide whether it's enough.
          this.completePending(pending);
        }, this.telegramEndTimeoutMs);
      }
    }
  }

  private completePending(pending: PendingRead): void {
    if (pending.timeoutId) clearTimeout(pending.timeoutId);
    if (pending.telegramTimeoutId) clearTimeout(pending.telegramTimeoutId);
    this.removePending(pending);
    pending.resolve(Uint8Array.from(pending.collected));
  }

  private removePending(pending: PendingRead): void {
    const idx = this.pendingReads.indexOf(pending);
    if (idx >= 0) this.pendingReads.splice(idx, 1);
  }
}
