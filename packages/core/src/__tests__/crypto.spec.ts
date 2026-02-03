import { describe, expect, it } from "vitest";
import { xorDecrypt, xorEncrypt } from "../crypto";

describe("xor crypto", () => {
  it("encrypts and decrypts with a cyclic key", () => {
    const data = Uint8Array.from([0xde, 0xad, 0xbe, 0xef, 0x01, 0x02]);
    const key = Uint8Array.from([0xaa, 0xbb]);

    const encrypted = xorEncrypt(data, key);
    const decrypted = xorDecrypt(encrypted, key);

    expect(Array.from(decrypted)).toEqual(Array.from(data));
    expect(Array.from(encrypted)).toEqual([
      0xde ^ 0xaa,
      0xad ^ 0xbb,
      0xbe ^ 0xaa,
      0xef ^ 0xbb,
      0x01 ^ 0xaa,
      0x02 ^ 0xbb,
    ]);
  });
});
