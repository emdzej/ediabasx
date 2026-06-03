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

const DEFAULT_RELAY_URL = "https://connect.bimmerz.app";
const DEFAULT_WEB_APP_URL = "https://ediabasx.bimmerz.app";

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
    .option("--connect", "register on Bimmerz Connect relay for remote access")
    .option("--relay-url <url>", "Bimmerz Connect relay URL", DEFAULT_RELAY_URL)
    .action(
      async (
        options: InterfaceCliOptions & {
          host?: string;
          port?: string;
          transport?: string;
          sgbdPath?: string;
          connect?: boolean;
          relayUrl?: string;
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

          if (options.connect) {
            await startWithRelay(server, options.relayUrl ?? DEFAULT_RELAY_URL);
          } else {
            await server.start();
          }
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

async function startWithRelay(server: EdiabasServer, relayUrl: string): Promise<void> {
  const { discoverConfig, deviceLogin, AdminClient, AdminError, accept } = await import("@emdzej/swsrs-client");
  const { FileTokenStore } = await import("@emdzej/swsrs-client/node");

  console.log(`\nBimmerz Connect: ${relayUrl}`);

  const config = await discoverConfig(relayUrl);
  const store = new FileTokenStore();

  async function authenticate(): Promise<void> {
    console.log("\nAuthenticate to create a relay session:");
    const token = await deviceLogin({
      config,
      onPrompt: (prompt) => {
        console.log(`\n  Code:  ${chalk.bold(prompt.userCode)}`);
        console.log(`  Open:  ${chalk.underline(prompt.verificationUriComplete ?? prompt.verificationUri)}\n`);
        console.log("  Waiting for authorization…");
      },
    });
    await store.save(token);
    console.log(chalk.green("  Authenticated.\n"));
  }

  let cached = await store.load();
  if (!cached || (cached.expires_at && cached.expires_at < Date.now())) {
    await authenticate();
  }

  const admin = new AdminClient({
    baseURL: relayUrl,
    token: async () => {
      const t = await store.load();
      return t!.access_token;
    },
  });

  let session;
  try {
    session = await admin.createSession();
  } catch (err) {
    if (err instanceof AdminError && err.status === 401) {
      console.log(chalk.yellow("Cached token expired — re-authenticating…"));
      await store.clear();
      await authenticate();
      session = await admin.createSession();
    } else {
      throw err;
    }
  }

  const relayWsUrl = relayUrl.replace(/^http/, "ws");
  const peer = await accept({
    relayURL: relayWsUrl,
    sessionId: session.id,
    token: session.responder_token,
  });

  const sessionToken = `${session.id}.${session.initiator_token}`;
  const deepLink = `${DEFAULT_WEB_APP_URL}?connect=${encodeURIComponent(sessionToken)}`;

  console.log(chalk.green("Bimmerz Connect session active\n"));
  console.log(`  Session token: ${chalk.bold(sessionToken)}`);
  console.log(`  Link:          ${chalk.underline(deepLink)}\n`);

  server.attachStandardWebSocket(peer.socket);
  server.ensureBroadcastSink();
  server.bindSignalHandlers();

  await peer.closed;
  console.log(chalk.yellow("\nRelay connection closed."));
}

export { registerServeCommand };
