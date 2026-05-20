import { describe, expect, it } from "vitest";
import { cp1252ToUtf8, utf8ToCp1252 } from "../encoding";

describe("cp1252 encoding", () => {
  it("decodes cp1252 bytes to utf8", () => {
    const bytes = Uint8Array.from([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x80, 0x20, 0x9f]);
    expect(cp1252ToUtf8(bytes)).toBe("Hello € Ÿ");
  });

  it("encodes utf8 to cp1252", () => {
    const encoded = utf8ToCp1252("Price: €");
    expect(Array.from(encoded)).toEqual([0x50, 0x72, 0x69, 0x63, 0x65, 0x3a, 0x20, 0x80]);
  });

  it("falls back for non-cp1252 polish characters", () => {
    const encoded = utf8ToCp1252("Zażółć");
    const decoded = cp1252ToUtf8(encoded);
    expect(decoded).toBe("Za?ó??");
  });

  it("round-trips every byte 0x00..0xFF without loss", () => {
    // BEST2 interpreters use S registers as binary buffers — every byte
    // value must survive the bytes → string → bytes round-trip. The
    // canonical regression was C_FA_LESEN's loop counter writing byte
    // 0x81 (`move S0[#$0], B0`) and reading back 0x3F because CP1252's
    // five undefined slots (0x81, 0x8D, 0x8F, 0x90, 0x9D) used to be
    // excluded from the encode table, falling back to '?' (0x3F).
    const all = new Uint8Array(256);
    for (let i = 0; i < 256; i++) all[i] = i;
    const back = utf8ToCp1252(cp1252ToUtf8(all));
    expect(Array.from(back)).toEqual(Array.from(all));
  });

  it("round-trips the five CP1252 'undefined' slots individually", () => {
    for (const byte of [0x81, 0x8d, 0x8f, 0x90, 0x9d]) {
      const back = utf8ToCp1252(cp1252ToUtf8(Uint8Array.from([byte])));
      expect(Array.from(back)).toEqual([byte]);
    }
  });
});
