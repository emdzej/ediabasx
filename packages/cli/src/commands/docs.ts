import type { Command } from "commander";
import path from "node:path";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import chalk from "chalk";
import { cp1252ToUtf8 } from "@ediabas/core";
import type { PrgFile } from "@ediabas/best-parser";
import type { EdiabasJobResult } from "@ediabas/ediabas";
import { readPrgFile } from "../utils/prg.js";
import { handleError } from "../utils/output.js";

type DocsInfo = {
  ecu?: string;
  origin?: string;
  revision?: string;
  author?: string;
  comment?: string;
  package?: string;
  sprache?: string;
};

type InfoLoadResult =
  | { status: "missing" }
  | { status: "error"; message: string }
  | { status: "ok"; info: DocsInfo };

type DocsIndexEntry = {
  fileName: string;
  outputFileName: string;
  jobCount: number;
  tableCount: number;
  infoStatus: InfoLoadResult;
};

function isPrgFile(fileName: string): boolean {
  const ext = path.extname(fileName).toLowerCase();
  return ext === ".prg" || ext === ".grp";
}

async function listPrgFiles(sourceDir: string): Promise<string[]> {
  const entries = await readdir(sourceDir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const entryPath = path.join(sourceDir, entry.name);

    if (entry.isDirectory()) {
      const nested = await listPrgFiles(entryPath);
      files.push(...nested);
    } else if (entry.isFile() && isPrgFile(entry.name)) {
      files.push(entryPath);
    }
  }

  return files.sort((a, b) => a.localeCompare(b));
}

function slugifyAnchor(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function escapeMarkdownCell(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\r?\n/g, "<br>");
}

function formatInfoValue(value: EdiabasJobResult["value"]): string {
  if (value instanceof Uint8Array) {
    return cp1252ToUtf8(value);
  }
  if (typeof value === "number") {
    return value.toString();
  }
  if (typeof value === "string") {
    return value;
  }
  return String(value);
}

function extractInfoResults(results: EdiabasJobResult[]): DocsInfo {
  const map = new Map<string, string>();
  for (const result of results) {
    map.set(result.name.toUpperCase(), formatInfoValue(result.value));
  }

  return {
    ecu: map.get("ECU"),
    origin: map.get("ORIGIN"),
    revision: map.get("REVISION"),
    author: map.get("AUTHOR"),
    comment: map.get("COMMENT"),
    package: map.get("PACKAGE"),
    sprache: map.get("SPRACHE"),
  };
}

async function loadInfoMetadata(filePath: string, prg: PrgFile): Promise<InfoLoadResult> {
  const hasInfoJob = prg.jobs.some((job) => job.name.toUpperCase() === "INFO");
  if (!hasInfoJob) {
    return { status: "missing" };
  }

  try {
    const { Ediabas } = await import("@ediabas/ediabas");
    const ecuPath = path.dirname(path.resolve(filePath));
    const ediabas = new Ediabas({ ecuPath, simulation: true, logging: false });
    await ediabas.loadSgbd(path.basename(filePath));
    const results = await ediabas.executeJob("INFO", { params: [] });
    return { status: "ok", info: extractInfoResults(results) };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { status: "error", message };
  }
}

function renderMarkdownTable(headers: readonly string[], rows: readonly string[][]): string {
  const escapedHeaders = headers.map(escapeMarkdownCell);
  const lines = [
    `| ${escapedHeaders.join(" | ")} |`,
    `| ${escapedHeaders.map(() => "---").join(" | ")} |`,
  ];

  for (const row of rows) {
    const escapedRow = row.map(escapeMarkdownCell);
    lines.push(`| ${escapedRow.join(" | ")} |`);
  }

  return lines.join("\n");
}

function normalizeRow(row: string[], columns: number): string[] {
  const normalized = row.slice(0, columns);
  while (normalized.length < columns) {
    normalized.push("");
  }
  return normalized;
}

function formatInfoValueCell(value: string | undefined): string {
  return value && value.trim().length > 0 ? value : "N/A";
}

function renderDocsMarkdown(params: {
  filePath: string;
  prg: PrgFile;
  infoStatus: InfoLoadResult;
}): string {
  const { filePath, prg, infoStatus } = params;
  const fileName = path.basename(filePath);
  const lines: string[] = [];

  lines.push(`# ${fileName}`);
  lines.push("");
  lines.push(`- Jobs: [${prg.jobs.length}](#jobs)`);
  lines.push(`- Tables: [${prg.tables.length}](#tables)`);

  if (infoStatus.status === "ok") {
    const info = infoStatus.info;
    lines.push("");
    lines.push("## INFO");
    lines.push("");
    lines.push(
      renderMarkdownTable(
        ["Field", "Value"],
        [
          ["ECU", formatInfoValueCell(info.ecu)],
          ["ORIGIN", formatInfoValueCell(info.origin)],
          ["REVISION", formatInfoValueCell(info.revision)],
          ["AUTHOR", formatInfoValueCell(info.author)],
          ["COMMENT", formatInfoValueCell(info.comment)],
          ["PACKAGE", formatInfoValueCell(info.package)],
          ["SPRACHE", formatInfoValueCell(info.sprache)],
        ]
      )
    );
  } else if (infoStatus.status === "error") {
    lines.push("");
    lines.push("## INFO");
    lines.push("");
    lines.push(`INFO job execution failed: ${infoStatus.message}`);
  }

  lines.push("");
  lines.push("## Jobs");
  lines.push("");

  if (prg.jobs.length === 0) {
    lines.push("No jobs found.");
  } else {
    lines.push("### Index");
    lines.push("");
    for (const job of prg.jobs) {
      const slug = slugifyAnchor(job.name);
      const comment = job.comment ? ` - ${job.comment}` : "";
      lines.push(`- [${job.name}](#job-${slug})${comment}`);
    }

    for (const job of prg.jobs) {
      const slug = slugifyAnchor(job.name);
      lines.push("");
      lines.push(`<a id="job-${slug}"></a>`);
      lines.push(`### ${job.name}`);
      if (job.comment) {
        lines.push("");
        lines.push(job.comment);
      }

      lines.push("");
      if (job.args.length > 0) {
        lines.push("#### Arguments");
        lines.push("");
        lines.push(
          renderMarkdownTable(
            ["Name", "Type", "Comment"],
            job.args.map((arg) => [
              arg.name,
              arg.type,
              arg.comment ?? "",
            ])
          )
        );
      } else {
        lines.push("_No arguments._");
      }

      lines.push("");
      if (job.results.length > 0) {
        lines.push("#### Results");
        lines.push("");
        lines.push(
          renderMarkdownTable(
            ["Name", "Type", "Comment"],
            job.results.map((result) => [
              result.name,
              result.type,
              result.comment ?? "",
            ])
          )
        );
      } else {
        lines.push("_No results._");
      }
    }
  }

  lines.push("");
  lines.push("## Tables");
  lines.push("");

  if (prg.tables.length === 0) {
    lines.push("No tables found.");
  } else {
    lines.push("### Index");
    lines.push("");
    for (const table of prg.tables) {
      const slug = slugifyAnchor(table.name);
      lines.push(`- [${table.name}](#table-${slug}) (${table.rows} × ${table.columns})`);
    }

    for (const table of prg.tables) {
      const slug = slugifyAnchor(table.name);
      lines.push("");
      lines.push(`<a id="table-${slug}"></a>`);
      lines.push(`### ${table.name}`);
      lines.push("");
      lines.push(`Dimensions: ${table.rows} rows × ${table.columns} columns`);
      lines.push("");

      if (table.values.length === 0) {
        lines.push("_Empty table._");
        continue;
      }

      const columns = Math.max(table.columns, table.values[0]?.length ?? 0);
      const rawHeader = table.values[0] ?? [];
      const header = normalizeRow(
        rawHeader.length > 0
          ? rawHeader
          : Array.from({ length: columns }, (_, index) => `Column ${index + 1}`),
        columns
      );
      const dataRows = table.values.slice(1).map((row) => normalizeRow(row, columns));

      lines.push(renderMarkdownTable(header, dataRows));
    }
  }

  lines.push("");
  return lines.join("\n");
}

function formatIndexValue(infoStatus: InfoLoadResult, value: string | undefined): string {
  if (infoStatus.status !== "ok") {
    return "N/A";
  }
  return value && value.trim().length > 0 ? value : "N/A";
}

function renderIndexMarkdown(entries: DocsIndexEntry[]): string {
  const lines: string[] = [];
  lines.push("# EDIABAS PRG/GRP Documentation");
  lines.push("");
  lines.push(`Total files: ${entries.length}`);
  lines.push("");

  if (entries.length === 0) {
    lines.push("No PRG/GRP files found.");
    lines.push("");
    return lines.join("\n");
  }

  lines.push(
    renderMarkdownTable(
      ["File", "ECU", "Author", "Revision", "Language", "Jobs", "Tables"],
      entries.map((entry) => {
        const info = entry.infoStatus.status === "ok" ? entry.infoStatus.info : undefined;
        return [
          `[${entry.fileName}](${entry.outputFileName})`,
          formatIndexValue(entry.infoStatus, info?.ecu),
          formatIndexValue(entry.infoStatus, info?.author),
          formatIndexValue(entry.infoStatus, info?.revision),
          formatIndexValue(entry.infoStatus, info?.sprache),
          entry.jobCount.toString(),
          entry.tableCount.toString(),
        ];
      })
    )
  );

  lines.push("");
  return lines.join("\n");
}

function registerDocsCommand(program: Command): void {
  program
    .command("docs")
    .argument("<source-dir>", "Directory with PRG/GRP files")
    .argument("<output-dir>", "Directory to write generated Markdown")
    .option("--subdir <name>", "subdirectory for per-file docs", "sgbd")
    .description("Generate Markdown documentation for PRG/GRP files")
    .action(async (sourceDir: string, outputDir: string, options: { subdir: string }) => {
      try {
        const files = await listPrgFiles(sourceDir);
        await mkdir(outputDir, { recursive: true });

        const docsSubdir = options.subdir?.trim() || "sgbd";
        const perFileDir = path.join(outputDir, docsSubdir);
        await mkdir(perFileDir, { recursive: true });

        const entries: DocsIndexEntry[] = [];

        for (const filePath of files) {
          let prg: PrgFile;
          try {
            prg = readPrgFile(filePath);
          } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            process.stderr.write(`${chalk.yellow("Warning:")} Failed to parse ${filePath}: ${message}\n`);
            continue;
          }

          const infoStatus = await loadInfoMetadata(filePath, prg);
          if (infoStatus.status === "error") {
            process.stderr.write(
              `${chalk.yellow("Warning:")} INFO job failed for ${filePath}: ${infoStatus.message}\n`
            );
          }

          const outputFileName = `${path.basename(filePath, path.extname(filePath))}.md`;
          const outputPath = path.join(perFileDir, outputFileName);
          const markdown = renderDocsMarkdown({ filePath, prg, infoStatus });
          await writeFile(outputPath, markdown, "utf-8");

          entries.push({
            fileName: path.basename(filePath),
            outputFileName: path.posix.join(docsSubdir, outputFileName),
            jobCount: prg.jobs.length,
            tableCount: prg.tables.length,
            infoStatus,
          });
        }

        const indexMarkdown = renderIndexMarkdown(entries);
        await writeFile(path.join(outputDir, "index.md"), indexMarkdown, "utf-8");
        process.stdout.write(`Generated ${entries.length} documentation file(s) in ${outputDir}.\n`);
      } catch (error) {
        handleError(error);
      }
    });
}

export { registerDocsCommand };
