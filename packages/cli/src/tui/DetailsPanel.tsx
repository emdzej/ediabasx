import React from "react";
import { Box, Text } from "ink";

type DetailsPanelProps = {
  title: string;
  lines: string[];
  height: number;
  width: number;
  focused?: boolean;
  scrollOffset?: number;
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

export function DetailsPanel({ title, lines, height, width, focused = false, scrollOffset = 0 }: DetailsPanelProps) {
  const v = focused ? "║" : "│";
  const innerWidth = Math.max(0, width - 2);
  const innerHeight = Math.max(1, height - 2);

  const visibleLines = lines.slice(scrollOffset, scrollOffset + innerHeight);
  const hasMore = lines.length > scrollOffset + innerHeight;
  const hasLess = scrollOffset > 0;

  const count = lines.length > innerHeight 
    ? `${scrollOffset + 1}-${Math.min(scrollOffset + innerHeight, lines.length)}/${lines.length}`
    : null;
  
  const topBar = buildTitleBar(title, count, width, focused);
  const bottomBar = buildBottomBar(width, focused);

  const formatLine = (text: string): string => {
    if (text.length > innerWidth) return text.slice(0, innerWidth - 3) + "...";
    return text.padEnd(innerWidth);
  };

  const displayLines: string[] = [];
  if (hasLess) displayLines.push(formatLine("↑ more above"));
  
  for (const line of visibleLines) {
    if (displayLines.length >= innerHeight) break;
    displayLines.push(formatLine(line));
  }
  
  if (hasMore && displayLines.length < innerHeight) {
    displayLines.push(formatLine("↓ more below"));
  }

  while (displayLines.length < innerHeight) {
    displayLines.push(" ".repeat(innerWidth));
  }

  return (
    <Box flexDirection="column" width={width} height={height}>
      <Text color={focused ? "cyan" : undefined}>{topBar}</Text>
      {displayLines.map((line, idx) => (
        <Text key={idx}>
          <Text color={focused ? "cyan" : undefined}>{v}</Text>
          <Text>{line}</Text>
          <Text color={focused ? "cyan" : undefined}>{v}</Text>
        </Text>
      ))}
      <Text color={focused ? "cyan" : undefined}>{bottomBar}</Text>
    </Box>
  );
}
