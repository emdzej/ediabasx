import type { Command } from "commander";
import chalk from "chalk";
import type { PrgJob } from "@ediabas/best-parser";
import { readPrgFile } from "../utils/prg.js";
import { handleError, printHeading, printJson, resolveOutputFormat } from "../utils/output.js";
import type { OutputOptions } from "../utils/output.js";

function printJobsHuman(jobs: PrgJob[]): void {
  printHeading("Jobs");
  if (jobs.length === 0) {
    process.stdout.write("No jobs found.\n");
    return;
  }

  for (const job of jobs) {
    process.stdout.write(`${chalk.bold(job.name)}\n`);
    if (job.comment) {
      process.stdout.write(`  ${chalk.gray(job.comment)}\n`);
    }

    if (job.args.length > 0) {
      process.stdout.write(`  ${chalk.bold("Args:")}\n`);
      for (const arg of job.args) {
        const comment = arg.comment ? ` - ${arg.comment}` : "";
        process.stdout.write(`    ${arg.name}: ${arg.type}${comment}\n`);
      }
    }

    if (job.results.length > 0) {
      process.stdout.write(`  ${chalk.bold("Results:")}\n`);
      for (const result of job.results) {
        const comment = result.comment ? ` - ${result.comment}` : "";
        process.stdout.write(`    ${result.name}: ${result.type}${comment}\n`);
      }
    }

    process.stdout.write("\n");
  }
}

function printJobsTable(jobs: PrgJob[]): void {
  console.table(
    jobs.map((job) => ({
      job: job.name,
      args: job.args.length,
      results: job.results.length,
      comment: job.comment ?? "",
    })),
  );
}

function registerJobsCommand(program: Command): void {
  program
    .command("jobs")
    .argument("<file>", "PRG/GRP file to inspect")
    .option("--json", "output JSON")
    .option("--table", "output as table")
    .description("List all jobs with their arguments and results")
    .action((filePath: string, options: OutputOptions) => {
      try {
        const prg = readPrgFile(filePath);
        const format = resolveOutputFormat(options, "human");

        if (format === "json") {
          printJson(prg.jobs);
          return;
        }

        if (format === "table") {
          printJobsTable(prg.jobs);
          return;
        }

        printJobsHuman(prg.jobs);
      } catch (error) {
        handleError(error);
      }
    });
}

export { registerJobsCommand };
