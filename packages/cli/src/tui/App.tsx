import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import { useStdoutDimensions } from "./useStdoutDimensions.js";
import path from "node:path";
import type { PrgFile, PrgJob, PrgTable } from "@ediabas/best-parser";
import { disassembleJob, formatInstruction } from "@ediabas/best-parser";
import { ContentPanel } from "./ContentPanel.js";
import { DetailsPanel } from "./DetailsPanel.js";
import { ItemsPanel } from "./ItemsPanel.js";

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

function truncate(text: string, maxWidth: number): string {
  if (text.length <= maxWidth) return text;
  if (maxWidth <= 3) return text.slice(0, maxWidth);
  return text.slice(0, maxWidth - 3) + "...";
}

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

type FocusedPanel = "items" | "content" | "details";

export function App({ filePath, buffer, prg }: AppProps) {
  const { exit } = useApp();
  const [width, height] = useStdoutDimensions();
  const [navIndex, setNavIndex] = useState(0);
  const [itemsIndex, setItemsIndex] = useState(0);
  const [contentScroll, setContentScroll] = useState(0);
  const [detailsScroll, setDetailsScroll] = useState(0);
  const [focusedPanel, setFocusedPanel] = useState<FocusedPanel>("items");
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
    setContentScroll(0);
    setDetailsScroll(0);
  }, [section]);

  useEffect(() => {
    setContentScroll(0);
  }, [itemsIndex]);

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

  // Keyboard handling
  useInput((input, key) => {
    if (showHelp) {
      if (input === "?" || input === "q" || key.escape) {
        setShowHelp(false);
      }
      return;
    }

    if (isSearchActive) {
      if (key.return) {
        setIsSearchActive(false);
      } else if (key.escape) {
        setIsSearchActive(false);
        setSearchQuery("");
      } else if (key.backspace || key.delete) {
        setSearchQuery((prev) => prev.slice(0, -1));
      } else if (input && !key.ctrl && !key.meta) {
        setSearchQuery((prev) => prev + input);
      }
      return;
    }

    // Quit
    if (input === "q" || input === "Q") {
      exit();
      return;
    }

    // Help
    if (input === "?") {
      setShowHelp(true);
      return;
    }

    // Search
    if (input === "/") {
      setIsSearchActive(true);
      return;
    }

    // Tab to cycle panels
    if (key.tab) {
      setFocusedPanel((prev) => {
        if (prev === "items") return "content";
        if (prev === "content") return "details";
        return "items";
      });
      return;
    }

    // Panel switching with h/l or left/right
    if (input === "h" || key.leftArrow) {
      setFocusedPanel((prev) => {
        if (prev === "details") return "content";
        if (prev === "content") return "items";
        return prev;
      });
      return;
    }
    if (input === "l" || key.rightArrow) {
      setFocusedPanel((prev) => {
        if (prev === "items") return "content";
        if (prev === "content") return "details";
        return prev;
      });
      return;
    }

    // Navigation section switching with 1/2/3
    if (input === "1") {
      setNavIndex(0);
      return;
    }
    if (input === "2") {
      setNavIndex(1);
      return;
    }
    if (input === "3") {
      setNavIndex(2);
      return;
    }

    // Calculate visible heights for scrolling
    const bodyHeight = Math.max(6, height - 6);
    const contentHeight = Math.max(8, Math.floor(bodyHeight * 0.6)) - 3;
    const detailsHeight = Math.max(6, bodyHeight - Math.floor(bodyHeight * 0.6)) - 3;
    const itemsHeight = bodyHeight - 3;

    // Up/Down navigation
    if (input === "k" || key.upArrow) {
      if (focusedPanel === "items") {
        setItemsIndex((value) => Math.max(0, value - 1));
      } else if (focusedPanel === "content") {
        setContentScroll((value) => Math.max(0, value - 1));
      } else if (focusedPanel === "details") {
        setDetailsScroll((value) => Math.max(0, value - 1));
      }
      return;
    }
    if (input === "j" || key.downArrow) {
      if (focusedPanel === "items") {
        setItemsIndex((value) => Math.min(filteredItems.length - 1, value + 1));
      } else if (focusedPanel === "content") {
        const maxScroll = Math.max(0, contentLines.length - contentHeight);
        setContentScroll((value) => Math.min(maxScroll, value + 1));
      } else if (focusedPanel === "details") {
        const maxScroll = Math.max(0, detailsLines.length - detailsHeight);
        setDetailsScroll((value) => Math.min(maxScroll, value + 1));
      }
      return;
    }

    // Page Up/Down for faster scrolling
    if (key.pageUp) {
      if (focusedPanel === "items") {
        setItemsIndex((value) => Math.max(0, value - itemsHeight));
      } else if (focusedPanel === "content") {
        setContentScroll((value) => Math.max(0, value - contentHeight));
      } else if (focusedPanel === "details") {
        setDetailsScroll((value) => Math.max(0, value - detailsHeight));
      }
      return;
    }
    if (key.pageDown) {
      if (focusedPanel === "items") {
        setItemsIndex((value) => Math.min(filteredItems.length - 1, value + itemsHeight));
      } else if (focusedPanel === "content") {
        const maxScroll = Math.max(0, contentLines.length - contentHeight);
        setContentScroll((value) => Math.min(maxScroll, value + contentHeight));
      } else if (focusedPanel === "details") {
        const maxScroll = Math.max(0, detailsLines.length - detailsHeight);
        setDetailsScroll((value) => Math.min(maxScroll, value + detailsHeight));
      }
      return;
    }
  });

  const contentWidth = Math.max(0, width - 4);
  const leftWidth = Math.min(Math.max(22, Math.floor(contentWidth * 0.28)), 40);
  const rightWidth = Math.max(10, contentWidth - leftWidth - 2);
  const bodyHeight = Math.max(6, height - 6);
  const contentHeight = Math.max(8, Math.floor(bodyHeight * 0.6));
  const detailsHeight = Math.max(6, bodyHeight - contentHeight - 1); // -1 for separator

  const header = `📁 ${path.basename(filePath)}`;
  const footer = isSearchActive
    ? `Search: ${searchQuery}_`
    : "↑↓/jk Navigate  Tab/←→ Panels  1/2/3 Section  / Search  Q Quit  ? Help";

  // Navbar
  const navBar = navigationItems.map((item, index) => {
    const isSelected = index === navIndex;
    const label = isSelected ? `[${item.label}]` : ` ${item.label} `;
    return (
      <Text key={item.section} bold={isSelected} inverse={isSelected}>
        {label}
      </Text>
    );
  });

  return (
    <Box borderStyle="round" width={width} height={height} flexDirection="column" paddingX={1}>
      {/* Header */}
      <Box height={1} justifyContent="space-between">
        <Text bold>{header}</Text>
        <Text dimColor>[Q]uit [?]Help</Text>
      </Box>

      {/* Navigation bar */}
      <Box height={1} gap={2}>
        {navBar}
        {searchQuery && <Text dimColor> Filter: {searchQuery}</Text>}
      </Box>

      <Text dimColor>{"─".repeat(contentWidth)}</Text>

      {showHelp ? (
        <Box borderStyle="round" paddingX={1} flexDirection="column" height={bodyHeight}>
          <Text bold>Help</Text>
          <Box flexDirection="column" marginTop={1}>
            <Text>↑↓ or j/k    : scroll/navigate in focused panel</Text>
            <Text>←→ or h/l    : switch panels</Text>
            <Text>Tab          : cycle panels (items → content → details)</Text>
            <Text>1/2/3        : switch section (JOBS/TABLES/METADATA)</Text>
            <Text>PgUp/PgDown  : fast scroll</Text>
            <Text>/            : search items</Text>
            <Text>Esc          : cancel search</Text>
            <Text>Q            : quit</Text>
            <Text>?            : toggle help</Text>
          </Box>
          <Box marginTop={1}>
            <Text dimColor>Press any key to close help...</Text>
          </Box>
        </Box>
      ) : (
        <Box flexDirection="row" height={bodyHeight}>
          {/* Left: Items list */}
          <ItemsPanel
            title={section === "jobs" ? "Jobs" : section === "tables" ? "Tables" : "Info"}
            items={filteredItems}
            selectedIndex={itemsIndex}
            height={bodyHeight}
            width={leftWidth}
            focused={focusedPanel === "items"}
            emptyMessage={section === "metadata" ? "Select JOBS or TABLES" : "No items found"}
          />
          <Box width={2} />
          {/* Right: Content + Details */}
          <Box flexDirection="column" width={rightWidth}>
            <ContentPanel
              title="Content"
              lines={contentLines}
              height={contentHeight}
              width={rightWidth}
              focused={focusedPanel === "content"}
              scrollOffset={contentScroll}
            />
            <Box height={1} />
            <DetailsPanel
              title="Details"
              lines={detailsLines}
              height={detailsHeight}
              width={rightWidth}
              focused={focusedPanel === "details"}
              scrollOffset={detailsScroll}
            />
          </Box>
        </Box>
      )}

      {/* Footer */}
      <Text dimColor>{truncate(footer, contentWidth)}</Text>
    </Box>
  );
}
