# FBZV.prg

## General

|  |  |
| --- | --- |
| File | FBZV.prg |
| Type | PRG |
| Jobs | 13 |
| Tables | 3 |
| Origin | BMW TP-421 Drexel |
| Revision | 1.14 |
| Author | BMW TP-421 Penzenstadler, BMW TP-421 Mehringer, BMW TP-421 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Funkfernbedienung fuer Zentralverriegelung E38 |  |  |
| ORIGIN | string | BMW TP-421 Drexel |  |  |
| REVISION | string | 1.14 |  |  |
| AUTHOR | string | BMW TP-421 Penzenstadler, BMW TP-421 Mehringer, BMW TP-421 Drexel |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Default Initialisierung der Kommunikation via EDIC

_No arguments._

### IDENT

Identifizierung SG lesen

_No arguments._

### FS_LESEN

Fehlerspeicher Sg lesen und auswerten Pro Fehler wird ein Ergenbissatz gebildet

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### STATUS_KLEMME_R_EIN

Status Klemme R abfragen

_No arguments._

### STEUERN_TEST_EMPFANG

Steuern Selbsttestfunktion HF-Empfang

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden 0x00-0xFF |
| BYTE2 | int | kann beliebig verwendet werden 0x00-0xFF |
| BYTE3 | int | kann beliebig verwendet werden 0x00-0xFF |

### CODE_SCHREIBEN

Schreiben der Codierdaten

| Name | Type | Description |
| --- | --- | --- |
| KOMFORT_OPEN | int | "1", wenn Komfortoeffnen aktiv |
| PANIC_ACTIVE | int | "1", Panik-Mode-Aktivierung |
| ZS_MODE | int | "1", wenn Zentralsicherung sofort "0", wenn Zentralsicherung nach zweiter Betaetigung |
| PANIC_DELAY | int | "0", delta t = 2sec "1", delta t = 3sec "2", delta t = 4sec "3", delta t = 5sec |
| RANGE_OPEN | int | "1", wenn Reichweiten Oeffnen reduziert |
| RANGE_CLOSE | int | "1", wenn Reichweite Schliessen reduziert |
| KOMFORT_CLOSE | int | "1", wenn Komfortschliessen aktiv |

### CODE_LESEN

Auslesen der Codierdaten

_No arguments._

### DIAGNOSE_ENDE

Beendet Kommuniktion mit SG DUMMY

_No arguments._

### DIAGNOSE_AUFRECHT

Aufrechterhalten Kommuniktion mit SG

_No arguments._

## Tables

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Batteriefehler in Transmitter 1 |
| 0x02 | Batteriefehler in Transmitter 2 |
| 0x03 | Batteriefehler in Transmitter 3 |
| 0x04 | Batteriefehler in Transmitter 4 |

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
