# OPPS.prg

## General

|  |  |
| --- | --- |
| File | OPPS.prg |
| Type | PRG |
| Jobs | 44 |
| Tables | 0 |
| Origin | BMW VS-40 Rowedder |
| Revision | 1.010 |
| Author | DMC Garcia-Herreros, BMW AG, VS-40 Rowedder, BMW AG VS-43 Kirma |
| ECU Comment | Steuer-SGBD für Spezialfunktionen des OPPS |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Optisches Programmier- und Prüfsystem |  |  |
| ORIGIN | string | BMW VS-40 Rowedder |  |  |
| REVISION | string | 1.010 |  |  |
| AUTHOR | string | DMC Garcia-Herreros, BMW AG, VS-40 Rowedder, BMW AG VS-43 Kirma |  |  |
| COMMENT | string | Steuer-SGBD für Spezialfunktionen des OPPS |  |  |
| PACKAGE | string | 1.42 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

_No description._

_No arguments._

### STATUS_BATT_IGNITION

Ubatt(Kl. 30) ignition (Kl. 15) Werte

_No arguments._

### STATUS_TYP_VER

Typ und Version des Interfaces zurückliefern Wenn ICOM, dann wird "OPPS" zurückgeliefert

_No arguments._

### STEUERN_ROUTER_AUTOCOMM

Setze Router in Auto-Communication Mode

_No arguments._

### STEUERN_ROUTER_MOST

Setze Router in MOST Modus

_No arguments._

### STEUERN_ROUTER_OBD

Setze Router in OBD Mode

_No arguments._

### STEUERN_ROUTER_BYTEFLIGHT

Setze Router in Byteflight Mode

_No arguments._

### STEUERN_ROUTER_MOSTMEAS

Set_Meas_Mode

_No arguments._

### STEUERN_ROUTER_PAR_FREE

veranlaßt eine IFH Instanz, alle Interfaces freizugeben

_No arguments._

### STEUERN_ROUTER_RESET

veranlaßt eine IFH Instanz, alle Interfaces freizugeben

_No arguments._

### STEUERN_ROUTER_PAR_OBD

Parallelbetrieb auf K-Line, alle anderen Interfaces werden freigegeben

_No arguments._

### STEUERN_ROUTER_PAR_MOST

Parallelbetrieb auf K-Line, alle anderen Interfaces werden freigegeben

_No arguments._

### STATUS_ROUTER

liefert den Namen des aktuell eingestellten Bus- interfaces oder "AUTO" für Automatik Modus

_No arguments._

### STEUERN_ROUTER_TRACEON

Router Trace einschalten

_No arguments._

### STEUERN_ROUTER_TRACEOFF

Router command: Windows Ce Trace off

_No arguments._

### STATUS_MOST_NODES

Ads4Most Kommando: Get diagnose nodes der Router muß auf MOST geschaltet sein mit STEUERN_ROUTER_MOST

_No arguments._

### STEUERN_MOST_BUILDREGISTRY

Abfragen der MOST Central Registry  auslösen der Router muß auf MOST geschaltet sein mit STEUERN_ROUTER_MOST

| Name | Type | Description |
| --- | --- | --- |
| CLEARFIRST | int | 0 = Dezentrale Registry im OPPS nicht löschen (default) nur neue Einträge hinzu bzw. geänderte Einträge auf Stand bringen 1 = Dezentrale Registry im OPPS löschen, dann Einträge von NM übernehmen |

### STATUS_MOST_ONOFFTIME

Ads4Most Kommando: Ermitteln MOST On- und Off- Zeiten sowie Zustand MOST Supervisor Achtung: dieser Job funktioniert erst ab OPPS Version 616. der Router muß auf MOST geschaltet sein mit STEUERN_ROUTER_MOST.

_No arguments._

### STEUERN_MOST_MASTER_MODE

CLock und Network Master Funktionalität für MOST schalten der Router muß auf MOST geschaltet sein mit STEUERN_ROUTER_MOST

| Name | Type | Description |
| --- | --- | --- |
| CLOCK_MASTER | int | 0 = Clock Master functionality off, 1 = Clock Master functionality on |
| NETWORK_MASTER | int | 0 = Network Master functionality off, 1 = Network Master functionality on |

### STEUERN_MOST_ASYNCOFF

MOST Asynchronkanal abschalten der Router muß auf MOST geschaltet sein mit STEUERN_ROUTER_MOST

_No arguments._

### STEUERN_MOST_ASYNCON

Ads4Most Kommando: Asynchronkanal einschalten der Router muß auf MOST geschaltet sein mit STEUERN_ROUTER_MOST

_No arguments._

### STEUERN_MOST_ASYNCMINLENGTH

Setze Minimallänge für Asynchronkanal der Router muß auf MOST geschaltet sein mit STEUERN_ROUTER_MOST Default in OPPS Registry: 200d

| Name | Type | Description |
| --- | --- | --- |
| ASYNC_MIN_LENGTH | int | 0 |

### STATUS_MOST_SG_ASYNC

Fragt auf dem MOST die Asynchron-Fähigkeit eines SG ab

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | Diagnoseadresse des abzufragenden SG's |
| REG_UPDATE | int | Veranlasst den Update des Asnc Flags in der dezentralen Registry des OPPS wenn != 0 |

### STEUERN_MOST_NOWAKEUP

MOST Wakeup abschalten der Router muß auf MOST geschaltet sein mit STEUERN_ROUTER_MOST

_No arguments._

### STEUERN_MOST_WAKEUP

Ads4Most Kommando: Wakeup einschalten der Router muß auf MOST geschaltet sein mit STEUERN_ROUTER_MOST

_No arguments._

### STEUERN_MOSTCTRL_LLINTERVALL

Setze den zeitlichen Abstand, in dem die Low Level Telegramme des MOST Kontrollkanals gesendet werden. Der Router muß auf MOST geschaltet sein mit STEUERN_ROUTER_MOST Achtung! dieser Befehl ist erst ab OPPS Version 408 verfügbar!

| Name | Type | Description |
| --- | --- | --- |
| LL_INTERVALL | int | Zeitlicher Abstand der LL-Telegramme in ms |

### STEUERN_MOSTCTRL_LLRETRY

Setze die Zeit, nach der nach einem Fehler ein  Low Level Telegramm des MOST Kontrollkanals wiederholt wird sowie die maximale Anzahl der Wiederholungen. Der Router muß auf MOST geschaltet sein mit STEUERN_ROUTER_MOST Achtung! dieser Befehl ist erst ab OPPS Version 408 verfügbar!

| Name | Type | Description |
| --- | --- | --- |
| LL_RECOVERY | int | Zeit nach der ein LL-Telegramm wiederholt wird in ms |
| LL_RETRIES | int | Anzahl der LL-Telegramm Wiederholungen |

### STEUERN_MOST_DIAG_FBLOCK

Ein und Ausschalten des Diagnose Funktionsblockes im OPPS

| Name | Type | Description |
| --- | --- | --- |
| STAT_DIAG_FB_AKTIV | int | enable function block |

### STATUS_MOST_DIAG_FBLOCK

Prüfen, ob MOST Diagnose FBlock aktiv ist

_No arguments._

### STEUERN_MOST_TESTER_ADRESSE

Setzen der Tester-Diagnoseadresse, die das OPPS auf dem MOST verwendet Ist der Diagnose Funktionsblock aktiv, so wird er umgemeldet Default nach Booten : 0xF5

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | Diagnoseadresse |

### STATUS_THREADS

liefert die Anzahl möglicher parallel laufender IFH-Slaves auf einem Remote Interface

_No arguments._

### STATUS_MOST_REGISTRY

Ads4Most Kommando: GETREGSTATUS (0x95) Holt Informationen über den Zustand der MOST Registry der Router muß auf MOST geschaltet sein mit STEUERN_ROUTER_MOST

_No arguments._

### STEUERN_MOST_TRACEON

Trace für MOST einschalten der Router muß auf MOST geschaltet sein mit STEUERN_ROUTER_MOST

_No arguments._

### STEUERN_MOST_TRACEOFF

Ads4Most Kommando: Windows Ce Trace aus der Router muß auf MOST geschaltet sein mit STEUERN_ROUTER_MOST

_No arguments._

### STEUERN_MOST_ETHTRACE

Ads4Most command: Enables/disables the ethernet trace

| Name | Type | Description |
| --- | --- | --- |
| ENABLE | int | enable eternet trace |
| PORT | int | Target Port |
| IPADDR | string | Target IP Address |

### STATUS_MOST_REGISTERS

Liest Bank 0 .. 3 der Register im MOST Chipsatz aus

_No arguments._

### STATUS_MOST_ACCLOG

liest das Access Log der 8104 nur in speziellen OPPS Testversionen verfügbar!

_No arguments._

### STEUERN_CAN_MODE

Setzen des Umschaltemodus für CAN

| Name | Type | Description |
| --- | --- | --- |
| CAN_MODE | string | "AUTO"   = Umschalten anhand Klemmenstatus Botschaft "CAN"    = immer CAN "K_LINE" = immer K-Line "TRY_CANFIRST" = erst DCAN probieren "TRY_KFIRST"   = erst K-Line probieren |

### STATUS_CAN_MODE

Prüfen des Umschaltemodus für CAN

_No arguments._

### STATUS_CAN_KL_15

Prüft ob Klemmenstatus Botschaft auf CAN empfangen wird

_No arguments._

### STATUS__OBD_KWP2KS

Holt Fehlerstatus KWP2000*

_No arguments._

### STEUERN_DLE_TRACEON

Download Engine Trace einschalten

_No arguments._

### STEUERN_DLE_TRACEOFF

Abschalten Download Engine Trace

_No arguments._

## Tables

_No tables._
