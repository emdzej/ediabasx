# sec1.prg

## General

|  |  |
| --- | --- |
| File | sec1.prg |
| Type | PRG |
| Jobs | 39 |
| Tables | 52 |
| Origin | BMW ZS-E Widholm |
| Revision | 2.006 |
| Author | remes ZS-E Hermann_Brandlmeier, remes ZS-E Wolfgang_Rapp |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Sicherheitsfahrzeugmodul 1 |  |  |
| ORIGIN | string | BMW ZS-E Widholm |  |  |
| REVISION | string | 2.006 |  |  |
| AUTHOR | string | remes ZS-E Hermann_Brandlmeier, remes ZS-E Wolfgang_Rapp |  |  |
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

### _STATUS

Auslesen der Stati nur fuer Entwicklung !!! UDS  : $22   ReadDataByIdentifier UDS  : $40xx SG-spezifischer Bereich

| Name | Type | Description |
| --- | --- | --- |
| PARA | int | 2.Parameter |
| OUTBUF | string |  |

### _STEUERN

Vorgeben von Digital-Ausgaengen nur fuer Entwicklung !!! UDS  : $2F   InputOutputControlByIdentifier UDS  : $40xx SG-spezifischer Bereich UDS  : $03   shortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| PARA | int | 2.Parameter |
| OUTBUF | string |  |

### SUBBUS_VERSIONSNUMMERN

Versionsnummern der Sec-CAN Teilnehmer lesen UDS   : $22   ReadDataByIdentifier UDS   : $40 UDS   : $04

_No arguments._

### STATUS_UNIT_WIRE_AUSLOESUNG

UDS  : $22   ReadDTCInformation UDS  : $DD2A Werte werden im Sekundenabstand aufgezeichnet und in °C angezeigt Ergebnissatz 1 ist der zuletzt Aufgezeichnete Nach einer Ausloesung werden die Werte nicht mehr aktualisiert

_No arguments._

### SUBBUS_ZIFFELD

Auslesen des Zulieferer-Infofelds der Subbusteilnehmer UDS   : $22   ReadDataByIdentifier UDS   : $40 UDS   : $FE

| Name | Type | Description |
| --- | --- | --- |
| PARA | int | Subbus-SG-Adresse 0x03 Sec_Anlagen 0x04 Sec_Behörde_Audio 0x07 Schaltzentrum Sicherheitsfahrzeug 0x08 Schaltzentrum Behörde |

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

### ARG_0XA178

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | char | - | TAB_FH_AUSWAHL | - | - | - | - | - | Auswahl siehe Tabelle TAB_FH_AUSWAHL |
| AKTION | + | - | 0-n | - | char | - | TAB_FH_VERFAHREN | - | - | - | - | - | 0: Keine Aktion  1: Öffnen  2: Schliessen  3: Maut öffnen  4: Maut schliessen |
| ZEIT | + | - | ms | - | int | - | - | - | - | - | - | - | Angabe der Ansteuerzeit in 100ms-Schritten |

### ARG_0XDD14

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | - | char | - | - | - | - | - | - | - | Gibt die Ansteuerung vom Trennrelais an: 0x00 = AUS 0x01 = EIN 0x10 = dauerhaft Oeffnen AUS 0x11 = dauerhaft Oeffnen EIN 0x20 = dauerhaft bei KlemmeR schliessen AUS 0x21 = dauerhaft bei KlemmeR schliessen EIN |

### ARG_0XDD17

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TONFOLGE | 0-n | - | char | - | TAB_TONFOLGE | - | - | - | - | - | Gibt an, welche Tonfolge im Leisedurchlauf ausgegeben werden soll: 0 = Überfallalarm1 1 = Überfallalarm2 2 = Überfallalarm3 3 = Tonfolge ECE 4 = Tonfolge Yelp 5 = Tonfolge Wail 6 = Tonfolge HiLo 7 = Tonfolge Airhorn 8 = Tonfolge Peak |

### ARG_0XDD1C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | - | char | - | - | - | - | - | - | - | 0x55: Auslöseflag Notausstieg löschen |

### ARG_0XDD1F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANZEIGEFARBE | 0-n | - | char | - | TAB_ANZEIGEFARBE | - | - | - | - | - | Steuert die Beschleunigungsanzeige in den verschiedenen Farben an: 0 = Ansteuerung aus 1 = Ansteuerung Gruen 2 = Ansteuerung Rot |

### ARG_0XDD20

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HEIZFELD | 0-n | - | char | - | TAB_HEIZFELDER | - | - | - | - | - | Gibt das anzusteuernde Heizfeld an. 0 = ALLE 1 = Heizfeld Front links 2 = Heizfeld Front rechts 3 = Heizfeld Seite links 4 = Heizfeld Seite rechts |
| ZEIT | s | - | char | - | - | - | - | - | - | - | Angabe der Zeit der Ansteuerung in Sekunden: 0 = Ansteuerung AUS 1 - 120 Sekunden Automatisches Beenden der Ansteuerung nach 120 Sekunden. |

### ARG_0XDD26

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BLITZLEUCHTE_DACH | 0/1 | - | char | - | - | - | - | - | - | - | Gibt die Ansteuerung der Blitzleuchte Dach an: 0 = AUS 1 = EIN |
| BLITZLEUCHTE_FRONT | 0/1 | - | char | - | - | - | - | - | - | - | Gibt die Ansteuerung der Blitzleuchte Front an: 0 = AUS 1 = EIN |
| BLITZLEUCHTE_HECK | 0/1 | - | char | - | - | - | - | - | - | - | Gibt die Ansteuerung der Blitzleuchte Heck an: 0 = AUS 1 = EIN |
| BLITZLEUCHTE_SEITE | 0/1 | - | char | - | - | - | - | - | - | - | Gibt die Ansteuerung der Blitzleuchte Seite an: 0 = AUS 1 = EIN |

### ARG_0XDD2A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | - | char | - | - | - | - | - | - | - | 0x55: Ringspeicher löschen und aktivieren für nächste Auslösung |

### ARG_0XDD2B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KILOMETER | km | high | unsigned long | - | - | - | - | - | - | - | Kilometerstand |

### ARG_0XDD48

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONFIGURATION_IDX | - | high | unsigned long | - | - | - | - | - | - | - | Konfiguration des IFS-Steuergeräts |

### ARG_0XDD49

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONFIGURATION_IDX | - | high | unsigned long | - | - | - | - | - | - | - | Konfiguration des IFS-Steuergeräts |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungueltiger Betriebsmode | ungueltig |

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
| 0x024900 | Energiesparmode aktiv | 0 |
| 0x02FF49 | Diagnosemaster Testfehler: Application | 1 |
| 0x803A00 | Fensterheber FAT: Spannungsversorgung | 0 |
| 0x803A01 | Fensterheber BFT: Spannungsversorgung | 0 |
| 0x803A02 | Fensterheber FATH: Spannungsversorgung | 0 |
| 0x803A03 | Fensterheber BFTH: Spannungsversorgung | 0 |
| 0x803A04 | Fensterheber FAT: Endschalter | 0 |
| 0x803A05 | Fensterheber BFT: Endschalter | 0 |
| 0x803A06 | Fensterheber FATH: Endschalter | 0 |
| 0x803A07 | Fensterheber BFTH: Endschalter | 0 |
| 0x803A0B | Steuergeraet SEC Anlagen: interner Fehler | 0 |
| 0x803A0C | Temperaturmessdraht vorn: Kurzschluss nach Minus | 0 |
| 0x803A0D | Temperaturmessdraht links: Kurzschluss nach Minus | 0 |
| 0x803A0E | Temperaturmessdraht rechts: Kurzschluss nach Minus | 0 |
| 0x803A0F | Temperaturmessdraht vorn: Kurzschluss nach Plus | 0 |
| 0x803A10 | Temperaturmessdraht links: Kurzschluss nach Plus | 0 |
| 0x803A11 | Temperaturmessdraht rechts: Kurzschluss nach Plus | 0 |
| 0x803A12 | Temperaturmessdraht vorn: Unterbrechung | 0 |
| 0x803A13 | Temperaturmessdraht links: Unterbrechung | 0 |
| 0x803A14 | Temperaturmessdraht rechts: Unterbrechung | 0 |
| 0x803A15 | Zuendpille Feuerloescher links: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x803A16 | Zuendpille Feuerloescher rechts: Kurzschluss nach Minus oder Unterbrechung | 0 |
| 0x803A17 | Zuendpille Feuerloescher links: Kurzschluss nach Plus | 0 |
| 0x803A18 | Zuendpille Feuerloescher rechts: Kurzschluss nach Plus | 0 |
| 0x803A19 | Zuendpillen Feuerloescher: Querschluss | 0 |
| 0x803A1A | Ausloesung Loeschanlage durch Taster | 1 |
| 0x803A1B | Ausloesung Loeschanlage durch Temperaturmessdraht vorn | 1 |
| 0x803A1C | Ausloesung Loeschanlage durch Temperaturmessdraht unten links | 1 |
| 0x803A1D | Ausloesung Loeschanlage durch Temperaturmessdraht unten rechts | 1 |
| 0x803A1E | Drucksensor Luftflasche: Unterbrechung | 0 |
| 0x803A1F | Magnetventil Luftflasche: Unterbrechung | 0 |
| 0x803A20 | Magnetventil Luftflasche: Kurzschluss | 0 |
| 0x803A21 | Ausloesung Luftanlage | 1 |
| 0x803A22 | Notausstieg PinPuller 1: Kurzschluss | 0 |
| 0x803A23 | Notausstieg PinPuller 2: Kurzschluss | 0 |
| 0x803A24 | Notausstieg PinPuller 3: Kurzschluss | 0 |
| 0x803A25 | Notausstieg PinPuller 4: Kurzschluss | 0 |
| 0x803A26 | Notausstieg Kraftelement 1: Kurzschluss | 0 |
| 0x803A27 | Notausstieg Kraftelement 2: Kurzschluss | 0 |
| 0x803A28 | Notausstieg PinPuller 1: Unterbrechung | 0 |
| 0x803A29 | Notausstieg PinPuller 2: Unterbrechung | 0 |
| 0x803A2A | Notausstieg PinPuller 3: Unterbrechung | 0 |
| 0x803A2B | Notausstieg PinPuller 4: Unterbrechung | 0 |
| 0x803A2C | Notausstieg Kraftelement 1: Unterbrechung | 0 |
| 0x803A2D | Notausstieg Kraftelement 2: Unterbrechung | 0 |
| 0x803A2E | Ausloesung Notausstieg | 1 |
| 0x803A2F | Ausloesung Reizgassensor Stufe 1 oxidierbare Gase | 1 |
| 0x803A30 | Ausloesung Reizgassensor Stufe 1 reduzierbare Gase | 1 |
| 0x803A31 | Ausloesung Reizgassensor Stufe 2 oxidierbare Gase | 1 |
| 0x803A32 | Ausloesung Reizgassensor Stufe 2 reduzierbare Gase | 1 |
| 0x803A33 | Reizgassensor: Datenuebertragung fehlerhaft | 0 |
| 0x803A34 | Reizgassensor: Interner Fehler | 0 |
| 0x803A35 | Reizgassensor: Kurzschluss nach Minus | 0 |
| 0x803A36 | Reizgassensor: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x803A37 | Luftanlage: Flaschendruck zu gering | 0 |
| 0x803A38 | Funkgeraet 1: Spannungsversorgung | 0 |
| 0x803A39 | Funkgeraet 2: Spannungsversorgung | 0 |
| 0x803A3A | WSA, Tonfolge: Spannungsversorgung | 0 |
| 0x803A3B | Blitzleuchte Dach: Spannungsversorgung | 0 |
| 0x803A3C | Blitzleuchte Front: Spannungsversorgung | 0 |
| 0x803A3D | Blitzleuchte Heck: Spannungsversorgung | 0 |
| 0x803A3E | Blitzleuchte Seite: Spannungsversorgung | 0 |
| 0x803A42 | Steuergeraet SEC Audio: interner Fehler | 0 |
| 0x803A43 | Blitzleuchte Dach: Unterbrechung | 0 |
| 0x803A44 | Blitzleuchte Front: Unterbrechung | 0 |
| 0x803A45 | Blitzleuchte Heck: Unterbrechung | 0 |
| 0x803A46 | Blitzleuchte Seite: Unterbrechung | 0 |
| 0x803A47 | Druckkammerlautsprecher links: Kurzschluss | 0 |
| 0x803A48 | Druckkammerlautsprecher rechts: Kurzschluss | 0 |
| 0x803A49 | Druckkammerlautsprecher links: Unterbrechung | 0 |
| 0x803A4A | Druckkammerlautsprecher rechts: Unterbrechung | 0 |
| 0x803A4B | Schaltzentrum Security/Behoerde: Tasten unplausibel | 0 |
| 0x803A4C | Taste Alarm Reset: Unterbrechung | 0 |
| 0x803A4D | Taste Antikidnapping: Unterbrechung | 0 |
| 0x803A4E | Taste Notausstieg: Unterbrechung | 0 |
| 0x803A4F | Taste Selektive ZV: Unterbrechung | 0 |
| 0x803A50 | Steuergeraet SEC Anlagen: Ausfall | 1 |
| 0x803A51 | Steuergeraet SEC Audio: Ausfall | 1 |
| 0x803A52 | Steuergeraet SEC LVDS: Ausfall | 1 |
| 0x803A53 | Steuergeraet SEC MWS: Ausfall | 1 |
| 0x803A54 | Steuergeraet SEC Schaltzentrum: Ausfall | 1 |
| 0x803A59 | SA-Stecker: Spannungsversorgung | 0 |
| 0x803A5A | Wartung Zusatzschutz: KM-Stand ueberschritten | 0 |
| 0x803A5B | Heizung Frontscheibe links: Spannungsversorgung | 0 |
| 0x803A5C | Heizung Frontscheibe rechts: Spannungsversorgung | 0 |
| 0x803A5D | Heizung Seitenscheibe: Spannungsversorgung | 0 |
| 0x803A5E | Heizung Frontscheibe links: Kurzschluss nach Minus | 0 |
| 0x803A5F | Heizung Frontscheibe rechts: Kurzschluss nach Minus | 0 |
| 0x803A60 | Heizung Seitenscheibe links: Kurzschluss nach Minus | 0 |
| 0x803A61 | Heizung Seitenscheibe rechts: Kurzschluss nach Minus | 0 |
| 0x803A62 | Heizung Frontscheibe links: Unterbrechung | 0 |
| 0x803A63 | Heizung Frontscheibe rechts: Unterbrechung | 0 |
| 0x803A64 | Heizung Seitenscheibe links: Unterbrechung | 0 |
| 0x803A65 | Heizung Seitenscheibe rechts: Unterbrechung | 0 |
| 0x803A66 | Bordbatterie: Spannungsversorgung | 0 |
| 0x803A67 | Zusatzbatterie: Spannungsversorgung | 0 |
| 0x803A68 | Zusatzbatterie: Zustand nicht in Ordnung | 0 |
| 0x803A69 | Leitung Abwurf Trennrelais: Unterbrechung | 0 |
| 0x803A6A | Leitung Anzug Trennrelais: Unterbrechung | 0 |
| 0x803A6C | Kontakt Trennrelais: Zustand nicht in Ordnung | 0 |
| 0x803A6D | Steuergeraet SEC Basis: interner Fehler | 0 |
| 0x803A76 | Steuergerät IFS: Ausfall | 0 |
| 0x803A77 | Steuergerät APIX: Ausfall | 0 |
| 0x803A78 | Steuergerät IFS: Ausfall Blaulicht | 0 |
| 0x803A79 | Steuergerät IFS: Ausfall Tonfolgeanlage | 0 |
| 0x803A7A | Steuergerät IFS: interner Fehler | 0 |
| 0x803A7C | Steuergerät IFS: Peripheriedefekt | 0 |
| 0xDB4468 | Body-CAN Control Module Bus OFF | 1 |
| 0xDB4BFF | Diagnosemaster Testfehler: Netzwerk | 1 |
| 0xDB4C00 | Sec-CAN Bus | 1 |
| 0xDB4C09 | Sec-CAN Control Module Bus OFF | 1 |
| 0xDB4C1E | LIN_1 Bus Error IBS | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

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
| 0x490401 | DM_Queue_Full | 0 |
| 0x490402 | DM_Queue_Deleted | 0 |
| 0x491001 | DM_Event_ZeitbotschaftTimeout | 1 |
| 0x491002 | DM_Event_Ausfall_FZGzustand | 1 |
| 0x492001 | NVM_E_Write_Failed | 0 |
| 0x492002 | NVM_E_Read_Failed | 0 |
| 0x492003 | NVM_E_Control_Failed | 0 |
| 0x492004 | NVM_E_Erase_Failed | 0 |
| 0x492006 | NVM_E_Write_All_Failed | 0 |
| 0x492007 | NVM_E_Read_All_Failed | 0 |
| 0x492010 | NVM_E_Wrong_Config_ID | 0 |
| 0x493000 | FLS_E_Erase_Failed | 0 |
| 0x493001 | FLS_E_Write_Failed | 0 |
| 0x493002 | FLS_E_Read_Failed | 0 |
| 0x493003 | FLS_E_Compare_Failed | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4005

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEC_BASIS_UBB_LOW | 0/1 | - | char | - | - | - | - | - | Spannung am Eingang 30BB des Sec_Behoerde_Basis nicht vorhanden |
| STAT_SEC_BASIS_UB2_LOW | 0/1 | - | char | - | - | - | - | - | Spannung am Eingang 30B2 des Sec_Behoerde_Basis nicht vorhanden |
| STAT_SEC_ANLAGEN_UBB_LOW | 0/1 | - | char | - | - | - | - | - | Spannung am Eingang 30BB des Sec_Anlagen nicht vorhanden |
| STAT_SEC_ANLAGEN_UB2_LOW | 0/1 | - | char | - | - | - | - | - | Spannung am Eingang 30B2 des Sec_Anlagen nicht vorhanden |
| STAT_SEC_AUDIO_UBB_LOW | 0/1 | - | char | - | - | - | - | - | Spannung am Eingang 30BB des Sec_Behoerde_Audio nicht vorhanden |
| STAT_SEC_AUDIO_UB2_LOW | 0/1 | - | char | - | - | - | - | - | Spannung am Eingang 30B2 des Sec_Behoerde_Audio nicht vorhanden |
| STAT_SEC_LVDS_UBB_LOW | 0/1 | - | char | - | - | - | - | - | VORHALT: Spannung am Eingang 30BB des Sec_LVDS nicht vorhanden |
| STAT_SEC_LVDS_UB2_LOW | 0/1 | - | char | - | - | - | - | - | VORHALT: Spannung am Eingang 30B2 des Sec_LVDS nicht vorhanden |
| STAT_SEC_SCHALTZ_UBB_LOW | 0/1 | - | char | - | - | - | - | - | VORHALT: Spannung am Eingang 30BB des Schaltzentrum nicht vorhanden |
| STAT_SEC_SCHALTZ_UB2_LOW | 0/1 | - | char | - | - | - | - | - | VORHALT: Spannung am Eingang 30B2 des Schaltzentrum nicht vorhanden |

### RES_0XDD10

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRUCK_LUFTFLASCHE_WERT | bar | - | int | - | - | - | - | - | Gibt den gemessenen Druck der Luftflasche in bar aus. |
| STAT_MIN_DRUCK_LUFTFLASCHE_WERT | bar | - | int | - | - | - | - | - | Gibt den um die Außentemperatur korrigierten minimalen Druck der Luftflasche in bar aus. Fällt der Druck unter diesen Wert, wird ein Fehler erkannt. |

### RES_0XDD12

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_BATTERIE_2_WERT | V | - | int | - | - | - | 1000 | - | Gibt die Spannung der 2. Batterie auf 0,1 Volt genau aus. |
| STAT_STROM_BATTERIE_2_WERT | A | - | int | - | - | - | 50 | -200 | Gibt den Strom der 2. Batterie auf 0,1 Ampere genau aus. |
| STAT_TEMP_BATTERIE_2_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48 | Gibt die Temperatur der 2. Batterie auf 5°C genau aus. |

### RES_0XDD14

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TRENNRELAIS_EIN | 0/1 | - | char | - | - | - | - | - | Gibt den Status vom Trennrelais aus. 0 = AUS 1 = EIN |

### RES_0XDD17

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TONFOLGE_NR | 0-n | - | char | - | TAB_TONFOLGE | - | - | - | Gibt die aktuelle Tonfolge aus. |

### RES_0XDD1A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_FHFA_NR | 0-n | - | char | - | TAB_FH_VERFAHREN | - | - | - | Taster Fensterheber Fahrerseite. |
| STAT_BUS_IN_FHBF_NR | 0-n | - | char | - | TAB_FH_VERFAHREN | - | - | - | Taster Fensterheber Beifahrerseite. |
| STAT_BUS_IN_FHFAH_NR | 0-n | - | char | - | TAB_FH_VERFAHREN | - | - | - | Taster Fensterheber Fahrerseite hinten. |
| STAT_BUS_IN_FHBFH_NR | 0-n | - | char | - | TAB_FH_VERFAHREN | - | - | - | Taster Fensterheber Beifahrerseite hinten. |

### RES_0XDD1C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NOTAUSSTIEG_PP1_NR | 0-n | - | char | - | TAB_STATUS_NOTAUSSTIEG | - | - | - | Funktionstatus Notausstieg Pinpuller 1 |
| STAT_NOTAUSSTIEG_PP2_NR | 0-n | - | char | - | TAB_STATUS_NOTAUSSTIEG | - | - | - | Funktionstatus Notausstieg Pinpuller 2 |
| STAT_NOTAUSSTIEG_PP3_NR | 0-n | - | char | - | TAB_STATUS_NOTAUSSTIEG | - | - | - | Funktionstatus Notausstieg Pinpuller 3 |
| STAT_NOTAUSSTIEG_PP4_NR | 0-n | - | char | - | TAB_STATUS_NOTAUSSTIEG | - | - | - | Funktionstatus Notausstieg Pinpuller 4 |
| STAT_NOTAUSSTIEG_AW1_NR | 0-n | - | char | - | TAB_STATUS_NOTAUSSTIEG | - | - | - | Funktionstatus Notausstieg Auswerfer 1 |
| STAT_NOTAUSSTIEG_AW2_NR | 0-n | - | char | - | TAB_STATUS_NOTAUSSTIEG | - | - | - | Funktionstatus Notausstieg Auswerfer 2 |

### RES_0XDD1F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZEIGEFARBE_NR | 0-n | - | char | - | TAB_ANZEIGEFARBE | - | - | - | Gibt den Status (Farbe) der Beschleunigungsanzeige aus. 0 = Ansteuerung aus 1 = Ansteuerung Gruen 2 = Ansteuerung Rot |

### RES_0XDD20

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HEIZFELD_FRONT_LINKS_EIN | 0/1 | - | char | - | - | - | - | - | Gibt den Status vom Heizfeld für Frontscheibe links aus. 0 = AUS 1 = EIN |
| STAT_HEIZFELD_FRONT_RECHTS_EIN | 0/1 | - | char | - | - | - | - | - | Gibt den Status vom Heizfeld für Frontscheibe rechts aus. 0 = AUS 1 = EIN |
| STAT_HEIZFELD_SEITE_LINKS_EIN | 0/1 | - | char | - | - | - | - | - | Gibt den Status vom Heizfeld für Seitenscheibe links aus. 0 = AUS 1 = EIN |
| STAT_HEIZFELD_SEITE_RECHTS_EIN | 0/1 | - | char | - | - | - | - | - | Gibt den Status vom Heizfeld für Seitenscheibe rechts aus. 0 = AUS 1 = EIN |

### RES_0XDD21

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UNIT_WIRE_VORN_WERT | °C | - | int | - | - | - | - | - | Gibt den Temperaturwert vom Temperaturmessdraht in Grad Celsius von 180°C bis 240°C auf +-10°C aus. |
| STAT_UNIT_WIRE_UNTEN_LINKS_WERT | °C | - | int | - | - | - | - | - | Gibt den Temperaturwert vom Temperaturmessdraht in Grad Celsius von 180°C bis 240°C auf +-10°C aus. |
| STAT_UNIT_WIRE_UNTEN_RECHTS_WERT | °C | - | int | - | - | - | - | - | Gibt den Temperaturwert vom Temperaturmessdraht in Grad Celsius von 180°C bis 240°C auf +-10°C aus. |

### RES_0XDD26

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLITZLEUCHTE_DACH_EIN | 0/1 | - | char | - | - | - | - | - | Gibt den Status von der Blitzleuchte Dach aus: 0 = AUS 1 = EIN |
| STAT_BLITZLEUCHTE_FRONT_EIN | 0/1 | - | char | - | - | - | - | - | Gibt den Status von der Blitzleuchte Front aus: 0 = AUS 1 = EIN |
| STAT_BLITZLEUCHTE_HECK_EIN | 0/1 | - | char | - | - | - | - | - | Gibt den Status von der Blitzleuchte Heck aus: 0 = AUS 1 = EIN |
| STAT_BLITZLEUCHTE_SEITE_EIN | 0/1 | - | char | - | - | - | - | - | Gibt den Status von der Blitzleuchte Seite aus: 0 = AUS 1 = EIN |

### RES_0XDD2A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UNIT_WIRE_VORN_1_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 1 |
| STAT_UNIT_WIRE_VORN_2_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 2 |
| STAT_UNIT_WIRE_VORN_3_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 3 |
| STAT_UNIT_WIRE_VORN_4_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 4 |
| STAT_UNIT_WIRE_VORN_5_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 5 |
| STAT_UNIT_WIRE_VORN_6_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 6 |
| STAT_UNIT_WIRE_VORN_7_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 7 |
| STAT_UNIT_WIRE_VORN_8_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 8 |
| STAT_UNIT_WIRE_VORN_9_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 9 |
| STAT_UNIT_WIRE_VORN_10_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 10 |
| STAT_UNIT_WIRE_VORN_11_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 11 |
| STAT_UNIT_WIRE_VORN_12_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 12 |
| STAT_UNIT_WIRE_VORN_13_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 13 |
| STAT_UNIT_WIRE_VORN_14_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 14 |
| STAT_UNIT_WIRE_VORN_15_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 15 |
| STAT_UNIT_WIRE_VORN_16_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 16 |
| STAT_UNIT_WIRE_VORN_17_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 17 |
| STAT_UNIT_WIRE_VORN_18_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 18 |
| STAT_UNIT_WIRE_VORN_19_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 19 |
| STAT_UNIT_WIRE_VORN_20_WERT | °C | - | int | - | - | - | - | - | Unit Wire vorne Temperaturwert 20 |
| STAT_UNIT_WIRE_UNTEN_LINKS_1_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 1 |
| STAT_UNIT_WIRE_UNTEN_LINKS_2_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 2 |
| STAT_UNIT_WIRE_UNTEN_LINKS_3_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 3 |
| STAT_UNIT_WIRE_UNTEN_LINKS_4_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 4 |
| STAT_UNIT_WIRE_UNTEN_LINKS_5_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 5 |
| STAT_UNIT_WIRE_UNTEN_LINKS_6_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 6 |
| STAT_UNIT_WIRE_UNTEN_LINKS_7_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 7 |
| STAT_UNIT_WIRE_UNTEN_LINKS_8_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 8 |
| STAT_UNIT_WIRE_UNTEN_LINKS_9_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 9 |
| STAT_UNIT_WIRE_UNTEN_LINKS_10_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 10 |
| STAT_UNIT_WIRE_UNTEN_LINKS_11_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 11 |
| STAT_UNIT_WIRE_UNTEN_LINKS_12_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 12 |
| STAT_UNIT_WIRE_UNTEN_LINKS_13_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 13 |
| STAT_UNIT_WIRE_UNTEN_LINKS_14_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 14 |
| STAT_UNIT_WIRE_UNTEN_LINKS_15_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 15 |
| STAT_UNIT_WIRE_UNTEN_LINKS_16_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 16 |
| STAT_UNIT_WIRE_UNTEN_LINKS_17_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 17 |
| STAT_UNIT_WIRE_UNTEN_LINKS_18_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 18 |
| STAT_UNIT_WIRE_UNTEN_LINKS_19_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 19 |
| STAT_UNIT_WIRE_UNTEN_LINKS_20_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten links Temperaturwert 20 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_1_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 1 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_2_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 2 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_3_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 3 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_4_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 4 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_5_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 5 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_6_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 6 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_7_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 7 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_8_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 8 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_9_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 9 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_10_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 10 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_11_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 11 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_12_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 12 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_13_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 13 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_14_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 14 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_15_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 15 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_16_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 16 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_17_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 17 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_18_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 18 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_19_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 19 |
| STAT_UNIT_WIRE_UNTEN_RECHTS_20_WERT | °C | - | int | - | - | - | - | - | Unit Wire unten rechts Temperaturwert 20 |

### RES_0XDD2B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARTUNG_KILOMETER_WERT | km | high | unsigned long | - | - | - | - | - | Kilometer für Wartung |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FH_VERFAHREN | 0xA178 | - | Ansteuerung der Fensterheber (ELEMENT;AKTION;ZEIT in s) Argumente siehe Tabelle | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA178 | - |
| LUFTFLASCHE_DRUCK | 0xDD10 | - | Gibt den tatsächlichen Druck der Luftflasche sowie den zulässigen Minimalwert in Abhängigkeit der Außentemperatur aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD10 |
| REIZGASSENSOR | 0xDD11 | STAT_REIZGASSENSOR_NR | Gibt die Signale des Reizgassensors aus. | 0-n | - | - | char | TAB_STATUS_REIZGASSENSOREN | - | - | - | - | 22 | - | - |
| BATTERIE_2 | 0xDD12 | - | Gibt den Status der 2. Batterie aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD12 |
| SPANNUNG_BORDBATTERIE | 0xDD13 | STAT_BORDBATTERIE_WERT | Gibt die Spannung der Bordbatterie auf 0,1V genau aus. | V | - | - | unsigned char | - | - | 10 | - | - | 22 | - | - |
| TRENNRELAIS | 0xDD14 | - | Gibt den Status vom Trennrelais aus oder steuert das Trennrelais an. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDD14 | RES_0xDD14 |
| TONFOLGE | 0xDD17 | - | Gibt den Status der Tonfolge aus oder steuert diese an. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDD17 | RES_0xDD17 |
| STAT_BUS_IN_FENSTERHEBER | 0xDD1A | - | Gibt den Status der über BUS empfangenen Signale für Fensterheber aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD1A |
| NOTAUSSTIEG_STATUS | 0xDD1C | - | Gibt den Status der Pinpuller und Auswerfer vom Notausstieg aus. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDD1C | RES_0xDD1C |
| TASTER_NOTAUSSTIEG | 0xDD1E | STAT_TASTE_NOTAUSSTIEG_EIN | Ausgabe des Tastenstatus für  Notausstieg. | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| BESCHLEUNIGUNGSANZEIGE | 0xDD1F | - | Steuert die Beschleunigungsanzeige an oder gibt  den Status der Anzeige aus. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDD1F | RES_0xDD1F |
| SCHEIBENHEIZUNG | 0xDD20 | - | Gibt den Status der Heizfelder der Scheibenheizung  aus oder steuert die Heizfelder an. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDD20 | RES_0xDD20 |
| UNIT_WIRE | 0xDD21 | - | Gibt den aktuellen Wert der Temperatursensoren (Unit-Wire)  für die Feuerlöschanlage aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD21 |
| TASTER_FEUERLOESCHANLAGE | 0xDD22 | STAT_TASTE_FEUERLOESCHANLAGE_EIN | Ausgabe des Tastenstatus für Feuerlöschanlage. | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| BLITZLEUCHTEN | 0xDD26 | - | Gibt den Status der Blitzleuchten aus  oder steuert diese an. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDD26 | RES_0xDD26 |
| TASTER_LUFTANLAGE | 0xDD29 | STAT_TASTE_LUFTANLAGE_EIN | Ausgabe des Tastenstatus für Luftanlage. | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| UNIT_WIRE_AUSLOESUNG | 0xDD2A | - | Liest die Temperaturwerte der letzten 20 Sekunden bei einer Auslösung aus oder setzt den Ringpuffer zurück. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDD2A | RES_0xDD2A |
| WARTUNGSANZEIGE | 0xDD2B | - | Wartungsanzeige | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDD2B | RES_0xDD2B |
| KONFIGURATIONSMODUS_IFS | 0xDD48 | - | Versetzen des HCAN-Steuergeräts IFS in den Konfigurationsmodus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD48 | - |
| KONFIGURATION_IFS_WIEDERHERSTELLEN | 0xDD49 | - | Konfigurationsdaten des HCAN-Steuergerät IFS aus dem SEC1 wiederherstellen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD49 | - |
| VERSORGUNG_SEC_STEUERGERAETE | 0x4005 | - | Gibt den Status der Versorgungseingaenge an den Securitysteuergeraeten zurueck | - | - | - | - | - | - | - | - | 0x49 | 22 | - | RES_0x4005 |

### TAB_ANZEIGEFARBE

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | GRÜN |
| 0x02 | ROT |

### TAB_FH_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x11 | Fenster Fahrer |
| 0x12 | Fenster Beifahrer |
| 0x13 | Fenster Fahrer hinten |
| 0x14 | Fenster Beifahrer hinten |
| 0x40 | Alle |
| 0xFF | ungültiger Wert |

### TAB_FH_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Öffnen |
| 0x02 | Maut öffnen |
| 0x03 | Schließen |
| 0x04 | Maut schliessen |
| 0xFF | ungültiger Wert |

### TAB_HEIZFELDER

| WERT | TEXT |
| --- | --- |
| 0x00 | Alle |
| 0x01 | Heizfeld Front links |
| 0x02 | Heizfeld Front rechts |
| 0x03 | Heizfeld Seite links |
| 0x04 | Heizfeld Seite rechts |

### TAB_STATUS_NOTAUSSTIEG

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Kurzschluss zu Plus |
| 0x02 | Kurzschluss zu Minus |
| 0x04 | Unterbrechung |
| 0xFF | ungültiger Wert |

### TAB_STATUS_REIZGASSENSOREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | interner Fehler |
| 0x03 | Prüfmodus |
| 0x04 | Auslösung Stufe 2 oxidierbare Gase |
| 0x05 | Auslösung Stufe 2 reduzierbare Gase |
| 0x06 | Auslösung Stufe 1 oxidierbare Gase |
| 0x07 | Auslösung Stufe1 reduzierbare Gase |
| 0x08 | Initialisierung |
| 0x09 | OK |
| 0x0A | Timeout, Kurzschluss |
| 0x0B | Timeout, Unterbrechung |
| 0xFF | ungültiger Wert |

### TAB_TONFOLGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Überfallalarm 1 |
| 0x01 | Überfallalarm 2 |
| 0x02 | Überfallalarm 3 |
| 0x03 | Tonfolge ECE Stadt |
| 0x04 | Tonfolge Yelp |
| 0x05 | Tonfolge Wail |
| 0x06 | Tonfolge HiLo |
| 0x07 | Tonfolge Airhorn |
| 0x08 | Tonfolge Peak |
| 0x0E | Tonfolge ECE Land |
| 0xFF | keine Tonfolge |
