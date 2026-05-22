<script lang="ts">
  import { state as app } from "../lib/app.svelte";
  import { resetConfig, saveConfig, type InterfaceType } from "../lib/config";
  import {
    clearInstallHandle,
    saveInstallHandle,
  } from "../lib/install-storage";
  import { discoverEdiabasxInstall } from "../lib/sgbd-install";
  import { settings, setTheme, type ThemeChoice } from "../lib/settings.svelte";

  /**
   * Persist on every config mutation. Writes are tiny; eager flushing
   * means reload always round-trips what was last on screen.
   */
  $effect(() => {
    saveConfig(app.config);
  });

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

  function setInterface(value: InterfaceType): void {
    app.config = { ...app.config, interface: value };
  }

  function isWebSerialSupported(): boolean {
    return typeof navigator !== "undefined" && "serial" in navigator;
  }

  function isSecureContext(): boolean {
    return typeof window !== "undefined" && window.isSecureContext === true;
  }

  const webSerialAvailable = $derived(isWebSerialSupported());
  const secure = $derived(isSecureContext());

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

        <!-- Interface -->
        <div>
          <label for="iface" class="mb-1 block text-xs font-semibold uppercase tracking-wider text-faint">Interface</label>
          <select
            id="iface"
            class="w-full rounded border border-rule bg-base px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
            value={app.config.interface}
            onchange={(e) =>
              setInterface((e.currentTarget as HTMLSelectElement).value as InterfaceType)}
          >
            <option value="webserial">Web Serial (local USB cable)</option>
            <option value="gateway">Gateway (remote ediabasx server)</option>
          </select>
          {#if app.config.interface === "webserial" && !webSerialAvailable}
            <p class="mt-1 text-xs text-red-500">
              Web Serial is not available in this browser. Use Chrome / Edge / Opera /
              Brave on desktop, served over HTTPS or localhost.
            </p>
          {/if}
        </div>

        <!-- Serial parameters -->
        {#if app.config.interface === "webserial" && app.config.serial}
          <fieldset class="space-y-3 rounded border border-divider bg-base p-3">
            <legend class="px-1 text-xs font-semibold uppercase tracking-wider text-faint">
              Serial / K-line
            </legend>
            <div class="grid grid-cols-2 gap-3">
              <label class="text-xs text-muted">
                Baud
                <input
                  type="number"
                  class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
                  bind:value={app.config.serial.baudRate}
                />
              </label>
              <label class="text-xs text-muted">
                Timeout (ms)
                <input
                  type="number"
                  class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
                  bind:value={app.config.serial.timeoutMs}
                />
              </label>
              <label class="text-xs text-muted">
                Protocol
                <select
                  class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
                  bind:value={app.config.serial.protocol}
                >
                  <option value="kwp">KWP2000 (K-line)</option>
                  <option value="isotp">ISO-TP (D-CAN)</option>
                  <option value="uart">UART (raw)</option>
                  <option value="tp20">TP2.0 (VAG)</option>
                </select>
              </label>
              <label class="text-xs text-muted">
                Init mode
                <select
                  class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
                  bind:value={app.config.serial.initMode}
                >
                  <option value="fast">fast</option>
                  <option value="five-baud">5-baud</option>
                </select>
              </label>
              <label class="text-xs text-muted">
                Data bits
                <select
                  class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
                  bind:value={app.config.serial.dataBits}
                >
                  <option value={8}>8</option>
                  <option value={7}>7</option>
                </select>
              </label>
              <label class="text-xs text-muted">
                Parity
                <select
                  class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
                  bind:value={app.config.serial.parity}
                >
                  <option value="none">none</option>
                  <option value="even">even</option>
                  <option value="odd">odd</option>
                </select>
              </label>
              <label class="text-xs text-muted">
                Stop bits
                <select
                  class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
                  bind:value={app.config.serial.stopBits}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                </select>
              </label>
              {#if app.config.serial.protocol === "isotp"}
                <label class="text-xs text-muted">
                  Tester CAN ID
                  <input
                    type="text"
                    placeholder="0x7E0"
                    class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
                    bind:value={app.config.serial.testerCanId}
                  />
                </label>
                <label class="text-xs text-muted">
                  ECU CAN ID
                  <input
                    type="text"
                    placeholder="0x7E8"
                    class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
                    bind:value={app.config.serial.ecuCanId}
                  />
                </label>
              {/if}
            </div>
          </fieldset>
        {/if}

        <!-- Gateway config -->
        {#if app.config.interface === "gateway"}
          <fieldset class="space-y-2 rounded border border-divider bg-base p-3">
            <legend class="px-1 text-xs font-semibold uppercase tracking-wider text-faint">
              Gateway
            </legend>
            <label class="text-xs text-muted">
              WebSocket URL
              <input
                type="text"
                placeholder="ws://localhost:6801"
                class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 font-mono text-sm text-foreground focus:border-accent focus:outline-none"
                bind:value={app.config.gateway!.url}
              />
            </label>
            {#if !secure && app.config.gateway?.url?.startsWith("ws://")}
              <p class="text-xs text-amber-500">
                ⚠ Page loaded over HTTPS — browsers refuse plain <code>ws://</code>.
                Use <code>wss://</code> or load this page over <code>http://localhost</code>.
              </p>
            {/if}
            <p class="text-xs text-faint">
              Run <code>ediabasx gateway --transport websocket</code> on the machine
              that owns the cable; point this URL at it.
            </p>
          </fieldset>
        {/if}
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
