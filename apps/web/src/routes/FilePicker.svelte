<script lang="ts">
  import { state as app, setPickedFiles, loadSgbd } from "../lib/app.svelte";
  import { listPrgFiles, type PickedFile } from "../lib/files";

  let folderInput = $state<HTMLInputElement | undefined>(undefined);
  let fileInput = $state<HTMLInputElement | undefined>(undefined);
  let isDragging = $state(false);

  function onFolderChange(event: Event): void {
    const input = event.currentTarget as HTMLInputElement;
    if (!input.files) return;
    const picked = listPrgFiles(input.files);
    setPickedFiles(picked);
  }

  function onFileChange(event: Event): void {
    const input = event.currentTarget as HTMLInputElement;
    if (!input.files) return;
    const picked = listPrgFiles(input.files);
    setPickedFiles(picked);
    if (picked.length === 1) {
      // Single-file pick: load it directly.
      void loadSgbd(picked[0]);
    }
  }

  function onDragOver(event: DragEvent): void {
    event.preventDefault();
    isDragging = true;
  }

  function onDragLeave(): void {
    isDragging = false;
  }

  function onDrop(event: DragEvent): void {
    event.preventDefault();
    isDragging = false;
    const files = event.dataTransfer?.files;
    if (!files) return;
    const picked = listPrgFiles(files);
    setPickedFiles(picked);
    if (picked.length === 1) {
      void loadSgbd(picked[0]);
    }
  }

  function pick(file: PickedFile): void {
    void loadSgbd(file);
  }
</script>

<div class="flex h-full flex-col gap-4 p-6">
  <section class="flex flex-col gap-3">
    <h2 class="text-sm font-bold uppercase tracking-wider text-zinc-400">Select SGBD files</h2>
    <p class="max-w-2xl text-sm text-zinc-400">
      Pick an ECU folder to surface every <code class="text-zinc-300">.prg</code> /
      <code class="text-zinc-300">.grp</code> inside it (recurses one level deep
      via <code class="text-zinc-300">webkitdirectory</code>), or open a single file
      directly. Everything stays in the browser — no uploads.
    </p>

    <div class="flex gap-3">
      <button
        type="button"
        class="rounded border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm hover:border-accent hover:bg-zinc-800"
        onclick={() => folderInput?.click()}
      >
        Pick folder…
      </button>
      <button
        type="button"
        class="rounded border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm hover:border-accent hover:bg-zinc-800"
        onclick={() => fileInput?.click()}
      >
        Pick a single file…
      </button>
    </div>

    <!--
      `webkitdirectory` is a vendor-prefixed attribute Svelte's typings
      reject as a string. Spread an `unknown`-typed bag so the boolean
      attribute lands on the DOM input where the browser picks it up.
    -->
    <input
      bind:this={folderInput}
      type="file"
      class="hidden"
      multiple
      onchange={onFolderChange}
      {...{ webkitdirectory: true } as Record<string, unknown>}
    />
    <input
      bind:this={fileInput}
      type="file"
      class="hidden"
      accept=".prg,.grp"
      onchange={onFileChange}
    />
  </section>

  <section
    aria-label="Drop zone"
    class="flex flex-1 flex-col rounded border border-dashed transition-colors"
    class:border-accent={isDragging}
    class:border-zinc-800={!isDragging}
    ondragover={onDragOver}
    ondragleave={onDragLeave}
    ondrop={onDrop}
  >
    {#if app.loadError}
      <div class="m-4 rounded border border-red-700 bg-red-950 p-3 text-sm text-red-200">
        <div class="font-bold">Failed to parse:</div>
        <div class="mt-1 font-mono text-xs">{app.loadError}</div>
      </div>
    {/if}

    {#if app.pickedFiles.length === 0}
      <div class="flex flex-1 items-center justify-center text-sm text-zinc-500">
        Drag a folder or a <code class="mx-1 text-zinc-400">.prg</code> /
        <code class="mx-1 text-zinc-400">.grp</code> file here.
      </div>
    {:else}
      <div class="flex flex-1 flex-col overflow-hidden">
        <div class="border-b border-zinc-800 px-4 py-2 text-xs text-zinc-500">
          {app.pickedFiles.length} file{app.pickedFiles.length === 1 ? "" : "s"} found
        </div>
        <ul class="flex-1 overflow-auto">
          {#each app.pickedFiles as file (file.relativePath)}
            <li>
              <button
                type="button"
                class="flex w-full items-center gap-3 border-b border-zinc-900 px-4 py-2 text-left text-sm hover:bg-zinc-900"
                class:bg-zinc-900={app.loadedFile?.relativePath === file.relativePath}
                onclick={() => pick(file)}
              >
                <span class="text-xs uppercase text-accent">{file.ext}</span>
                <span class="flex-1 truncate text-zinc-200">{file.relativePath}</span>
                <span class="text-xs text-zinc-500">{(file.file.size / 1024).toFixed(1)} KB</span>
              </button>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </section>
</div>
