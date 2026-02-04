import React from "react";
import { Box, Text } from "ink";

type ContentPanelProps = {
  title: string;
  lines: string[];
  height: number;
  focused?: boolean;
  scrollOffset?: number;
};

export function ContentPanel({ title, lines, height, focused = false, scrollOffset = 0 }: ContentPanelProps) {
  const innerHeight = Math.max(1, height - 3);
  const visibleLines = lines.slice(scrollOffset, scrollOffset + innerHeight);
  const hasMore = lines.length > scrollOffset + innerHeight;
  const hasLess = scrollOffset > 0;

  return (
    <Box
      borderStyle={focused ? "double" : "single"}
      borderColor={focused ? "cyan" : undefined}
      flexDirection="column"
      height={height}
      paddingX={1}
    >
      <Box justifyContent="space-between">
        <Text bold={focused}>{title}</Text>
        {lines.length > innerHeight && (
          <Text dimColor>
            {scrollOffset + 1}-{Math.min(scrollOffset + innerHeight, lines.length)}/{lines.length}
          </Text>
        )}
      </Box>
      <Box flexDirection="column" height={innerHeight}>
        {hasLess && <Text dimColor>↑ more above</Text>}
        {visibleLines.map((line, index) => (
          <Text key={index}>{line}</Text>
        ))}
        {hasMore && visibleLines.length === innerHeight && <Text dimColor>↓ more below</Text>}
      </Box>
    </Box>
  );
}
