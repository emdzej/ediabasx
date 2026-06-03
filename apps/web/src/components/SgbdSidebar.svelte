<script lang="ts">
  import { state as app, loadSgbd, selectRemoteSgbd } from "../lib/app.svelte";
  import type { PickedFile } from "../lib/files";
  import { settings, setSidebarCollapsed } from "../lib/settings.svelte";
  import { runtime, fetchRemoteSgbdList } from "../lib/runtime.svelte";

  let filter = $state("");

  const isClient = $derived(app.config.mode === "client");

  type SgbdListEntry = { name: string; relativePath: string; ext: string; file?: File };

  // Remote SGBD list — fetched from server when connected in client mode.
  let remoteSgbds = $state<SgbdListEntry[]>([]);

  $effect(() => {
    if (isClient && runtime.phase === "connected") {
      fetchRemoteSgbdList()
        .then((list) => {
          remoteSgbds = list.map((s) => ({
            name: s.name,
            relativePath: s.name,
            ext: s.ext,
          }));
        })
        .catch((err) => {
          app.error = err instanceof Error ? err.message : String(err);
        });
    } else if (isClient) {
      remoteSgbds = [];
    }
  });

  const sgbds = $derived<SgbdListEntry[]>(isClient ? remoteSgbds : (app.install?.sgbds ?? []));

  const filtered = $derived.by(() => {
    const q = filter.trim().toLowerCase();
    if (q === "") return sgbds;
    return sgbds.filter((s) => s.relativePath.toLowerCase().includes(q));
  });
</script>

{#if settings.sidebarCollapsed}
  <!-- Collapsed rail — keeps a stable layout slot so the detail pane
       doesn't reflow on toggle. Single expand button; same pattern
       inpax-web's IpoSidebar uses. -->
  <aside class="flex h-full w-10 shrink-0 flex-col items-center border-r border-divider bg-surface">
    <button
      type="button"
      class="mt-2 rounded p-2 text-muted hover:bg-elevated hover:text-foreground"
      title="Expand SGBD list"
      aria-label="Expand SGBD list"
      onclick={() => setSidebarCollapsed(false)}
    >
      <span aria-hidden="true">›</span>
    </button>
  </aside>
{:else}
  <aside class="flex h-full w-72 shrink-0 flex-col border-r border-divider bg-surface">
    <div class="flex items-center gap-2 border-b border-divider px-3 py-2">
      <div class="min-w-0 flex-1">
        <p class="text-xs font-semibold uppercase tracking-wider text-faint">
          SGBDs · {sgbds.length}
        </p>
        {#if isClient}
          <p class="mt-0.5 truncate text-xs text-faint">
            from <span class="font-mono text-muted">server</span>
          </p>
        {:else if app.install}
          <p class="mt-0.5 truncate text-xs text-faint" title={app.install.root.name}>
            from <span class="font-mono text-muted">{app.install.root.name}</span>
            {#if app.install.layout === "ecu-direct"}
              <span class="ml-1 italic">(direct)</span>
            {/if}
          </p>
        {/if}
      </div>
      <button
        type="button"
        class="rounded p-1.5 text-muted hover:bg-elevated hover:text-foreground"
        title="Collapse SGBD list"
        aria-label="Collapse SGBD list"
        onclick={() => setSidebarCollapsed(true)}
      >
        <span aria-hidden="true">‹</span>
      </button>
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
              class="flex w-full items-baseline gap-2 border-l-2 border-b border-divider/40 px-3 py-1.5 text-left text-xs transition"
              class:border-l-accent={selected}
              class:bg-elevated={selected}
              class:font-semibold={selected}
              class:border-l-transparent={!selected}
              class:hover:bg-elevated={!selected}
              onclick={() => isClient ? selectRemoteSgbd(f.name, f.ext) : void loadSgbd(f as PickedFile)}
            >
              <span
                class="font-mono text-xs uppercase"
                class:text-accent={selected}
                class:text-faint={!selected}
              >
                {f.ext}
              </span>
              <span class="flex-1 truncate text-foreground">{f.name}</span>
              {#if !isClient && f.file}
                <span class="text-faint">{(f.file.size / 1024).toFixed(1)}K</span>
              {/if}
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  </aside>
{/if}
