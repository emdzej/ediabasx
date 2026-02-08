import type { Command } from "commander";
import { GatewayServer, createInterface } from "@ediabasx/interfaces";
import { addInterfaceOptions, resolveInterfaceSelection } from "../utils/interface.js";
import type { InterfaceCliOptions } from "../utils/interface.js";
import { handleError } from "../utils/output.js";

function registerGatewayCommand(program: Command): void {
  const gatewayCommand = program
    .command("gateway")
    .option("--host <host>", "host to bind the gateway server", "127.0.0.1")
    .option("--port <port>", "port to bind the gateway server", "6801")
    .description("Start the JSON-RPC gateway server")
    .action(async (options: InterfaceCliOptions & { host?: string; port?: string }) => {
      try {
        const host = options.host ?? "127.0.0.1";
        const port = Number.parseInt(options.port ?? "6801", 10);
        if (!Number.isFinite(port) || port <= 0) {
          throw new Error("Port must be a positive number");
        }

        const selection = resolveInterfaceSelection(options, "simulation");
        const iface = createInterface(selection.name, selection.options);

        const server = new GatewayServer({ host, port, interface: iface, logger: console });
        await server.start();
      } catch (error) {
        handleError(error);
      }
    });

  addInterfaceOptions(gatewayCommand);
}

export { registerGatewayCommand };
