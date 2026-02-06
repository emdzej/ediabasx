import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import path from "node:path";
import { Ediabas, type EdiabasJobResult } from "@ediabas/ediabas";
import type { PrgJob } from "@ediabas/best-parser";
import { createInterface } from "@ediabas/interfaces";
import type { InterfaceOptions } from "@ediabas/interfaces";
import { useStdoutDimensions } from "./useStdoutDimensions.js";
import { ItemsPanel } from "./ItemsPanel.js";
import { ContentPanel } from "./ContentPanel.js";

type RunnerJob = {
  name: string;
  args: PrgJob["args"];
};

type RunnerAppProps = {
  filePath: string;
  jobs: RunnerJob[];
  interfaceLabel?: string;
  selection: {
    name: string;
    options: InterfaceOptions;
  };
  timeoutMs: number;
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

export function RunnerApp({
  filePath,
  jobs,
  interfaceLabel,
  selection,
  timeoutMs,
}: RunnerAppProps) {
  const { exit } = useApp();
  const [width, height] = useStdoutDimensions();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [results, setResults] = useState<string[]>([]);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [dialog, setDialog] = useState<null | { job: RunnerJob; value: string }>(null);

  const safeWidth = Math.max(40, width || 80);
  const safeHeight = Math.max(12, height || 20);
  const innerWidth = Math.max(0, safeWidth - 2);

  const interfaceLines = useMemo(() => {
    const lines = [`Type: ${interfaceLabel ?? "Simulation"}`];
    if (dialog) {
      const argNames = dialog.job.args.map((arg) => arg.name).join(", ");
      const label = argNames ? `Args (${argNames})` : "Args";
      lines.push(`${label}: ${dialog.value}_`);
    } else if (statusMessage) {
      lines.push(statusMessage);
    }
    return lines;
  }, [dialog, interfaceLabel, statusMessage]);

  const interfaceHeight = Math.max(3, interfaceLines.length + 2);
  const contentHeight = Math.max(6, safeHeight - 2);
  const upperHeight = Math.max(3, contentHeight - interfaceHeight);

  const itemsPanelWidth = Math.min(Math.max(22, Math.floor(innerWidth * 0.3)), 40) + 1;
  const rightPanelWidth = innerWidth - itemsPanelWidth + 1;

  const shortcuts = dialog
    ? "Enter Submit  Esc Cancel  q/Ctrl+C Quit"
    : "↑/↓ Navigate  Enter Run  q/Ctrl+C Quit";
  const topBorder = buildTopBorder(`Ediabas · ${path.basename(filePath)}`, safeWidth);
  const bottomBorder = buildBottomBorder(shortcuts, safeWidth);

  const jobNames = useMemo(() => jobs.map((job) => job.name), [jobs]);

  useEffect(() => {
    if (jobs.length === 0) {
      setSelectedIndex(0);
      return;
    }
    setSelectedIndex((value) => Math.max(0, Math.min(value, jobs.length - 1)));
  }, [jobs]);

  const formatResultValue = (result: EdiabasJobResult): string => {
    if (result.value instanceof Uint8Array) {
      const hex = Array.from(result.value)
        .map((byte) => byte.toString(16).padStart(2, "0").toUpperCase())
        .join(" ");
      if (hex.length > 60) {
        return `[${result.value.length} bytes] ${hex.slice(0, 57)}...`;
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
  };

  const formatResultsLines = (jobResults: EdiabasJobResult[]): string[] => {
    if (jobResults.length === 0) {
      return ["No results returned."];
    }

    const nameWidth = Math.max(6, ...jobResults.map((result) => result.name.length));
    const typeWidth = Math.max(6, ...jobResults.map((result) => result.type.length));

    const lines: string[] = [];
    lines.push(`${"Name".padEnd(nameWidth)}  ${"Type".padEnd(typeWidth)}  Value`);
    lines.push(`${"─".repeat(nameWidth)}  ${"─".repeat(typeWidth)}  ${"─".repeat(30)}`);

    for (const result of jobResults) {
      const valueStr = formatResultValue(result);
      lines.push(`${result.name.padEnd(nameWidth)}  ${result.type.padEnd(typeWidth)}  ${valueStr}`);
    }

    return lines;
  };

  const parseArgsInput = (value: string): string[] => {
    const trimmed = value.trim();
    if (!trimmed) return [];
    if (trimmed.includes(",")) {
      return trimmed.split(",").map((item) => item.trim()).filter(Boolean);
    }
    return trimmed.split(/\s+/).map((item) => item.trim()).filter(Boolean);
  };

  const runJob = async (job: RunnerJob, params: string[]): Promise<void> => {
    if (isRunning) return;
    setIsRunning(true);
    setResults([]);
    setStatusMessage(`Executing ${job.name}...`);

    const ecuPath = path.dirname(path.resolve(filePath));
    const useSimulation = selection.name === "simulation";
    const transport = useSimulation ? undefined : createInterface(selection.name, selection.options);
    const ediabas = new Ediabas({
      ecuPath,
      transport,
      simulation: useSimulation,
      timeout: Number.isFinite(timeoutMs) ? timeoutMs : 5000,
      logging: false,
    });

    try {
      await ediabas.loadSgbd(path.basename(filePath));

      const startTime = Date.now();
      try {
        if (!useSimulation) {
          await ediabas.connect();
        }
        const jobResults = await ediabas.executeJob(job.name, { params });
        const executionTime = Date.now() - startTime;
        setResults(formatResultsLines(jobResults));
        setStatusMessage(`Done in ${executionTime}ms`);
      } finally {
        if (!useSimulation) {
          await ediabas.disconnect();
        }
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setResults([`Error: ${message}`]);
      setStatusMessage("Execution failed");
    } finally {
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

    if (dialog) {
      if (key.escape) {
        setDialog(null);
        return;
      }
      if (key.return) {
        const args = parseArgsInput(dialog.value);
        if (args.length < dialog.job.args.length) {
          setStatusMessage(`Expected ${dialog.job.args.length} argument(s)`);
          return;
        }
        setDialog(null);
        void runJob(dialog.job, args);
        return;
      }
      if (key.backspace || key.delete) {
        setDialog((current) => (current ? { ...current, value: current.value.slice(0, -1) } : current));
        return;
      }
      if (input) {
        setDialog((current) => (current ? { ...current, value: current.value + input } : current));
      }
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
      return;
    }

    if (key.return) {
      const job = jobs[selectedIndex];
      if (!job || isRunning) return;
      if (job.args.length > 0) {
        setDialog({ job, value: "" });
        return;
      }
      void runJob(job, []);
    }
  });

  const interfaceWidth = innerWidth;
  const interfaceTop = buildPanelTop(dialog ? "Input" : "Interface", interfaceWidth);
  const interfaceBottom = buildPanelBottom(interfaceWidth);

  return (
    <Box flexDirection="column" width={safeWidth} height={safeHeight}>
      <Text>{topBorder}</Text>
      <Box flexDirection="column" height={safeHeight - 2}>
        <Box flexDirection="row" height={upperHeight}>
          <ItemsPanel
            title="Jobs"
            items={jobNames}
            selectedIndex={selectedIndex}
            height={upperHeight}
            width={itemsPanelWidth}
            focused={true}
            emptyMessage="No jobs"
            outerBorderLeft={true}
          />
          <ContentPanel
            title="Results"
            lines={results}
            height={upperHeight}
            width={rightPanelWidth}
            focused={false}
            outerBorderRight={true}
          />
        </Box>
        <Box flexDirection="column" height={interfaceHeight}>
          <Text>│{interfaceTop}│</Text>
          {interfaceLines.map((line, index) => (
            <Text key={`interface-${index}`}>│{buildPanelLine(line, interfaceWidth)}│</Text>
          ))}
          <Text>│{interfaceBottom}│</Text>
        </Box>
      </Box>
      <Text>{bottomBorder}</Text>
    </Box>
  );
}
