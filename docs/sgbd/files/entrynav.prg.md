# entrynav.prg

## General

|  |  |
| --- | --- |
| File | entrynav.prg |
| Type | PRG |
| Jobs | 105 |
| Tables | 335 |
| Origin | BMW EI-60 Bredow |
| Revision | 24.000 |
| Author | TelemotiveAG EI-60 Hr.Ramdedovic, TelemotiveAG EI-60 Hr.Schmidt |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Entry HeadUnit mit und ohne NAV  63 0F1BE0 |  |  |
| ORIGIN | string | BMW EI-60 Bredow |  |  |
| REVISION | string | 24.000 |  |  |
| AUTHOR | string | TelemotiveAG EI-60 Hr.Ramdedovic, TelemotiveAG EI-60 Hr.Schmidt |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.57 |  |  |
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

### _STATUS_LINUX_DEBUG_FACILITIES_ACTIVATION

This Job returns the activation/deactivation status of the debug facilities

_No arguments._

### _STATUS_READ_EOL_DATA

returns the EOL datas

_No arguments._

### _STEUERN_CODING_MM_FACTORY

Set and restore coding data for MM factory test

| Name | Type | Description |
| --- | --- | --- |
| ARG_CODING | unsigned char | values for coding 0x00 restore default values 0x01 set coding data for MM Factory Test |

### _STEUERN_ESOC_RESET

Resets the ESoC.

_No arguments._

### _STEUERN_FBLOCKS_FADO_ESOC

loop back job for checking Fblocks on FADO and ESCO (used for BTLD and application SW) with this job the direction and correct routing to FADO and ESoC should be checked > use case: sending out a MOST Telegram and returns the MOST answer

| Name | Type | Description |
| --- | --- | --- |
| ARG_DATA | string | MOST Telegram to send |

### _STEUERN_GPIO_CONFIGURATION

this service is used to the the GPIO configuration of the GPIO PW3 and PW4 for ESoC Boot

| Name | Type | Description |
| --- | --- | --- |
| ARG_GPIO_CONFIGURATION | unsigned char | 0x00 application mode 0x01 maintenance mode 0x02 EOL mode 0x03 reserved ... 0xFF not defined |

### _STEUERN_LINUX_DEBUG_FACILITIES_ACTIVATION

This Job activtes/deactivates the debug facilities

| Name | Type | Description |
| --- | --- | --- |
| ARG_LINUX_DEBUG_FACILITIES_ACTIVATION | unsigned char | Activates/ Deactivates the LINUX_DEBUG_FACILITIES values from table TAB_OnOff(0x00 Off, 0x01 On) |

### _STEUERN_MASTER_RESET_START

starts the master reset procedures on FADO and Tegra, to achieve the complete board factory reset

_No arguments._

### _STEUERN_TRACE_DLT

Resets the Default Logging Trace (DLT) to default log level

_No arguments._

### _STEUERN_DJ_TEST_STUB

component on Vehicle Controller (VC) answering to the diagnostic request over C-interface according to a look-up table on parameter VALUE

| Name | Type | Description |
| --- | --- | --- |
| ARG_TEST_STUB_FADO_ESOC | unsigned char | routing of DTCs to FADO or ESOC 0x00: FADO 0x01: ESOC |
| ARG_TEST_STUB_VALUE | unsigned char | values for test application 0x00: OK (Positive Answer) 0x01: CONDITIONS_NOT_CORRECT (0x22 - conditionsNotCorrect) 0x02: APP_ERROR (0x10 - generalReject) 0x03: N/A (Check HW Dependency (0x22 –conditionsNotCorrect)) 0x04: N/A (Check SW Dependency (0x22 –conditionsNotCorrect)) 0x05: OK, but with handle+=1  (Response discarded by CDC -> DCM timeout) 0x06: OK, but after 11 seconds (Response discarded by CDC -> DCM timeout) 0x07 - 0x0F: OUT_OF_RANGE (0x31 - requestOutOfRange) 0x10 – 0xFE: INVALID_FORMAT (0x13 – incorrectMessageLengthOrInvalidFormat) 0xFF: N/A (0x22 - conditionsNotCorrect) |

### _STEUERN_DTC_TEST_STUB

triggering of DTCs to FADO or ESOC

| Name | Type | Description |
| --- | --- | --- |
| ARG_TEST_STUB_FADO_ESOC | unsigned char | routing of DTCs to FADO or ESOC 0x00: FADO 0x01: ESOC |
| ARG_TEST_STUB_DTC | unsigned long | ID of DTC EventID, e.g.: 0xE1CC08 |
| ARG_TEST_STUB_STATUS | unsigned char | state of activation/ deactivation 0x00: active/default 0x01: not active |
| ARG_TEST_STUB_DTC_UWB | string | DIDnum.DID1.ValueLenght1.Value1.DID2.ValueLenght2.Value2 without 0x at the beginning Example: 02422401030042260104, where: -	02 is the number of DIDs -	4224 is the first DID -	02 is the length of the first Environment Parameter -	0300 is the value of the first Environment Parameter -	4226 is the second DID -	01 is the length of the second Environment Parameter -	04 is the value of the second Environment Parameter |

### STATUS_SOFTWARENAME

Reads out the flashed Buildname

_No arguments._

### READ_DIFF_REGISTRY

Vergleich der Current und Default Registry

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
| ARG_DIM_MIN_OFFSET_BRIG | unsigned char | Lower border of the brightness offset regulation range |
| ARG_ENDIANESS_ADAPTED | unsigned char | Indicates if the endianess of the coding data block has been adapted or not |
| ARG_PADDING | unsigned char | Padding for further use |

### STATUS_AKTIVIERUNGSLEITUNG

Returns the state of the activation line

_No arguments._

### STATUS_GATEWAY_WAKEUP_SOURCE

Liefert die Quelle/Ursache zurück, die zum Wecken des       Gateway-Steuergeräts geführt hat.

_No arguments._

### STATUS_GET_IPCONFIG

Reads out the actual ipconfig of the Ethernet interface of the HeadUnit.

_No arguments._

### STATUS_MMI_STATISTIK

Lesen der MMI Statistik gzip Datei

_No arguments._

### STATUS_DAB_FIRMWARE

reads the DAB firmware version

_No arguments._

### STATUS_CPLD_FIRMWARE

reads the DAB firmware version

_No arguments._

### STATUS_VERSION_GATEWAYTABELLE

Lesen der Versionsnummer der Gateway-Tabelle

_No arguments._

### STATUS_GATEWAY_MOST_DEVICE_COUNT

Information über den Gateway-Dispatcher Anzahl der vom Dispatcher erkannten MOST-Teilnehmer im Ring

_No arguments._

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

### STEUERN_PERSISTENCY_CLEAR

Deletes persistency

| Name | Type | Description |
| --- | --- | --- |
| ARG_CLEAR_MODE | unsigned char | ARG 0x01 deletes only SWT persistency ARG 0x02 deletes Navi persistency |

### STEUERN_ZIN_GENERISCH

Sends commands to the ZIN module

| Name | Type | Description |
| --- | --- | --- |
| ARG_ZIN_GENERISCH | string | cmd string 'llllccccdd...' llll - len of the following cccc - 2 Bytes internal ZIN command code dd...- n bytes data in the request |
| STAT_ZIN_GENERISCH | string | result string |

### STATUS_PIA_PORTIERUNGSMASTER

returns the state of PIA porting master

_No arguments._

### STATUS_PIA_PORTING_MASTER

returns the state of PIA porting master

_No arguments._

### STATUS_SWUP_INSTALLED

UDS:     $22   ReadDataByIdentifier $D01F Status_Swup_Installed

_No arguments._

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

### STATUS_GPS_TIME

Reads out the GPS date and time.

_No arguments._

### STATUS_GPS_POSITION

Returns the current GPS position.

_No arguments._

### STATUS_BIT_ERROR_RATE_DAB

Measures the quality of the reception of the current DAB ensemble.

_No arguments._

### STATUS_ATC_VERSION

Reads out the capability of the ATC diagnosis

_No arguments._

### STATUS_HW_VARIANTE

Liefert die HW-Variante der Headunit

_No arguments._

### STATUS_HWVARIANTE_NAME

Variante

_No arguments._

### STATUS_KOMP_ID

Liefert die HDD Download Kompatibilitätskennung gemäß der HW-Variante.

_No arguments._

### STEUERN_PIA_PORTING_MASTER

this service is used to set the PIA porting master

| Name | Type | Description |
| --- | --- | --- |
| ARG_PIA_SEQUENCE | unsigned char | 0x00 = Export 0x01 = Import 0x02 = Rücksetzen auf Default (KeySettings im aktuellen Profil zurücksetzen) 0x03 = Benutzer löschen, (KeySettings im aktuellen Profil zurücksetzen und Dateiname auf Default) 0x04 = Profilwechsel 0x05 = Aktulles Profile kopieren 0x06 = Benutzernamen ändern 0x07 = Konfiguration ermitteln 0x08 = Abbruch des laufenden PIA-Ablaufs 0x09 = PIA Gesamtsystem zurücksetzen 0x0A = Rücksetzen der CarSettings auf Default 0x0B = A4A Zurücksetzen der A4A-Whitelist 0x0C = A4A Status auslesen |
| ARG_PIA_SEQUENCE_PROFILE | unsigned char | if 0x00 = Export => Nummer des Profils => 0 =  Profil von Benutzer 1, 1 = Profil von Benutzer 2,  2 = Profil von Benutzer 3, 10 (dezimal) = Gastprofil if 0x01 = Import => Nummer des Profils => 0 = Profil von Benutzer 1, 1 = Profil von Benutzer 2,  2 = Profil von Benutzer 3, 10 (dezimal) = Gastprofil if 0x04 = Profilwechsel => Nummer des zu aktivierenden Profils => 0 = Profil von Benutzer 1, 1 = Profil von Benutzer 2, 2 = Profil von Benutzer 3, 10 (dezimal) = Gastprofil, 15 (dezimal) = Ungültiges Profil if 0x05 = Aktulles Profile kopieren (die Nummer des aktuellen Profils ist nicht erlaubt) => 0 = Profil von Benutzer 1, 1 = Profil von Benutzer, 2 = Profil von Benutzer 3, 10 (dezimal) = Gastprofil if 0x06 = Benutzernamen ändern => Neuer Benutzername (Höchstens 64 Zeichen lange Zeichenkette aus druckbaren UTF-8 Zeichen) |
| ARG_PIA_SEQUENCE_DEVICE | unsigned char | Export => Externes Speichermedium, auf das die Portierungsdatei geschrieben werden soll. Mögliche Werte => 0 = Tester, 1 = USB-Stick Import => Externes Speichermedium, von dem die Portierungsdatei gelesen werden soll. Mögliche Werte => 0 = Tester, 1 = USB-Stick Profilwechsel => Mode der Aktivierung => 1 = temporär, 2 = permanent |

### STEUERN_PIA_PORTIERUNGSMASTER

this service is used to set the PIA porting master

| Name | Type | Description |
| --- | --- | --- |
| ARG_PIA_SEQUENCE | unsigned char | 0x00 = Export 0x01 = Import 0x02 = Rücksetzen auf Default (KeySettings im aktuellen Profil zurücksetzen) 0x03 = Benutzer löschen, (KeySettings im aktuellen Profil zurücksetzen und Dateiname auf Default) 0x04 = Profilwechsel 0x05 = Aktulles Profile kopieren 0x06 = Benutzernamen ändern 0x07 = Konfiguration ermitteln 0x08 = Abbruch des laufenden PIA-Ablaufs 0x09 = PIA Gesamtsystem zurücksetzen 0x0A = Rücksetzen der CarSettings auf Default 0x0B = A4A Zurücksetzen der A4A-Whitelist 0x0C = A4A Status auslesen |
| ARG_PIA_SEQUENCE_PROFILE | unsigned char | if 0x00 = Export => Nummer des Profils => 0 =  Profil von Benutzer 1, 1 = Profil von Benutzer 2,  2 = Profil von Benutzer 3, 10 (dezimal) = Gastprofil if 0x01 = Import => Nummer des Profils => 0 = Profil von Benutzer 1, 1 = Profil von Benutzer 2,  2 = Profil von Benutzer 3, 10 (dezimal) = Gastprofil if 0x04 = Profilwechsel => Nummer des zu aktivierenden Profils => 0 = Profil von Benutzer 1, 1 = Profil von Benutzer 2, 2 = Profil von Benutzer 3, 10 (dezimal) = Gastprofil, 15 (dezimal) = Ungültiges Profil if 0x05 = Aktulles Profile kopieren (die Nummer des aktuellen Profils ist nicht erlaubt) => 0 = Profil von Benutzer 1, 1 = Profil von Benutzer, 2 = Profil von Benutzer 3, 10 (dezimal) = Gastprofil if 0x06 = Benutzernamen ändern => Neuer Benutzername (Höchstens 64 Zeichen lange Zeichenkette aus druckbaren UTF-8 Zeichen) |
| ARG_PIA_SEQUENCE_DEVICE | unsigned char | Export => Externes Speichermedium, auf das die Portierungsdatei geschrieben werden soll. Mögliche Werte => 0 = Tester, 1 = USB-Stick Import => Externes Speichermedium, von dem die Portierungsdatei gelesen werden soll. Mögliche Werte => 0 = Tester, 1 = USB-Stick Profilwechsel => Mode der Aktivierung => 1 = temporär, 2 = permanent |

### STEUERN_PIA_06_CHANGE_ACTIVE_USERNAME

this service is used to set the PIA porting master

| Name | Type | Description |
| --- | --- | --- |
| ARG_PIA_USERNAME | string | Neuer Benutzername (Höchstens 64 Zeichen lange Zeichenkette aus druckbaren UTF-8 Zeichen) |

### STEUERN_PIA_04_CHANGE_PROFILE

this service is used to set the PIA porting master

| Name | Type | Description |
| --- | --- | --- |
| ARG_PIA_PROFILE | unsigned char | Nummer des zu aktivierenden Profils => 0 = Profil von Benutzer 1, 1 = Profil von Benutzer 2, 2 = Profil von Benutzer 3, 10 (dezimal) = Gastprofil, 15 (dezimal) = Ungültiges Profil |
| ARG_PIA_PROFILE_MODE | unsigned char | Profilwechsel => Mode der Aktivierung => 1 = temporär, 2 = permanent |

### STEUERN_PIA_09_RESET_ALL

this service is used to set the PIA porting master

_No arguments._

### STATUS_BT_READ_PHONE_ID

Returns information about the phone selected as argument

| Name | Type | Description |
| --- | --- | --- |
| ARG_EINTRAG_NR | unsigned char | Phone from which the information must be read out (possible values: 1, 2, 3 and 4) |

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
| ARG_TYPE | unsigned char | Welche Daten geschrieben werden sollen 0x03 OTA |
| ARG_PATH | string | absolute and complete path to file that shall be written |
| ARG_INDEX | unsigned char | Index des Provisioningsatzes (für DPAS) von 0-9 |

### STEUERN_NWM_CONFIG_NOTOK

Sends a Config.NotOk on the MOST Bus

_No arguments._

### READ_CURRENT_REGISTRY

Liefert den Inhalt der Current Registry

_No arguments._

### STATUS_WAKEUP_ABSTIME

7 bytes Zeitpunkt, zu dem das SG den Weckbefehl gegeben hat Bytes werden als Datum interpretiert Beispiel: '20060508131210' in der Reihenfolge YYYYMMDDHHMMSS. Falls das SG nie geweckt hat wird '00000000000000' zurückgegeben

_No arguments._

### READ_DEFAULT_REGISTRY

Liefert den Inhalt der Current Registry

_No arguments._

### STATUS_MOSTDIAG_DELAY

Verzögerungszeit, bis der Job steuern_zentrale_registry_sollkonfiguration wieder gestartet werden kann

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

### STEUERN_ZENTRALE_REGISTRY_SOLLKONFIGURATION

Die aktuelle Registry wird als Default Registry gespeichert

_No arguments._

### STATUS_HIGHSYNCCONNECTION_TABLE

HighSyncConnectionTable

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
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x4FC0 | Elektrischer Zuheizer 3. Sitzreihe | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
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
| 0x5AFF | unbekannter Verbauort | - |
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
| 0x7700 | Booster | - |
| 0x7800 | Dualspeicher | 1 |
| 0x7900 | Tablet | - |
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
| 0x0007 | Volvo Cars (Ford Group) |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis GmbH |
| 0x0014 | Microchip Technology Inc |
| 0x0015 | Centro Ricerche FIAT |
| 0x0016 | Renesas Technology Europe GmbH - Mitsubishi |
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
| 0x0028 | Renesas Technology Europe Ltd  - Hitachi |
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
| 0x005B | VOLVO Technology Schweden |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic GmbH & Co. KG |
| 0x0061 | Flextronics / Sidler Automotive GmbH & Co. KG |
| 0x0062 | EAO Automotive GmbH & Co. KG |
| 0x0063 | helag-electronic gmbh |
| 0x0064 | Magna Electronics |
| 0x0065 | INTEVA Products, LLC |
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
| 0x0089 | Kongsberg Automotive AB/Mullsjö Works |
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
| ARG_TEMP_COUNTERS01 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 01 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS02 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 02 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS03 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 03 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS04 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 04 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |

### ARG_0XA000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_KLANGZEICHEN | + | - | 0-n | - | unsigned char | - | TKlangzeichen | 1.0 | 1.0 | 0.0 | - | - | Legt das auszugebende Signal fest (Klingel,Gong):siehe Tabelle TKlangzeichen |

### ARG_0XA001_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | + | - | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 20.0 | 20000.0 | Frequenzeinstellung: 20..20 000 Hz |
| ARG_LEVEL | + | - | - | - | char | - | - | 1.0 | 1.0 | 0.0 | -96.0 | 127.0 | Bei Headunits: Hex-Wert, von 0x00 lückenlos bis 0x7F, Nicht unterstützte Werte (Stereo: 0x3F) dürfen nicht zu Fehlermeldungen führen.Sondern die für das Lautsprechersystem nächstmöglich kleinere verfügbare Lautstärke wird eingestellt.  Bei Verstärkern: Integer,-96..0 [dB] |
| ARG_KANAL | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | bezeichnet den Kanal, auf dem ausgegeben werden soll. Tabelle TAudioKanal |

### ARG_0XA003_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PDC_SIGNAL | + | - | 0-n | - | unsigned char | - | TPdcSignal | 1.0 | 1.0 | 0.0 | - | - | PDC Ton: Auswahl PDC Typ: siehe Tabelle TPdcSignal |
| AUDIO_STEP | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | PDC Ton: Lautstärke abhängig vom Abstand zum Objekt (Schritte von 0-82) |

### ARG_0XA006_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DRIVE | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | gibt an, auf welchem Laufwerk der  Eject ausgeführt werden soll. Default 4 Tabelle TLaufwerk |

### ARG_0XA007_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DRIVE | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | gibt an, auf welchem Laufwerk der  Eject ausgeführt werden soll. Default: 4 Tabelle TLaufwerk |

### ARG_0XA008_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WAVEBAND | + | - | 0-n | - | unsigned char | - | TWaveband | 1.0 | 1.0 | 0.0 | - | - | Auwählen des Frequenzbandes: siehe Tabelle TWaveband |

### ARG_0XA009_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SUCHLAUF | + | - | 0-n | - | unsigned char | - | TTunerSuchlauf | 1.0 | 1.0 | 0.0 | - | - | Startet den Stationssuchlauf ab dem ausgewählten Bandbereich |

### ARG_0XA00B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ENTSOURCE | + | - | 0-n | - | unsigned char | - | TEntSource | 1.0 | 1.0 | 0.0 | - | - | die auszuwählende Entertainmentquelle |

### ARG_0XA00E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ACTIVATION | + | - | 0-n | - | unsigned char | - | TNaviSimulationModeActivationAction | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XA018_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ANTENNE | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Antenne(n) die getestet werden sollen. Tabelle TAntenne |

### ARG_0XA01A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SIGNALART | + | - | 0-n | - | unsigned char | - | TSignalArt | 1.0 | 1.0 | 0.0 | - | - | Art der Signalausgabe. |
| ARG_AUSGANG | + | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | - | - | Default: 0 Alle Ausgänge des Steuergerätes müssen einzeln und kombiniert anwählbar sein. |
| ARG_TIMEOUT | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die das Testbild ausgegeben wird. Default: 255 Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis: -der Job erneut mit Parameter 0 aufgerufen wird -das Steuergerät neu startet (Aufwachen, Reset, &) |

### ARG_0XA01C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_QUELLE | + | - | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | - | - | Stellt eine Videoverbindung zwischen einer Quelle und mehreren Senken her. Legt die Videoquelle fest, von der aus das Signal verteilt wird. Tabelle TVideoQuelle |
| ARG_SENKEN | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Stellt eine Videoverbindung zwischen einer Quelle und mehreren Senken her. Tabelle TVideoSenke |
| ARG_TIMEOUT | + | - | - | - | unsigned char | 255 | - | 1.0 | 1.0 | 0.0 | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die die Videoverbindung aufrecht erhalten wird. Default: 255  Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis der Job erneut mit Parameter 0 aufgerufen wird oder das Steuergerät neu startet (Aufwachen, Reset, &) |

### ARG_0XA01D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_QUELLE | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Wertet das Signal von einer oder mehreren Quellen aus. Legt die Videoquelle fest, von der aus das Signal auf die Senke geroutet wird: Tabelle TVideoQuelle bzw. TEingangVideoSwitch |

### ARG_0XA01E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VERBAU_ROUTINE | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Routinen, die getestet werden sollen. Tabelle TVerbauRoutine |

### ARG_0XA021_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | + | - | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Integer, 20..20 000 [Hz] Bei Verstärkern: 8 000 ... 20 000 [Hz] |
| ARG_LEVEL | + | - | - | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F, Nicht unterstützte Werte (Stereo: 0x3F) dürfen nicht zu Fehlermeldungen führen. Sondern die für das Lautsprechersystem nächstmöglich kleinere verfügbare Lautstärke wird eingestellt.   Bei Verstärkern: Integer, -50..0 [dB] |
| ARG_KANAL | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | bezeichnet den Kanal, auf dem gemessen werden soll. Tabelle TAudioKanal |
| ARG_MESSDAUER | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | legt die Dauer der Messung fest. Bereich: 50-1000ms Bei Verstärkern: Bereich: 200-3000ms |

### ARG_0XA022_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SELBSTTEST_ROUTINE | + | - | 0-n | - | unsigned long | - | TSelbsttestRoutine | - | - | - | - | - | Routinen, die getestet werden sollen. Die Tabelle TSelbsttestRoutine wird in der SGBD von der Entwicklung bzw. vom Zulieferer befüllt und gepflegt |

### ARG_0XA024_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_MENU | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Einstellen eines MMI Menüs. |
| ARG_MENU_ITEM | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Markieren eines Menüeintrages |
| ARG_MENU_RSE_RIGHT | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | ID des Menüs der zweiten MMI, z.B. RSE rechter Bildschirm. |
| ARG_MENUE_ITEM_RSE_RIGHT | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | ID eines Eintrages im Menü der zweiten MMI, z.B. RSE rechter Bildschirm =0000 bei Verwendung des Jobs in Headunit |

### ARG_0XA025_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LANGUAGE | + | - | 0-n | - | unsigned char | - | TAB_LANGUAGE | - | - | - | - | - | legt die Sprache fest |

### ARG_0XA027_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_COMMAND | + | - | 0-n | - | unsigned int | - | TNaviLanguage | 1.0 | 1.0 | 0.0 | - | - | Testet die Sprachausgabe des Navi |

### ARG_0XA02E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TYPE | + | - | 0-n | - | unsigned char | - | TAB_TypeUSBDevice | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XA036_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LEVEL | + | - | - | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F Bei manchen sekundären Lautstärken wie Navi-Out wird die Lautstärke relativ angegeben, z.B: [-11;11]  Bei Verstärkern: Integer, -96..0 [dB] |
| ARG_AUDIO_SIGNAL | + | - | 0-n | - | unsigned char | - | TAudioSignal | - | - | - | - | - | Gibt an, welche Lautstärke verstellt oder ausgelesen werden soll. Default: 0 |

### ARG_0XA037_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TRACK | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wählt die CD/DVD-Tracknummer die abgespielt werden soll. |

### ARG_0XA039_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_AUDIO_SIGNAL | + | - | 0-n | - | unsigned char | - | TAudioSignal | - | - | - | - | - | Gibt an, welche Lautstärke ausgelesen werden soll. Default: 0 |

### ARG_0XA03A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ACTION | + | - | 0-n | - | unsigned char | - | TNaviMapAction | 1.0 | 1.0 | 0.0 | - | - | Löschen oder Deaktivieren der Kunden Navigation Karte |

### ARG_0XA03C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DURATION | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 30.0 | legt die Dauer in Sekunden fest, die der Lüfter auf Maximum läuft. |

### ARG_0XA03E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SDARS_GENERATOR_FREQUENCY_LEFT | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 1599.0 | Einheit [10Hz] Dmait Bereich 10Hz bis 15990Hz |
| ARG_SDARS_GENERATOR_FREQUENCY_RIGHT | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 1599.0 | Einheit [10Hz] Dmait Bereich 10Hz bis 15990Hz |

### ARG_0XA048_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT | + | - | 0-n | - | unsigned char | - | TAB_BLUETOOTH_STATUS | - | - | - | - | - | setzt den Bluetooth Status |

### ARG_0XA049_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT_ERKENNUNGSMODUS | + | - | 0-n | - | unsigned char | - | TBluetoothDiscoveryModeStatus | 1.0 | 1.0 | 0.0 | - | - | Steuert den Bluetooth Erkennungsmodus |

### ARG_0XA06A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VENDORID_TEL_KDZ | + | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Hier wird die VendorID zum Vergleich mit dem USB Device vorgegeben. ACHTUNG: Eingabe von vier Hex-Zeichen mit 0x voran. BEISPIEL: 0xA1FB |
| ARG_PRODUCTID_TEL_KDZ | + | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Hier wird die ProductID zum Vergleich mit dem USB Device vorgegeben. ACHTUNG: Eingabe von vier Hex-Zeichen mit 0x voran. BEISPIEL: 0xA1FB |
| ARG_VENDORID_TEL_SIA | + | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Hier wird die VendorID zum Vergleich mit dem USB Telefon vorgegeben. ACHTUNG: Eingabe von vier Hex-Zeichen mit 0x voran. BEISPIEL: 0xA1FB |
| ARG_PRODUCTID_TEL_SIA | + | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Hier wird die ProductID zum Vergleich mit dem USB Telefon vorgegeben. ACHTUNG: Eingabe von vier Hex-Zeichen mit 0x voran. BEISPIEL: 0xA1FB |

### ARG_0XA082_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA_TO_RESET | + | - | 0-n | high | unsigned long | - | TAB_RESETDATABASES | - | - | - | - | - | Daten, die gelöscht werden sollen. Parameter siehe Tabelle TBluetoothResetBasicState |

### ARG_0XA083_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_NR_KEY | + | - | 0-n | high | unsigned char | - | TKeyNr | 1.0 | 1.0 | 0.0 | - | - | Schlüsselnummer / Fahrzeug für Reset. Auswahl siehe Tabelle TKeyNr |
| ARG_PIA_SETTING | + | - | 0-n | high | unsigned long | - | TAB_DelPIASetting | - | - | - | - | - | PIA Einstellungen, die mit jedem Benutzerprofil gelöscht werden müssen |

### ARG_0XA0AA_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SDARS_ACTIVATION | + | - | 0-n | high | unsigned char | - | TAB_ONOFF | 1.0 | 1.0 | 0.0 | - | - | 0x00 AUS 0x01 EIN 0xFF NICHT DEFINIERT |

### ARG_0XA0B5_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SDARS_GENERATOR_FREQUENCY_SXM | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Frequency that must be set on the both channels |

### ARG_0XD003_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_KANAL | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kanalnummer |

### ARG_0XD00D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 150.0 | 108000.0 | Einzustellende Frequenz im Bereich 150 - 108000 [kHz] |

### ARG_0XD00E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TP | 0-n | - | unsigned char | - | TTp | 1.0 | 1.0 | 0.0 | - | - | Steuert die TP Funktionalität. Default: 2 |
| ARG_RDS | 0-n | - | unsigned char | - | TRds | 1.0 | 1.0 | 0.0 | - | - | Steuert die RDS Funktionalität. Default: 2 |

### ARG_0XD011_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TMC | 0-n | - | unsigned char | - | TTmcActivationState | 1.0 | 1.0 | 0.0 | - | - | Steuern des TMC |

### ARG_0XD014_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DEMUTE | 0-n | - | unsigned char | - | TDemuteStatus | 1.0 | 1.0 | 0.0 | - | - | - |
| ARG_HEADPHONES | 0-n | - | unsigned char | - | TDemuteSource | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XD01A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT_GERAETEADRESSE | DATA | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | - | - | Schreibt die Adresse des Bluetooth Gerätes |

### ARG_0XD01C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BT_GERAETENAME | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Schreibt den Bluetooth Gerätenamen |

### ARG_0XD028_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RADON | 0-n | - | unsigned char | - | TRadOnLead | 1.0 | 1.0 | 0.0 | - | - | Setzen des Ausgangssignals RADON. |

### ARG_0XD02D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ_DAB | TEXT | - | string[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Einstellung der DAB Frequenz. Achtung: Hat der Kanal nur 2 Ziffern, so muss mit führender 0 aufgefüllt werden. z.B. 52 wird zu 052 |

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

### ARG_0XD05F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SDARS_CHANNEL | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | selektiert SDRAS kanal |

### ARG_0XD060_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SDARS_TUNER_MODE | 0-n | - | unsigned char | - | TSdarsTunerMode | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XD0A3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_ACTIVATION | 0-n | high | unsigned char | - | TAB_EIN_AUS | 1.0 | 1.0 | 0.0 | - | - | Aktivierungswert Werte aus der Tabelle TAB_EIN_AUS |

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
| ARG_SDARS_SXM_CHANNEL | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Channel that must be tuned |

### ARG_0XD0E4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BORDERLINE_SETTING_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | writes the ISO 3166 country code of the car position as three characters (e.g. Deutschland; DEU)  0x0 default (Initialization value) - ¿default¿ means standard view from first Navigation Database compilation |

### ARG_0XD0E7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_BORDERLINE_CHANGE_MODE | 0-n | high | unsigned char | - | TAB_AUTO_MAN | - | - | - | - | - | sets a borderline to mode <automatic> or <manual> by using TAB_AUTO_MAN |

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
| PWM_VALUE | % | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe des PWM-Wert, mit welchem die Hintergrundbeleuchtung angesteuert werden soll: 0 = dunkel, 100 = hell |

### ARG_0XD5C9_D

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
| 0x026308 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x026309 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02630A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02630B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02630C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF63 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0xB7F805 | Verbindung Head-Unit zum DAB L-Band Antennenfuß: Leitungsunterbrechung | 0 |
| 0xB7F807 | Verbindung Head-Unit zum DAB L-Band Antennenfuß: Kurzschluss | 0 |
| 0xB7F809 | Verbindung Head-Unit zum DAB Band III Antennenfuß: Leitungsunterbrechung | 0 |
| 0xB7F80B | Verbindung Head-Unit zum DAB Band III Antennenfuß: Kurzschluss | 0 |
| 0xB7F80F | Verbindung Head-Unit zum GPS-Antennenfuß: Leitungsunterbrechung | 0 |
| 0xB7F811 | Verbindung Head-Unit zum GPS-Antennenfuß: Kurzschluss nach Masse | 0 |
| 0xB7F813 | GPS Empfänger: defekt | 0 |
| 0xB7F81A | Verbindung Head-Unit zur WLAN-Antenne: Leitungsunterbrechung | 0 |
| 0xB7F81D | Verbindung Head-Unit zum Aux-In Box: Leitungsunterbrechung | 0 |
| 0xB7F81F | Verbindung Head-Unit zum Aux-In Box: Kurzschluss nach Masse | 0 |
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
| 0xB7F841 | FBAS-Eingang 1: kein Video- oder Sync-Signal vorhanden | 1 |
| 0xB7F842 | FBAS-Eingang 2: kein Video- oder Sync-Signal vorhanden | 1 |
| 0xB7F849 | RAD ON Leitung: Kurzschluss nach Plus | 0 |
| 0xB7F84A | RAD ON Leitung: Kurzschluss nach Masse | 0 |
| 0xB7F84D | Verbindung Head-Unit zum Mikrophon 1: Leitungsunterbrechung | 0 |
| 0xB7F84E | Verbindung Head-Unit zum Mikrophon 1: Kurzschluss nach Plus | 0 |
| 0xB7F84F | Verbindung Head-Unit zum Mikrophon 1: Kurzschluss nach Masse | 0 |
| 0xB7F850 | Verbindung Head-Unit zum Mikrophon 2: Leitungsunterbrechung | 0 |
| 0xB7F851 | Verbindung Head-Unit zum Mikrophon 2: Kurzschluss nach Plus | 0 |
| 0xB7F852 | Verbindung Head-Unit zum Mikrophon 2: Kurzschluss nach Masse | 0 |
| 0xB7F85A | Verbindung HU zum Antennenverstärker - Leitungsunterbrechung FM1-Antenne | 0 |
| 0xB7F85B | Verbindung Antennenverstärker zu Antenne - Leitungsunterbrechung FM1-Antenne | 0 |
| 0xB7F85C | Verbindung HU zum Antennenverstärker - Kurzschluss nach Masse FM1-Antenne | 0 |
| 0xB7F85E | KISU Anwendungsfehler | 1 |
| 0xB7F85F | KISU Kunden Anwendungsfehler | 1 |
| 0xB7F865 | Lüfter Fehler | 0 |
| 0xB7F867 | Interner Temperaturfehler | 0 |
| 0xB7F869 | Provisionierung ohne Signatur OTA | 0 |
| 0xB7F86A | Zertifikat ohne Signatur | 0 |
| 0xB7F86B | Externe Unterspannung | 1 |
| 0xB7F86C | Externe Überspannung | 1 |
| 0xB7F86D | Provisionierung ohne Signatur Diagnose | 0 |
| 0xB7F86E | Signatur der zu importierenden Portierungsdatei korrupt | 1 |
| 0xB7F86F | Dateistruktur der zu importierenden Portierungsdatei korrupt | 1 |
| 0xB7F870 | Version der zu importierenden Portierungsdatei unbekannt | 1 |
| 0xB7F872 | PIA Software Fehler | 1 |
| 0xB7F874 | Fehler beim Schreiben auf externes Speichermedium | 1 |
| 0xB7F875 | Fehler beim Lesen vom externen Speichermedium | 1 |
| 0xB7F87E | Die von einer PIA-Funktion gelieferte aktuelle Profilnummer unterscheidet sich von der in der Head Unit vermerkten | 1 |
| 0xB7F87F | Codierungsfehler Arbeitsbereich | 0 |
| 0xB7F880 | Codierunsfehler Master Bereich | 0 |
| 0xB7F883 | Hauptplatine Hardware Fehler | 0 |
| 0xB7F884 | Flash File System fehlerhaft | 0 |
| 0xB7F89C | Kein GPS Empfang in den letzten 40 Kilometern | 1 |
| 0xB7F8AD | Ethernet Verbindung Head-Unit zum ZGW_FEM: Link Status von dem Ethernet Treiber nicht ok | 0 |
| 0xB7F8AF | USB-VBUS Verbindung Head-Unit zur USB Benutzer Schnittstelle: Kurzschluss nach Masse | 0 |
| 0xB7F8B2 | Video Verbindung: keine oder ungültige Codierdaten-Informationen für die angeforderte Verbindung Quelle %s zu Senke %s. Verbindung nicht hergestellt | 0 |
| 0xB7F8B3 | Video Verbindung: Fehler vom Video Switch %i beim Verbindungsversuch Quelle %s zu Senke %s. Verbindung nicht hergestellt | 1 |
| 0xB7F8B4 | Verbindung Head-Unit zum SDARS Antennenfuß: Leitungsunterbrechung | 0 |
| 0xB7F8B5 | Verbindung Head-Unit zum SDARS Antennenfuß: Kurzschluss | 0 |
| 0xB7F8B8 | Verbindung Head-Unit zum Bluetooth-Antennenfuß: Leitungsunterbrechung | 0 |
| 0xB7F8BB | Bluetooth nicht gestartet | 0 |
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
| 0xB7F8CD | Verbindung HU zum Antennenverstärker - Leitungsunterbrechung FM2-Antenne | 0 |
| 0xB7F8CE | Verbindung Antennenverstärker zu Antenne - Leitungsunterbrechung FM2-Antenne | 0 |
| 0xB7F8CF | Verbindung HU zum Antennenverstärker - Kurzschluss nach Masse FM2-Antenne | 0 |
| 0xB7F8D5 | USB-Verbindung zwischen Head-Unit und TCB: keine Verbindung | 0 |
| 0xB7F8DA | A4A: interner Steuergerätefehler (DRM-Chip defekt) | 0 |
| 0xB7F8DC | SDARS Modul nicht aktiv | 0 |
| 0xB7F8DD | Eine kritische Recovery funktion wurde aktiviert | 1 |
| 0xB7F8DE | Hardware-Fehler: ZIN Kommunikationsfehler | 1 |
| 0xB7F8DF | Hardware-Fehler: ZIN Interner Fehler | 1 |
| 0xB7F8E0 | Hardware-Fehler: CRC Fehler ZIN | 1 |
| 0xB7F8E1 | Hardware-Error: CID HW no LIN interface | 1 |
| 0xB7F8E2 | Hardware-Fehler: ZIN Dummy 2 | 1 |
| 0xB7F8E6 | USB-VBUS Verbindung Head-Unit zur USB Benutzer Schnittstelle2: Kurzschluss nach Masse | 0 |
| 0xB7F8FF | UWB Dummy HU | 0 |
| 0xE1C415 | IuK-CAN Physikalischer Busfehler | 0 |
| 0xE1C41E | IuK-CAN Control Module Bus OFF | 0 |
| 0xE1C43F | MOST: Empfänger hat Nachricht nicht abgenommen | 1 |
| 0xE1C440 | Reset | 0 |
| 0xE1C441 | MOST: Ringbruch | 1 |
| 0xE1C442 | Abschaltung Übertemperatur | 1 |
| 0xE1C443 | MOST-Steuergerät: Abschaltung Übertemperatur | 1 |
| 0xE1C444 | MOST: Ring wacht nicht auf | 1 |
| 0xE1C445 | MOST: Reset | 0 |
| 0xE1C447 | MOST: ein Steuergerät hat sich abgemeldet | 1 |
| 0xE1C448 | MOST: Istkonfiguration unvollständig | 1 |
| 0xE1C449 | MOST-Knoten:  Die gleiche Kombination von FBlockID und InstID wird von zwei unterschiedlichen MOST SG doppelt beim NWM angemeldet | 1 |
| 0xE1C45F | BODY-CAN Physikalischer Busfehler | 0 |
| 0xE1C468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xE1CBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xE1CC00 | Signal Drehgeschwindigkeit des Rades: nicht vorhanden | 1 |
| 0xE1CC01 | Signal Drehgeschwindigkeit des Rades: unplausibel | 1 |
| 0xE1CC04 | Externes Signal GierGeschwindigkeit: Fehler | 1 |
| 0xE1CC0A | Default GW Tabelle aktiv | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Gueltigkeit | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | Klemme R | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | Klemme 15 | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | Klemme 50 | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | Entertainment Mode | 0/1 | High | 0x10 | - | - | - | - |
| 0x0006 | Telefon Mode | 0/1 | High | 0x20 | - | - | - | - |
| 0x0007 | PORT_LINK_OFF_STATUS_00 | 0-n | High | 0x1 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0008 | PORT_LINK_OFF_STATUS_01 | 0-n | High | 0x2 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0009 | PORT_LINK_OFF_STATUS_02 | 0-n | High | 0x4 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000A | PORT_LINK_OFF_STATUS_03 | 0-n | High | 0x8 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000B | PORT_LINK_OFF_STATUS_04 | 0-n | High | 0x10 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000C | PORT_LINK_OFF_STATUS_05 | 0-n | High | 0x20 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000D | PORT_LINK_OFF_STATUS_06 | 0-n | High | 0x40 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000E | PORT_LINK_OFF_STATUS_07 | 0-n | High | 0x80 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000F | PORT_LINK_OFF_STATUS_08 | 0-n | High | 0x100 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0010 | PORT_LINK_OFF_STATUS_09 | 0-n | High | 0x200 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0011 | PORT_LINK_OFF_STATUS_10 | 0-n | High | 0x400 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0012 | PORT_LINK_OFF_STATUS_11 | 0-n | High | 0x800 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0013 | PORT_LINK_OFF_STATUS_12 | 0-n | High | 0x1000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0014 | PORT_LINK_OFF_STATUS_13 | 0-n | High | 0x2000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0015 | PORT_LINK_OFF_STATUS_14 | 0-n | High | 0x4000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0016 | PORT_LINK_OFF_STATUS_15 | 0-n | High | 0x8000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0017 | PORT_CRC_ERROR_COUNT | 0-n | High | 0xFF | PORT_CRC_ERROR_COUNT_1B_TAB | - | - | - |
| 0x0018 | PORT_00_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0019 | PORT_01_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001A | PORT_02_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001B | PORT_03_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001C | PORT_04_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001D | PORT_05_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001E | PORT_06_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001F | PORT_07_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0020 | PORT_08_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0021 | PORT_09_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0022 | PORT_10_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0023 | PORT_11_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0024 | PORT_12_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0025 | PORT_13_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0026 | PORT_14_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0027 | PORT_15_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0028 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_00 | 0-n | High | 0x0001 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0029 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_01 | 0-n | High | 0x0002 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002A | DETECTED_UNEXPECTED_LINK_STATUS_PORT_02 | 0-n | High | 0x0004 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002B | DETECTED_UNEXPECTED_LINK_STATUS_PORT_03 | 0-n | High | 0x0008 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002C | DETECTED_UNEXPECTED_LINK_STATUS_PORT_04 | 0-n | High | 0x0010 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002D | DETECTED_UNEXPECTED_LINK_STATUS_PORT_05 | 0-n | High | 0x0020 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002E | DETECTED_UNEXPECTED_LINK_STATUS_PORT_06 | 0-n | High | 0x0040 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002F | DETECTED_UNEXPECTED_LINK_STATUS_PORT_07 | 0-n | High | 0x0080 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0030 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_08 | 0-n | High | 0x0100 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0031 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_09 | 0-n | High | 0x0200 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0032 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_10 | 0-n | High | 0x0400 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0033 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_11 | 0-n | High | 0x0800 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0034 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_12 | 0-n | High | 0x1000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0035 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_13 | 0-n | High | 0x2000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0036 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_14 | 0-n | High | 0x4000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0037 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_15 | 0-n | High | 0x8000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0038 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0039 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003A | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003B | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003C | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003D | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003E | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003F | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0040 | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0041 | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0042 | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0043 | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0044 | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0045 | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0046 | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0047 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x1707 | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1708 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x1709 | MOSTMesHeader | Text | High | 6 | - | - | - | - |
| 0x170A | FOTTemp Celsius | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x170B | NPR | HEX | High | unsigned char | - | - | - | - |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x170D | MemMirror | Text | High | 74 | - | 1.0 | 1.0 | 0.0 |
| 0x170E | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1719 | AbilityToWake | 0-n | High | 0xFF | TAB_ABILITY_TO_WAKE_DOP | - | - | - |
| 0x171E | MOSTMesErrorCodeInfo | Text | High | 8 | - | - | - | - |
| 0x1721 | ID fuer Reset-Ursache | 0-n | High | 0xFF | TAB_RESET_REASON_DOP | - | - | - |
| 0x172D | MOSTMesOpType | Text | High | 9 | - | - | - | - |
| 0x1740 | FBlock- Identifier | HEX | High | unsigned char | - | - | - | - |
| 0x1741 | Instanz-Identifier | HEX | High | unsigned char | - | - | - | - |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | Text | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | - | - | - | - | - |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1754 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1755 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1756 | Signalqualität | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x1757 | Signalqualität | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x1758 | Signalqualität | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x1759 | CABLE_DIAG_STATE | 0-n | High | 0xFF | CABLE_DIAG_STATE_TAB | - | - | - |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
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
| 0x4224 | Videoquelle | 0-n | High | 0xFF | VIDEO_SOURCE | - | - | - |
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
| 0x4232 | Fahrzeugzustand | HEX | High | unsigned char | - | - | - | - |
| 0x4233 | Communication Failure to Tuner HW | 0-n | High | 0xFF | TUNER_HW_COMMUNICATION_FAILURE_REASON | - | - | - |
| 0x4234 | Reason for mounting the NAND writable | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4235 | Systemzeit in Sekunden seit Startup bis zur Unterspannung | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4236 | Bootloader oder Applikation | 0-n | High | 0xFF | BOOTLOADER_ODER_APPLIKATION | - | - | - |
| 0x4237 | CSM Error Code | 0-n | High | 0xFF | CSM_ERROR_CODE | - | - | - |
| 0x4238 | STANDARD_KISU | 0-n | High | 0xFF | TAB_STANDARD_KISU | - | - | - |
| 0x4239 | APPLICATION_ID | HEX | High | signed long | - | - | - | - |
| 0x423A | Counter | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4240 | CPU | 0-n | High | 0xFF | CPU | - | - | - |
| 0x4241 | FAHRZEUGGESCHWINDIGKEIT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4242 | GPS_LONGITUDE | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4243 | GPS_LATITUDE | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4244 | CUSTOMER_KISU | 0-n | High | 0xFF | TAB_CUSTOMER_KISU | - | - | - |
| 0x4245 | AMP_GYRO_CPU/OMAP5_HDD_DVD/BD_GPU_FOT_TEMP | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x4246 | SMART_DATEN | Text | High | 29 | - | - | - | - |
| 0x4247 | SMART_DATEN | Text | High | 29 | - | - | - | - |
| 0x4248 | RECOVERY_STEPS | 0-n | High | 0xFF | TAB_RECOVERY_STEPS | - | - | - |
| 0x4249 | PROCESS_NAME | Text | High | 64 | - | 1.0 | 1.0 | 0.0 |
| 0x424A | INSTRUCTION_POINTER | Text | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x424B | SIGNAL | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x424C | CODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x424D | THREAD_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x424E | CPU_HIGHRUNNER | Text | High | 255 | - | 1.0 | 1.0 | 0.0 |
| 0x424F | SIGNATUR_FALIURE_REASON | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4250 | WAKEUPREASON | 0-n | High | 0xFF | TAB_WAKEUPREASON | - | - | - |
| 0x4251 | HD_MALFUNC_RUNTIME_ERRCODE | 0-n | High | 0xFF | HD_MALFUNC_RUNTIME_ERRCODE | - | - | - |
| 0x4252 | TEMPERATURE_FOT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4253 | POWER_SEQUENCE_ERROR | 0-n | High | 0xFF | POWER_SEQUENCE_ERROR | - | - | - |
| 0x4254 | FIS_FAILURE_REASON | Text | High | 40 | - | - | - | - |
| 0x4255 | FILE_PATH | Text | High | 50 | - | 1.0 | 1.0 | 0.0 |
| 0x4256 | ERROR_CODE_LM | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4257 | GPS_HW_DEFECT | 0-n | High | 0xFF | GPS_HW_DEFECT | - | - | - |
| 0x4258 | YAW_VELOCITY_VEHICLE | 0-n | High | 0xFF | YAW_VELOCITY_VEHICLE | - | - | - |
| 0x4259 | PERSONAL_DATAS_ON_PD_ERR | 0-n | High | 0xFFFFFFFF | PERSONAL_DATAS_ON_PD_ERR | - | - | - |
| 0x4260 | PERSONAL_DATAS_OFF_PD_ERR | 0-n | High | 0xFF | PERSONAL_DATAS_OFF_PD_ERR | - | - | - |
| 0x4261 | PMADATA_WDGMSTATUS_PMA_WDGMMODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4262 | PMADATA_WDGMSTATUS_PMA_WDGMSUPERVISED_ENTITYSTATUS | Text | High | 5 | - | 1.0 | 1.0 | 0.0 |
| 0x4263 | G_RIP_DATA_REASON | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4264 | G_RIP_DATA_TASK_ID | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4265 | G_RIP_DATA_DELTA_TICKS | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4266 | ERROR_CODE | HEX | High | unsigned char | - | - | - | - |
| 0x4267 | Vehicle Controller | 0-n | High | 0xFF | CONTROLLER | - | - | - |
| 0x4268 | ADDITIONAL_INFORMATION | Text | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x426B | PROC_NAME | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x426C | CRASH_ID | Text | Low | 8 | - | - | - | - |
| 0x426D | TABLET_MAC_ADDRESS | Text | High | 17 | - | 1.0 | 1.0 | 0.0 |
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
| F_HLZ | ja |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x100903 | Ursache keine Kommunikation mit der Tuner Hardware | 0 |
| 0x100904 | Ursache keine Kommunikation mit der DAB Tuner Hardware | 0 |
| 0x100A00 | Persistenzbereich Flash konnte nicht  gemountet werden | 0 |
| 0x100A01 | Persistente SWT Daten gingen verloren | 0 |
| 0x100C01 | Reset: Ursache ONOFF_ERROR | 0 |
| 0x100C02 | Reset: Ursache ONOFF_EMERGENCY_ERROR | 0 |
| 0x100C03 | Reset: Ursache HMI_DIED | 0 |
| 0x100D01 | FZM-Botschaft Fehler | 0 |
| 0x101200 | SDARS Modul: interner Reset | 0 |
| 0x101201 | SDARS Modul: Kommunikationsfehler | 0 |
| 0x101500 | Ursache CD Laufwerk Fehler | 0 |
| 0x101501 | Ursache Lad-  Auswurffehler | 0 |
| 0x101600 | Ursache Medium Detektierungsfehler | 0 |
| 0x10170F | Eine verbaute PIA-Funktion hat die Anfrage nach ihrem Einstellwert nicht beantwortet | 0 |
| 0x101710 | Eine PIA-Funktion, die bei der Konfigurationsanfrage nicht gefunden wurde, hat einen Einstellwert geschickt | 0 |
| 0x101711 | Eine verbaute PIA-Funktion hat das Setzen ihres Einstellwerts nicht bestätigt | 0 |
| 0x101712 | Eine PIA-Funktion meldet ihre Konfigurationsinformationen obwohl sie nicht dazu aufgefordert wurde | 0 |
| 0x101713 | Eine PIA-Funktion liefert korrupte Konfigurationsinformationen | 0 |
| 0x101714 | Für eine PIA-ID wurden mehrere Telegramme mit unterschiedlichen Konfigurationsinformationen geliefert | 0 |
| 0x101717 | Video Watch Dog wurde ausgelöst | 0 |
| 0x101718 | CSM Error | 0 |
| 0x101719 | Abbruch des laufenden PIA-Ablaufs wegen Fahrzeugzustandsänderung | 0 |
| 0x101721 | USB-Verbindung zwischen Headunit zum TCB: Keine Antwort auf Ping | 0 |
| 0x101724 | Status_Funkschlüssel vom CAS-Steuergerät nicht erhalten | 0 |
| 0x101742 | Eine Recovery funktion wurde aktiviert | 0 |
| 0x101752 | Eindeutiges Erkennen der aktuellen HW ID nicht möglich | 0 |
| 0x101753 | Wrong NGTP Keytable used | 0 |
| 0x101769 | file system integrity check failure | 0 |
| 0x101770 | Calculation error of the navigation computer | 0 |
| 0x101775 | CDCE_FAILURE | 0 |
| 0x101777 | Reset: Prozess abgestürzt oder abgebrochen | 0 |
| 0x10FFFF | UWB Dummy | 0 |
| 0x230004 | Kommunikation Einschlafkoordinator: Zeitüberschreitung | 1 |
| 0x230008 | Kommunikation Einschlafkoordinator: Nachricht unplausibel | 1 |
| 0x8BAC04 | CAN_E_TIMEOUT | 0 |
| 0x8BAC05 | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x8BAC08 | CANIF_E_STOPPED | 0 |
| 0x8BAC09 | CANNM_E_CANIF_TRANSMIT_ERROR | 0 |
| 0x8BAC0A | CANSM_E_BUSOFF_NETWORK_0 | 0 |
| 0x8BAC10 | CANNM_E_INIT_FAILED | 0 |
| 0x8BAC11 | CANTP_E_COMM | 0 |
| 0x8BAC12 | CNM_E_NETWORK_TIMEOUT | 0 |
| 0x8BAC13 | CNM_E_TX_PATH_FAILED | 0 |
| 0x8BAC24 | COMM_E_NET_START_IND_CHANNEL_0 | 0 |
| 0x8BAC26 | COMM_E_START_Tx_TIMEOUT_C0 | 0 |
| 0x8BAC27 | CANNM_E_NETWORK_TIMEOUT | 0 |
| 0x8BAC28 | COMM_E_STOP_Tx_TIMEOUT_C0 | 0 |
| 0x8BAC43 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x8BAC50 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x8BAC53 | FLS_E_COMPARE_FAILED | 0 |
| 0x8BAC55 | FLS_E_ERASE_FAILED | 0 |
| 0x8BAC57 | FLS_E_READ_FAILED | 0 |
| 0x8BAC59 | FLS_E_WRITE_FAILED | 0 |
| 0x8BAC63 | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x8BAC66 | MCU_E_CLOCK_FAILURE | 0 |
| 0x8BAC67 | MCU_E_LOCK_FAILURE | 0 |
| 0x8BAC70 | NVM_E_INTEGRITY_FAILED | 0 |
| 0x8BAC73 | NVM_E_REQ_FAILED | 0 |
| 0x8BAC83 | WDG_E_DISABLE_REJECTED | 0 |
| 0x8BAC84 | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x8BAC85 | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x8BAC86 | WDGM_E_SET_MODE | 0 |
| 0x8BAC8B | WDG_E_MISS_TRIGGER | 0 |
| 0x930000 | Timing-Master: kann Kanal nicht reservieren; Resource Allocation Table (RAT) ist voll | 1 |
| 0x930001 | Versorgungsspannung: Mindestwert unterschritten | 1 |
| 0x930002 | Sender-Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 1 | 0 |
| 0x930003 | Sender-Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 2 | 0 |
| 0x930004 | Diagnosemaster-Client: Datenzwischenablage im Active Response Handler übergelaufen | 1 |
| 0x930005 | Diagnosemaster-Client: Telegramm Systemzeit nicht fristgerecht erkannt | 1 |
| 0x930006 | MOST: Licht geht unerwartet aus | 0 |
| 0x930007 | MOST: Synchronisation (Phase Locked Loop) arbeitet nicht korrekt | 0 |
| 0x93000B | Audiosenke: kann nicht auf Kanal verbinden | 1 |
| 0x93000C | Audioquelle: kann Kanal nicht fristgerecht reservieren (allokieren) | 1 |
| 0x93000D | Audioquelle: kann Kanal nicht fristgerecht freigeben (deallokieren) | 1 |
| 0x93000E | Audiosenke: kann Kanal nicht fristgerecht freigeben | 1 |
| 0x93000F | MOST-Knoten: mindestens ein Funktionsblock abgemeldet | 1 |
| 0x930010 | MOST-Knoten: die DefaultRegistry ist nicht aktuell | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Gueltigkeit | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | Klemme R | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | Klemme 15 | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | Klemme 50 | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | Entertainment Mode | 0/1 | High | 0x10 | - | - | - | - |
| 0x0006 | Telefon Mode | 0/1 | High | 0x20 | - | - | - | - |
| 0x0007 | PORT_LINK_OFF_STATUS_00 | 0-n | High | 0x1 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0008 | PORT_LINK_OFF_STATUS_01 | 0-n | High | 0x2 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0009 | PORT_LINK_OFF_STATUS_02 | 0-n | High | 0x4 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000A | PORT_LINK_OFF_STATUS_03 | 0-n | High | 0x8 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000B | PORT_LINK_OFF_STATUS_04 | 0-n | High | 0x10 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000C | PORT_LINK_OFF_STATUS_05 | 0-n | High | 0x20 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000D | PORT_LINK_OFF_STATUS_06 | 0-n | High | 0x40 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000E | PORT_LINK_OFF_STATUS_07 | 0-n | High | 0x80 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000F | PORT_LINK_OFF_STATUS_08 | 0-n | High | 0x100 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0010 | PORT_LINK_OFF_STATUS_09 | 0-n | High | 0x200 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0011 | PORT_LINK_OFF_STATUS_10 | 0-n | High | 0x400 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0012 | PORT_LINK_OFF_STATUS_11 | 0-n | High | 0x800 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0013 | PORT_LINK_OFF_STATUS_12 | 0-n | High | 0x1000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0014 | PORT_LINK_OFF_STATUS_13 | 0-n | High | 0x2000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0015 | PORT_LINK_OFF_STATUS_14 | 0-n | High | 0x4000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0016 | PORT_LINK_OFF_STATUS_15 | 0-n | High | 0x8000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0017 | PORT_CRC_ERROR_COUNT | 0-n | High | 0xFF | PORT_CRC_ERROR_COUNT_1B_TAB | - | - | - |
| 0x0018 | PORT_00_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0019 | PORT_01_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001A | PORT_02_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001B | PORT_03_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001C | PORT_04_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001D | PORT_05_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001E | PORT_06_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001F | PORT_07_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0020 | PORT_08_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0021 | PORT_09_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0022 | PORT_10_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0023 | PORT_11_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0024 | PORT_12_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0025 | PORT_13_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0026 | PORT_14_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0027 | PORT_15_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0028 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_00 | 0-n | High | 0x0001 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0029 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_01 | 0-n | High | 0x0002 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002A | DETECTED_UNEXPECTED_LINK_STATUS_PORT_02 | 0-n | High | 0x0004 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002B | DETECTED_UNEXPECTED_LINK_STATUS_PORT_03 | 0-n | High | 0x0008 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002C | DETECTED_UNEXPECTED_LINK_STATUS_PORT_04 | 0-n | High | 0x0010 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002D | DETECTED_UNEXPECTED_LINK_STATUS_PORT_05 | 0-n | High | 0x0020 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002E | DETECTED_UNEXPECTED_LINK_STATUS_PORT_06 | 0-n | High | 0x0040 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002F | DETECTED_UNEXPECTED_LINK_STATUS_PORT_07 | 0-n | High | 0x0080 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0030 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_08 | 0-n | High | 0x0100 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0031 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_09 | 0-n | High | 0x0200 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0032 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_10 | 0-n | High | 0x0400 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0033 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_11 | 0-n | High | 0x0800 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0034 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_12 | 0-n | High | 0x1000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0035 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_13 | 0-n | High | 0x2000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0036 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_14 | 0-n | High | 0x4000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0037 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_15 | 0-n | High | 0x8000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0038 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0039 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003A | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003B | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003C | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003D | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003E | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003F | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0040 | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0041 | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0042 | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0043 | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0044 | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0045 | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0046 | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0047 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x1707 | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1708 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x1709 | MOSTMesHeader | Text | High | 6 | - | - | - | - |
| 0x170A | FOTTemp Celsius | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x170B | NPR | HEX | High | unsigned char | - | - | - | - |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x170D | MemMirror | Text | High | 74 | - | 1.0 | 1.0 | 0.0 |
| 0x170E | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1719 | AbilityToWake | 0-n | High | 0xFF | TAB_ABILITY_TO_WAKE_DOP | - | - | - |
| 0x171E | MOSTMesErrorCodeInfo | Text | High | 8 | - | - | - | - |
| 0x1721 | ID fuer Reset-Ursache | 0-n | High | 0xFF | TAB_RESET_REASON_DOP | - | - | - |
| 0x172D | MOSTMesOpType | Text | High | 9 | - | - | - | - |
| 0x1740 | FBlock- Identifier | HEX | High | unsigned char | - | - | - | - |
| 0x1741 | Instanz-Identifier | HEX | High | unsigned char | - | - | - | - |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | Text | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | - | - | - | - | - |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1754 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1755 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1756 | Signalqualität | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x1757 | Signalqualität | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x1758 | Signalqualität | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x1759 | CABLE_DIAG_STATE | 0-n | High | 0xFF | CABLE_DIAG_STATE_TAB | - | - | - |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
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
| 0x4224 | Videoquelle | 0-n | High | 0xFF | VIDEO_SOURCE | - | - | - |
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
| 0x4232 | Fahrzeugzustand | HEX | High | unsigned char | - | - | - | - |
| 0x4233 | Communication Failure to Tuner HW | 0-n | High | 0xFF | TUNER_HW_COMMUNICATION_FAILURE_REASON | - | - | - |
| 0x4234 | Reason for mounting the NAND writable | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4235 | Systemzeit in Sekunden seit Startup bis zur Unterspannung | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4236 | Bootloader oder Applikation | 0-n | High | 0xFF | BOOTLOADER_ODER_APPLIKATION | - | - | - |
| 0x4237 | CSM Error Code | 0-n | High | 0xFF | CSM_ERROR_CODE | - | - | - |
| 0x4239 | APPLICATION_ID | HEX | High | signed long | - | - | - | - |
| 0x423A | Counter | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4240 | CPU | 0-n | High | 0xFF | CPU | - | - | - |
| 0x4245 | AMP_GYRO_CPU/OMAP5_HDD_DVD/BD_GPU_FOT_TEMP | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x4246 | SMART_DATEN | Text | High | 29 | - | - | - | - |
| 0x4247 | SMART_DATEN | Text | High | 29 | - | - | - | - |
| 0x4248 | RECOVERY_STEPS | 0-n | High | 0xFF | TAB_RECOVERY_STEPS | - | - | - |
| 0x4249 | PROCESS_NAME | Text | High | 64 | - | 1.0 | 1.0 | 0.0 |
| 0x424A | INSTRUCTION_POINTER | Text | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x424B | SIGNAL | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x424C | CODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x424D | THREAD_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x424E | CPU_HIGHRUNNER | Text | High | 255 | - | 1.0 | 1.0 | 0.0 |
| 0x424F | SIGNATUR_FALIURE_REASON | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4250 | WAKEUPREASON | 0-n | High | 0xFF | TAB_WAKEUPREASON | - | - | - |
| 0x4251 | HD_MALFUNC_RUNTIME_ERRCODE | 0-n | High | 0xFF | HD_MALFUNC_RUNTIME_ERRCODE | - | - | - |
| 0x4252 | TEMPERATURE_FOT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4253 | POWER_SEQUENCE_ERROR | 0-n | High | 0xFF | POWER_SEQUENCE_ERROR | - | - | - |
| 0x4254 | FIS_FAILURE_REASON | Text | High | 40 | - | - | - | - |
| 0x4255 | FILE_PATH | Text | High | 50 | - | 1.0 | 1.0 | 0.0 |
| 0x4256 | ERROR_CODE_LM | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4257 | GPS_HW_DEFECT | 0-n | High | 0xFF | GPS_HW_DEFECT | - | - | - |
| 0x4258 | YAW_VELOCITY_VEHICLE | 0-n | High | 0xFF | YAW_VELOCITY_VEHICLE | - | - | - |
| 0x4259 | PERSONAL_DATAS_ON_PD_ERR | 0-n | High | 0xFFFFFFFF | PERSONAL_DATAS_ON_PD_ERR | - | - | - |
| 0x4260 | PERSONAL_DATAS_OFF_PD_ERR | 0-n | High | 0xFF | PERSONAL_DATAS_OFF_PD_ERR | - | - | - |
| 0x4261 | PMADATA_WDGMSTATUS_PMA_WDGMMODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4262 | PMADATA_WDGMSTATUS_PMA_WDGMSUPERVISED_ENTITYSTATUS | Text | High | 5 | - | 1.0 | 1.0 | 0.0 |
| 0x4263 | G_RIP_DATA_REASON | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4264 | G_RIP_DATA_TASK_ID | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4265 | G_RIP_DATA_DELTA_TICKS | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4266 | ERROR_CODE | HEX | High | unsigned char | - | - | - | - |
| 0x4268 | ADDITIONAL_INFORMATION | Text | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x426B | PROC_NAME | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x426C | CRASH_ID | Text | Low | 8 | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xYZ | ERROR_NO_SVK |
| 0xXW | ERROR_MISSING_ARGUMENT |
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

### RES_0X400A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AMB_SENSOR_WERT | lx | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ambient brightness of the local CID sensor (Lux). Range: [0x0000¿0x03E8] 0¿1000 Lux 0xFFFF invalid or sensor not implemented |
| STAT_BL_TEMP_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Currently measured temperature of the backlight temperature sensor. Range: [0xD8¿0x78] -40°C bis  120°C 0x80 -128°C  Sensor Failure |
| STAT_VCC_VOLTAGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vcc voltage of the CID in steps of 1/10 V Range: [0x0000¿0xFFFE]  0xFFFF invalid |
| STAT_BACKLIGT_DRIVER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Error status output pins of the backlight LED. Range: [0x00¿0x03] 0xFF invalid |
| STAT_INT_STATUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Contents of the Indigo register ¿IntStatus' Range: [0x0000¿0xFFFF] |

### RES_0X400D_D

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

### RES_0XA008_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WAVEBAND | - | - | + | 0-n | - | unsigned char | - | TWaveband | 1.0 | 1.0 | 0.0 | aktuelles Frequenzband: siehe Tabelle TWaveband |

### RES_0XA00A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEARCHING_PROCESS | - | - | + | 0-n | - | unsigned char | - | TSearchingProcess | 1.0 | 1.0 | 0.0 | This status must be reinitialised to 0 when the Head-Unit starts up (normal wake up, reset). |
| STAT_NAME_TEXT | - | - | + | TEXT | - | string[8] | - | - | 1.0 | 1.0 | 0.0 | PS name of the best station |
| STAT_PI_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Program Identification of the best station |
| STAT_FIELDSTRENGTH_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fieldstrength of the best station |
| STAT_QUALITY_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Quality of the best station |

### RES_0XA00B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENTSOURCE | - | - | + | 0-n | - | unsigned char | - | TEntSource | 1.0 | 1.0 | 0.0 | die eingestellte Entertainmentquelle |
| STAT_DESIRED_ENTSOURCE | - | - | + | 0-n | - | unsigned char | - | TEntSourceStatus | 1.0 | 1.0 | 0.0 | gibt zurück, ob die letzte einzustellende Entertainmentquelle verfügbar war. |

### RES_0XA00E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NAVI_SIMULATION | - | - | + | 0-n | - | unsigned char | - | TNaviSimulationModeActivationStatus | 1.0 | 1.0 | 0.0 | - |

### RES_0XA018_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt an, welche Antenne(n) getestet wurden. |
| STAT_TEST_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TTESTSTATUS | - | - | - | Gibt den Status des gesamten Tests oder der entsprechenden Antennen wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
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

### RES_0XA01C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HERSTELLUNG_VIDEOVERBINDUNG | - | - | + | 0-n | - | unsigned char | - | THerstellungStatus | 1.0 | 1.0 | 0.0 | Gibt 0 wieder, wenn: - Keine Videoverbindung angefordert wurde. - Nach dem Herunterfahren oder Neustart des Steuergerätes. - Die Verbindung wieder per Diagnose abgebaut bzw. auf regulären Betrieb zurückgeschaltet wurde. |
| STAT_HERSTELLUNG_FEHLER | - | - | + | 0-n | - | unsigned char | - | THerstellungFehler | 1.0 | 1.0 | 0.0 | Gibt 0 wieder, wenn: - Keine Videoverbindung angefordert wurde. - Nach dem Herunterfahren oder Neustart des Steuergerätes. - Die Verbindung wieder per Diagnose abgebaut bzw. auf regulären Betrieb zurückgeschaltet wurde. - Wenn STAT_HERSTELLUNG_VIDEOVERBINDUNG den Wert 0,1 oder 2 aufweist. |
| STAT_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Ausgewählte Quelle: Tabelle TVideoQuelle |
| STAT_SENKEN | - | - | + | 0-n | - | unsigned int | - | TVideoSenke | 1.0 | 1.0 | 0.0 | Ausgwählte Senke: Bitkombination: Tabelle TVideoSenke |

### RES_0XA01D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt nach Tabelle TVideoQuelle bzw. TEingangVideoSwitch an, welche Quelle(n) getestet wurde(n). |
| STAT_TEST_VIDEOEINGANG | - | - | + | 0-n | - | unsigned char | - | TTESTSTATUS | - | - | - | Gibt den Status des gesamten Tests oder der entsprechenden Quelle(n) wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
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

### RES_0XA01E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAU_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TVerbauRoutine | - | - | - | Ausgeführte Testroutine(n). |
| STAT_TEST_VERBAU | - | - | + | 0-n | - | unsigned char | - | TTESTSTATUS | - | - | - | Gibt den Status des Verbautests wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |

### RES_0XA021_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREQUENZ_WERT | - | - | + | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Integer, 20..20 000 [Hz] Bei Verstärkern: 8 000 ... 20 000 [Hz] |
| STAT_LEVEL_WERT | - | - | + | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Bei Headunits: Hex-Wert, von 0x00 lückenlos bis 0x7F, Bei Verstärkern: Integer, -50..0 [dB] |
| STAT_KANAL | - | - | + | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | bezeichnet den Kanal, auf dem gemessen wurde. |
| STAT_MESSDAUER_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | gibt die Dauer der Messung wieder. Bereich: 50-1000ms Bei Verstärkern: Bereich: 800-3000ms |
| STAT_LAUTSPRECHER_IMPEDANZMESSUNG | - | - | + | 0-n | - | unsigned char | - | TTESTSTATUS | - | - | - | Gibt den Status des gesamten Tests oder der entsprechenden Kanäle wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
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

### RES_0XA022_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELBSTTEST_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TSelbsttestRoutine | - | - | - | Routine(n), die getestet wurde(n). Tabelle  TSelbsttestRoutine |
| STAT_SELBSTTEST | - | - | + | 0-n | - | unsigned char | - | TTESTSTATUS | - | - | - | Gibt den Status des Tests wieder. |

### RES_0XA024_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MENU_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID des Menüs. |
| STAT_MENUE_ITEM_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID des Eintrages im Menü |
| STAT_MENU_RSE_RIGHT_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID des Menü der zweiten MMI, z.B. RSE rechter Bildschirm. |
| STAT_MENUE_ITEM_RSE_RIGHT_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID des Eintrages im Menü der zweiten MMI, z.B. RSE rechter Bildschirm |

### RES_0XA025_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LANGUAGE | - | - | + | 0-n | - | unsigned char | - | TAB_LANGUAGE | - | - | - | Liest die derzeit eingestellte MMI Sprache. |

### RES_0XA02E_R

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

### RES_0XA02F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROVISIONING | - | - | + | 0-n | - | unsigned char | - | TProvisioningStatus | - | - | - | Status des Provisionierungsprozess Werte gemäß Tabelle TProvisioningStatus |

### RES_0XA039_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEVEL_WERT | + | - | - | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F, Nicht unterstützte Werte (Stereo: 0x3F) dürfen nicht zu Fehlermeldungen führen. Sondern die für das Lautsprechersystem nächstmöglich kleinere verfügbare Lautstärke wird eingestellt.   Bei manchen sekundären Lautstärken wie Navi-Out wird die Lautstärke relativ angegeben, z.B: [-11;11]  Bei Verstärkern: Integer, -96..0 [dB] |

### RES_0XA03A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NAVI_MAP | - | - | + | 0-n | - | unsigned char | - | TNaviMapStatus | 1.0 | 1.0 | 0.0 | Status Kunden Navigation Karte |

### RES_0XA03C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER | - | - | + | 0-n | - | unsigned char | - | TLuefterStatus | 1.0 | 1.0 | 0.0 | Status des Lüfters. |
| STAT_LUEFTER_DREHZAHL_WERT | - | - | + | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Frequenz des Lüfters in Hz. (Wenn nicht abfragbar, wird 0xFFFF zurückgegeben) |

### RES_0XA03D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_FACTORY_DEFAULTS | - | - | + | 0-n | - | unsigned char | - | TSdarsFactorySuccessful | 1.0 | 1.0 | 0.0 | SDARS Factory Defaults |

### RES_0XA03E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_GENERATOR_FREQUENCY_LEFT_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Einheit [10Hz] Dmait Bereich 10Hz bis 15990Hz |
| STAT_SDARS_GENERATOR_FREQUENCY_RIGHT_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Einheit [10Hz] Dmait Bereich 10Hz bis 15990Hz |

### RES_0XA03F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEARCHING_PROCESS_STATUS_DAB | - | - | + | 0-n | - | unsigned char | - | TSearchingProcess | 1.0 | 1.0 | 0.0 | - |
| STAT_ENSEMBLE_NAME_TEXT | - | - | + | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Label of active ensemble. |
| STAT_ENSEMBLE_ID_TEXT | - | - | + | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ensemble Identification |
| STAT_ENSEMBLE_BER_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Bit Error Rate of active ensemble |
| STAT_SERVICE_NAME_TEXT | - | - | + | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Name of active service (first service of ensemble) |

### RES_0XA045_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEARCHING_PROCESS_STATUS | - | - | + | 0-n | - | unsigned char | - | TSearchingProcess | 1.0 | 1.0 | 0.0 | Tabelle TSearchingProcess |
| STAT_NAME_TEXT | - | - | + | TEXT | - | string[8] | - | - | 1.0 | 1.0 | 0.0 | PS name of the best station |
| STAT_PI_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Program Identification of the best station |
| STAT_FIELDSTRENGTH_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fieldstrength of the best station: Range: 0&255 |
| STAT_QUALITY_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Quality of the best station: Range: 0&255 |

### RES_0XA048_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT | - | - | + | 0-n | - | unsigned char | - | TAB_BLUETOOTH_STATUS | - | - | - | liest den Bluetooth Status aus |

### RES_0XA049_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT_ERKENNUNGSMODUS | - | - | + | 0-n | - | unsigned char | - | TBluetoothDiscoveryModeStatus | 1.0 | 1.0 | 0.0 | Liest den Status des Bluetooth Erkennungsmodus |

### RES_0XA05A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REMOVE_CUSTOMER_UPDATES | - | - | + | 0-n | high | unsigned char | - | TSTAT_REMOVE_CUSTOMER_UPDATES | 1.0 | 1.0 | 0.0 | Entfernen aller Benutzer Updates |

### RES_0XA06A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_USB_TEST_TEL_KDZ | - | - | + | 0-n | - | unsigned char | - | TUsbTestStatus | 1.0 | 1.0 | 0.0 | Ergebnis des USB Schnittstelle Tests |
| STAT_VENDORID_INT_TEL_KDZ_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die vorgegebene VendorID von STEUERN_USB_TEST_TEL für das Gerät von der USB Schnittstelle ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_PRODUCTID_INT_TEL_KDZ_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die vorgegebene ProductID von STEUERN_USB_TEST_TEL für das Gerät von der USB Schnittstelle ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_VENDORID_REC_TEL_KDZ_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die erkannte VendorID des Gerätes von der USB Schnittstelle ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_PRODUCTID_REC_TEL_KDZ_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die erkannte ProductID des Gerätes von der USB Schnittstelle ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_VENDORSTRING_KDZ_REC_TEXT | - | - | + | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Hier wird der erkannte VendorString des Gerätes von der USB Schnittstelle ausgegeben. ACHTUNG: Rückgabe erfolgt als String. |
| STAT_USB_TEST_TEL_SIA | - | - | + | 0-n | - | unsigned char | - | TUsbTestStatus | 1.0 | 1.0 | 0.0 | Ergebnis des Snap In Adpater Tests |
| STAT_VENDORID_INT_TEL_SIA_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die vorgegebene VendorID von STEUERN_USB_TEST_PHONE ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_PRODUCTID_INT_TEL_SIA_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die vorgegebene ProductID von STEUERN_USB_TEST_TEL für das Telefon vom Snap In Adapter ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_VENDORID_REC_TEL_SIA_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die erkannte VendorID des Telefons vom Snap In Adapter ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_PRODUCTID_REC_TEL_SIA_WERT | - | - | + | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hier wird die erkannte ProductID des Telefons vom Snap In Adapter ausgegeben. ACHTUNG: Rückgabe erfolgt als vierstelliger Hex-String ohne 0x vorangestellt. BEISPIEL: A1FB |
| STAT_VENDORSTRING_SIA_REC_TEXT | - | - | + | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Hier wird der erkannte VendorString für das Telefon vom Snap In Adapter ausgegeben. ACHTUNG: Rückgabe erfolgt als String. |

### RES_0XA082_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_DATABASES | - | - | + | 0-n | high | unsigned char | - | TProcessStatus | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TProcessStatus |

### RES_0XA083_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_PIA_SETTINGS | - | - | + | 0-n | high | unsigned char | - | TProcessStatus | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TProcessStatus |

### RES_0XA0AA_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_ACTIVATION | - | - | + | 0-n | high | unsigned char | - | TAB_ONOFF | 1.0 | 1.0 | 0.0 | gibt den Zustand des SDARS Moduls anhang TAB_ONOFF an |

### RES_0XA0B5_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_GENERATOR_FREQUENCY_SXM_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Frequency that is currently active on the both channels  Range : 0 to 255 Frq in 100 Hz steps  0 = frequency generator off; 1 = 100Hz tone; 2 = 200Hz tone ¿. |

### RES_0XD003_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KANAL | 0-n | - | unsigned long | - | TAudioKanal | 1.0 | 1.0 | 0.0 | Kanalnummer |

### RES_0XD00A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MEMORYSPACE_FLASH_KBYTE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Flashspeicher in kByte |
| STAT_FREE_MEMORYSPACE_FLASH_KBYTE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | freier Flashspeicher |
| STAT_FREE_MEMORYSPACE_FLASH_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | freier Flashspeicher in % |
| STAT_MEMORYSPACE_RAM_KBYTE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RAM Speicher in kByte |
| STAT_FREE_MEMORYSPACE_RAM_KBYTE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | freier RAM Speicher in kByte |
| STAT_FREE_MEMORYSPACE_RAM_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | freier RAM Speicher in % |

### RES_0XD00B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VIN_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | VIN: Fahrgestellnummer lang Vollständige VIN des Fahrzeugs |
| STAT_HARDWARE_LIEFERUNG_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | HLI: Hardware Lieferung ID |
| STAT_SOFTWARE_LIEFERUNG_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | SOLI: Software Lieferung ID |
| STAT_ECU_SW_VID_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | ECU_SW_VID siehe Software Version ID Version 2.2. Beispiel: SD-B71200;TE-0A12B7-B712;MP-0A12C3-B712;PI-0A1001-B712 |

### RES_0XD00C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAUTE_LAUFWERKE | 0-n | - | unsigned int | - | TLaufwerk | - | - | - | Liest aus, welche Laufwerke verbaut sind. |
| STAT_VENDORID_TAPE_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_TAPE_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_TAPE_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_CD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_CD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_CD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_DVD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_DVD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_DVD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_MD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_MD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_MD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_HDD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_HDD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_HDD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_USB_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_USB_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_USB_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_FLASHSPEICHER_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_FLASHSPEICHER_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_FLASHSPEICHER_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |

### RES_0XD00D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREQUENZ_WERT | kHz | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die derzeit eingestellte Frequenz im Bereich 150 - 108000 [kHz] |

### RES_0XD00E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TP | 0-n | - | unsigned char | - | TTp | 1.0 | 1.0 | 0.0 | Gibt den Status der TP Funktion als Integer wieder. |
| STAT_AF | 0-n | - | unsigned char | - | TAf | 1.0 | 1.0 | 0.0 | Gibt den Status der AF Funktion als Integer wieder. |
| STAT_RDS | 0-n | - | unsigned char | - | TRds | 1.0 | 1.0 | 0.0 | Gibt den Status der RDS Funktion als Integer wieder. |

### RES_0XD010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUALITY_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Werte zwischen 0..15 Dies ist der für AF-Tracking verwendete Wert, wobei 15 bester Qualität entspricht. |
| STAT_FIELDSTRENGTH_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Werte zwischen 0..15 Dies entspricht 0..60 dBµV in Schritten von 4dB. |
| STAT_ANT_PW | 0-n | - | unsigned char | - | TRadOnLead | 1.0 | 1.0 | 0.0 | gibt den Status der Antennenstromversorgung wieder. |
| STAT_FIELDSTRENGTH_EXACT_WERT | dBµV | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Werte zwischen 0..60 Dies entspricht 0..60 dBµV in Schritten von 1dB. Rückgabe von 255, wenn keine Messung möglich. |
| STAT_FREQUENZ_WERT | kHz | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die derzeit eingestellte Frequenz im Bereich 150 - 108000 [kHz] |

### RES_0XD011_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TMC | 0-n | - | unsigned char | - | TTmcActivationState | 1.0 | 1.0 | 0.0 | Status des TMC |

### RES_0XD014_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEMUTE_SOURCE1 | 0-n | - | unsigned char | - | TSourceDemuteStatus | 1.0 | 1.0 | 0.0 | Gibt den eingestellten Mute-Modus zurück: Für Source1 sind nur die Werte 0-3 gültig. |
| STAT_DEMUTE_SOURCE2 | 0-n | - | unsigned char | - | TSourceDemuteStatus | 1.0 | 1.0 | 0.0 | Gibt den eingestellten Mute-Modus zurück: Für Source2 sind nur die Werte 4-5 gültig. Bei Headunits wird hier 255 zurückgeliefert. |

### RES_0XD01A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT_GERAETEADRESSE_DATA | DATA | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | Liefert die Adresse des Bluetooth Gerätes |

### RES_0XD01C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT_GERAETENAME_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Liest den Bluetooth Gerätenamen |

### RES_0XD01D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BT_ADR_DEV_1_DATA | DATA | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | Geräteadresse von Gerät 1 |
| STAT_BT_ADR_DEV_2_DATA | DATA | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | Geräteadresse von Gerät 2 |
| STAT_BT_ADR_DEV_3_DATA | DATA | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | Geräteadresse von Gerät 3 |
| STAT_BT_ADR_DEV_4_DATA | DATA | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | Geräteadresse von Gerät 4 |

### RES_0XD01E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HISTORY_1_KILOMETER_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei der Operation 1. Historyeintrag  0xFFFFFFFF für ungültig |
| STAT_HISTORY_1_ZEIT_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit YYYY-MM-DD_HH:MM 1. Historyeintrag |
| STAT_HISTORY_1_TYP | 0-n | - | unsigned char | - | TSoftwareUpdateTyp | - | - | - | Typ der Operation 1. Historyeintrag |
| STAT_HISTORY_1_SWIP_SGBM_IDENTIFIER_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe SGBM-Nummer der SWIP 1. Historyeintrag |
| STAT_HISTORY_1_SWIP_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe der Version der SWIP 1. Historyeintrag |
| STAT_HISTORY_1_NEW_SW_VID_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Neue Steuergeräte Software Version ID  Beispiel:    SD-B71200;TE-0A12B7-B712;MP-0A12C3-B712;PI-0A1001-B712 1. Historyeintrag |
| STAT_HISTORY_1_FLASHSPEICHER_WERT | kBytes | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Flashspeicher, der für Updates nach dem Update zur Verfügung steht (0xff ff ff ff wenn unbekannt) 1. Historyeintrag  Einheit: kBytes |
| STAT_HISTORY_1_ERROR_CODE | 0-n | - | unsigned char | - | TSoftwareUpdateErrorCode | 1.0 | 1.0 | 0.0 | Software Update Fehlercode 1. Historyeintrag |
| STAT_HISTORY_2_KILOMETER_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei der Operation 2. Historyeintrag  0xFFFFFFFF für ungültig |
| STAT_HISTORY_2_ZEIT_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit YYYY-MM-DD_HH:MM 2. Historyeintrag |
| STAT_HISTORY_2_TYP | 0-n | - | unsigned char | - | TSoftwareUpdateTyp | 1.0 | 1.0 | 0.0 | Typ der Operation 2. Historyeintrag |
| STAT_HISTORY_2_SWIP_SGBM_IDENTIFIER_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe SGBM-Nummer der SWIP 2. Historyeintrag |
| STAT_HISTORY_2_SWIP_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe der Version der SWIP 2. Historyeintrag |
| STAT_HISTORY_2_NEW_SW_VID_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Neue Steuergeräte Software Version ID  Beispiel:    SD-B71200;TE-0A12B7-B712;MP-0A12C3-B712;PI-0A1001-B712 2. Historyeintrag |
| STAT_HISTORY_2_FLASHSPEICHER_WERT | kBytes | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Flashspeicher, der für Updates nach dem Update zur Verfügung steht (0xff ff ff ff wenn unbekannt) 2. Historyeintrag  Einheit: kBytes |
| STAT_HISTORY_2_ERROR_CODE | 0-n | - | unsigned char | - | TSoftwareUpdateErrorCode | 1.0 | 1.0 | 0.0 | Software Update Fehlercode 2. Historyeintrag |
| STAT_HISTORY_3_KILOMETER_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei der Operation 3. Historyeintrag  0xFFFFFFFF für ungültig |
| STAT_HISTORY_3_ZEIT_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit YYYY-MM-DD_HH:MM 3. Historyeintrag |
| STAT_HISTORY_3_TYP | 0-n | - | unsigned char | - | TSoftwareUpdateTyp | 1.0 | 1.0 | 0.0 | Typ der Operation 3. Historyeintrag |
| STAT_HISTORY_3_SWIP_SGBM_IDENTIFIER_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe SGBM-Nummer der SWIP 3. Historyeintrag |
| STAT_HISTORY_3_SWIP_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe der Version der SWIP 3. Historyeintrag |
| STAT_HISTORY_3_NEW_SW_VID_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Neue Steuergeräte Software Version ID  Beispiel:    SD-B71200;TE-0A12B7-B712;MP-0A12C3-B712;PI-0A1001-B712 3. Historyeintrag |
| STAT_HISTORY_3_FLASHSPEICHER_WERT | kBytes | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Flashspeicher, der für Updates nach dem Update zur Verfügung steht (0xff ff ff ff wenn unbekannt) 3. Historyeintrag  Einheit: kBytes |
| STAT_HISTORY_3_ERROR_CODE | 0-n | - | unsigned char | - | TSoftwareUpdateErrorCode | 1.0 | 1.0 | 0.0 | Software Update Fehlercode 3. Historyeintrag |
| STAT_HISTORY_4_KILOMETER_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei der Operation 4. Historyeintrag  0xFFFFFFFF für ungültig |
| STAT_HISTORY_4_ZEIT_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit YYYY-MM-DD_HH:MM 4. Historyeintrag |
| STAT_HISTORY_4_TYP | 0-n | - | unsigned char | - | TSoftwareUpdateTyp | 1.0 | 1.0 | 0.0 | Typ der Operation 4. Historyeintrag |
| STAT_HISTORY_4_SWIP_SGBM_IDENTIFIER_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe SGBM-Nummer der SWIP 4. Historyeintrag |
| STAT_HISTORY_4_SWIP_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe der Version der SWIP 4. Historyeintrag |
| STAT_HISTORY_4_NEW_SW_VID_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Neue Steuergeräte Software Version ID  Beispiel:    SD-B71200;TE-0A12B7-B712;MP-0A12C3-B712;PI-0A1001-B712 4. Historyeintrag |
| STAT_HISTORY_4_FLASHSPEICHER_WERT | kBytes | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Flashspeicher, der für Updates nach dem Update zur Verfügung steht (0xff ff ff ff wenn unbekannt) 4. Historyeintrag  Einheit: kBytes |
| STAT_HISTORY_4_ERROR_CODE | 0-n | - | unsigned char | - | TSoftwareUpdateErrorCode | 1.0 | 1.0 | 0.0 | Software Update Fehlercode 4. Historyeintrag |
| STAT_HISTORY_5_KILOMETER_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei der Operation 5. Historyeintrag  0xFFFFFFFF für ungültig |
| STAT_HISTORY_5_ZEIT_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit YYYY-MM-DD_HH:MM 5. Historyeintrag |
| STAT_HISTORY_5_TYP | 0-n | - | unsigned char | - | TSoftwareUpdateTyp | 1.0 | 1.0 | 0.0 | Typ der Operation 5. Historyeintrag |
| STAT_HISTORY_5_SWIP_SGBM_IDENTIFIER_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe SGBM-Nummer der SWIP 5. Historyeintrag |
| STAT_HISTORY_5_SWIP_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe der Version der SWIP 5. Historyeintrag |
| STAT_HISTORY_5_NEW_SW_VID_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Neue Steuergeräte Software Version ID  Beispiel:    SD-B71200;TE-0A12B7-B712;MP-0A12C3-B712;PI-0A1001-B712 5. Historyeintrag |
| STAT_HISTORY_5_FLASHSPEICHER_WERT | kBytes | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Flashspeicher, der für Updates nach dem Update zur Verfügung steht (0xff ff ff ff wenn unbekannt) 5. Historyeintrag  Einheit: kBytes |
| STAT_HISTORY_5_ERROR_CODE | 0-n | - | unsigned char | - | TSoftwareUpdateErrorCode | 1.0 | 1.0 | 0.0 | Software Update Fehlercode 5. Historyeintrag |
| STAT_HISTORY_6_KILOMETER_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei der Operation 6. Historyeintrag  0xFFFFFFFF für ungültig |
| STAT_HISTORY_6_ZEIT_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit YYYY-MM-DD_HH:MM 6. Historyeintrag |
| STAT_HISTORY_6_TYP | 0-n | - | unsigned char | - | TSoftwareUpdateTyp | - | - | - | Typ der Operation 6. Historyeintrag |
| STAT_HISTORY_6_SWIP_SGBM_IDENTIFIER_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe SGBM-Nummer der SWIP 6. Historyeintrag |
| STAT_HISTORY_6_SWIP_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe der Version der SWIP 6. Historyeintrag |
| STAT_HISTORY_6_NEW_SW_VID_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Neue Steuergeräte Software Version ID  Beispiel:    SD-B71200;TE-0A12B7-B712;MP-0A12C3-B712;PI-0A1001-B712 6. Historyeintrag |
| STAT_HISTORY_6_FLASHSPEICHER_WERT | kBytes | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Flashspeicher, der für Updates nach dem Update zur Verfügung steht (0xff ff ff ff wenn unbekannt) 6. Historyeintrag  Einheit: kBytes |
| STAT_HISTORY_6_ERROR_CODE | 0-n | - | unsigned char | - | TSoftwareUpdateErrorCode | 1.0 | 1.0 | 0.0 | Software Update Fehlercode 6. Historyeintrag |
| STAT_HISTORY_7_KILOMETER_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei der Operation 7. Historyeintrag  0xFFFFFFFF für ungültig |
| STAT_HISTORY_7_ZEIT_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit YYYY-MM-DD_HH:MM 7. Historyeintrag |
| STAT_HISTORY_7_TYP | 0-n | - | unsigned char | - | TSoftwareUpdateTyp | - | - | - | Typ der Operation 7. Historyeintrag |
| STAT_HISTORY_7_SWIP_SGBM_IDENTIFIER_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe SGBM-Nummer der SWIP 7. Historyeintrag |
| STAT_HISTORY_7_SWIP_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe der Version der SWIP 7. Historyeintrag |
| STAT_HISTORY_7_NEW_SW_VID_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Neue Steuergeräte Software Version ID  Beispiel:    SD-B71200;TE-0A12B7-B712;MP-0A12C3-B712;PI-0A1001-B712 7. Historyeintrag |
| STAT_HISTORY_7_FLASHSPEICHER_WERT | kBytes | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Flashspeicher, der für Updates nach dem Update zur Verfügung steht (0xff ff ff ff wenn unbekannt) 7. Historyeintrag  Einheit: kBytes |
| STAT_HISTORY_7_ERROR_CODE | 0-n | - | unsigned char | - | TSoftwareUpdateErrorCode | 1.0 | 1.0 | 0.0 | Software Update Fehlercode 7. Historyeintrag |
| STAT_HISTORY_8_KILOMETER_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei der Operation 8. Historyeintrag  0xFFFFFFFF für ungültig |
| STAT_HISTORY_8_ZEIT_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit YYYY-MM-DD_HH:MM 8. Historyeintrag |
| STAT_HISTORY_8_TYP | 0-n | - | unsigned char | - | TSoftwareUpdateTyp | 1.0 | 1.0 | 0.0 | Typ der Operation 8. Historyeintrag |
| STAT_HISTORY_8_SWIP_SGBM_IDENTIFIER_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe SGBM-Nummer der SWIP 8. Historyeintrag |
| STAT_HISTORY_8_SWIP_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Angabe der Version der SWIP 8. Historyeintrag |
| STAT_HISTORY_8_NEW_SW_VID_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Neue Steuergeräte Software Version ID  Beispiel:    SD-B71200;TE-0A12B7-B712;MP-0A12C3-B712;PI-0A1001-B712 8. Historyeintrag |
| STAT_HISTORY_8_FLASHSPEICHER_WERT | kBytes | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Freier Flashspeicher, der für Updates nach dem Update zur Verfügung steht (0xff ff ff ff wenn unbekannt) 8. Historyeintrag  Einheit: kBytes |
| STAT_HISTORY_8_ERROR_CODE | 0-n | - | unsigned char | - | TSoftwareUpdateErrorCode | - | - | - | Software Update Fehlercode 8. Historyeintrag |

### RES_0XD021_D

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

### RES_0XD028_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADON | 0-n | - | unsigned char | - | TRadOnLead | 1.0 | 1.0 | 0.0 | Status des Ausgangssignals RADON |

### RES_0XD02C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISC_IDENT_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Disk Identifier für das beinhaltete Medium. ACHTUNG: RÜCKGABE wird von _WERT zu _TEXT! |
| STAT_DIGITAL_PLAYBACK_QUALITY_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualität der digitalen Aufnahme: Bereich: 0-15 0-1: Medium nicht lesbar (drive not ok) 2-8: Verzerrung / Stumm Stellen hörbar (drive not ok) 9-14: Medium lesbar, keine Verzerrung hörbar (drive ok) 15: Medium Qualität 100%, z.B. BLER 0 (drive ok) |

### RES_0XD02D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREQUENZ_DAB_TEXT | TEXT | - | string[3] | - | - | 1.0 | 1.0 | 0.0 | Momentane DAB Frequenz. |

### RES_0XD02F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NR_SDARS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | SDARS Telefonnummer |

### RES_0XD030_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WHEEL1_SENSOR_SPEED_WERT | km/h | - | int | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Rad 1 |
| STAT_WHEEL2_SENSOR_SPEED_WERT | km/h | - | int | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Rad 2 |
| STAT_WHEEL3_SENSOR_SPEED_WERT | km/h | - | int | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Rad 3 |
| STAT_WHEEL4_SENSOR_SPEED_WERT | km/h | - | int | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Rad 4 |
| STAT_COMBINED_SENSOR_SPEED_WERT | km/h | - | int | - | - | 1.0 | 1.0 | 0.0 | Kombinierte Geschwindigkeit der Radsensoren |
| STAT_GPS_SPEED_WERT | km/h | - | int | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit basierend auf das GPS-Signal. |
| STAT_SPEED_DIFFERENCE_PERCENT_WERT | % | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abweichung in Prozent zwischen den Geschwindigkeiten, die mit den Radsensoren bzw. mittels GPS erfasst wurden |

### RES_0XD031_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIRECTION | 0-n | - | unsigned char | - | TGearType | 1.0 | 1.0 | 0.0 | aktuelle Gangstellung siehe TGearType |
| STAT_DIRECTION_SOURCE | 0-n | - | unsigned char | - | TDirectionSource | 1.0 | 1.0 | 0.0 | siehe Tabelle TDirectionSource |

### RES_0XD032_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GPS_PDOP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPS Positionsgeanuigkeit |
| STAT_GPS_HDOP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPS horizontale Positionsgeanuigkeit |
| STAT_GPS_VDOP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPS vertikale Positionsgeanuigkeit |

### RES_0XD034_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUMBER_VISIBLE_SATS_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der theoretisch erreichbaren Satelliten |
| STAT_NUMBER_TRACKED_SATS_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der aufgespuerten Satelliten |
| STAT_SAT_1_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_1_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_1_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_1_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_1_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_1_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_2_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_2_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_2_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_2_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_2_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_2_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_3_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_3_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_3_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_3_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_3_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_3_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_4_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_4_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_4_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_4_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_4_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_4_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_5_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_5_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_5_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_5_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_5_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_5_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_6_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_6_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_6_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_6_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_6_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_6_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_7_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_7_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_7_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_7_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_7_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_7_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_8_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_8_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_8_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_8_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_8_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_8_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_9_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_9_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_9_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_9_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_9_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_9_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_10_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_10_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_10_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_10_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_10_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_10_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_11_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_11_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_11_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_11_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_11_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_11_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_12_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_12_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_12_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_12_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_12_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_12_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_13_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_13_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_13_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_13_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_13_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_13_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_14_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_14_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_14_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_14_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_14_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_14_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_15_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_15_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_15_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_15_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_15_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_15_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |
| STAT_SAT_16_ID_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID des Satelliten |
| STAT_SAT_16_STATUS | 0-n | - | unsigned char | - | TSatellitStatus | 1.0 | 1.0 | 0.0 | Status des Satelliten |
| STAT_SAT_16_SIGNAL_TO_NOISE_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Signal- Rauschabstand |
| STAT_SAT_16_AZIMUTH_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Azimuth des Satelliten |
| STAT_SAT_16_ELEVATION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Elevation des Satelliten |
| STAT_SAT_16_EPHEMERIS_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Ephemeris des Satellieten |

### RES_0XD03A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INTERNAL_GYRO_STATUS | 0-n | - | unsigned char | - | TInternalGyroStatus | 1.0 | 1.0 | 0.0 | - |
| STAT_GYRO_VOLTAGE_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Liest die Spannung des Gyro |

### RES_0XD03F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HMI_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle HMI Version als String wie im Entwicklermenü angezeigt |
| STAT_SVS_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle SVS Version als String wie im Entwicklermenü angezeigt |
| STAT_TEXT_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle TEXT Version als String wie im Entwicklermenü angezeigt |

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

### RES_0XD057_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_USB_HUB_TEST_PORT_1 | 0-n | - | unsigned char | - | THubConnectionState | 1.0 | 1.0 | 0.0 | Status HUB Verbindung Port 1 |
| STAT_USB_HUB_TEST_PORT_2 | 0-n | - | unsigned char | - | THubConnectionState | 1.0 | 1.0 | 0.0 | Status HUB Verbindung Port 2 |

### RES_0XD05D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_COMP_RECEPTION | 0-n | - | unsigned char | - | TSdarsSignalQuality | 1.0 | 1.0 | 0.0 | - |
| STAT_SDARS_SAT_RECEPTION | 0-n | - | unsigned char | - | TSdarsSignalQuality | 1.0 | 1.0 | 0.0 | - |
| STAT_SDARS_TER_RECEPTION | 0-n | - | unsigned char | - | TSdarsSignalQuality | 1.0 | 1.0 | 0.0 | - |
| STAT_SDARS_GLOBAL_STATUS | 0-n | - | unsigned char | - | TSdarsSignalQualityGlobalStatus | 1.0 | 1.0 | 0.0 | - |

### RES_0XD05E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FIRMWARE_SECURITY_PROCESSOR_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Firmware version of the security processor |
| STAT_FIRMWARE_AUDIO_PROCESSOR_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Firrmware version of the audio processor  |
| STAT_BASEBAND_IC_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Baseband IC version |
| STAT_MODULE_UC_SOFTWARE_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Module µC software version |
| STAT_FIRMWARE_PRODUCT_ID_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Firmware version of the product_id |
| STAT_FIRMWARE_DATE_CODE_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Firmware version of the date code |
| STAT_FIRMWARE_TIME_CODE_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Firmware version of the time code |
| STAT_GCI_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | GCI version |
| STAT_DATA_SERVICES_PROGRAM_GUIDE_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Data services program guide version |

### RES_0XD05F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_CHANNEL_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktueller SDARS_KANAL |
| STAT_SDARS_CHANNEL_TUNE_SUCCESS | 0-n | - | unsigned char | - | TSdarsChannelTuneSuccess | - | - | - | Status des Tunens. |

### RES_0XD060_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_TUNER_MODE | 0-n | - | unsigned char | - | TSdarsTunerMode | 1.0 | 1.0 | 0.0 | - |

### RES_0XD067_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LIFECYCLE_DURATION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer des Lifecycles in Minuten |
| STAT_RECEIVED_RESYNCS_ACC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of resyncs that have been received from the ACC ECU |
| STAT_RECEIVED_RESYNCS_NIVI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of resyncs that have been received from the Night Vision ECU |
| STAT_RECEIVED_RESYNCS_LDM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of resyncs that have been received from the LDM ECU |
| STAT_RECEIVED_RESYNCS_ICM_QL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of resyncs that have been received from the ICM Q/L ECU |
| STAT_RECEIVED_RESYNCS_KAFAS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of resyncs that have been received from the KAFAS ECU |
| STAT_RECEIVED_RESYNCS_FLA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of resyncs that have been received from the FLA ECU |
| STAT_RECEIVED_RESYNCS_FRMFA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of resyncs that have been received from the FRMFA ECU |
| STAT_SENT_NAVGRAPH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of NavGraph messages that have been sent |
| STAT_SENT_NAVGRAPH_V_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of NavGraph extended speed messages that have been sent |
| STAT_SENT_NAVGRAPH_LNE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of NavGraph extended lane messages that have been sent |
| STAT_SENT_NAVGRAPHSYNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of NavGraphSync messages that have been sent |
| STAT_SENT_NAVGPS1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of NavGPS1 messages that have been sent |
| STAT_SENT_NAVGPS2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of NavGPS2 messages that have been sent |
| STAT_SENT_NAVSYSINFO_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of NavSysInfo messages that have been sent |
| STAT_SENT_NAVGRAPHMATCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of NavGraphMatch messages that have been sent |

### RES_0XD092_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIME_AFTER_START_UP_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Werte von 0-255 [s], die angeben, wie viel Zeit seit dem Hochstarten (Aufwecken) vergangen ist |
| STAT_TIME_AFTER_POWER_DOWN_AVAILABLE_WERT | s | high | char | - | - | 1.0 | 1.0 | 0.0 | Werte von 0-127 [s], die angeben, wie viel Zeit vergangen ist, seit dem intern der Staus erreicht wurde, sofort einen Powerdown auszuführen. -1 bedeutet 'noch nicht erreicht' |
| STAT_TIME_AFTER_FULLY_OPERATIONAL_WERT | s | high | char | - | - | 1.0 | 1.0 | 0.0 | Werte von 0-127 [s], die angeben, wie viel Zeit vergangen ist, seit dem intern der Staus 'vollständig aufgestartet' erreicht wurde. -1 bedeutet 'noch nicht erreicht' |

### RES_0XD093_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FM_PHASEDIV_ANTENNA1 | 0-n | high | unsigned char | - | TAB_stateFMPhasAntenna | 1.0 | 1.0 | 0.0 | Status FM 1 Phasendiversity Antenne. Ergebnis siehe Tabelle TAB_stateFMPhasAntenna |
| STAT_FM_PHASEDIV_ANTENNA2 | 0-n | high | unsigned char | - | TAB_stateFMPhasAntenna | 1.0 | 1.0 | 0.0 | Status FM 2 Phasendiversity Antenne. Ergebnis siehe Tabelle TAB_stateFMPhasAntenna |

### RES_0XD0A3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_ACTIVATION | 0-n | high | unsigned char | - | TAB_EIN_AUS | 1.0 | 1.0 | 0.0 | Aktivierungswert als Integer Werte aus der Tabelle TAB_EIN_AUS |

### RES_0XD0B9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ISSUER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Issuer of the Certificate |
| STAT_DATE_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Expiration date of the certificate - dd.mm.jjjj |

### RES_0XD0C9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_INDEX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert der Hardware-Version |
| STAT_SW_INDEX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert der Software-Version |
| STAT_CRC_COUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erkannten CRC-Fehler |
| STAT_SERIAL_NUMBER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Seriennummer des Zentralinstruments |
| STAT_DIAGNOSTIC_FLAGS | 0-n | high | unsigned char | - | TAB_ZIN_DIAGNOSTIC_FLAG | - | - | - | Gibt den Status des Zentralinstruments zurück Werte aus der Tabelle TAB_ZIN_DIAGNOSTIC_FLAG |
| STAT_ZIN_VARIANT | 0-n | high | unsigned char | - | TAB_ZIN_VARIANT | - | - | - | Reports the variant of the used central instrument |

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
| STAT_LED_RING_OFFSET_BRIGHTNESS_WERT | - | high | char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_CURRENT_PWM_OUTPUT_VALUE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_LED_RING_SWITCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_PERMANENT_SWITCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_PERMANENT_DISPLAYS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ANIMATION_SWITCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ANIMATION_DISPLAYS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ANAIMATION_TRIGGER_EVENT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_SEMI_PER_EVENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_SEMI_PER_EVENT_PRIO_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_SEMI_PER_EVENT_TRIGGER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0XD0CE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHORT_VIN_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | 7-stellige Fahrgestellnummer |
| STAT_VERSION_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Version des Steuergerätes und des Provisionierungsmanagers |
| STAT_SMCC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | SIM Mobile Länderkode |
| STAT_SMNC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | SIM Mobile Netzwerkkode |
| STAT_ICC_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | ICC - ID |
| STAT_IMEI_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | IMEI |
| STAT_SERIAL_NUMBER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Seriennummer des Steuergeräts |
| STAT_CAUSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Cause Wert Der Wert gibt den Auslöser der Provisionierung an. 0: Required access data is missing in the DASAS data 1: A required OTAAS is expired 2: Update request by user via the HMI  3: Application trigger 4: The PINGUIN triggered the provisioning  5: ACM triggered provisioning on DPAS Mode 6: Provisioning via Diagnosis |

### RES_0XD0D1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COUNTER_MEDIA_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der eingelegten Medien des internen CD / DVD-Laufwerks |
| STAT_COUNTER_AUDIO_CDS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der eingelegten Audio-CDs (CDDA) des internen CD / DVD-Laufwerks |
| STAT_COUNTER_CD_ROM_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der eingelegten Audio-CD-ROMs (CD-R/-RW, DVD-R/-RW / + R / + RW ...) des internen CD / DVD-Laufwerks |
| STAT_COUNTER_DVD_VIDEO_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der eingelegten Video-DVDs des internen CD / DVD-Laufwerks |
| STAT_RECOGNIZED_AUDIO_CDS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Audio-CDs die von der Gracenote DB erkannt wurden |
| STAT_ERROR_DURING_PLAYBACK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dateien, die Probleme bei der Wiedergabe verursachten |
| STAT_PLAYBACK_TIME_CD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | playback time for using the CD drive |
| STAT_THRESHOLD_VALUE_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | threshold value 1 |
| STAT_PLAYBACK_TIME_DVD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | playback time for using the DVD drive |
| STAT_THRESHOLD_VALUE_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | threshold value 2 |
| STAT_INSERT_EJECT_COUNT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | counter for insert or eject a medium into a CD/ DVD drive |
| STAT_THRESHOLD_VALUE_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | threshold value 3 |

### RES_0XD0D3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHORT_VIN_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | 7-stellige Fahrgestellnummer |
| STAT_DOWNLOAD_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Download ID |
| STAT_PROVISIONING | 0-n | high | unsigned char | - | TAB_OKNOK | - | - | - | Status vom Schreibvorgang der Provisionierungsdaten. |

### RES_0XD0D5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NAME_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Vorname und Nachname des Servicepartners |
| STAT_STREET_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Straße und Hausnummer des Service Partners |
| STAT_CITY_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Stadt des Service Partners |
| STAT_COUNTRY_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Land inklusiv Postleitzahl des Service Partners |
| STAT_TELEPHONE_NUMBER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Telefonnummer des Service Partnerns |
| STAT_TYPE_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Type/ kind of the service partner (Unknown, Home, Work, Celular) |
| STAT_COMPANY_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Firmenname des Service Partners |
| STAT_EMAIL_ADRESS_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Email Adresse des Service Partners |
| STAT_URL_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Homepage des Service Partners |

### RES_0XD0D6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DESTINATION_TYPE_1_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_1_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM  Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_1_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Grad [0-90]   mm Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_2_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM  Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg   Grad [0-90]   mm Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_3_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM  Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Grad [0-90]   mm   Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_4_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_4_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM  Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_4_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Grad [0-90]   mm   Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_5_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_5_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM   Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_5_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Grad [0-90]   mm   Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_6_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_6_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM  Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_6_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Grad [0-90]   mm   Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_7_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_7_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM  Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_7_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Grad [0-90]   mm   Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_8_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_8_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM  Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_8_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Gra [0-90]   mm  Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_9_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_9_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM  Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_9_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Grad [0-90]   mm   Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_10_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_10_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM  Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_10_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Grad [0-90]   mm  Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_11_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_11_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM  Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_11_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Grad [0-90]   mm  Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_12_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_12_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM  Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_12_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Grad [0-90]   mm  Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_13_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_13_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit  0x00 Ost, 0x01 West GG   Grad [0-180] MM   Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_13_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Grad [0-90]   mm  Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_14_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_14_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM   Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_14_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Grad [0-90]   mm   Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_15_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_15_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM  Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_15_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Grad [0-90]   mm  Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |
| STAT_DESTINATION_TYPE_16_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | gibt den Typ des Ziels zurück  Bit-0,Bit-1: 00 = no destination (remaining data can be skipped) 01 = user destination 10 = optional destination (not activated, for BMW Routes) 11 = activated optional destination (BMW Routes)  Bit-2: 0 = not current destination 1 = current destination  Bit-3: Future use  Bit-4: Future use  Bit-5: Future use  Bit-6 to Bit-7: Future use |
| STAT_GPS_POSITION_LATITUDE_16_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Latitude zurück  LL    Ost/ West mit 0x00 Ost, 0x01 West GG   Grad [0-180] MM  Minute  [0-59]  SS    Sekunde [0-59] HH   100stel Sekunde [0-99] |
| STAT_GPS_POSITION_LONGITUDE_16_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | gibt die Longitude zurück  bb nord/süd mit 0x00 Nord, 0x01 Süd gg    Grad [0-90]   mm  Minute  [0-59]  ss    Sekunde [0-59]  hh   100stel Sekunde [0-99] |

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

### RES_0XD0DE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_SXM_CHANNEL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Channel number of the current SDARS channel |
| STAT_SDARS_SXM_CHANNEL_TUNE_SUCCESS | 0-n | high | unsigned char | - | TSdarsChannelTuneSuccess | - | - | - | Status of the current SDARS channel as integer |

### RES_0XD0DF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SDARS_COMP_RECEPTION_SXM | 0-n | high | unsigned char | - | TSdarsSignalQuality | - | - | - | Composite reception quality as integer |
| STAT_SDARS_GLOBAL_STATUS | 0-n | high | unsigned char | - | TSdarsSignalQualityGlobalStatus | - | - | - | Global status as integer |

### RES_0XD0E0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT__PREFERRED_CHARGING_STATION_POSITION_LATITUDE_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the latitude  LL     east/ west with 0x00 east, 0x01 west GG    degree [0-180] MM   minute(s) [0-59]  SS    second [0-59] HH   100stel second [0-99] |
| STAT_PREFERRED_CHARGING_STATION_POSITION_LONGITUDE_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the longitude  bb    north/ south with 0x00 north, 0x01 south gg    degree [0-90]   mm  minute(s) [0-59]  ss     second [0-59]  hh    100stel second [0-99] |
| STAT__INTERMODAL_CONNECTION_POINT_LATITUDE_1_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the latitude  LL     east/ west with 0x00 east, 0x01 west GG    degree [0-180] MM   minute(s) [0-59]  SS    second [0-59] HH   100stel second [0-99] |
| STAT_INTERMODAL_CONNECTION_POINT_LONGITUDE_1_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the longitude  bb    north/ south with 0x00 north, 0x01 south gg    degree [0-90]   mm  minute(s) [0-59]  ss     second [0-59]  hh    100stel second [0-99] |
| STAT__INTERMODAL_CONNECTION_POINT_LATITUDE_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the latitude  LL     east/ west with 0x00 east, 0x01 west GG    degree [0-180] MM   minute(s) [0-59]  SS    second [0-59] HH   100stel second [0-99] |
| STAT_INTERMODAL_CONNECTION_POINT_LONGITUDE_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the longitude  bb    north/ south with 0x00 north, 0x01 south gg    degree [0-90]   mm  minute(s) [0-59]  ss     second [0-59]  hh    100stel second [0-99] |
| STAT__INTERMODAL_CONNECTION_POINT_LATITUDE_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the latitude  LL     east/ west with 0x00 east, 0x01 west GG    degree [0-180] MM   minute(s) [0-59]  SS    second [0-59] HH   100stel second [0-99] |
| STAT_INTERMODAL_CONNECTION_POINT_LONGITUDE_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the longitude  bb    north/ south with 0x00 north, 0x01 south gg    degree [0-90]   mm  minute(s) [0-59]  ss     second [0-59]  hh    100stel second [0-99] |
| STAT__INTERMODAL_CONNECTION_POINT_LATITUDE_4_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the latitude  LL     east/ west with 0x00 east, 0x01 west GG    degree [0-180] MM   minute(s) [0-59]  SS    second [0-59] HH   100stel second [0-99] |
| STAT_INTERMODAL_CONNECTION_POINT_LONGITUDE_4_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the longitude  bb    north/ south with 0x00 north, 0x01 south gg    degree [0-90]   mm  minute(s) [0-59]  ss     second [0-59]  hh    100stel second [0-99] |
| STAT__INTERMODAL_CONNECTION_POINT_LATITUDE_5_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the latitude  LL     east/ west with 0x00 east, 0x01 west GG    degree [0-180] MM   minute(s) [0-59]  SS    second [0-59] HH   100stel second [0-99] |
| STAT_INTERMODAL_CONNECTION_POINT_LONGITUDE_5_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the longitude  bb    north/ south with 0x00 north, 0x01 south gg    degree [0-90]   mm  minute(s) [0-59]  ss     second [0-59]  hh    100stel second [0-99] |
| STAT__INTERMODAL_CONNECTION_POINT_LATITUDE_6_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the latitude  LL     east/ west with 0x00 east, 0x01 west GG    degree [0-180] MM   minute(s) [0-59]  SS    second [0-59] HH   100stel second [0-99] |
| STAT_INTERMODAL_CONNECTION_POINT_LONGITUDE_6_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the longitude  bb    north/ south with 0x00 north, 0x01 south gg    degree [0-90]   mm  minute(s) [0-59]  ss     second [0-59]  hh    100stel second [0-99] |
| STAT__INTERMODAL_CONNECTION_POINT_LATITUDE_7_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the latitude  LL     east/ west with 0x00 east, 0x01 west GG    degree [0-180] MM   minute(s) [0-59]  SS    second [0-59] HH   100stel second [0-99] |
| STAT_INTERMODAL_CONNECTION_POINT_LONGITUDE_7_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the longitude  bb    north/ south with 0x00 north, 0x01 south gg    degree [0-90]   mm  minute(s) [0-59]  ss     second [0-59]  hh    100stel second [0-99] |
| STAT__INTERMODAL_CONNECTION_POINT_LATITUDE_8_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the latitude  LL     east/ west with 0x00 east, 0x01 west GG    degree [0-180] MM   minute(s) [0-59]  SS    second [0-59] HH   100stel second [0-99] |
| STAT_INTERMODAL_CONNECTION_POINT_LONGITUDE_8_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the longitude  bb    north/ south with 0x00 north, 0x01 south gg    degree [0-90]   mm  minute(s) [0-59]  ss     second [0-59]  hh    100stel second [0-99] |
| STAT__INTERMODAL_CONNECTION_POINT_LATITUDE_9_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the latitude  LL     east/ west with 0x00 east, 0x01 west GG    degree [0-180] MM   minute(s) [0-59]  SS    second [0-59] HH   100stel second [0-99] |
| STAT_INTERMODAL_CONNECTION_POINT_LONGITUDE_9_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the longitude  bb    north/ south with 0x00 north, 0x01 south gg    degree [0-90]   mm  minute(s) [0-59]  ss     second [0-59]  hh    100stel second [0-99] |
| STAT__INTERMODAL_CONNECTION_POINT_LATITUDE_10_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the latitude  LL     east/ west with 0x00 east, 0x01 west GG    degree [0-180] MM   minute(s) [0-59]  SS    second [0-59] HH   100stel second [0-99] |
| STAT_INTERMODAL_CONNECTION_POINT_LONGITUDE_10_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Returns the longitude  bb    north/ south with 0x00 north, 0x01 south gg    degree [0-90]   mm  minute(s) [0-59]  ss     second [0-59]  hh    100stel second [0-99] |
| STAT_CURRENT_ISO_COUNTRY_CODE_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | Returns the ISO 3166 country code of the car position as three characters; e.g. Deutschland DEU |

### RES_0XD5CF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISPLAY_AKTIVIERUNG | 0-n | - | unsigned char | - | TStatusDisplayActivationMode | 1.0 | 1.0 | 0.0 | Display-Aktivierung [uint8, 0x0..0xF]  (Signal ENB_DISP von Head Unit) |
| STAT_OFFSET_HELLIGKEIT_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Offset Helligkeit [sint8, -127..+127 = -100..+100%, 128 = Ungültig, Fehlerwert]  (Signal OFFS_BRIG_FRT von Head Unit) |
| STAT_DIMMRAD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dimmrad-Stellung [uint8, 0..254 = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal CTR_ILUM_SW) |
| STAT_HELLIGKEIT_KOMBI_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Helligkeitswert I-Kombi-Helligkeits-Sensor [uint8, 0..254  = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal DSTN_LCD_LUM) |
| STAT_DAEMPFUNG_LCD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dämpfung LCD Leuchtdichte [uint8, 0..240 = schnell..langsam, 241..254 = sprunghaft, 255 = FF = Ungültig, Fehlerwert], Geschwindigkeit der Helligkeitsregelung. (Signal DMPNG_LCD_LUM) |

### RES_0XD5D4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_LOCATION_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_PART_NR_DATA | DATA | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | BMW Teilenummer |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABLAUF_ZERTIFIKAT | 0xD0B9 | - | Senden das Zertifikat das als nächstes abläuft und das Datum an dem es abläuft | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0B9_D |
| AF_TP_DAB | 0xD043 | - | Aktiviert/Deaktiviert DAB Following- UND TP Funktionen. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD043_D | RES_0xD043_D |
| AKTIVE_ANTENNE_DAB | 0xD044 | STAT_AKTIVE_ANTENNE_DAB | Antenna that is currently active as integer | 0-n | - | - | unsigned char | TAktiveAntenneDAB | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUDIOKANAELE | 0xD003 | - | Verstellt und liest den aktuell eingestellten Lautsprecherkanal. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD003_D | RES_0xD003_D |
| BT | 0xA048 | - | aktiviert/dekativiert Bluetooth | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA048_R | RES_0xA048_R |
| BT_ERKENNUNGSMODUS | 0xA049 | - | Steuerung Bluetooth Erkennungsmodus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA049_R | RES_0xA049_R |
| BT_GERAETEADRESSE | 0xD01A | - | Steuert die Bluetooth Geräteadresse | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD01A_D | RES_0xD01A_D |
| BT_GERAETENAME | 0xD01C | - | Schreibt/Liest den Bluetooth Gerätenamen | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD01C_D | RES_0xD01C_D |
| CID_BACKLIGHT | 0xD5C4 | - | Ansteuerung der Hintergrundbeleuchtung des CIDs per Diagnose. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C4_D | - |
| CID_CODIERDATEN | 0x4010 | - | Overwrites / Reads CID coding data in RAM temporarily | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010_D |
| CID_DETAIL_INFORMATIONEN | 0xD5D4 | - | Logistikinformationen CID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5D4_D |
| CID_EINGANGSWERTE_LESEN | 0xD5CF | - | Ausgabe der aktuellen Eingangswerte des CID. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5CF_D |
| CID_HELLIGKEIT_ISTWERT | 0xD5CE | STAT_HELLIGKEIT_IST_WERT | Ist-Helligkeitswert | % | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_SOLLWERT | 0xD5CD | STAT_HELLIGKEIT_SOLL_WERT | Soll-Helligkeitswert vom Dimm-Modul | % | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_PHOTOSENSOR | 0xD5CB | STAT_PHOTOSENSOR_CID_WERT | Analogwert Fototransistor im CID | lx | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_STEUERN | 0xD5C2 | - | Ein- und Ausschalten des CID per Diagnose. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C2_D | - |
| CID_STEUERN_ENDE | 0xD5C9 | - | Beendet alle Ansteuerungen im CID, die mit Diagnose  gestartet worden sind. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C9_D | - |
| CID_TEMP_BACKLIGHT | 0xD5CC | STAT_TEMP_BACKLIGHT_WERT | Temperatur Hintergrundbeleuchtung | °C | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_TESTBILD | 0xD5C1 | - | Ansteuerung der Testbild-Ausgabe vom CID. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C1_D | - |
| CID_VERBINDUNG | 0xD5D0 | STAT_CID_VERBINDUNG | Status der CID-Verbindung: 0 = CID-Verbindung in Ordnung, Bild wird angezeigt 1 = Keine Aktivierung der Bildausgabe 2 = Anzeigegerät nicht anzeigebereit 3 = Keine Kommunikation mit Anzeigegerät 4 = Bilddaten ungültig 255 = Ungültigkeitswert (Default nach RESET) | 0-n | - | - | unsigned char | TAB_CID_VERBINDUNG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| COOKIES | 0xD0BA | STAT_COOKIES_TEXT | COOKIES in XML-Format | TEXT | - | high | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DEMUTE | 0xD014 | - | Steuert und liest die Mute-Funktion aus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD014_D | RES_0xD014_D |
| FIND_BEST_STATION | 0xA00A | - | Returns the status of the searching process and the information data of the best station if the searching process has been ended successfully. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA00A_R |
| FIND_BEST_STATION_DAB | 0xA03F | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA03F_R |
| FIND_BEST_TMC_STATION | 0xA045 | - | Aufruf startet die Suche nach den besten TMC-Sender | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA045_R |
| FREQUENZ | 0xD00D | - | Stellt die entsprechende Frequenz des Radios ein bzw. liest sie aus. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD00D_D | RES_0xD00D_D |
| FREQUENZ_DAB | 0xD02D | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD02D_D | RES_0xD02D_D |
| HD_DECODER_FIRMWARE | 0xD0B8 | STAT_HD_DECODER_FIRMWARE_TEXT | Gibt die verschiedenen Firmware-Versionen des HD-Moduls zurück | TEXT | - | high | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LANGUAGE | 0xA025 | - | Liest und setzt die aktuelle MMI Sprache. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA025_R | RES_0xA025_R |
| LAUTSPRECHER_IMPEDANZMESSUNG | 0xA021 | - | Impedanzmessung (AC-Messung) auf einem oder mehreren Kanälen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA021_R | RES_0xA021_R |
| LUEFTER | 0xA03C | - | Steuerung und Status des Lüfters. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03C_R | RES_0xA03C_R |
| MEDIA_STATISTIK | 0xD0D1 | - | Returns the CD/ DVD media statistic | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0D1_D |
| MENU | 0xA024 | - | Einstellen eines MMI Menüs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA024_R | RES_0xA024_R |
| NAVI_MAP | 0xA03A | - | Ermöglicht die Kunden Navigation Karte zu deaktivieren oder zu löschen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03A_R | RES_0xA03A_R |
| NAVI_SIMULATION | 0xA00E | - | Aktiviert oder deaktiviert die Navi Simulation. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA00E_R | RES_0xA00E_R |
| NEXT_ENTSOURCE | 0xA00B | - | Steuerung Entertainmentquellen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA00B_R | RES_0xA00B_R |
| PROVISIONING | 0xA02F | - | Status des Provisionierungsprozess | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA02F_R |
| PROVISIONING_DATA | 0xD0D3 | - | Liest Status des Schreibens der Provisionierungsdatei. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0D3_D |
| PROVISIONING_FORMAT | 0xD0EB | STAT_STAT_SIGNATURE | dient dazu, eine signierte Bereitstellungsdatei zu verstehen  | 0-n | - | high | unsigned char | TAB_NO_YES | - | - | - | - | 22 | - | - |
| PROVISIONING_PARAMETER | 0xD0CE | - | Liest die Parameter der Provisionierung aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0CE_D |
| RADON | 0xD028 | - | Ein- oder Ausschalten bzw. Abfragen des Radon-Signals. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD028_D | RES_0xD028_D |
| RDS | 0xD00E | - | Aktiviert/Deaktiviert TP und RDS Funktionen des analogen Teils des Tuners. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD00E_D | RES_0xD00E_D |
| RESET_DATABASES | 0xA082 | - | Löschen der persönlichen Telefon Einstellungen und API-Funktionen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA082_R | RES_0xA082_R |
| RESET_PIA_SETTINGS | 0xA083 | - | Wiederherstellung des Auslieferungszustandes für den gewählten Schlüssel | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA083_R | RES_0xA083_R |
| SDARS_ACTIVATION | 0xA0AA | - | Schaltet das SDARS Modul ein und aus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0AA_R | RES_0xA0AA_R |
| SDARS_CHANNEL | 0xD05F | - | liest und setzt den SDARS Kanal | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD05F_D | RES_0xD05F_D |
| SDARS_FACTORY_DEFAULTS | 0xA03D | - | Sets factory defaults for SDARS | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA03D_R |
| SDARS_GENERATOR_FREQUENCY | 0xA03E | - | Einstellen eines Sinustons. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03E_R | RES_0xA03E_R |
| SDARS_GENERATOR_FREQUENCY_SXM | 0xA0B5 | - | activares the tone generator frequencies of both channels | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0B5_R | RES_0xA0B5_R |
| SDARS_SXM_CHANNEL | 0xD0DE | - | Sets a definite SDARS channel | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD0DE_D | RES_0xD0DE_D |
| SDARS_TUNER_MODE | 0xD060 | - | liest und setzt den Tuner Mode. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD060_D | RES_0xD060_D |
| SDARS_VERSIONS | 0xD0DD | - | Returns the various versions from HW and SW of the SDARS module | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0DD_D |
| SELBSTTEST | 0xA022 | - | Selbsttests des Steuergerätes Sie sollen einen evtl. notwendigen Tausch von Software/Hardware erkennen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA022_R | RES_0xA022_R |
| SERVICE_PARTNER_DATEN | 0xD0D5 | - | Schreiben und Lesen der Kontaktdaten des Service Partners in/aus  dem Telefonbuch des Steuergeräts. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD0D5_D | RES_0xD0D5_D |
| SER_NR_DOM_LESEN | 0xD019 | STAT_SER_NR_DOM_TEXT | Ließt die Seriennummer mit 14 Zeichen (DIN ISO 10 486) | TEXT | - | - | string[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SIGNALAUSGABE | 0xA01A | - | Steuert die Videosignalausgabe eines Steuergerätes (Videoquelle). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01A_R | - |
| SINUSGENERATOR | 0xA001 | - | Gibt einen Sinuston auf einen oder mehrere Kanäle aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA001_R | - |
| STATUS_ADAS | 0xD067 | - | Reads out from the navigation system how many Resyncs from which client the navigation system has received and how many messages the navigation system has sent since the beginning of the current lifecycle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD067_D |
| STATUS_ANT_QFS | 0xD010 | - | Messen der Feldstärke, die aktuell am Tuner anliegt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD010_D |
| STATUS_ANT_QFS_FM2 | 0xD045 | - | Messen der Feldstärke, die aktuell am Tuner anliegt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD045_D |
| STATUS_APPLICATION | 0xD021 | - | Abfrage des Status aller freischaltbaren Applikationen, z.B. Navigation. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD021_D |
| STATUS_BORDERLINE_CHANGE_MODE | 0xD0E8 | STAT_BORDERLINE_CHANGE_MODE | returns if a borderline is set to mode <automatic> or <manual> | 0-n | - | high | unsigned char | TAB_AUTO_MAN | - | - | - | - | 22 | - | - |
| STATUS_BORDERLINE_SETTING | 0xD0E5 | STAT_BORDERLINE_SETTING_DATA | returns the ISO 3166 country code of the car position as three characters (e.g. Deutschland; DEU)  0x0 default (Initialization value) - ¿default¿ means standard view from first Navigation Database compilation | DATA | - | high | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_BT_FIRMWARE | 0xD095 | STAT_BT_FIRMWARE_TEXT | Gibt die BT Firmware zurück | TEXT | - | high | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_BT_GEKOPPELTE_GERAETE_LESEN | 0xD01D | - | Liest die Geräte-Adresse der letzten vier gekoppelten Bluetooth Geräte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD01D_D |
| STATUS_CD_MD_CDC | 0xD02C | - | Liest den Identifier des Mediums und das Qualitätslevel der digitalen Aufnahme aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD02C_D |
| STATUS_CID_DETAIL_INFORMATION_EXTENDED | 0x4011 | - | Returns the extended logistic information of the currently connected CID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4011_D |
| STATUS_CID_SW_VERSION | 0x400E | - | Returns the current CID-SW version. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400E_D |
| STATUS_DIRECTION | 0xD031 | - | Ausgabe der aktuellen Gang-Position | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD031_D |
| STATUS_DRIVE_CD | 0xD052 | STAT_MEDIUM_INSERTED | bezeichnet den Status des Laufwerks-Lademechanismus. | 0-n | - | - | unsigned char | TInsertedMedium | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_FM_PHASDIV_ANTENNA | 0xD093 | - | Führt eine Impedanzmessung der FM Antennen von der Phasen diversity aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD093_D |
| STATUS_GPS | 0xD038 | STAT_GPS | Liest den GPS Status. Siehe Tabelle TGpsStatus. | 0-n | - | - | unsigned char | TGpsStatus | - | - | - | - | 22 | - | - |
| STATUS_GPS_DILUTION_OF_POSITION | 0xD032 | - | Liest die GPS Auflösung/Genauigkeit aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD032_D |
| STATUS_GPS_RECEIVER_SW_VERSION | 0xD03B | STAT_GPS_RECEIVER_SW_VERSION_TEXT | Auslesen der Software Versionsnummer des GPS Receivers. | TEXT | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_GPS_SATINFO | 0xD034 | - | Auslesen der Charakteristik aller sichtbaren Satelliten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD034_D |
| STATUS_GYRO | 0xD03A | - | Liest die Spannung des Gyro | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD03A_D |
| STATUS_HMI_VERSION | 0xD03F | - | HMI Software Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD03F_D |
| STATUS_INITIALISIERUNG | 0xD004 | STAT_INITIALISIERUNG | - | 0-n | - | - | unsigned char | TInitialisierung | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_INTERNAL_STATES | 0x400F | - | Returns important internal state variables of the CID software bus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400F_D |
| STATUS_LAST_DESTINATIONS_FIRST_DATA_SET | 0xD0D6 | - | Reads out the last 16 destinations to fill the Last Call State message | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0D6_D |
| STATUS_LAST_DESTINATIONS_SECOND_DATA_SET | 0xD0E0 | - | Reads out the information for the preferred charging station, intermodal connection points and ISO country code | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0E0_D |
| STATUS_LESEN_LAUFWERK | 0xD00C | - | Liest aus, welche Laufwerke verbaut sind. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD00C_D |
| STATUS_LESEN_SYSTEMAUDIO | 0xD002 | STAT_AUDIO_SYSTEM | bezeichnet das Lautsprechersystem | 0-n | - | - | unsigned char | TAudioSystem | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_LIFECYCLE | 0x1735 | STAT_LIFECYCLE | Status Lifecycle | 0-n | - | high | unsigned char | STATUS_LIFECYCLE_DOP | - | - | - | - | 22 | - | - |
| STATUS_MAPMATERIAL_VERSION | 0xD03C | STAT_MAPMATERIAL_VERSION_TEXT | gibt die Navigations DB zurück | TEXT | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_MEMORY_USAGE | 0xD00A | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD00A_D |
| STATUS_NAVI_CALIBRATION | 0xD03D | STAT_NAVI_CALIBRATION | Fragt ob das Navi kalibriert ist. Siehe Tabelle TNaviCalibration | 0-n | - | - | unsigned char | TNaviCalibration | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SDARS_BER | 0xD062 | STAT_SDARS_BER_WERT | Die aktuelle BER | - | - | high | motorola double | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SDARS_ESN | 0xD005 | STAT_SDARS_ESN_TEXT | die 12stellige ESN, z.B. AB1234V12345. ACHTUNG: _WERT wird in _TEXT gewandelt! | TEXT | - | - | string[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SDARS_FIRMWARE_VERSIONS | 0xD05E | - | liest Firmware Werte aus dem SDARS modul | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD05E_D |
| STATUS_SDARS_RADIO_ID | 0xD0DA | STAT_SDARS_RADIO_ID_TEXT | Returns the 12 digits Radio ID of the SDARS tuner (SXM) | TEXT | - | high | string[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SDARS_SIGNAL_QUALITY | 0xD05D | - | Auslesen der Qualitaet der Signalwerte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD05D_D |
| STATUS_SDARS_SIGNAL_QUALITY_SXM | 0xD0DF | - | Returns the quality of the SDARS signal | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0DF_D |
| STATUS_SENSOR_WERTE | 0x400A | - | Returns all filtered internal sensor values | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400A_D |
| STATUS_SGBMID_NAVIMAP | 0xD012 | STAT_SGBMID_DATA | String with format: pk.idididid.hv.uv.pv out of the following return stream:  Byte0 Prozessklasse Byte1 ID_#0 (MSB) *4  Byte2 ID_#1 Byte3 ID_#2 Byte4 ID_#3 (LSB) Byte5 Hauptversion Byte6 Unterversion Byte7 Patch version | DATA | - | - | data[8] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SIGNAL_DAB | 0xD053 | STAT_SIGNAL_DAB | DAB Signal | 0-n | - | - | unsigned char | TSignalDab | - | - | - | - | 22 | - | - |
| STATUS_SPEED | 0xD030 | - | Liest die die Geschwindigkeitssignale vom Bus und vom GPS Empänger. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD030_D |
| STATUS_SWUP_INSTALLATION_HISTORY | 0xD01E | - | Auslesen der letzten Software Update Installationen. Für jeden Eintrag werden Zeit, Operationtype, SWIP ID, ECU SW VID und Operationcode gespeichert. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD01E_D |
| STATUS_TDA_AKTIVIERUNG | 0xD091 | STAT_DIENSTE_AKTIVIERUNG | Status TDA BMW Dienste | 0-n | - | - | unsigned char | TAB_TDAActivationState | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_TIME_AFTER_STARTUP | 0xD092 | - | Gibt die Zeiten an, die nach verschiedenen System-Aufstart-punkten vergangen sind | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD092_D |
| STATUS_USB_HUB_TEST | 0xD057 | - | Status USB HUB eingebaut | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD057_D |
| STATUS_USB_STACK_INFO_FOR_DEVICE | 0xA02E | - | - | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA02E_R | RES_0xA02E_R |
| STATUS_VERSION_ID_LESEN | 0xD00B | - | Auslesen Fahrgestellnummer, Hardware Lieferung ID, Software Lieferung ID und Steuergeräte Softwareupdate Version ID. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD00B_D |
| STATUS_VOLUMEAUDIO | 0xA039 | - | Liest die ausgewählte Lautstärke aus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA039_R | RES_0xA039_R |
| STEUERN_BORDERLINE_CHANGE_MODE | 0xD0E7 | - | sets a borderline to mode ¿automatic¿ or ¿manual¿ | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0E7_D | - |
| STEUERN_BORDERLINE_SETTING | 0xD0E4 | - | writes a country code for dynamic borderlines for disputed borders | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0E4_D | - |
| STEUERN_BT_DELETE_ALL_PHONE_ID | 0xA04B | - | Löschen angekoppelter Bluetooth Devices | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_DELETE_COOKIES | 0xA030 | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_EJECT | 0xA006 | - | Steuern des Auswurfs der Medien aus den Laufwerken. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA006_R | - |
| STEUERN_EMERGENCY_EJECT | 0xA007 | - | Notauswurf | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA007_R | - |
| STEUERN_KLANGZEICHEN | 0xA000 | - | Steuert eine Tonart an (Klingel,Gong) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA000_R | - |
| STEUERN_LINEAR | 0xA004 | - | Zurücksetzen der Fader und Lautstärke auf Default-Werte | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_NAVI_SPEECH | 0xA027 | - | Testet die Sprachausgabe des Navi | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA027_R | - |
| STEUERN_PDC_SIGNAL | 0xA003 | - | Simulates the tone that is hearable at a definite distance to an obstacle. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA003_R | - |
| STEUERN_RGB_SCREEN | 0x400C | - | Starts and stops displaying test pictures. In contrast to the service STEUERN_TESTBILD_CID this job allows to set the desired colour of the test pic-ture by passing the RGB values. The CID returns into ¿Video Mode¿. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400C_D | - |
| STEUERN_TESTBILD_ERWEITERT | 0x400B | - | Starts / stops displaying of test pictures. This service extends the diagnostic service ¿STEUERN_TESTBILD¿ by providing more test pictures. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400B_D | - |
| STEUERN_TRACK_NUMBER | 0xA037 | - | Wählt die CD/DVD-Tracknummer die abgespielt werden soll. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA037_R | - |
| STEUERN_TUNER_SUCHLAUF | 0xA009 | - | Startet den Stationssuchlauf ab dem ausgewählten Bandbereich | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA009_R | - |
| STEUERN_VOLUMEAUDIO | 0xA036 | - | Verstellt die ausgewählte Lautstärke | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA036_R | - |
| STEUERN_VOLUMEAUDIO_DEFAULT | 0xA002 | - | Zurücksetzen aller Lautstärkewerte auf Default-Werte | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SWUP_REMOVE_CUSTOMER_UPDATES | 0xA05A | - | Entfernt alle Updates des Benutzers I-Stufenstand ohne KISU wiederherstellen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA05A_R |
| TDA_AKTIVIERUNG | 0xA0A8 | - | Trigger die Aktivierung des BMW TeleServices | - | - | - | - | - | - | - | - | - | 31 | - | - |
| TELEFONNUMMER_SDARS | 0xD02F | - | SDARS Telefonnummer auslesen bzw. schreiben | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD02F_D | RES_0xD02F_D |
| TEMPERATUPROFIL | 0x400D | - | The temperature counter and the corresponding temperature thresholds | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x400D_D | RES_0x400D_D |
| TEST_ANTENNE | 0xA018 | - | Startet und bewertet die Prüfung für eine oder mehrere Antennen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA018_R | RES_0xA018_R |
| TEST_VERBAU | 0xA01E | - | Startet die Verbauprüfung der externen Anschlüsse. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01E_R | RES_0xA01E_R |
| TEST_VIDEOEINGANG | 0xA01D | - | Testet die Videoeingänge durch Analyse der dort anliegenden Signale | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01D_R | RES_0xA01D_R |
| TMC | 0xD011 | - | Steuern/Status des TMC. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD011_D | RES_0xD011_D |
| UPDATE_ZERTIFIKATE | 0xA0A9 | - | Löst die Aktualisierung der Zertifikatliste aus | - | - | - | - | - | - | - | - | - | 31 | - | - |
| USB_TEST_TEL | 0xA06A | - | Überprüfen der Telefon-USB-Verbindung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA06A_R | RES_0xA06A_R |
| VIDEOVERBINDUNG | 0xA01C | - | Steuern, Stoppen und Abfragen einer Videoverbindung . | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01C_R | RES_0xA01C_R |
| WAVEBAND | 0xA008 | - | Auswählen bzw. Abfragen der Fequenzbänder | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA008_R | RES_0xA008_R |
| WLAN_ACTIVATION | 0xD0A3 | - | WLAN Zustand | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD0A3_D | RES_0xD0A3_D |
| WLAN_CLEAR_WHITELIST | 0xA0A7 | - | Löscht alle Einträge in der Whitelist | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ZIN_CENTRAL_INSTRUMENT | 0xD0C9 | - | Gibt die Statusinformationen des Zentralinstruments zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0C9_D |
| ZIN_ENDE | 0xD0C8 | - | Beendet die Diagnosesitzung des Zentralinstruments und setzt aller Parameter die durch vorherige Diagnoseanfragen geändert wurden zurück. Das Zentralinstrument kehrt in den  normalen Modus  zurück. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0C8_D | - |
| ZIN_EVENT_QUEUE | 0xD0CA | - | Gibt die Statusinformationen des Zentralinstruments zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0CA_D |
| ZIN_HELLIGKEITSWERT | 0xD0C6 | - | Steuert die Gesamthelligkeit des Zentralinstruments. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0C6_D | - |
| ZIN_INTERNAL_STATES | 0xD0CB | - | Gibt die Statusinformationen des Zentralinstruments zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0CB_D |
| ZIN_RESET | 0xD0C7 | - | Löst einen Reset im Zentralinstrument aus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0C7_D | - |
| ZIN_SHOWCOLOR | 0xD0BD | - | Steuert die Füllung (Helligkeit) des Zentralinstruments. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0BD_D | - |
| ZIN_TESTBILD | 0xD0BE | - | Aktiviert das Testbild im Zentralinstrument. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0BE_D | - |
| ZIN_WIDGET_ID | 0xD0BF | - | Löst eine Animation aus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0BF_D | - |

### STATUS_LIFECYCLE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Application Mode |
| 1 | Flash Mode |
| 2 | Coding Mode |

### TAB_0X1708

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 |

### TAB_0X1752

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 |

### TAB_0X1753

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0017 |

### TAB_0X1754

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F |

### TAB_0X1755

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0020 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 |

### TAB_0X175A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 | 0x0031 | 0x0032 | 0x0033 | 0x0034 | 0x0035 | 0x0036 | 0x0037 |

### TAB_0X175B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0038 | 0x0039 | 0x003A | 0x003B | 0x003C | 0x003D | 0x003E | 0x003F | 0x0040 | 0x0041 | 0x0042 | 0x0043 | 0x0044 | 0x0045 | 0x0046 | 0x0047 |

### TAB_ABILITY_TO_WAKE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | off |
| 1 | on |
| 2 | critical |

### TAB_AUTO_MAN

| WERT | TEXT |
| --- | --- |
| 0x00 | automatic |
| 0x01 | manual |
| 0xFF | not defined |

### TAB_BLUETOOTH_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Bluetooth nicht aktiviert |
| 1 | Bluetooth aktiviert |
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

### TAB_CID_VERBINDUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | CID-Verbindung in Ordnung, Bild wird angezeigt |
| 0x01 | Keine Aktivierung der Bildausgabe |
| 0x02 | Anzeigegerät nicht anzeigebereit |
| 0x03 | Keine Kommunikation mit Anzeigegerät |
| 0x04 | Bilddaten ungültig |
| 0xFF | Ungültigkeitswert |

### TAB_CUSTOMER_KISU

| WERT | TEXT |
| --- | --- |
| 0x01 | KISU Fahrzeug steht nicht |
| 0x10 | KISU Update bereits installiert |
| 0x11 | KISU Update veraltet |
| 0x20 | KISU I-Stufe des Fahrzeugs veraltet |
| 0x26 | KISU Fahrgestellnummer stimmt nicht überein |
| 0x70 | KISU Keine Update-Datei verfügbar (only during installation) |
| 0x71 | KISU Update läuft |
| 0x72 | KISU USB-Gerät nicht angeschlossen (only during installation) |
| 0x7F | KISU Unspezifizierter Betriebssystemfehler |
| 0xFF | KISU unspezifizierter Fehler |

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

### TAB_EIN_AUS

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xFF | unbekannt |

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

### TAB_NO_YES

| WERT | TEXT |
| --- | --- |
| 0x00 | no |
| 0x01 | yes |
| 0xFF | not defined |

### TAB_OKNOK

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | NOK |
| 0xFF | Nicht definiert |

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

### TAB_RESET_REASON_DOP

| WERT | TEXT |
| --- | --- |
| 255 | keine Ursache fuer Reset bekannt |

### TAB_SOFTWARE_UPDATE_PROZESSKLASSE

| WERT | TEXT |
| --- | --- |
| 0x00 | ungültige SGBM-ID |
| 0x01 | Hardware |
| 0x02 | Hardwareausprägung |
| 0x03 | Hardwarefarbe |
| 0x04 | Gateway- Tabelle |
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
| 0x1C | Bootloader-Update Applikation |
| 0x1D | Flashloader-Update Applikation |
| 0xA0 | Entertainmentdaten |
| 0xA1 | Navigationsdaten |
| 0xA2 | Freischaltcodefunktion |
| 0xC0 | Softwareupdatepaket |
| 0xC1 | SWUP Index Paket |
| 0xFF | Wert ungültig |

### TAB_STANDARD_KISU

| WERT | TEXT |
| --- | --- |
| 0x02 | KISU Update Abbruch |
| 0x03 | KISU MOST Kommunikationsfehler |
| 0x04 | KISU SWUP-Quelle antwortet nicht |
| 0x05 | KISU Gerät ausgelastet |
| 0x0F | KISU Unspezifizierter Umweltfehler |
| 0x1F | KISU Unspezifizierter Versionsfehler |
| 0x21 | KISU SWUP-Zielgerät nicht verfügbar |
| 0x22 | KISU Abhängigkeiten nicht erfüllt |
| 0x23 | KISU Betroffene SWE nicht gefunden |
| 0x24 | KISU Pre-Installation Skriptfehler |
| 0x25 | KISU Post-Installation Skriptfehler |
| 0x2F | KISU Unspezifizierter Fehler: Updatekompatibiliät |
| 0x30 | KISU SWUP-Weiterleitung nicht unterstützt |
| 0x31 | KISU Nicht genügend RAM |
| 0x32 | KISU Nicht genügend Flashspeicher |
| 0x33 | KISU System überlastet |
| 0x34 | KISU SWUP-Paket zu groß |
| 0x35 | KISU SWUP Paket oder SWIP Datei Weiterleitung fehlgeschlagen |
| 0x36 | KISU Angefordertes SWUP Paket nicht verfügbar |
| 0x3F | KISU Unspezifizierter Ressourcenfehler |
| 0x40 | KISU SWIP-Signaturverifikation fehlgeschlagen |
| 0x41 | KISU SWIP-XML-Datei korrupt |
| 0x42 | KISU SWUP Hash Validierung fehlgeschlagen |
| 0x43 | KISU SWUP korrupt oder unerwartetes Format |
| 0x44 | KISU SWUP-Signaturverifikation fehlgeschlagen |
| 0x4F | KISU Unspezifizierter Fehler: Integrität oder Authentisierung |
| 0x50 | KISU SWUP-Download abgebrochen |
| 0x51 | KISU Keine Verbindung für Over-The-Air Update |
| 0x5F | KISU Unspezifizierter Over-The-Air-Fehler |
| 0x60 | KISU Deinstallationsinformationen nicht verfügbar |
| 0x61 | KISU Pre-Deinstallation Skriptfehler |
| 0x62 | KISU Post-Deinstallation Skriptfehler |
| 0x6F | KISU Unspezifizierter Deinstallationsfehler |
| 0x80 | KISU Angefordertes SWUP Paket via Teleservice Update nicht verfügbar |
| 0x81 | KISU SWUP Paket oder SWIP Datei zu groß für die Übertragung via Teleservice Update |
| 0x8F | KISU Unspezifizierter Teleservice Fehler |
| 0xFF | KISU unspezifizierter Fehler |

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
| 0x11 | Absolute level DAB Traffic Announcement |
| 0x12 | Absolute level mute_exclusive |
| 0x13 | Absolute level mute_mix |
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

### TBLUETOOTHDISCOVERYMODESTATUS

| WERT | TEXT |
| --- | --- |
| 0 | BT Erkennungsmodus aus |
| 1 | BT Erkennungsmodus ein |
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

### TGEARTYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Rückwärts-Gang |
| 0x01 | Vorwärts-Gang |
| 0x02 | Leerlauf |
| 0xFF | Nicht definiert |

### TGPSPOSITIONVALIDITY

| WERT | TEXT |
| --- | --- |
| 0x00 | GPS Position ist gueltig |
| 0x01 | GPS Position ist nicht gueltig |
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

### TPDCSIGNAL

| WERT | TEXT |
| --- | --- |
| 0x01 | Vorderes Tonsignal |
| 0x02 | Hinteres Tonsignal |
| 0x03 | Aus |
| 0xFF | Nicht definiert |

### TPROCESSSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | Prozess nicht gestartet |
| 1 | Prozess läuft |
| 2 | Prozess beendet ohne Fehler |
| 3 | Prozess beendet mit Fehler |
| 255 | nicht definiert |

### TPROVISIONINGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | IDLE wurde nicht gestartet |
| 0x01 | ACTIVE laeuft noch |
| 0x02 | SUCCESS alles OK |
| 0x03 | mit Fehler beendet |
| 0xFF | Nicht definiert |

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

### TSTAT_REMOVE_CUSTOMER_UPDATES

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |

### TSATELLITSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Erkennbar |
| 0x01 | Aufgestoebert |
| 0xFF | Nicht definiert |

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

### TSOFTWAREUPDATEERRORCODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Fahrzeug während Update nicht in Stillstand |
| 0x02 | Update Abbruch |
| 0x03 | MOST Kommunikationsfehler |
| 0x04 | SWUP Quelle antwortet nicht |
| 0x05 | Gerät ausgelastet |
| 0x0F | Unspezifizierter Umwelt-Fehler |
| 0x10 | Neueste Version schon installiert |
| 0x11 | SWUP Package Container veraltet |
| 0x1F | Unspezifizierter Versions-Fehler |
| 0x20 | Neue I-Stufe nötig |
| 0x21 | SWUP - Zielgerät nicht verfügbar |
| 0x22 | Abhängigkeiten nicht erfüllt |
| 0x23 | Betroffene SWE nicht gefunden |
| 0x24 | Pre-Installation Skripte Fehler |
| 0x25 | Post-Installation Skripte Fehler |
| 0x26 | Fahrgestellnummer stimmt nicht |
| 0x2F | Unspezifizierbarer Fehler: Updatekompatibiliät |
| 0x30 | SWUP Weiterleitung nicht unterstützt |
| 0x31 | Nicht genug RAM |
| 0x32 | Nicht genug Flashspeicher |
| 0x33 | System überlastet |
| 0x34 | SWUP-Paket zu groß |
| 0x3F | Unspezifizierbarer Fehler: Ressourcebeschränkungen |
| 0x40 | SWIP Signaturverifikation fehlgeschlagen |
| 0x41 | SWIP XML-Datei korrupt |
| 0x42 | SWUP Hash Value stimmt nicht |
| 0x43 | SGBM korrupt oder unerwartetes Format |
| 0x44 | SWUP Signaturverifikation fehlgeschlagen |
| 0x4F | Unspezifizierter Fehler: Integrität oder Authentisierung |
| 0x50 | SWUP Download abgebrochen |
| 0x5F | Unspezifizierter Over-The-Air-Fehler |
| 0x60 | Keine Deinstallationinformationen verfügbar |
| 0x61 | Pre-Deinstallation Skripte Fehler |
| 0x62 | Post-Deinstallation Skripte Fehler |
| 0x6F | Unspezifierter Deinstallationfehler |
| 0x70 | Keine Update-Datei verfügbar |
| 0x71 | Update läuft |
| 0x72 | USB Gerät nicht angeschlossen |
| 0x7F | Unspezifierter Betriebsystemfehler |
| 0xE0 | Speicher oder Filesystem defekt |
| 0xE1 | Inkonsistenter System Status |
| 0xEF | Unspezifierter Systemdefekt oder inkonsistenter Systemstatus |
| 0xFF | Unspezifizierter Fehler |

### TSOFTWAREUPDATETYP

| WERT | TEXT |
| --- | --- |
| 0x00 | - |
| 0x01 | USB Installation |
| 0x02 | OTA Installation |
| 0x03 | Auto-Reinstallation |
| 0x04 | Entfernen des letzten Update |
| 0x05 | Entfernen aller Benutzerupdates per Diagnose |
| 0x06 | Auto-Deinstallation |
| 0x07 | Entfernung aller Updates durch den Kunden |
| 0xFF | undefiniert |

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

### TTESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | nicht definiert |

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

### STAT_WAKEUPSOURCE

| NR | TEXT |
| --- | --- |
| 1 | Weckursache = CAN |
| 2 | Weckursache = MOST |
| 3 | Weckursache = IPC |
| 4 | Weckursache = Intern |
| 5 | Weckursache = Reset |

### TGPSTIMEVALIDITY

| WERT | TEXT |
| --- | --- |
| 0x00 | Zeit ist gueltig |
| 0x01 | Zeit ist nicht gueltig |
| 0xFF | Nicht definiert |

### TATCVERSION

| WERT | TEXT |
| --- | --- |
| 0x00 | no ATC diagnosis possible |
| 0x01 | ATC diagnosis with track 12 measurement |
| 0x02 | ATC diagnosis with jitter measurement |
| 0xFF | Nicht definiert |

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
| 000036CD | EntryEvoMed US 1382  (SDARS,IBOC,USB1,BT,Video,OABR,CD) | EntryEvo |
| 000036CE | EntryEvoMed US 13F8   (SDARS IBOC MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 000036CF | EntryEvoMed US 13FA   (US SDARS IBOC CD MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 00003A05 | EntryEvoMed US 17FA  (SDARS,IBOC,USB2,HW_NAV,MOST,WLAN,2MICIN,BT,Video,OABR) | EntryEvo |
| 00003A06 | EntryEvoMed US 17FC  (SDARS,IBOC,USB2,HW_NAV,MOST,WLAN,2MICIN,BT,Video,OABR) | EntryEvo |
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
| 000040E1 | EntryEvoMed US 1200   (SDARS IBOC OABR1 BT USB1) | EntryEvo |
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
| 0xFFFFFFFF | unknown | unknown |

### DEVUDS_SWNAME

| WERT | NAME |
| --- | --- |
| 00000DED | Codierdaten NBT/ENTRYNAV |
| 00000E69 | Codierdaten NBT RSE |
| 00001275 | NBT Bootloader |
| 00001276 | NBT FLSL Powercontroller |
| 00001279 | NBT Media |
| 0000127A | NBT Core |
| 0000127B | NBT Navi |
| 0000127C | NBT Connectivity |
| 0000127D | NBT Speech |
| 00002219 | NBT TTS2 (orig. Speech Common) |
| 0000127E | NBT TTS |
| 0000127F | NBT SSS |
| 00001280 | NBT BMW HMI |
| 00001FAB | NBT RR HMI |
| 00001FA5 | NBT Mini HMI |
| 00001FA1 | NBT MCV HMI |
| 00001281 | NBT EQ |
| 00001282 | NBT Gateway Table |
| 00001277 | NBT IBA BMW Texte und Grafiken ECE |
| 00001278 | NBT IBA BMW Animationen und MP3 |
| 00001597 | NBT IBA BMW Texte und Grafiken US, JAP, ASIA |
| 00001F8A | NBT IBA RR Texte und Grafiken ECE |
| 00001F89 | NBT IBA RR Animationen und MP3 |
| 00001F8B | NBT IBA RR Texte und Grafiken US, JAP, ASIA |
| 00001F98 | NBT IBA Mini Texte und Grafiken ECE |
| 00001F97 | NBT IBA Mini Animationen und MP3 |
| 00001F9A | NBT IBA Mini Texte und Grafiken US, JAP, ASIA |
| 00001F9F | NBT IBA MCV Texte und Grafiken ECE |
| 00001F9E | NBT IBA MCV Animationen und MP3 |
| 00001FA0 | NBT IBA MCV Texte und Grafiken US, JAP, ASIA |
| 000014B0 | NBT KISU Media |
| 000014B1 | NBT KISU Connectivity |
| 000014B2 | NBT KISU Core |
| 000014B3 | NBT KISU HMI |
| 000014BA | NBT Map Oceania |
| 000014BB | NBT Map ME |
| 000014BC | NBT Map NAF |
| 000014BD | NBT Map SA |
| 000014BE | NBT Map SEA |
| 000014BF | NBT Map SAM |
| 000014B4 | NBT Map China |
| 000014B5 | NBT Map Taiwan |
| 000014B6 | NBT Map Korea |
| 000014B7 | NBT Map Japan |
| 000014B8 | NBT Map US |
| 000014B9 | NBT Map ECE |
| 000014C0 | NBT Map India |
| 000014C1 | NBT Map Israel |
| 000002E8 | Gracenote Datenbank (CIC!) |
| 000014C2 | NBT Gracenote (alt) |
| 00001A03 | NBT Gracenotes DB Rest of the World |
| 00001A04 | NBT Gracenotes DB EU |
| 00001A05 | NBT Gracenotes DB US |
| 00001A06 | NBT Gracenotes DB China-Korea |
| 00001A07 | NBT Gracenotes DB Japan |
| 00001E6B | NBT Core_Media_Connectivity_Nav |
| 00001283 | NBT RSE Bootloader |
| 00001284 | NBT RSE FLSL Powercontroller |
| 00001285 | NBT RSE Media |
| 00001286 | NBT RSE Core |
| 00001287 | NBT RSE Navi |
| 00001288 | NBT RSE Connecivity |
| 00001289 | NBT RSE HMI |
| 00001E76 | NBT RSE Core_Media_Connectivity_Nav |
| 00001159 | ENTRYNAV Bootloader FADO (testsig.) |
| 00001ABA | ENTRYNAV Bootloader FADO (scharfsig.) |
| 00001A2B | ENTRYNAV FLSL TEGRA (testsig.) |
| 0000246E | ENTRYNAV FLSL TEGRA (scharfsig.) |
| 0000125D | ENTRYNAV HMI FADO (testsig.) |
| 0000245B | ENTRYNAV HMI FADO (scharfsig.) |
| 0000115A | ENTRYNAV Gateway FADO (testsig.) |
| 0000245C | ENTRYNAV Gateway FADO (scharfsig.) |
| 0000115B | ENTRYNAV Vehiclecontroller FADO (testsig.) |
| 0000245D | ENTRYNAV Vehiclecontroller FADO (scharfsig.) |
| 0000115C | ENTRYNAV Maincontroller FADO (testsig.) |
| 0000245E | ENTRYNAV Maincontroller FADO (scharfsig.) |
| 00001FCB | ENTRYNAV EQ ExtFlash (testsig.) |
| 0000245F | ENTRYNAV EQ ExtFlash (scharfsig.) |
| 00001FCC | ENTRYNAV MP3 ExtFlash (testsig.) |
| 00002460 | ENTRYNAV MP3 ExtFlash (scharfsig.) |
| 00001FCD | ENTRYNAV WAVE ExtFlash (testsig.) |
| 00002461 | ENTRYNAV WAVE ExtFlash (scharfsig.) |
| 00001FCE | ENTRYNAV GW Tables ExtFlash (testsig.) |
| 00002462 | ENTRYNAV GW Tables ExtFlash (scharfsig.) |
| 0000224E | ENTRYNAV Ikon Pattern ExtFlash (testsig.) |
| 00002250 | ENTRYNAV Ikon Pattern ExtFlash (scharfsig.) |
| 00002463 | ENTRYNAV Ikon Pattern ExtFlash (scharfsig.) |
| 0000224F | ENTRYNAV Tegra Logistics ExtFlash (testsig.) |
| 00002251 | ENTRYNAV Tegra Logistics ExtFlash (scharfsig.) |
| 00002464 | ENTRYNAV Tegra Logistics ExtFlash (scharfsig.) |
| 0000177A | ENTRYNAV MAINTKERN Tegra (testsig.) |
| 0000246C | ENTRYNAV MAINTKERN Tegra (scharfsig.) |
| 00001E6C | ENTRYNAV Early Video File System Tegra (testsign.) |
| 00002465 | ENTRYNAV Early Video File System Tegra (scharfsign.) |
| 00001E6D | ENTRYNAV Application File System Tegra (testsign.) |
| 00002466 | ENTRYNAV Application File System Tegra (scharfsign.) |
| 00002261 | ENTRYNAV VAR Tegra (testsign.) |
| 0000225E | ENTRYNAV VAR Tegra (scharfsign.) |
| 00002262 | ENTRYNAV HMI Tegra (testsign.) |
| 0000225F | ENTRYNAV HMI Tegra (scharfsign.) |
| 00001F59 | ENTRYNAV FW IBOC Tegra (testsign.) |
| 00002467 | ENTRYNAV FW IBOC Tegra (scharfsign.) |
| 00001F5B | ENTRYNAV FW SDARS Tegra (testsign.) |
| 00002469 | ENTRYNAV FW SDARS Tegra (scharfsign.) |
| 00001F5A | ENTRYNAV FW DAB Tegra (testsign.) |
| 00002468 | ENTRYNAV FW DAB Tegra (scharfsign.) |
| 0000177B | ENTRYNAV APPKERN (depricated) |
| 00001E6E | ENTRYNAV ISPEECH (testsign.) |
| 0000246B | ENTRYNAV ISPEECH (scharfsign.) |
| 000022C3 | ENTRYNAV ISPEECH MediaVar. (testsign.) |
| 000022C4 | ENTRYNAV ISPEECH MediaVar. (scharfsign.) |
| 0000177C | ENTRYNAV IBADATA (testsig.) |
| 0000246A | ENTRYNAV IBADATA (scharfsig.) |
| 00001DE0 | ENAV Map Oceania |
| 00001DE1 | ENAV Map ME |
| 00001DE2 | ENAV Map NAF |
| 00001DE3 | ENAV Map SA |
| 00001DE4 | ENAV Map SEA |
| 00001DE5 | ENAV Map SAM |
| 00001DDD | ENAV Map China |
| 00001DDE | ENAV Map US |
| 00001DDF | ENAV Map ECE |
| 00001DE6 | ENAV Map India |
| 00001DE7 | ENAV Map Israel |
| 000024AC | ENAV Map Twaiwan |
| 00002472 | ENAV Map Argentina |
| 00002471 | ENAV Map Turkey |
| 00001EF5 | NBTevo Bootloader (tests.) |
| 00001FFD | NBTevo Bootloader (scharfs.) |
| 00002196 | NBTevo FLSL Powercontroller (tests.) |
| 00002708 | NBTevo FLSL Powercontroller (scharfs.) |
| 00001EF6 | NBTevo/EntryEvo CAFD |
| 0000218D | NBTevo Core_Media_Connectivity_Nav (tests.) |
| 000021BA | NBTevo Speech Common (tests.) |
| 000021BB | NBTevo Speech Asia (tests.) |
| 000021BC | NBTevo Speech US (tests.) |
| 000021BD | NBTevo Speech ECE (tests.) |
| 00002190 | NBTevo TTS (tests.) |
| 00002191 | NBTevo SSS (tests.) |
| 00002198 | NBTevo HMI Common (tests.) |
| 000021C7 | NBTevo HMI Common OL (depricated) |
| 000021C3 | NBTevo BMW HMI (tests.) |
| 00001FA6 | NBTevo RR HMI (tests.) |
| 00001F99 | NBTevo Mini HMI (tests.) |
| 00001FA2 | NBTevo MCV HMI (tests.) |
| 0000271A | NBTevo Core_Media_Connectivity_Nav (scharfs.) |
| 00002727 | NBTevo Speech Common (scharfs.) |
| 0000271B | NBTevo Speech (scharfs.) |
| 00002721 | NBTevo Speech Asia (scharfs.) |
| 00002722 | NBTevo Speech US (scharfs.) |
| 00002723 | NBTevo Speech ECE (scharfs.) |
| 0000271C | NBTevo TTS (scharfs.) |
| 0000271D | NBTevo SSS (scharfs.) |
| 00002720 | NBTevo HMI Common (scharfs.) |
| 00002719 | NBTevo BMW HMI (scharfs.) |
| 00002718 | NBTevo RR HMI (scharfs.) |
| 00002716 | NBTevo Mini HMI (scharfs.) |
| 00002717 | NBTevo MCV HMI (scharfs.) |
| 00002192 | NBTevo EQ (tests.) |
| 000021C6 | NBTevo Gateway Table OL (depricated) |
| 00002193 | NBTevo Gateway Table (testsig.) |
| 0000271E | NBTevo EQ (scharfs.) |
| 0000271F | NBTevo Gateway Table (scharfs.) |
| 000021B0 | NBTevo IBA BMW Texte und Grafiken ECE (testsig.) |
| 000021B2 | NBTevo IBA BMW Animationen und MP3 (testsig.) |
| 000021B1 | NBTevo IBA BMW Texte und Grafiken US, JAP, ASIA (testsig.) |
| 0000270D | NBTevo IBA BMW Texte und Grafiken ECE (scharfs.) |
| 0000270C | NBTevo IBA BMW Animationen und MP3 (scharfs.) |
| 00002712 | NBTevo IBA BMW Texte und Grafiken US, JAP, ASIA (scharfs.) |
| 00001FA8 | NBTevo IBA RR Texte und Grafiken ECE (testsig.) |
| 00001FA7 | NBTevo IBA RR Animationen und MP3 (testsig.) |
| 00001FA9 | NBTevo IBA RR Texte und Grafiken US, JAP, ASIA (testsig.) |
| 00002710 | NBTevo IBA RR Texte und Grafiken ECE (scharfs.) |
| 0000270B | NBTevo IBA RR Animationen und MP3 (scharfs.) |
| 00002714 | NBTevo IBA RR Texte und Grafiken US, JAP, ASIA (scharfs.) |
| 00001F9C | NBTevo IBA Mini Texte und Grafiken ECE (testsig.) |
| 00001F9B | NBTevo IBA Mini Animationen und MP3 (testsig.) |
| 00001F9D | NBTevo IBA Mini Texte und Grafiken US, JAP, ASIA (testsig.) |
| 0000270E | NBTevo IBA Mini Texte und Grafiken ECE (scharfs.) |
| 00002709 | NBTevo IBA Mini Animationen und MP3 (scharfs.) |
| 00002711 | NBTevo IBA Mini Texte und Grafiken US, JAP, ASIA (scharfs.) |
| 00001FA4 | NBTevo IBA MCV Texte und Grafiken ECE (testsig.) |
| 00001FA3 | NBTevo IBA MCV Animationen und MP3 (testsig.) |
| 00001FAA | NBTevo IBA MCV Texte und Grafiken US, JAP, ASIA (testsig.) |
| 0000270F | NBTevo IBA MCV Texte und Grafiken ECE (scharfs.) |
| 0000270A | NBTevo IBA MCV Animationen und MP3 (scharfs.) |
| 00002713 | NBTevo IBA MCV Texte und Grafiken US, JAP, ASIA (scharfs.) |
| 000025D8 | NBTevo Gracenotes DB RoW |
| 000025D9 | NBTevo Gracenotes DB EU |
| 000025DA | NBTevo Gracenotes DB US |
| 000025DB | NBTevo Gracenotes DB China-Korea |
| 000025DC | NBTevo Gracenotes DB Japan |
| 0000249E | NBTevo Map Oceania |
| 0000249F | NBTevo Map ME |
| 000024A1 | NBTevo Map NAF |
| 000024A0 | NBTevo Map SA |
| 000024A2 | NBTevo Map SEA |
| 000024A3 | NBT Map SAM |
| 000024A4 | NBTevo Map China |
| 000024A5 | NBTevo Map Taiwan |
| 000024AB | NBTevo Map Korea |
| 000024A6 | NBTevo Map Japan |
| 000024A7 | NBTevo Map US |
| 000024A8 | NBTevo Map ECE |
| 000024A9 | NBTevo Map India |
| 000024AA | NBTevo Map Israel |
| 00002354 | NBTevo Map Argentina |
| 00002355 | NBTevo Map Turkey |
| 00001EF8 | NBTevo RSE Bootloader (tests.) |
| 0000200F | NBTevo RSE Bootloader (scharfs.) |
| 00001EFA | NBTevo RSE CAFD |
| 0000218B | NBTevo RSE FLSL Powercontroller (tests.) |
| 00002704 | NBTevo RSE FLSL Powercontroller (scharfs.) |
| 00002183 | NBTevo RSE Core_Media_Connectivity_Nav (tests.) |
| 00002189 | NBTevo RSE HMI BMW (testsig.) |
| 0000218A | NBTevo RSE HMI RR (testsig.) |
| 00002180 | NBTevo RSE HMI Common (testsig.) |
| 00002181 | NBTevo RSE HMI Common (testsig.) |
| 00002734 | NBTevo RSE Core_Media_Connectivity_Nav (scharfs.)) |
| 00002736 | NBTevo RSE HMI BMW (scharfs.) |
| 00002737 | NBTevo RSE HMI RR (scharfs.) |
| 00002732 | NBTevo RSE HMI Common (scharfs.) |
| 00002733 | NBTevo RSE HMI (scharfs.) |
| 00002BF6 | EntryEvo Bootloader (tests.) |
| 00002BF7 | EntryEvo SWFL System (tests.) |
| 00002BF8 | EntryEvo SWFL RL78 (tests.) |
| 00002BF9 | EntryEvo SWFL SiriusXM (tests.) |
| 00002BFA | EntryEvo SWFL DAB (tests.) |
| 00002BFB | EntryEvo SWFL DiRaNa (tests.) |
| 00002BFC | EntryEvo SWFL EQ (tests.) |
| 00002BFD | EntryEvo SWFL GWT (tests.) |
| 00002BFE | EntryEvo SWFL HMI/ISpeech (tests.) |
| 00002C01 | EntryEvo SWFL ISpeech language 1 (tests.) |
| 00002C02 | EntryEvo SWFL ISpeech language 2 (tests.) |
| 00002C03 | EntryEvo SWFL ISpeech language 3 (tests.) |
| 00002C04 | EntryEvo SWFL ISpeech language 4 (tests.) |
| 00002C05 | EntryEvo SWFL HMI Graphic (tests.) |
| 00002C06 | EntryEvo SWFL HMI Text (tests.) |
| 00002C07 | EntryEvo SWFL Navigation (tests.) |
| 00002BFF | EntryEvo IBAD 1 (tests.) |
| 00002C00 | EntryEvo IBAD 2 (tests.) |
| 0xFFFFFFFF | unknown |

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

### HWEL_HU_MAPPING

| WERT | NAME |
| --- | --- |
| 0x00000000 | unknown |
| 00000DF5 | NBT-HB |
| 00000DF6 | NBT-HB |
| 00000DF7 | NBT-HB |
| 00000DF8 | NBT-JAP |
| 00000DF9 | NBT-HB |
| 00001018 | NBT-APN |
| 00001019 | NBT-APN |
| 0000101A | NBT-APN |
| 0000101B | NBT-HB |
| 00001294 | NBT-HB |
| 00001295 | NBT-HB |
| 00001296 | NBT-HB |
| 00001297 | NBT-HB |
| 00001A44 | NBT-HB |
| 000018C2 | NBT-HB |
| 00001A41 | NBT-APN |
| 000018C3 | NBT-HB |
| 00001A42 | NBT-JAP |
| 00001A43 | NBT-APN |
| 00001703 | EntryNav |
| 00001704 | EntryNav |
| 00001705 | EntryNav |
| 00001706 | EntryNav |
| 000019FA | EntryNav |
| 0000274C | EntryNav |
| 000019F9 | EntryNav |
| 0000274D | EntryNav |
| 0000274E | EntryNav |
| 00002750 | EntryNav |
| 0000274F | EntryNav |
| 000019FC | EntryNav-CNTW |
| 00002753 | EntryNav-CNTW |
| 00002754 | EntryNav-CNTW |
| 000022E3 | NBTevo-HB |
| 000022E4 | NBTevo-HB |
| 000022E5 | NBTevo-HB |
| 00002479 | NBTevo-HB-35up |
| 0000247A | NBTevo-HB-35up |
| 000026B9 | NBTevo-HB-35up |
| 00002C14 | NBTevo-HB-35up |
| 000022E6 | NBTevo-APN |
| 000022E7 | NBTevo-APN |
| 000022E8 | NBTevo-APN |
| 00002AB8 | NBTevo-APN-35up |
| 00002AB9 | NBTevo-APN-35up |
| 0000247B | NBTevo-APN-35up |
| 000026BA | NBTevo-APN-35up |
| 000026BB | NBTevo-APN-35up |
| 00001EF3 | NBTevo-APN-35up |
| 00003A09 | NBTevo-HB-35up |
| 00003A0A | NBTevo-HB-35up |
| 00003A0B | NBTevo-HB-35up |
| 00003A0C | NBTevo-APN-35up |
| 000031DC | NBTevo-HB |
| 000031DD | NBTevo-HB |
| 000031DE | NBTevo-HB |
| 000031DF | NBTevo-APN |
| 000031E0 | NBTevo-APN |
| 000031E1 | NBTevo-APN |
| 00002FC2 | NBTevo-HB-35up |
| 00002FC3 | NBTevo-HB-35up |
| 00002FC4 | NBTevo-HB-35up |
| 00002FC5 | NBTevo-APN-35up |
| 0000277C | EntryEvo-APN |
| 0000277D | EntryEvo-APN |
| 00002F4F | EntryEvo-APN |
| 00002F50 | EntryEvo-APN |
| 0xFFFFFFFF | unknown |

### SERVICEHISTORY

| WERT | NAME |
| --- | --- |
| 0x00 | Everything OK |
| 0x01 | Out of Memory |
| 0x02 | Data inconsistency |
| 0x04 | No writing permission |
| 0x05 | Unknown Error |
