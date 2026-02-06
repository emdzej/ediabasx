# lim_i1.prg

## General

|  |  |
| --- | --- |
| File | lim_i1.prg |
| Type | PRG |
| Jobs | 34 |
| Tables | 49 |
| Origin | BMW EA-451 Matthias_Schlicker |
| Revision | 3.012 |
| Author | ALTRAN-DEUTSCHLAND-S.A.S.& EA-451 Ott |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Ladeinterfacemodul SGBD-Index 0x0F1BC0 |  |  |
| ORIGIN | string | BMW EA-451 Matthias_Schlicker |  |  |
| REVISION | string | 3.012 |  |  |
| AUTHOR | string | ALTRAN-DEUTSCHLAND-S.A.S.& EA-451 Ott |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.96 |  |  |
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

### ARG_0XDB0E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ZV_LADESTECKER | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Steuern Aktuator AC-Steckerverriegelung (China vorn) 0 = entriegeln, 1 = verriegeln |

### ARG_0XDE6B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOSPITALITY_FUNKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: nicht aktiv 0x01: aktiv |

### ARG_0XDEF0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ZV_LADESTECKER | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ansteuern des Ladestecker (nur bei Typ 2 Stecker, China DC = Fanghakenverriegelung vorn): 0 = entriegeln, 1 = verriegeln |

### ARG_0XDEF1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ZV_LADEKLAPPE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ansteuern der Ladeklappe (0 = entriegeln, 1 = verriegeln) |

### ARG_0XDEF3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LED_LADESTATUS | 0-n | high | unsigned char | - | LADEN_LED_STATUSANZEIGE | - | - | - | - | - | Ansteuern LED für Ladestatus (Leuchtprofile) |

### ARG_0XDEF4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LED_SUCHBELEUCHTUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ansteuern LED für Suchbeleuchtung (0 = nicht angesteuert, 1 = angesteuert) |

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
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x021400 | Energiesparmode aktiv | 0 | - |
| 0x021408 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x021409 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02140A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02140B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02140C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02140D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF14 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x805500 | Ladeanschlussklappe: Verriegelung, Leitungsunterbrechung | 0 | - |
| 0x805501 | Ladeanschlussklappe: Verriegelung, Kurzschluss nach Masse | 0 | - |
| 0x805502 | Ladeanschlussklappe: Verriegelung, Kurzschluss nach Plus | 0 | - |
| 0x805503 | Ladeanschluss: Verriegelung des Ladesteckers, Leitungsunterbrechung | 0 | - |
| 0x805504 | Ladeanschluss: Verriegelung des Ladesteckers, Kurzschluss nach Masse | 0 | - |
| 0x805505 | Ladeanschluss: Verriegelung des Ladesteckers, Kurzschluss nach Plus | 0 | - |
| 0x805506 | Signalleitung Ladebereitschaft, Leitungsunterbrechung | 0 | - |
| 0x805507 | Signalleitung Ladebereitschaft, Kurzschluss nach Masse | 0 | - |
| 0x805508 | Signalleitung Ladebereitschaft, Kurzschluss nach Plus | 0 | - |
| 0x80550B | Suchbeleuchtung Ladeanschluss: Ansteuerung, Kurzschluss nach Masse | 0 | - |
| 0x80550C | Suchbeleuchtung Ladeanschluss: Ansteuerung, Kurzschluss nach Plus oder Leitungsunterbrechung | 0 | - |
| 0x80550D | Statusanzeige Laden: Ansteuerung, Kurzschluss nach Plus oder Leitungsunterbrechung | 0 | - |
| 0x80550E | Statusanzeige Laden: Ansteuerung, Kurzschluss nach Masse | 0 | - |
| 0x805510 | AC-Laden: PWM-Signal, Pegel kleiner als 1 Volt, Ladestrom unterbrochen | 1 | - |
| 0x805511 | AC-Laden: PWM-Signal, Pegel ausserhalb Sollbereich | 1 | - |
| 0x805512 | AC-Laden: PWM-Signal, Frequenz ausserhalb Sollbereich | 1 | - |
| 0x805513 | AC-Laden: PWM-Signal, Tastverhältnis ausserhalb Sollbereich | 1 | - |
| 0x805514 | AC-Laden, Ladeanschluss an Steuergerät nicht angeschlossen | 0 | - |
| 0x805515 | DC-Laden, Ladeanschluss an LIM nicht angeschlossen | 0 | - |
| 0x805516 | Entriegelung des Ladesteckers (Typ 1): Dauerbetätigung | 1 | - |
| 0x805517 | AC-Laden: Ladesteckererkennung unplausibel | 1 | - |
| 0x805518 | DC-Laden: Ladesteckererkennung unplausibel | 1 | - |
| 0x805519 | PLC Datenleitung, Kommunikationsfehler | 1 | - |
| 0x80551A | DC-Laden: Fehler beim Start des Ladevorgangs | 1 | - |
| 0x80551D | DC-Laden, Relaisbox: Ansteuerung Schaltschütz Minuspol, Leitungsunterbechung | 0 | - |
| 0x80551E | DC-Laden, Relaisbox: Ansteuerung Schaltschütz Minuspol, Kurzschluss nach Masse | 0 | - |
| 0x80551F | DC-Laden, Relaisbox: Ansteuerung Schaltschütz Minuspol, Kurzschluss nach Plus | 0 | - |
| 0x805520 | DC-Laden, Relaisbox: Ansteuerung Schaltschütz Pluspol, Leitungsunterbechung | 0 | - |
| 0x805521 | DC-Laden, Relaisbox: Ansteuerung Schaltschütz Pluspol, Kurzschluss nach Masse | 0 | - |
| 0x805522 | DC-Laden, Relaisbox: Ansteuerung Schaltschütz Pluspol, Kurzschluss nach Plus | 0 | - |
| 0x805523 | DC-Laden, Relaisbox: Minuspol, Schaltschütz klebt | 0 | - |
| 0x805524 | DC-Laden, Relaisbox: Pluspol, Schaltschütz klebt | 0 | - |
| 0x805525 | DC-Laden, Relaisbox: Spannungsmessung, Kurzschluss nach Masse oder Leitungsunterbrechung | 0 | - |
| 0x805526 | DC-Laden, Relaisbox: Spannungsmessung, Kurzschluss nach Plus | 0 | - |
| 0x805527 | DC-Laden, Relaisbox: Spannungsmessung unplausibel | 0 | - |
| 0x805528 | AC-Laden, Notbetrieb detektiert | 0 | - |
| 0x805529 | DC-Laden: unerwartete Hochvolt-Spannung an der Ladeanschluss erkannt | 0 | - |
| 0x80552A | DC-Laden, Relaisbox: Notöffnung der Schaltschütze | 0 | - |
| 0x80552B | Ladeanschlussklappe und Ladeanschluss: Status unplausibel | 0 | - |
| 0x80552C | AC-Laden: unerwartete Spannung an der Ladevorrichtung detektiert | 1 | - |
| 0x80552D | AC-Laden und DC-Laden: Stecker gleichzeitig an beiden Ladeanschlüsse gesteckt. | 1 | - |
| 0x80552E | Ladeanschlussklappe, Hallsensor: Kurzschluss nach Masse | 0 | - |
| 0x80552F | Ladeanschlussklappe, Hallsensor: Kurzschluss nach Plus | 0 | - |
| 0x805530 | LIM: Steuergeräte interner Fehler | 0 | - |
| 0x805531 | AC-Laden: PWM-Signal, Kurzschluss nach Plus | 0 | - |
| 0x805532 | Ladeanschluss: Verriegelung des Ladesteckers, Zustand unplausibel | 0 | - |
| 0x805533 | DC-Laden, Signalleitung Laden-Erlaubnis: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 | - |
| 0x805534 | DC-Laden, Signalleitung Laden-Erlaubnis: Kurzschluss nach Plus | 0 | - |
| 0x805535 | AC-Laden: kein Ladestecker erkannt obwohl Ladesterckerverriegelung aktiv | 0 | - |
| 0x805536 | Ladeanschluss: Sensor der Ladesteckerverriegelung, Kurzschluss nach Masse | 0 | - |
| 0x805537 | Ladeanschluss: Sensor der Ladesteckerverriegelung, Kurzschluss nach Plus | 0 | - |
| 0x805538 | DC-Laden: Ladespannung unplausibel | 0 | - |
| 0x805539 | DC-Laden: Keine Ladespannung obwohl Ansteuerung zum Schliessen der Schaltschütze aktiv | 0 | - |
| 0x80553A | AC-Laden: PWM-Signal unplausibel | 0 | - |
| 0x80553B | Ladeanschluss: Sensor der Ladesteckerverriegelung, Leitungsunterbrechung | 0 | - |
| 0x80553C | AC-Laden: Ladesteckererkennung, Kurzschluss nach Plus | 0 | - |
| 0x80553D | Weckleitung Klemme 15, Kurzschluss nach Masse | 0 | - |
| 0x80553E | Ladeanschluss: Sensor der Ladesteckerverriegelung, Kurzschluss nach Masse | 0 | - |
| 0x80553F | Ladeanschluss: Sensor der Ladesteckerverriegelung, Kurzschluss nach Plus | 0 | - |
| 0x805540 | Ladeanschluss: Verriegelung des Ladesteckers, Leitungsunterbrechung | 0 | - |
| 0x805541 | Ladeanschluss: Verriegelung des Ladesteckers, Kurzschluss nach Masse | 0 | - |
| 0x805542 | Ladeanschluss: Verriegelung des Ladesteckers, Kurzschluss nach Plus | 0 | - |
| 0x805545 | Ladeanschluss vorn (China): Aktuator Frontklappe Fanghakenverriegelung, Kurzschluss nach Plus | 0 | - |
| 0x805546 | DC-Laden (China): Unterbrechung des Ladevorgangs wegen Übertemperatur am Ladeanschluss | 1 | - |
| 0x805547 | DC-Laden (China): Reduzierung der Ladeleistung wegen Übertemperatur am Ladeanschluss | 1 | - |
| 0x805548 | Ladeanschluss vorn (China): Aktuator Frontklappe Fanghakenverriegelung, Leitungsunterbrechung | 0 | - |
| 0x805549 | Ladeanschluss vorn (China): Aktuator Frontklappe Fanghakenverriegelung, Kurzschluss nach Masse | 0 | - |
| 0xCE040A | FA-CAN Control Module Bus OFF | 0 | - |
| 0xCE0486 | A-CAN Control Module Bus OFF | 0 | - |
| 0xCE0BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xCE0C09 | DC-CAN Control Module Bus OFF | 0 | - |
| 0xCE1400 | DC-Laden: DC-CAN-Bus, Signal ungültig | 1 | - |
| 0xCE1401 | DC-Laden: DC-CAN-Bus, Botschaft von der Ladestation fehlt | 1 | - |
| 0xCE1402 | Botschaft (Zustand Fahrzeug, 0x3C) fehlt, Empfänger LIM, Sender ZGW | 1 | - |
| 0xCE1403 | Botschaft (Ist Daten Ladeelektronik, 0x108) fehlt, Empfänger LIM, Sender AE | 1 | - |
| 0xCE1404 | Botschaft (Status Hochvolt-Batterieeinheit 2, 0x112) fehlt, Empfänger LIM, Sender SME | 1 | - |
| 0xCE1405 | Botschaft (Klemmen, 0x12F) fehlt, Empfänger LIM, Sender BDC | 1 | - |
| 0xCE1406 | Botschaft (Fahrzeugsgeschwindigkeit, 0x1A1) fehlt, Empfänger LIM, Sender DSC | 1 | - |
| 0xCE1407 | Botschaft (Ladestatus 3, 0x2F1) fehlt, Empfänger LIM, Sender AE | 1 | - |
| 0xCE1408 | Botschaft (Begrenzung Ladung Entladung Hochvolt-Batterie, 0x2F5) fehlt, Empfänger LIM, Sender SME | 1 | - |
| 0xCE1409 | Botschaft (Zentralverriegelung und Klappenzustand, 0x2FC) fehlt, Empfänger LIM, Sender BDC | 1 | - |
| 0xCE140A | Botschaft (LCD Helligkeit Regelung, 0x393) fehlt, Empfänger LIM, Sender KOMBI | 1 | - |
| 0xCE140B | Botschaft (Steuerung Zentralverriegelung, 0x2A0) fehlt, Empfänger LIM, Sender BDC | 1 | - |
| 0xCE140C | Botschaft (Ladestatus 2, 0x2FA) fehlt, Empfänger LIM, Sender AE | 1 | - |
| 0xCE140D | Botschaft (Relativzeit, 0x328) fehlt, Empfänger LIM, Sender KOMBI | 1 | - |
| 0xCE140E | Botschaft (Kilometerstand und Reichweite, 0x330) fehlt, Empfänger LIM, Sender KOMBI | 1 | - |
| 0xCE140F | Botschaft (Fahrzeugzustand, 0x3A0) fehlt, Empfänger LIM, Sender ZGW | 1 | - |
| 0xCE1410 | Botschaft (Ladestatus, 0x3E9) fehlt, Empfänger LIM, Sender AE | 1 | - |
| 0xCE1411 | Botschaft (Daten Antriebsstrang 2, 0x3F9) fehlt, Empfänger LIM, Sender EDME | 1 | - |
| 0xCE1412 | Botschaft (Modus Spannungsgesteuert, 0x432) fehlt, Empfänger LIM, Sender SME | 1 | - |
| 0xCE1413 | Botschaft (Hochvolt-Batterie, 0x431) fehlt, Empfänger LIM, Sender SME | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x2001 | ChargeReadiness | 0-n | Low | 0xFF | ST_CHGRDY_VALUE | - | - | - |
| 0x2002 | ChargeStatus | 0-n | Low | 0xFF | ST_CHGNHG_VALUES | - | - | - |
| 0x4001 | AVL_U_LINK | V | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x4002 | U_DC_IN | V | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### HOSPITALITY_VALUE

| WERT | TEXT |
| --- | --- |
| 0 | Inactive |
| 1 | Active |

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
| 0x000001 | CANTRCV_TJA1041_E_NO_TRCV_CTRL | 0 | - |
| 0x000002 | ECUM_E_RAM_CHECKED_FAILED | 0 | - |
| 0x000006 | PDUR_E_INIT_FAILED | 0 | - |
| 0x000007 | PDUR_E_PDU_INSTANCE_LOST | 0 | - |
| 0x000032 | CANTP_E_OPER_NOT_SUPPORTED | 0 | - |
| 0x000033 | CANSM_E_MODE_CHANGE_NETWORK_0 | 0 | - |
| 0x000034 | CANSM_E_BUSOFF_NETWORK_0 | 0 | - |
| 0x000035 | CANSM_E_SETTRSCVMODE_NETWORK_0 | 0 | - |
| 0x000036 | CANIF_E_INVALID_DLC | 0 | - |
| 0x000037 | FRSM_E_CLUSTER_STARTUP | 0 | - |
| 0x000038 | FRNM_E_INIT_FAILED | 0 | - |
| 0x0000BC | FEE_FORMAT_FAILED | 0 | - |
| 0x0000BD | FEE_STARTUP_FAILED | 0 | - |
| 0x00021D | CANSM_E_MODE_CHANGE_NETWORK_1 | 0 | - |
| 0x000231 | CANSM_E_SETTRSCVMODE_NETWORK_1 | 0 | - |
| 0x001001 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 | - |
| 0x002BDA | MCU_E_WRITE_FAILURE | 0 | - |
| 0x002BDB | MCU_E_POWER_DOWN_MODE_FAILURE | 0 | - |
| 0x002BE2 | ADC_E_TIMEOUT | 0 | - |
| 0x002BE4 | MCU_E_TIMEOUT_TRANSITION | 0 | - |
| 0x002C23 | PORT_E_WRITE_FAILURE | 0 | - |
| 0x01B6DE | SPI_E_TIMEOUT | 1 | - |
| 0x01B6DF | SPI_E_SEQ_FAILED | 0 | - |
| 0x805543 | PLC_ERROR_REASON | 0 | - |
| 0x805544 | HOSPITALITY_FUNCTION | 0 | - |
| 0x80557E | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 | - |
| 0x80557F | Puffer für ausgehende Fehlermeldungen ist voll | 1 | - |
| 0x8BAC04 | CAN_E_TIMEOUT | 1 | - |
| 0x8BAC05 | CANIF_E_FULL_TX_BUFFER | 0 | - |
| 0x8BAC08 | CANIF_E_STOPPED | 0 | - |
| 0x8BAC09 | CANNM_E_CANIF_TRANSMIT_ERROR_FORMER | 0 | - |
| 0x8BAC10 | CANNM_E_INIT_FAILED_FORMER | 0 | - |
| 0x8BAC11 | CANTP_E_COM | 0 | - |
| 0x8BAC12 | CANNM_E_NETWORK_TIMEOUT | 1 | - |
| 0x8BAC13 | CANNM_E_TX_PATH_FAILED | 0 | - |
| 0x8BAC30 | CSM_E_ERROR_EVENT | 0 | - |
| 0x8BAC50 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 | - |
| 0x8BAC51 | FEE_E_WRITE_FAILED | 0 | - |
| 0x8BAC52 | FEE_E_STARTUP_FAILED | 0 | - |
| 0x8BAC53 | FLS_E_COMPARE_FAILED | 0 | - |
| 0x8BAC55 | FLS_E_ERASE_FAILED | 0 | - |
| 0x8BAC57 | FLS_E_READ_FAILED | 0 | - |
| 0x8BAC59 | FLS_E_WRITE_FAILED | 0 | - |
| 0x8BAC61 | FRIF_E_JLE_SYNC | 0 | - |
| 0x8BAC63 | IPDUM_E_TRANSMIT_FAILED | 0 | - |
| 0x8BAC64 | LINIF_E_NC_NO_RESPONSE | 0 | - |
| 0x8BAC65 | LINIF_E_RESPONSE | 0 | - |
| 0x8BAC66 | MCU_E_CLOCK_FAILURE | 0 | - |
| 0x8BAC70 | NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x8BAC73 | NVM_E_REQ_FAILED | 0 | - |
| 0x8BAC78 | PIA_E_IO_ERROR | 1 | - |
| 0x8BAC82 | VSM_EVENT_VEHICLESTATE | 0 | - |
| 0x8BAC83 | WDG_E_DISABLE_REJECTED | 0 | - |
| 0x8BAC84 | WDG_E_MODE_SWITCH_FAILED | 0 | - |
| 0x8BAC85 | WDGM_E_ALIVE_SUPERVISION | 0 | - |
| 0x8BAC86 | WDGM_E_SET_MODE | 0 | - |
| 0x8BAC8E | WDG_23_DRVA_E_DISABLE_REJECTED | 0 | - |
| 0x8BAC8F | WDG_23_DRVB_E_DISABLE_REJECTED | 0 | - |
| 0x8BACA1 | WDG_23_DRVB_E_MODE_SWITCH_FAILED | 0 | - |
| 0x8BACA2 | WDG_23_DRVA_E_MODE_SWITCH_FAILED | 0 | - |
| 0xE89400 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x2003 | PLC_ERROR_CODE | 0-n | High | 0xFF | PLC_ERROR_COD_VALUES | - | - | - |
| 0x2004 | PLC_ERROR_VALUE | 0-n | High | 0xFF | PLC_ERROR_VALUE_VALUES | - | - | - |
| 0x4000 | HOSPITALITY_VALUE | 0-n | High | 0xFF | HOSPITALITY_VALUE | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### LADEN_LED_STATUSANZEIGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Initialisierung (Blinken Orange) |
| 0x02 | Ladebereitschaft (Dauer Ein Blau) |
| 0x03 | Laden (Blinken Blau) |
| 0x04 | Ladeende (Dauer Ein Grün) |
| 0x05 | Fehler (Blinken in Gruppen Rot) |
| 0x06 | Suchbeleuchtung (Dauer Ein Weiß) |

### PLC_ERROR_COD_VALUES

| WERT | TEXT |
| --- | --- |
| 0 | STAGE_PLUG_DETECTION |
| 1 | STAGE_PLC_ENABLE |
| 2 | STAGE_SLAC |
| 3 | STAGE_IPv6_SLAAC |
| 4 | STAGE_GET_SOCKET |
| 5 | STAGE_TCP_CONNECT |
| 6 | STAGE_HANDSHAKE |
| 7 | STAGE_SESSION_SETUP |
| 8 | STAGE_SERVICE_DISCOVERY |
| 9 | STAGE_SERVICE_PAYMENT_SELECTION |
| 10 | STAGE_CONTRACT_AUTHENTICATION |
| 11 | STAGE_CHARGE_PARAMETER_DISCOVERY |
| 12 | STAGE_CABLE_CHECK |
| 13 | STAGE_PRE_CHARGE |
| 14 | STAGE_CURRENT_DEMAND |
| 15 | STAGE_POWER_DELIVERY |
| 16 | STAGE_WELDING_DETECTION |
| 17 | STAGE_TERMINATE_CHARGING |
| 18 | STAGE_CHARGING_COMPLETED |

### PLC_ERROR_VALUE_VALUES

| WERT | TEXT |
| --- | --- |
| 0 | ERROR_CAN_SIGNAL_FAILED |
| 1 | ERROR_CHARGE_READY_FAILED |
| 2 | ERROR_CHARGING_CABLE_NOT_LOCKED |
| 3 | ERROR_CHARGING_PHASE_NOT_EXPECTED |
| 4 | ERROR_CHARGING_PHASE_SHUTDOWN |
| 5 | ERROR_COMBO_MODE_INTERRUPTED |
| 6 | ERROR_CONTACTOR_STATUS |
| 7 | ERROR_CONTACTORS_FAILED_TO_CLOSE |
| 8 | ERROR_CONTACTORS_OVERVOLTAGE |
| 9 | ERROR_FAILED_TO_LINK |
| 10 | ERROR_HW |
| 11 | ERROR_OK |
| 12 | ERROR_PILOT_FUNCTIONAL_CHECK |
| 13 | ERROR_PLC_ERROR |
| 14 | ERROR_PLC_FAILED_TO_BOOT |
| 15 | ERROR_REQUEST_FAILED |
| 16 | ERROR_RESPONSE_NOK |
| 17 | ERROR_RESPONSE_TIMEOUT |
| 18 | ERROR_RQ_OPEN_CONTACTORS |
| 19 | ERROR_RX_SYNC_FAILED |
| 20 | ERROR_SEQUENCE_TIMEOUT |
| 21 | ERROR_SET_MAC_FAILED |
| 22 | ERROR_SLAC_FAILED |
| 23 | ERROR_WRONG_STAGE |
| 24 | ERROR_WRONG_SUPPORTED_CHARGE_TYPE |
| 25 | ERROR_EMERGENCY_SHUTDOWN_FROM_EVSE |
| 250 | (in SLAC stage) ERROR_TOO_HIGH_SLAC_ATTENUATION in dB |
| 251 | (in SLAC stage) ERROR_NO_RESPONSE |
| 252 | (in SLAC stage) ERROR_GENERAL_FAILURE |

### RES_0X2541_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALID_TEXT | TEXT | high | string[16] | - | - | 1.0 | 1.0 | 0.0 | Cal-ID auslesen (hier muss die Cal-ID wie bei Mode $09 (PID $04) ausgegeben werden). |
| STAT_CVN_WERT | HEX | high | unsigned long | - | - | - | - | - | CVN auslesen (hier muss die CVN wie bei Mode $09 (PID $06) ausgegeben werden) |

### RES_0XDB0E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_LADESTECKER_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status Aktuator AC-Steckerverriegelung vorn (0 = entriegelt, 1 = verriegelt). |
| STAT_LADESTECKER_EIN | 0-n | high | unsigned char | - | ZV_LADESTECKER | - | - | - | Status Sensor AC-Steckerverriegelung vorn (0 = entriegelt, 1 = verriegelt). |

### RES_0XDE6B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOSPITALITY_FUNKTION | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: nicht aktiv 0x01: aktiv |

### RES_0XDEF0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_LADESTECKER_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status Aktuator Ladestecker (0 = entriegelt, 1 = verriegelt). Steckertyp- und Marktabhängig (China DC = Fanghakenverriegelung vorn) |
| STAT_LADESTECKER_EIN | 0-n | high | unsigned char | - | ZV_LADESTECKER | - | - | - | Status Sensor Ladestecker (0 = entriegelt, 1 = verriegelt). Steckertyp- und Marktabhängig (China DC = Fanghakenverriegelung vorn). |

### RES_0XDEF1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_LADEKLAPPE_EIN | 0-n | high | unsigned char | - | TAB_ZV_LADEKLAPPE | - | - | - | Zustand Verriegelung Ladeklappe |
| STAT_LADEKLAPPE | 0-n | high | unsigned char | - | TAB_LADEKLAPPE | - | - | - | Zustand der Ladeklappe |

### RES_0XDEF3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_LADESTATUS_EIN | 0-n | high | unsigned char | - | LADEN_LED_STATUSANZEIGE | - | - | - | Zustand LED für Ladestatus (0 = nicht angesteuert, 1 = angesteuert) |

### RES_0XDEF4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SUCHBELEUCHTUNG_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Zustand LED für Suchbeleuchtung (0 = nicht angesteuert, 1 = angesteuert) |

### RES_0XDEF5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STECKER_NR | 0-n | high | unsigned char | - | TAB_LIM_STECKER | - | - | - | Zustand des Steckers |
| STAT_STROMTRAGFAEHIGKEIT_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stromtragfähigkeit des angeschlossenen Kabels |

### RES_0XDEF6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PILOT_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | Zustand des Pilotsignals (0 = nicht aktiv, 1 = aktiv) |
| STAT_PILOT_PWM_DUTYCYCLE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tastverhältnis PWM Pilotsignal |
| STAT_PILOT_CURRENT_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Errechneter Stromwert aus Pilotsignal |
| STAT_PILOT_LADEBEREIT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand Ladebereitschaft Fahrzeug (0 = nicht ladebereit, 1 = ladebereit) |
| STAT_PILOT_FREQUENZ_WERT | Hz | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Frequenz des Pilotsignals |
| STAT_PILOT_PEGEL_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Pegel des Pilotsignals |

### RES_0XDEF7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHARGE_CONTROL_1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand Charge control 1 Leitung (0 = nicht aktiv, 1 = aktiv) |
| STAT_CHARGE_CONTROL_2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand Charge control 2 Leitung (0 = nicht aktiv, 1 = aktiv) |
| STAT_CHARGE_PERMISSION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand Charge Permission Leitung (0 = nicht aktiv, 1 = aktiv) |
| STAT_LADESTECKER | 0/1 | high | unsigned char | - | - | - | - | - | Zustand Ladestecker (0 = nicht gesteckt, 1 = gesteckt) |

### RES_0XDEF9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DC_SCHUETZ_SPANNUNG_EINGANG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannung am Eingang der Relaisbox (Schaltschütze) für DC-Laden |
| STAT_DC_SCHUETZ_SPANNUNG_NEGATIV | 0/1 | high | unsigned char | - | - | - | - | - | Erkennung einer negativen Spannung (0 = keine oder positive Spannung / 1 = negative Spannung) |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATUS_CALCVN | 0x2541 | - | Cal-ID (Calibration-ID) und CVN(Calibration Verification Number) auslesen. (OBD-Umfänge)   Byte-Layout: 20 Byte lang 00-15 = STAT_CALID_WERT 16-19 = STAT_CVN_EINH als Hex  unit32 im Intel Format | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2541_D |
| ZV_LADESTECKER_CN | 0xDB0E | - | Aktuator AC-Steckerverriegelung (China vorn) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDB0E_D | RES_0xDB0E_D |
| LADESTECKDOSE_TEMPERATUR | 0xDB0F | STAT_LADESTECKDOSE_TEMP_WERT | Temperatur der DC-Ladeanschluss in °C (China) | °C | - | High | unsigned int | - | 1.0 | 10.0 | -40.0 | - | 22 | - | - |
| LADEN_HOSPITALITY_FUNKTION | 0xDE6B | - | Hospitality-Funktion (Automatisches Entriegeln des Ladesteckers nach Ende des Ladevorgangs). | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDE6B_D | RES_0xDE6B_D |
| ZV_LADESTECKER | 0xDEF0 | - | Status und Steuern Ladestecker (Steckertyp- und Marktabhängig) 0 = entriegelt, 1 = verriegelt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDEF0_D | RES_0xDEF0_D |
| ZV_LADEKLAPPE | 0xDEF1 | - | Status oder Steuern loading flap (0 = entriegelt, 1 = verriegelt) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDEF1_D | RES_0xDEF1_D |
| LADEBEREITSCHAFT_LIM | 0xDEF2 | STAT_LADEBEREITSCHAFT_LIM | Ladebereitschaft (HW-Leitung), (1 = ja, 0 = nein) vom LIM an SLE gesendet | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| LED_LADESTATUS | 0xDEF3 | - | Zustand oder Ansteuern LED für Ladestatus (RGB-Leuchtring) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDEF3_D | RES_0xDEF3_D |
| LED_SUCHBELEUCHTUNG | 0xDEF4 | - | Zustand oder Ansteuern der LED für Suchbeleuchtung (0 = nicht angesteuert, 1 = angesteuert) - nur für separate DC-Ladedose | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDEF4_D | RES_0xDEF4_D |
| PROXIMITY | 0xDEF5 | - | Aktueller Zustand des Proximity | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEF5_D |
| PILOTSIGNAL | 0xDEF6 | - | aktuelle Daten des Pilotsignals über den Ladestrom | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEF6_D |
| LADESCHNITTSTELLE_DC_TEPCO | 0xDEF7 | - | Status der Chargecontroll Leitungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEF7_D |
| DC_SCHUETZ_SCHALTER | 0xDEF8 | STAT_DC_SCHUETZ_SCHALTER | Status Schützschalter (DC-Laden) | 0-n | - | High | unsigned char | TAB_DC_SCHUETZ_SCHALTER | - | - | - | - | 22 | - | - |
| DC_SCHUETZ_SPANNUNG_EINGANG | 0xDEF9 | - | Spannung am Eingang der Relaisbox (Schaltschütze) für DC-Laden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEF9_D |
| DC_PINABDECKUNG_COMBO | 0xDEFA | STAT_DC_PINABDECKUNG | Zustand der DC Pinabdeckung bei Combo-Steckdose (0 = geschlossen, 1 = geöffnet) | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |

### ST_CHGNHG_VALUES

| WERT | TEXT |
| --- | --- |
| 0 | No Charging |
| 1 | Initialization |
| 2 | Charging |
| 3 | Charge Pause |
| 4 | Charge Completed |
| 5 | Error |

### ST_CHGRDY_VALUE

| WERT | TEXT |
| --- | --- |
| 0 | Inactive |
| 1 | Active |
| 3 | Invalid |

### TAB_DC_SCHUETZ_SCHALTER

| WERT | TEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | geschlossen |
| 0x02 | verschweisste Kontakte |
| 0x03 | Diagnose läuft |

### TAB_LADEKLAPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Offen |
| 0x01 | Geschlossen |
| 0x02 | Fehler - nicht verbaut |
| 0xFF | Wert ungültig |

### TAB_LIM_STECKER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Ladestecker angesteckt |
| 0x01 | Ladestecker angesteckt |
| 0x02 | Ladestecker angesteckt und Entriegelungstaste betätigt |
| 0x03 | ungültiger Zustand |

### TAB_ZV_LADEKLAPPE

| WERT | TEXT |
| --- | --- |
| 0 | entriegelt |
| 1 | verriegelt |
| 3 | Fehler - nicht verbaut |

### ZV_LADESTECKER

| WERT | TEXT |
| --- | --- |
| 0 | Nicht verriegelt |
| 1 | Verriegelt |
| 2 | Fehler |
| 3 | Signal ungültig |
