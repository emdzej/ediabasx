import { beforeEach, describe, expect, it } from "vitest";
import { Flags } from "./flags";
import { RegisterSet } from "./registers";
import {
  RegisterKinds,
  type RegisterRef,
  add,
  sub,
  mul,
  div,
  mod,
  neg,
  inc,
  dec,
  and as andOp,
  or as orOp,
  xor as xorOp,
  not as notOp,
  shl,
  shr,
  cmp,
  test,
  addc,
  subc,
} from "./operations/arithmetic";

const B0: RegisterRef = { kind: RegisterKinds.B, index: 0 };
const B1: RegisterRef = { kind: RegisterKinds.B, index: 1 };
const I0: RegisterRef = { kind: RegisterKinds.I, index: 0 };
const I1: RegisterRef = { kind: RegisterKinds.I, index: 1 };
const L0: RegisterRef = { kind: RegisterKinds.L, index: 0 };
const L1: RegisterRef = { kind: RegisterKinds.L, index: 1 };

describe("arithmetic operations", () => {
  let registers: RegisterSet;
  let flags: Flags;

  beforeEach(() => {
    registers = new RegisterSet();
    flags = new Flags();
  });

  describe("add", () => {
    it("adds values and sets carry for overflow", () => {
      registers.setB(0, 200);
      registers.setB(1, 100);

      add(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(44);
      expect(flags.c).toBe(true);
      expect(flags.v).toBe(false);
      expect(flags.z).toBe(false);
      expect(flags.s).toBe(false);
    });

    it("sets overflow for signed wrap", () => {
      registers.setB(0, 0x7f);
      registers.setB(1, 0x01);

      add(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(0x80);
      expect(flags.c).toBe(false);
      expect(flags.v).toBe(true);
      expect(flags.s).toBe(true);
    });

    it("handles 16-bit destinations", () => {
      registers.setI(0, 0x7fff);
      registers.setI(1, 0x0001);

      add(registers, flags, I0, I1);

      expect(registers.getI(0)).toBe(0x8000);
      expect(flags.v).toBe(true);
      expect(flags.s).toBe(true);
      expect(flags.c).toBe(false);
    });
  });

  describe("sub", () => {
    it("subtracts values and sets borrow", () => {
      registers.setB(0, 5);
      registers.setB(1, 10);

      sub(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(251);
      expect(flags.c).toBe(true);
      expect(flags.v).toBe(false);
      expect(flags.s).toBe(true);
    });

    it("sets overflow when signed range is exceeded", () => {
      registers.setB(0, 0x80);
      registers.setB(1, 0x01);

      sub(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(0x7f);
      expect(flags.v).toBe(true);
      expect(flags.s).toBe(false);
    });
  });

  describe("mul", () => {
    it("stores low result in destination and high in source", () => {
      registers.setB(0, 0x12);
      registers.setB(1, 0x34);

      mul(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(0xa8);
      expect(registers.getB(1)).toBe(0x03);
      expect(flags.v).toBe(false);
      expect(flags.s).toBe(true);
    });

    it("handles 16-bit multiplication", () => {
      registers.setI(0, 0x1234);
      registers.setI(1, 0x0020);

      mul(registers, flags, I0, I1);

      expect(registers.getI(0)).toBe(0x4680);
      expect(registers.getI(1)).toBe(0x0002);
    });
  });

  describe("div", () => {
    it("divides and stores remainder in source", () => {
      registers.setI(0, 1000);
      registers.setI(1, 10);
      flags.c = true;

      div(registers, flags, I0, I1);

      expect(registers.getI(0)).toBe(100);
      expect(registers.getI(1)).toBe(0);
      expect(flags.v).toBe(false);
      expect(flags.c).toBe(true);
      expect(flags.z).toBe(false);
    });

    it("keeps destination on divide-by-zero and updates flags", () => {
      registers.setI(0, 1000);
      registers.setI(1, 0);
      flags.c = true;

      div(registers, flags, I0, I1);

      expect(registers.getI(0)).toBe(1000);
      expect(registers.getI(1)).toBe(0);
      expect(flags.z).toBe(true);
      expect(flags.v).toBe(false);
      expect(flags.c).toBe(true);
    });
  });

  describe("mod", () => {
    it("stores remainder in destination", () => {
      registers.setI(0, 1000);
      registers.setI(1, 256);

      mod(registers, flags, I0, I1);

      expect(registers.getI(0)).toBe(232);
      expect(flags.z).toBe(false);
      expect(flags.s).toBe(false);
    });

    it("keeps destination on modulo-by-zero and updates flags", () => {
      registers.setI(0, 1000);
      registers.setI(1, 0);
      flags.c = true;

      mod(registers, flags, I0, I1);

      expect(registers.getI(0)).toBe(1000);
      expect(flags.z).toBe(true);
      expect(flags.c).toBe(true);
    });
  });

  describe("neg", () => {
    it("negates values and sets carry", () => {
      registers.setB(0, 1);

      neg(registers, flags, B0);

      expect(registers.getB(0)).toBe(0xff);
      expect(flags.c).toBe(true);
      expect(flags.s).toBe(true);
      expect(flags.v).toBe(false);
    });

    it("sets overflow on minimum negative", () => {
      registers.setB(0, 0x80);

      neg(registers, flags, B0);

      expect(registers.getB(0)).toBe(0x80);
      expect(flags.v).toBe(true);
      expect(flags.s).toBe(true);
    });
  });

  describe("inc/dec", () => {
    it("increments with wraparound", () => {
      registers.setB(0, 0xff);

      inc(registers, flags, B0);

      expect(registers.getB(0)).toBe(0x00);
      expect(flags.z).toBe(true);
      expect(flags.c).toBe(true);
      expect(flags.v).toBe(false);
    });

    it("sets overflow when incrementing signed max", () => {
      registers.setB(0, 0x7f);

      inc(registers, flags, B0);

      expect(registers.getB(0)).toBe(0x80);
      expect(flags.v).toBe(true);
      expect(flags.s).toBe(true);
    });

    it("decrements with borrow", () => {
      registers.setB(0, 0x00);

      dec(registers, flags, B0);

      expect(registers.getB(0)).toBe(0xff);
      expect(flags.c).toBe(true);
      expect(flags.s).toBe(true);
      expect(flags.v).toBe(false);
    });

    it("sets overflow when decrementing signed min", () => {
      registers.setB(0, 0x80);

      dec(registers, flags, B0);

      expect(registers.getB(0)).toBe(0x7f);
      expect(flags.v).toBe(true);
      expect(flags.s).toBe(false);
    });
  });

  describe("logic ops", () => {
    it("and clears overflow and updates zero/sign", () => {
      registers.setB(0, 0xf0);
      registers.setB(1, 0x0f);
      flags.c = true;

      andOp(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(0x00);
      expect(flags.z).toBe(true);
      expect(flags.v).toBe(false);
      expect(flags.c).toBe(true);
    });

    it("or preserves carry and sets sign", () => {
      registers.setB(0, 0x80);
      registers.setB(1, 0x01);
      flags.c = true;

      orOp(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(0x81);
      expect(flags.s).toBe(true);
      expect(flags.c).toBe(true);
    });

    it("xor updates sign flag", () => {
      registers.setB(0, 0xff);
      registers.setB(1, 0x0f);

      xorOp(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(0xf0);
      expect(flags.s).toBe(true);
      expect(flags.v).toBe(false);
    });

    it("not flips bits", () => {
      registers.setB(0, 0x00);
      flags.c = true;

      notOp(registers, flags, B0);

      expect(registers.getB(0)).toBe(0xff);
      expect(flags.s).toBe(true);
      expect(flags.v).toBe(false);
      expect(flags.c).toBe(true);
    });
  });

  describe("shift ops", () => {
    it("shifts left and sets carry", () => {
      registers.setB(0, 0x81);
      registers.setB(1, 0x01);

      shl(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(0x02);
      expect(flags.c).toBe(true);
      expect(flags.z).toBe(false);
    });

    it("shifts right and sets carry", () => {
      registers.setB(0, 0x81);
      registers.setB(1, 0x01);

      shr(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(0x40);
      expect(flags.c).toBe(true);
      expect(flags.s).toBe(false);
    });
  });

  describe("cmp", () => {
    it("updates flags without changing registers", () => {
      registers.setB(0, 5);
      registers.setB(1, 10);

      cmp(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(5);
      expect(flags.c).toBe(true);
      expect(flags.s).toBe(true);
      expect(flags.v).toBe(false);
    });

    it("sets zero flag when equal", () => {
      registers.setL(0, 0x12345678);
      registers.setL(1, 0x12345678);

      cmp(registers, flags, L0, L1);

      expect(flags.z).toBe(true);
      expect(flags.c).toBe(false);
    });
  });

  describe("test", () => {
    it("updates flags without changing registers", () => {
      registers.setB(0, 0x0f);
      registers.setB(1, 0xf0);
      flags.c = true;

      test(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(0x0f);
      expect(flags.z).toBe(true);
      expect(flags.v).toBe(false);
      expect(flags.c).toBe(true);
    });
  });

  describe("addc (add with carry)", () => {
    it("adds without carry when carry flag is clear", () => {
      registers.setB(0, 10);
      registers.setB(1, 5);
      flags.c = false;

      addc(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(15);
      expect(flags.c).toBe(false);
    });

    it("adds with carry when carry flag is set", () => {
      registers.setB(0, 10);
      registers.setB(1, 5);
      flags.c = true;

      addc(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(16); // 10 + 5 + 1
      expect(flags.c).toBe(false);
    });

    it("sets carry on overflow with carry input", () => {
      registers.setB(0, 0xff);
      registers.setB(1, 0);
      flags.c = true;

      addc(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(0); // 255 + 0 + 1 = 256 -> 0
      expect(flags.c).toBe(true);
    });

    it("works with 16-bit registers", () => {
      registers.setI(0, 0xfffe);
      registers.setI(1, 1);
      flags.c = true;

      addc(registers, flags, I0, I1);

      expect(registers.getI(0)).toBe(0); // 0xfffe + 1 + 1 = 0x10000 -> 0
      expect(flags.c).toBe(true);
    });
  });

  describe("subc (subtract with carry/borrow)", () => {
    it("subtracts without borrow when carry flag is clear", () => {
      registers.setB(0, 10);
      registers.setB(1, 3);
      flags.c = false; // no borrow (C=0 means no borrow input)

      subc(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(7); // 10 - 3 - 0
      expect(flags.c).toBe(false); // no borrow occurred
    });

    it("subtracts with borrow when carry flag is set", () => {
      registers.setB(0, 10);
      registers.setB(1, 3);
      flags.c = true; // borrow input (C=1 means borrow)

      subc(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(6); // 10 - 3 - 1
      expect(flags.c).toBe(false); // no borrow occurred
    });

    it("sets borrow (sets carry) on underflow", () => {
      registers.setB(0, 0);
      registers.setB(1, 0);
      flags.c = true; // incoming borrow

      subc(registers, flags, B0, B1);

      expect(registers.getB(0)).toBe(0xff); // 0 - 0 - 1 = -1 -> 255
      expect(flags.c).toBe(true); // borrow occurred
    });

    it("works for multi-precision subtraction", () => {
      // Simulate subtraction with borrow chain
      // Low word: 0x0000 - 0x0001 with no incoming borrow
      registers.setI(0, 0x0000);
      registers.setI(1, 0x0001);
      flags.c = false; // no incoming borrow

      subc(registers, flags, I0, I1);

      expect(registers.getI(0)).toBe(0xffff);
      expect(flags.c).toBe(true); // borrow for high word
    });
  });
});
