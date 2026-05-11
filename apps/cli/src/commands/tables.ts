import type { Command } from "commander";
import chalk from "chalk";
import type { PrgTable } from "@emdzej/ediabasx-best-parser";
import { readPrgFile } from "../utils/prg.js";
import { handleError, printHeading, printJson, resolveOutputFormat } from "../utils/output.js";
import type { OutputOptions } from "../utils/output.js";

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

function registerTablesCommand(program: Command): void {
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
}

export { registerTablesCommand };
