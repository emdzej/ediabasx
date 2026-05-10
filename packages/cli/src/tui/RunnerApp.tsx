import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import path from "node:path";
import type { PrgJob } from "@emdzej/ediabasx-best-parser";
import type { EdiabasJobResult } from "@emdzej/ediabasx-ediabas";
import { useStdoutDimensions } from "./useStdoutDimensions.js";
import { ItemsPanel } from "./ItemsPanel.js";
import { ContentPanel } from "./ContentPanel.js";
import { DetailsPanel } from "./DetailsPanel.js";

type RunnerJob = {
  name: string;
  comment?: string;
  args: PrgJob["args"];
  results: PrgJob["results"];
};

// Mirrors `formatJobDetails` in the Explore TUI so the user gets the same
// view of the selected job's metadata, just inline above the results.
function formatJobDetails(job: RunnerJob | null): string[] {
  if (!job) return ["No job selected."];
  const lines: string[] = [];
  lines.push(`Name: ${job.name}`);
  if (job.comment) lines.push(`Comment: ${job.comment}`);
  if (job.args.length > 0) {
    lines.push("Args:");
    for (const arg of job.args) {
      const comment = arg.comment ? ` - ${arg.comment}` : "";
      lines.push(`  ${arg.name}: ${arg.type}${comment}`);
    }
  }
  if (job.results.length > 0) {
    lines.push("Results:");
    for (const result of job.results) {
      const comment = result.comment ? ` - ${result.comment}` : "";
      lines.push(`  ${result.name}: ${result.type}${comment}`);
    }
  }
  return lines;
}

type RunnerExecutionResult = {
  resultSets: EdiabasJobResult[][];
  executionTimeMs: number;
};

type ConnectionPhase = "idle" | "connecting" | "connected" | "error" | "disconnected";

type ConnectionStatus = {
  phase: ConnectionPhase;
  message: string;
  ready: boolean;
};

type RunnerAppProps = {
  filePath: string;
  jobs: RunnerJob[];
  interfaceSummary?: string;
  onRun?: (jobName: string, params: string[]) => Promise<RunnerExecutionResult>;
  /** Subscribe to connection-state updates. Returns an unsubscribe function. */
  subscribeStatus?: (listener: (status: ConnectionStatus) => void) => () => void;
  initialStatus?: ConnectionStatus;
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

function buildResultsTable(sets: EdiabasJobResult[][]): ResultLine[] {
  // Filter out empty sets so we don't render "Set N — (empty)" rows for the
  // bookkeeping commits that don't carry user-visible results.
  const nonEmpty = sets.filter((set) => set.length > 0);
  if (nonEmpty.length === 0) {
    return [{ text: "No results returned.", dimColor: true }];
  }

  // Compute widths across all sets so columns align between sections.
  const all = nonEmpty.flat();
  const nameWidth = Math.max(4, ...all.map((result) => result.name.length));
  const typeWidth = Math.max(4, ...all.map((result) => result.type.length));

  const header = `${"Name".padEnd(nameWidth)} | ${"Type".padEnd(typeWidth)} | Value`;
  const separator = `${"─".repeat(nameWidth)}-+-${"─".repeat(typeWidth)}-+-${"─".repeat(5)}`;

  const lines: ResultLine[] = [];
  const showSetHeaders = nonEmpty.length > 1;

  nonEmpty.forEach((set, index) => {
    if (showSetHeaders) {
      if (index > 0) lines.push({ text: "" });
      lines.push({ text: `Set ${index + 1}/${nonEmpty.length}`, bold: true, color: "cyan" });
    }
    lines.push({ text: header, bold: true });
    lines.push({ text: separator, dimColor: true });
    for (const result of set) {
      lines.push({
        text: `${result.name.padEnd(nameWidth)} | ${result.type.padEnd(typeWidth)} | ${formatResultValue(result)}`,
      });
    }
  });

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

const PHASE_GLYPH: Record<ConnectionPhase, string> = {
  idle: "○",
  connecting: "◐",
  connected: "●",
  error: "!",
  disconnected: "○",
};

const PHASE_COLOR: Record<ConnectionPhase, string> = {
  idle: "gray",
  connecting: "yellow",
  connected: "green",
  error: "red",
  disconnected: "gray",
};

export function RunnerApp({
  filePath,
  jobs,
  interfaceSummary,
  onRun,
  subscribeStatus,
  initialStatus,
}: RunnerAppProps) {
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
  const [showDetails, setShowDetails] = useState(false);
  const [connection, setConnection] = useState<ConnectionStatus>(
    initialStatus ?? { phase: "idle", message: "Not connected", ready: false }
  );

  useEffect(() => {
    if (!subscribeStatus) return;
    return subscribeStatus(setConnection);
  }, [subscribeStatus]);

  const safeWidth = Math.max(40, width || 80);
  const safeHeight = Math.max(12, height || 20);
  const innerWidth = Math.max(0, safeWidth - 2);

  const interfaceLines = useMemo(() => {
    const glyph = PHASE_GLYPH[connection.phase];
    const summary = interfaceSummary ?? "Simulation";
    const lines = [`${glyph} ${connection.message}`];
    // The "summary" describes the *configured* transport ("KDCAN · /dev/...
    // @ 9600"). Once connected, `connection.message` already carries the
    // same info via describeLink() in run.ts (now including the baud
    // rate), so showing both is just noise. For idle/connecting/error
    // /disconnected phases the status text is generic ("Not connected",
    // "Connecting…") and the summary tells the user where we're going.
    if (connection.phase !== "connected") {
      lines.push(summary);
    }
    if (dialog) {
      const argNames = dialog.job.args.map((arg) => arg.name).join(", ");
      const label = argNames ? `Args (${argNames})` : "Args";
      lines.push(`${label}: ${dialog.value}_`);
    } else if (statusMessage) {
      lines.push(statusMessage);
    }
    return lines;
  }, [connection.phase, connection.message, dialog, interfaceSummary, statusMessage]);

  const interfaceHeight = Math.max(3, interfaceLines.length + 2);
  const contentHeight = Math.max(6, safeHeight - 2);
  const upperHeight = Math.max(3, contentHeight - interfaceHeight);

  // Both panels bake the outer frame `│` into their own rendering
  // (`outerBorderLeft` for Items, `outerBorderRight` for Results), so each
  // width includes the column that belongs to the outer frame on its side.
  // Together they must equal safeWidth = innerWidth + 2 — one outer `│` per
  // side. Previously this used `+ 1`, leaving the upper row one column
  // narrower than the Interface row and the top/bottom outer borders.
  const itemsPanelWidth = Math.min(Math.max(22, Math.floor(innerWidth * 0.3)), 40) + 1;
  const rightPanelWidth = innerWidth - itemsPanelWidth + 2;

  const filteredJobs = useMemo(() => {
    if (!searchQuery) return jobs;
    const lower = searchQuery.toLowerCase();
    return jobs.filter((job) => job.name.toLowerCase().includes(lower));
  }, [jobs, searchQuery]);

  const selectedJob = filteredJobs[selectedIndex] ?? null;

  // Split the right column when the Details panel is toggled on. Details
  // sit ABOVE the Results panel. Cap details height so a job with many
  // results (e.g. FS_LESEN's 48) doesn't crowd out the actual results.
  const detailsLines = useMemo(() => formatJobDetails(selectedJob), [selectedJob]);
  const detailsHeight = showDetails
    ? Math.max(5, Math.min(detailsLines.length + 2, Math.floor(upperHeight * 0.5)))
    : 0;
  const resultsHeight = Math.max(3, upperHeight - detailsHeight);
  const resultsViewportSplit = Math.max(1, resultsHeight - 2);
  const maxResultsScroll = Math.max(0, results.length - resultsViewportSplit);

  const baseShortcuts = dialog
    ? "Enter: Submit | Esc: Cancel | Q/Ctrl+C: Quit"
    : "↑/↓: Navigate | Enter/R: Run | i: Details | Tab: Panels | /: Search | Q/Ctrl+C: Quit";
  const shortcuts = dialog
    ? baseShortcuts
    : isSearchActive
      ? `${baseShortcuts} | Search: ${searchQuery}_`
      : statusMessage
        ? `${baseShortcuts} | ${statusMessage}`
        : baseShortcuts;

  const topBorder = buildTopBorder(`EdiabasX · run ${path.basename(filePath)}`, safeWidth);
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
    // Don't queue runs during the initial / reconnect handshake — the link
    // isn't ready yet and the run would just stack up behind the connect.
    // (Phase "error" is still runnable: the user can retry, which kicks the
    // session's reconnect path.)
    if (connection.phase === "connecting") {
      setStatusMessage("Still connecting — wait a moment");
      return;
    }

    setIsRunning(true);
    // Clear any stale TUI hint from a previous interaction; the run-status
    // header (Done / Error) is rendered inside the Results panel instead,
    // so the Interface panel and shortcut line stay quiet during the run.
    setStatusMessage(null);
    setResults([{ text: "Running...", color: "yellow" }]);

    const startTime = Date.now();
    try {
      const result = await onRun(job.name, params);
      // Keep focus on the jobs list so the user can run another job
      // immediately with ↑/↓ + Enter. Tab still switches to results
      // for scrolling when they want it.
      setResults([
        { text: `Done in ${result.executionTimeMs}ms`, color: "green", bold: true },
        { text: "" },
        ...buildResultsTable(result.resultSets),
      ]);
      setResultsScroll(0);
    } catch (error) {
      const elapsedMs = Date.now() - startTime;
      const message = error instanceof Error ? error.message : String(error);
      setResults([
        { text: `Error after ${elapsedMs}ms`, color: "red", bold: true },
        { text: "" },
        { text: message, color: "red" },
      ]);
      setResultsScroll(0);
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

    if (input === "i" || input === "I") {
      setShowDetails((value) => !value);
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
          <Box flexDirection="column" width={rightPanelWidth}>
            {showDetails && (
              <DetailsPanel
                title={`Details${selectedJob ? ` — ${selectedJob.name}` : ""}`}
                lines={detailsLines}
                height={detailsHeight}
                width={rightPanelWidth}
                outerBorderRight={true}
              />
            )}
            <ContentPanel
              title="Results"
              lines={results}
              height={resultsHeight}
              width={rightPanelWidth}
              focused={focusedPanel === "results"}
              scrollOffset={resultsScroll}
              outerBorderRight={true}
            />
          </Box>
        </Box>
        <Box flexDirection="column" height={interfaceHeight}>
          <Text>│{interfaceTop}│</Text>
          {interfaceLines.map((line, index) => {
            // Colour the connection status line (always first) based on phase.
            if (index === 0) {
              const innerWidth = Math.max(0, interfaceWidth - 2);
              const padded = line.length > innerWidth
                ? line.slice(0, innerWidth)
                : line.padEnd(innerWidth, " ");
              return (
                <Text key={`interface-${index}`}>
                  ││<Text color={PHASE_COLOR[connection.phase]}>{padded}</Text>││
                </Text>
              );
            }
            return (
              <Text key={`interface-${index}`}>│{buildPanelLine(line, interfaceWidth)}│</Text>
            );
          })}
          <Text>│{interfaceBottom}│</Text>
        </Box>
      </Box>
      <Text>{bottomBorder}</Text>
    </Box>
  );
}
