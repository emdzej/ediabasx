# @emdzej/ediabasx-web

Browser SPA for [EdiabasX](https://github.com/emdzej/ediabasx). Two modes:

- **Embedded** — pick a PRG/GRP from disk, connect via Web Serial / J2534 / Gateway, run jobs. All in the browser, no backend, no upload. Chromium-only.
- **Client** — connect to a remote `ediabasx serve` instance. Two connection methods:
  - **Direct** — enter a `ws://host:port` server URL (LAN / VPN).
  - **Bimmerz Connect** — relay-mediated NAT traversal via `connect.bimmerz.app`. The server operator runs `ediabasx serve --connect` and shares a deep link or session token. No port forwarding needed.

### Bimmerz Connect walkthrough

1. Server operator runs `ediabasx serve --connect` (see [CLI docs](../cli/README.md#bimmerz-connect-relay-mediated-remote-access)) and gets a session token + deep link.
2. Remote user opens the deep link — the app auto-connects, switches to client mode, and populates the SGBD sidebar from the server.
3. Alternatively: open the app manually → Settings → Client → Bimmerz Connect → click **Connect** → paste the session token (`sessionId.token` format) in the dialog.

The relay URL defaults to `wss://connect.bimmerz.app` and is configurable in Settings under the Bimmerz Connect panel.

Session tokens are transient (not persisted to localStorage). Refreshing the page after a session expires shows the app in its default state — just connect again with a fresh token.

Deep link format: `https://ediabasx.bimmerz.app?connect=<sessionId.token>`. The URL params are stripped after parsing to prevent stale-session reuse on refresh.

## Stack

- [Svelte 5](https://svelte.dev/) (runes) + TypeScript
- [Vite](https://vitejs.dev/) for dev/build
- [TailwindCSS](https://tailwindcss.com/) for styling
- `@emdzej/ediabasx-best-parser`, `@emdzej/ediabasx-interpreter`, `@emdzej/ediabasx-ediabas`, `@emdzej/ediabasx-interface-serial` (`WebSerialTransport`)
- `@emdzej/swsrs-client` — Bimmerz Connect relay client (lazy-loaded)

## Develop

```bash
pnpm install                    # at the repo root
pnpm web                        # shortcut for `pnpm --filter @emdzej/ediabasx-web dev`
# → http://localhost:5173
```

## Build

```bash
pnpm web:build                  # → apps/web/dist (static SPA, deploy anywhere)
pnpm web:preview                # serve the production bundle locally on :4173
```

## Embedded build (dongle-hosted)

The `embedded` mode targets the [Bimmerz Box](https://github.com/emdzej/bimmerz-box) dongle
scenario, where this SPA is served by the dongle itself at
`http://172.16.7.1/ediabasx/` alongside the `ediabasx-server` process that
owns the K-line / CAN cable. The build differs from the default browser
build in three ways:

- **Connection is locked to the dongle** — `mode: client`, `connectionMethod: direct`,
  `serverUrl: ${origin}/rpc/ediabasx` are hard-set at load time
  (`lib/config.ts`), so no interface / URL wizard is shown.
- **Auto-connect on open** — the `useEmbeddedAutoConnect` hook from
  `@emdzej/bimmerz-ui` opens the RPC session on mount, retries with
  exponential backoff on transient drops (1 → 2 → 4 → 8 → 16 → 30 s cap),
  and disconnects cleanly on `beforeunload` / `pagehide`. The manual
  Connect button is still rendered but is a fallback path.
- **No PWA / service worker** — the dongle has no internet, precache +
  autoUpdate flows are noise on a device the user doesn't manage. Source-
  maps are stripped and the base path is rewritten to `/ediabasx/`.
- **Bimmerz Box `manifest.json`** — a small Vite plugin emits
  `dist-embedded/manifest.json` (name, description, version pulled from
  `package.json`, icon, hardware requirements) so the dongle dashboard
  auto-discovers the app and renders a tile. Schema is documented in
  [bimmerz-box's App manifest section](https://github.com/emdzej/bimmerz-box#app-manifest).

```bash
pnpm web:build:embedded         # → apps/web/dist-embedded/
pnpm web:preview:embedded       # serve dist-embedded/ locally on :4173
# → http://localhost:4173/ediabasx/  (note the /ediabasx/ prefix)
```

Ship `dist-embedded/` to the dongle's HTTP root under `/ediabasx/`. The
Bimmerz Box firmware picks it up from `/sdcard/apps/ediabasx/` — see
[`bimmerz-box`](https://github.com/emdzej/bimmerz-box) for the exact
layout and OTA / SD-card upload paths.

Release builds attach `ediabasx-web-embedded-<version>.zip` to the GitHub
Release so dongle packagers can drop the zip straight onto the SD card
without cloning + building the monorepo.

## Docker

A multi-stage Dockerfile in this directory packages the production build behind nginx.

```bash
# From the monorepo root — build context is the repo so workspace packages resolve.
docker compose -f apps/web/docker-compose.yml up --build
# → http://localhost:8080
```

Override the host port with `EDIABASX_WEB_PORT=9000 docker compose -f apps/web/docker-compose.yml up`.

The image is two stages:

1. **builder** — `node:22-alpine` + `pnpm@10.33.1` via corepack. Copies all workspace package manifests first (better layer caching), runs `pnpm install --frozen-lockfile`, copies sources, runs `pnpm web:build`.
2. **runtime** — `nginx:alpine` serving the static `dist/` with SPA fallback (`try_files $uri /index.html`). Aggressive `Cache-Control: immutable` on `/assets/*` since Vite gives every asset a content hash.

Web Serial requires a **Secure Context**. Plain HTTP on `localhost` works for development; for any other host, terminate TLS at your reverse proxy / load balancer.

## Browser requirements

- **Web Serial** (Run feature): Chrome / Edge / Opera on a desktop OS. Falls back to "Simulation" interface when the API isn't available — the wizard surfaces a warning automatically.
- **File API** + `webkitdirectory`: every modern browser.

## How file picking works

- **Pick folder** — `<input type="file" webkitdirectory>` surfaces every `.prg` / `.grp` file in a directory tree. Mirrors EDIABAS's `ecuPath` layout: drop an `Ecu/` folder in, then click the SGBD you want.
- **Pick a single file** — opens just one PRG/GRP via the standard file picker.
- **Drag & drop** — both modes accept drag-drop into the picker area.

Everything stays in memory; nothing leaves the browser.

## Three tabs

1. **Files** — pick a PRG/GRP and load it into memory.
2. **Configure** — pick an interface (Web Serial or Simulation), fields auto-save to `localStorage`.
3. **Jobs** — list of jobs, with a collapsible Metadata panel, a collapsible Disassembly view, a **Connect** button (runs `navigator.serial.requestPort()` for Web Serial), and a **Run** button. Results render below as one collapsible section per emitted set (matches BMW multi-record output).

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
