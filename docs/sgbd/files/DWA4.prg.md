# DWA4.prg

## General

|  |  |
| --- | --- |
| File | DWA4.prg |
| Type | PRG |
| Jobs | 10 |
| Tables | 2 |
| Origin | BMW TP-422 Teepe |
| Revision | 1.9 |
| Author | BMW TP-422 Teepe, BMW TP-421 Drexel |
| ECU Comment | diese Version ist erforderlich fuer EDIABAS 4.0 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Diebstahlwarnanlage DWA4 E31 / E32 / E34 / E36 |  |  |
| ORIGIN | string | BMW TP-422 Teepe |  |  |
| REVISION | string | 1.09 |  |  |
| AUTHOR | string | BMW TP-422 Teepe, BMW TP-421 Drexel |  |  |
| COMMENT | string | diese Version ist erforderlich fuer EDIABAS 4.0 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Default init job

_No arguments._

### IDENT

Default ident job

_No arguments._

### FS_LESEN

Default FS_LESEN job

_No arguments._

### FS_LOESCHEN

Default FS_LOESCHEN job

_No arguments._

### SPEICHER_LESEN

Default SPEICHER_LESEN job

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL | int |  |
| ADRESSE_HIGH | int |  |
| ADRESSE_LOW | int |  |

### STATUS_EINGAENGE_LESEN

Default Status_eingaenge lesen job

_No arguments._

### CODIERUNG_LESEN

Default Codierunglesen job

_No arguments._

### STATUS_SCHAERFEN_LESEN

Default Status_schaerfen_lesen job

_No arguments._

### DIAGNOSE_ENDE

Default Diagnose_ende job

_No arguments._

## Tables

### FORTTEXTE

| ORT | INDEX | ORTTEXT |
| --- | --- | --- |
| 0x01 | 0x01 | EEPROM nach Power-on-Reset defekt, Kodierung verloren |
| 0x02 | 0x02 | EEPROM nach WD-Reset defekt, Kodierung verloren |
| 0x03 | 0x03 | RAM nach WD-Reset defekt |
| 0x04 | 0x04 | Reset |
| 0x05 | 0x05 | Schaerftabelle nicht beschreibbar |
| 0x06 | 0x06 | Alarmtabelle nicht beschreibbar |
| 0x07 | 0x07 | Schloss-Signale Fahrertuer ungueltig |
| 0x08 | 0x08 | Schloss-Signale Beifahrertuer ungueltig |
| 0x09 | 0x09 | Signale Infrarot ungueltig |
| 0x0A | 0x0A | Schloss-Signale Heckklappe ungueltig |
| 0x0B | 0x0B | ZS wurde 1, ohne das ein Schloss auf VR stand |
| 0x0C | 0x0C | Neigungsgeber gibt kein Quittungssignal beim Einschalten |
| 0x0D | 0x0D | Quittungsimpuls Neigungsgeber, falsche Laenge |
| 0x0E | 0x0E | Leitung NG aktiviert, obwohl Neigungsgeber nicht eingeschaltet |
| 0x0F | 0x0F | Diagnose Horn ist 0, obwohl Horn ein |
| 0x10 | 0x10 | Diagnose Horn ist 1, obwohl Horn aus (gesetzt durch BC-Alarm) |
| 0x11 | 0x11 | Diagnose Horn wird nicht 1 |
| 0x12 | 0x12 | Diagnose Horn wird nicht 0 (gesetzt durch BC-Alarm) |
| 0x13 | 0x13 | Diagnose Wegfahrsicherung ist 0, obwohl WFS ein |
| 0x14 | 0x14 | Diagnose Wegfahrsicherung ist 1, obwohl WFS aus |
| 0x15 | 0x15 | Diagnose Wegfahrsicherung wird nicht 1 |
| 0x16 | 0x16 | Diagnose Wegfahrsicherung wird nicht 0 |
| 0x17 | 0x17 | Fehler auf der Leitung Wegfahrsicherung |
| 0x18 | 0x18 | Fehler auf der Leitung ST |
| 0x19 | 0x19 | Fehler auf der Leitung CAG |
| 0x1A | 0x1A | Fehler auf der Leitung Horn |
| 0x1B | 0x1B | Fehler auf der Leitung LED |
| 0x1C | 0x1C | Watchdog Reset |
| 0x1D | 0x1D | DWA sollte schaerfen, Kl.15/R/61 war aktiv |
| 0x1E | 0x1E | Fehler auf ER1, Schloss unbekannt |
| 0x1F | 0x1F | Erstprogrammierung 1.Kopie falsch |
| 0x20 | 0x20 | Erstprogrammierung 2.Kopie falsch |
| 0x21 | 0x21 | Variantenprogrammierung 1.Kopie falsch |
| 0x22 | 0x22 | Variantenprogrammierung 2.Kopie falsch |
| 0x23 | 0x23 | Ultraschall keine Quittierung |
| 0x24 | 0x24 | Ultraschall Quittierung falsch |
| 0x25 | 0x25 | Ultraschall defekt |
| 0x26 | 0x26 | Ultraschallsensor links defekt |
| 0x27 | 0x27 | Ultraschallsensor rechts defekt |
| 0xFF | 0xFF | unbekannter Fehlerort |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | OKAY |
| 0x02 | OKAY |
| 0x05 | OKAY |
| 0x07 | OKAY |
| 0x0C | OKAY |
| 0x0D | OKAY |
| 0x0C | ERROR_ECU_FUNCTION |
| 0xAA | ERROR_ECU_REJECTED |
| 0x0A | ERROR_ECU_NACK |
| xxxx | OKAY |
| 0xFF | ERROR_ECU_UNKNOWN_STATUSBYTE |
