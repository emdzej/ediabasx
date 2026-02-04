import { SerialPort } from "serialport";

export interface EdiabasInterface {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  send(data: Uint8Array): Promise<void>;
  receive(timeout: number): Promise<Uint8Array>;
  isConnected(): boolean;
}

export type SerialAdapter = "inpa" | "ads" | "dcan";

export interface SerialConfig {
  port: string;
  baudRate?: number;
  dataBits?: 8;
  stopBits?: 1 | 2;
  parity?: "none" | "even" | "odd";
  initType: "fast" | "slow";
  timeout?: number;
  adapter?: SerialAdapter;
}

const DEFAULTS = {
  baudRate: 9600,
  dataBits: 8 as const,
  stopBits: 1 as const,
  parity: "none" as const,
  timeout: 5000,
};

const ADAPTER_PRESETS: Record<SerialAdapter, Partial<SerialConfig>> = {
  inpa: { baudRate: 9600, dataBits: 8, stopBits: 1, parity: "none" },
  ads: { baudRate: 9600, dataBits: 8, stopBits: 1, parity: "none" },
  dcan: { baudRate: 115200, dataBits: 8, stopBits: 1, parity: "none" },
};

const TIMING = {
  p1Min: 0,
  p1Max: 20,
  p2Min: 25,
  p2Max: 50,
  p3Min: 55,
  fastInitLow: 25,
  fastInitHigh: 25,
  slowInitBit: 200,
};

type PendingReceive = {
  resolve: (data: Uint8Array) => void;
  reject: (error: Error) => void;
  timeoutId: ReturnType<typeof setTimeout>;
};

export class SerialInterface implements EdiabasInterface {
  private readonly config: Required<Omit<SerialConfig, "adapter">> & {
    adapter?: SerialAdapter;
  };
  private port: SerialPort | null = null;
  private pendingReceives: PendingReceive[] = [];
  private bufferedData: Uint8Array[] = [];
  private lastSendAt: number | null = null;
  private lastReceiveAt: number | null = null;

  constructor(config: SerialConfig) {
    const adapterDefaults = config.adapter ? ADAPTER_PRESETS[config.adapter] : {};
    this.config = {
      ...DEFAULTS,
      ...adapterDefaults,
      ...config,
    };
  }

  isConnected(): boolean {
    return Boolean(this.port?.isOpen);
  }

  async connect(): Promise<void> {
    if (this.isConnected()) {
      return;
    }

    this.port = new SerialPort({
      path: this.config.port,
      baudRate: this.config.baudRate,
      dataBits: this.config.dataBits,
      stopBits: this.config.stopBits,
      parity: this.config.parity,
      autoOpen: false,
    });

    await new Promise<void>((resolve, reject) => {
      this.port?.open((error?: Error | null) => {
        if (error) {
          reject(this.normalizeError(error, this.config.port));
          return;
        }
        resolve();
      });
    });

    this.port.on("data", (data: Buffer) => this.handleData(data));
    this.port.on("error", (error: Error) => this.handleError(error));

    if (this.config.initType === "fast") {
      await this.kLineFastInit();
    } else {
      await this.kLineSlowInit();
    }
  }

  async disconnect(): Promise<void> {
    if (!this.port) {
      return;
    }

    await new Promise<void>((resolve, reject) => {
      if (!this.port) {
        resolve();
        return;
      }

      if (!this.port.isOpen) {
        resolve();
        return;
      }

      this.port.close((error?: Error | null) => {
        if (error) {
          reject(this.normalizeError(error, this.config.port));
          return;
        }
        resolve();
      });
    });

    this.port.removeAllListeners();
    this.port = null;
    this.failPendingReceives(new Error("Serial port disconnected"));
  }

  async send(data: Uint8Array): Promise<void> {
    this.ensureConnected();
    await this.enforceP3Timing();

    await new Promise<void>((resolve, reject) => {
      this.port?.write(Buffer.from(data), (error?: Error | null) => {
        if (error) {
          reject(this.normalizeError(error, this.config.port));
          return;
        }
        this.port?.drain((drainError?: Error | null) => {
          if (drainError) {
            reject(this.normalizeError(drainError, this.config.port));
            return;
          }
          resolve();
        });
      });
    });

    this.lastSendAt = Date.now();
  }

  async receive(timeout: number): Promise<Uint8Array> {
    this.ensureConnected();

    if (this.bufferedData.length > 0) {
      const data = this.bufferedData.shift() as Uint8Array;
      await this.enforceP2Timing();
      this.lastReceiveAt = Date.now();
      return data;
    }

    const timeoutMs = timeout ?? this.config.timeout;

    return new Promise<Uint8Array>((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        this.pendingReceives = this.pendingReceives.filter(
          (pending) => pending.timeoutId !== timeoutId,
        );
        reject(new Error(`Receive timeout after ${timeoutMs}ms`));
      }, timeoutMs);

      this.pendingReceives.push({
        resolve: async (payload) => {
          clearTimeout(timeoutId);
          await this.enforceP2Timing();
          this.lastReceiveAt = Date.now();
          resolve(payload);
        },
        reject: (error) => {
          clearTimeout(timeoutId);
          reject(error);
        },
        timeoutId,
      });
    });
  }

  private handleData(data: Buffer): void {
    const payload = new Uint8Array(data);
    const pending = this.pendingReceives.shift();
    if (pending) {
      void pending.resolve(payload);
      return;
    }
    this.bufferedData.push(payload);
  }

  private handleError(error: Error): void {
    this.failPendingReceives(this.normalizeError(error, this.config.port));
  }

  private failPendingReceives(error: Error): void {
    const pending = [...this.pendingReceives];
    this.pendingReceives = [];
    pending.forEach((entry) => entry.reject(error));
  }

  private ensureConnected(): void {
    if (!this.port || !this.port.isOpen) {
      throw new Error("Serial port is not connected");
    }
  }

  private async enforceP2Timing(): Promise<void> {
    if (this.lastSendAt === null) {
      return;
    }
    const elapsed = Date.now() - this.lastSendAt;
    const waitMs = Math.max(0, TIMING.p2Min - elapsed);
    if (waitMs > 0) {
      await this.delay(waitMs);
    }
  }

  private async enforceP3Timing(): Promise<void> {
    const lastActivity = Math.max(
      this.lastSendAt ?? 0,
      this.lastReceiveAt ?? 0,
    );
    if (!lastActivity) {
      return;
    }
    const elapsed = Date.now() - lastActivity;
    const waitMs = Math.max(0, TIMING.p3Min - elapsed);
    if (waitMs > 0) {
      await this.delay(waitMs);
    }
  }

  private async kLineFastInit(): Promise<void> {
    this.ensureConnected();
    await this.setLineState(true);
    await this.delay(TIMING.fastInitLow);
    await this.setLineState(false);
    await this.delay(TIMING.fastInitHigh);
  }

  private async kLineSlowInit(): Promise<void> {
    this.ensureConnected();
    const address = 0x33;
    const bits: number[] = [];
    bits.push(0); // start bit
    for (let i = 0; i < 8; i += 1) {
      bits.push((address >> i) & 0x01);
    }
    const parity = bits.slice(1).reduce((acc, bit) => acc + bit, 0) % 2;
    bits.push(parity === 0 ? 0 : 1); // even parity
    bits.push(1); // stop bit

    for (const bit of bits) {
      await this.setLineState(bit === 0);
      await this.delay(TIMING.slowInitBit);
    }
  }

  private async setLineState(activeLow: boolean): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this.port?.set({ brk: activeLow }, (error?: Error | null) => {
        if (error) {
          reject(this.normalizeError(error, this.config.port));
          return;
        }
        resolve();
      });
    });
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private normalizeError(error: Error, port: string): Error {
    const message = error.message || "Serial port error";
    if (/permission/i.test(message)) {
      return new Error(`Serial port permission denied: ${port}`);
    }
    if (/not found|enoent|no such file/i.test(message)) {
      return new Error(`Serial port not found: ${port}`);
    }
    return new Error(`Serial port error: ${message}`);
  }
}

export const SerialTiming = TIMING;
