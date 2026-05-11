function parseNumber(value: string, label: string): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`${label} must be a valid number`);
  }

  return parsed;
}

function parseOptionalNumber(value: string | undefined, label: string): number | undefined {
  if (value === undefined) {
    return undefined;
  }
  return parseNumber(value, label);
}

export { parseNumber, parseOptionalNumber };
