<script lang="ts">
  import {
    disassembleJob,
    formatInstruction,
    type PrgJob,
  } from "@emdzej/ediabasx-best-parser";
  import { state as app } from "../lib/app.svelte";
  import {
    runtime,
    connect,
    disconnect,
    runJob,
    isWebSerialSupported,
  } from "../lib/runtime.svelte";
  import StatusPill from "../components/StatusPill.svelte";
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

  const interfaceLabel = $derived.by(() => {
    if (app.config.interface === "simulation") return "Simulation";
    if (app.config.interface === "webserial") return "Web Serial";
    return app.config.interface;
  });
</script>

<div class="flex h-full min-h-0 flex-col">
  {#if !app.prg}
    <div class="flex flex-1 items-center justify-center text-sm text-zinc-500">
      No SGBD loaded — pick a file under the <strong class="text-zinc-300">Files</strong> tab.
    </div>
  {:else}
    <!-- Top bar: search + connection controls + status pill -->
    <header class="flex flex-wrap items-center gap-3 border-b border-zinc-800 px-4 py-2">
      <input
        type="search"
        placeholder="Filter jobs…"
        class="w-64 rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-200 focus:border-accent focus:outline-none"
        bind:value={searchQuery}
      />
      <span class="text-xs text-zinc-500">{filteredJobs.length} / {app.prg.jobs.length}</span>
      <div class="ml-auto flex items-center gap-2">
        <StatusPill />
        {#if runtime.phase === "connected"}
          <button
            type="button"
            class="rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-300 hover:border-zinc-500"
            onclick={disconnect}
          >
            Disconnect
          </button>
        {:else}
          <button
            type="button"
            class="rounded bg-accent-muted px-3 py-1 text-xs font-medium text-zinc-100 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
            disabled={runtime.phase === "connecting" ||
              (app.config.interface === "webserial" && !isWebSerialSupported())}
            onclick={connect}
          >
            Connect · {interfaceLabel}
          </button>
        {/if}
      </div>
    </header>

    {#if app.config.interface === "webserial" && !isWebSerialSupported()}
      <div class="border-b border-amber-900 bg-amber-950 px-4 py-2 text-xs text-amber-200">
        <code>navigator.serial</code> isn't available. Use Chrome, Edge or Opera on desktop, or switch to Simulation under <strong>2. Configure</strong>.
      </div>
    {/if}

    <!-- Main split: jobs list + details / disasm / results -->
    <div class="grid min-h-0 flex-1 grid-cols-[20rem_1fr]">
      <aside class="flex min-h-0 flex-col border-r border-zinc-800">
        <ul class="flex-1 overflow-auto">
          {#each filteredJobs as job (job.name)}
            <li>
              <button
                type="button"
                class="block w-full truncate px-3 py-1.5 text-left text-sm transition-colors"
                class:bg-accent-muted={selectedName === job.name}
                class:text-zinc-100={selectedName === job.name}
                class:text-zinc-300={selectedName !== job.name}
                class:hover:bg-zinc-900={selectedName !== job.name}
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
          <div class="flex flex-1 items-center justify-center text-sm text-zinc-500">
            (select a job)
          </div>
        {:else}
          <!-- Job header + run controls -->
          <div class="flex flex-col gap-2 border-b border-zinc-800 px-4 py-3">
            <div class="flex items-baseline justify-between gap-3">
              <div>
                <h2 class="text-base font-bold text-zinc-100">{selectedJob.name}</h2>
                {#if selectedJob.comment}
                  <p class="text-xs text-zinc-500">{selectedJob.comment}</p>
                {/if}
              </div>
              <div class="flex items-center gap-2">
                <button
                  type="button"
                  class="rounded border border-zinc-700 px-2 py-1 text-xs text-zinc-300 hover:border-zinc-500"
                  onclick={() => (showDisassembly = !showDisassembly)}
                >
                  {showDisassembly ? "Hide" : "Show"} disassembly
                </button>
                <button
                  type="button"
                  class="rounded bg-accent-muted px-3 py-1 text-xs font-medium text-zinc-100 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={!canRun}
                  onclick={onRunClick}
                >
                  {runtime.isRunning ? "Running…" : "Run"}
                </button>
              </div>
            </div>

            {#if selectedJob.args.length > 0}
              <label class="flex flex-col gap-1 text-xs text-zinc-400">
                Args ({selectedJob.args.map((a) => a.name).join(", ")})
                <input
                  type="text"
                  placeholder="space- or comma-separated"
                  class="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs font-mono text-zinc-200 focus:border-accent focus:outline-none"
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
          <details class="border-b border-zinc-800 px-4 py-2 text-xs">
            <summary class="cursor-pointer select-none text-zinc-400 hover:text-zinc-200">
              Metadata
              <span class="ml-2 text-zinc-500">
                · {selectedJob.args.length} arg{selectedJob.args.length === 1 ? "" : "s"}
                · {selectedJob.results.length} result{selectedJob.results.length === 1 ? "" : "s"}
              </span>
            </summary>
            <div class="mt-2 grid gap-3 sm:grid-cols-2">
              <div>
                <h3 class="mb-1 font-bold uppercase tracking-wider text-zinc-500">
                  Args · {selectedJob.args.length}
                </h3>
                {#if selectedJob.args.length === 0}
                  <div class="text-zinc-600">(none)</div>
                {:else}
                  <ul class="space-y-0.5">
                    {#each selectedJob.args as arg (arg.name)}
                      <li class="font-mono text-zinc-300">
                        {arg.name}: <span class="text-zinc-500">{arg.type}</span>
                        {#if arg.comment}<span class="text-zinc-600"> · {arg.comment}</span>{/if}
                      </li>
                    {/each}
                  </ul>
                {/if}
              </div>
              <div>
                <h3 class="mb-1 font-bold uppercase tracking-wider text-zinc-500">
                  Results · {selectedJob.results.length}
                </h3>
                {#if selectedJob.results.length === 0}
                  <div class="text-zinc-600">(none declared)</div>
                {:else}
                  <ul class="space-y-0.5">
                    {#each selectedJob.results as r (r.name)}
                      <li class="font-mono text-zinc-300">
                        {r.name}: <span class="text-zinc-500">{r.type}</span>
                        {#if r.comment}<span class="text-zinc-600"> · {r.comment}</span>{/if}
                      </li>
                    {/each}
                  </ul>
                {/if}
              </div>
            </div>
          </details>

          <!-- Disassembly (collapsible) -->
          {#if showDisassembly}
            <div class="flex min-h-0 flex-col border-t border-zinc-800">
              <h3 class="border-b border-zinc-800 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-zinc-500">
                Bytecode
              </h3>
              <pre class="m-0 max-h-[24rem] overflow-auto whitespace-pre px-4 py-2 text-xs leading-snug text-zinc-300">
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
