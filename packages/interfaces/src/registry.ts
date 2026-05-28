export type InterfaceOptionType = "string" | "number" | "boolean" | "enum";

export type InterfaceOptionMetadata = {
  name: string;
  description: string;
  type: InterfaceOptionType;
  default?: string | number | boolean;
  values?: string[];
  required?: boolean;
};

export type InterfaceMetadata = {
  name: string;
  description: string;
  options?: InterfaceOptionMetadata[];
};

const interfaceRegistry: InterfaceMetadata[] = [
  {
    name: "simulation",
    description: "In-memory simulation interface (no hardware required)."
  },
  {
    name: "serial",
    description: "Generic serial transport for K-Line adapters.",
    options: [
      {
        name: "port",
        description: "Serial device path (e.g. /dev/ttyUSB0).",
        type: "string",
        required: true
      },
      {
        name: "baudRate",
        description: "Baud rate for the adapter.",
        type: "number",
        default: 9600
      },
      {
        name: "dataBits",
        description: "Number of data bits.",
        type: "number",
        default: 8
      },
      {
        name: "parity",
        description: "Parity setting.",
        type: "enum",
        values: ["none", "even", "odd"],
        default: "none"
      },
      {
        name: "stopBits",
        description: "Number of stop bits.",
        type: "number",
        default: 1
      },
      {
        name: "timeoutMs",
        description: "Communication timeout in milliseconds.",
        type: "number",
        default: 5000
      },
      {
        name: "protocol",
        description: "Protocol selection for K-Line or CAN sessions.",
        type: "enum",
        values: ["uart", "kwp", "tp20", "isotp"],
        default: "kwp"
      },
      {
        name: "initMode",
        description: "K-Line init mode.",
        type: "enum",
        values: ["fast", "five-baud"],
        default: "fast"
      },
      {
        name: "testerCanId",
        description: "Tester CAN identifier.",
        type: "number",
        default: 1777
      },
      {
        name: "ecuCanId",
        description: "ECU CAN identifier.",
        type: "number",
        default: 1536
      },
      {
        name: "p1",
        description: "KWP P1 timing (ms).",
        type: "number"
      },
      {
        name: "p2",
        description: "KWP P2 timing (ms).",
        type: "number"
      },
      {
        name: "p3",
        description: "KWP P3 timing (ms).",
        type: "number"
      },
      {
        name: "w1",
        description: "KWP W1 timing (ms).",
        type: "number"
      },
      {
        name: "w2",
        description: "KWP W2 timing (ms).",
        type: "number"
      },
      {
        name: "w3",
        description: "KWP W3 timing (ms).",
        type: "number"
      },
      {
        name: "w4",
        description: "KWP W4 timing (ms).",
        type: "number"
      },
      {
        name: "w5",
        description: "KWP W5 timing (ms).",
        type: "number"
      },
      {
        name: "interByteTime",
        description: "Inter-byte delay (ms).",
        type: "number"
      },
      {
        name: "timeoutNr78",
        description: "NR78 timeout (ms).",
        type: "number"
      },
      {
        name: "retryNr78",
        description: "NR78 retry count.",
        type: "number"
      }
    ]
  },
  {
    name: "kdcan",
    description: "K+DCAN over serial adapter (BMW-compatible).",
    options: [
      {
        name: "port",
        description: "Serial device path (e.g. /dev/ttyUSB0).",
        type: "string",
        required: true
      },
      {
        name: "baudRate",
        description: "Baud rate for the adapter.",
        type: "number",
        default: 115200
      },
      {
        name: "dataBits",
        description: "Number of data bits.",
        type: "number",
        default: 8
      },
      {
        name: "parity",
        description: "Parity setting.",
        type: "enum",
        values: ["none", "even", "odd"],
        default: "none"
      },
      {
        name: "stopBits",
        description: "Number of stop bits.",
        type: "number",
        default: 1
      },
      {
        name: "timeoutMs",
        description: "Communication timeout in milliseconds.",
        type: "number",
        default: 5000
      },
      {
        name: "protocol",
        description:
          "Diagnostic protocol — K+DCAN cables route both K-line " +
          "(kwp / uart) and CAN (tp20 / isotp) sessions over the " +
          "same USB serial endpoint, so all four are valid.",
        type: "enum",
        values: ["kwp", "uart", "tp20", "isotp"],
        default: "isotp"
      },
      {
        name: "initMode",
        description: "K-Line init mode.",
        type: "enum",
        values: ["fast", "five-baud"],
        default: "fast"
      },
      {
        name: "testerCanId",
        description: "Tester CAN identifier.",
        type: "number",
        default: 1777
      },
      {
        name: "ecuCanId",
        description: "ECU CAN identifier.",
        type: "number",
        default: 1536
      },
      {
        name: "p1",
        description: "KWP P1 timing (ms).",
        type: "number"
      },
      {
        name: "p2",
        description: "KWP P2 timing (ms).",
        type: "number"
      },
      {
        name: "p3",
        description: "KWP P3 timing (ms).",
        type: "number"
      },
      {
        name: "w1",
        description: "KWP W1 timing (ms).",
        type: "number"
      },
      {
        name: "w2",
        description: "KWP W2 timing (ms).",
        type: "number"
      },
      {
        name: "w3",
        description: "KWP W3 timing (ms).",
        type: "number"
      },
      {
        name: "w4",
        description: "KWP W4 timing (ms).",
        type: "number"
      },
      {
        name: "w5",
        description: "KWP W5 timing (ms).",
        type: "number"
      },
      {
        name: "interByteTime",
        description: "Inter-byte delay (ms).",
        type: "number"
      },
      {
        name: "timeoutNr78",
        description: "NR78 timeout (ms).",
        type: "number"
      },
      {
        name: "retryNr78",
        description: "NR78 retry count.",
        type: "number"
      }
    ]
  },
  {
    name: "enet",
    description: "ENET Ethernet interface (DoIP/HSFZ compatible).",
    options: [
      {
        name: "host",
        description: "Target host/IP address.",
        type: "string",
        required: true
      },
      {
        name: "port",
        description: "TCP port for the adapter.",
        type: "number",
        default: 6801
      }
    ]
  },
  {
    name: "gateway",
    description: "Remote gateway interface (JSON-RPC over TCP or WebSocket).",
    options: [
      {
        name: "host",
        description: "Gateway host/IP address.",
        type: "string",
        default: "127.0.0.1"
      },
      {
        name: "port",
        description: "Gateway port (default 6801 for both transports).",
        type: "number",
        default: 6801
      },
      {
        name: "transport",
        description:
          "Wire framing for the gateway connection. 'tcp' is the original line-delimited transport; 'websocket' uses the global WebSocket (browser + Node 22+).",
        type: "enum",
        values: ["tcp", "websocket"],
        default: "tcp"
      },
      {
        name: "url",
        description:
          "Explicit WebSocket URL (overrides host/port). Useful for ws://hostname/path or wss://… deployments.",
        type: "string"
      }
    ]
  },
  {
    name: "j2534",
    description:
      "SAE J2534 PassThru via Tactrix OpenPort 2.0 (frame-level integrity; no UART jitter).",
    options: [
      {
        name: "transport",
        description:
          "How to reach the OpenPort 2.0. `serial` uses the kernel CDC ACM driver (no sudo on macOS). `usb` uses libusb directly (requires sudo on macOS/Linux).",
        type: "enum",
        values: ["serial", "usb"],
        default: "serial"
      },
      {
        name: "protocol",
        description:
          "BMW protocol over the J2534 channel. `ds2` (default) for E36/E39/E46 K-line ECUs; `kwp` for KWP2000 fast-init; `can` for raw CAN frames.",
        type: "enum",
        values: ["ds2", "kwp", "can"],
        default: "ds2"
      },
      {
        name: "port",
        description:
          "Serial device path (e.g. /dev/cu.usbmodemXXXX). Optional — auto-detected for the `serial` transport when omitted.",
        type: "string"
      },
      {
        name: "baudRate",
        description: "K-line baud rate. 9600 is standard for DS2/KWP.",
        type: "number",
        default: 9600
      },
      {
        name: "loopback",
        description:
          "Have OpenPort echo TX back via Read. On by default — matches the j2534 repo's DS2 reference example; receive() filters echoes host-side so the SGBD still sees only ECU responses.",
        type: "boolean",
        default: true
      },
      {
        name: "hostInterByteMs",
        description:
          "Host-side inter-byte delay (ms) for K-line TX. Workaround for OpenPort 2.0 silently ignoring P4_MIN — when > 0, the interface splits each TX into per-byte writes with this delay between them, restoring the gap that K+DCAN cables get for free from FTDI USB chunking (~3-5ms). 0 disables (fast ECUs don't need it).",
        type: "number",
        default: 0
      },
      {
        name: "readTimeoutMs",
        description: "Per-poll receive timeout in milliseconds.",
        type: "number",
        default: 1000
      },
      {
        name: "defaultBatteryMv",
        description:
          "Fallback battery voltage in millivolts when READ_VBATT fails (e.g. before channel is open).",
        type: "number",
        default: 12000
      }
    ]
  }
];

export function listInterfaces(): InterfaceMetadata[] {
  return interfaceRegistry.map((entry) => ({
    ...entry,
    options: entry.options ? [...entry.options] : undefined
  }));
}

export function getInterfaceMetadata(name: string): InterfaceMetadata | undefined {
  return interfaceRegistry.find((entry) => entry.name === name);
}
