# ihka25_2.prg

## General

|  |  |
| --- | --- |
| File | ihka25_2.prg |
| Type | PRG |
| Jobs | 37 |
| Tables | 99 |
| Origin | BMW EI-511 Schmidt |
| Revision | 2.000 |
| Author | Continental S3 Neudecker |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Klimaautomatik 1-zonig, 2-zonig, F25-LCI/F26 |  |  |
| ORIGIN | string | BMW EI-511 Schmidt |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | Continental S3 Neudecker |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.36 |  |  |
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
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
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
| 0x011B | HKR Seuffer Automotive GmbH & Co. KG |
| 0x011C | DMK U.S.A. Inc |
| 0x0120 | Littelfuse |
| 0x0121 | Hyundai MOBIS |
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

### ARG_0XA111

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LIN_DEVICE_ADDRESS | + | - | - | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Adresse LIN-Bus-Teilnehmer. default = 0x20 |

### ARG_0XA114

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQUENZ | + | - | Hz | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | 0.0 | 12.7 | Frequenz der Dosierpumpe in Hertz |
| ZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Dauer der Ansteuerung |

### ARG_0XA115

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEISTUNG | + | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Leistung der Wasserpumpe in Prozent |
| ZEIT | + | + | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Dauer der Ansteuerung |

### ARG_0XA116

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAKTUNG | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Taktung des Umschaltventils |
| ZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Dauer der Ansteuerung |

### ARG_0XD592

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_FBM_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: FBM_1, FBM_2, FBM_3, FBM_4, FBM_5, FBM_6, FBM_7, FBM_8; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Normalbetrieb, 1 = Berührung simulieren |

### ARG_0XD593

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_FBM_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: FBM_1, FBM_2, FBM_3, FBM_4, FBM_5, FBM_6, FBM_7, FBM_8; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SGBD-Autor durchgeführt. |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Normalbetrieb, 1 = Gedrückt simulieren |

### ARG_0XD5A0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_SH_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: SH_L_VORN, SH_R_VORN, SH_L_HINTEN, SH_R_HINTEN; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = NICHT GEDRUECKT, 1 = GEDRUECKT |

### ARG_0XD86E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KLAPPE | 0-n | - | int | - | TAB_KLAPPEN_VORN | - | - | - | - | - | Zu verwendende Text für die Tabelle zur Ansteuerung der Motoren: ENTFROSTUNG, BEL_LI_AUSSEN, BEL_LI_MITTE, BEL_LI, BELUEFTUNG, BEL_RE, BEL_RE_MITTE, BEL_RE_AUSSEN, FUSS_LI, FUSS_GES_LI, FUSS_GES_RE, FUSS_RE, FUSSRAUM, SCHICHT_LI, SCHICHT_RE, SCHICHTUNG, FL_STAU, UMLUFT, FUSS_FOND_LI, FUSS_FOND, FUSS_FOND_RE, SCHICHT_FOND_LI, SCHICHT_FOND_RE, SCHICHT_FOND, TEMP_LUFTMENGE_FOND, KNIE_LI, KNIE_RE. Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument KLAPPE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| KLAPPENOEFFNUNG | % | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Gibt an, wie weit die Klappe geöffnet werden soll: 0 ... 100%,  0%=Geschlossen, 100%=Offen |

### ARG_0XD86F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_TASTEN_KLIMA | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: LV_RE, LV_LI, LV_MITTE, AUTO_RE, AUTO_LI, AUTO_MITTE, GBL_PLUS_RE, GBL_MINUS_RE, GBL_PLUS_LI, GBL_MINUS_LI, GBL_PLUS_MITTE, GBL_MINUS_MITTE, MAX_AC, KLIMA, UML_AUC, ALL, DEFROST, HHS; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = nicht gedrückt, 1 = gedrückt |

### ARG_0XD875

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ORT | 0-n | - | unsigned char | - | TAB_SOLLTEMP | 1.0 | 1.0 | 0.0 | - | - | STOP (Abbruch der Ansteuerung), TEMP_LINKS (Vorgabe Temperatur links), TEMP_RECHTS (Vorgabe Temperatur rechts), TEMP_MITTE (Vorgabe Temperatur mitte) |
| TEMPERATUR | °C | - | unsigned char | - | - | 2.0 | 1.0 | 0.0 | 16.0 | 28.0 | Vorgabe der einzustellenden Temperatur in 0,5-er Schritten: Bereich 16 - 28 |

### ARG_0XD877

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM | % | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Gibt an, auf wieviel Prozent die Gebläseendstufe angesteuert werden soll. |

### ARG_0XD87E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEDS | 0-n | - | int | - | TAB_LED_KLIMA_VORN | - | - | - | - | - | Gibt an, welche LEDs angesteuert werden sollen: ALLE (default), AUTO, MAX_AC |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, ob die LED ein- oder ausgeschaltet werden soll: 0 = AUS, 1 = EIN |

### ARG_0XD89A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MUSTER | 0-n | - | int | - | TAB_BITMUSTER | - | - | - | - | - | Gibt an, welches Bitmuster angesteuert werden soll: BITMUSTER1 bis BITMUSTERn Informationen in der diskreten Wertetabelle |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Bitmuster: 0 = AUS, 1 = EIN |

### ARG_0XD8A0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PTC | 0-n | - | int | - | TAB_PTC_MODUL | - | - | - | - | - | Gibt an, welches PTC-Modul angesteuert werden soll: EINZELNER (default); LINKS; RECHTS |
| SOLLWERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Vorgabe des Sollwertes für die Ansteuerung: 0 ... 100% |

### ARG_0XD8B5

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_TASTEN_AUDIO | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: EIN_AUS, MODE, TP, EJECT, SUCHLAUF_LI, SUCHLAUF_RE; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Normalbetrieb, 1 = Gedrückt simulieren |

### ARG_0XD918

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINLAUFSCHUTZ | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzt den Einlaufschutz für den Klimakompressor: 0 = Einlaufschutz ausschalten 1 = Einlaufschutz einschalten |

### ARG_0XD927

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Ansteuerungen werden nicht beendet 1 = Ansteuerung werden beendet |

### ARG_0XD978

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CURRENT_STEPPER_ADDRESS | - | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Aktuelle Adresse des zu programmierenden Klappenmotors. Default 0x3F |
| NEW_STEPPER_ADDRESS | - | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Neue Adresse des zu programmierenden Klappenmotors. Default 0x3F |
| DIRECTION | 0-n | - | char | - | TAB_LAUFRICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Laufrichtung des zu programmierenden Klappenmotors. 0x00 = Laufrichtung im Uhrzeigersinn für steigenden Schrittzahlen, 0x01 = Laufrichtung gegen Uhrzeigersinn, 0xFF = Laufrichtung gemäß aktueller Programmierung. Default = 0xFF |
| SAFETY_ENABLE | 0-n | - | char | - | TAB_NOTLAUF | 1.0 | 1.0 | 0.0 | - | - | Notlaufaktivierung des zu programmierenden Klappenmotors. 0x00 = Notlauf aktiviert, 0x01 = Notlauf deaktiviert, 0xFF = Notlauf gemäß aktueller Programmierung. Default = 0xFF |
| SAFETY_DIRECTION | 0-n | - | char | - | TAB_NOTLAUF_ENDPOS | - | - | - | - | - | Notlaufendposition des zu programmierenden Klappenmotors. 0x00 = Zu niedrigen Schrittzahlen, 0x01 = Zu hohen Schrittzahlen, 0xFF = Notlaufendposition gemäß aktueller Programmierung. Default = 0xFF |

### ARG_0XD98B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLLPOSITION_ZENTRALANTRIEB | Grad | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 360.0 | Sollwert Kulissenstellung: 0..360 Grad |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

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

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x801291 | 12V Peripherie: Kurzschluss nach Minus | 0 |
| 0xE70C2F | AC-LIN: Standheizung antwortet nicht | 0 |
| 0x8011CF | Audiobedienteil: Alle FBM-Tasten gedrückt | 0 |
| 0x801304 | Audiobedienteil: Kommunikationsfehler | 0 |
| 0x801302 | Audiobedienteil: interner Fehler | 0 |
| 0x80120A | Autoadressierung (LIN): Autoadressierung fehlgeschlagen | 0 |
| 0xE71460 | Botschaft  (0x3E6) SU_SW_DRDY_2, FA: AVL_MOD_SW_DRDY_INTR: ungültiges Signal | 1 |
| 0xE71413 | Botschaft (0x0A5, Drehmoment Kurbelwelle): Ausfall | 1 |
| 0xE71404 | Botschaft (0x12F, Klemmen): Ausfall | 1 |
| 0xE71414 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xE71416 | Botschaft (0x1B9, Wärmemanagement Motorsteuerung): Ausfall | 1 |
| 0xE71424 | Botschaft (0x1FE, Crash): Ausfall | 1 |
| 0xE71401 | Botschaft (0x202, Dimmung): Ausfall | 1 |
| 0xE7144C | Botschaft (0x226, Regensensor-Wischergeschwindigkeit): Ausfall | 1 |
| 0xE71408 | Botschaft (0x22A, Status BFS): Ausfall | 1 |
| 0xE7140A | Botschaft (0x232, Status FAS): Ausfall | 1 |
| 0xE71449 | Botschaft (0x23A, Status Funkschluessel): Ausfall | 1 |
| 0xE71457 | Botschaft (0x2A6, Bedienung Wischertaster): Ausfall | 1 |
| 0xE71400 | Botschaft (0x2CA, Außentemperatur): Ausfall | 1 |
| 0xE71411 | Botschaft (0x2CF, Status Zusatzwasserpumpe): Ausfall | 1 |
| 0xE7140E | Botschaft (0x2D0, Status Sensor AUC): Ausfall | 1 |
| 0xE7140B | Botschaft (0x2D1, Status Beschlag Scheibe V): Ausfall | 1 |
| 0xE71409 | Botschaft (0x2D2, Status Druck Kältekreislauf): Ausfall | 1 |
| 0xE7140D | Botschaft (0x2D3, Status Schichtung Fond): Ausfall | 1 |
| 0xE71410 | Botschaft (0x2D6, Status Ventil Klimakompressor): Ausfall | 1 |
| 0xE7140C | Botschaft (0x2F7, Einheiten): Ausfall | 1 |
| 0xE71450 | Botschaft (0x2FC, ZV und Klappenzustand): Ausfall | 1 |
| 0xE71455 | Botschaft (0x314, Status Fahrlicht): Ausfall | 1 |
| 0xE7141F | Botschaft (0x328, Relativzeit): Ausfall | 1 |
| 0xE71462 | Botschaft (0x330) KILOMETERSTAND, FA: ST_FLLV_FUTA_SPAR: ungültiges Signal | 1 |
| 0xE71403 | Botschaft (0x330, KilometerstandReichweite): Ausfall | 1 |
| 0xE7140F | Botschaft (0x380, Fahrgestellnummer): Ausfall | 1 |
| 0xE71405 | Botschaft (0x393, LCD Helligkeit Regelung): Ausfall | 1 |
| 0xE71439 | Botschaft (0x3A0, Fahrzeugzustand): Ausfall | 1 |
| 0xE71406 | Botschaft (0x3B3, Powermanagement Verbrauchersteuerung): Ausfall | 1 |
| 0xE71422 | Botschaft (0x3B5, Status Wasserventil): Ausfall | 1 |
| 0xE7144F | Botschaft (0x3BE, Nachlaufzeit Stromversorgung): Ausfall | 1 |
| 0xE71407 | Botschaft (0x3D3, Status Solarsensor): Ausfall | 1 |
| 0xE71459 | Botschaft (0x3E6) SU_SW_DRDY_2, FA: Timeout | 1 |
| 0xE71402 | Botschaft (0x3F9, Daten Antriebsstrang 2): Ausfall | 1 |
| 0xE71415 | Botschaft (0x3FB, Daten Antriebsstrang 1): Ausfall | 1 |
| 0x801214 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x801215 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x801213 | Codierung: Signatur für Daten ungültig | 0 |
| 0x801211 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x801212 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0x02FF78 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0xE70BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0x8011C9 | Eject-Taste: Taste klemmt oder länger als x Sekunden betätigt | 0 |
| 0x027800 | Energiesparmode aktiv | 0 |
| 0x8011C1 | FBM-Taste 1: Taste klemmt oder länger als x Sekunden betätigt | 0 |
| 0x8011C2 | FBM-Taste 2: Taste klemmt oder länger als x Sekunden betätigt | 0 |
| 0x8011C3 | FBM-Taste 3: Taste klemmt oder länger als x Sekunden betätigt | 0 |
| 0x8011C4 | FBM-Taste 4: Taste klemmt oder länger als x Sekunden betätigt | 0 |
| 0x8011C5 | FBM-Taste 5: Taste klemmt oder länger als x Sekunden betätigt | 0 |
| 0x8011C6 | FBM-Taste 6: Taste klemmt oder länger als x Sekunden betätigt | 0 |
| 0x8011C7 | FBM-Taste 7: Taste klemmt oder länger als x Sekunden betätigt | 0 |
| 0x8011C8 | FBM-Taste 8: Taste klemmt oder länger als x Sekunden betätigt | 0 |
| 0x8011B6 | Fühler Belüftung: Kurzschluss nach Minus | 0 |
| 0x8011B5 | Fühler Belüftung: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8012B8 | Fühler Fussraum: Kurzschluss nach Minus | 0 |
| 0x8012B7 | Fühler Fussraum: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011AE | Fühler Innentemperatur: Kurzschluss nach Minus | 0 |
| 0x8011AD | Fühler Innentemperatur: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x80120C | Interner Steuergerätefehler | 0 |
| 0xE70414 | K-CAN Control Module Bus OFF | 0 |
| 0xE7040B | K-CAN Physikalischer Busfehler | 0 |
| 0x80118C | Kompressor: Abschaltung wegen  Unterdruck im Kältemittelkreislauf | 0 |
| 0x80118D | Kompressor: Abschaltung wegen fehlender DME-Freigabe | 1 |
| 0x80118A | Kompressor: Abschaltung wegen fehlender Randbedingungen | 1 |
| 0x80118B | Kompressor: Abschaltung wegen Überdruck im Kältemittelkreislauf | 0 |
| 0xE70C2C | LIN-Bus: Audiobedienteil: antwortet nicht | 1 |
| 0xE70C1F | LIN-Bus: Motor Belüftung: antwortet nicht | 1 |
| 0xE70C1E | LIN-Bus: Motor Entfrostung: antwortet nicht | 1 |
| 0xE70C1A | LIN-Bus: Motor Fondbelüftungsklappe: antwortet nicht | 1 |
| 0xE70C2B | LIN-Bus: Motor FrischluftStaudruck: antwortet nicht | 1 |
| 0xE70C23 | LIN-Bus: Motor Fussraum: antwortet nicht | 1 |
| 0xE70C1D | LIN-Bus: Motor Mischluft links: antwortet nicht | 1 |
| 0xE70C1C | LIN-Bus: Motor Mischluft rechts: antwortet nicht | 1 |
| 0xE70C19 | LIN-Bus: Motor Mischluft: antwortet nicht | 1 |
| 0xE70C27 | LIN-Bus: Motor Schichtung: antwortet nicht | 1 |
| 0xE70C1B | LIN-Bus: Motor Zentralantrieb: antwortet nicht | 1 |
| 0xE70C2E | LIN-Bus: PTC-Modul: antwortet nicht | 1 |
| 0x801300 | Lautstärkeregler defekt | 0 |
| 0x8011CA | MODE-Taste: Taste klemmt oder länger als x Sekunden betätigt | 0 |
| 0x8012A2 | Mikroschalter Zentralantrieb: Unplausible Nockenerkennung | 0 |
| 0x8012A1 | Mikroschalter Zentralantrieb: Unplausibler Zustand - dauerhaft geschlossen | 0 |
| 0x8012A0 | Mikroschalter Zentralantrieb: Unplausibler Zustand - dauerhaft geöffnet | 0 |
| 0x801185 | Motor Belüftung: Blockierung | 0 |
| 0x801183 | Motor Belüftung: Intitialisierungsfehler | 0 |
| 0x801184 | Motor Belüftung: interner Motorfehler | 0 |
| 0x801182 | Motor Entfrostung: Blockierung | 0 |
| 0x801180 | Motor Entfrostung: Intitialisierungsfehler | 0 |
| 0x801181 | Motor Entfrostung: interner Motorfehler | 0 |
| 0x8011A9 | Motor Frischluft/Staudruck: Blockierung | 0 |
| 0x8011A7 | Motor Frischluft/Staudruck: Intitialisierungsfehler | 0 |
| 0x8011A8 | Motor Frischluft/Staudruck: interner Motorfehler | 0 |
| 0x801191 | Motor Fussraum: Blockierung | 0 |
| 0x80118F | Motor Fussraum: Intitialisierungsfehler | 0 |
| 0x801190 | Motor Fussraum: interner Motorfehler | 0 |
| 0x8012C3 | Motor Mischluft links: Blockierung | 0 |
| 0x8012C1 | Motor Mischluft links: Intitialisierungsfehler | 0 |
| 0x8012C2 | Motor Mischluft links: interner Motorfehler | 0 |
| 0x8012C6 | Motor Mischluft rechts: Blockierung | 0 |
| 0x8012C4 | Motor Mischluft rechts: Intitialisierungsfehler | 0 |
| 0x8012C5 | Motor Mischluft rechts: interner Motorfehler | 0 |
| 0x8012CF | Motor Mischluft: Blockierung | 0 |
| 0x8012CD | Motor Mischluft: Intitialisierungsfehler | 0 |
| 0x8012CE | Motor Mischluft: interner Motorfehler | 0 |
| 0x80119D | Motor Schichtung vorn: Blockierung | 0 |
| 0x80119B | Motor Schichtung vorn: Intitialisierungsfehler | 0 |
| 0x80119C | Motor Schichtung vorn: interner Motorfehler | 0 |
| 0x8012CC | Motor Temperatur/Luftmenge hinten links und rechts: Blockierung | 0 |
| 0x8012CA | Motor Temperatur/Luftmenge hinten links und rechts: Intitialisierungsfehler | 0 |
| 0x8012CB | Motor Temperatur/Luftmenge hinten links und rechts: interner Motorfehler | 0 |
| 0x8012C9 | Motor Zentralantrieb: Blockierung | 0 |
| 0x8012C7 | Motor Zentralantrieb: Intitialisierungsfehler | 0 |
| 0x8012C8 | Motor Zentralantrieb: interner Motorfehler | 0 |
| 0x8011CE | ON/OFF-Taste: Taste klemmt oder länger als x Sekunden betätigt | 0 |
| 0x8011F6 | PTC-Modul: Kurzschluss oder Unterbrechung im Heizstrang | 0 |
| 0x8011F9 | PTC-Modul: Reduzierung Heizleistung wegen Powermanagement | 1 |
| 0x8011FA | PTC-Modul: Unter- oder Überspannung | 0 |
| 0x8011F8 | PTC-Modul: Übertemperatur | 1 |
| 0x8011A0 | Powermanagement: Reduzierung Gebläseleistung | 1 |
| 0x8011A1 | Powermanagement: Reduzierung oder Abschaltung der heizbaren Heckscheibe | 1 |
| 0x801370 | Reserviert aus IHKA25 | 1 |
| 0x801371 | Reserviert aus IHKA25 | 1 |
| 0x801372 | Reserviert aus IHKA25 | 1 |
| 0x801373 | Reserviert aus IHKA25 | 1 |
| 0x801374 | Reserviert aus IHKA25 | 1 |
| 0x801375 | Reserviert aus IHKA25 | 1 |
| 0x801376 | Reserviert aus IHKA25 | 1 |
| 0x8011BA | Schichtungspotentiometer: Kurzschluss nach Minus | 0 |
| 0x8011B9 | Schichtungspotentiometer: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801290 | Sensorversorgungsspannung: Kurzschluss gegen Minus | 0 |
| 0xE71431 | Signal (0x0A5) ungültig empfangen: Ist_Drehzahl_Motor_Kurbelwelle | 1 |
| 0xE71412 | Signal (0x12F) ungültig empfangen: Status_Fahrzeug_Zustand | 1 |
| 0xE7141B | Signal (0x12F) ungültig empfangen: Status_Klemme | 1 |
| 0xE71432 | Signal (0x1A1) ungültig empfangen: Geschwindigkeit_Fahrzeug_Schwerpunkt | 1 |
| 0xE71438 | Signal (0x1B9) ungültig empfangen: Begrenzung_Drehmoment_Kurbelwelle_Klimakompressor | 1 |
| 0xE71446 | Signal (0x1FE) ungültig empfangen: Steuerung_Crash_Standheizung | 1 |
| 0xE71418 | Signal (0x202) ungültig empfangen: Steuerung_Beleuchtung_Schalter | 1 |
| 0xE7144D | Signal (0x226) ungültig empfangen: Intensität_Regen | 1 |
| 0xE7141E | Signal (0x22A) ungültig empfangen: Status_Sitzheizung_BF | 1 |
| 0xE71421 | Signal (0x232) ungültig empfangen: Status_Sitzheizung_FA | 1 |
| 0xE71458 | Signal (0x2A6) ungültig empfangen: Bedienung_Wischertaster | 1 |
| 0xE71417 | Signal (0x2CA) ungültig empfangen: Temperatur_Außen | 1 |
| 0xE7142D | Signal (0x2CF) ungültig empfangen: Status_Zusatzwasserpumpe | 1 |
| 0xE71429 | Signal (0x2D0) ungültig empfangen: Daten_Sensor_AUC | 1 |
| 0xE71423 | Signal (0x2D1) ungültig empfangen: Daten_Beschlag_Scheibe_V | 1 |
| 0xE71461 | Signal (0x2D1) ungültig empfangen: Daten_Beschlag_Scheibe_V | 1 |
| 0xE71420 | Signal (0x2D2) ungültig empfangen: Daten_Drucksensor_Kältekreislauf | 1 |
| 0xE71427 | Signal (0x2D3) ungültig empfangen: Daten_Schichtung_Fond_Klima | 1 |
| 0xE7142C | Signal (0x2D6) ungültig empfangen: Status_Klima_Kompressor_Kupplung | 1 |
| 0xE7144E | Signal (0x2F7) ungültig empfangen: Einheit_Temperatur | 1 |
| 0xE71452 | Signal (0x2FC) ungültig empfangen: Status_Zentralverriegelung | 1 |
| 0xE71456 | Signal (0x314) ungültig empfangen: Status_Fahrlicht_Grund | 1 |
| 0xE71444 | Signal (0x328) ungültig empfangen: Zeit_Sekunde_Zähler_Relativ | 1 |
| 0xE71445 | Signal (0x328) ungültig empfangen: Zeit_Tag_Zähler_Absolut | 1 |
| 0xE71443 | Signal (0x330) ungültig empfangen: Reichweite | 1 |
| 0xE71464 | Signal (0x330) ungültig empfangen: Tankfuellstand links | 1 |
| 0xE71465 | Signal (0x330) ungültig empfangen: Tankfuellstand rechts | 1 |
| 0xE71425 | Signal (0x330) ungültig empfangen: Tankfuellstand | 1 |
| 0xE71463 | Signal (0x330) ungültig empfangen: Tankfuellstand | 1 |
| 0xE71442 | Signal (0x330) ungültig empfangen: Wegstrecke_Kilometer | 1 |
| 0xE7144A | Signal (0x380) ungültig empfangen: Nummer_Fahrgestell | 1 |
| 0xE71434 | Signal (0x393) ungültig empfangen: Dämpfung_LCD_Leuchtdichte | 1 |
| 0xE71433 | Signal (0x393) ungültig empfangen: Ziel_LCD_Leuchtdichte | 1 |
| 0xE71453 | Signal (0x3A0) ungültig empfangen: Status_Energie_FZM | 1 |
| 0xE71454 | Signal (0x3A0) ungültig empfangen: Status_Sperre_Fehlerspeicher_FZM | 1 |
| 0xE71437 | Signal (0x3B3) ungültig empfangen: Steuerung_Leistung_Sonderverbraucher | 1 |
| 0xE71435 | Signal (0x3B3) ungültig empfangen: Steuerung_Leistung_Verbraucher | 1 |
| 0xE71436 | Signal (0x3B3) ungültig empfangen: Steuerung_Standverbraucher | 1 |
| 0xE71451 | Signal (0x3BE) ungültig empfangen: Nachlaufzeit_Stromversorgung | 1 |
| 0xE7141C | Signal (0x3D3) ungültig empfangen: Status_Solarsensor_BF | 1 |
| 0xE7141D | Signal (0x3D3) ungültig empfangen: Status_Solarsensor_FA | 1 |
| 0xE71419 | Signal (0x3F9) ungültig empfangen: Status_Antrieb_Fahrzeug | 1 |
| 0xE7141A | Signal (0x3F9) ungültig empfangen: Temperatur_Motor_Antrieb | 1 |
| 0xE71447 | Signal (0x3FB) ungültig empfangen: Luftdruck_Motor_Antrieb | 1 |
| 0xE71448 | Signal (0x3FB) ungültig empfangen: Status_Schubabschaltung_Antrieb | 1 |
| 0x8011CD | Skip-Fwd-Taste: Taste klemmt oder länger als x Sekunden betätigt | 0 |
| 0x8011CC | Skip-Perv-Taste: Taste klemmt oder länger als x Sekunden betätigt | 0 |
| 0x8011D5 | Standheizgerät, Brennluftgebläse: Blockierschutz | 0 |
| 0x8011DB | Standheizgerät, Dosierpumpe: Kurschluß nach Plus oder Unterbrechung | 0 |
| 0x8011DC | Standheizgerät, Dosierpumpe: Kurzschluß nach Masse | 0 |
| 0x8011DA | Standheizgerät, Umschaltventil: Kurzschluß nach Masse | 0 |
| 0x8011D9 | Standheizgerät, Umschaltventil: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011D8 | Standheizgerät, Wasserpumpe: Kurzschluß nach Masse | 0 |
| 0x8011D7 | Standheizgerät, Wasserpumpe: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x80126A | Standheizgerät: Falsches Heizgerät (Kraftstoffvariante) verbaut | 0 |
| 0x8011E7 | Standheizgerät: Flammabbruch - wiederholter Abbruch im Heizzyklus | 0 |
| 0x8011E6 | Standheizgerät: Flammabbruch | 0 |
| 0x8011E8 | Standheizgerät: Flamme - kein Start | 0 |
| 0x8011E2 | Standheizgerät: Heizgerät verriegelt | 0 |
| 0x80126B | Standheizgerät: Interner Fehler (Sensoren, Aktoren, Elektronik) | 0 |
| 0x8011EC | Standheizgerät: LIN-Kommunikation - Bit Error | 1 |
| 0x8011EF | Standheizgerät: LIN-Kommunikation - Signal mit Ungültigkeitssignatur | 1 |
| 0x8011F5 | Standheizgerät: Systembedingte Abschaltung - Tankreserve erreicht | 1 |
| 0x8011F4 | Standheizgerät: Systembedingte Abschaltung - Verbraucherabschaltung | 1 |
| 0x8011E0 | Standheizgerät: Unterspannung erkannt | 1 |
| 0x801269 | Standheizgerät: Unzureichender Kühlmitteldurchfluss  (Heizwasserkreislauf) | 0 |
| 0x8011E1 | Standheizgerät: Überhitzung (Heizgerät verriegelt) | 0 |
| 0x8011F0 | Standheizgerät: Überschreitung der max. Heizzeitvorgabe | 1 |
| 0x8011DF | Standheizgerät: Überspannung erkannt | 1 |
| 0x8011CB | TP, AM/FM, TRF-Taste: Taste klemmt oder länger als x Sekunden betätigt | 0 |
| 0x80120D | Unterspannung erkannt | 1 |
| 0x8011B0 | Verdampfertemperaturfühler: Kurzschluss nach Minus | 0 |
| 0x8011AF | Verdampfertemperaturfühler: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x80120E | Überspannung erkannt | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x6000 | AUSSEN_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x6001 | KUEHLMITTEL_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6003 | TANKINHALT_LINKS | l | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6004 | TANKINHALT_RECHTS | l | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6005 | STANDHEIZUNG_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6006 | BATTERIESPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x780000 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x780001 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x780002 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x780003 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0x780004 | PIA_E_IO_ERROR | 0 |
| 0x780005 | NVM_E_WRITE_FAILED | 0 |
| 0x780006 | NVM_E_READ_FAILED | 0 |
| 0x780007 | NVM_E_CONTROL_FAILED | 0 |
| 0x780008 | NVM_E_ERASE_FAILED | 0 |
| 0x780009 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x78000A | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x78000B | NVM_E_READ_ALL_FAILED | 0 |
| 0x78000C | CAN-L Kurzschluss nach Vcc | 0 |
| 0x78000D | CAN-H Kurzschluss nach Vcc | 0 |
| 0x78000E | CAN-H Unterbrechung | 0 |
| 0x78000F | CAN-H Kurzschluss nach Masse | 0 |
| 0x780010 | CAN-H Kurzschluss nach Vbat | 0 |
| 0x780011 | CAN-L Unterbrechung | 0 |
| 0x780012 | CAN-L Kurzschluss nach Masse | 0 |
| 0x780013 | CAN-L Kurzschluss nach Vbat | 0 |
| 0x780014 | CAN-H Kurzschluss nach CAN-L | 0 |
| 0x8011D0 | Standheizgerät, Glühstift: Kurzschuß nach  Plus oder Unterbrechung | 0 |
| 0x8011D1 | Standheizgerät, Glühstift: Kurzschluß nach Masse | 0 |
| 0x8011D2 | Standheizgerät, Glühstift/Flammwächter: Referenzwiderstand nicht erreicht | 0 |
| 0x8011D3 | Standheizgerät, Brennluftgebläse: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011D4 | Standheizgerät, Brennluftgebläse: Kurzschluß nach Masse | 0 |
| 0x8011DD | Standheizgerät, Temperatursensor: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011DE | Standheizgerät, Temperatursensor: Kurzschluß nach Masse | 0 |
| 0x8011E3 | Standheizgerät: Steuergerät defekt (RAM, ROM, SW) | 0 |
| 0x8011E5 | Standheizgerät, Überhitzungssensor/Temperatursicherung: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x801256 | Standheizgerät, Glühstift/Flammwächter: Fremdlicht (Wendel defekt/unterbrochen) | 0 |
| 0x801265 | Standheizgerät, Flammwächter: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x801266 | Standheizgerät, Flammwächter: Kurzschluß nach Masse | 0 |
| 0x801267 | Standheizgerät, Überhitzungssensor/Temperatursicherung: Kurzschluß nach Masse | 0 |
| 0x801268 | Standheizgerät: Erneute Flammbildung erfolgreich | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x6000 | AUSSEN_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x6001 | KUEHLMITTEL_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6003 | TANKINHALT_LINKS | l | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6004 | TANKINHALT_RECHTS | l | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6005 | STANDHEIZUNG_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6006 | BATTERIESPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0XA111

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REFERENCE_WERT | + | - | - | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Referenznummer Klappenmotors |
| STAT_SUPPLIER_WERT | + | - | - | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Lieferantennummer Klappenmotors |
| STAT_ASIC_WERT | + | - | - | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle ASIC-Nummer Klappenmotors |

### RES_0XA113

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HEIZGERAETEVERRIEGLUNG | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Zustand Heizgeräteverriegelung = 0 = nicht aktiv. Zustand Heizgeräteverriegelung = 1 = aktiv. |

### RES_0XA880

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHZH_TESTLAUF_NR | - | - | + | 0-n | high | unsigned char | - | TAB_SH_TESTLAUF | - | - | - | Ausgabe des Ergebnisses des Testlaufs vom Standheizgerät: siehe Tabelle TAB_SH_TESTLAUF |

### RES_0XD15F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE1_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE2_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE3_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_NR | 0-n | - | int | - | TAB_SH_SL_LED | 1.0 | 1.0 | 0.0 | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD160

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE1_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE2_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE3_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_NR | 0-n | - | int | - | TAB_SH_SL_LED | 1.0 | 1.0 | 0.0 | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD85C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_INNEN_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Errechnete Innentemperatur |
| STAT_TEMP_INNEN_NTC1_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Oberflächentemperatur am NTC1 Innentemperaturfühler |
| STAT_TEMP_INNEN_NTC2_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Umgebungstemperatur am NTC2 Innentemperaturfühler |
| STAT_TEMP_INNEN_SOLAR_WERT | W/m² | - | int | - | - | 1.0 | 1.0 | 0.0 | Solarwert von Innentemperaturfühler |

### RES_0XD866

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_ZUSATZWASSERPUMPE | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |
| STAT_KLIMA_DISPLAY_EINHEIT_NR | 0-n | - | int | - | TAB_TEMP_EINHEIT | 1.0 | 1.0 | 0.0 | 0 = Celsius,  1 = Fahrenheit |
| STAT_KLIMA_VARIANTE_NR | 0-n | - | int | - | TAB_KLIMAVARIANTE | 1.0 | 1.0 | 0.0 | Klimavariante:  0 = 2-zonig 1 = 2,5-zonig 2 = 4-zonig 3 = 1-zonig |
| STAT_VORHANDEN_EMOTORWASSERPUMPE | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_KOMPRESSORKUPPLUNG | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_PTC_VORN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_UMWAELZPUMPE | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |

### RES_0XD88E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHRITTMOTOR_BLOCKIERUNG_WERT | Fehler | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler Blockierung Schrittmotor |
| STAT_SCHRITTMOTOR_ANTWORT_FEHLT_WERT | Fehler | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler Antwort Schrittmotor |
| STAT_SCHRITTMOTOR_INTERNER_FEHLER_WERT | Fehler | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler interner Motorfehler |

### RES_0XD89F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SH_VARIANTE_NR | 0-n | high | unsigned char | - | TAB_SH_KRAFTSTOFFART | 1.0 | 1.0 | 0.0 | Ausgabe der Kraftstoffart des Standheizgerätes: 0x01 Benzin  0x02 Diesel  0x04 RME  0xFF ungültig |
| STAT_UMWAELZPUMPE_VORHANDEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob eine Umwälzpumpe direkt am Standheizgerät angschlossen ist: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_UMSCHALTVENTIL_VORHANDEN | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob ein Umschaltventil direkt am Standheizgerät angeschlossen ist: 0 = nicht vorhanden, 1 = vorhanden |

### RES_0XD8B3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SKIP_LINKS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status Skip-Taste links: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_SKIP_RECHTS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status Skip-Taste rechts: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |

### RES_0XD8CC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHZH_FUNKTIONSZUSTANDS_NR | 0-n | high | unsigned char | - | TAB_SH_FUNKTIONSZUSTAND | - | - | - | Funktionszustands des Standheizgerätes: siehe Tabelle TAB_SH_FUNKTIONSZUSTAND |
| STAT_WIDERSTAND_GLUEHSTIFT_WERT | mOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Widerstand Glühstift: 0xFFFF = Signal ungültig |
| STAT_BETRIEBSSPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 10000.0 | 0.0 | Betriebsspannung: 0xFF = Signal ungültig |
| STAT_WASSERTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Wassertemperatur: 0xFE = Fehler 0xFF = Signal ungültig |
| STAT_PWM_GLUEHSTIFT_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | PWM Glühstift: 0xFE = Fehler 0xFF = Signal ungültig |
| STAT_FREQUENZ_DOSIERPUMPE_WERT | Hz | high | unsigned char | - | - | 0.05 | 1.0 | 0.0 | Frequenz Dosierpumpe: 0xFE = Fehler 0xFF = Signal ungültig |
| STAT_DREHZAHL_BRENNLUFTGEBLAESE_WERT | 1/min | high | unsigned char | - | - | 100.0 | 1.0 | 0.0 | Drehzahl Brennluftgebläse: 0xFE = Fehler 0xFF = Signal ungültig |
| STAT_SHZH_BETRIEBSZUSTAND_NR | 0-n | high | unsigned char | - | TAB_SH_BETRIEBSZUSTAND | - | - | - | Betriebszustände Standheizgerät: siehe Tabelle TAB_SH_BETRIEBSZUSTAND |
| STAT_WASSERPUMPE_WERT | % | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Falls die Pumpe an der Standheizung angebracht ist, wird der aktuelle Zustand der Wasserpumpe angezeigt. 0 % = Pumpe ausgeschaltet ... 100 % = Pumpe eingeschaltet (maximal) 130 % =  nicht verbaut  140 % = Fehler 150 % = Signal ungültig |
| STAT_UMSCHALTVENTIL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hierin ist der aktuelle Zustand des Umschaltventils (Magnetventils) ablesbar. Dies ist jedoch nur möglich, falls ein Magnetventil an der Standheizung angebracht und codiert ist. Falls das Ventil nicht an der SHZH verbaut ist, wird  nicht verbaut  gemeldet. 0 %: Grosser Kreislauf 100 %: Kleiner Kreislauf (Standheizbetrieb) 253 %:  nicht verbaut  254 %: Fehler 255 %: Signal ungültig |
| STAT_HEIZLEISTUNG_WERT | % | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Status der Heizleistung des Heizgeräts.  0 %: Heizung aus ... 100 %: Heizung ein (maximum) 140 %: Fehler 150 %: Signal ungültig |

### RES_0XD918

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINLAUFSCHUTZ_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status Einlaufschutz: 0 = Einlaufschutz abgeschlossen 1 = Einlaufschutz noch gesetzt |

### RES_0XD935

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_PRG_GEBL_AUTO_LI_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Automatikprogramm-Gebläse: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_GEBL_AUTO_RE_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Automatikprogramm-Gebläse: 0 = AUS, 1 = EIN |

### RES_0XD941

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_DEFROST_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_DEFROST_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert der Klappenstellung: 0...100 |

### RES_0XD942

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_BELUEFTUNG_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0..100% (127 = gelesener Wert ungültig, 255=Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_BELUEFTUNG_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert der Klappenstellung: 0 ... 100 % |

### RES_0XD947

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_FUSSRAUM_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_FUSSRAUM_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD949

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_SCHICHTUNG_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_SCHICHTUNG_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD94C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_FRISCHLUFT_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_FRISCHLUFT_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD950

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_TEMP_LUFT_FOND_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_TEMP_LUFT_FOND_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert der Klappenstellung: 0...100 |

### RES_0XD953

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERLAUF_NR | 0-n | - | int | - | TAB_STATUS_KALIBRIERLAUF | 1.0 | 1.0 | 0.0 | 0 = in diesem Klemmenzyklus noch nicht gestartet, 1 = Kalibrierlauf läuft gerade, 2 = Kalibrierlauf abgeschlossen |
| STAT_KALIBRIERLAUF_ERGEBNIS | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0 = Kalibrierlauf abgeschlossen NIO, 1 = Kalibierlauf abgeschlossen IO und Daten gespeichert; Das Ergebnis bezieht sich auf den zuletzt durchgeführten Kalibrierlauf. Das Ergebnis darf nur im Anschluss eines vollständig durchlaufenen Kalibrierlaufs abgespeichert werden. |
| STAT_MOTOR_1_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_2_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_3_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_4_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_5_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_6_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_7_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_8_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_9_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_10_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_11_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_12_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_13_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_14_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_15_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_16_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_17_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_18_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_19_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_20_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |

### RES_0XD95B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_VORN_LV_OBEN_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_VORN_LV_MITTE_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_VORN_LV_UNTEN_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |

### RES_0XD95F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WIPPE_VORN_PLUS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |
| STAT_WIPPE_VORN_MINUS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |

### RES_0XD962

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_SOLARSENSOR_LINKS_WERT | W/m² | - | int | - | - | 1.0 | 1.0 | 0.0 | Solarsensor |
| STAT_BUS_IN_SOLARSENSOR_RECHTS_WERT | W/m² | - | int | - | - | 1.0 | 1.0 | 0.0 | Solarsensor |

### RES_0XD972

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_VORN_LV_OBEN_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |
| STAT_TASTE_VORN_LV_MITTE_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |
| STAT_TASTE_VORN_LV_UNTEN_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |

### RES_0XD977

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORNE_SOLLTEMP_LINKS_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ausgabe der eingestellten Sollwert-Temperatur links. |
| STAT_KLIMA_VORNE_SOLLTEMP_RECHTS_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ausgabe der eingestellten Sollwert-Temperatur rechts. |

### RES_0XD97B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLAVE1_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 1 |
| STAT_SLAVE2_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 2 |
| STAT_SLAVE3_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 3 |
| STAT_SLAVE4_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 4 |
| STAT_SLAVE5_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 5 |
| STAT_SLAVE6_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 6 |
| STAT_SLAVE7_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 7 |
| STAT_SLAVE8_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 8 |
| STAT_SLAVE9_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 9 |
| STAT_SLAVE10_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 10 |
| STAT_SLAVE11_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 11 |
| STAT_SLAVE12_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 12 |
| STAT_SLAVE13_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 13 |
| STAT_SLAVE14_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 14 |
| STAT_SLAVE15_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 15 |
| STAT_SLAVE16_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 16 |
| STAT_MOT_0X3F_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Verfügbarkeit des Slaves mit der Adresse 0x3F (63 dez): 0x00 = Slave mit Adresse 0x3F verbaut, 0xFF = Slave mit Adresse 0x3F nicht verbaut |
| STAT_FEHLERSTATUS_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | 0 = kein Fehler, 255 = unbekannter Fehler |

### RES_0XD980

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSTELLBEREICH_KLAPPE1_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE2_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE3_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE4_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE5_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE6_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE7_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE8_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE9_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE10_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE11_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE12_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE13_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE14_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE15_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE16_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE17_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE18_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE19_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE20_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |

### RES_0XD985

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLAVE1_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 1 |
| STAT_SLAVE2_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 2 |
| STAT_SLAVE3_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 3 |
| STAT_SLAVE4_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 4 |
| STAT_SLAVE5_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 5 |
| STAT_SLAVE6_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 6 |
| STAT_SLAVE7_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 7 |
| STAT_SLAVE8_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 8 |
| STAT_SLAVE9_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 9 |
| STAT_SLAVE10_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 10 |
| STAT_SLAVE11_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 11 |
| STAT_SLAVE12_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 12 |
| STAT_SLAVE13_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 13 |
| STAT_SLAVE14_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 14 |
| STAT_SLAVE15_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 15 |
| STAT_SLAVE16_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Adresse Slave 16 |
| STAT_MOT_0X3F_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Verfügbarkeit des Slaves mit der Adresse 0x3F (63 dez): 0x00 = Slave mit Adresse 0x3F verbaut, 0xFF = Slave mit Adresse 0x3F nicht verbaut |
| STAT_FEHLERSTATUS_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | 0 = kein Fehler, 255 = unbekannter Fehler |

### RES_0XD98A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_MISCHLUFT_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) 0 = Kalt 100 = Warm |
| STAT_KLP_SOLLPOS_MISCHLUFT_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100: 0 = Kalt 100 = Warm |

### RES_0XD98B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_ZENTRALANTRIEB_WERT | Grad | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Istwert Kulissenstellung: 0...360 Grad 0 = 100% Defrost 120 = 100% Belüftung 242 = 100% Fussraum |
| STAT_KLP_SOLLPOS_ZENTRALANTRIEB_WERT | Grad | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Kulissenstellung: 0...360 Grad 0 = 100% Defrost 120 = 100% Belüftung 242 = 100% Fussraum |

### RES_0XD98C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_MISCHLUFT_LINKS_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) 0 = Kalt 100 = Warm |
| STAT_KLP_SOLLPOS_MISCHLUFT_LINKS_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 0 = Kalt 100 = Warm |

### RES_0XD98E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_MISCHLUFT_RECHTS_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) 0 = Kalt 100 = Warm |
| STAT_KLP_SOLLPOS_MISCHLUFT_RECHTS_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 0 = Kalt 100 = Warm |

### RES_0XD999

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORNE_WAHLRAD_SOLLTEMP_LINKS_WERT | % | - | char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Drehbewegung am Wählrad links. |
| STAT_KLIMA_VORNE_WAHLRAD_SOLLTEMP_RECHTS_WERT | % | - | char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Drehbewegung am Wählrad rechts. |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KLAPPENMOTOR_IDENT | 0xA111 | - | Auslesen der herstellerspezifischen Daten eines  Klappenmotors. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA111 | RES_0xA111 |
| SHZH_STEUERGERAET_RESET | 0xA112 | - | Ausführen eines Resets im Steuergerät des Standheizgerätes. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SHZH_VERRIEGELUNG | 0xA113 | - | Setzen- und Rücksetzen der Produktions- und Überhitzungsverriegeung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA113 |
| SHZH_KT_DOSIERPUMPE | 0xA114 | - | Ansteuerung der Dosierpumpe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA114 | - |
| SHZH_KT_WASSERPUMPE | 0xA115 | - | Ansteuerung der Wasserpumpe am Standheizgerät | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA115 | - |
| SHZH_KT_UMSCHALTVENTIL | 0xA116 | - | Ansteuerung des Umschaltventils | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA116 | - |
| SHZH_PRUEFBETRIEB | 0xA119 | - | Prüfbetrieb Standheizung. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SHZH_NORMALBETRIEB | 0xA11A | - | Normalbetrieb Standheizung. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SHZH_TESTLAUF | 0xA880 | - | Testlauf Standheizgerät. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA880 |
| TASTER_FBM_1_SENS_EIN | 0xD144 | STAT_TASTER_FBM_1_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_2_SENS_EIN | 0xD152 | STAT_TASTER_FBM_2_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_3_SENS_EIN | 0xD153 | STAT_TASTER_FBM_3_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_1_EIN | 0xD155 | STAT_TASTER_FBM_1_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_2_EIN | 0xD156 | STAT_TASTER_FBM_2_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_3_EIN | 0xD157 | STAT_TASTER_FBM_3_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_4_EIN | 0xD158 | STAT_TASTER_FBM_4_EIN | 0 = Taste nicht betätigt; 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_5_EIN | 0xD159 | STAT_TASTER_FBM_5_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_6_EIN | 0xD15A | STAT_TASTER_FBM_6_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_7_EIN | 0xD15B | STAT_TASTER_FBM_7_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_8_EIN | 0xD15C | STAT_TASTER_FBM_8_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_VORNE_TASTER_LINKS | 0xD15D | STAT_TASTER_SITZHEIZUNG_VORNE_LINKS_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_VORNE_TASTER_RECHTS | 0xD15E | STAT_TASTER_SITZHEIZUNG_VORNE_RECHTS_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_VORNE_LED_RECHTS | 0xD15F | - | Status LED-Anzeige Sitzheizung vorne rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD15F |
| SITZHEIZUNG_VORNE_LED_LINKS | 0xD160 | - | Status LED-Anzeige Sitzheizung vorne links | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD160 |
| TASTER_FBM_4_SENS_EIN | 0xD16D | STAT_TASTER_FBM_4_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_5_SENS_EIN | 0xD16E | STAT_TASTER_FBM_5_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_6_SENS_EIN | 0xD16F | STAT_TASTER_FBM_6_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_7_SENS_EIN | 0xD590 | STAT_TASTER_FBM_7_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_8_SENS_EIN | 0xD591 | STAT_TASTER_FBM_8_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FBM_SENS_TASTEN | 0xD592 | - | FBM-Sensorik | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD592 | - |
| FBM_TASTEN | 0xD593 | - | FBM-Tasten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD593 | - |
| FBM_TASTEN_VORHANDEN_WERT | 0xD599 | STAT_FBM_TASTEN_VORHANDEN_WERT | Gibt aus, wieviele FBM-Tasten verbaut sind: 0 = keine FBM-Tasten verbaut, 1 = 1 Taste verbaut, 2 = 2 Tasten verbaut, N = n Tasten verbaut, 254 = Bedienteil antwortet nicht | Tasten | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_SH_TASTEN | 0xD5A0 | - | Simulation der Betätigung der Tasten für die Sitzheizung. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5A0 | - |
| TEMP_INNEN_UNBELUEFTET | 0xD85C | - | Ausgabe Rohwerte und gefilterter Wert vom unbelüfteten Innentemperatursensor (solarkompensiert). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD85C |
| BUS_IN_POTI_SCHICHTUNG_FOND_WERT | 0xD860 | STAT_BUS_IN_POTI_SCHICHTUNG_FOND_WERT | Potentiometer Schichtung Fond:  0 ... 100% | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KONFIGURATION_KLIMA_VORN | 0xD866 | - | Konfiguration der Klimaanlage vorn | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD866 |
| STEUERN_KLAPPENMOTOR_VORN | 0xD86E | - | Aufruf für Ansteuerung der einzelnen Schrittmotore auf beliebige Öffnung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD86E | - |
| KLIMA_TASTEN_VORN | 0xD86F | - | Tasten Klimabedienfeld | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD86F | - |
| STEUERN_BEDIENUNG_TEMP | 0xD875 | - | Simuliert die Einstellung der Temperatur am Klimabedienteil. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD875 | - |
| STEUERN_GEBLAESE | 0xD877 | - | Ansteuern der Gebläseendstufe. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD877 | - |
| STEUERN_LEDS_TESTEN | 0xD87E | - | Aufruf zur Testansteuerung von LED-Gruppen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD87E | - |
| STEUERN_MOTOREN_KALIBRIERLAUF | 0xD88D | - | Kalibrierung der Schrittmotore. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| SCHRITTMOTOR_FEHLER | 0xD88E | - | Abfrage der Schrittmotor-Fehler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD88E |
| STEUERN_SELBSTTEST_SCHRITTMOTOREN | 0xD88F | - | Aufruf startet den Selbsttest der Schrittmotoren. Alle Motore werden auf 50% angefahren und anschließend geprüft, ob die Position ereicht worden ist. Das Ergebnis kann mit dem Service SELBSTTEST_SCHRITTMOTOREN abgefragt werden. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| STEUERN_DISPLAY_TESTEN | 0xD89A | - | Steuert das Display mit Bitmustern an. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD89A | - |
| SHZH_KONFIGURATION | 0xD89F | - | Ausgabe der Konfiguration des Standheizgerätes. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD89F |
| STEUERN_PTC_MODULE_VORN | 0xD8A0 | - | Job zur Aktivierung des PTC-Moduls vorne ohne die erforderlichen Randbedingungen, wie z.B. Energiemanagement, Energieverteilungsalgoritmus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8A0 | - |
| VORHANDEN_FONDSCHICHTUNG | 0xD8AA | STAT_VORHANDEN_FONDSCHICHTUNGSPOTI | 0=Fondschichtungspotentiometer nicht vorhanden 1=Fondschichtungspotentiometer vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOLARSENSOR_VORHANDEN | 0xD8AB | STAT_VORHANDEN_SOLARSENSOR_EIN | Solarsensor: 0 = nicht vorhanden / codiert; 1 = vorhanden / codiert | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUC_SENSOR_VORHANDEN | 0xD8AC | STAT_VORHANDEN_AUC_SENSOR | AUC-Sensor: 0 = nicht vorhanden; 1 = vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUDIO_TASTE_MODE_EIN | 0xD8B0 | STAT_TASTE_MODE_EIN | Ausgabe Status MODE-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUDIO_TASTE_EJECT_EIN | 0xD8B1 | STAT_TASTE_EJECT_EIN | Ausgabe Status EJECT-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUDIO_TASTE_TP_AM_FM_TRF_EIN | 0xD8B2 | STAT_TASTE_TP_AM_FM_TRF_EIN | Ausgabe Status TP/AM/FM/TRF-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUDIO_SKIP_EIN | 0xD8B3 | - | Auflisten Status Skip-Tasten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8B3 |
| AUDIO_TASTE_ON_OFF_EIN | 0xD8B4 | STAT_TASTE_ON_OFF_EIN | Ausgabe Status ON/OFF-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUDIO_TASTEN | 0xD8B5 | - | Tasten Audiobedienfeld | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8B5 | - |
| SHZH_STATUS | 0xD8CC | - | Status Standheizgerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8CC |
| SOLLWERT_PTC_MODUL_VORN | 0xD902 | STAT_SOLLWERT_PTC_WERT | Sollwert in Prozent 0 - 100 % | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_OUT_ZUSATZWASSERPUMPE_EIN | 0xD904 | STAT_BUS_OUT_ZUSATZWASSERPUMPE_EIN | Zusatzwasserpumpenstatus: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TIMER_EINLAUFSCHUTZ | 0xD905 | STAT_TIMER_EINLAUFSCHUTZ_WERT | Restzeit des Einlaufschutzes in Sekunden | s | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_HHS_EIN | 0xD90C | STAT_TASTE_VORN_HHS_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_AUTO_EIN | 0xD90D | STAT_TASTE_VORN_AUTO_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_VORNE_TASTER_VORHANDEN | 0xD90E | STAT_VORHANDEN_SITZHEIZUNG_TASTER_VORNE | 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_KLIMA_AC_EIN | 0xD910 | STAT_TASTE_VORN_KLIMA_AC_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_MAX_AC_EIN | 0xD911 | STAT_TASTE_VORN_MAX_AC_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORHANDEN_STANDHEIZUNG | 0xD912 | STAT_VORHANDEN_STANDHEIZUNG | 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_LUFTVERTEILUNG_EIN | 0xD914 | STAT_TASTE_VORN_LUFTVERTEILUNG_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EINLAUFSCHUTZ_KOMPRESSOR | 0xD918 | - | Ausgabe des Status des Einlaufschutzes für den Klimakompressor oder schreiben des  neuen Status. Erst nach vollständigem Einlauf  wird dieser Status zurückgesetzt. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD918 | RES_0xD918 |
| BUS_OUT_KLIMAKOMPRESSOR_PWM_WERT | 0xD91D | STAT_BUS_OUT_KLIMAKOMPRESSOR_PWM_WERT | Signal für die Anforderung der Kompressorleistung in PWM | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_KLIMA_EIN | 0xD91E | STAT_LED_VORN_KLIMA_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_UMLUFT_EIN | 0xD91F | STAT_LED_VORN_UMLUFT_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_HHS_EIN | 0xD920 | STAT_LED_VORN_HHS_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_DEFROST_EIN | 0xD921 | STAT_LED_VORN_DEFROST_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_AUTO_MITTE_EIN | 0xD922 | STAT_LED_VORN_AUTO_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_MAX_AC_EIN | 0xD924 | STAT_LED_VORN_MAX_AC_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_AUC_EIN | 0xD925 | STAT_LED_VORN_AUC_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_ALL_EIN | 0xD926 | STAT_LED_VORN_ALL_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_DIAGNOSE_ENDE | 0xD927 | - | Beendet alle mit Diagnose gestarteten Ansteuerungen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD927 | - |
| KLIMA_VORN_KLAPPEN_PRG_MITTE | 0xD928 | STAT_KLIMA_VORN_KLAPPEN_PRG_MITTE | Automatik-Klappenprogramm: 0 = AUS = Manuelle Einstellung, 1 = EIN = AUTO eingeschaltet | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_GEBLAESESTUFE_ANZ | 0xD92B | STAT_KLIMA_VORN_GEBLAESESTUFE_ANZ_WERT | Gibt die Anzeige der aktuellen Gebläsestufe aus. | Stufe | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_OFF_EIN | 0xD92C | STAT_KLIMA_VORN_OFF_EIN | Klima: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_DEFROST_EIN | 0xD92D | STAT_KLIMA_VORN_PRG_DEFROST_EIN | Defrost-Programm: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_MAX_AC_EIN | 0xD92E | STAT_KLIMA_VORN_PRG_MAX_AC_EIN | Programm maximal Kühlen: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_ALL_EIN | 0xD92F | STAT_TASTE_VORN_ALL_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_AUC_EIN | 0xD930 | STAT_KLIMA_VORN_PRG_AUC_EIN | Automatische Umluft Control: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_UMLUFT_EIN | 0xD931 | STAT_KLIMA_VORN_PRG_UMLUFT_EIN | Programm Umluft: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_HHS_EIN | 0xD932 | STAT_KLIMA_VORN_PRG_HHS_EIN | Heckscheibenheizung: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_REST_EIN | 0xD933 | STAT_KLIMA_VORN_PRG_REST_EIN | Programm Restwärme: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_AC_EIN | 0xD934 | STAT_KLIMA_VORN_PRG_AC_EIN | Klimaprogramm: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_GEBL_AUTO_LI_RE_EIN | 0xD935 | - | Ausgabe, ob die Gebläsesteuerung auf Automatikprogramm eingestellt ist. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD935 |
| KLIMA_VORN_PRG_KLIMASTIL_MITTE | 0xD936 | STAT_KLIMA_VORN_PRG_KLIMASTIL_MITTE_WERT | Ausgabe der Soft-Intense-Einstellung Mitte in Stufen: 1 - 7 | Stufe | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_STANDLUEFTEN_EIN | 0xD939 | STAT_KLIMA_VORN_PRG_STANDLUEFTEN_EIN | Programm Standlüften: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_DEFROST_EIN | 0xD93A | STAT_TASTE_VORN_DEFROST_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_UMLUFT_AUC_EIN | 0xD93C | STAT_TASTE_VORN_UMLUFT_AUC_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_REST_EIN | 0xD93D | STAT_LED_REST_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_GEBLAESELEISTUNG_WERT | 0xD93F | STAT_KLIMA_VORN_GEBLAESELEISTUNG_WERT | Gebläseleistung der Gebläseendstufe IHKA in %. | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_REST_EIN | 0xD940 | STAT_TASTE_REST_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLP_POS_DEFROST_WERT | 0xD941 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD941 |
| KLP_POS_BELUEFTUNG_WERT | 0xD942 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD942 |
| KLP_POS_FUSSRAUM_WERT | 0xD947 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD947 |
| KLP_POS_SCHICHTUNG_WERT | 0xD949 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD949 |
| KLP_POS_FRISCHLUFT_WERT | 0xD94C | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94C |
| KLP_POS_TEMP_LUFT_FOND_WERT | 0xD950 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD950 |
| MOTOR_KALIBRIERLAUF | 0xD953 | - | Abfrage des aktuellen Status des Kalibrierlaufs der Klappenmotoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD953 |
| SELBSTTEST_SCHRITTMOTORE | 0xD954 | STAT_SELBSTTEST_SCHRITTMOTORE_NR | Status Schrittmotorenselbsttests: 0 = nicht gestartet/nicht angefordert, 1 = Test läuft gerade, 2 = Test erfolgreich abgeschlossen, 3 = Test nicht erfolgreich abgeschlossen | 0-n | - | - | int | TAB_STATUS_SELBSTTEST | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_LUFTVERTEILUNG | 0xD95B | - | Ausgabe des Status der LEDs an den 3 Tasten der Luftverteilung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD95B |
| TEMP_VERDAMPFER_WERT | 0xD95C | STAT_TEMP_VERDAMPFER_WERT | Temperaturfühler | °C | - | - | int | - | 1.0 | 5.0 | -10.0 | - | 22 | - | - |
| WIPPE_VORN_PLUS_MINUS | 0xD95F | - | Auflisten des Status der Tasten der Gebläsewippe am Klimabedienteil. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD95F |
| BUS_IN_KOMPRESSORFREIGABE | 0xD960 | STAT_BUS_IN_KOMPRESSORFREIGABE_EIN | Klimakompressorfreigabe von der Motorelektronik: 0 = nicht freigegeben, 1 = Freigabe erteilt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_SOLARSENSOR_WERT | 0xD962 | - | BUS-Signal Solarsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD962 |
| BUS_IN_AUC_SENSOR_WERT | 0xD964 | STAT_BUS_IN_AUC_SENSOR_WERT | Belastungsstufe vom AUC-Sensor | Stufe | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_BESCHLAGSENSOR_WERT | 0xD966 | STAT_BUS_IN_BESCHLAGSENSOR_WERT | PMW-Signal Beschlagssensor | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_KAELTEMITTELDRUCK_WERT | 0xD968 | STAT_BUS_IN_R134A_DRUCK_WERT | Kältemitteldruck für R134A | bar | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TEMP_AUSSEN_WERT | 0xD96B | STAT_BUS_IN_TEMP_AUSSEN_WERT | Außentemperatur | °C | - | - | int | - | 1.0 | 2.0 | -40.0 | - | 22 | - | - |
| BESCHLAGSENSOR_VORHANDEN | 0xD96D | STAT_VORHANDEN_BESCHLAGSENSOR | 0: Beschlagsensor nicht vorhanden / codiert   1: Beschlagsensor vorhanden / codiert | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTEN_VORN_LUFTVERTEILUNG | 0xD972 | - | Auflisten des Status der 3 Tasten für die Luftverteilung  am Klimabedienteil. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD972 |
| KLIMA_TEMPERATUR_SOLLWERT | 0xD977 | - | Ausgabe der eingestellten Sollwert-Temperatur (links und rechts) der Klimaanlage. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD977 |
| STEUERN_EINZELADRESSIERUNG | 0xD978 | - | Adressvergabe an einzelnen Motor. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD978 | - |
| KLIMA_LIN_1_ADRESSEN | 0xD97B | - | Lesen aller ansprechbaren LIN-Adressen des LIN-Bus-System. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD97B |
| STEUERN_RESET_LIN | 0xD97C | - | Rücksetzen des LIN-Bus mit Wegschalten der LIN-Versorgungsspannung. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| KLAPPEN_VERSTELLBEREICH | 0xD980 | - | Auslesen des Verstellbereichs der einzelnen Klappen als Inkremente, die über den Eichlauf ermittelt werden konnten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD980 |
| STEUERN_AUTOADR_KLAPPENMOTOREN | 0xD981 | - | Startet die Autoadressierung zur Vergabe der Motoradressen im System anhand der Reihenfolge der Anschlüsse am Kabelbaum. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| KLIMA_LIN_2_ADRESSEN | 0xD985 | - | Lesen aller ansprechbaren LIN-Adressen des LIN2-Bus-System. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD985 |
| KLIMA_TEMPERATUR_MITTE_SOLLWERT | 0xD988 | STAT_KLIMA_SOLLTEMP_MITTE_WERT | Ausgabe der eingestellten Sollwert-Temperatur | °C | - | - | unsigned char | - | 1.0 | 2.0 | 0.0 | - | 22 | - | - |
| KLIMA_WAHLRAD_GEBLAESE_SOLLWERT | 0xD989 | STAT_KLIMA_WAHLRAD_GEBLAESE_WERT | Ausgabe der Einstellung am Wählrad für das Gebläse. 0 % = AUS 100 % = Maximale Gebläseleistung | % | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLP_POS_MISCHLUFT_WERT | 0xD98A | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD98A |
| KLP_POS_ZENTRALANTRIEB_WERT | 0xD98B | - | Auslesen des Soll- und Ist-Werts des Motors für den Zentralantrieb mit Kulissenscheibe. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD98B | RES_0xD98B |
| KLP_POS_MISCHLUFT_LINKS | 0xD98C | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD98C |
| KLP_POS_MISCHLUFT_RECHTS | 0xD98E | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD98E |
| MIKROSCHALTER_ZENTRALANTRIEB | 0xD98F | STAT_MIKROSCHALTER_ZENTRALANTRIEB_EIN | Ausgabe des Status des Mikroschalters am Zentralantrieb:  0 = AUS, 1 = EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_BELUEFTUNG_WERT | 0xD990 | STAT_TEMP_BELUEFTUNG_WERT | Temperaturfühler Belüftung | °C | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_FUSSRAUM_WERT | 0xD991 | STAT_TEMP_FUSSRAUM_WERT | Temperaturfühler Fussraum | °C | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORHANDEN_AUDIOBEDIENTEIL | 0xD995 | STAT_VORHANDEN_AUDIOBEDIENTEIL | 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| POTI_SCHICHTUNG_MITTE_WERT | 0xD998 | STAT_POTI_SCHICHTUNG_MITTE_WERT | Potentiometer Schichtung Belüftung: 0 ... 100% | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_WAHLRAD_SOLLTEMP_LI_RE | 0xD999 | - | Ausgabe der eingestellten Sollwert-Temperaturen an den Wahlrädern für die Klimaanlage. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD999 |
| KLIMA_VORN_WAHLRAD_SOLLTEMP | 0xD99A | STAT_KLIMA_VORNE_SOLLTEMP_WERT | Ausgabe der Drehbewegung am Wahlrad. | % | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VARIANTE_AUDIOBEDIENTEIL | 0xD9A0 | STAT_VARIANTE_AUDIOBEDIENTEIL | Variante Audiobedienteil 0x00: ohne FBM, TP 0x01: mit FBM, TP 0x02: ohne FBM, FM/AM 0x03: mit FBM, FM/AM | 0-n | - | - | unsigned char | TAB_VARIANTE_AUDIOBEDIENTEIL | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_OUT_KOMPRESSORKUPPLUNG_EIN | 0xD9A1 | STAT_BUS_OUT_KOMPRESSORKUPPLUNG_EIN | Signal für die Anforderung an die Kompressorkupplung 0 = Kupplung offen 1 = Kupplung geschlossen | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30F_WERT | 0xDADB | STAT_SPANNUNG_KLEMME_30F_WERT | Spannungswert am Steuergerät an Klemme 30F (auf eine Nachkommastelle genau) | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| STATUS_KLEMME_R_EIN | 0xDAFD | STAT_STATUS_KLEMME_R_EIN | Status Klemme R im Steuergerät: 0=AUS, 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | Status Klemme 15 im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_KLEMME_50_EIN | 0xDB10 | STAT_STATUS_KLEMME_50_EIN | Status Klemme 50 im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| DIMMUNG_58G_PWM_WERT | 0xDB11 | STAT_DIMMUNG_58G_PWM_WERT | Liefert den PWM-Wert der Dimmung von Klemme 58G:  0% max. Dimmung - 100% max. Helligkeit, 0xFF bedeutet ungültig und 0xFE bedeutet Tag: so keine Information über die Helligkeit! | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |

### TAB_BITMUSTER

| WERT | TEXT |
| --- | --- |
| 0x00 | BITMUSTER_1 |
| 0x01 | BITMUSTER_2 |
| 0x02 | BITMUSTER_3 |
| 0x03 | BITMUSTER_4 |
| 0x04 | BITMUSTER_5 |
| 0x05 | BITMUSTER_6 |

### TAB_FBM_TASTEN

| WERT | TEXT |
| --- | --- |
| 7 | FBM_1 |
| 6 | FBM_2 |
| 5 | FBM_3 |
| 4 | FBM_4 |
| 3 | FBM_5 |
| 2 | FBM_6 |
| 1 | FBM_7 |
| 0 | FBM_8 |

### TAB_KALIB_ERG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kalibrierung NIO |
| 0x0001 | Kalibrierung IO |
| 0x0002 | Klappe nicht verbaut |

### TAB_KLAPPEN_VORN

| WERT | TEXT |
| --- | --- |
| 37 | ENTFROSTUNG |
| 32 | FL_STAU |
| 40 | SCHICHTUNG |
| 36 | FUSSRAUM |
| 35 | BELUEFTUNG |
| 39 | SCHICHTUNG_FOND |
| 33 | MISCH_LI |
| 34 | MISCH_RE |

### TAB_KLIMAVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x0000 | 2-zonig |
| 0x0001 | 2,5-zonig |
| 0x0002 | 4-zonig |
| 0x0003 | 1-zonig |

### TAB_LAUFRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | UHRZEIGERSINN |
| 0x01 | GEGEN_UHRZEIGERSINN |
| 0xFF | DEFAULT |

### TAB_LED_KLIMA_VORN

| WERT | TEXT |
| --- | --- |
| 1 | ALLE |
| 13 | AUTO |
| 15 | MAX_AC |
| 5 | SH_LI_OBEN |
| 6 | SH_LI_MITTE |
| 7 | SH_LI_UNTEN |
| 2 | SH_RE_OBEN |
| 3 | SH_RE_MITTE |
| 4 | SH_RE_UNTEN |
| 8 | LV_OBEN |
| 9 | LV_MITTE |
| 10 | LV_UNTEN |
| 11 | UMLUFT |
| 12 | AUC |
| 14 | KLIMA_AC |
| 16 | ALL |
| 17 | HHS |
| 18 | DEFROST |

### TAB_NOTLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | AKTIVIERT |
| 0x01 | DEAKTIVIERT |
| 0xFF | DEFAULT |

### TAB_NOTLAUF_ENDPOS

| WERT | TEXT |
| --- | --- |
| 0x00 | ZU_NIEDRIGEN_SCHRITTZAHLEN |
| 0x01 | ZU_HOHEN_SCHRITTZAHLEN |
| 0xFF | DEFAULT |

### TAB_PTC_MODUL

| WERT | TEXT |
| --- | --- |
| 0 | EINZELNER |
| 1 | LINKS |
| 2 | RECHTS |

### TAB_SH_BETRIEBSZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS-Bereit |
| 0x01 | AUS-Nachlauf |
| 0x02 | AUS-Störungsnachlauf_Gemeldet |
| 0x03 | AUS-Störungsnachlauf-Quittiert |
| 0x04 | EIN-Start |
| 0x05 | EIN-Regelpause |
| 0x06 | EIN-Heizgerät aktiv |
| 0x08 | AUS-Heizgeräteverriegelung |
| 0x09 | EIN-Nachlauf-Regelpause |
| 0x0F | Signal ungültig |

### TAB_SH_FUNKTIONSZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Ausbrennen |
| 0x01 | Abschaltung |
| 0x02 | Ausbrennen TRS |
| 0x03 | Ausbrennrampe |
| 0x04 | Auszustand |
| 0x05 | Brennbetrieb Teillast |
| 0x06 | Brennbetrieb Volllast |
| 0x07 | Brennstofffördern |
| 0x08 | Brennermotorstart (Losreissen) |
| 0x09 | Brennstoffunterbrechung |
| 0x0A | Diagnosezustand |
| 0x0B | Dosierpumpenunterbrechung |
| 0x0C | EMK-Messung |
| 0x0D | Entprellen |
| 0x0E | EXIT |
| 0x0F | Flammwächterabfrage |
| 0x10 | Flammwächterkühlung |
| 0x11 | Flammwächter Messphase |
| 0x12 | Flammabfrage bei ZUE |
| 0x13 | Gebläseanlauf |
| 0x14 | Glühstiftrampe |
| 0x15 | Heizgeräteverriegelung |
| 0x16 | Initialisierung |
| 0x17 | Kraftstoffblasenüberbrückung |
| 0x18 | Kaltgebläseanlauf |
| 0x19 | Kaltstartanreicherung |
| 0x1A | Kühlung |
| 0x1B | LastwechselTeil-/Volllast |
| 0x1C | Lüften |
| 0x1D | LastwechselVoll-/Teillast |
| 0x1E | NeueInitialisierung |
| 0x1F | Regelbetrieb |
| 0x20 | Regelpause |
| 0x21 | Sanftanlauf |
| 0x22 | Sicherheitszeit |
| 0x23 | Spülen |
| 0x24 | Start |
| 0x25 | Stabilisierung |
| 0x26 | Startrampe |
| 0x27 | Stromlos |
| 0x28 | Störverriegelung |
| 0x29 | Störverriegelung TRS |
| 0x2A | Stabilisierungszeit |
| 0x2B | Übergang Regelbetrieb |
| 0x2C | Entscheidungsknoten |
| 0x2D | Vorfördern |
| 0x2E | Vorglühen |
| 0x2F | Vorglühen Leistungsregelung |
| 0x30 | VerzögerungvorAbregeln |
| 0x31 | Zähgebläseanlauf |
| 0x32 | Zuglühen |
| 0x33 | Zündpause |
| 0x34 | Zündung |
| 0x35 | Zwischenglühen |
| 0x36 | Applikationsüberwachung |
| 0x37 | Heizgeräteverriegelungsabspeicherung |
| 0x38 | Heizgeräteentriegelung |
| 0x39 | Heizleistungsregelung |
| 0x3A | Umwälzpumpenregelung |
| 0x3B | InitialisierungµP |
| 0x3C | Fremdlichtabfrage |
| 0x3D | Vorlauf |
| 0x3E | Vorzündung |
| 0x3F | Flammzündung |
| 0x40 | Flammstabilisierung |
| 0x41 | Brennbetrieb Standheizen |
| 0x42 | Brennbetrieb Zuheizen |
| 0x43 | Brennstörung Standheizen |
| 0x44 | Brennstörung Zuheizen |
| 0x45 | AusNachlauf |
| 0x46 | Regelpause Nachlauf |
| 0x47 | Störnachlauf |
| 0x48 | Zeitlicher Störnachlauf |
| 0x49 | StörverriegelungUmwälzpumpe |
| 0x4A | Regelpause Standheizen |
| 0x4B | Regelpause Zuheizen |
| 0x4C | RegelpauseZuheizenmitUmwälzpumpe |
| 0x4D | Umwälzpumpe ohne Heizfunktion |
| 0x4E | WarteschleifeÜberspannung |
| 0x4F | Fehlerspeicher aktualisieren |
| 0x50 | Warteschleife |
| 0x51 | Komponententest |
| 0x52 | Boostbetrieb |
| 0x53 | Abkühlen |
| 0x54 | Heizgeräteverriegelung permanent |
| 0x55 | Gebläseunterbrechung |
| 0x56 | Brennermotor losreissen |
| 0x57 | Temperaturabfrage |
| 0x58 | Vorlauf Unterspannung |
| 0x59 | Unfallabfrage |
| 0x5A | Störnachlauf Magnetventil |
| 0x5B | Fehlerspeicher aktualisieren Magnetventil |
| 0x5C | Zeitlicher Störnachlauf Magnetventil |
| 0x5D | Startversuch |
| 0x5E | Vorlaufverlängerung |
| 0x5F | Brennbetrieb |
| 0x60 | zeitlicher Störnachlauf bei Unterspannung |
| 0x61 | Fehlerspeicher aktualisieren beim Ausschalten |
| 0x62 | Rampe Vollast |
| 0x63 | TRS-Kühlung |
| 0x64 | Restwärmenutzung |
| 0x65 | ADR-Zustand aktiviert |
| 0x66 | Bereit |
| 0x67 | Brennerregeneration  |
| 0x68 | Initialisierung_Prozess  |
| 0x69 | Sleep_Mode  |
| 0x6A | Fortsetzung Brennstofffördern  |
| 0x6B | Fortsetzung Stabilisierung, Kaltstart  |
| 0x6C | Fortsetzung Stabilisierung, Warmstart  |
| 0x6D | Nachlauframpe  |
| 0x6E | Restwärmenutzung  |
| 0x6F | Stabilisierung, Kaltstart  |
| 0x70 | PROCESSOR OFF  |
| 0x71 | WAIT STATE  |
| 0x72 | Fortsetzung Stabilisierung  |
| 0x73 | MOTOR CHECK  |
| 0x74 | FLAME MONITOR COOLING  |
| 0x75 | PRE-GLOWING1  |
| 0x76 | PRE-GLOWING2  |
| 0x77 | PRE-GLOWING2 Partial Load Start  |
| 0x78 | FLAME MONITOR CALIBRATION START |
| 0x79 | START1  |
| 0x7A | START2  |
| 0x7B | START3  |
| 0x7C | START4  |
| 0x7D | START5  |
| 0x7E | START6  |
| 0x7F | GLOW PLUG RAMP  |
| 0x80 | FLAME MONITOR MEASURUEMENT1 |
| 0x81 | FLAME MONITOR MEASURUEMENT2 |
| 0x82 | START1 Partial Load Start  |
| 0x83 | START2 Partial Load Start  |
| 0x84 | START3 Partial Load Start  |
| 0x85 | START4 Partial Load Start  |
| 0x86 | START5 Partial Load Start  |
| 0x87 | START6 Partial Load Start  |
| 0x88 | GLOW PLUG RAMP Partial Load Start |
| 0x89 | FLAME MONITOR MEASUREMENT1 Partial Load |
| 0x8A | FLAME MONITOR MEASUREMENT2 Partial Load |
| 0x8B | FULL LOAD  |
| 0x8C | RAMP DOWN  |
| 0x8D | PARTIAL LOAD  |
| 0x8E | RAMP UP  |
| 0x8F | PAUSE  |
| 0x90 | BURN-OUT Full Load  |
| 0x91 | BURN-OUT Partial Load  |
| 0x92 | BURN-OUT Start  |
| 0x93 | BURN-OUT Partial Load Start  |
| 0x94 | BURN-OUT Overheating  |
| 0x95 | COOL1  |
| 0x96 | FLAME MONITOR CALIBRATION  |
| 0x97 | COOL2  |
| 0x98 | BOOST  |
| 0x99 | CONTINUOUS COOLANT TEMPERATURE CONTROL |
| 0x9A | CONTINUOUS COOLANT TEMPERATURE CONTROL-HOLD |
| 0xA0 | Stabilisierung, Warmstart  |
| 0xA1 | Startrampe, Kaltstart  |
| 0xA2 | Startrampe, Warmstart  |
| 0xA3 | Test Restwärmenutzung  |

### TAB_SH_KRAFTSTOFFART

| WERT | TEXT |
| --- | --- |
| 0x01 | Benzin |
| 0x02 | Diesel |
| 0x03 | RME |
| 0xFF | ungültig |

### TAB_SH_SL_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine LED an |
| 0x01 | Eine LED an |
| 0x02 | Zwei LEDs an |
| 0x03 | Drei LEDs an |
| 0xFF | Keine LEDs angeschlossen |

### TAB_SH_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x01 | SH_L_VORN |
| 0x02 | SH_R_VORN |

### TAB_SH_TESTLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Testlauf niO beendet oder Testlauf noch nicht gestartet |
| 0x01 | Testlauf iO beendet |
| 0x02 | Testbetrieb aktiv |
| 0xFF | ungültig |

### TAB_SOLLTEMP

| WERT | TEXT |
| --- | --- |
| 0x00 | STOP |
| 0x01 | TEMP_LINKS |
| 0x02 | TEMP_RECHTS |
| 0x03 | TEMP_MITTE |

### TAB_STATUS_KALIBRIERLAUF

| WERT | TEXT |
| --- | --- |
| 0x0000 | in diesem Klemmenzyklus noch nicht gestartet |
| 0x0001 | Kalibrierlauf läuft gerade |
| 0x0002 | Kalibrierlauf abgeschlossen |

### TAB_STATUS_SELBSTTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gestartet/nicht angefordert |
| 0x01 | Test läuft gerade |
| 0x02 | Test erfolgreich abgeschlossen |
| 0x03 | Test nicht erfolgreich abgeschlossen |

### TAB_TASTEN_AUDIO

| WERT | TEXT |
| --- | --- |
| 18 | MODE |
| 17 | EJECT |
| 21 | SUCHLAUF_LI |
| 22 | SUCHLAUF_RE |
| 4 | EIN_AUS |
| 20 | TP |

### TAB_TASTEN_KLIMA

| WERT | TEXT |
| --- | --- |
| 7 | UML_AUC |
| 9 | HHS |
| 8 | DEFROST |
| 10 | KLIMA |
| 6 | MAX_AC |
| 11 | ALL |
| 3 | AUTO_MITTE |
| 4 | GBL_PLUS_MITTE |
| 5 | GBL_MINUS_MITTE |
| 18 | LV_TOGGLE_MITTE |
| 0 | LV_OBEN |
| 1 | LV_MITTE |
| 2 | LV_UNTEN |

### TAB_TEMP_EINHEIT

| WERT | TEXT |
| --- | --- |
| 0x0000 | Celsius |
| 0x0001 | Fahrenheit |

### TAB_VARIANTE_AUDIOBEDIENTEIL

| WERT | TEXT |
| --- | --- |
| 0x00 | ohne FBM, TP |
| 0x01 | mit FBM, TP |
| 0x02 | ohne FBM, FM/AM |
| 0x03 | mit FBM, FM/AM |
