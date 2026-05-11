/**
 * Main Ediabas library class
 */

import { parsePrg, type PrgFile } from "@emdzej/ediabasx-best-parser";
import { EdiabasError, EdiabasErrorCodes } from "@emdzej/ediabasx-core";
import {
  Interpreter,
  type ExecutionOptions,
  type JobResult,
  type CommunicationInterface,
  ParameterSet,
} from "@emdzej/ediabasx-interpreter";
import { EdiabasInterface, SimulationInterface } from "@emdzej/ediabasx-interface-base";
import { getLogger } from "@emdzej/ediabasx-logger";

// `fs/promises` and `path` are imported lazily inside `loadSgbd()` so the
// browser bundler doesn't pull them into the static graph. Consumers that
// only call `loadSgbdFromBuffer()` (the web app) never touch them.

const log = getLogger("ediabas");

export interface EdiabasConfig {
  /** Path to ECU files (.prg, .grp) */
  ecuPath: string;
  /** Hardware interface (e.g., NodeSerialTransport) */
  transport?: EdiabasInterface;
  /** Use simulation interface (no hardware) */
  simulation?: boolean;
  /** Default timeout in ms */
  timeout?: number;
  /** Enable debug logging */
  logging?: boolean;
}

export interface EdiabasJob {
  name: string;
  comment?: string;
  args: string[];
  results: string[];
}

export interface EdiabasJobResult {
  name: string;
  type: JobResult["type"];
  value: JobResult["value"];
  unit?: string;
  comment?: string;
}

export class Ediabas {
  private readonly config: EdiabasConfig & { timeout: number; logging: boolean; simulation: boolean };
  private prg: PrgFile | null = null;
  private prgPath: string | null = null;
  private commInterface: EdiabasInterface | null = null;
  /**
   * True after INITIALISIERUNG has run successfully against the loaded SGBD.
   * BMW SGBDs use the INITIALISIERUNG job to call xsetpar / wake-up routines
   * before any other diagnostic job; subsequent jobs assume the comm session
   * has already been set up. We auto-run it on the first executeJob call to
   * mirror EDIABAS's host behavior.
   */
  private initialized = false;

  constructor(config: EdiabasConfig) {
    this.config = {
      ecuPath: config.ecuPath,
      transport: config.transport,
      simulation: config.simulation ?? false,
      timeout: config.timeout ?? 5000,
      logging: config.logging ?? false,
    };

    // Create interface
    if (this.config.simulation) {
      this.commInterface = new SimulationInterface();
    } else if (this.config.transport) {
      this.commInterface = this.config.transport;
    }
  }

  /**
   * Load an SGBD by reading a `.prg` / `.grp` file from disk relative to
   * `config.ecuPath`. Node-only — uses `fs/promises` + `path` via dynamic
   * import so the browser bundler doesn't pull them into the static dep
   * graph. Browser consumers should use {@link loadSgbdFromBuffer} instead.
   */
  async loadSgbd(filename: string): Promise<void> {
    const [{ default: fs }, { default: path }] = await Promise.all([
      import("node:fs/promises"),
      import("node:path"),
    ]);
    const fullPath = path.resolve(this.config.ecuPath, filename);

    try {
      const buffer = await fs.readFile(fullPath);
      this.loadSgbdFromBuffer(new Uint8Array(buffer), fullPath);
      if (this.config.logging) {
        log.info(`Loaded SGBD: ${filename}`);
      }
    } catch (err) {
      if (err instanceof EdiabasError) throw err;
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        `Failed to load SGBD: ${filename} - ${(err as Error).message}`
      );
    }
  }

  /**
   * Load an SGBD from an in-memory buffer of `.prg` / `.grp` bytes.
   *
   * The web app uses this — it reads files via the File API
   * (`file.arrayBuffer()`) and hands the bytes here directly, sidestepping
   * any filesystem dependency. The `name` is purely for display / error
   * messages and is exposed via `getSgbdInfo().path`.
   */
  loadSgbdFromBuffer(buffer: Uint8Array, name: string): void {
    try {
      this.prg = parsePrg(buffer);
      this.prgPath = name;
      if (this.config.logging) {
        log.info(`Loaded SGBD: ${name}`);
        log.info(`  Jobs: ${this.prg.jobs.length}`);
        log.info(`  Tables: ${this.prg.tables.length}`);
      }
    } catch (err) {
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        `Failed to parse SGBD: ${name} - ${(err as Error).message}`
      );
    }
  }

  /**
   * Get list of available jobs from loaded SGBD
   */
  getJobs(): EdiabasJob[] {
    if (!this.prg) {
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        "No SGBD loaded. Call loadSgbd() first."
      );
    }

    return this.prg.jobs.map((job) => ({
      name: job.name,
      comment: job.comment,
      args: job.args?.map((a) => a.name) ?? [],
      results: job.results?.map((r) => r.name) ?? [],
    }));
  }

  /**
   * Get a specific job by name
   */
  getJob(name: string): EdiabasJob | undefined {
    return this.getJobs().find(
      (j) => j.name.toUpperCase() === name.toUpperCase()
    );
  }

  /** True if the loaded SGBD defines a job with the given name (case-insensitive). */
  private hasJob(name: string): boolean {
    if (!this.prg) return false;
    const target = name.toUpperCase();
    return (
      this.prg.jobs.some((j) => j.name.toUpperCase() === target) ||
      this.prg.binaryJobs.some((j) => j.name.toUpperCase() === target)
    );
  }

  /**
   * Internal job runner used by INITIALISIERUNG bootstrap. Returns silently on
   * failure so a missing/failing init doesn't mask the real error from the
   * user's actual job.
   */
  private async runJobInternal(jobName: string, params: string[]): Promise<void> {
    if (this.config.logging) {
      log.info(`Auto-running ${jobName}`);
    }
    try {
      // INITIALISIERUNG is a single-set bootstrap job; we don't need its
      // results, just side effects, so the sets shape is irrelevant here.
      await this.executeJobRaw(jobName, params);
      if (this.config.logging) log.info(`${jobName} completed`);
    } catch (err) {
      // Always surface init failures somewhere — they often hide the root cause
      // of subsequent job errors. Keep the process going so the user's job can
      // run too, but make the diagnostic visible.
      const message = `${jobName} failed: ${(err as Error).message}`;
      if (this.config.logging) {
        log.warn(message);
      } else {
        process.stderr.write(`[ediabas] ${message}\n`);
      }
    }
  }

  /** Run a job through the interpreter without the INITIALISIERUNG bootstrap. */
  private async executeJobRaw(
    jobName: string,
    params: string[]
  ): Promise<EdiabasJobResult[][]> {
    if (!this.prg) {
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        "No SGBD loaded. Call loadSgbd() first."
      );
    }

    const parameters = new ParameterSet();
    for (let i = 0; i < params.length; i++) {
      parameters.set(i, { kind: "string", value: params[i] });
    }
    const commAdapter = this.buildCommAdapter();
    const interpreter = new Interpreter(this.prg);
    const sets = await interpreter.execute(jobName, {
      parameters,
      communicationInterface: commAdapter,
    });
    return sets.map((set) =>
      set.map((r: JobResult) => ({
        name: r.name,
        type: r.type,
        value: r.value,
        unit: r.unit,
        comment: r.comment,
      }))
    );
  }

  /** Build the interpreter→interface adapter so xsetpar/xsend can route through. */
  private buildCommAdapter(): CommunicationInterface | undefined {
    const commInterface = this.commInterface;
    if (!commInterface) return undefined;
    const adapter: CommunicationInterface = {
      connect: () => commInterface.connect(),
      disconnect: () => commInterface.disconnect(),
      send: (data: Uint8Array) => commInterface.send(data),
      receive: (timeout?: number) => commInterface.receive(timeout ?? this.config.timeout),
      isConnected: () => commInterface.isConnected(),
      stopFrequent: () => commInterface.stopFrequent(),
      transmitFrequent: (data: Uint8Array) => commInterface.transmitFrequent(data),
      receiveFrequent: () => commInterface.receiveFrequent(),
      getPort: (index: number) => commInterface.getPort(index),
      setPort: (index: number, value: number) => commInterface.setPort(index, value),
      get ignitionVoltage() {
        return commInterface.ignitionVoltage;
      },
      get loopTest() {
        return commInterface.loopTest;
      },
      setProgramVoltage: (value: number) => commInterface.setProgramVoltage(value),
      rawData: (payload: Uint8Array) => commInterface.rawData(payload),
      switchSiRelais: (time: number) => commInterface.switchSiRelais(time),
      sendExtended: (data: Uint8Array) => commInterface.send(data),
      receiveExtended: (timeout?: number) => commInterface.receive(timeout ?? this.config.timeout),
    };
    // Forward setCommParameter / transmitData when present so SerialInterface DS2
    // routing works through the adapter.
    const fwd = commInterface as unknown as {
      setCommParameter?: (params: number[]) => Promise<void> | void;
      transmitData?: (data: Uint8Array) => Promise<Uint8Array> | Uint8Array;
      setAnswerLengths?: (lengths: number[]) => Promise<void> | void;
      setAnswerLength?: (length: number) => Promise<void> | void;
      setRepeatCounter?: (count: number) => Promise<void> | void;
    };
    if (fwd.setCommParameter) adapter.setCommParameter = (params) => Promise.resolve(fwd.setCommParameter!(params));
    if (fwd.transmitData) adapter.transmitData = (data) => Promise.resolve(fwd.transmitData!(data));
    if (fwd.setAnswerLengths) adapter.setAnswerLengths = (lengths) => Promise.resolve(fwd.setAnswerLengths!(lengths));
    if (fwd.setAnswerLength) adapter.setAnswerLength = (length) => Promise.resolve(fwd.setAnswerLength!(length));
    if (fwd.setRepeatCounter) adapter.setRepeatCounter = (count) => Promise.resolve(fwd.setRepeatCounter!(count));
    return adapter;
  }

  /**
   * Execute a job and return all emitted result sets.
   *
   * Multi-record jobs (e.g. `FS_LESEN` reading N fault entries) emit one set
   * per record via the `enewset` opcode. Each set is one row, fields repeat
   * across sets. Single-record jobs return a single-element array.
   */
  async executeJob(
    jobName: string,
    options?: { params?: string[]; timeout?: number }
  ): Promise<EdiabasJobResult[][]> {
    if (!this.prg) {
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        "No SGBD loaded. Call loadSgbd() first."
      );
    }

    // Auto-run INITIALISIERUNG before the first user job so the SGBD has a
    // chance to set up comm parameters / wake the ECU. Skip if the user is
    // explicitly running INITIALISIERUNG, or if the SGBD doesn't define it,
    // or if this is a virtual/system job whose name starts with "_".
    if (
      !this.initialized &&
      !jobName.startsWith("_") &&
      jobName.toUpperCase() !== "INITIALISIERUNG" &&
      this.hasJob("INITIALISIERUNG")
    ) {
      try {
        await this.runJobInternal("INITIALISIERUNG", []);
      } finally {
        // Mark initialized whether or not the init job succeeded; if it failed
        // hard, the underlying error (timeout, IFH_*) will surface on the
        // user's job too — no need to re-run on every executeJob call.
        this.initialized = true;
      }
    }

    if (this.config.logging) {
      log.info(`Executing job: ${jobName}`);
    }

    // Setup parameters
    const parameters = new ParameterSet();
    if (options?.params) {
      for (let i = 0; i < options.params.length; i++) {
        parameters.set(i, { kind: "string", value: options.params[i] });
      }
    }

    // Build the comm adapter and interpreter for this job.
    const interpreter = new Interpreter(this.prg);
    const execOptions: ExecutionOptions = {
      parameters,
      communicationInterface: this.buildCommAdapter(),
    };

    try {
      const sets = await interpreter.execute(jobName, execOptions);
      return sets.map((set) =>
        set.map((r: JobResult) => ({
          name: r.name,
          type: r.type,
          value: r.value,
          unit: r.unit,
          comment: r.comment,
        }))
      );
    } catch (err) {
      if (err instanceof EdiabasError) {
        throw err;
      }
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        `Job execution failed: ${(err as Error).message}`
      );
    }
  }

  /**
   * Connect to ECU (if using real hardware)
   */
  async connect(): Promise<void> {
    if (!this.commInterface) {
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        "No communication interface configured"
      );
    }
    await this.commInterface.connect();
  }

  /**
   * Disconnect from ECU
   */
  async disconnect(): Promise<void> {
    if (this.commInterface?.isConnected()) {
      await this.commInterface.disconnect();
    }
    // Force the next executeJob to run INITIALISIERUNG again on a fresh connection.
    this.initialized = false;
  }

  /**
   * Check if connected to ECU
   */
  isConnected(): boolean {
    return this.commInterface?.isConnected() ?? false;
  }

  /**
   * Get loaded SGBD info
   */
  getSgbdInfo(): { path: string; jobs: number; tables: number } | null {
    if (!this.prg || !this.prgPath) {
      return null;
    }
    return {
      path: this.prgPath,
      jobs: this.prg.jobs.length,
      tables: this.prg.tables.length,
    };
  }
}
