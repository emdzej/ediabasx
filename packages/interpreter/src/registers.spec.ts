import { describe, it, expect, beforeEach } from "vitest";
import { RegisterSet, DEFAULT_SSIZE } from "./registers";

describe("RegisterSet", () => {
  let regs: RegisterSet;

  beforeEach(() => {
    regs = new RegisterSet();
  });

  describe("B registers (8-bit)", () => {
    it("should have 16 B registers", () => {
      expect(RegisterSet.B_COUNT).toBe(16);
    });

    it("should get/set B registers", () => {
      regs.setB(0, 42);
      expect(regs.getB(0)).toBe(42);

      regs.setB(15, 255);
      expect(regs.getB(15)).toBe(255);
    });

    it("should mask values to 8 bits (overflow)", () => {
      regs.setB(0, 256); // 0x100 -> 0x00
      expect(regs.getB(0)).toBe(0);

      regs.setB(1, 257); // 0x101 -> 0x01
      expect(regs.getB(1)).toBe(1);

      regs.setB(2, 0x1ff); // -> 0xFF
      expect(regs.getB(2)).toBe(255);
    });

    it("should handle negative values (two's complement)", () => {
      regs.setB(0, -1); // -> 0xFF
      expect(regs.getB(0)).toBe(255);

      regs.setB(1, -128); // -> 0x80
      expect(regs.getB(1)).toBe(128);
    });

    it("should throw on invalid register index", () => {
      expect(() => regs.getB(-1)).toThrow(RangeError);
      expect(() => regs.getB(16)).toThrow(RangeError);
      expect(() => regs.setB(16, 0)).toThrow(RangeError);
      expect(() => regs.getB(1.5)).toThrow(RangeError);
    });
  });

  describe("A registers (8-bit)", () => {
    it("should have 16 A registers", () => {
      expect(RegisterSet.A_COUNT).toBe(16);
    });

    it("should get/set A registers", () => {
      regs.setA(0, 42);
      expect(regs.getA(0)).toBe(42);

      regs.setA(15, 255);
      expect(regs.getA(15)).toBe(255);
    });

    it("should mask values to 8 bits", () => {
      regs.setA(0, 256);
      expect(regs.getA(0)).toBe(0);

      regs.setA(1, 0xabc);
      expect(regs.getA(1)).toBe(0xbc);
    });

    it("should throw on invalid register index", () => {
      expect(() => regs.getA(-1)).toThrow(RangeError);
      expect(() => regs.getA(16)).toThrow(RangeError);
      expect(() => regs.setA(-1, 0)).toThrow(RangeError);
    });
  });

  describe("I registers (16-bit)", () => {
    it("should have 16 I registers", () => {
      expect(RegisterSet.I_COUNT).toBe(16);
    });

    it("should get/set I registers", () => {
      regs.setI(0, 1000);
      expect(regs.getI(0)).toBe(1000);

      regs.setI(15, 65535);
      expect(regs.getI(15)).toBe(65535);
    });

    it("should mask values to 16 bits (overflow)", () => {
      regs.setI(0, 65536); // 0x10000 -> 0x0000
      expect(regs.getI(0)).toBe(0);

      regs.setI(1, 65537); // 0x10001 -> 0x0001
      expect(regs.getI(1)).toBe(1);

      regs.setI(2, 0x1ffff); // -> 0xFFFF
      expect(regs.getI(2)).toBe(65535);
    });

    it("should handle negative values", () => {
      regs.setI(0, -1); // -> 0xFFFF
      expect(regs.getI(0)).toBe(65535);

      regs.setI(1, -32768); // -> 0x8000
      expect(regs.getI(1)).toBe(32768);
    });

    it("should throw on invalid register index", () => {
      expect(() => regs.getI(-1)).toThrow(RangeError);
      expect(() => regs.getI(16)).toThrow(RangeError);
      expect(() => regs.setI(16, 0)).toThrow(RangeError);
    });
  });

  describe("L registers (32-bit)", () => {
    it("should have 8 L registers", () => {
      expect(RegisterSet.L_COUNT).toBe(8);
    });

    it("should get/set L registers", () => {
      regs.setL(0, 1000000);
      expect(regs.getL(0)).toBe(1000000);

      regs.setL(7, 4294967295);
      expect(regs.getL(7)).toBe(4294967295);
    });

    it("should mask values to 32 bits (overflow)", () => {
      regs.setL(0, 4294967296); // 0x100000000 -> 0
      expect(regs.getL(0)).toBe(0);

      regs.setL(1, 4294967297); // 0x100000001 -> 1
      expect(regs.getL(1)).toBe(1);
    });

    it("should handle negative values", () => {
      regs.setL(0, -1); // -> 0xFFFFFFFF
      expect(regs.getL(0)).toBe(4294967295);

      regs.setL(1, -2147483648); // -> 0x80000000
      expect(regs.getL(1)).toBe(2147483648);
    });

    it("should throw on invalid register index", () => {
      expect(() => regs.getL(-1)).toThrow(RangeError);
      expect(() => regs.getL(8)).toThrow(RangeError);
      expect(() => regs.setL(8, 0)).toThrow(RangeError);
    });
  });

  describe("S registers (String)", () => {
    it("should have 16 S registers", () => {
      expect(RegisterSet.S_COUNT).toBe(16);
    });

    it("should get/set S registers", () => {
      regs.setS(0, "Hello");
      expect(regs.getS(0)).toBe("Hello");

      regs.setS(15, "World");
      expect(regs.getS(15)).toBe("World");
    });

    it("should initialize to empty strings", () => {
      for (let i = 0; i < RegisterSet.S_COUNT; i++) {
        expect(regs.getS(i)).toBe("");
      }
    });

    it("should truncate strings to maxStringSize (default 255)", () => {
      const longString = "x".repeat(300);
      regs.setS(0, longString);
      expect(regs.getS(0).length).toBe(DEFAULT_SSIZE);
      expect(regs.getS(0)).toBe("x".repeat(255));
    });

    it("should respect custom maxStringSize", () => {
      const customRegs = new RegisterSet({ maxStringSize: 50 });
      const longString = "y".repeat(100);
      customRegs.setS(0, longString);
      expect(customRegs.getS(0).length).toBe(50);
      expect(customRegs.getMaxStringSize()).toBe(50);
    });

    it("preserves CP1252-compatible characters round-trip", () => {
      // CP1252 covers Western European chars including ą, ł, ść, € etc.
      // Anything outside the codepage falls back to '?' on encode (matches
      // C# Encoding.GetEncoding(1252) — the reference). The previous
      // "any Unicode string survives" assertion was an artifact of the
      // JS-string-as-storage model; native byte storage enforces CP1252
      // domain at the string-view boundary the same way real EDIABAS does.
      regs.setS(0, "Café résumé · 50€");
      expect(regs.getS(0)).toBe("Café résumé · 50€");
    });

    it("replaces non-CP1252 characters with '?' (BMW EDIABAS convention)", () => {
      // Polish ę / ś / ć and the car emoji are outside CP1252's
      // repertoire; CP1252 emits 0x3F ('?') for each. ž (U+017E) IS
      // in CP1252 at slot 0x9E and survives the round-trip, so the
      // expected output keeps it verbatim. The smiley counts as a
      // single Unicode code point but is built from a UTF-16 surrogate
      // pair — utf8ToCp1252 walks code points and emits one '?'.
      regs.setS(0, "Cześć światž 🚗");
      // C e ę ś ć       ś w i a t  ž        🚗
      //         ? ? ?              ž (kept) ?
      expect(regs.getS(0)).toBe("Cze?? ?wiatž ?");
    });

    it("round-trips all 256 byte values via setSBinary/getSBinary", () => {
      // Native byte storage means every byte 0x00..0xFF survives the
      // round-trip bit-exact — no codec involvement at the byte layer.
      // This is the structural fix that obsoletes the 0.2.2 encode-table
      // patch for binary-buffer use cases. Use a 256-cap register set so
      // the full byte range fits in one slot.
      const bigRegs = new RegisterSet({ maxStringSize: 256 });
      const all = new Uint8Array(256);
      for (let i = 0; i < 256; i++) all[i] = i;
      bigRegs.setSBinary(0, all);
      const back = bigRegs.getSBinary(0);
      expect(Array.from(back)).toEqual(Array.from(all));
    });

    it("getS terminates at first embedded NUL (C-string semantics)", () => {
      // Mirrors C# Operand.GetStringData: walks _data until the first
      // 0x00, decodes that prefix only. Bytes after the NUL stay in
      // the buffer (visible via getSBinary) but don't appear in the
      // string view.
      regs.setSBinary(0, Uint8Array.from([0x41, 0x42, 0x00, 0x43, 0x44]));
      expect(regs.getS(0)).toBe("AB");
      expect(Array.from(regs.getSBinary(0))).toEqual([0x41, 0x42, 0x00, 0x43, 0x44]);
    });

    it("should throw on invalid register index", () => {
      expect(() => regs.getS(-1)).toThrow(RangeError);
      expect(() => regs.getS(16)).toThrow(RangeError);
      expect(() => regs.setS(16, "test")).toThrow(RangeError);
    });
  });

  describe("F registers (Float)", () => {
    it("should have 8 F registers", () => {
      expect(RegisterSet.F_COUNT).toBe(8);
    });

    it("should get/set F registers", () => {
      regs.setF(0, 3.14159);
      expect(regs.getF(0)).toBeCloseTo(3.14159);

      regs.setF(7, -273.15);
      expect(regs.getF(7)).toBeCloseTo(-273.15);
    });

    it("should handle large float values", () => {
      regs.setF(0, 1.7976931348623157e308); // Max double
      expect(regs.getF(0)).toBe(1.7976931348623157e308);

      regs.setF(1, 5e-324); // Min positive double
      expect(regs.getF(1)).toBe(5e-324);
    });

    it("should handle special float values", () => {
      regs.setF(0, Infinity);
      expect(regs.getF(0)).toBe(Infinity);

      regs.setF(1, -Infinity);
      expect(regs.getF(1)).toBe(-Infinity);

      regs.setF(2, NaN);
      expect(regs.getF(2)).toBeNaN();
    });

    it("should throw on invalid register index", () => {
      expect(() => regs.getF(-1)).toThrow(RangeError);
      expect(() => regs.getF(8)).toThrow(RangeError);
      expect(() => regs.setF(8, 0)).toThrow(RangeError);
    });
  });

  describe("reset()", () => {
    it("should reset all registers to default values", () => {
      // Set some values
      regs.setB(0, 42);
      regs.setA(5, 123);
      regs.setI(10, 1000);
      regs.setL(3, 999999);
      regs.setS(7, "test");
      regs.setF(2, 3.14);

      // Reset
      regs.reset();

      // Verify all reset
      expect(regs.getB(0)).toBe(0);
      expect(regs.getA(5)).toBe(0);
      expect(regs.getI(10)).toBe(0);
      expect(regs.getL(3)).toBe(0);
      expect(regs.getS(7)).toBe("");
      expect(regs.getF(2)).toBe(0);
    });

    it("should reset all registers in each bank", () => {
      // Fill all registers
      for (let i = 0; i < RegisterSet.B_COUNT; i++) regs.setB(i, 0xff);
      for (let i = 0; i < RegisterSet.A_COUNT; i++) regs.setA(i, 0xff);
      for (let i = 0; i < RegisterSet.I_COUNT; i++) regs.setI(i, 0xffff);
      for (let i = 0; i < RegisterSet.L_COUNT; i++) regs.setL(i, 0xffffffff);
      for (let i = 0; i < RegisterSet.S_COUNT; i++) regs.setS(i, "filled");
      for (let i = 0; i < RegisterSet.F_COUNT; i++) regs.setF(i, 99.99);

      regs.reset();

      // Verify all reset
      for (let i = 0; i < RegisterSet.B_COUNT; i++) expect(regs.getB(i)).toBe(0);
      for (let i = 0; i < RegisterSet.A_COUNT; i++) expect(regs.getA(i)).toBe(0);
      for (let i = 0; i < RegisterSet.I_COUNT; i++) expect(regs.getI(i)).toBe(0);
      for (let i = 0; i < RegisterSet.L_COUNT; i++) expect(regs.getL(i)).toBe(0);
      for (let i = 0; i < RegisterSet.S_COUNT; i++) expect(regs.getS(i)).toBe("");
      for (let i = 0; i < RegisterSet.F_COUNT; i++) expect(regs.getF(i)).toBe(0);
    });
  });

  describe("snapshot()", () => {
    it("should return a snapshot of all registers", () => {
      // Choose non-aliased slots: B0 (byte0), A0 (byte16), I3 (bytes6-7), L1 (bytes4-7).
      // Note: I3 and L1 both touch bytes 4-7, so write L1 last and use the same expected value.
      regs.setB(0, 1);
      regs.setA(0, 2);
      regs.setI(3, 3);
      regs.setL(1, 4);
      regs.setS(0, "five");
      regs.setF(0, 6.0);

      const snap = regs.snapshot();

      expect(snap.b[0]).toBe(1);
      expect(snap.a[0]).toBe(2);
      // I3 reads bytes[6..7]; setL(1,4) wrote bytes[4..7]=(4,0,0,0), so I3 = bytes[6]|bytes[7]<<8 = 0
      expect(snap.i[3]).toBe(0);
      expect(snap.l[1]).toBe(4);
      expect(snap.s[0]).toBe("five");
      expect(snap.f[0]).toBe(6.0);
    });

    it("should return correct array lengths", () => {
      const snap = regs.snapshot();

      expect(snap.b).toHaveLength(16);
      expect(snap.a).toHaveLength(16);
      expect(snap.i).toHaveLength(16);
      expect(snap.l).toHaveLength(8);
      expect(snap.s).toHaveLength(16);
      expect(snap.f).toHaveLength(8);
    });

    it("snapshot should be independent of register changes", () => {
      regs.setB(0, 100);
      const snap = regs.snapshot();
      regs.setB(0, 200);

      expect(snap.b[0]).toBe(100);
      expect(regs.getB(0)).toBe(200);
    });
  });

  describe("constructor options", () => {
    it("should use default maxStringSize when not specified", () => {
      expect(regs.getMaxStringSize()).toBe(DEFAULT_SSIZE);
      expect(regs.getMaxStringSize()).toBe(255);
    });

    it("should use custom maxStringSize when specified", () => {
      const customRegs = new RegisterSet({ maxStringSize: 128 });
      expect(customRegs.getMaxStringSize()).toBe(128);
    });
  });

  describe("edge cases", () => {
    it("should handle zero values", () => {
      regs.setB(0, 0);
      regs.setA(0, 0);
      regs.setI(0, 0);
      regs.setL(0, 0);
      regs.setS(0, "");
      regs.setF(0, 0);

      expect(regs.getB(0)).toBe(0);
      expect(regs.getA(0)).toBe(0);
      expect(regs.getI(0)).toBe(0);
      expect(regs.getL(0)).toBe(0);
      expect(regs.getS(0)).toBe("");
      expect(regs.getF(0)).toBe(0);
    });

    it("should handle max values for each type", () => {
      regs.setB(0, 0xff);
      regs.setA(0, 0xff);
      regs.setI(0, 0xffff);
      regs.setL(0, 0xffffffff);
      regs.setF(0, Number.MAX_VALUE);

      expect(regs.getB(0)).toBe(255);
      expect(regs.getA(0)).toBe(255);
      expect(regs.getI(0)).toBe(65535);
      expect(regs.getL(0)).toBe(4294967295);
      expect(regs.getF(0)).toBe(Number.MAX_VALUE);
    });

    it("should handle boundary register indices", () => {
      // First registers
      expect(() => regs.getB(0)).not.toThrow();
      expect(() => regs.getA(0)).not.toThrow();
      expect(() => regs.getI(0)).not.toThrow();
      expect(() => regs.getL(0)).not.toThrow();
      expect(() => regs.getS(0)).not.toThrow();
      expect(() => regs.getF(0)).not.toThrow();

      // Last registers
      expect(() => regs.getB(15)).not.toThrow();
      expect(() => regs.getA(15)).not.toThrow();
      expect(() => regs.getI(15)).not.toThrow();
      expect(() => regs.getL(7)).not.toThrow();
      expect(() => regs.getS(15)).not.toThrow();
      expect(() => regs.getF(7)).not.toThrow();
    });
  });

  // Matches C# EdiabasNet._byteRegisters: B/A/I/L share a single 32-byte buffer.
  //   B[n] at byte[n] (0..15), A[n] at byte[n+16] (0..15),
  //   I[n] at bytes[n*2..n*2+1] (0..15), L[n] at bytes[n*4..n*4+3] (0..7).
  describe("B/A/I/L aliasing (shared byte buffer)", () => {
    it("I[n] reads two bytes B[2n] (low) and B[2n+1] (high)", () => {
      regs.setB(4, 0x76);
      regs.setB(5, 0x00);
      expect(regs.getI(2)).toBe(0x0076);

      regs.setB(4, 0x34);
      regs.setB(5, 0x12);
      expect(regs.getI(2)).toBe(0x1234);
    });

    it("setI(n, v) writes B[2n] = low byte and B[2n+1] = high byte", () => {
      regs.setI(2, 0xabcd);
      expect(regs.getB(4)).toBe(0xcd);
      expect(regs.getB(5)).toBe(0xab);
    });

    it("L[n] reads four bytes B[4n..4n+3] little-endian", () => {
      regs.setB(4, 0x78);
      regs.setB(5, 0x56);
      regs.setB(6, 0x34);
      regs.setB(7, 0x12);
      expect(regs.getL(1)).toBe(0x12345678);
    });

    it("setL(n, v) writes four bytes little-endian", () => {
      regs.setL(1, 0xdeadbeef);
      expect(regs.getB(4)).toBe(0xef);
      expect(regs.getB(5)).toBe(0xbe);
      expect(regs.getB(6)).toBe(0xad);
      expect(regs.getB(7)).toBe(0xde);
    });

    it("I[n] for n>=8 aliases A registers", () => {
      // I8 = bytes[16..17] = A0, A1
      regs.setA(0, 0xcd);
      regs.setA(1, 0xab);
      expect(regs.getI(8)).toBe(0xabcd);

      // IF = bytes[30..31] = AE, AF
      regs.setA(14, 0x21);
      regs.setA(15, 0x43);
      expect(regs.getI(15)).toBe(0x4321);
    });

    it("L[n] for n>=4 aliases A registers", () => {
      // L4 = bytes[16..19] = A0..A3
      regs.setA(0, 0x11);
      regs.setA(1, 0x22);
      regs.setA(2, 0x33);
      regs.setA(3, 0x44);
      expect(regs.getL(4)).toBe(0x44332211);

      // L7 = bytes[28..31] = AC..AF
      regs.setL(7, 0x89abcdef);
      expect(regs.getA(12)).toBe(0xef);
      expect(regs.getA(13)).toBe(0xcd);
      expect(regs.getA(14)).toBe(0xab);
      expect(regs.getA(15)).toBe(0x89);
    });

    it("writing L overwrites overlapping B and I values", () => {
      regs.setB(0, 0xff);
      regs.setI(1, 0xffff);
      regs.setL(0, 0);
      expect(regs.getB(0)).toBe(0);
      expect(regs.getB(1)).toBe(0);
      expect(regs.getB(2)).toBe(0);
      expect(regs.getB(3)).toBe(0);
      expect(regs.getI(0)).toBe(0);
      expect(regs.getI(1)).toBe(0);
    });

    it("STATUS_UBATT pattern: setB(4) + setB(5) then read I2", () => {
      // BMW MS43 STATUS_UBATT: response byte 0x76 stored in B4, zero in B5, read as I2.
      regs.setB(4, 0x76);
      regs.setB(5, 0x00);
      expect(regs.getI(2)).toBe(118);
    });

    it("B and A do not overlap each other (B0..F at 0..15, A0..F at 16..31)", () => {
      regs.setB(0, 0x11);
      regs.setA(0, 0x22);
      regs.setB(15, 0x33);
      regs.setA(15, 0x44);
      expect(regs.getB(0)).toBe(0x11);
      expect(regs.getA(0)).toBe(0x22);
      expect(regs.getB(15)).toBe(0x33);
      expect(regs.getA(15)).toBe(0x44);
    });
  });
});
