import type { Command } from "commander";
import chalk from "chalk";
import path from "node:path";
import { render } from "ink";
import React from "react";
import type { EdiabasJobResult } from "@ediabas/ediabas";
import { createInterface } from "@ediabas/interfaces";
import { RunnerApp } from "../tui/RunnerApp.js";
import { readPrgFile } from "../utils/prg.js";
import { handleError, printJson } from "../utils/output.js";
import {
  addInterfaceOptions,
  formatInterfaceSummary,
  resolveInterfaceSelection,
} from "../utils/interface.js";
import type { InterfaceCliOptions } from "../utils/interface.js";
import type { PrgJob } from "@ediabas/best-parser";

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

type RunnerExecutionResult = {
  results: EdiabasJobResult[];
  executionTimeMs: number;
};

async function executeRunnerJob(
  filePath: string,
  jobName: string,
  params: string[],
  options: InterfaceCliOptions & { results?: string }
): Promise<RunnerExecutionResult> {
  const { Ediabas } = await import("@ediabas/ediabas");
  const ecuPath = path.dirname(path.resolve(filePath));
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

  const executionTimeMs = Date.now() - startTime;
  const filteredResults = resultsFilter
    ? results.filter((result) => resultsFilter.has(result.name.toUpperCase()))
    : results;

  return { results: filteredResults, executionTimeMs };
}

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

          const runInTui = async (job: string, params: string[]) =>
            executeRunnerJob(filePath, job, params, options);

          render(
            React.createElement(RunnerApp, {
              filePath,
              jobs,
              interfaceSummary,
              onRun: runInTui,
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
}

export { registerRunCommand };
