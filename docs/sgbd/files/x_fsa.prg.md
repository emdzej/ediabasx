# x_fsa.prg

## General

|  |  |
| --- | --- |
| File | x_fsa.prg |
| Type | PRG |
| Jobs | 26 |
| Tables | 114 |
| Origin | BMW UX-EE-2 Warneke |
| Revision | 6.004 |
| Author | BMW-Motorrad UX-EE-1 Kiesewetter, Dräxlmaier UX-EE-1 Rätscher |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad Funktionssatellit |  |  |
| ORIGIN | string | BMW UX-EE-2 Warneke |  |  |
| REVISION | string | 6.004 |  |  |
| AUTHOR | string | BMW-Motorrad UX-EE-1 Kiesewetter, Dräxlmaier UX-EE-1 Rätscher |  |  |
| COMMENT | string | - |  |  |
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

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

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

### ARG_0XB06A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLLPOSITION_WERT | + | + | Schritte | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Sollposition Windschild; Wenn gilt Sollposition ist größer als Position Oberer Anschlag, dann wird die Sollposition gleich oberer Anschlag gesetzt. Wenn gilt Sollposition ist kleiner als Position unterer Anschlag, dann wird die Sollposition gleich unterer Anschlag gesetzt |
| PWM_MOTOR_WERT | + | + | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Tastverhältnis Windschild Motor Ansteuerung |

### ARG_0XB06B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUTOMATIKLAUF_SPERRE_EIN | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1 = Automatiklaufsperre ein 2 = Automatiklaufsperre aus |

### ARG_0XE010_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HUPE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Horn; 1=EIN, 0=AUS |

### ARG_0XE0A3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HUPE_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Hupe Eingang 1=EIN, 0=AUS |

### ARG_0XE100_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZUSATZSCHEINWERFER_1_NSL_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert in %, mit dem der Zusatzscheinwerfer 1 betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |
| ZUSATZSCHEINWERFER_2_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert in %, mit dem der Zusatzscheinwerfer 2 betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### ARG_0XE101_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZSW_ANSTEUERUNG_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zusatzscheinwerfer Funktion Eingang; 1==>ein 0==>aus |
| ABBLENDLICHT_ZSW_EINGANG | 0-n | - | unsigned char | - | TAB_MR_ABBLENDLICHT_ARG | 1.0 | 1.0 | 0.0 | - | - | Eingang Abblendlicht Zusatzscheinwerfer Funktion |

### ARG_0XE103_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINDSCHILD_EINGANG | 0-n | - | unsigned char | - | TAB_MR_WINDSCHILD_EINGANG_ARG | 1.0 | 1.0 | 0.0 | - | - | Windschild Eingang |

### ARG_0XE104_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABBLEND_FERNLICHT_PWM_WERT_1 | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert in %, mit dem das Abblend- bzw. Fernlicht betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### ARG_0XE105_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINDSCHILD_VERFAHREN | 0-n | - | unsigned char | - | TAB_MR_WINDSCHILD_ARG | 1.0 | 1.0 | 0.0 | -12.8 | 12.7 | Windschild ansteuern |
| PWM_MOTOR_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Tastverhältnis Windschild Motor Ansteuerung |

### ARG_0XE107_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SITZHEIZUNG_FAHRER_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert in %, mit dem die Sitzheizung Fahrer betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |
| SITZHEIZUNG_SOZIUS_BEH_RELAIS_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert in %, mit dem die Sitzheizung Beifahrer betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet Behörde: nur 0% oder 100% zulässig |

### ARG_0XE108_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SITZHEIZUNG_FAHRER_EINGANG_MR | 0-n | - | unsigned char | - | TAB_MR_SITZHEIZUNG_FAHRER_EINGANG_FKT_ARG | 1.0 | 1.0 | 0.0 | - | - | Sitzheizung Fahrer Eingang |
| SITZHEIZUNG_SOZIA__EINGANG_MR | 0-n | - | unsigned char | - | TAB_MR_SITZHEIZUNG_BEIFAHRER_EINGANG_FKT_ARG | 1.0 | 1.0 | 0.0 | - | - | Sitzheizung Beifahrer Eingang |

### ARG_0XE10A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FERNLICHT_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Fernlicht Eingang 1=EIN, 0=AUS |

### ARG_0XE10C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BREMSSCHALTER_HAND_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bremsschalter Hand Eingang 1 ==> betätigt 0 ==> nicht betätigt |
| BREMSSCHALTER_FUSS_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bremsschalter Fuß Eingang 1 ==> betätigt 0 ==> nicht betätigt |

### ARG_0XE10D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BREMSLICHT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert in %, mit dem das Bremslicht KL_54 betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### ARG_0XFD01_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LOAD_REJECT_CODING_MATRIX_WERT | HEX | high | unsigned int | - | - | - | - | - | - | - | Load reject Coding Matrix |
| STAT_DUTYLOWHIGHBEAML_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Duty cycle Low/High Beam light. |
| STAT_DUTYBRAKELIGHT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Duty cycle Brake light. |
| STAT_DUTYADDITIONALLIGHT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Duty cycle Additional light. |
| STAT_DUTYREARFOGLIGHT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Duty cycle Rear Fog light. |
| STAT_BASICFREQUENCYPWM_WERT | Hz | high | unsigned char | - | - | 1.0 | 1.0 | -60.0 | 60.0 | 100.0 | cfg_basicFrequencyPWM |
| STAT_BITFIELD_1_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_LowHighBeamActive 0x02 cfg_BrakeLightActive 0x04 cfg_AddLightActive 0x08 cfg_HornActive |
| STAT_BITFIELD_2_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_LowBeamUseXenon 0x02 cfg_CANInputLowHighBeam 0x04 cfg_CharBrakeLight 0x08 cfg_AddLightTypeLoad |
| STAT_BITFIELD_3_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_AddLightPushOrCAN |
| STAT_CFG_ABSSWITCHDEBTIME_WERT | ms | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | 0.0 | 2550.0 | Avoid switching on the brakelight during codified debounce time due to invalid value or switch defect signal arrival coming from the ABS module. |
| STAT_CFG_LOWBEAMSTARTUPDELAY_WERT | ms | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | 0.0 | 2550.0 | Once the application from the ecu wants to activate the output lbl, it must wait until the time is over according to coding parameter. |
| STAT_BITFIELD_4_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_SHDPushButtonStMach 0x02 cfg_SHDActivBUSOrPushBut 0x04 cfg_SHDPresent 0x08 cfg_SHDAmbTempControl 0x10 cfg_SHDMemoryFunctAct 0x20 cfg_SHPSHDSwitchOffEngineIdle 0x40 cfg_SHPSHDSwitchOffOrDutyCycle |
| STAT_CFG_SHDNUMSTEPSPUSHBUT_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 6.0 | Number of pwm steps push button |
| STAT_CFG_SHDPWMSTEP1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating level 1 |
| STAT_CFG_SHDPWMSTEP2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating level 2 |
| STAT_CFG_SHDPWMSTEP3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating level 3 |
| STAT_CFG_SHDPWMSTEP4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating level 4 |
| STAT_CFG_SHDPWMSTEP5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating level 5 |
| STAT_CFG_SHDPWMSTEP6_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating level 6 |
| STAT_CFG_SHDCHARCURVETEMP1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 40.0 | -40.0 | 215.0 | Seat Heater Driver Char Curve Temp |
| STAT_CFG_SHDCHARCURVETEMP2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 40.0 | -40.0 | 215.0 | Seat Heater Driver Char Curve Temp |
| STAT_CFG_SHDCHARCURVETEMP3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 40.0 | -40.0 | 215.0 | Seat Heater Driver Char Curve Temp |
| STAT_CFG_SHDCHARCURVETEMP4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 40.0 | -40.0 | 215.0 | Seat Heater Driver Char Curve Temp |
| STAT_CFG_SHDCHARCURVETEMP5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 40.0 | -40.0 | 215.0 | Seat Heater Driver Char Curve Temp |
| STAT_CFG_SHDCHARCURVEPWM1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating driver char curve heating duty |
| STAT_CFG_SHDCHARCURVEPWM2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating driver char curve heating duty |
| STAT_CFG_SHDCHARCURVEPWM3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating driver char curve heating duty |
| STAT_CFG_SHDCHARCURVEPWM4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating driver char curve heating duty |
| STAT_CFG_SHDCHARCURVEPWM5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating driver char curve heating duty |
| STAT_CFG_SHPPWMSTEP1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating pillion  level 1 |
| STAT_CFG_SHPPWMSTEP2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating pillion  level 2 |
| STAT_BITFIELD_5_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_SHPPushOrSwitch 0x02 cfg_SHPAmbTempControl 0x04 cfg_SHPConnectedLoad 0x08 cfg_SHPPresent |
| STAT_CFG_SHPCHARCURVETEMP1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 40.0 | -40.0 | 215.0 | Seat Heater Pillion Char Curve Temp |
| STAT_CFG_SHPCHARCURVETEMP2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 40.0 | -40.0 | 215.0 | Seat Heater Pillion Char Curve Temp |
| STAT_CFG_SHPCHARCURVETEMP3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 40.0 | -40.0 | 215.0 | Seat Heater Pillion Char Curve Temp |
| STAT_CFG_SHPCHARCURVETEMP4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 40.0 | -40.0 | 215.0 | Seat Heater Pillion Char Curve Temp |
| STAT_CFG_SHPCHARCURVETEMP5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 40.0 | -40.0 | 215.0 | Seat Heater Pillion Char Curve Temp |
| STAT_CFG_SHPCHARCURVEPWM1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating pillion char curve heating duty |
| STAT_CFG_SHPCHARCURVEPWM2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating pillion char curve heating duty |
| STAT_CFG_SHPCHARCURVEPWM3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating pillion char curve heating duty |
| STAT_CFG_SHPCHARCURVEPWM4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating pillion char curve heating duty |
| STAT_CFG_SHPCHARCURVEPWM5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Seat heating pillion char curve heating duty |
| STAT_CFG_SHDDUTYCYCLEENGINEIDLE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM range 0...100% to be used by Seat Heating Driver when engine is in idle state |
| STAT_CFG_SHPDUTYCYCLEENGINEIDLE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM range 0...100% to be used by Seat Heating Passenger when engine is in idle state |
| STAT_BITFIELD_7_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_WindshieldActive 0x02 cfg_AutomaticRunActive 0x04 cfg_WinSoftStop 0x08 cfg_WinWithoutRpmUsable 0x01 cfg_WinHallSensorOption 0x02 cfg_WinAntiPitchProtection 0x04 cfg_WinNaviCase 0x08 cfg_WinNaviSwitch |
| STAT_WINCURRENTLIMITNORM_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | 0.0 | 25.5 | Maximum current allowed in windshield in normal use. |
| STAT_WINCURRENTLIMITREF_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | 0.0 | 25.5 | Maximum current allowed in windshield in reference run. |
| STAT_WINCURRENTLIMITCALIB_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | 0.0 | 25.5 | Maximum current allowed in windshield in calibration. |
| STAT_WINHIGHESTPOSITION_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Windshield highest position. Although the range of movement is found in a calibration process, the range can be different in different bikes, so in order to have the same of range of movement in every bike, highest and lowest position are coded here. |
| STAT_WINLOWESTPOSITION_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Windshield lowest position. Although the range of movement is found in a calibration process, the range can be different in different bikes, so in order to have the same of range of movement in every bike, highest and lowest position are coded here. |
| STAT_WINUPPERLIMIT_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Number of pulses away from highest position. Highest allowed position = highest position - cfg_WinUpperLimit |
| STAT_WINLOWERLIMIT_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Number of pulses away from lowest position. Lowest allowed position = lowest position + cfg_WinLowerLimit |
| STAT_WINCALIBATTEMPTS_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Number of consecutive failed calibrations allowed. |
| STAT_WINSUPERIORTIMEOUT_WERT | s | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | 0.1 | 25.5 | Maximum time the windshield is allowed to be moved. |
| STAT_WINMOVESOFTSTOP_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Allowed number of times Windshield reaches top position before Re-Norming. |
| STAT_WINSPEED_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Minimum speed to enable Automatic Run. |
| STAT_WINENGINESPEED_WERT | 1/min | high | unsigned char | - | - | 0.02 | 1.0 | 0.0 | 0.0 | 5100.0 | Minimum engine speed to enable function Windshield. |
| STAT_WINSOFTSTOPPERCENTAGE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Percentage of movement that should be driven with PWM. |
| STAT_WINAPPWAYOFREVERSE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Reverse distance to be covered when Anti Pitch Protection is triggered. |
| STAT_WINAPPRETRIES_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Number of retries for Anti Pitch Protection before locking Automatic Run. |
| STAT_WINAPPT3_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Timer to be used in first retry of Anti Pitch Protection. |
| STAT_WINAPPT4_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Timer to be used in first retry of Anti Pitch Protection. |
| STAT_WINAPPT5_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Timer to be used in first retry of Anti Pitch Protection. |
| STAT_WINMAXTIME_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Time available for the user for closing the NaviCase after switching KL_15 off. |
| STAT_WINT1_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Time available after turning KL_15 off for moving the windshield automatically to rest position. |
| STAT_WINSPEEDNAVICASE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Minimum speed for allowing automatic up movement when NaviCase is configured. |
| STAT_WINENGINESPEEDNAVICASE_WERT | 1/min | high | unsigned char | - | - | 0.02 | 1.0 | 0.0 | 0.0 | 5100.0 | Minimum engine speed for allowing manual movement when NaviCase is configured. |
| STAT_WAPTRANSPULSES_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of pulses in the Windshield motor transient that the Antipinch will discard before evaluating the motor friction. |
| STAT_BITFIELD_8_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_WinAutomaticRunDiagLock 0x02 cfg_WinManualDenorming |
| STAT_CFG_WINDENORMINGMINTIME_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Minimum time (in seconds) needed for keeping the UP button pressed for denorming the windshield. |
| STAT_CFG_WINDENORMINGMAXTIME_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Maximum time (in seconds) needed for keeping the UP button pressed for denorming the windshield. |
| STAT_CFG_WAPSAMPLESNUMBER_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of samples the Antipinch will evaluate for detecting an Antipinch situation. |
| STAT_CFG_WAPTOUGHNESS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Toughness of anti pinch protection. The value refers to the increase of friction allowed in the dc-motor during automatic run. Range: [0% .. 100%] |
| STAT_CFG_WAPMECHANICALFRICTIONFILTER_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Friction tolerance (in %) when moving windshield during initialization, used for filtering the pulses read in the movement beyond the mechanical end. Range: [0..255%] |
| STAT_BITFIELD_9_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_opVehicleTimeout 0x02 cfg_inSCLHTimeout 0x04 cfg_speedTimeout 0x08 cfg_clampStatusTimeout 0x10 cfg_kombiDataTimeout 0x20 cfg_engineData2Timeout 0x40 cfg_stStdFunctTimeout |
| STAT_BITFIELD_10_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_LowBeamLight_OC 0x02 cfg_Horn_OC 0x04 cfg_BrakeLight_OC 0x08 cfg_AddLight1_RearFogL_OC 0x10 cfg_AddLight2_OC 0x20 cfg_SeatHeatDrvAuthRly_OC 0x40 cfg_SeatHeatPillAuth_OC |
| STAT_BITFIELD_11_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_LowBeamLight_STG 0x02 cfg_LowBeamLight_STB 0x04 cfg_Horn_STG 0x08 cfg_Horn_STB 0x10 cfg_BrakeLight_STG 0x20 cfg_BrakeLight_STB 0x40 cfg_AddLight1_RearFogL_STG 0x80 cfg_AddLight1_RearFogL_STB |
| STAT_BITFIELD_12_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_AddLight2_STG 0x02 cfg_AddLight2_STB 0x04 cfg_SeatHeatDivAuthRly_STG 0x08 cfg_SeatHeatDivAuthRly_STB 0x10 cfg_SeatHeatPillAut_STG 0x20 cfg_SeatHeatPillAut_STB |
| STAT_BITFIELD_13_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_AddLightInput_Author_STG 0x02 cfg_SHDriverPushButton_STG 0x04 cfg_SHPillionPos1_2_Active |
| STAT_BITFIELD_14_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_CCPEnable |
| STAT_BITFIELD_15_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_WindMotor1_STG 0x02 cfg_WindMotor2_STG 0x04 cfg_WindMotor1_STB 0x08 cfg_WindMotor2_STB 0x10 cfg_WindMotorX_OC 0x20 cfg_WindHallSensorSup_STG 0x40 cfg_WindHallSensorSup_STB 0x80 cfg_WindHallSensorSup_OC |
| STAT_BITFIELD_16_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_WindCurrent 0x02 cfg_WindWrongCurrentPos 0x04 cfg_WindHallSensor1TimeOut 0x08 cfg_WindHallSensor2TimeOut 0x10 cfg_WindNotCalibrated 0x20 cfg_WindMotor_STB_OFF 0x40 cfg_WindMotor_OppDir 0x80 cfg_WindNotInitialized |
| STAT_CFG_KL15ONDTCDEBOUNCE_WERT | ms | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | 0.0 | 2540.0 | Debouncing period for entering faults in the memory after Terminal 15  on . |
| STAT_BITFIELD_17_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_HighBatteryVoltage 0x02 cfg_LowBatteryVoltage 0x04 cfg_SwFailure 0x08 cfg_HwFailure 0x10 cfg_CANBusOff 0x20 cfg_ProductionMode 0x40 cfg_WinFewPulses 0x80 cfg_WinDenormed |
| STAT_CFG_KL50ONDTCDEBOUNCE_WERT | ms | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | 0.0 | 25400.0 | Debouncing period for entering faults in the memory followin Terminal 50  on . |
| STAT_BITFIELD_18_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 cfg_WinAutoRunLocked |

### ARG_0XFD02_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_VALID_HEATING_STEP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Last valid heating step |
| STAT_BIT_DATA_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | Producation mode 0x01 lastValidAdlState  0x02 |
| STAT_WINDSHIELD_FLAGS_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x01    WinStartReference 0x02    WinCalibFailed 0x04    WinStartRecover 0x08    WinLockedDueToHsTimeout 0x10    WindshieldUserMoving 0x20    WinLockedDueToManual 0x40    WinUpNormed 0x80    WinDownNormed |
| STAT_WIN_CALIB_STATUS | 0-n | high | unsigned char | - | STAT_DIAG_WIN_STATUS | 1.0 | 1.0 | 0.0 | - | - | Windshiled Calib Status |
| STAT_WIN_HIGHEST_POS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Highest position where windshield can be moved. Signal to be updated after a calibration. |
| STAT_WIN_LOWEST_POS_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Lowest position where windshield can be moved. Signal to be updated after a calibration. |
| STAT_WIN_CURRENT_POS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Current position where windshield is placed. |
| STAT_WIN_AUTO_POS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Stores position of the windshield before turning KL_15 off |
| STAT_WIN_CALIB_ATTEMPT_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of consecutive unsuccessful windshield calibrations. |
| STAT_SOFT_STOP_CFG_MOVE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Last value configured in parameter DFA_E05.cfg_WinMoveSoftStop. |
| STAT_SOFT_STOP_COUNTER_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Counter for soft stop feature, according to section in specs   Soft stop / renorming . |
| STAT_WIN_PREV_ESTIMATE_TEMP_WERT | °C | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Estimated temperature inside windshield dc-motor when KL_15 was turned off. |
| STAT_WIN_TIME_SEC_CONTER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Value of CAN signal KMBI_DATA_MOTBK_2010.T_SEC_COU_REL_MOTBK_2010 when turning KL_15 off. |
| STAT_DEFAULT_TEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Informer to be used as initialization of thermal protection algorithm. |
| STAT_WIN_INIT_STATUS | 0-n | high | unsigned char | - | STAT_DIAG_WIN_STATUS | 1.0 | 1.0 | 0.0 | - | - | Windshiled init Status |
| STAT_WIN_INIT_PULSE_FILTER_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Indicates how many pulses have been discarded from the lowest position. |
| STAT_WIN_INIT_FRICTION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Indicates maximum average friction calculated in last initialization. |
| STAT_WIN_INIT_VOLTAGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Indicates average voltage measured in last initialization |
| STAT_WIN_INIT_TEMOPERATURE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Indicates average temperature measured in last initialization |
| STAT_WIN_ABSOLUTE_POSITION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Absolut windshield position. |
| STAT_WIN_INIT_COUNTER_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of initialization runs performed since latest calibration. |
| STAT_WIN_INIT_KILOMETER_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | kilometer reading in latest initialization run, taken from CAN signal MILE_TOT_MOTBK_2010 |
| STAT_WIN_CALIB_CURRENT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | average current consumption of windhsield monitored in latest calibration run. |
| STAT_WIN_CALIB_TIME_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | time needed for performing latest calibration run. |

### ARG_0XFD06_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MANUFACTURING_DATA_1_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_2_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_3_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_4_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_5_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_6_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_7_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_8_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_9_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_10_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_11_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_12_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_13_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_14_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_15_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_16_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_17_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_18_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_19_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_20_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |

### ARG_0XFD0B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WIN_DENORM_REQUEST_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 1.0 | Windshield Denorm Request value |

### ARG_0XFD10_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SET_DATA_TRUE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Set data true argument. Only data 1 is allowed |

### ARG_0XFD20_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATA_1_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x01   spare                   0x02   spare                   0x04   CANStrobe               0x08   PowerRST                0x10   Horn                    0x20   WindshieldMotorDirect2  0x40   WindshieldMotorDirect1  0x80   WindshieldHallSupply |

### ARG_0XFD21_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINDSHIELD_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Windshiled Duty |
| LOW_HIGH_BEAM_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Low High Beam Light Duty |
| ADDTIONAL_LIGHT_2_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Additional Light1 Light Duty |
| SEAT_HEATER_DRIVER_UTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Seat Heater driver duty |
| BRAKE_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Brake Light Duty |
| ADDTIONAL_LIGHT_2__DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Additional Light 2 Light Duty |
| SEAT_HEATER_PILLION_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Seat Heater driver duty |
| PWM_CLOCK_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | PWM Duty |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### DIAG_WINDSHIELD_MOVEMENT

| WERT | TEXT |
| --- | --- |
| 0 | STOP |
| 1 | DOWN |
| 2 | UP |

### ENERGIESPARMODE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Normalmode |
| 1 | Fertigungsmode |
| 2 | Transportmode |
| 3 | Flashmode |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FEHLERKLASSE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Keine Fehlerklasse verfuegbar |
| 1 | Ueberpruefung beim naechsten Werkstattbesuch |
| 2 | Ueberpruefung beim naechsten Halt |
| 4 | Ueberpruefung sofort erforderlich |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x020E00 | Energiesparmode  aktiv | 0 |
| 0x803E80 | Abblendlicht/Fernlicht Kurzschluss nach Ubat | 0 |
| 0x803E81 | Abblendlicht/Fernlicht Leitungsunterbrechung | 0 |
| 0x803E82 | Abblendlicht/Fernlicht Kurzschluss nach Masse | 0 |
| 0x803E83 | Zusatzscheinwerfer 1 / Nebelschlussleuchte Kurzschluss nach Ubat | 0 |
| 0x803E84 | Zusatzscheinwerfer 2 Kurzschluss nach Ubat | 0 |
| 0x803E85 | Sitzheizung Fahrer Kurzschluss nach Ubat | 0 |
| 0x803E86 | Sitzheizung Sozius / Behördenrelais Kurzschluss nach Ubat | 0 |
| 0x803E87 | Zusatzscheinwerfer 1 / Nebelschlussleuchte Leitungsunterbrechung | 0 |
| 0x803E88 | Zusatzscheinwerfer 1 / Nebelschlussleuchte Kurzschluss nach Masse | 0 |
| 0x803E89 | Zusatzscheinwerfer 2 Leitungsunterbrechung | 0 |
| 0x803E8A | Zusatzscheinwerfer 2 Kurzschluss nach Masse | 0 |
| 0x803E8B | Sitzheizung Fahrer Leitungsunterbrechung | 0 |
| 0x803E8C | Sitzheizung Fahrer Kurzschluss nach Masse | 0 |
| 0x803E8D | Sitzheizung Sozius / Behördenrelais Leitungsunterbrechung | 0 |
| 0x803E8E | Sitzheizung Sozius / Behördenrelais Kurzschluss nach Masse | 0 |
| 0x803E8F | Codierung : Steuergerät ist nicht codiert | 0 |
| 0x803E90 | Windschild Motor falsche Drehrichtung | 0 |
| 0x803E91 | Windschild Motor 1 Kurzschluss nach Masse | 0 |
| 0x803E92 | Windschild Motor 2 Kurzschluss nach Masse | 0 |
| 0x803E93 | Windschild Motor 1 Kurzschluss nach Ubat | 0 |
| 0x803E94 | Windschild Motor 2 Kurzschluss nach Ubat | 0 |
| 0x803E95 | Windschild Motor Leitungsunterbrechung bzw. Stromaufnahme zu gering | 0 |
| 0x803E96 | Windschild Hallsensor Versorgung Kurzschluss nach Masse | 0 |
| 0x803E97 | Windschild Hallsensor Versorgung Kurzschluss nach Ubat | 0 |
| 0x803E98 | Windschild Hallsensor Versorgung Leitungsunterbrechung | 0 |
| 0x803E99 | Windschild Hallsensor 2 Zeitüberschreitung | 0 |
| 0x803E9A | Codierung : Codiersignaturfehler | 0 |
| 0x803E9B | Windschild Automatiklauf gesperrt | 0 |
| 0x803E9C | Windschild Motor Stromaufnahme zu gross | 0 |
| 0x803E9D | Windschild Hallsensor 1 Zeitüberschreitung | 0 |
| 0x803E9E | Windschild Motor falsche Position | 0 |
| 0x803E9F | Windschild Kalibrierung fehlerhaft oder nicht durchgeführt | 0 |
| 0x803EA0 | Taster Zusatzscheinwerfer/Behörde Plausibilisierung | 0 |
| 0x803EA1 | Taster Sitzheizung Fahrer Plausibilisierung | 0 |
| 0x803EA2 | Schalter Sitzheizung Sozius Plausibilisierung | 0 |
| 0x803EA3 | Horn Kurzschluss nach Ubat | 0 |
| 0x803EA4 | Horn Kurzschluss nach Masse | 0 |
| 0x803EA5 | Horn Leitungsunterbrechung | 0 |
| 0x803EA6 | Bremslicht Topcase Kurzschluss nach Ubat | 0 |
| 0x803EA7 | Bremslicht Topcase Kurzschluss nach Masse | 0 |
| 0x803EA8 | Codierung : Codierdatenübertragungsfehler | 0 |
| 0x803EA9 | FLS_E_COMPARE_FAILED | 0 |
| 0x803EAA | FLS_E_ERASE_FAILED | 0 |
| 0x803EAB | FLS_E_READ_FAILED | 0 |
| 0x803EAC | FLS_E_WRITE_FAILED | 0 |
| 0x803EAD | NVM_E_CONTROL_FAILED | 0 |
| 0x803EAE | NVM_E_ERASE_FAILED | 0 |
| 0x803EAF | NVM_E_READ_ALL_FAILED | 0 |
| 0x803EB0 | NVM_E_READ_FAILED | 0 |
| 0x803EB1 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x803EB2 | NVM_E_WRITE_FAILED | 0 |
| 0x803EB3 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x803EB4 | Produktionsmode aktiv | 0 |
| 0x803EB5 | Windschild Initialisierung fehlerhaft | 0 |
| 0x803EB9 | Windschild Positionsverlust | 0 |
| 0x803EBB | WINDSHIELD_HALL_SENSOR_INT_DISABLED | 0 |
| 0x803EBD | NaviCase offen waehrend der Fahrt | 0 |
| 0x803EBE | Bremslicht Topcase Leitungsunterbrechung | 0 |
| 0x803EC0 | Ueberspannung Batterie | 1 |
| 0x803EC1 | Unterspannung Batterie | 1 |
| 0x803EC2 | Softwarefehler Steuergeraet | 0 |
| 0x803EC3 | Hardwarefehler Steuergeraet | 0 |
| 0x803EC6 | Windschild Motor Kurzschluss nach Ubat im Auszustand | 0 |
| 0x803EC9 | Windschild Fehler Kalibrierung: Bewegungsbereich nicht OK | 0 |
| 0xCC845F | CAN Bus Off | 1 |
| 0xCC941C | CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCC9420 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0xCC9422 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCC9424 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCC9426 | CAN KOMBI Nachricht Kombidaten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCC942A | CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCC943A | CAN BCO Nachricht Status_Grund_Funktion_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xCC9485 | CAN BCA Nachricht Steuerung_Sonderfunktion_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1603 | Spannung des Bordnetzes | V | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x1604 | KL15 STATUS | 0/1 | High | 0x01 | - | 1.0 | 1.0 | 0.0 |
| 0x1605 | WINDSHIELD_CODED_MOVEMENT_RANGE_WERT | Stufe | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1606 | WINDSHIELD_ACTUAL_MOVEMENT_RANGE | Stufe | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
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
| 0x482D00 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 0 |
| 0x803EB6 | DEM_EVENT_E06_WRITE_FAILED | 0 |
| 0x803EB7 | DEM_EVENT_E07_WRITE_FAILED | 0 |
| 0x803EB8 | DEM_EVENT_E09_WRITE_FAILED | 0 |
| 0x803EBA | DEM_EVENT_E10_WRITE_FAILED | 0 |
| 0x803EBC | DFA_E11_WRITE_FAILED | 0 |
| 0x803EC4 | SEK Ueberspannung Batterie | 1 |
| 0x803EC5 | SEK Unterspannung Batterie | 1 |
| 0x803EC7 | DM_Queue_DELETED | 0 |
| 0x803EC8 | DM_Queue_FULL | 0 |
| 0xCC941D | SEK_CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCC9421 | SEK_CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0xCC9423 | SEK_CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCC9425 | SEK_CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCC942B | SEK_CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCC943B | SEK_CAN BCO Nachricht Status_Grund_Funktion_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1603 | Spannung des Bordnetzes | V | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x1604 | KL15 STATUS | 0/1 | High | 0x01 | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### PROG_DEP_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | correctResult |
| 2 | incorrectResult |
| 3 | incorrectResult error SWE - HWE |
| 4 | incorrectResult error SWE - SWE |
| 255 | reserved |

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

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ECUMehrmalsProgrammierbar |
| 1 | ECUMindestensEinmalVollstaendigProgrammierbar |
| 2 | ECUNichtMehrProgrammierbar |

### RDTCI_LEV_DOP

| WERT | TEXT |
| --- | --- |
| 2 | reportDTCByStatusMask |
| 4 | reportDTCsnapshotRecordByDTCnumber |
| 6 | reportDTCextendedDataRecordByDTCnumber |
| 7 | reportNumberOfDTCbySeverityMaskRecord |
| 8 | reportDTCbySeverityMaskRecord |
| 9 | reportSeverityInformationOfDTC |
| 10 | reportSupportedDTC |
| 18 | reportNumberOfEmissionsRelatedOBDDTCByStatusMask |
| 19 | reportEmissionsRelatedOBDDTCByStatusMask |

### RES_0X1602_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PRG_VERSION_MAJOR_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PRG Software versionmajor |
| STAT_PRG_VERSION_MINOR_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PRG Software version  minor |
| STAT_PRG_VERSION_PATCH_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PRG Software version Patch |

### RES_0XB068_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_NAVIFACH_EIN | + | - | + | 0-n | - | unsigned char | - | TAB_MR_TASTER_NAVIFACH | - | - | - | Status Taster Navifach; 0 ==> nicht betätigt 1==> betätigt; 255 = nicht definiert |
| STAT_KALIBRIERUNG_WINDSCHILD | - | - | + | 0-n | - | unsigned char | - | TAB_MR_KALIBRIERUNG_WINDSCHILD | 1.0 | 1.0 | 0.0 | Status Kalibrierung Windschild |

### RES_0XB06A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFAHREN_SOLLPOS_WINDSCHILD | + | + | + | 0-n | - | unsigned char | - | TAB_MR_WINDSCHILD_SOLLPOSITION | 1.0 | 1.0 | 0.0 | Status Anfahren Sollposition Windschild |
| STAT_TASTER_NAVIFACH_EIN | + | + | + | 0-n | - | unsigned char | - | TAB_MR_TASTER_NAVIFACH | - | - | - | Status Taster Navifach; 0 ==> nicht betätigt 1==> betätigt; 255 = nicht definiert |
| STAT_EINKLEMMSCHUTZ_EIN | + | + | + | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Einklemmschutz Windschild; 1 ==> Einklemmschutz aktiv 0 ==>Einklemmschutz nicht aktiv |
| STAT_POSITION_AKTUELL_WERT | + | + | + | Schritte | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktuelle Position Windschild |
| STAT_POSITION_UNTERER_ANSCHLAG_WERT | + | + | + | Schritte | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Position unterer Softwareangschlag Windschild |
| STAT_POSITION_OBERER_ANSCHLAG_WERT | + | + | + | Schritte | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Position oberer Softwareangschlag Windschild |
| STAT_MAX_MECH_VERFAHRWEG_WERT | + | + | + | Schritte | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | maximaler mechanischer Verfahrweg in Schritten |
| STAT_VERFAHRSTROM_WERT | + | + | + | A | - | char | - | - | 0.1 | 1.0 | 0.0 | Verfahrstrom Winschild |
| STAT_PWM_MOTOR_WERT | + | + | + | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tastverhältnis Windschild Motor Ansteuerung |

### RES_0XB06B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOMATIKLAUF_SPERRE | + | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 1 = Automatiklaufsperre ein 0 =  Automatiklaufsperre aus |

### RES_0XE010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUPE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Horn; 1=EIN, 0=AUS |

### RES_0XE0A3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUPE_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hupe Eingang 1=EIN, 0=AUS |

### RES_0XE100_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSATZSCHEINWERFER_1_NSL_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert in %, mit dem der Zusatzscheinwerfer 1 betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |
| STAT_ZUSATZSCHEINWERFER_2_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert in %, mit dem der Zusatzscheinwerfer 2 betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### RES_0XE101_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZSW_ANSTEUERUNG_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zusatzscheinwerfer Funktion Eingang; 1==>ein 0==>aus |
| STAT_ABBLENDLICHT_ZSW_EINGANG | 0-n | - | unsigned char | - | TAB_MR_ABBLENDLICHT | 1.0 | 1.0 | 0.0 | Eingang Abblendlicht Zusatzscheinwerfer Funktion |

### RES_0XE103_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WINDSCHILD_EINGANG_AUF_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Windschild Eingang auf 1 ==> aktiv 0 ==> nicht aktiv |
| STAT_WINDSCHILD_EINGANG_AB_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Windschild Eingang ab 1 ==> aktiv 0 ==> nicht aktiv |

### RES_0XE104_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABBLEND_FERNLICHT_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert in %, mit dem das Abblend- bzw. Fernlicht betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### RES_0XE105_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_NAVIFACH_EIN | 0-n | - | unsigned char | - | TAB_MR_TASTER_NAVIFACH | - | - | - | Status Taster Navifach; 0 ==> nicht betätigt 1==> betätigt; 255 = nicht definiert |
| STAT_EINKLEMMSCHUTZ_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Einklemmschutz Windschild; 1 ==> Einklemmschutz aktiv 0 ==>Einklemmschutz nicht aktiv |
| STAT_POSITION_AKTUELL_WERT | Schritte | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktuelle Position Windschild |
| STAT_POSITION_UNTERER_ANSCHLAG_WERT | Schritte | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Position unterer Softwareangschlag Windschild |
| STAT_POSITION_OBERER_ANSCHLAG_WERT | Schritte | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Position oberer Softwareangschlag Windschild |
| STAT_MAX_MECH_VERFAHRWEG_WERT | Schritte | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | maximaler mechanischer Verfahrweg in Schritten |
| STAT_VERFAHRSTROM_WERT | A | - | char | - | - | 0.1 | 1.0 | 0.0 | Verfahrstrom Windschild |
| STAT_PWM_MOTOR_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tastverhältnis Windschild Motor Ansteuerung |

### RES_0XE107_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FAHRER_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert in %, mit dem die Sitzheizung Fahrer betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |
| STAT_SITZHEIZUNG_SOZIUS_BEH_RELAIS_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert in %, mit dem die Sitzheizung Beifahrer betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet Behörde: nur 0% oder 100% zulässig |
| STAT_STROM_SITZHEIZUNG_SOZIUS | 0-n | - | unsigned char | - | TAB_MR_STROM_SITZHEIZUNG_SOZIUS | 1.0 | 1.0 | 0.0 | Ergebnis gibt an in welchem Bereich der Laststrom während der Einphase ist. |

### RES_0XE108_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FAHRER_EINGANG_MR | 0-n | - | unsigned char | - | TAB_MR_SITZHEIZUNG_FAHRER_EINGANG_FKT | 1.0 | 1.0 | 0.0 | Sitzheizung Fahrer Eingang |
| STAT_SITZHEIZUNG_SOZIA__EINGANG_MR | 0-n | - | unsigned char | - | TAB_MR_SITZHEIZUNG_BEIFAHRER_EINGANG_FKT | 1.0 | 1.0 | 0.0 | Sitzheizung Beifahrer Eingang |

### RES_0XE10A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FERNLICHT_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fernlicht Eingang 1=EIN, 0=AUS |

### RES_0XE10B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_SITZHEIZUNG_STUFE_1_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Schalter Sitzheizung Stufe 1; 0 ==> nicht betätigt 1==> betätigt |
| STAT_SCHALTER_SITZHEIZUNG_STUFE_2_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Schalter Sitzheizung Stufe 2; 0 ==> nicht betätigt 1==> betätigt |

### RES_0XE10C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BREMSSCHALTER_HAND_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bremsschalter Hand Eingang 1 ==> betätigt 0 ==> nicht betätigt |
| STAT_BREMSSCHALTER_FUSS_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bremsschalter Fuß Eingang 1 ==> betätigt 0 ==> nicht betätigt |

### RES_0XE10D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BREMSLICHT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert in %, mit dem das Bremslicht KL_54 betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |
| STAT_STROM_BREMSLICHT | 0-n | - | unsigned char | - | TAB_MR_STROM_STATUS_HIGHSIDE | 1.0 | 1.0 | 0.0 | Status Strom Bremslicht Topcase |

### RES_0XF001_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_NAVIFACH_EIN | + | + | + | 0-n | high | unsigned char | - | TAB_MR_TASTER_NAVIFACH | - | - | - | Status Taster Navifach; 0 ==> nicht betätigt 1==> betätigt; 255 = nicht definiert |
| STAT_WIN_INIT | - | - | + | 0-n | high | unsigned char | - | STAT_WIN_INIT_STATUS | 1.0 | 1.0 | 0.0 | Windshield Initialisation Status |
| STAT_MOVEMENT_RANGE_WERT | - | - | + | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Range of movement of the windshield |
| STAT_AVERAGE_VOLTAGE_WERT | - | - | + | V | high | unsigned int | - | - | 985.0 | 48081.0 | 0.0 | Average voltage level (during calibration) |
| STAT_AVERAGE_TEMPERATURE_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Average temperature(during calibration) |
| STAT_AVERAGE_FRICTION_WERT | - | - | + | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Average friction (during calibration) |
| STAT_MOVEMENT_RANGE_INIT_WERT | - | - | + | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates range of movement (number of pulses) available for the windshield, calculated during the initialization |
| STAT_AVERAGE_TEMPERATURE_INIT_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates average temperature reported by the internal NTC during the windshield initialization. |
| STAT_AVERAGE_FRICTION_INIT_WERT | - | - | + | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates average friction of windshield dc-motor, calculated during the initialization. |
| STAT_AVERAGE_VOLTAGE__WERT | - | - | + | V | high | unsigned int | - | - | 985.0 | 48081.0 | 0.0 | Indicates average voltage during the windshield initialization. |
| STAT_FRICTION_DEVIATION_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Indicates deviation of average friction calculated during windshield initialization with respect to average friction calculated in the calibration run. |

### RES_0XFD01_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LOAD_REJECT_CODING_MATRIX_WERT | HEX | high | unsigned int | - | - | - | - | - | Load reject Coding Matrix |
| STAT_DUTYLOWHIGHBEAML_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle Low/High Beam light. |
| STAT_DUTYBRAKELIGHT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle Brake light. |
| STAT_DUTYADDITIONALLIGHT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle Additional light. |
| STAT_DUTYREARFOGLIGHT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle Rear Fog light. |
| STAT_BASICFREQUENCYPWM_WERT | Hz | high | unsigned char | - | - | 4.0 | 1.0 | 60.0 | cfg_basicFrequencyPWM |
| STAT_LBLCHAR_BL_ADDL_HORN01_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_LowHighBeamActive 0x02 cfg_BrakeLightActive 0x04 cfg_AddLightActive 0x08 cfg_HornActive 0x10 cfg_MemoryFunction 0x20 cfg_LinSlaveADLBco 0x40 cfg_StoreReq_ADL |
| STAT_LBLCHAR_BL_ADDL_HORN02_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_LowBeamUseXenon 0x02 cfg_CANInputLowHighBeam 0x04 cfg_CharBrakeLight 0x08 cfg_AddLightTypeLoad 0x10 cfg_HBL_ADL_Behaviour_Off 0x20 cfg_HBL_ADL_Off |
| STAT_LBLCHAR_BL_ADDL_HORN03_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_AddLightPushOrCAN |
| STAT_CFG_ABSSWITCHDEBTIME_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Avoid switching on the brakelight during codified debounce time due to invalid value or switch defect signal arrival coming from the ABS module. |
| STAT_CFG_LOWBEAMSTARTUPDELAY_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Once the application from the ecu wants to activate the output lbl, it must wait until the time is over according to coding parameter. |
| STAT_SEATHEATERD_SEATHEATERP01_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_SHDPushButtonStMach 0x02 cfg_SHDActivBUSOrPushBut 0x04 cfg_SHDPresent 0x08 cfg_SHDAmbTempControl 0x10 cfg_SHDMemoryFunctAct 0x20 cfg_SHPSHDSwitchOffEngineIdle 0x40 cfg_SHPSHDSwitchOffOrDutyCycle 0x80 cfg_SHPSwitchOffEngineIdle |
| STAT_CFG_SHDNUMSTEPSPUSHBUT_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of pwm steps push button |
| STAT_CFG_SHDPWMSTEP1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating level 1 |
| STAT_CFG_SHDPWMSTEP2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating level 2 |
| STAT_CFG_SHDPWMSTEP3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating level 3 |
| STAT_CFG_SHDPWMSTEP4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating level 4 |
| STAT_CFG_SHDPWMSTEP5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating level 5 |
| STAT_CFG_SHDPWMSTEP6_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating level 6 |
| STAT_CFG_SHDCHARCURVETEMP1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Seat Heater Driver Char Curve Temp |
| STAT_CFG_SHDCHARCURVETEMP2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Seat Heater Driver Char Curve Temp |
| STAT_CFG_SHDCHARCURVETEMP3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Seat Heater Driver Char Curve Temp |
| STAT_CFG_SHDCHARCURVETEMP4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Seat Heater Driver Char Curve Temp |
| STAT_CFG_SHDCHARCURVETEMP5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Seat Heater Driver Char Curve Temp |
| STAT_CFG_SHDCHARCURVEPWM1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating driver char curve heating duty |
| STAT_CFG_SHDCHARCURVEPWM2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating driver char curve heating duty |
| STAT_CFG_SHDCHARCURVEPWM3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating driver char curve heating duty |
| STAT_CFG_SHDCHARCURVEPWM4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating driver char curve heating duty |
| STAT_CFG_SHDCHARCURVEPWM5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating driver char curve heating duty |
| STAT_CFG_SHPPWMSTEP1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating pillion  level 1 |
| STAT_CFG_SHPPWMSTEP2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating pillion  level 2 |
| STAT_SEATHEATERD_SEATHEATERP02_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_SHPPushOrSwitch 0x02 cfg_SHPAmbTempControl 0x04 cfg_SHPConnectedLoad 0x08 cfg_SHPPresent |
| STAT_CFG_SHPCHARCURVETEMP1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Seat Heater Pillion Char Curve Temp |
| STAT_CFG_SHPCHARCURVETEMP2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Seat Heater Pillion Char Curve Temp |
| STAT_CFG_SHPCHARCURVETEMP3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Seat Heater Pillion Char Curve Temp |
| STAT_CFG_SHPCHARCURVETEMP4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Seat Heater Pillion Char Curve Temp |
| STAT_CFG_SHPCHARCURVETEMP5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Seat Heater Pillion Char Curve Temp |
| STAT_CFG_SHPCHARCURVEPWM1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating pillion char curve heating duty |
| STAT_CFG_SHPCHARCURVEPWM2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating pillion char curve heating duty |
| STAT_CFG_SHPCHARCURVEPWM3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating pillion char curve heating duty |
| STAT_CFG_SHPCHARCURVEPWM4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating pillion char curve heating duty |
| STAT_CFG_SHPCHARCURVEPWM5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Seat heating pillion char curve heating duty |
| STAT_CFG_SHDDUTYCYCLEENGINEIDLE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM range 0...100% to be used by Seat Heating Driver when engine is in idle state |
| STAT_CFG_SHPDUTYCYCLEENGINEIDLE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM range 0...100% to be used by Seat Heating Passenger when engine is in idle state |
| STAT_WINDSHIELD01_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_WindshieldActive 0x02 cfg_AutomaticRunActive 0x04 cfg_WinSoftStop 0x08 cfg_WinWithoutRpmUsable 0x01 cfg_WinHallSensorOption 0x02 cfg_WinAntiPitchProtection 0x04 cfg_WinNaviCase 0x08 cfg_WinNaviSwitch |
| STAT_WINCURRENTLIMITNORM_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Maximum current allowed in windshield in normal use. |
| STAT_WINCURRENTLIMITREF_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Maximum current allowed in windshield in reference run. |
| STAT_WINCURRENTLIMITCALIB_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Maximum current allowed in windshield in calibration. |
| STAT_WINHIGHESTPOSITION_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Windshield highest position. Although the range of movement is found in a calibration process, the range can be different in different bikes, so in order to have the same of range of movement in every bike, highest and lowest position are coded here. |
| STAT_WINLOWESTPOSITION_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Windshield lowest position. Although the range of movement is found in a calibration process, the range can be different in different bikes, so in order to have the same of range of movement in every bike, highest and lowest position are coded here. |
| STAT_WINUPPERLIMIT_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of pulses away from highest position. Highest allowed position = highest position - cfg_WinUpperLimit |
| STAT_WINLOWERLIMIT_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of pulses away from lowest position. Lowest allowed position = lowest position + cfg_WinLowerLimit |
| STAT_WINCALIBATTEMPTS_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of consecutive failed calibrations allowed. |
| STAT_WINSUPERIORTIMEOUT_WERT | s | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Maximum time the windshield is allowed to be moved. |
| STAT_WINMOVESOFTSTOP_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Allowed number of times Windshield reaches top position before Re-Norming. |
| STAT_WINSPEED_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimum speed to enable Automatic Run. |
| STAT_WINENGINESPEED_WERT | 1/min | high | unsigned char | - | - | 50.0 | 1.0 | 0.0 | Minimum engine speed to enable function Windshield. |
| STAT_WINSOFTSTOPPERCENTAGE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Percentage of movement that should be driven with PWM. |
| STAT_WINAPPWAYOFREVERSE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reverse distance to be covered when Anti Pitch Protection is triggered. |
| STAT_WINAPPRETRIES_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of retries for Anti Pitch Protection before locking Automatic Run. |
| STAT_WINAPPT3_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer to be used in first retry of Anti Pitch Protection. |
| STAT_WINAPPT4_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer to be used in first retry of Anti Pitch Protection. |
| STAT_WINAPPT5_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer to be used in first retry of Anti Pitch Protection. |
| STAT_WINMAXTIME_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time available for the user for closing the NaviCase after switching KL_15 off. |
| STAT_WINT1_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time available after turning KL_15 off for moving the windshield automatically to rest position. |
| STAT_WINSPEEDNAVICASE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimum speed for allowing automatic up movement when NaviCase is configured. |
| STAT_WINENGINESPEEDNAVICASE_WERT | 1/min | high | unsigned char | - | - | 50.0 | 1.0 | 0.0 | Minimum engine speed for allowing manual movement when NaviCase is configured. |
| STAT_WAPTRANSPULSES_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of pulses in the Windshield motor transient that the Antipinch will discard before evaluating the motor friction. |
| STAT_WINDSHIELD02_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_WinAutomaticRunDiagLock 0x02 cfg_WinManualDenorming |
| STAT_CFG_WINDENORMINGMINTIME_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimum time (in seconds) needed for keeping the UP button pressed for denorming the windshield. |
| STAT_CFG_WINDENORMINGMAXTIME_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximum time (in seconds) needed for keeping the UP button pressed for denorming the windshield. |
| STAT_CFG_WAPSAMPLESNUMBER_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of samples the Antipinch will evaluate for detecting an Antipinch situation. |
| STAT_CFG_WAPTOUGHNESS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Toughness of anti pinch protection. The value refers to the increase of friction allowed in the dc-motor during automatic run. Range: [0% .. 100%] |
| STAT_CFG_WAPMECHANICALFRICTIONFILTER_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Friction tolerance (in %) when moving windshield during initialization, used for filtering the pulses read in the movement beyond the mechanical end. Range: [0..255%] |
| STAT_CANTIMEOUT_OC_STB_STG_XCPACT01_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_opVehicleTimeout 0x02 cfg_inSCLHTimeout 0x04 cfg_speedTimeout 0x08 cfg_clampStatusTimeout 0x10 cfg_kombiDataTimeout 0x20 cfg_engineData2Timeout 0x40 cfg_stStdFunctTimeout |
| STAT_CANTIMEOUT_OC_STB_STG_XCPACT02_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_LowBeamLight_OC 0x02 cfg_Horn_OC 0x04 cfg_BrakeLight_OC 0x08 cfg_AddLight1_RearFogL_OC 0x10 cfg_AddLight2_OC 0x20 cfg_SeatHeatDrvAuthRly_OC 0x40 cfg_SeatHeatPillAuth_OC |
| STAT_CANTIMEOUT_OC_STB_STG_XCPACT03_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_LowBeamLight_STG 0x02 cfg_LowBeamLight_STB 0x04 cfg_Horn_STG 0x08 cfg_Horn_STB 0x10 cfg_BrakeLight_STG 0x20 cfg_BrakeLight_STB 0x40 cfg_AddLight1_RearFogL_STG 0x80 cfg_AddLight1_RearFogL_STB |
| STAT_CANTIMEOUT_OC_STB_STG_XCPACT04_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_AddLight2_STG 0x02 cfg_AddLight2_STB 0x04 cfg_SeatHeatDivAuthRly_STG 0x08 cfg_SeatHeatDivAuthRly_STB 0x10 cfg_SeatHeatPillAut_STG 0x20 cfg_SeatHeatPillAut_STB |
| STAT_CANTIMEOUT_OC_STB_STG_XCPACT05_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_AddLightInput_Author_STG 0x02 cfg_SHDriverPushButton_STG 0x04 cfg_SHPillionPos1_2_Active |
| STAT_CANTIMEOUT_OC_STB_STG_XCPACT06_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_CCPEnable |
| STAT_CANTIMEOUT_OC_STB_STG_XCPACT07_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_WindMotor1_STG 0x02 cfg_WindMotor2_STG 0x04 cfg_WindMotor1_STB 0x08 cfg_WindMotor2_STB 0x10 cfg_WindMotorX_OC 0x20 cfg_WindHallSensorSup_STG 0x40 cfg_WindHallSensorSup_STB 0x80 cfg_WindHallSensorSup_OC |
| STAT_CANTIMEOUT_OC_STB_STG_XCPACT08_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_WindCurrent 0x02 cfg_WindWrongCurrentPos 0x04 cfg_WindHallSensor1TimeOut 0x08 cfg_WindHallSensor2TimeOut 0x10 cfg_WindNotCalibrated 0x20 cfg_WindMotor_STB_OFF 0x40 cfg_WindMotor_OppDir 0x80 cfg_WindNotInitialized |
| STAT_CFG_KL15ONDTCDEBOUNCE_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Debouncing period for entering faults in the memory after Terminal 15  on . |
| STAT_CANTIMEOUT_OC_STB_STG_XCPACT09_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_HighBatteryVoltage 0x02 cfg_LowBatteryVoltage 0x04 cfg_SwFailure 0x08 cfg_HwFailure 0x10 cfg_CANBusOff 0x20 cfg_ProductionMode 0x40 cfg_WinFewPulses 0x80 cfg_WinDenormed |
| STAT_CFG_KL50ONDTCDEBOUNCE_WERT | ms | high | unsigned char | - | - | 100.0 | 1.0 | 0.0 | Debouncing period for entering faults in the memory followin Terminal 50  on . |
| STAT_CANTIMEOUT_OC_STB_STG_XCPACT10_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_WinAutoRunLocked 0x02 cfg_WindHallSensorIntOff |

### RES_0XFD02_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_VALID_HEATING_STEP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Last valid heating step |
| STAT_BIT_DATA_WERT | HEX | high | unsigned char | - | - | - | - | - | Producation mode 0x01 lastValidAdlState  0x02 |
| STAT_WINDSHIELD_FLAGS_1_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01    WinRecentlyNormed 0x02   WinLockedDueToRenormingRange |
| STAT_WINDSHIELD_FLAGS_2_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 WinStartReference (obsolete) 0x02 WinCalibFailed 0x04 WinInitFailed 0x08 WinLockedDueToHsTimeout 0x10 WindshieldUserMoving 0x20 WinLockedDueToOppositeDirection 0x40 WinNormed 0x80 dgnAutomaticRunLocked 0x10 WindshieldUserMoving 0x20 WinLockedDueToOppositeDirection 0x40 WinUpNormed 0x80 |
| STAT_WINCALIBSTATUSEEPROM | 0-n | high | unsigned char | - | STAT_DIAG_WIN_STATUS | - | - | - | Indicates status of last calibration. |
| STAT_WIN_HIGHEST_POS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Highest position where windshield can be moved. Signal to be updated after a calibration. |
| STAT_WIN_LOWEST_POS_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lowest position where windshield can be moved. Signal to be updated after a calibration. |
| STAT_WIN_CURRENT_POS_WERT | Counts | high | int | - | - | 1.0 | 1.0 | 0.0 | Current position where windshield is placed. |
| STAT_WIN_AUTO_POS_WERT | Counts | high | int | - | - | 1.0 | 1.0 | 0.0 | Stores position of the windshield before turning KL_15 off |
| STAT_WIN_CALIB_ATTEMPT_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of consecutive unsuccessful windshield calibrations. |
| STAT_SOFT_STOP_CFG_MOVE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Last value configured in parameter DFA_E05.cfg_WinMoveSoftStop. |
| STAT_SOFT_STOP_COUNTER_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Counter for soft stop feature, according to section in specs   Soft stop / renorming . |
| STAT_WIN_PREV_ESTIMATE_TEMP_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Estimated temperature inside windshield dc-motor when KL_15 was turned off. |
| STAT_WIN_TIME_SEC_CONTER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Value of CAN signal KMBI_DATA_MOTBK_2010.T_SEC_COU_REL_MOTBK_2010 when turning KL_15 off. |
| STAT_DEFAULT_TEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Informer to be used as initialization of thermal protection algorithm. Two values are used: 0xAA = default; 0x55 = CAN |
| STAT_WIN_INIT_STATUS | 0-n | high | unsigned char | - | STAT_DIAG_WIN_STATUS | - | - | - | Windshiled init Status |
| STAT_WIN_INIT_PULSE_FILTER_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Indicates how many pulses have been discarded from the lowest position. |
| STAT_WIN_INIT_FRICTION_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates maximum average friction calculated in last initialization. |
| STAT_WIN_INIT_VOLTAGE_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates average voltage measured in last initialization. The value stored corresponds to ADC steps. |
| STAT_WIN_INIT_TEMPERATURE_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates average temperature measured in last initialization. The value stored corresponds to ADC steps. |
| STAT_WIN_ABSOLUTE_POSITION_WERT | Counts | high | int | - | - | 1.0 | 1.0 | 0.0 | Absolut windshield position. |
| STAT_WIN_INIT_COUNTER_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of initialization runs performed since latest calibration. |
| STAT_WIN_INIT_KILOMETER_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | kilometer reading in latest initialization run, taken from CAN signal MILE_TOT_MOTBK_2010 |
| STAT_WIN_CALIB_CURRENT_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | average current consumption of windhsield monitored in latest calibration run. The value stored corresponds to ADC steps. |
| STAT_WIN_CALIB_TIME_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | time needed for performing latest calibration run. |
| STAT_WINDSHIELD_FLAGS_3_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01   whsRenormingDueToReset |
| STAT_WINSTATUSMESSAGEMOTORSTOP_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status message when the windshield dc-motor stops. |
| STAT_WASINDEXFRICTIONUPWARD_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index for accessing the array wasFrictionUpward[] |
| STAT_WASFRICTIONUPWARD0_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction calculated when moving the windshield upward [0] |
| STAT_WASFRICTIONUPWARD1_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction calculated when moving the windshield upward [1] |
| STAT_WASFRICTIONUPWARD2_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction calculated when moving the windshield upward [2] |
| STAT_WASFRICTIONUPWARD3_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction calculated when moving the windshield upward [3] |
| STAT_WASFRICTIONUPWARD4_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction calculated when moving the windshield upward [4] |
| STAT_WASINDEXFRICTIONDOWNWARD_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index for accessing the array wasFrictionDownward[] |
| STAT_WASFRICTIONDOWNWARD0_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction calculated when moving the windshield downward[0] |
| STAT_WASFRICTIONDOWNWARD1_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction calculated when moving the windshield downward[1] |
| STAT_WASFRICTIONDOWNWARD2_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction calculated when moving the windshield downward[2] |
| STAT_WASFRICTIONDOWNWARD3_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction calculated when moving the windshield downward[3] |
| STAT_WASFRICTIONDOWNWARD4_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction calculated when moving the windshield downward[4] |
| STAT_WASINDEXFRICTION_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index for accessing the array wasFriction[] |
| STAT_WASFRICTION0_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction[0] |
| STAT_WASFRICTION1_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction[1] |
| STAT_WASFRICTION2_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction[2] |
| STAT_WASFRICTION3_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction[3] |
| STAT_WASFRICTION4_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Friction[4] |

### RES_0XFD03_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NAVICASE_SWITCH | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Navi case switch |
| STAT_WIN_DATA_1_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x01    WindshieldHall1 0x02    SeatHeatPillionPos2_Author 0x04    SeatHeatPillionPos1_Author 0x08    SeatHeatDriverPushButton 0x10    AdditionalLightInput_Author 0x20    FailPowerDiag 0x40    WindshieldHall2 0x80    CrankingInterrupt |
| STAT_BATTERY_VOLTAGE_SENSE_WERT | V | high | unsigned int | - | - | 0.0204 | 1.0 | 0.0 | Battery Voltage Sense |
| STAT_INTERNAL_TEMP_SENSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Internal Temp Sense |
| STAT_WIN_CURRENT_SENSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Windshield Current Sense |
| STAT_POWER_SENSE_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Power Sense Diag |
| STAT_WIN_MOTOR_1_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Windshield DC Motor 1 Diag |
| STAT_WIN_MOTOR_2_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Windshield DC Motor 2 Diag |
| STAT_HALL_SENSOR_VCC_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hall Sensor VCC Diag |
| STAT_HALL_SENSOR_GND_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hall Sensor Ground Diag |
| STAT_SHP_CURRENT_SENSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Seat Handler Pillion Current Sense |
| STAT_INPUT_DATA_2_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x01    SeatHeatPillionInpPos1 0x02    AuthorHazardWarnPushButt 0x04    SeatHeatPillionInpPos2 0x08    AuthorLightOFFPushButt 0x10    AdditionalLightInput 0x20    AuthorRFogLightPushButt |
| STAT_LOW_HIGH_BEAM_LIGHT_DIAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Low/High Beam Light diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_LOW_HIGH_BEAM_LIGHT_DIAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Low/High Beam Light diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |
| STAT_ADD_LIGHT_DIAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 |  AdditLight1_Author diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_ADD_LIGHT_DIAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AdditLight1_Author Light diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |
| STAT_SEAT_HEAT_DRIVERL_DIAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Seat Heating Driver diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_SEAT_HEAT_DRIVERL_DIAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Seat Heating Driver diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |
| STAT_BRAKE_LIGHT_DIAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Brake Light Diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_BRAKE_LIGHT_DIAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Brake Light diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |
| STAT_HORN_DIAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Horn diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_HORN_DIAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Horn diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |
| STAT_ADD_LIGHT_2_DIAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 |  AdditLight2  diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_ADD_LIGHT_2_DIAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AdditLight2  Light diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |
| STAT_SEAT_HEAT_PILLION_DIAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Seat Heating Pillion diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_SEAT_HEAT_PILLION_DIAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Seat Heating Pillion diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |

### RES_0XFD04_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATA_1_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x01   spare                   0x02   spare                   0x04   CANStrobe               0x08   PowerRST                0x10   Horn                    0x20   WindshieldMotorDirect2  0x40   WindshieldMotorDirect1  0x80   WindshieldHallSupply |
| STAT_WINDSHIELD_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Windshiled Duty |
| STAT_LOW_HIGH_BEAM_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Low High Beam Light Duty |
| STAT_ADDTIONAL_LIGHT_2_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Additional Light1 Light Duty |
| STAT_SEAT_HEATER_DRIVER_UTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Seat Heater driver duty |
| STAT_BRAKE_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Brake Light Duty |
| STAT_ADDTIONAL_LIGHT_2__DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Additional Light 2 Light Duty |
| STAT_SEAT_HEATER_PILLION_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Seat Heater driver duty |
| STAT_PWM_CLOCK_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Duty |

### RES_0XFD05_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEAR_SW_VERSION_MAJOR_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lear Software Version major |
| STAT_LEAR_SW_VERSION_MINOR_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lear Software Version minor |
| STAT_LEAR_SW_VERSION_PATCH_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lear Software Version Patch |

### RES_0XFD06_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MANUFACTURING_DATA_1_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_2_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_3_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_4_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_5_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_6_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_7_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_8_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_9_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_10_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_11_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_12_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_13_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_14_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_15_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_16_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_17_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_18_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_19_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_20_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |

### RES_0XFD07_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AVERAGE_CPU_LOAD_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Average CPU load |
| STAT_MAX_CPU_LOAD_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximum CPU load |

### RES_0XFD08_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LOADREJECTION_WERT | HEX | high | unsigned int | - | - | - | - | - | 0x01 lRejLowHighBeamLight 0x02 lRejBrakeLight 0x04 lRejAdditionalLight1 0x08 lRejAdditionalLight2 0x10 lRejHorn 0x20 lRejSeatHeatingDriver 0x40 lRejSeatHeatingPillion |
| STAT_WINDSHIELDMOVEMENT | 0-n | high | unsigned char | - | WINDSHIELD_MOVEMENT | - | - | - | Application layer requests movement direction of windshield to service layer through this variable. |
| STAT_WSVMOVEMENTSTATUS | 0-n | high | unsigned char | - | WINDSHIELD_MOVEMENT | - | - | - | Service layer informs about actual windshield status. |
| STAT_WINT1_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximum time allowed for windshield movement after turning KL_15 off. This time coincides with the timer for saving everything into eeprom. |
| STAT_WINCURRENTLIMIT_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Indicates which is the maximum current consumption allowed by the dc-motor in upcoming movement. |
| STAT_WSVMOVESTOPREASON | 0-n | high | unsigned char | - | WSV_INTERNAL_WIN_STOP_REASON | - | - | - | Indicates why last movement of dc-motor has stopped. It is updated by the service layer each time a movement stops. |
| STAT_WHSHALLSENSORINTERRUPTOFF_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 Flag for communicating service WHS with service WSV, for informing if the interrupt linked with hall sensor 1 has been disabled unexpectedly. |
| STAT_DUMMY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unused signal, reserved. |
| STAT_ADLANDWINDSHIELDRELATED_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x1 adlDfaEDataChanged 0x2 adlDfaEDataBusy 0x4 whsHallSensorInterruptLost |
| STAT_WCMDCMOTORSTATUS | 0-n | high | unsigned char | - | WSV_DCMOTOR_CURRENT_CONSUMPTION | - | - | - | Informs about status of windshield dc-motor (no defect found, openload, shortcircuit) |
| STAT_WINDSHIELDFLAGS_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 whsHallSensorCanBeDisabled 0x02 wsvWinInSoftStopArea 0x04 wapAntipinchProtection 0x08 winAvailableForDiagnosticMovement 0x10 winWrongPosition 0x20 dgnControlWindshieldPosition 0x40 wsvReverseMovementOn 0x80 winAntipinchAllowed |
| STAT_WSVDELTAMOVEMENT_WERT | Stufe | high | int | - | - | 1.0 | 1.0 | 0.0 | Indicates the distance (number of pulses) covered by the windshield in last movement. The signal is initialized when beginning a movement. The sign reflects the way of movement (positive = upward, negative = downward). |
| STAT_WINPOSITIONPERCENTAGE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Indicates current position of the windshield in % with respect to the lowest allowed position. |
| STAT_WSVUPDATESTATUSWCM | 0-n | high | unsigned char | - | WSV_UPDATE_STATUS_WCM | - | - | - | Service WSV uses this signal for controling status of service WCM. |
| STAT_WTPSTATUS | 0-n | high | unsigned char | - | WIN_WTP_STATUS | - | - | - | Indicates estimated temperature in windhsield dc-motor: MAX (maximum allowed, 92 ºC), WARNING (83 ºC), or NORMAL (below 83ºC) |
| STAT_WAPRETRYCOUNTER_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Retry counter, used for managing the counter C1 in the Antipinch Protection diagram as specified in DOORS ID 5235 and 5436. |
| STAT_DIAGWINDSHIELDMOVEMENT | 0-n | high | unsigned char | - | DIAG_WINDSHIELD_MOVEMENT | - | - | - | Diagnostic layer requests movement direction of windshield to service layer through this variable. |
| STAT_WTPESTIMATEDTEMPERATURE_WERT | Stufe | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Estimated temperature inside windshield dc-motor, calculated by service WTP (Windshield Thermal Protection). |
| STAT_DGNWINDSHIELDPOSITION_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Request from diagnostics for moving the windshield to the position specified in this signal. |
| STAT_DGNWINDSHIELDDUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Request from diagnostics for moving the windshield to the position specified in this signal. |
| STAT_WINDSHIELDDCMOTORLASTERROR | 0-n | high | unsigned char | - | TAB_WIN_MOTOR_LAST_ERROR | - | - | - | Indicates last error detected in dc-motor when moving the windshield |
| STAT_WSVDELTAREVERSEMOVEMENT_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Indicates the distance (number of pulses) covered after an antipich detection. Application layer uses this signal for tracking the reverse movement. |
| STAT_WINDSHIELDMOTORDIRECTION1STATUS | 0-n | high | unsigned char | - | TAB_WIN_MOTOR_DIRECTION1_STATUS | - | - | - | Indicates status of relay controlled by C_WS_DCMOTOR_DIRECTION1. Diagnosis read through D_WS_DCMOTOR1. |
| STAT_WINDSHIELDMOTORDIRECTION1STATUS_2 | 0-n | high | unsigned char | - | TAB_WIN_MOTOR_DIRECTION1_STATUS | - | - | - | Indicates status of relay controlled by C_WS_DCMOTOR_DIRECTION2. Diagnosis read through D_WS_DCMOTOR2. |
| STAT_WINDSHIELDMOTORHALLSENSOR1VCCSTATUS | 0-n | high | unsigned char | - | TAB_WIN_HALL_SENSOR_VCCSTATUS | - | - | - | Indicates if there is a shortcircuit, whether to Battery or Ground, in output O_WS_HALL_SUPPLY. Diagnosis read through D_HALL_SENSORVCC_SC. |
| STAT_WINDSHIELDMOTORHALLSENSOR1GNDSTATUS | 0-n | high | unsigned char | - | TAB_WIN_HALL_SENSOR_VCCSTATUS | - | - | - | Indicates if there is a shortcircuit to Battery (shortcircuit to ground in this case has no sense), in output O_WS_HALL_SUPPLY_GND. Diagnosis read through D_HALL_SENSORGND_SC. |
| STAT_WINDSHIELDHALLSENSOR1TIMEOUT | 0-n | high | unsigned char | - | TAB_WIN_HALLSENSOR1_TIME | - | - | - | Indicates if no pulses are received from windshield hall sensor 1. |
| STAT_WINDSHIELDHALLSENSOR2TIMEOUT | 0-n | high | unsigned char | - | TAB_WIN_HALLSENSOR1_TIME | - | - | - | Indicates if no pulses are received from windshield hall sensor 2. |
| STAT_WINDSHIELDMOTORHALLSENSOR1OLSTATUS | 0-n | high | unsigned char | - | TAB_WIN_HALLSENSOR1_OL | - | - | - | Indicates if there is an openload in the hall sensor supply. |
| STAT_CANTIMEOUTFLAGS01_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 operationVehicleTimeout1 0x02 inSwitchClusterLeftHandTimeout1 0x04 speedTimeout1 0x08 clampStatusTimeout1 0x10 kombiDataTimeout 0x20 engineData2Timeout1 0x40 statusStandardFunctionTimeout1 |
| STAT_CANTIMEOUTFLAGS02_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 operationVehicleTimeout2 0x02 inSwitchClusterLeftHandTimeout2 0x04 speedTimeout2 0x08 clampStatusTimeout2 0x10 engineData2Timeout2 0x20 statusStandardFunctionTimeout2 |
| STAT_OTHERFLAGS_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 CANBusOff 0x02 OtherECUFlashing 0x04 CANBusWarning 0x08 ClearWinAutoLockDTC |
| STAT_EEPROMFLAGS_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 winDfaE06Changed 0x02 shdDfaE06Changed 0x04 dgnDfaE06Changed 0x08 dgnDfaE07Changed 0x10 dgnDfaE09Changed |
| STAT_LOADFAILUREFLAGS_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 LowHighBeamLightFailure 0x02 BrakeLightFailure 0x04 AdditionalLight1Failure 0x08 AdditionalLight2Failure 0x10 RearFogFailure 0x20 WinLockedDuetoHsSC 0x40 WinLockedDuetoDCMotSC 0x80 winHall1InterruptStatus |
| STAT_SHDCHARCURVETEMP0_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Indicates the temperature at which Seat Heater Driver should be set to 100% duty: cfg_SHDCharCurveTemp1 - 5º Temperature range -40...215°C |
| STAT_SHDCHARCURVETEMP1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Indicates the temperature at which Seat Heater Driver should be set to 100% duty: cfg_SHDCharCurveTemp1 - 5º Temperature range -40...215°C |
| STAT_SHDCHARCURVETEMP2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Indicates the temperature at which Seat Heater Driver should be set to 100% duty: cfg_SHDCharCurveTemp1 - 5º Temperature range -40...215°C |
| STAT_SHDCHARCURVETEMP3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Indicates the temperature at which Seat Heater Driver should be set to 100% duty: cfg_SHDCharCurveTemp1 - 5º Temperature range -40...215°C |
| STAT_SHDCHARCURVETEMP4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Indicates the temperature at which Seat Heater Driver should be set to 100% duty: cfg_SHDCharCurveTemp1 - 5º Temperature range -40...215°C |
| STAT_SHDCHARCURVETEMP5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Indicates the temperature at which Seat Heater Driver should be set to 100% duty: cfg_SHDCharCurveTemp1 - 5º Temperature range -40...215°C |
| STAT_SHDCHARCURVETEMP6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Indicates the temperature at which Seat Heater Driver should be set to 100% duty: cfg_SHDCharCurveTemp1 - 5º Temperature range -40...215°C |
| STAT_SHDCHARCURVEPWM0_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Contains a value of 100% for Seat Heater Driver duty. PWM range 0...100% |
| STAT_SHDCHARCURVEPWM1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Contains a value of 100% for Seat Heater Driver duty. PWM range 0...100% |
| STAT_SHDCHARCURVEPWM2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Contains a value of 100% for Seat Heater Driver duty. PWM range 0...100% |
| STAT_SHDCHARCURVEPWM3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Contains a value of 100% for Seat Heater Driver duty. PWM range 0...100% |
| STAT_SHDCHARCURVEPWM4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Contains a value of 100% for Seat Heater Driver duty. PWM range 0...100% |
| STAT_SHDCHARCURVEPWM5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Contains a value of 100% for Seat Heater Driver duty. PWM range 0...100% |
| STAT_SHDCHARCURVEPWM6_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Contains a value of 100% for Seat Heater Driver duty. PWM range 0...100% |
| STAT_SHPCHARCURVETEMP0_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Indicates the temperature at which Seat Heater Pillion Driver should be set to 100% duty: cfg_SHPCharCurveTemp1 - 5º Temperature range -40...215°C |
| STAT_SHPCHARCURVETEMP1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Indicates the temperature at which Seat Heater Pillion Driver should be set to 100% duty: cfg_SHPCharCurveTemp1 - 5º Temperature range -40...215°C |
| STAT_SHPCHARCURVETEMP2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Indicates the temperature at which Seat Heater Pillion Driver should be set to 100% duty: cfg_SHPCharCurveTemp1 - 5º Temperature range -40...215°C |
| STAT_SHPCHARCURVETEMP3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Indicates the temperature at which Seat Heater Pillion Driver should be set to 100% duty: cfg_SHPCharCurveTemp1 - 5º Temperature range -40...215°C |
| STAT_SHPCHARCURVETEMP4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Indicates the temperature at which Seat Heater Pillion Driver should be set to 100% duty: cfg_SHPCharCurveTemp1 - 5º Temperature range -40...215°C |
| STAT_SHPCHARCURVETEMP5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Indicates the temperature at which Seat Heater Pillion Driver should be set to 100% duty: cfg_SHPCharCurveTemp1 - 5º Temperature range -40...215°C |
| STAT_SHPCHARCURVETEMP6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Indicates the temperature at which Seat Heater Pillion Driver should be set to 100% duty: cfg_SHPCharCurveTemp1 - 5º Temperature range -40...215°C |
| STAT_SHPCHARCURVEPWM0_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Contains a value of 100% for Seat Heater Pillion Driver duty. PWM range 0...100% |
| STAT_SHPCHARCURVEPWM1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Contains a value of 100% for Seat Heater Pillion Driver duty. PWM range 0...100% |
| STAT_SHPCHARCURVEPWM2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Contains a value of 100% for Seat Heater Pillion Driver duty. PWM range 0...100% |
| STAT_SHPCHARCURVEPWM3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Contains a value of 100% for Seat Heater Pillion Driver duty. PWM range 0...100% |
| STAT_SHPCHARCURVEPWM4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Contains a value of 100% for Seat Heater Pillion Driver duty. PWM range 0...100% |
| STAT_SHPCHARCURVEPWM5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Contains a value of 100% for Seat Heater Pillion Driver duty. PWM range 0...100% |
| STAT_SHPCHARCURVEPWM6_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Contains a value of 100% for Seat Heater Pillion Driver duty. PWM range 0...100% |
| STAT_AUTAUTHORRELAYTIMERRPM_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AuthorRelayTimerRpm counter used in AUT model. |
| STAT_WINWINSUPERIORTIMEOUT_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | WinSuperiorTimeout counter used in WIN model. |
| STAT_CANOPVEHICLETIMEOUT_WERT | ms | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | Timeout counter used in C2H. |
| STAT_CANINSCLHTIMEOUT_WERT | ms | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | Timeout counter used in C2H. |
| STAT_CANSPEEDTIMEOUT_WERT | ms | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | Timeout counter used in C2H. |
| STAT_CANCLAMPSTATUSTIMEOUT_WERT | ms | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | Timeout counter used in C2H. |
| STAT_CANKOMBIDATATIMEOUT_WERT | ms | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | Timeout counter used in C2H. |
| STAT_CANENGINEDATA2TIMEOUT_WERT | ms | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | Timeout counter used in C2H. |
| STAT_CANSTSTDFUNCTTIMEOUT_WERT | ms | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | Timeout counter used in C2H. |
| STAT_KL15ONDTCDEBOUNCETIMER_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | KL15OnTimer counter used in SIG. |
| STAT_KL50ONDTCDEBOUNCETIMER_WERT | ms | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | KL50OnTimer counter used in SIG. |
| STAT_WINWINT1TIMEOUT_WERT | ms | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | WinT1Timeout counter used in WIN model. |
| STAT_WINAPPT3TIMER_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Timer WinAppT3 used in WIN model. |
| STAT_WINAPPT4TIMER_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Timer WinAppT4 used in WIN model. |
| STAT_WINAPPT5TIMER_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Timer WinAppT5 used in WIN model. |
| STAT_MICROPORTSFORXCPPORTA_WERT | HEX | high | unsigned char | - | - | - | - | - | MicroPortsForXCPportA 0x01 uNaviCaseSwitch |
| STAT_MICROPORTSFORXCPPORTE_WERT | HEX | high | unsigned char | - | - | - | - | - | MicroPortsForXCPportE 0x02 uCrankingInterrupt |
| STAT_MICROPORTSFORXCPPORTP_WERT | HEX | high | unsigned char | - | - | - | - | - | MicroPortsForXCPportP 0x08 uWindshieldMotorDirect2 0x20 uWindshieldHallSupply |
| STAT_MICROPORTSFORXCPPORTT_WERT | HEX | high | unsigned char | - | - | - | - | - | MicroPortsForXCPportT 0x01 uWindshieldHall1 0x02 uSeatHeatPillionPos2_Author 0x04 uSeatHeatPillionPos1_Author 0x08 uSeatHeatDriverPushButton 0x10 uAdditionalLightInput_Author 0x20 uFailPowerDiag 0x40 uWindshieldMotorDirect1 0x80 uWindshieldHall2 |
| STAT_UBATTERYVOLTAGESENSE_WERT | V | high | unsigned int | - | - | 0.02 | 1.0 | 0.0 | Schematic name: D_VBATT_SENSE |
| STAT_UINTERNALTEMPSENSE_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Schematic name: D_NTC_SENSE |
| STAT_UPOWERSENSEDIAG_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Schematic name: D_POWER_SENSE |
| STAT_UWINDSHIELDCURRENTSENSE_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Schematic name: D_WS_CURRENT_SENSE |
| STAT_UWINDSHIELDDCMOTOR1DIAG_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Schematic name: D_WS_DCMOTOR1 |
| STAT_UWINDSHIELDDCMOTOR2DIAG_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Schematic name: D_WS_DCMOTOR2 |
| STAT_UHALLSENSORVCCDIAG_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Schematic name: D_HALL_SENSORVCC_SC |
| STAT_UHALLSENSORGNDDIAG_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Schematic name: D_HALL_SENSORGND_SC |
| STAT_UWSIHALL1MICRO_WERT | Schritte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | uWSIHall1Micro |
| STAT_UWSIHALL2MICRO_WERT | Schritte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | uWSIHall2Micro |
| STAT_USHPCURRENTSENSE_WERT | Schritte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | uSHPCurrentSense |
| STAT_OMMSTATUS | 0-n | high | unsigned char | - | TAB_OMM_STATUS | - | - | - | ind_OMM_Task variable used in OMM FSM. |
| STAT_BASICFREQUENCYPWM_WERT | Hz | high | unsigned char | - | - | 4.0 | 1.0 | 0.0 | Real frequency used in light functional modules. |
| STAT_INTERNALFUNCTIONACTIVEFLAGS_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 KL15OnDTCDebTimePassed 0x02 KL50OnDTCDebTimePassed 0x04 OverUnderDTCDebTimePassed 0x08 statusOperatingVoltageRange |
| STAT_SHDSTEPCHOSENBYIOSERV | 0-n | high | unsigned char | - | TAB_MR_SITZHEIZUNG_FAHRER_EINGANG_FKT | - | - | - | Seat Heating chosen step via IOControl diagnostic service DID E108 (control input seat heating function motorbike) |
| STAT_UNDEROVERDTCDEBOUNCETIMER_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | UnderOverVoltTimer counter used in SIG. |
| STAT_WIN_RESERVED_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_WIN_RESERVED |
| STAT_WAPESTIMATEDFRICTION_WERT | Stufe | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Estimated friction for the WINshield assembly, calculated by service WAP (Windshield Antipinch Protection). |
| STAT_WINPOSITION_WERT | Stufe | high | int | - | - | 1.0 | 1.0 | 0.0 | Windshield position as reported by application layer |
| STAT_KL15TIMERFLAGS_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 KL15OnTimerRunning |
| STAT_WSVMOVEMENTSTATUSFORDRV | 0-n | high | unsigned char | - | WINDSHIELD_MOVEMENT | - | - | - | Service layer informs about actual windshield status to driver layer. Definition list = definition list in wsvMovementStatus |
| STAT_WAPCURRENTTHRESHOLD_WERT | Stufe | high | long | - | - | 1.0 | 1.0 | 0.0 | Estimated friction threshold, calculated by service WAP (Windshield Antipinch Protection). |
| STAT_WINDSHIELDRELATEDFLAGS_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 dgnRequestWinDenorm 0x02 WinStartReference 0x04 dgnRequestWinInitialization 0x08 winRequestWinInitialization 0x10 wsvRequestResetPosition 0x20 wapInitCheckCalibrationRecommended 0x40 whsStatusHall1 0x80 whsStatusHall2 |
| STAT_APPWINDSHIELDDUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | signal to inform the application layer which is the speed of the windshield |
| STAT_WAPCALIBRATIONPULSEFILTER_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Indicates to the application layer how many pulses it has to add to the lowest position in order to avoid false pinch detection. |
| STAT_WHSRENORMINGPULSEFILTER_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Indicates how many pulses has to be added to the pulse filter. These additional pulses comes from a renorming of the windshield. |
| STAT_WAPINITCHECKHIGHESTPOSITION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates range of movement (number of pulses) available for the windshield, calculated during the initialization. |
| STAT_WAPINITCHECKFRICTION_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates average friction of windshield dc-motor, calculated during the initialization. |
| STAT_WAPINITCHECKVOLTAGE_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates average voltage during the windshield initialization. |
| STAT_WAPINITCHECKTEMPERATURE_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates average temperature reported by the internal NTC during the windshield initialization. |
| STAT_WAPINITCHECKFRICTIONDEVIATION_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Indicates deviation of average friction calculated during windshield initialization with respect to average friction calculated in the calibration run. |
| STAT_WAPINITCHECKTIME_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | time needed for latest initialization of windshield |
| STAT_WAPINITCHECKCURRENT_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | average current consumption of windhsield in latest initialization run. |
| STAT_WINANGULARSPEED_WERT | Stufe | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angular speed of windshield dc-motor |
| STAT_WINCALIBRATIONSTEP | 0-n | high | unsigned char | - | - | - | - | - | Application layer informs through this signal which state the calibration is in. UNDEFINED 255; ONE_DOWN 3; TWO_UP 2; THREE_DOWN 1; FOUR_UP 0; |
| STAT_WINSOFTCALIBRATIONFILTER_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Pulse filter found during last soft calibration. |
| STAT_WSVPOSITION_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Absolut position of the windshield |
| STAT_WINANDINTERRUPTFLAGS_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 whsRenormingFilterReady       0x02 wapRenormingFilterChecked     0x04 immCrankingIsActivated        0x08 crankingActive                0x10 dgnIgnoreNaviCase             0x20 WinUpNormed                   0x40 WinDownNormed                 0x80 wapCheckSoftCalibrationFilter |
| STAT_WINCALIBSTATUS | 0-n | high | unsigned char | - | - | - | - | - | Indicates status of last calibration. |
| STAT_WHMWINDSHIELDCURRENTCRANKINGSHORTCIRCUIT_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates status of last calibration. |
| STAT_WSVRENORMINGRANGEOFMOVEMENT_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates range of movement found in renorming. |
| STAT_WSVRENORMINGRANGE_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | It shows which is the range of movement calculated so far during the renorming. |
| STAT_OVERVOLTAGETIMEOUT_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | counter used in Operating Voltge Debounce time. |
| STAT_UNDERVOLTAGETIMEOUT_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | counter used in Operating Voltge Debounce time. |
| STAT_EEPROMCHANGEFLAGS_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 winDfaEDataChanged 0x02 windgnDfaEDataChanged 0x04 shdDfaEDataChanged 0x08 winDfaEDataBusy 0x10 shdDfaEDataBusy 0x20 windgnDfaEDataBusy 0x40 dgnDfaE07DataBusy 0x80 dgnDfaE10Changed |
| STAT_TIMERKL15_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ABS Switch ON debounce Timer which starts at KL15 ON |
| STAT_WSWDOWNWARDFRICTIONTRACKINGSTATUS_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enables/Disables calucation of friction when windshield is moved from end to end downward. INVALID 0; VALID_ONGOING 1; VALID_FINISH 2; |
| STAT_WSWUPWARDFRICTIONTRACKINGSTATUS_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enables/Disables calucation of friction when windshield is moved from end to end upward. INVALID 0; VALID_ONGOING 1; VALID_FINISH 2; |
| STAT_EEPROMWINFLAGS_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 winDfaE11DataBusy 0x02 winDfaE11DataChanged 0x04 wasDfaE11DataChanged 0x08  0x10  0x20  0x40  0x80 |
| STAT_LOADFAILUREFLAGS01_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 LowHighBeamLightFailure_OC 0x02 LowHighBeamLightFailure_STG 0x04 LowHighBeamLightFailure_STB 0x08 BrakeLightFailure_STG 0x10 BrakeLightFailure_STB 0x20 AdditionalLight1Failure_OC 0x40 AdditionalLight1Failure_STG 0x80 AdditionalLight1Failure_STB |
| STAT_LOADFAILUREFLAGS02_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 AdditionalLight2Failure_OC 0x02 AdditionalLight2Failure_STG 0x04 AdditionalLight2Failure_STB 0x08  0x10  0x20  0x40  0x80 |
| STAT_RESERVED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Not used |

### RES_0XFD09_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WIN_MOTOR_STOP_INDEX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index for accessing the 5-position array informing of the status of the Windshield motor. |
| STAT_WIN_MOTOR_STOP_REASON_0 | 0-n | high | unsigned char | - | WIN_MOTOR_STOP_REASON_LOG | - | - | - | Windshield Motor stop reason Log entry 0 |
| STAT_WIN_MOTOR_STOP_REASON_1 | 0-n | high | unsigned char | - | WIN_MOTOR_STOP_REASON_LOG | - | - | - | Windshield Motor stop reason Log entry 1 |
| STAT_WIN_MOTOR_STOP_REASON_2 | 0-n | high | unsigned char | - | WIN_MOTOR_STOP_REASON_LOG | - | - | - | Windshield Motor stop reason Log entry 2 |
| STAT_WIN_MOTOR_STOP_REASON_3 | 0-n | high | unsigned char | - | WIN_MOTOR_STOP_REASON_LOG | - | - | - | Windshield Motor stop reason Log entry 3 |
| STAT_WIN_MOTOR_STOP_REASON_4 | 0-n | high | unsigned char | - | WIN_MOTOR_STOP_REASON_LOG | - | - | - | Windshield Motor stop reason Log entry 0 |

### RES_0XFD0A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUMBER_OF_LOG_ENTRIE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number of reversing logger entries. |
| STAT_LOG_INDEX | 0-n | high | unsigned char | - | TAB_LOG_INDEX | 1.0 | 1.0 | 0.0 |  index pointing to last reversing logger entry. |
| STAT_SUPPLY_VOLTAGE_0_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Battery voltage level value when the pinch situation was detected. |
| STAT_MOTOR_CURRENT_0_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Current consumption of the windshield when the pinch situation was detected. |
| STAT_LOG_POSITION_0_WERT | Schritt | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 |  position of the windshield when the pinch situation was detected. |
| STAT_LOG_FRICTION_0_WERT | - | high | long | - | - | 1.0 | 1.0 | 0.0 | Estimated friction of the motor when the pinch situation was detected. |
| STAT_LOG_FRICTION_THRESHOLD_0_WERT | - | high | long | - | - | 1.0 | 1.0 | 0.0 | Threshold of friction calculated for antipinch detection. |
| STAT_MOTOR_DUTY_CYCLE_0_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle applied to the windshield when antipinch was detected. A duty cycle of 100% means that the windshield was being driven at full speed; less than 100% means that the windshield was in the soft stop area. |
| STAT_MOVEMENT_DIRECTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Direction of movement when the pinch situation was detected. |
| STAT_AMB_TEMP_0_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 |  outside temperature when the antipinch was triggered. The value stored is the value received via CAN from BCO. |
| STAT_SUPPLY_VOLTAGE_1_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Battery voltage level value when the pinch situation was detected. |
| STAT_MOTOR_CURRENT_1_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Current consumption of the windshield when the pinch situation was detected. |
| STAT_LOG_POSITION_1_WERT | Schritt | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 |  position of the windshield when the pinch situation was detected. |
| STAT_LOG_FRICTION_1_WERT | - | high | long | - | - | 1.0 | 1.0 | 0.0 | Estimated friction of the motor when the pinch situation was detected. |
| STAT_LOG_FRICTION_THRESHOLD_1_WERT | - | high | long | - | - | 1.0 | 1.0 | 0.0 | Threshold of friction calculated for antipinch detection. |
| STAT_MOTOR_DUTY_CYCLE_1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle applied to the windshield when antipinch was detected. A duty cycle of 100% means that the windshield was being driven at full speed; less than 100% means that the windshield was in the soft stop area. |
| STAT_MOVEMENT_DIRECTION_1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Direction of movement when the pinch situation was detected. |
| STAT_AMB_TEMP_1_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 |  outside temperature when the antipinch was triggered. The value stored is the value received via CAN from BCO. |
| STAT_SUPPLY_VOLTAGE_2_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Battery voltage level value when the pinch situation was detected. |
| STAT_MOTOR_CURRENT_2_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Current consumption of the windshield when the pinch situation was detected. |
| STAT_LOG_POSITION_2_WERT | Schritt | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 |  position of the windshield when the pinch situation was detected. |
| STAT_LOG_FRICTION_2_WERT | - | high | long | - | - | 1.0 | 1.0 | 0.0 | Estimated friction of the motor when the pinch situation was detected. |
| STAT_LOG_FRICTION_THRESHOLD_2_WERT | - | high | long | - | - | 1.0 | 1.0 | 0.0 | Threshold of friction calculated for antipinch detection. |
| STAT_MOTOR_DUTY_CYCLE_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle applied to the windshield when antipinch was detected. A duty cycle of 100% means that the windshield was being driven at full speed; less than 100% means that the windshield was in the soft stop area. |
| STAT_MOVEMENT_DIRECTION_2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Direction of movement when the pinch situation was detected. |
| STAT_AMB_TEMP_2_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 |  outside temperature when the antipinch was triggered. The value stored is the value received via CAN from BCO. |
| STAT_SUPPLY_VOLTAGE_3_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Battery voltage level value when the pinch situation was detected. |
| STAT_MOTOR_CURRENT_3_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Current consumption of the windshield when the pinch situation was detected. |
| STAT_LOG_POSITION_3_WERT | Schritt | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 |  position of the windshield when the pinch situation was detected. |
| STAT_LOG_FRICTION_3_WERT | - | high | long | - | - | 1.0 | 1.0 | 0.0 | Estimated friction of the motor when the pinch situation was detected. |
| STAT_LOG_FRICTION_THRESHOLD_3_WERT | - | high | long | - | - | 1.0 | 1.0 | 0.0 | Threshold of friction calculated for antipinch detection. |
| STAT_MOTOR_DUTY_CYCLE_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle applied to the windshield when antipinch was detected. A duty cycle of 100% means that the windshield was being driven at full speed; less than 100% means that the windshield was in the soft stop area. |
| STAT_MOVEMENT_DIRECTION_3 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Direction of movement when the pinch situation was detected. |
| STAT_AMB_TEMP_3_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 |  outside temperature when the antipinch was triggered. The value stored is the value received via CAN from BCO. |
| STAT_SUPPLY_VOLTAGE_4_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Battery voltage level value when the pinch situation was detected. |
| STAT_MOTOR_CURRENT_4_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Current consumption of the windshield when the pinch situation was detected. |
| STAT_LOG_POSITION_4_WERT | Schritt | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 |  position of the windshield when the pinch situation was detected. |
| STAT_LOG_FRICTION_4_WERT | - | high | long | - | - | 1.0 | 1.0 | 0.0 | Estimated friction of the motor when the pinch situation was detected. |
| STAT_LOG_FRICTION_THRESHOLD_4_WERT | - | high | long | - | - | 1.0 | 1.0 | 0.0 | Threshold of friction calculated for antipinch detection. |
| STAT_MOTOR_DUTY_CYCLE_4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle applied to the windshield when antipinch was detected. A duty cycle of 100% means that the windshield was being driven at full speed; less than 100% means that the windshield was in the soft stop area. |
| STAT_MOVEMENT_DIRECTION_4 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Direction of movement when the pinch situation was detected. |
| STAT_AMB_TEMP_4_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 |  outside temperature when the antipinch was triggered. The value stored is the value received via CAN from BCO. |

### RES_0XFD0C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUMBER_OF_DENORM_ENTRY_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number of denorming logger entries. |
| STAT_DENORM_INDEX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index index pointing to last denorming logger entry. |
| STAT_DENORM_REASON_0 | 0-n | high | unsigned char | - | TAB_DENORM_REASON | 1.0 | 1.0 | 0.0 | denorming reason |
| STAT_DENORM_PREVIOUS_REASON_0 | 0-n | high | unsigned char | - | TAB_DENORM_REASON | 1.0 | 1.0 | 0.0 | previous denorming reason. |
| STAT_DENORM_POSITION_0_WERT | Schritt | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | position where the denorming/norming has occured. |
| STAT_DENORM_DUTY_CYCLE_0_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | duty cycle applied to the windshield when denorming/norming occurred. |
| STAT_DENORM_MOVE_DIRECTION_0 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | direction of movement when the denorming/norming occured |
| STAT_SUPPLY_VOLTAGE_0_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 |  battery voltage when the denorming/norming occured. |
| STAT_MOTOR_CURRENT_0_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 |  current consumption of the windhsield when the denorming/norming occured. |
| STAT_DENORM_AMB_TEMP_0_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | outside temperature when the denorming/norming occured. The value stored is the value received via CAN from BCO. |
| STAT_DENORM_REASON_1 | 0-n | high | unsigned char | - | TAB_DENORM_REASON | 1.0 | 1.0 | 0.0 | denorming reason |
| STAT_DENORM_PREVIOUS_REASON_1 | 0-n | high | unsigned char | - | TAB_DENORM_REASON | 1.0 | 1.0 | 0.0 | previous denorming reason. |
| STAT_DENORM_POSITION_1_WERT | Schritt | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | position where the denorming/norming has occured. |
| STAT_DENORM_DUTY_CYCLE_1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | duty cycle applied to the windshield when denorming/norming occurred. |
| STAT_DENORM_MOVE_DIRECTION_1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | direction of movement when the denorming/norming occured |
| STAT_SUPPLY_VOLTAGE_1_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 |  battery voltage when the denorming/norming occured. |
| STAT_MOTOR_CURRENT_1_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 |  current consumption of the windhsield when the denorming/norming occured. |
| STAT_DENORM_AMB_TEMP_1_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | outside temperature when the denorming/norming occured. The value stored is the value received via CAN from BCO. |
| STAT_DENORM_REASON_2 | 0-n | high | unsigned char | - | TAB_DENORM_REASON | 1.0 | 1.0 | 0.0 | denorming reason |
| STAT_DENORM_PREVIOUS_REASON_2 | 0-n | high | unsigned char | - | TAB_DENORM_REASON | 1.0 | 1.0 | 0.0 | previous denorming reason. |
| STAT_DENORM_POSITION_2_WERT | Schritt | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | position where the denorming/norming has occured. |
| STAT_DENORM_DUTY_CYCLE_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | duty cycle applied to the windshield when denorming/norming occurred. |
| STAT_DENORM_MOVE_DIRECTION_2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | direction of movement when the denorming/norming occured |
| STAT_SUPPLY_VOLTAGE_2_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 |  battery voltage when the denorming/norming occured. |
| STAT_MOTOR_CURRENT_2_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 |  current consumption of the windhsield when the denorming/norming occured. |
| STAT_DENORM_AMB_TEMP_2_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | outside temperature when the denorming/norming occured. The value stored is the value received via CAN from BCO. |
| STAT_DENORM_REASON_3 | 0-n | high | unsigned char | - | TAB_DENORM_REASON | 1.0 | 1.0 | 0.0 | denorming reason |
| STAT_DENORM_PREVIOUS_REASON_3 | 0-n | high | unsigned char | - | TAB_DENORM_REASON | 1.0 | 1.0 | 0.0 | previous denorming reason. |
| STAT_DENORM_POSITION_3_WERT | Schritt | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | position where the denorming/norming has occured. |
| STAT_DENORM_DUTY_CYCLE_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | duty cycle applied to the windshield when denorming/norming occurred. |
| STAT_DENORM_MOVE_DIRECTION_3 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | direction of movement when the denorming/norming occured |
| STAT_SUPPLY_VOLTAGE_3_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 |  battery voltage when the denorming/norming occured. |
| STAT_MOTOR_CURRENT_3_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 |  current consumption of the windhsield when the denorming/norming occured. |
| STAT_DENORM_AMB_TEMP_3_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | outside temperature when the denorming/norming occured. The value stored is the value received via CAN from BCO. |
| STAT_DENORM_REASON_4 | 0-n | high | unsigned char | - | TAB_DENORM_REASON | 1.0 | 1.0 | 0.0 | denorming reason |
| STAT_DENORM_PREVIOUS_REASON_4 | 0-n | high | unsigned char | - | TAB_DENORM_REASON | 1.0 | 1.0 | 0.0 | previous denorming reason. |
| STAT_DENORM_POSITION_4_WERT | Schritt | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | position where the denorming/norming has occured. |
| STAT_DENORM_DUTY_CYCLE_4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | duty cycle applied to the windshield when denorming/norming occurred. |
| STAT_DENORM_MOVE_DIRECTION_4 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | direction of movement when the denorming/norming occured |
| STAT_SUPPLY_VOLTAGE_4_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 |  battery voltage when the denorming/norming occured. |
| STAT_MOTOR_CURRENT_4_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 |  current consumption of the windhsield when the denorming/norming occured. |
| STAT_DENORM_AMB_TEMP_4_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | outside temperature when the denorming/norming occured. The value stored is the value received via CAN from BCO. |

### RES_0XFD0D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COUNTER_DIAG_CALIBRATION_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number of calibration runs performed by the windschield and requested by diagnostic. |
| STAT_COUNTER_SOFT_CALIBRATION_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 |  number of soft calibrations since last calibration run. |
| STAT_COUNTER_HARD_CALIBRATION_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number of hard recalibrations (renorming due to shortcircuit detection), since last calibration run. |
| STAT_COUNTER_DENORMING_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 |  number of denormings done by user (by pressing up button 15 s < t < 20 s), since last calibration run. |
| STAT_COUNTER_NORMING_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number of renormings. |
| STAT_COUNTER_AUTOMATIC_RUNS_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number of automatic runs performed by the windschield since last calibration run. |
| STAT_COUNTER_USER_DOWN_MOVE_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number of down movements requested by user since last calibration run. Only down movements that change the position are counted. |
| STAT_COUNTER_USER_UP_MOVE_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number of up movements requested by user since last calibration run. Only up movements that change the position are counted. |
| STAT_COUNTER_PINCH_ISSUE_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number of pinch issues since last calibration run. |
| STAT_COUNTER_TEMP_WARNING_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number of temperature problems (90% of maximum allowed temperature.) in motor reported by the motor temperature model since last calibration run. |
| STAT_COUNTER_MAX_TEMP_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 |  number of temperature problems (100% of maximum allowed temperature.) in motor reported by the motor temperature model since last calibration run. |

### RES_0XFD0F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WIN_INITIALISE_COUNTER_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Windshield Initialisation Counter |
| STAT_WIN_INIT_KILOMETER_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 |  kilometer reading in latest initialization run |

### RES_0XFD20_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATA_1_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x01   spare                   0x02   spare                   0x04   CANStrobe               0x08   PowerRST                0x10   Horn                    0x20   WindshieldMotorDirect2  0x40   WindshieldMotorDirect1  0x80   WindshieldHallSupply |

### RES_0XFD21_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WINDSHIELD_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Windshiled Duty |
| STAT_LOW_HIGH_BEAM_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Low High Beam Light Duty |
| STAT_ADDTIONAL_LIGHT_2_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Additional Light1 Light Duty |
| STAT_SEAT_HEATER_DRIVER_UTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Seat Heater driver duty |
| STAT_BRAKE_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Brake Light Duty |
| STAT_ADDTIONAL_LIGHT_2__DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Additional Light 2 Light Duty |
| STAT_SEAT_HEATER_PILLION_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Seat Heater driver duty |
| STAT_PWM_CLOCK_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Duty |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINDSCHILD_KALIBRIERUNG_MR | 0xB068 | - | Kalibrierung Windschild | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xB068_R |
| WINDSCHILD_VERFAHREN_SOLLPOSITION_MR | 0xB06A | - | Verfahren Windschild auf Sollposition | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB06A_R | RES_0xB06A_R |
| WINDSCHILD_AUTOMATIKLAUF_SPERRE_MR | 0xB06B | - | Sperrt Windschild Automatiklauf | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB06B_R | RES_0xB06B_R |
| HUPE_MR | 0xE010 | - | Hupe | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE010_D | RES_0xE010_D |
| HUPE_EINGANG_MR | 0xE0A3 | - | Hupe Eingang | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE0A3_D | RES_0xE0A3_D |
| PRODUKTIONSMODE_MR | 0xE0FF | - | Produktionsmode interne Vorgabe RDZ MDZ | - | - | - | - | - | - | - | - | - | 2F | - | - |
| ZUSATZSCHEINWERFER_MR | 0xE100 | - | Ausgang Zusatzscheinwerfer Behörde: Ausgang 1 Nebelschlussleuchte | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE100_D | RES_0xE100_D |
| ZUSATZSCHEINWERFER_EINGANG_MR | 0xE101 | - | Eingang Zusatzscheinwerfer Funktion Motorrad | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE101_D | RES_0xE101_D |
| TASTER_ZUSATZSCHEINWERFER_MR | 0xE102 | STAT_TASTER_ZUSATZSCHEINWERFER_EIN | Status Taster Zusatzscheinwerfer; 0 ==> nicht betätigt 1==> betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WINDSCHILD_EINGANG_MR | 0xE103 | - | Eingang Schaltwippe Windschild | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE103_D | RES_0xE103_D |
| ABBLEND_FERN_LICHT_MR | 0xE104 | - | Ausgang für Abblendlicht bzw. Fernlicht | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE104_D | RES_0xE104_D |
| WINDSCHILD_MR | 0xE105 | - | Windschild | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE105_D | RES_0xE105_D |
| TASTER_SITZHEIZUNG_FAHRER_MR | 0xE106 | STAT_TASTER_SITZHEIZUNG_FAHRER_EIN | Status Taster Sitzheizung; 0 ==> nicht betätigt 1==> betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_AUSGANG_MR | 0xE107 | - | Ausgang Sitzheizung Fahrer und Beifahrer | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE107_D | RES_0xE107_D |
| SITZHEIZUNG_EINGANG_MR | 0xE108 | - | Eingang Sitzheizung Fahrer und Beifahrer | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE108_D | RES_0xE108_D |
| ABBLEND_FERNLICHT_EINGANG_MR | 0xE10A | - | Abblend- bzw. Fernlicht Eingang | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE10A_D | RES_0xE10A_D |
| SCHALTER_SITZHEIZUNG_SOZIUS_MR | 0xE10B | - | Schalter Sitzheizung Sozius | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE10B_D |
| BREMSLICHT_TOPCASE_EINGANG_MR | 0xE10C | - | Bremslicht Topcase Eingang | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE10C_D | RES_0xE10C_D |
| BREMSLICHT_TOPCASE_MR | 0xE10D | - | Bremslicht Topcase Ausgang  Motorrad | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE10D_D | RES_0xE10D_D |
| BATTERIESPANNUNG_MR | 0xE142 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| PRG_VERSION | 0x1602 | - | read out the corresponding SGBD prg_version of ECU | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1602_D |
| WIND_ANTI_PINCH_INIT | 0xF001 | - | Initialization of the anti-pinching protection algorithm | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF001_R |
| CONFIGURATION_DATA | 0xFD01 | - | Configuration data parameters | - | STAT_LOAD_REJECT_CODING_MATRIX | - | - | - | - | - | - | - | 2E;22 | ARG_0xFD01_D | RES_0xFD01_D |
| INTERNAL_DATA_PARAMETER | 0xFD02 | - | Internal Data parameter | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFD02_D | RES_0xFD02_D |
| END_OF_LINE_INPUT | 0xFD03 | - | End Of Line Input Analog & Digital | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD03_D |
| END_OF_LINE_OUTPUT | 0xFD04 | - | End of Line Output Digital & PWM | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD04_D |
| LEAR_SW_VERSION | 0xFD05 | - | Lear Software Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD05_D |
| END_OF_LINE_DATA | 0xFD06 | - | End of line Data | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xFD06_D | RES_0xFD06_D |
| CPU_LOAD | 0xFD07 | - | CPU Load | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD07_D |
| INTER_APPLICATION_PARAMETER | 0xFD08 | - | Inter Application parameter | - | STAT_LOADREJECTION_WERT | - | - | - | - | - | - | - | 22 | - | RES_0xFD08_D |
| WIN_MOTOR_STOP_REASON_LOG | 0xFD09 | - | Windshield motor stop reason log data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD09_D |
| LOGGING_FUNCTION_DATA | 0xFD0A | - | Logging function data entries | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD0A_D |
| WIN_DENORMING | 0xFD0B | - | Denorming of Windshield | - | STAT_WIN_DENORM_REQUEST_WERT | - | - | - | - | - | - | - | 2E | ARG_0xFD0B_D | - |
| DENORM_LOG_DATA | 0xFD0C | - | Denorm Logging data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD0C_D |
| WIN_STATISTIC_COUNTER | 0xFD0D | - | Winshield statistic counter | - | STAT_COUNTER_DIAG_CALIBRATION_ | - | - | - | - | - | - | - | 22 | - | RES_0xFD0D_D |
| WIN_STATUS_MOTOR_STOP | 0xFD0E | STAT_WIN_STATUS_MOTOR_STOP | Status message when the windshield dc-motor stops. | 0-n | - | high | unsigned char | TAB_WIN_STATUS_MOTOR_STOP | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WINDSHIELD_ANTIPINCH_INFO_MEMORY | 0xFD0F | - | Information error memory for Windshield Anti-Pinch initialization . | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD0F_D |
| WINDSHIELD_INIT_DATA_TRUE | 0xFD10 | - | If due to the initialization run a significant deviation was detected, there must be a possibility (by using a diagnostic job from the location  development ) to set these datas (determined by an initialization run) as valid. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xFD10_D | - |
| DIGITAL_OUTPUT_CONTROL | 0xFD20 | - | Control of Digital Output | - | - | - | - | - | - | - | - | - | 2F | ARG_0xFD20_D | RES_0xFD20_D |
| PWM_OUTPUT_CONTROL | 0xFD21 | - | PWM duty ouyput control | - | - | - | - | - | - | - | - | - | 2F | ARG_0xFD21_D | RES_0xFD21_D |

### STAT_DIAG_WIN_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | WIN OK |
| 1 | Win  Motor Open Load while moving Down |
| 2 | Win  Motor Open Load while moving Up |
| 3 | Win Motor Short Circuit while moving Down |
| 4 | Win Motor Short Circuit while moving Up |
| 5 | Loss of Hall sensor |
| 6 | running |
| 7 | Aborted |
| 8 | Timeout |
| 9 | Navi case open |
| 10 | Hall sensor Open |
| 11 | Too few pulses |
| 255 | Pending |

### STAT_WIN_INIT_STATUS

| WERT | TEXT |
| --- | --- |
| 1 | Initialisation running |
| 2 | Initialisation ok |
| 3 | Error during Initialisation |
| 4 | Initialisation aborted |
| 255 | Invalid Status |

### SVK_VERSION_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | SVKVersion_01 |

### TAB_DENORM_REASON

| WERT | TEXT |
| --- | --- |
| 0x00 | ERRCALIB |
| 0x01 | NORM |
| 0x02 | INITSTART |
| 0x03 | DIAGCOMMAND |
| 0x04 | ERRCODING |
| 0x05 | HALLOFF |
| 0x06 | POSITIONERRI |
| 0x07 | POSITIONERRM |
| 0x08 | AFTERRESET |
| 0x09 | ERRHALL |
| 0x0A | UNKNOWN |
| 0x0B | DENORMUSER |
| 0x0C | ERRMOTOR |

### TAB_LOG_INDEX

| WERT | TEXT |
| --- | --- |
| 0x00 | first |
| 0x01 | second |
| 0x02 | third |
| 0x03 | fourth |
| 0x04 | fifth |
| 0xFF | No Logger Entry |

### TAB_MR_ABBLENDLICHT

| WERT | TEXT |
| --- | --- |
| 0 | reserviert |
| 1 | Abblendlicht Aus |
| 2 | Abblendlicht Ein |
| 3 | Signal ungueltig |
| 0xFF | undefiniert |

### TAB_MR_ABBLENDLICHT_ARG

| WERT | TEXT |
| --- | --- |
| 0 | reserviert |
| 1 | Abblendlicht Aus |
| 2 | Abblendlicht Ein |

### TAB_MR_KALIBRIERUNG_WINDSCHILD

| WERT | TEXT |
| --- | --- |
| 0x00 | noch nicht gestartet |
| 0x01 | wird durchgeführt |
| 0x02 | erfolgreich abgeschlossen |
| 0x03 | Fehler bei Kalibrierung |
| 0x04 | Kalibrierung abgebrochen |
| 0x05 | Fehler Kalibrierung weil Anzahl der Pulse nok |
| 0xFF | undefinierter Zustand |

### TAB_MR_SITZHEIZUNG_BEIFAHRER_EINGANG_FKT

| WERT | TEXT |
| --- | --- |
| 0x00 | Heizung aus |
| 0x01 | Heizung Stufe 1 |
| 0x02 | Heizung Stufe 2 |
| 0xff | Stufe unbekannt |

### TAB_MR_SITZHEIZUNG_BEIFAHRER_EINGANG_FKT_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | Heizung aus |
| 0x01 | Heizung Stufe 1 |
| 0x02 | Heizung Stufe 2 |

### TAB_MR_SITZHEIZUNG_FAHRER_EINGANG_FKT

| WERT | TEXT |
| --- | --- |
| 0x00 | Heizung aus |
| 0x01 | Heizung Stufe 1 |
| 0x02 | Heizung Stufe 2 |
| 0x03 | Heizung Stufe 3 |
| 0x04 | Heizung Stufe 4 |
| 0x05 | Heizung Stufe 5 |
| 0x06 | Heizung Stufe 6 |
| 0x07 | Signal ungueltig |
| 0xFF | unbekannte Stufe |

### TAB_MR_SITZHEIZUNG_FAHRER_EINGANG_FKT_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | Heizung aus |
| 0x01 | Heizung Stufe 1 |
| 0x02 | Heizung Stufe 2 |
| 0x03 | Heizung Stufe 3 |
| 0x04 | Heizung Stufe 4 |
| 0x05 | Heizung Stufe 5 |
| 0x06 | Heizung Stufe 6 |

### TAB_MR_STROM_SITZHEIZUNG_SOZIUS

| WERT | TEXT |
| --- | --- |
| 0 | Stromfluss zu gering oder Leitungsunterbrechung |
| 1 | eine Heizmatte wird angesteuert |
| 2 | zwei Heizmatten werden angesteuert |
| 3 | Kurzschluss |
| 0xff | ungueltig |

### TAB_MR_STROM_STATUS_HIGHSIDE

| WERT | TEXT |
| --- | --- |
| 0 | kein Stromfluss oder Leitungsunterbrechnung |
| 1 | Strom im Normbereich |
| 2 | Strom zu groß bzw. Kurzschluss |
| 0xff | ungueltig |

### TAB_MR_TASTER_NAVIFACH

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht betätigt |
| 0x01 | betätigt |
| 0xFF | nicht codiert |

### TAB_MR_WINDSCHILD

| WERT | TEXT |
| --- | --- |
| 0 | stopp |
| 1 | Windschild auf Taster Navifach aktiv |
| 2 | Windschild ab Taster Navifach aktiv |
| 3 | Windschild auf Taster Navifach wird ignoriert |
| 4 | Windschild ab Taster Navifach wird ignoriert |
| 0xff | ungültig |

### TAB_MR_WINDSCHILD_ARG

| WERT | TEXT |
| --- | --- |
| 0 | stopp |
| 1 | Windschild auf Taster Navifach aktiv |
| 2 | Windschild ab Taster Navifach aktiv |
| 3 | Windschild auf Taster Navifach wird ignoriert |
| 4 | Windschild ab Taster Navifach wird ignoriert |

### TAB_MR_WINDSCHILD_EINGANG

| WERT | TEXT |
| --- | --- |
| 0 | keine Windschild Taste gedrückt |
| 1 | Eingang Windschild auf |
| 2 | Eingang Windschild ab |
| 0xFF | ungültig |

### TAB_MR_WINDSCHILD_EINGANG_ARG

| WERT | TEXT |
| --- | --- |
| 0 | keine Windschild Taste gedrückt |
| 1 | Eingang Windschild auf |
| 2 | Eingang Windschild ab |

### TAB_MR_WINDSCHILD_SOLLPOSITION

| WERT | TEXT |
| --- | --- |
| 0 | noch nicht gestartet |
| 1 | wird verfahren |
| 2 | Sollposition erreicht |
| 3 | Einklemmschutz aktiv |
| 4 | Funktion gesperrt Taster Navifach |
| 5 | Fehler |
| 0xFF | ungültig |

### TAB_OMM_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | BOOT_INIT |
| 1 | NORMAL |
| 2 | START_UP |
| 3 | SW_LIMP_HOME |
| 4 | SLEEP |

### TAB_WIN_HALLSENSOR1_OL

| WERT | TEXT |
| --- | --- |
| 0 | NOT_PRESENT |
| 1 | PRESENT |
| 255 | UNKNOWN |

### TAB_WIN_HALLSENSOR1_TIME

| WERT | TEXT |
| --- | --- |
| 0 | OK |
| 1 | OUT |
| 255 | UNKNOWN |

### TAB_WIN_HALL_SENSOR_VCCSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | OK |
| 1 | SC_GND |
| 2 | SC_BAT |
| 3 | UNKNOWN |

### TAB_WIN_MOTOR_DIRECTION1_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | OK |
| 1 | SC_GND |
| 2 | SC_BAT |
| 3 | SC_BAT_OFF |
| 4 | UNKNOWN |

### TAB_WIN_MOTOR_LAST_ERROR

| WERT | TEXT |
| --- | --- |
| 0 | UNKNOWN |
| 1 | OK |
| 2 | OV |
| 3 | OL |
| 4 | SC |
| 5 | THERMAL_WARNING |
| 6 | THERMAL_PROTECTION |
| 7 | STB_OFF |
| 8 | STB_DC1 |
| 9 | STB_DC2 |

### TAB_WIN_STATUS_MOTOR_STOP

| WERT | TEXT |
| --- | --- |
| 0x00 | NOT_STOPPED |
| 0x01 | POSITION_REACHED |
| 0x02 | STOP_MOVE |
| 0x03 | NORM |
| 0x04 | DENORM |
| 0x05 | RENORM |
| 0x06 | PINCHING |
| 0x07 | BLOCKING |
| 0x08 | NO_MOVE |
| 0x09 | SAFETY_TIMER |
| 0x0A | OPPOSITE_DIRECTION |
| 0x0B | INVALID_TARGET_POS_LOW |
| 0x0C | INVALID_TARGET_POS_HIGH |
| 0x0D | STOP_MOVE_HIGH_TEMP |
| 0x0E | DRIVER_BAD |
| 0x0F | MOTOR_SHORT |
| 0x10 | RESET |
| 0x11 | PULSE_LOST_HALL |
| 0x12 | STARTUP_FAILED_VBAT |
| 0x13 | HALL_ERROR |
| 0x14 | SOFT_NORM |
| 0x15 | HARD_NORM |
| 0x16 | TIMEOUT |
| 0x17 | NORM_FAILED |
| 0x18 | DENORM_UP_NORM_DOWN |
| 0x19 | DENORM_DOWN_NORM_UP |
| 0x1A | INIT |
| 0x1B | INIT_FAIL |
| 0x1C | NORM_PENDING_KL15 |
| 0x1D | NORM_PENDING_NAVI |
| 0x1E | NORM_PENDING_KL15_NAVI |
| 0x1F | CALIB_RUNNING |
| 0x20 | INIT_RUNNING |
| 0x21 | MOTOR_STB_DC1 |
| 0x22 | MOTOR_STB_DC2 |

### WINDSHIELD_MOVEMENT

| WERT | TEXT |
| --- | --- |
| 0 | Windshield Stop |
| 1 | Windshield Down |
| 2 | Windshield Up |

### WIN_MOTOR_STOP_REASON_LOG

| WERT | TEXT |
| --- | --- |
| 0 | WIN_NOT_STOPPED |
| 1 | WIN_POSITION_REACHED |
| 2 | WIN_STOP_MOVE |
| 3 | WIN_NORM |
| 4 | WIN_DENORM |
| 5 | WIN_RENORM |
| 6 | WIN_PINCHING |
| 7 | WIN_BLOCKING |
| 8 | WIN_NO_MOVE |
| 9 | WIN_SAFETY_TIMER |
| 10 | WIN_OPPOSITE_DIRECTION |
| 11 | WIN_INVALID_TARGET_POS_LOW |
| 12 | WIN_INVALID_TARGET_POS_HIGH |
| 13 | WIN_STOP_MOVE_HIGH_TEMP |
| 14 | WIN_DRIVER_BAD |
| 15 | WIN_MOTOR_SHORT |
| 16 | WIN_RESET |
| 17 | WIN_PULSE_LOST_HALL |
| 18 | WIN_STARTUP_FAILED_VBAT |
| 19 | WIN_HALL_ERROR |
| 20 | WIN_SOFT_NORM |
| 21 | WIN_HARD_NORM |
| 22 | WIN_TIMEOUT |
| 23 | WIN_NORM_FAILED |
| 24 | WIN_DENORM_UP_NORM_DOWN |
| 25 | WIN_DENORM_DOWN_NORM_UP |
| 26 | WIN_INIT |
| 27 | WIN_INIT_FAIL |
| 28 | WIN_NORM_PENDING_KL15 |
| 29 | WIN_NORM_PENDING_NAVI |
| 30 | WIN_NORM_PENDING_KL15_NAVI |
| 31 | CALIB_RUNNING |
| 32 | INIT_RUNNING |
| 33 | MOTOR_STB_DC1 |
| 34 | MOTOR_STB_DC2 |

### WIN_WTP_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | UNKNOWN |
| 1 | NORMAL |
| 2 | WARNING |
| 3 | MAX |

### WSV_DCMOTOR_CURRENT_CONSUMPTION

| WERT | TEXT |
| --- | --- |
| 0x0 | NOT_YET_DIAGNOSED |
| 0x1 | CURRENT_CONSUMPTION_OK |
| 0x2 | OPENLOAD_NOCONSUMPTION |
| 0x3 | OVERCURRENT_TOOMUCHCONSUMPTION |
| 0x4 | SHORTCIRCUIT_LONGPEAKOFCONSUMPTION |

### WSV_INTERNAL_WIN_STOP_REASON

| WERT | TEXT |
| --- | --- |
| 0x0 | MOVING |
| 0x1 | POSITION_REACHED |
| 0x2 | OVERCURRENT |
| 0x3 | MOTOR_OPENLOAD |
| 0x4 | MOTOR_SHORTCIRCUIT |
| 0x5 | HALLSENSOR_TIMEOUT |
| 0x6 | TIMEOUT |
| 0x7 | MOTOR_THERMAL_WARNING |
| 0x8 | MOTOR_THERMAL_PROTECTION |
| 0x9 | ANTIPINCH_PROTECTION |
| 0xA | HALLSENSORSUPPLY_SHORTCIRCUIT |
| 0xB | HALLSENSORSUPPLY_OPENLOAD |
| 0xC | MOTOR_STB_OFF |
| 0xD | HALLSENSOR_INTERRUPTION_OFF |

### WSV_UPDATE_STATUS_WCM

| WERT | TEXT |
| --- | --- |
| 0 | Init |
| 1 | DEACTIVATE |
| 2 | ACTIVATE |
