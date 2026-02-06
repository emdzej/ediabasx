# mrma22.prg

## General

|  |  |
| --- | --- |
| File | mrma22.prg |
| Type | PRG |
| Jobs | 12 |
| Tables | 6 |
| Origin | I+ME Actia R&D ABT, KA |
| Revision | 1.004 |
| Author | I+ME R&D Axel Bäthge, KA |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Steuergeräte MA2.1 und MA2.2 |  |  |
| ORIGIN | string | I+ME Actia R&D ABT, KA |  |  |
| REVISION | string | 1.004 |  |  |
| AUTHOR | string | I+ME R&D Axel Bäthge, KA |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.52 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### IDENT

Fakeantwort notwendig wegen ISTA zur Steuerung SG-Baum

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INIT_FS_LESEN

Initialisierung und k_line offen

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler)

_No arguments._

### INIT_FS_LOESCHEN

Initialisierung und reiz_k_line

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### INIT_LUEFTERTEST

Initialisierung und reiz_k_line

_No arguments._

### LUEFTERTEST

Reizen beenden, Fehlercode lesen

_No arguments._

### INIT_DK_EINSTELLEN

Initialisierung und reiz_k_line

_No arguments._

### ENDE_DK_EINSTELLEN

Initialisierung und reiz_k_line

_No arguments._

### DIAGNOSE_ENDE

Deinitialisierung

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | FEHLER |
| 0x02 | INITIALISIEREN VON ICOM_E FEHLGESCHLAGEN |
| 0x03 | LINIE SETZEN FEHLGESCHLAGEN |
| 0x04 | BLINKCODE LESEN FEHLGESCHLAGEN |
| 0x05 | INITIALISIEREN DER BLINKZAHLERFASSUNG FEHLGESCHLAGEN |
| 0x06 | BEENDEN DER BLINKZAHLERFASSUNG FEHLGESCHLAGEN |
| 0x07 | BEENDEN VON ICOM_E FEHLGESCHLAGEN |
| 0xFF | UNBEKANNTER FEHLER |
| 0xXY | ERROR_UNKNOWN |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x4444 | 4444 - kein Fehler gespeichert | 0 |
| 0x1111 | 1111 - CO-Potentiometer | 0 |
| 0x1122 | 1122 - Hallsignal 2 fehlt | 0 |
| 0x1133 | 1133 - Hallsignal 1 fehlt | 0 |
| 0x1223 | 1223 - Sensor Motortemperatur | 0 |
| 0x1224 | 1224 - Sensor Lufttemperatur | 0 |
| 0x1215 | 1215 - Drosselklappengeber | 0 |
| 0x2342 | 2342 - Signal Lambda-Sonde unrealistisch | 0 |
| 0x2341 | 2341 - Lambda-Regelgrenze erreicht | 0 |
| 0x2343 | 2343 - Anpassungsgrenze für Gemisch errreicht | 0 |
| 0x2344 | 2344 - Masseschluss Lambda-Sonde | 0 |
| 0x2345 | 2345 - Kurzschluss Lambda-Sonde nach Batterie(+) | 0 |
| 0x3333 | 3333 - Lüfteransteuerung | 0 |
| 0x0000 | 0000 - Kein weiterer Fehler gespeichert | 0 |
| 0x9999 | Falscher Fehlercode | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
