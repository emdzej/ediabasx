import type { Command } from "commander";
import chalk from "chalk";
import fs from "node:fs";
import { render } from "ink";
import React from "react";
import { EdiabasServer } from "@emdzej/ediabasx-server";
import { createInterface } from "@emdzej/ediabasx-interfaces";
import { DEFAULT_SERVER_PORT } from "@emdzej/ediabasx-host-config";
import {
  addInterfaceOptions,
  formatInterfaceSummary,
  resolveInterfaceSelection,
} from "../utils/interface.js";
import type { InterfaceCliOptions } from "../utils/interface.js";
import { handleError } from "../utils/output.js";
import { DEFAULT_CONFIG_PATH, loadConfig, saveConfig } from "../utils/config.js";
import { ServerConfigureApp } from "../tui/ServerConfigureApp.js";

function registerServeCommand(program: Command): void {
  const serveCommand = program
    .command("serve")
    .description("EdiabasX JSON-RPC server");

  const startCommand = serveCommand
    .command("start", { isDefault: true })
    .description("Start the EdiabasX JSON-RPC server for remote job execution")
    .option("--host <host>", "host to bind the server")
    .option("--port <port>", "port to bind the server")
    .option(
      "--transport <transport>",
      "wire framing: 'websocket' (default) or 'tcp' (line-delimited JSON)",
    )
    .option("--sgbd-path <path>", "path to SGBD (.prg/.grp) directory")
    .action(
      async (
        options: InterfaceCliOptions & {
          host?: string;
          port?: string;
          transport?: string;
          sgbdPath?: string;
        },
      ) => {
        try {
          const configPath = options.config ?? (fs.existsSync(DEFAULT_CONFIG_PATH) ? DEFAULT_CONFIG_PATH : undefined);
          const fileConfig = configPath ? loadConfig(configPath) : undefined;

          const sgbdPath = options.sgbdPath ?? fileConfig?.sgbdPath;
          if (!sgbdPath) {
            throw new Error(
              "No sgbdPath configured. Pass --sgbd-path or set sgbdPath in ~/.config/ediabasx/config.json, or run: ediabasx serve configure",
            );
          }

          const serverConfig = fileConfig?.server;
          const host = options.host ?? serverConfig?.host ?? "127.0.0.1";
          const port = Number.parseInt(
            options.port ?? String(serverConfig?.port ?? DEFAULT_SERVER_PORT),
            10,
          );
          if (!Number.isFinite(port) || port <= 0) {
            throw new Error("Port must be a positive number");
          }

          const rawTransport = (
            options.transport ?? serverConfig?.transport ?? "websocket"
          ).toLowerCase();
          if (rawTransport !== "tcp" && rawTransport !== "websocket") {
            throw new Error("--transport must be 'tcp' or 'websocket'");
          }
          const transport = rawTransport as "tcp" | "websocket";

          const selection = resolveInterfaceSelection(options, "simulation");
          const iface = createInterface(selection.name, selection.options);

          console.log(
            `Backend interface: ${formatInterfaceSummary(selection.name, selection.options)}`,
          );
          console.log(`SGBD path: ${sgbdPath}`);

          const server = new EdiabasServer({
            host,
            port,
            transport,
            sgbdPath,
            interface: iface,
            logger: console,
          });
          await server.start();
        } catch (error) {
          handleError(error);
        }
      },
    );

  addInterfaceOptions(startCommand);

  serveCommand
    .command("configure")
    .description("Interactive wizard for server configuration")
    .option("-o, --output <path>", "output config file path", DEFAULT_CONFIG_PATH)
    .action(async (options: { output: string }) => {
      try {
        const outputPath = options.output;

        let initialConfig = undefined;
        if (fs.existsSync(outputPath)) {
          try {
            initialConfig = loadConfig(outputPath);
            process.stdout.write(
              `${chalk.gray(`Editing existing config: ${outputPath}`)}\n\n`,
            );
          } catch { /* start fresh */ }
        }

        render(
          React.createElement(ServerConfigureApp, {
            initialConfig,
            outputPath,
            onSave: (config, path) => {
              saveConfig(config, path);
              process.stdout.write(
                `\n${chalk.green("Server configuration saved:")} ${path}\n`,
              );
            },
          }),
        );
      } catch (error) {
        handleError(error);
      }
    });
}

export { registerServeCommand };
