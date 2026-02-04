## Summary
Add optional job name argument to `disasm` command for disassembling a single job.

## Usage
```bash
# Disassemble all jobs
ediabas disasm file.prg

# Disassemble specific job
ediabas disasm file.prg STATUS_UBATT
```

## Example
```
$ ediabas disasm d_motor.prg STATUS_UBATT

STATUS_UBATT @ 0x232
  00000232: xtype S0
  00000235: scmp S0,"PICO"
  0000023F: jnz __00000268
  00000245: settmr #$3000.L
  0000024B: xbatt L0
  ...
  00000326: eoj
```

## Features
- Case-insensitive job name matching
- Shows available jobs if specified job not found
