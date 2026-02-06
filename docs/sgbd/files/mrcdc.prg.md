# mrcdc.prg

## General

|  |  |
| --- | --- |
| File | mrcdc.prg |
| Type | PRG |
| Jobs | 4 |
| Tables | 2 |
| Origin | BMW TI-431 Nau |
| Revision | 1.03 |
| Author | BMW TI-431 Dennert, BMW TI-431 Nau |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Special SGBD used by coding system |  |  |
| ORIGIN | string | BMW TI-431 Nau |  |  |
| REVISION | string | 1.03 |  |  |
| AUTHOR | string | BMW TI-431 Dennert, BMW TI-431 Nau |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.24 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Default init job

_No arguments._

### INFO

Information SGBD

_No arguments._

### FA_STREAM2STRUCT

Decoding of 'Fahrzeugauftrag' Further fuctionality: extraction of files according to memory type Further results VERSION, BR and C_TYP will be created during run time Further results C_DATE, LACK and POLSTER will be created during run time Further results ZUSBAU_XXX (1 ... ZUSBAU_ANZ) will be created during run time 'ZUSBAU-Nummer' as a 4-digit string. The number of results depends on ZUSBAU_ANZ. X corresponds to the variable number. Further results E_WORT_XXX (1 ... E_WORT_ANZ) will be created during run time 'Ergaenzungswort' as a 4-digit string. The number of results depends on E_WORT_ANZ. X corresponds to the variable number. Further results SA_XXX (1 ... SA_ANZ) will be created during run time 'SA' as a 4-digit string. The number of results depends on SA_ANZ. X corresponds to the variable number. Further results HO_XXX (1 ... HO_ANZ) will be created during run time 'HO' as a 4-digit string. The number of results depends on HO_ANZ. X corresponds to the variable number. Further result COMPRESSED_STREAM will be created during run time depending on parameter 'VERSION'

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | string | Possiblilties: '1' for the total stream-block, if the total stream lenght is < 1kByte '2' for the first stream-block, if the total stream length is > 1kByte '3' for the following stream-blocks, if the total stream length is > 1kByte |
| FA_STREAM | string | 'Fahrzeugauftrag' as a data-array. Maximum array-length in total: 1 kByte Only the active constituents will be filtered out. If the array is longer than 1 kByte it will be separated from the calling application into two blocks. Particular results will be dynamicly generated during run time. |

### FA_STREAM_FOR_ECU

Conversion of 'Fahrzeugauftrag' from the application into Fahrzeugauftrag for the ECU. No identifiers will be provided by the application

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | string | Possiblilties: '1' for the total stream-block, if the total stream lenght is < 1kByte '2' for the first stream-block, if the total stream length is > 1kByte '3' for the following stream-blocks, if the total stream length is > 1kByte |
| VERSION | string | VERSION comes from application (Oberflaeche) in any case |
| FA_STREAM_OF | string | 'Fahrzeugauftrag' from application (without VERSION, and only active constituents), corresponds to Standard FA-stream This argument is always present |
| FA_STREAM_ECU | string | 'Fahrzeugauftrag' from ECU as a data array (with VERSION, active and depending on memory type, inactive constituents). Maximum array-length in total: 1kByte Only the active constituents will be filtered out. Case empty Memory: FA_STREAM_ECU = ''. If the array is longer than 1 kByte it will be separated from the calling application into two blocks. Particular results will be dynamicly generated during run time. This argument not always present |

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x0F | BMW-FAST |
| 0x0C | KWP2000 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x01 | ERROR_NO_FA |
| 0x02 | ERROR_UNKNOWN_CONSTIT |
| 0x03 | ERROR_UNKNOWN_IDENTIFIER |
| 0x04 | ERROR_STRINGLENGTH |
| 0x05 | ERROR_TOTAL_STRING_LENGTH |
| 0x06 | ERROR_POSCOUNTER |
| 0x07 | ERROR_ACTIVE_TYPSCHLUESSELANZAHL_>_1 |
| 0x08 | ERROR_ACTIVE_TYPSCHLUESSELANZAHL_!=_1 |
| 0x09 | ERROR_ACTIVE_C_DATE_NUMBER_>_1 |
| 0x0A | ERROR_ACTIVE_C_DATE_NUMBER_!=_1 |
| 0x0B | ERROR_ACTIVE_LACK_NUMBER_>_1 |
| 0x0C | ERROR_ACTIVE_LACK_NUMBER_!=_1 |
| 0x0D | ERROR_ACTIVE_POLSTER_NUMBER_>_1 |
| 0x0E | ERROR_ACTIVE_POLSTER_NUMBER_!=_1 |
| 0x0F | ERROR_ACTIVE_ZUSBAU_NUMBER_>_3 |
| 0x10 | ERROR_VERSION |
| 0x11 | ERROR_BR |
| 0x12 | ERROR_TYPSCHLUESSEL |
| 0x13 | ERROR_C_DATE |
| 0x14 | ERROR_LACK |
| 0x15 | ERROR_POLSTER |
| 0x16 | ERROR_ZUSBAUNUMMER |
| 0x17 | ERROR_SA |
| 0x18 | ERROR_E_WORT |
| 0x19 | ERROR_HO_WORT |
| 0x1A | ERROR_PAR_VERSION_NOT_PRESENT |
| 0x1B | ERROR_PAR_FA_STREAM_OF_NOT_PRESENT |
| 0x1C | ERROR_INVALID_BLOCK_0 |
| 0x1D | ERROR_BLOCK_0_NOT_PRESENT |
| 0xXY | ERROR_UNKNOWN |
