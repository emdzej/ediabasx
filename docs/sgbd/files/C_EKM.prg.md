# C_EKM.prg

## General

|  |  |
| --- | --- |
| File | C_EKM.prg |
| Type | PRG |
| Jobs | 20 |
| Tables | 1 |
| Origin | BMW TI-431 Michael Nau |
| Revision | 1.00 |
| Author | Softing AEC Daniel Frey |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C-SGBD fuer EKM E31 |  |  |
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

### C_CHECKSUM_VERIFY

Ueberpruefung der Checksumme

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_FG_AUFTRAG

letzten 7 Stellen der Fahrgestellnummer schreiben

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | 7 oder 17 Stellen angeben |

### C_FG_LESEN

letzten 7 Stellen der Fahrgestellnummer lesen

_No arguments._

### C_FG_AUFTRAG2

letzten 7 Stellen der Fahrgestellnummer schreiben

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | 7 oder 17 Stellen angeben |

### C_FG_LESEN2

letzten 7 Stellen der Fahrgestellnummer lesen

_No arguments._

### C_GEBRAUCHTBITS_LESEN

Gebrauchtbits auslesen

_No arguments._

### C_GEBRAUCHT_SETZEN

Gebrauchtbits setzen FC 11xxxxxx FF xx00xxxx

_No arguments._

### C_GEBRAUCHT_SETZEN2

Gebrauchtbits setzen FC 0xCF   FF 0xCF

_No arguments._

### C_KOMBI_GEBRAUCHTBITS_LESEN

Gebrauchtbits auslesen

_No arguments._

### C_KOMBI_UNGEBRAUCHT_SETZEN

Gebrauchtbits setzen FC xx00xxxx FF 11xxxxxx

_No arguments._

### C_KOMBI_GEBRAUCHT_SETZEN

Gebrauchtbits setzen FC xx11xxxx FF 00xxxxxx

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xFF | ERROR_ECU_NACK |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |
