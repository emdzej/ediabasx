/**
 * @ediabasx/ediabas - Main library for BMW ECU diagnostics
 *
 * High-level API combining BEST2 parsing, bytecode interpretation,
 * and hardware communication.
 */

export { Ediabas } from "./ediabas.js";
export type { EdiabasConfig, EdiabasJob, EdiabasJobResult } from "./ediabas.js";

// Config schema and types
export {
  EdiabasConfigFileSchema,
  InterfaceTypeSchema,
  SerialConfigSchema,
  EnetConfigSchema,
  IcomConfigSchema,
  SimulationConfigSchema,
  InterfaceConfigSchema,
  PathsConfigSchema,
  TimeoutsConfigSchema,
  LoggingConfigSchema,
  DEFAULT_CONFIG,
} from "./config-schema.js";

export type {
  EdiabasConfigFile,
  InterfaceType,
  SerialConfig,
  EnetConfig,
  IcomConfig,
  SimulationConfig,
  InterfaceConfig,
  PathsConfig,
  TimeoutsConfig,
  LoggingConfig,
} from "./config-schema.js";

// Config loader
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
