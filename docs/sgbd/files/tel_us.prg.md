# tel_us.prg

## General

|  |  |
| --- | --- |
| File | tel_us.prg |
| Type | PRG |
| Jobs | 10 |
| Tables | 3 |
| Origin | BMW EE-430 Siegl |
| Revision | 0.1 |
| Author | BMW EE-430 Siegl |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | TELUS_IBUS |  |  |
| ORIGIN | string | BMW EE-430 Siegl |  |  |
| REVISION | string | 0.1 |  |  |
| AUTHOR | string | BMW EE-430 Siegl |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer TELUS_IBUS

_No arguments._

### IDENT

Ident-Daten fuer das MAYDAY-TELEFON

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### STATUS_IO_LESEN

verschiedenen Status IO-Ports

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

### DIAGNOSE_WEITER

Diagnose aufrecht erhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnosemode beenden

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
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | GPS hardware failure |
| 0x02 | ROM checksum failure |
| 0x03 | NVM device failure |
| 0x04 | GPS antenna short |
| 0x05 | GPS antenna open |
| 0x06 | Emergency switch stuck |
| 0x07 | Roadside assistance switch stuck |
| 0x08 | Emergency switch short |
| 0x09 | Roadside assistance switch short |
| 0x0A | Hardware failure |
| 0x0B | MOD config failure |
| 0x0C | NVM config failure |
| 0xXY | unknown error |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | failure currently not present |
| 0x20 | failure currently present |
| 0xXY | unknown failure |
