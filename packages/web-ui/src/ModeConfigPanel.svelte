<script lang="ts">
  import type { AppMode, ModeConfig } from "./types.js";

  interface Props {
    config: ModeConfig;
    onmodechange?: (mode: AppMode) => void;
  }

  let { config = $bindable(), onmodechange }: Props = $props();

  function setMode(mode: AppMode): void {
    if (config.mode === mode) return;
    onmodechange?.(mode);
    config = { ...config, mode };
  }
</script>

<div>
  <span class="mb-1 block text-xs font-semibold uppercase tracking-wider text-faint">
    Mode
  </span>
  <div class="flex gap-0 overflow-hidden rounded border border-rule">
    {#each ["embedded", "client"] as choice (choice)}
      {@const active = config.mode === choice}
      <button
        type="button"
        class="flex-1 px-3 py-1 text-xs transition"
        class:bg-accent={active}
        class:text-zinc-950={active}
        class:font-semibold={active}
        class:text-muted={!active}
        class:hover:bg-elevated={!active}
        onclick={() => setMode(choice as AppMode)}
      >
        {choice[0]!.toUpperCase() + choice.slice(1)}
      </button>
    {/each}
  </div>
  <p class="mt-1 text-xs text-faint">
    {#if config.mode === "client"}
      Connect to a remote EdiabasX server — no local hardware or SGBD files needed.
    {:else}
      Use local hardware (Web Serial, J2534, gateway) and local SGBD files.
    {/if}
  </p>
</div>
