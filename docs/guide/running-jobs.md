# Running Jobs

## What are “jobs”?
In EDIABAS, **jobs** are diagnostic procedures defined inside PRG/GRP files. A PRG/GRP file represents an ECU’s diagnostic definition, and each job can accept arguments and return results.

You can inspect available jobs using:

```bash
ediabas jobs path/to/file.prg
```

## Run a Job from the CLI
Basic syntax:

```bash
ediabas run <file> <job> [args]
```

Example (simulation):

```bash
ediabas run path/to/file.prg IDENT --interface simulation
```

Example (serial K-Line):

```bash
ediabas run path/to/file.prg STATUS_LESEN \
  --interface serial \
  --serial-port /dev/ttyUSB0 \
  --serial-baud 9600 \
  --serial-protocol kwp
```

Helpful options:
- `--json` — output results as JSON
- `--results <names>` — filter specific results (comma-separated)
- `--info` — show job metadata instead of executing
- `--timeout <ms>` — communication timeout

## Using the TUI Runner
If you run the command **without a job**, ediabas opens an interactive TUI runner:

```bash
ediabas run path/to/file.prg
```

Use the TUI to browse jobs and execute them interactively.

## Understanding Results
Job results are returned as named values, often with ECU-specific meanings. Use `ediabas jobs <file>` to see expected arguments and result types. You can also request JSON output for easier parsing:

```bash
ediabas run path/to/file.prg IDENT --json
```

## Common Jobs
Commonly available jobs (names vary by ECU):
- `IDENT` — identify ECU
- `STATUS_LESEN` — read ECU status
- `INFO` — ECU information
- `STATUS_UBATT` — battery/voltage status

Use `ediabas jobs <file>` to see what your ECU supports.
