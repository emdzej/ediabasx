# BM46WIDE.prg

## General

|  |  |
| --- | --- |
| File | BM46WIDE.prg |
| Type | PRG |
| Jobs | 14 |
| Tables | 6 |
| Origin | BMW TI-430 Buboltz |
| Revision | 1.1 |
| Author | Alpine H. Weber, BMW TI-430 Buboltz, BMW TI-430 Gall |
| ECU Comment | Widescreen E46 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Widescreen Bordmonitor E46 |  |  |
| ORIGIN | string | BMW TI-430 Buboltz |  |  |
| REVISION | string | 1.1 |  |  |
| AUTHOR | string | Alpine H. Weber, BMW TI-430 Buboltz, BMW TI-430 Gall |  |  |
| COMMENT | string | Widescreen E46 |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

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

### CHECKSUMME_ABFRAGEN

_No description._

_No arguments._

### STEUERN_DIGITAL

Ansteuern mehrerer digitaler Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| LED_RADIO | int | Ansteuerung LED Radio 0 := LED Radio aus 1 := LED Radio an jeder anderer Wert = LED aus |

### SELBSTTEST

Selbsttest Bordmonitor Bedien-Teils

_No arguments._

### STATUS_LESEN

Stati lesen am Bordmitor Bedien-Teil

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Daten in den Pruefstempel schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATUM_1 | int | kann beliebig verwendet werden |
| DATUM_2 | int | kann beliebig verwendet werden |
| DATUM_3 | int | kann beliebig verwendet werden |

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Energiesparmode aktiv |
| 0x01 | Watchdog Reset |
| 0x02 | LC-Monitor Uebertemperatur |
| 0x03 | Radio Status Telegramm Timeout |
| 0x04 | Kurzschluss Audio Leitung 1 |
| 0x05 | Kurzschluss Audio Leitung 2 |
| 0x06 | Kurzschluss Audio Leitung 3 |
| 0x07 | Kurzschluss Audio Leitung 4 |
| 0x14 | Temperatursensor Fehler |
| 0x16 | EEPROM checksum Fehler |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x20 | Fehler momentan vorhanden |
| 0xFF | unbekannte Fehlerart |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| TEL_LED_GELB | 2 | 0x01 |
| TEL_LED_ROT | 2 | 0x02 |
| TEL_LED_GRUEN | 2 | 0x04 |
| LED_RADIO | 2 | 0x08 |
| LED_HEIZ_UHREVHL | 2 | 0x10 |
| Kassette | 1 | 0x01 |
| LED_FUNKTION | 1 | 0x02 |
| XYZ | 2 | 0xFF |
