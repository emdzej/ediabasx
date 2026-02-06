# VIDEO_GT.prg

## General

|  |  |
| --- | --- |
| File | VIDEO_GT.prg |
| Type | PRG |
| Jobs | 22 |
| Tables | 9 |
| Origin | BMW TI-431 Rochal |
| Revision | 1.8 |
| Author | BMW TI-431 Krueger, BMW TP-422 Helmich, BMW TP-422 Teepe, BMW TI-431 Rochal |
| ECU Comment | VIDEO_GT |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Videomodul, Graphik-Teil |  |  |
| ORIGIN | string | BMW TI-431 Rochal |  |  |
| REVISION | string | 1.8 |  |  |
| AUTHOR | string | BMW TI-431 Krueger, BMW TP-422 Helmich, BMW TP-422 Teepe, BMW TI-431 Rochal |  |  |
| COMMENT | string | VIDEO_GT |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x9B) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x9D) wird aktiviert |

### INITIALISIERUNG

Init-Job Videomodul Graphik-Teil

_No arguments._

### IDENT

Ident-Daten fuer Videomodul Graphik-Teil

_No arguments._

### FS_LESEN

Fehlerspeicher lesen High Konzept nach LH Codierung/Diagnose mit Umweltbeding

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Daten in den Pruefstempel schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATUM_1 | int | kann beliebig verwendet werden |
| DATUM_2 | int | kann beliebig verwendet werden |
| DATUM_3 | int | kann beliebig verwendet werden |

### SOFTWARE_LOADING_LESEN

Lesen, welche Software geladen ist

_No arguments._

### SOFTWARE_LOADING_SCHREIBEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| SPRACHE_1 | int | Sprache 1 der Sprachauswahl |
| SPRACHE_2 | int | Sprache 2 der Sprachauswahl |
| SPRACHE_3 | int | Sprache 3 der Sprachauswahl |

### SELBSTTEST

Selbsttest des VM_GT

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen im VM_GT

_No arguments._

### CODIERUNG_LESEN

Auslesen der Codierdaten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### DIAGNOSE_ERHALTEN

Diagnose aufrechterhalten

_No arguments._

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_SCHREIBEN

Codierdaten schreiben ohne Verifikation

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben des Pruefstempels mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### WRITE_CONFIGURATION_DATA

Schreiben der configuration data

| Name | Type | Description |
| --- | --- | --- |
| KONFIG_CUSTOMER | string | Customer im Klartext |
| KONFIG_SWDISPLAYTYPE | string | SW/Display type im Klartext |
| KONFIG_NAVIGATIONS_MODE | string | Navigation mode im Klartext |

### READ_CONFIGURATION_DATA

Auslesen der configuration data

_No arguments._

### SW_DEMAND_FLAG_SETZEN

Herstellen des Auslieferzustandes

_No arguments._

## Tables

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
| ?10? | ERROR_ARGUMENT |
| ?20? | ERROR_FEHLERANZAHL |
| ?70? | ERROR_NUMBER_ARGUMENT |
| ?71? | ERROR_RANGE_ARGUMENT |
| ?72? | ERROR_VERIFY |
| 0x?? | ERROR_ECU_UNKNOWN_STATUSBYTE |

### DIGITALARGUMENT

| TEXT | WERT |
| --- | --- |
| ein | 1 |
| aus | 0 |
| ja | 1 |
| nein | 0 |
| auf | 1 |
| ab | 0 |
| yes | 1 |
| no | 0 |
| on | 1 |
| off | 0 |
| up | 1 |
| down | 0 |
| true | 1 |
| false | 0 |
| 1 | 1 |
| 0 | 0 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Hardwarefehler im Videomodul |
| 0x02 | Hardwarefehler im Graphikteil oder TV-Teil |
| 0x03 | ARCNET-Fehler, keine Kommunikation mit NAV moeglich |
| 0x06 | Fehler Navigationsrechner |
| 0x07 | Fehler beim Beschreiben des EEPROMS |
| 0x08 | I2 C-Bus Fehler |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x20 | Fehler in diesem Betriebszyklus erkannt |
| 0x40 | Fehler momentan vorhanden |
| 0xFF | unbekannte Fehlerart |

### FUMWELTTEXTE

| UWNR | UWTEXT |
| --- | --- |
| 0x01 | EEPROM Fehler |
| 0x02 | Boot-ROM Checksummen Fehler |
| 0x03 | Boot-ROM Checksummen Fehler |
| 0x04 | Videoausgabe: Diagnoseschaltung mit staendigen High Pegel am RGB-Ausgang |
| 0x05 | Videoausgabe: Falscher Pegel am RGB Rot Ausgang |
| 0x06 | Videoausgabe: Falscher Pegel am RGB Gruen Ausgang |
| 0x07 | Videoausgabe: Falscher Pegel am RGB Blau Ausgang |
| 0x08 | Videoausgabe: Falscher Pegel am RGB Rot und Gruen Ausgang |
| 0x09 | Videoausgabe: Falscher Pegel am RGB Rot und Blau Ausgang |
| 0x0A | Videoausgabe: Falscher Pegel am RGB Gruen und Blau Ausgang |
| 0x0B | Videoausgabe: Falscher Pegel am RGB Rot Gruen und Blau Ausgang |
| 0x0C | Sprachausgabe: Falscher Pegel am Sprachausgang |
| 0x0D | Sprachausgabe: Keine Spracherzeugung |
| 0x0E | Sprachausgabe: Diagnose misst staendigen Low-Pegel am Sprachausgang |
| 0x0F | Sprachausgabe: Diagnose misst staendigen High-Pegel am Sprachausgang |
| 0x10 | Sprachausgabe: Keine Spracherzeugung |
| 0x11 | Read/write Fehler auf ARCNET chip |
| 0x12 | ARCNET Verbindung: Kein anderer ARCNET Knoten gefunden |
| 0x19 | CPU-DRAM read/write Fehler |
| 0x1A | Video-DRAM read/write Fehler |
| 0x1F | Kontrollprozess konnte nicht gestartet werden |
| 0x20 | Kontrollprozess konnte nicht gestoppt werden |
| 0x21 | Kontrollprozess: Kommunikationskanal konnte nicht eingerichtet werden |
| 0x22 | Kontrollprozess: Event konnte nicht eingerichtet werden |
| 0x23 | Kontrollprozess: Datenmodul konnte nicht eingerichtet werden |
| 0x24 | Kontrollprozess ist unvorhergesehen gestorben |
| 0x25 | Kontrollprozess: Die unteren 8 Bit koennen nicht erkannt werden |
| 0x26 | Kontrollprozess: Fehler beim Lesen des Kommunikationskanals |
| 0x27 | Kontrollprozess: Signal hat Adressaten nicht erreicht |
| 0x28 | Datamodul: Create/link Fehler beim Anlegen eines links |
| 0x29 | Datamodul: Create/link Fehler beim Anlegen eines links |
| 0x2A | Datamodul: Create/link Fehler beim Oeffnen eines Datenmoduls |
| 0x2B | Datamodul: Create/link Fehler beim Oeffnen eines Datenmoduls |
| 0x2C | Datamodul: Create/link Fehler beim Reservieren von Speicher fuer ein Datenmodul |
| 0x2D | Datamodul: Create/link Fehler beim Reservieren von Speicher fuer ein Datenmodul |
| 0x2E | Menue Steuerung: data_trigger Kommunikationskanal nicht verfuegbar |
| 0x2F | Menue Steuerung: Verbindung zum send_I-Bus konnte nicht geoeffnet werden |
| 0x30 | Menue Steuerung: Fehler beim BUILD_SCREEN Prozess |
| 0x31 | Menue Steuerung: Fehler beim SEND_IBUS Prozess |
| 0x32 | Menue Steuerung: Fehler ibus_trigger Kommunikationskanal |
| 0x33 | Menue Steuerung: Fehler beim Lesen des ibus_trigger Kommunikationskanals |
| 0x34 | Menue Steuerung: Datei fuer aktuelle Cursorposition kann nicht erzeugt werden |
| 0x35 | Menue Steuerung: Cursorposition konnte nicht abgespeichert werden |
| 0x36 | Menue Steuerung: Menue konnte nicht abgespeichert werden |
| 0x83 | I-Bus Sendefehler: Schreiben zum I2C-Treiber misslungen |
| 0xFF | unbekannter Fehlerort |

### LAENDERCODEZIELLAND

| CODE | ZIELLAND |
| --- | --- |
| 0x00 | Deutschland |
| 0x01 | englisch UK |
| 0x02 | englisch US |
| 0x03 | Italien |
| 0x04 | Spanien |
| 0x05 | engl. Japan |
| 0x06 | Frankreich |
| 0x07 | CDN |
| 0x08 | Aus/Golf/ZA |
| 0xFF | unbekanntes Land |

### CODESPRACHEN

| CODE | SPRACHEN |
| --- | --- |
| 0x00 | deutsch |
| 0x01 | englisch UK |
| 0x02 | englisch US |
| 0x03 | italienisch |
| 0x04 | spanisch |
| 0x05 | englisch UK |
| 0x06 | franzoesisch |
| 0x07 | englisch US |
| 0x08 | englisch UK |
| 0xFF | unbekannte Sprache |

### CODESOFTWARELADENTEXT

| CODE | TEXT |
| --- | --- |
| 0x00 | Software erfolgreich geladen |
| 0x01 | Fehler beim Laden der Software |
| 0xFF | unbekannte Meldung |

### ERRORCODETEXT

| CODE | TEXT |
| --- | --- |
| 0x01 | Fehler im Videomodul |
| 0x02 | Fehler im Navigationsrechner |
| 0x03 | Fehler Videomodul und im NAV-Rechner |
| 0x04 | CD Software-Fehler |
| 0xFF | unbekannter Fehlerort |
