# ENAVEVO.prg

## General

|  |  |
| --- | --- |
| File | ENAVEVO.prg |
| Type | PRG |
| Jobs | 89 |
| Tables | 340 |
| Origin | BMW EI-60 Bredow |
| Revision | 011.000 |
| Author | TELEMOTIVE-AG EE-624 Schmidt |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Entry Nav Evo |  |  |
| ORIGIN | string | BMW EI-60 Bredow |  |  |
| REVISION | string | 011.000 |  |  |
| AUTHOR | string | TELEMOTIVE-AG EE-624 Schmidt |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.89 |  |  |
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
| FEHLER_KLASSE | string | 'IGNORIERE_EREIGNIS_DTC': Wenn EREIGNIS_DTC = '1', DTC-Fehlereinträge werden ignoriert sonst: FEHLERKLASSE wird ausgewertet |

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

### STEUERN_IO

Vorgeben eines Status UDS  : $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID RES_TABELLE ARG_TABELLE |
| STEUERPARAMETER | string | 'RCTECU' = returnControlToECU 'RTD'    = resetToDefault 'FCS'    = freezeCurrentState 'STA'    = shortTermAdjustment optionales Argument Wenn nicht angegeben, dann kein InputOutputControlParameter im Request |
| WERT | string | Argumente siehe table SG_Funktionen ARG_TABELLE |

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

### SENSOREN_ANZAHL_LESEN

Anzahl der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers Modus: Default

_No arguments._

### SENSOREN_IDENT_LESEN

Identifikation der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers UDS  : $16xx SubbusMemberSerialNumber Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_NR | long | optionales Argument gewuenschter Sensor xx (0x01 - 0xFF) oder VERBAUORT eines bestimmten Sensors (table VerbauortTabelle ORT) |

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

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events $02 eventWindowTime - infinite (LH Diagnosemaster V11 oder höher, Umsetzung nach LH V6 - V10 wird jedoch toleriert)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

_No arguments._

### STATUS_WAKEUP_ABSTIME

7 bytes Zeitpunkt, zu dem das SG den Weckbefehl gegeben hat Bytes werden als Datum interpretiert Beispiel: '20060508131210' in der Reihenfolge YYYYMMDDHHMMSS. Falls das SG nie geweckt hat wird '00000000000000' zurückgegeben

_No arguments._

### STATUS_MOSTDIAG_DELAY

Verzögerungszeit, bis der Job steuern_zentrale_registry_sollkonfiguration wieder gestartet werden kann

_No arguments._

### STATUS_IP_CONFIGURATION

Reads out the actual ipconfig of the Ethernet interface of the HeadUnit.

_No arguments._

### STATUS_HIGHSYNCCONNECTION_TABLE

HighSyncConnectionTable

_No arguments._

### STATUS_ETH_SIGNAL_QUALITY

Returns the signal quality of all external ports of the ECU UDS   : $22 ReadDataByIdentifier $1801 ETH_SIGNAL_QUALITY

_No arguments._

### STATUS_PIA_PORTIERUNGSMASTER

returns the state of PIA porting master

_No arguments._

### STATUS_LIST_MANIPULATION_SECURITY_ARTIFACT

Liste Manipulationsschutz aus LH Security für I&K Steuergeräte SAP: 10283045-000-02 UDS     : $22   ReadDataByIdentifier UDS     : $2590 LIST_MANIPULATION_SECURITY_ARTIFACT

_No arguments._

### STATUS_LIST_MANIPULATION_SW

Liste Manipulationsschutz aus LH Security für I&K Steuergeräte SAP: 10283045-000-02 UDS     : $22   ReadDataByIdentifier UDS     : $2591 Manipulationsschutz SW

_No arguments._

### STATUS_LIST_MANIPULATION_APPLICATION_DATA

Liste Manipulationsschutz aus LH Security für I&K Steuergeräte SAP: 10283045-000-02 UDS     : $22   ReadDataByIdentifier UDS     : $2592 LIST_MANIPULATION_APPLICATION_DATA

_No arguments._

### STATUS_LIST_MANIPULATION_GENERAL

Liste Manipulationsschutz aus LH Security für I&K Steuergeräte SAP: 10283045-000-02 UDS     : $22   ReadDataByIdentifier UDS     : $2594 LIST_MANIPULATION_GENERAL

_No arguments._

### STATUS_VERSION_GATEWAYTABELLE

Lesen der Versionsnummer der Gateway-Tabelle

_No arguments._

### STATUS_SOFTWARENAME

Reads out the flashed Buildname

_No arguments._

### READ_DIFF_REGISTRY

Vergleich der Current und Default Registry

_No arguments._

### STATUS_CPU_AUSLASTUNG

Indicates the DAR which is selected.

_No arguments._

### STATUS_AKTIVIERUNGSLEITUNG

Returns the state of the activation line

_No arguments._

### STATUS_GATEWAY_MOST_DEVICE_COUNT

Information über den Gateway-Dispatcher Anzahl der vom Dispatcher erkannten MOST-Teilnehmer im Ring

_No arguments._

### STATUS_MMI_STATISTIK

Lesen der MMI Statistik gzip Datei

_No arguments._

### STATUS_SWUP_INSTALLED

UDS:     $22   ReadDataByIdentifier $D01F Status_Swup_Installed

_No arguments._

### LESEN_TELEFONNUMMERN

Auslesen der in HeadUnit gespeicherten Telefonnummern für - Bereitschaftsdienst - Heimathändler - Passo - Hotline

_No arguments._

### READ_CURRENT_REGISTRY

Liefert den Inhalt der Current Registry

_No arguments._

### READ_DEFAULT_REGISTRY

Liefert den Inhalt der Current Registry

_No arguments._

### STATUS_BIT_ERROR_RATE_DAB

Measures the quality of the reception of the current DAB ensemble.

_No arguments._

### STATUS_ATC_VERSION

Reads out the capability of the ATC diagnosis

_No arguments._

### STATUS_HWVARIANTE_NAME

Variante

_No arguments._

### STEUERN_CID_CODIERDATEN

Overwrites CID coding data in RAM. The original coding values are restored after reset.

| Name | Type | Description |
| --- | --- | --- |
| ARG_DIM_CURVE_X1 | unsigned int | Value dim curve X1 |
| ARG_DIM_CURVE_X2 | unsigned int | Value dim curve X2 |
| ARG_DIM_CURVE_X3 | unsigned int | Value dim curve X3 |
| ARG_DIM_CURVE_Y1 | unsigned int | Value dim curve Y1 |
| ARG_DIM_CURVE_Y2 | unsigned int | Value dim curve Y2 |
| ARG_DIM_CURVE_Y3 | unsigned int | Value dim curve Y3 |
| ARG_DIM_TOLERANCE_ALPHA | unsigned char | Value dim tolerance alpha |
| ARG_DIM_TOLERANCE_ABS | unsigned char | Value dim tolerance abs |
| ARG_DIM_DIFF_GAIN | unsigned char | Value dim diff gain |
| ARG_DIM_DIFF_THRESHOLD | unsigned char | Value dim diff threshold |
| ARG_DIM_DIFF_BIAS | unsigned char | Value dim diff bias |
| ARG_DIM_DIFF_MAX | unsigned char | Value dim diff max |
| ARG_DIM_DIFF_MIN | unsigned char | Value dim diff min |
| ARG_DIM_UP_MIN | unsigned char | Value dim up min |
| ARG_DIM_DOWN_MIN | unsigned char | Value dim down min |
| ARG_DIM_MAX_OFFSET_BRIG | unsigned char | Value dim max offset brig |
| ARG_DIM_FADE_TIME_T0 | unsigned char | Value dim fade time T0 |
| ARG_DIM_FADE_TIME_T1 | unsigned char | Value dim fade time T1 |
| ARG_DIM_FADE_TIME_T2 | unsigned char | Value dim fade time T2 |
| ARG_DIM_FADE_EXPO_T1 | unsigned char | Value dim fade Expo T1 |
| ARG_DIM_FADE_EXPO_T2 | unsigned char | Value dim fade expo T2 |
| ARG_DIM_FILT_CHANGE_SENSITIVITY | unsigned int | Value dim filt change sensitvity |
| ARG_DIM_MIN_OFFSET_BRIG | unsigned char | Lower border of the brightness offset regulation range |
| ARG_ENDIANESS_ADAPTED | unsigned char | Indicates if the endianess of the coding data block has been adapted or not |
| ARG_PADDING | unsigned char | Padding for further use |

### SCHREIBEN_TELEFONNUMMERN

Schreiben der Telefonnummern für - Bereitschaftsdienst - Heimathändler - Passo - Hotline

| Name | Type | Description |
| --- | --- | --- |
| ARG_NR_BEREITSCHAFTSDIENST | string | Nummer des Bereitschaftsdienstes |
| ARG_NR_HEIMATHAENDLER | string | Nummer des Heimathändlers |
| ARG_NR_PASSO | string | Nummer Passo |
| ARG_NR_HOTLINE | string | Nummer der Hotline |

### STEUERN_PIA_04_CHANGE_PROFILE

this service is used to set the PIA porting master

| Name | Type | Description |
| --- | --- | --- |
| ARG_PIA_PROFILE | unsigned char | Nummer des zu aktivierenden Profils => 0 = Profil von Benutzer 1, 1 = Profil von Benutzer 2, 2 = Profil von Benutzer 3, 10 (dezimal) = Gastprofil, 15 (dezimal) = Ungültiges Profil |
| ARG_PIA_PROFILE_MODE | unsigned char | Profilwechsel => Mode der Aktivierung => 1 = temporär, 2 = permanent |

### STEUERN_PIA_09_RESET_ALL

this service is used to set the PIA porting master

_No arguments._

### STEUERN_PIA_06_CHANGE_ACTIVE_USERNAME

this service is used to set the PIA porting master

| Name | Type | Description |
| --- | --- | --- |
| ARG_PIA_USERNAME | string | Neuer Benutzername (Höchstens 64 Zeichen lange Zeichenkette aus druckbaren UTF-8 Zeichen) |

### STEUERN_NWM_CONFIG_NOTOK

Sends a Config.NotOk on the MOST Bus

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

### STEUERN_ZENTRALE_REGISTRY_SOLLKONFIGURATION

Die aktuelle Registry wird als Default Registry gespeichert

_No arguments._

### STATUS_SEARCH_FBLOCK

FBlockID.InstID searched in Current Registry

| Name | Type | Description |
| --- | --- | --- |
| ARG_FBLOCKID | unsigned char | FBlockID.InstID searched in Registry |
| ARG_INSTID | unsigned char | FBlockID.InstID searched in Registry |

### STEUERN_RINGBRUCH_DIAGNOSE

Ringbruchdiagnose soll gestartet werden

_No arguments._

### STEUERN_SERVICEHISTORY_ERASE

Gesamte Servicehistorie auf der HU löschen

_No arguments._

### STEUERN_SERVICEHISTORY_ADD

Servicehistorie Datensatz auf der HU hinzufügen

| Name | Type | Description |
| --- | --- | --- |
| ARG_WARTUNGSTAG | unsigned char | Wartungstag |
| ARG_WARTUNGSMONAT | unsigned char | Wartungsmonat |
| ARG_WARTUNGSJAHR | unsigned int | Wartungsjahr als Zahlwert also Jahr 2010 ist dann 2010 |
| ARG_KORREKTURZAEHLER | unsigned char | Default 0 bei Korrekturwunsch inkrementieren |
| ARG_KMSTAND | unsigned long | Kilometerstand zum Zeitpunkt der Serviceannahme (unabhängig davon, ob das Kombi Kilometer oder Meilen anzeigt) |
| ARG_FLAG_BMW_HAENDLER | unsigned char | 1 BMW Händler, 0 unabhängiger Marktteilnehmer |
| ARG_HAENDLERNUMMER | string | Zeichenfolge ASCII |
| ARG_WARTUNGSSTATUS | unsigned char | 0x1 = Wartung durchgeführt, 0x2 = Wartung verspätet durchgeführt, 0x3 Wartung unvollständig |
| ARG_ANZAHL_WARTUNGSEINTRAEGE | unsigned char | Gibt an wieviele der folgenden Wartungseinträge ausgefüllt werden sollen |
| ARG_WARTUNGSTEXT_1 | unsigned char | Eindeutiger Code des anzuzeigenden Textes (z.B. 'Bremsbeläge vorne') |
| ARG_STATUSWARTUNGSPOS_1 | unsigned char | 0x1 = Wartung durchgeführt, 0x2 = Wartung verspätet durchgeführt, 0x3 Wartung überfällig |
| ARG_RESTDISTANZ_1 | long | Restdistanz |
| ARG_RESTZEIT_1 | unsigned int | Restzeit |
| ARG_WARTUNGSTEXT_2 | unsigned char | Eindeutiger Code des anzuzeigenden Textes (z.B. 'Bremsbeläge vorne') |
| ARG_STATUSWARTUNGSPOS_2 | unsigned char | 0x1 = Wartung durchgeführt, 0x2 = Wartung verspätet durchgeführt, 0x3 Wartung überfällig |
| ARG_RESTDISTANZ_2 | long | Restdistanz |
| ARG_RESTZEIT_2 | unsigned int | Restzeit |
| ARG_WARTUNGSTEXT_3 | unsigned char | Eindeutiger Code des anzuzeigenden Textes (z.B. 'Bremsbeläge vorne') |
| ARG_STATUSWARTUNGSPOS_3 | unsigned char | 0x1 = Wartung durchgeführt, 0x2 = Wartung verspätet durchgeführt, 0x3 Wartung überfällig |
| ARG_RESTDISTANZ_3 | long | Restdistanz |
| ARG_RESTZEIT_3 | unsigned int | Restzeit |
| ARG_WARTUNGSTEXT_4 | unsigned char | Eindeutiger Code des anzuzeigenden Textes (z.B. 'Bremsbeläge vorne') |
| ARG_STATUSWARTUNGSPOS_4 | unsigned char | 0x1 = Wartung durchgeführt, 0x2 = Wartung verspätet durchgeführt, 0x3 Wartung überfällig |
| ARG_RESTDISTANZ_4 | long | Restdistanz |
| ARG_RESTZEIT_4 | unsigned int | Restzeit |
| ARG_WARTUNGSTEXT_5 | unsigned char | Eindeutiger Code des anzuzeigenden Textes (z.B. 'Bremsbeläge vorne') |
| ARG_STATUSWARTUNGSPOS_5 | unsigned char | 0x1 = Wartung durchgeführt, 0x2 = Wartung verspätet durchgeführt, 0x3 Wartung überfällig |
| ARG_RESTDISTANZ_5 | long | Restdistanz |
| ARG_RESTZEIT_5 | unsigned int | Restzeit |
| ARG_WARTUNGSTEXT_6 | unsigned char | Eindeutiger Code des anzuzeigenden Textes (z.B. 'Bremsbeläge vorne') |
| ARG_STATUSWARTUNGSPOS_6 | unsigned char | 0x1 = Wartung durchgeführt, 0x2 = Wartung verspätet durchgeführt, 0x3 Wartung überfällig |
| ARG_RESTDISTANZ_6 | long | Restdistanz |
| ARG_RESTZEIT_6 | unsigned int | Restzeit |
| ARG_WARTUNGSTEXT_7 | unsigned char | Eindeutiger Code des anzuzeigenden Textes (z.B. 'Bremsbeläge vorne') |
| ARG_STATUSWARTUNGSPOS_7 | unsigned char | 0x1 = Wartung durchgeführt, 0x2 = Wartung verspätet durchgeführt, 0x3 Wartung überfällig |
| ARG_RESTDISTANZ_7 | long | Restdistanz |
| ARG_RESTZEIT_7 | unsigned int | Restzeit |
| ARG_WARTUNGSTEXT_8 | unsigned char | Eindeutiger Code des anzuzeigenden Textes (z.B. 'Bremsbeläge vorne') |
| ARG_STATUSWARTUNGSPOS_8 | unsigned char | 0x1 = Wartung durchgeführt, 0x2 = Wartung verspätet durchgeführt, 0x3 Wartung überfällig |
| ARG_RESTDISTANZ_8 | long | Restdistanz |
| ARG_RESTZEIT_8 | unsigned int | Restzeit |
| ARG_WARTUNGSTEXT_9 | unsigned char | Eindeutiger Code des anzuzeigenden Textes (z.B. 'Bremsbeläge vorne') |
| ARG_STATUSWARTUNGSPOS_9 | unsigned char | 0x1 = Wartung durchgeführt, 0x2 = Wartung verspätet durchgeführt, 0x3 Wartung überfällig |
| ARG_RESTDISTANZ_9 | long | Restdistanz |
| ARG_RESTZEIT_9 | unsigned int | Restzeit |
| ARG_WARTUNGSTEXT_10 | unsigned char | Eindeutiger Code des anzuzeigenden Textes (z.B. 'Bremsbeläge vorne') |
| ARG_STATUSWARTUNGSPOS_10 | unsigned char | 0x1 = Wartung durchgeführt, 0x2 = Wartung verspätet durchgeführt, 0x3 Wartung überfällig |
| ARG_RESTDISTANZ_10 | long | Restdistanz |
| ARG_RESTZEIT_10 | unsigned int | Restzeit |
| ARG_WARTUNGSTEXT_11 | unsigned char | Eindeutiger Code des anzuzeigenden Textes (z.B. 'Bremsbeläge vorne') |
| ARG_STATUSWARTUNGSPOS_11 | unsigned char | 0x1 = Wartung durchgeführt, 0x2 = Wartung verspätet durchgeführt, 0x3 Wartung überfällig |
| ARG_RESTDISTANZ_11 | long | Restdistanz |
| ARG_RESTZEIT_11 | unsigned int | Restzeit |
| ARG_WARTUNGSTEXT_12 | unsigned char | Eindeutiger Code des anzuzeigenden Textes (z.B. 'Bremsbeläge vorne') |
| ARG_STATUSWARTUNGSPOS_12 | unsigned char | 0x1 = Wartung durchgeführt, 0x2 = Wartung verspätet durchgeführt, 0x3 Wartung überfällig |
| ARG_RESTDISTANZ_12 | long | Restdistanz |
| ARG_RESTZEIT_12 | unsigned int | Restzeit |
| ARG_WARTUNGSTEXT_13 | unsigned char | Eindeutiger Code des anzuzeigenden Textes (z.B. 'Bremsbeläge vorne') |
| ARG_STATUSWARTUNGSPOS_13 | unsigned char | 0x1 = Wartung durchgeführt, 0x2 = Wartung verspätet durchgeführt, 0x3 Wartung überfällig |
| ARG_RESTDISTANZ_13 | long | Restdistanz |
| ARG_RESTZEIT_13 | unsigned int | Restzeit |

### STEUERN_PROVISIONING_DATA

Schreiben der Provisionierungsdaten

| Name | Type | Description |
| --- | --- | --- |
| ARG_TYPE | unsigned char | Welche Daten geschrieben werden sollen 0x01 DPAS 0x03 OTA |
| ARG_PATH | string | absolute and complete path to file that shall be written |
| ARG_INDEX | unsigned char | Index des Provisioningsatzes (für DPAS) von 0-9 |

### DIAGTUNNELLING_UDS

complete tunneling of UDS telegrams

| Name | Type | Description |
| --- | --- | --- |
| ARG_UDS | string | Haupt UDS stream ab ServiceID bsp.:21D02A |

### STEUERN_CID_GENERISCH

Sends commands to the CID module

| Name | Type | Description |
| --- | --- | --- |
| ARG_CID_GENERISCH | string | cmd string 'llllccccdd...' llll - len of the following cccc - 2 Bytes internal CID command code dd...- n bytes data in the request |
| STAT_CID_GENERISCH | string | result string |

### STATUS_HIGHSYNC_CONNECTION_TABLE_EXT

This Job reads out the HighSyncConnectionTable or all implemented connection-IDs.

| Name | Type | Description |
| --- | --- | --- |
| ARG_CONNECTION_TABLE_TYPE | unsigned char | Switches between the actual active connection or all impemented connections in the system. 0x00 active connection, 0x01 all implemented connections, 0xFF Not defined |

### STEUERN_PROVISIONING_DATA_DELETE

Delete provisioning data

_No arguments._

### STEUERN_ZIN_GENERISCH

Sends commands to the ZIN module

| Name | Type | Description |
| --- | --- | --- |
| ARG_ZIN_GENERISCH | string | cmd string 'llllccccdd...' llll - len of the following cccc - 2 Bytes internal ZIN command code dd...- n bytes data in the request |
| STAT_ZIN_GENERISCH | string | result string |

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

### VERBAUORTTABELLE

| ORT | ORTTEXT | LIN_2_FORMAT |
| --- | --- | --- |
| 0x0100 | Batteriesensor BSD | - |
| 0x0150 | Ölqualitätsensor BSD | - |
| 0x0200 | Elektrische Wasserpumpe BSD | - |
| 0x0250 | Elektrische Kraftstoffpumpe BSD | - |
| 0x0300 | Generator 1 | - |
| 0x0350 | Generator 2 | - |
| 0x03A0 | Druck- Temperatursensor Tank | 1 |
| 0x03C0 | EAC-Sensor | - |
| 0x0400 | Schaltzentrum Lenksäule | - |
| 0x0500 | DSC Sensor-Cluster | - |
| 0x0600 | Nahbereichsradarsensor links | - |
| 0x0700 | Nahbereichsradarsensor rechts | - |
| 0x0800 | Funkempfänger | - |
| 0x0900 | Elektrische Lenksäulenverriegelung | - |
| 0x0A00 | Regen- Lichtsensor | - |
| 0x290A00 | DSC Hydraulikblock | - |
| 0x0B00 | Nightvision Kamera | - |
| 0x0C00 | TLC Kamera | - |
| 0x0D00 | Spurwechselradarsensor hinten links | - |
| 0x0E00 | Heckklima Bedienteil rechts | 1 |
| 0x0F00 | Rearview Kamera hinten | 1 |
| 0x0F80 | Frontview Kamera vorne | 1 |
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1210 | Sideview Kamera Kotflügel vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
| 0x1310 | Sideview Kamera Kotflügel vorne rechts | 1 |
| 0x1400 | Wischermotor | 1 |
| 0x1500 | Regen- Lichtsensor | 1 |
| 0x1600 | Innenspiegel | 1 |
| 0x1700 | Garagentoröffner | 1 |
| 0x1800 | AUC-Sensor | 1 |
| 0x1900 | Druck- Temperatursensor | 1 |
| 0x1A20 | Schalterblock Sitzheizung hinten links | 1 |
| 0x1A40 | Schalterblock Sitzheizung hinten rechts | 1 |
| 0x1A60 | Sitzheizung Fahrer | 1 |
| 0x1A80 | Sitzheizung Beifahrer | 1 |
| 0x1AA0 | Sitzheizung Fahrer hinten | 1 |
| 0x1AC0 | Sitzheizung Beifahrer hinten | 1 |
| 0x1B00 | Schalterblock Sitzmemory/-massage Fahrer | 1 |
| 0x1C00 | Schalterblock Sitzmemory/-massage Beifahrer | 1 |
| 0x1C80 | Sitzverstellschalter Beifahrer über Fond | 1 |
| 0x1D00 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x1E00 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x1E40 | Heckklappenemblem | 1 |
| 0x1F00 | KAFAS Kamera | 1 |
| 0x2000 | Automatische Anhängevorrichtung | 1 |
| 0x2100 | SINE | 1 |
| 0x2110 | DWA Mikrowellensensor vorne rechts | 1 |
| 0x2120 | DWA Mikrowellensensor hinten rechts | 1 |
| 0x2130 | DWA Mikrowellensensor hinten links | 1 |
| 0x2140 | DWA Mikrowellensensor vorne links | 1 |
| 0x2150 | DWA Mikrowellensensor hinten | 1 |
| 0x2180 | DWA Ultraschallsensor | 1 |
| 0x2200 | Aussenspiegel Fahrer | - |
| 0x2210 | Aussenspiegel Fahrer | 1 |
| 0x2300 | Aussenspiegel Beifahrer | - |
| 0x2310 | Aussenspiegel Beifahrer | 1 |
| 0x2400 | Schaltzentrum Tür | 1 |
| 0x2500 | Schalterblock Sitz Fahrer | 1 |
| 0x2600 | Schalterblock Sitz Beifahrer | 1 |
| 0x2700 | Gurtbringer Fahrer | 1 |
| 0x2800 | Gurtbringer Beifahrer | 1 |
| 0x2900 | Treibermodul Scheinwerfer links | 1 |
| 0x2A00 | Treibermodul Scheinwerfer rechts | 1 |
| 0x2B00 | Bedieneinheit Fahrerassistenzsysteme | 1 |
| 0x2C00 | Bedieneinheit Licht | 1 |
| 0x2D00 | Smart Opener | 1 |
| 0x2E00 | LED-Hauptlicht-Modul links | 1 |
| 0x2F00 | LED-Hauptlicht-Modul rechts | 1 |
| 0x0910 | Elektrische Lenksäulenverriegelung | 1 |
| 0x3200 | Funkempfänger | 1 |
| 0x3300 | Funkempfänger 2 | 1 |
| 0x3400 | Türgriffelektronik Fahrer | - |
| 0x3500 | Türgriffelektronik Beifahrer | - |
| 0x3600 | Türgriffelektronik Fahrer hinten | - |
| 0x3700 | Türgriffelektronik Beifahrer hinten | - |
| 0x3800 | Telestart-Handsender 1 | - |
| 0x3900 | Telestart-Handsender 2 | - |
| 0x3A00 | Fond-Fernbedienung | - |
| 0x3B00 | Elektrische Wasserpumpe | 1 |
| 0x3B10 | Elektrische Wasserpumpe 1 | 1 |
| 0x3B20 | Elektrische Wasserpumpe 2 | 1 |
| 0x3B80 | Elektrische Zusatzwasserpumpe | 1 |
| 0x3C00 | Batteriesensor LIN | - |
| 0x3D00 | Aktives Kühlklappensystem | 1 |
| 0x3D10 | Aktiver Kühlluftklappensteller oberer Kühllufteinlass | 1 |
| 0x3D20 | Aktiver Kühlluftklappensteller unterer Kühllufteinlass | 1 |
| 0x3D80 | Lüfter | 1 |
| 0x3D88 | Lüfter 2 | 1 |
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3E80 | DCDC Versorgung Zustartbatterie | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x3F80 | Generator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4600 | Nackenwärmer | 1 |
| 0x4700 | Nackenwärmer Bedienschalter | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x4C00 | Klimabedienteil | 1 |
| 0x4C80 | Klimabedienteil 3. Sitzreihe | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x4FC0 | Elektrischer Zuheizer 3. Sitzreihe | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6180 | LIN-Zusatzwasserpumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
| 0x6500 | Sense-Touch-Modul links | 1 |
| 0x6600 | Sense-Touch-Modul rechts | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
| 0x570C | Satellit Upfront mitte | 0 |
| 0x5710 | Satellit Tür links | 0 |
| 0x5718 | Satellit Tür rechts | 0 |
| 0x5720 | Satellit B-Säule links X | 0 |
| 0x5728 | Satellit B-Säule rechts X | 0 |
| 0x5730 | Satellit B-Säule links Y | 0 |
| 0x5738 | Satellit B-Säule rechts Y | 0 |
| 0x5740 | Satellit Zentralsensor X | 0 |
| 0x5748 | Satellit Zentralsensor Y | 0 |
| 0x5750 | Satellit Zentralsensor Low g Y | 0 |
| 0x5758 | Satellit Zentralsensor Low g Z | 0 |
| 0x5760 | Satellit Zentralsensor Roll Achse | 0 |
| 0x5768 | Fussgängerschutz Sensor vorne links | 0 |
| 0x5770 | Fussgängerschutz Sensor vorne rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor vorne mitte | 0 |
| 0x5780 | Fussgängerschutzsensor statisch | 0 |
| 0x5782 | Fussgängerschutz Zusatzsensor Beschleunigung links | 0 |
| 0x5784 | Fussgängerschutz Zusatzsensor Beschleunigung rechts | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x57B0 | Fussgängerschutzsensor dynamisch 1 | 0 |
| 0x57B8 | Fussgängerschutzsensor dynamisch 2 | 0 |
| 0x57C0 | Satellit Drucksensor Schlauch PTS 1 vorne links p | 0 |
| 0x57C4 | Satellit Drucksensor Schlauch PTS 1 vorne rechts p | 0 |
| 0x57C8 | Satellit Drucksensor Schlauch PTS 2 vorne links p | 0 |
| 0x57CC | Satellit Drucksensor Schlauch PTS 2 vorne rechts p | 0 |
| 0x57D0 | Beschleunigungssensor vorne links X | 0 |
| 0x57D4 | Beschleunigungssensor vorne mitte X | 0 |
| 0x57D8 | Beschleunigungssensor vorne rechts X | 0 |
| 0x57DC | Beschleunigungssensor hinten mitte X | 0 |
| 0x57E0 | Sitzbelegungserkennung Beifahrer CIS/Bladder | 1 |
| 0x57E4 | Sitzbelegungserkennung 2. Sitzreihe links CIS/Bladder | 1 |
| 0x57E8 | Sitzbelegungserkennung 2. Sitzreihe rechts CIS/Bladder | 1 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0x5A00 | Innenlichtelektronik | 1 |
| 0x5A01 | Innenbeleuchtung - Lichtschwert links | 1 |
| 0x5A02 | Innenbeleuchtung - Lichtschwert rechts | 1 |
| 0x5A03 | Innenbeleuchtung - Lautsprecher Hutablage rechts | 1 |
| 0x5A04 | Innenbeleuchtung - Lautsprecher Hutablage links | 1 |
| 0x5A05 | Innenbeleuchtung - Lautsprecher hinten links | 1 |
| 0x5A06 | Innenbeleuchtung - Lautsprecher Mitteltöner vorne links | 1 |
| 0x5A07 | Innenbeleuchtung - Lautsprecher Hochtöner vorne links | 1 |
| 0x5A08 | Innenbeleuchtung - Lautsprecher hinten rechts | 1 |
| 0x5A09 | Innenbeleuchtung - Lautsprecher Mitteltöner vorne rechts | 1 |
| 0x5A0A | Innenbeleuchtung - Lautsprecher Hochtöner vorne rechts | 1 |
| 0x5A0B | Innenbeleuchtung - Lautsprecher Centerspeaker | 1 |
| 0x5A0C | Innenbeleuchtung - Panoramadach LED Modul 1 (hinteres Glasfestelement) | 1 |
| 0x5A0D | Innenbeleuchtung - Panoramadach LED Modul 2 (hinteres Glasfestelement) | 1 |
| 0x5A0E | Innenbeleuchtung - Panoramadach LED Modul 3 (hinteres Glasfestelement) | 1 |
| 0x5A0F | Innenbeleuchtung - Panoramadach LED Modul 4 (hinteres Glasfestelement) | 1 |
| 0x5A10 | Innenbeleuchtung - Panoramadach LED Modul 5 (vorderes Glasschiebedach) | 1 |
| 0x5A11 | Innenbeleuchtung - Panoramadach LED Modul 6 (vorderes Glasschiebedach) | 1 |
| 0x5A12 | Innenbeleuchtung - Panoramadach LED Modul 7 (vorderes Glasschiebedach) | 1 |
| 0x5A13 | Innenbeleuchtung - Panoramadach LED Modul 8 (vorderes Glasschiebedach) | 1 |
| 0x5A14 | Touch Command Snap-In Adapter - Mittelkonsole Fond | 1 |
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
| 0x5A40 | Innenlichteinheit 4 | 1 |
| 0x5A50 | Innenlichteinheit 5 | 1 |
| 0x5AFF | unbekannter Verbauort | - |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5B60 | Fondcontroller | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Konturlinie Fahrertür vorne | 1 |
| 0x5E06 | Innenbeleuchtung Dekor indirekt Fahrertür vorne | 1 |
| 0x5E07 | Innenbeleuchtung Türöffner Fahrertür vorne | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Konturlinie Fahrertür hinten | 1 |
| 0x5E0A | Innenbeleuchtung Dekor indirekt Fahrertür hinten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Konturlinie Beifahrertür vorne | 1 |
| 0x5E0D | Innenbeleuchtung Dekor indirekt Beifahrertür vorne | 1 |
| 0x5E0E | Innenbeleuchtung Türöffner Beifahrertür vorne | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Konturlinie Beifahrertür hinten | 1 |
| 0x5E11 | Innenbeleuchtung Dekor indirekt Beifahrertür hinten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung Konturlinie I-Tafel Fahrer | 1 |
| 0x5E14 | Innenbeleuchtung Dekor indirekt I-Tafel Fahrer | 1 |
| 0x5E15 | Innenbeleuchtung Konturlinie I-Tafel Mitte | 1 |
| 0x5E16 | Innenbeleuchtung Dekor indirekt I-Tafel Mitte | 1 |
| 0x5E17 | Innenbeleuchtung Konturlinie I-Tafel Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung Dekor indirekt I-Tafel Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack Ablagefach | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E21 | Innenbeleuchtung Türöffner Fahrertür hinten | 1 |
| 0x5E22 | Innenbeleuchtung Türöffner Beifahrertür hinten | 1 |
| 0x5E23 | Innenbeleuchtung Fußraum Fahrer 3SR | 1 |
| 0x5E24 | Innenbeleuchtung Fußraum Beifahrer 3SR | 1 |
| 0x5E25 | Innenbeleuchtung Kartentasche Fahrertür 3SR | 1 |
| 0x5E26 | Innenbeleuchtung Kartentasche Beifahrertür 3SR | 1 |
| 0x5E27 | Innenbeleuchtung Konturlinie Fahrertür 3SR | 1 |
| 0x5E28 | Innenbeleuchtung Konturlinie Beifahrertür 3SR | 1 |
| 0x5E29 | Innenbeleuchtung Dekor indirekt Fahrertür 3SR | 1 |
| 0x5E2A | Innenbeleuchtung Dekor indirekt Beifahrertür 3SR | 1 |
| 0x5E2B | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer vorne | 1 |
| 0x5E2C | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer hinten | 1 |
| 0x5E2D | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer vorne | 1 |
| 0x5E2E | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer hinten | 1 |
| 0x5E2F | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer vorne | 1 |
| 0x5E30 | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer hinten | 1 |
| 0x5E31 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer vorne | 1 |
| 0x5E32 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer hinten | 1 |
| 0x5E33 | Innenbeleuchtung Backpanel Fahrersitz 2SR | 1 |
| 0x5E34 | Innenbeleuchtung Backpanel Beifahrersitz 2SR | 1 |
| 0x5E35 | Innenbeleuchtung Panoramadach Glasdeckel Front links vorne | 1 |
| 0x5E36 | Innenbeleuchtung Panoramadach Glasdeckel Front links hinten | 1 |
| 0x5E37 | Innenbeleuchtung Panoramadach Glasdeckel Front rechts vorne | 1 |
| 0x5E38 | Innenbeleuchtung Panoramadach Glasdeckel Front rechts hinten | 1 |
| 0x5E39 | Innenbeleuchtung Panoramadach Glasdeckel Fond links vorne | 1 |
| 0x5E3A | Innenbeleuchtung Panoramadach Glasdeckel Fond links hinten | 1 |
| 0x5E3B | Innenbeleuchtung Panoramadach Glasdeckel Fond rechts vorne | 1 |
| 0x5E3C | Innenbeleuchtung Panoramadach Glasdeckel Fond rechts hinten | 1 |
| 0x5E3D | Innenbeleuchtung Lichtschwert links | 1 |
| 0x5E3E | Innenbeleuchtung Lichtschwert rechts | 1 |
| 0x5E3F | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne vorne | 1 |
| 0x5E40 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne hinten | 1 |
| 0x5E41 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten vorne | 1 |
| 0x5E42 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten hinten | 1 |
| 0x5E43 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne vorne | 1 |
| 0x5E44 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne hinten | 1 |
| 0x5E45 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten vorne | 1 |
| 0x5E46 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten hinten | 1 |
| 0x5E47 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer vorne | 1 |
| 0x5E48 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer hinten | 1 |
| 0x5E49 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer vorne | 1 |
| 0x5E4A | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer hinten | 1 |
| 0x5E4B | Innenbeleuchtung Cupholder vorne | 1 |
| 0x5E4C | Innenbeleuchtung Cupholder hinten | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
| 0x5EC0 | Thermocupholder | 1 |
| 0x5F00 | Integrierte Fensterheber Elektronik Fahrer | 1 |
| 0x5F10 | Integrierte Fensterheber Elektronik Beifahrer | 1 |
| 0x5F20 | Integrierte Fensterheber Elektronik Fahrer hinten | 1 |
| 0x5F30 | Integrierte Fensterheber Elektronik Beifahrer hinten | 1 |
| 0x5F40 | Schalterblock Sitzmemory Fahrer | 1 |
| 0x5F50 | Schalterblock Sitzmemory Beifahrer | 1 |
| 0x5F60 | Schalterblock Sitzmemory Fahrer hinten | 1 |
| 0x5F70 | Schalterblock Sitzmemory Beifahrer hinten | 1 |
| 0x5F80 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x5F90 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x5FA0 | Bedieneinheit Mittelkonsole | 1 |
| 0x5FB0 | WB und SARAH Schalter | 1 |
| 0x5FC0 | ABW-Türschloss Fahrer | 1 |
| 0x5FD0 | ABW-Türschloss Beifahrer | 1 |
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
| 0x7040 | Frontwischermotor | 1 |
| 0x7100 | NFC Leser Innenraum vorne | 1 |
| 0x7108 | NFC Leser Türgriff Fahrer | 1 |
| 0x7200 | Spurwechselradarsensor vorne rechts | 1 |
| 0x7208 | Spurwechselradarsensor vorne links | 1 |
| 0x7210 | Spurwechselradarsensor hinten rechts (Master) | 1 |
| 0x7218 | Spurwechselradarsensor hinten links | 1 |
| 0x7300 | Tanksensor links | 1 |
| 0x7310 | Tanksensor rechts | 1 |
| 0x7400 | Cargo Steuergeraet | 1 |
| 0x7500 | CID-Klappe | 1 |
| 0x7600 | Handschuhkasten | 1 |
| 0x7620 | Sternenhimmel Steuergerät | 1 |
| 0x7640 | Partition Wall Steuergerät | 1 |
| 0x7680 | Durchreiche Partition Wall | 1 |
| 0x76A0 | Bedienelement Dach | 1 |
| 0x7700 | Booster | 1 |
| 0x7800 | Dualspeicher | 1 |
| 0x7900 | Tablet | - |
| 0x7A00 | Beschleunigungssensor vorne links | 1 |
| 0x7A08 | Beschleunigungssensor vorne rechts | 1 |
| 0x7A10 | Beschleunigungssensor hinten links | 1 |
| 0x7A18 | Beschleunigungssensor hinten rechts | 1 |
| 0x7A20 | Abdeckrollo-Steuergerät | 1 |
| 0x7A28 | Schalterblock Gepäckraum | 1 |
| 0x7A30 | Unteres Heckklappenschloss links | 1 |
| 0x7A38 | Unteres Heckklappenschloss rechts | 1 |
| 0x7B00 | ISC - Inertial Sensor Cluster | 1 |
| 0xFFFF | unbekannter Verbauort | - |

### PARTNRTABELLE

| PART_NR | BMW_NR | KOMMENTAR |
| --- | --- | --- |
| -- | -- | unbekannte Teilenummer |

### LIEFERANTENLIN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x0001 | Audi |
| 0x0002 | BMW |
| 0x0003 | Daimler AG |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars |
| 0x0008 | Ford Motor Company |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis GmbH |
| 0x0014 | Microchip Technology Inc |
| 0x0015 | Centro Ricerche FIAT |
| 0x0016 | Renesas Technology Europe GmbH (formerly Mitsubishi) |
| 0x0017 | Atmel Germany GmbH |
| 0x0018 | Magneti Marelli S.p. A |
| 0x0019 | NEC Electronics GmbH |
| 0x001A | Fujitsu Microelectronics Europe GmbH |
| 0x001B | Adam Opel AG |
| 0x001C | Infineon Technologies AG |
| 0x001D | AMI Semiconductor Belguim BVBA |
| 0x001E | Vector Informatik GmbH |
| 0x001F | Brose Fahrzeugteile GmbH & Co |
| 0x0020 | Zentrum Mikroelektronik Dresden AG |
| 0x0021 | ihr GmbH |
| 0x0022 | Visteon Deutschland GmbH |
| 0x0023 | Elmos Semiconductor AG |
| 0x0024 | ON Semiconductor Germany GmbH |
| 0x0025 | Denso Corporation |
| 0x0026 | C&S Group GmbH |
| 0x0027 | Renault SA |
| 0x0028 | Renesas Technology Europe Ltd (formerly Hitachi) |
| 0x0029 | Yazaki Europe Ltd |
| 0x002A | Trinamic Microchips GmbH |
| 0x002B | Allegro Microsystems, Inc |
| 0x002C | Toyota Motor Engineering and Manufacturing Europe N.V / S.A |
| 0x002D | PSA Peugeot Citroën |
| 0x002E | Forschungs - und Transferzentrum e.V. der Westsächsische Hochschule Zwickau |
| 0x002F | Micron Electronic Devices AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA & Co. |
| 0x0037 | Continental Automotive |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH - Robert Bosch |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electrics Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | DST Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0x0051 | MAGNA-Donnelly GmbH&Co.KG |
| 0x0052 | IEE S.A. |
| 0x0053 | austriamicrosystems AG |
| 0x0054 | Agilent Technologies, Inc. |
| 0x0055 | Lear Corporation  |
| 0x0056 | KOSTAL Ireland GmbH |
| 0x0057 | LIPOWSKY Industrie-Elektronik GmbH  |
| 0x0058 | Sanken Electric Co.,Ltd |
| 0x0059 | Elektrobit Automotive GmbH |
| 0x005A | VIMERCATI S.p.A. |
| 0x005B | VOLVO Group Trucks |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic GmbH & Co. KG |
| 0x0061 | Flextronics / Sidler Automotive GmbH & Co. KG |
| 0x0062 | EAO Automotive GmbH & Co. KG |
| 0x0063 | helag-electronic gmbh |
| 0x0064 | Magna Electronics |
| 0x0065 | INTEVA Products, LLC (formerly Arvinmeritor 2011-03-29) |
| 0x0066 | Valeo SA |
| 0x0067 | Defond Holding / BJAutomotive / DAC |
| 0x0068 | Industrie Saleri S. p. A. |
| 0x0069 | ROHM Semicon GmbH |
| 0x0070 | Alfmeier Präzision AG |
| 0x0071 | Sanden Corporation |
| 0x0072 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x0073 | ebm-papst St. Georgen GmbH & Co. KG |
| 0x0074 | CATEM |
| 0x0075 | OMRON Automotive Electronics Technology GmbH |
| 0x0076 | Johnson Electric International |
| 0x0077 | A123 Systems |
| 0x0078 | IPG Automotive GmbH, Karlsruhe |
| 0x0079 | Daesung Electric Co. Ltd. |
| 0x007A | Kromberg & Schubert GmbH & Co. KG |
| 0x007B | Bury GmbH & Co. KG |
| 0x007E | Measurement Specialties Inc (MEAS) |
| 0x007F | MRS Electronic GmbH |
| 0x0082 | Dale Electronics Inc |
| 0x0083 | Mirror Controls international |
| 0x0084 | Keboda Technology Co. Ltd. |
| 0x0085 | SPD Control Systems Corporation |
| 0x0087 | Röchling Automotive AG & Co. KG |
| 0x0088 | AEV s.r.o |
| 0x0089 | Kongsberg Automotive AB/Mullsjö Works |
| 0x008A | May & Scofield Ltd |
| 0x008C | C&S Technology Inc |
| 0x008D | RDC Semiconductor Co., Ltd |
| 0x008E | Webasto AG |
| 0x008F | Accel Elektronika UAB |
| 0x0090 | FICOSA International S.A. |
| 0x0091 | Mahle |
| 0x0093 | Phoenix International |
| 0x0094 | John Deere |
| 0x0095 | Grayhill Inc |
| 0x0096 | AppliedSensor GmbH |
| 0x0097 | UST Umweltsensortechnik GmbH |
| 0x0098 | Digades GmbH |
| 0x0099 | Thomson Linear Motion |
| 0x009A | TriMark Corporation |
| 0x009B | KB Auto Tech Co., Ltd. |
| 0x009C | Methode Electronics, Inc |
| 0x009D | Danlaw, Inc. |
| 0x009E | Federal-Mogul Corporation |
| 0x009F | Fujikoki Corporation |
| 0x00A0 | MENTOR Gmbh & Co. Praezisions-Bauteile KG |
| 0x00A1 | Toyota Industries Corporation |
| 0x00A2 | Strattec Security Corp. |
| 0x00A3 | TE Connectivity |
| 0x00A4 | Westfalia Automotive GmbH |
| 0x00A5 | Woco Industrietechnik GmbH |
| 0x00A6 | Minebea Co., Ltd |
| 0x00A7 | Magna |
| 0x00A8 | Dong IL Technology |
| 0x00A9 | Wilo SE |
| 0x00AA | Remy International, Inc. |
| 0x00AB | ACCUmotive |
| 0x00AC | Carling Technologies |
| 0x00B0 | Hanon Systems Korea |
| 0x00B1 | Eberspächer Controls Esslingen GmbH & Co. KG |
| 0x00B2 | WABCO Development GmbH |
| 0x00B3 | Sensirion AG |
| 0x00B4 | OSHINO Electronics Estonia OÜ |
| 0x00B5 | Fishman Thermo Technologies  LTD |
| 0x00B6 | Novalog Ltd |
| 0x00B7 | Hanon Systems USA |
| 0x00B8 | Leggett & Platt Automotive Group |
| 0x00B9 | Tremec |
| 0x00BA | Check Corporation |
| 0x00BB | Federal-Mogul Corporation |
| 0x00BC | fischer automotive systems |
| 0x00BD | Hi-Lex Europe GmbH |
| 0x00BE | SGX Sensortech |
| 0x00BF | AGM Automotive |
| 0x00C0 | Melecs |
| 0x00C1 | Robertshaw Controls Company |
| 0x0100 | Isabellenhuette Heusler GmbH & Co. KG |
| 0x0101 | Huber Automotive AG |
| 0x0102 | Precision Motors Deutsche Minebea GmbH |
| 0x0103 | TK Holdings Inc., Electronics |
| 0x0104 | Cobra Automotive Technologies S.P.A. |
| 0x0105 | Embed Limited |
| 0x0106 | Kissling Elektrotechnik GmbH |
| 0x0107 | Autoliv B.V. & Co. KG |
| 0x0108 | PST Electronics |
| 0x0109 | BCA Leisure Ltd |
| 0x010A | APAG Elektronik AG |
| 0x010B | RAFI GmbH & Co. KG |
| 0x010C | Sonceboz AutomotiveSA |
| 0x010D | i2s Intelligente Sensorsysteme Dresden GmbH |
| 0x010E | AGM Automotive, Inc. |
| 0x010F | S&T Motiv |
| 0x0111 | UG Systems GmbH & Co. KG |
| 0x0113 | CHANGJIANG AUTOMOBILE ELECTRONIC SYSTEM CO.,LTD |
| 0x0114 | MES S.A. |
| 0x0115 | SL Corporation |
| 0x0116 | Dura Automotive Systems |
| 0x0118 | Delta Electronics, Inc. |
| 0x0119 | Penny and Giles Controls Ltd |
| 0x011A | Curtiss Wright Controls Industrial |
| 0x011B | HKR Seuffer Automotive GmbH & Co. KG |
| 0x011C | DMK U.S.A. Inc |
| 0x0120 | Littelfuse |
| 0x0121 | Hyundai MOBIS |
| 0x0122 | Alpine Electronics of America |
| 0x0123 | Ford Motor Company |
| 0x0124 | Hangzhou Sanhua Research Inst. Co, Ltd. |
| 0x0125 | Delvis |
| 0x0126 | Louko |
| 0x0127 | Etratech |
| 0x0128 | HiRain |
| 0x0129 | elobau GmbH & Co. KG |
| 0x012A | I.G.Bauerhin GmbH |
| 0x012B | HANS WIDMAIER  |
| 0x012C | Gentherm Inc |
| 0x012D | LINAK A/S |
| 0x012E | Casco Products Corporation |
| 0x012F | Bühler Motor GmbH |
| 0x0130 | SphereDesign GmbH |
| 0x0131 | Cooper Standard |
| 0x0132 | KÜSTER Automotive Control Systems GmbH |
| 0x0133 | SEWS-Components Europe B.V. |
| 0x0134 | OLHO tronic GmbH |
| 0x0135 | LG Electronics |
| 0x0136 | Eberspächer Controls GmbH & Co. KG |
| 0x0137 | AISIN Seiki Co., Ltd. |
| 0x0138 | Elektrosil Systeme der Elektronik GmbH |
| 0x0139 | Nidec Corporation |
| 0x013A | ISSI – Integrated Silicon Solution Inc |
| 0x013B | Twin Disc, Incorporated |
| 0x013C | SPAL Automotive Srl |
| 0x013D | OTTO Engineering, Inc. |
| 0xFFFF | unbekannter Hersteller |

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

### ARG_0X1032_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASU_STATE | + | - | 0-n | high | unsigned char | - | TASU_STEUERN_STATUS | - | - | - | - | - | Steuerung der TAS-Nutzung |

### ARG_0X1033_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASU_REQUEST | + | - | 0-n | high | unsigned int | - | TASU_REQUEST_TAB | - | - | - | - | - | auszuführendes Kommando |

### ARG_0X1046_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Portindex des zur diagnostizierenden Ports/PHYs (beginnend bei Port 0). Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports) |

### ARG_0X1047_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Portindex Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports) |

### ARG_0X1048_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des Ports, an dem der Test gestartet werden soll. Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports)  Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports) |
| LOOPBACK_MODE | + | - | 0-n | high | unsigned char | - | ETH_LOOPBACK_MODE_TAB | - | - | - | - | - | 1 = internal Loopback-Mode, 2 = external Loopback-Mode, sonst = ungültig |

### ARG_0X104C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des Ports, für den der Testmodus geschaltet werden soll. |
| TEST_DURATION | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeit, für die der Testmodus geschaltet werden soll. Der Wert wird im SG mit 10 multipliziert, so dass die Testdauer von 0s bis 2550s variiert werden kann. |
| TEST_MODE_ID | + | - | 0-n | high | unsigned char | - | ETH_TEST_MODE_TAB | - | - | - | - | - | ID des Testmodus, in den der PHY geschaltet werden soll |

### ARG_0X400B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TESTBILD | 0-n | high | unsigned char | - | TAB_CID_TESTPICTURE_EXTENDED | - | - | - | - | - | Selection of extended test picture ID  table  TCIDTestpictureExtended 0x00 Stop displaying test picture and return to Video Mode 0x01 Black picture 0x02 Blue picture 0x03 Red picture 0x04 Green picture 0x05 No-Signal-Screen 0x06 White L63 0x07 Yellow 0x08 Cyan 0x09 Magenta 0x0A Grey L5 0x0B Grey L9 0x0C Grey L13 0x0D Grey L17 0x0E Grey L21 0x0F Grey L25 0x10 Grey L29 0x11 Grey L34 0x12 Grey L38 0x13 Grey L42 0x14 Grey L46 0x15 Grey L50 0x16 Grey L54 0x17 Grey L58 0x18 Color Bar 0x19 Horizontal Flicker Check 0x1A Vertical Flicker Check 0x1B 32 Grey Steps 0x1C 32 Grey Steps for RED 0x1D 32 Grey Steps for GREEN 0x1E 32 Grey Steps for BLUE 0xFF Not defined |

### ARG_0X400C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RGB_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Video mode  0x00 stop displaying test picture and return to video mode 0x01 Display requested test picture in corresponding RGB color  |
| ARG_RGB_VALUE | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Desired RGB color in data   format 0x00RRGGBB  (RR=Red, GG=Green, BB=Blue) Range: [0x00000000¿0x00FFFFFF] 0xFFFFFFFF Not defined |

### ARG_0X400D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TEMP_COUNTERS01 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 01 of the CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS02 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 02 of the CID. Range: [0x00 - 0x64] 0- 100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS03 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 03 of the CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS04 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 04 of the CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF invalid value |

### ARG_0X4033_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 150.0 | 108000.0 | einzustellende Frequenz im Bereich von 150 - 108000 [kHz] |

### ARG_0X4034_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TP | 0-n | - | unsigned char | - | TAB_TP | - | - | - | - | - | Steuert die TP Funktionalität; Default: 2 |
| ARG_RDS | 0-n | - | unsigned char | - | TAB_RDS | - | - | - | - | - | Steuert die RDS Funktionalität; Default: 2 |

### ARG_0XA000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_KLANGZEICHEN | + | - | 0-n | - | unsigned char | - | TAB_KLANGZEICHEN | - | - | - | - | - | Legt das auszugebende Signal fest (Klingel,Gong):siehe Tabelle TKlangzeichen |

### ARG_0XA001_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | + | - | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 20.0 | 20000.0 | Frequenzeinstellung: 20..20 000 Hz |
| ARG_LEVEL | + | - | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | -96.0 | 127.0 | Bei Headunits: Hex-Wert, von 0x00 lückenlos bis 0x7F, Nicht unterstützte Werte (Stereo: 0x3F) dürfen nicht zu Fehlermeldungen führen.Sondern die für das Lautsprechersystem nächstmöglich kleinere verfügbare Lautstärke wird eingestellt.  Bei Verstärkern: Integer,-96..0 [dB] |
| ARG_KANAL | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | bezeichnet den Kanal, auf dem ausgegeben werden soll. Tabelle TAudioKanal |

### ARG_0XA003_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PDC_SIGNAL | + | - | 0-n | - | unsigned char | - | TAB_PDCSIGNAL | - | - | - | - | - | PDC Ton: siehe TAB_PDCSIGNAL |
| AUDIO_STEP | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | PDC Ton: Lautstärke abhängig vom Abstand zum Objekt (Schritte von 0-82) |

### ARG_0XA00B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ENTSOURCE | + | - | 0-n | - | unsigned char | - | TAB_ENTSOURCE | - | - | - | - | - | die auszuwählende Entertainmentquelle |

### ARG_0XA00E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ACTIVATION | + | - | 0-n | - | unsigned char | - | TNaviSimulationModeActivationAction | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XA01C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_QUELLE | + | - | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | - | - | Stellt eine Videoverbindung zwischen einer Quelle und mehreren Senken her. Legt die Videoquelle fest, von der aus das Signal verteilt wird. Tabelle TVideoQuelle |
| ARG_SENKEN | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Stellt eine Videoverbindung zwischen einer Quelle und mehreren Senken her. Tabelle TVideoSenke |
| ARG_TIMEOUT | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer, für die die Verbindung hergestellt wird. Wertebereich: 0-30,255; Default: 255; 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die die Videoverbindung aufrecht erhalten wird. Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis der Job erneut mit Parameter 0 aufgerufen wird oder das Steuergerät neu startet (Aufwachen, Reset, &) |

### ARG_0XA01D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_QUELLE | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Wertet das Signal von einer oder mehreren Quellen aus. Legt die Videoquelle fest, von der aus das Signal auf die Senke geroutet wird: Tabelle TAB_VIDEOSOURCE bzw. TAB_EINGANGVIDEOSWITCH |

### ARG_0XA01E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VERBAU_ROUTINE | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Routinen, die getestet werden sollen. Tabelle TAB_VERBAUROUTINE |

### ARG_0XA021_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | + | - | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Integer, 20..20 000 [Hz] Bei Verstärkern: 8 000 ... 20 000 [Hz] |
| ARG_LEVEL | + | - | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F, Nicht unterstützte Werte (Stereo: 0x3F) dürfen nicht zu Fehlermeldungen führen. Sondern die für das Lautsprechersystem nächstmöglich kleinere verfügbare Lautstärke wird eingestellt.   Bei Verstärkern: Integer, -50..0 [dB] |
| ARG_KANAL | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | bezeichnet den Kanal, auf dem gemessen werden soll. Tabelle TAudioKanal |
| ARG_MESSDAUER | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | legt die Dauer der Messung fest. Bereich: 50-1000ms Bei Verstärkern: Bereich: 200-3000ms |

### ARG_0XA025_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LANGUAGE | + | - | 0-n | - | unsigned char | - | TAB_LANGUAGE | - | - | - | - | - | legt die Sprache fest |

### ARG_0XA027_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_COMMAND | + | - | 0-n | - | unsigned char | - | TAB_NAVI_LANGUAGE | - | - | - | - | - | testet die Sprachausgabe des Navi |

### ARG_0XA036_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LEVEL | + | - | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F Bei manchen sekundären Lautstärken wie Navi-Out wird die Lautstärke relativ angegeben, z.B: [-11;11]  Bei Verstärkern: Integer, -96..0 [dB] |
| ARG_AUDIO_SIGNAL | + | - | 0-n | - | unsigned char | - | TAB_AUDIO_SOURCE | - | - | - | - | - | Gibt an, welche Lautstärke verstellt oder ausgelesen werden soll. Default: 0 |

### ARG_0XA037_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TRACK | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wählt die CD/DVD-Tracknummer die abgespielt werden soll. |

### ARG_0XA039_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_AUDIO_SIGNAL | + | - | 0-n | - | unsigned char | - | TAB_AUDIO_SOURCE | - | - | - | - | - | Gibt an, welche Lautstärke ausgelesen werden soll. Default: 0 |

### ARG_0XA03A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ACTION | + | - | 0-n | - | unsigned char | - | TNaviMapAction | 1.0 | 1.0 | 0.0 | - | - | Löschen oder Deaktivieren der Kunden Navigation Karte |

### ARG_0XA03C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DURATION | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 30.0 | Dauer in Sekunden, für die der Lüfter bei maximaler Drehzahl rotiert |
| ARG_RPM | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Umdrehungen pro Minute (ARG_RPM X 100 = RPM) |

### ARG_0XA048_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT | + | - | 0-n | - | unsigned char | - | TAB_BLUETOOTH_STATUS | - | - | - | - | - | setzt den Bluetooth Status |

### ARG_0XA049_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT_ERKENNUNGSMODUS | + | - | 0-n | - | unsigned char | - | TAB_BT_DETECTION_MODE_STATUS | - | - | - | - | - | steuert den BT Erkennungsmodus |

### ARG_0XA04A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_EINTRAG_NR | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Nummer Telefoneintrag |

### ARG_0XA082_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA_TO_RESET | + | - | 0-n | high | unsigned long | - | TAB_RESETDATABASES | - | - | - | - | - | Daten, die gelöscht werden sollen |

### ARG_0XA09F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_TYPE | + | - | 0-n | high | unsigned char | - | TAB_WLAN_TYPE | - | - | - | - | - | Typ der MAC Addresse |

### ARG_0XA0B4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VISIBLE_CONTEXT_WERT | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | HMI menue ID |
| ARG_FOCUS_INDEX_WERT | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des auswaehlbaren Element der HMI in der angezeigten Tafel |
| ARG_LIST_INDEX_WERT | + | - | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des zu fokussierden Elements in einer Liste (falls zutreffend).  |
| ARG_EXECUTE_FUNCTION_WERT | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schalet die Execute-Funktion; das fokussierte Element wird ausgeführt (0x01 bedeutet: die ZBE gedrückt wird).  |

### ARG_0XA0B5_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SDARS_GENERATOR_FREQUENCY_SXM | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Frequency that must be set on the both channels |

### ARG_0XA0B9_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_DATA_TO_RESET | + | - | 0-n | high | unsigned char | - | TAB_WLAN_RESET | - | - | - | - | - | Daten zum Zurücksetzen |

### ARG_0XA0C8_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SDARS_PREACTIVATION_MODE | + | - | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | 0x00 AUS 0x01 EIN 0xFF NICHT DEFINIERT |

### ARG_0XA0CB_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_PORT_CONFIG | + | - | 0-n | high | unsigned char | - | TAB_PORT_SET | - | - | - | - | - | Setzt den OABR Port der HU. |

### ARG_0XA0D7_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SDARS_MPFA | + | - | 0-n | high | unsigned char | - | TAB_MPFA | - | - | - | - | - | um MPFA zu aktivieren |

### ARG_0XA0D8_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TYPE | + | - | 0-n | - | unsigned char | - | TAB_USB_DEVICE_COUNT | - | - | - | - | - | Typ des angeforderten Stack |

### ARG_0XD014_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_MUTE | 0-n | - | unsigned char | - | TAB_ONOFF | - | - | - | - | - | Remove mute for the current entertainment source (audio on)§§ 0x00 Set mute for the current entertainment source (audio off) §§ 0x01 |

### ARG_0XD01C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT_GERAETENAME | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | - | - | schreibt den Bluetooth Gerätename |

### ARG_0XD028_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RADON | 0-n | - | unsigned char | - | TAB_ONOFF | - | - | - | - | - | Setzen des Ausgangssignals RADON. |

### ARG_0XD02D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ_DAB_KHZ | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | - | - | gewünschte DAB-Frequenz in kHz (z. B. 181936 für 181936 kHz) |

### ARG_0XD02F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_NR_SDARS | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Telefonnummer SDARS |

### ARG_0XD043_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FOLLOWING_DAB_FM | 0-n | - | unsigned char | - | TFollowingDabFm | 1.0 | 1.0 | 0.0 | - | - | Steuert das DAB FM Following. |
| ARG_FOLLOWING_DAB_DAB | 0-n | - | unsigned char | - | TFollowingDabDab | 1.0 | 1.0 | 0.0 | - | - | Steuert das DAB DAB Following. |
| ARG_TP_DAB | 0-n | - | unsigned char | - | TTpDab | 1.0 | 1.0 | 0.0 | - | - | Steuert den DAB Traffic Pilot. |

### ARG_0XD0A3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_ACTIVATION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | Aktivierungswert |

### ARG_0XD0A4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_AP_MODE | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | aktueller AP Modus |
| ARG_WLAN_WIFI_DIRECT_MODE | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | aktueller Wifi Direct Modus |
| ARG_WLAN_STATION_MODE | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | aktueller Station Modus |

### ARG_0XD0BD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_PERCENT_FILL | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | 12bit Auflösung / LED => Minimaler Wert = 0 Maximaler Wert = 17 LED * 0x0FFF |
| ARG_RED | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Farbwerte für Rot, 6bit Auflösung |
| ARG_GREEN | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Farbwerte für Grün, 6bit Auflösung |
| ARG_BLUE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Farbwerte für Blau, 6bit Auflösung |

### ARG_0XD0BE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TEST_PICTUREID | 0-n | high | unsigned char | - | T_ZIN_TESTPICTURE | - | - | - | - | - | Auswahl der erweiterten Test Bild-ID Integer-Werte aus der Tabelle T_ZIN_TESTPICTURE |

### ARG_0XD0BF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WIDGETID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eindeutige ID der Animation (permanent, semi-permanent und Trigger-Ereignis) |
| ARG_TRIGGER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 2.0 | Wert des Triggers [0 - stopp, 1 - einmal, 2 - endlos] |

### ARG_0XD0C6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LUM | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert der Ziel Leuchtdichte, 12 bit Auflösung |

### ARG_0XD0C7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzt den CRC-Zähler des Zentralinstruments zurück |

### ARG_0XD0C8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XD0D5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_NAME_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorname und Nachname des Servicepartners |
| ARG_STREET_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Straße und Hausnummer des Service Partners |
| ARG_CITY_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Stadt des Service Partners |
| ARG_COUNTRY_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Land inklusiv Postleitzahl des Service Partners |
| ARG_TELEPHONE_NUMBER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Telefonnummer des Service Partnerns |
| ARG_TYPE_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Type/ kind of the service partner (Unknown, Home, Work, Celular) |
| ARG_COMPANY_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Firmenname des Service Partners |
| ARG_EMAIL_ADRESS_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Email Adresse des Service Partners |
| ARG_URL_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Homepage des Service Partners |

### ARG_0XD0DE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SDARS_SXM_CHANNEL | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Kanalnummer die eingestellt werden soll |

### ARG_0XD0EE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_KANAL_1 | 0-n | - | unsigned long | - | TAB_AUDIOKANAL | - | - | - | - | - | Kanalnummer |

### ARG_0XD1F8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_PAIRABLE | 0-n | high | unsigned char | - | TAB_WLAN_PAIRABLE | - | - | - | - | - | welcher Modus pairbar eingestellt wurde |

### ARG_0XD1FB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_DEVICELIST_POSITION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Position des neuen Eintrag in die WLAN AP Teilnehmerliste; 0x00 bis 0x07 |
| ARG_WLAN_NEWENTRY_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | - | - | MAC Adresse des neuen Eintrages |

### ARG_0XD226_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_EJECT | 0-n | - | unsigned char | - | TAB_ODD_EJECT | - | - | - | - | - | gibt an, welcher Eject ausgeführt werden soll |

### ARG_0XD25B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TOUCHINDICATOR | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | um Touch/Proximity Indikator zu aktivieren/ deaktivieren |

### ARG_0XD3E2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TIME | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Interne Startzeit für den VIN Sicherheitsmechanismus  |

### ARG_0XD5C1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TESTBILD | 0-n | - | unsigned char | - | TAB_TESTBILD_CID | 1.0 | 1.0 | 0.0 | 0.0 | - | Ausgabe des Testbild unabhängig von Signalen der HU. Kann auch ohne HU ausgegeben werden:  Mögliche Werte: 0 = NORMALES_BILD, 1 = SCHWARZES_BILD, 2 = BLAUES_BILD,  3 = ROTES_BILD, 4 = GRUENES_BILD, 5 = NO_SIGNAL |

### ARG_0XD5C2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | Ein- und Ausschalten des Display per Diagnose mit Hintergrundbeleuchtung: 0 = AUS, 1 = EIN |

### ARG_0XD5C4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_VALUE | % | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe des PWM-Wert, mit welchem die Hintergrundbeleuchtung angesteuert werden soll: 0 = dunkel, 100 = hell |

### ARG_0XD5C9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_STOP | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Pflicht Argument von Service 0x2E. 1 = Stop Diagnose-Ansteuerungen. |

### ARG_0XF003_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CLEARMODE | + | - | 0-n | high | unsigned char | - | TAB_CLEARMODE | - | - | - | - | - | Art der zu löschenden Persistenz |

### ARG_0XF008_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SUCHLAUF | + | - | 0-n | high | unsigned char | - | TTUNERSUCHLAUF | - | - | - | - | - | Seek Direction up or down |

### ARG_0XF009_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WAVEBAND | + | - | 0-n | - | unsigned char | - | TAB_WAVEBAND | - | - | - | - | - | Auwählen des Frequenzbandes: siehe Tabelle TWaveband |

### ARG_0XF023_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_INTERNAL_TRACE_RECORDER | + | - | 0-n | high | unsigned char | - | TAB_TRACEACTIVATION | - | - | - | - | - | Activates the internal traces for at most 24 hours |

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

### BOOTLOADER_ODER_APPLIKATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Applikation |
| 0x01 | Bootloader |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### CABLE_DIAG_STATE_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Leitungspaar OK - kein Fehler gefunden |
| 0x01 | Kurzschluss zwischen Leitungspaar |
| 0x02 | Leitungspaar unterbrochen |
| 0x03 | Kurzschluss nach Masse |
| 0x04 | Kurzschluss nach 12V |
| 0x05 | Kabeldiagnose nicht erfolgreich abgeschlossen |
| 0x10 | Diagnose läuft bereits (bei aufeinanderfolgenden Jobaufrufen |
| 0xFF | Diagnose konnte nicht gestartet werden, PHY unterstützt Kabeldiagnose nicht oder Port nicht vorhanden |

### CID_GENERISCH_COMMAND

| WERT | TEXT |
| --- | --- |
| 0x2E01 | STEUERN_CID_OSD |
| 0x2201 | STATUS_CID_OSD |
| 0x2E02 | CID_SET_INDIGO_REGISTER |
| 0x2202 | CID_READ_INDIGO_REGISTER |
| 0x2E03 | WRITE_FLASH_BY_ADDRESS |
| 0x2203 | READ_FLASH_BY_ADDRESS |
| 0x2E04 | ERASE_FLASH_SECTOR |
| 0x2E05 | SELECT_DEVICE |

### CONTROLLER

| WERT | TEXT |
| --- | --- |
| 0x01 | Vehicle Controller |
| 0x02 | Entertainment Controller |
| 0x03 | IO Controller |
| 0xFF | unknown |

### CPU

| WERT | TEXT |
| --- | --- |
| 0x00 | Vehicle Controller |
| 0x01 | Entertainment Controller |

### CSM_ERROR_CODE

| WERT | TEXT |
| --- | --- |
| 0x01 | ERC_CSM_INVALID_ENCRYPTED_ID_AND_KEY |
| 0x02 | ERC_CSM_INVALID_SG_ID |
| 0x03 | ERC_CSM_INVALID_SIGNATURE_OVER_RND |
| 0x04 | ERC_CSM_SWE_INVALID |
| 0x11 | ERC_ZSG_NO_RESPONSE_FROM_MSM |
| 0x12 | ERC_ZSG_INVALID_B2VSEC_AUTHENTICATION |
| 0xFE | ERC_CSM_UNEXPECTED_ERROR |
| 0xFF | ERC_CSM_UNEXPECTED_RESPONSE |

### ETH_LEARN_PORT_CONFIGURATION

| WERT | TEXT |
| --- | --- |
| 0x0 | Lernen erfolgreich |
| 0x1 | Lernen nicht erfolgreich oder noch nicht gelernt |

### ETH_LOOPBACK_MODE_TAB

| WERT | TEXT |
| --- | --- |
| 1 | internal Loopback-Mode |
| 2 | external Loopback-Mode |

### ETH_PHY_LOOPBACK_TEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Test erfolgreich durchgelaufen und TX- und RX-Zähler wurden wie erwartet inkrementiert |
| 0x01 | Test konnte nicht gestartet werden, da nach Aktivierung des Loopback-modes kein Link aufgebaut werden konnte |
| 0x02 | Test nicht erfolgreich, TX- und RX-Zähler wurden durch Versendung des Testframes nicht inkrementiert |
| 0xFF | Test läuft bereits |

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
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 3 |
| F_HLZ_VIEW | ja |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x026300 | Energiesparmode aktiv | 0 | - |
| 0x026303 | Externe SWT-Prüfbedingung nicht erfüllt | 1 | - |
| 0x026304 | Interne SWT-Prüfung fehlgeschlagen | 0 | - |
| 0x026308 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x026309 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02630A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02630B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02630C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x026321 | EEPROM-Fehler (Sammelfehler) | 0 | - |
| 0x026322 | Ethernetfehler (Sammelfehler) | 0 | - |
| 0x026323 | Flash Memory Fehler (Sammelfehler) | 0 | - |
| 0x02FF63 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x031780 | SIF: Concierge Service | 1 | - |
| 0x031781 | SIF: RTTI | 1 | - |
| 0x031782 | SIF: Online | 1 | - |
| 0x031783 | SIF: Telematic Online Logbook | 1 | - |
| 0x031784 | SIF: Map Update | 1 | - |
| 0xB7F805 | Verbindung Head-Unit zum DAB L-Band Antennenfuß: Leitungsunterbrechung | 0 | - |
| 0xB7F807 | Verbindung Head-Unit zum DAB L-Band Antennenfuß: Kurzschluss | 0 | - |
| 0xB7F809 | Verbindung Head-Unit zum DAB Band III Antennenfuß: Leitungsunterbrechung | 0 | - |
| 0xB7F80B | Verbindung Head-Unit zum DAB Band III Antennenfuß: Kurzschluss | 0 | - |
| 0xB7F80F | Verbindung Head-Unit zum GPS-Antennenfuß: Leitungsunterbrechung | 0 | - |
| 0xB7F811 | Verbindung Head-Unit zum GPS-Antennenfuß: Kurzschluss nach Masse | 0 | - |
| 0xB7F813 | GPS Empfänger: defekt | 0 | - |
| 0xB7F817 | SDARS PREACTIVATION MODE aktiv | 0 | - |
| 0xB7F81A | Verbindung Head-Unit zur WLAN-Antenne: Leitungsunterbrechung | 0 | - |
| 0xB7F81D | Verbindung Head-Unit zum Aux-In Box: Leitungsunterbrechung | 0 | - |
| 0xB7F81F | Verbindung Head-Unit zum Aux-In Box: Kurzschluss nach Masse | 0 | - |
| 0xB7F821 | Lautsprecherausgangsleitungen vorne links: Leitungsunterbrechung | 0 | - |
| 0xB7F822 | Lautsprecherausgangsleitungen vorne links: Kurzschluss nach Plus | 0 | - |
| 0xB7F823 | Lautsprecherausgangsleitungen vorne links: Kurzschluss nach Masse | 0 | - |
| 0xB7F824 | Lautsprecherausgangsleitungen vorne links: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0xB7F825 | Lautsprecherausgangsleitungen vorne rechts: Leitungsunterbrechung | 0 | - |
| 0xB7F826 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss nach Plus | 0 | - |
| 0xB7F827 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss nach Masse | 0 | - |
| 0xB7F828 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0xB7F829 | Lautsprecherausgangsleitungen hinten links: Leitungsunterbrechung | 0 | - |
| 0xB7F82A | Lautsprecherausgangsleitungen hinten links: Kurzschluss nach Plus | 0 | - |
| 0xB7F82B | Lautsprecherausgangsleitungen hinten links: Kurzschluss nach Masse | 0 | - |
| 0xB7F82C | Lautsprecherausgangsleitungen hinten links: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0xB7F82D | Lautsprecherausgangsleitungen hinten rechts: Leitungsunterbrechung | 0 | - |
| 0xB7F82E | Lautsprecherausgangsleitungen hinten rechts: Kurzschluss nach Plus | 0 | - |
| 0xB7F82F | Lautsprecherausgangsleitungen hinten rechts: Kurzschluss nach Masse | 0 | - |
| 0xB7F830 | Lautsprecherausgangsleitungen hinten rechts: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0xB7F841 | FBAS-Eingang 1: kein Video- oder Sync-Signal vorhanden | 1 | - |
| 0xB7F849 | RAD ON Leitung: Kurzschluss nach Plus | 0 | - |
| 0xB7F84A | RAD ON Leitung: Kurzschluss nach Masse | 0 | - |
| 0xB7F84D | Verbindung Head-Unit zum Mikrophon 1: Leitungsunterbrechung | 0 | - |
| 0xB7F84E | Verbindung Head-Unit zum Mikrophon 1: Kurzschluss nach Plus | 0 | - |
| 0xB7F84F | Verbindung Head-Unit zum Mikrophon 1: Kurzschluss nach Masse | 0 | - |
| 0xB7F850 | Verbindung Head-Unit zum Mikrophon 2: Leitungsunterbrechung | 0 | - |
| 0xB7F851 | Verbindung Head-Unit zum Mikrophon 2: Kurzschluss nach Plus | 0 | - |
| 0xB7F852 | Verbindung Head-Unit zum Mikrophon 2: Kurzschluss nach Masse | 0 | - |
| 0xB7F85A | Verbindung HU zum Antennenverstärker: Leitungsunterbrechung FM1 Antenne | 0 | - |
| 0xB7F85B | Verbindung Antennenverstärker-Antenne: FM1 Antenne nicht am Antennenverstärker angesteckt | 0 | - |
| 0xB7F85C | Verbindung HU zum Antennenverstärker: Kurzschluss nach Masse FM1 Antenne | 0 | - |
| 0xB7F85E | KISU Anwendungsfehler | 1 | - |
| 0xB7F85F | KISU Kunden Anwendungsfehler | 1 | - |
| 0xB7F867 | Interner Temperaturfehler | 0 | - |
| 0xB7F869 | Online, OTA: Signaturtest der Provisionierungdatei fehlgeschlagen | 0 | - |
| 0xB7F86A | Online, OTA: Signaturtest der Zertifikatsdatei fehlgeschlagen | 0 | - |
| 0xB7F86B | Externe Unterspannung | 1 | - |
| 0xB7F86C | Externe Überspannung | 1 | - |
| 0xB7F86D | Online, Diagnose: Signaturtest der Provisionierungsdatei fehlgeschlagen | 0 | - |
| 0xB7F86E | Signatur der zu importierenden Portierungsdatei korrupt | 1 | - |
| 0xB7F86F | Dateistruktur der zu importierenden Portierungsdatei korrupt | 1 | - |
| 0xB7F870 | Version der zu importierenden Portierungsdatei unbekannt | 1 | - |
| 0xB7F874 | Fehler beim Schreiben auf externes Speichermedium | 1 | - |
| 0xB7F875 | Fehler beim Lesen vom externen Speichermedium | 1 | - |
| 0xB7F876 | Löschen aller persönlicher Daten nicht möglich (Clear-All-Button) | 0 | - |
| 0xB7F87A | Komponentenschutz aktiv | 0 | - |
| 0xB7F87D | Komponenteninitialiserung nicht gestartet | 0 | - |
| 0xB7F87E | Die von einer PIA-Funktion gelieferte aktuelle Profilnummer unterscheidet sich von der in der Head Unit vermerkten | 1 | - |
| 0xB7F883 | Hauptplatine Hardware Fehler | 0 | - |
| 0xB7F884 | Flash File System fehlerhaft | 0 | - |
| 0xB7F89C | Kein GPS Empfang in den letzten 40 Kilometern | 1 | - |
| 0xB7F8AD | Ethernet Verbindung Head-Unit zum Gateway: Link Status von dem Ethernet Treiber nicht ok | 0 | - |
| 0xB7F8AF | USB-VBUS Verbindung Head-Unit zur USB Benutzer Schnittstelle: Kurzschluss nach Masse | 0 | - |
| 0xB7F8B2 | Video Verbindung: keine oder ungültige Codierdaten-Informationen für die angeforderte Verbindung Quelle zu Senke. Verbindung nicht hergestellt | 0 | - |
| 0xB7F8B4 | Verbindung Head-Unit zum SDARS Antennenfuß: Leitungsunterbrechung | 0 | - |
| 0xB7F8B5 | Verbindung Head-Unit zum SDARS Antennenfuß: Kurzschluss | 0 | - |
| 0xB7F8B8 | Verbindung Head-Unit zum Bluetooth-Antennenfuß: Leitungsunterbrechung | 0 | - |
| 0xB7F8BB | Bluetooth nicht gestartet | 0 | - |
| 0xB7F8BC | CD Laufwerk Hardware Fehler | 0 | - |
| 0xB7F8BD | Medium Fehler im CD Laufwerk | 0 | - |
| 0xB7F8BE | ATC Test negativ: CD Laufwerk defekt | 0 | - |
| 0xB7F8C0 | CID Hardware-Error: Ausfall Temperatursensor | 0 | - |
| 0xB7F8C1 | Hardware-Error: Ausfall UmgebungshelligkeitsSensor | 0 | - |
| 0xB7F8C2 | Hardware-Error: Fehler Betriebsspannungsmesspfad | 0 | - |
| 0xB7F8C3 | Hardware-Error: Ausfall CID-Kommunikation | 0 | - |
| 0xB7F8C4 | Hardware-Error: Ausfall Backlight-LEDs | 0 | - |
| 0xB7F8C5 | Hardware-Error: Checksummenfehler CID-Flashdaten | 0 | - |
| 0xB7F8C6 | Übertemperatur: Helligkeitsreduzierung Backlight | 1 | - |
| 0xB7F8C7 | Übertemperatur: Abschaltung Backlight | 1 | - |
| 0xB7F8C8 | CID: Überspannung Vcc | 1 | - |
| 0xB7F8C9 | CID: Unterspannung Vcc | 1 | - |
| 0xB7F8CA | Konfigurationsfehler: CID-Variante nicht kompatibel | 0 | - |
| 0xB7F8CB | Bilddaten ungültig oder fehlerhaft | 0 | - |
| 0xB7F8CD | Verbindung HU zum Antennenverstärker: Leitungsunterbrechung FM2 Antenne | 0 | - |
| 0xB7F8CE | Verbindung Antennenverstärker-Antenne: FM2 Antenne nicht am Antennenverstärker angesteckt | 0 | - |
| 0xB7F8CF | Verbindung HU zum Antennenverstärker: Kurzschluss nach Masse FM2 Antenne | 0 | - |
| 0xB7F8DD | Eine kritische Recovery funktion wurde aktiviert | 1 | - |
| 0xB7F8DE | Hardware-Fehler: ZIN Kommunikationsfehler | 1 | - |
| 0xB7F8DF | Hardware-Fehler: ZIN Interner Fehler | 1 | - |
| 0xB7F8E0 | Hardware-Fehler: CRC Fehler ZIN | 1 | - |
| 0xB7F8E1 | Hardware-Error: CID HW no LIN interface | 1 | - |
| 0xB7F8E2 | Hardware-Fehler: Touch Sensor Error | 1 | - |
| 0xB7F8E4 | Internes Tracing aktiviert | 0 | - |
| 0xB7F8E5 | Debug Mode aktiv | 0 | - |
| 0xB7F8E6 | USB-VBUS Verbindung Head-Unit zur USB Benutzer Schnittstelle 2: Kurzschluss nach Masse | 0 | - |
| 0xB7F8F5 | NAVI Simulationsmodus aktiv | 0 | - |
| 0xB7F8F8 | Digital Video Eingang: kein Video Signal vorhanden | 1 | - |
| 0xB7F8FF | UWB Dummy HU | 0 | - |
| 0xB7F900 | PMIC Recovery Triggered | 1 | - |
| 0xE1C43F | MOST: Empfänger hat Nachricht nicht abgenommen | 1 | - |
| 0xE1C440 | Reset | 0 | - |
| 0xE1C441 | MOST: Ringbruch | 1 | - |
| 0xE1C442 | Abschaltung Übertemperatur | 1 | - |
| 0xE1C443 | MOST-Steuergerät: Abschaltung Übertemperatur | 1 | - |
| 0xE1C444 | MOST: Ring wacht nicht auf | 1 | - |
| 0xE1C445 | MOST: Reset | 0 | - |
| 0xE1C447 | MOST: ein Steuergerät hat sich abgemeldet | 1 | - |
| 0xE1C448 | MOST: Istkonfiguration unvollständig | 1 | - |
| 0xE1C449 | MOST-Knoten:  Die gleiche Kombination von FBlockID und InstID wird von zwei unterschiedlichen MOST SG doppelt beim NWM angemeldet | 1 | - |
| 0xE1C45F | BODY- oder IuK-CAN Physikalischer Busfehler | 0 | - |
| 0xE1C468 | BODY- oder IuK-CAN Control Module Bus OFF | 0 | - |
| 0xE1C600 | Ethernet: physikalischer Fehler (link off) | 1 | - |
| 0xE1C602 | Ethernet: Link-Qualität niedrig | 1 | - |
| 0xE1C603 | Ethernet: Kommunikationsfehler (Link-Abbruch) durch Steuergeräte-Reset | 1 | - |
| 0xE1C604 | Ethernet: Unerwarteter Link aufgebaut | 1 | - |
| 0xE1CBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FSCSM_ERRORCODE_TAB

| WERT | TEXT |
| --- | --- |
| 0x01 | ERC_FSCSM_INVALID_ENCRYPTED_ID_AND_KEY |
| 0x02 | ERC_FSCSM_INVALID_SG_ID |
| 0x04 | ERC_FSCSM_SWE_INVALID |
| 0x05 | ERC_FSCSM_CAL_CSM_ERROR |
| 0x06 | ERC_FSCSM_SSV_ERROR_STATE |
| 0x08 | ERC_FSCSM_MESSAGE_TIMEOUT_REQ |
| 0x00 | ERC_NO_ERROR |
| 0x30 | ERC_PENDING |
| 0x50 | ERC_NVM_ERROR |
| 0x51 | ERC_INCORRECT_MESSAGE_LENGTH |
| 0x52 | ERC_INVALID_PARAMETER |
| 0x53 | ERC_SEQUENCE_ERROR |
| 0x54 | ERC_NOT_INITIALIZED |
| 0x55 | ERC_PARALLEL_EXECUTION |
| 0x87 | ERC_MSM_INVALID_SIGNATURE_OVER_RND |
| 0x88 | ERC_MSM_INVALID_B2VSEC_CERTIFICATE |
| 0x5A | ERC_CALCULATION_ERROR |
| 0xFE | ERC_UNEXPECTED_ERROR |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Gueltigkeit | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | Klemme R | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | Klemme 15 | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | Klemme 50 | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | Entertainment Mode | 0/1 | High | 0x10 | - | - | - | - |
| 0x0006 | Telefon Mode | 0/1 | High | 0x20 | - | - | - | - |
| 0x0007 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_00 | 0-n | High | 0x0001 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0008 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_01 | 0-n | High | 0x0002 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0009 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_02 | 0-n | High | 0x0004 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000A | DETECTED_UNEXPECTED_LINK_STATUS_PORT_03 | 0-n | High | 0x0008 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000B | DETECTED_UNEXPECTED_LINK_STATUS_PORT_04 | 0-n | High | 0x0010 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000C | DETECTED_UNEXPECTED_LINK_STATUS_PORT_05 | 0-n | High | 0x0020 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000D | DETECTED_UNEXPECTED_LINK_STATUS_PORT_06 | 0-n | High | 0x0040 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000E | DETECTED_UNEXPECTED_LINK_STATUS_PORT_07 | 0-n | High | 0x0080 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000F | DETECTED_UNEXPECTED_LINK_STATUS_PORT_08 | 0-n | High | 0x0100 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0010 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_09 | 0-n | High | 0x0200 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0011 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_10 | 0-n | High | 0x0400 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0012 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_11 | 0-n | High | 0x0800 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0013 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_12 | 0-n | High | 0x1000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0014 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_13 | 0-n | High | 0x2000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0015 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_14 | 0-n | High | 0x4000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0016 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_15 | 0-n | High | 0x8000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0017 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0018 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0019 | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001A | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001B | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001C | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001D | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001E | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001F | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0020 | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0021 | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0022 | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0023 | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0024 | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0025 | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0026 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0027 | PaketSwitch Registrierung | 0-n | High | 0xFF | TAB_PS_REGSTATE | - | - | - |
| 0x0028 | CircuitSwitch Registierung | 0-n | High | 0xF0 | TAB_CS_REGSTATE | - | - | - |
| 0x0029 | PORT_LINK_OFF_STATUS_00 | 0-n | High | 0x0001 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002A | PORT_LINK_OFF_STATUS_01 | 0-n | High | 0x0002 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002B | PORT_LINK_OFF_STATUS_02 | 0-n | High | 0x0004 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002C | PORT_LINK_OFF_STATUS_03 | 0-n | High | 0x0008 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002D | PORT_LINK_OFF_STATUS_04 | 0-n | High | 0x0010 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002E | PORT_LINK_OFF_STATUS_05 | 0-n | High | 0x0020 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002F | PORT_LINK_OFF_STATUS_06 | 0-n | High | 0x0040 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0030 | PORT_LINK_OFF_STATUS_07 | 0-n | High | 0x0080 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0031 | PORT_LINK_OFF_STATUS_08 | 0-n | High | 0x0100 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0032 | PORT_LINK_OFF_STATUS_09 | 0-n | High | 0x0200 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0033 | PORT_LINK_OFF_STATUS_10 | 0-n | High | 0x0400 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0034 | PORT_LINK_OFF_STATUS_11 | 0-n | High | 0x0800 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0035 | PORT_LINK_OFF_STATUS_12 | 0-n | High | 0x1000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0036 | PORT_LINK_OFF_STATUS_13 | 0-n | High | 0x2000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0037 | PORT_LINK_OFF_STATUS_14 | 0-n | High | 0x4000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0038 | PORT_LINK_OFF_STATUS_15 | 0-n | High | 0x8000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0039 | PORT_08_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x003A | PORT_09_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x003B | PORT_10_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x003C | PORT_11_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x003D | PORT_12_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x003E | PORT_13_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x003F | PORT_14_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0040 | PORT_15_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0041 | PORT_CRC_ERROR_COUNT | 0-n | High | 0xFF | PORT_CRC_ERROR_COUNT_1B_TAB | - | - | - |
| 0x0042 | PORT_00_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0043 | PORT_01_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0044 | PORT_02_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0045 | PORT_03_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0046 | PORT_04_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0047 | PORT_05_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0048 | PORT_06_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0049 | PORT_07_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1702 | SAE_CODE | TEXT | High | 3 | - | - | - | - |
| 0x1707 | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1708 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1709 | MOSTMesHeader | TEXT | High | 6 | - | - | - | - |
| 0x170A | FOTTemp Celsius | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x170B | Node Position Register | HEX | High | unsigned char | - | - | - | - |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x170D | MemMirror | TEXT | High | 74 | - | - | - | - |
| 0x170E | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1719 | AbilityToWake | 0-n | High | 0xFF | TAB_ABILITY_TO_WAKE_DOP | - | - | - |
| 0x171E | MOSTMesErrorCodeInfo | TEXT | High | 8 | - | - | - | - |
| 0x1721 | ID fuer Reset-Ursache | 0-n | High | 0xFF | TAB_RESET_REASON_DOP | - | - | - |
| 0x172D | MOSTMesOpType | TEXT | High | 9 | - | - | - | - |
| 0x1731 | FEHLERKLASSE | HEX | High | unsigned char | - | - | - | - |
| 0x1740 | FBlock- Identifier | HEX | High | unsigned char | - | - | - | - |
| 0x1741 | Instanz-Identifier | HEX | High | unsigned char | - | - | - | - |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1754 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1755 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1756 | Signalqualität | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x1757 | Signalqualität | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x1758 | Signalqualität | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x1759 | CABLE_DIAG_STATE | 0-n | High | 0xFF | CABLE_DIAG_STATE_TAB | - | - | - |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x1761 | FILE_MANIPULATED | TEXT | High | 18 | - | 1.0 | 1.0 | 0.0 |
| 0x17EE | National Mobile Country Code | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17EF | National Mobile Network Code | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17F0 | CD Fehlerursache | 0-n | High | 0xFF | TAB_CD_ENVIRONMENT_CONDITION | - | - | - |
| 0x17F1 | GPS_ZEIT | TEXT | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x17F3 | NETZWERKTECHNOLOGIE | 0-n | High | 0xFF | TAB_CD_MOBILE_NETWORK_TECHNOLOGY | - | - | - |
| 0x17F4 | RSSI | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x17F5 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4200 | AmpTemp | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4201 | GyroTemp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4202 | CPUTemp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4203 | HDD Temp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4204 | DVD Temp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4205 | Audioquelle | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4206 | SMART Daten | TEXT | Low | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4207 | SMART Daten | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4208 | Secondary DTC ID | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4209 | AMFM Tuner SW Version | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x420A | DAB Tuner SW Version | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x420B | Audio Label | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420C | MemoryAddress für Coding Error Work Domain | HEX | High | signed long | - | - | - | - |
| 0x420D | PIA Process | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420E | PIA Medium | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420F | PIA Profilname | TEXT | High | 12 | - | 1.0 | 1.0 | 0.0 |
| 0x4210 | PIA IStufenbezeichner | TEXT | High | 4 | - | 1.0 | 1.0 | 0.0 |
| 0x4211 | PIA Version | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4212 | PIA ErrorID | 0-n | High | 0xFF | PIA_ERROR_ID | - | - | - |
| 0x4213 | PIA LowMemory | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x4214 | PIA Profilnummer | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4215 | PIA Profilcompare | TEXT | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x4216 | PIA FunctionID | TEXT | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x4217 | PIA configuration attributes | TEXT | High | 4 | - | 1.0 | 1.0 | 0.0 |
| 0x4218 | PIA configuration attributes compare | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x4219 | PIA Profilnumbers function and master | TEXT | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x4220 | FB Defect Error | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4221 | FB Software Error | HEX | High | unsigned char | - | - | - | - |
| 0x4222 | Interne 5V Spannung | mV | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4223 | Grund des Luefterfehlers | 0-n | High | 0xFF | LUEFTER_FEHLER | - | - | - |
| 0x4224 | Videoquelle | 0-n | High | 0xFF | VIDEO_SOURCE | - | - | - |
| 0x4225 | VideoSink | 0-n | High | 0xFF | VIDEO_SINK | - | - | - |
| 0x4226 | Video Watchdog info | TEXT | High | 4 | - | 1.0 | 1.0 | 0.0 |
| 0x4227 | Media Type | 0-n | High | 0xFF | MEDIA_TYPE | - | - | - |
| 0x4228 | Address | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x4229 | ATC Test CD ID | TEXT | High | 13 | - | 1.0 | 1.0 | 0.0 |
| 0x422A | Quality Level ATC CD | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x422B | Amp Gyro CPU HDD DVD CD NVIDIA NTC Temp | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x422C | PDC Internal Error | 0-n | High | 0xFF | PDC_INTERNAL_ERROR | - | - | - |
| 0x422D | MileageErrorCause | 0-n | High | 0xFF | MILAGE_ERROR_CAUSE | - | - | - |
| 0x422E | Asleep Reason | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x422F | Map Material | 0-n | High | 0xFF | MAP_MATERIAL_REASON | - | - | - |
| 0x4230 | Videoswitch FB Instance IDs | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4231 | Interner Spannungs Sensor | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4232 | Fahrzeugzustand | HEX | High | unsigned char | - | - | - | - |
| 0x4233 | Communication Failure to Tuner HW | 0-n | High | 0xFF | TUNER_HW_COMMUNICATION_FAILURE_REASON | - | - | - |
| 0x4234 | Reason for mounting the NAND writable | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4235 | Systemzeit in Sekunden seit Startup bis zur Unterspannung | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4236 | Bootloader oder Applikation | 0-n | High | 0xFF | BOOTLOADER_ODER_APPLIKATION | - | - | - |
| 0x4237 | CSM Error Code | 0-n | High | 0xFF | CSM_ERROR_CODE | - | - | - |
| 0x4238 | KISU_STANDARD | 0-n | High | 0xFF | TAB_STANDARD_KISU | - | - | - |
| 0x4239 | APPLICATION_ID | HEX | High | signed long | - | - | - | - |
| 0x423A | Counter | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4240 | ECUID | 0-n | High | 0xFF | CPU | - | - | - |
| 0x4241 | FAHRZEUGGESCHWINDIGKEIT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4242 | GPS_LONGITUDE | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4243 | GPS_LATITUDE | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4244 | KISU_CUSTOMER | 0-n | High | 0xFF | TAB_CUSTOMER_KISU | - | - | - |
| 0x4245 | AMP_GYRO_CPU/OMAP5_HDD_DVD/BD_GPU_FOT_TEMP | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x4246 | SMART_DATEN | TEXT | High | 29 | - | 1.0 | 1.0 | 0.0 |
| 0x4247 | SMART_DATEN | TEXT | High | 29 | - | 1.0 | 1.0 | 0.0 |
| 0x4248 | RECOVERY_STEPS | 0-n | High | 0xFF | TAB_RECOVERY_STEPS | - | - | - |
| 0x4249 | PROCESS_NAME | TEXT | High | 64 | - | 1.0 | 1.0 | 0.0 |
| 0x424A | INSTRUCTION_POINTER | TEXT | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x424B | SIGNAL | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x424C | CODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x424D | THREAD_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x424E | CPU_HIGHRUNNER | TEXT | High | 64 | - | 1.0 | 1.0 | 0.0 |
| 0x424F | SIGNATUR_FALIURE_REASON | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4250 | WAKEUPREASON | 0-n | High | 0xFF | TAB_WAKEUPREASON | - | - | - |
| 0x4251 | HD_MALFUNC_RUNTIME_ERRCODE | 0-n | High | 0xFF | HD_MALFUNC_RUNTIME_ERRCODE | - | - | - |
| 0x4252 | TEMPERATURE_FOT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4253 | POWER_SEQUENCE_ERROR | 0-n | High | 0xFF | POWER_SEQUENCE_ERROR | - | - | - |
| 0x4254 | FIS_FAILURE_REASON | TEXT | High | 40 | - | 1.0 | 1.0 | 0.0 |
| 0x4255 | FILE_PATH | TEXT | High | 50 | - | 1.0 | 1.0 | 0.0 |
| 0x4256 | ERROR_CODE_LM | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4257 | GPS_HW_DEFECT | 0-n | High | 0xFF | GPS_HW_DEFECT | - | - | - |
| 0x4258 | YAW_VELOCITY_VEHICLE | 0-n | High | 0xFF | YAW_VELOCITY_VEHICLE | - | - | - |
| 0x4259 | PERSONAL_DATAS_ON_PD_ERR | 0-n | High | 0xFFFFFFFF | PERSONAL_DATAS_ON_PD_ERR | - | - | - |
| 0x425D | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4260 | PERSONAL_DATAS_OFF_PD_ERR | 0-n | High | 0xFF | PERSONAL_DATAS_OFF_PD_ERR | - | - | - |
| 0x4261 | PMADATA_WDGMSTATUS_PMA_WDGMMODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4262 | PMADATA_WDGMSTATUS_PMA_WDGMSUPERVISED_ENTITYSTATUS | TEXT | High | 5 | - | 1.0 | 1.0 | 0.0 |
| 0x4263 | G_RIP_DATA_REASON | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4264 | G_RIP_DATA_TASK_ID | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4265 | G_RIP_DATA_DELTA_TICKS | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4266 | ERROR_CODE | HEX | High | unsigned char | - | - | - | - |
| 0x4267 | Vehicle Controller | 0-n | High | 0xFF | CONTROLLER | - | - | - |
| 0x4268 | ADDITIONAL_INFORMATION | TEXT | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x426B | PROC_NAME | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x426C | CRASH_ID | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x426D | TABLET_MAC_ADDRESS | TEXT | High | 17 | - | 1.0 | 1.0 | 0.0 |
| 0x4277 | VENDOR_INFO | HEX | High | unsigned int | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### GPS_HW_DEFECT

| WERT | TEXT |
| --- | --- |
| 0x00 | ATM |
| 0x01 | GPS Empfänger |

### HD_MALFUNC_RUNTIME_ERRCODE

| WERT | TEXT |
| --- | --- |
| 0x01 | HDD is unavailable |
| 0x02 | HDD access failed |
| 0x04 | HDD partition table is not valid |
| 0x05 | HDD partition table is not valid + HDD is unavailable |
| 0x06 | HDD partition table is not valid + HDD access failed |

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
| 0x026330 | Security Artifact Manipulation | 0 | - |
| 0x026331 | SW Manipulation | 0 | - |
| 0x026332 | Application Data Manipulation | 0 | - |
| 0x026334 | General Manipulation | 0 | - |
| 0x100903 | Ursache keine Kommunikation mit der Tuner Hardware | 0 | - |
| 0x100904 | Ursache keine Kommunikation mit der DAB Tuner Hardware | 0 | - |
| 0x100A00 | Persistenzbereich Flash konnte nicht  gemountet werden | 0 | - |
| 0x100A01 | Persistente SWT Daten gingen verloren | 0 | - |
| 0x100C01 | System: Crash | 0 | - |
| 0x100C02 | Reset: Ursache ONOFF_EMERGENCY_ERROR | 0 | - |
| 0x100C03 | Reset: Ursache HMI_DIED | 0 | - |
| 0x101201 | SDARS Modul: Kommunikationsfehler | 0 | - |
| 0x101500 | Ursache CD Laufwerk Fehler | 0 | - |
| 0x101501 | Ursache Lade- / Auswurffehler | 0 | - |
| 0x101600 | Ursache Medium Detektierungsfehler | 0 | - |
| 0x10170F | Eine verbaute PIA-Funktion hat die Anfrage nach ihrem Einstellwert nicht beantwortet | 0 | - |
| 0x101710 | Eine PIA-Funktion, die bei der Konfigurationsanfrage nicht gefunden wurde, hat einen Einstellwert geschickt | 0 | - |
| 0x101711 | Eine verbaute PIA-Funktion hat das Setzen ihres Einstellwerts nicht bestätigt | 0 | - |
| 0x101712 | Eine PIA-Funktion meldet ihre Konfigurationsinformationen obwohl sie nicht dazu aufgefordert wurde | 0 | - |
| 0x101714 | Für eine PIA-ID wurden mehrere Telegramme mit unterschiedlichen Konfigurationsinformationen geliefert | 0 | - |
| 0x101717 | Video Watch Dog wurde ausgelöst | 0 | - |
| 0x101719 | Abbruch des laufenden PIA-Ablaufs wegen Fahrzeugzustandsänderung | 0 | - |
| 0x101722 | W-LAN Modul ist nicht zugänglich | 0 | - |
| 0x101724 | Die Head Unit hat das Telegramm Status_Funkschlüssel vom CAS-Steuergerät nicht erhalten | 0 | - |
| 0x101753 | falsche NGTP Tabelle genutzt | 0 | - |
| 0x10177A | MBB nicht aktualisiert | 0 | - |
| 0x101797 | Keine Initialisierung Komponentenschutz durch BDC | 0 | - |
| 0x101798 | Fehlerhaftes Zertifikat bei Initialisierung Komponentenschutz | 0 | - |
| 0x101799 | Fehlerhafte Signaturprüfung bei Initialisierung Komponentenschutz | 0 | - |
| 0x10179A | Speicherfehler bei der Initialisierung Komponentenschutz | 0 | - |
| 0x10179B | Fehlen oder Timeout Antwort BDC bei zyklischer Prüfung Komponentenschutz | 0 | - |
| 0x10179C | Fehlerhafte Signaturprüfung bei zyklischer Prüfung Komponentenschutz | 0 | - |
| 0x10179D | Speicherfehler bei Refurbish | 0 | - |
| 0x10179E | Fehler bei Einrichtung des sicheren Speichers | 0 | - |
| 0x10179F | Manipulation sicherer Speicher erkannt | 0 | - |
| 0x10FFFF | UWB Dummy | 0 | - |
| 0x230004 | Kommunikation Einschlafkoordinator: Zeitüberschreitung | 1 | - |
| 0x230008 | Kommunikation Einschlafkoordinator: Nachricht unplausibel | 1 | - |
| 0x806330 | Fehler der Fahrzeug-Security | 0 | - |
| 0x930000 | Timing-Master: kann Kanal nicht reservieren; Resource Allocation Table (RAT) ist voll | 1 | - |
| 0x930001 | Versorgungsspannung: Mindestwert unterschritten | 1 | - |
| 0x930002 | Sender-Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 1 | 0 | - |
| 0x930003 | Sender-Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 2 | 0 | - |
| 0x930006 | MOST: Licht geht unerwartet aus | 0 | - |
| 0x930007 | MOST: Synchronisation (Phase Locked Loop) arbeitet nicht korrekt | 0 | - |
| 0x93000B | Audiosenke: kann nicht auf Kanal verbinden | 1 | - |
| 0x93000C | Audioquelle: kann Kanal nicht fristgerecht reservieren (allokieren) | 1 | - |
| 0x93000D | Audioquelle: kann Kanal nicht fristgerecht freigeben (deallokieren) | 1 | - |
| 0x93000E | Audiosenke: kann Kanal nicht fristgerecht freigeben | 1 | - |
| 0x93000F | MOST-Knoten: mindestens ein Funktionsblock abgemeldet | 1 | - |
| 0x930010 | MOST-Knoten: die DefaultRegistry ist nicht aktuell | 1 | - |
| 0xE1C601 | Ethernet: CRC Fehler | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Gueltigkeit | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | Klemme R | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | Klemme 15 | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | Klemme 50 | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | Entertainment Mode | 0/1 | High | 0x10 | - | - | - | - |
| 0x0006 | Telefon Mode | 0/1 | High | 0x20 | - | - | - | - |
| 0x0007 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_00 | 0-n | High | 0x0001 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0008 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_01 | 0-n | High | 0x0002 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0009 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_02 | 0-n | High | 0x0004 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000A | DETECTED_UNEXPECTED_LINK_STATUS_PORT_03 | 0-n | High | 0x0008 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000B | DETECTED_UNEXPECTED_LINK_STATUS_PORT_04 | 0-n | High | 0x0010 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000C | DETECTED_UNEXPECTED_LINK_STATUS_PORT_05 | 0-n | High | 0x0020 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000D | DETECTED_UNEXPECTED_LINK_STATUS_PORT_06 | 0-n | High | 0x0040 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000E | DETECTED_UNEXPECTED_LINK_STATUS_PORT_07 | 0-n | High | 0x0080 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000F | DETECTED_UNEXPECTED_LINK_STATUS_PORT_08 | 0-n | High | 0x0100 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0010 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_09 | 0-n | High | 0x0200 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0011 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_10 | 0-n | High | 0x0400 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0012 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_11 | 0-n | High | 0x0800 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0013 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_12 | 0-n | High | 0x1000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0014 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_13 | 0-n | High | 0x2000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0015 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_14 | 0-n | High | 0x4000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0016 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_15 | 0-n | High | 0x8000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0017 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0018 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0019 | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001A | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001B | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001C | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001D | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001E | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001F | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0020 | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0021 | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0022 | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0023 | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0024 | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0025 | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0026 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0027 | PaketSwitch Registrierung | 0-n | High | 0xFF | TAB_PS_REGSTATE | - | - | - |
| 0x0028 | CircuitSwitch Registierung | 0-n | High | 0xF0 | TAB_CS_REGSTATE | - | - | - |
| 0x0029 | PORT_LINK_OFF_STATUS_00 | 0-n | High | 0x0001 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002A | PORT_LINK_OFF_STATUS_01 | 0-n | High | 0x0002 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002B | PORT_LINK_OFF_STATUS_02 | 0-n | High | 0x0004 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002C | PORT_LINK_OFF_STATUS_03 | 0-n | High | 0x0008 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002D | PORT_LINK_OFF_STATUS_04 | 0-n | High | 0x0010 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002E | PORT_LINK_OFF_STATUS_05 | 0-n | High | 0x0020 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002F | PORT_LINK_OFF_STATUS_06 | 0-n | High | 0x0040 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0030 | PORT_LINK_OFF_STATUS_07 | 0-n | High | 0x0080 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0031 | PORT_LINK_OFF_STATUS_08 | 0-n | High | 0x0100 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0032 | PORT_LINK_OFF_STATUS_09 | 0-n | High | 0x0200 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0033 | PORT_LINK_OFF_STATUS_10 | 0-n | High | 0x0400 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0034 | PORT_LINK_OFF_STATUS_11 | 0-n | High | 0x0800 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0035 | PORT_LINK_OFF_STATUS_12 | 0-n | High | 0x1000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0036 | PORT_LINK_OFF_STATUS_13 | 0-n | High | 0x2000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0037 | PORT_LINK_OFF_STATUS_14 | 0-n | High | 0x4000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0038 | PORT_LINK_OFF_STATUS_15 | 0-n | High | 0x8000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0039 | PORT_08_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x003A | PORT_09_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x003B | PORT_10_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x003C | PORT_11_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x003D | PORT_12_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x003E | PORT_13_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x003F | PORT_14_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0040 | PORT_15_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0041 | PORT_CRC_ERROR_COUNT | 0-n | High | 0xFF | PORT_CRC_ERROR_COUNT_1B_TAB | - | - | - |
| 0x0042 | PORT_00_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0043 | PORT_01_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0044 | PORT_02_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0045 | PORT_03_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0046 | PORT_04_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0047 | PORT_05_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0048 | PORT_06_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0049 | PORT_07_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1702 | SAE_CODE | TEXT | High | 3 | - | - | - | - |
| 0x1707 | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1708 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1709 | MOSTMesHeader | TEXT | High | 6 | - | - | - | - |
| 0x170A | FOTTemp Celsius | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x170B | Node Position Register | HEX | High | unsigned char | - | - | - | - |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x170D | MemMirror | TEXT | High | 74 | - | - | - | - |
| 0x170E | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1719 | AbilityToWake | 0-n | High | 0xFF | TAB_ABILITY_TO_WAKE_DOP | - | - | - |
| 0x171E | MOSTMesErrorCodeInfo | TEXT | High | 8 | - | - | - | - |
| 0x1721 | ID fuer Reset-Ursache | 0-n | High | 0xFF | TAB_RESET_REASON_DOP | - | - | - |
| 0x172D | MOSTMesOpType | TEXT | High | 9 | - | - | - | - |
| 0x1731 | FEHLERKLASSE | HEX | High | unsigned char | - | - | - | - |
| 0x1740 | FBlock- Identifier | HEX | High | unsigned char | - | - | - | - |
| 0x1741 | Instanz-Identifier | HEX | High | unsigned char | - | - | - | - |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1754 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1755 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1756 | Signalqualität | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x1757 | Signalqualität | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x1758 | Signalqualität | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x1759 | CABLE_DIAG_STATE | 0-n | High | 0xFF | CABLE_DIAG_STATE_TAB | - | - | - |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x1761 | FILE_MANIPULATED | TEXT | High | 18 | - | 1.0 | 1.0 | 0.0 |
| 0x17EE | National Mobile Country Code | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17EF | National Mobile Network Code | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17F0 | CD Fehlerursache | 0-n | High | 0xFF | TAB_CD_ENVIRONMENT_CONDITION | - | - | - |
| 0x17F1 | GPS_ZEIT | TEXT | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x17F3 | NETZWERKTECHNOLOGIE | 0-n | High | 0xFF | TAB_CD_MOBILE_NETWORK_TECHNOLOGY | - | - | - |
| 0x17F4 | RSSI | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x17F5 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4200 | AmpTemp | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4201 | GyroTemp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4202 | CPUTemp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4203 | HDD Temp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4204 | DVD Temp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4205 | Audioquelle | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4206 | SMART Daten | TEXT | Low | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4207 | SMART Daten | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4208 | Secondary DTC ID | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4209 | AMFM Tuner SW Version | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x420A | DAB Tuner SW Version | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x420B | Audio Label | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420C | MemoryAddress für Coding Error Work Domain | HEX | High | signed long | - | - | - | - |
| 0x420D | PIA Process | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420E | PIA Medium | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420F | PIA Profilname | TEXT | High | 12 | - | 1.0 | 1.0 | 0.0 |
| 0x4210 | PIA IStufenbezeichner | TEXT | High | 4 | - | 1.0 | 1.0 | 0.0 |
| 0x4211 | PIA Version | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4212 | PIA ErrorID | 0-n | High | 0xFF | PIA_ERROR_ID | - | - | - |
| 0x4213 | PIA LowMemory | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x4214 | PIA Profilnummer | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4215 | PIA Profilcompare | TEXT | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x4216 | PIA FunctionID | TEXT | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x4217 | PIA configuration attributes | TEXT | High | 4 | - | 1.0 | 1.0 | 0.0 |
| 0x4218 | PIA configuration attributes compare | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x4219 | PIA Profilnumbers function and master | TEXT | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x4220 | FB Defect Error | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4221 | FB Software Error | HEX | High | unsigned char | - | - | - | - |
| 0x4222 | Interne 5V Spannung | mV | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4223 | Grund des Luefterfehlers | 0-n | High | 0xFF | LUEFTER_FEHLER | - | - | - |
| 0x4224 | Videoquelle | 0-n | High | 0xFF | VIDEO_SOURCE | - | - | - |
| 0x4225 | VideoSink | 0-n | High | 0xFF | VIDEO_SINK | - | - | - |
| 0x4226 | Video Watchdog info | TEXT | High | 4 | - | 1.0 | 1.0 | 0.0 |
| 0x4227 | Media Type | 0-n | High | 0xFF | MEDIA_TYPE | - | - | - |
| 0x4228 | Address | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x4229 | ATC Test CD ID | TEXT | High | 13 | - | 1.0 | 1.0 | 0.0 |
| 0x422A | Quality Level ATC CD | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x422B | Amp Gyro CPU HDD DVD CD NVIDIA NTC Temp | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x422C | PDC Internal Error | 0-n | High | 0xFF | PDC_INTERNAL_ERROR | - | - | - |
| 0x422D | MileageErrorCause | 0-n | High | 0xFF | MILAGE_ERROR_CAUSE | - | - | - |
| 0x422E | Asleep Reason | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x422F | Map Material | 0-n | High | 0xFF | MAP_MATERIAL_REASON | - | - | - |
| 0x4230 | Videoswitch FB Instance IDs | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4231 | Interner Spannungs Sensor | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4232 | Fahrzeugzustand | HEX | High | unsigned char | - | - | - | - |
| 0x4233 | Communication Failure to Tuner HW | 0-n | High | 0xFF | TUNER_HW_COMMUNICATION_FAILURE_REASON | - | - | - |
| 0x4234 | Reason for mounting the NAND writable | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4235 | Systemzeit in Sekunden seit Startup bis zur Unterspannung | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4236 | Bootloader oder Applikation | 0-n | High | 0xFF | BOOTLOADER_ODER_APPLIKATION | - | - | - |
| 0x4237 | CSM Error Code | 0-n | High | 0xFF | CSM_ERROR_CODE | - | - | - |
| 0x4238 | KISU_STANDARD | 0-n | High | 0xFF | TAB_STANDARD_KISU | - | - | - |
| 0x4239 | APPLICATION_ID | HEX | High | signed long | - | - | - | - |
| 0x423A | Counter | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4240 | ECUID | 0-n | High | 0xFF | CPU | - | - | - |
| 0x4241 | FAHRZEUGGESCHWINDIGKEIT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4242 | GPS_LONGITUDE | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4243 | GPS_LATITUDE | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4244 | KISU_CUSTOMER | 0-n | High | 0xFF | TAB_CUSTOMER_KISU | - | - | - |
| 0x4245 | AMP_GYRO_CPU/OMAP5_HDD_DVD/BD_GPU_FOT_TEMP | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x4246 | SMART_DATEN | TEXT | High | 29 | - | 1.0 | 1.0 | 0.0 |
| 0x4247 | SMART_DATEN | TEXT | High | 29 | - | 1.0 | 1.0 | 0.0 |
| 0x4248 | RECOVERY_STEPS | 0-n | High | 0xFF | TAB_RECOVERY_STEPS | - | - | - |
| 0x4249 | PROCESS_NAME | TEXT | High | 64 | - | 1.0 | 1.0 | 0.0 |
| 0x424A | INSTRUCTION_POINTER | TEXT | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x424B | SIGNAL | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x424C | CODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x424D | THREAD_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x424E | CPU_HIGHRUNNER | TEXT | High | 64 | - | 1.0 | 1.0 | 0.0 |
| 0x424F | SIGNATUR_FALIURE_REASON | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4250 | WAKEUPREASON | 0-n | High | 0xFF | TAB_WAKEUPREASON | - | - | - |
| 0x4251 | HD_MALFUNC_RUNTIME_ERRCODE | 0-n | High | 0xFF | HD_MALFUNC_RUNTIME_ERRCODE | - | - | - |
| 0x4252 | TEMPERATURE_FOT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4253 | POWER_SEQUENCE_ERROR | 0-n | High | 0xFF | POWER_SEQUENCE_ERROR | - | - | - |
| 0x4254 | FIS_FAILURE_REASON | TEXT | High | 40 | - | 1.0 | 1.0 | 0.0 |
| 0x4255 | FILE_PATH | TEXT | High | 50 | - | 1.0 | 1.0 | 0.0 |
| 0x4256 | ERROR_CODE_LM | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4257 | GPS_HW_DEFECT | 0-n | High | 0xFF | GPS_HW_DEFECT | - | - | - |
| 0x4258 | YAW_VELOCITY_VEHICLE | 0-n | High | 0xFF | YAW_VELOCITY_VEHICLE | - | - | - |
| 0x4259 | PERSONAL_DATAS_ON_PD_ERR | 0-n | High | 0xFFFFFFFF | PERSONAL_DATAS_ON_PD_ERR | - | - | - |
| 0x425D | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4260 | PERSONAL_DATAS_OFF_PD_ERR | 0-n | High | 0xFF | PERSONAL_DATAS_OFF_PD_ERR | - | - | - |
| 0x4261 | PMADATA_WDGMSTATUS_PMA_WDGMMODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4262 | PMADATA_WDGMSTATUS_PMA_WDGMSUPERVISED_ENTITYSTATUS | TEXT | High | 5 | - | 1.0 | 1.0 | 0.0 |
| 0x4263 | G_RIP_DATA_REASON | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4264 | G_RIP_DATA_TASK_ID | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4265 | G_RIP_DATA_DELTA_TICKS | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4266 | ERROR_CODE | HEX | High | unsigned char | - | - | - | - |
| 0x4267 | Vehicle Controller | 0-n | High | 0xFF | CONTROLLER | - | - | - |
| 0x4268 | ADDITIONAL_INFORMATION | TEXT | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x426B | PROC_NAME | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x426C | CRASH_ID | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x426D | TABLET_MAC_ADDRESS | TEXT | High | 17 | - | 1.0 | 1.0 | 0.0 |
| 0x4277 | VENDOR_INFO | HEX | High | unsigned int | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | ERROR_PREPROCESSING |
| 0x01 | ERROR_POSTPROCESSING |
| 0x02 | ERROR_INVALID_REQUEST |
| 0x03 | ERROR_TIMEOUT_PREPROCESSING |
| 0x04 | ERROR_TRANSPORTPHASE |
| 0x05 | ERROR_TIMEOUT_POSTPROCESSING |
| 0x06 | ERROR_NO_SVK |
| 0x07 | NO_USB_DEVICES |
| 0x08 | ERROR_UNKNOWN |
| 0xXY | ERROR_UNKNOWN |

### LINK_RESET_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0x0 | Linkverlust aufgrund SG-externen Ereignisses |
| 0x1 | Linkverlust aufgrund SG-interen Ereignisses |

### LUEFTER_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x01 | Lüfter dreht sich gar nicht |
| 0x02 | Lüfter dreht sich, aber nicht mit der erwarteten Geschwindigkeit |

### MAP_MATERIAL_REASON

| WERT | TEXT |
| --- | --- |
| 0x01 | map material memory area empty |
| 0x02 | map material memory area filled out with other data |
| 0x03 | map material corrupt (can be repaired by updating the map material) |

### MEDIA_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unknown |
| 0x01 | CD-R |
| 0x02 | CD-RW |
| 0x03 | DVD-R |
| 0x04 | DVD-RW |

### MILAGE_ERROR_CAUSE

| WERT | TEXT |
| --- | --- |
| 0x01 | Nichtmonotone Mileage (Combi prüfen) |
| 0x02 | Timeout (MOST Ring prüfen) |

### PDC_INTERNAL_ERROR

| WERT | TEXT |
| --- | --- |
| 0x01 | Wave Player |
| 0x02 | Audio Management |

### PERSONAL_DATAS_OFF_PD_ERR

| WERT | TEXT |
| --- | --- |
| 0x00000001 | Nachrichtenliste |
| 0x00000002 | Login-Daten (USSO last user) |
| 0x00000004 | BON Cache |
| 0x00000008 | BIN Cache |
| 0x00000010 | Internet Favoriten |
| 0x00000020 | Cookies |
| 0x00000040 | Fahrtenbuch |

### PERSONAL_DATAS_ON_PD_ERR

| WERT | TEXT |
| --- | --- |
| 0x00000001 | Bluetooth Device Liste |
| 0x00000002 | Phonebook |
| 0x00000004 | Kalender |
| 0x00000008 | Notizen |
| 0x00000010 | Sprachnotizen |
| 0x00000020 | Aufgaben |
| 0x00000040 | contact book |
| 0x00000080 | Letzte Suchbegriffe Sonderziele |
| 0x00000100 | Heruntergeladene Routen |
| 0x00000200 | Letzte Ziele |
| 0x00000400 | Settings Sonderziele |
| 0x00000800 | QDB |
| 0x00001000 | Entertainment-Server |
| 0x00002000 | BT Geräte Audio Streaming |
| 0x00004000 | Online Entertainment (Login Daten) |
| 0x00008000 | Musiksammlung |
| 0x00010000 | WLAN Daten |
| 0x00020000 | FBM Daten |
| 0x00040000 | Bordcomputer |
| 0x00080000 | HMI Cache (A4A) |
| 0x00100000 | Message Dictation Daten |
| 0x00200000 | PIA Profile |
| 0x80000000 | reserviert bis |

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

### PIA_ERROR_ID

| WERT | TEXT |
| --- | --- |
| 0x01 | no system function can fblock |
| 0x02 | unknown export error |
| 0x03 | no valid crypto key |
| 0x04 | mem allocation error |
| 0x05 | zlib initialization error |
| 0x06 | csm random init error |
| 0x07 | csm encrypt init error |
| 0x08 | csm encrypt update error |
| 0x09 | csm encrypt finalize error |
| 0x0A | csm mac init error |
| 0x0b | csm mac update error |
| 0x0C | csm mac finalize error |
| 0x0E | csm decrypt init error |
| 0x0F | csm decrypt update error |
| 0x10 | csm decrypt finalize error |
| 0x11 | unknown process error |

### PORT_CRC_ERROR_COUNT_1B_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Frames verloren |
| 0x01 | 1-9 Frames verloren |
| 0x02 | 10-99 Frames verloren |
| 0x03 | 100-999 Frames verloren |
| 0x04 | 1000-9999 Frames verloren |
| 0x05 | 10000-99999 Frames verloren |
| 0x06 | > 100000 Frames verloren |
| 0x07 | reserviert |
| 0x08 | reserviert |
| 0x09 | reserviert |
| 0x0A | reserviert |
| 0x0B | reserviert |
| 0x0C | reserviert |
| 0x0D | reserviert |
| 0x0E | Port nicht verbunden |
| 0x0F | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |

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

### POWER_SEQUENCE_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | CDCE (Clock generator) |
| 0x01 | Power-Good |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00 |
| 1 | defaultSession |
| 2 | programmingSession |
| 3 | extendedDiagnosticSession |
| 4 | safetySystemDiagnosticSession |
| 64 | vehicleManufacturerSpecific_40 |
| 65 | codingSession |
| 66 | SWTSession |

### RES_0X1032_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASU_STATE | - | - | + | 0-n | high | unsigned char | - | TASU_STEUERN_STATUS | - | - | - | Steuerung der TAS-Nutzung |

### RES_0X1046_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CABLE_DIAG_STATE | + | - | - | 0-n | high | unsigned char | - | CABLE_DIAG_STATE_TAB | - | - | - | Ergebnis der Kabeldiagnose. |

### RES_0X1047_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OUI_DATA | + | - | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | 24 Bit OUI des PHYs. Die restlichen Bits sind auf 0 zu setzen. |
| STAT_MMN_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die 6 Bit lange MMN des Phys. Die übrigen Bits sollen auf 0 gesetzt werden. |
| STAT_REVISION_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 4 Bit lange Revisionsnummer des PHY. Die übrigen Bits sollen mit 0 belegt werden. |

### RES_0X1048_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_LOOPBACK_TEST | + | - | - | 0-n | high | unsigned char | - | ETH_PHY_LOOPBACK_TEST | - | - | - | Ergebnis Loopback-Test |

### RES_0X104C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_TEST_MODE | + | - | - | 0-n | high | unsigned char | - | ETH_PHY_TEST_MODE_STATE | - | - | - | Gibt an, ob das Schalten des PHY in den gewünschten Modus erfolgreich war. |

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

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X400A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AMB_SENSOR_WERT | lx | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ambient brightness of the local CID sensor (Lux). Range: [0x0000¿0x03E8] 0¿1000 Lux 0xFFFF invalid or sensor not implemented |
| STAT_BL_TEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Currently measured temperature of the backlight temperature sensor. Range: [0xD8¿0x78] -40°C bis  120°C 0x80 -128°C  Sensor Failure |
| STAT_VCC_VOLTAGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vcc voltage of the CID in steps of 1/10 V Range: [0x0000¿0xFFFE]  0xFFFF invalid |
| STAT_BACKLIGT_DRIVER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Error status output pins of the backlight LED. Range: [0x00¿0x03] 0xFF invalid |
| STAT_INT_STATUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Contents of the Indigo register ¿IntStatus' Range: [0x0000¿0xFFFF] |

### RES_0X400D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_THRESHOLDS01_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 01 in 0-100°C |
| STAT_TEMP_THRESHOLDS02_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 02 in 0-100°C |
| STAT_TEMP_THRESHOLDS03_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 03 in 0-100°C |
| STAT_TEMP_THRESHOLDS04_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 04 in 0-100°C |
| STAT_TEMP_COUNTERS01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 01 of the CID. Range: [0x00-0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 02 of the CID. Range: [0x00-0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 03 of the CID. Range: [0x00-0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 04 of the CID. Range: [0x00-0x64] 0...100°C 0xFF invalid value |

### RES_0X400E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAJOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Major SW version of the CID |
| STAT_MINOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minor SW version of the CID |
| STAT_PATCH_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patch version of the CID |

### RES_0X400F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_POWER_MODE | 0-n | high | unsigned char | - | TAB_StatusCIDPowerMode | - | - | - | Indicates if the CID is enabled by the head unit power mode |
| STAT_ERROR_FLAGS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates which internal error are active.Range: [0x0000¿0xFFFF] |
| STAT_MAIN_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDMainState | - | - | - | Main state of the CID state machine |
| STAT_OPERATION_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDOperationState | - | - | - | Operation state of the CID state machine |
| STAT_INIT_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDInitState | - | - | - | Initialization (startup) state of the CID state machine |
| STAT_COM_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDComState | - | - | - | State of the communication stack |
| STAT_SCHEDULE_ID | 0-n | high | unsigned char | - | TAB_STATUSCIDSCHEDULEID | - | - | - | Schedule ID of communication stack. Range: [0x00¿0x04] 0xFF invalid |
| STAT_FADE_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDFadeState | - | - | - | Fading state of the dimming module |
| STAT_FLASH_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDFlashState | - | - | - | Flash reading state of the GDC module |
| STAT_FLASH_DATA_CHANGED | 0-n | high | unsigned char | - | TAB_StatusCIDFlashDataChange | - | - | - | Indicates if the flash data of the connected CID has been changed and must be saved by the head unit |
| STAT_DISPLAY_VOLTAGE | 0-n | high | unsigned char | - | TCIDOnOffAction | - | - | - | Activation state of the display power supply |
| STAT_DISPLAY_ENABLE | 0-n | high | unsigned char | - | TCIDOnOffAction | - | - | - | Activation state of the complete CID (also contained in Status Monitor) |
| STAT_DISPLAY_READY | 0-n | high | unsigned char | - | TAB_CIDDisplayReady | - | - | - | Indicated if CID is ready to display or not (also contained in Status Monitor) |

### RES_0X4010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIM_CURVE_X1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Curve point X1 of the dimming curve. |
| STAT_DIM_CURVE_X2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Curve point X2 of the dimming curve. |
| STAT_DIM_CURVE_X3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Curve point X3 of the dimming curve. |
| STAT_DIM_CURVE_Y1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Curve point Y1 of the dimming curve. |
| STAT_DIM_CURVE_Y2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Curve point Y2 of the dimming curve. |
| STAT_DIM_CURVE_Y3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Curve point Y3 of the dimming curve. |
| STAT_DIM_TOLERANCE_ALPHA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Width of dimming module tolerance band (dynamic part) |
| STAT_DIM_TOLERANCE_ABS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Width of dimming module tolerance band (static part) |
| STAT_DIM_DIFF_GAIN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Amplification factor for brightness deviation |
| STAT_DIM_DIFF_THRESHOLD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Threshold for luminous density deviation |
| STAT_DIM_DIFF_BIAS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Decay constant for dynamic damping |
| STAT_DIM_DIFF_MAX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximum time constant for local photo sensor filtering |
| STAT_DIM_DIFF_MIN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimum time constant for local photo sensor filtering |
| STAT_DIM_UP_MIN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimum time constant of dark to bright regulation |
| STAT_DIM_DOWN_MIN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimum time constant of bright to dark regulation |
| STAT_DIM_MAX_OFFSET_BRIG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Upper border of the brightness offset regulation range |
| STAT_DIM_FADE_TIME_T0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Death time before fading starts (resolution 100ms). Range: [0x00¿0xFF] |
| STAT_DIM_FADE_TIME_T1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time to fade to current luminous density (resolution 100ms). Range: [0x00¿0x3F] |
| STAT_DIM_FADE_TIME_T2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time to fade out (resolution 100ms). Range: [0x00¿0x3F] |
| STAT_DIM_FADE_EXPO_T1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 |  Fade in ramp curve exponent. 0=linear, 1=square, ... Range: [0x00¿0x04]  |
| STAT_DIM_FADE_EXPO_T2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 |  Fade out ramp curve exponent. 0=linear, 1=square, ... Range: [0x00¿0x04]  |
| STAT_DIM_FILT_CHANGE_SENSITIVITY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adjusts the reaction on  strong signal changes depending on the time the input value is stable. 0 = no adjustment (old filter algorithm) 1-65535 = number of dim cycles the input value has to be stable Range: [0x0000¿0xFFFF] |
| STAT_DIM_MIN_OFFSET_BRIG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lower border of the brightness offset regulation range |
| STAT_ENDIANESS_ADAPTED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Indicates if the endianess of the coding data block has been adapted or not |
| STAT_PADDING_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Padding for further use |

### RES_0X4011_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_LOCATION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Value of the location in the car |
| STAT_PART_NR_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Value of the BMW part number. Byte 0¿1=0 Byte 2¿5=BMW Teilenummer |
| STAT_SUPPLIER_NR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Value of the supplier part number |
| STAT_SERIAL_NUMBER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Value of the serial number. |
| STAT_PRODUCTION_YEAR_WERT | HEX | high | unsigned char | - | - | - | - | - | Year of production of the CID |
| STAT_PRODUCTION_MONTH_WERT | HEX | high | unsigned char | - | - | - | - | - | Month of production of the CID |
| STAT_PRODUCTION_DAY_WERT | HEX | high | unsigned char | - | - | - | - | - | Day of production of the CID |
| STAT_HARDWARE_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hardware version of the CID |
| STAT_DISPLAY_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Display version of the CID |
| STAT_MECHANICAL_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mechanical version of the CID |
| STAT_FLASH_DATA_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Flash data version of the CID |

### RES_0X4033_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREQUENZ_WERT | kHz | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die derzeit eingestellte Frequenz im Bereich 150 - 108000 [kHz] |

### RES_0X4034_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TP | 0-n | - | unsigned char | - | TAB_TP | 1.0 | 1.0 | 0.0 | Gibt den Status der TP Funktion als Integer wieder. |
| STAT_AF | 0-n | - | unsigned char | - | TAB_AF | - | - | - | Gibt den Status der AF Funktion als Integer wieder. |
| STAT_RDS | 0-n | - | unsigned char | - | TAB_RDS | 1.0 | 1.0 | 0.0 | Gibt den Status der RDS Funktion als Integer wieder. |

### RES_0X4044_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_ADDRESS_AP_1_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 1 |
| STAT_WLAN_ERRORRATE_AP_1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 1 |
| STAT_WLAN_ERRORRATE_DBM_AP_1_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 1 |
| STAT_WLAN_ADDRESS_AP_2_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 2 |
| STAT_WLAN_ERRORRATE_AP_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 2 |
| STAT_WLAN_ERRORRATE_DBM_AP_2_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 2 |
| STAT_WLAN_ADDRESS_AP_3_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 3 |
| STAT_WLAN_ERRORRATE_AP_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 3 |
| STAT_WLAN_ERRORRATE_DBM_AP_3_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 3 |
| STAT_WLAN_ADDRESS_AP_4_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 4 |
| STAT_WLAN_ERRORRATE_AP_4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 4 |
| STAT_WLAN_ERRORRATE_DBM_AP_4_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 4 |
| STAT_WLAN_ADDRESS_AP_5_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 5 |
| STAT_WLAN_ERRORRATE_AP_5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 5 |
| STAT_WLAN_ERRORRATE_DBM_AP_5_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 5 |
| STAT_WLAN_ADDRESS_AP_6_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 6 |
| STAT_WLAN_ERRORRATE_AP_6_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 6 |
| STAT_WLAN_ERRORRATE_DBM_AP_6_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 6 |
| STAT_WLAN_ADDRESS_AP_7_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 7 |
| STAT_WLAN_ERRORRATE_AP_7_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 7 |
| STAT_WLAN_ERRORRATE_DBM_AP_7_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 7 |
| STAT_WLAN_ADDRESS_AP_8_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 8 |
| STAT_WLAN_ERRORRATE_AP_8_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 8 |
| STAT_WLAN_ERRORRATE_DBM_AP_8_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 8 |

### RES_0XA00A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEARCHING_PROCESS | - | - | + | 0-n | - | unsigned char | - | TAB_SEARCHING_PROCESS | - | - | - | gibt den Status zum Suchprozess zurück Dieser Status muss auf 0 neu initialisiert werden, wenn die Head-Unit (normal wach auf, zurücksetzen) startet. |
| STAT_NAME_TEXT | - | - | + | TEXT | - | string[8] | - | - | 1.0 | 1.0 | 0.0 | Name der besten Station |
| STAT_PI_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Programm Identifikation der besten Station |
| STAT_FIELDSTRENGTH_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Feldstärke der besten Station |
| STAT_QUALITY_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualität der besten Station |

### RES_0XA00B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENTSOURCE | - | - | + | 0-n | - | unsigned char | - | TAB_ENTSOURCE | - | - | - | die eingestellte Entertainmentquelle |
| STAT_DESIRED_ENTSOURCE | - | - | + | 0-n | - | unsigned char | - | TAB_ENTSOURCESTATUS | - | - | - | gibt zurück, ob die letzte einzustellende Entertainmentquelle verfügbar war. |

### RES_0XA00E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NAVI_SIMULATION | - | - | + | 0-n | - | unsigned char | - | TNaviSimulationModeActivationStatus | 1.0 | 1.0 | 0.0 | - |

### RES_0XA01C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HERSTELLUNG_VIDEOVERBINDUNG | - | - | + | 0-n | - | unsigned char | - | THerstellungStatus | 1.0 | 1.0 | 0.0 | Gibt 0 wieder, wenn: - Keine Videoverbindung angefordert wurde. - Nach dem Herunterfahren oder Neustart des Steuergerätes. - Die Verbindung wieder per Diagnose abgebaut bzw. auf regulären Betrieb zurückgeschaltet wurde. |
| STAT_HERSTELLUNG_FEHLER | - | - | + | 0-n | - | unsigned char | - | THerstellungFehler | 1.0 | 1.0 | 0.0 | Gibt 0 wieder, wenn: - Keine Videoverbindung angefordert wurde. - Nach dem Herunterfahren oder Neustart des Steuergerätes. - Die Verbindung wieder per Diagnose abgebaut bzw. auf regulären Betrieb zurückgeschaltet wurde. - Wenn STAT_HERSTELLUNG_VIDEOVERBINDUNG den Wert 0,1 oder 2 aufweist. |
| STAT_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Ausgewählte Quelle: Tabelle TVideoQuelle |
| STAT_SENKEN | - | - | + | 0-n | - | unsigned int | - | TVideoSenke | 1.0 | 1.0 | 0.0 | Ausgwählte Senke: Bitkombination: Tabelle TVideoSenke |

### RES_0XA01D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt nach Tabelle TAB_VIDEOSOURCE bzw. TAB_EINGANGVIDEOSWITCH an, welche Quelle(n) getestet wurde(n). |
| STAT_TEST_VIDEOEINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_TESTSTATUS | - | - | - | Gibt den Status des gesamten Tests oder der entsprechenden Quelle(n) wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_SIGNALE_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 2 oder 3 meldet. Gibt wieder, wie vielen Fehler während des Test gefunden wurden. |
| STAT_FEHLER_1_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_1_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. X ist kleiner gleich der Anzahl der auf das Steuergerät schaltbaren Quellen. Für den Videoswitch und die Monitore sind die schaltbaren Quellen gleich der Anzahl der Eingänge. Bei N theoretisch verbaubaren und schaltbaren Quellen muss dieses Result N-mal implementiert werden. Beispiel falls es nur möglichen Quellen gäbe: STAT_FEHLER_1_ FEHLERART, STAT_FEHLER_2_ FEHLERART |
| STAT_FEHLER_1_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_1_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_1_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | ertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_2_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_2_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_3_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_3_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_4_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_4_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_5_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_5_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_6_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_6_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_7_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_7_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_8_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_8_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_9_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_9_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_10_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_10_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_11_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_11_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_12_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_12_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_13_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_13_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_14_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_14_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_15_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_15_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_QUELLE | - | - | + | 0-n | - | unsigned long | - | TAB_VIDEOSOURCE | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_16_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_16_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TAB_EINGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAB_AUSGANGVIDEOSWITCH | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |

### RES_0XA01E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAU_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TAB_VERBAUROUTINE | - | - | - | Ausgeführte Testroutine(n). |
| STAT_TEST_VERBAU | - | - | + | 0-n | - | unsigned char | - | TAB_TESTSTATUS | - | - | - | Gibt den Status des Verbautests wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |

### RES_0XA021_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREQUENZ_WERT | - | - | + | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Integer, 20..20 000 [Hz] Bei Verstärkern: 8 000 ... 20 000 [Hz] |
| STAT_LEVEL_WERT | - | - | + | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Bei Headunits: Hex-Wert, von 0x00 lückenlos bis 0x7F, Bei Verstärkern: Integer, -50..0 [dB] |
| STAT_KANAL | - | - | + | 0-n | - | unsigned long | - | TAB_AUDIOKANAL | - | - | - | bezeichnet den Kanal, auf dem gemessen wurde. |
| STAT_MESSDAUER_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | gibt die Dauer der Messung wieder. Bereich: 50-1000ms Bei Verstärkern: Bereich: 800-3000ms |
| STAT_LAUTSPRECHER_IMPEDANZMESSUNG | - | - | + | 0-n | - | unsigned char | - | TAB_TESTSTATUS | - | - | - | Gibt den Status des gesamten Tests oder der entsprechenden Kanäle wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_KANAELE_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 2 oder 3 meldet. Gibt wieder, wie viele Fehler während des Tests gefunden wurden. |
| STAT_FEHLER_1_KANAL | - | - | + | 0-n | - | unsigned long | - | TAB_AUDIOKANAL | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_1_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_1_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_1_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_2_KANAL | - | - | + | 0-n | - | unsigned long | - | TAB_AUDIOKANAL | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_2_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_2_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_2_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_3_KANAL | - | - | + | 0-n | - | unsigned long | - | TAB_AUDIOKANAL | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_3_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_3_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_3_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_4_KANAL | - | - | + | 0-n | - | unsigned long | - | TAB_AUDIOKANAL | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_4_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_4_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_4_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |

### RES_0XA025_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LANGUAGE | - | - | + | 0-n | - | unsigned char | - | TAB_LANGUAGE | - | - | - | Liest die derzeit eingestellte MMI Sprache. |

### RES_0XA02F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROVISIONING | - | - | + | 0-n | - | unsigned char | - | TAB_PROVISIONING_STATUS | - | - | - | Status des Provisionierungsprozess, Werte gemäß Tabelle TAB_PROVISIONING_STATUS |

### RES_0XA039_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEVEL_WERT | + | - | - | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F, Nicht unterstützte Werte (Stereo: 0x3F) dürfen nicht zu Fehlermeldungen führen. Sondern die für das Lautsprechersystem nächstmöglich kleinere verfügbare Lautstärke wird eingestellt.   Bei manchen sekundären Lautstärken wie Navi-Out wird die Lautstärke relativ angegeben, z.B: [-11;11]  Bei Verstärkern: Integer, -96..0 [dB] |

### RES_0XA03A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NAVI_MAP | - | - | + | 0-n | - | unsigned char | - | TAB_NAVI_MAPSTATUS | - | - | - | Status Kunden Navigation Karte |

### RES_0XA03C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER | - | - | + | 0-n | - | unsigned char | - | TAB_LUEFTERSTATUS | - | - | - | Status des Lüfters |
| STAT_LUEFTER_DREHZAHL_WERT | - | - | + | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuelle Frequenz des Lüfters in Hz (wenn nicht abfragbar, wird 0xFFFF zurückgegeben) |

### RES_0XA03D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_FACTORY_DEFAULTS | - | - | + | 0-n | - | unsigned char | - | TAB_SDARS_FACTORY_SUCCESSFUL | - | - | - | SDARS Factory Defaults |

### RES_0XA03F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEARCHING_PROCESS_STATUS_DAB | - | - | + | 0-n | - | unsigned char | - | TAB_SEARCHING_PROCESS | - | - | - | DAB Suchprozess |
| STAT_ENSEMBLE_NAME_TEXT | - | - | + | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Label des aktiven Ensembles |
| STAT_ENSEMBLE_ID_TEXT | - | - | + | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ensemble Identifikation |
| STAT_ENSEMBLE_BER_WERT | - | - | + | HEX | - | unsigned int | - | - | - | - | - | Fehlerrate vom aktivem Ensemble |
| STAT_SERVICE_NAME_TEXT | - | - | + | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Name des aktiven Dienstes (erster Dienst des Ensembles) |

### RES_0XA048_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT | - | - | + | 0-n | - | unsigned char | - | TAB_BLUETOOTH_STATUS | - | - | - | liest den Bluetooth Status aus |

### RES_0XA049_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT_ERKENNUNGSMODUS | - | - | + | 0-n | - | unsigned char | - | TAB_BT_DETECTION_MODE_STATUS | - | - | - | liest den Status des Bluetooth Erkennungsmodus |

### RES_0XA04A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_P_KM_READING_AT_LAST_RECONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | KM-Stand bei letzter Verbindungsherstellung |
| STAT_P_NO_OF_RECONNECT_WERT | + | - | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Verbindungsherstellungen |
| STAT_P_PHONE_MODEL_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Telefonmodell als Rohdaten |
| STAT_P_PHONE_SOFTWARE_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Telefonsoftware als Rohdaten |

### RES_0XA05A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REMOVE_CUSTOMER_UPDATES | - | - | + | 0-n | high | unsigned char | - | TSTAT_REMOVE_CUSTOMER_UPDATES | 1.0 | 1.0 | 0.0 | Entfernen aller Benutzer Updates |

### RES_0XA082_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_DATABASES | - | - | + | 0-n | high | unsigned char | - | TProcessStatus | - | - | - | Ergebnis siehe Tabelle TProcessStatus |

### RES_0XA09F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_TYPE | - | - | + | 0-n | high | unsigned char | - | TAB_WLAN_TYPE | - | - | - | Typ der MAC Addresse |
| STAT_WLAN_MAC_ADDRESS_TEXT | - | - | + | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | angeforderte MAC-Adresse |

### RES_0XA0B4_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INST_ID_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MOST Instance ID |
| STAT_VISIBLE_CONTEXT_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HMI menue ID |
| STAT_FOCUS_INDEX_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Index des auswaehlbaren Element der HMI in der angezeigten Tafel |
| STAT_LIST_INDEX_WERT | - | - | + | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Index des auswaehlbaren Element innerhalb der Liste (falls zutreffend)  |

### RES_0XA0B5_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_GENERATOR_FREQUENCY_SXM_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Frequency that is currently active on the both channels  Range : 0 to 255 Frq in 100 Hz steps  0 = frequency generator off; 1 = 100Hz tone; 2 = 200Hz tone ¿. |

### RES_0XA0B9_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_DATA_TO_RESET | - | - | + | 0-n | high | unsigned char | - | TAB_WLAN_RESET | - | - | - | Ergebnis des Jobs |
| STAT_WLAN_RESET_TO_BASIC_STATE | - | - | + | 0-n | high | unsigned char | - | TAB_TESTSTATUS | - | - | - | Ergebnis des Löschens der client Netzwerkliste |

### RES_0XA0C8_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_PREACTIVATION_MODE | - | - | + | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | gibt den Zustand des SDARS Moduls anhand TAB_ONOFF an |

### RES_0XA0D7_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COMPLETENESS_SDARS_MPFA | - | - | + | 0-n | high | unsigned char | - | TAB_COMPLETENESS | - | - | - | Status of the MPFA completeness |
| STAT_ACTIVATED_SDARS_MPFA | - | - | + | 0-n | high | unsigned char | - | TAB_MPFA | - | - | - | Status of the activated MPFA |

### RES_0XA0D8_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_1_VENDORID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Lieferanten ID USB Gerät1 |
| STAT_1_PRODUCTID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Produkt ID USB Gerät1 |
| STAT_1_CLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Class-ID USB Gerät1 |
| STAT_1_SUBCLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Subclass-ID USB Gerät1 |
| STAT_1_KM_WERT | + | - | - | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | gesamte gefahrene Distanz während ein USB Gerät 1 gesteckt war - Summe über alle Verbindungen |
| STAT_1_CONNECTIONS_WERT | + | - | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Verbindungen USB Gerät1 |
| STAT_1_LAST_CONNECTION_STATE | + | - | - | 0-n | - | unsigned char | - | TAB_USB_CONNECTION_STATE | - | - | - | Aktueller Zustand Verbindung USB Gerät1 |
| STAT_1_USED_PORT | + | - | - | 0-n | - | unsigned char | - | TAB_USB_INTERFACE | - | - | - | Benutzter Port: USB Interface or Snap In Adapter 0x00 USB Interface vorne 0x01 Snap In Adapter vorne 0x02 USB Interface hinten 0x03 Snap In Adapter hinten |
| STAT_1_NUM_MEDIA_FILES_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Daten auf dem Gerät |
| STAT_1_OS_VERSION_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Version des Betriebssystems des CE Gerätes zum Zeitpunkt der letzten Verbindung e.g. 'Android 4.2' or 'iOS 7.0.2' |
| STAT_2_VENDORID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Lieferanten ID USB Gerät2 |
| STAT_2_PRODUCTID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Produkt ID USB Gerät2 |
| STAT_2_CLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Class-ID USB Gerät2 |
| STAT_2_SUBCLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Subclass-ID USB Gerät2 |
| STAT_2_KM_WERT | + | - | - | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | gesamte gefahrene Distanz während ein USB Gerät 2 gesteckt war - Summe über alle Verbindungen |
| STAT_2_CONNECTIONS_WERT | + | - | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Verbindungen USB Gerät2 |
| STAT_2_LAST_CONNECTION_STATE | + | - | - | 0-n | - | unsigned char | - | TAB_USB_CONNECTION_STATE | - | - | - | Aktueller Zustand Verbindung USB Gerät2 |
| STAT_2_USED_PORT | + | - | - | 0-n | - | unsigned char | - | TAB_USB_INTERFACE | - | - | - | Benutzter Port: USB Interface oder Snap In Adapter 0x00 USB Interface vorne 0x01 Snap In Adapter vorne 0x02 USB Interface hinten 0x03 Snap In Adapter hinten |
| STAT_2_NUM_MEDIA_FILES_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Daten auf dem Gerät |
| STAT_2_OS_VERSION_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Version des Betriebssystems des CE Gerätes zum Zeitpunkt der letzten Verbindung e.g. 'Android 4.2' or 'iOS 7.0.2' |
| STAT_3_VENDORID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Lieferanten ID USB Gerät3 |
| STAT_3_PRODUCTID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Produkt ID USB Gerät3 |
| STAT_3_CLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Class-ID USB Gerät3 |
| STAT_3_SUBCLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Subclass-ID USB Gerät3 |
| STAT_3_KM_WERT | + | - | - | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | gesamte gefahrene Distanz während ein USB Gerät 3 gesteckt war - Summe über alle Verbindungen |
| STAT_3_CONNECTIONS_WERT | + | - | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Verbindungen USB Gerät3 |
| STAT_3_LAST_CONNECTION_STATE | + | - | - | 0-n | - | unsigned char | - | TAB_USB_CONNECTION_STATE | - | - | - | Aktueller Zustand Verbindung USB Gerät3 |
| STAT_3_USED_PORT | + | - | - | 0-n | - | unsigned char | - | TAB_USB_INTERFACE | - | - | - | Benutzter Port: USB Interface oder Snap In Adapter 0x00 USB Interface vorne 0x01 Snap In Adapter vorne 0x02 USB Interface hinten 0x03 Snap In Adapter hinten |
| STAT_3_NUM_MEDIA_FILES_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Daten auf dem Gerät |
| STAT_3_OS_VERSION_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Version des Betriebssystems des CE Gerätes zum Zeitpunkt der letzten Verbindung e.g. 'Android 4.2' or 'iOS 7.0.2' |
| STAT_4_VENDORID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Lieferanten ID USB Gerät4 |
| STAT_4_PRODUCTID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Produkt ID USB Gerät4 |
| STAT_4_CLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Class-ID USB Gerät4 |
| STAT_4_SUBCLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | - | - | - | Subclass-ID USB Gerät4 |
| STAT_4_KM_WERT | + | - | - | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | gesamte gefahrene Distanz während ein USB Gerät 4 gesteckt war - Summe über alle Verbindungen |
| STAT_4_CONNECTIONS_WERT | + | - | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Verbindungen USB Gerät4 |
| STAT_4_LAST_CONNECTION_STATE | + | - | - | 0-n | - | unsigned char | - | TAB_USB_CONNECTION_STATE | - | - | - | Aktueller Zustand Verbindung USB Gerät4 |
| STAT_4_USED_PORT | + | - | - | 0-n | - | unsigned char | - | TAB_USB_INTERFACE | - | - | - | Benutzter Port: USB Interface oder Snap In Adapter 0x00 USB Interface vorne 0x01 Snap In Adapter vorne 0x02 USB Interface hinten 0x03 Snap In Adapter hinten |
| STAT_4_NUM_MEDIA_FILES_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Daten auf dem Gerät |
| STAT_4_OS_VERSION_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Version des Betriebssystems des CE Gerätes zum Zeitpunkt der letzten Verbindung e.g. 'Android 4.2' or 'iOS 7.0.2' |

### RES_0XA0F6_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HU_VIN_PROTECTION | - | - | + | 0-n | high | unsigned char | - | TAB_VIN_PROTECTION | - | - | - | liest den Status des Auslesens der VIN |

### RES_0XA0F7_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HU_FSC_REFURBISH_UI_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert des nötigen Index, der in der HU gespeichert ist |

### RES_0XA0FB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HU_FSC_REFURBISH_VIN_TEXT | - | - | + | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | Wert der geschützten VIN, die in der HU gespeichert ist |

### RES_0XA0FD_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEBUG_MODE | - | - | + | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Status des Zugangs zur seriellen Schnittstelle |

### RES_0XD00C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAUTE_LAUFWERKE | 0-n | - | unsigned char | - | TAB_LAUFWERK | - | - | - | liest aus, welches Laufwerk verbaut ist |
| STAT_VENDORID_ODD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | gibt die VENDORID des optischen Laufwerks aus |
| STAT_PRODUCTID_CD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | gibt die PRODUCTID des optischen Laufwerks aus |
| STAT_FIRMWARE_ODD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | gibt die Firmware-Version des optischen Laufwerks aus |

### RES_0XD010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUALITY_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Werte zwischen 0..15 Dies ist der für AF-Tracking verwendete Wert, wobei 15 bester Qualität entspricht. |
| STAT_FIELDSTRENGTH_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Werte zwischen 0..15 Dies entspricht 0..60 dBµV in Schritten von 4dB. |
| STAT_ANT_PW | 0-n | - | unsigned char | - | TRadOnLead | 1.0 | 1.0 | 0.0 | gibt den Status der Antennenstromversorgung wieder. |
| STAT_FIELDSTRENGTH_EXACT_WERT | dBµV | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Werte zwischen 0..60 Dies entspricht 0..60 dBµV in Schritten von 1dB. Rückgabe von 255, wenn keine Messung möglich. |
| STAT_FREQUENZ_WERT | kHz | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die derzeit eingestellte Frequenz im Bereich 150 - 108000 [kHz] |

### RES_0XD014_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MUTE | 0-n | - | unsigned char | - | TAB_ONOFF | - | - | - | The current entertainment source is not muted (audio on) §§ 0x00 The current entertainment source is muted (audio off) §§ 0x01 |

### RES_0XD01C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT_GERAETENAME_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | liest den Bluetooth Gerätename |

### RES_0XD01D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT_ADR_DEV_1_DATA | DATA | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | Geräteadresse von Gerät 1 |
| STAT_BT_ADR_DEV_2_DATA | DATA | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | Geräteadresse von Gerät 2 |
| STAT_BT_ADR_DEV_3_DATA | DATA | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | Geräteadresse von Gerät 3 |
| STAT_BT_ADR_DEV_4_DATA | DATA | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | Geräteadresse von Gerät 4 |

### RES_0XD021_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_APPL_1 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder. |
| STAT_APPL_ENABLED_1 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_1 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_2 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder. |
| STAT_APPL_ENABLED_2 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_2 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_3 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder. |
| STAT_APPL_ENABLED_3 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_3 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_4 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_4 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_4 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_5 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_5 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_5 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_6 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_6 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_6 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_7 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_7 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_7 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_8 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_8 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_8 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_9 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_9 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_9 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_10 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_10 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_10 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_11 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_11 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_11 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_12 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_12 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_12 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_13 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_13 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_13 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_14 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_14 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_14 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_15 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_15 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_15 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_16 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_16 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_16 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_17 | 0-n | high | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_17 | 0-n | high | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_17 | 0-n | high | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_18 | 0-n | high | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_18 | 0-n | high | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade laeuft |
| STAT_APPL_CODED_18 | 0-n | high | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |

### RES_0XD028_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADON | 0-n | - | unsigned char | - | TAB_ONOFF | - | - | - | Status des Ausgangssignals RADON |

### RES_0XD02C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISC_IDENT_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Disk Identifier für das beinhaltete Medium |
| STAT_DIGITAL_PLAYBACK_QUALITY_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Quality of the digital recording: Range: 0-15 0-1: medium not readable (drive not ok) 2-8: Distortion / mute audible points (drive not ok) 9-14: Medium readable, no audible distortion (drive ok) 15: Medium quality 100%, such as BLER 0 (drive ok) |

### RES_0XD02D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREQUENZ_DAB_KHZ_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | momentane DAB Frequenz in kHz |

### RES_0XD02F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NR_SDARS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | SDARS Telefonnummer |

### RES_0XD03F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HMI_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle HMI Version als String, wie im Entwicklermenü angezeigt |
| STAT_SVS_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle SVS Version als String, wie im Entwicklermenü angezeigt |
| STAT_TEXT_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle TEXT Version als String, wie im Entwicklermenü angezeigt |

### RES_0XD043_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FOLLOWING_DAB_FM | 0-n | - | unsigned char | - | TFollowingDabFm | 1.0 | 1.0 | 0.0 | Gibt den Status der DAB FM Following Funktion als Integer wieder. |
| STAT_FOLLOWING_DAB_DAB | 0-n | - | unsigned char | - | TFollowingDabDab | 1.0 | 1.0 | 0.0 | Gibt den Status der DAB DAB Following Funktion als Integer wieder. |
| STAT_TP_DAB | 0-n | - | unsigned char | - | TTpDab | 1.0 | 1.0 | 0.0 | Gibt den Status der DAB TP Funktion als Integer wieder. |

### RES_0XD045_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUALITY_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Werte zwischen 0..15 Dies ist der für AF-Tracking verwendete Wert, wobei 15 bester Qualität entspricht. |
| STAT_FIELDSTRENGTH_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Werte zwischen 0..15 Dies entspricht 0..60 dBµV in Schritten von 4dB. |
| STAT_ANT_PW | 0-n | - | unsigned char | - | TRadOnLead | 1.0 | 1.0 | 0.0 | gibt den Status der Antennenstromversorgung wieder. |
| STAT_FIELDSTRENGTH_EXACT_WERT | dBµV | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Werte zwischen 0..60 Dies entspricht 0..60 dBµV in Schritten von 1dB. Rückgabe von 255, wenn keine Messung möglich. |
| STAT_FREQUENZ_WERT | kHz | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die derzeit eingestellte Frequenz im Bereich 150 - 108000 [kHz] |

### RES_0XD093_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FM_PHASEDIV_ANTENNA1 | 0-n | high | unsigned char | - | TAB_stateFMPhasAntenna | 1.0 | 1.0 | 0.0 | Status FM 1 Phasendiversity Antenne. Ergebnis siehe Tabelle TAB_stateFMPhasAntenna |
| STAT_FM_PHASEDIV_ANTENNA2 | 0-n | high | unsigned char | - | TAB_stateFMPhasAntenna | 1.0 | 1.0 | 0.0 | Status FM 2 Phasendiversity Antenne. Ergebnis siehe Tabelle TAB_stateFMPhasAntenna |

### RES_0XD0A3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_ACTIVATION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Aktivierungswert |

### RES_0XD0A4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_AP_MODE | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Betriebsart Werte aus der Tabelle TAB_WLAN_MODE |
| STAT_WLAN_WIFI_DIRECT_MODE | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | aktueller Status des Wifi Direct Modus |
| STAT_WLAN_STATION_MODE | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | aktueller Status des Station Modus |

### RES_0XD0C9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_INDEX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert der Hardware-Version |
| STAT_SW_INDEX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert der Software-Version |
| STAT_CRC_COUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erkannten CRC-Fehler |
| STAT_SERIAL_NUMBER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Seriennummer des Zentralinstruments |
| STAT_DIAGNOSTIC_FLAGS | 0-n | high | unsigned char | - | TAB_ZIN_DIAGNOSTIC_FLAG | - | - | - | Gibt den Status des Zentralinstruments zurück Werte aus der Tabelle TAB_ZIN_DIAGNOSTIC_FLAG |
| STAT_ZIN_VARIANT | 0-n | high | unsigned char | - | TAB_ZIN_VARIANT | - | - | - | Gibt den Status des Zentralinstruments zurück Werte aus der Tabelle TAB_ZIN_VARIANT |

### RES_0XD0CA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EVENT_ID_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | erste Event ID |
| STAT_EVENT_ID_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | zweite Event ID |
| STAT_EVENT_ID_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | dritte Event ID |
| STAT_EVENT_ID_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | vierte Event ID |
| STAT_EVENT_ID_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | fünfte Event ID |
| STAT_EVENT_ID_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | sechste Event ID |
| STAT_EVENT_ID_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | siebte Event ID |

### RES_0XD0CB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CURRENT_WIDGET_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_NEXT_WIDGET_ID_PRIO_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_NEXT_WIDGET_ID_PRIO_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_NEXT_WIDGET_ID_PRIO_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_SW_MAJOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_SW_MINOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_SW_PATCH_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_TARGET_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_LED_RING_OFFSET_BRIGHTNESS_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_CURRENT_PWM_OUTPUT_VALUE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_LED_RING_SWITCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_PERMANENT_SWITCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_PERMANENT_DISPLAYS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ANIMATION_SWITCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ANIMATION_DISPLAYS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ANIMATION_TRIGGER_EVENT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_SEMI_PER_EVENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_SEMI_PER_EVENT_PRIO_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_SEMI_PER_EVENT_TRIGGER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0XD0CE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHORT_VIN_TEXT | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | 7-stellige Fahrgestellnummer |
| STAT_SMCC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | SIM Mobile Länderkode |
| STAT_SMNC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | SIM Mobile Netzwerkkode |
| STAT_NMCC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | Netzwerk Mobile Länderkode |
| STAT_NMNC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | Netzwerk Mobile Netzwerkkode |
| STAT_VERSION_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Version des Steuergerätes und des Provisionierungsmanagers |
| STAT_OTA_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | OTA - ID |
| STAT_DAS_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | DAS - ID |
| STAT_CAUSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Cause Wert Der Wert gibt den Auslöser der Provisionierung an. 0: Required access data is missing in the DASAS data 1: A required OTAAS is expired 2: Update request by user via the HMI  3: Application trigger 4: The PINGUIN triggered the provisioning  5: ACM triggered provisioning on DPAS Mode 6: Provisioning via Diagnosis |
| STAT_DPAS_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Provisionierungszustand |
| STAT_ICC_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | ICC - ID |
| STAT_IMEI_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | IMEI |
| STAT_SERIAL_NUMBER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Seriennummer des Steuergeräts |

### RES_0XD0D1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COUNTER_MEDIA_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der eingelegten Medien des internen CD / DVD-Laufwerks |
| STAT_COUNTER_AUDIO_CDS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der eingelegten Audio-CDs (CDDA) des internen CD / DVD-Laufwerks |
| STAT_COUNTER_CD_ROM_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der eingelegten Audio-CD-ROMs (CD-R/-RW, DVD-R/-RW / + R / + RW ...) des internen CD / DVD-Laufwerks |
| STAT_COUNTER_DVD_VIDEO_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der eingelegten Video-DVDs des internen CD / DVD-Laufwerks |
| STAT_COUNTER_BLURAY_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Number of inserted Blu-ray-disks of the internal Blu-ray drive |
| STAT_RECOGNIZED_AUDIO_CDS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Audio-CDs die von der Gracenote DB erkannt wurden |
| STAT_PLAYBACK_TIME_CD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | playback time for using the CD drive |
| STAT_PLAYBACK_TIME_DVD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | playback time for using the DVD drive |
| STAT_PLAYBACK_TIME_BLURAY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Playback time while using the Blu-ray drive in hours |

### RES_0XD0D3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHORT_VIN_TEXT | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | 7-stellige Fahrgestellnummer |
| STAT_DOWNLOAD_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Download ID |
| STAT_PROVISIONING | 0-n | high | unsigned char | - | TAB_PROVISIONING_STATUS | - | - | - | Status vom Schreibvorgang der Provisionierungsdaten. |

### RES_0XD0D5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NAME_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Vorname und Nachname des Servicepartners |
| STAT_STREET_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Straße und Hausnummer des Service Partners |
| STAT_CITY_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Stadt des Service Partners |
| STAT_COUNTRY_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Land inklusiv Postleitzahl des Service Partners |
| STAT_TELEPHONE_NUMBER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Telefonnummer des Service Partnerns |
| STAT_TYPE_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Typ des Servicepartners (Home, Work) |
| STAT_COMPANY_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Firmenname des Service Partners |
| STAT_EMAIL_ADRESS_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Email Adresse des Service Partners |
| STAT_URL_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Homepage des Service Partners |

### RES_0XD0DD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODUL_TYPE_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Product Type |
| STAT_MODUL_HW_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Hardware Version |
| STAT_MODUL_SW_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Software Version |
| STAT_SXI_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | SXI Revision |
| STAT_BB_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Base Band Chipset Revision |
| STAT_HDEC_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | HDEC chipset Revision |
| STAT_RF_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | RF tuner chipset Revision |

### RES_0XD0DF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_COMP_RECEPTION_SXM | 0-n | high | unsigned char | - | TSdarsSignalQuality | - | - | - | Composite reception quality as integer |
| STAT_SDARS_GLOBAL_STATUS | 0-n | high | unsigned char | - | TSdarsSignalQualityGlobalStatus | - | - | - | Global status as integer |

### RES_0XD0EE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KANAL_1 | 0-n | - | unsigned long | - | TAB_AUDIOKANAL | - | - | - | Kanalnummer |

### RES_0XD0F6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_SXM_CHANNEL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kanalnummer des aktuell gewählten SDARS Kanal |
| STAT_SDARS_SXM_CHANNEL_TUNE_SUCCESS | 0-n | high | unsigned char | - | TSdarsChannelTuneSuccess | - | - | - | Status des aktuell gewählten SDARS Kanal als integer |

### RES_0XD1F8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_PAIRABLE | 0-n | high | unsigned char | - | TAB_WLAN_PAIRABLE | - | - | - | welche WLAN Modi sind aktuell pairbar |

### RES_0XD1FA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_CODED | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | WLAN codiert, wenn mindestens 1 der folgenden Wert STAT_WLAN_AP_SA, STAT_WLAN_WIFI_DIRECT_SA oder STAT_WLAN_STATION_SA aktiv ist |
| STAT_WLAN_AP_SA | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | WLAN AP |
| STAT_WLAN_WIFI_DIRECT_SA | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | WLAN Wifi Direct  |
| STAT_WLAN_STATION_SA | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | WLAN Station  |

### RES_0XD1FB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_DEVICELIST_AP_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 1 |
| STAT_WLAN_DEVICELIST_AP_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 2 |
| STAT_WLAN_DEVICELIST_AP_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 3 |
| STAT_WLAN_DEVICELIST_AP_4_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 4 |
| STAT_WLAN_DEVICELIST_AP_5_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 5 |
| STAT_WLAN_DEVICELIST_AP_6_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 6 |
| STAT_WLAN_DEVICELIST_AP_7_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 7 |
| STAT_WLAN_DEVICELIST_AP_8_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 8 |

### RES_0XD207_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_USB_HUB_KDZ_CODING | 0-n | high | unsigned char | - | TAB_STATUS_USBHUB | - | - | - | Status, ob ein USB-HUB zwischen HU und KDZ installiert ist; hängt von der Codierprüfung ab |
| STAT_USB_TEST_HUB | 0-n | high | unsigned char | - | TAB_USBTEST_STATUS | - | - | - | Status des USB-Interface-Tests |
| STAT_VENDORID_HUB_WERT | HEX | - | unsigned int | - | - | - | - | - | VendorID, dass von der USB Schnittstelle ausgegeben wird |
| STAT_PRODUCTID_HUB_WERT | HEX | - | unsigned int | - | - | - | - | - | vorgegebene ProductID, die für das Gerät von der USB Schnittstelle ausgegeben wird |
| STAT_VENDORSTRING_HUB_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | erkannte VendorString des Gerätes von der USB Schnittstelle wird ausgegeben |
| STAT_USB_TEST_KDZ1 | 0-n | high | unsigned char | - | TAB_USBTEST_STATUS | - | - | - | Status des USB-Interface-Tests |
| STAT_VENDORID_KDZ1_WERT | HEX | - | unsigned int | - | - | - | - | - | VendorID, die von der USB Schnittstelle ausgegeben wird |
| STAT_PRODUCTID_KDZ1_WERT | HEX | - | unsigned int | - | - | - | - | - | vorgegebene ProductID, die für das Gerät von der USB Schnittstelle ausgegeben wird |
| STAT_VENDORSTRING_KDZ1_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | erkannte VendorString des Gerätes von der USB Schnittstelle wird ausgegeben |
| STAT_USB_TEST_KDZ2 | 0-n | high | unsigned char | - | TAB_USBTEST_STATUS | - | - | - | Status des USB-Interface-Tests |
| STAT_VENDORID_KDZ2_WERT | HEX | - | unsigned int | - | - | - | - | - | VendorID, die von der USB Schnittstelle ausgegeben wird |
| STAT_PRODUCTID_KDZ2_WERT | HEX | - | unsigned int | - | - | - | - | - | vorgegebene ProductID, die für das Gerät von der USB Schnittstelle ausgegeben wird |
| STAT_VENDORSTRING_KDZ2_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | erkannte VendorString des Gerätes von der USB Schnittstelle wird ausgegeben |
| STAT_USB_TEST_SIA | 0-n | - | unsigned char | - | TAB_USBTEST_STATUS | - | - | - | Ergebnis des Snap In Adpater Tests |
| STAT_VENDORID_SIA_WERT | HEX | - | unsigned int | - | - | - | - | - | erkannte VendorID des Gerätes von der USB Schnittstelle wird ausgegeben |
| STAT_PRODUCTID_SIA_WERT | HEX | - | unsigned int | - | - | - | - | - |  erkannte ProductID des Gerätes von der USB Schnittstelle wird ausgegeben |
| STAT_VENDORSTRING_SIA_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | erkannte VendorString vom Snap In Adapter wird ausgegeben |

### RES_0XD20E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_AP_SSID_TEXT | TEXT | high | string[32] | - | - | 1.0 | 1.0 | 0.0 | SSID vom AP Netzwerk |
| STAT_WLAN_AP_ENCRYPTION | 0-n | high | unsigned char | - | TAB_WLAN_ENCRYPTION | - | - | - | Typ der Verschlüsselung vom AP Netzwerk |
| STAT_WLAN_AP_NETWORK_KEY_TEXT | TEXT | high | string[64] | - | - | 1.0 | 1.0 | 0.0 | Schlüssel des AP Netzwerk |

### RES_0XD5CF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISPLAY_AKTIVIERUNG | 0-n | - | unsigned char | - | TStatusDisplayActivationMode | 1.0 | 1.0 | 0.0 | Display-Aktivierung [uint8, 0x0..0xF]  (Signal ENB_DISP von Head Unit) |
| STAT_OFFSET_HELLIGKEIT_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Offset Helligkeit [sint8, -127..+127 = -100..+100%, 128 = Ungültig, Fehlerwert]  (Signal OFFS_BRIG_FRT von Head Unit) |
| STAT_DIMMRAD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dimmrad-Stellung [uint8, 0..254 = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal CTR_ILUM_SW) |
| STAT_HELLIGKEIT_KOMBI_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Helligkeitswert I-Kombi-Helligkeits-Sensor [uint8, 0..254  = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal DSTN_LCD_LUM) |
| STAT_DAEMPFUNG_LCD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dämpfung LCD Leuchtdichte [uint8, 0..240 = schnell..langsam, 241..254 = sprunghaft, 255 = FF = Ungültig, Fehlerwert], Geschwindigkeit der Helligkeitsregelung. (Signal DMPNG_LCD_LUM) |

### RES_0XD5D4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_LOCATION_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CID Location |
| STAT_PART_NR_DATA | DATA | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | BMW Teilenummer |

### RES_0XF009_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WAVEBAND | - | - | + | 0-n | - | unsigned char | - | TAB_WAVEBAND | - | - | - | aktuelles Frequenzband: siehe Tabelle TWaveband |

### RES_0XF023_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INTERNAL_TRACE_RECORDER | - | - | + | 0-n | high | unsigned char | - | TAB_STATUSTRACEACTIVATION | - | - | - | Returns the state of the internal traces |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_AKTIVIERUNGSLEITUNG | 0x1024 | - | Reset_Aktivierungsleitung DOORS-ID: FZHS_3798 | - | - | - | - | - | - | - | - | - | 31 | - | - |
| TASU_STEUERN_STATUS | 0x1032 | - | RID zum Steuern des TASU bzw. Abfragen von dessen Status. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1032_R | RES_0x1032_R |
| TAS_REQUEST | 0x1033 | - | Der RID wird verwendet, um ein Steuergerät zu veranlassen, einen Auftrag an den TAS zu schicken. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1033_R | - |
| ETH_CABLE_DIAG | 0x1046 | - | Startet die Kabeldiagnose des PHYs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1046_R | RES_0x1046_R |
| ETH_PHY_IDENTIFIER | 0x1047 | - | Gibt den eindeutigen PHY-Identifier zurück. Dieser wird durch den 24 Bit langen Organizationally Unique Identifier (OUI), die 6 Bit lange Manufacturer's Model Number sowie die 4 Bit lange Revision Number gebildet. Die Werte sind standardisiert und stets in Register 2 und 3 des PHYs enthalten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1047_R | RES_0x1047_R |
| ETH_PHY_LOOPBACK_TEST | 0x1048 | - | Versetzt den gegebenen PHY in den Loopback-Modus und überprüft die Sendefähigkeit des PHYs. Der Test kann im internen und externen Loopback-Modus ausgeführt werden. Im internen Loopback wird nur die digitale Empfangs- und Sendelogik des PHYs überprüft. Im externen Loopback-Modus wird auch der analoge Transceiver Anteil getestet.  D. h. der externe Looback-Test sichert alle Komponenten bis zur Filterbeschaltung (exklusiv) ab.  Für den internen Test gelten keine besonderen Voraussetzungen. Für den externen Test muss der PHY  - als Master konfiguriert sein - sowie entweder terminiert (A) - oder mit einem Ziel-PHY verbunden sein (B).  Für B muss sichergestelt sein, dass der PHY auf Gegenseit deaktiviert bzw. in Reset gehalten wird. Sendet der PHY auf der Gegenseite einen Link-Pulse aus, kann der Test nicht durchgeführt werden, da der zu testende PHY keinen (internen) Link aufbauen kann. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1048_R | RES_0x1048_R |
| ETH_RESET_PORT_CONFIGURATION | 0x104A | - | Setzt die gespeicherte Portkonfiguration zurück. Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_ENABLE_TEST_MODE | 0x104C | - | Schaltet den PHY in den Testmode | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104C_R | RES_0x104C_R |
| STATUS_LIFECYCLE | 0x1735 | STAT_LIFECYCLE | Status Lifecycle | 0-n | - | High | unsigned char | STATUS_LIFECYCLE_DOP | - | - | - | - | 22 | - | - |
| ETH_GET_NUMBER_OF_PORTS | 0x1800 | STAT_NUM_PORTS_WERT | Anzahl der Ports | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_PHY_LINK_STATE | 0x1802 | - | Gibt den aktuellen Link-Status aller physikalisch vorhandenen Ports zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1802_D |
| ETH_LEARN_PORT_CONFIGURATION | 0x1803 | - | Gibt die gelernte Port-Konfiguration des SGs zurück.  Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1803_D |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_KLANGZEICHEN | 0xA000 | - | Steuert eine Tonart an (Klingel,Gong) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA000_R | - |
| SINUSGENERATOR | 0xA001 | - | Gibt einen Sinuston auf einen oder mehrere Kanäle aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA001_R | - |
| STEUERN_VOLUMEAUDIO_DEFAULT | 0xA002 | - | Zurücksetzen aller Lautstärkewerte auf Default-Werte | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_PDC_SIGNAL | 0xA003 | - | Simulates the tone that is hearable at a definite distance to an obstacle. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA003_R | - |
| STEUERN_LINEAR | 0xA004 | - | Zurücksetzen der Fader und Lautstärke auf Default-Werte | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FIND_BEST_STATION | 0xA00A | - | Returns the status of the searching process and the information data of the best station if the searching process has been ended successfully. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA00A_R |
| NEXT_ENTSOURCE | 0xA00B | - | Steuerung Entertainmentquellen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA00B_R | RES_0xA00B_R |
| NAVI_SIMULATION | 0xA00E | - | Aktiviert oder deaktiviert die Navi Simulation. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA00E_R | RES_0xA00E_R |
| VIDEOVERBINDUNG | 0xA01C | - | Steuern, Stoppen und Abfragen einer Videoverbindung . | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01C_R | RES_0xA01C_R |
| TEST_VIDEOEINGANG | 0xA01D | - | Testet die Videoeingänge durch Analyse der dort anliegenden Signale | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01D_R | RES_0xA01D_R |
| TEST_VERBAU | 0xA01E | - | Startet die Verbauprüfung der externen Anschlüsse. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01E_R | RES_0xA01E_R |
| LAUTSPRECHER_IMPEDANZMESSUNG | 0xA021 | - | Impedanzmessung (AC-Messung) auf einem oder mehreren Kanälen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA021_R | RES_0xA021_R |
| LANGUAGE | 0xA025 | - | Liest und setzt die aktuelle MMI Sprache. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA025_R | RES_0xA025_R |
| NAVI_SPEECH | 0xA027 | - | Testet die Sprachausgabe des Navi | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA027_R | - |
| PROVISIONING | 0xA02F | - | Status des Provisionierungsprozess | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA02F_R |
| STEUERN_DELETE_COOKIES | 0xA030 | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_VOLUMEAUDIO | 0xA036 | - | Verstellt die ausgewählte Lautstärke | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA036_R | - |
| STEUERN_TRACK_NUMBER | 0xA037 | - | Wählt die CD/DVD-Tracknummer die abgespielt werden soll. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA037_R | - |
| STATUS_VOLUMEAUDIO | 0xA039 | - | Liest die ausgewählte Lautstärke aus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA039_R | RES_0xA039_R |
| NAVI_MAP | 0xA03A | - | Ermöglicht die Kunden Navigation Karte zu deaktivieren oder zu löschen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03A_R | RES_0xA03A_R |
| LUEFTER | 0xA03C | - | Lüfter | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03C_R | RES_0xA03C_R |
| SDARS_FACTORY_DEFAULTS | 0xA03D | - | Sets factory defaults for SDARS | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA03D_R |
| FIND_BEST_STATION_DAB | 0xA03F | - | beste DAB Station | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA03F_R |
| BT | 0xA048 | - | aktiviert/dekativiert Bluetooth | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA048_R | RES_0xA048_R |
| BT_ERKENNUNGSMODUS | 0xA049 | - | BT Erkennungsmodus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA049_R | RES_0xA049_R |
| BT_READ_PHONE_ID | 0xA04A | - | Telefon ID | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA04A_R | RES_0xA04A_R |
| SWUP_REMOVE_CUSTOMER_UPDATES | 0xA05A | - | entfernt alle Updates des Benutzers I-Stufenstand ohne KISU wiederherstellen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA05A_R |
| RESET_DATABASES | 0xA082 | - | Löschen der persönlichen Telefon Einstellungen und API-Funktionen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA082_R | RES_0xA082_R |
| WLAN_MAC_ADDRESS | 0xA09F | - | MAC Addresse | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA09F_R | RES_0xA09F_R |
| UPDATE_ZERTIFIKATE | 0xA0A9 | - | Löst die Aktualisierung der Zertifikatliste aus | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DEBUG_MODE_ON | 0xA0B0 | - | Aktivierung des Zugangs zum seriellen Zugang | - | - | - | - | - | - | - | - | - | 31 | - | - |
| GRAPHICAL_CONTEXT | 0xA0B4 | - | This service makes HMI jump to menues/list entries and can simulate ZBE push and returnes HMI Graphical context conditions | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0B4_R | RES_0xA0B4_R |
| SDARS_GENERATOR_FREQUENCY_SXM | 0xA0B5 | - | activares the tone generator frequencies of both channels | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0B5_R | RES_0xA0B5_R |
| WLAN_RESET_TO_BASIC_STATE | 0xA0B9 | - | Informationen/ Einstellungen, die mit Wifi verbunden sind | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0B9_R | RES_0xA0B9_R |
| WLAN_WPS_PUSH_BUTTON | 0xA0BB | - | Trigger the button push for WPS Push Button pairing. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| INTERNAL_TRACE_BURN_HU | 0xA0BC | - | Legt das irreversible Flag für die Aktivierung der internen Ablaufverfolgung unter 255 km auf False. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SDARS_PREACTIVATION_MODE | 0xA0C8 | - | preactivation des  SDARS Moduls | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0C8_R | RES_0xA0C8_R |
| CHANGE_PORT_CONFIG | 0xA0CB | - | Umschaltung Master/ Slave | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0CB_R | - |
| SDARS_MPFA | 0xA0D7 | - | activates and returns the activation and completeness of an Multi-Package for Factory (MPFA) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0D7_R | RES_0xA0D7_R |
| USB_HISTORY | 0xA0D8 | - | Gibt Statistikinformationen zu den letzten vier verbundenen USB Massenspeicher, Produkte der Firma Apple, MTP Geräten und den vier letzten unerkannten USB Geräte zurück. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0D8_R | RES_0xA0D8_R |
| HU_VIN_PROTECTION | 0xA0F6 | - | VIN Schutz in Kombination mit BDC 2013/2015/2018  | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0F6_R |
| HU_FSC_REFURBISH_UI | 0xA0F7 | - | Auslesen FSC UI | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0F7_R |
| HU_FSC_REFURBISH_VIN | 0xA0FB | - | Wert der geschützten VIN | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0FB_R |
| DEBUG_MODE_OFF | 0xA0FC | - | deaktiviert den Debug Mode der HU | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DEBUG_MODE | 0xA0FD | - | Status vom Debug Mode | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0FD_R |
| HU_VIN_PROTECTION_ENFORCE_CYCLIC | 0xA109 | - | This diagnosis job starts a cyclic-phase inclusive debouncing within the current life cycle for the internal trusted VIN mechanism. There is no debouncing over several life cycles in this case. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_LESEN_SYSTEMAUDIO | 0xD002 | STAT_AUDIO_SYSTEM | bezeichnet das Lautsprechersystem | 0-n | - | - | unsigned char | TAudioSystem | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| INITIALISIERUNG | 0xD004 | STAT_INITIALISIERUNG | Initialisierungsstatus | 0-n | - | - | unsigned char | TAB_INITIALISIERUNG | - | - | - | - | 22 | - | - |
| LESEN_LAUFWERK | 0xD00C | - | Verbau Laufwerke | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD00C_D |
| STATUS_ANT_QFS | 0xD010 | - | Messen der Feldstärke, die aktuell am Tuner anliegt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD010_D |
| MUTE | 0xD014 | - | Mute-Funktion | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD014_D | RES_0xD014_D |
| SER_NR_DOM_LESEN | 0xD019 | STAT_SER_NR_DOM_TEXT | Ließt die Seriennummer mit 14 Zeichen (DIN ISO 10 486) | TEXT | - | - | string[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BT_GERAETEADRESSE | 0xD01A | STAT_BT_GERAETEADRESSE_DATA | liefert die Adresse des Bluetooth Gerätes | DATA | - | - | data[6] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BT_GERAETENAME | 0xD01C | - | Schreibt/Liest den Bluetooth Gerätenamen | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD01C_D | RES_0xD01C_D |
| BT_GEKOPPELTE_GERAETE_LESEN | 0xD01D | - | Geräte-Adresse der letzten vier gekoppelten Bluetooth Geräte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD01D_D |
| APPLICATION | 0xD021 | - | Status aller freischaltbaren Applikationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD021_D |
| RADON | 0xD028 | - | Ein- oder Ausschalten bzw. Abfragen des Radon-Signals. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD028_D | RES_0xD028_D |
| STATUS_CD_MD_CDC | 0xD02C | - | Liest den Identifier des Mediums und das Qualitätslevel der digitalen Aufnahme aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD02C_D |
| FREQUENZ_DAB_KHZ | 0xD02D | - | DAB Frequenz in kHz | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD02D_D | RES_0xD02D_D |
| TELEFONNUMMER_SDARS | 0xD02F | - | SDARS Telefonnummer auslesen bzw. schreiben | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD02F_D | RES_0xD02F_D |
| STATUS_MAPMATERIAL_VERSION | 0xD03C | STAT_MAPMATERIAL_VERSION_TEXT | gibt die Navigations DB zurück | TEXT | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_HMI_VERSION | 0xD03F | - | HMI Software Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD03F_D |
| AF_TP_DAB | 0xD043 | - | Aktiviert/Deaktiviert DAB Following- UND TP Funktionen. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD043_D | RES_0xD043_D |
| AKTIVE_ANTENNE_DAB | 0xD044 | STAT_AKTIVE_ANTENNE_DAB | Antenna that is currently active as integer | 0-n | - | - | unsigned char | TAktiveAntenneDAB | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ANT_QFS_FM2 | 0xD045 | - | Messen der Feldstärke, die aktuell am Tuner anliegt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD045_D |
| SIGNAL_DAB | 0xD053 | STAT_SIGNAL_DAB | gibt das DAB Signal zurück | 0-n | - | - | unsigned char | TSignalDab | - | - | - | - | 22 | - | - |
| TIME_AFTER_STARTUP | 0xD092 | STAT_TIME_AFTER_START_UP_WERT | Werte von 0-65535 [s], die angeben, wie viel Zeit seit dem Hochstarten (Aufwecken) vergangen ist | s | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_FM_PHASDIV_ANTENNA | 0xD093 | - | Führt eine Impedanzmessung der FM Antennen von der Phasen diversity aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD093_D |
| WLAN_ACTIVATION | 0xD0A3 | - | WLAN Zustand | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD0A3_D | RES_0xD0A3_D |
| WLAN_MODE | 0xD0A4 | - | WLAN Modus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD0A4_D | RES_0xD0A4_D |
| ZIN_SHOWCOLOR | 0xD0BD | - | Steuert die Füllung (Helligkeit) des Zentralinstruments. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0BD_D | - |
| ZIN_TESTBILD | 0xD0BE | - | Aktiviert das Testbild im Zentralinstrument. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0BE_D | - |
| ZIN_WIDGET_ID | 0xD0BF | - | Löst eine Animation aus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0BF_D | - |
| ZIN_HELLIGKEITSWERT | 0xD0C6 | - | Steuert die Gesamthelligkeit des Zentralinstruments. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0C6_D | - |
| ZIN_RESET | 0xD0C7 | - | Löst einen Reset im Zentralinstrument aus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0C7_D | - |
| ZIN_ENDE | 0xD0C8 | - | Beendet die Diagnosesitzung des Zentralinstruments und setzt aller Parameter die durch vorherige Diagnoseanfragen geändert wurden zurück. Das Zentralinstrument kehrt in den  normalen Modus  zurück. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0C8_D | - |
| ZIN_CENTRAL_INSTRUMENT | 0xD0C9 | - | Gibt die Statusinformationen des Zentralinstruments zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0C9_D |
| ZIN_EVENT_QUEUE | 0xD0CA | - | Gibt die Statusinformationen des Zentralinstruments zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0CA_D |
| ZIN_INTERNAL_STATES | 0xD0CB | - | Gibt die Statusinformationen des Zentralinstruments zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0CB_D |
| PROVISIONING_PARAMETER | 0xD0CE | - | Liest die Parameter der Provisionierung aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0CE_D |
| MEDIA_STATISTIK | 0xD0D1 | - | Returns the CD/ DVD media statistic | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0D1_D |
| PROVISIONING_DATA | 0xD0D3 | - | Liest Status des Schreibens der Provisionierungsdatei. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0D3_D |
| SERVICE_PARTNER_DATEN | 0xD0D5 | - | Schreiben und Lesen der Kontaktdaten des Service Partners in/aus  dem Telefonbuch des Steuergeräts. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD0D5_D | RES_0xD0D5_D |
| STATUS_SDARS_RADIO_ID | 0xD0DA | STAT_SDARS_RADIO_ID_TEXT | Returns the 12 digits Radio ID of the SDARS tuner (SXM) | TEXT | - | High | string[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SDARS_VERSIONS | 0xD0DD | - | Versionen der HW und SW des SDARS Moduls | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0DD_D |
| STEUERN_SDARS_SXM_CHANNEL | 0xD0DE | - | Umschalten zu einem ausgewählten SDARS Kanal | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0DE_D | - |
| STATUS_SDARS_SIGNAL_QUALITY_SXM | 0xD0DF | - | Returns the quality of the SDARS signal | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0DF_D |
| STATUS_DRIVE | 0xD0E2 | STAT_MEDIUM_INSERTED | Gibt Informationen über das eingelegte Medium im Disk-Laufwerk zurück. Datentyp ist Integer | 0-n | - | - | unsigned char | TAB_INSERTEDMEDIUM | - | - | - | - | 22 | - | - |
| SDARS_PELLET_LESEN | 0xD0E9 | STAT_SDARS_PELLET_TEXT | Wert des Pellets | TEXT | - | High | string[100] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PROVISIONING_FORMAT | 0xD0EB | STAT_STAT_SIGNATURE | dient dazu, eine signierte Bereitstellungsdatei zu verstehen  | 0-n | - | High | unsigned char | TAB_NO_YES | - | - | - | - | 22 | - | - |
| AUDIOKANAELE | 0xD0EE | - | Audiokanal | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD0EE_D | RES_0xD0EE_D |
| STATUS_SDARS_SXM_CHANNEL | 0xD0F6 | - | Status informationen zu dem aktuell gewählten SDARS Kanal | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0F6_D |
| WLAN_PAIRABLE | 0xD1F8 | - | Pairing Modus für WLAN AP oder Wifi Direkt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD1F8_D | RES_0xD1F8_D |
| WLAN_AUSSTATTUNG | 0xD1FA | - | Präsenz der verschiedenen WLAN-Modi | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1FA_D |
| WLAN_DEVICELIST_AP | 0xD1FB | - | Geräteliste in WLAN-AP-Modus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD1FB_D | RES_0xD1FB_D |
| USB_TEST | 0xD207 | - | verbundene USB Geräte an der HU | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD207_D |
| WLAN_AP_NETWORK | 0xD20E | - | aktuelle AP Netzwerkparameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD20E_D |
| EJECT | 0xD226 | - | wirft das Medium aus dem ausgewählten Laufwerk aus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD226_D | - |
| CID_TOUCHINDICATOR | 0xD25B | - | aktivieren/ deaktivieren des Touch/Proximity Indikators | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD25B_D | - |
| PORT_CONFIG | 0xD27A | STAT_PORT_CONFIG | gibt den Wert des OABR Ports zurück | 0-n | - | High | unsigned char | TAB_PORT_SET | - | - | - | - | 22 | - | - |
| HU_VIN_PROTECTION_PARAMETER | 0xD3E2 | - | Setzen der internen Startzeit für den VIN Sicherheitsmechanismus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3E2_D | - |
| CID_TESTBILD | 0xD5C1 | - | Ansteuerung der Testbild-Ausgabe vom CID. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C1_D | - |
| CID_STEUERN | 0xD5C2 | - | Ein- und Ausschalten des CID per Diagnose. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C2_D | - |
| CID_BACKLIGHT | 0xD5C4 | - | Ansteuerung der Hintergrundbeleuchtung des CIDs per Diagnose. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C4_D | - |
| CID_STEUERN_ENDE | 0xD5C9 | - | Beendet alle Ansteuerungen im CID, die mit Diagnose  gestartet worden sind. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C9_D | - |
| CID_PHOTOSENSOR | 0xD5CB | STAT_PHOTOSENSOR_CID_WERT | Analogwert Fototransistor im CID | lx | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_TEMP_BACKLIGHT | 0xD5CC | STAT_TEMP_BACKLIGHT_WERT | Temperatur Hintergrundbeleuchtung | °C | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_SOLLWERT | 0xD5CD | STAT_HELLIGKEIT_SOLL_WERT | Soll-Helligkeitswert vom Dimm-Modul | % | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_ISTWERT | 0xD5CE | STAT_HELLIGKEIT_IST_WERT | Ist-Helligkeitswert | % | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_EINGANGSWERTE_LESEN | 0xD5CF | - | Ausgabe der aktuellen Eingangswerte des CID. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5CF_D |
| CID_DETAIL_INFORMATIONEN | 0xD5D4 | - | Logistikinformationen CID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5D4_D |
| KOMP_ID | 0xDFFE | STAT_KOMP_ID_TEXT | Kompatibilitätskennung für HDD Downloadsystem | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| EQDATA_FILENAME | 0x4008 | STAT_EQ_FILENAME_TEXT | Name des  EQ-File; Datei name als dynamischer string | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SENSOR_WERTE | 0x400A | - | Returns all filtered internal sensor values | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400A_D |
| STEUERN_TESTBILD_ERWEITERT | 0x400B | - | Starts / stops displaying of test pictures. This service extends the diagnostic service ¿STEUERN_TESTBILD¿ by providing more test pictures. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400B_D | - |
| STEUERN_RGB_SCREEN | 0x400C | - | Starts and stops displaying test pictures. In contrast to the service STEUERN_TESTBILD_CID this job allows to set the desired colour of the test pic-ture by passing the RGB values. The CID returns into ¿Video Mode¿. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400C_D | - |
| TEMPERATURPROFIL | 0x400D | - | Temperaturschalter und die entsprechenden Temperaturgrenzwerte | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x400D_D | RES_0x400D_D |
| STATUS_CID_SW_VERSION | 0x400E | - | Returns the current CID-SW version. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400E_D |
| STATUS_INTERNAL_STATES | 0x400F | - | Returns important internal state variables of the CID software bus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400F_D |
| CID_CODIERDATEN | 0x4010 | - | Overwrites / Reads CID coding data in RAM temporarily | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010_D |
| STATUS_CID_DETAIL_INFORMATION_EXTENDED | 0x4011 | - | Returns the extended logistic information of the currently connected CID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4011_D |
| BT_FIRMWARE | 0x4032 | STAT_BT_FIRMWARE_TEXT | Bluetooth Firmwareversion | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FREQUENZ | 0x4033 | - | FREQUENZ | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4033_D | RES_0x4033_D |
| RDS | 0x4034 | - | RDS | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4034_D | RES_0x4034_D |
| HD_DECODER_FIRMWARE | 0x4035 | STAT_HD_DECODER_FIRMWARE_TEXT | Gibt die verschiedenen Firmware-Versionen des HD-Moduls zurück | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WLAN_SIGNAL_TEST_AP | 0x4044 | - | Statistiken über WLAN Verbindungen im AP Modus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4044_D |
| STEUERN_PERSISTENZ | 0xF003 | - | Persistenz löschen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF003_R | - |
| BT_DELETE_ALL_PHONE_ID | 0xF007 | - | Phone ID | - | - | - | - | - | - | - | - | - | 31 | - | - |
| TUNER_SUCHLAUF | 0xF008 | - | automatische Suche im aktuellen Wellenbereich | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF008_R | - |
| WAVEBAND | 0xF009 | - | Wellenbereich | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF009_R | RES_0xF009_R |
| INTERNAL_TRACE_RESET_TRACING_FLAG | 0xF021 | - | Zurücksetzen des Tracingflags | - | - | - | - | - | - | - | - | - | 31 | - | - |
| TRACE | 0xF023 | - | activates/ deactivates the internal traces | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF023_R | RES_0xF023_R |

### STATUS_LIFECYCLE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Application Mode |
| 1 | Flash Mode |
| 2 | Coding Mode |

### TAB_ABILITY_TO_WAKE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | off |
| 1 | on |
| 2 | critical |

### TAB_AF

| WERT | TEXT |
| --- | --- |
| 0x00 | AF aus |
| 0x01 | AF ein |
| 0x02 | AF keine Änderung |
| 0xFF | Nicht definiert |

### TAB_APPLICATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Sprachverarbeitung |
| 0x01 | Navi Applikation |
| 0x02 | Navi Karte |
| 0x03 | Online Browser |
| 0x04 | AudioPlayer |
| 0x05 | Telefon Applikation |
| 0x06 | SDARS |
| 0x07 | A4A |
| 0x08 | Driver update (KISU) |
| 0x09 | DAB |
| 0x0A | Video_in |
| 0x0B | Sprachpaket Arabisch |
| 0x0C | TextToSpeech |
| 0x0D | M Laptimer |
| 0x0E | Log & Trace |
| 0x0F | CarPlay |
| 0x10 | Navi Permanent SLI Display ECE |
| 0x11 | Reinitialisation |
| 0xFF | Nicht definiert |

### TAB_APPLICATION_ACTIVATION_STATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | Deaktiviert durch Codierung |
| 0x02 | Aktiviert durch Codierung |
| 0x04 | Deaktiviert durch SWT |
| 0x05 | Deaktiviert durch Codierung und  Deaktiviert durch SWT |
| 0x06 | Aktiviert durch Codierung und Deaktiviert durch SWT |
| 0x08 | Aktiviert durch SWT |
| 0x09 | Deaktiviert durch Codierung und Aktiviert durch SWT |
| 0x0A | Aktiviert durch Codierung und Aktiviert durch SWT |
| 0x10 | Teilweise Aktiviert durch SWT |
| 0x12 | Aktiviert durch Codierung und Teilweise Aktiviert durch SWT |
| 0x20 | SWT Freischaltcode eingespielt |
| 0x22 | Aktiviert durch Codierung und SWT Freischaltcode eingespielt |
| 0xFF | Nicht definiert |

### TAB_APPLICATION_RUNNING_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Applikation nicht gestartet |
| 0x01 | Applikation gestartet |
| 0xFF | nicht definiert |

### TAB_ATC_CAPABILITY

| WERT | TEXT |
| --- | --- |
| 0x00 | keine ATC Diagnose möglich |
| 0x01 | ATC Diagnose mit 12-Spur Messung |
| 0x02 | ATC Diagnose mit Jitter Messung |
| 0xFF | ungültiger Zustand |

### TAB_AUDIOKANAL

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Kanäle |
| 0x00000001 | vorne links |
| 0x00000002 | vorne rechts |
| 0x00000020 | hinten links |
| 0x00000040 | hinten rechts |
| 0x00001000 | linker Kopfhörer links |
| 0x00002000 | linker Kopfhörer rechts |
| 0x00004000 | rechter Kopfhörer links |
| 0x00008000 | rechter Kopfhörer rechts |
| 0xFFFFFFFF | nicht definiert |

### TAB_AUDIO_SOURCE

| WERT | TEXT |
| --- | --- |
| 0x00 | Entertainment |
| 0x01 | Offset Verkehrsmeldungen |
| 0x02 | Offset Navigation |
| 0x03 | Telefon |
| 0x04 | Spracherkennung |
| 0x05 | PDC |
| 0x06 | Gong |
| 0x07 | AUX-IN |
| 0x08 | Klingelton Telefon |
| 0x09 | Absolute level IBA |
| 0x0A | Absolute level POI |
| 0x0B | Absolute level Browser |
| 0x0C | Absolute level TTS |
| 0x0D | Absolute level A4A |
| 0x0E | Absolute level A4A Mix |
| 0x0F | Absolute level Voice Notes |
| 0x10 | nur für RSE: Entertainment Kopfhörer linke Seite |
| 0x11 | Absolute level DAB Traffic Announcement |
| 0x12 | Absolute level mute_exclusive |
| 0x13 | Absolute level mute_mix |
| 0x20 | nur für RSE: Entertainment Kopfhörer rechte Seite |
| 0xFF | Nicht definiert |

### TAB_AUSGANGVIDEOSWITCH

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein VideoSwitch vorhanden bzw. verwendet |
| 0x0001 | Ausgang 1 |
| 0x0002 | Ausgang 2 |
| 0xFFFF | Nicht definiert |

### TAB_BLUETOOTH_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Bluetooth nicht aktiviert |
| 1 | Bluetooth aktiviert |
| 0xFF | nicht definiert |

### TAB_BT_DETECTION_MODE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | BT Erkennungsmodus aus |
| 0x01 | BT Erkennungsmodus ein |
| 0xFF | nicht definiert |

### TAB_CD_ENVIRONMENT_CONDITION

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | Netzwerk nicht verfügbar |
| 0x02 | Datenverbindung nicht verfügbar / konnte nicht aufgebaut werden |
| 0x03 | Fehler in HTTP Kommunikation mit Backend |
| 0x04 | Fehler in rückgemeldeten Daten vom Backend |
| 0x05 | Sprachanruf konnte nicht aufgebaut werden / wurde abgebrochen |
| 0x06 | Applikation abgestürzt |
| 0x07 | SSL Zertifikat nicht validierbar |
| 0x08 | Registrierung abgelehnt |
| 0x09 | Keine Bilder von iCAM verfügbar |
| 0x0A | iCAM meldet Fehler |
| 0x0B | SMS konnte nicht gesendet werden |
| 0x0C | SIM Reset durch Flight Mode |
| 0x0D | Ausführung des Service nicht erlaubt/abgebrochen |
| 0xFF | nicht definiert |

### TAB_CD_MOBILE_NETWORK_TECHNOLOGY

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | GSM |
| 0x02 | GSM_COMPACT |
| 0x03 | UTRAN |
| 0x04 | GSM_WITH_EGPRS |
| 0x05 | UTRAN_WITH_HSDPA |
| 0x06 | UTRAN_WITH_HSUPA |
| 0x07 | UTRAN_WITH_HSDPA_AND_HSUPA |
| 0x08 | E_UTRAN |
| 0xFF | nicht definiert |

### TAB_CIDDISPLAYREADY

| WERT | TEXT |
| --- | --- |
| 0x00 | not ready |
| 0x01 | ready |
| 0xFF | not defined |

### TAB_CID_TESTPICTURE_EXTENDED

| WERT | TEXT |
| --- | --- |
| 0x01 | Black picture |
| 0x02 | Blue picture |
| 0x03 | Red picture |
| 0x04 | Green picture |
| 0x05 | No-Signal-Screen |
| 0x06 | White L64 |
| 0x07 | Yellow |
| 0x08 | Cyan |
| 0x09 | Magenta |
| 0x0A | Grey L6 |
| 0x0B | Grey L10 |
| 0x0C | Grey L14 |
| 0x0D | Grey L18 |
| 0x0E | Grey L22 |
| 0x0F | Grey L26 |
| 0x10 | Grey L30 |
| 0x11 | Grey L35 |
| 0x12 | Grey L39 |
| 0x13 | Grey L43 |
| 0x14 | Grey L47 |
| 0x15 | Grey L51 |
| 0x16 | Grey L55 |
| 0x17 | Grey L59 |
| 0x18 | Color Bar |
| 0x19 | Horizontal Flicker Check |
| 0x1A | Vertical Flicker Check |
| 0x1B | 32 Grey Steps |
| 0x1C | 32 Grey Steps for RED |
| 0x1D | 32 Grey Steps for GREEN |
| 0x1E | 32 Grey Steps for BLUE |
| 0xFF | Not defined |

### TAB_CLEARMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | All incl. SWT |
| 0x01 | Only SWT |
| 0x02 | Only Navigation calibration |
| 0x03 | Coding backup |
| 0x04 | Only HMI |
| 0x05 | Main processor |
| 0x06 | Secondary processor |
| 0xFF | Not defined |

### TAB_COMPLETENESS

| WERT | TEXT |
| --- | --- |
| 0x00 | not complete |
| 0x01 | complete |
| 0xFF | not defined |

### TAB_CONNECTION_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Connection completed-demuted |
| 0x01 | Connection completed-stillmuted |
| 0x02 | Allocated and connected, but no Source Activity |
| 0x03 | Partly built up |
| 0x04 | Connection in memory |
| 0x05 | Connection paused |
| 0x10 | Connection implemented |
| 0xFF | Not defined |

### TAB_CS_REGSTATE

| WERT | TEXT |
| --- | --- |
| 0x10 | Nicht registriert und nicht suchend |
| 0x20 | Registriert |
| 0x30 | Nicht registriert und suchend |
| 0x40 | Registrierung abgelehnt |
| 0x50 | Registriert und Roaming |
| 0x60 | Registriert und Roaming OFF NET |
| 0x70 | Notruf bereit |
| 0xFF | nicht definiert |

### TAB_CUSTOMER_KISU

| WERT | TEXT |
| --- | --- |
| 0x01 | Fahrzeug steht nicht |
| 0x10 | Update bereits installiert |
| 0x22 | KISU Abhängigkeiten nicht erfüllt |
| 0x26 | Fahrgestellnummer stimmt nicht überein |
| 0x40 |  KISU SWIP-Signaturverifikation fehlgeschlagen |
| 0x44 | SWUP Validierung fehlgeschlagen |
| 0x72 | USB-Gerät nicht angeschlossen (only during installation) |
| 0xFF | Wert ungültig |

### TAB_EINGANGVIDEOSWITCH

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein VideoSwitch vorhanden bzw. verwendet |
| 0x0001 | Eingang 1 |
| 0x0002 | Eingang 2 |
| 0xFFFF | Nicht definiert |

### TAB_ENTSOURCE

| WERT | TEXT |
| --- | --- |
| 0x01 | FM |
| 0x02 | AM |
| 0x09 | AUX IN internal or external |
| 0xFF | not defined |

### TAB_ENTSOURCESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Desired source was not available |
| 0x01 | Desired source was available |
| 0x02 | Desired source is being searched |
| 0xFF | not defined |

### TAB_FBASEINGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Alle Eingänge |
| 0x01 | FBAS-Eingang 1 |
| 0x02 | FBAS-Eingang 2 |
| 0xFF | Wert ungültig |

### TAB_INITIALISIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | IO initialisiert |
| 0xFF | nicht definiert |

### TAB_INSERTEDMEDIUM

| WERT | TEXT |
| --- | --- |
| 0x00 | No medium inserted |
| 0x01 | Medium recognition in progress |
| 0x02 | CD medium inserted |
| 0x03 | DVD medium inserted |
| 0x04 | Flash memory medium inserted |
| 0x05 | Blu-ray medium inserted |
| 0xF0 | Medium ejected, but not removed |
| 0xF1 | Medium blocked |
| 0xFF | Not defined |

### TAB_KANAL_FEHLERART

| WERT | TEXT |
| --- | --- |
| 0x02 | Leitungsunterbrechung |
| 0xFF | Nicht definiert |

### TAB_KLANGZEICHEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Stops the active tone symbol |
| 0x01 | CCG |
| 0x02 | DG |
| 0x03 | IMG_ON |
| 0x04 | IMG_OFF |
| 0x05 | ACC |
| 0x06 | not used (was Hour Signal) |
| 0x07 | Reserved |
| 0x08 | Reverse Gear ON |
| 0x09 | Reverse Gear OFF |
| 0x0A | IBrake |
| 0x0B | IMDG ON |
| 0x0C | IMDG OFF |
| 0x0D | Reserved |
| 0x0E | Reserved |
| 0x0F | Signal invalid |
| 0x10 | ETC1 |
| 0x11 | ETC2 |
| 0x12 | ETC3 |
| 0x13 | HMI FBM |
| 0x14 | ETC4 |
| 0x15 | PMA1 |
| 0x16 | PMA2 |
| 0x17 | CTA_FL |
| 0x18 | CTA_FR |
| 0x19 | CTA_RL |
| 0x1A | CTA_RR |
| 0x1B | GEC |
| 0x1C | GEE |
| 0x1D | TFB/ TSC |
| 0xFF | not defined |

### TAB_LANGUAGE

| WERT | TEXT |
| --- | --- |
| 0x00 | codierte Sprache |
| 0x01 | Deutsch |
| 0x02 | Englisch (UK) |
| 0x03 | Englisch (US) |
| 0x04 | Spanisch |
| 0x05 | Italienisch |
| 0x06 | Französisch |
| 0x07 | Flämisch |
| 0x08 | Niederländisch |
| 0x09 | Arabisch |
| 0x0A | Chinesisch Traditionell |
| 0x0B | Chinesisch Simpel |
| 0x0C | Koreanisch |
| 0x0D | Japanisch |
| 0x0E | Russisch |
| 0x0F | Französisch (CA) |
| 0x10 | Spanisch (US) |
| 0x11 | Portugisisch |
| 0x12 | Polnisch |
| 0x13 | Griechisch |
| 0x14 | Türkisch |
| 0x15 | Ungarisch |
| 0x16 | Rumänisch |
| 0x17 | Schwedisch |
| 0x18 | Portugisisch (BR) |
| 0x19 | Kantonesisch Traditionell |
| 0x1A | Kantonesisch Simple |
| 0x1B | Slowakisch |
| 0x1C | Tschechisch |
| 0x1D | Slowenisch |
| 0x1E | Dänisch |
| 0x1F | Norwegisch |
| 0x20 | Finnisch |
| 0xFF | Signal ungültig |

### TAB_LAUFWERK

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Laufwerk |
| 0x01 | ODD |
| 0xFF | nicht definiert |

### TAB_LUEFTERSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Lüfter steht |
| 0x01 | Lüfter dreht sich, aber nicht mit der erwarteteten Drehzahl |
| 0x02 | Lüfter dreht sich mit der erwarteteten Drehzahl |
| 0xFF | nicht definiert |

### TAB_MPFA

| WERT | TEXT |
| --- | --- |
| 0x00 | Null selection - no Package |
| 0x01 | US SXM Select Audio |
| 0x02 | Canada XM Premier Audio |
| 0x03 | Canada XM Premier Audio + SXM Traffic |
| 0x04 | US SXM Select Audio + SXM Traffic |
| 0x05 | US SXM Premier Audio |
| 0x06 | US SXM Premier Audio + Travel Link |
| 0x07 | US SXM Premier Audio + SXM Traffic + Travel Link |
| 0x08 | US SXM Premier Audio + SXM Traffic |
| 0x09 | Canada XM Select Audio |
| 0x0A | Canada XM Premier Audio + Travel Link |
| 0x0B | Canada XM Premier Audio + SXM Traffic + Travel Link |
| 0x0C | Canada XM Select Audio + SXM Traffic |
| 0xFF | not activated |

### TAB_NAVI_LANGUAGE

| WERT | TEXT |
| --- | --- |
| 0x01 | Ansage 1 |
| 0x02 | Ansage 2 |
| 0x03 | Ansage 3 |
| 0xFF | Wert ungültig |

### TAB_NAVI_MAPSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kunden Navigation Karte vorhanden und aktiviert |
| 0x01 | Kunden Navigation Karte deaktiviert |
| 0x02 | Kunden Navigation Karte nicht vorhanden oder gelöscht |
| 0x03 | Kunden Navigation Karte Deaktivierung laeuft |
| 0x04 | Kunden Navigation Karte Löschen laeuft |
| 0xFF | nicht definierter Zustand |

### TAB_NO_YES

| WERT | TEXT |
| --- | --- |
| 0x00 | no |
| 0x01 | yes |
| 0xFF | not defined |

### TAB_ODD_EJECT

| WERT | TEXT |
| --- | --- |
| 0x00 | ODD standard eject |
| 0x01 | ODD emergency eject |

### TAB_ONOFF

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xFF | NICHT DEFINIERT |

### TAB_PDCSIGNAL

| WERT | TEXT |
| --- | --- |
| 0x01 | Front Tone (left & right) |
| 0x02 | Rear Tone (left & right) |
| 0x03 | off |
| 0x04 | Front left |
| 0x05 | Front right |
| 0x06 | Rear left |
| 0x07 | Rear right |
| 0xFF | not defined |

### TAB_PORT_SET

| WERT | TEXT |
| --- | --- |
| 0x00 | Master |
| 0x01 | Slave |
| 0xFF | nicht definiert/ nicht gesetzt |

### TAB_PROVISIONING_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | IDLE wurde nicht gestartet |
| 0x01 | ACTIVE laeuft noch |
| 0x02 | SUCCESS alles OK |
| 0x03 | mit Fehler beendet |
| 0xFF | Nicht definiert |

### TAB_PS_REGSTATE

| WERT | TEXT |
| --- | --- |
| 0x01 | Nicht registriert und nicht suchend |
| 0x02 | Registriert |
| 0x03 | Nicht registriert und suchend |
| 0x04 | Registrierung abgelehnt |
| 0x05 | Registriert und Roaming |
| 0x06 | Registriert und Roaming OFF NET |
| 0x07 | Notruf bereit |
| 0xFF | nicht definiert |

### TAB_RDS

| WERT | TEXT |
| --- | --- |
| 0x00 | RDS aus |
| 0x01 | RDS ein |
| 0x02 | RDS keine Änderung |
| 0xFF | Nicht definiert |

### TAB_RECOVERY_STEPS

| WERT | TEXT |
| --- | --- |
| 0x00 | Restart Process |
| 0x01 | Restart Gesamtsystem |
| 0x02 | Löschen von KISU Updates |
| 0x03 | Reset zur letzten iStufe |
| 0x04 | Löschen der Persistenz |
| 0x05 | Aktivieren des  Sub-System Mode |

### TAB_RESETDATABASES

| WERT | TEXT |
| --- | --- |
| 0x00000000 | all |
| 0x00000001 | ist of paired devices (including call lists & voice tags) |
| 0x00000002 | Emails |
| 0x00000004 | SMS |
| 0x00000008 | Music lists (that were built by USB/MTP/iPod audio players) |
| 0x00000010 | Music collection |
| 0x00000020 | Music Databases used for administration purposes |
| 0x00000040 | Profile independent contacts |
| 0x00000100 | WLAN related data |
| 0x00000200 | Navigation destinations/route |
| 0x00000400 | Voice memo |
| 0x000005FF | All without Navigation destinations/route |
| 0xFFFFFFFF | Not defined |

### TAB_RESET_REASON_DOP

| WERT | TEXT |
| --- | --- |
| 255 | keine Ursache fuer Reset bekannt |

### TAB_SDARS_FACTORY_SUCCESSFUL

| WERT | TEXT |
| --- | --- |
| 0x00 | Wiederherstellung nicht gestartet |
| 0x01 | Wiederherstellung laeuft |
| 0x02 | Wiederherstellung beendet ohne Fehler |
| 0x03 | Wiederherstellung konnte nicht beendet werden |
| 0xFF | nicht definiert |

### TAB_SEARCHING_PROCESS

| WERT | TEXT |
| --- | --- |
| 0x00 | Suche nicht gestartet |
| 0x01 | Suche laeuft |
| 0x02 | Suche beendet und bester Sender gefunden |
| 0x03 | Suche beendet und kein bester Sender gefunden |
| 0xFF | nicht definiert |

### TAB_SERVICEHISTORY

| WERT | TEXT |
| --- | --- |
| 0x00 | alles OK |
| 0x01 | nicht genügend Speicher |
| 0x02 | Daten inkonsistent |
| 0x04 | keine Schreibberechtigung |
| 0x05 | unbekannter Fehler |
| 0xFF | Wert ungültig |

### TAB_SOFTWARE_UPDATE_PROZESSKLASSE

| WERT | TEXT |
| --- | --- |
| 0x00 | ungültige SGBM-ID |
| 0x01 | Hardware |
| 0x02 | Hardwareausprägung |
| 0x03 | Hardwarefarbe |
| 0x05 | Codierdaten |
| 0x06 | Bootloader |
| 0x07 | Flashslave |
| 0x08 | Software ECU- Speicherimage |
| 0x09 | Flash File Software |
| 0x0A | Prüfsoftware |
| 0x0B | Programmiersystem |
| 0x0C | interaktive Betriebsanleitungsdaten |
| 0x0F | FA2FP |
| 0x10 | Freischaltecode Fahrzeugauftrag |
| 0x1A | temporäre Löschroutine |
| 0x1B | temporäre Programmierroutine |
| 0xA0 | Entertainmentdaten |
| 0xA1 | Navigationsdaten |
| 0xA2 | Freischaltcodefunktion |
| 0xC0 | Softwareupdatepaket |
| 0xC1 | SWUP Index Paket |
| 0xFF | Wert ungültig |

### TAB_SOFTWARE_UPDATE_PROZESSKLASSE_KURZTEXT

| WERT | TEXT |
| --- | --- |
| 0x00 | ungültige SGBBM-ID |
| 0x01 | HWEL |
| 0x02 | HWAP |
| 0x03 | HWFR |
| 0x05 | CAFD |
| 0x06 | BTLD |
| 0x07 | FLSL |
| 0x08 | SWFL |
| 0x09 | SWFF |
| 0x0A | SWPF |
| 0x0B | ONPS |
| 0x0C | IBAD |
| 0x0F | FAFP |
| 0x10 | FCFA |
| 0x1A | TLRT |
| 0x1B | TPRG |
| 0xA0 | ENTD |
| 0xA1 | NAVD |
| 0xA2 | FCFN |
| 0xC0 | SWUP |
| 0xC1 | SWIP |
| 0xFF | Wert ungültig |

### TAB_STANDARD_KISU

| WERT | TEXT |
| --- | --- |
| 0x02 | Update Abbruch |
| 0x03 | MOST Kommunikationsfehler |
| 0x50 | OTA Update unterbrochen |
| 0x51 | Keine Verbindung für Over-The-Air Update |
| 0x60 | Deinstallationsinformationen nicht verfügbar |
| 0xFF | unspezifizierter Fehler |

### TAB_STATUSCIDSCHEDULEID

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDCOM_SCHEDULE_READ_FLASH |
| 0x01 | CIDCOM_SCHEDULE_SYNC |
| 0x02 | CIDCOM_SCHEDULE_CHECK_COM |
| 0x03 | CIDCOM_SCHEDULE_READ_SENSORS |
| 0x04 | CIDCOM_SCHEDULE_ON |

### TAB_STATUSTRACEACTIVATION

| WERT | TEXT |
| --- | --- |
| 0x00 | deactivated |
| 0x01 | activated |
| 0x02 | Traces available and ready to delete |
| 0xFF | not defined |

### TAB_STATUS_USBHUB

| WERT | TEXT |
| --- | --- |
| 0x00 | kein USB HUB codiert |
| 0x01 | USB HUB codiert |
| 0xFF | nicht definiert |

### TAB_STATUSCIDCOMSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDCOM_OK |
| 0x01 | CIDCOM_CRC_ERROR |
| 0x02 | CIDCOM_NO_SYNC |
| 0x03 | CIDCOM_NO_COM |
| 0xFF | not defined |

### TAB_STATUSCIDFADESTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDDIM_FADE_DISPLAY_OFF |
| 0x01 | CIDDIM_FADE_DISPLAY_T0 |
| 0x02 | CIDDIM_FADE_DISPLAY_T1 |
| 0x03 | CIDDIM_FADE_DISPLAY_ON |
| 0x04 | CIDDIM_FADE_DISPLAY_T2 |
| 0xFF | not defined |

### TAB_STATUSCIDFLASHDATACHANGE

| WERT | TEXT |
| --- | --- |
| 0x00 | not changed |
| 0x01 | changed |
| 0xFF | not defined |

### TAB_STATUSCIDFLASHSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDGDC_FLASH_IDLE |
| 0x01 | CIDGDC_FLASH_BUSY |
| 0x02 | CIDGDC_FLASH_READY |
| 0x03 | CIDGDC_FLASH_CRC_OK |
| 0x04 | CIDGDC_FLASH_CRC_NOK |
| 0xFF | not defined |

### TAB_STATUSCIDINITSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDMAIN_SYNC_INITSTATE |
| 0x01 | CIDMAIN_UNLOCK_INITSTATE |
| 0x02 | CIDMAIN_READ_BASICFLASHDATA_INITSTATE |
| 0x03 | CIDMAIN_READ_ALLFLASHDATA_INITSTATE |
| 0x04 | CIDMAIN_WAIT_FOR_TIMING_INITSTATE |
| 0xFF | not defined |

### TAB_STATUSCIDMAINSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDMAIN_STARTUP_STATE |
| 0x01 | CIDMAIN_CID_OFF_STATE |
| 0x02 | CIDMAIN_CID_ON_STATE |
| 0x03 | CIDMAIN_FLASHDATA_ERROR_STATE |
| 0x04 | CIDMAIN_COMM_FAIL_STATE |
| 0x05 | CIDMAIN_DIAGFLASH_STATE |
| 0xFF | not defined |

### TAB_STATUSCIDOPERATIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDMAIN_VIDEO_OPSTATE |
| 0x01 | CIDMAIN_TESTPIC_OPSTATE |
| 0x02 | CIDMAIN_BLACK_PANEL_OPSTATE |
| 0x03 | CIDMAIN_DISPLAY_ON_OPSTATE |
| 0x04 | CIDMAIN_DISPLAY_OFF_OPSTATE |
| 0xFF | not defined |

### TAB_STATUSCIDPOWERMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Off |
| 0x01 | Standby |
| 0x02 | On |
| 0xFF | Invalid |

### TAB_TESTBILD_CID

| WERT | TEXT |
| --- | --- |
| 0x00 | Normales Bild |
| 0x01 | Schwarzes Bild |
| 0x02 | Blaues Bild |
| 0x03 | Rotes Bild |
| 0x04 | Grünes Bild |
| 0x05 | No Signal Bild |
| 0xFF | Nicht definiert |

### TAB_TESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test laeuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0xFF | Nicht definiert |

### TAB_TP

| WERT | TEXT |
| --- | --- |
| 0x00 | TP aus |
| 0x01 | TP ein |
| 0x02 | TP keine Änderung |
| 0xFF | Nicht definiert |

### TAB_TRACEACTIVATION

| WERT | TEXT |
| --- | --- |
| 0x00 | deactivate |
| 0x01 | activate |
| 0x02 | deactivate and delete |
| 0x03 | delete |
| 0xFF | Not defined |

### TAB_USBTEST_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Gerät verbunden |
| 0x01 | Gerät angeschlossen, Erkennung im Gange |
| 0x02 | erkanntes Gerät ist ein Massenspeicher |
| 0x03 | erkanntes Gerät ist ein HUB |
| 0xFE | Gerät erkannt, aber weder Massenspeicher noch HUB |
| 0xFF | nicht definiert |

### TAB_USB_CONNECTION_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | A4A nicht aktiv |
| 0x01 | A4A aktiv |
| 0xFF | nicht definiert |

### TAB_USB_DEVICE_COUNT

| WERT | TEXT |
| --- | --- |
| 0x01 | MSD (USB Stick) |
| 0x02 | IAP (iPod / iPhone) |
| 0x03 | MTP (other Music Player/ Smartphone) |
| 0x04 | UNKNOWN |
| 0xFF | not defined |

### TAB_USB_INTERFACE

| WERT | TEXT |
| --- | --- |
| 0x00 | USB Interface vorne |
| 0x01 | Snap In Adapter vorne |
| 0x02 | USB Interface hinten |
| 0x03 | Snap In Adapter hinten |
| 0xFF | nicht definiert |

### TAB_VERBAUROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | all routines |
| 0x00000001 | Connection Headunit to diversity |
| 0x00000004 | Connection Headunit to DAB L-Band antenna socket |
| 0x00000008 | Connection Headunit to DAB Band III antenna socket |
| 0x00000010 | Connection Headunit to GPS antenna socket |
| 0x00000020 | Connection Headunit to Aux-In Box |
| 0x00000040 | Loudspeaker connections (Stereo system) |
| 0x00000080 | Connection CID to ZIN |
| 0x00000100 | RAD ON connection |
| 0x00000200 | Connection Headunit to Microphone 1 |
| 0x00000400 | Connection Headunit to Microphone 2 |
| 0x00000800 | Connection HU to CID |
| 0x00001000 | Connection RSE to CID RSE left |
| 0x00002000 | Connection RSE to CID RSE right |
| 0x00004000 | Connection Ethernet Headunit to GW |
| 0x00010000 | Connection Headunit to USB consumer interface |
| 0x00040000 | Connection Headunit to SDARS antenna socket |
| 0x00080000 | Connection Headunit to Bluetooth antenna |
| 0x00400000 | Connection Headunit to WLAN antenna socket |
| 0x01000000 | RSE Connection to the I/O push-button left |
| 0x02000000 | RSE Connection to the I/O push-button right |
| 0x04000000 | Connection Headunit to USB consumer interface 2 (USB2) |
| 0x08000000 | Connection Headunit to ITS (Intelligent Transport System) |
| 0xFFFFFFFF | not defined |

### TAB_VIDEOEINGANGFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | No video- or sync-signal present |
| 0x01 | Signal out of range |
| 0x02 | Connection couldn¿t be established |
| 0xFF | Not defined |

### TAB_VIDEOSOURCE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | all sources |
| 0x00000004 | RFK |
| 0xFFFFFFFF | not defined |

### TAB_VIN_PROTECTION

| WERT | TEXT |
| --- | --- |
| 0x00 | HU VIN Schutz nicht aktiviert |
| 0x01 | HU VIN Schutzaktivierung im Gange |
| 0x02 | HU VIN Schutz aktiviert |
| 0x03 | HU VIN Schutzaktivierung fehlgeschlagen |
| 0xFF | Wert ungültig |

### TAB_WAKEUPREASON

| WERT | TEXT |
| --- | --- |
| 0x01 | CAN |
| 0x02 | MOST |
| 0x03 | IPC |
| 0x04 | INTERN |
| 0x05 | RESET/SWITCH TO POWER |
| 0x06 | SG-specific |
| 0xFF | not defined |

### TAB_WAVEBAND

| WERT | TEXT |
| --- | --- |
| 0x01 | FM |
| 0x02 | MW/AM |
| 0x03 | LW |
| 0x04 | KW |
| 0x05 | WB |
| 0x06 | TRF |
| 0xFF | Wert ungültig |

### TAB_WLAN_ENCRYPTION

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Verschlüsselung |
| 0x01 | WEP |
| 0x02 | WPA |
| 0x03 | WPA2 |
| 0xFF | nicht definiert |

### TAB_WLAN_PAIRABLE

| WERT | TEXT |
| --- | --- |
| 0x00 | AP_MODE |
| 0x01 | WIFI_DIRECT_MODE |
| 0x02 | beide |
| 0xFF | nicht definiert |

### TAB_WLAN_RESET

| WERT | TEXT |
| --- | --- |
| 0x00 | alle |
| 0x01 | Client_Network_List |
| 0x02 | AP_Client_List |
| 0x04 | Wifi_Direct_Client_List |
| 0x08 | AP_Network |
| 0xFF | Wert ungültig |

### TAB_WLAN_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | MAC_STATION |
| 0x01 | MAC_WIFI_DIRECT |
| 0x02 | MAC_AP |

### TAB_ZIN_DIAGNOSTIC_FLAG

| WERT | TEXT |
| --- | --- |
| 0x0A | Kein ZIN Fehler und kein Kommunikationsfehler |
| 0x0B | ZIN Kommunikationsfehler |
| 0x1A | ZIN interner Fehler, Selbsttest vom ZIN fehlgeschlagen |
| 0x2A | tbd |
| 0x4A | tbd |
| 0x8A | tbd |
| 0xFF | ungültig |

### TAB_ZIN_VARIANT

| WERT | TEXT |
| --- | --- |
| 0x00 | kein ZIN |
| 0x01 | 6,5  ZIN |
| 0x02 | 8,8  ZIN |
| 0x03 | Radio ZIN |

### TAB_STATEFMPHASANTENNA

| WERT | TEXT |
| --- | --- |
| 0x00 | offene Leitung (Verbindung Radio - Antennenverstärker.) |
| 0x01 | Antenne fehlt (Verbindung Antennenverstärker - Antenne) |
| 0x02 | Antenne Ok mit passiver FM Antenne |
| 0x03 | Antenne Ok mit aktiver FM Antenne |
| 0x04 | Kurzschluss nach Masse (Verbindung HU - Antennenverstärker) |
| 0xFF | nicht definiert |

### TASU_REQUEST_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | 31010F0B10223F09 |
| 0x01 | 31010F0B1022100B |
| 0x02 | 31010F0B10223F04 |
| 0x04 | 31010F0B1022F190 |

### TASU_STEUERN_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Auftraege an den TAS nicht blockiert (Default bei Fehlen des Arguments) |
| 0x01 | Auftraege an den TAS temporaer bis zum naechsten Aufstart blockiert |
| 0x02 | Auftraege an den TAS persistent ueber den Aufstart hinaus blockiert |
| 0xFF | Wert ungültig |

### TAKTIVEANTENNEDAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Antenne |
| 0x01 | L-Band Antenne |
| 0x02 | Band III Antenne |
| 0x03 | Beide Antennen |
| 0xFF | Nicht definiert |

### TAUDIOSYSTEM

| WERT | TEXT |
| --- | --- |
| 0x00 | STEREO |
| 0x01 | HIFI |
| 0x02 | TOP-HIFI |
| 0x03 | M INDIVIDUAL SOUND |
| 0x04 | HK-SURROUND |
| 0x05 | HIGH PREMIUM |
| 0x06 | HIFI-SYSTEM HARMAN KARDON |
| 0xFF | Nicht definiert |

### TCIDONOFFACTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Off |
| 0x01 | On |
| 0xFF | not defined |

### TFOLLOWINGDABDAB

| WERT | TEXT |
| --- | --- |
| 0x00 | DAB DAB Following aus |
| 0x01 | DAB DAB Following ein |
| 0x02 | DAB DAB Following keine Änderung |
| 0xFF | Nicht definiert |

### TFOLLOWINGDABFM

| WERT | TEXT |
| --- | --- |
| 0x00 | DAB FM Following aus |
| 0x01 | DAB FM Following ein |
| 0x02 | DAB FM Following keine Änderung |
| 0xFF | Nicht definiert |

### THERSTELLUNGFEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Physikalischer Fehler |
| 0xFF | Nicht definiert |

### THERSTELLUNGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anfrage gestellt |
| 0x01 | Herstellung läuft |
| 0x02 | Herstellung beendet ohne Fehler |
| 0x03 | Herstellung beendet mit Fehler |
| 0x04 | Herstellung unterbrochen durch User-Interaktion |
| 0xFF | Nicht definiert |

### TNAVIMAPACTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Deaktiviere Kunden Navigation Karte |
| 0x01 | Lösche Kunden Navigation Karte |

### TNAVISIMULATIONMODEACTIVATIONACTION

| WERT | TEXT |
| --- | --- |
| 0 | Deaktiviere Navigations Simulation |
| 1 | Aktiviere Navigations Simulation |
| 255 | nicht definiert |

### TNAVISIMULATIONMODEACTIVATIONSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | Navigations Simulation deaktiviert |
| 1 | Navigations Simulation aktiviert |
| 255 | nicht definiert |

### TPROCESSSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | Prozess nicht gestartet |
| 1 | Prozess läuft |
| 2 | Prozess beendet ohne Fehler |
| 3 | Prozess beendet mit Fehler |
| 255 | nicht definiert |

### TRADONLEAD

| WERT | TEXT |
| --- | --- |
| 0x00 | aus |
| 0x01 | ein |
| 0xFF | Nicht definiert |

### TSTAT_REMOVE_CUSTOMER_UPDATES

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |

### TSDARSCHANNELTUNESUCCESS

| WERT | TEXT |
| --- | --- |
| 0 | Kanaleinstellung erfolgreich |
| 1 | Kanal nicht aboniert |
| 2 | Kanal ungueltig |
| 3 | Kanaleinstellung läuft |
| 255 | nicht definiert |

### TSDARSSIGNALQUALITY

| WERT | TEXT |
| --- | --- |
| 0 | kein Signal |
| 1 | schwaches Signal |
| 2 | gutes Signal |
| 3 | exzellentes Signal |
| 255 | nicht definiert |

### TSDARSSIGNALQUALITYGLOBALSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | Mute |
| 1 | Audio |
| 255 | nicht definiert |

### TSIGNALDAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Signal |
| 0x01 | gueltiges Signal |
| 0xFF | Nicht definiert |

### TSTATUSDISPLAYACTIVATIONMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | CID aus |
| 0x01 | CID an |
| 0xFF | nicht definiert |

### TTUNERSUCHLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | seek direction down |
| 0x01 | seek direction up |
| 0xFF | Not defined |

### TTPDAB

| WERT | TEXT |
| --- | --- |
| 0 | TP DAB aus |
| 1 | TP DAB ein |
| 2 | TP DAB keine Änderung |
| 255 | Nicht definiert |

### TUNER_HW_COMMUNICATION_FAILURE_REASON

| WERT | TEXT |
| --- | --- |
| 0x01 | No communication to the tuner module possible |
| 0x02 | wrong firmware version |

### TVIDEOSENKE

| WERT | TEXT |
| --- | --- |
| 0x0000 | Alle Bildschirme |
| 0x0001 | Bildschirm Headunit |
| 0x0002 | Linker oder einziger Bildschirm RearSeatEntertainment |
| 0x0004 | Rechter  Bildschirm RearSeatEntertainment |
| 0xFFFF | Nicht definiert |
| 0x0008 | MMI4 (IPCE) |
| 0x0010 | MMI5 (HU Out) |
| 0x0020 | MMI6 (reserved) |

### T_ZIN_TESTPICTURE

| WERT | TEXT |
| --- | --- |
| 0x00 | Stop displaying test picture and return to normal Mode |
| 0x01 | Black picture |
| 0x02 | Blue picture |
| 0x03 | Red picture |
| 0x04 | Green picture |
| 0x05 | test picture extended 1 |
| 0x06 | test picture extended 2 |
| 0x07 | test picture extended 3 |
| 0x08 | test picture extended 4 |
| 0x09 | test picture extended 5 |
| 0x0A | test picture extended 6 |
| 0x0B | test picture extended 7 |
| 0x0C | test picture extended 8 |
| 0x0D | test picture extended 9 |
| 0x0E | test picture extended 10 |
| 0x0F | test picture extended 11 |
| 0x10 | test picture extended 12 |
| 0x11 | test picture extended 13 |
| 0x12 | test picture extended 14 |
| 0x13 | test picture extended 15 |
| 0x14 | test picture extended 16 |
| 0x15 | test picture extended 17 |
| 0x16 | test picture extended 18 |
| 0x17 | test picture extended 19 |
| 0x18 | test picture extended 20 |

### TAB_0X1708

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 |

### TAB_0X1752

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 | 0x0031 | 0x0032 | 0x0033 | 0x0034 | 0x0035 | 0x0036 | 0x0037 | 0x0038 |

### TAB_0X1753

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0041 |

### TAB_0X1754

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0042 | 0x0043 | 0x0044 | 0x0045 | 0x0046 | 0x0047 | 0x0048 | 0x0049 |

### TAB_0X1755

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0039 | 0x003A | 0x003B | 0x003C | 0x003D | 0x003E | 0x003F | 0x0040 |

### TAB_0X175A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 |

### TAB_0X175B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 |

### TAB_0X17F5

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0027 | 0x0028 |

### UNEXPECTED_LINK_UP_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0 | für unbelegte Ports kein Link-up festgestellt bzw. Link auf Port zulässig |
| 1 | Link-up auf eigentlich unbelegtem Port festgestellt |

### VIDEO_SINK

| WERT | TEXT |
| --- | --- |
| 0x00 | none |
| 0x01 | MMI1 (HU MMI) |
| 0x02 | MMI2 (RSE MMI) |
| 0x03 | MMI3 (RSE MMI2 - right screen) |
| 0x04 | MMI4 (IPCE) |
| 0x05 | MMI5 (reserved) |

### VIDEO_SOURCE

| WERT | TEXT |
| --- | --- |
| 0x01 | SVC |
| 0x02 | TVC |
| 0x03 | RVC |
| 0x04 | NVC |
| 0x05 | MMC |
| 0x06 | Entertainment Server |
| 0x07 | TV |
| 0x08 | HU (iinternal video playback from CD, DVD, HDD, USB, MOST |
| 0x09 | AUX1 (auxilary video input port) |
| 0x0A | reserved (Y/C AUX1 composite video input, e.g. BMW M components or external navigation) |
| 0x0B | reserved (RGB orYUV AUX1 component video input, e.g. BMW M components or external navigation) |
| 0x0C | RSE (internal video playback from CD, DVD, HDD, USB, MOST) |
| 0x0D | AUX2 (auxilary video port - integrated RSE) |
| 0x0E | AUX3 (auxilary video port - integrated RSE - right screen) |
| 0x0F | AUX4 (auxiliary video input port) |
| 0x10 | reserved (Y/C AUX4 composite video input, e.g. BMW M components or Y/C TV sources) |
| 0x11 | reserved (RGB or YUV AUX4 component video input, e.g. BMW M components) |
| 0x12 | KAFAS |
| 0x13 | CD_DVD |
| 0x14 | HDD |
| 0x15 | IBA |
| 0x16 | USB |
| 0x17 | Browser |
| 0x18 | WLAN |
| 0x19 | BT |
| 0x1A | DMB |
| 0x20 | CD_DVD_RSE |
| 0x21 | IBA_RSE |
| 0x22 | USB_RSE |

### YAW_VELOCITY_VEHICLE

| WERT | TEXT |
| --- | --- |
| 0x00 | Giergeschwindigkeit roh: nicht plausibel |
| 0x01 | Giergeschwindigkeit roh: nicht vorhanden |
| 0x02 | Giergeschwindigkeit: nicht plausibel |
| 0x03 | Giergeschwindigkeit: nicht vorhanden |

### TATCVERSION

| WERT | TEXT |
| --- | --- |
| 0x00 | no ATC diagnosis possible |
| 0x01 | ATC diagnosis with track 12 measurement |
| 0x02 | ATC diagnosis with jitter measurement |
| 0xFF | Nicht definiert |

### DEVUDS_HWNAME

| WERT | NAME | HU |
| --- | --- | --- |
| 0x00000000 | unknown | unknown |
| 00000DF5 | NBT High ECE (B069) | NBT |
| 00000DF6 | NBT Full ECE (B067) (DAB) | NBT |
| 00000DF7 | NBT Full US (B073) | NBT |
| 00000DF8 | NBT Full Japan (B069) | NBT |
| 00000DF9 | NBT Basic ECE (only C1 sample!) | NBT |
| 00001018 | NBT High China/Asia (B116, HW=B069) | NBT |
| 00001019 | NBT High China local content (B107, HW=B069) | NBT |
| 0000101A | NBT Full Korea (B108, HW=B067) | NBT |
| 0000101B | NBT Full US Alpine (B???, HW=B073) | NBT |
| 00001294 | NBT Basic1 ECE (B113) | NBT |
| 00001295 | NBT Basic2 ECE (B068) | NBT |
| 00001296 | NBT Basic US Harman (B114) | NBT |
| 00001297 | NBT Basic Alpine (B115) | NBT |
| 00001A44 | NBT Basic2 ECE OL (B123, no drive) | NBT |
| 00001A45 | NBT Basic2 ECE DAB OL (B124, no drive) | NBT |
| 000018C2 | NBT Basic2 ECE DAB OL (B124, no drive) | NBT |
| 000018C3 | NBT Basic US OL (B125, no drive) | NBT |
| 00001A41 | NBT Basic2 China/Asia (B126, HW=B123) | NBT |
| 00001A43 | NBT Basic2 Korea (B127, HW=B124) | NBT |
| 00001A42 | NBT Basic2 Japan (B128) | NBT |
| 000022E3 | NBTevo ECE HIGH Rueko | NBTevo |
| 000022E4 | NBTevo ECE FULL Rueko | NBTevo |
| 000022E5 | NBTevo US FULL Rueko | NBTevo |
| 000022E6 | NBTevo ECE HIGH ASIA Alpine Rueko | NBTevo |
| 000022E7 | NBTevo ECE FULL KOREA Alpine Rueko | NBTevo |
| 000022E8 | NBTevo JAPAN Rueko | NBTevo |
| 000026B9 | NBTevo ECE HIGH 21 ID5 | NBTevo |
| 00002479 | NBTevo ECE FULL ID5 | NBTevo |
| 000026BB | NBTevo ECE FULL KOREA Alpine ID5 | NBTevo |
| 0000247B | NBTevo JAPAN ID5 | NBTevo |
| 00001EF3 | NBTevo ASIA 20 35up (no MOST, GPS, Video) | NBTevo |
| 00002C14 | NBTevo ECE 20 35up (no MOST, GPS, Video) | NBTevo |
| 000026BA | NBTevo ECE HIGH ASIA FULL Alpine 35up | NBTevo |
| 0000247A | NBTevo US FULL 35up | NBTevo |
| 00002FC2 | NBTevo ECE 10 ID5 Rueko (no GPS) | NBTevo |
| 00002FC3 | NBTevo ECE 11 ID5 Rueko  | NBTevo |
| 00002FC4 | NBTevo US 10 ID5 Rueko (no GPS) | NBTevo |
| 00002FC5 | NBTevo ASIA 10 ID5 Rueko (no GPS) | NBTevo |
| 00002AB8 | NBTevo ECE FULL KOREA OL ID5 Rueko | NBTevo |
| 00002AB9 | NBTevo JAPAN OL ID5 Rueko | NBTevo |
| 00003A09 | NBTevo ECE High OL ID5 Rueko | NBTevo |
| 00003A0A | NBTevo ECE Full OL ID5 Rueko | NBTevo |
| 00003A0B | NBTevo US OL ID5 Rueko | NBTevo |
| 00003A0C | NBTevo AsIA OL ID5 Rueko | NBTevo |
| 000031DC | NBTevo ECE HIGH OL ID4 Rueko | NBTevo |
| 000031DD | NBTevo ECE FULL OL ID4 Rueko | NBTevo |
| 000031DE | NBTevo US OL ID4 Rueko | NBTevo |
| 000031DF | NBTevo ASIA OL ID4 Rueko | NBTevo |
| 000031E0 | NBTevo ECE FULL KOREA OL ID4 Rueko | NBTevo |
| 000031E1 | NBTevo JAPAN OL ID4 Rueko | NBTevo |
| 00000E66 | NBT RSE BMW (B075) | NBT |
| 00000F5E | NBT RSE Rolls Royce (B109) | NBT |
| 00001EF7 | NBTevo RSE BMW (Bxxx) | RSEevo |
| 00001EFB | NBTevo RSE Rolls Royce (Bxxx) | RSEevo |
| 00001703 | ENTRYNAV_ECE 01FF04 (SKU23,DAB,CD,MOST,3USB,BT30,WLAN,2MIC,2CVBS ) | ENAV |
| 00001704 | ENTRYNAV_ECE 011F05 (SKU23,3USB,BT30,WLAN,2MIC,2CVBS) | ENAV |
| 00001705 | ENTRYNAV_ECE 010406 (SKU24,1USB,BT21,1MIC) | ENAV |
| 00001706 | ENTRYNAV_US 115F07 (SKU23,MOST,3USB,BT30,WLAN,2MIC,2CVBS,SDARS) | ENAV |
| 00001707 | ENTRYMEDIA_ECE 00FF08 (SKU25,DAB,CD,MOST,3USB,BT30,WLAN,2MIC,2CVBS ) | ENAV |
| 00001708 | ENTRYMEDIA_ECE 000409 (SKU5,1USB,BT21,1MIC) | ENAV |
| 00001709 | ENTRYMEDIA_US 10C510 (SKU5,CD,MOST,1USB,BT21,1MIC,1CVBS,SDARS) | ENAV |
| 000019F8 | ENTRYMEDIA_US 10DF12 (SKU25,CD,MOST,3USB,BT30,WLAN,2MIC,2CVBS,SDARS) | ENAV |
| 000019FB | ENTRYMEDIA_CHN LC 20DF27 (B137)(SKU25,CD,MOST,3USB,BT30,WLAN,2MIC,2CVBS) | ENAV |
| 000019FC | ENTRYNAV_CHN LC 21DF29 (B139)(SKU23,CD,MOST,3USB,BT30,WLAN,2MIC,2CVBS) | ENAV |
| 000019F7 | ENTRYMEDIA_ECE 00DF11 (SUK25,CD,MOST,3USB,WLAN,2MICIN,2CVBS) | ENAV |
| 000019F9 | ENTRYNAV_ECE 01E513 (SUK24,DAB,CD,MOST,USB,CVBS) | ENAV |
| 00002747 | ENTRYMED_ECE 008416 (SUK5,CD,USB,BT21) | ENAV |
| 00002748 | ENTRYMED_ECE 00C517 (SUK5,CD,MOST,USB,CVBS) | ENAV |
| 0000274D | ENTRYNAV_ECE 01C522 (SUK24,CD,MOST,USB,CVBS) | ENAV |
| 000019FA | ENTRYNAV_ECE 01DF14 (SKU23,CD,MOST,3USB,2CVBS,WLAN,2MICIN) | ENAV |
| 0000274C | ENTRYNAV_ECE 013F21 (SKU23,DAB,3USB,WLAN,2MICN,2CVBS) | ENAV |
| 0000274E | ENTRYNAV_ECE 01C423 (SKU24,CD,MOST,USB) | ENAV |
| 00002750 | ENTRYNAV_US 11DF25 (SKU23,SDARS,CD,MOST,3USB,WLAN,2MICIN,2CVBS) | ENAV |
| 0000274F | ENTRYNAV_US 110524 (SKU23,SDARS,USB,CVBS) | ENAV |
| 00002753 | ENTRYNAV_CHN LC 21D434 (B234)(SKU23,CD,MOST,3USB) | ENAV |
| 00002754 | ENTRYNAV_CHN LC 211432 (B235)(SKU23,MOST,3USB) | ENAV |
| 00002746 | ENTRYMED_ECE 006515 (SKU5,DAB,MOST,USB,CVBS) | ENAV |
| 00002749 | ENTRYMED_ECE 004518 (SKU5,MOST,USB,CVBS) | ENAV |
| 00002751 | ENTRYMED_ECE 008030 (SKU5,CD,USB) | ENAV |
| 0000274B | ENTRYMED_US 108520 (SKU5,CD,USB,CVBS) | ENAV |
| 0000274A | ENTRYMED_US 100519 (SKU5,USB,CVBS) | ENAV |
| 00002755 | ENTRYMED_CHN LC 20D433 (B232)(SKU25,CD,MOST,3USB) | ENAV |
| 00002752 | ENTRYMED_CHN LC 201431 (B233)(SKU25,3USB) | ENAV |
| 0000277C | EntryEvo Nav ECE Full (CD,DAB,GPS,Most,USB1,USB2,BT,WLAN,2xMicIn,Video,OABR,Ethernet) | EntryEvo |
| 0000277D | EntryEvo Nav US Full  (CD,SDARS,IBOC,GPS,Most,USB1,USB2,BT,WLAN,2xMicIn,Video,OABR,Ethernet) | EntryEvo |
| 00002F4F | EntryEvo Media ECE Full (USB1,BT,Video,OABR,Ethernet) | EntryEvo |
| 00002F50 | EntryEvo Media US Full  (SDARS,IBOC,USB1,BT,Video,OABR) | EntryEvo |
| 000036C8 | EntryEvoMed ECE 0380  (USB1,BT,Video,OABR) | EntryEvo |
| 000036C9 | EntryEvoMed ECE 03F9  (DAB MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 000036CA | EntryEvoMed ECE 03FB  (DAB MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1 CD) | EntryEvo |
| 000036CB | EntryEvoNav ECE 0782  (CD CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000036CC | EntryEvoNav ECE 07FF  (DAB CD NAV_GPS MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000036CD | EntryEvoMed US  1382  (SDARS,IBOC,USB1,BT,Video,OABR,CD) | EntryEvo |
| 000036CE | EntryEvoMed US  13F8   (SDARS IBOC MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 000036CF | EntryEvoMed US  13FA   (US SDARS IBOC CD MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 00003A05 | EntryEvoMed US  17FA  (SDARS,IBOC,USB2,HW_NAV,MOST,WLAN,2MICIN,BT,Video,OABR) | EntryEvo |
| 00003A06 | EntryEvoMed US  17FC  (SDARS,IBOC,USB2,HW_NAV,MOST,WLAN,2MICIN,BT,Video,OABR) | EntryEvo |
| 000040D5 | EntryEvoMed ECE 0302  (CD ETH OABR1 BT USB1) | EntryEvo |
| 000040EA | EntryEvoMed ECE 03F0  (USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 000040E9 | EntryEvoMed ECE 0372  (USB2 WLAN 2MICIN ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 000040E8 | EntryEvoMed ECE 038B  (DAB CD MOST CVBS1 ETH OABR1 BT USB1) | EntryEvo |
| 000040E7 | EntryEvoMed ECE 0200  (OABR1 BT USB1) | EntryEvo |
| 000040E6 | EntryEvoMed ECE 0100  (ETH BT USB1) | EntryEvo |
| 000040E5 | EntryEvoMed ECE 0102  (CD ETH BT USB1) | EntryEvo |
| 000040E4 | EntryEvoNav ECE 07F4  (NAV_GPS USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040E3 | EntryEvoNav ECE 0776  (CD NAV_GPS USB2 WLAN 2MICIN ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040E2 | EntryEvoNav ECE 07FD  (DAB NAV_GPS MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040E1 | EntryEvoMed US  1200   (SDARS IBOC OABR1 BT USB1) | EntryEvo |
| 000040E0 | EntryEvoNav US  17FC  (SDARS IBOC CD MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040DF | EntryEvoNav US  17FA  (US SDARS IBOC NAV_GPS MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040DE | EntryEvoMed CHI 2382  (CHI CD CVBS1 ETH OABR1 BT USB1) | EntryEvo |
| 000040DD | EntryEvoMed CHI 23F8  (CHI MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 000040DC | EntryEvoMed CHI 23FA  (CHI CD MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 000040DB | EntryEvoMed CHI 2200  (CHI OABR1 BT USB1) | EntryEvo |
| 000040DA | EntryEvoMed CHI 2300  (CHI ETH OABR1 BT USB1) | EntryEvo |
| 000040D9 | EntryEvoNav CHI 2780  (CHI CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040D8 | EntryEvoNav CHI 2782  (CHI CD CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040D7 | EntryEvoNav CHI 27F8  (CHI MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040D6 | EntryEvoNav CHI 27FA  (CHI CD MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 00005D0F | EntryEvoMed ECE 03D0  (USB2 2MICIN CVBS1 ETH OABR1 BT USB1) | EntryEvo |
| 00005D10 | EntryEvoMed ECE 03DA  (CD  MOST USB2 2MICIN CVBS1 ETH OABR1 BT USB1) | EntryEvo |
| 00005D11 | EntryEvoMed ECE 03F1  (DAB USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 00005D12 | EntryEvoNav ECE 0788  (MOST CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 00005D14 | EntryEvoNav ECE 05F4  (NAV_GPS USB2 WLAN 2MICIN CVBS1 ETH HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 00005D16 | EntryEvoNav ECE 0672  (CD USB2 WLAN 2MICIN OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 00005D18 | EntryEvoNav ECE 07F8  (MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 00005D1A | EntryEvoNav ECE 07DA  (CD  MOST USB2 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 00005D1C | EntryEvoNav ECE 07F5  (DAB NAV_GPS USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 00005D1E | EntryEvoNav ECE 07DB  (DAB CD MOST USB2 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 00005D27 | EntryEvoMed US  13F0  (SDARS IBOC USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 00005D20 | EntryEvoMed CHI 2250  (USB2 2MICIN OABR1 BT USB1) | EntryEvo |
| 00005D21 | EntryEvoMed CHI 23D0  (USB2 2MICIN CVBS1 ETH OABR1 BT USB1) | EntryEvo |
| 00005D22 | EntryEvoMed CHI 23F0  (USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 00005D23 | EntryEvoNav CHI 27F0  (USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 00005D25 | EntryEvoNav CHI 2632  (CD USB2 WLAN OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 00003E5F | MGU High Full 1 DIN B264__01B7 (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, GPS, USB2, USB3, OABR 5Port, CVBS) | MGU |
| 000049F1 | MGU High FUll 1.5 DIN B298__0597 (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, GPS, USB2, USB3, OABR 5Port, CVBS, DVD) | MGU |
| 00002F2A | LU MGU High 1 DIN B297__0043 (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, OABR 4Port) | MGU |
| 00004F87 | LU MGU High 1.5 DIN B299__0441 (CPU high, 6GB RAM, 32GB eMMC, HDD, OABR 4Port, DVD) | MGU |
| 000054F0 | LU MGU High 1.5 DIN B299__0451 05  (CPU high, 6GB RAM, 32GB eMMC, HDD, USB2, OABR 4Port, DVD) | MGU |
| 000054F1 | LU MGU High 1.5 DIN B309__0451 06  (CPU high, 6GB RAM, 32GB eMMC, HDD, USB2, OABR 4Port, DVD) | MGU |
| 000054F2 | LU MGU High 1.5 DIN B318__2493 07  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, OABR 5Port, DVD) | MGU |
| 000054F3 | LU MGU High 1.5 DIN B308__1493 08  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, OABR 5Port, DVD) | MGU |
| 000054F4 | LU MGU High 1.5 DIN B319__35B3 09  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3, OABR 5Port, CVBS) | MGU |
| 000054F5 | LU MGU High 1.0 DIN B307__31B3 10  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3, OABR 5Port, CVBS) | MGU |
| 000054F6 | LU MGU High 1.0 DIN B317__21B3 11  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3, OABR 5Port, CVBS) | MGU |
| 000054F7 | LU MGU High 1.0 DIN B297__11B3 12  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3, OABR 5Port, CVBS) | MGU |
| 000054F8 | LU MGU High 1.0 DIN B324__01B7 15  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3, OABR 5Port, CVBS) | MGU |
| 000059AB | LU MGU Mid  1.5 DIN B301__0256 20  (CPU high, 6GB RAM, 32GB eMMC, HDD, USB2) | MGU |
| 000058B6 | LU MGU MID  1.0 DIN B300__0076 21  (CPU high, 6GB RAM, 32GB eMMC, HDD, USB2) | MGU |
| 000058B7 | LU MGU BASE 1.0 DIN B302__0052 26  (CPU high, 6GB RAM, 32GB eMMC, HDD, USB2) | MGU |
| 000059AC | LU MGU Base 1.5 DIN B303__0252 25  (CPU high, 6GB RAM, 32GB eMMC, HDD, OABR 4Port, DVD) | MGU |
| 00005F29 | LU MGU High 1.5 DIN  B298__0597  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, OABR 5Port, DVD, GPS, CVBS) | MGU |
| 00005F2A | LU MGU High 1.5 DIN  B309__0453  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, OABR 4Port, DVD) | MGU |
| 00005F2B | LU MGU High 1.5 DIN  B299__0453  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, OABR 4Port, DVD) | MGU |
| 00005F2C | LU MGU High 1.5 DIN  B308__1593  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, OABR 5Port, DVD, CVBS) | MGU |
| 00005F2D | LU MGU High 1.5 DIN  B310__1453  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, OABR 4Port, DVD) | MGU |
| 00005F2E | LU MGU High 1.5 DIN  B319__35B3  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3,  OABR 5Port, DVD, CVBS) | MGU |
| 00005F2F | LU MGU High 1.5 DIN  B318__2493  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, OABR 5Port, DVD) | MGU |
| 00005F30 | LU MGU High 1.0 DIN  B264__01B7  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3,  OABR 5Port, GPS, CVBS) | MGU |
| 00005F31 | LU MGU High 1.0 DIN  B312__0073  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3,  OABR 4Port) | MGU |
| 00005F32 | LU MGU High 1.0 DIN  B314__0073  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3,  OABR 4Port) | MGU |
| 00005F33 | LU MGU High 1.0 DIN  B297__11B3  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3,  OABR 5Port, CVBS) | MGU |
| 00005F34 | LU MGU High 1.0 DIN  B316__1073  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3,  OABR 4Port) | MGU |
| 00003F35 | LU MGU High 1.0 DIN  B307__31B3  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3,  OABR 5Port, CVBS) | MGU |
| 00005F36 | LU MGU High 1.0 DIN  B317__20B3  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3,  OABR 5Port) | MGU |
| 00003E68 | RSE MGU B326__0017 (CPU high, 8GB RAM, 32GB eMMC, BlueRay, Kleer, MHL, Videotelefoni) | RSE_MGU |
| 0xFFFFFFFF | unknown | unknown |

### DEVUDS_HWVERSION_NBT

| WERT | NAME |
| --- | --- |
| 001.004.004 | 12-07 NBT C2 HW Harman HW4  |
| 002.004.004 | 12-07 NBT C2 HW Alpine HW4  |
| 001.005.005 | 12-07 NBT D1 HW Harman HW5  |
| 002.005.005 | 12-07 NBT D1 HW Alpine HW5  |
| 001.006.006 | 12-07 NBT D2 HW Harman HW6  |
| 002.006.006 | 12-07 NBT D2 HW Alpine HW6  |
| 001.007.007 | 12-07 NBT D3 HW Harman HW7  |
| 002.007.007 | 12-07 NBT D3 HW Alpine HW7  |
| 001.008.008 | 13-03 NBT D3 HW Harman HW8  |
| 002.008.008 | 13-03 NBT D3 HW Alpine HW8  |
| 001.020.020 | 13-07 C1 NBT HW Harman HW20 |
| 002.020.020 | 13-07 C1 NBT HW Alpine HW20 |
| 001.021.021 | 13-07 D NBT HW Harman HW21 |
| 002.021.021 | 13-07 D NBT HW Alpine HW21 |
| 001.022.022 | 13-09 D NBT HW Harman HW22 |
| 002.022.022 | 13-09 D NBT HW Alpine HW22 |
| 001.031.031 | 14-09 D NBT HW Harman HW31 |
| 002.031.031 | 14-09 D NBT HW Alpine HW31 |
| 0xFFFFFFFF | unknown NBT HW |

### DEVUDS_HWVERSION_NBTEVO

| WERT | NAME |
| --- | --- |
| 001.001.001 | 14-11 B1 NBTevo HW Harman HW1.1 (FPGA) |
| 002.001.001 | 14-11 B1 NBTevo HW Alpine HW1.1 (FPGA) |
| 001.001.002 | 14-11 B3 NBTevo HW Harman HW1.2 (FPGA) |
| 002.001.002 | 14-11 B3 NBTevo HW Alpine HW1.2 (FPGA) |
| 001.001.003 | 14-11 B4 NBTevo HW Harman HW1.3 (FPGA) |
| 002.001.003 | 14-11 B4 NBTevo HW Alpine HW1.3 (FPGA) |
| 001.001.004 | 14-11 C1 NBTevo HW Harman HW1.4 (FPGA) |
| 002.001.004 | 14-11 C1 NBTevo HW Alpine HW1.4 (FPGA) |
| 001.001.005 | 14-11 D1 NBTevo HW Harman HW1.5 (FPGA) |
| 002.001.005 | 14-11 D1 NBTevo HW Alpine HW1.5 (FPGA) |
| 001.001.006 | 14-11 D1 NBTevo HW Harman HW1.6 (FPGA) |
| 002.001.006 | 14-11 D1 NBTevo HW Alpine HW1.6 (FPGA) |
| 001.002.001 | 15-07 D1 NBTevo HW Harman HW2.1 (ASIC) |
| 002.002.001 | 15-07 D1 NBTevo HW Alpine HW2.1 (ASIC) |
| 001.002.002 | 15-07 D1 NBTevo HW Harman HW2.2 (ASIC) |
| 002.002.002 | 15-07 D1 NBTevo HW Alpine HW2.2 (ASIC) |
| 001.002.003 | 15-07 D1 NBTevo HW Harman HW2.3 (ASIC) |
| 002.002.003 | 15-07 D1 NBTevo HW Alpine HW2.3 (ASIC) |
| 001.003.001 | 16-07 D1 NBTevo HW Harman HW3.1 (ASIC) |
| 002.003.001 | 16-07 D1 NBTevo HW Alpine HW3.1 (ASIC) |
| 0xFFFFFFFF | unknown NBTevo HW |

### DEVUDS_HWVERSION_RSEEVO

| WERT | NAME |
| --- | --- |
| 001.001.001 | 15-07 B1 RSEevo HW Harman HW1.1  |
| 001.001.002 | 15-07 B3 RSEevo HW Harman HW1.2  |
| 001.001.003 | 15-07 C1 RSEevo HW Harman HW1.3  |
| 001.001.004 | 15-07 D1 RSEevo HW Harman HW1.4  |
| 001.001.005 | 15-07 D1 RSEevo HW Harman HW1.5  |
| 001.001.006 | 15-07 D1 RSEevo HW Harman HW1.6  |
| 001.002.001 | 16-07 D1 RSEevo HW Harman HW2.1  |
| 0xFFFFFFFF | unknown NBTevo HW |

### DEVUDS_HWVERSION_ENAV

| WERT | NAME |
| --- | --- |
| 001.001.002 | 13-07 C1 ENAV HW Harman HW1.2  |
| 004.001.002 | 13-07 C1 ENAV HW Magneti HW1.2  |
| 001.001.003 | 13-07 C2.1/2 ENAV HW Harman HW1.3  |
| 004.001.003 | 13-07 C2.1/2 ENAV HW Magneti HW1.3  |
| 001.001.004 | 13-07 C3 ENAV HW Harman HW1.4  |
| 004.001.004 | 13-07 C3 ENAV HW Magneti HW1.4  |
| 001.001.005 | 13-07 D1 ENAV HW Harman HW1.5  |
| 004.001.005 | 13-07 D1 ENAV HW Magneti HW1.5  |
| 001.001.006 | 13-07 D2 ENAV HW Harman HW1.6  |
| 004.001.006 | 13-07 D2 ENAV HW Magneti HW1.6  |
| 001.001.007 | 13-07 D3 ENAV HW Harman HW1.7 (SOP HW) |
| 004.001.007 | 13-07 D3 ENAV HW Magneti HW1.7 (SOP HW) |
| 001.002.001 | 15-03 D4 ENAV HW Harman HW2.1 (SOP HW) |
| 004.002.001 | 15-03 D4 ENAV HW Magneti HW2.1 (SOP HW) |
| 001.003.001 | 15-11 D5.1 ENAV HW Harman (SOP HW) |
| 004.003.001 | 15-11 D5.1 ENAV HW Magneti (SOP HW) |
| 001.003.002 | 15-11 D5.2 ENAV HW Harman (SOP HW) |
| 004.003.002 | 15-11 D5.2 ENAV HW Magneti (SOP HW) |
| 001.003.003 | 15-11 D5.3 ENAV HW Harman (SOP HW) |
| 004.003.003 | 15-11 D5.3 ENAV HW Magneti (SOP HW) |
| 0xFFFFFFFF | unknown ENAV HW |

### DEVUDS_HWVERSION_ENTRYEVO

| WERT | NAME |
| --- | --- |
| 002.001.001 | 16-11 B1 EntryEvo HW Alpine HW1.1 |
| 002.001.002 | 16-11 B2 EntryEvo HW Alpine HW1.2 |
| 002.001.003 | 16-11 C1 EntryEvo HW Alpine HW1.3 |
| 002.001.004 | 16-11 D1 EntryEvo HW Alpine HW1.4 |
| 004.001.004 | 16-11 D1 EntryEvo HW Magneti HW1.4 |
| 0xFFFFFFFF | unknown ENAVevo HW |

### DEVUDS_HWVERSION_MGU

| WERT | NAME |
| --- | --- |
| 001.001.001 | 18-07 B1 MGU HW Harman HW1.1 |
| 001.001.002 | 18-07 B2 MGU HW Harman HW1.2 |
| 001.001.003 | 18-07 C1 MGU HW Harman HW1.3 |
| 002.001.003 | 18-07 C1 MGU HW Harman HW2.1 |
| 001.001.004 | 18-07 D1 MGU HW Harman HW1.4 |
| 0xFFFFFFFF | unknown MGU HW |

### DEVUDS_HWVERSION_RSE_MGU

| WERT | NAME |
| --- | --- |
| 001.001.001 | 18-11 B1 RSE MGU HW Harman HW1.1 |
| 001.001.002 | 18-11 B2 RSE MGU HW Harman HW1.2 |
| 001.001.004 | 18-07 C2 RSE MGU HW Harman HW1.4 |
| 0xFFFFFFFF | unknown RSE MGU HW |
