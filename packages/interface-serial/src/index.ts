export { SerialTimeoutError } from "./errors";
export { MockSerialTransport } from "./mockSerialTransport";
export { NodeSerialTransport } from "./nodeSerialTransport";
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
