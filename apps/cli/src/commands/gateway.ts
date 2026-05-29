import type { Command } from "commander";
import { GatewayServer, createInterface } from "@emdzej/ediabasx-interfaces";
import {
  addInterfaceOptions,
  formatInterfaceSummary,
  resolveInterfaceSelection
} from "../utils/interface.js";
import type { InterfaceCliOptions } from "../utils/interface.js";
import { handleError } from "../utils/output.js";

function registerGatewayCommand(program: Command): void {
  const gatewayCommand = program
    .command("gateway")
    .option("--host <host>", "host to bind the gateway server", "127.0.0.1")
    .option("--port <port>", "port to bind the gateway server", "6801")
    .option(
      "--transport <transport>",
      "wire framing: 'websocket' (default, browser-friendly) or 'tcp' (line-delimited JSON, Node-only clients)",
      "websocket"
    )
    .description("Start the JSON-RPC gateway server")
    .action(
      async (
        options: InterfaceCliOptions & {
          host?: string;
          port?: string;
          transport?: string;
        }
      ) => {
        try {
          const host = options.host ?? "127.0.0.1";
          const port = Number.parseInt(options.port ?? "6801", 10);
          if (!Number.isFinite(port) || port <= 0) {
            throw new Error("Port must be a positive number");
          }

          const rawTransport = (options.transport ?? "websocket").toLowerCase();
          if (rawTransport !== "tcp" && rawTransport !== "websocket") {
            throw new Error("--transport must be 'tcp' or 'websocket'");
          }
          const transport = rawTransport as "tcp" | "websocket";

          const selection = resolveInterfaceSelection(options, "simulation");
          const iface = createInterface(selection.name, selection.options);

          console.log(
            `Backend interface: ${formatInterfaceSummary(selection.name, selection.options)}`
          );

          const server = new GatewayServer({
            host,
            port,
            transport,
            interface: iface,
            logger: console
          });
          await server.start();
        } catch (error) {
          handleError(error);
        }
      }
    );

  addInterfaceOptions(gatewayCommand);
}

export { registerGatewayCommand };
