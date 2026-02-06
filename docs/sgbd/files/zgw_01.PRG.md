# zgw_01.PRG

## General

|  |  |
| --- | --- |
| File | zgw_01.PRG |
| Type | PRG |
| Jobs | 173 |
| Tables | 97 |
| Origin | BMW EI-73 Thomas_Koenigseder |
| Revision | 19.000 |
| Author | BMW EI-73 Koenigseder_Thomas(tK), BMW_CarIT JC Neff_Albrecht(aN |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ZGW |  |  |
| ORIGIN | string | BMW EI-73 Thomas_Koenigseder |  |  |
| REVISION | string | 19.000 |  |  |
| AUTHOR | string | BMW EI-73 Koenigseder_Thomas(tK), BMW_CarIT JC Neff_Albrecht(aN |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.60 |  |  |
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

### FS_SPERREN

Sperren bzw. Freigeben des Fehlerspeichers UDS  : $85 ControlDTCSetting UDS  : $?? Sperren ($02) / Freigabe ($01) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SPERREN | string | "ja"   -> Fehlerspeicher sperren "nein" -> Fehlerspeicher freigeben table DigitalArgument TEXT Default: "ja" |

### IS_LESEN

Sekundaerer Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $22   ReadDataByIdentifierRequestServiceID UDS  : $2000 DataIdentifier sekundaerer Fehlerspeicher Modus: Default

_No arguments._

### IS_LESEN_DETAIL

sekundären Fehlerspeicher lesen (Info-Meldungen / Ort und Art) UDS  : $22 ReadDataByIdentifier UDS  : $20 dataIdentifier UDS  : $00 alle Info-Meldungen anschließend UDS  : $20 dataIdentifier UDS  : $nn Details zur Info-Meldung an der Position n Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

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

### STATUS_BETRIEBSMODE

Aktueller Betriebsmode SG muss sich im Energiersparmode befinden UDS  : $22   ReadDataByIdentifier UDS  : $100E Sub-Parameter Betriebsmode Modus: Default

_No arguments._

### STEUERN_BETRIEBSMODE

Betriebsmode setzen SG muss sich im Energiersparmode befinden UDS  : $31   RoutineControl UDS  : $01   startRoutine UDS  : $1003 DataIdentifier Betriebsmode UDS  : $0?   Betriebsmode Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| BETRIEBSMODE | int | Betriebsmode setzen table Betriebsmode WERT 0     : Kein Betriebsmode gesetzt 1 - 16: Erweiterter Betriebsmode (Bedeutung siehe Tabelle) |

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### STATUS_VERSION_MOST_CONTROLLER

Return Version of MOST Controller

_No arguments._

### STATUS_VERSORGUNGSSPANNUNG

Betriebsspannung am SG. Darstellung mit Millivolt-Auflösung.

_No arguments._

### STATUS_WAKEUP_STATUS

Gibt an, ob das SG den MOST-Ring geweckt hat oder geweckt wurde.

_No arguments._

### STATUS_ABILITY_TO_WAKE

Gibt an ob SG Most Ring wecken darf

_No arguments._

### STATUS_AVERAGE_MESSAGE_RECEPTION_RATE

Liest die mittlere Nachrichtenabnahmerate des SGs während dieses Gerät geflasht wird, also in der ProgramminSession Auslesbar muss der Status jederzeit sein

_No arguments._

### STATUS_FOT_TEMPERATUR

Temperatur am FOT

_No arguments._

### STEUERN_SENSOR_TEMP

Simulates the temperature of a definite sensor.

| Name | Type | Description |
| --- | --- | --- |
| ARG_SENSOR | unsigned char | Sensor for which the temperature must be simulated |
| ARG_TEMPERATURE | int | Temperature that must be simulated |
| ARG_DURATION | unsigned int | Duration of the temperature simulation |

### STEUERN_WATCHDOG_TRIGGER_STOP

Unterbindet das regelmäßige Rücksetzen des Applikations-Watchdogs nach ARG_TIME_WATCHDOG Sekunden. Wenn ARG_TIME_WATCHDOG nicht angegeben wird, wird der Wert 0 benutzt.

| Name | Type | Description |
| --- | --- | --- |
| ARG_TIME_WATCHDOG | unsigned int | Beschreibung: z.B. ARG_TIME_WATCHDOG = 4 bedeutet Abschalten des Watchdog-Triggers nach 4 Sekunden. nur positiven Zahlen und die 0. Skalierung: 1 entspricht 1 Sekunde |

### STATUS_SENSOR_TEMP

Returns the temperature of the desired sensor (no matter if the temperature is currently being simulated or not).

| Name | Type | Description |
| --- | --- | --- |
| ARG_SENSOR | unsigned char | Sensor for which the temperature must be returned |

### STEUERN_ROE_STOP

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime) gültig für LH Diagnosemaster V9 oder früher. (pre 35up)

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events [$02 eventWindowTime - infinite (nur 35up)] 35up: LH Diagnosemaster V11 oder höher pre35up: LH Diagnosemaster V6 - V9

_No arguments._

### STEUERN_ROE_START

Temporaeres Aktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $05 Start $02 (EventWindowTime) gültig für LH Diagnosemaster V9 oder früher. (pre 35up)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### DIAG_SESSION_LESEN

Aktive Diagnose-Session auslesen UDS  : $22   ReadDataByIdentifier UDS  : $F186 ActiveDiagnosticSession Modus: Default

_No arguments._

### FLASH_TP_LESEN

Flash Timing Parameter auslesen UDS  : $22   ReadDataByIdentifier UDS  : $2504 FlashTimingParameter Modus: Default

_No arguments._

### PROG_ZAEHLER_LESEN

Programmierzaehler lesen UDS  : $22   ReadDataByIdentifier UDS  : $2502 ProgrammingCounter Modus: Default

_No arguments._

### PROG_MAX_LESEN

Anzahl der maximal möglichen Programmiervorgänge auslesen UDS  : $22   ReadDataByIdentifier UDS  : $2503 ProgrammingCounter Modus: Default

_No arguments._

### STATUS_IP_CONFIGURATION_LESEN

Abfragen der IP Konfiguration UDS   : $22 ReadDataByIdentifier $17 DID STATUS_IP_CONFIGURATION $2A DID STATUS_IP_CONFIGURATION

_No arguments._

### STEUERN_IP_CONFIGURATION_SCHREIBEN

Setzen der IP Konfiguration SG-Reset erforderlich, um neue Konfiguration zu aktivieren UDS   : $2E WriteDataByIdentifier $17 DID STATUS_IP_CONFIGURATION $2A DID STATUS_IP_CONFIGURATION

| Name | Type | Description |
| --- | --- | --- |
| ADDRESS_FORMAT_ID | char | Address-Format-Id ist 0x00 für IPv4 oder 0x01 für IPv6 |
| IP | string | ip,subnetzmask,gateway Beispiel 192.168.100.2 |
| SUBNETMASK | string | subnetzmask Beispiel 255.255.0.0 |
| GATEWAY | string | gateway 192.168.0.254 |

### STATUS_MAC_LESEN

Abfragen der MAC-Adresse UDS   : $22 ReadDataByIdentifier $17 DID MAC $2B DID MAC

_No arguments._

### _STEUERN_MAC_SCHREIBEN

Setzen einer neuen MAC-Adresse UDS   : $2E WriteDataByIdentifier $17 DID MAC $2B DID MAC

| Name | Type | Description |
| --- | --- | --- |
| MAC | binary | MAC (6 Byte) Example: 00 01 02 03 04 05 |

### STATUS_VIN_LESEN

Abfragen der VIN UDS   : $22 ReadDataByIdentifier $F1 DID VIN $90 DID VIN

_No arguments._

### STEUERN_VIN_SCHREIBEN

Setzen der VIN UDS   : $2E WriteDataByIdentifier $F1 DID VIN $90 DID VIN

| Name | Type | Description |
| --- | --- | --- |
| VIN | string | Fahrgestellnummer / VIN (17 Byte) |

### STATUS_VERSION_GATEWAYTABELLE

Lesen der Versionsnummer der Gateway-Tabelle UDS   : $22 ReadDataByIdentifier $40 DID StatusVersionGatewayTabelle $00 DID StatusVersionGatewayTabelle

_No arguments._

### STEUERN_LESEN_MASTERVIN

Veranlasst das ZGW, die ZGW-VIN mit der Master-VIN (CAS) zu aktualisieren UDS   : $31 RoutineControl $01 StartRoutine $1007 Lesen_MasterVIN

_No arguments._

### _STEUERN_SET_GW_ROUTING

Die applikative Routing Funktionalität ist von Gateway-SG zwischen den Busdomänen ein-/ausschaltbar bereitzustellen. Die Diagnose-Nachrichten sind unabhängig von der applikativen Routing-Funktionalität UDS   : $31 RoutineControl $01 StartRoutine $4001 RoutineIdentifier SetGWRouting $?? Enable ($00)/ Disable ($01)

| Name | Type | Description |
| --- | --- | --- |
| APPL_ROUTING | string | "unterstützt"       -> Applikative-Routing Aktiv "nicht unterstützt" -> Applikative-Routing NICHT Aktiv table TabGWRouting TEXT Default: "unterstützt" |

### DIAG_SESSION_LESEN_35UP

Aktive Diagnose-Session auslesen UDS  : $22   ReadDataByIdentifier UDS  : $F186 ActiveDiagnosticSession Modus: Default

_No arguments._

### _STEUERN_ADD_DIAG_ROUTING

Man kann mit diesem Befehl Routingeinträge zur Laufzeit dazufügen UDS   : $BF ZGWDebugService $FFFA AddDiagRouting

| Name | Type | Description |
| --- | --- | --- |
| DIAG_ADRESSE | int | SG Diagnoseadresse. Bereich: 0-255 bzw. 0x00-0xFF |
| BUS_INDEX_1 | char | Byte 1 |
| BUS_INDEX_2 | char | Byte 2 |
| BUS_INDEX_3 | char | Byte 3 |
| BUS_INDEX_4 | char | Byte 4 BusMaske: 0x00000000 -> loeschen 0x00000001 -> B-CAN 0x00000002 -> FA-CAN 0x00000004 -> K-CAN/IuK-CAN 0x00000008 -> D-CAN 0x00000010 -> ZSG_CAN 0x00000020 -> FLEXRAY 0x00000040 -> MOST 0x00000080 -> ETHERNET 0x00000100 -> EIGENE_DIAGNOSE 0x00000200 -> TAS 0x00002000 -> Body2-CAN |

### _STATUS_BUILD_NUMMER_LESEN

Abfragen der Buildnummer der Software UDS   : $BF ZGWDebugService $FFB1 BuildnummerLesen

_No arguments._

### STATUS_BUILD_NUMMER_LESEN

Abfragen der Buildnummer der Software UDS   : $BF ZGWDebugService $FFB1 BuildnummerLesen

_No arguments._

### _STEUERN_DEBUG_CAN_UMSCHALTUNG

Aktivierung bzw. Deaktivierung des Debug-CAN im FEM und BDC 2013 Aktivierung des Debug-CAN im BDC 35up (D-CAN diagnose noch möglich) UDS   : $BF ZGWDebugService $CA DID Debug-CAN Umschaltung $DD DID Debug-CAN Umschaltung

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | 0x00 - Diagnose CAN AKTIV 0x01 - Debug CAN AKTIV |

### STATUS_LESEN_TP_ROUTING_TABELLE

Liest die aktuelle Routing Konfiguration des ZGWs UDS  : $22 ReadDataByIdentifier UDS  : $25 ReadTPRoutingTable UDS  : $09 ReadTPRoutingTable

_No arguments._

### STEUERN_RESET_TP_ROUTING_KONFIGURATION

Setzt persistent gespeicherte Diagnosepfade zurück UDS   : $31 RoutineControl $01 StartRoutine $F740 ResetTPRoutingKonfiguration

_No arguments._

### _STATUS_MSM_ZERTIFIKAT

Abfragen der Buildnummer der Software UDS   : $BF ZGWDebugService $FFD5

_No arguments._

### STATUS_MSM_ZERTIFIKAT_WERK

Prueft, ob ein Zertifikat vorhanden ist oder nicht UDS   : $31   RoutineControl $01   StartRoutine $02150200 Gueltig ab 35Up

_No arguments._

### STEUERN_HU_LINK_10MBIT_TEMPORARY

NUR fuer ZGW/FEM

_No arguments._

### STEUERN_HU_LINK_GESCHW

HU-Link Geschwindigkeit steuern 10Mbits oder 100Mbits UDS   : $31   RoutineControl $01   StartRoutine $F710 HU-Link Geschwindigkeit steuern

| Name | Type | Description |
| --- | --- | --- |
| LINK_GESCHW | char | 0x00 = 10Mbit/s, 0x01 = 100Mbit/s, 0x02 = Standardkonfiguration |

### STEUERN_PROGRAMMIERPFAD_BODY_SCHREIBEN

Wählen des Weges zu flashen UDS  : $2E UDS  : $41 UDS  : $40

| Name | Type | Description |
| --- | --- | --- |
| PROGRAMMIERPFAD | int | 0x00 Programmierpfad: CAN 0x01 Programmierpfad: ETHERNET |

### STATUS_PROGRAMMIERPFAD_BODY_LESEN

Abfragen der Programmierpfad UDS   : $22 ReadDataByIdentifier $41 $40

_No arguments._

### STEUERN_SNIFFING_AUF_HU_PORT

Sniffing auf HU Port: Sniffing Aktiviert oder Deaktiviert UDS   : $31   RoutineControl $01   StartRoutine $F720 Sniffing Aktivieren/Deaktivieren

| Name | Type | Description |
| --- | --- | --- |
| SNIFFING_STEUERN | int | 0x00 = Sniffing Deaktiviert, 0x01 = Sniffing Aktiviert, 0x02 = Sniffing Persistent Aktiviert |

### STATUS_ETH_GET_NUMBER_OF_PORTS

Abfragen der Port-Anzahl des Steuergeraetes UDS   : $22 ReadDataByIdentifier $18 $00

_No arguments._

### STATUS_ETH_PHY_LINK_STATE

Abfragen des Status der Ports UDS   : $22 ReadDataByIdentifier $18 $02

_No arguments._

### STEUERN_CABLE_DIAG

Diagnose des Kabels für einen eingegebenen Port starten UDS   : $31 RoutineControl $01 StartRoutine $1046

| Name | Type | Description |
| --- | --- | --- |
| PORT_INDEX | int | Port Index |

### _STATUS_ETHERNET_REGISTERS_BR

Polar Register Lesen UDS   : $31 	RoutineControl $03   Read $F701

| Name | Type | Description |
| --- | --- | --- |
| POLAR_PAGE | int | Polar Page Byte 0 Example--> 5 |
| POLAR_ADDRESS | int | Polar Adresse Byte 1 Example--> 2 |
| BYTES_TO_READ | int | Anzahl von Bytes zum Lesen (0-8 Bytes) Byte 2 Example--> 6 |

### _STEUERN_ETHERNET_REGISTERS_BR

Polar Register Schreiben UDS   : $31   RoutineControl $01   StartRoutine $F701 "Data"-Checkbox vor Ausführung des Jobs anhaken Example: 05 02 AA BB CC DD EE FF

| Name | Type | Description |
| --- | --- | --- |
| POLAR_PAGE | binary | Polar Page Byte 0 Example--> 05 |
| POLAR_ADDRESS | binary | Polar Adresse Byte 1 Example--> 02 |
| VALUES | binary | Bytes zum Schreiben Byte 2 - 9 Example--> AA BB CC DD EE FF |

### _STEUERN_ETHERNET_MIRROR_MODE_BR

Mirror Mode einstellen UDS   : $31   RoutineControl $01   StartRoutine $F700 example --> map ETH_OBD,ETH_ZGW,ETH_BDY,BR_0(0x71) to BR_3(0x08), mirror mode ON (0x01)

| Name | Type | Description |
| --- | --- | --- |
| QUELLE_PORT_MASK | char | Quelle Port Mask -------\| -> BR_0 ------\|- -> BR_1 -----\|-- -> BR_2 ----\|--- -> BR_3 ---\|---- -> ETH_OBD --\|----- -> ETH_ZGW -\|------ -> ETH_BDY |
| ZIEL_PORT | char | 0x01 -> BR_0 0x02 -> BR_1 0x04 -> BR_2 0x08 -> BR_3 0x10 -> ETH_OBD 0x20 -> ETH_ZGW 0x40 -> ETH_BDY |
| MIRROR_MODE | int | 0x00 = Mirror Mode OFF, 0x01 = Mirror Mode ON, 0x02 = Mirror Mode ON-Persistent |

### STATUS_VCM_GET_ECU_LIST_FLEXRAY_TP

Liste aller SGe, die über Flexray ansprechbar sind, inklusive Information über Flexray-TP UDS   : $22 ReadDataByIdentifier $3F $23

_No arguments._

### STATUS_LESEN_DIAG_SESSION

UDS  : $22 UDS  : $F1 UDS  : $00

_No arguments._

### STEUERN_RESET_AKTIVIERUNGSLEITUNG

Es wird ein Reset von OBD-Aktivierungsleitung durchgeführt UDS   : $31 RoutineControl $01 StartRoutine $1024 Reset Aktivierungsleitung

_No arguments._

### STATUS_EINSCHLAFMONITOR_SPEICHER

Auslesen des Einschlafmonitor-Speichers UDS   : $22 ReadDataByIdentifier $25 DID Einschlafmonitor-Speicher $37 DID Einschlafmonitor-Speicher

_No arguments._

### STATUS_AKTIVSTE_SG

Auslesen der zehn Steuergeräte, die beim letzten Einschlafvorgang die meisten NM-Nachrichten versendet haben UDS   : $22 ReadDataByIdentifier $25 DID Aktivsten SGs $38 DID Aktivsten SGs

_No arguments._

### STEUERN_EINSCHLAFMONITOR_LOESCHEN

Löschen des Einschlafmonitor-Speichers UDS : $31   RoutineControl $01   StartRoutine $1038 Einschlafmonitor loeschen

_No arguments._

### STATUS_ETH_PHY_SWITCH_ENGINE_RESET

Returns the remaining time of the last requested reset UDS   : $31   RoutineControl $03   StartRoutine $1044

_No arguments._

### STATUS_ETH_PHY_IDENTIFIER

Returns a unique PHY identifier for a given port UDS   : $31   RoutineControl $01   StartRoutine $1047

| Name | Type | Description |
| --- | --- | --- |
| PORT_INDEX | unsigned char | Port index val: 0...n-1 (for n Ports total) |

### STEUERN_ETH_PHY_LOOPBACK_TEST

Tests the transmit and receive functionality of a given PHY in loopback mode UDS   : $31   RoutineControl $xx   01: StartRoutine, 02: StopRoutine $1048

| Name | Type | Description |
| --- | --- | --- |
| PORT_INDEX | unsigned char | Index of the PHY that shall be tested val: Ports 0...n-1 (for n ports total) |
| LOOPBACK_MODE | unsigned char | Loopback mode that shall be used for the test val: 1 = use internal loopback mode val: 2 = use external loopback mode val: else = invalid |

### STEUERN_ETH_RESET_PORT_CONFIGURATION

Resets the stored port configuration UDS   : $31   RoutineControl $01   StartRoutine $104A

_No arguments._

### STATUS_ETH_GET_PORT_TX_RX_STATS

Returns the values of the switch receive and transmit counters UDS   : $31   RoutineControl $01   StartRoutine $1049

| Name | Type | Description |
| --- | --- | --- |
| PORT_INDEX | unsigned char | Index of the port, for which the counters shall be returned val: Ports 0...n-1 (for n ports total) |

### STEUERN_ETH_RESET_PORT_TX_RX_STATS

Resets all switches receive and transmit counters UDS   : $31   RoutineControl $01   StartRoutine $104B

_No arguments._

### STEUERN_ETH_ENABLE_TEST_MODE

Sets a given PHY into a requested test mode for a given duration UDS   : $31   RoutineControl $01   StartRoutine $104C

| Name | Type | Description |
| --- | --- | --- |
| PORT_INDEX | unsigned char | Port index of the PHY that shall be put into a given test mode val: Ports 0...n-1 (for n ports total) |
| TEST_DURATION | unsigned char | Defines the amount of time the test mode shall be enabled for To calculate the test duration, the value of the parameter TEST_DURATION shall be multiplied by 10s val: 0-255 = 0-2550 seconds |
| TEST_MODE_ID | unsigned char | ID of the test mode the PHY shall be put into val: 1 = Transmit droop test mode val: 2 = Transmit Jitter test in MASTER mode val: 3 = Transmit Jitter test in SLAVE mode val: 4 = Transmit Distortion test val: 5 = Normal Operation at full power necessary for the PSD mask Test val: else = invalid |

### STATUS_ETH_LEARN_PORT_CONFIGURATION

Returns the stored port configuration of the ZGW UDS   : $22 ReadDataByIdentifier $18 $03

_No arguments._

### STEUERN_ETH_LEARN_PORT_CONFIGURATION

Stores the current link state (link up/link down) of all external ports of the ecu. The stored port configuration can then be used to detect missing, or additional ECUs during runtime. UDS   : $31 RoutineControl $01 StartRoutine $1040

_No arguments._

### STEUERN_ETH_WRITE_PHY_REGISTER

Writes an arbitrary PHY, MAC or switch register. UDS   : $31 RoutineControl $01 StartRoutine $104D

| Name | Type | Description |
| --- | --- | --- |
| INPUTDATA | binary | 1st byte REG_WRITE_PROTECT, uint8: To avoid misuse or an inadvertent write of registers, REG_WRITE_PROTECT must be set to 0xEE in order to execute the job. The job execution shall be aborted if the parameter REG_WRITE_PROTECT is != 0xEE. --------- followed by 1 byte: REG_WRITE_RANGE: Number of registers that shall be written to (enumeration starts at 1). (uint8,  0= no write, 1-255= write 1 to 255 registers ) --------- followed by:  REG_ADDR[] - each entry 4byte uint32. Addresses that shall be written to. If the number of provided addresses is not equal to REG_WRITE_RANGE, the job execution shall be aborted. Each address must be converted to a unique PHY, MAC or switch register address. The conversion shall be handled individually by each ECU. The used mapping scheme shall take into account all available PHYs, MACs and switches the ECU is equipped with and that are visible externally, i.e., via an connector. --------- followed by 1 byte: REG_WRITE_RANGE: Number of registers that shall be written to (enumeration starts at 1). (uint8,  0= no write, 1-255= write 1 to 255 registers) --------- followed by:  REG_WRITE_LENGTH[] - each entry 1 byte uint8. Entry n in REG_WRITE_LENGTH[] specifies how many bytes shall be written to the register address defined by entry n in REG_ADDR[]. Enumeration shall start at 1. If the number of entries is not equal to REG_WRITE_RANGE, the job execution shall be aborted. --------- followed by 1 byte: REG_WRITE_RANGE: Number of registers that shall be written to (enumeration starts at 1). (uint8,  0= no write, 1-255= write 1 to 255 registers) --------- followed by:  REG_WRITE_DATA[] - each entry 8 bytes uint64. Entry n in REG_WRITE_DATA[] provides the data that shall be written to the register address defined by entry n in REG_ADDR[]. The amount of bytes (starting with the least significant byte) that are actually written are defined by entry n in REG_WRITE_LENGTH[]. If the number of entries is not equal to REG_WRITE_RANGE, the job execution shall be aborted. Enumeration shall start at 1. |

### STEUERN_ETH_PHY_SWITCH_ENGINE_RESET

Requests the reset of a given PHY or of the ECUs switch(es). If supported by the ECU, the PHY/switch(es) may be held in reset for a given amount of time. If an ECU does not support holding the PHY/switch(es) in reset for a given duration but STOP_PHY_FOR_T is greater than 0, the job shall quit with return value STAT_PHY_RESET = 2 and without performing the reset. After the reset, the default configuration, i.e., the configuration that is used during runtime, shall be applied. UDS   : $31 RoutineControl $01 StartRoutine $1044

| Name | Type | Description |
| --- | --- | --- |
| PORT_INDEX | unsigned char | Port Index {0-0xfe = Port 0 - Port 254, 0xff = reset all switch engines} |
| STOP_PHY_FOR_T | unsigned char | Amount of time the PHY or switch(es) shall be hold in reset. 0 - 255 seconds |

### STATUS_ETH_ARP_TABLE

Shall return the ARP table of a given network interface. The interface shall be identified by its IP address. UDS   : $31 RoutineControl $01 StartRoutine $1043

| Name | Type | Description |
| --- | --- | --- |
| INPUTDATA | binary | 1st byte, uint8: IP_VERSION_TAB Used IP version of the network interface for which the ARP table shall be returned. IP_VERSION_TAB = 0 if the entry uses IPv4, IP_VERSION_TAB = 1 if the entry uses IPv6. --------- followed by 16 bytes ARP_TABLE_FOR_IP_ADDRESS: IP address of the network interface for which the ARP table shall be returned. IP address starting with the first octet (e.g., byte[0]=0xC0, byte[1]=0xA8, byte[2]=0x00, byte[3]=0x01 for IP address 192.168.0.1) For IPv4: byte[0] - byte[3]=IPv4 address, byte[4-15]=0. For IPv6: byte[0-15]=IPv6 address. --------- |

### STATUS_ETH_ARL_TABLE

Shall return the ARP table of a given network interface. The interface shall be identified by its IP address. UDS   : $31 RoutineControl $01 StartRoutine $1042

| Name | Type | Description |
| --- | --- | --- |
| PORT_INDEX | unsigned char | Port index of the requested ARL table. The ARL table of all external ports of the ECU shall be returned if PORT_INDEX=0xff. 1 byte uint8 {Port 0 - Port n-1 (for n Ports total), 0xff = ARL table of all ports.} |

### STATUS_ETH_READ_PHY_REGISTER

Reads an arbitrary PHY, MAC or switch register. UDS   : $31 RoutineControl $01 StartRoutine $1041

| Name | Type | Description |
| --- | --- | --- |
| INPUTDATA | binary | 1st byte: REG_READ_RANGE: Number of registers that shall be read (enumeration starts at 1). {uint8,  0= no write, 1-255= write 1 to 255 registers } --------- followed by:    REG_ADDR[] - each entry 4byte uint32. Addresses to be read from. If the number of provided addresses is not equal to REG_READ_RANGE, the job execution shall be aborted. Each address must be converted to a unique PHY, MAC or switch register address. The conversion shall be handled individually by each ECU. The used mapping scheme shall take into account all available PHYs, MACs and switches the ECU is equipped with and that are visible externally, i.e., via an connector. --------- followed by 1 byte: REG_READ_RANGE: Number of registers that shall be read (enumeration starts at 1). {uint8,  0= no write, 1-255= write 1 to 255 registers } --------- followed by:  REG_READ_LENGTH[] - each entry 1 byte uint8. Entry n in REG_READ_LENGTH[] specifies how many bytes shall be read from the register address defined by entry n in REG_ADDR[]. Enumeration shall start at 1. If the number of entries is not equal to REG_READ_RANGE, the job execution shall be aborted. |

### STATUS_ETH_SIGNAL_QUALITY

Returns the signal quality of all external ports of the ECU UDS   : $22 ReadDataByIdentifier $1801 ETH_SIGNAL_QUALITY

_No arguments._

### STATUS_ETH_IP_CONFIGURATION

Shall return the ARP table of a given network interface. The interface shall be identified by its IP address. UDS   : $31 RoutineControl $01 StartRoutine $1045

| Name | Type | Description |
| --- | --- | --- |
| INTERNAL_EXTERNAL_ADDRESS | unsigned char | Identifies the network interface and its corresponding IP address (internal, external, all, further, optional application specific address) for which the IP configuration shall be returned and for which an optional gratuitous ARP shall be triggered. 1 byte uint8 {0= request internal IP address, 1= request external IP address (assigned by tester, cf. [100]) 0xff = request all IP-addresses, else = further, application specific IP address} |
| TRIGGER_GRATUITOUS_ARP | unsigned char | Defines whether the ECU shall send out a gratuitous ARP for the requested network interface. The gratuitous ARP shall be sent as soon as possible after being triggered. 1 byte uint8 {1= send gratuitous ARP for the requested network interface,  else = do not send gratuitous ARP} |

### STATUS_WECKRINGSPEICHER_LESEN

Auslesen des Weckringspeichers UDS   : $22 ReadDataByIdentifier $EF DID Weckringspeicher $E9 DID Weckringspeicher

_No arguments._

### STEUERN_FZM_WECKRINGSPEICHER_LOESCHEN

WeckringSpeicher Loeschen UDS   : $2E WriteDataByIdentifier $EF DID WeckringSpeicher Loeschen $E8 DID WeckringSpeicher Loeschen

_No arguments._

### STEUERN_GETDEFAULTREGISTRY

Das ZGW muss die Default Registry von NWM auslesen und im eigenen Speicher ablegen. UDS   : $31   RoutineControl UDS   : $01   StartRoutine UDS   : $1008 SteuernGetDefaultRegistry

_No arguments._

### STATUS_DEFAULT_REGISTRY_LESEN

Liefert den Inhalt der Current Registry UDS   : $22 ReadDataByIdentifier UDS   : $D0 DID ReadDefaultResgistry UDS   : $41 DID ReadDefaultResgistry

_No arguments._

### STATUS_CURRENT_REGISTRY_LESEN

Liefert den Inhalt der Current Registry UDS   : $22 ReadDataByIdentifier UDS   : $D0 DID ReadCurrentResgistry UDS   : $40 DID ReadCurrentResgistry

_No arguments._

### STEUERN_RINGBRUCH_DIAGNOSE

Ringbruchdiagnose soll gestartet werden UDS   : $31   RoutineControl UDS   : $01   StartRoutine UDS   : $A033 SteuernRingbruchDiagnose

_No arguments._

### STATUS_GATEWAY_WAKEUP_SOURCE

Liefert die Quelle/Ursache zurück, die zum Wecken des Gateway-Steuergerätes geführt hat. UDS   : $22 ReadDataByIdentifier UDS   : $40 DID StatusGatewayWakeupSource UDS   : $01 DID StatusGatewayWakeupSource

_No arguments._

### STATUS_GATEWAY_OWN_DEVICE_ID

Information über den Gateway-Dispatcher Eigene logische MOST Device-ID des Gateway nur im PL6 vorhanden UDS   : $22 ReadDataByIdentifier UDS   : $40 DID StatusGatewayOwnDeviceID UDS   : $02 DID StatusGatewayOwnDeviceID

_No arguments._

### STATUS_CURRENT_DIAG_FBLOCKS_LESEN

Ausgabe der erkannten MOST-Devices. Die Erkennung erfolgt über die InstID der Diagnose-Funktionsblöcke. nur im PL6 vorhanden UDS  : $22 ReadDataByIdentifier UDS  : $40 ReadCurrentDiagFblocks UDS  : $04 ReadCurrentDiagFblocks

_No arguments._

### STATUS_MOSTSYSTEM

Liefert den aktuelle Systemzustand des MOST-Bus nur im PL6 vorhanden UDS   : $22 ReadDataByIdentifier UDS   : $17 DID StatusMostSystem UDS   : $2C DID StatusMostSystem

_No arguments._

### STATUS_ETHERNET_REGISTER_LESEN

Ethernet Register wird ausgelesen UDS  : $22 ReadDataByIdentifier UDS  : $40 EthernetRegisterLesen UDS  : $30 EthernetRegisterLesen

_No arguments._

### STATUS_ETHERNET_INFORMATION

UDS  : $22 ReadDataByIdentifier UDS  : $40 EthernetRegisterLesen UDS  : $31 EthernetRegisterLesen

_No arguments._

### _STEUERN_ETHERNET_REGISTER_SCHREIBEN

Ein Ethernet Register wird geschrieben UDS  : $2E ReadDataByIdentifier UDS  : $40 EthernetRegisterLesen UDS  : $30 EthernetRegisterLesen

| Name | Type | Description |
| --- | --- | --- |
| INTERFACE | int | SMI = 0x00 MMI = 0x01 |
| PHYSICAL_ADDRESS | int | SMI   = 0x00 MMI_1 = 0x01 MMI_2 = 0x02 (nur zgw high) |
| REGISTER_ID | int | Von 0x00 bis 0x8B für die SMI Register Von 0x00 bis 0x09 für die MMI Register (zgw high) Von 0x00 bis 0x1F für die MMI Register (zgw mid) |
| INHALT | int | Inhalt der Register 0x0000 - 0xFFFF |

### STEUERN_BUSSE_WACH_HALTEN

Nach Ausschaltung der Klemme 15, bleibt der Fzg wach durch verlaengerten Timeout UDS   : $31   RoutineControl UDS   : $01   StartRoutine UDS   : $4004 SteuernBusseWachHalten

| Name | Type | Description |
| --- | --- | --- |
| NACHLAUFZEIT | unsigned int | Nachlaufzeit in Sekunden Max. 255 Sekunden Skalierung: 1 entspricht 1 Sekunde |

### STEUERN_TRANSDIAG_SEND_TESTSTAND_ID

Ein CAN frame zur Identifikation der Prüfstände bei TD auf die Fahrzeugbusse wird gesendet. Zu sendendes CAN Frame: Zielbusse: FA-CAN und BODY-CAN Frame_ID:  $7A8 UDS   : $31 RoutineControl $01 StartRoutine $F777 RoutineIdentifier Teststand_ID $xx Pruefstandkennug $FF Reserviert $FF Reserviert

| Name | Type | Description |
| --- | --- | --- |
| PRUEFSTANDKENNUNG | int | 0x00 - 0xFF |

### STEUERN_TRANSDIAG_SEND_CANFRAME_ONCE

Dieser Service sendet einen CAN FRAME auf ein oder mehreren CAN Bussen bis zu n-mal UDS   : $31 RoutineControl $01 StartRoutine $F780 RoutineIdentifier Messagetunnel $01 SEND $01 CANFRAME $01 ONCE $?? BUS_INDEX $?? TIME_INDEX $?? CAN_ID $?? D_LAENGE $?? PAYLOAD $?? N_VERSENDUNGEN

| Name | Type | Description |
| --- | --- | --- |
| BUS_INDEX | char | 0x01 ... B-CAN 0x02 ... FA-CAN 0x04 ... K-CAN 0x08 ... D-CAN Beispiel CAN FRAME auf FA-CAN         => BUS_INDEX = 0x02 CAN FRAME auf FA-CAN + K-CAN => BUS_INDEX = 0x02 + 0x04 = 0x06 |
| TIME_INDEX | int | "Time_Delay" in ms. zwischen zwei konsekutiv FRAMES |
| CAN_ID | int | CAN Identifier der CAN_FRAME (2 Bytes) |
| D_LAENGE | int | Laenge der Payload |
| PAYLOAD | string | Payload der CAN_FRAME (1 - 8 Bytes) <PL1><PL2>...<PLx> Beispiel: A0FF01FF00       (5 Bytes) A0FF01FF00010001 (8 Bytes) |
| N_VERSENDUNGEN | char | Anzahl der Versensungen |

### STEUERN_TRANSDIAG_RECEIVE_CANFRAME_ONCE

Dieser Service empfängt einmalig ein CAN FRAME von einem bestimmten Bus UDS   : $31 RoutineControl $01 StartRoutine $F780 RoutineIdentifier Messagetunnel $02 RECEIVE $01 CANFRAME $01 ONCE $?? BUS_INDEX $?? CAN_ID $?? TIMEOUT

| Name | Type | Description |
| --- | --- | --- |
| BUS_INDEX | char | 0x01 ... B-CAN 0x02 ... FA-CAN 0x03 ... K-CAN 0x04 ... D-CAN |
| CAN_ID | int | CAN Identifier der CAN_FRAME (2 Bytes) |
| TIMEOUT | long | Zeit in ms.wo man eine CAN_FRAME empfangen soll |

### STEUERN_TRANSDIAG_SEND_RECEIVE_MOST_CTRL_ONCE

Dieser Service sendet/empfängt eine MOST Nachricht über den AMS Dienst auf/von den MOST Bus UDS   : $31 RoutineControl $01 StartRoutine $F78001 RoutineIdentifier Messagetunnel $02 MOST $01 ONCE $?? D_LAENGE $?? TGT_ADR $?? FBL $?? INST_ID $?? FKT_ID $?? OP_TYPE $?? PAYLOAD

| Name | Type | Description |
| --- | --- | --- |
| D_LAENGE | int | Laenge der Payload (2 Bytes) max 4KByte (4096 Bytes) |
| TGT_ADR | int | MOST Target Adresse (2 Bytes) |
| FBL | char | MOST FunktionBlock (1 Byte) |
| INST_ID | char | MOST InstanzID (1 Byte) |
| FKT_ID | int | MOST FunktionID (2 Byte) |
| OP_TYPE | char | MOST Operation Type (1 Byte) |
| PAYLOAD | string | Payload der MOST Nachricht (1 - 4096 Bytes) <PL1><PL2>...<PLn> Beispiel: A0FF01FF00       (5 Bytes) A0FF01FF00010001 (8 Bytes) |

### STEUERN_RECEIVE_CAN_FRAME_START

Empfangen von CAN ab die F10 UDS   : $31 RoutineControl $01 StartRoutine $F765 RoutineIdentifier Receive CAN Frame $?? BUS_INDEX $?? CAN_ID $?? R_WIEDERHOLUNGEN $?? TO_TIMEOUT

| Name | Type | Description |
| --- | --- | --- |
| BUS_INDEX | char | Bit 0: Body-CAN Bit 1: FA-CAN Bit 2: K-CAN Bit 3: D-CAN Bit 4: ZSG-CAN |
| R_WIEDERHOLUNGEN | int | Anzahl der Wiederholungen (2 Bytes) |
| CAN_ID | int | CAN Identifier der CAN_FRAME (2 Bytes) |
| TO_TIMEOUT | long | Timeout beim Empfang der Nachricht in ms. (4 Bytes) |

### STEUERN_RECEIVE_CAN_FRAME_STOP

Der Empfang der CAN-Nachricht mit der angegebenen ID wird beendet Gültig ab die F10 UDS   : $31 RoutineControl $02 StopRoutine $F765 RoutineIdentifier Receive CAN Frame $?? CAN_ID

| Name | Type | Description |
| --- | --- | --- |
| CAN_ID | int | CAN Identifier der CAN_FRAME (2 Bytes) |

### STEUERN_SEND_CAN_FRAME_START

Senden auf CAN ab die F10 UDS   : $31 RoutineControl $01 StartRoutine $F766 RoutineIdentifier Send CAN Frame $?? BUS_INDEX $?? CAN_ID $?? R_WIEDERHOLUNGEN $?? TO_TIMEOUT

| Name | Type | Description |
| --- | --- | --- |
| BUS_INDEX | char | Bit 0: Body-CAN Bit 1: FA-CAN Bit 2: K-CAN Bit 3: D-CAN Bit 4: ZSG-CAN |
| TI_ZYKLUSZEIT | long | Zykluszeit in ms. (4 Bytes) (falls R_WIEDERHOLUNGEN > 1) |
| R_WIEDERHOLUNGEN | long | Anzahl der Wiederholungen (4 Bytes) 0xFFFFFFFF: unendlich verschicken |
| CAN_ID | int | CAN Identifier der CAN_FRAME (2 Bytes) |
| DL_LAENGE | char | Länge der Payload (1 Byte) |
| PAYLOAD | string | Payload der CAN_FRAME (1 - 8 Bytes) <PL1><PL2>...<PL8> Beispiel: A0FF01FF00       (5 Bytes) A0FF01FF00010001 (8 Bytes) |

### STEUERN_SEND_CAN_FRAME_STOP

Der Sendung der CAN-Nachricht mit der angegebenen ID wird beendet Gültig ab die F10 UDS   : $31 RoutineControl $02 StopRoutine $F766 RoutineIdentifier Receive CAN Frame $?? CAN_ID

| Name | Type | Description |
| --- | --- | --- |
| CAN_ID | int | CAN Identifier der CAN_FRAME (2 Bytes) |

### STEUERN_ACTIVATE_MESSAGE_LOGGING

Aktiviert das Ausleiten von Nachrichten an eine externe Nachrichtensenke gemäß den gesetzten Filtern Gültig ab die F10 UDS   : $31 RoutineControl $01 StartRoutine $F764 RoutineIdentifier Receive CAN Frame $?? BUS_ID $?? IP_Adresse $?? PORT

| Name | Type | Description |
| --- | --- | --- |
| BUS_ID | char | Bus Identifier: (1 Byte) 0 Body-CAN 1 FA-CAN 2 K-CAN 3 D-CAN 4 FlexRay 5 MOST 7 Ethernet |
| IP_Adresse_Byte1 | char | IP Adresse der Nachrichtensenke 1.Byte |
| IP_Adresse_Byte2 | char | IP Adresse der Nachrichtensenke 2.Byte |
| IP_Adresse_Byte3 | char | IP Adresse der Nachrichtensenke 3.Byte |
| IP_Adresse_Byte4 | char | IP Adresse der Nachrichtensenke 4.Byte |
| PORT | int | Portnummer der externen Nachrichtensenke (2 Bytes) |

### STEUERN_DEACTIVATE_MESSAGE_LOGGING

Stoppt das Ausleiten von Nachrichten an die durch STEUERN_ACTIVATE_MESSAGE_LOGGING definierte Nachrichtensenke Gültig ab die F10 UDS   : $31 RoutineControl $02 StopRoutine $F764 RoutineIdentifier Receive CAN Frame

_No arguments._

### STEUERN_TUNNELING_BUSSE

Aktiviert das Ausleiten von allen Nachrichten der gewählten Busse an eine externe Nachrichtensenke gemäß $?? TUNNEL_BUSSE_MASK $?? IP_Adresse $?? PORT example --> Tunneling von ZSG-, FA- und Body-CAN auf Ip-Addresse 169.254.158.110 Port 56789 argumente: 0x13 0xA9 0xFE 0x9E 0x6E 0xDDD5

| Name | Type | Description |
| --- | --- | --- |
| TUNNEL_BUSSE_MASK | char | Tunneling Busse Mask -------\| -> Body-CAN ------\|- -> FA-CAN -----\|-- -> K-CAN / IuK-CAN ----\|--- -> D-CAN ---\|---- -> ZSG-CAN --\|----- -> Debug-CAN -\|------ -> Body2-CAN \|------- -> LT-CAN (ab BDC35Up) |
| IP_ADRESSE_BYTE1 | char | IP Adresse der Nachrichtensenke 1.Byte |
| IP_ADRESSE_BYTE2 | char | IP Adresse der Nachrichtensenke 2.Byte |
| IP_ADRESSE_BYTE3 | char | IP Adresse der Nachrichtensenke 3.Byte |
| IP_ADRESSE_BYTE4 | char | IP Adresse der Nachrichtensenke 4.Byte |
| PORT | int | Portnummer der externen Nachrichtensenke (2 Bytes) |

### STEUERN_ZFS_LOESCHEN

Loeschen des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $00   DM_Lock UDS     : $01   DM_Unlock UDS     : $05   DM_Clear Modus   : Default

_No arguments._

### STATUS_ZFS_LESEN_REDUZIERT

Lesen einer Teilmenge des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $00   DM_Lock UDS     : $01   DM_Unlock UDS     : $04   DM_ReadEvent Modus   : Default

_No arguments._

### STATUS_ZFS_EVENTS_WERK

Lesen einer Teilmenge des Zentralen Fehlerspeichers fuer Ablage in CASCADE UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $00   DM_Lock UDS     : $01   DM_Unlock UDS     : $04   DM_ReadEvent Modus   : Default

_No arguments._

### STATUS_ZFS_LESEN_GESAMT

Lesen des Zentralen Fehlerspeichers Kompatible Gateways: ZGW_01, ZGW_02, FEM, BDC-LR, BDC 35up Spec.: LH Diagnosemaster SAP 10000504 Es werden nur die Results zurückgeliefert, welche vom vorliegenden Gateway auch unterstützt werden. Pro Fehlereintrag ein Resultset. --------- UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     :     $00   DM_Lock UDS     :     $01   DM_Unlock UDS     :     $03   DM_ReadSysContext UDS     :     $04   DM_ReadEvent UDS     :     $F3   DM_ReadFormatVersion Mit SubFunction 0xF3 ReadFormatVersion wird geprüft, um welche ZFS-Version es sich handelt (Systemkontext-Version). Es wird im Jobverlauf ausserdem von jedem SG, zu welchem ein DTC eingetragen ist, der SGBD-Index mit UDS 22 F150 abgefragt. Um die SGBD-Namen korrekt zu bestimmen, wird die T_GRTB.PRG herangezogen. Aus den entsprechenden SGBDn werden die FOrtTexte der vorhandenen DTCs extrahiert.

_No arguments._

### STATUS_ANZAHL_SYSTEMKONTEXTE

Anzahl der Systemkontexte des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $F1   DM_AnzSysContext Modus   : Default

_No arguments._

### STATUS_ANZAHL_MAPPINGS

Anzahl der Mappings des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $F2   DM_AnzMapping Modus   : Default

_No arguments._

### STATUS_DM_VERSION_SYSKONTEXTE_MAPPINGS

MAPPING Version und Systemkontext Version auslesen UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $F3   Version Modus   : Default

_No arguments._

### STATUS_DM_ZFS_RINGSPEICHER_STATUSINDIKATOR

Statusindikator Ringspeicher (für ZFS Mappings/Systemkontexte) nach LH DM DMA_PA_9125 Es wird zurückgegeben, ob der ZFS bereits 'voll' ist, so dass bei weiteren Einträgen alte überschrieben werden Ausserdem der 'START' Zeitstempel, ab dem im laufenden LifeCycle der Ringspeicher wiederholt überschrieben wurde, so dass ZFS Einträge ab dann ganz geblockt wurden. Details im LH Diagnosemaster 4.1.3.2.2 Zentraler Fehlerspeicher / Central fault memory speziell: DMA_PA_9125 und DMA_PA_9137, DMA_PA_8688, DMA_PA_9139, DMA_PA_9140 UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $08   Statusindikator

_No arguments._

### STEUERN_ROE_INITIALISIERUNG

Persistentes Aktivieren der aktiven Fehlermeldung an alle Diagnosemasterclients ueber TAS UDS   : $86 ResponseOnEvent $C5 Start persistent, suppressPosRspMsg $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_INITIALISIERUNG_CHECK

Persistentes Aktivieren der aktiven Fehlermeldung an alle Diagnosemasterclients ueber TAS mittels funktionaler Adressierung UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_INITIALISIERUNG_CHECK2

Persistentes Aktivieren der aktiven Fehlermeldung an alle Diagnosemasterclients ueber TAS mit physikalischer Adressierung an SGs in VCM-Liste UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime)

_No arguments._

### _STEUERN_DM_LOCK

Sperren des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $00   DM_Lock Modus   : Default

_No arguments._

### _STEUERN_DM_UNLOCK

Entsperren des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $01   DM_Unlock Modus   : Default

_No arguments._

### _STATUS_DM_LOCKSTATE

Sperrzustand des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $02   DM_Lockstate Modus   : Default

_No arguments._

### STEUERN_DM_FSS_MASTER

Manipulation der Zentralen Fehlerspeichersperre nach LH Diagnosemaster 10000504 DMA_PA_8960 Dieser Job ist nur gueltig fuer PL7, nicht fuer PL6 UDS    : $31   RoutineControl UDS    : $xx   01: StartRoutine, 02: StopRoutine UDS    : $0305 RID für Fehlerspeichersperre UDS    : $xx   Signalvorgabe per Argument (zur Statusabfrage vergleiche Job STATUS_DM_FSS_MASTER)

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL | int | optionales Argument, wird nichts übergeben, wird Routine gestoppt und somit zur freilaufenden Betriebsart gewechselt Welches Signal Status_Sperre_Fehlerspeicher_FZM soll versendet werden? 0: Fehlerspeicherfreigabe 0b00 1: Fehlerspeichersperre 0b01 2: Reserve 0b10 3: Signal ungültig 0b11 4: Nachricht 0x3A0 stumm |

### STATUS_DM_FSS_MASTER

Gibt aktuellen Zustand der Zentralen Fehlerspeichersperre nach LH Diagnosemaster 10000504 DMA_PA_8960 Dieser Job ist nur gueltig fuer PL7, nicht fuer PL6 UDS    : $22   ReadDataByIdentifier UDS    : $40   Byte #1 von SG-spez. DataIdentifier $4040 "Status_FSS" UDS    : $40   Byte #2 von SG-spez. DataIdentifier $4040 "Status_FSS"  Request 0x22,40,40 => liefert Antwort der Form 0x62,40,40,xx,yy Wertetabelle für xx: 0x00: Fehlerspeicherfreigabe 0x01: Fehlerspeichersperre 0x02: Reserve 0x03: Signal ungültig 0x04: Nachricht 0x3A0 stumm Wertetabelle für yy: 0x00: Freilaufend 0x01: Fest wie mittels Routine vorgegeben 0xFF: keine Angabe möglich

_No arguments._

### STEUERN_TAS

Tester Assistent - TAS wird Aktiviert oder Deaktiviert UDS   : $31   ResponseOnEvent $01   StartRoutine $100A DataIdentifier TAS Aktivieren/Deaktivieren

| Name | Type | Description |
| --- | --- | --- |
| TAS_STEUERN | int | Für ZGW / FEM / BDC 2013: 0x00 = TAS Deaktiviert 0x01 = TAS Aktiviert  Für BDC 35up: 0x00 = TAS Deaktiviert bis zum nächsten Aufstarten 0x01 = TAS Aktiviert 0x02 = TAS Deaktiviert über Aufstart hinaus 0x03 = Interne TAS Deaktiviert bis zum nächsten Aufstarten 0x04 = Interne TAS Deaktiviert über Aufstart hinaus |

### STEUERN_STOP_ROUTINE_TAS_BEAUFTRAGUNG

Tester Assistent - laufende TAS-Beauftragung wird gestoppt UDS   : $31   ResponseOnEvent $02   StopRoutine $0F0B DataIdentifier TAS Beauftragung

_No arguments._

### STEUERN_ECU_RESET_UEBER_TAS

Hart Reset des Steuergeraets ueber TAS UDS   : $11 ECU Reset $01 Hard Reset

_No arguments._

### STATUS_VCM_GET_ECU_LIST_SECURITY

Liste aller SGe die Security Mechanismen unterstützen Bit 4 SGInfoFlagsByte1 UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListSecurity UDS  : $02 VcmGetEcuListSecurity

_No arguments._

### STATUS_VCM_GET_ECU_LIST_SWT

Liste aller SGe die Sweeping Technology unterstützen Bit 5 SGInfoFlagsByte1 UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListSwt UDS  : $03 VcmGetEcuListSwt

_No arguments._

### STATUS_VCM_GET_FA

Der Fahrzeugauftrag beschreibt mittels Produktbeschreibungscodes und zusätzlicher Inhalte das Fahrzeug und soll immer dem aktuellen Ausrüststand des Fahrzeuges esntsprechen UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetVehicleOrderReference UDS  : $06 VcmGetVehicleOrderReference

_No arguments._

### STATUS_VCM_GET_ECU_LIST_ALL

Liste aller in der SVTSoll gespeicherte SGe UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListAll UDS  : $07 VcmGetEcuListAll

_No arguments._

### STATUS_VCM_I_STUFE_LESEN

Auslesen der I-Stufe aus ZGW und CAS UDS:    $22   ReadDataByIdentifier UDS:    $100B DataIdentifier I-Level Byte     |0|1|2|3| 4| 5| 6| 7| | ASCII |    Byte   | IStufe   |F|0|0|1|09|08| 4 00|

_No arguments._

### STATUS_VCM_GET_ECU_LIST_CODINGRELEVANT

Liste aller codierrelevant SGe Bit 2 SGInfoFlagsByte1 UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListCodingrelevant UDS  : $0C VcmGetEcuListCodingrelevant

_No arguments._

### STATUS_VCM_GET_ECU_LIST_FLASHABLE

Liste aller flashfähigen SGe Bit 1 SGInfoFlagsByte1 UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListFlashable UDS  : $0D VcmGetEcuListFlashable

_No arguments._

### STATUS_VCM_GET_ECU_LIST_K_CAN

Liste aller SGe, die über K_CAN ansprechbar sind UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListKCan UDS  : $0E VcmGetEcuListKCan

_No arguments._

### STATUS_VCM_GET_ECU_LIST_BODY_CAN

Liste aller SGe, die über BODY_CAN ansprechbar sind UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListBodyCan UDS  : $0F VcmGetEcuListBodyCan

_No arguments._

### STATUS_VCM_GET_ECU_LIST_MOST

Liste aller SGe, die über MOST ansprechbar sind UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListMost UDS  : $11 VcmGetEcuListMost

_No arguments._

### STATUS_VCM_GET_ECU_LIST_FA_CAN

Liste aller SGe, die über FA_CAN ansprechbar sind UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListFaCan UDS  : $12 VcmGetEcuListFaCan

_No arguments._

### STATUS_VCM_GET_ECU_LIST_FLEXRAY

Liste aller SGe, die über FLEXRAY ansprechbar sind UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListFlexray UDS  : $13 VcmGetEcuListFlexray

_No arguments._

### STATUS_VCM_GET_ECU_LIST_ISO14229

Liste aller SGe, die Diagnose nach ISO 14229 implementiert haben Bit 0 SGInfoFlagsByte1 UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListISO14229 UDS  : $15 VcmGetEcuListISO14229

_No arguments._

### STATUS_GET_ECU_LIST_UNEINDEUTIGES_ROUTING

Liste aller SGe, die eine Mehrdeutigkeit in der Routingtabelle haben UDS  : $22 ReadDataByIdentifier UDS  : $40 GetEcuListUneindeutigesRouting UDS  : $50 GetEcuListUneindeutigesRouting

_No arguments._

### STATUS_VCM_GET_ECU_LIST_ACTIVE_RESPONSE

Liste aller in der SVTSoll gespeicherte SGe UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListActiveResponse UDS  : $08 VcmGetEcuListActiveResponse

_No arguments._

### STEUERN_VCM_GENERATE_SVT_START

Generierung der aktuellen System-Verbautabelle einschließlich Vergleich SVT_Ist mit SVT_Soll UDS  : $31 RoutineControl UDS  : $01 StartRoutine UDS  : $0207 VcmGenerateSVKLesen

_No arguments._

### STEUERN_VCM_GENERATE_SVT_GET_RESULTS

Liste der in der SVTIst gespeicherte Steuergeräte die unterschiedlich mit der SVTSoll sind UDS  : $31 RoutineControl UDS  : $03 RequestRoutineResults UDS  : $0207 VcmGenerateSVKLesen

_No arguments._

### STEUERN_LEARN_FLEXRAY

Automatische Abschaltung von nicht benötigten Flexrayästen des Sternkopplers Pre-Conditions: SVT_Soll auf dem ZGW schreiben Parameter sind hier nicht notwendig,da fuer die Internen Timeouts Defaultwerte verwendet werden: jeweils 200ms und 5000ms UDS  : $31     RoutineControl UDS  : $01     StartRoutine UDS  : $F77F   SteuernLearnFlexRay

_No arguments._

### STEUERN_LEARN_FLEXRAY_WERK

Automatische Abschaltung von nicht benötigten Flexrayästen des Sternkopplers Pre-Conditions: SVT_Soll auf dem ZGW schreiben UDS  : $31     RoutineControl UDS  : $01     StartRoutine UDS  : $F77F   SteuernLearnFlexRay

| Name | Type | Description |
| --- | --- | --- |
| FIRST_RESPONSE_TIMEOUT | long | Default 200ms = 0x00C8 |
| POSITIVE__RESPONSE_TIMEOUT | long | Default 5000ms = 0x1388 |

### STATUS_LEARN_FLEXRAY

Status des Learn FlexRay wird ausgelesen UDS  : $22 ReadDataByIdentifier UDS  : $40 StatusLearnFlexRay UDS  : $20 StatusLearnFlexRay

_No arguments._

### STEUERN_RESET_LEARN_FLEXRAY

Führt ein Learn FlexRay aus UDS  : $31     RoutineControl UDS  : $01     StartRoutine UDS  : $F77D   SteuernResetLearnFlexRay

_No arguments._

### STEUERN_DIAG_PLUS_FLEXRAY

Schaltet den Diag-Plus FR Pfad EIN UDS  : $31       RoutineControl UDS  : $01       StartRoutine UDS  : $F77Cxx   SteuernDiagPlusFlexRay (Pfad 0 und 3)

_No arguments._

### STEUERN_FLEXRAY_PFAD

Steuert den Status aller FR Pfade aus/ein UDS  : $31    RoutineControl UDS  : $01    StartRoutine UDS  : $F77C  SteuernFlexRayPfad

| Name | Type | Description |
| --- | --- | --- |
| PFAD_X | int | FR PFad 0x00 - 0x07 |
| PFAD_X_STEUERN | int | 0x00=AUS, 0x01=EIN |

### STATUS_FLEXRAY_PFAD

Liest den Status aller FR Pfade aus UDS  : $22 ReadDataByIdentifier UDS  : $40 FlexrayPfadeLesen UDS  : $21 FlexrayPfadeLesen

_No arguments._

### STEUERN_AUTODETEKT_ABSCHALTUNG

Autodetektabschaltung für den entsprechenden Pfad X UDS  : $31     RoutineControl UDS  : $01     StartRoutine UDS  : $F77B   SteuernAutodetektAbschaltung

| Name | Type | Description |
| --- | --- | --- |
| PFAD_X | int | FR PFad 0x00 - 0x07 |

### STEUERN_HU_AKTIVIERUNGSLEITUNG

Die Aktivierungsleitung der HU wird vom ZGW gesteuert. Nur im BDC gültig. UDS   : $31 RoutineControl $01 StartRoutine $F759 Steuern HU Aktivierungsleitung

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | 0x00 - HU Aktivierungsleitung deaktivieren 0x01 - HU Aktivierungsleitung aktivieren |

### STEUERN_RESET_HU_AKTIVIERUNGSLEITUNG

Die Aktivierungsleitung der HU wird vom ZGW resetet. In diesem Fall wird die HU auf die Default Diagnoseschnittstelle B-CAN (L7) oder MOST (F10) zurückwechseln bzw. in den Applikationsmode zurückspringen UDS   : $31 RoutineControl $01 StartRoutine $F760 Reset HU Aktivierungsleitung

_No arguments._

### STATUS_LIFE_CYCLE_LESEN

Liefert den aktuellen Status des Lifecycle aus UDS   : $22 ReadDataByIdentifier $17 Lesen_Lifecycle_Status $35 Lesen_Lifecycle_Status

_No arguments._

### STEUERN_SIG_TN_MASTER

Steuerung der funktionalen Teilnetze nach LH Teilnetzbetrieb Master 10000756, PNW_1135 UDS    : $31   RoutineControl UDS    : $xx   01: StartRoutine, 02: StopRoutine UDS    : $1030 Steuern_SIG_TN_Master UDS    : $xx   Signalvorgabe per argument Byte 0 UDS    : $xx   Signalvorgabe per argument Byte 1 UDS    : $xx   Signalvorgabe per argument Byte 2 UDS    : $xx   Signalvorgabe per argument Byte 3 (zur Statusabfrage vergleiche Job STATUS_SIG_TN_MASTER)

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL | long | 4-Byte bitcodierter Wert wie laut Bordnetz Nachricht 'Zustand Fahrzeug' ('CON_VEH', CAN-ID 0x3C), Signal 'CTR_FKTN_PRTNT' definiert. Wert für SIGNAL kann dezimal oder Hexadezimal angegeben werden Beispiel: Konfiguration_EIN und Laden_EIN: argument 0x00008001 Ungueltig wenn Wert negativ |

### STATUS_SIG_TN_MASTER

Gibt den aktuellen Status der Signale Status_Basis_Teilnetze und Status_Funktionale_Teilnetze zurück. LH Teilnetzbetrieb Master 10000756, PNW_1186 UDS    : $22   ReadDataByIdentifier UDS    : $25   Byte #1 von SG-spez. DataIdentifier $2530 "STATUS_SIG_TN_MASTER" UDS    : $30   Byte #2 von SG-spez. DataIdentifier $2530 "STATUS_SIG_TN_MASTER"  Request 0x22,25,30 => liefert Antwort der Form 0x62,40,40,xx,yy

_No arguments._

### STATUS_GET_ECU_LIST_BUS_ID

Liste aller SGe, laut SVT-Soll an einem der Busse aus der Liste von Bus-Ids angeschlossen sind UDS  : $31 RoutineControl UDS  : $01 StartRoutine UDS  : $0201 GetEcuListBusId UDS  : $?? BusIds "Data"-Checkbox vor Ausführung des Jobs anhaken example: SG der Busse FlexRay=0x05 und Ethernet_Internal=0x1B argumente: 05 1B

| Name | Type | Description |
| --- | --- | --- |
| BUS_ID | binary | ID vom Bus Example--> FlexRay = 0x05 |

### STATUS_VCM_GET_ECU_LIST_ETHERNET

Liste aller SGe, die über ETHERNET ansprechbar sind UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListBodyCan UDS  : $24 VcmGetEcuListBodyCan

_No arguments._

### STATUS_TAS

Abfrage des TAS-Status UDS   : $22   ReadDataByIdentifier $26 $00

_No arguments._

### STATUS_ETHERNET_TOPOLOGY

Der Job dient zum Lesen der zuletzt im Fahrzeug ermittelten ETH-Topologie UDS   : $22 ReadDataByIdentifier $E2 DID ETHERNET_TOPOLOGY $51 DID ETHERNET_TOPOLOGY

_No arguments._

### STEUERN_ETHERNET_TOPOLOGY

Der Job dient zum Schreiben der aktuell im Fahrzeug ermittelten ETH-Topologie UDS  : $2E WriteDataByIdentifier $E2 DID ETHERNET_TOPOLOGY $51 DID ETHERNET_TOPOLOGY "Data"-Checkbox vor Ausführung des Jobs anhaken

| Name | Type | Description |
| --- | --- | --- |
| ETH_TOPOLOGY_DATA | binary | Array der Daten von der Ethernet Topologie Hinweis: kein Leerzeichen zwischen Nummern zu schreiben! Beispiel: 0x29 0x11 0x23 ... -> 291123... |

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

### TFBLOCKIDTEXTE

| WERT | TEXT |
| --- | --- |
| 0x01 | NetBlock |
| 0x02 | NetworkMaster |
| 0x03 | ConnectionMaster |
| 0x04 | PowerMaster |
| 0x05 | Vehicle |
| 0x06 | Diagnosis |
| 0x07 | VideoSwitch |
| 0x0F | EnhancedTestability |
| 0x10 | MMI |
| 0x11 | SVS |
| 0x14 | BCStatistic |
| 0x15 | ControlElements |
| 0x20 | AudioMaster |
| 0x22 | AudioAmplifier / AudioAmplifier_HU |
| 0x23 | HeadPhoneAmplifier |
| 0x24 | AuxiliaryInput |
| 0x26 | MicrophoneInput |
| 0x2E | AudioSinkRouter |
| 0x2F | AudioSourceRouter |
| 0x30 | AudioTapePlayer |
| 0x31 | AudioDiskPlayer |
| 0x32 | MultiMediaPlayer |
| 0x40 | AmFmTuner |
| 0x41 | TMCTuner |
| 0x42 | TVTuner |
| 0x43 | DABTuner |
| 0x44 | SatRadio |
| 0x50 | Telephone |
| 0x51 | GeneralPhoneBook / MobileOffice |
| 0x52 | Navigation / NavigationStd |
| 0x54 | Bluetooth |
| 0x6F | Monitor |
| 0x70 | PDC |
| 0x71 | Climate |
| 0x74 | EBA/Services |
| 0x80 | MMI_Terminal |
| 0x81 | Kombi_Terminal |
| 0x82 | HUD_Terminal |
| 0x90 | Telematik |
| 0x91 | InternalAudioSource |
| 0x92 | InternalAudioSink |
| 0xA0 | WLAN |
| 0xA1 | Kleer |
| 0xAB | TollCollect |
| 0xBE | Browser |
| 0xC0 | CANDevices |
| 0xC1 | MPEG-TS_Decoder |
| 0xC9 | Services |
| 0xCA | KombiMiscFKts |
| 0xCB | BordComputer |
| 0xCC | ADASInterface |
| 0xCD | NavigationInfo |
| 0xCE | iSpeech |
| 0xCF | HMIControl |
| 0xD0 | Security |
| 0xD1 | SystemFunction |
| 0xD2 | MultiMediaServer |
| 0xD3 | MassStorageControl |
| 0xD4 | SWUpdate |
| 0xD5 | VirtualControlElements |
| 0xD6 | Vehicle2 |
| 0xD7 | VideoConnectionMaster |
| 0xD8 | VideoSink |
| 0xD9 | EarlyVideoControl |
| 0xDA | MapControl |
| 0xDB | Titelematics |
| 0xDC | DataComIP |
| 0xDD | DUMM |
| 0xDE | TelematikTCU / jetzt TelematicAssist |
| 0xDF | TeleX |
| 0xE0 | KombiInterface |
| 0xE1 | HUDInterface |
| 0xE2 | Camera |
| 0xE3 | MOSTFileSystem |
| 0xE4 | XFCD / Jingle / SoundApplications |
| 0xE5 | CentralControlUnit / CentralControlSystem |
| 0xE6 | TripMemory |
| 0xE7 | RemoteApplication |
| 0xE8 | VideoOutSettings |
| 0xE9 | SoundSignalService |
| 0xEA | PDC |
| 0xEB | DebugApplication |
| 0xED | PIM |
| 0xEE | DataCommunication |
| 0xFF | Nicht definiert |

### TWAKEUPSTATUS

| WERT | TEXT | TEXT2 |
| --- | --- | --- |
| 0 | not initialised | off |
| 1 | SG will be waked up | on |
| 2 | SG are waked up | critical |

### ARG_0XF190

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VIN | - | - | string[17] | - | - | 1 | 1 | 0 | - | - | Fahrgestellnummer / VIN (17 Byte) |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0x01 | FlashEnabled | FlashEnabled |
| 0xFF | ungültiger Betriebsmode | ungültig |

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
| 0x02FF10 | Primaerer Anwendungs-Dummy DTC | 1 |
| 0x801C00 | VcmErrorWriteVcmData - Schreibfehler: Schreibzugriff auf VCM-Daten | 0 |
| 0x801C01 | VcmErrorReadVcmData - Lesefehler: Lesezugriff auf VCM Daten | 0 |
| 0x801C02 | VcmErrorNoTasResponse - Testerassistent ist beschäftigt oder antwortet nicht | 0 |
| 0x801C03 | VcmErrorSignatureCheck - Signaturprüfung: Fehlerhafte Signatur beim Schreiben eines Datums | 0 |
| 0x801C04 | VcmErrorSignatureCreation - Signaturerzeugung: Es konnte keine Signatur für ein zu lesendes Datum erzeugt werden | 0 |
| 0x801C05 | VcmResultSvtCheck - Identitätskontrolle: Es sind Unterschiede zwischen der SVT-Ist und SVT-Soll erkannt worden. | 0 |
| 0x801C06 | VcmErrorSvtGeneration - SVT-Ist Generierung: SVT-ist konnte nicht erzeugt werden | 0 |
| 0x801C07 | VcmErrorGeneratingEcuList - Steuergerätetauscherkennung: Liste getauschter Steuergeräte konnte nicht erstellt werden | 0 |
| 0x801C10 | Anforderung Reset Klemme 30F Wecker | 1 |
| 0x801C11 | Anforderung Abschaltung Klemme 30F Wecker | 1 |
| 0x801C12 | Versenden Powerdown | 1 |
| 0x801C13 | Anforderung Reset Klemme 30F Einschlafen | 1 |
| 0x801C14 | Anforderung Abschaltung Klemme 30F Einschlafen | 1 |
| 0x801C15 | Fehlerhaftes Einschlafen bei 30B | 1 |
| 0x801C16 | Fehlerhaftes Einschlafen im Zustand Standfunktionen_Kunden_nicht_im_Fzg | 1 |
| 0x801C17 | Fehlerhaftes Einschlafen im Zustand Parken_BN_iO | 1 |
| 0x801C18 | Anforderung Zustand Parken_BN_niO Einschlafverhinderer | 1 |
| 0x801C19 | Fehlerhaftes Einschlafen im Zustand Parken_BN_niO | 1 |
| 0x801C20 | Zentraler Fehlerspeicher voll | 1 |
| 0x801C21 | Softwarefehler im Modul Diagnosemaster | 0 |
| 0x801C22 | Verlust der persistenten abgelegten Daten des Zentralen Fehlerspeicher(CRC Fehler) | 0 |
| 0x801C31 | TAS-Softwarefehler | 0 |
| 0x801C60 | Flexray Autolern nicht in Ordnung | 1 |
| 0x801C71 | GW Tabelle nicht in Ordnung | 1 |
| 0x801C73 | Steuergerät internes Kommunikationsprotokoll zwischen Haupt- und Sekundärkontroller gestört | 0 |
| 0x801C74 | Bidirektionaler Messagetunnel Aktiv | 1 |
| 0x801C75 | Lifecycle Modus CODING ist aktiv | 1 |
| 0x801C76 | Uneindeutiges Routing | 1 |
| 0x801C77 | Debug CAN ist auf den Diagnose-CAN geschaltet | 0 |
| 0x801C78 | Quarz Fehler: HW Fehler - Quarz schwingt nicht | 0 |
| 0x801C79 | Sniffing auf HU Port aktiv | 0 |
| 0x801C7A | Ausgabe von BDC-interner Kommunikation auf OBD | 0 |
| 0x801C7B | Mirror Mode im Ethernet Switch aktiv | 0 |
| 0x801C7C | Serial Logging Active | 1 |
| 0x801C7D | Short Circuit on Ethernet WUP line | 1 |
| 0x801C7E | EEPROM_SPI_Error_DTC | 0 |
| 0xCD040A | FaCanBusOff | 0 |
| 0xCD040B | KCanPhyError  | 0 |
| 0xCD0414 | KCanBusOff | 0 |
| 0xCD041E | IuKCanBusOff | 0 |
| 0xCD041F | Physikalischer Fehler auf Flexraybus Branch 0 | 0 |
| 0xCD0420 | Fehler des Flexraykontroller auf Flexraybus | 0 |
| 0xCD0421 | Physikalischer Fehler auf Flexraybus Branch 1 | 0 |
| 0xCD0423 | Physikalischer Fehler auf Flexraybus Branch 2 | 0 |
| 0xCD0425 | Physikalischer Fehler auf Flexraybus Branch 3 | 0 |
| 0xCD0427 | Physikalischer Fehler auf Flexraybus Branch 4 | 0 |
| 0xCD0429 | Physikalischer Fehler auf Flexraybus Branch 5 | 0 |
| 0xCD042B | Physikalischer Fehler auf Flexraybus Branch 6 | 0 |
| 0xCD042D | Physikalischer Fehler auf Flexraybus Branch 7 | 0 |
| 0xCD042F | Physikalischer Fehler auf Flexraybus Branch 0 | 0 |
| 0xCD0431 | Physikalischer Fehler auf Flexraybus Branch 1 | 0 |
| 0xCD0433 | Physikalischer Fehler auf Flexraybus Branch 2 | 0 |
| 0xCD0435 | Physikalischer Fehler auf Flexraybus Branch 3 | 0 |
| 0xCD0437 | Physikalischer Fehler auf Flexraybus Branch 4 | 0 |
| 0xCD0439 | Physikalischer Fehler auf Flexraybus Branch 5 | 0 |
| 0xCD043B | Physikalischer Fehler auf Flexraybus Branch 6 | 0 |
| 0xCD043D | Physikalischer Fehler auf Flexraybus Branch 7 | 0 |
| 0xCD043F | NAK-Empfängerknoten:hat Nachricht nicht abgenommen;Puffer voll | 1 |
| 0xCD0440 | Überwachungsschaltung hat Reset ausgelöst | 0 |
| 0xCD0441 | MOST:Ringbruch | 1 |
| 0xCD0442 | TempShutdown-Sender/Empfängerbaustein(FOT):Temperatur übersteigt kritische Schwelle | 1 |
| 0xCD0443 | TempShutdownExtern-Sender/Empfängerbaustein(FOT):Temperatur übersteigt kritische Schwelle in anderem SG | 1 |
| 0xCD0445 | INIC Reset-Host hat bei fatalem Fehler vom INIC einen Reset ausgelöst | 0 |
| 0xCD0468 | BCanBusOff | 0 |
| 0xCD0487 | Synchronisationsvorgang fehlgeschlagen, CC war zum Zeitpunkt der Aufhebung der Fehlerspeichersperre noch nicht synchron | 1 |
| 0xCD0514 | B2CanBusOff | 0 |
| 0xCD0600 | Ethernet Unexpected Link Down | 1 |
| 0xCD0602 | Ethernet Signal Quality Low | 1 |
| 0xCD0603 | Ethernet Link Reset | 1 |
| 0xCD0604 | Ethernet Unexpected Link Up | 1 |
| 0xCD0BFF | Primaerer Netzwerk-Dummy DTC | 1 |
| 0xCD1400 | Empfang keine Fehlerspeichersperre | 1 |
| 0xCD1410 | Empfang keine Systemzeit | 1 |
| 0xCD1411 | Signal  Status_Antrieb_Fahrzeug  aus 0x3F9: Ausfall oder ungültig | 1 |
| 0xCD1412 | Signal  Nachlaufzeit_Stromversogung  aus 0x3BE: Ausfall oder ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1707 | DiagAdr | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x1709 | MOSTMesHeader | text | - | 6 | - | - | - | - |
| 0x170A | FOTTemp | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x170B | NPR | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4040 | Bios Fehler Ursache | 0-n | high | 0xFFFFFFFF | TabBiosFehlercodes | 1 | 1 | 0 |
| 0x4082 | Unterspannung an Vcc | 0-n | high | 0xFF | TabVccUndervoltage | 1 | 1 | 0 |
| 0x4083 | Unterspannung an Vio | 0-n | high | 0xFF | TabVioUndervoltage | 1 | 1 | 0 |
| 0x4084 | Unterspannung an Vbat. Keine Energieversorgung fuer interne Regler und keine Erkennung von Wakeup Symbole | 0-n | high | 0xFF | TabVbatUndervoltage | 1 | 1 | 0 |
| 0x4085 | Uebertemperatur | 0-n | high | 0xFF | TabOvertemperature | 1 | 1 | 0 |
| 0x4086 | TxEn ist permanent unten | 0-n | high | 0xFF | TabTxEnIsPermanentlyLow | 1 | 1 | 0 |
| 0x4087 | Bus Line Plus ist kurzgeschlossen mit GND | 0-n | high | 0xFF | TabBpLineShortedToGND | 1 | 1 | 0 |
| 0x4088 | Bus Line Plus ist kurzgeschlossen mit Versorgungsspannung | 0-n | high | 0xFF | TabBpLineShortedToSupplyVoltage | 1 | 1 | 0 |
| 0x4089 | Bus Line Minus ist kurzgeschlossen mit GND | 0-n | high | 0xFF | TabBmLineShortedToGND | 1 | 1 | 0 |
| 0x408A | Bus Line Minus ist kurzgeschlossen mit Versorgungsspannung | 0-n | high | 0xFF | TabBmLineShortedToSupplyVoltage | 1 | 1 | 0 |
| 0x408B | Bus Line Minus und Plus sind kurzgeschlossen | 0-n | high | 0xFF | TabBusLoadTooHigh | 1 | 1 | 0 |
| 0x408C | Physische Ende auf diesem Branch ist nicht abgeschlossen | 0-n | high | 0xFF | TabBusLoadTooLow | 1 | 1 | 0 |
| 0x408E | Flexray Lern Mode | 0-n | high | 0xFF | TabFlexRayLernMode | 1 | 1 | 0 |
| 0x408F | DIAG+ per Hand manipuliert | 0-n | high | 0xFF | TabFlexRayLernDiagPlus | 1 | 1 | 0 |
| 0x4099 | Bus Line defekt | 0-n | high | 0xFF | TabBusLineDefekt | 1 | 1 | 0 |
| 0x4100 | UBat - Betriebsspannung am SG | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4180 | Mirror Mode Status | 0-n | high | 0xFFFF | TabPortMirrorStatus | 1 | 1 | 0 |
| 0x4181 | Port Link Off Status | 0-n | high | 0xFFFF | TabPortLinkStatus | 1 | 1 | 0 |
| 0x4182 | Port Link Up Status | 0-n | high | 0xFFFF | TabPortLinkStatus | 1 | 1 | 0 |
| 0x4185 | Link Reset Status | 0-n | high | 0xFFFF | TabPortLinkStatus | 1 | 1 | 0 |
| 0x4186 | Port 1 SQI Status | 0-n | high | 0xFF | TabPortSQIStatus | 1 | 1 | 0 |
| 0x4187 | Port 2 SQI Status | 0-n | high | 0xFF | TabPortSQIStatus | 1 | 1 | 0 |
| 0x4188 | Port 3 SQI Status | 0-n | high | 0xFF | TabPortSQIStatus | 1 | 1 | 0 |
| 0x4189 | Port 4 SQI Status | 0-n | high | 0xFF | TabPortSQIStatus | 1 | 1 | 0 |
| 0x418A | Port 5 SQI Status | 0-n | high | 0xFF | TabPortSQIStatus | 1 | 1 | 0 |
| 0x418B | Port 6 SQI Status | 0-n | high | 0xFF | TabPortSQIStatus | 1 | 1 | 0 |
| 0x418C | Port 7 SQI Status | 0-n | high | 0xFF | TabPortSQIStatus | 1 | 1 | 0 |
| 0x418D | Port 8 SQI Status | 0-n | high | 0xFF | TabPortSQIStatus | 1 | 1 | 0 |
| 0x4300 | Uneindeutigkeit_1: SG Diagnose Adresse | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4301 | Uneindeutigkeit_1: gleichwertigen Bussen | 0-n | high | 0xFFFFFFFF | TabBusMaske | 1 | 1 | 0 |
| 0x4302 | Uneindeutigkeit_2: SG Diagnose Adresse | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4303 | Uneindeutigkeit_2: gleichwertigen Bussen | 0-n | high | 0xFFFFFFFF | TabBusMaske | 1 | 1 | 0 |
| 0x4485 | Lesefehlercode | 0-n | high | 0xFF | TabVcmReadErrorCode | 1 | 1 | 0 |
| 0x4486 | Schreibfehlercode | 0-n | high | 0xFF | TabVcmWriteErrorCode | 1 | 1 | 0 |
| 0x4488 | RoutineId des fehlerhaften DiagnoseServices | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4489 | SubRoutineId des fehlerhaften DiagnoseServices | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x448A | ControlId des fehlerhaften DiagnoseServices | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448B | EcuStatus_0 - SGInfoFlagsByte2 des 1. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448C | EcuStatus_1 - SGInfoFlagsByte2 des 2. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448D | EcuStatus_2  - SGInfoFlagsByte2 des 3. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448E | EcuStatus_3  - SGInfoFlagsByte2 des 4. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448F | EcuStatus_4  - SGInfoFlagsByte2 des 5. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4490 | EcuId_0 - Steuergeraeteadresse des 1. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4491 | EcuId_1 - Steuergeraeteadresse des 2. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4492 | EcuId_2 - Steuergeraeteadresse des 3. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4493 | EcuId_3  - Steuergeraeteadresse des 4. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4494 | EcuId_4 - Steuergeraeteadresse des 5. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4495 | EcuId_5 - Steuergeraeteadresse des 6. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4496 | EcuCounter - Anzahl der SGn mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4497 | SVT_Ist Generierung Fehlercode | 0-n | high | 0xFF | TabVcmSvtGenerationErrorCode | 1 | 1 | 0 |
| 0x4498 | Liste getauschter Steuergeräte Generierung Fehlercode | 0-n | high | 0xFF | TabVcmSerialGenerationErrorCode | 1 | 1 | 0 |
| 0x4499 | Diagnoseadresse der Anfrage | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x44A0 | EcuStatus_5  - SGInfoFlagsByte2 des 6. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4502 | Weckende SG - Diagnoseadresse des SGs, dass das Fahrzeug geweckt hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4503 | Weckgrund | 0-n | high | 0xFF | TabWeckgrund | 1 | 1 | 0 |
| 0x4504 | Wachhaltende SG_1 - Diagnoseadresse des 1. SGs, dass das Fahrzeug wachgehalten hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4505 | Wachhaltende SG_2 - Diagnoseadresse des 2. SGs, dass das Fahrzeug wachgehalten hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4506 | Wachhaltende SG_3 - Diagnoseadresse des 3. SGs, dass das Fahrzeug wachgehalten hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4507 | Wachhaltende SG_4 - Diagnoseadresse des 4. SGs, dass das Fahrzeug wachgehalten hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4508 | Wachhaltegrund des 1. SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4509 | Wachhaltegrund des 2. SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x450A | Wachhaltegrund des 3. SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x450B | Wachhaltegrund des 4. SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4518 | Wachhaltegrund des 1. SGs | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4519 | Wachhaltegrund des 2. SGs | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x451A | Wachhaltegrund des 3. SGs | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x451B | Wachhaltegrund des 4. SGs | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4581 | Steuergeraeteadresse des meldenden SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4583 | Grund fuer nicht kompletten Systemkontext | 0-n | high | 0xFF | TabGrundSystemkontextNichtKomplett | 1 | 1 | 0 |
| 0x4584 | Fehlerhaftes Softwaremodul | 0-n | high | 0xFF | TabFehlerhaftesSoftwaremodul | 1 | 1 | 0 |
| 0x4602 | Fehlerhaftes Softwaremodul TAS | 0-n | high | 0xFF | TabFehlerhaftesSoftwaremodulTAS | 1 | 1 | 0 |
| 0x4683 | FZGS-Fehlercode Client | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### GROBNAME

| ADR | GROBNAME |
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
| 0xA9 | CDCDSP |
| 0xAB | MMCDSP |
| 0xB1 | FZM-Slave Body-CA |
| 0xB2 | FZM-Slave FA-CAN |
| 0xB3 | FZM-Slave FlexRay |
| 0xB5 | FZM-Slave A-CAN |
| 0xB7 | FZM-Slave Safety-CAN |
| 0xB9 | FZM-Slave I&K-CAN |
| 0xBA | FZM-Slave LE-CAN |
| 0xBB | FZM-Slave LP-CAN |
| 0xBC | FZM-Slave B2-CAN |
| 0xBD | FZM-Slave Ethernet |
| 0xC1 | Teilnetz-Slave Body-CAN |
| 0xC2 | Teilnetz-Slave FA-CAN |
| 0xC3 | Teilnetz-Slave FlexRay |
| 0xC5 | Teilnetz-Slave A-CAN |
| 0xC7 | Teilnetz-Slave Safety-CAN |
| 0xC9 | Teilnetz-Slave I&K-CAN |
| 0xCA | Teilnetz-Slave LE-CAN |
| 0xCB | Teilnetz-Slave LP-CAN |
| 0xCC | Teilnetz-Slave B2-CAN |
| 0xCD | Teilnetz-Slave Ethernet |
| 0xXY | ???? |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x100000 | VcmSoftwareError | 0 |
| 0x100001 | VcmResultSvtCheck - Identitätskontrolle: Es sind Unterschiede zwischen der SVT-Ist und SVT-Soll erkannt worden. | 0 |
| 0x1000FF | VCM Logger Fehlerspeichereintrag | 0 |
| 0x100100 | Kontakt zu FZM Slave verloren | 0 |
| 0x100101 | Einschlafbestaetigungen nicht vollstaendig | 0 |
| 0x100102 | Ungueltige LocalSleepReadiness-Botschaft empfangen | 0 |
| 0x100103 | Shutdown abgebrochen - Durchstart erfolgt | 0 |
| 0x100104 | HW Weckgrund ZGW | 0 |
| 0x100105 | AliveMessageSender kann nicht auf FA Can schicken | 0 |
| 0x100108 | Functional subnet deactivation due to the startability limit | - |
| 0x100109 | Ignoring the functional subnet request due to the startability limit | - |
| 0x10010A | Unauthorized request of a functional subnet | 0 |
| 0x10010B | Faulty deregistration behavior | 0 |
| 0x10010C | Faulty signal StatusConditionVehicle | 0 |
| 0x10010D | Faulty signal OSFG | 0 |
| 0x10010E | Faulty signal StatusBus | 0 |
| 0x1001FF | FZM Logger Fehlerspeichereintrag | 0 |
| 0x100200 | Fehlermeldung mit falschem Format empfangen | 0 |
| 0x100201 | CC-Meldung mit falschem Format empfangen | 0 |
| 0x100202 | DM-Softwarefehler-Info kritisch | 0 |
| 0x100203 | DM-Softwarefehler-Info Warnung | 0 |
| 0x100204 | Botschaftsueberwachung: Systemkontextsignal ausgeblieben | 0 |
| 0x1002FF | Diagnose-Master Logger Fehlerspeichereintrag | 0 |
| 0x100300 | Beauftragung konnte nicht durchgeführt werden, da TAS bereits beschäftigt | 0 |
| 0x100301 | TAS Error | 0 |
| 0x1003FF | TAS Logger Fehlerspeichereintrag | 0 |
| 0x100400 | Externes System versucht, F30 zu initiieren, ohne authentisiert zu sein | 0 |
| 0x100401 | CSM sendet bei F60 ungueltigen Fingerprint | 0 |
| 0x100403 | CSM sendet bei F60 ungueltige Response auf MSM-Challenge | 0 |
| 0x100404 | Externes System sendet bei F310 mit falschem Schluessel verschluesselte Liste | 0 |
| 0x100405 | Externes System sendet bei F310 ungueltige Liste | 0 |
| 0x100406 | CSM sendet bei F60 oder F70 keine Antwort | 0 |
| 0x100407 | Externes System sendet bei F210 ungueltiges Zertifikat | 0 |
| 0x100408 | Externes System sendet bei F210 oder F300 ungueltige Response auf MSMChallenge | 0 |
| 0x100409 | Zugangs-STG sendet bei F300 ungueltiges B2VSec-Zertifikat | 0 |
| 0x100410 | Zertifikate auf dem ZGW sind nicht gueltig | 0 |
| 0x100411 | Interner Fehler Systemfunktion FSC | 0 |
| 0x1004FF | MSM Logger Fehlerspeichereintrag | 0 |
| 0x100500 | ENET Switch Temperatur | 0 |
| 0x100501 | Unerwarteter Ethernet Link Verlust | 0 |
| 0x100502 | Ethernet Tx-Frame zu groß | 0 |
| 0x100503 | Ethernet Tx-FIFO overflow | 0 |
| 0x100504 | Ethernet Rx-Queue overflow | 0 |
| 0x100505 | Ethernet Rx-Frame overflow | 0 |
| 0x100506 | UGW SomeIP queue overflow | 0 |
| 0x100510 | Änderung in der Standardkonfiguration des Ethernet-Ports | 0 |
| 0x100520 | Konfiguration des Ethernet-Ports | 0 |
| 0x100530 | Ethernet Switch wurde zur Problembehandlung neu gestartet | 0 |
| 0x1005FF | HSFZ Logger Fehlerspeichereintrag | 0 |
| 0x100600 | Flexray Protokoll Startup Zeit ist zu hoch | 0 |
| 0x100601 | Unerwarteter asynchron Zustand auf Flexraybus | 0 |
| 0x100602 | Verletzung der Frame Slot Grenze wurde erkannt | 0 |
| 0x100603 | FlexRay Frame mit falscher Payload empfangen | 0 |
| 0x100604 | Ein FlexRay Error ist aufgelaufen | 0 |
| 0x100605 | Frame Header Index wird mehrmals von Message Buffers verwendet | 0 |
| 0x100606 | Starcoupler Failure | 0 |
| 0x100607 | Buffer FlexRay Queue Full | 0 |
| 0x1006FF | FlexRay Logger Fehlerspeichereintrag | 0 |
| 0x100700 | Sekundaerer Anwendungs-Dummy DTC | 0 |
| 0x100701 | Sekundaerer Netzwerk-Dummy DTC | 0 |
| 0x1007FF | DEM Logger Fehlerspeichereintrag | 0 |
| 0x1009FF | Ethernet Logger Fehlerspeichereintrag | 0 |
| 0x100AFF | TP-Router Logger Fehlerspeichereintrag | 0 |
| 0x100BFF | MOST Logger Fehlerspeichereintrag | 0 |
| 0x100CFF | CAN Logger Fehlerspeichereintrag | 0 |
| 0x100DFF | Self-Diagnosis Logger Fehlerspeichereintrag | 0 |
| 0x100E00 | Komponente vom Lifecycle ausgeschlossen | 0 |
| 0x100EFF | Lifecycle Logger Fehlerspeichereintrag | 0 |
| 0x100F00 | Eeprom Failure | 0 |
| 0x100FFF | EEPROM-Manager Logger Fehlerspeichereintrag | 0 |
| 0x101000 | OSEK OS ErrorHook Fehler | 0 |
| 0x101001 | OSEK OS Stack-Overflow Fehler | 0 |
| 0x101002 | Assert | 0 |
| 0x101003 | OSEK OS Board Invalid | 0 |
| 0x101004 | Message Tunnel deaktiviert | 0 |
| 0x101005 | PLL Fehler: PLL-Lock ging verloren, bevor PLL-Routine aufgerufen wurde | 0 |
| 0x101006 | PLL Fehler: PLL lockt nicht bei Umstellen | 0 |
| 0x101007 | PLL Fehler: SW lauft im Normalbetrieb und PLL Lock geht verloren | 0 |
| 0x101008 | nicht auflösbares uneindeutiges Routing - SG nicht in der SVT Soll Tabelle | 0 |
| 0x101010 | SIF Error | 0 |
| 0x101011 | PFM Error | 0 |
| 0x101012 | TM Error | 0 |
| 0x101013 | CRM Error | 0 |
| 0x101014 | VMM Error | 0 |
| 0x101020 | Console logging is activ | 0 |
| 0x101030 |  KL15-Versuch ohne Erfolg  | 0 |
| 0x101031 |  KL50-Versuch ohne Erfolg  | 0 |
| 0x101040 | ZGW SW DTC | 0 |
| 0x101041 | UGW Queue Full | 0 |
| 0x1011FF | Logger Fehlerspeichereintrag fuer sonstige ZGW Komponente | 0 |
| 0x801030 | Fehler Systemfunktion Fahrzeug-Security Client | 0 |
| 0x930001 | UnderVoltage Error-Versorgungsspannung: Mindestwert unterschritten  | 0 |
| 0x930006 | Sudden Light Off-MOST: Licht geht unerwartet aus | 0 |
| 0x930007 | Unlock Long-MOST: Synchronisation (PLL) arbeitet nicht korrekt | 0 |
| 0x930008 | ConfigOk not Time-Systemzustand Ok nicht fristgerecht erkannt | 0 |
| 0x930009 | NSR EI Reset | 0 |
| 0xCD0601 | Ethernet CRC Error | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x170C | Ubat | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4080 | Anzahl der Verletzungen | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4081 | Anzahl der Synchronisationsversuche | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x408D | Zeit der Startup Phase | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4090 | Received payload length | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4091 | Frame description index | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4092 | CHI Error Flag Register | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4093 | Protocol Interrupt Flag Register 0 | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4094 | Protocol Interrupt Flag Register 1 | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4095 | Wrong Data Offset | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4096 | Buffer Index der mehrmals auftritt | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4097 | Erster Buffer in dem der Buffer Index vorkommt | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4098 | Zweiter Buffer in dem der Buffer Index vorkommt | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x40FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4101 | Ethernet Port | 0-n | high | 0xFF | TabPort | 1 | 1 | 0 |
| 0x4102 | Uebertragungsgeschwindigkeit | 0-n | high | 0xFF | TabSpeed | 1 | 1 | 0 |
| 0x4103 | Auto-Negotiation | 0-n | high | 0xFF | TabAutoNegotiation | 1 | 1 | 0 |
| 0x4104 | Polaritaet | 0-n | high | 0xFF | TabMDIStatus | 1 | 1 | 0 |
| 0x4105 | Automatische Erkennung der Polaritaet | 0-n | high | 0xFF | TabAutoPolaritaet | 1 | 1 | 0 |
| 0x4106 | Duplex | 0-n | high | 0xFF | TabDuplex | 1 | 1 | 0 |
| 0x417F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4180 | Port der unterbrochenen Verbindung | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4181 | Port 1 CRC Error Status | 0-n | high | 0xFF | TabPortCRCErrorStatus | 1 | 1 | 0 |
| 0x4182 | Port 2 CRC Error Status | 0-n | high | 0xFF | TabPortCRCErrorStatus | 1 | 1 | 0 |
| 0x4183 | Port 3 CRC Error Status | 0-n | high | 0xFF | TabPortCRCErrorStatus | 1 | 1 | 0 |
| 0x4184 | Port 4 CRC Error Status | 0-n | high | 0xFF | TabPortCRCErrorStatus | 1 | 1 | 0 |
| 0x4185 | Port 5 CRC Error Status | 0-n | high | 0xFF | TabPortCRCErrorStatus | 1 | 1 | 0 |
| 0x4186 | Port 6 CRC Error Status | 0-n | high | 0xFF | TabPortCRCErrorStatus | 1 | 1 | 0 |
| 0x4187 | Port 7 CRC Error Status | 0-n | high | 0xFF | TabPortCRCErrorStatus | 1 | 1 | 0 |
| 0x4188 | Port 8 CRC Error Status | 0-n | high | 0xFF | TabPortCRCErrorStatus | 1 | 1 | 0 |
| 0x41FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4281 | Runlevel of excluded lifecycle component | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4282 | Index in runlevel of excluded lifecycle component | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4283 | Lifecycle state of excluded component | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4284 | Lifecycle-Modus | 0-n | high | 0xFF | TabLifecycleMode | 1 | 1 | 0 |
| 0x42FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4304 | Uneindeutigkeit_1: SG Diagnose Adresse | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4305 | Uneindeutigkeit_1: gleichwertigen Bussen | 0-n | high | 0xFFFFFFFF | TabBusMaske | 1 | 1 | 0 |
| 0x4306 | Uneindeutigkeit_2: SG Diagnose Adresse | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4307 | Uneindeutigkeit_2: gleichwertigen Bussen | 0-n | high | 0xFFFFFFFF | TabBusMaske | 1 | 1 | 0 |
| 0x437F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x43FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x447F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4481 | SoftwareModule | 0-n | high | 0xFF | TabSoftwareModul | 1 | 1 | 0 |
| 0x4482 | SoftwareErrorCode | 0-n | high | 0xFF | TabSoftwareError | 1 | 1 | 0 |
| 0x4483 | SoftwareErrorData | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x448B | EcuStatus_0 - SGInfoFlagsByte2 des 1. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448C | EcuStatus_1 - SGInfoFlagsByte2 des 2. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448D | EcuStatus_2  - SGInfoFlagsByte2 des 3. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448E | EcuStatus_3  - SGInfoFlagsByte2 des 4. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448F | EcuStatus_4  - SGInfoFlagsByte2 des 5. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4490 | EcuId_0 - Steuergeraeteadresse des 1. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4491 | EcuId_1 - Steuergeraeteadresse des 2. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4492 | EcuId_2 - Steuergeraeteadresse des 3. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4493 | EcuId_3  - Steuergeraeteadresse des 4. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4494 | EcuId_4 - Steuergeraeteadresse des 5. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4495 | EcuId_5 - Steuergeraeteadresse des 6. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4496 | EcuCounter - Anzahl der SGn mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x44A0 | EcuStatus_5  - SGInfoFlagsByte2 des 6. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x44FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4501 | FZM Slave ID | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x450C | HW Durchstartgrund | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x450D | Error Counter Tx | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x450E | Error Counter Rx | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x450F | Transceiver Software State | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4510 | Transceiver State | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4511 | Return Value | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4512 | HW address | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4513 | HW Weckgrund | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4515 | Status Vehicle | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4516 | SubnetID | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4517 | ClientID | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4520 | Status Bus | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4521 | Status BasisSubnets | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4522 | Status FunctionalSubnets | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4551 |  Grund des erfolglosen KL15-Versuches  | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4552 |  Grund des erfolglosen KL50-Versuches  | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x457F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4581 | Steuergeraeteadresse | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4582 | illegales Format der Nachricht | 0-n | high | 0xFF | TabIllegalesNachrichtenformat | 1 | 1 | 0 |
| 0x4585 | allgemeiner Fehlercode fuer Softwarefehler | 0-n | high | 0xFF | TabSWFehlerCode | 1 | 1 | 0 |
| 0x4586 | Nachrichten-ID | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4587 | spezieller Fehlercode fuer Softwarefehler | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x45FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4601 | Aktiver Auftraggeber | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4603 | Neuer Auftraggeber | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4604 | TAS Error status | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x467F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4680 | FZGS-Fehlercode | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4681 | ID des fehler-meldenden SGs | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4682 | ID des fehlerhaften SGs | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4683 | FZGS-Fehlercode Client | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x46FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x477F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x47FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4800 | ErrorHook verursachender Task | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4801 | ErrorHook Callee | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4802 | ErrorHook Status | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4803 | Stack-Overflow verursachender Task | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4804 | Adresse der AssertionMessage | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4805 | Adresse des AssertionFile | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4806 | Adresse der AssertionZeile | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4807 | Board Invalid Stack Pointer | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4808 | Board Invalid SRR0 | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4809 | Board Invalid Reason | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x480A | Anzahl der Versuche PLL zu rekonfigurieren | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x480B | Erfolgreicher Algorithmus | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x480C | Schritt in der PLL-Routine in dem PLL nicht lockte | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x480D | Assertion Return Address | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4810 | Assert Return Adress | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4880 | Loglevel GLOBAL | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4881 | Bus ID | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4882 | Detail | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4883 | Details1 | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4884 | Details2 | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x48FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x497F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4980 | FuSi Local status | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4981 | FuSi Remote status | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4982 | FuSi TcScFsStatus | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4983 | FuSi LceScFsStatus | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4984 | FuSi SignalProviderStatus | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4985 | FuSi Component | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4986 | FuSi Index | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4987 | FuSi NumberOfEvents | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4988 | FuSi VmmOffset | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4989 | FuSi PfmExpectedToken | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x498A | FuSi PfmGivenToken | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x498B | FuSi VmmValue | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x498C | FuSi VmmInvertedValue | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x01 | ERROR_ECU_RESPONSE_WRONG_DATA_LENGTH |
| 0x02 | ERROR_ECU_RESPONSE_WRONG_DATA |
| 0x03 | ERROR_SESSION_NOT_VALID |
| 0x04 | ERROR_RESPONSE_INCORRECT_LEN |
| 0x05 | ERROR_ECU_WRONG_RESPONSE |
| 0x06 | ERROR_ECU_INCORRECT_COUNT |
| 0x07 | ERROR_ECU_INCORRECT_MESSAGE_LENGTH |
| 0x08 | ZEFIX |
| 0x09 | ERROR_ECU_RESPONSE_WRONG_FA_DATA_FORMAT |
| 0xXY | ERROR_UNKNOWN |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SYSTEMZEIT_LESEN | 0x1701 | STAT_SYSTEMZEIT_WERT | resetgesicherter Sekundenzähler | sek | - | high | unsigned long | - | 1 | 1 | 0 | 0x10 | 22 | - | - |
| STEUERN_VIN_SCHREIBEN | 0xF190 | - | Setzen der VIN. | - | VIN_SCHREIBEN | - | - | - | - | - | - | 0x10 | 2E | ARG_0xF190 | - |

### TABAUTONEGOTIATION

| WERT | UWTEXT |
| --- | --- |
| 0x00 | HU Auto-Negotiation nicht erledigt |
| 0x01 | HU Auto-Negotiation erledigt |
| 0x02 | OBD Auto-Negotiation nicht erledigt |
| 0x03 | OBD Auto-Negotiation erledigt |
| 0xFF | ungueltiger Wert |

### TABAUTOPOLARITAET

| WERT | UWTEXT |
| --- | --- |
| 0x00 | HU Auto-MDI-X off |
| 0x01 | HU Auto-MDI-X on |
| 0x02 | OBD Auto-MDI-X off |
| 0x03 | OBD Auto-MDI-X on |
| 0xFF | ungueltiger Wert |

### TABBASISTN

| WERT | BASISTN |
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

### TABBIOSFEHLERCODES

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | NO_BIOS_ERROR |
| 0x00000001 | CO_MICRO_COMMUNIKATION |
| 0x00000002 | SPI_COMMUNIKATION |
| 0x00000004 | INPUT |
| 0x00000008 | OUPUT |
| 0x00000010 | CAN |
| 0x00000020 | SCI |
| 0x00000040 | IDLE_HAENDLER |
| 0x00000080 | POWER_SUPPLY |
| 0x00000100 | SLEEP |
| 0x00000200 | ETHERNET_FEC |
| 0x00000400 | ETHERNET_PHY |
| 0x00000800 | BOARD_HW_STAND |
| 0x00001000 | EEPROM |
| 0x00002000 | MOST_PHY |
| 0xFFFFFFFF | ALL_BIOS_ERROR |

### TABBMLINESHORTEDTOGND

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBMLINESHORTEDTOSUPPLYVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBPLINESHORTEDTOGND

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBPLINESHORTEDTOSUPPLYVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBUSINDEX

| WERT | TEXT |
| --- | --- |
| 0x01 | B-CAN |
| 0x02 | FA-CAN |
| 0x03 | K-CAN |
| 0x04 | D-CAN |
| 0xFF | Unbekannt |

### TABBUSLINEDEFEKT

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBUSLOADTOOHIGH

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBUSLOADTOOLOW

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBUSMASKE

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | Default Wert |
| 0x00000001 | B-CAN |
| 0x00000002 | FA-CAN |
| 0x00000003 | B-CAN und FA-CAN |
| 0x00000004 | K-CAN/IuK-CAN |
| 0x00000005 | K-CAN/IuK-CAN und B-CAN |
| 0x00000006 | K-CAN/IuK-CAN und FA-CAN |
| 0x00000007 | K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00000008 | D-CAN |
| 0x00000009 | D-CAN und B-CAN |
| 0x0000000A | D-CAN und FA-CAN |
| 0x0000000B | D-CAN und FA-CAN und B-CAN |
| 0x0000000C | D-CAN und K-CAN/IuK-CAN |
| 0x0000000D | D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000000E | D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000000F | D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00000010 | ZSG-CAN |
| 0x00000011 | ZSG-CAN und B-CAN |
| 0x00000012 | ZSG-CAN und FA-CAN |
| 0x00000013 | ZSG-CAN und B-CAN und FA-CAN |
| 0x00000014 | ZSG-CAN und K-CAN/IuK-CAN |
| 0x00000015 | ZSG-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x00000016 | ZSG-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x00000017 | ZSG-CAN und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00000018 | ZSG-CAN und D-CAN |
| 0x00000019 | ZSG-CAN und D-CAN und B-CAN |
| 0x0000001A | ZSG-CAN und D-CAN und FA-CAN |
| 0x0000001B | ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000001C | ZSG-CAN und D-CAN und K-CAN/IuK-CAN |
| 0x0000001D | ZSG-CAN und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000001E | ZSG-CAN und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000001F | ZSG-CAN und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00000020 | FLEXRAY |
| 0x00000021 | FLEXRAY und B-CAN |
| 0x00000022 | FLEXRAY und FA-CAN |
| 0x00000023 | FLEXRAY und B-CAN und FA-CAN |
| 0x00000024 | FLEXRAY und K-CAN/IuK-CAN |
| 0x00000025 | FLEXRAY und K-CAN/IuK-CAN und B-CAN |
| 0x00000026 | FLEXRAY und K-CAN/IuK-CAN und FA-CAN |
| 0x00000027 | FLEXRAY und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00000028 | FLEXRAY und D-CAN |
| 0x00000029 | FLEXRAY und D-CAN und B-CAN |
| 0x0000002A | FLEXRAY und D-CAN und FA-CAN |
| 0x0000002B | FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000002C | FLEXRAY und D-CAN und K-CAN/IuK-CAN |
| 0x0000002D | FLEXRAY und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000002E | FLEXRAY und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000002F | FLEXRAY und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00000030 | ZSG-CAN und FLEXRAY |
| 0x00000031 | ZSG-CAN und FLEXRAY und B-CAN |
| 0x00000032 | ZSG-CAN und FLEXRAY und FA-CAN |
| 0x00000033 | ZSG-CAN und FLEXRAY und B-CAN und FA-CAN |
| 0x00000034 | ZSG-CAN und FLEXRAY und K-CAN/IuK-CAN |
| 0x00000035 | ZSG-CAN und FLEXRAY und K-CAN/IuK-CAN und B-CAN |
| 0x00000036 | ZSG-CAN und FLEXRAY und K-CAN/IuK-CAN und FA-CAN |
| 0x00000037 | ZSG-CAN und FLEXRAY und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00000038 | ZSG-CAN und FLEXRAY und D-CAN |
| 0x00000039 | ZSG-CAN und FLEXRAY und D-CAN und B-CAN |
| 0x0000003A | ZSG-CAN und FLEXRAY und D-CAN und FA-CAN |
| 0x0000003B | ZSG-CAN und FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000003C | ZSG-CAN und FLEXRAY und D-CAN und K-CAN/IuK-CAN |
| 0x0000003D | ZSG-CAN und FLEXRAY und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000003E | ZSG-CAN und FLEXRAY und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000003F | ZSG-CAN und FLEXRAY und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00000040 | MOST |
| 0x00000041 | MOST und B-CAN |
| 0x00000042 | MOST und FA-CAN |
| 0x00000043 | MOST und B-CAN und FA-CAN |
| 0x00000044 | MOST und K-CAN/IuK-CAN |
| 0x00000045 | MOST und K-CAN/IuK-CAN und B-CAN |
| 0x00000046 | MOST und K-CAN/IuK-CAN und FA-CAN |
| 0x00000047 | MOST und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00000048 | MOST und D-CAN |
| 0x00000049 | MOST und D-CAN und B-CAN |
| 0x0000004A | MOST und D-CAN und FA-CAN |
| 0x0000004B | MOST und D-CAN und FA-CAN und B-CAN |
| 0x0000004C | MOST und D-CAN und K-CAN/IuK-CAN |
| 0x0000004D | MOST und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000004E | MOST und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000004F | MOST und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00000050 | MOST und ZSG-CAN |
| 0x00000051 | MOST und ZSG-CAN und B-CAN |
| 0x00000052 | MOST und ZSG-CAN und FA-CAN |
| 0x00000053 | MOST und ZSG-CAN und B-CAN und FA-CAN |
| 0x00000054 | MOST und ZSG-CAN und K-CAN/IuK-CAN |
| 0x00000055 | MOST und ZSG-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x00000056 | MOST und ZSG-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x00000057 | MOST und ZSG-CAN und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00000058 | MOST und ZSG-CAN und D-CAN |
| 0x00000059 | MOST und ZSG-CAN und D-CAN und B-CAN |
| 0x0000005A | MOST und ZSG-CAN und D-CAN und FA-CAN |
| 0x0000005B | MOST und ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000005C | MOST und ZSG-CAN und D-CAN und K-CAN/IuK-CAN |
| 0x0000005D | MOST und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000005E | MOST und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000005F | MOST und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00000060 | MOST und FLEXRAY |
| 0x00000061 | MOST und FLEXRAY und B-CAN |
| 0x00000062 | MOST und FLEXRAY und FA-CAN |
| 0x00000063 | MOST und FLEXRAY und B-CAN und FA-CAN |
| 0x00000064 | MOST und FLEXRAY und K-CAN/IuK-CAN |
| 0x00000065 | MOST und FLEXRAY und K-CAN/IuK-CAN und B-CAN |
| 0x00000066 | MOST und FLEXRAY und K-CAN/IuK-CAN und FA-CAN |
| 0x00000067 | MOST und FLEXRAY und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00000068 | MOST und FLEXRAY und D-CAN |
| 0x00000069 | MOST und FLEXRAY und D-CAN und B-CAN |
| 0x0000006A | MOST und FLEXRAY und D-CAN und FA-CAN |
| 0x0000006B | MOST und FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000006C | MOST und FLEXRAY und D-CAN und K-CAN/IuK-CAN |
| 0x0000006D | MOST und FLEXRAY und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000006E | MOST und FLEXRAY und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000006F | MOST und FLEXRAY und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00000070 | MOST und FLEXRAY und ZSG-CAN |
| 0x00000071 | MOST und FLEXRAY und ZSG-CAN und B-CAN |
| 0x00000072 | MOST und FLEXRAY und ZSG-CAN und FA-CAN |
| 0x00000073 | MOST und FLEXRAY und ZSG-CAN und B-CAN und FA-CAN |
| 0x00000074 | MOST und FLEXRAY und ZSG-CAN und K-CAN/IuK-CAN |
| 0x00000075 | MOST und FLEXRAY und ZSG-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x00000076 | MOST und FLEXRAY und ZSG-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x00000077 | MOST und FLEXRAY und ZSG-CAN und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00000078 | MOST und FLEXRAY und ZSG-CAN und D-CAN |
| 0x00000079 | MOST und FLEXRAY und ZSG-CAN und D-CAN und B-CAN |
| 0x0000007A | MOST und FLEXRAY und ZSG-CAN und D-CAN und FA-CAN |
| 0x0000007B | MOST und FLEXRAY und ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000007C | MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN/IuK-CAN |
| 0x0000007D | MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000007E | MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000007F | MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00000080 | ETHERNET |
| 0x00000100 | Eigene Diagnose |
| 0x00000200 | TAS |
| 0x00002000 | B2-CAN |
| 0x00002001 | B2-CAN und B-CAN |
| 0x00002002 | B2-CAN und FA-CAN |
| 0x00002003 | B2-CAN und B-CAN und FA-CAN |
| 0x00002004 | B2-CAN und K-CAN/IuK-CAN |
| 0x00002005 | B2-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x00002006 | B2-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x00002007 | B2-CAN und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00002008 | B2-CAN und D-CAN |
| 0x00002009 | B2-CAN und D-CAN und B-CAN |
| 0x0000200A | B2-CAN und D-CAN und FA-CAN |
| 0x0000200B | B2-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000200C | B2-CAN und D-CAN und K-CAN/IuK-CAN |
| 0x0000200D | B2-CAN und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000200E | B2-CAN und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000200F | B2-CAN und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00002010 | B2-CAN und ZSG-CAN |
| 0x00002011 | B2-CAN und ZSG-CAN und B-CAN |
| 0x00002012 | B2-CAN und ZSG-CAN und FA-CAN |
| 0x00002013 | B2-CAN und ZSG-CAN und B-CAN und FA-CAN |
| 0x00002014 | B2-CAN und ZSG-CAN und K-CAN/IuK-CAN |
| 0x00002015 | B2-CAN und ZSG-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x00002016 | B2-CAN und ZSG-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x00002017 | B2-CAN und ZSG-CAN und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00002018 | B2-CAN und ZSG-CAN und D-CAN |
| 0x00002019 | B2-CAN und ZSG-CAN und D-CAN und B-CAN |
| 0x0000201A | B2-CAN und ZSG-CAN und D-CAN und FA-CAN |
| 0x0000201B | B2-CAN und ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000201C | B2-CAN und ZSG-CAN und D-CAN und K-CAN/IuK-CAN |
| 0x0000201D | B2-CAN und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000201E | B2-CAN und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000201F | B2-CAN und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00002020 | B2-CAN und FLEXRAY |
| 0x00002021 | B2-CAN und FLEXRAY und B-CAN |
| 0x00002022 | B2-CAN und FLEXRAY und FA-CAN |
| 0x00002023 | B2-CAN und FLEXRAY und B-CAN und FA-CAN |
| 0x00002024 | B2-CAN und FLEXRAY und K-CAN/IuK-CAN |
| 0x00002025 | B2-CAN und FLEXRAY und K-CAN/IuK-CAN und B-CAN |
| 0x00002026 | B2-CAN und FLEXRAY und K-CAN/IuK-CAN und FA-CAN |
| 0x00002027 | B2-CAN und FLEXRAY und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00002028 | B2-CAN und FLEXRAY und D-CAN |
| 0x00002029 | B2-CAN und FLEXRAY und D-CAN und B-CAN |
| 0x0000202A | B2-CAN und FLEXRAY und D-CAN und FA-CAN |
| 0x0000202B | B2-CAN und FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000202C | B2-CAN und FLEXRAY und D-CAN und K-CAN/IuK-CAN |
| 0x0000202D | B2-CAN und FLEXRAY und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000202E | B2-CAN und FLEXRAY und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000202F | B2-CAN und FLEXRAY und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00002030 | B2-CAN und ZSG-CAN und FLEXRAY |
| 0x00002031 | B2-CAN und ZSG-CAN und FLEXRAY und B-CAN |
| 0x00002032 | B2-CAN und ZSG-CAN und FLEXRAY und FA-CAN |
| 0x00002033 | B2-CAN und ZSG-CAN und FLEXRAY und B-CAN und FA-CAN |
| 0x00002034 | B2-CAN und ZSG-CAN und FLEXRAY und K-CAN/IuK-CAN |
| 0x00002035 | B2-CAN und ZSG-CAN und FLEXRAY und K-CAN/IuK-CAN und B-CAN |
| 0x00002036 | B2-CAN und ZSG-CAN und FLEXRAY und K-CAN/IuK-CAN und FA-CAN |
| 0x00002037 | B2-CAN und ZSG-CAN und FLEXRAY und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00002038 | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN |
| 0x00002039 | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN und B-CAN |
| 0x0000203A | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN und FA-CAN |
| 0x0000203B | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000203C | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN und K-CAN/IuK-CAN |
| 0x0000203D | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000203E | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000203F | B2-CAN und ZSG-CAN und FLEXRAY und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00002040 | B2-CAN und MOST |
| 0x00002041 | B2-CAN und MOST und B-CAN |
| 0x00002042 | B2-CAN und MOST und FA-CAN |
| 0x00002043 | B2-CAN und MOST und B-CAN und FA-CAN |
| 0x00002044 | B2-CAN und MOST und K-CAN/IuK-CAN |
| 0x00002045 | B2-CAN und MOST und K-CAN/IuK-CAN und B-CAN |
| 0x00002046 | B2-CAN und MOST und K-CAN/IuK-CAN und FA-CAN |
| 0x00002047 | B2-CAN und MOST und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00002048 | B2-CAN und MOST und D-CAN |
| 0x00002049 | B2-CAN und MOST und D-CAN und B-CAN |
| 0x0000204A | B2-CAN und MOST und D-CAN und FA-CAN |
| 0x0000204B | B2-CAN und MOST und D-CAN und FA-CAN und B-CAN |
| 0x0000204C | B2-CAN und MOST und D-CAN und K-CAN/IuK-CAN |
| 0x0000204D | B2-CAN und MOST und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000204E | B2-CAN und MOST und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000204F | B2-CAN und MOST und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00002050 | B2-CAN und MOST und ZSG-CAN |
| 0x00002051 | B2-CAN und MOST und ZSG-CAN und B-CAN |
| 0x00002052 | B2-CAN und MOST und ZSG-CAN und FA-CAN |
| 0x00002053 | B2-CAN und MOST und ZSG-CAN und B-CAN und FA-CAN |
| 0x00002054 | B2-CAN und MOST und ZSG-CAN und K-CAN/IuK-CAN |
| 0x00002055 | B2-CAN und MOST und ZSG-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x00002056 | B2-CAN und MOST und ZSG-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x00002057 | B2-CAN und MOST und ZSG-CAN und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00002058 | B2-CAN und MOST und ZSG-CAN und D-CAN |
| 0x00002059 | B2-CAN und MOST und ZSG-CAN und D-CAN und B-CAN |
| 0x0000205A | B2-CAN und MOST und ZSG-CAN und D-CAN und FA-CAN |
| 0x0000205B | B2-CAN und MOST und ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000205C | B2-CAN und MOST und ZSG-CAN und D-CAN und K-CAN/IuK-CAN |
| 0x0000205D | B2-CAN und MOST und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000205E | B2-CAN und MOST und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000205F | B2-CAN und MOST und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00002060 | B2-CAN und MOST und FLEXRAY |
| 0x00002061 | B2-CAN und MOST und FLEXRAY und B-CAN |
| 0x00002062 | B2-CAN und MOST und FLEXRAY und FA-CAN |
| 0x00002063 | B2-CAN und MOST und FLEXRAY und B-CAN und FA-CAN |
| 0x00002064 | B2-CAN und MOST und FLEXRAY und K-CAN/IuK-CAN |
| 0x00002065 | B2-CAN und MOST und FLEXRAY und K-CAN/IuK-CAN und B-CAN |
| 0x00002066 | B2-CAN und MOST und FLEXRAY und K-CAN/IuK-CAN und FA-CAN |
| 0x00002067 | B2-CAN und MOST und FLEXRAY und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00002068 | B2-CAN und MOST und FLEXRAY und D-CAN |
| 0x00002069 | B2-CAN und MOST und FLEXRAY und D-CAN und B-CAN |
| 0x0000206A | B2-CAN und MOST und FLEXRAY und D-CAN und FA-CAN |
| 0x0000206B | B2-CAN und MOST und FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000206C | B2-CAN und MOST und FLEXRAY und D-CAN und K-CAN/IuK-CAN |
| 0x0000206D | B2-CAN und MOST und FLEXRAY und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000206E | B2-CAN und MOST und FLEXRAY und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000206F | B2-CAN und MOST und FLEXRAY und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00002070 | B2-CAN und MOST und FLEXRAY und ZSG-CAN |
| 0x00002071 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und B-CAN |
| 0x00002072 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und FA-CAN |
| 0x00002073 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und B-CAN und FA-CAN |
| 0x00002074 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und K-CAN/IuK-CAN |
| 0x00002075 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x00002076 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x00002077 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und K-CAN/IuK-CAN und FA-CAN  und B-CAN |
| 0x00002078 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN |
| 0x00002079 | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN und B-CAN |
| 0x0000207A | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN und FA-CAN |
| 0x0000207B | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000207C | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN/IuK-CAN |
| 0x0000207D | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und B-CAN |
| 0x0000207E | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und FA-CAN |
| 0x0000207F | B2-CAN und MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN/IuK-CAN und FA-CAN und B-CAN |
| 0x00004000 | HSFZ-Intern |
| 0xFFFFFFFF | ungueltig |

### TABCCMSGS

| CC_NR | CC_MSG |
| --- | --- |
| 0x0001 | Geschwindigkeits-reg. deaktiviert!  |
| 0x0002 | Geschwindigkeits-reg. deaktiviert!  |
| 0x0003 | Geschwindigkeits-reg. ausgefallen!  |
| 0x000A | Fahrkomfort eingeschränkt   |
| 0x000B | Lenkung gestört! Vorsichtig anhalten  |
| 0x000C | Kurvenverhalten eingeschränkt  |
| 0x0015 | Zündung gestört!  |
| 0x0016 | Anlasser! Motor nicht abstellen  |
| 0x0018 | DBC ausgefallen! Gemäßigt fahren.  |
| 0x001A | Geschwindigkeitsreg. ausgefallen!  |
| 0x001B | Motorölstand! Motoröl nachfüllen  |
| 0x001C | Motorölstand! Motoröl nachfüllen  |
| 0x001D | Motorstörung! Leistungsabfall  |
| 0x001E | Motor! Vorsichtig anhalten  |
| 0x001F | Erhöhte Emissionen!  |
| 0x0020 | Tankverschluss offen!  |
| 0x0021 | Motorstörung! Gemäßigt fahren  |
| 0x0023 | DSC ausgefallen! Gemäßigt fahren  |
| 0x0025 | Trigger %0  |
| 0x0026 | Fremde Fernbedienung!  |
| 0x0027 | Motor überhitzt! Vorsichtig halten  |
| 0x002A | Brems- und Fahrstabilisierung ausgefallen! Gemäßigt fahren.  |
| 0x002B | Kurvenverhalten eingeschränkt  |
| 0x002D | Kurvenverhalten eingeschränkt  |
| 0x0030 | ?1?  |
| 0x0031 | Partikelfilter!  |
| 0x0032 | Reifen Pannen Anzeige ausgefallen!  |
| 0x0034 | Parkbremse ausgefallen!  |
| 0x0035 | Automatic Hold gestört!  |
| 0x0036 | Parkbremse gestört!  |
| 0x0038 | ?2?  |
| 0x003C | Tacho-Anzeige gestört!  |
| 0x003F | Reifendruckverlust!  |
| 0x0042 | Fernbedienung fehlt! Motorstart nicht möglich  |
| 0x0043 | Batterie der Fernbedienung ersetzen!  |
| 0x0044 | Batterie Fernbedienung Standfunktionen leer!  |
| 0x0046 | Lenkverhalten geändert!  |
| 0x0047 | Bremsbeläge ersetzen!  |
| 0x004A | Bremsflüssigkeit! Vorsichtig halten  |
| 0x004B | Elektrik Anhängerkupplung  |
| 0x0055 | Geschwindigkeitsreg. deaktiviert!  |
| 0x005E | Rückhaltesystem Fond links gestört!  |
| 0x005F | Rückhaltesystem Fond rechts gestört!  |
| 0x0061 | Rückhaltesysteme gestört!  |
| 0x0067 | Getriebe wird zu heiß!  |
| 0x006C | Rückhaltesystem Fahrer gestört!  |
| 0x006D | Rückhaltesystem Beifahrer gestört!  |
| 0x0090 | Reifen Druck Control gestört!  |
| 0x0091 | Reifen Druck Control deaktiviert!  |
| 0x0093 | Reifendruckverlust!  |
| 0x0094 | Bremslichtsteuerung ausgefallen!  |
| 0x0095 | Reifen Druck Control ausgefallen!  |
| 0x0097 | Gaswarnung! Luftanlage ein  |
| 0x0099 | Waffenhalterung Fehler  |
| 0x009A | Fehler Reizgas-Sensor  |
| 0x009C | Luftanlage ohne Funktion  |
| 0x009D | Luftanlage aktiv  |
| 0x00A0 | Fensterheber Notfkt. verwenden!  |
| 0x00A1 | Startbatterie defekt  |
| 0x00A2 | Blitzleuchte, Lampe prüfen  |
| 0x00A3 | Feuerlöschanlage aktiv  |
| 0x00A6 | Kühlmittelstand zu niedrig!  |
| 0x00A7 | Uhrzeit und Datum einstellen  |
| 0x00AA | Getriebe gestört!  |
| 0x00AD | Getriebe gestört! Gemäßigt fahren  |
| 0x00AF | Getriebe-Position P gestört!  |
| 0x00B0 | Geschwindigkeitsregelung gestört!  |
| 0x00B1 | Geschwindigkeitregelung gestört!  |
| 0x00B3 | Getriebe gestört! Gemäßigt fahren  |
| 0x00B4 | Fahrkomfort eingeschränkt  |
| 0x00B6 | Ölstandssensor gestört!  |
| 0x00B7 | Scheibenwischer gestört!  |
| 0x00B9 | Ganganzeige ausgefallen!  |
| 0x00BA | ELV! Ggf. Motor nicht abstellen  |
| 0x00BB | ELV verspannt! Lenkrad bewegen  |
| 0x00C1 | Notausstieg gestört!  |
| 0x00C3 | PDC ausgefallen!  |
| 0x00C9 | Automatic Hold deaktiviert!  |
| 0x00CC | Kurvenverhalten eingeschränkt  |
| 0x00D0 | Komfortfunktionen deaktiviert!  |
| 0x00D2 | Parkbremse ausgefallen!  |
| 0x00D4 | Motoröldruck! Vorsichtig anhalten  |
| 0x00D5 | Batterie wird nicht geladen!  |
| 0x00D8 | Kraftstoffpumpe! Gemäßigt fahren  |
| 0x00D9 | Fernbedienung an Starttaste halten!  |
| 0x00DC | Erhöhte Batterieentladung!  |
| 0x00DD | Gaswarnung! Ort verlassen  |
| 0x00E0 | Isolationsfehler  |
| 0x00E1 | Frontscheibe entriegelt!  |
| 0x00E2 | Feuerlöschanlage Fehler!  |
| 0x00E5 | Batterie stark entladen!  |
| 0x00E7 | Lichtanlage! Vorsichtig anhalten  |
| 0x00E8 | Schutzsysteme gestört!  |
| 0x00E9 | Kommunikation gestört!  |
| 0x00EA | Überfallalarm gestört!  |
| 0x00EC | Brems- und Fahrstabilisierung ausgefallen! Gemäßigt fahren.  |
| 0x00ED | Fahrstabilisierung ausgefallen! Gemäßigt fahren.  |
| 0x00EF | Parkbremse ausgefallen!  |
| 0x00F0 | Parkbremse ausgefallen!  |
| 0x00F1 | Parkbremse ausgefallen!   |
| 0x00F2 | Parkbremse ausgefallen!  |
| 0x00F3 | Parkbremse ausgefallen!  |
| 0x00F5 | Fahrkomfort eingeschränkt  |
| 0x00F7 | Batterieüberwachung ausgefallen!  |
| 0x00FA | Gang ohne Bremse einlegbar!  |
| 0x0100 | Leuchtweitenregulierung gestört!  |
| 0x0101 | Motor zu heiß! Gemäßigt fahren  |
| 0x0103 | Fensterheber-Einklemmschutz!  |
| 0x0104 | Schiebedach-Einklemmschutz!  |
| 0x0105 | Fensterheber-Einklemmschutz!  |
| 0x0106 | Schiebedach-Einklemmschutz!  |
| 0x010A | Überrollschutz gestört!  |
| 0x0111 | Lenkverhalten geändert!  |
| 0x0113 | Kraftstoffreserve!  |
| 0x0127 | Kurvenlicht ausgefallen!  |
| 0x012B | Notruf-Systemfehler!  |
| 0x012D | Sitzlehnen-Überwachung defekt!  |
| 0x0130 | Batteriezustand prüfen  |
| 0x0131 | Batteriekontakte prüfen  |
| 0x0132 | Batterie stark entladen!  |
| 0x0135 | Kraftstoffpumpe!  |
| 0x0141 | Lenkverhalten geändert!  |
| 0x0146 | Getriebe in Fahrposition!  |
| 0x0147 | RDC wird initialisiert...  |
| 0x0148 | Bremsbelag-Verschleißanzeige!  |
| 0x014F | Zündung eingeschaltet  |
| 0x0151 | Geschwindigkeitsreg. ausgefallen!  |
| 0x0153 | Geschwindigkeitsreg.  deaktiviert!  |
| 0x0154 | Geschwindigkeitsreg.  deaktiviert!  |
| 0x0155 | Geschwindigkeitsreg.  deaktiviert!  |
| 0x015E | Fahrstabilisierung eingeschränkt! Gemäßigt fahren.  |
| 0x015F | Fahrstabilisierung ausgefallen! Gemäßigt fahren.  |
| 0x0162 | Anfahrassistent inaktiv!  |
| 0x0164 | Night Vision ausgefallen!  |
| 0x016C | RPA-Initialisierung...  |
| 0x016F | Motor zu heiß! Drehzahl reduzieren  |
| 0x0171 | Brems- und Fahrstabilisierung ausgefallen! Gemäßigt fahren.  |
| 0x0172 | Brems- und Fahrstabilisierung ausgefallen! Gemäßigt fahren.  |
| 0x0174 | Zweistufiges Bremslicht links ausgefallen!  |
| 0x0175 | Zweistufiges Bremslicht rechts ausgefallen!  |
| 0x0176 | Fernlicht-Assistent ausgefallen!  |
| 0x0178 | Fernlicht-Assistent gestört!  |
| 0x017E | DSC eingeschränkt! Gemäßigt fahren  |
| 0x0189 | Wählhebel in Automatikgasse zurück!  |
| 0x018A | Eventuell Wählhebel gestört  |
| 0x018B | Parkbremse gestört! Wegrollen möglich  |
| 0x018D | Start- /Stop-  Automatik ausgefallen!  |
| 0x0196 | Anhänger elektrische Bremse prüfen  |
| 0x019A | Parkbremse gestört!  |
| 0x019F | Erhöhte Batterieentladung!  |
| 0x01A3 | Antrieb gestört!  |
| 0x01A4 | Getriebe gestört! Gemäßigt fahren  |
| 0x01A7 | Verriegelung Anhängerkupplung!  |
| 0x01A9 | Rückfahrkamera gestört!  |
| 0x01AC | Seitenkamera defekt!  |
| 0x01AF | Hohe Bremsen-beanspruchung!  |
| 0x01B2 | Sitzkalibrierung erforderlich!  |
| 0x01B3 | Spurverlassenswarnung ausgefallen!  |
| 0x01B4 | Sitzpositionserkennung gestört!  |
| 0x01B7 | Parkbremse überlastet!  |
| 0x01B9 | Geschwindigkeitsreg. deaktiviert!  |
| 0x01BB | Fahrzeug gegen Wegrollen sichern!  |
| 0x01C0 | Kraftstofffilter verstopft!  |
| 0x01C1 | Elektrik Anhängerkupplung ausgefallen!  |
| 0x01C5 | Nahbereichssensoren deaktiviert!  |
| 0x01C6 | Geschwindigkeitsreg. deaktiviert!  |
| 0x01C8 | Zündung wird ausgeschaltet. Ggf. wird P eingelegt.  |
| 0x01C9 | Anhängerbeleuchtung!  |
| 0x01CA | Fussgängerschutzsystem!  |
| 0x01CC | Batterie ersetzen!  |
| 0x01CD | Batterie! Ladezustand %0  |
| 0x01CE | Sitzbelegungssensor verschmutzt!  |
| 0x01D2 | Night Vision Kamera verschmutzt!  |
| 0x01D3 | Fahrstufenwechsel! Evtl. Wählhebel gestört.  |
| 0x01D5 | Geschwindigkeitsreg. deaktiviert!   |
| 0x01D6 | Top View Kamera verschmutzt!  |
| 0x01D7 | Top View gestört!  |
| 0x01D8 | Side View Kamera verschmutzt!  |
| 0x01D9 | Side View gestört!  |
| 0x01DB | Notruf eingeschränkt! (Navigation)  |
| 0x01DC | Spurwechselwarnung ausgefallen!  |
| 0x01DD | Spurwechselwarnung gestört!  |
| 0x01DE | Geschwindigkeitsreg. deaktiviert!  |
| 0x01DF | t.b.d. Hohe Beanspruchung der Bremsanlage  |
| 0x01E3 | Geschwindigkeitsreg. deaktiviert!  |
| 0x01E5 | Fahrzeugkonfiguration inkonsistent. Bitte prüfen lassen!  |
| 0x01E6 | Spurverlassenswarnung gestört!  |
| 0x01E7 | Parkassistent deaktiviert. Tür / Kofferraum schließen.  |
| 0x01EA | Parkassistent ausgefallen  |
| 0x01EB | t.b.d. Ölverlust! Vorsichtig halten  |
| 0x01EF | Fluchtgeschwindigkeit benutzt!  |
| 0x01F0 | Lenkverhalten geändert!  |
| 0x01F1 | Lenkverhalten geändert!  |
| 0x01F2 | Fahrstabilisierung eingeschränkt!  |
| 0x01F5 | Lenkverhalten geändert!  |
| 0x01F6 | Fahrregelsysteme ausgefallen! Gemäßigt fahren  |
| 0x01F7 | Fahrregelsysteme ausgefallen! Gemäßigt fahren  |
| 0x01F8 | Lenkverhalten geändert!  |
| 0x01F9 | Fahrkomfort eingeschränkt!  |
| 0x01FB | Gefahr! Erhöhter CO2-Wert in Fahrzeugkabine!  |
| 0x0200 | Bremskraftverstärkung ausgefallen. Gemäßigt fahren.  |
| 0x0208 | Service-Anzeige nicht verfügbar  |
| 0x0218 | t.b.d. Spurwechselwarnung deaktiviert!  |
| 0x0219 | t.b.d. Klimaautomatik  |
| 0x0233 | Lüftungsgebläse gestört  |
| 0x0234 | Tankverschluss offen!  |
| 0x0235 | Fzg. nicht gegen wegrollen gesichert!  |
| 0x0237 | Lüfter defekt!  |
| 0x0238 | Lüfter defekt!  |
| 0xFFFF | ungueltig |

### TABDMFSBETRIEBSARTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Freilaufend |
| 0x01 | Fest wie mittels Routine vorgegeben |
| 0x02 | keine Angabe möglich |
| 0xFF | ungueltig |

### TABDMFSSPERRESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Fehlerspeicherfreigabe |
| 0x01 | Fehlerspeichersperre |
| 0x02 | Reserve |
| 0x03 | Signal ungültig |
| 0x04 | Nachricht 0x3A0 stumm |
| 0xFF | ungueltig |

### TABDIAGADRESSEN

| WERT | TEXT |
| --- | --- |
| 0x00 | JBBF |
| 0x01 | ACSM |
| 0x02 | SLZ_LWS |
| 0x03 | TPA |
| 0x04 | emARS_h |
| 0x05 | CDM |
| 0x06 | TRSVC/iCAM |
| 0x07 | SME |
| 0x08 | HC2 |
| 0x09 | RE_DME |
| 0x0A | RE_EME |
| 0x0B | SCR |
| 0x0D | HKFM |
| 0x0E | SVT |
| 0x0F | QSG |
| 0x10 | ZGW |
| 0x11 | ENS |
| 0x12 | DME1 |
| 0x13 | DME2 |
| 0x14 | LIM/SLE |
| 0x15 | KLE/UCX |
| 0x16 | ASA |
| 0x17 | EKP |
| 0x18 | DKG |
| 0x19 | LMV |
| 0x1A | EME |
| 0x1B | SMES1 |
| 0x1C | ICM Q/L |
| 0x1D | TFM |
| 0x1E | SMES2 |
| 0x20 | RDC |
| 0x21 | LRR |
| 0x22 | SAS |
| 0x23 | SVT_RR |
| 0x24 | CVM |
| 0x25 | emARS_v |
| 0x26 | RSE_HIGH |
| 0x27 | CGW |
| 0x28 | RSL |
| 0x29 | DSC_Mod |
| 0x2A | EMF |
| 0x2B | HSR |
| 0x2C | PMA |
| 0x2D | VSG |
| 0x2E | PCU |
| 0x30 | EPS |
| 0x31 | MMC |
| 0x32 | CSM |
| 0x33 | OBD_Funktional |
| 0x34 | ZINS |
| 0x35 | TBX |
| 0x36 | TEL_MULF |
| 0x37 | AMP_HiFi |
| 0x38 | EHC1 |
| 0x39 | ICM-V |
| 0x3A | EME |
| 0x3B | Navi |
| 0x3C | CDC |
| 0x3D | HUD |
| 0x3E | ACP |
| 0x3F | ASD |
| 0x40 | CAS |
| 0x41 | TMS_L |
| 0x42 | TMS_R |
| 0x43 | LHM_L |
| 0x44 | LHM_R |
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
| 0x54 | SDARS |
| 0x55 | TEL_MULF_HIGH |
| 0x56 | FZD |
| 0x57 | NiVi |
| 0x58 | SNG |
| 0x59 | aLBV_FA |
| 0x5A | aLBV_BF |
| 0x5B | SPnM_HR |
| 0x5D | KAFAS |
| 0x5E | GWS |
| 0x5F | FLA |
| 0x60 | KOMBI |
| 0x61 | COMBOX |
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
| 0x71 | AHM |
| 0x72 | FRMFA |
| 0x73 | CID |
| 0x74 | CID_R1 |
| 0x75 | CID_R2 |
| 0x76 | VDC |
| 0x77 | TRSVC |
| 0x78 | IHKA |
| 0x79 | FKA |
| 0x7A | AFP |
| 0x7B | HKA |
| 0x7D | Diagnosetool PT-CAN |
| 0x7E | Diagnosetool K-CAN Sys |
| 0x7F | Diagnosetool K-CAN Per |
| 0x86 | KOMBI |
| 0xA0 | CIC_HD |
| 0xA3 | EARS_H |
| 0xA4 | EARS_V |
| 0xA5 | RK_VL |
| 0xA6 | RK_VR |
| 0xA7 | RK_HL |
| 0xA8 | RK_HR |
| 0xA9 | CDCDSP |
| 0xAB | MMC |
| 0xB1 | FZM-Slave Body-CA |
| 0xB2 | FZM-Slave FA-CAN |
| 0xB3 | FZM-Slave FlexRay |
| 0xB5 | FZM-Slave A-CAN |
| 0xB7 | FZM-Slave Safety-CAN |
| 0xB9 | FZM-Slave I&K-CAN |
| 0xBA | FZM-Slave LE-CAN |
| 0xBB | FZM-Slave LP-CAN |
| 0xBC | FZM-Slave B2-CAN |
| 0xBD | FZM-Slave Ethernet |
| 0xC1 | Teilnetz-Slave Body-CAN |
| 0xC2 | Teilnetz-Slave FA-CAN |
| 0xC3 | Teilnetz-Slave FlexRay |
| 0xC5 | Teilnetz-Slave A-CAN |
| 0xC7 | Teilnetz-Slave Safety-CAN |
| 0xC9 | Teilnetz-Slave I&K-CAN |
| 0xCA | Teilnetz-Slave LE-CAN |
| 0xCB | Teilnetz-Slave LP-CAN |
| 0xCC | Teilnetz-Slave B2-CAN |
| 0xCD | Teilnetz-Slave Ethernet |
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

### TABDUPLEX

| WERT | UWTEXT |
| --- | --- |
| 0x00 | HU Link ist Half-Duplex |
| 0x01 | HU Link ist Full-Duplex |
| 0x02 | OBD Link ist Half-Duplex |
| 0x03 | OBD Link ist Full-Duplex |
| 0xFF | ungueltiger Wert |

### TABFSPSPERRE

| WERT | TEXT |
| --- | --- |
| 0 | deaktiviert |
| 1 | aktiviert |
| 2 | reserviert |
| 3 | ungültig |

### TABFAREND

| WERT | UWTEXT |
| --- | --- |
| 0x00 | HU kein Far-End Fault Status gefunden |
| 0x01 | HU Far-End Fault Status gefunden |
| 0x02 | OBD kein Far-End Fault Status gefunden |
| 0x03 | OBD Far-End Fault Status gefunden |
| 0xFF | ungueltiger Wert |

### TABFEHLERHAFTESSOFTWAREMODUL

| WERT | UWTEXT |
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

### TABFEHLERHAFTESSOFTWAREMODULTAS

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Tester Assistant |
| 0x02 | TAS_Activation - Tester Assistant Aktivierung |
| 0x03 | TAS_ErrorHandler - Tester Assistant Fehler-Manager |
| 0xFF | ungueltiger Wert |

### TABFLEXRAYLERNDIAGPLUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | DIAG+ ist nicht aktiv.Es wurden keine FlexRay Branches manuell deaktiviert oder aktiviert |
| 0x01 | DIAG+ ist aktiv.Es wurden manuell FlexRay Branches deaktiviert oder aktiviert |
| 0xFF | ungueltiger Wert |

### TABFLEXRAYLERNMODE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | FlexRay Lern Mode wurde durchgeführt |
| 0x01 | FlexRay Lern Mode wurde noch nicht durchgeführt |
| 0xFF | ungueltiger Wert |

### TABFLEXRAYPFADSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Pfad AUS |
| 0x01 | Pfad EIN |
| 0xFF | ungueltig |

### TABGWROUTING

| WERT | TEXT |
| --- | --- |
| 0x00 | unterstützt |
| 0x01 | nicht unterstützt |
| 0xFF | reserviert |

### TABGRUNDSYSTEMKONTEXTNICHTKOMPLETT

| WERT | UWTEXT |
| --- | --- |
| 0x01 | ErrorMessage-Queue für eingehende Fehler ist voll |
| 0x02 | DiagnoseMaster Fehlerspeicher voll: keine Zuordnung möglich |
| 0x03 | DiagnoseMaster Fehlerspeicher voll: keine Umweltbedingungsdaten möglich |
| 0x04 | Softwarefehler: NULL_ZEIGER |
| 0x05 | ErrorMessage-Queue für eingehende CC-Meldungen ist voll |
| 0xFF | ungueltiger Wert |

### TABHUAKTIVIERUNGSLEITUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | HU Aktivierungsleitung: aus |
| 0x01 | HU Aktivierungsleitung: ein |
| 0xFF | ungueltiger Wert |

### TABHEXBIN

| HEX | BIN |
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

| WERT | UWTEXT |
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

### TABKLEMMEN

| WERT | TEXT |
| --- | --- |
| 0 | Init |
| 1 | Reserve |
| 2 | KL30 |
| 3 | KL30F-Änderung |
| 4 | KL30F-Ein |
| 5 | KL30B-Änderung |
| 6 | KL30B-Ein |
| 7 | KLR-Änderung |
| 8 | KLR-Ein |
| 9 | KL15-Änderung |
| 10 | KL15-Ein |
| 11 | KL50-Verzögerung |
| 12 | KL50-Änderung |
| 13 | KL50-Ein |
| 14 | Fehler |
| 15 | Signal ungültig |

### TABKOMPRIMIERUNG

| HEADER | ASCII |
| --- | --- |
| 01 | 3 |
| 10 | 4 |
| 11 | 5 |
| 00 | 0 |

### TABLIFECYCLEMODE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Mode Application |
| 0x01 | Mode Flash |
| 0x02 | Mode Coding |
| 0xFF | Mode Invalid |

### TABLINKQUALITAET

| WERT | UWTEXT |
| --- | --- |
| 0x00 | HU Link nicht ok |
| 0x01 | HU Link ok |
| 0x02 | OBD Link nicht ok |
| 0x03 | OBD Link ok |
| 0xFF | ungueltiger Wert |

### TABMDISTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | HU MDI |
| 0x01 | HU MDI-X |
| 0x02 | OBD MDI |
| 0x03 | OBD MDI-X |
| 0xFF | ungueltiger Wert |

### TABMOSTDEVICES

| WERT | TEXT |
| --- | --- |
| 0x15 | TELCO (TelCommander): InstID = 0x15 |
| 0x26 | RSE: InstID = 0x26 |
| 0x31 | MMC (MultiMediaChanger): InstID = 0x31 |
| 0x32 | MMIC: InstID = 0x32 |
| 0x34 | MMIF: InstID = 0x34 |
| 0x35 | SVS (Sprachverarbeitungssystem: InstID = 0x35 |
| 0x36 | Tel (Telefon Interface): InstID = 0x36 |
| 0x37 | AMP (Top Hi-Fi Audioverstärker): InstID = 0x37 |
| 0x3A | KH-INT (Kopfhoerer-Interface: InstID = 0x3A |
| 0x3B | NAV (Navigationssystem: InstID = 0x3B |
| 0x3C | CDC (CD Wechsler): InstID = 0x3C |
| 0x3D | HUD (Head Up Display): InstID = 0x3D |
| 0x3F | ASK (Audio System Krontoller): InstID = 0x3F |
| 0x47 | TUNER (Antennentuner): InstID = 0x47 |
| 0x49 | SEC1 (Security-Modul 1): InstID = 0x49 |
| 0x4A | SEC2 (Security-Modul 2): InstID = 0x4A |
| 0x4B | VID (Videomodul): InstID = 0x4B |
| 0x53 | IBOC (In Band on Channel): InstID = 0x53 |
| 0x54 | SDARS (Satelliten Radio): InstID = 0x54 |
| 0x55 | TEL_MULF_HIGH: InstID = 0x55 |
| 0x60 | Kombi (Instrumentenkombination): InstID = 0x60 |
| 0x61 | FBI (Flexible Bus Interface): InstID = 0x61 |
| 0x62 | MCGW (Most/Can-Gateway): InstID = 0x62 |
| 0x63 | MMI: InstID = 0x63 |
| 0x90 | MMI-FW (MMI-FW im CCC): InstID = 0x90 |
| 0x91 | CCC-DRV (Laufwerk im CCC): InstID = 0x91 |
| 0x92 | CCC-DVD (DVD-Laufwerk im CCC): InstID = 0x92 |
| 0x93 | CCC-BT (BT-Modul im CCC): InstID = 0x93 |
| 0x94 | CCC-POS (Pos.-Modul im CCC): InstID = 0x94 |
| 0x95 | CCC-RS (Rear Seat im CCC): InstID = 0x95 |
| 0x96 | CCC-OS (Betriebsystem im CCC): InstID = 0x96 |
| 0x97 | CCC-JVM (Java Virtual Machine im CCC): InstID = 0x97 |
| 0x98 | CCC-MM (MM-FW im CCC): InstID = 0x98 |
| 0x99 | CCC-MMI (MMI Descr im CCC): InstID = 0x99 |
| 0x9A | CCC-PFS (PFS-FW im CCC): InstID = 0x9A |
| 0x9B | CCC-HUD (HUD-Software im CCC): InstID = 0x9B |
| 0x9C | CCC-ONL (Online Pack im CCC): InstID = 0x9C |
| 0x9D | CCC-MPG (MPG2 im CCC): InstID = 0x9D |
| 0x9E | CCC-DSP (DSP im CCC): InstID = 0x9E |
| 0x9F | CCC-NET (Network im CCC): InstID = 0x9F |
| 0xA0 | CCC-APP (Applikation im CCC): InstID = 0xA0 |
| 0xA9 | CDC: InstID = 0xA9 |
| 0xAB | MMC: InstID = 0xAB |
| 0xFF | InstID unbekannt |

### TABMOSTFBLOCKIDTEXTE

| WERT | TEXT |
| --- | --- |
| 0x01 | NetBlock=0x01 |
| 0x02 | NetworkMaster=0x02 |
| 0x03 | ConnectionMaster=0x03 |
| 0x04 | PowerMaster=0x04 |
| 0x05 | Vehicle=0x05 |
| 0x06 | Diagnose=0x06 |
| 0x07 | VideoSwitch=0x07 |
| 0x10 | ManMachineInterface=0x10 |
| 0x11 | Sprachverarbeitungssystem=0x11 |
| 0x15 | ControlElements=0x15 |
| 0x16 | Security=0x16 |
| 0x20 | AudioMaster=0x20 |
| 0x22 | AudioAmplifier=0x22 |
| 0x23 | HeadPhoneAmplifier=0x23 |
| 0x24 | AuxilliaryInput=0x24 |
| 0x31 | AudioDiscPlayer=0x31 |
| 0x32 | MultiMediaChanger=0x32 |
| 0x40 | AM/FM Tuner=0x40 |
| 0x41 | TMC Tuner=0x41 |
| 0x42 | TVTuner=0x42 |
| 0x43 | ExternSource=0x43 |
| 0x44 | SDARS=0x44 |
| 0x50 | TelefonFix=0x50 |
| 0x51 | PhoneBook=0x51 |
| 0x52 | Navigationssystem=0x52 |
| 0x6F | Monitor=0x6F |
| 0x71 | Climate=0x71 |
| 0x80 | MMI_Terminal=0x80 |
| 0x81 | KOMBI_Terminal=0x81 |
| 0x90 | Telematik=0x90 |
| 0xAB | EDIABAS4MOST=0xAB |
| 0xC0 | CANDevices=0xC0 |
| 0xC9 | Service=0xC9 |
| 0xCA | KombiMiscFkts=0xCA |
| 0xCB | Bordcomputer=0xCB |
| 0xCC | ADASInterface=0xCC |
| 0xD1 | SystemFunction=0xD1 |
| 0xE0 | KombiInterface=0xE0 |
| 0xE1 | HUDInterface=0xE1 |
| 0xE2 | Camera=0xE2 |
| 0xE5 | CentralControlSystem=0xE5 |
| 0xFD | Sahara=0xFD |
| 0xFF | Ungueltiger Wert |

### TABMOSTLOGIDRECEIVESTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Defaultwert |
| 0x01 | aktueller Wert |

### TABMOSTSTORE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kopieren erfolgreich abgeschlossen |
| 0xFF | Kopieren fehlgeschlagen, Grund Unbekannt |

### TABMOSTSYSTEMSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | NetOff/ConfigNotOK |
| 0x01 | NetOn/ConfigNotOK |
| 0x02 | ungueltig |
| 0x03 | NetOn/ConfigOK |

### TABOBDLINK

| WERT | TEXT |
| --- | --- |
| 0x00 | OBD Link: aus |
| 0x01 | OBD Link: ein |
| 0xFF | ungueltiger Wert |

### TABOBDAKTIVIERUNGSLEITUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | OBD Aktivierungsleitung: aus |
| 0x01 | OBD Aktivierungsleitung: ein |
| 0xFF | ungueltiger Wert |

### TABOPSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | Initial (VSM_STM_STATE_INIT) |
| 1 | Standby, driver absent (VSM_STM_STATE_STANDBY) |
| 2 | Basis operation, driver present (VSM_STM_STATE_BASICOP) |
| 3 | Basis operation, vehicle coasting (VSM_STM_STATE_BASICOP_ROLL) |
| 4 | Engine postrun (VSM_STM_STATE_15OFF_DRIVE) |
| 5 | Ignition On (VSM_STM_STATE_IGNITION) |
| 6 | Ignition On, vehicle coasting (VSM_STM_STATE_IGNITION_ROLL) |
| 7 | Ignition On, vehicle not coasting (VSM_STM_STATE_ENG_IDLE) |
| 8 | Driving (VSM_STM_STATE_DRIVE) |
| 9 | Impending start of engine (VSM_STM_STATE_ENG_START_PRE) |
| 10 | Impending start of engine, vehicle coasting (VSM_STM_STATE_ENG_START_PRE_ROLL) |
| 11 | Start engine (VSM_STM_STATE_ENG_START) |
| 12 | Start engine, vehicle coasting (VSM_STM_STATE_ENG_START_ROLL) |
| 13 | Car wash operation (VSM_STM_STATE_WASH) |
| 14 | Error (VSM_STM_STAT_ERROR) |
| 15 | Signal ungültig |

### TABOVERTEMPERATURE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABPHYREMOTE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | PHY kein Remote Fault Status gefunden |
| 0x01 | PHY Remote Fault Status gefunden |
| 0xFF | ungueltiger Wert |

### TABPHYSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | PHY Link ist nicht ok |
| 0x01 | PHY Link ist ok |
| 0xFF | ungueltiger Wert |

### TABPORT

| WERT | UWTEXT |
| --- | --- |
| 0x00 | HU |
| 0x01 | OBD |
| 0xFF | ungueltiger Wert |

### TABPORTCRCERRORSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | CRC Errors 0 |
| 0x01 | CRC Errors < 10 |
| 0x02 | CRC Errors < 100 |
| 0x03 | CRC Errors < 1000 |
| 0x04 | CRC Errors < 10000 |
| 0x05 | CRC Errors < 100000 |
| 0x06 | CRC Errors >= 100000 |
| 0x0E | ungueltiger Wert |

### TABPORTLINKSTATUS

| WERT | UWTEXT |
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

| WERT | UWTEXT |
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

| WERT | UWTEXT |
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

### TABROEINITFEHLER

| PROBLEMBYTE | PROBLEMBYTETEXT |
| --- | --- |
| 0x00 | SG hat nicht geantwortet |
| 0x01 | SG hat geantwortet, aber mit negative response |
| 0x02 | SG hat mit positive response geantwortet, obwohl es nicht in VCM-Liste steht |
| 0x03 | SG hat mit negative response geantwortet, obwohl es nicht in VCM-Liste steht |

### TABSGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | SG ist nicht in SVT_Soll gemeldet, hat nicht geantwortet, Nicht OK |
| 0x02 | SG ist nicht in SVT_Soll gemeldet, hat geantwortet, Nicht OK |
| 0x04 | SG ist in SVT_Soll gemeldet, hat nicht geantwortet, Nicht OK |
| 0x06 | SG ist in SVT_Soll gemeldet, hat geantwortet, Nicht OK |
| 0x07 | SG ist in SVT_Soll gemeldet, hat geantwortet, OK |
| 0x12 | SG ist nicht in SVT_Soll gemeldet, hat geantwortet, Nicht OK, SVK Unbekannt  |
| 0x16 | SG ist  in SVT_Soll gemeldet, hat geantwortet, Nicht OK,SVK Unbekannt  |
| 0xFF | Status_Unbekannt |

### TABSWFEHLERCODE

| WERT | UWTEXT |
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

### TABSOFTWAREERROR

| WERT | UWTEXT |
| --- | --- |
| 0x01 | allgemeine Fehler |
| 0xFF | ungueltiger Wert |

### TABSOFTWAREMODUL

| WERT | UWTEXT |
| --- | --- |
| 0x01 | VCM |
| 0xFF | ungueltiger Wert |

### TABSPEED

| WERT | UWTEXT |
| --- | --- |
| 0x00 | HU Link Geschwindigkeit: 10Mbps |
| 0x01 | HU Link Geschwindigkeit: 100Mbps |
| 0x02 | OBD Link Geschwindigkeit: 10Mbps |
| 0x03 | OBD Link Geschwindigkeit: 100Mbps |
| 0xFF | ungueltiger Wert |

### TABSTATUSFLEXRAYLERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Lern FlexRay wurde nicht durchgeführt |
| 0x01 | Lern FlexRay wurde durchgeführt |
| 0xFF | ungueltig |

### TABSTATUSMASTERVIN

| WERT | TEXT |
| --- | --- |
| 0x01 | ZGW-VIN erfolgreich mit MasterVIN aktualisiert |
| 0x02 | MasterVIN nicht von VIN-Master-SG (CAS) erhalten, ZGW-VIN bleibt auf ursprünglichem Wert |
| 0x03 | MasterVIN nicht von VIN-Master-SG (CAS) erhalten, ZGW-VIN ist nicht initialisiert |
| 0xFF | allgemeine Fehler |

### TABSTEUERNFLEXRAYLERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Liste der DiagnoseAdressen die konfiguriert worden sind |
| 0x01 | Liste der DiagnoseAdressen die in VCM Soll vorhanden aber nicht auf Abfrage reagiert haben |
| 0x02 | Timeout ist gelaufen |
| 0x03 | Liste der DiagnoseAdressen der fehlerhaften Steuergeräte - Response Pending |
| 0x04 | Liste der SGn die zum zweiten Mal auf ein Request nicht geantwortet haben |
| 0xFF | ungueltig |

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

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABVBATUNDERVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABVCCUNDERVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABVCMREADERRORCODE

| WERT | UWTEXT |
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

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Generierung vollständig, getauschte SG vorhanden |
| 0x02 | Generierung ohne Ergebnis-Abbruch nach Deaktivierung von Klemme 15 |
| 0x03 | Generierung ohne Ergebnis-Abbruch nachGeneral Reject vom TAS |
| 0xFF | Ungueltiger Wert |

### TABVCMSVTGENERATIONERRORCODE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Generierung ohne Ergebnis-Abbruch nach Deaktivierung von Klemme 15  (Abbruch durch KL15 nach Testerauftrag) |
| 0x02 | Generierung ohne Ergebnis-Abbruch nachGeneral Reject vom TAS (nach Testerauftrag) |
| 0xFF | Ungueltiger Wert |

### TABVCMWRITEERRORCODE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | EEPROM-Manager Fehler |
| 0x02 | SVT-Stream-Datenstruktur fehlerhaft / Speicherüberlauf |
| 0x03 | SVT-Objekt-Datenstruktur fehlerhaft / Speicherüberlauf |
| 0x04 | Maximale Datenlänge überschritten |
| 0x05 | Allgemeiner Fehler |
| 0xFF | ungueltiger Wert |

### TABVIOUNDERVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABWAKEUPSOURCE

| INDEX | TEXT | WERT |
| --- | --- | --- |
| 0x00 | Weckursache  MOST | 0x01 |
| 0x01 | Weckursache  I_CAN | 0x02 |
| 0x02 | Weckursache  FA_CAN | 0x04 |
| 0x03 | Weckursache  BODY_CAN | 0x08 |
| 0x04 | Weckursache  D_CAN | 0x10 |
| 0x05 | Weckursache  WECKLEITUNG | 0x20 |
| 0x06 | Weckursache  ETHERNET_AKTIVIERUNGSLEITUNG | 0x40 |
| 0x07 | Weckursache  FIRST_SWITCH_TO_POWER | 0x80 |
| 0xFF | Weckursache ungultig | 0xFF |

### TABWECKGRUND

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Steuergeräte Reset |
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
| 0x27 | Lenkstocktaster  in Richtung  Blinken Links  |
| 0x28 | Lenkstocktaster in Richtung  Blinken rechts  |
| 0x29 | Lenkstocktaster in Richtung  Lichthupe  |
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
| 0x63 | Nox-Diagnose |
| 0x70 | Weckweiterleitung |
| 0x81 | Weckursache  MOST |
| 0x82 | Weckursache  I_CAN |
| 0x84 | Weckursache  FA_CAN |
| 0x88 | Weckursache  BODY_CAN |
| 0x90 | Weckursache  D_CAN |
| 0xA0 | Weckursache  WECKLEITUNG |
| 0xC0 | Weckursache  ETHERNET_AKTIVIERUNGSLEITUNG |
| 0xFF | Weckursache ungultig |

### TABZFSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | ZFS Ringspeicher noch nicht im Überschreibmodus |
| 0x01 | ZFS Ringspeicher bereits im Überschreibmodus |
| 0xFF | ZFS Ringspeicher noch nicht im Überschreibmodus |
