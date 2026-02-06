# eps_i1.prg

## General

|  |  |
| --- | --- |
| File | eps_i1.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 48 |
| Origin | BMW EF-414 Florian_Kuttig |
| Revision | 5.001 |
| Author | Gigatronik EF-413 Markus_Menacher, BMW EF-413 Dirk_Hohmann, BMW |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Electronic Power Steering |  |  |
| ORIGIN | string | BMW EF-414 Florian_Kuttig |  |  |
| REVISION | string | 5.001 |  |  |
| AUTHOR | string | Gigatronik EF-413 Markus_Menacher, BMW EF-413 Dirk_Hohmann, BMW |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.989 |  |  |
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

### CALID_CVN_LESEN

OBD Calibration ID, CVN Calibration verification number UDS  : $22   ReadDataByIdentifier UDS  : $2541 CAL-ID Calibration ID and CVN Calibration verification number

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

### GARAGE_DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen UDS  : $10 StartDiagnosticSession Modus: einstellbar mit diesem Job

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
| 0x01 | ms ECU overall, not comparable |
| 0x02 | ms ECU overall, not comparable |
| 0x03 | invalid |
| 0x04 | insync, ms ECU overall, not comparable |
| 0x05 | ms ECU overall, comparable |
| 0x06 | ms ECU overall, comparable |
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

### ARG_0XAB56_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQUENZ | + | - | Hz | - | unsigned char | - | - | 16.0 | 1.0 | 0.0 | 1.0 | 5.0 | Frequenz Pendelbewegung |
| MAX_AMPLITUDE | + | - | ° | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 15.0 | Maximale Amplitude Pendelbewegung |
| NUMBER_OF_CYCLES | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 50.0 | Anzahl Pendelbewegung |

### ARG_0XAB71_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL | + | - | ° | - | signed int | - | - | 100.0 | 1.0 | 0.0 | -100.0 | 100.0 | Sollwinkel Lenkrad (relativ oder absolut) |
| WINKELGESCHWINDIGKEIT | + | - | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Winkelgeschwindigkeit Lenkrad |
| WINKELBESCHLEUNIGUNG | + | - | °/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 2000.0 | Winkelbeschleunigung Lenkrad |
| ABSOLUT_EIN | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Referenz Winkel (1 = absolutes Verfahren, 0 = relatives Verfahren) |

### ARG_0XAB72_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL | + | - | ° | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 100.0 | Winkel Lenkrad (beidseitig) |
| WINKELGESCHWINDIGKEIT | + | - | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 100.0 | Winkelgeschwindigkeit Lenkrad |
| WINKELBESCHLEUNIGUNG | + | - | °/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 2000.0 | Winkelbeschleunigung Lenkrad |

### ARG_0XDB5A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | ° | - | signed int | - | - | 100.0 | 1.0 | 0.0 | -15.0 | 15.0 | Offset Lenkwinkel |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

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
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | ja |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x023000 | Energiesparmode aktiv | 0 | - |
| 0x023008 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x023009 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02300A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02300B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02300C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02FF30 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x482285 | Steuergerät intern - Aufstartfehler Prozessor | 0 | - |
| 0x482297 | Ruhestrom Plausibilisierung dauerhafte Lenkbewegung erkannt | 0 | - |
| 0x4822DA | Steuergerät intern - Hardwarefehler | 0 | - |
| 0x4822DB | Steuergerät intern - Herstellerinitialisierung fehlerhaft | 0 | - |
| 0x4822DE | Sensor - Rotorlage - Lenkwinkel - interner Signalfehler | 0 | - |
| 0x4822DF | Steuergerät intern - ROM fehlerhaft | 0 | - |
| 0x4822E0 | Steuergerät intern - NVRAM fehlerhaft | 0 | - |
| 0x4822E3 | Steuergerät intern - RAM fehlerhaft | 0 | - |
| 0x4822E4 | Steuergerät intern - allgemeiner MCU-Fehler - OBD | 0 | - |
| 0x4822E6 | Steuergerät intern - Software Laufzeitfehler - OBD | 0 | - |
| 0x4822E7 | Steuergerät intern - Watchdog Ereignis | 0 | - |
| 0x4822EC | Globales Powermanagement Reduzierung Lenkunterstützung | 1 | - |
| 0x4822F1 | Steuergerät intern - Kopieren fehlgeschlagen: Daten von EEPROM nach ROM | 0 | - |
| 0x4822F5 | Steuergerät intern - allgemeiner MCU-Fehler | 0 | - |
| 0x4822F6 | Steuergerät intern - Software Laufzeitfehler | 0 | - |
| 0x4822F7 | Ungültiger Datenstand für diese Fahrzeugkonfiguration | 0 | - |
| 0x48238D | Ruhestrom Plausibilisierung Kl15N lokal mit Bus-Signal | 0 | - |
| 0x48238E | Spannungsversorgung - Globale Überspannung | 1 | - |
| 0x482394 | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert | 1 | - |
| 0x482399 | Spannungsversorgung - Lokale Überspannung Abschaltung Lenkunterstützung | 1 | - |
| 0x4823C2 | Sensor - Rotorlage - Lenkwinkel - Geradeauslauf nicht gelernt | 1 | - |
| 0x4823C5 | Sensor - Rotorlage - Lenkwinkel - Plausibilität | 0 | - |
| 0x4823C6 | Aktuator - Motor - Allgemeiner Fehler | 0 | - |
| 0x4823D2 | Sensor - Rotorlage - Lenkwinkel - Hardware defekt | 0 | - |
| 0x4823D4 | Spannungsversorgung - Globale Unterspannung | 1 | - |
| 0x4823E4 | Steuergerät intern - Spannungsversorgung Motortreiber Über- oder Unterspannung | 0 | - |
| 0x4823E6 | Steuergerät intern - Powerpack Defekt | 0 | - |
| 0x4823EC | Sensor - Drehmoment - Lenkmoment - Defekt | 0 | - |
| 0x4823F9 | Steuergerät intern - Übertemperatur Reduzierung Lenkunterstützung | 1 | - |
| 0x4823FA | Steuergerät intern - Überlast Reduzierung Lenkradunterstützung | 1 | - |
| 0x4823FC | Spannungsversorgung - Lokale Unterspannung Reduzierung Lenkunterstützung | 1 | - |
| 0xD5041F | FLEXRAY Bus 1 | 0 | - |
| 0xD50420 | FLEXRAY Controller Error Bus 1 | 0 | - |
| 0xD50BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD5144E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Ungültig | 1 | - |
| 0xD51458 | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Timeout | 1 | - |
| 0xD51459 | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Checksumme | 1 | - |
| 0xD5145A | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Alive | 1 | - |
| 0xD5145B | Signalfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Ungültig | 1 | - |
| 0xD5145C | Signalfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Undefiniert | 1 | - |
| 0xD51482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Timeout | 1 | - |
| 0xD514B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 | - |
| 0xD514B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Checksumme | 1 | - |
| 0xD514BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 | - |
| 0xD514BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 | - |
| 0xD514BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Undefiniert | 1 | - |
| 0xD514C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Timeout | 1 | - |
| 0xD514C3 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Checksumme | 1 | - |
| 0xD514C4 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Alive | 1 | - |
| 0xD514C8 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Ungültig | 1 | - |
| 0xD514C9 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Undefiniert | 1 | - |
| 0xD514F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Timeout | 1 | - |
| 0xD514F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Timeout | 1 | - |
| 0xD514FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Alive | 1 | - |
| 0xD514FC | Signalfehler (Klemmen, ID: KLEMMEN) - Ungültig | 1 | - |
| 0xD514FD | Signalfehler (Klemmen, ID: KLEMMEN) - Undefiniert | 1 | - |
| 0xD514FF | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Checksumme | 1 | - |
| 0xD5150A | Botschaftsfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Timeout | 1 | - |
| 0xD51510 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Ungültig | 1 | - |
| 0xD51511 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Undefiniert | 1 | - |
| 0xD51542 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Timeout | 1 | - |
| 0xD51543 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Checksumme | 1 | - |
| 0xD51548 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Ungültig | 1 | - |
| 0xD51565 | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Alive | 1 | - |
| 0xD51600 | Botschaftsfehler (Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) Timeout | 1 | - |
| 0xD5160C | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Timeout | 1 | - |
| 0xD51645 | Signalfehler (Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) Ungültig | 1 | - |
| 0xD5165E | Signalfehler (Zustand Fahrzeug, ID: CON_VEH) Ungültig | 1 | - |
| 0xD51744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 | - |
| 0xD51746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Alive | 1 | - |
| 0xD51853 | Signalfehler (Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) Undefiniert | 1 | - |
| 0xD51858 | Signalfehler (Zustand Fahrzeug, ID: CON_VEH) Undefiniert | 1 | - |
| 0xD51966 | Signalfehler (Status Verbrennungsmotor, ID: ST_CENG) Ungültig | 1 | - |
| 0xD519AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 | - |
| 0xD519CC | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Timeout | 1 | - |
| 0xD519E2 | Botschaftsfehler (Steuerung Vibration Lenkrad Anzeige Außenspiegel, ID: CTR_VIB_STW_DISP_EXMI_SP2015) Timeout | 1 | - |
| 0xD519E3 | Botschaftsfehler (Steuerung Vibration Lenkrad, ID: CTR_VIB_STW) Timeout | 1 | - |
| 0xD51A38 | Signalfehler (Status Verbrennungsmotor, ID: ST_CENG) Undefiniert | 1 | - |
| 0xD51A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Qualifier | 1 | - |
| 0xD51A4B | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Alive | 1 | - |
| 0xD51ADB | Signalfehler (Steuerung Vibration Lenkrad Anzeige Außenspiegel, ID: CTR_VIB_STW_DISP_EXMI_SP2015) Undefiniert | 1 | - |
| 0xD51ADC | Signalfehler (Steuerung Vibration Lenkrad, ID: CTR_VIB_STW) Undefiniert | 1 | - |
| 0xD51AEB | Signalfehler (Steuerung Vibration Lenkrad Anzeige Außenspiegel, ID: CTR_VIB_STW_DISP_EXMI_SP2015) Ungültig | 1 | - |
| 0xD51AEC | Signalfehler (Steuerung Vibration Lenkrad, ID: CTR_VIB_STW) Ungültig | 1 | - |
| 0xD51B30 | Botschaftsfehler (Lenkwinkel Offset, ID: STEA_OFFS) - Timeout | 1 | - |
| 0xD51B34 | Signalfehler (Lenkwinkel Offset, ID: STEA_OFFS) - Ungültig | 1 | - |
| 0xD51B35 | Signalfehler (Lenkwinkel Offset, ID: STEA_OFFS) - Undefiniert | 1 | - |
| 0xD51C12 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Timeout | 1 | - |
| 0xD51C13 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Checksumme | 1 | - |
| 0xD51C14 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Alive | 1 | - |
| 0xD51C1F | Botschaftsfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) - Timeout | 1 | - |
| 0xD51C20 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Timeout | 1 | - |
| 0xD51C21 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Checksumme | 1 | - |
| 0xD51C22 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Alive | 1 | - |
| 0xD52C0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Undefiniert | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x5003 | FAHRERLENKWINKEL | ° | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5004 | ANTRIEBSZUSTAND | HEX | High | unsigned char | - | - | - | - |
| 0x5006 | BETRIEBSSPANNUNG | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x500A | FAHRZEUGGESCHWINDIGKEIT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x500C | INT_FUNKTIONSZUSTAND | HEX | High | unsigned int | - | - | - | - |
| 0x500E | HANDMOMENT | Nm | High | signed int | - | 0.01 | 1.0 | 0.0 |
| 0x500F | MOTORMOMENT | Nm | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x5030 | FEHLERCODE | HEX | High | unsigned int | - | - | - | - |
| 0x5031 | Lenkwinkelgeschwindigkeit | °/s | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5032 | FEHLERCODE_EXTENDED | HEX | High | signed long | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

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
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x2002B7 | Steuergerät intern - Security Diagnose Request in verriegeltem Zustand erhalten | 0 | - |
| 0x482286 | NVM_E_REQ_FAILED | 0 | - |
| 0x482289 | NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x48228A | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 | - |
| 0x48228D | COMM_E_NET_START_IND_CHANNEL_0 | 0 | - |
| 0x48228E | FR_E_ACCESS | 0 | - |
| 0x482292 | FRTRCV_10_TJA1080_E_FR_NO_TRCV_C | 0 | - |
| 0x482296 | WDGM_E_ALIVE_SUPERVISION | 0 | - |
| 0x4822A0 | Steuergerät intern - Mehrfache Aufstartversuche Prozessor | 0 | - |
| 0x4822C6 | Assist-Firewall-Touched | 0 | - |
| 0x4822D4 | Assist-Firewall-FaultMode | 0 | - |
| 0x4822D5 | Damping-Firewall-Touched | 0 | - |
| 0x4822D6 | Damping-Firewall-FaultMode | 0 | - |
| 0x4822D7 | VBIC-FDD-FaultMode | 0 | - |
| 0x4822D8 | Return-Firewall-Touched | 0 | - |
| 0x4822DC | Funktionsschnittstelle - Deaktivierung Ritzelwinkelschnittstelle Lenkwinkelgeschwindigkeit | 0 | - |
| 0x4823CD | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 | - |
| 0x4823CE | Puffer für ausgehende Fehlermeldungen ist voll | 1 | - |
| 0x4823CF | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 | - |
| 0x482451 | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert | 0 | - |
| 0x8BAC63 | IPDUM_E_TRANSMIT_FAILED Betriebssystem Uebermittlungsfehler Botschaft | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x29FF | TESTER_ID | HEX | High | unsigned int | - | - | - | - |
| 0x5003 | FAHRERLENKWINKEL | ° | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5004 | ANTRIEBSZUSTAND | HEX | High | unsigned char | - | - | - | - |
| 0x5006 | BETRIEBSSPANNUNG | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x500A | FAHRZEUGGESCHWINDIGKEIT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x500C | INT_FUNKTIONSZUSTAND | HEX | High | unsigned int | - | - | - | - |
| 0x500E | HANDMOMENT | Nm | High | signed int | - | 0.01 | 1.0 | 0.0 |
| 0x500F | MOTORMOMENT | Nm | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x5030 | FEHLERCODE | HEX | High | unsigned int | - | - | - | - |
| 0x5032 | FEHLERCODE_EXTENDED | HEX | High | signed long | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00 |
| 1 | defaultSession |
| 2 | programmingSession |
| 3 | extendedDiagnosticSession |
| 4 | safetySystemDiagnosticSession |
| 5 | ISOSAEReserved_05_3F |
| 6 | ISOSAEReserved_05_3F |
| 7 | ISOSAEReserved_05_3F |
| 8 | ISOSAEReserved_05_3F |
| 9 | ISOSAEReserved_05_3F |
| 10 | ISOSAEReserved_05_3F |
| 11 | ISOSAEReserved_05_3F |
| 12 | ISOSAEReserved_05_3F |
| 13 | ISOSAEReserved_05_3F |
| 14 | ISOSAEReserved_05_3F |
| 15 | ISOSAEReserved_05_3F |
| 16 | ISOSAEReserved_05_3F |
| 17 | ISOSAEReserved_05_3F |
| 18 | ISOSAEReserved_05_3F |
| 19 | ISOSAEReserved_05_3F |
| 20 | ISOSAEReserved_05_3F |
| 21 | ISOSAEReserved_05_3F |
| 22 | ISOSAEReserved_05_3F |
| 23 | ISOSAEReserved_05_3F |
| 24 | ISOSAEReserved_05_3F |
| 25 | ISOSAEReserved_05_3F |
| 26 | ISOSAEReserved_05_3F |
| 27 | ISOSAEReserved_05_3F |
| 28 | ISOSAEReserved_05_3F |
| 29 | ISOSAEReserved_05_3F |
| 30 | ISOSAEReserved_05_3F |
| 31 | ISOSAEReserved_05_3F |
| 32 | ISOSAEReserved_05_3F |
| 33 | ISOSAEReserved_05_3F |
| 34 | ISOSAEReserved_05_3F |
| 35 | ISOSAEReserved_05_3F |
| 36 | ISOSAEReserved_05_3F |
| 37 | ISOSAEReserved_05_3F |
| 38 | ISOSAEReserved_05_3F |
| 39 | ISOSAEReserved_05_3F |
| 40 | ISOSAEReserved_05_3F |
| 41 | ISOSAEReserved_05_3F |
| 42 | ISOSAEReserved_05_3F |
| 43 | ISOSAEReserved_05_3F |
| 44 | ISOSAEReserved_05_3F |
| 45 | ISOSAEReserved_05_3F |
| 46 | ISOSAEReserved_05_3F |
| 47 | ISOSAEReserved_05_3F |
| 48 | ISOSAEReserved_05_3F |
| 49 | ISOSAEReserved_05_3F |
| 50 | ISOSAEReserved_05_3F |
| 51 | ISOSAEReserved_05_3F |
| 52 | ISOSAEReserved_05_3F |
| 53 | ISOSAEReserved_05_3F |
| 54 | ISOSAEReserved_05_3F |
| 55 | ISOSAEReserved_05_3F |
| 56 | ISOSAEReserved_05_3F |
| 57 | ISOSAEReserved_05_3F |
| 58 | ISOSAEReserved_05_3F |
| 59 | ISOSAEReserved_05_3F |
| 60 | ISOSAEReserved_05_3F |
| 61 | ISOSAEReserved_05_3F |
| 62 | ISOSAEReserved_05_3F |
| 63 | ISOSAEReserved_05_3F |
| 64 | vehicleManufacturerSpecific_40 |
| 65 | codingSession |
| 66 | SWTSession |
| 67 | vehicleManufacturerSpecific_43_5F |
| 68 | vehicleManufacturerSpecific_43_5F |
| 69 | vehicleManufacturerSpecific_43_5F |
| 70 | vehicleManufacturerSpecific_43_5F |
| 71 | vehicleManufacturerSpecific_43_5F |
| 72 | vehicleManufacturerSpecific_43_5F |
| 73 | vehicleManufacturerSpecific_43_5F |
| 74 | vehicleManufacturerSpecific_43_5F |
| 75 | vehicleManufacturerSpecific_43_5F |
| 76 | vehicleManufacturerSpecific_43_5F |
| 77 | vehicleManufacturerSpecific_43_5F |
| 78 | vehicleManufacturerSpecific_43_5F |
| 79 | vehicleManufacturerSpecific_43_5F |
| 80 | vehicleManufacturerSpecific_43_5F |
| 81 | vehicleManufacturerSpecific_43_5F |
| 82 | vehicleManufacturerSpecific_43_5F |
| 83 | vehicleManufacturerSpecific_43_5F |
| 84 | vehicleManufacturerSpecific_43_5F |
| 85 | vehicleManufacturerSpecific_43_5F |
| 86 | vehicleManufacturerSpecific_43_5F |
| 87 | vehicleManufacturerSpecific_43_5F |
| 88 | vehicleManufacturerSpecific_43_5F |
| 89 | vehicleManufacturerSpecific_43_5F |
| 90 | vehicleManufacturerSpecific_43_5F |
| 91 | vehicleManufacturerSpecific_43_5F |
| 92 | vehicleManufacturerSpecific_43_5F |
| 93 | vehicleManufacturerSpecific_43_5F |
| 94 | vehicleManufacturerSpecific_43_5F |
| 95 | vehicleManufacturerSpecific_43_5F |
| 96 | systemSupplierSpecific |
| 97 | systemSupplierSpecific |
| 98 | systemSupplierSpecific |
| 99 | systemSupplierSpecific |
| 100 | systemSupplierSpecific |
| 101 | systemSupplierSpecific |
| 102 | systemSupplierSpecific |
| 103 | systemSupplierSpecific |
| 104 | systemSupplierSpecific |
| 105 | systemSupplierSpecific |
| 106 | systemSupplierSpecific |
| 107 | systemSupplierSpecific |
| 108 | systemSupplierSpecific |
| 109 | systemSupplierSpecific |
| 110 | systemSupplierSpecific |
| 111 | systemSupplierSpecific |
| 112 | systemSupplierSpecific |
| 113 | systemSupplierSpecific |
| 114 | systemSupplierSpecific |
| 115 | systemSupplierSpecific |
| 116 | systemSupplierSpecific |
| 117 | systemSupplierSpecific |
| 118 | systemSupplierSpecific |
| 119 | systemSupplierSpecific |
| 120 | systemSupplierSpecific |
| 121 | systemSupplierSpecific |
| 122 | systemSupplierSpecific |
| 123 | systemSupplierSpecific |
| 124 | systemSupplierSpecific |
| 125 | systemSupplierSpecific |
| 126 | systemSupplierSpecific |

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ECUMehrmalsProgrammierbar |
| 1 | ECUMindestensEinmalVollstaendigProgrammierbar |
| 2 | ECUNichtMehrProgrammierbar |
| 3 | reserved_03_FF |
| 4 | reserved_03_FF |
| 5 | reserved_03_FF |
| 6 | reserved_03_FF |
| 7 | reserved_03_FF |
| 8 | reserved_03_FF |
| 9 | reserved_03_FF |
| 10 | reserved_03_FF |
| 11 | reserved_03_FF |
| 12 | reserved_03_FF |
| 13 | reserved_03_FF |
| 14 | reserved_03_FF |
| 15 | reserved_03_FF |
| 16 | reserved_03_FF |
| 17 | reserved_03_FF |
| 18 | reserved_03_FF |
| 19 | reserved_03_FF |
| 20 | reserved_03_FF |
| 21 | reserved_03_FF |
| 22 | reserved_03_FF |
| 23 | reserved_03_FF |
| 24 | reserved_03_FF |
| 25 | reserved_03_FF |
| 26 | reserved_03_FF |
| 27 | reserved_03_FF |
| 28 | reserved_03_FF |
| 29 | reserved_03_FF |
| 30 | reserved_03_FF |
| 31 | reserved_03_FF |
| 32 | reserved_03_FF |
| 33 | reserved_03_FF |
| 34 | reserved_03_FF |
| 35 | reserved_03_FF |
| 36 | reserved_03_FF |
| 37 | reserved_03_FF |
| 38 | reserved_03_FF |
| 39 | reserved_03_FF |
| 40 | reserved_03_FF |
| 41 | reserved_03_FF |
| 42 | reserved_03_FF |
| 43 | reserved_03_FF |
| 44 | reserved_03_FF |
| 45 | reserved_03_FF |
| 46 | reserved_03_FF |
| 47 | reserved_03_FF |
| 48 | reserved_03_FF |
| 49 | reserved_03_FF |
| 50 | reserved_03_FF |
| 51 | reserved_03_FF |
| 52 | reserved_03_FF |
| 53 | reserved_03_FF |
| 54 | reserved_03_FF |
| 55 | reserved_03_FF |
| 56 | reserved_03_FF |
| 57 | reserved_03_FF |
| 58 | reserved_03_FF |
| 59 | reserved_03_FF |
| 60 | reserved_03_FF |
| 61 | reserved_03_FF |
| 62 | reserved_03_FF |
| 63 | reserved_03_FF |
| 64 | reserved_03_FF |
| 65 | reserved_03_FF |
| 66 | reserved_03_FF |
| 67 | reserved_03_FF |
| 68 | reserved_03_FF |
| 69 | reserved_03_FF |
| 70 | reserved_03_FF |
| 71 | reserved_03_FF |
| 72 | reserved_03_FF |
| 73 | reserved_03_FF |
| 74 | reserved_03_FF |
| 75 | reserved_03_FF |
| 76 | reserved_03_FF |
| 77 | reserved_03_FF |
| 78 | reserved_03_FF |
| 79 | reserved_03_FF |
| 80 | reserved_03_FF |
| 81 | reserved_03_FF |
| 82 | reserved_03_FF |
| 83 | reserved_03_FF |
| 84 | reserved_03_FF |
| 85 | reserved_03_FF |
| 86 | reserved_03_FF |
| 87 | reserved_03_FF |
| 88 | reserved_03_FF |
| 89 | reserved_03_FF |
| 90 | reserved_03_FF |
| 91 | reserved_03_FF |
| 92 | reserved_03_FF |
| 93 | reserved_03_FF |
| 94 | reserved_03_FF |
| 95 | reserved_03_FF |
| 96 | reserved_03_FF |
| 97 | reserved_03_FF |
| 98 | reserved_03_FF |
| 99 | reserved_03_FF |
| 100 | reserved_03_FF |
| 101 | reserved_03_FF |
| 102 | reserved_03_FF |
| 103 | reserved_03_FF |
| 104 | reserved_03_FF |
| 105 | reserved_03_FF |
| 106 | reserved_03_FF |
| 107 | reserved_03_FF |
| 108 | reserved_03_FF |
| 109 | reserved_03_FF |
| 110 | reserved_03_FF |
| 111 | reserved_03_FF |
| 112 | reserved_03_FF |
| 113 | reserved_03_FF |
| 114 | reserved_03_FF |
| 115 | reserved_03_FF |
| 116 | reserved_03_FF |
| 117 | reserved_03_FF |
| 118 | reserved_03_FF |
| 119 | reserved_03_FF |
| 120 | reserved_03_FF |
| 121 | reserved_03_FF |
| 122 | reserved_03_FF |
| 123 | reserved_03_FF |
| 124 | reserved_03_FF |
| 125 | reserved_03_FF |
| 126 | reserved_03_FF |
| 127 | reserved_03_FF |
| 128 | reserved_03_FF |
| 129 | reserved_03_FF |
| 130 | reserved_03_FF |
| 131 | reserved_03_FF |
| 132 | reserved_03_FF |
| 133 | reserved_03_FF |
| 134 | reserved_03_FF |
| 135 | reserved_03_FF |
| 136 | reserved_03_FF |
| 137 | reserved_03_FF |
| 138 | reserved_03_FF |
| 139 | reserved_03_FF |
| 140 | reserved_03_FF |
| 141 | reserved_03_FF |
| 142 | reserved_03_FF |
| 143 | reserved_03_FF |
| 144 | reserved_03_FF |
| 145 | reserved_03_FF |
| 146 | reserved_03_FF |
| 147 | reserved_03_FF |
| 148 | reserved_03_FF |
| 149 | reserved_03_FF |
| 150 | reserved_03_FF |
| 151 | reserved_03_FF |
| 152 | reserved_03_FF |
| 153 | reserved_03_FF |
| 154 | reserved_03_FF |
| 155 | reserved_03_FF |
| 156 | reserved_03_FF |
| 157 | reserved_03_FF |
| 158 | reserved_03_FF |
| 159 | reserved_03_FF |
| 160 | reserved_03_FF |
| 161 | reserved_03_FF |
| 162 | reserved_03_FF |
| 163 | reserved_03_FF |
| 164 | reserved_03_FF |
| 165 | reserved_03_FF |
| 166 | reserved_03_FF |
| 167 | reserved_03_FF |
| 168 | reserved_03_FF |
| 169 | reserved_03_FF |
| 170 | reserved_03_FF |
| 171 | reserved_03_FF |
| 172 | reserved_03_FF |
| 173 | reserved_03_FF |
| 174 | reserved_03_FF |
| 175 | reserved_03_FF |
| 176 | reserved_03_FF |
| 177 | reserved_03_FF |
| 178 | reserved_03_FF |
| 179 | reserved_03_FF |
| 180 | reserved_03_FF |
| 181 | reserved_03_FF |
| 182 | reserved_03_FF |
| 183 | reserved_03_FF |
| 184 | reserved_03_FF |
| 185 | reserved_03_FF |
| 186 | reserved_03_FF |
| 187 | reserved_03_FF |
| 188 | reserved_03_FF |
| 189 | reserved_03_FF |
| 190 | reserved_03_FF |
| 191 | reserved_03_FF |
| 192 | reserved_03_FF |
| 193 | reserved_03_FF |
| 194 | reserved_03_FF |
| 195 | reserved_03_FF |
| 196 | reserved_03_FF |
| 197 | reserved_03_FF |
| 198 | reserved_03_FF |
| 199 | reserved_03_FF |
| 200 | reserved_03_FF |
| 201 | reserved_03_FF |
| 202 | reserved_03_FF |
| 203 | reserved_03_FF |
| 204 | reserved_03_FF |
| 205 | reserved_03_FF |
| 206 | reserved_03_FF |
| 207 | reserved_03_FF |
| 208 | reserved_03_FF |
| 209 | reserved_03_FF |
| 210 | reserved_03_FF |
| 211 | reserved_03_FF |
| 212 | reserved_03_FF |
| 213 | reserved_03_FF |
| 214 | reserved_03_FF |
| 215 | reserved_03_FF |
| 216 | reserved_03_FF |
| 217 | reserved_03_FF |
| 218 | reserved_03_FF |
| 219 | reserved_03_FF |
| 220 | reserved_03_FF |
| 221 | reserved_03_FF |
| 222 | reserved_03_FF |
| 223 | reserved_03_FF |
| 224 | reserved_03_FF |
| 225 | reserved_03_FF |
| 226 | reserved_03_FF |
| 227 | reserved_03_FF |
| 228 | reserved_03_FF |
| 229 | reserved_03_FF |
| 230 | reserved_03_FF |
| 231 | reserved_03_FF |
| 232 | reserved_03_FF |
| 233 | reserved_03_FF |
| 234 | reserved_03_FF |
| 235 | reserved_03_FF |
| 236 | reserved_03_FF |
| 237 | reserved_03_FF |
| 238 | reserved_03_FF |
| 239 | reserved_03_FF |
| 240 | reserved_03_FF |
| 241 | reserved_03_FF |
| 242 | reserved_03_FF |
| 243 | reserved_03_FF |
| 244 | reserved_03_FF |
| 245 | reserved_03_FF |
| 246 | reserved_03_FF |
| 247 | reserved_03_FF |
| 248 | reserved_03_FF |
| 249 | reserved_03_FF |
| 250 | reserved_03_FF |
| 251 | reserved_03_FF |
| 252 | reserved_03_FF |
| 253 | reserved_03_FF |
| 254 | reserved_03_FF |
| 255 | reserved_03_FF |

### RES_0X1234_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERVICE | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_SERVICE | - | - | - | Status des Service |
| STAT_PIC | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_PIC | - | - | - | Status des zu flashenden Prozessors |

### RES_0XAB56_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_PENDELN_AKTIV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XAB6C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_LENKRADWINKEL_WERT | - | - | + | ° | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Lenkradwinkel |
| STAT_SENSOR_ZUSTAND_NR | - | - | + | 0-n | - | signed char | - | TAB_EPS_WERT | 1.0 | 1.0 | 0.0 | Zustand Sensor Ritzelwinkelsensor |

### RES_0XAB71_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_VERFAHREN_AKTIV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XAB72_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XDB57_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RITZELWINKEL_WERT | ° | - | signed long | - | - | 1.0 | 100.0 | 0.0 | Ritzelwinkel |
| STAT_RITZELWINKELGESCHWINDIGKEIT_WERT | °/s | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ritzelwinkel Winkelgeschwindigkeit |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | signed char | - | TAB_EPS_WERT | 1.0 | 1.0 | 0.0 | Zustand Sensor Ritzelwinkelsensor |

### RES_0XDB5A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LW_OFFSET_WERT | ° | - | signed int | - | - | 4.395 | 100.0 | -89.9656 | Offset Lenkwinkel |

### RES_0XDB99_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOMENT_WERT | Nm | - | signed int | - | - | 1.0 | 128.0 | 0.0 | Aktuelles Moment |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | signed char | - | TAB_EPS_MOMENTENSENSOR | - | - | - | Zustand Sensor Lenkmoment |

### RES_0XDFDD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKRADWINKEL_LIEFERANT_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler Zahnstangenweg (als Lenkwinkel) auf Basis von gelernten mechanischen Endanschlägen der Zahnstange im Werk des Lieferanten. Bytes 0-3  gespeicherter Zahnstangenhub  (Nexteer Werk). Lenkwinkel in Einheit Grad, f32 Format. |
| STAT_LENKRADWINKEL_AUTOMATISCH_GELERNT_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler Zahnstangenweg (als Lenkwinkel) auf Basis von gelernten mechanischen Endanschlägen der Zahnstange bei BMW (Letzte Ausführung im aktuellen Power-Zyklus. Enthält 0 Grad, falls Job in diesem Zyklus nicht ausgeführt wurde). Bytes 4-7 letzer gelernter Zahnstangenhub durch automatisches Anschlag-Anschlag-Lenken. Lenkwinkel in Einheit Grad, f32 Format.  |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_EPS_PULLDRIFT_OFFSET_RESET | 0xA2BB | - | Reset EPS Pull-Drift Langzeit-Offset  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_PENDELN | 0xAB56 | - | Start und Status EPS Pendelroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB56_R | RES_0xAB56_R |
| EPS_LENKWINKELSENSOR_KALIBRIERUNG_RESET | 0xAB69 | - | Start Reset Lenkwinkel Offset | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_INITIALISIERUNG_SERVICE | 0xAB6C | - | Starten, Stoppen und Status Initialisierungsroutine | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB6C_R |
| EPS_VERFAHREN | 0xAB71 | - | Starten, Stoppen und Status Lenkverfahrroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB71_R | RES_0xAB71_R |
| EPS_INITIALISIERUNG_WERK | 0xAB72 | - | Starten, Stoppen und Status Initialisierungsroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB72_R | RES_0xAB72_R |
| STEUERN_EPS_MULTITURNWERT_RESET | 0xAB7D | - | Reset EPS Multiturnwert | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_RITZELWINKELSENSOR | 0xDB57 | - | Auslesen Daten EPS Ritzelwinkel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB57_D |
| EPS_LENKWINKELSENSOR_KALIBRIERUNG | 0xDB5A | - | Auslesen und Vorgeben Lenkwinkel Offset | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDB5A_D | RES_0xDB5A_D |
| EPS_MOMENTENSENSOR | 0xDB99 | - | Auslesen Daten Sensor Lenkmoment | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB99_D |
| EPS_ZAHNSTANGENMITTE | 0xDC77 | STAT_ZAHNSTANGENMITTE_ZUSTAND_NR | Zustand Zahnstangenmitte gelernt | 0-n | - | - | unsigned char | TAB_EPS_ZAHNSTANGENMITTE_WERT | - | - | - | - | 22 | - | - |
| GELERNTER_ZAHNSTANGENWEG | 0xDFDD | - | GELERNTER_ZAHNSTANGENWEG | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFDD_D |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| FLASH_UPDATE_MULTITURNZAEHLER | 0x1234 | - | Flash Update des Multiturnzählers | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1234_R |

### TAB_EPS_MOMENTENSENSOR

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | NOK |

### TAB_EPS_WERT

| WERT | TEXT |
| --- | --- |
| 0x00 | Geradeauslauf-Offset nicht geschrieben und Index Position bzw Zahnstangenmitte nicht gefunden |
| 0x01 | Geradeauslauf-Offset nicht geschrieben und Index Position bzw Zahnstangenmitte gefunden |
| 0x02 | Geradeauslauf-Offset geschrieben und Index Position bzw Zahnstangenmitte nicht gefunden |
| 0x03 | Geradeauslauf-Offset geschrieben und Index Position bzw Zahnstangenmitte gefunden und gespeichert und Ist_Position_EPS gültig |
| 0xFF | ungültig |

### TAB_EPS_ZAHNSTANGENMITTE_WERT

| WERT | TEXT |
| --- | --- |
| 0 | Zahnstangenmitte nicht gelernt |
| 1 | Zahnstangenmitte  gelernt |
| 255 | Ungültig |

### TAB_STATUS_ROUTINE_EPS

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Abbruch |
| 0x04 | Fehler |
| 0x05 | Phasenende |
| 0x0A | kein garage mode |
| 0x0B | Geschwindigkeit Fahrzeug zu hoch |
| 0x0C | Hands on detection |
| 0x0D | allgemeine Abschaltung |
| 0x0E | Index nicht gefunden |
| 0xFF | Ungültig |

### TAB_STAT_PIC

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Laeuft |
| 2 | Fertig |

### TAB_STAT_SERVICE

| WERT | TEXT |
| --- | --- |
| 0 | fertig |
| 1 | aktiv |

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
