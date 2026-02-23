import { readFile } from "node:fs/promises";
import { getLogger } from "@emdzej/ediabasx-logger";
import { parsePrg } from "../src/parser";

const log = getLogger("best-parser.parse-real");

const filePath = process.argv[2];

if (!filePath) {
  log.error("Usage: tsx scripts/parse-real.ts <file>");
  process.exit(1);
}

const run = async () => {
  const buffer = new Uint8Array(await readFile(filePath));
  const prg = parsePrg(buffer);
  const names = prg.jobs.map((job) => job.name);
  log.info(names.join("\n"));
};

run().catch((error) => {
  log.error(error);
  process.exit(1);
});
