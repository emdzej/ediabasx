export { SerialTimeoutError } from "./errors";
export { MockSerialTransport } from "./mockSerialTransport";
export { NodeSerialTransport } from "./nodeSerialTransport";
export { SerialInterface } from "./SerialInterface";
export * from "./kdcan";
export type {
  SerialDataBits,
  SerialInterfaceConfig,
  SerialParity,
  SerialStopBits,
  SerialTransport,
  SerialTransportConfig
} from "./types";
