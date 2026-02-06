# BIS01.prg

## General

|  |  |
| --- | --- |
| File | BIS01.prg |
| Type | PRG |
| Jobs | 60 |
| Tables | 170 |
| Origin | BMW EI-66 Robert_Reiter |
| Revision | 1.002 |
| Author | TELEMOTIVE-AG EE-625 Mahfoud |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Basis Infotainment System (Radio UKL NF) |  |  |
| ORIGIN | string | BMW EI-66 Robert_Reiter |  |  |
| REVISION | string | 1.002 |  |  |
| AUTHOR | string | TELEMOTIVE-AG EE-625 Mahfoud |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.983 |  |  |
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

### STATUS_SOFTWARENAME

Reads out the flashed Buildname

_No arguments._

### STATUS_CPU_AUSLASTUNG

Indicates the DAR which is selected.

_No arguments._

### STATUS_AKTIVIERUNGSLEITUNG

Returns the state of the activation line

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

### STATUS_MMI_STATISTIK

Lesen der MMI Statistik gzip Datei

_No arguments._

### LESEN_TELEFONNUMMERN

Auslesen der in HeadUnit gespeicherten Telefonnummern für - Bereitschaftsdienst - Heimathändler - Passo - Hotline

_No arguments._

### STATUS_HWVARIANTE_NAME

Variante

_No arguments._

### SCHREIBEN_TELEFONNUMMERN

Schreiben der Telefonnummern für - Bereitschaftsdienst - Heimathändler - Passo - Hotline

| Name | Type | Description |
| --- | --- | --- |
| ARG_NR_BEREITSCHAFTSDIENST | string | Nummer des Bereitschaftsdienstes |
| ARG_NR_HEIMATHAENDLER | string | Nummer des Heimathändlers |
| ARG_NR_PASSO | string | Nummer Passo |
| ARG_NR_HOTLINE | string | Nummer der Hotline |

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

### DIAGTUNNELLING_UDS

complete tunneling of UDS telegrams

| Name | Type | Description |
| --- | --- | --- |
| ARG_UDS | string | Haupt UDS stream ab ServiceID bsp.:21D02A |

### STATUS_HIGHSYNC_CONNECTION_TABLE_EXT

This Job reads out the HighSyncConnectionTable or all implemented connection-IDs.

| Name | Type | Description |
| --- | --- | --- |
| ARG_CONNECTION_TABLE_TYPE | unsigned char | Switches between the actual active connection or all impemented connections in the system. 0x00 active connection, 0x01 all implemented connections, 0xFF Not defined |

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
| 0x5E4D | Innenbeleuchtung Kartentasche Fahrertür hinten 2 | 1 |
| 0x5E4E | Innenbeleuchtung Kartentasche Beifahrertür hinten 2 | 1 |
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
| 0x7A40 | Elektrische Getriebeoelpumpe | 1 |
| 0x7B00 | ISC - Inertial Sensor Cluster | 1 |
| 0xF000 | Motorrad Tachometer | 1 |
| 0xF010 | Motorrad Drehzahlmesser | 1 |
| 0xF020 | Motorrad Leistungsanzeige | 1 |
| 0xF030 | Motorrad Tankanzeige | 1 |
| 0xF040 | Motorrad 5Wege-Kombischalter links | 1 |
| 0xF050 | Motorrad Kombischalter rechts | 1 |
| 0xF060 | Motorrad Favoritentasterblock | 1 |
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

### ARG_0XA000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GONG_SINK | + | - | 0-n | high | unsigned char | - | TAB_GONG_SINK | - | - | - | - | - | Senke |
| ANGLE | + | - | ° | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | - | - | Richtung |
| DISTANCE | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Abstandsäquivalent |
| SOUND_SIGNAL | + | - | 0-n | - | unsigned char | - | TAB_SOUND_SIGNAL | - | - | - | - | - | legt das auszugebende Signal fest |
| GONG_DURATION | + | - | 0-n | high | unsigned char | - | TAB_GONG_DURATION | - | - | - | - | - | Dauer |

### ARG_0XA001_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUDIOCHANNEL | + | - | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | - | - | Ausgangskanal |
| FREQUENCY | + | - | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 20.0 | 20000.0 | Frequenz in Hz Wertebereich 20 - 20k |
| LEVEL | + | - | - | - | unsigned int | - | - | -8.0 | 1.0 | 0.0 | -90.0 | 0.0 | Pegel [dB], Genauigkeit in 1/8dB |

### ARG_0XA003_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PDC_SIGNAL | + | - | 0-n | - | unsigned char | - | TAB_PDCSIGNAL | - | - | - | - | - | PDC Ton: siehe TAB_PDCSIGNAL |
| AUDIO_STEP | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | PDC Ton: Lautstärke abhängig vom Abstand zum Objekt (Schritte von 0-82) |

### ARG_0XA00B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ENTSOURCE | + | - | 0-n | - | unsigned char | - | TAB_ENTSOURCE | - | - | - | - | - | die auszuwählende Entertainmentquelle |

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
| FREQUENCY_WERT | + | - | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Frequenz in Hz |
| LEVEL_WERT | + | - | - | - | unsigned int | - | - | -8.0 | 1.0 | 0.0 | -90.0 | 0.0 | Pegel des für die Impedanzmessung angeforderten Signals [dB], Genauigkeit in 1/8dB |
| AUDIOCHANNEL | + | - | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | - | - | bezeichnet den Kanal, auf dem gemessen werden soll |
| TIME_WERT | + | - | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | legt die Dauer der Messung in ms fest |

### ARG_0XA025_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LANGUAGE | + | - | 0-n | - | unsigned char | - | TAB_LANGUAGE | - | - | - | - | - | legt die Sprache fest |

### ARG_0XA036_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LEVEL | + | - | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F Bei manchen sekundären Lautstärken wie Navi-Out wird die Lautstärke relativ angegeben, z.B: [-11;11]  Bei Verstärkern: Integer, -96..0 [dB] |
| ARG_AUDIO_SIGNAL | + | - | 0-n | - | unsigned char | - | TAB_AUDIO_SOURCE | - | - | - | - | - | Gibt an, welche Lautstärke verstellt oder ausgelesen werden soll. Default: 0 |

### ARG_0XA039_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_AUDIO_SIGNAL | + | - | 0-n | - | unsigned char | - | TAB_AUDIO_SOURCE | - | - | - | - | - | Gibt an, welche Lautstärke ausgelesen werden soll. Default: 0 |

### ARG_0XA03C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DURATION | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer in Sekunden, für die der Lüfter bei maximaler Drehzahl rotiert |
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
| ARG_DATA_TO_RESET | + | - | 0-n | high | unsigned long | - | TAB_RESETDATABASES | - | - | - | - | - | Daten, die gelöscht werden sollen. Parameter siehe Tabelle TBluetoothResetBasicState |

### ARG_0XA083_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_NR_KEY | + | - | 0-n | high | unsigned char | - | TKeyNr | 1.0 | 1.0 | 0.0 | - | - | Schlüsselnummer / Fahrzeug für Reset. Auswahl siehe Tabelle TKeyNr |
| ARG_PIA_SETTING | + | - | 0-n | high | unsigned long | - | TAB_DelPIASetting | - | - | - | - | - | PIA Einstellungen, die mit jedem Benutzerprofil gelöscht werden müssen |

### ARG_0XA0B4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VISIBLE_CONTEXT_WERT | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | HMI menue ID |
| ARG_FOCUS_INDEX_WERT | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des auswaehlbaren Element der HMI in der angezeigten Tafel |
| ARG_LIST_INDEX_WERT | + | - | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des zu fokussierden Elements in einer Liste (falls zutreffend).  |
| ARG_EXECUTE_FUNCTION_WERT | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schalet die Execute-Funktion; das fokussierte Element wird ausgeführt (0x01 bedeutet: die ZBE gedrückt wird).  |

### ARG_0XA0CC_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUDIOCHANNEL | + | - | 0-n | high | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | - | - | Ausgangskanäle |
| LEVEL | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Pegel |

### ARG_0XA142_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WAVEBAND | + | - | 0-n | high | unsigned char | - | TAB_WAVEBAND | - | - | - | - | - | AM: Suche der besten AM-Station FM: Suche der besten FM-Station |

### ARG_0XA144_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SXM_PREACTIVATION_MODE_STATE | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0b1: MPFA aktiviert; SXM_MPFA muss ebenfalls verarbeitet werden. 0b0: MPFA wird nicht aktiviert bzw. Aktivierung wird beendet. SXM_MPFA muss nicht beachtet werden. |
| SXM_MPFA | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Beinhaltet Kanal-Paket |

### ARG_0XD014_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_MUTE | 0-n | - | unsigned char | - | TAB_ONOFF | - | - | - | - | - | Remove mute for the current entertainment source (audio on) 0x00  Set mute for the current entertainment source (audio off) 0x01 |

### ARG_0XD028_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RADON | 0-n | - | unsigned char | - | TAB_ONOFF | - | - | - | - | - | Setzen des Ausgangssignals RADON. |

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

### ARG_0XD1DE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_INTERNAL_TRACE | 0-n | high | unsigned char | - | TAB_INTERNALTRACE | - | - | - | - | - | Schaltet das interne Tracing an, aus oder löscht die intern gespeicherten Traces |
| ARG_IP_ADDRESS | TEXT | high | string[15] | - | - | 1.0 | 1.0 | 0.0 | - | - | IP V4 IP Adresse [dec; getrennt durch '.'] der Verbindung, die in der Form 'aaa.bbb.ccc.ddd' vom internen Tracer getract werden soll. |
| ARG_IP_PORT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Port der IP Verbindung, die intern getract werden soll |
| ARG_TRACE_LEVEL | 0-n | high | unsigned char | - | TAB_TRACE_LEVEL | - | - | - | - | - | Log Level des Tracings nach AutoSAR spezifikation. |

### ARG_0XD25B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TOUCHINDICATOR | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | um Touch/Proximity Indikator zu aktivieren/ deaktivieren |

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

### ARG_0XE2C1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQ_KHZ | kHz | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | AM-Frequenz: Wechsel auf AM und Einstellung AM-Frequenz  FM-Frequenz: Wechsel auf FM und Einstellung FM-Frequenz |

### ARG_0XE2CA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SXM_TEL_NO | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | SXM-Telefonnummer (max. 35-stellig) |

### ARG_0XF003_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CLEARMODE | + | - | 0-n | high | unsigned char | - | TAB_CLEARMODE | - | - | - | - | - | Art der zu löschenden Persistenz |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

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

### CPU

| WERT | TEXT |
| --- | --- |
| 0x00 | Vehicle Controller |
| 0x01 | Entertainment Controller |

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
| 0x026323 | Flash Memory Fehler (Sammelfehler) | 0 | - |
| 0x02FF63 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x031D01 | Lautsprecherausgangsleitungen vorne links: Leitungsunterbrechung | 0 | - |
| 0x031D02 | Lautsprecherausgangsleitungen vorne links: Kurzschluss nach Plus | 0 | - |
| 0x031D03 | Lautsprecherausgangsleitungen vorne links: Kurzschluss nach Masse | 0 | - |
| 0x031D04 | Lautsprecherausgangsleitungen vorne links: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D06 | Lautsprecherausgangsleitungen vorne rechts: Leitungsunterbrechung | 0 | - |
| 0x031D07 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss nach Plus | 0 | - |
| 0x031D08 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss nach Masse | 0 | - |
| 0x031D09 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D0B | Lautsprecherausgangsleitungen Surround links: Leitungsunterbrechung | 0 | - |
| 0x031D0C | Lautsprecherausgangsleitungen Surround links: Kurzschluss nach Plus | 0 | - |
| 0x031D0D | Lautsprecherausgangsleitungen Surround links: Kurzschluss nach Masse | 0 | - |
| 0x031D0E | Lautsprecherausgangsleitungen Surround links: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D10 | Lautsprecherausgangsleitungen Surround rechts: Leitungsunterbrechung | 0 | - |
| 0x031D11 | Lautsprecherausgangsleitungen Surround rechts: Kurzschluss nach Plus | 0 | - |
| 0x031D12 | Lautsprecherausgangsleitungen Surround rechts: Kurzschluss nach Masse | 0 | - |
| 0x031D13 | Lautsprecherausgangsleitungen Surround rechts: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031E00 | FM1 / AM Antenne: Offene Leitung zwischen Antennenverstärker und Antenne | 0 | - |
| 0x031E01 | FM1 / AM Antenne: Offene Leitung zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E02 | FM1 / AM Antenne: Kurzschluss nach Masse zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E03 | FM2 Antenne: Offene Leitung zwischen Antennenverstärker und Antenne | 0 | - |
| 0x031E04 | FM2 Antenne: Offene Leitung zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E05 | FM2 Antenne: Kurzschluss nach Masse zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E06 | DAB1 Antenne: Offene Leitung zwischen Antennenverstärker und Antenne | 0 | - |
| 0x031E07 | DAB1 Antenne: Offene Leitung zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E08 | DAB1 Antenne: Kurzschluss nach Masse zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E09 | DAB2 Antenne: Offene Leitung zwischen Antennenverstärker und Antenne | 0 | - |
| 0x031E0A | DAB2 Antenne: Offene Leitung zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E0B | DAB2 Antenne: Kurzschluss nach Masse zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E0D | SDARS Antenne: Offene Leitung zwischen Steuergerät und Antennensystem | 0 | - |
| 0x031E0E | SDARS Antenne: Kurzschluss nach Masse zwischen Steuergerät und Antennensystem | 0 | - |
| 0x031E80 | Verbindung zum Mikrofon 1: Leitungsunterbrechung | 0 | - |
| 0x031E81 | Verbindung zum Mikrofon 1: Kurzschluss nach Plus | 0 | - |
| 0x031E82 | Verbindung zum Mikrofon 1: Kurzschluss nach Masse | 0 | - |
| 0xB7F817 | SDARS PREACTIVATION MODE aktiv | 0 | - |
| 0xB7F841 | FBAS-Eingang 1: kein Video- oder Sync-Signal vorhanden | 1 | - |
| 0xB7F849 | RAD ON Leitung: Kurzschluss nach Plus | 0 | - |
| 0xB7F84A | RAD ON Leitung: Kurzschluss nach Masse | 0 | - |
| 0xB7F867 | Interner Temperaturfehler | 0 | - |
| 0xB7F86B | Externe Unterspannung | 1 | - |
| 0xB7F86C | Externe Überspannung | 1 | - |
| 0xB7F883 | Hauptplatine Hardware Fehler | 0 | - |
| 0xB7F884 | Flash File System fehlerhaft | 0 | - |
| 0xB7F8AF | USB-VBUS Verbindung Head-Unit zur USB Benutzer Schnittstelle: Kurzschluss nach Masse | 0 | - |
| 0xB7F8B2 | Video Verbindung: keine oder ungültige Codierdaten-Informationen für die angeforderte Verbindung Quelle zu Senke. Verbindung nicht hergestellt | 0 | - |
| 0xB7F8BB | Bluetooth nicht gestartet | 0 | - |
| 0xB7F8C4 | Hardware-Error: Ausfall Backlight-LEDs | 0 | - |
| 0xB7F8C6 | Übertemperatur: Helligkeitsreduzierung Backlight | 1 | - |
| 0xB7F8C7 | Übertemperatur: Abschaltung Backlight | 1 | - |
| 0xB7F8DD | Eine kritische Recovery funktion wurde aktiviert | 1 | - |
| 0xB7F8DE | Hardware-Fehler: ZIN Kommunikationsfehler | 1 | - |
| 0xB7F8DF | Hardware-Fehler: ZIN Interner Fehler | 1 | - |
| 0xB7F8E0 | Hardware-Fehler: CRC Fehler ZIN | 1 | - |
| 0xB7F8E2 | Hardware-Fehler: Touch Sensor Error | 1 | - |
| 0xB7F8E5 | Debug Mode aktiv | 0 | - |
| 0xB7F8E6 | USB-VBUS Verbindung Head-Unit zur USB Benutzer Schnittstelle 2: Kurzschluss nach Masse | 0 | - |
| 0xB7F8EA | Verbindung Head-unit zum USB Gerät: USB Gerät nicht unterstützt | 1 | - |
| 0xB7F8EB | Verbindung Head-unit zum USB Gerät: Kommunikationsfehler | 1 | - |
| 0xB7F8F3 | Modus: Internes Tracing aktiv | 0 | - |
| 0xB7F8F4 | Modus: Externes Tracing aktiv | 0 | - |
| 0xE1C440 | Reset | 0 | - |
| 0xE1C45F | BODY- oder IuK-CAN Physikalischer Busfehler | 0 | - |
| 0xE1C468 | BODY- oder IuK-CAN Control Module Bus OFF | 0 | - |
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
| 0x0001 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_00 | 0-n | High | 0x0001 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0002 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_01 | 0-n | High | 0x0002 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0003 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_02 | 0-n | High | 0x0004 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0004 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_03 | 0-n | High | 0x0008 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0005 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_04 | 0-n | High | 0x0010 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0006 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_05 | 0-n | High | 0x0020 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0007 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_06 | 0-n | High | 0x0040 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0008 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_07 | 0-n | High | 0x0080 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0009 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_08 | 0-n | High | 0x0100 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000A | DETECTED_UNEXPECTED_LINK_STATUS_PORT_09 | 0-n | High | 0x0200 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000B | DETECTED_UNEXPECTED_LINK_STATUS_PORT_10 | 0-n | High | 0x0400 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000C | DETECTED_UNEXPECTED_LINK_STATUS_PORT_11 | 0-n | High | 0x0800 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000D | DETECTED_UNEXPECTED_LINK_STATUS_PORT_12 | 0-n | High | 0x1000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000E | DETECTED_UNEXPECTED_LINK_STATUS_PORT_13 | 0-n | High | 0x2000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000F | DETECTED_UNEXPECTED_LINK_STATUS_PORT_14 | 0-n | High | 0x4000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0010 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_15 | 0-n | High | 0x8000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0011 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0012 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0013 | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0014 | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0015 | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0016 | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0017 | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0018 | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0019 | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001A | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001B | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001C | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001D | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001E | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001F | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0020 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0021 | PORT_LINK_OFF_STATUS_00 | 0-n | High | 0x0001 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0022 | PORT_LINK_OFF_STATUS_01 | 0-n | High | 0x0002 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0023 | PORT_LINK_OFF_STATUS_02 | 0-n | High | 0x0004 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0024 | PORT_LINK_OFF_STATUS_03 | 0-n | High | 0x0008 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0025 | PORT_LINK_OFF_STATUS_04 | 0-n | High | 0x0010 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0026 | PORT_LINK_OFF_STATUS_05 | 0-n | High | 0x0020 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0027 | PORT_LINK_OFF_STATUS_06 | 0-n | High | 0x0040 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0028 | PORT_LINK_OFF_STATUS_07 | 0-n | High | 0x0080 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0029 | PORT_LINK_OFF_STATUS_08 | 0-n | High | 0x0100 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002A | PORT_LINK_OFF_STATUS_09 | 0-n | High | 0x0200 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002B | PORT_LINK_OFF_STATUS_10 | 0-n | High | 0x0400 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002C | PORT_LINK_OFF_STATUS_11 | 0-n | High | 0x0800 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002D | PORT_LINK_OFF_STATUS_12 | 0-n | High | 0x1000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002E | PORT_LINK_OFF_STATUS_13 | 0-n | High | 0x2000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002F | PORT_LINK_OFF_STATUS_14 | 0-n | High | 0x4000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0030 | PORT_LINK_OFF_STATUS_15 | 0-n | High | 0x8000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0031 | PORT_00_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0032 | PORT_01_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0033 | PORT_02_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0034 | PORT_03_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0035 | PORT_04_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0036 | PORT_05_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0037 | PORT_06_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0038 | PORT_07_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1754 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1757 | Signalqualität | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x1761 | FILE_MANIPULATED | TEXT | High | 18 | - | 1.0 | 1.0 | 0.0 |
| 0x17D1 | DEVICE_NAME | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17E3 | LAST_CHARACTERS_BEFORE_ERROR | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17E5 | TAB_CE_ENVIRONMENT_CONDITION | 0-n | High | 0xFF | TAB_CE_ENVIRONMENT_CONDITION | - | - | - |
| 0x17EC | ADDRESS | HEX | High | unsigned int | - | - | - | - |
| 0x17F1 | GPS_ZEIT | TEXT | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x4208 | Secondary DTC ID | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x420A | DAB Tuner SW Version | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x420D | PIA Process | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4214 | PIA Profilnummer | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4224 | Videoquelle | 0-n | High | 0xFF | VIDEO_SOURCE | - | - | - |
| 0x4226 | Video Watchdog info | TEXT | High | 4 | - | 1.0 | 1.0 | 0.0 |
| 0x4228 | Address | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x4233 | Communication Failure to Tuner HW | 0-n | High | 0xFF | TUNER_HW_COMMUNICATION_FAILURE_REASON | - | - | - |
| 0x4238 | KISU_STANDARD | 0-n | High | 0xFF | TAB_STANDARD_KISU | - | - | - |
| 0x4240 | ECUID | 0-n | High | 0xFF | CPU | - | - | - |
| 0x4244 | KISU_CUSTOMER | 0-n | High | 0xFF | TAB_CUSTOMER_KISU | - | - | - |
| 0x4245 | AMP_GYRO_CPU/OMAP5_HDD_DVD/BD_GPU_FOT_TEMP | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x4248 | RECOVERY_STEPS | 0-n | High | 0xFF | TAB_RECOVERY_STEPS | - | - | - |
| 0x426C | CRASH_ID | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x4273 | PRODUCT_ID | HEX | High | unsigned int | - | - | - | - |
| 0x4274 | USB_DRIVER_INFO | 0-n | High | 0xFF | TAB_USB_INFO | - | - | - |
| 0x4275 | USB_DELAYED_COUNT | HEX | High | unsigned int | - | - | - | - |
| 0x4276 | ERROR_POSITION_NO | HEX | High | unsigned char | - | - | - | - |
| 0x4277 | VENDOR_INFO | HEX | High | unsigned int | - | - | - | - |
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
| 0x101717 | Video Watch Dog wurde ausgelöst | 0 | - |
| 0x230004 | Kommunikation Einschlafkoordinator: Zeitüberschreitung | 1 | - |
| 0x230008 | Kommunikation Einschlafkoordinator: Nachricht unplausibel | 1 | - |
| 0x806330 | Fehler der Fahrzeug-Security | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_00 | 0-n | High | 0x0001 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0002 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_01 | 0-n | High | 0x0002 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0003 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_02 | 0-n | High | 0x0004 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0004 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_03 | 0-n | High | 0x0008 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0005 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_04 | 0-n | High | 0x0010 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0006 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_05 | 0-n | High | 0x0020 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0007 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_06 | 0-n | High | 0x0040 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0008 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_07 | 0-n | High | 0x0080 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0009 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_08 | 0-n | High | 0x0100 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000A | DETECTED_UNEXPECTED_LINK_STATUS_PORT_09 | 0-n | High | 0x0200 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000B | DETECTED_UNEXPECTED_LINK_STATUS_PORT_10 | 0-n | High | 0x0400 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000C | DETECTED_UNEXPECTED_LINK_STATUS_PORT_11 | 0-n | High | 0x0800 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000D | DETECTED_UNEXPECTED_LINK_STATUS_PORT_12 | 0-n | High | 0x1000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000E | DETECTED_UNEXPECTED_LINK_STATUS_PORT_13 | 0-n | High | 0x2000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000F | DETECTED_UNEXPECTED_LINK_STATUS_PORT_14 | 0-n | High | 0x4000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0010 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_15 | 0-n | High | 0x8000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0011 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0012 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0013 | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0014 | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0015 | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0016 | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0017 | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0018 | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0019 | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001A | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001B | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001C | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001D | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001E | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001F | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0020 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0021 | PORT_LINK_OFF_STATUS_00 | 0-n | High | 0x0001 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0022 | PORT_LINK_OFF_STATUS_01 | 0-n | High | 0x0002 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0023 | PORT_LINK_OFF_STATUS_02 | 0-n | High | 0x0004 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0024 | PORT_LINK_OFF_STATUS_03 | 0-n | High | 0x0008 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0025 | PORT_LINK_OFF_STATUS_04 | 0-n | High | 0x0010 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0026 | PORT_LINK_OFF_STATUS_05 | 0-n | High | 0x0020 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0027 | PORT_LINK_OFF_STATUS_06 | 0-n | High | 0x0040 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0028 | PORT_LINK_OFF_STATUS_07 | 0-n | High | 0x0080 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0029 | PORT_LINK_OFF_STATUS_08 | 0-n | High | 0x0100 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002A | PORT_LINK_OFF_STATUS_09 | 0-n | High | 0x0200 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002B | PORT_LINK_OFF_STATUS_10 | 0-n | High | 0x0400 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002C | PORT_LINK_OFF_STATUS_11 | 0-n | High | 0x0800 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002D | PORT_LINK_OFF_STATUS_12 | 0-n | High | 0x1000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002E | PORT_LINK_OFF_STATUS_13 | 0-n | High | 0x2000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002F | PORT_LINK_OFF_STATUS_14 | 0-n | High | 0x4000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0030 | PORT_LINK_OFF_STATUS_15 | 0-n | High | 0x8000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0031 | PORT_00_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0032 | PORT_01_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0033 | PORT_02_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0034 | PORT_03_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0035 | PORT_04_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0036 | PORT_05_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0037 | PORT_06_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0038 | PORT_07_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1754 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1757 | Signalqualität | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x1761 | FILE_MANIPULATED | TEXT | High | 18 | - | 1.0 | 1.0 | 0.0 |
| 0x17D1 | DEVICE_NAME | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17E3 | LAST_CHARACTERS_BEFORE_ERROR | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17E5 | TAB_CE_ENVIRONMENT_CONDITION | 0-n | High | 0xFF | TAB_CE_ENVIRONMENT_CONDITION | - | - | - |
| 0x17EC | ADDRESS | HEX | High | unsigned int | - | - | - | - |
| 0x17F1 | GPS_ZEIT | TEXT | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x4208 | Secondary DTC ID | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x420A | DAB Tuner SW Version | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x420D | PIA Process | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4214 | PIA Profilnummer | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4224 | Videoquelle | 0-n | High | 0xFF | VIDEO_SOURCE | - | - | - |
| 0x4226 | Video Watchdog info | TEXT | High | 4 | - | 1.0 | 1.0 | 0.0 |
| 0x4228 | Address | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x4233 | Communication Failure to Tuner HW | 0-n | High | 0xFF | TUNER_HW_COMMUNICATION_FAILURE_REASON | - | - | - |
| 0x4238 | KISU_STANDARD | 0-n | High | 0xFF | TAB_STANDARD_KISU | - | - | - |
| 0x4240 | ECUID | 0-n | High | 0xFF | CPU | - | - | - |
| 0x4244 | KISU_CUSTOMER | 0-n | High | 0xFF | TAB_CUSTOMER_KISU | - | - | - |
| 0x4245 | AMP_GYRO_CPU/OMAP5_HDD_DVD/BD_GPU_FOT_TEMP | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x4248 | RECOVERY_STEPS | 0-n | High | 0xFF | TAB_RECOVERY_STEPS | - | - | - |
| 0x426C | CRASH_ID | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x4273 | PRODUCT_ID | HEX | High | unsigned int | - | - | - | - |
| 0x4274 | USB_DRIVER_INFO | 0-n | High | 0xFF | TAB_USB_INFO | - | - | - |
| 0x4275 | USB_DELAYED_COUNT | HEX | High | unsigned int | - | - | - | - |
| 0x4276 | ERROR_POSITION_NO | HEX | High | unsigned char | - | - | - | - |
| 0x4277 | VENDOR_INFO | HEX | High | unsigned int | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### LINK_RESET_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0x0 | Linkverlust aufgrund SG-externen Ereignisses |
| 0x1 | Linkverlust aufgrund SG-interen Ereignisses |

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

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0XA00B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENTSOURCE | - | - | + | 0-n | - | unsigned char | - | TAB_ENTSOURCE | - | - | - | die eingestellte Entertainmentquelle |
| STAT_DESIRED_ENTSOURCE | - | - | + | 0-n | - | unsigned char | - | TAB_ENTSOURCESTATUS | - | - | - | gibt zurück, ob die letzte einzustellende Entertainmentquelle verfügbar war. |

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
| STAT_FEHLER_4_EINGANG | - | - | + | 0-n | - | unsigned long | - | TAB_FBASEINGANG | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
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
| STAT_FREQUENCY_WERT | - | - | + | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Frequenz in Hz (0x0014 bis 0x4E20) |
| STAT_LEVEL_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | -8.0 | 0.0 | Pegel in [dB], Genauigkeit 1/8dB |
| STAT_AUDIOCHANNEL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | bezeichnet den Kanal, auf dem gemessen wurde |
| STAT_TIME_WERT | - | - | + | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | gibt die Dauer der Messung wieder (0x0000 bis 0xFFFF) |
| STAT_LAUTSPRECHER_IMPEDANZMESSUNG | - | - | + | 0-n | - | unsigned char | - | TAB_TEST_STATUS | - | - | - | gibt den Status des gesamten Tests oder der entsprechenden Kanäle wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_KANAELE_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gibt wieder, wieviele fehlerhafte Kanäle während des Tests gefunden wurden |
| STAT_FEHLER_01_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_01_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_02_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_02_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_03_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_03_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_04_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_04_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_05_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_05_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_06_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_06_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_07_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_07_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_08_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_08_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_09_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_09_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_10_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_10_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_11_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_11_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_12_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_12_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_13_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_13_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_14_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_14_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_15_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_15_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_16_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_16_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_17_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_17_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_18_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_18_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_19_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_19_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_20_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_20_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_21_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_21_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_22_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_22_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_23_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_23_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_24_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_24_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_25_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_25_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_26_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_26_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_27_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_27_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_28_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_28_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_29_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_29_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_30_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_30_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_31_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_31_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_32_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_32_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |

### RES_0XA025_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LANGUAGE | - | - | + | 0-n | - | unsigned char | - | TAB_LANGUAGE | - | - | - | Liest die derzeit eingestellte MMI Sprache. |

### RES_0XA039_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEVEL_WERT | + | - | - | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F, Nicht unterstützte Werte (Stereo: 0x3F) dürfen nicht zu Fehlermeldungen führen. Sondern die für das Lautsprechersystem nächstmöglich kleinere verfügbare Lautstärke wird eingestellt.   Bei manchen sekundären Lautstärken wie Navi-Out wird die Lautstärke relativ angegeben, z.B: [-11;11]  Bei Verstärkern: Integer, -96..0 [dB] |

### RES_0XA03C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER | - | - | + | 0-n | - | unsigned char | - | TAB_LUEFTERSTATUS | - | - | - | Status des Lüfters |
| STAT_LUEFTER_DREHZAHL_WERT | - | - | + | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuelle Frequenz des Lüfters in Hz (wenn nicht abfragbar, wird 0xFFFF zurückgegeben) |

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

### RES_0XA082_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_DATABASES | - | - | + | 0-n | high | unsigned char | - | TProcessStatus | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TProcessStatus |

### RES_0XA083_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_PIA_SETTINGS | - | - | + | 0-n | high | unsigned char | - | TProcessStatus | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TProcessStatus |

### RES_0XA0B4_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INST_ID_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MOST Instance ID |
| STAT_VISIBLE_CONTEXT_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HMI menue ID |
| STAT_FOCUS_INDEX_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Index des auswaehlbaren Element der HMI in der angezeigten Tafel |
| STAT_LIST_INDEX_WERT | - | - | + | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Index des auswaehlbaren Element innerhalb der Liste (falls zutreffend)  |

### RES_0XA0FD_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEBUG_MODE | - | - | + | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Status des Zugangs zur seriellen Schnittstelle |

### RES_0XA142_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEEK_FINISHED | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0b1: Wenn der Suchlauf beendet ist 0b0: Wenn der Suchlauf nicht beendet ist |
| STAT_FREQ_KHZ_WERT | - | - | + | kHz | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Frequenz in kHz (Falls der Suchlauf noch nicht beendet ist, muss ungueltig = 0xFF FF FF FF zurückgegeben werden. Wenn keine empfangbare Frequenz gefunden wurde, muss die zuvor eingestellte Frequenz wieder eingestellt werden.) |

### RES_0XA143_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEEK_FINISHED | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0b1: Wenn der Suchlauf beendet ist 0b0: Wenn der Suchlauf nicht beendet ist |
| STAT_ENSEMBLE_NAME_TEXT | - | - | + | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Ensemble-Name (leerer String, wenn kein Ensemble gefunden wurde) |
| STAT_SERVICE_NAME_TEXT | - | - | + | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Service-Name (leerer String, wenn kein Ensemble gefunden wurde) |

### RES_0XA144_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SXM_PREACTIVATION_MODE_STATE | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0b1: MPFA aktiviert. 0b0: MPFA nicht aktiviert. |
| STAT_SXM_MPFA_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beinhaltet zuletzt aktiviertes Kanal-Paket, auch wenn nicht aktiviert. |
| STAT_SXM_MPFA_COMPLETNESS | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Gibt an, ob die Berechnung des Pellets und die Aktivierung des Sender Pakets beendet ist. 0 = nicht fertig 1 = fertig |

### RES_0XD014_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MUTE | 0-n | - | unsigned char | - | TAB_ONOFF | - | - | - | The current entertainment source is not muted (audio on) 0x00 The current entertainment source is muted (audio off) 0x01 |

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

### RES_0XD028_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADON | 0-n | - | unsigned char | - | TAB_ONOFF | - | - | - | Status des Ausgangssignals RADON |

### RES_0XD03F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HMI_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle HMI Version als String, wie im Entwicklermenü angezeigt |
| STAT_SVS_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle SVS Version als String, wie im Entwicklermenü angezeigt |
| STAT_TEXT_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle TEXT Version als String, wie im Entwicklermenü angezeigt |

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

### RES_0XD1DE_D

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

### RES_0XD5CF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISPLAY_AKTIVIERUNG | 0-n | - | unsigned char | - | TStatusDisplayActivationMode | 1.0 | 1.0 | 0.0 | Display-Aktivierung [uint8, 0x0..0xF]  (Signal ENB_DISP von Head Unit) |
| STAT_OFFSET_HELLIGKEIT_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Offset Helligkeit [sint8, -127..+127 = -100..+100%, 128 = Ungültig, Fehlerwert]  (Signal OFFS_BRIG_FRT von Head Unit) |
| STAT_DIMMRAD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dimmrad-Stellung [uint8, 0..254 = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal CTR_ILUM_SW) |
| STAT_HELLIGKEIT_KOMBI_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Helligkeitswert I-Kombi-Helligkeits-Sensor [uint8, 0..254  = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal DSTN_LCD_LUM) |
| STAT_DAEMPFUNG_LCD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dämpfung LCD Leuchtdichte [uint8, 0..240 = schnell..langsam, 241..254 = sprunghaft, 255 = FF = Ungültig, Fehlerwert], Geschwindigkeit der Helligkeitsregelung. (Signal DMPNG_LCD_LUM) |

### RES_0XE2C3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AM_FIELDSTRENGTH_DBUV_WERT | dBµV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Feldstärke der AM-Antenne in dBuV |
| STAT_FM1_FIELDSTRENGTH_DBUV_WERT | dBµV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Feldstärke der FM1-Antenne in dBuV |
| STAT_FM2_FIELDSTRENGTH_DBUV_WERT | dBµV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Feldstärke der FM2-Antenne in dBuV |

### RES_0XE2C4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FM1_AM_SUPPLYCURRENT_MA_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromaufnahme des FM1/AMAntennenverstärkers in mA |
| STAT_FM2_SUPPLYCURRENT_MA_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromaufnahme des FM2 Antennenverstärkers in mA |

### RES_0XE2C7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAB1_FIELDSTRENGTH_DBUV_WERT | dBµV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Feldstärke der DAB1-Antenne in dBuV |
| STAT_DAB2_FIELDSTRENGTH_DBUV_WERT | dBµV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Feldstärke der DAB2-Antenne in dBuV |

### RES_0XE2C8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAB1_SUPPLYCURRENT_MA_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromaufnahme des DAB1-Antennenverstärkers in mA |
| STAT_DAB2_SUPPLYCURRENT_MA_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromaufnahme des DAB2-Antennenverstärkers in mA Falls auscodiert: 0 mA |

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

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_AKTIVIERUNGSLEITUNG | 0x1024 | - | Reset_Aktivierungsleitung DOORS-ID: FZHS_3798 | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_LIFECYCLE | 0x1735 | STAT_LIFECYCLE | Status Lifecycle | 0-n | - | High | unsigned char | STATUS_LIFECYCLE_DOP | - | - | - | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EQDATA_FILENAME | 0x4008 | STAT_EQ_FILENAME_TEXT | Name des  EQ-File; Datei name als dynamischer string | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BT_FIRMWARE | 0x4032 | STAT_BT_FIRMWARE_TEXT | Bluetooth Firmwareversion | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EMMC_REGISTER_CID | 0x404E | STAT_CID_REGISTER_DATA | Inhalt des Geräte-ID-Registers (CID-Register) des eMMC | DATA | - | High | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLANGZEICHEN | 0xA000 | - | Steuert eine Tonart an (Klingel,Gong) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA000_R | - |
| SINUSGENERATOR | 0xA001 | - | Sinuston auf einen oder mehrere Kanäle aus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA001_R | - |
| STEUERN_VOLUMEAUDIO_DEFAULT | 0xA002 | - | Zurücksetzen aller Lautstärkewerte auf Default-Werte | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_PDC_SIGNAL | 0xA003 | - | Simulates the tone that is hearable at a definite distance to an obstacle. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA003_R | - |
| STEUERN_LINEAR | 0xA004 | - | Zurücksetzen der Fader und Lautstärke auf Default-Werte | - | - | - | - | - | - | - | - | - | 31 | - | - |
| NEXT_ENTSOURCE | 0xA00B | - | Steuerung Entertainmentquellen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA00B_R | RES_0xA00B_R |
| VIDEOVERBINDUNG | 0xA01C | - | Steuern, Stoppen und Abfragen einer Videoverbindung . | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01C_R | RES_0xA01C_R |
| TEST_VIDEOEINGANG | 0xA01D | - | Testet die Videoeingänge durch Analyse der dort anliegenden Signale | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01D_R | RES_0xA01D_R |
| TEST_VERBAU | 0xA01E | - | Startet die Verbauprüfung der externen Anschlüsse. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01E_R | RES_0xA01E_R |
| LAUTSPRECHER_IMPEDANZMESSUNG | 0xA021 | - | Impedanzmessung (AC-Messung) auf einem oder mehreren Kanälen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA021_R | RES_0xA021_R |
| LANGUAGE | 0xA025 | - | Liest und setzt die aktuelle MMI Sprache. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA025_R | RES_0xA025_R |
| STEUERN_VOLUMEAUDIO | 0xA036 | - | Verstellt die ausgewählte Lautstärke | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA036_R | - |
| STATUS_VOLUMEAUDIO | 0xA039 | - | Liest die ausgewählte Lautstärke aus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA039_R | RES_0xA039_R |
| LUEFTER | 0xA03C | - | Lüfter | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03C_R | RES_0xA03C_R |
| BT | 0xA048 | - | aktiviert/dekativiert Bluetooth | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA048_R | RES_0xA048_R |
| BT_ERKENNUNGSMODUS | 0xA049 | - | BT Erkennungsmodus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA049_R | RES_0xA049_R |
| BT_READ_PHONE_ID | 0xA04A | - | Telefon ID | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA04A_R | RES_0xA04A_R |
| RESET_DATABASES | 0xA082 | - | Löschen der persönlichen Telefon Einstellungen und API-Funktionen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA082_R | RES_0xA082_R |
| RESET_PIA_SETTINGS | 0xA083 | - | Wiederherstellung des Auslieferungszustandes für den gewählten Schlüssel | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA083_R | RES_0xA083_R |
| DEBUG_MODE_ON | 0xA0B0 | - | Aktivierung des Zugangs zum seriellen Zugang | - | - | - | - | - | - | - | - | - | 31 | - | - |
| GRAPHICAL_CONTEXT | 0xA0B4 | - | This service makes HMI jump to menues/list entries and can simulate ZBE push and returnes HMI Graphical context conditions | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0B4_R | RES_0xA0B4_R |
| INTERNAL_TRACE_DISABLE_UNCONDITIONAL_TRACING | 0xA0BC | - | Legt das irreversible Flag für die Aktivierung der internen Ablaufverfolgung unter 255 km auf False. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| AUDIOKANAELE | 0xA0CC | - | Verstellt und liest den aktuell eingestellten Lautsprecherkanal. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0CC_R | - |
| DEBUG_MODE_OFF | 0xA0FC | - | deaktiviert den Debug Mode der HU | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DEBUG_MODE | 0xA0FD | - | Status vom Debug Mode | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0FD_R |
| TUNER_FM_AM_FIND_BEST_STATION | 0xA142 | - | Sucht die Frequenz mit der höchsten Feldstärke im angegebenen Wellenbereich und gibt die Frequenz zurück. Dauer: mehrere Sekunden | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA142_R | RES_0xA142_R |
| TUNER_DAB_FIND_BEST_ENSEMBLE | 0xA143 | - | Ermittelt das Ensemble mit der niedrigsten Bitfehlerrate, stellt den ersten Service ein und gibt beide Namen auf Anfrage zurück. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA143_R |
| TUNER_SDARS_PREACTIVATION_MPFA | 0xA144 | - | Steuert die Standard-Händler-Aktivierung des SDARS-Empfangs (eingschränkte Kanal-Anzahl für Demonstrationszwecke). MPFA = Multi Package Factory Activation | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA144_R | RES_0xA144_R |
| STATUS_LESEN_SYSTEMAUDIO | 0xD002 | STAT_AUDIO_SYSTEM | bezeichnet das Lautsprechersystem | 0-n | - | - | unsigned char | TAudioSystem | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| INITIALISIERUNG | 0xD004 | STAT_INITIALISIERUNG | Initialisierungsstatus | 0-n | - | - | unsigned char | TAB_INITIALISIERUNG | - | - | - | - | 22 | - | - |
| MUTE | 0xD014 | - | Mute-Funktion | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD014_D | RES_0xD014_D |
| SER_NR_DOM_LESEN | 0xD019 | STAT_SER_NR_DOM_TEXT | Ließt die Seriennummer mit 14 Zeichen (DIN ISO 10 486) | TEXT | - | - | string[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BT_GERAETEADRESSE | 0xD01A | STAT_BT_GERAETEADRESSE_DATA | liefert die Adresse des Bluetooth Gerätes | DATA | - | - | data[6] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BT_GERAETENAME | 0xD01C | STAT_BT_GERAETENAME_TEXT | liest den Bluetooth Gerätename | TEXT | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BT_GEKOPPELTE_GERAETE_LESEN | 0xD01D | - | Geräte-Adresse der letzten vier gekoppelten Bluetooth Geräte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD01D_D |
| APPLICATION | 0xD021 | - | Status aller freischaltbaren Applikationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD021_D |
| RADON | 0xD028 | - | Ein- oder Ausschalten bzw. Abfragen des Radon-Signals. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD028_D | RES_0xD028_D |
| STATUS_HMI_VERSION | 0xD03F | - | HMI Software Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD03F_D |
| TIME_AFTER_STARTUP | 0xD092 | STAT_TIME_AFTER_START_UP_WERT | Werte von 0-65535 [s], die angeben, wie viel Zeit seit dem Hochstarten (Aufwecken) vergangen ist | s | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ZIN_SHOWCOLOR | 0xD0BD | - | Steuert die Füllung (Helligkeit) des Zentralinstruments. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0BD_D | - |
| ZIN_TESTBILD | 0xD0BE | - | Aktiviert das Testbild im Zentralinstrument. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0BE_D | - |
| ZIN_WIDGET_ID | 0xD0BF | - | Löst eine Animation aus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0BF_D | - |
| ZIN_HELLIGKEITSWERT | 0xD0C6 | - | Steuert die Gesamthelligkeit des Zentralinstruments. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0C6_D | - |
| ZIN_RESET | 0xD0C7 | - | Löst einen Reset im Zentralinstrument aus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0C7_D | - |
| ZIN_ENDE | 0xD0C8 | - | Beendet die Diagnosesitzung des Zentralinstruments und setzt aller Parameter die durch vorherige Diagnoseanfragen geändert wurden zurück. Das Zentralinstrument kehrt in den  normalen Modus  zurück. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0C8_D | - |
| ZIN_CENTRAL_INSTRUMENT | 0xD0C9 | - | Gibt die Statusinformationen des Zentralinstruments zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0C9_D |
| ZIN_EVENT_QUEUE | 0xD0CA | - | Gibt die Statusinformationen des Zentralinstruments zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0CA_D |
| ZIN_INTERNAL_STATES | 0xD0CB | - | Gibt die Statusinformationen des Zentralinstruments zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0CB_D |
| INTERNAL_TRACE | 0xD1DE | - | Status des internen Tracen | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD1DE_D | RES_0xD1DE_D |
| USB_TEST | 0xD207 | - | verbundene USB Geräte an der HU | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD207_D |
| CID_TOUCHINDICATOR | 0xD25B | - | aktivieren/ deaktivieren des Touch/Proximity Indikators | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD25B_D | - |
| CID_TESTBILD | 0xD5C1 | - | Ansteuerung der Testbild-Ausgabe vom CID. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C1_D | - |
| CID_STEUERN | 0xD5C2 | - | Ein- und Ausschalten des CID per Diagnose. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C2_D | - |
| CID_BACKLIGHT | 0xD5C4 | - | Ansteuerung der Hintergrundbeleuchtung des CIDs per Diagnose. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C4_D | - |
| CID_STEUERN_ENDE | 0xD5C9 | - | Beendet alle Ansteuerungen im CID, die mit Diagnose  gestartet worden sind. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C9_D | - |
| CID_HELLIGKEIT_ISTWERT | 0xD5CE | STAT_HELLIGKEIT_IST_WERT | Ist-Helligkeitswert | % | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_EINGANGSWERTE_LESEN | 0xD5CF | - | Ausgabe der aktuellen Eingangswerte des CID. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5CF_D |
| TUNER_FM_AM_DAB_GET_TUNED_FREQUENCY | 0xE2C0 | STAT_FREQ_KHZ_WERT | AM hörbar: aktuell eingestellte AM-Frequenz  FM hörbar: aktuell eingestellte FM-Frequenz  DAB hörbar: aktuell eingestellte DAB-Frequenz | kHz | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_FM_AM_SET_FREQUENCY | 0xE2C1 | - | Setzt die aktuell hörbare Empfangfrequenz einschließlich ggf. notwendigem Wellenbereichswechsel. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE2C1_D | - |
| TUNER_FM_AM_GET_HD_FIRMWARE_VERSION | 0xE2C2 | STAT_FW_VERSION_TEXT | Firmware-Version in Form einer Zeichenkette | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_FM_AM_GET_FIELDSTRENGTH | 0xE2C3 | - | Gibt die Feldstärke des Hörsenders auf der angegebenen Antenne in vollen dBuV zurück. Werte größer 0 dBuV werden als 0 dBuV ausgegeben. Feldstärkewerte, die technisch bedingt nicht verfügbar sind, werden als 0xFF ausgegeben (z.B. AM-Wert = 0xFF, wenn das Gerät im FM-Mode ist). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2C3_D |
| TUNER_FM_AM_GET_ANTENNA_SUPPLY_CURRENT | 0xE2C4 | - | Gibt die Stromaufnahme der Antennenverstärker in vollen mA zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2C4_D |
| TUNER_DAB_GET_BIT_ERROR_RATE | 0xE2C5 | STAT_BIT_ERROR_RATE_WERT | BitErrorRate (BER) in % | - | - | High | motorola float | - | 100.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_DAB_GET_SIGNAL_STATUS | 0xE2C6 | STAT_SIGNAL_STATUS | 0b1: Wenn das DAB-Audiosignal verfügbar ist 0B0: Wenn das DAB-Audiosignal nicht verfügbar ist | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| TUNER_DAB_GET_FIELDSTRENGTH | 0xE2C7 | - | Gibt die Feldstärkewerte der Antennen in vollen dBuV zurück. Werte kleiner 0 dBuV werden als 0 dBuV ausgegeben. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2C7_D |
| TUNER_DAB_GET_ANTENNA_SUPPLY_CURRENT | 0xE2C8 | - | Gibt die Stromaufnahme der DAB Antennenverstärker in vollen mA zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2C8_D |
| TUNER_SDARS_GET_SXM_PHONENUMBER | 0xE2C9 | STAT_SXM_TEL_NO_TEXT | SXM-Telefonnummer (max. 35-stellig) | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_SDARS_SET_SXM_PHONENUMBER | 0xE2CA | - | Schreibt die angegebene SXMTelefonnummer in das Modul. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE2CA_D | - |
| TUNER_SDARS_GET_RADIO_ID | 0xE2CB | STAT_RADIO_ID_TEXT | Radio ID als String | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_SDARS_GET_PELLET | 0xE2CC | STAT_SXM_PELLET_TEXT | Eindeutiger Wert, der aus Radio ID und MPFA (Multi Package Factory Activation) berechnet wird. String mit 100Byte Länge | TEXT | - | High | string[100] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_SDARS_GET_SOFTWARE_VERSION | 0xE2CD | - | Liest alle für SDARS relevanten Softwareversionen aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2CD_D |
| STEUERN_PERSISTENZ | 0xF003 | - | Persistenz löschen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF003_R | - |
| BT_DELETE_ALL_PHONE_ID | 0xF007 | - | Phone ID | - | - | - | - | - | - | - | - | - | 31 | - | - |
| INTERNAL_TRACE_RESET_UNCONDITIONAL_TRACING | 0xF021 | - | Zurücksetzen des Tracingflags | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STATUS_LIFECYCLE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Application Mode |
| 1 | Flash Mode |
| 2 | Coding Mode |

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

### TAB_AUDIO_CHANNEL

| WERT | TEXT |
| --- | --- |
| 0x00 | alle Kanäle |
| 0x01 | vorne links (Mitteltöner oder Bikombination) (FL) |
| 0x02 | vorne rechts (Mitteltöner oder Bikombination) (FR) |
| 0x03 | hinten links (Mitteltöner oder Bikombination) (RL) |
| 0x04 | hinten rechts (Mitteltöner oder Bikombination) (RR) |
| 0x05 | Zentralbass links (CBL) |
| 0x06 | Zentralbass rechts (CBR) |
| 0x07 | Center (Mitteltöner oder Bikombination) ( C) |
| 0x08 | surround links (Mitteltöner oder Bikombination) (SURL) |
| 0x09 | surround rechts (Mitteltöner oder Bikombination) (SURR) |
| 0x0A | vorne links Hochtöner (FL_TW) |
| 0x0B | vorne rechts Hochtöner  (FR_TW) |
| 0x0C | hinten links Hochtöner (RL_TW) |
| 0x0D | hinten rechts Hochtöner  (RR_TW) |
| 0x0E | Center Hochtöner  (C_TW) |
| 0x0F | surround links Hochtöner  (SURL_TW) |
| 0x10 | surround rechts Hochtöner (SURR_TW) |
| 0x11 | vorne links 3D (FL_3D) |
| 0x12 | vorne rechts 3D (FR_3D) |
| 0x13 | hinten links 3D (RL_3D) |
| 0x14 | hinten rechts 3D  (RR_3D) |
| 0x15 | aux 1 3D  (AUX1_3D) |
| 0x16 | aux 2 3D (AUX2_3D) |
| 0x17 | lokale Hörzone Fahrer links (LHZDL) |
| 0x18 | lokale Hörzone Fahrer rechts (LHZDR) |
| 0x19 | lokale Hörzone Beifahrer links (LHZPAL) |
| 0x1A | lokale Hörzone Beifahrer rechts  (LHZPAR) |
| 0x1B | lokale Hörzone hinten links links (LHZRLL) |
| 0x1C | lokale Hörzone hinten links rechts (LHZRLR) |
| 0x1D | lokale Hörzone hinten rechts links (LHZRRL) |
| 0x1E | lokale Hörzone hinten rechts rechts (LHZRRR) |
| 0x1F | Fahrzeugsound Generator vorne (VSGF) |
| 0x20 | Fahrzeugsound Generator hinten (VSGR) |
| 0x21 | Außensound 1  (SO1) |
| 0x22 | Außensound 2  (SO2) |
| 0xFF | Nicht definiert |

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

### TAB_DELPIASETTING

| WERT | TEXT |
| --- | --- |
| 0x00000000 | All PIA Settings |
| 0x00000001 | Tone settings |
| 0x00000002 | FBMs |
| 0x00000004 | Address book/contacts |
| 0x00000008 | Station lists |
| 0x00000010 | Language/Units |
| 0x000000FF | Not defined |

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

### TAB_GONG_DURATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Single |
| 0x01 | Intermittend |
| 0xFF | Wert ungültig |

### TAB_GONG_SINK

| WERT | TEXT |
| --- | --- |
| 0x00 | MainSink |
| 0x01 | Front Right |
| 0x02 | Front Left |
| 0x03 | Rear Right |
| 0x04 | Rear Left |
| 0xFF | Wert ungültig |

### TAB_INITIALISIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | IO initialisiert |
| 0xFF | nicht definiert |

### TAB_INTERNALTRACE

| WERT | TEXT |
| --- | --- |
| 0x00 | startet internes Tracing |
| 0x01 | stoppt internes Tracing |
| 0x02 | löscht alle internen Traces |

### TAB_KANAL_FEHLERART

| WERT | TEXT |
| --- | --- |
| 0x02 | Leitungsunterbrechung |
| 0xFF | Nicht definiert |

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

### TAB_LUEFTERSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Lüfter steht |
| 0x01 | Lüfter dreht sich, aber nicht mit der erwarteteten Drehzahl |
| 0x02 | Lüfter dreht sich mit der erwarteteten Drehzahl |
| 0xFF | nicht definiert |

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
| 0x00000080 | OTA related data (Provisioning) |
| 0x00000100 | WLAN related data |
| 0x00000200 | Navigation destinations/route |
| 0x00000400 | Voice memo |
| 0xFFFFFFFF | Not defined |

### TAB_SERVICEHISTORY

| WERT | TEXT |
| --- | --- |
| 0x00 | alles OK |
| 0x01 | nicht genügend Speicher |
| 0x02 | Daten inkonsistent |
| 0x04 | keine Schreibberechtigung |
| 0x05 | unbekannter Fehler |
| 0xFF | Wert ungültig |

### TAB_SOUND_SIGNAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Stop Gong |
| 0x01 | ASILAGONG |
| 0x02 | CWA |
| 0x03 | WA |
| 0x04 | ETC_Success |
| 0x05 | ETC_Failure |
| 0x06 | ETC_Stop |
| 0x07 | ETC_Failure_2 |
| 0x08 | IWA |
| 0x09 | QUE |
| 0x0A | NUN |
| 0x0B | DIW |
| 0x0C | IDIW |
| 0x0D | POC |
| 0x0E | REV |
| 0x0F | Sample_GONG |
| 0x10 | Sample_PDC |
| 0x11 | Testtone1 |
| 0x12 | Testtone2 |
| 0x13 | Testtone3 |
| 0x14 | Testtone4 |
| 0x15 | Testtone5 |
| 0x16 | FBS |
| 0x17 | VFS |
| 0x18 | SIO |
| 0x19 | SIC |
| 0x1A | TCL |
| 0x1B | GEN |
| 0x1C | GEP |
| 0x1D | UEE |
| 0x1E | UEC |
| 0x1F | TIK |
| 0x20 | TOK |
| 0x21 | OBS |
| 0x22 | LAZ_Obstacle Warning |
| 0x23 | LAZ_Informative Warning |
| 0x24 | LAZ_Question |
| 0x25 | LAZ_Neutral Notice |
| 0x26 | LAZ_Double Informative Warning |
| 0x27 | LAZ_Intermittent DIW |
| 0x28 | LAZ_Positive Confirmation |
| 0x29 | LAZ_Speech Input Open |
| 0x2A | LAZ_Speech Input Close |
| 0x2B | LAZ_Touch Click |
| 0x2C | LAZ_Gesture Negative |
| 0x2D | LAZ_Gesture Positive |
| 0x2E | LAZ_User Entry Error |
| 0x2F | LAZ_User Entry Confirmation |
| 0x30 | LAZ_Sample Sound (IWA) |
| 0x31 | LAZ_Testtone1 |
| 0x32 | LAZ_Testtone2 |
| 0x33 | LAZ_Testtone3 |
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

### TAB_STATUS_INTERNAL_TRACE

| WERT | TEXT |
| --- | --- |
| 0x00 | deaktiviert durch Kilometerstand oder SWT |
| 0x01 | verfügbar nach Kilometerstand, aber nicht aktiviert |
| 0x02 | von SWT verfügbar, aber nicht aktiviert |
| 0x03 | aktiviert |
| 0x04 | läuft nicht, aber Traces verfügbar |
| 0xFF | Wert ungültig |

### TAB_STATUS_USBHUB

| WERT | TEXT |
| --- | --- |
| 0x00 | kein USB HUB codiert |
| 0x01 | USB HUB codiert |
| 0xFF | nicht definiert |

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
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0xFF | Nicht definiert |

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

### TAB_USBTEST_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Gerät verbunden |
| 0x01 | Gerät angeschlossen, Erkennung im Gange |
| 0x02 | erkanntes Gerät ist ein Massenspeicher |
| 0x03 | erkanntes Gerät ist ein HUB |
| 0xFE | Gerät erkannt, aber weder Massenspeicher noch HUB |
| 0xFF | nicht definiert |

### TAB_USB_INFO

| WERT | TEXT |
| --- | --- |
| 0x01 | Driver |
| 0x02 | FileSystem |

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

### TKEYNR

| WERT | TEXT |
| --- | --- |
| 0x00 | Profil 1 |
| 0x01 | Profil 2 |
| 0x02 | Profil 3 |
| 0x0A | Gast |
| 0x0F | Händler |
| 0x10 | Auto |
| 0xFE | Alle |
| 0xFF | Alle Schlüssel |

### TPROCESSSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | Prozess nicht gestartet |
| 1 | Prozess läuft |
| 2 | Prozess beendet ohne Fehler |
| 3 | Prozess beendet mit Fehler |
| 255 | nicht definiert |

### TSTATUSDISPLAYACTIVATIONMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | CID aus |
| 0x01 | CID an |
| 0xFF | nicht definiert |

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

### TAB_0X1752

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 |

### TAB_0X1754

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0031 | 0x0032 | 0x0033 | 0x0034 | 0x0035 | 0x0036 | 0x0037 | 0x0038 |

### TAB_0X175A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 |

### TAB_0X175B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 |

### UNEXPECTED_LINK_UP_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0 | für unbelegte Ports kein Link-up festgestellt bzw. Link auf Port zulässig |
| 1 | Link-up auf eigentlich unbelegtem Port festgestellt |

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

### DEVUDS_HWNAME

| WERT | NAME | HU |
| --- | --- | --- |
| 0x00000000 | unknown | unknown |
| 000042E4 | BIS DAB RFK MINI RUECKO (DAB,USB1,BT,MicIn,Video,LIN) | BIS-01 |
| 000042E5 | BIS SDARS RFK MINI RUECKO  (SDARS,IBOC,USB1,BT,MicIn,Video,LIN) | BIS-01 |
| 0xFFFFFFFF | unknown | unknown |

### DEVUDS_SWNAME

| WERT | NAME |
| --- | --- |
| 000042BA | BIS-01 Bootloader (tests.) |
| 000042BD | BIS-01 SWFL APP_IBC (tests.) |
| 00004722 | BIS-01 SWFL APP_M4(tests.) |
| 00004723 | BIS-01 SWFL APP_KERNEL (tests.) |
| 00004724 | BIS-01 SWFL EQDATA (tests.) |
| 00004725 | BIS-01 SWFL GW (tests.) |
| 00004726 | BIS-01 SWFL GONG (tests.) |
| 00004727 | BIS-01 SWFL PDC_SOUND (tests.) |
| 00004728 | BIS-01 SWFL IND_SOUND (tests.) |
| 00004729 | BIS-01 SWFL RL78FW(tests.) |
| 0000472A | BIS-01 SWFL DABFW (tests.) |
| 0000472B | BIS-01 SWFL SDARSFW (tests.) |
| 0000472C | BIS-01 SWFL APPDIAG(tests.) |
| 0000472D | BIS-01 SWFL BT_MEDIA_APP(tests.) |
| 0000472E | BIS-01 SWFL BT_MEDIA_STACK(tests.) |
| 0000472F | BIS-01 SWFL DAB (tests.) |
| 00004730 | BIS-01 SWFL DELMING (tests.) |
| 00004731 | BIS-01 SWFL DEVSETTING(tests.) |
| 00004732 | BIS-01 SWFL HMI_BMW(tests.) |
| 00004733 | BIS-01 SWFL HMI_COMMON(tests.) |
| 00004734 | BIS-01 SWFL HMI_COMMON_DATA(tests.) |
| 00004735 | BIS-01 SWFL HMI_GRAPHIC(tests.) |
| 00004736 | BIS-01 SWFL HMI_LI(tests.) |
| 00004737 | BIS-01 SWFL HMI_MINI(tests.) |
| 00004738 | BIS-01 SWFL IVIPF_APN(tests.) |
| 00004739 | BIS-01 SWFL IVIPF_CINEMO(tests.) |
| 00004709 | BIS-01 SWFL IVIPF_OMAP(tests.) |
| 0000470A | BIS-01 SWFL IVIPF_SOMEIP(tests.) |
| 0000470B | BIS-01 SWFL IVIPF1(tests.) |
| 0000470C | BIS-01 SWFL IVIPF2(tests.) |
| 0000470D | BIS-01 SWFL IVIPF3(tests.) |
| 0000470E | BIS-01 SWFL IVIPF4(tests.) |
| 0000470F | BIS-01 SWFL LOG(tests.) |
| 00004710 | BIS-01 SWFL MP_BT(tests.) |
| 00004711 | BIS-01 SWFL MP_COMMON(tests.) |
| 00004712 | BIS-01 SWFL MP_USB(tests.) |
| 00004713 | BIS-01 SWFL NM_SOMEIP(tests.) |
| 00004714 | BIS-01 SWFL NM_VMOST(tests.) |
| 00004715 | BIS-01 SWFL NM_PIM(tests.) |
| 00004716 | BIS-01 SWFL SDARS(tests.) |
| 00004717 | BIS-01 SWFL SPLASH(tests.) |
| 00004718 | BIS-01 SWFL SSM_LC(tests.) |
| 00004719 | BIS-01 SWFL SSM_PRESIS(tests.) |
| 0000473B | BIS-01 SWFL SSM_RSTM(tests.) |
| 0000471A | BIS-01 SWFL TIMESERVER(tests.) |
| 0000471B | BIS-01 SWFL VIDEO_POST(tests.) |
| 0000471C | BIS-01 SWFL VOICEIN_APP(tests.) |
| 0000471D | BIS-01 SWFL VOICEIN_NUANCE(tests.) |
| 0000471E | BIS-01 SWFL HDRADIO(tests.) |
| 0xFFFFFFFF | unknown |

### DEVUDS_HWVERSION_BIS01

| WERT | NAME |
| --- | --- |
| 002.001.001 | 18-03 B1 BIS01 HW Alpine HW1.1 |
| 002.001.002 | 18-03 B2 BIS01 HW Alpine HW1.2 |
| 002.001.003 | 18-03 B2 BIS01 HW Alpine HW1.3 |
| 002.001.004 | 18-03 C BIS01 HW Alpine HW1.4 |
| 0xFFFFFFFF | unknown BIS HW |
