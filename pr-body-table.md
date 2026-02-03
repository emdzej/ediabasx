## Summary
Add `ediabas table <file> <name>` command to display contents of a specific table.

## Features
- Display table contents with headers in formatted output
- `--json` for full JSON output
- `--csv` for CSV export
- Case-insensitive table name matching
- Limits output to 50 rows with note about --json for full data

## Example
```bash
$ ediabas table allgemeine.prg FORTTEXTE

Table: FORTTEXTE (6 cols × 170 rows)
┌─────────┬────────┬────────────────────────────────────────────────┬────────┬────────┬────────┬────────┐
│ (index) │ ORT    │ ORTTEXT                                        │ UW_1   │ UW_2   │ UW_3   │ UW_4   │
├─────────┼────────┼────────────────────────────────────────────────┼────────┼────────┼────────┼────────┤
│ 0       │ '0x00' │ '---'                                          │ '0x00' │ '0x00' │ '0x00' │ '0x00' │
│ 1       │ '0x01' │ 'Zuendung Zyl. 2'                              │ '0x24' │ '0x1C' │ '0x62' │ '0x63' │
...
```
