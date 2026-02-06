# FLASH053.PRG

## General

|  |  |
| --- | --- |
| File | FLASH053.PRG |
| Type | PRG |
| Jobs | 31 |
| Tables | 1 |
| Origin | BMW ET-421 Weber, TP-53 Will |
| Revision | 1.60 |
| Author | BMW ET-421 Weber, TP-53 P. Will |
| ECU Comment | Master - Datei fuer Flashprog. |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | DME 5.2 M62 und MS41.x M52 |  |  |
| ORIGIN | string | BMW ET-421 Weber |  |  |
| REVISION | string | 1.40 |  |  |
| AUTHOR | string | BMW ET-421 Weber |  |  |
| COMMENT | string | Master - Datei fuer Flashprog. |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### EDIC_RESET

EDIC-Reset

_No arguments._

### initialisierung

Default Init-Job

_No arguments._

### INFO

Information SGBD

_No arguments._

### UPROG_EIN

Programmierspannung einschalten

_No arguments._

### UPROG_AUS

Programmierspannung ausschalten

_No arguments._

### BLOCKLAENGE_MAX

maximale Blocklaenge

_No arguments._

### DATEN_REFERENZ

Job DATEN-Referenz

_No arguments._

### HW_REFERENZ

Job HW-Referenz

_No arguments._

### ZIF

Job ZIF

_No arguments._

### ZIF_BACKUP

Job ZIF_BACKUP

_No arguments._

### AIF_LESEN

Auslesen des Anwender-Info-Feldes

_No arguments._

### GET_CURRAIFADR

ermittelt die Adresse des Momentan gültigen AIF-Eintrags

_No arguments._

### WRITE_AIF

ermittelt die Adresse des Momentan gültigen AIF-Eintrags

| Name | Type | Description |
| --- | --- | --- |
| FAHRGESTELLNR | string |  |
| BMW_FERTIGUNGSDAT | string |  |
| BMW_SWNR | string |  |
| BMW_TYPPRUEFNR | long |  |
| BMW_ZBNR | string |  |
| PRG_GERAET_SER_NR | string |  |
| WERKSCODE | int |  |
| KM | int |  |
| PRG_STANDSNR | string |  |

### FLASH_LESEN

Beliebige FLASH - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| FLASH_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low HEX |
| FLASH_LESEN_ANZAHL_BYTE | int | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### FLASH_LOESCHEN

Flash  - Zellen loeschen

| Name | Type | Description |
| --- | --- | --- |
| FLASH_LOESCHEN_ADRESSE_DATEN | binary | Uebergabeparameter, Startadresse High-Middle-Low und Daten |

### FLASH_SCHREIBEN

Beliebige Flash Zellen mit 02 beschreiben

| Name | Type | Description |
| --- | --- | --- |
| FLASH_SCHREIBEN_ADRESSE_DATEN | binary | Uebergabeparameter, Startadresse High-Middle-Low und Daten |

### FLASH_SCHREIBEN_ENDE

Beliebige EPROM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| FLASH_SCHREIBEN_ENDE_ADRESSE_DATEN | binary | Uebergabeparameter, Startadresse High-Middle-Low und Daten |

### DATENBEREICH_LOESCHEN_0E

Beliebige EPROM - Zellen auslesen

_No arguments._

### SEED_KEY

Schutzmechanismus SEED_KEY

_No arguments._

### IDENT

Ident-Daten fuer DME

_No arguments._

### DME_LINKS_VORHANDEN

Linkes Stg vorhanden

_No arguments._

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### STATUS_CODIER_CHECKSUMME

Codier - Checksumme abfragen

_No arguments._

### SCHALTE_PROTOKOLL_DS2_NACH_K2

Umschaltung DS2

_No arguments._

### DIAGNOSE_ENDE

Loeschen des Fehlerspeichers

_No arguments._

### SCHALTE_K2_DS2

_No description._

_No arguments._

### COD_LESEN

Auslesen der Codierdaten der EWS

_No arguments._

### STEUERN_SYNC_MODE

_No description._

| Name | Type | Description |
| --- | --- | --- |
| MODE | int |  |

### WECHSELCODE_SYNC_DME

Wechselcodesynchronisation EWS 3 - DME anstossen

_No arguments._

### STATUS_SYNC_MODE

_No description._

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_SG_REJECTED |
| 0xB0 | ERROR_SG_PARAMETER |
| 0xB1 | ERROR_SG_FUNCTION |
| 0xB2 | ERROR_SG_NUMBER |
| 0xFF | ERROR_SG_NACK |
| 0x00 | ERROR_SG_UNBEKANNTES_STATUSBYTE |
