# LKM2.prg

## General

|  |  |
| --- | --- |
| File | LKM2.prg |
| Type | PRG |
| Jobs | 10 |
| Tables | 4 |
| Origin | BMW ET-421 Teepe |
| Revision | 1.41 |
| Author | Softing, BMW ET-421 Teepe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Lampenkontrollmodul LKM2 E31 |  |  |
| ORIGIN | string | BMW ET-421 Teepe |  |  |
| REVISION | string | 1.41 |  |  |
| AUTHOR | string | Softing, BMW ET-421 Teepe |  |  |
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

### STEUERN_AUSGAENGE

Einlesen der Ausgangsinformation

| Name | Type | Description |
| --- | --- | --- |
| AUSGAENGE | string | Anzusteuernder Ausgang table Ansteuern SELECTOR BYTE1 |

### ZAEHLERSTAENDE_LESEN

Auslesen der Zaehlerstaende

_No arguments._

### CODIERUNG_LESEN

Auslesen der Codierdaten (Hier nur Laendervariante)

_No arguments._

### STATUS_LESEN

Abfrage der aktuellen Stati

_No arguments._

## Tables

### FORTTEXTE

| ORT | ORTTEXT | FA_BYTE | FA_MASK |
| --- | --- | --- | --- |
| 0x01 | Abblendlicht links | 4 | 0x02 |
| 0x02 | Abblendlicht rechts | 4 | 0x02 |
| 0x03 | Standlicht links | 4 | 0x01 |
| 0x04 | Standlicht rechts | 4 | 0x01 |
| 0x05 | Ruecklicht links | 4 | 0x04 |
| 0x06 | Ruecklicht rechts | 4 | 0x04 |
| 0x07 | NSW links | 5 | 0x01 |
| 0x08 | NSW rechts | 5 | 0x01 |
| 0x09 | Kennzeichenlicht links | 4 | 0x80 |
| 0x0A | Kennzeichenlicht rechts | 4 | 0x80 |
| 0x0B | Nebelschlussleuchte links | 5 | 0x02 |
| 0x0C | Nebelschlussleuchte rechts | 5 | 0x02 |
| 0x0D | Bremslicht links | 4 | 0x08 |
| 0x0E | Bremslicht rechts | 4 | 0x08 |
| 0x0F | Bremslicht mitte | 4 | 0x20 |
| 0x10 | Sicherung NSW | 5 | 0x40 |
| 0x11 | Sicherung Nebelschlussl. | 5 | 0x20 |
| 0x12 | Sicherung Bremslicht | 4 | 0x40 |
| 0x13 | Relais Abblendlicht | 4 | 0x02 |
| 0x14 | Relais NSW | 5 | 0x01 |
| 0x15 | Klappscheinwerfer links | 0 | 0x00 |
| 0x16 | Klappscheinwerfer rechts | 0 | 0x00 |
| 0x17 | Bremslichtschalter | 5 | 0x08 |
| 0x00 | unbekannter Fehlerort | 0 | 0x00 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x01 | Fehler momentan vorhanden |

### ANSTEUERN

| SELECTOR | BYTE1 | FLAG |
| --- | --- | --- |
| AL_EIN | 0x01 | 1 |
| AL_AUS | 0x00 | 0 |
| NSW_EIN | 0x02 | 1 |
| NSW_AUS | 0x00 | 0 |
| FL_EIN | 0x04 | 1 |
| FL_AUS | 0x00 | 0 |
| LH_EIN | 0x08 | 1 |
| LH_AUS | 0x00 | 0 |
| KSW_EIN | 0x30 | 1 |
| KSW_AUS | 0x00 | 0 |
| KSW_L_EIN | 0x10 | 1 |
| KSW_L_AUS | 0x00 | 0 |
| KSW_R_EIN | 0x20 | 1 |
| KSW_R_AUS | 0x00 | 0 |
| KAU_EIN | 0x40 | 1 |
| KAU_AUS | 0x00 | 0 |
| ALLES_EIN | 0x7F | 1 |
| ALLES_AUS | 0x00 | 0 |

### LAENDER

| LV | LAENDERVARIANTE |
| --- | --- |
| 0x00 | ECE |
| 0x01 | Nordland |
| 0x72 | USA |
| 0x02 | Australien/Golf |
| 0x25 | Norwegen |
| 0x40 | Japan |
| 0xFF | ERROR_UNBEKANNTE_LAENDERVARIANTE |
