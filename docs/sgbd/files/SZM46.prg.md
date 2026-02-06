# SZM46.prg

## General

|  |  |
| --- | --- |
| File | SZM46.prg |
| Type | PRG |
| Jobs | 11 |
| Tables | 9 |
| Origin | BMW TI-433 Zhang |
| Revision | 1.06 |
| Author | BMW TI-430 Drexel, Alps Lo |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Schaltzentrum Mittelkonsole E46 |  |  |
| ORIGIN | string | BMW TI-433 Zhang |  |  |
| REVISION | string | 1.06 |  |  |
| AUTHOR | string | BMW TI-430 Drexel, Alps Lo |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.00 |  |  |
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

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### IS_LESEN

Infospeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### ENERGIESPARMODE

Einstellen des Energiesparmodes

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

### CODIERUNG_LESEN

Auslesen der Codierdaten

_No arguments._

### STATUS_IO

Status lesen

_No arguments._

### STEUERN_IO

Status vorgeben

| Name | Type | Description |
| --- | --- | --- |
| IO_ID | string | table IOStatus IO_ID_TEXT |
| IO_BYTE | string | 'EIN','AUS' table DigitalArgument TEXT |

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
| 0x59 | Haberl |
| 0x60 | Magna Steyr |
| 0x61 | Marquardt |
| 0x62 | AB-Elektronik |
| 0x63 | Siemens VDO Borg |
| 0x64 | Hirschmann Electronics |
| 0x65 | Hoerbiger Electronics |
| 0x66 | Thyssen Krupp Automotive Mechatronics |
| 0x67 | Gentex GmbH |
| 0x68 | Atena GmbH |
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

### IOSTATUS

| IO_ID | IO_ID_TEXT |
| --- | --- |
| 0x00 | Left_side_seat_heater_switch |
| 0x01 | Right_side_seat_heater_switch |
| 0x02 | Sunblind_switch |
| 0x03 | Surround_switch |
| 0x06 | Day/Night_change over |
| 0x07 | Terminal_50_status |
| 0x08 | Terminal_15_status |
| 0x09 | Terminal_R_status  |
| 0x10 | Right_side_seat_heater_bottom_LED |
| 0x11 | Right_side_seat_heater_middle_LED |
| 0x12 | Right_side_seat_heater_top_LED |
| 0x13 | Left_side_seat_heater_bottom_LED |
| 0x14 | Left_side_seat_heater_middle_LED |
| 0x15 | Left_side_seat_heater_top_LED |
| 0x16 | Surround_sound_LED |
| 0x17 | Surround_sound_output |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0x?? | unbekannte Fehlerart |

### IARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0x?? | unbekannte Fehlerart |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x001 | Klemme 30 nicht vorhanden |
| 0x002 | Sitzheizung links Kurzschluss oder Leitungsunterbrechung |
| 0x003 | Sitzheizung rechts Kurzschluss oder Leitungsunterbrechung |
| 0x004 | Temperatursensor Sitzheizung links Leitungsunterbrechung |
| 0x005 | Temperatursensor Sitzheizung links Kurzschluss gegen Masse |
| 0x006 | Temperatursensor Sitzheizung rechts Leitungsunterbrechung |
| 0x007 | Temperatursensor Sitzheizung rechts Kurzschluss gegen Masse |
| 0x008 | Heizflaeche Sitzheizung links Leitungsunterbrechung |
| 0x009 | Heizflaeche Sitzheizung rechts Leitungsunterbrechung |
| 0x00A | Sonnenrollo Motor, Leitungsunterbrechung |
| 0x00B | Sonnenrollo Motor, Kurzschluss |
| 0x??? | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x001 | Taster Sitzheizung links dauernd betaetigt |
| 0x002 | Taster Sitzheizung rechts dauernd betaetigt |
| 0x003 | Taster Sonnenrollo dauernd betaetigt |
| 0x004 | Taster HiFi System dauernd betaetigt |
| 0x005 | Sitzheizung Unterspannung erkannt |
| 0x006 | Sonnenrollo Unterspannung erkannt |
| 0x007 | Sitzheizung Ueberspannung erkannt |
| 0x008 | Sonnenrollo Ueberspannung erkannt |
| 0x??? | unbekannter Fehlerort |
