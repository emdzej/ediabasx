/**
 * Embedded build helpers — when ediabasx-web is hosted by the dongle
 * itself (`vite --mode embedded`), the SPA's connection config is
 * locked to the dongle's HTTP origin instead of letting the user
 * pick. See `vite.config.ts` for the build-mode contract.
 *
 * Two endpoints, both same-origin:
 *
 *   • `ws://<origin>/rpc/ediabasx` — JSON-RPC IEdiabas server the
 *     dongle exposes. ediabasx-client opens this socket and the rest
 *     of the app talks to it through the standard IEdiabas surface.
 *   • `http://<origin>/data` — reserved for the install/VFS path;
 *     ediabasx-web doesn't consume it directly (client mode skips
 *     the local install picker entirely — the server owns the SGBD
 *     catalogue), but it's surfaced here so the other web apps
 *     (inpax-web / ncsx-web / nfsx-web) can use the same helper
 *     when they get their embedded builds.
 *
 * The constant `isEmbedded` is a `define` substitution — every
 * `if (!isEmbedded)` block tree-shakes out of the embedded build,
 * and vice versa, so there's no runtime cost in either bundle.
 */

/** Set to `true` by `vite --mode embedded`; `false` otherwise. */
export const isEmbedded: boolean = __EMBEDDED__;

/**
 * Endpoints the dongle serves alongside the SPA. Computed lazily so
 * the origin is read fresh on every call — handy if a future build
 * ever runs ediabasx-web behind a proxy that rewrites the host
 * mid-session (unlikely, but cheap to keep flexible).
 */
export function embeddedEndpoints(): {
  serverWsUrl: string;
  installHttpBase: string;
} {
  const origin = window.location.origin;
  return {
    /* `replace(/^http/, 'ws')` covers both `http:` → `ws:` and
       `https:` → `wss:` (the regex anchors on the start so the
       trailing `s` survives). The dongle's default HTTP scheme is
       `http:` since the SoftAP cert chain on ESP32 is awkward to
       provision, but a reverse-proxied production deploy might
       still front it with TLS. */
    serverWsUrl: `${origin.replace(/^http/, "ws")}/rpc/ediabasx`,
    installHttpBase: `${origin}/data`,
  };
}
