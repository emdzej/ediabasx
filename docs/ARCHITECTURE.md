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
