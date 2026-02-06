# Getting Started

## What is ediabas?
**ediabas** is a TypeScript implementation of BMW’s EDIABAS (Electronic Diagnostic Basic System). It focuses on parsing and running BMW diagnostic PRG/GRP files and provides a CLI for inspecting files and executing jobs.

## Requirements
- **Node.js** (current LTS recommended)
- **pnpm** or **npm** for installing dependencies
- **Hardware interface** if you plan to talk to a real ECU (see [Interfaces](./interfaces.md))
- BMW **PRG/GRP** files for your ECU

## Installation
This project is a monorepo and the CLI is built from source.

```bash
git clone https://github.com/emdzej/ediabas.git
cd ediabas

# install dependencies
pnpm install

# build all packages
pnpm build
```

If you prefer npm:

```bash
npm install
npm run build
```

## Quick Start
List CLI commands:

```bash
pnpm cli -- --help
# or
node packages/cli/dist/index.js --help
```

Inspect a PRG/GRP file:

```bash
pnpm cli -- info path/to/file.prg
pnpm cli -- jobs path/to/file.prg
```

Run a job in simulation mode:

```bash
pnpm cli -- run path/to/file.prg IDENT --interface simulation
```

Next: learn about interfaces and running jobs in detail:
- [Interfaces](./interfaces.md)
- [Running Jobs](./running-jobs.md)
- [Simulator](./simulator.md)
