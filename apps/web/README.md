# @emdzej/ediabasx-web

Browser SPA for [EdiabasX](https://github.com/emdzej/ediabasx). Pick a PRG/GRP file, configure an interface, browse jobs, and run them against an ECU over **Web Serial** — all in the browser, no backend, no upload.

## Stack

- [Svelte 5](https://svelte.dev/) (runes) + TypeScript
- [Vite](https://vitejs.dev/) for dev/build
- [TailwindCSS](https://tailwindcss.com/) for styling
- `@emdzej/ediabasx-best-parser`, `@emdzej/ediabasx-interpreter`, `@emdzej/ediabasx-ediabas`, `@emdzej/ediabasx-interface-serial` (`WebSerialTransport`)

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
