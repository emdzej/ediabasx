# RLS_DS2.prg

## General

|  |  |
| --- | --- |
| File | RLS_DS2.prg |
| Type | PRG |
| Jobs | 20 |
| Tables | 4 |
| Origin | BMW TI-430 Stübinger |
| Revision | 1.04 |
| Author | KOSTAL AEK7 D.HAASE, BMW EE-201 Haas, BMW TI-431 Küssel |
| ECU Comment | Serien-Version |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Regen-/Fahrlichtsensor für DS2 |  |  |
| ORIGIN | string | BMW TI-430 Stübinger |  |  |
| REVISION | string | 1.04 |  |  |
| AUTHOR | string | KOSTAL AEK7 D.HAASE, BMW EE-201 Haas, BMW TI-431 Küssel |  |  |
| COMMENT | string | Serien-Version |  |  |
| PACKAGE | string | 1.02 |  |  |
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

### FS_LESEN

Fehlerspeicher lesen Sonder-Konzept (NICHT nach Lastenheft Codierung/Diagnose)

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden (DUMMY-Job)

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | Bereich: 0-65535 bzw. 0x0000-0xFFFF |

### SPEICHER_SCHREIBEN

Beschreiben des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | Bereich: 0-65535 bzw. 0x0000-0xFFFF |
| ZELLE | int | Bereich: 0-255 bzw. 0x00-0xFF |

### C_FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben des Pruefstempels mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_S_LESEN

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_S_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### AIC_INIT

Initialisieren des Regensensors

_No arguments._

### STATUS_LESEN

Stati des Regensensors

_No arguments._

### STATUS_LESEN_VERSTAERKUNG

Status Verstärkung des Regensensors

_No arguments._

### STATUS_LESEN_LICHT

Status Verstärkung des Regensensors

_No arguments._

### STATUS_LESEN_MESSSTRECKEN

Streckensignale

_No arguments._

### STATUS_LESEN_HEIZUNG

Signal in dig

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
| 0x72 | ASIN AWCO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
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
| 0x00 | kein Fehler |
| 0x10 | Licht Hardwarefehler |
| 0x20 | Sensor ist noch nicht codiert! |
| 0x30 | Fehler Lichtsensor |
| 0x40 | Keine optische Initialisierung möglich |
| 0x50 | Fehler optische Initialisierung und LichtHW |
| 0x60 | Fehler optische Initialisierung und nicht codiert! |
| 0x70 | Fehler optische Initialisierung und Lichtfehler |
| 0x80 | Hardwarefehler |
| 0x90 | Hardwarefehler und Lichthardwarefehler |
| 0xa0 | Hardwarefehler und nicht codiert! |
| 0xb0 | Hardwarefehler und Lichtplausibilitäts/hardwarefehler |
| 0xc0 | keine optische Init und Hardwarefehler |
| 0xd0 | Hardwarefehler Initialisierungsfehler Lichthardwarefehler |
| 0xe0 | Hardwarefehler Initialisierungsfehler Codierfehler |
| 0xf0 | Hardwarefehler Initialisierungsfehler Lichtfehler |
| 0xXY | Fehlerkombination |
