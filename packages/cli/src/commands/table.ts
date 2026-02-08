import type { Command } from "commander";
import chalk from "chalk";
import { readPrgFile } from "../utils/prg.js";
import { handleError, printHeading, printJson } from "../utils/output.js";

function registerTableCommand(program: Command): void {
  program
    .command("table")
    .argument("<file>", "PRG/GRP file to inspect")
    .argument("<name>", "Table name to display")
    .option("--json", "output JSON")
    .option("--csv", "output as CSV")
    .description("Display contents of a specific table")
    .action((filePath: string, tableName: string, options: { json?: boolean; csv?: boolean }) => {
      try {
        const prg = readPrgFile(filePath);
        const table = prg.tables.find(
          (t) => t.name.toLowerCase() === tableName.toLowerCase()
        );

        if (!table) {
          const available = prg.tables.map((t) => t.name).join(", ");
          process.stderr.write(`${chalk.red("Error:")} Table "${tableName}" not found.\n`);
          process.stderr.write(`Available tables: ${available || "none"}\n`);
          process.exitCode = 1;
          return;
        }

        if (options.json) {
          printJson({
            name: table.name,
            columns: table.columns,
            rows: table.rows,
            values: table.values,
          });
          return;
        }

        if (options.csv) {
          // CSV output
          for (const row of table.values) {
            process.stdout.write(row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(",") + "\n");
          }
          return;
        }

        // Human readable - show as formatted table
        printHeading(`Table: ${table.name} (${table.columns} cols × ${table.rows} rows)`);

        if (table.values.length === 0) {
          process.stdout.write("(empty table)\n");
          return;
        }

        // Use console.table for nice formatting if rows have headers
        if (table.values.length > 1) {
          const headers = table.values[0];
          const dataRows = table.values.slice(1);

          // Create objects with header keys
          const objects = dataRows.map((row) => {
            const obj: Record<string, string> = {};
            headers.forEach((header, i) => {
              obj[header || `col${i}`] = row[i] ?? "";
            });
            return obj;
          });

          // Limit output for very large tables
          const maxRows = 50;
          if (objects.length > maxRows) {
            console.table(objects.slice(0, maxRows));
            process.stdout.write(`\n... and ${objects.length - maxRows} more rows (use --json for full output)\n`);
          } else {
            console.table(objects);
          }
        } else {
          // Single row - just print it
          process.stdout.write(table.values[0].join(" | ") + "\n");
        }
      } catch (error) {
        handleError(error);
      }
    });
}

export { registerTableCommand };
