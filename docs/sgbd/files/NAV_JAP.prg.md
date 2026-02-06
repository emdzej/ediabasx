# NAV_JAP.prg

## General

|  |  |
| --- | --- |
| File | NAV_JAP.prg |
| Type | PRG |
| Jobs | 11 |
| Tables | 4 |
| Origin | BMW TI-431 Rochal |
| Revision | 1.9 |
| Author | BMW TI-431 Teepe, BMW TI-431 Helmich, BMW TI-431 Robert Kuessel, BMW TI-431 Holdsclaw, BMW TI-431 Krueger, BMW TI-431 Rochal |
| ECU Comment | NAV_JAP |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Japan Navigation System |  |  |
| ORIGIN | string | BMW TI-431 Rochal |  |  |
| REVISION | string | 1.9 |  |  |
| AUTHOR | string | BMW TI-431 Teepe, BMW TI-431 Helmich, BMW TI-431 Robert Kuessel, BMW TI-431 Holdsclaw, BMW TI-431 Krueger, BMW TI-431 Rochal |  |  |
| COMMENT | string | NAV_JAP |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer EWS automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### IDENT

Ident-Daten fuer JAP_NAV

_No arguments._

### FS_LESEN

Fehlerspeicher lesen low-Konzept (lower als Lastenheft Codierung/Diagnose)

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### SYSTEM_STATUS_LESEN

Systemstatus des Navigationsrechners

_No arguments._

### SELBSTTEST

Ausloesen des Selbsttest

_No arguments._

### ENERGIESPARMODE

Einstellen des Energiesparmodes

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

### SLEEP_MODE

SG in Sleep-Mode versetzen

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x9B) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x9D) wird aktiviert |

### SYSTEM_RESET

Ausloesen des Selbsttests

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | CD-Wechsler |
| 0x02 | VICS Fehler |
| 0x03 | Fehler I-Bus |
| 0x04 | Fehler S-RAM |
| 0x05 | Fehler V-RAM |
| 0x06 | GPS Empfaenger Fehler |
| 0x07 | DVD Lese-Fehler |
| 0x08 | gyro Fehler |
| 0x09 | Produktionsmode ein |
| 0x0A | Transportmode ein |
| 0x0B | Werkstattmode ein |
| 0xXY | unbekannter Fehlerort |
