# SMAC_R40.PRG

## General

|  |  |
| --- | --- |
| File | SMAC_R40.PRG |
| Type | PRG |
| Jobs | 8 |
| Tables | 5 |
| Origin | BMW TI-433 Gerd Huber |
| Revision | 0.1 |
| Author | BMW TI-433 Gerd Huber |
| ECU Comment | Prototyp |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Sitzmemory E46 |  |  |
| ORIGIN | string | BMW TI-433 Gerd Huber |  |  |
| REVISION | string | 0.01 |  |  |
| AUTHOR | string | BMW TI-433 Gerd Huber |  |  |
| COMMENT | string | Prototyp |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information bzgl. SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### IDENT

Identdaten

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

_No arguments._

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### FS_LESEN

Fehlerspeicher lesen DS2-Low-Konzept mit Abweichungen Sonderfall: externer und interner Fehlerspeicher

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xB2 | ERROR_ECU_NUMBER |
| 0xFF | ERROR_ECU_NACK |
| ?10? | ERROR_ARGUMENT |
| ?20? | ERROR_FEHLERANZAHL |
| 0x?? | ERROR_ECU_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen / Delphi |
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
| 0x24 | Temic |
| 0x25 | Webasto |
| 0x26 | MotoMeter |
| 0x27 | Delphi PHI |
| 0x28 | DODUCO |
| 0x29 | DENSO |
| 0x30 | NEC |
| 0x31 | DASA |
| 0x32 | Pioneer |
| 0x33 | Jatco |
| 0x34 | Fuba |
| 0x35 | UK-NSI |
| 0x36 | AABG |
| 0x37 | Dunlop |
| 0x38 | Sachs |
| 0x39 | ITT |
| 0x40 | FTE |
| 0x41 | Megamos |
| 0x42 | TRW |
| 0x43 | Wabco |
| 0x44 | ISAD Electronic Systems |
| 0x45 | HEC (Hella Electronics Corporation) |
| 0x46 | Gemel |
| 0xFF | unbekannter Hersteller |

### ROVERPARTNUMPREFIX

| ROVER_NR | PREFIX |
| --- | --- |
| 0xA0 | AMR |
| 0xA1 | HHF |
| 0xA2 | JFC |
| 0xA3 | MKC |
| 0xA4 | SCB |
| 0xA5 | SRB |
| 0xA6 | XQC |
| 0xA7 | XQD |
| 0xA8 | XQE |
| 0xA9 | XVD |
| 0xAA | YAC |
| 0xAB | YDB |
| 0xAC | YFC |
| 0xAD | YUB |
| 0xAE | YWC |
| 0xAF | YWQ |
| 0xB0 | EGQ |
| 0xB1 | YIB |
| 0xB2 | YIC |
| 0xB3 | YIE |
| 0xXY | ??? |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Memory Store Switch Stuck Closed |
| 0x02 | Memory 1 Switch Stuck Closed |
| 0x03 | Memory 2 Switch Stuck Closed |
| 0x04 | Memory 3 Switch Stuck Closed |
| 0x05 | Memory 4 Switch Stuck Closed |
| 0x06 | Memory 5 Switch Stuck Closed |
| 0x07 | Seat Slide Forward Switch Stuck Closed |
| 0x08 | Seat Slide Backward Switch Stuck Closed |
| 0x09 | Seat Recline Raise Switch Stuck Closed |
| 0x0A | Seat Recline Lower Switch Stuck Closed |
| 0x0B | Seat Height Up Switch Stuck Closed |
| 0x0C | Seat Height Down Switch Stuck Closed |
| 0x0D | Seat Tilt Up Switch Stuck Closed |
| 0x0E | Seat Tilt Down Switch Stuck Closed |
| 0x0F | Column Slide In Switch Stuck Closed |
| 0x10 | Column Slide Out Switch Stuck Closed |
| 0x11 | Column Tilt Up Switch Stuck Closed |
| 0x12 | Column Tilt Down Switch Stuck Closed |
| 0x13 | LH/RH Mirror Vertical Switch Stuck at Ground |
| 0x14 | LH/RH Mirror Vertical Switch Stuck at 12V |
| 0x15 | LH/RH Mirror Horizontal Switch Stuck at Ground |
| 0x16 | LH/RH Mirror Horizontal Switch Stuck at 12V |
| 0x17 | RH Mirror Horizontal Switch Stuck at Ground |
| 0x18 | RH Mirror Horizontal Switch Stuck at 12V |
| 0x19 | LH Mirror Common Switch Stuck at Ground |
| 0x1A | LH Mirror Common Switch Stuck at 12V |
| 0x1B | RH Mirror Common Switch Stuck at Ground |
| 0x1C | RH Mirror Common Switch Stuck at 12V |
| 0x1D | Seat Power 1 Loss |
| 0x1E | Seat Power 2 Loss |
| 0x1F | Column Power Loss |
| 0x20 | Logic Power Loss |
| 0x21 | Seat Slide Feedback Loss |
| 0x22 | Seat Recline Feedback Loss |
| 0x23 | Seat Height Feedback Loss |
| 0x24 | Seat Tilt Feedback Loss |
| 0x25 | Column Slide Feedback Loss |
| 0x26 | Column Tilt Feedback Loss |
| 0x27 | LH Mirror Vertical Sense Out of Range |
| 0x28 | LH Mirror Horizontal Sense Out of Range |
| 0x29 | RH Mirror Vertical Sense Out of Range |
| 0x2A | RH Mirror Horizontal Sense Out of Range |
| 0x2B | Seat Slide Distance Travelled |
| 0x2C | Seat Recline Distance Travelled |
| 0x2D | Seat Height Distance Travelled |
| 0x2E | Seat Tilt Distance Travelled |
| 0x2F | Column Slide Distance Travelled |
| 0x30 | Column Tilt Distance Travelled |
| 0x40 | Seat Hall Sensor Power Inoperative |
| 0x41 | Seat Hall Sensor Power Stuck On |
| 0x42 | Lumbar Pump Power Inoperative |
| 0x43 | Lumbar Pump Power Stuck On |
| 0x44 | Backrest Up Relay Inoperative |
| 0x45 | Backrest Up Relay Stuck On |
| 0x46 | Backrest/Tilt Common Relay Inoperative |
| 0x47 | Backrest/Tilt Common Relay Stuck On |
| 0x48 | Tilt Down Relay Inoperative |
| 0x49 | Tilt Down Relay Stuck On |
| 0x4A | Height Up Relay Inoperative |
| 0x4B | Height Up Relay Stuck On |
| 0x4C | Height/Slide Relay Inoperative |
| 0x4D | Height/Slide Relay Stuck On |
| 0x4E | Slide Back Relay Inoperative |
| 0x4F | Slide Back Relay Stuck On |
| 0x50 | Column Tilt Up Relay Inoperative |
| 0x51 | Column Tilt Up Relay Stuck On |
| 0x52 | Column Tilt Down Relay Inoperative |
| 0x53 | Column Tilt Down Relay Stuck On |
| 0x54 | Column Slide In Relay Inoperative |
| 0x55 | Column Slide In Relay Stuck On |
| 0x56 | Column Slide Out Relay Inoperative |
| 0x57 | Column Slide Out Relay Stuck On |
| 0x58 | LH Mirror Left/Right Output Inoperative |
| 0x59 | LH Mirror Left/Right Output Stuck On |
| 0x5A | LH Mirror Common Output Inoperative |
| 0x5B | LH Mirror Common Output Stuck On |
| 0x5C | LH Mirror Up/Down Output Inoperative |
| 0x5D | LH Mirror Up/Down Output Stuck On |
| 0x5E | RH Mirror Left/Right Output Inoperative |
| 0x5F | RH Mirror Left/Right Output Stuck On |
| 0x60 | RH Mirror Common Output Inoperative |
| 0x61 | RH Mirror Common Output Stuck On |
| 0x62 | RH Mirror Up/Down Output Inoperative |
| 0x63 | RH Mirror Up/Down Output Stuck On |
| 0x65 | EEPROM Checksum Fault |
| 0xXY | Unknown error location |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | Static error |
| 0x01 | Sporadic error |
| 0xXY | Unknown type of error |
