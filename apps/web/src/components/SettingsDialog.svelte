<script lang="ts">
  import { state as app } from "../lib/app.svelte";
  import {
    LOG_LEVELS,
    resetConfig,
    saveConfig,
    type LogLevel,
  } from "../lib/config";
  import {
    clearInstallHandle,
    saveInstallHandle,
  } from "../lib/install-storage";
  import { discoverEdiabasxInstall } from "../lib/sgbd-install";
  import { settings, setTheme, type ThemeChoice } from "../lib/settings.svelte";
  import { applyLoggerConfig } from "../lib/logger-wiring";
  import { LOG_CATEGORIES as EDIABASX_LOG_CATEGORIES } from "@emdzej/ediabasx-ediabas";
  import { InterfaceConfigPanel } from "@emdzej/ediabasx-web-ui";

  /**
   * Persist on every config mutation. Writes are tiny; eager flushing
   * means reload always round-trips what was last on screen.
   */
  $effect(() => {
    saveConfig(app.config);
  });

  /**
   * Re-apply the bimmerz-logger central config whenever the user
   * tweaks Settings. Existing logger handles are proxies, so changes
   * here take effect immediately on the next log call across the
   * whole app — no component refresh needed.
   */
  $effect(() => {
    applyLoggerConfig(app.config.logging);
  });

  /**
   * Categories surfaced as per-row controls. Sourced from each library
   * package's `LOG_CATEGORIES` export — apps don't hardcode the list,
   * so adding a new category in ediabasx (or, later, inpax / ncsx)
   * automatically shows up here on the next install. When inpax-web
   * ports its own settings, it'll spread its own catalogue:
   *
   *   const KNOWN_CATEGORIES = [...EDIABASX_LOG_CATEGORIES, ...INPAX_LOG_CATEGORIES];
   */
  const KNOWN_CATEGORIES = EDIABASX_LOG_CATEGORIES;

  function setLogLevel(value: LogLevel): void {
    app.config.logging = { ...(app.config.logging ?? {}), level: value };
  }

  function setCategoryLevel(name: string, value: LogLevel | ""): void {
    const next = { ...(app.config.logging?.categories ?? {}) };
    if (value === "") {
      delete next[name];
    } else {
      next[name] = value;
    }
    app.config.logging = {
      ...(app.config.logging ?? {}),
      categories: Object.keys(next).length > 0 ? next : undefined,
    };
  }

  function close(): void {
    app.showSettings = false;
  }

  function reset(): void {
    const fresh = resetConfig();
    Object.assign(app.config, fresh);
    if (fresh.serial) {
      app.config.serial = { ...(app.config.serial ?? {}), ...fresh.serial };
    }
    if (fresh.gateway) {
      app.config.gateway = { ...(app.config.gateway ?? {}), ...fresh.gateway };
    }
  }

  /**
   * Drop every install-derived piece of state when the user changes or
   * forgets the picked folder. Mirrors ncsx-web's same-named helper —
   * keeps the app in a clean state regardless of where the user was.
   */
  function clearDerivedInstallState(): void {
    app.prg = null;
    app.prgBuffer = null;
    app.loadedFile = null;
    app.loadError = null;
  }

  async function forgetInstall(): Promise<void> {
    await clearInstallHandle();
    app.install = null;
    clearDerivedInstallState();
    app.view = "picker";
    app.showSettings = false;
  }

  async function changeInstall(): Promise<void> {
    try {
      const handle = await window.showDirectoryPicker!({ mode: "read" });
      const install = await discoverEdiabasxInstall(handle);
      app.install = install;
      clearDerivedInstallState();
      await saveInstallHandle(handle);
      app.view = "browse";
      app.showSettings = false;
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      app.error = err instanceof Error ? err.message : String(err);
    }
  }
</script>

{#if app.showSettings}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    onclick={close}
    onkeydown={(e) => e.key === "Escape" && close()}
  >
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div
      class="flex max-h-[90vh] w-full max-w-xl flex-col rounded border border-rule bg-surface shadow-2xl"
      role="document"
      tabindex="-1"
      onclick={(e) => e.stopPropagation()}
      onkeydown={(e) => e.stopPropagation()}
    >
      <header class="flex items-baseline justify-between gap-4 border-b border-divider px-4 py-3">
        <h2 class="text-sm font-bold uppercase tracking-wider text-muted">Settings</h2>
        <button
          class="text-xs text-faint underline-offset-2 hover:text-muted hover:underline"
          onclick={close}
        >
          close
        </button>
      </header>

      <section class="flex-1 space-y-4 overflow-y-auto px-4 py-4 text-sm text-foreground">
        <!-- Install root — surfaces the picked BMW Standard Tools
             folder + lets the user swap it (e.g. moved the install) or
             forget the saved handle entirely (handy when the saved
             folder is gone). Same shape as ncsx-web's Settings panel. -->
        <div>
          <span class="mb-1 block text-xs font-semibold uppercase tracking-wider text-faint">
            Install
          </span>
          <div class="flex items-center justify-between gap-2 rounded border border-divider bg-base px-3 py-2">
            <span class="truncate text-sm">
              {#if app.install}
                <span class="font-mono text-foreground">{app.install.root.name}</span>
                <span class="ml-2 text-xs text-faint">
                  · {app.install.sgbds.length} SGBDs
                  {#if app.install.layout === "ecu-direct"}
                    · direct
                  {/if}
                </span>
              {:else}
                <span class="italic text-faint">(no install picked)</span>
              {/if}
            </span>
            <div class="flex shrink-0 items-center gap-3">
              <button
                class="rounded border border-rule px-2 py-0.5 text-xs text-muted hover:bg-elevated hover:text-foreground"
                onclick={changeInstall}
                title="Pick a different install folder (replaces the saved one)"
              >
                Change folder…
              </button>
              <button
                class="text-xs text-faint underline-offset-2 hover:text-muted hover:underline disabled:cursor-not-allowed disabled:opacity-50"
                onclick={forgetInstall}
                disabled={!app.install}
                title="Drop the remembered install handle and return to the picker"
              >
                Forget
              </button>
            </div>
          </div>
        </div>

        <!-- Theme -->
        <div>
          <span class="mb-1 block text-xs font-semibold uppercase tracking-wider text-faint">
            Theme
          </span>
          <!--
            Three-way picker rendered as a segmented control. "System"
            (default) tracks `prefers-color-scheme`; "Light" / "Dark"
            pin the page regardless of the OS. Choice persists via the
            `settings` module; `applyTheme()` flips the `dark` class
            on <html> on every change.
          -->
          <div class="flex gap-0 overflow-hidden rounded border border-rule">
            {#each ["light", "dark", "system"] as choice (choice)}
              {@const active = settings.theme === choice}
              <button
                type="button"
                class="flex-1 px-3 py-1 text-xs transition"
                class:bg-accent={active}
                class:text-zinc-950={active}
                class:font-semibold={active}
                class:text-muted={!active}
                class:hover:bg-elevated={!active}
                onclick={() => setTheme(choice as ThemeChoice)}
              >
                {choice[0]!.toUpperCase() + choice.slice(1)}
              </button>
            {/each}
          </div>
        </div>

        <!-- Interface selector + per-interface fieldsets (shared web-ui). -->
        <InterfaceConfigPanel bind:config={app.config} />

        <!-- Logging — bimmerz-logger central config -->
        <fieldset class="space-y-2 rounded border border-divider bg-base p-3">
          <legend class="px-1 text-xs font-semibold uppercase tracking-wider text-faint">
            Logging
          </legend>
          <label class="text-xs text-muted">
            Default level
            <select
              class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
              value={app.config.logging?.level ?? "info"}
              onchange={(e) => setLogLevel((e.currentTarget as HTMLSelectElement).value as LogLevel)}
            >
              {#each LOG_LEVELS as lvl (lvl)}
                <option value={lvl}>{lvl}</option>
              {/each}
            </select>
            <span class="mt-1 block text-faint">
              Applies to every category without a specific rule below.
            </span>
          </label>

          <div class="pt-1">
            <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-faint">
              Category overrides
            </p>
            <p class="mb-2 text-xs text-faint">
              Hierarchical — a rule for <code>EDIABASX</code> covers every
              <code>EDIABASX.*</code> child unless something more specific matches.
            </p>
            <ul class="space-y-1.5">
              {#each KNOWN_CATEGORIES as cat (cat.name)}
                {@const current = app.config.logging?.categories?.[cat.name] ?? ""}
                <li class="grid grid-cols-[1fr_8rem] items-baseline gap-2">
                  <div class="min-w-0">
                    <code class="text-xs text-foreground">{cat.name}</code>
                    <p class="text-xs text-faint">{cat.hint}</p>
                  </div>
                  <select
                    class="rounded border border-rule bg-surface px-2 py-1 text-xs text-foreground focus:border-accent focus:outline-none"
                    value={current}
                    onchange={(e) =>
                      setCategoryLevel(
                        cat.name,
                        (e.currentTarget as HTMLSelectElement).value as LogLevel | "",
                      )}
                  >
                    <option value="">(inherit)</option>
                    {#each LOG_LEVELS as lvl (lvl)}
                      <option value={lvl}>{lvl}</option>
                    {/each}
                  </select>
                </li>
              {/each}
            </ul>
          </div>
        </fieldset>
      </section>

      <footer class="flex items-center justify-between gap-2 border-t border-divider bg-elevated/50 px-4 py-2">
        <button
          class="rounded border border-rule px-2 py-0.5 text-xs text-muted hover:bg-elevated hover:text-foreground"
          onclick={reset}
          title="Reset interface config to defaults (does not affect picked install)"
        >
          Reset to defaults
        </button>
        <button
          class="rounded bg-accent px-3 py-1 text-sm font-medium text-zinc-950 hover:bg-accent-muted"
          onclick={close}
        >
          Done
        </button>
      </footer>
    </div>
  </div>
{/if}
