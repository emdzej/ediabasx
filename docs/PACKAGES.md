# Packages

This repository is a pnpm monorepo (Turborepo). Packages live under `packages/`.

## Package Index
- **`@ediabas/core`** — shared types, errors, encoding (CP1252), and helpers.
- **`@ediabas/best-parser`** — PRG/GRP binary parser + disassembler.
- **`@ediabas/interpreter`** — BEST/1 bytecode interpreter (VM, registers, opcodes).
- **`@ediabas/interface-base`** — abstract `EdiabasInterface` + `SimulationInterface`.
- **`@ediabas/interface-serial`** — K-Line / K+DCAN serial adapter implementation.
- **`@ediabas/interface-enet`** — BMW ENET (Ethernet) interface.
- **`@ediabas/interfaces`** — interface registry, factory, gateway server/client.
- **`@ediabas/protocol-uds`** — UDS / ISO-TP protocol helpers.
- **`@ediabas/protocol-kwp`** — KWP2000 / KWP1281 protocol helpers.
- **`@ediabas/protocol-doip`** — DoIP protocol helpers (Diagnostics over IP).
- **`@ediabas/ediabas`** — high-level API combining parser + interpreter + interface.
- **`@ediabas/cli`** — command-line interface + TUI tools.
