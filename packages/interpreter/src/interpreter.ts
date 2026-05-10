import { cp1252ToUtf8, utf8ToCp1252, EdiabasError, EdiabasErrorCodes, type EdiabasErrorCode } from "@emdzej/ediabasx-core";
import type { PrgFile, PrgJob } from "@emdzej/ediabasx-best-parser";
import { RegisterSet } from "./registers";
import { Flags } from "./flags";
import { CallStack } from "./callstack";
import { DataStack } from "./stack";
// Arithmetic ops are inlined via the polymorphic `arithmeticReadModifyWrite`
// helper below so register / indexed / immediate destinations all work; the
// standalone exports in ./operations/arithmetic are kept for external consumers.
import { clear } from "./operations/arithmetic";
import {
  type ExecutionState,
  jmp,
  jc,
  jnc,
  jz,
  jnz,
  ja,
  jna,
  jl,
  jnl,
  jg,
  jng,
  jv,
  jnv,
  jmi,
  jpl,
  call,
  ret,
  jt,
  jnt,
} from "./operations/control-flow";
import { clrc, setc, clrv } from "./operations/flags";
import { pop, push, pushf, popf, atsp, swap } from "./operations/stack";
// String operations are inlined via polymorphic helpers in this file.
// The standalone functions remain exported for external consumers.
import {
  fadd,
  fsub,
  fmul,
  fdiv,
  fcomp,
  flt2a,
} from "./operations/float";
import {
  type JobResult,
  ResultCollector,
  ergb,
  ergw,
  ergd,
  ergi,
  ergs,
  ergy,
  ergc,
  ergl,
} from "./operations/result";
import { ParameterSet, parb, parw, parl, pars, parr, pary, parn } from "./operations/parameters";
import {
  type TimeValueRef,
  type DateTimeDestination,
  Timer,
  gettmr,
  settmr,
  getdate,
  gettime,
  wait,
  sett,
  clrt,
  eerr,
} from "./operations/time";
import { SharedMemory, shmset, shmget } from "./operations/shared-memory";
import {
  type CommunicationInterface,
  xconnect,
  xhangup,
  xsetparBytes,
  xawlenBytes,
  xsendRaw,
  xstopf,
  xkeyb,
  xstate,
  xboot,
  xreset,
  xtype,
  xvers,
  xgetport,
  xignit,
  xloopt,
  xprog,
  xraw,
  xsireset,
  xbatt,
} from "./operations/communication";
import {
  type FileSystem,
  fopenString,
  fcloseValue,
  freadHandle,
  freadlnHandle,
  fseekHandle,
  fseeklnHandle,
  ftellHandle,
  ftelllnHandle,
} from "./operations/file";
import {
  type ProcedureHandler,
  ProcedureRegistry,
  ProcedureStack,
  plink,
} from "./operations/procedures";
import {
  type TableState,
  createTableRegistry,
  tabset as tabsetOp,
  tabseek as tabseekOp,
  tabseeku as tabseekuOp,
  tabget as tabgetOp,
  tabline as tablineOp,
  tabrows as tabrowsOp,
  tabcols as tabcolsOp,
} from "./operations/table";
import { TrapBitDict } from "./trap-bits";
import type { FloatRegisterRef, IntRegisterRef, StringRegisterRef } from "./operations/register-refs";
import { getBinaryValue, getFloatValue, getIntValue, getStringValue, setBinaryValue, setFloatValue, setIntValue, setStringValue } from "./operations/register-values";

const EDIABAS_MAGIC = "@EDIABAS OBJECT";
const EDIABAS_DATA_OFFSET = 0xa0;
const EDIABAS_XOR_KEY = 0xf7;

// Array buffer limits (mirror EdiabasNet ArrayMaxBufSize / ArrayMaxSize defaults).
// EdiabasNet sets _arrayMaxBufSize=1024 by default; ArrayMaxSize = ArrayMaxBufSize - 1.
const ARRAY_MAX_BUF_SIZE = 1024;
const ARRAY_MAX_SIZE = ARRAY_MAX_BUF_SIZE - 1;

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

type RegisterOperand = {
  kind: "register";
  ref: IntRegisterRef | StringRegisterRef | FloatRegisterRef;
};

type ImmediateOperand = {
  kind: "immediate";
  value: number;
  width?: 1 | 2 | 4;
};

type StringOperand = {
  kind: "string";
  value: string;
  raw: Uint8Array;
};

type IndexedOperand = {
  kind: "indexed";
  base: StringRegisterRef;
  index: ImmediateOperand | RegisterOperand;
  length?: ImmediateOperand | RegisterOperand;
  offset?: ImmediateOperand;
};

type Operand =
  | { kind: "none" }
  | RegisterOperand
  | ImmediateOperand
  | StringOperand
  | IndexedOperand;

type DecodeResult = {
  operand: Operand;
  nextOffset: number;
};

type InterpreterState = {
  pc: number;
  halted: boolean;
  registers: RegisterSet;
  flags: Flags;
  callStack: CallStack;
  dataStack: DataStack;
  parameters: ParameterSet;
  results: ResultCollector;
  sharedMemory: SharedMemory;
  config: Map<string, string>;
  timer: Timer;
  errorTrapMask: number;
  errorTrapBitNr: number;
  tokenSeparator: string;
  tokenIndex: number;
  floatPrecision: number;
  tableState: TableState;
  communicationInterface?: CommunicationInterface;
  fileSystem?: FileSystem;
  procedureRegistry: ProcedureRegistry;
  procedureStack: ProcedureStack;
  procedureLinker?: (id: number) => ProcedureHandler | undefined;
  // Progress reporting
  progressText: string;
  progressRange: number;
  progressPos: number;
  // System init request flag (set by ergsysi)
  requestInit: boolean;
  // Results filter (for etag)
  resultsRequest: Set<string>;
  // Job status string captured by eoj.
  jobStatus: string;
  // Archive of result sets emitted by enewset.
  resultSetsTemp: JobResult[][];
  // Separate system-results dictionary (ergsysi target).
  systemResults: ResultCollector;
};

export type ExecutionOptions = {
  registers?: RegisterSet;
  flags?: Flags;
  callStack?: CallStack;
  dataStack?: DataStack;
  parameters?: ParameterSet;
  results?: ResultCollector;
  sharedMemory?: SharedMemory;
  config?: Map<string, string>;
  timer?: Timer;
  tableState?: TableState;
  communicationInterface?: CommunicationInterface;
  fileSystem?: FileSystem;
  procedureRegistry?: ProcedureRegistry;
  procedureStack?: ProcedureStack;
  procedureLinker?: (id: number) => ProcedureHandler | undefined;
  /** Loads a table registry from an external file (used by tabsetex). */
  tableLoader?: (baseFileName: string) => ReturnType<typeof createTableRegistry> | undefined;
  /** Set of requested result names (uppercase). If set, etag will skip results not in this set. */
  resultsRequest?: Set<string>;
};

export type InterpreterSnapshot = {
  pc: number;
  halted: boolean;
  registers: ReturnType<RegisterSet["snapshot"]>;
  flags: ReturnType<Flags["snapshot"]>;
  callStack: number[];
  dataStack: number[];
  progressText: string;
  progressRange: number;
  progressPos: number;
  errorTrapBitNr: number;
};

function readInt16(view: DataView, offset: number): number {
  return view.getInt16(offset, true);
}

function readInt32(view: DataView, offset: number): number {
  return view.getInt32(offset, true);
}


function normalizeConfigMap(input?: Map<string, string>): Map<string, string> {
  if (!input) {
    return new Map();
  }
  const normalized = new Map<string, string>();
  for (const [key, value] of input.entries()) {
    normalized.set(key.toUpperCase(), value);
  }
  return normalized;
}

function decodeRegister(byte: number): IntRegisterRef | StringRegisterRef | FloatRegisterRef {
  if (byte >= 0x00 && byte <= 0x0f) {
    return { kind: "B", index: byte };
  }
  if (byte >= 0x10 && byte <= 0x17) {
    return { kind: "I", index: byte - 0x10 };
  }
  if (byte >= 0x18 && byte <= 0x1b) {
    return { kind: "L", index: byte - 0x18 };
  }
  if (byte >= 0x1c && byte <= 0x23) {
    return { kind: "S", index: byte - 0x1c };
  }
  if (byte >= 0x24 && byte <= 0x2b) {
    return { kind: "F", index: byte - 0x24 };
  }
  if (byte >= 0x2c && byte <= 0x33) {
    return { kind: "S", index: byte - 0x2c + 8 };
  }
  if (byte >= 0x80 && byte <= 0x8f) {
    return { kind: "A", index: byte - 0x80 };
  }
  if (byte >= 0x90 && byte <= 0x97) {
    return { kind: "I", index: byte - 0x90 + 8 };
  }
  if (byte >= 0x98 && byte <= 0x9b) {
    return { kind: "L", index: byte - 0x98 + 4 };
  }
  throw new EdiabasError(
    EdiabasErrorCodes.REGISTER_ERROR,
    `Unknown register opcode 0x${byte.toString(16).toUpperCase()}`
  );
}

function requireRegister(operand: Operand): RegisterOperand {
  if (operand.kind !== "register") {
    throw new EdiabasError(
      EdiabasErrorCodes.INVALID_INSTRUCTION,
      "Expected register operand"
    );
  }
  return operand;
}

function requireAnyRegister(operand: Operand): IntRegisterRef | StringRegisterRef | FloatRegisterRef {
  return requireRegister(operand).ref;
}

function requireIntRegister(operand: Operand): IntRegisterRef {
  const reg = requireRegister(operand).ref;
  if (reg.kind === "S" || reg.kind === "F") {
    throw new EdiabasError(
      EdiabasErrorCodes.REGISTER_ERROR,
      "Expected integer register"
    );
  }
  return reg;
}

function intRegisterByteLength(ref: IntRegisterRef): number {
  switch (ref.kind) {
    case "B":
    case "A":
      return 1;
    case "I":
      return 2;
    case "L":
      return 4;
  }
}

function requireStringRegister(operand: Operand): StringRegisterRef {
  const reg = requireRegister(operand).ref;
  if (reg.kind !== "S") {
    throw new EdiabasError(
      EdiabasErrorCodes.REGISTER_ERROR,
      "Expected string register"
    );
  }
  return reg;
}

function requireFloatRegister(operand: Operand): FloatRegisterRef {
  const reg = requireRegister(operand).ref;
  if (reg.kind !== "F") {
    throw new EdiabasError(
      EdiabasErrorCodes.REGISTER_ERROR,
      "Expected float register"
    );
  }
  return reg;
}

function requireDateTimeDestination(operand: Operand): DateTimeDestination {
  const reg = requireRegister(operand).ref;
  if (reg.kind === "F") {
    throw new EdiabasError(
      EdiabasErrorCodes.REGISTER_ERROR,
      "Expected integer or string register"
    );
  }
  return reg;
}

function requireIndexed(operand: Operand): IndexedOperand {
  if (operand.kind !== "indexed") {
    throw new EdiabasError(EdiabasErrorCodes.INVALID_INSTRUCTION, "Expected indexed operand");
  }
  return operand;
}

function resolveIntValue(registers: RegisterSet, operand: Operand): number {
  switch (operand.kind) {
    case "immediate":
      return operand.value;
    case "register":
      if (operand.ref.kind === "F" || operand.ref.kind === "S") {
        throw new EdiabasError(
          EdiabasErrorCodes.REGISTER_ERROR,
          "Expected integer register"
        );
      }
      return getIntValue(registers, operand.ref);
    default:
      throw new EdiabasError(
        EdiabasErrorCodes.INVALID_INSTRUCTION,
        "Expected integer operand"
      );
  }
}

function resolveIndexedBytes(registers: RegisterSet, operand: Operand): Uint8Array {
  const indexed = requireIndexed(operand);
  const base = getStringValue(registers, indexed.base);
  const bytes = utf8ToCp1252(base);
  const start = resolveIntValue(registers, indexed.index) + (indexed.offset?.value ?? 0);
  const length = indexed.length
    ? resolveIntValue(registers, indexed.length)
    : bytes.length - start;
  return bytes.slice(Math.max(0, start), Math.max(0, start) + Math.max(0, length));
}

function resolveStringValue(registers: RegisterSet, operand: Operand): string {
  switch (operand.kind) {
    case "string":
      return operand.value;
    case "register":
      if (operand.ref.kind !== "S") {
        throw new EdiabasError(
          EdiabasErrorCodes.REGISTER_ERROR,
          "Expected string register"
        );
      }
      return getStringValue(registers, operand.ref);
    case "indexed": {
      const slice = resolveIndexedBytes(registers, operand);
      return cp1252ToUtf8(slice);
    }
    default:
      throw new EdiabasError(
        EdiabasErrorCodes.INVALID_INSTRUCTION,
        "Expected string operand"
      );
  }
}

function parseConfigInt(value: string): number {
  const trimmed = value.trimEnd();
  if (!trimmed) {
    return 0;
  }
  const lower = trimmed.toLowerCase();
  try {
    if (lower.startsWith("0x")) {
      if (lower.length <= 2) {
        return 0;
      }
      const firstChar = lower[2];
      if (!/[0-9a-f]/.test(firstChar)) {
        return 0;
      }
      return Number.parseInt(trimmed.slice(2), 16);
    }
    if (lower.startsWith("0y")) {
      return Number.parseInt(trimmed.slice(2), 2);
    }
    if (lower === "-" || lower === "--") {
      return 0;
    }
    if (/[a-z]/i.test(lower[0])) {
      return 0;
    }
    let numberConv = trimmed.trimStart();
    const index = numberConv.search(/[.,]/);
    if (index >= 0) {
      numberConv = numberConv.slice(0, index);
    }
    return Number.parseInt(numberConv, 10);
  } catch {
    return 0;
  }
}

function resolveBinaryValue(registers: RegisterSet, operand: Operand): Uint8Array {
  switch (operand.kind) {
    case "string":
      return new Uint8Array(operand.raw);
    case "register":
      if (operand.ref.kind !== "S") {
        throw new EdiabasError(
          EdiabasErrorCodes.REGISTER_ERROR,
          "Expected string register"
        );
      }
      return utf8ToCp1252(getStringValue(registers, operand.ref));
    case "indexed": {
      return resolveIndexedBytes(registers, operand);
    }
    default:
      throw new EdiabasError(
        EdiabasErrorCodes.INVALID_INSTRUCTION,
        "Expected binary operand"
      );
  }
}

/**
 * GetDataLen-equivalent: byte width of an operand for arithmetic.
 * - RegB/A/Imm8 → 1, RegI/Imm16 → 2, RegL/Imm32 → 4
 * - RegS / ImmStr → string-array length (read mode)
 * - IdxX → write mode = 1, read mode = remaining bytes
 * - IdxXLenX → declared length
 */
function getOperandLen(state: InterpreterState, operand: Operand, write = false): number {
  switch (operand.kind) {
    case "register": {
      const ref = operand.ref;
      switch (ref.kind) {
        case "B":
        case "A":
          return 1;
        case "I":
          return 2;
        case "L":
          return 4;
        case "S":
          return getBinaryValue(state.registers, ref).length;
        case "F":
          return 8;
      }
      return 0;
    }
    case "immediate":
      return operand.width ?? 4;
    case "string":
      return operand.raw.length;
    case "indexed": {
      if (write) return 1;
      if (operand.length) {
        return Math.max(0, resolveIntValue(state.registers, operand.length));
      }
      const bytes = getBinaryValue(state.registers, operand.base);
      const start = resolveIntValue(state.registers, operand.index) + (operand.offset?.value ?? 0);
      return Math.max(0, bytes.length - start);
    }
    case "none":
      return 0;
  }
}

/**
 * Mirrors C# Operand.GetValueData(len): read polymorphically as an integer.
 * Works on Imm/Reg/Idx by reading `length` bytes (little-endian for byte arrays).
 */
function readPolyValue(state: InterpreterState, operand: Operand, length: number): number {
  if (operand.kind === "immediate") {
    const mask = length === 4 ? 0xffffffff : ((1 << (length * 8)) - 1) >>> 0;
    return (operand.value & mask) >>> 0;
  }
  if (operand.kind === "register") {
    const ref = operand.ref;
    if (ref.kind === "S") {
      const bytes = getBinaryValue(state.registers, ref);
      let value = 0;
      for (let i = length - 1; i >= 0; i--) {
        value = ((value << 8) | (bytes[i] ?? 0)) >>> 0;
      }
      return value;
    }
    if (ref.kind === "F") {
      throw new EdiabasError(EdiabasErrorCodes.REGISTER_ERROR, "Cannot read float as integer");
    }
    const raw = getIntValue(state.registers, ref);
    const mask = length === 4 ? 0xffffffff : ((1 << (length * 8)) - 1) >>> 0;
    return (raw & mask) >>> 0;
  }
  if (operand.kind === "indexed" || operand.kind === "string") {
    const bytes = operand.kind === "string" ? operand.raw : resolveIndexedBytes(state.registers, operand);
    let value = 0;
    for (let i = length - 1; i >= 0; i--) {
      value = ((value << 8) | (bytes[i] ?? 0)) >>> 0;
    }
    return value;
  }
  throw new EdiabasError(EdiabasErrorCodes.INVALID_INSTRUCTION, "Cannot read value from operand");
}

/**
 * Mirrors C# Operand.GetArrayData(): returns bytes from any array-yielding operand.
 * Accepts RegS, ImmStr, IdxX, IdxXLenX. For RegB/I/L it returns the int as little-endian bytes.
 */
function readPolyBytes(state: InterpreterState, operand: Operand): Uint8Array {
  if (operand.kind === "string") return new Uint8Array(operand.raw);
  if (operand.kind === "indexed") return resolveIndexedBytes(state.registers, operand);
  if (operand.kind === "register") {
    const ref = operand.ref;
    if (ref.kind === "S") return getBinaryValue(state.registers, ref);
    if (ref.kind === "F") {
      throw new EdiabasError(EdiabasErrorCodes.REGISTER_ERROR, "Cannot read float as bytes");
    }
    const value = getIntValue(state.registers, ref) >>> 0;
    const length = ref.kind === "B" || ref.kind === "A" ? 1 : ref.kind === "I" ? 2 : 4;
    const out = new Uint8Array(length);
    for (let i = 0; i < length; i++) out[i] = (value >>> (i * 8)) & 0xff;
    return out;
  }
  if (operand.kind === "immediate") {
    const length = operand.width ?? 4;
    const value = operand.value >>> 0;
    const out = new Uint8Array(length);
    for (let i = 0; i < length; i++) out[i] = (value >>> (i * 8)) & 0xff;
    return out;
  }
  throw new EdiabasError(EdiabasErrorCodes.INVALID_INSTRUCTION, "Cannot read bytes from operand");
}

/**
 * Mirrors C# Operand.GetStringData(): bytes terminated at first 0x00, decoded as cp1252.
 */
function readPolyString(state: InterpreterState, operand: Operand): string {
  const bytes = readPolyBytes(state, operand);
  let length = bytes.length;
  for (let i = 0; i < bytes.length; i++) {
    if (bytes[i] === 0) {
      length = i;
      break;
    }
  }
  return cp1252ToUtf8(bytes.subarray(0, length));
}

/**
 * Polymorphic dispatch for ops that read both args, compute a result, and write back to
 * arg0. Handles register (1/2/4-byte width) and indexed (byte-write at offset)
 * destinations. The `compute(val0, val1, len)` callback returns `{ result, flags }`.
 *
 * Mirrors the C# pattern `arg0.SetRawData(compute(arg0.GetValueData(len), arg1.GetValueData(len)))`.
 */
function arithmeticReadModifyWrite(
  state: InterpreterState,
  arg0: Operand,
  arg1: Operand,
  compute: (val0: number, val1: number, len: number) => { result: number; flagsPatch: Partial<Flags> }
): void {
  if (arg0.kind === "register" && (arg0.ref.kind === "S" || arg0.ref.kind === "F")) {
    throw new EdiabasError(
      EdiabasErrorCodes.REGISTER_ERROR,
      `Cannot perform arithmetic on ${arg0.ref.kind} register`
    );
  }
  if (arg0.kind !== "register" && arg0.kind !== "indexed") {
    throw new EdiabasError(
      EdiabasErrorCodes.INVALID_INSTRUCTION,
      "Expected register or indexed destination"
    );
  }

  const len = Math.max(1, getOperandLen(state, arg0, true));
  const val0 = readPolyValue(state, arg0, len);
  const val1 = readPolyValue(state, arg1, len);
  const { result, flagsPatch } = compute(val0, val1, len);

  if (arg0.kind === "register") {
    setIntValue(state.registers, arg0.ref as IntRegisterRef, result);
  } else {
    writePolyValue(state, arg0, result, len);
  }

  if (flagsPatch.z !== undefined) state.flags.z = flagsPatch.z;
  if (flagsPatch.s !== undefined) state.flags.s = flagsPatch.s;
  if (flagsPatch.v !== undefined) state.flags.v = flagsPatch.v;
  if (flagsPatch.c !== undefined) state.flags.c = flagsPatch.c;
}

function maskForLen(len: number): number {
  return len === 4 ? 0xffffffff : ((1 << (len * 8)) - 1) >>> 0;
}

function signMaskForLen(len: number): number {
  return (1 << (len * 8 - 1)) >>> 0;
}

function updateZS(value: number, len: number): { z: boolean; s: boolean } {
  const mask = maskForLen(len);
  const masked = value & mask;
  return { z: masked === 0, s: (masked & signMaskForLen(len)) !== 0 };
}

/**
 * Mirrors C# Operand.SetRawData(EdValueType, len) for register/indexed destinations.
 * Writes `length` bytes derived from `value` little-endian. For int registers it sets the
 * register value; for string registers / indexed it sets the bytes.
 */
function writePolyValue(state: InterpreterState, operand: Operand, value: number, length: number): void {
  if (operand.kind === "register") {
    const ref = operand.ref;
    if (ref.kind === "S") {
      const out = new Uint8Array(length);
      const v = value >>> 0;
      for (let i = 0; i < length; i++) out[i] = (v >>> (i * 8)) & 0xff;
      setBinaryValue(state.registers, ref, out);
      return;
    }
    if (ref.kind === "F") {
      throw new EdiabasError(EdiabasErrorCodes.REGISTER_ERROR, "Cannot write integer to float register");
    }
    setIntValue(state.registers, ref, value);
    return;
  }
  if (operand.kind === "indexed") {
    const out = new Uint8Array(length);
    const v = value >>> 0;
    for (let i = 0; i < length; i++) out[i] = (v >>> (i * 8)) & 0xff;
    writePolyBytes(state, operand, out);
    return;
  }
  throw new EdiabasError(EdiabasErrorCodes.INVALID_INSTRUCTION, "Cannot write value to operand");
}

/**
 * Mirrors C# Operand.SetArrayData / SetRawData(byte[]). Writes bytes into a register or indexed slice.
 */
function writePolyBytes(state: InterpreterState, operand: Operand, data: Uint8Array): void {
  if (operand.kind === "register") {
    const ref = operand.ref;
    if (ref.kind !== "S") {
      throw new EdiabasError(EdiabasErrorCodes.REGISTER_ERROR, "Expected string register for byte data");
    }
    setBinaryValue(state.registers, ref, data);
    return;
  }
  if (operand.kind === "indexed") {
    const baseBytes = getBinaryValue(state.registers, operand.base);
    const start = Math.max(0, resolveIntValue(state.registers, operand.index) + (operand.offset?.value ?? 0));
    const required = start + data.length;
    if (required > ARRAY_MAX_SIZE) {
      throw new EdiabasError(EdiabasErrorCodes.EDIABAS_BIP_0001, "Array buffer overflow");
    }
    const merged = new Uint8Array(Math.max(baseBytes.length, required));
    merged.set(baseBytes);
    merged.set(data, start);
    setBinaryValue(state.registers, operand.base, merged);
    return;
  }
  throw new EdiabasError(EdiabasErrorCodes.INVALID_INSTRUCTION, "Cannot write bytes to operand");
}

/**
 * Mirrors C# Operand.SetStringData(string): writes cp1252-encoded bytes (no auto-null).
 */
function writePolyString(state: InterpreterState, operand: Operand, value: string): void {
  const bytes = utf8ToCp1252(value);
  writePolyBytes(state, operand, bytes);
}

/**
 * Read a float from any operand (registers / numeric immediates).
 */
function readPolyFloat(state: InterpreterState, operand: Operand): number {
  if (operand.kind === "register" && operand.ref.kind === "F") {
    return getFloatValue(state.registers, operand.ref);
  }
  if (operand.kind === "immediate") return operand.value;
  throw new EdiabasError(EdiabasErrorCodes.REGISTER_ERROR, "Expected float operand");
}

/**
 * BCD nibble: 0-9 → '0'-'9', else '*' (mirrors EdiabasNet.ValueToBcd).
 */
/**
 * Width to use for value-formatting ops (`fix2hex`, `fix2dez`, `ufix2dez`).
 *
 * Mirrors C# `len = arg1.GetDataType() != typeof(EdValueType) ? 1 : arg1.GetDataLen();`
 * — when the source is a byte-array operand (RegS, ImmStr, IdxX*), only the
 * first byte is formatted. For int operands the natural register/immediate
 * width is used.
 */
function fixFormatLen(state: InterpreterState, operand: Operand): number {
  if (
    operand.kind === "register" &&
    operand.ref.kind !== "S" &&
    operand.ref.kind !== "F"
  ) {
    return intRegisterByteLength(operand.ref);
  }
  if (operand.kind === "immediate") {
    return Math.max(1, operand.width ?? 4);
  }
  // String register, string literal, or any indexed slice — treat as byte
  // array, format only the leading byte.
  return 1;
}

/**
 * Soft error reporting — mirrors C# `EdiabasNet.SetError(code)`.
 *
 * Looks up the trap bit for the given error code (defaults to 0 if not in
 * `TrapBitDict`), stores it in `state.errorTrapBitNr`, and only throws if the
 * bit is **not** masked in `state.errorTrapMask`. SGBDs can mask specific
 * error bits via `settmr` to tolerate transient failures (e.g. float
 * overflow during a calculation that gets retried).
 *
 * C# reference: `EdiabasNet.cs:4140-4167`.
 */
function setError(state: InterpreterState, code: EdiabasErrorCode, message?: string): void {
  const bitNumber = (TrapBitDict as Record<number, number>)[code] ?? 0;
  state.errorTrapBitNr = bitNumber;
  const activeMask = (1 << bitNumber) & ~state.errorTrapMask;
  if (activeMask !== 0) {
    throw new EdiabasError(code, message ?? `EDIABAS error 0x${code.toString(16)}`);
  }
  // Otherwise the error is absorbed — execution continues.
}

function nibbleToBcdChar(nibble: number): string {
  const n = nibble & 0x0f;
  return n > 9 ? "*" : n.toString(16).toUpperCase();
}

/**
 * Write `data` into the destination operand. For indexed destinations, write at
 * (index + offset) preserving surrounding bytes (mirrors C# OpFlt2Y4 / OpFlt2Y8).
 * For register destinations, overwrite entirely.
 */
function writeFloatBytesAt(state: InterpreterState, operand: Operand, data: Uint8Array): boolean {
  if (operand.kind === "indexed") {
    // Replicate writePolyBytes inline so we can soft-fail on overflow per C#
    // OpFlt2Y* semantics: SetError(BIP_0001) + return without writing.
    const baseBytes = getBinaryValue(state.registers, operand.base);
    const start = Math.max(
      0,
      resolveIntValue(state.registers, operand.index) + (operand.offset?.value ?? 0)
    );
    if (start + data.length > ARRAY_MAX_SIZE) {
      setError(state, EdiabasErrorCodes.EDIABAS_BIP_0001, "flt2y: array overflow");
      return false;
    }
    const merged = new Uint8Array(Math.max(baseBytes.length, start + data.length));
    merged.set(baseBytes);
    merged.set(data, start);
    setBinaryValue(state.registers, operand.base, merged);
    return true;
  }
  if (operand.kind === "register" && operand.ref.kind === "S") {
    setBinaryValue(state.registers, operand.ref, data);
    return true;
  }
  throw new EdiabasError(EdiabasErrorCodes.REGISTER_ERROR, "Expected string register/indexed for float bytes");
}

function decodeOperand(
  code: Uint8Array,
  view: DataView,
  offset: number,
  mode: OpAddrMode
): DecodeResult {
  switch (mode) {
    case OpAddrModes.NONE:
      return { operand: { kind: "none" }, nextOffset: offset };
    case OpAddrModes.REG_S:
    case OpAddrModes.REG_AB:
    case OpAddrModes.REG_I:
    case OpAddrModes.REG_L: {
      const ref = decodeRegister(code[offset]);
      return { operand: { kind: "register", ref }, nextOffset: offset + 1 };
    }
    case OpAddrModes.IMM8: {
      const value = code[offset];
      return { operand: { kind: "immediate", value, width: 1 }, nextOffset: offset + 1 };
    }
    case OpAddrModes.IMM16: {
      const value = readInt16(view, offset);
      return { operand: { kind: "immediate", value, width: 2 }, nextOffset: offset + 2 };
    }
    case OpAddrModes.IMM32: {
      const value = readInt32(view, offset);
      return { operand: { kind: "immediate", value, width: 4 }, nextOffset: offset + 4 };
    }
    case OpAddrModes.IMM_STR: {
      const length = readInt16(view, offset);
      const start = offset + 2;
      const bytes = code.slice(start, start + length);
      const trimmed = bytes.length > 0 && bytes[bytes.length - 1] === 0
        ? bytes.slice(0, -1)
        : bytes;
      const value = cp1252ToUtf8(trimmed);
      return {
        operand: { kind: "string", value, raw: bytes },
        nextOffset: start + length,
      };
    }
    case OpAddrModes.IDX_IMM: {
      const base = decodeRegister(code[offset]);
      if (base.kind !== "S") {
        throw new EdiabasError(EdiabasErrorCodes.REGISTER_ERROR, "Expected string register for indexed operand");
      }
      const index = readInt16(view, offset + 1);
      return {
        operand: {
          kind: "indexed",
          base,
          index: { kind: "immediate", value: index },
        },
        nextOffset: offset + 3,
      };
    }
    case OpAddrModes.IDX_REG: {
      const base = decodeRegister(code[offset]);
      if (base.kind !== "S") {
        throw new EdiabasError(EdiabasErrorCodes.REGISTER_ERROR, "Expected string register for indexed operand");
      }
      const index = decodeRegister(code[offset + 1]);
      return {
        operand: {
          kind: "indexed",
          base,
          index: { kind: "register", ref: index },
        },
        nextOffset: offset + 2,
      };
    }
    case OpAddrModes.IDX_REG_IMM: {
      const base = decodeRegister(code[offset]);
      if (base.kind !== "S") {
        throw new EdiabasError(EdiabasErrorCodes.REGISTER_ERROR, "Expected string register for indexed operand");
      }
      const index = decodeRegister(code[offset + 1]);
      const increment = readInt16(view, offset + 2);
      return {
        operand: {
          kind: "indexed",
          base,
          index: { kind: "register", ref: index },
          offset: { kind: "immediate", value: increment },
        },
        nextOffset: offset + 4,
      };
    }
    case OpAddrModes.IDX_IMM_LEN_IMM: {
      const base = decodeRegister(code[offset]);
      if (base.kind !== "S") {
        throw new EdiabasError(EdiabasErrorCodes.REGISTER_ERROR, "Expected string register for indexed operand");
      }
      const index = readInt16(view, offset + 1);
      const length = readInt16(view, offset + 3);
      return {
        operand: {
          kind: "indexed",
          base,
          index: { kind: "immediate", value: index },
          length: { kind: "immediate", value: length },
        },
        nextOffset: offset + 5,
      };
    }
    case OpAddrModes.IDX_IMM_LEN_REG: {
      const base = decodeRegister(code[offset]);
      if (base.kind !== "S") {
        throw new EdiabasError(EdiabasErrorCodes.REGISTER_ERROR, "Expected string register for indexed operand");
      }
      const index = readInt16(view, offset + 1);
      const length = decodeRegister(code[offset + 3]);
      return {
        operand: {
          kind: "indexed",
          base,
          index: { kind: "immediate", value: index },
          length: { kind: "register", ref: length },
        },
        nextOffset: offset + 4,
      };
    }
    case OpAddrModes.IDX_REG_LEN_IMM: {
      const base = decodeRegister(code[offset]);
      if (base.kind !== "S") {
        throw new EdiabasError(EdiabasErrorCodes.REGISTER_ERROR, "Expected string register for indexed operand");
      }
      const index = decodeRegister(code[offset + 1]);
      const length = readInt16(view, offset + 2);
      return {
        operand: {
          kind: "indexed",
          base,
          index: { kind: "register", ref: index },
          length: { kind: "immediate", value: length },
        },
        nextOffset: offset + 4,
      };
    }
    case OpAddrModes.IDX_REG_LEN_REG: {
      const base = decodeRegister(code[offset]);
      if (base.kind !== "S") {
        throw new EdiabasError(EdiabasErrorCodes.REGISTER_ERROR, "Expected string register for indexed operand");
      }
      const index = decodeRegister(code[offset + 1]);
      const length = decodeRegister(code[offset + 2]);
      return {
        operand: {
          kind: "indexed",
          base,
          index: { kind: "register", ref: index },
          length: { kind: "register", ref: length },
        },
        nextOffset: offset + 3,
      };
    }
    default:
      return { operand: { kind: "none" }, nextOffset: offset };
  }
}

function decodeInstruction(code: Uint8Array, pc: number): { opcode: number; arg0: Operand; arg1: Operand; nextPc: number } {
  if (pc + 1 >= code.length) {
    throw new EdiabasError(
      EdiabasErrorCodes.INVALID_INSTRUCTION,
      `PC out of range: ${pc}`
    );
  }
  const opcode = code[pc];
  const addrMode = code[pc + 1];
  const arg0Mode = (addrMode & 0xf0) >> 4;
  const arg1Mode = addrMode & 0x0f;
  let offset = pc + 2;
  const view = new DataView(code.buffer, code.byteOffset, code.byteLength);
  const arg0 = decodeOperand(code, view, offset, arg0Mode as OpAddrMode);
  offset = arg0.nextOffset;
  const arg1 = decodeOperand(code, view, offset, arg1Mode as OpAddrMode);
  offset = arg1.nextOffset;
  return { opcode, arg0: arg0.operand, arg1: arg1.operand, nextPc: offset };
}

function resolveJobEntry(prg: PrgFile, name: string): PrgJob | undefined {
  const target = name.toUpperCase();
  const job = prg.jobs.find((entry) => entry.name.toUpperCase() === target);
  if (job) return job;
  return undefined;
}

function resolveBinaryJobOffset(prg: PrgFile, name: string): number | undefined {
  const target = name.toUpperCase();
  const entry = prg.binaryJobs.find((job) => job.name.toUpperCase() === target);
  return entry?.offset;
}

function assertContext(context: InterpreterState | null): InterpreterState {
  if (!context) {
    throw new EdiabasError(EdiabasErrorCodes.INVALID_INSTRUCTION, "Interpreter is not started");
  }
  return context;
}

function requireCommunicationInterface(state: InterpreterState): CommunicationInterface {
  if (!state.communicationInterface) {
    throw new EdiabasError(EdiabasErrorCodes.UNKNOWN, "Communication interface is not configured");
  }
  return state.communicationInterface;
}

function requireFileSystem(state: InterpreterState): FileSystem {
  if (!state.fileSystem) {
    throw new EdiabasError(EdiabasErrorCodes.UNKNOWN, "File system is not configured");
  }
  return state.fileSystem;
}

function decodeEdiabasObject(buffer: Uint8Array): Uint8Array {
  if (buffer.length <= EDIABAS_DATA_OFFSET) {
    return buffer;
  }
  const decoded = new Uint8Array(buffer.length);
  decoded.set(buffer.slice(0, EDIABAS_DATA_OFFSET));
  for (let i = EDIABAS_DATA_OFFSET; i < buffer.length; i++) {
    decoded[i] = buffer[i] ^ EDIABAS_XOR_KEY;
  }
  return decoded;
}

function resolveProgramCode(prg: PrgFile): Uint8Array {
  if (prg.code.length > 0) {
    return prg.code;
  }

  const isEdiabasObject = typeof prg.header.magic === "string" && prg.header.magic.startsWith(EDIABAS_MAGIC);
  if (isEdiabasObject && prg.binaryJobs.length > 0) {
    return decodeEdiabasObject(prg.rawBuffer);
  }

  return prg.code;
}

export class Interpreter {
  private readonly prg: PrgFile;
  private readonly code: Uint8Array;
  private context: InterpreterState | null = null;
  private readonly tableRegistry: ReturnType<typeof createTableRegistry>;
  private tableLoader?: (baseFileName: string) => ReturnType<typeof createTableRegistry> | undefined;

  constructor(prg: PrgFile) {
    this.prg = prg;
    this.code = resolveProgramCode(prg);
    this.tableRegistry = createTableRegistry(prg.tables);
  }

  start(jobName: string, options: ExecutionOptions = {}): void {
    const job = resolveJobEntry(this.prg, jobName);
    const binaryOffset = resolveBinaryJobOffset(this.prg, jobName);
    // Prefer binaryOffset for EDIABAS OBJECT format (job.offset may be 0 placeholder)
    // Use job.offset only if it's non-zero
    const offset = binaryOffset ?? (job?.offset || 0);
    if (offset < 0 || offset >= this.code.length) {
      throw new EdiabasError(
        EdiabasErrorCodes.INVALID_INSTRUCTION,
        `Job ${jobName} offset ${offset} out of range`
      );
    }

    const registers = options.registers ?? new RegisterSet();
    const flags = options.flags ?? new Flags();
    const callStack = options.callStack ?? new CallStack();
    const dataStack = options.dataStack ?? new DataStack();
    const parameters = options.parameters ?? new ParameterSet();
    const results = options.results ?? new ResultCollector();
    const sharedMemory = options.sharedMemory ?? new SharedMemory();
    const config = normalizeConfigMap(options.config);
    const timer = options.timer ?? new Timer();
    const procedureRegistry = options.procedureRegistry ?? new ProcedureRegistry();
    const procedureStack = options.procedureStack ?? new ProcedureStack();
    const tableState = options.tableState ?? { activeTable: null, rowIndex: -1 };
    this.tableLoader = options.tableLoader;

    this.context = {
      pc: offset,
      halted: false,
      registers,
      flags,
      callStack,
      dataStack,
      parameters,
      results,
      sharedMemory,
      config,
      timer,
      errorTrapMask: 0,
      errorTrapBitNr: -1,
      tokenSeparator: "",
      tokenIndex: 0,
      floatPrecision: 4,
      tableState,
      communicationInterface: options.communicationInterface,
      fileSystem: options.fileSystem,
      procedureRegistry,
      procedureStack,
      procedureLinker: options.procedureLinker,
      progressText: "",
      progressRange: 0,
      progressPos: -1,
      requestInit: false,
      resultsRequest: options.resultsRequest ?? new Set(),
      jobStatus: "",
      resultSetsTemp: [],
      systemResults: new ResultCollector(),
    };
  }

  async execute(jobName: string, options: ExecutionOptions = {}): Promise<JobResult[]> {
    this.start(jobName, options);
    while (await this.step()) {
      // continue
    }
    return this.context ? this.context.results.list() : [];
  }

  async step(): Promise<boolean> {
    const context = assertContext(this.context);
    if (context.halted) {
      return false;
    }

    const instructionPc = context.pc;
    const { opcode, arg0, arg1, nextPc } = decodeInstruction(this.code, context.pc);
    context.pc = nextPc;

    const handler = this.getHandler(opcode);
    if (!handler) {
      throw new EdiabasError(
        EdiabasErrorCodes.INVALID_INSTRUCTION,
        `Unknown opcode 0x${opcode.toString(16).toUpperCase().padStart(2, "0")}`
      );
    }

    try {
      const result = await handler(context, arg0, arg1);
      if (result?.halted) {
        context.halted = true;
      }
      if (typeof result?.pc === "number") {
        context.pc = result.pc;
      }
      return !context.halted;
    } catch (error) {
      console.error("Interpreter error at", {
        pc: instructionPc,
        opcode,
        arg0,
        arg1,
      });
      throw error;
    }
  }

  getState(): InterpreterSnapshot {
    const context = assertContext(this.context);
    return {
      pc: context.pc,
      halted: context.halted,
      registers: context.registers.snapshot(),
      flags: context.flags.snapshot(),
      callStack: context.callStack.snapshot(),
      dataStack: context.dataStack.snapshot(),
      progressText: context.progressText,
      progressRange: context.progressRange,
      progressPos: context.progressPos,
      errorTrapBitNr: context.errorTrapBitNr,
    };
  }

  private getHandler(opcode: number): ((state: InterpreterState, arg0: Operand, arg1: Operand) => Promise<{ pc?: number; halted?: boolean } | void>) | undefined {
    const resolveJumpOffset = (state: InterpreterState, operand: Operand): number => {
      if (operand.kind === "immediate") {
        return operand.value;
      }
      const target = resolveIntValue(state.registers, operand);
      return target - state.pc;
    };

    const jumpHandler = (jumpFn: (flowState: ExecutionState, offset: number) => { newPc: number }) =>
      async (state: InterpreterState, arg0: Operand) => {
        const offset = resolveJumpOffset(state, arg0);
        return { pc: jumpFn(this.controlFlowState(state), offset).newPc };
      };

    const trapJumpHandler = (
      jumpFn: (flowState: ExecutionState, trapState: { errorTrapBitNr: number }, offset: number, testBit?: number) => { newPc: number }
    ) =>
      async (state: InterpreterState, arg0: Operand, arg1: Operand) => {
        const offset = resolveJumpOffset(state, arg0);
        const testBit = arg1.kind === "none"
          ? undefined
          : (resolveIntValue(state.registers, arg1) & 0xff);
        return { pc: jumpFn(this.controlFlowState(state), state, offset, testBit).newPc };
      };

    const handlers: Record<number, (state: InterpreterState, arg0: Operand, arg1: Operand) => Promise<{ pc?: number; halted?: boolean } | void>> = {
      0x00: async (state, arg0, arg1) => {
        const setZeroSign = (value: number, length: number) => {
          const mask = length === 4 ? 0xffffffff : (1 << (length * 8)) - 1;
          const signMask = 1 << (length * 8 - 1);
          const masked = value & mask;
          state.flags.z = masked === 0;
          state.flags.s = (masked & signMask) !== 0;
        };

        const clearFlags = () => {
          state.flags.c = false;
          state.flags.z = false;
          state.flags.s = false;
          state.flags.v = false;
        };

        const clearCarryOverflow = () => {
          state.flags.c = false;
          state.flags.v = false;
        };

        // Universal move - handles int, float, and string registers
        if (arg0.kind === "indexed") {
          const base = arg0.base;
          const baseBytes = getBinaryValue(state.registers, base);
          const start = resolveIntValue(state.registers, arg0.index) + (arg0.offset?.value ?? 0);
          const writeStart = Math.max(0, start);
          let sourceBytes: Uint8Array;
          if (arg1.kind === "string" || arg1.kind === "indexed" || (arg1.kind === "register" && arg1.ref.kind === "S")) {
            sourceBytes = resolveBinaryValue(state.registers, arg1);
            clearFlags();
          } else {
            const length = arg0.length ? resolveIntValue(state.registers, arg0.length) : 1;
            const value = resolveIntValue(state.registers, arg1);
            sourceBytes = new Uint8Array(Math.max(0, length));
            for (let i = 0; i < sourceBytes.length; i++) {
              sourceBytes[i] = (value >> (i * 8)) & 0xff;
            }
            clearCarryOverflow();
            setZeroSign(value, 1);
          }
          const requiredLength = writeStart + sourceBytes.length;
          const updated = new Uint8Array(Math.max(baseBytes.length, requiredLength));
          updated.set(baseBytes);
          updated.set(sourceBytes, writeStart);
          setBinaryValue(state.registers, base, updated);
          return;
        }

        const destRef = requireAnyRegister(arg0);
        if (destRef.kind === "S") {
          // String destination
          if (arg1.kind === "string" || arg1.kind === "indexed" || (arg1.kind === "register" && arg1.ref.kind === "S")) {
            const value = resolveBinaryValue(state.registers, arg1);
            setBinaryValue(state.registers, destRef, value);
            clearFlags();
            return;
          }
          throw new EdiabasError(EdiabasErrorCodes.INVALID_INSTRUCTION, "Expected string operand");
        } else if (destRef.kind === "F") {
          // Float destination. C# OpMove only handles EdValueType / byte[] —
          // a float register destination falls through to "Invalid target
          // data type". Match the strictness.
          throw new EdiabasError(
            EdiabasErrorCodes.REGISTER_ERROR,
            "move: float register destination unsupported (use fadd/fsub/fmul/fdiv)"
          );
        } else {
          // Integer destination - resolve value from any source
          if (arg1.kind === "indexed" || arg1.kind === "string" || (arg1.kind === "register" && arg1.ref.kind === "S")) {
            const bytes = resolveBinaryValue(state.registers, arg1);
            const length = intRegisterByteLength(destRef);
            let value = 0;
            for (let i = length - 1; i >= 0; i--) {
              value = (value << 8) | (bytes[i] ?? 0);
            }
            setIntValue(state.registers, destRef, value);
            clearCarryOverflow();
            setZeroSign(value, length);
            return;
          }
          const value = resolveIntValue(state.registers, arg1);
          setIntValue(state.registers, destRef, value);
          clearCarryOverflow();
          setZeroSign(value, intRegisterByteLength(destRef));
        }
      },
      0x01: async (state, arg0) => {
        clear(state.registers, requireAnyRegister(arg0));
        state.flags.c = false;
        state.flags.z = true;
        state.flags.s = false;
        state.flags.v = false;
      },
      // 0x02: comp - C# OpComp reads BOTH args polymorphically (no register requirement
      // since neither side is written). Indexed/immediate operands are valid for arg0.
      0x02: async (state, arg0, arg1) => {
        const len = Math.max(1, getOperandLen(state, arg0, true));
        const val0 = readPolyValue(state, arg0, len);
        const val1 = readPolyValue(state, arg1, len);
        const diff = (val0 - val1) >>> 0;
        const mask = len === 4 ? 0xffffffff : ((1 << (len * 8)) - 1) >>> 0;
        const signMask = (1 << (len * 8 - 1)) >>> 0;
        const result = diff & mask;
        state.flags.z = result === 0;
        state.flags.s = (result & signMask) !== 0;
        // Overflow: signs of operands differ AND sign of result differs from val0.
        const v0Sign = (val0 & signMask) !== 0;
        const v1Sign = (val1 & signMask) !== 0;
        const rSign = (result & signMask) !== 0;
        state.flags.v = v0Sign !== v1Sign && rSign !== v0Sign;
        state.flags.c = val0 < val1;
      },
      // 0x03: subb - dest -= source. Indexed/register destination supported.
      0x03: async (state, arg0, arg1) => {
        arithmeticReadModifyWrite(state, arg0, arg1, (val0, val1, len) => {
          const mask = maskForLen(len);
          const sm = signMaskForLen(len);
          const result = (val0 - val1) & mask;
          const v0Sign = (val0 & sm) !== 0, v1Sign = (val1 & sm) !== 0, rSign = (result & sm) !== 0;
          return {
            result,
            flagsPatch: {
              ...updateZS(result, len),
              v: v0Sign !== v1Sign && rSign !== v0Sign,
              c: val0 < val1,
            },
          };
        });
      },
      // 0x04: adds - dest += source.
      0x04: async (state, arg0, arg1) => {
        arithmeticReadModifyWrite(state, arg0, arg1, (val0, val1, len) => {
          const mask = maskForLen(len);
          const sm = signMaskForLen(len);
          const sum = val0 + val1;
          const result = sum & mask;
          const v0Sign = (val0 & sm) !== 0, v1Sign = (val1 & sm) !== 0, rSign = (result & sm) !== 0;
          return {
            result,
            flagsPatch: {
              ...updateZS(result, len),
              v: v0Sign === v1Sign && rSign !== v0Sign,
              c: sum > mask,
            },
          };
        });
      },
      // 0x05: mult - signed product. Mirrors C# `OpMult`:
      //   result = (EdValueType)((Int{8|16|32})val0 * (Int{8|16|32})val1)
      //   arg0  ← result                  (SetRawData truncates to len bytes)
      //   arg1  ← (UInt64)result >> (len*8)   (high bits of the 32-bit `result`)
      //
      // Key C# detail: `result` is the truncated 32-bit (UInt32) product, so
      // the "high" shift `result >> (len*8)` is shifting *within the 32-bit
      // word*. For len=4 the shift is 32 → always 0. For len=2 the upper word
      // of a 16x16 product fits inside the 32-bit `result`. For len=1 the
      // upper byte of the byte product fits in bits 8..15.
      0x05: async (state, arg0, arg1) => {
        const len = Math.max(1, getOperandLen(state, arg0, true));
        const val0 = readPolyValue(state, arg0, len);
        const val1 = readPolyValue(state, arg1, len);
        const sm = signMaskForLen(len);
        // Sign-extend operands (matching C# SByte/Int16/Int32 cast).
        const s0 = (val0 & sm) ? val0 - (1 << (len * 8)) : val0;
        const s1 = (val1 & sm) ? val1 - (1 << (len * 8)) : val1;
        const lowMask = maskForLen(len);
        // 32-bit `result` (un-truncated to len, but truncated to 32-bit width
        // by the C# (EdValueType) cast).
        let result32: number;
        if (len <= 2) {
          // 16x16 max product fits in a JS Number with room to spare.
          result32 = (s0 * s1) >>> 0;
        } else {
          // 32x32 → use BigInt for precision, truncate to 32 bits.
          const product = BigInt(s0) * BigInt(s1);
          result32 = Number(((product % (1n << 32n)) + (1n << 32n)) & 0xffffffffn) >>> 0;
        }
        const lowResult = result32 & lowMask;
        // High = `result32 >> (len*8)` truncated to len bytes. For len=4 the
        // shift is 32 which in JS produces a no-op; coerce to 0 explicitly.
        const highResult = len >= 4 ? 0 : ((result32 >>> (len * 8)) & lowMask) >>> 0;
        if (arg0.kind === "register" && arg0.ref.kind !== "S" && arg0.ref.kind !== "F") {
          setIntValue(state.registers, arg0.ref, lowResult);
        } else {
          writePolyValue(state, arg0, lowResult, len);
        }
        if (arg1.kind === "register" && arg1.ref.kind !== "S" && arg1.ref.kind !== "F") {
          setIntValue(state.registers, arg1.ref, highResult);
        }
        const zs = updateZS(lowResult, len);
        state.flags.z = zs.z;
        state.flags.s = zs.s;
        state.flags.v = false;
      },
      // 0x06: divs - signed division; quotient → arg0, remainder → arg1 (if register).
      // C# `OpDivs` casts operands to Int32 directly (preserving zero-extension
      // from byte/word — so 0x80 stays positive 128, not -128). On division by
      // zero it calls SetError(BIP_0007) and leaves arg0 unchanged.
      0x06: async (state, arg0, arg1) => {
        const len = Math.max(1, getOperandLen(state, arg0, true));
        const val0 = readPolyValue(state, arg0, len);
        const val1 = readPolyValue(state, arg1, len);
        // C# `(Int32)value` after zero-extending GetValueData(len) — the
        // 8/16-bit values are treated as positive numbers, NOT sign-extended.
        const s0 = val0 | 0;
        const s1 = val1 | 0;
        let quotient = val0;
        let remainder = 0;
        let error = false;
        if (s1 === 0) {
          error = true;
        } else {
          quotient = Math.trunc(s0 / s1) >>> 0;
          remainder = (s0 - Math.trunc(s0 / s1) * s1) >>> 0;
        }
        const mask = maskForLen(len);
        const result = error ? val0 : (quotient & mask);
        const zs = updateZS(error ? 0 : (quotient & mask), len);
        state.flags.z = zs.z;
        state.flags.s = zs.s;
        state.flags.v = false;
        if (error) {
          // SetError is soft — the trap mask decides whether to halt.
          setError(state, EdiabasErrorCodes.EDIABAS_BIP_0007, "divs: division by zero");
          return; // C# leaves arg0 unchanged.
        }
        if (arg0.kind === "register" && arg0.ref.kind !== "S" && arg0.ref.kind !== "F") {
          setIntValue(state.registers, arg0.ref, result);
        } else {
          writePolyValue(state, arg0, result, len);
        }
        if (arg1.kind === "register" && arg1.ref.kind !== "S" && arg1.ref.kind !== "F") {
          setIntValue(state.registers, arg1.ref, remainder);
        }
      },
      // 0x07: and / 0x08: or / 0x09: xor — indexed dest supported.
      0x07: async (state, arg0, arg1) => {
        arithmeticReadModifyWrite(state, arg0, arg1, (val0, val1, len) => {
          const mask = maskForLen(len);
          const result = (val0 & val1) & mask;
          return { result, flagsPatch: { ...updateZS(result, len), v: false } };
        });
      },
      0x08: async (state, arg0, arg1) => {
        arithmeticReadModifyWrite(state, arg0, arg1, (val0, val1, len) => {
          const mask = maskForLen(len);
          const result = (val0 | val1) & mask;
          return { result, flagsPatch: { ...updateZS(result, len), v: false } };
        });
      },
      0x09: async (state, arg0, arg1) => {
        arithmeticReadModifyWrite(state, arg0, arg1, (val0, val1, len) => {
          const mask = maskForLen(len);
          const result = (val0 ^ val1) & mask;
          return { result, flagsPatch: { ...updateZS(result, len), v: false } };
        });
      },
      // 0x0a: not - bitwise complement, indexed dest supported.
      0x0a: async (state, arg0) => {
        arithmeticReadModifyWrite(state, arg0, { kind: "none" } as Operand, (val0, _val1, len) => {
          const mask = maskForLen(len);
          const result = (~val0) & mask;
          return { result, flagsPatch: { ...updateZS(result, len), v: false } };
        });
      },
      0x0b: jumpHandler(jmp),
      0x0c: async (state, arg0) => {
        const offset = resolveJumpOffset(state, arg0);
        const result = call(this.controlFlowState(state), offset);
        return { pc: result.newPc };
      },
      0x0d: async (state) => {
        const result = ret(this.controlFlowState(state));
        return { pc: result.newPc };
      },
      0x0e: jumpHandler(jc),
      0x0f: jumpHandler(jnc),
      0x10: jumpHandler(jz),
      0x11: jumpHandler(jnz),
      0x12: jumpHandler(jv),
      0x13: jumpHandler(jnv),
      0x14: jumpHandler(jmi),
      0x15: jumpHandler(jpl),
      0x16: async (state) => {
        clrc(state.flags);
      },
      0x17: async (state) => {
        setc(state.flags);
      },
      // 0x18: asr - arithmetic shift right (sign-extending). Indexed dest supported.
      0x18: async (state, arg0, arg1) => {
        arithmeticReadModifyWrite(state, arg0, arg1, (val0, val1, len) => {
          const mask = maskForLen(len);
          const sm = signMaskForLen(len);
          const shift = val1 | 0;
          const signSet = (val0 & sm) !== 0;
          let result = val0;
          let carry: boolean | undefined;
          if (shift > 0) {
            if (shift > len * 8) {
              carry = signSet;
            } else {
              carry = (val0 & ((1 << (shift - 1)) >>> 0)) !== 0;
            }
            if (shift >= len * 8) {
              result = signSet ? mask : 0;
            } else {
              const signed = signSet ? val0 - (1 << (len * 8)) : val0;
              result = (signed >> shift) & mask;
            }
          } else if (shift === 0) {
            carry = false;
          }
          return {
            result,
            flagsPatch: { ...updateZS(result, len), v: false, ...(carry !== undefined ? { c: carry } : {}) },
          };
        });
      },
      // 0x19: lsl / 0x1b: asl - logical/arithmetic shift left (same operation).
      0x19: async (state, arg0, arg1) => {
        arithmeticReadModifyWrite(state, arg0, arg1, (val0, val1, len) => {
          const mask = maskForLen(len);
          const shift = val1 | 0;
          let result = val0;
          let carry: boolean | undefined;
          if (shift > 0) {
            if (shift > len * 8) {
              carry = false;
            } else {
              const carryShift = len * 8 - shift;
              carry = (val0 & ((1 << carryShift) >>> 0)) !== 0;
            }
            result = shift >= len * 8 ? 0 : ((val0 << shift) >>> 0) & mask;
          } else if (shift === 0) {
            carry = false;
          }
          return {
            result,
            flagsPatch: { ...updateZS(result, len), v: false, ...(carry !== undefined ? { c: carry } : {}) },
          };
        });
      },
      0x1b: async (state, arg0, arg1) => {
        arithmeticReadModifyWrite(state, arg0, arg1, (val0, val1, len) => {
          const mask = maskForLen(len);
          const shift = val1 | 0;
          let result = val0;
          let carry: boolean | undefined;
          if (shift > 0) {
            if (shift > len * 8) {
              carry = false;
            } else {
              const carryShift = len * 8 - shift;
              carry = (val0 & ((1 << carryShift) >>> 0)) !== 0;
            }
            result = shift >= len * 8 ? 0 : ((val0 << shift) >>> 0) & mask;
          } else if (shift === 0) {
            carry = false;
          }
          return {
            result,
            flagsPatch: { ...updateZS(result, len), v: false, ...(carry !== undefined ? { c: carry } : {}) },
          };
        });
      },
      // 0x1a: lsr - logical shift right.
      0x1a: async (state, arg0, arg1) => {
        arithmeticReadModifyWrite(state, arg0, arg1, (val0, val1, len) => {
          const mask = maskForLen(len);
          const shift = val1 | 0;
          let result = val0;
          let carry: boolean | undefined;
          if (shift > 0) {
            if (shift > len * 8) {
              carry = false;
            } else {
              carry = (val0 & ((1 << (shift - 1)) >>> 0)) !== 0;
            }
            result = shift >= len * 8 ? 0 : (val0 >>> shift) & mask;
          } else if (shift === 0) {
            carry = false;
          }
          return {
            result,
            flagsPatch: { ...updateZS(result, len), v: false, ...(carry !== undefined ? { c: carry } : {}) },
          };
        });
      },
      0x1c: async () => {
        // nop
      },
      // 0x1d: eoj - end of job. Captures arg0 as job status string if present.
      0x1d: async (state, arg0) => {
        if (arg0.kind !== "none") {
          state.jobStatus = readPolyString(state, arg0);
        }
        return { halted: true };
      },
      0x1e: async (state, arg0) => {
        if (arg0.kind === "register") {
          push(state.registers, state.dataStack, requireIntRegister(arg0));
          return;
        }
        if (arg0.kind === "immediate") {
          let value = arg0.value >>> 0;
          const length = arg0.width ?? 4;
          for (let i = 0; i < length; i += 1) {
            state.dataStack.pushByte(value & 0xff);
            value >>>= 8;
          }
          return;
        }
        throw new EdiabasError(EdiabasErrorCodes.INVALID_INSTRUCTION, "Expected integer operand");
      },
      0x1f: async (state, arg0) => {
        const dest = requireIntRegister(arg0);
        pop(state.registers, state.dataStack, dest);
        const length = intRegisterByteLength(dest);
        const value = getIntValue(state.registers, dest);
        const mask = length === 4 ? 0xffffffff : (1 << (length * 8)) - 1;
        const signMask = 1 << (length * 8 - 1);
        const masked = value & mask;
        state.flags.z = masked === 0;
        state.flags.s = (masked & signMask) !== 0;
        state.flags.v = false;
      },
      0x20: async (state, arg0, arg1) => {
        const leftBytes = resolveBinaryValue(state.registers, arg0);
        const rightBytes = resolveBinaryValue(state.registers, arg1);
        const equal = leftBytes.length === rightBytes.length
          && leftBytes.every((value, index) => value === rightBytes[index]);
        state.flags.z = equal;
      },
      // 0x21: scat - byte-array concat. C# OpScat does SetError(BIP_0001) and
      // returns WITHOUT writing the result if the concatenation would overflow
      // ArrayMaxSize. Behaviour respects the trap mask.
      0x21: async (state, arg0, arg1) => {
        const dest = requireStringRegister(arg0);
        const destBytes = getBinaryValue(state.registers, dest);
        const sourceBytes = readPolyBytes(state, arg1);
        const totalLen = destBytes.length + sourceBytes.length;
        if (totalLen > ARRAY_MAX_SIZE) {
          setError(state, EdiabasErrorCodes.EDIABAS_BIP_0001, "scat: array overflow");
          return; // C# returns before writing on overflow.
        }
        const result = new Uint8Array(totalLen);
        result.set(destBytes);
        result.set(sourceBytes, destBytes.length);
        setBinaryValue(state.registers, dest, result);
      },
      // 0x22: scut - polymorphic length operand.
      0x22: async (state, arg0, arg1) => {
        const dest = requireStringRegister(arg0);
        const len = Math.max(0, readPolyValue(state, arg1, 4));
        const bytes = getBinaryValue(state.registers, dest);
        // C# OpScut: if len > bytes.Length → SetArrayData(ByteArray0); else trim from the end.
        const newBytes = len > bytes.length ? new Uint8Array() : bytes.slice(0, bytes.length - len);
        setBinaryValue(state.registers, dest, newBytes);
      },
      0x23: async (state, arg0, arg1) => {
        const dest = requireIntRegister(arg0);
        const length = resolveBinaryValue(state.registers, arg1).length;
        setIntValue(state.registers, dest, length);
        const byteLength = intRegisterByteLength(dest);
        const mask = byteLength === 1 ? 0xff : byteLength === 2 ? 0xffff : 0xffffffff;
        const signMask = byteLength === 1 ? 0x80 : byteLength === 2 ? 0x8000 : 0x80000000;
        const masked = length & mask;
        state.flags.z = masked === 0;
        state.flags.s = (masked & signMask) !== 0;
        state.flags.v = false;
      },
      // 0x24: spaste - insert bytes at indexed position. C# OpSpaste raises
      // EDIABAS_BIP_0001 via SetError (soft, trap-mask respecting) and returns
      // without writing when startIdx >= ArrayMaxSize or final length exceeds it.
      0x24: async (state, arg0, arg1) => {
        const target = requireIndexed(arg0);
        const insertBytes = readPolyBytes(state, arg1);
        const baseBytes = getBinaryValue(state.registers, target.base);
        const start = Math.max(0, resolveIntValue(state.registers, target.index) + (target.offset?.value ?? 0));
        if (start >= ARRAY_MAX_SIZE) {
          setError(state, EdiabasErrorCodes.EDIABAS_BIP_0001, "spaste: index past max");
          return;
        }
        if (start >= baseBytes.length) {
          return;
        }
        const totalLen = baseBytes.length + insertBytes.length;
        if (totalLen > ARRAY_MAX_SIZE) {
          setError(state, EdiabasErrorCodes.EDIABAS_BIP_0001, "spaste: array overflow");
          return;
        }
        const result = new Uint8Array(totalLen);
        result.set(baseBytes.slice(0, start));
        result.set(insertBytes, start);
        result.set(baseBytes.slice(start), start + insertBytes.length);
        setBinaryValue(state.registers, target.base, result);
      },
      0x25: async (state, arg0, arg1) => {
        const target = requireIndexed(arg0);
        const length = Math.max(0, resolveIntValue(state.registers, arg1));
        const baseBytes = getBinaryValue(state.registers, target.base);
        const start = Math.max(0, resolveIntValue(state.registers, target.index) + (target.offset?.value ?? 0));
        if (start >= baseBytes.length) {
          return;
        }
        const end = Math.min(baseBytes.length, start + length);
        const result = new Uint8Array(baseBytes.length - (end - start));
        result.set(baseBytes.slice(0, start));
        result.set(baseBytes.slice(end), start);
        setBinaryValue(state.registers, target.base, result);
      },
      0x26: async (state) => {
        await xconnect(requireCommunicationInterface(state));
      },
      0x27: async (state) => {
        await xhangup(requireCommunicationInterface(state));
      },
      // 0x28: xsetpar - parameter bytes can be a register, immediate, indexed slice or literal.
      0x28: async (state, arg0) => {
        const bytes = readPolyBytes(state, arg0);
        await xsetparBytes(requireCommunicationInterface(state), bytes);
      },
      // 0x29: xawlen - same polymorphic input as xsetpar.
      0x29: async (state, arg0) => {
        const bytes = readPolyBytes(state, arg0);
        await xawlenBytes(requireCommunicationInterface(state), bytes);
      },
      // 0x2a: xsend - response register is required (string register), request payload is polymorphic.
      0x2a: async (state, arg0, arg1) => {
        const requestBytes = readPolyBytes(state, arg1);
        await xsendRaw(
          state.registers,
          requireCommunicationInterface(state),
          requireStringRegister(arg0),
          requestBytes
        );
      },
      0x2b: async (state, arg0) => {
        // xsendf installs a "frequent" send buffer; payload may be polymorphic.
        const bytes = readPolyBytes(state, arg0);
        const iface = requireCommunicationInterface(state);
        await iface.transmitFrequent(bytes);
      },
      0x2c: async (state, arg0) => {
        // xrequf reads frequent receive buffer into the destination string register.
        const dest = requireStringRegister(arg0);
        const iface = requireCommunicationInterface(state);
        const data = await iface.receiveFrequent();
        setBinaryValue(state.registers, dest, data);
      },
      0x2d: async (state) => {
        await xstopf(requireCommunicationInterface(state));
      },
      0x2e: async (state, arg0) => {
        await xkeyb(state.registers, requireCommunicationInterface(state), requireStringRegister(arg0));
      },
      0x2f: async (state, arg0) => {
        xstate(state.registers, requireCommunicationInterface(state), requireStringRegister(arg0));
      },
      0x30: async (state) => {
        await xboot(requireCommunicationInterface(state));
      },
      0x31: async (state) => {
        await xreset(requireCommunicationInterface(state));
      },
      0x32: async (state, arg0) => {
        xtype(state.registers, requireCommunicationInterface(state), requireStringRegister(arg0));
      },
      0x33: async (state, arg0) => {
        xvers(state.registers, requireCommunicationInterface(state), requireIntRegister(arg0));
      },
      // 0x34..0x39: erg* - all use GetStringData on arg0 (name) and GetValueData/GetStringData on arg1.
      0x34: async (state, arg0, arg1) => {
        const name = readPolyString(state, arg0);
        ergb(state.registers, state.results, name, readPolyValue(state, arg1, 1));
      },
      0x35: async (state, arg0, arg1) => {
        const name = readPolyString(state, arg0);
        ergw(state.registers, state.results, name, readPolyValue(state, arg1, 2));
      },
      0x36: async (state, arg0, arg1) => {
        const name = readPolyString(state, arg0);
        ergd(state.registers, state.results, name, readPolyValue(state, arg1, 4));
      },
      0x37: async (state, arg0, arg1) => {
        const name = readPolyString(state, arg0);
        ergi(state.registers, state.results, name, readPolyValue(state, arg1, 2));
      },
      0x38: async (state, arg0, arg1) => {
        const name = readPolyString(state, arg0);
        // C# OpErgr: only float registers/operands are valid for arg1.
        const value = readPolyFloat(state, arg1);
        state.results.record(name, "real", value);
      },
      0x39: async (state, arg0, arg1) => {
        const name = readPolyString(state, arg0);
        const value = readPolyString(state, arg1);
        ergs(state.registers, state.results, name, value);
      },
      // 0x3a: a2flt - parse ASCII float into F-register. C# OpA2Flt (v7.6+ with
      // default CompatMode) calls SetError(BIP_0011) when the input can't be
      // parsed. We write 0 to the destination and report the soft error.
      0x3a: async (state, arg0, arg1) => {
        const dst = requireFloatRegister(arg0);
        const str = readPolyString(state, arg1);
        const trimmed = str.replace(/,/g, ".").trim();
        const value = trimmed.length > 0 ? parseFloat(trimmed) : NaN;
        const valid = !Number.isNaN(value) && Number.isFinite(value);
        setFloatValue(state.registers, dst, valid ? value : 0);
        if (!valid) {
          setError(state, EdiabasErrorCodes.EDIABAS_BIP_0011, `a2flt: cannot parse "${str}"`);
        }
      },
      // 0x3b–0x3e: float arithmetic. C# writes the result first and only
      // SetError(BIP_0011) on Inf/NaN — the trap mask decides whether to halt.
      0x3b: async (state, arg0, arg1) => {
        fadd(
          state.registers,
          state.flags,
          requireFloatRegister(arg0),
          requireFloatRegister(arg1),
          () => setError(state, EdiabasErrorCodes.EDIABAS_BIP_0011, "fadd: result is Inf/NaN")
        );
      },
      0x3c: async (state, arg0, arg1) => {
        fsub(
          state.registers,
          state.flags,
          requireFloatRegister(arg0),
          requireFloatRegister(arg1),
          () => setError(state, EdiabasErrorCodes.EDIABAS_BIP_0011, "fsub: result is Inf/NaN")
        );
      },
      0x3d: async (state, arg0, arg1) => {
        fmul(
          state.registers,
          state.flags,
          requireFloatRegister(arg0),
          requireFloatRegister(arg1),
          () => setError(state, EdiabasErrorCodes.EDIABAS_BIP_0011, "fmul: result is Inf/NaN")
        );
      },
      0x3e: async (state, arg0, arg1) => {
        fdiv(
          state.registers,
          state.flags,
          requireFloatRegister(arg0),
          requireFloatRegister(arg1),
          () => setError(state, EdiabasErrorCodes.EDIABAS_BIP_0011, "fdiv: result is Inf/NaN")
        );
      },
      // 0x3f: ergy - C# OpErgy: arg0 GetStringData; arg1 GetArrayData.
      0x3f: async (state, arg0, arg1) => {
        const name = readPolyString(state, arg0);
        const binary = readPolyBytes(state, arg1);
        ergy(state.registers, state.results, name, binary);
      },
      // 0x40: enewset - archive current result-set then clear (mirrors C# OpEnewset).
      0x40: async (state) => {
        const current = state.results.list();
        if (current.length > 0) {
          state.resultSetsTemp.push(current);
          state.results.clear();
        }
      },
      // 0x41: etag - conditional result skip. arg0 is a near-address (`OcList`
      // marks it `arg0IsNearAddress=true`), so the immediate in the bytecode is
      // a relative offset from the next instruction. C# pre-bakes it to
      // `_pcCounter + offset` at decode time and `OpEtag` reads the absolute
      // value; we don't pre-bake, so the handler does the addition itself —
      // identical to how the other near-address opcodes go through jumpHandler.
      0x41: async (state, arg0, arg1) => {
        if (state.resultsRequest.size > 0) {
          const resultName = resolveStringValue(state.registers, arg1).toUpperCase();
          if (!state.resultsRequest.has(resultName)) {
            const offset = resolveJumpOffset(state, arg0);
            state.pc = state.pc + offset;
          }
        }
      },
      // 0x42: xreps - C# OpXreps reads arg0 polymorphically (GetValueData).
      0x42: async (state, arg0) => {
        const count = readPolyValue(state, arg0, 1);
        const iface = requireCommunicationInterface(state);
        if (iface.setRepeatCounter) {
          await iface.setRepeatCounter(count);
        } else if ("commRepeats" in iface) {
          iface.commRepeats = count;
        }
      },
      // 0x43: gettmr - read error trap mask into dest. C# OpGettmr uses
      // `_flags.UpdateFlags(arg0.GetValueData(), arg0.GetDataLen())` — Z/S
      // computed over the destination register's natural width, with V
      // PRESERVED (UpdateFlags doesn't touch V).
      0x43: async (state, arg0) => {
        const dest = requireIntRegister(arg0);
        gettmr(state.registers, state, dest);
        const byteLength = intRegisterByteLength(dest);
        const mask = byteLength === 1 ? 0xff : byteLength === 2 ? 0xffff : 0xffffffff;
        const signMask = byteLength === 1 ? 0x80 : byteLength === 2 ? 0x8000 : 0x80000000;
        const value = getIntValue(state.registers, dest);
        const masked = value & mask;
        state.flags.z = masked === 0;
        state.flags.s = (masked & signMask) !== 0;
        // Do NOT touch V — C# UpdateFlags only sets Z/S.
      },
      0x44: async (state, arg0) => {
        const value = resolveIntValue(state.registers, arg0);
        settmr(state.registers, state, value as TimeValueRef);
      },
      // 0x45: sett - set error trap bit
      0x45: async (state, arg0) => {
        const value = resolveIntValue(state.registers, arg0);
        sett(state.registers, state, value as TimeValueRef);
      },
      // 0x46: clrt - clear error trap bit
      0x46: async (state) => {
        clrt(state);
      },
      // 0x47: jt - jump if trap detected
      0x47: trapJumpHandler(jt),
      // 0x48: jnt - jump if no trap detected
      0x48: trapJumpHandler(jnt),
      // 0x49: addc - add with carry. Mirrors C# OpAddc which increments val1
      // before the addition: `val1++; sum = val0 + val1; SetOverflow(val0, val1,
      // sum, len)`. The post-increment val1 (whose sign may have flipped at
      // INT_MAX) is what SetOverflow uses, not the original val1.
      0x49: async (state, arg0, arg1) => {
        const carryIn = state.flags.c ? 1 : 0;
        arithmeticReadModifyWrite(state, arg0, arg1, (val0, val1, len) => {
          const mask = maskForLen(len);
          const sm = signMaskForLen(len);
          const val1Adj = (val1 + carryIn) & mask; // C# val1++ truncates to len-byte width
          const sum = val0 + val1Adj;
          const result = sum & mask;
          const v0Sign = (val0 & sm) !== 0;
          const v1Sign = (val1Adj & sm) !== 0;
          const rSign = (result & sm) !== 0;
          return {
            result,
            flagsPatch: {
              ...updateZS(result, len),
              v: v0Sign === v1Sign && rSign !== v0Sign,
              c: sum > mask,
            },
          };
        });
      },
      // 0x4a: subc - subtract with carry/borrow. Same post-carry val1 semantics
      // as addc: `val1++; SetOverflow(val0, val1, diff)`.
      0x4a: async (state, arg0, arg1) => {
        const borrowIn = state.flags.c ? 1 : 0;
        arithmeticReadModifyWrite(state, arg0, arg1, (val0, val1, len) => {
          const mask = maskForLen(len);
          const sm = signMaskForLen(len);
          const val1Adj = (val1 + borrowIn) & mask;
          const result = (val0 - val1Adj) & mask;
          const v0Sign = (val0 & sm) !== 0;
          const v1Sign = (val1Adj & sm) !== 0;
          const rSign = (result & sm) !== 0;
          return {
            result,
            flagsPatch: {
              ...updateZS(result, len),
              v: v0Sign !== v1Sign && rSign !== v0Sign,
              c: val0 < val1Adj,
            },
          };
        });
      },
      // 0x4b: break - user break. C# OpBreak calls SetError(BIP_0008), which
      // respects the trap mask — a job that has masked bit 0 won't actually halt.
      0x4b: async (state) => {
        setError(state, EdiabasErrorCodes.EDIABAS_BIP_0008, "BREAK");
      },
      0x4c: async (state) => {
        clrv(state.flags);
      },
      // 0x4d: eerr - make error (execute)
      0x4d: async (state) => {
        eerr(state);
      },
      0x4e: async (state) => {
        popf(state.dataStack, state.flags);
      },
      0x4f: async (state) => {
        pushf(state.dataStack, state.flags);
      },
      // 0x50: atsp - read from stack at offset. C# UpdateFlags only sets Z/S, not V.
      0x50: async (state, arg0, arg1) => {
        const offset = readPolyValue(state, arg1, 4);
        const dest = requireIntRegister(arg0);
        atsp(state.registers, state.dataStack, dest, offset);
        const length = intRegisterByteLength(dest);
        const value = getIntValue(state.registers, dest);
        const mask = length === 4 ? 0xffffffff : ((1 << (length * 8)) - 1) >>> 0;
        const signMask = 1 << (length * 8 - 1);
        const masked = value & mask;
        state.flags.z = masked === 0;
        state.flags.s = (masked & signMask) !== 0;
      },
      // 0x51: swap - reverse a slice of bytes in a string register. C# OpSwap
      // only supports `IdxImmLenImm` (start = immediate, length = immediate);
      // other addressing modes would crash on the OpData2/OpData3 cast. Also
      // does SetError(BIP_0001) on overflow.
      0x51: async (state, arg0) => {
        if (arg0.kind !== "indexed" || !arg0.length) {
          throw new EdiabasError(
            EdiabasErrorCodes.INVALID_INSTRUCTION,
            "swap: requires indexed operand with explicit length (start and length must be immediates)"
          );
        }
        const start = resolveIntValue(state.registers, arg0.index) + (arg0.offset?.value ?? 0);
        const length = resolveIntValue(state.registers, arg0.length);
        if (start + length > ARRAY_MAX_SIZE) {
          setError(state, EdiabasErrorCodes.EDIABAS_BIP_0001, "swap: range exceeds ArrayMaxSize");
          return;
        }
        swap(state.registers, arg0.base, start, length);
      },
      // 0x52: setspc - set token separator and (unconditionally) token index.
      // C# `OpSetspc` reads `arg1.GetValueData()` without checking the addr mode,
      // so a missing arg1 would crash; mirror the strictness so we surface
      // malformed bytecode early.
      0x52: async (state, arg0, arg1) => {
        if (arg1.kind === "none") {
          throw new EdiabasError(
            EdiabasErrorCodes.INVALID_INSTRUCTION,
            "setspc: arg1 (token index) is required"
          );
        }
        state.tokenSeparator = readPolyString(state, arg0);
        state.tokenIndex = readPolyValue(state, arg1, 4);
      },
      // 0x53: srevrs - reverse the byte array (NOT chars). Mirrors C# OpSrevrs.
      0x53: async (state, arg0) => {
        const ref = requireStringRegister(arg0);
        const bytes = getBinaryValue(state.registers, ref);
        const reversed = new Uint8Array(bytes.length);
        for (let i = 0; i < bytes.length; i++) reversed[i] = bytes[bytes.length - 1 - i];
        setBinaryValue(state.registers, ref, reversed);
      },
      // 0x54: stoken - extract token from arg1 at state.tokenIndex.
      // C# uses `splitString.Split(_tokenSeparator.ToCharArray())` — splits on
      // ANY character in the separator (so setspc " ;," means "split on space
      // OR semicolon OR comma"). A naive .split(separator) treats the whole
      // separator as one delimiter; build a character-set regex instead.
      0x54: async (state, arg0, arg1) => {
        const separator = state.tokenSeparator;
        if (!separator) {
          state.flags.z = true;
          return;
        }
        const source = readPolyString(state, arg1);
        const escaped = separator.replace(/[\\\]^-]/g, "\\$&");
        const splitter = separator.length === 1 ? separator : new RegExp(`[${escaped}]`);
        const parts = source.split(splitter);
        const index = state.tokenIndex - 1;
        if (index < 0 || index >= parts.length) {
          state.flags.z = true;
          return;
        }
        setStringValue(state.registers, requireStringRegister(arg0), parts[index]);
        state.flags.z = false;
      },
      0x55: async (state, arg0, arg1) => {
        parb(state.registers, state.flags, state.parameters, requireIntRegister(arg0), readPolyValue(state, arg1, 1));
      },
      0x56: async (state, arg0, arg1) => {
        parw(state.registers, state.flags, state.parameters, requireIntRegister(arg0), readPolyValue(state, arg1, 2));
      },
      0x57: async (state, arg0, arg1) => {
        parl(state.registers, state.flags, state.parameters, requireIntRegister(arg0), readPolyValue(state, arg1, 4));
      },
      0x58: async (state, arg0, arg1) => {
        pars(state.registers, state.flags, state.parameters, requireStringRegister(arg0), readPolyValue(state, arg1, 4));
      },
      // 0x59: fclose - C# uses arg0.GetValueData(1) so accepts immediates/indexed.
      0x59: async (state, arg0) => {
        fcloseValue(requireFileSystem(state), readPolyValue(state, arg0, 1));
      },
      // 0x60: fopen - filename is GetStringData (poly), handle dest is a register.
      0x60: async (state, arg0, arg1) => {
        fopenString(
          requireFileSystem(state),
          state.registers,
          requireIntRegister(arg0),
          readPolyString(state, arg1),
          state.flags
        );
      },
      // 0x61: fread - handle is poly value.
      0x61: async (state, arg0, arg1) => {
        freadHandle(
          requireFileSystem(state),
          state.registers,
          requireIntRegister(arg0),
          readPolyValue(state, arg1, 1),
          state.flags
        );
      },
      // 0x62: freadln - read line from file (handle is poly value).
      0x62: async (state, arg0, arg1) => {
        freadlnHandle(
          requireFileSystem(state),
          state.registers,
          requireStringRegister(arg0),
          readPolyValue(state, arg1, 1),
          state.flags
        );
      },
      // 0x63: fseek - handle from arg0 (poly value), offset from arg1 (poly value).
      0x63: async (state, arg0, arg1) => {
        fseekHandle(
          requireFileSystem(state),
          readPolyValue(state, arg0, 1),
          readPolyValue(state, arg1, 4)
        );
      },
      // 0x64: fseekln - handle from arg0, line index from arg1.
      0x64: async (state, arg0, arg1) => {
        fseeklnHandle(
          requireFileSystem(state),
          readPolyValue(state, arg0, 1),
          readPolyValue(state, arg1, 4)
        );
      },
      // 0x65: ftell - C# `OpFtell` writes the position and calls
      // `UpdateFlags(position, sizeof(EdValueType)=4)` — Z/S over 32-bit width
      // regardless of the destination register, V preserved.
      0x65: async (state, arg0, arg1) => {
        const dst = requireIntRegister(arg0);
        const handle = readPolyValue(state, arg1, 1);
        ftellHandle(requireFileSystem(state), state.registers, dst, handle);
        const value = getIntValue(state.registers, dst) >>> 0;
        state.flags.z = value === 0;
        state.flags.s = (value & 0x80000000) !== 0;
      },
      // 0x66: ftellln - same flag semantics as ftell.
      0x66: async (state, arg0, arg1) => {
        const dst = requireIntRegister(arg0);
        const handle = readPolyValue(state, arg1, 1);
        ftelllnHandle(requireFileSystem(state), state.registers, dst, handle);
        const value = getIntValue(state.registers, dst) >>> 0;
        state.flags.z = value === 0;
        state.flags.s = (value & 0x80000000) !== 0;
      },
      0x5a: jumpHandler(jg),
      0x5b: jumpHandler(jnl),
      0x5c: jumpHandler(jl),
      0x5d: jumpHandler(jng),
      0x5e: jumpHandler(ja),
      0x5f: jumpHandler(jna),
      // 0x67: a2fix - parse decimal/hex/binary string. C# clamps the Int64
      // parse result to [Int32.MinValue, 0xFFFFFFFF] before storing, then sets
      // Zero=false, Sign=false, Overflow=false (Carry preserved).
      0x67: async (state, arg0, arg1) => {
        const dst = requireIntRegister(arg0);
        const str = readPolyString(state, arg1);
        let value = parseConfigInt(str);
        // Replicate the C# Int64 clamp window.
        const INT32_MIN = -0x80000000;
        const UINT32_MAX = 0xffffffff;
        if (value < INT32_MIN) value = INT32_MIN;
        if (value > UINT32_MAX) value = UINT32_MAX;
        setIntValue(state.registers, dst, value);
        state.flags.z = false;
        state.flags.s = false;
        state.flags.v = false;
      },
      // 0x68: fix2flt - integer to float. C# uses arg1.GetValueData(arg1.GetDataLen()).
      0x68: async (state, arg0, arg1) => {
        const dst = requireFloatRegister(arg0);
        const len = getOperandLen(state, arg1);
        const raw = readPolyValue(state, arg1, Math.max(1, len));
        // signed-extend to float
        const signMask = 1 << (Math.max(1, len) * 8 - 1);
        const signed = (raw & signMask) ? raw - (1 << (Math.max(1, len) * 8)) : raw;
        setFloatValue(state.registers, dst, signed);
      },
      0x69: async (state, arg0, arg1) => {
        parr(state.registers, state.flags, state.parameters, requireFloatRegister(arg0), readPolyValue(state, arg1, 4));
      },
      // 0x6a: test - C# OpTest reads BOTH args polymorphically (no write).
      0x6a: async (state, arg0, arg1) => {
        const len = Math.max(1, getOperandLen(state, arg0, true));
        const val0 = readPolyValue(state, arg0, len);
        const val1 = readPolyValue(state, arg1, len);
        const mask = len === 4 ? 0xffffffff : ((1 << (len * 8)) - 1) >>> 0;
        const signMask = (1 << (len * 8 - 1)) >>> 0;
        const result = (val0 & val1) & mask;
        state.flags.z = result === 0;
        state.flags.s = (result & signMask) !== 0;
        state.flags.v = false;
      },
      0x6b: async (state, arg0) => {
        const duration = resolveIntValue(state.registers, arg0);
        await wait(state.registers, duration as TimeValueRef);
      },
      0x6c: async (state, arg0) => {
        getdate(state.registers, requireDateTimeDestination(arg0));
      },
      0x6d: async (state, arg0) => {
        gettime(state.registers, requireDateTimeDestination(arg0));
      },
      // 0x6e: xbatt - get battery voltage
      0x6e: async (state, arg0) => {
        await xbatt(state.registers, requireCommunicationInterface(state), requireIntRegister(arg0));
      },
      // 0x6f: tosp - to stack pointer (legacy opcode; EdiabasLib has null)
      0x6f: async () => {
        // Legacy/unused in EdiabasLib; keep no-op stub for compatibility.
      },
      // 0x70: xdownl - download (legacy opcode; EdiabasLib has null)
      0x70: async () => {
        // Legacy/unused in EdiabasLib; keep no-op stub for compatibility.
      },
      // 0x71: xgetport - port index from arg1 is read polymorphically.
      0x71: async (state, arg0, arg1) => {
        await xgetport(
          state.registers,
          requireCommunicationInterface(state),
          requireIntRegister(arg0),
          readPolyValue(state, arg1, 1)
        );
      },
      0x72: async (state, arg0) => {
        await xignit(state.registers, requireCommunicationInterface(state), requireIntRegister(arg0));
      },
      0x73: async (state, arg0) => {
        await xloopt(state.registers, requireCommunicationInterface(state), requireIntRegister(arg0));
      },
      // 0x74: xprog - program voltage; arg0 is polymorphic int.
      0x74: async (state, arg0) => {
        await xprog(
          state.registers,
          requireCommunicationInterface(state),
          readPolyValue(state, arg0, 1)
        );
      },
      0x75: async (state, arg0, arg1) => {
        await xraw(
          state.registers,
          requireCommunicationInterface(state),
          requireStringRegister(arg0),
          requireStringRegister(arg1)
        );
      },
      // 0x76: xsetport - source bytes polymorphic; value is poly int.
      0x76: async (state, arg0, arg1) => {
        const value = readPolyValue(state, arg1, 1);
        const portData = readPolyBytes(state, arg0);
        const iface = requireCommunicationInterface(state);
        if (!iface.setPort) {
          throw new EdiabasError(EdiabasErrorCodes.EDIABAS_IFH_0056, "Set port is not supported");
        }
        await iface.setPort(portData[0] ?? 0, value);
      },
      // 0x77: xsireset - service interval reset; time is polymorphic.
      0x77: async (state, arg0) => {
        await xsireset(requireCommunicationInterface(state), readPolyValue(state, arg0, 4));
      },
      // 0x78: xstoptr - stop transfer (legacy opcode; EdiabasLib has null)
      0x78: async () => {
        // Legacy/unused in EdiabasLib; keep no-op stub for compatibility.
      },
      // 0x79: fix2hex - integer → "0x{HEX}" (zero-padded to byte width).
      // Mirrors C# OpFix2Hex which always emits the "0x" prefix, pads to
      // 2/4/8 hex digits, and uses len=1 when arg1 is a byte-array source
      // (so only the first byte is formatted, NOT the whole array).
      0x79: async (state, arg0, arg1) => {
        const len = fixFormatLen(state, arg1);
        const raw = readPolyValue(state, arg1, len);
        const padded = (raw >>> 0).toString(16).toUpperCase().padStart(len * 2, "0");
        writePolyString(state, arg0, `0x${padded}`);
      },
      // 0x7a: fix2dez - signed integer → decimal string.
      // Same byte-array-source rule as fix2hex.
      0x7a: async (state, arg0, arg1) => {
        const len = fixFormatLen(state, arg1);
        const raw = readPolyValue(state, arg1, len);
        const signMask = 1 << (len * 8 - 1);
        const signed = (raw & signMask) ? raw - (1 << (len * 8)) : raw;
        writePolyString(state, arg0, signed.toString(10));
      },
      // 0x7b: tabset - C# uses GetStringData on arg0.
      0x7b: async (state, arg0) => {
        tabsetOp(state.flags, this.tableRegistry, state.tableState, readPolyString(state, arg0));
      },
      // 0x7c: tabseek - both args polymorphic strings.
      0x7c: async (state, arg0, arg1) => {
        tabseekOp(state.flags, state.tableState, readPolyString(state, arg0), readPolyString(state, arg1));
      },
      // 0x7d: tabget - dest is a string register; column name polymorphic.
      0x7d: async (state, arg0, arg1) => {
        tabgetOp(state.registers, state.flags, state.tableState, requireStringRegister(arg0), readPolyString(state, arg1));
      },
      // 0x7e: strcat - concatenate strings, silently truncating the source to
      // fit `ArrayMaxSize`. C# `OpStrcat` uses `arg0.GetDataLen()` (raw byte
      // length of the destination register, ignoring null trim) as the budget
      // base, so the truncation budget is in bytes — not in UTF-8 characters.
      // We compute byte-length via the cp1252 encoding to match.
      0x7e: async (state, arg0, arg1) => {
        const dest = requireStringRegister(arg0);
        const leftBytes = getBinaryValue(state.registers, dest);
        let rightBytes = readPolyBytes(state, arg1);
        const remaining = ARRAY_MAX_SIZE - leftBytes.length;
        if (rightBytes.length > Math.max(0, remaining)) {
          rightBytes = rightBytes.subarray(0, Math.max(0, remaining));
        }
        const merged = new Uint8Array(leftBytes.length + rightBytes.length);
        merged.set(leftBytes);
        merged.set(rightBytes, leftBytes.length);
        setBinaryValue(state.registers, dest, merged);
      },
      0x7f: async (state, arg0) => {
        pary(state.registers, state.flags, state.parameters, requireStringRegister(arg0));
      },
      0x80: async (state, arg0) => {
        parn(state.registers, state.flags, state.parameters, requireIntRegister(arg0));
      },
      // 0x81: ergc - result char (signed byte). C# uses GetStringData/GetValueData(1).
      0x81: async (state, arg0, arg1) => {
        const name = readPolyString(state, arg0);
        const value = readPolyValue(state, arg1, 1);
        ergc(state.registers, state.results, name, value);
      },
      // 0x82: ergl - result long (signed dword).
      0x82: async (state, arg0, arg1) => {
        const name = readPolyString(state, arg0);
        const value = readPolyValue(state, arg1, 4);
        ergl(state.registers, state.results, name, value);
      },
      // 0x83: tabline - line number is polymorphic int.
      0x83: async (state, arg0) => {
        tablineOp(state.flags, state.tableState, readPolyValue(state, arg0, 4));
      },
      // 0x84: xsendr - send/receive (legacy opcode; EdiabasLib has null)
      0x84: async (state, arg0) => {
        // Legacy/unused in EdiabasLib; clear response for compatibility.
        setStringValue(state.registers, requireStringRegister(arg0), "");
      },
      // 0x85: xrecv - receive (legacy opcode; EdiabasLib has null)
      0x85: async (state, arg0) => {
        // Legacy/unused in EdiabasLib; clear destination for compatibility.
        setStringValue(state.registers, requireStringRegister(arg0), "");
      },
      // 0x86: xinfo - interface info (legacy opcode; EdiabasLib has null)
      0x86: async (state, arg0) => {
        // Legacy/unused in EdiabasLib; return empty string for compatibility.
        setStringValue(state.registers, requireStringRegister(arg0), "");
      },
      0x87: async (state, arg0, arg1) => {
        flt2a(state.registers, requireStringRegister(arg0), requireFloatRegister(arg1), state.floatPrecision);
      },
      0x88: async (state, arg0) => {
        state.floatPrecision = resolveIntValue(state.registers, arg0);
      },
      // 0x89: cfgig - config get int
      0x89: async (state, arg0, arg1) => {
        const dest = requireIntRegister(arg0);
        const key = resolveStringValue(state.registers, arg1).toUpperCase();
        const value = state.config.get(key);
        if (value != null) {
          setIntValue(state.registers, dest, parseConfigInt(value));
        }
      },
      // 0x8a: cfgsg - config get string
      0x8a: async (state, arg0, arg1) => {
        const dest = requireStringRegister(arg0);
        const key = resolveStringValue(state.registers, arg1).toUpperCase();
        const value = state.config.get(key);
        if (value != null) {
          setBinaryValue(state.registers, dest, utf8ToCp1252(value));
        }
      },
      // 0x8b: cfgis - config set int
      0x8b: async (state, arg0, arg1) => {
        const key = resolveStringValue(state.registers, arg0).toUpperCase();
        const value = resolveIntValue(state.registers, arg1);
        state.config.set(key, `${value}`);
      },
      // 0x8c: a2y - ASCII text → byte array.
      // C# OpA2Y parses ASCII hex pairs separated by ' ', ',' or ';'.
      0x8c: async (state, arg0, arg1) => {
        const stringData = readPolyString(state, arg1);
        const result: number[] = [];
        if (stringData.length > 0) {
          // Trim at the first character that isn't a hex digit, comma, semicolon or space.
          const lower = stringData.toLowerCase();
          let trimEnd = lower.length;
          for (let i = 0; i < lower.length; i++) {
            const ch = lower[i];
            const isDigit = ch >= "0" && ch <= "9";
            const isHex = ch >= "a" && ch <= "f";
            if (!(isDigit || isHex || ch === " " || ch === "," || ch === ";")) {
              trimEnd = i;
              break;
            }
          }
          const trimmed = stringData.slice(0, trimEnd);
          let exitLoop = false;
          const groups = trimmed.split(/[,;]/);
          for (const group of groups) {
            const groupTrim = group.trim();
            if (groupTrim.length === 0) {
              for (let j = 0; j < group.length + 1; j++) result.push(0);
            } else {
              const subParts = groupTrim.split(/\s+/);
              for (const sub of subParts) {
                if (sub.length === 0) continue;
                const value = Number.parseInt(sub, 16);
                if (Number.isNaN(value)) {
                  exitLoop = true;
                  break;
                }
                result.push(value & 0xff);
              }
            }
            if (exitLoop) break;
          }
        }
        writePolyBytes(state, arg0, Uint8Array.from(result));
      },
      // 0x8d: xparraw - raw parameters (legacy opcode; EdiabasLib has null)
      0x8d: async () => {
        // Legacy/unused in EdiabasLib; keep no-op stub for compatibility.
      },
      // 0x8e: hex2y - hex string → byte array (BEST2 ascii2hex).
      // C# OpHex2Y parses the raw string without trimming; any whitespace or
      // odd-length input fails the parse → empty array + Carry=true.
      0x8e: async (state, arg0, arg1) => {
        const valueStr = readPolyString(state, arg1);
        const result: number[] = [];
        let parseFailed = false;
        if (valueStr.length % 2 !== 0) {
          parseFailed = true;
        } else {
          for (let i = 0; i < valueStr.length; i += 2) {
            const pair = valueStr.slice(i, i + 2);
            if (!/^[0-9a-fA-F]{2}$/.test(pair)) {
              parseFailed = true;
              break;
            }
            result.push(Number.parseInt(pair, 16));
          }
        }
        if (parseFailed) {
          writePolyBytes(state, arg0, new Uint8Array());
          state.flags.c = true;
        } else {
          writePolyBytes(state, arg0, Uint8Array.from(result));
          state.flags.c = false;
        }
      },
      // 0x8f: strcmp - polymorphic GetStringData on both args.
      // C# OpStrcmp: Zero = String.Compare(s1,s2,Ordinal) != 0  (Z=true when DIFFER).
      0x8f: async (state, arg0, arg1) => {
        const left = readPolyString(state, arg0);
        const right = readPolyString(state, arg1);
        // Ordinal compare → Z=true when strings differ (BEST2 strcmp convention).
        state.flags.z = left !== right;
      },
      // 0x90: strlen - C# uses arg1.GetStringData(), accepts any string-array source.
      0x90: async (state, arg0, arg1) => {
        const dest = requireIntRegister(arg0);
        const length = readPolyString(state, arg1).length;
        setIntValue(state.registers, dest, length);
        const byteLength = intRegisterByteLength(dest);
        const mask = byteLength === 1 ? 0xff : byteLength === 2 ? 0xffff : 0xffffffff;
        const signMask = byteLength === 1 ? 0x80 : byteLength === 2 ? 0x8000 : 0x80000000;
        const masked = length & mask;
        state.flags.z = masked === 0;
        state.flags.s = (masked & signMask) !== 0;
        state.flags.v = false;
      },
      // 0x91: y2bcd - byte array → BCD ASCII string. C# uses ValueToBcd.
      // Each nibble: 0-9 → '0'-'9', else '*'.
      0x91: async (state, arg0, arg1) => {
        const bytes = readPolyBytes(state, arg1);
        let bcd = "";
        for (const byte of bytes) {
          bcd += nibbleToBcdChar(byte >> 4) + nibbleToBcdChar(byte & 0x0f);
        }
        writePolyString(state, arg0, bcd);
      },
      // 0x92: y2hex - byte array → uppercase hex ASCII string.
      0x92: async (state, arg0, arg1) => {
        const bytes = readPolyBytes(state, arg1);
        let hex = "";
        for (const byte of bytes) {
          hex += byte.toString(16).padStart(2, "0").toUpperCase();
        }
        writePolyString(state, arg0, hex);
      },
      0x93: async (state, arg0, arg1) => {
        const key = arg0.kind === "string" ? arg0.value : requireStringRegister(arg0);
        const value = resolveBinaryValue(state.registers, arg1);
        shmset(state.registers, state.sharedMemory, key, value);
      },
      0x94: async (state, arg0, arg1) => {
        const destination = requireStringRegister(arg0);
        const key = arg1.kind === "string" ? arg1.value : requireStringRegister(arg1);
        shmget(state.registers, state.sharedMemory, destination, key, state.flags);
      },
      // 0x95: ergsysi - system-info result. C# routes these via SetSysResultData
      // with ResultType.TypeI (signed Int16, sign-extended into Int64). We
      // sign-extend the 16-bit value before storing so negative values are
      // preserved.
      0x95: async (state, arg0, arg1) => {
        const name = readPolyString(state, arg0);
        const rawUnsigned = readPolyValue(state, arg1, 2) & 0xffff;
        // Sign-extend Int16 → JS Number (preserves negative values).
        const value = rawUnsigned & 0x8000 ? rawUnsigned - 0x10000 : rawUnsigned;
        if (name === "!INITIALISIERUNG") {
          if (value !== 0) {
            state.requestInit = true;
          }
          return;
        }
        state.systemResults.record(name, "int", value);
      },
      // 0x96: flt2fix - float → integer. C# `OpFlt2Fix` truncates the float to
      // an `EdValueType` and calls `UpdateFlags(value, sizeof(EdValueType)=4)` —
      // Z/S over 32-bit width regardless of the destination register, V preserved.
      0x96: async (state, arg0, arg1) => {
        const dst = requireIntRegister(arg0);
        const value = readPolyFloat(state, arg1);
        const truncated = Math.trunc(value);
        setIntValue(state.registers, dst, truncated);
        const value32 = truncated >>> 0;
        state.flags.z = value32 === 0;
        state.flags.s = (value32 & 0x80000000) !== 0;
      },
      // 0x97: iupdate - update progress text
      0x97: async (state, arg0) => {
        state.progressText = resolveStringValue(state.registers, arg0);
      },
      // 0x98: irange - set progress range
      0x98: async (state, arg0) => {
        state.progressRange = resolveIntValue(state.registers, arg0);
        state.progressPos = -1;
      },
      // 0x99: iincpos - increment progress position
      0x99: async (state, arg0) => {
        const inc = resolveIntValue(state.registers, arg0);
        if (state.progressPos < 0) {
          state.progressPos = inc;
        } else {
          state.progressPos += inc;
        }
        if (state.progressPos > state.progressRange) {
          state.progressPos = state.progressRange;
        }
      },
      // 0x9a: tabseeku - column name polymorphic string; key polymorphic int.
      0x9a: async (state, arg0, arg1) => {
        tabseekuOp(state.flags, state.tableState, readPolyString(state, arg0), readPolyValue(state, arg1, 4));
      },
      // 0x9b: flt2y4 - float → 4-byte little-endian at indexed offset.
      // C# `OpFlt2Y4` casts `arg0.OpData2` directly to EdValueType, which only
      // works in `IdxImm` mode (immediate index, no length). Reject other
      // addressing modes to match.
      0x9b: async (state, arg0, arg1) => {
        if (arg0.kind !== "indexed" || arg0.index.kind !== "immediate" || arg0.length) {
          throw new EdiabasError(
            EdiabasErrorCodes.INVALID_INSTRUCTION,
            "flt2y4: requires indexed operand with immediate index and no length"
          );
        }
        const value = readPolyFloat(state, arg1);
        const buffer = new ArrayBuffer(4);
        new DataView(buffer).setFloat32(0, value, true);
        writeFloatBytesAt(state, arg0, new Uint8Array(buffer));
      },
      // 0x9c: flt2y8 - float → 8-byte little-endian at indexed offset.
      0x9c: async (state, arg0, arg1) => {
        if (arg0.kind !== "indexed" || arg0.index.kind !== "immediate" || arg0.length) {
          throw new EdiabasError(
            EdiabasErrorCodes.INVALID_INSTRUCTION,
            "flt2y8: requires indexed operand with immediate index and no length"
          );
        }
        const value = readPolyFloat(state, arg1);
        const buffer = new ArrayBuffer(8);
        new DataView(buffer).setFloat64(0, value, true);
        writeFloatBytesAt(state, arg0, new Uint8Array(buffer));
      },
      // 0x9d: y42flt - 4 bytes → IEEE 754 single. C# `BitConverter.ToSingle`
      // throws if `dataArray.Length < 4`; surface the same strictness so we
      // catch malformed bytecode instead of silently zero-padding.
      0x9d: async (state, arg0, arg1) => {
        const dst = requireFloatRegister(arg0);
        const bytes = readPolyBytes(state, arg1);
        if (bytes.length < 4) {
          throw new EdiabasError(
            EdiabasErrorCodes.INVALID_INSTRUCTION,
            `y42flt: source has ${bytes.length} bytes, need 4`
          );
        }
        const buffer = new ArrayBuffer(4);
        const view = new DataView(buffer);
        for (let i = 0; i < 4; i++) view.setUint8(i, bytes[i]);
        setFloatValue(state.registers, dst, view.getFloat32(0, true));
      },
      // 0x9e: y82flt - 8 bytes → IEEE 754 double. Same strictness as y42flt.
      0x9e: async (state, arg0, arg1) => {
        const dst = requireFloatRegister(arg0);
        const bytes = readPolyBytes(state, arg1);
        if (bytes.length < 8) {
          throw new EdiabasError(
            EdiabasErrorCodes.INVALID_INSTRUCTION,
            `y82flt: source has ${bytes.length} bytes, need 8`
          );
        }
        const buffer = new ArrayBuffer(8);
        const view = new DataView(buffer);
        for (let i = 0; i < 8; i++) view.setUint8(i, bytes[i]);
        setFloatValue(state.registers, dst, view.getFloat64(0, true));
      },
      // 0x9f: plink - C# OpPlink is a no-op (logs only). Optional linker support kept
      // so unit tests can install handlers without altering binary semantics.
      0x9f: async (state, arg0) => {
        const id = readPolyValue(state, arg0, 4);
        const handler = state.procedureLinker?.(id);
        if (handler) {
          plink(state.procedureRegistry, id, handler);
        }
      },
      // 0xa0: pcall - procedure call (legacy opcode; EdiabasLib has null)
      0xa0: async () => {
        // Legacy/unused in EdiabasLib; keep no-op stub for compatibility.
      },
      // 0xa2: plinkv - C# OpPlinkv is a no-op (logs only). Don't overwrite registry.
      0xa2: async () => {
        // No-op (matches C# behavior).
      },
      // 0xa3/0xa5/0xa7: ppush / ppushflt / ppushy — C# no-ops (log "Ignoring";
      // procedure plugins were never implemented in EdiabasLib). We mirror that
      // exactly so SGBDs see the same behaviour. The standalone `ppush*`
      // helpers in `operations/procedures.ts` remain for any tests/tools that
      // want to model a real procedure stack.
      0xa3: async () => { /* no-op */ },
      0xa5: async () => { /* no-op */ },
      0xa7: async () => { /* no-op */ },
      // 0xa4: ppop - C# `OpPpop` resets arg0 to 0 and calls UpdateFlags(0, len).
      0xa4: async (state, arg0) => {
        const dst = requireIntRegister(arg0);
        setIntValue(state.registers, dst, 0);
        const len = intRegisterByteLength(dst);
        const zs = updateZS(0, len);
        state.flags.z = zs.z; // = true
        state.flags.s = zs.s; // = false
      },
      // 0xa6: ppopflt - C# resets arg0 to 0.0 and Overflow=false.
      0xa6: async (state, arg0) => {
        const dst = requireFloatRegister(arg0);
        setFloatValue(state.registers, dst, 0);
        state.flags.v = false;
      },
      // 0xa8: ppopy - C# resets arg0 to an empty byte array.
      0xa8: async (state, arg0) => {
        const dst = requireStringRegister(arg0);
        setBinaryValue(state.registers, dst, new Uint8Array());
      },
      // 0xa9: pjtsr - procedure jump to subroutine (stub: no-op)
      0xa9: async () => {
        // Jump to subroutine - not implemented
      },
      // 0xaa: tabsetex - table set extended. C# optionally loads a different file from arg1
      // before searching for the table. We honour arg1 if a tableLoader was provided to the
      // interpreter; otherwise fall back to local registry.
      0xaa: async (state, arg0, arg1) => {
        const baseFile = arg1.kind !== "none" ? readPolyString(state, arg1) : "";
        const registry = baseFile.length > 0 && this.tableLoader
          ? (this.tableLoader(baseFile) ?? this.tableRegistry)
          : this.tableRegistry;
        tabsetOp(state.flags, registry, state.tableState, readPolyString(state, arg0));
      },
      0xa1: async (state, arg0, arg1) => {
        fcomp(state.registers, state.flags, requireFloatRegister(arg0), requireFloatRegister(arg1));
      },
      // 0xab: ufix2dez - unsigned int → decimal string.
      // Same byte-array-source rule as fix2hex.
      0xab: async (state, arg0, arg1) => {
        const len = fixFormatLen(state, arg1);
        const raw = readPolyValue(state, arg1, len) >>> 0;
        writePolyString(state, arg0, raw.toString(10));
      },
      // 0xac: generr - raise the requested error code.
      // C# OpGenerr reads arg0.GetValueData() at its natural width (no
      // truncation), validates the numeric value is in
      // EDIABAS_RUN_0000 (250) .. EDIABAS_ERROR_LAST (~470), then calls
      // RaiseError(code) (hard throw, bypasses trap mask). Codes outside
      // the range produce BIP_0001. We do the same with the requested
      // numeric code preserved.
      0xac: async (state, arg0) => {
        const len = Math.max(1, getOperandLen(state, arg0));
        const errorCode = readPolyValue(state, arg0, len);
        const EDIABAS_RUN_0000 = 250;
        const EDIABAS_ERROR_LAST = 470;
        if (errorCode < EDIABAS_RUN_0000 || errorCode > EDIABAS_ERROR_LAST) {
          throw new EdiabasError(
            EdiabasErrorCodes.EDIABAS_BIP_0001,
            `generr: invalid error code ${errorCode}`
          );
        }
        throw new EdiabasError(errorCode as EdiabasErrorCode, `GENERR ${errorCode}`);
      },
      // 0xad: ticks - get system ticks (ms since epoch)
      0xad: async (state, arg0) => {
        setIntValue(state.registers, requireIntRegister(arg0), Date.now() & 0xffffffff);
      },
      // 0xae: waitex - wait extended (same as wait)
      0xae: async (state, arg0) => {
        const durationMs = resolveIntValue(state.registers, arg0);
        await new Promise((resolve) => setTimeout(resolve, Math.max(0, durationMs)));
      },
      // 0xaf: xopen - open communication (legacy opcode; EdiabasLib has null)
      0xaf: async () => {
        // Legacy/unused in EdiabasLib; keep no-op stub for compatibility.
      },
      // 0xb0: xclose - close communication (legacy opcode; EdiabasLib has null)
      0xb0: async () => {
        // Legacy/unused in EdiabasLib; keep no-op stub for compatibility.
      },
      // 0xb1: xcloseex - close communication extended (legacy opcode; EdiabasLib has null)
      0xb1: async () => {
        // Legacy/unused in EdiabasLib; keep no-op stub for compatibility.
      },
      // 0xb2: xswitch - switch interface (legacy opcode; EdiabasLib has null)
      0xb2: async () => {
        // Legacy/unused in EdiabasLib; keep no-op stub for compatibility.
      },
      // 0xb3: xsendex - send extended (legacy opcode; EdiabasLib has null)
      0xb3: async () => {
        // Legacy/unused in EdiabasLib; keep no-op stub for compatibility.
      },
      // 0xb4: xrecvex - receive extended (legacy opcode; EdiabasLib has null)
      0xb4: async (state, arg0) => {
        // Legacy/unused in EdiabasLib; clear destination for compatibility.
        setStringValue(state.registers, requireStringRegister(arg0), "");
      },
      // 0xb5: ssize - return ArrayMaxBufSize (configured constant). Mirrors C# OpSsize.
      // Note: arg1 is unused; C# only inspects arg0 to determine where to write.
      0xb5: async (state, arg0) => {
        if (arg0.kind === "register" && arg0.ref.kind === "S") {
          // Write into a string register: writes ArrayMaxBufSize as little-endian dword bytes.
          writePolyValue(state, arg0, ARRAY_MAX_BUF_SIZE, 4);
        } else {
          setIntValue(state.registers, requireIntRegister(arg0), ARRAY_MAX_BUF_SIZE);
        }
      },
      0xb6: async (state, arg0) => {
        tabcolsOp(state.registers, state.flags, state.tableState, requireIntRegister(arg0));
      },
      0xb7: async (state, arg0) => {
        tabrowsOp(state.registers, state.flags, state.tableState, requireIntRegister(arg0));
      },
    };
    return handlers[opcode];
  }

  private controlFlowState(state: InterpreterState): ExecutionState {
    return {
      pc: state.pc,
      flags: state.flags,
      callStack: state.callStack,
    };
  }
}
