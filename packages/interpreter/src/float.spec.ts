import { describe, it, expect, beforeEach } from "vitest";
import { RegisterSet } from "./registers";
import { Flags } from "./flags";
import {
  fadd,
  fsub,
  fmul,
  fdiv,
  fcmp,
  fabs,
  fneg,
  ftoi,
  itof,
  ftos,
  stof,
  fsqrt,
  fpow,
  fmod,
  fround,
  ffloor,
  fceil,
  fclear,
  fcopy,
  fsetImm,
  fcomp,
  a2flt,
  flt2a,
} from "./operations/float";

describe("Float Operations", () => {
  let registers: RegisterSet;
  let flags: Flags;

  beforeEach(() => {
    registers = new RegisterSet();
    flags = new Flags();
  });

  describe("FADD (Float Addition)", () => {
    it("should add two positive floats", () => {
      registers.setF(0, 1.5);
      registers.setF(1, 2.5);
      fadd(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(4.0);
    });

    it("should add positive and negative floats", () => {
      registers.setF(0, 5.0);
      registers.setF(1, -2.0);
      fadd(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(3.0);
    });

    it("should add to zero", () => {
      registers.setF(0, 0);
      registers.setF(1, 3.14);
      fadd(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(3.14);
    });

    it("should set Z flag when result is zero", () => {
      registers.setF(0, 1.0);
      registers.setF(1, -1.0);
      fadd(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(flags.z).toBe(true);
    });

    it("should set S flag for negative result", () => {
      registers.setF(0, -5.0);
      registers.setF(1, 2.0);
      fadd(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(flags.s).toBe(true);
    });

    it("should handle infinity", () => {
      registers.setF(0, Infinity);
      registers.setF(1, 1.0);
      fadd(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(Infinity);
      expect(flags.v).toBe(true);
    });
  });

  describe("FSUB (Float Subtraction)", () => {
    it("should subtract floats", () => {
      registers.setF(0, 5.0);
      registers.setF(1, 2.5);
      fsub(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(2.5);
    });

    it("should subtract resulting in negative", () => {
      registers.setF(0, 2.0);
      registers.setF(1, 5.0);
      fsub(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(-3.0);
      expect(flags.s).toBe(true);
    });

    it("should subtract equal values to zero", () => {
      registers.setF(0, 3.14);
      registers.setF(1, 3.14);
      fsub(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(0);
      expect(flags.z).toBe(true);
    });
  });

  describe("FMUL (Float Multiplication)", () => {
    it("should multiply floats", () => {
      registers.setF(0, 3.0);
      registers.setF(1, 2.5);
      fmul(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(7.5);
    });

    it("should multiply by zero", () => {
      registers.setF(0, 100.0);
      registers.setF(1, 0);
      fmul(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(0);
      expect(flags.z).toBe(true);
    });

    it("should handle negative multiplication", () => {
      registers.setF(0, -3.0);
      registers.setF(1, 4.0);
      fmul(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(-12.0);
      expect(flags.s).toBe(true);
    });

    it("should handle negative times negative", () => {
      registers.setF(0, -2.0);
      registers.setF(1, -3.0);
      fmul(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(6.0);
      expect(flags.s).toBe(false);
    });
  });

  describe("FDIV (Float Division)", () => {
    it("should divide floats", () => {
      registers.setF(0, 10.0);
      registers.setF(1, 4.0);
      fdiv(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(2.5);
    });

    it("should handle division by zero (Infinity)", () => {
      registers.setF(0, 1.0);
      registers.setF(1, 0);
      fdiv(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(Infinity);
      expect(flags.v).toBe(true);
    });

    it("should handle negative division", () => {
      registers.setF(0, -10.0);
      registers.setF(1, 2.0);
      fdiv(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(-5.0);
      expect(flags.s).toBe(true);
    });

    it("should handle 0/0 (NaN)", () => {
      registers.setF(0, 0);
      registers.setF(1, 0);
      fdiv(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(Number.isNaN(registers.getF(0))).toBe(true);
      expect(flags.v).toBe(true);
    });
  });

  describe("FCMP (Float Compare)", () => {
    it("should set Z flag when equal", () => {
      registers.setF(0, 3.14);
      registers.setF(1, 3.14);
      fcmp(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(flags.z).toBe(true);
      expect(flags.s).toBe(false);
    });

    it("should set S and C flags when less", () => {
      registers.setF(0, 2.0);
      registers.setF(1, 5.0);
      fcmp(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(flags.z).toBe(false);
      expect(flags.s).toBe(true);
      expect(flags.c).toBe(true);
    });

    it("should clear S and C flags when greater", () => {
      registers.setF(0, 5.0);
      registers.setF(1, 2.0);
      fcmp(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(flags.z).toBe(false);
      expect(flags.s).toBe(false);
      expect(flags.c).toBe(false);
    });

    it("should handle NaN comparison", () => {
      registers.setF(0, NaN);
      registers.setF(1, 1.0);
      fcmp(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(flags.v).toBe(true);
    });

    it("should support FCOMP alias", () => {
      registers.setF(0, 1.0);
      registers.setF(1, 1.0);
      fcomp(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(flags.z).toBe(true);
    });
  });

  describe("FABS (Float Absolute Value)", () => {
    it("should get absolute of negative", () => {
      registers.setF(0, -3.14);
      fabs(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(3.14);
    });

    it("should keep positive unchanged", () => {
      registers.setF(0, 3.14);
      fabs(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(3.14);
    });

    it("should handle zero", () => {
      registers.setF(0, 0);
      fabs(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(0);
    });

    it("should handle negative zero", () => {
      registers.setF(0, -0);
      fabs(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(0);
    });
  });

  describe("FNEG (Float Negate)", () => {
    it("should negate positive", () => {
      registers.setF(0, 3.14);
      fneg(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(-3.14);
      expect(flags.s).toBe(true);
    });

    it("should negate negative", () => {
      registers.setF(0, -3.14);
      fneg(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(3.14);
      expect(flags.s).toBe(false);
    });

    it("should handle zero", () => {
      registers.setF(0, 0);
      fneg(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(-0);
    });
  });

  describe("FTOI (Float to Integer)", () => {
    it("should truncate toward zero (positive)", () => {
      registers.setF(0, 3.7);
      ftoi(registers, flags, { kind: "L", index: 0 }, { kind: "F", index: 0 });
      expect(registers.getL(0)).toBe(3);
    });

    it("should truncate toward zero (negative)", () => {
      registers.setF(0, -3.7);
      ftoi(registers, flags, { kind: "L", index: 0 }, { kind: "F", index: 0 });
      const value = registers.getL(0) | 0;
      expect(value).toBe(-3);
    });

    it("should handle exact integer", () => {
      registers.setF(0, 42.0);
      ftoi(registers, flags, { kind: "L", index: 0 }, { kind: "F", index: 0 });
      expect(registers.getL(0)).toBe(42);
    });

    it("should handle zero", () => {
      registers.setF(0, 0);
      ftoi(registers, flags, { kind: "L", index: 0 }, { kind: "F", index: 0 });
      expect(registers.getL(0)).toBe(0);
      expect(flags.z).toBe(true);
    });

    it("should set V flag for infinity", () => {
      registers.setF(0, Infinity);
      ftoi(registers, flags, { kind: "L", index: 0 }, { kind: "F", index: 0 });
      expect(flags.v).toBe(true);
    });

    it("should set V flag for NaN", () => {
      registers.setF(0, NaN);
      ftoi(registers, flags, { kind: "L", index: 0 }, { kind: "F", index: 0 });
      expect(flags.v).toBe(true);
    });

    it("should convert to I register", () => {
      registers.setF(0, 1000.9);
      ftoi(registers, flags, { kind: "I", index: 0 }, { kind: "F", index: 0 });
      expect(registers.getI(0)).toBe(1000);
    });

    it("should convert to B register (clamp to 255)", () => {
      registers.setF(0, 300.5);
      ftoi(registers, flags, { kind: "B", index: 0 }, { kind: "F", index: 0 });
      expect(registers.getB(0)).toBe(255);
      expect(flags.v).toBe(true);
    });
  });

  describe("ITOF (Integer to Float)", () => {
    it("should convert positive integer", () => {
      registers.setL(0, 42);
      itof(registers, { kind: "F", index: 0 }, { kind: "L", index: 0 });
      expect(registers.getF(0)).toBe(42.0);
    });

    it("should convert negative integer (signed)", () => {
      registers.setL(0, -42 >>> 0);
      itof(registers, { kind: "F", index: 0 }, { kind: "L", index: 0 });
      expect(registers.getF(0)).toBe(-42.0);
    });

    it("should convert zero", () => {
      registers.setL(0, 0);
      itof(registers, { kind: "F", index: 0 }, { kind: "L", index: 0 });
      expect(registers.getF(0)).toBe(0);
    });

    it("should convert from I register", () => {
      registers.setI(0, 1000);
      itof(registers, { kind: "F", index: 0 }, { kind: "I", index: 0 });
      expect(registers.getF(0)).toBe(1000.0);
    });

    it("should convert from B register", () => {
      registers.setB(0, 255);
      itof(registers, { kind: "F", index: 0 }, { kind: "B", index: 0 });
      expect(registers.getF(0)).toBe(255.0);
    });
  });

  describe("FTOS (Float to String)", () => {
    it("should convert float to string", () => {
      registers.setF(0, 3.14);
      ftos(registers, { kind: "S", index: 0 }, { kind: "F", index: 0 });
      expect(registers.getS(0)).toBe("3.14");
    });

    it("should convert integer-like float", () => {
      registers.setF(0, 42.0);
      ftos(registers, { kind: "S", index: 0 }, { kind: "F", index: 0 });
      expect(registers.getS(0)).toBe("42");
    });

    it("should convert with precision", () => {
      registers.setF(0, 3.14159265);
      registers.setI(0, 2);
      ftos(
        registers,
        { kind: "S", index: 0 },
        { kind: "F", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(0)).toBe("3.14");
    });

    it("should handle negative", () => {
      registers.setF(0, -1.5);
      ftos(registers, { kind: "S", index: 0 }, { kind: "F", index: 0 });
      expect(registers.getS(0)).toBe("-1.5");
    });

    it("should support FLT2A alias", () => {
      registers.setF(0, 2.5);
      flt2a(registers, { kind: "S", index: 0 }, { kind: "F", index: 0 });
      expect(registers.getS(0)).toBe("2.5");
    });
  });

  describe("STOF (String to Float)", () => {
    it("should parse float string", () => {
      registers.setS(0, "3.14");
      stof(registers, flags, { kind: "F", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getF(0)).toBe(3.14);
      expect(flags.z).toBe(false);
    });

    it("should parse integer string", () => {
      registers.setS(0, "42");
      stof(registers, flags, { kind: "F", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getF(0)).toBe(42.0);
    });

    it("should parse negative", () => {
      registers.setS(0, "-1.5");
      stof(registers, flags, { kind: "F", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getF(0)).toBe(-1.5);
    });

    it("should handle whitespace", () => {
      registers.setS(0, "  3.14  ");
      stof(registers, flags, { kind: "F", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getF(0)).toBe(3.14);
    });

    it("should set Z flag on parse error", () => {
      registers.setS(0, "not a number");
      stof(registers, flags, { kind: "F", index: 0 }, { kind: "S", index: 0 });
      expect(flags.z).toBe(true);
      expect(flags.v).toBe(true);
    });

    it("should parse scientific notation", () => {
      registers.setS(0, "1.5e3");
      stof(registers, flags, { kind: "F", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getF(0)).toBe(1500);
    });

    it("should support A2FLT alias", () => {
      registers.setS(0, "2.5");
      a2flt(registers, flags, { kind: "F", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getF(0)).toBe(2.5);
    });
  });

  describe("FSQRT (Float Square Root)", () => {
    it("should compute square root", () => {
      registers.setF(0, 16);
      fsqrt(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(4);
    });

    it("should handle perfect squares", () => {
      registers.setF(0, 25);
      fsqrt(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(5);
    });

    it("should handle non-perfect squares", () => {
      registers.setF(0, 2);
      fsqrt(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBeCloseTo(1.414, 3);
    });

    it("should handle zero", () => {
      registers.setF(0, 0);
      fsqrt(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(0);
    });

    it("should handle negative (NaN)", () => {
      registers.setF(0, -1);
      fsqrt(registers, flags, { kind: "F", index: 0 });
      expect(Number.isNaN(registers.getF(0))).toBe(true);
      expect(flags.v).toBe(true);
    });
  });

  describe("FPOW (Float Power)", () => {
    it("should compute power", () => {
      registers.setF(0, 2);
      registers.setF(1, 3);
      fpow(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(8);
    });

    it("should handle power of 0", () => {
      registers.setF(0, 5);
      registers.setF(1, 0);
      fpow(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(1);
    });

    it("should handle power of 1", () => {
      registers.setF(0, 5);
      registers.setF(1, 1);
      fpow(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(5);
    });

    it("should handle fractional power", () => {
      registers.setF(0, 4);
      registers.setF(1, 0.5);
      fpow(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(2);
    });

    it("should handle negative power", () => {
      registers.setF(0, 2);
      registers.setF(1, -1);
      fpow(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(0.5);
    });
  });

  describe("FMOD (Float Modulo)", () => {
    it("should compute modulo", () => {
      registers.setF(0, 5.5);
      registers.setF(1, 2);
      fmod(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(1.5);
    });

    it("should handle exact division", () => {
      registers.setF(0, 6);
      registers.setF(1, 3);
      fmod(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(0);
      expect(flags.z).toBe(true);
    });

    it("should handle negative dividend", () => {
      registers.setF(0, -5.5);
      registers.setF(1, 2);
      fmod(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(-1.5);
    });
  });

  describe("FROUND (Round)", () => {
    it("should round up", () => {
      registers.setF(0, 3.7);
      fround(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(4);
    });

    it("should round down", () => {
      registers.setF(0, 3.2);
      fround(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(3);
    });

    it("should round half up", () => {
      registers.setF(0, 3.5);
      fround(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(4);
    });

    it("should handle negative", () => {
      registers.setF(0, -3.7);
      fround(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(-4);
    });
  });

  describe("FFLOOR (Floor)", () => {
    it("should floor positive", () => {
      registers.setF(0, 3.9);
      ffloor(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(3);
    });

    it("should floor negative", () => {
      registers.setF(0, -3.1);
      ffloor(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(-4);
    });

    it("should handle exact integer", () => {
      registers.setF(0, 5);
      ffloor(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(5);
    });
  });

  describe("FCEIL (Ceiling)", () => {
    it("should ceil positive", () => {
      registers.setF(0, 3.1);
      fceil(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(4);
    });

    it("should ceil negative", () => {
      registers.setF(0, -3.9);
      fceil(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(-3);
    });

    it("should handle exact integer", () => {
      registers.setF(0, 5);
      fceil(registers, flags, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(5);
    });
  });

  describe("FCLEAR (Clear Float)", () => {
    it("should clear to zero", () => {
      registers.setF(0, 3.14);
      fclear(registers, { kind: "F", index: 0 });
      expect(registers.getF(0)).toBe(0);
    });
  });

  describe("FCOPY (Copy Float)", () => {
    it("should copy float", () => {
      registers.setF(1, 3.14);
      fcopy(registers, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(3.14);
    });

    it("should copy negative", () => {
      registers.setF(1, -2.5);
      fcopy(registers, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(-2.5);
    });
  });

  describe("FSET_IMM (Set Immediate)", () => {
    it("should set immediate value", () => {
      fsetImm(registers, { kind: "F", index: 0 }, 3.14159);
      expect(registers.getF(0)).toBe(3.14159);
    });

    it("should set negative value", () => {
      fsetImm(registers, { kind: "F", index: 0 }, -2.5);
      expect(registers.getF(0)).toBe(-2.5);
    });

    it("should set zero", () => {
      fsetImm(registers, { kind: "F", index: 0 }, 0);
      expect(registers.getF(0)).toBe(0);
    });
  });

  describe("Edge cases", () => {
    it("should handle very small numbers", () => {
      registers.setF(0, 1e-100);
      registers.setF(1, 2);
      fmul(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(2e-100);
    });

    it("should handle very large numbers", () => {
      registers.setF(0, 1e100);
      registers.setF(1, 2);
      fmul(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBe(2e100);
    });

    it("should handle precision limits", () => {
      registers.setF(0, 0.1);
      registers.setF(1, 0.2);
      fadd(registers, flags, { kind: "F", index: 0 }, { kind: "F", index: 1 });
      expect(registers.getF(0)).toBeCloseTo(0.3, 10);
    });
  });
});
