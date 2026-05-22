<script lang="ts">
  import {
    disassembleJob,
    formatInstruction,
    type PrgJob,
  } from "@emdzej/ediabasx-best-parser";
  import { state as app } from "../lib/app.svelte";
  import { runtime, runJob, isWebSerialSupported } from "../lib/runtime.svelte";
  import ResultsPanel from "../components/ResultsPanel.svelte";

  // Local UI state — disassembly toggle, search filter, args input.
  let searchQuery = $state("");
  let showDisassembly = $state(false);
  let argsInput = $state("");

  // Pre-compute job-name → bytecode-bounds map so disassembleJob can cap
  // each job at its successor's offset (multi-eoj jobs decode in full,
  // same fix the CLI uses).
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

  const filteredJobs = $derived.by(() => {
    if (!app.prg) return [];
    const q = searchQuery.trim().toLowerCase();
    if (!q) return app.prg.jobs;
    return app.prg.jobs.filter((j) => j.name.toLowerCase().includes(q));
  });

  let selectedName = $state<string | null>(null);
  const selectedJob = $derived<PrgJob | null>(
    filteredJobs.find((j) => j.name === selectedName) ?? filteredJobs[0] ?? null
  );

  $effect(() => {
    if (selectedJob && selectedJob.name !== selectedName) {
      selectedName = selectedJob.name;
    }
    // Clear argsInput when the selected job changes — the previous job's
    // args probably don't apply to the new one.
    void selectedJob?.name;
    argsInput = "";
  });

  // Compute disassembly only when the panel is open, so navigating jobs
  // with the panel collapsed stays snappy.
  const disasmLines = $derived.by(() => {
    if (!showDisassembly || !selectedJob || !app.prgBuffer) return [];
    const bounds = jobBounds.get(selectedJob.name);
    if (!bounds) return ["(no bytecode in this job)"];
    const instr = disassembleJob(app.prgBuffer, bounds.start, { endOffset: bounds.end });
    return instr.map((i) => {
      const addr = i.offset.toString(16).toUpperCase().padStart(8, "0");
      return `${addr}: ${formatInstruction(i, { color: false })}`;
    });
  });

  function parseArgs(value: string): string[] {
    const trimmed = value.trim();
    if (!trimmed) return [];
    return trimmed.includes(",")
      ? trimmed.split(",").map((s) => s.trim()).filter(Boolean)
      : trimmed.split(/\s+/).map((s) => s.trim()).filter(Boolean);
  }

  async function onRunClick(): Promise<void> {
    if (!selectedJob) return;
    const params = parseArgs(argsInput);
    if (params.length < selectedJob.args.length) {
      runtime.errorMessage = `Job ${selectedJob.name} expects ${selectedJob.args.length} argument(s); got ${params.length}.`;
      return;
    }
    await runJob(selectedJob.name, params);
  }

  function onArgsKeydown(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      event.preventDefault();
      void onRunClick();
    }
  }

  const canRun = $derived(
    !!selectedJob && runtime.phase === "connected" && !runtime.isRunning
  );

</script>

<div class="flex h-full min-h-0 flex-col">
  {#if !app.prg}
    <div class="flex flex-1 items-center justify-center text-sm text-faint">
      No SGBD loaded — pick a file from the sidebar.
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
      <span class="text-xs text-faint">{filteredJobs.length} / {app.prg.jobs.length}</span>
    </header>

    {#if app.config.interface === "webserial" && !isWebSerialSupported()}
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
                class="block w-full truncate px-3 py-1.5 text-left text-sm transition-colors"
                class:bg-accent-muted={selectedName === job.name}
                class:text-foreground={selectedName === job.name}
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
        {#if !selectedJob}
          <div class="flex flex-1 items-center justify-center text-sm text-faint">
            (select a job)
          </div>
        {:else}
          <!-- Job header + run controls -->
          <div class="flex flex-col gap-2 border-b border-divider px-4 py-3">
            <div class="flex items-baseline justify-between gap-3">
              <div>
                <h2 class="text-base font-bold text-foreground">{selectedJob.name}</h2>
                {#if selectedJob.comment}
                  <p class="text-xs text-faint">{selectedJob.comment}</p>
                {/if}
              </div>
              <div class="flex items-center gap-2">
                <button
                  type="button"
                  class="rounded border border-rule px-2 py-1 text-xs text-muted hover:border-accent"
                  onclick={() => (showDisassembly = !showDisassembly)}
                >
                  {showDisassembly ? "Hide" : "Show"} disassembly
                </button>
                <button
                  type="button"
                  class="rounded bg-accent-muted px-3 py-1 text-xs font-medium text-foreground hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={!canRun}
                  onclick={onRunClick}
                >
                  {runtime.isRunning ? "Running…" : "Run"}
                </button>
              </div>
            </div>

            {#if selectedJob.args.length > 0}
              <label class="flex flex-col gap-1 text-xs text-muted">
                Args ({selectedJob.args.map((a) => a.name).join(", ")})
                <input
                  type="text"
                  placeholder="space- or comma-separated"
                  class="rounded border border-divider bg-surface px-2 py-1 text-xs font-mono text-foreground focus:border-accent focus:outline-none"
                  bind:value={argsInput}
                  onkeydown={onArgsKeydown}
                />
              </label>
            {/if}
          </div>

          <!--
            Args / Results metadata — collapsed by default. Jobs like FS_LESEN
            declare 48 result names, which pushes the actual run output off
            screen if shown unconditionally. Click the summary to expand.
          -->
          <details class="border-b border-divider px-4 py-2 text-xs">
            <summary class="cursor-pointer select-none text-muted hover:text-foreground">
              Metadata
              <span class="ml-2 text-faint">
                · {selectedJob.args.length} arg{selectedJob.args.length === 1 ? "" : "s"}
                · {selectedJob.results.length} result{selectedJob.results.length === 1 ? "" : "s"}
              </span>
            </summary>
            <div class="mt-2 grid gap-3 sm:grid-cols-2">
              <div>
                <h3 class="mb-1 font-bold uppercase tracking-wider text-faint">
                  Args · {selectedJob.args.length}
                </h3>
                {#if selectedJob.args.length === 0}
                  <div class="text-faint">(none)</div>
                {:else}
                  <ul class="space-y-0.5">
                    {#each selectedJob.args as arg (arg.name)}
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
                  Results · {selectedJob.results.length}
                </h3>
                {#if selectedJob.results.length === 0}
                  <div class="text-faint">(none declared)</div>
                {:else}
                  <ul class="space-y-0.5">
                    {#each selectedJob.results as r (r.name)}
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

          <!-- Disassembly (collapsible) -->
          {#if showDisassembly}
            <div class="flex min-h-0 flex-col border-t border-divider">
              <h3 class="border-b border-divider px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-faint">
                Bytecode
              </h3>
              <pre class="m-0 max-h-[24rem] overflow-auto whitespace-pre px-4 py-2 text-xs leading-snug text-muted">
{disasmLines.length === 0 ? "(empty)" : disasmLines.join("\n")}
              </pre>
            </div>
          {/if}

          <!-- Results from the most recent run -->
          <ResultsPanel />
        {/if}
      </section>
    </div>
  {/if}
</div>
