// Shared app state using Svelte 5 module-level runes. Components import
// `state` and read fields directly; mutating helpers below keep view
// transitions and SGBD loading in one place.
//
// Why a $state-wrapped object instead of a class with `$state` fields:
// classes work for most cases, but reassignment of class fields (e.g.
// `app.config = newConfig` from the wizard) re-wraps the value in a fresh
// proxy on each assignment, which can look like "nothing happened" if the
// new value happens to be structurally equal but reference-changed. A
// single proxied object keeps a stable identity per field.

import { type PrgFile, parsePrg } from "@emdzej/ediabasx-best-parser";
import { type PickedFile, readFileBytes } from "./files";
import { loadConfig, type WebConfig } from "./config";

export type View = "files" | "wizard" | "jobs";

interface AppState {
  view: View;
  pickedFiles: PickedFile[];
  prg: PrgFile | null;
  prgBuffer: Uint8Array | null;
  loadedFile: PickedFile | null;
  loadError: string | null;
  config: WebConfig;
  showAbout: boolean;
}

export const state = $state<AppState>({
  view: "files",
  pickedFiles: [],
  prg: null,
  prgBuffer: null,
  loadedFile: null,
  loadError: null,
  config: loadConfig(),
  showAbout: false,
});

export function goto(view: View): void {
  state.view = view;
}

export function setPickedFiles(files: PickedFile[]): void {
  state.pickedFiles = files;
}

export async function loadSgbd(picked: PickedFile): Promise<void> {
  state.loadError = null;
  try {
    const bytes = await readFileBytes(picked.file);
    const prg = parsePrg(bytes);
    state.prg = prg;
    state.prgBuffer = bytes;
    state.loadedFile = picked;
    state.view = "jobs";
  } catch (error) {
    state.prg = null;
    state.prgBuffer = null;
    state.loadedFile = null;
    state.loadError = error instanceof Error ? error.message : String(error);
  }
}

// The wizard now binds inputs directly to `state.config.*` and an effect
// in the wizard component mirrors changes to localStorage. There's no
// `updateConfig` helper because there's no longer a draft to commit —
// reactivity flows through the proxy in place.
