import type { Command } from "commander";
import chalk from "chalk";
import type { PrgJob } from "@emdzej/ediabasx-best-parser";
import { readPrgFile } from "../utils/prg.js";
import { handleError, printHeading, printJson } from "../utils/output.js";

/**
 * Single-job inspector — companion to `jobs` the same way `table` is to
 * `tables`. Prints args, results, and any comments for one named job, with
 * `--json` for piping and `--csv` for spreadsheet-friendly export of the
 * args/results lists.
 */

interface JobCommandOptions {
  json?: boolean;
  csv?: boolean;
}

function printJobHuman(job: PrgJob): void {
  printHeading(`Job: ${job.name}`);
  if (job.comment) {
    process.stdout.write(`${chalk.gray(job.comment)}\n\n`);
  }

  if (job.args.length > 0) {
    process.stdout.write(`${chalk.bold("Args")} (${job.args.length})\n`);
    for (const arg of job.args) {
      const comment = arg.comment ? `  ${chalk.gray("— " + arg.comment)}` : "";
      process.stdout.write(`  ${arg.name}: ${chalk.cyan(arg.type)}${comment}\n`);
    }
    process.stdout.write("\n");
  } else {
    process.stdout.write(`${chalk.bold("Args")}  (none)\n\n`);
  }

  if (job.results.length > 0) {
    process.stdout.write(`${chalk.bold("Results")} (${job.results.length})\n`);
    for (const result of job.results) {
      const comment = result.comment ? `  ${chalk.gray("— " + result.comment)}` : "";
      process.stdout.write(`  ${result.name}: ${chalk.cyan(result.type)}${comment}\n`);
    }
  } else {
    process.stdout.write(`${chalk.bold("Results")}  (none)\n`);
  }
}

function printJobCsv(job: PrgJob): void {
  // Two CSV blocks separated by a blank line — one for args, one for
  // results. Keeps the format greppable / pipeable while still covering
  // both lists in one shot.
  const esc = (s: string) => `"${s.replace(/"/g, '""')}"`;
  process.stdout.write("kind,name,type,comment\n");
  for (const arg of job.args) {
    process.stdout.write(
      `arg,${esc(arg.name)},${esc(arg.type)},${esc(arg.comment ?? "")}\n`,
    );
  }
  for (const result of job.results) {
    process.stdout.write(
      `result,${esc(result.name)},${esc(result.type)},${esc(result.comment ?? "")}\n`,
    );
  }
}

function registerJobCommand(program: Command): void {
  program
    .command("job")
    .argument("<file>", "PRG/GRP file to inspect")
    .argument("<name>", "Job name to display")
    .option("--json", "output JSON")
    .option("--csv", "output as CSV (args + results)")
    .description("Display details of a specific job (args, results, comments)")
    .action((filePath: string, jobName: string, options: JobCommandOptions) => {
      try {
        const prg = readPrgFile(filePath);
        const job = prg.jobs.find(
          (j) => j.name.toLowerCase() === jobName.toLowerCase(),
        );

        if (!job) {
          const available = prg.jobs.map((j) => j.name).join(", ");
          process.stderr.write(
            `${chalk.red("Error:")} Job "${jobName}" not found.\n`,
          );
          process.stderr.write(`Available jobs: ${available || "none"}\n`);
          process.exitCode = 1;
          return;
        }

        if (options.json) {
          printJson({
            name: job.name,
            comment: job.comment,
            args: job.args,
            results: job.results,
          });
          return;
        }

        if (options.csv) {
          printJobCsv(job);
          return;
        }

        printJobHuman(job);
      } catch (error) {
        handleError(error);
      }
    });
}

export { registerJobCommand };
