export abstract class EdiabasInterface {
  abstract connect(): Promise<void>;
  abstract disconnect(): Promise<void>;
  abstract send(data: Uint8Array): Promise<void>;
  abstract receive(timeout: number): Promise<Uint8Array>;
  abstract isConnected(): boolean;
}
