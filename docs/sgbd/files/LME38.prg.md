# LME38.prg

## General

|  |  |
| --- | --- |
| File | LME38.prg |
| Type | PRG |
| Jobs | 20 |
| Tables | 4 |
| Origin | BMW, TP-422, Teepe |
| Revision | 1.99 |
| Author | BMW, TP-422, Teepe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Lichtmodul E38 |  |  |
| ORIGIN | string | BMW, TP-422, Teepe |  |  |
| REVISION | string | 1.99 |  |  |
| AUTHOR | string | BMW, TP-422, Teepe |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Default init job

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Default ident job

_No arguments._

### FG_NR_LESEN

Default FG_NR_LESEN job

_No arguments._

### KALTABFRAGE_SCHREIBEN

Default KALTABFRAGE_SCHREIBEN job

| Name | Type | Description |
| --- | --- | --- |
| KALTABFRAGE_BYTE | int | gewuenschter Wert der Kaltabfrage (0 bis 255) |

### SIA_LESEN

Default SIA_LESEN job

_No arguments._

### FS_ZAEHLER

Default fs_zaehler job

_No arguments._

### FS_LESEN

fs_lesen job

_No arguments._

### FS_LOESCHEN

Default FS_LOESCHEN job

_No arguments._

### CODIERUNG_LESEN

Default CODIERUNG_LESEN job

_No arguments._

### CODIERUNG_LESEN_ALLES

Default CODIERUNG_LESEN_ALLES job

| Name | Type | Description |
| --- | --- | --- |
| BLOCKNUMMER | int | angeforderter Datenblock |

### STATUS_LESEN

STATUS_LESEN job

_No arguments._

### HERSTELLER_LESEN

Default ident job

_No arguments._

### STEUERN_DIGITAL

Ansteuern eines digitalen Ein- oder Ausgangs

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente |

### STEUERN_MEHRERE

Ansteuern mehrerer (maximal 15) digitalen Ein- Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| ZAHL | int | gewuenschte Anzahl Komponenten (maximal 15) |
| ORT1 | string | gewuenschte Komponente 1 |
| ORT2 | string | gewuenschte Komponente 2 |
| ORT3 | string | gewuenschte Komponente 3 |
| ORT4 | string | gewuenschte Komponente 4 |
| ORT5 | string | gewuenschte Komponente 5 |
| ORT6 | string | gewuenschte Komponente 6 |
| ORT7 | string | gewuenschte Komponente 7 |
| ORT8 | string | gewuenschte Komponente 8 |
| ORT9 | string | gewuenschte Komponente 9 |
| ORT10 | string | gewuenschte Komponente 10 |
| ORT11 | string | gewuenschte Komponente 11 |
| ORT12 | string | gewuenschte Komponente 12 |
| ORT13 | string | gewuenschte Komponente 13 |
| ORT14 | string | gewuenschte Komponente 14 |
| ORT15 | string | gewuenschte Komponente 15 |

### STEUERN_DIMMER

STEUERN_DIMMER job

| Name | Type | Description |
| --- | --- | --- |
| DIMMWERT | int | gewuenschter Wert der Helligkeit [%] |

### SPEICHER_LESEN

Auslesen des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| HIGH | int | gewuenschte Startadresse high als Hexwert! |
| LOW | int | gewuenschte Startadresse low als Hexwert! |

### SPEICHER_SCHREIBEN

Schreiben des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE_HIGH | int | gewuenschte Adresse high als Hexwert! |
| ADRESSE_LOW | int | gewuenschte Adresse low als Hexwert! |
| WERT | int | gewuenschter Wert als Hexwert! |

### DIAGNOSE_WEITER

DIAGNOSE_WEITER job

_No arguments._

### DIAGNOSE_ENDE

DIAGNOSE_ENDE job

_No arguments._

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Bremslichtschalter defekt |
| 0x01 | Leitung Dimmerpoti, Unterbrechung |
| 0x02 | Klemme 15 |
| 0x03 | Klemme 30, A oder B fehlt |
| 0x04 | Kommunikation Anhaengermodul unterbrochen |
| 0x05 | LM-interner Datenbus defekt |
| 0x06 | LM-interne Schalterabfrageschaltung defekt |
| 0x07 | LM-interne Versorgungsspannung fehlerhaft |
| 0xFF | unbekannte Fehlerart |

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
| 0x19 | Elektromatik Suedafrika |
| 0x20 | Becker |
| 0x21 | Preh |
| 0x22 | Alps |
| 0x23 | Motorola |
| 0x24 | Temic |
| 0x25 | Webasto |
| 0x26 | MotoMeter |
| 0xFF | unbekannter Hersteller |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| S_BLK_L | 0 | 0x01 |
| S_BLK_R | 0 | 0x02 |
| S_AL | 0 | 0x04 |
| S_SL | 0 | 0x08 |
| S_RES_M1 | 0 | 0x10 |
| S_WBL | 0 | 0x20 |
| S_FL | 0 | 0x40 |
| S_LH | 0 | 0x80 |
| S_BL | 1 | 0x01 |
| S_NSW | 1 | 0x02 |
| S_NSL | 1 | 0x04 |
| S_RES_M2 | 1 | 0x08 |
| KLEMME15 | 1 | 0x10 |
| KLEMME30B | 1 | 0x20 |
| KLEMME30A | 1 | 0x40 |
| S_RES_P3 | 1 | 0x80 |
| AL_L | 2 | 0x01 |
| SL_L_V | 2 | 0x02 |
| SL_R_H | 2 | 0x04 |
| SL_I_L | 2 | 0x08 |
| KZL | 2 | 0x10 |
| BLK_R_V | 2 | 0x20 |
| BLK_L_H | 2 | 0x40 |
| BL_L | 2 | 0x80 |
| BL_R | 3 | 0x01 |
| BLK_L_V | 3 | 0x02 |
| BLK_R_H | 3 | 0x04 |
| LWR | 3 | 0x08 |
| SL_I_R | 3 | 0x10 |
| SL_L_H | 3 | 0x20 |
| SL_R_V | 3 | 0x40 |
| AL_R | 3 | 0x80 |
| FL_L | 4 | 0x01 |
| FL_R | 4 | 0x02 |
| NSW_L | 4 | 0x04 |
| NSW_R | 4 | 0x08 |
| NSL_L | 4 | 0x10 |
| NSL_R | 4 | 0x20 |
| BL_M | 4 | 0x40 |
| RFS | 4 | 0x80 |
| KL_58g_EIN | 5 | 0x01 |
| WBL_SUCH | 5 | 0x02 |
| AHM_KOM | 5 | 0x04 |
| NSL_A | 5 | 0x08 |
| RFS_A | 5 | 0x10 |
| NOT_AKTIV | 6 | 0x02 |

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
