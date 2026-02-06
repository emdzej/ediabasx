# icom_p.prg

## General

|  |  |
| --- | --- |
| File | icom_p.prg |
| Type | PRG |
| Jobs | 82 |
| Tables | 20 |
| Origin | BMW TI-538 Rothenberger |
| Revision | 3.020 |
| Author | I+ME_ACTIA SW_Entwicklung Stephan_Keilholz, ACTIA_I+ME SW_Entwi |
| ECU Comment | steuern_trace_retrieve und steuern_trace_retrieve_all mit Asynchrone, Zusammenführung ICOMP und ICOMP Next |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Steuerdatei für Diagnoseinterface ICOMP und ICOMP Next |  |  |
| ORIGIN | string | BMW TI-538 Rothenberger |  |  |
| REVISION | string | 3.020 |  |  |
| AUTHOR | string | I+ME_ACTIA SW_Entwicklung Stephan_Keilholz, ACTIA_I+ME SW_Entwi |  |  |
| COMMENT | string | steuern_trace_retrieve und steuern_trace_retrieve_all mit Asynchrone, Zusammenführung ICOMP und ICOMP Next |  |  |
| PACKAGE | string | 1.990 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### STATUS_BATT_IGNITION

Ubatt(Kl. 30) ignition (Kl. 15) Werte

_No arguments._

### STATUS_TYP_VER

Ubatt(Kl. 30) ignition (Kl. 15) Werte

_No arguments._

### STATUS_CAN_KL_15

Prüft ob Klemmenstatus Botschaft auf CAN empfangen wird

_No arguments._

### STEUERN_TRIGGER_AUTOASSIGN_BROADCAST

Erzwingt das neu Senden der Autoassign Statusbotschaft via HTTP

_No arguments._

### STEUERN_BEEP

Steuert den Summer mit der angegebenen Frequenz und Dauer an gültig nur bei ICOMP Next

| Name | Type | Description |
| --- | --- | --- |
| FREQUENCE | int | Frequenz mit der der Summer angesteuert wird Gültiger Bereich: 100-10000 |
| DURATION | int | Dauer in ms für die der Summer angesteuert wird Gültiger Bereich: 10-5000 |

### STEUERN_MELODY

Spilet eine Melody mithilfe des Summers gültig nur bei ICOMP Next

| Name | Type | Description |
| --- | --- | --- |
| MELODY | int | Nummer der zu spielenden Melody (1..5) |

### STEUERN_HSFZ_ENABLE

Einschalten des HSFZ

_No arguments._

### STEUERN_HSFZ_DISABLE

Ausschalten des HSFZ

_No arguments._

### STATUS_HSFZ_GET_STATUS

STATUS des HSFZ

_No arguments._

### STATUS_HSFZ_GET_STATUS_NEU

STATUS des HSFZ

| Name | Type | Description |
| --- | --- | --- |
| HSFZ_WORKAROUND | int | HSFZ_Workaround bei Status BUSY enhaelt schaltbaren Workaround: BUSY-->Disable--> Pause 1s --> Enable -->Pause 5s --> Status nochmal auslesen "1"    	=  aktiv Default	=  nicht aktiv |

### STATUS_HSFZ_GET_STATUS_DETAIL

erweiterter STATUS des HSFZ

_No arguments._

### STATUS_GET_CANBRIDGE_STATUS

Abfragen des HSFZ-CANBridge Status

_No arguments._

### STEUERN_SET_CANBRIDGE_STATUS

HsfzCanBridge  einschalten/ausschalten

| Name | Type | Description |
| --- | --- | --- |
| CANBRIDGE_STATUS | string | "ON"   = einschalten "OFF"  = ausschalten |
| CANBRIDGE_PERSISTENT | string | "P"   = persistent speichern |

### STEUERN_RESTART_HSFZ_STR

Restart HSFZ Start Routine

| Name | Type | Description |
| --- | --- | --- |
| DEACT_TIME_MS | int | Zeit, die die Aktivierungsleitung auf 0 gezogen wird in Millisekunden, Default = 1000 |
| ROUTING_MODE | string | "ROUTING" (Default) \| "DIRECT" |

### STEUERN_RESTART_HSFZ_RRR

Restart HSFZ Request Routine Results

_No arguments._

### STEUERN_CREATE_ECU_ROUTES_STR

CreateEcuRoutes Start Routine Anlegen der Routen für ein Steuergerät

| Name | Type | Description |
| --- | --- | --- |
| SG_DIAG_ADDRESS | string | Diagnoseadresse des Steuergeräts (z.B. "0x63") |
| SG_IP_ADDRESS | string | IP-Adresse des Steuergeräts (z.B. "169.254.10.99") |

### STEUERN_CREATE_ECU_ROUTES_RRR

Restart HSFZ Request Routine Results

_No arguments._

### STEUERN_SWITCH_ACT_LINE_STR

SwitchActLine Start Routine Ethernet Aktivierungsleitung schalten

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Modus: "OFF" \| "ON" \| "PULSE" |
| PULSE_DURATION_MS | int | Ausschaltzeit in ms wenn MODE == "PULSE" |

### STEUERN_SWITCH_ACT_LINE_STP

SwitchActLine Stop Routine

_No arguments._

### STEUERN_SWITCH_ACT_LINE_RRR

SwitchActLine Request Routine Results

_No arguments._

### STEUERN_SWITCH_LINK_STR

SwitchActLine Start Routine Ethernet Aktivierungsleitung schalten

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Modus: "OFF" \| "ON" \| "PULSE" |
| PULSE_DURATION_MS | int | Ausschaltzeit in ms wenn MODE == "PULSE" |

### STEUERN_SWITCH_LINK_STP

SwitchActLine Stop Routine

_No arguments._

### STEUERN_SWITCH_LINK_RRR

SwitchActLine Request Routine Results

_No arguments._

### STEUERN_INQ_HSFZ_GW_STR

Inquire HSFZ GatewayStart Routine

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT_MS | int | Zeit, die auf eine Antwort vom Gateway gewartet wird in Millisekunden, Default = 1000, Max = 2000 |
| RETRIES | int | Anzahl der Wiederholungen, wenn keine Antwort vom Gateway kommt Default = 2, Max. = 255 |

### STEUERN_INQ_HSFZ_GW_STP

Inquire HSFZ Gateway Stop Routine

_No arguments._

### STEUERN_INQ_HSFZ_GW_RRR

Inquire HSFZ Gateway Request Routine Results

_No arguments._

### STEUERN_CHECK_URL_STR

Inquire HSFZ GatewayStart Routine

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT_S | int | Zeit, die auf eine Antwort vom Server gewartet wird in Sekunden, Default = 30, Min = 10, Max = 2000 |
| RETRIES | int | Anzahl der Wiederholungen, wenn keine Antwort vom Server kommt Default = 0, Max. = 255 Da bereits Retries auf TCP - Ebene erfolgen, sind Retries auf HTTP Ebene wenig erfolgversprechend. Daher Default = 0 |
| LENGTH | int | Laenge des URL - Strings, max. 1200 |
| URL | string | URL - String, max. 1200 Zeichen, nullterminiert |

### STEUERN_CHECK_URL_STP

Inquire HSFZ Gateway Stop Routine

_No arguments._

### STEUERN_CHECK_URL_RRR

Inquire HSFZ Gateway Request Routine Results

_No arguments._

### STEUERN_PIN_CONTROL_STR

PinControl Start Routine Einstellen der gewünschten Pullup-Werte

| Name | Type | Description |
| --- | --- | --- |
| PUP7 | int | Pullup in Ohm für Pin 7 der OBD-Dose. 0 = kein Pullup (0,500,1000) Default = 0 |
| PUP8 | int | Pullup in Ohm für Pin 8 der OBD-Dose. 0 = kein Pullup (0,500,1000) |

### STEUERN_PIN_CONTROL_RRR

Pin Control Request Results Routine

_No arguments._

### STATUS_GET_VIN

Auslesen der im ICOM gesetzten VIN

_No arguments._

### STEUERN_SET_VIN

Setzen der VIN im ICOM

| Name | Type | Description |
| --- | --- | --- |
| VIN | string | VIN des Fahrzeuges |

### STEUERN_VERIFY_VIN

Verifizieren einer VIN mit der im ICOM gesetzten

| Name | Type | Description |
| --- | --- | --- |
| VIN | string | VIN zum Vergleichen |
| USEACTUAL | string | optional 0=VIN neu aus dem Fahrzeug auslesen und dann Vergleichen (default) 1=VIN mit der bereits ausgelesen VIN Vergleichen |

### STEUERN_VIN_XML_ERASE

Löschen der vom Autoassign generierten VIN-XML Files auf den Servern

| Name | Type | Description |
| --- | --- | --- |
| VIN | string | Zu löschende VIN |

### STATUS_GET_VERSIONS

Auslesen der Image Versionen des ICOM

_No arguments._

### STATUS_GET_CONFIG

Auslesen der Konfiguration des ICOM, erzeugt eine variable Liste von Ergebnissen

_No arguments._

### STATUS_GET_CONFIG_DETAIL

Auslesen eines bestimmten Konfiguartionsparameters

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | string | Auszulesender Konfiguartionsparameter (siehe dazu Ergebniss von STATUS_GET_CONFIG) |

### STEUERN_START_NET_CONFIG

Einlesen der Konfiguration über das Netzwerk

| Name | Type | Description |
| --- | --- | --- |
| URL | string | Name der Netzwerkfreigabe Format: username=xx,password=xx,workgroup=xx //ServerIP oder Servername/Freigabename/Dateiname workgroup (Domäne des Users) ist optional |

### STEUERN_UPDATE

Softwareupdate des ICOM-P über das Netzwerk

| Name | Type | Description |
| --- | --- | --- |
| NAME | string | Name der Updatedatei mit der Netzwerkfreigabe Format: username=xx,password=xx,workgroup=xx //ServerIP oder Servername/Freigabename/Dateiname workgroup (Domäne des Users) ist optional |
| FORCE | string | Erzwingt das Update (mögliche Werte "F" oder "1") Versionsinformationen werden ignoriert (für Updates von Stand auf Stand) |

### STATUS_GET_IWCONFIG

Führt ein iwconfig auf dem ICOM aus und liefert dessen Ergebnisse. Es wird eine variable Liste von Ergebnissen erzeugt.

_No arguments._

### STEUERN_MANUAL_ROAMING

Erzwingen eines WLAN-Roaming vorganges

_No arguments._

### STEUERN_TRACEON

ICOM CAN/HSFZ Trace einschalten

_No arguments._

### STEUERN_TRACEOFF

Abschalten CAN/HSFZ Trace

_No arguments._

### STATUS_TRACE_STATE

Lesen von Trace Informationen

_No arguments._

### STEUERN_TRACE_BOOT_ENABLE

Automatisches tracen nach Neustart des ICOMs

| Name | Type | Description |
| --- | --- | --- |
| ENABLE_TRACE | string | "ON"   = einschalten "OFF"  = ausschalten |

### STATUS_TRACE_GET_CONFIG

Lesen der Trace-Konfiguration

_No arguments._

### STEUERN_DCAN_TRACE

D-CAN Trace einschalten/ausschalten

| Name | Type | Description |
| --- | --- | --- |
| DCAN_TRACE | string | "ON"   = einschalten "OFF"  = ausschalten |
| DCAN_PERSISTENT | string | "P"   = persistent speichern |

### STEUERN_KL15_TRACE

KL15 (0x130) Trace einschalten/ausschalten

| Name | Type | Description |
| --- | --- | --- |
| KL15_TRACE | string | "ON"   = einschalten "OFF"  = ausschalten |
| KL15_PERSISTENT | string | "P"   = persistent speichern |

### STEUERN_ETHERNET_TRACE

ETHERNET Trace einschalten/ausschalten

| Name | Type | Description |
| --- | --- | --- |
| ETHERNET_TRACE | string | "OFF"  = Ethernet Trace ausschalten "VehicleSide"  = ETHERNET Trace für Fahrzeugseite (HSFZ) einschalten "FactorySide"  = ETHERNET Trace für Werksseite (WLAN/LAN) einschalten "BothSides"    = ETHERNET Trace für beide Seiten einschalten |
| ETHERNET_PERSISTENT | string | "P"   = persistent speichern |

### STEUERN_UDP_TRACE

UDP Logging einschalten/ausschalten

| Name | Type | Description |
| --- | --- | --- |
| UDP_TRACE | string | "ON"   = einschalten "OFF"  = ausschalten |
| UDP_PERSISTENT | string | "P"   = persistent speichern |

### STEUERN_ARP_TRACE

ARP Logging einschalten/ausschalten

| Name | Type | Description |
| --- | --- | --- |
| ARP_TRACE | string | "ON"   = einschalten "OFF"  = ausschalten |
| ARP_PERSISTENT | string | "P"   = persistent speichern |

### STEUERN_LS_TRACE

Link Status Logging einschalten/ausschalten

| Name | Type | Description |
| --- | --- | --- |
| LS_TRACE | string | "ON"   = einschalten "OFF"  = ausschalten |
| LS_PERSISTENT | string | "P"   = persistent speichern |

### STEUERN_WLANPING_TRACE

Link Status Logging einschalten/ausschalten

| Name | Type | Description |
| --- | --- | --- |
| WLANPING_TRACE | string | "ON"   = einschalten "OFF"  = ausschalten |
| WLANPING_PERSISTENT | string | "P"   = persistent speichern |

### STEUERN_IFHENET_TRACE

IFH ETHERNET Logging einschalten/ausschalten

| Name | Type | Description |
| --- | --- | --- |
| IFHENET_TRACE | string | "ON"   = einschalten "OFF"  = ausschalten |
| IFHENET_PERSISTENT | string | "P"   = persistent speichern |

### STEUERN_TRACE_TARGET

Ablageziel der Tracedateien festlegen

| Name | Type | Description |
| --- | --- | --- |
| TARGET | string | "RAM"     = in den RAM (/tmp --> nur temporär) "MassInt" = auf den internen Massenspeicher "MassExt" = auf einen externen Massenspeicher (z.B. USB-Stick) "Remote"  = auf eine Netzwerkfreigabe |
| TARGET_PERSISTENT | string | "P"   = persistent speichern |

### STEUERN_TRACE_FILENAMEBASE

Variable Basis des Dateinames der Tracedateien setzen

| Name | Type | Description |
| --- | --- | --- |
| FILENAMEBASE | string | <variable Basis> des Dateinames der Tracedateien <VIN/DATE>.<variable Basis>.<SerNumICOM>.<NUM>.<LOG/PCAP> |
| FNB_PERSISTENT | string | "P"   = persistent speichern |

### STEUERN_TRACE_REMOTEURL

URL-Freigabe für die Ablage der Tracedaten (remote/offline)

| Name | Type | Description |
| --- | --- | --- |
| REMOTEURL | string | Name der Netzwerkfreigabe Format: username=xx,password=xx,workgroup=xx //ServerIP oder Servername/Freigabename workgroup (Domäne des Users) ist optional |
| URL_PERSISTENT | string | "P"   = persistent speichern |

### STEUERN_TRACE_DCANSIZE

Maximale Grösse der D-CAN Tracedateien auf dem ICOM setzen

| Name | Type | Description |
| --- | --- | --- |
| DCANSIZE | string | Maximale Grösse in Bytes / Prozent (des Gesamtspeichers) |
| DS_PERSISTENT | string | "P"   = persistent speichern |

### STEUERN_TRACE_ETHERNETSIZE

Maximale Grösse der ETHERNET Tracedateien auf dem ICOM setzen

| Name | Type | Description |
| --- | --- | --- |
| ETHERNETSIZE | string | Maximale Gösse in Bytes oder Prozent (des Gesamtspeichers) Beispiele: |
| ES_PERSISTENT | string | "P"   = persistent speichern |

### STEUERN_TRACE_RETRIEVE

Tracedatei vom ICOM auf REMOTEURL übertragen

| Name | Type | Description |
| --- | --- | --- |
| NAME | string | Name der Tracedatei auf REMOTEURL |
| FILTER | string | Name der Tracedatei(en), die abgeholt werden |
| RESTART | int | 0   = Trace nach dem Abholen nicht neu starten 1   = Trace nach dem Abholen neu starten |
| PACKED | int | 0   = Tracedatei nicht packen 1   = Tracedatei packen |
| ASYNCHRON | int | gültig nur bei ICOMP Next 0   = Warten, bis Trace komplett abgeholt (Default) 1   = Befehl kehrt nach dem mounten des shares zurück |

### STEUERN_TRACE_RETRIEVE_ALL

gesamte Tracedaten vom ICOM auf REMOTEURL übertragen

| Name | Type | Description |
| --- | --- | --- |
| NAME | string | Name der Tracedatei auf REMOTEURL |
| RESTART | int | 0   = Trace nach dem Abholen nicht neu starten 1   = Trace nach dem Abholen neu starten |
| PACKED | int | 0   = Tracedatei nicht packen 1   = Tracedatei packen |
| ASYNCHRON | int | gültig nur bei ICOMP Next 0   = Warten, bis Trace komplett abgeholt (Default) 1   = Befehl kehrt nach dem mounten des shares zurück |

### STEUERN_TRACE_ERASE

Löschen aller Tracefiles auf dem ICOM

| Name | Type | Description |
| --- | --- | --- |
| ERASE_TYPE | string | "CAN"  = D-CAN Trace löschen "ETH"  = ETHERNET Trace löschen "BOTH" = D-CAN und ETHERNET Trace löschen (default) |

### STEUERN_DEBUGMODE

ICOM DEBUGMODE einschalten

| Name | Type | Description |
| --- | --- | --- |
| OPTIONS | string | "S"  = zusätzliche Logs für den Startvorgang einschalten "K"  = zusätzliche Logs für die Kommunikation einschalten "P"  = Debugmode für 24 Stunden persistent einschalten "W"  = zusätzliche Logs für WLAN, gültig nur bei ICOMP Next "L"  = Lightmodus, gültig nur bei ICOMP Next  "DISABLE"  = Debugmode ausschalten (keine Zusatzoptionen möglich) |
| LEVEL | unsigned long | Optional: Debuglevel |

### STEUERN_DEBUGMODE_GETFILES

Auslesen der Debugmode Dateien über das Netzwerk

| Name | Type | Description |
| --- | --- | --- |
| NAME | string | Name der Netzwerkfreigabe Format: username=xx,password=xx,workgroup=xx //ServerIP oder Servername/Freigabename workgroup (Domäne des Users) ist optional |
| REBOOT | int | 0   = ICOM nach dem Abholen der Files nicht neu starten (default) 1   = ICOM nach dem Abholen der Files neu starten |

### STEUERN_DEBUGMODE_ERASEFILES

Löschen der Debugmode Dateien auf der SD Karte

_No arguments._

### STEUERN_REBOOT

Neustart des ICOM_P

_No arguments._

### STEUERN_SWITCH_OFF

Ausschalten des ICOM_P

| Name | Type | Description |
| --- | --- | --- |
| TIME | unsigned long | Zeit in ms, die bis zum Ausschalten gewartet wird |

### STEUERN_CONSTANT_CURRENT

Ein/Ausschalten des Konstantstrommodus

| Name | Type | Description |
| --- | --- | --- |
| CCMODE | string | "ON"   = Konstantstrommodus einschalten "OFF"  = Konstantstrommodus ausschalten |

### STATUS_CONSTANT_CURRENT

Zustand des Konstantstrommodus

_No arguments._

### STEUERN_SEND_WAKE_UP

Senden eine WakeUp-Pulses auf OBD Pin 8 (HSFZ-Aktivierungsleitung) Unterstützung des Fahrzeuges vorausgesetzt

| Name | Type | Description |
| --- | --- | --- |
| DELAY_TIME | string | Wartezeit bis zur steigenden Flanke (wake_up) in ms(Default= 1000ms) Falls HSFZ_ACTIVATE nicht angegeben wird, kann hier durch angeben von ON oder OFF die HSFZ Aktivierung mit der Default-Zeit gesteuert werden. |
| HSFZ_ACTIVATE | string | ON =HSFZ aktivieren nach Wake_Up (Default) OFF=HSFZ deaktivieren nach Wake_Up |

### STEUERN_ON_SET_CAN_ID

Einschalten des ICOM_P durch ein bestimmtes CAN Telegramm

| Name | Type | Description |
| --- | --- | --- |
| ENABLE | string | ON = Einschalten der Aufweckfunktion OFF = Ausschalten der Aufweckfunktion Die überwachte CAN-Botschaft wird durch eine Mask und einen Code beschrieben Hier definiert Mask die Positonen der relevanten Bits in der Id bzw. den Nutzdaten Eine 1 bedeutet das Bit ist relevant, eine 0 das Bit ist irrelevant Code beschreibt den Zustand der relevanten Bits Als Beispiel würde bei einer Mask von 0x7ff und einem Code von 0x130 für den CAN-Identifier nur auf den Frame 0x130 reagiert. Ändert man die Mask auf 0x7f0 würde auf den Identifier- Bereich 0x130-013f reagiert. |
| CANID_MASK | unsigned long | Mask des CAN Identifieres vom Aufwecktelegramms als Dezimal- oder Hexadezimalwert z.B.: 2047 oder 0x7ff |
| CANID_CODE | unsigned long | Code des CAN Identifieres vom Aufwecktelegramm als Dezimal- oder Hexadezimalwert z.B. 304 oder 0x130 |
| CANDATA_MASK | string | Mask der CAN Daten des Aufwecktelegramms als Hexdezimalstring z.B.: FFFF   : nur die 1. beiden Bytes sind relevant 0000FF : nur das 3. Byte ist relevant F0     : nur das obere Nibble im 1. Byte ist relevant |
| CANDATA_CODE | string | Code der CAN Daten des Aufwecktelegramms als Hexdezimalstring z.B.: (bezogen auf die als Bespiel bei CANDATA_MASK genannten Werte) 0123   : in den 1. beiden Bytes muß 0123 stehen 000045 : im 3. Byte muß 45 stehen 60     : im 1. Byte muß ein Wert zwischen 60 und 6F stehen |

### STEUERN_SET_CAN_IDLE_TIME

Ausschalten des ICOM_P wenn keine CAN Kommunikation vorhanden ist

| Name | Type | Description |
| --- | --- | --- |
| T_IDLE | unsigned long | 0 = CAN Idle-Überwachung aus >0 = CAN Idle-Überwachung ein (Zeit in Sekunden, mindestens 60) Das ICOM_P schläft ein, wenn CAN Kommunikation erkannt worden ist und diese dann für eine Zeit > T_Idle ausbleibt |
| T_SHUTDOWN | unsigned long | Zeit in Sekunden, nach der das ICOM_P einschläft, wenn keine CAN Kommunikation erkannt worden ist T_SHUTDOWN muss grösser T_IDLE sein |
| CHECK_CAN_FRAME | string | ON = CAN-Botschaft wird überwacht OFF = CAN-Botschaft wird nicht überwacht Die überwachte CAN-Botschaft wird durch eine Mask und einen Code beschrieben Hier definiert Mask die Positonen der relevanten Bits in der Id bzw. den Nutzdaten Eine 1 bedeutet das Bit ist relevant, eine 0 das Bit ist irrelevant Code beschreibt den Zustand der relevanten Bits Als Beispiel würde bei einer Mask von 0x7ff und einem Code von 0x130 für den CAN-Identifier nur auf den Frame 0x130 reagiert. Ändert man die Mask auf 0x7f0 würde auf den Identifier- Bereich 0x130-013f reagiert. |
| CANID_MASK | unsigned long | Mask des CAN-Identifieres des zu überwachenden Telegramms als Dezimal- oder Hexadezimalwert z.B.: 2047 oder 0x7ff |
| CANID_CODE | unsigned long | Code des CAN-Identifieres des zu überwachenden Telegramms als Dezimal- oder Hexadezimalwert z.B. 304 oder 0x130 |
| CANDATA_MASK | string | Mask der CAN-Daten des zu überwachenden Telegramms als Hexdezimalstring z.B.: FFFF   : nur die 1. beiden Bytes sind relevant 0000FF : nur das 3. Byte ist relevant F0     : nur das obere Nibble im 1. Byte ist relevant |
| CANDATA_CODE | string | Code der CAN-Daten des zu überwachenden Telegramms als Hexdezimalstring z.B.: (bezogen auf die als Bespiel bei CANDATA_MASK genannten Werte) 0123   : in den 1. beiden Bytes muß 0123 stehen 000045 : im 3. Byte muß 45 stehen 60     : im 1. Byte muß ein Wert zwischen 60 und 6F stehen |
| NON_PERSISTENT | string | "N"   = nicht persistent speichern, gültig nur bei ICOMP Next |

### STEUERN_ENABLE_ACC_WAKEUP

Einschalten des ICOM_P durch den Bewegungssensor

| Name | Type | Description |
| --- | --- | --- |
| ENABLE | string | ON = ICOM_P kann durch den Bewegungssenor aufgeweckt werden OFF = ICOM_P kann nicht durch den Bewegungssenor aufgeweckt werden |
| SENSIBILITY | int | 1..255 = Empfindlichkeit des Bewegungssenors |

### STEUERN_WAKEUP_TIMER

Setzt die Zeit nach der das ICOMP Next wieder erwacht

| Name | Type | Description |
| --- | --- | --- |
| TIME | string | Zeit in s, nach der das ICOMP Next wieder erwacht,0 schaltet das zeitgesteuerte Aufwachen aus |
| PERSISTENT | string | (Optional) P = ICOM-P Next wacht immer wieder auf nicht vorhanden oder N = zeitgesteuertes Aufwachen wird nur einmal ausgeführt |

### STEUERN_FEHLERSPEICHER_LESEN

Auslesen des Fehlerspeichers des ICOMs

| Name | Type | Description |
| --- | --- | --- |
| OPTIONS | string | S = Zeigt zusätzlich die Softrebootaufrufzeiten an |

### STEUERN_FEHLERSPEICHER_LOESCHEN

Löscht den Fehlerspeichers des ICOMs

_No arguments._

### STEUERN_WAKE_ON_EX_TRIGGER

gültig nur bei ICOMP Next mit Funkmodul Wakeup über Funkmodul Ein- Ausschalten

| Name | Type | Description |
| --- | --- | --- |
| OPTIONS | string | ON =Lauschen auf externen Trigger ein OFF=Lauschen auf externen Trigger aus |
| MODE | string | V =Überprüfen auf VIN (Default) I =Überprüfen auf IP B =Aufwachen bei Broadcast |
| PERSISTENT | string | (Optional) P = Einstellung bleibt nach Neustart erhalten nicht vorhanden oder N = Einstellung wird nur einmal ausgeführt |

### STEUERN_WAKE_ON_EX_TRIGGER_FREQ

gültig nur bei ICOMP Next mit Funkmodul Benutzte Frequenz des Funkmoduls

| Name | Type | Description |
| --- | --- | --- |
| FREQUENCE | int | 1 =433,139 Mhz 2 =433,439 Mhz 3 =433,739 Mhz 4 =434,038 Mhz 5 =434,339 Mhz 6 =434,639 Mhz |

### STEUERN_SEND_EX_TRIGGER

gültig nur bei ICOMP Next mit Funkmodul Senden eines Aufweckkommandos

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT | int | Zeit in ms, die auf die Bestätigung gewartet wird |
| REPEAT | int | Anzahl der Wiederholungen, wenn keine Bestätigung empfangen wird |
| PING | int | Anzahl der Netzwerk Pings, die gesendet werden sollen, wenn kein Ack ankommt |
| FREQUENCE | int | Benutzte Frequenz für das Aufweckkommando 1 =433,139 Mhz 2 =433,439 Mhz 3 =433,739 Mhz 4 =434,038 Mhz 5 =434,339 Mhz 6 =434,639 Mhz |
| PATH | string | Verzeichnis, in dem die Übergabedatei liegt |

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x10 | ERROR_ECU_GENERAL_REJECT |
| 0x11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0x12 | ERROR_ECU_SUB_FUNCTION_NOT_SUPPORTED |
| 0x13 | ERROR_ECU_INCORRECT_MESSAGE_LENGTH_OR_INVALID_FORMAT |
| 0x14 | ERROR_ECU_RESPONSE_TOO_LONG |
| 0x21 | ERROR_ECU_BUSY_REPEAT_REQUEST |
| 0x22 | ERROR_ECU_CONDITIONS_NOT_CORRECT |
| 0x24 | ERROR_ECU_REQUEST_SEQUENCE_ERROR |
| 0x25 | ERROR_ECU_NO_RESPONSE_FROM_SUBNET_COMPONENT |
| 0x26 | ERROR_ECU_FAILURE_PREVENTS_EXECUTION_OF_REQUESTED_ACTION |
| 0x31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0x33 | ERROR_ECU_SECURITY_ACCESS_DENIED |
| 0x35 | ERROR_ECU_INVALID_KEY |
| 0x36 | ERROR_ECU_EXCEED_NUMBER_OF_ATTEMPTS |
| 0x37 | ERROR_ECU_REQUIRED_TIME_DELAY_NOT_EXPIRED |
| 0x70 | ERROR_ECU_UPLOAD_DOWNLOAD_NOT_ACCEPTED |
| 0x71 | ERROR_ECU_TRANSFER_DATA_SUSPENDED |
| 0x72 | ERROR_ECU_GENERAL_PROGRAMMING_FAILURE |
| 0x73 | ERROR_ECU_WRONG_BLOCK_SEQUENCE_COUNTER |
| 0x78 | ERROR_ECU_REQUEST_CORRECTLY_RECEIVED__RESPONSE_PENDING |
| 0x7E | ERROR_ECU_SUB_FUNCTION_NOT_SUPPORTED_IN_ACTIVE_SESSION |
| 0x7F | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_SESSION |
| 0x81 | ERROR_ECU_RPM_TOO_HIGH |
| 0x82 | ERROR_ECU_RPM_TOO_LOW |
| 0x83 | ERROR_ECU_ENGINE_IS_RUNNING |
| 0x84 | ERROR_ECU_ENGINE_IS_NOT_RUNNING |
| 0x85 | ERROR_ECU_ENGINE_RUN_TIME_TOO_LOW |
| 0x86 | ERROR_ECU_TEMPERATURE_TOO_HIGH |
| 0x87 | ERROR_ECU_TEMPERATURE_TOO_LOW |
| 0x88 | ERROR_ECU_VEHICLE_SPEED_TOO_HIGH |
| 0x89 | ERROR_ECU_VEHICLE_SPEED_TOO_LOW |
| 0x8A | ERROR_ECU_THROTTLE_PEDAL_TOO_HIGH |
| 0x8B | ERROR_ECU_THROTTLE_PEDAL_TOO_LOW |
| 0x8C | ERROR_ECU_TRANSMISSION_RANGE_NOT_IN_NEUTRAL |
| 0x8D | ERROR_ECU_TRANSMISSION_RANGE_NOT_IN_GEAR |
| 0x8F | ERROR_ECU_BRAKE_SWITCH_NOT_CLOSED |
| 0x90 | ERROR_ECU_SHIFTER_LEVER_NOT_IN_PARK |
| 0x91 | ERROR_ECU_TORQUE_CONVERTER_CLUTCH_LOCKED |
| 0x92 | ERROR_ECU_VOLTAGE_TOO_HIGH |
| 0x93 | ERROR_ECU_VOLTAGE_TOO_LOW |
| ?00? | OKAY |
| ?01? | ERROR_ECU_NO_RESPONSE |
| ?02? | ERROR_ECU_INCORRECT_LEN |
| ?03? | ERROR_ECU_INCORRECT_RESPONSE_ID |
| ?04? | ERROR_ECU_TA_RESPONSE_NOT_SA_REQUEST |
| ?05? | ERROR_ECU_SA_RESPONSE_NOT_TA_REQUEST |
| ?06? | ERROR_ECU_RESPONSE_INCORRECT_DATA_IDENTIFIER |
| ?07? | ERROR_ECU_RESPONSE_TOO_MUCH_DATA |
| ?08? | ERROR_ECU_RESPONSE_TOO_LESS_DATA |
| ?09? | ERROR_ECU_RESPONSE_VALUE_OUT_OF_RANGE |
| ?0A? | ERROR_TABLE |
| ?10? | ERROR_F_CODE |
| ?12? | ERROR_INTERPRETATION |
| ?13? | ERROR_F_POS |
| ?14? | ERROR_ECU_RESPONSE_INCORRECT_IO_CONTROL_PARAMETER |
| ?15? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_CONTROL_TYPE |
| ?16? | ERROR_ECU_RESPONSE_INCORRECT_SUB_FUNCTION |
| ?17? | ERROR_ECU_RESPONSE_INCORRECT_DYNAMICALLY_DEFINED_DATA_IDENTIFIER |
| ?18? | ERROR_ECU_RESPONSE_NO_STRING_END_CHAR |
| ?19? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_IDENTIFIER |
| ?1A? | ERROR_ECU_RESPONSE_INCORRECT_RESET_TYPE |
| ?1B? | ERROR_ECU_RESPONSE_INCORRECT_SERIAL_NUMBER_FORMAT |
| ?1C? | ERROR_ECU_RESPONSE_INCORRECT_DTC_BY_STATUS_MASK |
| ?1D? | ERROR_ECU_RESPONSE_INCORRECT_DTC_STATUS_AVAILABILITY_MASK |
| ?1E? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_CONTROL_IDENTIFIER |
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
| ?60? | ERROR_VERIFY |
| ?61? | ERROR_ECU_RESPONSE_ZGW |
| ?62? | ERROR_ECU_RESPONSE_BACKUP |
| ?70? | ERROR_CALID_CVN_INCORRECT_LEN |
| ?80? | ERROR_SVK_INCORRECT_LEN |
| ?81? | ERROR_SVK_INCORRECT_FINGERPRINT |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x000001 | Reinshagen / Delphi |
| 0x000002 | Leopold Kostal GmbH & Co. KG |
| 0x000003 | Hella Fahrzeugkomponenten GmbH |
| 0x000004 | Siemens |
| 0x000005 | Eaton |
| 0x000006 | UTA |
| 0x000007 | Helbako GmbH |
| 0x000008 | Robert Bosch GmbH |
| 0x000009 | Lear Corporation |
| 0x000010 | VDO |
| 0x000011 | Valeo GmbH |
| 0x000012 | MBB |
| 0x000013 | Kammerer |
| 0x000014 | SWF |
| 0x000015 | Blaupunkt |
| 0x000016 | Philips |
| 0x000017 | Alpine Electronics GmbH |
| 0x000018 | Continental Teves AG & Co. OHG |
| 0x000019 | Elektromatik Südafrika |
| 0x000020 | Harman Becker Automotive Systems |
| 0x000021 | Preh GmbH |
| 0x000022 | Alps Electric Co. Ltd. |
| 0x000023 | Motorola |
| 0x000024 | Temic |
| 0x000025 | Webasto SE |
| 0x000026 | MotoMeter |
| 0x000027 | Delphi Automotive PLC |
| 0x000028 | DODUCO (Beru) |
| 0x000029 | DENSO |
| 0x000030 | NEC |
| 0x000031 | DASA |
| 0x000032 | Pioneer Corporation |
| 0x000033 | Jatco |
| 0x000034 | FUBA Automotive GmbH & Co. KG |
| 0x000035 | UK-NSI |
| 0x000036 | AABG |
| 0x000037 | Dunlop |
| 0x000038 | Sachs |
| 0x000039 | ITT |
| 0x000040 | FTE (Fahrzeugtechnik Ebern) |
| 0x000041 | Megamos |
| 0x000042 | TRW Automotive GmbH |
| 0x000043 | WABCO Fahrzeugsysteme GmbH |
| 0x000044 | ISAD Electronic Systems |
| 0x000045 | HEC Hella Electronics Corporation |
| 0x000046 | Gemel |
| 0x000047 | ZF Friedrichshafen AG |
| 0x000048 | GMPT |
| 0x000049 | Harman Becker Automotive Systems GmbH |
| 0x000050 | Remes GmbH |
| 0x000051 | ZF Lenksysteme GmbH |
| 0x000052 | Magneti Marelli S.p.A. |
| 0x000053 | Johnson Controls Inc. |
| 0x000054 | GETRAG Getriebe- und Zahnradf. Hermann Hagenmeyer GmbH & Co. KG |
| 0x000055 | Behr-Hella Thermocontrol GmbH |
| 0x000056 | Siemens VDO Automotive |
| 0x000057 | Visteon Innovation & Technology GmbH |
| 0x000058 | Autoliv AB |
| 0x000059 | Haberl Electronic GmbH & Co. KG |
| 0x000060 | Magna International Inc. |
| 0x000061 | Marquardt GmbH |
| 0x000062 | AB Elektronik GmbH |
| 0x000063 | SDVO/BORG |
| 0x000064 | Hirschmann Car Communication GmbH |
| 0x000065 | hoerbiger-electronics |
| 0x000066 | Thyssen Krupp Automotive |
| 0x000067 | Gentex Corporation |
| 0x000068 | Atena GmbH |
| 0x000069 | Magna-Donelly |
| 0x000070 | Koyo Steeting Europe |
| 0x000071 | NSI Beheer B.V. |
| 0x000072 | Aisin AW Co. Ltd. |
| 0x000073 | Schorlock |
| 0x000074 | Schrader Electronics Ltd. |
| 0x000075 | Huf-Electronics Bretten GmbH |
| 0x000076 | CEL |
| 0x000077 | AUDIO MOBIL Elektronik GmbH |
| 0x000078 | rd electronic |
| 0x000079 | iSYS RTS GmbH |
| 0x000080 | Westfalia-Automotive GmbH |
| 0x000081 | Tyco Electronics |
| 0x000082 | Paragon AG |
| 0x000083 | IEE S.A. |
| 0x000084 | TEMIC AUTOMOTIVE of NA |
| 0x000085 | Sonceboz S.A. |
| 0x000086 | Meta System S.p.A. |
| 0x000087 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x000088 | MANN+HUMMEL GmbH |
| 0x000089 | Brose Fahrzeugteile GmbH & Co. |
| 0x000090 | Keihin |
| 0x000091 | Vimercati S.p.a |
| 0x000092 | CRH |
| 0x000093 | TPO Display Corp |
| 0x000094 | Küster Automotive GmbH |
| 0x000095 | Hitachi Automotive |
| 0x000096 | Continental AG |
| 0x000097 | TI-Automotive |
| 0x000098 | Hydro |
| 0x000099 | Johnson Controls Inc. |
| 0x00009A | Takata-Petri |
| 0x00009B | Mitsubishi Electric B.V. (Melco) |
| 0x00009C | Autokabel |
| 0x00009D | GKN Plc |
| 0x00009E | Zollner Elektronik AG |
| 0x00009F | peiker acustic GmbH & Co. KG |
| 0x0000A0 | Bosal-Oris |
| 0x0000A1 | Cobasys |
| 0x0000A2 | Automotive Lighting Reutlingen GmbH |
| 0x0000A3 | CONTI VDO |
| 0x0000A4 | A.D.C. Automotive Distance Control Systems GmbH |
| 0x0000A5 | Novero Dabendorf GmbH |
| 0x0000A6 | LAMES S.p.a. |
| 0x0000A7 | Magna/Closures |
| 0x0000A8 | Harbin Wan Yu Technology Co |
| 0x0000A9 | ThyssenKrupp Presta AG |
| 0x0000AA | ArvinMeritor |
| 0x0000AB | Kongsberg Automotive GmbH |
| 0x0000AC | SMR Automotive Mirrors Stuttgart GmbH |
| 0x0000AD | So.Ge.Mi. |
| 0x0000AE | MTA S.p.A. |
| 0x0000AF | Alfmeier Präzision AG |
| 0x0000B0 | Eltek Deutechland GmbH |
| 0x0000B1 | OMRON Automotive Electronics Europe GmbH |
| 0x0000B2 | ASK Industries GmbH |
| 0x0000B3 | CML Innovative Technologies GmbH & Co. KG |
| 0x0000B4 | APAG Elektronik AG |
| 0x0000B5 | Nexteer Automotive |
| 0x0000B6 | Hans Widmaier Fernmelde- und Feinwerktechnik |
| 0x0000B7 | Robert Bosch Battery Systems GmbH |
| 0x0000B8 | Kyocera Display Europe GmbH |
| 0x0000B9 | Magna Powertrain AG & Co. KG |
| 0x0000BA | BorgWarner Beru Systems GmbH |
| 0x0000BB | BMW AG |
| 0x0000BC | Benteler Duncan Plant |
| 0x0000BD | U-Shin Deutschland Zugangssysteme GmbH |
| 0x0000BE | Schaeffler Technologies AG & Co. KG |
| 0x0000BF | JTEKT Corporation |
| 0x0000C0 | VLF |
| 0x0000C1 | Flextronics |
| 0x0000C2 | LG Chem |
| 0x0000C3 | Panasonic |
| 0x0000C4 | Alpitronic GmbH |
| 0x0000C5 | Telemotive AG |
| 0x0000C6 | Garmin |
| 0x0000C7 | RSG Elotech Elektronische Baugruppen GmbH |
| 0x0000C8 | KEBODA TECHNOLOGY CORP |
| 0x0000C9 | Aptiv |
| 0x0000CA | SEG Automotive Germany GmbH |
| 0xFFFFFF | unbekannter Hersteller |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | keine Fehlerart verfügbar |
| 0x04 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x05 | Fehler momentan vorhanden und bereits gespeichert |
| 0x08 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x09 | Fehler momentan vorhanden und bereits gespeichert |
| 0x0C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x0D | Fehler momentan vorhanden und bereits gespeichert |
| 0x20 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x21 | Fehler momentan vorhanden und bereits gespeichert |
| 0x24 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x25 | Fehler momentan vorhanden und bereits gespeichert |
| 0x28 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x29 | Fehler momentan vorhanden und bereits gespeichert |
| 0x2C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x2D | Fehler momentan vorhanden und bereits gespeichert |
| 0x40 | unbekannte Fehlerart |
| 0x44 | Fehler gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler gespeichert |
| 0x4D | Fehler gespeichert |
| 0x60 | Fehler gespeichert |
| 0x61 | Fehler gespeichert |
| 0x64 | Fehler gespeichert |
| 0x65 | Fehler gespeichert |
| 0x68 | Fehler gespeichert |
| 0x69 | Fehler gespeichert |
| 0x6C | Fehler gespeichert |
| 0x6D | Fehler gespeichert |
| 0x10 | Testbedingungen erfüllt |
| 0x11 | Testbedingungen noch nicht erfüllt |
| 0x80 | Fehler würde kein Aufleuchten einer Warnlampe verursachen |
| 0x81 | Fehler würde das Aufleuchten einer Warnlampe verursachen |
| 0xFF | unbekannte Fehlerart |

### DIGITALARGUMENT

| TEXT | WERT |
| --- | --- |
| ein | 1 |
| aus | 0 |
| ja | 1 |
| nein | 0 |
| auf | 1 |
| ab | 0 |
| an | 1 |
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

### PROZESSKLASSEN

| WERT | PROZESSKLASSE | BEZEICHNUNG |
| --- | --- | --- |
| 0x00 | - | ungueltig |
| 0x01 | HWEL | Hardware (Elektronik) |
| 0x02 | HWAP | Hardwareauspraegung |
| 0x03 | HWFR | Hardwarefarbe |
| 0x05 | CAFD | Codierdaten |
| 0x06 | BTLD | Bootloader |
| 0x08 | SWFL | Software ECU Speicherimage |
| 0x09 | SWFF | Flash File Software |
| 0x0A | SWPF | Pruefsoftware |
| 0x0B | ONPS | Onboard Programmiersystem |
| 0x0F | FAFP | FA2FP |
| 0x1A | TLRT | Temporaere Loeschroutine |
| 0x1B | TPRG | Temporaere Programmierroutine |
| 0x07 | FLSL | Flashloader Slave |
| 0x0C | IBAD | Interaktive Betriebsanleitung Daten |
| 0x10 | FCFA | Freischaltcode Fahrzeug-Auftrag |
| 0x1C | BLUP | Bootloader-Update Applikation |
| 0x1D | FLUP | Flashloader-Update Applikation |
| 0xC0 | SWUP | Software-Update Package |
| 0xC1 | SWIP | Index Software-Update Package |
| 0xA0 | ENTD | Entertainment Daten |
| 0xA1 | NAVD | Navigation Daten |
| 0xA2 | FCFN | Freischaltcode Funktion |
| 0x04 | GWTB | Gateway-Tabelle |
| 0x0D | SWFK | BEGU: Detaillierung auf SWE-Ebene |
| 0xFF | - | ungueltig |

### SVK_ID

| WERT | BEZEICHNUNG |
| --- | --- |
| 0x01 | SVK_AKTUELL |
| 0x02 | SVK_SUPPLIER |
| 0x03 | SVK_WERK |
| 0x04 | SVK_BACKUP_01 |
| 0x05 | SVK_BACKUP_02 |
| 0x06 | SVK_BACKUP_03 |
| 0x07 | SVK_BACKUP_04 |
| 0x08 | SVK_BACKUP_05 |
| 0x09 | SVK_BACKUP_06 |
| 0x0A | SVK_BACKUP_07 |
| 0x0B | SVK_BACKUP_08 |
| 0x0C | SVK_BACKUP_09 |
| 0x0D | SVK_BACKUP_10 |
| 0x0E | SVK_BACKUP_11 |
| 0x0F | SVK_BACKUP_12 |
| 0x10 | SVK_BACKUP_13 |
| 0x11 | SVK_BACKUP_14 |
| 0x12 | SVK_BACKUP_15 |
| 0x13 | SVK_BACKUP_16 |
| 0x14 | SVK_BACKUP_17 |
| 0x15 | SVK_BACKUP_18 |
| 0x16 | SVK_BACKUP_19 |
| 0x17 | SVK_BACKUP_20 |
| 0x18 | SVK_BACKUP_21 |
| 0x19 | SVK_BACKUP_22 |
| 0x1A | SVK_BACKUP_23 |
| 0x1B | SVK_BACKUP_24 |
| 0x1C | SVK_BACKUP_25 |
| 0x1D | SVK_BACKUP_26 |
| 0x1E | SVK_BACKUP_27 |
| 0x1F | SVK_BACKUP_28 |
| 0x20 | SVK_BACKUP_29 |
| 0x21 | SVK_BACKUP_30 |
| 0x22 | SVK_BACKUP_31 |
| 0x23 | SVK_BACKUP_32 |
| 0x24 | SVK_BACKUP_33 |
| 0x25 | SVK_BACKUP_34 |
| 0x26 | SVK_BACKUP_35 |
| 0x27 | SVK_BACKUP_36 |
| 0x28 | SVK_BACKUP_37 |
| 0x29 | SVK_BACKUP_38 |
| 0x2A | SVK_BACKUP_39 |
| 0x2B | SVK_BACKUP_40 |
| 0x2C | SVK_BACKUP_41 |
| 0x2D | SVK_BACKUP_42 |
| 0x2E | SVK_BACKUP_43 |
| 0x2F | SVK_BACKUP_44 |
| 0x30 | SVK_BACKUP_45 |
| 0x31 | SVK_BACKUP_46 |
| 0x32 | SVK_BACKUP_47 |
| 0x33 | SVK_BACKUP_48 |
| 0x34 | SVK_BACKUP_49 |
| 0x35 | SVK_BACKUP_50 |
| 0x36 | SVK_BACKUP_51 |
| 0x37 | SVK_BACKUP_52 |
| 0x38 | SVK_BACKUP_53 |
| 0x39 | SVK_BACKUP_54 |
| 0x3A | SVK_BACKUP_55 |
| 0x3B | SVK_BACKUP_56 |
| 0x3C | SVK_BACKUP_57 |
| 0x3D | SVK_BACKUP_58 |
| 0x3E | SVK_BACKUP_59 |
| 0x3F | SVK_BACKUP_60 |
| 0x40 | SVK_BACKUP_61 |
| 0xXY | ERROR_UNKNOWN |

### DTCEXTENDEDDATARECORDNUMBER

| WERT | TEXT | ANZ_BYTE |
| --- | --- | --- |
| 0x00 | ISO_RESERVED | 0 |
| 0x01 | CONDITION_BYTE | 1 |
| 0x02 | HFK | 1 |
| 0x03 | HLZ | 1 |
| 0xFF | RECORD_UNKNOWN | 0 |

### DTCSNAPSHOTIDENTIFIER

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | KM_STAND | 0-n | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1701 | ABS_ZEIT | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1702 | SAE_CODE | 0-n | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1731 | Fehlerklasse_DTC | - | - | u char | - | 1 | 1 | 0.000000 |
| 0x1750 | PWF_Basinetz | 0-n | - | 0xFF | - | 1 | 1 | 0.000000 |
| 0x1751 | PWF_Teilnetz | 0-n | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1768 | KM_STAND_SUP | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1769 | ABS_ZEIT_SUP | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0xFFFF | IDENTIFIER_UNKNOWN | - | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |

### TAB_ZEIT_SYNCMETHOD

| WERT | TEXT |
| --- | --- |
| 0x00 | Combi-Time |
| 0x01 | DMCS |
| 0x02 | IEEE802.1AS |
| 0x03 | invalid |

### TAB_ZEIT_USER_INFO

| WERT | TEXT |
| --- | --- |
| 0x00 | out of sync, no time available |
| 0x01 | insync, ms ECU overall, not comparable |
| 0x02 | ms ECU overall, not comparable |
| 0x03 | ms ECU overall, comparable |
| 0x04 | ms ECU overall, not comparable |
| 0x05 | ms ECU overall, comparable |
| 0x06 | invalid |
| 0x07 | invalid |

### FEHLERKLASSE

| NR | TEXT |
| --- | --- |
| 0x00 | Keine Fehlerklasse verfuegbar |
| 0x01 | Ueberpruefung bei naechstem Werkstattbesuch |
| 0x02 | Ueberpruefung bei naechstem Halt |
| 0x04 | Ueberpruefung sofort erforderlich ! |
| 0xFF | unbekannte Fehlerklasse |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### CU_ERR_TEXT

| NR | TEXT |
| --- | --- |
| 0x00 | CUE_NO_ERROR |
| 0x01 | CUE_NO_FREE_SOCKET |
| 0x02 | CUE_NOT_RESOLVED |
| 0x03 | CUE_NO_CONNECTION |
| 0x04 | CUE_SEND_FAILED |
| 0x05 | CUE_TIMEOUT |
| 0xFF | CUE_UNKNOWN |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |
