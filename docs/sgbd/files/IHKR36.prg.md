# IHKR36.prg

## General

|  |  |
| --- | --- |
| File | IHKR36.prg |
| Type | PRG |
| Jobs | 13 |
| Tables | 1 |
| Origin | BMW ET-421 Drexel |
| Revision | 1.5 |
| Author | BMW ET-421 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Integrierte Heiz- Klimaregelung E36 |  |  |
| ORIGIN | string | BMW ET-421 Drexel |  |  |
| REVISION | string | 1.05 |  |  |
| AUTHOR | string | BMW ET-421 Drexel |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Kommunikationsparameter fuer IHKR E36

_No arguments._

### IDENT

Identifikation

_No arguments._

### CODIERUNG_LESEN

Auslesen der Codierdaten

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int |  |
| ANZAHL | int |  |

### STATUS_DIGITAL

Status lesen Digital Ein- Ausgaenge 

_No arguments._

### STATUS_ANALOG

Status lesen Analog Ein- Ausgaenge 

_No arguments._

### STEUERN_DIGITAL

Ansteuern der digitalen Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| LED_KLIMA | string |  |
| LED_UMLUFT | string |  |
| LED_HHS | string |  |
| RELAIS_HHS | string |  |
| DME_AC | string |  |
| DME_KO | string |  |

### STEUERN_MOTOR

Ansteuern der Schrittmotoren

| Name | Type | Description |
| --- | --- | --- |
| FRISCHLUFT | int |  |
| UMLUFT | int |  |
| SCHICHTUNG | int |  |

### STEUERN_VENTIL

Ansteuern der Wasserventile

| Name | Type | Description |
| --- | --- | --- |
| LINKS | int |  |
| RECHTS | int |  |

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Geblaesepotentiometer |
| 0x02 | Schichtungspotentiometer |
| 0x03 | Waermetauscherfuehler rechts |
| 0x04 | Waermetauscherfuehler links |
| 0x05 | Verdampferfuehler |
| 0x06 | Innenraumtemperaturfuehler |
| 0x07 | Aussentemperaturfuehler |
| 0x08 | Sollwertsteller rechts |
| 0x09 | Sollwertsteller links |
| 0x0D | Standheizung / Standlueftung |
| 0x13 | Anlasser ( Klemme 50 ) |
| 0x15 | AUC |
| 0x19 | Schichtungsklappenmotor |
| 0x1A | Umluftklappenmotor |
| 0x1B | Frischluftklappenmotor |
| 0x1C | Wasserventil rechts |
| 0x1D | Wasserventil links |
| 0x20 | Innenfuehlergeblaese |
| 0x23 | DME / EPC |
| 0x24 | Heckscheibenheizung |
| 0x25 | Magnetkupplung |
| 0xFF | unbekannter Fehlerort |
