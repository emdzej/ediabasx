<script lang="ts">
  import { state as app, loadSgbd } from "../lib/app.svelte";

  let filter = $state("");

  const sgbds = $derived(app.install?.sgbds ?? []);

  const filtered = $derived.by(() => {
    const q = filter.trim().toLowerCase();
    if (q === "") return sgbds;
    return sgbds.filter((s) => s.relativePath.toLowerCase().includes(q));
  });
</script>

<aside class="flex h-full w-72 flex-col border-r border-divider bg-surface">
  <div class="border-b border-divider px-3 py-2">
    <p class="text-xs font-semibold uppercase tracking-wider text-faint">
      SGBDs · {sgbds.length}
    </p>
    {#if app.install}
      <p class="mt-0.5 truncate text-xs text-faint" title={app.install.root.name}>
        from <span class="font-mono text-muted">{app.install.root.name}</span>
        {#if app.install.layout === "ecu-direct"}
          <span class="ml-1 italic">(direct)</span>
        {/if}
      </p>
    {/if}
  </div>

  <div class="border-b border-divider p-2">
    <input
      type="search"
      placeholder="Filter — name or path…"
      bind:value={filter}
      class="w-full rounded border border-rule bg-base px-2 py-1 text-xs text-foreground placeholder:text-faint focus:border-accent focus:outline-none"
    />
  </div>

  {#if filtered.length === 0}
    <p class="p-3 text-xs text-faint italic">
      {sgbds.length === 0 ? "No SGBD files found." : `No SGBDs match "${filter}".`}
    </p>
  {:else}
    <ul class="flex-1 overflow-y-auto">
      {#each filtered as f (f.relativePath)}
        {@const selected = app.loadedFile?.relativePath === f.relativePath}
        <li>
          <button
            type="button"
            class="flex w-full items-baseline gap-2 border-b border-divider/40 px-3 py-1.5 text-left text-xs transition hover:bg-elevated"
            class:bg-elevated={selected}
            class:font-semibold={selected}
            onclick={() => void loadSgbd(f)}
          >
            <span
              class="font-mono text-xs uppercase"
              class:text-accent={selected}
              class:text-faint={!selected}
            >
              {f.ext}
            </span>
            <span class="flex-1 truncate text-foreground">{f.name}</span>
            <span class="text-faint">{(f.file.size / 1024).toFixed(1)}K</span>
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</aside>
