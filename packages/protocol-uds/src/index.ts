export const IsoTpFrameTypes = {
  Single: "single",
  First: "first",
  Consecutive: "consecutive",
  FlowControl: "flow-control"
} as const;

export type IsoTpFrameType =
  (typeof IsoTpFrameTypes)[keyof typeof IsoTpFrameTypes];

export type IsoTpFrameInfo = {
  type: IsoTpFrameType;
  payload: Uint8Array;
  totalLength?: number;
  sequence?: number;
};

export type IsoTpSegmentationOptions = {
  readonly frameSize?: number;
  readonly paddingByte?: number;
};

const DEFAULT_FRAME_SIZE = 8;

export function segmentIsoTpPayload(
  payload: Uint8Array,
  options: IsoTpSegmentationOptions = {}
): Uint8Array[] {
  const frameSize = options.frameSize ?? DEFAULT_FRAME_SIZE;
  if (frameSize < DEFAULT_FRAME_SIZE) {
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

export function parseIsoTpFrame(frame: Uint8Array): IsoTpFrameInfo {
  if (frame.length === 0) {
    throw new Error("ISO-TP frame is empty");
  }

  const pci = frame[0];
  const frameType = (pci & 0xf0) >> 4;

  switch (frameType) {
    case 0x0: {
      const length = pci & 0x0f;
      const payload = frame.subarray(1, 1 + length);
      return { type: IsoTpFrameTypes.Single, payload, totalLength: length };
    }
    case 0x1: {
      if (frame.length < 2) {
        throw new Error("ISO-TP first frame missing length byte");
      }
      const totalLength = ((pci & 0x0f) << 8) | frame[1];
      const payload = frame.subarray(2);
      return { type: IsoTpFrameTypes.First, payload, totalLength };
    }
    case 0x2: {
      const sequence = pci & 0x0f;
      return {
        type: IsoTpFrameTypes.Consecutive,
        payload: frame.subarray(1),
        sequence
      };
    }
    case 0x3:
      return {
        type: IsoTpFrameTypes.FlowControl,
        payload: frame.subarray(1)
      };
    default:
      throw new Error("Unknown ISO-TP frame type");
  }
}

export function decodeIsoTpFrames(frames: readonly Uint8Array[]): Uint8Array {
  if (frames.length === 0) {
    return new Uint8Array();
  }

  const firstInfo = parseIsoTpFrame(frames[0]);
  if (firstInfo.type === IsoTpFrameTypes.Single) {
    return Uint8Array.from(firstInfo.payload);
  }

  if (firstInfo.type !== IsoTpFrameTypes.First || firstInfo.totalLength === undefined) {
    throw new Error("ISO-TP message must start with single or first frame");
  }

  const totalLength = firstInfo.totalLength;
  const payload = new Uint8Array(totalLength);
  let offset = 0;

  const firstPayload = firstInfo.payload.subarray(0, Math.min(6, totalLength));
  payload.set(firstPayload, 0);
  offset += firstPayload.length;

  let expectedSequence = 1;
  for (let index = 1; index < frames.length && offset < totalLength; index += 1) {
    const info = parseIsoTpFrame(frames[index]);
    if (info.type === IsoTpFrameTypes.FlowControl) {
      continue;
    }
    if (info.type !== IsoTpFrameTypes.Consecutive) {
      throw new Error("Unexpected ISO-TP frame type");
    }
    if (info.sequence !== expectedSequence) {
      throw new Error("ISO-TP sequence mismatch");
    }
    const remaining = totalLength - offset;
    const slice = info.payload.subarray(0, Math.min(remaining, info.payload.length));
    payload.set(slice, offset);
    offset += slice.length;
    expectedSequence = (expectedSequence + 1) & 0x0f;
  }

  if (offset < totalLength) {
    throw new Error("Incomplete ISO-TP message");
  }

  return payload;
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
