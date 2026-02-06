# NO_DME.PRG

## General

|  |  |
| --- | --- |
| File | NO_DME.PRG |
| Type | PRG |
| Jobs | 7 |
| Tables | 1 |
| Origin | BMW TP-421 Weber |
| Revision | 1.15 |
| Author | BMW TP-421 Weber, BMW TP-421 Huber, BMW TP-421 Spoljarec |
| ECU Comment | NO_DME fuer EWS Dummycodierung |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | NO_DME fuer EWS Dummycodierung |  |  |
| ORIGIN | string | BMW TP-421 Weber |  |  |
| REVISION | string | 1.15 |  |  |
| AUTHOR | string | BMW TP-421 Weber, BMW TP-421 Huber, BMW TP-421 Spoljarec |  |  |
| COMMENT | string | NO_DME fuer EWS Dummycodierung |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Einstellen der Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Ident-Daten fuer DME

_No arguments._

### ISN_LESEN

_No description._

_No arguments._

### DIAGNOSE_ENDE

_No description._

_No arguments._

### STEUERN_SYNC_MODE

_No description._

| Name | Type | Description |
| --- | --- | --- |
| MODE | int |  |

### STATUS_SYNC_MODE

_No description._

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
