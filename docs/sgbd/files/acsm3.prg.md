# acsm3.prg

## General

|  |  |
| --- | --- |
| File | acsm3.prg |
| Type | PRG |
| Jobs | 53 |
| Tables | 22 |
| Origin | BMW EI-622 Stephan_Muhr |
| Revision | 3.205 |
| Author | BERATA EI-622 Burget, BMW EI-622 Muhr, BERATA EI-620 Payandeh, |
| ECU Comment | Zentrales Airbagauslösegerät für den F01, F02, F03, F04, F07, F10, F11, F18, RR4 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ACSM3 Zentrales Airbagauslösegerät für den F01, F02, F03, F04, F07, F10, F11, F18, RR4 |  |  |
| ORIGIN | string | BMW EI-622 Stephan_Muhr |  |  |
| REVISION | string | 3.205 |  |  |
| AUTHOR | string | BERATA EI-622 Burget, BMW EI-622 Muhr, BERATA EI-620 Payandeh,  |  |  |
| COMMENT | string | Zentrales Airbagauslösegerät für den F01, F02, F03, F04, F07, F10, F11, F18, RR4 |  |  |
| PACKAGE | string | 1.37 |  |  |
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

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

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

### _SYSTEMZEIT_AKTUELL

Momentane Systemzeit lesen UDS   : $22   ReadDataByIdentifier UDS   : $FD   aktuelle Systemzeit UDS   : $21

_No arguments._

### _POWER_ON_ZAEHLER

Gesamte Anzahl der Power On Zyklen seit Auslieferung des SG UDS   : $22   ReadDataByIdentifier UDS   : $FD   Power On Zaehler UDS   : $22

_No arguments._

### _KENNUNG_ZE_PARAMETER

CRASH- und FGS-Algo Kennung des in der ZE (Zentral Elektronik) eingeschriebenen Parametersatzes UDS   : $22   ReadDataByIdentifier UDS   : $FD   Kennung Crash und FGS-Algo, je 32 Bytes lang UDS   : $23   nicht benötigte Stellen werden mit Leerzeichen (20h) aufgefüllt

_No arguments._

### _SYSTEMZEIT_LETZTES_FS_LOESCHEN

Systemzeit vom letzten fs_loeschen UDS   : $22   ReadDataByIdentifier UDS   : $FD   Systemzeit letztes fs_loeschen UDS   : $24

_No arguments._

### _SYSTEMZEIT_POWER_ON

Systemzeit vom letzten Power On UDS   : $22   ReadDataByIdentifier UDS   : $FD   Systemzeit vom letzten Power On Reset UDS   : $25

_No arguments._

### _ZEITSTEMPEL_POWER_ON

Systemzeit vom letzten Power On (Relativzeit) UDS   : $22   ReadDataByIdentifier UDS   : $FD   Zeitstempel vom letzten Power On Reset UDS   : $26

_No arguments._

### _SATELLITEN_ERROR_ZAEHLER

Zähler für fehlerhafte Satelliten-Telegramme UDS   : $22   ReadDataByIdentifier UDS   : $FD   Zähler für fehlerhafte Satelliten-Telegramme UDS   : $27

_No arguments._

### _SYSTEMZEIT_ZEITMASTER

Momentane Systemzeit vom Zeitmaster UDS   : $22   ReadDataByIdentifier UDS   : $FD   Systemzeit vom Zeitmaster UDS   : $30

_No arguments._

### VERRIEGELUNG_SCHREIBEN

Das Steuergeraet wird verriegelt +++++ Nach dem Verriegeln wird automatisch ein RESET ausgeführt! ++++++ $2E WriteDataByCommonIdentifier $0E80 ACSM3 Prüfstempel Modus  : Default ---Steuergeraet kann NUR durch die Entwicklung entriegelt werden.--- Nach dem Ausführen des Jobs kein RESET durchführen. Nach dem Ausführen des Jobs muss ein Delay von 6s eingehalten werden, damit der Predrive Check (PDC) vollständig abgearbeitet werden kann. Erst danach Fehlerspeicher löschen und dann Fehlerspeicher lesen.

_No arguments._

### VERRIEGELUNG_LESEN

Auslesen des ACSM3 Pruefstempels / Sind Airbags scharfgeschaltet? $22 ReadDataByCommonIdentifier $0E80 ACSM3 Prüfstempel Modus  : Default  BYTE1=BYTE2=BYTE3 = 255 = 0xFF = nicht verriegelt sonst = verriegelt

_No arguments._

### STEUERN_POL

Passenger Airbag Off Leuchte (POL) ansteuern UDS   : $2E   WriteDataByIdentifier UDS   : $FD   Vorgabe Ein/Ausgabestatus UDS   : $03   POL

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | Sollzustand: 0: Aus, 1: Ein Defaultwert: 1 |

### STEUERN_AWL

Airbagwarnleuchte (AWL) ansteuern UDS   : $2E   WriteDataByIdentifier UDS   : $FD   Vorgabe Ein/Ausgabestatus UDS   : $04   AWL

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | Sollzustand: 0: Aus, 1: Ein Defaultwert: 1 |

### STEUERN_NOTRUF

Funktionstest TCU Schnittstelle Telefon-Notruf UDS   : $31   RoutineControl UDS   : $01   StartRoutine UDS   : $A4   TCU Notruf UDS   : $00

_No arguments._

### DOM_DATA_LESEN

Satelliten-Seriennummern fuer DOM-Datenbank UDS   : $22   ReadDataByIdentifier UDS   : $FD   Seriennummer UDS   : $28,$29   Satelliten / Sensorcluster

_No arguments._

### BMW_SACHNUMMER_LESEN

ECU BMW Sachnummer lesen UDS   : $22   ReadDataByIdentifier UDS   : $FD UDS   : $50 BCD Format

_No arguments._

### FAHRGESTELLNUMMER_LESEN

Fahrgestellnummer (VIN) lesen UDS   : $22   ReadDataByIdentifier UDS   : $F1 UDS   : $90

_No arguments._

### ODS_PARAMETER_CODIEREN

$31 RoutineControl Request $01 startRoutine $F040 ODS Parametersatz codieren

_No arguments._

### SBE_DATEN_LESEN

Sitzbelegungserkennungsmatten (SBE) Daten Lesen UDS   : $22   ReadDataByIdentifier UDS   : $0E   SBE-Daten UDS   : $85 Es werden die Rohdaten ausgegeben

_No arguments._

### STATUS_ZUENDKREISWIDERSTAENDE

Zugriff auf Steuergeraete Ein- und Ausgaenge UDS   : $22   ReadDataByIdentifier UDS   : $FD   Ein/-Ausgangsstatus lesen UDS   : $01   Zuendkreiswiderstaende

_No arguments._

### STATUS_GURTKONTAKTE

Zugriff auf Steuergeraete Ein- und Ausgaenge UDS   : $22   ReadDataByIdentifier UDS   : $FD   Codierdaten UDS   : $02   Gurtkontakte POS SPS

_No arguments._

### STATUS_FREIGABE_ZUENDKREISE

Zugriff auf Steuergeraete Ein- und Ausgaenge UDS   : $22   ReadDataByIdentifier UDS   : $FD   Codierdaten UDS   : $05   Ausstattung

_No arguments._

### STATUS_AUSSTATTUNG

IO Bytes des Steuergeraets UDS   : $22   ReadDataByIdentifier UDS   : $30   Codierdaten UDS   : $00   Ausstattung

_No arguments._

### STATUS_LESEN2

IO Bytes des Steuergeraets UDS   : $22   ReadDataByIdentifier UDS   : $0E   IO Bytes UDS   : $00   I/O BYTES

_No arguments._

### STATUS_LENKSEITE

IO Bytes des Steuergeraets UDS   : $22   ReadDataByIdentifier UDS   : $30   Codierdaten UDS   : $10   CRS Flag Lenkseite Linkslenker/Rechtslenker

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

### ACSM3_INNENTEMPERATUR

| WERT | UWTEXT |
| --- | --- |
| 1 | -73 °C |
| 2 | -64 °C |
| 3 | -59 °C |
| 4 | -55 °C |
| 5 | -51 °C |
| 6 | -49 °C |
| 7 | -46 °C |
| 8 | -44 °C |
| 9 | -42 °C |
| 10 | -41 °C |
| 11 | -39 °C |
| 12 | -38 °C |
| 13 | -36 °C |
| 14 | -35 °C |
| 15 | -34 °C |
| 16 | -32 °C |
| 17 | -31 °C |
| 18 | -30 °C |
| 19 | -29 °C |
| 20 | -28 °C |
| 21 | -27 °C |
| 22 | -26 °C |
| 23 | -26 °C |
| 24 | -25 °C |
| 25 | -24 °C |
| 26 | -23 °C |
| 27 | -22 °C |
| 28 | -22 °C |
| 29 | -21 °C |
| 30 | -20 °C |
| 31 | -19 °C |
| 32 | -19 °C |
| 33 | -18 °C |
| 34 | -17 °C |
| 35 | -17 °C |
| 36 | -16 °C |
| 37 | -15 °C |
| 38 | -15 °C |
| 39 | -14 °C |
| 40 | -14 °C |
| 41 | -13 °C |
| 42 | -12 °C |
| 43 | -12 °C |
| 44 | -11 °C |
| 45 | -11 °C |
| 46 | -10 °C |
| 47 | -10 °C |
| 48 | -9 °C |
| 49 | -9 °C |
| 50 | -8 °C |
| 51 | -8 °C |
| 52 | -7 °C |
| 53 | -7 °C |
| 54 | -6 °C |
| 55 | -6 °C |
| 56 | -5 °C |
| 57 | -5 °C |
| 58 | -4 °C |
| 59 | -4 °C |
| 60 | -3 °C |
| 61 | -3 °C |
| 62 | -2 °C |
| 63 | -2 °C |
| 64 | -1 °C |
| 65 | -1 °C |
| 66 | 0 °C |
| 67 | 0 °C |
| 68 | 0 °C |
| 69 | 1 °C |
| 70 | 1 °C |
| 71 | 2 °C |
| 72 | 2 °C |
| 73 | 3 °C |
| 74 | 3 °C |
| 75 | 4 °C |
| 76 | 4 °C |
| 77 | 4 °C |
| 78 | 5 °C |
| 79 | 5 °C |
| 80 | 6 °C |
| 81 | 6 °C |
| 82 | 6 °C |
| 83 | 7 °C |
| 84 | 7 °C |
| 85 | 8 °C |
| 86 | 8 °C |
| 87 | 9 °C |
| 88 | 9 °C |
| 89 | 9 °C |
| 90 | 10 °C |
| 91 | 10 °C |
| 92 | 11 °C |
| 93 | 11 °C |
| 94 | 11 °C |
| 95 | 12 °C |
| 96 | 12 °C |
| 97 | 13 °C |
| 98 | 13 °C |
| 99 | 13 °C |
| 100 | 14 °C |
| 101 | 14 °C |
| 102 | 15 °C |
| 103 | 15 °C |
| 104 | 15 °C |
| 105 | 16 °C |
| 106 | 16 °C |
| 107 | 17 °C |
| 108 | 17 °C |
| 109 | 17 °C |
| 110 | 18 °C |
| 111 | 18 °C |
| 112 | 19 °C |
| 113 | 19 °C |
| 114 | 19 °C |
| 115 | 20 °C |
| 116 | 20 °C |
| 117 | 21 °C |
| 118 | 21 °C |
| 119 | 21 °C |
| 120 | 22 °C |
| 121 | 22 °C |
| 122 | 23 °C |
| 123 | 23 °C |
| 124 | 23 °C |
| 125 | 24 °C |
| 126 | 24 °C |
| 127 | 25 °C |
| 128 | 25 °C |
| 129 | 25 °C |
| 130 | 26 °C |
| 131 | 26 °C |
| 132 | 27 °C |
| 133 | 27 °C |
| 134 | 27 °C |
| 135 | 28 °C |
| 136 | 28 °C |
| 137 | 29 °C |
| 138 | 29 °C |
| 139 | 30 °C |
| 140 | 30 °C |
| 141 | 30 °C |
| 142 | 31 °C |
| 143 | 31 °C |
| 144 | 32 °C |
| 145 | 32 °C |
| 146 | 33 °C |
| 147 | 33 °C |
| 148 | 34 °C |
| 149 | 34 °C |
| 150 | 34 °C |
| 151 | 35 °C |
| 152 | 35 °C |
| 153 | 36 °C |
| 154 | 36 °C |
| 155 | 37 °C |
| 156 | 37 °C |
| 157 | 38 °C |
| 158 | 38 °C |
| 159 | 39 °C |
| 160 | 39 °C |
| 161 | 40 °C |
| 162 | 40 °C |
| 163 | 41 °C |
| 164 | 41 °C |
| 165 | 42 °C |
| 166 | 42 °C |
| 167 | 43 °C |
| 168 | 43 °C |
| 169 | 44 °C |
| 170 | 44 °C |
| 171 | 45 °C |
| 172 | 45 °C |
| 173 | 46 °C |
| 174 | 46 °C |
| 175 | 47 °C |
| 176 | 47 °C |
| 177 | 48 °C |
| 178 | 48 °C |
| 179 | 49 °C |
| 180 | 50 °C |
| 181 | 50 °C |
| 182 | 51 °C |
| 183 | 51 °C |
| 184 | 52 °C |
| 185 | 52 °C |
| 186 | 53 °C |
| 187 | 54 °C |
| 188 | 54 °C |
| 189 | 55 °C |
| 190 | 56 °C |
| 191 | 56 °C |
| 192 | 57 °C |
| 193 | 58 °C |
| 194 | 58 °C |
| 195 | 59 °C |
| 196 | 60 °C |
| 197 | 60 °C |
| 198 | 61 °C |
| 199 | 62 °C |
| 200 | 63 °C |
| 201 | 63 °C |
| 202 | 64 °C |
| 203 | 65 °C |
| 204 | 66 °C |
| 205 | 67 °C |
| 206 | 68 °C |
| 207 | 68 °C |
| 208 | 69 °C |
| 209 | 70 °C |
| 210 | 71 °C |
| 211 | 72 °C |
| 212 | 73 °C |
| 213 | 74 °C |
| 214 | 75 °C |
| 215 | 76 °C |
| 216 | 77 °C |
| 217 | 78 °C |
| 218 | 79 °C |
| 219 | 80 °C |
| 220 | 82 °C |
| 221 | 83 °C |
| 222 | 84 °C |
| 223 | 85 °C |
| 224 | 87 °C |
| 225 | 88 °C |
| 226 | 90 °C |
| 227 | 91 °C |
| 228 | 93 °C |
| 229 | 94 °C |
| 230 | 96 °C |
| 231 | 98 °C |
| 232 | 100 °C |
| 233 | 101 °C |
| 234 | 103 °C |
| 235 | 106 °C |
| 236 | 108 °C |
| 237 | 110 °C |
| 238 | 113 °C |
| 239 | 116 °C |
| 240 | 118 °C |
| 241 | 122 °C |
| 242 | 125 °C |
| 243 | 129 °C |
| 244 | 133 °C |
| 245 | 137 °C |
| 246 | 142 °C |
| 247 | 148 °C |
| 248 | 154 °C |
| 249 | 162 °C |
| 250 | 171 °C |
| 251 | 182 °C |
| 252 | 197 °C |
| 253 | 216 °C |
| 254 | 247 °C |
| 255 | Unbekannt |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x020100 | Flashmode_aktiv: Aktivierung des Flashmode | 1 |
| 0x02FF01 | Diagnosemaster Testfehler : Application | 0 |
| 0x930900 | ZK1 : Airbag Fahrer 1. Stufe : Plausibilitaetsfehler | 0 |
| 0x930901 | ZK1 : Airbag Fahrer 1. Stufe : Kurzschluss nach Masse | 0 |
| 0x930902 | ZK1 : Airbag Fahrer 1. Stufe : Kurzschluss nach Plus | 0 |
| 0x930903 | ZK1 : Airbag Fahrer 1. Stufe : Widerstand zu klein | 0 |
| 0x930904 | ZK1 : Airbag Fahrer 1. Stufe : Widerstand zu groß | 0 |
| 0x930905 | ZK1 : Airbag Fahrer 1. Stufe : Leitung verkoppelt | 0 |
| 0x930906 | ZK2 : Airbag Fahrer 2. Stufe : Plausibilitaetsfehler | 0 |
| 0x930907 | ZK2 : Airbag Fahrer 2. Stufe : Kurzschluss nach Masse | 0 |
| 0x930908 | ZK2 : Airbag Fahrer 2. Stufe : Kurzschluss nach Plus | 0 |
| 0x930909 | ZK2 : Airbag Fahrer 2. Stufe : Widerstand zu klein | 0 |
| 0x93090A | ZK2 : Airbag Fahrer 2. Stufe : Widerstand zu groß | 0 |
| 0x93090B | ZK2 : Airbag Fahrer 2. Stufe : Leitung verkoppelt | 0 |
| 0x93090C | ZK3 : Airbag Fahrer Ventil : Plausibilitaetsfehler | 0 |
| 0x93090D | ZK3 : Airbag Fahrer Ventil : Kurzschluss nach Masse | 0 |
| 0x93090E | ZK3 : Airbag Fahrer Ventil : Kurzschluss nach Plus | 0 |
| 0x93090F | ZK3 : Airbag Fahrer Ventil : Widerstand zu klein | 0 |
| 0x930910 | ZK3 : Airbag Fahrer Ventil : Widerstand zu groß | 0 |
| 0x930911 | ZK3 : Airbag Fahrer Ventil : Leitung verkoppelt | 0 |
| 0x930912 | ZK4 : Airbag Beifahrer 1. Stufe : Plausibilitaetsfehler | 0 |
| 0x930913 | ZK4 : Airbag Beifahrer 1. Stufe : Kurzschluss nach Masse | 0 |
| 0x930914 | ZK4 : Airbag Beifahrer 1. Stufe : Kurzschluss nach Plus | 0 |
| 0x930915 | ZK4 : Airbag Beifahrer 1. Stufe : Widerstand zu klein | 0 |
| 0x930916 | ZK4 : Airbag Beifahrer 1. Stufe : Widerstand zu groß | 0 |
| 0x930917 | ZK4 : Airbag Beifahrer 1. Stufe : Leitung verkoppelt | 0 |
| 0x930918 | ZK5 : Airbag Beifahrer 2. Stufe : Plausibilitaetsfehler | 0 |
| 0x930919 | ZK5 : Airbag Beifahrer 2. Stufe : Kurzschluss nach Masse | 0 |
| 0x93091A | ZK5 : Airbag Beifahrer 2. Stufe : Kurzschluss nach Plus | 0 |
| 0x93091B | ZK5 : Airbag Beifahrer 2. Stufe : Widerstand zu klein | 0 |
| 0x93091C | ZK5 : Airbag Beifahrer 2. Stufe : Widerstand zu groß | 0 |
| 0x93091D | ZK5 : Airbag Beifahrer 2. Stufe : Leitung verkoppelt | 0 |
| 0x93091E | ZK6 : Airbag Beifahrer Ventil : Plausibilitaetsfehler | 0 |
| 0x93091F | ZK6 : Airbag Beifahrer Ventil : Kurzschluss nach Masse | 0 |
| 0x930920 | ZK6 : Airbag Beifahrer Ventil : Kurzschluss nach Plus | 0 |
| 0x930921 | ZK6 : Airbag Beifahrer Ventil : Widerstand zu klein | 0 |
| 0x930922 | ZK6 : Airbag Beifahrer Ventil : Widerstand zu groß | 0 |
| 0x930923 | ZK6 : Airbag Beifahrer Ventil : Leitung verkoppelt | 0 |
| 0x930924 | ZK7 : Gurtstrammer Fahrer : Plausibilitaetsfehler | 0 |
| 0x930925 | ZK7 : Gurtstrammer Fahrer : Kurzschluss nach Masse | 0 |
| 0x930926 | ZK7 : Gurtstrammer Fahrer : Kurzschluss nach Plus | 0 |
| 0x930927 | ZK7 : Gurtstrammer Fahrer : Widerstand zu klein | 0 |
| 0x930928 | ZK7 : Gurtstrammer Fahrer : Widerstand zu groß | 0 |
| 0x930929 | ZK7 : Gurtstrammer Fahrer : Leitung verkoppelt | 0 |
| 0x93092A | ZK8 : Endbeschlagstrammer Fahrer : Plausibilitaetsfehler | 0 |
| 0x93092B | ZK8 : Endbeschlagstrammer Fahrer : Kurzschluss nach Masse | 0 |
| 0x93092C | ZK8 : Endbeschlagstrammer Fahrer : Kurzschluss nach Plus | 0 |
| 0x93092D | ZK8 : Endbeschlagstrammer Fahrer : Widerstand zu klein | 0 |
| 0x93092E | ZK8 : Endbeschlagstrammer Fahrer : Widerstand zu groß | 0 |
| 0x93092F | ZK8 : Endbeschlagstrammer Fahrer : Leitung verkoppelt | 0 |
| 0x930930 | ZK9 : Gurtkraftbegrenzer Fahrer : Plausibilitaetsfehler | 0 |
| 0x930931 | ZK9 : Gurtkraftbegrenzer Fahrer : Kurzschluss nach Masse | 0 |
| 0x930932 | ZK9 : Gurtkraftbegrenzer Fahrer : Kurzschluss nach Plus | 0 |
| 0x930933 | ZK9 : Gurtkraftbegrenzer Fahrer : Widerstand zu klein | 0 |
| 0x930934 | ZK9 : Gurtkraftbegrenzer Fahrer : Widerstand zu groß | 0 |
| 0x930935 | ZK9 : Gurtkraftbegrenzer Fahrer : Leitung verkoppelt | 0 |
| 0x930936 | ZK10: Gurtstrammer Beifahrer : Plausibilitaetsfehler | 0 |
| 0x930937 | ZK10: Gurtstrammer Beifahrer : Kurzschluss nach Masse | 0 |
| 0x930938 | ZK10: Gurtstrammer Beifahrer : Kurzschluss nach Plus | 0 |
| 0x930939 | ZK10: Gurtstrammer Beifahrer : Widerstand zu klein | 0 |
| 0x93093A | ZK10: Gurtstrammer Beifahrer : Widerstand zu groß | 0 |
| 0x93093B | ZK10: Gurtstrammer Beifahrer : Leitung verkoppelt | 0 |
| 0x93093C | ZK11: Endbeschlagstrammer Beifahrer : Plausibilitaetsfehler | 0 |
| 0x93093D | ZK11: Endbeschlagstrammer Beifahrer : Kurzschluss nach Masse | 0 |
| 0x93093E | ZK11: Endbeschlagstrammer Beifahrer : Kurzschluss nach Plus | 0 |
| 0x93093F | ZK11: Endbeschlagstrammer Beifahrer : Widerstand zu klein | 0 |
| 0x930940 | ZK11: Endbeschlagstrammer Beifahrer : Widerstand zu groß | 0 |
| 0x930941 | ZK11: Endbeschlagstrammer Beifahrer : Leitung verkoppelt | 0 |
| 0x930942 | ZK12: Gurtkraftbegrenzer Beifahrer : Plausibilitaetsfehler | 0 |
| 0x930943 | ZK12: Gurtkraftbegrenzer Beifahrer : Kurzschluss nach Masse | 0 |
| 0x930944 | ZK12: Gurtkraftbegrenzer Beifahrer : Kurzschluss nach Plus | 0 |
| 0x930945 | ZK12: Gurtkraftbegrenzer Beifahrer : Widerstand zu klein | 0 |
| 0x930946 | ZK12: Gurtkraftbegrenzer Beifahrer : Widerstand zu groß | 0 |
| 0x930947 | ZK12: Gurtkraftbegrenzer Beifahrer : Leitung verkoppelt | 0 |
| 0x930948 | ZK13: Knieairbag Fahrer : Plausibilitaetsfehler | 0 |
| 0x930949 | ZK13: Knieairbag Fahrer : Kurzschluss nach Masse | 0 |
| 0x93094A | ZK13: Knieairbag Fahrer : Kurzschluss nach Plus | 0 |
| 0x93094B | ZK13: Knieairbag Fahrer : Widerstand zu klein | 0 |
| 0x93094C | ZK13: Knieairbag Fahrer : Widerstand zu groß | 0 |
| 0x93094D | ZK13: Knieairbag Fahrer : Leitung verkoppelt | 0 |
| 0x93094E | ZK14: Knieairbag Beifahrer : Plausibilitaetsfehler | 0 |
| 0x93094F | ZK14: Knieairbag Beifahrer : Kurzschluss nach Masse | 0 |
| 0x930950 | ZK14: Knieairbag Beifahrer : Kurzschluss nach Plus | 0 |
| 0x930951 | ZK14: Knieairbag Beifahrer : Widerstand zu klein | 0 |
| 0x930952 | ZK14: Knieairbag Beifahrer : Widerstand zu groß | 0 |
| 0x930953 | ZK14: Knieairbag Beifahrer : Leitung verkoppelt | 0 |
| 0x930954 | ZK15: Aktive Kopfstuetze Fahrer : Plausibilitaetsfehler | 0 |
| 0x930955 | ZK15: Aktive Kopfstuetze Fahrer : Kurzschluss nach Masse | 0 |
| 0x930956 | ZK15: Aktive Kopfstuetze Fahrer : Kurzschluss nach Plus | 0 |
| 0x930957 | ZK15: Aktive Kopfstuetze Fahrer : Widerstand zu klein | 0 |
| 0x930958 | ZK15: Aktive Kopfstuetze Fahrer : Widerstand zu groß | 0 |
| 0x930959 | ZK15: Aktive Kopfstuetze Fahrer : Leitung verkoppelt | 0 |
| 0x93095A | ZK16: Aktive Kopfstuetze Beifahrer : Plausibilitaetsfehler | 0 |
| 0x93095B | ZK16: Aktive Kopfstuetze Beifahrer : Kurzschluss nach Masse | 0 |
| 0x93095C | ZK16: Aktive Kopfstuetze Beifahrer : Kurzschluss nach Plus | 0 |
| 0x93095D | ZK16: Aktive Kopfstuetze Beifahrer : Widerstand zu klein | 0 |
| 0x93095E | ZK16: Aktive Kopfstuetze Beifahrer : Widerstand zu groß | 0 |
| 0x93095F | ZK16: Aktive Kopfstuetze Beifahrer : Leitung verkoppelt | 0 |
| 0x930960 | ZK17: Gurtstrammer hinten links : Plausibilitaetsfehler | 0 |
| 0x930961 | ZK17: Gurtstrammer hinten links : Kurzschluss nach Masse | 0 |
| 0x930962 | ZK17: Gurtstrammer hinten links : Kurzschluss nach Plus | 0 |
| 0x930963 | ZK17: Gurtstrammer hinten links : Widerstand zu klein | 0 |
| 0x930964 | ZK17: Gurtstrammer hinten links : Widerstand zu groß | 0 |
| 0x930965 | ZK17: Gurtstrammer hinten links : Leitung verkoppelt | 0 |
| 0x930966 | ZK18: Gurtstrammer hinten rechts : Plausibilitaetsfehler | 0 |
| 0x930967 | ZK18: Gurtstrammer hinten rechts : Kurzschluss nach Masse | 0 |
| 0x930968 | ZK18: Gurtstrammer hinten rechts : Kurzschluss nach Plus | 0 |
| 0x930969 | ZK18: Gurtstrammer hinten rechts : Widerstand zu klein | 0 |
| 0x93096A | ZK18: Gurtstrammer hinten rechts : Widerstand zu groß | 0 |
| 0x93096B | ZK18: Gurtstrammer hinten rechts : Leitung verkoppelt | 0 |
| 0x93096C | ZK19: Seitenairbag Fahrer Ventil : Plausibilitaetsfehler | 0 |
| 0x93096D | ZK19: Seitenairbag Fahrer Ventil : Kurzschluss nach Masse | 0 |
| 0x93096E | ZK19: Seitenairbag Fahrer Ventil : Kurzschluss nach Plus | 0 |
| 0x93096F | ZK19: Seitenairbag Fahrer Ventil : Widerstand zu klein | 0 |
| 0x930970 | ZK19: Seitenairbag Fahrer Ventil : Widerstand zu groß | 0 |
| 0x930971 | ZK19: Seitenairbag Fahrer Ventil : Leitung verkoppelt | 0 |
| 0x930972 | ZK20: Seitenairbag Beifahrer Ventil : Plausibilitaetsfehler | 0 |
| 0x930973 | ZK20: Seitenairbag Beifahrer Ventil : Kurzschluss nach Masse | 0 |
| 0x930974 | ZK20: Seitenairbag Beifahrer Ventil : Kurzschluss nach Plus | 0 |
| 0x930975 | ZK20: Seitenairbag Beifahrer Ventil : Widerstand zu klein | 0 |
| 0x930976 | ZK20: Seitenairbag Beifahrer Ventil : Widerstand zu groß | 0 |
| 0x930977 | ZK20: Seitenairbag Beifahrer Ventil : Leitung verkoppelt | 0 |
| 0x930978 | ZK21: Seitenairbag Fahrer : Plausibilitaetsfehler | 0 |
| 0x930979 | ZK21: Seitenairbag Fahrer : Kurzschluss nach Masse | 0 |
| 0x93097A | ZK21: Seitenairbag Fahrer : Kurzschluss nach Plus | 0 |
| 0x93097B | ZK21: Seitenairbag Fahrer : Widerstand zu klein | 0 |
| 0x93097C | ZK21: Seitenairbag Fahrer : Widerstand zu groß | 0 |
| 0x93097D | ZK21: Seitenairbag Fahrer : Leitung verkoppelt | 0 |
| 0x93097E | ZK22: Seitenairbag Beifahrer  : Plausibilitaetsfehler | 0 |
| 0x93097F | ZK22: Seitenairbag Beifahrer  : Kurzschluss nach Masse | 0 |
| 0x930980 | ZK22: Seitenairbag Beifahrer  : Kurzschluss nach Plus | 0 |
| 0x930981 | ZK22: Seitenairbag Beifahrer  : Widerstand zu klein | 0 |
| 0x930982 | ZK22: Seitenairbag Beifahrer  : Widerstand zu groß | 0 |
| 0x930983 | ZK22: Seitenairbag Beifahrer  : Leitung verkoppelt | 0 |
| 0x930984 | ZK23: Kopfairbag links : Plausibilitaetsfehler | 0 |
| 0x930985 | ZK23: Kopfairbag links : Kurzschluss nach Masse | 0 |
| 0x930986 | ZK23: Kopfairbag links : Kurzschluss nach Plus | 0 |
| 0x930987 | ZK23: Kopfairbag links : Widerstand zu klein | 0 |
| 0x930988 | ZK23: Kopfairbag links : Widerstand zu groß | 0 |
| 0x930989 | ZK23: Kopfairbag links : Leitung verkoppelt | 0 |
| 0x93098A | ZK24: Kopfairbag rechts : Plausibilitaetsfehler | 0 |
| 0x93098B | ZK24: Kopfairbag rechts : Kurzschluss nach Masse | 0 |
| 0x93098C | ZK24: Kopfairbag rechts : Kurzschluss nach Plus | 0 |
| 0x93098D | ZK24: Kopfairbag rechts : Widerstand zu klein | 0 |
| 0x93098E | ZK24: Kopfairbag rechts : Widerstand zu groß | 0 |
| 0x93098F | ZK24: Kopfairbag rechts : Leitung verkoppelt | 0 |
| 0x930990 | ZK25: Sicherheitsbatterieklemme : Plausibilitaetsfehler | 0 |
| 0x930991 | ZK25: Sicherheitsbatterieklemme : Kurzschluss nach Masse | 0 |
| 0x930992 | ZK25: Sicherheitsbatterieklemme : Kurzschluss nach Plus | 0 |
| 0x930993 | ZK25: Sicherheitsbatterieklemme : Widerstand zu klein | 0 |
| 0x930994 | ZK25: Sicherheitsbatterieklemme : Widerstand zu groß | 0 |
| 0x930995 | ZK25: Sicherheitsbatterieklemme : Leitung verkoppelt | 0 |
| 0x930996 | ZK26: Sicherheitsbatterieklemme 2 : Plausibilitaetsfehler | 0 |
| 0x930997 | ZK26: Sicherheitsbatterieklemme 2 : Kurzschluss nach Masse | 0 |
| 0x930998 | ZK26: Sicherheitsbatterieklemme 2 : Kurzschluss nach Plus | 0 |
| 0x930999 | ZK26: Sicherheitsbatterieklemme 2 : Widerstand zu klein | 0 |
| 0x93099A | ZK26: Sicherheitsbatterieklemme 2 : Widerstand zu groß | 0 |
| 0x93099B | ZK26: Sicherheitsbatterieklemme 2 : Leitung verkoppelt | 0 |
| 0x93099C | ZK27: Reserve : Plausibilitaetsfehler | 0 |
| 0x93099D | ZK27: Reserve : Kurzschluss nach Masse | 0 |
| 0x93099E | ZK27: Reserve : Kurzschluss nach Plus | 0 |
| 0x93099F | ZK27: Reserve : Widerstand zu klein | 0 |
| 0x9309A0 | ZK27: Reserve : Widerstand zu groß | 0 |
| 0x9309A1 | ZK27: Reserve : Leitung verkoppelt | 0 |
| 0x9309A2 | ZK28: Reserve : Plausibilitaetsfehler | 0 |
| 0x9309A3 | ZK28: Reserve : Kurzschluss nach Masse | 0 |
| 0x9309A4 | ZK28: Reserve : Kurzschluss nach Plus | 0 |
| 0x9309A5 | ZK28: Reserve : Widerstand zu klein | 0 |
| 0x9309A6 | ZK28: Reserve : Widerstand zu groß | 0 |
| 0x9309A7 | ZK28: Reserve : Leitung verkoppelt | 0 |
| 0x9309A8 | ZK29: Fussgaengerschutzsystem vorne links : Plausibilitaetsfehler | 0 |
| 0x9309A9 | ZK29: Fussgaengerschutzsystem vorne links : Kurzschluss nach Masse | 0 |
| 0x9309AA | ZK29: Fussgaengerschutzsystem vorne links : Kurzschluss nach Plus | 0 |
| 0x9309AB | ZK29: Fussgaengerschutzsystem vorne links : Widerstand zu klein | 0 |
| 0x9309AC | ZK29: Fussgaengerschutzsystem vorne links : Widerstand zu groß | 0 |
| 0x9309AD | ZK29: Fussgaengerschutzsystem vorne links : Leitung verkoppelt | 0 |
| 0x9309AE | ZK30: Fussgaengerschutzsystem vorne rechts : Plausibilitaetsfehler | 0 |
| 0x9309AF | ZK30: Fussgaengerschutzsystem vorne rechts : Kurzschluss nach Masse | 0 |
| 0x9309B0 | ZK30: Fussgaengerschutzsystem vorne rechts : Kurzschluss nach Plus | 0 |
| 0x9309B1 | ZK30: Fussgaengerschutzsystem vorne rechts : Widerstand zu klein | 0 |
| 0x9309B2 | ZK30: Fussgaengerschutzsystem vorne rechts : Widerstand zu groß | 0 |
| 0x9309B3 | ZK30: Fussgaengerschutzsystem vorne rechts : Leitung verkoppelt | 0 |
| 0x9309B4 | ZK31: Fussgaengerschutzsystem hinten links : Plausibilitaetsfehler | 0 |
| 0x9309B5 | ZK31: Fussgaengerschutzsystem hinten links : Kurzschluss nach Masse | 0 |
| 0x9309B6 | ZK31: Fussgaengerschutzsystem hinten links : Kurzschluss nach Plus | 0 |
| 0x9309B7 | ZK31: Fussgaengerschutzsystem hinten links : Widerstand zu klein | 0 |
| 0x9309B8 | ZK31: Fussgaengerschutzsystem hinten links : Widerstand zu groß | 0 |
| 0x9309B9 | ZK31: Fussgaengerschutzsystem hinten links : Leitung verkoppelt | 0 |
| 0x9309BA | ZK32: Fussgaengerschutzsystem hinten rechts : Plausibilitaetsfehler | 0 |
| 0x9309BB | ZK32: Fussgaengerschutzsystem hinten rechts : Kurzschluss nach Masse | 0 |
| 0x9309BC | ZK32: Fussgaengerschutzsystem hinten rechts : Kurzschluss nach Plus | 0 |
| 0x9309BD | ZK32: Fussgaengerschutzsystem hinten rechts : Widerstand zu klein | 0 |
| 0x9309BE | ZK32: Fussgaengerschutzsystem hinten rechts : Widerstand zu groß | 0 |
| 0x9309BF | ZK32: Fussgaengerschutzsystem hinten rechts : Leitung verkoppelt | 0 |
| 0x9309C0 | Gurtschlosskontakt Fahrer : Plausibilitaetsfehler | 0 |
| 0x9309C1 | Gurtschlosskontakt Fahrer : Graubereich | 0 |
| 0x9309C2 | Gurtschlosskontakt Fahrer : Kurzschluss nach Masse | 0 |
| 0x9309C3 | Gurtschlosskontakt Fahrer : Kurzschluss nach Plus | 0 |
| 0x9309C4 | Gurtschlosskontakt Fahrer : Unterbrechung | 0 |
| 0x9309C5 | Gurtschlosskontakt Fahrer : Leitung verkoppelt | 0 |
| 0x9309C6 | Gurtschlosskontakt Beifahrer : Plausibilitaetsfehler | 0 |
| 0x9309C7 | Gurtschlosskontakt Beifahrer : Graubereich | 0 |
| 0x9309C8 | Gurtschlosskontakt Beifahrer : Kurzschluss nach Masse | 0 |
| 0x9309C9 | Gurtschlosskontakt Beifahrer : Kurzschluss nach Plus | 0 |
| 0x9309CA | Gurtschlosskontakt Beifahrer : Unterbrechung | 0 |
| 0x9309CB | Gurtschlosskontakt Beifahrer : Leitung verkoppelt | 0 |
| 0x9309CC | Gurtschlosskontakt hinten links : Plausibilitaetsfehler | 0 |
| 0x9309CD | Gurtschlosskontakt hinten links : Graubereich | 0 |
| 0x9309CE | Gurtschlosskontakt hinten links : Kurzschluss nach Masse | 0 |
| 0x9309CF | Gurtschlosskontakt hinten links : Kurzschluss nach Plus | 0 |
| 0x9309D0 | Gurtschlosskontakt hinten links : Unterbrechung | 0 |
| 0x9309D1 | Gurtschlosskontakt hinten links : Leitung verkoppelt | 0 |
| 0x9309D2 | Gurtschlosskontakt hinten rechts : Plausibilitaetsfehler | 0 |
| 0x9309D3 | Gurtschlosskontakt hinten rechts : Graubereich | 0 |
| 0x9309D4 | Gurtschlosskontakt hinten rechts : Kurzschluss nach Masse | 0 |
| 0x9309D5 | Gurtschlosskontakt hinten rechts : Kurzschluss nach Plus | 0 |
| 0x9309D6 | Gurtschlosskontakt hinten rechts : Unterbrechung | 0 |
| 0x9309D7 | Gurtschlosskontakt hinten rechts : Leitung verkoppelt | 0 |
| 0x9309D8 | Gurtschlosskontakt hinten Mitte : Plausibilitaetsfehler | 0 |
| 0x9309D9 | Gurtschlosskontakt hinten Mitte : Graubereich | 0 |
| 0x9309DA | Gurtschlosskontakt hinten Mitte : Kurzschluss nach Masse | 0 |
| 0x9309DB | Gurtschlosskontakt hinten Mitte : Kurzschluss nach Plus | 0 |
| 0x9309DC | Gurtschlosskontakt hinten Mitte : Unterbrechung | 0 |
| 0x9309DD | Gurtschlosskontakt hinten Mitte : Leitung verkoppelt | 0 |
| 0x9309DE | POS : Schalter fuer Beifahrerairbag-Abschaltung : Plausibilitaetsfehler | 0 |
| 0x9309DF | POS : Schalter fuer Beifahrerairbag-Abschaltung : Graubereich | 0 |
| 0x9309E0 | POS : Schalter fuer Beifahrerairbag-Abschaltung : Kurzschluss nach Masse | 0 |
| 0x9309E1 | POS : Schalter fuer Beifahrerairbag-Abschaltung : Kurzschluss nach Plus | 0 |
| 0x9309E2 | POS : Schalter fuer Beifahrerairbag-Abschaltung : Unterbrechung | 0 |
| 0x9309E3 | POS : Schalter fuer Beifahrerairbag-Abschaltung : Leitung verkoppelt | 0 |
| 0x9309E4 | Sitzpositionssensor Fahrer  : Plausibilitaetsfehler | 0 |
| 0x9309E5 | Sitzpositionssensor Fahrer : Graubereich | 0 |
| 0x9309E6 | Sitzpositionssensor Fahrer : Kurzschluss nach Masse | 0 |
| 0x9309E7 | Sitzpositionssensor Fahrer : Kurzschluss nach Plus | 0 |
| 0x9309E8 | Sitzpositionssensor Fahrer : Unterbrechung | 0 |
| 0x9309E9 | Sitzpositionssensor Fahrer : Leitung verkoppelt | 0 |
| 0x9309EA | SBR/PPD : Sitzbelegungsmatte Fahrer : Plausibilitaetsfehler | 0 |
| 0x9309EB | SBR/PPD : Sitzbelegungsmatte Fahrer : Kommunikationsstoerung | 0 |
| 0x9309EC | SBR/PPD : Sitzbelegungsmatte Fahrer : sendet internen Fehler | 1 |
| 0x9309ED | ODS-System : Sitzbelegungsmatte Beifahrer: ODS-System noch nicht freigegeben | 1 |
| 0x9309EE | SBR/PPD : Sitzbelegungsmatte Fahrer : sendet Matte Unterbrechung | 1 |
| 0x9309EF | SBR/PPD : Sitzbelegungsmatte Fahrer : sendet Matte Kurzschluss | 1 |
| 0x9309F0 | SBR/PPD : Sitzbelegungsmatte Fahrer : sendet nicht | 0 |
| 0x9309F1 | SBR/PPD : Sitzbelegungsmatte Beifahrer : Plausibilitaetsfehler | 0 |
| 0x9309F2 | SBR/PPD : Sitzbelegungsmatte Beifahrer : Kommunikationsstoerung | 0 |
| 0x9309F3 | SBR/PPD : Sitzbelegungsmatte Beifahrer : sendet internen Fehler | 1 |
| 0x9309F4 | ODS-System : Sitzbelegungsmatte Beifahrer: ODS-System konnte nicht freigegeben werden | 1 |
| 0x9309F5 | SBR/PPD : Sitzbelegungsmatte Beifahrer : sendet Matte Unterbrechung | 1 |
| 0x9309F6 | SBR/PPD : Sitzbelegungsmatte Beifahrer : sendet Matte Kurzschluss | 1 |
| 0x9309F7 | SBR/PPD : Sitzbelegungsmatte Beifahrer : sendet nicht | 0 |
| 0x9309F8 | SBR/PPD : Sitzbelegungsmatte hinten links : Plausibilitaetsfehler | 0 |
| 0x9309F9 | SBR/PPD : Sitzbelegungsmatte hinten links : Kommunikationsstoerung | 0 |
| 0x9309FA | SBR/PPD : Sitzbelegungsmatte hinten links : sendet internen Fehler | 1 |
| 0x9309FB | UpFront : Airbagfrontsensor links : Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x9309FC | SBR/PPD : Sitzbelegungsmatte hinten links : sendet Matte Unterbrechung | 1 |
| 0x9309FD | SBR/PPD : Sitzbelegungsmatte hinten links : sendet Matte Kurzschluss | 1 |
| 0x9309FE | SBR/PPD : Sitzbelegungsmatte hinten links : sendet nicht | 0 |
| 0x9309FF | SBR/PPD : Sitzbelegungsmatte hinten rechts : Plausibilitaetsfehler | 0 |
| 0x930A00 | SBR/PPD : Sitzbelegungsmatte hinten rechts : Kommunikationsstoerung | 0 |
| 0x930A01 | SBR/PPD : Sitzbelegungsmatte hinten rechts : sendet internen Fehler | 1 |
| 0x930A02 | UpFront : Airbagfrontsensor rechts : Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x930A03 | SBR/PPD : Sitzbelegungsmatte hinten rechts : sendet Matte Unterbrechung | 1 |
| 0x930A04 | SBR/PPD : Sitzbelegungsmatte hinten rechts : sendet Matte Kurzschluss | 1 |
| 0x930A05 | SBR/PPD : Sitzbelegungsmatte hinten rechts : sendet nicht | 1 |
| 0x930A06 | ODS-System : Sitzbelegungsmatte Beifahrer : Plausibilitaetsfehler | 0 |
| 0x930A07 | ODS-System : Sitzbelegungsmatte Beifahrer : Signal ungueltig | 1 |
| 0x930A08 | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #00 | 1 |
| 0x930A09 | Airbagsensor B-Saeule links (x-y-Richtung) : Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x930A0A | Airbagsensor B-Saeule rechts (x-y-Richtung) : Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x930A0B | Airbagsensor Tür vorne links : Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x930A0C | Airbagsensor Tür vorne rechts : Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x930A0D | Airbagsensor-Cluster (high g und low g mit Drehrate) : Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x930A0E | Airbagsensor-Cluster (high g x-y-Richtung) : Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x930A0F | Airbagsensor-Cluster (low g Drehrate) : Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x930A10 | Fussgängerschutzsensor vorne links : Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x930A11 | Fussgängerschutzsensor vorne mitte : Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x930A12 | ODS-System : Sitzbelegungsmatte Beifahrer: sendet nicht | 1 |
| 0x930A13 | ODS-System : Sitzbelegungsmatte Beifahrer: Datenspeicher voll | 1 |
| 0x930A14 | ODS-System : Sitzbelegungsmatte Beifahrer: Kommunikationsstoerung | 0 |
| 0x930A15 | Fussgängerschutzsensor vorne rechts : Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x930A16 | Sitzmodul Beifahrer : Nachricht Status-Sitzlehnenverriegelung Signal ungueltig | 0 |
| 0x930A17 | SBR/PPD : Sitzbelegungsmatte Fahrer: Signal  ungueltig | 1 |
| 0x930A18 | SBR/PPD : Sitzbelegungsmatte Beifahrer: Signal  ungueltig | 1 |
| 0x930A19 | SBR/PPD : Sitzbelegungsmatte hinten links : Signal  ungueltig | 1 |
| 0x930A1A | SBR/PPD : Sitzbelegungsmatte hinten rechts : Signal  ungueltig | 1 |
| 0x930A1B | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #01 | 1 |
| 0x930A1C | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #02 | 1 |
| 0x930A1D | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #03 | 1 |
| 0x930A21 | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #04 | 1 |
| 0x930A22 | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #05 | 1 |
| 0x930A23 | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #06 | 1 |
| 0x930A24 | UpFront : Airbagfrontsensor links : Sensortyp falsch | 0 |
| 0x930A26 | UpFront : Airbagfrontsensor links : Plausibilitaetsfehler | 0 |
| 0x930A27 | UpFront : Airbagfrontsensor links : sendet Fehler | 0 |
| 0x930A28 | UpFront : Airbagfrontsensor links : Kommunikationsstoerung | 0 |
| 0x930A2A | UpFront : Airbagfrontsensor links : Kurzschluss nach Masse | 0 |
| 0x930A2B | UpFront : Airbagfrontsensor links : Kurzschluss nach Plus | 0 |
| 0x930A2C | UpFront : Airbagfrontsensor links : Unterbrechung | 0 |
| 0x930A2E | UpFront : Airbagfrontsensor rechts : Sensortyp falsch | 0 |
| 0x930A30 | UpFront : Airbagfrontsensor rechts : Plausibilitaetsfehler | 0 |
| 0x930A31 | UpFront : Airbagfrontsensor rechts : sendet Fehler | 0 |
| 0x930A32 | UpFront : Airbagfrontsensor rechts : Kommunikationsstoerung | 0 |
| 0x930A34 | UpFront : Airbagfrontsensor rechts : Kurzschluss nach Masse | 0 |
| 0x930A35 | UpFront : Airbagfrontsensor rechts : Kurzschluss nach Plus | 0 |
| 0x930A36 | UpFront : Airbagfrontsensor rechts : Unterbrechung | 0 |
| 0x930A38 | Airbagsensor B-Saeule links (x-y-Richtung) : Plausibilitaetsfehler | 0 |
| 0x930A39 | Airbagsensor B-Saeule links (x-y-Richtung) : Kommunikationsstoerung | 0 |
| 0x930A3B | Airbagsensor B-Saeule links (x-y-Richtung) : Kurzschluss nach Masse | 0 |
| 0x930A3C | Airbagsensor B-Saeule links (x-y-Richtung) : Kurzschluss nach Plus | 0 |
| 0x930A3D | Airbagsensor B-Saeule links (x-y-Richtung) : Unterbrechung | 0 |
| 0x930A3F | Airbagsensor B-Saeule links (x-Richtung) : Sensortyp falsch | 0 |
| 0x930A41 | Airbagsensor B-Saeule links (x-Richtung) : sendet Fehler | 0 |
| 0x930A42 | Airbagsensor B-Saeule links (y-Richtung) : Sensortyp falsch | 0 |
| 0x930A44 | Airbagsensor B-Saeule links (y-Richtung) : sendet Fehler | 0 |
| 0x930A45 | Airbagsensor B-Saeule rechts (x-y-Richtung) : Plausibilitaetsfehler | 0 |
| 0x930A46 | Airbagsensor B-Saeule rechts (x-y-Richtung) : Kommunikationsstoerung | 0 |
| 0x930A48 | Airbagsensor B-Saeule rechts (x-y-Richtung) : Kurzschluss nach Masse | 0 |
| 0x930A49 | Airbagsensor B-Saeule rechts (x-y-Richtung) : Kurzschluss nach Plus | 0 |
| 0x930A4A | Airbagsensor B-Saeule rechts (x-y-Richtung) : Unterbrechung | 0 |
| 0x930A4C | Airbagsensor B-Saeule rechts (x-Richtung) : Sensortyp falsch | 0 |
| 0x930A4E | Airbagsensor B-Saeule rechts (x-Richtung) : sendet Fehler | 0 |
| 0x930A4F | Airbagsensor B-Saeule rechts (y-Richtung) : Sensortyp falsch | 0 |
| 0x930A51 | Airbagsensor B-Saeule rechts (y-Richtung) : sendet Fehler | 0 |
| 0x930A52 | Airbagsensor Tür vorne links : Sensortyp falsch | 0 |
| 0x930A53 | Airbagsensor Tür vorne links : Druckwert ueber Grenzwert | 0 |
| 0x930A54 | Airbagsensor Tür vorne links : Plausibilitaetsfehler | 0 |
| 0x930A55 | Airbagsensor Tür vorne links : sendet Fehler | 0 |
| 0x930A56 | Airbagsensor Tür vorne links : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930A57 | Airbagsensor Tür vorne links : Kommunikationsstoerung | 0 |
| 0x930A59 | Airbagsensor Tür vorne links : Kurzschluss nach Masse | 0 |
| 0x930A5A | Airbagsensor Tür vorne links : Kurzschluss nach Plus | 0 |
| 0x930A5B | Airbagsensor Tür vorne links : Unterbrechung | 0 |
| 0x930A5C | Airbagsensor Tür vorne rechts : Sensortyp falsch | 0 |
| 0x930A5D | Airbagsensor Tür vorne rechts : Druckwert ueber Grenzwert | 0 |
| 0x930A5E | Airbagsensor Tür vorne rechts : Plausibilitaetsfehler | 0 |
| 0x930A5F | Airbagsensor Tür vorne rechts : sendet Fehler | 0 |
| 0x930A60 | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #07 | 1 |
| 0x930A61 | Airbagsensor Tür vorne rechts : Kommunikationsstoerung | 0 |
| 0x930A63 | Airbagsensor Tür vorne rechts : Kurzschluss nach Masse | 0 |
| 0x930A64 | Airbagsensor Tür vorne rechts : Kurzschluss nach Plus | 0 |
| 0x930A65 | Airbagsensor Tür vorne rechts : Unterbrechung | 0 |
| 0x930A66 | Airbagsensor-Cluster (high g x-y-Richtung) : Plausibilitaetsfehler | 0 |
| 0x930A67 | Airbagsensor-Cluster (high g x-y-Richtung) : Kommunikationsstoerung | 0 |
| 0x930A69 | Airbagsensor-Cluster (high g x-y-Richtung) : Kurzschluss nach Masse | 0 |
| 0x930A6A | Airbagsensor-Cluster (high g x-y-Richtung) : Kurzschluss nach Plus | 0 |
| 0x930A6B | Airbagsensor-Cluster (high g x-y-Richtung) : Unterbrechung | 0 |
| 0x930A6D | Airbagsensor-Cluster (high g x-Richtung) : Sensortyp falsch | 0 |
| 0x930A6F | Airbagsensor-Cluster (high g x-Richtung) : sendet Fehler | 0 |
| 0x930A70 | Airbagsensor-Cluster (high g y-Richtung) : Sensortyp falsch | 0 |
| 0x930A72 | Airbagsensor-Cluster (high g y-Richtung) : sendet Fehler | 0 |
| 0x930A73 | Airbagsensor-Cluster (low g Drehrate) : Plausibilitaetsfehler | 0 |
| 0x930A74 | Airbagsensor-Cluster (low g Drehrate) : Kommunikationsstoerung | 0 |
| 0x930A76 | Airbagsensor-Cluster (low g Drehrate) : Kurzschluss nach Masse | 0 |
| 0x930A77 | Airbagsensor-Cluster (low g Drehrate) : Kurzschluss nach Plus | 0 |
| 0x930A78 | Airbagsensor-Cluster (low g Drehrate) : Unterbrechung | 0 |
| 0x930A7A | Airbagsensor-Cluster (low g y-Richtung) : Sensortyp falsch | 0 |
| 0x930A7C | Airbagsensor-Cluster (low g y-Richtung) : sendet Fehler | 0 |
| 0x930A7D | Airbagsensor-Cluster (low g z-Richtung) : Sensortyp falsch | 0 |
| 0x930A7F | Airbagsensor-Cluster (low g z-Richtung) : sendet Fehler | 0 |
| 0x930A80 | Airbagsensor-Cluster (Drehsensor) : Sensortyp falsch | 0 |
| 0x930A82 | Airbagsensor-Cluster (Drehsensor) : sendet Fehler | 0 |
| 0x930A84 | Fussgängerschutzsensor vorne links : Plausibilitaetsfehler | 0 |
| 0x930A85 | Fussgängerschutzsensor vorne links : sendet Fehler | 0 |
| 0x930A86 | Fussgängerschutzsensor vorne links : Sensortyp falsch | 0 |
| 0x930A87 | Fussgängerschutzsensor vorne links : Kommunikationsstoerung | 0 |
| 0x930A89 | Fussgängerschutzsensor vorne links : Kurzschluss nach Masse | 0 |
| 0x930A8A | Fussgängerschutzsensor vorne links : Kurzschluss nach Plus | 0 |
| 0x930A8B | Fussgängerschutzsensor vorne links : Unterbrechung | 0 |
| 0x930A8E | Fussgängerschutzsensor vorne Mitte : Plausibilitaetsfehler | 0 |
| 0x930A8F | Fussgängerschutzsensor vorne Mitte : sendet Fehler | 0 |
| 0x930A90 | Fussgängerschutzsensor vorne Mitte : Sensortyp falsch | 0 |
| 0x930A91 | Fussgängerschutzsensor vorne Mitte : Kommunikationsstoerung | 0 |
| 0x930A93 | Fussgängerschutzsensor vorne Mitte : Kurzschluss nach Masse | 0 |
| 0x930A94 | Fussgängerschutzsensor vorne Mitte : Kurzschluss nach Plus | 0 |
| 0x930A95 | Fussgängerschutzsensor vorne Mitte : Unterbrechung | 0 |
| 0x930A98 | Fussgängerschutzsensor vorne rechts : Plausibilitaetsfehler | 0 |
| 0x930A99 | Fussgängerschutzsensor vorne rechts : sendet Fehler | 0 |
| 0x930A9A | Fussgängerschutzsensor vorne rechts : Sensortyp falsch | 0 |
| 0x930A9B | Fussgängerschutzsensor vorne rechts : Kommunikationsstoerung | 0 |
| 0x930A9D | Fussgängerschutzsensor vorne rechts : Kurzschluss nach Masse | 0 |
| 0x930A9E | Fussgängerschutzsensor vorne rechts : Kurzschluss nach Plus | 0 |
| 0x930A9F | Fussgängerschutzsensor vorne rechts : Unterbrechung | 0 |
| 0x930AA1 | Versorgungsspannung : Unterspannung | 0 |
| 0x930AA2 | Versorgungsspannung : Ueberspannung | 0 |
| 0x930AA3 | Versorgungsspannung : Unterspannung im Selbstest erkannt (PDC) | 0 |
| 0x930AA4 | Versorgungsspannung : Ueberspannung im Selbstest erkannt (PDC) | 0 |
| 0x930AA5 | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #08 | 1 |
| 0x930AA6 | High Side Power Switch : Versorgungsspannung Steuergeräte links : Stromaufnahme zu klein | 0 |
| 0x930AA7 | High Side Power Switch : Versorgungsspannung Steuergeräte links : Stromaufnahme zu groß | 0 |
| 0x930AA8 | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #09 | 1 |
| 0x930AA9 | High Side Power Switch : Versorgungsspannung Steuergeräte rechts : Stromaufnahme zu klein | 0 |
| 0x930AAA | High Side Power Switch : Versorgungsspannung Steuergeräte rechts : Stromaufnahme zu groß | 0 |
| 0x930AAC | High Side Power Switch : Versorgungsspannung A : Stromaufnahme zu klein | 0 |
| 0x930AAD | High Side Power Switch : Versorgungsspannung A : Stromaufnahme zu groß | 0 |
| 0x930AAE | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #10 | 1 |
| 0x930AAF | High Side Power Switch : Versorgungsspannung B : Stromaufnahme zu klein | 0 |
| 0x930AB0 | High Side Power Switch : Versorgungsspannung B : Stromaufnahme zu groß | 0 |
| 0x930AB1 | POL : Kontrollleuchte fuer Beifahrerairbag-Abschaltung : Plausibilitaetsfehler | 0 |
| 0x930AB2 | POL : Kontrollleuchte fuer Beifahrerairbag-Abschaltung : Kurzschluss/Unterbrechung nach Masse | 0 |
| 0x930AB3 | POL : Kontrollleuchte fuer Beifahrerairbag-Abschaltung : Kurzschluss nach Plus | 0 |
| 0x930AB4 | Codierdatenfehler  : (CBD-Block: CRC Fehler durch Schreiben der Codierdaten) | 0 |
| 0x930AB5 | Codierpruefstempel stimmt nicht mit  Fahrzeug-VIN ueberein | 0 |
| 0x930AB6 | Crash-Botschaft gespeichert | 0 |
| 0x930AB7 | Drei Crash-Botschaften gespeichert | 0 |
| 0x930AB9 | Recycling-Zuendung wurde ausgefuehrt | 0 |
| 0x930ABC | Steuergeraet nicht verriegelt | 0 |
| 0x930ABD | Interner Steuergeraetefehler | 0 |
| 0x930ABE | Sitzmodul Fahrer : Nachricht Status-Sitzlehnenverriegelung Signal ungueltig | 1 |
| 0x930ABF | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #11 | 1 |
| 0x930AC0 | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #12 | 1 |
| 0x930AC1 | Geschwindigkeit : Nachricht  Geschwindigkeit  Signal ungueltig | 1 |
| 0x930AC2 | LCD Leuchtdichte : Nachricht LCD-Helligkeit-Regelung Signal ungueltig | 1 |
| 0x930AC3 | Ueberfallschalter : Nachricht Status-Ueberfallfunktion Signal ungueltig | 1 |
| 0x930AC4 | Ueberfallschalter : Deaktivierung der Zuendkreise durch Ueberfallfunktion | 1 |
| 0x930AC5 | Steuergeraet noch nicht oder mit Default-Codierdaten codiert | 0 |
| 0x930AC6 | Fehler waehrend der Codierdaten-Transaktion aufgetreten | 0 |
| 0x930AC7 | Signatur ueber Nettocodierdaten ungueltig | 0 |
| 0x930AC8 | Die waehrend einer Codierdatentransaktion gesendeten Daten sind nicht plausibel | 0 |
| 0x930AC9 | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #13 | 1 |
| 0x930ACA | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #14 | 1 |
| 0x930ACB | Fussgaengerschutzsystem : Crash-Botschaft gespeichert | 0 |
| 0x930ACC | UpFront : Airbagfrontsensor links : Kurzschluss nach Masse oder Plus | 0 |
| 0x930ACD | UpFront : Airbagfrontsensor rechts : Kurzschluss nach Masse oder Plus | 0 |
| 0x930ACE | Airbagsensor B-Saeule links (x-y-Richtung) : Kurzschluss nach Masse oder Plus | 0 |
| 0x930ACF | Airbagsensor B-Saeule rechts (x-y-Richtung) : Kurzschluss nach Masse oder Plus | 0 |
| 0x930AD0 | Airbagsensor Tür vorne links : Kurzschluss nach Masse oder Plus | 0 |
| 0x930AD1 | Airbagsensor Tür vorne rechts : Kurzschluss nach Masse oder Plus | 0 |
| 0x930AD2 | Airbagsensor-Cluster (high g x-y-Richtung) : Kurzschluss nach Masse oder Plus | 0 |
| 0x930AD3 | Airbagsensor-Cluster (low g Drehrate) : Kurzschluss nach Masse oder Plus | 0 |
| 0x930AD4 | Fussgängerschutzsensor vorne links : Kurzschluss nach Masse oder Plus | 0 |
| 0x930AD5 | Fussgängerschutzsensor vorne Mitte : Kurzschluss nach Masse oder Plus | 0 |
| 0x930AD6 | Fussgängerschutzsensor vorne rechts : Kurzschluss nach Masse oder Plus | 0 |
| 0x930AD7 | ODS-System : Sitzbelegungsmatte Beifahrer : Modul fuer ODS-System sendet Fehler #15 | 1 |
| 0x930AD8 | ZK27: Rollover Schutz links : Plausibilitaetsfehler | 0 |
| 0x930AD9 | ZK27: Rollover Schutz links : Kurzschluss nach Masse | 0 |
| 0x930ADA | ZK27: Rollover Schutz links : Kurzschluss nach Plus | 0 |
| 0x930ADB | ZK27: Rollover Schutz links : Widerstand zu klein | 0 |
| 0x930ADC | ZK27: Rollover Schutz links : Widerstand zu groß | 0 |
| 0x930ADD | ZK27: Rollover Schutz links : Leitung verkoppelt | 0 |
| 0x930ADE | ZK28: Rollover Schutz rechts : Plausibilitaetsfehler | 0 |
| 0x930ADF | ZK28: Rollover Schutz rechts : Kurzschluss nach Masse | 0 |
| 0x930AE0 | ZK28: Rollover Schutz rechts : Kurzschluss nach Plus | 0 |
| 0x930AE1 | ZK28: Rollover Schutz rechts : Widerstand zu klein | 0 |
| 0x930AE2 | ZK28: Rollover Schutz rechts : Widerstand zu groß | 0 |
| 0x930AE3 | ZK28: Rollover Schutz rechts : Leitung verkoppelt | 0 |
| 0x930AF0 | Variable Zuendkreistabelle nicht eindeutig kodiert | 0 |
| 0x930AF1 | Fussgaengerschutzfunktion nicht aktiv | 0 |
| 0x930AF2 | Fehler in der Crashalgorithmuskennung | 0 |
| 0x930AF3 | Airbagsensor-Cluster (Drehsensor) : unplausible Werte | 0 |
| 0x930AF4 | Airbagsensor-Cluster (low g y-z-Richtung) : unplausible Werte | 0 |
| 0x930AF5 | UpFront : Airbagfrontsensor links : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930AF6 | UpFront : Airbagfrontsensor rechts : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930AF7 | Airbagsensor B-Saeule links (x-Richtung) : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930AF8 | Airbagsensor B-Saeule links (y-Richtung) : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930AF9 | Airbagsensor B-Saeule rechts (x-Richtung) : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930AFA | Airbagsensor B-Saeule rechts (y-Richtung) : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930AFB | Airbagsensor Tür vorne rechts : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930AFC | Airbagsensor-Cluster  (high g x-Richtung) : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930AFD | Airbagsensor-Cluster  (high g y-Richtung) : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930AFE | Airbagsensor-Cluster  (low g y-Richtung) : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930AFF | Airbagsensor-Cluster  (low g z-Richtung) : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930B00 | Airbagsensor-Cluster  (Drehsensor)  : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930B01 | Fussgängerschutzsensor vorne links : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930B02 | Fussgängerschutzsensor vorne Mitte : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930B03 | Fussgängerschutzsensor vorne rechts : Sensorwerte liegen dauerhaft ueber Offset-Wert | 0 |
| 0x930B04 | ZK19: Automatenstrammer Fahrer : Plausibilitaetsfehler | 0 |
| 0x930B05 | ZK19: Automatenstrammer Fahrer : Kurzschluss nach Masse | 0 |
| 0x930B06 | ZK19: Automatenstrammer Fahrer : Kurzschluss nach Plus | 0 |
| 0x930B07 | ZK19: Automatenstrammer Fahrer : Widerstand zu klein | 0 |
| 0x930B08 | ZK19: Automatenstrammer Fahrer : Widerstand zu groß | 0 |
| 0x930B09 | ZK19: Automatenstrammer Fahrer : Leitung verkoppelt | 0 |
| 0x930B0A | ZK20: Automatenstrammer Beifahrer : Plausibilitaetsfehler | 0 |
| 0x930B0B | ZK20: Automatenstrammer Beifahrer : Kurzschluss nach Masse | 0 |
| 0x930B0C | ZK20: Automatenstrammer Beifahrer : Kurzschluss nach Plus | 0 |
| 0x930B0D | ZK20: Automatenstrammer Beifahrer : Widerstand zu klein | 0 |
| 0x930B0E | ZK20: Automatenstrammer Beifahrer : Widerstand zu groß | 0 |
| 0x930B0F | ZK20: Automatenstrammer Beifahrer : Leitung verkoppelt | 0 |
| 0x930B10 | Produktions-Modus aktiv | 0 |
| 0x930B11 | FGS_SB Fussgängerschutzsensor Plausibilitaetsfehler | 0 |
| 0x930B12 | FGS_SB Fussgängerschutzsensor sendet Fehler | 0 |
| 0x930B13 | FGS_SB Fussgängerschutzsensor Sensortyp falsch | 0 |
| 0x930B14 | FGS_SB Fussgängerschutzsensor Kommunikationsstoerung | 0 |
| 0x930B15 | FGS_SB Fussgängerschutzsensor Kurzschluss nach Masse | 0 |
| 0x930B16 | FGS_SB Fussgängerschutzsensor Kurzschluss nach Plus | 0 |
| 0x930B17 | FGS_SB Fussgängerschutzsensor Kurzschluss nach Masse oder Plus | 0 |
| 0x930B18 | FGS_SB Fussgängerschutzsensor Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x930B19 | FGS_SB Fussgängerschutzsensor Unterbrechung | 0 |
| 0x930B1A | FGS_SB Fussgängerschutzsensor defekt | 0 |
| 0x930B1B | Sitzpositionssensor Beifahrer  : Plausibilitaetsfehler | 0 |
| 0x930B1C | Sitzpositionssensor Beifahrer : Graubereich | 0 |
| 0x930B1D | Sitzpositionssensor Beifahrer : Kurzschluss nach Masse | 0 |
| 0x930B1E | Sitzpositionssensor Beifahrer : Kurzschluss nach Plus | 0 |
| 0x930B1F | Sitzpositionssensor Beifahrer : Leitung Unterbrechung | 0 |
| 0x930B20 | Sitzpositionssensor Beifahrer : Leitung verkoppelt | 0 |
| 0x930BC1 | FGS Safing-Sensor Plausibilitaetsfehler | 0 |
| 0x930BC2 | FGS Safing-Sensor sendet Fehler | 0 |
| 0x930BC3 | FGS Safing-Sensor Sensorwerte  liegen  dauerhaft ueber Offset -Wert | 0 |
| 0x930BC4 | FGS Safing-Sensor Sensortyp falsch | 0 |
| 0x930BC5 | FGS Safing-Sensor Kommunikationsstoerung | 0 |
| 0x930BC6 | FGS Safing-Sensor Kurzschluss nach Masse | 0 |
| 0x930BC7 | FGS Safing-Sensor Kurzschluss nach Plus | 0 |
| 0x930BC8 | FGS Safing-Sensor Kurzschluss nach Masse oder Plus | 0 |
| 0x930BC9 | FGS Safing-Sensor  Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x930BCA | FGS Safing-Sensor Unterbrechung | 0 |
| 0x930BCB | FGS Safing-Sensor Leitung verkoppelt | 0 |
| 0xC94401 | FA-CAN : Sammelfehler | 0 |
| 0xC9440A | FA-CAN : Control Module Bus OFF | 0 |
| 0xC94BFF | Diagnosemaster Testfehler : Netzwerk | 0 |
| 0xC94D1E | LIN_S (Fahrerseite) : Bus Error Slave 1 | 0 |
| 0xC94D1F | LIN_S (Beifahrerseite) : Bus Error Slave 2 | 0 |
| 0xC94D20 | LIN_S (hinten links) : Bus Error Slave 3 | 0 |
| 0xC94D21 | LIN_S (hinten rechts) : Bus Error Slave 4 | 0 |
| 0xC94D22 | LIN_S : Bus Error Slave 5 | 0 |
| 0xC94D23 | LIN_S : Bus Error Slave 6 | 0 |
| 0xC94D24 | LIN_S : Bus Error Slave 7 | 0 |
| 0xC94D25 | LIN_S : Bus Error Slave 8 | 0 |
| 0xC94D26 | LIN_S : Bus Error Slave 9 | 0 |
| 0xC94D27 | LIN_S : Bus Error Slave 10 | 0 |
| 0xC94D28 | LIN_S : Bus Error Slave 11 | 0 |
| 0xC94D29 | LIN_S : Bus Error Slave 12 | 0 |
| 0xC94D2A | LIN_S : Bus Error Slave 13 | 0 |
| 0xC94D2B | LIN_S : Bus Error Slave 14 | 0 |
| 0xC94D2C | LIN_S : Bus Error Slave 15 | 0 |
| 0xC94D2D | LIN_S : Bus Error Slave 16 | 0 |
| 0xC94D2E | LIN_S : Bus Error Slave 17 | 0 |
| 0xC94D2F | LIN_S : Bus Error Slave 18 | 0 |
| 0xC94D30 | LIN_S : Bus Error Slave 19 | 0 |
| 0xC94D31 | LIN_S : Bus Error Slave 20 | 0 |
| 0xC94D32 | LIN_S : Bus Error Slave 21 | 0 |
| 0xC94D33 | LIN_S : Bus Error Slave 22 | 0 |
| 0xC94D34 | LIN_S : Bus Error Slave 23 | 0 |
| 0xC94D35 | LIN_S : Bus Error Slave 24 | 0 |
| 0xC94D36 | LIN_S : Bus Error Slave 25 | 0 |
| 0xC94D37 | LIN_S : Bus Error Slave 26 | 0 |
| 0xC94D38 | LIN_S : Bus Error Slave 27 | 0 |
| 0xC94D39 | LIN_S : Bus Error Slave 28 | 0 |
| 0xC94D3A | LIN_S : Bus Error Slave 29 | 0 |
| 0xC94D3B | LIN_S : Bus Error Slave 30 | 0 |
| 0xC94D3C | LIN_S : Bus Error Slave 31 | 0 |
| 0xC94D3D | LIN_S : Bus Error Slave 32 | 0 |
| 0xC95400 | Ueberfallschalter : Modul sendet nicht | 0 |
| 0xC95401 | Ueberfallschalter : Kommunikationsstoerung | 0 |
| 0xC95402 | Ueberfallschalter : Alive-Signal-Fehler | 0 |
| 0xC95403 | LCD Leuchtdichte : Modul sendet nicht | 0 |
| 0xC95404 | LCD Leuchtdichte : Alive-Signal-Fehler | 0 |
| 0xC95405 | Geschwindigkeit : Modul sendet nicht | 0 |
| 0xC95406 | Geschwindigkeit : Kommunikationsstoerung | 0 |
| 0xC95407 | Geschwindigkeit : Pruefsummenfehler | 0 |
| 0xC95408 | Geschwindigkeit : Alive-Signal-Fehler | 0 |
| 0xC95409 | Sitzmodul Fahrer : Modul sendet nicht | 0 |
| 0xC9540A | Sitzmodul Fahrer : Kommunikationsstoerung | 0 |
| 0xC9540B | Sitzmodul Beifahrer : Modul sendet nicht | 0 |
| 0xC9540C | Sitzmodul Beifahrer : Kommunikationsstoerung | 0 |
| 0xC95417 | Fahrzeugzustand: Ausfall der FZM-Botschaft Fahrzeugzustand | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1727 | Außentemperatur | °C | - | unsigned char | - | 1 | 2 | -40 |
| 0x1728 | Status Fahrzeug FZM | 0-n | - | 0xFF | Fahrzeug_Status_FZM | 1 | 1 | 0 |
| 0x4000 | Systemzeit Fehlerbeginn | - | high | signed long | - | 1 | 1 | 0 |
| 0x4001 | Systemzeit Fehlerende | - | high | signed long | - | 1 | 1 | 0 |
| 0x4002 | Steuergerät Innentemperatur | 0-n | - | 0xFF | ACSM3_Innentemperatur | 1 | 1 | 0 |
| 0x4003 | Systemzustand | - | high | signed long | - | 1 | 1 | 0 |
| 0x4004 | Zeit nach PowerOnReset | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x4005 | PowerOn Zähler | - | high | signed long | - | 1 | 1 | 0 |
| 0x4006 | Batteriespannung am Steuergerät | Volt | - | unsigned char | - | 41 | 500 | 0 |

### FAHRZEUG_STATUS_FZM

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Initial |
| 0x01 | Standby, Fahrer abwesend |
| 0x02 | Basisbetrieb, Fahrer anwesend |
| 0x03 | Basisbetrieb, Fahrzeug rollt |
| 0x04 | Motornachlauf |
| 0x05 | Zündung ein |
| 0x06 | Zündung ein, Fahrzeug rollt |
| 0x07 | Motor an, Fahrzeug steht |
| 0x08 | Fahrt |
| 0x09 | Bevorstehender Motorstart |
| 0x0A | Bevorstehender Motorstart, Fahrzeug rollt |
| 0x0B | Motorstart |
| 0x0C | Motorstart, Fahrzeug rollt |
| 0x0D | Waschstrassenbetrieb |
| 0x0E | Fehler |
| 0x0F | Signal ungültig |
| 0xFF | Unbekannt |

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
| 0x010000 | Systemzeit Diagnose Master: Empfang unplausibel/ keine Systemzeit erhalten | 0 |
| 0x010002 | Geschwindigkeit: Signal fehlerhaft | 0 |
| 0x010020 | FGS_SB Fussgängerschutzsensor Timeout Fahrzeug Geschwindigkeit bei Alert | 0 |
| 0x010021 | FGS_SB Fussgängerschutzsensor Timeout dynamische Daten Normal | 0 |
| 0x010022 | FGS_SB Fussgängerschutzsensor Timeout dynamische Daten Alert | 0 |
| 0x010023 | FGS_SB Fussgängerschutzsensor Timeout statische Daten | 0 |
| 0x010024 | FGS_SB Fussgängerschutzsensor Timeout Temperatur | 0 |
| 0x010025 | FGS_SB Fussgängerschutzsensor Offset Drift | 0 |
| 0x010026 | FGS_SB Fussgängerschutzsensor Plausibilitaet dynamische Daten | 0 |
| 0x010027 | FGS_SB Fussgängerschutzsensor PAS4 Init2 Daten fehlerhaft | 0 |
| 0x010028 | FGS_SB Fussgängerschutzsensor Offset Abgleich fehlerhaft | 0 |
| 0x010029 | FGS_SB Fussgaegerschutzsensor Safing Path gesperrt | 0 |
| 0x01002B | FGS_SB Fussgaegerschutzsensor Arming fehlt | 0 |
| 0x011000 | Firing ASIC1 (SF1, SF2): ZK1 ZK13 Unterbrechung der Spannungsversorgung | 0 |
| 0x011001 | Firing ASIC2 (SF1, SF2): ZK19 ZK8 Unterbrechung der Spannungsversorgung | 0 |
| 0x011002 | Firing ASIC3 (SF1, SF2): ZK18 ZK10 Unterbrechung der Spannungsversorgung | 0 |
| 0x011003 | Firing ASIC4 (SF1, SF2): ZK29 ZK30 Unterbrechung der Spannungsversorgung | 0 |
| 0x011004 | Firing ASIC1 (SF3, SF4): ZK3 ZK6 Unterbrechung der Spannungsversorgung | 0 |
| 0x011005 | Firing ASIC2 (SF3, SF4): ZK2 ZK5 Unterbrechung der Spannungsversorgung | 0 |
| 0x011006 | Firing ASIC3 (SF3, SF4): ZK20 ZK11 Unterbrechung der Spannungsversorgung | 0 |
| 0x011007 | Firing ASIC4 (SF3, SF4): ZK31 ZK32 Unterbrechung der Spannungsversorgung | 0 |
| 0x011008 | Firing ASIC1 (SF5, SF6): ZK17 ZK7 Unterbrechung der Spannungsversorgung | 0 |
| 0x011009 | Firing ASIC2 (SF5, SF6): ZK23 ZK15 Unterbrechung der Spannungsversorgung | 0 |
| 0x01100a | Firing ASIC3 (SF5, SF6): ZK24 ZK16 Unterbrechung der Spannungsversorgung | 0 |
| 0x01100b | Firing ASIC4 (SF5, SF6): ZK28 ZK27 Unterbrechung der Spannungsversorgung | 0 |
| 0x01100c | Firing ASIC1 (SF7, SF8): ZK4 ZK14 Unterbrechung der Spannungsversorgung | 0 |
| 0x01100d | Firing ASIC2 (SF7, SF8): ZK21 ZK9 Unterbrechung der Spannungsversorgung | 0 |
| 0x01100e | Firing ASIC3 (SF7, SF8): ZK22 ZK12 Unterbrechung der Spannungsversorgung | 0 |
| 0x01100f | Firing ASIC4 (SF7, SF8): ZK26 ZK25 Unterbrechung der Spannungsversorgung | 0 |
| 0x011010 | Firing ASIC1: Spannungsversorgungsfehler | 0 |
| 0x011011 | Firing ASIC2: Spannungsversorgungsfehler | 0 |
| 0x011012 | Firing ASIC3: Spannungsversorgungsfehler | 0 |
| 0x011013 | Firing ASIC4: Spannungsversorgungsfehler | 0 |
| 0x01101a | Spannungsversorgung Hall-Sensoren: Fehler | 0 |
| 0x011020 | Vbuck out of range (operational range) | 0 |
| 0x011021 | Vsnych out of range (operational range) | 0 |
| 0x011022 | VEnergyReserve out of range (operational range) | 0 |
| 0x011023 | Reset wegen internen 5V Abfall | 0 |
| 0x011024 | Reset wegen externen Watchdog | 0 |
| 0x011025 | ROM Check Fehler | 0 |
| 0x011026 | RAM Check Fehler | 0 |
| 0x011028 | Timeout interner Watchdog | 0 |
| 0x011029 | Task Watchdog Timeout | 0 |
| 0x01102a | Operating System Fehler | 0 |
| 0x01102c | Fehler externer Watchdog | 0 |
| 0x011030 | EEPROM Block write failure | 0 |
| 0x011031 | Firing ASIC1: bleibt in Reset während Startup | 0 |
| 0x011032 | Firing ASIC2: bleibt in Reset während Startup | 0 |
| 0x011033 | Firing ASIC3: bleibt in Reset während Startup | 0 |
| 0x011034 | Firing ASIC4: bleibt in Reset während Startup | 0 |
| 0x011035 | Firing ASIC1: Reset während der aktiv Phase (nach ASIC Init) | 0 |
| 0x011036 | Firing ASIC2: Reset während der aktiv Phase (nach ASIC Init) | 0 |
| 0x011037 | Firing ASIC3: Reset während der aktiv Phase (nach ASIC Init) | 0 |
| 0x011038 | Firing ASIC4: Reset während der aktiv Phase (nach ASIC Init) | 0 |
| 0x011039 | Firing ASIC1: Fehler bei LowSide Vref | 0 |
| 0x01103a | Firing ASIC2: Fehler bei LowSide Vref | 0 |
| 0x01103b | Firing ASIC3: Fehler bei LowSide Vref | 0 |
| 0x01103c | Firing ASIC4: Fehler bei LowSide Vref | 0 |
| 0x01103d | Firing ASIC1: Fehler bei HighSide Vref | 0 |
| 0x01103e | Firing ASIC2: Fehler bei HighSide Vref | 0 |
| 0x01103f | Firing ASIC3: Fehler bei HighSide Vref | 0 |
| 0x011040 | Firing ASIC4: Fehler bei HighSide Vref | 0 |
| 0x011041 | Firing ASIC1: Falscher Typ | 0 |
| 0x011042 | Firing ASIC2: Falscher Typ | 0 |
| 0x011043 | Firing ASIC3: Falscher Typ | 0 |
| 0x011044 | Firing ASIC4: Falscher Typ | 0 |
| 0x011045 | Firing ASIC1: Kondensator der Spannungsversogung Fehlerhaft | 0 |
| 0x011046 | Firing ASIC2: Kondensator der Spannungsversogung Fehlerhaft | 0 |
| 0x011047 | Firing ASIC3: Kondensator der Spannungsversogung Fehlerhaft | 0 |
| 0x011048 | Firing ASIC4: Kondensator der Spannungsversogung Fehlerhaft | 0 |
| 0x011055 | Firing ASIC1: Fehler beim Referenzwiderstand oder Teststromversorgung | 0 |
| 0x011056 | Firing ASIC2: Fehler beim Referenzwiderstand oder Teststromversorgung | 0 |
| 0x011057 | Firing ASIC3: Fehler beim Referenzwiderstand oder Teststromversorgung | 0 |
| 0x011058 | Firing ASIC4: Fehler beim Referenzwiderstand oder Teststromversorgung | 0 |
| 0x011059 | ZK1: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x01105a | ZK13: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x01105b | ZK3: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x01105c | ZK6: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x01105d | ZK17: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x01105e | ZK7: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x01105f | ZK4: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011060 | ZK14: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011061 | ZK19: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011062 | ZK8: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011063 | ZK2: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011064 | ZK5: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011065 | ZK23: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011066 | ZK15: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011067 | ZK21: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011068 | ZK9: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011069 | ZK18: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x01106a | ZK10: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x01106b | ZK20: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x01106c | ZK11: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x01106d | ZK24: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x01106e | ZK16: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x01106f | ZK22: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011070 | ZK12: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011071 | ZK29: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011072 | ZK30: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011073 | ZK31: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011074 | ZK32: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011075 | ZK28: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011076 | ZK27: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011077 | ZK26: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011078 | ZK25: High-Side-Transistor Fehler im Aktivierungstest | 0 |
| 0x011079 | ZK1: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x01107a | ZK13: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x01107b | ZK3: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x01107c | ZK6: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x01107d | ZK17: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x01107e | ZK7: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x01107f | ZK4: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011080 | ZK14: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011081 | ZK19: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011082 | ZK8: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011083 | ZK2: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011084 | ZK5: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011085 | ZK23: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011086 | ZK15: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011087 | ZK21: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011088 | ZK9: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011089 | ZK18: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x01108a | ZK10: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x01108b | ZK20: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x01108c | ZK11: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x01108d | ZK24: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x01108e | ZK16: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x01108f | ZK22: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011090 | ZK12: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011091 | ZK29: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011092 | ZK30: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011093 | ZK31: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011094 | ZK32: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011095 | ZK28: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011096 | ZK27: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011097 | ZK26: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011098 | ZK25: High-Side-Transistortest: falsche Aktivierungszeiten | 0 |
| 0x011099 | ZK1: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x01109a | ZK13: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x01109b | ZK3: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x01109c | ZK6: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x01109d | ZK17: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x01109e | ZK7: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x01109f | ZK4: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110a0 | ZK14: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110a1 | ZK19: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110a2 | ZK8: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110a3 | ZK2: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110a4 | ZK5: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110a5 | ZK23: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110a6 | ZK15: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110a7 | ZK21: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110a8 | ZK9: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110a9 | ZK18: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110aa | ZK10: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110ab | ZK20: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110ac | ZK11: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110ad | ZK24: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110ae | ZK16: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110af | ZK22: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110b0 | ZK12: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110b1 | ZK29: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110b2 | ZK30: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110b3 | ZK31: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110b4 | ZK32: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110b5 | ZK28: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110b6 | ZK27: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110b7 | ZK26: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110b8 | ZK25: Low-Side-Transistortest: Aktivierungsfehler | 0 |
| 0x0110b9 | ZK1: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110ba | ZK13: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110bb | ZK3: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110bc | ZK6: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110bd | ZK17: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110be | ZK7: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110bf | ZK4: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110c0 | ZK14: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110c1 | ZK19: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110c2 | ZK8: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110c3 | ZK2: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110c4 | ZK5: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110c5 | ZK23: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110c6 | ZK15: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110c7 | ZK21: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110c8 | ZK9: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110c9 | ZK18: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110ca | ZK10: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110cb | ZK20: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110cc | ZK11: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110cd | ZK24: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110ce | ZK16: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110cf | ZK22: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110d0 | ZK12: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110d1 | ZK29: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110d2 | ZK30: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110d3 | ZK31: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110d4 | ZK32: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110d5 | ZK28: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110d6 | ZK27: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110d7 | ZK26: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110d8 | ZK25: Low-Side-Transistortest: Deaktivierungsfehler | 0 |
| 0x0110d9 | Energiereserve: Kapazitaetsfehler | 0 |
| 0x0110da | Energiereserve: Entladungsfehler | 0 |
| 0x0110db | Energiereserve: Maximale Ladungszeit überschritten | 0 |
| 0x0110dc | Energiereserve: ESR-Wert zu groß | 0 |
| 0x0110e5 | Crashdatenpuffer: Owerflow | 0 |
| 0x0110e6 | RSU ASIC1: SPI-Schnittstelle: Kommunikationsfehler | 0 |
| 0x0110e7 | RSU ASIC2: SPI-Schnittstelle: Kommunikationsfehler | 0 |
| 0x0110e8 | RSU ASIC3: SPI-Schnittstelle: Kommunikationsfehler | 0 |
| 0x0110e9 | Energiereserve: Kurzschluss nach Masse | 0 |
| 0x0110ea | Fehler: kein Arming-Signal für die sofortige Zündung | 0 |
| 0x0110eb | Fehler: kein Arming-Signal für die zeitversetzte Zuendung | 0 |
| 0x0110ec | Fehler: Staendiger Crash-State | 0 |
| 0x0110ed | SC-NVRAM Manager: Config ID Fehler | 0 |
| 0x0110ee | SC-NVRAM Manager: Fehler beim Schreiben | 0 |
| 0x0110ef | SC-NVRAM Manager: Fehler beim Lesen | 0 |
| 0x0110f0 | SC-NVRAM Manager: Fehler bei Control-Operation | 0 |
| 0x0110f1 | SC-NVRAM Manager: Fehler beim Loeschen | 0 |
| 0x0110f2 | SC-NVRAM Manager: Fehler bei all Write Operation | 0 |
| 0x0110f3 | Firing ASIC1: Kommunikationsfehler mit dem Safing-ASIC (enable arming) | 0 |
| 0x0110f4 | Firing ASIC2: Kommunikationsfehler mit dem Safing-ASIC (enable arming) | 0 |
| 0x0110f5 | Firing ASIC3: Kommunikationsfehler mit dem Safing-ASIC (enable arming) | 0 |
| 0x0110f6 | Firing ASIC4: Kommunikationsfehler mit dem Safing-ASIC (enable arming) | 0 |
| 0x0110f7 | Firing ASIC1: FENLS-Signal Fehler | 0 |
| 0x0110f8 | Firing ASIC2: FENLS-Signal Fehler | 0 |
| 0x0110f9 | Firing ASIC3: FENLS-Signal Fehler | 0 |
| 0x0110fa | Firing ASIC4: FENLS-Signal Fehler | 0 |
| 0x0110fb | Firing ASIC1: Kommunikationsfehler mit dem Safing-ASIC (disable arming) | 0 |
| 0x0110fc | Firing ASIC2: Kommunikationsfehler mit dem Safing-ASIC (disable arming) | 0 |
| 0x0110fd | Firing ASIC3: Kommunikationsfehler mit dem Safing-ASIC (disable arming) | 0 |
| 0x0110fe | Firing ASIC4: Kommunikationsfehler mit dem Safing-ASIC (disable arming) | 0 |
| 0x0110ff | ZK1: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011100 | ZK13: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011101 | ZK3: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011102 | ZK6: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011103 | ZK17: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011104 | ZK7: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011105 | ZK4: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011106 | ZK14: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011107 | ZK19: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011108 | ZK8: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011109 | ZK2: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x01110a | ZK5: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x01110b | ZK23: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x01110c | ZK15: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x01110d | ZK21: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x01110e | ZK9: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x01110f | ZK18: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011110 | ZK10: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011111 | ZK20: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011112 | ZK11: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011113 | ZK24: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011114 | ZK16: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011115 | ZK22: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011116 | ZK12: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011117 | ZK29: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011118 | ZK30: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011119 | ZK31: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x01111a | ZK32: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x01111b | ZK28: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x01111c | ZK27: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x01111d | ZK26: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x01111e | ZK25: Unplausible Messwerte bei der Widerstandsmessung | 0 |
| 0x011122 | Safing-Microcontroller: Sensordatenfehler | 0 |
| 0x011124 | Safing-Microcontroller: interner Fehler | 0 |
| 0x011125 | falscher Safing-Algo | 0 |
| 0x011126 | AERIUS: Konfigurationsfehler | 0 |
| 0x011127 | Arming-Signal: Aktivzeit zu groß | 0 |
| 0x011128 | interner Fehler Xgate | 0 |
| 0x01112a | Fehler Energiereserve zyklischer Betrieb | 0 |
| 0x01112b | SW Ausführungsfehler Zuendroutine | 0 |
| 0x01112c | Boost Converter Spannungsversorgung fehlerhaft | 0 |
| 0x01112d | CAF 2/3 Checksummenfehler | 0 |
| 0x01112e | Fehler externer High-Side-Switch | 0 |
| 0x01112f | Analoger Ausgang zum ZK-ASIC1 ist unterbrochen | 0 |
| 0x011130 | Analoger Ausgang zum ZK-ASIC2 ist unterbrochen | 0 |
| 0x011131 | Analoger Ausgang zum ZK-ASIC3 ist unterbrochen | 0 |
| 0x011132 | Analoger Ausgang zum ZK-ASIC4 ist unterbrochen | 0 |
| 0x011133 | Verbindung uP zu  den ZK-ASICs 1-4 hat Kurzschluss nach Masse | 0 |
| 0x011134 | Verbindung uP zu  den ZK-ASICs 1-4 hat Kurzschluss nach Plus | 0 |
| 0x011135 | fehlerhafte SW-Ausfuehrung von Prozessorkern erkannt | 0 |
| 0x011136 | fehlerhaften Speicherzugriff auf Daten von Prozessorkern erkannt | 0 |
| 0x011137 | fehlerhaften Speicherzugriff auf uP-Befehle von Prozessorkern erkannt | 0 |
| 0x011138 | Kurzschluss am MUX für gebusste Hallsensoren | 0 |
| 0x011139 | Leitungsunterbrechnung zwischen Messpunkt und gebusstem Hallsensor-Ausgang 1 | 0 |
| 0x01113A | Leitungsunterbrechnung zwischen Messpunkt und gebusstem Hallsensor-Ausgang 2 | 0 |
| 0x01113B | Leitungsunterbrechnung zwischen Messpunkt und gebusstem Hallsensor-Ausgang 3 | 0 |
| 0x01113C | Spannungsversorgung: Diode defekt, ER hat zu schnell geladen / entladen | 0 |
| 0x01113D | Taktsignal zu Firing ASIC#0 nicht korrekt | 0 |
| 0x01113E | Taktsignal zu Firing ASIC#1 nicht korrekt | 0 |
| 0x01113F | Taktsignal zu Firing ASIC#2 nicht korrekt | 0 |
| 0x011140 | Taktsignal zu Firing ASIC#3 nicht korrekt | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1727 | Außentemperatur | °C | - | unsigned char | - | 1 | 2 | -40 |
| 0x1728 | Status Fahrzeug FZM | 0-n | - | 0xFF | Fahrzeug_Status_FZM | 1 | 1 | 0 |
| 0x4000 | Systemzeit Fehlerbeginn | - | high | signed long | - | 1 | 1 | 0 |
| 0x4001 | Systemzeit Fehlerende | - | high | signed long | - | 1 | 1 | 0 |
| 0x4002 | Steuergerät Innentemperatur | 0-n | - | 0xFF | ACSM3_Innentemperatur | 1 | 1 | 0 |
| 0x4003 | Systemzustand | - | high | signed long | - | 1 | 1 | 0 |
| 0x4004 | Zeit nach PowerOnReset | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x4005 | PowerOn Zähler | - | high | signed long | - | 1 | 1 | 0 |
| 0x4006 | Batteriespannung am Steuergerät | Volt | - | unsigned char | - | 41 | 500 | 0 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |
