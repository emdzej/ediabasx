#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { readFileSync } from "node:fs";
import path from "node:path";
import { parsePrg } from "@ediabas/best-parser";
import type { PrgFile, PrgJob, PrgTable } from "@ediabas/best-parser";

type OutputFormat = "json" | "table" | "human";

type OutputOptions = {
  json?: boolean;
  table?: boolean;
};

const program = new Command();

program
  .name("ediabas")
  .description("CLI for parsing EDIABAS PRG/GRP files")
  .version("0.1.0");

function resolveOutputFormat(options: OutputOptions, defaultFormat: OutputFormat): OutputFormat {
  if (options.json) return "json";
  if (options.table) return "table";
  return defaultFormat;
}

function readPrgFile(filePath: string): PrgFile {
  const buffer = readFileSync(filePath);
  return parsePrg(new Uint8Array(buffer));
}

function jsonStringify(value: unknown): string {
  return JSON.stringify(
    value,
    (key, val) => (val instanceof Uint8Array ? Array.from(val) : val),
    2,
  );
}

function printJson(value: unknown): void {
  process.stdout.write(`${jsonStringify(value)}\n`);
}

function printHeading(label: string): void {
  process.stdout.write(`${chalk.bold.cyan(label)}\n`);
}

function printInfoSummary(filePath: string, prg: PrgFile): void {
  printHeading("File summary");
  const fileName = path.basename(filePath);
  process.stdout.write(`${chalk.bold("File:")} ${fileName}\n`);
  process.stdout.write(`${chalk.bold("Jobs:")} ${prg.jobs.length}\n`);
  process.stdout.write(`${chalk.bold("Tables:")} ${prg.tables.length}\n`);

  printHeading("ECU info");
  const metadata = prg.metadata ?? {};
  const entries: Array<[string, string | undefined]> = [
    ["ECU", metadata.ecu],
    ["Origin", metadata.origin],
    ["Revision", metadata.revision],
    ["Author", metadata.author],
    ["ECU comment", metadata.ecuComment],
  ];

  for (const [label, value] of entries) {
    process.stdout.write(`${chalk.bold(label + ":")} ${value ?? "n/a"}\n`);
  }
}

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

function printTablesHuman(tables: PrgTable[]): void {
  printHeading("Tables");
  if (tables.length === 0) {
    process.stdout.write("No tables found.\n");
    return;
  }

  for (const table of tables) {
    process.stdout.write(`${chalk.bold(table.name)}\n`);
    process.stdout.write(`  Columns: ${table.columns}\n`);
    process.stdout.write(`  Rows: ${table.rows}\n\n`);
  }
}

function printTablesTable(tables: PrgTable[]): void {
  console.table(
    tables.map((table) => ({
      table: table.name,
      columns: table.columns,
      rows: table.rows,
    })),
  );
}

function printParseHuman(filePath: string, prg: PrgFile): void {
  printInfoSummary(filePath, prg);
}

function printParseTable(prg: PrgFile): void {
  console.table([
    {
      jobs: prg.jobs.length,
      tables: prg.tables.length,
      ecu: prg.metadata.ecu ?? "n/a",
      revision: prg.metadata.revision ?? "n/a",
    },
  ]);
}

function handleError(error: unknown): void {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`${chalk.red("Error:")} ${message}\n`);
  process.exitCode = 1;
}

program
  .command("parse")
  .argument("<file>", "PRG/GRP file to parse")
  .option("--json", "output JSON")
  .option("--table", "output as table")
  .description("Parse a PRG/GRP file")
  .action((filePath: string, options: OutputOptions) => {
    try {
      const prg = readPrgFile(filePath);
      const format = resolveOutputFormat(options, "json");

      if (format === "json") {
        printJson(prg);
        return;
      }

      if (format === "table") {
        printParseTable(prg);
        return;
      }

      printParseHuman(filePath, prg);
    } catch (error) {
      handleError(error);
    }
  });

program
  .command("info")
  .argument("<file>", "PRG/GRP file to inspect")
  .option("--json", "output JSON")
  .option("--table", "output as table")
  .description("Show summary information for a PRG/GRP file")
  .action((filePath: string, options: OutputOptions) => {
    try {
      const prg = readPrgFile(filePath);
      const format = resolveOutputFormat(options, "human");
      const summary = {
        file: path.basename(filePath),
        jobs: prg.jobs.length,
        tables: prg.tables.length,
        metadata: prg.metadata,
      };

      if (format === "json") {
        printJson(summary);
        return;
      }

      if (format === "table") {
        console.table([
          {
            file: summary.file,
            jobs: summary.jobs,
            tables: summary.tables,
            ecu: prg.metadata.ecu ?? "n/a",
            revision: prg.metadata.revision ?? "n/a",
          },
        ]);
        return;
      }

      printInfoSummary(filePath, prg);
    } catch (error) {
      handleError(error);
    }
  });

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

program
  .command("tables")
  .argument("<file>", "PRG/GRP file to inspect")
  .option("--json", "output JSON")
  .option("--table", "output as table")
  .description("List tables with their row/column counts")
  .action((filePath: string, options: OutputOptions) => {
    try {
      const prg = readPrgFile(filePath);
      const format = resolveOutputFormat(options, "human");
      const tables = prg.tables.map((table) => ({
        name: table.name,
        columns: table.columns,
        rows: table.rows,
      }));

      if (format === "json") {
        printJson(tables);
        return;
      }

      if (format === "table") {
        printTablesTable(prg.tables);
        return;
      }

      printTablesHuman(prg.tables);
    } catch (error) {
      handleError(error);
    }
  });

program.parse();
