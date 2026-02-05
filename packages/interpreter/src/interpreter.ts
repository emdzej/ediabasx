import { cp1252ToUtf8, utf8ToCp1252, EdiabasError, EdiabasErrorCodes } from "@ediabas/core";
import type { PrgFile, PrgJob } from "@ediabas/best-parser";
import { RegisterSet } from "./registers";
import { Flags } from "./flags";
import { CallStack } from "./callstack";
import { DataStack } from "./stack";
import {
  add,
  sub,
  mul,
  div,
  and as andOp,
  or as orOp,
  xor as xorOp,
  not as notOp,
  shl,
  shr,
  cmp,
  test,
  move,
  clear,
} from "./operations/arithmetic";
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
} from "./operations/control-flow";
import { clrc, setc, clrv } from "./operations/flags";
import { push, pop, pushf, popf, atsp, swap } from "./operations/stack";
import {
  scat,
  slen,
  scmp,
  srev,
  strcmp,
  strlen,
  strcat,
  a2fix,
  fix2hex,
  fix2dez,
  ufix2dez,
} from "./operations/string";
import {
  fadd,
  fsub,
  fmul,
  fdiv,
  fsetImm,
  fcomp,
  a2flt,
  flt2a,
  fix2flt,
  flt2fix,
} from "./operations/float";
import {
  type JobResult,
  ResultCollector,
  ergb,
  ergw,
  ergd,
  ergi,
  ergr,
  ergs,
  ergy,
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
} from "./operations/time";
import { SharedMemory, shmset, shmget } from "./operations/shared-memory";
import {
  type CommunicationInterface,
  xconnect,
  xhangup,
  xsetpar,
  xawlen,
  xsend,
  xsendf,
  xrequf,
  xstopf,
  xkeyb,
  xstate,
  xboot,
  xreset,
  xtype,
  xvers,
  xreps,
  xgetport,
  xsetport,
  xignit,
  xloopt,
  xprog,
  xraw,
  xsireset,
  xopen,
  xclose,
  xcloseex,
  xswitch,
  xsendex,
  xrecvex,
} from "./operations/communication";
import {
  type FileSystem,
  fopen,
  fclose,
  fread,
  fwrite,
  fseek,
  fseekln,
  feof,
} from "./operations/file";
import {
  type ProcedureHandler,
  ProcedureRegistry,
  ProcedureStack,
  plink,
  pcall,
  ppush,
  ppushflt,
  ppushy,
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
import type { FloatRegisterRef, IntRegisterRef, StringRegisterRef } from "./operations/register-refs";
import { getFloatValue, getIntValue, getStringValue, setStringValue } from "./operations/register-values";

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
  timer: Timer;
  tokenSeparator: string;
  tokenIndex: number;
  tableState: TableState;
  communicationInterface?: CommunicationInterface;
  fileSystem?: FileSystem;
  procedureRegistry: ProcedureRegistry;
  procedureStack: ProcedureStack;
  procedureLinker?: (id: number) => ProcedureHandler | undefined;
};

export type ExecutionOptions = {
  registers?: RegisterSet;
  flags?: Flags;
  callStack?: CallStack;
  dataStack?: DataStack;
  parameters?: ParameterSet;
  results?: ResultCollector;
  sharedMemory?: SharedMemory;
  timer?: Timer;
  tableState?: TableState;
  communicationInterface?: CommunicationInterface;
  fileSystem?: FileSystem;
  procedureRegistry?: ProcedureRegistry;
  procedureStack?: ProcedureStack;
  procedureLinker?: (id: number) => ProcedureHandler | undefined;
};

export type InterpreterSnapshot = {
  pc: number;
  halted: boolean;
  registers: ReturnType<RegisterSet["snapshot"]>;
  flags: ReturnType<Flags["snapshot"]>;
  callStack: number[];
  dataStack: number[];
};

function readInt16(view: DataView, offset: number): number {
  return view.getInt16(offset, true);
}

function readInt32(view: DataView, offset: number): number {
  return view.getInt32(offset, true);
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

function resolveFloatValue(registers: RegisterSet, operand: Operand): number {
  switch (operand.kind) {
    case "immediate":
      return operand.value;
    case "register":
      if (operand.ref.kind !== "F") {
        throw new EdiabasError(
          EdiabasErrorCodes.REGISTER_ERROR,
          "Expected float register"
        );
      }
      return getFloatValue(registers, operand.ref);
    default:
      throw new EdiabasError(
        EdiabasErrorCodes.INVALID_INSTRUCTION,
        "Expected float operand"
      );
  }
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
      const base = getStringValue(registers, operand.base);
      const bytes = utf8ToCp1252(base);
      const start = resolveIntValue(registers, operand.index) + (operand.offset?.value ?? 0);
      const length = operand.length
        ? resolveIntValue(registers, operand.length)
        : bytes.length - start;
      const slice = bytes.slice(Math.max(0, start), Math.max(0, start) + Math.max(0, length));
      return cp1252ToUtf8(slice);
    }
    default:
      throw new EdiabasError(
        EdiabasErrorCodes.INVALID_INSTRUCTION,
        "Expected string operand"
      );
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
      const base = getStringValue(registers, operand.base);
      const bytes = utf8ToCp1252(base);
      const start = resolveIntValue(registers, operand.index) + (operand.offset?.value ?? 0);
      const length = operand.length
        ? resolveIntValue(registers, operand.length)
        : bytes.length - start;
      return bytes.slice(Math.max(0, start), Math.max(0, start) + Math.max(0, length));
    }
    default:
      throw new EdiabasError(
        EdiabasErrorCodes.INVALID_INSTRUCTION,
        "Expected binary operand"
      );
  }
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
      return { operand: { kind: "immediate", value }, nextOffset: offset + 1 };
    }
    case OpAddrModes.IMM16: {
      const value = readInt16(view, offset);
      return { operand: { kind: "immediate", value }, nextOffset: offset + 2 };
    }
    case OpAddrModes.IMM32: {
      const value = readInt32(view, offset);
      return { operand: { kind: "immediate", value }, nextOffset: offset + 4 };
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

export class Interpreter {
  private readonly prg: PrgFile;
  private readonly code: Uint8Array;
  private context: InterpreterState | null = null;
  private readonly tableRegistry: ReturnType<typeof createTableRegistry>;

  constructor(prg: PrgFile) {
    this.prg = prg;
    this.code = prg.code;
    this.tableRegistry = createTableRegistry(prg.tables);
  }

  start(jobName: string, options: ExecutionOptions = {}): void {
    const job = resolveJobEntry(this.prg, jobName);
    const binaryOffset = resolveBinaryJobOffset(this.prg, jobName);
    const offset = job?.offset ?? binaryOffset ?? 0;
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
    const timer = options.timer ?? new Timer();
    const procedureRegistry = options.procedureRegistry ?? new ProcedureRegistry();
    const procedureStack = options.procedureStack ?? new ProcedureStack();
    const tableState = options.tableState ?? { activeTable: null, rowIndex: 0 };

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
      timer,
      tokenSeparator: "",
      tokenIndex: 0,
      tableState,
      communicationInterface: options.communicationInterface,
      fileSystem: options.fileSystem,
      procedureRegistry,
      procedureStack,
      procedureLinker: options.procedureLinker,
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

    const { opcode, arg0, arg1, nextPc } = decodeInstruction(this.code, context.pc);
    context.pc = nextPc;

    const handler = this.getHandler(opcode);
    if (!handler) {
      throw new EdiabasError(
        EdiabasErrorCodes.INVALID_INSTRUCTION,
        `Unknown opcode 0x${opcode.toString(16).toUpperCase().padStart(2, "0")}`
      );
    }

    const result = await handler(context, arg0, arg1);
    if (result?.halted) {
      context.halted = true;
    }
    if (typeof result?.pc === "number") {
      context.pc = result.pc;
    }
    return !context.halted;
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
    };
  }

  private getHandler(opcode: number): ((state: InterpreterState, arg0: Operand, arg1: Operand) => Promise<{ pc?: number; halted?: boolean } | void>) | undefined {
    const handlers: Record<number, (state: InterpreterState, arg0: Operand, arg1: Operand) => Promise<{ pc?: number; halted?: boolean } | void>> = {
      0x00: async (state, arg0, arg1) => {
        move(state.registers, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x01: async (state, arg0) => {
        clear(state.registers, requireIntRegister(arg0));
      },
      0x02: async (state, arg0, arg1) => {
        cmp(state.registers, state.flags, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x03: async (state, arg0, arg1) => {
        sub(state.registers, state.flags, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x04: async (state, arg0, arg1) => {
        add(state.registers, state.flags, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x05: async (state, arg0, arg1) => {
        mul(state.registers, state.flags, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x06: async (state, arg0, arg1) => {
        div(state.registers, state.flags, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x07: async (state, arg0, arg1) => {
        andOp(state.registers, state.flags, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x08: async (state, arg0, arg1) => {
        orOp(state.registers, state.flags, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x09: async (state, arg0, arg1) => {
        xorOp(state.registers, state.flags, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x0a: async (state, arg0) => {
        notOp(state.registers, state.flags, requireIntRegister(arg0));
      },
      0x0b: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        const result = jmp(this.controlFlowState(state), offset);
        return { pc: result.newPc };
      },
      0x0c: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        const result = call(this.controlFlowState(state), offset);
        return { pc: result.newPc };
      },
      0x0d: async (state) => {
        const result = ret(this.controlFlowState(state));
        return { pc: result.newPc };
      },
      0x0e: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        return { pc: jc(this.controlFlowState(state), offset).newPc };
      },
      0x0f: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        return { pc: jnc(this.controlFlowState(state), offset).newPc };
      },
      0x10: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        return { pc: jz(this.controlFlowState(state), offset).newPc };
      },
      0x11: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        return { pc: jnz(this.controlFlowState(state), offset).newPc };
      },
      0x12: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        return { pc: jv(this.controlFlowState(state), offset).newPc };
      },
      0x13: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        return { pc: jnv(this.controlFlowState(state), offset).newPc };
      },
      0x14: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        return { pc: jmi(this.controlFlowState(state), offset).newPc };
      },
      0x15: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        return { pc: jpl(this.controlFlowState(state), offset).newPc };
      },
      0x16: async (state) => {
        clrc(state.flags);
      },
      0x17: async (state) => {
        setc(state.flags);
      },
      0x18: async (state, arg0, arg1) => {
        shr(state.registers, state.flags, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x19: async (state, arg0, arg1) => {
        shl(state.registers, state.flags, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x1a: async (state, arg0, arg1) => {
        shr(state.registers, state.flags, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x1b: async (state, arg0, arg1) => {
        shl(state.registers, state.flags, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x1c: async () => {
        // nop
      },
      0x1d: async () => ({ halted: true }),
      0x1e: async (state, arg0) => {
        push(state.registers, state.dataStack, requireIntRegister(arg0));
      },
      0x1f: async (state, arg0) => {
        pop(state.registers, state.dataStack, requireIntRegister(arg0));
      },
      0x20: async (state, arg0, arg1) => {
        scmp(state.registers, state.flags, requireStringRegister(arg0), requireStringRegister(arg1));
      },
      0x21: async (state, arg0, arg1) => {
        if (arg1.kind === "string" || arg1.kind === "indexed") {
          const dest = requireStringRegister(arg0);
          const value = resolveStringValue(state.registers, arg1);
          setStringValue(state.registers, dest, getStringValue(state.registers, dest) + value);
          return;
        }
        scat(state.registers, requireStringRegister(arg0), requireStringRegister(arg1));
      },
      0x22: async (state, arg0, arg1) => {
        const dest = requireStringRegister(arg0);
        const len = Math.max(0, resolveIntValue(state.registers, arg1));
        const bytes = utf8ToCp1252(getStringValue(state.registers, dest));
        const newBytes = bytes.slice(0, Math.max(0, bytes.length - len));
        setStringValue(state.registers, dest, cp1252ToUtf8(newBytes));
      },
      0x23: async (state, arg0, arg1) => {
        slen(state.registers, requireIntRegister(arg0), requireStringRegister(arg1));
      },
      0x24: async (state, arg0, arg1) => {
        const target = requireIndexed(arg0);
        const insert = resolveStringValue(state.registers, arg1);
        const base = getStringValue(state.registers, target.base);
        const start = Math.max(0, resolveIntValue(state.registers, target.index) + (target.offset?.value ?? 0));
        let result = base;
        if (start <= 0) {
          result = insert + base;
        } else if (start >= base.length) {
          result = base + insert;
        } else {
          result = base.substring(0, start) + insert + base.substring(start);
        }
        setStringValue(state.registers, target.base, result);
      },
      0x25: async (state, arg0, arg1) => {
        const target = requireIndexed(arg0);
        const length = Math.max(0, resolveIntValue(state.registers, arg1));
        const base = getStringValue(state.registers, target.base);
        const start = Math.max(0, resolveIntValue(state.registers, target.index) + (target.offset?.value ?? 0));
        const result = base.substring(0, start) + base.substring(start + length);
        setStringValue(state.registers, target.base, result);
      },
      0x26: async (state) => {
        await xconnect(requireCommunicationInterface(state));
      },
      0x27: async (state) => {
        await xhangup(requireCommunicationInterface(state));
      },
      0x28: async (state, arg0, arg1) => {
        await xsetpar(state.registers, requireCommunicationInterface(state), requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x29: async (state, arg0) => {
        await xawlen(state.registers, requireCommunicationInterface(state), requireIntRegister(arg0));
      },
      0x2a: async (state, arg0) => {
        await xsend(state.registers, requireCommunicationInterface(state), requireStringRegister(arg0));
      },
      0x2b: async (state, arg0, arg1) => {
        await xsendf(state.registers, requireCommunicationInterface(state), requireStringRegister(arg0), requireStringRegister(arg1));
      },
      0x2c: async (state, arg0, arg1) => {
        const target = requireStringRegister(arg1);
        await xrequf(state.registers, requireCommunicationInterface(state), requireStringRegister(arg0), target, target);
      },
      0x2d: async (state) => {
        await xstopf(requireCommunicationInterface(state));
      },
      0x2e: async (state, arg0) => {
        await xkeyb(state.registers, requireCommunicationInterface(state), requireStringRegister(arg0));
      },
      0x2f: async (state, arg0) => {
        xstate(state.registers, requireCommunicationInterface(state), requireIntRegister(arg0));
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
      0x34: async (state, arg0, arg1) => {
        const name = arg0.kind === "string" ? arg0.value : requireStringRegister(arg0);
        ergb(state.registers, state.results, name, requireIntRegister(arg1));
      },
      0x35: async (state, arg0, arg1) => {
        const name = arg0.kind === "string" ? arg0.value : requireStringRegister(arg0);
        ergw(state.registers, state.results, name, requireIntRegister(arg1));
      },
      0x36: async (state, arg0, arg1) => {
        const name = arg0.kind === "string" ? arg0.value : requireStringRegister(arg0);
        ergd(state.registers, state.results, name, requireIntRegister(arg1));
      },
      0x37: async (state, arg0, arg1) => {
        const name = arg0.kind === "string" ? arg0.value : requireStringRegister(arg0);
        ergi(state.registers, state.results, name, requireIntRegister(arg1));
      },
      0x38: async (state, arg0, arg1) => {
        const name = arg0.kind === "string" ? arg0.value : requireStringRegister(arg0);
        ergr(state.registers, state.results, name, requireFloatRegister(arg1));
      },
      0x39: async (state, arg0, arg1) => {
        const name = arg0.kind === "string" ? arg0.value : requireStringRegister(arg0);
        if (arg1.kind === "string") {
          ergs(state.registers, state.results, name, arg1.value);
          return;
        }
        ergs(state.registers, state.results, name, requireStringRegister(arg1));
      },
      0x3a: async (state, arg0, arg1) => {
        a2flt(state.registers, requireFloatRegister(arg0), requireStringRegister(arg1));
      },
      0x3b: async (state, arg0, arg1) => {
        fadd(state.registers, state.flags, requireFloatRegister(arg0), requireFloatRegister(arg1));
      },
      0x3c: async (state, arg0, arg1) => {
        fsub(state.registers, state.flags, requireFloatRegister(arg0), requireFloatRegister(arg1));
      },
      0x3d: async (state, arg0, arg1) => {
        fmul(state.registers, state.flags, requireFloatRegister(arg0), requireFloatRegister(arg1));
      },
      0x3e: async (state, arg0, arg1) => {
        fdiv(state.registers, state.flags, requireFloatRegister(arg0), requireFloatRegister(arg1));
      },
      0x3f: async (state, arg0, arg1) => {
        const name = arg0.kind === "string" ? arg0.value : requireStringRegister(arg0);
        const binary = resolveBinaryValue(state.registers, arg1);
        ergy(state.registers, state.results, name, binary);
      },
      0x42: async (state, arg0) => {
        await xreps(state.registers, requireCommunicationInterface(state), requireStringRegister(arg0));
      },
      0x43: async (state, arg0) => {
        gettmr(state.registers, state.timer, requireIntRegister(arg0));
      },
      0x44: async (state, arg0) => {
        const value = resolveIntValue(state.registers, arg0);
        settmr(state.registers, state.timer, value as TimeValueRef);
      },
      0x4c: async (state) => {
        clrv(state.flags);
      },
      0x4e: async (state) => {
        popf(state.dataStack, state.flags);
      },
      0x4f: async (state) => {
        pushf(state.dataStack, state.flags);
      },
      0x50: async (state, arg0, arg1) => {
        const offset = resolveIntValue(state.registers, arg1);
        atsp(state.registers, state.dataStack, requireIntRegister(arg0), offset);
      },
      0x51: async (state) => {
        swap(state.dataStack);
      },
      0x52: async (state, arg0, arg1) => {
        state.tokenSeparator = resolveStringValue(state.registers, arg0);
        if (arg1.kind !== "none") {
          state.tokenIndex = resolveIntValue(state.registers, arg1);
        }
      },
      0x53: async (state, arg0) => {
        srev(state.registers, requireStringRegister(arg0));
      },
      0x54: async (state, arg0, arg1) => {
        const separator = state.tokenSeparator;
        if (!separator) {
          state.flags.z = true;
          return;
        }
        const source = resolveStringValue(state.registers, arg1);
        const parts = source.split(separator);
        const index = state.tokenIndex - 1;
        if (index < 0 || index >= parts.length) {
          state.flags.z = true;
          return;
        }
        setStringValue(state.registers, requireStringRegister(arg0), parts[index]);
        state.flags.z = false;
      },
      0x55: async (state, arg0, arg1) => {
        parb(state.registers, state.parameters, requireIntRegister(arg0), resolveIntValue(state.registers, arg1));
      },
      0x56: async (state, arg0, arg1) => {
        parw(state.registers, state.parameters, requireIntRegister(arg0), resolveIntValue(state.registers, arg1));
      },
      0x57: async (state, arg0, arg1) => {
        parl(state.registers, state.parameters, requireIntRegister(arg0), resolveIntValue(state.registers, arg1));
      },
      0x58: async (state, arg0, arg1) => {
        pars(state.registers, state.parameters, requireStringRegister(arg0), resolveIntValue(state.registers, arg1));
      },
      0x59: async (state, arg0) => {
        fclose(requireFileSystem(state), state.registers, requireIntRegister(arg0));
      },
      0x60: async (state, arg0, arg1) => {
        fopen(requireFileSystem(state), state.registers, requireIntRegister(arg0), requireStringRegister(arg1));
      },
      0x61: async (state, arg0, arg1) => {
        fread(requireFileSystem(state), state.registers, requireStringRegister(arg0), requireIntRegister(arg1), { kind: "I", index: 0 });
      },
      0x63: async (state, arg0, arg1) => {
        fseek(requireFileSystem(state), state.registers, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x64: async (state, arg0, arg1) => {
        fseekln(requireFileSystem(state), state.registers, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x5a: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        return { pc: jg(this.controlFlowState(state), offset).newPc };
      },
      0x5b: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        return { pc: jnl(this.controlFlowState(state), offset).newPc };
      },
      0x5c: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        return { pc: jl(this.controlFlowState(state), offset).newPc };
      },
      0x5d: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        return { pc: jng(this.controlFlowState(state), offset).newPc };
      },
      0x5e: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        return { pc: ja(this.controlFlowState(state), offset).newPc };
      },
      0x5f: async (state, arg0) => {
        const offset = resolveIntValue(state.registers, arg0);
        return { pc: jna(this.controlFlowState(state), offset).newPc };
      },
      0x67: async (state, arg0, arg1) => {
        a2fix(state.registers, state.flags, requireIntRegister(arg0), requireStringRegister(arg1));
      },
      0x68: async (state, arg0, arg1) => {
        fix2flt(state.registers, requireFloatRegister(arg0), requireIntRegister(arg1));
      },
      0x69: async (state, arg0, arg1) => {
        parr(state.registers, state.parameters, requireFloatRegister(arg0), resolveIntValue(state.registers, arg1));
      },
      0x6a: async (state, arg0, arg1) => {
        test(state.registers, state.flags, requireIntRegister(arg0), requireIntRegister(arg1));
      },
      0x6b: async (state, arg0) => {
        const duration = resolveIntValue(state.registers, arg0);
        await wait(state.registers, duration as TimeValueRef);
      },
      0x6c: async (state, arg0) => {
        getdate(state.registers, arg0 as DateTimeDestination);
      },
      0x6d: async (state, arg0) => {
        gettime(state.registers, arg0 as DateTimeDestination);
      },
      0x79: async (state, arg0, arg1) => {
        fix2hex(state.registers, requireStringRegister(arg0), requireIntRegister(arg1));
      },
      0x7a: async (state, arg0, arg1) => {
        fix2dez(state.registers, requireStringRegister(arg0), requireIntRegister(arg1));
      },
      0x7b: async (state, arg0) => {
        tabsetOp(state.registers, state.flags, this.tableRegistry, state.tableState, requireStringRegister(arg0));
      },
      0x7c: async (state, arg0, arg1) => {
        tabseekOp(state.registers, state.flags, state.tableState, requireStringRegister(arg0), requireIntRegister(arg1));
      },
      0x7d: async (state, arg0, arg1) => {
        tabgetOp(state.registers, state.flags, state.tableState, requireStringRegister(arg0), requireIntRegister(arg1));
      },
      0x7e: async (state, arg0, arg1) => {
        strcat(state.registers, requireStringRegister(arg0), requireStringRegister(arg1));
      },
      0x7f: async (state, arg0, arg1) => {
        pary(state.registers, state.parameters, requireStringRegister(arg0), resolveIntValue(state.registers, arg1));
      },
      0x80: async (state, arg0) => {
        parn(state.registers, state.parameters, requireIntRegister(arg0));
      },
      0x83: async (state, arg0, arg1) => {
        const delimiter = arg1.kind === "register" && arg1.ref.kind === "S" ? arg1.ref : undefined;
        tablineOp(state.registers, state.flags, state.tableState, requireStringRegister(arg0), delimiter);
      },
      0x87: async (state, arg0, arg1) => {
        flt2a(state.registers, requireStringRegister(arg0), requireFloatRegister(arg1));
      },
      0x88: async (state, arg0, arg1) => {
        const value = resolveFloatValue(state.registers, arg1);
        fsetImm(state.registers, requireFloatRegister(arg0), value);
      },
      0x8f: async (state, arg0, arg1) => {
        strcmp(state.registers, state.flags, requireStringRegister(arg0), requireStringRegister(arg1));
      },
      0x90: async (state, arg0, arg1) => {
        strlen(state.registers, requireIntRegister(arg0), requireStringRegister(arg1));
      },
      0x93: async (state, arg0, arg1) => {
        shmset(state.registers, state.sharedMemory, arg0 as unknown as IntRegisterRef, arg1 as unknown as IntRegisterRef);
      },
      0x94: async (state, arg0, arg1) => {
        shmget(state.registers, state.sharedMemory, requireIntRegister(arg0), arg1 as unknown as IntRegisterRef);
      },
      0x96: async (state, arg0, arg1) => {
        flt2fix(state.registers, requireIntRegister(arg0), requireFloatRegister(arg1));
      },
      0x9a: async (state, arg0, arg1) => {
        tabseekuOp(state.registers, state.flags, state.tableState, requireStringRegister(arg0), requireIntRegister(arg1));
      },
      0x9f: async (state, arg0) => {
        const id = resolveIntValue(state.registers, arg0);
        const handler = state.procedureLinker?.(id);
        if (!handler) {
          throw new EdiabasError(EdiabasErrorCodes.UNKNOWN, `Procedure ${id} is not linked`);
        }
        plink(state.procedureRegistry, id, handler);
      },
      0xa0: async (state, arg0) => {
        const id = resolveIntValue(state.registers, arg0);
        pcall(state.procedureRegistry, state.procedureStack, id);
      },
      0xa3: async (state, arg0) => {
        ppush(state.registers, state.procedureStack, requireIntRegister(arg0));
      },
      0xa5: async (state, arg0) => {
        ppushflt(state.registers, state.procedureStack, requireFloatRegister(arg0));
      },
      0xa7: async (state, arg0) => {
        ppushy(state.registers, state.procedureStack, requireStringRegister(arg0));
      },
      0xa1: async (state, arg0, arg1) => {
        fcomp(state.registers, state.flags, requireFloatRegister(arg0), requireFloatRegister(arg1));
      },
      0xab: async (state, arg0, arg1) => {
        ufix2dez(state.registers, requireStringRegister(arg0), requireIntRegister(arg1));
      },
      0xaf: async (state, arg0) => {
        await xopen(state.registers, requireCommunicationInterface(state), arg0.kind === "register" ? (arg0.ref.kind === "S" ? undefined : arg0.ref) : undefined);
      },
      0xb0: async (state) => {
        await xclose(requireCommunicationInterface(state));
      },
      0xb1: async (state, arg0) => {
        await xcloseex(state.registers, requireCommunicationInterface(state), arg0.kind === "register" ? (arg0.ref.kind === "S" ? undefined : arg0.ref) : undefined);
      },
      0xb2: async (state, arg0) => {
        await xswitch(state.registers, requireCommunicationInterface(state), requireIntRegister(arg0));
      },
      0xb3: async (state, arg0) => {
        await xsendex(state.registers, requireCommunicationInterface(state), requireStringRegister(arg0));
      },
      0xb4: async (state, arg0, arg1) => {
        const timeout = arg1.kind === "register" && arg1.ref.kind !== "S" ? arg1.ref : undefined;
        await xrecvex(state.registers, requireCommunicationInterface(state), requireStringRegister(arg0), timeout);
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
