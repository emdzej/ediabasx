# Interfaces and transports

ediabasx splits "how do I talk to a vehicle?" into two layers, mirroring
how EdiabasLib (the C# reference port) is structured but with concrete
type names you can grep for in this repo:

- **Interface** — `EdiabasInterface` subclass. Implements the higher-
  level protocol logic the `Ediabas` instance calls into (`connect`,
  `send`, `receive`, `rawData`, `ignitionVoltage`, …). Equivalent to
  EdiabasLib's `EdInterface*` family or the original IFH DLLs
  (`OBD32`, `XEnet32`, `XNul32`).
- **Transport** — `SerialTransport` (or a TCP socket). Pure byte-level
  I/O — open / configure / read / write / setDtr / setRts / purge.
  No knowledge of KWP, DS2, ISO-TP, etc. Only `SerialInterface`
  consumes a `SerialTransport`; the other interface implementations
  own their I/O directly (Ethernet socket, in-memory, RPC).

The split lets the same `SerialInterface` (with all its K-line and
CAN protocol logic) run unchanged against three completely different
backing transports: a node-serialport device path in CLI, a Web Serial
port object in the browser, and a mock byte buffer in tests.

## Interface implementations

| Class                  | Package                              | Wire / Protocol                                              | Backed by                                   |
| ---------------------- | ------------------------------------ | ------------------------------------------------------------ | ------------------------------------------- |
| `SimulationInterface`  | `@emdzej/ediabasx-interface-base`    | none — synthesises responses in memory                       | —                                           |
| `SerialInterface`      | `@emdzej/ediabasx-interface-serial`  | K-line (KWP1281, KWP2000/BMW-Fast, DS2) + CAN (TP2.0, ISO-TP via a K+DCAN adapter) | a `SerialTransport` you inject              |
| `EnetInterface`        | `@emdzej/ediabasx-interface-enet`    | DoIP / BMW HSFZ over Ethernet                                | a TCP socket the class owns                 |
| `GatewayClient`        | `@emdzej/ediabasx-interfaces`        | JSON-RPC over TCP to a remote `GatewayServer`                | a TCP socket the class owns                 |

The shared contract is `EdiabasInterface` in
`packages/interface-base/src/EdiabasInterface.ts` — every interface
exposes the same abstract surface, so `Ediabas` doesn't know or care
which one is plugged in.

## Transport implementations

`SerialTransport` (in `packages/interface-serial/src/types.ts`) is the
only one of these that gets injected. It exists because `SerialInterface`
has to run in both Node and the browser, but each has a different
byte-level I/O surface.

| Class                 | Package export                                       | Runs in        | Underneath                                                   |
| --------------------- | ---------------------------------------------------- | -------------- | ------------------------------------------------------------ |
| `NodeSerialTransport` | `@emdzej/ediabasx-interface-serial/node`             | Node only      | `serialport` npm package → OS serial driver (FTDI, CDC, …)   |
| `WebSerialTransport`  | `@emdzej/ediabasx-interface-serial`                  | browser only   | `navigator.serial` (Chromium-based browsers, desktop)         |
| `MockSerialTransport` | `@emdzej/ediabasx-interface-serial`                  | tests          | scripted read/write queue                                     |

`NodeSerialTransport` lives behind a subpath export so the browser
bundle never sees `serialport` and avoids the unconditional native
binding. The package's main entrypoint is browser-safe.

## Valid pairings

```
                 ┌──────────────────────────────────────────────┐
                 │                  Ediabas                     │
                 │   (loads SGBD, runs BEST2 jobs, owns state)  │
                 └────────────────────────┬─────────────────────┘
                                          │  EdiabasInterface
                ┌─────────────────────────┼──────────────────────────────┐
                ▼                         ▼                              ▼
   ┌───────────────────────┐   ┌───────────────────────┐   ┌──────────────────────────┐
   │  SimulationInterface  │   │   SerialInterface     │   │  EnetInterface           │
   │  (synthetic ECU)      │   │ ┌───────────────────┐ │   │  (TCP / DoIP / HSFZ)     │
   └───────────────────────┘   │ │ SerialTransport   │ │   └──────────────────────────┘
                               │ │  ┌─NodeSerial─┐   │ │
                               │ │  ├─WebSerial──┤   │ │   ┌──────────────────────────┐
                               │ │  └─Mock───────┘   │ │   │  GatewayClient           │
                               │ └───────────────────┘ │   │  (JSON-RPC → remote      │
                               └───────────────────────┘   │   GatewayServer wrapping │
                                                           │   one of the above)      │
                                                           └──────────────────────────┘
```

Pairings that exist in the codebase today:

| Pairing                                | Where it's wired                                                 |
| -------------------------------------- | ---------------------------------------------------------------- |
| `SimulationInterface` (standalone)     | CLI default; browser apps when `interface === "simulation"`      |
| `SerialInterface` + `NodeSerialTransport` | CLI `--interface serial` / `--interface kdcan`                |
| `SerialInterface` + `WebSerialTransport`  | ediabasx-web (`interface === "webserial"`) and inpax-web      |
| `SerialInterface` + `MockSerialTransport` | unit tests in `packages/interface-serial/src/__tests__/`      |
| `EnetInterface` (standalone)           | CLI `--interface enet`                                            |
| `GatewayClient` (standalone)           | CLI `--interface gateway`                                         |

Pairings that are technically possible but unused:

- `EnetInterface` in the browser — would need a WebSocket bridge to a
  remote ENET gateway; not implemented yet. The browser-side workaround
  is to point `GatewayClient` at a `GatewayServer` running on a host
  that owns the ENET cable.
- `SerialInterface` + `WebSerialTransport` from Node — would need
  Chromium-headless or a polyfill; no real use case.

## CLI interface names

The CLI accepts an `--interface <name>` flag (or `interface` field in
`~/.config/ediabasx/config.json`). The names are registered in
`packages/interfaces/src/registry.ts`:

| `--interface` value | Resolves to                                          | Notes                                                                                          |
| ------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `simulation`        | `SimulationInterface`                                | Default when no interface is specified anywhere.                                              |
| `serial`            | `SerialInterface` + `NodeSerialTransport`            | Generic K-line / KWP adapter. Default baud 9600. Adapter probe runs but typically fails → drops to passthrough at the configured baud. |
| `kdcan`             | `SerialInterface` + `NodeSerialTransport`            | Smart K+DCAN cable. Default baud 115200. Adapter probe runs and is expected to succeed; the cable then handles both K-line and CAN sessions transparently. |
| `enet`              | `EnetInterface`                                      | DoIP / HSFZ Ethernet. Needs `--enet-host` (and optionally `--enet-port`, default 6801).        |
| `gateway`           | `GatewayClient`                                      | JSON-RPC client. Point with `--gateway HOST:PORT` (or `--gateway-host`, `--gateway-port`).     |

`serial` and `kdcan` instantiate the **same** `SerialInterface` class
against the **same** `NodeSerialTransport` — the only difference is
the default option values (baud rate, probe behaviour) and the
documented intent. `serial` is the "treat me as a dumb cable" mode;
`kdcan` is the "this is a smart adapter, probe it" mode. At runtime
the script's `setComm` opcode can still flip the protocol from KWP
to ISO-TP regardless, because the underlying `SerialInterface`
implements all four protocols.

## Web app interface names

The browser SPAs have their own `interface` field in `lib/config.ts`
(persisted to localStorage). The accepted values:

| `interface` value | Resolves to                                          | Notes                                                                                   |
| ----------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `simulation`      | `SimulationInterface`                                | Same as CLI.                                                                            |
| `webserial`       | `SerialInterface` + `WebSerialTransport`             | Web-only label — there's no `webserial` entry in the registry, because the browser apps don't go through the CLI factory. Requires Chromium-based browser on desktop (Chrome / Edge / Opera). |

ediabasx-web and inpax-web both pick `webserial` for the
`SerialInterface` + `WebSerialTransport` pairing; the user gesture
(Connect button click) calls `navigator.serial.requestPort()` and the
returned `SerialPort` is wrapped into a `WebSerialTransport`.

## How this maps to EdiabasLib

EdiabasLib ships several `EdInterface*` classes; ediabasx collapses
them to fewer concrete classes by moving the "K-line vs CAN" split
inside `SerialInterface` itself (the `setComm` opcode selects which
session to build at runtime, rather than the user picking a different
DLL up-front).

| EdiabasLib / IFH DLL    | ediabasx equivalent                                                       |
| ----------------------- | ------------------------------------------------------------------------- |
| `EdInterfaceObd` / `OBD32` (K-line, DS2, KBUS, also routes K+DCAN cables) | `SerialInterface` with `protocol = uart/kwp` (K-line) or with adapter probe detecting a K+DCAN cable |
| `EdInterfaceEdic`       | not yet ported                                                            |
| `EdInterfaceEnet` / `XEnet32` (BMW ENET / DoIP) | `EnetInterface`                                                |
| `XNul32` (simulation)   | `SimulationInterface`                                                     |
| `XStd32` (DLL shim that loads the real serial driver) | no equivalent — the factory in `packages/interfaces/src/factory.ts` resolves the right transport directly |
| `EdElmInterface` (ELM327) | not yet ported                                                          |

The CAN protocols themselves (TP2.0, ISO-TP, K+DCAN telegram framing)
live in `packages/interface-serial/src/kdcan/` and are reusable by
any future interface — they only depend on the `SerialTransport`
contract, not on Node-specific APIs.

## Picking the right config — practical guide

| Hardware you have                                          | CLI                                          | Web app                |
| ---------------------------------------------------------- | -------------------------------------------- | ---------------------- |
| Nothing — just want to load an SGBD and inspect jobs       | `--interface simulation` (or no flag)        | `simulation`           |
| Generic FTDI USB-Serial cable, K-line only                 | `--interface serial --serial-port <path>`    | `webserial` + matching baud |
| BMW K+DCAN smart cable (sold for INPA/Tool32)              | `--interface kdcan --serial-port <path>`     | `webserial` (probe is disabled in the browser path; the cable still works as passthrough) |
| BMW ENET cable plugged into an F-/G-/I-series OBD port     | `--interface enet --enet-host <ip>`          | not supported yet      |
| Another machine has the cable and is running `ediabasx gateway` | `--interface gateway --gateway HOST:PORT` | not directly — would need a WebSocket bridge |

The web-app `webserial` choice will still route K-line jobs over
K-line and CAN jobs over CAN at runtime, because that decision is the
script's, not the user's. The `protocol` field in settings is just
the initial value before the SGBD's `setComm` runs.
