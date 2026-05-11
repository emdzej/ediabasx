# @emdzej/ediabasx-cli

Command-line tool for the [EdiabasX](https://github.com/emdzej/ediabasx) project. Parse, disassemble, inspect, and run BMW PRG/GRP diagnostic files — with a built-in TUI for interactive browsing and job runs.

## Install

Global (recommended for day-to-day use):

```bash
npm install -g @emdzej/ediabasx-cli
ediabasx --help
```

Or via npx without installing:

```bash
npx @emdzej/ediabasx-cli info ./MS430DS0.prg
```

## Commands

| Command | Purpose |
|---|---|
| `ediabasx info <file>` | One-screen ECU / file summary (origin, revision, author, job/table counts) |
| `ediabasx jobs <file>` | List every job with arguments, results, and comments |
| `ediabasx tables <file>` | List every lookup table with row/column counts |
| `ediabasx table <file> <name>` | Print a single table |
| `ediabasx parse <file> [--json]` | Full structured dump |
| `ediabasx disasm <file> [job]` | Disassemble BEST2 bytecode (all jobs or one) |
| `ediabasx run <file> [job] [params...]` | Execute a job against an ECU (or pop a TUI to browse jobs) |
| `ediabasx explore <file>` | TUI for browsing jobs / tables / metadata side by side |
| `ediabasx gateway [opts]` | Share a local interface over JSON-RPC |
| `ediabasx simulator [opts]` | Interactive ECU response simulator |
| `ediabasx configure` | Interactive config wizard |
| `ediabasx docs <src> <out>` | Generate Markdown documentation for a directory of PRG/GRP files |

## Hardware

```bash
# K+DCAN cable, ISO-TP for D-CAN ECUs
ediabasx run file.prg FS_LESEN \
  --interface kdcan \
  --serial-port /dev/cu.usbserial-A50285BI \
  --serial-protocol isotp \
  --serial-tester-can-id 0x7e0 \
  --serial-ecu-can-id 0x7e8

# Serial K-line (KWP2000)
ediabasx run file.prg IDENT \
  --interface serial \
  --serial-port /dev/ttyUSB0 \
  --serial-baud 9600 \
  --serial-protocol kwp

# ENET (DoIP)
ediabasx run file.prg IDENT --interface enet --enet-host 192.168.0.1

# Simulation (no hardware)
ediabasx run file.prg IDENT --simulation
```

If you omit `--interface`, the CLI reads `~/.config/ediabasx/config.json`. Run `ediabasx configure` for the interactive wizard.

## TUI

`ediabasx run <file>` (without a job name) opens the **Run TUI** — jobs list on the left, results on the right, with interface status and an optional details panel.

| Key | Action |
|---|---|
| `↑` `↓` | Move within the focused panel |
| `Enter` / `R` | Run the highlighted job |
| `Tab` | Cycle focus: jobs → details (if shown) → results |
| `i` | Toggle the job details panel |
| `/` | Filter the jobs list |
| `Q` / `Ctrl+C` | Quit |

`ediabasx explore <file>` opens a similar TUI for static inspection — jobs / tables / metadata, with disassembly in the content panel and per-item details below.

## Tracing

```bash
EDIABASX_VERBOSE=1 ediabasx run file.prg FS_LESEN 2> trace.log
```

Emits per-op VM traces (`xsend`, `tabseek`, `tabget`, `strcmp`) and structured ediabas-level logs to stderr.

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
