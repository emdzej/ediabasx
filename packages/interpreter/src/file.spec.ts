import { describe, it, expect, beforeEach } from "vitest";
import { RegisterSet } from "./registers";
import {
  type FileSystem,
  freadln,
  ftell,
  ftellln,
} from "./operations/file";

const S0 = { kind: "S", index: 0 } as const;
const I0 = { kind: "I", index: 0 } as const;
const I1 = { kind: "I", index: 1 } as const;

describe("Extended file operations", () => {
  let registers: RegisterSet;

  beforeEach(() => {
    registers = new RegisterSet();
  });

  describe("freadln", () => {
    it("reads line using readLine method when available", () => {
      const fs: FileSystem = {
        open: () => 1,
        close: () => {},
        read: () => new Uint8Array(0),
        readLine: () => new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f]), // "Hello"
        write: () => 0,
        seek: () => {},
        eof: () => false,
      };
      registers.setI(0, 1); // handle

      freadln(fs, registers, S0, I0);

      expect(registers.getS(0)).toBe("Hello");
    });

    it("reads line byte-by-byte as fallback", () => {
      let pos = 0;
      const data = new Uint8Array([0x54, 0x65, 0x73, 0x74, 0x0a]); // "Test\n"
      const fs: FileSystem = {
        open: () => 1,
        close: () => {},
        read: (_h, len) => {
          if (pos >= data.length) return new Uint8Array(0);
          const result = data.subarray(pos, pos + len);
          pos += len;
          return result;
        },
        write: () => 0,
        seek: () => {},
        eof: () => pos >= data.length,
      };
      registers.setI(0, 1);

      freadln(fs, registers, S0, I0);

      expect(registers.getS(0)).toBe("Test");
    });

    it("strips CR from CRLF line endings", () => {
      let pos = 0;
      const data = new Uint8Array([0x4c, 0x69, 0x6e, 0x65, 0x0d, 0x0a]); // "Line\r\n"
      const fs: FileSystem = {
        open: () => 1,
        close: () => {},
        read: (_h, len) => {
          if (pos >= data.length) return new Uint8Array(0);
          const result = data.subarray(pos, pos + len);
          pos += len;
          return result;
        },
        write: () => 0,
        seek: () => {},
        eof: () => pos >= data.length,
      };
      registers.setI(0, 1);

      freadln(fs, registers, S0, I0);

      expect(registers.getS(0)).toBe("Line");
    });

    it("returns empty string on EOF", () => {
      const fs: FileSystem = {
        open: () => 1,
        close: () => {},
        read: () => new Uint8Array(0),
        readLine: () => null,
        write: () => 0,
        seek: () => {},
        eof: () => true,
      };
      registers.setI(0, 1);
      registers.setS(0, "previous");

      freadln(fs, registers, S0, I0);

      expect(registers.getS(0)).toBe("");
      // Empty result must be true length-0 (C# `SetArrayData(byte[0])`);
      // the previous string path would have appended a NUL → length 1.
      expect(registers.getSBinary(0).length).toBe(0);
    });

    it("preserves byte length when the line ends in a non-zero byte", () => {
      // Mirrors C# `OpFreadln` → `SetArrayData(Encoding.GetBytes(line))`.
      // The previous `setStringValue` path appended a NUL whenever the
      // last byte wasn't `0x00`, growing length by 1 — that breaks any
      // BEST2 job that `slen` / `scmp`s an `freadln` result.
      const fs: FileSystem = {
        open: () => 1,
        close: () => {},
        read: () => new Uint8Array(0),
        readLine: () => new Uint8Array([0x48, 0x69, 0x21]), // "Hi!"
        write: () => 0,
        seek: () => {},
        eof: () => false,
      };
      registers.setI(0, 1);

      freadln(fs, registers, S0, I0);

      expect(registers.getSBinary(0).length).toBe(3);
    });
  });

  describe("ftell", () => {
    it("returns file position using tell method", () => {
      const fs: FileSystem = {
        open: () => 1,
        close: () => {},
        read: () => new Uint8Array(0),
        write: () => 0,
        seek: () => {},
        tell: () => 42,
        eof: () => false,
      };
      registers.setI(0, 1); // handle

      ftell(fs, registers, I1, I0);

      expect(registers.getI(1)).toBe(42);
    });

    it("returns 0 when tell not implemented", () => {
      const fs: FileSystem = {
        open: () => 1,
        close: () => {},
        read: () => new Uint8Array(0),
        write: () => 0,
        seek: () => {},
        eof: () => false,
      };
      registers.setI(0, 1);

      ftell(fs, registers, I1, I0);

      expect(registers.getI(1)).toBe(0);
    });
  });

  describe("ftellln", () => {
    it("returns line number using tellLine method", () => {
      const fs: FileSystem = {
        open: () => 1,
        close: () => {},
        read: () => new Uint8Array(0),
        write: () => 0,
        seek: () => {},
        tellLine: () => 10,
        eof: () => false,
      };
      registers.setI(0, 1);

      ftellln(fs, registers, I1, I0);

      expect(registers.getI(1)).toBe(10);
    });

    it("returns 0 when tellLine not implemented", () => {
      const fs: FileSystem = {
        open: () => 1,
        close: () => {},
        read: () => new Uint8Array(0),
        write: () => 0,
        seek: () => {},
        eof: () => false,
      };
      registers.setI(0, 1);

      ftellln(fs, registers, I1, I0);

      expect(registers.getI(1)).toBe(0);
    });
  });
});
