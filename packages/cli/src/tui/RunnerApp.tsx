import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import path from "node:path";
import type { PrgJob } from "@ediabasx/best-parser";
import type { EdiabasJobResult } from "@ediabasx/ediabas";
import { useStdoutDimensions } from "./useStdoutDimensions.js";
import { ItemsPanel } from "./ItemsPanel.js";
import { ContentPanel } from "./ContentPanel.js";

type RunnerJob = {
  name: string;
  args: PrgJob["args"];
};

type RunnerExecutionResult = {
  results: EdiabasJobResult[];
  executionTimeMs: number;
};

type RunnerAppProps = {
  filePath: string;
  jobs: RunnerJob[];
  interfaceSummary?: string;
  onRun?: (jobName: string, params: string[]) => Promise<RunnerExecutionResult>;
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

function parseArgsInput(value: string): string[] {
  const trimmed = value.trim();
  if (!trimmed) return [];
  if (trimmed.includes(",")) {
    return trimmed.split(",").map((item) => item.trim()).filter(Boolean);
  }
  return trimmed.split(/\s+/).map((item) => item.trim()).filter(Boolean);
}

export function RunnerApp({ filePath, jobs, interfaceSummary, onRun }: RunnerAppProps) {
  const { exit } = useApp();
  const [width, height] = useStdoutDimensions();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [focusedPanel, setFocusedPanel] = useState<"items" | "results">("items");
  const [results, setResults] = useState<ResultLine[]>([]);
  const [resultsScroll, setResultsScroll] = useState(0);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dialog, setDialog] = useState<null | { job: RunnerJob; value: string }>(null);

  const safeWidth = Math.max(40, width || 80);
  const safeHeight = Math.max(12, height || 20);
  const innerWidth = Math.max(0, safeWidth - 2);

  const interfaceLines = useMemo(() => {
    const lines = [interfaceSummary ?? "Simulation"];
    if (dialog) {
      const argNames = dialog.job.args.map((arg) => arg.name).join(", ");
      const label = argNames ? `Args (${argNames})` : "Args";
      lines.push(`${label}: ${dialog.value}_`);
    } else if (statusMessage) {
      lines.push(statusMessage);
    }
    return lines;
  }, [dialog, interfaceSummary, statusMessage]);

  const interfaceHeight = Math.max(3, interfaceLines.length + 2);
  const contentHeight = Math.max(6, safeHeight - 2);
  const upperHeight = Math.max(3, contentHeight - interfaceHeight);
  const resultsViewport = Math.max(1, upperHeight - 2);

  const itemsPanelWidth = Math.min(Math.max(22, Math.floor(innerWidth * 0.3)), 40) + 1;
  const rightPanelWidth = innerWidth - itemsPanelWidth + 1;

  const filteredJobs = useMemo(() => {
    if (!searchQuery) return jobs;
    const lower = searchQuery.toLowerCase();
    return jobs.filter((job) => job.name.toLowerCase().includes(lower));
  }, [jobs, searchQuery]);

  const selectedJob = filteredJobs[selectedIndex] ?? null;
  const maxResultsScroll = Math.max(0, results.length - resultsViewport);

  const baseShortcuts = dialog
    ? "Enter: Submit | Esc: Cancel | Q/Ctrl+C: Quit"
    : "↑/↓: Navigate | Enter/R: Run | Tab: Panels | /: Search | Q/Ctrl+C: Quit";
  const shortcuts = dialog
    ? baseShortcuts
    : isSearchActive
      ? `${baseShortcuts} | Search: ${searchQuery}_`
      : statusMessage
        ? `${baseShortcuts} | ${statusMessage}`
        : baseShortcuts;

  const topBorder = buildTopBorder(`Ediabas · ${path.basename(filePath)}`, safeWidth);
  const bottomBorder = buildBottomBorder(shortcuts, safeWidth);

  useEffect(() => {
    if (filteredJobs.length === 0) {
      setSelectedIndex(0);
      return;
    }
    setSelectedIndex((value) => Math.max(0, Math.min(value, filteredJobs.length - 1)));
  }, [filteredJobs]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  useEffect(() => {
    setResultsScroll((value) => Math.min(value, maxResultsScroll));
  }, [maxResultsScroll]);

  const handleRun = async (job: RunnerJob, params: string[]) => {
    if (!onRun) {
      setStatusMessage("Run unavailable");
      return;
    }
    if (isRunning) return;

    setIsRunning(true);
    setStatusMessage("Running...");
    setResults([{ text: "Running...", color: "yellow" }]);

    try {
      const result = await onRun(job.name, params);
      setResults(buildResultsTable(result.results));
      setResultsScroll(0);
      setFocusedPanel("results");
      setStatusMessage(`Done in ${result.executionTimeMs}ms`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setResults([
        { text: "Error:", color: "red", bold: true },
        { text: message, color: "red" },
      ]);
      setResultsScroll(0);
      setFocusedPanel("results");
      setStatusMessage(message);
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
        void handleRun(dialog.job, args);
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

    if (isSearchActive) {
      if (key.escape) {
        setIsSearchActive(false);
        setSearchQuery("");
        return;
      }
      if (key.return) {
        setIsSearchActive(false);
        return;
      }
      if (key.backspace || key.delete) {
        setSearchQuery((value) => value.slice(0, -1));
        return;
      }
      if (input && !key.ctrl && !key.meta) {
        setSearchQuery((value) => value + input);
        return;
      }
      return;
    }

    if (input === "/") {
      setIsSearchActive(true);
      setSearchQuery("");
      return;
    }

    if ((input === "r" || input === "R") || key.return) {
      if (!selectedJob || isRunning) return;
      if (selectedJob.args.length > 0) {
        setDialog({ job: selectedJob, value: "" });
        return;
      }
      void handleRun(selectedJob, []);
      return;
    }

    if (key.tab) {
      setFocusedPanel((current) => (current === "items" ? "results" : "items"));
      return;
    }

    if (key.upArrow) {
      if (focusedPanel === "items") {
        if (filteredJobs.length === 0) return;
        setSelectedIndex((value) => Math.max(0, value - 1));
      } else {
        setResultsScroll((value) => Math.max(0, value - 1));
      }
      return;
    }

    if (key.downArrow) {
      if (focusedPanel === "items") {
        if (filteredJobs.length === 0) return;
        setSelectedIndex((value) => Math.min(filteredJobs.length - 1, value + 1));
      } else {
        setResultsScroll((value) => Math.min(maxResultsScroll, value + 1));
      }
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
            items={filteredJobs.map((job) => job.name)}
            selectedIndex={selectedIndex}
            height={upperHeight}
            width={itemsPanelWidth}
            focused={focusedPanel === "items"}
            emptyMessage={searchQuery ? "No matches" : "No jobs"}
            outerBorderLeft={true}
          />
          <ContentPanel
            title="Results"
            lines={results}
            height={upperHeight}
            width={rightPanelWidth}
            focused={focusedPanel === "results"}
            scrollOffset={resultsScroll}
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
