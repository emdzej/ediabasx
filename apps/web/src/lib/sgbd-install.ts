/**
 * Discover the SGBD catalogue inside a BMW Standard Tools install.
 *
 * The user picks the install root (`<root>/` — the folder that contains
 * `EDIABAS/`, `NCSEXPER/`, `EC-APPS/`). We drill case-insensitively for
 * `EDIABAS/Ecu` and enumerate every `.prg` / `.grp` inside it. The other
 * subsystems (NCSEXPER, EC-APPS) aren't required — ediabasx only needs
 * the SGBDs.
 *
 * Fallback: if the picked dir doesn't contain `EDIABAS/`, we also treat
 * the dir itself as the SGBD root (so a user who picked `EDIABAS/Ecu`
 * directly still works).
 */

import { type PickedFile } from "./files";

export interface EdiabasxInstall {
  /** The directory the user picked via showDirectoryPicker. */
  root: FileSystemDirectoryHandle;
  /** `<root>/EDIABAS/Ecu` (or the picked dir if it looks like an Ecu folder). */
  ecu: FileSystemDirectoryHandle;
  /** How we resolved the SGBD folder (for the install summary UI). */
  layout: "standard" | "ecu-direct";
  /** Every `.prg` / `.grp` file under `ecu/`, sorted by relative path. */
  sgbds: PickedFile[];
}

export class EdiabasxInstallError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EdiabasxInstallError";
  }
}

/**
 * Case-insensitive directory lookup. The Web Filesystem Access API is
 * case-sensitive on every platform, but Windows BMW installs have
 * historically used wildly inconsistent casing (`Ediabas`, `EDIABAS`,
 * `ediabas`, …). Mirror NCS Expert's lenient lookup.
 */
async function findChildDir(
  parent: FileSystemDirectoryHandle,
  name: string,
): Promise<FileSystemDirectoryHandle | null> {
  const target = name.toLowerCase();
  for await (const [entryName, handle] of parent.entries()) {
    if (handle.kind !== "directory") continue;
    if (entryName.toLowerCase() === target) {
      return handle as FileSystemDirectoryHandle;
    }
  }
  return null;
}

/**
 * Recursively walk `dir` and collect every `.prg` / `.grp` file.
 * Returns paths relative to the passed-in dir.
 */
async function walkSgbds(
  dir: FileSystemDirectoryHandle,
  pathPrefix = "",
): Promise<PickedFile[]> {
  const out: PickedFile[] = [];
  for await (const [name, handle] of dir.entries()) {
    const rel = pathPrefix ? `${pathPrefix}/${name}` : name;
    if (handle.kind === "directory") {
      // Don't recurse into hidden / dotted dirs; BMW installs don't use them
      // but the user might have accidentally picked their home folder.
      if (name.startsWith(".")) continue;
      const nested = await walkSgbds(handle as FileSystemDirectoryHandle, rel);
      out.push(...nested);
      continue;
    }
    const lower = name.toLowerCase();
    if (!lower.endsWith(".prg") && !lower.endsWith(".grp")) continue;
    const file = await (handle as FileSystemFileHandle).getFile();
    out.push({
      name,
      file,
      relativePath: rel,
      ext: lower.endsWith(".prg") ? "prg" : "grp",
    });
  }
  out.sort((a, b) => a.relativePath.localeCompare(b.relativePath));
  return out;
}

/**
 * Discover the SGBD catalogue inside the user-picked root. Tries the
 * canonical `EDIABAS/Ecu` first; falls back to treating the picked dir
 * itself as the Ecu folder if a `.prg` is found at the top level.
 */
export async function discoverEdiabasxInstall(
  root: FileSystemDirectoryHandle,
): Promise<EdiabasxInstall> {
  // Standard layout: <root>/EDIABAS/Ecu
  const ediabas = await findChildDir(root, "EDIABAS");
  if (ediabas) {
    const ecu = await findChildDir(ediabas, "Ecu");
    if (ecu) {
      const sgbds = await walkSgbds(ecu);
      return { root, ecu, layout: "standard", sgbds };
    }
  }
  // Fallback: user picked EDIABAS/Ecu directly.
  const direct = await walkSgbds(root);
  if (direct.length > 0) {
    return { root, ecu: root, layout: "ecu-direct", sgbds: direct };
  }
  throw new EdiabasxInstallError(
    `No SGBD files found in "${root.name}". Pick a BMW Standard Tools install root (the folder that contains EDIABAS/) or an EDIABAS/Ecu folder directly.`,
  );
}
