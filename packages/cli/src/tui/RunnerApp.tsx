import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import path from "node:path";
import { useStdoutDimensions } from "./useStdoutDimensions.js";
import { ItemsPanel } from "./ItemsPanel.js";
import { ContentPanel } from "./ContentPanel.js";

type RunnerAppProps = {
  filePath: string;
  jobs: string[];
  interfaceLabel?: string;
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

function buildPanelTop(title: string, width: number): string {
  const innerWidth = Math.max(0, width - 2);
  const titlePart = title ? `─${title}` : "";
  const fillWidth = Math.max(0, innerWidth - titlePart.length);
  return `┌${titlePart}${"─".repeat(fillWidth)}┐`;
}

function buildPanelBottom(width: number): string {
  const innerWidth = Math.max(0, width - 2);
  return `└${"─".repeat(innerWidth)}┘`;
}

function buildPanelLine(content: string, width: number): string {
  const innerWidth = Math.max(0, width - 2);
  const text = truncate(content, innerWidth).padEnd(innerWidth, " ");
  return `│${text}│`;
}

export function RunnerApp({ filePath, jobs, interfaceLabel }: RunnerAppProps) {
  const { exit } = useApp();
  const [width, height] = useStdoutDimensions();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const safeWidth = Math.max(40, width || 80);
  const safeHeight = Math.max(12, height || 20);
  const innerWidth = Math.max(0, safeWidth - 2);

  const interfaceHeight = 3;
  const contentHeight = Math.max(6, safeHeight - 2);
  const upperHeight = Math.max(3, contentHeight - interfaceHeight);

  const itemsPanelWidth = Math.min(Math.max(22, Math.floor(innerWidth * 0.3)), 40) + 1;
  const rightPanelWidth = innerWidth - itemsPanelWidth + 1;

  const shortcuts = "↑/↓ Navigate  q/Ctrl+C Quit";
  const topBorder = buildTopBorder(`Ediabas · ${path.basename(filePath)}`, safeWidth);
  const bottomBorder = buildBottomBorder(shortcuts, safeWidth);

  useEffect(() => {
    if (jobs.length === 0) {
      setSelectedIndex(0);
      return;
    }
    setSelectedIndex((value) => Math.max(0, Math.min(value, jobs.length - 1)));
  }, [jobs]);

  useInput((input, key) => {
    if (key.ctrl && input === "c") {
      exit();
      return;
    }
    if (input === "q" || input === "Q") {
      exit();
      return;
    }

    if (key.upArrow) {
      setSelectedIndex((value) => {
        if (jobs.length === 0) return 0;
        return Math.max(0, value - 1);
      });
      return;
    }

    if (key.downArrow) {
      setSelectedIndex((value) => {
        if (jobs.length === 0) return 0;
        return Math.min(jobs.length - 1, value + 1);
      });
    }
  });

  const interfaceText = useMemo(() => `Type: ${interfaceLabel ?? "Simulation"}`,[interfaceLabel]);
  const interfaceWidth = innerWidth;
  const interfaceTop = buildPanelTop("Interface", interfaceWidth);
  const interfaceLine = buildPanelLine(interfaceText, interfaceWidth);
  const interfaceBottom = buildPanelBottom(interfaceWidth);

  return (
    <Box flexDirection="column" width={safeWidth} height={safeHeight}>
      <Text>{topBorder}</Text>
      <Box flexDirection="column" height={safeHeight - 2}>
        <Box flexDirection="row" height={upperHeight}>
          <ItemsPanel
            title="Jobs"
            items={jobs}
            selectedIndex={selectedIndex}
            height={upperHeight}
            width={itemsPanelWidth}
            focused={true}
            emptyMessage="No jobs"
            outerBorderLeft={true}
          />
          <ContentPanel
            title="Results"
            lines={[]}
            height={upperHeight}
            width={rightPanelWidth}
            focused={false}
            outerBorderRight={true}
          />
        </Box>
        <Box flexDirection="column" height={interfaceHeight}>
          <Text>│{interfaceTop}│</Text>
          <Text>│{interfaceLine}│</Text>
          <Text>│{interfaceBottom}│</Text>
        </Box>
      </Box>
      <Text>{bottomBorder}</Text>
    </Box>
  );
}
