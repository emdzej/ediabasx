# @emdzej/ediabasx-host-config

Shared loader, saver, and selection-resolver for `~/.config/ediabasx/config.json` — consumed by [`@emdzej/ediabasx-cli`](../../apps/cli) and intended for any other host that wants to interoperate with the same config file (e.g. `nfsx-cli`).

Pure data: no logger, no interface factory, no Node-only side effects beyond `fs`.

## Use

```ts
import {
  DEFAULT_CONFIG_PATH,
  loadConfig,
  saveConfig,
  resolveSelection,
  parseGatewayAddress,
} from '@emdzej/ediabasx-host-config';

// Load the user's saved config (returns undefined if no file).
const file = loadConfig();

// Resolve the active interface selection — CLI flags override file
// config, file config provides defaults, options only inherit when the
// resolved interface matches what the file was configured for.
const selection = resolveSelection({
  fileConfig: file,
  cliInterface: 'j2534',
  fallback: 'simulation',
  cliOptions: { hostInterByteMs: '5' },
});
// → { name: 'j2534', options: { hostInterByteMs: '5', ... } }

// Save updated config.
saveConfig({ interface: 'j2534', options: { protocol: 'ds2' } });
```

## SGBD resolution

The `resolveSgbd` function resolves bare ECU names (e.g. `"IKE"`) to file paths using the configured `sgbdPath`. Used by the server, `EmbeddedEdiabas`, and the CLI `run` command.

```ts
import { resolveSgbd } from "@emdzej/ediabasx-host-config";

// Bare name → searches sgbdPath for IKE.prg, IKE.PRG, IKE.grp, IKE.GRP
const path = resolveSgbd("IKE", "/path/to/ecu/files");

// File path or name with extension → returned as-is (resolved against sgbdPath)
const path2 = resolveSgbd("MS430DS0.prg", "/path/to/ecu/files");

// Path with separators → resolved against cwd, sgbdPath ignored
const path3 = resolveSgbd("./custom/IKE.prg", undefined);
```

## Server config

The config file supports an optional `server` block for `ediabasx serve`:

```json
{
  "interface": "kdcan",
  "options": { "port": "/dev/cu.usbserial-A50285BI" },
  "sgbdPath": "/path/to/ecu/files",
  "server": {
    "host": "0.0.0.0",
    "port": 6802,
    "transport": "websocket"
  }
}
```

`sgbdPath` is a top-level field — shared by the server, `EmbeddedEdiabas`, and the CLI `run` command for bare ECU name resolution.

## The inheritance rule

The most important nuance: when CLI flags pick a different interface than the saved file, **the file's `options` block is NOT inherited**. Otherwise a saved serial `protocol: "uart"` would leak into a j2534 selection that doesn't accept that value. The resolver only carries over file options when `fileConfig.interface === resolvedName`.

## See also

- [`@emdzej/ediabasx-cli`](../../apps/cli) — the primary consumer.
- [`@emdzej/ediabasx-interfaces`](../interfaces) — interface metadata registry the resolver validates against.
