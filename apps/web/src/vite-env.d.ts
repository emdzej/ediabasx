/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare const __APP_VERSION__: string;
/**
 * `true` when the SPA was built with `vite --mode embedded` (the
 * dongle scenario — SPA is served by the device's HTTP server,
 * talks back to the same origin's `/rpc/ediabasx` for IEdiabas
 * dispatches). `false` for the regular browser build. Vite's
 * `define` replaces this at build time, so dead code under
 * `if (!__EMBEDDED__)` tree-shakes out of the embedded bundle.
 */
declare const __EMBEDDED__: boolean;

// File System Access API — Chromium-only Web Platform extension. Used by
// the install picker so the user can grant persistent read access to
// their BMW Standard Tools folder.
interface Window {
  showDirectoryPicker?: (options?: {
    mode?: "read" | "readwrite";
  }) => Promise<FileSystemDirectoryHandle>;
}
