#!/usr/bin/env node
import { Command } from "commander";
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

const program = new Command();

program
  .name("ediabasx")
  .description("CLI for parsing EDIABAS PRG/GRP files")
  .version("0.1.0");

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
