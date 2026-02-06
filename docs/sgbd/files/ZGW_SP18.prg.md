# ZGW_SP18.prg

## General

|  |  |
| --- | --- |
| File | ZGW_SP18.prg |
| Type | PRG |
| Jobs | 102 |
| Tables | 120 |
| Origin | BMW EI-420 Silvio_Loewe |
| Revision | 1.000 |
| Author | BMW EE-420 Loewe |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Zentrales Gateway ab SP2018 |  |  |
| ORIGIN | string | BMW EI-420 Silvio_Loewe |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | BMW EE-420 Loewe |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.82 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### IDENT

Identdaten UDS  : $22   ReadDataByIdentifier UDS  : $F150 Sub-Parameter SGBD-Index Modus: Default

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $02 ReadDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| IGNORIERE_EREIGNIS_DTC | string | 'IGNORIERE_EREIGNIS_DTC': Alle Ereignis DTC-Fehlereinträge werden ignoriert sonst: alle Fehlereinträge werden ausgegeben |

### FS_LESEN_DETAIL

Fehlerspeicher lesen (einzelner Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $04 reportDTCSnapshotRecordByDTCNumber UDS  : $06 reportDTCExtendedDataRecordByDTCNumber UDS  : $09 reportSeverityInformationOfDTC Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Fehlercode |

### FS_LOESCHEN

Fehlerspeicher loeschen UDS  : $14 ClearDiagnosticInformation UDS  : $FF DTCHighByte UDS  : $FF DTCMiddleByte UDS  : $FF DTCLowByte Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | 0x??????: Angabe eines einzelnen Fehlers Default: 0xFFFFFF: alle Fehler |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels UDS  : $22   ReadDataByIdentifier UDS  : $1000 TestStamp Modus: Default

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. UDS  : $2E   WriteDataByIdentifier UDS  : $1000 TestStamp Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### SVK_LESEN

Informationen zur Steuergeraete-Verbau-Kennung UDS  : $22   ReadDataByIdentifier UDS  : $F1xx Sub-Parameter fuer SVK UDS  : $F101 SVK_AKTUELL (Default) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SVK | string | table SVK_ID BEZEICHNUNG WERT default SVK_AKTUELL |

### STATUS_LESEN

Lesen eines oder mehrerer Stati UDS  : $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige result erzeugt table SG_Funktionen ARG ID RESULTNAME RES_TABELLE ARG_TABELLE |

### STEUERN

Vorgeben eines Status UDS  : $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID LABEL ARG_TABELLE |
| WERT | string | Es muss mindestens ein Argument übergeben werden Argumente siehe table SG_Funktionen ARG ID ARG_TABELLE |

### SERIENNUMMER_LESEN

Seriennummer des Steuergeraets UDS  : $22   ReadDataByIdentifier UDS  : $F18C Sub-Parameter ECUSerialNumber Modus: Default

_No arguments._

### STEUERN_ROUTINE

Vorgeben eines Status UDS  : $31 RoutineControl

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID RES_TABELLE ARG_TABELLE |
| STEUERPARAMETER | string | 'STR'  = startRoutine 'STPR' = stopRoutine 'RRR'  = requestRoutineResults |
| WERT | string | Argumente siehe table SG_Funktionen ARG_TABELLE |

### FS_SPERREN

Sperren bzw. Freigeben des Fehlerspeichers UDS  : $85 ControlDTCSetting UDS  : $?? Sperren ($02) / Freigabe ($01) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SPERREN | string | "ja"   -> Fehlerspeicher sperren "nein" -> Fehlerspeicher freigeben table DigitalArgument TEXT Default: "ja" |

### IS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $17 ReadDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| IGNORIERE_EREIGNIS_DTC | string | 'IGNORIERE_EREIGNIS_DTC': Alle Ereignis DTC-Fehlereinträge werden ignoriert sonst: alle Fehlereinträge werden ausgegeben |

### IS_LESEN_DETAIL

sekundären Fehlerspeicher lesen (Info-Meldungen / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $18 reportDTCSnapshotRecordByDTCNumber UDS  : $19 reportDTCExtendedDataRecordByDTCNumber UDS  : $-- reportSeverityInformationOfDTC (nicht möglich!) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Infocode |

### IS_LOESCHEN

Infospeicher loeschen UDS  : $31   RoutineControl UDS  : $01   startRoutine UDS  : $0F06 ClearSecondaryDTCMemory Modus: Default

_No arguments._

### HERSTELLINFO_LESEN

Lieferant und Herstelldatum lesen UDS  : $22   ReadDataByIdentifier UDS  : $F18A SystemSupplierIdentifier UDS  : $F18B ECUManufactoringData Modus: Default

_No arguments._

### DIAGNOSE_AUFRECHT

Diagnosemode des SG aufrecht erhalten UDS  : $3E TesterPresent UDS  : $?0 suppressPosRspMsgIndication Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SG_ANTWORT | string | "ja"   -> SG soll antworten "nein" -> SG soll nicht antworten table DigitalArgument TEXT Default:  SG soll antworten |

### DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen UDS  : $10 StartDiagnosticSession Modus: einstellbar mit diesem Job

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |

### SLEEP_MODE

SG in Sleep-Mode versetzen UDS  : $11 ECUReset UDS  : $04 EnableRapidPowerShutDown Modus: Default

_No arguments._

### ENERGIESPARMODE

Einstellen des Energiesparmodes UDS   : $31   RoutineControlRequestServiceID UDS   : $01   startRoutine UDS   : $0F0C DataIdentifier ControlEnergySavingMode UDS   : $??   Mode Modus : Default

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | 0x00: Normalmode 0x01: Fertigungsmode 0x02: Transportmode 0x03: Flashmode |

### STATUS_ENERGIESPARMODE

Energy-Saving-Mode auslesen UDS  : $22   ReadDataByIdentifier UDS  : $100A DataIdentifier EnergySavingMode Modus: Default

_No arguments._

### STEUERN_BETRIEBSMODE

Betriebsmode setzen SG muss sich im Energiersparmode befinden UDS  : $31   RoutineControl UDS  : $01   startRoutine UDS  : $1003 DataIdentifier Betriebsmode UDS  : $0?   Betriebsmode Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| BETRIEBSMODE | int | Betriebsmode setzen table Betriebsmode WERT 0     : Kein Betriebsmode gesetzt 1 - 16: Erweiterter Betriebsmode (Bedeutung siehe Tabelle) |

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events $02 eventWindowTime - infinite (LH Diagnosemaster V11 oder höher, Umsetzung nach LH V6 - V10 wird jedoch toleriert)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STATUS_VIN_LESEN

Abfragen der VIN UDS   : $22 ReadDataByIdentifier $F1 DID VIN $90 DID VIN

_No arguments._

### STEUERN_ROE_INITIALISIERUNG_CHECK2

Persistentes Aktivieren der aktiven Fehlermeldung an alle Diagnosemasterclients ueber TAS mit physikalischer Adressierung an SGs in VCM-Liste UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime)

_No arguments._

### _STATUS_MSM_ZERTIFIKAT

Abfragen der Buildnummer der Software UDS   : $BF ZGWDebugService $FFD5

_No arguments._

### _STEUERN_DEBUG_CAN_UMSCHALTUNG

Aktivierung bzw. Deaktivierung des Debug-CAN im BDC2018 (D-CAN Diagnose weiterhin möglich) UDS   : $BF ZGWDebugService $CA DID Debug-CAN Umschaltung $DD DID Debug-CAN Umschaltung

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | 0x00 - Debug-CAN DEAKTIVIERT 0x01 - Debug-CAN AKTIV |

### STEUERN_LEARN_FLEXRAY_WERK

Automatische Abschaltung von nicht benötigten Flexrayästen des Sternkopplers Pre-Conditions: SVT_Soll auf dem ZGW schreiben UDS  : $31     RoutineControl UDS  : $01     StartRoutine UDS  : $A234   SteuernLearnFlexRay

| Name | Type | Description |
| --- | --- | --- |
| FIRST_RESPONSE_TIMEOUT | long | Default 200ms = 0x00C8 |
| POSITIVE__RESPONSE_TIMEOUT | long | Default 5000ms = 0x1388 |

### _STEUERN_ADD_DIAG_ROUTING

Man kann mit diesem Befehl Routingeinträge zur Laufzeit dazufügen UDS   : $BF ZGWDebugService $FFFA AddDiagRouting

| Name | Type | Description |
| --- | --- | --- |
| DIAG_ADRESSE | int | SG Diagnoseadresse. Bereich: 0-255 bzw. 0x00-0xFF |
| BUS_INDEX_1 | char | Byte 1 |
| BUS_INDEX_2 | char | Byte 2 |
| BUS_INDEX_3 | char | Byte 3 |
| BUS_INDEX_4 | char | Byte 4 BusMaske: 0x00000000 -> loeschen 0x00000001 -> B-CAN 0x00000002 -> FA-CAN 0x00000004 -> K-CAN/IuK-CAN 0x00000008 -> D-CAN 0x00000010 -> ZSG_CAN 0x00000020 -> FLEXRAY 0x00000040 -> MOST 0x00000080 -> ETHERNET 0x00000100 -> EIGENE_DIAGNOSE 0x00000200 -> TAS 0x00002000 -> Body2-CAN 0x00010000 -> FAS-CAN |

### STATUS_VCM_I_STUFE_LESEN

Auslesen der I-Stufe aus ZGW und CAS UDS:    $22   ReadDataByIdentifier UDS:    $100B DataIdentifier I-Level Byte     |0|1|2|3| 4| 5| 6| 7| | ASCII |    Byte   | IStufe   |F|0|0|1|09|08| 4 00|

_No arguments._

### STATUS_FIREWALL_DIAGNOSE_HISTORIE

Liste der 20 letzten blockierten Diagnoseanfragen UDS  : $22 ReadDataByIdentifier UDS  : $12 STATUS_FIREWALL_DIAGNOSE_HISTORIE UDS  : $01 STATUS_FIREWALL_DIAGNOSE_HISTORIE

_No arguments._

### STATUS_VERSORGUNGSSPANNUNG

Betriebsspannung am SG. Darstellung mit Millivolt-Auflösung.

_No arguments._

### STATUS_DM_FSS_MASTER

Gibt aktuellen Zustand der Zentralen Fehlerspeichersperre nach LH Diagnosemaster 10000504 DMA_PA_9145, DMA_PA_8967 Dieser Job ist nur gueltig fuer SP2018 und neuer UDS    : $22   ReadDataByIdentifier UDS    : $17   Byte #1 von SG-spez. DataIdentifier $1710 "Status_FSS" UDS    : $10   Byte #2 von SG-spez. DataIdentifier $1710 "Status_FSS"  Request 0x22,17,10 => liefert Antwort der Form 0x62,17,10,xx,yy Wertetabelle für xx: 0x00: Fehlerspeicherfreigabe 0x01: Fehlerspeichersperre 0x02: Reserve 0x03: Signal ungültig 0x04: Nachricht 0x3A0 stumm Wertetabelle für yy: 0x00: Freilaufend 0x01: Fest wie mittels Routine vorgegeben 0xFF: keine Angabe möglich

_No arguments._

### STATUS_IP_CONFIGURATION

Reads out the actual ipconfig of the Ethernet interface of the HeadUnit.

_No arguments._

### STATUS_ETH_SIGNAL_QUALITY

Returns the signal quality of all external ports of the ECU UDS   : $22 ReadDataByIdentifier $1801 ETH_SIGNAL_QUALITY

_No arguments._

### STATUS_LESEN_TP_ROUTING_TABELLE

Liest die aktuelle Routing Konfiguration des ZGWs UDS  : $22 ReadDataByIdentifier UDS  : $25 ReadTPRoutingTable UDS  : $09 ReadTPRoutingTable

_No arguments._

### STATUS_SIG_TN_MASTER

Gibt den aktuellen Status der Signale Status_Basis_Teilnetze und Status_Funktionale_Teilnetze zurück. LH Teilnetzbetrieb Master 10000756, PNW_1186 UDS    : $22   ReadDataByIdentifier UDS    : $25   Byte #1 von SG-spez. DataIdentifier $2530 "STATUS_SIG_TN_MASTER" UDS    : $30   Byte #2 von SG-spez. DataIdentifier $2530 "STATUS_SIG_TN_MASTER"  Request 0x22,25,30 => liefert Antwort der Form 0x62,40,40,xx,yy

_No arguments._

### STATUS_EINSCHLAFMONITOR_SPEICHER

Auslesen des Einschlafmonitor-Speichers UDS   : $22 ReadDataByIdentifier $25 DID Einschlafmonitor-Speicher $37 DID Einschlafmonitor-Speicher

_No arguments._

### STATUS_AKTIVSTE_SG

Auslesen der zehn Steuergeräte, die beim letzten Einschlafvorgang die meisten NM-Nachrichten versendet haben UDS   : $22 ReadDataByIdentifier $25 DID Aktivsten SGs $38 DID Aktivsten SGs

_No arguments._

### STATUS_TAS

Abfrage des TAS-Status UDS   : $22   ReadDataByIdentifier $26 $00

_No arguments._

### STATUS_VCM_GET_FA

Der Fahrzeugauftrag beschreibt mittels Produktbeschreibungscodes und zusätzlicher Inhalte das Fahrzeug und soll immer dem aktuellen Ausrüststand des Fahrzeuges esntsprechen UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetVehicleOrderReference UDS  : $06 VcmGetVehicleOrderReference

_No arguments._

### STATUS_VCM_GET_ECU_LIST_ALL

Liste aller in der SVTSoll gespeicherte SGe UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListAll UDS  : $07 VcmGetEcuListAll

_No arguments._

### _STATUS_CDC_LISTE_ALLER_JOBS

Liste aller installierten Jobs im CDC-Framework UDS  : $22 ReadDataByIdentifier UDS  : $40 CDCListeAllerJobs UDS  : $0D CDCListeAllerJobs

_No arguments._

### STATUS_FLEXRAY_PFAD

Liest den Status aller FR Pfade aus UDS  : $22 ReadDataByIdentifier UDS  : $E2 FlexrayPfadeLesen UDS  : $60 FlexrayPfadeLesen

_No arguments._

### STATUS_LEARN_FLEXRAY

Status des Learn FlexRay wird ausgelesen UDS  : $22 ReadDataByIdentifier UDS  : $E2 StatusLearnFlexRay UDS  : $61 StatusLearnFlexRay

_No arguments._

### STATUS_GET_ECU_LIST_UNEINDEUTIGES_ROUTING

Liste aller SGe, die eine Mehrdeutigkeit in der Routingtabelle haben UDS  : $22 ReadDataByIdentifier UDS  : $E2 GetEcuListUneindeutigesRouting UDS  : $A0 GetEcuListUneindeutigesRouting

_No arguments._

### STATUS_VERSION_GATEWAYTABELLE

Lesen der Versionsnummer der Gateway-Tabelle UDS   : $22 ReadDataByIdentifier $E2 DID StatusVersionGatewayTabelle $A1 DID StatusVersionGatewayTabelle

_No arguments._

### STATUS_WECKRINGSPEICHER_LESEN

Auslesen des Weckringspeichers UDS   : $22 ReadDataByIdentifier $EF DID Weckringspeicher $E9 DID Weckringspeicher

_No arguments._

### STATUS_LESEN_DIAG_SESSION

UDS  : $22 UDS  : $F1 UDS  : $00

_No arguments._

### STEUERN_IP_CONFIGURATION_SCHREIBEN

Setzen der IP Konfiguration SG-Reset erforderlich, um neue Konfiguration zu aktivieren UDS   : $2E WriteDataByIdentifier $17 DID STATUS_IP_CONFIGURATION $2A DID STATUS_IP_CONFIGURATION

| Name | Type | Description |
| --- | --- | --- |
| ADDRESS_FORMAT_ID | char | Address-Format-Id ist 0x00 für IPv4 oder 0x01 für IPv6 |
| IP | string | ip,subnetzmask,gateway Beispiel 192.168.100.2 |
| SUBNETMASK | string | subnetzmask Beispiel 255.255.0.0 |
| GATEWAY | string | gateway 192.168.0.254 |

### STATUS_GET_ECU_LIST_BUS_ID

Liste aller SGe, laut SVT-Soll an einem der Busse aus der Liste von Bus-Ids angeschlossen sind UDS  : $31 RoutineControl UDS  : $01 StartRoutine UDS  : $0201 GetEcuListBusId UDS  : $?? BusIds "Data"-Checkbox vor Ausführung des Jobs anhaken example: SG der Busse FlexRay=0x05 und Ethernet_Internal=0x1B argumente: 05 1B

| Name | Type | Description |
| --- | --- | --- |
| BUS_ID | binary | ID vom Bus Example--> FlexRay = 0x05 |

### STATUS_MSM_ZERTIFIKAT_WERK

Prueft, ob ein Zertifikat vorhanden ist oder nicht UDS   : $31   RoutineControl $01   StartRoutine $02150200 Gueltig ab 35Up

_No arguments._

### STEUERN_DM_FSS_MASTER

Manipulation der Zentralen Fehlerspeichersperre nach LH Diagnosemaster 10000504 DMA_PA_8960 Der JOb gilt nur fürs FEM-GW PL7 und nicht fürs ZGW PL6 UDS    : $31   RoutineControl UDS    : $xx   01: StartRoutine, 02: StopRoutine UDS    : $0305 RID für Fehlerspeichersperre UDS    : $xx   Signalvorgabe per Argument (zur Statusabfrage vergleiche Job STATUS_DM_FSS_MASTER)

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL | char | optionales Argument, wird nichts übergeben, wird Routine gestoppt und somit zur freilaufenden Betriebsart gewechselt Welches Signal Status_Sperre_Fehlerspeicher_FZM soll versendet werden? 0: Fehlerspeicherfreigabe 0b00 1: Fehlerspeichersperre 0b01 2: Reserve 0b10 3: Signal ungültig 0b11 4: Nachricht 0x3A0 stumm |

### STEUERN_LESEN_MASTERVIN

Veranlasst das ZGW, die ZGW-VIN mit der Master-VIN (CAS) zu aktualisieren UDS   : $31 RoutineControl $01 StartRoutine $1007 Lesen_MasterVIN

_No arguments._

### STEUERN_TAS

Tester Assistent - TAS wird Aktiviert oder Deaktiviert UDS   : $31   ResponseOnEvent $01   StartRoutine $100A DataIdentifier TAS Aktivieren/Deaktivieren

| Name | Type | Description |
| --- | --- | --- |
| TAS_STEUERN | int | Fuer ZGW / FEM / BDC 2013: 0x00 = Alle TAS-Auftraege werden abgewiesen mit NRC 0x22, bis zum naechsten Aufstarten 0x01 = TAS Betrieb ohne Einschraenkung (Default nach Programmierung, im Anlieferzustand)  Fuer BDC 35up: 0x00 = Alle TAS-Auftraege werden abgewiesen mit NRC 0x22, bis zum naechsten Aufstarten 0x01 = TAS Betrieb ohne Einschraenkung (Default nach Programmierung, im Anlieferzustand) 0x02 = Alle TAS-Auftraege werden abgewiesen mit NRC 0x22, ueber Aufstart hinaus. 0x03 = Interne TAS-Auftraege werden abgewiesen mit NRC 0x22, bis zum naechsten Aufstarten 0x04 = Interne TAS-Auftraege werden abgewiesen mit NRC 0x22, ueber Aufstart hinaus |

### STEUERN_SIG_TN_MASTER

Steuerung der funktionalen Teilnetze nach LH Teilnetzbetrieb Master 10000756, PNW_1135 UDS    : $31   RoutineControl UDS    : $xx   01: StartRoutine, 02: StopRoutine UDS    : $1030 Steuern_SIG_TN_Master UDS    : $xx   Signalvorgabe per argument Byte 0 UDS    : $xx   Signalvorgabe per argument Byte 1 UDS    : $xx   Signalvorgabe per argument Byte 2 UDS    : $xx   Signalvorgabe per argument Byte 3 (zur Statusabfrage vergleiche Job STATUS_SIG_TN_MASTER)

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL | long | 4-Byte bitcodierter Wert wie laut Bordnetz Nachricht 'Zustand Fahrzeug' ('CON_VEH', CAN-ID 0x3C), Signal 'CTR_FKTN_PRTNT' definiert. Wert für SIGNAL kann dezimal oder Hexadezimal angegeben werden Beispiel: Konfiguration_EIN und Laden_EIN: argument 0x00008001 Ungueltig wenn Wert negativ |

### STEUERN_EINSCHLAFMONITOR_LOESCHEN

Löschen des Einschlafmonitor-Speichers UDS : $31   RoutineControl $01   StartRoutine $1038 Einschlafmonitor loeschen

_No arguments._

### STEUERN_ETH_LEARN_PORT_CONFIGURATION

Stores the current link state (link up/link down) of all external ports of the ecu. The stored port configuration can then be used to detect missing, or additional ECUs during runtime. UDS   : $31 RoutineControl $01 StartRoutine $1040

_No arguments._

### STATUS_ETH_ARL_TABLE

Shall return the ARP table of a given network interface. The interface shall be identified by its IP address. UDS   : $31 RoutineControl $01 StartRoutine $1042

| Name | Type | Description |
| --- | --- | --- |
| PORT_INDEX | unsigned char | Port index of the requested ARL table. The ARL table of all external ports of the ECU shall be returned if PORT_INDEX=0xff. 1 byte uint8 {Port 0 - Port n-1 (for n Ports total), 0xff = ARL table of all ports.} |

### STATUS_ETH_ARP_TABLE

Shall return the ARP table of a given network interface. The interface shall be identified by its IP address. UDS   : $31 RoutineControl $01 StartRoutine $1043

| Name | Type | Description |
| --- | --- | --- |
| INPUTDATA | binary | 1st byte, uint8: IP_VERSION_TAB Used IP version of the network interface for which the ARP table shall be returned. IP_VERSION_TAB = 0 if the entry uses IPv4, IP_VERSION_TAB = 1 if the entry uses IPv6. --------- followed by 16 bytes ARP_TABLE_FOR_IP_ADDRESS: IP address of the network interface for which the ARP table shall be returned. IP address starting with the first octet (e.g., byte[0]=0xC0, byte[1]=0xA8, byte[2]=0x00, byte[3]=0x01 for IP address 192.168.0.1) For IPv4: byte[0] - byte[3]=IPv4 address, byte[4-15]=0. For IPv6: byte[0-15]=IPv6 address. --------- |

### STEUERN_ETH_PHY_SWITCH_ENGINE_RESET

Requests the reset of a given PHY or of the ECUs switch(es). If supported by the ECU, the PHY/switch(es) may be held in reset for a given amount of time. If an ECU does not support holding the PHY/switch(es) in reset for a given duration but STOP_PHY_FOR_T is greater than 0, the job shall quit with return value STAT_PHY_RESET = 2 and without performing the reset. After the reset, the default configuration, i.e., the configuration that is used during runtime, shall be applied. UDS   : $31 RoutineControl $01 StartRoutine $1044

| Name | Type | Description |
| --- | --- | --- |
| PORT_INDEX | unsigned char | Port Index {0-0xfe = Port 0 - Port 254, 0xff = reset all switch engines} |
| STOP_PHY_FOR_T | unsigned char | Amount of time the PHY or switch(es) shall be hold in reset. 0 - 255 seconds |

### STATUS_ETH_IP_CONFIGURATION

Shall return the ARP table of a given network interface. The interface shall be identified by its IP address. UDS   : $31 RoutineControl $01 StartRoutine $1045

| Name | Type | Description |
| --- | --- | --- |
| INTERNAL_EXTERNAL_ADDRESS | unsigned char | Identifies the network interface and its corresponding IP address (internal, external, all, further, optional application specific address) for which the IP configuration shall be returned and for which an optional gratuitous ARP shall be triggered. 1 byte uint8 {0= request internal IP address, 1= request external IP address (assigned by tester, cf. [100]) 0xff = request all IP-addresses, else = further, application specific IP address} |
| TRIGGER_GRATUITOUS_ARP | unsigned char | Defines whether the ECU shall send out a gratuitous ARP for the requested network interface. The gratuitous ARP shall be sent as soon as possible after being triggered. 1 byte uint8 {1= send gratuitous ARP for the requested network interface,  else = do not send gratuitous ARP} |

### STATUS_ETH_EXTENDED_ARL_TABLE

Returns the ARL table of all switch ports of the ECU. UDS   : $31 RoutineControl $01 StartRoutine $104E

_No arguments._

### STEUERN_ZFS_LOESCHEN

Loeschen des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $00   DM_Lock UDS     : $01   DM_Unlock UDS     : $05   DM_Clear Modus   : Default

_No arguments._

### STATUS_ZFS_COUNT_SYS_CONTEXT

Anzahl der Systemkontexte des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $F1   DM_AnzSysContext Modus   : Default

_No arguments._

### STATUS_ZFS_EVENTS_WERK

Lesen einer Teilmenge des Zentralen Fehlerspeichers fuer Ablage in CASCADE UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $00   DM_Lock UDS     : $01   DM_Unlock UDS     : $04   DM_ReadEvent Modus   : Default

_No arguments._

### STATUS_DM_LOCKSTATE

Sperrzustand des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $02   DM_Lockstate Modus   : Default

_No arguments._

### STEUERN_ZFS_UNLOCK

Entsperren des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $01   DM_Unlock Modus   : Default

_No arguments._

### STATUS_ZFS_COUNT_MAPPINGS

Anzahl der Mappings des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $F2   DM_AnzMapping Modus   : Default

_No arguments._

### STATUS_ZFS_TABLE

Lesen ein Table Block des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master UDS     : $09   DM_ReadTable Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NUM | char | Bei 0x00 wird die Anzahl der insgesamt vorhandenen Bloecke zurueckgegeben |

### STATUS_ZFS_TABLE2

Lesen ein Table Block des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master UDS     : $10   DM_ReadTable2 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NUM | char | Bei 0x00 wird die Anzahl der insgesamt vorhandenen Bloecke zurueckgegeben |

### STATUS_ZFS_MAPPING

Lesen ein Mapping Block des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master UDS     : $04   DM_ReadMapping Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NUM | char | Bei 0x00 wird die Anzahl der insgesamt vorhandenen Bloecke zurueckgegeben |

### STATUS_ZFS_SYS_CONTEXT

Lesen ein SystemKontext Block des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master UDS     : $03   DM_ReadSysContext Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NUM | char | Bei 0x00 wird die Anzahl der insgesamt vorhandenen Bloecke zurueckgegeben |

### STATUS_ZFS_LESEN_GESAMT

Lesen des Zentralen Fehlerspeichers Kompatible Gateways: ZGW_01, ZGW_02, FEM, BDC-LR, BDC 35up Spec.: LH Diagnosemaster SAP 10000504 Es werden nur die Results zurückgeliefert, welche vom vorliegenden Gateway auch unterstützt werden. Pro Fehlereintrag ein Resultset. --------- UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     :     $00   DM_Lock UDS     :     $01   DM_Unlock UDS     :     $03   DM_ReadSysContext UDS     :     $04   DM_ReadEvent UDS     :     $F3   DM_ReadFormatVersion Mit SubFunction 0xF3 ReadFormatVersion wird geprüft, um welche ZFS-Version es sich handelt (Systemkontext-Version). Es wird im Jobverlauf ausserdem von jedem SG, zu welchem ein DTC eingetragen ist, der SGBD-Index mit UDS 22 F150 abgefragt. Um die SGBD-Namen korrekt zu bestimmen, wird die T_GRTB.PRG herangezogen. Aus den entsprechenden SGBDn werden die FOrtTexte der vorhandenen DTCs extrahiert.

_No arguments._

### STATUS_ZFS_LESEN_REDUZIERT

Lesen einer Teilmenge des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $00   DM_Lock UDS     : $01   DM_Unlock UDS     : $04   DM_ReadEvent Modus   : Default

_No arguments._

### STATUS_ZFS_FORMAT_VERSION

MAPPING Version und Systemkontext Version auslesen UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $F3   Version Modus   : Default

_No arguments._

### STEUERN_ZFS_LOCK

Sperren des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $00   DM_Lock Modus   : Default

_No arguments._

### STATUS_ZFS_STATUS_INDICATOR

Statusindikator Ringspeicher (für ZFS Mappings/Systemkontexte) nach LH DM DMA_PA_9125 Es wird zurückgegeben, ob der ZFS bereits 'voll' ist, so dass bei weiteren Einträgen alte überschrieben werden Ausserdem der 'START' Zeitstempel, ab dem im laufenden LifeCycle der Ringspeicher wiederholt überschrieben wurde, so dass ZFS Einträge ab dann ganz geblockt wurden. Details im LH Diagnosemaster 4.1.3.2.2 Zentraler Fehlerspeicher / Central fault memory speziell: DMA_PA_9125 und DMA_PA_9137, DMA_PA_8688, DMA_PA_9139, DMA_PA_9140 UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $08   Statusindikator

_No arguments._

### STATUS_ZFS_SYS_CONTEXT2

Lesen ein SystemKontext Block des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master UDS     : $06   DM_ReadSysContext2 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NUM | char | Bei 0x00 wird die Anzahl der insgesamt vorhandenen Bloecke zurueckgegeben |

### STATUS_ZFS_MAPPING2

Lesen ein Mapping Block des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master UDS     : $07   DM_ReadMapping2 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NUM | char | Bei 0x00 wird die Anzahl der insgesamt vorhandenen Bloecke zurueckgegeben |

### STEUERN_SET_GW_ROUTING

Die applikative Routing Funktionalität ist von Gateway-SG zwischen den Busdomänen ein-/ausschaltbar bereitzustellen. Die Diagnose-Nachrichten sind unabhängig von der applikativen Routing-Funktionalität UDS   : $31 RoutineControl $01 StartRoutine $A230 RoutineIdentifier SetGWRouting $?? Enable ($00)/ Disable ($01)

| Name | Type | Description |
| --- | --- | --- |
| APPL_ROUTING | string | "unterstützt"       -> Applikative-Routing Aktiv "nicht unterstützt" -> Applikative-Routing NICHT Aktiv table TabGWRouting TEXT Default: "unterstützt" |

### STEUERN_FLEXRAY_PFAD

Steuert den Status aller FR Pfade aus/ein UDS  : $31    RoutineControl UDS  : $01    StartRoutine UDS  : $A233  SteuernFlexRayPfad

| Name | Type | Description |
| --- | --- | --- |
| PFAD_X | int | FR PFad 0x00 - 0x07 |
| PFAD_X_STEUERN | int | 0x00=AUS, 0x01=EIN |

### STEUERN_LEARN_FLEXRAY

Automatische Abschaltung von nicht benötigten Flexrayästen des Sternkopplers Pre-Conditions: SVT_Soll auf dem ZGW schreiben Parameter sind hier nicht notwendig,da fuer die Internen Timeouts Defaultwerte verwendet werden: jeweils 200ms und 5000ms UDS  : $31     RoutineControl UDS  : $01     StartRoutine UDS  : $A234   SteuernLearnFlexRay

_No arguments._

### STEUERN_RESET_LEARN_FLEXRAY

Führt ein Learn FlexRay aus UDS  : $31     RoutineControl UDS  : $01     StartRoutine UDS  : $A235   SteuernResetLearnFlexRay

_No arguments._

### STEUERN_DEACTIVATE_MESSAGE_LOGGING

Stoppt das Ausleiten von Nachrichten an die durch STEUERN_ACTIVATE_MESSAGE_LOGGING definierte Nachrichtensenke Gültig ab die F10 UDS   : $31 RoutineControl $02 StopRoutine $A236 RoutineIdentifier Receive CAN Frame

_No arguments._

### STEUERN_ACTIVATE_MESSAGE_LOGGING

Aktiviert das Ausleiten von Nachrichten an eine externe Nachrichtensenke gemäß den gesetzten Filtern Gültig ab die F10 UDS   : $31 RoutineControl $01 StartRoutine $A236 RoutineIdentifier Receive CAN Frame $?? BUS_ID $?? IP_Adresse $?? PORT

| Name | Type | Description |
| --- | --- | --- |
| BUS_ID | char | Bus Identifier: (1 Byte) 0 Body-CAN 1 FA-CAN 2 K-CAN 3 D-CAN 4 FlexRay 5 MOST 7 Ethernet |
| IP_ADRESSE_BYTE1 | char | IP Adresse der Nachrichtensenke 1.Byte |
| IP_ADRESSE_BYTE2 | char | IP Adresse der Nachrichtensenke 2.Byte |
| IP_ADRESSE_BYTE3 | char | IP Adresse der Nachrichtensenke 3.Byte |
| IP_ADRESSE_BYTE4 | char | IP Adresse der Nachrichtensenke 4.Byte |
| PORT | int | Portnummer der externen Nachrichtensenke (2 Bytes) |

### STEUERN_RECEIVE_CAN_FRAME_STOP

Der Empfang der CAN-Nachricht mit der angegebenen ID wird beendet Gültig ab die F10 UDS   : $31 RoutineControl $02 StopRoutine $A237 RoutineIdentifier Receive CAN Frame $?? CAN_ID

| Name | Type | Description |
| --- | --- | --- |
| CAN_ID | int | CAN Identifier der CAN_FRAME (2 Bytes) |

### STEUERN_RECEIVE_CAN_FRAME_START

Empfangen von CAN ab die F10 UDS   : $31 RoutineControl $01 StartRoutine $A237 RoutineIdentifier Receive CAN Frame $?? BUS_INDEX $?? CAN_ID $?? R_WIEDERHOLUNGEN $?? TO_TIMEOUT

| Name | Type | Description |
| --- | --- | --- |
| BUS_INDEX | char | Bit 0: Body-CAN Bit 1: FA-CAN Bit 2: IuK-CAN Bit 3: D-CAN Bit 4: ZSG-CAN Bit 5: FAS-CAN Bit 6: Body2-CAN Bit 7: HS-CAN |
| R_WIEDERHOLUNGEN | int | Anzahl der Wiederholungen (2 Bytes) |
| CAN_ID | int | CAN Identifier der CAN_FRAME (2 Bytes) |
| TO_TIMEOUT | long | Timeout beim Empfang der Nachricht in ms. (4 Bytes) |

### STEUERN_SEND_CAN_FRAME_START

Senden auf CAN ab die F10 UDS   : $31 RoutineControl $01 StartRoutine $A238 RoutineIdentifier Send CAN Frame $?? BUS_INDEX $?? CAN_ID $?? R_WIEDERHOLUNGEN $?? TO_TIMEOUT

| Name | Type | Description |
| --- | --- | --- |
| BUS_INDEX | char | Bit 0: Body-CAN Bit 1: FA-CAN Bit 2: IuK-CAN Bit 3: D-CAN Bit 4: ZSG-CAN Bit 5: FAS-CAN Bit 6: Body2-CAN Bit 7: HS-CAN |
| TI_ZYKLUSZEIT | long | Zykluszeit in ms. (4 Bytes) (falls R_WIEDERHOLUNGEN > 1) |
| R_WIEDERHOLUNGEN | long | Anzahl der Wiederholungen (4 Bytes) 0xFFFFFFFF: unendlich verschicken |
| CAN_ID | int | CAN Identifier der CAN_FRAME (2 Bytes) |
| DL_LAENGE | char | Länge der Payload (1 Byte) |
| PAYLOAD | string | Payload der CAN_FRAME (1 - 8 Bytes) <PL1><PL2>...<PL8> Beispiel: A0FF01FF00       (5 Bytes) A0FF01FF00010001 (8 Bytes) |

### STEUERN_SEND_CAN_FRAME_STOP

Der Sendung der CAN-Nachricht mit der angegebenen ID wird beendet Gültig ab die F10 UDS   : $31 RoutineControl $02 StopRoutine $A238 RoutineIdentifier Receive CAN Frame $?? CAN_ID

| Name | Type | Description |
| --- | --- | --- |
| CAN_ID | int | CAN Identifier der CAN_FRAME (2 Bytes) |

### STEUERN_BUSSE_WACH_HALTEN

Nach Ausschaltung der Klemme 15, bleibt der Fzg wach durch verlaengerten Timeout UDS   : $31   RoutineControl UDS   : $01   StartRoutine UDS   : $A239 SteuernBusseWachHalten

| Name | Type | Description |
| --- | --- | --- |
| NACHLAUFZEIT | unsigned int | Nachlaufzeit in Sekunden Max. 255 Sekunden Skalierung: 1 entspricht 1 Sekunde |

### _STEUERN_ETHERNET_MIRRORING

Ethernet Mirroring aktivieren und deaktivieren UDS   : $31   RoutineControl $01   StartRoutine $F701 Beispiel --> eingehender und ausgehender Traffic von BR_0 und BR_1 auf Ziel-Port BR_4 --> MIRRORING (0x01), ZIEL_PORT (0x04), EINGANGS_PORT_MASKE (0x03), AUSGANGS_PORT_MASKE (0x03)

| Name | Type | Description |
| --- | --- | --- |
| MIRRORING | unsigned char | 0x00 = Mirroring deaktivieren, 0x01 = Mirroring aktivieren Beim Deaktivieren sind alle Parameter anzugeben, diese werden aber nicht beruecksichtigt. Es wird immer das gesamte Mirroring deaktiviert. |
| ZIEL_PORT | unsigned char | 0x00 -> BR_0 0x01 -> BR_1 0x02 -> BR_2 0x03 -> BR_3 0x04 -> BR_4 0x05 -> BR_5 |
| EINGANGS_PORT_MASKE | unsigned char | Von den angegebenen Ports wird der eingehende Netzwerkverkehr auf den Ziel-Port gespiegelt Eingangs Port Maske -------\| -> BR_0 ------\|- -> BR_1 -----\|-- -> BR_2 ----\|--- -> BR_3 ---\|---- -> BR_4 --\|----- -> BR_5 -\|------ -> ZGW (IMP) \|------- -> OBD / Body |
| AUSGANGS_PORT_MASKE | unsigned char | Von den angegebenen Ports wird der ausgehende Netzwerkverkehr auf den Ziel-Port gespiegelt Ausgangs Port Maske -------\| -> BR_0 ------\|- -> BR_1 -----\|-- -> BR_2 ----\|--- -> BR_3 ---\|---- -> BR_4 --\|----- -> BR_5 -\|------ -> ZGW (IMP) \|------- -> OBD / Body |

### _STEUERN_PORT_RTE_BUFFER_TRACE

Festlegen des Ausgangsport für den RTE Buffer Trace UDS   : $31   RoutineControl $01   StartRoutine $F705

| Name | Type | Description |
| --- | --- | --- |
| PORT | unsigned char | 0x00 -> BR_0 0x01 -> BR_1 0x02 -> BR_2 0x03 -> BR_3 |

### STEUERN_ROE_STOP_PERS_TAS_DF

Persistentes Deaktivieren der aktiven Fehlermeldung ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_INITIALISIERUNG_CHECK

Persistentes Aktivieren der aktiven Fehlermeldung an alle Diagnosemasterclients ueber TAS mittels funktionaler Adressierung UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_START_PERS_TAS_DF

Persistentes Aktivieren der aktiven Fehlermeldung ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_INITIALISIERUNG

Persistentes Aktivieren der aktiven Fehlermeldung an alle Diagnosemasterclients ueber TAS UDS   : $86 ResponseOnEvent $C5 Start persistent, suppressPosRspMsg $02 (EventWindowTime)

_No arguments._

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
| 0xFFFF | IDENTIFIER_UNKNOWN | - | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |

### FEHLERKLASSE

| NR | TEXT |
| --- | --- |
| 0x00 | Keine Fehlerklasse verfuegbar |
| 0x01 | Ueberpruefung bei naechstem Werkstattbesuch |
| 0x02 | Ueberpruefung bei naechstem Halt |
| 0x04 | Ueberpruefung sofort erforderlich ! |
| 0xFF | unbekannte Fehlerklasse |

### DIAGMODE

| NR | MODE | MODE_TEXT |
| --- | --- | --- |
| 0x00 | UNGUELTIG | DefaultMode |
| 0x01 | DEFAULT | DefaultMode |
| 0x02 | ECUPM | ECUProgrammingMode |
| 0x03 | ECUEXTDIAG | ECUExtendedDiagnosticSession |
| 0x04 | ECUSSDS | ECUSafetySystemDiagnosticSession |
| 0x40 | ECUEOL | ECUEndOfLineSession |
| 0x41 | ECUCODE | ECUCodingSession |
| 0x42 | ECUSWT | ECUSwtSession |
| 0x43 | ECUHDD | ECUHDDDownloadSession |
| 0x4F | ECUDEVELOP | ECUDevelopmentSession |
| 0x5F | ECUGDM | ECUGarageDiagnoseMode |
| 0xXY | -- | unbekannter Diagnose-Mode |

### IARTTEXTE

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

### UDS_TAB_ROE_AKTIV

| NR | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung deaktiviert |
| 0x01 | Aktive Fehlermeldung aktiviert |
| 0xFF | Status der aktiven Fehlermeldung nicht feststellbar |

### ARG_0X1025_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZUSTAND | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Aktivierung  0x01: Deaktivierung |

### ARG_0X1046_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Portindex des zur diagnostizierenden Ports/PHYs (beginnend bei Port 0). Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports) |

### ARG_0X1047_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Portindex Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports) |

### ARG_0X1049_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des Ports, für den die Daten ausgelesen werden sollen. Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports)  Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports) |

### ARG_0X104C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des Ports, für den der Testmodus geschaltet werden soll. |
| TEST_DURATION | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeit, für die der Testmodus geschaltet werden soll. Der Wert wird im SG mit 10 multipliziert, so dass die Testdauer von 0s bis 2550s variiert werden kann. |
| TEST_MODE_ID | + | - | 0-n | high | unsigned char | - | ETH_TEST_MODE_TAB | - | - | - | - | - | ID des Testmodus, in den der PHY geschaltet werden soll |

### ARG_0X1200_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WHITELIST_SECURE_TOKEN_SIZE | + | - | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt die Länge des Secure Token an inklusive der neuen Whitelist. (Angabe in uint) |
| WHITELIST_SECURE_TOKEN_DATA | + | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Enthält den Secure Token inklusive der Whitelist |

### ARG_0X1201_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WHITELIST_SECURE_TOKEN_SIZE | - | + | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt die Größe des Secure Tokens an. |
| WHITELIST_SECURE_TOKEN_DATA | - | + | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Enthält den Secure Token |

### ARG_0X400A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CDC_MAX_UEBERTRAGUNGSRATE | 0-n | high | unsigned long | - | - | - | - | - | - | - | Gibt die maximale Übertragungsrate in kByte mit. |

### ARG_0X400B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CDC_UEBERTRAGUNGSZYKLUSZEIT | 0-n | high | unsigned int | - | - | - | - | - | - | - | Gibt die Übertragungszykluszeit in ms mit. |

### ARG_0X400C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CDC_WARTEZEIT_SKRIPTRESTART | 0-n | high | unsigned int | - | - | - | - | - | - | - | Setzt die Wartezeit (in ms) für den Restart in die Triggerebene eines gekillten Skripts. |

### ARG_0XE251_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ETH_TOPOLOGY_DATA | DATA | high | data[100] | - | - | 1.0 | 1.0 | 0.0 | - | - | Datenstruktur zur Darstellung der ETH-Topologie (Diagnoseadressen zu Portbelegungen) |

### ARG_0XF70C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CDC_KAMPAGNEN_ID | + | - | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt die Kampagnen ID der zu löschenden Jobs an. |

### ARP_DISCARD_TYPE_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Existierender ARP Eintrag (identifiziert durch DISCARDED_ARP_ENTRY) wurde durch einen neuen Eintrag ersetzt |
| 0x01 | neuer Eintrag (identifiziert durch DISCARDED_ARP_ENTRY) wurde verworfen |
| 0xFF | Wert ungültig |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

### BF_ETH_PORT_CONFIGURATION

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PORT_00 | 0-n | high | unsigned int | 0x0001 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 00 |
| STAT_PORT_01 | 0-n | high | unsigned int | 0x0002 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 01 |
| STAT_PORT_02 | 0-n | high | unsigned int | 0x0004 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 02 |
| STAT_PORT_03 | 0-n | high | unsigned int | 0x0008 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 03 |
| STAT_PORT_04 | 0-n | high | unsigned int | 0x0010 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 04 |
| STAT_PORT_05 | 0-n | high | unsigned int | 0x0020 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 05 |
| STAT_PORT_06 | 0-n | high | unsigned int | 0x0040 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 06 |
| STAT_PORT_07 | 0-n | high | unsigned int | 0x0080 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 07 |
| STAT_PORT_08 | 0-n | high | unsigned int | 0x0100 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 08 |
| STAT_PORT_09 | 0-n | high | unsigned int | 0x0200 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 09 |
| STAT_PORT_10 | 0-n | high | unsigned int | 0x0400 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 10 |
| STAT_PORT_11 | 0-n | high | unsigned int | 0x0800 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 11 |
| STAT_PORT_12 | 0-n | high | unsigned int | 0x1000 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 12 |
| STAT_PORT_13 | 0-n | high | unsigned int | 0x2000 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 13 |
| STAT_PORT_14 | 0-n | high | unsigned int | 0x4000 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 14 |
| STAT_PORT_15 | 0-n | high | unsigned int | 0x8000 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 15 |

### BF_OBD_FW_STATUS_ZV

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TUER_ENTRIEGELT | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0x00: alle Türen verriegelt 0x01: mindestens eine Tür entriegelt |
| STAT_TUER_VERRIEGELT | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0x00: alle Türen entriegelt 0x01: mindestens eine Tür verriegelt |
| STAT_INTERNER_ZV_MASTER | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0x00: ZV Master ungesichert 0x01: ZV Master gesichert |
| STAT_SIGNAL | 0/1 | high | unsigned char | 0x0F | - | - | - | - | 0x00: Noch kein Status empfangen 0x01: Signal ungültig |

### BF_PHY_LINK_STATE_BTFLD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_LINK_STATE_PORT_00 | 0-n | high | unsigned int | 0x0001 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 0 |
| STAT_PHY_LINK_STATE_PORT_01 | 0-n | high | unsigned int | 0x0002 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 1 |
| STAT_PHY_LINK_STATE_PORT_02 | 0-n | high | unsigned int | 0x0004 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 2 |
| STAT_PHY_LINK_STATE_PORT_03 | 0-n | high | unsigned int | 0x0008 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 3 |
| STAT_PHY_LINK_STATE_PORT_04 | 0-n | high | unsigned int | 0x0010 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 4 |
| STAT_PHY_LINK_STATE_PORT_05 | 0-n | high | unsigned int | 0x0020 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 5 |
| STAT_PHY_LINK_STATE_PORT_06 | 0-n | high | unsigned int | 0x0040 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 6 |
| STAT_PHY_LINK_STATE_PORT_07 | 0-n | high | unsigned int | 0x0080 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 7 |
| STAT_PHY_LINK_STATE_PORT_08 | 0-n | high | unsigned int | 0x0100 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 8 |
| STAT_PHY_LINK_STATE_PORT_09 | 0-n | high | unsigned int | 0x0200 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 9 |
| STAT_PHY_LINK_STATE_PORT_10 | 0-n | high | unsigned int | 0x0400 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 10 |
| STAT_PHY_LINK_STATE_PORT_11 | 0-n | high | unsigned int | 0x0800 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 11 |
| STAT_PHY_LINK_STATE_PORT_12 | 0-n | high | unsigned int | 0x1000 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 12 |
| STAT_PHY_LINK_STATE_PORT_13 | 0-n | high | unsigned int | 0x2000 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 13 |
| STAT_PHY_LINK_STATE_PORT_14 | 0-n | high | unsigned int | 0x4000 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 14 |
| STAT_PHY_LINK_STATE_PORT_15 | 0-n | high | unsigned int | 0x8000 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 15 |

### BF_TEILNETZ_MASTER_STATUS_0_3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONFIGURATION | 0-n | high | unsigned long | 0x00000001 | TAB_EIN_AUS_1BIT | - | - | - | Status der Konfiguration |
| ANHAENGERBETRIEB | 0-n | high | unsigned long | 0x00000002 | TAB_EIN_AUS_1BIT | - | - | - | Status Anhängerbetrieb |
| HECKKLAPPENBETRIEB | 0-n | high | unsigned long | 0x00000004 | TAB_EIN_AUS_1BIT | - | - | - | Status Heckklappenbetrieb |
| CABRIOBETRIEB | 0-n | high | unsigned long | 0x00000008 | TAB_EIN_AUS_1BIT | - | - | - | Status Cabriobetrieb |
| SITZBETRIEB_FAHRER | 0-n | high | unsigned long | 0x00000010 | TAB_EIN_AUS_1BIT | - | - | - | Status Sitzbetrieb Fahrer |
| SITZBETRIEB_BEIFAHRER | 0-n | high | unsigned long | 0x00000020 | TAB_EIN_AUS_1BIT | - | - | - | Status Sitzbetrieb_Beifahrer |
| SITZBETRIEB_FAHRER_HINTEN | 0-n | high | unsigned long | 0x00000040 | TAB_EIN_AUS_1BIT | - | - | - | Status Sitzbetrieb_Fahrer_hinten |
| SITZBETRIEB_BEIFAHRER_HINTEN | 0-n | high | unsigned long | 0x00000080 | TAB_EIN_AUS_1BIT | - | - | - | Status Sitzbetrieb_Beifahrer_hinten |
| KLIMABETRIEB | 0-n | high | unsigned long | 0x00000100 | TAB_EIN_AUS_1BIT | - | - | - | Status Klimabetrieb |
| ENTERTAINMENTBETRIEB | 0-n | high | unsigned long | 0x00000200 | TAB_EIN_AUS_1BIT | - | - | - | Status Entertainmentbetrieb |
| EXTERNE_KOMMUNIKATION | 0-n | high | unsigned long | 0x00000400 | TAB_EIN_AUS_1BIT | - | - | - | Status Externe_Kommunikation |
| ASSISTENZ_PARKEN_LOW | 0-n | high | unsigned long | 0x00000800 | TAB_EIN_AUS_1BIT | - | - | - | Status Assistenz_Parken_low |
| ASSISTENZ_PARKEN_HIGH | 0-n | high | unsigned long | 0x00001000 | TAB_EIN_AUS_1BIT | - | - | - | Status Assistenz_Parken_high |
| ASSISTENZ_FAHREN_LOW | 0-n | high | unsigned long | 0x00002000 | TAB_EIN_AUS_1BIT | - | - | - | Status Assistenz_Fahren_low |
| ASSISTENZ_FAHREN_HIGH | 0-n | high | unsigned long | 0x00004000 | TAB_EIN_AUS_1BIT | - | - | - | Status Assistenz_Fahren_high |
| LADEN | 0-n | high | unsigned long | 0x00008000 | TAB_EIN_AUS_1BIT | - | - | - | Status Laden |
| LICHTBETRIEB | 0-n | high | unsigned long | 0x00010000 | TAB_EIN_AUS_1BIT | - | - | - | Status Lichtbetrieb |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### CABLE_DIAG_RESULT_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Verkabelungsfehler erkannt |
| 0x01 | Kurzschluss zwischen Busleitungen erkannt |
| 0x02 | Unterbrechung einer oder beider Busleitungen erkannt |
| 0x03 | Kurschluss nach Masse erkannt |
| 0x04 | Kurschluss auf Vbat / 12V erkannt |
| 0x05 | Kabeldiagnose wurde nicht erfolgreich beendet |
| 0x10 | Kabeldiagnose läuft noch |
| 0xFF | Kabeldiagnose konnte nicht auf angefragtem Port gestartet werden |

### CABLE_DIAG_STATE

| WERT | TEXT |
| --- | --- |
| 0x20 | Kabeldiagnose wird gestartet |
| 0x10 | Kabeldiagnose läuft bereits auf angefordertem oder anderen Port |
| 0xFF | Kabeldiagnose kann nicht gestartet werden, Kabeldiagnose wird nicht unterstützt oder Port existiert nicht |

### ETH_LEARN_PORT_CONFIGURATION

| WERT | TEXT |
| --- | --- |
| 0x0 | Lernen erfolgreich |
| 0x1 | Lernen nicht erfolgreich oder noch nicht gelernt |

### ETH_PHY_TEST_MODE_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | PHY wird in den Testmodus geschaltet |
| 0x01 | PHY kann nicht in den Testmodus geschaltet werden |
| 0x02 | Gewünschter Testmodus für Port/Switch nicht verfügbar |

### ETH_PORT_CONFIGURATION

| WERT | TEXT |
| --- | --- |
| 0x0 | link-down |
| 0x1 | link-up |

### ETH_TEST_MODE_TAB

| WERT | TEXT |
| --- | --- |
| 0x01 | Transmit droop test Mode |
| 0x02 | Transmit Jitter test in MASTER Mode |
| 0x03 | Transmit Jitter test in SLAVE Mode |
| 0x04 | Transmit Distortion test |
| 0x05 | Normal Operation at full power necessary for the PSD mask Test |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | ja |
| F_UWB_SATZ | 8 |
| F_HLZ_VIEW | ja |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021000 | Energiesparmode aktiv | 0 |
| 0x02FF10 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x801C00 | Schreibfehler: Schreibzugriff auf VCM-Daten fehlgeschlagen | 0 |
| 0x801C01 | Lesefehler: Lesezugriff auf VCM Daten fehlgeschlagen | 0 |
| 0x801C03 | Signaturprüfung: Fehlerhafte Signatur beim Schreiben eines Datums | 1 |
| 0x801C04 | Signaturerzeugung: Es konnte keine Signatur für ein zu lesendes Datum erzeugt werden | 1 |
| 0x801C07 | Steuergerätetauscherkennung: Liste getauschter Steuergeräte konnte nicht erstellt werden. | 1 |
| 0x801C10 | Anforderung Zustand ParkenBN_niO Wecker | 1 |
| 0x801C16 | Fehlerhaftes Einschlafen im Zustand Standfunktionen_Kunden_nicht_im_Fzg | 1 |
| 0x801C17 | Anforderung Zustand Parken_BN_iO Einschlafverhinderer | 1 |
| 0x801C18 | Anforderung Zustand Parken_BN_niO Einschlafverhinderer | 1 |
| 0x801C19 | Fehlerhaftes Einschlafen im Zustand Parken_BN_niO | 1 |
| 0x801C60 | Flexray Autolern nicht in Ordnung | 1 |
| 0x801C71 | GW Tabelle nicht in Ordnung | 1 |
| 0x801C74 | Bidirektionaler Messagetunnel Aktiv | 1 |
| 0x801C76 | Uneindeutiges Routing | 1 |
| 0x801C77 | Debug CAN ist aktiviert | 0 |
| 0x801C7B | Mirror Mode im Ethernet Switch aktiv | 0 |
| 0x801C7C | Serial Logging Active | 1 |
| 0x801C7D | Short Circuit on Ethernet WUP line | 1 |
| 0x801C80 | Anforderung RemoteSoftwareUpdate | 1 |
| 0x801C81 | Externe Aktivierungsleitung durch Diagnose aktiviert | 1 |
| 0xCD040A | FA-CAN Control Module Bus OFF | 0 |
| 0xCD041E | IuK-CAN Control Module Bus OFF | 0 |
| 0xCD041F | FLEXRAY Physical bus error | 0 |
| 0xCD0420 | FLEXRAY controller error | 0 |
| 0xCD042F | FLEXRAY physical bus error on Bus-Branch 0 | 0 |
| 0xCD0431 | FLEXRAY physical bus error on Bus-Branch 1 | 0 |
| 0xCD0433 | FLEXRAY physical bus error on Bus-Branch 2 | 0 |
| 0xCD0435 | FLEXRAY physical bus error on Bus-Branch 3 | 0 |
| 0xCD0437 | FLEXRAY physical bus error on Bus-Branch 4 | 0 |
| 0xCD0439 | FLEXRAY physical bus error on Bus-Branch 5 | 0 |
| 0xCD043B | FLEXRAY physical bus error on Bus-Branch 6 | 0 |
| 0xCD043D | FLEXRAY physical bus error on Bus-Branch 7 | 0 |
| 0xCD0468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xCD0487 | FLEXRAY StartUpFailed | 0 |
| 0xCD050A | ZSG-CAN Control Module Bus OFF | 0 |
| 0xCD0514 | B2-CAN Control Module Bus OFF | 0 |
| 0xCD0518 | FAS-CAN Control Module Bus OFF | 0 |
| 0xCD0600 | Ethernet: physikalischer Fehler (link off) | 1 |
| 0xCD0602 | Ethernet: Link-Qualität niedrig | 1 |
| 0xCD0603 | Ethernet: Kommunikationsfehler (Link-Abbruch) durch Steuergeräte-Reset | 1 |
| 0xCD0604 | Ethernet: Unerwarteter Link aufgebaut | 1 |
| 0xCD0BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xCD1410 | Empfang keine Systemzeit | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | PORT_LINK_OFF_STATUS_00 | 0-n | High | 0x0001 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0002 | PORT_LINK_OFF_STATUS_01 | 0-n | High | 0x0002 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0003 | PORT_LINK_OFF_STATUS_02 | 0-n | High | 0x0004 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0004 | PORT_LINK_OFF_STATUS_03 | 0-n | High | 0x0008 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0005 | PORT_LINK_OFF_STATUS_04 | 0-n | High | 0x0010 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0006 | PORT_LINK_OFF_STATUS_05 | 0-n | High | 0x0020 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0007 | PORT_LINK_OFF_STATUS_06 | 0-n | High | 0x0040 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0008 | PORT_LINK_OFF_STATUS_07 | 0-n | High | 0x0080 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0009 | PORT_LINK_OFF_STATUS_08 | 0-n | High | 0x0100 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000A | PORT_LINK_OFF_STATUS_09 | 0-n | High | 0x0200 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000B | PORT_LINK_OFF_STATUS_10 | 0-n | High | 0x0400 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000C | PORT_LINK_OFF_STATUS_11 | 0-n | High | 0x0800 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000D | PORT_LINK_OFF_STATUS_12 | 0-n | High | 0x1000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000E | PORT_LINK_OFF_STATUS_13 | 0-n | High | 0x2000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000F | PORT_LINK_OFF_STATUS_14 | 0-n | High | 0x4000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0010 | PORT_LINK_OFF_STATUS_15 | 0-n | High | 0x8000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0011 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_00 | 0-n | High | 0x0001 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0012 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_01 | 0-n | High | 0x0002 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0013 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_02 | 0-n | High | 0x0004 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0014 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_03 | 0-n | High | 0x0008 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0015 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_04 | 0-n | High | 0x0010 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0016 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_05 | 0-n | High | 0x0020 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0017 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_06 | 0-n | High | 0x0040 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0018 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_07 | 0-n | High | 0x0080 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0019 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_08 | 0-n | High | 0x0100 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001A | DETECTED_UNEXPECTED_LINK_STATUS_PORT_09 | 0-n | High | 0x0200 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001B | DETECTED_UNEXPECTED_LINK_STATUS_PORT_10 | 0-n | High | 0x0400 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001C | DETECTED_UNEXPECTED_LINK_STATUS_PORT_11 | 0-n | High | 0x0800 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001D | DETECTED_UNEXPECTED_LINK_STATUS_PORT_12 | 0-n | High | 0x1000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001E | DETECTED_UNEXPECTED_LINK_STATUS_PORT_13 | 0-n | High | 0x2000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001F | DETECTED_UNEXPECTED_LINK_STATUS_PORT_14 | 0-n | High | 0x4000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0020 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_15 | 0-n | High | 0x8000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0021 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | - | - | - | - |
| 0x0022 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | - | - | - | - |
| 0x0023 | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | - | - | - | - |
| 0x0024 | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | - | - | - | - |
| 0x0025 | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | - | - | - | - |
| 0x0026 | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | - | - | - | - |
| 0x0027 | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | - | - | - | - |
| 0x0028 | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | - | - | - | - |
| 0x0029 | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | - | - | - | - |
| 0x002A | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | - | - | - | - |
| 0x002B | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | - | - | - | - |
| 0x002C | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | - | - | - | - |
| 0x002D | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | - | - | - | - |
| 0x002E | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | - | - | - | - |
| 0x002F | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | - | - | - | - |
| 0x0030 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1757 | Signalqualität | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x4082 | Unterspannung an Vcc | 0-n | High | 0xFF | TABVCCUNDERVOLTAGE | - | - | - |
| 0x4083 | Unterspannung an Vio | 0-n | High | 0xFF | TABVIOUNDERVOLTAGE | - | - | - |
| 0x4084 | Unterspannung an Vbat. Keine Energieversorgung fuer interne Regler und keine Erkennung von Wakeup Symbole | 0-n | High | 0xFF | TABVBATUNDERVOLTAGE | - | - | - |
| 0x4085 | Uebertemperatur | 0-n | High | 0xFF | TABOVERTEMPERATURE | - | - | - |
| 0x4086 | TxEn ist permanent unten | 0-n | High | 0xFF | TABTXENISPERMANENTLYLOW | - | - | - |
| 0x4099 | Bus Line defekt | 0-n | High | 0xFF | TABBUSLINEDEFEKT | - | - | - |
| 0x4100 | UBat - Betriebsspannung am SG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x417E | EINGANGS_PORT_MASKE | 0-n | High | 0xFF | TAB_EINGANGS_PORT_MASKE | - | - | - |
| 0x417F | AUSGANGS_PORT_MASKE | 0-n | High | 0xFF | TAB_AUSGANGS_PORT_MASKE | - | - | - |
| 0x4180 | Mirror Mode Status | 0-n | High | 0xFF | TAB_MIRROR_MODE_STATUS | - | - | - |
| 0x4181 | Port Link Off Status | 0-n | High | 0xFFFF | TABPORTLINKSTATUS | - | - | - |
| 0x4182 | Port Link Up Status | 0-n | High | 0xFFFF | TABPORTLINKSTATUS | - | - | - |
| 0x4183 | ZIEL_PORT | 0-n | High | 0xFF | TAB_Ziel_Port | - | - | - |
| 0x4185 | Link Reset Status | 0-n | High | 0xFFFF | TABPORTLINKSTATUS | - | - | - |
| 0x4186 | Port 1 SQI Status | 0-n | High | 0xFF | TABPORTSQISTATUS | - | - | - |
| 0x4187 | Port 2 SQI Status | 0-n | High | 0xFF | TABPORTSQISTATUS | - | - | - |
| 0x4188 | Port 3 SQI Status | 0-n | High | 0xFF | TABPORTSQISTATUS | - | - | - |
| 0x4189 | Port 4 SQI Status | 0-n | High | 0xFF | TABPORTSQISTATUS | - | - | - |
| 0x418A | Port 5 SQI Status | 0-n | High | 0xFF | TABPORTSQISTATUS | - | - | - |
| 0x418B | Port 6 SQI Status | 0-n | High | 0xFF | TABPORTSQISTATUS | - | - | - |
| 0x418C | Port 7 SQI Status | 0-n | High | 0xFF | TABPORTSQISTATUS | - | - | - |
| 0x418D | Port 8 SQI Status | 0-n | High | 0xFF | TABPORTSQISTATUS | - | - | - |
| 0x4300 | Uneindeutigkeit_1: SG Diagnose Adresse | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4301 | Uneindeutigkeit_1: gleichwertigen Bussen | 0-n | High | 0xFFFFFFFF | TABBUSMASKE | - | - | - |
| 0x4302 | Uneindeutigkeit_2: SG Diagnose Adresse | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4303 | Uneindeutigkeit_2: gleichwertigen Bussen | 0-n | High | 0xFFFFFFFF | TABBUSMASKE | - | - | - |
| 0x4485 | Lesefehlercode | 0-n | High | 0xFF | TABVCMREADERRORCODE | - | - | - |
| 0x4486 | Schreibfehlercode | 0-n | High | 0xFF | TABVCMWRITEERRORCODE | - | - | - |
| 0x4488 | RoutineId des fehlerhaften DiagnoseServices | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4489 | SubRoutineId des fehlerhaften DiagnoseServices | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x448A | ControlId des fehlerhaften DiagnoseServices | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4490 | EcuId_0 - Steuergeraeteadresse des 1. SGs mit Unterschieden | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4491 | EcuId_1 - Steuergeraeteadresse des 2. SGs mit Unterschieden | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4492 | EcuId_2 - Steuergeraeteadresse des 3. SGs mit Unterschieden | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4493 | EcuId_3 - Steuergeraeteadresse des 4. SGs mit Unterschieden | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4494 | EcuId_4 - Steuergeraeteadresse des 5. SGs mit Unterschieden | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4495 | EcuId_5 - Steuergeraeteadresse des 6. SGs mit Unterschieden | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4496 | EcuCounter - Anzahl der SGn mit Unterschieden | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4498 | Liste getauschter Steuergeräte Generierung Fehlercode | 0-n | High | 0xFF | TABVCMSERIALGENERATIONERRORCODE | - | - | - |
| 0x4502 | Weckende SG - Diagnoseadresse des SGs, dass das Fahrzeug geweckt hat | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4503 | Weckgrund | 0-n | High | 0xFF | TABWECKGRUND | - | - | - |
| 0x4504 | Wachhaltende SG_1 - Diagnoseadresse des 1. SGs, dass das Fahrzeug wachgehalten hat | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4505 | Wachhaltende SG_2 - Diagnoseadresse des 2. SGs, dass das Fahrzeug wachgehalten hat | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4506 | Wachhaltende SG_3 - Diagnoseadresse des 3. SGs, dass das Fahrzeug wachgehalten hat | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4507 | Wachhaltende SG_4 - Diagnoseadresse des 4. SGs, dass das Fahrzeug wachgehalten hat | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4518 | Wachhaltegrund des 1. SGs | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4519 | Wachhaltegrund des 2. SGs | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x451A | Wachhaltegrund des 3. SGs | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x451B | Wachhaltegrund des 4. SGs | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### GROBNAME

| WERT | TEXT |
| --- | --- |
| 0x00 | JBBF |
| 0x01 | AIRBAG |
| 0x02 | SZL |
| 0x04 | VOCS |
| 0x05 | CDM |
| 0x06 | TSVC |
| 0x07 | SME |
| 0x08 | HC |
| 0x0B | SCR |
| 0x0D | HKFM |
| 0x0E | SVT |
| 0x0F | QSG/GHAS |
| 0x10 | ZGW |
| 0x12 | DME/DDE |
| 0x13 | DME/DDE |
| 0x16 | ASA |
| 0x17 | EKP |
| 0x18 | EGS |
| 0x19 | LMV |
| 0x1A | EME |
| 0x1C | ICMQL |
| 0x20 | RDC |
| 0x21 | FRR |
| 0x24 | CVM |
| 0x26 | RSE |
| 0x29 | DSC |
| 0x2A | EMF |
| 0x2B | HSR |
| 0x2C | PMA |
| 0x2E | PCU |
| 0x30 | EPS |
| 0x31 | MMC |
| 0x36 | TELEFON |
| 0x37 | AMP |
| 0x38 | EHC |
| 0x39 | ICMV |
| 0x3A | EME |
| 0x3C | CDC |
| 0x3D | HUD |
| 0x40 | CAS |
| 0x41 | TMS_L |
| 0x42 | TMS_R |
| 0x43 | LHM_L |
| 0x44 | LHM_R |
| 0x46 | GZAL |
| 0x47 | GZAR |
| 0x48 | VSW |
| 0x49 | SECU1 |
| 0x4A | SECU2 |
| 0x4B | TVM |
| 0x4D | EMA_LI |
| 0x4E | EMA_RE |
| 0x50 | SINE |
| 0x54 | RADIO |
| 0x55 | MULF |
| 0x56 | FZD |
| 0x57 | NIVI |
| 0x59 | ALBVF |
| 0x5A | ALBVB |
| 0x5D | KAFAS |
| 0x5E | GWS |
| 0x5F | FLA |
| 0x60 | KOMBI |
| 0x61 | ECALL |
| 0x63 | HEADUNIT |
| 0x64 | PDC |
| 0x67 | ZBE |
| 0x68 | ZBEF |
| 0x69 | FAH |
| 0x6A | BFH |
| 0x6B | HKL |
| 0x6D | FAS |
| 0x6E | BFS |
| 0x71 | AHM |
| 0x72 | FRM |
| 0x73 | CID |
| 0x74 | CIDF |
| 0x75 | CIDF2 |
| 0x76 | VDC |
| 0x77 | RFK |
| 0x78 | IHKA |
| 0x79 | FKA |
| 0x7B | HKA |
| 0xA0 | CIC_HD |
| 0xA5 | RK_VL |
| 0xA6 | RK_VR |
| 0xA7 | RK_HL |
| 0xA8 | RK_HR |
| 0xA9 | MMCDSP |
| 0xFF | Wert ungültig |

### HW_MODEL

| WERT | TEXT |
| --- | --- |
| 0x00 | A-Muster |
| 0x40 | B-Muster |
| 0x80 | C-Muster |
| 0xC0 | D-Muster |
| 0xFF | Wert ungültig |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 8 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x100000 | VcmSoftwareError | 0 |
| 0x100100 | Kontakt zu FZM Slave verloren | 1 |
| 0x100101 | Einschlafbestätigungen nicht vollständig | 1 |
| 0x100102 | Ungültige LocalSleepReadiness-Botschaft empfangen | 1 |
| 0x100104 | HW Weckgrund ZGW | 0 |
| 0x100108 | Functional subnet deactivation due to the startability limit | 0 |
| 0x100109 | Ignoring the functional subnet request due to the startability limit | 0 |
| 0x10010A | Unauthorized request of a functional subnet | 0 |
| 0x10010B | Faulty deregistration behavior | 0 |
| 0x10010C | Faulty signal StatusConditionVehicle | 0 |
| 0x10010D | Faulty signal OSFG | 0 |
| 0x10010E | Faulty signal StatusBus | 0 |
| 0x100200 | Fehlermeldung mit falschem Format empfangen | 0 |
| 0x100203 | DM-Softwarefehler-Info Warnung | 0 |
| 0x100204 | Botschaftsueberwachung: Systemkontextsignal ausgeblieben | 0 |
| 0x100300 | Beauftragung konnte nicht durchgeführt werden, da TAS bereits beschäftigt | 0 |
| 0x100400 | Externes System versucht, F30 zu initiieren, ohne authentisiert zu sein | 0 |
| 0x100401 | FsCSM sendet bei F60 ungueltigen Fingerprint | 0 |
| 0x100403 | FsCSM sendet bei F60 ungueltige Response auf MSM-Challenge | 0 |
| 0x100404 | Externes System sendet bei F310 mit falschem Schluessel verschluesselte Liste | 0 |
| 0x100405 | Externes System sendet bei F310 ungueltige Liste | 0 |
| 0x100406 | FsCSM sendet bei F60 oder F70 keine Antwort | 0 |
| 0x100407 | Externes System sendet bei F210 ungueltiges Zertifikat | 0 |
| 0x100408 | Externes System sendet bei F210 oder F300 ungueltige Response auf MSMChallenge | 0 |
| 0x100409 | Zugangs-STG sendet bei F300 ungueltiges B2VSec-Zertifikat | 0 |
| 0x100410 | Zertifikate auf dem ZGW sind nicht gueltig | 0 |
| 0x100420 | Fehler Komponentenschutz | 1 |
| 0x100506 | UGW SomeIP queue overflow | 0 |
| 0x100600 | Flexray Protokoll Startup Zeit ist zu hoch | 0 |
| 0x100601 | Unerwarteter asynchron Zustand auf Flexraybus | 0 |
| 0x100602 | Verletzung der Frame Slot Grenze wurde erkannt | 0 |
| 0x100603 | FlexRay Frame mit falscher Payload empfangen | 0 |
| 0x100604 | Ein FlexRay Error ist aufgelaufen | 0 |
| 0x100605 | Frame Header Index wird mehrmals von Message Buffers verwendet | 0 |
| 0x100606 | Starcoupler Failure | 0 |
| 0x100607 | Buffer FlexRay Queue Full | 0 |
| 0x100608 | FLEXRAY controller ACS error | 0 |
| 0x100609 | FLEXRAY controller NIT error | 0 |
| 0x100700 | Sekundaerer Anwendungs-Dummy DTC | 0 |
| 0x100701 | Sekundaerer Netzwerk-Dummy DTC | 0 |
| 0x100E00 | Komponente vom Lifecycle ausgeschlossen | 0 |
| 0x101000 | OSEK OS ErrorHook Fehler | 0 |
| 0x101001 | OSEK OS Stack-Overflow Fehler | 0 |
| 0x101002 | Assert | 0 |
| 0x101003 | OSEK OS Board Invalid | 0 |
| 0x101005 | PLL Fehler: PLL-Lock ging verloren, bevor PLL-Routine aufgerufen wurde | 0 |
| 0x101006 | PLL Fehler: PLL lockt nicht bei Umstellen | 0 |
| 0x101007 | PLL Fehler: SW lauft im Normalbetrieb und PLL Lock geht verloren | 0 |
| 0x101008 | nicht auflösbares uneindeutiges Routing - SG nicht in der SVT Soll Tabelle | 0 |
| 0x801030 | Fehler Systemfunktion Fahrzeug-Security Client | 0 |
| 0x801C30 | Multi-Core-Queue Overflow CAN | 1 |
| 0x801C31 | Multi-Core-Queue Overflow FlexRay | 1 |
| 0x801C40 | CDC: Verdränung Event-Datenpaket im Event-Storage | 1 |
| 0x801C41 | CDC: Fehler beim Start des CDC-Framework | 1 |
| 0x801C42 | CDC: Ablehnung Job-Datenpaket bei Installation | 1 |
| 0x801C43 | CDC: Unberechtigte Teilnetzanforderung | 1 |
| 0x801C44 | CDC: Unberechtigter Diagnose-Request | 1 |
| 0x801C45 | CDC: Unberechtigte Ethernet Kommunikation | 1 |
| 0xCD0601 | Ethernet: CRC Fehler | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0031 | PORT_00_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0032 | PORT_01_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0033 | PORT_02_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0034 | PORT_03_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0035 | PORT_04_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0036 | PORT_05_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0037 | PORT_06_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0038 | PORT_07_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1754 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4081 | Anzahl der Synchronisationsversuche | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4082 | Unterspannung an Vcc | 0-n | High | 0xFF | TABVCCUNDERVOLTAGE | - | - | - |
| 0x408D | Zeit der Startup Phase | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4090 | Received payload length | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4091 | Frame description index | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4092 | CHI Error Flag Register | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4093 | Protocol Interrupt Flag Register 0 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4094 | Protocol Interrupt Flag Register 1 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4095 | Wrong Data Offset | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4096 | Buffer Index der mehrmals auftritt | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4097 | Erster Buffer in dem der Buffer Index vorkommt | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4098 | Zweiter Buffer in dem der Buffer Index vorkommt | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4281 | Runlevel of excluded lifecycle component | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4282 | Index in runlevel of excluded lifecycle component | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4283 | Lifecycle state of excluded component | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4284 | Lifecycle-Modus | 0-n | High | 0xFF | TABLIFECYCLEMODE | - | - | - |
| 0x4304 | Uneindeutigkeit_1: SG Diagnose Adresse | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4305 | Uneindeutigkeit_1: gleichwertigen Bussen | 0-n | High | 0xFFFFFFFF | TABBUSMASKE | - | - | - |
| 0x4306 | Uneindeutigkeit_2: SG Diagnose Adresse | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4307 | Uneindeutigkeit_2: gleichwertigen Bussen | 0-n | High | 0xFFFFFFFF | TABBUSMASKE | - | - | - |
| 0x4481 | SoftwareModule | 0-n | High | 0xFF | TABSOFTWAREMODUL | - | - | - |
| 0x4482 | SoftwareErrorCode | 0-n | High | 0xFF | TABSOFTWAREERROR | - | - | - |
| 0x4483 | SoftwareErrorData | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4513 | HW Weckgrund | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4515 | Status Vehicle | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4516 | SubnetID | 0-n | High | 0xFF | TAB_SUBNETID | - | - | - |
| 0x4517 | ClientID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4520 | Status Bus | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4521 | Status BasisSubnets | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4522 | Status FunctionalSubnets | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4581 | Steuergeraeteadresse des meldenden SGs | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4582 | Illegales Format der Nachricht | 0-n | High | 0xFF | TABILLEGALESNACHRICHTENFORMAT | - | - | - |
| 0x4585 | Allgemeiner Fehlercode fuer Softwarefehler | 0-n | High | 0xFF | TABSWFEHLERCODE | - | - | - |
| 0x4586 | Nachrichten-ID | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4587 | Spezieller Fehlercode fuer Softwarefehler | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4601 | Aktiver Auftraggeber | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4603 | Neuer Auftraggeber | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4680 | FZGS-Fehlercode | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4681 | ID des fehler-meldenden SGs | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4682 | ID des fehlerhaften SGs | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4683 | FZGS-Fehlercode Client | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4700 | CDC_EVENT_TIMESTAMP | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x4701 | CDC_EVENT_JOBID | 0-n | High | 0xFFFFFFFF | - | - | - | - |
| 0x4702 | CDC_EVENT_PRIORITY | 0-n | High | 0xFF | - | - | - | - |
| 0x4703 | CDC_Fehler_ID | 0-n | High | 0xFF | - | - | - | - |
| 0x4704 | Service_ID | HEX | High | unsigned char | - | - | - | - |
| 0x4705 | DID_RID | HEX | High | unsigned int | - | - | - | - |
| 0x4800 | ErrorHook verursachender Task | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4801 | ErrorHook Callee | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4802 | ErrorHook Status | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4803 | Stack-Overflow verursachender Task | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4804 | Adresse der AssertionMessage | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4807 | Board Invalid Stack Pointer | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4808 | Board Invalid SRR0 | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4809 | Board Invalid Reason | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 01 | ERROR_ECU_INCORRECT_MESSAGE_LENGTH |
| 02 | ERROR_ECU_RESPONSE_WRONG_DATA_LENGTH |
| 03 | Reserved or Wrong response |
| 04 | ERROR_SESSION_NOT_VALID |
| 05 | ERROR_RESPONSE_INCORRECT_LEN |
| 06 | ZEFIX |
| 0xXY | ERROR_UNKNOWN |

### LEARN_PORT_CONFIGURATION_VER2_TAB

| WERT | TEXT |
| --- | --- |
| 0 | Einlernen erfolgreich, POrt-Konfiguration wurde erfolgreich ermittelt und gespeichert |
| 1 | Einlernen nicht erfolgreich |
| 0xFF | Wert ungültig |

### PHY_LINK_STATE_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Link down |
| 0x01 | Link up |
| 0x02 | Link up |
| 0x03 | Link up |
| 0x04 | Link up |
| 0x05 | Link up |
| 0x06 | Link up |
| 0x07 | Link up |
| 0x08 | Link up |
| 0x09 | Link up |
| 0x0A | Link up |
| 0x0B | Link up |
| 0x0C | Link up |
| 0x0D | Link up |
| 0x0E | Link up |
| 0x0F | Link up |

### PORT_CRC_ERROR_COUNT_4B_TAB

| WERT | TEXT |
| --- | --- |
| 0x00000000 | keine Frames verloren |
| 0x00000001 | 1-9 Frames verloren |
| 0x00000002 | 10-99 Frames verloren |
| 0x00000003 | 100-999 Frames verloren |
| 0x00000004 | 1000-9999 Frames verloren |
| 0x00000005 | 10000-99999 Frames verloren |
| 0x00000006 | > 100000 Frames verloren |
| 0x00000007 | reserviert |
| 0x00000008 | reserviert |
| 0x00000009 | reserviert |
| 0x0000000A | reserviert |
| 0x0000000B | reserviert |
| 0x0000000C | reserviert |
| 0x0000000D | reserviert |
| 0x0000000E | Port nicht verbunden |
| 0x0000000F | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |
| 0x00000010 | 1-9 Frames verloren |
| 0x00000020 | 10-99 Frames verloren |
| 0x00000030 | 100-999 Frames verloren |
| 0x00000040 | 1000-9999 Frames verloren |
| 0x00000050 | 10000-99999 Frames verloren |
| 0x00000060 | > 100000 Frames verloren |
| 0x00000070 | reserviert |
| 0x00000080 | reserviert |
| 0x00000090 | reserviert |
| 0x000000A0 | reserviert |
| 0x000000B0 | reserviert |
| 0x000000C0 | reserviert |
| 0x000000D0 | reserviert |
| 0x000000E0 | Port nicht verbunden |
| 0x000000F0 | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |
| 0x00000100 | 1-9 Frames verloren |
| 0x00000200 | 10-99 Frames verloren |
| 0x00000300 | 100-999 Frames verloren |
| 0x00000400 | 1000-9999 Frames verloren |
| 0x00000500 | 10000-99999 Frames verloren |
| 0x00000600 | > 100000 Frames verloren |
| 0x00000700 | reserviert |
| 0x00000800 | reserviert |
| 0x00000900 | reserviert |
| 0x00000A00 | reserviert |
| 0x00000B00 | reserviert |
| 0x00000C00 | reserviert |
| 0x00000D00 | reserviert |
| 0x00000E00 | Port nicht verbunden |
| 0x00000F00 | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |
| 0x00001000 | 1-9 Frames verloren |
| 0x00002000 | 10-99 Frames verloren |
| 0x00003000 | 100-999 Frames verloren |
| 0x00004000 | 1000-9999 Frames verloren |
| 0x00005000 | 10000-99999 Frames verloren |
| 0x00006000 | > 100000 Frames verloren |
| 0x00007000 | reserviert |
| 0x00008000 | reserviert |
| 0x00009000 | reserviert |
| 0x0000A000 | reserviert |
| 0x0000B000 | reserviert |
| 0x0000C000 | reserviert |
| 0x0000D000 | reserviert |
| 0x0000E000 | Port nicht verbunden |
| 0x0000F000 | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |
| 0x00010000 | 1-9 Frames verloren |
| 0x00020000 | 10-99 Frames verloren |
| 0x00030000 | 100-999 Frames verloren |
| 0x00040000 | 1000-9999 Frames verloren |
| 0x00050000 | 10000-99999 Frames verloren |
| 0x00060000 | > 100000 Frames verloren |
| 0x00070000 | reserviert |
| 0x00080000 | reserviert |
| 0x00090000 | reserviert |
| 0x000A0000 | reserviert |
| 0x000B0000 | reserviert |
| 0x000C0000 | reserviert |
| 0x000D0000 | reserviert |
| 0x000E0000 | Port nicht verbunden |
| 0x000F0000 | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |
| 0x00100000 | 1-9 Frames verloren |
| 0x00200000 | 10-99 Frames verloren |
| 0x00300000 | 100-999 Frames verloren |
| 0x00400000 | 1000-9999 Frames verloren |
| 0x00500000 | 10000-99999 Frames verloren |
| 0x00600000 | > 100000 Frames verloren |
| 0x00700000 | reserviert |
| 0x00800000 | reserviert |
| 0x00900000 | reserviert |
| 0x00A00000 | reserviert |
| 0x00B00000 | reserviert |
| 0x00C00000 | reserviert |
| 0x00D00000 | reserviert |
| 0x00E00000 | Port nicht verbunden |
| 0x00F00000 | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |
| 0x01000000 | 1-9 Frames verloren |
| 0x02000000 | 10-99 Frames verloren |
| 0x03000000 | 100-999 Frames verloren |
| 0x04000000 | 1000-9999 Frames verloren |
| 0x05000000 | 10000-99999 Frames verloren |
| 0x06000000 | > 100000 Frames verloren |
| 0x07000000 | reserviert |
| 0x08000000 | reserviert |
| 0x09000000 | reserviert |
| 0x0A000000 | reserviert |
| 0x0B000000 | reserviert |
| 0x0C000000 | reserviert |
| 0x0D000000 | reserviert |
| 0x0E000000 | Port nicht verbunden |
| 0x0F000000 | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |
| 0x10000000 | 1-9 Frames verloren |
| 0x20000000 | 10-99 Frames verloren |
| 0x30000000 | 100-999 Frames verloren |
| 0x40000000 | 1000-9999 Frames verloren |
| 0x50000000 | 10000-99999 Frames verloren |
| 0x60000000 | > 100000 Frames verloren |
| 0x70000000 | reserviert |
| 0x80000000 | reserviert |
| 0x90000000 | reserviert |
| 0xA0000000 | reserviert |
| 0xB0000000 | reserviert |
| 0xC0000000 | reserviert |
| 0xD0000000 | reserviert |
| 0xE0000000 | Port nicht verbunden |
| 0xF0000000 | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |

### PORT_LINK_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0 | kein Link-off festgestellt |
| 1 | Link-off festgestellt |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | ISOSAEReserved_00 |
| 0x01 | defaultSession |
| 0x02 | programmingSession |
| 0x03 | extendedDiagnosticSession |
| 0x04 | safetySystemDiagnosticSession |
| 0x40 | vehicleManufacturerSpecific_40 |
| 0x41 | codingSession |
| 0x42 | SWTSession |
| 0x43 | HDDUpdateSession |
| 0xff | ungültig |

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | ECU mehrmals programmierbar |
| 0x01 | ECU mindestens einmal vollstaendig programmierbar |
| 0x02 | ECU nicht mehr programmierbar |
| 0xff | ungültig |

### RES_0X1046_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PORT_INDEX_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index des Ports (beginnend bei 0), auf dem die Kabeldiagnose zuletzt gestartet wurde oder 0xff (Kabeldiagnose wurde noch nicht gestartet). |
| STAT_CABLE_DIAG_RESULT | - | - | + | 0-n | high | unsigned char | - | CABLE_DIAG_RESULT_TAB | - | - | - | Ergebnis der Kabeldiagnose  |
| STAT_CABLE_DIAG_STATE | + | - | - | 0-n | high | unsigned char | - | CABLE_DIAG_STATE | - | - | - | Status Kabeldiagnose |

### RES_0X1047_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OUI_DATA | + | - | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | 24 Bit OUI des PHYs. Die restlichen Bits sind auf 0 zu setzen. |
| STAT_MMN_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die 6 Bit lange MMN des Phys. Die übrigen Bits sollen auf 0 gesetzt werden. |
| STAT_REVISION_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 4 Bit lange Revisionsnummer des PHY. Die übrigen Bits sollen mit 0 belegt werden. |

### RES_0X1049_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUMBER_OF_TRANSMITTED_PACKETS_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Pakete, die erfolgreich am angegebenen Port verschickt wurden. Soll auf 0xffffffff gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xfffffffe zurückzugeben. |
| STAT_BYTES_SENT_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Bytes, die am angegebenen Port verschickt wurden. Soll auf 0xffffffff gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xfffffffe zurückzugeben. |
| STAT_NUMBER_OF_DROPPED_TX_PACKETS_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der versandten Pakete am angegbenen Port, die auf Grund eines Mangels an Ressourcen (z.B. transmit FIFO underflow) verworfen wurden.  Soll auf 0xffffffff gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xfffffffe zurückzugeben. |
| STAT_NUMBER_OF_RECEIVED_PACKETS_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erfolgreich empfangenen Pakete am angegebenen Port.  Soll auf 0xffffffff gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xfffffffe zurückzugeben. |
| STAT_STAT_BYTES_RECEIVED_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der empfangenen Bytes am angegebenen Port.  Soll auf 0xffffffff gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xfffffffe zurückzugeben. |
| STAT_NUMBER_OF_DROPPED_RX_PACKETS_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der empfangenen Pakete am angegbenen Port, die auf Grund eines Mangels an Ressourcen (z.B. voller input buffer ) verworfen wurden. Soll auf 0xffffffff gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xfffffffe zurückzugeben. |

### RES_0X104C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_TEST_MODE | + | - | - | 0-n | high | unsigned char | - | ETH_PHY_TEST_MODE_STATE | - | - | - | Gibt an, ob das Schalten des PHY in den gewünschten Modus erfolgreich war. |

### RES_0X1200_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WHITELIST_VERSION_MAJOR | 0-n | high | unsigned char | - | - | - | - | - | Gibt die Major Version der Whitelist an. |
| STAT_WHITELIST_VERSION_MINOR | 0-n | high | unsigned char | - | - | - | - | - | Gibt die Minor Version der Whitelist an. |
| STAT_WHITELIST_VERSION_PATCH | 0-n | high | unsigned char | - | - | - | - | - | Gibt das Patch-Level der Whitelist an. |
| STAT_WHITELIST_FIREWALL_MODE | 0-n | high | unsigned long | - | - | - | - | - | Gibt den Status des Firewall Mode zurück. |

### RES_0X1200_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WHITELIST_UPDATE | + | - | - | 0-n | high | unsigned char | - | TAB_Ergebnis_Whitelist_Update | - | - | - | Ergebnis des Whitelist-Updates |

### RES_0X1802_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUM_OF_PORTS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der physikalischen Ports.  |
| - | Bit | high | BITFIELD | - | BF_PHY_LINK_STATE_BTFLD | - | - | - | Linkstatus aller Port. |

### RES_0X1803_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEARN_PORT_CONFIGURATION | 0-n | high | unsigned char | - | ETH_LEARN_PORT_CONFIGURATION | - | - | - | 0: Lernen erfolgreich 1: Lernen nicht erfolgreich oder noch nicht gelernt |
| - | Bit | high | BITFIELD | - | BF_ETH_PORT_CONFIGURATION | - | - | - | Pro Port 1Bit, das angibt ob LinkUp(1) oder kein Link (0) vorliegt. |

### RES_0X2502_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESERVE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve. Konstante = 0x00 |
| STAT_PROG_ZAEHLER_STATUS | 0-n | high | unsigned char | - | RDBI_PC_PCS_DOP | - | - | - | ProgrammingCounterStatus |
| STAT_PROG_ZAEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ProgrammingCounter |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0XE251_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ETH_TOPOLOGY_DATA | DATA | high | data[100] | - | - | 1.0 | 1.0 | 0.0 | Datenstruktur zur Darstellung der ETH-Topologie (Diagnoseadressen zu Portbelegungen) |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_AKTIVIERUNGSLEITUNG | 0x1024 | - | Reset_Aktivierungsleitung DOORS-ID: FZHS_3798 | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ACTIVATE_AKTIVIERUNGSLEITUNG | 0x1025 | - | Setzt die logische Aktivierungsleitung auf high. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1025_R | - |
| EXTERNAL_ETH_WAKE_UP | 0x1026 | - | Aktiviert oder Deaktiviert die externe Ethernet Aktivierungsleitung über Diagnose. Dies erfolgt unabhängig vom Ethernet WakeUp Pin an der OBD Dose | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_CABLE_DIAG | 0x1046 | - | Startet die Kabeldiagnose des PHYs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1046_R | RES_0x1046_R |
| ETH_PHY_IDENTIFIER | 0x1047 | - | Gibt den eindeutigen PHY-Identifier zurück. Dieser wird durch den 24 Bit langen Organizationally Unique Identifier (OUI), die 6 Bit lange Manufacturer's Model Number sowie die 4 Bit lange Revision Number gebildet. Die Werte sind standardisiert und stets in Register 2 und 3 des PHYs enthalten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1047_R | RES_0x1047_R |
| ETH_GET_PORT_TX_RX_STATS | 0x1049 | - | Liest die Anzahl der verschickten und empfangenen Pakete, die Anzahl verworfenen Pakete und die Anzahl der übertragenen und empfangenen Bytes. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1049_R | RES_0x1049_R |
| ETH_RESET_PORT_CONFIGURATION | 0x104A | - | Setzt die gespeicherte Portkonfiguration zurück. Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_RESET_PORT_TX_RX_STATS | 0x104B | - | Setzt die Receive- und Transmitzähler eines Switchs zurück. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_ENABLE_TEST_MODE | 0x104C | - | Schaltet den PHY in den Testmode | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104C_R | RES_0x104C_R |
| WHITELIST_READSTATUS_OBD_FIREWALL | 0x1200 | - | lesen Status der whitelist der OBD Firewall im  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1200_D |
| OBD_FIREWALL_WRITE_WHITELIST | 0x1200 | - | Schreibt eine neue Whitelist für die OBD Firewall | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1200_R | RES_0x1200_R |
| OBD_FIREWALL | 0x1201 | - | Aktivierung und Deaktivierung der OBD-Firewall | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1201_R | - |
| SYSTEMZEIT | 0x1701 | STAT_SYSTEMZEIT_WERT | Systemzeit | s | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_LIFECYCLE | 0x1735 | STAT_LIFECYCLE | Status Lifecycle | 0-n | - | High | unsigned char | STATUS_LIFECYCLE_DOP | - | - | - | - | 22 | - | - |
| ETH_GET_NUMBER_OF_PORTS | 0x1800 | STAT_NUM_PORTS_WERT | Anzahl der Ports | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_PHY_LINK_STATE | 0x1802 | - | Gibt den aktuellen Link-Status aller physikalisch vorhandenen Ports zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1802_D |
| ETH_LEARN_PORT_CONFIGURATION | 0x1803 | - | Gibt die gelernte Port-Konfiguration des SGs zurück.  Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1803_D |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETHERNET_TOPOLOGY | 0xE251 | - | Der Job dient zum Schreiben bzw. Lesen der zuletzt ermittelten ETH-Topologie im Fahrzeug. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE251_D | RES_0xE251_D |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| _CDC_SETZEN_MAX_UEBERTRAGUNGSRATE | 0x400A | - | Setzt die maximale Übertragungsrate in kByte. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400A_D | - |
| _CDC_SETZEN_UEBERTRAGUNGSZYKLUSZEIT | 0x400B | - | Gibt die Zeit für den Übertragungszyklus an (in ms). | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400B_D | - |
| _CDC_SETZEN_WARTEZEIT_SKRIPTRESTART | 0x400C | - | Setzt die Wartezeit für den Restart in die Triggerebene eines gekillten Skripts. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400C_D | - |
| _CDC_LOESCHEN_JOB_SPEICHER | 0xF70A | - | Löscht alle Jobs aus dem JobStorage | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _CDC_IGNORIERE_NEUE_JOBS | 0xF70B | - | Ignoriert alle neuen Jobs vom Backend. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _CDC_LOESCHEN_JOBS_EINER_KAMPAGNE | 0xF70C | - | Löscht nur die einzelnen Jobs eine Kampagne. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF70C_R | - |

### STATUS_LIFECYCLE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Application Mode |
| 1 | Flash Mode |
| 2 | Coding Mode |

### TABBASISTN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Kommunikation |
| 0x01 | Kom_Parken_BN_niO |
| 0x02 | Kom_Parken_BN_iO |
| 0x03 | Kom_Standfunktionen_Kunde_nicht_im_FZG |
| 0x04 | reserviert |
| 0x05 | Kom_Wohnen |
| 0x06 | reserviert |
| 0x07 | Kom_Pruefen_Analyse_Diagnose |
| 0x08 | Kom_Fahrbereitschaft_herstellen |
| 0x09 | reserviert |
| 0x0A | Kom_Fahren |
| 0x0B | reserviert |
| 0x0C | Kom_Fahrbereitschaft_beenden |
| 0x0D | reserviert |
| 0x0E | Nicht verfügbar |
| 0x0F | Signal ungültig |

### TABBUSLINEDEFEKT

| WERT | TEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBUSMASKE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Default Wert |
| 0x00000001 | B-CAN |
| 0x00000002 | FA-CAN |
| 0x00000003 | B-CAN und FA-CAN |
| 0x00000004 | K-CAN |
| 0x00000005 | K-CAN und B-CAN |
| 0x00000006 | K-CAN und FA-CAN |
| 0x00000007 | K-CAN und FA-CAN  und B-CAN |
| 0x00000008 | D-CAN |
| 0x00000009 | D-CAN und B-CAN |
| 0x0000000A | D-CAN und FA-CAN |
| 0x0000000B | D-CAN und FA-CAN und B-CAN |
| 0x0000000C | D-CAN und K-CAN |
| 0x0000000D | D-CAN und K-CAN und B-CAN |
| 0x0000000E | D-CAN und K-CAN und FA-CAN |
| 0x0000000F | D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000010 | ZSG-CAN |
| 0x00000011 | ZSG-CAN und B-CAN |
| 0x00000012 | ZSG-CAN und FA-CAN |
| 0x00000013 | ZSG-CAN und B-CAN und FA-CAN |
| 0x00000014 | ZSG-CAN und K-CAN |
| 0x00000015 | ZSG-CAN und K-CAN und B-CAN |
| 0x00000016 | ZSG-CAN und K-CAN und FA-CAN |
| 0x00000017 | ZSG-CAN und K-CAN und FA-CAN  und B-CAN |
| 0x00000018 | ZSG-CAN und D-CAN |
| 0x00000019 | ZSG-CAN und D-CAN und B-CAN |
| 0x0000001A | ZSG-CAN und D-CAN und FA-CAN |
| 0x0000001B | ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000001C | ZSG-CAN und D-CAN und K-CAN |
| 0x0000001D | ZSG-CAN und D-CAN und K-CAN und B-CAN |
| 0x0000001E | ZSG-CAN und D-CAN und K-CAN und FA-CAN |
| 0x0000001F | ZSG-CAN und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000020 | FLEXRAY |
| 0x00000021 | FLEXRAY und B-CAN |
| 0x00000022 | FLEXRAY und FA-CAN |
| 0x00000023 | FLEXRAY und B-CAN und FA-CAN |
| 0x00000024 | FLEXRAY und K-CAN |
| 0x00000025 | FLEXRAY und K-CAN und B-CAN |
| 0x00000026 | FLEXRAY und K-CAN und FA-CAN |
| 0x00000027 | FLEXRAY und K-CAN und FA-CAN  und B-CAN |
| 0x00000028 | FLEXRAY und D-CAN |
| 0x00000029 | FLEXRAY und D-CAN und B-CAN |
| 0x0000002A | FLEXRAY und D-CAN und FA-CAN |
| 0x0000002B | FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000002C | FLEXRAY und D-CAN und K-CAN |
| 0x0000002D | FLEXRAY und D-CAN und K-CAN und B-CAN |
| 0x0000002E | FLEXRAY und D-CAN und K-CAN und FA-CAN |
| 0x0000002F | FLEXRAY und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000030 | ZSG-CAN und FLEXRAY |
| 0x00000031 | ZSG-CAN und FLEXRAY und B-CAN |
| 0x00000032 | ZSG-CAN und FLEXRAY und FA-CAN |
| 0x00000033 | ZSG-CAN und FLEXRAY und B-CAN und FA-CAN |
| 0x00000034 | ZSG-CAN und FLEXRAY und K-CAN |
| 0x00000035 | ZSG-CAN und FLEXRAY und K-CAN und B-CAN |
| 0x00000036 | ZSG-CAN und FLEXRAY und K-CAN und FA-CAN |
| 0x00000037 | ZSG-CAN und FLEXRAY und K-CAN und FA-CAN  und B-CAN |
| 0x00000038 | ZSG-CAN und FLEXRAY und D-CAN |
| 0x00000039 | ZSG-CAN und FLEXRAY und D-CAN und B-CAN |
| 0x0000003A | ZSG-CAN und FLEXRAY und D-CAN und FA-CAN |
| 0x0000003B | ZSG-CAN und FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000003C | ZSG-CAN und FLEXRAY und D-CAN und K-CAN |
| 0x0000003D | ZSG-CAN und FLEXRAY und D-CAN und K-CAN und B-CAN |
| 0x0000003E | ZSG-CAN und FLEXRAY und D-CAN und K-CAN und FA-CAN |
| 0x0000003F | ZSG-CAN und FLEXRAY und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000040 | MOST |
| 0x00000041 | MOST und B-CAN |
| 0x00000042 | MOST und FA-CAN |
| 0x00000043 | MOST und B-CAN und FA-CAN |
| 0x00000044 | MOST und K-CAN |
| 0x00000045 | MOST und K-CAN und B-CAN |
| 0x00000046 | MOST und K-CAN und FA-CAN |
| 0x00000047 | MOST und K-CAN und FA-CAN  und B-CAN |
| 0x00000048 | MOST und D-CAN |
| 0x00000049 | MOST und D-CAN und B-CAN |
| 0x0000004A | MOST und D-CAN und FA-CAN |
| 0x0000004B | MOST und D-CAN und FA-CAN und B-CAN |
| 0x0000004C | MOST und D-CAN und K-CAN |
| 0x0000004D | MOST und D-CAN und K-CAN und B-CAN |
| 0x0000004E | MOST und D-CAN und K-CAN und FA-CAN |
| 0x0000004F | MOST und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000050 | MOST und ZSG-CAN |
| 0x00000051 | MOST und ZSG-CAN und B-CAN |
| 0x00000052 | MOST und ZSG-CAN und FA-CAN |
| 0x00000053 | MOST und ZSG-CAN und B-CAN und FA-CAN |
| 0x00000054 | MOST und ZSG-CAN und K-CAN |
| 0x00000055 | MOST und ZSG-CAN und K-CAN und B-CAN |
| 0x00000056 | MOST und ZSG-CAN und K-CAN und FA-CAN |
| 0x00000057 | MOST und ZSG-CAN und K-CAN und FA-CAN  und B-CAN |
| 0x00000058 | MOST und ZSG-CAN und D-CAN |
| 0x00000059 | MOST und ZSG-CAN und D-CAN und B-CAN |
| 0x0000005A | MOST und ZSG-CAN und D-CAN und FA-CAN |
| 0x0000005B | MOST und ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000005C | MOST und ZSG-CAN und D-CAN und K-CAN |
| 0x0000005D | MOST und ZSG-CAN und D-CAN und K-CAN und B-CAN |
| 0x0000005E | MOST und ZSG-CAN und D-CAN und K-CAN und FA-CAN |
| 0x0000005F | MOST und ZSG-CAN und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000060 | MOST und FLEXRAY |
| 0x00000061 | MOST und FLEXRAY und B-CAN |
| 0x00000062 | MOST und FLEXRAY und FA-CAN |
| 0x00000063 | MOST und FLEXRAY und B-CAN und FA-CAN |
| 0x00000064 | MOST und FLEXRAY und K-CAN |
| 0x00000065 | MOST und FLEXRAY und K-CAN und B-CAN |
| 0x00000066 | MOST und FLEXRAY und K-CAN und FA-CAN |
| 0x00000067 | MOST und FLEXRAY und K-CAN und FA-CAN  und B-CAN |
| 0x00000068 | MOST und FLEXRAY und D-CAN |
| 0x00000069 | MOST und FLEXRAY und D-CAN und B-CAN |
| 0x0000006A | MOST und FLEXRAY und D-CAN und FA-CAN |
| 0x0000006B | MOST und FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000006C | MOST und FLEXRAY und D-CAN und K-CAN |
| 0x0000006D | MOST und FLEXRAY und D-CAN und K-CAN und B-CAN |
| 0x0000006E | MOST und FLEXRAY und D-CAN und K-CAN und FA-CAN |
| 0x0000006F | MOST und FLEXRAY und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000070 | MOST und FLEXRAY und ZSG-CAN |
| 0x00000071 | MOST und FLEXRAY und ZSG-CAN und B-CAN |
| 0x00000072 | MOST und FLEXRAY und ZSG-CAN und FA-CAN |
| 0x00000073 | MOST und FLEXRAY und ZSG-CAN und B-CAN und FA-CAN |
| 0x00000074 | MOST und FLEXRAY und ZSG-CAN und K-CAN |
| 0x00000075 | MOST und FLEXRAY und ZSG-CAN und K-CAN und B-CAN |
| 0x00000076 | MOST und FLEXRAY und ZSG-CAN und K-CAN und FA-CAN |
| 0x00000077 | MOST und FLEXRAY und ZSG-CAN und K-CAN und FA-CAN  und B-CAN |
| 0x00000078 | MOST und FLEXRAY und ZSG-CAN und D-CAN |
| 0x00000079 | MOST und FLEXRAY und ZSG-CAN und D-CAN und B-CAN |
| 0x0000007A | MOST und FLEXRAY und ZSG-CAN und D-CAN und FA-CAN |
| 0x0000007B | MOST und FLEXRAY und ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000007C | MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN |
| 0x0000007D | MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN und B-CAN |
| 0x0000007E | MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN und FA-CAN |
| 0x0000007F | MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000080 | ETHERNET |
| 0x00000100 | Eigene Diagnose |
| 0x00000200 | TAS |
| 0x00002000 | B2-CAN |
| 0x00002001 | B2-CAN und B-CAN |
| 0x00002002 | B2-CAN und FA-CAN |
| 0x00002003 | B2-CAN und B-CAN und FA-CAN |
| 0x00002004 | B2-CAN und K-CAN |
| 0x00002005 | B2-CAN und K-CAN und B-CAN |
| 0x00002006 | B2-CAN und K-CAN und FA-CAN |
| 0x00002007 | B2-CAN und K-CAN und FA-CAN  und B-CAN |
| 0x00002008 | B2-CAN und D-CAN |
| 0x00002009 | B2-CAN und D-CAN und B-CAN |
| 0x0000200A | B2-CAN und D-CAN und FA-CAN |
| 0x0000200B | B2-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000200C | B2-CAN und D-CAN und K-CAN |
| 0x0000200D | B2-CAN und D-CAN und K-CAN und B-CAN |
| 0x0000200E | B2-CAN und D-CAN und K-CAN und FA-CAN |
| 0x0000200F | B2-CAN und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00002010 | B2-CAN und ZSG-CAN |
| 0x00002011 | B2-CAN und ZSG-CAN und B-CAN |
| 0x00002012 | B2-CAN und ZSG-CAN und FA-CAN |
| 0x00002013 | B2-CAN und ZSG-CAN und B-CAN und FA-CAN |
| 0x00002014 | B2-CAN und ZSG-CAN und K-CAN |
| 0x00002015 | B2-CAN und ZSG-CAN und K-CAN und B-CAN |
| 0x00002016 | B2-CAN und ZSG-CAN und K-CAN und FA-CAN |
| 0x00002017 | B2-CAN und ZSG-CAN und K-CAN und FA-CAN  und B-CAN |
| 0x00002018 | B2-CAN und ZSG-CAN und D-CAN |
| 0x00002019 | B2-CAN und ZSG-CAN und D-CAN und B-CAN |
| 0x0000201A | B2-CAN und ZSG-CAN und D-CAN und FA-CAN |
| 0x0000201B | B2-CAN und ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000201C | B2-CAN und ZSG-CAN und D-CAN und K-CAN |
| 0x0000201D | B2-CAN und ZSG-CAN und D-CAN und K-CAN und B-CAN |
| 0x0000201E | B2-CAN und ZSG-CAN und D-CAN und K-CAN und FA-CAN |
| 0x0000201F | B2-CAN und ZSG-CAN und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00002020 | B2-CAN und FLEXRAY |
| 0x00002021 | B2-CAN und FLEXRAY und B-CAN |
| 0x00002022 | B2-CAN und FLEXRAY und FA-CAN |
| 0x00002023 | B2-CAN und FLEXRAY und B-CAN und FA-CAN |
| 0x00002024 | B2-CAN und FLEXRAY und K-CAN |
| 0x00002025 | B2-CAN und FLEXRAY und K-CAN und B-CAN |
| 0x00002026 | B2-CAN und FLEXRAY und K-CAN und FA-CAN |
| 0x00002027 | B2-CAN und FLEXRAY und K-CAN und FA-CAN  und B-CAN |
| 0x00002028 | B2-CAN und FLEXRAY und D-CAN |
| 0x00002029 | B2-CAN und FLEXRAY und D-CAN und B-CAN |
| 0x0000202A | B2-CAN und FLEXRAY und D-CAN und FA-CAN |
| 0x0000202B | B2-CAN und FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000202C | B2-CAN und FLEXRAY und D-CAN und K-CAN |
| 0x0000202D | B2-CAN und FLEXRAY und D-CAN und K-CAN und B-CAN |
| 0x0000202E | B2-CAN und FLEXRAY und D-CAN und K-CAN und FA-CAN |
| 0x0000202F | B2-CAN und FLEXRAY und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00002030 | B2-CAN und ZSG-CAN und FLEXRAY |
| 0x00002031 | B2-CAN und ZSG-CAN und FLEXRAY und B-CAN |
| 0x00002032 | B2-CAN und ZSG-CAN und FLEXRAY und FA-CAN |
| 0x00002033 | B2-CAN und ZSG-CAN und FLEXRAY und B-CAN und FA-CAN |
| 0x00002034 | B2-CAN und ZSG-CAN und FLEXRAY und K-CAN |
| 0x00002035 | B2-CAN und ZSG-CAN und FLEXRAY und K-CAN und B-CAN |
| 0x00002036 | B2-CAN und ZSG-CAN und FLEXRAY und K-CAN und FA-CAN |
| 0x00002037 | B2-CAN und ZSG-CAN und FLEXRAY und K-CAN und FA-CAN  und B-CAN |
| 0x00002038 | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN |
| 0x00002039 | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN und B-CAN |
| 0x0000203A | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN und FA-CAN |
| 0x0000203B | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000203C | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN und K-CAN |
| 0x0000203D | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN und K-CAN und B-CAN |
| 0x0000203E | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN und K-CAN und FA-CAN |
| 0x0000203F | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00002040 | B2-CAN und MOST |
| 0x00002041 | B2-CAN und MOST und B-CAN |
| 0x00002042 | B2-CAN und MOST und FA-CAN |
| 0x00002043 | B2-CAN und MOST und B-CAN und FA-CAN |
| 0x00002044 | B2-CAN und MOST und K-CAN |
| 0x00002045 | B2-CAN und MOST und K-CAN und B-CAN |
| 0x00002046 | B2-CAN und MOST und K-CAN und FA-CAN |
| 0x00002047 | B2-CAN und MOST und K-CAN und FA-CAN  und B-CAN |
| 0x00002048 | B2-CAN und MOST und D-CAN |
| 0x00002049 | B2-CAN und MOST und D-CAN und B-CAN |
| 0x0000204A | B2-CAN und MOST und D-CAN und FA-CAN |
| 0x0000204B | B2-CAN und MOST und D-CAN und FA-CAN und B-CAN |
| 0x0000204C | B2-CAN und MOST und D-CAN und K-CAN |
| 0x0000204D | B2-CAN und MOST und D-CAN und K-CAN und B-CAN |
| 0x0000204E | B2-CAN und MOST und D-CAN und K-CAN und FA-CAN |
| 0x0000204F | B2-CAN und MOST und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00002050 | B2-CAN und MOST und ZSG-CAN |
| 0x00002051 | B2-CAN und MOST und ZSG-CAN und B-CAN |
| 0x00002052 | B2-CAN und MOST und ZSG-CAN und FA-CAN |
| 0x00002053 | B2-CAN und MOST und ZSG-CAN und B-CAN und FA-CAN |
| 0x00002054 | B2-CAN und MOST und ZSG-CAN und K-CAN |
| 0x00002055 | B2-CAN und MOST und ZSG-CAN und K-CAN und B-CAN |
| 0x00002056 | B2-CAN und MOST und ZSG-CAN und K-CAN und FA-CAN |
| 0x00002057 | B2-CAN und MOST und ZSG-CAN und K-CAN und FA-CAN  und B-CAN |
| 0x00002058 | B2-CAN und MOST und ZSG-CAN und D-CAN |
| 0x00002059 | B2-CAN und MOST und ZSG-CAN und D-CAN und B-CAN |
| 0x0000205A | B2-CAN und MOST und ZSG-CAN und D-CAN und FA-CAN |
| 0x0000205B | B2-CAN und MOST und ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000205C | B2-CAN und MOST und ZSG-CAN und D-CAN und K-CAN |
| 0x0000205D | B2-CAN und MOST und ZSG-CAN und D-CAN und K-CAN und B-CAN |
| 0x0000205E | B2-CAN und MOST und ZSG-CAN und D-CAN und K-CAN und FA-CAN |
| 0x0000205F | B2-CAN und MOST und ZSG-CAN und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00002060 | B2-CAN und MOST und FLEXRAY |
| 0x00002061 | B2-CAN und MOST und FLEXRAY und B-CAN |
| 0x00002062 | B2-CAN und MOST und FLEXRAY und FA-CAN |
| 0x00002063 | B2-CAN und MOST und FLEXRAY und B-CAN und FA-CAN |
| 0x00002064 | B2-CAN und MOST und FLEXRAY und K-CAN |
| 0x00002065 | B2-CAN und MOST und FLEXRAY und K-CAN und B-CAN |
| 0x00002066 | B2-CAN und MOST und FLEXRAY und K-CAN und FA-CAN |
| 0x00002067 | B2-CAN und MOST und FLEXRAY und K-CAN und FA-CAN  und B-CAN |
| 0x00002068 | B2-CAN und MOST und FLEXRAY und D-CAN |
| 0x00002069 | B2-CAN und MOST und FLEXRAY und D-CAN und B-CAN |
| 0x0000206A | B2-CAN und MOST und FLEXRAY und D-CAN und FA-CAN |
| 0x0000206B | B2-CAN und MOST und FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000206C | B2-CAN und MOST und FLEXRAY und D-CAN und K-CAN |
| 0x0000206D | B2-CAN und MOST und FLEXRAY und D-CAN und K-CAN und B-CAN |
| 0x0000206E | B2-CAN und MOST und FLEXRAY und D-CAN und K-CAN und FA-CAN |
| 0x0000206F | B2-CAN und MOST und FLEXRAY und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00002070 | B2-CAN und MOST und FLEXRAY und ZSG-CAN |
| 0x00002071 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und B-CAN |
| 0x00002072 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und FA-CAN |
| 0x00002073 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und B-CAN und FA-CAN |
| 0x00002074 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und K-CAN |
| 0x00002075 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und K-CAN und B-CAN |
| 0x00002076 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und K-CAN und FA-CAN |
| 0x00002077 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und K-CAN und FA-CAN  und B-CAN |
| 0x00002078 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN |
| 0x00002079 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN und B-CAN |
| 0x0000207A | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN und FA-CAN |
| 0x0000207B | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000207C | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN |
| 0x0000207D | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN und B-CAN |
| 0x0000207E | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN und FA-CAN |
| 0x0000207F | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00010000 | FAS-CAN |
| 0x00016137 | B-CAN und FA-CAN und IuK-CAN und ZSG-CAN und FLEXRAY und Eigene Diagnose und B2-CAN und Ethernet_Internal und FAS-CAN |
| 0x00004000 | Ethernet_Internal |
| 0x00008000 | OBD-CAN |
| 0x00020000 | CAN-FD |
| 0xFFFFFFFF | ungueltig |

### TABCCMSGS

| WERT | TEXT |
| --- | --- |
| 0x0001 | Geschwindigkeits-reg. deaktiviert! |
| 0x0002 | Geschwindigkeits-reg. deaktiviert! |
| 0x0003 | Geschwindigkeits-reg. ausgefallen! |
| 0x000A | Fahrkomfort eingeschränkt! |
| 0x000B | Lenkung gestört! Vorsichtig anhalten! |
| 0x000C | Kurvenverhalten eingeschränkt! |
| 0x0015 | Zündung gestört! |
| 0x0016 | Anlasser! Motor nicht abstellen! |
| 0x0018 | DBC ausgefallen! Gemäßigt fahren. |
| 0x001A | Geschwindigkeitsreg. ausgefallen! |
| 0x001B | Motorölstand! Motoröl nachfüllen! |
| 0x001C | Motorölstand! Motoröl nachfüllen! |
| 0x001D | Motorstörung! Leistungsabfall. |
| 0x001E | Motor! Vorsichtig anhalten! |
| 0x001F | Erhöhte Emissionen! |
| 0x0020 | Tankverschluss offen! |
| 0x0021 | Motorstörung! Gemäßigt fahren! |
| 0x0023 | DSC ausgefallen! Gemäßigt fahren! |
| 0x0025 | Trigger %0 |
| 0x0026 | Fremde Fernbedienung! |
| 0x0027 | Motor überhitzt! Vorsichtig halten! |
| 0x002A | Brems- und Fahrstabilisierung ausgefallen! Gemäßigt fahren. |
| 0x002B | Kurvenverhalten eingeschränkt. |
| 0x002D | Kurvenverhalten eingeschränkt. |
| 0x0030 | ?1? |
| 0x0031 | Partikelfilter! |
| 0x0032 | Reifen Pannen Anzeige ausgefallen! |
| 0x0034 | Parkbremse ausgefallen! |
| 0x0035 | Automatic Hold gestört! |
| 0x0036 | Parkbremse gestört! |
| 0x0038 | ?2? |
| 0x003C | Tacho-Anzeige gestört! |
| 0x003F | Reifendruckverlust! |
| 0x0042 | Fernbedienung fehlt! Motorstart nicht möglich. |
| 0x0043 | Batterie der Fernbedienung ersetzen! |
| 0x0044 | Batterie Fernbedienung Standfunktionen leer! |
| 0x0046 | Lenkverhalten geändert! |
| 0x0047 | Bremsbeläge ersetzen! |
| 0x004A | Bremsflüssigkeit! Vorsichtig halten |
| 0x004B | Elektrik Anhängerkupplung |
| 0x0055 | Geschwindigkeitsreg. deaktiviert! |
| 0x005E | Rückhaltesystem Fond links gestört! |
| 0x005F | Rückhaltesystem Fond rechts gestört! |
| 0x0061 | Rückhaltesysteme gestört! |
| 0x0067 | Getriebe wird zu heiß! |
| 0x006C | Rückhaltesystem Fahrer gestört! |
| 0x006D | Rückhaltesystem Beifahrer gestört! |
| 0x0090 | Reifen Druck Control gestört! |
| 0x0091 | Reifen Druck Control deaktiviert! |
| 0x0093 | Reifendruckverlust! |
| 0x0094 | Bremslichtsteuerung ausgefallen! |
| 0x0095 | Reifen Druck Control ausgefallen! |
| 0x0097 | Gaswarnung! Luftanlage ein |
| 0x0099 | Waffenhalterung Fehler |
| 0x009A | Fehler Reizgas-Sensor |
| 0x009C | Luftanlage ohne Funktion |
| 0x009D | Luftanlage aktiv |
| 0x00A0 | Fensterheber Notfkt. verwenden! |
| 0x00A1 | Startbatterie defekt |
| 0x00A2 | Blitzleuchte, Lampe prüfen |
| 0x00A3 | Feuerlöschanlage aktiv |
| 0x00A6 | Kühlmittelstand zu niedrig! |
| 0x00A7 | Uhrzeit und Datum einstellen |
| 0x00AA | Getriebe gestört! |
| 0x00AD | Getriebe gestört! Gemäßigt fahren |
| 0x00AF | Getriebe-Position P gestört! |
| 0x00B0 | Geschwindigkeitsregelung gestört! |
| 0x00B1 | Geschwindigkeitregelung gestört! |
| 0x00B3 | Getriebe gestört! Gemäßigt fahren |
| 0x00B4 | Fahrkomfort eingeschränkt |
| 0x00B6 | Ölstandssensor gestört! |
| 0x00B7 | Scheibenwischer gestört! |
| 0x00B9 | Ganganzeige ausgefallen! |
| 0x00BA | ELV! Ggf. Motor nicht abstellen |
| 0x00BB | ELV verspannt! Lenkrad bewegen |
| 0x00C1 | Notausstieg gestört! |
| 0x00C3 | PDC ausgefallen! |
| 0x00C9 | Automatic Hold deaktiviert! |
| 0x00CC | Kurvenverhalten eingeschränkt |
| 0x00D0 | Komfortfunktionen deaktiviert! |
| 0x00D2 | Parkbremse ausgefallen! |
| 0x00D4 | Motoröldruck! Vorsichtig anhalten |
| 0x00D5 | Batterie wird nicht geladen! |
| 0x00D8 | Kraftstoffpumpe! Gemäßigt fahren |
| 0x00D9 | Fernbedienung an Starttaste halten! |
| 0x00DC | Erhöhte Batterieentladung! |
| 0x00DD | Gaswarnung! Ort verlassen |
| 0x00E0 | Isolationsfehler |
| 0x00E1 | Frontscheibe entriegelt! |
| 0x00E2 | Feuerlöschanlage Fehler! |
| 0x00E5 | Batterie stark entladen! |
| 0x00E7 | Lichtanlage! Vorsichtig anhalten |
| 0x00E8 | Schutzsysteme gestört! |
| 0x00E9 | Kommunikation gestört! |
| 0x00EA | Überfallalarm gestört! |
| 0x00EC | Brems- und Fahrstabilisierung ausgefallen! Gemäßigt fahren. |
| 0x00ED | Fahrstabilisierung ausgefallen! Gemäßigt fahren. |
| 0x00EF | Parkbremse ausgefallen! |
| 0x00F0 | Parkbremse ausgefallen! |
| 0x00F1 | Parkbremse ausgefallen! |
| 0x00F2 | Parkbremse ausgefallen! |
| 0x00F3 | Parkbremse ausgefallen! |
| 0x00F5 | Fahrkomfort eingeschränkt |
| 0x00F7 | Batterieüberwachung ausgefallen! |
| 0x00FA | Gang ohne Bremse einlegbar! |
| 0x0100 | Leuchtweitenregulierung gestört! |
| 0x0101 | Motor zu heiß! Gemäßigt fahren |
| 0x0103 | Fensterheber-Einklemmschutz! |
| 0x0104 | Schiebedach-Einklemmschutz! |
| 0x0105 | Fensterheber-Einklemmschutz! |
| 0x0106 | Schiebedach-Einklemmschutz! |
| 0x010A | Überrollschutz gestört! |
| 0x0111 | Lenkverhalten geändert! |
| 0x0113 | Kraftstoffreserve! |
| 0x0127 | Kurvenlicht ausgefallen! |
| 0x012B | Notruf-Systemfehler! |
| 0x012D | Sitzlehnen-Überwachung defekt! |
| 0x0130 | Batteriezustand prüfen |
| 0x0131 | Batteriekontakte prüfen |
| 0x0132 | Batterie stark entladen! |
| 0x0135 | Kraftstoffpumpe! |
| 0x0141 | Lenkverhalten geändert! |
| 0x0146 | Getriebe in Fahrposition! |
| 0x0147 | RDC wird initialisiert... |
| 0x0148 | Bremsbelag-Verschleißanzeige! |
| 0x014F | Zündung eingeschaltet |
| 0x0151 | Geschwindigkeitsreg. ausgefallen! |
| 0x0153 | Geschwindigkeitsreg.  deaktiviert! |
| 0x0154 | Geschwindigkeitsreg.  deaktiviert! |
| 0x0155 | Geschwindigkeitsreg.  deaktiviert! |
| 0x015E | Fahrstabilisierung eingeschränkt! Gemäßigt fahren. |
| 0x015F | Fahrstabilisierung ausgefallen! Gemäßigt fahren. |
| 0x0162 | Anfahrassistent inaktiv! |
| 0x0164 | Night Vision ausgefallen! |
| 0x016C | RPA-Initialisierung... |
| 0x016F | Motor zu heiß! Drehzahl reduzieren |
| 0x0171 | Brems- und Fahrstabilisierung ausgefallen! Gemäßigt fahren. |
| 0x0172 | Brems- und Fahrstabilisierung ausgefallen! Gemäßigt fahren. |
| 0x0174 | Zweistufiges Bremslicht links ausgefallen! |
| 0x0175 | Zweistufiges Bremslicht rechts ausgefallen! |
| 0x0176 | Fernlicht-Assistent ausgefallen! |
| 0x0178 | Fernlicht-Assistent gestört! |
| 0x017E | DSC eingeschränkt! Gemäßigt fahren |
| 0x0189 | Wählhebel in Automatikgasse zurück! |
| 0x018A | Eventuell Wählhebel gestört |
| 0x018B | Parkbremse gestört! Wegrollen möglich |
| 0x018D | Start- /Stop-  Automatik ausgefallen! |
| 0x0196 | Anhänger elektrische Bremse prüfen |
| 0x019A | Parkbremse gestört! |
| 0x019F | Erhöhte Batterieentladung! |
| 0x01A3 | Antrieb gestört! |
| 0x01A4 | Getriebe gestört! Gemäßigt fahren |
| 0x01A7 | Verriegelung Anhängerkupplung! |
| 0x01A9 | Rückfahrkamera gestört! |
| 0x01AC | Seitenkamera defekt! |
| 0x01AF | Hohe Bremsen-beanspruchung! |
| 0x01B2 | Sitzkalibrierung erforderlich! |
| 0x01B3 | Spurverlassenswarnung ausgefallen! |
| 0x01B4 | Sitzpositionserkennung gestört! |
| 0x01B7 | Parkbremse überlastet! |
| 0x01B9 | Geschwindigkeitsreg. deaktiviert! |
| 0x01BB | Fahrzeug gegen Wegrollen sichern! |
| 0x01C0 | Kraftstofffilter verstopft! |
| 0x01C1 | Elektrik Anhängerkupplung ausgefallen! |
| 0x01C5 | Nahbereichssensoren deaktiviert! |
| 0x01C6 | Geschwindigkeitsreg. deaktiviert! |
| 0x01C8 | Zündung wird ausgeschaltet. Ggf. wird P eingelegt. |
| 0x01C9 | Anhängerbeleuchtung! |
| 0x01CA | Fussgängerschutzsystem! |
| 0x01CC | Batterie ersetzen! |
| 0x01CD | Batterie! Ladezustand %0 |
| 0x01CE | Sitzbelegungssensor verschmutzt! |
| 0x01D2 | Night Vision Kamera verschmutzt! |
| 0x01D3 | Fahrstufenwechsel! Evtl. Wählhebel gestört. |
| 0x01D5 | Geschwindigkeitsreg. deaktiviert! |
| 0x01D6 | Top View Kamera verschmutzt! |
| 0x01D7 | Top View gestört! |
| 0x01D8 | Side View Kamera verschmutzt! |
| 0x01D9 | Side View gestört! |
| 0x01DB | Notruf eingeschränkt! (Navigation) |
| 0x01DC | Spurwechselwarnung ausgefallen! |
| 0x01DD | Spurwechselwarnung gestört! |
| 0x01DE | Geschwindigkeitsreg. deaktiviert! |
| 0x01DF | t.b.d. Hohe Beanspruchung der Bremsanlage |
| 0x01E3 | Geschwindigkeitsreg. deaktiviert! |
| 0x01E5 | Fahrzeugkonfiguration inkonsistent. Bitte prüfen lassen! |
| 0x01E6 | Spurverlassenswarnung gestört! |
| 0x01E7 | Parkassistent deaktiviert. Tür / Kofferraum schließen. |
| 0x01EA | Parkassistent ausgefallen |
| 0x01EB | t.b.d. Ölverlust! Vorsichtig halten |
| 0x01EF | Fluchtgeschwindigkeit benutzt! |
| 0x01F0 | Lenkverhalten geändert! |
| 0x01F1 | Lenkverhalten geändert! |
| 0x01F2 | Fahrstabilisierung eingeschränkt! |
| 0x01F5 | Lenkverhalten geändert! |
| 0x01F6 | Fahrregelsysteme ausgefallen! Gemäßigt fahren |
| 0x01F7 | Fahrregelsysteme ausgefallen! Gemäßigt fahren |
| 0x01F8 | Lenkverhalten geändert! |
| 0x01F9 | Fahrkomfort eingeschränkt! |
| 0x01FB | Gefahr! Erhöhter CO2-Wert in Fahrzeugkabine! |
| 0x0200 | Bremskraftverstärkung ausgefallen. Gemäßigt fahren. |
| 0x0208 | Service-Anzeige nicht verfügbar |
| 0x0218 | t.b.d. Spurwechselwarnung deaktiviert! |
| 0x0219 | t.b.d. Klimaautomatik |
| 0x0233 | Lüftungsgebläse gestört |
| 0x0234 | Tankverschluss offen! |
| 0x0235 | Fzg. nicht gegen wegrollen gesichert! |
| 0x0237 | Lüfter defekt! |
| 0x0238 | Lüfter defekt! |
| 0xFFFF | ungueltig |

### TABFEHLERHAFTESSOFTWAREMODUL

| WERT | TEXT |
| --- | --- |
| 0x01 | Diagnosemaster |
| 0x02 | TroubleTicketCreator |
| 0x03 | TesterRequestHandler |
| 0x04 | SystemContextMgmt |
| 0x05 | MemoryAccess |
| 0x06 | LifeCycle |
| 0x07 | EventMsgMgmt |
| 0x08 | ErrorHandlerAdapter |
| 0xFF | Ungueltiger Wert |

### TABFLEXRAYPFADSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Pfad AUS |
| 0x01 | Pfad EIN |
| 0xFF | ungueltig |

### TABGRUNDSYSTEMKONTEXTNICHTKOMPLETT

| WERT | TEXT |
| --- | --- |
| 0x01 | ErrorMessage-Queue für eingehende Fehler ist voll |
| 0x02 | DiagnoseMaster Fehlerspeicher voll: keine Zuordnung möglich |
| 0x03 | DiagnoseMaster Fehlerspeicher voll: keine Umweltbedingungsdaten möglich |
| 0x04 | Softwarefehler: NULL_ZEIGER |
| 0x05 | ErrorMessage-Queue für eingehende CC-Meldungen ist voll |
| 0xFF | ungueltiger Wert |

### TABGWROUTING

| WERT | TEXT |
| --- | --- |
| 0x00 | unterstützt |
| 0x01 | nicht unterstützt |
| 0xFF | reserviert |

### TABHEXBIN

| WERT | TEXT |
| --- | --- |
| 0x0 | 0000 |
| 0x1 | 0001 |
| 0x2 | 0010 |
| 0x3 | 0011 |
| 0x4 | 0100 |
| 0x5 | 0101 |
| 0x6 | 0110 |
| 0x7 | 0111 |
| 0x8 | 1000 |
| 0x9 | 1001 |
| 0xA | 1010 |
| 0xB | 1011 |
| 0xC | 1100 |
| 0xD | 1101 |
| 0xE | 1110 |
| 0xF | 1111 |
| 0xFF | 11111111 |

### TABILLEGALESNACHRICHTENFORMAT

| WERT | TEXT |
| --- | --- |
| 0x01 | MESSAGE_TOO_LONG |
| 0x02 | NULL_POINTER_FROM_ACTIVE_RESPONSE_HANDLER |
| 0x03 | ILLEGAL_SG_ID |
| 0x04 | NULL_POINTER_RECEIVED_CC_NUMBERS |
| 0x05 | NULL_POINTER_PAYLOAD |
| 0x06 | ILLEGAL_LENGTH_OF_CC_MSG_LIST |
| 0x07 | NO_MOST_OPTYPE_STATUS |
| 0x08 | FBLOCK_KOMBI_INTERFACE_NOT_AVAILABLE |
| 0x09 | FBLOCK_KOMBI_INTERFACE_INSTANCE_NOT_AVAILABLE |
| 0x0A | CC_ROLLE_KOMBI_NOT_AVAILABLE |
| 0x0B | NOTIFICATION_FCT_ID_ILLEGAL |
| 0x0C | PAYLOADLENGTH_ZERO |
| 0x0D | MOST_OPTYPE_ERROR |
| 0x0E | WRONG_CCMSG_MOST_FBLOCK_ID |
| 0x0F | NO_TEXT_STOP_BYTE_FOUND |
| 0x10 | NO_TEXT_START_BYTE_FOUND |
| 0x11 | MORE_CCMSGS_AS_MAX_CHECKCONTROL_ATSAMETIME |
| 0x12 | CCMSG_TO_SHORT |
| 0x13 | UNEXPECTED_CCMSG_HEADER |
| 0x14 | CCMSG_LENGTH_TOO_SMALL_FOR_HEADER |
| 0x15 | MOST_CONFIG_NOT_OK |
| 0x16 | NOTIFICATION_NOT_SEND_TO_KOMBI |
| 0x17 | ILLEGAL_DEVICE_ID |
| 0x18 | MOST_SEND_FAIL |
| 0xFF | Ungueltiger Wert |

### TABKOMPRIMIERUNG

| WERT | TEXT |
| --- | --- |
| 0x01 | 3 |
| 0x0A | 4 |
| 0x0B | 5 |
| 0x00 | 0 |

### TABLIFECYCLEMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Mode Application |
| 0x01 | Mode Flash |
| 0x02 | Mode Coding |
| 0xFF | Mode Invalid |

### TABOVERTEMPERATURE

| WERT | TEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABPORTLINKSTATUS

| WERT | TEXT |
| --- | --- |
| 0x0001 | Port BR0 |
| 0x0002 | Port BR1 |
| 0x0003 | Ports BR0 and BR1 |
| 0x0004 | Port BR2 |
| 0x0005 | Ports BR0 and BR2 |
| 0x0006 | Ports BR1 and BR2 |
| 0x0007 | Ports BR0, BR1 and BR2 |
| 0x0008 | Port BR3 |
| 0x0009 | Ports BR0 and BR3 |
| 0x000A | Ports BR1 and BR3 |
| 0x000B | Ports BR0, BR1 and BR3 |
| 0x000C | Ports BR2 and BR3 |
| 0x000D | Ports BR0, BR2 and BR3 |
| 0x000E | Ports BR1, BR2 and BR3 |
| 0x000F | Ports BR0, BR1, BR2 and BR3 |
| 0x0010 | Port OBD |
| 0x0011 | Ports BR0 and OBD |
| 0x0012 | Ports BR1 and OBD |
| 0x0013 | Ports BR0, BR1 and OBD |
| 0x0014 | Ports BR2 and OBD |
| 0x0015 | Ports BR0, BR2 and OBD |
| 0x0016 | Ports BR1, BR2 and OBD |
| 0x0017 | Ports BR0, BR1, BR2 and OBD |
| 0x0018 | Ports BR3 and OBD |
| 0x0019 | Ports BR0, BR3 and OBD |
| 0x001A | Ports BR1, BR3 and OBD |
| 0x001B | Ports BR0, BR1, BR3 and OBD |
| 0x001C | Ports BR2, BR3 and OBD |
| 0x001D | Ports BR0, BR2, BR3 and OBD |
| 0x001E | Ports BR1, BR2, BR3 and OBD |
| 0x001F | Ports BR0, BR1, BR2, BR3 and OBD |
| 0xFFFF | ungueltiger Wert |

### TABPORTMIRRORSTATUS

| WERT | TEXT |
| --- | --- |
| 0x0001 | Port 0 |
| 0x0002 | Port 1 |
| 0x0004 | Port 2 |
| 0x0008 | Port 3 |
| 0x0010 | Port 4 |
| 0x0020 | Port 8 |
| 0x0040 | Port 5 |
| 0xFFFF | ungueltiger Wert |

### TABPORTSQISTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Signal Quality 0% |
| 0x0A | Signal Quality 10% |
| 0x14 | Signal Quality 20% |
| 0x1E | Signal Quality 30% |
| 0x28 | Signal Quality 40% |
| 0x32 | Signal Quality 50% |
| 0x3C | Signal Quality 60% |
| 0x46 | Signal Quality 70% |
| 0x50 | Signal Quality 80% |
| 0x5A | Signal Quality 90% |
| 0x64 | Signal Quality 100% |
| 0xFF | ungueltiger Wert |

### TABSOFTWAREERROR

| WERT | TEXT |
| --- | --- |
| 0x01 | allgemeine Fehler |
| 0xFF | ungueltiger Wert |

### TABSOFTWAREMODUL

| WERT | TEXT |
| --- | --- |
| 0x01 | VCM |
| 0xFF | ungueltiger Wert |

### TABSTATUSFLEXRAYLERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Lern FlexRay wurde nicht durchgeführt |
| 0x01 | Lern FlexRay wurde durchgeführt |
| 0xFF | ungueltig |

### TABSTEUERNFLEXRAYLERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Liste der DiagnoseAdressen die konfiguriert worden sind |
| 0x01 | Liste der DiagnoseAdressen die in VCM Soll vorhanden aber nicht auf Abfrage reagiert haben |
| 0x02 | Timeout ist gelaufen |
| 0x03 | Liste der DiagnoseAdressen der fehlerhaften Steuergeräte - Response Pending |
| 0x04 | Liste der SGn die zum zweiten Mal auf ein Request nicht geantwortet haben |
| 0xFF | ungueltig |

### TABSWFEHLERCODE

| WERT | TEXT |
| --- | --- |
| 0x01 | ERROR_SCB_TIMEWINDOWERROR |
| 0x02 | ERROR_SCB_WINDOWBELOWBUFFERRANGE |
| 0x03 | ERROR_CMA_LOCK_CONFLICT |
| 0x04 | ERROR_TTH_LOCKDENIENDWHILETRYINGTOCREATEERROR |
| 0x05 | ERROR_CMA_ILLEGAL_UNLOCK_BLOCKED |
| 0x06 | ERROR_TTH_WRITELOCKCOULDNOTBERELEASED |
| 0x07 | ERROR_NA_READABOVERANGE |
| 0x08 | ERROR_SCM_RECEIVEDCONTEXTFORNOELEMENT |
| 0x09 | ERROR_SCM_SYSTEMCONTEXTLENGTHMAXVIOLATION |
| 0x0A | ERROR_SCM_SYSTEMCONTEXTLENGTHMINVIOLATION |
| 0x0B | ERROR_SCM_NOELEMENTACTIVATED |
| 0x0C | ERROR_SCE_MODENOTFOUND |
| 0x0D | ERROR_SCE_SIGNALTOOLONG |
| 0x0E | ERROR_SCM_SYSTEMCONTEXTLENGTHMINVIOLATION2 |
| 0x0F | ERROR_SCEH_HISTORYMODEERROR |
| 0x10 | ERROR_SCE_WRITECONTEXTLENGTHERROR |
| 0x11 | ERROR_SCM_NUMBEROFSYSCONTEXTELEMENTSVIOLATION |
| 0x12 | ERROR_SCE_NOSIGNALRECEIVEDYET |
| 0x13 | ERROR_NA_SETSYSCONTEXT_IN_MAPPING_AREA |
| 0x14 | ERROR_NA_WORNG_EVENTMSGMAPPING_ADDRESS_SET |
| 0x15 | ERROR_NA_WORNG_EVENTMSGMAPPING_ADDRESS |
| 0x16 | ERROR_SCM_NOTACTIVE |
| 0x17 | ERROR_NOSYSTEMCONTEXTFILTERGENERATED |
| 0x18 | ERROR_CANCONFIGURATORADDLISTENERFAILED |
| 0x19 | ERROR_NA_GETSYSTEMCONTEXTCOUNTFAILED |
| 0x1A | ERROR_NA_GETSYSTEMCONTEXTFAILED |
| 0x1B | ERROR_NA_SETSYSTEMCONTEXTFAILED |
| 0x1C | ERROR_NA_GETEVENTMSGMAPPINGCOUNTFAILED |
| 0x1D | ERROR_NA_SETEVENTMSGMAPPINGCOUNTFAILED |
| 0x1E | ERROR_NA_SETEVENTMSGMAPPINGFAILED |
| 0x1F | ERROR_SCCL_MSGPOOLERROR |
| 0x20 | ERROR_SCM_SYSTEMCONTEXTELEMENTZEROLENGTH |
| 0x21 | ERROR_CCMH_CCMSGRECEIVEDBUTNOSYSTIMEAVAILABLE |
| 0x22 | NULLPOINTER_INPUT |
| 0x23 | CCMNV_COULD_NOT_UNLOCK |
| 0x24 | WARNING_CLEARED_TROUBLETICKETQUEUE_IN_SHUTDOWN |
| 0x25 | TRH_CLEAR_CMA_RETURNED_FALSE |
| 0x26 | ERROR_NA_READCHECKSUMFAILED |
| 0x27 | ERROR_CMA_CHECKSUM_MISSMATCH_ON_STARTUP |
| 0x28 | ERROR_CMA_CHECKSUM_MISSMATCH_ON_STARTUP_INCORRECTABLE |
| 0x29 | ERROR_SHUTDOWN_CRC_MISSMATCH |
| 0x2A | ERROR_NA_ADDSYSCONTEXTANDMAPPINGERROR |
| 0x2B | ERROR_NA_ADDMAPPINGERROR |
| 0x2C | TRH_READSYSCONTEXTBLOCK_CMA_RETURNED_FALSE |
| 0x2D | LIFECYCLE_PREPARESHUTDOWNCALLEDWHILE_NOT_LEVELRUN |
| 0x2E | WARNING_NA_OCCURENCECOUNTERCACHEOVERFLOW |
| 0x2F | ERROR_THIS_MUST_NOT_HAPPEN |
| 0x30 | ERROR_NO_TRANSACTION |
| 0x31 | ERROR_CREATESYSTEMCONTEXTFAILED |
| 0x32 | ERROR_ADD_JOB_FAILED |
| 0x33 | ERROR_WRONG_INIT_STAGE |
| 0x34 | ERROR_SCM_SYSTEMCONTEXTLENGTHMINVIOLATION3 |
| 0x35 | ERROR_GET_NEWESTSYSTEMTIME |
| 0x36 | ERROR_ER_WRONGACTIVERESPONSELENGTH |
| 0x39 | ERROR_CREATEMAPPINGFAILED |
| 0x3A | ERROR_MESSAGE_QUEUE_FULL |
| 0x3B | ERROR_NA_SETSYSCONTEXT_MAPPING_POWERCYCLE |
| 0xFF | Ungueltiger Wert |

### TABTIMEOUTURSACHE

| WERT | TEXT |
| --- | --- |
| 0x00 | Pfad 0 wurde abgeschaltet und die anderen SG haben innerhalb der eingegebenen Zeit nicht geantwortet |
| 0x01 | Pfad 1 wurde abgeschaltet und die anderen SG haben innerhalb der eingegebenen Zeit nicht geantwortet |
| 0x02 | Pfad 2 wurde abgeschaltet und die anderen SG haben innerhalb der eingegebenen Zeit nicht geantwortet |
| 0x03 | Pfad 3 wurde abgeschaltet und die anderen SG haben innerhalb der eingegebenen Zeit nicht geantwortet |
| 0x04 | Pfad 4 wurde abgeschaltet und die anderen SG haben innerhalb der eingegebenen Zeit nicht geantwortet |
| 0x05 | Pfad 5 wurde abgeschaltet und die anderen SG haben innerhalb der eingegebenen Zeit nicht geantwortet |
| 0x06 | Pfad 6 wurde abgeschaltet und die anderen SG haben innerhalb der eingegebenen Zeit nicht geantwortet |
| 0x07 | Pfad 7 wurde abgeschaltet und die anderen SG haben innerhalb der eingegebenen Zeit nicht geantwortet |
| 0x08 | Alle Pfaede sind offen und kein SG hat innerhalb der eingegebenen Zeit geantwortet |
| 0xFF | ungueltig |

### TABTXENISPERMANENTLYLOW

| WERT | TEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABVBATUNDERVOLTAGE

| WERT | TEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABVCCUNDERVOLTAGE

| WERT | TEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABVCMREADERRORCODE

| WERT | TEXT |
| --- | --- |
| 0x01 | Leerer Speicher |
| 0x02 | Ungültige Datengröße |
| 0x03 | Fehlerhafte Datenlänge aus EEPROM |
| 0x04 | Fehlerhafte Datencontainer aus EEPROM |
| 0x05 | SVT-Stream-Datenstruktur fehlerhaft / Speicherüberlauf |
| 0x06 | SVT-Objekt-Datenstruktur fehlerhaft / Speicherüberlauf |
| 0x07 | EEPROM-Manager Fehler |
| 0xFF | ungueltiger Wert |

### TABVCMSERIALGENERATIONERRORCODE

| WERT | TEXT |
| --- | --- |
| 0x01 | Generierung vollständig, getauschte SG vorhanden |
| 0x02 | Generierung ohne Ergebnis-Abbruch nach Deaktivierung von Klemme 15 |
| 0x03 | Generierung ohne Ergebnis-Abbruch nachGeneral Reject vom TAS |
| 0xFF | Ungueltiger Wert |

### TABVCMWRITEERRORCODE

| WERT | TEXT |
| --- | --- |
| 0x01 | EEPROM-Manager Fehler |
| 0x02 | SVT-Stream-Datenstruktur fehlerhaft / Speicherüberlauf |
| 0x03 | SVT-Objekt-Datenstruktur fehlerhaft / Speicherüberlauf |
| 0x04 | Maximale Datenlänge überschritten |
| 0x05 | Allgemeiner Fehler |
| 0xFF | ungueltiger Wert |

### TABVIOUNDERVOLTAGE

| WERT | TEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABWECKGRUND

| WERT | TEXT |
| --- | --- |
| 0x00 | Steuergeräte ResetSteuergeräte Reset |
| 0x01 | Diebstahlwarnanlage |
| 0x02 | Restwärme |
| 0x03 | CO2-Erkennung |
| 0x04 | Eject-Button |
| 0x05 | Abschaltung Innen-/Außenlicht |
| 0x06 | Außenspiegel |
| 0x07 | Remote Services |
| 0x08 | Emergency call |
| 0x09 | CAS-Bus, Taster Heckklappe sichern |
| 0x0A | CID-Klappen-Taster |
| 0x0B | Smart Opener |
| 0x0C | Ladekabel gesteckt |
| 0x0E | Taster Verstellung Anhängerkupplung |
| 0x10 | Tuerkontakt vorne links |
| 0x11 | Tuerkontakt vorne rechts |
| 0x12 | Tuerkontakt hinten links |
| 0x13 | Tuerkontakt hinten rechts |
| 0x14 | Taster Fahrertuer (CA) |
| 0x15 | Taster Beifahrertuer (CA) |
| 0x16 | Taster Heckklappe oeffnen innen (TOEHKI) |
| 0x17 | Taster Oeffner Heckklappe (TOEHK) |
| 0x18 | Taster Oeffner Heckscheibe (TOEHS) |
| 0x19 | Heckklappenkontakt |
| 0x1A | Eingang Heckscheibenkontakt (HKK) |
| 0x1B | Motorhaubenkontakt |
| 0x1C | Tuerschloss entriegeln/Komfortoeffnen (Fahrertuer), Centerlock-Wippe Fahrertür |
| 0x1D | Tuerschloss verriegeln/Komfortschliessen (Fahrertuer), Centerlock-Wippe Beifahrertür |
| 0x1E | Kurzschluss Klemme 30B |
| 0x20 | Start Stop Taster A |
| 0x21 | Start Stop Taster B |
| 0x22 | Hallsensor Eject |
| 0x23 | Center Lock/Unlock |
| 0x24 | Parkstellung Automatik |
| 0x25 | Lichtschalter ein (redundant) |
| 0x26 | Schalter Warnblinken |
| 0x27 | Lenkstocktaster  in Richtung  Blinken Links |
| 0x28 | Lenkstocktaster in Richtung  Blinken rechts |
| 0x29 | Lenkstocktaster in Richtung  Lichthupe |
| 0x2A | Schalter Innenbeleuchtung (Dachmodul) |
| 0x2B | Getriebewahschalter |
| 0x2C | EMF-Taster |
| 0x2D | Entertainment-Button |
| 0x2E | Lenksaeulenverstellschalter |
| 0x2F | Niveauregulierung Luftfeder |
| 0x30 | Fernbedienungsdienste / RKE |
| 0x31 | Wakeup-Signal von TCU |
| 0x32 | Hotelschalter |
| 0x33 | Intelligenter Batterie Sensor, via LIN |
| 0x34 | Ablauf Timer Standheizung/lueften/klima |
| 0x35 | Kuehlmittelabfrage durch Kombi |
| 0x36 | Klemme 15 Wakeupleitung |
| 0x37 | Taster Fahrertuer hinten entriegeln (CA) |
| 0x38 | Taster Beifahrertuer hinten entriegeln (CA) |
| 0x39 | Taster Fahrertuer entriegeln kapazitiv (CA) |
| 0x3A | Taster Beifahrertuer entriegeln kapazitiv (CA) |
| 0x3B | Taster Fahrertuer hinten entriegeln kapazitiv (CA) |
| 0x3C | Taster Beifahrertuer hinten entriegeln kapazitiv (CA) |
| 0x3D | Bremslichtschalter |
| 0x3E | Kupplungsschalter |
| 0x3F | ungueltiger Weckgrund, Weckgrund nicht gesetzt |
| 0x40 | Nebelscheinwerfer |
| 0x41 | Nebelschlussleuchte |
| 0x42 | Sarah-Tasters |
| 0x43 | FES-Wippe |
| 0x44 | PDC-Taster |
| 0x45 | Side-View-Taster |
| 0x46 | Heckspoiler-Taster |
| 0x47 | VDP-Taster |
| 0x48 | MSA-Taster |
| 0x49 | Taster Audio Lautstaerke Lenkrad |
| 0x4A | Taster Sonderfunktion |
| 0x4B | Taster Rändel Lenkrad |
| 0x4C | Taster Telefon Lenkrad |
| 0x4D | Taster PTT Lenkrad |
| 0x4E | Taster Sitzheizung Fahrer |
| 0x4F | Taster Sitzheizung Beifahrer |
| 0x50 | Taster Sitzheizung Fahrer hinten |
| 0x51 | Taster Sitzheizung Beifahrer hinten |
| 0x52 | Sitzmemorytaster Fahrer |
| 0x53 | Schalterblock Tuer China Lang |
| 0x54 | Lenkstocktaster Licht drücken |
| 0x55 | Schaltzentrum Tür |
| 0x58 | CarSharing-Modul |
| 0x59 | Sitzbedienung |
| 0x5A | Klimabedienung |
| 0x5B | PWF Zustandswechsel |
| 0x5D | Parklichtschalter |
| 0x60 | Sitzmemorytaster Beifahrer |
| 0x61 | Sitzmemorytaster Fahrer hinten |
| 0x62 | Sitzmemorytaster Beifahrer hinten |
| 0x70 | Weckweiterleitung |
| 0x81 | Weckursache  MOST |
| 0x82 | Weckursache  I_CAN |
| 0x84 | Weckursache  FA_CAN |
| 0x88 | Weckursache  BODY_CAN |
| 0x90 | Weckursache  D_CAN |
| 0xA0 | Weckursache  WECKLEITUNG |
| 0xC0 | Weckursache  ETHERNET_AKTIVIERUNGSLEITUNG |
| 0xFF | Weckursache ungultig |

### TAB_AUSGANGS_PORT_MASKE

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Ausgehender Traffic gespiegelt |
| 0x01 | Ausgehender Traffic von: BR_0,  |
| 0x02 | Ausgehender Traffic von: BR_1,  |
| 0x03 | Ausgehender Traffic von: BR_0, BR_1,  |
| 0x04 | Ausgehender Traffic von: BR_2,  |
| 0x05 | Ausgehender Traffic von: BR_0, BR_2,  |
| 0x06 | Ausgehender Traffic von: BR_1, BR_2,  |
| 0x07 | Ausgehender Traffic von: BR_0, BR_1, BR_2,  |
| 0x08 | Ausgehender Traffic von: BR_3,  |
| 0x09 | Ausgehender Traffic von: BR_0, BR_3,  |
| 0x0A | Ausgehender Traffic von: BR_1, BR_3,  |
| 0x0B | Ausgehender Traffic von: BR_0, BR_1, BR_3,  |
| 0x0C | Ausgehender Traffic von: BR_2, BR_3,  |
| 0x0D | Ausgehender Traffic von: BR_0, BR_2, BR_3,  |
| 0x0E | Ausgehender Traffic von: BR_1, BR_2, BR_3,  |
| 0x0F | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3,  |
| 0x10 | Ausgehender Traffic von: BR_4,  |
| 0x11 | Ausgehender Traffic von: BR_0, BR_4,  |
| 0x12 | Ausgehender Traffic von: BR_1, BR_4,  |
| 0x13 | Ausgehender Traffic von: BR_0, BR_1, BR_4,  |
| 0x14 | Ausgehender Traffic von: BR_2, BR_4,  |
| 0x15 | Ausgehender Traffic von: BR_0, BR_2, BR_4,  |
| 0x16 | Ausgehender Traffic von: BR_1, BR_2, BR_4,  |
| 0x17 | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_4,  |
| 0x18 | Ausgehender Traffic von: BR_3, BR_4,  |
| 0x19 | Ausgehender Traffic von: BR_0, BR_3, BR_4,  |
| 0x1A | Ausgehender Traffic von: BR_1, BR_3, BR_4,  |
| 0x1B | Ausgehender Traffic von: BR_0, BR_1, BR_3, BR_4,  |
| 0x1C | Ausgehender Traffic von: BR_2, BR_3, BR_4,  |
| 0x1D | Ausgehender Traffic von: BR_0, BR_2, BR_3, BR_4,  |
| 0x1E | Ausgehender Traffic von: BR_1, BR_2, BR_3, BR_4,  |
| 0x1F | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4,  |
| 0x20 | Ausgehender Traffic von: BR_5,  |
| 0x21 | Ausgehender Traffic von: BR_0, BR_5,  |
| 0x22 | Ausgehender Traffic von: BR_1, BR_5,  |
| 0x23 | Ausgehender Traffic von: BR_0, BR_1, BR_5,  |
| 0x24 | Ausgehender Traffic von: BR_2, BR_5,  |
| 0x25 | Ausgehender Traffic von: BR_0, BR_2, BR_5,  |
| 0x26 | Ausgehender Traffic von: BR_1, BR_2, BR_5,  |
| 0x27 | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_5,  |
| 0x28 | Ausgehender Traffic von: BR_3, BR_5,  |
| 0x29 | Ausgehender Traffic von: BR_0, BR_3, BR_5,  |
| 0x2A | Ausgehender Traffic von: BR_1, BR_3, BR_5,  |
| 0x2B | Ausgehender Traffic von: BR_0, BR_1, BR_3, BR_5,  |
| 0x2C | Ausgehender Traffic von: BR_2, BR_3, BR_5,  |
| 0x2D | Ausgehender Traffic von: BR_0, BR_2, BR_3, BR_5,  |
| 0x2E | Ausgehender Traffic von: BR_1, BR_2, BR_3, BR_5,  |
| 0x2F | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_5,  |
| 0x30 | Ausgehender Traffic von: BR_4, BR_5,  |
| 0x31 | Ausgehender Traffic von: BR_0, BR_4, BR_5,  |
| 0x32 | Ausgehender Traffic von: BR_1, BR_4, BR_5,  |
| 0x33 | Ausgehender Traffic von: BR_0, BR_1, BR_4, BR_5,  |
| 0x34 | Ausgehender Traffic von: BR_2, BR_4, BR_5,  |
| 0x35 | Ausgehender Traffic von: BR_0, BR_2, BR_4, BR_5,  |
| 0x36 | Ausgehender Traffic von: BR_1, BR_2, BR_4, BR_5,  |
| 0x37 | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_4, BR_5,  |
| 0x38 | Ausgehender Traffic von: BR_3, BR_4, BR_5,  |
| 0x39 | Ausgehender Traffic von: BR_0, BR_3, BR_4, BR_5,  |
| 0x3A | Ausgehender Traffic von: BR_1, BR_3, BR_4, BR_5,  |
| 0x3B | Ausgehender Traffic von: BR_0, BR_1, BR_3, BR_4, BR_5,  |
| 0x3C | Ausgehender Traffic von: BR_2, BR_3, BR_4, BR_5,  |
| 0x3D | Ausgehender Traffic von: BR_0, BR_2, BR_3, BR_4, BR_5,  |
| 0x3E | Ausgehender Traffic von: BR_1, BR_2, BR_3, BR_4, BR_5,  |
| 0x3F | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4, BR_5,  |
| 0x40 | Ausgehender Traffic von: ZGW,  |
| 0x41 | Ausgehender Traffic von: BR_0, ZGW,  |
| 0x42 | Ausgehender Traffic von: BR_1, ZGW,  |
| 0x43 | Ausgehender Traffic von: BR_0, BR_1, ZGW,  |
| 0x44 | Ausgehender Traffic von: BR_2, ZGW,  |
| 0x45 | Ausgehender Traffic von: BR_0, BR_2, ZGW,  |
| 0x46 | Ausgehender Traffic von: BR_1, BR_2, ZGW,  |
| 0x47 | Ausgehender Traffic von: BR_0, BR_1, BR_2, ZGW,  |
| 0x48 | Ausgehender Traffic von: BR_3, ZGW,  |
| 0x49 | Ausgehender Traffic von: BR_0, BR_3, ZGW,  |
| 0x4A | Ausgehender Traffic von: BR_1, BR_3, ZGW,  |
| 0x4B | Ausgehender Traffic von: BR_0, BR_1, BR_3, ZGW,  |
| 0x4C | Ausgehender Traffic von: BR_2, BR_3, ZGW,  |
| 0x4D | Ausgehender Traffic von: BR_0, BR_2, BR_3, ZGW,  |
| 0x4E | Ausgehender Traffic von: BR_1, BR_2, BR_3, ZGW,  |
| 0x4F | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, ZGW,  |
| 0x50 | Ausgehender Traffic von: BR_4, ZGW,  |
| 0x51 | Ausgehender Traffic von: BR_0, BR_4, ZGW,  |
| 0x52 | Ausgehender Traffic von: BR_1, BR_4, ZGW,  |
| 0x53 | Ausgehender Traffic von: BR_0, BR_1, BR_4, ZGW,  |
| 0x54 | Ausgehender Traffic von: BR_2, BR_4, ZGW,  |
| 0x55 | Ausgehender Traffic von: BR_0, BR_2, BR_4, ZGW,  |
| 0x56 | Ausgehender Traffic von: BR_1, BR_2, BR_4, ZGW,  |
| 0x57 | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_4, ZGW,  |
| 0x58 | Ausgehender Traffic von: BR_3, BR_4, ZGW,  |
| 0x59 | Ausgehender Traffic von: BR_0, BR_3, BR_4, ZGW,  |
| 0x5A | Ausgehender Traffic von: BR_1, BR_3, BR_4, ZGW,  |
| 0x5B | Ausgehender Traffic von: BR_0, BR_1, BR_3, BR_4, ZGW,  |
| 0x5C | Ausgehender Traffic von: BR_2, BR_3, BR_4, ZGW,  |
| 0x5D | Ausgehender Traffic von: BR_0, BR_2, BR_3, BR_4, ZGW,  |
| 0x5E | Ausgehender Traffic von: BR_1, BR_2, BR_3, BR_4, ZGW,  |
| 0x5F | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4, ZGW,  |
| 0x60 | Ausgehender Traffic von: BR_5, ZGW,  |
| 0x61 | Ausgehender Traffic von: BR_0, BR_5, ZGW,  |
| 0x62 | Ausgehender Traffic von: BR_1, BR_5, ZGW,  |
| 0x63 | Ausgehender Traffic von: BR_0, BR_1, BR_5, ZGW,  |
| 0x64 | Ausgehender Traffic von: BR_2, BR_5, ZGW,  |
| 0x65 | Ausgehender Traffic von: BR_0, BR_2, BR_5, ZGW,  |
| 0x66 | Ausgehender Traffic von: BR_1, BR_2, BR_5, ZGW,  |
| 0x67 | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_5, ZGW,  |
| 0x68 | Ausgehender Traffic von: BR_3, BR_5, ZGW,  |
| 0x69 | Ausgehender Traffic von: BR_0, BR_3, BR_5, ZGW,  |
| 0x6A | Ausgehender Traffic von: BR_1, BR_3, BR_5, ZGW,  |
| 0x6B | Ausgehender Traffic von: BR_0, BR_1, BR_3, BR_5, ZGW,  |
| 0x6C | Ausgehender Traffic von: BR_2, BR_3, BR_5, ZGW,  |
| 0x6D | Ausgehender Traffic von: BR_0, BR_2, BR_3, BR_5, ZGW,  |
| 0x6E | Ausgehender Traffic von: BR_1, BR_2, BR_3, BR_5, ZGW,  |
| 0x6F | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_5, ZGW,  |
| 0x70 | Ausgehender Traffic von: BR_4, BR_5, ZGW,  |
| 0x71 | Ausgehender Traffic von: BR_0, BR_4, BR_5, ZGW,  |
| 0x72 | Ausgehender Traffic von: BR_1, BR_4, BR_5, ZGW,  |
| 0x73 | Ausgehender Traffic von: BR_0, BR_1, BR_4, BR_5, ZGW,  |
| 0x74 | Ausgehender Traffic von: BR_2, BR_4, BR_5, ZGW,  |
| 0x75 | Ausgehender Traffic von: BR_0, BR_2, BR_4, BR_5, ZGW,  |
| 0x76 | Ausgehender Traffic von: BR_1, BR_2, BR_4, BR_5, ZGW,  |
| 0x77 | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_4, BR_5, ZGW,  |
| 0x78 | Ausgehender Traffic von: BR_3, BR_4, BR_5, ZGW,  |
| 0x79 | Ausgehender Traffic von: BR_0, BR_3, BR_4, BR_5, ZGW,  |
| 0x7A | Ausgehender Traffic von: BR_1, BR_3, BR_4, BR_5, ZGW,  |
| 0x7B | Ausgehender Traffic von: BR_0, BR_1, BR_3, BR_4, BR_5, ZGW,  |
| 0x7C | Ausgehender Traffic von: BR_2, BR_3, BR_4, BR_5, ZGW,  |
| 0x7D | Ausgehender Traffic von: BR_0, BR_2, BR_3, BR_4, BR_5, ZGW,  |
| 0x7E | Ausgehender Traffic von: BR_1, BR_2, BR_3, BR_4, BR_5, ZGW,  |
| 0x7F | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4, BR_5, ZGW,  |
| 0x80 | Ausgehender Traffic von: Body |
| 0x81 | Ausgehender Traffic von: BR_0, Body |
| 0x82 | Ausgehender Traffic von: BR_1, Body |
| 0x83 | Ausgehender Traffic von: BR_0, BR_1, Body |
| 0x84 | Ausgehender Traffic von: BR_2, Body |
| 0x85 | Ausgehender Traffic von: BR_0, BR_2, Body |
| 0x86 | Ausgehender Traffic von: BR_1, BR_2, Body |
| 0x87 | Ausgehender Traffic von: BR_0, BR_1, BR_2, Body |
| 0x88 | Ausgehender Traffic von: BR_3, Body |
| 0x89 | Ausgehender Traffic von: BR_0, BR_3, Body |
| 0x8A | Ausgehender Traffic von: BR_1, BR_3, Body |
| 0x8B | Ausgehender Traffic von: BR_0, BR_1, BR_3, Body |
| 0x8C | Ausgehender Traffic von: BR_2, BR_3, Body |
| 0x8D | Ausgehender Traffic von: BR_0, BR_2, BR_3, Body |
| 0x8E | Ausgehender Traffic von: BR_1, BR_2, BR_3, Body |
| 0x8F | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, Body |
| 0x90 | Ausgehender Traffic von: BR_4, Body |
| 0x91 | Ausgehender Traffic von: BR_0, BR_4, Body |
| 0x92 | Ausgehender Traffic von: BR_1, BR_4, Body |
| 0x93 | Ausgehender Traffic von: BR_0, BR_1, BR_4, Body |
| 0x94 | Ausgehender Traffic von: BR_2, BR_4, Body |
| 0x95 | Ausgehender Traffic von: BR_0, BR_2, BR_4, Body |
| 0x96 | Ausgehender Traffic von: BR_1, BR_2, BR_4, Body |
| 0x97 | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_4, Body |
| 0x98 | Ausgehender Traffic von: BR_3, BR_4, Body |
| 0x99 | Ausgehender Traffic von: BR_0, BR_3, BR_4, Body |
| 0x9A | Ausgehender Traffic von: BR_1, BR_3, BR_4, Body |
| 0x9B | Ausgehender Traffic von: BR_0, BR_1, BR_3, BR_4, Body |
| 0x9C | Ausgehender Traffic von: BR_2, BR_3, BR_4, Body |
| 0x9D | Ausgehender Traffic von: BR_0, BR_2, BR_3, BR_4, Body |
| 0x9E | Ausgehender Traffic von: BR_1, BR_2, BR_3, BR_4, Body |
| 0x9F | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4, Body |
| 0xA0 | Ausgehender Traffic von: BR_5, Body |
| 0xA1 | Ausgehender Traffic von: BR_0, BR_5, Body |
| 0xA2 | Ausgehender Traffic von: BR_1, BR_5, Body |
| 0xA3 | Ausgehender Traffic von: BR_0, BR_1, BR_5, Body |
| 0xA4 | Ausgehender Traffic von: BR_2, BR_5, Body |
| 0xA5 | Ausgehender Traffic von: BR_0, BR_2, BR_5, Body |
| 0xA6 | Ausgehender Traffic von: BR_1, BR_2, BR_5, Body |
| 0xA7 | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_5, Body |
| 0xA8 | Ausgehender Traffic von: BR_3, BR_5, Body |
| 0xA9 | Ausgehender Traffic von: BR_0, BR_3, BR_5, Body |
| 0xAA | Ausgehender Traffic von: BR_1, BR_3, BR_5, Body |
| 0xAB | Ausgehender Traffic von: BR_0, BR_1, BR_3, BR_5, Body |
| 0xAC | Ausgehender Traffic von: BR_2, BR_3, BR_5, Body |
| 0xAD | Ausgehender Traffic von: BR_0, BR_2, BR_3, BR_5, Body |
| 0xAE | Ausgehender Traffic von: BR_1, BR_2, BR_3, BR_5, Body |
| 0xAF | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_5, Body |
| 0xB0 | Ausgehender Traffic von: BR_4, BR_5, Body |
| 0xB1 | Ausgehender Traffic von: BR_0, BR_4, BR_5, Body |
| 0xB2 | Ausgehender Traffic von: BR_1, BR_4, BR_5, Body |
| 0xB3 | Ausgehender Traffic von: BR_0, BR_1, BR_4, BR_5, Body |
| 0xB4 | Ausgehender Traffic von: BR_2, BR_4, BR_5, Body |
| 0xB5 | Ausgehender Traffic von: BR_0, BR_2, BR_4, BR_5, Body |
| 0xB6 | Ausgehender Traffic von: BR_1, BR_2, BR_4, BR_5, Body |
| 0xB7 | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_4, BR_5, Body |
| 0xB8 | Ausgehender Traffic von: BR_3, BR_4, BR_5, Body |
| 0xB9 | Ausgehender Traffic von: BR_0, BR_3, BR_4, BR_5, Body |
| 0xBA | Ausgehender Traffic von: BR_1, BR_3, BR_4, BR_5, Body |
| 0xBB | Ausgehender Traffic von: BR_0, BR_1, BR_3, BR_4, BR_5, Body |
| 0xBC | Ausgehender Traffic von: BR_2, BR_3, BR_4, BR_5, Body |
| 0xBD | Ausgehender Traffic von: BR_0, BR_2, BR_3, BR_4, BR_5, Body |
| 0xBE | Ausgehender Traffic von: BR_1, BR_2, BR_3, BR_4, BR_5, Body |
| 0xBF | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4, BR_5, Body |
| 0xC0 | Ausgehender Traffic von: ZGW, Body |
| 0xC1 | Ausgehender Traffic von: BR_0, ZGW, Body |
| 0xC2 | Ausgehender Traffic von: BR_1, ZGW, Body |
| 0xC3 | Ausgehender Traffic von: BR_0, BR_1, ZGW, Body |
| 0xC4 | Ausgehender Traffic von: BR_2, ZGW, Body |
| 0xC5 | Ausgehender Traffic von: BR_0, BR_2, ZGW, Body |
| 0xC6 | Ausgehender Traffic von: BR_1, BR_2, ZGW, Body |
| 0xC7 | Ausgehender Traffic von: BR_0, BR_1, BR_2, ZGW, Body |
| 0xC8 | Ausgehender Traffic von: BR_3, ZGW, Body |
| 0xC9 | Ausgehender Traffic von: BR_0, BR_3, ZGW, Body |
| 0xCA | Ausgehender Traffic von: BR_1, BR_3, ZGW, Body |
| 0xCB | Ausgehender Traffic von: BR_0, BR_1, BR_3, ZGW, Body |
| 0xCC | Ausgehender Traffic von: BR_2, BR_3, ZGW, Body |
| 0xCD | Ausgehender Traffic von: BR_0, BR_2, BR_3, ZGW, Body |
| 0xCE | Ausgehender Traffic von: BR_1, BR_2, BR_3, ZGW, Body |
| 0xCF | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, ZGW, Body |
| 0xD0 | Ausgehender Traffic von: BR_4, ZGW, Body |
| 0xD1 | Ausgehender Traffic von: BR_0, BR_4, ZGW, Body |
| 0xD2 | Ausgehender Traffic von: BR_1, BR_4, ZGW, Body |
| 0xD3 | Ausgehender Traffic von: BR_0, BR_1, BR_4, ZGW, Body |
| 0xD4 | Ausgehender Traffic von: BR_2, BR_4, ZGW, Body |
| 0xD5 | Ausgehender Traffic von: BR_0, BR_2, BR_4, ZGW, Body |
| 0xD6 | Ausgehender Traffic von: BR_1, BR_2, BR_4, ZGW, Body |
| 0xD7 | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_4, ZGW, Body |
| 0xD8 | Ausgehender Traffic von: BR_3, BR_4, ZGW, Body |
| 0xD9 | Ausgehender Traffic von: BR_0, BR_3, BR_4, ZGW, Body |
| 0xDA | Ausgehender Traffic von: BR_1, BR_3, BR_4, ZGW, Body |
| 0xDB | Ausgehender Traffic von: BR_0, BR_1, BR_3, BR_4, ZGW, Body |
| 0xDC | Ausgehender Traffic von: BR_2, BR_3, BR_4, ZGW, Body |
| 0xDD | Ausgehender Traffic von: BR_0, BR_2, BR_3, BR_4, ZGW, Body |
| 0xDE | Ausgehender Traffic von: BR_1, BR_2, BR_3, BR_4, ZGW, Body |
| 0xDF | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4, ZGW, Body |
| 0xE0 | Ausgehender Traffic von: BR_5, ZGW, Body |
| 0xE1 | Ausgehender Traffic von: BR_0, BR_5, ZGW, Body |
| 0xE2 | Ausgehender Traffic von: BR_1, BR_5, ZGW, Body |
| 0xE3 | Ausgehender Traffic von: BR_0, BR_1, BR_5, ZGW, Body |
| 0xE4 | Ausgehender Traffic von: BR_2, BR_5, ZGW, Body |
| 0xE5 | Ausgehender Traffic von: BR_0, BR_2, BR_5, ZGW, Body |
| 0xE6 | Ausgehender Traffic von: BR_1, BR_2, BR_5, ZGW, Body |
| 0xE7 | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_5, ZGW, Body |
| 0xE8 | Ausgehender Traffic von: BR_3, BR_5, ZGW, Body |
| 0xE9 | Ausgehender Traffic von: BR_0, BR_3, BR_5, ZGW, Body |
| 0xEA | Ausgehender Traffic von: BR_1, BR_3, BR_5, ZGW, Body |
| 0xEB | Ausgehender Traffic von: BR_0, BR_1, BR_3, BR_5, ZGW, Body |
| 0xEC | Ausgehender Traffic von: BR_2, BR_3, BR_5, ZGW, Body |
| 0xED | Ausgehender Traffic von: BR_0, BR_2, BR_3, BR_5, ZGW, Body |
| 0xEE | Ausgehender Traffic von: BR_1, BR_2, BR_3, BR_5, ZGW, Body |
| 0xEF | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_5, ZGW, Body |
| 0xF0 | Ausgehender Traffic von: BR_4, BR_5, ZGW, Body |
| 0xF1 | Ausgehender Traffic von: BR_0, BR_4, BR_5, ZGW, Body |
| 0xF2 | Ausgehender Traffic von: BR_1, BR_4, BR_5, ZGW, Body |
| 0xF3 | Ausgehender Traffic von: BR_0, BR_1, BR_4, BR_5, ZGW, Body |
| 0xF4 | Ausgehender Traffic von: BR_2, BR_4, BR_5, ZGW, Body |
| 0xF5 | Ausgehender Traffic von: BR_0, BR_2, BR_4, BR_5, ZGW, Body |
| 0xF6 | Ausgehender Traffic von: BR_1, BR_2, BR_4, BR_5, ZGW, Body |
| 0xF7 | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_4, BR_5, ZGW, Body |
| 0xF8 | Ausgehender Traffic von: BR_3, BR_4, BR_5, ZGW, Body |
| 0xF9 | Ausgehender Traffic von: BR_0, BR_3, BR_4, BR_5, ZGW, Body |
| 0xFA | Ausgehender Traffic von: BR_1, BR_3, BR_4, BR_5, ZGW, Body |
| 0xFB | Ausgehender Traffic von: BR_0, BR_1, BR_3, BR_4, BR_5, ZGW, Body |
| 0xFC | Ausgehender Traffic von: BR_2, BR_3, BR_4, BR_5, ZGW, Body |
| 0xFD | Ausgehender Traffic von: BR_0, BR_2, BR_3, BR_4, BR_5, ZGW, Body |
| 0xFE | Ausgehender Traffic von: BR_1, BR_2, BR_3, BR_4, BR_5, ZGW, Body |
| 0xFF | Ausgehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4, BR_5, ZGW, Body |

### TAB_CDC_JOB_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Job installiert |
| 0x01 | Job aktiv |
| 0x02 | Job gelöscht |
| 0xFF | Wert ungültig |

### TAB_EINGANGS_PORT_MASKE

| WERT | TEXT |
| --- | --- |
| 0x00 | kein eingehender Traffic gespiegelt |
| 0x01 | Eingehender Traffic von: BR_0,  |
| 0x02 | Eingehender Traffic von: BR_1,  |
| 0x03 | Eingehender Traffic von: BR_0, BR_1,  |
| 0x04 | Eingehender Traffic von: BR_2,  |
| 0x05 | Eingehender Traffic von: BR_0, BR_2,  |
| 0x06 | Eingehender Traffic von: BR_1, BR_2,  |
| 0x07 | Eingehender Traffic von: BR_0, BR_1, BR_2,  |
| 0x08 | Eingehender Traffic von: BR_3,  |
| 0x09 | Eingehender Traffic von: BR_0, BR_3,  |
| 0x0A | Eingehender Traffic von: BR_1, BR_3,  |
| 0x0B | Eingehender Traffic von: BR_0, BR_1, BR_3,  |
| 0x0C | Eingehender Traffic von: BR_2, BR_3,  |
| 0x0D | Eingehender Traffic von: BR_0, BR_2, BR_3,  |
| 0x0E | Eingehender Traffic von: BR_1, BR_2, BR_3,  |
| 0x0F | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3,  |
| 0x10 | Eingehender Traffic von: BR_4,  |
| 0x11 | Eingehender Traffic von: BR_0, BR_4,  |
| 0x12 | Eingehender Traffic von: BR_1, BR_4,  |
| 0x13 | Eingehender Traffic von: BR_0, BR_1, BR_4,  |
| 0x14 | Eingehender Traffic von: BR_2, BR_4,  |
| 0x15 | Eingehender Traffic von: BR_0, BR_2, BR_4,  |
| 0x16 | Eingehender Traffic von: BR_1, BR_2, BR_4,  |
| 0x17 | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_4,  |
| 0x18 | Eingehender Traffic von: BR_3, BR_4,  |
| 0x19 | Eingehender Traffic von: BR_0, BR_3, BR_4,  |
| 0x1A | Eingehender Traffic von: BR_1, BR_3, BR_4,  |
| 0x1B | Eingehender Traffic von: BR_0, BR_1, BR_3, BR_4,  |
| 0x1C | Eingehender Traffic von: BR_2, BR_3, BR_4,  |
| 0x1D | Eingehender Traffic von: BR_0, BR_2, BR_3, BR_4,  |
| 0x1E | Eingehender Traffic von: BR_1, BR_2, BR_3, BR_4,  |
| 0x1F | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4,  |
| 0x20 | Eingehender Traffic von: BR_5,  |
| 0x21 | Eingehender Traffic von: BR_0, BR_5,  |
| 0x22 | Eingehender Traffic von: BR_1, BR_5,  |
| 0x23 | Eingehender Traffic von: BR_0, BR_1, BR_5,  |
| 0x24 | Eingehender Traffic von: BR_2, BR_5,  |
| 0x25 | Eingehender Traffic von: BR_0, BR_2, BR_5,  |
| 0x26 | Eingehender Traffic von: BR_1, BR_2, BR_5,  |
| 0x27 | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_5,  |
| 0x28 | Eingehender Traffic von: BR_3, BR_5,  |
| 0x29 | Eingehender Traffic von: BR_0, BR_3, BR_5,  |
| 0x2A | Eingehender Traffic von: BR_1, BR_3, BR_5,  |
| 0x2B | Eingehender Traffic von: BR_0, BR_1, BR_3, BR_5,  |
| 0x2C | Eingehender Traffic von: BR_2, BR_3, BR_5,  |
| 0x2D | Eingehender Traffic von: BR_0, BR_2, BR_3, BR_5,  |
| 0x2E | Eingehender Traffic von: BR_1, BR_2, BR_3, BR_5,  |
| 0x2F | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_5,  |
| 0x30 | Eingehender Traffic von: BR_4, BR_5,  |
| 0x31 | Eingehender Traffic von: BR_0, BR_4, BR_5,  |
| 0x32 | Eingehender Traffic von: BR_1, BR_4, BR_5,  |
| 0x33 | Eingehender Traffic von: BR_0, BR_1, BR_4, BR_5,  |
| 0x34 | Eingehender Traffic von: BR_2, BR_4, BR_5,  |
| 0x35 | Eingehender Traffic von: BR_0, BR_2, BR_4, BR_5,  |
| 0x36 | Eingehender Traffic von: BR_1, BR_2, BR_4, BR_5,  |
| 0x37 | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_4, BR_5,  |
| 0x38 | Eingehender Traffic von: BR_3, BR_4, BR_5,  |
| 0x39 | Eingehender Traffic von: BR_0, BR_3, BR_4, BR_5,  |
| 0x3A | Eingehender Traffic von: BR_1, BR_3, BR_4, BR_5,  |
| 0x3B | Eingehender Traffic von: BR_0, BR_1, BR_3, BR_4, BR_5,  |
| 0x3C | Eingehender Traffic von: BR_2, BR_3, BR_4, BR_5,  |
| 0x3D | Eingehender Traffic von: BR_0, BR_2, BR_3, BR_4, BR_5,  |
| 0x3E | Eingehender Traffic von: BR_1, BR_2, BR_3, BR_4, BR_5,  |
| 0x3F | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4, BR_5,  |
| 0x40 | Eingehender Traffic von: ZGW,  |
| 0x41 | Eingehender Traffic von: BR_0, ZGW,  |
| 0x42 | Eingehender Traffic von: BR_1, ZGW,  |
| 0x43 | Eingehender Traffic von: BR_0, BR_1, ZGW,  |
| 0x44 | Eingehender Traffic von: BR_2, ZGW,  |
| 0x45 | Eingehender Traffic von: BR_0, BR_2, ZGW,  |
| 0x46 | Eingehender Traffic von: BR_1, BR_2, ZGW,  |
| 0x47 | Eingehender Traffic von: BR_0, BR_1, BR_2, ZGW,  |
| 0x48 | Eingehender Traffic von: BR_3, ZGW,  |
| 0x49 | Eingehender Traffic von: BR_0, BR_3, ZGW,  |
| 0x4A | Eingehender Traffic von: BR_1, BR_3, ZGW,  |
| 0x4B | Eingehender Traffic von: BR_0, BR_1, BR_3, ZGW,  |
| 0x4C | Eingehender Traffic von: BR_2, BR_3, ZGW,  |
| 0x4D | Eingehender Traffic von: BR_0, BR_2, BR_3, ZGW,  |
| 0x4E | Eingehender Traffic von: BR_1, BR_2, BR_3, ZGW,  |
| 0x4F | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, ZGW,  |
| 0x50 | Eingehender Traffic von: BR_4, ZGW,  |
| 0x51 | Eingehender Traffic von: BR_0, BR_4, ZGW,  |
| 0x52 | Eingehender Traffic von: BR_1, BR_4, ZGW,  |
| 0x53 | Eingehender Traffic von: BR_0, BR_1, BR_4, ZGW,  |
| 0x54 | Eingehender Traffic von: BR_2, BR_4, ZGW,  |
| 0x55 | Eingehender Traffic von: BR_0, BR_2, BR_4, ZGW,  |
| 0x56 | Eingehender Traffic von: BR_1, BR_2, BR_4, ZGW,  |
| 0x57 | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_4, ZGW,  |
| 0x58 | Eingehender Traffic von: BR_3, BR_4, ZGW,  |
| 0x59 | Eingehender Traffic von: BR_0, BR_3, BR_4, ZGW,  |
| 0x5A | Eingehender Traffic von: BR_1, BR_3, BR_4, ZGW,  |
| 0x5B | Eingehender Traffic von: BR_0, BR_1, BR_3, BR_4, ZGW,  |
| 0x5C | Eingehender Traffic von: BR_2, BR_3, BR_4, ZGW,  |
| 0x5D | Eingehender Traffic von: BR_0, BR_2, BR_3, BR_4, ZGW,  |
| 0x5E | Eingehender Traffic von: BR_1, BR_2, BR_3, BR_4, ZGW,  |
| 0x5F | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4, ZGW,  |
| 0x60 | Eingehender Traffic von: BR_5, ZGW,  |
| 0x61 | Eingehender Traffic von: BR_0, BR_5, ZGW,  |
| 0x62 | Eingehender Traffic von: BR_1, BR_5, ZGW,  |
| 0x63 | Eingehender Traffic von: BR_0, BR_1, BR_5, ZGW,  |
| 0x64 | Eingehender Traffic von: BR_2, BR_5, ZGW,  |
| 0x65 | Eingehender Traffic von: BR_0, BR_2, BR_5, ZGW,  |
| 0x66 | Eingehender Traffic von: BR_1, BR_2, BR_5, ZGW,  |
| 0x67 | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_5, ZGW,  |
| 0x68 | Eingehender Traffic von: BR_3, BR_5, ZGW,  |
| 0x69 | Eingehender Traffic von: BR_0, BR_3, BR_5, ZGW,  |
| 0x6A | Eingehender Traffic von: BR_1, BR_3, BR_5, ZGW,  |
| 0x6B | Eingehender Traffic von: BR_0, BR_1, BR_3, BR_5, ZGW,  |
| 0x6C | Eingehender Traffic von: BR_2, BR_3, BR_5, ZGW,  |
| 0x6D | Eingehender Traffic von: BR_0, BR_2, BR_3, BR_5, ZGW,  |
| 0x6E | Eingehender Traffic von: BR_1, BR_2, BR_3, BR_5, ZGW,  |
| 0x6F | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_5, ZGW,  |
| 0x70 | Eingehender Traffic von: BR_4, BR_5, ZGW,  |
| 0x71 | Eingehender Traffic von: BR_0, BR_4, BR_5, ZGW,  |
| 0x72 | Eingehender Traffic von: BR_1, BR_4, BR_5, ZGW,  |
| 0x73 | Eingehender Traffic von: BR_0, BR_1, BR_4, BR_5, ZGW,  |
| 0x74 | Eingehender Traffic von: BR_2, BR_4, BR_5, ZGW,  |
| 0x75 | Eingehender Traffic von: BR_0, BR_2, BR_4, BR_5, ZGW,  |
| 0x76 | Eingehender Traffic von: BR_1, BR_2, BR_4, BR_5, ZGW,  |
| 0x77 | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_4, BR_5, ZGW,  |
| 0x78 | Eingehender Traffic von: BR_3, BR_4, BR_5, ZGW,  |
| 0x79 | Eingehender Traffic von: BR_0, BR_3, BR_4, BR_5, ZGW,  |
| 0x7A | Eingehender Traffic von: BR_1, BR_3, BR_4, BR_5, ZGW,  |
| 0x7B | Eingehender Traffic von: BR_0, BR_1, BR_3, BR_4, BR_5, ZGW,  |
| 0x7C | Eingehender Traffic von: BR_2, BR_3, BR_4, BR_5, ZGW,  |
| 0x7D | Eingehender Traffic von: BR_0, BR_2, BR_3, BR_4, BR_5, ZGW,  |
| 0x7E | Eingehender Traffic von: BR_1, BR_2, BR_3, BR_4, BR_5, ZGW,  |
| 0x7F | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4, BR_5, ZGW,  |
| 0x80 | Eingehender Traffic von: Body |
| 0x81 | Eingehender Traffic von: BR_0, Body |
| 0x82 | Eingehender Traffic von: BR_1, Body |
| 0x83 | Eingehender Traffic von: BR_0, BR_1, Body |
| 0x84 | Eingehender Traffic von: BR_2, Body |
| 0x85 | Eingehender Traffic von: BR_0, BR_2, Body |
| 0x86 | Eingehender Traffic von: BR_1, BR_2, Body |
| 0x87 | Eingehender Traffic von: BR_0, BR_1, BR_2, Body |
| 0x88 | Eingehender Traffic von: BR_3, Body |
| 0x89 | Eingehender Traffic von: BR_0, BR_3, Body |
| 0x8A | Eingehender Traffic von: BR_1, BR_3, Body |
| 0x8B | Eingehender Traffic von: BR_0, BR_1, BR_3, Body |
| 0x8C | Eingehender Traffic von: BR_2, BR_3, Body |
| 0x8D | Eingehender Traffic von: BR_0, BR_2, BR_3, Body |
| 0x8E | Eingehender Traffic von: BR_1, BR_2, BR_3, Body |
| 0x8F | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, Body |
| 0x90 | Eingehender Traffic von: BR_4, Body |
| 0x91 | Eingehender Traffic von: BR_0, BR_4, Body |
| 0x92 | Eingehender Traffic von: BR_1, BR_4, Body |
| 0x93 | Eingehender Traffic von: BR_0, BR_1, BR_4, Body |
| 0x94 | Eingehender Traffic von: BR_2, BR_4, Body |
| 0x95 | Eingehender Traffic von: BR_0, BR_2, BR_4, Body |
| 0x96 | Eingehender Traffic von: BR_1, BR_2, BR_4, Body |
| 0x97 | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_4, Body |
| 0x98 | Eingehender Traffic von: BR_3, BR_4, Body |
| 0x99 | Eingehender Traffic von: BR_0, BR_3, BR_4, Body |
| 0x9A | Eingehender Traffic von: BR_1, BR_3, BR_4, Body |
| 0x9B | Eingehender Traffic von: BR_0, BR_1, BR_3, BR_4, Body |
| 0x9C | Eingehender Traffic von: BR_2, BR_3, BR_4, Body |
| 0x9D | Eingehender Traffic von: BR_0, BR_2, BR_3, BR_4, Body |
| 0x9E | Eingehender Traffic von: BR_1, BR_2, BR_3, BR_4, Body |
| 0x9F | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4, Body |
| 0xA0 | Eingehender Traffic von: BR_5, Body |
| 0xA1 | Eingehender Traffic von: BR_0, BR_5, Body |
| 0xA2 | Eingehender Traffic von: BR_1, BR_5, Body |
| 0xA3 | Eingehender Traffic von: BR_0, BR_1, BR_5, Body |
| 0xA4 | Eingehender Traffic von: BR_2, BR_5, Body |
| 0xA5 | Eingehender Traffic von: BR_0, BR_2, BR_5, Body |
| 0xA6 | Eingehender Traffic von: BR_1, BR_2, BR_5, Body |
| 0xA7 | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_5, Body |
| 0xA8 | Eingehender Traffic von: BR_3, BR_5, Body |
| 0xA9 | Eingehender Traffic von: BR_0, BR_3, BR_5, Body |
| 0xAA | Eingehender Traffic von: BR_1, BR_3, BR_5, Body |
| 0xAB | Eingehender Traffic von: BR_0, BR_1, BR_3, BR_5, Body |
| 0xAC | Eingehender Traffic von: BR_2, BR_3, BR_5, Body |
| 0xAD | Eingehender Traffic von: BR_0, BR_2, BR_3, BR_5, Body |
| 0xAE | Eingehender Traffic von: BR_1, BR_2, BR_3, BR_5, Body |
| 0xAF | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_5, Body |
| 0xB0 | Eingehender Traffic von: BR_4, BR_5, Body |
| 0xB1 | Eingehender Traffic von: BR_0, BR_4, BR_5, Body |
| 0xB2 | Eingehender Traffic von: BR_1, BR_4, BR_5, Body |
| 0xB3 | Eingehender Traffic von: BR_0, BR_1, BR_4, BR_5, Body |
| 0xB4 | Eingehender Traffic von: BR_2, BR_4, BR_5, Body |
| 0xB5 | Eingehender Traffic von: BR_0, BR_2, BR_4, BR_5, Body |
| 0xB6 | Eingehender Traffic von: BR_1, BR_2, BR_4, BR_5, Body |
| 0xB7 | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_4, BR_5, Body |
| 0xB8 | Eingehender Traffic von: BR_3, BR_4, BR_5, Body |
| 0xB9 | Eingehender Traffic von: BR_0, BR_3, BR_4, BR_5, Body |
| 0xBA | Eingehender Traffic von: BR_1, BR_3, BR_4, BR_5, Body |
| 0xBB | Eingehender Traffic von: BR_0, BR_1, BR_3, BR_4, BR_5, Body |
| 0xBC | Eingehender Traffic von: BR_2, BR_3, BR_4, BR_5, Body |
| 0xBD | Eingehender Traffic von: BR_0, BR_2, BR_3, BR_4, BR_5, Body |
| 0xBE | Eingehender Traffic von: BR_1, BR_2, BR_3, BR_4, BR_5, Body |
| 0xBF | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4, BR_5, Body |
| 0xC0 | Eingehender Traffic von: ZGW, Body |
| 0xC1 | Eingehender Traffic von: BR_0, ZGW, Body |
| 0xC2 | Eingehender Traffic von: BR_1, ZGW, Body |
| 0xC3 | Eingehender Traffic von: BR_0, BR_1, ZGW, Body |
| 0xC4 | Eingehender Traffic von: BR_2, ZGW, Body |
| 0xC5 | Eingehender Traffic von: BR_0, BR_2, ZGW, Body |
| 0xC6 | Eingehender Traffic von: BR_1, BR_2, ZGW, Body |
| 0xC7 | Eingehender Traffic von: BR_0, BR_1, BR_2, ZGW, Body |
| 0xC8 | Eingehender Traffic von: BR_3, ZGW, Body |
| 0xC9 | Eingehender Traffic von: BR_0, BR_3, ZGW, Body |
| 0xCA | Eingehender Traffic von: BR_1, BR_3, ZGW, Body |
| 0xCB | Eingehender Traffic von: BR_0, BR_1, BR_3, ZGW, Body |
| 0xCC | Eingehender Traffic von: BR_2, BR_3, ZGW, Body |
| 0xCD | Eingehender Traffic von: BR_0, BR_2, BR_3, ZGW, Body |
| 0xCE | Eingehender Traffic von: BR_1, BR_2, BR_3, ZGW, Body |
| 0xCF | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, ZGW, Body |
| 0xD0 | Eingehender Traffic von: BR_4, ZGW, Body |
| 0xD1 | Eingehender Traffic von: BR_0, BR_4, ZGW, Body |
| 0xD2 | Eingehender Traffic von: BR_1, BR_4, ZGW, Body |
| 0xD3 | Eingehender Traffic von: BR_0, BR_1, BR_4, ZGW, Body |
| 0xD4 | Eingehender Traffic von: BR_2, BR_4, ZGW, Body |
| 0xD5 | Eingehender Traffic von: BR_0, BR_2, BR_4, ZGW, Body |
| 0xD6 | Eingehender Traffic von: BR_1, BR_2, BR_4, ZGW, Body |
| 0xD7 | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_4, ZGW, Body |
| 0xD8 | Eingehender Traffic von: BR_3, BR_4, ZGW, Body |
| 0xD9 | Eingehender Traffic von: BR_0, BR_3, BR_4, ZGW, Body |
| 0xDA | Eingehender Traffic von: BR_1, BR_3, BR_4, ZGW, Body |
| 0xDB | Eingehender Traffic von: BR_0, BR_1, BR_3, BR_4, ZGW, Body |
| 0xDC | Eingehender Traffic von: BR_2, BR_3, BR_4, ZGW, Body |
| 0xDD | Eingehender Traffic von: BR_0, BR_2, BR_3, BR_4, ZGW, Body |
| 0xDE | Eingehender Traffic von: BR_1, BR_2, BR_3, BR_4, ZGW, Body |
| 0xDF | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4, ZGW, Body |
| 0xE0 | Eingehender Traffic von: BR_5, ZGW, Body |
| 0xE1 | Eingehender Traffic von: BR_0, BR_5, ZGW, Body |
| 0xE2 | Eingehender Traffic von: BR_1, BR_5, ZGW, Body |
| 0xE3 | Eingehender Traffic von: BR_0, BR_1, BR_5, ZGW, Body |
| 0xE4 | Eingehender Traffic von: BR_2, BR_5, ZGW, Body |
| 0xE5 | Eingehender Traffic von: BR_0, BR_2, BR_5, ZGW, Body |
| 0xE6 | Eingehender Traffic von: BR_1, BR_2, BR_5, ZGW, Body |
| 0xE7 | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_5, ZGW, Body |
| 0xE8 | Eingehender Traffic von: BR_3, BR_5, ZGW, Body |
| 0xE9 | Eingehender Traffic von: BR_0, BR_3, BR_5, ZGW, Body |
| 0xEA | Eingehender Traffic von: BR_1, BR_3, BR_5, ZGW, Body |
| 0xEB | Eingehender Traffic von: BR_0, BR_1, BR_3, BR_5, ZGW, Body |
| 0xEC | Eingehender Traffic von: BR_2, BR_3, BR_5, ZGW, Body |
| 0xED | Eingehender Traffic von: BR_0, BR_2, BR_3, BR_5, ZGW, Body |
| 0xEE | Eingehender Traffic von: BR_1, BR_2, BR_3, BR_5, ZGW, Body |
| 0xEF | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_5, ZGW, Body |
| 0xF0 | Eingehender Traffic von: BR_4, BR_5, ZGW, Body |
| 0xF1 | Eingehender Traffic von: BR_0, BR_4, BR_5, ZGW, Body |
| 0xF2 | Eingehender Traffic von: BR_1, BR_4, BR_5, ZGW, Body |
| 0xF3 | Eingehender Traffic von: BR_0, BR_1, BR_4, BR_5, ZGW, Body |
| 0xF4 | Eingehender Traffic von: BR_2, BR_4, BR_5, ZGW, Body |
| 0xF5 | Eingehender Traffic von: BR_0, BR_2, BR_4, BR_5, ZGW, Body |
| 0xF6 | Eingehender Traffic von: BR_1, BR_2, BR_4, BR_5, ZGW, Body |
| 0xF7 | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_4, BR_5, ZGW, Body |
| 0xF8 | Eingehender Traffic von: BR_3, BR_4, BR_5, ZGW, Body |
| 0xF9 | Eingehender Traffic von: BR_0, BR_3, BR_4, BR_5, ZGW, Body |
| 0xFA | Eingehender Traffic von: BR_1, BR_3, BR_4, BR_5, ZGW, Body |
| 0xFB | Eingehender Traffic von: BR_0, BR_1, BR_3, BR_4, BR_5, ZGW, Body |
| 0xFC | Eingehender Traffic von: BR_2, BR_3, BR_4, BR_5, ZGW, Body |
| 0xFD | Eingehender Traffic von: BR_0, BR_2, BR_3, BR_4, BR_5, ZGW, Body |
| 0xFE | Eingehender Traffic von: BR_1, BR_2, BR_3, BR_4, BR_5, ZGW, Body |
| 0xFF | Eingehender Traffic von: BR_0, BR_1, BR_2, BR_3, BR_4, BR_5, ZGW, Body |

### TAB_EIN_AUS_1BIT

| WERT | TEXT |
| --- | --- |
| 0x0 | ein |
| 0x1 | aus |

### TAB_ERGEBNIS_WHITELIST_UPDATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Whitelist Update erfolgreich |
| 0x10 | Prüfung Secure Token fehlgeschlagen |
| 0x20 | Prüfung Whitelist Signatur fehlgeschlagen |
| 0xA0 | Fehler beim Schreiben der Whitelist in den Speicher |
| 0xFF | undefinierter Fehler |

### TAB_LIN_BUSINDEX

| WERT | TEXT |
| --- | --- |
| 0 | K_LIN_1 |
| 1 | K_LIN_6 |
| 2 | K_LIN_8 |
| 3 | K_LIN_15 |
| 4 | K_LIN_16 |
| 5 | K_LIN_21 |
| 6 | K_LIN_22 |
| 7 | EB_LIN_1 |
| 8 | FI_LIN_1 |
| 9 | FI_LIN_2 |
| 10 | FAT_LIN_1 |
| 11 | FATH_LIN |
| 12 | BFT_LIN_1 |
| 13 | BFTH_LIN |
| 14 | SV_LIN |
| 15 | Debug_LIN |

### TAB_MIRROR_MODE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Mirroring deaktiviert |
| 0x01 | Mirroring aktiviert |
| 0xFF | Wert ungültig |

### TAB_OBD_FW_PWF_STATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | Parken_BN_niO |
| 0x02 | Parken_BN_iO |
| 0x03 | Standfunktionen |
| 0x05 | Wohnen |
| 0x07 | Pruefen_Analyse_Diagnose |
| 0x08 | Fahrbereitschaft_herstellen |
| 0x0A | Fahren |
| 0x0C | Fahrbereitschaft_beenden |
| 0xFF | Wert ungültig |

### TAB_SUBNETID

| WERT | TEXT |
| --- | --- |
| 0 | Konfiguration |
| 1 | Ethernet_Infrastruktur |
| 2 | Datenkommunikation |
| 8 | Klimabetrieb |
| 9 | Entertainmentbetrieb |
| 10 | Externe_Kommunikation |
| 11 | Entertainmentbetrieb_Fond |
| 12 | Assistenz_Parken_High |
| 15 | Laden |
| 16 | Fahrzeug_Infrastruktur |
| 19 | Licht |
| 20 | TN_48V |
| 0xFF | undefiniert |

### TAB_SUPPLIERINFO_FIELD

| WERT | TEXT |
| --- | --- |
| 0x00 | Wert 0 |
| 0x1 | Wert 1 |
| 0x2 | Wert 2 |
| 0x3 | Wert 3 |
| 0x4 | Wert 4 |
| 0x5 | Wert 5 |
| 0x6 | Wert 6 |
| 0x7 | Wert 7 |
| 0x8 | Wert 8 |
| 0x9 | Wert 9 |
| 0xA | Wert 10 |
| 0xB | Wert 11 |
| 0xC | Wert 12 |
| 0xD | Wert 13 |
| 0xE | Wert 14 |
| 0xF | Wert 15 |
| 0x10 | Wert 16 |
| 0x11 | Wert 17 |
| 0x12 | Wert 18 |
| 0x13 | Wert 19 |
| 0x14 | Wert 20 |
| 0x15 | Wert 21 |
| 0x16 | Wert 22 |
| 0x17 | Wert 23 |
| 0x18 | Wert 24 |
| 0x19 | Wert 25 |
| 0x1A | Wert 26 |
| 0x1B | Wert 27 |
| 0x1C | Wert 28 |
| 0x1D | Wert 29 |
| 0x1E | Wert 30 |
| 0x1F | Wert 31 |
| 0x20 | Wert 32 |
| 0x21 | Wert 33 |
| 0x22 | Wert 34 |
| 0x23 | Wert 35 |
| 0x24 | Wert 36 |
| 0x25 | Wert 37 |
| 0x26 | Wert 38 |
| 0x27 | Wert 39 |
| 0x28 | Wert 40 |
| 0x29 | Wert 41 |
| 0x2A | Wert 42 |
| 0x2B | Wert 43 |
| 0x2C | Wert 44 |
| 0x2D | Wert 45 |
| 0x2E | Wert 46 |
| 0x2F | Wert 47 |
| 0x30 | Wert 48 |
| 0x31 | Wert 49 |
| 0x32 | Wert 50 |
| 0x33 | Wert 51 |
| 0x34 | Wert 52 |
| 0x35 | Wert 53 |
| 0x36 | Wert 54 |
| 0x37 | Wert 55 |
| 0x38 | Wert 56 |
| 0x39 | Wert 57 |
| 0x3A | Wert 58 |
| 0x3B | Wert 59 |
| 0x3C | Wert 60 |
| 0x3D | Wert 61 |
| 0x3E | Wert 62 |
| 0xFF | Wert ungültig |

### TAB_WAKEUP_SOURCE

| WERT | TEXT |
| --- | --- |
| 0x01 | Weckursache MOST |
| 0x02 | Weckursache I_CAN |
| 0x04 | Weckursache FA_CAN |
| 0x08 | Weckursache BODY_CAN |
| 0x10 | Weckursache D_CAN |
| 0x20 | Weckursache WECKLEITUNG |
| 0x40 | Weckursache ETHERNET_AKTIVIERUNGSLEITUNG |
| 0x80 | Weckursache FIRST_SWITCH_TO_POWER |
| 0xFF | Weckursache ungültig |

### TAB_ZIEL_PORT

| WERT | TEXT |
| --- | --- |
| 0x00 | BR_0 |
| 0x01 | BR_1 |
| 0x02 | BR_2 |
| 0x03 | BR_3 |
| 0x04 | BR_4 |
| 0x05 | BR_5 |
| 0xFF | Wert ungültig |

### TAS_STEUERN_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Alle TAS-Aufträge werden abgewiesen mit NRC 0x22, bis zum nächsten Aufstarten |
| 0x01 | TAS Betrieb ohne Einschränkung (Default nach Programmierung, im Anlieferzustand) |
| 0x02 | Alle TAS-Aufträge werden abgewiesen mit NRC 0x22, über Aufstart hinaus. |
| 0x03 | Interne TAS-Aufträge werden abgewiesen mit NRC 0x22, bis zum nächsten Aufstarten |
| 0x04 | Interne TAS-Aufträge werden abgewiesen mit NRC 0x22, über Aufstart hinaus |
| 0xFF | Wert ungültig |

### TABSTATUSMASTERVIN

| WERT | TEXT |
| --- | --- |
| 0x01 | ZGW-VIN erfolgreich mit MasterVIN aktualisiert |
| 0x02 | MasterVIN nicht von VIN-Master-SG (CAS) erhalten, ZGW-VIN bleibt auf ursprünglichem Wert |
| 0x03 | MasterVIN nicht von VIN-Master-SG (CAS) erhalten, ZGW-VIN ist nicht initialisiert |
| 0xFF | allgemeine Fehler |

### TAB_0X1752

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 |

### TAB_0X1754

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0031 | 0x0032 | 0x0033 | 0x0034 | 0x0035 | 0x0036 | 0x0037 | 0x0038 |

### TAB_0X175A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 |

### TAB_0X175B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 |

### UNEXPECTED_LINK_UP_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0 | für unbelegte Ports kein Link-up festgestellt bzw. Link auf Port zulässig |
| 1 | Link-up auf eigentlich unbelegtem Port festgestellt |

### TABDMFSSPERRESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Fehlerspeicherfreigabe |
| 0x01 | Fehlerspeichersperre |
| 0x02 | Reserve |
| 0x03 | Signal ungültig |
| 0x04 | Nachricht 0x3A0 stumm |
| 0xFF | ungueltig |

### TABDMFSBETRIEBSARTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Freilaufend |
| 0x01 | Fest wie mittels Routine vorgegeben |
| 0x02 | keine Angabe möglich |
| 0xFF | ungueltig |

### TABDIAGADRESSEN

| WERT | TEXT |
| --- | --- |
| 0x00 | JBBF |
| 0x01 | ACSM |
| 0x02 | Batt48 |
| 0x03 | SVT/TPA |
| 0x04 | emARS_h |
| 0x05 | CDM |
| 0x06 | iCAM2/_RFK |
| 0x07 | HVS |
| 0x08 | SRR_HR |
| 0x09 | RDME |
| 0x0A | REME |
| 0x0B | AGN/SCR |
| 0x0D | HKFM |
| 0x0E | SVT/CDC |
| 0x0F | GSD |
| 0x10 | ZGW |
| 0x11 | ENS |
| 0x12 | DME1 |
| 0x13 | DME2 |
| 0x14 | TEE1 |
| 0x15 | UCX |
| 0x16 | ASA |
| 0x17 | RLM_1_L |
| 0x18 | EGS_EL/EGSL_HY |
| 0x19 | LMV |
| 0x1A | RLM_1_R |
| 0x1B | CPM |
| 0x1C | RLM_2_L |
| 0x1D | TFMA-01/IFM |
| 0x1E | RLM_2_R |
| 0x20 | SRR_VR |
| 0x21 | FRR |
| 0x22 | VDC0 |
| 0x23 | SAS2018 |
| 0x24 | CVM |
| 0x25 | emARS_v |
| 0x26 | RSE |
| 0x27 | CGW |
| 0x28 | SRR_VL |
| 0x29 | DSC |
| 0x2A | SRR_HL |
| 0x2B | HSR |
| 0x2C | USS |
| 0x2D | VSG |
| 0x2E | PCU |
| 0x30 | EPS |
| 0x31 | MMC |
| 0x32 | CSM |
| 0x33 | OBD_Funktional |
| 0x34 | ZINS |
| 0x35 | TBX |
| 0x36 | TEL_MULF |
| 0x37 | AMP/RAM |
| 0x38 | CHC |
| 0x39 | IB-CT03 |
| 0x3A | EME/CCU |
| 0x3B | Navi |
| 0x3C | CDC |
| 0x3D | HUD |
| 0x3E | ACP |
| 0x3F | ASD |
| 0x40 | BDC |
| 0x41 | HRR |
| 0x42 | TMS_R |
| 0x43 | LHM_L/FLM_L |
| 0x44 | LHM_R/FLM_R |
| 0x45 | DCS |
| 0x46 | GZA_L |
| 0x47 | GZA_R |
| 0x48 | VSW |
| 0x49 | SEC1 |
| 0x4A | SEC2 |
| 0x4B | TVM |
| 0x4D | EMA_LI |
| 0x4E | EMA_RE |
| 0x4F | LEM |
| 0x50 | CAN-SINE |
| 0x53 | SPnM_Master |
| 0x54 | PCU48 |
| 0x55 | DKG48/EGS48 |
| 0x56 | FZD |
| 0x57 | NiVi |
| 0x58 | SNG |
| 0x59 | SPnM_VR |
| 0x5A | SPnM_HL |
| 0x5B | SPnM_HR |
| 0x5D | KAFAS |
| 0x5E | GWS |
| 0x5F | FLA |
| 0x60 | KOMBI |
| 0x61 | TPL/ATM |
| 0x62 | CIC |
| 0x63 | HU |
| 0x64 | PDC in JBBF |
| 0x65 | ELV |
| 0x66 | CoolShield |
| 0x67 | ZBE |
| 0x68 | ZBE Fond |
| 0x69 | SM_FAH |
| 0x6A | SM_BFH |
| 0x6B | HKL |
| 0x6D | SM_FA |
| 0x6E | SM_BF |
| 0x6F | TEE2 |
| 0x71 | AAG |
| 0x72 | SA_TSG_FA |
| 0x73 | CID |
| 0x74 | SA_TSG_BF |
| 0x75 | SA_TSG_FAH |
| 0x76 | VDP |
| 0x77 | SA_TSG_BFH |
| 0x78 | IHx |
| 0x79 | FKA |
| 0x7A | AFP |
| 0x7B | HKA |
| 0x7D | BACE |
| 0x7E | BACC |
| 0x7F | BACF |
| 0x86 | KOMBI |
| 0x8C | FBD4 |
| 0x8D | NFC |
| 0x8E | WCA |
| 0x8F | BE_MIKO |
| 0xA0 | CIC_HDD |
| 0xA3 | EARS_H |
| 0xA4 | EARS_V |
| 0xA5 | RK_VL |
| 0xA6 | RK_VR |
| 0xA7 | RK_HL |
| 0xA8 | RK_HR |
| 0xA9 | CDCDSP |
| 0xAB | MMC |
| 0xDF | Funktional UDS |
| 0xE5 | Funktional Fzg. Security KWP |
| 0xE6 | Funktional VD-FlexRay KWP |
| 0xE7 | Funktional SWT KWP |
| 0xE8 | Funktional LIN-Master KWP |
| 0xE9 | Funktional K-CAN KWP |
| 0xEA | Funktional PT-CAN KWP |
| 0xEB | Funktional SI KWP |
| 0xEC | Funktional MOST KWP |
| 0xED | Funktional BOS KWP |
| 0xEE | Funktional Personal KWP |
| 0xEF | Funktional KWP |
| 0xF0 | TAS |
| 0xF1 | D-CAN Tester |
| 0xF2 | Teletester |
| 0xF3 | Sek. Teletester |
| 0xF4 | Ethernet Tester |
| 0xF5 | OBD Tester auf Ethernet |
| 0xF9 | Diagnosetool FlexRay |
| 0xFA | Diagnosetool MOST |
| 0xFB | Diagnosetool FA-CAN |
| 0xFC | Diagnosetool K-CAN/IuK-CAN |
| 0xFD | Diagnosetool B-CAN |
| 0xFF | SG unbekannt |

### TABZFSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | ZFS Ringspeicher noch nicht im Überschreibmodus |
| 0x01 | ZFS Ringspeicher bereits im Überschreibmodus |
| 0xFF | ZFS Ringspeicher noch nicht im Überschreibmodus |

### TABROEINITFEHLER

| PROBLEMBYTE | PROBLEMBYTETEXT |
| --- | --- |
| 0x00 | SG hat nicht geantwortet |
| 0x01 | SG hat geantwortet, aber mit negative response |
| 0x02 | SG hat mit positive response geantwortet, obwohl es nicht in VCM-Liste steht |
| 0x03 | SG hat mit negative response geantwortet, obwohl es nicht in VCM-Liste steht |
| 0x04 | SG hat mit nicht interpretierbarer response geantwortet |
| 0x05 | SG hat mit nicht interpretierbarer response geantwortet, obwohl es nicht in VCM-Liste steht |
