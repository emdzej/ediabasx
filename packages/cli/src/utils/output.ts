import chalk from "chalk";

type OutputFormat = "json" | "table" | "human";

type OutputOptions = {
  json?: boolean;
  table?: boolean;
};

function resolveOutputFormat(options: OutputOptions, defaultFormat: OutputFormat): OutputFormat {
  if (options.json) return "json";
  if (options.table) return "table";
  return defaultFormat;
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

function printHeading(label: string): void {
  process.stdout.write(`${chalk.bold.cyan(label)}\n`);
}

function handleError(error: unknown): void {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`${chalk.red("Error:")} ${message}\n`);
  process.exitCode = 1;
}

export type { OutputFormat, OutputOptions };
export { handleError, printHeading, printJson, resolveOutputFormat };
