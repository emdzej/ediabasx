# CLI

The CLI binary is `ediabas` (package: `@ediabas/cli`).

## Commands

### `ediabas interfaces`
List available communication interfaces.

```bash
ediabas interfaces
ediabas interfaces --json
ediabas interfaces --table
```

### `ediabas parse <file>`
Parse a PRG/GRP file.

```bash
ediabas parse d_motor.prg --json
ediabas parse d_motor.prg --table
```

### `ediabas info <file>`
Show summary information for a PRG/GRP file.

```bash
ediabas info d_motor.prg
ediabas info d_motor.prg --json
```

### `ediabas jobs <file>`
List all jobs with their arguments and results.

```bash
ediabas jobs d_motor.prg
ediabas jobs d_motor.prg --table
```

### `ediabas tables <file>`
List tables with row/column counts.

```bash
ediabas tables d_motor.prg
ediabas tables d_motor.prg --json
```

### `ediabas table <file> <name>`
Show a specific table (human, JSON, or CSV).

```bash
ediabas table d_motor.prg TABNAME
ediabas table d_motor.prg TABNAME --json
ediabas table d_motor.prg TABNAME --csv
```

### `ediabas disasm <file> [job]`
Disassemble BEST/1 bytecode.

```bash
ediabas disasm d_motor.prg
ediabas disasm d_motor.prg INFO
```

### `ediabas explore <file>`
Interactive TUI for exploring PRG/GRP files.

```bash
ediabas explore d_motor.prg
```

### `ediabas run <file> [job] [params...]`
Execute a job from a PRG/GRP file. If `job` is omitted, an interactive TUI runner opens.

```bash
# simulation (default)
ediabas run d_motor.prg INFO

# serial K-Line
ediabas run d_motor.prg IDENT --interface serial --serial-port /dev/ttyUSB0 --serial-baud 9600 --serial-protocol kwp

# K+DCAN (ISO-TP)
ediabas run d_motor.prg IDENT --interface kdcan --serial-port /dev/ttyUSB0 --serial-protocol isotp --serial-tester-can-id 0x7e0 --serial-ecu-can-id 0x7e8

# ENET
ediabas run d_motor.prg IDENT --interface enet --enet-host 192.168.0.1 --enet-port 6801

# Run via remote gateway
ediabas run d_motor.prg IDENT --interface gateway --gateway-host 192.168.1.50 --gateway-port 6801
```

Common options:
- `-s, --simulation` — alias for `--interface simulation`
- `-t, --timeout <ms>` — communication timeout (default: 5000)
- `--gateway <host:port>` — alias for `--interface gateway`
- `--json` — output results as JSON
- `--results <names>` — comma-separated results filter
- `--info` — show job info instead of executing

### `ediabas simulator`
Start the interactive simulator (TUI + JSON-RPC server).

```bash
ediabas simulator --host 127.0.0.1 --port 6802
ediabas simulator --mode hex --line-ending lf
```

Options:
- `--host <host>` (default: 127.0.0.1)
- `--port <port>` (default: 6802)
- `--mode <text|hex>` (default: text)
- `--line-ending <crlf|lf|raw>` (default: crlf)

### `ediabas gateway`
Start the JSON-RPC gateway server and expose an interface.

```bash
ediabas gateway --interface serial --serial-port /dev/ttyUSB0 --serial-baud 9600
ediabas gateway --interface enet --enet-host 192.168.0.1
```

Options:
- `--host <host>` (default: 127.0.0.1)
- `--port <port>` (default: 6801)
- plus all interface options below

## Interface Options
These options apply to `run` and `gateway`.

### Common
- `-i, --interface <name>` — `simulation|serial|kdcan|enet|gateway`
- `--gateway <host:port>` — alias for `--interface gateway`

### Serial / K+DCAN (`--interface serial` or `--interface kdcan`)
- `--serial-port <path>` — device path (e.g. `/dev/ttyUSB0`)
- `--serial-baud <baud>` — default: 9600 (serial), 115200 (kdcan)
- `--serial-data-bits <bits>` — 7|8 (default: 8)
- `--serial-parity <parity>` — none|even|odd (default: none)
- `--serial-stop-bits <bits>` — 1|2 (default: 1)
- `--serial-protocol <protocol>` — uart|kwp|tp20|isotp
- `--serial-init <mode>` — fast|five-baud
- `--serial-tester-can-id <id>` — tester CAN ID (hex or decimal)
- `--serial-ecu-can-id <id>` — ECU CAN ID (hex or decimal)
- `--serial-timeout <ms>` — receive timeout
- `--serial-p1 <ms>` / `--serial-p2 <ms>` / `--serial-p3 <ms>` — KWP timings
- `--serial-w1 <ms>` / `--serial-w2 <ms>` / `--serial-w3 <ms>` / `--serial-w4 <ms>` / `--serial-w5 <ms>` — KWP timings
- `--serial-inter-byte-time <ms>` — inter-byte delay
- `--serial-timeout-nr78 <ms>` — NR78 timeout
- `--serial-retry-nr78 <count>` — NR78 retry count

### ENET (`--interface enet`)
- `--enet-host <host>` — target host/IP
- `--enet-port <port>` — default: 6801

### Gateway (`--interface gateway`)
- `--gateway-host <host>` — default: 127.0.0.1
- `--gateway-port <port>` — default: 6801
