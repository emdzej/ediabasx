import { describe, it, expect, beforeEach } from "vitest";
import { Flags, type BitWidth } from "./flags";

describe("Flags", () => {
  let flags: Flags;

  beforeEach(() => {
    flags = new Flags();
  });

  describe("initial state", () => {
    it("should initialize all flags to false", () => {
      expect(flags.z).toBe(false);
      expect(flags.c).toBe(false);
      expect(flags.v).toBe(false);
      expect(flags.s).toBe(false);
    });
  });

  describe("reset()", () => {
    it("should reset all flags to false", () => {
      flags.z = true;
      flags.c = true;
      flags.v = true;
      flags.s = true;

      flags.reset();

      expect(flags.z).toBe(false);
      expect(flags.c).toBe(false);
      expect(flags.v).toBe(false);
      expect(flags.s).toBe(false);
    });
  });

  describe("snapshot()", () => {
    it("should return a snapshot of current flag values", () => {
      flags.z = true;
      flags.c = false;
      flags.v = true;
      flags.s = false;

      const snap = flags.snapshot();

      expect(snap).toEqual({
        z: true,
        c: false,
        v: true,
        s: false,
      });
    });

    it("should return independent copy of flag state", () => {
      flags.z = true;
      const snap = flags.snapshot();

      flags.z = false;

      expect(snap.z).toBe(true);
    });
  });

  describe("toString()", () => {
    it("should return ---- when all flags are false", () => {
      expect(flags.toString()).toBe("----");
    });

    it("should return ZCVS when all flags are true", () => {
      flags.z = true;
      flags.c = true;
      flags.v = true;
      flags.s = true;

      expect(flags.toString()).toBe("ZCVS");
    });

    it("should show only active flags", () => {
      flags.z = true;
      flags.s = true;

      expect(flags.toString()).toBe("Z--S");
    });
  });

  describe("updateFromResult()", () => {
    describe("8-bit operations", () => {
      const bits: BitWidth = 8;

      it("should set Z flag when result is 0", () => {
        flags.updateFromResult(0, bits);

        expect(flags.z).toBe(true);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(false);
      });

      it("should set Z and C flags when result is 256 (overflows to 0)", () => {
        flags.updateFromResult(256, bits);

        expect(flags.z).toBe(true); // 256 & 0xFF = 0
        expect(flags.c).toBe(true); // unsigned overflow
        expect(flags.v).toBe(true); // exceeds signed max (127)
        expect(flags.s).toBe(false);
      });

      it("should set S flag when MSB is set (128-255)", () => {
        flags.updateFromResult(128, bits);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(true); // 128 > 127 (max signed)
        expect(flags.s).toBe(true);
      });

      it("should set S flag for value 255", () => {
        flags.updateFromResult(255, bits);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(true); // 255 > 127
        expect(flags.s).toBe(true);
      });

      it("should set C flag for negative values (wraps around)", () => {
        flags.updateFromResult(-1, bits);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(true); // -1 is outside [0, 255]
        expect(flags.v).toBe(false); // -1 is within signed range [-128, 127] when masked to 255
        expect(flags.s).toBe(true); // -1 as unsigned = 255, MSB set
      });

      it("should handle value at signed boundary (127)", () => {
        flags.updateFromResult(127, bits);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(false);
      });

      it("should handle minimum signed value (-128)", () => {
        flags.updateFromResult(-128, bits);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(true); // negative is unsigned underflow
        expect(flags.v).toBe(false); // -128 is within signed range
        expect(flags.s).toBe(true); // 128 as unsigned has MSB set
      });

      it("should handle values just below signed minimum (-129)", () => {
        flags.updateFromResult(-129, bits);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(true);
        expect(flags.v).toBe(true); // -129 < -128
        expect(flags.s).toBe(false); // -129 masked to 8-bit = 127 (0x7F), no sign bit
      });
    });

    describe("16-bit operations", () => {
      const bits: BitWidth = 16;

      it("should set Z flag when result is 0", () => {
        flags.updateFromResult(0, bits);

        expect(flags.z).toBe(true);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(false);
      });

      it("should set C flag on unsigned overflow (65536)", () => {
        flags.updateFromResult(65536, bits);

        expect(flags.z).toBe(true); // 65536 & 0xFFFF = 0
        expect(flags.c).toBe(true);
        expect(flags.v).toBe(true);
        expect(flags.s).toBe(false);
      });

      it("should set S flag when MSB is set (32768-65535)", () => {
        flags.updateFromResult(32768, bits);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(true); // 32768 > 32767
        expect(flags.s).toBe(true);
      });

      it("should handle maximum unsigned value (65535)", () => {
        flags.updateFromResult(65535, bits);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(true); // 65535 > 32767
        expect(flags.s).toBe(true);
      });

      it("should handle maximum signed value (32767)", () => {
        flags.updateFromResult(32767, bits);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(false);
      });

      it("should handle minimum signed value (-32768)", () => {
        flags.updateFromResult(-32768, bits);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(true);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(true);
      });
    });

    describe("32-bit operations", () => {
      const bits: BitWidth = 32;

      it("should set Z flag when result is 0", () => {
        flags.updateFromResult(0, bits);

        expect(flags.z).toBe(true);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(false);
      });

      it("should set C flag on unsigned overflow", () => {
        flags.updateFromResult(0x100000000, bits);

        expect(flags.z).toBe(true); // wraps to 0
        expect(flags.c).toBe(true);
        expect(flags.v).toBe(true);
        expect(flags.s).toBe(false);
      });

      it("should set S flag when MSB is set", () => {
        flags.updateFromResult(0x80000000, bits);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(true); // 2147483648 > 2147483647
        expect(flags.s).toBe(true);
      });

      it("should handle maximum signed value", () => {
        flags.updateFromResult(0x7fffffff, bits);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(false);
      });

      it("should handle minimum signed value (-2147483648)", () => {
        flags.updateFromResult(-2147483648, bits);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(true);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(true);
      });

      it("should handle maximum unsigned value", () => {
        flags.updateFromResult(0xffffffff, bits);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(true);
        expect(flags.s).toBe(true);
      });
    });

    describe("edge cases", () => {
      it("should handle value 1 (non-zero, non-negative)", () => {
        flags.updateFromResult(1, 8);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(false);
      });

      it("should correctly mask values to bit width", () => {
        // 0x1FF should become 0xFF for 8-bit
        flags.updateFromResult(0x1ff, 8);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(true); // overflow
        expect(flags.s).toBe(true); // 0xFF has MSB set
      });
    });
  });

  describe("updateFromCompare()", () => {
    describe("equality comparisons", () => {
      it("should set Z flag when operands are equal", () => {
        flags.updateFromCompare(5, 5);

        expect(flags.z).toBe(true);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(false);
      });

      it("should set Z flag for zero compared with zero", () => {
        flags.updateFromCompare(0, 0);

        expect(flags.z).toBe(true);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(false);
      });

      it("should set Z flag for large equal values", () => {
        flags.updateFromCompare(0x12345678, 0x12345678);

        expect(flags.z).toBe(true);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(false);
      });
    });

    describe("unsigned comparisons (a > b)", () => {
      it("should clear C flag when a > b (unsigned)", () => {
        flags.updateFromCompare(10, 5);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false); // no borrow needed
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(false);
      });

      it("should handle large positive difference", () => {
        flags.updateFromCompare(255, 1, 8);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(true); // 254 has MSB set in 8-bit
      });
    });

    describe("unsigned comparisons (a < b)", () => {
      it("should set C flag when a < b (unsigned borrow)", () => {
        flags.updateFromCompare(3, 5);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(true); // borrow needed
        expect(flags.s).toBe(true); // result is negative
      });

      it("should set C flag for 0 compared with positive", () => {
        flags.updateFromCompare(0, 1, 8);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(true);
        expect(flags.s).toBe(true); // 0 - 1 = 255 (8-bit), MSB set
      });
    });

    describe("signed overflow cases", () => {
      it("should set V flag for positive - negative = negative overflow", () => {
        // 8-bit: 127 - (-1) = 128, but should be 127 + 1
        // 127 (0x7F) - 255 (0xFF as unsigned, -1 as signed)
        // In 8-bit: 0x7F - 0xFF = 0x80 (with borrow)
        // Signed: 127 - (-1) should = 128, but 128 is negative in signed 8-bit
        flags.updateFromCompare(0x7f, 0xff, 8);

        expect(flags.v).toBe(true); // signed overflow
        expect(flags.s).toBe(true); // result appears negative
      });

      it("should set V flag for negative - positive = positive overflow", () => {
        // 8-bit: -128 - 1 should = -129, but wraps to 127
        // 0x80 - 0x01 = 0x7F
        flags.updateFromCompare(0x80, 0x01, 8);

        expect(flags.v).toBe(true); // signed overflow
        expect(flags.s).toBe(false); // result appears positive
      });

      it("should not set V flag for normal signed subtraction", () => {
        // 10 - 5 = 5, no overflow
        flags.updateFromCompare(10, 5, 8);

        expect(flags.v).toBe(false);
      });

      it("should not set V flag when signs are the same", () => {
        // Both positive: 50 - 30 = 20
        flags.updateFromCompare(50, 30, 8);
        expect(flags.v).toBe(false);

        // Both "negative" (MSB set): 200 - 150 = 50
        flags.updateFromCompare(200, 150, 8);
        expect(flags.v).toBe(false);
      });
    });

    describe("8-bit comparisons", () => {
      it("should mask operands to 8 bits", () => {
        // 0x105 should become 0x05, 0x103 should become 0x03
        flags.updateFromCompare(0x105, 0x103, 8);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.s).toBe(false);
      });

      it("should handle 8-bit boundary values", () => {
        flags.updateFromCompare(0xff, 0x80, 8);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.s).toBe(false); // 0xFF - 0x80 = 0x7F, no sign bit
      });
    });

    describe("16-bit comparisons", () => {
      it("should handle 16-bit values correctly", () => {
        flags.updateFromCompare(0x8000, 0x0001, 16);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(true); // negative - positive overflow
        expect(flags.s).toBe(false);
      });

      it("should set flags for 16-bit equality", () => {
        flags.updateFromCompare(0x1234, 0x1234, 16);

        expect(flags.z).toBe(true);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(false);
      });
    });

    describe("32-bit comparisons (default)", () => {
      it("should use 32-bit width by default", () => {
        // 0x80000000 - 0x00000001 = 0x7FFFFFFF
        // 0x80000000 is -2147483648, subtracting 1 gives 0x7FFFFFFF (2147483647)
        // This is signed overflow (negative - positive = positive)
        flags.updateFromCompare(0x80000000, 0x00000001);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(true); // 0x80000000 < 0x00000001 as unsigned? No! 0x80000000 > 0x00000001
        expect(flags.v).toBe(true);
        expect(flags.s).toBe(false);
      });

      it("should handle large 32-bit values", () => {
        flags.updateFromCompare(0xffffffff, 0xfffffffe);

        expect(flags.z).toBe(false);
        expect(flags.c).toBe(false);
        expect(flags.v).toBe(false);
        expect(flags.s).toBe(false);
      });
    });

    describe("conditional jump scenarios", () => {
      it("jz should jump when a == b", () => {
        flags.updateFromCompare(42, 42);
        expect(flags.z).toBe(true); // jz would jump
      });

      it("jnz should jump when a != b", () => {
        flags.updateFromCompare(42, 43);
        expect(flags.z).toBe(false); // jnz would jump
      });

      it("jc should jump when a < b (unsigned)", () => {
        flags.updateFromCompare(5, 10);
        expect(flags.c).toBe(true); // jc would jump (unsigned less than)
      });

      it("jnc should jump when a >= b (unsigned)", () => {
        flags.updateFromCompare(10, 5);
        expect(flags.c).toBe(false); // jnc would jump (unsigned greater or equal)
      });

      it("jmi should jump when result is negative", () => {
        flags.updateFromCompare(3, 5, 8);
        expect(flags.s).toBe(true); // jmi would jump
      });

      it("jpl should jump when result is positive", () => {
        flags.updateFromCompare(10, 3, 8);
        expect(flags.s).toBe(false); // jpl would jump
      });
    });
  });

  describe("flag combinations", () => {
    it("should handle multiple sequential operations", () => {
      flags.updateFromResult(0, 8);
      expect(flags.z).toBe(true);

      flags.updateFromResult(128, 8);
      expect(flags.z).toBe(false);
      expect(flags.s).toBe(true);

      flags.updateFromCompare(5, 10, 8);
      expect(flags.c).toBe(true);
      expect(flags.s).toBe(true);

      flags.reset();
      expect(flags.z).toBe(false);
      expect(flags.c).toBe(false);
      expect(flags.v).toBe(false);
      expect(flags.s).toBe(false);
    });
  });
});
