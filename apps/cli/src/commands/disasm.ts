import type { Command } from "commander";
import chalk from "chalk";
import { disassemble, disassembleJob, formatInstruction, parsePrg, type DisassemblyOptions } from "@emdzej/ediabasx-best-parser";
import type { PrgBinaryJob, PrgFile } from "@emdzej/ediabasx-best-parser";
import { readFileBuffer } from "../utils/prg.js";
import { handleError } from "../utils/output.js";

interface DisasmCommandOptions {
  noColor?: boolean;
  noOffset?: boolean;
  decimal?: boolean;
}

function resolveBinaryJobSlices(prg: PrgFile): Array<{ job: PrgBinaryJob; start: number; end: number }> {
  const sortedJobs = [...prg.binaryJobs].sort((a, b) => a.offset - b.offset);
  if (sortedJobs.length === 0) {
    return [];
  }

  return sortedJobs.map((job, index) => {
    const start = job.offset;
    const end = index + 1 < sortedJobs.length ? sortedJobs[index + 1].offset : prg.code.length;
    return { job, start, end };
  });
}

/**
 * Build a map from each binary job offset to the next job's offset in file
 * order. The disassembler uses this as the upper bound when walking bytecode,
 * so multi-`eoj` jobs (early returns + tail code reached via backward jumps)
 * are decoded fully instead of being truncated at the first `eoj`.
 */
function buildJobEndOffsets(prg: PrgFile, bufferLength: number): Map<number, number> {
  const sorted = [...prg.binaryJobs].sort((a, b) => a.offset - b.offset);
  const ends = new Map<number, number>();
  for (let i = 0; i < sorted.length; i++) {
    const end = i + 1 < sorted.length ? sorted[i + 1].offset : bufferLength;
    ends.set(sorted[i].offset, end);
  }
  return ends;
}

function printDisassembly(prg: PrgFile, buffer: Uint8Array, options: DisassemblyOptions): void {
  // For EDIABAS OBJECT format, bytecode is at binaryJob offsets in the raw buffer
  if (prg.binaryJobs.length > 0) {
    const endOffsets = buildJobEndOffsets(prg, buffer.length);
    for (const job of prg.binaryJobs) {
      const instructions = disassembleJob(buffer, job.offset, { endOffset: endOffsets.get(job.offset) });
      if (instructions.length === 0) continue;

      process.stdout.write(`${chalk.bold(job.name)} @ 0x${job.offset.toString(16).toUpperCase()}\n`);
      for (const instr of instructions) {
        process.stdout.write(`  ${formatInstruction(instr, options)}\n`);
      }
      process.stdout.write("\n");
    }
    return;
  }

  // Legacy format with separate code section
  if (prg.code.length === 0) {
    process.stdout.write("No bytecode section available.\n");
    return;
  }

  const jobSlices = resolveBinaryJobSlices(prg);
  if (jobSlices.length === 0) {
    const instructions = disassemble(prg.code);
    for (const instr of instructions) {
      process.stdout.write(`${formatInstruction(instr, options)}\n`);
    }
    return;
  }

  for (const slice of jobSlices) {
    if (slice.start >= prg.code.length) continue;
    const start = slice.start;
    const end = Math.min(slice.end, prg.code.length);
    const instructions = disassemble(prg.code.slice(start, end));

    process.stdout.write(`${chalk.bold(slice.job.name)}\n`);
    for (const instr of instructions) {
      // Adjust offset to be absolute
      const adjustedInstr = { ...instr, offset: start + instr.offset };
      process.stdout.write(`${formatInstruction(adjustedInstr, options)}\n`);
    }
    process.stdout.write("\n");
  }
}

function registerDisasmCommand(program: Command): void {
  program
    .command("disasm")
    .argument("<file>", "PRG/GRP file to disassemble")
    .argument("[job]", "Job name to disassemble (optional, disassembles all if not specified)")
    .option("--no-color", "Disable colored output")
    .option("--no-offset", "Hide instruction offsets")
    .option("--decimal", "Show offsets in decimal instead of hex")
    .description("Disassemble bytecode into readable assembly")
    .action((filePath: string, jobName: string | undefined, cmdOptions: DisasmCommandOptions) => {
      try {
        const buffer = readFileBuffer(filePath);
        const prg = parsePrg(buffer);

        const options: DisassemblyOptions = {
          color: cmdOptions.noColor !== true,
          showOffset: cmdOptions.noOffset !== true,
          offsetFormat: cmdOptions.decimal ? 'decimal' : 'hex',
        };

        if (jobName) {
          // Find specific job
          const job = prg.binaryJobs.find(
            (j) => j.name.toLowerCase() === jobName.toLowerCase()
          );

          if (!job) {
            const available = prg.binaryJobs.map((j) => j.name).join(", ");
            process.stderr.write(`${chalk.red("Error:")} Job "${jobName}" not found.\n`);
            process.stderr.write(`Available jobs: ${available || "none"}\n`);
            process.exitCode = 1;
            return;
          }

          const endOffset = buildJobEndOffsets(prg, buffer.length).get(job.offset);
          const instructions = disassembleJob(buffer, job.offset, { endOffset });
          process.stdout.write(`${chalk.bold(job.name)} @ 0x${job.offset.toString(16).toUpperCase()}\n`);
          for (const instr of instructions) {
            process.stdout.write(`  ${formatInstruction(instr, options)}\n`);
          }
        } else {
          printDisassembly(prg, buffer, options);
        }
      } catch (error) {
        handleError(error);
      }
    });
}

export { registerDisasmCommand };
