# platform/esp32

Placeholder for the ESP32 dongle port.

Target hardware: ESP32-WROVER-E with K-line transceiver + CAN PHY + ENET PHY,
SD card for SGBD storage.

## What needs to land here

- **K-line transport** — implement `edxn_transport_t` against ESP32 UART2
  (different API from POSIX termios but the same on-the-wire bytes).
- **CAN/D-CAN transport** — TWAI driver wrapped behind the same vtable;
  separate file (e.g. `can.c`).
- **ENET transport** — wired via the ESP32 RMII interface; another
  `edxn_transport_t` impl.
- **SGBD loader** — reads `.prg` / `.grp` from SD card using `fatfs` or
  `littlefs`. Same callback signature as `edxn_vm_posix_sgbd_loader`.
- **Table loader** — likewise from SD.

The portable VM in `../src/` doesn't need any changes — it's already
embedded-clean (no malloc in opcode hot paths, fixed-size buffers,
explicit ownership). Memory budget: the `edxn_vm_t` struct is ~50 KB
mainly from fixed-size shared memory + config maps. Trim `EDXN_SHM_*` and
`EDXN_CFG_*` constants in `vm.h` if you need to shrink it for a smaller
SoC.
