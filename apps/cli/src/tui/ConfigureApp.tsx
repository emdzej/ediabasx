import React, { useCallback, useMemo, useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import type { InterfaceOptions } from "@emdzej/ediabasx-interfaces";
import { listInterfaces, getInterfaceMetadata } from "@emdzej/ediabasx-interfaces";
import type { InterfaceOptionMetadata } from "@emdzej/ediabasx-interfaces";
import type { EdiabasConfig } from "../utils/config.js";

type WizardStep =
  | { kind: "interface" }
  | { kind: "options"; phase: "common" | "advanced-prompt" | "advanced" }
  | { kind: "confirm" };

type SelectItem = { label: string; value: string };

type ConfigureAppProps = {
  initialConfig?: EdiabasConfig;
  outputPath: string;
  onSave: (config: EdiabasConfig, outputPath: string) => void;
};

function truncate(text: string, maxWidth: number): string {
  if (text.length <= maxWidth) return text;
  if (maxWidth <= 3) return text.slice(0, maxWidth);
  return text.slice(0, maxWidth - 3) + "...";
}

function buildBorderTop(title: string, width: number): string {
  const inner = Math.max(0, width - 2);
  const t = title ? `─${title}` : "";
  return `╭${t}${"─".repeat(Math.max(0, inner - t.length))}╮`;
}

function buildBorderBottom(label: string, width: number): string {
  const inner = Math.max(0, width - 2);
  const l = truncate(label, inner);
  return `╰${l}${"─".repeat(Math.max(0, inner - l.length))}╯`;
}

function buildLine(content: string, width: number): string {
  const inner = Math.max(0, width - 2);
  return `│${truncate(content, inner).padEnd(inner)}│`;
}

const COMMON_SERIAL_OPTIONS = new Set([
  "port", "baudRate", "dataBits", "parity", "stopBits", "timeoutMs", "protocol", "initMode",
]);

const COMMON_ENET_OPTIONS = new Set(["host", "port"]);
const COMMON_GATEWAY_OPTIONS = new Set(["host", "port"]);

function isCommonOption(interfaceName: string, optName: string): boolean {
  if (interfaceName === "serial" || interfaceName === "kdcan") return COMMON_SERIAL_OPTIONS.has(optName);
  if (interfaceName === "enet") return COMMON_ENET_OPTIONS.has(optName);
  if (interfaceName === "gateway") return COMMON_GATEWAY_OPTIONS.has(optName);
  return true;
}

function hasAdvancedOptions(interfaceName: string, options?: InterfaceOptionMetadata[]): boolean {
  if (!options) return false;
  return options.some((opt) => !isCommonOption(interfaceName, opt.name));
}

function formatDefault(opt: InterfaceOptionMetadata): string {
  if (opt.default !== undefined) return String(opt.default);
  return "";
}

function validateOptionValue(opt: InterfaceOptionMetadata, value: string): string | null {
  if (!value && opt.required) return `${opt.name} is required`;
  if (!value) return null;
  if (opt.type === "number") {
    const n = Number(value);
    if (!Number.isFinite(n)) return `${opt.name} must be a number`;
  }
  if (opt.type === "enum" && opt.values) {
    if (!opt.values.includes(value)) return `${opt.name} must be one of: ${opt.values.join(", ")}`;
  }
  if (opt.type === "boolean") {
    if (!["true", "false"].includes(value.toLowerCase())) return `${opt.name} must be true or false`;
  }
  return null;
}

function coerceValue(opt: InterfaceOptionMetadata, value: string): string | number | boolean {
  if (opt.type === "number") return Number(value);
  if (opt.type === "boolean") return value.toLowerCase() === "true";
  return value;
}

export function ConfigureApp({ initialConfig, outputPath, onSave }: ConfigureAppProps) {
  const { exit } = useApp();
  const width = 72;

  const interfaces = useMemo(() => listInterfaces(), []);
  const interfaceItems: SelectItem[] = useMemo(
    () => interfaces.map((iface) => ({ label: `${iface.name} - ${iface.description}`, value: iface.name })),
    [interfaces],
  );

  const [step, setStep] = useState<WizardStep>(
    initialConfig ? { kind: "options", phase: "common" } : { kind: "interface" },
  );
  const [selectedInterface, setSelectedInterface] = useState(initialConfig?.interface ?? "");
  const [selectedIndex, setSelectedIndex] = useState(() => {
    if (initialConfig) {
      const idx = interfaceItems.findIndex((item) => item.value === initialConfig.interface);
      return idx >= 0 ? idx : 0;
    }
    return 0;
  });
  const [configOptions, setConfigOptions] = useState<InterfaceOptions>(initialConfig?.options ?? {});
  const [currentOptIndex, setCurrentOptIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState<string | null>(null);
  const [confirmIndex, setConfirmIndex] = useState(0);
  const [advancePromptIndex, setAdvancePromptIndex] = useState(0);

  const metadata = useMemo(() => (selectedInterface ? getInterfaceMetadata(selectedInterface) : undefined), [selectedInterface]);

  const currentOptions = useMemo(() => {
    if (!metadata?.options) return [];
    if (step.kind === "options" && step.phase === "advanced") {
      return metadata.options.filter((opt) => !isCommonOption(selectedInterface, opt.name));
    }
    if (step.kind === "options" && step.phase === "common") {
      return metadata.options.filter((opt) => isCommonOption(selectedInterface, opt.name));
    }
    return [];
  }, [metadata, selectedInterface, step]);

  const startOptionsPhase = useCallback(
    (phase: "common" | "advanced", ifaceName: string, opts: InterfaceOptions) => {
      const meta = getInterfaceMetadata(ifaceName);
      if (!meta?.options) {
        setStep({ kind: "confirm" });
        return;
      }
      const filtered =
        phase === "advanced"
          ? meta.options.filter((o) => !isCommonOption(ifaceName, o.name))
          : meta.options.filter((o) => isCommonOption(ifaceName, o.name));
      if (filtered.length === 0) {
        if (phase === "common") {
          setStep({ kind: "confirm" });
        } else {
          setStep({ kind: "confirm" });
        }
        return;
      }
      setCurrentOptIndex(0);
      setStep({ kind: "options", phase });
      const opt = filtered[0];
      if (opt) {
        const existing = opts[opt.name];
        setInputValue(existing !== undefined ? String(existing) : formatDefault(opt));
      }
      setInputError(null);
    },
    [],
  );

  useInput((input, key) => {
    if (key.ctrl && input === "c") {
      exit();
      return;
    }

    // Interface selection step
    if (step.kind === "interface") {
      if (key.upArrow) {
        setSelectedIndex((v) => Math.max(0, v - 1));
        return;
      }
      if (key.downArrow) {
        setSelectedIndex((v) => Math.min(interfaceItems.length - 1, v + 1));
        return;
      }
      if (key.return) {
        const item = interfaceItems[selectedIndex];
        if (!item) return;
        setSelectedInterface(item.value);
        setConfigOptions({});
        const meta = getInterfaceMetadata(item.value);
        if (!meta?.options || meta.options.length === 0) {
          setStep({ kind: "confirm" });
        } else {
          startOptionsPhase("common", item.value, {});
        }
        return;
      }
      if (key.escape) {
        exit();
      }
      return;
    }

    // Advanced options prompt (yes/no)
    if (step.kind === "options" && step.phase === "advanced-prompt") {
      if (key.upArrow || key.downArrow) {
        setAdvancePromptIndex((v) => (v === 0 ? 1 : 0));
        return;
      }
      if (key.return) {
        if (advancePromptIndex === 0) {
          // Yes - configure advanced
          startOptionsPhase("advanced", selectedInterface, configOptions);
        } else {
          // No - skip to confirm
          setStep({ kind: "confirm" });
        }
        return;
      }
      if (key.escape) {
        setStep({ kind: "confirm" });
      }
      return;
    }

    // Options input step
    if (step.kind === "options" && (step.phase === "common" || step.phase === "advanced")) {
      const opt = currentOptions[currentOptIndex];
      if (!opt) return;

      // For enum types, allow arrow key selection
      if (opt.type === "enum" && opt.values) {
        if (key.upArrow || key.downArrow) {
          const values = opt.values;
          const currentIdx = values.indexOf(inputValue);
          if (key.upArrow) {
            const newIdx = currentIdx <= 0 ? values.length - 1 : currentIdx - 1;
            setInputValue(values[newIdx] ?? "");
          } else {
            const newIdx = currentIdx >= values.length - 1 ? 0 : currentIdx + 1;
            setInputValue(values[newIdx] ?? "");
          }
          setInputError(null);
          return;
        }
      }

      if (key.return) {
        const trimmed = inputValue.trim();
        const error = validateOptionValue(opt, trimmed);
        if (error) {
          setInputError(error);
          return;
        }

        const newOptions = { ...configOptions };
        if (trimmed) {
          newOptions[opt.name] = coerceValue(opt, trimmed);
        }
        setConfigOptions(newOptions);

        const nextIdx = currentOptIndex + 1;
        if (nextIdx < currentOptions.length) {
          setCurrentOptIndex(nextIdx);
          const nextOpt = currentOptions[nextIdx];
          if (nextOpt) {
            const existing = newOptions[nextOpt.name];
            setInputValue(existing !== undefined ? String(existing) : formatDefault(nextOpt));
          }
          setInputError(null);
        } else if (step.phase === "common" && hasAdvancedOptions(selectedInterface, metadata?.options)) {
          setStep({ kind: "options", phase: "advanced-prompt" });
          setAdvancePromptIndex(1); // Default to "No"
        } else {
          setStep({ kind: "confirm" });
        }
        return;
      }

      if (key.escape) {
        // Go back
        if (currentOptIndex > 0) {
          const prevIdx = currentOptIndex - 1;
          setCurrentOptIndex(prevIdx);
          const prevOpt = currentOptions[prevIdx];
          if (prevOpt) {
            const existing = configOptions[prevOpt.name];
            setInputValue(existing !== undefined ? String(existing) : formatDefault(prevOpt));
          }
          setInputError(null);
        } else if (step.phase === "advanced") {
          setStep({ kind: "options", phase: "advanced-prompt" });
          setAdvancePromptIndex(0);
        } else {
          setStep({ kind: "interface" });
        }
        return;
      }

      if (key.backspace || key.delete) {
        setInputValue((v) => v.slice(0, -1));
        setInputError(null);
        return;
      }

      if (input && !key.ctrl && !key.meta) {
        setInputValue((v) => v + input);
        setInputError(null);
      }
      return;
    }

    // Confirm step
    if (step.kind === "confirm") {
      if (key.upArrow || key.downArrow) {
        setConfirmIndex((v) => (v === 0 ? 1 : 0));
        return;
      }
      if (key.return) {
        if (confirmIndex === 0) {
          // Save
          const config: EdiabasConfig = {
            interface: selectedInterface,
            options: configOptions,
          };
          onSave(config, outputPath);
          exit();
        } else {
          // Go back to interface selection
          setStep({ kind: "interface" });
        }
        return;
      }
      if (key.escape) {
        setStep({ kind: "interface" });
      }
    }
  });

  // Render
  const topBorder = buildBorderTop("EdiabasX · Configure", width);

  if (step.kind === "interface") {
    const bottomBorder = buildBorderBottom("↑/↓: Select | Enter: Confirm | Esc/Ctrl+C: Quit", width);
    return (
      <Box flexDirection="column">
        <Text>{topBorder}</Text>
        <Text>{buildLine("", width)}</Text>
        <Text>{buildLine("  Select communication interface:", width)}</Text>
        <Text>{buildLine("", width)}</Text>
        {interfaceItems.map((item, idx) => {
          const prefix = idx === selectedIndex ? " ▸ " : "   ";
          const line = `${prefix}${item.label}`;
          return (
            <Text key={item.value}>
              {idx === selectedIndex
                ? buildLine(`\x1b[36m${line}\x1b[0m`, width)
                : buildLine(line, width)}
            </Text>
          );
        })}
        <Text>{buildLine("", width)}</Text>
        <Text>{bottomBorder}</Text>
      </Box>
    );
  }

  if (step.kind === "options" && step.phase === "advanced-prompt") {
    const choices = ["Yes, configure advanced options", "No, use defaults"];
    const bottomBorder = buildBorderBottom("↑/↓: Select | Enter: Confirm | Esc: Skip", width);
    return (
      <Box flexDirection="column">
        <Text>{topBorder}</Text>
        <Text>{buildLine("", width)}</Text>
        <Text>{buildLine("  Configure advanced timing/protocol options?", width)}</Text>
        <Text>{buildLine("  (p1-p3, w1-w5, interByteTime, NR78, CAN IDs, ...)", width)}</Text>
        <Text>{buildLine("", width)}</Text>
        {choices.map((choice, idx) => {
          const prefix = idx === advancePromptIndex ? " ▸ " : "   ";
          const line = `${prefix}${choice}`;
          return (
            <Text key={choice}>
              {idx === advancePromptIndex
                ? buildLine(`\x1b[36m${line}\x1b[0m`, width)
                : buildLine(line, width)}
            </Text>
          );
        })}
        <Text>{buildLine("", width)}</Text>
        <Text>{bottomBorder}</Text>
      </Box>
    );
  }

  if (step.kind === "options" && (step.phase === "common" || step.phase === "advanced")) {
    const opt = currentOptions[currentOptIndex];
    const phaseLabel = step.phase === "advanced" ? "Advanced Options" : "Options";
    const progress = `${currentOptIndex + 1}/${currentOptions.length}`;

    const lines: string[] = [];
    lines.push("");
    lines.push(`  ${phaseLabel} for ${selectedInterface} [${progress}]`);
    lines.push("");

    if (opt) {
      lines.push(`  ${opt.name}: ${opt.description}`);
      if (opt.type === "enum" && opt.values) {
        lines.push(`  Values: ${opt.values.join(" | ")}`);
      }
      if (opt.default !== undefined) {
        lines.push(`  Default: ${opt.default}`);
      }
      if (opt.required) {
        lines.push(`  (required)`);
      }
      lines.push("");
      lines.push(`  > ${inputValue}_`);
      if (inputError) {
        lines.push(`  \x1b[31m${inputError}\x1b[0m`);
      }
    }
    lines.push("");

    const hint = opt?.type === "enum" ? "↑/↓: Cycle values | " : "";
    const bottomBorder = buildBorderBottom(`${hint}Enter: Next | Esc: Back | Ctrl+C: Quit`, width);

    return (
      <Box flexDirection="column">
        <Text>{topBorder}</Text>
        {lines.map((line, idx) => (
          <Text key={idx}>{buildLine(line, width)}</Text>
        ))}
        <Text>{bottomBorder}</Text>
      </Box>
    );
  }

  // Confirm step
  if (step.kind === "confirm") {
    const configLines: string[] = [];
    configLines.push("");
    configLines.push("  Configuration summary:");
    configLines.push("");
    configLines.push(`  Interface: ${selectedInterface}`);

    const optEntries = Object.entries(configOptions);
    if (optEntries.length > 0) {
      configLines.push("  Options:");
      for (const [key, value] of optEntries) {
        configLines.push(`    ${key}: ${value}`);
      }
    } else {
      configLines.push("  Options: (defaults)");
    }
    configLines.push("");
    configLines.push(`  Output: ${outputPath}`);
    configLines.push("");

    const choices = ["Save configuration", "Start over"];
    const bottomBorder = buildBorderBottom("↑/↓: Select | Enter: Confirm | Esc: Back", width);

    return (
      <Box flexDirection="column">
        <Text>{topBorder}</Text>
        {configLines.map((line, idx) => (
          <Text key={idx}>{buildLine(line, width)}</Text>
        ))}
        {choices.map((choice, idx) => {
          const prefix = idx === confirmIndex ? " ▸ " : "   ";
          const line = `${prefix}${choice}`;
          return (
            <Text key={choice}>
              {idx === confirmIndex
                ? buildLine(`\x1b[36m${line}\x1b[0m`, width)
                : buildLine(line, width)}
            </Text>
          );
        })}
        <Text>{buildLine("", width)}</Text>
        <Text>{bottomBorder}</Text>
      </Box>
    );
  }

  return null;
}
