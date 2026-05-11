// File-picker helpers. Two modes:
//   1. `<input type="file" webkitdirectory>` — user picks a whole ECU folder,
//      we surface all PRG/GRP files inside it so they can drill down to the
//      one they want. Mirrors EDIABAS's `ecuPath` directory layout.
//   2. Single-file picker — drop or open a single `.prg` / `.grp`.

export interface PickedFile {
  /** Name relative to the picked root, e.g. `MS430DS0.prg`. */
  name: string;
  /** Optional sub-path inside the picked directory (`subdir/file.prg`). */
  relativePath: string;
  /** Lower-cased extension without leading dot. */
  ext: string;
  /** Backing File object — call `arrayBuffer()` to get the bytes. */
  file: File;
}

const PRG_EXT_RE = /\.(prg|grp)$/i;

export function isPrgOrGrp(name: string): boolean {
  return PRG_EXT_RE.test(name);
}

export function listPrgFiles(files: FileList | File[]): PickedFile[] {
  const out: PickedFile[] = [];
  const all = Array.from(files);
  for (const file of all) {
    if (!isPrgOrGrp(file.name)) continue;
    // `webkitRelativePath` is populated when the input uses `webkitdirectory`;
    // empty for single-file selection.
    const relativePath = (file as File & { webkitRelativePath?: string }).webkitRelativePath || file.name;
    const ext = (file.name.match(PRG_EXT_RE)?.[1] ?? "").toLowerCase();
    out.push({ name: file.name, relativePath, ext, file });
  }
  out.sort((a, b) => a.relativePath.localeCompare(b.relativePath));
  return out;
}

export async function readFileBytes(file: File): Promise<Uint8Array> {
  const buffer = await file.arrayBuffer();
  return new Uint8Array(buffer);
}
