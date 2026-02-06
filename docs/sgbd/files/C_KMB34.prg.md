# C_KMB34.prg

## General

|  |  |
| --- | --- |
| File | C_KMB34.prg |
| Type | PRG |
| Jobs | 11 |
| Tables | 1 |
| Origin | BMW TI-431 Michael Nau |
| Revision | 1.00 |
| Author | Softing AEC Daniel Frey |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C-SGBD fuer KMBL E34 |  |  |
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

### C_CHECKSUM1

Berechnung und Speicherung der Checksumme fuer Codierindex 25

_No arguments._

### C_CHECKSUM2

Berechnung und Speicherung der Checksumme fuer Codierindex 27

_No arguments._

### C_FG_AUFTRAG

letzten 7 Stellen der Fahrgestellnummer schreiben

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | 7 oder 17 Stellen angeben |

### C_FG_LESEN

letzten 7 Stellen der Fahrgestellnummer lesen

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xFF | ERROR_ECU_NACK |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |
