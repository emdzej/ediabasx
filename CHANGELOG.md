# Changelog

All notable changes to the EdiabasX monorepo. Package versions move in lockstep — every public package in `packages/` and `apps/` carries the same version after a bump.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), versions follow [Semantic Versioning](https://semver.org/) with the usual 0.x caveat (minor bumps may still carry breaking changes when the surface is small).

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
