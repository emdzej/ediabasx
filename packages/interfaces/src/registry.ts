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
        description: "CAN protocol selection (tp20 or isotp).",
        type: "enum",
        values: ["tp20", "isotp"],
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
    description: "Remote gateway interface (JSON-RPC over TCP).",
    options: [
      {
        name: "host",
        description: "Gateway host/IP address.",
        type: "string",
        default: "127.0.0.1"
      },
      {
        name: "port",
        description: "Gateway TCP port.",
        type: "number",
        default: 6801
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
