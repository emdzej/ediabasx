export type SerialParity = "none" | "even" | "odd";

export type SerialDataBits = 7 | 8;

export type SerialStopBits = 1 | 2;

export type SerialTransportConfig = {
  baudRate: number;
  dataBits: SerialDataBits;
  parity: SerialParity;
  stopBits: SerialStopBits;
};

export interface SerialTransport {
  open(port: string): Promise<void>;
  close(): Promise<void>;
  configure(config: SerialTransportConfig): Promise<void>;
  setDtr(value: boolean): Promise<void>;
  setRts(value: boolean): Promise<void>;
  setBreak(durationMs: number): Promise<void>;
  purge(): Promise<void>;
  read(length: number, timeoutMs: number): Promise<Uint8Array>;
  write(data: Uint8Array): Promise<void>;
}

export type SerialInterfaceConfig = {
  port: string;
  baudRate?: number;
  dataBits?: SerialDataBits;
  parity?: SerialParity;
  stopBits?: SerialStopBits;
  timeoutMs?: number;
  telegramEndTimeoutMs?: number;
  receiveBufferSize?: number;
  p1DelayMs?: number;
  transport?: SerialTransport;
};
