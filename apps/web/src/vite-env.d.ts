/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare const __APP_VERSION__: string;

// File System Access API — Chromium-only Web Platform extension. Used by
// the install picker so the user can grant persistent read access to
// their BMW Standard Tools folder.
interface Window {
  showDirectoryPicker?: (options?: {
    mode?: "read" | "readwrite";
  }) => Promise<FileSystemDirectoryHandle>;
}
