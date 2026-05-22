<script lang="ts">
  import { connect, disconnect, runtime } from "../lib/runtime.svelte";

  async function onConnect(): Promise<void> {
    await connect();
  }

  async function onDisconnect(): Promise<void> {
    await disconnect();
  }
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
  >
    <span aria-hidden="true">●</span>
    Connection error — retry
  </button>
{:else}
  <button
    class="rounded border border-divider bg-surface px-2 py-0.5 text-xs text-muted transition hover:border-accent hover:bg-elevated"
    onclick={onConnect}
    title="Open the configured interface — Web Serial or remote gateway"
  >
    Connect
  </button>
{/if}
