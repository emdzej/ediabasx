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

export function ItemsPanel({
  title,
  items,
  selectedIndex,
  height,
  focused,
  emptyMessage = "No items",
}: ItemsPanelProps) {
  const innerHeight = Math.max(1, height - 3);

  // Calculate scroll window to keep selected item visible
  const halfWindow = Math.floor(innerHeight / 2);
  let scrollStart = Math.max(0, selectedIndex - halfWindow);
  const maxScrollStart = Math.max(0, items.length - innerHeight);
  scrollStart = Math.min(scrollStart, maxScrollStart);

  const visibleItems = items.slice(scrollStart, scrollStart + innerHeight);
  const hasMore = items.length > scrollStart + innerHeight;
  const hasLess = scrollStart > 0;

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
        {items.length > innerHeight && (
          <Text dimColor>
            {selectedIndex + 1}/{items.length}
          </Text>
        )}
      </Box>
      <Box flexDirection="column" height={innerHeight}>
        {items.length === 0 ? (
          <Text dimColor>{emptyMessage}</Text>
        ) : (
          <>
            {hasLess && <Text dimColor>↑</Text>}
            {visibleItems.map((item, index) => {
              const actualIndex = scrollStart + index;
              const isSelected = actualIndex === selectedIndex;
              return (
                <Text key={actualIndex} inverse={isSelected && focused} bold={isSelected}>
                  {isSelected ? "▸ " : "  "}
                  {item}
                </Text>
              );
            })}
            {hasMore && <Text dimColor>↓</Text>}
          </>
        )}
      </Box>
    </Box>
  );
}
