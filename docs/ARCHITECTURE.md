# Architecture

## Overview
EDIABAS TypeScript is a modern, modular implementation of BMW’s EDIABAS diagnostic stack. It parses PRG/GRP files, executes BEST/1 bytecode jobs, and communicates with ECUs via pluggable hardware interfaces (serial/K+DCAN/ENET or remote gateway). The monorepo exposes a high-level API (`@ediabas/ediabas`) and a CLI (`ediabas`).

## Monorepo Structure (high level)
- **Parsing & Core:** `@ediabas/core`, `@ediabas/best-parser`
- **Execution:** `@ediabas/interpreter`
- **Interfaces:** `@ediabas/interface-base`, `@ediabas/interface-serial`, `@ediabas/interface-enet`, `@ediabas/interfaces`
- **Protocols:** `@ediabas/protocol-uds`, `@ediabas/protocol-kwp`, `@ediabas/protocol-doip`
- **API & CLI:** `@ediabas/ediabas`, `@ediabas/cli`

## Data Flow
```mermaid
flowchart LR
  PRG[PRG/GRP file] --> Parser[@ediabas/best-parser]
  Parser --> Interpreter[@ediabas/interpreter]
  Interpreter --> Interface[@ediabas/interface-*]
  Interface --> ECU[(ECU)]
```

**Example runtime path (CLI):**
1. CLI loads PRG/GRP → parser builds AST/metadata.
2. Interpreter executes BEST/1 bytecode for a job.
3. Interpreter calls `CommunicationInterface` methods (send/receive/etc.).
4. The active `EdiabasInterface` implementation talks to the ECU.

## Key Abstractions
- **`Ediabas` (high-level API)**
  - Located in `@ediabas/ediabas`.
  - Loads SGBD (PRG/GRP), exposes jobs, executes jobs, and returns typed results.

- **`EdiabasInterface` (hardware abstraction)**
  - Base class in `@ediabas/interface-base`.
  - Defines `connect`, `disconnect`, `send`, `receive`, and hardware-specific helpers (ports, voltages, raw data).
  - Implemented by `SerialInterface`, `EnetInterface`, and `GatewayClient`.

- **`CommunicationInterface` (interpreter adapter)**
  - A thin adapter passed to the interpreter (subset of `EdiabasInterface`).
  - Used by communication opcodes (x* operations) in the VM.

- **Parser (`@ediabas/best-parser`)**
  - Reads PRG/GRP binary format, applies XOR decoding, exposes metadata, jobs, tables, and bytecode.

- **Interpreter (`@ediabas/interpreter`)**
  - BEST/1 VM implementation: registers, stack, flags, opcode decoding, and execution.
  - Handles `erg*` result generation and `x*` communication instructions.

- **Gateway (JSON-RPC server/client)**
  - `GatewayServer` exposes any interface via TCP JSON-RPC.
  - `GatewayClient` allows remote usage from CLI or API.

## Class Collaboration Diagrams

### Job Execution Flow
```
Ediabas (high-level API)
    │
    ├── loadFile(path) 
    │       └── BestParser.parse() → PrgFile
    │
    └── executeJob(name, params)
            │
            ├── Interpreter(prgFile)
            │       ├── RegisterSet (I0-I15, S0-S15, F0-F7)
            │       ├── Flags (carry, zero, timer, etc.)
            │       ├── CallStack / DataStack
            │       └── execute(jobName, options)
            │               └── opcodes call CommunicationInterface methods
            │
            └── CommunicationInterface (adapter)
                    │
                    └── EdiabasInterface (actual implementation)
                            ├── SimulationInterface
                            ├── SerialInterface
                            │       ├── NodeSerialTransport
                            │       ├── Kwp2000Session
                            │       └── DcanSession
                            └── EnetInterface
```

### Interface Layer Detail
```
EdiabasInterface (abstract)
    ├── connect() / disconnect()
    ├── send(data) / receive(timeout)
    ├── stopFrequent()
    ├── getPort() / setPort()
    ├── ignitionVoltage / loopTest
    └── rawData() / switchSiRelais()

SerialInterface extends EdiabasInterface
    │
    ├── SerialTransport (abstraction)
    │       └── NodeSerialTransport (node:serialport)
    │
    ├── Protocol handling
    │       ├── K-Line init (5-baud / fast-init)
    │       ├── KWP2000 session management
    │       └── D-CAN mode switching
    │
    └── Kwp2000Session / DcanSession
            └── Protocol-specific framing & timing
```

### Interpreter ↔ Interface Adapter
```ts
// In ediabas.ts
const commAdapter: CommunicationInterface = {
    connect: () => this.commInterface.connect(),
    disconnect: () => this.commInterface.disconnect(),
    send: (data) => this.commInterface.send(data),
    receive: (timeout) => this.commInterface.receive(timeout),
    stopFrequent: () => this.commInterface.stopFrequent(),
    getPort: (idx) => this.commInterface.getPort(idx),
    setPort: (idx, val) => this.commInterface.setPort(idx, val),
    // ... all mapped methods
};
```

## Key Class Responsibilities

| Class | Package | Responsibility |
|-------|---------|----------------|
| `Ediabas` | @ediabas/ediabas | High-level API, orchestrates parsing + execution |
| `BestParser` | @ediabas/best-parser | Parses PRG/GRP binary files into PrgFile structure |
| `Interpreter` | @ediabas/interpreter | Executes bytecode, manages registers, calls interface |
| `RegisterSet` | @ediabas/interpreter | I0-I15, S0-S15, F0-F7 register storage |
| `ResultCollector` | @ediabas/interpreter | Collects job results (ergb, ergs, etc.) |
| `EdiabasInterface` | @ediabas/interface-base | Abstract interface contract |
| `SimulationInterface` | @ediabas/interface-base | Mock interface for testing |
| `SerialInterface` | @ediabas/interface-serial | K-Line/K+DCAN via serial port |
| `EnetInterface` | @ediabas/interface-enet | BMW ENET via TCP/IP |
| `createInterface` | @ediabas/interfaces | Factory for interface creation |

## Sequence Diagrams

### Simple Job Execution
```
User                CLI                 Ediabas             Interpreter         Interface
  │                  │                    │                     │                   │
  │─ run file job ──►│                    │                     │                   │
  │                  │─── loadFile() ────►│                     │                   │
  │                  │                    │── parse PRG ───────►│                   │
  │                  │◄── PrgFile ────────│                     │                   │
  │                  │─ executeJob() ────►│                     │                   │
  │                  │                    │── new Interpreter ─►│                   │
  │                  │                    │── execute(job) ────►│                   │
  │                  │                    │                     │── xconnect ──────►│
  │                  │                    │                     │◄─── ok ───────────│
  │                  │                    │                     │── xsend(data) ───►│
  │                  │                    │                     │◄─── ok ───────────│
  │                  │                    │                     │── xrecv ─────────►│
  │                  │                    │                     │◄── response ──────│
  │                  │                    │◄── results[] ───────│                   │
  │◄─ display ───────│                    │                     │                   │
```
