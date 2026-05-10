import { describe, expect, it } from "vitest";
import { disassemble, disassembleJob, formatInstructionSimple } from "../disassembler";

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

describe("disassembleJob", () => {
  // Helper: build a raw file buffer with an XOR-encoded job at the given offset.
  // The job body contains an early-return `eoj` followed by more instructions
  // (a `nop` and a final `eoj`) — the pattern we hit on real PRGs where a
  // status check exits early via `eoj` while the remaining bytecode is
  // reached via backward jumps from later in the file.
  function buildBuffer(jobOffset: number, body: number[]): Uint8Array {
    const buffer = new Uint8Array(jobOffset + body.length);
    for (let i = 0; i < body.length; i++) {
      buffer[jobOffset + i] = body[i] ^ XOR_KEY;
    }
    return buffer;
  }

  // eoj/None=0x1D 0x00, nop/None=0x1C 0x00
  const EARLY_EOJ_THEN_NOP_EOJ = [0x1d, 0x00, 0x1c, 0x00, 0x1d, 0x00];

  it("stops at the first eoj by default (legacy behaviour)", () => {
    const buffer = buildBuffer(0x10, EARLY_EOJ_THEN_NOP_EOJ);
    const instructions = disassembleJob(buffer, 0x10);
    expect(instructions.map((i) => i.mnemonic)).toEqual(["eoj"]);
  });

  it("continues past eoj when bounded by endOffset", () => {
    const buffer = buildBuffer(0x10, EARLY_EOJ_THEN_NOP_EOJ);
    const instructions = disassembleJob(buffer, 0x10, { endOffset: 0x10 + EARLY_EOJ_THEN_NOP_EOJ.length });
    expect(instructions.map((i) => i.mnemonic)).toEqual(["eoj", "nop", "eoj"]);
  });

  it("respects endOffset as a hard upper bound", () => {
    const buffer = buildBuffer(0x10, EARLY_EOJ_THEN_NOP_EOJ);
    // Stop right after the early eoj (2 bytes in).
    const instructions = disassembleJob(buffer, 0x10, { endOffset: 0x10 + 2 });
    expect(instructions.map((i) => i.mnemonic)).toEqual(["eoj"]);
  });
});
