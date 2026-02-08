import type { Command } from "commander";
import { render } from "ink";
import React from "react";
import { parsePrg } from "@ediabas/best-parser";
import { App } from "../tui/App.js";
import { readFileBuffer } from "../utils/prg.js";
import { handleError } from "../utils/output.js";

function registerExploreCommand(program: Command): void {
  program
    .command("explore")
    .argument("<file>", "PRG/GRP file to explore")
    .description("Explore a PRG/GRP file in an interactive TUI")
    .action((filePath: string) => {
      try {
        const buffer = readFileBuffer(filePath);
        const prg = parsePrg(buffer);
        render(React.createElement(App, { filePath, buffer, prg }));
      } catch (error) {
        handleError(error);
      }
    });
}

export { registerExploreCommand };
