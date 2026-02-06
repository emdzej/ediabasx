# HU_MGU.prg

## General

|  |  |
| --- | --- |
| File | HU_MGU.prg |
| Type | PRG |
| Jobs | 79 |
| Tables | 353 |
| Origin | BMW EI-60 Viertel |
| Revision | 6.002 |
| Author | MAGNA-TELEMOTIVE-GMBH EE-624 Fruhstorfer |
| ECU Comment | neue SGBD für 19-03-490 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Head Unit - Media Graphics Unit |  |  |
| ORIGIN | string | BMW EI-60 Viertel |  |  |
| REVISION | string | 6.002 |  |  |
| AUTHOR | string | MAGNA-TELEMOTIVE-GMBH EE-624 Fruhstorfer |  |  |
| COMMENT | string | neue SGBD für 19-03-490 |  |  |
| PACKAGE | string | 1.990 |  |  |
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

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events $02 eventWindowTime - infinite (LH Diagnosemaster V11 oder höher, Umsetzung nach LH V6 - V10 wird jedoch toleriert)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### ECU_UID_LESEN

Auslesen der ECU-UID UDS   : $22   ReadDataByIdentifier UDS   : $8000 Sub-Parameter ECU-UID

_No arguments._

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

_No arguments._

### _HU_SWT_GET_STATUS

Freischaltstatus einer Software lesen KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $F6 SWTGetStatus

_No arguments._

### STATUS_IP_CONFIGURATION

Reads out the actual ipconfig of the Ethernet interface of the HeadUnit.

_No arguments._

### STATUS_ETH_SIGNAL_QUALITY

Returns the signal quality of all external ports of the ECU UDS   : $22 ReadDataByIdentifier $1801 ETH_SIGNAL_QUALITY

_No arguments._

### STATUS_PIA_PORTIERUNGSMASTER

returns the state of PIA porting master

_No arguments._

### STATUS_SOFTWARENAME

Reads out the flashed Buildname

_No arguments._

### STATUS_LESESTATISTIK_HDD

Reads out some or all SMART attributes

_No arguments._

### STATUS_EMMC_REGISTER_EXT_CSD

Returns the eMMC register extended device specific data which contain information about the device capabilities and selected modes. Introduced in standard v4.0

_No arguments._

### STATUS_EMMC_ERASE_COUNT

Returns the erase count (request CMD56 0x07) of the eMMC

_No arguments._

### STATUS_EMMC_BADBLOCK_COUNT

Returns the erase count (request CMD56 0x00) of the eMMC

_No arguments._

### STATUS_MAIN_AV_CONNECTIONS

UDS:     $22   ReadDataByIdentifier $4054 status AV main connections

_No arguments._

### STATUS_AV_CONNECTIONS

UDS:     $22   ReadDataByIdentifier $4055 status AV connections

_No arguments._

### STATUS_AUDIO_SOURCES

UDS:     $22   ReadDataByIdentifier $4056 STATUS_AUDIO_SOURCES

_No arguments._

### STATUS_CDC_CURRENT_JOBS

_No description._

_No arguments._

### STATUS_MMI_STATISTIK

Lesen der MMI Statistik gzip Datei

_No arguments._

### LESEN_TELEFONNUMMERN

Auslesen der in HeadUnit gespeicherten Telefonnummern für - Bereitschaftsdienst - Heimathändler - Passo - Hotline

_No arguments._

### STATUS_ATC_VERSION

Reads out the capability of the ATC diagnosis

_No arguments._

### STATUS_RAW_HDD_STATISTIK

S.M.A.R.T Raw HDD Statistik

_No arguments._

### STATUS_HWVARIANTE_NAME

Variante

_No arguments._

### STATUS_USB_DEVICE_TREE

Returns information about all USB devices connected to the ECU UDS:	$22   ReadDataByIdentifier UDS:	$D25E STATUS_UDS_DEVICE_TREE

_No arguments._

### STATUS_CODIERUNG

returns the value of some dealer organization relevant coding flags from coding data working storage

_No arguments._

### PERSONALISATION_ACCOUNT_IDS

This diagnosis job returns the personalisation account IDs

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
| ARG_DIM_FADE_EXPO_T1 | unsigned char | Value dim fade expo T1 |
| ARG_DIM_FADE_EXPO_T2 | unsigned char | Value dim fade expo T2 |
| ARG_DIM_FILT_CHANGE_SENSITIVITY | unsigned int | Value dim filt change sensitivity |
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

### PERSONALISATION_RENAME_ACCOUNT

This service renames the currently active personalization account

| Name | Type | Description |
| --- | --- | --- |
| ARG_PERSONALISATION_ACCOUNT_NAME | string | Debug Token |

### STEUERN_PIA_04_CHANGE_PROFILE

this service is used to set the PIA porting master

| Name | Type | Description |
| --- | --- | --- |
| ARG_PIA_PROFILE | unsigned char | Nummer des zu aktivierenden Profils => 0 = Profil von Benutzer 1, 1 = Profil von Benutzer 2, 2 = Profil von Benutzer 3, 10 (dezimal) = Gastprofil, 15 (dezimal) = Ungültiges Profil |
| ARG_PIA_PROFILE_MODE | unsigned char | Profilwechsel => Mode der Aktivierung => 1 = temporär, 2 = permanent |

### STEUERN_PIA_09_RESET_ALL

this service is used to set the PIA porting master

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

### STEUERN_START_RSU_PROCESS

Startet / stoppt den RSU Standard Ablauf oder den Offline RSU Ablauf von einem USB-Stick UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $10 7F START_RSU_PROCESS Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| MODE | unsigned char | The mode the RSU process shall be started with 0x00 = Start standart RSU process 0x01 = Start RSU process from USB |
| NAME_LENGTH | unsigned char | The length of the MainifestFile name |
| MANIFEST_NAME | string | The name of the manifest file 255 byte - fill with 0x00 after name length |

### STATUS_CERTIFICATE_MANAGEMENT_READOUT_STATUS

This job reads out the status of the certificate management extensive check

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

Schreiben der PIA-Daten

| Name | Type | Description |
| --- | --- | --- |
| ARG_PATH | string | absolute and complete path to file that shall be written |
| ARG_TYPE | unsigned char | Welche Daten geschrieben werden sollen 0x01 DPAS, 0x03 OTA |

### STATUS_APIX_PRBS_CHECK

The result value will be provided by APIX-Driver and contains PRBS counter value from CID

_No arguments._

### STATUS_PIA_CURRENT_PROFILE

Lesen des aktullen PIA-Profiles

_No arguments._

### STEUERN_PIA_CURRENT_PROFILE

Schreiben der PIA-Daten

| Name | Type | Description |
| --- | --- | --- |
| ARG_PATH | string | absolute and complete path to file that shall be written |

### STEUERN_INTEL_DEBUG_TOKEN

Intel Debug Token

| Name | Type | Description |
| --- | --- | --- |
| ARG_INTEL_DEBUG_TOKEN | string | Debug Token |
| ARG_TRIGGER_KEYSTORE_REINT | unsigned char | 01 = Nein oder 00 = Ja, FF = Ungueltig |
| ARG_IMAGE_TYPE | unsigned char | 00 = Appl, 01 = Bootloder 02 = RSU.. |

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

### STEUERN_PROVISIONING_DATA_DELETE

Delete provisioning data

_No arguments._

### STEUERN_DETAILS_SOURCES_SINKS

This diagnosis job returns detailed information about sources and sinks

| Name | Type | Description |
| --- | --- | --- |
| ARG_SINK_SOURCE | char | Defines if source or sink is desired 0x00 Source, 0x01 Sink |
| ARG_ID | unsigned int | Desired ID according to audio system configuration |

### STEUERN_SOMEIP_TELEGRAM

This service writes the desired SOMEIP Config via a JSON file

| Name | Type | Description |
| --- | --- | --- |
| ARG_SOMEIP_TELEGRAM | binary | The parameter ARG_SOMEIP_TELEGRAM has n times the following structure 1 Byte SERVICE ID 1 Byte IS_INSTANCE_ID 1 Byte PORT 1 Byte IS_RELIABLE, 0x00 = False, 0x01 = True 1 Byte ENABLE_MAGIC_COOKIES, 0x00 = False, 0x01 = True |

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
| 0x44 | ECURSU | ECURsuSession |
| 0x4F | ECUDEVELOP | ECUDevelopmentSession |
| 0x5F | ECUGDM | ECUGarageDiagnoseMode |
| 0x61 | ECUSUPSPEC | ECUSupplierSpecificSession |
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
| 0x3B30 | Elektrische Wasserpumpe 22 | 1 |
| 0x3B40 | Elektrische Wasserpumpe 23 | 1 |
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
| 0x4610 | Nackenwärmer Fahrer | 1 |
| 0x4620 | Nackenwärmer Beifahrer | 1 |
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
| 0x6700 | Hochdruck- Temperatursensor 1 | 1 |
| 0x6710 | Niederdruck- Temperatursensor 1 | 1 |
| 0x6720 | Elektrisches Expansionsventil | 1 |
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
| 0x5B50 | AR (augmented reality) Kamera | 1 |
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
| 0x5E4D | Innenbeleuchtung Kartentasche Fahrertür hinten 2 | 1 |
| 0x5E4E | Innenbeleuchtung Kartentasche Beifahrertür hinten 2 | 1 |
| 0x5E4F | Innenbeleuchtung Dekor hinterleuchtet I-Tafel Beifahrer oben | 1 |
| 0x5E50 | Innenbeleuchtung Dekor hinterleuchtet I-Tafel Beifahrer unten | 1 |
| 0x5E51 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne oben | 1 |
| 0x5E52 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne unten | 1 |
| 0x5E53 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten oben | 1 |
| 0x5E54 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten unten | 1 |
| 0x5E55 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne oben | 1 |
| 0x5E56 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne unten | 1 |
| 0x5E57 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten oben | 1 |
| 0x5E58 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten unten | 1 |
| 0x5E59 | Innenbeleuchtung Hochtöner Fahrertür vorne | 1 |
| 0x5E5A | Innenbeleuchtung Hochtöner Beifahrertür vorne | 1 |
| 0x5E5B | Innenbeleuchtung Mitteltöner Fahrertür vorne | 1 |
| 0x5E5C | Innenbeleuchtung Mitteltöner Beifahrertür vorne | 1 |
| 0x5E5D | Innenbeleuchtung Mitteltöner Fahrertür hinten | 1 |
| 0x5E5E | Innenbeleuchtung Mitteltöner Beifahrertür hinten | 1 |
| 0x5E5F | Innenbeleuchtung Centerspeaker | 1 |
| 0x5E60 | Innenbeleuchtung Fireplace Mittelkonsole vorne | 1 |
| 0x5E61 | Innenbeleuchtung Fireplace Mittelkonsole hinten | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5E90 | Stromverteiler vorne | 1 |
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
| 0x7A40 | Elektrische Getriebeoelpumpe | 1 |
| 0x7B00 | ISC - Inertial Sensor Cluster | 1 |
| 0x7C00 | elektrischer Durchlaufheizer Hochvoltspeicher | 1 |
| 0x7D01 | Ultraschallsensor vorne Seite links | 1 |
| 0x7D02 | Ultraschallsensor vorne Aussen links | 1 |
| 0x7D03 | Ultraschallsensor vorne Mitte links | 1 |
| 0x7D04 | Ultraschallsensor vorne Mitte rechts | 1 |
| 0x7D05 | Ultraschallsensor vorne Aussen rechts | 1 |
| 0x7D06 | Ultraschallsensor vorne Seite rechts | 1 |
| 0x7D07 | Ultraschallsensor hinten Seite rechts | 1 |
| 0x7D08 | Ultraschallsensor hinten Aussen rechts | 1 |
| 0x7D09 | Ultraschallsensor hinten Mitte rechts | 1 |
| 0x7D0A | Ultraschallsensor hinten Mitte links | 1 |
| 0x7D0B | Ultraschallsensor hinten Aussen links | 1 |
| 0x7D0C | Ultraschallsensor hinten Seite links | 1 |
| 0xF000 | Motorrad Tachometer | 1 |
| 0xF010 | Motorrad Drehzahlmesser | 1 |
| 0xF020 | Motorrad Leistungsanzeige | 1 |
| 0xF030 | Motorrad Tankanzeige | 1 |
| 0xF040 | Motorrad 5Wege-Kombischalter links | 1 |
| 0xF050 | Motorrad Kombischalter rechts | 1 |
| 0xF060 | Motorrad Favoritentasterblock | 1 |
| 0xF070 | Motorrad Scheinwerfer | 1 |
| 0xF080 | Motorrad Radiobedienteil | 1 |
| 0xF090 | Motorrad Kombischalter links | 1 |
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
| 0x002D | PSA Peugeot Citroen |
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
| 0x00D0 | Dometic |
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
| 0x013A | ISSI Integrated Silicon Solution Inc |
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

### ARG_0X1023_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTIVATION | + | - | 0-n | high | unsigned char | - | EXTERNAL_HSFZ_ACTIVATION_TAB | - | - | - | - | - | Aktiviert bzw. deaktiviert den externen HSFZ. |

### ARG_0X102F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MESSEMODUS | + | - | 0-n | high | unsigned char | - | PWF_MESSEMODUS | - | - | - | - | - | Das Argument gibt an in welchen Fahrzeugzustand  geschaltet werden soll. |

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

### ARG_0X400B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TESTBILD | 0-n | high | unsigned char | - | TAB_CID_TESTPICTURE_EXTENDED | - | - | - | - | - | Selection of extended test picture ID. The following Test picture IDs are not possible with Indigo2: 0x18 Color Bar 0x19 Horizontal Flicker Check 0x1A Vertical Flicker Check 0x1B 32 Grey Steps 0x1C 32 Grey Steps for RED 0x1D 32 Grey Steps for GREEN 0x1E 32 Grey Steps for BLUE |

### ARG_0X400C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RGB_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Video mode 0x00: Stop displaying test picture and return to video mode 0x01: Display requested test picture in corresponding RGB color |
| ARG_RGB_VALUE | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Desired RGB color in data format 0x00RRGGBB (RR=Red, GG=Green, BB=Blue) Range: [0x00000000-0x00FFFFFF] |

### ARG_0X400D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TEMP_COUNTERS01 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 01 of the CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS02 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 02 of the CID. Range: [0x00 - 0x64] 0- 100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS03 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 03 of the CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS04 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 04 of the CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF invalid value |

### ARG_0X407C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TIME_SPAN | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeitspanne der aktiven Verbindung in ms |

### ARG_0X4105_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CDC_TRIGGER_CAMPAIGN_REQUEST_CFG | HEX | high | unsigned char | - | - | - | - | - | - | - | Triggert einen campaign request an das Backend. |

### ARG_0X4106_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CDC_CLEAR_EVENTBUFFER_CFG | HEX | high | unsigned char | - | - | - | - | - | - | - | CDC event buffers der HeadUnit der gelöscht werden soll. |

### ARG_0XA01C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_QUELLE | + | - | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | - | - | legt die Videoquelle fest |
| ARG_SENKEN | + | - | 0-n | - | unsigned char | - | TAB_VIDEOSINK | - | - | - | - | - | stellt eine Videoverbindung zwischen einer Quelle und mehreren Senken her |
| ARG_TIMEOUT | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer, für die die Verbindung hergestellt wird |

### ARG_0XA01D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_QUELLE | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Wertet das Signal von einer oder mehreren Quellen aus |

### ARG_0XA01E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VERBAU_ROUTINE | + | - | HEX | high | unsigned long | - | - | - | - | - | - | - | siehe Beschreibung auf englisch |

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
| ARG_LEVEL | + | - | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Einstellen der Lautstärke oder der Offset des Audiosignals, das mit ARG_AUDIO_SIGNAL definiert ist. |
| ARG_AUDIO_SIGNAL | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | gibt an, welche Lautstärke verstellt oder ausgelesen werden soll |

### ARG_0XA037_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TRACK | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | wählt die CD/DVD-Tracknummer die abgespielt werden soll |

### ARG_0XA039_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_AUDIO_SIGNAL | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | gibt an, welche Lautstärke ausgelesen werden soll Default: 0 |

### ARG_0XA03C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DURATION | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer in Sekunden, für die der Lüfter bei angefragter Drehzahl rotiert |
| ARG_RPM | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Umdrehungen pro Minute (ARG_RPM X 100 = RPM) |

### ARG_0XA048_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT | + | - | 0-n | - | unsigned char | - | TAB_BLUETOOTH_STATUS | - | - | - | - | - | setzt den Bluetooth Status |

### ARG_0XA049_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT_ERKENNUNGSMODUS | + | - | 0-n | - | unsigned char | - | TAB_BT_DISCOVERY_MODE_STATUS | - | - | - | - | - | steuert den Bluetooth Erkennungsmodus |

### ARG_0XA04A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ENTRY_NR | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Nummer des Telefoneintrages |

### ARG_0XA07C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SAFEMODE_HDD | + | - | 0-n | - | unsigned char | - | TAB_HDD_ACTIVATION_MODE | - | - | - | - | - | steuert  den HDD safe mode |

### ARG_0XA09B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TOUCH_COMMAND_NUMBER | + | - | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | TOUCH_COMMAND_NUMMER |

### ARG_0XA09C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TOUCH_COMMAND_ID | + | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Parameter ID von STATUS_ TOUCH_COMMAND_ID |

### ARG_0XA09D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TOUCH_COMMAND_ID | + | - | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Parameter ID von STATUS_ TOUCH_COMMAND_ID |

### ARG_0XA09E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TOUCH_COMMAND_ID | + | - | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Parameter ID von STATUS_ TOUCH_COMMAND_ID |

### ARG_0XA09F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_TYPE | + | - | 0-n | high | unsigned char | - | TAB_WLAN_TYPE | - | - | - | - | - | Typ der MAC Addresse |

### ARG_0XA0B4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VISIBLE_CONTEXT | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | HMI ID des Menüs |
| ARG_FOCUS_INDEX | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des auswaehlbaren Element der HMI in der angezeigten Tafel |
| ARG_LIST_INDEX | + | - | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des zu fokussierden Elements in einer Liste (falls zutreffend). |
| ARG_EXECUTE_FUNCTION | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schaltet die Execute-Funktion; das fokussierte Element wird ausgeführt (0x01 bedeutet: die ZBE gedrückt wird). |

### ARG_0XA0CA_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DURATION | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer in Sekunden, für die der Lüfter bei angefragter Drehzahl rotiert |

### ARG_0XA0DF_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_PRBS_MODE | + | - | 0-n | high | unsigned char | - | TAB_PRBS_MODE | - | - | - | - | - | PRBS Zeitmodus |
| ARG_TIME_VALUE | + | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Im Falle eines flexiblen Zeitwert übergibt dieser Parameter den Zeitwert. Bereich: [0x00000000; 0xFFFFFFFF] Sekunden |

### ARG_0XA0EB_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DELETE_WLAN_DEVICE_MAC_ADDRESS | + | - | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | - | - | WLAN Gerät welches gelöscht werden soll |

### ARG_0XA0EC_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DELETE_BT_DEVICE_ADDRESS | + | - | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | - | - | BT Geräte, welches gelöscht werden soll |

### ARG_0XA0ED_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT_DEVICE_ENTRY_NUMBER | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eintrag in der BT Geräteliste in der HMI |

### ARG_0XA0F5_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_DEVICE_ENTRY_NUMBER | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eintrag des WLAN Gerätes in der HMI |

### ARG_0XA0F9_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_MUTE_SINK | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Mute für die jeweilige Senke |

### ARG_0XA0FD_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEBUG_TOKEN | + | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Debug Token, um den Debug Mode zu aktivieren. |

### ARG_0XA0FE_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQUENCY | + | - | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 20.0 | 20000.0 | Frequenz des Sinus Signals in Hz Wertebereich 20 - 20k |
| LEVEL | + | - | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | -96.0 | 127.0 | Pegel |
| AUDIOCHANNEL | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Audiokanal der angesteuert werden soll. |

### ARG_0XA144_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SXM_PREACTIVATION_MODE_STATE | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0b1: MPFA aktiviert; SXM_MPFA muss ebenfalls verarbeitet werden. 0b0: MPFA wird nicht aktiviert bzw. Aktivierung wird beendet. SXM_MPFA muss nicht beachtet werden. |
| SXM_MPFA | + | - | 0-n | high | unsigned char | - | TAB_MPFA | - | - | - | - | - | Beinhaltet Kanal-Paket |

### ARG_0XA15F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COMPONENT | + | - | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | Komponente |
| SCENE | + | - | TEXT | high | string[36] | - | - | 1.0 | 1.0 | 0.0 | - | - | Szene |
| STATE | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Status |

### ARG_0XD0A3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_ACTIVATION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | Aktivierungswert |

### ARG_0XD0A5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_LABEL_PIN | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Label PIN der in die HU geschrieben werden soll |

### ARG_0XD1DE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_INTERNAL_TRACE | 0-n | high | unsigned char | - | TAB_INTERNALTRACE | - | - | - | - | - | Schaltet das interne Tracing an, aus oder löscht die intern gespeicherten Traces |
| ARG_IP_ADDRESS | TEXT | high | string[15] | - | - | 1.0 | 1.0 | 0.0 | - | - | IP V4 IP Adresse [dec; getrennt durch '.'] der Verbindung, die in der Form 'aaa.bbb.ccc.ddd' vom internen Tracer getract werden soll. |
| ARG_IP_PORT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Port der IP Verbindung, die intern getract werden soll |
| ARG_TRACE_LEVEL | 0-n | high | unsigned char | - | TAB_TRACE_LEVEL | - | - | - | - | - | Log Level des Tracings nach AutoSAR spezifikation. |

### ARG_0XD1F8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_PAIRABLE | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | welcher Modus pairbar eingestellt wurde |

### ARG_0XD226_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_EJECT | 0-n | - | unsigned char | - | TAB_ODD_EJECT | - | - | - | - | - | gibt an, welcher Eject ausgeführt werden soll |

### ARG_0XD25B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TOUCHINDICATOR | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | um Touch/Proximity Indikator zu aktivieren/ deaktivieren |

### ARG_0XD3DE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT_SSP_DEBUG | 0-n | high | unsigned char | - | TAB_BT_DEBUG_MODE | - | - | - | - | - | activate / deactivate the BT SSP debug mode |

### ARG_0XD3E2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TIME | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Interne Startzeit für den VIN Sicherheitsmechanismus  |

### ARG_0XD5C1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TESTBILD | 0-n | - | unsigned char | - | TAB_TESTBILD_CID | - | - | - | - | - | Ausgabe des Testbild unabhängig von Signalen der HU |

### ARG_0XD5C2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | Ein- und Ausschalten des Display per Diagnose mit Hintergrundbeleuchtung |

### ARG_0XD5C4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_VALUE | % | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Angabe des PWM-Wert, mit welchem die Hintergrundbeleuchtung angesteuert werden soll: 0% = dunkel, 100% = hell |

### ARG_0XD5C9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_STOP | 0/1 | - | unsigned char | - | - | - | - | - | - | - | is ein dummy Argument und es ist immer 1 1 = Stopp Diagnoseansteuerungen |

### ARG_0XE2CA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SXM_TEL_NO | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | SXM-Telefonnummer (max. 35-stellig) |

### ARG_0XE334_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_PERSONALISATION_ACCOUNT_ID | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | - | - | Account ID die der Anwender aktivieren möchte. |

### ARG_0XE39E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CARPLAY_ACTIVATION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | Carplay Aktivierung: 0x00: OFF 0x01: ON 0xFF: NOT DEFINED  |

### ARG_0XF004_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ACTION | + | - | 0-n | - | unsigned char | - | TAB_NAVI_MAPACTION | - | - | - | - | - | Löschen oder Deaktivieren der Kunden Navigation Karte |

### ARG_0XF020_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SENSOR | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Nummer des Temperatur Sensors (1-5). |
| ARG_TEMP | + | - | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | simulierte Temperatur in °C |
| ARG_DURATION | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulationsdauer in Sekunden |

### ARG_0XF032_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_QUELLE | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Quellem ID von der main av Verbindung |
| ARG_SENKE | + | - | 0-n | high | unsigned int | - | TAB_SENKE | - | - | - | - | - | ID der Senke.Nur Only 1024d/0x0400 (MediaSink_Front), 1280d/0x0500 (MediaSink_RSE_L) und 1281d/0x0501 (MediaSink_RSE_R) sind gültig.  |

### ARG_TYPE

| WERT | TEXT |
| --- | --- |
| 0x01 | Current PIA Profile |

### BF_AUDIOSINKS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MUTE_BIT_0 | 0-n | high | unsigned char | 0x01 | STAT_MUTE_BIT_0 | - | - | - | Hauptquelle |
| STAT_MUTE_BIT_1 | 0-n | high | unsigned char | 0x02 | STAT_MUTE_BIT_1 | - | - | - | LHZ vorne links |
| STAT_MUTE_BIT_2 | 0-n | high | unsigned char | 0x04 | STAT_MUTE_BIT_2 | - | - | - | LHZ vorne rechts |
| STAT_MUTE_BIT_3 | 0-n | high | unsigned char | 0x08 | STAT_MUTE_BIT_3 | - | - | - | LHZ hinten links |
| STAT_MUTE_BIT_4 | 0-n | high | unsigned char | 0x10 | STAT_MUTE_BIT_4 | - | - | - | LHZ hinten rechts |
| STAT_MUTE_BIT_5 | 0-n | high | unsigned char | 0x20 | STAT_MUTE_BIT_5 | - | - | - | Kopfhörer links |
| STAT_MUTE_BIT_6 | 0-n | high | unsigned char | 0x40 | STAT_MUTE_BIT_6 | - | - | - | Kopfhörer rechts |
| STAT_MUTE_BIT_7 | 0-n | high | unsigned char | 0x80 | STAT_MUTE_BIT_7 | - | - | - | reserviert |

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

### CE_BT_PAIRING_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | CLASSIC |
| 0x02 | SSP |
| 0x03 | NFC |
| 0xFF | nicht definiert |

### CE_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | PHONE |
| 0x02 | BLUETOOTH_AUDIO |
| 0x03 | APPS |
| 0x04 | MIRACAST |
| 0x05 | AIRPLAY |
| 0x06 | TOUCH_COMMAND |
| 0x07 | CARPLAY |
| 0x08 | ANDROID_AUDIO |
| 0x09 | HOTSPOT |
| 0xFF | nicht definiert |

### CPU

| WERT | TEXT |
| --- | --- |
| 0x00 | Vehicle Controller |
| 0x01 | Entertainment Controller |

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

### EXTERNAL_HSFZ_ACTIVATION_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | activate external HSFZ |
| 0x01 | deactivate external HSFZ |

### FAILURE_ID_HDD

| WERT | TEXT |
| --- | --- |
| 0x00 | HDD partition reformatted after mount failure. |
| 0x01 | HDD partition reformat failed after mount failure. |
| 0x02 | HDD partition reformatted due to file system corruption. |
| 0x03 | HDD partition reformat failed after file system corruption. |
| 0x04 | HDD partition table recovery failed. |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
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
| 0x026370 | IPSEC_NICHT_INITIALISIERT | 0 | - |
| 0x026371 | IPSEC_NICHT_VERRIEGELT | 0 | - |
| 0x026372 | IPSEC_FEHLER_AUFGETRETEN | 0 | - |
| 0x026380 | ZERTIFIKATE_UND_BINDINGS_TYP1_WERK_NICHT_BEREIT | 0 | - |
| 0x026381 | ONLINE_ZERTIFIKATE_UND_BINDINGS_TYP2_NICHT_BEREIT | 0 | - |
| 0x02FF63 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x031780 | SIF: Concierge Service | 1 | - |
| 0x031781 | SIF: RTTI | 1 | - |
| 0x031782 | SIF: Online | 1 | - |
| 0x031783 | SIF: Telematic Online Logbook | 1 | - |
| 0x031784 | SIF: Map Update | 1 | - |
| 0x031785 | SIF: Breakdown Call | 1 | - |
| 0x031787 | SIF: Automatic Service Call | 1 | - |
| 0x031788 | SIF: Teleservice Battery Guard | 1 | - |
| 0x031790 | SIF: Verbindungsaufbau / Koppeln BT | 1 | - |
| 0x031791 | SIF: Verbindung BT | 1 | - |
| 0x031792 | SIF: Verbindungsaufbau / Koppeln WLAN | 1 | - |
| 0x031793 | SIF: Verbindung WLAN | 1 | - |
| 0x031794 | SIF: Telefonieren | 1 | - |
| 0x031795 | SIF: Telefonbuch | 1 | - |
| 0x031796 | SIF: Telefonliste | 1 | - |
| 0x031797 | SIF: BT Audio Play | 1 | - |
| 0x031798 | SIF: BT Audio Browsing | 1 | - |
| 0x031799 | SIF: Verbindung App | 1 | - |
| 0x03179A | SIF: Verbindung CarPlay | 1 | - |
| 0x03179C | SIF: Miracast | 1 | - |
| 0x03179D | SIF: SMS | 1 | - |
| 0x038400 | RSU: Fahrzeugseitige Vorbedingungen nicht erfüllt | 0 | - |
| 0x038401 | RSU: Softwareupdate nicht möglich | 0 | - |
| 0x038402 | RSU: Softwareupdate fehlgeschlagen ohne Fahrzeugfreigabe | 0 | - |
| 0x038403 | RSU: Aktiv gestartet | 0 | - |
| 0x038404 | RSU: Kundenseitige Vorbedingungen nicht erfüllt | 0 | - |
| 0x038405 | RSU: Prüfung Vorbedingungen nicht durchführbar | 0 | - |
| 0x038407 | RSU: Nicht fahrzeugspezifischer Fehler aufgetreten | 0 | - |
| 0xB7F80F | GPS Antenne: Leitungsunterbrechung | 0 | - |
| 0xB7F811 | GPS Antenne: Kurzschluss nach Masse | 0 | - |
| 0xB7F813 | GPS Modul: Kommunikation mit Hardware fehlgeschlagen | 0 | - |
| 0xB7F817 | Modus: SDARS Preactivation Mode Active | 0 | - |
| 0xB7F81A | WLAN Antenne: Leitungsunterbrechung | 0 | - |
| 0xB7F841 | Video: Ungültiges Video Signal (FBAS) | 1 | - |
| 0xB7F84B | ITS: Leitungsunterbrechung | 0 | - |
| 0xB7F84C | USB Hubs: Anzahl verbauter Hubs ungleich Anzahl codierter Hubs | 0 | - |
| 0xB7F853 | HDD: Laufwerk defekt | 0 | - |
| 0xB7F856 | ODD: Laufwerk defekt | 0 | - |
| 0xB7F859 | ODD: Datenträger Fehler | 1 | - |
| 0xB7F864 | WLAN Modul: Kommunikation mit Hardware fehlgeschlagen | 0 | - |
| 0xB7F867 | Spannungstemperaturmanagement: Interner Temperaturfehler | 0 | - |
| 0xB7F869 | Provisionierung Signatur- oder VIN-Prüfung fehlgeschlagen OTA | 0 | - |
| 0xB7F86A | Zertifikatsprüfung fehlgeschlagen | 0 | - |
| 0xB7F86B | Spannungstemperaturmanagement: Externe Unterspannung | 1 | - |
| 0xB7F86C | Spannungstemperaturmanagement: Externe Überspannung | 1 | - |
| 0xB7F86D | Provisionierung Signatur- oder VIN-Prüfung fehlgeschlagen Diagnose | 0 | - |
| 0xB7F876 | Löschen aller persönlicher Daten nicht möglich | 0 | - |
| 0xB7F879 | HDCP: HDCP_schwerer Fehler | 1 | - |
| 0xB7F87A | Mode: Komponentenschutz aktiv | 0 | - |
| 0xB7F87B | Audio Konfiguration: RAM Konfiguration inkonsistent mit Headunit | 0 | - |
| 0xB7F87D | Mode: Komponenteninitialiserung nicht gestartet | 0 | - |
| 0xB7F884 | System: Flash File System fehlerhaft | 0 | - |
| 0xB7F887 | HDD: Temperatur unter kritischer Schwelle | 0 | - |
| 0xB7F88B | Zertifikatsmanager: Backend-Zertifikate fehlerhaft | 1 | - |
| 0xB7F89C | GPS Modul: Kein Empfang in den letzten 40 Kilometern | 1 | - |
| 0xB7F89E | Security: Secure Time Backend Certificate Not Valid | 0 | - |
| 0xB7F8AF | USB Port 1: VBUS Kurzschluss nach Masse | 0 | - |
| 0xB7F8B0 | Provisionierung Syntax Fehler OTA | 0 | - |
| 0xB7F8B1 | Provisionierung Syntax Fehler Diagnose | 0 | - |
| 0xB7F8B8 | Bluetooth Antenne: Leitungsunterbrechung | 0 | - |
| 0xB7F8BB | Bluetooth Modul: Kommunikation mit Hardware fehlgeschlagen | 0 | - |
| 0xB7F8C0 | CID, Hardware Fehler: Ausfall Temperatursensor | 0 | - |
| 0xB7F8C1 | CID, Hardware Fehler: Ausfall UmgebungshelligkeitsSensor | 0 | - |
| 0xB7F8C2 | CID, Hardware Fehler: Fehler Betriebsspannungsmesspfad | 0 | - |
| 0xB7F8C3 | CID, Hardware Fehler: Ausfall CID-Kommunikation | 0 | - |
| 0xB7F8C4 | CID, Hardware Fehler: Ausfall Backlight-LEDs | 0 | - |
| 0xB7F8C5 | CID, Hardware Fehler: Checksummenfehler CID-Flashdaten | 0 | - |
| 0xB7F8C6 | CID, Übertemperatur: Helligkeitsreduzierung Backlight | 1 | - |
| 0xB7F8C7 | CID, Übertemperatur: Abschaltung Backlight | 1 | - |
| 0xB7F8C8 | CID: Überspannung Vcc | 1 | - |
| 0xB7F8C9 | CID: Unterspannung Vcc | 1 | - |
| 0xB7F8CA | CID, Konfigurationsfehler: CID-Variante nicht kompatibel | 0 | - |
| 0xB7F8CB | CID, Bilddaten Fehler: ungültig oder fehlerhaft | 0 | - |
| 0xB7F8D0 | Modus: HDD Schutz aktiv | 0 | - |
| 0xB7F8DD | System: Kritische Recovery Funktion gestartet | 1 | - |
| 0xB7F8E2 | CID, Hardware Fehler: Touch Sensor Error | 1 | - |
| 0xB7F8E5 | Modus: Debugging aktiv | 0 | - |
| 0xB7F8E6 | USB Port 2: VBUS Kurzschluss nach Masse | 0 | - |
| 0xB7F8EC | Touch Command: Batterie Temperatur Problem | 1 | - |
| 0xB7F8ED | Touch Command: Kommunikationsfehler | 1 | - |
| 0xB7F8EE | USB Port 3: VBUS Kurzschluss nach Masse | 0 | - |
| 0xB7F8EF | Touch Command: App Reset | 1 | - |
| 0xB7F8F0 | Touch Command: Fahrzeug Kompatibilitätsproblem | 1 | - |
| 0xB7F8F1 | Touch Command: Nicht genug Speicher | 1 | - |
| 0xB7F8F2 | Touch Command: Batterie Problem | 1 | - |
| 0xB7F8F3 | Modus: Internes Tracing aktiv | 0 | - |
| 0xB7F8F4 | Modus: Externes Tracing aktiv | 0 | - |
| 0xB7F8F8 | Video: Ungültiges Video Signal (Ethernet) | 1 | - |
| 0xB7F8F9 | Reset: Watchdog im I/O-Controller löst Fehler-Reset aus | 1 | - |
| 0xB7F8FA | Modus: SecureBoot deaktiviert | 0 | - |
| 0xB7F8FB | Zertifikatsmanager: ungültige Zertifikatssperrliste | 1 | - |
| 0xB7F8FE | PWF Messemodus aktiv | 0 | - |
| 0xB7F901 | CID Hardware Error: Proximity | 0 | - |
| 0xB7F912 | Communication between SDARS Application and RAM SXM Module not possible | 0 | - |
| 0xB7F913 | RAM SDARS Antenne: Kurzschluss nach Masse zwischen Steuergerät und Antennensystem | 0 | - |
| 0xB7F914 | RAM SDARS Antenne: Offene Leitung zwischen Steuergerät und Antennensystem | 0 | - |
| 0xE1C41E | IuK-CAN Control Module Bus OFF | 0 | - |
| 0xE1C600 | Ethernet: physikalischer Fehler (link off) | 1 | - |
| 0xE1C602 | Ethernet: Link-Qualität niedrig | 1 | - |
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
| 0x0007 | PaketSwitch Registrierung | 0-n | High | 0x0F | TAB_PS_REGSTATE | - | - | - |
| 0x0008 | CircuitSwitch Registierung | 0-n | High | 0xF0 | TAB_CS_REGSTATE | - | - | - |
| 0x0009 | PORT_LINK_OFF_STATUS_00 | 0-n | High | 0x0001 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000A | PORT_LINK_OFF_STATUS_01 | 0-n | High | 0x0002 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000B | PORT_LINK_OFF_STATUS_02 | 0-n | High | 0x0004 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000C | PORT_LINK_OFF_STATUS_03 | 0-n | High | 0x0008 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000D | PORT_LINK_OFF_STATUS_04 | 0-n | High | 0x0010 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000E | PORT_LINK_OFF_STATUS_05 | 0-n | High | 0x0020 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000F | PORT_LINK_OFF_STATUS_06 | 0-n | High | 0x0040 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0010 | PORT_LINK_OFF_STATUS_07 | 0-n | High | 0x0080 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0011 | PORT_LINK_OFF_STATUS_08 | 0-n | High | 0x0100 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0012 | PORT_LINK_OFF_STATUS_09 | 0-n | High | 0x0200 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0013 | PORT_LINK_OFF_STATUS_10 | 0-n | High | 0x0400 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0014 | PORT_LINK_OFF_STATUS_11 | 0-n | High | 0x0800 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0015 | PORT_LINK_OFF_STATUS_12 | 0-n | High | 0x1000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0016 | PORT_LINK_OFF_STATUS_13 | 0-n | High | 0x2000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0017 | PORT_LINK_OFF_STATUS_14 | 0-n | High | 0x4000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0018 | PORT_LINK_OFF_STATUS_15 | 0-n | High | 0x8000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0019 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_00 | 0-n | High | 0x0001 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001A | DETECTED_UNEXPECTED_LINK_STATUS_PORT_01 | 0-n | High | 0x0002 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001B | DETECTED_UNEXPECTED_LINK_STATUS_PORT_02 | 0-n | High | 0x0004 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001C | DETECTED_UNEXPECTED_LINK_STATUS_PORT_03 | 0-n | High | 0x0008 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001D | DETECTED_UNEXPECTED_LINK_STATUS_PORT_04 | 0-n | High | 0x0010 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001E | DETECTED_UNEXPECTED_LINK_STATUS_PORT_05 | 0-n | High | 0x0020 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001F | DETECTED_UNEXPECTED_LINK_STATUS_PORT_06 | 0-n | High | 0x0040 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0020 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_07 | 0-n | High | 0x0080 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0021 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_08 | 0-n | High | 0x0100 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0022 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_09 | 0-n | High | 0x0200 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0023 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_10 | 0-n | High | 0x0400 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0024 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_11 | 0-n | High | 0x0800 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0025 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_12 | 0-n | High | 0x1000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0026 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_13 | 0-n | High | 0x2000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0027 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_14 | 0-n | High | 0x4000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0028 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_15 | 0-n | High | 0x8000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0041 | IPSEC_ATM02_STATUS | 0-n | High | 0x03 | TAB_DEFINITION_STATUS_ATM02 | - | - | - |
| 0x0042 | IPSEC_KOMBI_STATUS | 0-n | High | 0x0C | TAB_DEFINITION_STATUS_KOMBI | - | - | - |
| 0x0043 | IPSEC_MGU_STATUS | 0-n | High | 0x30 | TAB_DEFINITION_STATUS_MGU | - | - | - |
| 0x0044 | IPSEC_RSE_STATUS | 0-n | High | 0xC0 | TAB_DEFINITION_STATUS_RSE | - | - | - |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1757 | Signalqualität | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1770 | STATUS_CERTIFICATES | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1771 | STATUS_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1772 | STATUS_OTHER_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1773 | STATUS_ONLINE_CERTIFICATES | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1774 | STATUS_ONLINE_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1775 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x17D0 | NETZWERK_FELDSTAERKE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x17D1 | DEVICE_NAME | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17D2 | OBEX_ERROR_CODES | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17D3 | VCARD_VERSION | TEXT | High | 5 | - | 1.0 | 1.0 | 0.0 |
| 0x17D4 | VCARD_CHARACTER_ENCODING | TEXT | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x17D5 | BT_VENDOR_ID | HEX | High | unsigned int | - | - | - | - |
| 0x17D6 | NUMBER_DOWNLOADED_CCS | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17D7 | NUMBER_DOWNLOADED_CE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17D8 | DOWNLOAD_DURATION_TO_ERROR | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17D9 | NUMBER_ELEMENTS_WITHOUT_ERRORS | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17DA | ID_ERROR_ELEMENT | TEXT | High | 32 | - | 1.0 | 1.0 | 0.0 |
| 0x17DB | FIRST_NAME_ERROR_ELEMENT | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17DC | CALLTYPE_ERROR_ELEMENT | 0-n | High | 0xFF | TAB_CE_CALLTYPE | - | - | - |
| 0x17DD | LAST_NAME_ERROR_ELEMENT | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17DE | TIME_ERROR_ELEMENT | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17DF | BATTERY_STATE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17E0 | NUMBER_ERROR_ELEMENT | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17E3 | LAST_CHARACTERS_BEFORE_ERROR | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17E4 | SPEECH_TYPE | TEXT | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x17E5 | TAB_CE_ENVIRONMENT_CONDITION | 0-n | High | 0xFF | TAB_CE_ENVIRONMENT_CONDITION | - | - | - |
| 0x17E6 | CE_FUNKTION | 0-n | High | 0xFF | CE_FUNKTION | - | - | - |
| 0x17E7 | CE_BT_PAIRING_TYPE | 0-n | High | 0xFF | CE_BT_PAIRING_TYPE | - | - | - |
| 0x17E8 | CE_CONNECTION_TYPE | 0-n | High | 0xFF | TAB_CE_CONNECTION_TYPE | - | - | - |
| 0x17E9 | WLAN_AUTORIZATION_TYPE | 0-n | High | 0xFF | TAB_CE_AUTORIZATION_TYPE | - | - | - |
| 0x17EA | CE_SOURCE_TYPE | 0-n | High | 0xFF | TAB_CE_SOURCE_TYPE | - | - | - |
| 0x17EB | USER_CONFIRMATION | 0/1 | High | 0x01 | - | - | - | - |
| 0x17EC | ADDRESS | TEXT | High | 17 | - | 1.0 | 1.0 | 0.0 |
| 0x17EE | National Mobile Country Code | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17EF | National Mobile Network Code | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17F0 | CD Fehlerursache | 0-n | High | 0xFF | TAB_CD_ENVIRONMENT_CONDITION | - | - | - |
| 0x17F1 | GPS_ZEIT | TEXT | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x17F3 | NETZWERKTECHNOLOGIE | 0-n | High | 0xFF | TAB_CD_MOBILE_NETWORK_TECHNOLOGY | - | - | - |
| 0x17F4 | RSSI | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x17F5 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x17F6 | INFO | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17F7 | APP_TASK | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17FA | RSU_FEHLERWERT | HEX | High | unsigned long | - | - | - | - |
| 0x17FB | MASSNAHMENPLAN_ID | TEXT | High | 38 | - | 1.0 | 1.0 | 0.0 |
| 0x4208 | Secondary DTC ID | TEXT | High | 4 | - | 1.0 | 1.0 | 0.0 |
| 0x421A | APPLICATION_NAME | TEXT | High | 255 | - | 1.0 | 1.0 | 0.0 |
| 0x421B | SENSOR_TEMP_2 | - | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x421C | SENSOR_TEMP_3 | - | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x421D | SENSOR_TEMP_4 | - | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x421E | SENSOR_TEMP_5 | - | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x421F | SENSOR_TEMP_1 | - | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4224 | Videoquelle | 0-n | High | 0xFF | VIDEO_SOURCE | - | - | - |
| 0x4228 | Dateipfad | TEXT | High | 255 | - | 1.0 | 1.0 | 0.0 |
| 0x4248 | RECOVERY_STEPS | 0-n | High | 0xFF | TAB_RECOVERY_STEPS_MGU | - | - | - |
| 0x425D | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4266 | ERROR_CODE | HEX | High | unsigned char | - | - | - | - |
| 0x4268 | ADDITIONAL_INFORMATION | TEXT | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x426D | TABLET_MAC_ADDRESS | TEXT | High | 17 | - | 1.0 | 1.0 | 0.0 |
| 0x426E | HDCP_LINK | 0-n | High | 0xFF | _HDCP_LINK | - | - | - |
| 0x4270 | AUDIOSYSTEMWERT_HU | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4271 | AUDIOSYSTEMWERT_RAM | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4272 | INTERNAL_ IOC_RESETS | HEX | High | unsigned char | - | - | - | - |
| 0x4273 | USER_ID | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

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
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x026331 | SW Manipulation | 0 | - |
| 0x100005 | HDCP: HDCP_AKE Fehler | 0 | - |
| 0x100006 | RSU: Warning | 0 | - |
| 0x100009 | CDC Campaign Manager: Connection to backend failed due to timeout | 0 | - |
| 0x10000A | CDC Campaign Manager: Job rejected | 0 | - |
| 0x10000B | CDC JS Platform: Job cancelled due to overload | 0 | - |
| 0x10000C | CDC JS Platform: Job crashed | 0 | - |
| 0x10000D | CDC JS Platform: Killed by MainApp | 0 | - |
| 0x10000E | CDC JS Platform: Resources Threshold exceeded | 0 | - |
| 0x100400 | HDD: SATA Initialisierungsfehler | 0 | - |
| 0x100401 | HDD: Ursache Initialisierungsfehler der Festplatte | 0 | - |
| 0x100402 | HDD: SMART Status nah vom kritischen Zustand | 0 | - |
| 0x100404 | HDD: Äußere Kontaminationdetektion | 0 | - |
| 0x100405 | HDD: HeadCrash-Erkennung | 0 | - |
| 0x100406 | HDD: Bit - Flip-Erkennung | 0 | - |
| 0x100600 | ODD: SATA Initialisierungsfehler | 0 | - |
| 0x100601 | ODD: Initialisierung fehlgeschlagen | 0 | - |
| 0x100602 | ODD: Lademechanismus defekt | 0 | - |
| 0x100C01 | System: Crash | 0 | - |
| 0x100F00 | ODD: Medienerkennung fehlgeschlagen | 1 | - |
| 0x101706 | Audioquelle: Timeout auf SourceStateChange | 0 | - |
| 0x101707 | Audioverbindung: Timeout bei Aufbau | 0 | - |
| 0x10170F | PIA: Eine verbaute PIA-Funktion hat die Anfrage nach ihrem Einstellwert nicht beantwortet | 0 | - |
| 0x101710 | PIA: Eine PIA-Funktion, die bei der Konfigurationsanfrage nicht gefunden wurde, hat einen Einstellwert geschickt | 0 | - |
| 0x101711 | PIA: Eine verbaute PIA-Funktion hat das Setzen ihres Einstellwerts nicht bestätigt | 0 | - |
| 0x101712 | PIA: Eine PIA-Funktion meldet ihre Konfigurationsinformationen obwohl sie nicht dazu aufgefordert wurde | 0 | - |
| 0x101713 | PIA: Eine PIA-Funktion liefert korrupte Konfigurationsinformationen | 0 | - |
| 0x101714 | PIA: Für eine PIA-ID wurden mehrere Telegramme mit unterschiedlichen Konfigurationsinformationen geliefert | 0 | - |
| 0x101715 | PIA: Die von einer PIA-Funktion gelieferte aktuelle Profilnummer unterscheidet sich von der in der Head Unit vermerkten | 0 | - |
| 0x101717 | Video: Watch Dog ausgelöst | 0 | - |
| 0x101719 | PIA: Abbruch des laufenden PIA-Ablaufs wegen Fahrzeugzustandsänderung | 0 | - |
| 0x10171A | PIA: Profilnummer in SET_PROFILE ungleich Profilnummer in CHANGE_PROFILE | 0 | - |
| 0x10171B | PIA-Konfiguration-Abfragen | 0 | - |
| 0x101724 | PIA: Die Head Unit hat das Telegramm Status_Funkschlüssel vom CAS-Steuergerät nicht erhalten | 0 | - |
| 0x101795 | System: Software Konsistenzprüfung fehlgeschlagen | 0 | - |
| 0x101797 | Mode: Keine Initialisierung Komponentenschutz durch BDC | 0 | - |
| 0x101798 | Mode: Fehlerhaftes Zertifikat bei Initialisierung Komponentenschutz | 0 | - |
| 0x101799 | Mode: Fehlerhafte Signaturprüfung bei Initialisierung Komponentenschutz | 0 | - |
| 0x10179A | Speicherfehler bei der Initialisierung Komponentenschutz | 0 | - |
| 0x10179B | Fehlen oder Timeout Antwort BDC bei zyklischer Prüfung Komponentenschutz | 0 | - |
| 0x10179C | Fehlerhafte Signaturprüfung bei zyklischer Prüfung Komponentenschutz | 0 | - |
| 0x10179D | Speicherfehler bei Refurbish | 0 | - |
| 0x10179E | Fehler bei Einrichtung des sicheren Speichers | 0 | - |
| 0x10179F | Manipulation sicherer Speicher erkannt | 0 | - |
| 0x1017A1 | Zertifikatsmanager: falscher Hub | 1 | - |
| 0x1017A2 | Zertifikatsmanager: ungültiges Signatur-Zertifikat oder Signatur | 1 | - |
| 0x1017A3 | Zertifikatsmanager: ungültiges Backend SubCA Zertifikat | 1 | - |
| 0x1017A4 | Zertifikatsmanager: ungültiges Backend Service Zertifikat | 1 | - |
| 0x1017A6 | Zertifikatsmanager: ungültige Daten vom Backend erhalten | 1 | - |
| 0x1017A7 | Security: Secure Time Not Obtained Within 20 Minutes | 0 | - |
| 0x1017A9 | RSU: Fehler in Anfangsphase aufgetreten | 0 | - |
| 0x1017AA | Mode: TVin Verschlüsselung nicht abgeschlossen | 0 | - |
| 0x806330 | Fehler der Fahrzeug-Security | 0 | - |
| 0xE1C601 | Ethernet: CRC Fehler | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0029 | PORT_00_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x002A | PORT_01_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x002B | PORT_02_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x002C | PORT_03_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x002D | PORT_04_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x002E | PORT_05_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x002F | PORT_06_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0030 | PORT_07_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1754 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x1761 | FILE_MANIPULATED | TEXT | High | 18 | - | 1.0 | 1.0 | 0.0 |
| 0x17FA | RSU_FEHLERWERT | HEX | High | unsigned long | - | - | - | - |
| 0x17FB | MASSNAHMENPLAN_ID | TEXT | High | 38 | - | 1.0 | 1.0 | 0.0 |
| 0x406C | JoynrResponse | 0-n | High | 0xFFFFFFFF | TAB_JOYNRRESPONSE | - | - | - |
| 0x406D | TimeoutValue Discovery | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x406E | TimeoutValue Messaging | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x406F | FidlVersion_Major | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4070 | JobID | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4071 | Reason_Job_Rejected | 0-n | High | 0xFFFFFFFF | TAB_REASON_JOB_REJECTED | - | - | - |
| 0x4072 | REASON_JOB_CANCELED | 0-n | High | 0xFFFFFFFF | TAB_REASON_JOB_CANCELED | - | - | - |
| 0x4073 | Reason_Job_Crashed | 0-n | High | 0xFFFFFFFF | TAB_REASON_JOB_CRASHED | - | - | - |
| 0x4074 | Reason_Killed_By_Main_App | 0-n | High | 0xFFFFFFFF | TAB_REASON_KILLED_BY_MAIN_APP | - | - | - |
| 0x4075 | RamMemoryUsageKB | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4076 | CpuUsage | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4077 | DiskUsageKB | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4078 | NumberOfJobs | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4079 | FidlVersion_Minor | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4206 | SMART Daten | TEXT | Low | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x420D | PIA Process | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4214 | PIA Profilnummer | HEX | High | unsigned char | - | - | - | - |
| 0x4216 | PIA FunctionID | HEX | High | unsigned int | - | - | - | - |
| 0x4217 | PIA configuration attributes | TEXT | High | 4 | - | 1.0 | 1.0 | 0.0 |
| 0x4218 | PIA configuration attributes compare | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x4219 | PIA Profilnumbers function and master | TEXT | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x421A | APPLICATION_NAME | TEXT | High | 255 | - | 1.0 | 1.0 | 0.0 |
| 0x4224 | Videoquelle | 0-n | High | 0xFF | VIDEO_SOURCE | - | - | - |
| 0x4226 | Video Watchdog info | TEXT | High | 4 | - | 1.0 | 1.0 | 0.0 |
| 0x4227 | Media Typ | 0-n | High | 0xFF | MEDIA_TYPE | - | - | - |
| 0x4228 | Dateipfad | TEXT | High | 255 | - | 1.0 | 1.0 | 0.0 |
| 0x4232 | Fahrzeugzustand | HEX | High | unsigned char | - | - | - | - |
| 0x4240 | ECUID | 0-n | High | 0xFF | CPU | - | - | - |
| 0x4251 | HD_MALFUNC_RUNTIME_ERRCODE | 0-n | High | 0xFF | HD_MALFUNC_RUNTIME_ERRCODE | - | - | - |
| 0x425F | SINK_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x426C | CRASH_ID | TEXT | High | 16 | - | 1.0 | 1.0 | 0.0 |
| 0x426E | HDCP_LINK | 0-n | High | 0xFF | _HDCP_LINK | - | - | - |
| 0x426F | SOURCE_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
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

### MEDIA_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unknown |
| 0x01 | CD |
| 0x02 | DVD |
| 0x03 | BD |
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

### PWF_MESSEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | MESSEMODUS_NICHT_AKTIV |
| 0x01 | MESSEMODUS_AKTIV |
| 0xFF | Wert ungültig |

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

### RES_0X1032_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASU_STATE | - | - | + | 0-n | high | unsigned char | - | TASU_STEUERN_STATUS | - | - | - | Steuerung der TAS-Nutzung |

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

### RES_0X107E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RETURN_CODE | + | + | - | 0-n | high | unsigned char | - | TAB_71_01_107E_RETURNCODE | - | - | - | Rückgabewert |

### RES_0X107F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RETURN_CODE | - | + | - | 0-n | high | unsigned char | - | TAB_71_02_107F_RETURNCODE | - | - | - | Rückgabewert |

### RES_0X10AB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WORSTCASECHECKTIME_IN_S_WERT | + | - | - | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Worst Case Laufzeit in Sekunden |

### RES_0X1111_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IPSEC | + | - | - | 0-n | high | unsigned char | - | TAB_STATUS_IPSEC | - | - | - | Gibt den Status des IPsec-Schlüsselaustausch wieder |

### RES_0X1112_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IPSEC | + | - | - | 0-n | high | unsigned char | - | TAB_STATUS_IPSEC | - | - | - | Gibt den Status des IPsec-Schlüsselaustausch wieder |

### RES_0X1113_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IPSEC | + | - | - | 0-n | high | unsigned char | - | TAB_STATUS_IPSEC | - | - | - | Gibt den Status des IPsec-Schlüsselaustausch wieder |

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

### RES_0X400A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AMB_SENSOR_WERT | lx | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ambient brightness of the local CID sensor (Lux).  Range: [0x0000 - 0x03E] 0 - 1000 Lux |
| STAT_BL_TEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Currently measured temperature of the backlight temperature sensor. Range: [0xD8 - 0x78] -40°C to 120°C 0x80 to 128°C  Sensor Failure |
| STAT_VCC_VOLTAGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vcc voltage of the CID in steps of 1/10 V Range: [0x0000 - 0xFFFE]  0xFFFF invalid |
| STAT_BACKLIGHT_DRIVER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Error status output pins of the backlight LED. Range: [0x00 - 0x03] 0xFF invalid |
| STAT_INT_STATUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Contents of the Indigo register 'IntStatus' Range: [0x0000 - 0xFFFF] |

### RES_0X400E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAJOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Major SW version of the CID |
| STAT_MINOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minor SW version of the CID |
| STAT_PATCH_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patch version of the CID |

### RES_0X400F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_POWER_MODE | 0-n | high | unsigned char | - | TAB_STATUSCIDPOWERMODE | - | - | - | Indicates if the CID is enabled by the head unit power mode |
| STAT_ERROR_FLAGS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates which internal error are active.Range: [0x0000 - 0xFFFF] |
| STAT_MAIN_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDMAINSTATE | - | - | - | Main state of the CID state machine |
| STAT_OPERATION_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDOPERATIONSTATE | - | - | - | Operation state of the CID state machine |
| STAT_INIT_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDINITSTATE | - | - | - | Initialization (startup) state of the CID state machine |
| STAT_COM_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDCOMSTATE | - | - | - | State of the communication stack |
| STAT_SCHEDULE_ID | 0-n | high | unsigned char | - | TAB_STATUSCIDSCHEDULEID | - | - | - | Schedule ID of communication stack. Range: [0x00 - 0x04] 0xFF invalid |
| STAT_FADE_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDFADESTATE | - | - | - | Fading state of the dimming module |
| STAT_FLASH_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDFLASHSTATE | - | - | - | Flash reading state of the GDC module |
| STAT_FLASH_DATA_CHANGED | 0-n | high | unsigned char | - | TAB_STATUSCIDFLASHDATACHANGE | - | - | - | Indicates if the flash data of the connected CID has been changed and must be saved by the head unit |
| STAT_DISPLAY_VOLTAGE | 0-n | high | unsigned char | - | TCIDONOFFACTION | - | - | - | Activation state of the display power supply |
| STAT_DISPLAY_ENABLE | 0-n | high | unsigned char | - | TCIDONOFFACTION | - | - | - | Activation state of the complete CID (also contained in Status Monitor) |
| STAT_DISPLAY_READY | 0-n | high | unsigned char | - | TAB_CIDDISPLAYREADY | - | - | - | Indicated if CID is ready to display or not (also contained in Status Monitor) |

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
| STAT_DIM_FADE_TIME_T0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Death time before fading starts (resolution 100ms). Range: [0x00-0xFF] |
| STAT_DIM_FADE_TIME_T1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time to fade to current luminous density (resolution 100ms). Range: [0x00-0x3F] |
| STAT_DIM_FADE_TIME_T2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time to fade out (resolution 100ms). Range: [0x00-0x3F] |
| STAT_DIM_FADE_EXPO_T1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fade in ramp curve exponent. 0=linear, 1=square, ... Range: [0x00-0x04] |
| STAT_DIM_FADE_EXPO_T2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fade out ramp curve exponent. 0=linear, 1=square, ... Range: [0x00-0x04] |
| STAT_DIM_FILT_CHANGE_SENSITIVITY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adjusts the reaction on  strong signal changes depending on the time the input value is stable. 0 = no adjustment (old filter algorithm) 1-65535 = number of dim cycles the input value has to be stable Range: [0x0000-0xFFFF] |
| STAT_DIM_MIN_OFFSET_BRIG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lower border of the brightness offset regulation range |
| STAT_ENDIANESS_ADAPTED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Indicates if the endianess of the coding data block has been adapted or not |
| STAT_PADDING_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Padding for further use |

### RES_0X4011_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_LOCATION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Value of the location in the car |
| STAT_PART_NR_TEXT | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | Value of the BMW part number. Byte 0...6= BMW Teilenummer |
| STAT_SUPPLIER_NR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Value of the supplier part number |
| STAT_SERIAL_NUMBER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Value of the serial number. |
| STAT_PRODUCTION_YEAR_WERT | HEX | high | unsigned char | - | - | - | - | - | Year of production of the CID |
| STAT_PRODUCTION_MONTH_WERT | HEX | high | unsigned char | - | - | - | - | - | Month of production of the CID |
| STAT_PRODUCTION_DAY_WERT | HEX | high | unsigned char | - | - | - | - | - | Day of production of the CID |
| STAT_HARDWARE_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hardware version of the CID |
| STAT_DISPLAY_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Display version of the CID |
| STAT_MECHANICAL_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mechanical version of the CID |
| STAT_FLASH_DATA_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Flash data version of the CID |
| STAT_SCALER_FIRMWARE_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Scaler firmware Version |
| STAT_SCALER_CONFIGURATION_DATA_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten der Scaler-Konfiguration  |
| STAT_TOUCH_FIRMWARE_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Version der Touch-Firmware |
| STAT_TOUCH_CONFIGURATION_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Version der Touch-Konfiguration |
| STAT_PROXIMITY_FIRMWARE_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Version der Proximity-Firmware |
| STAT_PROXIMITY_CONFIGURATION_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Version der Proximity-Konfiguration |

### RES_0X4024_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISPLAY_AKTIVIERUNG | 0-n | - | unsigned char | - | TStatusDisplayActivationMode | - | - | - | Display-Aktivierung [uint8, 0x0 - 0xF]  (Signal ENB_DISP von Head Unit) |
| STAT_OFFSET_HELLIGKEIT_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Offset Helligkeit [sint8, -127 bis +127 = -100 bis +100%, 128 = Ungültig, Fehlerwert]  (Signal OFFS_BRIG_FRT von Head Unit) |
| STAT_DIMMRAD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dimmrad-Stellung [uint8, 0 - 254 = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal CTR_ILUM_SW) |
| STAT_HELLIGKEIT_KOMBI_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Helligkeitswert I-Kombi-Helligkeits-Sensor [uint8, 0 - 254  = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal DSTN_LCD_LUM) |
| STAT_DAEMPFUNG_LCD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dämpfung LCD Leuchtdichte [uint8, 0 - 240 = schnell bis langsam, 241- 254 = sprunghaft, 255 = FF = Ungültig, Fehlerwert], Geschwindigkeit der Helligkeitsregelung (Signal DMPNG_LCD_LUM) |

### RES_0X4025_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_LOCATION_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Verbauort im Fahrzeug |
| STAT_PART_NR_TEXT | TEXT | - | string[7] | - | - | 1.0 | 1.0 | 0.0 | BMW Teilenummer |

### RES_0X4044_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_MAC_ADDRESS_1_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 1; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 1 |
| STAT_WLAN_ERRORRATE_DBM_1_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 1 |
| STAT_WLAN_MAC_ADDRESS_2_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 2; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 2 |
| STAT_WLAN_ERRORRATE_DBM_2_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 2 |
| STAT_WLAN_MAC_ADDRESS_3_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 3; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 3 |
| STAT_WLAN_ERRORRATE_DBM_3_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 3 |
| STAT_WLAN_MAC_ADDRESS_4_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 4; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 4 |
| STAT_WLAN_ERRORRATE_DBM_4_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 4 |
| STAT_WLAN_MAC_ADDRESS_5_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 5; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 5 |
| STAT_WLAN_ERRORRATE_DBM_5_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 5 |
| STAT_WLAN_MAC_ADDRESS_6_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 6; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_6_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 6 |
| STAT_WLAN_ERRORRATE_DBM_6_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 6 |
| STAT_WLAN_MAC_ADDRESS_7_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 7; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_7_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 7 |
| STAT_WLAN_ERRORRATE_DBM_7_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 7 |
| STAT_WLAN_MAC_ADDRESS_8_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 8; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_8_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 8 |
| STAT_WLAN_ERRORRATE_DBM_8_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 8 |
| STAT_WLAN_MAC_ADDRESS_9_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 9; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_9_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 9 |
| STAT_WLAN_ERRORRATE_DBM_9_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 9 |
| STAT_WLAN_MAC_ADDRESS_10_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 10; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_10_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 10 |
| STAT_WLAN_ERRORRATE_DBM_10_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 10 |

### RES_0X404A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POWERON_MINUTES_WERT | HEX | high | unsigned long | - | - | - | - | - | Power on in Minuten seit der Production der ECU. |
| STAT_LIFECYCLES_WERT | HEX | high | unsigned long | - | - | - | - | - | Lifecycles seit der Production der ECU. |

### RES_0X4052_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_HW_SERIAL_NUMBER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Seriennummer vom WIFI Chip |
| STAT_WLAN_HW_VENDORID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | VendorID vom WIFI Chip  |
| STAT_WLAN_HW_MODEL_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | HW Modell vom WIFI Chip |
| STAT_WLAN_FIRMWARE_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Firmware vom WIFI Chip |
| STAT_BT_HW_SERIAL_NUMBER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Seriennummer vom BT Chip |
| STAT_BT_HW_VENDORID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | VendorID vom BT chip |
| STAT_BT_HW_MODEL_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | HW Modell of the BT Chip |
| STAT_BT_FIRMWARE_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Firmware vom BT chip |

### RES_0X4053_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_MAC_ADDRESS_11_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 11; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_11_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 11 |
| STAT_WLAN_ERRORRATE_DBM_11_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 11 |
| STAT_WLAN_MAC_ADDRESS_12_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 12; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_12_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 12 |
| STAT_WLAN_ERRORRATE_DBM_12_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 12 |
| STAT_WLAN_MAC_ADDRESS_13_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 13; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_13_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 13 |
| STAT_WLAN_ERRORRATE_DBM_13_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 13 |
| STAT_WLAN_MAC_ADDRESS_14_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 14; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_14_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 14 |
| STAT_WLAN_ERRORRATE_DBM_14_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 14 |
| STAT_WLAN_MAC_ADDRESS_15_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 15; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_15_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 15 |
| STAT_WLAN_ERRORRATE_DBM_15_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 15 |
| STAT_WLAN_MAC_ADDRESS_16_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 16; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_16_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 16 |
| STAT_WLAN_ERRORRATE_DBM_16_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 16 |
| STAT_WLAN_MAC_ADDRESS_17_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 17; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_17_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 17 |
| STAT_WLAN_ERRORRATE_DBM_17_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 17 |
| STAT_WLAN_MAC_ADDRESS_18_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 18; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_18_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 18 |
| STAT_WLAN_ERRORRATE_DBM_18_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 18 |
| STAT_WLAN_MAC_ADDRESS_19_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 19; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_19_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 19 |
| STAT_WLAN_ERRORRATE_DBM_19_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 19 |
| STAT_WLAN_MAC_ADDRESS_20_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des verbundenen Gerät 20; xx:yy:zz:aa:bb:cc |
| STAT_WLAN_ERRORRATE_20_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate (0-100%) des verbundenen Gerät 20 |
| STAT_WLAN_ERRORRATE_DBM_20_WERT | dBm | high | unsigned char | - | - | 1.0 | 1.0 | -255.0 | Power des verbundenen Gerät 20 |

### RES_0X406B_D

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

### RES_0XA01C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HERSTELLUNG_VIDEOVERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TAB_HERSTELLUNGSTATUS | - | - | - | Status der Verbindungsherstellung |
| STAT_HERSTELLUNG_FEHLER | - | - | + | 0-n | - | unsigned char | - | TAB_HERSTELLUNGFEHLER | - | - | - | Fehlertyp der Verbindungsherstellung |
| STAT_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | ausgewählte Quelle |
| STAT_SENKEN | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSINK | - | - | - | Ausgwählte Senke |

### RES_0XA01D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus |
| STAT_TEST_VIDEOEINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_TESTSTATUS | - | - | - | gibt den Status des gesamten Tests oder der entsprechenden Quelle(n) wieder |
| STAT_ANZAHL_FEHLERHAFTE_SIGNALE_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 2 oder 3 meldet. Gibt wieder, wie vielen Fehler während des Test gefunden wurden. |
| STAT_FEHLER_1_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_1_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_1_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_1_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_1_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_2_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_2_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_2_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_2_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_2_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_3_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_3_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_3_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_3_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_3_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_4_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_4_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_4_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_4_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_4_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_5_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_5_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_5_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_5_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_5_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_6_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_6_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_6_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_6_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_6_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_7_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_7_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_7_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_7_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_7_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_8_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_8_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_8_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_8_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_8_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_9_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_9_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_9_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_9_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_9_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_10_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_10_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_10_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_10_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_10_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_11_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_11_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_11_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_11_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_11_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_12_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_12_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_12_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_12_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_12_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_13_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_13_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_13_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_13_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_13_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_14_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_14_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_14_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_14_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_14_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_15_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_15_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_15_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_15_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_15_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |
| STAT_FEHLER_16_QUELLE | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOSOURCE | - | - | - | gibt die Videoquelle wieder, bei der der Fehler auftrat |
| STAT_FEHLER_16_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TAB_VIDEOEINGANGFEHLERART | - | - | - | Art des Fehlers des ersten fehlerhaften Eingangssignals |
| STAT_FEHLER_16_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_FBASEINGANG | - | - | - | FBAS-Eingang, an dem das fehlerhafte Signal empfangen worden ist |
| STAT_FEHLER_16_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned char | - | TAB_EINGANGVIDEOSWITCH | - | - | - | gibt an, welcher Eingang des Videoswitches geroutet wurde |
| STAT_FEHLER_16_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_AUSGANGVIDEOSWITCH | - | - | - | gibt an, welcher Ausgang des Videoswitches geroutet wurde |

### RES_0XA01E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAU_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TAB_VERBAUROUTINE | - | - | - | ausgeführte Testroutine(n) |
| STAT_TEST_VERBAU | - | - | + | 0-n | - | unsigned char | - | TAB_TESTSTATUS | - | - | - | gibt den Status des Verbautests wieder Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt |

### RES_0XA025_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LANGUAGE | - | - | + | 0-n | - | unsigned char | - | TAB_LANGUAGE | - | - | - | aktuell eingestellte MMI Sprache |

### RES_0XA039_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEVEL_WERT | + | - | - | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Lautstärke des gewählten Audiosignal |

### RES_0XA03C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER_DREHZAHL_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuelle Drehzahl des Lüfters in RPM. (RPM = STAT_LUEFTER_DREHZAHL_WERT * 100). (Wenn nicht abfragbar, wird 0xFFFF zurückgegeben) |

### RES_0XA048_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT | - | - | + | 0-n | - | unsigned char | - | TAB_BLUETOOTH_STATUS | - | - | - | Liest den Bluetooth Status aus |

### RES_0XA049_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT_ERKENNUNGSMODUS | - | - | + | 0-n | - | unsigned char | - | TAB_BT_DISCOVERY_MODE_STATUS | - | - | - | Liest den Status des Bluetooth Erkennungsmodus |

### RES_0XA04A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KM_READING_AT_LAST_RECONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | KM-Stand bei letzter Verbindungsherstellung |
| STAT_NO_OF_RECONNECT_WERT | + | - | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Verbindungsherstellungen |
| STAT_PHONE_MODEL_TRUNC_RAWDATA_TEXT | + | - | - | TEXT | high | string[47] | - | - | 1.0 | 1.0 | 0.0 | Telefonmodell als Rohdaten |
| STAT_PHONE_SOFTWARE_TRUNC_RAWDATA_TEXT | + | - | - | TEXT | high | string[47] | - | - | 1.0 | 1.0 | 0.0 | Telefonsoftware als Rohdaten |
| STAT_SUPPORTED_FEATURES_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | unterstützte Features: PHONE_BOOK (MSB) PHONE_BOOK_1_2 CALL_LIST SMS EMAIL IAP AVRCP AVRCP_BROWSING A4A CARPLAY ANDROID_AUTO |

### RES_0XA07C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SAFEMODE_HDD | - | - | + | 0-n | - | unsigned char | - | TAB_HDD_ACTIVATION_MODE | - | - | - | liest Status des HDD Safemode aus |

### RES_0XA082_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_DATABASES | - | - | + | 0-n | high | unsigned char | - | TAB_PROCESS_STATUS | - | - | - | Ergebnis des Prozesses |

### RES_0XA09B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEST_TOUCH_COMMAND_ID | - | - | + | 0-n | high | unsigned char | - | TAB_TEST_TOUCH_COMMAND | - | - | - | Gibt den Status von TOUCH COMMAND ID zurück. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0x00 (test not started). |
| STAT_TOUCH_COMMAND_ID_TEXT | - | - | + | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Anzahl der regestrierten Geräte in der HU (VDS)  |

### RES_0XA09C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEST_TOUCH_COMMAND_BATTERY | - | - | + | 0-n | high | unsigned char | - | TAB_TEST_TOUCH_COMMAND | - | - | - | Gibt den Touch Command Battery Status zurück Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt |
| STAT_IDENTIFIER_TOUCH_COMMAND_TEXT | - | - | + | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Touch Command ID  |
| STAT_STAT_BATTERY_LEVEL_TEXT | - | - | + | TEXT | high | string[4] | - | - | 1.0 | 1.0 | 0.0 | Ladezustand der Batterie in Prozent |
| STAT_BATTERY_STATE | - | - | + | 0-n | high | unsigned char | - | TAB_TC_BATTERY_STATE | - | - | - | Status der Batterie/Akku |
| STAT_BATTERY_TMPERATURE_TEXT | - | - | + | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | Temperatur der Batterie/Akku. Antwort in der Einheit °C oder °F  |
| STAT_DURATION_LAST_CHARGE_TEXT | - | - | + | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Gibt die Dauer zum Zeitpunkt des letzten Ladens zurück  Einheit: hh:mm:ss   |
| STAT_BATTERY_SOH | - | - | + | 0-n | high | unsigned char | - | TAB_TC_BATTERY_SOH | - | - | - | Batterie Zustand |

### RES_0XA09D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEST_TOUCH_COMMAND | - | - | + | 0-n | high | unsigned char | - | TAB_TEST_TOUCH_COMMAND | - | - | - | Gibt den Status von TOUCH COMMAND INFO zurück Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0x00 (test not started) |
| STAT_IDENTIFIER_TOUCH_COMMAND_TEXT | - | - | + | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Touch Command ID  |
| STAT_VERSION_APP_TEXT | - | - | + | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | BMW App Version |
| STAT_CPU_SERIAL_NUMBER_TEXT | - | - | + | TEXT | high | string[16] | - | - | 1.0 | 1.0 | 0.0 | Serien Nummer  |
| STAT_WIFI_MAC_ADDRESS_TEXT | - | - | + | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | WLAN Mac Address  |
| STAT_VERSION_ANDROID_TEXT | - | - | + | TEXT | high | string[5] | - | - | 1.0 | 1.0 | 0.0 | System Version Android |
| STAT_VERSION_KERNEL_TEXT | - | - | + | TEXT | high | string[20] | - | - | 1.0 | 1.0 | 0.0 | Kernel Version |
| STAT_SYSTEM_STATE | - | - | + | 0-n | high | unsigned char | - | TAB_TC_SYSTEM_STATE | - | - | - | System Status Tablet |
| STAT_RUN_TIME_TEXT | - | - | + | TEXT | high | string[11] | - | - | 1.0 | 1.0 | 0.0 | System run time  Argument/Result telegram: dd:hh:mm:ss   |
| STAT_TIME_TEXT | - | - | + | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | System Zeitstempel Argument/Result Telegramm: hh:mm:ss  |
| STAT_CPU_TEMPERATURE_TEXT | - | - | + | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | Tablet Temperatur, Antwort in der Einheit °C oder °F  |
| STAT_HARDWARE_MODEL_TEXT | - | - | + | TEXT | high | string[20] | - | - | 1.0 | 1.0 | 0.0 | Produktname Gesamtprodukt |
| STAT_HARDWARE_PRODUCT_TEXT | - | - | + | TEXT | high | string[20] | - | - | 1.0 | 1.0 | 0.0 | Der Name des Gesamtprodukt |

### RES_0XA09E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEST_TOUCH_COMMAND_MEMORY | - | - | + | 0-n | high | unsigned char | - | TAB_TEST_TOUCH_COMMAND | - | - | - | Gibt den Status von TOUCH COMMAND MEMORY zurück Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0x00 (test not started) |
| STAT_IDENTIFIER_TOUCH_COMMAND_TEXT | - | - | + | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Touch Command ID |
| STAT_FREE_ROM_SIZE_TEXT | - | - | + | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz ROM Einheit: MB   |
| STAT_FREE_MEMORY_SIZE_TEXT | - | - | + | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Einheit: MB |
| STAT_FREE_SD_SIZE_TEXT | - | - | + | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz SD-Karte Einheit: MB   |
| STAT_EXT_FREE_SD_SIZE_TEXT | - | - | + | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz ext. SD-Karte Einheit: MB   |

### RES_0XA09F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_TYPE | - | - | + | 0-n | high | unsigned char | - | TAB_WLAN_TYPE | - | - | - | Typ der MAC Addresse |
| STAT_WLAN_MAC_ADDRESS_TEXT | - | - | + | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | angeforderte MAC-Adresse |

### RES_0XA0B4_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INST_ID_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | MOST Instance ID |
| STAT_VISIBLE_CONTEXT_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HMI Menue ID |
| STAT_FOCUS_INDEX_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Index des auswaehlbaren Element der HMI in der angezeigten Tafel |
| STAT_LIST_INDEX_WERT | - | - | + | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Index des auswaehlbaren Element innerhalb der Liste (falls zutreffend) |

### RES_0XA0B7_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COPY_INTERNAL_TRACES | - | - | + | 0-n | high | unsigned char | - | TAB_PROCESS_STATUS | - | - | - | Status des Kopierprozesses |

### RES_0XA0CA_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER | - | - | + | 0-n | - | unsigned char | - | TAB_LUEFTERSTATUS | - | - | - | Status des Lüfters |

### RES_0XA0ED_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT_DEVICE_ADDRESS_TEXT | + | - | - | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | BT Geräteadresse des verbundenen Gerätes; xx:yy:zz:aa:bb:cc |
| STAT_AVERAGE_RSSI_WERT | + | - | - | dBm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RSSI des gewählten Eintrags |
| STAT_AVERAGE_ERROR_RATE_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate des gewählten Eintrags |
| STAT_BT_DEVICE_NAME_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | BT Gerätename des verbundenen Gerätes; xx:yy:zz:aa:bb:cc |
| STAT_BT_PHONE_MODEL_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | BT Gerätemodell des verbundenen Gerätes |
| STAT_BT_PHONE_SOFTWARE_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | BT Gerätesoftware des verbundenen Gerätes |

### RES_0XA0F5_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_DEVICELIST_MAC_TEXT | + | - | - | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | MAC-Adresse des WLAN-Gerätes vom angeforderten HMI WLAN-Gerätelisteneintrag |
| STAT_WLAN_DEVICE_NAME_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Gerätename des WLAN-Gerätes vom angeforderten HMI WLAN-Gerät Listeneintrag. |

### RES_0XA0F6_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HU_VIN_PROTECTION | - | - | + | 0-n | high | unsigned char | - | TAB_VIN_PROTECTION | - | - | - | liest den Status des Auslesens der VIN |

### RES_0XA0F7_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HU_FSC_REFURBISH_UI_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert des nötigen Index, der in der HU gespeichert ist |

### RES_0XA0F8_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FM | - | - | + | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Status der Aktivierung der Entertainmentquelle FM |

### RES_0XA0F9_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | - | - | + | Bit | - | BITFIELD | - | BF_AUDIOSINKS | - | - | - | mute Status der aktuellen Entertainmentquelle |

### RES_0XA0FB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HU_FSC_REFURBISH_VIN_TEXT | - | - | + | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | Wert der geschützten VIN, die in der HU gespeichert ist |

### RES_0XA0FD_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERROR_CODE_WERT | + | + | + | HEX | high | unsigned char | - | - | - | - | - | Fehlercode |
| STAT_SECURITY_DEBUG_MODE | - | - | + | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Status des Zugangs zur seriellen Schnittstelle |

### RES_0XA10B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_USB_MAP_UPDATE | - | - | + | 0-n | high | unsigned char | - | TAB_TESTSTATUS | - | - | - | State of the USB navigation map update |

### RES_0XA144_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SXM_PREACTIVATION_MODE_STATE | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0b1: MPFA aktiviert. 0b0: MPFA nicht aktiviert. |
| STAT_SXM_MPFA | - | - | + | 0-n | high | unsigned char | - | TAB_MPFA | - | - | - | Gibt zuletzt aktiviertes Kanal-Paket zurück, auch wenn nicht aktiviert. |
| STAT_SXM_MPFA_COMPLETNESS | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Gibt an, ob die Berechnung des Pellets und die Aktivierung des Sender-Pakets beendet ist. 0 = nicht fertig oder nicht ausgeführt 1 = fertig |

### RES_0XA169_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEST_VERBAU_ANTENNA | - | - | + | 0-n | high | unsigned char | - | TAB_TEST_STATUS | - | - | - | Ergebnis der SDARS Antennenprüfung durch STEUERN_TEST_VERBAU_ANTENNA |
| STAT_TEST_VERBAU_ANTENNA_FAILURE_SDARS | - | - | + | 0-n | high | unsigned char | - | TAB_TEST_ANTENNA_SDARS | - | - | - | Ergebnis der SDARS Antennenprüfung durch Diag.-Job STEUERN_TEST_VERBAU_ANTENNA. |

### RES_0XA19A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACCOUNT_CREATION | - | - | + | 0-n | high | unsigned char | - | TAB_TESTSTATUS | - | - | - | Status des Generierungsprozesses |
| STAT_PERSONALISATION_ACCOUNT_ID_TEXT | + | - | + | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | ID des generierten - bzw. des in Generierung befindenden Accounts wenn verfügbar. |

### RES_0XA19B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_PERSONALISATION | - | - | + | 0-n | high | unsigned char | - | TAB_PROCESS_STATUS | - | - | - | Status des Löschvorgangs |

### RES_0XA665_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEC_SYSTEM_TIME_TEXT | - | - | + | TEXT | high | string[18] | - | - | 1.0 | 1.0 | 0.0 | Linux System Zeit vom Backend |
| STAT_COUNTER_LAST_SYNC_WERT | - | - | + | HEX | high | unsigned long | - | - | - | - | - | Zähler letzte Syncronisation. |
| STAT_QUALITY_INDICATOR | - | - | + | 0-n | high | unsigned char | - | TAB_SECTIMEQUALITY | - | - | - | Secure Time Qualitätsmerkmal |
| STAT_QUERY_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_SECTIMEQUERYSTATUS | - | - | - | Status der letzten Anfrage |
| STAT_SEC_TIME_URL_TEXT | - | - | + | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Verwendete URL für die Secure Time Backend Anfrage. |

### RES_0XA66F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SECURE_BOOT_STATE | + | - | - | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Rückgabe des SECURE_BOOT_STATE EIN wenn Secure Boot freigegeben ist. Rückgabe des SECURE_BOOT_STATE AUS wenn Secure Boot nicht freigegeben ist. |

### RES_0XA670_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | ID um den Intel Debug Token via B2B zu generieren. |

### RES_0XA671_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | ID zum generieren des BMW Debug Token via B2B. |

### RES_0XD00C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAUTE_LAUFWERKE | 0-n | - | unsigned char | - | TAB_LAUFWERK | - | - | - | liest aus, welches Laufwerk verbaut ist |
| STAT_VENDORID_ODD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | gibt die VENDORID des optischen Laufwerks aus |
| STAT_PRODUCTID_ODD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | gibt die PRODUCTID des optischen Laufwerks aus |
| STAT_FIRMWARE_ODD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | gibt die Firmware-Version des optischen Laufwerks aus |

### RES_0XD021_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_APPL_1 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_1 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_1 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_2 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_2 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_2 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_3 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_3 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_3 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_4 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_4 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_4 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_5 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_5 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_5 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_6 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_6 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_6 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_7 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_7 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_7 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_8 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_8 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_8 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_9 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_9 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_9 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_10 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_10 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_10 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_11 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_11 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_11 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_12 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_12 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_12 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_13 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_13 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_13 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_14 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_14 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_14 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_15 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_15 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_15 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_16 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_16 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_16 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |

### RES_0XD02C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISC_IDENT_TEXT | TEXT | - | string[13] | - | - | 1.0 | 1.0 | 0.0 | Disk Identifier für das beinhaltete Medium |
| STAT_DIGITAL_PLAYBACK_QUALITY_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualität der digitalen Aufnahme:  0-1: Medium nicht lesbar (drive not ok) 2-8: Verzerrung / Stumm Stellen hörbar (drive not ok) 9-14: Medium lesbar, keine Verzerrung hörbar (drive ok) 15: Medium Qualität 100%, z.B. BLER 0 (drive ok) |

### RES_0XD0A3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_ACTIVATION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Aktivierungswert |

### RES_0XD0A5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_LABEL_PIN_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Wert vom angezeigtem PIN |

### RES_0XD0CE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VIN_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | Fahrgestellnummer |
| STAT_CURRENT_PROV_ID_TEXT | TEXT | high | string[29] | - | - | 1.0 | 1.0 | 0.0 | ID der aktuell verwendeten Provisionierung, ermittelt aus der XML OTA Datei und dem Wert uuid aus dem [bmwprov] XML Tag. |
| STAT_SMCC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | SIM Mobile Länderkode |
| STAT_SMNC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | SIM Mobile Netzwerkkode |
| STAT_ECU_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Typ des Steuergeräts |
| STAT_HW_PU_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Hardware Bauphase des Steuergeräts |
| STAT_SW_PU_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Software Bauphase des Steuergeräts |
| STAT_SW_VERSION_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Software Version des Steuergeräts |
| STAT_EUICC_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | EUICC - ID |
| STAT_ICC_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | ICC - ID |
| STAT_IMEI_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | IMEI |
| STAT_SERIAL_NUMBER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Seriennummer des Steuergeräts |
| STAT_HMI_VERSION | 0-n | high | unsigned char | - | TAB_HMIVERSION | - | - | - | Aktuelle HMI-Version des Steuergeräts |

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
| STAT_VIN_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | 17-stellige Fahrgestellnummer |
| STAT_CURRENT_PROV_ID_TEXT | TEXT | high | string[29] | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Provisioning-ID |
| STAT_PROVISIONING | 0-n | high | unsigned char | - | TAB_PROVISIONING_STATUS | - | - | - | Status vom Schreibvorgang der Provisionierungsdaten. |

### RES_0XD1F8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_PAIRABLE | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Status des WLAN pairable mode |

### RES_0XD1FA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_CODED_2_4_GHZ | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | WLAN Band 2,4 GHz |
| STAT_WLAN_CODED_5_0_GHZ | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | WLAN Band 5 GHz |

### RES_0XD20E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_AP_SSID_TEXT | TEXT | high | string[32] | - | - | 1.0 | 1.0 | 0.0 | SSID vom AP Netzwerk |
| STAT_WLAN_AP_ENCRYPTION | 0-n | high | unsigned char | - | TAB_WLAN_ENCRYPTION | - | - | - | Typ der Verschlüsselung vom AP Netzwerk |
| STAT_WLAN_AP_NETWORK_KEY_TEXT | TEXT | high | string[64] | - | - | 1.0 | 1.0 | 0.0 | Schlüssel des AP Netzwerk |

### RES_0XD27E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGISTER1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 1 |
| STAT_REGISTER2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 2 |
| STAT_REGISTER3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 3 |
| STAT_REGISTER4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 4 |
| STAT_REGISTER5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 5 |
| STAT_REGISTER6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 6 |
| STAT_REGISTER7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 7 |
| STAT_REGISTER8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 8 |
| STAT_REGISTER9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 9 |
| STAT_REGISTER10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 10 |
| STAT_REGISTER11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 11 |
| STAT_REGISTER12_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 12 |
| STAT_REGISTER13_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 13 |
| STAT_REGISTER14_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 14 |
| STAT_REGISTER15_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 15 |
| STAT_REGISTER16_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 16 |
| STAT_REGISTER17_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 17 |
| STAT_REGISTER18_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 18 |
| STAT_REGISTER19_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 19 |
| STAT_REGISTER20_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register20 |
| STAT_REGISTER21_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 21 |
| STAT_REGISTER22_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 22 |
| STAT_REGISTER23_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 23 |
| STAT_REGISTER24_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 24 |
| STAT_REGISTER25_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 25 |
| STAT_REGISTER26_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 26 |
| STAT_REGISTER27_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 27 |
| STAT_REGISTER28_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 28 |
| STAT_REGISTER29_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 29 |
| STAT_REGISTER30_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 30 |
| STAT_REGISTER31_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 31 |
| STAT_REGISTER32_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 32 |

### RES_0XD28A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GPS_FIX | 0-n | high | unsigned char | - | TAB_FIXQ | - | - | - | GPS Standortbestimmung |
| STAT_GPS_DATE_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | GPS Datum (JJJJMMTT) |
| STAT_GPS_TIME_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | GPS Zeit |
| STAT_GPS_LATITUDE_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Latitude |
| STAT_GPS_LONGITUDE_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Longitude |
| STAT_GPS_HEADING_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | GPS Rubrik |
| STAT_GPS_HEIGHT_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | GPS Höhe |
| STAT_GPS_SIGNAL_QUALITY | 0-n | high | unsigned char | - | TAB_GPSSIGQ | - | - | - | GPS Signalqualität |

### RES_0XD3DE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT_SSP_DEBUG_MODE | 0-n | high | unsigned char | - | TAB_BT_DEBUG_MODE | - | - | - | Status SSP debug mode |

### RES_0XDAE6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INTERNAL_TRACE | 0-n | high | unsigned char | - | TAB_STATUS_INTERNAL_TRACE | - | - | - | Status des internen Tracens/ Tracinginstanzen |
| STAT_TRACE_PARTITION_SIZE_WERT | MByte | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Groesse der Log und Trace Partition in MByte |
| STAT_TRACE_PARTITION_USED_WERT | MByte | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Belegte Groesse der Log und Trace Partition in MByte  |
| STAT_IP_ADDRESS_INST_1_TEXT | TEXT | high | string[15] | - | - | 1.0 | 1.0 | 0.0 | Gibt die IP Adresse der gespeicherten Instanz/Traces zurück  |
| STAT_PORT_INST_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port der aufgezeichneten Traces/Instanz |
| STAT_IP_ADDRESS_INST_2_TEXT | TEXT | high | string[15] | - | - | 1.0 | 1.0 | 0.0 | Gibt die IP Adresse der gespeicherten Instanz/Traces zurück  |
| STAT_PORT_INST_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port der aufgezeichneten Traces/Instanz |
| STAT_IP_ADDRESS_INST_3_TEXT | TEXT | high | string[15] | - | - | 1.0 | 1.0 | 0.0 | Gibt die IP Adresse der gespeicherten Instanz/Traces zurück  |
| STAT_PORT_INST_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port der aufgezeichneten Traces/Instanz |

### RES_0XE2CD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODUL_TYPE_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Modul Typ ID |
| STAT_MODUL_HW_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Modul Hardware Referenz |
| STAT_MODUL_SW_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Modul Software Referenz |
| STAT_SXI_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | SXI Referenz |
| STAT_BB_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | BB Referenz |
| STAT_HDEC_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | HDEC Referenz |
| STAT_RF_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | RF Referenz |

### RES_0XE39E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CARPLAY_ACTIVATION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Status Aktivierung |

### RES_0XF004_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NAVI_MAP | - | - | + | 0-n | - | unsigned char | - | TAB_NAVI_MAPSTATUS | - | - | - | Status Kunden Navigation Karte |

### RES_0XF005_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INITIALISATION_COUNTER_REGION_CODE_DVD_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert Änderungszähler vom DVD Ländercode |
| STAT_INITIALISATION_COUNTER_REGION_CODE_BD_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert Änderungszähler vom DVD Ländercode |

### RES_0XF01C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EXPORT_CORE_DUMPS | - | - | + | 0-n | high | unsigned char | - | TAB_PROCESS_STATUS | - | - | - | Status der exportiertenl core dumps |

### RES_0XF020_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BOARD_TEMP_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | gemessene Temperatur vom Board in Grad Celsius |
| STAT_SIMULATION_DURATION_1_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | verbleibende Simulationsdauer in Sekunden |
| STAT_CPU_TEMP_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | gemessene Temperatur von der CPU in Grad Celsius |
| STAT_SIMULATION_DURATION_2_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | verbleibende Simulationsdauer in Sekunden |
| STAT_HDD_TEMP_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | gemessene Temperatur von der HDD in Grad Celsius |
| STAT_SIMULATION_DURATION_3_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | verbleibende Simulationsdauer in Sekunden |
| STAT_OPTICAL_DISC_DRIVE_TEMP_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | gemessene Temperatur vom optischen Laufwerk in Grad Celsius |
| STAT_SIMULATION_DURATION_4_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | verbleibende Simulationsdauer in Sekunden |

### RES_0XF032_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AV_CONNECTION_ERROR | + | - | - | 0-n | high | unsigned char | - | TAB_AVCONERROR | - | - | - | Quellennummer der Haupt AV- Verbindung.  |

### RES_0XFD5C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ETHERNET_WAKEUP_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | EthernetWakeUpCounter |
| STAT_STARTUP_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | StartupCounter |
| STAT_OPERATING_TIME_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | OperatingTimeCounter |
| STAT_RESET_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ResetCounter |
| STAT_FAN_STEP_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | FanStepCounter |
| STAT_USB_PLUGIN_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | USBPlugInCounter |
| STAT_OPTICAL_LASER_DIOD_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | OpticalLaserDiodCounter |
| STAT_OPTICAL_INSERT_EJECT_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | OpticalInsertInjectCounter |
| STAT_BDROM_HIGH_POWER_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | BDROMHighPowerCounter |
| STAT_HDD_START_STOP_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HDDStartStopCounter |
| STAT_HDD_SECTOR_RETRY_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HDDSectorRetryCounter |
| STAT_HDD_SEEK_ERROR_RATE_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HDDSeekErrorRateCounter |
| STAT_HDD_POWER_CYCLE_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HDDPowerCycleCounter |
| STAT_RESERVE_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ReserveCounter |
| STAT_TEST_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | TestCounter |
| STAT_FRONT_KEY_WAKE_UP_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | FrontKeyWakeUpCounter |

### RSU_TEST_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Starte Standard RSU Ablauf |
| 0x01 | Starte RSU Ablauf von USB |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXTERNAL_HSFZ | 0x1023 | - | DOORS-ID: FZHS_5992 | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1023_R | - |
| RESET_AKTIVIERUNGSLEITUNG | 0x1024 | - | Reset_Aktivierungsleitung DOORS-ID: FZHS_3798 | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_PWF_MESSEMODUS | 0x102F | - | Dieser RID wird zum Setzden des Messemodus im PWF-Master verwendet. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x102F_R | - |
| TASU_STEUERN_STATUS | 0x1032 | - | RID zum Steuern des TASU bzw. Abfragen von dessen Status. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1032_R | RES_0x1032_R |
| TAS_REQUEST | 0x1033 | - | Der RID wird verwendet, um ein Steuergerät zu veranlassen, einen Auftrag an den TAS zu schicken. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1033_R | - |
| ETH_CABLE_DIAG | 0x1046 | - | Startet die Kabeldiagnose des PHYs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1046_R | RES_0x1046_R |
| ETH_PHY_IDENTIFIER | 0x1047 | - | Gibt den eindeutigen PHY-Identifier zurück. Dieser wird durch den 24 Bit langen Organizationally Unique Identifier (OUI), die 6 Bit lange Manufacturer's Model Number sowie die 4 Bit lange Revision Number gebildet. Die Werte sind standardisiert und stets in Register 2 und 3 des PHYs enthalten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1047_R | RES_0x1047_R |
| ETH_GET_PORT_TX_RX_STATS | 0x1049 | - | Liest die Anzahl der verschickten und empfangenen Pakete, die Anzahl verworfenen Pakete und die Anzahl der übertragenen und empfangenen Bytes. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1049_R | RES_0x1049_R |
| ETH_RESET_PORT_CONFIGURATION | 0x104A | - | Setzt die gespeicherte Portkonfiguration zurück. Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_RESET_PORT_TX_RX_STATS | 0x104B | - | Setzt die Receive- und Transmitzähler eines Switchs zurück. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_ENABLE_TEST_MODE | 0x104C | - | Schaltet den PHY in den Testmode | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104C_R | RES_0x104C_R |
| RSU_TEST_MODE | 0x107E | - | Setzt / löscht ein Flag, welches beim nächsten Prozessstart dafür sorgt, dass der Ablauf in einem Test-Modus gestartet wird oder nicht. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x107E_R |
| RSU_PROCESS | 0x107F | - | Startet / stoppt den RSU Standard Ablauf oder den Offline RSU Ablauf von einem USB-Stick. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x107F_R |
| CERTIFICATE_MANAGEMENT_START_CHECK | 0x10AB | - | Startet die detaillierte Überprüfung der steuergeräteindividuellen Zertifikate. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x10AB_R |
| IPSEC_START_KEY_EXCHANGE | 0x1111 | - | Startet den IPsec-Schlüsselaustausch. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1111_R |
| IPSEC_STOP_KEY_EXCHANGE | 0x1112 | - | Stoppt den IPsec-Schlüsselaustausch. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1112_R |
| IPSEC_LOCK_CONFIGURATION | 0x1113 | - | Verriegeln der IPsec-Konfiguration. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1113_R |
| ETH_GET_NUMBER_OF_PORTS | 0x1800 | STAT_NUM_PORTS_WERT | Anzahl der Ports | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_PHY_LINK_STATE | 0x1802 | - | Gibt den aktuellen Link-Status aller physikalisch vorhandenen Ports zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1802_D |
| ETH_LEARN_PORT_CONFIGURATION | 0x1803 | - | Gibt die gelernte Port-Konfiguration des SGs zurück.  Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1803_D |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| STATUS_PWF_MESSEMODUS | 0x2532 | STAT_PWF_MESSEMODUS | Das Result enthält den aktuellen PWF_Messemodus | 0-n | - | High | unsigned char | PWF_MESSEMODUS | - | - | - | - | 22 | - | - |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| COUNTER_FILES_MUSICDB | 0x4009 | STAT_MUSICDB_STORED_FILES_WERT | Anzahl der Dateien die in der Musik DB gespeichert sind | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SENSOR_WERTE | 0x400A | - | gefilterte interne Sensorwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400A_D |
| TESTBILD_ERWEITERT | 0x400B | - | Anzeige von Testbildern | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400B_D | - |
| RGB_SCREEN | 0x400C | - | gewünschte Farbe des Bildes Test durch die RGB-Werte übergeben | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400C_D | - |
| TEMPERATURPROFIL_STEUERN | 0x400D | - | Temperaturschalter und die entsprechenden Temperaturgrenzwerte | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400D_D | - |
| CID_SW_VERSION | 0x400E | - | CID SW- Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400E_D |
| INTERNAL_STATES | 0x400F | - | wichtiger interner Status vom CID SW Bus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400F_D |
| CID_CODIERDATEN | 0x4010 | - | Overwrites / Reads CID coding data in RAM temporarily | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010_D |
| CID_DETAIL_INFORMATION_EXTENDED | 0x4011 | - | erweiterte logistische Information des CID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4011_D |
| CID_PHOTOSENSOR | 0x4020 | STAT_PHOTOSENSOR_CID_WERT | Analogwert Fototransistor im CID | lx | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_TEMP_BACKLIGHT | 0x4021 | STAT_TEMP_BACKLIGHT_WERT | Temperatur Hintergrundbeleuchtung | °C | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_SOLLWERT | 0x4022 | STAT_HELLIGKEIT_SOLL_WERT | Soll-Helligkeitswert vom Dimm-Modul | % | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_ISTWERT | 0x4023 | STAT_HELLIGKEIT_IST_WERT | Ist-Helligkeitswert | % | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_EINGANGSWERTE_LESEN | 0x4024 | - | Returns all input values provided to the CID-SW from external ECUs via the HU car network interface or the HU itself.  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4024_D |
| CID_DETAIL_INFORMATION | 0x4025 | - | Returns the basic logistic information of the currently connected CID. This job is a mandatory diagnostic service of intelligent actors/sensors. The CID is rated as an intelligent actor/sensor. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4025_D |
| WLAN_SIGNAL_TEST_PAGE1 | 0x4044 | - | 1. Satz der Statistik über WLAN Verbindungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4044_D |
| POWERON | 0x404A | - | Power On und Lifecycles | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404A_D |
| VERSORGUNGSSPANNUNG | 0x404B | STAT_MILLI_VOLT_WERT | Spannung in mV | mV | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EMMC_REGISTER_CID | 0x404E | STAT_CID_REGISTER_DATA | Inhalt des Geräte-ID-Registers (CID-Register) des eMMC | DATA | - | High | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WLAN_BT_LOGISTIC | 0x4052 | - | WLAN/BT Informationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4052_D |
| WLAN_SIGNAL_TEST_PAGE2 | 0x4053 | - | 2. Satz der Statistik über WLAN Verbindungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4053_D |
| TEMPERATURPROFIL_STATUS | 0x406B | - | Rückgabe der entsprechenden Temperaturgrenzwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x406B_D |
| AUDIOTEST | 0x407C | - | Audio Test | - | - | - | - | - | - | - | - | - | 2E | ARG_0x407C_D | - |
| CDC_TRIGGER_CAMPAIGN_REQUEST | 0x4105 | - | Der Service triggert den CDC Campaign Manager zum senden eines campaign request an das Backend. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4105_D | - |
| CDC_CLEAR_EVENTBUFFER | 0x4106 | - | Löschen des CDC event buffers der HeadUnit | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4106_D | - |
| VOLUMEAUDIO_DEFAULT | 0xA002 | - | zurücksetzen aller Lautstärkewerte auf Default-Werte | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LINEAR | 0xA004 | - | Zurücksetzen der Fader und Lautstärke auf Default-Werte | - | - | - | - | - | - | - | - | - | 31 | - | - |
| VIDEOVERBINDUNG | 0xA01C | - | Steuern, Stoppen und Abfragen einer Videoverbindung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01C_R | RES_0xA01C_R |
| TEST_VIDEOEINGANG | 0xA01D | - | Test der Videoeingänge | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01D_R | RES_0xA01D_R |
| TEST_VERBAU | 0xA01E | - | Verbauprüfung der externen Anschlüsse | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01E_R | RES_0xA01E_R |
| LANGUAGE | 0xA025 | - | MMI Sprache | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA025_R | RES_0xA025_R |
| NAVI_SPEECH | 0xA027 | - | Testet die Sprachausgabe des Navi | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA027_R | - |
| PROVISIONING | 0xA02F | - | Provisionierungsprozess | - | - | - | - | - | - | - | - | - | 31 | - | - |
| VOLUMEAUDIO | 0xA036 | - | Lautstärke einer ausgewählten Audioquelle | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA036_R | - |
| TRACK_NUMBER | 0xA037 | - | CD/DVD-Tracknummer | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA037_R | - |
| VOLUMEAUDIO_LESEN | 0xA039 | - | ausgewählte Lautstärke auslesen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA039_R | RES_0xA039_R |
| LUEFTER_RPM | 0xA03C | - | Lüfter | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03C_R | RES_0xA03C_R |
| BT | 0xA048 | - | BT- Aktivierung/ Deaktivierung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA048_R | RES_0xA048_R |
| BT_ERKENNUNGSMODUS | 0xA049 | - | Bluetooth- Erkennungsmodus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA049_R | RES_0xA049_R |
| BT_READ_PHONE_ID | 0xA04A | - | Telefon ID | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA04A_R | RES_0xA04A_R |
| SAFEMODE_HDD | 0xA07C | - | HDD Safe Mode | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA07C_R | RES_0xA07C_R |
| FACTORY_RESET | 0xA082 | - | persönliche Telefoneinstellungen und API-Funktionen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA082_R |
| TOUCH_COMMAND_ID | 0xA09B | - | Routine um verbundene Geräte zu ermitteln | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA09B_R | RES_0xA09B_R |
| TOUCH_COMMAND_BATTERY | 0xA09C | - | Routine um Informationen zum Batteriestatus des verbundenen Tablet auszulesen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA09C_R | RES_0xA09C_R |
| TOUCH_COMMAND_INFO | 0xA09D | - | Routine um Informationen über den Status des verbundenen Tablet auszulesen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA09D_R | RES_0xA09D_R |
| TOUCH_COMMAND_MEMORY | 0xA09E | - | Routine um Speicherinformationen des verbundenen Tablet auszulesen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA09E_R | RES_0xA09E_R |
| WLAN_MAC_ADDRESS | 0xA09F | - | MAC Addresse | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA09F_R | RES_0xA09F_R |
| GRAPHICAL_CONTEXT | 0xA0B4 | - | HMI Sprung direkt zu den Menüs / Listeneinträgen und HMI Grafische Kontextbedingungen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0B4_R | RES_0xA0B4_R |
| INTERNAL_TRACES_COPY | 0xA0B7 | - | Startet, die intern gespeicherten Traces auf extern angeschlossenen Massenspeichergerät am USB1 zu kopieren (KDZ1) | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0B7_R |
| WLAN_WPS_PUSH_BUTTON | 0xA0BB | - | Trigger the button push for WPS Push Button pairing. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| INTERNAL_TRACE_DISABLE_UNCONDITIONAL_TRACING | 0xA0BC | - | Legt das irreversible Flag für die Aktivierung der internen Ablaufverfolgung unter 255 km auf False. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LUEFTER | 0xA0CA | - | Lüftersteuerung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0CA_R | RES_0xA0CA_R |
| APIX_PRBS_CHECK | 0xA0DF | - | PRBS Check in CID und HU | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0DF_R | - |
| DELETE_WLAN_DEVICE | 0xA0EB | - | Löschen der WLAN Geräte | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0EB_R | - |
| DELETE_BT_DEVICE | 0xA0EC | - | löscht die BT Geräte | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0EC_R | - |
| INFO_BT_DEVICE | 0xA0ED | - | Info über BT Geräte | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0ED_R | RES_0xA0ED_R |
| INFO_WLAN_DEVICE | 0xA0F5 | - | Info vom WLAN Gerät | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0F5_R | RES_0xA0F5_R |
| HU_VIN_PROTECTION | 0xA0F6 | - | VIN Schutz in Kombination mit BDC 2013/2015/2018  | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0F6_R |
| HU_FSC_REFURBISH_UI | 0xA0F7 | - | Auslesen FSC UI | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0F7_R |
| FM | 0xA0F8 | - | Entertainmentquelle FM | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0F8_R |
| MUTE | 0xA0F9 | - | Mutestatus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0F9_R | RES_0xA0F9_R |
| LOAD_POSITIONING_DEFAULTS | 0xA0FA | - | Default Kalibrierung | - | - | - | - | - | - | - | - | - | 31 | - | - |
| HU_FSC_REFURBISH_VIN | 0xA0FB | - | Wert der geschützten VIN | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0FB_R |
| SECURITY_DEBUG_MODE | 0xA0FD | - | Steuerung des Debug Mode | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0FD_R | RES_0xA0FD_R |
| SINUSAUSGABE | 0xA0FE | - | Sinuston für 1 oder mehrere Kanäle | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0FE_R | - |
| HU_VIN_PROTECTION_ENFORCE_CYCLIC | 0xA109 | - | This diagnosis job starts a cyclic-phase inclusive debouncing within the current life cycle for the internal trusted VIN mechanism. There is no debouncing over several life cycles in this case. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| USB_MAP_UPDATE | 0xA10B | - | Startet das USB basierte Kartenupdate der Navigation-Datenbank | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA10B_R |
| TUNER_SDARS_PREACTIVATION_MPFA | 0xA144 | - | Steuert die Standard-Händler-Aktivierung des SDARS-Empfangs (eingschränkte Kanal-Anzahl für Demonstrationszwecke). MPFA = Multi Package Factory Activation | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA144_R | RES_0xA144_R |
| SHOWROOM_SMART_INTERIEUR | 0xA15F | - | Auslösen intelligenter Interieurfunktionen für den Showroom-Modus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA15F_R | - |
| TEST_VERBAU_SDARS_ANTENNA | 0xA169 | - | Verbindungsprüfung der SDARS Antenne | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA169_R |
| PERSONALISATION_CREATE_LOCAL_ACCOUNT | 0xA19A | - | Lokaler Account für die Personalisierung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA19A_R |
| PERSONALISATION_DELETE_ACCOUNTS | 0xA19B | - | Zurücksetzen der Personalisierungs-Accounts | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA19B_R |
| PERSONALISATION_ASSIGN_KEY | 0xA1BD | - | Zuordnung des aktuell vorhandenen Personalisierungs Schlüssel | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SECURITY_GET_SECURE_TIME | 0xA665 | - | Secure Time from Backend | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA665_R |
| INTEL_KEYSTORE_INITIALIZE | 0xA66C | - | Reinitialisierung Intel Keystore  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| INTEL_DEBUG_TOKEN_DELETE | 0xA66E | - | Löschen des Intel Debug Token. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| INTEL_SECURE_BOOT | 0xA66F | - | Rückgabe des SECURE_BOOT_STATE  | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA66F_R |
| INTEL_DEBUG_TOKEN_ID | 0xA670 | - | ID um den Intel Debug Token zu generieren | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA670_R |
| SECURITY_DEBUG_MODE_ID | 0xA671 | - | ID zum generieren des BMW Debug Token. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA671_R |
| LESEN_SYSTEMAUDIO | 0xD002 | STAT_AUDIO_SYSTEM | bezeichnet das Lautsprechersystem | 0-n | - | - | unsigned char | TAB_AUDIOSYSTEM_ALEV | - | - | - | - | 22 | - | - |
| INITIALISIERUNG | 0xD004 | STAT_INITIALISIERUNG | Initialisierungsstatus | 0-n | - | - | unsigned char | TAB_INITIALISIERUNG | - | - | - | - | 22 | - | - |
| LESEN_LAUFWERK | 0xD00C | - | Verbau Laufwerke | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD00C_D |
| SER_NR_DOM_LESEN | 0xD019 | STAT_SER_NR_DOM_TEXT | liest die Seriennummer mit 14 Zeichen (DIN ISO 10 486) | TEXT | - | - | string[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BT_GERAETEADRESSE | 0xD01A | STAT_BT_GERAETEADRESSE_TEXT | liefert die Adresse des Bluetooth Gerätes | TEXT | - | - | string[17] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BT_GERAETENAME | 0xD01C | STAT_BT_GERAETENAME_TEXT | liest den Bluetooth Gerätenamen | TEXT | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| APPLICATION | 0xD021 | - | Status aller freischaltbaren Applikationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD021_D |
| CD_MD_CDC | 0xD02C | - | ID des Mediums und das Qualitätslevel der digitalen Aufnahme aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD02C_D |
| MAPMATERIAL_VERSION | 0xD03C | STAT_MAPMATERIAL_VERSION_TEXT | Version der Navidatenbank | TEXT | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HMI_VERSION | 0xD03F | STAT_HMI_VERSION_TEXT | Akuelle HMI Version als String, wie im Entwicklermenü angezeigt | TEXT | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TIME_AFTER_STARTUP | 0xD092 | STAT_TIME_AFTER_START_UP_WERT | Werte von 0-65535 [s], die angeben, wie viel Zeit seit dem Hochstarten (Aufwecken) vergangen ist | s | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WLAN_ACTIVATION | 0xD0A3 | - | WLAN Zustand | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD0A3_D | RES_0xD0A3_D |
| WLAN_LABEL_PIN | 0xD0A5 | - | label pin in der HU für WIFI Direct | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD0A5_D | RES_0xD0A5_D |
| PROVISIONING_PARAMETER | 0xD0CE | - | Liest die Parameter der Provisionierung aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0CE_D |
| MEDIA_STATISTIK | 0xD0D1 | - | CD/DVD Mediastatistik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0D1_D |
| PROVISIONING_DATA | 0xD0D3 | - | Liest Status des Schreibens der Provisionierungsdatei. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0D3_D |
| DRIVE | 0xD0E2 | STAT_MEDIUM_INSERTED | Informationen, ob und welche Art von Datenträger im Laufwerk eingelegt ist. | 0-n | - | - | unsigned char | TAB_INSERTED_MEDIUM | - | - | - | - | 22 | - | - |
| INTERNAL_TRACE | 0xD1DE | - | Status des internen Tracen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD1DE_D | - |
| WLAN_PAIRABLE | 0xD1F8 | - | Pairing Modus für WLAN | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD1F8_D | RES_0xD1F8_D |
| WLAN_AUSSTATTUNG | 0xD1FA | - | Präsenz der verschiedenen WLAN-Modi | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1FA_D |
| WLAN_AP_NETWORK | 0xD20E | - | aktuelle AP Netzwerkparameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD20E_D |
| EJECT | 0xD226 | - | wirft das Medium aus dem ausgewählten Laufwerk aus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD226_D | - |
| CID_TOUCHINDICATOR | 0xD25B | - | aktivieren/ deaktivieren des Touch/Proximity Indikators | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD25B_D | - |
| TOUCH_COMMAND_NUMBER | 0xD26A | STAT_CONNECTED_TOUCH_COMMAND_TEXT | Gibt die Anzahl der verbundenen Touch Command Geräten zurück | TEXT | - | High | string[2] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| APIX_REGISTERS_TX | 0xD27E | - | Werte vom Konfigurationsregister und Statusregister der APIX-Geräte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD27E_D |
| GNSS | 0xD28A | - | GPS Datum und Zeit (UTC), Position (Latitude/Longitude/Höhe), Fix-Typ, Anzahl der sichtbaren Satelliten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD28A_D |
| WLAN_CONFIRMATION_REQUIRED | 0xD28B | STAT_WLAN_CONFIRMATION_REQUIRED | zeigt an, ob WPS (WPS_PUSH_BUTTON) erfolgreich war | 0-n | - | High | unsigned char | TAB_OKNOK | - | - | - | - | 22 | - | - |
| WLAN_GERAETENAME | 0xD28C | STAT_WLAN_GERAETENAME_TEXT | liest den WLAN Gerätenamen | TEXT | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BT_SSP_DEBUG_MODE | 0xD3DE | - | Aktibierung/Deaktivierung des SSP debug mode (BT air traces). | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD3DE_D | RES_0xD3DE_D |
| HU_VIN_PROTECTION_PARAMETER | 0xD3E2 | - | Setzen der internen Startzeit für den VIN Sicherheitsmechanismus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3E2_D | - |
| CID_TESTBILD | 0xD5C1 | - | Testbild-Ausgabe vom CID | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C1_D | - |
| CID_STEUERN | 0xD5C2 | - | CID Display and CID Hintergrundbeleuchtung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C2_D | - |
| CID_BACKLIGHT | 0xD5C4 | - | Hintergrundbeleuchtung des CIDs | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C4_D | - |
| CID_STEUERN_ENDE | 0xD5C9 | - | CID Diagnosemode beenden | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C9_D | - |
| INTERNAL_TRACE_STATUS | 0xDAE6 | - | Gibt Informationen zum internen Tracing zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAE6_D |
| KOMP_ID | 0xDFFE | STAT_KOMP_ID_TEXT | gibt das Map-Format entsprechend der Kartennummerierung von der Warehouse-Übersicht zurück | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_SDARS_GET_SXM_PHONENUMBER | 0xE2C9 | STAT_SXM_TEL_NO_TEXT | SXM-Telefonnummer (max. 35-stellig) | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_SDARS_SET_SXM_PHONENUMBER | 0xE2CA | - | Schreibt die angegebene SXMTelefonnummer in das Modul. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE2CA_D | - |
| TUNER_SDARS_GET_RADIO_ID | 0xE2CB | STAT_RADIO_ID_TEXT | Radio ID als String | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_SDARS_GET_PELLET | 0xE2CC | STAT_SXM_PELLET_TEXT | Eindeutiger Wert, der aus Radio ID und MPFA (Multi Package Factory Activation) berechnet wird. String mit 100Byte Länge | TEXT | - | High | string[100] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_SDARS_GET_SOFTWARE_VERSION | 0xE2CD | - | Liest alle für SDARS relevanten Softwareversionen aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2CD_D |
| TUNER_SDARS_ANTENNA_COMMUNICATION | 0xE2F1 | STAT_SDARS_ANTENNA_COMMUNICATION | Kommunikationsstatus zwischen der SDARS Applikation und dem SDARS Modul bezüglich der SDARS Antennen Diagnose. | 0-n | - | High | unsigned char | TAB_SDARS_ANTENNA_COMMUNICATION | - | - | - | - | 22 | - | - |
| PERSONALISATION_LOGIN_ACCOUNT | 0xE334 | - | Aktivierung des gewählten Personalisierungs Account | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE334_D | - |
| CARPLAY_ACTIVATION | 0xE39E | - | CarPlay Zustand | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE39E_D | RES_0xE39E_D |
| NAVI_MAP | 0xF004 | - | Kunden-Navigationskarte | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF004_R | RES_0xF004_R |
| INITIALISATION_COUNTER_REGION_CODE | 0xF005 | - | region code | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF005_R |
| BT_DELETE_ALL_PHONE_ID | 0xF007 | - | Phone ID | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DELETE_COOKIES | 0xF00D | - | Cookies innerhalb aller http-Stacks | - | - | - | - | - | - | - | - | - | 31 | - | - |
| UPDATE_ZERTIFIKATE | 0xF00E | - | Update der Zertifikatsliste | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EXPORT_CORE_DUMPS | 0xF01C | - | Export der Core dumps | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF01C_R |
| SENSOR_TEMP | 0xF020 | - | Temperatur eines Sensors zu Simulations- und Testzwecken temporär auf beliebige Werte setzen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF020_R | RES_0xF020_R |
| MAIN_AV_CONNECTION | 0xF032 | - | Aktiviert eine audio video Verbindung von einer Quelle zu einer Senke wie z.B.: MediaSink_Front, MediaSink_RSE_L or MediaSink_RSE_R. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF032_R | RES_0xF032_R |
| SOMEIP_TELEGRAM_RESET | 0xF034 | - | Setzt das durch den Diag.-Job STEUERN_SOMEIOP_TELEGRAMM gesetztes someip Telegramm zurück.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| STATISTIC_COUNTERS | 0xFD5C | - | Statistikzähler | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xFD5C_R |

### STATUS_PIA_PROFILE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Fehler Zeitüberschreitung PreProcessing  |
| 0x02 | Fehler bei der Datenübertragung |
| 0x03 | Fehler Zeitüberschreitung PostProcessing |
| 0xFF | Wert ungültig |

### STAT_MUTE_BIT_0

| WERT | TEXT |
| --- | --- |
| 0x01 | Hauptquelle |
| 0xFF | Wert ungültig |

### STAT_MUTE_BIT_1

| WERT | TEXT |
| --- | --- |
| 0x02 | LHZ_FL |
| 0xFF | Wert ungültig |

### STAT_MUTE_BIT_2

| WERT | TEXT |
| --- | --- |
| 0x04 | LHZ_FR |
| 0xFF | Wert ungültig |

### STAT_MUTE_BIT_3

| WERT | TEXT |
| --- | --- |
| 0x08 | LHZ_RL |
| 0xFF | Wert ungültig |

### STAT_MUTE_BIT_4

| WERT | TEXT |
| --- | --- |
| 0x10 | LHZ_RR |
| 0xFF | Wert ungültig |

### STAT_MUTE_BIT_5

| WERT | TEXT |
| --- | --- |
| 0x20 | Headphone_L |
| 0xFF | Wert ungültig |

### STAT_MUTE_BIT_6

| WERT | TEXT |
| --- | --- |
| 0x40 | Headphone_R |
| 0xFF | Wert ungültig |

### STAT_MUTE_BIT_7

| WERT | TEXT |
| --- | --- |
| 0x80 | Reserve |
| 0xFF | Wert ungültig |

### TAB_71_01_107E_RETURNCODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Erfolg |
| 0x01 | Fehler: Testmodus wurde nicht gestartet |
| 0xFF | Unbekannter Fehler |

### TAB_71_01_107F_RETURNCODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Erfolg |
| 0x01 | Busy, Aktiver RSU Prozess vorhanden |
| 0x02 | Trigger disabled, Fatal Error DTC gesetzt |
| 0xFF | Unbekannter Fehler |

### TAB_71_02_107E_RETURNCODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Erfolg |
| 0x01 | Fehler: Testmodus wurde nicht gestoppt |
| 0xFF | Unbekannter Fehler |

### TAB_71_02_107F_RETURNCODE

| WERT | TEXT |
| --- | --- |
| 0x00 | RSU Prozess läuft, Abbruch erfolgreich getriggert |
| 0x01 | Kein laufender RSU Prozess |
| 0xFF | Unbekannter Fehler |

### TAB_APPLICATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Sprachverarbeitung RoW |
| 0x01 | Navi Applikation RoW |
| 0x02 | Navi Karte |
| 0x03 | Log&Trace extern |
| 0x04 | CarPlay |
| 0x05 | Reinitialisation |
| 0x06 | Log&Trace intern |
| 0x07 | Touch Command |
| 0x08 | Navi Applikation Asien |
| 0x09 | IPSec ATM |
| 0x0A | IPSec Kombi |
| 0x0B | Sprachverarbeitung Asia |
| 0x0C | SDARS |
| 0x0D | reserviert |
| 0x0E | reserviert |
| 0x0F | reserviert |
| 0xFF | Wert ungültig |

### TAB_APPLICATION_ACTIVATION_STATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | deaktiviert durch Codierung |
| 0x02 | aktiviert durch Codierung |
| 0x04 | deaktiviert durch SWT |
| 0x05 | deaktiviert durch Codierung und deaktiviert durch SWT |
| 0x06 | aktiviert durch Codierung und deaktiviert durch SWT |
| 0x08 | aktiviert durch SWT |
| 0x09 | deaktiviert durch Codierung und aktiviert durch SWT |
| 0x0A | aktiviert durch Codierung und aktiviert durch SWT |
| 0xFF | nicht definiert |

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

### TAB_AUDIOSYSTEM_ALEV

| WERT | TEXT |
| --- | --- |
| 0x00 | ALEV1 Stereo |
| 0x01 | ALEV2 HiFi |
| 0x02 | ALEV3 Top-HiFi |
| 0x03 | ALEV4 High-End-Audio |
| 0x04 | ALEV1 BIS Stereo_Basis |
| 0x05 | ALEV2 BIS |
| 0xFF | Wert ungültig |

### TAB_AUSGANGVIDEOSWITCH

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein VideoSwitch vorhanden bzw. verwendet |
| 0x01 | Ausgang 1 |
| 0x02 | Ausgang 2 |
| 0xFF | Nicht definiert |

### TAB_AVCONERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | Quelle nicht verfügbar |
| 0x02 | Senke nicht verfügbar |
| 0x03 | Priorität zu gering |
| 0x04 | genereller Fehler |
| 0xFF | invalider Wert |

### TAB_BLUETOOTH_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Bluetooth nicht aktiviert |
| 1 | Bluetooth aktiviert |
| 0xFF | nicht definiert |

### TAB_BT_DEBUG_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | SSP Debug mode off |
| 0x01 | SSP Debug mode on |
| 0xFF | Not defined |

### TAB_BT_DISCOVERY_MODE_STATUS

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
| 0x0E | Verschlüsselungsfehler |
| 0x0F | Dekodierungsfehler  |
| 0x10 | IP Datenkommunikation war nicht möglich |
| 0x11 | DTMF-Übertragung war nicht erfolgreich |
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

### TAB_CE_AUTORIZATION_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | WPA2 |
| 0x02 | WPS_PBC |
| 0x03 | WPS_PIN |
| 0x04 | NFC |
| 0x05 | PERSISTENT_GROUP |
| 0xFF | nicht definiert |

### TAB_CE_CALLTYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | Eingehend |
| 0x02 | Ausgehend |
| 0x03 | Verpasst |
| 0xFF | nicht definiert |

### TAB_CE_CONNECTION_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | PEER_2_PEER |
| 0x02 | ACCESSPOINT |
| 0x03 | BLUETOOTH |
| 0xFF | nicht definiert |

### TAB_CE_ENVIRONMENT_CONDITION

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | SDP Anfrage fehlgeschlagen |
| 0x02 | Sicherheits Fehler |
| 0x03 | Verbindung fehlgeschlagen |
| 0x04 | Verbindung Zeitüberschreitung |
| 0x05 | Endgerät nicht verfügbar |
| 0x06 | Geräteverbund fehlgeschlagen |
| 0x07 | DHCP Fehler |
| 0x08 | Tranportverbindung verloren |
| 0x09 | Unerwarteter SCO Abfall |
| 0x0A | Mobilnetzwerk Abfall |
| 0x0B | Anrufaufbau Fehler |
| 0x0C | Service Fehler |
| 0x0D | Parser Fehler |
| 0x0F | Sitzungs Fehler |
| 0x10 | Backend Fehler |
| 0x11 | Service Anbieter Fehler |
| 0xFF | nicht definiert |

### TAB_CE_SOURCE_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | A4A |
| 0x02 | MAP |
| 0x03 | ONLINE |
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

### TAB_CONNECTIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CS unbekannt |
| 0x01 | CS verbinden |
| 0x02 | CS verbunden |
| 0x03 | CS getrennen |
| 0x04 | CS getrennt |
| 0x05 | CS eingestellt |
| 0xFF | Wert ungültig |

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

### TAB_DEFINITION_STATUS_ATM02

| WERT | TEXT |
| --- | --- |
| 0x00 | IPsec ist ok. |
| 0x01 | Unbekannter Fehler bei IPsec. |
| 0x02 | Fehler beim IPsec Schlüsselaustausch. |
| 0x03 | IPsec-Partnersteuergerät nicht erreichbar. |
| 0xFF | Wert ungültig |

### TAB_DEFINITION_STATUS_KOMBI

| WERT | TEXT |
| --- | --- |
| 0x00 | IPsec ist ok. |
| 0x04 | Unbekannter Fehler bei IPsec. |
| 0x08 | Fehler beim IPsec Schlüsselaustausch. |
| 0x0C | IPsec-Partnersteuergerät nicht erreichbar. |
| 0xFF | Wert ungültig |

### TAB_DEFINITION_STATUS_MGU

| WERT | TEXT |
| --- | --- |
| 0x00 | IPsec ist ok. |
| 0x10 | Unbekannter Fehler bei IPsec. |
| 0x20 | Fehler beim IPsec Schlüsselaustausch. |
| 0x30 | IPsec-Partnersteuergerät nicht erreichbar. |
| 0xFF | Wert ungültig |

### TAB_DEFINITION_STATUS_RSE

| WERT | TEXT |
| --- | --- |
| 0x00 | IPsec ist ok. |
| 0x40 | Unbekannter Fehler bei IPsec. |
| 0x80 | Fehler beim IPsec Schlüsselaustausch. |
| 0xC0 | IPsec-Partnersteuergerät nicht erreichbar. |
| 0xFF | Wert ungültig |

### TAB_DEVICE_CLASS

| WERT | TEXT |
| --- | --- |
| 0x00 | Verwendete Klassencode-Infos von den Interface-Deskriptoren |
| 0x01 | Audio |
| 0x02 | Kommunikation und CDC Steuerung |
| 0x03 | HID (Human Interface Device) |
| 0x05 | Physikalisch |
| 0x06 | Standbildaufnahmen |
| 0x07 | Drucker |
| 0x08 | Massenspeicher |
| 0x09 | Hub |
| 0x0A | CDC-Daten |
| 0x0B | Smart Card |
| 0x0D | Inhaltssicherheit |
| 0x0E | Video |
| 0x0F | persönliches Gesundheitswesen |
| 0x10 | Audio/Video Geräte |
| 0x11 | Billboard Gerät |
| 0xDC | Diagnose Gerät |
| 0xE0 | WLAN Controller |
| 0xEF | Sonstiges |
| 0xFE | applikationsspezifisch |
| 0xFF | vendorspezifisch |

### TAB_EINGANGVIDEOSWITCH

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein VideoSwitch vorhanden bzw. verwendet |
| 0x01 | Eingang 1 |
| 0x02 | Eingang 2 |
| 0xFF | Nicht definiert |

### TAB_FALSE_TRUE

| WERT | TEXT |
| --- | --- |
| 0x00 | false |
| 0x01 | true |

### TAB_FBASEINGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Alle Eingänge |
| 0x01 | FBAS-Eingang 1 |
| 0x02 | FBAS-Eingang 2 |
| 0xFF | Wert ungültig |

### TAB_FIXQ

| WERT | TEXT |
| --- | --- |
| 0x00 | unbekannt |
| 0x01 | kein Standort |
| 0x02 | Standard |
| 0x03 | Differenz |
| 0x04 | Koppelnavigation |
| 0xFF | Wert ungültig |

### TAB_GPSSIGQ

| WERT | TEXT |
| --- | --- |
| 0x00 | unbekannt |
| 0x01 | schlecht |
| 0x02 | minimal |
| 0x03 | good |
| 0xFF | Wert ungültig |

### TAB_HDD_ACTIVATION_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Safe Mode aus |
| 0x01 | Safe Mode ein |
| 0xFF | nicht definiert |

### TAB_HDD_SMARTVALUES

| WERT | TEXT |
| --- | --- |
| 0x01 | Lesefehlerrate |
| 0x02 | Positionierungsdurchsatz |
| 0x03 | Durchschnitt der Startzeit [msec] |
| 0x04 | Anzahl der Start/Stop Vorgänge |
| 0x05 | Anzahl der verbrauchten Sektoren |
| 0x07 | Positionierungsproblemrate |
| 0x08 | Positionierungszeit |
| 0x09 | Laufleistung in Stunden |
| 0x0A | Anzahl Wiederholungen |
| 0x0C | Anzahl Einschaltvorgänge |
| 0xC0 | Anzahl Notausschaltvorgänge |
| 0xC1 | Anzahl Ladezyklus |
| 0xC2 | Temperatur |
| 0xC5 | Anzahl aktuell instabiler Sektoren |
| 0xFF | Wert ungültig |

### TAB_HERSTELLUNGFEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Physikalischer Fehler |
| 0x02 | mit Zulieferer definieren |
| 0xFF | Nicht definiert |

### TAB_HERSTELLUNGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anfrage gestellt |
| 0x01 | Herstellung läuft |
| 0x02 | Herstellung beendet ohne Fehler |
| 0x03 | Herstellung beendet mit Fehler |
| 0x04 | Herstellung unterbrochen durch User-Interaktion |
| 0xFF | Nicht definiert |

### TAB_HMIVERSION

| WERT | TEXT |
| --- | --- |
| 0x00 | ID5_PLUS_PLUS |
| 0x01 | ID6_LIGHT |
| 0x02 | ID7 |
| 0x03 | ID8 |
| 0xFF | Nicht definiert |

### TAB_INITIALISIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | IO initialisiert |
| 0xFF | nicht definiert |

### TAB_INSERTED_MEDIUM

| WERT | TEXT |
| --- | --- |
| 0x00 | No medium inserted |
| 0x01 | Medium recognition in progress |
| 0x02 | CD medium inserted |
| 0x03 | DVD medium inserted |
| 0x04 | Blu-ray medium inserted |
| 0xF0 | Medium ejected, but not removed |
| 0xF1 | Medium blocked |
| 0xFF | Not defined |

### TAB_INTERNALTRACE

| WERT | TEXT |
| --- | --- |
| 0x00 | startet internes Tracing |
| 0x01 | stoppt internes Tracing |
| 0x02 | löscht alle internen Traces |

### TAB_JA_NEIN

| WERT | TEXT |
| --- | --- |
| 0 | nein |
| 1 | ja |
| 0xFF | Wert ungültig |

### TAB_JOYNRRESPONSE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Okay |
| 0x00000001 | JoynrDiscoveryException |
| 0x00000002 | JoynrCommunicationException |
| 0x00000003 | JoynrProviderRuntimeException |
| 0x00000004 | JoynrNoCampatibleProviderFoundException |
| 0x00000005 | JoynrIllegalAccessException |
| 0xFFFFFFFF | Wert ungültig |

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
| 0x01 | Lüfter läuft, aber nicht mit der erwarteteten Drehzahl |
| 0x02 | Lüfter läuft mit der erwarteteten Drehzahl |
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

### TAB_NAVI_MAPACTION

| WERT | TEXT |
| --- | --- |
| 0x00 | deaktiviere Kunden Navigationskarte |
| 0x01 | lösche Kunden Navigationksarte |

### TAB_NAVI_MAPSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kunden Navigation Karte vorhanden und aktiviert |
| 0x01 | Kunden Navigation Karte deaktiviert |
| 0x02 | Kunden Navigation Karte nicht vorhanden oder gelöscht |
| 0x03 | Kunden Navigation Karte Deaktivierung läuft |
| 0x04 | Kunden Navigation Karte Löschen läuft |
| 0xFF | nicht definierter Zustand |

### TAB_NAVI_REASON

| WERT | TEXT |
| --- | --- |
| 0x01 | Navigationsdatenbank nicht verfügbar |
| 0x02 | Inkonsistenzen festgestellt |
| 0xFF | Wert ungültig |

### TAB_ODD_EJECT

| WERT | TEXT |
| --- | --- |
| 0x00 | ODD standard eject |
| 0x01 | ODD emergency eject |

### TAB_OKNOK

| WERT | TEXT |
| --- | --- |
| 0x00 | IO |
| 0x01 | NIO |
| 0xFF | Wert ungültig |

### TAB_ONOFF

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xFF | NICHT DEFINIERT |

### TAB_PRBS_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Default time value will be used (1 minute) |
| 0x01 | Flexible time value in seconds will be used |

### TAB_PROCESS_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Prozess nicht gestartet |
| 0x01 | Prozess läuft |
| 0x02 | Prozess beendet ohne Fehler |
| 0x03 | Prozess beendet mit Fehler |
| 0xFF | nicht definiert |

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

### TAB_REASON_JOB_CANCELED

| WERT | TEXT |
| --- | --- |
| 0x00000000 | UninstalledByProvisioning |
| 0x00000001 | JobCpuLimitExceeded |
| 0x00000002 | JobRamLimitExceeded |
| 0x00000003 | PlatformCpuLimitExceeded |
| 0x00000004 | PlatfromRAMLimitExceeded |
| 0x00000005 | Expired |
| 0xFFFFFFFF | Wert ungültig |

### TAB_REASON_JOB_CRASHED

| WERT | TEXT |
| --- | --- |
| 0x00000000 | SyntaxError |
| 0x00000001 | TypeError |
| 0x00000002 | RamExceeded |
| 0x00000003 | RomExceeded |
| 0x00000004 | CPU Exceeded |
| 0xFFFFFFFF | Wert ungültig |

### TAB_REASON_JOB_REJECTED

| WERT | TEXT |
| --- | --- |
| 0x00000000 | SyntaxError |
| 0x00000001 | TypeError |
| 0x00000002 | RamExceeded |
| 0x00000003 | RomExceeded |
| 0x00000004 | CPU Exceeded |
| 0xFFFFFFFF | Wert ungültig |

### TAB_REASON_KILLED_BY_MAIN_APP

| WERT | TEXT |
| --- | --- |
| 0x00000000 | PlatformCpuLimitExceeded |
| 0x00000001 | PlatformRamLimitExceeded |
| 0x00000002 | HeartbeatTimout |
| 0xFFFFFFFF | Wert ungültig |

### TAB_RECOVERY_STEPS_MGU

| WERT | TEXT |
| --- | --- |
| 0x00 | Loeschen der oeffentlichen applikativen Daten |
| 0x01 | Loeschen aller oeffentlichen Daten |
| 0x02 | Loeschen der persoenlichen applikativen Daten |
| 0x03 | Loeschen aller persoenlichen Daten |
| 0x04 | Reset zu den Werkseinstellungen |
| 0xFF | Wert ungültig |

### TAB_SDARS_ANTENNA_COMMUNICATION

| WERT | TEXT |
| --- | --- |
| 0x00 | SDARS Antennen Diagnose möglich |
| 0x01 | SDARS Antennen Diagnose nicht möglich |
| 0xFF | Wert ungültig |

### TAB_SECTIMEQUALITY

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Zeit verfügbar |
| 0x01 | Zeit unsicher |
| 0x02 | Zeit sicher |
| 0x03 | Zeit sicher und präzise |
| 0xFF | Wert ungültig |

### TAB_SECTIMEQUERYSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht gestartet |
| 0x01 | Läuft |
| 0x02 | Okay |
| 0x03 | Zertifikat Fehler |
| 0x04 | Keine Verbindung zum Backend |
| 0x05 | Verbindung zum Backend okay aber keine Zeit vorhanden. |
| 0xFF | Wert ungültig |

### TAB_SENKE

| WERT | TEXT |
| --- | --- |
| 0x0400 | MediaSink_Front |
| 0x0500 | MediaSink_RSE_L |
| 0x0501 | MediaSink_RSE_R |

### TAB_SERVICEHISTORY

| WERT | TEXT |
| --- | --- |
| 0x00 | alles OK |
| 0x01 | nicht genügend Speicher |
| 0x02 | Daten inkonsistent |
| 0x04 | keine Schreibberechtigung |
| 0x05 | unbekannter Fehler |
| 0xFF | Wert ungültig |

### TAB_SOURCESINK

| WERT | TEXT |
| --- | --- |
| 0x00 | Quelle |
| 0x01 | Senke |

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

### TAB_STATUSCIDSCHEDULEID

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDCOM_SCHEDULE_READ_FLASH |
| 0x01 | CIDCOM_SCHEDULE_SYNC |
| 0x02 | CIDCOM_SCHEDULE_CHECK_COM |
| 0x03 | CIDCOM_SCHEDULE_READ_SENSORS |
| 0x04 | CIDCOM_SCHEDULE_ON |
| 0xFF | Wert ungültig |

### TAB_STATUS_BYTE_ENUM

| WERT | TEXT |
| --- | --- |
| 0x00 | Überprüfung erfolgreich. |
| 0x01 | Überprüfung noch nicht durchgeführt. |
| 0x02 | Ein Formatfehler ist aufgetreten. |
| 0x03 | Keine Daten zur Prüfung vorhanden. |
| 0x04 | Daten sind nicht vollständig. |
| 0x05 | Signaturprüfung fehlgeschlagen. |
| 0x06 | Bindings passen nicht zur VIN17. |
| 0x07 | Überprüfung läuft. |
| 0xFF | Ein unbekannter Fehler ist aufgetreten. |

### TAB_STATUS_ENTRY

| WERT | TEXT |
| --- | --- |
| 0x00 | nichtFinal && gültig |
| 0x01 | nichtFinal && nichtGültig |
| 0x02 | final && gültig |
| 0x03 | final && nichtGültig |
| 0xFF | Wert ungültig |

### TAB_STATUS_INTERNAL_TRACE

| WERT | TEXT |
| --- | --- |
| 0x00 | deaktiviert durch Kilometerstand oder SWT |
| 0x01 | verfügbar nach Kilometerstand, aber nicht aktiviert |
| 0x02 | von SWT verfügbar, aber nicht aktiviert |
| 0x03 | aktiviert |
| 0x04 | läuft nicht, aber Traces verfügbar |
| 0xFF | Wert ungültig |

### TAB_STATUS_IPSEC

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | ERROR |
| 0x02 | OPERATION_ALREADY_RUNNING |
| 0x03 | FORBIDDEN |
| 0xFF | Wert ungültig |

### TAB_STATUS_MMI_STATISTIK

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Fehler Zeitüberschreitung PreProcessing  |
| 0x02 | Fehler bei der Datenübertragung |
| 0x03 | Fehler Zeitüberschreitung PostProcessing |
| 0xFF | Wert ungültig |

### TAB_TC_BATTERY_SOH

| WERT | TEXT |
| --- | --- |
| 0x00 | Cold |
| 0x01 | Dead |
| 0x02 | Good |
| 0x03 | Overheat |
| 0x04 | Over_Voltage |
| 0x05 | Unknown |
| 0xFF | Unspecified_failure |

### TAB_TC_BATTERY_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CHARGING |
| 0x01 | DISCHARGING |
| 0x02 | FULL |
| 0x03 | NOT_CHARGING |
| 0xFF | UNKNOWN |

### TAB_TC_SYSTEM_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | NORMAL |
| 0x01 | MODIFIED |
| 0xFF | UNKNOWN |

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

### TAB_TEST_ANTENNA_SDARS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler aufgetreten |
| 0x01 | Unterbrochene Verbindung |
| 0x02 | Kurzschluss nach Masse |
| 0x03 | Kommunikationsfehler zum SDARS Modul |
| 0xFF | Wert ungültig |

### TAB_TEST_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehler(n) |
| 0x04 | Test beendet durch Timeout |
| 0x05 | Test unterbrochen |
| 0xFF | nicht definiert |

### TAB_TEST_TOUCH_COMMAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Test beendet ohne Fehler |
| 0x01 | Nicht verfuegbar |
| 0x02 | Falsche Nachrichtenlaenge oder ungueltiges Format |
| 0x03 | Test laeuft |
| 0x04 | Zeitueberschreitung |
| 0x05 | Test nicht gestartet |
| 0xFF | Nicht definiert |

### TAB_TRACE_LEVEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Default |
| 0x01 | DLT_LOG_FATAL |
| 0x02 | DLT_LOG_ERROR |
| 0x03 | DLT_LOG_WARN |
| 0x04 | DLT_LOG_INFO |
| 0x05 | DLT_LOG_DEBUG |
| 0x06 | DLT_LOG_VERBOSE |

### TAB_VERBAUROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | alle Routinen |
| 0x00000010 | Verbindung HU zur GPS Antenne |
| 0x00000080 | APIX/LIN Verbindung HU zum CID zum ZIN |
| 0x00000800 | APIX Verbindung HU zum CID |
| 0x00080000 | Verbindung HU zur Bluetooth- Antenne |
| 0x00400000 | Verbindung HU zur WLAN Antenne |
| 0xFFFFFFFF | nicht definiert |

### TAB_VIDEOEINGANGFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | No video- or sync-signal present |
| 0x01 | Signal out of range |
| 0x02 | connection could not be established |
| 0xFF | Not defined |

### TAB_VIDEOSINK

| WERT | TEXT |
| --- | --- |
| 0x00 | alle Displays |
| 0x01 | Display Headunit |
| 0xFF | Wert ungültig |

### TAB_VIDEOSOURCE

| WERT | TEXT |
| --- | --- |
| 0x00 | all sources |
| 0x02 | NVC |
| 0x04 | RFK |
| 0xFF | not defined |

### TAB_VIN_PROTECTION

| WERT | TEXT |
| --- | --- |
| 0x00 | HU VIN Schutz nicht aktiviert |
| 0x01 | HU VIN Schutzaktivierung im Gange |
| 0x02 | HU VIN Schutz aktiviert |
| 0x03 | HU VIN Schutzaktivierung fehlgeschlagen |
| 0xFF | Wert ungültig |

### TAB_WLAN_ENCRYPTION

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Verschlüsselung |
| 0x01 | WEP |
| 0x02 | WPA |
| 0x03 | WPA2 |
| 0xFF | nicht definiert |

### TAB_WLAN_TYPE

| WERT | TEXT |
| --- | --- |
| 0x01 | MAC_WIFI_DIRECT_2.4GHZ |
| 0x02 | MAC_WIFI_DIRECT_5GHZ |
| 0x03 | MAC_WIFI_AP_2.4GHZ |
| 0x04 | MAC_WIFI_AP_5GHZ |
| 0xFF | Wert ungültig |

### TASU_REQUEST_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | <Kurzbeschreibung TAS-Auftrag 0> |
| 0x01 | <Kurzbeschreibung TAS-Auftrag 1> |
| 0x02 | <Kurzbeschreibung TAS-Auftrag 2> |

### TASU_STEUERN_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Auftraege an den TAS nicht blockiert (Default bei Fehlen des Arguments) |
| 0x01 | Auftraege an den TAS temporaer bis zum naechsten Aufstart blockiert |
| 0x02 | Auftraege an den TAS persistent ueber den Aufstart hinaus blockiert |
| 0xFF | Wert ungültig |

### TCIDONOFFACTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Off |
| 0x01 | On |
| 0xFF | not defined |

### TSTATUSDISPLAYACTIVATIONMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | CID aus |
| 0x01 | CID an |
| 0xFF | nicht definiert |

### TAB_0X1752

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 |

### TAB_0X1754

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 |

### TAB_0X175A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 |

### TAB_0X1775

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0041 | 0x0042 | 0x0043 | 0x0044 |

### TAB_0X17F5

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0007 | 0x0008 |

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

### _HDCP_LINK

| WERT | TEXT |
| --- | --- |
| 0x00 | APIX_MGU_CID |
| 0x01 | APIX_RSE_FOMO_L |
| 0x02 | APIX_RSE_FOMO_R |
| 0x03 | WIFI_MIRACAST |
| 0x04 | RSE_HDMI |
| 0x05 | ETH_MGU_RSE |
| 0x06 | ETH_RAM_MGU |
| 0xFF | Wert ungültig |

### SWTSTATUSTAB

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | NICHT_VORHANDEN |
| 0x01 | EINGESPIELT |
| 0x02 | AKZEPTIERT |
| 0x03 | ABGELEHNT |
| 0x04 | STORNIERT |
| 0xXY | ERROR_ECU_UNKNOWN_STATUS_RESPONSE |

### SWTTYPTAB

| SB | STATUS_TEXT |
| --- | --- |
| 02 | FSC Full |
| 05 | FSC Short (Maps) |
| FF | Unknown FSC Typ |

### SWTFEHLER_TAB

| SB | STATUS_TEXT |
| --- | --- |
| 0x31 | UNZULAESSIGER_WERTEBEREICH |
| 0xCC | SCHLUESSELABLEITUNG_NICHT_AKTIVIERT |
| 0xCD | KEYFAKTOR_NICHT_VORHANDEN |
| 0xCE | FSC_NICHT_MASKIERT |
| 0xCF | FSC_MASKIERT |
| 0xD0 | FSC_ERWEITERUNG_PRUEFUNG_SCHLUG_FEHL |
| 0xD1 | FSC_UNGUELTIG |
| 0xD2 | SW_ID_NICHT_VORHANDEN |
| 0xD3 | KEIN_SPEICHERPLATZ_MEHR_VORHANDEN |
| 0xD4 | FALSCHER_ZERTIFIKATSINHALT_UNBEKANNTES_CRIT-ELEMENT |
| 0xD5 | FALSCHER_FSC_INHALT |
| 0xD6 | FALSCHE_PARAMETER |
| 0xD7 | FSCS_ZERTIFIKAT_ABGELEHNT |
| 0xD8 | KEINE_DATEN_ZU_ANGEGEBENEM_SG_VORHANDEN |
| 0xD9 | KEINE_AUTHENTISIERUNG |
| 0xDA | FINGER_PRINT_MECHANISMUS_NOT_OK |
| 0xDB | SIGS_ID_UND_ZERTIFIKAT_PASSEN_NICHT_ZUSAMMEN |
| 0xDC | GUELTIGKEITS_PRUEFUNG_SCHLUG_FEHL |
| 0xDD | FAHRGESTELLNUMMER_FEHLERHAFT |
| 0xDE | FGN_PRUEFUNG_SCHLUG_FEHL |
| 0xDF | FLASH_LESEFEHLER |
| 0xE0 | FLASH_SCHREIBFEHLER |
| 0xE1 | FALSCHER_ZERTIFIKATSINHALT_KEY_USAGE |
| 0xE2 | FALSCHER_ZERTIFIKATSINHALT_ISSUER |
| 0xE3 | FALSCHER_ZERTIFIKATSINHALT_VALIDITY |
| 0xE4 | FSCS_ZERTIFIKAT_PRUEFUNG_SCHLUG_FEHL |
| 0xE5 | FSCS_ZERTIFIKAT_UNGUELTIG |
| 0xE6 | FSCS_ZERTIFIKAT_NOCH_NICHT_GEPRUEFT |
| 0xE7 | FSCS_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xE8 | SIGS_ZERTIFIKAT_PRUEFUNG_SCHLUG_FEHL |
| 0xE9 | SIGS_ZERTIFIKAT_UNGUELTIG |
| 0xEA | SIGS_ZERTIFIKAT_NOCH_NICHT_GEPRUEFT |
| 0xEB | SIGS_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xEC | ROOT_ZERTIFIKAT_UNGUELTIG |
| 0xED | ROOT_ZERTIFIKAT_STATUS_ABGELEHNT |
| 0xEE | ROOT_ZERTIFIKAT_FEHLERHAFT |
| 0xEF | ROOT_ZERTIFIKAT_NICHT_LESBAR |
| 0xF0 | ROOT_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xF1 | ZERTIFIKAT_STATUS_ABGELEHNT |
| 0xF2 | ZERTIFIKAT_NICHT_VORHANDEN |
| 0xF3 | FSC_PRUEFUNG_SCHLUG_FEHL |
| 0xF4 | FSC_STORNIERT |
| 0xF5 | FSC_STATUS_ABGELEHNT |
| 0xF6 | FSC_NICHT_VORHANDEN |
| 0xF7 | FALSCHE_FSCS_ID_IM_FSC |
| 0xF8 | UNGUELTIGES_FSC_ERSTELLUNGSDDATUM |
| 0xF9 | SIGNATUR_PRUEFUNG_SCHLUG_FEHL |
| 0xFA | SW_SIGNATURPRUEFUNG_SCHLUG_FEHL |
| 0xFB | SW_SIG_STATUS_ABGELEHNT |
| 0xFC | SW_ID_PRUEFUNG_SCHLUG_FEHL |
| 0xFD | SW_NICHT_AKTIVIERT |
| 0xFE | SW_NICHT_EINGESPIELT |
| 0xFF | UNBEKANNTER_FEHLER |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### DEVUDS_TAB_SWT

| WERT | NAME |
| --- | --- |
| 001B | FSC Headunit Navi Enabler (old) |
| 006F | FSC Headunit SDARS |
| 009C | FSC Headunit A4A |
| 009E | FSC Headunit NBT ISpeech |
| 009F | FSC Headunit NBT TextToSpeech |
| 00A0 | FSC Headunit NBT Navi Application Harman (ECE,US,RoW) |
| 00A1 | FSC Headunit NBT Navi Application Alpine (Asia) |
| 00DE | FSC Headunit NBT Navi Enabler (new) |
| 00A4 | FSC Headunit NBT Navi Map China |
| 00A5 | FSC Headunit NBT Navi Map Taiwan |
| 00A6 | FSC Headunit NBT Navi Map Korea |
| 00A7 | FSC Headunit NBT Navi Map Japan |
| 00A8 | FSC Headunit NBT Navi Map NorthAmerica,Hawai,PuertoRico |
| 00A9 | FSC Headunit NBT Navi Map Europe |
| 00AA | FSC Headunit NBT Navi Map Oceania |
| 00AB | FSC Headunit NBT Navi Map MiddleEast |
| 00AC | FSC Headunit NBT Navi Map NorthAfrica |
| 00AD | FSC Headunit NBT Navi Map SouthAfrica |
| 00AE | FSC Headunit NBT Navi Map SouthEastAsia |
| 00AF | FSC Headunit NBT Navi Map SouthAmerica |
| 00B0 | FSC Headunit NBT Navi Map India |
| 00B1 | FSC Headunit NBT Navi Map Israel |
| 00C7 | FSC Headunit ENAV ISpeech |
| 00C8 | FSC Headunit ENAV TextToSpeech |
| 00C9 | FSC Headunit ENAV Navi Application Harman |
| 00DF | FSC Headunit ENAV Navi Enabler (new) |
| 00B2 | FSC Headunit ENAV Navi Map China |
| 00B3 | FSC Headunit ENAV Navi Map NorthAmerica,Hawai,PuertoRico |
| 00B4 | FSC Headunit ENAV Navi Map Europe |
| 00B5 | FSC Headunit ENAV Navi Map Oceania |
| 00B6 | FSC Headunit ENAV Navi Map MiddleEast |
| 00B7 | FSC Headunit ENAV Navi Map NorthAfrica |
| 00B8 | FSC Headunit ENAV Navi Map SouthAfrica |
| 00B9 | FSC Headunit ENAV Navi Map SouthEastAsia |
| 00BA | FSC Headunit ENAV Navi Map SouthAmerica |
| 00BB | FSC Headunit ENAV Navi Map India |
| 00BC | FSC Headunit ENAV Navi Map Israel |
| 0xFFFFFFFF | unknown FSC |

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
| 00006748 | LU MGU Mid 5 1.0 DIN B300__0076  (CPU mid, 4GB RAM, 64GB eMMC, WLAN, GPS, USB2, USB3, OABR 4Port) | MGU |
| 00006793 | LU MGU Mid 4 1.5 DIN B301__0256  (CPU mid, 4GB RAM, 64GB eMMC, WLAN, GPS, USB2, OABR 4Port, CD) | MGU |
| 00006745 | LU MGU Mid 1 1.5 DIN B305__2252  (CPU mid, 4GB RAM, 64GB eMMC, WLAN, USB2, OABR 4Port, CD) | MGU |
| 00006747 | LU MGU Mid 2 1.0 DIN B306__0072  (CPU mid, 4GB RAM, 64GB eMMC, WLAN, USB2, OABR 4Port) | MGU |
| 00006792 | LU MGU Bid 3 1.0 DIN B311__2072  (CPU mid, 4GB RAM, 64GB eMMC, WLAN, USB2, USB3, OABR 4Port) | MGU |
| 00006749 | LU MGU Basis 3 1.0 DIN B302__0062  (CPU base, 2GB RAM, 16GB eMMC, WLAN, USB3, OABR 4Port) | MGU |
| 0000674B | LU MGU Basis 1 1.5 DIN B303__2242  (CPU base, 2GB RAM, 16GB eMMC, WLAN, CD, OABR 4Port) | MGU |
| 00006746 | LU MGU Basis 0 1.5 DIN B313__0242  (CPU base, 2GB RAM, 16GB eMMC, WLAN, CD, OABR 4Port) | MGU |
| 00006791 | LU MGU Basis   1.0 DIN B315__0040  (CPU base, 2GB RAM, 16GB eMMC, OABR 4Port) | MGU |
| 0000674A | LU MGU Basis 2 1.0 DIN B320__2062  (CPU base, 2GB RAM, 16GB eMMC, WLAN, USB3, OABR 4Port) | MGU |
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
| 00005F35 | LU MGU High 1.0 DIN  B307__31B3  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3,  OABR 5Port, CVBS) | MGU |
| 00005F36 | LU MGU High 1.0 DIN  B317__20B3  (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, USB2, USB3,  OABR 5Port) | MGU |
| 00007018 | LU MGU Base21 1.0 DIN  B366__X101  (CPU high, 2GB RAM, 16GB eMMC,  BT, 3xOABR_100 ) | MGU |
| 00007019 | LU MGU High21 1.0 DIN  B365__X305  (CPU high, 8GB RAM, 128GB eMMC,  WLAN, BT, USB1, 3xOABR_100) | MGU |
| 0000701A | LU MGU High21 1.0 DIN  B382__X405  (CPU high, 8GB RAM, 32GB eMMC, HDD, WLAN, BT, USB1, USB2, USB3,  3xOABR_100, 1xOABR_1000) | MGU |
| 00007305 | LU MGU Base21 1.0 DIN  B367  (SoC Base, 2GB RAM, 32GB eMMC,  BT_WLAN, 3xOABR_100, USB1) | MGU |
| 00007309 | LU MGU High21 1.0 DIN  B379  (SoC Premium, 8GB RAM, 128GB eMMC,  BT_WLAN, BT, USB1, USB2, 3xOABR_100, 1xOABR_1000) | MGU |
| 0000730B | LU MGU High21 1.0 DIN  B381  (SoC Premium, 8GB RAM, 128GB eMMC, HDD, BT_WLAN, BT, USB1, USB2, USB3, 3xOABR_100, 1xOABR_1000) | MGU |
| 0000730F | LU MGU Base21 1.0 DIN  B385  (SoC Premium, 8GB RAM, 128GB eMMC,  BT_WLAN, USB2, USB3, 3xOABR_100, 1xOABR_1000) | MGU |
| 00007310 | LU MGU High21 1.0 DIN  B386  (SoC Premium, 8GB RAM, 128GB eMMC, 320GB HDD,  BT_WLAN, BT, USB2, 3xOABR_100, 1xOABR_1000) | MGU |
| 0000730C | LU MGU High21 1.0 DIN  B382  (SoC Premium, 8GB RAM, 128GB eMMC, BT_WLAN, USB2, 3xOABR_100, 3xOABR_100) | MGU |
| 00007313 | LU MGU High21 1.0 DIN  B378  (SoC Base, 6GB RAM, 64GB eMMC, BT_WLAN, USB1, 3xOABR_100, 3xOABR_100) | MGU |
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

### HMI_ID_VERSION

| WERT | TEXT |
| --- | --- |
| 0x00 | id5_plus_plus |
| 0x01 | ID6_light |
| 0x02 | ID7 |
| 0x03 | ID8 |
| 0xFF | Unknown Error |

### CARSHARING

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht_aktiv |
| 0x01 | aktiv |
| 0xFF | Unknown Error |

### NFC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht_aktiv |
| 0x01 | aktiv |
| 0xFF | Unknown Error |

### AUDIO_SYSTEM

| WERT | TEXT |
| --- | --- |
| 0x00 | alev1_ram |
| 0x01 | alev2_ram |
| 0x02 | alev3_ram |
| 0x03 | alev4_ram |
| 0x04 | alev1_bis |
| 0x05 | alev2_bis |
| 0xFF | Unknown Error |

### CID_TOUCH

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht_aktiv |
| 0x01 | aktiv |
| 0xFF | Unknown Error |

### KI_KOMBI_VARIANT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht_aktiv |
| 0x01 | high_35up |
| 0x02 | mid_35up_apix |
| 0x03 | mid_35up_oabr |
| 0x04 | basic_35up_gen4 |
| 0x05 | RR_35up |
| 0x06 | M_gmbh_high |
| 0x07 | high_4.1 |
| 0x08 | basis_4.5 |
| 0xFF | Unknown Error |

### ZIN_VARIANT

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein_zin |
| 0x01 | 6_5_zoll |
| 0x02 | 8_8_zoll |
| 0x03 | Radio_zin |
| 0xFF | Unknown Error |

### ITS_MIRROR

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht_aktiv |
| 0x01 | aktiv |
| 0xFF | Unknown Error |

### ENT_DRIVE_INT_AVAILABLE

| WERT | TEXT |
| --- | --- |
| 0x00 | NONE |
| 0x01 | cdda_datadisc |
| 0x02 | dvd_datadisc |
| 0xFF | Unknown Error |

### ENT_MIRACAST_SUPPORT

| WERT | TEXT |
| --- | --- |
| 0x00 | disabled |
| 0x01 | enabled |
| 0xFF | Unknown Error |

### ENT_DRIVE_HU_EXT_AVAILABLE

| WERT | TEXT |
| --- | --- |
| 0x00 | NONE |
| 0x01 | cdda |
| 0x02 | cdda_datadisc |
| 0xFF | Unknown Error |

### TOUCH_COMMAND

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht_aktiv |
| 0x01 | aktiv |
| 0xFF | Unknown Error |

### USB_HUB_AVAIL

| WERT | TEXT |
| --- | --- |
| 0x00 | Not_available |
| 0x01 | Hub_on_usb1 |
| 0x02 | Hub_on_usb2 |
| 0xFF | Unknown Error |

### MICROPHONE_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Wert_01 |
| 0x01 | Wert_02 |
| 0x02 | Wert_03 |
| 0x03 | Wert_04 |
| 0xFF | Unknown Error |

### TUNER_SDARS_AVAILABILTY

| WERT | TEXT |
| --- | --- |
| 0x00 | not_available_diagnosis_disabled_antenna_diagnosis_disabled |
| 0x02 | not_available_diagnosis_enabled_antenna_diagnosis_disabled |
| 0x03 | not_available_diagnosis_enabled_antenna_diagnosis_enabled |
| 0x07 | available_diagnosis_enabled_antenna_diagnosis_enabled |
| 0xFF | Unknown Error |

### TUNER_SDARS_SXM360L_AVAILABILITY

| WERT | TEXT |
| --- | --- |
| 0x00 | not_available |
| 0x01 | available |
| 0xFF | Unknown Error |

### SERVICEHISTORY

| WERT | NAME |
| --- | --- |
| 0x00 | Everything OK |
| 0x01 | Out of Memory |
| 0x02 | Data inconsistency |
| 0x04 | No writing permission |
| 0x05 | Unknown Error |
