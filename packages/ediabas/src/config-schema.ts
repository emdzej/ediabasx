/**
 * Ediabas Configuration Schema
 * 
 * Zod schemas for validating configuration files
 */

import { z } from 'zod';

/**
 * Interface type enum
 */
export const InterfaceTypeSchema = z.enum([
  'simulation',
  'serial',
  'enet',
  'gateway',
  'icom',
]);

export type InterfaceType = z.infer<typeof InterfaceTypeSchema>;

/**
 * Serial interface configuration
 */
export const SerialConfigSchema = z.object({
  port: z.string().describe('Serial port path (e.g., /dev/ttyUSB0, COM3)'),
  baudRate: z.number().int().positive().default(9600),
  dataBits: z.union([z.literal(7), z.literal(8)]).default(8),
  parity: z.enum(['none', 'even', 'odd']).default('none'),
  stopBits: z.union([z.literal(1), z.literal(2)]).default(1),
  protocol: z.enum(['kline', 'dcan', 'isotp', 'tp20']).optional(),
  testerAddress: z.number().int().min(0).max(255).optional(),
  ecuAddress: z.number().int().min(0).max(255).optional(),
  testerCanId: z.number().int().min(0).optional(),
  ecuCanId: z.number().int().min(0).optional(),
});

export type SerialConfig = z.infer<typeof SerialConfigSchema>;

/**
 * ENET (Ethernet) interface configuration
 */
export const EnetConfigSchema = z.object({
  host: z.string().describe('ECU IP address or hostname'),
  port: z.number().int().min(1).max(65535).default(6801),
  protocol: z.enum(['hsfz', 'doip']).default('hsfz'),
  testerAddress: z.number().int().min(0).optional(),
  ecuAddress: z.number().int().min(0).optional(),
});

export type EnetConfig = z.infer<typeof EnetConfigSchema>;

/**
 * ICOM interface configuration
 */
export const IcomConfigSchema = z.object({
  host: z.string().describe('ICOM device IP address'),
  port: z.number().int().min(1).max(65535).default(6801),
  vehicleIdent: z.string().optional(),
});

export type IcomConfig = z.infer<typeof IcomConfigSchema>;

/**
 * Simulation interface configuration
 */
export const SimulationConfigSchema = z.object({
  responsesFile: z.string().optional().describe('Path to response simulation file'),
  latencyMs: z.number().int().min(0).default(0),
});

export type SimulationConfig = z.infer<typeof SimulationConfigSchema>;

/**
 * Gateway interface configuration (remote JSON-RPC connection)
 */
export const GatewayConfigSchema = z.object({
  host: z.string().default('127.0.0.1').describe('Gateway server IP or hostname'),
  port: z.number().int().min(1).max(65535).default(6801).describe('Gateway server port'),
});

export type GatewayConfig = z.infer<typeof GatewayConfigSchema>;

/**
 * Interface configuration (discriminated union)
 */
export const InterfaceConfigSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('simulation'), simulation: SimulationConfigSchema.optional() }),
  z.object({ type: z.literal('serial'), serial: SerialConfigSchema }),
  z.object({ type: z.literal('enet'), enet: EnetConfigSchema }),
  z.object({ type: z.literal('gateway'), gateway: GatewayConfigSchema.optional() }),
  z.object({ type: z.literal('icom'), icom: IcomConfigSchema }),
]);

export type InterfaceConfig = z.infer<typeof InterfaceConfigSchema>;

/**
 * Path configuration
 */
export const PathsConfigSchema = z.object({
  sgbd: z.string().describe('Path to SGBD/ECU files directory'),
  trace: z.string().optional().describe('Path for trace/log files'),
  grp: z.string().optional().describe('Path to GRP group files'),
});

export type PathsConfig = z.infer<typeof PathsConfigSchema>;

/**
 * Timeout configuration
 */
export const TimeoutsConfigSchema = z.object({
  connect: z.number().int().positive().default(5000).describe('Connection timeout in ms'),
  response: z.number().int().positive().default(2000).describe('Response timeout in ms'),
  idle: z.number().int().positive().optional().describe('Idle disconnect timeout in ms'),
});

export type TimeoutsConfig = z.infer<typeof TimeoutsConfigSchema>;

/**
 * Logging configuration — mirrors `@emdzej/bimmerz-logger`'s
 * `LoggerConfig` shape so the CLI can hand the file's `logging`
 * section straight to `configureLogger()` (with env-var overrides
 * layered on top via `EDIABASX_LOG_*`).
 *
 * Notable change vs. 0.2.x:
 *
 * - **`enabled` is gone.** The per-instance `Ediabas.config.logging`
 *   boolean it fed has been deleted; wire-level + lifecycle tracing
 *   now routes through the standard logger. To get the same effect,
 *   set `level: 'debug'` (lifecycle metadata) or
 *   `categories: { 'EDIABASX.ediabas.wire': 'trace' }` (raw bytes).
 * - **`file` → `destination`, `console` / `timestamps` / `hexDump` gone.**
 *   The sink (pretty stdout vs. JSON vs. file) is decided by the
 *   logger; the file format is whatever pino-pretty (`pretty: true`)
 *   or pino's JSON renders.
 */
export const LoggingConfigSchema = z.object({
  /** Default level when no `categories` entry matches. */
  level: z.enum(['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'silent']).default('info'),
  /**
   * Per-category levels. Dot-separated keys; lookup walks up the
   * path, so a rule for `EDIABASX` applies to `EDIABASX.ediabas`,
   * `EDIABASX.ediabas.wire`, etc. unless a more specific rule wins.
   */
  categories: z.record(z.string(), z.enum(['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'silent'])).optional(),
  /** File path for log output. When set, logs go to file instead of stdout. */
  destination: z.string().optional().describe('Log file path'),
  /** Render through pino-pretty (TTY-friendly). Ignored when destination is set. */
  pretty: z.boolean().optional().describe('Use pino-pretty colour render'),
});

export type LoggingConfig = z.infer<typeof LoggingConfigSchema>;

/**
 * Main Ediabas configuration schema
 */
export const EdiabasConfigFileSchema = z.object({
  /** Configuration file version */
  version: z.literal(1).default(1),
  
  /** Interface configuration */
  interface: InterfaceConfigSchema,
  
  /** Paths configuration */
  paths: PathsConfigSchema,
  
  /** Timeouts configuration */
  timeouts: TimeoutsConfigSchema.optional(),
  
  /** Logging configuration */
  logging: LoggingConfigSchema.optional(),
});

export type EdiabasConfigFile = z.infer<typeof EdiabasConfigFileSchema>;

/**
 * Default configuration values
 */
export const DEFAULT_CONFIG: Partial<EdiabasConfigFile> = {
  version: 1,
  timeouts: {
    connect: 5000,
    response: 2000,
  },
  logging: {
    level: 'info',
  },
};
