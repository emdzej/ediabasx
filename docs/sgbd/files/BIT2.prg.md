# BIT2.prg

## General

|  |  |
| --- | --- |
| File | BIT2.prg |
| Type | PRG |
| Jobs | 22 |
| Tables | 4 |
| Origin | BMW TI-431 Rochal |
| Revision | 1.1 |
| Author | BMW EE-430 Paeschke, TI-431 Krueger, TI-431 Holdsclaw, BMW TI-431 Rochal |
| ECU Comment | BIT2 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Basis-Interface Telefon 2 |  |  |
| ORIGIN | string | BMW TI-431 Rochal |  |  |
| REVISION | string | 1.1 |  |  |
| AUTHOR | string | BMW EE-430 Paeschke, TI-431 Krueger, TI-431 Holdsclaw, BMW TI-431 Rochal |  |  |
| COMMENT | string | BIT2 |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### SLEEP_MODE

SG in Sleep-Mode versetzen

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x9B) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x9D) wird aktiviert |

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer BMW-TELEFON

_No arguments._

### IDENT

Ident-Daten fuer das BIT

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### IS_LESEN

Infospeicher lesen

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |

### STATUS_IO_LESEN

verschiedenen Status IO-Ports

_No arguments._

### STATUS_LESEN

verschiedenen SG-Status lesen

_No arguments._

### SELBSTTEST

Durchfuehrung des Selbsttests (Ermittlung Checksum SW)

_No arguments._

### SELBSTTEST_HW

Durchfuehrung des hardwarespez. Selbsttests (Ports)

_No arguments._

### RESET

Durchfuehrung eines resets ca. 2 Sek. nach senden von ACK erfolgt der Reset

_No arguments._

### DIAGNOSE_WEITER

Diagnose aufrecht erhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnosemode beenden

_No arguments._

### IMEI_LESEN

Identifikationsnummer (IMEI) der GSM Engine auslesen

_No arguments._

### RFPI_LESEN

Identifikationsnummer (RFPI) der WDCT-Basis auslesen

_No arguments._

### SBDH_ANMELDEN

Anmelden eines SBDH an das S/E-Geraet

_No arguments._

### SBDH_ALLE_ABMELDEN

Abmelden aller SBDHs vom S/E-Geraet

_No arguments._

### ECHO_CANC_DELAY_SETZEN

Einstellen der Delay-Tap-Anzahl des Echo Cancellation Algorithmus der GSM Engine zur Optimierung des Freisprechbetriebes !!! Nur zu verwenden bei Problemen im Feld !!!

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Anzahl der Delay Taps (0...28h) |

### GERAETECODE_RUECKSETZEN

Ruecksetzen des Geraetecodes, falls der Kunde ihn vergessen hat

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
| 0x01 | Fehler beim Einschalten der GSM Engine / interner Fehler |
| 0x02 | Fehler beim Einschalten der WDCT-Basis / interner Fehler |
| 0x03 | Fehler beim Einschalten von TEL_ON1 / KS Pin 1 nach Masse |
| 0x04 | Fehler beim Ausschalten von TEL_ON1 / KS Pin 1 nach Ubatt |
| 0x05 | Fehler beim Einschalten von TEL_ON2 / KS Pin 5 nach Masse |
| 0x06 | Fehler beim Ausschalten von TEL_ON2 / KS Pin 5 nach Ubatt |
| 0x07 | Fehler beim Einschalten von DSP / KS Pin 47 nach Masse |
| 0x08 | Fehler beim Ausschalten von DSP / KS Pin 47 nach Ubatt |
| 0x09 | Fehler beim Einschalten von MUTE / KS Pin 29 nach Ubatt |
| 0x0A | Fehler beim Ausschalten von MUTE / KS Pin 29 nach Masse |
| 0x10 | Allgemeiner I-Bus-Fehler |
| 0x12 | GSM Pegel |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x20 | Fehler momentan vorhanden |
| 0xXY | unbekannte Fehlerart |
