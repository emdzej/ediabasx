import React from "react";
import { Box, Text } from "ink";

type ItemsPanelProps = {
  title: string;
  items: string[];
  selectedIndex: number;
  height: number;
  width: number;
  focused: boolean;
  emptyMessage?: string;
  outerBorderLeft?: boolean; // Add main frame │ on left
};

// Build title bar like: ╔═Jobs═══════════1/16═╗
function buildTitleBar(title: string, count: string | null, width: number, focused: boolean): string {
  const chars = focused 
    ? { tl: "╔", tr: "╗", h: "═" }
    : { tl: "┌", tr: "┐", h: "─" };
  
  const innerWidth = Math.max(0, width - 2);
  const titlePart = title ? `${chars.h}${title}` : "";
  const countPart = count ? `${count}${chars.h}` : "";
  const usedWidth = titlePart.length + countPart.length;
  const fillWidth = Math.max(0, innerWidth - usedWidth);
  const fill = chars.h.repeat(fillWidth);
  
  return `${chars.tl}${titlePart}${fill}${countPart}${chars.tr}`;
}

function buildBottomBar(width: number, focused: boolean): string {
  const chars = focused
    ? { bl: "╚", br: "╝", h: "═" }
    : { bl: "└", br: "┘", h: "─" };
  const innerWidth = Math.max(0, width - 2);
  return `${chars.bl}${chars.h.repeat(innerWidth)}${chars.br}`;
}

export function ItemsPanel({
  title,
  items,
  selectedIndex,
  height,
  width,
  focused,
  emptyMessage = "No items",
  outerBorderLeft = false,
}: ItemsPanelProps) {
  const v = focused ? "║" : "│";
  const panelWidth = outerBorderLeft ? width - 1 : width; // Reserve space for outer │
  const innerWidth = Math.max(1, panelWidth - 2);
  const innerHeight = Math.max(1, height - 2);
  const outerV = outerBorderLeft ? "│" : "";

  // Calculate scroll window to keep selected item visible
  const halfWindow = Math.floor(innerHeight / 2);
  let scrollStart = Math.max(0, selectedIndex - halfWindow);
  const maxScrollStart = Math.max(0, items.length - innerHeight);
  scrollStart = Math.min(scrollStart, maxScrollStart);

  const visibleItems = items.slice(scrollStart, scrollStart + innerHeight);

  const count = items.length > 0 ? `${selectedIndex + 1}/${items.length}` : null;
  const topBar = buildTitleBar(title, count, panelWidth, focused);
  const bottomBar = buildBottomBar(panelWidth, focused);

  // Pad or truncate text to fit inner width
  const formatLine = (text: string): string => {
    if (text.length > innerWidth) return text.slice(0, innerWidth - 3) + "...";
    return text.padEnd(innerWidth);
  };

  // Build display lines with selection info
  type DisplayLine = { text: string; isSelected: boolean };
  const displayLines: DisplayLine[] = [];

  if (items.length === 0) {
    displayLines.push({ text: formatLine(emptyMessage), isSelected: false });
  } else {
    for (let i = 0; i < visibleItems.length && displayLines.length < innerHeight; i++) {
      const actualIndex = scrollStart + i;
      const isSelected = actualIndex === selectedIndex;
      const prefix = isSelected ? "▸ " : "  ";
      displayLines.push({ 
        text: formatLine(prefix + visibleItems[i]), 
        isSelected: isSelected && focused 
      });
    }
  }

  // Fill remaining lines
  while (displayLines.length < innerHeight) {
    displayLines.push({ text: " ".repeat(innerWidth), isSelected: false });
  }

  return (
    <Box flexDirection="column" width={width}>
      <Text>{outerV}<Text color={focused ? "cyan" : undefined}>{topBar}</Text></Text>
      {displayLines.map((line, idx) => (
        <Text key={idx}>
          {outerV}
          <Text color={focused ? "cyan" : undefined}>{v}</Text>
          <Text inverse={line.isSelected}>{line.text}</Text>
          <Text color={focused ? "cyan" : undefined}>{v}</Text>
        </Text>
      ))}
      <Text>{outerV}<Text color={focused ? "cyan" : undefined}>{bottomBar}</Text></Text>
    </Box>
  );
}
