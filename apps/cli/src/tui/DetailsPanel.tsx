import React from "react";
import { Box, Text } from "ink";

type DetailsPanelProps = {
  title: string;
  lines: string[];
  height: number;
  width: number;
  focused?: boolean;
  scrollOffset?: number;
  outerBorderRight?: boolean; // Add main frame │ on right
};

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

export function DetailsPanel({ 
  title, 
  lines, 
  height, 
  width, 
  focused = false, 
  scrollOffset = 0,
  outerBorderRight = false,
}: DetailsPanelProps) {
  const panelWidth = outerBorderRight ? width - 1 : width; // Reserve space for outer │
  const safeWidth = Math.max(10, panelWidth || 40);
  const safeHeight = Math.max(4, height || 10);
  const outerV = outerBorderRight ? "│" : "";
  
  const v = focused ? "║" : "│";
  const innerWidth = safeWidth - 2;
  const innerHeight = safeHeight - 2; // space for top and bottom bars

  const visibleLines = lines.slice(scrollOffset, scrollOffset + innerHeight);

  const count = lines.length > innerHeight 
    ? `${scrollOffset + 1}-${Math.min(scrollOffset + innerHeight, lines.length)}/${lines.length}`
    : null;
  
  const topBar = buildTitleBar(title, count, safeWidth, focused);
  const bottomBar = buildBottomBar(safeWidth, focused);

  const formatLine = (text: string): string => {
    if (text.length > innerWidth) return text.slice(0, innerWidth - 3) + "...";
    return text.padEnd(innerWidth);
  };

  // Build exactly innerHeight display lines
  const displayLines: string[] = [];
  for (let i = 0; i < innerHeight; i++) {
    if (i < visibleLines.length) {
      displayLines.push(formatLine(visibleLines[i]));
    } else {
      displayLines.push(" ".repeat(innerWidth));
    }
  }

  return (
    <Box flexDirection="column" width={width} height={safeHeight}>
      <Text><Text color={focused ? "cyan" : undefined}>{topBar}</Text>{outerV}</Text>
      {displayLines.map((line, idx) => (
        <Text key={idx}>
          <Text color={focused ? "cyan" : undefined}>{v}</Text>
          <Text>{line}</Text>
          <Text color={focused ? "cyan" : undefined}>{v}</Text>
          {outerV}
        </Text>
      ))}
      <Text><Text color={focused ? "cyan" : undefined}>{bottomBar}</Text>{outerV}</Text>
    </Box>
  );
}
