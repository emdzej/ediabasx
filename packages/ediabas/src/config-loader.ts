/**
 * Ediabas Configuration Loader
 * 
 * Load and validate configuration from JSON files
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import { z } from 'zod';
import {
  EdiabasConfigFileSchema,
  DEFAULT_CONFIG,
  type EdiabasConfigFile,
  type InterfaceConfig,
} from './config-schema.js';
import { EdiabasInterface, SimulationInterface } from '@ediabasx/interface-base';
import { SerialInterface } from '@ediabasx/interface-serial';
import { EnetInterface } from '@ediabasx/interface-enet';
import { Ediabas, type EdiabasConfig } from './ediabas.js';

/**
 * Configuration loading error
 */
export class ConfigError extends Error {
  constructor(
    message: string,
    public readonly issues?: z.ZodIssue[]
  ) {
    super(message);
    this.name = 'ConfigError';
  }

  /**
   * Format validation issues as human-readable string
   */
  formatIssues(): string {
    if (!this.issues?.length) return this.message;
    
    const lines = this.issues.map(issue => {
      const path = issue.path.join('.');
      return `  - ${path}: ${issue.message}`;
    });
    
    return `${this.message}\n${lines.join('\n')}`;
  }
}

/**
 * Result of config loading
 */
export interface LoadConfigResult {
  config: EdiabasConfigFile;
  path: string;
}

/**
 * Load configuration from a JSON file
 * 
 * @param configPath - Path to configuration file
 * @returns Validated configuration object
 * @throws ConfigError if file cannot be loaded or validation fails
 */
export async function loadConfig(configPath: string): Promise<LoadConfigResult> {
  const absolutePath = path.resolve(configPath);
  
  // Read file
  let content: string;
  try {
    content = await fs.readFile(absolutePath, 'utf-8');
  } catch (err) {
    const error = err as NodeJS.ErrnoException;
    if (error.code === 'ENOENT') {
      throw new ConfigError(`Configuration file not found: ${absolutePath}`);
    }
    throw new ConfigError(`Failed to read configuration file: ${error.message}`);
  }
  
  // Parse JSON
  let json: unknown;
  try {
    json = JSON.parse(content);
  } catch (err) {
    throw new ConfigError(`Invalid JSON in configuration file: ${(err as Error).message}`);
  }
  
  // Validate with Zod
  const result = EdiabasConfigFileSchema.safeParse(json);
  
  if (!result.success) {
    throw new ConfigError(
      'Configuration validation failed',
      result.error.issues
    );
  }
  
  return {
    config: result.data,
    path: absolutePath,
  };
}

/**
 * Load configuration from string
 * 
 * @param jsonString - JSON configuration string
 * @returns Validated configuration object
 * @throws ConfigError if validation fails
 */
export function parseConfig(jsonString: string): EdiabasConfigFile {
  let json: unknown;
  try {
    json = JSON.parse(jsonString);
  } catch (err) {
    throw new ConfigError(`Invalid JSON: ${(err as Error).message}`);
  }
  
  const result = EdiabasConfigFileSchema.safeParse(json);
  
  if (!result.success) {
    throw new ConfigError(
      'Configuration validation failed',
      result.error.issues
    );
  }
  
  return result.data;
}

/**
 * Validate configuration object
 * 
 * @param config - Configuration object to validate
 * @returns Validated configuration
 * @throws ConfigError if validation fails
 */
export function validateConfig(config: unknown): EdiabasConfigFile {
  const result = EdiabasConfigFileSchema.safeParse(config);
  
  if (!result.success) {
    throw new ConfigError(
      'Configuration validation failed',
      result.error.issues
    );
  }
  
  return result.data;
}

/**
 * Interface factory function type
 */
export type InterfaceFactory = (config: InterfaceConfig) => Promise<EdiabasInterface>;

/**
 * Default interface factory
 * Creates interface based on type in config
 */
export const defaultInterfaceFactory: InterfaceFactory = async (config: InterfaceConfig): Promise<EdiabasInterface> => {
  switch (config.type) {
    case 'simulation':
      return new SimulationInterface();
    
    case 'serial':
      return new SerialInterface({
        port: config.serial.port,
        baudRate: config.serial.baudRate,
        dataBits: config.serial.dataBits,
        parity: config.serial.parity,
        stopBits: config.serial.stopBits,
      });
    
    case 'enet':
      // EnetInterface not fully implemented yet, store config for future use
      console.warn('EnetInterface not fully implemented yet');
      return new EnetInterface();
    
    case 'icom':
      // ICOM not yet implemented, fall back to simulation
      console.warn('ICOM interface not yet implemented, using simulation');
      return new SimulationInterface();
    
    default:
      throw new ConfigError(`Unknown interface type: ${(config as InterfaceConfig).type}`);
  }
};

/**
 * Options for creating Ediabas from config
 */
export interface CreateFromConfigOptions {
  /** Custom interface factory */
  interfaceFactory?: InterfaceFactory;
  /** Override paths from config */
  pathOverrides?: Partial<EdiabasConfigFile['paths']>;
  /** Override timeouts from config */
  timeoutOverrides?: Partial<NonNullable<EdiabasConfigFile['timeouts']>>;
}

/**
 * Create Ediabas instance from configuration file
 * 
 * @param configPath - Path to configuration file
 * @param options - Optional creation options
 * @returns Configured Ediabas instance
 */
export async function createFromConfigFile(
  configPath: string,
  options?: CreateFromConfigOptions
): Promise<Ediabas> {
  const { config, path: absolutePath } = await loadConfig(configPath);
  const configDir = path.dirname(absolutePath);
  
  return createFromConfig(config, { ...options, basePath: configDir });
}

/**
 * Create Ediabas instance from configuration object
 * 
 * @param config - Configuration object
 * @param options - Optional creation options
 * @returns Configured Ediabas instance
 */
export async function createFromConfig(
  config: EdiabasConfigFile,
  options?: CreateFromConfigOptions & { basePath?: string }
): Promise<Ediabas> {
  const factory = options?.interfaceFactory ?? defaultInterfaceFactory;
  const basePath = options?.basePath ?? process.cwd();
  
  // Create interface
  const transport = await factory(config.interface);
  
  // Resolve paths relative to config file or cwd
  const sgbdPath = path.resolve(basePath, options?.pathOverrides?.sgbd ?? config.paths.sgbd);
  
  // Build EdiabasConfig
  const edConfig: EdiabasConfig = {
    ecuPath: sgbdPath,
    transport,
    simulation: config.interface.type === 'simulation',
    timeout: options?.timeoutOverrides?.response ?? config.timeouts?.response ?? DEFAULT_CONFIG.timeouts!.response,
    logging: config.logging?.enabled ?? false,
  };
  
  return new Ediabas(edConfig);
}

/**
 * Generate example configuration file
 */
export function generateExampleConfig(): EdiabasConfigFile {
  return {
    version: 1,
    interface: {
      type: 'serial',
      serial: {
        port: '/dev/ttyUSB0',
        baudRate: 9600,
        dataBits: 8,
        parity: 'none',
        stopBits: 1,
      },
    },
    paths: {
      sgbd: './ecu',
      trace: './logs',
    },
    timeouts: {
      connect: 5000,
      response: 2000,
    },
    logging: {
      enabled: true,
      level: 'info',
      console: true,
      timestamps: true,
      hexDump: false,
    },
  };
}

/**
 * Write configuration to file
 */
export async function writeConfig(
  config: EdiabasConfigFile,
  filePath: string
): Promise<void> {
  const validated = validateConfig(config);
  const json = JSON.stringify(validated, null, 2);
  await fs.writeFile(filePath, json, 'utf-8');
}
