#!/usr/bin/env tsx
import { parsePrg, type PrgFile, type PrgJob } from "../packages/best-parser/src/index.js";
import { EdiabasError, EdiabasErrorCodes } from "../packages/core/src/index.js";
import { Interpreter } from "../packages/interpreter/src/index.js";
import fs from "fs/promises";
import path from "path";

const EDIABAS_MAGIC = "@EDIABAS OBJECT";
const EDIABAS_DATA_OFFSET = 0xa0;
const EDIABAS_XOR_KEY = 0xf7;

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

type IntRegisterRef = { kind: "B" | "I" | "L" | "A"; index: number };
type StringRegisterRef = { kind: "S"; index: number };
type FloatRegisterRef = { kind: "F"; index: number };

type Operand =
  | { kind: "none" }
  | { kind: "register"; ref: IntRegisterRef | StringRegisterRef | FloatRegisterRef }
  | { kind: "immediate"; value: number }
  | { kind: "string"; value: string; raw: Uint8Array }
  | {
      kind: "indexed";
      base: StringRegisterRef;
      index: { kind: "immediate"; value: number } | { kind: "register"; ref: IntRegisterRef | StringRegisterRef | FloatRegisterRef };
      offset?: { kind: "immediate"; value: number };
      length?: { kind: "immediate"; value: number } | { kind: "register"; ref: IntRegisterRef | StringRegisterRef | FloatRegisterRef };
    };

type DecodeResult = { operand: Operand; nextOffset: number };

type JobError = { offset: number; opcode?: number; message: string };

type JobReport = {
  name: string;
  status: "ok" | "error";
  instructions: number;
  errors: JobError[];
};

type FileReport = {
  file: string;
  status: "ok" | "errors";
  jobs: JobReport[];
};

type SummaryReport = {
  totalFiles: number;
  processedFiles: number;
  okFiles: number;
  errorFiles: number;
  lastUpdated: string;
  files: Record<string, "ok" | "errors">;
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

function assertAvailable(code: Uint8Array, offset: number, size: number): void {
  if (offset < 0 || offset + size > code.length) {
    throw new EdiabasError(
      EdiabasErrorCodes.INVALID_INSTRUCTION,
      `Operand read out of range at ${offset} (size ${size})`
    );
  }
}

function decodeOperand(code: Uint8Array, view: DataView, offset: number, mode: OpAddrMode): DecodeResult {
  switch (mode) {
    case OpAddrModes.NONE:
      return { operand: { kind: "none" }, nextOffset: offset };
    case OpAddrModes.REG_S:
    case OpAddrModes.REG_AB:
    case OpAddrModes.REG_I:
    case OpAddrModes.REG_L: {
      assertAvailable(code, offset, 1);
      const ref = decodeRegister(code[offset]);
      return { operand: { kind: "register", ref }, nextOffset: offset + 1 };
    }
    case OpAddrModes.IMM8: {
      assertAvailable(code, offset, 1);
      const value = code[offset];
      return { operand: { kind: "immediate", value }, nextOffset: offset + 1 };
    }
    case OpAddrModes.IMM16: {
      assertAvailable(code, offset, 2);
      const value = readInt16(view, offset);
      return { operand: { kind: "immediate", value }, nextOffset: offset + 2 };
    }
    case OpAddrModes.IMM32: {
      assertAvailable(code, offset, 4);
      const value = readInt32(view, offset);
      return { operand: { kind: "immediate", value }, nextOffset: offset + 4 };
    }
    case OpAddrModes.IMM_STR: {
      assertAvailable(code, offset, 2);
      const length = readInt16(view, offset);
      const start = offset + 2;
      assertAvailable(code, start, Math.max(0, length));
      const bytes = code.slice(start, start + length);
      const value = ""; // decoding not required for validation
      return {
        operand: { kind: "string", value, raw: bytes },
        nextOffset: start + length,
      };
    }
    case OpAddrModes.IDX_IMM: {
      assertAvailable(code, offset, 3);
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
      assertAvailable(code, offset, 2);
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
      assertAvailable(code, offset, 4);
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
      assertAvailable(code, offset, 5);
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
      assertAvailable(code, offset, 4);
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
      assertAvailable(code, offset, 4);
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
      assertAvailable(code, offset, 3);
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
      throw new EdiabasError(EdiabasErrorCodes.INVALID_INSTRUCTION, `Unknown addressing mode ${mode}`);
  }
}

function decodeInstruction(code: Uint8Array, pc: number): { opcode: number; nextPc: number } {
  if (pc + 1 >= code.length) {
    throw new EdiabasError(EdiabasErrorCodes.INVALID_INSTRUCTION, `PC out of range: ${pc}`);
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
  return { opcode, nextPc: offset };
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

function resolveBinaryJobOffset(prg: PrgFile, name: string): number | undefined {
  const target = name.toUpperCase();
  const entry = prg.binaryJobs.find((job) => job.name.toUpperCase() === target);
  return entry?.offset;
}

function resolveJobEntry(prg: PrgFile, name: string): PrgJob | undefined {
  const target = name.toUpperCase();
  return prg.jobs.find((entry) => entry.name.toUpperCase() === target);
}

function buildJobEntries(prg: PrgFile): { name: string; offset: number | undefined }[] {
  const names = new Set<string>();
  prg.jobs.forEach((job) => names.add(job.name));
  prg.binaryJobs.forEach((job) => names.add(job.name));
  return Array.from(names).map((name) => {
    const binaryOffset = resolveBinaryJobOffset(prg, name);
    const job = resolveJobEntry(prg, name);
    const offset = binaryOffset ?? (job?.offset ?? undefined);
    return { name, offset };
  });
}

function getJobBounds(entries: { name: string; offset: number | undefined }[], codeLength: number): Map<string, { start: number; end: number }> {
  const usable = entries
    .filter((entry): entry is { name: string; offset: number } => typeof entry.offset === "number")
    .filter((entry) => entry.offset >= 0 && entry.offset < codeLength)
    .sort((a, b) => a.offset - b.offset);

  const bounds = new Map<string, { start: number; end: number }>();
  for (let i = 0; i < usable.length; i += 1) {
    const current = usable[i];
    const next = usable[i + 1];
    bounds.set(current.name, { start: current.offset, end: next ? next.offset : codeLength });
  }
  return bounds;
}

function verifyJob(
  interpreter: Interpreter,
  code: Uint8Array,
  name: string,
  start: number,
  end: number
): JobReport {
  let pc = start;
  let instructions = 0;
  const errors: JobError[] = [];

  while (pc < end) {
    if (pc + 1 >= code.length) {
      errors.push({ offset: pc, message: "PC out of range" });
      break;
    }
    const opcode = code[pc];
    const handler = (interpreter as any).getHandler?.(opcode);
    if (!handler) {
      errors.push({ offset: pc, opcode, message: "Unknown opcode" });
      break;
    }

    try {
      const { nextPc } = decodeInstruction(code, pc);
      if (nextPc <= pc) {
        errors.push({ offset: pc, opcode, message: "Instruction did not advance PC" });
        break;
      }
      if (nextPc > end) {
        errors.push({ offset: pc, opcode, message: "Instruction overruns job boundary" });
        break;
      }
      instructions += 1;
      pc = nextPc;
      if (opcode === 0x1d) {
        break; // EOJ
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      errors.push({ offset: pc, opcode, message });
      break;
    }
  }

  return {
    name,
    status: errors.length > 0 ? "error" : "ok",
    instructions,
    errors,
  };
}

function parseArgs(argv: string[]): {
  file?: string;
  all?: boolean;
  source?: string;
  output?: string;
} {
  const args: { file?: string; all?: boolean; source?: string; output?: string } = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--file") {
      args.file = argv[i + 1];
      i += 1;
    } else if (arg === "--all") {
      args.all = true;
    } else if (arg === "--source") {
      args.source = argv[i + 1];
      i += 1;
    } else if (arg === "--output") {
      args.output = argv[i + 1];
      i += 1;
    }
  }
  return args;
}

async function ensureDir(dir: string): Promise<void> {
  await fs.mkdir(dir, { recursive: true });
}

async function loadSummary(summaryPath: string): Promise<SummaryReport> {
  try {
    const raw = await fs.readFile(summaryPath, "utf8");
    return JSON.parse(raw) as SummaryReport;
  } catch {
    return {
      totalFiles: 0,
      processedFiles: 0,
      okFiles: 0,
      errorFiles: 0,
      lastUpdated: new Date().toISOString(),
      files: {},
    };
  }
}

async function writeSummary(summaryPath: string, summary: SummaryReport): Promise<void> {
  summary.lastUpdated = new Date().toISOString();
  await fs.writeFile(summaryPath, JSON.stringify(summary, null, 2));
}

async function verifyFile(filePath: string): Promise<FileReport> {
  const fileName = path.basename(filePath);
  let prg: PrgFile;

  try {
    const buffer = await fs.readFile(filePath);
    prg = parsePrg(new Uint8Array(buffer));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      file: fileName,
      status: "errors",
      jobs: [
        {
          name: "<parse>",
          status: "error",
          instructions: 0,
          errors: [{ offset: 0, message: `Parse error: ${message}` }],
        },
      ],
    };
  }

  const code = resolveProgramCode(prg);
  const interpreter = new Interpreter(prg);

  const entries = buildJobEntries(prg);
  const bounds = getJobBounds(entries, code.length);

  const jobs: JobReport[] = [];
  if (entries.length === 0) {
    jobs.push({
      name: "<no-jobs>",
      status: "error",
      instructions: 0,
      errors: [{ offset: 0, message: "No jobs found" }],
    });
  } else if (code.length === 0) {
    for (const entry of entries) {
      jobs.push({
        name: entry.name,
        status: "error",
        instructions: 0,
        errors: [{ offset: 0, message: "No bytecode available" }],
      });
    }
  } else {
    for (const entry of entries) {
      const bound = bounds.get(entry.name);
      if (!bound) {
        jobs.push({
          name: entry.name,
          status: "error",
          instructions: 0,
          errors: [{ offset: entry.offset ?? -1, message: "Job offset out of range" }],
        });
        continue;
      }
      jobs.push(verifyJob(interpreter, code, entry.name, bound.start, bound.end));
    }
  }

  const status = jobs.some((job) => job.status === "error") ? "errors" : "ok";
  return {
    file: fileName,
    status,
    jobs,
  };
}

async function verifySingleFile(filePath: string, output?: string): Promise<void> {
  const report = await verifyFile(filePath);
  if (!output) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  const filesDir = path.join(output, "files");
  await ensureDir(filesDir);
  const reportPath = path.join(filesDir, `${path.basename(filePath, path.extname(filePath))}.json`);
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2));

  const summaryPath = path.join(output, "summary.json");
  const summary = await loadSummary(summaryPath);
  summary.files[report.file] = report.status;
  summary.processedFiles = Object.keys(summary.files).length;
  summary.okFiles = Object.values(summary.files).filter((s) => s === "ok").length;
  summary.errorFiles = Object.values(summary.files).filter((s) => s === "errors").length;
  await writeSummary(summaryPath, summary);
}

async function verifyAllFiles(source: string, output: string): Promise<void> {
  const filesDir = path.join(output, "files");
  await ensureDir(filesDir);

  const entries = await fs.readdir(source, { withFileTypes: true });
  const fileNames = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => name.toLowerCase().endsWith(".prg") || name.toLowerCase().endsWith(".grp"))
    .sort((a, b) => a.localeCompare(b));

  const summaryPath = path.join(output, "summary.json");
  const summary = await loadSummary(summaryPath);
  summary.totalFiles = fileNames.length;

  for (const name of fileNames) {
    const reportPath = path.join(filesDir, `${path.basename(name, path.extname(name))}.json`);
    try {
      await fs.access(reportPath);
      continue; // already processed
    } catch {
      // continue
    }

    const filePath = path.join(source, name);
    const report = await verifyFile(filePath);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));

    summary.files[report.file] = report.status;
    summary.processedFiles = Object.keys(summary.files).length;
    summary.okFiles = Object.values(summary.files).filter((s) => s === "ok").length;
    summary.errorFiles = Object.values(summary.files).filter((s) => s === "errors").length;
    await writeSummary(summaryPath, summary);
  }
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  if (args.file) {
    await verifySingleFile(args.file, args.output);
    return;
  }
  if (args.all && args.source && args.output) {
    await verifyAllFiles(args.source, args.output);
    return;
  }

  console.error("Usage: --file <path> [--output <dir>] | --all --source <dir> --output <dir>");
  process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
