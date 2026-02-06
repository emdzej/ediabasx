import React, { useCallback, useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import { useStdoutDimensions } from "./useStdoutDimensions.js";

const SHORTCUTS = "Tab: Mode | Ctrl+L: Line ending | Ctrl+C: Exit";

type SimulatorAppProps = {
  host: string;
  port: number;
  onExit?: () => Promise<void> | void;
};

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

export function SimulatorApp({ host, port, onExit }: SimulatorAppProps) {
  const { exit } = useApp();
  const [width, height] = useStdoutDimensions();
  const [isExiting, setIsExiting] = useState(false);

  const handleExit = useCallback(async () => {
    if (isExiting) return;
    setIsExiting(true);
    await onExit?.();
    exit();
  }, [exit, isExiting, onExit]);

  useInput((input, key) => {
    if (key.ctrl && input === "c") {
      void handleExit();
    }
  });

  const safeWidth = Math.max(30, width || 80);
  const safeHeight = Math.max(5, height || 20);
  const innerWidth = Math.max(0, safeWidth - 2);
  const innerHeight = Math.max(0, safeHeight - 2);

  const title = `Simulator · ${host}:${port}`;
  const topBorder = buildTopBorder(truncate(title, innerWidth), safeWidth);
  const bottomBorder = buildBottomBorder(SHORTCUTS, safeWidth);

  const emptyLine = `│${" ".repeat(innerWidth)}│`;
  const contentLines = Array.from({ length: innerHeight }, () => emptyLine);

  return (
    <Box flexDirection="column" width={safeWidth} height={safeHeight}>
      <Text>{topBorder}</Text>
      {contentLines.map((line, index) => (
        <Text key={index}>{line}</Text>
      ))}
      <Text>{bottomBorder}</Text>
    </Box>
  );
}
