# KOMBI31.prg

## General

|  |  |
| --- | --- |
| File | KOMBI31.prg |
| Type | PRG |
| Jobs | 10 |
| Tables | 1 |
| Origin | BMW TI-433 Dennert |
| Revision | 2.2 |
| Author | Softing Taubert, BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Kombi E31 |  |  |
| ORIGIN | string | BMW TI-433 Dennert |  |  |
| REVISION | string | 2.02 |  |  |
| AUTHOR | string | Softing Taubert, BMW TI-433 Dennert |  |  |
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

### FG_NR_LESEN

Auslesen der Fahrgestellnummer

_No arguments._

### SELBST_TEST

Anstoss des KOMBI-Selbsttests

_No arguments._

### STEUERN_SELBSTTEST

Anstoss des KOMBI-Selbsttests

_No arguments._

### STATUS_EMPFANGSPUFFER_LESEN

Auslesen des Empfangspuffers Adresse 0x00 bis 0x0B

_No arguments._

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | unbekannter Fehler |
| 0x01 | Datenleitung zum EKM |
| 0x02 | interner Fehlerspeicher |
| 0x03 | interner Hardware-Fehler |
