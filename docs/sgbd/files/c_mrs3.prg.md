# c_mrs3.prg

## General

|  |  |
| --- | --- |
| File | c_mrs3.prg |
| Type | PRG |
| Jobs | 13 |
| Tables | 2 |
| Origin | BMW TI-433 Lothar Dennert |
| Revision | 1.7 |
| Author | BMW TI-433 Mario Spoljarec, BMW TI-433 Lothar Dennert |
| ECU Comment | Verifiziert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | C-SGBD MRS3 |  |  |
| ORIGIN | string | BMW TI-433 Lothar Dennert |  |  |
| REVISION | string | 1.07 |  |  |
| AUTHOR | string | BMW TI-433 Mario Spoljarec, BMW TI-433 Lothar Dennert |  |  |
| COMMENT | string | Verifiziert |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer AIRBAG MRS 3

_No arguments._

### IDENT

Ident-Daten fuer AIRBAG MRS 3

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### C_FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### C_LOGIN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| LOGIN_CODE | binary | Login Code |

### DIAGNOSE_ENDE

Diagnose beenden

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

### C_PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### C_PRUEFSTEMPEL_SETZEN

Verriegeln des SGs

| Name | Type | Description |
| --- | --- | --- |
| PRUEFSTEMPEL | binary | Pruefstempel zum verriegeln des SG |

### VERRIEGELUNG_LESEN

Auslesen der Verriegelung (= Pruefstempel)

_No arguments._

### VERRIEGELUNG_SCHREIBEN

Verriegelungsbytes setzen

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNKTION |
| 0xB2 | ERROR_ECU_NUMBER |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

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
| 0x19 | @Elektromatik Suedafrika@ |
| 0x20 | Becker |
| 0x21 | Preh |
| 0x22 | Alps |
| 0x23 | Motorola |
| 0x24 | Temic |
| 0x25 | Webasto |
| 0x26 | MotoMeter |
| 0x27 | Delphi PHI |
| 0x28 | DODUCO |
| 0xFF | @unbekannter Hersteller@ |
