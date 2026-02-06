# DLE.prg

## General

|  |  |
| --- | --- |
| File | DLE.prg |
| Type | PRG |
| Jobs | 14 |
| Tables | 0 |
| Origin | BMW VS-43 Rowedder |
| Revision | 1.000 |
| Author | VS-43 Rowedder |
| ECU Comment | Steuer-SGBD für Download Engine im Interface |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Download Engine |  |  |
| ORIGIN | string | BMW VS-43 Rowedder |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | VS-43 Rowedder |  |  |
| COMMENT | string | Steuer-SGBD für Download Engine im Interface |  |  |
| PACKAGE | string | 1.37 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

_No description._

_No arguments._

### STATUS_DLE_VERSION

Feststellen, ob eine DLE vorhanden ist und Versionsstring zurückliefern Diese Funktion ist die Einzige, die mit einem Interface ohne DLE aufgerufen werden darf, alle Anderen bewirken ohne DLE einen Abbruch von EDIABAS

_No arguments._

### STEUERN_DLE_RESET

DLE Rücksetzen: Senden und DNMT/TP stoppen, Ringpuffer löschen

_No arguments._

### STEUERN_TP_INTERVALL

Intervall für Tester Present setzen

| Name | Type | Description |
| --- | --- | --- |
| INTERVALL | int | zeitlicher Abstand zwischen denn Tester Present Telegrammen in ms |

### STEUERN_DLE_HEADER

Headerinformationen setzen

| Name | Type | Description |
| --- | --- | --- |
| SOURCE | int | Adresse des Testers |
| LENGTH | int | Programmierblocklänge /mit/ Service-ID, /ohne/ Prüfsumme |

### STEUERN_DLE_IOANTWORT

Vergleichstelegramm  setzen

| Name | Type | Description |
| --- | --- | --- |
| IOANTWORT | string | Antwort, die das SG sendet, wenn Daten akzeptiert sind |
| MASKE | string | Maske, die angibt, welche Bits der IOANTWORT mit der SG Antwort verglichen werden |

### STEUERN_DLE_TP

Tester Present ein / ausschalten

| Name | Type | Description |
| --- | --- | --- |
| ENABLE | int | 1 = DNMT senden, TP zyklisch senden starten 0 = TP zyklisch senden stoppen, ENMT senden |

### STEUERN_DLE_LADEN

Daten in den Ringpuffer laden

| Name | Type | Description |
| --- | --- | --- |
| PUFFER | binary | Daten für den Ringpuffer |

### STEUERN_DLE_BUFFERCLEAR

Ringpuffer löschen

_No arguments._

### STATUS_DLE

DLE Status holen

_No arguments._

### WAIT_FOR_DLE

Warten bis die DLE alle Blocks geschrieben hat

_No arguments._

### STEUERN_DLE_ODP

Datenverbindung für DLE II öffnen

_No arguments._

### STEUERN_DLE_SID

Service ID für DLE II setzen Der Service ID String wird von der DLE II automatisch Header und Daten eingefügt

| Name | Type | Description |
| --- | --- | --- |
| SID | string | Service ID |

## Tables

_No tables._
