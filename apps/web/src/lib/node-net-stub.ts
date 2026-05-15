// Browser stub for `node:net`. The TCP transport in
// `@emdzej/ediabasx-interfaces` lazy-imports this module, but the web
// app only ever uses the WebSocket transport, so the stub is never
// invoked at runtime. If anyone *does* reach this code path it means
// the runtime tried to open a raw TCP socket from a browser, which is
// unsupported — throw a clear error instead of returning a fake socket.

function unsupported(): never {
  throw new Error(
    "Gateway TCP transport is not supported in the browser — use the WebSocket transport (ws:// or wss://)."
  );
}

export const createConnection = unsupported;
export default { createConnection };
