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

export const SerialProtocols = {
  Uart: 0,
  Kwp: 1,
  Tp20: 2,
  IsoTp: 3
} as const;

export type SerialProtocol = (typeof SerialProtocols)[keyof typeof SerialProtocols];

export const SerialInitModes = {
  FiveBaud: "five-baud",
  Fast: "fast",
  Unknown: "unknown"
} as const;

export type SerialInitMode =
  (typeof SerialInitModes)[keyof typeof SerialInitModes];

export const SerialCommParameterIds = {
  Protocol: 0x01,
  TesterAddress: 0x02,
  EcuAddress: 0x03,
  TesterCanId: 0x04,
  EcuCanId: 0x05,
  P1: 0x06,
  P2: 0x07,
  P3: 0x08,
  W1: 0x09,
  W2: 0x0a,
  W3: 0x0b,
  W4: 0x0c,
  W5: 0x0d,
  InterByteTime: 0x0e,
  RetryCount: 0x0f,
  TimeoutNr78: 0x10,
  RetryNr78: 0x11,
  InitMode: 0x12,
  SendPulse: 0x13
} as const;

export type SerialCommParameterId =
  (typeof SerialCommParameterIds)[keyof typeof SerialCommParameterIds];

export type SerialCommParameterState = {
  protocol?: number;
  testerAddress?: number;
  ecuAddress?: number;
  testerCanId?: number;
  ecuCanId?: number;
  p1?: number;
  p2?: number;
  p3?: number;
  w1?: number;
  w2?: number;
  w3?: number;
  w4?: number;
  w5?: number;
  interByteTime?: number;
  retryCount?: number;
  timeoutNr78?: number;
  retryNr78?: number;
  initMode?: SerialInitMode;
  sendPulse?: boolean;
};

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
  kwpModeSelectPayload?: Uint8Array;
  kwpTesterPresentPayload?: Uint8Array;
  kwpWakeAddress?: number;
  transport?: SerialTransport;
};
