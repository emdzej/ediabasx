# EKP_DS2.prg

## General

|  |  |
| --- | --- |
| File | EKP_DS2.prg |
| Type | PRG |
| Jobs | 23 |
| Tables | 7 |
| Origin | BMW Armin Schönherr EE-23 |
| Revision | 1.00 |
| Author | HELBAKO E2 Spanner |
| ECU Comment | SGBD EKP_DS2 fuer EKP III |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EKP_DS2 |  |  |
| ORIGIN | string | BMW Armin Schönherr EE-23 |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | HELBAKO E2 Spanner |  |  |
| COMMENT | string | SGBD EKP_DS2 fuer EKP III |  |  |
| PACKAGE | string | 1.00 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### C_CI_LESEN

Codierindex lesen Standard Codierjob

_No arguments._

### C_FG_LESEN

Fahrgestellnummer lesen Standard Codierjob

_No arguments._

### C_FG_SCHREIBEN

Fahrgestellnummer schreiben Standard Codierjob

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### IDENT

Identdaten

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | 0-255 bzw. 0x00-0xFF |

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### CODIERUNG_LESEN

Lesezugriff auf die einzelnen Codierdatenbloecke Als Argument wird die Nummer des zu lesenden Codierdatenblockes uebergeben

| Name | Type | Description |
| --- | --- | --- |
| BLOCKNUMMER | int | zulaessige Blocknummern liegen i Bereich 0x0000 - 0x000B |

### FS_LOESCHEN

Default FS_LOESCHEN job

_No arguments._

### FS_ZAEHLER

Default fs_zaehler job

_No arguments._

### FS_LESEN

fs_lesen job

_No arguments._

### IS_LESEN

fs_lesen job

_No arguments._

### STATUS_MESSWERTE

es werden die Messwerte des AD-Umsetzers ausgelesen

_No arguments._

### STATUS_REGELUNGSWERTE

es werden die Regelungsdaten gelesen

_No arguments._

### STEUERN_FOERDERMENGE

_No description._

| Name | Type | Description |
| --- | --- | --- |
| SOLLFOERDERMENGE | int | Wert der vorzugebenden Soll-Foerdermenge |

### STATUS_SOLL_IST

_No description._

| Name | Type | Description |
| --- | --- | --- |
| VORGABE_SOLLFOERDERMENGE | int | Wert der vorzugebenden Soll-Foerdermenge |

### STATUS_EINREGELZEIT

die Einregelzeit wird gelesen

_No arguments._

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

### C_FG_AUFTRAG

Fahrgestellnummer schreiben und ruecklesen Standard Codierjob

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | MOTORSPANNUNG_ZU_HOCH    0x01 |
| 0x02 | MOTORSPANNUNG_ZU_NIEDRIG 0x02 |
| 0x03 | MOTORSTROM_ZU_HOCH       0x03 |
| 0x04 | MOTORSTROM_ZU_NIEDRIG    0x04 |
| 0x05 | MOTORSTROM_FEHLT         0x05 |
| 0x06 | DREHZAHL_FEHLT           0x06 |
| 0x07 | DREHZAHL_ZU_HOCH         0x07 |
| 0x08 | DREHZAHL_ZU_NIEDRIG      0x08 |
| 0x09 | UEBERTEMP_HIGH_SIDE      0x09 |
| 0x0A | UEBERTEMP_LOW_SIDE       0x0A |
| 0x0B | CAN_ANST_TIMEOUT         0x0B |
| 0x0C | EEPROM_CRC_FEHLER        0x0C |
| 0xFF | unbekannter Fehlecode |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x51 | KL15_ZU_HOCH               0x51 |
| 0x52 | KL15_FEHLT                 0x52 |
| 0x53 | KL30_FEHLT                 0x53 |
| 0x54 | KL30_ZU_HOCH               0x54 |
| 0x55 | DREHZAL_ZU_NIEDRIG_UNTERSP 0x55 |
| 0xFF | unbekannter Infocode |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH |
| --- | --- | --- |
| 0x00 | ----   | ---- |
| 0x01 | Spannung KL30 | V |
| 0x02 | Sollfoerdermenge | l/h |
| 0x03 | Kilometerstand | km |
| 0x04 | Fahrzeuggeschwindigkeit | km/h |
| 0x05 | Motordrehzahl | 1/min |
| 0x06 | Aussentemperatur | °C |
| 0x07 | EKP Motorspannung | V |
| 0x08 | EKP Motorstrom | A |
| 0x09 | EKP Motordrehzahl | 1/min |
| 0xXY | unbekannte Umweltbedingung | -- |
