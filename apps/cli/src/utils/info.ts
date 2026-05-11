import path from "node:path";
import chalk from "chalk";
import type { PrgFile } from "@emdzej/ediabasx-best-parser";
import { printHeading } from "./output.js";

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

export { printInfoSummary };
