import type { Command } from "commander";
import chalk from "chalk";
import path from "node:path";
import { render } from "ink";
import React from "react";
import type { EdiabasJobResult } from "@emdzej/ediabasx-ediabas";
import { createInterface } from "@emdzej/ediabasx-interfaces";
import { RunnerApp } from "../tui/RunnerApp.js";
import { readPrgFile } from "../utils/prg.js";
import { handleError, printJson } from "../utils/output.js";
import {
  addInterfaceOptions,
  formatInterfaceSummary,
  resolveInterfaceSelection,
} from "../utils/interface.js";
import type { InterfaceCliOptions } from "../utils/interface.js";
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
  const ecuPath = path.dirname(path.resolve(filePath));
  const timeout = Number.parseInt(options.timeout ?? "5000", 10);
  const selection = resolveInterfaceSelection(options, "simulation");
  const useSimulation = selection.name === "simulation";

  const buildTransport = () =>
    useSimulation ? undefined : createInterface(selection.name, selection.options);

  let transport = buildTransport();

  let ediabas = new Ediabas({
    ecuPath,
    transport,
    simulation: useSimulation,
    timeout: Number.isFinite(timeout) ? timeout : 5000,
    logging: process.env.EDIABASX_VERBOSE === "1",
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
    if (!transport) return "No transport";
    // Best-effort feature detection — we don't want a hard import on
    // SerialInterface here because the transport may be ENET, gateway, etc.
    const candidate = transport as unknown as {
      isUsingKDCanAdapter?: () => boolean;
      getDs2ConceptId?: () => number | null;
      getAdapterInfo?: () => { adapterType: number; adapterVersion: number };
    };
    const parts: string[] = [selection.name];
    const port = (selection.options as Record<string, string | number | boolean | undefined>).port;
    if (typeof port === "string" && port.length > 0) parts.push(port);
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
    transport = buildTransport();
    ediabas = new Ediabas({
      ecuPath,
      transport,
      simulation: useSimulation,
      timeout: Number.isFinite(timeout) ? timeout : 5000,
      logging: process.env.EDIABASX_VERBOSE === "1",
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

function registerRunCommand(program: Command): void {
  const runCommand = program
    .command("run")
    .argument("<file>", "PRG/GRP file")
    .argument("[job]", "Job name to execute")
    .argument("[params...]", "Job parameters")
    .option("-s, --simulation", "Run in simulation mode (alias for --interface simulation)")
    .option("-t, --timeout <ms>", "Communication timeout in milliseconds", "5000")
    .option("--gateway <host:port>", "Use a remote gateway server (alias for --interface gateway)")
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
      }
    ) => {
      try {
        const prg = readPrgFile(filePath);
        if (!jobName) {
          const selection = resolveInterfaceSelection(options, "simulation");
          const jobs = prg.jobs.length > 0
            ? prg.jobs.map((job) => ({ name: job.name, args: job.args }))
            : prg.binaryJobs.map((job) => ({ name: job.name, args: [] }));
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

        const transport = useSimulation
          ? undefined
          : createInterface(selection.name, selection.options);

        const ediabas = new Ediabas({
          ecuPath,
          transport,
          simulation: useSimulation,
          timeout: Number.isFinite(timeout) ? timeout : 5000,
          logging: process.env.EDIABASX_VERBOSE === "1",
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
