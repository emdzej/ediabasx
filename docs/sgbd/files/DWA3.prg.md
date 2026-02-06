# DWA3.prg

## General

|  |  |
| --- | --- |
| File | DWA3.prg |
| Type | PRG |
| Jobs | 3 |
| Tables | 1 |
| Origin | BMW TP-422 Teepe |
| Revision | 0.01 |
| Author | BMW TP-422 Teepe, BMW TP-421 Drexel |
| ECU Comment | Reduzierte SGBD für CIP AI nur IDENT |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Diebstahlwarnanlage DWA3 |  |  |
| ORIGIN | string | BMW TP-422 Teepe |  |  |
| REVISION | string | 1.09 |  |  |
| AUTHOR | string | BMW TP-422 Teepe, BMW TP-421 Drexel |  |  |
| COMMENT | string | diese Version ist erforderlich fuer EDIABAS 4.0 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Default init job

_No arguments._

### IDENT

Default ident job

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | OKAY |
| 0x02 | OKAY |
| 0x05 | OKAY |
| 0x07 | OKAY |
| 0x0C | OKAY |
| 0x0D | OKAY |
| 0x0C | ERROR_ECU_FUNCTION |
| 0xAA | ERROR_ECU_REJECTED |
| 0x0A | ERROR_ECU_NACK |
| xxxx | OKAY |
| 0xFF | ERROR_ECU_UNKNOWN_STATUSBYTE |
