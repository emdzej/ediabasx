<script lang="ts">
  import type { EdiabasJobResult } from "@emdzej/ediabasx-ediabas";
  import { runtime, clearResults } from "../lib/runtime.svelte";

  // Filter out empty sets so the post-loop housekeeping commits don't show
  // up as "Set N (empty)" sections — matches the CLI's renderer.
  const nonEmptySets = $derived(
    (runtime.results ?? []).filter((set) => set.length > 0)
  );

  function formatValue(value: EdiabasJobResult["value"]): string {
    if (value instanceof Uint8Array) {
      const hex = Array.from(value)
        .map((b) => b.toString(16).padStart(2, "0").toUpperCase())
        .join(" ");
      return `[${value.length} bytes] ${hex}`;
    }
    if (typeof value === "number") return String(value);
    if (typeof value === "string") return value;
    return String(value);
  }
</script>

{#if runtime.results || runtime.errorMessage}
  <section class="flex flex-col gap-2 border-t border-divider p-3">
    <header class="flex items-center justify-between">
      <h3 class="text-xs font-bold uppercase tracking-wider text-muted">
        {runtime.errorMessage ? "Error" : "Results"}
        {#if runtime.resultsJobName}
          <span class="ml-2 font-normal normal-case text-faint">
            · {runtime.resultsJobName}
            {#if runtime.resultsExecMs !== null}
              · {runtime.resultsExecMs} ms
            {/if}
          </span>
        {/if}
      </h3>
      <button
        type="button"
        class="text-xs text-faint hover:text-muted"
        onclick={clearResults}
      >
        Clear
      </button>
    </header>

    {#if runtime.errorMessage}
      <div class="rounded border border-red-700 bg-red-950 p-3 text-xs text-red-200">
        <div class="font-mono">{runtime.errorMessage}</div>
      </div>
    {/if}

    {#if nonEmptySets.length > 0}
      <div class="flex flex-col gap-2">
        {#each nonEmptySets as set, setIndex (setIndex)}
          <details
            class="rounded border border-divider bg-surface/40"
            open={nonEmptySets.length === 1 || setIndex < 3}
          >
            <summary class="cursor-pointer select-none px-3 py-1.5 text-xs">
              <span class="font-bold text-accent">
                Set {setIndex + 1}/{nonEmptySets.length}
              </span>
              <span class="ml-2 text-faint">
                {set.length} result{set.length === 1 ? "" : "s"}
              </span>
            </summary>
            <table class="w-full border-collapse text-xs">
              <thead class="bg-surface">
                <tr>
                  <th class="border-y border-divider px-3 py-1.5 text-left font-bold text-muted">Name</th>
                  <th class="border-y border-divider px-3 py-1.5 text-left font-bold text-muted">Type</th>
                  <th class="border-y border-divider px-3 py-1.5 text-left font-bold text-muted">Value</th>
                </tr>
              </thead>
              <tbody>
                {#each set as result, i (i)}
                  <tr class="hover:bg-surface">
                    <td class="border-b border-divider px-3 py-1 text-foreground">{result.name}</td>
                    <td class="border-b border-divider px-3 py-1 text-faint">{result.type}</td>
                    <td class="border-b border-divider px-3 py-1 font-mono text-muted">{formatValue(result.value)}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </details>
        {/each}
      </div>
    {:else if runtime.results && !runtime.errorMessage}
      <div class="rounded border border-divider bg-surface/40 p-3 text-xs text-faint">
        Job emitted no results.
      </div>
    {/if}
  </section>
{/if}
