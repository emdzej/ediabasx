# CVM.prg

## General

|  |  |
| --- | --- |
| File | CVM.prg |
| Type | PRG |
| Jobs | 17 |
| Tables | 2 |
| Origin | BMW TP-422 Teepe |
| Revision | 2.1 |
| Author | BMW TP-422 Teepe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Cabrio-Verdeck-Modul E36 |  |  |
| ORIGIN | string | BMW TP-422 Teepe |  |  |
| REVISION | string | 2.01 |  |  |
| AUTHOR | string | BMW TP-422 Teepe |  |  |
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

Auslesen der Identifikationsdaten

_No arguments._

### BMW_NR_LESEN

Auslesen der BMW-Teilenummer

_No arguments._

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### CRASH_AUSLOESEN

Ausloesung des UERSS durch Crash-Telegramm

_No arguments._

### MOTOR_FAHREN

Ansteuerung der Verdeckmotoren

| Name | Type | Description |
| --- | --- | --- |
| MOTOR | string | anzusteuernder Motor (KLAPPE_AUF/ZU, VERDECK_AUF/ZU, UERSS_AUF/ZU, ALLE_AUS) |

### TIPP_FUNKTION

Ansteuerung des Verdeckzyklus ueber Tippfunktion

| Name | Type | Description |
| --- | --- | --- |
| FUNKTION | string | anzufuehrender Zyklus (VERDECK_OEFFNEN, VERDECK_SCHLIESSEN, VERDECK_HALT) |

### AUSGAENGE_SCHALTEN

Ansteuerung des Verdeckzyklus ueber Tippfunktion

| Name | Type | Description |
| --- | --- | --- |
| FUNKTION | string | anzufuehrende Funktion(FH_AUF, FH_ZU, LAMPE_EIN, RESERVE, STOP) |

### REFERENZLAUF_EINSCHALTEN

Ausloesung des Recferenzlaufes

_No arguments._

### STATUS_LESEN

Ausloesung des Recferenzlaufes

_No arguments._

### CODIERUNG_LESEN

Auslesen der Codierung des SG

_No arguments._

### SG_SELBSTTEST

Ausfuehren des SG-Selbsttests

_No arguments._

### ZAEHLERSTAENDE_LESEN

Auslesen der Zaehlerstaende

_No arguments._

### SPEICHER_LESEN

Auslesen des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| ZAHL | int | 1 bis 24 |
| HIGH | int | 0 = RAM, 1 = ROM |
| LOW | int | range = 0x90 bis 0xCF bei RAM und 0x01 bis 0xFF bei ROM |

### DIAGNOSE_ENDE

Beenden der Diagnose

_No arguments._

## Tables

### FORTTEXTE

| HILFE | ORT | ORTTEXT |
| --- | --- | --- |
| 0x01 | 0x01 | Klappenmotor 1 |
| 0x02 | 0x02 | Klappenmotor 2 oder Verdeckmotor 1 |
| 0x03 | 0x12 | Verdeckmotor 2 oder Verriegelungsmotor 1 |
| 0x04 | 0x03 | Verdeckmotor 2 |
| 0x05 | 0x13 | Verriegelungsmotor 2 |
| 0x06 | 0x04 | Mikroschalter Verdeckklappe |
| 0x07 | 0x05 | Mikroschalter Position 1 oder 2 |
| 0x08 | 0x06 | Mikroschalter Position 1 oder 3 |
| 0x00 | 0x07 | Mikroschalter Position 2 |
| 0x10 | 0x08 | Mikroschalter Position 3 |
| 0x46 | 0x09 | Klappenmotor |
| 0x4E | 0x0A | Klappenmotor |
| 0x3A | 0x0A | Klappenmotor |
| 0x3E | 0x0A | Klappenmotor |
| 0x35 | 0x0A | Klappenmotor |
| 0x3D | 0x0A | Klappenmotor |
| 0x49 | 0x0A | Klappenmotor |
| 0x4D | 0x0A | Klappenmotor |
| 0x0A | 0x0B | Mikroschalter Position 1 oder Verdeckmotor |
| 0x16 | 0x0B | Mikroschalter Position 1 oder Verdeckmotor |
| 0x05 | 0x0B | Mikroschalter Position 1 oder Verdeckmotor |
| 0x19 | 0x0B | Mikroschalter Position 1 oder Verdeckmotor |
| 0x1A | 0x0C | Mikroschalter Position 2 oder Verdeckmotor |
| 0x36 | 0x0C | Mikroschalter Position 2 oder Verdeckmotor |
| 0x15 | 0x0C | Mikroschalter Position 2 oder Verdeckmotor |
| 0x39 | 0x0C | Mikroschalter Position 2 oder Verdeckmotor |
| 0x4A | 0x0D | Mikroschalter Position 3 oder Verdeckmotor |
| 0x09 | 0x0D | Mikroschalter Position 3 oder Verdeckmotor |
| 0x32 | 0x0B | Mikroschalter Position 1 oder Verdeckmotor |
| 0x24 | 0x0C | Mikroschalter Position 2 oder Verdeckmotor |
| 0x51 | 0x0D | Mikroschalter Position 3 oder Verdeckmotor |
| 0x52 | 0x0E | Stack Fehler |
| 0x53 | 0x0F | Gesamtstrom zu gross (>11A) |
| 0x54 | 0x10 | Eintraege im EEPROM sind ungleich |
| 0x55 | 0x11 | Fehler Ueberrollsensor |
| 0xFF | 0xFF | unbekannter Fehlerort |

### STEUERN

| BYTE1 | ANTRIEB | BYTE2 |
| --- | --- | --- |
| 0xA9 | KLAPPE_AUF | 0x02 |
| 0x56 | KLAPPE_ZU | 0x01 |
| 0xA5 | VERDECK_AUF | 0x02 |
| 0x5A | VERDECK_ZU | 0x01 |
| 0x95 | UERSS_AUF | 0x02 |
| 0x6A | UERSS_ZU | 0x01 |
| 0xAA | ALLE_AUS | 0x02 |
| 0x08 | VERDECK_OEFFNEN | 0x01 |
| 0x08 | VERDECK_SCHLIESSEN | 0x02 |
| 0x08 | VERDECK_HALT | 0x04 |
| 0x10 | FH_AUF | 0x01 |
| 0x10 | FH_ZU | 0x02 |
| 0x10 | LAMPE_EIN | 0x04 |
| 0x55 | VERRIEGELN | 0x02 |
| 0xAA | ENTRIEGELN | 0x01 |
| 0x10 | RESERVE | 0x08 |
| 0x10 | STOP | 0x00 |
| 0xFF | ERROR | 0x00 |
