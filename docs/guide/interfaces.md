# Interfaces

ediabas supports multiple communication interfaces. Choose the one that matches your vehicle and hardware.

## Interface Overview

### Simulation
**When to use:** Testing without hardware or ECU access.
- **Hardware required:** None
- **CLI:** `--interface simulation` or `--simulation`

### Serial (K-Line)
**When to use:** Older BMWs using K-Line via OBD-II.
- **Hardware required:** USB K-Line/OBD-II cable
- **CLI:** `--interface serial`

### K+DCAN
**When to use:** Vehicles that use both K-Line and D-CAN.
- **Hardware required:** K+DCAN USB adapter
- **CLI:** `--interface kdcan`

### ENET
**When to use:** Newer BMWs using Ethernet (F/G series).
- **Hardware required:** ENET cable (OBD-II to Ethernet)
- **CLI:** `--interface enet`

### Gateway
**When to use:** Remote/centralized access over TCP (JSON-RPC gateway).
- **Hardware required:** Network access to a running gateway server
- **CLI:** `--interface gateway` or `--gateway <host:port>`

## Hardware Requirements by Interface
| Interface | Hardware | Notes |
| --- | --- | --- |
| Simulation | None | For development/testing |
| Serial (K-Line) | USB K-Line/OBD-II cable | Older vehicles |
| K+DCAN | K+DCAN adapter | Supports K-Line + D-CAN |
| ENET | ENET (OBD-II to Ethernet) cable | F/G series Ethernet |
| Gateway | Network access | Requires gateway server |

## Connection Examples

### Simulation
```bash
ediabas run path/to/file.prg IDENT --interface simulation
```

### Serial (K-Line)
```bash
ediabas run path/to/file.prg IDENT \
  --interface serial \
  --serial-port /dev/ttyUSB0 \
  --serial-baud 9600 \
  --serial-protocol kwp
```

### K+DCAN (ISO-TP)
```bash
ediabas run path/to/file.prg IDENT \
  --interface kdcan \
  --serial-port /dev/ttyUSB0 \
  --serial-protocol isotp \
  --serial-tester-can-id 0x7e0 \
  --serial-ecu-can-id 0x7e8
```

### ENET
```bash
ediabas run path/to/file.prg IDENT \
  --interface enet \
  --enet-host 169.254.0.1 \
  --enet-port 6801
```

### Gateway
Start a gateway on another machine:

```bash
ediabas gateway \
  --interface serial \
  --serial-port /dev/ttyUSB0 \
  --serial-baud 9600
```

Connect to it remotely:

```bash
ediabas run path/to/file.prg IDENT \
  --interface gateway \
  --gateway-host 192.168.1.50 \
  --gateway-port 6801
```
