import { EdiabasInterface } from "./EdiabasInterface";

export class EdiabasTimeoutError extends Error {
  constructor(message = "Receive timed out") {
    super(message);
    this.name = "EdiabasTimeoutError";
  }
}

type PendingReceiver = {
  resolve: (value: Uint8Array) => void;
  reject: (error: Error) => void;
  timer?: ReturnType<typeof setTimeout>;
};

export class SimulationInterface extends EdiabasInterface {
  private responses = new Map<string, Uint8Array>();
  private responseQueue: Uint8Array[] = [];
  private frequentBuffer: Uint8Array | null = null;
  private pendingReceivers: PendingReceiver[] = [];
  private ports = new Map<number, number>();
  private _ignitionVoltage = 0;
  private _loopTest = 0;
  private _programVoltage = 0;
  private _siRelaisTime = 0;

  async connect(): Promise<void> {
    this.connected = true;
  }

  async disconnect(): Promise<void> {
    this.connected = false;
    this.flushPending(new Error("Disconnected"));
  }

  async send(data: Uint8Array): Promise<void> {
    this.assertConnected();
    const key = this.toKey(data);
    const response = this.responses.get(key);
    if (!response) {
      return;
    }
    this.enqueueResponse(response);
  }

  async receive(timeoutMs = 0): Promise<Uint8Array> {
    this.assertConnected();
    const queued = this.responseQueue.shift();
    if (queued) {
      return queued;
    }

    return new Promise<Uint8Array>((resolve, reject) => {
      const pending: PendingReceiver = { resolve, reject };
      if (timeoutMs > 0) {
        pending.timer = setTimeout(() => {
          this.removePending(pending);
          reject(new EdiabasTimeoutError());
        }, timeoutMs);
      }
      this.pendingReceivers.push(pending);
    });
  }

  async transmitFrequent(data: Uint8Array): Promise<void> {
    this.assertConnected();
    this.frequentBuffer = data;
  }

  async receiveFrequent(): Promise<Uint8Array> {
    this.assertConnected();
    return this.frequentBuffer ?? new Uint8Array(0);
  }

  async stopFrequent(): Promise<void> {
    this.frequentBuffer = null;
  }

  getPort(index: number): number {
    return this.ports.get(index) ?? 0;
  }

  setPort(index: number, value: number): void {
    this.ports.set(index, value);
  }

  get ignitionVoltage(): number {
    return this._ignitionVoltage;
  }

  get loopTest(): number {
    return this._loopTest;
  }

  setProgramVoltage(value: number): void {
    this._programVoltage = value;
  }

  rawData(request: Uint8Array): Uint8Array {
    this.assertConnected();
    const key = this.toKey(request);
    return this.responses.get(key) ?? new Uint8Array();
  }

  switchSiRelais(time: number): void {
    this._siRelaisTime = time;
  }

  setResponse(request: Uint8Array | number[], response: Uint8Array | number[]): void {
    const key = this.toKey(request);
    this.responses.set(key, this.toBytes(response));
  }

  private enqueueResponse(response: Uint8Array): void {
    const pending = this.pendingReceivers.shift();
    if (!pending) {
      this.responseQueue.push(response);
      return;
    }
    if (pending.timer) {
      clearTimeout(pending.timer);
    }
    pending.resolve(response);
  }

  private flushPending(error: Error): void {
    for (const pending of this.pendingReceivers.splice(0)) {
      if (pending.timer) {
        clearTimeout(pending.timer);
      }
      pending.reject(error);
    }
  }

  private removePending(pending: PendingReceiver): void {
    const index = this.pendingReceivers.indexOf(pending);
    if (index >= 0) {
      this.pendingReceivers.splice(index, 1);
    }
  }

  private toBytes(data: Uint8Array | number[]): Uint8Array {
    return data instanceof Uint8Array ? data : Uint8Array.from(data);
  }

  private toKey(data: Uint8Array | number[]): string {
    const bytes = this.toBytes(data);
    let hex = "";
    for (const value of bytes) {
      hex += value.toString(16).padStart(2, "0");
    }
    return hex;
  }

  private assertConnected(): void {
    if (!this.connected) {
      throw new Error("Not connected");
    }
  }
}
