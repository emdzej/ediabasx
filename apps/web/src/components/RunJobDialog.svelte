<script lang="ts">
  /**
   * Modal arg-entry dialog. Opens when the user clicks Run on a job
   * with declared args. One field per arg, **typed per arg.type**:
   *
   * - `string`  → plain text input
   * - `long`    → numeric text input. Accepts `123` or `0xff` /
   *               `0xFF`; rejects everything else at submit time.
   * - `binary`  → text input that accepts hex bytes in any common
   *               format (`00 11 af`, `0011AF`, `00-11-af`,
   *               `00,11,af`). Whitespace and `-` / `,` separators
   *               are stripped before parsing.
   *
   * The dialog assembles `(string | Uint8Array)[]` and hands it to
   * `runJob()` (which the parent passes in via `onRun`).
   * Parent owns the actual `runJob` call so this stays presentational.
   *
   * Per-arg validation runs at submit — invalid entries show inline
   * errors and the Run button stays usable (the user fixes the
   * offending field, hits Enter or Run, and we re-validate).
   */
  import type { PrgJob, PrgArg } from "@emdzej/ediabasx-best-parser";

  interface Props {
    open: boolean;
    job: PrgJob | null;
    /** Submit handler — called once all fields validate. */
    onRun: (params: (string | Uint8Array)[]) => void;
    /** Close handler — fired by Cancel, Escape, or backdrop click. */
    onClose: () => void;
    /** Disables the Run button (e.g. while a previous job is in flight). */
    running?: boolean;
  }

  let { open, job, onRun, onClose, running = false }: Props = $props();

  /** One entry per arg position. Reset every time the dialog reopens. */
  let values = $state<string[]>([]);
  /** Per-arg error message; populated only at submit. */
  let errors = $state<(string | null)[]>([]);

  $effect(() => {
    if (open && job) {
      values = job.args.map(() => "");
      errors = job.args.map(() => null);
    }
  });

  /**
   * Parse `long` text. Accepts `0xff` / `0xFF` / `255`; rejects
   * everything else. Returns the cleaned string — the VM's
   * parameter channel parses string → int with its own conversion
   * path, and we shouldn't second-guess large-integer behaviour.
   */
  function parseLong(raw: string): { ok: true; value: string } | { ok: false; error: string } {
    const trimmed = raw.trim();
    if (!trimmed) return { ok: false, error: "required" };
    if (/^-?0x[0-9a-f]+$/i.test(trimmed) || /^-?[0-9]+$/.test(trimmed)) {
      return { ok: true, value: trimmed };
    }
    return { ok: false, error: "expected integer (123) or hex (0xff)" };
  }

  /**
   * Parse a hex byte string → `Uint8Array`. Tolerates whitespace,
   * `:`, `-`, `,` between bytes (`"00 11 AF"`, `"00:11:af"`,
   * `"0011af"`, etc.). Empty input is invalid — a user-typed
   * empty binary field is almost always a mistake.
   */
  function parseBinary(raw: string): { ok: true; value: Uint8Array } | { ok: false; error: string } {
    const cleaned = raw.replace(/[\s:,\-_]/g, "");
    if (!cleaned) return { ok: false, error: "required (hex bytes, e.g. 00 11 AF)" };
    if (cleaned.length % 2 !== 0) {
      return { ok: false, error: "odd number of hex digits" };
    }
    if (!/^[0-9a-f]+$/i.test(cleaned)) {
      return { ok: false, error: "expected hex bytes (0-9, A-F)" };
    }
    const out = new Uint8Array(cleaned.length / 2);
    for (let i = 0; i < out.length; i++) {
      out[i] = parseInt(cleaned.slice(i * 2, i * 2 + 2), 16);
    }
    return { ok: true, value: out };
  }

  /**
   * `string`-typed args pass through verbatim — even empty strings
   * are allowed (some SGBDs accept "" as a sentinel for default).
   */
  function parseString(raw: string): { ok: true; value: string } | { ok: false; error: string } {
    return { ok: true, value: raw };
  }

  function parseArg(
    arg: PrgArg,
    raw: string,
  ): { ok: true; value: string | Uint8Array } | { ok: false; error: string } {
    switch (arg.type) {
      case "binary":
        return parseBinary(raw);
      case "long":
        return parseLong(raw);
      default:
        // Includes "string" and any unknown type — string-pass-through
        // is the safest fallback; VM coercion handles the rest.
        return parseString(raw);
    }
  }

  function submit(): void {
    if (!job) return;
    const parsed: (string | Uint8Array)[] = [];
    const newErrors: (string | null)[] = [];
    let allOk = true;
    for (let i = 0; i < job.args.length; i++) {
      const arg = job.args[i]!;
      const result = parseArg(arg, values[i] ?? "");
      if (result.ok) {
        parsed.push(result.value);
        newErrors.push(null);
      } else {
        newErrors.push(result.error);
        allOk = false;
      }
    }
    errors = newErrors;
    if (allOk) {
      onRun(parsed);
    }
  }

  /**
   * Enter on any field submits the dialog (matches the previous
   * inline-input UX). None of the supported arg types are multi-line,
   * so we just preventDefault on Enter.
   */
  function onKeydown(e: KeyboardEvent): void {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  function placeholderFor(arg: PrgArg): string {
    switch (arg.type) {
      case "binary":
        return "hex bytes, e.g. 00 11 AF";
      case "long":
        return "integer or 0xhex";
      default:
        return "value";
    }
  }
</script>

{#if open && job}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    onclick={onClose}
    onkeydown={(e) => e.key === "Escape" && onClose()}
  >
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div
      class="flex max-h-[90vh] w-full max-w-lg flex-col rounded border border-rule bg-surface shadow-2xl"
      role="document"
      tabindex="-1"
      onclick={(e) => e.stopPropagation()}
      onkeydown={(e) => e.stopPropagation()}
    >
      <header class="flex items-baseline justify-between gap-4 border-b border-divider px-4 py-3">
        <div class="min-w-0 flex-1">
          <h2 class="text-sm font-bold uppercase tracking-wider text-muted">Run job</h2>
          <p class="mt-0.5 truncate font-mono text-xs text-foreground">{job.name}</p>
          {#if job.comment}
            <p class="mt-0.5 line-clamp-2 text-xs text-faint">{job.comment}</p>
          {/if}
        </div>
        <button
          class="shrink-0 text-xs text-faint underline-offset-2 hover:text-muted hover:underline"
          onclick={onClose}
          disabled={running}
          type="button"
        >
          close
        </button>
      </header>

      <section class="space-y-3 overflow-y-auto px-4 py-4 text-sm">
        {#if job.args.length === 0}
          <p class="text-faint italic">This job takes no arguments.</p>
        {:else}
          {#each job.args as arg, i (i)}
            <label class="flex flex-col gap-1">
              <span class="flex items-baseline gap-2">
                <span class="font-mono text-xs text-foreground">{arg.name}</span>
                <span class="rounded bg-elevated px-1.5 py-0.5 text-xs text-faint">{arg.type}</span>
              </span>
              {#if arg.comment}
                <span class="text-xs text-faint">{arg.comment}</span>
              {/if}
              <input
                type="text"
                class="rounded border border-divider bg-base px-2 py-1 font-mono text-xs text-foreground focus:border-accent focus:outline-none {errors[i] ? 'border-rose-500/70' : ''}"
                placeholder={placeholderFor(arg)}
                bind:value={values[i]}
                onkeydown={onKeydown}
                autocomplete="off"
                spellcheck={false}
              />
              {#if errors[i]}
                <span class="text-xs text-rose-500">{errors[i]}</span>
              {/if}
            </label>
          {/each}
        {/if}
      </section>

      <footer class="flex items-center justify-end gap-2 border-t border-divider bg-elevated/50 px-4 py-2">
        <button
          type="button"
          class="rounded border border-rule px-2 py-0.5 text-xs text-muted hover:bg-elevated hover:text-foreground"
          onclick={onClose}
          disabled={running}
        >
          Cancel
        </button>
        <button
          type="button"
          class="rounded bg-accent px-3 py-1 text-sm font-medium text-zinc-950 hover:bg-accent-muted disabled:cursor-not-allowed disabled:opacity-50"
          onclick={submit}
          disabled={running}
        >
          {running ? "Running…" : "Run"}
        </button>
      </footer>
    </div>
  </div>
{/if}
