<script lang="ts">
  import { runtime, type ConnectionPhase } from "../lib/runtime.svelte";

  const phaseColor: Record<ConnectionPhase, string> = {
    idle: "bg-rule",
    connecting: "bg-amber-500",
    connected: "bg-emerald-500",
    error: "bg-red-500",
    disconnected: "bg-faint",
  };

  const phaseGlyph: Record<ConnectionPhase, string> = {
    idle: "○",
    connecting: "◐",
    connected: "●",
    error: "!",
    disconnected: "○",
  };
</script>

<div class="flex items-center gap-2 rounded border border-divider bg-surface px-3 py-1.5 text-xs">
  <span class="h-2 w-2 rounded-full {phaseColor[runtime.phase]}"></span>
  <span class="font-mono text-faint">{phaseGlyph[runtime.phase]}</span>
  <span class="text-foreground">{runtime.message}</span>
</div>
