import type { Command } from "commander";
import chalk from "chalk";
import { listInterfaces } from "@emdzej/ediabasx-interfaces";
import type { InterfaceMetadata, InterfaceOptionMetadata } from "@emdzej/ediabasx-interfaces";
import { handleError, printHeading, printJson, resolveOutputFormat } from "../utils/output.js";
import type { OutputOptions } from "../utils/output.js";

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

function registerInterfacesCommand(program: Command): void {
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
}

export { registerInterfacesCommand };
