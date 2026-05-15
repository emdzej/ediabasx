// Browser-safe subpath. Import only this when bundling for the web —
// `./index` pulls in `GatewayServer`, which in turn statically imports
// `node:net`, `node:http`, and `ws`, none of which resolve in a browser.
//
// The full index re-exports this, so Node consumers can keep using
// `import { GatewayClient } from "@emdzej/ediabasx-interfaces"` without
// caring about the subpath.

export { GatewayClient } from "./gateway-client";
export type {
  GatewayClientOptions,
  GatewayClientTransport
} from "./gateway-client";
