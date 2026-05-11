import type { Command } from "commander";
import chalk from "chalk";
import fs from "node:fs";
import { render } from "ink";
import React from "react";
import { ConfigureApp } from "../tui/ConfigureApp.js";
import { DEFAULT_CONFIG_PATH, loadConfig, saveConfig } from "../utils/config.js";
import type { EdiabasConfig } from "../utils/config.js";
import { handleError } from "../utils/output.js";

function registerConfigureCommand(program: Command): void {
  program
    .command("configure")
    .description("Interactive configuration wizard")
    .option("-o, --output <path>", "output config file path", DEFAULT_CONFIG_PATH)
    .action(async (options: { output: string }) => {
      try {
        const outputPath = options.output;

        let initialConfig: EdiabasConfig | undefined;
        if (fs.existsSync(outputPath)) {
          try {
            initialConfig = loadConfig(outputPath);
            process.stdout.write(
              `${chalk.gray(`Editing existing config: ${outputPath}`)}\n\n`,
            );
          } catch {
            // Ignore invalid existing config, start fresh
          }
        }

        render(
          React.createElement(ConfigureApp, {
            initialConfig,
            outputPath,
            onSave: (config: EdiabasConfig, path: string) => {
              saveConfig(config, path);
              process.stdout.write(
                `\n${chalk.green("Configuration saved:")} ${path}\n`,
              );
            },
          }),
        );
      } catch (error) {
        handleError(error);
      }
    });
}

export { registerConfigureCommand };
