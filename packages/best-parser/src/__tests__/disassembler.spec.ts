import { describe, expect, it } from "vitest";
import { disassemble, formatInstructionSimple } from "../disassembler";

const XOR_KEY = 0xf7;

describe("disassemble", () => {
  it("decodes registers and relative jump", () => {
    const code = Uint8Array.from([
      0x00,
      0x11,
      0x00,
      0x01,
      0x0b,
      0x70,
      0x04,
      0x00,
      0x00,
      0x00,
    ]);

    const instructions = disassemble(code);

    expect(instructions).toHaveLength(2);
    expect(instructions[0]).toMatchObject({
      offset: 0,
      opcode: 0x00,
      mnemonic: "move",
      operands: ["B0", "B1"],
    });

    expect(instructions[1].offset).toBe(4);
    expect(formatInstructionSimple(instructions[1])).toBe("jump __0000000E");
  });

  it("detects XOR-encoded bytecode", () => {
    const code = Uint8Array.from([
      0x00,
      0x15,
      0x00,
      0x41,
    ]).map((byte) => byte ^ XOR_KEY);

    const instructions = disassemble(code);

    expect(instructions).toHaveLength(1);
    expect(formatInstructionSimple(instructions[0])).toBe("move B0,#'A'");
  });
});
