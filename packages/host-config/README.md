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

## The inheritance rule

The most important nuance: when CLI flags pick a different interface than the saved file, **the file's `options` block is NOT inherited**. Otherwise a saved serial `protocol: "uart"` would leak into a j2534 selection that doesn't accept that value. The resolver only carries over file options when `fileConfig.interface === resolvedName`.

## See also

- [`@emdzej/ediabasx-cli`](../../apps/cli) — the primary consumer.
- [`@emdzej/ediabasx-interfaces`](../interfaces) — interface metadata registry the resolver validates against.
