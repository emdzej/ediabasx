/**
 * Public surface of `@emdzej/ediabasx-web-ui` — Svelte 5 source-only
 * components shared across the ediabasx-family web apps (ediabasx-web,
 * inpax-web, ncsx-web). The consumer's Vite + svelte plugin compiles
 * these — pre-compiling locks the output to a specific Svelte version
 * and breaks tree-shaking + HMR.
 *
 * Theming: components use Tailwind tokens (`bg-surface`, `text-muted`,
 * `border-divider`, …) from the `@emdzej/bimmerz-theme` preset. The
 * consumer must apply that preset; otherwise the classes resolve to
 * nothing and the components render unstyled.
 */

export { default as ConnectButton } from "./ConnectButton.svelte";
export { default as InterfaceConfigPanel } from "./InterfaceConfigPanel.svelte";

export type {
  ConnectionPhase,
  GatewayConfig,
  InterfaceConfig,
  InterfaceType,
  SerialConfig,
  SerialInitMode,
  SerialProtocol,
} from "./types.js";
