<script lang="ts">
  import type { ClientConnectionMethod, ModeConfig } from "./types.js";
  import ServerConfigPanel from "./ServerConfigPanel.svelte";

  interface Props {
    config: ModeConfig;
  }

  let { config = $bindable() }: Props = $props();

  const method = $derived(config.connectionMethod ?? "direct");

  function setMethod(m: ClientConnectionMethod): void {
    config = { ...config, connectionMethod: m };
  }
</script>

<div class="space-y-3">
  <div>
    <span class="mb-1 block text-xs font-semibold uppercase tracking-wider text-faint">
      Connection
    </span>
    <div class="flex gap-0 overflow-hidden rounded border border-rule">
      {#each [
        { key: "direct", label: "Direct" },
        { key: "connect", label: "Bimmerz Connect" },
      ] as choice (choice.key)}
        {@const active = method === choice.key}
        <button
          type="button"
          class="flex-1 px-3 py-1 text-xs transition"
          class:bg-accent={active}
          class:text-zinc-950={active}
          class:font-semibold={active}
          class:text-muted={!active}
          class:hover:bg-elevated={!active}
          onclick={() => setMethod(choice.key as ClientConnectionMethod)}
        >
          {choice.label}
        </button>
      {/each}
    </div>
  </div>

  {#if method === "direct"}
    <ServerConfigPanel bind:config />
  {:else}
    <div class="space-y-2">
      <label class="text-xs text-muted">
        Relay URL
        <input
          type="text"
          class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm font-mono text-foreground placeholder:text-faint focus:border-accent focus:outline-none"
          placeholder="wss://connect.bimmerz.app"
          value={config.connectRelayUrl ?? ""}
          oninput={(e) => { config = { ...config, connectRelayUrl: (e.currentTarget as HTMLInputElement).value || undefined }; }}
        />
        <span class="mt-1 block text-faint">
          Leave empty for the default relay. Click Connect to enter a session ID + token.
        </span>
      </label>
    </div>
  {/if}
</div>
