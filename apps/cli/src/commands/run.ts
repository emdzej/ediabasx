import type { Command } from "commander";
import chalk from "chalk";
import fs from "node:fs";
import path from "node:path";
import { render } from "ink";
import React from "react";
import type { EdiabasJobResult } from "@emdzej/ediabasx-ediabas";
import { createInterface } from "@emdzej/ediabasx-interfaces";
import { resolveSgbd, DEFAULT_SERVER_PORT } from "@emdzej/ediabasx-host-config";
import type { EdiabasJobResponse, EdiabasResultSet } from "@emdzej/ediabasx-core";
import { RunnerApp } from "../tui/RunnerApp.js";
import { readPrgFile } from "../utils/prg.js";
import { handleError, printJson } from "../utils/output.js";
import {
  addInterfaceOptions,
  formatInterfaceSummary,
  resolveInterfaceSelection,
} from "../utils/interface.js";
import type { InterfaceCliOptions } from "../utils/interface.js";
import { DEFAULT_CONFIG_PATH, loadConfig } from "../utils/config.js";
import type { PrgJob } from "@emdzej/ediabasx-best-parser";

function printJobInfo(job: PrgJob): void {
  process.stdout.write(`${chalk.bold.cyan("Job:")} ${chalk.bold(job.name)}\n`);
  if (job.comment) {
    process.stdout.write(`${chalk.gray(job.comment)}\n`);
  }
  process.stdout.write("\n");

  if (job.args.length > 0) {
    process.stdout.write(`${chalk.bold("Arguments")} (${job.args.length}):\n`);
    for (const arg of job.args) {
      const comment = arg.comment ? chalk.gray(` - ${arg.comment}`) : "";
      process.stdout.write(`  ${chalk.yellow(arg.name.padEnd(20))} ${chalk.blue(arg.type)}${comment}\n`);
    }
    process.stdout.write("\n");
  } else {
    process.stdout.write(`${chalk.gray("No arguments required.")}\n\n`);
  }

  if (job.results.length > 0) {
    process.stdout.write(`${chalk.bold("Results")} (${job.results.length}):\n`);
    for (const result of job.results) {
      const comment = result.comment ? chalk.gray(` - ${result.comment}`) : "";
      process.stdout.write(`  ${chalk.green(result.name.padEnd(20))} ${chalk.blue(result.type)}${comment}\n`);
    }
  } else {
    process.stdout.write(`${chalk.gray("No results defined.")}\n`);
  }
}

function printJobUsage(job: PrgJob, filePath: string): void {
  const fileName = path.basename(filePath);
  const argsStr = job.args.map((arg) => `<${arg.name}>`).join(" ");
  process.stdout.write(`${chalk.bold("Usage:")}\n`);
  process.stdout.write(`  ediabas run ${fileName} ${job.name}${argsStr ? " " + argsStr : ""}\n\n`);

  if (job.args.length > 0) {
    process.stdout.write(`${chalk.bold("Arguments:")}\n`);
    for (const arg of job.args) {
      const comment = arg.comment ? ` - ${arg.comment}` : "";
      process.stdout.write(`  ${chalk.yellow(arg.name.padEnd(20))} (${arg.type})${comment}\n`);
    }
  }
}

function printResultSet(
  results: EdiabasJobResult[],
  nameWidth: number,
  typeWidth: number
): void {
  for (const result of results) {
    const valueStr = formatResultValueHuman(result);
    process.stdout.write(
      `  ${chalk.green(result.name.padEnd(nameWidth))}  ${chalk.blue(result.type.padEnd(typeWidth))}  ${valueStr}\n`
    );
  }
}

function printResultsHuman(sets: EdiabasJobResult[][]): void {
  // Filter out empty sets so we don't print "Set N (empty)" headers.
  const nonEmptySets = sets.filter((set) => set.length > 0);
  if (nonEmptySets.length === 0) {
    process.stdout.write(`${chalk.gray("No results returned.")}\n`);
    return;
  }

  // Width derived from all results across all sets so columns align across sets.
  const all = nonEmptySets.flat();
  const nameWidth = Math.max(6, ...all.map((result) => result.name.length));
  const typeWidth = Math.max(6, ...all.map((result) => result.type.length));

  const showSetHeaders = nonEmptySets.length > 1;

  process.stdout.write(`${chalk.bold("Results:")}\n`);

  if (!showSetHeaders) {
    process.stdout.write(
      `  ${chalk.gray("Name".padEnd(nameWidth))}  ${chalk.gray("Type".padEnd(typeWidth))}  ${chalk.gray("Value")}\n`
    );
    process.stdout.write(
      `  ${chalk.gray("─".repeat(nameWidth))}  ${chalk.gray("─".repeat(typeWidth))}  ${chalk.gray("─".repeat(30))}\n`
    );
    printResultSet(nonEmptySets[0], nameWidth, typeWidth);
    return;
  }

  // Multi-set output: one labeled section per set. Matches the BMW EDIABAS
  // `ResultSets` shape — each set is one record (e.g. one fault from FS_LESEN).
  nonEmptySets.forEach((set, index) => {
    if (index > 0) {
      process.stdout.write("\n");
    }
    process.stdout.write(`${chalk.bold(`  Set ${index + 1}/${nonEmptySets.length}`)}\n`);
    process.stdout.write(
      `  ${chalk.gray("Name".padEnd(nameWidth))}  ${chalk.gray("Type".padEnd(typeWidth))}  ${chalk.gray("Value")}\n`
    );
    process.stdout.write(
      `  ${chalk.gray("─".repeat(nameWidth))}  ${chalk.gray("─".repeat(typeWidth))}  ${chalk.gray("─".repeat(30))}\n`
    );
    printResultSet(set, nameWidth, typeWidth);
  });
}

function formatResultValueHuman(result: EdiabasJobResult): string {
  if (result.value instanceof Uint8Array) {
    const hex = Array.from(result.value)
      .map((byte) => byte.toString(16).padStart(2, "0").toUpperCase())
      .join(" ");
    if (hex.length > 60) {
      return chalk.yellow(`[${result.value.length} bytes] `) + hex.slice(0, 57) + "...";
    }
    return chalk.yellow(`[${result.value.length} bytes] `) + hex;
  }
  if (typeof result.value === "number") {
    return chalk.cyan(result.value.toString());
  }
  if (typeof result.value === "string") {
    return result.value;
  }
  return String(result.value);
}

function formatResultValueJson(result: EdiabasJobResult): EdiabasJobResult["value"] | number[] {
  if (result.value instanceof Uint8Array) {
    return Array.from(result.value);
  }
  return result.value;
}

type RunnerExecutionResult = {
  resultSets: EdiabasJobResult[][];
  executionTimeMs: number;
};

/**
 * RunnerSession keeps a single `Ediabas` instance + transport alive for the
 * lifetime of the TUI runner so that:
 *
 *   - the serial port isn't closed/reopened between jobs (saves ~200ms FTDI
 *     overhead and avoids breaking the K-line diagnostic session),
 *   - the adapter probe runs only once,
 *   - `INITIALISIERUNG` runs only on the first job (the `Ediabas` instance's
 *     `initialized` flag persists),
 *   - the UI gets a reactive view of the underlying connection state.
 */
type ConnectionPhase =
  | "idle"
  | "connecting"
  | "connected"
  | "error"
  | "disconnected";

type ConnectionStatus = {
  phase: ConnectionPhase;
  message: string;
  /** True when comm is healthy enough to run a job. */
  ready: boolean;
};

type RunnerSession = {
  /** Eagerly establish the link so the interface panel can show "Connected". */
  connect: () => Promise<void>;
  /** Run a job on the persistent connection. Reconnects transparently on transport error. */
  run: (jobName: string, params: string[]) => Promise<RunnerExecutionResult>;
  /** Subscribe to connection-state transitions. Returns an unsubscribe fn. */
  subscribe: (listener: (status: ConnectionStatus) => void) => () => void;
  /** Current snapshot of the connection state. */
  getStatus: () => ConnectionStatus;
  /** Disconnect and free resources. Idempotent. */
  shutdown: () => Promise<void>;
};

async function createRunnerSession(
  filePath: string,
  options: InterfaceCliOptions & { results?: string }
): Promise<RunnerSession> {
  const { Ediabas } = await import("@emdzej/ediabasx-ediabas");
  const { SimulationInterface } = await import("@emdzej/ediabasx-interface-base");
  const ecuPath = path.dirname(path.resolve(filePath));
  const timeout = Number.parseInt(options.timeout ?? "5000", 10);
  const selection = resolveInterfaceSelection(options, "simulation");
  const useSimulation = selection.name === "simulation";

  /* One source of truth — explicit `SimulationInterface` for the fake
     path, real interface factory otherwise. No parallel `simulation`
     flag (removed from `EdiabasConfig` in 0.7.0). */
  const buildInterface = () =>
    useSimulation
      ? new SimulationInterface()
      : createInterface(selection.name, selection.options);

  let iface = buildInterface();

  let ediabas = new Ediabas({
    ecuPath,
    interface: iface,
    timeout: Number.isFinite(timeout) ? timeout : 5000,
  });

  await ediabas.loadSgbd(path.basename(filePath));

  const resultsFilter = options.results
    ? new Set(options.results.split(",").map((value) => value.trim().toUpperCase()))
    : undefined;

  let status: ConnectionStatus = {
    phase: "idle",
    message: useSimulation ? "Simulation (no hardware)" : "Not connected",
    ready: false,
  };
  const listeners = new Set<(status: ConnectionStatus) => void>();

  const setStatus = (next: ConnectionStatus): void => {
    status = next;
    for (const listener of listeners) {
      try {
        listener(status);
      } catch {
        /* listener errors must not break the runner */
      }
    }
  };

  /** Build a human description of the active link from the underlying interface. */
  const describeLink = (): string => {
    if (useSimulation) {
      return "Simulation";
    }
    if (!iface) return "No interface";
    // Best-effort feature detection — we don't want a hard import on
    // SerialInterface here because the interface may be ENET, gateway, etc.
    const candidate = iface as unknown as {
      isUsingKDCanAdapter?: () => boolean;
      getDs2ConceptId?: () => number | null;
      getAdapterInfo?: () => { adapterType: number; adapterVersion: number };
    };
    const parts: string[] = [selection.name];
    const opts = selection.options as Record<string, string | number | boolean | undefined>;
    const port = opts.port;
    const host = opts.host;
    const baud = opts.baudRate;
    // For serial-based transports the port string is a device path; append
    // the baud rate inline (`/dev/ttyUSB0 @ 9600`) so the Interface panel
    // can carry it on the status line and drop the redundant summary line.
    // For ENET/gateway "port" is a network port and pairs with a host
    // (`192.168.0.1:6801`).
    if (typeof host === "string" && host.length > 0 && (typeof port === "string" || typeof port === "number")) {
      parts.push(`${host}:${port}`);
    } else if (typeof port === "string" && port.length > 0) {
      const baudStr = typeof baud === "number" || (typeof baud === "string" && baud.length > 0)
        ? ` @ ${baud}`
        : "";
      parts.push(`${port}${baudStr}`);
    }
    if (candidate.isUsingKDCanAdapter && candidate.isUsingKDCanAdapter()) {
      parts.push("smart K+DCAN");
    } else if (candidate.getAdapterInfo) {
      const info = candidate.getAdapterInfo();
      if (info.adapterType >= 0x0002) {
        parts.push(`adapter 0x${info.adapterType.toString(16)} v${info.adapterVersion}`);
      } else {
        parts.push("passthrough");
      }
    }
    if (candidate.getDs2ConceptId) {
      const concept = candidate.getDs2ConceptId();
      if (concept !== null) parts.push(`DS2 concept 0x${concept.toString(16)}`);
    }
    return parts.join(" · ");
  };

  const ensureConnected = async (): Promise<void> => {
    if (status.ready) return;
    setStatus({ phase: "connecting", message: "Connecting...", ready: false });
    try {
      await ediabas.connect();
      setStatus({ phase: "connected", message: `Connected · ${describeLink()}`, ready: true });
    } catch (error) {
      setStatus({
        phase: "error",
        message: `Connect failed: ${(error as Error).message}`,
        ready: false,
      });
      throw error;
    }
  };

  const reconnect = async (): Promise<void> => {
    setStatus({ phase: "connecting", message: "Reconnecting...", ready: false });
    try {
      await ediabas.disconnect();
    } catch {
      /* ignore — we're rebuilding anyway */
    }
    iface = buildInterface();
    ediabas = new Ediabas({
      ecuPath,
      interface: iface,
      timeout: Number.isFinite(timeout) ? timeout : 5000,
    });
    await ediabas.loadSgbd(path.basename(filePath));
    await ensureConnected();
  };

  const run = async (jobName: string, params: string[]): Promise<RunnerExecutionResult> => {
    await ensureConnected();
    const startTime = Date.now();
    let resultSets: EdiabasJobResult[][] = [];
    try {
      resultSets = await ediabas.executeJob(jobName, { params });
    } catch (error) {
      // If the failure looks like a transport-level break (interface not
      // connected, port closed, IFH errors), tear down and reconnect for the
      // next attempt. The caller still gets the original error.
      const message = (error as Error).message ?? "";
      const transportFailure =
        /not connected|EBADF|EAGAIN|EIO|EDIABAS_IFH_/i.test(message);
      setStatus({
        phase: transportFailure ? "error" : "connected",
        message: transportFailure
          ? `Connection lost: ${message}`
          : `Connected · ${describeLink()}`,
        ready: !transportFailure,
      });
      if (transportFailure) {
        // Best-effort recovery; if reconnect fails the next run() call will retry.
        void reconnect().catch(() => {
          /* status already set to error */
        });
      }
      throw error;
    }

    const executionTimeMs = Date.now() - startTime;
    // Refresh status (covers post-INITIALISIERUNG link details like DS2 concept).
    setStatus({ phase: "connected", message: `Connected · ${describeLink()}`, ready: true });

    const filteredSets = resultsFilter
      ? resultSets
          .map((set) => set.filter((result) => resultsFilter.has(result.name.toUpperCase())))
          .filter((set) => set.length > 0)
      : resultSets;
    return { resultSets: filteredSets, executionTimeMs };
  };

  return {
    connect: async () => {
      try {
        await ensureConnected();
      } catch {
        /* status stream already carries the error */
      }
    },
    run,
    subscribe(listener) {
      listeners.add(listener);
      // Fire current state immediately so subscribers don't have to poll.
      try {
        listener(status);
      } catch {
        /* ignore */
      }
      return () => {
        listeners.delete(listener);
      };
    },
    getStatus: () => status,
    async shutdown() {
      try {
        await ediabas.disconnect();
      } catch {
        /* ignore */
      }
      setStatus({ phase: "disconnected", message: "Disconnected", ready: false });
      listeners.clear();
    },
  };
}

export type { ConnectionStatus, ConnectionPhase, RunnerSession };

function resolveFileArg(fileArg: string, configPath?: string): string {
  const lower = fileArg.toLowerCase();
  const hasPathSep = fileArg.includes(path.sep) || fileArg.includes("/");
  const hasExt = lower.endsWith(".prg") || lower.endsWith(".grp");

  if (hasPathSep || hasExt) return path.resolve(fileArg);

  const cfgPath = configPath ?? (fs.existsSync(DEFAULT_CONFIG_PATH) ? DEFAULT_CONFIG_PATH : undefined);
  const cfg = cfgPath ? loadConfig(cfgPath) : undefined;
  return resolveSgbd(fileArg, cfg?.sgbdPath);
}

function wireTypeToLocal(type: string): EdiabasJobResult["type"] {
  switch (type) {
    case "text": return "string";
    case "integer": return "int";
    default: return type as EdiabasJobResult["type"];
  }
}

function wireResultsToLocal(response: EdiabasJobResponse): EdiabasJobResult[][] {
  return response.sets.map((set: EdiabasResultSet) =>
    Object.values(set).map((entry) => ({
      name: entry.name,
      type: wireTypeToLocal(entry.type),
      value: Array.isArray(entry.value) ? new Uint8Array(entry.value) : entry.value,
    })),
  );
}

function resolveServerAddress(
  serverFlag: string | true | undefined,
  configPath?: string,
): { host: string; port: number; transport: "tcp" | "websocket" } | undefined {
  if (!serverFlag) return undefined;

  const cfgPath = configPath ?? (fs.existsSync(DEFAULT_CONFIG_PATH) ? DEFAULT_CONFIG_PATH : undefined);
  const cfg = cfgPath ? loadConfig(cfgPath) : undefined;
  const serverCfg = cfg?.server;

  if (serverFlag === true) {
    return {
      host: serverCfg?.host ?? "127.0.0.1",
      port: serverCfg?.port ?? DEFAULT_SERVER_PORT,
      transport: serverCfg?.transport ?? "websocket",
    };
  }

  const parts = serverFlag.split(":");
  const host = parts[0] || serverCfg?.host || "127.0.0.1";
  const port = parts[1] ? Number.parseInt(parts[1], 10) : (serverCfg?.port ?? DEFAULT_SERVER_PORT);
  return { host, port, transport: serverCfg?.transport ?? "websocket" };
}

function registerRunCommand(program: Command): void {
  const runCommand = program
    .command("run")
    .argument("<file>", "PRG/GRP file path or bare ECU name (resolved via sgbdPath)")
    .argument("[job]", "Job name to execute")
    .argument("[params...]", "Job parameters")
    .option("-s, --simulation", "Run in simulation mode (alias for --interface simulation)")
    .option("-t, --timeout <ms>", "Communication timeout in milliseconds", "5000")
    .option("--gateway <host:port>", "Use a remote gateway server (alias for --interface gateway)")
    .option("--server [host:port]", "Execute via remote EdiabasX server (reads config if no address)")
    .option("--server-transport <transport>", "Server wire transport: 'websocket' (default) or 'tcp'")
    .option("--json", "Output results as JSON")
    .option("--results <names>", "Filter specific results (comma-separated)")
    .option("--info", "Show job info instead of executing")
    .description("Execute a job from PRG/GRP file")
    .action(async (
      filePath: string,
      jobName: string | undefined,
      params: string[],
      options: InterfaceCliOptions & {
        json?: boolean;
        results?: string;
        info?: boolean;
        server?: string | true;
        serverTransport?: string;
      }
    ) => {
      try {
        // Server mode: route through EdiabasClient instead of local Ediabas
        const serverAddr = resolveServerAddress(options.server, options.config);
        if (serverAddr) {
          if (!jobName) {
            process.stderr.write(`${chalk.red("Error:")} Job name is required in server mode.\n`);
            process.stderr.write(`Usage: ediabasx run <ecu> <job> [params...] --server\n`);
            process.exitCode = 1;
            return;
          }
          if (options.serverTransport) {
            const t = options.serverTransport.toLowerCase();
            if (t === "tcp" || t === "websocket") serverAddr.transport = t;
          }

          const { EdiabasClient } = await import("@emdzej/ediabasx-client");
          const client = new EdiabasClient({
            host: serverAddr.host,
            port: serverAddr.port,
            transport: serverAddr.transport,
          });

          const resultsFilter = options.results
            ? new Set(options.results.split(",").map((v) => v.trim().toUpperCase()))
            : undefined;

          if (!options.json) {
            process.stdout.write(`${chalk.gray(`Server: ${serverAddr.host}:${serverAddr.port} (${serverAddr.transport})`)}\n`);
            process.stdout.write(`${chalk.cyan("Executing job:")} ${chalk.bold(filePath)}/${chalk.bold(jobName)}\n`);
            if (params.length > 0) {
              process.stdout.write(`${chalk.cyan("Parameters:")} ${params.join(", ")}\n`);
            }
            process.stdout.write("\n");
          }

          const startTime = Date.now();
          try {
            await client.init();
            const response = await client.job(filePath, jobName, params.length > 0 ? params.join(";") : undefined);
            const executionTime = Date.now() - startTime;

            const resultSets = wireResultsToLocal(response);
            const filteredSets = resultsFilter
              ? resultSets
                  .map((set) => set.filter((r) => resultsFilter.has(r.name.toUpperCase())))
                  .filter((set) => set.length > 0)
              : resultSets;

            if (options.json) {
              printJson({
                job: jobName,
                ecu: filePath,
                params,
                resultSets: filteredSets.map((set) =>
                  set.map((r) => ({ name: r.name, type: r.type, value: formatResultValueJson(r) })),
                ),
                executionTimeMs: executionTime,
              });
            } else {
              printResultsHuman(filteredSets);
              process.stdout.write(`\n${chalk.gray(`Execution time: ${executionTime}ms`)}\n`);
            }
          } finally {
            await client.end();
          }
          return;
        }

        filePath = resolveFileArg(filePath, options.config);
        const prg = readPrgFile(filePath);
        if (!jobName) {
          const selection = resolveInterfaceSelection(options, "simulation");
          // Pass the full job metadata so the Run TUI's optional Details
          // panel (toggled with "i") can show the same comment/args/results
          // view the Explore TUI offers. Binary-only jobs (no top-level
          // metadata in the PRG) get empty args/results.
          const jobs = prg.jobs.length > 0
            ? prg.jobs.map((job) => ({
                name: job.name,
                comment: job.comment,
                args: job.args,
                results: job.results,
              }))
            : prg.binaryJobs.map((job) => ({ name: job.name, args: [], results: [] }));
          const interfaceSummary = formatInterfaceSummary(selection.name, selection.options);

          // Build a single, persistent runner session so the TUI keeps the
          // serial port open across job runs (no port close/reopen, probe runs
          // once, INITIALISIERUNG runs once per session, K-line stays alive).
          const session = await createRunnerSession(filePath, options);

          // Pre-warm the link so the interface panel reflects the real
          // connection state before the user picks a job. Failures show up
          // via the status stream; never bubble here.
          void session.connect();

          const ink = render(
            React.createElement(RunnerApp, {
              filePath,
              jobs,
              interfaceSummary,
              onRun: (job: string, params: string[]) => session.run(job, params),
              subscribeStatus: session.subscribe,
              initialStatus: session.getStatus(),
            })
          );

          // Clean up the session when the TUI exits (Ctrl+C, q, or process exit).
          const cleanup = async () => {
            await session.shutdown();
          };
          ink.waitUntilExit().finally(() => {
            void cleanup();
          });
          process.on("SIGINT", () => {
            void cleanup().finally(() => process.exit(0));
          });
          return;
        }

        const { Ediabas } = await import("@emdzej/ediabasx-ediabas");
        const ecuPath = path.dirname(path.resolve(filePath));

        let jobMeta = prg.jobs.find((job) => job.name.toUpperCase() === jobName.toUpperCase());
        const binaryJob = prg.binaryJobs.find((job) => job.name.toUpperCase() === jobName.toUpperCase());

        if (!jobMeta && !binaryJob) {
          const availableJobs = prg.jobs.length > 0
            ? prg.jobs.map((job) => job.name)
            : prg.binaryJobs.map((job) => job.name);
          process.stderr.write(`${chalk.red("Error:")} Job "${jobName}" not found.\n`);
          process.stderr.write(`Available jobs: ${availableJobs.join(", ") || "none"}\n`);
          process.exitCode = 1;
          return;
        }

        if (!jobMeta && binaryJob) {
          jobMeta = {
            name: binaryJob.name,
            offset: binaryJob.offset,
            argCount: 0,
            resultCount: 0,
            args: [],
            results: [],
          };
        }

        if (!jobMeta) {
          process.stderr.write(`${chalk.red("Error:")} Job metadata unavailable.\n`);
          process.exitCode = 1;
          return;
        }

        if (options.info) {
          printJobInfo(jobMeta);
          return;
        }

        const requiredArgs = jobMeta.args.length;
        if (requiredArgs > 0 && params.length < requiredArgs) {
          process.stderr.write(
            `${chalk.red("Error:")} Job ${chalk.bold(jobMeta.name)} requires ${requiredArgs} argument(s), but ${params.length} provided.\n\n`
          );
          printJobUsage(jobMeta, filePath);
          process.exitCode = 1;
          return;
        }

        const timeout = Number.parseInt(options.timeout ?? "5000", 10);
        const selection = resolveInterfaceSelection(options, "simulation");
        const useSimulation = selection.name === "simulation";

        const { SimulationInterface } = await import("@emdzej/ediabasx-interface-base");
        const iface = useSimulation
          ? new SimulationInterface()
          : createInterface(selection.name, selection.options);

        const ediabas = new Ediabas({
          ecuPath,
          interface: iface,
          timeout: Number.isFinite(timeout) ? timeout : 5000,
        });

        await ediabas.loadSgbd(path.basename(filePath));

        const resultsFilter = options.results
          ? new Set(options.results.split(",").map((value) => value.trim().toUpperCase()))
          : undefined;

        if (!options.json) {
          process.stdout.write(`${chalk.cyan("Executing job:")} ${chalk.bold(jobMeta.name)}\n`);
          if (params.length > 0) {
            process.stdout.write(`${chalk.cyan("Parameters:")} ${params.join(", ")}\n`);
          }
          process.stdout.write("\n");
        }

        const startTime = Date.now();
        let resultSets: EdiabasJobResult[][] = [];

        // Always connect — BEST2 host expects the comm interface to be ready before
        // running the job. For simulation, connect() is a cheap "set connected=true".
        try {
          await ediabas.connect();
          resultSets = await ediabas.executeJob(jobName, { params });
        } finally {
          await ediabas.disconnect();
        }

        const executionTime = Date.now() - startTime;

        const filteredSets = resultsFilter
          ? resultSets
              .map((set) => set.filter((result) => resultsFilter.has(result.name.toUpperCase())))
              .filter((set) => set.length > 0)
          : resultSets;

        if (options.json) {
          printJson({
            job: jobMeta.name,
            params,
            // Emit sets explicitly so multi-record jobs (e.g. FS_LESEN) are
            // preserved. Each set is one record; field names may repeat.
            resultSets: filteredSets.map((set) =>
              set.map((result) => ({
                name: result.name,
                type: result.type,
                value: formatResultValueJson(result),
              }))
            ),
            executionTimeMs: executionTime,
          });
          return;
        }

        printResultsHuman(filteredSets);
        process.stdout.write(`\n${chalk.gray(`Execution time: ${executionTime}ms`)}\n`);
      } catch (error) {
        handleError(error);
      }
    });

  addInterfaceOptions(runCommand);
}

export { registerRunCommand };
