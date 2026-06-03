import type { PrgFile, PrgJob, PrgTable } from "@emdzej/ediabasx-best-parser";
import { disassembleJob } from "@emdzej/ediabasx-best-parser";
import { analyseControlFlow } from "./cfg.js";
import { emitJob } from "./emit.js";

export { analyseControlFlow } from "./cfg.js";
export type { CfgResult, WhileLoop, DoWhile, IfElse } from "./cfg.js";
export { formatOperand, formatCondition } from "./format.js";

export interface DecompileOptions {
  indent?: string;
}

export function decompileToSource(
  prg: PrgFile,
  buffer: Uint8Array,
  options?: DecompileOptions,
): string {
  const indent = options?.indent ?? "    ";
  const lines: string[] = [];

  emitHeader(prg, lines);
  emitTables(prg.tables, lines);

  const sorted = [...prg.binaryJobs].sort((a, b) => a.offset - b.offset);
  const endOffsets = buildEndOffsets(sorted, buffer.length);

  for (const binJob of sorted) {
    const meta = prg.jobs.find(
      (j) => j.name.toLowerCase() === binJob.name.toLowerCase(),
    );

    const instrs = disassembleJob(buffer, binJob.offset, {
      endOffset: endOffsets.get(binJob.offset),
    });
    if (instrs.length === 0) continue;

    lines.push("");
    emitJobHeader(binJob.name, meta, lines);
    lines.push("{");

    const cfg = analyseControlFlow(instrs);
    const body = emitJob(instrs, cfg, indent);
    lines.push(...body);

    lines.push("}");
  }

  lines.push("");
  return lines.join("\n");
}

function emitHeader(prg: PrgFile, lines: string[]): void {
  const m = prg.metadata;
  if (!m.ecu && !m.origin && !m.revision && !m.author && !m.ecuComment) return;

  if (m.ecu) lines.push(`ecu     : "${m.ecu}";`);
  if (m.origin) lines.push(`origin  : "${m.origin}";`);
  if (m.revision) lines.push(`revision: "${m.revision}";`);
  if (m.author) lines.push(`author  : "${m.author}";`);
  if (m.ecuComment) lines.push(`comment : "${m.ecuComment}";`);
}

function emitJobHeader(
  name: string,
  meta: PrgJob | undefined,
  lines: string[],
): void {
  const parts: string[] = [];
  parts.push(`name    : ${name};`);

  if (meta?.comment) {
    parts.push(`comment : "${meta.comment}";`);
  }

  if (meta?.args && meta.args.length > 0) {
    for (const arg of meta.args) {
      const type = arg.type || "string";
      const comment = arg.comment ? `, "${arg.comment}"` : "";
      parts.push(`argument: ${arg.name}, ${type}${comment};`);
    }
  }

  if (meta?.results && meta.results.length > 0) {
    for (const res of meta.results) {
      const type = res.type || "string";
      const comment = res.comment ? `, "${res.comment}"` : "";
      parts.push(`result  : ${res.name}, ${type}${comment};`);
    }
  }

  lines.push(`job (`);
  for (const part of parts) {
    lines.push(`    ${part}`);
  }
  lines.push(`)`);
}

function emitTables(tables: readonly PrgTable[], lines: string[]): void {
  if (tables.length === 0) return;

  for (const table of tables) {
    lines.push("");
    lines.push(`TBEG "${table.name}"`);
    if (table.values.length > 0) {
      const header = table.values[0];
      lines.push(`HEAD ${header.map((c) => `"${c}"`).join(", ")}`);
      for (let r = 1; r < table.values.length; r++) {
        lines.push(`LINE ${table.values[r].map((c) => `"${c}"`).join(", ")}`);
      }
    }
    lines.push("TEND");
  }
}

function buildEndOffsets(
  sorted: Array<{ offset: number }>,
  bufferLength: number,
): Map<number, number> {
  const ends = new Map<number, number>();
  for (let i = 0; i < sorted.length; i++) {
    const end = i + 1 < sorted.length ? sorted[i + 1].offset : bufferLength;
    ends.set(sorted[i].offset, end);
  }
  return ends;
}
