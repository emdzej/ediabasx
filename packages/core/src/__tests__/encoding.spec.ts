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
});
