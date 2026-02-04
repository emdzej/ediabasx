export abstract class EdiabasInterface {
  protected connected = false;

  abstract connect(): Promise<void>;
  abstract disconnect(): Promise<void>;
  abstract send(data: Uint8Array): Promise<void>;
  abstract receive(timeoutMs?: number): Promise<Uint8Array>;

  isConnected(): boolean {
    return this.connected;
  }
}
