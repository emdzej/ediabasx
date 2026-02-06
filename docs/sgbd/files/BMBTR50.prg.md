# BMBTR50.prg

## General

|  |  |
| --- | --- |
| File | BMBTR50.prg |
| Type | PRG |
| Jobs | 14 |
| Tables | 6 |
| Origin | BMW TI-431 Stephan Krueger |
| Revision | 1.07 |
| Author | Software-Style M.Rafferty,BMW TI-430 Thomas Buboltz |
| ECU Comment | Version ? |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | BMBTR50 |  |  |
| ORIGIN | string | BMW TI-431 Stephan Krueger |  |  |
| REVISION | string | 1.07 |  |  |
| AUTHOR | string | Software-Style M.Rafferty,BMW TI-430 Thomas Buboltz |  |  |
| COMMENT | string | Version ? |  |  |
| PACKAGE | string | 0.12 |  |  |
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

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### IDENT

Identification data

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels Read the Test Stamp

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Write the Test Stamp

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden (0x00-0xFF) you can use any value you like (0x00-0xFF) |
| BYTE2 | int | kann beliebig verwendet werden (0x00-0xFF) |
| BYTE3 | int | kann beliebig verwendet werden (0x00-0xFF) |

### READ_SYSTEM_PARAMETERS

Auslesen verschiedener Geraetestati Read door status, dimmer position and LCD operation times

_No arguments._

### FS_LESEN

Read all faults

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen Clear error memory

_No arguments._

### STATUS_ANALOG

Status der Analogsignale auslesen Read Analogue Input and Output States

_No arguments._

### STATUS_LESEN_DREHGEBER

Stati lesen am Bordmitor Bedien-Teil

_No arguments._

### SLEEP_MODE

Steuergeraet in Sleep-Mode versetzen Power down ECU

_No arguments._

### READ_LCD_OFFSET

LC helligkeit abgleich auflesen Read the LCD brightness offset value

_No arguments._

### DIAGNOSE_ENDE

Diagnosemode des SG beenden

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
| 0x59 | Haberl |
| 0x60 | Magna Steyr |
| 0x61 | Marquardt |
| 0x62 | AB-Elektronik |
| 0x63 | Siemens VDO Borg |
| 0x64 | Hirschmann Electronics |
| 0x65 | Hoerbiger Electronics |
| 0x66 | Thyssen Krupp Automotive Mechatronics |
| 0xFF | unbekannter Hersteller |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Energiesparmode aktiv |
| 0x01 | Reset |
| 0x02 | LC MONITOR übertemperatur |
| 0x08 | K-BUS Sendefehler |
| 0x09 | K-BUS Empfangsfehler |
| 0x16 | EEPROM Checksumfehler |
| 0xFF | Unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler inaktiv |
| 0x01 | Fehler aktiv |
| 0xFF | Unbekannter Fehlerort |

### ANALOG

| NAME | FACT_A | FACT_B | EINH |
| --- | --- | --- | --- |
| AIP_EXT_5V_MON | 1.0 | 0.0 |  |
| KEY_STATUS | 1.0 | 0.0 |  |
| ROTARY_ENCODER | 1.0 | 0.0 |  |
| LCD_BRIGHTNESS | 1.0 | 0.0 |  |
| CLAMP_30 | 0.1 | 0.0 |  |
| LCD_TEMPERATURE | 1.0 | 0.0 |  |
| PHOTO_SENSOR | 1.0 | 0.0 |  |
| Unknown item | 0.0 | 0 |  |
