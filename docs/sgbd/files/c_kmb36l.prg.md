# c_kmb36l.prg

## General

|  |  |
| --- | --- |
| File | c_kmb36l.prg |
| Type | PRG |
| Jobs | 9 |
| Tables | 1 |
| Origin | BMW TI-431 Michael Nau |
| Revision | 1.00 |
| Author | Softing AEC Daniel Frey |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C-SGBD fuer Kombi Low E36 |  |  |
| ORIGIN | string | BMW TI-431 Michael Nau |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | Softing AEC Daniel Frey |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung

_No arguments._

### IDENT

Identifikation

_No arguments._

### DIAGNOSE_ENDE

Beenden der Diagnose

_No arguments._

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_LESEN

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_ZCS_AUFTRAG

Write and verify the Central code

| Name | Type | Description |
| --- | --- | --- |
| GM | string | Zentralcode C1 - Grundmerkmal (8 ASCII nos + 1 ASCII c/sum) Basic features |
| SA | string | Zentralcode C2 - Sonderausstattung (16 ASCII nos + 1 ASCII c/sum) Particular equipment |
| VN | string | Zentralcode C3 - Versionsmerkmal (10 ASCII nos + 1 ASCII c/sum) Version information |

### C_ZCS_LESEN

Read the ZCS record

_No arguments._

### C_CHECKSUM

Berechnung und Speicherung der Checksumme

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xB2 | ERROR_ECU_NUMBER |
| 0xFF | ERROR_ECU_NACK |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |
