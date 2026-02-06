# dummy_sg.prg

## General

|  |  |
| --- | --- |
| File | dummy_sg.prg |
| Type | PRG |
| Jobs | 4 |
| Tables | 2 |
| Origin | BMW TI-430 Gerd Huber |
| Revision | 1.10 |
| Author | BMW TI-430 Gerd Huber |
| ECU Comment | !!! D U M M Y !!! |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Zentrale Dummy-Elektronik 0 |  |  |
| ORIGIN | string | BMW TP-421 Gerd Huber |  |  |
| REVISION | string | 99.001 |  |  |
| AUTHOR | string | BMW TP-421 Gerd Huber |  |  |
| COMMENT | string | !!! D U M M Y !!! |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Init-Job fuer Dummy SG automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### IDENT

Dummy-Ident-Daten

_No arguments._

### DUMMY_1

Dummy-Job 1

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_SG_REJECTED |
| 0xB0 | ERROR_SG_PARAMETER |
| 0xB1 | ERROR_SG_FUNKTION |
| 0xB2 | ERROR_SG_NUMBER |
| 0xFF | ERROR_SG_NACK |
| 0x00 | ERROR_SG_UNBEKANNTES_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe |
| 0x10 | VDO |
| 0x11 | Valeo |
| 0x12 | MBB |
| 0x13 | Kammerer |
| 0x14 | SWF |
| 0x15 | Blaupunkt |
| 0x16 | Philips |
| 0x17 | Alpine |
| 0x18 | Teves |
| 0x19 | Elektromatik Suedafrika |
| 0x20 | Becker |
| 0x21 | Preh |
| 0x22 | Alps |
| 0x23 | Motorola |
| 0xXY | unbekannter Dummy-Hersteller |
