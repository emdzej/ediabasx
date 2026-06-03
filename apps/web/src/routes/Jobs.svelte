<script lang="ts">
  import {
    disassembleJob,
    formatInstruction,
    type PrgJob,
  } from "@emdzej/ediabasx-best-parser";
  import { state as app, type RemoteJob } from "../lib/app.svelte";
  import {
    runtime,
    runJob,
    clearResults,
    isWebSerialSupported,
    fetchRemoteJobs,
    fetchRemoteJobMetadata,
    fetchRemoteDisassembly,
  } from "../lib/runtime.svelte";
  import ResultsPanel from "../components/ResultsPanel.svelte";
  import RunJobDialog from "../components/RunJobDialog.svelte";

  let searchQuery = $state("");
  let showDisassembly = $state(false);
  let showRunDialog = $state(false);

  const isClient = $derived(app.config.mode === "client");

  // Fetch remote job list when SGBD changes in client mode.
  $effect(() => {
    if (isClient && app.loadedFile && runtime.phase === "connected" && !app.remoteJobs) {
      const ecu = app.loadedFile.name.replace(/\.(prg|grp)$/i, "");
      fetchRemoteJobs(ecu)
        .then(({ jobs, tableCount }) => {
          app.remoteJobs = jobs;
          app.remoteTableCount = tableCount;
        })
        .catch((err) => {
          app.error = err instanceof Error ? err.message : String(err);
        });
    }
  });

  // Unified job type for the list — PrgJob (embedded) or RemoteJob (client).
  type JobEntry = { name: string; comment?: string; argCount: number; resultCount: number };

  const allJobs = $derived<JobEntry[]>(
    isClient ? (app.remoteJobs ?? []) : (app.prg?.jobs ?? []),
  );

  const filteredJobs = $derived.by(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return allJobs;
    return allJobs.filter((j) => j.name.toLowerCase().includes(q));
  });

  let selectedName = $state<string | null>(null);
  const selectedEntry = $derived<JobEntry | null>(
    filteredJobs.find((j) => j.name === selectedName) ?? filteredJobs[0] ?? null,
  );

  // In embedded mode, the full PrgJob has args/results inline.
  // In client mode, we fetch them lazily.
  const selectedPrgJob = $derived<PrgJob | null>(
    !isClient && app.prg
      ? (app.prg.jobs.find((j) => j.name === selectedEntry?.name) ?? null)
      : null,
  );

  // Client mode: lazily-fetched metadata for the selected job.
  let remoteMetadata = $state<{
    name: string;
    comment?: string;
    args: { name: string; type: string; comment?: string }[];
    results: { name: string; type: string; comment?: string }[];
  } | null>(null);

  $effect(() => {
    if (!isClient || !selectedEntry || !app.loadedFile) {
      remoteMetadata = null;
      return;
    }
    const ecu = app.loadedFile.name.replace(/\.(prg|grp)$/i, "");
    const jobName = selectedEntry.name;
    remoteMetadata = null;
    fetchRemoteJobMetadata(ecu, jobName)
      .then((m) => { remoteMetadata = m; })
      .catch(() => { /* metadata unavailable — non-critical */ });
  });

  // Unified accessors for the selected job's metadata.
  const selectedJobName = $derived(selectedEntry?.name ?? null);
  const selectedJobComment = $derived(
    isClient ? (remoteMetadata?.comment ?? selectedEntry?.comment) : selectedPrgJob?.comment,
  );
  const selectedJobArgs = $derived(
    isClient ? (remoteMetadata?.args ?? []) : (selectedPrgJob?.args ?? []),
  );
  const selectedJobResults = $derived(
    isClient ? (remoteMetadata?.results ?? []) : (selectedPrgJob?.results ?? []),
  );

  $effect(() => {
    if (selectedEntry && selectedEntry.name !== selectedName) {
      selectedName = selectedEntry.name;
    }
  });

  let lastSelectionKey: string | null = null;
  $effect(() => {
    const sgbd = app.loadedFile?.relativePath ?? "";
    const job = selectedEntry?.name ?? "";
    const key = `${sgbd}|${job}`;
    if (lastSelectionKey !== null && key !== lastSelectionKey) {
      clearResults();
    }
    lastSelectionKey = key;
  });

  // Pre-compute job-name → bytecode-bounds map (embedded mode only).
  const jobBounds = $derived.by(() => {
    if (!app.prg || !app.prgBuffer) return new Map<string, { start: number; end: number }>();
    const sorted = [...app.prg.binaryJobs].sort((a, b) => a.offset - b.offset);
    const ends = new Map<string, { start: number; end: number }>();
    for (let i = 0; i < sorted.length; i++) {
      const end = i + 1 < sorted.length ? sorted[i + 1].offset : app.prgBuffer.length;
      ends.set(sorted[i].name, { start: sorted[i].offset, end });
    }
    return ends;
  });

  // Disassembly: local in embedded mode, fetched from server in client mode.
  let remoteDisasmLines = $state<string[]>([]);

  const disasmLines = $derived.by(() => {
    if (!showDisassembly || !selectedEntry) return [];
    if (isClient) return remoteDisasmLines;
    if (!selectedPrgJob || !app.prgBuffer) return [];
    const bounds = jobBounds.get(selectedPrgJob.name);
    if (!bounds) return ["(no bytecode in this job)"];
    const instr = disassembleJob(app.prgBuffer, bounds.start, { endOffset: bounds.end });
    return instr.map((i) => {
      const addr = i.offset.toString(16).toUpperCase().padStart(8, "0");
      return `${addr}: ${formatInstruction(i, { color: false })}`;
    });
  });

  function toggleDisassembly(): void {
    showDisassembly = !showDisassembly;
    if (showDisassembly && isClient && selectedEntry && app.loadedFile) {
      remoteDisasmLines = [];
      const ecu = app.loadedFile.name.replace(/\.(prg|grp)$/i, "");
      fetchRemoteDisassembly(ecu, selectedEntry.name)
        .then((lines) => { remoteDisasmLines = lines; })
        .catch(() => { remoteDisasmLines = ["(disassembly unavailable)"]; });
    }
  }

  function onRunClick(): void {
    if (!selectedEntry) return;
    if (selectedJobArgs.length > 0) {
      showRunDialog = true;
      return;
    }
    void runJob(selectedEntry.name, []);
  }

  async function onDialogRun(params: (string | Uint8Array)[]): Promise<void> {
    if (!selectedEntry) return;
    showRunDialog = false;
    await runJob(selectedEntry.name, params);
  }

  const canRun = $derived(
    !!selectedEntry && runtime.phase === "connected" && !runtime.isRunning,
  );

  const hasJobs = $derived(allJobs.length > 0);

  const dialogJob = $derived(selectedPrgJob ?? (remoteMetadata ? {
    name: remoteMetadata.name,
    offset: 0,
    argCount: remoteMetadata.args.length,
    resultCount: remoteMetadata.results.length,
    comment: remoteMetadata.comment,
    args: remoteMetadata.args,
    results: remoteMetadata.results,
  } : null));
</script>

<div class="flex h-full min-h-0 flex-col">
  {#if !hasJobs}
    <div class="flex flex-1 items-center justify-center text-sm text-faint">
      {#if isClient && !app.loadedFile}
        Pick an SGBD from the sidebar.
      {:else if isClient}
        Loading jobs…
      {:else}
        No SGBD loaded — pick a file from the sidebar.
      {/if}
    </div>
  {:else}
    <!-- Top bar: filter + count. Connect/disconnect lives in the App
         top bar now, so this header just carries the per-job filter. -->
    <header class="flex flex-wrap items-center gap-3 border-b border-divider bg-surface px-4 py-2">
      <input
        type="search"
        placeholder="Filter jobs…"
        class="w-64 rounded border border-divider bg-base px-2 py-1 text-xs text-foreground focus:border-accent focus:outline-none"
        bind:value={searchQuery}
      />
      <span class="text-xs text-faint">{filteredJobs.length} / {allJobs.length}</span>
    </header>

    {#if !isClient && app.config.interface === "webserial" && !isWebSerialSupported()}
      <div class="border-b border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs text-amber-700 dark:text-amber-300">
        <code>navigator.serial</code> isn't available. Use Chrome, Edge,
        Opera, or Brave on desktop — or switch to Gateway in Settings.
      </div>
    {/if}

    <!-- Main split: jobs list + details / disasm / results -->
    <div class="grid min-h-0 flex-1 grid-cols-[20rem_1fr]">
      <aside class="flex min-h-0 flex-col border-r border-divider">
        <ul class="flex-1 overflow-auto">
          {#each filteredJobs as job (job.name)}
            <li>
              <button
                type="button"
                class="block w-full truncate border-l-2 px-3 py-1.5 text-left text-sm transition-colors"
                class:border-accent={selectedName === job.name}
                class:bg-elevated={selectedName === job.name}
                class:font-semibold={selectedName === job.name}
                class:text-foreground={selectedName === job.name}
                class:border-transparent={selectedName !== job.name}
                class:text-muted={selectedName !== job.name}
                class:hover:bg-surface={selectedName !== job.name}
                onclick={() => (selectedName = job.name)}
              >
                {job.name}
              </button>
            </li>
          {/each}
        </ul>
      </aside>

      <section class="flex min-h-0 flex-col overflow-auto">
        {#if !selectedEntry}
          <div class="flex flex-1 items-center justify-center text-sm text-faint">
            (select a job)
          </div>
        {:else}
          <div class="flex flex-col gap-2 border-b border-divider px-4 py-3">
            <div class="flex items-baseline justify-between gap-3">
              <div>
                <h2 class="text-base font-bold text-foreground">{selectedEntry.name}</h2>
                {#if selectedJobComment}
                  <p class="text-xs text-faint">{selectedJobComment}</p>
                {/if}
              </div>
              <div class="flex items-center gap-2">
                <button
                  type="button"
                  class="rounded border border-rule px-2 py-1 text-xs text-muted hover:border-accent"
                  onclick={toggleDisassembly}
                >
                  {showDisassembly ? "Hide assembly" : "Decompile job"}
                </button>
                <button
                  type="button"
                  class="rounded bg-accent px-3 py-1 text-xs font-medium text-zinc-950 transition hover:bg-accent-muted hover:text-zinc-100 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={!canRun}
                  onclick={onRunClick}
                >
                  {runtime.isRunning ? "Running…" : "Run"}
                </button>
              </div>
            </div>

            {#if selectedJobArgs.length > 0}
              <p class="text-xs text-faint">
                Takes {selectedJobArgs.length} argument{selectedJobArgs.length === 1 ? "" : "s"} —
                click <span class="text-muted">Run</span> to fill them in.
              </p>
            {/if}
          </div>

          <details class="border-b border-divider px-4 py-2 text-xs">
            <summary class="cursor-pointer select-none text-muted hover:text-foreground">
              Metadata
              <span class="ml-2 text-faint">
                · {selectedJobArgs.length} arg{selectedJobArgs.length === 1 ? "" : "s"}
                · {selectedJobResults.length} result{selectedJobResults.length === 1 ? "" : "s"}
              </span>
            </summary>
            <div class="mt-2 grid gap-3 sm:grid-cols-2">
              <div>
                <h3 class="mb-1 font-bold uppercase tracking-wider text-faint">
                  Args · {selectedJobArgs.length}
                </h3>
                {#if selectedJobArgs.length === 0}
                  <div class="text-faint">(none)</div>
                {:else}
                  <ul class="space-y-0.5">
                    {#each selectedJobArgs as arg (arg.name)}
                      <li class="font-mono text-muted">
                        {arg.name}: <span class="text-faint">{arg.type}</span>
                        {#if arg.comment}<span class="text-faint"> · {arg.comment}</span>{/if}
                      </li>
                    {/each}
                  </ul>
                {/if}
              </div>
              <div>
                <h3 class="mb-1 font-bold uppercase tracking-wider text-faint">
                  Results · {selectedJobResults.length}
                </h3>
                {#if selectedJobResults.length === 0}
                  <div class="text-faint">(none declared)</div>
                {:else}
                  <ul class="space-y-0.5">
                    {#each selectedJobResults as r (r.name)}
                      <li class="font-mono text-muted">
                        {r.name}: <span class="text-faint">{r.type}</span>
                        {#if r.comment}<span class="text-faint"> · {r.comment}</span>{/if}
                      </li>
                    {/each}
                  </ul>
                {/if}
              </div>
            </div>
          </details>

          {#if showDisassembly}
            <div class="flex min-h-0 flex-col border-t border-divider">
              <h3 class="border-b border-divider px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-faint">
                Decompiled
              </h3>
              <pre class="m-0 max-h-[24rem] overflow-auto whitespace-pre px-4 py-2 text-xs leading-snug text-muted">
{disasmLines.length === 0 ? "(empty)" : disasmLines.join("\n")}
              </pre>
            </div>
          {/if}

          <ResultsPanel />
        {/if}
      </section>
    </div>
  {/if}
</div>

<RunJobDialog
  open={showRunDialog}
  job={dialogJob}
  running={runtime.isRunning}
  onRun={onDialogRun}
  onClose={() => (showRunDialog = false)}
/>
