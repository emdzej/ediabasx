<script lang="ts">
  import { state as app } from "../lib/app.svelte";
  import { connect, disconnect, runtime } from "../lib/runtime.svelte";

  async function onConnect(): Promise<void> {
    await connect();
  }

  async function onDisconnect(): Promise<void> {
    await disconnect();
  }

  /**
   * The connect path requires a PRG loaded — `runtime.connect()` calls
   * `loadSgbdFromBuffer(app.prgBuffer)` so the freshly-built Ediabas
   * instance has bytecode to run jobs against. Disable the button until
   * the user picks an SGBD from the sidebar, with a tooltip explaining
   * the gate.
   */
  const havePrg = $derived(app.prg !== null && app.prgBuffer !== null);
</script>

{#if runtime.phase === "connected"}
  <button
    class="flex items-center gap-1.5 rounded border border-green-500/40 bg-green-500/10 px-2 py-0.5 text-xs text-green-700 transition hover:border-green-500 hover:bg-green-500/20 dark:text-green-400"
    title={runtime.message}
    onclick={onDisconnect}
  >
    <span aria-hidden="true">●</span>
    Disconnect
  </button>
{:else if runtime.phase === "connecting"}
  <span class="text-xs text-faint">Connecting…</span>
{:else if runtime.phase === "error"}
  <button
    class="flex items-center gap-1.5 rounded border border-red-500/40 bg-red-500/10 px-2 py-0.5 text-xs text-red-700 transition hover:border-red-500 hover:bg-red-500/20 dark:text-red-400"
    title={runtime.errorMessage ?? runtime.message}
    onclick={onConnect}
    disabled={!havePrg}
  >
    <span aria-hidden="true">●</span>
    Connection error — retry
  </button>
{:else}
  <button
    class="rounded border border-divider bg-surface px-2 py-0.5 text-xs text-muted transition hover:border-accent hover:bg-elevated disabled:cursor-not-allowed disabled:opacity-50"
    onclick={onConnect}
    disabled={!havePrg}
    title={havePrg ? "Open the configured interface and load the picked SGBD" : "Pick a PRG / GRP from the sidebar first"}
  >
    Connect
  </button>
{/if}
