# PDCE38.prg

## General

|  |  |
| --- | --- |
| File | PDCE38.prg |
| Type | PRG |
| Jobs | 12 |
| Tables | 7 |
| Origin | BMW TP-421 Spoljarec |
| Revision | 1.11 |
| Author | BMW TP-421 Spoljarec |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Parkdistanz Kontrolle E34 E36 E38 E39 |  |  |
| ORIGIN | string | BMW TP-421 Spoljarec |  |  |
| REVISION | string | 1.11 |  |  |
| AUTHOR | string | BMW TP-421 Spoljarec |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer PDC

_No arguments._

### IDENT

Ident-Daten fuer PDC

_No arguments._

### FS_LESEN

Fehlerspeicher lesen High-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### STATUS_IO_LESEN

Status der I/O Ports lesen

_No arguments._

### STEUERN_IO_STATUS

Ansteuern von den I/O Stati

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | Diagnosemode, Tongeber, Kontrollsignal, System steuern siehe table IO_STATUS |

### STATUS_WEG_V_MODE_LESEN

Status des Steuergeraets lesen

_No arguments._

### STATUS_AUSSCHWINGZEIT_LESEN

AUSSCHWINGZEIT lesen

_No arguments._

### STEUERN_WEG_V

Ansteuern der Abstaende und der Geschwindigkeit

| Name | Type | Description |
| --- | --- | --- |
| V_WERT | int | Geschwindigkeit des Fahrzeugs |
| HL_WERT | int | Abstand hinten links |
| HR_WERT | int | Abstand hinten rechts |
| HML_WERT | int | Abstand hinten in der Mitte links |
| HMR_WERT | int | Abstand hinten in der Mitte rechts |
| VL_WERT | int | Abstand vorne links |
| VR_WERT | int | Abstand vorne rechts |
| VML_WERT | int | Abstand vorne in der Mitte links |
| VMR_WERT | int | Abstand vorne in der Mitte rechts |

### DIAGNOSE_WEITER

Diagnose aufrechterhalten

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
| 0xFF | ERROR_ECU_NACK |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |

### SG_STATUS

| SG_ORT | SG_TEXTE |
| --- | --- |
| 0x01 | Rueckwaertsgang eingelegt |
| 0x02 | BC-Gong hinten statt Lautsprecher |
| 0x04 | BC-Gong vorne statt Lautsprecher |
| 0x08 | Nur 4 Wandler hinten |
| 0x10 | Taster Parkhilfe vorhanden |
| 0x20 | Anhaengerbetrieb |
| 0x40 | I-Bus |
| 0x80 | Parkhilfe aktiv |
| 0x00 | unbekannter Status |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Wandler vorne Mitte rechts |
| 0x02 | Wandler vorne Mitte links |
| 0x04 | Wandler vorne rechts |
| 0x05 | Weggeber |
| 0x06 | Wandler vorne links |
| 0x08 | Wandler hinten Mitte rechts |
| 0x09 | Tongeber vorne |
| 0x0A | Wandler hinten Mitte links |
| 0x0C | Wandler hinten rechts |
| 0x0D | Wandler hinten links |
| 0x13 | Taste |
| 0x15 | Tongeber hinten |
| 0x16 | Kontrollsignal |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x02 | Wandlerleitung: Kurzschluss gegen Masse |
| 0x03 | Leitungsunterbrechung |
| 0x04 | Ausschwingfehler (Wandler schwingt zu lange nach) |
| 0x05 | Schirm: Kurzschluss gegen Masse |
| 0x06 | Kurzschluss Schirm Wandlerleitung |
| 0x07 | Fehler momentan vorhanden |
| 0x08 | sporadischer Fehler |
| 0x10 | Kurzschluss gegen U-Batt |
| 0x20 | Kurzschluss gegen Masse |
| 0x30 | Leitungsunterbrechung |
| 0x70 | Fehler momentan vorhanden |
| 0x80 | sporadischer Fehler |
| 0xFF | -- |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 | A7_0 | A7_1 | A8_0 | A8_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0D | 0xFF | 0xFF | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 |
| 0x0C | 0xFF | 0xFF | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 |
| 0x0A | 0xFF | 0xFF | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 |
| 0x08 | 0xFF | 0xFF | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 |
| 0x06 | 0xFF | 0xFF | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 |
| 0x04 | 0xFF | 0xFF | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 |
| 0x02 | 0xFF | 0xFF | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 |
| 0x01 | 0xFF | 0xFF | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 |
| 0x15 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x30 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x00 | 0x70 | 0x00 | 0x80 |
| 0x09 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x30 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x00 | 0x70 | 0x00 | 0x80 |
| 0x16 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x30 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x00 | 0x70 | 0x00 | 0x80 |
| 0x05 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x30 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x00 | 0x70 | 0x00 | 0x80 |
| 0x13 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x30 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x00 | 0x70 | 0x00 | 0x80 |

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
