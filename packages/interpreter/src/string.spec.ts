import { describe, it, expect, beforeEach } from "vitest";
import { RegisterSet } from "./registers";
import { Flags } from "./flags";
import {
  scat,
  slen,
  scmp,
  sget,
  sset,
  stoi,
  itos,
  stoh,
  htos,
  sfind,
  ssub,
  supper,
  slower,
  strim,
  srev,
  serase,
  spaste,
  stoken,
  scopy,
  sclear,
  ssetImm,
  strcmp,
  strlen,
  strcat,
} from "./operations/string";

describe("String Operations", () => {
  let registers: RegisterSet;
  let flags: Flags;

  beforeEach(() => {
    registers = new RegisterSet();
    flags = new Flags();
  });

  describe("SCAT (String Concatenate)", () => {
    it("should concatenate two strings", () => {
      registers.setS(0, "Hello");
      registers.setS(1, " World");
      scat(registers, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(registers.getS(0)).toBe("Hello World");
    });

    it("should concatenate empty strings", () => {
      registers.setS(0, "Hello");
      registers.setS(1, "");
      scat(registers, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(registers.getS(0)).toBe("Hello");
    });

    it("should concatenate to empty string", () => {
      registers.setS(0, "");
      registers.setS(1, "World");
      scat(registers, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(registers.getS(0)).toBe("World");
    });

    it("should truncate result to maxStringSize", () => {
      const regs = new RegisterSet({ maxStringSize: 10 });
      regs.setS(0, "12345");
      regs.setS(1, "67890ABC");
      scat(regs, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(regs.getS(0)).toBe("1234567890");
    });

    it("should support STRCAT alias", () => {
      registers.setS(0, "A");
      registers.setS(1, "B");
      strcat(registers, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(registers.getS(0)).toBe("AB");
    });
  });

  describe("SLEN (String Length)", () => {
    it("should get length of string", () => {
      registers.setS(0, "Hello");
      slen(registers, { kind: "I", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getI(0)).toBe(5);
    });

    it("should return 0 for empty string", () => {
      registers.setS(0, "");
      slen(registers, { kind: "I", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getI(0)).toBe(0);
    });

    it("should work with B register destination", () => {
      registers.setS(0, "Test");
      slen(registers, { kind: "B", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getB(0)).toBe(4);
    });

    it("should work with L register destination", () => {
      registers.setS(0, "Long string here");
      slen(registers, { kind: "L", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getL(0)).toBe(16);
    });

    it("should support STRLEN alias", () => {
      registers.setS(0, "ABC");
      strlen(registers, { kind: "I", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getI(0)).toBe(3);
    });
  });

  describe("SCMP (String Compare)", () => {
    it("should set Z flag when strings are equal", () => {
      registers.setS(0, "Hello");
      registers.setS(1, "Hello");
      scmp(registers, flags, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(flags.z).toBe(true);
      expect(flags.s).toBe(false);
    });

    it("should set S flag when first < second", () => {
      registers.setS(0, "abc");
      registers.setS(1, "abd");
      scmp(registers, flags, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(flags.z).toBe(false);
      expect(flags.s).toBe(true);
    });

    it("should clear S flag when first > second", () => {
      registers.setS(0, "abd");
      registers.setS(1, "abc");
      scmp(registers, flags, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(flags.z).toBe(false);
      expect(flags.s).toBe(false);
    });

    it("should compare empty strings as equal", () => {
      registers.setS(0, "");
      registers.setS(1, "");
      scmp(registers, flags, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(flags.z).toBe(true);
    });

    it("should handle empty string less than non-empty", () => {
      registers.setS(0, "");
      registers.setS(1, "A");
      scmp(registers, flags, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(flags.z).toBe(false);
      expect(flags.s).toBe(true);
    });

    it("should support STRCMP alias", () => {
      registers.setS(0, "Test");
      registers.setS(1, "Test");
      strcmp(registers, flags, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(flags.z).toBe(true);
    });
  });

  describe("SGET (Get Character)", () => {
    it("should get character at index", () => {
      registers.setS(0, "Hello");
      registers.setI(0, 1);
      sget(
        registers,
        { kind: "B", index: 0 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getB(0)).toBe(101); // 'e'
    });

    it("should get first character", () => {
      registers.setS(0, "Hello");
      registers.setI(0, 0);
      sget(
        registers,
        { kind: "B", index: 0 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getB(0)).toBe(72); // 'H'
    });

    it("should get last character", () => {
      registers.setS(0, "Hello");
      registers.setI(0, 4);
      sget(
        registers,
        { kind: "B", index: 0 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getB(0)).toBe(111); // 'o'
    });

    it("should return 0 for out of bounds index", () => {
      registers.setS(0, "Hello");
      registers.setI(0, 10);
      sget(
        registers,
        { kind: "B", index: 0 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getB(0)).toBe(0);
    });

    it("should return 0 for negative index", () => {
      registers.setS(0, "Hello");
      registers.setI(0, -1);
      registers.setI(0, 0xFFFF); // Simulate negative via unsigned
      sget(
        registers,
        { kind: "B", index: 0 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 }
      );
      expect(registers.getB(0)).toBe(0);
    });
  });

  describe("SSET (Set Character)", () => {
    // Use I3 + B8 so the index/char operands do not alias each other
    // (B0..B1 alias I0, so writing B0 would corrupt I0 in real BEST2 semantics).
    it("should set character at index", () => {
      registers.setS(0, "Hello");
      registers.setI(3, 0);
      registers.setB(8, 74); // 'J'
      sset(
        registers,
        { kind: "S", index: 0 },
        { kind: "I", index: 3 },
        { kind: "B", index: 8 }
      );
      expect(registers.getS(0)).toBe("Jello");
    });

    it("should set middle character", () => {
      registers.setS(0, "Hello");
      registers.setI(3, 2);
      registers.setB(8, 120); // 'x'
      sset(
        registers,
        { kind: "S", index: 0 },
        { kind: "I", index: 3 },
        { kind: "B", index: 8 }
      );
      expect(registers.getS(0)).toBe("Hexlo");
    });

    it("should set last character", () => {
      registers.setS(0, "Hello");
      registers.setI(3, 4);
      registers.setB(8, 97); // 'a'
      sset(
        registers,
        { kind: "S", index: 0 },
        { kind: "I", index: 3 },
        { kind: "B", index: 8 }
      );
      expect(registers.getS(0)).toBe("Hella");
    });

    it("should ignore out of bounds index", () => {
      registers.setS(0, "Hello");
      registers.setI(3, 10);
      registers.setB(8, 65); // 'A'
      sset(
        registers,
        { kind: "S", index: 0 },
        { kind: "I", index: 3 },
        { kind: "B", index: 8 }
      );
      expect(registers.getS(0)).toBe("Hello");
    });
  });

  describe("STOI (String to Integer)", () => {
    it("should parse positive integer", () => {
      registers.setS(0, "12345");
      stoi(registers, flags, { kind: "L", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getL(0)).toBe(12345);
      expect(flags.z).toBe(false);
    });

    it("should parse negative integer", () => {
      registers.setS(0, "-42");
      stoi(registers, flags, { kind: "L", index: 0 }, { kind: "S", index: 0 });
      const value = registers.getL(0) | 0; // Convert to signed
      expect(value).toBe(-42);
      expect(flags.s).toBe(true);
    });

    it("should parse zero", () => {
      registers.setS(0, "0");
      stoi(registers, flags, { kind: "L", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getL(0)).toBe(0);
    });

    it("should handle whitespace", () => {
      registers.setS(0, "  123  ");
      stoi(registers, flags, { kind: "L", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getL(0)).toBe(123);
    });

    it("should set Z flag on parse error", () => {
      registers.setS(0, "not a number");
      stoi(registers, flags, { kind: "L", index: 0 }, { kind: "S", index: 0 });
      expect(flags.z).toBe(true);
      expect(flags.c).toBe(true);
    });

    it("should parse to I register", () => {
      registers.setS(0, "1000");
      stoi(registers, flags, { kind: "I", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getI(0)).toBe(1000);
    });
  });

  describe("ITOS (Integer to String)", () => {
    it("should convert positive integer", () => {
      registers.setL(0, 12345);
      itos(registers, { kind: "S", index: 0 }, { kind: "L", index: 0 });
      expect(registers.getS(0)).toBe("12345");
    });

    it("should convert negative integer", () => {
      registers.setL(0, -42 >>> 0); // Store -42 as unsigned
      itos(registers, { kind: "S", index: 0 }, { kind: "L", index: 0 });
      expect(registers.getS(0)).toBe("-42");
    });

    it("should convert zero", () => {
      registers.setL(0, 0);
      itos(registers, { kind: "S", index: 0 }, { kind: "L", index: 0 });
      expect(registers.getS(0)).toBe("0");
    });

    it("should convert from I register", () => {
      registers.setI(0, 500);
      itos(registers, { kind: "S", index: 0 }, { kind: "I", index: 0 });
      expect(registers.getS(0)).toBe("500");
    });

    it("should convert from B register", () => {
      registers.setB(0, 255);
      itos(registers, { kind: "S", index: 0 }, { kind: "B", index: 0 });
      expect(registers.getS(0)).toBe("255");
    });
  });

  describe("STOH (String to Hex)", () => {
    it("should parse hex without prefix", () => {
      registers.setS(0, "FF");
      stoh(registers, flags, { kind: "L", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getL(0)).toBe(255);
    });

    it("should parse hex with 0x prefix", () => {
      registers.setS(0, "0x1A");
      stoh(registers, flags, { kind: "L", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getL(0)).toBe(26);
    });

    it("should parse hex with $ prefix", () => {
      registers.setS(0, "$CAFE");
      stoh(registers, flags, { kind: "L", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getL(0)).toBe(0xCAFE);
    });

    it("should handle lowercase", () => {
      registers.setS(0, "abc");
      stoh(registers, flags, { kind: "L", index: 0 }, { kind: "S", index: 0 });
      expect(registers.getL(0)).toBe(0xABC);
    });

    it("should set Z flag on parse error", () => {
      registers.setS(0, "XYZ");
      stoh(registers, flags, { kind: "L", index: 0 }, { kind: "S", index: 0 });
      expect(flags.z).toBe(true);
    });
  });

  describe("HTOS (Hex to String)", () => {
    it("should convert to hex uppercase", () => {
      registers.setL(0, 255);
      htos(registers, { kind: "S", index: 0 }, { kind: "L", index: 0 });
      expect(registers.getS(0)).toBe("FF");
    });

    it("should convert zero", () => {
      registers.setL(0, 0);
      htos(registers, { kind: "S", index: 0 }, { kind: "L", index: 0 });
      expect(registers.getS(0)).toBe("0");
    });

    it("should convert large value", () => {
      registers.setL(0, 0xDEADBEEF);
      htos(registers, { kind: "S", index: 0 }, { kind: "L", index: 0 });
      expect(registers.getS(0)).toBe("DEADBEEF");
    });
  });

  describe("SFIND (Find Substring)", () => {
    it("should find substring at beginning", () => {
      registers.setS(0, "Hello World");
      registers.setS(1, "Hello");
      sfind(registers, { kind: "I", index: 0 }, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(registers.getI(0)).toBe(0);
    });

    it("should find substring in middle", () => {
      registers.setS(0, "Hello World");
      registers.setS(1, "World");
      sfind(registers, { kind: "I", index: 0 }, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(registers.getI(0)).toBe(6);
    });

    it("should return -1 when not found", () => {
      registers.setS(0, "Hello World");
      registers.setS(1, "XYZ");
      sfind(registers, { kind: "I", index: 0 }, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(registers.getI(0)).toBe(65535); // -1 as unsigned 16-bit
    });

    it("should find with start index", () => {
      registers.setS(0, "abcabc");
      registers.setS(1, "abc");
      registers.setI(1, 1);
      sfind(
        registers,
        { kind: "I", index: 0 },
        { kind: "S", index: 0 },
        { kind: "S", index: 1 },
        { kind: "I", index: 1 }
      );
      expect(registers.getI(0)).toBe(3);
    });

    it("should find empty string", () => {
      registers.setS(0, "Hello");
      registers.setS(1, "");
      sfind(registers, { kind: "I", index: 0 }, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(registers.getI(0)).toBe(0);
    });
  });

  describe("SSUB (Substring)", () => {
    it("should extract substring from beginning", () => {
      registers.setS(0, "Hello World");
      registers.setI(0, 0);
      registers.setI(1, 5);
      ssub(
        registers,
        { kind: "S", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(registers.getS(1)).toBe("Hello");
    });

    it("should extract substring from middle", () => {
      registers.setS(0, "Hello World");
      registers.setI(0, 6);
      registers.setI(1, 5);
      ssub(
        registers,
        { kind: "S", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(registers.getS(1)).toBe("World");
    });

    it("should handle length beyond string end", () => {
      registers.setS(0, "Hello");
      registers.setI(0, 3);
      registers.setI(1, 100);
      ssub(
        registers,
        { kind: "S", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(registers.getS(1)).toBe("lo");
    });

    it("should return empty for out of bounds start", () => {
      registers.setS(0, "Hello");
      registers.setI(0, 10);
      registers.setI(1, 5);
      ssub(
        registers,
        { kind: "S", index: 1 },
        { kind: "S", index: 0 },
        { kind: "I", index: 0 },
        { kind: "I", index: 1 }
      );
      expect(registers.getS(1)).toBe("");
    });
  });

  describe("SUPPER (Uppercase)", () => {
    it("should convert to uppercase", () => {
      registers.setS(0, "Hello World");
      supper(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("HELLO WORLD");
    });

    it("should handle already uppercase", () => {
      registers.setS(0, "HELLO");
      supper(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("HELLO");
    });

    it("should handle empty string", () => {
      registers.setS(0, "");
      supper(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("");
    });

    it("should handle mixed case with numbers", () => {
      registers.setS(0, "Test123");
      supper(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("TEST123");
    });
  });

  describe("SLOWER (Lowercase)", () => {
    it("should convert to lowercase", () => {
      registers.setS(0, "Hello World");
      slower(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("hello world");
    });

    it("should handle already lowercase", () => {
      registers.setS(0, "hello");
      slower(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("hello");
    });

    it("should handle empty string", () => {
      registers.setS(0, "");
      slower(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("");
    });
  });

  describe("STRIM (Trim Whitespace)", () => {
    it("should trim leading and trailing spaces", () => {
      registers.setS(0, "  Hello World  ");
      strim(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("Hello World");
    });

    it("should trim tabs and newlines", () => {
      registers.setS(0, "\t\nHello\n\t");
      strim(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("Hello");
    });

    it("should handle no whitespace", () => {
      registers.setS(0, "Hello");
      strim(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("Hello");
    });

    it("should handle all whitespace", () => {
      registers.setS(0, "   ");
      strim(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("");
    });
  });

  describe("SREV (Reverse String)", () => {
    it("should reverse string", () => {
      registers.setS(0, "Hello");
      srev(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("olleH");
    });

    it("should handle empty string", () => {
      registers.setS(0, "");
      srev(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("");
    });

    it("should handle single character", () => {
      registers.setS(0, "A");
      srev(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("A");
    });

    it("should handle palindrome", () => {
      registers.setS(0, "racecar");
      srev(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("racecar");
    });
  });

  describe("SERASE (Erase Portion)", () => {
    it("should erase from middle", () => {
      registers.setS(0, "Hello World");
      registers.setI(0, 5);
      registers.setI(1, 6);
      serase(registers, { kind: "S", index: 0 }, { kind: "I", index: 0 }, { kind: "I", index: 1 });
      expect(registers.getS(0)).toBe("Hello");
    });

    it("should erase from beginning", () => {
      registers.setS(0, "Hello World");
      registers.setI(0, 0);
      registers.setI(1, 6);
      serase(registers, { kind: "S", index: 0 }, { kind: "I", index: 0 }, { kind: "I", index: 1 });
      expect(registers.getS(0)).toBe("World");
    });

    it("should handle out of bounds", () => {
      registers.setS(0, "Hello");
      registers.setI(0, 10);
      registers.setI(1, 5);
      serase(registers, { kind: "S", index: 0 }, { kind: "I", index: 0 }, { kind: "I", index: 1 });
      expect(registers.getS(0)).toBe("Hello");
    });
  });

  describe("SPASTE (Insert String)", () => {
    it("should insert at position", () => {
      registers.setS(0, "Hello");
      registers.setS(1, " World");
      registers.setI(0, 5);
      spaste(registers, { kind: "S", index: 0 }, { kind: "S", index: 1 }, { kind: "I", index: 0 });
      expect(registers.getS(0)).toBe("Hello World");
    });

    it("should insert at beginning", () => {
      registers.setS(0, "World");
      registers.setS(1, "Hello ");
      registers.setI(0, 0);
      spaste(registers, { kind: "S", index: 0 }, { kind: "S", index: 1 }, { kind: "I", index: 0 });
      expect(registers.getS(0)).toBe("Hello World");
    });

    it("should insert in middle", () => {
      registers.setS(0, "HellWorld");
      registers.setS(1, "o ");
      registers.setI(0, 4);
      spaste(registers, { kind: "S", index: 0 }, { kind: "S", index: 1 }, { kind: "I", index: 0 });
      expect(registers.getS(0)).toBe("Hello World");
    });
  });

  describe("STOKEN (Extract Token)", () => {
    it("should extract first token", () => {
      registers.setS(0, "one,two,three");
      registers.setS(1, ",");
      registers.setI(0, 0);
      stoken(
        registers,
        { kind: "S", index: 2 },
        { kind: "S", index: 0 },
        { kind: "S", index: 1 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(2)).toBe("one");
    });

    it("should extract middle token", () => {
      registers.setS(0, "one,two,three");
      registers.setS(1, ",");
      registers.setI(0, 1);
      stoken(
        registers,
        { kind: "S", index: 2 },
        { kind: "S", index: 0 },
        { kind: "S", index: 1 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(2)).toBe("two");
    });

    it("should extract last token", () => {
      registers.setS(0, "one,two,three");
      registers.setS(1, ",");
      registers.setI(0, 2);
      stoken(
        registers,
        { kind: "S", index: 2 },
        { kind: "S", index: 0 },
        { kind: "S", index: 1 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(2)).toBe("three");
    });

    it("should return empty for out of bounds token index", () => {
      registers.setS(0, "one,two");
      registers.setS(1, ",");
      registers.setI(0, 5);
      stoken(
        registers,
        { kind: "S", index: 2 },
        { kind: "S", index: 0 },
        { kind: "S", index: 1 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(2)).toBe("");
    });

    it("should handle tab delimiter", () => {
      registers.setS(0, "one\ttwo\tthree");
      registers.setS(1, "\t");
      registers.setI(0, 1);
      stoken(
        registers,
        { kind: "S", index: 2 },
        { kind: "S", index: 0 },
        { kind: "S", index: 1 },
        { kind: "I", index: 0 }
      );
      expect(registers.getS(2)).toBe("two");
    });
  });

  describe("SCOPY (Copy String)", () => {
    it("should copy string", () => {
      registers.setS(1, "Hello");
      scopy(registers, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(registers.getS(0)).toBe("Hello");
    });

    it("should copy empty string", () => {
      registers.setS(0, "Existing");
      registers.setS(1, "");
      scopy(registers, { kind: "S", index: 0 }, { kind: "S", index: 1 });
      expect(registers.getS(0)).toBe("");
    });
  });

  describe("SCLEAR (Clear String)", () => {
    it("should clear string", () => {
      registers.setS(0, "Hello");
      sclear(registers, { kind: "S", index: 0 });
      expect(registers.getS(0)).toBe("");
    });
  });

  describe("SSET_IMM (Set Immediate)", () => {
    it("should set string to immediate value", () => {
      ssetImm(registers, { kind: "S", index: 0 }, "Hello World");
      expect(registers.getS(0)).toBe("Hello World");
    });

    it("should truncate to maxStringSize", () => {
      const regs = new RegisterSet({ maxStringSize: 5 });
      ssetImm(regs, { kind: "S", index: 0 }, "Hello World");
      expect(regs.getS(0)).toBe("Hello");
    });
  });
});
