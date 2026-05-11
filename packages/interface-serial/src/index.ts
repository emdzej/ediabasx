export { SerialTimeoutError } from "./errors";
export { MockSerialTransport } from "./mockSerialTransport";
export { WebSerialTransport, type WebSerialPortLike } from "./webSerialTransport";
export { SerialInterface } from "./SerialInterface";
export * from "./kdcan";
export {
  SerialCommParameterIds,
  SerialInitModes,
  SerialProtocols
} from "./types";
export type {
  SerialCommParameterId,
  SerialCommParameterState,
  SerialDataBits,
  SerialInitMode,
  SerialInterfaceConfig,
  SerialParity,
  SerialProtocol,
  SerialStopBits,
  SerialTransport,
  SerialTransportConfig
} from "./types";

// `NodeSerialTransport` lives behind `@emdzej/ediabasx-interface-serial/node`
// so the default browser bundle doesn't try to resolve `serialport` (a
// Node-only native dep). Importing from the main entry is browser-safe.
