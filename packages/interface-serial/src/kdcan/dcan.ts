import { SerialTransport } from "../types";
import { CanFlags, Protocols, type CanFlag, type Protocol } from "./constants";
import { createCanTelegram } from "./telegram";

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

export type IsoTpSegmentationOptions = {
  readonly frameSize?: number;
  readonly paddingByte?: number;
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

export function segmentIsoTpPayload(
  payload: Uint8Array,
  options: IsoTpSegmentationOptions = {}
): Uint8Array[] {
  const frameSize = options.frameSize ?? 8;
  if (frameSize < 8) {
    throw new Error("ISO-TP frame size must be at least 8 bytes");
  }

  const paddingByte = options.paddingByte;
  const totalLength = payload.length;

  if (totalLength <= 7) {
    const frame = new Uint8Array(1 + totalLength);
    frame[0] = totalLength & 0x0f;
    frame.set(payload, 1);
    return [padFrame(frame, frameSize, paddingByte)];
  }

  const frames: Uint8Array[] = [];
  const firstFrame = new Uint8Array(2 + Math.min(6, totalLength));
  firstFrame[0] = 0x10 | ((totalLength >> 8) & 0x0f);
  firstFrame[1] = totalLength & 0xff;
  firstFrame.set(payload.subarray(0, 6), 2);
  frames.push(padFrame(firstFrame, frameSize, paddingByte));

  let offset = 6;
  let sequence = 1;

  while (offset < totalLength) {
    const chunkLength = Math.min(7, totalLength - offset);
    const frame = new Uint8Array(1 + chunkLength);
    frame[0] = 0x20 | (sequence & 0x0f);
    frame.set(payload.subarray(offset, offset + chunkLength), 1);
    frames.push(padFrame(frame, frameSize, paddingByte));

    offset += chunkLength;
    sequence = (sequence + 1) & 0x0f;
  }

  return frames;
}

function padFrame(
  frame: Uint8Array,
  frameSize: number,
  paddingByte: number | undefined
): Uint8Array {
  if (frame.length >= frameSize || paddingByte === undefined) {
    return frame;
  }

  const padded = new Uint8Array(frameSize);
  padded.set(frame);
  padded.fill(paddingByte, frame.length);

  return padded;
}
