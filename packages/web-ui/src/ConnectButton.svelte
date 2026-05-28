<script lang="ts">
  // Pure presentational connect-button. Consumer maps its runtime state
  // (phase / status text / error) onto the props and wires onconnect /
  // ondisconnect to its own connect / disconnect helpers. The component
  // knows nothing about Web Serial, j2534, or any specific transport —
  // it just renders the right visual for the current phase.
  import type { ConnectionPhase } from "./types.js";

  interface Props {
    phase: ConnectionPhase;
    /** Tooltip text on the connected state — usually "Connected · Web Serial @ 9600". */
    message?: string;
    /** Tooltip text on the error state — falls back to `message`. */
    errorMessage?: string;
    /** Tooltip text on the idle state. */
    idleTitle?: string;
    onconnect: () => void | Promise<void>;
    ondisconnect: () => void | Promise<void>;
  }

  const {
    phase,
    message,
    errorMessage,
    idleTitle = "Open the configured interface",
    onconnect,
    ondisconnect,
  }: Props = $props();
</script>

{#if phase === "connected"}
  <button
    class="flex items-center gap-1.5 rounded border border-green-500/40 bg-green-500/10 px-2 py-0.5 text-xs text-green-700 transition hover:border-green-500 hover:bg-green-500/20 dark:text-green-400"
    title={message}
    onclick={ondisconnect}
  >
    <span aria-hidden="true">●</span>
    Disconnect
  </button>
{:else if phase === "connecting"}
  <span class="text-xs text-faint">Connecting…</span>
{:else if phase === "error"}
  <button
    class="flex items-center gap-1.5 rounded border border-red-500/40 bg-red-500/10 px-2 py-0.5 text-xs text-red-700 transition hover:border-red-500 hover:bg-red-500/20 dark:text-red-400"
    title={errorMessage ?? message}
    onclick={onconnect}
  >
    <span aria-hidden="true">●</span>
    Connection error — retry
  </button>
{:else}
  <button
    class="rounded border border-divider bg-surface px-2 py-0.5 text-xs text-muted transition hover:border-accent hover:bg-elevated"
    onclick={onconnect}
    title={idleTitle}
  >
    Connect
  </button>
{/if}
