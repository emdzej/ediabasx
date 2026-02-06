# LSM.prg

## General

|  |  |
| --- | --- |
| File | LSM.prg |
| Type | PRG |
| Jobs | 8 |
| Tables | 2 |
| Origin | BMW, TP-422, Teepe |
| Revision | 1.52 |
| Author | BMW, TP-422, Teepe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Lenksaeulenmemory E31 / E32 / E34 |  |  |
| ORIGIN | string | BMW, TP-422, Teepe |  |  |
| REVISION | string | 1.52 |  |  |
| AUTHOR | string | BMW, TP-422, Teepe |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

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

### MODELL_COD_LESEN

Auslesen der MODELL-Codierung -- aus RAM und EEPROM

_No arguments._

### MODELL_COD_SCHREIBEN

Schreiben der MODELL-Codierung

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | Modell-Code |

## Tables

### FORTTEXTE

| CODE | ORT | ORTTEXT |
| --- | --- | --- |
| 0x02 | 0x01 | Arbeitsbereich Neigung |
| 0x03 | 0x02 | Arbeitsbereich laengs |
| 0x04 | 0x03 | Kalibrierung Verstellogik |
| 0x05 | 0x03 | Kalibrierung Verstellogik |
| 0x06 | 0x03 | Kalibrierung Verstellogik |
| 0x07 | 0x03 | Kalibrierung Verstellogik |
| 0x08 | 0x03 | Kalibrierung Verstellogik |
| 0x09 | 0x03 | Kalibrierung Verstellogik |
| 0x0A | 0x03 | Kalibrierung Verstellogik |
| 0x0B | 0x03 | Kalibrierung Verstellogik |
| 0x0C | 0x04 | Relaisueberwachung Neigung |
| 0x0D | 0x05 | Relaisueberwachung laengs |
| 0x0E | 0x04 | Relaisueberwachung Neigung |
| 0x0F | 0x05 | Relaisueberwachung laengs |
| 0x10 | 0x04 | Relaisueberwachung Neigung |
| 0x11 | 0x05 | Relaisueberwachung laengs |
| 0x12 | 0x04 | Relaisueberwachung Neigung |
| 0x13 | 0x05 | Relaisueberwachung laengs |
| 0x14 | 0x06 | WZUe Neigung |
| 0x15 | 0x07 | WZUe laengs |
| 0x16 | 0x06 | WZUe Neigung |
| 0x17 | 0x07 | WZUe laengs |
| 0x18 | 0x08 | Signal Lenkstockhebel Zurueck |
| 0x19 | 0x09 | Signal Lenkstockhebel Vor |
| 0x1A | 0x0A | Signal Lenkstockhebel Ab |
| 0x1B | 0x0B | Signal Lenkstockhebel Auf |
| 0x1C | 0x0C | Tastenfeld |
| 0x1D | 0x0D | Klemme R |
| 0x1E | 0x0E | Memory-LED |
| 0x20 | 0x0F | Relaisueberwachung |
| 0x21 | 0x10 | Relaisueberwachung |
| 0x00 | 0x00 | unbekannte Fehlerart |

### MODELL_COD

| MODELLCOD | MODELLCODTEXT |
| --- | --- |
| 0x00 | E31_CODIERT |
| 0x80 | E32_34_CODIERT |
