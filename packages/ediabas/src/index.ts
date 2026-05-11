/**
 * @emdzej/ediabasx-ediabas - Main library for BMW ECU diagnostics
 *
 * Browser-safe surface — just the `Ediabas` class and its types. Node
 * consumers that want filesystem / network glue (config-loader,
 * interface factory, gateway client) should import from
 * `@emdzej/ediabasx-ediabas/node`.
 */

export { Ediabas } from "./ediabas.js";
export type { EdiabasConfig, EdiabasJob, EdiabasJobResult } from "./ediabas.js";

// Config schema is just zod definitions / types — safe in browsers.
export {
  EdiabasConfigFileSchema,
  InterfaceTypeSchema,
  SerialConfigSchema,
  EnetConfigSchema,
  GatewayConfigSchema,
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
  GatewayConfig,
  IcomConfig,
  SimulationConfig,
  InterfaceConfig,
  PathsConfig,
  TimeoutsConfig,
  LoggingConfig,
} from "./config-schema.js";
