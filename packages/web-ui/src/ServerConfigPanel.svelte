<script lang="ts">
  import type { ModeConfig } from "./types.js";

  interface Props {
    config: ModeConfig;
  }

  let { config = $bindable() }: Props = $props();
</script>

<div>
  <span class="mb-1 block text-xs font-semibold uppercase tracking-wider text-faint">
    Server
  </span>
  <label class="text-xs text-muted">
    EdiabasX server URL
    <input
      type="text"
      class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground placeholder:text-faint focus:border-accent focus:outline-none"
      placeholder="ws://192.168.1.50:6802"
      bind:value={config.serverUrl}
    />
    <span class="mt-1 block text-faint">
      WebSocket URL of a running <code>ediabasx serve</code> instance.
    </span>
  </label>
</div>
