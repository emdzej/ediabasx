# BMBT46TN.prg

## General

|  |  |
| --- | --- |
| File | BMBT46TN.prg |
| Type | PRG |
| Jobs | 27 |
| Tables | 6 |
| Origin | BMW TI-433 Helmich |
| Revision | 1.1 |
| Author | BMW TI-433 Helmich, BMW TI-433 Holdsclaw |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Bordmonitor Topnavigation |  |  |
| ORIGIN | string | BMW TI-433 Helmich |  |  |
| REVISION | string | 1.01 |  |  |
| AUTHOR | string | BMW TI-433 Helmich, BMW TI-433 Holdsclaw |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Init-Job Bordmonitor Bedienteil-Teil

_No arguments._

### IDENT

Ident-Daten fuer Bordmonitor Bedienteil-Teil

_No arguments._

### FS_LESEN

Fehlerspeicher lesen 

_No arguments._

### STEUERN_SELBSTHALTUNG

_No description._

| Name | Type | Description |
| --- | --- | --- |
| STEUERCODE | int | DATENBYTE 2 |

### STEUERN_MONITOR_HELLIGKEIT

_No description._

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | DATENBYTE 2 |

### STEUERN_NF_TEST

_No description._

| Name | Type | Description |
| --- | --- | --- |
| STEUERCODE | int | DATENBYTE 2 |

### STEUERN_HEADROOM

_No description._

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | DATENBYTE 2 |

### STEUERN_MUTE

_No description._

| Name | Type | Description |
| --- | --- | --- |
| STEUERCODE | int | DATENBYTE 2 |

### STEUERN_POWER_CASSETTE

_No description._

| Name | Type | Description |
| --- | --- | --- |
| STEUERCODE | int | DATENBYTE 2 |

### STEUERN_POWER_DISPLAY

_No description._

| Name | Type | Description |
| --- | --- | --- |
| STEUERCODE | int | DATENBYTE 2 |

### STEUERN_NTSC_PAL

_No description._

| Name | Type | Description |
| --- | --- | --- |
| STEUERCODE | int | DATENBYTE 2 |

### STEUERN_HEIZUNG

_No description._

| Name | Type | Description |
| --- | --- | --- |
| STEUERCODE | int | DATENBYTE 2 |

### STEUERN_CASSETTE

_No description._

| Name | Type | Description |
| --- | --- | --- |
| STEUERTEXT | string | DATENBYTE 2 |

### TESTTON_AUSGEBEN

_No description._

_No arguments._

### CASSETTENDECK_BETRIEBSSTUNDENZAEHLER_LOESCHEN

_No description._

_No arguments._

### LC_ANZEIGE_BETRIEBSSTUNDENZAEHLER_LOESCHEN

_No description._

_No arguments._

### SELBSTTEST

Selbsttest Bordmonitor Bedien-Teil

_No arguments._

### Status_lesen_SG

_No description._

_No arguments._

### STATUS_LESEN_DREHGEBER

Stati lesen am Bordmitor Bedien-Teil

_No arguments._

### STATUS_LESEN_DISPLAY

Stati lesen Bordmitor u. Display

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |

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

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Reset |
| 0x02 | LC-Monitor Uebertemperatur |
| 0x03 | Radio Status Telegramm Timeout |
| 0x04 | Kurzschluss NF Leitung 1 |
| 0x05 | Kurzschluss NF Leitung 2 |
| 0x06 | Kurzschluss NF Leitung 3 |
| 0x07 | Kurzschluss NF Leitung 4 |
| 0x08 | K-Bus Senden |
| 0x09 | K-Bus Empfangen |
| 0x0A | Monitor Heizung Kurzschluss gegen U-Batt |
| 0x0B | Stecker Monitor UB Leitungsunterbrechung |
| 0x0C | Stecker Monitor Ub Heiz Leitungsunterbrechung |
| 0x14 | Temperatursensor Monitor unplausibler Wert |
| 0x15 | Monitorheizung oder Sicherung |
| 0x16 | EEPROM Checksumme stimmt nicht mit programmierten Wert ueberein |
| 0x17 | Programm Versionsnummer stimmt nicht mit der im EEPROM programmierten ueberein |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x20 | Fehler momentan vorhanden |
| 0xFF | unbekannte Fehlerart |

### CASSETTE

| FUNKTIONTEXT | HEXCODE |
| --- | --- |
| EJECT | 0x40 |
| PLAY | 0x41 |
| FFW | 0x42 |
| FRW | 0x43 |
| MSS_FW | 0x44 |
| MSS_RW | 0x45 |
| STANDBY | 0x48 |
| PAUSE_EIN | 0x4A |
| PAUSE_AUS | 0x4B |
| WIEDERGABE_NORMAL | 0x5A |
| WIEDERGABE_REVERSE | 0x5B |
| DOLBY_B | 0x5D |
| DOLBY_C | 0x5E |
| DOLBY_AUS | 0x5F |

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
