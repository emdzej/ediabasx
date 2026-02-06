# BIT.prg

## General

|  |  |
| --- | --- |
| File | BIT.prg |
| Type | PRG |
| Jobs | 17 |
| Tables | 3 |
| Origin | BMW TI-431 Rochal |
| Revision | 1.3 |
| Author | BMW TI-433 Spoljarec, BMW TI-431 Rochal |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Basis-Interface Telefon |  |  |
| ORIGIN | string | BMW TI-431 Rochal |  |  |
| REVISION | string | 1.3 |  |  |
| AUTHOR | string | BMW TI-433 Spoljarec, BMW TI-431 Rochal |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

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

### STEUERN_DIGITAL

Ports im Bit setzen

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL | int | 00 -> Ports, 01 -> Freisprechlautstaerke |
| DATA1 | int | Auswahl 00 -> diverse Prots, 01 -> Freisprechlautstaerke |
| DATA2 | int | Auswahl 00 -> diverse Prots, 01 -> Freisprechlautstaerke |

### SELBSTTEST

Durchfuehrung des Selbsttests (Ermittlung Checksum SW)

_No arguments._

### SELBSTTEST_HW

Durchfuehrung des hardwarespez. Selbsttests (Ports)

_No arguments._

### SLEEP_MODE

versetzen des SGs in den sleepmode ca. 2 Sek. nach senden von ACK geht das SG in dne Power down Aufwecken nur durch einen Reset

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

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Fehler beim Einschalten von SUPPLY / KS Pin 38 nach Masse |
| 0x02 | Fehler beim Ausschalten von SUPPLY / KS Pin 38 nach Ubatt |
| 0x03 | Fehler beim Einschalten von IGNITION / KS Pin 39 nach Masse |
| 0x04 | Fehler beim Ausschalten von IGNITION / KS Pin 39 nach Ubatt |
| 0x05 | Fehler beim Einschalten von CHARGE / KS Pin 37 nach Masse |
| 0x06 | Fehler beim Ausschalten von CHARGE / KS Pin 37 nach Ubatt |
| 0x07 | Fehler beim Einschalten von DSP / KS Pin 5 nach Masse |
| 0x08 | Fehler beim Ausschalten von DPS / KS Pin 5 nach Ubatt |
| 0x09 | Fehler beim Einschalten von MUTE / KS Pin 4 nach Ubatt |
| 0x0A | Fehler beim Ausschalten von MUTE / KS Pin 4 nach Masse |
| 0x10 | Allgemeiner I-Bus-Fehler |
| 0x11 | Akku Ladezustand |
| 0x12 | GSM Pegel |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x20 | Fehler momentan vorhanden |
| 0xXY | unbekannte Fehlerart |
