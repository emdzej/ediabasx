<script lang="ts">
  import { state as app } from "./lib/app.svelte";
  import InstallPicker from "./components/InstallPicker.svelte";
  import SgbdSidebar from "./components/SgbdSidebar.svelte";
  import Jobs from "./routes/Jobs.svelte";
  import AboutDialog from "./components/AboutDialog.svelte";
</script>

<div class="flex h-full flex-col">
  <header class="border-b border-divider bg-surface px-4 py-3">
    <div class="flex items-center gap-3">
      <!--
        Brand. `EDIABAS` in the primary text colour, `X` in the cyan
        accent so the wordmark reads as a single uppercase token with
        the X visually separated. Mirrors the inpax/ncsx pattern where
        the suffix carries the distinguishing colour.
      -->
      <span class="text-sm font-bold tracking-wide">
        <span class="text-foreground">EDIABAS</span><span class="text-accent">X</span>
      </span>
      <!--
        Version surfaced from package.json via Vite `define`. Click
        opens the About dialog (version + GitHub link + report-issue
        link). Faint styling keeps it as metadata, not chrome.
      -->
      <button
        class="text-xs text-faint underline-offset-2 transition hover:text-foreground hover:underline"
        onclick={() => (app.showAbout = true)}
        title="About EDIABASX — version, source, report an issue"
      >
        {__APP_VERSION__}
      </button>
      <!--
        GitHub repo link. Inline 16×16 octocat (GitHub's official
        public-domain mark) so the icon picks up `currentColor` and
        renders before any network fetch.
      -->
      <a
        href="https://github.com/emdzej/ediabasx"
        target="_blank"
        rel="noopener noreferrer"
        class="text-faint transition hover:text-foreground"
        title="ediabasx on GitHub"
        aria-label="ediabasx on GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
      </a>
      <span class="flex-1"></span>
      {#if app.loadedFile}
        <span class="text-xs text-faint">
          <span class="text-muted">{app.loadedFile.relativePath}</span>
          · {app.prg?.jobs.length ?? 0} jobs · {app.prg?.tables.length ?? 0} tables
        </span>
      {/if}
    </div>
  </header>

  <main class="min-h-0 flex-1 overflow-hidden">
    {#if app.view === "picker"}
      <InstallPicker />
    {:else if app.view === "browse"}
      <div class="flex h-full">
        <SgbdSidebar />
        <section class="min-w-0 flex-1 overflow-hidden bg-base">
          {#if app.prg}
            <Jobs />
          {:else if app.loadError}
            <div class="m-6 max-w-2xl rounded border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-300">
              <div class="font-bold">Failed to parse:</div>
              <div class="mt-1 font-mono text-xs">{app.loadError}</div>
            </div>
          {:else}
            <div class="flex h-full items-center justify-center text-sm text-faint">
              Pick a <code class="mx-1 text-muted">.prg</code> /
              <code class="mx-1 text-muted">.grp</code> from the sidebar.
            </div>
          {/if}
        </section>
      </div>
    {/if}
  </main>
</div>

<AboutDialog />
