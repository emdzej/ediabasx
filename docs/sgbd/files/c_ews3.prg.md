# c_ews3.prg

## General

|  |  |
| --- | --- |
| File | c_ews3.prg |
| Type | PRG |
| Jobs | 14 |
| Tables | 2 |
| Origin | BMW TI-431 Lothar Dennert |
| Revision | 1.9 |
| Author | BMW TI-431 Lothar Dennert, BMW TI-433 Mario Spoljarec, Rover REE-47 Andrew Mellett |
| ECU Comment | Verifiziert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C-SGBD EWS 3 |  |  |
| ORIGIN | string | BMW TI-431 Lothar Dennert |  |  |
| REVISION | string | 1.09 |  |  |
| AUTHOR | string | BMW TI-431 Lothar Dennert, BMW TI-433 Mario Spoljarec, Rover REE-47 Andrew Mellett |  |  |
| COMMENT | string | Verifiziert |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Init-Job fuer EWS3 automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### IDENT

Ident-Daten fuer EWS3

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### STATUS_LESEN

Stati der EWS

_No arguments._

### C_FG_LESEN

Auslesen der Fahrgestellnummer aus der EWS

_No arguments._

### C_FG_AUFTRAG

Schreiben der 17-stelligen Fahrgestellnummer (incl. Pruefziffer)

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_ZCS_LESEN

Auslesen des Zentralen Codierschluessels aus KD-Daten

_No arguments._

### C_ZCS_AUFTRAG

Schreiben des Zentralen Codierschluessels in die KD-Daten

| Name | Type | Description |
| --- | --- | --- |
| GM | string | Zentralcode C1 - Grundmerkmal |
| SA | string | Zentralcode C2 - Sonderausstattung |
| VN | string | Zentralcode C3 - Versionsmerkmal |

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

### C_AZCS_LESEN

Read out ADDITIONAL ZCS data from Customer-data area

_No arguments._

### C_AZCS_AUFTRAG

Write the Rover Additional ZCS into customer-data block

| Name | Type | Description |
| --- | --- | --- |
| AGM | string | Additional Zentralcode C1 - Not used (9 chars = 8 chars + 1 char csum) |
| ASA | string | Additional Zentralcode C2 = 17-chars = 6 chars(unused) + 10  FEATURES chars + 1 char csum(unused) |
| AVN | string | Additional Zentralcode C3 = 11-chars = 6 chars(unused) + 4  MARKET chars + 1 char csum(unused) |

### KD_POLSTER_LACK_SCHREIBEN

Schreiben der Kundendienstdaten POLSTER und LACK in die EWS3

| Name | Type | Description |
| --- | --- | --- |
| POLSTER | string | Polstercode |
| LACK | string | Lackcode |

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNKTION |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_NAME |
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
| 0x24 | Temic |
| 0x25 | Webasto |
| 0x26 | MotoMeter |
| 0x27 | Delphi PHI |
| 0x28 | DODUCO |
| 0xFF | unbekannter Hersteller |
