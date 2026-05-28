<script lang="ts">
  // Composite panel for picking and configuring a transport: the
  // <select interface> row + per-interface fieldsets (Serial / J2534 /
  // Gateway). Two-way binds to a config object that satisfies
  // `InterfaceConfig`. Apps that need a subset of interfaces can pass
  // `available={["webserial", "gateway"]}` to hide options.
  import type { InterfaceConfig, InterfaceType } from "./types.js";

  interface Props {
    config: InterfaceConfig;
    /**
     * Which interface options to expose. Order in this array drives
     * the <select> render order. Defaults to all three.
     */
    available?: readonly InterfaceType[];
  }

  let { config = $bindable(), available = ["webserial", "j2534", "gateway"] }: Props = $props();

  function setInterface(value: InterfaceType): void {
    config = { ...config, interface: value };
  }

  function isWebSerialSupported(): boolean {
    return typeof navigator !== "undefined" && "serial" in navigator;
  }

  function isSecureContext(): boolean {
    return typeof window !== "undefined" && window.isSecureContext === true;
  }

  const webSerialAvailable = $derived(isWebSerialSupported());
  const secure = $derived(isSecureContext());

  const INTERFACE_LABELS: Record<InterfaceType, string> = {
    webserial: "Web Serial (local USB cable)",
    j2534: "J2534 (Tactrix OpenPort 2.0)",
    gateway: "Gateway (remote ediabasx server)",
  };
</script>

<div class="space-y-4">
  <!-- Interface selector -->
  <div>
    <label
      for="ediabasx-iface"
      class="mb-1 block text-xs font-semibold uppercase tracking-wider text-faint"
    >
      Interface
    </label>
    <select
      id="ediabasx-iface"
      class="w-full rounded border border-rule bg-base px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
      value={config.interface}
      onchange={(e) =>
        setInterface((e.currentTarget as HTMLSelectElement).value as InterfaceType)}
    >
      {#each available as iface (iface)}
        <option value={iface}>{INTERFACE_LABELS[iface]}</option>
      {/each}
    </select>
    {#if (config.interface === "webserial" || config.interface === "j2534") && !webSerialAvailable}
      <p class="mt-1 text-xs text-red-500">
        Web Serial is not available in this browser. Use Chrome / Edge / Opera /
        Brave on desktop, served over HTTPS or localhost.
      </p>
    {/if}
  </div>

  <!-- Serial parameters -->
  {#if config.interface === "webserial" && config.serial}
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
            bind:value={config.serial.baudRate}
          />
        </label>
        <label class="text-xs text-muted">
          Timeout (ms)
          <input
            type="number"
            class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
            bind:value={config.serial.timeoutMs}
          />
        </label>
        <label class="text-xs text-muted">
          Protocol
          <select
            class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
            bind:value={config.serial.protocol}
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
            bind:value={config.serial.initMode}
          >
            <option value="fast">fast</option>
            <option value="five-baud">5-baud</option>
          </select>
        </label>
        <label class="text-xs text-muted">
          Data bits
          <select
            class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
            bind:value={config.serial.dataBits}
          >
            <option value={8}>8</option>
            <option value={7}>7</option>
          </select>
        </label>
        <label class="text-xs text-muted">
          Parity
          <select
            class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
            bind:value={config.serial.parity}
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
            bind:value={config.serial.stopBits}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </label>
        {#if config.serial.protocol === "isotp"}
          <label class="text-xs text-muted">
            Tester CAN ID
            <input
              type="text"
              placeholder="0x7E0"
              class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
              bind:value={config.serial.testerCanId}
            />
          </label>
          <label class="text-xs text-muted">
            ECU CAN ID
            <input
              type="text"
              placeholder="0x7E8"
              class="mt-0.5 w-full rounded border border-rule bg-surface px-2 py-1 text-sm text-foreground focus:border-accent focus:outline-none"
              bind:value={config.serial.ecuCanId}
            />
          </label>
        {/if}
      </div>
    </fieldset>
  {/if}

  <!-- J2534 (OpenPort 2.0) — no knobs; SGBD's setCommParameter drives baud/protocol -->
  {#if config.interface === "j2534"}
    <fieldset class="space-y-2 rounded border border-divider bg-base p-3">
      <legend class="px-1 text-xs font-semibold uppercase tracking-wider text-faint">
        J2534 · OpenPort 2.0
      </legend>
      <p class="text-xs text-muted">
        Frame-level K-line transport via the Tactrix OpenPort 2.0.
        The browser pops the Web Serial port picker on Connect — grant
        access to <code>USB Serial Device</code> (VID&nbsp;0x0403, PID&nbsp;0xCC4D).
        Protocol and baud come from the SGBD's
        <code>setCommParameter</code> — nothing to configure here.
      </p>
    </fieldset>
  {/if}

  <!-- Gateway config -->
  {#if config.interface === "gateway" && config.gateway}
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
          bind:value={config.gateway.url}
        />
      </label>
      {#if !secure && config.gateway.url?.startsWith("ws://")}
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
</div>
