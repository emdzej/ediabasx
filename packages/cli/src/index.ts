#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { readFileSync } from "node:fs";
import path from "node:path";
import { render } from "ink";
import React from "react";
import { disassemble, disassembleJob, formatInstruction, parsePrg } from "@ediabas/best-parser";
import type { PrgBinaryJob, PrgFile, PrgJob, PrgTable } from "@ediabas/best-parser";
import type { EdiabasJobResult } from "@ediabas/ediabas";
import { GatewayServer, createInterface, listInterfaces } from "@ediabas/interfaces";
import type {
  InterfaceMetadata,
  InterfaceOptionMetadata,
  InterfaceOptions
} from "@ediabas/interfaces";
import { App } from "./tui/App.js";
import { RunnerApp } from "./tui/RunnerApp.js";
import { SimulatorApp } from "./tui/SimulatorApp.js";
import { SimulatorServer } from "./simulator/SimulatorServer.js";

type OutputFormat = "json" | "table" | "human";

type OutputOptions = {
  json?: boolean;
  table?: boolean;
};

type SimulatorInputMode = "text" | "hex";

type SimulatorLineEnding = "crlf" | "lf" | "raw";

const DEFAULT_GATEWAY_PORT = 6801;
const DEFAULT_SIMULATOR_HOST = "127.0.0.1";
const DEFAULT_SIMULATOR_PORT = 6802;

const program = new Command();

program
  .name("ediabas")
  .description("CLI for parsing EDIABAS PRG/GRP files")
  .version("0.1.0");

function resolveOutputFormat(options: OutputOptions, defaultFormat: OutputFormat): OutputFormat {
  if (options.json) return "json";
  if (options.table) return "table";
  return defaultFormat;
}

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

function readPrgFile(filePath: string): PrgFile {
  const buffer = readFileSync(filePath);
  return parsePrg(new Uint8Array(buffer));
}

function readFileBuffer(filePath: string): Uint8Array {
  return new Uint8Array(readFileSync(filePath));
}

function jsonStringify(value: unknown): string {
  return JSON.stringify(
    value,
    (key, val) => (val instanceof Uint8Array ? Array.from(val) : val),
    2,
  );
}

function printJson(value: unknown): void {
  process.stdout.write(`${jsonStringify(value)}\n`);
}

function parseGatewayAddress(value: string): { host: string; port: number } {
  const trimmed = value.trim();
  if (!trimmed) {
    throw new Error("Gateway address cannot be empty");
  }

  let host = trimmed;
  let port = DEFAULT_GATEWAY_PORT;

  if (trimmed.startsWith("[")) {
    const endIndex = trimmed.indexOf("]");
    if (endIndex < 0) {
      throw new Error("Invalid gateway address format");
    }
    host = trimmed.slice(1, endIndex);
    const rest = trimmed.slice(endIndex + 1);
    if (rest.startsWith(":")) {
      port = Number.parseInt(rest.slice(1), 10);
    }
  } else if (trimmed.includes(":")) {
    const parts = trimmed.split(":");
    const portPart = parts.pop();
    host = parts.join(":");
    if (portPart && portPart.length > 0) {
      port = Number.parseInt(portPart, 10);
    }
  }

  if (!host) {
    throw new Error("Gateway host is required");
  }
  if (!Number.isFinite(port) || port <= 0) {
    throw new Error("Gateway port must be a positive number");
  }

  return { host, port };
}

function addInterfaceOptions(command: Command): Command {
  return command
    .option(
      "-i, --interface <name>",
      "interface to use (simulation|serial|kdcan|enet|gateway)"
    )
    .option("--serial-port <path>", "serial device path")
    .option("--serial-baud <baud>", "serial baud rate")
    .option("--serial-data-bits <bits>", "serial data bits (7|8)")
    .option("--serial-parity <parity>", "serial parity (none|even|odd)")
    .option("--serial-stop-bits <bits>", "serial stop bits (1|2)")
    .option("--serial-protocol <protocol>", "serial protocol (uart|kwp|tp20|isotp)")
    .option("--serial-init <mode>", "serial init mode (fast|five-baud)")
    .option("--serial-tester-can-id <id>", "CAN tester ID (hex or decimal)")
    .option("--serial-ecu-can-id <id>", "CAN ECU ID (hex or decimal)")
    .option("--serial-timeout <ms>", "serial receive timeout (ms)")
    .option("--serial-p1 <ms>", "KWP P1 timing (ms)")
    .option("--serial-p2 <ms>", "KWP P2 timing (ms)")
    .option("--serial-p3 <ms>", "KWP P3 timing (ms)")
    .option("--serial-w1 <ms>", "KWP W1 timing (ms)")
    .option("--serial-w2 <ms>", "KWP W2 timing (ms)")
    .option("--serial-w3 <ms>", "KWP W3 timing (ms)")
    .option("--serial-w4 <ms>", "KWP W4 timing (ms)")
    .option("--serial-w5 <ms>", "KWP W5 timing (ms)")
    .option("--serial-inter-byte-time <ms>", "inter-byte delay (ms)")
    .option("--serial-timeout-nr78 <ms>", "NR78 timeout (ms)")
    .option("--serial-retry-nr78 <count>", "NR78 retry count")
    .option("--gateway-host <host>", "gateway host (for interface=gateway)")
    .option("--gateway-port <port>", "gateway port (for interface=gateway)")
    .option("--enet-host <host>", "ENET target host")
    .option("--enet-port <port>", "ENET target port")
}

function printHeading(label: string): void {
  process.stdout.write(`${chalk.bold.cyan(label)}\n`);
}

type InterfaceCliOptions = {
  interface?: string;
  simulation?: boolean;
  timeout?: string;
  gateway?: string;
  gatewayHost?: string;
  gatewayPort?: string;
  serialPort?: string;
  serialBaud?: string;
  serialDataBits?: string;
  serialParity?: string;
  serialStopBits?: string;
  serialInit?: string;
  serialProtocol?: string;
  serialTesterCanId?: string;
  serialEcuCanId?: string;
  serialTimeout?: string;
  serialP1?: string;
  serialP2?: string;
  serialP3?: string;
  serialW1?: string;
  serialW2?: string;
  serialW3?: string;
  serialW4?: string;
  serialW5?: string;
  serialInterByteTime?: string;
  serialTimeoutNr78?: string;
  serialRetryNr78?: string;
  enetHost?: string;
  enetPort?: string;
};

function parseNumber(value: string, label: string): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`${label} must be a valid number`);
  }
  return parsed;
}

function parseOptionalNumber(value: string | undefined, label: string): number | undefined {
  if (value === undefined) {
    return undefined;
  }
  return parseNumber(value, label);
}

function resolveInterfaceSelection(options: InterfaceCliOptions, fallback: string): {
  name: string;
  options: InterfaceOptions;
} {
  const name = options.interface ?? (options.gateway ? "gateway" : options.simulation ? "simulation" : fallback);

  if (options.simulation && name !== "simulation") {
    throw new Error("--simulation can only be used with the simulation interface");
  }

  if (options.gateway && name !== "gateway") {
    throw new Error("--gateway can only be used with the gateway interface");
  }

  const interfaceOptions: InterfaceOptions = {};
  const serialOptions: InterfaceOptions = {};

  if (options.serialPort) {
    serialOptions.port = options.serialPort;
  }
  if (options.serialBaud !== undefined) {
    serialOptions.baudRate = parseNumber(options.serialBaud, "Serial baud rate");
  }
  if (options.serialDataBits !== undefined) {
    serialOptions.dataBits = parseNumber(options.serialDataBits, "Serial data bits");
  }
  if (options.serialParity !== undefined) {
    serialOptions.parity = options.serialParity;
  }
  if (options.serialStopBits !== undefined) {
    serialOptions.stopBits = parseNumber(options.serialStopBits, "Serial stop bits");
  }
  if (options.serialInit !== undefined) {
    serialOptions.initMode = options.serialInit;
  }
  if (options.serialProtocol !== undefined) {
    serialOptions.protocol = options.serialProtocol;
  }
  if (options.serialTesterCanId !== undefined) {
    serialOptions.testerCanId = parseNumber(options.serialTesterCanId, "Tester CAN ID");
  }
  if (options.serialEcuCanId !== undefined) {
    serialOptions.ecuCanId = parseNumber(options.serialEcuCanId, "ECU CAN ID");
  }
  if (options.serialTimeout !== undefined) {
    serialOptions.timeoutMs = parseOptionalNumber(options.serialTimeout, "Serial timeout");
  } else if (name === "serial" || name === "kdcan") {
    const fallbackTimeout = options.timeout;
    if (fallbackTimeout !== undefined) {
      serialOptions.timeoutMs = parseOptionalNumber(fallbackTimeout, "Serial timeout");
    }
  }
  if (options.serialP1 !== undefined) {
    serialOptions.p1 = parseNumber(options.serialP1, "KWP P1");
  }
  if (options.serialP2 !== undefined) {
    serialOptions.p2 = parseNumber(options.serialP2, "KWP P2");
  }
  if (options.serialP3 !== undefined) {
    serialOptions.p3 = parseNumber(options.serialP3, "KWP P3");
  }
  if (options.serialW1 !== undefined) {
    serialOptions.w1 = parseNumber(options.serialW1, "KWP W1");
  }
  if (options.serialW2 !== undefined) {
    serialOptions.w2 = parseNumber(options.serialW2, "KWP W2");
  }
  if (options.serialW3 !== undefined) {
    serialOptions.w3 = parseNumber(options.serialW3, "KWP W3");
  }
  if (options.serialW4 !== undefined) {
    serialOptions.w4 = parseNumber(options.serialW4, "KWP W4");
  }
  if (options.serialW5 !== undefined) {
    serialOptions.w5 = parseNumber(options.serialW5, "KWP W5");
  }
  if (options.serialInterByteTime !== undefined) {
    serialOptions.interByteTime = parseNumber(options.serialInterByteTime, "Inter-byte time");
  }
  if (options.serialTimeoutNr78 !== undefined) {
    serialOptions.timeoutNr78 = parseNumber(options.serialTimeoutNr78, "NR78 timeout");
  }
  if (options.serialRetryNr78 !== undefined) {
    serialOptions.retryNr78 = parseNumber(options.serialRetryNr78, "NR78 retry");
  }

  const hasSerialOptions = Object.keys(serialOptions).length > 0;
  if (hasSerialOptions) {
    if (name !== "serial" && name !== "kdcan") {
      throw new Error("Serial options can only be used with serial or kdcan interfaces");
    }
    Object.assign(interfaceOptions, serialOptions);
  }

  const enetOptions: InterfaceOptions = {};
  if (options.enetHost) {
    enetOptions.host = options.enetHost;
  }
  if (options.enetPort !== undefined) {
    enetOptions.port = parseNumber(options.enetPort, "ENET port");
  }
  const hasEnetOptions = Object.keys(enetOptions).length > 0;
  if (hasEnetOptions) {
    if (name !== "enet") {
      throw new Error("ENET options can only be used with the enet interface");
    }
    Object.assign(interfaceOptions, enetOptions);
  }

  if (name === "gateway") {
    if (options.gateway) {
      const address = parseGatewayAddress(options.gateway);
      interfaceOptions.host = address.host;
      interfaceOptions.port = address.port;
    } else {
      if (options.gatewayHost) {
        interfaceOptions.host = options.gatewayHost;
      }
      const gatewayPort = parseOptionalNumber(options.gatewayPort, "Gateway port");
      if (gatewayPort !== undefined) {
        interfaceOptions.port = gatewayPort;
      }
    }
  } else if (options.gatewayHost || options.gatewayPort) {
    throw new Error("Gateway host/port options can only be used with the gateway interface");
  }

  return { name, options: interfaceOptions };
}

function formatInterfaceOption(option: InterfaceOptionMetadata, widths: { name: number; type: number }): string {
  const name = option.name.padEnd(widths.name);
  const type = option.type.padEnd(widths.type);
  const required = option.required ? chalk.red("required") : "optional";
  const defaultValue = option.default !== undefined ? String(option.default) : "-";
  const values = option.values ? ` [${option.values.join("|")}]` : "";
  return `  ${chalk.yellow(name)}  ${chalk.blue(type)}  ${required}  ${chalk.gray(defaultValue)}  ${option.description}${values}`;
}

function printInterfacesHuman(interfaces: InterfaceMetadata[]): void {
  printHeading("Interfaces");

  if (interfaces.length === 0) {
    process.stdout.write("No interfaces registered.\n");
    return;
  }

  for (const entry of interfaces) {
    process.stdout.write(`${chalk.bold(entry.name)}\n`);
    process.stdout.write(`  ${entry.description}\n`);

    if (entry.options && entry.options.length > 0) {
      const widths = {
        name: Math.max(4, ...entry.options.map((option) => option.name.length)),
        type: Math.max(4, ...entry.options.map((option) => option.type.length))
      };

      process.stdout.write(`  ${chalk.bold("Options:")}\n`);
      process.stdout.write(`  ${chalk.gray("Name".padEnd(widths.name))}  ${chalk.gray("Type".padEnd(widths.type))}  ${chalk.gray("Required")}  ${chalk.gray("Default")}  ${chalk.gray("Description")}\n`);
      process.stdout.write(
        `  ${chalk.gray("─".repeat(widths.name))}  ${chalk.gray("─".repeat(widths.type))}  ${chalk.gray("─".repeat(8))}  ${chalk.gray("─".repeat(7))}  ${chalk.gray("─".repeat(11))}\n`
      );

      for (const option of entry.options) {
        process.stdout.write(`${formatInterfaceOption(option, widths)}\n`);
      }
    }

    process.stdout.write("\n");
  }
}

function printInterfacesTable(interfaces: InterfaceMetadata[]): void {
  console.table(
    interfaces.map((entry) => ({
      name: entry.name,
      description: entry.description,
      options: entry.options?.length ?? 0
    }))
  );
}

function printInfoSummary(filePath: string, prg: PrgFile): void {
  printHeading("File summary");
  const fileName = path.basename(filePath);
  process.stdout.write(`${chalk.bold("File:")} ${fileName}\n`);
  process.stdout.write(`${chalk.bold("Jobs:")} ${prg.jobs.length}\n`);
  process.stdout.write(`${chalk.bold("Tables:")} ${prg.tables.length}\n`);

  printHeading("ECU info");
  const metadata = prg.metadata ?? {};
  const entries: Array<[string, string | undefined]> = [
    ["ECU", metadata.ecu],
    ["Origin", metadata.origin],
    ["Revision", metadata.revision],
    ["Author", metadata.author],
    ["ECU comment", metadata.ecuComment],
  ];

  for (const [label, value] of entries) {
    process.stdout.write(`${chalk.bold(label + ":")} ${value ?? "n/a"}\n`);
  }
}

function printJobsHuman(jobs: PrgJob[]): void {
  printHeading("Jobs");
  if (jobs.length === 0) {
    process.stdout.write("No jobs found.\n");
    return;
  }

  for (const job of jobs) {
    process.stdout.write(`${chalk.bold(job.name)}\n`);
    if (job.comment) {
      process.stdout.write(`  ${chalk.gray(job.comment)}\n`);
    }

    if (job.args.length > 0) {
      process.stdout.write(`  ${chalk.bold("Args:")}\n`);
      for (const arg of job.args) {
        const comment = arg.comment ? ` - ${arg.comment}` : "";
        process.stdout.write(`    ${arg.name}: ${arg.type}${comment}\n`);
      }
    }

    if (job.results.length > 0) {
      process.stdout.write(`  ${chalk.bold("Results:")}\n`);
      for (const result of job.results) {
        const comment = result.comment ? ` - ${result.comment}` : "";
        process.stdout.write(`    ${result.name}: ${result.type}${comment}\n`);
      }
    }

    process.stdout.write("\n");
  }
}

function printJobsTable(jobs: PrgJob[]): void {
  console.table(
    jobs.map((job) => ({
      job: job.name,
      args: job.args.length,
      results: job.results.length,
      comment: job.comment ?? "",
    })),
  );
}

function printTablesHuman(tables: PrgTable[]): void {
  printHeading("Tables");
  if (tables.length === 0) {
    process.stdout.write("No tables found.\n");
    return;
  }

  for (const table of tables) {
    process.stdout.write(`${chalk.bold(table.name)}\n`);
    process.stdout.write(`  Columns: ${table.columns}\n`);
    process.stdout.write(`  Rows: ${table.rows}\n\n`);
  }
}

function printTablesTable(tables: PrgTable[]): void {
  console.table(
    tables.map((table) => ({
      table: table.name,
      columns: table.columns,
      rows: table.rows,
    })),
  );
}

function resolveBinaryJobSlices(prg: PrgFile): Array<{ job: PrgBinaryJob; start: number; end: number }> {
  const sortedJobs = [...prg.binaryJobs].sort((a, b) => a.offset - b.offset);
  if (sortedJobs.length === 0) {
    return [];
  }

  return sortedJobs.map((job, index) => {
    const start = job.offset;
    const end = index + 1 < sortedJobs.length ? sortedJobs[index + 1].offset : prg.code.length;
    return { job, start, end };
  });
}

function printDisassembly(prg: PrgFile, buffer: Uint8Array): void {
  // For EDIABAS OBJECT format, bytecode is at binaryJob offsets in the raw buffer
  if (prg.binaryJobs.length > 0) {
    for (const job of prg.binaryJobs) {
      const instructions = disassembleJob(buffer, job.offset);
      if (instructions.length === 0) continue;

      process.stdout.write(`${chalk.bold(job.name)} @ 0x${job.offset.toString(16).toUpperCase()}\n`);
      for (const instr of instructions) {
        const address = instr.offset.toString(16).toUpperCase().padStart(8, "0");
        process.stdout.write(`  ${address}: ${formatInstruction(instr)}\n`);
      }
      process.stdout.write("\n");
    }
    return;
  }

  // Legacy format with separate code section
  if (prg.code.length === 0) {
    process.stdout.write("No bytecode section available.\n");
    return;
  }

  const jobSlices = resolveBinaryJobSlices(prg);
  if (jobSlices.length === 0) {
    const instructions = disassemble(prg.code);
    for (const instr of instructions) {
      const address = instr.offset.toString(16).toUpperCase().padStart(8, "0");
      process.stdout.write(`${address}: ${formatInstruction(instr)}\n`);
    }
    return;
  }

  for (const slice of jobSlices) {
    if (slice.start >= prg.code.length) continue;
    const start = slice.start;
    const end = Math.min(slice.end, prg.code.length);
    const instructions = disassemble(prg.code.slice(start, end));

    process.stdout.write(`${chalk.bold(slice.job.name)}\n`);
    for (const instr of instructions) {
      const absoluteOffset = start + instr.offset;
      const address = absoluteOffset.toString(16).toUpperCase().padStart(8, "0");
      process.stdout.write(`${address}: ${formatInstruction(instr)}\n`);
    }
    process.stdout.write("\n");
  }
}

function printParseHuman(filePath: string, prg: PrgFile): void {
  printInfoSummary(filePath, prg);
}

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

function printResultsHuman(results: EdiabasJobResult[]): void {
  if (results.length === 0) {
    process.stdout.write(`${chalk.gray("No results returned.")}\n`);
    return;
  }

  process.stdout.write(`${chalk.bold("Results:")}\n`);

  const nameWidth = Math.max(6, ...results.map((result) => result.name.length));
  const typeWidth = Math.max(6, ...results.map((result) => result.type.length));

  process.stdout.write(
    `  ${chalk.gray("Name".padEnd(nameWidth))}  ${chalk.gray("Type".padEnd(typeWidth))}  ${chalk.gray("Value")}\n`
  );
  process.stdout.write(
    `  ${chalk.gray("─".repeat(nameWidth))}  ${chalk.gray("─".repeat(typeWidth))}  ${chalk.gray("─".repeat(30))}\n`
  );

  for (const result of results) {
    const valueStr = formatResultValueHuman(result);
    process.stdout.write(
      `  ${chalk.green(result.name.padEnd(nameWidth))}  ${chalk.blue(result.type.padEnd(typeWidth))}  ${valueStr}\n`
    );
  }
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

function printParseTable(prg: PrgFile): void {
  console.table([
    {
      jobs: prg.jobs.length,
      tables: prg.tables.length,
      ecu: prg.metadata.ecu ?? "n/a",
      revision: prg.metadata.revision ?? "n/a",
    },
  ]);
}

function handleError(error: unknown): void {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`${chalk.red("Error:")} ${message}\n`);
  process.exitCode = 1;
}

program
  .command("interfaces")
  .option("--json", "output JSON")
  .option("--table", "output as table")
  .description("List available communication interfaces")
  .action((options: OutputOptions) => {
    try {
      const interfaces = listInterfaces();
      const format = resolveOutputFormat(options, "human");

      if (format === "json") {
        printJson(interfaces);
        return;
      }

      if (format === "table") {
        printInterfacesTable(interfaces);
        return;
      }

      printInterfacesHuman(interfaces);
    } catch (error) {
      handleError(error);
    }
  });

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

program
  .command("parse")
  .argument("<file>", "PRG/GRP file to parse")
  .option("--json", "output JSON")
  .option("--table", "output as table")
  .description("Parse a PRG/GRP file")
  .action((filePath: string, options: OutputOptions) => {
    try {
      const prg = readPrgFile(filePath);
      const format = resolveOutputFormat(options, "json");

      if (format === "json") {
        printJson(prg);
        return;
      }

      if (format === "table") {
        printParseTable(prg);
        return;
      }

      printParseHuman(filePath, prg);
    } catch (error) {
      handleError(error);
    }
  });

program
  .command("info")
  .argument("<file>", "PRG/GRP file to inspect")
  .option("--json", "output JSON")
  .option("--table", "output as table")
  .description("Show summary information for a PRG/GRP file")
  .action((filePath: string, options: OutputOptions) => {
    try {
      const prg = readPrgFile(filePath);
      const format = resolveOutputFormat(options, "human");
      const summary = {
        file: path.basename(filePath),
        jobs: prg.jobs.length,
        tables: prg.tables.length,
        metadata: prg.metadata,
      };

      if (format === "json") {
        printJson(summary);
        return;
      }

      if (format === "table") {
        console.table([
          {
            file: summary.file,
            jobs: summary.jobs,
            tables: summary.tables,
            ecu: prg.metadata.ecu ?? "n/a",
            revision: prg.metadata.revision ?? "n/a",
          },
        ]);
        return;
      }

      printInfoSummary(filePath, prg);
    } catch (error) {
      handleError(error);
    }
  });

program
  .command("jobs")
  .argument("<file>", "PRG/GRP file to inspect")
  .option("--json", "output JSON")
  .option("--table", "output as table")
  .description("List all jobs with their arguments and results")
  .action((filePath: string, options: OutputOptions) => {
    try {
      const prg = readPrgFile(filePath);
      const format = resolveOutputFormat(options, "human");

      if (format === "json") {
        printJson(prg.jobs);
        return;
      }

      if (format === "table") {
        printJobsTable(prg.jobs);
        return;
      }

      printJobsHuman(prg.jobs);
    } catch (error) {
      handleError(error);
    }
  });

program
  .command("table")
  .argument("<file>", "PRG/GRP file to inspect")
  .argument("<name>", "Table name to display")
  .option("--json", "output JSON")
  .option("--csv", "output as CSV")
  .description("Display contents of a specific table")
  .action((filePath: string, tableName: string, options: { json?: boolean; csv?: boolean }) => {
    try {
      const prg = readPrgFile(filePath);
      const table = prg.tables.find(
        (t) => t.name.toLowerCase() === tableName.toLowerCase()
      );

      if (!table) {
        const available = prg.tables.map((t) => t.name).join(", ");
        process.stderr.write(`${chalk.red("Error:")} Table "${tableName}" not found.\n`);
        process.stderr.write(`Available tables: ${available || "none"}\n`);
        process.exitCode = 1;
        return;
      }

      if (options.json) {
        printJson({
          name: table.name,
          columns: table.columns,
          rows: table.rows,
          values: table.values,
        });
        return;
      }

      if (options.csv) {
        // CSV output
        for (const row of table.values) {
          process.stdout.write(row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(",") + "\n");
        }
        return;
      }

      // Human readable - show as formatted table
      printHeading(`Table: ${table.name} (${table.columns} cols × ${table.rows} rows)`);
      
      if (table.values.length === 0) {
        process.stdout.write("(empty table)\n");
        return;
      }

      // Use console.table for nice formatting if rows have headers
      if (table.values.length > 1) {
        const headers = table.values[0];
        const dataRows = table.values.slice(1);
        
        // Create objects with header keys
        const objects = dataRows.map((row) => {
          const obj: Record<string, string> = {};
          headers.forEach((header, i) => {
            obj[header || `col${i}`] = row[i] ?? "";
          });
          return obj;
        });
        
        // Limit output for very large tables
        const maxRows = 50;
        if (objects.length > maxRows) {
          console.table(objects.slice(0, maxRows));
          process.stdout.write(`\n... and ${objects.length - maxRows} more rows (use --json for full output)\n`);
        } else {
          console.table(objects);
        }
      } else {
        // Single row - just print it
        process.stdout.write(table.values[0].join(" | ") + "\n");
      }
    } catch (error) {
      handleError(error);
    }
  });

program
  .command("tables")
  .argument("<file>", "PRG/GRP file to inspect")
  .option("--json", "output JSON")
  .option("--table", "output as table")
  .description("List tables with their row/column counts")
  .action((filePath: string, options: OutputOptions) => {
    try {
      const prg = readPrgFile(filePath);
      const format = resolveOutputFormat(options, "human");
      const tables = prg.tables.map((table) => ({
        name: table.name,
        columns: table.columns,
        rows: table.rows,
      }));

      if (format === "json") {
        printJson(tables);
        return;
      }

      if (format === "table") {
        printTablesTable(prg.tables);
        return;
      }

      printTablesHuman(prg.tables);
    } catch (error) {
      handleError(error);
    }
  });

program
  .command("explore")
  .argument("<file>", "PRG/GRP file to explore")
  .description("Explore a PRG/GRP file in an interactive TUI")
  .action((filePath: string) => {
    try {
      const buffer = readFileBuffer(filePath);
      const prg = parsePrg(buffer);
      render(React.createElement(App, { filePath, buffer, prg }));
    } catch (error) {
      handleError(error);
    }
  });

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

program
  .command("disasm")
  .argument("<file>", "PRG/GRP file to disassemble")
  .argument("[job]", "Job name to disassemble (optional, disassembles all if not specified)")
  .description("Disassemble bytecode into readable assembly")
  .action((filePath: string, jobName?: string) => {
    try {
      const buffer = readFileBuffer(filePath);
      const prg = parsePrg(buffer);
      
      if (jobName) {
        // Find specific job
        const job = prg.binaryJobs.find(
          (j) => j.name.toLowerCase() === jobName.toLowerCase()
        );
        
        if (!job) {
          const available = prg.binaryJobs.map((j) => j.name).join(", ");
          process.stderr.write(`${chalk.red("Error:")} Job "${jobName}" not found.\n`);
          process.stderr.write(`Available jobs: ${available || "none"}\n`);
          process.exitCode = 1;
          return;
        }
        
        const instructions = disassembleJob(buffer, job.offset);
        process.stdout.write(`${chalk.bold(job.name)} @ 0x${job.offset.toString(16).toUpperCase()}\n`);
        for (const instr of instructions) {
          const address = instr.offset.toString(16).toUpperCase().padStart(8, "0");
          process.stdout.write(`  ${address}: ${formatInstruction(instr)}\n`);
        }
      } else {
        printDisassembly(prg, buffer);
      }
    } catch (error) {
      handleError(error);
    }
  });

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
        const interfaceLabel = selection.name.charAt(0).toUpperCase() + selection.name.slice(1);
        const timeoutMs = Number.parseInt(options.timeout ?? "5000", 10);
        render(
          React.createElement(RunnerApp, {
            filePath,
            jobs,
            interfaceLabel,
            selection,
            timeoutMs,
          })
        );
        return;
      }

      const { Ediabas } = await import("@ediabas/ediabas");
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
        logging: false,
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
      let results: EdiabasJobResult[] = [];

      try {
        if (!useSimulation) {
          await ediabas.connect();
        }
        results = await ediabas.executeJob(jobName, { params });
      } finally {
        if (!useSimulation) {
          await ediabas.disconnect();
        }
      }

      const executionTime = Date.now() - startTime;

      const filteredResults = resultsFilter
        ? results.filter((result) => resultsFilter.has(result.name.toUpperCase()))
        : results;

      if (options.json) {
        printJson({
          job: jobMeta.name,
          params,
          results: filteredResults.map((result) => ({
            name: result.name,
            type: result.type,
            value: formatResultValueJson(result),
          })),
          executionTimeMs: executionTime,
        });
        return;
      }

      printResultsHuman(filteredResults);
      process.stdout.write(`\n${chalk.gray(`Execution time: ${executionTime}ms`)}\n`);
    } catch (error) {
      handleError(error);
    }
  });

addInterfaceOptions(runCommand);

program.parse();
