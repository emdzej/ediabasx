import { describe, expect, it } from "vitest";
import {
  decodeIsoTpFrames,
  IsoTpFrameTypes,
  parseIsoTpFrame,
  segmentIsoTpPayload
} from "..";

describe("segmentIsoTpPayload", () => {
  it("builds single frames", () => {
    const frames = segmentIsoTpPayload(Uint8Array.from([0x01, 0x02]));
    expect(frames).toEqual([Uint8Array.from([0x02, 0x01, 0x02])]);
  });

  it("builds multi-frame payloads", () => {
    const payload = Uint8Array.from([
      0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08
    ]);
    const frames = segmentIsoTpPayload(payload, { frameSize: 8 });
    expect(frames).toEqual([
      Uint8Array.from([0x10, 0x08, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06]),
      Uint8Array.from([0x21, 0x07, 0x08])
    ]);
  });
});

describe("parseIsoTpFrame", () => {
  it("parses single frames", () => {
    const info = parseIsoTpFrame(Uint8Array.from([0x03, 0x62, 0xf1, 0x90]));
    expect(info.type).toBe(IsoTpFrameTypes.Single);
    expect(info.payload).toEqual(Uint8Array.from([0x62, 0xf1, 0x90]));
    expect(info.totalLength).toBe(3);
  });

  it("parses consecutive frames", () => {
    const info = parseIsoTpFrame(Uint8Array.from([0x22, 0xaa, 0xbb]));
    expect(info.type).toBe(IsoTpFrameTypes.Consecutive);
    expect(info.sequence).toBe(2);
    expect(info.payload).toEqual(Uint8Array.from([0xaa, 0xbb]));
  });
});

describe("decodeIsoTpFrames", () => {
  it("reassembles multi-frame payloads", () => {
    const frames = [
      Uint8Array.from([0x10, 0x0a, 0x62, 0xf1, 0x90, 0x01, 0x02, 0x03]),
      Uint8Array.from([0x21, 0x04, 0x05, 0x06, 0x07])
    ];
    const payload = decodeIsoTpFrames(frames);
    expect(payload).toEqual(
      Uint8Array.from([0x62, 0xf1, 0x90, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07])
    );
  });
});
