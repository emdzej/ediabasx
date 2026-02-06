# EKP2DS2.prg

## General

|  |  |
| --- | --- |
| File | EKP2DS2.prg |
| Type | PRG |
| Jobs | 25 |
| Tables | 12 |
| Origin | BMW EF61 Schönherr |
| Revision | 1.000 |
| Author | Helbako GmbH ES Gerd Meyering |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EKPM2 |  |  |
| ORIGIN | string | BMW EF61 Schönherr |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | Helbako GmbH ES Gerd Meyering |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.03 |  |  |
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

### FS_LOESCHEN

Fehlerspeicher loeschen

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

### STEUERGERAETE_RESET

Steuergeraete Reset ausloesen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

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

### STEUERN_PWM_VORGEBEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| SOLL_PWM | int | Wert der vorzugebenden Soll-PWM 0%...100% |

### STATUS_SOLL_IST

_No description._

| Name | Type | Description |
| --- | --- | --- |
| VORGABE_SOLLFOERDERMENGE | int | Wert der vorzugebenden Soll-Foerdermenge |

### STATUS_EINREGELZEIT

die Einregelzeit wird gelesen

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

### CODIERUNG_LESEN

Lesezugriff auf die einzelnen Codierdatenbloecke Als Argument wird die Nummer des zu lesenden Codierdatenblockes uebergeben

| Name | Type | Description |
| --- | --- | --- |
| BLOCKNUMMER | int | zulaessige Blocknummern liegen i Bereich 0x0000 - 0x000B |

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

### SET_NULL_CODIERUNG

Codierung in den Auslieferungszustand (ID=0)

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
| 0x18 | Continental Teves |
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
| 0x69 | Magna-Donelly |
| 0x70 | Koyo Steering Europe |
| 0x71 | NSI B.V |
| 0x72 | AISIN AW CO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
| 0x76 | CEL |
| 0x77 | Audio Mobil |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia Automotive GmbH |
| 0x81 | Tyco Electronics |
| 0x82 | Paragon AG |
| 0x83 | IEE S.A |
| 0x84 | TEMIC AUTOMOTIVE of NA |
| 0x85 | AKsys GmbH |
| 0x86 | META System |
| 0x87 | Hülsbeck & Fürst GmbH & Co KG |
| 0x88 | Mann & Hummel Automotive GmbH |
| 0x89 | Brose Fahrzeugteile GmbH & Co |
| 0x90 | Keihin |
| 0x91 | Vimercati S.p.A. |
| 0x92 | CRH |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x91 | EKP-Motor: Spannung zu hoch |
| 0x92 | EKP-Motor: Spannung zu niedrig |
| 0x93 | EKP-Motor: Strom zu hoch |
| 0x94 | EKP-Motor: Strom zu niedrig |
| 0x95 | EKP-Motor: Strom fehlt |
| 0x96 | EKP-Motor: Drehzahl fehlt |
| 0x97 | EKP-Motor: Drehzahl zu hoch |
| 0x98 | EKP-Motor: Drehzahl zu niedrig |
| 0x99 | Endstufe (high-side): Übertemperatur Stufe 2 |
| 0x9A | Endstufe (high-side): Übertemperatur Stufe 1 |
| 0x9B | Kodierdaten: Notlauf-Datensatz |
| 0x9C | EEPROM: CRC-Fehler |
| 0x9D | Kodierdaten: Nicht kodiert |
| 0x9E | Externer Fehler: CRASH/+Batterie-Abschaltung |
| 0x9F | ASIC: Abschaltung |
| 0xD4 | Externer Fehler: CAN-ID 0xAA (TORQUE_3) fehlt(e) |
| 0xC7 | Externer Fehler: CAN-Bus-Off |
| 0xFF | unbekannter Fehlecode |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xA1 | KL_WakeUp: Spannung zu hoch |
| 0xA2 | KL_WakeUp: Fehlt |
| 0xA3 | KL30: Fehlt |
| 0xA4 | KL30: Spannung zu hoch |
| 0xA5 | EKP-Motor: Drehz. zu niedrig wg. KL30-Unterspann. |
| 0xA6 | Ext. Fehler: FLASHEN abgelehnt (Geschw./Motordrehz. nicht 0) |
| 0xA7 | ASIC: Warnung |
| 0xFF | unbekannter Infocode |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH |
| --- | --- | --- |
| 0x00 | --- | --- |
| 0x01 | Spannung KL30 | V |
| 0x02 | Sollfoerdermenge | l/h |
| 0x03 | Kilometerstand | km |
| 0x04 | Fahrzeuggeschwindigkeit | km/h |
| 0x05 | Motordrehzahl | 1/min |
| 0x06 | Aussentemperatur | °C |
| 0x07 | EKP Motorspannung | V |
| 0x08 | EKP Motorstrom | A |
| 0x09 | EKP Motordrehzahl | 1/min |
| 0xXY | unbekannte Umweltbedingung | --- |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |
