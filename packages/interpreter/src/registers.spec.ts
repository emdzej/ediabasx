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

    it("should handle unicode strings", () => {
      regs.setS(0, "Cześć świat! 🚗");
      expect(regs.getS(0)).toBe("Cześć świat! 🚗");
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
      regs.setB(0, 1);
      regs.setA(0, 2);
      regs.setI(0, 3);
      regs.setL(0, 4);
      regs.setS(0, "five");
      regs.setF(0, 6.0);

      const snap = regs.snapshot();

      expect(snap.b[0]).toBe(1);
      expect(snap.a[0]).toBe(2);
      expect(snap.i[0]).toBe(3);
      expect(snap.l[0]).toBe(4);
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
});
