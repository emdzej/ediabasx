# zcs_e53.prg

## General

|  |  |
| --- | --- |
| File | zcs_e53.prg |
| Type | PRG |
| Jobs | 10 |
| Tables | 3 |
| Origin | VS-221 Waegner |
| Revision | 1.3 |
| Author | TP-421 Huber, Drexel, MK-42 Hillebrand |
| ECU Comment | SGBD zur Fahrzeugidentifikation E52, zcs_e53.b2v |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektronische Wegfahrsperre - alle Typen |  |  |
| ORIGIN | string | VS-221 Waegner |  |  |
| REVISION | string | 1.03 |  |  |
| AUTHOR | string | TP-421 Huber, Drexel, MK-42 Hillebrand |  |  |
| COMMENT | string | SGBD zur Fahrzeugidentifikation E52, zcs_e53.b2v |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Init-Job fuer EWS automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### INFO

Info fuer Anwender

_No arguments._

### IDENT

Ident-Daten fuer EWS

_No arguments._

### ZCS_GM_LESEN

_No description._

_No arguments._

### PROD_DATUM_LESEN

_No description._

_No arguments._

### FGNR_LESEN

Auslesen der Fahrgestellnummer aus der EWS

_No arguments._

### AIF_ZCS_LESEN

Auslesen des Zentralen Codierschluessels aus KD-Daten

_No arguments._

### KD_DATEN_LESEN

Auslesen der Kundendienstdaten aus der EWS

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | int | 0 bis 11 |

### DIAGNOSE_FORTSETZEN

Diagnose mit EWS aufrecht erhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_SG_REJECTED |
| 0xB0 | ERROR_SG_PARAMETER |
| 0xB1 | ERROR_SG_FUNKTION |
| 0xFF | ERROR_SG_NACK |
| 0x00 | ERROR_SG_UNBEKANNTES_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
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
| 0xXY | unbekannter Hersteller |

### ZCS_TEXTE

| GM | TYP | BAUREIHE | MODELL | LA | TAIS | DESRS |
| --- | --- | --- | --- | --- | --- | --- |
| 8051 | FA51 | E53 | X5_M54_GEFZG | EUR_LL | X | X |
| 8052 | FA52 | E53 | X5_M54_GEFZG | EUR_RL | X | O |
| 8053 | FA53 | E53 | X5_M54_GEFZG | USA_LL | X | X |
| 8071 | FA71 | E53 | X5_M57_GEFZG | EUR_LL | X | O |
| 8072 | FA72 | E53 | X5_M57_GEFZG | EUR_RL | X | O |
| 8131 | FB31 | E53 | X5_M62/TU_GEFZG | EUR_LL | X | X |
| 8132 | FB32 | E53 | X5_M62/TU_GEFZG | EUR_RL | X | X |
| 8133 | FB33 | E53 | X5_M62/TU_GEFZG | USA_LL | X | X |
| xxxx | xxxx | UNBEKANNT | UNBEKANNT | UNBEKANNT | - | - |
