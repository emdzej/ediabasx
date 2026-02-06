# VIDEOMOD.prg

## General

|  |  |
| --- | --- |
| File | VIDEOMOD.prg |
| Type | PRG |
| Jobs | 22 |
| Tables | 7 |
| Origin | BMW TI-431 Rochal |
| Revision | 1.3 |
| Author | BMW TI-433 Helmich, BMW TP-422 Teepe, BMW TI-431 Krueger, BMW TI-431 Rochal |
| ECU Comment | VIDEOMOD |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Videomodul |  |  |
| ORIGIN | string | BMW TI-431 Rochal |  |  |
| REVISION | string | 1.3 |  |  |
| AUTHOR | string | BMW TI-433 Helmich, BMW TP-422 Teepe, BMW TI-431 Krueger, BMW TI-431 Rochal |  |  |
| COMMENT | string | VIDEOMOD |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

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

### INITIALISIERUNG

Init-Job Videomodul TV-Teil

_No arguments._

### IDENT

Ident-Daten fuer Videomodul TV-Teil

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low Konzept ohne Umweltbedingung

_No arguments._

### IS_LESEN

Shadowspeicher lesen

_No arguments._

### Pruefstempel_lesen

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Daten in den Pruefstempel schreiben

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |

### Speicher_lesen

Lesen, welche Parameter geladen sind

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT_AUSWAHL | int | Angabe, welches Speichermedium ausgelesen werden soll |
| START_ADRESSE_HIGH | int | Startadresse high als Hexwert |
| START_ADRESSE_MIDDLE | int | Startadresse middle als Hexwert |
| START_ADRESSE_LOW | int | Startadresse low als Hexwert |
| ANZAHL_BYTE | int | Angabe, wieviele Bytes ausgelesen werden sollen maximale Anzahl 32 Byte, entspricht 20 Hex |

### STEUERN_SELBSTTEST

Selbsttest des Videomoduls

_No arguments._

### SG_STATUS_LESEN

Stati lesen am Videomodul TV-Teil

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen im Videomodul TV-Teil

_No arguments._

### STEUERN_SLEEP_MODE

Steuergeraet in Sleep-Mode versetzen

_No arguments._

### MABIKI_MODE_SCHREIBEN

Umschreiben eines Bytes

| Name | Type | Description |
| --- | --- | --- |
| FZG_TYP | string | E38 oder E39 |

### CODIERUNG_LAENDERVARIANTE_LESEN

Speicher lesen EEPROM

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### C_S_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_S_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### CS_BILDEN

_No description._

_No arguments._

### C_FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben des Pruefstempels mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

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

### SEGMENTAUSWAHL

| SEGMENT | AUSWAHLTEXT |
| --- | --- |
| 0x02 | EPROM |
| 0x03 | EEPROM |
| 0x04 | internes RAM DATA |
| 0x05 | externes RAM XDATA |
| 0x0B | internes RAM IDATA |
| 0xXY | Unbekanntes Segment |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | IBus Dauerhigh Abschaltung |
| 0x02 | Watchdog ausgeloest |
| 0x03 | FeTraWe aktiviert |
| 0xXY | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | I-Bus-Pufferueberlauf |
| 0x02 | I2 C Fehler zum Graphikteil |
| 0x03 | I2 C Fehler vom Graphikteil |
| 0x04 | Uebertemperatur im Videomodul |
| 0x05 | Audio-Fehler |
| 0x06 | RGB-Fehler |
| 0x07 | Video-Fehler |
| 0x08 | Sonstige-Fehler |
| 0x09 | EEPROM read Fehler |
| 0x0A | EEPROM write Fehler |
| 0x0B | EEPROM Checksumfehler |
| 0x0C | EEPROM Neuinitialisierung |
| 0x0D | Kein RGB Telegramm vom Graphikteil |
| 0xXY | unbekannte Fehlerart |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler nicht aktiv |
| 0x20 | Fehler aktiv |
| 0xXY | unbekannte Fehlerart |
