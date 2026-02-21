# EdiabasX TypeScript

A TypeScript implementation of BMW's EDIABAS (Electronic Diagnostic Basic System). This project is a modern port of the [EdiabasLib](https://github.com/uholeschak/ediabaslib) C# library, designed for parsing and analyzing BMW vehicle diagnostic description files (PRG/GRP).

## Features

- **PRG/GRP file parsing** - Full support for BMW diagnostic file formats
- **Job and result extraction** - Parse job definitions, arguments, and results
- **Bytecode disassembly** - Disassemble BEST/1 bytecode into readable assembly
- **Table extraction** - Extract lookup tables from diagnostic files
- **CLI tool** - Command-line interface for quick file analysis

## Installation

### From GitHub Packages

```bash
# Create .npmrc in your project
echo "@ediabasx:registry=https://npm.pkg.github.com" >> .npmrc

# Install packages
npm install @ediabasx/ediabas
# or
pnpm add @ediabasx/ediabas
```

> **Note:** You need to authenticate with GitHub Packages. See [GitHub docs](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages).

### From Source

```bash
# Clone the repository
git clone https://github.com/emdzej/ediabasx.git
cd ediabasx

# Install dependencies
pnpm install

# Build all packages
pnpm build
```

## CLI Usage

The CLI tool (`ediabasx`) provides several commands for analyzing PRG/GRP files.

### Info - Quick file summary

```bash
ediabasx info file.prg
```

Example output:
```
File summary
File: d_motor.prg
Jobs: 10
Tables: 0
ECU info
ECU: n/a
Origin: BMW TI-430 Drexel
Revision: 1.14
Author: Softing Taubert, BMW TI-430 Drexel, BMW TP-421 Teepe, BMW TI-430 Haase
ECU comment:
```

### Jobs - List all jobs with arguments and results

```bash
ediabasx jobs file.prg
```

Example output:
```
Jobs
INFO
  Information SGBD
  Results:
    ECU: string - Steuergerät im Klartext
    ORIGIN: string - Steuergeräte-Verantwortlicher
    REVISION: string - Versions-Nummer
    AUTHOR: string - Namen aller Autoren
    COMMENT: string - wichtige Hinweise
    PACKAGE: string - Include-Paket-Nummer
    SPRACHE: string - deutsch, english

INITIALISIERUNG
  Results:
    DONE: int - 1, wenn Okay

STATUS_UBATT
  Auslesen der Spannungsversorgung
  Results:
    JOB_STATUS: string - OKAY, wenn fehlerfrei
    STAT_UBATT: int

ABS_RELAIS
  Schalten des Relais am ABS-STAND
  Args:
    RELAIS: string - "EIN","AUS"
  Results:
    JOB_STATUS: string - "OKAY","ERROR_PARAMETER","ERROR_INTERFACE"
```

### Tables - List tables with row/column counts

```bash
ediabasx tables file.prg
```

Example output:
```
Tables
No tables found.
```

### Parse - Full file parsing with JSON output

```bash
ediabasx parse file.prg --json
```

Outputs complete parsed structure including header, metadata, jobs, and tables in JSON format.

### Disasm - Disassemble bytecode

```bash
ediabasx disasm file.prg
```

Example output:
```
INFO @ 0xA0
  000000A0: clear S1
  000000A3: move S1,"allgemeine Funktionen"
  000000BE: push #$1.L
  000000C4: ergs "ECU",S1
  000000CD: pop L0
  000000D0: clear S1
  000000D3: move S1,"BMW TI-430 Drexel"
  000000EA: push #$1.L
  000000F0: ergs "ORIGIN",S1
  000000FC: pop L0
  ...
  000001EF: eoj
```

### Run - Execute a job with hardware interfaces

```bash
# Serial K-Line
ediabasx run file.prg IDENT --interface serial --serial-port /dev/ttyUSB0 --serial-baud 9600 --serial-protocol kwp

# K+DCAN (ISO-TP)
ediabasx run file.prg IDENT --interface kdcan --serial-port /dev/ttyUSB0 --serial-protocol isotp --serial-tester-can-id 0x7e0 --serial-ecu-can-id 0x7e8

# Run via remote gateway
ediabasx run file.prg IDENT --interface gateway --gateway-host 192.168.1.50 --gateway-port 6801
```

### Gateway - Start a gateway server

```bash
# Expose a serial interface via JSON-RPC
ediabasx gateway --interface serial --serial-port /dev/ttyUSB0 --serial-baud 9600
```

## Library Usage

```typescript
import { createFromConfigFile, Ediabas } from '@ediabasx/ediabas';

// From config file
const ediabas = await createFromConfigFile('./ediabas.config.json');

// Or manually
const ediabas = new Ediabas({
  ecuPath: './ecu',
  simulation: true,
});

// Load SGBD and execute job
await ediabas.loadSgbd('D_MOTOR.prg');
const results = await ediabas.executeJob('IDENT');

console.log(results);
// [{ name: 'ECU', type: 'string', value: 'DME' }, ...]
```

### Configuration File

Create `ediabas.config.json`:

```json
{
  "version": 1,
  "interface": {
    "type": "serial",
    "serial": {
      "port": "/dev/ttyUSB0",
      "baudRate": 9600
    }
  },
  "paths": {
    "sgbd": "./ecu"
  },
  "timeouts": {
    "connect": 5000,
    "response": 2000
  }
}
```

Supported interface types: `simulation`, `serial`, `gateway`, `enet` (WIP), `icom` (WIP).

## Package Structure

This is a pnpm monorepo managed with Turborepo.

```
packages/
├── core/               # Core types, encoding (CP1252), crypto (XOR key: 0xF7)
├── best-parser/        # PRG/GRP file parser
├── cli/                # CLI tool (ediabasx command)
├── ediabasx/            # Main library (combines parser + interpreter)
├── interpreter/        # BEST/1 VM interpreter (planned)
├── interface-base/     # Base interface abstractions
├── interface-enet/     # Ethernet/ENET interface
├── interface-serial/   # Serial/K-Line interface
├── protocol-doip/      # DoIP protocol implementation
├── protocol-kwp/       # KWP2000 protocol implementation
└── protocol-uds/       # UDS protocol implementation
```

### Package Details

| Package | Description |
|---------|-------------|
| `@ediabasx/core` | Core types, CP1252 encoding, XOR decryption |
| `@ediabasx/best-parser` | Parser for PRG/GRP binary files |
| `@ediabasx/cli` | Command-line interface |
| `@ediabasx/ediabas` | Main library combining all components |
| `@ediabasx/interpreter` | BEST/1 bytecode interpreter (WIP) |
| `@ediabasx/interface-*` | Communication interfaces (ENET, Serial) |
| `@ediabasx/protocol-*` | Diagnostic protocols (UDS, KWP, DoIP) |

## Development

```bash
# Build all packages
pnpm turbo build

# Run tests
pnpm turbo test

# Type check
pnpm turbo typecheck

# Lint
pnpm lint
```

### Workflow

1. Create feature branch: `feature/issue-XXX-description`
2. Make changes, run `pnpm test && pnpm lint`
3. Commit with conventional commits: `feat(package): description`
4. Push and create PR

## Technical Details

### PRG/GRP File Format

BMW diagnostic description files use a proprietary binary format:

- Files start with `@EDIABAS OBJECT\0` (16-byte magic header)
- Offset `0x10`: Version (uint32 LE) — 0=GRP, 1=PRG
- Offset `0xA0+`: XOR-encoded data (key: **0xF7**)
- Decoded content contains BEST/1 bytecode and metadata

### XOR Decryption

All data after the header is XOR-encrypted with key `0xF7`. The parser handles decryption automatically.

## Contributing

See [AGENTS.md](./AGENTS.md) for guidelines on working with this codebase.

All contributions should:
- Use TypeScript strict mode
- Follow conventional commit format
- Include tests for new functionality
- Keep documentation up to date

## License

MIT

## References

- [EdiabasLib](https://github.com/uholeschak/ediabaslib) - Original C# implementation
- [BMW EDIABAS Documentation](https://www.ediabasx.de/) - Official BMW documentation
