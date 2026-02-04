import { EdiabasInterface, EdiabasTimeoutError } from "@ediabas/interface-base";
import { SerialPort } from "serialport";

export type SerialPortLike = {
  isOpen: boolean;
  open: (callback: (error: Error | null | undefined) => void) => void;
  close: (callback: (error: Error | null | undefined) => void) => void;
  write: (
    data: Buffer,
    callback: (error: Error | null | undefined) => void
  ) => void;
  drain: (callback: (error: Error | null | undefined) => void) => void;
  set: (
    options: { brk: boolean },
    callback: (error: Error | null | undefined) => void
  ) => void;
  on: {
    (event: "data", listener: (data: Buffer) => void): void;
    (event: "error", listener: (error: Error) => void): void;
  };
  removeAllListeners: () => void;
};

export type SerialPortOpenOptions = {
  path: string;
  baudRate: number;
  dataBits?: 5 | 6 | 7 | 8;
  stopBits?: 1 | 1.5 | 2;
  parity?: "none" | "even" | "odd" | "mark" | "space";
  autoOpen?: boolean;
};

export type SerialInitType = "fast" | "slow" | "none";

export interface AdapterConfig {
  baudRate: number;
  dataBits: 5 | 6 | 7 | 8;
  stopBits: 1 | 1.5 | 2;
  parity: "none" | "even" | "odd" | "mark" | "space";
  initType: SerialInitType;
}

export const CommonAdapterConfigs = {
  inpa: {
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: "none",
    initType: "fast"
  },
  ads: {
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: "none",
    initType: "slow"
  },
  dcan: {
    baudRate: 115200,
    dataBits: 8,
    stopBits: 1,
    parity: "none",
    initType: "none"
  }
} as const satisfies Record<string, AdapterConfig>;

export type AdapterPreset = keyof typeof CommonAdapterConfigs;

export const SerialTiming = {
  p1Min: 0,
  p1Max: 20,
  p2Min: 25,
  p2Max: 50,
  p3Min: 55,
  fastInitLow: 25,
  fastInitHigh: 25,
  slowInitBit: 200
} as const;

export type SerialPortConstructor = new (
  options: SerialPortOpenOptions
) => SerialPortLike;

export interface SerialInterfaceConfig extends Partial<AdapterConfig> {
  port: string;
  adapter?: AdapterPreset;
  timeoutMs?: number;
  p1DelayMs?: number;
  portClass?: SerialPortConstructor;
}

type PendingReceive = {
  resolve: (value: Uint8Array) => void;
  reject: (error: Error) => void;
  timeoutId?: ReturnType<typeof setTimeout>;
};

const DEFAULT_CONFIG: AdapterConfig & {
  timeoutMs: number;
  p1DelayMs: number;
} = {
  baudRate: 9600,
  dataBits: 8,
  stopBits: 1,
  parity: "none",
  initType: "fast",
  timeoutMs: 5000,
  p1DelayMs: 0
};

export class SerialInterface extends EdiabasInterface {
  protected connected = false;

  private config: AdapterConfig & {
    port: string;
    timeoutMs: number;
    p1DelayMs: number;
    portClass: SerialPortConstructor;
  };
  private port: SerialPortLike | null = null;
  private pendingReceives: PendingReceive[] = [];
  private bufferedData: Uint8Array[] = [];
  private lastSendAt: number | null = null;
  private lastReceiveAt: number | null = null;
  private lastByteSentAt: number | null = null;

  constructor(config: SerialInterfaceConfig) {
    super();
    const adapterDefaults = config.adapter
      ? CommonAdapterConfigs[config.adapter]
      : undefined;
    const merged = {
      ...DEFAULT_CONFIG,
      ...adapterDefaults,
      ...config
    };
    this.config = {
      port: merged.port,
      baudRate: merged.baudRate,
      dataBits: merged.dataBits,
      stopBits: merged.stopBits,
      parity: merged.parity,
      initType: merged.initType,
      timeoutMs: merged.timeoutMs,
      p1DelayMs: this.clampP1(merged.p1DelayMs),
      portClass: merged.portClass ?? SerialPort
    };
  }

  async connect(): Promise<void> {
    if (this.connected) {
      return;
    }
    this.port = new this.config.portClass({
      path: this.config.port,
      baudRate: this.config.baudRate,
      dataBits: this.config.dataBits,
      stopBits: this.config.stopBits,
      parity: this.config.parity,
      autoOpen: false
    });

    await new Promise<void>((resolve, reject) => {
      this.port?.open((error) => {
        if (error) {
          reject(this.normalizeError(error, this.config.port));
          return;
        }
        resolve();
      });
    });

    this.port.on("data", (data) => this.handleData(data));
    this.port.on("error", (error) => this.handleError(error));

    this.connected = true;

    if (this.config.initType === "fast") {
      await this.kLineFastInit();
    } else if (this.config.initType === "slow") {
      await this.kLineSlowInit();
    }
  }

  async disconnect(): Promise<void> {
    if (!this.port) {
      this.connected = false;
      return;
    }

    await new Promise<void>((resolve, reject) => {
      if (!this.port || !this.port.isOpen) {
        resolve();
        return;
      }
      this.port.close((error) => {
        if (error) {
          reject(this.normalizeError(error, this.config.port));
          return;
        }
        resolve();
      });
    });

    this.port.removeAllListeners();
    this.port = null;
    this.connected = false;
    this.failPendingReceives(new Error("Disconnected"));
  }

  async send(data: Uint8Array): Promise<void> {
    this.assertConnected();
    await this.enforceP3Timing();

    for (let index = 0; index < data.length; index += 1) {
      await this.enforceP1Timing();
      await this.writeAndDrain(Uint8Array.of(data[index]));
      this.lastByteSentAt = this.now();
    }

    this.lastSendAt = this.now();
  }

  async receive(timeoutMs?: number): Promise<Uint8Array> {
    this.assertConnected();
    const queued = this.bufferedData.shift();
    if (queued) {
      await this.enforceP2Timing();
      this.lastReceiveAt = this.now();
      return queued;
    }

    const timeout = timeoutMs ?? this.config.timeoutMs;

    return new Promise<Uint8Array>((resolve, reject) => {
      const pending: PendingReceive = {
        resolve: async (payload) => {
          if (pending.timeoutId) {
            clearTimeout(pending.timeoutId);
          }
          await this.enforceP2Timing();
          this.lastReceiveAt = this.now();
          resolve(payload);
        },
        reject: (error) => {
          if (pending.timeoutId) {
            clearTimeout(pending.timeoutId);
          }
          reject(error);
        }
      };

      if (timeout > 0) {
        pending.timeoutId = setTimeout(() => {
          this.removePending(pending);
          reject(new EdiabasTimeoutError());
        }, timeout);
      }

      this.pendingReceives.push(pending);
    });
  }

  protected async kLineFastInit(): Promise<void> {
    this.assertConnected();
    await this.setLineState(true);
    await this.delay(SerialTiming.fastInitLow);
    await this.setLineState(false);
    await this.delay(SerialTiming.fastInitHigh);
  }

  protected async kLineSlowInit(): Promise<void> {
    this.assertConnected();
    const address = 0x33;
    const bits: number[] = [0];
    for (let i = 0; i < 8; i += 1) {
      bits.push((address >> i) & 0x01);
    }
    const parity = bits.slice(1).reduce((acc, bit) => acc + bit, 0) % 2;
    bits.push(parity === 0 ? 0 : 1);
    bits.push(1);

    for (const bit of bits) {
      await this.setLineState(bit === 0);
      await this.delay(SerialTiming.slowInitBit);
    }
  }

  protected delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  protected now(): number {
    return Date.now();
  }

  private async writeAndDrain(payload: Uint8Array): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this.port?.write(Buffer.from(payload), (error) => {
        if (error) {
          reject(this.normalizeError(error, this.config.port));
          return;
        }
        this.port?.drain((drainError) => {
          if (drainError) {
            reject(this.normalizeError(drainError, this.config.port));
            return;
          }
          resolve();
        });
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
    const pending = this.pendingReceives.splice(0);
    pending.forEach((entry) => entry.reject(error));
  }

  private removePending(pending: PendingReceive): void {
    const index = this.pendingReceives.indexOf(pending);
    if (index >= 0) {
      this.pendingReceives.splice(index, 1);
    }
  }

  private assertConnected(): void {
    if (!this.port || !this.port.isOpen || !this.connected) {
      throw new Error("Not connected");
    }
  }

  private clampP1(value?: number): number {
    if (value === undefined) {
      return DEFAULT_CONFIG.p1DelayMs;
    }
    return Math.min(Math.max(value, SerialTiming.p1Min), SerialTiming.p1Max);
  }

  private async enforceP1Timing(): Promise<void> {
    if (this.lastByteSentAt === null) {
      return;
    }
    const elapsed = this.now() - this.lastByteSentAt;
    const target = this.config.p1DelayMs;
    const waitMs = Math.max(0, target - elapsed);
    if (waitMs > 0) {
      await this.delay(waitMs);
    }
  }

  private async enforceP2Timing(): Promise<void> {
    if (this.lastSendAt === null) {
      return;
    }
    const elapsed = this.now() - this.lastSendAt;
    const waitMs = Math.max(0, SerialTiming.p2Min - elapsed);
    if (waitMs > 0) {
      await this.delay(waitMs);
    }
  }

  private async enforceP3Timing(): Promise<void> {
    if (this.lastSendAt === null && this.lastReceiveAt === null) {
      return;
    }
    const lastActivity = Math.max(this.lastSendAt ?? 0, this.lastReceiveAt ?? 0);
    const elapsed = this.now() - lastActivity;
    const waitMs = Math.max(0, SerialTiming.p3Min - elapsed);
    if (waitMs > 0) {
      await this.delay(waitMs);
    }
  }

  protected async setLineState(activeLow: boolean): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this.port?.set({ brk: activeLow }, (error) => {
        if (error) {
          reject(this.normalizeError(error, this.config.port));
          return;
        }
        resolve();
      });
    });
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
