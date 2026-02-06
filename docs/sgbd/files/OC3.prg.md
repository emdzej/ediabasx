# OC3.prg

## General

|  |  |
| --- | --- |
| File | OC3.prg |
| Type | PRG |
| Jobs | 18 |
| Tables | 10 |
| Origin | BMW EI-62 K.Henze |
| Revision | 1.05 |
| Author | BERATA O.Schieferstein, BERATA M.Chafigoulline |
| ECU Comment | SGBD fuer Occupation Classification -3 System |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | OC3 Occupation Classification -3 fuer Baureihe E53/83/85 R50/52/53 |  |  |
| ORIGIN | string | BMW EI-62 K.Henze |  |  |
| REVISION | string | 1.05 |  |  |
| AUTHOR | string | BERATA O.Schieferstein, BERATA M.Chafigoulline |  |  |
| COMMENT | string | SGBD fuer Occupation Classification -3 System |  |  |
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

### C_CI_LESEN

Codierindex lesen Standard Codierjob

_No arguments._

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### SERIENNUMMER_LESEN

Hersteller Seriennummer lesen

_No arguments._

### FS_QUICK_LESEN

Error memory quicktest High-Konzept nach Lastenheft

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Read error memory

_No arguments._

### SPEICHER_LESEN

Speicher lesen Read memory

| Name | Type | Description |
| --- | --- | --- |
| H_ADR | string | Startadresse High-Byte |
| M_ADR | string | Startadresse Mitte-Byte |
| L_ADR | string | Startadresse Low-Byte |
| ANZ_BYTE | string | Anzahl der zu lesenden Bytes (1 - 32) Number of bytes to read (1 - 32) |

### CODE_LESEN

16 Byte aus Parametersatz BLOCKNR lesen Read 16 bytes from block BLOCKNR stated

| Name | Type | Description |
| --- | --- | --- |
| BLOCKNR | string | (1 <= BLOCKNR <= 25) --> 16 Parameterbytes ab Byte (16*BLOCKNR) werden angefordert Between 1 and 25, byte 16*BLOCKNR returned |

### SG_LOGIN

Berechtigung fuer EEPROM-Zugriffe Login to ECU

_No arguments._

### C_C_LESEN

Codierdaten lesen Read codingdata

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten Codingdata |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren Write and check codingdata

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten Codingdata |

### C_C_SCHREIBEN

Codierdaten schreiben Write codingdata

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten Codingdata |

### STATUS_LESEN

Status des OC-3 lesen Read status of OC-3

_No arguments._

### OC3_DATEN_SCHREIBEN

Codierung der Haenddlernummer und Freigabe des OC-3 Systems 

| Name | Type | Description |
| --- | --- | --- |
| HAENDLERNUMMER | string | Haenddlernummer BCD-String |
| PRUEFDATUM | string | Freigabe BCD-String |

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | A/D-Wandler Fehler |
| 0x01 | HW EEPROM Pruefsummenfehler |
| 0x02 | Algo EEPROM Parameterfehler oder Pruefsummenfehler |
| 0x03 | Batteriespannung zu niedrig |
| 0x04 | ADC Spannungsteiler Ubat nicht ok |
| 0x05 | ADC Spannungsteiler Umref nicht ok |
| 0x06 | Reihen-Abschlusswiderstand defekt (dynamische Messung) |
| 0x07 | Spalten-Abschlusswiderstand defekt (dynamische Messung) |
| 0x08 | SPI Ueberlauf (Kommunikation ASIC / FRAM) |
| 0x09 | SPI Paritaetsfehler (Kommunikation ASIC / FRAM) |
| 0x0A | Falsche Register-Page (ASIC-Fehler) |
| 0x0B | FSR Mattenueberlastung |
| 0x0D | FSR Fehlerstrom auf unbenutzten Reihen/Spalten |
| 0x0E | FSR Kurzschluss zwischen Spalten |
| 0x0F | FSR Kurzschluss zwischen Reihen |
| 0x10 | FSR Fehlerstrom nach Masse |
| 0x11 | FSR Fehlerstrom nach Ubat |
| 0x14 | FSR Kalibrationswiderstand K14/R4 ausserhalb Toleranz |
| 0x15 | FSR Kalibrationswiderstand K14/R5 ausserhalb Toleranz |
| 0x16 | FSR Kalibrationswiderstand K14/R8 ausserhalb Toleranz |
| 0x17 | FSR Kalibrationswiderstand K14/R9 ausserhalb Toleranz |
| 0x18 | FSR Kalibrationswiderstand K14/R10 ausserhalb Toleranz |
| 0x19 | FSR Referenzwiderstand K14/R2 ausserhalb Toleranz |
| 0x1A | FSR Referenzwiderstand K14/R3 ausserhalb Toleranz |
| 0x1B | FSR Referenzwiderstand K14/R6 ausserhalb Toleranz |
| 0x1C | FSR Referenzwiderstand K14/R7 ausserhalb Toleranz |
| 0x1D | FSR Widerstand K14/R1 oder K1/R9 ausserhalb Toleranz |
| 0x1E | FSR Umref zu niedrig |
| 0x1F | FSR /Max-Delta - Min-Delta/ oder Referenzwiderstaende ausserhalb der Grenzen |
| 0x21 | FSR Thermistor 1 ausserhalb der Grenzen |
| 0x22 | FSR Thermistor 2 ausserhalb der Grenzen |
| 0x23 | FSR Delta Thermistor /Thermistor 1 - Thermistor 2/ ausserhalb der Grenzen |
| 0x24 | Crash-Daten-Speicher voll |
| 0x27 | FRAM Fehler |
| 0xFF | Unbekannter Fehler |

### FARTMATRIX

| ORT | A2_0 | A2_1 | A1_0 | A1_1 |
| --- | --- | --- | --- | --- |
| 0xFF | 0x01 | 0x02 | 0x08 | 0x09 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x01 | Fehler nicht vorhanden |
| 0x02 | Fehler aktuell vorhanden |
| 0x08 | Fehler nicht sporadisch |
| 0x09 | Fehler sporadisch |
| 0xFF | -- |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW_SATZ | UW1_NR | UW2_NR |
| --- | --- | --- | --- | --- |
| default | 0x02 | 0x01 | 0x01 | 0x02 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Fehlerbeginn_std | Std. | -- | long | -- | -- | -- | -- |
| 0x02 | Fehlerbeginn_min | Min. | -- | long | -- | -- | -- | -- |

### DIGITALARGUMENT

| TEXT | WERT |
| --- | --- |
| ein | 1 |
| aus | 0 |
| ja | 1 |
| nein | 0 |
| auf | 1 |
| ab | 0 |
| an | 1 |
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
