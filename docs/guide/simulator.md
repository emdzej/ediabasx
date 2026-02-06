# Simulator

## What is the simulator?
The simulator is an interactive tool for testing EDIABAS communication without real hardware. It lets you respond to requests manually and observe raw traffic.

## Start the Simulator

```bash
ediabas simulator
```

Options (from `ediabas simulator --help`):
- `--host <host>` (default: `127.0.0.1`)
- `--port <port>` (default: `6802`)
- `--mode <mode>` (default: `text`, options: `text|hex`)
- `--line-ending <ending>` (default: `crlf`, options: `crlf|lf|raw`)

Example:

```bash
ediabas simulator --host 0.0.0.0 --port 6802 --mode hex
```

## Human-in-the-Loop Testing
Use the simulator to:
- Prototype workflows before hardware is available
- Inspect and validate request/response patterns
- Debug higher-level tooling

## RAW / HEX Panels
The simulator UI provides raw/hex views of traffic so you can verify byte-level communication and adjust responses accordingly.

## Responding to JSON-RPC Requests
When connected via the gateway interface, the simulator receives JSON-RPC requests. You can provide responses interactively to emulate an ECU.
