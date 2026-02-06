# x_saf.prg

## General

|  |  |
| --- | --- |
| File | x_saf.prg |
| Type | PRG |
| Jobs | 28 |
| Tables | 81 |
| Origin | BMW UX-EE-2 Dreifke |
| Revision | 6.005 |
| Author | IN-TECH-GMBH UX-EE-1 Tiefholz |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad Semiaktives Fahrwerk |  |  |
| ORIGIN | string | BMW UX-EE-2 Dreifke |  |  |
| REVISION | string | 6.005 |  |  |
| AUTHOR | string | IN-TECH-GMBH UX-EE-1 Tiefholz |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.78 |  |  |
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

### ARG_0XB07B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SENSOR_KANAL | + | - | 0-n | high | unsigned char | - | TAB_MR_SENSORKANAL | - | - | - | - | - | Sensor Kanal, der kalibriert werden soll |

### ARG_0XB08C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ART_KALIBRIERUNG | + | - | 0-n | - | unsigned char | - | TAB_MR_ART_KALIBRIERUNG_SAF | - | - | - | - | - | Auswahl Kalibrierung Art |

### ARG_0XB090_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SAF_FEDERVORSPANNUNG | + | - | 0-n | - | unsigned char | - | TAB_FEDERVORSPANNUNG_ARG | - | - | - | - | - | Steuern SAF Federvorspannung: 0x01 == E: Einstellung Einzelfahrer; 0x02 == EB: Einstellung Einzelfahrer + Beladung; 0x03 == SO: Einstellung Soziusbetrieb; 0x04 == CC1: Einstellung Huegel; 0x05 == CC2: Einstellung Berg |
| SAF_DAEMPFUNG | + | - | 0-n | - | unsigned char | - | TAB_DAEMPFUNG_SAF_ARG | - | - | - | - | - | Steuern SAF Daempfung: 0x01 == C: Einstellung Comfort 0x02 == N: Einstellung Normal 0x03 == S: Einstellung Sport |

### ARG_0XE114_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG_DC | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Richtung in der die Verstellung relativ in Richtung Federbein vorgenommen werden soll: 0x00 == Feder entspannen 0x01 == Feder spannen |
| RELATIVWERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 6000.0 | Übergabewert Verstellweg relativ in Inkrementen |

### ARG_0XE137_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VENTIL | 0-n | high | unsigned char | - | TAB_MR_VENTIL_ANSTEUERUNG | 1.0 | 1.0 | 0.0 | - | - | Das zu steuernde Ventil |
| PWM | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Einzustellender PWM Wert |
| FREQ | 0-n | high | unsigned char | - | TAB_MR_SAF_FREQ | 1.0 | 1.0 | 0.0 | - | - | Einzustellende PWM Frequenz |

### ARG_0XE138_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VENTIL | 0-n | high | unsigned char | - | TAB_MR_VENTIL_ANSTEUERUNG | 1.0 | 1.0 | 0.0 | - | - | Das zu steuernde Ventil |
| STROMWERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 2000.0 | Vorgegebener Stromwert |
| FREQ | 0-n | high | unsigned char | - | TAB_MR_SAF_FREQ | 1.0 | 1.0 | 0.0 | - | - | Einzustellende PWM Frequenz |

### ARG_0XE228_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DIAG_IN_RCK_DATA_U32_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_12_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_13_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_14_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_15_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_16_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_17_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_18_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_19_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_20_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_21_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_22_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_23_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_24_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_25_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_26_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_27_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_28_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_29_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_30_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_31_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_32_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_33_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_34_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_35_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_36_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_37_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_38_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_39_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_40_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_41_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_42_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_43_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_44_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_45_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_46_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_47_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_48_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_49_WERT_1 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_50_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_51_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_52_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_53_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_54_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_55_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_56_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_57_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_58_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_59_WERT_1 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |
| ARG_DIAG_IN_RCK_DATA_U32_60_WERT_1 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten für das Race Calibration Kit |

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

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x023900 | Energiesparmode  aktiv | 0 |
| 0x480B80 | Unterspannung Batterie | 1 |
| 0x480B81 | Ueberspannung Batterie | 1 |
| 0x480B82 | Sicherheitsabschaltung - Ventil(e) nicht bestrombar | 0 |
| 0x480B83 | Eingeschränkter Betrieb - Federwegsensor(en) fehlerhaft | 0 |
| 0x480B84 | DC-Motor hinten:Vollkalibrierung fehlgeschlagen | 0 |
| 0x480B85 | Eingeschränkter Betrieb - Eingangssignal(e) vom CAN-Bus fehlerhaft | 0 |
| 0x480B86 | Federverstellung hinten: Position nicht erreicht | 0 |
| 0x480B87 | Motor, Federverstellung hinten: Kurzschluss | 0 |
| 0x480B88 | Motor, Federverstellung hinten: Leitungsunterbrechung | 0 |
| 0x480B89 | Motor, Federverstellung hinten:Übertemperatur | 0 |
| 0x480B8A | Proportionalventil hinten: Kurzschluss | 0 |
| 0x480B8B | Proportionalventil hinten: Leitungsunterbrechung | 0 |
| 0x480B8C | Proportionalventil Lenkung: Kurzschluss | 0 |
| 0x480B8D | Proportionalventil Lenkung: Leitungsunterbrechung | 0 |
| 0x480B8E | Sensorabgleich fehlerhaft | 0 |
| 0x480B8F | Proportionalventil vorne: Kurzschluss | 0 |
| 0x480B90 | Proportionalventil vorne: Leitungsunterbrechung | 0 |
| 0x480B91 | Neustart Ventilendstufe vorne durch Applikationssoftware | 0 |
| 0x480B92 | Sensor, Federverstellung hinten: elektrischer Fehler | 0 |
| 0x480B93 | Federwegsensor vorne: Messwert hat Maximalwert überschritten | 0 |
| 0x480B94 | Federwegsensor vorne: Messwert hat Minimalwert unterschritten | 0 |
| 0x480B95 | Federwegsensor vorne: Messwert unplausibel | 0 |
| 0x480B96 | Federwegsensor vorne: Nullpunkt nicht gelernt | 0 |
| 0x480B97 | Federwegsensor vorne: Sensorparameter unplausibel | 0 |
| 0x480B98 | Federwegsensor vorne: Versorgungsspannung zu niedrig | 0 |
| 0x480B99 | Federwegsensor vorne: Versorgungsspannung zu hoch | 0 |
| 0x480B9A | Federwegsensor hinten: Messwert hat Maximalwert überschritten | 0 |
| 0x480B9B | Federwegsensor hinten: Messwert hat Minimalwert unterschritten | 0 |
| 0x480B9C | Federwegsensor hinten: Nullpunkt nicht gelernt | 0 |
| 0x480B9D | Federwegsensor hinten: Messwert unplausibel | 0 |
| 0x480B9E | Federwegsensor hinten: Sensorparameter unplausibel | 0 |
| 0x480B9F | Federwegsensor hinten: Versorgungsspannung zu niedrig | 0 |
| 0x480BA0 | Federwegsensor hinten: Versorgungsspannung zu hoch | 0 |
| 0x480BA1 | Beschleunigungssensor vorne: Messwert hat Maximalwert überschritten | 0 |
| 0x480BA2 | Beschleunigungssensor vorne: Messwert hat Minimalwert unterschritten | 0 |
| 0x480BA3 | Beschleunigungssensor vorne: Messwert unplausibel | 0 |
| 0x480BA4 | Beschleunigungssensor vorne: Sensorparameter unplausibel | 0 |
| 0x480BA5 | Beschleunigungssensor vorne: Nullpunkt nicht gelernt | 0 |
| 0x480BA6 | Beschleunigungssensor vorne: Versorgungsspannung zu niedrig | 0 |
| 0x480BA7 | Beschleunigungssensor vorne: Versorgungsspannung zu hoch | 0 |
| 0x480BA8 | Dämpfer Testmodus aktiv | 0 |
| 0x480BA9 | Proportionalventil hinten: keine Endstufenfreigabe über Watchdog | 0 |
| 0x480BAA | Proportionalventil hinten: Strommessung nicht kalibriert | 0 |
| 0x480BAB | Neustart Ventilendstufe hinten durch Applikationssoftware | 0 |
| 0x480BAD | Proportionalventil Lenkung: keine Endstufenfreigabe über Watchdog | 0 |
| 0x480BAE | Proportionalventil Lenkung: Strommessung nicht kalibriert | 0 |
| 0x480BB1 | Proportionalventil vorne: keine Endstufenfreigabe über Watchdog | 0 |
| 0x480BB2 | Proportionalventil vorne: Strommessung nicht kalibriert | 0 |
| 0x480BB6 | Federwegsensor vorne: Kalibrierung fehlerhaft | 0 |
| 0x480BB7 | Federwegsensor hinten: Kalibrierung fehlerhaft | 0 |
| 0x480BB8 | Eingeschränkter Betrieb: Federwegsensor hinten nicht eingehängt | 0 |
| 0x480BB9 | Radrehzahlsignal hinten: Sensorsignal unplausibel | 0 |
| 0x480BBA | Eingeschränkter Betrieb: Federwegsensor vorne nicht eingehängt | 0 |
| 0x480BBB | Fahrlagenausgleich deaktiviert - Notwendiges Eingangssignal fehlerhaft | 0 |
| 0x480BBC | Mechanischer Defekt des Mechanismus zur Federverstellung | 0 |
| 0x480BBD | Fahrlagenausgleich eingeschränkt - Relevantes Eingangssignal fehlerhaft | 0 |
| 0x480BBE | Radrehzahlsignal vorne: Sensorsignal unplausibel | 0 |
| 0x480BBF | SAF-SG: Übertemperatur | 0 |
| 0x480BC0 | Blockade der Federvestellung beim Erhöhen der Federkraft | 0 |
| 0x480BC1 | Blockade der Federverstellung beim Reduzieren der Federkraft | 0 |
| 0x480BC2 | Position der Federverstellung unplausibel | 0 |
| 0x480BC3 | Strommessung Lenkung:  Stromreglerplausibilitätsfehler | 0 |
| 0x480BC4 | Sensor, Federverstellung hinten: Timeout | 0 |
| 0x480BC5 | DCM-Treiberbaustein Uebertemperatur | 0 |
| 0x480BC6 | Strommessung Proportionalventil  hinten:  Stromreglerplausibilitätsfehler | 0 |
| 0x480BCB | Strommessung Proportionalventil vorne:  Stromreglerplausibilitätsfehler | 0 |
| 0x480BCD | Hardwarefehler Steuergeraet | 0 |
| 0x480BCE | Codierung : Steuergerät ist nicht codiert | 0 |
| 0x480BCF | Codierung : unplausible Daten während Transaktion | 0 |
| 0x480BD0 | Codierung : Codiersignaturfehler | 0 |
| 0x480BD1 | Codierung : Codierdatenübertragungsfehler | 0 |
| 0x480BD2 | Codierung : falsches Fahrzeug | 0 |
| 0x480BD3 | NVM_E_ERASE_FAILED | 0 |
| 0x480BD4 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x480BD5 | NVM_E_CONTROL_FAILED | 0 |
| 0x480BD6 | NVM_E_READ_ALL_FAILED | 0 |
| 0x480BD7 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x480BD8 | NVM_E_WRITE_FAILED | 0 |
| 0x480BD9 | NVM_E_READ_FAILED | 0 |
| 0x480BDA | Softwarefehler Steuergeraet | 0 |
| 0x480BDB | Taster1: Kurzschluss nach Masse | 0 |
| 0x480BDC | Taster1: Kurzschluss nach Ubatt oder nach 5VSupply | 0 |
| 0x480BDD | Taster2: Kurzschluss nach Masse | 0 |
| 0x480BDE | Taster2: Kurzschluss nach Ubatt oder nach 5VSupply | 0 |
| 0x480BDF | Produktionsmode aktiv | 0 |
| 0x480BE0 | Beschleunigungssensor hinten: Messwert unplausibel | 0 |
| 0x480BE1 | Beschleunigungssensor hinten: Messwert hat Maximalwert überschritten | 0 |
| 0x480BE2 | Beschleunigungssensor hinten: Messwert hat Minimalwert unterschritten | 0 |
| 0x480BE3 | Beschleunigungssensor hinten: Versorgungsspannung zu hoch | 0 |
| 0x480BE4 | Beschleunigungssensor hinten: Versorgungsspannung zu niedrig | 0 |
| 0x480BE5 | Beschleunigungssensor hinten: Nullpunkt nicht gelernt | 0 |
| 0x480BE6 | Beschleunigungssensor hinten: Sensorparameter unplausibel | 0 |
| 0xD7445F | CAN Bus Off | 1 |
| 0xD7541C | CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD75420 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0xD75422 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD75424 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD75426 | CAN KOMBI Nachricht Kombidaten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD75428 | CAN DME Nachricht Motordaten_1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD7542A | CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD7542C | CAN SEB Nachricht Sensorbox_ID1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD7542E | CAN SEB Nachricht Sensorbox_ID4_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD7543A | CAN BCO Nachricht Status_Grund_Funktion_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xD7543C | CAN RDC Nachricht Status_RDC_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD75444 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: Alive Fehler | 1 |
| 0xD75446 | CAN DME Nachricht Modus_Fahrzeug_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xD75448 | CAN ABS Nachricht Status_ABS_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xD7544A | CAN DME Nachricht Status_DTC_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xD75452 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: CRC Fehler | 1 |
| 0xD75453 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Alive Fehler | 1 |
| 0xD75454 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: CRC Fehler | 1 |
| 0xD75455 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Alive Fehler | 1 |
| 0xD75456 | CAN DME Nachricht Modus_Fahrzeug_Motorrad_2010  CRC Fehler | 1 |
| 0xD75457 | CAN DME Nachricht Modus_Fahrzeug_Motorrad_2010  Alive Fehler | 1 |
| 0xD75458 | CAN DME Nachricht Motordaten_2_Motorrad_2010: CRC Fehler | 1 |
| 0xD75459 | CAN DME Nachricht Motordaten_2_Motorrad_2010: Alive Fehler | 1 |
| 0xD7545A | CAN DME Nachricht Status_DTC_Motorrad_2010  CRC Fehler | 1 |
| 0xD7545B | CAN DME Nachricht Status_DTC_Motorrad_2010  Alive Fehler | 1 |
| 0xD75462 | CAN KOMBI Nachricht Steuerung_Einstellung_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD75463 | CAN KOMBI Nachricht Zusatzinformation_Sport_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD75468 | CAN SEB Nachricht Sensorbox_ID7_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD75469 | CAN SEB Nachricht Sensorbox_ID7_Motorrad_2010: Alive Fehler | 1 |
| 0xD7546A | CAN SEB Nachricht Sensorbox_ID7_Motorrad_2010: CRC Fehler | 1 |
| 0xD7546B | CAN KOMBI Nachricht Steuerung_Einstellung_Motorrad_2010: Alive Fehler | 1 |
| 0xD7546C | CAN KOMBI Nachricht Steuerung_Einstellung_Motorrad_2010: CRC Fehler | 1 |
| 0xD75476 | CAN SEB Nachricht Sensorbox_ID1_Motorrad_2010: Alive Fehler | 1 |
| 0xD75477 | CAN SEB Nachricht Sensorbox_ID1_Motorrad_2010: CRC Fehler | 1 |
| 0xD75478 | CAN SEB Nachricht Sensorbox_ID4_Motorrad_2010: Alive Fehler | 1 |
| 0xD75479 | CAN SEB Nachricht Sensorbox_ID4_Motorrad_2010: CRC Fehler | 1 |
| 0xD7547A | CAN ABS Nachricht Status_ABS_Motorrad_2010: Alive Fehler | 1 |
| 0xD7547B | CAN ABS Nachricht Status_ABS_Motorrad_2010: CRC Fehler | 1 |
| 0xD75483 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: CRC Fehler | 1 |
| 0xD754A3 | CAN DME Nachricht Modus_Erweitert_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD754A4 | CAN DME Nachricht Modus_Erweitert_Motorrad_2010: CRC Fehler | 1 |
| 0xD754A5 | CAN DME Nachricht Modus_Erweitert_Motorrad_2010: Alive Fehler | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1602 | WERT_SENSOR_1_ERR | 0-n | High | 0xFFFF | UWB_WERT_SENSOR1_ERR | 1.0 | 1.0 | 0.0 |
| 0x1603 | WERT_SENSOR_1_VERSSP_ERR | 0-n | High | 0xFFFF | TAB_WERT_SENSOR_1_VERSSP_ERR | 1.0 | 1.0 | 0.0 |
| 0x1604 | KLEMME30 | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x1606 | WERT_SENSOR_1 | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x1607 | WERT_SENSOR_1_TYP | 0-n | High | 0xFF | TAB_WERT_SENSOR_1_TYP | 1.0 | 1.0 | 0.0 |
| 0x1608 | WERT_SENSOR_1_KURVE | 0-n | High | 0xFF | TAB_WERT_SENSOR_1_KURVE | 1.0 | 1.0 | 0.0 |
| 0x1609 | WERT_SENSOR_2 | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x160A | WERT_SENSOR_2_ERR | 0-n | High | 0xFFFF | UWB_WERT_SENSOR1_ERR | 1.0 | 1.0 | 0.0 |
| 0x160C | WERT_SENSOR_2_VERSSP_ERR | 0-n | High | 0xFFFF | TAB_WERT_SENSOR_1_VERSSP_ERR | 1.0 | 1.0 | 0.0 |
| 0x160D | WERT_SENSOR_2_TYP | 0-n | High | 0xFF | TAB_WERT_SENSOR_1_TYP | 1.0 | 1.0 | 0.0 |
| 0x160E | WERT_SENSOR_2_KURVE | 0-n | High | 0xFF | TAB_WERT_SENSOR_1_KURVE | 1.0 | 1.0 | 0.0 |
| 0x160F | WERT_SENSOR_3 | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x1610 | WERT_SENSOR_3_ERR | 0-n | High | 0xFFFF | UWB_WERT_SENSOR1_ERR | 1.0 | 1.0 | 0.0 |
| 0x1612 | WERT_SENSOR_3_VERSSP_ERR | 0-n | High | 0xFFFF | TAB_WERT_SENSOR_1_VERSSP_ERR | 1.0 | 1.0 | 0.0 |
| 0x1613 | WERT_SENSOR_3_TYP | 0-n | High | 0xFF | TAB_WERT_SENSOR_1_TYP | 1.0 | 1.0 | 0.0 |
| 0x1614 | WERT_SENSOR_3_KURVE | 0-n | High | 0xFF | TAB_WERT_SENSOR_1_KURVE | 1.0 | 1.0 | 0.0 |
| 0x1615 | WERT_SENSOR_4 | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x1616 | WERT_SENSOR_4_ERR | 0-n | High | 0xFFFF | UWB_WERT_SENSOR1_ERR | 1.0 | 1.0 | 0.0 |
| 0x1618 | WERT_SENSOR_4_VERSSP_ERR | 0-n | High | 0xFFFF | TAB_WERT_SENSOR_1_VERSSP_ERR | 1.0 | 1.0 | 0.0 |
| 0x1619 | WERT_SENSOR_4_TYP | 0-n | High | 0xFF | TAB_WERT_SENSOR_1_TYP | 1.0 | 1.0 | 0.0 |
| 0x161A | WERT_SENSOR_4_KURVE | 0-n | High | 0xFF | TAB_WERT_SENSOR_1_KURVE | 1.0 | 1.0 | 0.0 |
| 0x161B | ISTSTROM_DAEMPFER_VORNE | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x161C | SOLLSTROM_DAEMPFER_VORNE | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x161D | ISTSTROM_DAEMPFER_VORNE_ERR | 0-n | High | 0xFFFF | TAB_ISTSTROM_DAEMPFER_VORNE_ERR | 1.0 | 1.0 | 0.0 |
| 0x161E | ISTSTROM_DAEMPFER_HINTEN | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x161F | SOLLSTROM_DAEMPFER_HINTEN | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x1620 | ISTSTROM_DAEMPFER_HINTEN_ERR | 0-n | High | 0xFFFF | TAB_ISTSTROM_DAEMPFER_VORNE_ERR | 1.0 | 1.0 | 0.0 |
| 0x1621 | ISTSTROM_DAEMPFER_LENKUNG | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x1622 | SOLLSTROM_DAEMPFER_LENKUNG | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x1623 | ISTSTROM_DAEMPFER_LENKUNG_ERR | 0-n | High | 0xFFFF | TAB_ISTSTROM_DAEMPFER_VORNE_ERR | 1.0 | 1.0 | 0.0 |
| 0x1624 | SWITCH_1_VOLTAGE | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x1625 | SWITCH_1_ERROR | 0-n | High | 0xFFFF | TAB_SWITCH_X_ERROR | - | - | - |
| 0x1626 | SWITCH_2_VOLTAGE | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x1627 | SWITCH_2_ERROR | 0-n | High | 0xFFFF | TAB_SWITCH_X_ERROR | - | - | - |
| 0x1628 | KLEMME30_ERR | 0-n | High | 0xFFFF | TAB_KLEMME30_ERR | - | - | - |
| 0x1629 | FEHLER_KRITISCH | 0-n | High | 0xFFFF | TAB_FEHLER_KRITISCH | 1.0 | 1.0 | 0.0 |
| 0x162A | FEHLER_UNKRITISCH | 0-n | High | 0xFFFFFFFF | TAB_MR_FEHLER_UNKRITISCH | - | - | - |
| 0x162F | DC_MOTOR_STROM | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x1630 | DC_MOTOR_IST_POSITION | Inkremente | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x1631 | DC_MOTOR_SOLL_POSITION | Inkremente | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x1632 | HALL_SENSOR_1_SPANNUNG | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x1633 | HALL_SENSOR_2_SPANNUNG | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x1634 | WHEEL_FRONT_TOOTH_TIME | s | High | unsigned int | - | 1.0 | 1000000.0 | 0.0 |
| 0x1635 | WHEEL_REAR_TOOTH_TIME | s | High | unsigned int | - | 1.0 | 1000000.0 | 0.0 |
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

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x480BAC | Proportionalventil hinten: Ventilfehler bei Onlineprüfung | 0 |
| 0x480BAF | SEK - Eingeschränkter Betrieb - Eingangssignal(e) vom CAN-Bus fehlerhaft | 1 |
| 0x480BB0 | Proportionalventil Lenkung: Ventilfehler bei Onlineprüfung | 0 |
| 0x480BB3 | SEK - Eingeschränkter Betrieb - Federwegsensor(en) fehlerhaft | 0 |
| 0x480BB4 | Proportionalventil vorne: Ventilfehler bei Onlineprüfung | 0 |
| 0x480BB5 | SEK - Sicherheitsabschaltung - Ventil(e) nicht bestrombar | 0 |
| 0x480BE7 | Exception-Fehler | 0 |
| 0x480BE8 | Task-Fehler | 0 |
| 0x480BE9 | LL-Check-Fehler | 0 |
| 0x480BEA | SEK Unterspannung Batterie | 1 |
| 0x480BEB | SEK Ueberspannung Batterie | 1 |
| 0xD7541D | SEK_CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD75421 | SEK_CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0xD75423 | SEK_CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD75425 | SEK_CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD75427 | SEK_CAN DME Nachricht Modus_Fahrzeug_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xD75429 | SEK_CAN DME Nachricht Motordaten_1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD7542B | SEK_CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD7542D | SEK_CAN SEB Nachricht Sensorbox_ID1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD7542F | SEK_CAN SEB Nachricht Sensorbox_ID4_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD7543B | SEK_CAN BCO Nachricht Status_Grund_Funktion_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xD75447 | SEK_CAN ABS Nachricht Status_ABS_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xD7544B | CAN DME Nachricht Status_DTC_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | UWB_FR_SIG_HI | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0002 | UWB_FR_SIG_LO | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0003 | UWB_FR_GND_INTERR | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0004 | UWB_FR_NOT_CODED | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0005 | UWB_FR_MOUNT_POS | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0006 | UWB_FR_SPIKE_FAIL | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0007 | UWB_RR_SIG_HI | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0008 | UWB_RR_SIG_LO | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0009 | UWB_RR_GND_INTERR | 0/1 | High | 0x0800 | - | - | - | - |
| 0x000A | UWB_RR_NOT_CODED | 0/1 | High | 0x2000 | - | - | - | - |
| 0x000B | UWB_RR_MOUNT_POS | 0/1 | High | 0x4000 | - | - | - | - |
| 0x000C | UWB_RR_SPIKE_FAIL | 0/1 | High | 0x8000 | - | - | - | - |
| 0x000D | UWB_ST_KL_15_MOTBK | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x000E | UWB_ST_RPK_RCK_MOTBK | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x000F | UWB_CTR_MOD_VEH_CHAS_MOTBK | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0010 | UWB_GR_GRB_MOTBK | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0011 | UWB_ST_CLCTR_DTC_MOTBK | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0012 | UWB_MOMS_RDUC_REL_MOTBK | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0013 | UWB_ANG_THGR_MOTBK | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0014 | UWB_RPM_ENG_MOTBK | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0015 | UWB_BNK_ANG_MOTBK | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x0016 | UWB_ANG_THVA_MOTBK | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0017 | UWB_ST_SEN_YWRT_1_MOTBK | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x0018 | UWB_ST_SB_MOTBK | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x0019 | UWB_ST_SEN_ACLNY_1_MOTBK | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x001A | UWB_ST_SEN_RRT_MOTBK | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x001B | UWB_ST_SEN_ACLNX_1_MOTBK | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x001C | UWB_V_WHL_RR_MOTBK | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x001D | UWB_V_WHL_FT_MOTBK | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x001E | UWB_ACTI_ABS_CONINT_MOTBK | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x001F | UWB_BRP_PU_FS_MOTBK | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x0020 | UWB_ST_P_CLCTR_FS_MOTBK | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x0021 | UWB_CTR_RDP_RS_MOTBK | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x0022 | UWB_CTR_CDP_RS_MOTBK | 0/1 | High | 0x00200000 | - | - | - | - |
| 0x0023 | UWB_CTR_RDP_FS_MOTBK | 0/1 | High | 0x00400000 | - | - | - | - |
| 0x0024 | UWB_CTR_CDP_FS_MOTBK | 0/1 | High | 0x00800000 | - | - | - | - |
| 0x0025 | UWB_CTR_SUSPT_CAL_MOTBK | 0/1 | High | 0x01000000 | - | - | - | - |
| 0x0026 | UWB_QUAN_EVT_MOTBK | 0/1 | High | 0x02000000 | - | - | - | - |
| 0x0027 | UWB_INIT | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0028 | UWB_DIAG_MODE | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0029 | UWB_RESET_MODE | 0/1 | High | 0x0008 | - | - | - | - |
| 0x002A | UWB_BUS_ERROR | 0/1 | High | 0x0010 | - | - | - | - |
| 0x002B | UWB_TIMEOUT | 0/1 | High | 0x0040 | - | - | - | - |
| 0x002C | UWB_CHKSM | 0/1 | High | 0x0080 | - | - | - | - |
| 0x002D | UWB_ALIVE | 0/1 | High | 0x0100 | - | - | - | - |
| 0x002E | UWB_INVALID | 0/1 | High | 0x0200 | - | - | - | - |
| 0x002F | UWB_FR_SC_KL30 | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0030 | UWB_FR_SC_KL31 | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0031 | UWB_FR_OL | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0032 | UWB_FR_SC | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0033 | UWB_FR_CURR_NOT_CALIB | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0034 | UWB_FR_GEN_FAILURE | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x0035 | UWB_FR_RUN_UP_TEST | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0036 | UWB_FR_CURR_PLAUS_CHECK | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x0037 | UWB_RR_SC_KL30 | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0038 | UWB_RR_SC_KL31 | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x0039 | UWB_RR_OL | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x003A | UWB_RR_SC | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x003B | UWB_RR_CURR_NOT_CALIB | 0/1 | High | 0x00200000 | - | - | - | - |
| 0x003C | UWB_RR_GEN_FAILURE | 0/1 | High | 0x01000000 | - | - | - | - |
| 0x003D | UWB_RR_RUN_UP_TEST | 0/1 | High | 0x02000000 | - | - | - | - |
| 0x003E | UWB_RR_CURR_PLAUS_CHECK | 0/1 | High | 0x04000000 | - | - | - | - |
| 0x1604 | KLEMME30 | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x161B | ISTSTROM_DAEMPFER_VORNE | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x161C | SOLLSTROM_DAEMPFER_VORNE | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x161D | ISTSTROM_DAEMPFER_VORNE_ERR | 0-n | High | 0xFFFF | TAB_ISTSTROM_DAEMPFER_VORNE_ERR | 1.0 | 1.0 | 0.0 |
| 0x161E | ISTSTROM_DAEMPFER_HINTEN | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x161F | SOLLSTROM_DAEMPFER_HINTEN | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x1620 | ISTSTROM_DAEMPFER_HINTEN_ERR | 0-n | High | 0xFFFF | TAB_ISTSTROM_DAEMPFER_VORNE_ERR | 1.0 | 1.0 | 0.0 |
| 0x1621 | ISTSTROM_DAEMPFER_LENKUNG | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x1622 | SOLLSTROM_DAEMPFER_LENKUNG | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x1623 | ISTSTROM_DAEMPFER_LENKUNG_ERR | 0-n | High | 0xFFFF | TAB_ISTSTROM_DAEMPFER_VORNE_ERR | 1.0 | 1.0 | 0.0 |
| 0x1628 | KLEMME30_ERR | 0-n | High | 0xFFFF | TAB_KLEMME30_ERR | - | - | - |
| 0x1629 | FEHLER_KRITISCH | 0-n | High | 0xFFFF | TAB_FEHLER_KRITISCH | 1.0 | 1.0 | 0.0 |
| 0x162A | FEHLER_UNKRITISCH | 0-n | High | 0xFFFFFFFF | TAB_MR_FEHLER_UNKRITISCH | - | - | - |
| 0x162B | WCET_TASK_ERROR | µs | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x162C | NUMBER_TASK_ERROR | 0-n | High | 0xFF | TAB_NUMBER_TASK_ERROR | 1.0 | 1.0 | 0.0 |
| 0x162D | REASON_TASK_ERROR | 0-n | High | 0xFF | TAB_REASON_TASK_ERROR | 1.0 | 1.0 | 0.0 |
| 0x162E | EXCEPTION_ADRESSE | HEX | - | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x2001 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x2002 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x2003 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x2004 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X2302_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MINIMALSTROM_VORNE_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Ventilstrom vorne |
| STAT_MITTELSTROM_VORNE_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittelwert Ventilstrom vorne |
| STAT_MAXIMALSTROM_VORNE_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Ventilstrom vorne |
| STAT_MINIMALSTROM_HINTEN_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Ventilstrom hinten |
| STAT_MITTELSTROM_HINTEN_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittelwert Ventilstrom hinten |
| STAT_MAXIMALSTROM_HINTEN_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Ventilstrom hinten |

### RES_0X2303_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MINIMALFEDERWEG_VORNE_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Federweg vorne |
| STAT_MITTELFEDERWEG_VORNE_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Mittelwert Federweg vorne |
| STAT_MAXIMALFEDERWEG_VORNE_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Federweg vorne |
| STAT_MINIMALFEDERWEG_HINTEN_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Minimalwert Federweg hinten |
| STAT_MITTELFEDERWEG_HINTEN_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Mittelwert Federweg hinten |
| STAT_MAXIMALFEDERWEG_HINTEN_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximalwert Federweg hinten |

### RES_0X2304_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINFEDERN_VORNE_MAX_WERT | m/s | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Einfederungsgeschwindigkeit vorne |
| STAT_EINFEDERN_VORNE_AVG_WERT | m/s | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Durchschnittliche Einfederungsgeschwindigkeit vorne |
| STAT_AUSFEDERN_VORNE_MAX_WERT | m/s | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Ausfederungsgeschwindigkeit vorne |
| STAT_AUSFEDERN_VORNE_AVG_WERT | m/s | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Durchschnittliche Ausfederungsgeschwindigkeit vorne |
| STAT_EINFEDERN_HINTEN_MAX_WERT | m/s | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Einfederungsgeschwindigkeit hinten |
| STAT_EINFEDERN_HINTEN_AVG_WERT | m/s | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Durchschnittliche Einfederungsgeschwindigkeit hinten |
| STAT_AUSFEDERN_HINTEN_MAX_WERT | m/s | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Maximale Ausfederungsgeschwindigkeit hinten |
| STAT_AUSFEDERN_HINTEN_AVG_WERT | m/s | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Durchschnittliche Ausfederungsgeschwindigkeit hinten |

### RES_0X2306_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_INDIVIDUALISIERUNGEN_FEDERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Individualisierungen Federung |
| STAT_ANZAHL_INDIVIDUALISIERUNGEN_DAEMPFUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Individualisierungen Dämpfung |

### RES_0X2307_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_VERSTELLUNGEN_NACH_OBEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DC-Motor Verstellungen nach oben |
| STAT_ANZAHL_VERSTELLUNGEN_NACH_UNTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DC-Motor Verstellungen nach unten |

### RES_0X2308_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Entwicklungszähler 1 |
| STAT_ZAEHLER_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Entwicklungszähler 2 |
| STAT_ZAEHLER_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Entwicklungszähler 3 |

### RES_0X2309_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_SPRING_MODE_1_COUNT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anteil Betrieb Beladungsmodus 1 |
| STAT_FASTA_SPRING_MODE_2_COUNT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anteil Betrieb Beladungsmodus 2 |
| STAT_FASTA_SPRING_MODE_3_COUNT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anteil Betrieb Beladungsmodus 3 |
| STAT_FASTA_SPRING_MODE_4_COUNT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anteil Betrieb Beladungsmodus 4 |
| STAT_FASTA_DCM_ADJUST_UP_FAIL_COUNT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlgeschlagene Verstellungen DC-Motor (up) |
| STAT_FASTA_DCM_ADJUST_DOWN_FAIL_COUNT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlgeschlagene Verstellungen DC-Motor (up) |
| STAT_FASTA_RIDE_LVL_DIFF_COUNT_01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abweichung Fahrlage zu Normallage - Wert 1 |
| STAT_FASTA_RIDE_LVL_DIFF_COUNT_02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abweichung Fahrlage zu Normallage - Wert 2 |
| STAT_FASTA_RIDE_LVL_DIFF_COUNT_03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abweichung Fahrlage zu Normallage - Wert 3 |
| STAT_FASTA_RIDE_LVL_DIFF_COUNT_04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abweichung Fahrlage zu Normallage - Wert 4 |
| STAT_FASTA_RIDE_LVL_DIFF_COUNT_05_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abweichung Fahrlage zu Normallage - Wert 5 |
| STAT_FASTA_RIDE_LVL_DIFF_COUNT_06_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abweichung Fahrlage zu Normallage - Wert 6 |
| STAT_FASTA_RIDE_LVL_DIFF_COUNT_07_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abweichung Fahrlage zu Normallage - Wert 7 |
| STAT_FASTA_RIDE_LVL_DIFF_COUNT_08_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abweichung Fahrlage zu Normallage - Wert 8 |

### RES_0X4183_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAUPT_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Haupt-Version |
| STAT_UNTER_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unter-Version |
| STAT_PATCH_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patch-Version |

### RES_0X4184_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAUPT_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Haupt-Version |
| STAT_UNTER_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unter-Version |
| STAT_PATCH_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patch-Version |

### RES_0XB07B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_MR_ROUTINE_SAF | 1.0 | 1.0 | 0.0 | Status Routine |
| STAT_KANAL1_WERT | - | - | + | mV | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Kanal 1 |
| STAT_KANAL2_WERT | - | - | + | mV | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Kanal 2 |
| STAT_KANAL3_WERT | - | - | + | mV | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Kanal 3 |
| STAT_KANAL4_WERT | - | - | + | mV | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Kanal 4 |

### RES_0XB08C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VOLLKALIBRIERUNG_DC_MOTOR_HINTEN | - | - | + | 0-n | - | unsigned char | - | TAB_MR_ESA_STATUS_KALIBRIERUNG | 1.0 | 1.0 | 0.0 | Status Vollkalibrierung DC-Motor hinten |
| STAT_REKALIBRIERUNG_DC_MOTOR_HINTEN | - | - | + | 0-n | - | unsigned char | - | TAB_MR_ESA_STATUS_KALIBRIERUNG | 1.0 | 1.0 | 0.0 | Status Rekalibrierung DC-Motor hinten |
| STAT_PROP_VENTIL_VORNE | - | - | + | 0-n | - | unsigned char | - | TAB_MR_STATUS_PROP_VENTILE | 1.0 | 1.0 | 0.0 | Status Proportionalventil vorne |
| STAT_PROP_VENTIL_HINTEN | - | - | + | 0-n | - | unsigned char | - | TAB_MR_STATUS_PROP_VENTILE | - | - | - | Status Proportionalventil hinten |
| STAT_DC_MOTOR_HINTEN | - | - | + | 0-n | - | unsigned char | - | TAB_MR_SAF_STATUS_DC_MOTOR | 1.0 | 1.0 | 0.0 | Status DC-Motor hinten |
| STAT_DC_MOTOR_HINTEN_MAX_HALL_COUNTS_WERT | - | - | + | Inkremente | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | bei der Vollkalibrierung ermittelte maximale Anzahl von Hallsensor-Impulsen von Endanschlag bis Endanschlag |

### RES_0XB090_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SAF_FEDERVORSPANNUNG | - | - | + | 0-n | - | unsigned char | - | TAB_FEDERVORSPANNUNG | - | - | - | Status SAF Federvorspannung 0x00 == Verstellung: Stufe wird eingestellt; 0x01 == E: Einstellung Einzelfahrer; 0x02 == EB: Einstellung Einzelfahrer + Beladung; 0x03 == SO: Einstellung Soziusbetrieb; 0x04 == CC1: Einstellung Huegel; 0x05 == CC2: Einstellung Berg |
| STAT_SAF_DAEMPFUNG | - | - | + | 0-n | - | unsigned char | - | TAB_DAEMPFUNG_SAF | - | - | - | Status SAF Daempfung: 0x00 == Verstellung: Daempfung wird eingestellt 0x01 == C: Einstellung Comfort 0x02 == N: Einstellung Normal 0x03 == S: Einstellung Sport |
| STAT_SAF_SG | - | - | + | 0-n | - | unsigned char | - | TAB_SAF_SG | - | - | - | Status SAF Steuergerät |

### RES_0XE00A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LVAL_ACTUAL_SENSOR1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Adaptionswert Sensor 1 |
| STAT_LVAL_ACTUAL_SENSOR2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Adaptionswert Sensor 2 |
| STAT_LVAL_ACTUAL_SENSOR3_WERT | m/s² | high | signed int | - | - | 0.0098 | 1.0 | 0.0 | Adaptionswert Sensor 3 |
| STAT_LVAL_ACTUAL_SENSOR4_WERT | m/s² | high | signed int | - | - | 0.0098 | 1.0 | 0.0 | Adaptionswert Sensor 4 |

### RES_0XE114_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DC_MOT_HI_WERT | Inkremente | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ist-Position DC Motor hinten |

### RES_0XE116_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand Schalter1: 0 = aus, 1 = ein |
| STAT_SCHALTER2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand Schalter2: 0 = aus, 1 = ein |
| STAT_SCHALTER3 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand Schalter3: 0 = aus, 1 = ein |
| STAT_SCHALTER4 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand Schalter4: 0 = aus, 1 = ein |
| STAT_SCHALTER5 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand Schalter5: 0 = aus, 1 = ein |
| STAT_SCHALTER6 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand Schalter6: 0 = aus, 1 = ein |

### RES_0XE136_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Physikalischer Wert Sensor1 |
| STAT_SENSOR2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Physikalischer Wert Sensor2 |
| STAT_SENSOR3_WERT | m/s² | high | signed int | - | - | 0.0098 | 1.0 | 0.0 | Physikalischer Wert Sensor3 |
| STAT_SENSOR4_WERT | m/s² | high | signed int | - | - | 0.0098 | 1.0 | 0.0 | Physikalischer Wert Sensor4 |

### RES_0XE137_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORNE_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller PWM Wert vorne |
| STAT_VORNE_FREQ | 0-n | high | unsigned char | - | TAB_MR_STAT_SAF_FREQ | 1.0 | 1.0 | 0.0 | Aktuelle PWM Frequenz vorne |
| STAT_VENTIL_VORNE | 0-n | high | unsigned char | - | TAB_MR_SAF_PROPORTIONALVENTIL | 1.0 | 1.0 | 0.0 | Zustand Ventil vorne |
| STAT_HINTEN_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller PWM Wert hinten |
| STAT_HINTEN_FREQ | 0-n | high | unsigned char | - | TAB_MR_STAT_SAF_FREQ | 1.0 | 1.0 | 0.0 | Aktuelle PWM Frequenz hinten |
| STAT_VENTIL_HINTEN | 0-n | high | unsigned char | - | TAB_MR_SAF_PROPORTIONALVENTIL | 1.0 | 1.0 | 0.0 | Zustand Ventil hinten |
| STAT_LENKUNG_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller PWM Wert Lenkung |
| STAT_LENKUNG_FREQ | 0-n | high | unsigned char | - | TAB_MR_STAT_SAF_FREQ | 1.0 | 1.0 | 0.0 | Aktuelle PWM Frequenz Lenkung |
| STAT_VENTIL_LENKUNG | 0-n | high | unsigned char | - | TAB_MR_SAF_PROPORTIONALVENTIL | 1.0 | 1.0 | 0.0 | Zustand Ventil Lenkung |

### RES_0XE138_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VENTIL_VORNE | 0-n | high | unsigned char | - | TAB_MR_SAF_PROPORTIONALVENTIL | 1.0 | 1.0 | 0.0 | Zustand Ventil vorne |
| STAT_STROM_VENTIL_VORNE_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Stromwert Ventil vorne |
| STAT_VORNE_FREQ | 0-n | high | unsigned char | - | TAB_MR_STAT_SAF_FREQ | 1.0 | 1.0 | 0.0 | Aktuelle PWM Frequenz vorne |
| STAT_VENTIL_HINTEN | 0-n | high | unsigned char | - | TAB_MR_SAF_PROPORTIONALVENTIL | 1.0 | 1.0 | 0.0 | Zustand Ventil hinten |
| STAT_STROM_VENTIL_HINTEN_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Stromwert Ventil hinten |
| STAT_HINTEN_FREQ | 0-n | high | unsigned char | - | TAB_MR_STAT_SAF_FREQ | 1.0 | 1.0 | 0.0 | Aktuelle PWM Frequenz hinten |
| STAT_VENTIL_LENKUNG | 0-n | high | unsigned char | - | TAB_MR_SAF_PROPORTIONALVENTIL | 1.0 | 1.0 | 0.0 | Zustand Ventil Lenkung |
| STAT_STROM_VENTIL_LENKUNG_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Stromwert Ventil Lenkung |
| STAT_LENKUNG_FREQ | 0-n | high | unsigned char | - | TAB_MR_STAT_SAF_FREQ | 1.0 | 1.0 | 0.0 | Aktuelle PWM Frequenz Lenkung |

### RES_0XE14C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL1_SPANNUNG_HINTEN_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Spannung Hall-Sensor-Signal1, Federbein hinten |
| STAT_HALL2_SPANNUNG_HINTEN_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Spannung Hall-Sensor-Signal 2, Federbein hinten |
| STAT_HALL_1_SPANNUNG_HINTEN_PEGEL | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Hall-Sensor-Signal 1, Federbein hinten 0 == niederiger Pegel 1 == hoher Pegel |
| STAT_HALL_2_SPANNUNG_HINTEN_PEGEL | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Hall-Sensor-Signal  2, Federbein hinten 0 == niederiger Pegel 1 == hoher Pegel |
| STAT_HALL_HINTEN_VERBAUT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 = Hallsensor hinten verbaut 0 = Hallsensor hinten nicht verbaut |
| STAT_DC_MOTOR_HINTEN | 0-n | high | unsigned char | - | TAB_MR_SAF_STATUS_DC_MOTOR | - | - | - | Status DC-Motor hinten |
| STAT_MAX_HALL_COUNTS_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | bei der Vollkalibrierung ermittelte maximale Anzahl von Hallsensor-Impulsen von Endanschlag bis Endanschlag |

### RES_0XE14E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DC_MOTOR_HINTEN_PWM_WERT | % | high | signed int | - | - | 1.0 | 2.0 | 0.0 | PWM-Wert vorzeichenbehaftet  in %, mit dem der DC-Motor hinten betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |
| STAT_DC_MOTOR_HINTEN | 0/1 | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Aktueller Status der beiden digitalen Ausgänge für den DC Motor hinten - 0= beide aus, 1= ein Ausgang liefert Spannung |

### RES_0XE14F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DC_MOT_HI_TEMP_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Temperatur des DC-Motors hinten (Temperaturmodell) |
| STAT_DC_MOT_HI_TEMP | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Uebertemperatur, Federbein hinten 0 == Grenzwert unterschritten, Verstellung Federbein möglich 1 == Grenzwert überschritten, Verstellung Federbein nicht möglich |

### RES_0XE150_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR1_WERT | mV | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Status Sensor1 |
| STAT_SENSOR2_WERT | mV | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Status Sensor2 |
| STAT_SENSOR3_WERT | mV | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Status Sensor3 |
| STAT_SENSOR4_WERT | mV | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Status Sensor4 |

### RES_0XE228_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIAG_IN_RCK_DATA_U32_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_12_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_13_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_14_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_15_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_16_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_17_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_18_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_19_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_20_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_21_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_22_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_23_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_24_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_25_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_26_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_27_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_28_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_29_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_30_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_31_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_32_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_33_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_34_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_35_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_36_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_37_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_38_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_39_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_40_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_41_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_42_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_43_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_44_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_45_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_46_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_47_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_48_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_49_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_50_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_51_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_52_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_53_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_54_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_55_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_56_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_57_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_58_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_59_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |
| STAT_DIAG_IN_RCK_DATA_U32_60_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten für das Race Calibration Kit |

### RES_0XE229_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RCK_OUT_RCK_DATA_U32_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Fahrzeugspezifische Daten für Race Calibration Kit |
| STAT_RCK_OUT_RCK_DATA_U32_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Fahrzeugspezifische Daten für Race Calibration Kit |
| STAT_RCK_OUT_RCK_DATA_U32_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Fahrzeugspezifische Daten für Race Calibration Kit |
| STAT_RCK_OUT_RCK_DATA_U32_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Fahrzeugspezifische Daten für Race Calibration Kit |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SENSOR_ABGLEICH_MR | 0xB07B | - | Kalibrierung Sensoren | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB07B_R | RES_0xB07B_R |
| SAF_KALIBRIERUNG_FEDERBEIN_MR | 0xB08C | - | Kalibrierung Federbein DC-Motor und Proportionalventil | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB08C_R | RES_0xB08C_R |
| SAF_FAHREREINSTELLUNG_MR | 0xB090 | - | Steuern und Statusabfrage Fahrereinstellung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB090_R | RES_0xB090_R |
| RACECAL_STAT_MR | 0xE001 | STAT_RACECAL_DATA | Status Race Calibration Kit | DATA | - | High | data[4] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RACECAL_DAMP_FAC_MR | 0xE002 | STAT_RACECAL_DAMP_DATA | Kalibrierungsdaten für manuelle Verstellung Zugstufe/Druckstufe | DATA | - | High | data[19] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RACECAL_WHEEL_INF_MR | 0xE003 | STAT_RACECAL_WHEEL_DATA | Kalibrierungsdaten für montierte Reifen | DATA | - | High | data[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RACECAL_TRACK_MR | 0xE004 | STAT_RACECAL_TRACK_DATA | Kalibrierungsdaten für die Rennstrecke | DATA | - | High | data[188] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RACECAL_SHIMMING_MR | 0xE005 | STAT_RACECAL_SHIMMING_DATA | Kalibrierungsdaten für e-SHIMMING | DATA | - | High | data[74] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RACECAL_CHKSUM_MR | 0xE006 | STAT_RACECAL_CHKSUM_DATA | Checksumme Kalibrierungsdatenstruktur | DATA | - | High | data[2] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RACECAL_INFO_MR | 0xE007 | STAT_RACECAL_INFO_DATA | Informationen zum aktiven Datensatz | DATA | - | High | data[17] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RACECAL_HIST_MR | 0xE008 | STAT_RACECAL_HIST_DATA | Historie Kalibrierungsdatensatz | DATA | - | High | data[1] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RACECAL_SETUP_MR | 0xE009 | STAT_SETUP_DATA | Verbauzustand Federwegsensor vorne | DATA | - | High | data[1] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ADAPTIONSWERTE_MR | 0xE00A | - | Auslesen der SAF HL-SW Adaptionswerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE00A_D |
| DAEMPFER_TEST_MODUS | 0xE00B | - | SAF Dämpfer Testmodus und Showroommodus | - | - | - | - | - | - | - | - | - | 2F | - | - |
| PRODUKTIONSMODE_MR | 0xE0FF | - | Produktionsmode interne Vorgabe RDZ MDZ | - | - | - | - | - | - | - | - | - | 2F | - | - |
| DC_MOTOR_MR | 0xE114 | - | DC Motor | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE114_D | RES_0xE114_D |
| KOMBISCHALTER_MR | 0xE116 | - | Zustand Kombischalter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE116_D |
| ANALOGSENSOR_PHYS_MR | 0xE136 | - | Physikalische Werte Analogsensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE136_D |
| SAF_VENTIL_PWM_MR | 0xE137 | - | SAF Proportionalventil PWM | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE137_D | RES_0xE137_D |
| SAF_VENTIL_STROM_MR | 0xE138 | - | SAF Proportionalventil Stromwerte | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE138_D | RES_0xE138_D |
| BATTERIESPANNUNG_MR | 0xE142 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| SAF_HALLSENSOR_MR | 0xE14C | - | Hallsensor des SAF - Steuergerätes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE14C_D |
| SAF_DC_MOTOR_PWM | 0xE14E | - | PWM-Wert vorzeichenbehaftet  in %, mit dem der DC-Motor hinten betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE14E_D |
| SAF_TEMPERATURMODELL_MR | 0xE14F | - | Temperatur des DC-Motors (Temperaturmodell) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE14F_D |
| ANALOGSENSOR_ROH_MR | 0xE150 | - | Rohwerte Analogsensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE150_D |
| RCK_DATA_EXCH | 0xE228 | - | Auslesen und Schreiben der Daten für das Race Calibration Kit | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE228_D | RES_0xE228_D |
| RCK_INFO | 0xE229 | - | Auslesen Fahrzeugspezifische Daten für Race Calibration Kit | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE229_D |
| STATISTIK_FAHRZEUGMODUSVERSTELLUNGEN | 0x2300 | STAT_ANZAHL_VERSTELLUNGEN_WERT | Anzahl der Fahrzeugmodusverstellungen | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATISTIK_INIVIDUALISIERUNGEN | 0x2301 | STAT_ANZAHL_INDIVIDUALISIERUNGEN_WERT | Anzahl der Individualisierungen (Dämpfung/Federung) | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATISTIK_VENTILSTROEME | 0x2302 | - | Minimal-, Maximal- und Mittelwerte der Ventilströme (FASTA) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2302_D |
| STATISTIK_FEDERWEGE | 0x2303 | - | Minimal-, Maximal- und Mittelwerte der Federwege vorne und hinten (FASTA) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2303_D |
| STATISTIK_FEDERGESCHWINDIGKEITEN | 0x2304 | - | Maximalwerte und Durchschnittswerte der Geschwindigkeiten für Ein- und Ausfedern vorne und hinten (FASTA) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2304_D |
| STATISTIK_FUNKTIONSSOFTWARE_FEHLERCODES | 0x2305 | STAT_FC_RINGSPEICHER_DATA | Inhalt des 60 Byte großen Fehlercode-Ringspeichers | DATA | - | High | data[60] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATISTIK_INDIVIDUALISIERUNGEN_EINZELN | 0x2306 | - | Individualisierungszähler für Federung und Dämpfung getrennt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2306_D |
| STATISTIK_VERSTELLUNGEN_DC_MOTOR | 0x2307 | - | Anzahl DC-Motor Verstellungen nach oben und nach unten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2307_D |
| STATISTIK_ZAEHLER_ENTWICKLUNG | 0x2308 | - | Statistikzähler unterschiedlich belegbar für die Entwicklung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2308_D |
| STATISTIK_DC_MOTOR | 0x2309 | - | Anteil Betrieb Beladungsmodus, Fehlgeschlagene Verstellungen DC-Motor,  Abweichung Fahrlage zu Normallage | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2309_D |
| _SAF_VERSION_LLSW | 0x4183 | - | Auslesen LowLevel Software Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4183_D |
| _SAF_VERSION_HLSW | 0x4184 | - | Auslesen HighLevel Software Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4184_D |

### TAB_DAEMPFUNG_SAF

| WERT | TEXT |
| --- | --- |
| 0x00 | Verstellung laeuft |
| 0x01 | Komfort / Dämpfung 1 |
| 0x02 | Normal / Dämpfung 2 |
| 0x03 | Sport / Dämpfung 3 |
| 0x04 | nicht verbaut |
| 0xFF | nicht definiert |

### TAB_DAEMPFUNG_SAF_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | Komfort / Dämpfung 1 |
| 0x02 | Normal / Dämpfung 2 |
| 0x03 | Sport / Dämpfung 3 |

### TAB_FEDERVORSPANNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Verstellung laeuft |
| 0x01 | Einzelfahrer / Min |
| 0x02 | Beladen / - |
| 0x03 | Sozius / Max |
| 0x04 |  - / Auto |
| 0x05 | - / - |
| 0x06 | nicht verbaut |
| 0xFF | nicht definiert |

### TAB_FEDERVORSPANNUNG_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | Einzelfahrer / Min |
| 0x02 | Beladen / - |
| 0x03 | Sozius / Max |
| 0x04 | - / Auto |
| 0x05 | - / - |

### TAB_FEHLER_KRITISCH

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler festgestellt |
| 0x03 | ADC-Fehler |
| 0x04 | ALU-Fehler |
| 0x05 | Core-Spg.-Fehler |
| 0x07 | TLE Fehler |
| 0x08 | Watchdog Fehler |
| 0x28 | Taskfehler |
| 0x30 | Reset-unbekannte Ursache/unerwartet |
| 0x31 | External Reset (keine Anwendung im SAF, da keine Unterscheidung der Ursache möglich) |
| 0x32 | Loss-of-Lock-Reset |
| 0x33 | Loss-of-Clock-Reset |
| 0x34 | CPU WD Reset/Debug-Reset (keine Anwendung im SAF) |
| 0x36 | Checkstop-Reset |
| 0x37 | Software-System-Reset (keine Anwendung im SAF) |
| 0x38 | Software-external-Reset (keine Anwendung im SAF) |
| 0x40 | reserviert |
| 0x41 | Maschine-Check |
| 0x42 | Data-Storage |
| 0x43 | Instruction-Storage |
| 0x44 | External Interupt |
| 0x45 | Alignment |
| 0x46 | Program |
| 0x47 | Floating-point unavailbale |
| 0x48 | System-Call |
| 0x49 | AP unavailable |
| 0x4A | Dekrementer |
| 0x4B | Fixed Interval Timer |
| 0x4C | Watchdog Timer |
| 0x4D | Data TLB Error |
| 0x4E | Instruction TLB Error |
| 0x4F | Debug |
| 0x50 | reserviert |
| 0x51 | reserviert |
| 0x52 | reserviert |
| 0x53 | reserviert |
| 0x54 | reserviert |
| 0x55 | reserviert |
| 0x56 | reserviert |
| 0x57 | reserviert |
| 0x58 | reserviert |
| 0x59 | reserviert |
| 0x5A | reserviert |
| 0x5B | reserviert |
| 0x5C | reserviert |
| 0x5D | reserviert |
| 0x5E | reserviert |
| 0x5F | reserviert |
| 0x60 | SPE unavailbale Exc |
| 0x61 | SPE Data Exc |
| 0x69 | Deadline |
| 0x6B | Stack-Fehler |
| 0x70 | unbekannter OS-Fehler |
| 0xFF | manuell auswerten |

### TAB_ISTSTROM_DAEMPFER_VORNE_ERR

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x0001 | Ventil Kurzschluss nach KL30 |
| 0x0002 | Ventil Kurzschluss nach KL31 |
| 0x0004 | Ventil offene Leitung |
| 0x0008 | Ventil Kurzschluss |
| 0x0010 | reserviert |
| 0x0020 | Ventilstrommessung nicht kalibriert |
| 0x0040 | reserviert |
| 0x0080 | reserviert |
| 0x0100 | allgemeiner Ventilfehler bei Onlinepruefung |
| 0x0200 | Hochlaufpruefung nicht durchgefuehrt |
| 0x0400 | Stromplausibilitaetsfehler |
| 0x0800 | reserviert |
| 0x1000 | reserviert |
| 0x2000 | reserviert |
| 0x4000 | reserviert |
| 0x8000 | reserviert |
| 0xFFFF | manuell auswerten |

### TAB_KLEMME30_ERR

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x0001 | Überpannung |
| 0x0002 | Unterspannung |
| 0x0004 | reserviert |
| 0x0008 | reserviert |
| 0x0010 | reserviert |
| 0x0020 | reserviert |
| 0x0040 | reserviert |
| 0x0060 | reserviert |
| 0x0080 | reserviert |
| 0x0100 | reserviert |
| 0x0200 | reserviert |
| 0x0400 | reserviert |
| 0x0800 | reserviert |
| 0x1000 | reserviert |
| 0x2000 | reserviert |
| 0x4000 | reserviert |
| 0x8000 | reserviert |
| 0xFFFF | manuell auswerten |

### TAB_MR_ART_KALIBRIERUNG_SAF

| WERT | TEXT |
| --- | --- |
| 0x00 | Vollkalibrierung DC-Motor hinten |
| 0x01 | Rekalibrierung DC-Motor hinten |
| 0xFF | Wert ungültig |

### TAB_MR_ESA_STATUS_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierung Federbein laeuft |
| 0x01 | Fehler Kalibrierung |
| 0x02 | Kalibrierung Federbein erfolgreich |
| 0xFF | ungültig |

### TAB_MR_FEHLER_UNKRITISCH

| WERT | TEXT |
| --- | --- |
| 0x00000000 | kein Fehler festgestellt |
| 0x00000001 | BUS_OFF |
| 0x00000002 | Task_Check_WCET |
| 0x00000004 | EEP-Driver-Failure |
| 0x00000008 | ROM-Check-Failure |
| 0x00000010 | No-Coding-Data |
| 0xFFFFFFFF | manuell auswerten |

### TAB_MR_ROUTINE_SAF

| WERT | TEXT |
| --- | --- |
| 0x00 | Routine nicht beendet |
| 0x01 | Routine erfolgreich beendet |
| 0x02 | Routine nicht erfolgreich beendet |
| 0x03 | Routine abgebrochen |
| 0xFF | Ungültig |

### TAB_MR_SAF_FREQ

| WERT | TEXT |
| --- | --- |
| 0x00 | 400 Hz |
| 0x01 | 800 Hz |
| 0x02 | 1200 Hz |
| 0x03 | 1600 Hz |
| 0x04 | 2000 Hz |

### TAB_MR_SAF_PROPORTIONALVENTIL

| WERT | TEXT |
| --- | --- |
| 0x00 | Zielfenster des Stromes erreicht |
| 0x01 | Zielfenster des Stromes nicht erreicht |
| 0x02 | Proportionalventil nicht verbaut |
| 0x03 | Proportionalventil nicht aktiviert |
| 0x04 | Kurzschluss |
| 0x05 | Leitungsbruch |
| 0xFF | ungültig |

### TAB_MR_SAF_STATUS_DC_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Verstellung laeuft |
| 0x01 | Wiederholter Versuch aktiv |
| 0x02 | Position erreicht |
| 0x03 | Motorposition nicht im Zielfenster |
| 0x04 | Motor nicht verbaut |
| 0x05 | Motor deaktiviert |
| 0x06 | Motor zu heiss |
| 0x07 | Fehler vorhanden |
| 0xFF | ungültig |

### TAB_MR_SENSORKANAL

| WERT | TEXT |
| --- | --- |
| 0x00 | AIN1..AIN4 |
| 0x01 | AIN1 |
| 0x02 | AIN2 |
| 0x03 | AIN3 |
| 0x04 | AIN4 |

### TAB_MR_STATUS_PROP_VENTILE

| WERT | TEXT |
| --- | --- |
| 0x00 | Sollstrom erreicht |
| 0x01 | Proportionalventil deaktiviert |
| 0x02 | Fehler vorhanden |
| 0x03 | ungueltig |
| 0xFF | Wert ungültig |

### TAB_MR_STAT_SAF_FREQ

| WERT | TEXT |
| --- | --- |
| 0x00 | 400 Hz |
| 0x01 | 800 Hz |
| 0x02 | 1200 Hz |
| 0x03 | 1600 Hz |
| 0x04 | 2000 Hz |
| 0xFF | ungueltig |

### TAB_MR_VENTIL_ANSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Lenkung |
| 0x01 | Daempfung vorne |
| 0x02 | Daempfung hinten |
| 0x03 | Lenkung und Daempfung vorne |
| 0x04 | Lenkung und Daempfung hinten |
| 0x05 | Daempfung vorne und hinten |
| 0x06 | Alle Proportionalventile |

### TAB_NUMBER_TASK_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | 10 ms Task |
| 0x01 | 2.5 ms Task |
| 0xFF | ungültiger Wert |

### TAB_REASON_TASK_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | WCET Überschreitung |
| 0x01 | Taskausfall |
| 0xFF | ungültiger Wert |

### TAB_SAF_SG

| WERT | TEXT |
| --- | --- |
| 0x00 | reserviert |
| 0x01 | SAF in Ordnung |
| 0x02 | SAF defekt: Systemfehler vorhanden |
| 0xFF | undefiniert |

### TAB_SWITCH_X_ERROR

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x0001 | Schluss nach UBAT |
| 0x0002 | Schluss nach GND |
| 0x0004 | reserviert |
| 0x0008 | reserviert |
| 0x0010 | reserviert |
| 0x0020 | reserviert |
| 0x0040 | reserviert |
| 0x0060 | reserviert |
| 0x0080 | reserviert |
| 0x0100 | reserviert |
| 0x0200 | reserviert |
| 0x0400 | reserviert |
| 0x0800 | reserviert |
| 0x1000 | reserviert |
| 0x2000 | reserviert |
| 0x4000 | reserviert |
| 0x8000 | reserviert |
| 0xFFFF | manuell auswerten |

### TAB_WERT_SENSOR_1_KURVE

| WERT | TEXT |
| --- | --- |
| 0x01 | Kurve 1 |
| 0x02 | Kurve 2 |
| 0xFF | Nicht definiert |

### TAB_WERT_SENSOR_1_TYP

| WERT | TEXT |
| --- | --- |
| 0x00 | ungültig |
| 0x01 | Beschleunigungssensor |
| 0x02 | Höhenstandssensor |
| 0xFF | nicht definiert |

### TAB_WERT_SENSOR_1_VERSSP_ERR

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x0001 | Signal zu hoch |
| 0x0002 | Signal zu niedrig |
| 0x0004 | reserviert |
| 0x0008 | reserviert |
| 0x0010 | reserviert |
| 0x0020 | reserviert |
| 0x0040 | reserviert |
| 0x0080 | reserviert |
| 0x0100 | reserviert |
| 0x0200 | reserviert |
| 0x0400 | reserviert |
| 0x0800 | reserviert |
| 0x1000 | reserviert |
| 0x2000 | reserviert |
| 0x4000 | reserviert |
| 0x8000 | reserviert |
| 0xFFFF | manuell auswerten |

### TAB_0X2001

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR | UW22_NR | UW23_NR | UW24_NR | UW25_NR | UW26_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 26 | 0x000D | 0x000E | 0x000F | 0x0010 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 |

### TAB_0X2002

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0027 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E |

### TAB_0X2003

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 12 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C |

### TAB_0X2004

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x002F | 0x0030 | 0x0031 | 0x0032 | 0x0033 | 0x0034 | 0x0035 | 0x0036 | 0x0037 | 0x0038 | 0x0039 | 0x003A | 0x003B | 0x003C | 0x003D | 0x003E |

### UWB_WERT_SENSOR1_ERR

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x0001 | Signal zu hoch |
| 0x0002 | Signal zu niedrig |
| 0x0004 | reserviert |
| 0x0008 | reserviert |
| 0x0010 | reserviert |
| 0x0020 | Sensorparameter nicht codiert |
| 0x0040 | Sensoreinbaulage nicht gelernt |
| 0x0060 | Sensorparameter nicht codiert und Sensoreinbaulage nicht gelernt |
| 0x0080 | reserviert |
| 0x0100 | reserviert |
| 0x0200 | reserviert |
| 0x0400 | reserviert |
| 0x0800 | reserviert |
| 0x1000 | reserviert |
| 0x2000 | reserviert |
| 0x4000 | reserviert |
| 0x8000 | reserviert |
| 0xFFFF | manuell auswerten |
