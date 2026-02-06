# BORDMONI.prg

## General

|  |  |
| --- | --- |
| File | BORDMONI.prg |
| Type | PRG |
| Jobs | 15 |
| Tables | 6 |
| Origin | BMW TP-422 Helmich |
| Revision | 1.21 |
| Author | BMW TP-421 Teepe, BMW TP-422 Helmich, BMW TI-433 Holdsclaw |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Bordmonitor |  |  |
| ORIGIN | string | BMW TP-422 Helmich |  |  |
| REVISION | string | 1.21 |  |  |
| AUTHOR | string | BMW TP-421 Teepe, BMW TP-422 Helmich, BMW TI-433 Holdsclaw |  |  |
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

### Checksumme_abfragen

_No description._

_No arguments._

### STEUERN_DIGITAL

Ansteuern mehrerer digitaler Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| TEL_LED_GELB | string | Ansteuerung gelbe LED |
| TEL_LED_ROT | string | Ansteuerung rote LED |
| TEL_LED_GRUEN | string | Ansteuerung gruene LED |
| LED_RADIO | string | Ansteuerung LED Radio |
| LED_HEIZ_UHR | string | Ansteuerun LED Heizung und Uhr |

### Sonderjob

_No description._

_No arguments._

### SELBSTTEST

Selbsttest Bordmonitor Bedien-Teils

_No arguments._

### STATUS_LESEN

Stati lesen am Bordmitor Bedien-Teil

_No arguments._

### Pruefstempel_lesen

Auslesen des Pruefstempels

_No arguments._

### Pruefstempel_schreiben

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
| 0x01 | Watchdog Reset |
| 0x02 | PL-Leitung Kurzschluss gegen U-Batt |
| 0x03 | PL-Leitung Kurzschluss gegen Masse |
| 0x04 | PL-Leitung Leitungsunterbrechung |
| 0x05 | LC-Monitor Uebertemperatur |
| 0x06 | Radio Status Telegramm Timeout |
| 0x07 | Kurzschluss NF Leitung 1 |
| 0x08 | Kurzschluss NF Leitung 2 |
| 0x09 | Kurzschluss NF Leitung 3 |
| 0x0A | Kurzschluss NF Leitung 4 |
| 0x0B | I-Bus Fehler beim Senden |
| 0x0C | 25 Stunden Notabschaltung |
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
