#!/usr/bin/env node
import { Command } from "commander";
import { configureLogger, type LogLevel } from "@emdzej/ediabasx-logger";
import { registerConfigureCommand } from "./commands/configure.js";
import { registerDisasmCommand } from "./commands/disasm.js";
import { registerDocsCommand } from "./commands/docs.js";
import { registerExploreCommand } from "./commands/explore.js";
import { registerGatewayCommand } from "./commands/gateway.js";
import { registerInfoCommand } from "./commands/info.js";
import { registerInterfacesCommand } from "./commands/interfaces.js";
import { registerJobsCommand } from "./commands/jobs.js";
import { registerParseCommand } from "./commands/parse.js";
import { registerRunCommand } from "./commands/run.js";
import { registerSimulatorCommand } from "./commands/simulator.js";
import { registerTableCommand } from "./commands/table.js";
import { registerTablesCommand } from "./commands/tables.js";

// Configure the shared logger from process env BEFORE any command runs.
// The logger package itself no longer reads from `process.env` (it has to
// stay portable to the browser); the CLI is the host that knows about env
// vars and forwards them here.
//
//   EDIABASX_LOG_LEVEL   one of: trace|debug|info|warn|error|fatal|silent
//   EDIABASX_VERBOSE=1   shortcut for level=debug (matches existing usage
//                        in the VM tracing path and Ediabas.logging flag)
//   EDIABASX_LOG_DESTINATION  write to a file instead of stdout
const VALID_LEVELS: readonly LogLevel[] = ["trace", "debug", "info", "warn", "error", "fatal", "silent"];
const envLevel = process.env.EDIABASX_LOG_LEVEL as LogLevel | undefined;
const verbose = process.env.EDIABASX_VERBOSE === "1";
const level: LogLevel = envLevel && VALID_LEVELS.includes(envLevel)
  ? envLevel
  : verbose
    ? "debug"
    : "info";
configureLogger({
  level,
  // pino-pretty for terminal use; matches the prior implicit default.
  pretty: true,
  destination: process.env.EDIABASX_LOG_DESTINATION,
});

const program = new Command();

program
  .name("ediabasx")
  .description("CLI for parsing EDIABAS PRG/GRP files")
  .version("0.1.0");

registerConfigureCommand(program);
registerInterfacesCommand(program);
registerGatewayCommand(program);
registerParseCommand(program);
registerInfoCommand(program);
registerJobsCommand(program);
registerTableCommand(program);
registerTablesCommand(program);
registerExploreCommand(program);
registerSimulatorCommand(program);
registerDisasmCommand(program);
registerRunCommand(program);
registerDocsCommand(program);

program.parse();
