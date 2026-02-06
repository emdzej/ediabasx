import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import path from "node:path";
import { useStdoutDimensions } from "./useStdoutDimensions.js";
import { ItemsPanel } from "./ItemsPanel.js";
import { ContentPanel } from "./ContentPanel.js";

type RunnerResult = {
  lines: string[];
  executionTimeMs?: number;
  error?: string;
};

type RunnerAppProps = {
  filePath: string;
  jobs: string[];
  interfaceLabel?: string;
  onRun?: (jobName: string) => Promise<RunnerResult>;
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

export function RunnerApp({ filePath, jobs, interfaceLabel, onRun }: RunnerAppProps) {
  const { exit } = useApp();
  const [width, height] = useStdoutDimensions();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [focusedPanel, setFocusedPanel] = useState<"items" | "results">("items");
  const [resultsLines, setResultsLines] = useState<string[]>([]);
  const [resultsScroll, setResultsScroll] = useState(0);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const safeWidth = Math.max(40, width || 80);
  const safeHeight = Math.max(12, height || 20);
  const innerWidth = Math.max(0, safeWidth - 2);

  const interfaceHeight = 3;
  const contentHeight = Math.max(6, safeHeight - 2);
  const upperHeight = Math.max(3, contentHeight - interfaceHeight);
  const resultsViewport = Math.max(1, upperHeight - 2);

  const itemsPanelWidth = Math.min(Math.max(22, Math.floor(innerWidth * 0.3)), 40) + 1;
  const rightPanelWidth = innerWidth - itemsPanelWidth + 1;

  const filteredJobs = useMemo(() => {
    if (!searchQuery) return jobs;
    const lower = searchQuery.toLowerCase();
    return jobs.filter((job) => job.toLowerCase().includes(lower));
  }, [jobs, searchQuery]);

  const selectedJob = filteredJobs[selectedIndex] ?? null;
  const maxResultsScroll = Math.max(0, resultsLines.length - resultsViewport);

  const baseShortcuts = "↑/↓: Navigate | Enter/R: Run | Tab: Panels | /: Search | Q/Ctrl+C: Quit";
  const searchHint = isSearchActive ? `Search: ${searchQuery}_` : null;
  const shortcuts = statusMessage
    ? `${baseShortcuts} | ${statusMessage}`
    : searchHint
      ? `${baseShortcuts} | ${searchHint}`
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

  const handleRun = async () => {
    if (!selectedJob) return;
    if (!onRun) {
      setStatusMessage("Run unavailable");
      return;
    }
    if (isRunning) return;

    setIsRunning(true);
    setStatusMessage("Running...");

    try {
      const result = await onRun(selectedJob);
      if (result.error) {
        setResultsLines([`Error: ${result.error}`]);
        setStatusMessage(result.error);
      } else {
        setResultsLines(result.lines.length > 0 ? result.lines : ["No results returned."]);
        if (typeof result.executionTimeMs === "number") {
          setStatusMessage(`Done in ${result.executionTimeMs}ms`);
        } else {
          setStatusMessage("Done");
        }
      }
      setResultsScroll(0);
      setFocusedPanel("results");
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setResultsLines([`Error: ${message}`]);
      setStatusMessage(message);
      setResultsScroll(0);
      setFocusedPanel("results");
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
      void handleRun();
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

  const interfaceText = useMemo(() => `Type: ${interfaceLabel ?? "Simulation"}`, [interfaceLabel]);
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
            items={filteredJobs}
            selectedIndex={selectedIndex}
            height={upperHeight}
            width={itemsPanelWidth}
            focused={focusedPanel === "items"}
            emptyMessage={searchQuery ? "No matches" : "No jobs"}
            outerBorderLeft={true}
          />
          <ContentPanel
            title="Results"
            lines={resultsLines}
            height={upperHeight}
            width={rightPanelWidth}
            focused={focusedPanel === "results"}
            scrollOffset={resultsScroll}
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
