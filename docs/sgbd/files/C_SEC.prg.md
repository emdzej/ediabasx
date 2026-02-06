# C_SEC.prg

## General

|  |  |
| --- | --- |
| File | C_SEC.prg |
| Type | PRG |
| Jobs | 12 |
| Tables | 5 |
| Origin | BMW TI-433 Gerd Huber |
| Revision | 0.2 |
| Author | BMW TI-433 Gerd Huber, remes B. Bloechl |
| ECU Comment | Prototyp |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Sicherheits-Steuergeraet E38/3 |  |  |
| ORIGIN | string | BMW TI-433 Gerd Huber |  |  |
| REVISION | string | 0.02 |  |  |
| AUTHOR | string | BMW TI-433 Gerd Huber, remes B. Bloechl |  |  |
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

### FS_LESEN

Fehlerspeicher lesen DS2-Low-Konzept mit Abweichungen

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer beide Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | 0-255 bzw. 0x00-0xFF |

### KODIERDATEN_LESEN

Auslesen des Kodierdatenblocks1 2 Byte fuer Ausstattung & Sprache

_No arguments._

### KODIERDATEN_SCHREIBEN

Schreiben des Kodierdatenblocks1 2 Byte fuer Ausstattung & Sprache

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0-255 bzw. 0x00-0xFF ist eigentlich bitweise zu lesen |
| BYTE2 | int | 0-255 bzw. 0x00-0xFF ist eigentlich bitweise zu lesen |

### C_FG_AUFTRAG

Beschreiben des Pruefstempels mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

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
| 0x01 | Magnetventile FH Fahrertuer auf/zu |
| 0x02 | Magnetventile FH Beifahrertuer auf/zu |
| 0x03 | Magnetventile FH Fahrertuer hinten auf/zu |
| 0x04 | Magnetventile FH Beifahrertuer hinten auf/zu |
| 0x05 | Frontscheibenheizung Fahrerseite |
| 0x06 | Frontscheibenheizung Beifahrerseite |
| 0x07 | Seitenscheibenheizung Fahrerseite |
| 0x08 | Seitenscheibenheizung Beifahrerseite |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x01 | statischer Fehler |
| 0x02 | sporadischer Fehler |
| 0x04 | Unterbrechung |
| 0x05 | statischer Fehler: Unterbrechung |
| 0x06 | sporadischer Fehler: Unterbrechung |
| 0x08 | Kurzschluss |
| 0x09 | statischer Fehler: Kurzschluss |
| 0x0A | sporadischer Fehler: Kurzschluss |
| 0x0D | statischer Fehler: Unterbrechung/Kurzschluss |
| 0x0E | sporadischer Fehler: Unterbrechung/Kurzschluss |
| 0x10 | Kurzschluss nach plus |
| 0x11 | statischer Fehler: Kurzschluss nach plus |
| 0x12 | sporadischer Fehler: Kurzschluss nach plus |
| 0x15 | statischer Fehler: Unterbrechung/Kurzschluss nach plus |
| 0x16 | sporadischer Fehler: Unterbrechung/Kurzschluss nach plus |
| 0x19 | statischer Fehler: Kurzschluss nach Masse/nach plus |
| 0x1A | sporadischer Fehler: Kurzschluss nach Masse/nach plus |
| 0x1D | statischer Fehler: Unterbrechung/Kurzschluss nach Masse/nach plus |
| 0x1E | sporadischer Fehler: Unterbrechung/Kurzschluss nach Masse/nach plus |
| 0xXY | unbekannte Fehlerart |
