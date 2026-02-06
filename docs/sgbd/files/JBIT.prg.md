# JBIT.prg

## General

|  |  |
| --- | --- |
| File | JBIT.prg |
| Type | PRG |
| Jobs | 13 |
| Tables | 3 |
| Origin | BMW TI-431 Rochal |
| Revision | 1.1 |
| Author | BMW EE-43 Groene, BMW TI-431 Krueger, S&S E.Genseleiter, BMW TI-431 Rochal |
| ECU Comment | JBIT |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | JBIT |  |  |
| ORIGIN | string | BMW TI-431 Rochal |  |  |
| REVISION | string | 1.1 |  |  |
| AUTHOR | string | BMW EE-43 Groene, BMW TI-431 Krueger, S&S E.Genseleiter, BMW TI-431 Rochal |  |  |
| COMMENT | string | JBIT |  |  |
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

Ident-Daten fuer das JBIT

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

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

### STEUERN_DIGITAL

Ports im JBIT setzen

| Name | Type | Description |
| --- | --- | --- |
| SWITCH_MOBILE_PHONE | int | switch mobile phone off (00h) or on (01h) |
| TALK_VOLUME | int | talking volume: 0...11 |
| RING_VOLUME | int | ringing volume: 0...11 |
| RAD_MUTE | int | radio mute signal off (00h) or on (01h) |
| DSP_TEL_ON | int | TEL_ON signal for DSP off (00h) or on (01h) |

### SELBSTTEST

Durchfuehrung des Selbsttests (Ermittlung Checksum SW)

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
| 0x00 | Fehler in der Spannungsversorgung |
| 0x01 | Fehler EEPROM Checksumme |
| 0x02 | Fehler Checksumme I-bus Telegramm |
| 0x03 | Ausserhalb des Temperaturbereich fuer laden |
| 0xFF | unbekannte Fehler Nummer |
