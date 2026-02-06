import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import path from "node:path";
import { Ediabas } from "@ediabas/ediabas";
import type { EdiabasJobResult } from "@ediabas/ediabas";
import { createInterface } from "@ediabas/interfaces";
import type { InterfaceOptions } from "@ediabas/interfaces";
import { useStdoutDimensions } from "./useStdoutDimensions.js";
import { ItemsPanel } from "./ItemsPanel.js";
import { ContentPanel } from "./ContentPanel.js";

type RunnerAppProps = {
  filePath: string;
  jobs: string[];
  interfaceName: string;
  interfaceOptions: InterfaceOptions;
  timeoutMs: number;
};

type ResultLine = {
  text: string;
  color?: string;
  dimColor?: boolean;
  bold?: boolean;
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

function formatInterfaceLabel(name: string): string {
  if (!name) return "Simulation";
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function formatResultValue(result: EdiabasJobResult): string {
  if (result.value instanceof Uint8Array) {
    const hex = Array.from(result.value)
      .map((byte) => byte.toString(16).padStart(2, "0").toUpperCase())
      .join(" ");
    if (hex.length > 60) {
      return `[${result.value.length} bytes] ` + hex.slice(0, 57) + "...";
    }
    return `[${result.value.length} bytes] ${hex}`;
  }
  if (typeof result.value === "number") {
    return result.value.toString();
  }
  if (typeof result.value === "string") {
    return result.value;
  }
  return String(result.value);
}

function buildResultsTable(results: EdiabasJobResult[]): ResultLine[] {
  if (results.length === 0) {
    return [{ text: "No results returned.", dimColor: true }];
  }

  const nameWidth = Math.max(4, ...results.map((result) => result.name.length));
  const typeWidth = Math.max(4, ...results.map((result) => result.type.length));

  const header = `${"Name".padEnd(nameWidth)} | ${"Type".padEnd(typeWidth)} | Value`;
  const separator = `${"─".repeat(nameWidth)}-+-${"─".repeat(typeWidth)}-+-${"─".repeat(5)}`;

  const lines: ResultLine[] = [
    { text: header, bold: true },
    { text: separator, dimColor: true },
  ];

  for (const result of results) {
    lines.push({
      text: `${result.name.padEnd(nameWidth)} | ${result.type.padEnd(typeWidth)} | ${formatResultValue(result)}`,
    });
  }

  return lines;
}

export function RunnerApp({ filePath, jobs, interfaceName, interfaceOptions, timeoutMs }: RunnerAppProps) {
  const { exit } = useApp();
  const [width, height] = useStdoutDimensions();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<EdiabasJobResult[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const safeWidth = Math.max(40, width || 80);
  const safeHeight = Math.max(12, height || 20);
  const innerWidth = Math.max(0, safeWidth - 2);

  const interfaceHeight = 3;
  const contentHeight = Math.max(6, safeHeight - 2);
  const upperHeight = Math.max(3, contentHeight - interfaceHeight);

  const itemsPanelWidth = Math.min(Math.max(22, Math.floor(innerWidth * 0.3)), 40) + 1;
  const rightPanelWidth = innerWidth - itemsPanelWidth + 1;

  const shortcuts = "↑/↓ Navigate  Enter Run  q/Ctrl+C Quit";
  const topBorder = buildTopBorder(`Ediabas · ${path.basename(filePath)}`, safeWidth);
  const bottomBorder = buildBottomBorder(shortcuts, safeWidth);

  useEffect(() => {
    if (jobs.length === 0) {
      setSelectedIndex(0);
      return;
    }
    setSelectedIndex((value) => Math.max(0, Math.min(value, jobs.length - 1)));
  }, [jobs]);

  const runJob = async (jobName: string): Promise<void> => {
    if (isRunning) return;

    setIsRunning(true);
    setErrorMessage(null);
    setResults(null);

    const ecuPath = path.dirname(path.resolve(filePath));
    const useSimulation = interfaceName === "simulation";
    const transport = useSimulation ? undefined : createInterface(interfaceName, interfaceOptions);

    const ediabas = new Ediabas({
      ecuPath,
      transport,
      simulation: useSimulation,
      timeout: Number.isFinite(timeoutMs) ? timeoutMs : 5000,
      logging: false,
    });

    let connected = false;

    try {
      await ediabas.loadSgbd(path.basename(filePath));

      if (!useSimulation) {
        await ediabas.connect();
        connected = true;
      }

      const jobResults = await ediabas.executeJob(jobName, { params: [] });
      setResults(jobResults);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setErrorMessage(message);
    } finally {
      if (connected) {
        try {
          await ediabas.disconnect();
        } catch {
          // ignore disconnect errors in the TUI runner
        }
      }
      setIsRunning(false);
    }
  };

  useInput((input, key) => {
    if (key.ctrl && input === "c") {
      exit();
      return;
    }
    if (input === "q" || input === "Q") {
      exit();
      return;
    }

    if (key.return) {
      const jobName = jobs[selectedIndex];
      if (!jobName) return;
      void runJob(jobName);
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

  const interfaceText = useMemo(
    () => `Type: ${formatInterfaceLabel(interfaceName)}`,
    [interfaceName]
  );
  const interfaceWidth = innerWidth;
  const interfaceTop = buildPanelTop("Interface", interfaceWidth);
  const interfaceLine = buildPanelLine(interfaceText, interfaceWidth);
  const interfaceBottom = buildPanelBottom(interfaceWidth);

  const resultLines = useMemo<ResultLine[]>(() => {
    if (isRunning) {
      return [{ text: "Running...", color: "yellow" }];
    }

    if (errorMessage) {
      return [
        { text: "Error:", color: "red", bold: true },
        { text: errorMessage, color: "red" },
      ];
    }

    if (!results) {
      return [{ text: "Press Enter to run the selected job.", dimColor: true }];
    }

    return buildResultsTable(results);
  }, [errorMessage, isRunning, results]);

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
            lines={resultLines}
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
