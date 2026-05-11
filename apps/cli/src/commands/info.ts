import type { Command } from "commander";
import path from "node:path";
import { readPrgFile } from "../utils/prg.js";
import { handleError, printJson, resolveOutputFormat } from "../utils/output.js";
import type { OutputOptions } from "../utils/output.js";
import { printInfoSummary } from "../utils/info.js";

function registerInfoCommand(program: Command): void {
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
}

export { registerInfoCommand };
