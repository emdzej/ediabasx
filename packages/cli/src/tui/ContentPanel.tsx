import React from "react";
import { Box, Text } from "ink";

type ContentPanelProps = {
  title: string;
  lines: string[];
  height: number;
};

export function ContentPanel({ title, lines, height }: ContentPanelProps) {
  const maxLines = Math.max(0, height - 2);
  const visible = lines.slice(0, maxLines);
  const overflow = lines.length > maxLines;

  return (
    <Box borderStyle="round" paddingX={1} flexDirection="column" height={height}>
      <Text>{title}</Text>
      <Box flexDirection="column" marginTop={1}>
        {visible.map((line, index) => (
          <Text key={`${index}-${line}`}>
            {line}
          </Text>
        ))}
        {overflow && <Text color="gray">… ({lines.length - maxLines} more lines)</Text>}
      </Box>
    </Box>
  );
}
