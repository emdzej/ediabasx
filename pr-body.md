## Summary

Adds the gateway client, CLI commands, and run integration for remote EDIABAS communication over JSON-RPC.

## Changes

- Added `GatewayClient` (JSON-RPC over TCP) with tests.
- Extended gateway server to support `receive` and added coverage.
- Added `ediabas gateway` CLI command to start the gateway server.
- Integrated `--gateway host:port` option into `ediabas run`.
- Updated interface registry to include the gateway interface metadata.

## Testing

- `pnpm test` (interfaces package)

## Closes

Closes #126
Closes #127
Closes #128
Closes #129
Closes #130
