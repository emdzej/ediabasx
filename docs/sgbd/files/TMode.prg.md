# TMode.prg

## General

|  |  |
| --- | --- |
| File | TMode.prg |
| Type | PRG |
| Jobs | 25 |
| Tables | 0 |
| Origin | BMW VS-43 Leipold |
| Revision | 1.40 |
| Author | Softing Ta, Softing WT |
| ECU Comment | Erstellung aus TMODE.B1V, Version 1.3 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | TMODE |  |  |
| ORIGIN | string | BMW VS-43 Leipold |  |  |
| REVISION | string | 1.40 |  |  |
| AUTHOR | string | Softing Ta, Softing WT |  |  |
| COMMENT | string | Erstellung aus TMODE.B1V, Version 1.3 |  |  |
| PACKAGE | string | 1.29 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Es wird nur der Interfacetyp festgestellt

_No arguments._

### SETZE_INTERFACE_ZURUECK

Versetzt das Interface in den Initialisierungszustand

_No arguments._

### SETZE_SG_PARAM_ZURUECK

Ruecksetzen der im Interface gespeicherten SG-Parameter Abbruch einer gerade laufenden SG-Kommunikation

_No arguments._

### SETZE_SG_PARAMETER_ALLG

Es werden die fuer die Kommunikation notwendigen Parameter festgelegt

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | binary | Steuergeraete Parameter Inhalt: Konzept BMW-Konzept 1      1 BMW-Konzept 2      2 BMW-Konzept IHK    3 BMW-Konzept DDE    4 BMW-Konzept DS1    5 BMW-Konzept DS2    6 BMW-Konzept ISO 9141 CARB/OBD II 7 Baudrate Reizadresse Wakeup-Zeit in ms 0, wenn kein Wakeup Idle-Zeit in ms Timeout-Zeit In dieser Zeit muss SG antworten Regenerations-Zeit Zeit zwischen den Telegrammen Telegrammende-Zeit Wartezeit nach dem letzte Byte, nach der auf Telegrammende entschieden wird Bytezwischenzeit Checksumme |

### SETZE_SG_PARAMETER_EIDBSS

Einstellen der Kommunikationsparameter nur fuer das EIDBSS und IDBSS

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | binary | Steuergeraete Parameter |

### SETZE_ANTWORTLAENGE

Setzen der Antwortlaenge

| Name | Type | Description |
| --- | --- | --- |
| ANTWORTLAENGE | binary | Antwortlaenge |

### HOLE_KEYBYTES

Dieser Job liest die Keybytes aus einem Konzept 2,3,4 SG aus. Laeuft die Kommunikation mit dem SG noch nicht, wird automatisch mit einem ACK-Telegramm gereizt.

_No arguments._

### SENDE_TELEGRAMM

Mit diesem Job wird ein Telegramm an ein SG geschickt und die Antwort empfangen

| Name | Type | Description |
| --- | --- | --- |
| TELEGRAMM | binary | SG-Anforderungstelegramm |

### SENDE_TELEGR_WIEDERHOLT

Mit diesem Job wird ein Telegramm im frequent Mode an ein SG geschickt

| Name | Type | Description |
| --- | --- | --- |
| TELEGRAMM | binary | SG-Anforderungstelegramm |

### HOLE_ANTWORT_TELEGR

Mit diesem Job werden SG-Antworttelegramme vom Interface abgeholt, nachdem die Anforderung mit dem Job SENDE_TELEGR_WIEDERHOLT gestartet wurde

_No arguments._

### STOPPE_WIEDERH_ANFORDERUNG

Diese Job stoppt die wiederholte SG-Abfrage

_No arguments._

### LESE_INTERFACE_TYP

Dieser Job stellt den Interfacetyp fest

_No arguments._

### LESE_INTERFACE_VERSION

Dieser Job liest die Versionsnummer des Interface

_No arguments._

### LESE_SPANNUNG_KL30

Dieser Job stellt die Batteriespannung fest

_No arguments._

### LESE_SPANNUNG_KL15

Dieser Job stellt die Spannung an der Zuendung fest

_No arguments._

### LESE_PORT

Dieser Job liest das angegebene Port aus

| Name | Type | Description |
| --- | --- | --- |
| PORT | binary | Nummer des Ports EIDBSS: Port  0-5 Analog0 bis Analog5 6 Klemme15 7 Klemme30 8 Jumperfeld |

### SETZE_PORT

Dieser Job setzt das angegebene Port mit dem uebergebenen Wert

| Name | Type | Description |
| --- | --- | --- |
| PORT_WERT | binary | Portnummer und Wert |

### SETZE_PROGRAMMIERSPANNUNG

Mit diesem Job wird die Programmierspannung auf einen bestimmten Wert eingestellt

| Name | Type | Description |
| --- | --- | --- |
| PROGRAMMIERSPANNUNG | binary | Programmierspannung in mV |

### SETZE_SIA_RELAIS

Schliesst das SIA Relais fuer die angegebene Zeit

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | binary | Zeit in ms |

### TESTE_DIAGNOSELEITUNG

Dieser Job testet die Diagnoseleitung

_No arguments._

### HOLE_INTERFACE_STATUS

Dieser Job liest den Interfacestatus aus

_No arguments._

### REICHE_AN_INTERFACE_DURCH

Mit diesem Job werden Daten uninterpretiert an das Interface geschickt. Auch die Antwort wird nicht interpretiert. Wird das BMW-Std-Interface erkannt, dann wird jedem Kommando wird als Kennung fuer das Interface das Byte 0x99 vorangestellt

| Name | Type | Description |
| --- | --- | --- |
| BYTEFOLGE | binary | Bytefolge |

### SETZE_TRAP_MASK_REGISTER

Mit diesem Job wird das Trapmaskregister entsprechend dem uebergebenen Parameter gesetzt

| Name | Type | Description |
| --- | --- | --- |
| TMR_WERT | long | Trapmaskregisterwert |

### LIES_TRAP_MASK_REGISTER

Mit diesem Job wird der aktuelle Wert des TMR ausgelesen

_No arguments._

## Tables

_No tables._
