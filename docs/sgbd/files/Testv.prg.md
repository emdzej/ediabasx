# Testv.prg

## General

|  |  |
| --- | --- |
| File | Testv.prg |
| Type | PRG |
| Jobs | 5 |
| Tables | 2 |
| Origin | softing.sag.Os |
| Revision | 2.0 |
| Author | softing.sag.Os |
| ECU Comment | Beschreibungsdatei OHNE Zugriff auf das Interface |

## Info

_No INFO results._

## Jobs

### initialisierung

Initialisierung

_No arguments._

### IDENT

Ermittlung des Identifikations-Strings

_No arguments._

### CHECK

Darstellung aller Ergebnistypen

| Name | Type | Description |
| --- | --- | --- |
| WERT | string | Basiswert |

### BINPARA

Verarbeitung binaerer Parameterdaten

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | binary | binaere Parameterdaten |

### WAIT

Warten

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | unsigned int | Anzahl zu wartender Sekunden |

## Tables

### JOBSTATUS

| STATUS | ERGEBNIS |
| --- | --- |
| Ok | OKAY |
| Para | ERROR_PARAMETER |
| Tab | ERROR_TABELLE |

### IDENTSTRING

| STRING | STRING1 | STRING2 | STRING3 |
| --- | --- | --- | --- |
| Info | IDENT |  is |  ready. |
