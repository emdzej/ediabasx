<script lang="ts">
  import { state as app, goto, type View } from "./lib/app.svelte";
  import FilePicker from "./routes/FilePicker.svelte";
  import Wizard from "./routes/Wizard.svelte";
  import Jobs from "./routes/Jobs.svelte";

  const tabs: Array<{ id: View; label: string; disabled?: boolean }> = $derived([
    { id: "files", label: "1. Files" },
    { id: "wizard", label: "2. Configure" },
    { id: "jobs", label: "3. Jobs", disabled: app.prg === null },
  ]);
</script>

<div class="flex h-full flex-col">
  <header class="border-b border-zinc-800 px-4 py-3">
    <div class="flex items-center gap-6">
      <div class="text-sm font-bold tracking-wide">
        <span class="text-accent">Ediabas</span><span class="text-zinc-100">X</span>
        <span class="ml-2 font-normal text-zinc-500">· web</span>
      </div>
      <nav class="flex gap-1">
        {#each tabs as tab (tab.id)}
          <button
            type="button"
            class:bg-accent-muted={app.view === tab.id}
            class:text-zinc-100={app.view === tab.id}
            class:text-zinc-500={app.view !== tab.id}
            class:hover:text-zinc-100={!tab.disabled && app.view !== tab.id}
            class:opacity-40={tab.disabled}
            disabled={tab.disabled}
            class="rounded px-3 py-1 text-sm transition-colors disabled:cursor-not-allowed"
            onclick={() => goto(tab.id)}
          >
            {tab.label}
          </button>
        {/each}
      </nav>
      <div class="ml-auto text-xs text-zinc-500">
        {#if app.loadedFile}
          Loaded:
          <span class="text-zinc-300">{app.loadedFile.relativePath}</span>
          · {app.prg?.jobs.length ?? 0} jobs · {app.prg?.tables.length ?? 0} tables
        {/if}
      </div>
    </div>
  </header>

  <main class="min-h-0 flex-1 overflow-hidden">
    {#if app.view === "files"}
      <FilePicker />
    {:else if app.view === "wizard"}
      <Wizard />
    {:else if app.view === "jobs"}
      <Jobs />
    {/if}
  </main>
</div>
