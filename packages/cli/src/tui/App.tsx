import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import { useStdoutDimensions } from "./useStdoutDimensions.js";
import path from "node:path";
import type { PrgFile, PrgJob, PrgTable } from "@emdzej/ediabasx-best-parser";
import { disassembleJob, formatInstruction } from "@emdzej/ediabasx-best-parser";
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

// Custom top border with embedded title
function buildCustomTopBorder(title: string, width: number): string {
  const innerWidth = Math.max(0, width - 2);
  const titlePart = title ? `─${title}` : "";
  const fillWidth = Math.max(0, innerWidth - titlePart.length);
  return `╭${titlePart}${"─".repeat(fillWidth)}╮`;
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

  // Navigation state
  const [section, setSection] = useState<NavigationSection>("jobs");
  const [navIndex, setNavIndex] = useState(0);
  const [itemsIndex, setItemsIndex] = useState(0);
  const [focusedPanel, setFocusedPanel] = useState<FocusedPanel>("items");
  const [contentScroll, setContentScroll] = useState(0);
  const [detailsScroll, setDetailsScroll] = useState(0);
  const [showHelp, setShowHelp] = useState(false);

  // Search state
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Precompute disassembly for all jobs
  const disassemblyMap = useMemo(() => buildDisassemblyMap(buffer, prg), [buffer, prg]);

  // Get items for current section
  const allItems = useMemo(() => {
    if (section === "jobs") return prg.jobs.map((j) => j.name);
    if (section === "tables") return prg.tables.map((t) => t.name);
    return [];
  }, [section, prg]);

  // Filter items by search query
  const filteredItems = useMemo(() => {
    if (!searchQuery) return allItems;
    const lower = searchQuery.toLowerCase();
    return allItems.filter((item) => item.toLowerCase().includes(lower));
  }, [allItems, searchQuery]);

  // Reset selection when section or filter changes
  useEffect(() => {
    setItemsIndex(0);
    setContentScroll(0);
    setDetailsScroll(0);
  }, [section, searchQuery]);

  // Get content and details for selected item
  const selectedItem = filteredItems[itemsIndex] ?? null;

  const contentLines = useMemo<string[]>(() => {
    if (section === "jobs" && selectedItem) {
      return disassemblyMap.get(selectedItem) ?? ["(no disassembly)"];
    }
    if (section === "tables" && selectedItem) {
      const table = prg.tables.find((t) => t.name === selectedItem);
      return formatTableContent(table);
    }
    if (section === "metadata") {
      return formatMetadata(prg, filePath);
    }
    return [];
  }, [section, selectedItem, prg, filePath, disassemblyMap]);

  const detailsLines = useMemo<string[]>(() => {
    if (section === "jobs" && selectedItem) {
      const job = prg.jobs.find((j) => j.name === selectedItem);
      return formatJobDetails(job);
    }
    if (section === "tables" && selectedItem) {
      const table = prg.tables.find((t) => t.name === selectedItem);
      return formatTableDetails(table);
    }
    return [];
  }, [section, selectedItem, prg]);

  useInput((input, key) => {
    // Help toggle
    if (input === "?" && !isSearchActive) {
      setShowHelp((prev) => !prev);
      return;
    }
    if (showHelp) {
      setShowHelp(false);
      return;
    }

    // Search mode
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
        setSearchQuery((q) => q.slice(0, -1));
        return;
      }
      if (input && !key.ctrl && !key.meta) {
        setSearchQuery((q) => q + input);
        return;
      }
      return;
    }

    // Activate search
    if (input === "/") {
      setIsSearchActive(true);
      setSearchQuery("");
      return;
    }

    // Quit
    if (input === "q" || input === "Q") {
      exit();
      return;
    }

    // Section navigation (1, 2, 3 keys)
    if (input === "1") {
      setSection("jobs");
      setNavIndex(0);
      return;
    }
    if (input === "2") {
      setSection("tables");
      setNavIndex(1);
      return;
    }
    if (input === "3") {
      setSection("metadata");
      setNavIndex(2);
      return;
    }

    // Panel switching with Tab
    if (key.tab) {
      setFocusedPanel((current) => {
        if (current === "items") return "content";
        if (current === "content") return "details";
        return "items";
      });
      return;
    }

    // Panel switching with left/right
    if (input === "h" || key.leftArrow) {
      setFocusedPanel((current) => {
        if (current === "content" || current === "details") return "items";
        return current;
      });
      return;
    }
    if (input === "l" || key.rightArrow) {
      setFocusedPanel((current) => {
        if (current === "items") return "content";
        return current;
      });
      return;
    }

    // Calculate heights for scroll limits
    const innerHeight = Math.max(6, height - 4); // -4 for borders
    const contentHeight = Math.max(8, Math.floor(innerHeight * 0.6)) - 2;
    const detailsHeight = Math.max(6, innerHeight - Math.floor(innerHeight * 0.6)) - 2;
    const itemsHeight = innerHeight - 2;

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

  // Layout calculations - inside main border
  // Total width between main borders: innerWidth = width - 2
  // We need: │ + ItemsPanel + Content/DetailsPanel + │
  // So panels together must fill innerWidth
  const innerWidth = Math.max(0, width - 2);
  
  // ItemsPanel bakes the outer frame `│` into its left side
  // (outerBorderLeft) and Content/DetailsPanel bake it on the right
  // (outerBorderRight) — each side claims one column from the outer
  // frame. Together the two panel widths must equal innerWidth + 2 =
  // safeWidth; previously this used `+ 1` and the panel row came up
  // one column short of the outer right edge.
  const itemsPanelWidth = Math.min(Math.max(22, Math.floor(innerWidth * 0.28)), 40) + 1;
  const rightPanelWidth = innerWidth - itemsPanelWidth + 2;
  
  const bodyHeight = Math.max(6, height - 4); // -4 for top border, nav, footer, bottom border
  const contentHeight = Math.max(8, Math.floor(bodyHeight * 0.6));
  const detailsHeight = Math.max(6, bodyHeight - contentHeight);

  // Build nav bar string
  const navBarContent = navigationItems.map((item, index) => {
    const isSelected = index === navIndex;
    return isSelected ? `[${item.label}]` : ` ${item.label} `;
  }).join(" ");
  const filterSuffix = searchQuery ? ` /${searchQuery}` : "";
  
  const mainTitle = `EdiabasX · explore ${path.basename(filePath)}`;
  const topBorder = buildCustomTopBorder(mainTitle, width);
  const footer = isSearchActive
    ? `Search: ${searchQuery}_`
    : "↑↓ Navigate  Tab Panels  1/2/3 Section  / Search  Q Quit  ? Help";

  return (
    <Box flexDirection="column" width={width} height={height}>
      {/* Custom top border with title */}
      <Text>{topBorder}</Text>
      
      {/* Main content area with side borders */}
      <Box flexDirection="column" height={height - 2}>
        {/* Navigation bar */}
        <Box>
          <Text>│{navBarContent}{filterSuffix}{" ".repeat(Math.max(0, innerWidth - navBarContent.length - filterSuffix.length))}│</Text>
        </Box>

        {showHelp ? (
          <Box flexDirection="column" height={bodyHeight}>
            <Box><Text>│ </Text><Text bold>Help</Text></Box>
            <Box><Text>│  ↑↓ or j/k    : scroll/navigate</Text></Box>
            <Box><Text>│  ←→ or h/l    : switch panels</Text></Box>
            <Box><Text>│  Tab          : cycle panels</Text></Box>
            <Box><Text>│  1/2/3        : switch section</Text></Box>
            <Box><Text>│  /            : search</Text></Box>
            <Box><Text>│  Q            : quit</Text></Box>
            <Box><Text>│  ?            : toggle help</Text></Box>
            <Box><Text>│ </Text></Box>
            <Box><Text dimColor>│  Press any key to close...</Text></Box>
          </Box>
        ) : (
          <Box height={bodyHeight} flexDirection="row">
            <ItemsPanel
              title={section === "jobs" ? "Jobs" : section === "tables" ? "Tables" : "Info"}
              items={filteredItems}
              selectedIndex={itemsIndex}
              height={bodyHeight}
              width={itemsPanelWidth}
              focused={focusedPanel === "items"}
              emptyMessage={section === "metadata" ? "Select JOBS or TABLES" : "No items found"}
              outerBorderLeft={true}
            />
            <Box flexDirection="column" width={rightPanelWidth}>
              <ContentPanel
                title="Content"
                lines={contentLines}
                height={contentHeight}
                width={rightPanelWidth}
                focused={focusedPanel === "content"}
                scrollOffset={contentScroll}
                outerBorderRight={true}
              />
              <DetailsPanel
                title="Details"
                lines={detailsLines}
                height={detailsHeight}
                width={rightPanelWidth}
                focused={focusedPanel === "details"}
                scrollOffset={detailsScroll}
                outerBorderRight={true}
              />
            </Box>
          </Box>
        )}

        {/* Footer */}
        <Text>│{truncate(footer, innerWidth)}{" ".repeat(Math.max(0, innerWidth - truncate(footer, innerWidth).length))}│</Text>
      </Box>

      {/* Bottom border */}
      <Text>╰{"─".repeat(Math.max(0, width - 2))}╯</Text>
    </Box>
  );
}
