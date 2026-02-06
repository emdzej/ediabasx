# x_kombi.prg

## General

|  |  |
| --- | --- |
| File | x_kombi.prg |
| Type | PRG |
| Jobs | 29 |
| Tables | 58 |
| Origin | BMW UX-EE-2 Geiger |
| Revision | 7.000 |
| Author | BMW-AG UX-EE-1 Kiesewetter, Dräxlmaier UX-EE-1 Rätscher, In-Tec |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad Instrumentenkombi |  |  |
| ORIGIN | string | BMW UX-EE-2 Geiger |  |  |
| REVISION | string | 7.000 |  |  |
| AUTHOR | string | BMW-AG UX-EE-1 Kiesewetter, Dräxlmaier UX-EE-1 Rätscher, In-Tec |  |  |
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

### STATUS_GWSZ_ANZEIGE

JobHeaderFormat 0xD122 GWSZ_ANZEIGE_WERT

_No arguments._

### STEUERN_GWSZ_OFFSET

JobHeaderFormat 0xD114 STEUERN_GWSZ_RESET

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

### ARG_0XE119_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GWSZ_SCHREIBEN | km | - | long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | GWSZ im Kombi auf neuen Wert setzen |

### ARG_0XE11F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DISPLAY_TESTBILD | 0-n | - | unsigned int | - | TAB_TESTBILD | 1.0 | 1.0 | 0.0 | - | - | Auswahl Testbild gemäß Tabelle TAB_TESTBILD |
| FARBE_HINTERGRUND_R | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Farbe Hintergrund R |
| FARBE_HINTERGRUND_G | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Farbe Hintergrund G |
| FARBE_HINTERGRUND_B | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Farbe Hintergrund B |
| FARBE_VORDERGRUND_1_R | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Farbe Vordergrund 1 R |
| FARBE_VORDERGRUND_1_G | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Farbe Vordergrund 1 G |
| FARBE_VORDERGRUND_1_B | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Farbe Vordergrund 1 B |
| FARBE_VORDERGRUND_2_R | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Farbe Vordergrund 2 R |
| FARBE_VORDERGRUND_2_G | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Farbe Vordergrund 2 G |
| FARBE_VORDERGRUND_2_B | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Farbe Vordergrund 2 B |

### ARG_0XE123_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_AUSWAHL_BEL_LIN | 0-n | - | unsigned char | - | TAB_AUSWAHL_BEL_LIN | 1.0 | 1.0 | 0.0 | - | - | Auswahl der anzusteuernden Beleuchtung: 0x00 Suchbeleuchtungs-PWM Lenkerschalter links (S_LSL) 0x01 Funktionsbeleuchtungs-PWM Radiobendienteil  (F_RBT) 0x02 Suchbeleuchtungs-PWM Radiobendienteil  (S_RBT) |
| PWM_WERT_VORGEBEN | % | - | unsigned char | - | - | 254.0 | 100.0 | 0.0 | 0.0 | 100.0 | PWM  für ausgewählte Funktions- bzw. Suchbeleuchtung vorgeben:  0%: Beleuchtung aus; 100%: volle Leuchstaerke |

### ARG_0XE125_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL | 1/min | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe der aktuell im Kombi anzuzeigenden Drehzahl |

### ARG_0XE126_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GESCHWINDIGKEIT | km/h | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe der aktuell im Kombi anzuzeigenden Geschwindigkeit |

### ARG_0XE127_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GANG | 0-n | - | unsigned char | - | TAB_GANG_ARG | 1.0 | 1.0 | 0.0 | 0.0 | 6.0 | Vorgabe des aktuell im Kombi anzuzeigenden Ganges Vorgabewerte gemäß Tabelle TAB_GANG N == Neutral; 1 == 1. Gang; 2 == 2. Gang; 3 == 3. Gang; 4 == 4. Gang; 5 == 5. Gang; 6 == 6. Gang |

### ARG_0XE128_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TANKINHALT | Liter | - | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Fuer interne Funktionslogik zu nutzender Tankinhalt für Tankanzeige |

### ARG_0XE129_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MOTORTEMPERATUR | °C | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | fuer interne Funktionslogik zu nutzende Motortemperatur |

### ARG_0XE12B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KOMBI_STUNDE_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 24.0 | Stunde |
| KOMBI_MINUTE_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 60.0 | Minute |
| KOMBI_SEKUNDE_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 60.0 | Sekunde |
| KOMBI_TAG_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 31.0 | Tag |
| KOMBI_MONAT_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | Monat |
| KOMBI_JAHR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Jahr |

### ARG_0XE12C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERVICE_TAG | - | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Tag, an dem der nächste Service fällig ist |
| SERVICE_MONAT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Monat, an dem der nächste Service fällig ist |
| SERVICE_JAHR | - | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Jahr, an dem der nächste Service fällig ist |

### ARG_0XE12D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESTWEG | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzen des Wegstreckenintervalles bis zur nächsten Seviceanzeige |

### ARG_0XE12E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_AUSWAHL_BEL_KOMBI | 0-n | - | unsigned char | - | TAB_AUSWAHL_BEL_KOMBI | 1.0 | 1.0 | 0.0 | - | - | Auswahl der anzusteuernden Beleuchtung: 0x00 Kontrollleuchten (KL); 0x01 Hinterleuchtung fuer das Display (HD); 0x02 Zeigerinstrumente (ZI): Hinterleuchtung fuer Tacho und Drehzahlmesser |
| PWM_WERT_VORGEBEN | % | - | unsigned char | - | - | 2.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM  für ausgewählte Kombibeleuchtung vorgeben:  0%: Beleuchtung aus; 100%: volle Leuchstaerke |

### ARG_0XE12F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_KONTROLLLEUCHTE | 0-n | - | unsigned int | - | TAB_KONTROLLEUCHTEN | - | - | - | - | - | Auswahl der anzusteuernden Kontrollleuchte |
| EIN_AUS | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ein- und Ausschalten der ausgewählten Kontrollleuchte: 0->aus, 1->ein |

### ARG_0XF190_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FGNR17 | TEXT | - | string[17] | - | - | 1.0 | 1.0 | 0.0 | - | - | 17-stellige Fahrgestellnummer |

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
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x026000 | Energiesparmode  aktiv | 0 |
| 0xB7F601 | Softwarefehler Steuergeraet | 0 |
| 0xB7F603 | Unterspannung Batterie | 1 |
| 0xB7F604 | Ueberspannung Batterie | 1 |
| 0xB7F605 | Codierung : Codiersignaturfehler | 0 |
| 0xB7F609 | Codierung : Steuergerät ist nicht codiert | 0 |
| 0xB7F60B | Codierung : Codierdatenübertragungsfehler | 0 |
| 0xB7F60E | LIN Schalterblock_links: Zeitüberschreitung | 1 |
| 0xB7F60F | LIN Schalterblock_links: Busausfall | 1 |
| 0xB7F611 | NVM_E_CONTROL_FAILED | 0 |
| 0xB7F612 | NVM_E_WRITE_FAILED | 0 |
| 0xB7F613 | NVM_E_READ_FAILED | 0 |
| 0xB7F614 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0xB7F615 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0xB7F616 | NVM_E_READ_ALL_FAILED | 0 |
| 0xB7F617 | NVM_E_ERASE_FAILED | 0 |
| 0xB7F618 | Kilometerstand  manipuliert | 0 |
| 0xB7F61A | LIN Radiobedienteil: Zeitüberschreitungl | 0 |
| 0xE1045F | CAN Bus Off | 1 |
| 0xE10C00 | BEDIENUNG_LIN Eingang_Schalterblock_SOS_Motorrad_2010_LIN: Zeitüberschreitung | 0 |
| 0xE1140A | CAN AUDIO Anzeige_Audio_Menü_Links_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1140C | CAN AUDIO Anzeige_Audio_Menü_Rechts_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1140E | CAN AUDIO Anzeige_Audio_Zeile_A_Links_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11410 | CAN AUDIO Anzeige_Audio_Zeile_A_Rechts_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11412 | CAN AUDIO Anzeige_Audio_Zeile_B_Links_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11414 | CAN AUDIO Anzeige_Audio_Zeile_B_Rechts_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11416 | CAN AUDIO Anzeige_Audio_Zeile_C_Links_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11418 | CAN AUDIO Anzeige_Audio_Zeile_C_Rechts_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1141A | CAN AUDIO Anzeige_Audio_Zusatzinformation_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11422 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11423 | CAN Nachricht E-CALL : Zeitüberschreitung | 1 |
| 0xE11424 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11428 | CAN DME Nachricht Motordaten_1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1142A | CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11430 | CAN ASW Nachricht Status_ASW_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11432 | CAN DWA Nachricht Status_DWA_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11434 | CAN FSA-BCO Nachricht Status_Erweitert_Funktion_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xE11436 | CAN SLZ Nachricht Status_Fahrzeug_Zugriff_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xE11438 | CAN ESA-SAF Nachricht Status_Federbein_Verstellung_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1143A | CAN BCO Nachricht Status_Grund_Funktion_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xE1143C | CAN RDC Nachricht Status_RDC_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11440 | CAN DME Nachricht Wegstrecke_Redundant_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11442 | CAN ABS-BCO Nachricht Wegstrecke_Relativ_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11446 | CAN DME Nachricht Modus_Fahrzeug_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xE1144C | CAN AUDIO Nachricht TMC_Daten_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xE11485 | CAN BCA Nachricht Steuerung_Sonderfunktion_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x5000 | BORDNETZSPANNUNG | V | - | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x5001 | Drehzahl | 1/min | - | unsigned char | - | 100.0 | 1.0 | 0.0 |
| 0x5002 | Geschwindigkeit | km/h | - | unsigned char | - | 2.0 | 1.0 | 0.0 |
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
| 0xB7F606 | SEK Unterspannung Batterie | 1 |
| 0xB7F607 | SEK Ueberspannung Batterie | 1 |
| 0xE1140B | SEK_CAN AUDIO Anzeige_Audio_Menü_Links_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1140D | SEK_CAN AUDIO Anzeige_Audio_Menü_Rechts_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1140F | SEK_CAN AUDIO Anzeige_Audio_Zeile_A_Links_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11411 | SEK_CAN AUDIO Anzeige_Audio_Zeile_A_Rechts_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11413 | SEK_CAN AUDIO Anzeige_Audio_Zeile_B_Links_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11415 | SEK_CAN AUDIO Anzeige_Audio_Zeile_B_Rechts_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11417 | SEK_CAN AUDIO Anzeige_Audio_Zeile_C_Links_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11419 | SEK_CAN AUDIO Anzeige_Audio_Zeile_C_Rechts_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1141B | SEK_CAN AUDIO Anzeige_Audio_Zusatzinformation_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11423 | SEK_CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11425 | SEK_CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11427 | SEK_CAN DME Nachricht Modus_Fahrzeug_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xE11429 | SEK_CAN DME Nachricht Motordaten_1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1142B | SEK_CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11431 | SEK_CAN ASW Nachricht Status_ASW_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11433 | SEK_CAN DWA Nachricht Status_DWA_Motorrad_20100 - Zeitüberschreitung | 1 |
| 0xE11435 | SEK_CAN FSA-BCO Nachricht Status_Erweitert_Funktion_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11439 | SEK_CAN ESA-SAF Nachricht Status_Federbein_Verstellung_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1143B | SEK_CAN BCO Nachricht Status_Grund_Funktion_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xE11443 | SEK_CAN ABS-BCO Nachricht Wegstrecke_Relativ_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xE1144D | SEK_CAN AUDIO Nachricht TMC_Daten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0XD10D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABSOLUT_GWSZ_RAM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Liefert den absoluten Gesamtwegstreckenzähler aus dem RAM. |
| STAT_ABSOLUT_GWSZ_EEP_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Liefert den absoluten Gesamtwegstreckenzähler aus dem EEPROM. |

### RES_0XE119_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GWSZ_WERT | km | - | long | - | - | 1.0 | 1.0 | 0.0 | aktueller GWSZ-Wert |

### RES_0XE120_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WIPPE_RE_AB | 0/1 | - | unsigned int | 0x0001 | - | 1.0 | 1.0 | 0.0 | Wippschalter rechts abwärts (Windschild ab) 1: Taster gedrueckt 0: Taster nicht gedrueckt |
| STAT_WIPPE_RE_AUF | 0/1 | - | unsigned int | 0x0002 | - | 1.0 | 1.0 | 0.0 | Wippschalter rechts aufwärts (Windschild auf) 1: Taster gedrueckt 0: Taster nicht gedrueckt |
| STAT_TASTE_RE | 0/1 | - | unsigned int | 0x0004 | - | 1.0 | 1.0 | 0.0 | Taster rechts (Warnblinktaster) 1: Taster gedrueckt 0: Taster nicht gedrueckt |
| STAT_TASTE_TEMPOMAT_EIN | 0/1 | - | unsigned int | 0x0008 | - | 1.0 | 1.0 | 0.0 | Tempomat ein 1: Taster gedrueckt 0: Taster nicht gedrueckt |
| STAT_TASTE_BLINKER_LI | 0/1 | - | unsigned int | 0x0010 | - | 1.0 | 1.0 | 0.0 | Blinker links 1: Taster gedrueckt 0: Taster nicht gedrueckt |
| STAT_TASTE_BLINKER_RE | 0/1 | - | unsigned int | 0x0020 | - | 1.0 | 1.0 | 0.0 | Blinker rechts 1: Taster gedrueckt 0: Taster nicht gedrueckt |
| STAT_TASTE_BLINKER_RUECKSTELL | 0/1 | - | unsigned int | 0x0040 | - | 1.0 | 1.0 | 0.0 | Blinker Rückstellung 1: Taster gedrueckt 0: Taster nicht gedrueckt |
| STAT_TASTE_HORN | 0/1 | - | unsigned int | 0x0080 | - | 1.0 | 1.0 | 0.0 | Horn 1: Taster gedrueckt 0: Taster nicht gedrueckt |
| STAT_TASTE_TEMPOMAT_VERZOEGERN | 0/1 | - | unsigned int | 0x0400 | - | 1.0 | 1.0 | 0.0 | Tempomat Verzögern 1: Taster gedrueckt 0: Taster nicht gedrueckt |
| STAT_TASTE_TEMPOMAT_BESCHLEUNIGEN | 0/1 | - | unsigned int | 0x0800 | - | 1.0 | 1.0 | 0.0 | Tempomat Beschleunigen 1: Taster gedrueckt 0: Taster nicht gedrueckt |
| STAT_WIPPE_LI_AB | 0/1 | - | unsigned int | 0x1000 | - | 1.0 | 1.0 | 0.0 | Wippschalter links abwärts 1: Taster gedrueckt 0: Taster nicht gedrueckt |
| STAT_WIPPE_LI_AUF | 0/1 | - | unsigned int | 0x2000 | - | 1.0 | 1.0 | 0.0 | Wippschalter links aufwärts 1: Taster gedrueckt 0: Taster nicht gedrueckt |
| STAT_TASTE_LI | 0/1 | - | unsigned int | 0x4000 | - | 1.0 | 1.0 | 0.0 | Taster links 1: Taster gedrueckt 0: Taster nicht gedrueckt |
| STAT_TASTE_FERNLICHT | 0/1 | - | unsigned int | 0x0200 | - | 1.0 | 1.0 | 0.0 | Fernlicht 1: Taster gedrueckt 0: Taster nicht gedrueckt |

### RES_0XE121_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MMC_BEDIENUNG | 0-n | - | unsigned char | 0x02 | TAB_MMC_BED | 1.0 | 1.0 | 0.0 | Betätigungsrichtung des MMC: |
| STAT_MMC_POSITION_WERT | Schritte | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Position des MMC 0..254 |

### RES_0XE122_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RBT_TASTE_ON | 0/1 | - | unsigned char | 0x01 | - | 1.0 | 1.0 | 0.0 | Radiobedienteil Taste_ON 1 = gedrückt; 0 = nicht gedrückt |
| STAT_RBT_TASTE_SOURCE | 0/1 | - | unsigned char | 0x02 | - | 1.0 | 1.0 | 0.0 | Radiobedienteil Taste_SOURCE 1 = gedrückt; 0 = nicht gedrückt |
| STAT_RBT_TASTE_MEM | 0/1 | - | unsigned char | 0x04 | - | 1.0 | 1.0 | 0.0 | Radiobedienteil Taste_MEM 1 = gedrückt; 0 = nicht gedrückt |
| STAT_RBT_TASTE_MODE | 0/1 | - | unsigned char | 0x08 | - | 1.0 | 1.0 | 0.0 | Radiobedienteil Taste_MODE 1 = gedrückt; 0 = nicht gedrückt |

### RES_0XE123_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWM_SUCHBEL_LENKERSCHALTER_LINKS_WERT | % | - | unsigned char | - | - | 100.0 | 254.0 | 0.0 | Status Suchbeleuchtungs-PWM Lenkerschalter links auslesen 0%: Beleuchtung aus; 100%: volle Leuchstaerke |
| STAT_PWM_SUCHBEL_RBT_WERT | % | - | unsigned char | - | - | 100.0 | 254.0 | 0.0 | Status Suchbeleuchtungs-PWM Radiobendienteil auslesen 0%: Beleuchtung aus; 100%: volle Leuchstaerke |
| STAT_PWM_FUNKTIONSBEL_RBT_WERT | % | - | unsigned char | - | - | 100.0 | 254.0 | 0.0 | Status Funktionsbeleuchtungs-PWM Radiobendienteil auslesen 0%: Beleuchtung aus; 100%: volle Leuchstaerke |

### RES_0XE125_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_WERT | 1/min | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuell im Kombi angezeigte Drehzahl |

### RES_0XE126_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_WERT | km/h | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuell im Kombi angezeigte Geschwindigkeit |

### RES_0XE127_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GANG | 0-n | - | unsigned char | - | TAB_GANG | 1.0 | 1.0 | 0.0 | aktuell im Kombi angezeigter Gang Anzeige gemäß Tabelle TAB_GANG N == Neutral; 1 == 1. Gang; 2 == 2. Gang; 3 == 3. Gang; 4 == 4. Gang; 5 == 5. Gang; 6 == 6. Gang |

### RES_0XE128_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANKINHALT_CAN_WERT | Liter | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | aktueller Tankinhalt vom CAN-Bus |
| STAT_TANKINHALT_KOMBIINTERN_WERT | Liter | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | aktuell kombiintern fuer Funktionslogik genutzer Tankinhalt |
| STAT_TANKANZ_BALKEN_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tankanzeige: im Kombi angezeigte Balken |

### RES_0XE129_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORTEMP_CAN_WERT | °C | - | int | - | - | 1.0 | 1.0 | 0.0 | aktuelle Motortemperatur vom CAN-Bus |
| STAT_MOTORTEMP_KOMBIINTERN_WERT | °C | - | int | - | - | 1.0 | 1.0 | 0.0 | aktuell kombiintern fuer Funktionslogik genutze Motortemperatur |
| STAT_MOTORTEMP_BALKEN_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Motortemperatur-Anzeige im Kombi angezeigte Balken |

### RES_0XE12B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KOMBI_STUNDE_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe der aktuellen Stunde |
| STAT_KOMBI_MINUTE_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe der aktuellen Minute |
| STAT_KOMBI_SEKUNDE_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe der aktuellen Sekunde |
| STAT_KOMBI_TAG_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des aktuellen Tag |
| STAT_KOMBI_MONAT_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des aktuellen Monat |
| STAT_KOMBI_JAHR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des aktuellen Jahr |

### RES_0XE12C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERVICE_TAG_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Tag, an dem der nächste Service fällig ist |
| STAT_SERVICE_MONAT_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Monat, an dem der nächste Service fällig ist |
| STAT_SERVICE_JAHR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Jahr, an dem der nächste Service fällig ist |

### RES_0XE12D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESTWEG_WERT | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | verbleibendes Wegstreckenintervall bis wegabhängiger Service als überfällig angezeigt wird |

### RES_0XE12E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWM_KONTROLLLEUCHTEN_WERT | % | - | unsigned char | - | - | 1.0 | 2.0 | 0.0 | aktueller PWM-Wert der Kontrollleuchten |
| STAT_PWM_DISPLAY_WERT | % | - | unsigned char | - | - | 1.0 | 2.0 | 0.0 | aktueller PWM-Wert der Hinterleuchtung fuer das Display |
| STAT_PWM_ZEIGERINSTRUMENTE_WERT | % | - | unsigned char | - | - | 1.0 | 2.0 | 0.0 | aktueller PWM-Wert der Hinterleuchtung fuer Tacho und Drehzahlmesser |

### RES_0XE12F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLINKER_LI_GRUEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Blinker links (grün) |
| STAT_BLINKER_RE_GRUEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Blinker rechts (grün) |
| STAT_NEUTRALGANG_GRUEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Neutralgang (grün) |
| STAT_FERNLICHT_BLAU | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fernlicht (blau) |
| STAT_ASC_GELB | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ASC (gelb) |
| STAT_WARNSYMBOL_GELB | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Warnsymbol (gelb) |
| STAT_WARNSYMBOL_ROT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Warnsymbol (rot) |
| STAT_MOTORWARNUNG_GELB | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Motorwarnung (gelb) (Malfunction IndicationLight) |
| STAT_ABS_GELB | 0/1 | - | unsigned char | - | - | - | - | - | ABS (gelb) |
| STAT_TANKRESERVE_GELB | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tankreserve (gelb) |
| STAT_SET_GELB | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SET (gelb) |
| STAT_ZUSSCHEINW_GRUEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ZUSATZSCHEINWERFER (gruen) |
| STAT_TFL_GRUEN | 0/1 | - | unsigned char | - | - | - | - | - | Tagfahrlicht (gruen) |
| STAT_DWA_ROT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DWA (rot) |

### RES_0XF190_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FGNR17_TEXT | TEXT | - | string[17] | - | - | 1.0 | 1.0 | 0.0 | 17-Stellige Fahrgestellnummer |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GWSZ_ABSOLUT_WERT | 0xD10D | - | Aboluter Gesamtwegstreckenzähler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD10D_D |
| GWSZ_RESET | 0xD114 | STAT_GWSZ_OFFSET_WERT | Rueckgabe des Anzeigeoffset des GWSZ. | km | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GWSZ_ANZEIGE_WERT | 0xD122 | STAT_GWSZ_ANZEIGE_WERT | Aufruf liefert den angezeigten Gesamtwegstreckenzähler | km | - | - | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WEGSTRECKENEINHEIT_MR | 0xE117 | STAT_EINHEIT | Im Kombi dargestellte Wegstreckeneinheit: 0 = km, 1 = Meilen | 0/1 | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LIN_NAVIGATION | 0xE118 | STAT_KOMMUNIKATION | Kommunikation auf LIN zum NAVI ok 0 = keine Kommunikation 1 = ok | 0/1 | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GWSZ_MR | 0xE119 | - | Gesamtwegstreckenzähler Motorrad | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE119_D | RES_0xE119_D |
| PHOTOSENSOR_MR | 0xE11B | STAT_PHOTOSENS_WERT | Helligkeitswert vom Fotosensor | % | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WECKLEITUNG_DIGITAL_MR | 0xE11C | STAT_WECKLEITUNG_DIGITAL_EIN | aktueller Zustand der  Weckleitung | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_DISPLAY_MR | 0xE11D | STAT_TEMPERATUR_DISPLAY_WERT | Temperatur am NTC des Display | °C | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KOMBI_TASTER_MR | 0xE11E | STAT_KOMBI_TASTER | aktueller Zustand der Kombi-Taste | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TESTBILD_MR | 0xE11F | - | Testbilder im Display vorgeben | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE11F_D | - |
| LIN_SCHALTERBLOCK_LINKS_MR | 0xE120 | - | Status der Tasten am linken Lenkerschalterblock (dieser ist über LIN am Kombi angeschlossen) nicht gedrückt/ gedrückt | bit | - | - | BITFIELD | RES_0xE120_D | - | - | - | - | 22 | - | - |
| LIN_MMC_BEDIENUNG_MR | 0xE121 | - | Status MMC-Bedienung (MMC ist über LIN am Kombi angeschlossen) links- / rechts gedrückt;  Position der AUF-/AB-Bewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE121_D |
| LIN_TASTEN_RBT_MR | 0xE122 | - | Status der Radiobedienteiltasten (RBT ist über LIN am Kombi angeschlossen) | bit | - | - | BITFIELD | RES_0xE122_D | - | - | - | - | 22 | - | - |
| LIN_PWM_MR | 0xE123 | - | LIN : PWM  auslesen und für ausgewählte Funktions- bzw. Suchbeleuchtung vorgeben: Lenkerschalter links und Radiobendienteil RBT | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE123_D | RES_0xE123_D |
| DREHZAHLANZEIGE_MR | 0xE125 | - | Ansteuern und Auslesen Drehzahl für Drehzahlmesser-Zeiger in U/min | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE125_D | RES_0xE125_D |
| GESCHWINDIGKEIT_ANZEIGE_MR | 0xE126 | - | Ansteuern und Auslesen Geschwindigkeit für Tacho-Zeiger in km/h | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE126_D | RES_0xE126_D |
| GANG_ANZEIGE_MR | 0xE127 | - | Vorgeben und Auslesen des im Kombi angezeigten Ganges | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE127_D | RES_0xE127_D |
| TANKANZEIGE_MR | 0xE128 | - | Steuern der Tankanzeige über Vorgabe eines Tankinhaltes und Status des Tankinhaltes | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE128_D | RES_0xE128_D |
| MOTORTEMP_ANZEIGE_MR | 0xE129 | - | Steuern der Motortemperaturanzeige über Vorgabe einer Temperatur und Status aktuelle Motortemperatur | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE129_D | RES_0xE129_D |
| UHRZEIT_DATUM_MR | 0xE12B | - | Uhrzeit und Datum im Kombi | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12B_D | RES_0xE12B_D |
| SERVICE_DATUM_MR | 0xE12C | - | Auslesen und Schreiben der bis zum nächsten fälligen Service verbleibende Zeit | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12C_D | RES_0xE12C_D |
| SERVICE_RESTWEG_MR | 0xE12D | - | Auslesen und Schreiben der bis zum nächsten fälligen Service verbleibende Weg | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12D_D | RES_0xE12D_D |
| PWM_KOMBI_MR | 0xE12E | - | PWM-Werte der Kontrollleuchten und Displays im Kombi ansteuern und auslesen | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE12E_D | RES_0xE12E_D |
| KONTROLLLEUCHTEN_MR | 0xE12F | - | aktueller Ansteuerzustand der Kontrollleuchten (LEDs) : EIN / AUS ansteuern und auslesen | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE12F_D | RES_0xE12F_D |
| BATTERIESPANNUNG_MR | 0xE142 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| VIN | 0xF190 | - | Fahrgestellnummer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xF190_D | RES_0xF190_D |

### TAB_AUSWAHL_BEL_KOMBI

| WERT | TEXT |
| --- | --- |
| 0x00 | KL |
| 0x01 | HD |
| 0x02 | ZI |

### TAB_AUSWAHL_BEL_LIN

| WERT | TEXT |
| --- | --- |
| 0x00 | S_LSL |
| 0x01 | F_RBT |
| 0x02 | S_RBT |

### TAB_GANG

| WERT | TEXT |
| --- | --- |
| 0x00 | N |
| 0x01 | 1 |
| 0x02 | 2 |
| 0x03 | 3 |
| 0x04 | 4 |
| 0x05 | 5 |
| 0x06 | 6 |
| 0xFF | ungültiger Gang |

### TAB_GANG_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | N |
| 0x01 | 1 |
| 0x02 | 2 |
| 0x03 | 3 |
| 0x04 | 4 |
| 0x05 | 5 |
| 0x06 | 6 |

### TAB_KONTROLLEUCHTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | BLINKER_LI-GRÜN |
| 0x01 | BLINKER_RE-GRÜN |
| 0x02 | NEUTRALGANG-GRÜN |
| 0x03 | FERNLICHT-BLAU |
| 0x04 | ASC-GELB |
| 0x05 | WARN-GELB |
| 0x06 | WARN-ROT |
| 0x07 | MOTORWARN-GELB |
| 0x08 | ABS-ROT |
| 0x09 | TANKRES-GELB |
| 0x0A | SET-GELB |
| 0x0B | ZUSSCHW-GRÜN |
| 0x0C | TFL-GRÜN |
| 0x0D | DWA-ROT |
| 0x0E | MIL-GELB |
| 0x0F | alle Lampen |
| 0xFFFF | Wert ungültig |

### TAB_MMC_BED

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Bedienung |
| 0x01 | Betätigung nach links |
| 0x02 | Betätigung nach rechts |
| 0xFF | nicht definiert |

### TAB_TESTBILD

| WERT | TEXT |
| --- | --- |
| 0x00 | Modus 0 |
| 0x01 | Modus 1 |
| 0x02 | Modus 2 |
| 0x03 | Modus 3 |
| 0x04 | Modus 4 |
