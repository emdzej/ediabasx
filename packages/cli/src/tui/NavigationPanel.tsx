import React from "react";
import { Box, Text } from "ink";

export type NavigationItem = {
  label: string;
};

type NavigationPanelProps = {
  items: NavigationItem[];
  selectedIndex: number;
  height: number;
  focused: boolean;
};

export function NavigationPanel({ items, selectedIndex, height, focused }: NavigationPanelProps) {
  return (
    <Box borderStyle="round" paddingX={1} flexDirection="column" height={height}>
      <Text>{focused ? "Navigation" : "Navigation"}</Text>
      <Box flexDirection="column" marginTop={1}>
        {items.map((item, index) => {
          const isSelected = index === selectedIndex;
          const prefix = isSelected ? "▸" : " ";
          const color = focused && isSelected ? "cyan" : undefined;
          return (
            <Text key={item.label} color={color}>
              {prefix} {item.label}
            </Text>
          );
        })}
      </Box>
    </Box>
  );
}
