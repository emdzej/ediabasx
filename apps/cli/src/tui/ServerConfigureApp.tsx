import React, { useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import { DEFAULT_SERVER_PORT } from "@emdzej/ediabasx-host-config";
import type { EdiabasConfig } from "../utils/config.js";

type WizardStep = "sgbd-path" | "host" | "port" | "transport" | "confirm";

const STEPS: WizardStep[] = ["sgbd-path", "host", "port", "transport", "confirm"];
const TRANSPORTS = ["websocket", "tcp"];

type ServerConfigureAppProps = {
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

export function ServerConfigureApp({ initialConfig, outputPath, onSave }: ServerConfigureAppProps) {
  const { exit } = useApp();
  const width = 72;

  const [step, setStep] = useState<WizardStep>("sgbd-path");
  const [sgbdPath, setSgbdPath] = useState(initialConfig?.sgbdPath ?? "");
  const [host, setHost] = useState(initialConfig?.server?.host ?? "127.0.0.1");
  const [port, setPort] = useState(String(initialConfig?.server?.port ?? DEFAULT_SERVER_PORT));
  const [transport, setTransport] = useState(initialConfig?.server?.transport ?? "websocket");
  const [inputValue, setInputValue] = useState(initialConfig?.sgbdPath ?? "");
  const [inputError, setInputError] = useState<string | null>(null);
  const [confirmIndex, setConfirmIndex] = useState(0);

  const goNext = (from: WizardStep): void => {
    const idx = STEPS.indexOf(from);
    const next = STEPS[idx + 1];
    if (!next) return;
    setInputError(null);
    if (next === "host") setInputValue(host);
    else if (next === "port") setInputValue(port);
    else if (next === "transport") setInputValue(transport);
    setStep(next);
  };

  const goBack = (from: WizardStep): void => {
    const idx = STEPS.indexOf(from);
    const prev = STEPS[idx - 1];
    if (!prev) { exit(); return; }
    setInputError(null);
    if (prev === "sgbd-path") setInputValue(sgbdPath);
    else if (prev === "host") setInputValue(host);
    else if (prev === "port") setInputValue(port);
    else if (prev === "transport") setInputValue(transport);
    setStep(prev);
  };

  useInput((input, key) => {
    if (key.ctrl && input === "c") { exit(); return; }

    if (step === "sgbd-path") {
      if (key.return) {
        setSgbdPath(inputValue.trim());
        goNext("sgbd-path");
        return;
      }
      if (key.escape) { exit(); return; }
      if (key.backspace || key.delete) { setInputValue((v) => v.slice(0, -1)); return; }
      if (input && !key.ctrl && !key.meta) { setInputValue((v) => v + input); }
      return;
    }

    if (step === "host") {
      if (key.return) {
        const trimmed = inputValue.trim();
        if (!trimmed) { setInputError("Host is required"); return; }
        setHost(trimmed);
        goNext("host");
        return;
      }
      if (key.escape) { goBack("host"); return; }
      if (key.backspace || key.delete) { setInputValue((v) => v.slice(0, -1)); setInputError(null); return; }
      if (input && !key.ctrl && !key.meta) { setInputValue((v) => v + input); setInputError(null); }
      return;
    }

    if (step === "port") {
      if (key.return) {
        const n = Number(inputValue.trim());
        if (!Number.isFinite(n) || n <= 0 || n > 65535) { setInputError("Port must be 1-65535"); return; }
        setPort(inputValue.trim());
        goNext("port");
        return;
      }
      if (key.escape) { goBack("port"); return; }
      if (key.backspace || key.delete) { setInputValue((v) => v.slice(0, -1)); setInputError(null); return; }
      if (input && !key.ctrl && !key.meta) { setInputValue((v) => v + input); setInputError(null); }
      return;
    }

    if (step === "transport") {
      if (key.upArrow || key.downArrow) {
        const idx = TRANSPORTS.indexOf(inputValue);
        const next = key.downArrow
          ? (idx >= TRANSPORTS.length - 1 ? 0 : idx + 1)
          : (idx <= 0 ? TRANSPORTS.length - 1 : idx - 1);
        setInputValue(TRANSPORTS[next] ?? "websocket");
        return;
      }
      if (key.return) {
        setTransport(inputValue as "tcp" | "websocket");
        goNext("transport");
        return;
      }
      if (key.escape) { goBack("transport"); return; }
      return;
    }

    if (step === "confirm") {
      if (key.upArrow || key.downArrow) { setConfirmIndex((v) => (v === 0 ? 1 : 0)); return; }
      if (key.return) {
        if (confirmIndex === 0) {
          const config: EdiabasConfig = {
            ...(initialConfig ?? { interface: "simulation", options: {} }),
          };
          if (sgbdPath) config.sgbdPath = sgbdPath;
          else delete config.sgbdPath;
          config.server = {
            host,
            port: Number(port),
            transport: transport as "tcp" | "websocket",
          };
          onSave(config, outputPath);
          exit();
        } else {
          setInputValue(sgbdPath);
          setStep("sgbd-path");
        }
        return;
      }
      if (key.escape) { goBack("confirm"); }
    }
  });

  const topBorder = buildBorderTop("EdiabasX · Server Configure", width);

  if (step === "sgbd-path") {
    const lines = [
      "",
      "  Path to SGBD directory (.prg/.grp files):",
      "  The server resolves bare ECU names from this directory.",
      "  Leave empty to skip.",
      "",
      `  > ${inputValue}_`,
      "",
    ];
    return (
      <Box flexDirection="column">
        <Text>{topBorder}</Text>
        {lines.map((line, idx) => <Text key={idx}>{buildLine(line, width)}</Text>)}
        <Text>{buildBorderBottom("Enter: Next | Esc: Quit | Ctrl+C: Quit", width)}</Text>
      </Box>
    );
  }

  if (step === "host") {
    const lines = [
      "",
      "  Server bind address:",
      "  Use 0.0.0.0 to listen on all interfaces.",
      "",
      `  > ${inputValue}_`,
      ...(inputError ? [`  \x1b[31m${inputError}\x1b[0m`] : []),
      "",
    ];
    return (
      <Box flexDirection="column">
        <Text>{topBorder}</Text>
        {lines.map((line, idx) => <Text key={idx}>{buildLine(line, width)}</Text>)}
        <Text>{buildBorderBottom("Enter: Next | Esc: Back", width)}</Text>
      </Box>
    );
  }

  if (step === "port") {
    const lines = [
      "",
      `  Server port (default: ${DEFAULT_SERVER_PORT}):`,
      "",
      `  > ${inputValue}_`,
      ...(inputError ? [`  \x1b[31m${inputError}\x1b[0m`] : []),
      "",
    ];
    return (
      <Box flexDirection="column">
        <Text>{topBorder}</Text>
        {lines.map((line, idx) => <Text key={idx}>{buildLine(line, width)}</Text>)}
        <Text>{buildBorderBottom("Enter: Next | Esc: Back", width)}</Text>
      </Box>
    );
  }

  if (step === "transport") {
    const lines = [
      "",
      "  Wire transport:",
      "",
      ...TRANSPORTS.map((t) => {
        const prefix = t === inputValue ? " ▸ " : "   ";
        const desc = t === "websocket" ? " (browser-friendly, default)" : " (line-delimited JSON, Node-only)";
        return t === inputValue
          ? `\x1b[36m${prefix}${t}${desc}\x1b[0m`
          : `${prefix}${t}${desc}`;
      }),
      "",
    ];
    return (
      <Box flexDirection="column">
        <Text>{topBorder}</Text>
        {lines.map((line, idx) => <Text key={idx}>{buildLine(line, width)}</Text>)}
        <Text>{buildBorderBottom("↑/↓: Select | Enter: Next | Esc: Back", width)}</Text>
      </Box>
    );
  }

  if (step === "confirm") {
    const configLines = [
      "",
      "  Server configuration summary:",
      "",
      `  SGBD path:  ${sgbdPath || "(not set)"}`,
      `  Host:       ${host}`,
      `  Port:       ${port}`,
      `  Transport:  ${transport}`,
      "",
      `  Output: ${outputPath}`,
      "",
    ];
    const choices = ["Save configuration", "Start over"];
    return (
      <Box flexDirection="column">
        <Text>{topBorder}</Text>
        {configLines.map((line, idx) => <Text key={idx}>{buildLine(line, width)}</Text>)}
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
        <Text>{buildBorderBottom("↑/↓: Select | Enter: Confirm | Esc: Back", width)}</Text>
      </Box>
    );
  }

  return null;
}
