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
import type { EdiabasxInstall } from "./sgbd-install";

export type View =
  | "picker"        // welcome screen — pick install folder
  | "browse";       // sidebar + detail layout

export interface RemoteJob {
  name: string;
  comment?: string;
  argCount: number;
  resultCount: number;
}

interface AppState {
  view: View;
  /** The discovered BMW Standard Tools install — null until the picker runs. */
  install: EdiabasxInstall | null;
  /** Currently-loaded PRG, populated when the user picks a file from the sidebar. */
  prg: PrgFile | null;
  prgBuffer: Uint8Array | null;
  loadedFile: PickedFile | null;
  loadError: string | null;
  config: WebConfig;
  showAbout: boolean;
  showSettings: boolean;
  /** Toast-style error surfaced from background tasks (install discovery, etc.). */
  error: string | null;
  /** Client mode: jobs fetched from server for the loaded SGBD. */
  remoteJobs: RemoteJob[] | null;
  /** Client mode: table count from server. */
  remoteTableCount: number | null;
}

export const state = $state<AppState>({
  view: "picker",
  install: null,
  prg: null,
  prgBuffer: null,
  loadedFile: null,
  loadError: null,
  config: loadConfig(),
  showAbout: false,
  showSettings: false,
  error: null,
  remoteJobs: null,
  remoteTableCount: null,
});

export function goto(view: View): void {
  state.view = view;
}

export async function loadSgbd(picked: PickedFile): Promise<void> {
  state.loadError = null;
  try {
    const bytes = await readFileBytes(picked.file);
    const prg = parsePrg(bytes);
    state.prg = prg;
    state.prgBuffer = bytes;
    state.loadedFile = picked;
  } catch (error) {
    state.prg = null;
    state.prgBuffer = null;
    state.loadedFile = null;
    state.loadError = error instanceof Error ? error.message : String(error);
  }
}

export function selectRemoteSgbd(name: string, ext: string): void {
  state.loadedFile = { name, relativePath: name, ext, file: new File([], name) };
  state.prg = null;
  state.prgBuffer = null;
  state.loadError = null;
  state.remoteJobs = null;
  state.remoteTableCount = null;
}
