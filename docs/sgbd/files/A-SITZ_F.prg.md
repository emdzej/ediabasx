# A-SITZ_F.prg

## General

|  |  |
| --- | --- |
| File | A-SITZ_F.prg |
| Type | PRG |
| Jobs | 6 |
| Tables | 5 |
| Origin | BMW TI-430 Drexel |
| Revision | 1.0 |
| Author | BMW TI-430 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Aktivsitz Fahrer |  |  |
| ORIGIN | string | BMW TI-430 Drexel |  |  |
| REVISION | string | 1.0 |  |  |
| AUTHOR | string | BMW TI-430 Drexel |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### IDENT

Identdaten

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen ZKE 3 Fehlerspeicher wird geloescht!

_No arguments._

### STATUS_IO

Status lesen

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
| ?70? | ERROR_NUMBER_ARGUMENT |
| ?71? | ERROR_RANGE_ARGUMENT |
| ?72? | ERROR_VERIFY |
| 0x?? | ERROR_ECU_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen => Delphi |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe => Lear |
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
| 0x28 | DODUCO => BERU |
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
| 0x47 | ZF |
| 0x48 | GMPT |
| 0x49 | Harman Kardon |
| 0x50 | Remes |
| 0x51 | ZF Lenksysteme |
| 0x52 | Magneti Marelli |
| 0x53 | Borg Instruments |
| 0x54 | GETRAG |
| 0x55 | BHTC (Behr Hella Thermocontrol) |
| 0x56 | Siemens VDO Automotive |
| 0x57 | Visteon |
| 0x58 | Autoliv |
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
| 0x00 | Motortreiber defekt |
| 0x01 | Ventiltreiber defekt |
| 0x02 | Beschleunigungssensor kein Signal |
| 0x03 | EEPROM defekt |
| 0x04 | Hallsensor oder Pumpenmotor defekt |
| 0x05 | Drucksensor 1 defekt |
| 0x06 | Drucksensor 2 defekt |
| 0x07 | Systemfehler Not-Aus |
| 0x08 | interner Systemfehler |
| 0xFF | unbekannter Fehlerort |

### PUMPENSTATUS

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | Pumpe steht |
| 0x01 | Pumpe startet von Mittelstellung nach Anschlag 1 |
| 0x02 | Pumpe faehrt nach Anschlag 1 |
| 0x03 | Pumpe wartet bei Anschlag 1 |
| 0x04 | Pumpe startet von Anschlag 1 nach Mittelstellung |
| 0x05 | Pumpe faehrt von Anschlag 1 nach Mittelstellung |
| 0x06 | Pumpe wartet in Mittelstellung |
| 0x07 | Pumpe startet von Mittelstellung nach Anschlag 2 |
| 0x08 | Pumpe faehrt nach Anschlag 2 |
| 0x09 | Pumpe wartet bei Anschlag 2 |
| 0x0A | Pumpe startet von Anschlag 2 nach Mittelstellung |
| 0x0B | Pumpe faehrt von Anschlag 2 nach Mittelstellung |
| 0x0C | Pumpe wartet in Mittelstellung |
| 0xFF | unbekannter Zustand |
