# champ2.prg

## General

|  |  |
| --- | --- |
| File | champ2.prg |
| Type | PRG |
| Jobs | 121 |
| Tables | 319 |
| Origin | BMW EI44 Hr.Mallinson |
| Revision | 12.001 |
| Author | HaysAG EI44 Hr.Bubb, TelemotiveAG EI42 Hr.Schmidt |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Audio System Kontroller CHAMP2 |  |  |
| ORIGIN | string | BMW EI44 Hr.Mallinson |  |  |
| REVISION | string | 12.001 |  |  |
| AUTHOR | string | HaysAG EI44 Hr.Bubb, TelemotiveAG EI42 Hr.Schmidt |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.34 |  |  |
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

_No arguments._

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

### STATUS_BLOCK_LESEN

Lesen eines dynamisch definierten Datenblockes UDS  : $2C DynamicallyDefineDataIdentifier $03 ClearDynamicallyDefinedDataIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $2C DynamicallyDefineDataIdentifier $01 DefineByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $22 ReadDataByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  $2C$02 DefineByMemoryAddress wird nicht unterstützt 'Composite data blocks' werden nur komplett unterstützt

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | long | Nummer des Blockes 0..255 |
| NEU_DEFINIEREN | string | Wenn 'JA' oder 'YES' wird der Block im SG gelöscht und neu ins SG geschrieben Wenn 'NEIN' oder 'NO' wird der Block im SG nicht gelöscht und nicht geschrieben Anschließend wird der Block gelesen |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige Result table SG_Funktionen ARG ID RESULTNAME erzeugt |

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

### STEUERN_ROE_STOP

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime)

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events [$02 eventWindowTime - infinite (nur 35up)]

_No arguments._

### STEUERN_ROE_START

Temporaeres Aktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $05 Start $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime)

_No arguments._

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

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

### DIAGTUNNELLING_UDS

complete tunneling of UDS telegrams

| Name | Type | Description |
| --- | --- | --- |
| ARG_UDS | string | Haupt UDS stream ab ServiceID bsp.:21D02A |

### READ_CURRENT_REGISTRY

Liefert den Inhalt der Current Registry

_No arguments._

### READ_DEFAULT_REGISTRY

Liefert den Inhalt der Current Registry

_No arguments._

### STEUERN_ZENTRALE_REGISTRY_SOLLKONFIGURATION

Die aktuelle Registry wird als Default Registry gespeichert

_No arguments._

### STEUERN_MOST_3DB

3dB Leistungsabsenkung der MOST FOTs

_No arguments._

### STATUS_MOST_3DB

xx Status der 3dB Leistungsabsenkung der MOST FOTs.

_No arguments._

### STATUS_FOT_TEMPERATUR

Gibt an ob SG Most Ring wecken darf

_No arguments._

### STATUS_VERSORGUNGSSPANNUNG

Betriebsspannung am SG. Darstellung mit Millivolt-Auflösung.

_No arguments._

### STATUS_ROUTING_ENGINE

Inhalt der Routing Engine

_No arguments._

### STATUS_ABILITY_TO_WAKE

Gibt an ob SG Most Ring wecken darf

_No arguments._

### STEUERN_ABILITY_TO_WAKE

Gibt an, ob das SG den MOST-Ring wecken darf.

| Name | Type | Description |
| --- | --- | --- |
| ARG_ABILITY_TO_WAKE | int | 0=off 1=on 2=critical |

### STATUS_WAKEUP_STATUS

Gibt an, ob das SG den MOST-Ring geweckt hat oder geweckt wurde.

_No arguments._

### STATUS_WAKEUP_ABSTIME

7 bytes Zeitpunkt, zu dem das SG den Weckbefehl gegeben hat Bytes werden als Datum interpretiert Beispiel: '20060508131210' in der Reihenfolge YYYYMMDDHHMMSS. Falls das SG nie geweckt hat wird '00000000000000' zurückgegeben

_No arguments._

### STATUS_VERSION_MOST_CONTROLLER

Return Version of MOST Controller

_No arguments._

### STATUS_MOSTDIAG_DELAY

Verzögerungszeit, bis der Job steuern_zentrale_registry_sollkonfiguration wieder gestartet werden kann

_No arguments._

### STATUS_HIGHSYNCCONNECTION_TABLE

HighSyncConnectionTable

_No arguments._

### STATUS_HIGHSYNCCONNECTION_DETAIL

Genaue Information zur abgefragten Connection ausgeben

| Name | Type | Description |
| --- | --- | --- |
| ARG_CONNECTION | int | 2 Byte HILO Hex Value of the desired connection |

### STEUERN_WATCHDOG_TRIGGER_STOP

Unterbindet das regelmäßige Rücksetzen des Applikations-Watchdogs nach ARG_TIME_WATCHDOG Sekunden. Wenn ARG_TIME_WATCHDOG nicht angegeben wird, wird der Wert 0 benutzt.

| Name | Type | Description |
| --- | --- | --- |
| ARG_TIME_WATCHDOG | unsigned int | Beschreibung: z.B. ARG_TIME_WATCHDOG = 4 bedeutet Abschalten des Watchdog-Triggers nach 4 Sekunden. nur positiven Zahlen und die 0. Skalierung: 1 entspricht 1 Sekunde |

### STATUS_AVERAGE_MESSAGE_RECEPTION_RATE

Liest die mittlere Nachrichtenabnahmerate des SGs während dieses Gerät geflasht wird, also in der ProgramminSession Auslesbar muss der Status jederzeit sein

_No arguments._

### STEUERN_RINGBRUCH_DIAGNOSE

Ringbruchdiagnose soll gestartet werden

_No arguments._

### STEUERN_NWM_CONFIG_NOTOK

Sends a Config.NotOk on the MOST Bus

_No arguments._

### READ_DIFF_REGISTRY

Vergleich der Current und Default Registry

_No arguments._

### STATUS_AKTIVE_GAL_KURVE

Reads the number of the active speed dependent volume control curve.

_No arguments._

### STEUERN_FBAND_SCAN

Start FBand scan

| Name | Type | Description |
| --- | --- | --- |
| ARG_BAND | string | select the Waveband table TWaveband TEXT |
| ARG_WAIT | unsigned char | Startverzögerung in sekunden |
| ARG_FREQ_START | unsigned long | Startfrequenz (kHz) |
| ARG_FREQ_STOP | unsigned long | letzte zu prüfende Frequenz (kHz) |
| ARG_FREQ_STEP | unsigned long | Frequenzschrittweite (kHz) |
| ARG_BANDWIDTH | unsigned long | Bandbreite |

### STEUERN_FBAND_SCAN_STOP

Stoped FBand scan

_No arguments._

### STATUS_FBAND_SCAN

Start FBand scan

_No arguments._

### STATUS_BIT_ERROR_RATE_DAB

Measures the quality of the reception of the current DAB ensemble.

_No arguments._

### STATUS_DAR_INDEX

Indicates the DAR which is selected.

_No arguments._

### LESEN_DAR

Lesen eines DAR Datensatzes

| Name | Type | Description |
| --- | --- | --- |
| ARG_DAR | unsigned char | Requested DAR Index from 0-9 |

### SCHREIBEN_DAR

Schreiben eines DAR Datensatzes

| Name | Type | Description |
| --- | --- | --- |
| ARG_DAR | unsigned char | Requested DAR Index from 0-9 |
| ARG_FILE | string | DAR read from file to be written complete path is necessary |
| ARG_STREAM | string | DAR read from STREAM to be written file content as a string |

### LESEN_TELEFONNUMMERN

Auslesen der in HeadUnit gespeicherten Telefonnummern für - Bereitschaftsdienst - Heimathändler - Passo - Hotline

_No arguments._

### SCHREIBEN_TELEFONNUMMERN

Schreiben der Telefonnummern für - Bereitschaftsdienst - Heimathändler - Passo - Hotline

| Name | Type | Description |
| --- | --- | --- |
| ARG_NR_BEREITSCHAFTSDIENST | string | Nummer des Bereitschaftsdienstes |
| ARG_NR_HEIMATHAENDLER | string | Nummer des Heimathändlers |
| ARG_NR_PASSO | string | Nummer Passo |
| ARG_NR_HOTLINE | string | Nummer der Hotline |

### LESEN_CONFIGURATION_TABLE

Reads out the currently active configuration table.

| Name | Type | Description |
| --- | --- | --- |
| ARG_DESIRED_CONFIGTABLE_INDEX | unsigned char | desired configtable 0x00 currently active table, 0x01 first config table, ... |
| ARG_DESIRED_PARAMETER | string | name of desired parameter. |

### SCHREIBEN_CONFIGURATION_TABLE

Writes a configuration table selected by a special index n from (0...n) onto the currently active configuration table in the head-unit.

| Name | Type | Description |
| --- | --- | --- |
| ARG_DESIRED_CONFIGTABLE_INDEX | unsigned char | desired configtable 0x00 currently active table, 0x01 first config table, ... |
| ARG_DESIRED_PARAMETER | string | name of desired parameter. |
| ARG_DESIRED_VALUE | string | name of desired value. |

### STATUS_GPS_POSITION

Returns the current GPS position.

_No arguments._

### STEUERN_VERY_HARD_RESET

Resets the head-unit analogue to a battery reset.

_No arguments._

### STATUS_SOFTWARENAME

Reads out the flashed Buildname

_No arguments._

### STATUS_BIT_ERROR_RATE_IBOC

Measures the quality of the reception of the current IBOC station.

_No arguments._

### STEUERN_DELETE_COOKIES

Deletes all cookies inside all http stacks

_No arguments._

### STATUS_BROWSER_APPLIKATION

Tests with a simple request onto the browser application (task) if it is coded, if it is active and responds. Test if a user input is actually necessary because of an Online-PopUp.

_No arguments._

### STATUS_LAST_CONNECTION

Returns various statuses of the currently active session or if no session is active, of the last session.

_No arguments._

### STEUERN_PROVISIONING

Initiates provisioning request.

_No arguments._

### STATUS_PROVISIONING

Returns the status of the provisioning request.

_No arguments._

### LESEN_BMW_ZERTIFIKAT

Lesen des BMW Zertifikat

_No arguments._

### SCHREIBEN_BMW_ZERTIFIKAT

Schreiben des BMW Zertifikat

| Name | Type | Description |
| --- | --- | --- |
| ARG_FILE | string | BMW Zertifikat |

### LESEN_BROWSER_ZERTIFIKAT

Lesen des Browser Zertifikat

_No arguments._

### SCHREIBEN_BROWSER_ZERTIFIKAT

Schreiben des BROWSER Zertifikat

| Name | Type | Description |
| --- | --- | --- |
| ARG_FILE | string | BMW Zertifikat |

### STATUS_FIND_BEST_STATION_DAB

Returns the status of the searching process and the information data of of the best DAB station if the searching process has been ended successfully.

_No arguments._

### STATUS_GET_IPCONFIG

Reads out the actual ipconfig of the Ethernet interface of the HeadUnit.

_No arguments._

### STEUERN_SENSOR_TEMP

Simulates the temperature of a definite sensor.

| Name | Type | Description |
| --- | --- | --- |
| ARG_SENSOR | unsigned char | Sensor for which the temperature must be simulated |
| ARG_TEMPERATURE | char | Temperature that must be simulated |
| ARG_DURATION | unsigned char | Duration of the temperature simulation |

### STATUS_SENSOR_TEMP

Returns the temperature of the desired sensor (no matter if the temperature is currently being simulated or not).

| Name | Type | Description |
| --- | --- | --- |
| ARG_SENSOR | unsigned char | Sensor for which the temperature must be returned |

### STEUERN_RESCUE_MODE

Resets the HeadUnit in a stable bootloadermode

_No arguments._

### STEUERN_FIND_BEST_STATION_DAB

Triggers the search of the best DAB ensemble (ensemble with the lowest bit error rate). When the best DAB ensemble has been detected, the head-unit switches to this best ensemble (to the 1st service of the ensemble).

_No arguments._

### STEUERN_CLEAR_FAULT_TRACKING

Clears down to zero the whole area where the extended fault tracking datasets are stored. It also removes the DTC Error_Software from the secondary error memory.

_No arguments._

### STATUS_ADAS

Reads out from the navigation system how many Resyncs from which client the navigation system has received and how many messages the navigation system has sent since the beginning of the current lifecycle.

_No arguments._

### STATUS_FAN_HISTORY

Reads out the fan histogram.

_No arguments._

### STATUS_GATEWAY_MOST_DEVICE_COUNT

Information über den Gateway-Dispatcher Anzahl der vom Dispatcher erkannten MOST-Teilnehmer im Ring

_No arguments._

### STATUS_GPS_DILUTION_OF_POSITION

Reads out the GPS dilution of position.

_No arguments._

### STATUS_GPS_TIME

Reads out the GPS date and time.

_No arguments._

### STATUS_LESESTATISTIK_DVD

Reads out some statistical data concerning the DVD drive and derived from the HDD SMART system

_No arguments._

### STATUS_LESESTATISTIK_HDD

Reads out some or all SMART attributes

_No arguments._

### LESEN_LISTENTRY_BY_IDX

Lesen eines UTL-Listentries mit Index

| Name | Type | Description |
| --- | --- | --- |
| ARG_RID | unsigned char | RID 0 = 0x1002, 1 = 0xA020 |
| ARG_SUBTABLE | unsigned char | 0 = 0x0000 must if RID = 0 1 = 0x0001 2 = 0x0002 3 = 0x0003 4 = 0x0004 |
| ARG_IDX | unsigned char | Requested Listentry by Index 0-255 |

### STATUS_KOMP_ID

Liefert die HDD Download Kompatibilitätskennung gemäß der HW-Variante

_No arguments._

### STATUS_ETHERNET_CONNECTION_STATE

Returns the activation state of all Ethernet connections

_No arguments._

### STATUS_USB_STACK_INFO_FOR_DEVICE

Reads out logistical information about the four last connected USB devices four last connected IPOD Players, four last connected MTP Players and four last unrecognized USB devices

| Name | Type | Description |
| --- | --- | --- |
| ARG_TYPE | unsigned char | UMS-type of requested Info 0x01 USB Stick 0x02 IPOD 0x03 MTP Player 0x04 UNKNOWN |

### STATUS_FAULT_TRACKING

Reads out one or all datasets stored by the extended fault tracking mechanism.

| Name | Type | Description |
| --- | --- | --- |
| ARG_DATASET | unsigned char | Number of dataset from 1 to 5 0 reads all datasets but this is not supported by SGBD |

### STATUS_EQDATA_VERSIONS

Reads out all EQ data file versions which are integrated in the SWE

_No arguments._

### STATUS_MMI_STATISTIK

Lesen der MMI Statistik gzip Datei

_No arguments._

### STATUS_HW_VARIANTE

Liefert die HW-Variante der Headunit

_No arguments._

### STEUERN_CID_GENERISCH

Sends commands to the CID module

| Name | Type | Description |
| --- | --- | --- |
| ARG_CID_GENERISCH | string | cmd string 'llllccccdd...' llll - len of the following cccc - 2 Bytes internal CID command code dd...- n bytes data in the request |
| STAT_CID_GENERISCH | string | result string |

### STATUS_BT_READ_PHONE_ID

Returns information about the phone selected as argument

| Name | Type | Description |
| --- | --- | --- |
| ARG_EINTRAG_NR | unsigned char | Phone from which the information must be read out (possible values: 1, 2, 3 and 4) |

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

### STEUERN_SERVICEHISTORY_ERASE

Gesamte Servicehistorie auf der HU löschen

_No arguments._

### STATUS_CPU_AUSLASTUNG

Indicates the DAR which is selected.

_No arguments._

### STEUERN_CID_CODIERDATEN

Overwrites CID coding data in RAM. The original coding values are restored after reset.

| Name | Type | Description |
| --- | --- | --- |
| ARG_DIM_CURVE_X1 | unsigned int |  |
| ARG_DIM_CURVE_X2 | unsigned int |  |
| ARG_DIM_CURVE_X3 | unsigned int |  |
| ARG_DIM_CURVE_Y1 | unsigned int |  |
| ARG_DIM_CURVE_Y2 | unsigned int |  |
| ARG_DIM_CURVE_Y3 | unsigned int |  |
| ARG_DIM_TOLERANCE_ALPHA | unsigned char |  |
| ARG_DIM_TOLERANCE_ABS | unsigned char |  |
| ARG_DIM_DIFF_GAIN | unsigned char |  |
| ARG_DIM_DIFF_THRESHOLD | unsigned char |  |
| ARG_DIM_DIFF_BIAS | unsigned char |  |
| ARG_DIM_DIFF_MAX | unsigned char |  |
| ARG_DIM_DIFF_MIN | unsigned char |  |
| ARG_DIM_UP_MIN | unsigned char |  |
| ARG_DIM_DOWN_MIN | unsigned char |  |
| ARG_DIM_MAX_OFFSET_BRIG | unsigned char |  |
| ARG_DIM_FADE_TIME_T0 | unsigned char |  |
| ARG_DIM_FADE_TIME_T1 | unsigned char |  |
| ARG_DIM_FADE_TIME_T2 | unsigned char |  |
| ARG_DIM_FADE_EXPO_T1 | unsigned char |  |
| ARG_DIM_FADE_EXPO_T2 | unsigned char |  |
| ARG_DIM_FILT_CHANGE_SENSITIVITY | unsigned int |  |

### STATUS_ATC_VERSION

Reads out the capability of the ATC diagnosis

_No arguments._

### _STEUERN_PERSISTENCY_CLEAR

Deletes persistency

_No arguments._

### STATUS_ISMOST_OPEN

returns status of MOST

_No arguments._

### STATUS_SEARCH_FBLOCK

FBlockID.InstID searched in Current Registry

| Name | Type | Description |
| --- | --- | --- |
| ARG_FBLOCKID | unsigned char | FBlockID.InstID searched in Registry |
| ARG_INSTID | unsigned char | FBlockID.InstID searched in Registry |

### STATUS_LESESTATISTIK_FLASHSPEICHER

Reads out some error statistics of the flash chip

_No arguments._

### STATUS_VERSION_GATEWAYTABELLE

Lesen der Versionsnummer der Gateway-Tabelle

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
| 0x000001 | Reinshagen => Delphi |
| 0x000002 | Kostal |
| 0x000003 | Hella |
| 0x000004 | Siemens |
| 0x000005 | Eaton |
| 0x000006 | UTA |
| 0x000007 | Helbako |
| 0x000008 | Bosch |
| 0x000009 | Loewe => Lear |
| 0x000010 | VDO |
| 0x000011 | Valeo |
| 0x000012 | MBB |
| 0x000013 | Kammerer |
| 0x000014 | SWF |
| 0x000015 | Blaupunkt |
| 0x000016 | Philips |
| 0x000017 | Alpine |
| 0x000018 | Continental Teves |
| 0x000019 | Elektromatik Suedafrika |
| 0x000020 | Becker |
| 0x000021 | Preh |
| 0x000022 | Alps |
| 0x000023 | Motorola |
| 0x000024 | Temic |
| 0x000025 | Webasto |
| 0x000026 | MotoMeter |
| 0x000027 | Delphi PHI |
| 0x000028 | DODUCO => BERU |
| 0x000029 | DENSO |
| 0x000030 | NEC |
| 0x000031 | DASA |
| 0x000032 | Pioneer |
| 0x000033 | Jatco |
| 0x000034 | Fuba |
| 0x000035 | UK-NSI |
| 0x000036 | AABG |
| 0x000037 | Dunlop |
| 0x000038 | Sachs |
| 0x000039 | ITT |
| 0x000040 | FTE |
| 0x000041 | Megamos |
| 0x000042 | TRW |
| 0x000043 | Wabco |
| 0x000044 | ISAD Electronic Systems |
| 0x000045 | HEC (Hella Electronics Corporation) |
| 0x000046 | Gemel |
| 0x000047 | ZF |
| 0x000048 | GMPT |
| 0x000049 | Harman Kardon |
| 0x000050 | Remes |
| 0x000051 | ZF Lenksysteme |
| 0x000052 | Magneti Marelli |
| 0x000053 | Borg Instruments |
| 0x000054 | GETRAG |
| 0x000055 | BHTC (Behr Hella Thermocontrol) |
| 0x000056 | Siemens VDO Automotive |
| 0x000057 | Visteon |
| 0x000058 | Autoliv |
| 0x000059 | Haberl |
| 0x000060 | Magna Steyr |
| 0x000061 | Marquardt |
| 0x000062 | AB-Elektronik |
| 0x000063 | Siemens VDO Borg |
| 0x000064 | Hirschmann Electronics |
| 0x000065 | Hoerbiger Electronics |
| 0x000066 | Thyssen Krupp Automotive Mechatronics |
| 0x000067 | Gentex GmbH |
| 0x000068 | Atena GmbH |
| 0x000069 | Magna-Donelly |
| 0x000070 | Koyo Steering Europe |
| 0x000071 | NSI B.V |
| 0x000072 | AISIN AW CO.LTD |
| 0x000073 | Shorlock |
| 0x000074 | Schrader |
| 0x000075 | BERU Electronics GmbH |
| 0x000076 | CEL |
| 0x000077 | Audio Mobil |
| 0x000078 | rd electronic |
| 0x000079 | iSYS RTS GmbH |
| 0x000080 | Westfalia Automotive GmbH |
| 0x000081 | Tyco Electronics |
| 0x000082 | Paragon AG |
| 0x000083 | IEE S.A |
| 0x000084 | TEMIC AUTOMOTIVE of NA |
| 0x000085 | AKsys GmbH |
| 0x000086 | META System |
| 0x000087 | Hülsbeck & Fürst GmbH & Co KG |
| 0x000088 | Mann & Hummel Automotive GmbH |
| 0x000089 | Brose Fahrzeugteile GmbH & Co |
| 0x000090 | Keihin |
| 0x000091 | Vimercati S.p.A. |
| 0x000092 | CRH |
| 0x000093 | TPO Display Corp. |
| 0x000094 | KÜSTER Automotive Control |
| 0x000095 | Hitachi Automotive |
| 0x000096 | Continental Automotive |
| 0x000097 | TI-Automotive |
| 0x000098 | Hydro |
| 0x000099 | Johnson Controls |
| 0x00009A | Takata- Petri |
| 0x00009B | Mitsubishi Electric B.V. (Melco) |
| 0x00009C | Autokabel |
| 0x00009D | GKN-Driveline |
| 0x00009E | Zollner Elektronik AG |
| 0x00009F | PEIKER acustics GmbH |
| 0x0000A0 | Bosal-Oris |
| 0x0000A1 | Cobasys |
| 0x0000A2 | Lighting Reutlingen GmbH |
| 0x0000A3 | CONTI VDO |
| 0x0000A4 | ADC Automotive Distance Control Systems GmbH |
| 0x0000A5 | Funkwerk Dabendorf GmbH |
| 0x0000A6 | Lame |
| 0x0000A7 | Magna/Closures |
| 0x0000A8 | Wanyu |
| 0x0000A9 | Thyssen Krupp Presta |
| 0x0000AA | ArvinMeritor |
| 0x0000AB | Kongsberg Automotive GmbH |
| 0x0000AC | SMR Automotive Mirrors |
| 0x0000AD | So.Ge.Mi. |
| 0x0000AE | MTA |
| 0x0000AF | Alfmeier |
| 0x0000B0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0x0000B1 | Omron Automotive Electronics Europe Group |
| 0x0000B2 | ASK |
| 0x0000B3 | CML Innovative Technologies GmbH & Co. KG |
| 0x0000B4 | APAG Elektronik AG |
| 0x0000B5 | Nexteer Automotive World Headquarters |
| 0x0000B6 | Hans Widmaier |
| 0x0000B7 | SB LiMotive Germany GmbH |
| 0x0000B8 | KYOCERA Display Corporation |
| 0x0000B9 | MAGNA Powertrain AG & Co KG |
| 0x0000BA | BorgWarner |
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
| 0x40 | unbekannte Fehlerart |
| 0x44 | Fehler gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler gespeichert |
| 0x4D | Fehler gespeichert |
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
| 0x2300 | Aussenspiegel Beifahrer | - |
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
| 0x3D80 | Lüfter | 1 |
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
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
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
| 0x5768 | Fussgängerschutz Sensor links | 0 |
| 0x5770 | Fussgängerschutz Sensor rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor mitte | 0 |
| 0x5780 | Fussgängerschutzsensor statisch | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x57B0 | Fussgängerschutzsensor dynamisch 1 | 0 |
| 0x57B8 | Fussgängerschutzsensor dynamisch 2 | 0 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0x5A00 | Innenlichtelektronik | 1 |
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Fahrertür vorne oben | 1 |
| 0x5E06 | Innenbeleuchtung Fahrertür vorne Mitte | 1 |
| 0x5E07 | Innenbeleuchtung Fahrertür vorne unten | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Fahrertür hinten oben | 1 |
| 0x5E0A | Innenbeleuchtung Fahrertür hinten unten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Beifahrertür vorne oben | 1 |
| 0x5E0D | Innenbeleuchtung Beifahrertür vorne Mitte | 1 |
| 0x5E0E | Innenbeleuchtung Beifahrertür vorne unten | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Beifahrertür hinten oben | 1 |
| 0x5E11 | Innenbeleuchtung Beifahrertür hinten unten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung I-Tafel Fahrer oben | 1 |
| 0x5E14 | Innenbeleuchtung I-Tafel Fahrer unten | 1 |
| 0x5E15 | Innenbeleuchtung I-Tafel oben Mitte | 1 |
| 0x5E16 | Innenbeleuchtung I-Tafel unten Mitte | 1 |
| 0x5E17 | Innenbeleuchtung I-Tafel oben Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung I-Tafel unten Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
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
| 0x0003 | DaimlerChrysler |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars (Ford Group) |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis |
| 0x0014 | Microchip |
| 0x0015 | CRF |
| 0x0016 | Renesas Technology Europe GmbH |
| 0x0017 | Atmel |
| 0x0018 | Magnet Marelli |
| 0x0019 | NEC |
| 0x001A | Fujitsu |
| 0x001B | Opel |
| 0x001C | Infineon |
| 0x001D | AMI Semiconductor |
| 0x001E | Vector Informatik |
| 0x001F | Brose |
| 0x0020 | ZMD |
| 0x0021 | ihr |
| 0x0022 | Visteon |
| 0x0023 | ELMOS |
| 0x0024 | ON Semi |
| 0x0025 | Denso |
| 0x0026 | c&s |
| 0x0027 | Renault |
| 0x0028 | Renesas Technology Europe Limited |
| 0x0029 | Yazaki |
| 0x002A | Trinamic Microchips |
| 0x002B | Allegro Microsystems |
| 0x002C | Toyota |
| 0x002D | PSA Peugeot Citroën |
| 0x002E | Westsächsische Hochschule Zwickau |
| 0x002F | Micron AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt Ingenierbüro GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA Hueck & Co. |
| 0x0037 | Continental Temic microelectronic GmbH |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electric Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0x0051 | MAGNA-Donnelly GmbH&Co.KG |
| 0x0052 | IEE S.A. |
| 0x0053 | austriamicrosystems AG |
| 0x0054 | Agilent Technologies |
| 0x0055 | Lear Corporation  |
| 0x0056 | KOSTAL Ireland GmbH |
| 0x0057 | LIPOWSKY Industrie-Elektronik GmbH  |
| 0x0058 | Sanken Electric Co.,Ltd |
| 0x0059 | Elektrobit Automotive GmbH |
| 0x005A | VIMERCATI S.p.A. |
| 0x005B | AB Volvo |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic |
| 0x0061 | Flextronics / Sidler Automotive |
| 0x0062 | EAO Automotive |
| 0x0063 | helag-electronic |
| 0x0064 | Magna International |
| 0x0065 | ARVINMERITOR |
| 0x0066 | Valeo SA |
| 0x0067 | Defond Holding / BJAutomotive |
| 0x0068 | Industrie Saleri S. p. A. |
| 0x0069 | ROHM Semiconductor GmbH |
| 0x0070 | Alfmeier AG |
| 0x0071 | Sanden Corporation |
| 0x0072 | Huf Hülsbeck & Fürst GmbH&Co KG |
| 0x0073 | ebm-papst St. Georgen GmbH&Co. KG |
| 0x0074 | Eberspächer-catem GmbH & Co. KG |
| 0x0075 | Omron Automotive Electronics Incorporated |
| 0x0076 | Johnson Electric International AG |
| 0x0077 | A123 Systems Inc. |
| 0x0078 | IPG Automotive GmbH |
| 0x0079 | Daesung Electric Co. Ltd. |
| 0x007B | Bury GmbH & Co. KG |
| 0x007A | Kromberg & Schubert GmbH & Co. KG |
| 0x007E | Measurement Specialties Inc (MEAS) |
| 0x007F | MRS Electronic GmbH |
| 0x0082 | Dale Electronics Inc |
| 0x0083 | Mirror Controls international |
| 0x0084 | Keboda Technology Co. Ltd. |
| 0x0085 | SPD Control Systems Corporation |
| 0x0087 | Röchling Automotive AG & Co. KG |
| 0x0088 | AEV s.r.o |
| 0x0089 | Kongsberg Automotive AB |
| 0x008A | May & Scofield Ltd |
| 0x008C | C&S Technology Inc |
| 0x008D | RDC Semiconductor Co., Ltd |
| 0x008E | Webasto AG |
| 0x008F | Accel Elektronika UAB |
| 0x0090 | FICOSA International S.A. |
| 0x0093 | Phoenix International |
| 0x0094 | John Deere |
| 0x0095 | Grayhill Inc |
| 0x0096 | AppliedSensor GmbH |
| 0x0097 | UST Umweltsensortechnik GmbH |
| 0x0098 | Digades GmbH |
| 0x009A | TriMark Corporation |
| 0x009B | KB Auto Tech Co., Ltd. |
| 0x0099 | Thomson Linear Motion |
| 0x009C | Methode Electronics, Inc |
| 0x0101 | Huber Automotive AG |
| 0x009D | Danlaw, Inc. |
| 0x0100 | Isabellenhuette Heusler GmbH & Co. KG |
| 0x0102 | Precision Motors Deutsche Minebea GmbH |
| 0x009F | Fujikoki Corporation |
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
| 0x011C | DMK U.S.A. Inc |
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
| 0x44 | Fehler gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler gespeichert |
| 0x4D | Fehler gespeichert |
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

### ARG_0X400B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TESTBILD | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Selection of extended test picture ID  table  TCIDTestpictureExtended 0x00 Stop displaying test picture and return to Video Mode 0x01 Black picture 0x02 Blue picture 0x03 Red picture 0x04 Green picture 0x05 No-Signal-Screen 0x06 White L63 0x07 Yellow 0x08 Cyan 0x09 Magenta 0x0A Grey L5 0x0B Grey L9 0x0C Grey L13 0x0D Grey L17 0x0E Grey L21 0x0F Grey L25 0x10 Grey L29 0x11 Grey L34 0x12 Grey L38 0x13 Grey L42 0x14 Grey L46 0x15 Grey L50 0x16 Grey L54 0x17 Grey L58 0x18 Color Bar 0x19 Horizontal Flicker Check 0x1A Vertical Flicker Check 0x1B 32 Grey Steps 0x1C 32 Grey Steps for RED 0x1D 32 Grey Steps for GREEN 0x1E 32 Grey Steps for BLUE 0xFF Not defined |

### ARG_0X400C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RGB_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Video mode  0x00 stop displaying test picture and return to video mode 0x01 Display requested test picture in corresponding RGB color |
| ARG_RGB_VALUE | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Desired RGB color in data   format 0x00RRGGBB  (RR=Red, GG=Green, BB=Blue) Range: [0x00000000¿0x00FFFFFF] 0xFFFFFFFF Not defined |

### ARG_0X400D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TEMP_COUNTERS01 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 01 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS02 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 02 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS03 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 03 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS04 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 04 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |

### ARG_0X4010

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DUMMY | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | JobHeader |

### ARG_0XA000

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_KLANGZEICHEN | + | - | 0-n | - | unsigned char | - | TKlangzeichen | 1.0 | 1.0 | 0.0 | - | - | Legt das auszugebende Signal fest (Klingel,Gong):siehe Tabelle TKlangzeichen |

### ARG_0XA001

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | + | - | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 20.0 | 20000.0 | Frequenzeinstellung: 20..20 000 Hz |
| ARG_LEVEL | + | - | - | - | char | - | - | 1.0 | 1.0 | 0.0 | -96.0 | 127.0 | Bei Headunits: Hex-Wert, von 0x00 lückenlos bis 0x7F, Nicht unterstützte Werte (Stereo: 0x3F) dürfen nicht zu Fehlermeldungen führen.Sondern die für das Lautsprechersystem nächstmöglich kleinere verfügbare Lautstärke wird eingestellt.  Bei Verstärkern: Integer,-96..0 [dB] |
| ARG_KANAL | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | bezeichnet den Kanal, auf dem ausgegeben werden soll. Tabelle TAudioKanal |

### ARG_0XA003

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PDC_SIGNAL | + | - | 0-n | - | unsigned char | - | TPdcSignal | 1.0 | 1.0 | 0.0 | - | - | PDC Ton: Auswahl PDC Typ: siehe Tabelle TPdcSignal |
| AUDIO_STEP | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | PDC Ton: Lautstärke abhängig vom Abstand zum Objekt (Schritte von 0-82) |

### ARG_0XA006

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DRIVE | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | gibt an, auf welchem Laufwerk der  Eject ausgeführt werden soll. Default 4 Tabelle TLaufwerk |

### ARG_0XA007

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DRIVE | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | gibt an, auf welchem Laufwerk der  Eject ausgeführt werden soll. Default: 4 Tabelle TLaufwerk |

### ARG_0XA008

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WAVEBAND | + | - | 0-n | - | unsigned char | - | TWaveband | 1.0 | 1.0 | 0.0 | - | - | Auwählen des Frequenzbandes: siehe Tabelle TWaveband |

### ARG_0XA009

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SUCHLAUF | + | - | 0-n | - | unsigned char | - | TTunerSuchlauf | 1.0 | 1.0 | 0.0 | - | - | Startet den Stationssuchlauf ab dem ausgewählten Bandbereich |

### ARG_0XA00B

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ENTSOURCE | + | - | 0-n | - | unsigned char | - | TEntSource | 1.0 | 1.0 | 0.0 | - | - | die auszuwählende Entertainmentquelle |

### ARG_0XA00E

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ACTIVATION | + | - | 0-n | - | unsigned char | - | TNaviSimulationModeActivationAction | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XA012

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_NR_KEY | + | - | 0-n | - | unsigned char | - | TKeyNr | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XA013

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_NR_KEY_SOURCE | + | - | 0-n | - | unsigned char | - | TKeyNr | 1.0 | 1.0 | 0.0 | - | - | Nummer des Originalschlüssel |
| ARG_NR_KEY_DEST | + | - | 0-n | - | unsigned char | - | TKeyNr | 1.0 | 1.0 | 0.0 | - | - | Nummer des empfangenden Schlüssel. Zuweisung siehe Tabelle TKeyNr. |

### ARG_0XA017

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SCAN | + | - | 0-n | - | unsigned char | - | TAntScan | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XA018

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ANTENNE | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Antenne(n) die getestet werden sollen. Tabelle TAntenne |

### ARG_0XA019

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VERBINDUNG | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | legt den externen Anschluss fest, der getestet werden soll. Bei Angabe des Wertes 0 werden alle vorhandenen und schaltbaren Anschlüsse nacheinander getestet. Alle steuerbaren Anschlüsse des Steuergerätes müssen einzeln und kombiniert testbar sein. Tabelle TAuxVerbindung |

### ARG_0XA01A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SIGNALART | + | - | 0-n | - | unsigned char | - | TSignalArt | 1.0 | 1.0 | 0.0 | - | - | Art der Signalausgabe. |
| ARG_AUSGANG | + | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | - | - | Default: 0 Alle Ausgänge des Steuergerätes müssen einzeln und kombiniert anwählbar sein. |
| ARG_TIMEOUT | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die das Testbild ausgegeben wird. Default: 255 Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis: -der Job erneut mit Parameter 0 aufgerufen wird -das Steuergerät neu startet (Aufwachen, Reset, &) |

### ARG_0XA01C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_QUELLE | + | - | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | - | - | Stellt eine Videoverbindung zwischen einer Quelle und mehreren Senken her. Legt die Videoquelle fest, von der aus das Signal verteilt wird. Tabelle TVideoQuelle |
| ARG_SENKEN | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Stellt eine Videoverbindung zwischen einer Quelle und mehreren Senken her. Tabelle TVideoSenke |
| ARG_TIMEOUT | + | - | - | - | unsigned char | 255 | - | 1.0 | 1.0 | 0.0 | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die die Videoverbindung aufrecht erhalten wird. Default: 255  Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis der Job erneut mit Parameter 0 aufgerufen wird oder das Steuergerät neu startet (Aufwachen, Reset, &) |

### ARG_0XA01D

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_QUELLE | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Wertet das Signal von einer oder mehreren Quellen aus. Legt die Videoquelle fest, von der aus das Signal auf die Senke geroutet wird: Tabelle TVideoQuelle bzw. TEingangVideoSwitch |

### ARG_0XA01E

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VERBAU_ROUTINE | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Routinen, die getestet werden sollen. Tabelle TVerbauRoutine |

### ARG_0XA021

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | + | - | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Integer, 20..20 000 [Hz] Bei Verstärkern: 8 000 ... 20 000 [Hz] |
| ARG_LEVEL | + | - | - | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F, Nicht unterstützte Werte (Stereo: 0x3F) dürfen nicht zu Fehlermeldungen führen. Sondern die für das Lautsprechersystem nächstmöglich kleinere verfügbare Lautstärke wird eingestellt.   Bei Verstärkern: Integer, -50..0 [dB] |
| ARG_KANAL | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | bezeichnet den Kanal, auf dem gemessen werden soll. Tabelle TAudioKanal |
| ARG_MESSDAUER | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | legt die Dauer der Messung fest. Bereich: 50-1000ms Bei Verstärkern: Bereich: 200-3000ms |

### ARG_0XA022

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SELBSTTEST_ROUTINE | + | - | 0-n | - | unsigned long | - | TSelbsttestRoutine | - | - | - | - | - | Routinen, die getestet werden sollen. Die Tabelle TSelbsttestRoutine wird in der SGBD von der Entwicklung bzw. vom Zulieferer befüllt und gepflegt. |

### ARG_0XA024

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_MENU | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Einstellen eines MMI Menüs. |
| ARG_MENU_RSE_RIGHT | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | ID des Menüs der zweiten MMI, z.B. RSE rechter Bildschirm. |

### ARG_0XA025

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LANGUAGE | + | - | 0-n | - | unsigned char | - | TLanguage | - | - | - | - | - | legt die Sprache fest. |

### ARG_0XA027

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_COMMAND | + | - | 0-n | - | unsigned int | - | TNaviLanguage | 1.0 | 1.0 | 0.0 | - | - | Testet die Sprachausgabe des Navi |

### ARG_0XA029

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ETHERNET_CONNECTION | + | - | 0-n | - | unsigned char | - | TEthernetConnection | 1.0 | 1.0 | 0.0 | - | - | definiert, welche Ethernet-Verbindungen gesteuert werden sollen. |
| ARG_ACTIVATION_STATE | + | - | 0-n | - | unsigned char | - | TEthernetActivationState | 1.0 | 1.0 | 0.0 | - | - | steuert die Ethernet-Verbindung. |

### ARG_0XA02E

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TYPE | + | - | 0-n | - | unsigned char | - | TAB_TypeUSBDevice | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XA036

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LEVEL | + | - | - | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F Bei manchen sekundären Lautstärken wie Navi-Out wird die Lautstärke relativ angegeben, z.B: [-11;11]  Bei Verstärkern: Integer, -96..0 [dB] |
| ARG_AUDIO_SIGNAL | + | - | 0-n | - | unsigned char | - | TAudioSignal | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welche Lautstärke verstellt oder ausgelesen werden soll. Default: 0 |

### ARG_0XA037

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TRACK | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wählt die CD/DVD-Tracknummer die abgespielt werden soll. |

### ARG_0XA039

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_AUDIO_SIGNAL | + | - | 0-n | - | unsigned char | - | TAudioSignal | - | - | - | - | - | Gibt an, welche Lautstärke ausgelesen werden soll. Default: 0 |

### ARG_0XA03A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ACTION | + | - | 0-n | - | unsigned char | - | TNaviMapAction | 1.0 | 1.0 | 0.0 | - | - | Löschen oder Deaktivieren der Kunden Navigation Karte |

### ARG_0XA03C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DURATION | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 30.0 | legt die Dauer in Sekunden fest, die der Lüfter auf Maximum läuft. |

### ARG_0XA03E

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SDARS_GENERATOR_FREQUENCY_LEFT | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 1599.0 | Einheit [10Hz] Dmait Bereich 10Hz bis 15990Hz |
| ARG_SDARS_GENERATOR_FREQUENCY_RIGHT | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 1599.0 | Einheit [10Hz] Dmait Bereich 10Hz bis 15990Hz |

### ARG_0XA048

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT | + | - | 0-n | - | unsigned char | - | TBluetoothStatus | 1.0 | 1.0 | 0.0 | - | - | Setzt den Bluetooth Status |

### ARG_0XA049

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT_ERKENNUNGSMODUS | + | - | 0-n | - | unsigned char | - | TBluetoothDiscoveryModeStatus | 1.0 | 1.0 | 0.0 | - | - | Steuert den Bluetooth Erkennungsmodus |

### ARG_0XA04C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA_TO_RESET | + | - | 0-n | - | unsigned long | - | TBluetoothResetBasicState | 1.0 | 1.0 | 0.0 | - | - | Löschen persönlicher Informationen  Liste der gekoppelten Geräte beinhaltet auch Gespächslisten und Sprachaufnahmen |

### ARG_0XA062

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_PARTITION | + | - | 0-n | - | unsigned char | - | TFlashMemoryPartition | 1.0 | 1.0 | 0.0 | - | - | Formatiert eine oder alle Partition(en) des Flashspeichers. |
| ARG_FORMAT_PARTITION | + | - | 0-n | - | unsigned char | - | TFlashMemoryFormatPartition | 1.0 | 1.0 | 0.0 | - | - | Formatierungstyp. Werte aus Tabelle TFlashMemoryFormatPartition |

### ARG_0XA063

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_NUMBER_PARTITIONS | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl der zu erstellenden Partitionen |
| ARG_SIZE_PARTITION_1 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 1 in MByte |
| ARG_SIZE_PARTITION_2 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 2 in MByte |
| ARG_SIZE_PARTITION_3 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 3 in MByte |
| ARG_SIZE_PARTITION_4 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 4 in MByte |
| ARG_SIZE_PARTITION_5 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 5 in MByte |
| ARG_SIZE_PARTITION_6 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 6 in MByte |
| ARG_SIZE_PARTITION_7 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 7 in MByte |
| ARG_SIZE_PARTITION_8 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 8 in MByte |
| ARG_SIZE_PARTITION_9 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 9 in MByte |
| ARG_SIZE_PARTITION_10 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 10 in MByte |
| ARG_SIZE_PARTITION_11 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 11 in MByte |
| ARG_SIZE_PARTITION_12 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 12 in MByte |
| ARG_SIZE_PARTITION_13 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 13 in MByte |
| ARG_SIZE_PARTITION_14 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 14 in MByte |
| ARG_SIZE_PARTITION_15 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 15 in MByte |
| ARG_SIZE_PARTITION_16 | + | - | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kapazität Partition 16 in MByte |

### ARG_0XA06A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VENDORID_TEL_KDZ | + | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Hier wird die VendorID zum Vergleich mit dem USB Device vorgegeben. ACHTUNG: Eingabe von vier Hex-Zeichen mit 0x voran. BEISPIEL: 0xA1FB |
| ARG_PRODUCTID_TEL_KDZ | + | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Hier wird die ProductID zum Vergleich mit dem USB Device vorgegeben. ACHTUNG: Eingabe von vier Hex-Zeichen mit 0x voran. BEISPIEL: 0xA1FB |
| ARG_VENDORID_TEL_SIA | + | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Hier wird die VendorID zum Vergleich mit dem USB Telefon vorgegeben. ACHTUNG: Eingabe von vier Hex-Zeichen mit 0x voran. BEISPIEL: 0xA1FB |
| ARG_PRODUCTID_TEL_SIA | + | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Hier wird die ProductID zum Vergleich mit dem USB Telefon vorgegeben. ACHTUNG: Eingabe von vier Hex-Zeichen mit 0x voran. BEISPIEL: 0xA1FB |

### ARG_0XA0AA

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SDARS_ACTIVATION | + | - | 0-n | high | unsigned char | - | TAB_ONOFF | 1.0 | 1.0 | 0.0 | - | - | 0x00 AUS 0x01 EIN 0xFF NICHT DEFINIERT |

### ARG_0XD003

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_KANAL | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kanalnummer |

### ARG_0XD00D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 150.0 | 108000.0 | Einzustellende Frequenz im Bereich 150 - 108000 [kHz] |

### ARG_0XD00E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TP | 0-n | - | unsigned char | - | TTp | 1.0 | 1.0 | 0.0 | - | - | Steuert die TP Funktionalität. Default: 2 |
| ARG_RDS | 0-n | - | unsigned char | - | TRds | 1.0 | 1.0 | 0.0 | - | - | Steuert die RDS Funktionalität. Default: 2 |

### ARG_0XD011

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TMC | 0-n | - | unsigned char | - | TTmcActivationState | 1.0 | 1.0 | 0.0 | - | - | Steuern des TMC |

### ARG_0XD014

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DEMUTE | 0-n | - | unsigned char | - | TDemuteStatus | 1.0 | 1.0 | 0.0 | - | - | - |
| ARG_HEADPHONES | 0-n | - | unsigned char | - | TDemuteSource | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XD01A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT_GERAETEADRESSE | - | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | - | - | Schreibt die Adresse des Bluetooth Gerätes |

### ARG_0XD01C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT_GERAETENAME | - | - | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Schreibt den Bluetooth Gerätenamen |

### ARG_0XD020

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LOGISTIC_NR | - | - | string[7] | - | - | 1.0 | 1.0 | 0.0 | - | - | die zu schreibende Logistiknummer |

### ARG_0XD028

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RADON | 0-n | - | unsigned char | - | TRadOnLead | 1.0 | 1.0 | 0.0 | - | - | Setzen des Ausgangssignals RADON. |

### ARG_0XD02D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ_DAB | - | - | string[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Einstellung der DAB Frequenz. Achtung: Hat der Kanal nur 2 Ziffern, so muss mit führender 0 aufgefüllt werden. z.B. 52 wird zu 052 |

### ARG_0XD02F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_NR_SDARS | - | - | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Telefonnummer SDARS |

### ARG_0XD043

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FOLLOWING_DAB_FM | 0-n | - | unsigned char | - | TFollowingDabFm | 1.0 | 1.0 | 0.0 | - | - | Steuert das DAB FM Following. |
| ARG_FOLLOWING_DAB_DAB | 0-n | - | unsigned char | - | TFollowingDabDab | 1.0 | 1.0 | 0.0 | - | - | Steuert das DAB DAB Following. |
| ARG_TP_DAB | 0-n | - | unsigned char | - | TTpDab | 1.0 | 1.0 | 0.0 | - | - | Steuert den DAB Traffic Pilot. |

### ARG_0XD044

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_AKTIVE_ANTENNE_DAB | 0-n | - | unsigned char | - | TAktiveAntenneDAB | 1.0 | 1.0 | 0.0 | - | - | Enables to control the activation state of both DAB antenna. |

### ARG_0XD05F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SDARS_CHANNEL | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | selektiert SDRAS kanal |

### ARG_0XD060

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SDARS_TUNER_MODE | 0-n | - | unsigned char | - | TSdarsTunerMode | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XD061

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SDARS_BER_MODE | 0-n | - | unsigned char | - | TSdarsBerMode | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XD07C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KARTENUPDATE_USB | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Kartenupdate mit USB ab 10 km/h möglich 1 = Kartenupdate im Stillstand mit USB möglich |

### ARG_0XD5C1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TESTBILD | 0-n | - | unsigned char | - | TAB_TESTBILD_CID | 1.0 | 1.0 | 0.0 | 0.0 | - | Ausgabe des Testbild unabhängig von Signalen der HU. Kann auch ohne HU ausgegeben werden:  Mögliche Werte: 0 = NORMALES_BILD, 1 = SCHWARZES_BILD, 2 = BLAUES_BILD,  3 = ROTES_BILD, 4 = GRUENES_BILD, 5 = NO_SIGNAL |

### ARG_0XD5C2

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ein- und Ausschalten des Display per Diagnose mit Hintergrundbeleuchtung: 0 = AUS, 1 = EIN |

### ARG_0XD5C4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_VALUE | % | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe des PWM-Wert, mit welchem die Hintergrundbeleuchtung angesteuert werden soll: 0 = dunkel, 100 = hell |

### ARG_0XD5C9

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_STOP | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Pflicht Argument von Service 0x2E. 1 = Stop Diagnose-Ansteuerungen. |

### BOOTLOADER_ODER_APPLIKATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Applikation |
| 0x01 | Bootloader |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Audio und Benutzer aus, MOST aktiv, Jingles an |
| 0x01 | Spezieller Energiesparmode | Audio und Benutzer aus, MOST aktiv, Jingles an |
| 0x02 | ECOS-Mode | keine Einschränkung |
| 0x03 | MOST-Mode | Audio und Benutzer aus, MOST aktiv, Jingles an |
| 0x04 | Betriebsmode 4 | Audio und Benutzer aus, MOST aktiv, Jingles an |
| 0x05 | Betriebsmode 5 | Audio und Benutzer aus, MOST aktiv, Jingles an |
| 0x06 | Rollenmode | keine Einschränkung |
| 0x07 | Betriebsmode 7 | keine Einschränkung |
| 0x08 | Betriebsmode 8 | keine Einschränkung |
| 0x09 | Betriebsmode 9 | keine Einschränkung |
| 0x0A | Betriebsmode 10 | keine Einschränkung |
| 0x0B | Betriebsmode 11 | keine Einschränkung |
| 0x0C | Betriebsmode 12 | keine Einschränkung |
| 0x0D | Betriebsmode 13 | keine Einschränkung |
| 0x0E | Betriebsmode 14 | keine Einschränkung |
| 0x0F | Betriebsmode 15 | keine Einschränkung |
| 0xFF | ungültiger Betriebsmode | ungültig |

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

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 3 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x026300 | Energiesparmode aktiv | 0 |
| 0x02FF63 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0xB7F800 | Verbindung Head-Unit zum Diversity: Leitungsunterbrechung | 0 |
| 0xB7F802 | Verbindung Head-Unit zum Diversity: Kurzschluss nach Masse | 0 |
| 0xB7F804 | Verbindung Diversity zu den Antennen: Leitungsunterbrechung | 0 |
| 0xB7F805 | Verbindung Head-Unit zum DAB L-Band Antennenfuß: Leitungsunterbrechung | 0 |
| 0xB7F807 | Verbindung Head-Unit zum DAB L-Band Antennenfuß: Kurzschluss | 0 |
| 0xB7F809 | Verbindung Head-Unit zum DAB Band III Antennenfuß: Leitungsunterbrechung | 0 |
| 0xB7F80B | Verbindung Head-Unit zum DAB Band III Antennenfuß: Kurzschluss | 0 |
| 0xB7F80F | Verbindung Head-Unit zum GPS-Antennenfuß: Leitungsunterbrechung | 0 |
| 0xB7F811 | Verbindung Head-Unit zum GPS-Antennenfuß: Kurzschluss nach Masse | 0 |
| 0xB7F813 | GPS Empfänger: defekt | 0 |
| 0xB7F814 | Gyro: defekt | 0 |
| 0xB7F815 | HDD Kartenmaterial: Installation oder Update nötig | 0 |
| 0xB7F818 | Internes Signal bezüglich horizontaler Fahrtrichtung: unplausibel | 0 |
| 0xB7F81C | Berechnungsfehler von dem Navigationsrechner | 1 |
| 0xB7F81D | Verbindung Head-Unit zum Aux-In Box: Leitungsunterbrechung | 0 |
| 0xB7F821 | Lautsprecherausgangsleitungen vorne links: Leitungsunterbrechung | 0 |
| 0xB7F822 | Lautsprecherausgangsleitungen vorne links: Kurzschluss nach Plus | 0 |
| 0xB7F823 | Lautsprecherausgangsleitungen vorne links: Kurzschluss nach Masse | 0 |
| 0xB7F824 | Lautsprecherausgangsleitungen vorne links: Kurzschluss zwischen den 2 Leitungen | 0 |
| 0xB7F825 | Lautsprecherausgangsleitungen vorne rechts: Leitungsunterbrechung | 0 |
| 0xB7F826 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss nach Plus | 0 |
| 0xB7F827 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss nach Masse | 0 |
| 0xB7F828 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss zwischen den 2 Leitungen | 0 |
| 0xB7F829 | Lautsprecherausgangsleitungen hinten links: Leitungsunterbrechung | 0 |
| 0xB7F82A | Lautsprecherausgangsleitungen hinten links: Kurzschluss nach Plus | 0 |
| 0xB7F82B | Lautsprecherausgangsleitungen hinten links: Kurzschluss nach Masse | 0 |
| 0xB7F82C | Lautsprecherausgangsleitungen hinten links: Kurzschluss zwischen den 2 Leitungen | 0 |
| 0xB7F82D | Lautsprecherausgangsleitungen hinten rechts: Leitungsunterbrechung | 0 |
| 0xB7F82E | Lautsprecherausgangsleitungen hinten rechts: Kurzschluss nach Plus | 0 |
| 0xB7F82F | Lautsprecherausgangsleitungen hinten rechts: Kurzschluss nach Masse | 0 |
| 0xB7F830 | Lautsprecherausgangsleitungen hinten rechts: Kurzschluss zwischen den 2 Leitungen | 0 |
| 0xB7F843 | FBAS-Eingang 3: kein Video- oder Sync-Signal vorhanden | 1 |
| 0xB7F84A | RAD ON Leitung: Kurzschluss nach Masse | 0 |
| 0xB7F84D | Verbindung Head-Unit zum Mikrophon 1: Leitungsunterbrechung | 0 |
| 0xB7F865 | Lüfter Fehler | 0 |
| 0xB7F867 | Interner Temperatursfehler | 0 |
| 0xB7F86A | Das Einschlafen von der Head-Unit wird verhindert | 1 |
| 0xB7F86B | Externe Unterspannung | 1 |
| 0xB7F86C | Externe Überspannung | 1 |
| 0xB7F86E | Signatur der zu importierenden Portierungsdatei korrupt | 1 |
| 0xB7F86F | Dateistruktur der zu importierenden Portierungsdatei korrupt | 1 |
| 0xB7F870 | Version der zu importierenden Portierungsdatei unbekannt | 1 |
| 0xB7F872 | PIA Software Fehler | 1 |
| 0xB7F874 | Fehler beim Schreiben auf externes Speichermedium | 1 |
| 0xB7F875 | Fehler beim Lesen vom externen Speichermedium | 1 |
| 0xB7F87E | Die von einer PIA-Funktion gelieferte aktuelle Profilnummer unterscheidet sich von der in der Head Unit vermerkten | 1 |
| 0xB7F87F | Codierungsfehler Arbeitsbereich | 0 |
| 0xB7F880 | Codierunsfehler Master Bereich | 0 |
| 0xB7F881 | Codierungsereignis nicht codiert | 0 |
| 0xB7F882 | Codierungsereignis falsches Fahrzeug | 0 |
| 0xB7F883 | Hauptplatine Hardware Fehler | 0 |
| 0xB7F884 | Flash File System fehlerhaft | 0 |
| 0xB7F885 | Schwerwiegender Software Fehler: Software neu flashen | 0 |
| 0xB7F89C | Kein GPS Empfang in den letzten 40 Kilometern | 1 |
| 0xB7F8A9 | Codierungsereignis Datenübertragung fehlgeschlagen | 0 |
| 0xB7F8AA | Codierungsereignis Signatur Fehler | 0 |
| 0xB7F8AC | GPS Empfänger: Firmware Fehler | 0 |
| 0xB7F8AD | Ethernet Verbindung Head-Unit zum ZGW_FEM: Link Status von dem Ethernet Treiber nicht ok | 0 |
| 0xB7F8AF | USB-VBUS Verbindung Head-Unit zur USB Benutzer Schnittstelle: Kurzschluss nach Masse | 0 |
| 0xB7F8B2 | Video Verbindung: keine oder ungültige Codierdaten-Informationen für die angeforderte Verbindung Quelle %s zu Senke %s. Verbindung nicht hergestellt | 0 |
| 0xB7F8B3 | Video Verbindung: Fehler vom Video Switch %i beim Verbindungsversuch Quelle %s zu Senke %s. Verbindung nicht hergestellt | 1 |
| 0xB7F8B4 | Verbindung Head-Unit zum SDARS Antennenfuß: Leitungsunterbrechung | 0 |
| 0xB7F8B5 | Verbindung Head-Unit zum SDARS Antennenfuß: Kurzschluss | 0 |
| 0xB7F8B7 | Flashspeicher (SD-Karte/INAND) Hardware Fehler | 0 |
| 0xB7F8B8 | Verbindung Head-Unit zum Bluetooth-Antennenfuß: Leitungsunterbrechung | 0 |
| 0xB7F8BB | Bluetooth Chip: defekt | 0 |
| 0xB7F8BC | CD Laufwerk Hardware Fehler | 0 |
| 0xB7F8BD | Medium Fehler im CD Laufwerk | 0 |
| 0xB7F8BE | ATC Test negativ: CD Laufwerk defekt | 0 |
| 0xB7F8C0 | Temperatursensor Hintergrundbeleuchtung: Defekt erkannt (Hardware-Fehler: Ausfall Temperatursensor) | 0 |
| 0xB7F8C1 | Umgebungshelligkeitssensor: Defekt erkannt (Hardware-Fehler: Ausfall Umgebungshelligkeits-Sensor) | 0 |
| 0xB7F8C2 | Messgeber der Versorgungsspannung fehlerhaft (Fehler Betriebsspannungsmesspfad) | 0 |
| 0xB7F8C3 | CID meldet sich nicht (Hardware-Fehler: Ausfall CID-Kommunikation) | 0 |
| 0xB7F8C4 | Hintergrundbeleuchtung (Hardware-Fehler: Ausfall Backlight-LEDs) | 0 |
| 0xB7F8C5 | Flashdaten CID fehlerhaft (Hardware-Fehler: Checksummenfehler Flashdaten CID) | 0 |
| 0xB7F8C6 | Helligkeitsreduzierung wegen Übertemperatur (Übertemperatur: Helligkeitsreduzierung Backlight) | 1 |
| 0xB7F8C7 | Abschaltung Display wegen Übertemperatur (Übertemperatur: Abschaltung Backlight) | 1 |
| 0xB7F8C8 | Überspannung (Überspannung Vcc) | 1 |
| 0xB7F8C9 | Unterspannung (Unterspannung Vcc) | 1 |
| 0xB7F8CA | CID-Variante nicht kompatibel (Konfigurations-Fehler: CID-Variante nicht kompatibel) | 0 |
| 0xB7F8CB | Bilddaten ungültig oder fehlerhaft | 0 |
| 0xB7F8DC | SDARS Modul nicht aktiv | 0 |
| 0xB7F8FF | UWB Dummy HU | 0 |
| 0xE1C40B | K-CAN Physikalischer Busfehler | 0 |
| 0xE1C414 | K-CAN Control Module Bus OFF | 0 |
| 0xE1C43F | MOST: Empfänger hat Nachricht nicht abgenommen | 1 |
| 0xE1C440 | Reset | 0 |
| 0xE1C441 | MOST: Ringbruch | 1 |
| 0xE1C442 | Abschaltung Übertemperatur | 1 |
| 0xE1C443 | MOST-Steuergerät: Abschaltung Übertemperatur | 1 |
| 0xE1C444 | MOST: Ring wacht nicht auf | 1 |
| 0xE1C445 | MOST: Reset | 0 |
| 0xE1C446 | MOST: Steuergerät hat auf Überwachungsbotschaft nicht geantwortet | 1 |
| 0xE1C447 | MOST: ein Steuergerät hat sich abgemeldet | 1 |
| 0xE1C448 | MOST: Istkonfiguration unvollständig | 1 |
| 0xE1C449 | MOST-Knoten:  Die gleiche Kombination von FBlockID und InstID wird von zwei unterschiedlichen MOST SG doppelt beim NWM angemeldet | 1 |
| 0xE1C45F | BODY-CAN Physikalischer Busfehler | 0 |
| 0xE1C468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xE1CBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xE1CC00 | Signal Drehgeschwindigkeit des Rades: nicht vorhanden | 1 |
| 0xE1CC01 | Signal Drehgeschwindigkeit des Rades: unplausibel | 1 |
| 0xE1CC02 | Signal Rückwertsgang: unplausibel | 1 |
| 0xE1CC03 | Signal Rückwertsgang: nicht vorhanden | 1 |
| 0xE1CC09 | Ausfall des vorderen Bildschirms | 1 |
| 0xE1CC0A | Default GW Tabelle aktiv | 0 |
| 0xE1CC0B | Status_Funkschlüssel vom CAS-Steuergerät nicht erhalten | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1707 | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1708 | Klemmenstatus | HEX | High | unsigned char | - | - | - | - |
| 0x1709 | MOSTMesHeader | Text | High | 6 | - | - | - | - |
| 0x170A | FOTTemp Celsius | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x170B | NPR | HEX | High | unsigned char | - | - | - | - |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x170D | MemMirror | Text | High | 74 | - | 1.0 | 1.0 | 0.0 |
| 0x170E | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1715 | WakeupReason | HEX | High | unsigned char | - | - | - | - |
| 0x171E | MOSTMesErrorCodeInfo | Text | High | 8 | - | - | - | - |
| 0x1721 | ID fuer Reset-Ursache | 0-n | High | 0xFF | TAB_RESET_REASON_DOP | - | - | - |
| 0x172D | MOSTMesOpType | Text | High | 9 | - | - | - | - |
| 0x1740 | FBlock- Identifier | HEX | High | unsigned char | - | - | - | - |
| 0x1741 | Instanz-Identifier | HEX | High | unsigned char | - | - | - | - |
| 0x4200 | AmpTemp | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4201 | GyroTemp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4202 | CPUTemp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4203 | HDD Temp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4204 | DVD Temp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4205 | Audioquelle | Text | High | 3 | - | - | - | - |
| 0x4206 | SMART Daten | Text | Low | 28 | - | - | - | - |
| 0x4207 | SMART Daten | Text | High | 28 | - | - | - | - |
| 0x4208 | Secondary DTC ID | Text | High | 3 | - | - | - | - |
| 0x4209 | AMFM Tuner SW Version | Text | High | 3 | - | - | - | - |
| 0x420A | DAB Tuner SW Version | Text | High | 3 | - | - | - | - |
| 0x420B | Audio Label | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420C | MemoryAddress für Coding Error Work Domain | HEX | High | signed long | - | - | - | - |
| 0x420D | PIA Process | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420E | PIA Medium | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420F | PIA Profilname | Text | High | 12 | - | 1.0 | 1.0 | 0.0 |
| 0x4210 | PIA IStufenbezeichner | Text | High | 4 | - | - | - | - |
| 0x4211 | PIA Version | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4212 | PIA ErrorID | 0-n | High | 0xFF | PIA_ERROR_ID | - | - | - |
| 0x4213 | PIA LowMemory | Text | High | 8 | - | - | - | - |
| 0x4214 | PIA Profilnummer | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4215 | PIA Profilcompare | Text | High | 2 | - | - | - | - |
| 0x4216 | PIA FunctionID | Text | High | 2 | - | - | - | - |
| 0x4217 | PIA configuration attributes | Text | High | 4 | - | - | - | - |
| 0x4218 | PIA configuration attributes compare | Text | High | 8 | - | - | - | - |
| 0x4219 | PIA Profilnumbers function and master | Text | High | 2 | - | - | - | - |
| 0x4220 | FB Defect Error | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4221 | FB Software Error | HEX | High | unsigned char | - | - | - | - |
| 0x4222 | Interne 5V Spannung | mV | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4223 | Grund des Luefterfehlers | 0-n | High | 0xFF | LUEFTER_FEHLER | - | - | - |
| 0x4224 | VIDEO_SOURCE | 0-n | High | 0xFF | VIDEO_SOURCE | - | - | - |
| 0x4225 | VideoSink | 0-n | High | 0xFF | VIDEO_SINK | - | - | - |
| 0x4226 | Video Watchdog info | Text | High | 4 | - | - | - | - |
| 0x4227 | Media Type | 0-n | High | 0xFF | MEDIA_TYPE | - | - | - |
| 0x4228 | Address | Text | High | 8 | - | - | - | - |
| 0x4229 | ATC Test CD ID | Text | High | 13 | - | 1.0 | 1.0 | 0.0 |
| 0x422A | Quality Level ATC CD | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x422B | Amp Gyro CPU HDD DVD CD NVIDIA NTC Temp | Text | High | 8 | - | - | - | - |
| 0x422C | PDC Internal Error | 0-n | High | 0xFF | PDC_INTERNAL_ERROR | - | - | - |
| 0x422D | MileageErrorCause | 0-n | High | 0xFF | MILAGE_ERROR_CAUSE | - | - | - |
| 0x422E | Asleep Reason | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x422F | Map Material | 0-n | High | 0xFF | MAP_MATERIAL_REASON | - | - | - |
| 0x4230 | Videoswitch FB Instance IDs | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4231 | Interner Spannungs Sensor | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4232 | Fahrzeugzustand | Text | High | 6 | - | - | - | - |
| 0x4233 | Communication Failure to Tuner HW | 0-n | High | 0xFF | TUNER_HW_COMMUNICATION_FAILURE_REASON | - | - | - |
| 0x4234 | Reason for mounting the NAND writable | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4235 | Systemzeit in Sekunden seit Startup bis zur Unterspannung | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4236 | Bootloader oder Applikation | 0-n | High | 0xFF | BOOTLOADER_ODER_APPLIKATION | - | - | - |
| 0x4237 | CSM Error Code | 0-n | High | 0xFF | CSM_ERROR_CODE | - | - | - |
| 0x4239 | APPLICATION_ID | HEX | High | signed long | - | - | - | - |
| 0x4240 | CPU | 0-n | High | 0xFF | CPU | - | - | - |
| 0x4245 | AMP_GYRO_CPU_HDD_DVD_GPU_FOT_TEMP | Text | High | 7 | - | - | - | - |
| 0x4246 | SMART_DATEN | Text | High | 29 | - | - | - | - |
| 0x4247 | SMART_DATEN | Text | High | 29 | - | - | - | - |
| 0x4248 | RECOVERY_STEPS | 0-n | High | 0xFF | TAB_RECOVERY_STEPS | - | - | - |
| 0x4249 | PROCESS_NAME | Text | High | 64 | - | 1.0 | 1.0 | 0.0 |
| 0x424A | INSTRUCTION_POINTER | Text | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x424B | SIGNAL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x424C | CODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x424D | THREAD_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x424E | CPU_HIGHRUNNER | Text | High | 255 | - | 1.0 | 1.0 | 0.0 |
| 0x4250 | WAKEUPREASON | 0-n | High | 0xFF | TAB_WAKEUPREASON | - | - | - |
| 0x4252 | TEMPERATURE_FOT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4257 | GPS_HW_DEFECT | 0-n | High | 0xFF | GPS_HW_DEFECT | - | - | - |
| 0x4258 | YAW_VELOCITY_VEHICLE | 0-n | High | 0xFF | YAW_VELOCITY_VEHICLE | - | - | - |

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
| F_HLZ | ja |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x100A02 | access is denied | 0 |
| 0x100A03 | the handle is invalid | 0 |
| 0x100A04 | the storage control blocks were destroyed | 0 |
| 0x100A05 | not enough storage is available to process this command | 0 |
| 0x100A06 | the access code is invalid | 0 |
| 0x100A07 | the data is invalid | 0 |
| 0x100A08 | the system cannot find the drive specified | 0 |
| 0x100A09 | the directory cannot be removed | 0 |
| 0x100A0A | the media ist write protected | 0 |
| 0x100A0B | the system cannot find the device specified | 0 |
| 0x100A0C | data error (cyclic redundancy check) | 0 |
| 0x100A0D | the drive cannot locate a specific area or track on the disc | 0 |
| 0x100A0E | the system cannot find a file specified | 0 |
| 0x100A0F | The system cannot write to the specified device | 0 |
| 0x100B00 | Ursache FBlock NWM nicht vorhanden | 0 |
| 0x100C00 | PDC interner Fehler | 0 |
| 0x100C01 | Reset: Ursache ONOFF_ERROR | 0 |
| 0x100C02 | Reset: Ursache ONOFF_EMERGENCY_ERROR | 0 |
| 0x100D00 | Fehler konnte nach maximaler Anzahl an Versuchen nicht gesendet werden | 0 |
| 0x100D01 | FZM-Botschaft Fehler | 0 |
| 0x100E00 | Software Fehler für den Fehler Tracking Mechanismus | 0 |
| 0x101100 | ERC_CSM_UNEXPECTED_ERROR | 0 |
| 0x101101 | ERC_CSM_UNEXPECTED_RESPONSE | 0 |
| 0x101102 | ERC_CSM_INVALID_ENCRYPTED_ID_AND_KEY | 0 |
| 0x101103 | ERC_CSM_INVALID_SG_ID | 0 |
| 0x101104 | ERC_CSM_INVALID_SIGNATURE_OVER_RND | 0 |
| 0x101105 | ERC_CSM_SWE_INVALID | 0 |
| 0x101106 | ERC_ZSG_NO_RESPONSE_FROM_MSM | 0 |
| 0x101107 | ERC_ZSG_INVALID_B2VSEC_AUTHENTICATION | 0 |
| 0x101200 | SDARS Modul: interner Reset | 0 |
| 0x101201 | SDARS Modul: Kommunikationsfehler | 0 |
| 0x101301 | Partial address space was erased | 0 |
| 0x101302 | The read only section of The CSD does not match the card content | 0 |
| 0x101303 | A general or an unknown error | 0 |
| 0x101304 | Internal card controller error | 0 |
| 0x101305 | Card internal ECC failed to correct the data | 0 |
| 0x101306 | Command not legal for the card state | 0 |
| 0x101307 | The CRC check of the previous command failed | 0 |
| 0x101308 | A sequence or password error has been detected in lock/unlock card command | 0 |
| 0x101309 | Write to a protected block or to write protected card | 0 |
| 0x10130A | An invalid selection of write-blocks for erase occurred | 0 |
| 0x10130B | An error in the sequence of erase commands occurred | 0 |
| 0x10130C | The block length is not allowed | 0 |
| 0x10130D | A misaligned address which did not match the block length was used | 0 |
| 0x10130E | The commands argument was out of the allowed range for this card | 0 |
| 0x101700 | The system cannot read from the specified device | 0 |
| 0x101701 | The process cannot access the file because it is being used by another process | 0 |
| 0x101702 | The disk is full | 0 |
| 0x101703 | The file exists | 0 |
| 0x101704 | The directory or file cannot be created | 0 |
| 0x101705 | Other error | 0 |
| 0x10170F | Eine verbaute PIA-Funktion hat die Anfrage nach ihrem Einstellwert nicht beantwortet | 1 |
| 0x101710 | Eine PIA-Funktion, die bei der Konfigurationsanfrage nicht gefunden wurde, hat einen Einstellwert geschickt | 1 |
| 0x101711 | Eine verbaute PIA-Funktion hat das Setzen ihres Einstellwerts nicht bestätigt | 1 |
| 0x101712 | Eine PIA-Funktion meldet ihre Konfigurationsinformationen obwohl sie nicht dazu aufgefordert wurde | 1 |
| 0x101713 | Eine PIA-Funktion liefert korrupte Konfigurationsinformationen | 1 |
| 0x101714 | Für eine PIA-ID wurden mehrere Telegramme mit unterschiedlichen Konfigurationsinformationen geliefert | 1 |
| 0x101715 | Positionierung über 10 Minuten nicht möglich | 1 |
| 0x101716 | Kurzzeitiger Zusammenbruch der Kommunikation zwischen INIC und FR | 0 |
| 0x101717 | Video Watch Dog wurde ausgelöst | 1 |
| 0x101719 | Abbruch des laufenden PIA-Ablaufs wegen Fahrzeugzustandsänderung | 1 |
| 0x101724 | Status_Funkschlüssel vom CAS-Steuergerät nicht erhalten | 1 |
| 0x101725 | Illegal attempt to access coding area | 0 |
| 0x101729 | Fehler Protokollversion | 1 |
| 0x101730 | Fehler Reaktion auf Resynchronisations Anforderung | 1 |
| 0x101731 | Fehler synchronisierte Segmentanzahl | 1 |
| 0x101732 | Fehler Nachrichtenreihenfolge (NavGraphX) | 1 |
| 0x101733 | Fehler Synchronizationszähler | 1 |
| 0x101734 | Fehler Positionierung über Segmentlänge | 1 |
| 0x101735 | Fehler Löschen aktuell befahrenes Segment | 1 |
| 0x101736 | Fehler Wertebereich Ländercodierung | 1 |
| 0x101737 | Fehler ID Mehrfachverwendung | 1 |
| 0x101738 | Fehler Existenz Vater Segment ID | 1 |
| 0x101739 | Fehler Existenz Kill Segment ID | 1 |
| 0x10173A | Fehler Existenz aktuelle Segment ID | 1 |
| 0x10173B | Fehler Wertebereich Kill Segment ID | 1 |
| 0x10173C | Fehler Wertebereich Einheit Geschwindigkeit | 1 |
| 0x10173D | Fehler Wertebereich Positionierung | 1 |
| 0x10173E | Fehler Wertebereich Segment ID | 1 |
| 0x10173F | Fehler Wertebereich Segment FID | 1 |
| 0x101740 | Fehler Wertebreich Segmentlänge | 1 |
| 0x101741 | Fehler Wertebereich Segmentwahrscheinlichkeit | 1 |
| 0x10FFFF | UWB Dummy | 0 |
| 0x930000 | Timing-Master: kann Kanal nicht reservieren; Resource Allocation Table (RAT) ist voll | 1 |
| 0x930001 | Versorgungsspannung: Mindestwert unterschritten | 1 |
| 0x930002 | Sender-Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 1 | 0 |
| 0x930003 | Sender-Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 2 | 0 |
| 0x930004 | Diagnosemaster-Client: Datenzwischenablage im Active Response Handler übergelaufen | 1 |
| 0x930005 | Diagnosemaster-Client: Telegramm Systemzeit nicht fristgerecht erkannt | 1 |
| 0x930006 | MOST: Licht geht unerwartet aus | 0 |
| 0x930007 | MOST: Synchronisation (Phase Locked Loop) arbeitet nicht korrekt | 0 |
| 0x930008 | Systemzustand OK nicht fristgerecht erkannt | 0 |
| 0x930009 | FBlock mit Methode SenderHandle: Lebenszeichen kommt nicht fristgerecht | 1 |
| 0x93000A | FBlock mit Methode: Lebenszeichen kommt nicht fristgerecht | 1 |
| 0x93000B | Audiosenke: kann nicht auf Kanal verbinden | 1 |
| 0x93000C | Audioquelle: kann Kanal nicht fristgerecht reservieren (allokieren) | 1 |
| 0x93000D | Audioquelle: kann Kanal nicht fristgerecht freigeben (deallokieren) | 1 |
| 0x93000E | Audiosenke: kann Kanal nicht fristgerecht freigeben | 1 |
| 0x93000F | MOST-Knoten: mindestens ein Funktionsblock abgemeldet | 1 |
| 0x930010 | MOST-Knoten: die DefaultRegistry ist nicht aktuell | 1 |
| 0x930033 | Empfängerknoten: hat Nachricht nicht abgenommen; Empfänger existiert nicht | 1 |
| 0x930034 | Empfängerknoten: hat Nachricht nicht abgenommen; fehlerhafte Checksumme am Empfänger erkannt | 1 |
| 0x93003B | Empfängerknoten: mindestens eine Nachricht (Group/Broadcast) nicht abgenommen | 0 |
| 0x93003D | Senderknoten: adressierter Funktionsblock existiert nicht | 0 |
| 0x930047 | Audiosenke: Audioeinstellungen nicht korrekt ausgeführt | 1 |
| 0x930048 | Audiosenke: Audioeinstellungen nicht fristgerecht ausgeführt | 1 |
| 0x93004A | Audioquelle: kann nicht fristgerecht geschaltet werden | 1 |
| 0x93004B | Audiosenke: Stummschaltung arbeitet nicht fristgerecht | 1 |
| 0x93004C | MOST-Knoten spricht Netzwerkmaster (NWM) während Systemzustand NotOk an | 1 |
| 0x93004D | MOST-Knoten: keine Antwort nach erstem System-Scan | 1 |
| 0x93004E | MOST-Knoten: keine Antwort nach zwanzigstem System-Scan | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1707 | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1709 | MOSTMesHeader | Text | High | 6 | - | - | - | - |
| 0x170B | NPR | HEX | High | unsigned char | - | - | - | - |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x172D | MOSTMesOpType | Text | High | 9 | - | - | - | - |
| 0x4200 | AmpTemp | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4201 | GyroTemp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4202 | CPUTemp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4203 | HDD Temp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4204 | DVD Temp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4205 | Audioquelle | Text | High | 3 | - | - | - | - |
| 0x4206 | SMART Daten | Text | Low | 28 | - | - | - | - |
| 0x4207 | SMART Daten | Text | High | 28 | - | - | - | - |
| 0x4208 | Secondary DTC ID | Text | High | 3 | - | - | - | - |
| 0x4209 | AMFM Tuner SW Version | Text | High | 3 | - | - | - | - |
| 0x420A | DAB Tuner SW Version | Text | High | 3 | - | - | - | - |
| 0x420B | Audio Label | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420C | MemoryAddress für Coding Error Work Domain | HEX | High | signed long | - | - | - | - |
| 0x420D | PIA Process | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420E | PIA Medium | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420F | PIA Profilname | Text | High | 12 | - | 1.0 | 1.0 | 0.0 |
| 0x4210 | PIA IStufenbezeichner | Text | High | 4 | - | - | - | - |
| 0x4211 | PIA Version | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4212 | PIA ErrorID | 0-n | High | 0xFF | PIA_ERROR_ID | - | - | - |
| 0x4213 | PIA LowMemory | Text | High | 8 | - | - | - | - |
| 0x4214 | PIA Profilnummer | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4215 | PIA Profilcompare | Text | High | 2 | - | - | - | - |
| 0x4216 | PIA FunctionID | Text | High | 2 | - | - | - | - |
| 0x4217 | PIA configuration attributes | Text | High | 4 | - | - | - | - |
| 0x4218 | PIA configuration attributes compare | Text | High | 8 | - | - | - | - |
| 0x4219 | PIA Profilnumbers function and master | Text | High | 2 | - | - | - | - |
| 0x4220 | FB Defect Error | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4221 | FB Software Error | HEX | High | unsigned char | - | - | - | - |
| 0x4222 | Interne 5V Spannung | mV | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4223 | Grund des Luefterfehlers | 0-n | High | 0xFF | LUEFTER_FEHLER | - | - | - |
| 0x4224 | VIDEO_SOURCE | 0-n | High | 0xFF | VIDEO_SOURCE | - | - | - |
| 0x4225 | VideoSink | 0-n | High | 0xFF | VIDEO_SINK | - | - | - |
| 0x4226 | Video Watchdog info | Text | High | 4 | - | - | - | - |
| 0x4227 | Media Type | 0-n | High | 0xFF | MEDIA_TYPE | - | - | - |
| 0x4228 | Address | Text | High | 8 | - | - | - | - |
| 0x4229 | ATC Test CD ID | Text | High | 13 | - | 1.0 | 1.0 | 0.0 |
| 0x422A | Quality Level ATC CD | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x422B | Amp Gyro CPU HDD DVD CD NVIDIA NTC Temp | Text | High | 8 | - | - | - | - |
| 0x422C | PDC Internal Error | 0-n | High | 0xFF | PDC_INTERNAL_ERROR | - | - | - |
| 0x422D | MileageErrorCause | 0-n | High | 0xFF | MILAGE_ERROR_CAUSE | - | - | - |
| 0x422E | Asleep Reason | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x422F | Map Material | 0-n | High | 0xFF | MAP_MATERIAL_REASON | - | - | - |
| 0x4230 | Videoswitch FB Instance IDs | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4231 | Interner Spannungs Sensor | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4232 | Fahrzeugzustand | Text | High | 6 | - | - | - | - |
| 0x4233 | Communication Failure to Tuner HW | 0-n | High | 0xFF | TUNER_HW_COMMUNICATION_FAILURE_REASON | - | - | - |
| 0x4234 | Reason for mounting the NAND writable | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4235 | Systemzeit in Sekunden seit Startup bis zur Unterspannung | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4236 | Bootloader oder Applikation | 0-n | High | 0xFF | BOOTLOADER_ODER_APPLIKATION | - | - | - |
| 0x4237 | CSM Error Code | 0-n | High | 0xFF | CSM_ERROR_CODE | - | - | - |
| 0x4239 | APPLICATION_ID | HEX | High | signed long | - | - | - | - |
| 0x4240 | CPU | 0-n | High | 0xFF | CPU | - | - | - |
| 0x4241 | FAHRZEUGGESCHWINDIGKEIT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4242 | GPS_LONGITUDE | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4243 | GPS_LATITUDE | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4245 | AMP_GYRO_CPU_HDD_DVD_GPU_FOT_TEMP | Text | High | 7 | - | - | - | - |
| 0x4246 | SMART_DATEN | Text | High | 29 | - | - | - | - |
| 0x4247 | SMART_DATEN | Text | High | 29 | - | - | - | - |
| 0x4248 | RECOVERY_STEPS | 0-n | High | 0xFF | TAB_RECOVERY_STEPS | - | - | - |
| 0x4249 | PROCESS_NAME | Text | High | 64 | - | 1.0 | 1.0 | 0.0 |
| 0x424A | INSTRUCTION_POINTER | Text | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x424B | SIGNAL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x424C | CODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x424D | THREAD_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x424E | CPU_HIGHRUNNER | Text | High | 255 | - | 1.0 | 1.0 | 0.0 |
| 0x4250 | WAKEUPREASON | 0-n | High | 0xFF | TAB_WAKEUPREASON | - | - | - |
| 0x4251 | HD_MALFUNC_RUNTIME_ERRCODE | 0-n | High | 0xFF | HD_MALFUNC_RUNTIME_ERRCODE | - | - | - |
| 0x4252 | TEMPERATURE_FOT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4253 | POWER_SEQUENCE_ERROR | 0-n | High | 0xFF | POWER_SEQUENCE_ERROR | - | - | - |
| 0x4254 | FIS_FAILURE_REASON | Text | High | 40 | - | - | - | - |
| 0x4255 | File_Path | Text | High | 256 | - | 1.0 | 1.0 | 0.0 |
| 0x4256 | ERROR_CODE_LM | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4259 | PERSONAL_DATAS_ON_PD_ERR | 0-n | High | 0xFFFFFFFF | PERSONAL_DATAS_ON_PD_ERR | - | - | - |
| 0x4260 | PERSONAL_DATAS_OFF_PD_ERR | 0-n | High | 0xFF | PERSONAL_DATAS_OFF_PD_ERR | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

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
| 0x00000001 | Connected Drive |

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

### POWER_SEQUENCE_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | CDCE (Clock generator) |
| 0x01 | Power-Good |

### RES_0X400A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AMB_SENSOR_WERT | lx | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ambient brightness of the local CID sensor (Lux). Range: [0x0000¿0x03E8] 0¿1000 Lux 0xFFFF invalid or sensor not implemented |
| STAT_BL_TEMP_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Currently measured temperature of the backlight temperature sensor. Range: [0xD8¿0x78] -40°C bis  120°C 0x80 -128°C  Sensor Failure |
| STAT_VCC_VOLTAGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vcc voltage of the CID in steps of 1/10 V Range: [0x0000¿0xFFFE]  0xFFFF invalid |
| STAT_BACKLIGT_DRIVER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Error status output pins of the backlight LED. Range: [0x00¿0x03] 0xFF invalid |
| STAT_INT_STATUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Contents of the Indigo register ¿IntStatus Range: [0x0000¿0xFFFF] |

### RES_0X400D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_THRESHOLDS01_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 01 in 0¿100°C |
| STAT_TEMP_THRESHOLDS02_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 02 in 0¿100°C |
| STAT_TEMP_THRESHOLDS03_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 03 in 0¿100°C |
| STAT_TEMP_THRESHOLDS04_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 04 in 0¿100°C |
| STAT_TEMP_COUNTERS01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 01 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 02 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 03 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 04 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |

### RES_0X400E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAJOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Major SW version of the CID |
| STAT_MINOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minor SW version of the CID |
| STAT_PATCH_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patch version of the CID |

### RES_0X400F

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

### RES_0X4010

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
| STAT_DIM_FADE_EXPO_T1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fade in ramp curve exponent. 0=linear, 1=square, ... Range: [0x00¿0x04] |
| STAT_DIM_FADE_EXPO_T2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fade out ramp curve exponent. 0=linear, 1=square, ... Range: [0x00¿0x04] |
| STAT_DIM_FILT_CHANGE_SENSITIVITY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adjusts the reaction on  strong signal changes depending on the time the input value is stable. 0 = no adjustment (old filter algorithm) 1-65535 = number of dim cycles the input value has to be stable Range: [0x0000¿0xFFFF] |
| STAT_DIM_MIN_OFFSET_BRIG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lower border of the brightness offset regulation range |
| STAT_ENDIANESS_ADAPTED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Indicates if the endianess of the coding data block has been adapted or not |
| STAT_PADDING_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Padding for further use |

### RES_0X4011

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

### RES_0XA008

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WAVEBAND | - | - | + | 0-n | - | unsigned char | - | TWaveband | 1.0 | 1.0 | 0.0 | aktuelles Frequenzband: siehe Tabelle TWaveband |

### RES_0XA00A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEARCHING_PROCESS | - | - | + | 0-n | - | unsigned char | - | TSearchingProcess | 1.0 | 1.0 | 0.0 | This status must be reinitialised to 0 when the Head-Unit starts up (normal wake up, reset). |
| STAT_NAME_WERT | - | - | + | - | - | string[8] | - | - | 1.0 | 1.0 | 0.0 | PS name of the best station |
| STAT_PI_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Program Identification of the best station |
| STAT_FIELDSTRENGTH_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fieldstrength of the best station |
| STAT_QUALITY_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Quality of the best station |

### RES_0XA00B

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENTSOURCE | - | - | + | 0-n | - | unsigned char | - | TEntSource | 1.0 | 1.0 | 0.0 | die eingestellte Entertainmentquelle |
| STAT_DESIRED_ENTSOURCE | - | - | + | 0-n | - | unsigned char | - | TEntSourceStatus | 1.0 | 1.0 | 0.0 | gibt zurück, ob die letzte einzustellende Entertainmentquelle verfügbar war. |

### RES_0XA00E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NAVI_SIMULATION | - | - | + | 0-n | - | unsigned char | - | TNaviSimulationModeActivationStatus | 1.0 | 1.0 | 0.0 | - |

### RES_0XA016

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANT_EIGEN_DIAG | - | - | + | 0-n | - | unsigned char | - | TAntennaDiag | 1.0 | 1.0 | 0.0 | liefert das Ergebnis des Selbsttests  des Diversity als Integer-Wert. |

### RES_0XA018

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt an, welche Antenne(n) getestet wurden. |
| STAT_TEST_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TTestStatus | 1.0 | 1.0 | 0.0 | Gibt den Status des gesamten Tests oder der entsprechenden Antennen wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_ANTENNEN_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 2 oder 3 meldet. Gibt wieder, wie viele Fehler während des Tests gefunden wurden. |
| STAT_FEHLER_1_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | Rückgabe der Antenne, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_1_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_1_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_2_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_2_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_3_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_3_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_4_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_4_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_5_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_5_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_6_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_6_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_7_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_7_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_8_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_8_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_9_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_9_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_10_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_10_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_11_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_11_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_12_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_12_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_13_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_13_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_14_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_14_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_15_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_15_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_16_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_16_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |

### RES_0XA019

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | gibt an, welche externen Anschlüsse getestet wurden. |
| STAT_TEST_AUXVERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TTestStatus | 1.0 | 1.0 | 0.0 | Gibt den Status des gesamten Tests oder der entsprechenden Anschlüsse wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_VERBINDUNGEN_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 2 oder 3 meldet. Gibt wieder, wie viele Fehler während des Tests gefunden wurden. |
| STAT_FEHLER_1_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_1_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_2_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_2_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_3_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_3_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_4_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_4_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_5_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_5_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_6_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_6_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_7_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_7_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_8_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_8_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_9_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_9_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_10_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_10_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_11_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_11_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_12_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_12_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_13_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_13_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_14_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_14_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_15_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_15_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_16_VERBINDUNG | - | - | + | 0-n | - | unsigned int | - | TAuxVerbindung | 1.0 | 1.0 | 0.0 | Gibt den Anschluss wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |
| STAT_FEHLER_16_FEHLERART_VERBINDUNG | - | - | + | 0-n | - | unsigned char | - | TVerbindungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Text:  0 Kurzschluss nach Plus,  1 Kurzschluss nach Masse,  2 Leitungsunterbrechung,  255 Nicht definiert.  Dieses Result wird mit 255 belegt, wenn STAT_TEST_AUXVERBINDUNG nicht den Wert 3 (Fehler) meldet oder die Auxverbindung nicht existiert. |

### RES_0XA01C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HERSTELLUNG_VIDEOVERBINDUNG | - | - | + | 0-n | - | unsigned char | - | THerstellungStatus | 1.0 | 1.0 | 0.0 | Gibt 0 wieder, wenn: - Keine Videoverbindung angefordert wurde. - Nach dem Herunterfahren oder Neustart des Steuergerätes. - Die Verbindung wieder per Diagnose abgebaut bzw. auf regulären Betrieb zurückgeschaltet wurde. |
| STAT_HERSTELLUNG_FEHLER | - | - | + | 0-n | - | unsigned char | - | THerstellungFehler | 1.0 | 1.0 | 0.0 | Gibt 0 wieder, wenn: - Keine Videoverbindung angefordert wurde. - Nach dem Herunterfahren oder Neustart des Steuergerätes. - Die Verbindung wieder per Diagnose abgebaut bzw. auf regulären Betrieb zurückgeschaltet wurde. - Wenn STAT_HERSTELLUNG_VIDEOVERBINDUNG den Wert 0,1 oder 2 aufweist. |
| STAT_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Ausgewählte Quelle: Tabelle TVideoQuelle |
| STAT_SENKEN | - | - | + | 0-n | - | unsigned int | - | TVideoSenke | 1.0 | 1.0 | 0.0 | Ausgwählte Senke: Bitkombination: Tabelle TVideoSenke |

### RES_0XA01D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt nach Tabelle TVideoQuelle bzw. TEingangVideoSwitch an, welche Quelle(n) getestet wurde(n). |
| STAT_TEST_VIDEOEINGANG | - | - | + | 0-n | - | unsigned char | - | TTestStatus | 1.0 | 1.0 | 0.0 | Gibt den Status des gesamten Tests oder der entsprechenden Quelle(n) wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_SIGNALE_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 2 oder 3 meldet. Gibt wieder, wie vielen Fehler während des Test gefunden wurden. |
| STAT_FEHLER_1_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_1_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. X ist kleiner gleich der Anzahl der auf das Steuergerät schaltbaren Quellen. Für den Videoswitch und die Monitore sind die schaltbaren Quellen gleich der Anzahl der Eingänge. Bei N theoretisch verbaubaren und schaltbaren Quellen muss dieses Result N-mal implementiert werden. Beispiel falls es nur möglichen Quellen gäbe: STAT_FEHLER_1_ FEHLERART, STAT_FEHLER_2_ FEHLERART |
| STAT_FEHLER_1_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_1_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_1_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | ertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_2_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_2_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_3_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_3_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_4_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_4_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_5_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_5_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_6_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_6_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_7_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_7_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_8_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_8_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_9_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_9_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_10_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_10_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_11_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_11_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_12_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_12_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_13_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_13_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_14_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_14_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_15_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_15_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_16_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_16_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |

### RES_0XA01E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAU_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TVerbauRoutine | - | - | - | Ausgeführte Testroutine(n). |
| STAT_TEST_VERBAU | - | - | + | 0-n | - | unsigned char | - | TTestStatus | 1.0 | 1.0 | 0.0 | Gibt den Status des Verbautests wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |

### RES_0XA021

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREQUENZ_WERT | - | - | + | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Integer, 20..20 000 [Hz] Bei Verstärkern: 8 000 ... 20 000 [Hz] |
| STAT_LEVEL_WERT | - | - | + | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Bei Headunits: Hex-Wert, von 0x00 lückenlos bis 0x7F, Bei Verstärkern: Integer, -50..0 [dB] |
| STAT_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | bezeichnet den Kanal, auf dem gemessen wurde. |
| STAT_MESSDAUER_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | gibt die Dauer der Messung wieder. Bereich: 50-1000ms Bei Verstärkern: Bereich: 800-3000ms |
| STAT_LAUTSPRECHER_IMPEDANZMESSUNG | - | - | + | 0-n | - | unsigned char | - | TTestStatus | - | - | - | Gibt den Status des gesamten Tests oder der entsprechenden Kanäle wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_KANAELE_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 2 oder 3 meldet. Gibt wieder, wie viele Fehler während des Tests gefunden wurden. |
| STAT_FEHLER_1_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_1_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_1_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_1_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_2_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_2_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_2_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_2_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_3_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_3_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_3_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_3_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_4_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_4_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_4_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_4_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_5_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_5_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_5_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_5_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_6_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_6_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_6_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_6_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_7_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_7_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_7_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_7_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_8_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_8_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_8_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_8_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_9_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_9_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_9_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_9_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_10_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_10_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_10_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_10_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_11_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_11_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_11_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_11_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_12_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_12_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_12_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_12_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_13_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_13_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_13_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_13_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_14_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_14_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_14_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_14_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_15_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_15_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_15_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_15_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |
| STAT_FEHLER_16_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Gibt den Kanal wieder, bei dem der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. |
| STAT_FEHLER_16_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TKanalFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_LAUTSPRECHER_IMPEDANZMESSUNG nicht den Wert 3 (Fehler) meldet oder der Kanal nicht existiert. Außerhalb Toleranz bezeichnet auch Lautsprecherfehlverbau, d.h. z.B. einen Stereo-Mitteltöner in einem Hifi-Fahrzeug. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_16_MESSWERT_SPANNUNG_WERT | - | - | + | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Spannung in mV Maximal mögliche Spannung: 50V Wird nur eine Strommessung durchgeführt, so ist dieser Wert mit 65535 zu belegen |
| STAT_FEHLER_16_MESSWERT_STROMSTAERKE_WERT | - | - | + | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf dem fehlerhaften Kanal X gemessene Stromstärke in mA Maximal mögliche Stromstärke: 50A Wird nur eine Spannungsmessung durchgeführt, so ist dieser Wert mit 65535 zu belegen. |

### RES_0XA022

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELBSTTEST_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TSelbsttestRoutine | 1.0 | 1.0 | 0.0 | Routine(n), die getestet wurde(n). Tabelle  TSelbsttestRoutine |
| STAT_SELBSTTEST | - | - | + | 0-n | - | unsigned char | - | TTestStatus | 1.0 | 1.0 | 0.0 | Gibt den Status des Tests wieder. |

### RES_0XA024

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MENU_WERT | - | - | + | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ID des Menüs. |
| STAT_MENU_RSE_RIGHT_WERT | - | - | + | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ID des Menü der zweiten MMI, z.B. RSE rechter Bildschirm. |

### RES_0XA025

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LANGUAGE | - | - | + | 0-n | - | unsigned char | - | TLanguage | - | - | - | Die derzeit eingestellte MMI Sprache. |

### RES_0XA029

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLASH_ETHERNET_CONNECTION_STATE | - | - | + | 0-n | - | unsigned char | - | TEthernetActivationState | 1.0 | 1.0 | 0.0 | Status der Ethernet-Verbindung (es darf nicht 0 gemeldet werden). Ist die Verbindung nicht für das Steuergerät vorgesehen, so wird 255 zurückgemeldet. |
| STAT_HU_RSE_ETHERNET_CONNECTION_STATE | - | - | + | 0-n | - | unsigned char | - | TEthernetActivationState | 1.0 | 1.0 | 0.0 | Status der Ethernet-Verbindung (es darf nicht 0 gemeldet werden). Ist die Verbindung nicht für das Steuergerät vorgesehen, so wird 255 zurückgemeldet. |
| STAT_HU_COMBOX_ETHERNET_CONNECTION_STATE | - | - | + | 0-n | - | unsigned char | - | TEthernetActivationState | 1.0 | 1.0 | 0.0 | Status der Ethernet-Verbindung (es darf nicht 0 gemeldet werden). Ist die Verbindung nicht für das Steuergerät vorgesehen, so wird 255 zurückgemeldet. |
| STAT_RSE_COMBOX_ETHERNET_CONNECTION_STATE | - | - | + | 0-n | - | unsigned char | - | TEthernetActivationState | 1.0 | 1.0 | 0.0 | Status der Ethernet-Verbindung (es darf nicht 0 gemeldet werden). Ist die Verbindung nicht für das Steuergerät vorgesehen, so wird 255 zurückgemeldet. |

### RES_0XA02E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_1_VENDORID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Lieferanten ID USB Stick 1 |
| STAT_1_PRODUCTID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Produkt ID USB Stick 1 |
| STAT_1_CLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Class-ID USB Stick 1 |
| STAT_1_SUBCLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Subclass-ID USB Stick 1 |
| STAT_1_KM_FIRST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Connect von USB Stick 1 |
| STAT_1_KM_FIRST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Disconnect von USB Stick 1 |
| STAT_1_KM_LAST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Connect von USB Stick 1 |
| STAT_1_KM_LAST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Diconnect von USB Stick 1 |
| STAT_1_CONNECTIONS_WERT | + | - | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Connections USB Stick 1 |
| STAT_1_CONNECT_STATE | + | - | - | 0-n | - | unsigned char | - | TUsbConnectionState | 1.0 | 1.0 | 0.0 | Aktueller Zustand Connection USB Stick 1 |
| STAT_1_USED_PORT | + | - | - | 0-n | - | unsigned char | - | TUsbInterface | 1.0 | 1.0 | 0.0 | Benutzter Port USB Stick 1 0: USB Interface 1: Snap In Adapter |
| STAT_2_VENDORID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Lieferanten ID USB Stick 2 |
| STAT_2_PRODUCTID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Produkt ID USB Stick 2 |
| STAT_2_CLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Class-ID USB Stick 2 |
| STAT_2_SUBCLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Subclass-ID USB Stick 2 |
| STAT_2_KM_FIRST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Connect von USB Stick 2 |
| STAT_2_KM_FIRST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Disconnect von USB Stick 2 |
| STAT_2_KM_LAST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Connect von USB Stick 2 |
| STAT_2_KM_LAST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Diconnect von USB Stick 2 |
| STAT_2_CONNECTIONS_WERT | + | - | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Connections USB Stick 2 |
| STAT_2_CONNECT_STATE | + | - | - | 0-n | - | unsigned char | - | TUsbConnectionState | 1.0 | 1.0 | 0.0 | Aktueller Zustand Connection USB Stick 2 |
| STAT_2_USED_PORT | + | - | - | 0-n | - | unsigned char | - | TUsbInterface | 1.0 | 1.0 | 0.0 | Benutzter Port USB Stick 2 0: USB Interface 1: Snap In Adapter |
| STAT_3_VENDORID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Lieferanten ID USB Stick 3 |
| STAT_3_PRODUCTID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Produkt ID USB Stick 3 |
| STAT_3_CLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Class-ID USB Stick 3 |
| STAT_3_SUBCLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Subclass-ID USB Stick 3 |
| STAT_3_KM_FIRST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Connect von USB Stick 3 |
| STAT_3_KM_FIRST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Disconnect von USB Stick 3 |
| STAT_3_KM_LAST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Connect von USB Stick 3 |
| STAT_3_KM_LAST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Diconnect von USB Stick 3 |
| STAT_3_CONNECTIONS_WERT | + | - | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Connections USB Stick 3 |
| STAT_3_CONNECT_STATE | + | - | - | 0-n | - | unsigned char | - | TUsbConnectionState | 1.0 | 1.0 | 0.0 | Aktueller Zustand Connection USB Stick 3 |
| STAT_3_USED_PORT | + | - | - | 0-n | - | unsigned char | - | TUsbInterface | 1.0 | 1.0 | 0.0 | Benutzter Port USB Stick 3 0: USB Interface 1: Snap In Adapter |
| STAT_4_VENDORID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Lieferanten ID USB Stick 4 |
| STAT_4_PRODUCTID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Produkt ID USB Stick 4 |
| STAT_4_CLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Class-ID USB Stick 4 |
| STAT_4_SUBCLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Subclass-ID USB Stick 4 |
| STAT_4_KM_FIRST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Connect von USB Stick 4 |
| STAT_4_KM_FIRST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Disconnect von USB Stick 4 |
| STAT_4_KM_LAST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Connect von USB Stick 4 |
| STAT_4_KM_LAST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Diconnect von USB Stick 4 |
| STAT_4_CONNECTIONS_WERT | + | - | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Connections USB Stick 4 |
| STAT_4_CONNECT_STATE | + | - | - | 0-n | - | unsigned char | - | TUsbConnectionState | 1.0 | 1.0 | 0.0 | Aktueller Zustand Connection USB Stick 4 |
| STAT_4_USED_PORT | + | - | - | 0-n | - | unsigned char | - | TUsbInterface | 1.0 | 1.0 | 0.0 | Benutzter Port USB Stick 4 0: USB Interface 1: Snap In Adapter |

### RES_0XA039

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEVEL_WERT | + | - | - | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F, Nicht unterstützte Werte (Stereo: 0x3F) dürfen nicht zu Fehlermeldungen führen. Sondern die für das Lautsprechersystem nächstmöglich kleinere verfügbare Lautstärke wird eingestellt.   Bei manchen sekundären Lautstärken wie Navi-Out wird die Lautstärke relativ angegeben, z.B: [-11;11]  Bei Verstärkern: Integer, -96..0 [dB] |

### RES_0XA03A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NAVI_MAP | - | - | + | 0-n | - | unsigned char | - | TNaviMapStatus | 1.0 | 1.0 | 0.0 | Status Kunden Navigation Karte |

### RES_0XA03C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER | - | - | + | 0-n | - | unsigned char | - | TLuefterStatus | 1.0 | 1.0 | 0.0 | Status des Lüfters. |
| STAT_LUEFTER_DREHZAHL_WERT | - | - | + | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Frequenz des Lüfters in Hz. (Wenn nicht abfragbar, wird 0xFFFF zurückgegeben) |

### RES_0XA03D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_FACTORY_DEFAULTS | - | - | + | 0-n | - | unsigned char | - | TSdarsFactorySuccessful | 1.0 | 1.0 | 0.0 | SDARS Factory Defaults |

### RES_0XA03E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_GENERATOR_FREQUENCY_LEFT_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Einheit [10Hz] Dmait Bereich 10Hz bis 15990Hz |
| STAT_SDARS_GENERATOR_FREQUENCY_RIGHT_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Einheit [10Hz] Dmait Bereich 10Hz bis 15990Hz |

### RES_0XA03F

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEARCHING_PROCESS_STATUS_DAB | - | - | + | 0-n | - | unsigned char | - | TSearchingProcess | 1.0 | 1.0 | 0.0 | - |
| STAT_ENSEMBLE_NAME_WERT | - | - | + | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Label of active ensemble. |
| STAT_ENSEMBLE_ID_WERT | - | - | + | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ensemble Identification |
| STAT_ENSEMBLE_BER_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Bit Error Rate of active ensemble |
| STAT_SERVICE_NAME_WERT | - | - | + | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Name of active service (first service of ensemble) |

### RES_0XA045

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEARCHING_PROCESS_STATUS | - | - | + | 0-n | - | unsigned char | - | TSearchingProcess | 1.0 | 1.0 | 0.0 | Tabelle TSearchingProcess |
| STAT_NAME_WERT | - | - | + | - | - | string | - | - | 1.0 | 1.0 | 0.0 | PS name of the best station |
| STAT_PI_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Program Identification of the best station |
| STAT_FIELDSTRENGTH_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fieldstrength of the best station: Range: 0&255 |
| STAT_QUALITY_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Quality of the best station: Range: 0&255 |

### RES_0XA047

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEARCHING_PROCESS_STATUS_DAB | - | - | + | 0-n | - | unsigned char | - | TSearchingProcess | 1.0 | 1.0 | 0.0 | Tabelle TSearchingProcess |
| STAT_ENSEMBLE_NAME_WERT | - | - | + | - | - | string | - | - | 1.0 | 1.0 | 0.0 | PS name of the best station |
| STAT_ENSEMBLE_ID_WERT | - | - | + | - | - | string | - | - | 1.0 | 1.0 | 0.0 | PS name of the best station |
| STAT_ENSEMBLE_BER_WERT | - | - | + | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit Error Rate of active ensemble |
| STAT_SERVICE_NAME_WERT | - | - | + | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Name of active service (first service of ensemble) |

### RES_0XA048

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT | - | - | + | 0-n | - | unsigned char | - | TBluetoothStatus | 1.0 | 1.0 | 0.0 | Liest den Bluetooth Status aus |

### RES_0XA049

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT_ERKENNUNGSMODUS | - | - | + | 0-n | - | unsigned char | - | TBluetoothDiscoveryModeStatus | 1.0 | 1.0 | 0.0 | Liest den Status des Bluetooth Erkennungsmodus |

### RES_0XA04C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_JOB_RESULT | - | - | + | 0-n | - | unsigned char | - | TBluetoothReset | 1.0 | 1.0 | 0.0 | Allgemeiner Status Report |
| STAT_PAIRED_DEVICE_DELETED | - | - | + | 0-n | - | unsigned char | - | TBluetoothReset | 1.0 | 1.0 | 0.0 | Status Löschen Telefonbücher und Gesprächslisten |
| STAT_EMAIL_DELETED | - | - | + | 0-n | - | unsigned char | - | TBluetoothReset | 1.0 | 1.0 | 0.0 | Status Löschen E-Mails |
| STAT_SMS_DELETED | - | - | + | 0-n | - | unsigned char | - | TBluetoothReset | 1.0 | 1.0 | 0.0 | Status Löschen SMS |
| STAT_MUSIC_LIST_DELETED | - | - | + | 0-n | - | unsigned char | - | TBluetoothReset | 1.0 | 1.0 | 0.0 | Status Löschen Music List |
| STAT_PIM_DELETED | - | - | + | 0-n | - | unsigned char | - | TBluetoothReset | 1.0 | 1.0 | 0.0 | Status Löschen PIM |

### RES_0XA062

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FORMAT_FLASHSPEICHER | - | - | + | 0-n | - | unsigned char | - | TFormattingStatus | 1.0 | 1.0 | 0.0 | Status der Formatierung |
| STAT_PARTITION | - | - | + | 0-n | - | unsigned char | - | TFlashMemoryPartition | 1.0 | 1.0 | 0.0 | Partition, die formatiert wird |
| STAT_PERCENT_COMPLETE_WERT | - | - | + | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fertigstellung der Formatierung in % |
| STAT_FORMAT_ERROR | - | - | + | 0-n | - | unsigned char | - | TFormattingErrorFlashMemory | 1.0 | 1.0 | 0.0 | Aufgetretener Fehler während Formatierung |

### RES_0XA063

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PARTITION_FLASHSPEICHER | - | - | + | 0-n | - | unsigned char | - | TPartitioningStatus | 1.0 | 1.0 | 0.0 | Status Partitionierungs-Prozess |
| STAT_FLASHSPEICHER_SIZE_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamte Kapazität Flashspeicher in MByte |
| STAT_NUMBER_PARTITIONS_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der verfügbaren Partitionen |
| STAT_SIZE_PARTITION_1_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 1 in MByte |
| STAT_SIZE_PARTITION_2_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 2 in MByte |
| STAT_SIZE_PARTITION_3_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 3 in MByte |
| STAT_SIZE_PARTITION_4_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 4 in MByte |
| STAT_SIZE_PARTITION_5_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 5 in MByte |
| STAT_SIZE_PARTITION_6_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 6 in MByte |
| STAT_SIZE_PARTITION_7_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 7 in MByte |
| STAT_SIZE_PARTITION_8_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 8 in MByte |
| STAT_SIZE_PARTITION_9_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 9 in MByte |
| STAT_SIZE_PARTITION_10_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 10 in MByte |
| STAT_SIZE_PARTITION_11_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 11 in MByte |
| STAT_SIZE_PARTITION_12_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 12 in MByte |
| STAT_SIZE_PARTITION_13_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 13 in MByte |
| STAT_SIZE_PARTITION_14_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 14 in MByte |
| STAT_SIZE_PARTITION_15_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 15 in MByte |
| STAT_SIZE_PARTITION_16_WERT | - | - | + | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kapazität Partition 16 in MByte |
| STAT_PARTITION_ERROR | - | - | + | 0-n | - | unsigned char | - | TPartitioningErrorFlashMemory | 1.0 | 1.0 | 0.0 | Aufgetretener Fehler während Partitionierung |

### RES_0XA06A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_USB_TEST_TEL_KDZ | - | - | + | 0-n | - | unsigned char | - | TUsbTestStatus | 1.0 | 1.0 | 0.0 | Ergebnis des USB Schnittstelle Tests |
| STAT_VENDORID_INT_TEL_KDZ_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die vorgegebene VendorID von STEUERN_USB_TEST_TEL für das Gerät von der USB Schnittstelle ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_PRODUCTID_INT_TEL_KDZ_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die vorgegebene ProductID von STEUERN_USB_TEST_TEL für das Gerät von der USB Schnittstelle ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_VENDORID_REC_TEL_KDZ_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die erkannte VendorID des Gerätes von der USB Schnittstelle ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_PRODUCTID_REC_TEL_KDZ_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die erkannte ProductID des Gerätes von der USB Schnittstelle ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_VENDORSTRING_KDZ_REC_WERT | - | - | + | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Hier wird der erkannte VendorString des Gerätes von der USB Schnittstelle ausgegeben. ACHTUNG: Rückgabe erfolgt als String. |
| STAT_USB_TEST_TEL_SIA | - | - | + | 0-n | - | unsigned char | - | TUsbTestStatus | 1.0 | 1.0 | 0.0 | Ergebnis des Snap In Adpater Tests |
| STAT_VENDORID_INT_TEL_SIA_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die vorgegebene VendorID von STEUERN_USB_TEST_PHONE ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_PRODUCTID_INT_TEL_SIA_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die vorgegebene ProductID von STEUERN_USB_TEST_TEL für das Telefon vom Snap In Adapter ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_VENDORID_REC_TEL_SIA_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die erkannte VendorID des Telefons vom Snap In Adapter ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_PRODUCTID_REC_TEL_SIA_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die erkannte ProductID des Telefons vom Snap In Adapter ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_VENDORSTRING_SIA_REC_WERT | - | - | + | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Hier wird der erkannte VendorString für das Telefon vom Snap In Adapter ausgegeben. ACHTUNG: Rückgabe erfolgt als String. |

### RES_0XA0AA

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_ACTIVATION | - | - | + | 0-n | high | unsigned char | - | TAB_ONOFF | 1.0 | 1.0 | 0.0 | gibt den Zustand des SDARS Moduls anhang TAB_ONOFF an |

### RES_0XD003

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KANAL | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Kanalnummer |

### RES_0XD008

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREE_SPACE_FLASHSPEICHER_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Flashspeicher in % |
| STAT_FREE_SPACE_FLASHSPEICHER_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Flashspeicher in Mbytes |
| STAT_FREE_SPACE_PARTITION1_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 1 in Prozent |
| STAT_FREE_SPACE_PARTITION1_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 1 in MBytes |
| STAT_FREE_SPACE_PARTITION2_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 2 in Prozent |
| STAT_FREE_SPACE_PARTITION2_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 2 in MBytes |
| STAT_FREE_SPACE_PARTITION3_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 3 in Prozent |
| STAT_FREE_SPACE_PARTITION3_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 3 in MBytes |
| STAT_FREE_SPACE_PARTITION4_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 4 in Prozent |
| STAT_FREE_SPACE_PARTITION4_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 4 in MBytes |
| STAT_FREE_SPACE_PARTITION5_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 5 in Prozent |
| STAT_FREE_SPACE_PARTITION5_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 5 in MBytes |
| STAT_FREE_SPACE_PARTITION6_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 6 in Prozent |
| STAT_FREE_SPACE_PARTITION6_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 6 in MBytes |
| STAT_FREE_SPACE_PARTITION7_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 7 in Prozent |
| STAT_FREE_SPACE_PARTITION7_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 7 in MBytes |
| STAT_FREE_SPACE_PARTITION8_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 8 in Prozent |
| STAT_FREE_SPACE_PARTITION8_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 8 in MBytes |
| STAT_FREE_SPACE_PARTITION9_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 9 in Prozent |
| STAT_FREE_SPACE_PARTITION9_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 9 in MBytes |
| STAT_FREE_SPACE_PARTITION10_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 10 in Prozent |
| STAT_FREE_SPACE_PARTITION10_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 10 in MBytes |
| STAT_FREE_SPACE_PARTITION11_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 11 in Prozent |
| STAT_FREE_SPACE_PARTITION11_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 11 in MBytes |
| STAT_FREE_SPACE_PARTITION12_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 12 in Prozent |
| STAT_FREE_SPACE_PARTITION12_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 12 in MBytes |
| STAT_FREE_SPACE_PARTITION13_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 13 in Prozent |
| STAT_FREE_SPACE_PARTITION13_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 13 in MBytes |
| STAT_FREE_SPACE_PARTITION14_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 14 in Prozent |
| STAT_FREE_SPACE_PARTITION14_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 14 in MBytes |
| STAT_FREE_SPACE_PARTITION15_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 15 in Prozent |
| STAT_FREE_SPACE_PARTITION15_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 15 in MBytes |
| STAT_FREE_SPACE_PARTITION16_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 16 in Prozent |
| STAT_FREE_SPACE_PARTITION16_MBYTE_WERT | MByte | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Speicherplatz Partition 16 in MBytes |

### RES_0XD00A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MEMORYSPACE_FLASH_KBYTE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_FREE_MEMORYSPACE_FLASH_KBYTE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_FREE_MEMORYSPACE_FLASH_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_MEMORYSPACE_RAM_KBYTE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_FREE_MEMORYSPACE_RAM_KBYTE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_FREE_MEMORYSPACE_RAM_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0XD00C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAUTE_LAUFWERKE | 0-n | - | unsigned int | - | TLaufwerk | - | - | - | Liest aus, welche Laufwerke verbaut sind. |
| STAT_VENDORID_TAPE_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_TAPE_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_TAPE_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_CD_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_CD_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_CD_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_DVD_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_DVD_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_DVD_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_MD_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_MD_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_MD_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_HDD_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_HDD_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_HDD_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_USB_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_USB_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_USB_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_FLASHSPEICHER_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_FLASHSPEICHER_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_FLASHSPEICHER_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |

### RES_0XD00D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREQUENZ_WERT | kHz | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die derzeit eingestellte Frequenz im Bereich 150 - 108000 [kHz] |

### RES_0XD00E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TP | 0-n | - | unsigned char | - | TTp | 1.0 | 1.0 | 0.0 | Gibt den Status der TP Funktion als Integer wieder. |
| STAT_AF | 0-n | - | unsigned char | - | TAf | 1.0 | 1.0 | 0.0 | Gibt den Status der AF Funktion als Integer wieder. |
| STAT_RDS | 0-n | - | unsigned char | - | TRds | 1.0 | 1.0 | 0.0 | Gibt den Status der RDS Funktion als Integer wieder. |

### RES_0XD010

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUALITY_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Werte zwischen 0..15 Dies ist der für AF-Tracking verwendete Wert, wobei 15 bester Qualität entspricht. |
| STAT_FIELDSTRENGTH_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Werte zwischen 0..15 Dies entspricht 0..60 dBµV in Schritten von 4dB. |
| STAT_ANT_PW | 0-n | - | unsigned char | - | TRadOnLead | 1.0 | 1.0 | 0.0 | gibt den Status der Antennenstromversorgung wieder. |
| STAT_FIELDSTRENGTH_EXACT_WERT | dBµV | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Werte zwischen 0..60 Dies entspricht 0..60 dBµV in Schritten von 1dB. Rückgabe von 255, wenn keine Messung möglich. |
| STAT_FREQUENZ_WERT | kHz | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die derzeit eingestellte Frequenz im Bereich 150 - 108000 [kHz] |

### RES_0XD011

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TMC | 0-n | - | unsigned char | - | TTmcActivationState | 1.0 | 1.0 | 0.0 | Status des TMC |

### RES_0XD014

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEMUTE_SOURCE1 | 0-n | - | unsigned char | - | TSourceDemuteStatus | 1.0 | 1.0 | 0.0 | Gibt den eingestellten Mute-Modus zurück: Für Source1 sind nur die Werte 0-3 gültig. |
| STAT_DEMUTE_SOURCE2 | 0-n | - | unsigned char | - | TSourceDemuteStatus | 1.0 | 1.0 | 0.0 | Gibt den eingestellten Mute-Modus zurück: Für Source2 sind nur die Werte 4-5 gültig. Bei Headunits wird hier 255 zurückgeliefert. |

### RES_0XD016

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FB_TASTE_NO | 0-n | - | unsigned char | - | TFbTasteNummer | 1.0 | 1.0 | 0.0 | gibt die Nummer der ersten berührten oder gedrückten Taste wieder.  0xFF wird zurückgeliefert, wenn keine Taste gedrückt ist. |
| STAT_FB_TASTE | 0-n | - | unsigned char | - | TFbTasteStatus | 1.0 | 1.0 | 0.0 | gibt den Status der zurückgelieferten Taste wieder. |

### RES_0XD01A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT_GERAETEADRESSE_WERT | - | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | Liefert die Adresse des Bluetooth Gerätes |

### RES_0XD01C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT_GERAETENAME_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Liest den Bluetooth Gerätenamen |

### RES_0XD01D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT_ADR_DEV_1_WERT | - | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | Geräteadresse von Gerät 1 |
| STAT_BT_ADR_DEV_2_WERT | - | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | Geräteadresse von Gerät 2 |
| STAT_BT_ADR_DEV_3_WERT | - | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | Geräteadresse von Gerät 3 |
| STAT_BT_ADR_DEV_4_WERT | - | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | Geräteadresse von Gerät 4 |

### RES_0XD020

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LOGISTIC_NR_WERT | - | - | string[7] | - | - | 1.0 | 1.0 | 0.0 | Auslesen der Logistik-Nummer. ACHTUNG: RESULT wird von _WERT auf _TEXT gewandelt! |

### RES_0XD021

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_APPL_1 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_1 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_1 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_2 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | Ausgabe für jede Applikation X: Name aus der Tabelle TApplication. |
| STAT_APPL_ENABLED_2 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_2 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_3 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_3 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_3 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_4 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_4 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_4 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_5 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_5 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_5 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | vgibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_6 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_6 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_6 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_7 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_7 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_7 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_8 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_8 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_8 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_9 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_9 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_9 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_10 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_10 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_10 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_11 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_11 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_11 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_12 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_12 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_12 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_13 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_13 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_13 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_14 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_14 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_14 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_15 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_15 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_15 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_16 | 0-n | - | unsigned char | - | TApplication | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_16 | 0-n | - | unsigned char | - | TApplicationRunningStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_16 | 0-n | - | unsigned char | - | TApplicationActivationStatus | 1.0 | 1.0 | 0.0 | gibt für jede Applikation X wieder, ob sie aktiviert ist. |

### RES_0XD026

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_FOT_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des Fibre Optical Transceivers (FOT). Bereich: -127,&,127 |
| STAT_TEMP_ENDSTU_WERT | °C | - | int | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur der Endstufe. Bereich: -32767,&, 32767 |
| STAT_TEMP_GYRO_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des Gyro. Bereich: -127,&,127 |
| STAT_TEMP_MOD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des Moduls (normalerweise prozessornah). Bereich: -127,&,127 |
| STAT_TEMP_HDD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des HDD-Laufwerks. Bereich: -127,&,127 |
| STAT_TEMP_DVD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des DVD-Laufwerks. Bereich: -127,&,127 |

### RES_0XD028

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADON | 0-n | - | unsigned char | - | TRadOnLead | 1.0 | 1.0 | 0.0 | Status des Ausgangssignals RADON |

### RES_0XD02C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISC_IDENT_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Disk Identifier für das beinhaltete Medium. ACHTUNG: RÜCKGABE wird von _WERT zu _TEXT! |
| STAT_DIGITAL_PLAYBACK_QUALITY_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualität der digitalen Aufnahme: Bereich: 0-15 0-1: Medium nicht lesbar (drive not ok) 2-8: Verzerrung / Stumm Stellen hörbar (drive not ok) 9-14: Medium lesbar, keine Verzerrung hörbar (drive ok) 15: Medium Qualität 100%, z.B. BLER 0 (drive ok) |

### RES_0XD02D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREQUENZ_DAB_WERT | - | - | string[3] | - | - | 1.0 | 1.0 | 0.0 | Momentane DAB Frequenz. |

### RES_0XD02F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NR_SDARS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | SDARS Telefonnummer |

### RES_0XD030

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WHEEL1_SENSOR_SPEED_WERT | km/h | - | int | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Rad 1 |
| STAT_WHEEL2_SENSOR_SPEED_WERT | km/h | - | int | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Rad 2 |
| STAT_WHEEL3_SENSOR_SPEED_WERT | km/h | - | int | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Rad 3 |
| STAT_WHEEL4_SENSOR_SPEED_WERT | km/h | - | int | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Rad 4 |
| STAT_COMBINED_SENSOR_SPEED_WERT | km/h | - | int | - | - | 1.0 | 1.0 | 0.0 | Kombinierte Geschwindigkeit der Radsensoren |
| STAT_GPS_SPEED_WERT | km/h | - | int | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit basierend auf das GPS-Signal. |
| STAT_SPEED_DIFFERENCE_PERCENT_WERT | % | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abweichung in Prozent zwischen den Geschwindigkeiten, die mit den Radsensoren bzw. mittels GPS erfasst wurden |

### RES_0XD031

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIRECTION | 0-n | - | unsigned char | - | TGearType | 1.0 | 1.0 | 0.0 | aktuelle Gangstellung siehe TGearType |
| STAT_DIRECTION_SOURCE | 0-n | - | unsigned char | - | TDirectionSource | 1.0 | 1.0 | 0.0 | siehe Tabelle TDirectionSource |

### RES_0XD034

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUMBER_VISIBLE_SATS_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der theoretisch erreichbaren Satelliten |
| STAT_NUMBER_TRACKED_SATS_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der aufgespuerten Satelliten |
| STAT_SAT_1_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_1_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_1_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_1_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_1_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_1_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_2_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_2_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_2_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_2_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_2_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_2_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_3_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_3_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_3_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_3_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_3_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_3_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_4_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_4_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_4_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_4_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_4_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_4_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_5_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_5_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_5_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_5_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_5_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_5_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_6_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_6_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_6_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_6_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_6_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_6_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_7_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_7_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_7_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_7_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_7_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_7_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_8_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_8_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_8_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_8_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_8_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_8_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_9_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_9_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_9_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_9_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_9_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_9_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_10_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_10_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_10_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_10_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_10_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_10_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_11_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_11_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_11_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_11_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_11_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_11_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_12_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_12_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_12_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_12_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_12_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_12_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_13_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_13_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_13_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_13_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_13_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_13_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_14_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_14_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_14_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_14_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_14_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_14_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_15_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_15_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_15_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_15_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_15_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_15_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_16_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_16_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_16_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_16_AZIMUTH_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_16_ELEVATION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_16_EPHEMERIS_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |

### RES_0XD03A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INTERNAL_GYRO_STATUS | 0-n | - | unsigned char | - | TInternalGyroStatus | 1.0 | 1.0 | 0.0 | - |
| STAT_GYRO_VOLTAGE_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Liest die Spannung des Gyro |

### RES_0XD03F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HMI_VERSION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle HMI Version als String wie im Entwicklermenü angezeigt |
| STAT_SVS_VERSION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle SVS Version als String wie im Entwicklermenü angezeigt |
| STAT_TEXT_VERSION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle TEXT Version als String wie im Entwicklermenü angezeigt |

### RES_0XD043

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FOLLOWING_DAB_FM | 0-n | - | unsigned char | - | TFollowingDabFm | 1.0 | 1.0 | 0.0 | Gibt den Status der DAB FM Following Funktion als Integer wieder. |
| STAT_FOLLOWING_DAB_DAB | 0-n | - | unsigned char | - | TFollowingDabDab | 1.0 | 1.0 | 0.0 | Gibt den Status der DAB DAB Following Funktion als Integer wieder. |
| STAT_TP_DAB | 0-n | - | unsigned char | - | TTpDab | 1.0 | 1.0 | 0.0 | Gibt den Status der DAB TP Funktion als Integer wieder. |

### RES_0XD044

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKTIVE_ANTENNE_DAB | 0-n | - | unsigned char | - | TAktiveAntenneDAB | 1.0 | 1.0 | 0.0 | Antenna that is currently active as integer |

### RES_0XD057

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_USB_HUB_TEST_PORT_1 | 0-n | - | unsigned char | - | THubConnectionState | 1.0 | 1.0 | 0.0 | Status HUB Verbindung Port 1 |
| STAT_USB_HUB_TEST_PORT_2 | 0-n | - | unsigned char | - | THubConnectionState | 1.0 | 1.0 | 0.0 | Status HUB Verbindung Port 2 |

### RES_0XD05D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_COMP_RECEPTION | 0-n | - | unsigned char | - | TSdarsSignalQuality | 1.0 | 1.0 | 0.0 | - |
| STAT_SDARS_SAT_RECEPTION | 0-n | - | unsigned char | - | TSdarsSignalQuality | 1.0 | 1.0 | 0.0 | - |
| STAT_SDARS_TER_RECEPTION | 0-n | - | unsigned char | - | TSdarsSignalQuality | 1.0 | 1.0 | 0.0 | - |
| STAT_SDARS_GLOBAL_STATUS | 0-n | - | unsigned char | - | TSdarsSignalQualityGlobalStatus | 1.0 | 1.0 | 0.0 | - |

### RES_0XD05E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FIRMWARE_SECURITY_PROCESSOR_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | ACHTUNG: Rückgaberesult ist nicht _WERT sondern _TEXT |
| STAT_FIRMWARE_AUDIO_PROCESSOR_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | ACHTUNG: Rückgaberesult ist nicht _WERT sondern _TEXT |
| STAT_BASEBAND_IC_VERSION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | ACHTUNG: Rückgaberesult ist nicht _WERT sondern _TEXT |
| STAT_MODULE_UC_SOFTWARE_VERSION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | ACHTUNG: Rückgaberesult ist nicht _WERT sondern _TEXT |
| STAT_FIRMWARE_PRODUCT_ID_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | ACHTUNG: Rückgaberesult ist nicht _WERT sondern _TEXT |
| STAT_FIRMWARE_DATE_CODE_VERSION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | ACHTUNG: Rückgaberesult ist nicht _WERT sondern _TEXT |
| STAT_FIRMWARE_TIME_CODE_VERSION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | ACHTUNG: Rückgaberesult ist nicht _WERT sondern _TEXT |
| STAT_GCI_VERSION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | ACHTUNG: Rückgaberesult ist nicht _WERT sondern _TEXT |
| STAT_DATA_SERVICES_PROGRAM_GUIDE_VERSION_WERT | - | - | string | - | - | 1.0 | 1.0 | 0.0 | ACHTUNG: Rückgaberesult ist nicht _WERT sondern _TEXT |

### RES_0XD05F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_CHANNEL_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktueller SDARS_KANAL |
| STAT_SDARS_CHANNEL_TUNE_SUCCESS | 0-n | - | unsigned char | - | TSdarsChannelTuneSuccess | 1.0 | 1.0 | 0.0 | Status des Tunens. |

### RES_0XD060

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_TUNER_MODE | 0-n | - | unsigned char | - | TSdarsTunerMode | 1.0 | 1.0 | 0.0 | - |

### RES_0XD061

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_BER_MODE | 0-n | - | unsigned char | - | TSdarsBerMode | 1.0 | 1.0 | 0.0 | - |

### RES_0XD063

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INTERNAL_ACCELERATION_SENSOR_NR | 0-n | - | unsigned char | - | TInternalAccelerationSensorStatus | 1.0 | 1.0 | 0.0 | Returns if the internal acceleration sensor is working on the basis of the voltage value. |
| STAT_ACCELERATION_SENSOR_VOLTAGE_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Acceleration sensor voltage expressed in mV |

### RES_0XD065

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTE_DOWNLOAD | 0-n | - | unsigned char | - | TRouteDownload | 1.0 | 1.0 | 0.0 | Status Route download |
| STAT_PERCENT_COMPLETE_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fertigstellung Route Download in Prozent |
| STAT_AVAILABLE_DATASETS_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl verfügbarer Datensätze |

### RES_0XD066

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POI_DOWNLOAD | 0-n | - | unsigned char | - | TPoiDownload | 1.0 | 1.0 | 0.0 | Status POI Download |
| STAT_PERCENT_COMPLETE_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fertigstellung POI Download in Prozent |
| STAT_AVAILABLE_DATASETS_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl verfügbarer Datensätze |

### RES_0XD07C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KARTENUPDATE | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Kartenupdate mit USB ab 10 km/h möglich 1 = Kartenupdate im Stillstand mit USB möglich |

### RES_0XD5CF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISPLAY_AKTIVIERUNG | 0-n | - | unsigned char | - | TStatusDisplayActivationMode | 1.0 | 1.0 | 0.0 | Display-Aktivierung [uint8, 0x0..0xF]  (Signal ENB_DISP von Head Unit) |
| STAT_OFFSET_HELLIGKEIT_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Offset Helligkeit [sint8, -127..+127 = -100..+100%, 128 = Ungültig, Fehlerwert]  (Signal OFFS_BRIG_FRT von Head Unit) |
| STAT_DIMMRAD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dimmrad-Stellung [uint8, 0..254 = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal CTR_ILUM_SW) |
| STAT_HELLIGKEIT_KOMBI_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Helligkeitswert I-Kombi-Helligkeits-Sensor [uint8, 0..254  = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal DSTN_LCD_LUM) |
| STAT_DAEMPFUNG_LCD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dämpfung LCD Leuchtdichte [uint8, 0..240 = schnell..langsam, 241..254 = sprunghaft, 255 = FF = Ungültig, Fehlerwert], Geschwindigkeit der Helligkeitsregelung. (Signal DMPNG_LCD_LUM) |

### RES_0XD5D4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_LOCATION_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_PART_NR_WERT | - | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | BMW Teilenummer |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_KLANGZEICHEN | 0xA000 | - | Steuert eine Tonart an (Klingel,Gong) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA000 | - |
| SINUSGENERATOR | 0xA001 | - | Gibt einen Sinuston auf einen oder mehrere Kanäle aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA001 | - |
| STEUERN_VOLUMEAUDIO_DEFAULT | 0xA002 | - | Zurücksetzen aller Lautstärkewerte auf Default-Werte | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_PDC_SIGNAL | 0xA003 | - | Simulates the tone that is hearable at a definite distance to an obstacle. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA003 | - |
| STEUERN_LINEAR | 0xA004 | - | Zurücksetzen der Fader und Lautstärke auf Default-Werte | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_EJECT | 0xA006 | - | Steuern des Auswurfs der Medien aus den Laufwerken. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA006 | - |
| STEUERN_EMERGENCY_EJECT | 0xA007 | - | Notauswurf | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA007 | - |
| WAVEBAND | 0xA008 | - | Auswählen bzw. Abfragen der Fequenzbänder | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA008 | RES_0xA008 |
| STEUERN_TUNER_SUCHLAUF | 0xA009 | - | Startet den Stationssuchlauf ab dem ausgewählten Bandbereich | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA009 | - |
| FIND_BEST_STATION | 0xA00A | - | Returns the status of the searching process and the information data of the best station if the searching process has been ended successfully. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA00A |
| NEXT_ENTSOURCE | 0xA00B | - | Steuerung Entertainmentquellen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA00B | RES_0xA00B |
| NAVI_SIMULATION | 0xA00E | - | Aktiviert oder deaktiviert die Navi Simulation. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA00E | RES_0xA00E |
| STEUERN_CLEAR_CKMDATA | 0xA012 | - | Löscht die CKM Daten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA012 | - |
| STEUERN_COPY_CKMDATA | 0xA013 | - | Kopiert CKM Daten von einem auf andere Schlüssel | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA013 | - |
| ANT_EIGEN_DIAG | 0xA016 | - | Es wird die Eigendiagnose der Diversity durchgeführt und auf die erste FM-Antenne geschaltet. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA016 |
| STEUERN_ANT_SCAN | 0xA017 | - | Schaltet auf die nächste Antenne bzw. beendet den Diversity-Diagnosemodus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA017 | - |
| TEST_ANTENNE | 0xA018 | - | Startet und bewertet die Prüfung für eine oder mehrere Antennen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA018 | RES_0xA018 |
| TEST_AUXVERBINDUNG | 0xA019 | - | Testet, ob die Aux-Anschlüsse verbaut sind. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA019 | RES_0xA019 |
| SIGNALAUSGABE | 0xA01A | - | Steuert die Videosignalausgabe eines Steuergerätes (Videoquelle). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01A | - |
| VIDEOVERBINDUNG | 0xA01C | - | Steuern, Stoppen und Abfragen einer Videoverbindung . | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01C | RES_0xA01C |
| TEST_VIDEOEINGANG | 0xA01D | - | Testet die Videoeingänge durch Analyse der dort anliegenden Signale | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01D | RES_0xA01D |
| TEST_VERBAU | 0xA01E | - | Startet die Verbauprüfung der externen Anschlüsse. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01E | RES_0xA01E |
| LAUTSPRECHER_IMPEDANZMESSUNG | 0xA021 | - | Impedanzmessung (AC-Messung) auf einem oder mehreren Kanälen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA021 | RES_0xA021 |
| SELBSTTEST | 0xA022 | - | Selbsttests des Steuergerätes Sie sollen einen evtl. notwendigen Tausch von Software/Hardware erkennen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA022 | RES_0xA022 |
| STEUERN_INTERNAL_RESET | 0xA023 | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 31 | - | - |
| MENU | 0xA024 | - | Einstellen eines MMI Menüs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA024 | RES_0xA024 |
| LANGUAGE | 0xA025 | - | Liest und setzt die aktuelle MMI Sprache. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA025 | RES_0xA025 |
| STEUERN_NAVI_SPEECH | 0xA027 | - | Testet die Sprachausgabe des Navi | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA027 | - |
| ETHERNET_CONNECTION_STATE | 0xA029 | - | Steuerung der Aktivierung der Ethernet-Verbindungen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA029 | RES_0xA029 |
| STEUERN_CODIERUNG_MASTER_BEREICH | 0xA02A | - | Copy the content of the coding working domain into the very secured coding master domain. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_CODIERUNG_REFERENZ_CRC | 0xA02B | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_USB_STACK_INFO_FOR_DEVICE | 0xA02E | - | - | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA02E | RES_0xA02E |
| STEUERN_VOLUMEAUDIO | 0xA036 | - | Verstellt die ausgewählte Lautstärke | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA036 | - |
| STEUERN_TRACK_NUMBER | 0xA037 | - | Wählt die CD/DVD-Tracknummer die abgespielt werden soll. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA037 | - |
| STATUS_VOLUMEAUDIO | 0xA039 | - | Liest die ausgewählte Lautstärke aus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA039 | RES_0xA039 |
| NAVI_MAP | 0xA03A | - | Ermöglicht die Kunden Navigation Karte zu deaktivieren oder zu löschen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03A | RES_0xA03A |
| STEUERN_RESCUE_MODE | 0xA03B | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LUEFTER | 0xA03C | - | Steuerung und Status des Lüfters. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03C | RES_0xA03C |
| SDARS_FACTORY_DEFAULTS | 0xA03D | - | Sets factory defaults for SDARS | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA03D |
| SDARS_GENERATOR_FREQUENCY | 0xA03E | - | Einstellen eines Sinustons. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03E | RES_0xA03E |
| FIND_BEST_STATION_DAB | 0xA03F | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA03F |
| FIND_BEST_TMC_STATION | 0xA045 | - | Aufruf startet die Suche nach den besten TMC-Sender | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA045 |
| FIND_BEST_TMC_STATION_DAB | 0xA047 | - | Aufruf startet die Suche nach den besten TMC-Sender | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA047 |
| BT | 0xA048 | - | aktiviert/dekativiert Bluetooth | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA048 | RES_0xA048 |
| BT_ERKENNUNGSMODUS | 0xA049 | - | Steuerung Bluetooth Erkennungsmodus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA049 | RES_0xA049 |
| STEUERN_BT_DELETE_ALL_PHONE_ID | 0xA04B | - | Löschen angekoppelter Bluetooth Devices | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_RESET_TO_BASIC_STATE | 0xA04C | - | Löschen persönlicher Informationen Auswahl gemäß Tabelle TCMedia_Reset ACHTUNG: Manche Daten werden erst mit dem nächsten Reset vollständig entfernt! Erst dann ist die HMI wieder konsistent! | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA04C | RES_0xA04C |
| FORMAT_FLASHSPEICHER | 0xA062 | - | Formatiert eine oder alle Partition(en) des Flashspeichers. Gibt den Status des Formatierungs-Prozesses zurück. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA062 | RES_0xA062 |
| PARTITION_FLASHSPEICHER | 0xA063 | - | Erzeugt die Partitions-Tabelle des Flashspeichers. Gibt den Status der Partionen des Flashspeichers zurück | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA063 | RES_0xA063 |
| USB_TEST_TEL | 0xA06A | - | Überprüfen der Telefon-USB-Verbindung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA06A | RES_0xA06A |
| SDARS_ACTIVATION | 0xA0AA | - | Schaltet das SDARS Modul ein und aus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0AA | RES_0xA0AA |
| STATUS_LESEN_SYSTEMAUDIO | 0xD002 | STAT_AUDIO_SYSTEM | bezeichnet das Lautsprechersystem | 0-n | - | - | unsigned char | TAudioSystem | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUDIOKANAELE | 0xD003 | - | Verstellt und liest den aktuell eingestellten Lautsprecherkanal. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD003 | RES_0xD003 |
| STATUS_INITIALISIERUNG | 0xD004 | STAT_INITIALISIERUNG | - | 0-n | - | - | unsigned char | TInitialisierung | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SDARS_ESN | 0xD005 | STAT_SDARS_ESN_WERT | die 12stellige ESN, z.B. AB1234V12345. ACHTUNG: _WERT wird in _TEXT gewandelt! | - | - | - | string[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_DRIVE_FLASHSPEICHER | 0xD008 | - | Liest aktuelle Werte des Flashspeicher-Laufwerks aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD008 |
| STATUS_MEMORY_USAGE | 0xD00A | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD00A |
| STATUS_LESEN_LAUFWERK | 0xD00C | - | Liest aus, welche Laufwerke verbaut sind. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD00C |
| FREQUENZ | 0xD00D | - | Stellt die entsprechende Frequenz des Radios ein bzw. liest sie aus. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD00D | RES_0xD00D |
| RDS | 0xD00E | - | Aktiviert/Deaktiviert TP und RDS Funktionen des analogen Teils des Tuners. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD00E | RES_0xD00E |
| STATUS_ANT_QFS | 0xD010 | - | Messen der Feldstärke, die aktuell am Tuner anliegt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD010 |
| TMC | 0xD011 | - | Steuern/Status des TMC. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD011 | RES_0xD011 |
| STATUS_SGBMID_NAVIMAP | 0xD012 | STAT_SGBMID_WERT | String with format: pk.idididid.hv.uv.pv out of the following return stream:  Byte0 Prozessklasse Byte1 ID_#0 (MSB) *4  Byte2 ID_#1 Byte3 ID_#2 Byte4 ID_#3 (LSB) Byte5 Hauptversion Byte6 Unterversion Byte7 Patch version | - | - | - | data[8] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_TASTE | 0xD013 | STAT_TASTE | gibt wieder, welche Taste gedrückt wurde. | 0-n | - | - | unsigned char | TTaste | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DEMUTE | 0xD014 | - | Steuert und liest die Mute-Funktion aus | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD014 | RES_0xD014 |
| STATUS_DREHKNOPF | 0xD015 | STAT_DREHPOSITION_WERT | Gibt die Position des Drehknopfes bezüglich der Position nach dem letzen Aufstarten des Steuergerätes wieder. | - | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_FB_TASTE | 0xD016 | - | Test der Functional Bookmarks. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD016 |
| SER_NR_DOM_LESEN | 0xD019 | STAT_SER_NR_DOM_WERT | ACHTUNG: _WERT wird in _TEXT gewandelt! | - | - | - | string[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BT_GERAETEADRESSE | 0xD01A | - | Steuert die Bluetooth Geräteadresse | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD01A | RES_0xD01A |
| BT_GERAETENAME | 0xD01C | - | Schreibt/Liest den Bluetooth Gerätenamen | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD01C | RES_0xD01C |
| STATUS_BT_GEKOPPELTE_GERAETE_LESEN | 0xD01D | - | Liest die Geräte-Adresse der letzten vier gekoppelten Bluetooth Geräte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD01D |
| LOGISTIC_NR | 0xD020 | - | Schreibt und liest die Logistik Nummer der Auslieferungsvariante. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD020 | RES_0xD020 |
| STATUS_APPLICATION | 0xD021 | - | Abfrage des Status aller freischaltbaren Applikationen, z.B. Navigation. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD021 |
| STATUS_ANALOG_TEMPERATUR | 0xD026 | - | Abfrage der Temperaturen des Steuergerätes. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD026 |
| STATUS_TEL_MUTE | 0xD027 | STAT_TEL_MUTE | gibt den Status des Telefonmute wieder. | 0-n | - | - | unsigned char | TTelMute | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RADON | 0xD028 | - | Ein- oder Ausschalten bzw. Abfragen des Radon-Signals. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD028 | RES_0xD028 |
| STATUS_ANT_DC | 0xD02B | STAT_ANT_DC | liefert das Ergebnis der Antennenüberwachung. | 0-n | - | - | unsigned char | TTunerRi | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_CD_MD_CDC | 0xD02C | - | Liest den Identifier des Mediums und das Qualitätslevel der digitalen Aufnahme aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD02C |
| FREQUENZ_DAB | 0xD02D | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD02D | RES_0xD02D |
| TELEFONNUMMER_SDARS | 0xD02F | - | SDARS Telefonnummer auslesen bzw. schreiben | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD02F | RES_0xD02F |
| STATUS_SPEED | 0xD030 | - | Liest die die Geschwindigkeitssignale vom Bus und vom GPS Empänger. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD030 |
| STATUS_DIRECTION | 0xD031 | - | Ausgabe der aktuellen Gang-Position | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD031 |
| STATUS_GPS_SATINFO | 0xD034 | - | Auslesen der Charakteristik aller sichtbaren Satelliten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD034 |
| STATUS_GPS | 0xD038 | STAT_GPS | Liest den GPS Status. Siehe Tabelle TGpsStatus. | 0-n | - | - | unsigned char | TGpsStatus | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_GYRO | 0xD03A | - | Liest die Spannung des Gyro | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD03A |
| STATUS_GPS_RECEIVER_SW_VERSION | 0xD03B | STAT_GPS_RECEIVER_SW_VERSION_WERT | Auslesen der Software Versionsnummer des GPS Receivers. | - | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_MAPMATERIAL_VERSION | 0xD03C | STAT_MAPMATERIAL_VERSION_WERT | - | - | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_NAVI_CALIBRATION | 0xD03D | STAT_NAVI_CALIBRATION | Fragt ob das Navi kalibriert ist. Siehe Tabelle TNaviCalibration | 0-n | - | - | unsigned char | TNaviCalibration | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_EXT_GYROSIGNAL | 0xD03E | STAT_EXT_GYRO_SIGNAL | Fragt ob das Gyrosignal empfangen wird Siehe Tabelle TExtGyroSignal | 0-n | - | - | unsigned char | TExtGyroSignal | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_HMI_VERSION | 0xD03F | - | HMI Software Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD03F |
| AF_TP_DAB | 0xD043 | - | Aktiviert/Deaktiviert DAB Following- UND TP Funktionen. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD043 | RES_0xD043 |
| AKTIVE_ANTENNE_DAB | 0xD044 | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD044 | RES_0xD044 |
| STATUS_DRIVE_CD | 0xD052 | STAT_MEDIUM_INSERTED | bezeichnet den Status des Laufwerks-Lademechanismus. | 0-n | - | - | unsigned char | TInsertedMedium | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SIGNAL_DAB | 0xD053 | STAT_SIGNAL_DAB | - | 0-n | - | - | unsigned char | TSignalDab | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_USB_HUB_TEST | 0xD057 | - | Status USB HUB eingebaut | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD057 |
| STATUS_SDARS_SIGNAL_QUALITY | 0xD05D | - | Auslesen der Qualitaet der Signalwerte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD05D |
| STATUS_SDARS_FIRMWARE_VERSIONS | 0xD05E | - | liest Firmware Werte aus dem SDARS modul | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD05E |
| SDARS_CHANNEL | 0xD05F | - | liest und setzt den SDARS Kanal | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD05F | RES_0xD05F |
| SDARS_TUNER_MODE | 0xD060 | - | liest und setzt den Tuner Mode. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD060 | RES_0xD060 |
| SDARS_BER_MODE | 0xD061 | - | liest und setzt den Tuner BER Mode | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD061 | RES_0xD061 |
| STATUS_SDARS_BER | 0xD062 | STAT_SDARS_BER_WERT | Die aktuelle BER | - | - | - | float | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_INTERNAL_ACCELERATION_SENSOR | 0xD063 | - | Returns if the internal acceleration sensor is working on the basis of the voltage value. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD063 |
| STATUS_ROUTE_DOWNLOAD | 0xD065 | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD065 |
| STATUS_POI_DOWNLOAD | 0xD066 | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD066 |
| KARTENUPDATE_USB | 0xD07C | - | Update der Kartendaten für die Navigation über USB | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD07C | RES_0xD07C |
| STATUS_TDA_AKTIVIERUNG | 0xD091 | STAT_DIENSTE_AKTIVIERUNG | Status TDA BMW Dienste | 0-n | - | - | unsigned char | TAB_TDAActivationState | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_TESTBILD | 0xD5C1 | - | Ansteuerung der Testbild-Ausgabe vom CID. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C1 | - |
| CID_STEUERN | 0xD5C2 | - | Ein- und Ausschalten des CID per Diagnose. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C2 | - |
| CID_BACKLIGHT | 0xD5C4 | - | Ansteuerung der Hintergrundbeleuchtung des CIDs per Diagnose. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C4 | - |
| CID_STEUERN_ENDE | 0xD5C9 | - | Beendet alle Ansteuerungen im CID, die mit Diagnose  gestartet worden sind. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C9 | - |
| CID_PHOTOSENSOR | 0xD5CB | STAT_PHOTOSENSOR_CID_WERT | Analogwert Fototransistor im CID | lux | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_TEMP_BACKLIGHT | 0xD5CC | STAT_TEMP_BACKLIGHT_WERT | Temperatur Hintergrundbeleuchtung | °C | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_SOLLWERT | 0xD5CD | STAT_HELLIGKEIT_SOLL_WERT | Soll-Helligkeitswert vom Dimm-Modul | % | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_ISTWERT | 0xD5CE | STAT_HELLIGKEIT_IST_WERT | Ist-Helligkeitswert | % | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_EINGANGSWERTE_LESEN | 0xD5CF | - | Ausgabe der aktuellen Eingangswerte des CID. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5CF |
| CID_VERBINDUNG | 0xD5D0 | STAT_CID_VERBINDUNG | Status der CID-Verbindung: 0 = CID-Verbindung in Ordnung, Bild wird angezeigt 1 = Keine Aktivierung der Bildausgabe 2 = Anzeigegerät nicht anzeigebereit 3 = Keine Kommunikation mit Anzeigegerät 4 = Bilddaten ungültig 255 = Ungültigkeitswert (Default nach RESET) | 0-n | - | - | unsigned char | TAB_CID_VERBINDUNG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_DETAIL_INFORMATIONEN | 0xD5D4 | - | Logistikinformationen CID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5D4 |
| STATUS_SENSOR_WERTE | 0x400A | - | Returns all filtered internal sensor values | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400A |
| STEUERN__TESTBILD_ERWEITERT | 0x400B | - | Starts / stops displaying of test pictures. This service extends the diagnostic service ¿STEUERN_TESTBILD¿ by providing more test pictures. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400B | - |
| STEUERN_RGB_SCREEN | 0x400C | - | Starts and stops displaying test pictures. In contrast to the service STEUERN_TESTBILD_CID this job allows to set the desired colour of the test pic-ture by passing the RGB values. The CID returns into ¿Video Mode¿. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400C | - |
| TEMPERATUPROFIL | 0x400D | - | The temperature counter and the corresponding temperature thresholds | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x400D | RES_0x400D |
| STATUS_CID_SW_VERSION | 0x400E | - | Returns the current CID-SW version. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400E |
| STATUS_INTERNAL_STATES | 0x400F | - | Returns important internal state variables of the CID software bus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400F |
| CID_CODIERDATEN | 0x4010 | - | Overwrites / Reads CID coding data in RAM temporarily | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4010 | RES_0x4010 |
| STATUS_CID_DETAIL_INFORMATION_EXTENDED | 0x4011 | - | Returns the extended logistic information of the currently connected CID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4011 |

### TAB_CIDDISPLAYREADY

| WERT | TEXT |
| --- | --- |
| 0x00 | not ready |
| 0x01 | ready |
| 0xFF | not defined |

### TAB_CID_VERBINDUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | CID-Verbindung in Ordnung, Bild wird angezeigt |
| 0x01 | Keine Aktivierung der Bildausgabe |
| 0x02 | Anzeigegerät nicht anzeigebereit |
| 0x03 | Keine Kommunikation mit Anzeigegerät |
| 0x04 | Bilddaten ungültig |
| 0xFF | Ungültigkeitswert |

### TAB_ONOFF

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xFF | NICHT DEFINIERT |

### TAB_RECOVERY_STEPS

| WERT | TEXT |
| --- | --- |
| 0x00 | Restart Process |
| 0x01 | Restart Gesamtsystem |
| 0x02 | Löschen von KISU Updates |
| 0x03 | Reset zur letzten iStufe |
| 0x04 | Löschen der Persistenz |
| 0x05 | Aktivieren des  Sub-System Mode |

### TAB_RESET_REASON_DOP

| WERT | TEXT |
| --- | --- |
| 255 | keine Ursache fuer Reset bekannt |

### TAB_STATUSCIDSCHEDULEID

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDCOM_SCHEDULE_READ_FLASH |
| 0x01 | CIDCOM_SCHEDULE_SYNC |
| 0x02 | CIDCOM_SCHEDULE_CHECK_COM |
| 0x03 | CIDCOM_SCHEDULE_READ_SENSORS |
| 0x04 | CIDCOM_SCHEDULE_ON |

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

### TAB_TDAACTIVATIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x01 | Leerlauf, derzeit nicht aktiv |
| 0x02 | Aktivierung läuft |
| 0x03 | Aktivierung fehlgeschlagen |
| 0x04 | Aktivierung erfolgreich |
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

### TAB_TYPEUSBDEVICE

| WERT | TEXT |
| --- | --- |
| 0x01 | USB Stick |
| 0x02 | IPOD |
| 0x03 | MTP Player |
| 0x04 | UNKNOWN |
| 0xFF | nicht definiert |

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

### TAF

| WERT | TEXT |
| --- | --- |
| 0x00 | AF aus |
| 0x01 | AF ein |
| 0x02 | AF keine Änderung |
| 0xFF | Nicht definiert |

### TAKTIVEANTENNEDAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Antenne |
| 0x01 | L-Band Antenne |
| 0x02 | Band III Antenne |
| 0x03 | Beide Antennen |
| 0xFF | Nicht definiert |

### TANTSCAN

| WERT | TEXT |
| --- | --- |
| 0 | Diagnosemodus des Diversitymoduls beenden |
| 1 | Auf nächste FM Antenne schalten |
| 255 | Nicht definiert |

### TANTENNADIAG

| WERT | TEXT |
| --- | --- |
| 0x00 | Antennendiagnose IO |
| 0x01 | Antennendiagnose NIO |
| 0xFF | Nicht definiert |

### TANTENNE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Antennen |
| 0x00000001 | AM/FM Antenne (FM1/AM Phasendiversity) |
| 0x00000002 | GPS Antenne |
| 0x00000004 | DAB L-BAND Antenne |
| 0x00000008 | DAB BAND III Antenne |
| 0x00000010 | VICS FM Antenne |
| 0x00000020 | VICS Beacon Antenne |
| 0x00000040 | TV1 Antenne |
| 0x00000080 | TV2 Antenne |
| 0x00000100 | TV3 Antenne |
| 0x00000200 | SDARS Antenne |
| 0x00000400 | Bluetooth Antenne |
| 0x00000800 | FM2 Phasendiversity |
| 0x00001000 | WLAN Antenne |
| 0xFFFFFFFF | Nicht definiert |

### TANTENNEFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | AntennaDisconnectedFromAntennaAmplifier |
| 0x03 | Falscher Antennfuß oder Diversity |
| 0x04 | Antenne nicht gesteckt ( nur für BT- Antenne 12-07) |
| 0xFF | Nicht definiert |

### TAPPLICATION

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
| 0xFF | Nicht definiert |

### TAPPLICATIONACTIVATIONSTATUS

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

### TAPPLICATIONRUNNINGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Applikation nicht gestartet |
| 0x01 | Applikation gestartet |
| 0xFF | Nicht definiert |

### TAUDIOKANAL

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Kanäle |
| 0x00000001 | Links vorne (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000002 | Rechts vorne (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000004 | Center vorne (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000008 | Seite links (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000010 | Seite rechts (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000020 | Links hinten (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000040 | Rechts hinten (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000080 | Links vorne Bass (Erweiterter Kanal) |
| 0x00000100 | Rechts vorne Bass (Erweiterter Kanal) |
| 0x00000200 | Links hinten Bass (Erweiterter Kanal) |
| 0x00000400 | Rechts hinten Bass (Erweiterter Kanal) |
| 0x00000800 | Center hinten (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00001000 | Linker Kopfhörer links |
| 0x00002000 | Linker Kopfhörer rechts |
| 0x00004000 | Rechter Kopfhörer links |
| 0x00008000 | Rechter Kopfhörer rechts |
| 0x00010000 | Links vorne (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00020000 | Rechts vorne (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00040000 | Center vorne (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00080000 | Seite links (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00100000 | Seite rechts (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00200000 | Links hinten (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00400000 | Rechts hinten (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00800000 | Center hinten (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0xFFFFFFFF | Nicht definiert |

### TAUDIOSIGNAL

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
| 0x10 | nur für RSE: Entertainment Kopfhörer linke Seite |
| 0x20 | nur für RSE: Entertainment Kopfhörer rechte Seite |
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

### TAUSGANGVIDEOSWITCH

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein VideoSwitch vorhanden bzw. verwendet |
| 0x0001 | Ausgang 1 |
| 0x0002 | Ausgang 2 |
| 0x0004 | Ausgang 3 |
| 0x0008 | Ausgang 4 |
| 0x0010 | Ausgang 5 |
| 0x0020 | Ausgang 6 |
| 0x0040 | Ausgang 7 |
| 0x0080 | Ausgang 8 |
| 0x0100 | Ausgang 9 |
| 0xFFFF | Nicht definiert |

### TAUXVERBINDUNG

| WERT | TEXT |
| --- | --- |
| 69 | 69 |
| MMC, RFK, TV und Entertainmentserver | MMC, RFK, TV und Entertainmentserver |
| NiVi, RFK, TV und Entertainmentserver | NiVi, RFK, TV und Entertainmentserver |

### TBLUETOOTHDISCOVERYMODESTATUS

| WERT | TEXT |
| --- | --- |
| 0 | BT Erkennungsmodus aus |
| 1 | BT Erkennungsmodus ein |
| 0xFF | nicht definiert |

### TBLUETOOTHRESET

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | Fehler aufgetreten |
| 0x02 | nicht angefordert |
| 0x03 | läuft gerade |
| 0xFF | nicht definiert |

### TBLUETOOTHRESETBASICSTATE

| WERT | TEXT |
| --- | --- |
| 0x0000 | alle |
| 0x0001 | Liste_gekoppelte_Geräte |
| 0x0002 | EMail |
| 0x0004 | SMS |
| 0x0008 | Musiklists |
| 0x0010 | PIM |
| 0x0020 | XX (vorgehalten) |
| 0x0040 | Musiksammlung |
| 0x0080 | Musiksammlung administrative Datenbanken |

### TBLUETOOTHSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | Bluetooth nicht aktiviert |
| 1 | Bluetooth aktiviert |
| 0xFF | nicht definiert |

### TCIDONOFFACTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Off |
| 0x01 | On |
| 0xFF | not defined |

### TDEMUTESOURCE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht benutzt(Default in Headunit) |
| 0x01 | Kopfhörer links |
| 0x02 | Kopfhörer rechts |
| 0x03 | Beide Kopfhörer |
| 0xFF | Nicht definiert |

### TDEMUTESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Stummschaltung ein |
| 0x01 | Stummschaltung aus |
| 0xFF | Nicht definiert |

### TDIRECTIONSOURCE

| WERT | TEXT |
| --- | --- |
| 0x00 | Getriebe |
| 0xFF | nicht definiert |

### TEINGANGVIDEOSWITCH

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein VideoSwitch vorhanden bzw. verwendet |
| 0x0001 | Eingang 1 |
| 0x0002 | Eingang 2 |
| 0x0004 | Eingang 3 |
| 0x0008 | Eingang 4 |
| 0x0010 | Eingang 5 |
| 0x0020 | Eingang 6 |
| 0x0040 | Eingang 7 |
| 0x0080 | Eingang 8 |
| 0x0100 | Eingang 9 |
| 0xFFFF | Nicht definiert |

### TENTSOURCE

| WERT | TEXT |
| --- | --- |
| 0x00 | nächste |
| 0x01 | FM |
| 0x02 | AM |
| 0x03 | internes CD Laufwerk |
| 0x04 | CDC |
| 0x05 | internes MD Laufwerk |
| 0x06 | WB (Weatherband) |
| 0x07 | SDARS |
| 0x08 | unbenutzt (vorher IBOC) |
| 0x09 | AUX IN intern oder extern |
| 0x0A | internes DVD Laufwerk |
| 0x0B | TV |
| 0x0C | unbenutzt (vorher VIDEOTXT) |
| 0x0D | Reserviert für AV-AUX IN |
| 0x0E | DAB |
| 0x0F | TRF |
| 0x10 | RSE-DVD |
| 0x11 | RSE-AVIN-LEFT |
| 0x12 | RSE-AVIN-RIGHT |
| 0x13 | USB extern 1 (USB Audio der MULF2 High/ComBox) |
| 0x14 | USB extern 2 (USB Telefon der MULF2 High/ComBox) |
| 0x15 | RSE analog (Audio) |
| 0x16 | MMC |
| 0x17 | Mono analog IN |
| 0x18 | USB intern |
| 0x19 | Entertainment server |
| 0xFF | Entertainmentquelle nicht definiert |

### TENTSOURCESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Entertainmentquelle war nicht verfügbar |
| 0x01 | Entertainmentquelle war verfügbar |
| 0x02 | Entertainmentquelle wird gesucht |
| 0xFF | Nicht definiert |

### TETHERNETACTIVATIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Deaktiviert |
| 0x01 | Aktiviert |
| 0xFF | Nicht definiert |

### TETHERNETCONNECTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Alle |
| 0x01 | Ethernet Verbindung für den Flash-Prozess |
| 0x02 | Ethernet Verbindung Headunit zum RSE |
| 0x03 | Ethernet Verbindung Headunit zur Combox |
| 0x04 | Ethernet Verbindung RSE zur Combox |
| 0xFF | Nicht definiert |

### TEXTGYROSIGNAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Signal verfügbar |
| 0x01 | Signal nicht verfügbar |
| 0xFF | Nicht definiert |

### TFBASEINGANG

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Eingänge |
| 0x00000001 | FBAS-Eingang 1 |
| 0x00000002 | FBAS-Eingang 2 |
| 0x00000004 | FBAS-Eingang 3 |
| 0x00000008 | FBAS-Eingang 4 |
| 0x00000010 | FBAS-Eingang 5 |
| 0x00000020 | FBAS-Eingang 6 |
| 0x00000040 | FBAS-Eingang 7 |
| 0x00000080 | FBAS-Eingang 8 |
| 0x00000100 | FBAS-Eingang 9 |
| 0xFFFFFFFF | nicht definiert |

### TFBTASTENUMMER

| WERT | TEXT |
| --- | --- |
| 0x01 | FB-Taste 1 |
| 0x02 | FB-Taste 2 |
| 0x03 | FB-Taste 3 |
| 0x04 | FB-Taste 4 |
| 0x05 | FB-Taste 5 |
| 0x06 | FB-Taste 6 |
| 0x07 | FB-Taste 7 |
| 0x08 | FB-Taste 8 |
| 0xFF | Nicht definiert |

### TFBTASTESTATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | Taste berührt |
| 0x02 | Taste gedrückt |
| 0xFF | Nicht definiert |

### TFLASHMEMORYFORMATPARTITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Quick format |
| 0x01 | Full format |

### TFLASHMEMORYPARTITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Alle Partitionen |
| 0x01 | Partition 1 |
| 0x02 | Partition 2 |
| 0x03 | Partition 3 |
| 0x04 | Partition 4 |
| 0x05 | Partition 5 |
| 0x06 | Partition 6 |
| 0x07 | Partition 7 |
| 0x08 | Partition 8 |
| 0x09 | Partition 9 |
| 0x0A | Partition 10 |
| 0x0B | Partition 11 |
| 0x0C | Partition 12 |
| 0x0D | Partition 13 |
| 0x0E | Partition 14 |
| 0x0F | Partition 15 |
| 0xFF | nicht definiert |

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

### TFORMATTINGERRORFLASHMEMORY

| WERT | TEXT |
| --- | --- |
| 0x00 | muss noch definiert werden |

### TFORMATTINGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Formatierungsprozess nicht gestartet |
| 0x01 | Formatierungsprozess läuft |
| 0x02 | Formatierungsprozess beendet ohne Fehler |
| 0x03 | Formatierungsprozess beendet mit Fehler |
| 0xFF | Nicht definiert |

### TGEARTYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Rückwärts-Gang |
| 0x01 | Vorwärts-Gang |
| 0x02 | Leerlauf |
| 0xFF | Nicht definiert |

### TGPSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht unterstuetzt: Kein GPS |
| 0x01 | Nicht unterstuetzt: Kommunikationsfehler |
| 0x02 | Receiverfehler |
| 0x03 | Kein almanac |
| 0x04 | Suche Satelliten |
| 0x05 | Ortung Satellit 1 |
| 0x06 | Ortung Satellit 2 |
| 0x07 | Ortung Satellit 3 |
| 0x08 | Ortung Satellit 4 |
| 0x09 | Ortung Satellit 5 |
| 0x0A | Ortung Satellit 6 |
| 0x0B | 2D Position |
| 0x0C | 3D Position |
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

### THUBCONNECTIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | HUB angeschlossen |
| 0x01 | HUB nicht angeschlossen |
| 0x04 | HUB nicht codiert |
| 0xFF | nicht definiert |

### THWEINHEIT

| WERT | TEXT |
| --- | --- |
| 0xFF | Nicht definiert |

### THWLIEFERANT

| WERT | TEXT |
| --- | --- |
| 0x00 | Harman Becker |
| 0x01 | Continental |
| 0x02 | Visteon |
| 0x03 | Alpine |
| 0x04 | Lear |
| 0x05 | Fuba |
| 0x06 | Hirschmann Car Communication |
| 0x07 | Magneti Marelli |
| 0xFF | Nicht definiert |

### TINITIALISIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | IO initialisiert |
| 0xFF | NIO initialisiert |

### TINSERTEDMEDIUM

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Medium eingelegt |
| 0x01 | Medium Erkennung wird durchgeführt |
| 0x02 | CD Medium ist eingelegt |
| 0x03 | DVD Medium ist eingelegt |
| 0x04 | Flashspeicher Medium ist eingelegt |
| 0xFF | Nicht definiert |

### TINTERNALACCELERATIONSENSORSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Beschleunigungssensor OK |
| 0x01 | Beschleunigungssensor defekt |
| 0xFF | Nicht definiert |

### TINTERNALGYROSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Gyro OK |
| 0x01 | Gyro defekt |
| 0xFF | Nicht definiert |

### TKANALFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Außerhalb Toleranz |
| 0x04 | Kurzschluss Untereinander |
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

### TKLANGZEICHEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Stoppen des aktiven Klangzeichens |
| 0x01 | ACC |
| 0x02 | CCG |
| 0x03 | DG |
| 0x04 | no longer present (Hour-Signal) |
| 0x05 | IMG_ON |
| 0x06 | IMG_OFF |
| 0x07 | HMI_FBM |
| 0x08 | Reverse_Gear_ON |
| 0x09 | Reverse_Gear_OFF |
| 0x0A | no longer present (HMI_Press) |
| 0x0B | no longer present (HMI_Slope) |
| 0x0C | maybe no longer present (HMI_Snap) (End of Slope) |
| 0x0D | TLC_Left_ON |
| 0x0E | TLC_Right_ON |
| 0x0F | TLC_OFF |
| 0x10 | IBrake |
| 0x11 | maybe no longer present (PDC_Sample ) |
| 0x12 | ETC1 |
| 0x13 | ETC2 |
| 0x14 | ETC3 |
| 0xFF | Nicht definiert |

### TLANGUAGE

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
| 0x0F | Französisch CA |
| 0x10 | Spanisch_US |
| 0x11 | Portugisisch |
| 0x12 | Polnisch |
| 0x13 | Griechisch |
| 0x14 | Türkisch |
| 0x15 | Ungarisch |
| 0x16 | Rumänisch |
| 0x17 | Schwedisch |
| 0x18 | Portugisisch BR |
| 0x19 | Kantonesisch Traditionell |
| 0x1A | Kantonesisch Simple |
| 0x1B | Tschechisch |
| 0x1C | Slowenisch |
| 0x1D | Slowakisch |
| 0x1E | Dänisch |
| 0x1F | Finnisch |
| 0x20 | Norwegisch |
| 0xFF | Nicht definiert |

### TLAUFWERK

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein Laufwerk |
| 0x0001 | Kassette |
| 0x0002 | CD |
| 0x0004 | DVD |
| 0x0008 | MD |
| 0x0010 | HDD |
| 0x0012 | CD und HDD |
| 0x0014 | DVD und HDD |
| 0x0020 | USB |
| 0x0022 | CD und USB |
| 0x0024 | DVD und USB |
| 0x0032 | CD, HDD und USB |
| 0x0034 | DVD, HDD und USB |
| 0x0040 | Flash Speicher |
| 0x0042 | CD und Flash Speicher |
| 0x0044 | DVD und Flash Speicher |
| 0x0054 | DVD, HDD und Flash Speicher |
| 0x0062 | CD, USB und Flash Speicher |
| 0x0064 | DVD, USB und Flash Speicher |
| 0xFFFF | Nicht definiert |

### TLUEFTERSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Lüfter steht |
| 0x01 | Lüfter läuft, aber nicht mit der erwarteteten Drehzahl |
| 0x02 | Lüfter läuft mit der erwarteteten Drehzahl |
| 0xFE | Lüfter läuft mit unbekannter Drehzahl |
| 0xFF | Nicht definiert |

### TNAVICALIBRATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Positionierprozess kalibriert |
| 0x01 | Positionierprozess nicht kalibriert |
| 0xFF | Nicht definiert |

### TNAVILANGUAGE

| WERT | TEXT |
| --- | --- |
| 0x0001 | Ansage 1... |
| 0x0002 | Ansage 2... |
| 0x0003 | Ansage 3... |
| 0xFFFF | Nicht definiert |

### TNAVIMAPACTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Deaktiviere Kunden Navigation Karte |
| 0x01 | Lösche Kunden Navigation Karte |

### TNAVIMAPSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kunden Navigation Karte vorhanden und aktiviert |
| 0x01 | Kunden Navigation Karte deaktiviert |
| 0x02 | Kunden Navigation Karte nicht vorhanden oder gelöscht |
| 0x03 | Kunden Navigation Karte Deaktivieren läuft |
| 0x04 | Kunden Navigation Karte Löschen läuft |
| 0xFF | undefinierter Zustand |

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

### TPARTITIONINGERRORFLASHMEMORY

| WERT | TEXT |
| --- | --- |
| 0x00 | muss noch definiert werden |
| 0x01 | muss noch definiert werden |
| 0xFF | muss noch definiert werden |

### TPARTITIONINGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Partitionierung nicht gestartet |
| 0x01 | Partitionierung läuft |
| 0x02 | Partitionierung beendet ohne Fehler |
| 0x03 | Partitionierung beendet mit Fehler |
| 0xFF | Nicht definiert |

### TPDCSIGNAL

| WERT | TEXT |
| --- | --- |
| 0x01 | Vorderes Tonsignal |
| 0x02 | Hinteres Tonsignal |
| 0x03 | Aus |
| 0xFF | Nicht definiert |

### TPOIDOWNLOAD

| WERT | TEXT |
| --- | --- |
| 0x00 | POI Download nicht gestartet |
| 0x01 | POI Download läuft |
| 0x02 | POI Download ohne Fehler beendet |
| 0x03 | POI Download mit Fehler beendet |
| 0x04 | POI Download unterbrochen |
| 0xFF | nicht definiert |

### TRADONLEAD

| WERT | TEXT |
| --- | --- |
| 0x00 | aus |
| 0x01 | ein |
| 0xFF | Nicht definiert |

### TRDS

| WERT | TEXT |
| --- | --- |
| 0x00 | RDS aus |
| 0x01 | RDS ein |
| 0x02 | RDS keine Änderung |
| 0xFF | Nicht definiert |

### TROUTEDOWNLOAD

| WERT | TEXT |
| --- | --- |
| 0x00 | Route download nicht gestartet |
| 0x01 | Route download läuft |
| 0x02 | Route download beendet ohne Fehler |
| 0x03 | Route download beendet mit Fehler |
| 0x04 | Route download unterbrochen |
| 0xFF | nicht definiert |

### TSATELLITSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Erkennbar |
| 0x01 | Aufgestoebert |
| 0xFF | Nicht definiert |

### TSDARSBERMODE

| WERT | TEXT |
| --- | --- |
| 0 | unkorrigierter BER Modus |
| 1 | korrigierter BER Modus |
| 255 | nicht definiert |

### TSDARSCHANNELTUNESUCCESS

| WERT | TEXT |
| --- | --- |
| 0 | Kanaleinstellung erfolgreich |
| 1 | Kanal nicht aboniert |
| 2 | Kanal ungueltig |
| 3 | Kanaleinstellung läuft |
| 255 | nicht definiert |

### TSDARSFACTORYSUCCESSFUL

| WERT | TEXT |
| --- | --- |
| 0 | Wiederherstellung nicht gestartet |
| 2 | Wiederherstellung beendet ohne Fehler |
| 1 | Wiederherstellung läuft |
| 3 | Wiederherstellung konnte nicht beendet werden |
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

### TSDARSTUNERMODE

| WERT | TEXT |
| --- | --- |
| 0 | Broadcast Modus |
| 1 | Sinusgenerator Modus |
| 2 | BER Messung Modus |
| 255 | nicht definiert |

### TSEARCHINGPROCESS

| WERT | TEXT |
| --- | --- |
| 0x00 | Suche nicht gestartet |
| 0x01 | Suche läuft |
| 0x02 | Suche beendet und bester Sender gefunden |
| 0x03 | Suche beendet und kein bester Sender gefunden |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### TSELBSTTESTROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Routinen |
| 0xFFFFFFFF | Nicht definiert |

### TSIGNALART

| WERT | TEXT |
| --- | --- |
| 0x01 | Realbild |
| 0x02 | Testbild |
| 0x03 | Signal abschalten |
| 0x04 | Testbild mit Alive Counter (ACNT) |
| 0x05 | Testbild mit stehendem ACNT |
| 0x06 | Testbild mit leicht gestörtem ACNT |
| 0x07 | Testbild mit stark gestörtem ACNT |
| 0x08 | Testbild mit leicht springendem ACNT |
| 0x09 | Testbild mit stark springendem ACNT |

### TSIGNALDAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Signal |
| 0x01 | gueltiges Signal |
| 0xFF | Nicht definiert |

### TSOURCEDEMUTESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Head-Unit aus |
| 0x01 | Head-Unit ein |
| 0x02 | RSE Kopfhörer links aus |
| 0x03 | RSE Kopfhörer links ein |
| 0x04 | RSE Kopfhörer rechts aus |
| 0x05 | RSE Kopfhörer rechts ein |
| 0xFF | Nicht definiert |

### TSTATUSDISPLAYACTIVATIONMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | CID aus |
| 0x01 | CID an |
| 0xFF | nicht definiert |

### TTASTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Taste gedrückt |
| 0x01 | Auswurf CD |
| 0x02 | Auswurf DVD |
| 0x03 | Entertainment Knopf |
| 0x04 | Suchlauf abwärts - Skip links |
| 0x05 | Suchlauf aufwärts - Skip rechts |
| 0x10 | RSE Einschaltknopf links |
| 0x11 | RSE Einschaltknopf rechts |
| 0x12 | RSE Auswurf DVD |
| 0x13 | MIODE-Taste |
| 0xFF | Nicht definiert |

### TTELMUTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Tel-Mute nicht aktiv |
| 0x01 | Tel-Mute aktiv |
| 0xFF | Nicht definiert |

### TTESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### TTMCACTIVATIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht aktiviert |
| 0x01 | Aktiviert |
| 0xFF | Nicht definiert |

### TTP

| WERT | TEXT |
| --- | --- |
| 0x00 | TP aus |
| 0x01 | TP ein |
| 0x02 | TP keine Änderung |
| 0xFF | Nicht definiert |

### TTPDAB

| WERT | TEXT |
| --- | --- |
| 0 | TP DAB aus |
| 1 | TP DAB ein |
| 2 | TP DAB keine Änderung |
| 255 | Nicht definiert |

### TTUNERRI

| WERT | TEXT |
| --- | --- |
| 0x00 | Ri OK |
| 0x01 | Ri not OK |
| 0x02 | Kurzschluss nach Masse |
| 0x03 | Leitungsunterbrechung |
| 0xFF | Nicht definiert |

### TTUNERSUCHLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Absteigend |
| 0x01 | Aufsteigend |
| 0x02 | Stopp |
| 0xFF | Nicht definiert |

### TUNER_HW_COMMUNICATION_FAILURE_REASON

| WERT | TEXT |
| --- | --- |
| 0x01 | No communication to the tuner module possible |
| 0x02 | wrong firmware version |

### TUSBCONNECTIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht angeschlossen |
| 0x01 | angeschlossen |
| 0xFF | nicht definiert |

### TUSBINTERFACE

| WERT | TEXT |
| --- | --- |
| 0x00 | USB Interface |
| 0x01 | Snap In Adapter |
| 0xFF | nicht definiert |

### TUSBTESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Gerät angeschlossen |
| 0x01 | Gerät angeschlossen, Erkennung läuft |
| 0x02 | Gerät erkannt aber falsche ID |
| 0x03 | Gerät angeschlossen und richtige ID |
| 0xFE | Gerät angeschlossen aber kein Massenspeicher |
| 0xFF | Nicht definiert |

### TVERBAUROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Routinen |
| 0x00000001 | Verbindung Head-Unit zum Diversity |
| 0x00000002 | Verbindung Diversity zu den Antennen |
| 0x00000004 | Verbindung Head-Unit zum DAB L-Band Antennenfuß |
| 0x00000008 | Verbindung Head-Unit zum DAB Band III Antennenfuß |
| 0x00000010 | Verbindung Head-Unit zum GPS-Antennenfuß |
| 0x00000020 | Verbindung Head-Unit zum Aux-In Box |
| 0x00000040 | Lautsprecherausgangsleitungen (Stereo System) |
| 0x00000080 | Ausgangsleitungen zum HiFi Verstärker |
| 0x00000100 | RAD ON Leitung |
| 0x00000200 | Verbindung Head-Unit zum Mikrofon 1 |
| 0x00000400 | Verbindung Head-Unit zum Mikrofon 2 |
| 0x00000800 | Verbindung Head-Unit zum VICS FM Antennenfuß |
| 0x00001000 | Verbindung Head-Unit zum VICS Beacon Antennenfuß |
| 0x00002000 | Verbindung Head-Unit zum ETC-Spiegel |
| 0x00004000 | Ethernet-Verbindung Head-Unit zum ZGW oder OBD |
| 0x00008000 | Ethernet-Verbindung Head-Unit zum RSE High |
| 0x00010000 | Verbindung Head-Unit zur USB Kunden-Schnittstelle |
| 0x00020000 | Verbindungen zu IR-Sendeeinheit |
| 0x00040000 | Verbindung Head-Unit zum SDARS Antennenfuß |
| 0x00080000 | Verbindung Head-Unit zur Bluetooth Antenne |
| 0x00100000 | Ethernet-Verbindung Head-Unit zur Combox |
| 0x00200000 | Ethernet-Verbindung RSE High zur Combox |
| 0x00400000 | Verbindung Headunit zum WLAN Antennenfuß |
| 0x00800000 | USB Verbindung Headunit zum TCB |
| 0x01000000 | RSE Verbindung zum I / O-Taster links |
| 0x02000000 | RSE Verbindung zum I / O-Taster rechts |
| 0x04000000 | Verbindung Headunit zum USB Interface 2 (USB2) |
| 0xFFFFFFFF | Nicht definiert |

### TVERBINDUNGFEHLERART

| WERT | TEXT |
| --- | --- |
| 76 | 76 |
| MMC, NiVi, RFK, TV und Entertainmentserver | MMC, NiVi, RFK, TV und Entertainmentserver |
| TopView und Entertainmentserver | TopView und Entertainmentserver |

### TVIDEOAUSGANG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Alle Ausgänge |
| 0x0001 | Ausgang 1 |
| 0x0002 | Ausgang 2 |
| 0x0004 | Ausgang 3 |
| 0x0008 | Ausgang 4 |
| 0x0010 | Ausgang 5 |
| 0x0020 | Ausgang 6 |
| 0x0040 | Ausgang 7 |
| 0x0080 | Ausgang 8 |
| 0x0100 | Ausgang 9 |
| 0xFFFF | Nicht definiert |

### TVIDEOQUELLE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Quellen |
| 0x00000001 | MMC |
| 0x00000002 | NiVi |
| 0x00000004 | RFK |
| 0x00000008 | TV |
| 0x00000010 | TopView |
| 0x00000020 | Entertainmentserver |
| 0x00000040 | Headunit |
| 0x00000080 | RearSeatEntertainment |
| 0x00000100 | SideView |
| 0x00000200 | AUX1 |
| 0x00000400 | AUX2 |
| 0x00000800 | AUX3 |
| 0x00001000 | AUX4 |
| 0x00002000 | KAFAS |
| 0xFFFFFFFF | Nicht definiert |

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

### TVIDEOEINGANGFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Video- oder Sync-Signal vorhanden |
| 0x01 | Signal außerhalb der Toleranz |
| 0x02 | Verbindung konnte nicht hergestellt werden |
| 0xFF | Nicht definiert |

### TWAVEBAND

| WERT | TEXT |
| --- | --- |
| 0x00 | FM |
| 0x01 | LW |
| 0x02 | MW |
| 0x03 | KW |
| 0x04 | WB |
| 0x05 | TRF |
| 0x06 | Nicht definiert |

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
| 0x00 | none |
| 0x01 | SVC |
| 0x02 | TVC |
| 0x03 | RVC |
| 0x04 | NVC |
| 0x05 | MMC |
| 0x06 | Entertainment Server |
| 0x07 | TV |
| 0x08 | HU (internal video playback from CD, DVD, HDD, USB, MOST) |
| 0x09 | AUX1 (auxilary video input port) |
| 0x0A | reserved (Y/C AUX1 composite video input, e.g. BMW M components or external navigation) |
| 0x0B | reserved (RGB orYUV AUX1 component video input, e.g. BMW M components or external |
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

### TGALKURVE

| WERT | TEXT |
| --- | --- |
| 0x00 | GAL-Kurve 0 |
| 0x01 | GAL-Kurve 1 |
| 0x02 | GAL-Kurve 2 |
| 0x03 | GAL-Kurve 3 |
| 0x04 | GAL-Kurve 4 |
| 0x05 | GAL-Kurve 5 |
| 0x06 | GAL-Kurve 6 |
| 0xFF | Nicht definiert |

### TCONNECTIONTABLE

| WERT | TEXT |
| --- | --- |
| 1 | AmFmTuner/AudioAmplifier = 0x01  |
| 2 | AmFmTuner/HeadPhoneAmplifier = 0x02  |
| 3 | AmFmTuner/HeadPhoneAmplifier = 0x03  |
| 8 | Null device/AudioAmplifier = 0x08  |
| 9 | Null device/HeadPhoneAmplifier = 0x09  |
| 16 | AmFmTuner/HeadPhoneAmplifier = 0x10  |
| 24 | AudioDiscPlayer/AudioAmplifier = 0x18  |
| 25 | AudioDiscPlayer/HeadPhoneAmplifier = 0x19  |
| 32 | AudioDiscPlayer/AudioAmplifier = 0x20  |
| 33 | AudioDiscPlayer/HeadPhoneAmplifier = 0x21  |
| 34 | AudioDiscPlayer/HeadPhoneAmplifier = 0x22  |
| 40 | MultiMediaPlayer/AudioAmplifier = 0x28  |
| 48 | SVS/AudioAmplifier = 0x30  |
| 64 | Telephone/AudioAmplifier = 0x40  |
| 106 | DABTuner/HeadPhoneAmplifier = 0x6A |
| 80 | TVTuner/AudioAmplifier = 0x50  |
| 81 | TVTuner/HeadPhoneAmplifier = 0x51  |
| 82 | TVTuner/HeadPhoneAmplifier = 0x52  |
| 88 | Navigation/AudioAmplifier = 0x58  |
| 114 | Browser/HeadPhoneAmplifier = 0x72  |
| 56 | AmFmTuner/AudioAmplifier = 0x38  |
| 72 | TelematikTCU/AudioAmplifier = 0x48 |
| 117 | AuxilaryInput/HeadPhoneAmplifier = 0x75  |
| 118 | AuxilaryInput/HeadPhoneAmplifier = 0x76  |
| 119 | AuxilaryInput/AudioAmplifier = 0x77  |
| 120 | AuxilaryInput/HeadPhoneAmplifier = 0x78  |
| 121 | AuxilaryInput/HeadPhoneAmplifier = 0x79  |
| 128 | AuxilaryInput/AudioAmplifier = 0x80  |
| 129 | AuxilaryInput/HeadPhoneAmplifier = 0x81  |
| 130 | AuxilaryInput/HeadPhoneAmplifier = 0x82  |
| 134 | MultiMediaPlayer/AudioAmplifier = 0x86  |
| 132 | PDC/AudioAmplifier = 0x84 |
| 133 | Jingle/AudioAmplifier = 0x85  |
| 4 | AmFmTuner/AudioAmplifier = 0x04  |
| 5 | AmFmTuner/HeadPhoneAmplifier = 0x05  |
| 6 | AmFmTuner/HeadPhoneAmplifier = 0x06  |
| 36 | MultiMediaPlayer/AudioAmplifier = 0x24  |
| 37 | MultiMediaPlayer/HeadPhoneAmplifier = 0x25  |
| 38 | MultiMediaPlayer/HeadPhoneAmplifier = 0x26  |
| 39 | MultiMediaPlayer/AudioAmplifier = 0x27  |
| 41 | MultiMediaPlayer/HeadPhoneAmplifier = 0x29  |
| 67 | Telephone/HeadPhoneAmplifier = 0x43  |
| 68 | Telephone/HeadPhoneAmplifier = 0x44  |
| 69 | Telephone/AudioAmplifier = 0x45  |
| 70 | Telephone/HeadPhoneAmplifier = 0x46  |
| 71 | Telephone/HeadPhoneAmplifier = 0x47  |
| 73 | TelematikTCU/HeadPhoneAmplifier = 0x49  |
| 83 | TVTuner/AudioAmplifier = 0x53  |
| 84 | TVTuner/HeadPhoneAmplifier = 0x54  |
| 85 | TVTuner/HeadPhoneAmplifier = 0x55  |
| 112 | DABTuner/HeadPhoneAmplifier = 0x70  |
| 113 | Browser/AudioAmplifier = 0x71  |
| 115 | Browser/HeadPhoneAmplifier = 0x73  |
| 116 | AuxilaryInput/AudioAmplifier = 0x74  |
| 10 | Null device/HeadPhoneAmplifier = 0x0A  |
| 11 | AmFmTuner/AudioAmplifier = 0x0B  |
| 12 | AmFmTuner/HeadPhoneAmplifier = 0x0C  |
| 14 | AmFmTuner/AudioAmplifier = 0x0E  |
| 15 | AmFmTuner/HeadPhoneAmplifier = 0x0F  |
| 26 | AudioDiscPlayer/HeadPhoneAmplifier = 0x1A  |
| 28 | AudioDiscPlayer/HeadPhoneAmplifier = 0x1C  |
| 29 | AudioDiscPlayer/HeadPhoneAmplifier = 0x1D  |
| 42 | MultiMediaPlayer/HeadPhoneAmplifier = 0x2A  |
| 44 | MicrophoneInput/SVS = 0x2C  |
| 45 | MicrophoneInput/Telephone = 0x2D  |
| 74 | TelematikTCU/HeadPhoneAmplifier = 0x4A  |
| 107 | SatRadio/AudioAmplifier = 0x6B  |
| 108 | SatRadio/HeadPhoneAmplifier = 0x6C  |
| 109 | SatRadio/HeadPhoneAmplifier = 0x6D  |
| 110 | DABTuner/AudioAmplifier = 0x6E  |
| 111 | DABTuner/HeadPhoneAmplifier = 0x6F  |
| 122 | AuxilaryInput/AudioAmplifier = 0x7A  |
| 123 | AuxilaryInput/HeadPhoneAmplifier = 0x7B  |
| 124 | AuxilaryInput/HeadPhoneAmplifier = 0x7C  |
| 125 | AuxilaryInput/AudioAmplifier = 0x7D  |
| 126 | AuxilaryInput/HeadPhoneAmplifier = 0x7E  |
| 127 | AuxilaryInput/HeadPhoneAmplifier = 0x7F  |
| 154 | AuxilaryInput/AudioAmplifier = 0x9A  |
| 155 | AuxilaryInput/HeadPhoneAmplifier = 0x9B  |
| 156 | AuxilaryInput/HeadPhoneAmplifier = 0x9C  |
| 157 | AuxilaryInput/AudioAmplifier = 0x9D  |
| 158 | AuxilaryInput/HeadPhoneAmplifier = 0x9E  |
| 159 | AuxilaryInput/HeadPhoneAmplifier = 0x9F  |
| 160 | AuxilaryInput/AudioAmplifier = 0xA0  |
| 161 | AuxilaryInput/HeadPhoneAmplifier = 0xA1  |
| 162 | AuxilaryInput/HeadPhoneAmplifier = 0xA2  |
| 163 | AuxilaryInput/AudioAmplifier = 0xA3  |
| 164 | AuxilaryInput/HeadPhoneAmplifier = 0xA4  |
| 165 | AuxilaryInput/HeadPhoneAmplifier = 0xA5  |
| 166 | AuxilaryInput/AudioAmplifier = 0xA6  |
| 167 | AuxilaryInput/HeadPhoneAmplifier = 0xA7  |
| 168 | AuxilaryInput/HeadPhoneAmplifier = 0xA8  |
| 169 | AuxilaryInput/AudioAmplifier = 0xA9  |
| 170 | AuxilaryInput/HeadPhoneAmplifier = 0xAA  |
| 171 | AuxilaryInput/HeadPhoneAmplifier = 0xAB  |
| 172 | EntertainmentServer/AudioAmplifier = 0xAC  |
| 173 | EntertainmentServer/HeadPhoneAmplifier = 0xAD  |
| 174 | EntertainmentServer/HeadPhoneAmplifier = 0xAE  |
| 176 | EntertainmentServer/AudioAmplifier = 0xB0  |
| 177 | EntertainmentServer/HeadPhoneAmplifier = 0xB1  |
| 178 | EntertainmentServer/HeadPhoneAmplifier = 0xB2  |
| 179 | EntertainmentServer/AudioAmplifier = 0xB3  |
| 180 | MultiMediaPlayer/AudioAmplifier = 0xB4  |
| 181 | MultiMediaPlayer/HeadPhoneAmplifier = 0xB5  |
| 182 | MultiMediaPlayer/HeadPhoneAmplifier = 0xB6  |
| 183 | MultiMediaPlayer/AudioAmplifier = 0xB7  |
| 184 | Browser/AudioAmplifier = 0xB8  |
| 185 | Browser/HeadPhoneAmplifier = 0xB9  |
| 13 | AmFmTuner/HeadPhoneAmplifier = 0x0D  |
| 27 | AudioDiscPlayer/AudioAmplifier = 0x1B  |
| 18 | Null device/AudioAmplifier = 0x12 |
| 19 | Null device/HeadPhoneAmplifier = 0x13 |
| 20 | Null device/HeadPhoneAmplifier = 0x14 |
| 49 | iSpeechl/AudioAmplifier = 0x31 |
| 50 | iSpeech/AudioAmplifier = 0x32 |
| 104 | DABTuner/AudioAmplifier = 0x68 |
| 105 | DABTuner/HeadPhoneAmplifier = 0x69 |
| 187 | AuxilaryInput/AudioAmplifier = 0xBB |
| 188 | AuxilaryInput/HeadPhoneAmplifier = 0xBC |
| 189 | AuxilaryInput/HeadPhoneAmplifier = 0xBD |
| 46 | MicrophoneInput/iSpeech = 0x2E |
| 47 | MicrophoneInput/iSpeech = 0x2F |
| 186 | Browser/HeadPhoneAmplifier = 0xBA |
| 190 | AuxilaryInput/AudioAmplifier = 0xBE |
| 191 | AuxilaryInput/HeadPhoneAmplifier = 0xBF |
| 192 | AuxilaryInput/HeadPhoneAmplifier = 0xC0 |
| 193 | AuxilaryInput/AudioAmplifier = 0xC1 |
| 194 | AuxilaryInput/HeadPhoneAmplifier = 0xC2 |
| 195 | AuxilaryInput/HeadPhoneAmplifier = 0xC3 |
| 196 | AuxilaryInput/AudioAmplifier = 0xC4 |
| 197 | AuxilaryInput/HeadPhoneAmplifier = 0xC5 |
| 198 | AuxilaryInput/HeadPhoneAmplifier = 0xC6 |

### TCONNECTIONSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Demuted |
| 0x01 | All.a.Con.a.SAPause.OR.Con.In.Mem. |
| 0x07 | Connection does't exist |
| 0xFF | Unknown |

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

### TSEARCHINGPROCESSDAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Suche nicht gestartet |
| 0x01 | Suche läuft |
| 0x02 | Suche beendet und bester Sender gefunden |
| 0x03 | Suche beendet und kein bester Sender gefunden |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### TFBANDSCANSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test läuft noch |
| 0x01 | Test beendet, Resultrückgabe |
| 0x02 | Test abgebrochen, Resultrückgabe |
| 0xFF | Fehlerbericht |
| 0xFE | Nicht definiert |

### TFBANDSCANFEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Fehler 0 |
| 0x01 | Fehler 1 |
| 0x02 | Fehler 2 |
| 0x03 | Fehler 3 |
| 0xFF | Nicht definiert |

### THDDSMARTVALUES

| WERT | TEXT |
| --- | --- |
| 0x0001 | Lesefehlerrate |
| 0x0002 | Allgemeiner Datendurchsatz |
| 0x0003 | Durchschnitt der Startzeit [msec] |
| 0x0004 | Anzahl der Start/Stop-Vorgänge |
| 0x0005 | Anzahl der verbrauchten Reserve-Sektoren |
| 0x0007 | Positionierungsproblemrate |
| 0x0008 | Positionierungsdurchsatz |
| 0x0009 | Laufleistung in Stunden (inklusive Standby) |
| 0x000A | Anzahl Wiederholungen Rotationsstart |
| 0x000C | Anzahl Einschaltvorgänge |
| 0x00C0 | Anzahl Not-Auschaltvorgänge |
| 0x00C1 | Anzahl Parkvorgänge |
| 0x00E7 | Temperatur des Laufwerkes |
| 0x00C5 | Anzahl aktuell instabiler Sektoren |
| 0xFFFF | Nicht definiert |

### TDVDSMARTVALUES

| WERT | TEXT |
| --- | --- |
| 0x0004 | Anzahl der Start/Stop-Vorgänge |
| 0x0009 | Laufleistung in Stunden (inklusive Standby) |
| 0x000C | Anzahl Einschaltvorgänge |
| 0x00E1 | Anzahl Ladevorgänge |
| 0xFFFF | Nicht definiert |

### TGPSTIMEVALIDITY

| WERT | TEXT |
| --- | --- |
| 0x00 | Zeit ist gueltig |
| 0x01 | Zeit ist nicht gueltig |
| 0xFF | Nicht definiert |

### TGPSPOSITIONVALIDITY

| WERT | TEXT |
| --- | --- |
| 0x00 | GPS Position ist gueltig |
| 0x01 | GPS Position ist nicht gueltig |
| 0xFF | Nicht definiert |

### TGPSCORRELATIONHEADING

| WERT | TEXT |
| --- | --- |
| 0x00 | Correlation OK |
| 0x01 | Correlation not OK |
| 0xFF | Nicht definiert |

### TGYROTYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | internal to the Head-Unit |
| 0x01 | external to the Head-Unit |
| 0xFF | Nicht definiert |

### TATCVERSION

| WERT | TEXT |
| --- | --- |
| 0x00 | no ATC diagnosis possible |
| 0x01 | ATC diagnosis with track 12 measurement |
| 0x02 | ATC diagnosis with jitter measurement |
| 0xFF | Nicht definiert |

### TONLINECODED

| WERT | TEXT |
| --- | --- |
| 0x00 | Online nicht codiert |
| 0x01 | Online codiert |
| 0xFF | Nicht definiert |

### TONLINESTATETABLE

| WERT | TEXT |
| --- | --- |
| 0x00 | Online-Status OK |
| 0x01 | Daten nicht abrufbar |
| 0xFF | Nicht definiert |

### TPROVISIONINGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | IDLE, wurde nicht gestartet |
| 0x01 | ACTIVE, läuft noch |
| 0x02 | SUCCESS, alles OK |
| 0x03 | FAILED, mit Fehler beendet |

### THWVAR_DEVICE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Headunit Stufe 1 (Radio Business) |
| 0x00000001 | Headunit Stufe 2 (Radio Professional) |
| 0x00000002 | Headunit Stufe 3 (Navigation Business) |
| 0x00000004 | Headunit Stufe 4 (Navigation Professional) |
| 0x00000008 | RearSeatEntertainment Mid |
| 0x00000010 | RearSeatEntertainment High |
| 0x00000020 | TV-Modul DVB-T |
| 0x00000040 | TV-Modul DVB-T RSE |
| 0x00000080 | TV-Modul ISDB-T |
| 0x000000A0 | TV-Modul China |
| 0x00000100 | VideoSwitch Mid |
| 0x00000200 | VideoSwitch High |
| 0xFFFFFFFF | Nicht definiert |

### THWVAR_FUNCTION

| WERT | TEXT |
| --- | --- |
| 0x00010000 | IBOC |
| 0x00020000 | DAB |
| 0x00040000 | Video-in |
| 0x00080000 | SDARS |
| 0x00100000 | Telefon |
| 0x00200000 | I-Speech |
| 0x00400000 | CD-Laufwerk |
| 0x00800000 | MSA |
| 0x01000000 | als Japan-Variante |
| 0x02000000 | als China/Korea-Variante |
| 0x04000000 | CD-Laufwerk |
| 0x08000000 | Media-USB |
| 0xFFFFFFFF | Nicht definiert |

### TMOSTLIGHT

| WERT | TEXT |
| --- | --- |
| 0 | Lichtleistung abgesenkt |
| 1 | Volle Lichtleistung |

### SERVICEHISTORY

| WERT | NAME |
| --- | --- |
| 0x00 | Everything OK |
| 0x01 | Out of Memory |
| 0x02 | Data inconsistency |
| 0x04 | No writing permission |
| 0x05 | Unknown Error |
