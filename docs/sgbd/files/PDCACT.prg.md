# PDCACT.prg

## General

|  |  |
| --- | --- |
| File | PDCACT.prg |
| Type | PRG |
| Jobs | 22 |
| Tables | 7 |
| Origin | BMW TI-430 Mueller |
| Revision | 1.09 |
| Author | BMW TI-433 Spoljarec, BMW TI-431 Robert Kuessel, BMW TI-430 Marcus Mueller, BMW TI-431 Lothar Dennert |
| ECU Comment | Park Distance Control E38 E39 E46 E53 R50 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | PDCACT |  |  |
| ORIGIN | string | BMW TI-430 Mueller |  |  |
| REVISION | string | 1.09 |  |  |
| AUTHOR | string | BMW TI-433 Spoljarec, BMW TI-431 Robert Kuessel, BMW TI-430 Marcus Mueller, BMW TI-431 Lothar Dennert |  |  |
| COMMENT | string | Park Distance Control E38 E39 E46 E53 R50 |  |  |
| PACKAGE | string | 1.02 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### IDENT

Identdaten

_No arguments._

### INITIALISIERUNG

Init-Job fuer PDC

_No arguments._

### FS_LESEN

Fehlerspeicher lesen bedingtes High-Konzept nach Lastenheft Codierung/Diagnose Die Fehlerspeichercodes sind willkuerlich vergeben Fehler stehen immer an der gleichen Stelle

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long |  |
| SEGMENT | int |  |

### COD_LESEN_VARIANTE

Auslesen der Codiervariante der PDC aktiv

_No arguments._

### COD_LESEN_SCHWELLE

Auslesen der codierten Schwellwerte der PDC aktiv

| Name | Type | Description |
| --- | --- | --- |
| CODIERBLOCK | int |  |

### COD_LESEN_CHECKSUM

Auslesen der Codierchecksummen

_No arguments._

### STATUS_IO_LESEN

Status der I/O Ports lesen

_No arguments._

### STEUERN_IO_STATUS

Ansteuern von den I/O Stati

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | Diagnosemode, Tongeber, Kontrollsignal, System steuern siehe table IO_STATUS |

### STATUS_AUSSCHWINGZEIT_LESEN

AUSSCHWINGZEIT lesen

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

### STATUS_WEG_V_MODE_LESEN

Status des Steuergeraets lesen

_No arguments._

### STATUS_MESSWERTE_LESEN

Messwerte direkt und indirekt lesen

_No arguments._

### DIAGNOSE_WEITER

Diagnose aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### C_FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben des Pruefstempels mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

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
| 0x10 | Wandler hinten links |
| 0x11 | Wandler hinten rechts |
| 0x12 | Wandler hinten Mitte links |
| 0x13 | Wandler hinten Mitte rechts |
| 0x14 | Wandler vorne links |
| 0x15 | Wandler vorne rechts |
| 0x16 | Wandler vorne Mitte links |
| 0x17 | Wandler vorne Mitte rechts |
| 0x18 | Spannung Wandler allgemein |
| 0x20 | Tongeber hinten aus |
| 0x21 | Tongeber hinten ein |
| 0x22 | Tongeber vorne aus |
| 0x23 | Tongeber vorne ein |
| 0x24 | Funktionsanzeige aus |
| 0x25 | Funktionsanzeige ein |
| 0x26 | Weggeber |
| 0x27 | Taste |
| 0x28 | Mikrocomputer |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Kurzschluss Datenleitung gegen U-Batt |
| 0x02 | Kurzschluss Versorgungs-/Datenleitung gegen Masse |
| 0x03 | Leitungsunterbrechung |
| 0x04 | Ausschwingfehler |
| 0x05 | Fehler momentan vorhanden |
| 0x06 | sporadischer Fehler |
| 0x07 | Kurzschluss gegen U-Batt |
| 0x08 | Kurzschluss gegen Masse |
| 0x09 | Leitungsunterbrechung |
| 0x0A | Fehler momentan vorhanden |
| 0x0B | sporadischer Fehler |
| 0x0C | Fehler im RAM |
| 0x0D | Fehler Checksumme ROM |
| 0x0E | Fehler Checksumme EEPROM |
| 0x0F | Fehler momentan vorhanden |
| 0x10 | sporadischer Fehler |
| 0xFF | -- |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x10 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 |
| 0x11 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 |
| 0x12 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 |
| 0x13 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 |
| 0x14 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 |
| 0x15 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 |
| 0x16 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 |
| 0x17 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 |
| 0x18 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0xFF | 0xFF | 0x00 | 0x0A | 0x00 | 0x0B |
| 0x20 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0xFF | 0xFF | 0x00 | 0x0A | 0x00 | 0x0B |
| 0x21 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0xFF | 0xFF | 0x00 | 0x0A | 0x00 | 0x0B |
| 0x22 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0xFF | 0xFF | 0x00 | 0x0A | 0x00 | 0x0B |
| 0x23 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0xFF | 0xFF | 0x00 | 0x0A | 0x00 | 0x0B |
| 0x24 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0xFF | 0xFF | 0x00 | 0x0A | 0x00 | 0x0B |
| 0x25 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0xFF | 0xFF | 0x00 | 0x0A | 0x00 | 0x0B |
| 0x26 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0xFF | 0xFF | 0x00 | 0x0A | 0x00 | 0x0B |
| 0x27 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0xFF | 0xFF | 0x00 | 0x0A | 0x00 | 0x0B |
| 0x28 | 0x00 | 0x0C | 0x00 | 0x0D | 0x00 | 0x0E | 0xFF | 0xFF | 0x00 | 0x0F | 0x00 | 0x10 |

### IO_STATUS

| SIGNAL | BYTE |
| --- | --- |
| DTAUS | 0x01 |
| DTVEIN | 0x02 |
| DTHEIN | 0x04 |
| DKSAUS | 0x08 |
| DKSEIN | 0x10 |
| DEIN | 0x20 |
| SAUS | 0x40 |
| SEIN | 0x80 |
