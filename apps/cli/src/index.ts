#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Command } from "commander";
import { configureLogger } from "@emdzej/bimmerz-logger";
import { resolveLoggerConfig } from "./utils/logger-config.js";
import { registerConfigureCommand } from "./commands/configure.js";
import { registerDecompileCommand } from "./commands/decompile.js";
import { registerDocsCommand } from "./commands/docs.js";
import { registerExploreCommand } from "./commands/explore.js";
import { registerGatewayCommand } from "./commands/gateway.js";
import { registerInfoCommand } from "./commands/info.js";
import { registerInterfacesCommand } from "./commands/interfaces.js";
import { registerJobCommand } from "./commands/job.js";
import { registerJobsCommand } from "./commands/jobs.js";
import { registerRunCommand } from "./commands/run.js";
import { registerSimulatorCommand } from "./commands/simulator.js";
import { registerTableCommand } from "./commands/table.js";
import { registerTablesCommand } from "./commands/tables.js";

// First-pass logger configuration — env vars only. Early-boot logs
// (anything emitted before Commander dispatches into a command's
// action) hit this. Commands that load the user's config file then
// re-call `configureLogger(resolveLoggerConfig({ env, fileLogging }))`
// with the merged env+file config; bimmerz-logger handles handed
// out during this first pass pick up the new config instantly because
// they're proxies, not snapshots.
//
// Env namespace (replaces 0.2.x's EDIABASX_VERBOSE):
//
//   EDIABASX_LOG_LEVEL=trace|debug|info|warn|error|fatal|silent
//   EDIABASX_LOG_CATEGORIES="EDIABASX.ediabas.wire=trace,EDIABASX=info"
//   EDIABASX_LOG_DESTINATION=/path/to.log
//   EDIABASX_LOG_FORMAT=pretty|json
configureLogger(
  resolveLoggerConfig({
    env: process.env,
    isTty: process.stdout.isTTY ?? false,
  }),
);

// dist/index.js → ../package.json. Bundlers / `npm pack` keep
// package.json next to dist/, so this resolves in both the
// `pnpm dev` (ts-node from src/) and shipped-tarball cases.
const pkgPath = join(dirname(fileURLToPath(import.meta.url)), "..", "package.json");
const pkgVersion = (JSON.parse(readFileSync(pkgPath, "utf8")) as { version: string }).version;

const program = new Command();

program
  .name("ediabasx")
  .description("CLI for parsing EDIABAS PRG/GRP files")
  .version(pkgVersion);

registerConfigureCommand(program);
registerInterfacesCommand(program);
registerGatewayCommand(program);
registerInfoCommand(program);
registerJobsCommand(program);
registerJobCommand(program);
registerTableCommand(program);
registerTablesCommand(program);
registerExploreCommand(program);
registerSimulatorCommand(program);
registerDecompileCommand(program);
registerRunCommand(program);
registerDocsCommand(program);

program.parse();
