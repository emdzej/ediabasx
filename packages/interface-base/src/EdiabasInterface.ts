export abstract class EdiabasInterface {
  protected connected = false;

  abstract connect(): Promise<void>;
  abstract disconnect(): Promise<void>;
  abstract send(data: Uint8Array): Promise<void>;
  abstract receive(timeoutMs?: number): Promise<Uint8Array>;

  async transmitFrequent(data: Uint8Array): Promise<void> {
    void data;
  }
  async receiveFrequent(): Promise<Uint8Array> {
    return new Uint8Array(0);
  }
  async stopFrequent(): Promise<void> {}

  abstract getPort(index: number): number | Promise<number>;
  abstract setPort(index: number, value: number): void | Promise<void>;
  abstract get ignitionVoltage(): number | Promise<number>;
  abstract get loopTest(): number | Promise<number>;
  abstract setProgramVoltage(value: number): void | Promise<void>;
  abstract rawData(request: Uint8Array): Uint8Array | Promise<Uint8Array>;
  abstract switchSiRelais(time: number): void | Promise<void>;

  isConnected(): boolean {
    return this.connected;
  }
}
