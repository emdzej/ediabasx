# SGBD/PRG File Format

SGBD (Steuergerätebeschreibungsdatei) files contain compiled diagnostic jobs for EDIABAS.

## File Extensions

| Extension | Type | Description |
|-----------|------|-------------|
| `.prg` | PRG | Single ECU description (Programm) |
| `.grp` | GRP | Group file (references multiple PRGs) |

## Header Structure (156 bytes = 0x9C)

Based on analysis of `FUN_1000c92b` and `FUN_1000cbec`:

| Offset | Size | Name | Description |
|--------|------|------|-------------|
| 0x00 | 16 | signature | "_EDIABAS_OBJECT\0" or similar |
| 0x10 | 4 | file_type | 0 = PRG, 1 = GRP |
| 0x14 | ? | version | File format version |
| ... | ... | ... | ... |

### Magic Signature

Files are validated by comparing first 16 bytes against `"_EDIABAS_OBJECT"`.

### File Type Codes

| Code | Type | Error if mismatch |
|------|------|-------------------|
| 0 | PRG (single ECU) | 0x61 |
| 1 | GRP (group) | 0x5E |

## Loading Process

```
FUN_1000c92b(filename, isGroup)
│
├─→ Open file (FUN_1001c97e)
│
├─→ Read header (156 bytes) into DAT_100ae740
│
├─→ Validate header (FUN_1000cbec)
│   └─→ Check signature "_EDIABAS_OBJECT"
│   └─→ Check file_type matches isGroup
│
├─→ Check password (FUN_1000cc5b)
│
├─→ Read job count (FUN_1000cddd)
│
└─→ Load jobs (FUN_1000c458)
```

## Key Data Structures

### Static Data Pointers

| Address | Name | Description |
|---------|------|-------------|
| `DAT_100ae720` | file_handle | Open file handle |
| `DAT_100ae740` | header | Header buffer (156 bytes) |
| `DAT_100ae750` | file_type | Type from header |
| `DAT_100ae734` | job_count | Number of jobs |
| `DAT_100ae738` | ? | Job table pointer? |
| `DAT_100ae390` | filename | Current SGBD filename |
| `DAT_100ae204` | isGroup | Is group file flag |

## Error Codes

| Code | Description |
|------|-------------|
| 0x5A | Unknown error |
| 0x5C | File not found |
| 0x5D | Read error |
| 0x5E | Invalid header (expected PRG, got GRP) |
| 0x61 | Invalid header (expected GRP, got PRG) |
| 0x6E | File not found (group context) |
| 0x6F | Read error (group context) |
| 0x70 | Invalid header (group context) |

## Related Functions

| Function | Purpose |
|----------|---------|
| `FUN_1000c92b` | Main SGBD loader |
| `FUN_1000cbec` | Validate header |
| `FUN_1000cc5b` | Check password |
| `FUN_1000cddd` | Get job count |
| `FUN_1000cd90` | Read job table? |
| `FUN_1000c458` | Load job |
| `FUN_1000ce83` | Close SGBD |

## Bytecode Section

After header, the file contains:
1. Job table (names, offsets)
2. Bytecode for each job
3. String constants
4. Result definitions

### Job Execution

Jobs are executed by the VM:
1. Look up job by name
2. Seek to job bytecode offset
3. Execute opcodes until EOJ (0x1D)
4. Return results via ERG* opcodes

## Notes

- Password protection: Some SGBDs are encrypted
- Variant handling: GRP files can reference multiple PRG variants
- External tabfiles: Additional data loaded from .tab files
