<script lang="ts">
  import { state as app } from "../lib/app.svelte";
  import { connect } from "../lib/runtime.svelte";

  let sessionToken = $state("");
  let parseError = $state("");

  function close(): void {
    app.showConnectSession = false;
    sessionToken = "";
    parseError = "";
  }

  function submit(): void {
    const raw = sessionToken.trim();
    const dot = raw.indexOf(".");
    if (dot <= 0 || dot >= raw.length - 1) {
      parseError = "Invalid session token — expected format: sessionId.token";
      return;
    }
    app.connectSessionId = raw.slice(0, dot);
    app.connectToken = raw.slice(dot + 1);
    app.showConnectSession = false;
    sessionToken = "";
    parseError = "";
    void connect();
  }
</script>

{#if app.showConnectSession}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    onclick={close}
    onkeydown={(e) => e.key === "Escape" && close()}
  >
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div
      class="w-full max-w-md rounded border border-rule bg-surface shadow-2xl"
      role="document"
      tabindex="-1"
      onclick={(e) => e.stopPropagation()}
      onkeydown={(e) => {
        e.stopPropagation();
        if (e.key === "Enter") submit();
      }}
    >
      <header class="flex items-baseline justify-between gap-4 border-b border-divider px-4 py-3">
        <h2 class="text-sm font-bold uppercase tracking-wider text-muted">Bimmerz Connect</h2>
        <button
          class="text-xs text-faint underline-offset-2 hover:text-muted hover:underline"
          onclick={close}
        >
          close
        </button>
      </header>

      <section class="space-y-3 px-4 py-4 text-sm">
        <p class="text-xs text-faint">
          The server operator runs <code class="text-muted">ediabasx serve --connect</code> and
          shares a session token. Paste it below.
        </p>

        <label class="block text-xs text-muted">
          Session token
          <input
            type="text"
            class="mt-0.5 w-full rounded border border-rule bg-base px-2 py-1.5 font-mono text-sm text-foreground placeholder:text-faint focus:border-accent focus:outline-none"
            placeholder="e.g. Zmh1wHftNKf5iVZSR3VqiA.rycSNAOMhAdNi-nUGAUVkQ"
            bind:value={sessionToken}
            oninput={() => { parseError = ""; }}
          />
        </label>

        {#if parseError}
          <p class="text-xs text-red-500">{parseError}</p>
        {/if}
      </section>

      <footer class="flex items-center justify-end gap-2 border-t border-divider bg-elevated/50 px-4 py-2">
        <button
          class="rounded border border-rule px-2 py-0.5 text-xs text-muted hover:bg-elevated hover:text-foreground"
          onclick={close}
        >
          Cancel
        </button>
        <button
          class="rounded bg-accent px-3 py-1 text-sm font-medium text-zinc-950 hover:bg-accent-muted disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!sessionToken.trim()}
          onclick={submit}
        >
          Connect
        </button>
      </footer>
    </div>
  </div>
{/if}
