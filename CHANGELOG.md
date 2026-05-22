# Changelog

All notable changes to the EdiabasX monorepo. Package versions move in lockstep — every public package in `packages/` and `apps/` carries the same version after a bump.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), versions follow [Semantic Versioning](https://semver.org/) with the usual 0.x caveat (minor bumps may still carry breaking changes when the surface is small).

## [0.2.6] — 2026-05-22

### Fixed

- **`not` opcode (0x0A) no longer throws "Cannot read value from
  operand".** The unary `not` bytecode op was wired through the
  shared two-operand `arithmeticReadModifyWrite` helper with a
  synthetic `{ kind: "none" } as Operand` for `arg1`, and the helper
  unconditionally called `readPolyValue(state, arg1, len)`.
  `readPolyValue` had no branch for `kind === "none"` and fell
  through to its terminal `throw new EdiabasError(INVALID_INSTRUCTION,
  "Cannot read value from operand")` — every job that hit a `not`
  aborted with that message.

  Anchor: BMW E46 `KOMBI46R.prg::C_CHECKSUM` runs `not L0` inside its
  post-coding verify path. NCS Expert's `SG_CODIEREN` flow trips it
  after the per-chunk `C_S_AUFTRAG` write loop completes — 16
  successful `C_S_AUFTRAG`s then `C_CHECKSUM` blows up. Earlier
  release-blocking work (binary-param NUL fix in 0.2.5, slot table
  seeding, auth flow) all had to land first before this surfaced as
  the next gate.

  Fix mirrors C# `OpNot` (`EdOperations.cs:1753`) exactly: it touches
  `arg0` only — the `(arg0, arg1)` signature stays uniform for
  dispatch but `arg1` is genuinely ignored. The JS port now has a
  dedicated `unaryReadModifyWrite` helper alongside the binary one
  (rather than papering over the shape mismatch in `readPolyValue`,
  which would have left the "binary helper requires two real
  operands" invariant weaker). Opcode 0x0A is the only unary
  arithmetic op currently routed through the shared helper, so this
  is a one-site change.

  Regression: three new tests in `interpreter.spec.ts` execute
  opcode 0x0A at the bytecode level (not the higher-level `not`
  helper that already worked) — `not L0` on `0x12345678` with the
  expected `0xEDCBA987` + Z/S/V flags, `not L0` on `0xFFFFFFFF`
  setting Z, and `not B0` on `0x0F` exercising the 8-bit width path.

  (`@emdzej/ediabasx-interpreter`)

## [0.2.5] — 2026-05-21

### Fixed

- **Binary write paths no longer append a stray `\0` terminator.**
  Three opcodes that should mirror C# `Operand.SetArrayData(byte[])`
  (raw pass-through) were routed through the string-write path
  (`setStringValue` → CP1252 → "append `\0` if not already there"):

  | Opcode    | C# reference (`EdOperations.cs`) | What the JS port was doing |
  |---|---|---|
  | `pary`    | line 1861 — `arg0.SetArrayData(result)`             | `setStringValue(... cp1252ToUtf8(payload))` |
  | `freadln` | line 1091 — `arg0.SetArrayData(Encoding.GetBytes(line))` | `setStringValue(... cp1252ToUtf8(data))` |
  | `shmget`  | line 2136 — `arg0.SetArrayData(data)`               | `setStringValue(... cp1252ToUtf8(value))` |

  Effect: whenever the payload's last byte wasn't already `0x00`, the
  destination S register grew by one — silently. Anything inside the
  SGBD that `slen`'d or `scmp`'d the result hit a one-off mismatch.

  Discovered porting BMW NCS coding: `C_S_LESEN` passes because the
  IPO pre-fills its scratchpad with zeros so the buffer's last byte
  is `0x00` and the NUL-append no-ops; `C_S_SCHREIBEN` ships the
  *actual* coding bytes (last byte `0x0A` on a real GETRIEBEART
  window), the bug fires, and the SGBD aborts with
  `JOB_STATUS = "ERROR_BIN_BUFFER"` — purely from the 1-byte skew on
  the `slen L0, S2; comp L0, 0x16 + wordCount*wortBreite` length
  check. `freadln` and `shmget` were latent — same shape, no
  reported reproducer yet — fixed in the same pass to keep the three
  binary-write call sites consistent with the reference.

  Fix: each opcode now writes through `setBinaryValue` (which routes
  to `RegisterSet.setSBinary`) so `sLengths[reg]` equals
  `payload.length` exactly — same `SetArrayData` semantics the C#
  reference has. `pars` (which legitimately wants the NUL-append) is
  unchanged.

  Regression coverage in `parameters.spec.ts` (five cases — both
  zero- and non-zero-tailed payloads, terminator-style payloads, the
  real NCS coding write packet, and the `Z`-flag on empty payloads),
  `file.spec.ts` and `shared-memory.spec.ts` (added byte-length
  asserts for non-zero-tailed payloads + the missing-key /
  EOF length-0 cases).

  (`@emdzej/ediabasx-interpreter`)

## [0.2.4] — 2026-05-21

### Added

- **`Ediabas.executeJob` accepts `Uint8Array` parameters.** The
  `params` option is now typed `(string | Uint8Array)[]` (was
  `string[]`); each element is routed to the BEST/2 parameter channel
  that matches its type:

  | Element type | Channel  | BEST/2 opcodes that read it                       | C API |
  |---|---|---|---|
  | `string`     | per-index `parameters[i]` | `pari` / `pars`          | `apiJob`     |
  | `Uint8Array` | shared `binaryPayload`    | `pary` / `parb` / `parw` / `parl` / `parr` | `apiJobData` |

  Pure widening — every existing caller passing `string[]` still
  type-checks unchanged. Mixed-shape calls (some string, some binary
  in the same job) are supported; the binary payload is shared across
  all `parY` reads while strings are per-position.

  **What this unblocks.** Binbuf-driven SGBDs — BMW NCS coding
  (`C_S_LESEN`, `C_S_SCHREIBEN`, `C_S_AUFTRAG` on K-line; F-series
  equivalents) and any other job whose entry point starts with
  `pary S1; jz ERROR_NO_BIN_BUFFER` — were unreachable from outside
  the interpreter pre-fix. Hex-encoding the bytes into a string
  parameter doesn't work because that lands in the *string* channel,
  not `binaryPayload`; the SGBD's `pary` saw an empty buffer and the
  job aborted with `JOB_STATUS = "ERROR_NO_BIN_BUFFER"`. Now:

  ```ts
  const para = new Uint8Array([0x01, 0x02, /* … */]);
  const sets = await ediabas.executeJob("C_S_LESEN", { params: [para] });
  ```

  routes the bytes into `binaryPayload`, `pary` reads them, and the
  prologue gate passes.

  Implementation: the routing decision lives in a new `paramToEntry`
  helper exported from `@emdzej/ediabasx-ediabas` (also used internally
  by `executeJobRaw` for the INITIALISIERUNG path). Unit tests pin the
  four routing cases (string / empty string / Uint8Array / empty
  Uint8Array). `runJobInternal` widened in parallel.
  (`@emdzej/ediabasx-ediabas`)

## [0.2.3] — 2026-05-20

### Changed

- **S registers now store raw `Uint8Array` buffers natively, not
  CP1252-decoded JS strings.** Mirrors C# `EdiabasLib`'s `StringData`
  shape: a fixed-capacity `_data: Uint8Array` paired with a logical
  `_length`. The codec only runs at the string-view boundary (`getS`
  / `setS`); every other path — `getSBinary`, `setSBinary`, indexed
  byte ops, `scmp` byte-array compares — operates on raw bytes
  end-to-end.

  - **All 256 byte values round-trip bit-exact through
    `setSBinary` / `getSBinary`.** This obsoletes the 0.2.2
    encode-table patch as a load-bearing fix for binary buffers
    (it remains useful at the string boundary).
  - **`getS()` now terminates at the first `0x00` byte** (matches
    C# `Operand.GetStringData`). The old behaviour stripped only a
    single trailing NUL; the new behaviour stops at any embedded
    `0x00`. `setStringValue` still appends a NUL terminator for
    `scmp` parity, so BEST2-program-visible semantics are unchanged
    for the canonical write-then-read path. The `stripNullTerminator`
    helper in `operations/register-values.ts` is gone — its job is
    now done inside `getS`.
  - **`getSBinary()` returns a fresh copy** of the live `[0, length)`
    slice rather than a view, matching C# `StringData.GetData(false)`'s
    `Array.Copy` semantics. Callers that mutate the result no longer
    risk corrupting the register.
  - **Non-CP1252 characters fall back to `'?'` (0x3F) on `setS`,**
    matching `Encoding.GetEncoding(1252).GetBytes(...)` in the C#
    reference. Previously the JS-string-as-storage model preserved
    arbitrary Unicode verbatim — convenient for tests but not what
    real EDIABAS does. The smiley `☺` (U+263A) now round-trips to
    `?` consistently.
  - **`setSBinary` overflow still truncates silently** at
    `maxStringSize`. C# raises `EDIABAS_BIP_0001` ("string size
    exceeded") via `SetError`; plumbing that error code through
    `RegisterSet` is a TODO. Tests document the gap.

  4 new regression tests under `string.spec.ts` `describe("byte-backed
  storage")` lock the invariants (FA byte pattern incl. previously-broken
  CP1252 slots, NUL-terminator semantics on `getS`, overflow truncation,
  tail-zeroing on shrinking writes). Total interpreter suite: 688 passing
  (was 684).

  See `docs/s-register-refactor-proposal.md` for the original design
  intent and the C# parity argument. (`@emdzej/ediabasx-interpreter`)

## [0.2.2] — 2026-05-20

### Fixed

- **CP1252 round-trip preserves all 256 byte values, including the five
  "undefined" slots (`0x81, 0x8D, 0x8F, 0x90, 0x9D`).** Previously the
  encode table built by `getEncodeTable()` deliberately excluded those
  five slots so an inbound `U+0081` (etc.) would fall back to `'?'`
  (`0x3F`) rather than producing the "officially undefined" CP1252
  byte. That was the wrong trade-off for an interpreter that uses S
  registers as binary byte buffers: any `move S[#$N], B` of one of
  those five byte values followed by an immediate readback came back
  as `0x3F`, silently corrupting counters / response data / packed
  structs that happened to cross those bytes.

  Anchor: `C_KMB46.prg!C_FA_LESEN` (job that reads a BMW E46
  vehicle-order data block). The job runs an inner loop counter at
  `S0[#$0..1]` up to a max of `0x180`. When the counter hit `0x81`
  the write-then-read round-trip produced `0x3F`, the counter "wrapped"
  to `0x40`, and the loop spun forever in the `0x40..0x81` range. With
  the encode table fixed, the counter passes `0x81` cleanly and the
  loop terminates at `0x180` as designed. (`@emdzej/ediabasx-core`)

### Documentation

- **`docs/s-register-refactor-proposal.md` (new).** Captures the
  longer-term direction: store S registers as native `Uint8Array`
  instead of UTF-8/CP1252-decoded JS strings, removing the conversion
  from the hot path entirely and eliminating the structural risk that
  this release patches at the codec layer. Migration cost, risks, and
  when-to-take-it-on guidance included; the fix in this release is the
  near-term mitigation.

## [0.2.1] — 2026-05-15

### Fixed

- **Gateway server actually exits on `SIGINT` / `SIGTERM`.** The old signal handler closed the listening sockets but left the backing interface connected; with a real cable (e.g. K+DCAN serial), the open port handle kept Node's event loop alive, so the CLI hung after printing "Gateway server shutting down" until the user kicked it harder. The handler now explicitly disconnects the backing interface, then `process.exit(0)`s so any residual event-loop refs (DNS cache timers, lingering serialport callbacks) don't keep the process around. A second signal during shutdown triggers an immediate hard exit so the user is never stuck. Programmatic `stop()` is unchanged — only the auto signal path does the extra cleanup, so library consumers managing their own iface lifecycle aren't surprised. (`@emdzej/ediabasx-interfaces`)

## [0.2.0] — 2026-05-15

### Added

- **Gateway: WebSocket transport.** `GatewayServer` and `GatewayClient` now accept `transport: "tcp" | "websocket"` (default `"tcp"`). WebSocket mode serves the same JSON-RPC 2.0 vocabulary over `http.Server` + `ws.WebSocketServer`, one payload per frame, with plain HTTP requests answered by 426 Upgrade Required. The client uses `globalThis.WebSocket` (Node 22+ / every browser) so the module stays dep-free for browser bundles. New CLI flags: `--transport <tcp|websocket>` on `ediabasx gateway` (server-binding) and `--gateway-transport <tcp|websocket>` / `--gateway-url <url>` on any command that drives a gateway client. (`@emdzej/ediabasx-interfaces`, `@emdzej/ediabasx-cli`)
- **Gateway: transparent BEST2 communication surface.** Server now forwards `setCommParameter` (bulk parameter array used by `xsetpar`), `setAnswerLength`, `setRepeatCounter`, and `transmitData` to the backing interface, with a `setParameter`-loop fallback when the backend only ships the singular setter. Closes the "Set parameters is not supported" failure path during `INITIALISIERUNG` over a gateway. (`@emdzej/ediabasx-interfaces`)
- **Gateway: backend interface summary on startup.** Server prints the active backend (e.g. `Backend interface: KDCAN · /dev/cu.usbserial-A50285BI @ 115200`) alongside the listening line. (`@emdzej/ediabasx-cli`)
- **`Ediabas.setTransport()`.** Late-bind a comm interface into an already-constructed `Ediabas` instance — required by browser hosts that build the `SerialInterface` only after the user picks a Web Serial port. (`@emdzej/ediabasx-ediabas`)
- **`loadSgbdResolver` config hook.** Optional resolver lets browser hosts route both the initial `loadSgbd()` and the post-IDENT `.grp → .prg` swap through a custom source (e.g. `FileSystemDirectoryHandle`) instead of `node:fs`. Node hosts that leave it unset keep the existing behaviour. (`@emdzej/ediabasx-ediabas`)
- **Web app PWA.** `apps/web` is now installable and offline-capable via `vite-plugin-pwa` (precaches the build output, SPA fallback for `/index.html`, autoUpdate). Manifest declares `EdiabasX` with theme/background colours, full icon set generated from `public/icon.svg`. (`@emdzej/ediabasx-web`)
- **Web app: remote gateway over WebSocket.** Wizard now exposes two interfaces — `Web Serial (local cable)` and `Remote gateway (WebSocket)`. The gateway pane takes a single `ws://` / `wss://` URL, prints the matching CLI invocation for copy-paste, and warns on mixed-content (HTTPS page → plain `ws://`). Simulation / ENET / raw serial are dropped from the picker because they need Node-only APIs; older localStorage entries with retired values coerce back to the default. End-to-end confirmed driving a real ECU through `ediabasx gateway --transport websocket` from the browser. (`@emdzej/ediabasx-web`)
- **CI: web app deploy to `ediabasx.bimmerz.app`.** Manual-trigger GitHub Actions workflow that builds `apps/web` and publishes via `actions/deploy-pages` with a `CNAME` file for the custom domain.

### Fixed

- **`xbatt` / `xignit` return constant 12000 mV per EdiabasLib.** `SerialInterface` was returning the K+DCAN adapter's `adapterVoltage` probe byte from `batteryVoltage` / `ignitionVoltage`, but EdiabasLib's `EdInterfaceObd` returns the constant `BatteryVoltageValue` (12000 mV) when DSR is high, 0 otherwise. The probe byte is a separate `AdapterVoltage` property the bytecode never consults. UTILITY.PRG's `STATUS_ZUENDUNG` was always reporting ignition off as a result — now reports on whenever the cable is live, matching EdiabasLib's K-LINE fallback. (`@emdzej/ediabasx-interface-serial`)
- **Auto-IDENT chain no longer double-runs when the user explicitly calls `IDENTIFIKATION` on a `.grp`.** Previously the bootstrap `runIdentAfterInit()` would swap to the resolved `.prg` *before* the user's own `executeJob("IDENTIFIKATION")` ran, so the user's call hit the new `.prg`'s `IDENTIFIKATION` bytecode whose operand layout differs and trips `Unknown register opcode 0x44`. Now the user's explicit call IS the IDENT; a post-job hook captures VARIANTE and does the swap for subsequent jobs. (`@emdzej/ediabasx-ediabas`)
- **Quieter interpreter failures.** The interpreter no longer `console.error`s every failing instruction. Failing pc/opcode/operands are attached as `ediabasInstruction` on the thrown error so callers (web app `job:error`, CLI runner) keep full diagnostic context without spamming DevTools when the provider handles the failure. (`@emdzej/ediabasx-interpreter`)
- **`GatewayClient` is browser-bundleable.** `node:net` was a top-level static import for the TCP transport path, which broke Vite/Rollup browser builds with "Could not read from file: node:net". The import is now a dynamic specifier inside `connectTcp()`. Combined with the new `./client` subpath export, browsers statically reach only the WebSocket-capable surface of `GatewayClient`. (`@emdzej/ediabasx-interfaces`)

### Changed

- **`@emdzej/ediabasx-interfaces` adds a `./client` subpath export.** Importing from `@emdzej/ediabasx-interfaces/client` gives you `GatewayClient` only — no `GatewayServer`, no `ws`, no `node:http` / `node:net` in the static graph. Node consumers can keep using the default `.` entry (unchanged surface); browser bundlers should switch to `/client` for a leaner graph. Web bundle drops ~88 KB (717 → 630) thanks to the cleaner cut.

### Documentation

- **VM audit: `docs/vm-ebas32-audit.md`.** Multi-round audit of the BEST2 VM against the real EBAS32.dll, covering opcode parity, addressing modes, control flow, arithmetic, string handling, file I/O, error trapping, and communication. Documents the remaining divergences (with retraction note on the Xsendf-1..4 mis-read) and serves as the parity reference for future interpreter work.
- **READMEs updated for gateway WebSocket transport and forwarded methods** (root, `apps/cli`, `packages/interfaces`).

## [0.1.3] — 2026-05-11

### Added

- **K+DCAN passthrough baud fallback + KWP-on-kdcan unlock.** `kdcan` interface now accepts `kwp` and `uart` protocols (in addition to `tp20` / `isotp`), and the passthrough cable reconfigures to the user's baud rate when the smart adapter probe fails. Enough to drive BMW INPA DS2 scripts (MS43 et al) past the variant gate end-to-end. (`@emdzej/ediabasx-interfaces`, `@emdzej/ediabasx-interface-serial`)
- **BMW group-file variant resolution.** Auto-IDENT chain after `INITIALISIERUNG`, `.grp → .prg` swap based on the resolved VARIANTE, and a group→variant cache so subsequent runs skip the probe. System result set exposes VARIANTE / JOB_STATUS / ECU info to callers. (`@emdzej/ediabasx-ediabas`)
- **Case-insensitive SGBD file resolution + `.prg`/`.grp` extension swap probe.** Real INPA installs ship lowercase filenames on Unix after a rsync from Windows; scripts hard-code uppercase. Resolver now matches case-insensitively and probes both extensions, returning the canonical ENOENT on miss. (`@emdzej/ediabasx-ediabas`)
- **`batteryVoltage` wired through every interface.** Mirrors EdiabasLib's `BatteryVoltage` property; defaults to 12000 mV when the cable can't physically measure it. (`@emdzej/ediabasx-interface-base` and all transport packages)

[0.2.1]: https://github.com/emdzej/ediabasx/releases/tag/v0.2.1
[0.2.0]: https://github.com/emdzej/ediabasx/releases/tag/v0.2.0
[0.1.3]: https://github.com/emdzej/ediabasx/releases/tag/v0.1.3
