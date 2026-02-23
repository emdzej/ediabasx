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
import * as fs from "fs/promises";
import * as path from "path";

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
   * Load an SGBD file (PRG/GRP)
   */
  async loadSgbd(filename: string): Promise<void> {
    const fullPath = path.resolve(this.config.ecuPath, filename);
    
    try {
      const buffer = await fs.readFile(fullPath);
      this.prg = parsePrg(buffer);
      this.prgPath = fullPath;

      if (this.config.logging) {
        console.log(`Loaded SGBD: ${filename}`);
        console.log(`  Jobs: ${this.prg.jobs.length}`);
        console.log(`  Tables: ${this.prg.tables.length}`);
      }
    } catch (err) {
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        `Failed to load SGBD: ${filename} - ${(err as Error).message}`
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

  /**
   * Execute a job
   */
  async executeJob(
    jobName: string,
    options?: { params?: string[]; timeout?: number }
  ): Promise<EdiabasJobResult[]> {
    if (!this.prg) {
      throw new EdiabasError(
        EdiabasErrorCodes.UNKNOWN,
        "No SGBD loaded. Call loadSgbd() first."
      );
    }

    if (this.config.logging) {
      console.log(`Executing job: ${jobName}`);
    }

    // Setup parameters
    const parameters = new ParameterSet();
    if (options?.params) {
      for (let i = 0; i < options.params.length; i++) {
        parameters.set(i, { kind: "string", value: options.params[i] });
      }
    }

    // Create communication interface adapter
    const commInterface = this.commInterface;
    const commAdapter: CommunicationInterface | undefined = commInterface ? {
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
    } : undefined;

    // Create interpreter
    const interpreter = new Interpreter(this.prg);

    // Execution options
    const execOptions: ExecutionOptions = {
      parameters,
      communicationInterface: commAdapter,
    };

    try {
      const results = await interpreter.execute(jobName, execOptions);
      return results.map((r: JobResult) => ({
        name: r.name,
        type: r.type,
        value: r.value,
        unit: r.unit,
        comment: r.comment,
      }));
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
