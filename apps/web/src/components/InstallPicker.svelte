<script lang="ts">
  import { onMount } from "svelte";
  import { state as app } from "../lib/app.svelte";
  import {
    isFileSystemAccessSupported,
    loadInstallHandle,
    saveInstallHandle,
    clearInstallHandle,
    queryHandlePermission,
    requestHandlePermission,
  } from "../lib/install-storage";
  import { discoverEdiabasxInstall } from "../lib/sgbd-install";

  const supported = isFileSystemAccessSupported();

  let savedHandle = $state<FileSystemDirectoryHandle | null>(null);
  let restoring = $state(false);

  onMount(async () => {
    if (!supported) return;
    const handle = await loadInstallHandle();
    if (!handle) return;
    const perm = await queryHandlePermission(handle);
    if (perm === "granted") {
      restoring = true;
      try {
        await openHandle(handle, { skipSave: true });
      } catch (err) {
        app.error = err instanceof Error ? err.message : String(err);
      } finally {
        restoring = false;
      }
      return;
    }
    if (perm === "denied") {
      await clearInstallHandle();
      return;
    }
    savedHandle = handle;
  });

  async function openHandle(
    handle: FileSystemDirectoryHandle,
    options: { skipSave?: boolean } = {},
  ): Promise<void> {
    const install = await discoverEdiabasxInstall(handle);
    app.install = install;
    app.view = "browse";
    if (!options.skipSave) {
      await saveInstallHandle(handle);
    }
  }

  async function pickFolder(): Promise<void> {
    app.error = null;
    try {
      const handle = await window.showDirectoryPicker!({ mode: "read" });
      await openHandle(handle);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      app.error = err instanceof Error ? err.message : String(err);
    }
  }

  async function continueLast(): Promise<void> {
    if (!savedHandle) return;
    app.error = null;
    try {
      const perm = await requestHandlePermission(savedHandle);
      if (perm !== "granted") {
        await clearInstallHandle();
        savedHandle = null;
        return;
      }
      await openHandle(savedHandle);
    } catch (err) {
      app.error = err instanceof Error ? err.message : String(err);
    }
  }
</script>

<div class="flex h-full flex-col items-center justify-center gap-8 p-8">
  <div class="max-w-2xl text-center">
    <h1 class="text-4xl font-bold">
      <span class="text-foreground">EDIABAS</span><span class="text-accent">X</span>
    </h1>
    <p class="mt-2 text-muted">
      BMW EDIABAS in your browser. Parse SGBD files, configure interfaces, run jobs
      against a live ECU over Web Serial.
    </p>
    <p class="mt-3 flex items-center justify-center gap-2 text-xs text-faint">
      <a
        href="https://github.com/emdzej/ediabasx/releases/tag/{__APP_VERSION__}"
        target="_blank"
        rel="noopener noreferrer"
        class="transition hover:text-foreground"
        title="View release notes on GitHub"
      >
        {__APP_VERSION__}
      </a>
      <a
        href="https://github.com/emdzej/ediabasx"
        target="_blank"
        rel="noopener noreferrer"
        class="transition hover:text-foreground"
        title="ediabasx on GitHub"
        aria-label="ediabasx on GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="14"
          height="14"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
      </a>
    </p>
  </div>

  {#if !supported}
    <div
      class="max-w-md rounded border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-600/40 dark:bg-red-950/40 dark:text-red-300"
    >
      <strong class="font-semibold">Unsupported browser.</strong>
      EDIABASX needs the File System Access API and Web Serial — both
      Chromium-only. Use Chrome, Edge, Opera, or Brave on desktop.
    </div>
  {:else if restoring}
    <p class="text-sm text-faint">Restoring last folder…</p>
  {:else if savedHandle}
    <div class="flex flex-col items-center gap-3">
      <button
        class="rounded bg-accent px-6 py-3 font-medium text-zinc-950 transition hover:bg-accent-muted"
        onclick={continueLast}
      >
        Continue with {savedHandle.name}
      </button>
      <button
        class="text-xs text-faint underline-offset-2 hover:text-muted hover:underline"
        onclick={pickFolder}
      >
        Pick a different folder
      </button>
    </div>
  {:else}
    <div class="flex max-w-xl flex-col items-stretch gap-4">
      <button
        class="flex flex-col items-center gap-2 rounded border border-rule bg-surface p-4 text-center transition hover:border-accent hover:bg-elevated"
        onclick={pickFolder}
      >
        <span class="font-semibold text-foreground">
          Pick BMW Standard Tools install root
        </span>
        <span class="text-xs text-faint">
          Point us at the folder containing
          <code class="text-muted">EDIABAS/</code>. We'll surface every
          <code class="text-muted">.prg</code> /
          <code class="text-muted">.grp</code> in
          <code class="text-muted">EDIABAS/Ecu/</code> so you can pick which
          SGBD to load. EDIABASX remembers it for next time.
        </span>
      </button>
      <p class="text-center text-xs text-faint">
        Picking <code class="text-muted">EDIABAS/Ecu</code> directly also works
        as a fallback if your install layout differs.
      </p>
      <p class="text-center text-xs text-faint">
        All reads are local. Nothing leaves your machine.
      </p>
    </div>
  {/if}

  {#if app.error}
    <div
      class="max-w-md rounded border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-600/40 dark:bg-red-950/40 dark:text-red-300"
    >
      {app.error}
    </div>
  {/if}
</div>
