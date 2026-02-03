import { readFile } from "node:fs/promises";
import { parsePrg } from "../src/parser";

const filePath = process.argv[2];

if (!filePath) {
  console.error("Usage: tsx scripts/parse-real.ts <file>");
  process.exit(1);
}

const run = async () => {
  const buffer = new Uint8Array(await readFile(filePath));
  const prg = parsePrg(buffer);
  const names = prg.jobs.map((job) => job.name);
  console.log(names.join("\n"));
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
