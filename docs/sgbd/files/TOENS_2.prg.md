# TOENS_2.prg

## General

|  |  |
| --- | --- |
| File | TOENS_2.prg |
| Type | PRG |
| Jobs | 18 |
| Tables | 5 |
| Origin | BMW TP-423 Drexel |
| Revision | 1.0 |
| Author | BMW TP-423 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Thermischer Oelniveau Sensor |  |  |
| ORIGIN | string | BMW TP-423 Drexel |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW TP-423 Drexel |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### IDENT

Identdaten fuer TOENS

_No arguments._

### IDENT_SCHREIBEN

Identdaten schreiben fuer TOENS

| Name | Type | Description |
| --- | --- | --- |
| DATEN | binary | Identdaten |

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### IS_LESEN

Infospeicher lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int |  |
| ANZAHL | int |  |

### SPEICHER_SCHREIBEN

Beschreiben des Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int |  |
| ANZAHL | int |  |
| DATEN | string |  |

### CODIERUNG_LESEN

Auslesen der Codierdaten

_No arguments._

### CODIERUNG_SCHREIBEN

Schreiben der Codierdaten

| Name | Type | Description |
| --- | --- | --- |
| CODEBLOCK | binary | 1.Byte Blocknummer (0,1,2) danach Daten |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden 0x00-0xFF |
| BYTE2 | int | kann beliebig verwendet werden 0x00-0xFF |
| BYTE3 | int | kann beliebig verwendet werden 0x00-0xFF |

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### STATUS_IO

Status lesen

_No arguments._

### STATUS_SG

SG-Status lesen

_No arguments._

### STEUERN_WARNLAMPE

Ansteuern der Warnlampe

| Name | Type | Description |
| --- | --- | --- |
| WARNLAMPE | string | 'EIN','AUS','1','0' |

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
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_NAME |
| --- | --- |
| 0x01 | Reinshagen / Delphi |
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
| 0x27 | Delphi PHI |
| 0x28 | DODUCO |
| 0x29 | DENSO |
| 0x30 | NEC |
| 0x31 | DASA |
| 0x32 | Pioneer |
| 0x33 | Jatco |
| 0x34 | Fuba |
| 0x35 | UK-NSI |
| 0x36 | AABG |
| 0x37 | Dunlop |
| 0xFF | unbekannter Hersteller |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | TOENS-Signal |
| 0x02 | Drehzahlsignal |
| 0x03 | Warnlampe |
| 0x04 | Klemme 30 |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x01 | Fehler momentan vorhanden |
| 0x10 | Kurzschluss gegen U-Batt |
| 0x11 | Kurzschluss gegen Masse |
| 0x12 | Leitungsunterbrechung |
| 0x13 | unplausibler Wert |
| 0xFF | unbekannte Fehlerart |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Warnung: Oelverlust |
| 0x02 | Warnung: Oelverbrauch |
| 0xFF | unbekannter Fehlerort |
