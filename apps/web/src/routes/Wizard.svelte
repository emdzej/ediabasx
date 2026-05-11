<script lang="ts">
  import { state as app } from "../lib/app.svelte";
  import { resetConfig, saveConfig, type InterfaceType } from "../lib/config";

  // No `draft` copy: bind every input directly to `app.config.*`. That's
  // the module-level `$state` proxy, so mutations propagate everywhere and
  // we don't have to round-trip through `structuredClone` / `$state.snapshot`.
  //
  // Auto-save is a single $effect that reads each field once (to register
  // reactive deps) and writes to localStorage. localStorage writes aren't
  // tracked by Svelte, so this can't feed back into the effect — no
  // `effect_update_depth_exceeded` loop.

  let savedAt = $state<number | null>(null);

  $effect(() => {
    // Read every field we want to persist so the effect tracks them.
    void app.config.interface;
    void app.config.serial?.baudRate;
    void app.config.serial?.dataBits;
    void app.config.serial?.parity;
    void app.config.serial?.stopBits;
    void app.config.serial?.protocol;
    void app.config.serial?.initMode;
    void app.config.serial?.testerCanId;
    void app.config.serial?.ecuCanId;
    void app.config.serial?.timeoutMs;
    void app.config.enet?.host;
    void app.config.enet?.port;
    saveConfig(app.config);
    savedAt = Date.now();
  });

  const interfaceOptions: Array<{ value: InterfaceType; label: string; help: string }> = [
    { value: "webserial", label: "Web Serial (browser)", help: "K-line / K+DCAN over Chrome/Edge Web Serial API. No driver install needed." },
    { value: "simulation", label: "Simulation", help: "Canned responses, no hardware. Useful for offline browsing." },
    { value: "enet", label: "ENET / DoIP", help: "Modern BMW vehicles over Ethernet. (Not yet exercised in web v1.)" },
  ];

  function reset(): void {
    const fresh = resetConfig();
    // Mutate the existing proxy in place so reactive bindings keep their
    // identity (rather than `app.config = fresh`, which would tear off the
    // proxy wrapper and orphan any holder of the old reference).
    Object.assign(app.config, fresh);
    if (fresh.serial) {
      app.config.serial = { ...(app.config.serial ?? {}), ...fresh.serial };
    }
    if (fresh.enet) {
      app.config.enet = { ...(app.config.enet ?? {}), ...fresh.enet };
    }
  }

  function isWebSerialSupported(): boolean {
    return typeof navigator !== "undefined" && "serial" in navigator;
  }

  // Format a "Saved at HH:MM:SS" hint so the user can see persistence
  // actually happens. Falls back to nothing on first render.
  const savedLabel = $derived.by(() => {
    if (!savedAt) return null;
    const d = new Date(savedAt);
    const pad = (n: number) => String(n).padStart(2, "0");
    return `Saved · ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  });

  // Render the current config as JSON for the "Stored configuration"
  // preview. `JSON.stringify` works on Svelte proxies and re-evaluates
  // whenever any tracked field changes.
  const configJson = $derived(JSON.stringify(app.config, null, 2));
</script>

<div class="flex h-full flex-col overflow-auto">
  <div class="mx-auto flex w-full max-w-2xl flex-col gap-6 p-6">
    <header class="flex items-baseline justify-between gap-4">
      <div>
        <h2 class="text-sm font-bold uppercase tracking-wider text-zinc-400">Configuration</h2>
        <p class="mt-2 text-sm text-zinc-400">
          Settings persist in <code class="text-zinc-300">localStorage</code> and are
          used when you wire up a hardware run in a future release. Equivalent to the
          CLI's <code class="text-zinc-300">ediabasx configure</code>.
        </p>
      </div>
      {#if savedLabel}
        <span class="shrink-0 text-xs text-accent">{savedLabel}</span>
      {/if}
    </header>

    <fieldset class="flex flex-col gap-2">
      <legend class="text-xs font-bold uppercase tracking-wider text-zinc-500">
        Interface
      </legend>
      <div class="flex flex-col gap-2">
        {#each interfaceOptions as option (option.value)}
          <label
            class="flex cursor-pointer items-start gap-3 rounded border bg-zinc-900 p-3 hover:border-zinc-700"
            class:border-accent={app.config.interface === option.value}
            class:border-zinc-800={app.config.interface !== option.value}
          >
            <input
              type="radio"
              name="interface"
              value={option.value}
              bind:group={app.config.interface}
              class="mt-1 accent-accent"
            />
            <div class="flex flex-col">
              <span class="text-sm text-zinc-200">{option.label}</span>
              <span class="text-xs text-zinc-500">{option.help}</span>
            </div>
          </label>
        {/each}
      </div>
      {#if app.config.interface === "webserial" && !isWebSerialSupported()}
        <div class="rounded border border-amber-700 bg-amber-950 p-3 text-xs text-amber-200">
          Your browser doesn't expose <code>navigator.serial</code>. Chrome, Edge, or
          Opera on a desktop OS is required.
        </div>
      {/if}
    </fieldset>

    {#if app.config.interface === "webserial" || app.config.interface === "serial"}
      <fieldset class="grid grid-cols-2 gap-3">
        <legend class="col-span-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
          Serial / K-line
        </legend>
        <label class="flex flex-col gap-1 text-xs text-zinc-400">
          Baud rate
          <input
            type="number"
            class="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-sm text-zinc-200 focus:border-accent focus:outline-none"
            bind:value={app.config.serial!.baudRate}
          />
        </label>
        <label class="flex flex-col gap-1 text-xs text-zinc-400">
          Protocol
          <select
            class="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-sm text-zinc-200 focus:border-accent focus:outline-none"
            bind:value={app.config.serial!.protocol}
          >
            <option value="kwp">KWP2000 (K-line)</option>
            <option value="isotp">ISO-TP (D-CAN)</option>
            <option value="uart">UART (raw)</option>
            <option value="tp20">TP2.0 (VAG)</option>
          </select>
        </label>
        <label class="flex flex-col gap-1 text-xs text-zinc-400">
          Data bits
          <select
            class="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-sm text-zinc-200 focus:border-accent focus:outline-none"
            bind:value={app.config.serial!.dataBits}
          >
            <option value={8}>8</option>
            <option value={7}>7</option>
          </select>
        </label>
        <label class="flex flex-col gap-1 text-xs text-zinc-400">
          Parity
          <select
            class="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-sm text-zinc-200 focus:border-accent focus:outline-none"
            bind:value={app.config.serial!.parity}
          >
            <option value="none">none</option>
            <option value="even">even</option>
            <option value="odd">odd</option>
          </select>
        </label>
        <label class="flex flex-col gap-1 text-xs text-zinc-400">
          Stop bits
          <select
            class="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-sm text-zinc-200 focus:border-accent focus:outline-none"
            bind:value={app.config.serial!.stopBits}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </label>
        <label class="flex flex-col gap-1 text-xs text-zinc-400">
          Init mode
          <select
            class="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-sm text-zinc-200 focus:border-accent focus:outline-none"
            bind:value={app.config.serial!.initMode}
          >
            <option value="fast">fast</option>
            <option value="five-baud">5-baud</option>
          </select>
        </label>
        {#if app.config.serial!.protocol === "isotp"}
          <label class="flex flex-col gap-1 text-xs text-zinc-400">
            Tester CAN ID
            <input
              type="text"
              placeholder="0x7E0"
              class="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-sm text-zinc-200 focus:border-accent focus:outline-none"
              bind:value={app.config.serial!.testerCanId}
            />
          </label>
          <label class="flex flex-col gap-1 text-xs text-zinc-400">
            ECU CAN ID
            <input
              type="text"
              placeholder="0x7E8"
              class="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-sm text-zinc-200 focus:border-accent focus:outline-none"
              bind:value={app.config.serial!.ecuCanId}
            />
          </label>
        {/if}
        <label class="col-span-2 flex flex-col gap-1 text-xs text-zinc-400">
          Timeout (ms)
          <input
            type="number"
            class="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-sm text-zinc-200 focus:border-accent focus:outline-none"
            bind:value={app.config.serial!.timeoutMs}
          />
        </label>
      </fieldset>
    {/if}

    {#if app.config.interface === "enet"}
      <fieldset class="grid grid-cols-2 gap-3">
        <legend class="col-span-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
          ENET / DoIP
        </legend>
        <label class="flex flex-col gap-1 text-xs text-zinc-400">
          Host
          <input
            type="text"
            class="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-sm text-zinc-200 focus:border-accent focus:outline-none"
            bind:value={app.config.enet!.host}
          />
        </label>
        <label class="flex flex-col gap-1 text-xs text-zinc-400">
          Port
          <input
            type="number"
            class="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-sm text-zinc-200 focus:border-accent focus:outline-none"
            bind:value={app.config.enet!.port}
          />
        </label>
      </fieldset>
    {/if}

    <footer class="flex items-center gap-3">
      <button
        type="button"
        class="rounded border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:border-zinc-500"
        onclick={reset}
      >
        Reset to defaults
      </button>
      <span class="text-xs text-zinc-500">
        Changes auto-save to <code class="text-zinc-400">localStorage</code>.
      </span>
    </footer>

    <details class="rounded border border-zinc-800 bg-zinc-900/40 p-3 text-xs">
      <summary class="cursor-pointer select-none text-zinc-400">
        Stored configuration (live preview)
      </summary>
      <pre class="mt-2 overflow-auto whitespace-pre-wrap text-zinc-400">{configJson}</pre>
    </details>
  </div>
</div>
