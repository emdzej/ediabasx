# @emdzej/ediabasx-web-ui

Shared Svelte 5 components for the EdiabasX-family web apps — `ediabasx-web`, and (planned) `inpax-web`, `ncsx-web`. Source-only: the consumer's Vite + svelte-plugin compiles them.

Currently ships:

- **`ConnectButton`** — presentational connect/disconnect button. Takes `phase` (`idle` / `connecting` / `connected` / `error` / `disconnected`), an idle/connected/error tooltip, and `onconnect` / `ondisconnect` callbacks. No runtime imports — the consumer wires its own state.
- **`InterfaceConfigPanel`** — the interface `<select>` + per-interface fieldsets. Three transports surfaced with BMW-familiar labels: *Web Serial — K+DCAN cable (local)*, *J2534 — Tactrix OpenPort 2.0*, *Gateway — remote ediabasx host*. Two-way binds to a config object satisfying `InterfaceConfig`. `available={["webserial", "j2534"]}` lets a consumer hide options it can't drive. The Web Serial fieldset includes a note pointing users at the Gateway path when they hit FTDI-latency issues the browser can't fix.
- **Shared types** — `InterfaceConfig`, `InterfaceType`, `SerialConfig`, `GatewayConfig`, `ConnectionPhase`. Each app's `WebConfig` typically extends `InterfaceConfig` with its own app-specific fields (logging, install handle, …).

## Install

```bash
pnpm add @emdzej/ediabasx-web-ui @emdzej/bimmerz-theme
```

## Use

```svelte
<script lang="ts">
  import {
    ConnectButton,
    InterfaceConfigPanel,
    type InterfaceConfig,
  } from '@emdzej/ediabasx-web-ui';

  let config = $state<InterfaceConfig>({ interface: 'webserial', serial: {} });
</script>

<InterfaceConfigPanel bind:config />

<ConnectButton
  phase={runtime.phase}
  message={runtime.message}
  onconnect={connect}
  ondisconnect={disconnect}
/>
```

## Tailwind setup (REQUIRED)

Tailwind tree-shakes any class it doesn't see in its `content` glob. Workspace packages live outside the consumer's `./src`, so **you must explicitly list this package's source files**:

```ts
// tailwind.config.ts (consumer)
import bimmerzPreset from '@emdzej/bimmerz-theme';

export default {
  content: [
    './index.html',
    './src/**/*.{ts,svelte}',
    // For published consumers
    './node_modules/@emdzej/ediabasx-web-ui/src/**/*.{ts,svelte}',
    // ...or for monorepo consumers
    // '../../packages/web-ui/src/**/*.{ts,svelte}',
  ],
  presets: [bimmerzPreset],
  // ...per-app accent extension here
};
```

Without this, components render with no colour (Tailwind generates no CSS for unseen utility classes).

## Theming

Components use Tailwind tokens from the [`@emdzej/bimmerz-theme`](https://www.npmjs.com/package/@emdzej/bimmerz-theme) preset: `bg-surface`, `text-muted`, `border-divider`, etc. The consumer must:

1. Apply the preset in `tailwind.config.ts` (`presets: [bimmerzPreset]`).
2. Import the tokens in `app.css`:
   ```css
   @import "@emdzej/bimmerz-theme/tokens.css";
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
3. Toggle `.dark` on `<html>` for the dark scope.

Per-app accent (e.g. cyan for ediabasx, blue for inpax) stays in the consumer's local `tailwind.config.ts` extension.

## Peer deps

- `svelte ^5.0.0`
- `@emdzej/bimmerz-theme ^0.1.0`
- `tailwindcss ^3.4.0`
