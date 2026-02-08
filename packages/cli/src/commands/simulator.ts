import type { Command } from "commander";
import { render } from "ink";
import React from "react";
import { SimulatorApp } from "../tui/SimulatorApp.js";
import { SimulatorServer } from "../simulator/SimulatorServer.js";
import { handleError } from "../utils/output.js";
import { parseNumber } from "../utils/numbers.js";

type SimulatorInputMode = "text" | "hex";

type SimulatorLineEnding = "crlf" | "lf" | "raw";

const DEFAULT_SIMULATOR_HOST = "127.0.0.1";
const DEFAULT_SIMULATOR_PORT = 6802;

function parseSimulatorMode(value: string | undefined): SimulatorInputMode {
  const resolved = (value ?? "text").toLowerCase();
  if (resolved === "text" || resolved === "hex") {
    return resolved;
  }
  throw new Error(`Invalid simulator mode: ${value ?? ""}`);
}

function parseSimulatorLineEnding(value: string | undefined): SimulatorLineEnding {
  const resolved = (value ?? "crlf").toLowerCase();
  if (resolved === "crlf" || resolved === "lf" || resolved === "raw") {
    return resolved;
  }
  throw new Error(`Invalid simulator line ending: ${value ?? ""}`);
}

function registerSimulatorCommand(program: Command): void {
  program
    .command("simulator")
    .option("--host <host>", "host to bind", DEFAULT_SIMULATOR_HOST)
    .option("--port <port>", "port to bind", DEFAULT_SIMULATOR_PORT.toString())
    .option("--mode <mode>", "default input mode (text|hex)", "text")
    .option("--line-ending <ending>", "default line ending (crlf|lf|raw)", "crlf")
    .description("Start the interactive simulator")
    .action(async (options: { host?: string; port?: string; mode?: string; lineEnding?: string }) => {
      try {
        const host = options.host ?? DEFAULT_SIMULATOR_HOST;
        const port = parseNumber(options.port ?? `${DEFAULT_SIMULATOR_PORT}`, "Simulator port");
        const mode = parseSimulatorMode(options.mode);
        const lineEnding = parseSimulatorLineEnding(options.lineEnding);
        const server = new SimulatorServer({ host, port, logger: console });
        await server.start();
        const address = server.address;

        let shuttingDown = false;
        const stopServer = async () => {
          if (shuttingDown) return;
          shuttingDown = true;
          await server.stop();
        };

        const instance = render(
          React.createElement(SimulatorApp, {
            host: address.host,
            port: address.port,
            server,
            defaultMode: mode,
            defaultLineEnding: lineEnding,
            onExit: stopServer,
          })
        );

        const shutdown = async () => {
          await stopServer();
          instance.unmount();
        };

        process.on("SIGINT", () => {
          void shutdown();
        });
        process.on("SIGTERM", () => {
          void shutdown();
        });
      } catch (error) {
        handleError(error);
      }
    });
}

export { registerSimulatorCommand };
