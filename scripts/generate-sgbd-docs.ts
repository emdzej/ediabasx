import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parsePrg, type PrgFile, type PrgJob, type PrgTable } from "@ediabas/best-parser";
import { Interpreter, type JobResult } from "@ediabas/interpreter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type Options = {
  inputDir: string;
  outputDir: string;
  reportsDir: string;
  limit?: number;
};

type ReportStatus = {
  file: string;
  status: string;
};

function parseArgs(argv: string[]): Options {
  const options: Options = {
    inputDir: process.env.SGBD_DIR ?? path.resolve("test-data"),
    outputDir: path.resolve("docs/sgbd"),
    reportsDir: path.resolve("reports/files"),
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--input" && argv[i + 1]) {
      options.inputDir = path.resolve(argv[i + 1]);
      i++;
      continue;
    }
    if (arg === "--output" && argv[i + 1]) {
      options.outputDir = path.resolve(argv[i + 1]);
      i++;
      continue;
    }
    if (arg === "--reports" && argv[i + 1]) {
      options.reportsDir = path.resolve(argv[i + 1]);
      i++;
      continue;
    }
    if (arg === "--limit" && argv[i + 1]) {
      options.limit = Number(argv[i + 1]);
      i++;
      continue;
    }
  }

  return options;
}

async function listFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(fullPath)));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (ext === ".prg" || ext === ".grp") {
        files.push(fullPath);
      }
    }
  }
  return files;
}

async function loadReports(reportsDir: string): Promise<Map<string, ReportStatus>> {
  const map = new Map<string, ReportStatus>();
  try {
    const files = await fs.readdir(reportsDir);
    for (const file of files) {
      if (!file.toLowerCase().endsWith(".json")) continue;
      const content = await fs.readFile(path.join(reportsDir, file), "utf-8");
      const data = JSON.parse(content) as ReportStatus;
      if (data.file) {
        map.set(data.file.toLowerCase(), data);
      }
    }
  } catch {
    // ignore missing reports
  }
  return map;
}

function escapeCell(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\r?\n/g, "<br>");
}

function formatValue(value: JobResult["value"]): string {
  if (value instanceof Uint8Array) {
    return Buffer.from(value).toString("hex");
  }
  return String(value);
}

function renderMetaTable(entries: Array<[string, string]>): string {
  const rows = entries.map(([key, value]) => `| ${escapeCell(key)} | ${escapeCell(value)} |`);
  return ["|  |  |", "| --- | --- |", ...rows].join("\n");
}

function renderTable(headers: string[], rows: string[][]): string {
  const headerRow = `| ${headers.map(escapeCell).join(" | ")} |`;
  const separatorRow = `| ${headers.map(() => "---").join(" | ")} |`;
  const bodyRows = rows.map((row) => `| ${row.map((cell) => escapeCell(cell)).join(" | ")} |`);
  return [headerRow, separatorRow, ...bodyRows].join("\n");
}

function hasJob(prg: PrgFile, jobName: string): boolean {
  const target = jobName.toUpperCase();
  return prg.jobs.some((job) => job.name.toUpperCase() === target) || prg.binaryJobs.some((job) => job.name.toUpperCase() === target);
}

function formatJobSection(job: PrgJob): string {
  const lines: string[] = [];
  lines.push(`### ${job.name}`);
  lines.push("");
  lines.push(job.comment ? job.comment : "_No description._");
  lines.push("");
  if (!job.args || job.args.length === 0) {
    lines.push("_No arguments._");
    lines.push("");
    return lines.join("\n");
  }

  const rows = job.args.map((arg) => [arg.name, arg.type, arg.comment ?? ""]);
  lines.push(renderTable(["Name", "Type", "Description"], rows));
  lines.push("");
  return lines.join("\n");
}

function formatTableSection(table: PrgTable): string {
  const lines: string[] = [];
  lines.push(`### ${table.name}`);
  lines.push("");
  if (!table.values || table.values.length === 0) {
    lines.push("_No data._");
    lines.push("");
    return lines.join("\n");
  }

  const headers = table.values[0] ?? [];
  const rows = table.values.slice(1);
  const normalizedRows = rows.map((row) => {
    const normalized = [...row];
    while (normalized.length < headers.length) {
      normalized.push("");
    }
    return normalized;
  });

  lines.push(renderTable(headers, normalizedRows));
  lines.push("");
  return lines.join("\n");
}

async function generateDocsForFile(
  filePath: string,
  outputDir: string,
  reportMap: Map<string, ReportStatus>
): Promise<{ file: string; jobs: number; tables: number; description: string; status: string }> {
  const fileName = path.basename(filePath);
  const report = reportMap.get(fileName.toLowerCase());
  const status = report?.status === "ok" ? "✅" : "❌";

  let prg: PrgFile | null = null;
  let parseError: string | null = null;
  try {
    const buffer = await fs.readFile(filePath);
    prg = parsePrg(new Uint8Array(buffer));
  } catch (error) {
    parseError = (error as Error).message;
  }

  const jobsCount = prg?.jobs.length ?? 0;
  const tablesCount = prg?.tables.length ?? 0;

  let infoResults: JobResult[] = [];
  let infoError: string | null = null;
  if (prg && hasJob(prg, "INFO")) {
    try {
      const interpreter = new Interpreter(prg);
      infoResults = await interpreter.execute("INFO");
    } catch (error) {
      infoError = (error as Error).message;
    }
  }

  const descriptionResult = infoResults.find((result) => result.name.toUpperCase() === "ECU");
  const description = descriptionResult ? formatValue(descriptionResult.value) : prg?.metadata.ecu ?? "";

  const lines: string[] = [];
  lines.push(`# ${fileName}`);
  lines.push("");

  lines.push("## General");
  lines.push("");

  const metaEntries: Array<[string, string]> = [
    ["File", fileName],
    ["Type", prg ? (prg.header.version === 0 ? "GRP" : "PRG") : ""],
    ["Jobs", String(jobsCount)],
    ["Tables", String(tablesCount)],
  ];
  if (prg?.metadata.ecu) metaEntries.push(["ECU", prg.metadata.ecu]);
  if (prg?.metadata.origin) metaEntries.push(["Origin", prg.metadata.origin]);
  if (prg?.metadata.revision) metaEntries.push(["Revision", prg.metadata.revision]);
  if (prg?.metadata.author) metaEntries.push(["Author", prg.metadata.author]);
  if (prg?.metadata.ecuComment) metaEntries.push(["ECU Comment", prg.metadata.ecuComment]);
  if (parseError) metaEntries.push(["Parse Error", parseError]);

  lines.push(renderMetaTable(metaEntries));
  lines.push("");

  lines.push("## Info");
  lines.push("");
  if (infoError) {
    lines.push(`_INFO job failed: ${infoError}_`);
    lines.push("");
  } else if (infoResults.length === 0) {
    lines.push("_No INFO results._");
    lines.push("");
  } else {
    const rows = infoResults.map((result) => [
      result.name,
      result.type,
      formatValue(result.value),
      result.unit ?? "",
      result.comment ?? "",
    ]);
    lines.push(renderTable(["Name", "Type", "Value", "Unit", "Comment"], rows));
    lines.push("");
  }

  lines.push("## Jobs");
  lines.push("");
  if (prg && prg.jobs.length > 0) {
    for (const job of prg.jobs) {
      lines.push(formatJobSection(job));
    }
  } else {
    lines.push("_No jobs._");
    lines.push("");
  }

  lines.push("## Tables");
  lines.push("");
  if (prg && prg.tables.length > 0) {
    for (const table of prg.tables) {
      lines.push(formatTableSection(table));
    }
  } else {
    lines.push("_No tables._");
    lines.push("");
  }

  const outputFile = path.join(outputDir, "files", `${fileName}.md`);
  await fs.writeFile(outputFile, lines.join("\n"), "utf-8");

  return {
    file: fileName,
    jobs: jobsCount,
    tables: tablesCount,
    description: description ? description : "",
    status,
  };
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const inputDir = path.resolve(options.inputDir);
  const outputDir = path.resolve(options.outputDir);
  const reportsDir = path.resolve(options.reportsDir);

  const files = await listFiles(inputDir);
  const sortedFiles = files.sort((a, b) => path.basename(a).localeCompare(path.basename(b), "en", { sensitivity: "base" }));
  const limitedFiles = options.limit ? sortedFiles.slice(0, options.limit) : sortedFiles;

  await fs.mkdir(path.join(outputDir, "files"), { recursive: true });

  const reportMap = await loadReports(reportsDir);

  const summaryRows: Array<[string, string, string, string, string]> = [];

  for (const filePath of limitedFiles) {
    const result = await generateDocsForFile(filePath, outputDir, reportMap);
    const link = `[${result.file}](files/${result.file}.md)`;
    summaryRows.push([
      link,
      result.description || "",
      String(result.jobs),
      String(result.tables),
      result.status,
    ]);
  }

  const readmeLines: string[] = [];
  readmeLines.push("# SGBD Documentation");
  readmeLines.push("");
  readmeLines.push(`Generated from: ${inputDir}`);
  readmeLines.push("");
  readmeLines.push(renderTable(["File", "Description (DE)", "Jobs", "Tables", "Status"], summaryRows));
  readmeLines.push("");

  await fs.writeFile(path.join(outputDir, "README.md"), readmeLines.join("\n"), "utf-8");

  process.stdout.write(`Generated ${summaryRows.length} documentation files in ${outputDir}\n`);
}

main().catch((error) => {
  process.stderr.write(`Error: ${(error as Error).message}\n`);
  process.exitCode = 1;
});
