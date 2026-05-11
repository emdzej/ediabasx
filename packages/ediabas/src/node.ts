// Node-only entry point. Re-exports the parts of the library that touch
// the filesystem, native transports, or TCP — kept off the default
// `index.ts` so the browser bundle stays free of `serialport`, `node:fs`,
// `node:net`, etc.

export {
  loadConfig,
  parseConfig,
  validateConfig,
  createFromConfig,
  createFromConfigFile,
  generateExampleConfig,
  writeConfig,
  defaultInterfaceFactory,
  ConfigError,
} from "./config-loader.js";

export type {
  LoadConfigResult,
  InterfaceFactory,
  CreateFromConfigOptions,
} from "./config-loader.js";
