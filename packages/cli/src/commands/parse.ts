import type { Command } from "commander";
import type { PrgFile } from "@ediabasx/best-parser";
import { readPrgFile } from "../utils/prg.js";
import { handleError, printJson, resolveOutputFormat } from "../utils/output.js";
import type { OutputOptions } from "../utils/output.js";
import { printInfoSummary } from "../utils/info.js";

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

function registerParseCommand(program: Command): void {
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
}

export { registerParseCommand };
