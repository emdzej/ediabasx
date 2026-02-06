import { createServer, type Socket, type Server } from "node:net";

export type SimulatorServerOptions = {
  host: string;
  port: number;
  logger?: {
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
  };
};

export class SimulatorServer {
  private readonly host: string;
  private port: number;
  private readonly logger: NonNullable<SimulatorServerOptions["logger"]>;
  private server?: Server;
  private clients = new Set<Socket>();
  private shuttingDown = false;

  constructor(options: SimulatorServerOptions) {
    this.host = options.host;
    this.port = options.port;
    this.logger = options.logger ?? console;
  }

  get address(): { host: string; port: number } {
    return { host: this.host, port: this.port };
  }

  get clientCount(): number {
    return this.clients.size;
  }

  async start(): Promise<void> {
    if (this.server) return;

    this.server = createServer((socket) => this.handleConnection(socket));

    const server = this.server;
    await new Promise<void>((resolve, reject) => {
      const onError = (err: Error) => reject(err);
      server.on("error", onError);
      server.listen(this.port, this.host, () => {
        server.removeListener("error", onError);
        resolve();
      });
    });

    const address = this.server.address();
    if (address && typeof address === "object") {
      this.port = address.port;
    }

    this.logger.info(`Simulator server listening on ${this.host}:${this.port}`);
  }

  async stop(): Promise<void> {
    const server = this.server;
    if (!server || this.shuttingDown) return;

    this.shuttingDown = true;
    this.logger.info("Simulator server shutting down");

    for (const socket of this.clients) {
      socket.end();
      socket.destroy();
    }
    this.clients.clear();

    await new Promise<void>((resolve) => {
      server.close(() => resolve());
    });

    this.server = undefined;
    this.shuttingDown = false;
  }

  private handleConnection(socket: Socket): void {
    this.clients.add(socket);
    this.logger.info(`Client connected (${this.clients.size} total)`);

    socket.on("close", () => {
      this.clients.delete(socket);
      this.logger.info(`Client disconnected (${this.clients.size} total)`);
    });

    socket.on("error", (error) => {
      this.logger.error(`Client socket error: ${error.message}`);
      socket.destroy();
    });
  }
}
