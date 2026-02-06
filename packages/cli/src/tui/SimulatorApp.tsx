import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import type { SimulatorServer } from "../simulator/SimulatorServer.js";
import { useStdoutDimensions } from "./useStdoutDimensions.js";

const SHORTCUTS = "↑/↓: Scroll | Tab: Mode | Ctrl+L: Line Ending | Ctrl+R: Focus | Ctrl+C: Exit";

type SimulatorAppProps = {
  host: string;
  port: number;
  server: SimulatorServer;
  defaultMode?: InputMode;
  defaultLineEnding?: LineEnding;
  onExit?: () => Promise<void> | void;
};

type FocusTarget = "raw" | "hex";

type InputMode = "text" | "hex";

type LineEnding = "crlf" | "lf" | "raw";

function truncate(text: string, maxWidth: number): string {
  if (text.length <= maxWidth) return text;
  if (maxWidth <= 0) return "";
  if (maxWidth <= 3) return text.slice(0, maxWidth);
  return text.slice(0, maxWidth - 3) + "...";
}

function buildTopBorder(title: string, width: number): string {
  const innerWidth = Math.max(0, width - 2);
  const titlePart = title ? `─${title}` : "";
  const fillWidth = Math.max(0, innerWidth - titlePart.length);
  return `╭${titlePart}${"─".repeat(fillWidth)}╮`;
}

function buildBottomBorder(label: string, width: number): string {
  const innerWidth = Math.max(0, width - 2);
  const labelPart = truncate(label, innerWidth);
  const fillWidth = Math.max(0, innerWidth - labelPart.length);
  return `╰${labelPart}${"─".repeat(fillWidth)}╯`;
}

function buildMiddleBorder(label: string, width: number): string {
  const innerWidth = Math.max(0, width - 2);
  const labelPart = truncate(label, innerWidth);
  const fillWidth = Math.max(0, innerWidth - labelPart.length);
  return `├${labelPart}${"─".repeat(fillWidth)}┤`;
}

function buildContentLine(content: string, width: number): string {
  const innerWidth = Math.max(0, width - 2);
  const text = truncate(content, innerWidth).padEnd(innerWidth, " ");
  return `│${text}│`;
}

function isPrintable(byte: number): boolean {
  return byte >= 32 && byte <= 126;
}

function formatRawLines(data: Uint8Array, width: number): string[] {
  if (data.length === 0) return [""];
  const characters = Array.from(data, (byte) => (isPrintable(byte) ? String.fromCharCode(byte) : "·")).join("");
  const lines: string[] = [];
  for (let index = 0; index < characters.length; index += width) {
    lines.push(characters.slice(index, index + width));
  }
  return lines.length > 0 ? lines : [""];
}

function formatHexLines(data: Uint8Array, width: number): string[] {
  if (data.length === 0) return [""];
  const bytesPerLine = Math.max(1, Math.min(16, Math.floor((width - 5) / 3)));
  const lines: string[] = [];
  for (let offset = 0; offset < data.length; offset += bytesPerLine) {
    const slice = data.slice(offset, offset + bytesPerLine);
    const hex = Array.from(slice)
      .map((byte) => byte.toString(16).padStart(2, "0").toUpperCase())
      .join(" ");
    const label = offset.toString(16).padStart(4, "0").toUpperCase();
    lines.push(`${label}: ${hex}`);
  }
  return lines.length > 0 ? lines : [""];
}

function parseHexInput(value: string): Uint8Array {
  const trimmed = value.trim();
  if (!trimmed) return new Uint8Array();
  const parts = trimmed.split(/\s+/);
  const bytes: number[] = [];
  for (const part of parts) {
    if (!/^[0-9a-fA-F]{2}$/.test(part)) {
      throw new Error("Invalid hex input");
    }
    bytes.push(Number.parseInt(part, 16));
  }
  return Uint8Array.from(bytes);
}

function appendLineEnding(data: Uint8Array, lineEnding: LineEnding): Uint8Array {
  if (lineEnding === "raw") return data;
  const suffix = lineEnding === "crlf" ? "\r\n" : "\n";
  const suffixBytes = new TextEncoder().encode(suffix);
  if (data.length === 0) {
    return suffixBytes;
  }
  const merged = new Uint8Array(data.length + suffixBytes.length);
  merged.set(data, 0);
  merged.set(suffixBytes, data.length);
  return merged;
}

export function SimulatorApp({ host, port, server, defaultMode, defaultLineEnding, onExit }: SimulatorAppProps) {
  const { exit } = useApp();
  const [width, height] = useStdoutDimensions();
  const [isExiting, setIsExiting] = useState(false);
  const [clientCount, setClientCount] = useState(server.clientCount);
  const [rawLines, setRawLines] = useState<string[]>([]);
  const [hexLines, setHexLines] = useState<string[]>([]);
  const [rawScroll, setRawScroll] = useState(0);
  const [hexScroll, setHexScroll] = useState(0);
  const [focus, setFocus] = useState<FocusTarget>("raw");
  const [inputMode, setInputMode] = useState<InputMode>(defaultMode ?? "text");
  const [lineEnding, setLineEnding] = useState<LineEnding>(defaultLineEnding ?? "crlf");
  const [inputValue, setInputValue] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleExit = useCallback(async () => {
    if (isExiting) return;
    setIsExiting(true);
    await onExit?.();
    exit();
  }, [exit, isExiting, onExit]);

  const safeWidth = Math.max(30, width || 80);
  const safeHeight = Math.max(7, height || 20);
  const innerWidth = Math.max(0, safeWidth - 2);
  const innerHeight = Math.max(0, safeHeight - 2);
  const contentHeight = Math.max(0, innerHeight - 3);
  const rawContentHeight = Math.max(0, Math.floor(contentHeight / 2));
  const hexContentHeight = Math.max(0, contentHeight - rawContentHeight);

  const rawHeightRef = useRef(rawContentHeight);
  const hexHeightRef = useRef(hexContentHeight);

  useEffect(() => {
    rawHeightRef.current = rawContentHeight;
    hexHeightRef.current = hexContentHeight;
  }, [rawContentHeight, hexContentHeight]);

  useEffect(() => {
    const handleData = (data: Uint8Array) => {
      setRawLines((prev) => {
        const next = [...prev, ...formatRawLines(data, innerWidth)];
        setRawScroll(Math.max(0, next.length - rawHeightRef.current));
        return next;
      });
      setHexLines((prev) => {
        const next = [...prev, ...formatHexLines(data, innerWidth)];
        setHexScroll(Math.max(0, next.length - hexHeightRef.current));
        return next;
      });
    };

    const handleClientCount = (count: number) => {
      setClientCount(count);
    };

    server.on("data", handleData);
    server.on("clientCount", handleClientCount);
    setClientCount(server.clientCount);

    return () => {
      server.off("data", handleData);
      server.off("clientCount", handleClientCount);
    };
  }, [innerWidth, server]);

  useEffect(() => {
    if (!statusMessage) return;
    const timeout = setTimeout(() => {
      setStatusMessage(null);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [statusMessage]);

  const maxRawScroll = Math.max(0, rawLines.length - rawContentHeight);
  const maxHexScroll = Math.max(0, hexLines.length - hexContentHeight);

  useEffect(() => {
    setRawScroll((value) => Math.min(value, maxRawScroll));
  }, [maxRawScroll]);

  useEffect(() => {
    setHexScroll((value) => Math.min(value, maxHexScroll));
  }, [maxHexScroll]);

  useInput((input, key) => {
    if (key.ctrl && input === "c") {
      void handleExit();
      return;
    }
    if (key.ctrl && (input === "r" || input === "R")) {
      setFocus((value) => (value === "raw" ? "hex" : "raw"));
      return;
    }
    if (key.ctrl && (input === "l" || input === "L")) {
      setLineEnding((value) => {
        if (value === "crlf") return "lf";
        if (value === "lf") return "raw";
        return "crlf";
      });
      return;
    }
    if (key.tab) {
      setInputMode((value) => (value === "text" ? "hex" : "text"));
      return;
    }
    if (key.return) {
      try {
        const payload =
          inputMode === "text"
            ? new TextEncoder().encode(inputValue)
            : parseHexInput(inputValue);
        const framed = appendLineEnding(payload, lineEnding);
        server.queueResponse(framed);
        setInputValue("");
        setStatusMessage("Response queued");
      } catch {
        setStatusMessage("Invalid hex input");
      }
      return;
    }
    if (key.backspace || key.delete) {
      setInputValue((value) => value.slice(0, -1));
      return;
    }
    if (key.upArrow) {
      if (focus === "raw") {
        setRawScroll((value) => Math.max(0, value - 1));
      } else {
        setHexScroll((value) => Math.max(0, value - 1));
      }
      return;
    }
    if (key.downArrow) {
      if (focus === "raw") {
        setRawScroll((value) => Math.min(maxRawScroll, value + 1));
      } else {
        setHexScroll((value) => Math.min(maxHexScroll, value + 1));
      }
      return;
    }
    if (input) {
      setInputValue((value) => value + input);
    }
  });

  const title = `Simulator · ${host}:${port} · Clients: ${clientCount}`;
  const topBorder = buildTopBorder(truncate(title, innerWidth), safeWidth);
  const shortcuts = statusMessage ? `${SHORTCUTS} | ${statusMessage}` : SHORTCUTS;
  const bottomBorder = buildBottomBorder(shortcuts, safeWidth);

  const rawLabel = focus === "raw" ? " RAW * " : " RAW ";
  const hexLabel = focus === "hex" ? " HEX * " : " HEX ";

  const rawHeader = buildContentLine(rawLabel, safeWidth);
  const hexHeader = buildMiddleBorder(hexLabel, safeWidth);

  const modeLabel = inputMode.toUpperCase();
  const lineEndingLabel = lineEnding.toUpperCase();
  const promptPrefix = `[${modeLabel}] [${lineEndingLabel}] > `;
  const promptLine = buildContentLine(`${promptPrefix}${inputValue}_`, safeWidth);

  const rawVisibleLines = useMemo(() => {
    const slice = rawLines.slice(rawScroll, rawScroll + rawContentHeight);
    return slice.concat(Array.from({ length: Math.max(0, rawContentHeight - slice.length) }, () => ""));
  }, [rawLines, rawScroll, rawContentHeight]);

  const hexVisibleLines = useMemo(() => {
    const slice = hexLines.slice(hexScroll, hexScroll + hexContentHeight);
    return slice.concat(Array.from({ length: Math.max(0, hexContentHeight - slice.length) }, () => ""));
  }, [hexLines, hexScroll, hexContentHeight]);

  return (
    <Box flexDirection="column" width={safeWidth} height={safeHeight}>
      <Text>{topBorder}</Text>
      <Text>{rawHeader}</Text>
      {rawVisibleLines.map((line, index) => (
        <Text key={`raw-${index}`}>{buildContentLine(line, safeWidth)}</Text>
      ))}
      <Text>{hexHeader}</Text>
      {hexVisibleLines.map((line, index) => (
        <Text key={`hex-${index}`}>{buildContentLine(line, safeWidth)}</Text>
      ))}
      <Text>{promptLine}</Text>
      <Text>{bottomBorder}</Text>
    </Box>
  );
}
