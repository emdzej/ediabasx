import { describe, expect, it } from "vitest";
import { calcChecksumBmwFast } from "../checksum";

describe("calcChecksumBmwFast", () => {
  it("sums bytes with overflow", () => {
    const data = Uint8Array.from([0x01, 0xfe, 0x03]);
    expect(calcChecksumBmwFast(data, 0, data.length)).toBe(0x02);
  });
});
