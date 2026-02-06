# FUNKKOMP.prg

## General

|  |  |
| --- | --- |
| File | FUNKKOMP.prg |
| Type | PRG |
| Jobs | 18 |
| Tables | 3 |
| Origin | BMW TP-422 Teepe |
| Revision | 1.33 |
| Author | BMW TP-422 Teepe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Funk-kompakt Schliess-System |  |  |
| ORIGIN | string | BMW TP-422 Teepe |  |  |
| REVISION | string | 1.33 |  |  |
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

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### STATUS_LESEN

Auslesen der IO-Ports

_No arguments._

### DIAGNOSE_ENDE

Beenden der Diagnose

_No arguments._

### TEST_FUNK_STRECKE

Status des letzten, vor Kl.R ein empfangenen Telegramms

_No arguments._

### CODIERUNG_LESEN

Codierdaten

_No arguments._

### LAENDERCODIERUNG_LESEN

Codierdaten

_No arguments._

### BATTERIE_MELDUNG_LESEN

Status der Batteriemeldung

_No arguments._

### BATTERIE_MELDUNG_LOESCHEN

Loeschen der Batteriemeldung

_No arguments._

### RAM_LESEN

Auslesen des RAM-Bereiches

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL | int | Anzahl Bytes von 1 (0x01) bis 112 (0x70) |
| ADRESSE | int | Startadresse LSB |

### EEPROM_LESEN

Auslesen des EEPROM-Bereiches

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL | int | Anzahl Bytes von 1 (0x01) bis 255 (0xFF) |
| ADRESSE | int | Startadresse LSB |

### STEUERN_IO

Ansteuern der IO-Ports

| Name | Type | Description |
| --- | --- | --- |
| PIN | string | anzusteuernder Ausgang als String moeglich sind: ZS2, VR, ZS22, TGK, ENTRIEGELN, VERRIEGELN |

### INIT_SPERRE_SCHREIBEN

Aufheben der Initialisiersperre

_No arguments._

### FUNKTIONSSPERRE_SCHREIBEN

Setzen der Funktionssperre

_No arguments._

### FUNKTIONSSPERRE_AUFHEBEN

Aufheben der Funktionssperre

_No arguments._

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Signal ZS2 |
| 0x02 | Signal VR |
| 0x03 | Signal ZS22 |
| 0x04 | Tuergriffkontakt TGK |
| 0x05 | EEPROM |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Kurzschluss gegen U-Batt |
| 0x01 | Kurzschluss gegen Masse |
| 0x02 | Leitungsunterbrechung |
| 0x03 | ungueltiger Arbeitsbereich |
| 0x04 | sporadischer Fehler |
| 0x05 | statischer Fehler |
| 0x06 | Fehler momentan nicht vorhanden |
| 0x07 | Fehler momentan vorhanden |
| 0xFF | unbekannte Fehlerart |

### STEUERN

| PIN | AUSGANG |
| --- | --- |
| 0x52 | ZS2 |
| 0x32 | VR |
| 0x42 | ZS22 |
| 0x62 | TGK |
| 0xF6 | ENTRIEGELN |
| 0xF1 | VERRIEGELN |
| 0xFF | unbekannt |
