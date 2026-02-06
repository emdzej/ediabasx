# EML12.prg

## General

|  |  |
| --- | --- |
| File | EML12.prg |
| Type | PRG |
| Jobs | 9 |
| Tables | 3 |
| Origin | BMW TP-421 Weber |
| Revision | 1.56 |
| Author | BMW TP-421 Weber |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektronische-Motor-Leistungsregelung M70 |  |  |
| ORIGIN | string | BMW TP-421 Weber |  |  |
| REVISION | string | 1.56 |  |  |
| AUTHOR | string | BMW TP-421 Weber |  |  |
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

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### DIAGNOSE_ENDE

Beenden der Diagnose

_No arguments._

### STATUS_MOTORTEMPERATUR

Auslesen der Motortemperatur aus ADC-Kanal 3

_No arguments._

### STATUS_PWG_SPANNUNG

Auslesen der Spannung am Pedalwertgeber-Poti aus ADC-Kanal 5

_No arguments._

### STATUS_DIGITAL_LESEN

Auslesen von digitalen Eingangsstati

_No arguments._

## Tables

### HW_TABELLE

| HARDWARENR | GETRIEBE |
| --- | --- |
| 1720060 | 1 |
| 1725229 | 1 |
| 1725364 | 1 |
| 1725387 | 1 |
| 1725388 | 1 |
| 1725389 | 1 |
| 1725390 | 1 |
| 1725391 | 1 |
| 1725392 | 1 |
| 1725393 | 1 |
| 1725394 | 1 |
| 1725395 | 1 |
| 1725396 | 1 |
| 1725397 | 1 |
| 1725398 | 1 |
| 1725399 | 1 |
| 1725400 | 1 |
| 1725401 | 1 |
| 1729742 | 0 |
| 1729743 | 0 |
| 1729744 | 0 |
| 1729745 | 0 |
| 1729746 | 0 |
| 1731914 | 1 |
| 1733598 | 1 |
| 1733599 | 1 |
| 1733600 | 1 |
| 1733601 | 1 |
| 1733602 | 1 |
| 1401124 | 0 |
| 1401400 | 2 |
| 1401401 | 2 |
| 1401402 | 2 |
| 1401403 | 2 |
| 1401404 | 2 |
| XXXXXXX | 2 |

### GETRIEBETEXT

| GNR | GTEXT |
| --- | --- |
| 0x00 | Handschaltung |
| 0x01 | Automatik |
| 0x02 | unbekannt |

### FORTTEXTE

| CODE | ORT | ORTTEXT |
| --- | --- | --- |
| 0xff | 0x00 | unbekannter Fehlerort |
| 0xd4 | 0x01 | Motortemperatur T-mot |
| 0xd5 | 0x02 | Geschwindigkeitsignal |
| 0xd6 | 0x03 | Drehzahlsignal Td |
| 0xc3 | 0x04 | Steuergeraet, A/D-Wandler |
| 0xc4 | 0x05 | FGR-Bedientaste |
| 0xc5 | 0x06 | PWG Anschlag veraendert |
| 0xb2 | 0x07 | Verbindung EML zum ASC |
| 0x9a | 0x08 | Steuergeraet intern |
| 0x99 | 0x09 | EML-Systemfehler |
| 0x2b | 0x0a | Ti-Signal 7-12. Zyl. |
| 0x2c | 0x0b | Ti-Signal 1-6. Zyl. |
| 0x4d | 0x0c | SG oder DK |
| 0x71 | 0x0d | DK-Stellmotor 7-12. Zyl. |
| 0x17 | 0x0e | DK-Stellmotor 1-6. Zyl. |
| 0x8e | 0x0f | PWG Schalter |
| 0x8f | 0x10 | PWG Poti. |
| 0x66 | 0x11 | DK-Poti. 7-12. Zyl. |
| 0x00 | 0x12 | DK-Poti. 1-6. Zyl. |
| 0x3c | 0x13 | DK-Schalter 7-12. Zyl. |
| 0x3d | 0x14 | DK-Schalter 1-6. Zyl. |
| 0xa5 | 0x15 | DK-PWG-Schalter 7-12. Zyl |
| 0x5a | 0x16 | DK-PWG-Schalter 1-6. Zyl |
