import { cp1252ToUtf8 } from "@ediabasx/core";
import type { Instruction } from "./types";

type OpcodeDefinition = {
  mnemonic: string;
  arg0IsNearAddress?: boolean;
};

const OpAddrModes = {
  NONE: 0,
  REG_S: 1,
  REG_AB: 2,
  REG_I: 3,
  REG_L: 4,
  IMM8: 5,
  IMM16: 6,
  IMM32: 7,
  IMM_STR: 8,
  IDX_IMM: 9,
  IDX_REG: 10,
  IDX_REG_IMM: 11,
  IDX_IMM_LEN_IMM: 12,
  IDX_IMM_LEN_REG: 13,
  IDX_REG_LEN_IMM: 14,
  IDX_REG_LEN_REG: 15,
} as const;

type OpAddrMode = (typeof OpAddrModes)[keyof typeof OpAddrModes];

const REGISTER_NAMES = new Map<number, string>([
  [0x00, "B0"],
  [0x01, "B1"],
  [0x02, "B2"],
  [0x03, "B3"],
  [0x04, "B4"],
  [0x05, "B5"],
  [0x06, "B6"],
  [0x07, "B7"],
  [0x08, "B8"],
  [0x09, "B9"],
  [0x0a, "BA"],
  [0x0b, "BB"],
  [0x0c, "BC"],
  [0x0d, "BD"],
  [0x0e, "BE"],
  [0x0f, "BF"],
  [0x10, "I0"],
  [0x11, "I1"],
  [0x12, "I2"],
  [0x13, "I3"],
  [0x14, "I4"],
  [0x15, "I5"],
  [0x16, "I6"],
  [0x17, "I7"],
  [0x18, "L0"],
  [0x19, "L1"],
  [0x1a, "L2"],
  [0x1b, "L3"],
  [0x1c, "S0"],
  [0x1d, "S1"],
  [0x1e, "S2"],
  [0x1f, "S3"],
  [0x20, "S4"],
  [0x21, "S5"],
  [0x22, "S6"],
  [0x23, "S7"],
  [0x24, "F0"],
  [0x25, "F1"],
  [0x26, "F2"],
  [0x27, "F3"],
  [0x28, "F4"],
  [0x29, "F5"],
  [0x2a, "F6"],
  [0x2b, "F7"],
  [0x2c, "S8"],
  [0x2d, "S9"],
  [0x2e, "SA"],
  [0x2f, "SB"],
  [0x30, "SC"],
  [0x31, "SD"],
  [0x32, "SE"],
  [0x33, "SF"],
  [0x80, "A0"],
  [0x81, "A1"],
  [0x82, "A2"],
  [0x83, "A3"],
  [0x84, "A4"],
  [0x85, "A5"],
  [0x86, "A6"],
  [0x87, "A7"],
  [0x88, "A8"],
  [0x89, "A9"],
  [0x8a, "AA"],
  [0x8b, "AB"],
  [0x8c, "AC"],
  [0x8d, "AD"],
  [0x8e, "AE"],
  [0x8f, "AF"],
  [0x90, "I8"],
  [0x91, "I9"],
  [0x92, "IA"],
  [0x93, "IB"],
  [0x94, "IC"],
  [0x95, "ID"],
  [0x96, "IE"],
  [0x97, "IF"],
  [0x98, "L4"],
  [0x99, "L5"],
  [0x9a, "L6"],
  [0x9b, "L7"],
]);

const OPCODES = new Map<number, OpcodeDefinition>([
  [0x00, { mnemonic: "move" }],
  [0x01, { mnemonic: "clear" }],
  [0x02, { mnemonic: "comp" }],
  [0x03, { mnemonic: "subb" }],
  [0x04, { mnemonic: "adds" }],
  [0x05, { mnemonic: "mult" }],
  [0x06, { mnemonic: "divs" }],
  [0x07, { mnemonic: "and" }],
  [0x08, { mnemonic: "or" }],
  [0x09, { mnemonic: "xor" }],
  [0x0a, { mnemonic: "not" }],
  [0x0b, { mnemonic: "jump", arg0IsNearAddress: true }],
  [0x0c, { mnemonic: "jtsr", arg0IsNearAddress: true }],
  [0x0d, { mnemonic: "ret" }],
  [0x0e, { mnemonic: "jc", arg0IsNearAddress: true }],
  [0x0f, { mnemonic: "jae", arg0IsNearAddress: true }],
  [0x10, { mnemonic: "jz", arg0IsNearAddress: true }],
  [0x11, { mnemonic: "jnz", arg0IsNearAddress: true }],
  [0x12, { mnemonic: "jv", arg0IsNearAddress: true }],
  [0x13, { mnemonic: "jnv", arg0IsNearAddress: true }],
  [0x14, { mnemonic: "jmi", arg0IsNearAddress: true }],
  [0x15, { mnemonic: "jpl", arg0IsNearAddress: true }],
  [0x16, { mnemonic: "clrc" }],
  [0x17, { mnemonic: "setc" }],
  [0x18, { mnemonic: "asr" }],
  [0x19, { mnemonic: "lsl" }],
  [0x1a, { mnemonic: "lsr" }],
  [0x1b, { mnemonic: "asl" }],
  [0x1c, { mnemonic: "nop" }],
  [0x1d, { mnemonic: "eoj" }],
  [0x1e, { mnemonic: "push" }],
  [0x1f, { mnemonic: "pop" }],
  [0x20, { mnemonic: "scmp" }],
  [0x21, { mnemonic: "scat" }],
  [0x22, { mnemonic: "scut" }],
  [0x23, { mnemonic: "slen" }],
  [0x24, { mnemonic: "spaste" }],
  [0x25, { mnemonic: "serase" }],
  [0x26, { mnemonic: "xconnect" }],
  [0x27, { mnemonic: "xhangup" }],
  [0x28, { mnemonic: "xsetpar" }],
  [0x29, { mnemonic: "xawlen" }],
  [0x2a, { mnemonic: "xsend" }],
  [0x2b, { mnemonic: "xsendf" }],
  [0x2c, { mnemonic: "xrequf" }],
  [0x2d, { mnemonic: "xstopf" }],
  [0x2e, { mnemonic: "xkeyb" }],
  [0x2f, { mnemonic: "xstate" }],
  [0x30, { mnemonic: "xboot" }],
  [0x31, { mnemonic: "xreset" }],
  [0x32, { mnemonic: "xtype" }],
  [0x33, { mnemonic: "xvers" }],
  [0x34, { mnemonic: "ergb" }],
  [0x35, { mnemonic: "ergw" }],
  [0x36, { mnemonic: "ergd" }],
  [0x37, { mnemonic: "ergi" }],
  [0x38, { mnemonic: "ergr" }],
  [0x39, { mnemonic: "ergs" }],
  [0x3a, { mnemonic: "a2flt" }],
  [0x3b, { mnemonic: "fadd" }],
  [0x3c, { mnemonic: "fsub" }],
  [0x3d, { mnemonic: "fmul" }],
  [0x3e, { mnemonic: "fdiv" }],
  [0x3f, { mnemonic: "ergy" }],
  [0x40, { mnemonic: "enewset" }],
  [0x41, { mnemonic: "etag", arg0IsNearAddress: true }],
  [0x42, { mnemonic: "xreps" }],
  [0x43, { mnemonic: "gettmr" }],
  [0x44, { mnemonic: "settmr" }],
  [0x45, { mnemonic: "sett" }],
  [0x46, { mnemonic: "clrt" }],
  [0x47, { mnemonic: "jt", arg0IsNearAddress: true }],
  [0x48, { mnemonic: "jnt", arg0IsNearAddress: true }],
  [0x49, { mnemonic: "addc" }],
  [0x4a, { mnemonic: "subc" }],
  [0x4b, { mnemonic: "break" }],
  [0x4c, { mnemonic: "clrv" }],
  [0x4d, { mnemonic: "eerr" }],
  [0x4e, { mnemonic: "popf" }],
  [0x4f, { mnemonic: "pushf" }],
  [0x50, { mnemonic: "atsp" }],
  [0x51, { mnemonic: "swap" }],
  [0x52, { mnemonic: "setspc" }],
  [0x53, { mnemonic: "srevrs" }],
  [0x54, { mnemonic: "stoken" }],
  [0x55, { mnemonic: "parb" }],
  [0x56, { mnemonic: "parw" }],
  [0x57, { mnemonic: "parl" }],
  [0x58, { mnemonic: "pars" }],
  [0x59, { mnemonic: "fclose" }],
  [0x5a, { mnemonic: "jg", arg0IsNearAddress: true }],
  [0x5b, { mnemonic: "jge", arg0IsNearAddress: true }],
  [0x5c, { mnemonic: "jl", arg0IsNearAddress: true }],
  [0x5d, { mnemonic: "jle", arg0IsNearAddress: true }],
  [0x5e, { mnemonic: "ja", arg0IsNearAddress: true }],
  [0x5f, { mnemonic: "jbe", arg0IsNearAddress: true }],
  [0x60, { mnemonic: "fopen" }],
  [0x61, { mnemonic: "fread" }],
  [0x62, { mnemonic: "freadln" }],
  [0x63, { mnemonic: "fseek" }],
  [0x64, { mnemonic: "fseekln" }],
  [0x65, { mnemonic: "ftell" }],
  [0x66, { mnemonic: "ftellln" }],
  [0x67, { mnemonic: "a2fix" }],
  [0x68, { mnemonic: "fix2flt" }],
  [0x69, { mnemonic: "parr" }],
  [0x6a, { mnemonic: "test" }],
  [0x6b, { mnemonic: "wait" }],
  [0x6c, { mnemonic: "date" }],
  [0x6d, { mnemonic: "time" }],
  [0x6e, { mnemonic: "xbatt" }],
  [0x6f, { mnemonic: "tosp" }],
  [0x70, { mnemonic: "xdownl" }],
  [0x71, { mnemonic: "xgetport" }],
  [0x72, { mnemonic: "xignit" }],
  [0x73, { mnemonic: "xloopt" }],
  [0x74, { mnemonic: "xprog" }],
  [0x75, { mnemonic: "xraw" }],
  [0x76, { mnemonic: "xsetport" }],
  [0x77, { mnemonic: "xsireset" }],
  [0x78, { mnemonic: "xstoptr" }],
  [0x79, { mnemonic: "fix2hex" }],
  [0x7a, { mnemonic: "fix2dez" }],
  [0x7b, { mnemonic: "tabset" }],
  [0x7c, { mnemonic: "tabseek" }],
  [0x7d, { mnemonic: "tabget" }],
  [0x7e, { mnemonic: "strcat" }],
  [0x7f, { mnemonic: "pary" }],
  [0x80, { mnemonic: "parn" }],
  [0x81, { mnemonic: "ergc" }],
  [0x82, { mnemonic: "ergl" }],
  [0x83, { mnemonic: "tabline" }],
  [0x84, { mnemonic: "xsendr" }],
  [0x85, { mnemonic: "xrecv" }],
  [0x86, { mnemonic: "xinfo" }],
  [0x87, { mnemonic: "flt2a" }],
  [0x88, { mnemonic: "setflt" }],
  [0x89, { mnemonic: "cfgig" }],
  [0x8a, { mnemonic: "cfgsg" }],
  [0x8b, { mnemonic: "cfgis" }],
  [0x8c, { mnemonic: "a2y" }],
  [0x8d, { mnemonic: "xparraw" }],
  [0x8e, { mnemonic: "hex2y" }],
  [0x8f, { mnemonic: "strcmp" }],
  [0x90, { mnemonic: "strlen" }],
  [0x91, { mnemonic: "y2bcd" }],
  [0x92, { mnemonic: "y2hex" }],
  [0x93, { mnemonic: "shmset" }],
  [0x94, { mnemonic: "shmget" }],
  [0x95, { mnemonic: "ergsysi" }],
  [0x96, { mnemonic: "flt2fix" }],
  [0x97, { mnemonic: "iupdate" }],
  [0x98, { mnemonic: "irange" }],
  [0x99, { mnemonic: "iincpos" }],
  [0x9a, { mnemonic: "tabseeku" }],
  [0x9b, { mnemonic: "flt2y4" }],
  [0x9c, { mnemonic: "flt2y8" }],
  [0x9d, { mnemonic: "y42flt" }],
  [0x9e, { mnemonic: "y82flt" }],
  [0x9f, { mnemonic: "plink" }],
  [0xa0, { mnemonic: "pcall" }],
  [0xa1, { mnemonic: "fcomp" }],
  [0xa2, { mnemonic: "plinkv" }],
  [0xa3, { mnemonic: "ppush" }],
  [0xa4, { mnemonic: "ppop" }],
  [0xa5, { mnemonic: "ppushflt" }],
  [0xa6, { mnemonic: "ppopflt" }],
  [0xa7, { mnemonic: "ppushy" }],
  [0xa8, { mnemonic: "ppopy" }],
  [0xa9, { mnemonic: "pjtsr" }],
  [0xaa, { mnemonic: "tabsetex" }],
  [0xab, { mnemonic: "ufix2dez" }],
  [0xac, { mnemonic: "generr" }],
  [0xad, { mnemonic: "ticks" }],
  [0xae, { mnemonic: "waitex" }],
  [0xaf, { mnemonic: "xopen" }],
  [0xb0, { mnemonic: "xclose" }],
  [0xb1, { mnemonic: "xcloseex" }],
  [0xb2, { mnemonic: "xswitch" }],
  [0xb3, { mnemonic: "xsendex" }],
  [0xb4, { mnemonic: "xrecvex" }],
  [0xb5, { mnemonic: "ssize" }],
  [0xb6, { mnemonic: "tabcols" }],
  [0xb7, { mnemonic: "tabrows" }],
]);

type OperandResult = {
  text: string | null;
  value?: number;
};

function isPrintable(byte: number): boolean {
  return byte === 9 || byte === 10 || byte === 13 || (byte >= 32 && byte < 127);
}

function readInt16(view: DataView, offset: number): number {
  return view.getInt16(offset, true);
}

function readInt32(view: DataView, offset: number): number {
  return view.getInt32(offset, true);
}

function maybeXorDecode(code: Uint8Array): Uint8Array {
  if (code.length === 0) return code;
  const firstOpcode = code[0];
  if (OPCODES.has(firstOpcode)) return code;
  const decodedFirst = firstOpcode ^ 0xf7;
  if (!OPCODES.has(decodedFirst)) return code;
  const decoded = new Uint8Array(code.length);
  for (let i = 0; i < code.length; i += 1) {
    decoded[i] = code[i] ^ 0xf7;
  }
  return decoded;
}

function readRegister(byte: number): string {
  return REGISTER_NAMES.get(byte) ?? `R${byte.toString(16).toUpperCase().padStart(2, "0")}`;
}

function readOperand(code: Uint8Array, view: DataView, offset: number, mode: OpAddrMode): { result: OperandResult; nextOffset: number } {
  switch (mode) {
    case OpAddrModes.NONE:
      return { result: { text: null }, nextOffset: offset };
    case OpAddrModes.REG_S:
    case OpAddrModes.REG_AB:
    case OpAddrModes.REG_I:
    case OpAddrModes.REG_L: {
      const reg = readRegister(code[offset]);
      return { result: { text: reg }, nextOffset: offset + 1 };
    }
    case OpAddrModes.IMM8: {
      const byte = code[offset];
      if (isPrintable(byte)) {
        let value = String.fromCharCode(byte);
        if (byte === 9) value = "\\t";
        if (byte === 10) value = "\\n";
        if (byte === 13) value = "\\r";
        return { result: { text: `#'${value}'` }, nextOffset: offset + 1 };
      }
      return { result: { text: `#$${byte.toString(16).toUpperCase()}.B` }, nextOffset: offset + 1 };
    }
    case OpAddrModes.IMM16: {
      const value = readInt16(view, offset);
      return { result: { text: `#$${value.toString(16).toUpperCase()}.I` }, nextOffset: offset + 2 };
    }
    case OpAddrModes.IMM32: {
      const value = readInt32(view, offset);
      return { result: { text: `#$${value.toString(16).toUpperCase()}.L`, value }, nextOffset: offset + 4 };
    }
    case OpAddrModes.IMM_STR: {
      const length = readInt16(view, offset);
      const start = offset + 2;
      const bytes = code.slice(start, start + length);
      const printable = bytes.length > 0 && bytes.slice(0, -1).every((b) => isPrintable(b));
      if (printable && bytes[bytes.length - 1] === 0) {
        const text = cp1252ToUtf8(bytes.slice(0, -1));
        return { result: { text: `"${text}"` }, nextOffset: start + length };
      }
      const parts = Array.from(bytes).map((b) => `$${b.toString(16).toUpperCase().padStart(2, "0")}.B`);
      return { result: { text: `{${parts.join(",")}}` }, nextOffset: start + length };
    }
    case OpAddrModes.IDX_IMM: {
      const reg = readRegister(code[offset]);
      const idx = readInt16(view, offset + 1);
      return { result: { text: `${reg}[#$${idx.toString(16).toUpperCase()}]` }, nextOffset: offset + 3 };
    }
    case OpAddrModes.IDX_REG: {
      const reg0 = readRegister(code[offset]);
      const reg1 = readRegister(code[offset + 1]);
      return { result: { text: `${reg0}[${reg1}]` }, nextOffset: offset + 2 };
    }
    case OpAddrModes.IDX_REG_IMM: {
      const reg0 = readRegister(code[offset]);
      const reg1 = readRegister(code[offset + 1]);
      const inc = readInt16(view, offset + 2);
      return { result: { text: `${reg0}[${reg1},#$${inc.toString(16).toUpperCase()}]` }, nextOffset: offset + 4 };
    }
    case OpAddrModes.IDX_IMM_LEN_IMM: {
      const reg = readRegister(code[offset]);
      const idx = readInt16(view, offset + 1);
      const len = readInt16(view, offset + 3);
      return { result: { text: `${reg}[#$${idx.toString(16).toUpperCase()}]#$${len.toString(16).toUpperCase()}` }, nextOffset: offset + 5 };
    }
    case OpAddrModes.IDX_IMM_LEN_REG: {
      const reg = readRegister(code[offset]);
      const idx = readInt16(view, offset + 1);
      const lenReg = readRegister(code[offset + 3]);
      return { result: { text: `${reg}[#$${idx.toString(16).toUpperCase()}]${lenReg}` }, nextOffset: offset + 4 };
    }
    case OpAddrModes.IDX_REG_LEN_IMM: {
      const reg = readRegister(code[offset]);
      const idxReg = readRegister(code[offset + 1]);
      const len = readInt16(view, offset + 2);
      return { result: { text: `${reg}[${idxReg}]#$${len.toString(16).toUpperCase()}` }, nextOffset: offset + 4 };
    }
    case OpAddrModes.IDX_REG_LEN_REG: {
      const reg = readRegister(code[offset]);
      const idxReg = readRegister(code[offset + 1]);
      const lenReg = readRegister(code[offset + 2]);
      return { result: { text: `${reg}[${idxReg}]${lenReg}` }, nextOffset: offset + 3 };
    }
    default:
      return { result: { text: null }, nextOffset: offset };
  }
}

export function disassemble(code: Uint8Array): Instruction[] {
  const decoded = maybeXorDecode(code);
  const view = new DataView(decoded.buffer, decoded.byteOffset, decoded.byteLength);
  const instructions: Instruction[] = [];
  let offset = 0;

  while (offset + 1 < decoded.length) {
    const startOffset = offset;
    const opcode = decoded[offset];
    const addrMode = decoded[offset + 1];
    offset += 2;

    const opInfo = OPCODES.get(opcode);
    const arg0Mode = (addrMode & 0xf0) >> 4;
    const arg1Mode = addrMode & 0x0f;

    const arg0 = readOperand(decoded, view, offset, arg0Mode as OpAddrMode);
    offset = arg0.nextOffset;
    const arg1 = readOperand(decoded, view, offset, arg1Mode as OpAddrMode);
    offset = arg1.nextOffset;

    let arg0Text = arg0.result.text;
    if (opInfo?.arg0IsNearAddress && arg0Mode === OpAddrModes.IMM32 && typeof arg0.result.value === "number") {
      const labelOffset = offset + arg0.result.value;
      arg0Text = `__${labelOffset.toString(16).toUpperCase().padStart(8, "0")}`;
    }

    const operands = [arg0Text, arg1.result.text].filter((value): value is string => Boolean(value));
    instructions.push({
      offset: startOffset,
      opcode,
      mnemonic: opInfo?.mnemonic ?? `op_${opcode.toString(16).toUpperCase().padStart(2, "0")}`,
      operands,
    });
  }

  return instructions;
}

export function formatInstruction(instr: Instruction): string {
  if (instr.operands.length === 0) {
    return instr.mnemonic;
  }
  return `${instr.mnemonic} ${instr.operands.join(",")}`;
}

/**
 * Disassemble bytecode for a specific job directly from the file buffer.
 * This handles the case where code is embedded in the file at job offsets.
 * 
 * @param buffer - The raw file buffer (NOT XOR decoded)
 * @param jobOffset - The offset where job bytecode starts
 * @param maxInstructions - Maximum number of instructions to disassemble (default 1000)
 */
export function disassembleJob(
  buffer: Uint8Array,
  jobOffset: number,
  maxInstructions = 1000
): Instruction[] {
  if (jobOffset < 0 || jobOffset >= buffer.length) {
    return [];
  }

  // Create a slice from job offset to end of buffer
  const codeSlice = buffer.slice(jobOffset);
  
  // XOR decode the slice
  const decoded = new Uint8Array(codeSlice.length);
  for (let i = 0; i < codeSlice.length; i++) {
    decoded[i] = codeSlice[i] ^ 0xf7;
  }

  const view = new DataView(decoded.buffer, decoded.byteOffset, decoded.byteLength);
  const instructions: Instruction[] = [];
  let offset = 0;

  while (offset + 1 < decoded.length && instructions.length < maxInstructions) {
    const startOffset = jobOffset + offset; // Use absolute offset in file
    const opcode = decoded[offset];
    const addrMode = decoded[offset + 1];
    offset += 2;

    const opInfo = OPCODES.get(opcode);
    
    // If unknown opcode, stop disassembly (likely hit data or next job)
    if (!opInfo) {
      break;
    }

    const arg0Mode = (addrMode & 0xf0) >> 4;
    const arg1Mode = addrMode & 0x0f;

    const arg0 = readOperand(decoded, view, offset, arg0Mode as OpAddrMode);
    offset = arg0.nextOffset;
    const arg1 = readOperand(decoded, view, offset, arg1Mode as OpAddrMode);
    offset = arg1.nextOffset;

    let arg0Text = arg0.result.text;
    if (opInfo.arg0IsNearAddress && arg0Mode === OpAddrModes.IMM32 && typeof arg0.result.value === "number") {
      const labelOffset = jobOffset + offset + arg0.result.value;
      arg0Text = `__${labelOffset.toString(16).toUpperCase().padStart(8, "0")}`;
    }

    const operands = [arg0Text, arg1.result.text].filter((value): value is string => Boolean(value));
    instructions.push({
      offset: startOffset,
      opcode,
      mnemonic: opInfo.mnemonic,
      operands,
    });

    // Stop at end of job
    if (opInfo.mnemonic === "eoj") {
      break;
    }
  }

  return instructions;
}
