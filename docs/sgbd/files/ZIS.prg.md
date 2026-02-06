# ZIS.prg

## General

|  |  |
| --- | --- |
| File | ZIS.prg |
| Type | PRG |
| Jobs | 9 |
| Tables | 6 |
| Origin | BMW TI-433 Krueger |
| Revision | 1.32 |
| Author | BMW TI-433 Mario Spoljarec, BMW TI-433 Krueger |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Multi-Informations-Display E38, E39, E53, L30 |  |  |
| ORIGIN | string | BMW TI-433 Krueger |  |  |
| REVISION | string | 1.32 |  |  |
| AUTHOR | string | BMW TI-433 Mario Spoljarec, BMW TI-433 Krueger |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### ENERGIESPARMODE

Einstellen des Energiesparmodes

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Init-Job fuer ZIS E38

_No arguments._

### IDENT

Ident-Daten fuer Front-ZIS

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### ZIS_VERSION

ZIS-Variante auslesen

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

## Tables

### DIGITALARGUMENT

| TEXT | WERT |
| --- | --- |
| ein | 1 |
| aus | 0 |
| ja | 1 |
| nein | 0 |
| auf | 1 |
| ab | 0 |
| yes | 1 |
| no | 0 |
| on | 1 |
| off | 0 |
| up | 1 |
| down | 0 |
| true | 1 |
| false | 0 |
| 1 | 1 |
| 0 | 0 |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xFF | ERROR_ECU_NACK |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Keine gueltige Statusrueckmeldung IKE |
| 0x02 | Keine gueltige Statusrueckmeldung AUDIO |
| 0x03 | Keine gueltige Statusrueckmeldung TELEFON |
| 0x04 | Keine gueltige Statusrueckmeldung DSP |
| 0x05 | Transportmode gesetzt |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x20 | Fehler momentan vorhanden |

### ZISVARIANTE

| CODE | VARIANTENTEXT | VAR_NR |
| --- | --- | --- |
| 0x00 | AUDIO, TELEFON, BC | 4 |
| 0x10 | AUDIO, TELEFON, BC, DSP | 7 |
| 0x01 | AUDIO, BC | 2 |
| 0x11 | AUDIO, BC, DSP | 5 |
| 0x02 | AUDIO, UHR | 3 |
| 0x12 | AUDIO, UHR, DSP | 6 |
| 0x03 | BC/UHR | 1 |
| 0x04 | AUDIO, UHR, TELEFON | 8 |
| 0x14 | AUDIO, UHR, TELEFON, DSP | 9 |
| 0xXY | unbekannte Variante | 0 |

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
| 0xFF | unbekannter Hersteller |
