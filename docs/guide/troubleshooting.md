# Troubleshooting

## Common Errors and Solutions

### "Cannot open serial port" / "Permission denied"
**Symptoms:** CLI fails to access the serial device.

**Fixes:**
- Ensure the device path is correct (e.g. `/dev/ttyUSB0`, `/dev/tty.usbserial-*`).
- Verify user permissions for serial devices.
- Unplug/replug the adapter and retry.

### Connection Issues
**Symptoms:** No response from ECU, repeated retries, or gateway cannot connect.

**Fixes:**
- Confirm ignition is on and the ECU is powered.
- Verify the correct interface and protocol (`--serial-protocol kwp` vs `isotp`).
- Check cabling and adapter type (K-Line vs K+DCAN vs ENET).
- If using gateway, confirm host/port are reachable.

### Timeouts
**Symptoms:** `timeout` errors during job execution.

**Fixes:**
- Increase general timeout: `--timeout <ms>`
- For serial interfaces, adjust receive timing: `--serial-timeout <ms>`
- Check physical connection quality and protocol settings.

### "Not supported" / Job not found
**Symptoms:** Job is missing or ECU rejects the command.

**Fixes:**
- Use `ediabas jobs <file>` to list supported jobs.
- Ensure you are using the correct PRG/GRP for the ECU.
- Some ECUs require specific job arguments; verify with `ediabas jobs` output.

### File parsing errors
**Symptoms:** Invalid PRG/GRP file or parse failures.

**Fixes:**
- Verify the file is a valid BMW PRG/GRP file.
- Use `ediabas info <file>` or `ediabas parse <file>` to inspect the file.
