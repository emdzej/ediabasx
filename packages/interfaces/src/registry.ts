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
