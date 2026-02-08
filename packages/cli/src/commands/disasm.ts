import type { Command } from "commander";
import chalk from "chalk";
import { disassemble, disassembleJob, formatInstruction, parsePrg } from "@ediabas/best-parser";
import type { PrgBinaryJob, PrgFile } from "@ediabas/best-parser";
import { readFileBuffer } from "../utils/prg.js";
import { handleError } from "../utils/output.js";

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

function printDisassembly(prg: PrgFile, buffer: Uint8Array): void {
  // For EDIABAS OBJECT format, bytecode is at binaryJob offsets in the raw buffer
  if (prg.binaryJobs.length > 0) {
    for (const job of prg.binaryJobs) {
      const instructions = disassembleJob(buffer, job.offset);
      if (instructions.length === 0) continue;

      process.stdout.write(`${chalk.bold(job.name)} @ 0x${job.offset.toString(16).toUpperCase()}\n`);
      for (const instr of instructions) {
        const address = instr.offset.toString(16).toUpperCase().padStart(8, "0");
        process.stdout.write(`  ${address}: ${formatInstruction(instr)}\n`);
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
      const address = instr.offset.toString(16).toUpperCase().padStart(8, "0");
      process.stdout.write(`${address}: ${formatInstruction(instr)}\n`);
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
      const absoluteOffset = start + instr.offset;
      const address = absoluteOffset.toString(16).toUpperCase().padStart(8, "0");
      process.stdout.write(`${address}: ${formatInstruction(instr)}\n`);
    }
    process.stdout.write("\n");
  }
}

function registerDisasmCommand(program: Command): void {
  program
    .command("disasm")
    .argument("<file>", "PRG/GRP file to disassemble")
    .argument("[job]", "Job name to disassemble (optional, disassembles all if not specified)")
    .description("Disassemble bytecode into readable assembly")
    .action((filePath: string, jobName?: string) => {
      try {
        const buffer = readFileBuffer(filePath);
        const prg = parsePrg(buffer);

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

          const instructions = disassembleJob(buffer, job.offset);
          process.stdout.write(`${chalk.bold(job.name)} @ 0x${job.offset.toString(16).toUpperCase()}\n`);
          for (const instr of instructions) {
            const address = instr.offset.toString(16).toUpperCase().padStart(8, "0");
            process.stdout.write(`  ${address}: ${formatInstruction(instr)}\n`);
          }
        } else {
          printDisassembly(prg, buffer);
        }
      } catch (error) {
        handleError(error);
      }
    });
}

export { registerDisasmCommand };
