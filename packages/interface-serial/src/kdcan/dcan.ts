import { SerialTransport } from "../types";
import { CanFlags, Protocols, type CanFlag, type Protocol } from "./constants";
import { createCanTelegram } from "./telegram";

export { segmentIsoTpPayload } from "@emdzej/ediabasx-protocol-uds";
export type { IsoTpSegmentationOptions } from "@emdzej/ediabasx-protocol-uds";

export const DCAN_CONCEPT = 0x0110;
export const DCAN_BAUD_RATE = 500000;

export const AdapterModes = {
  Uart: "uart",
  Kwp: "kwp",
  Can: "can"
} as const;

export type AdapterMode = (typeof AdapterModes)[keyof typeof AdapterModes];

export type DcanSessionOptions = {
  readonly adapterType: number;
  readonly adapterVersion: number;
  readonly canTxId: number;
  readonly canRxId: number;
  readonly canFlags?: CanFlag;
  readonly baudRate?: number;
  readonly protocol?: Protocol;
};

export async function switchToCanMode(
  transport: SerialTransport,
  baudRate: number = DCAN_BAUD_RATE
): Promise<void> {
  await transport.configure({
    baudRate,
    dataBits: 8,
    parity: "none",
    stopBits: 1
  });
  await transport.setDtr(true);
  await transport.setRts(true);
}

export class DcanSession {
  private readonly adapterType: number;
  private readonly adapterVersion: number;
  private readonly canTxId: number;
  private readonly canRxId: number;
  private readonly canFlags: CanFlag;
  private readonly baudRate: number;
  private readonly protocol: Protocol;

  constructor(options: DcanSessionOptions) {
    this.adapterType = options.adapterType;
    this.adapterVersion = options.adapterVersion;
    this.canTxId = options.canTxId;
    this.canRxId = options.canRxId;
    this.canFlags = options.canFlags ?? CanFlags.Empty;
    this.baudRate = options.baudRate ?? DCAN_BAUD_RATE;
    this.protocol = options.protocol ?? Protocols.IsoTp;
  }

  buildTelegram(payload: Uint8Array): Uint8Array {
    const telegram = createCanTelegram(payload, payload.length, {
      adapterType: this.adapterType,
      adapterVersion: this.adapterVersion,
      currentBaudRate: this.baudRate,
      currentProtocol: this.protocol,
      canTxId: this.canTxId,
      canRxId: this.canRxId,
      canFlags: this.canFlags
    });

    if (!telegram) {
      throw new Error("Unable to create CAN telegram");
    }

    return telegram;
  }

  async sendRequest(
    transport: SerialTransport,
    payload: Uint8Array
  ): Promise<void> {
    const telegram = this.buildTelegram(payload);
    await transport.write(telegram);
  }
}
