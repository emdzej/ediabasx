import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useApp } from "ink";
import { useStdoutDimensions } from "./useStdoutDimensions.js";
import path from "node:path";
import type { PrgFile, PrgJob, PrgTable } from "@ediabas/best-parser";
import { disassembleJob, formatInstruction } from "@ediabas/best-parser";
import { NavigationPanel } from "./NavigationPanel.js";
import { ItemsPanel } from "./ItemsPanel.js";
import { ContentPanel } from "./ContentPanel.js";
import { DetailsPanel } from "./DetailsPanel.js";
import { useKeyboard } from "./useKeyboard.js";

type NavigationSection = "jobs" | "tables" | "metadata";

type AppProps = {
  filePath: string;
  buffer: Uint8Array;
  prg: PrgFile;
};

const navigationItems: Array<{ label: string; section: NavigationSection }> = [
  { label: "JOBS", section: "jobs" },
  { label: "TABLES", section: "tables" },
  { label: "METADATA", section: "metadata" },
];

function buildDisassemblyMap(buffer: Uint8Array, prg: PrgFile): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (const job of prg.binaryJobs) {
    const instructions = disassembleJob(buffer, job.offset);
    const lines = instructions.map((instr) => {
      const address = instr.offset.toString(16).toUpperCase().padStart(8, "0");
      return `${address}: ${formatInstruction(instr)}`;
    });
    map.set(job.name, lines.length > 0 ? lines : ["(no instructions)"]);
  }
  return map;
}

function formatJobDetails(job: PrgJob | undefined): string[] {
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

function formatTableDetails(table: PrgTable | undefined): string[] {
  if (!table) return ["No table selected."];
  return [
    `Name: ${table.name}`,
    `Columns: ${table.columns}`,
    `Rows: ${table.rows}`,
  ];
}

function formatTableContent(table: PrgTable | undefined): string[] {
  if (!table) return ["No table selected."];
  if (table.values.length === 0) return ["(empty table)"];
  return table.values.map((row) => row.join(" | "));
}

function formatMetadata(prg: PrgFile, filePath: string): string[] {
  const metadata = prg.metadata ?? {};
  const lines = [
    `File: ${path.basename(filePath)}`,
    `Jobs: ${prg.jobs.length}`,
    `Tables: ${prg.tables.length}`,
    "",
    `ECU: ${metadata.ecu ?? "n/a"}`,
    `Origin: ${metadata.origin ?? "n/a"}`,
    `Revision: ${metadata.revision ?? "n/a"}`,
    `Author: ${metadata.author ?? "n/a"}`,
    `ECU comment: ${metadata.ecuComment ?? "n/a"}`,
  ];
  return lines;
}

export function App({ filePath, buffer, prg }: AppProps) {
  const { exit } = useApp();
  const [width, height] = useStdoutDimensions();
  const [navIndex, setNavIndex] = useState(0);
  const [itemsIndex, setItemsIndex] = useState(0);
  const [focusedPanel, setFocusedPanel] = useState<"nav" | "items">("nav");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const section = navigationItems[navIndex]?.section ?? "jobs";

  const disassemblyMap = useMemo(() => buildDisassemblyMap(buffer, prg), [buffer, prg]);

  const items = useMemo(() => {
    if (section === "jobs") return prg.jobs.map((job) => job.name);
    if (section === "tables") return prg.tables.map((table) => table.name);
    return [];
  }, [prg, section]);

  const filteredItems = useMemo(() => {
    if (!searchQuery) return items;
    const query = searchQuery.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(query));
  }, [items, searchQuery]);

  useEffect(() => {
    if (itemsIndex >= filteredItems.length) {
      setItemsIndex(Math.max(0, filteredItems.length - 1));
    }
  }, [filteredItems, itemsIndex]);

  useEffect(() => {
    setItemsIndex(0);
  }, [section]);

  const selectedName = filteredItems[itemsIndex];
  const selectedJob = section === "jobs" ? prg.jobs.find((job) => job.name === selectedName) : undefined;
  const selectedTable = section === "tables" ? prg.tables.find((table) => table.name === selectedName) : undefined;

  const contentLines = useMemo(() => {
    if (section === "jobs") {
      if (!selectedName) return ["Select a job to see disassembly."];
      return disassemblyMap.get(selectedName) ?? ["No bytecode available."];
    }
    if (section === "tables") {
      return formatTableContent(selectedTable);
    }
    return formatMetadata(prg, filePath);
  }, [section, selectedName, disassemblyMap, selectedTable, prg, filePath]);

  const detailsLines = useMemo(() => {
    if (section === "jobs") return formatJobDetails(selectedJob);
    if (section === "tables") return formatTableDetails(selectedTable);
    return ["File metadata", ...formatMetadata(prg, filePath)];
  }, [section, selectedJob, selectedTable, prg, filePath]);

  useKeyboard({
    isSearchActive,
    onUp: () => {
      if (focusedPanel === "nav") {
        setNavIndex((value) => Math.max(0, value - 1));
      } else {
        setItemsIndex((value) => Math.max(0, value - 1));
      }
    },
    onDown: () => {
      if (focusedPanel === "nav") {
        setNavIndex((value) => Math.min(navigationItems.length - 1, value + 1));
      } else {
        setItemsIndex((value) => Math.min(filteredItems.length - 1, value + 1));
      }
    },
    onLeft: () => setFocusedPanel("nav"),
    onRight: () => setFocusedPanel("items"),
    onEnter: () => {
      if (focusedPanel === "nav") {
        setItemsIndex(0);
      }
    },
    onSearch: () => {
      setIsSearchActive(true);
    },
    onSearchInput: (value) => setSearchQuery((prev) => prev + value),
    onSearchBackspace: () => setSearchQuery((prev) => prev.slice(0, -1)),
    onSearchSubmit: () => setIsSearchActive(false),
    onSearchCancel: () => {
      setIsSearchActive(false);
      setSearchQuery("");
    },
    onToggleHelp: () => setShowHelp((prev) => !prev),
    onQuit: () => exit(),
  });

  const contentWidth = Math.max(0, width - 4);
  const minRightWidth = 24;
  const maxLeftWidth = Math.max(10, contentWidth - minRightWidth - 2);
  const leftWidth = Math.min(Math.max(22, Math.floor(contentWidth * 0.28)), maxLeftWidth);
  const rightWidth = Math.max(10, contentWidth - leftWidth - 2);
  const bodyHeight = Math.max(6, height - 5);
  const navHeight = Math.max(6, Math.floor(bodyHeight * 0.35));
  const itemsHeight = Math.max(6, bodyHeight - navHeight);
  const contentHeight = Math.max(8, Math.floor(bodyHeight * 0.6));
  const detailsHeight = Math.max(6, bodyHeight - contentHeight);

  const header = `📁 ${path.basename(filePath)}`;
  const footer = isSearchActive
    ? `Search: ${searchQuery}`
    : "↑↓ Navigate  ←→ Panels  Enter Select  / Search  Q Quit  ? Help";

  return (
    <Box borderStyle="round" width={width} height={height} flexDirection="column" paddingX={1}>
      <Box height={1} justifyContent="space-between">
        <Text>{header}</Text>
        <Text>[Q]uit [?]Help</Text>
      </Box>
      <Text>{"─".repeat(contentWidth)}</Text>
      {showHelp ? (
        <Box borderStyle="round" paddingX={1} flexDirection="column" height={bodyHeight}>
          <Text>Help</Text>
          <Box flexDirection="column" marginTop={1}>
            <Text>↑↓ or j/k: navigate lists</Text>
            <Text>←→ or h/l: switch panels</Text>
            <Text>Enter: select/expand</Text>
            <Text>/ : search</Text>
            <Text>Q: quit</Text>
            <Text>? : toggle help</Text>
          </Box>
        </Box>
      ) : (
        <Box flexDirection="row" height={bodyHeight}>
          <Box flexDirection="column" width={leftWidth}>
            <NavigationPanel
              items={navigationItems}
              selectedIndex={navIndex}
              height={navHeight}
              focused={focusedPanel === "nav"}
            />
            <Box height={1} />
            <ItemsPanel
              title="Items"
              items={filteredItems}
              selectedIndex={itemsIndex}
              height={itemsHeight}
              focused={focusedPanel === "items"}
              emptyMessage={section === "metadata" ? "Metadata view" : "No items"}
            />
          </Box>
          <Box width={2} />
          <Box flexDirection="column" width={rightWidth}>
            <ContentPanel title="Content" lines={contentLines} height={contentHeight} />
            <Box height={1} />
            <DetailsPanel title="Details" lines={detailsLines} height={detailsHeight} />
          </Box>
        </Box>
      )}
      <Text>{footer}</Text>
    </Box>
  );
}
