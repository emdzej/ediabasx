# C_BIT.prg

## General

|  |  |
| --- | --- |
| File | C_BIT.prg |
| Type | PRG |
| Jobs | 10 |
| Tables | 1 |
| Origin | BMW TI-433 Spoljarec |
| Revision | 1.0 |
| Author | BMW TI-433 Spoljarec |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C_BIT |  |  |
| ORIGIN | string | BMW TI-433 Spoljarec |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW TI-433 Spoljarec |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer BMW-TELEFON

_No arguments._

### IDENT

Ident-Daten fuer das BIT

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

### RESET

Durchfuehrung eines resets ca. 2 Sek. nach senden von ACK erfolgt der Reset

_No arguments._

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
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |
