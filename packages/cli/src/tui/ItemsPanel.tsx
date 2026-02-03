import React from "react";
import { Box, Text } from "ink";

type ItemsPanelProps = {
  title: string;
  items: string[];
  selectedIndex: number;
  height: number;
  focused: boolean;
  emptyMessage?: string;
};

function sliceWindow(items: string[], selectedIndex: number, maxRows: number): string[] {
  if (items.length <= maxRows) return items;
  const start = Math.max(0, Math.min(selectedIndex - Math.floor(maxRows / 2), items.length - maxRows));
  return items.slice(start, start + maxRows);
}

export function ItemsPanel({ title, items, selectedIndex, height, focused, emptyMessage }: ItemsPanelProps) {
  const rows = Math.max(0, height - 2);
  const visibleItems = sliceWindow(items, selectedIndex, rows);
  const startIndex = items.length <= rows ? 0 : Math.max(0, Math.min(selectedIndex - Math.floor(rows / 2), items.length - rows));

  return (
    <Box borderStyle="round" paddingX={1} flexDirection="column" height={height}>
      <Text>{title}</Text>
      <Box flexDirection="column" marginTop={1}>
        {items.length === 0 ? (
          <Text color="gray">{emptyMessage ?? "No items"}</Text>
        ) : (
          visibleItems.map((item, offset) => {
            const index = startIndex + offset;
            const isSelected = index === selectedIndex;
            const prefix = isSelected ? "▸" : " ";
            const color = focused && isSelected ? "cyan" : undefined;
            return (
              <Text key={`${item}-${index}`} color={color}>
                {prefix} {item}
              </Text>
            );
          })
        )}
      </Box>
    </Box>
  );
}
