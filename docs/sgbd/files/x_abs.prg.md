# x_abs.prg

## General

|  |  |
| --- | --- |
| File | x_abs.prg |
| Type | PRG |
| Jobs | 27 |
| Tables | 85 |
| Origin | BMW UX-EF-4 Andreas_Kirchberger |
| Revision | 10.000 |
| Author | IN-TECH-GMBH UX-EE-1 Tiefholz |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad ABS |  |  |
| ORIGIN | string | BMW UX-EF-4 Andreas_Kirchberger |  |  |
| REVISION | string | 10.000 |  |  |
| AUTHOR | string | IN-TECH-GMBH UX-EE-1 Tiefholz |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.79 |  |  |
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

### STATUS_ENERGIESPARMODE

Energy-Saving-Mode auslesen UDS  : $22   ReadDataByIdentifier UDS  : $100A DataIdentifier EnergySavingMode Modus: Default

_No arguments._

### STATUS_BETRIEBSMODE

Aktueller Betriebsmode SG muss sich im Energiersparmode befinden UDS  : $22   ReadDataByIdentifier UDS  : $100E Sub-Parameter Betriebsmode Modus: Default

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

### _EEPROM_DATEN_LESEN

Auslesen der EEPROM Daten UDS  : $23   ReadMemoryByAddress UDS  : $12 	 1 data byte, 2 byte address UDS	 : $0000 bis $0FFF 	in je 512 Byte Bloecken Modus: Default

_No arguments._

### CPS_SCHREIBEN

Codierpruefstempel schreiben UDS  : $2E   WriteDataByIdentifier UDS  : $37FE CPS

| Name | Type | Description |
| --- | --- | --- |
| CPS | string | 7 stelliger Codierpruefstempel |

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

### ARG_0X4003_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABS_REGELFUNKTION_DEAKTIVIERT | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Deaktiviert die ABS Regelfunktion: 0 = Funktion aktiv, 1 = Funktion deaktiviert |
| ABS_INTEGRALFUNKTION_DEAKTIVIERT | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Deaktiviert die ABS Integrallfunktion: 0 = Funktion aktiv, 1 = Funktion deaktiviert |

### ARG_0XB00D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PHASE | + | - | 0-n | high | unsigned char | - | TAB_MR_ARG_PHASE | - | - | - | - | - | Phasen Entlüftung. Wichtig: Es müssen alle Phasen in folgender Reihenfolge ausgeführt werden: 0x07, 0x05, 0x06, 0x08 |
| WIEDERHOLUNG | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl Wiederholungen |

### ARG_0XB00E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT_ROUTINE | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 60.0 | max. Ausführungsdauer |
| PHASE | + | - | 0-n | high | unsigned char | - | TAB_MR_PHASE_VAKUUMBEF | - | - | - | - | - | Phase |

### ARG_0XB070_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT_ROUTINE | + | - | ms | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 2500.0 | max. Ausführungsdauer |
| VENTIL_1 | + | - | 0-n | - | unsigned char | - | TAB_MR_ABS_VENTILE | 1.0 | 1.0 | 0.0 | - | - | Ventil Auswahl |
| WERT_1 | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Ventil Ansteuerung |
| VENTIL_2 | + | - | 0-n | - | unsigned char | - | TAB_MR_ABS_VENTILE | 1.0 | 1.0 | 0.0 | - | - | Ventil Auswahl |
| WERT_2 | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Ventil Ansteuerung |
| VENTIL_3 | + | - | 0-n | - | unsigned char | - | TAB_MR_ABS_VENTILE | 1.0 | 1.0 | 0.0 | - | - | Ventil Auswahl |
| WERT_3 | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Ventil Ansteuerung |
| VENTIL_4 | + | - | 0-n | - | unsigned char | - | TAB_MR_ABS_VENTILE | 1.0 | 1.0 | 0.0 | - | - | Ventil Auswahl |
| WERT_4 | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Ventil Ansteuerung |
| VENTIL_5 | + | - | 0-n | - | unsigned char | - | TAB_MR_ABS_VENTILE | 1.0 | 1.0 | 0.0 | - | - | Ventil Auswahl |
| WERT_5 | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Ventil Ansteuerung |
| VENTIL_6 | + | - | 0-n | - | unsigned char | - | TAB_MR_ABS_VENTILE | 1.0 | 1.0 | 0.0 | - | - | Ventil Auswahl |
| WERT_6 | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Ventil Ansteuerung |

### ARG_0XB071_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT_ROUTINE | + | - | s | - | unsigned char | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 25.0 | max. Ausführungsdauer |

### ARG_0XE0B5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_CODIERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 = Löscht die Variantencodierung |

### ARG_0XE0CF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BOTSCHAFTEN_VERSENDEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = Entwicklerbotschaften werden nicht versendet, 1 = Entwicklerbotschaften werden versendet |

### ARG_0XE0DA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PUMPE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 = ein; 0 = aus |

### ARG_0XE0DB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINLASSVENTIL_VORNE | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Einlassventil vorne  (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| EINLASSVENTIL_HINTEN | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Einlassventil hinten (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| AUSLASSVENTIL_VORNE | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Auslassventil vorne (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| AUSLASSVENTIL_HINTEN | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Auslassventil hinten (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| VORLADEVENTIL_HINTEN | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Vorladeventil hinten (LPF) (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| TRENNVENTIL_HINTEN | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Trennventil hinten (MCI) (0 % = nicht angesteuert; 100 % = voll angesteuert) |

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
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x022900 | Energiesparmode  aktiv | 0 |
| 0x022908 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x022909 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02290A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02290C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x480680 | ABS Regelfunktion deaktiviert | 0 |
| 0x480681 | ABS Integralfunktion deaktiviert | 0 |
| 0x480682 | HSC (MHG) Funktion abgeschaltet durch externe Signalfehler | 0 |
| 0x480683 | Drehzahlfuehler hinten Anfahrerkennung temporär | 0 |
| 0x480684 | Sensorbox: Unterspannung | 0 |
| 0x480685 | Sensorbox: Sensorfehler | 0 |
| 0x480686 | Sensorbox: Verbauposition fehlerhaft | 0 |
| 0x480688 | CAN1 Controller/Transceiver Hardware Fehler | 0 |
| 0x480695 | CAN_Entwicklernachrichten aktiv | 0 |
| 0x48069C | ABS Anlieferzustand | 0 |
| 0x4806B0 | ABS Taster defekt | 0 |
| 0x4806B1 | Sensor Versorgung Kurzschluss zu Masse | 0 |
| 0x4806B2 | Sensor Versorgung Kurzschluss zu B+ | 0 |
| 0x4806B4 | Sensor Versorgung ausserhalb gueltigem Bereich | 0 |
| 0x480703 | Ventil Fehler | 0 |
| 0x480704 | Steuergeraet Fehler intern | 0 |
| 0x480705 | Haupttreiber Verlust | 0 |
| 0x480706 | Hardwarefehler Steuergeraet | 0 |
| 0x480707 | MCU Fehler | 0 |
| 0x480708 | CAN RAM Pruefung | 0 |
| 0x480709 | Klemme 15 Hardware unplausibel | 1 |
| 0x48070A | EEPROM Fehler | 0 |
| 0x48070B | Trennventil MCI- Ventil Abgleichdaten fehlen | 0 |
| 0x48070D | Einlassventil Abgleichdaten fehlen | 0 |
| 0x48070E | Ventilansteuerung ungültig | 0 |
| 0x48070F | Freigabe Ebene | 0 |
| 0x48071A | Pumpenmotor EMF | 0 |
| 0x48071B | Pumpenmotor Verbindungsfehler | 0 |
| 0x48071C | Pumpenmotor Versorgungsfehler | 0 |
| 0x48071D | Pumpenmotor Kurzschluss | 0 |
| 0x480860 | Batterieunterspannung | 1 |
| 0x480861 | Batterieunterspannung moeglich | 1 |
| 0x480862 | Langzeitunterspannung Batterie | 1 |
| 0x480863 | Batterieueberspannung | 1 |
| 0x480901 | Drehzahlfuehler vorne Impulsrad periodische Ueberwachung | 0 |
| 0x480902 | Drehzahlfuehler vorne Check auf doppelte Impulsradfrequenz | 0 |
| 0x480903 | Drehzahlfuehler vorne Phasenlaengenueberwachung | 0 |
| 0x480904 | Drehzahlfuehler vorne elektrisch defekt | 0 |
| 0x480905 | Drehzahlfuehler vorne Extrapolation | 0 |
| 0x480906 | Drehzahlfuehler vorne Anfahrerkennung v_Vergleich | 0 |
| 0x480911 | Drehzahlfuehler hinten Impulsrad periodische Ueberwachung | 0 |
| 0x480912 | Drehzahlfuehler hinten Check auf doppelte Impulsradfrequenz | 0 |
| 0x480913 | Drehzahlfuehler hinten  Phasenlaengenueberwachung | 0 |
| 0x480914 | Drehzahlfuehler hinten elektrisch defekt | 0 |
| 0x480915 | Drehzahlfuehler hinten Extrapolation | 0 |
| 0x480916 | Drehzahlfuehler hinten Anfahrerkennung v_Vergleich | 0 |
| 0x4809F0 | Reifentoleranz überschritten | 0 |
| 0x480A00 | Drucksensor Steuerkreis vorne elektrisch defekt | 0 |
| 0x480A01 | Drucksensor Steuerkreis vorne P1 Offsetfehler | 0 |
| 0x480A05 | Drucksensor Steuerkreis vorne P1 Plausibilität | 0 |
| 0x480A06 | Drucksensor Steuerkreis vorne P1 P2 Signalfehler | 0 |
| 0x480A08 | Drucksensor Steuerkreis vorne p2T elektrisch defekt | 0 |
| 0x480A09 | Drucksensor Steuerkreis vorne P2 Offsetfehler | 0 |
| 0x480A0B | Drucksensor Steuerkreis vorne p2T Zeitintervall | 0 |
| 0x480A0C | Drucksensor Steuerkreis vorne Temperatur Signalfehler | 0 |
| 0x480A0E | Drucksensor Steuerkreis vorne Funktionsfehler | 0 |
| 0x480A10 | Drucksensor Steuerkreis hinten elektrisch defekt | 0 |
| 0x480A11 | Drucksensor Steuerkreis hinten P1 Offsetfehler | 0 |
| 0x480A15 | Drucksensor Steuerkreis hinten P1 Plausibilität | 0 |
| 0x480A16 | Drucksensor Steuerkreis hinten P1 P2 Signalfehler | 0 |
| 0x480A18 | Drucksensor Steuerkreis hinten p2T elektrisch defekt | 0 |
| 0x480A19 | Drucksensor Steuerkreis hinten P2 Offsetfehler | 0 |
| 0x480A1B | Drucksensor Steuerkreis hinten p2T Zeitintervall | 0 |
| 0x480A1C | Drucksensor Steuerkreis hinten Temperatur Signalfehler | 0 |
| 0x480A1E | Drucksensor Steuerkreis hinten Funktionsfehler | 0 |
| 0x480A20 | Drucksensor Radkreis vorne elektrisch defekt | 0 |
| 0x480A21 | Drucksensor Radkreis vorne P1 Offsetfehler | 0 |
| 0x480A25 | Drucksensor Radkreis vorne P1 Plausibilität | 0 |
| 0x480A26 | Drucksensor Radkreis vorne P1 P2 Signalfehler | 0 |
| 0x480A28 | Drucksensor Radkreis vorne p2T elektrisch defekt | 0 |
| 0x480A29 | Drucksensor Radkreis vorne P2 Offsetfehler | 0 |
| 0x480A2B | Drucksensor Radkreis vorne p2T Zeitintervall | 0 |
| 0x480A2C | Drucksensor Radkreis vorne Temperatur Signalfehler | 0 |
| 0x480A2E | Drucksensor Radkreis vorne Funktionsfehler | 0 |
| 0x480A30 | Drucksensor Radkreis hinten elektrisch defekt | 0 |
| 0x480A31 | Drucksensor Radkreis hinten P1 Offsetfehler | 0 |
| 0x480A35 | Drucksensor Radkreis hinten P1 Plausibilität | 0 |
| 0x480A36 | Drucksensor Radkreis hinten P1 P2 Signalfehler | 0 |
| 0x480A38 | Drucksensor Radkreis hinten p2T elektrisch defekt | 0 |
| 0x480A39 | Drucksensor Radkreis P2 Offsetfehler | 0 |
| 0x480A3B | Drucksensor Radkreis hinten p2T Zeitintervall | 0 |
| 0x480A3C | Drucksensor Radkreis hinten Temperatur Signalfehler | 0 |
| 0x480A3E | Drucksensor Radkreis hinten Funktionsfehler | 0 |
| 0x480A5B | Pumpe Lebensdauerzähler | 0 |
| 0x480AF0 | Druckkontrolle Dk | 0 |
| 0x480AF1 | Druckkontrolle Sk | 0 |
| 0x480AF2 | Anforderung Druckkontrolle Dk unplausibel | 0 |
| 0x480AF3 | Anforderung Druckkontrolle Sk unplausibel | 0 |
| 0x480B2F | falsche Variante | 0 |
| 0xD3445F | CAN Bus Off | 1 |
| 0xD34460 | CAN Transmit Timeout | 1 |
| 0xD3541C | CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD35420 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0xD35424 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD35426 | CAN KOMBI Nachricht Kombidaten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD35428 | CAN DME Nachricht Motordaten_1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD3542A | CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD3542C | CAN SEB Nachricht Sensorbox_ID1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD3542E | CAN SEB Nachricht Sensorbox_ID4_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD35444 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: Alive Fehler | 1 |
| 0xD35446 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: CRC Fehler | 1 |
| 0xD3544A | CAN DME Nachricht Status_DTC_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xD35450 | CAN DME Nachricht Modus_Fahrzeug_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xD35452 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: CRC Fehler | 1 |
| 0xD35453 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Alive Fehler | 1 |
| 0xD35456 | CAN DME Nachricht Modus_Fahrzeug_Motorrad_2010  CRC Fehler | 1 |
| 0xD35457 | CAN DME Nachricht Modus_Fahrzeug_Motorrad_2010  Alive Fehler | 1 |
| 0xD35458 | CAN DME Nachricht Motordaten_2_Motorrad_2010: CRC Fehler | 1 |
| 0xD35459 | CAN DME Nachricht Motordaten_2_Motorrad_2010: Alive Fehler | 1 |
| 0xD3545A | CAN DME Nachricht Status_DTC_Motorrad_2010  CRC Fehler | 1 |
| 0xD3545B | CAN DME Nachricht Status_DTC_Motorrad_2010  Alive Fehler | 1 |
| 0xD35468 | CAN SEB Nachricht Sensorbox_ID7_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD35469 | CAN SEB Nachricht Sensorbox_ID7_Motorrad_2010: Alive Fehler | 1 |
| 0xD3546A | CAN SEB Nachricht Sensorbox_ID7_Motorrad_2010: CRC Fehler | 1 |
| 0xD35476 | CAN SEB Nachricht Sensorbox_ID1_Motorrad_2010: Alive Fehler | 1 |
| 0xD35477 | CAN SEB Nachricht Sensorbox_ID1_Motorrad_2010: CRC Fehler | 1 |
| 0xD35478 | CAN SEB Nachricht Sensorbox_ID4_Motorrad_2010: Alive Fehler | 1 |
| 0xD35479 | CAN SEB Nachricht Sensorbox_ID4_Motorrad_2010: CRC Fehler | 1 |
| 0xD35493 | CAN DME Nachricht Steuerung_Rückwärts_Fahren_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD35494 | CAN DME Nachricht Steuerung_Rückwärts_Fahren_Motorrad_2010: CRC Fehler | 1 |
| 0xD35495 | CAN DME Nachricht Steuerung_Rückwärts_Fahren_Motorrad_2010: Alive Fehler | 1 |
| 0xD354A3 | CAN DME Nachricht Modus_Erweitert_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD354A4 | CAN DME Nachricht Modus_Erweitert_Motorrad_2010: CRC Fehler | 1 |
| 0xD354A5 | CAN DME Nachricht Modus_Erweitert_Motorrad_2010: Alive Fehler | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | STAT_CODIERSTECKER_VORHANDEN | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | STAT_CODIERSTECKER_SIGNAL_UNGUELTIG | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | STAT_ABS_DEAKTIVIERT_FAHRER | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | STAT_RAIN_MODUS | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | STAT_ROAD_MODUS | 0/1 | High | 0x10 | - | - | - | - |
| 0x0006 | STAT_DYNAMIC_MODUS | 0/1 | High | 0x20 | - | - | - | - |
| 0x0007 | STAT_ENDURO_MODUS | 0/1 | High | 0x40 | - | - | - | - |
| 0x0008 | STAT_ENDURO_PRO_MODUS | 0/1 | High | 0x80 | - | - | - | - |
| 0x0009 | STAT_ABS_REGELUNG_VORNE | 0-n | High | 0x0100 | TAB_MR_AKTIV | - | - | - |
| 0x000A | STAT_ABS_REGELUNG_HINTEN | 0-n | High | 0x0200 | TAB_MR_AKTIV | - | - | - |
| 0x000B | STAT_INTEGRALBREMSE_HINTEN | 0-n | High | 0x0400 | TAB_MR_AKTIV | - | - | - |
| 0x000C | STAT_RLP_REGELUNG_VORNE | 0-n | High | 0x1000 | TAB_MR_AKTIV | - | - | - |
| 0x000D | STAT_MHG_REGELUNG_HINTEN | 0-n | High | 0x2000 | TAB_MR_AKTIV | - | - | - |
| 0x000E | STAT_FIRST_RUN | 0-n | High | 0x0001 | TAB_MR_AKTIV | - | - | - |
| 0x000F | STAT_WARNLAMPE | 0-n | High | 0x0002 | TAB_MR_AKTIV | - | - | - |
| 0x0010 | STAT_ABS_NORMALBETRIEB | 0-n | High | 0x0010 | TAB_MR_AKTIV | - | - | - |
| 0x0011 | STAT_ABS_RUECKFALLEBENE | 0-n | High | 0x0020 | TAB_MR_AKTIV | - | - | - |
| 0x0012 | STAT_RLP_NORMALBETRIEB | 0-n | High | 0x0040 | TAB_MR_AKTIV | - | - | - |
| 0x0013 | STAT_IB_NORMALBETRIEB | 0-n | High | 0x0080 | TAB_MR_AKTIV | - | - | - |
| 0x4001 | STATUS_SG | 0-n | High | 0xFF | TAB_MR_ECU_STATUS | 1.0 | 1.0 | 0.0 |
| 0x4002 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0xE0D9 | INTERNER_FEHLER_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xE0DF | REF_GESCHWINDIGKEIT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xE0E0 | BREMSENSTATUS | 0-n | High | 0xFF | TAB_MR_BREMSENSTATUS | 1.0 | 1.0 | 0.0 |
| 0xE0E1 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0xE0E2 | BATTERIESPANNUNG | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X2330_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CUSTOMER_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kunden ID |
| STAT_VEHICLE_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeug ID |
| STAT_SIZE_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Größe ID |
| STAT_FASTA_VERSION_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Versions ID |
| STAT_ODOMETER_FASTA_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | gefahrene Wegtrecke in km, in der die FASTA Daten lückenlos aufgezeichnet wurden |
| STAT_FASTA_TIME_DRIVING_AND_NO_FAILURE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Sekunden, in der gefahren wurde (v größer 1,5 km/h) und in der kein Fehler vorlag, d.h. die Zeit in der FASTA Daten erfasst wurden. |
| STAT_FASTA_TIME_IGNITION_ON_AND_NO_FAILURE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Sekunden, in der die ECU bestromt und die Software aktiv ist und in der kein Fehler vorlag, d.h. die Zeit in der FASTA Daten erfasst wurden. |

### RES_0X2331_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_1_V_5__ZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Gesamtzeit in der Geschwindigkeitsklasse 1,5-5 km/h |
| STAT_5_V_30__ZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Gesamtzeit in der Geschwindigkeitsklasse 5-30 km/h |
| STAT_30_V_60__ZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Gesamtzeit in der Geschwindigkeitsklasse 30-60 km/h |
| STAT_60_V_130__ZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Gesamtzeit in der Geschwindigkeitsklasse 60-130 km/h |
| STAT_130_V__ZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Gesamtzeit in der Geschwindigkeitsklasse größer 130 km/h |
| STAT_1_V_5__HAEUFIGKEIT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit in der Geschwindigkeitsklasse 1,5-5 km/h |
| STAT_5_V_30__HAEUFIGKEIT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit in der Geschwindigkeitsklasse 5-30 km/h |
| STAT_30_V_60__HAEUFIGKEIT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit in der Geschwindigkeitsklasse 30-60 km/h |
| STAT_60_V_130__HAEUFIGKEIT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit in der Geschwindigkeitsklasse 60-130 km/h |
| STAT_130_V__HAEUFIGKEIT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit in der Geschwindigkeitsklasse größer 130 km/h |
| STAT_DUMMY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dummy Ergebnis, wird benötigt wegen Probleme bei der Ausrichtung der Datenstruktur im Steuergerät |

### RES_0X2332_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_0_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler in der Zeitklasse 0-5 s |
| STAT_5_T_30_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler in der Zeitklasse 5-30 s |
| STAT_30_T_60_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler in der Zeitklasse 30-60 s |
| STAT_60_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler in der Zeitklasse größer 60 s |

### RES_0X2333_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VA_0_V_60__5_P_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 0-60 km/h, mittl. Bremsdruckklasse: 5-20%, Vorderachse |
| STAT_VA_0_V_60__20_P_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 0-60 km/h, mittl. Bremsdruckklasse: 20-40%, Vorderachse |
| STAT_VA_0_V_60__40_P_70_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 0-60 km/h, mittl. Bremsdruckklasse: 40-70%, Vorderachse |
| STAT_VA_0_V_60__70_P_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 0-60 km/h, mittl. Bremsdruckklasse: größer 70%, Vorderachse |
| STAT_VA_60_V_100__5_P_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 60-100 km/h, mittl. Bremsdruckklasse: 5-20%, Vorderachse |
| STAT_VA_60_V_100__20_P_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 60-100 km/h, mittl. Bremsdruckklasse: 20-40%, Vorderachse |
| STAT_VA_60_V_100__40_P_70_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 60-100 km/h, mittl. Bremsdruckklasse: 40-70%, Vorderachse |
| STAT_VA_60_V_100__70_P_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 60-100 km/h, mittl. Bremsdruckklasse: größer 70%, Vorderachse |
| STAT_VA_100_V__5_P_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: größer 100 km/h, mittl. Bremsdruckklasse: 5-20%, Vorderachse |
| STAT_VA_100_V__20_P_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: größer 100 km/h, mittl. Bremsdruckklasse: 20-40%, Vorderachse |
| STAT_VA_100_V__40_P_70_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: größer 100 km/h, mittl. Bremsdruckklasse: 40-70%, Vorderachse |
| STAT_VA_100_V__70_P_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: größer 100 km/h, mittl. Bremsdruckklasse: größer 70%, Vorderachse |
| STAT_VA_MAXZEIT_BREMSUNG_WERT | s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Schleppzeiger für Maximalzeit Bremsvorgang, Vorderachse |

### RES_0X2334_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HA_0_V_60__5_P_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 0-60 km/h, mittl. Bremsdruckklasse: 5-20%, Hinterachse |
| STAT_HA_0_V_60__20_P_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 0-60 km/h, mittl. Bremsdruckklasse: 20-40%, Hinterachse |
| STAT_HA_0_V_60__40_P_70_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 0-60 km/h, mittl. Bremsdruckklasse: 40-70%, Hinterachse |
| STAT_HA_0_V_60__70_P_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 0-60 km/h, mittl. Bremsdruckklasse: größer 70%, Hinterachse |
| STAT_HA_60_V_100__5_P_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 60-100 km/h, mittl. Bremsdruckklasse: 5-20%, Hinterachse |
| STAT_HA_60_V_100__20_P_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 60-100 km/h, mittl. Bremsdruckklasse: 20-40%, Hinterachse |
| STAT_HA_60_V_100__40_P_70_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 60-100 km/h, mittl. Bremsdruckklasse: 40-70%, Hinterachse |
| STAT_HA_60_V_100__70_P_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: 60-100 km/h, mittl. Bremsdruckklasse: größer 70%, Hinterachse |
| STAT_HA_100_V__5_P_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: größer 100 km/h, mittl. Bremsdruckklasse: 5-20%, Hinterachse |
| STAT_HA_100_V__20_P_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: größer 100 km/h, mittl. Bremsdruckklasse: 20-40%, Hinterachse |
| STAT_HA_100_V__40_P_70_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: größer 100 km/h, mittl. Bremsdruckklasse: 40-70%, Hinterachse |
| STAT_HA_100_V__70_P_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Geschwindigkeitsklasse Bremsbeginn: größer 100 km/h, mittl. Bremsdruckklasse: größer 70%, Hinterachse |
| STAT_HA_MAXZEIT_BREMSUNG_WERT | s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Schleppzeiger für Maximalzeit Bremsvorgang, Hinterachse |

### RES_0X2335_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BREMS_VA_HZ_P_20__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20%, Zeit kleiner 1 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_20_P_40__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, Zeit kleiner 1 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_40_P_60__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, Zeit kleiner 1 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_60_P_100__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, Zeit kleiner 1 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_100_P__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , Zeit kleiner 1 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_P_20__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20%, 1 kleiner Zeit kleiner 2 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_20_P_40__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 1 kleiner Zeit kleiner 2 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_40_P_60__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 1 kleiner Zeit kleiner 2 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_60_P_100__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, 1 kleiner Zeit kleiner 2 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_100_P__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 1 kleiner Zeit kleiner 2 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_P_20__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20 %, 2 kleiner Zeit kleiner 5 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_20_P_40__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 2 kleiner Zeit kleiner 5 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_40_P_60__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 2 kleiner Zeit kleiner 5 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_60_P_100__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, 2 kleiner Zeit kleiner 5 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_100_P__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 2 kleiner Zeit kleiner 5 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_P_20__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20 %, 5 kleiner Zeit kleiner 15 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_20_P_40__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 5 kleiner Zeit kleiner 15 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_40_P_60__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 5 kleiner Zeit kleiner 15 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_60_P_100__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, 5 kleiner Zeit kleiner 15 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_100_P__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 5 kleiner Zeit kleiner 15 s,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_P_20__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20 %, 15 s kleiner Zeit,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_20_P_40__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 15 s kleiner Zeit,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_40_P_60__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 15 s kleiner Zeit,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_60_P_100__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, 15 s kleiner Zeit,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |
| STAT_BREMS_VA_HZ_100_P__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 15 s kleiner Zeit,  Bremsung ohne ABS an Vorderachse (Hauptbremszylinder) |

### RES_0X2336_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BREMS_HA_HZ_P_20__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck  kleiner 20%, Zeit kleiner 1 s Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_20_P_40__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck  kleiner 40 %, Zeit kleiner 1 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_40_P_60__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, Zeit kleiner 1 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_60_P_100__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, Zeit kleiner 1 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_100_P__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck, Zeit kleiner 1 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_P_20__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20%, 1 keiner Zeit kleiner 2 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_20_P_40__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 1 kleiner Zeit kleiner 2 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_40_P_60__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 1 kleiner Zeit kleiner 2 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_60_P_100__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, 1 kleiner Zeit keiner 2 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_100_P__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 1 kleiner Zeit kleiner 2 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_P_20__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20 %, 2 kleiner Zeit kleiner 5 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_20_P_40__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 2 kleiner Zeit kleiner 5 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_40_P_60__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 2 kleiner Zeit kleiner 5 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_60_P_100__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, 2 kleiner Zeit kleiner 5 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_100_P__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 2 kleiner Zeit kleiner 5 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_P_20__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20 %, 5 kleiner Zeit kleiner 15 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_20_P_40__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 5 kleiner Zeit kleiner 15 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_40_P_60__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 5 kleiner Zeit kleiner 15 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_60_P_100__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, 5 kleiner Zeit kleiner 15 s,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_100_P__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 5 kleiner Zeit kleiner 15 s, Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_P_20__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20 %, 15 s kleiner Zeit,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_20_P_40__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 15 s kleiner Zeit,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_40_P_60__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 15 s kleiner Zeit,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_60_P_100__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %,15 s kleiner Zeit,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |
| STAT_BREMS_HA_HZ_100_P__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 15 s kleiner Zeit,  Bremsung ohne ABS an Hinterachse (Hauptbremszylinder) |

### RES_0X2337_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_V0_VA_HZ_P_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Druckklasse Druck kleiner 20 % |
| STAT_V0_VA_HZ_20_P_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Druckklasse 20 kleiner Druck kleiner 40 % |
| STAT_V0_VA_HZ_40_P_60_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Druckklasse 40 kleiner Druck kleiner 60 % |
| STAT_V0_VA_HZ_60_P_100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Druckklasse 60 kleiner Druck kleiner 100 % |
| STAT_V0_VA_HZ_100_P_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Druckklasse 100 % kleiner Druck |

### RES_0X2338_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_V0_HA_HZ_P_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Druckklasse Druck kleiner 20 % |
| STAT_V0_HA_HZ_20_P_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Druckklasse 20 kleiner Druck kleiner 40 % |
| STAT_V0_HA_HZ_40_P_60_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Druckklasse 40 kleiner Druck kleiner 60 % |
| STAT_V0_HA_HZ_60_P_100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Druckklasse 60 kleiner Druck kleiner 100 % |
| STAT_V0_HA_HZ_100_P_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für Druckklasse 100 % kleiner Druck |

### RES_0X2339_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABS_VA_RZ_P_20__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20%, Zeit kleiner 1 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_20_P_40__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, Zeit kleiner 1 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_40_P_60__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, Zeit kleiner 1 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_60_P_100__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, Zeit kleiner 1 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_100_P__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , Zeit kleiner 1 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_P_20__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20%, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_20_P_40__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_40_P_60__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_60_P_100__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_100_P__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_P_20__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_20_P_40__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_40_P_60__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_60_P_100__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_100_P__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_P_20__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_20_P_40__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_40_P_60__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_60_P_100__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_100_P__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_P_20__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20 %, 15 s kleiner Zeit,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_20_P_40__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 15 s kleiner Zeit,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_40_P_60__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 15 s kleiner Zeit,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_60_P_100__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, 15 s kleiner Zeit,  ABS Bremsung an Vorderachse (Radzylinder) |
| STAT_ABS_VA_RZ_100_P__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 15 s kleiner Zeit,  ABS Bremsung an Vorderachse (Radzylinder) |

### RES_0X233A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABS_HA_RZ_P_20__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20%, Zeit kleiner 1 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_20_P_40__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, Zeit kleiner 1 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_40_P_60__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, Zeit kleiner 1 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_60_P_100__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, Zeit kleiner 1 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_100_P__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , Zeit kleiner 1 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_P_20__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20%, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_20_P_40__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_40_P_60__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_60_P_100__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_100_P__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_P_20__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_20_P_40__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_40_P_60__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_60_P_100__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_100_P__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_P_20__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_20_P_40__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_40_P_60__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_60_P_100__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_100_P__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_P_20__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 20 %, 15 s kleiner Zeit,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_20_P_40__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 20 kleiner Druck kleiner 40 %, 15 s kleiner Zeit,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_40_P_60__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 40 kleiner Druck kleiner 60 %, 15 s kleiner Zeit,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_60_P_100__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 60 kleiner Druck kleiner 100 %,15 s kleiner Zeit,  ABS Bremsung an Hinterachse (Radzylinder) |
| STAT_ABS_HA_RZ_100_P__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 15 s kleiner Zeit,  ABS Bremsung an Hinterachse (Radzylinder) |

### RES_0X233B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABS_VA_HZ_P_10__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 10%, Zeit kleiner 1 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_10_P_25__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 10 kleiner Druck kleiner 25 %, Zeit kleiner 1 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_25_P_50__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 25 kleiner Druck kleiner 50 %, Zeit kleiner 1 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_50_P_100__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 50 kleiner Druck kleiner 100 %, Zeit kleiner 1 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_100_P__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , Zeit kleiner 1 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_P_10__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 10%, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_10_P_25__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 10 kleiner Druck kleiner 25 %, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_25_P_50__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 25 kleiner Druck kleiner 50 %, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_50_P_100__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 50 kleiner Druck kleiner 100 %, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_100_P__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_P_10__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 10 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_10_P_25__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 10 kleiner Druck kleiner 25 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_25_P_50__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 25 kleiner Druck kleiner 50 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_50_P_100__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 50 kleiner Druck kleiner 100 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_100_P__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_P_10__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 10 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_10_P_25__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 10 kleiner Druck kleiner 25 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_25_P_50__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 25 kleiner Druck kleiner 50 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_50_P_100__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 50 kleiner Druck kleiner 100 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_100_P__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_P_10__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 10 %, 15 s kleiner Zeit,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_10_P_25__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 10 kleiner Druck kleiner 25 %, 15 s kleiner Zeit,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_25_P_50__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 25 kleiner Druck kleiner 50 %, 15 s kleiner Zeit,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_50_P_100__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 50 kleiner Druck kleiner 100 %, 15 s kleiner Zeit,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |
| STAT_ABS_VA_HZ_100_P__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 15 s kleiner Zeit,  ABS Bremsung an Vorderachse (Hauptbremszylinder) |

### RES_0X233C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABS_HA_HZ_P_10__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 10%, Zeit kleiner 1 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_10_P_25__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse10 kleiner Druck kleiner 25 %, Zeit kleiner 1 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_25_P_50__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 25 kleiner Druck kleiner 50 %, Zeit kleiner 1 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_50_P_100__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 50 kleiner Druck kleiner 100 %, Zeit kleiner 1 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_100_P__T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , Zeit kleiner 1 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_P_10__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 10%, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_10_P_25__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 10 kleiner Druck kleiner 25 %, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_25_P_50__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 25 kleiner Druck kleiner 50 %, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_50_P_100__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 50 kleiner Druck kleiner 100 %, 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_100_P__1_T_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 1 kleiner Zeit kleiner 2 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_P_10__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 10 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_10_P_25__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 10 kleiner Druck kleiner 25 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_25_P_50__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 25 kleiner Druck kleiner 50 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_50_P_100__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 50 kleiner Druck kleiner 100 %, 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_100_P__2_T_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 2 kleiner Zeit kleiner 5 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_P_10__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 10 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_10_P_25__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 10 kleiner Druck kleiner 25 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_25_P_50__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 25 kleiner Druck kleiner 50 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_50_P_100__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 50 kleiner Druck kleiner 100 %, 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_100_P__5_T_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 5 kleiner Zeit kleiner 15 s,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_P_10__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse Druck kleiner 10 %, 15 s kleiner Zeit,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_10_P_25__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 10 kleiner Druck kleiner 25 %, 15 s kleiner Zeit,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_25_P_50__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 25 kleiner Druck kleiner 50 %, 15 s kleiner Zeit,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_50_P_100__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 50 kleiner Druck kleiner 100 %,15 s kleiner Zeit,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |
| STAT_ABS_HA_HZ_100_P__15_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Bremsdruckklasse 100 % kleiner Druck , 15 s kleiner Zeit,  ABS Bremsung an Hinterachse (Hauptbremszylinder) |

### RES_0X233D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABS_REGELUNG_VA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler ABS Regelung vorne |
| STAT_ABS_REGELUNG_HA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler ABS Regelung hinten |
| STAT_DRUCKGRADIENT_BEGRENZUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Begrenzung Druckgradient (Druckanstieg) VDL/BNB |
| STAT_RADABHEBE_ERKENNUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Radabhebung (RLP/SPC) |
| STAT_HSC_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler manuelle Aktivierung HillStartControl (HSC, MHG) |
| STAT_HSC_DEAKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler manuelle Deaktivierung HillStartControl (HSC, MHG) |
| STAT_HSC_ABBRUCH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Abbruch HillStartControl (ungewollte Deaktivierung: abgewürgt, Seitenständer ausgeklappt etc.) |
| STAT_HSC_NACHDIMENSIONIERUNGEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Nachdimenionierungen HillStartControl |
| STAT_ABS_OFF_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Betätigungen ABS OFF Taster |
| STAT_KLEMMENWECHSEL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Klemmenwechsel (KL15 ein, IGN) |
| STAT_MOTORSTART_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Motorstart (Cranking) |
| STAT_MUE_SPRUNG_NORMAL_VA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Mue-Sprung vorne im Normalmodus (Rain, Road) |
| STAT_MUE_SPRUNG_NORMAL_HA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Mue-Sprung hinten im Normalmodus (Rain, Road) |
| STAT_MUE_SPRUNG_ENDURO_VA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Mue-Sprung vorne im Enduro-/Sportmodus (Enduro Dynamic, Enduro Pro) |
| STAT_MUE_SPRUNG_ENDURO_HA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Mue-Sprung hinten im Enduro-/Sportmodus (Enduro Dynamic, Enduro Pro) |
| STAT_TEMP_IB_BEGRENZUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Temperaturbegrenzung IB-Applikation |
| STAT_UNTERSPANNUNG_11_V_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler 11-V-Unterspannungsereignisse mit einer Dauer größer/gleich 100 ms |
| STAT_UNTERSPANNUNG_9_V_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler 9,6-V-Unterspannungsereignisse mit einer Dauer größer/gleich 100 ms |
| STAT_UNTERSPANNUNG_8_V_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler 8,1-V-Unterspannungsereignisse mit einer Dauer größer/gleich 100 ms |
| STAT_UNTERSPANNUNG_HW_RESET_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler der durch Unterspannung verursachten Hardware-Resets |
| STAT_UNTERSPANNUNG_MS_HW_RESET_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler der durch Unterspannung beim Motorstart verursachten Hardware-Resets |
| STAT_ABS_OFF_TIME_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Der Zähler gibt die Fahrdauer bei (über ABS Taster) ausgeschaltetem ABS  bei Fahrt größer 1,5km/h in Minuten an. |
| STAT_ABS_FRONT_WHEEL_BANKING_ANGLE_G_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Der Zähler zählt ABS Situationen, bei denen die Vorderradbremse (größer 1,5bar) bzw. die Vorder- und Hinterradbremse (größer 1,5bar) gemeinsam betätigt werden und die Schrägelage größer 20° (für min. 50ms) beträgt. |
| STAT_ABS_REAR_WHEEL_BANKING_ANGLE_G_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Der Zähler zählt ABS Situationen, bei denen die Hinterradbremse (größer 1,5bar) betätigt wird und die Schrägelage größer 20° (für min. 50ms) beträgt. |

### RES_0X233E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINGANGSVENTIL1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Betätigung Eingangsventil 1 |
| STAT_EINGANGSVENTIL2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Betätigung Eingangsventil 2 |
| STAT_EINGANGSVENTIL3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Betätigung Eingangsventil 3 |
| STAT_EINGANGSVENTIL4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Betätigung Eingangsventil 4 |
| STAT_AUSGANGSVENTIL1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Betätigung Ausgangsventil 1 |
| STAT_AUSGANGSVENTIL2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Betätigung Ausgangsventil 2 |
| STAT_AUSGANGSVENTIL3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Betätigung Ausgangsventil 3 |
| STAT_AUSGANGSVENTIL4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Betätigung Ausgangsventil 4 |
| STAT_TRENNVENTIL1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Betätigung Trennventil 1 |
| STAT_TRENNVENTIL2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Betätigung Trennventil 2 |
| STAT_UMSCHALTVENTIL1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Betätigung Umschaltventil 1 |
| STAT_UMSCHALTVENTIL2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Betätigung Umschaltventil 2 |

### RES_0X233F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PUMPENMOTOR_STARTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Pumpenmotorstarts |
| STAT_PUMPENMOTOR_UMDREHUNGEN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Umdrehungen Pumpenmotor |
| STAT_PUMPENMOTOR_SAUGLAST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Ereignisse, bei denen der Pumpenmotor gegen Druck ansaugen musste |
| STAT_PUMPENMOTOR_DRUCKLAST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler Ereignisse, bei denen der Pumpenmotor gegen Druck arbeiten musste |

### RES_0X2340_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HSC_T_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für den Betrieb in der Zeitklasse t kleiner 1 min |
| STAT_HSC_1_T_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für den Betrieb in der Zeitklasse 1 kleiner t kleiner 3 min |
| STAT_HSC_3_T_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für den Betrieb in der Zeitklasse 3 kleiner t kleiner 10 min |
| STAT_HSC_10_T_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für den Betrieb in der Zeitklasse 10 kleiner t kleiner 20 min |
| STAT_HSC_20_T_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler für den Betrieb in der Zeitklasse 20 kleiner t min |

### RES_0X2341_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_500_RPM_2000__14_V_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Betriebsdauer bei (500 rpm kleiner/gleich Drehzahl kleiner 2000 rpm) und (14 V kleiner/gleich UBatt) |
| STAT_2000_RPM__14_V_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Betriebsdauer bei (2000 rpm kleiner/gleich Drehzahl) und (14 V kleiner/gleich UBatt) |
| STAT_500_RPM_2000__13_V_14_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Betriebsdauer bei (500 rpm kleiner/gleich Drehzahl kleiner 2000 rpm) und (13 V kleiner/gleich UBatt kleiner 14 V) |
| STAT_2000_RPM__13_V_14_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Betriebsdauer bei (2000 rpm kleiner/gleich Drehzahl) und (13 V kleiner/gleich UBatt kleiner 14 V) |
| STAT_500_RPM_2000__12_V_13_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Betriebsdauer bei (500 rpm kleiner/gleich Drehzahl kleiner 2000 rpm) und (12 V kleiner/gleich UBatt kleiner 13 V) |
| STAT_2000_RPM__12_V_13_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Betriebsdauer bei (2000 rpm kleiner/gleich Drehzahl) und (12 V kleiner/gleich UBatt kleiner 13 V) |
| STAT_500_RPM_2000__V_12_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Betriebsdauer bei (500 rpm kleiner/gleich Drehzahl kleiner 2000 rpm) und (UBatt kleiner 12 V) |
| STAT_2000_RPM__V_12_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Betriebsdauer bei (2000 rpm kleiner/gleich Drehzahl) und (UBatt kleiner 12 V) |

### RES_0X2342_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VA__TEMP_200_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer Bremse vorne in der Temperaturklasse T kleiner 200 °C |
| STAT_VA__200_TEMP_400_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer Bremse vorne in der Temperaturklasse 200 kleiner T kleiner 400 °C |
| STAT_VA__400_TEMP_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer Bremse vorne in der Temperaturklasse 400 °C kleiner T |
| STAT_HA__TEMP_200_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer Bremse hinten in der Temperaturklasse T kleiner 200 °C |
| STAT_HA__200_TEMP_400_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer Bremse hinten in der Temperaturklasse 200 kleiner T kleiner 400 °C |
| STAT_HA__400_TEMP_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer Bremse hinten in der Temperaturklasse 400 °C kleiner T |

### RES_0X2343_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT__TEMP_0_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer in Steuergeräte Temperaturklasse T kleiner 0 °C |
| STAT_ZEIT__0_TEMP_40_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer in Steuergeräte Temperaturklasse 0 kleiner T kleiner 40 °C |
| STAT_ZEIT__40_TEMP_80_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer in Steuergeräte Temperaturklasse 40 kleiner T kleiner 80 °C |
| STAT_ZEIT__80_TEMP_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer in Steuergeräte Temperaturklasse 80 °C kleiner T |
| STAT_EVENTS_VA__TEMP_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler ABS Ereignisse vorne in Steuergeräte Temperaturklasse T kleiner 0 °C |
| STAT_EVENTS_VA__0_TEMP_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler ABS Ereignisse vorne in Steuergeräte Temperaturklasse 0 kleiner T kleiner 40 °C |
| STAT_EVENTS_VA__40_TEMP_80_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler ABS Ereignisse vorne in Steuergeräte Temperaturklasse 40 kleiner T kleiner 80 °C |
| STAT_EVENTS_VA__80_TEMP_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler ABS Ereignisse vorne in Steuergeräte Temperaturklasse 80 °C kleiner T |
| STAT_EVENTS_HA__TEMP_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler ABS Ereignisse hinten in Steuergeräte Temperaturklasse T kleiner 0 °C |
| STAT_EVENTS_HA__0_TEMP_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler ABS Ereignisse hinten in Steuergeräte Temperaturklasse 0 kleiner T kleiner 40 °C |
| STAT_EVENTS_HA__40_TEMP_80_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler ABS Ereignisse hinten in Steuergeräte Temperaturklasse 40 kleiner T kleiner 80 °C |
| STAT_EVENTS_HA__80_TEMP_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler ABS Ereignisse hinten in Steuergeräte Temperaturklasse 80 °C kleiner T |

### RES_0X2344_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODUS1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer in Modus 1 |
| STAT_MODUS2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer in Modus 2 |
| STAT_MODUS3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer in Modus 3 |
| STAT_MODUS4_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer in Modus 4 |
| STAT_MODUS5_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer in Modus 5 |
| STAT_MODUS6_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer in Modus 6 |

### RES_0X2345_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHRAEGL_10_A_30___B_05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtzeit in Schräglagenklasse 10° kleiner a kleiner/gleich 30°, Verzögerungsklasse b kleiner/gleich -0,5g |
| STAT_SCHRAEGL_30_A_40___B_05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtzeit in Schräglagenklasse 30° kleiner a kleiner/gleich 40°, Verzögerungsklasse b kleiner/gleich -0,5g |
| STAT_SCHRAEGL_40_A___B_05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtzeit in Schräglagenklasse 40° kleiner a, Verzögerungsklasse b kleiner/gleich -0,5g |
| STAT_SCHRAEGL_10_A_30___05_B_03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtzeit in Schräglagenklasse 10° kleiner a kleiner/gleich 30°, Verzögerungsklasse -0,5 kleiner b kleiner/gleich -0,3g |
| STAT_SCHRAEGL_30_A_40___05_B_03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtzeit in Schräglagenklasse 30° kleiner a keiner/gleich 40°, Verzögerungsklasse -0,5 kleiner b kleiner/gleich -0,3g |
| STAT_SCHRAEGL_40_A___05_B_03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtzeit in Schräglagenklasse 40° kleiner a, Verzögerungsklasse -0,5 kleiner b kleiner/gleich -0,3g |
| STAT_SCHRAEGL_10_A_30___03_B_01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtzeit in Schräglagenklasse 10° kleiner a kleiner/gleich 30°, Verzögerungsklasse -0,3 kleiner b kleiner/gleich -0,1g |
| STAT_SCHRAEGL_30_A_40___03_B_01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtzeit in Schräglagenklasse 30° kleiner a kleiner/gleich 40°, Verzögerungsklasse -0,3 kleiner b kleiner/gleich -0,1g |
| STAT_SCHRAEGL_40_A___03_B_01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtzeit in Schräglagenklasse 40° kleiner a, Verzögerungsklasse -0,3 kleiner b kleiner/gleich -0,1g |

### RES_0X2346_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHRAEGL_0_B_10_WERT | s | high | unsigned long | - | - | 1.0 | 4.0 | 0.0 | Betriebsdauer in Schräglagenklasse 0 ° kleiner b kleiner 10 ° |
| STAT_SCHRAEGL_10_B_30_WERT | s | high | unsigned long | - | - | 1.0 | 4.0 | 0.0 | Betriebsdauer in Schräglagenklasse 10 ° kleiner b kleiner 30° |
| STAT_SCHRAEGL_30_B_40_WERT | s | high | unsigned long | - | - | 1.0 | 4.0 | 0.0 | Betriebsdauer in Schräglagenklasse 30 ° kleiner b kleiner 40 ° |
| STAT_SCHRAEGL_40_B_60_WERT | s | high | unsigned long | - | - | 1.0 | 4.0 | 0.0 | Betriebsdauer in Schräglagenklasse 40 ° kleiner b kleiner 60 ° |
| STAT_SCHRAEGL_60_B_WERT | s | high | unsigned long | - | - | 1.0 | 4.0 | 0.0 | Betriebsdauer in Schräglagenklasse 60 ° kleiner b |

### RES_0X2347_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAUER_ZUSTAND_VA_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer Zustand Fahren gegen Bremse vorne |
| STAT_DAUER_ZUSTAND_HA_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsdauer Zustand Fahren gegen Bremse hinten |

### RES_0X2348_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_5_A_20__0_V_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Verzögerungsklasse 5...20 % a_veh_max (10 m/s2) und Geschwindigkeitsklasse 0...60 km/h |
| STAT_20_A_40__0_V_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Verzögerungsklasse 20...40 % a_veh_max (10 m/s2) und Geschwindigkeitsklasse 0...60 km/h |
| STAT_40_A_70__0_V_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Verzögerungsklasse 40...70 % a_veh_max (10 m/s2) und Geschwindigkeitsklasse 0...60 km/h |
| STAT_70_A__0_V_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Verzögerungsklasse größer 70 % a_veh_max (10 m/s2) und Geschwindigkeitsklasse 0...60 km/h |
| STAT_5_A_20__60_V_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Verzögerungsklasse 5...20 % a_veh_max (10 m/s2) und Geschwindigkeitsklasse 60...100 km/h |
| STAT_20_A_40__60_V_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Verzögerungsklasse 20...40 % a_veh_max (10 m/s2) und Geschwindigkeitsklasse 60...100 km/h |
| STAT_40_A_70__60_V_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Verzögerungsklasse 40...70 % a_veh_max (10 m/s2) und Geschwindigkeitsklasse 60...100 km/h |
| STAT_70_A__60_V_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Verzögerungsklasse größer 70 % a_veh_max (10 m/s2) und Geschwindigkeitsklasse 60...100 km/h |
| STAT_5_A_20__V_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Verzögerungsklasse 5...20 % a_veh_max (10 m/s2) und Geschwindigkeitsklasse größer 100 km/h |
| STAT_20_A_40__V_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Verzögerungsklasse 20...40 % a_veh_max (10 m/s2) und Geschwindigkeitsklasse größer 100 km/h |
| STAT_40_A_70__V_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Verzögerungsklasse 40...70 % a_veh_max (10 m/s2) und Geschwindigkeitsklasse größer 100 km/h |
| STAT_70_A__V_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Verzögerungsklasse größer 70 % a_veh_max (10 m/s2) und Geschwindigkeitsklasse größer 100 km/h |
| STAT_MAXZEIT_VERZOEGERUNG_GESCHWINDIGKEIT_FAHRZEUG_WERT | s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Schleppzeiger Maximalzeit Bremsvorgang |

### RES_0X2349_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BREMS_T_1__A_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse kleiner 1s Verzögerungsklasse kleiner 20% |
| STAT_BREMS_T_1__20_A_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse kleiner 1s Verzögerungsklasse 20...40% |
| STAT_BREMS_T_1__40_A_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse kleiner 1s Verzögerungsklasse 40...60% |
| STAT_BREMS_T_1__60_A_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse kleiner 1s Verzögerungsklasse 60...100% |
| STAT_BREMS_T_1__100_A_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse kleiner 1s Verzögerungsklasse größer 100% |
| STAT_BREMS_1_T_2__A_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 1..2s Verzögerungsklasse kleiner 20% |
| STAT_BREMS_1_T_2__20_A_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 1..2s Verzögerungsklasse 20...40% |
| STAT_BREMS_1_T_2__40_A_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 1..2s Verzögerungsklasse 40...60% |
| STAT_BREMS_1_T_2__60_A_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 1..2s Verzögerungsklasse 60...100% |
| STAT_BREMS_1_T_2__100_A_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 1..2s Verzögerungsklasse größer 100% |
| STAT_BREMS_2_T_5__A_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 2..5s Verzögerungsklasse kleiner 20% |
| STAT_BREMS_2_T_5__20_A_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 2..5s Verzögerungsklasse 20...40% |
| STAT_BREMS_2_T_5__40_A_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 2..5s Verzögerungsklasse 40...60% |
| STAT_BREMS_2_T_5__60_A_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 2..5s Verzögerungsklasse 60...100% |
| STAT_BREMS_2_T_5__100_A_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 2..5s Verzögerungsklasse größer 100% |
| STAT_BREMS_5_T_15__A_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 5..15s Verzögerungsklasse kleiner 20% |
| STAT_BREMS_5_T_15__20_A_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 5..15s Verzögerungsklasse 20...40% |
| STAT_BREMS_5_T_15__40_A_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 5..15s Verzögerungsklasse 40...60% |
| STAT_BREMS_5_T_15__60_A_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 5..15s Verzögerungsklasse 60...100% |
| STAT_BREMS_5_T_15__100_A_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse 5..15s Verzögerungsklasse größer 100% |
| STAT_BREMS_15_T__A_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse größer 15s Verzögerungsklasse kleiner 20% |
| STAT_BREMS_15_T__20_A_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse größer 15s Verzögerungsklasse 20...40% |
| STAT_BREMS_15_T__40_A_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse größer 15s Verzögerungsklasse 40...60% |
| STAT_BREMS_15_T__60_A_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse größer 15s Verzögerungsklasse 60...100% |
| STAT_BREMS_15_T__100_A_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung ohne Regelung Zeitklasse größer 15s Verzögerungsklasse größer 100% |

### RES_0X234A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABS_T_1__A_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse kleiner 1s Verzögerungsklasse kleiner 20% |
| STAT_ABS_T_1__20_A_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse kleiner 1s Verzögerungsklasse 20...40% |
| STAT_ABS_T_1__40_A_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse kleiner 1s Verzögerungsklasse 40...60% |
| STAT_ABS_T_1__60_A_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse kleiner 1s Verzögerungsklasse 60...100% |
| STAT_ABS_T_1__100_A_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse kleiner 1s Verzögerungsklasse größer 100% |
| STAT_ABS_1_T_2__A_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 1..2s Verzögerungsklasse kleiner 20% |
| STAT_ABS_1_T_2__20_A_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 1..2s Verzögerungsklasse 20...40% |
| STAT_ABS_1_T_2__40_A_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 1..2s Verzögerungsklasse 40...60% |
| STAT_ABS_1_T_2__60_A_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 1..2s Verzögerungsklasse 60...100% |
| STAT_ABS_1_T_2__100_A_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 1..2s Verzögerungsklasse größer 100% |
| STAT_ABS_2_T_5__A_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 2..5s Verzögerungsklasse kleiner 20% |
| STAT_ABS_2_T_5__20_A_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 2..5s Verzögerungsklasse 20...40% |
| STAT_ABS_2_T_5__40_A_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 2..5s Verzögerungsklasse 40...60% |
| STAT_ABS_2_T_5__60_A_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 2..5s Verzögerungsklasse 60...100% |
| STAT_ABS_2_T_5__100_A_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 2..5s Verzögerungsklasse größer 100% |
| STAT_ABS_5_T_15__A_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 5..15s Verzögerungsklasse kleiner 20% |
| STAT_ABS_5_T_15__20_A_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 5..15s Verzögerungsklasse 20...40% |
| STAT_ABS_5_T_15__40_A_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 5..15s Verzögerungsklasse 40...60% |
| STAT_ABS_5_T_15__60_A_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 5..15s Verzögerungsklasse 60...100% |
| STAT_ABS_5_T_15__100_A_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse 5..15s Verzögerungsklasse größer 100% |
| STAT_ABS_15_T__A_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse größer 15s Verzögerungsklasse kleiner 20% |
| STAT_ABS_15_T__20_A_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse größer 15s Verzögerungsklasse 20...40% |
| STAT_ABS_15_T__40_A_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse größer 15s Verzögerungsklasse 40...60% |
| STAT_ABS_15_T__60_A_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse größer 15s Verzögerungsklasse 60...100% |
| STAT_ABS_15_T__100_A_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Bremsung mit Regelung Zeitklasse größer 15s Verzögerungsklasse größer 100% |

### RES_0X4002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODIERSTECKER_VORHANDEN | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Status Codierstecker: 0 = Codierstecker nicht vorhanden, 1 = Codierstecker vorhanden |
| STAT_CODIERSTECKER_SIGNAL_UNGUELTIG | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Status des CAN Signals CODIERSTECKER: 0 = Signal gültig, 1 = Signal ungültig |
| STAT_ABS_DEAKTIVIERT_FAHRER | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Status ABS: 0 = aktiv, 1 = deaktiviert vom Fahrer |
| STAT_RAIN_MODUS | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Status Modus RAIN: 0 = Modus nicht gesetzt, 1 = Modus gesetzt |
| STAT_ROAD_MODUS | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Status Modus ROAD : 0 = Modus nicht gesetzt, 1 = Modus gesetzt |
| STAT_DYNAMIC_MODUS | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Status Modus DYNAMIC: 0 = Modus nicht gesetzt, 1 = Modus gesetzt |
| STAT_ENDURO_MODUS | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Status Modus ENDURO: 0 = Modus nicht gesetzt, 1 = Modus gesetzt |
| STAT_ENDURO_PRO_MODUS | 0/1 | high | unsigned char | 0x80 | - | - | - | - | Status Modus ENDURO_PRO: 0 = Modus nicht gesetzt, 1 = Modus gesetzt. |

### RES_0X4003_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABS_REGELFUNKTION_DEAKTIVIERT | 0/1 | high | unsigned char | - | - | - | - | - | Status ABS Regelfunktion: 0 = aktiv, 1 = deaktiviert |
| STAT_ABS_INTEGRALFUNKTION_DEAKTIVIERT | 0/1 | high | unsigned char | - | - | - | - | - | Status ABS Integralfunktion: 0 = aktiv, 1 = deaktiviert |

### RES_0XB00D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_MR_ABS_ROUTINE | - | - | - | Status Routine |

### RES_0XB00E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_MR_ABS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XB070_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_ROUTINE_ABS | - | - | - | Status Routine |

### RES_0XB071_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_GESCHW_RAD_VORNE_MIN_WERT | - | - | + | km/h | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | min. Radgeschwindigkeit vorne |
| STAT_GESCHW_RAD_VORNE_MAX_WERT | - | - | + | km/h | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | max. Radgeschwindigkeit vorne |
| STAT_GESCHW_RAD_HINTEN_MIN_WERT | - | - | + | km/h | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | min. Radgeschwindigkeit hinten |
| STAT_GESCHW_RAD_HINTEN_MAX_WERT | - | - | + | km/h | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | max. Radgeschwindigkeit hinten |

### RES_0XE0B5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VARIANTE | 0-n | high | unsigned char | - | TAB_MR_ABS_VARIANTENCODIERUNG | - | - | - | ABS Variantencodierung |

### RES_0XE0CF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BOTSCHAFTEN_VERSENDEN | 0/1 | high | unsigned char | - | - | - | - | - | 0 = Entwicklerbotschaften werden nicht versendet, 1 = Entwicklerbotschaften werden versendet |

### RES_0XE0D8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REIBWERTSPRUNG_ZAEHLER_VORNE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reibwertsprung Zaehler vorne |
| STAT_REIBWERTSPRUNG_ZAEHLER_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reibwertsprung Zaehler hinten |

### RES_0XE0DA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PUMPE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 = ein; 0 = aus |

### RES_0XE0DB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINLASSVENTIL_VORNE_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Einlassventil vorne  (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_EINLASSVENTIL_HINTEN_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Einlassventil hinten (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_AUSLASSVENTIL_VORNE_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslassventil vorne (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_AUSLASSVENTIL_HINTEN_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslassventil hinten (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_VORLADEVENTIL_HINTEN_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorladeventil hinten (LPF) (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_TRENNVENTIL_HINTEN_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Trennventil hinten (MCI) (0 % = nicht angesteuert; 100 % = voll angesteuert) |

### RES_0XE0DC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_ELEKTRONIK_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Elektronikversorgung |
| STAT_SPANNUNG_PUMPE_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Pumpenversorgung |
| STAT_SPANNUNG_VENTILE_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Ventilversorgung |
| STAT_SPANNUNG_WECKLEITUNG_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Weckleitung |

### RES_0XE0DD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_RAD_VORNE_WERT | km/h | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Radgeschwindigkeit vorne |
| STAT_GESCHWINDIGKEIT_RAD_HINTEN_WERT | km/h | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Radgeschwindigkeit hinten |
| STAT_GESCHWINDIGKEIT_FZG_WERT | km/h | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Fahrzeuggeschwindigkeit |
| STAT_DREHRICHTUNG_RAD_VORNE | 0-n | high | unsigned char | - | TAB_MR_RICHTUNG | 1.0 | 1.0 | 0.0 | Raddrehrichtung vorne (beim Motorrad nicht definiert) |
| STAT_DREHRICHTUNG_RAD_HINTEN | 0-n | high | unsigned char | - | TAB_MR_RICHTUNG | 1.0 | 1.0 | 0.0 | Raddrehrichtung hinten (beim Motorrad nicht definiert) |
| STAT_BEWEGUNGSRICHTUNG_FZG | 0-n | high | unsigned char | - | TAB_MR_RICHTUNG | 1.0 | 1.0 | 0.0 | Fahrzeugbewegungsrichtung (beim Motorrad nicht definiert) |
| STAT_SIGNALQUALITAET_VORNE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sensorsignalqualität vorne (0..100%) |
| STAT_SIGNALQUALITAET_HINTEN_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sensorsignalqualität hinten (0..100%) |

### RES_0XE0DE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRUCK_STEUERKREIS_VORNE_WERT | bar | - | signed int | - | - | 1.0 | 100.0 | 0.0 | Druck Steuerkreis vorne |
| STAT_DRUCK_STEUERKREIS_HINTEN_WERT | bar | - | signed int | - | - | 1.0 | 100.0 | 0.0 | Druck Steuerkreis hinten |
| STAT_DRUCK_RADKREIS_VORNE_WERT | bar | - | signed int | - | - | 1.0 | 100.0 | 0.0 | Druck Radkreis vorne |
| STAT_DRUCK_RADKREIS_HINTEN_WERT | bar | - | signed int | - | - | 1.0 | 100.0 | 0.0 | Druck Radkreis hinten |

### RES_0XE0E1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABS_REGELUNG_VORNE | 0-n | high | unsigned int | 0x0100 | TAB_MR_AKTIV | - | - | - | Zustand ABS Regelung vorne |
| STAT_ABS_REGELUNG_HINTEN | 0-n | high | unsigned int | 0x0200 | TAB_MR_AKTIV | - | - | - | Zustand ABS Regelung hinten |
| STAT_INTEGRALBREMSE_HINTEN | 0-n | high | unsigned int | 0x0400 | TAB_MR_AKTIV | - | - | - | Zustand Integralbremse hinten |
| STAT_RLP_REGELUNG_VORNE | 0-n | high | unsigned int | 0x1000 | TAB_MR_AKTIV | - | - | - | Zustand RLP Regelung vorne (Hinterradabhebung) |
| STAT_MHG_REGELUNG_HINTEN | 0-n | high | unsigned int | 0x2000 | TAB_MR_AKTIV | - | - | - | Zustand MHG Regelung hinten (HillStartControl) |
| STAT_FIRST_RUN | 0-n | high | unsigned int | 0x0001 | TAB_MR_AKTIV | - | - | - | Zustand First Run (Initialisierungsphase) |
| STAT_WARNLAMPE | 0-n | high | unsigned int | 0x0002 | TAB_MR_AKTIV | - | - | - | Zustand Warnlampe |
| STAT_ABS_NORMALBETRIEB | 0-n | high | unsigned int | 0x0010 | TAB_MR_AKTIV | - | - | - | Zustand ABS Normalbetrieb |
| STAT_ABS_RUECKFALLEBENE | 0-n | high | unsigned int | 0x0020 | TAB_MR_AKTIV | - | - | - | Zustand ABS Rückfallebene |
| STAT_RLP_NORMALBETRIEB | 0-n | high | unsigned int | 0x0040 | TAB_MR_AKTIV | - | - | - | Zustand RLP Normalbetrieb |
| STAT_IB_NORMALBETRIEB | 0-n | high | unsigned int | 0x0080 | TAB_MR_AKTIV | - | - | - | Zustand IB Normalbetrieb |

### RES_0XE1CC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GIERRATE_ADAPTION_WERT | °/s | high | unsigned char | - | - | 1.0 | 40.0 | -3.2 | Adaptionswert (Offset) Gierrate |
| STAT_ROLLRATE_ADAPTION_WERT | °/s | high | unsigned char | - | - | 1.0 | 40.0 | -3.2 | Adaptionswert (Offset) Rollrate |
| STAT_GIERRATE_ABSOLUT_WERT | °/s | high | unsigned int | - | - | 1.0 | 200.0 | -163.84 | Aktueller Absolutwert Gierrate |
| STAT_ROLLRATE_ABSOLUT_WERT | °/s | high | unsigned int | - | - | 1.0 | 200.0 | -163.84 | Aktueller Absolutwert Rollrate |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABS_ENTLUEFTUNG_MR | 0xB00D | - | Automatische Entlüftungsroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB00D_R | RES_0xB00D_R |
| ABS_VAKUUMBEFUELLUNG_MR | 0xB00E | - | Befüllung mit Vakuum | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB00E_R | RES_0xB00E_R |
| ADAPTION_GIERRATE_ROLLRATE_LOESCHEN_MR | 0xB010 | - | Setzt Adaptionswerte für Gierrate und Rollrate zurück | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ABS_VENTILE_PULS_MR | 0xB070 | - | Ventile gepulst | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB070_R | RES_0xB070_R |
| ABS_RADDREHZAHLSENSORPRUEFUNG_MR | 0xB071 | - | Raddrehzahlsensorpruefung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB071_R | RES_0xB071_R |
| ABS_VARIANTENCODIERUNG_MR | 0xE0B5 | - | Variantencodierung | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE0B5_D | RES_0xE0B5_D |
| CAN_ENTWICKLERBOTSCHAFTEN | 0xE0CF | - | CAN Entwicklerbotschaften aktivieren/deaktivieren | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE0CF_D | RES_0xE0CF_D |
| ABS_REIBWERTSPRUNG_ZAEHLER_MR | 0xE0D8 | - | Reibwertsprung Zaehler lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE0D8_D |
| ABS_INTERNER_FEHLER_MR | 0xE0D9 | STAT_FEHLER_ID_WERT | Interne Fehler ID | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ABS_PUMPE_MR | 0xE0DA | - | Daten ABS Pumpe | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE0DA_D | RES_0xE0DA_D |
| ABS_VENTILE_MR | 0xE0DB | - | ABS Ventile | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE0DB_D | RES_0xE0DB_D |
| ABS_KLEMMEN_MR | 0xE0DC | - | Klemmenstatus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE0DC_D |
| ABS_RADGESCHWINDIGKEIT_MR | 0xE0DD | - | Radgeschwindigkeit | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE0DD_D |
| ABS_DRUCKSENSOREN_MR | 0xE0DE | - | Drucksensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE0DE_D |
| ABS_REF_GESCHWINDIGKEIT_MR | 0xE0DF | STAT_VREF_WERT | Referenzgeschwindigkeit | km/h | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ABS_BREMSEN_MR | 0xE0E0 | STAT_BREMSEN | Bremsenstatus | 0-n | - | High | unsigned char | TAB_MR_BREMSENSTATUS | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ABS_BETRIEBSMODUS_MR | 0xE0E1 | - | Betriebsmodus | Bit | - | - | BITFIELD | RES_0xE0E1_D | - | - | - | - | 22 | - | - |
| ABS_BATT_SPANNUNG_MR | 0xE0E2 | STAT_SPANNUNG_WERT | Batteriespannung | V | - | High | unsigned int | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| ABS_TASTER_MR | 0xE198 | STAT_TASTER_EIN | Status Taster: 0 = aus, 1 = ein | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| SCHRAEGLAGE_MR | 0xE199 | STAT_SCHRAEGLAGE_WERT | Berechnete Schräglage. Negative Werte = links geneigt, Positive Werte = rechts geneigt | ° | - | High | unsigned int | - | 90.0 | 2048.0 | -90.0 | - | 22 | - | - |
| GIERRATE_ROLLRATE_MR | 0xE1CC | - | Auslesen Gierrate und Rollrate | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE1CC_D |
| STATISTIK_FASTA_HEADER | 0x2330 | - | FASTA IDs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2330_D |
| STATISTIK_FAHRZEUGGESCHWINDIGKEIT | 0x2331 | - | Betriebsdauer und Häufigkeit in bestimmten Geschwindigkeitsklassen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2331_D |
| STATISTIK_FAHRZEUGSTILLSTAND | 0x2332 | - | Häufigkeit mit der sich das Fahrzeug mit laufendem Motor und einer Geschwindigkeit < 1,5 km/h in bestimmten Zeitklassen befindet | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2332_D |
| STATISTIK_BREMSUNG_STARTGESCHWINDIGKEIT_DRUCK_VA | 0x2333 | - | Häufigkeit und Maximalzeit der Bremsungen an der Vorderachse in bestimmten Startgeschwindigkeits- und Bremsdruckklassen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2333_D |
| STATISTIK_BREMSUNG_STARTGESCHWINDIGKEIT_DRUCK_HA | 0x2334 | - | Häufigkeit und Maximalzeit der Bremsungen an der Hinterachse in bestimmten Startgeschwindigkeits- und Bremsdruckklassen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2334_D |
| STATISTIK_HZ_BREMSDRUCK_ALLGEMEIN_FAHRT_VA | 0x2335 | - | Häufigkeit mit der sich der Betätigungsdruck im Hauptzylinder vorne bei Geschwindigkeit > 1,5 km/h in bestimmten Druck- und Zeitklassen befindet | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2335_D |
| STATISTIK_HZ_BREMSDRUCK_ALLGEMEIN_FAHRT_HA | 0x2336 | - | Häufigkeit mit der sich der Betätigungsdruck im Hauptzylinder hinten bei Geschwindigkeit > 1,5 km/h in bestimmten Druck- und Zeitklassen befindet | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2336_D |
| STATISTIK_HZ_BREMSDRUCK_MITTELWERT_STILLSTAND_VA | 0x2337 | - | Häufigkeit mit der sich der Bremsdruckmittelwert des Hauptzylinders vorne bei v < 1,5 km/h in bestimmten Druckklassen befindet | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2337_D |
| STATISTIK_HZ_BREMSDRUCK_MITTELWERT_STILLSTAND_HA | 0x2338 | - | Häufigkeit mit der sich der Bremsdruckmittelwert des Hauptzylinders hinten bei v < 1,5 km/h in bestimmten Druckklassen befindet | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2338_D |
| STATISTIK_RZ_BREMSDRUCK_MITTELWERT_REGELUNG_VA | 0x2339 | - | Häufigkeit mit der sich der Bremsdruckmittelwert Radzylinder vorne innerhalb einer Regelung in einer bestimmten Druckklasse befindet | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2339_D |
| STATISTIK_RZ_BREMSDRUCK_MITTELWERT_REGELUNG_HA | 0x233A | - | Häufigkeit mit der sich der Bremsdruckmittelwert Radzylinder hinten innerhalb einer Regelung in einer bestimmten Druckklasse befindet | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x233A_D |
| STATISTIK_HZ_BREMSDRUCK_MITTELWERT_REGELUNG_VA | 0x233B | - | Häufigkeit mit der sich der Bremsdruckmittelwert Hauptzylinder vorne innerhalb einer Regelung in einer bestimmten Druckklasse befindet | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x233B_D |
| STATISTIK_HZ_BREMSDRUCK_MITTELWERT_REGELUNG_HA | 0x233C | - | Häufigkeit mit der sich der Bremsdruckmittelwert Hauptzylinder hinten innerhalb einer Regelung in einer bestimmten Druckklasse befindet | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x233C_D |
| STATISTIK_EREIGNISZAEHLER | 0x233D | - | Häufigkeit mit der ein bestimmtes Ereignis auftritt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x233D_D |
| STATISTIK_VENTILE | 0x233E | - | Häufigkeitszähler für Ventilbetätigungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x233E_D |
| STATISTIK_PUMPE | 0x233F | - | Häufigkeit mit der bestimmte Pumpenereignisse auftreten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x233F_D |
| STATISTIK_HSC_DAUER | 0x2340 | - | Häufigkeit mit der  die HSC-Funktion (Hill Start Control, MHG) in bestimmten Zeitklassen betrieben wird | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2340_D |
| STATISTIK_DREHZAHL_UBATT | 0x2341 | - | Zähler für die drehzahlabhängige Betriebsdauer in bestimmten Spannungsklassen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2341_D |
| STATISTIK_BREMSENTEMPERATUR | 0x2342 | - | Betriebsdauer der Bremsen in bestimmten Temperaturklassen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2342_D |
| STATISTIK_SG_TEMPERATUR | 0x2343 | - | Betriebsdauer und Ereigniszähler bei dem Betrieb in bestimmten Steuergeräte Temperaturklassen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2343_D |
| STATISTIK_FAHRMODUS_DAUER | 0x2344 | - | Betriebsdauer in den verschiedenen Fahrmodi | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2344_D |
| STATISTIK_VERZOEGERUNG_SCHRAEGLAGE | 0x2345 | - | Betriebsdauer in bestimmten Verzögerungsklassen und Schräglagenklassen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2345_D |
| STATISTIK_SCHRAEGLAGEN | 0x2346 | - | Betriebsdauer bei v > 1,5 km/h in bestimmten Schräglagenklassen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2346_D |
| STATISTIK_FAHREN_GEGEN_BREMSE | 0x2347 | - | Betriebsdauer bei v > 1,5 km/h und Drosselklappe > 5 % und Bremsdruck > 2 bar und Antriebsstrang geschlossen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2347_D |
| STATISTIK_BREMSUNG_VERZOEGERUNG_GESCHWINDIGKEIT_FAHRZEUG | 0x2348 | - | Häufigkeit und Maximalzeit der Bremsungen des Fahrzeugs in bestimmten Geschwindigkeitsklassen  und Verzögerungsklassen (a_veh_max = 10 m/s2) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2348_D |
| STATISTIK_VERZOEGERUNG_DAUER_FAHRT_OHNE_REGELUNG | 0x2349 | - | Anzahl Verzögerungen ohne ABS Regelung während der Fahrt in bestimmten Zeitklassen und Verzögerungsklassen (a_max = 10 m/s2) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2349_D |
| STATISTIK_VERZOEGERUNG_DAUER_FAHRT_MIT_REGELUNG | 0x234A | - | Anzahl Verzögerungen mit ABS Regelung während der Fahrt in bestimmten Zeitklassen und Verzögerungsklassen (a_max = 10 m/s2) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x234A_D |
| STATUS_ECU_MR | 0x4001 | STAT_ECU_STATUS | Betriebszustand Steuergeraet | 0-n | - | High | unsigned char | TAB_MR_ECU_STATUS | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FREEZEFRAME1 | 0x4002 | - | FreezeFrame für ABS Taster, CodingPlug und Mode | Bit | - | - | BITFIELD | RES_0x4002_D | - | - | - | - | 22 | - | - |
| _ABS_REGELFUNKTIONEN_DEAKTIVIERT | 0x4003 | - | Deaktiviert die ABS Regelfunktionen: 0 = Regelfunktion aktiv, 1 = Regelfunktion deaktiviert | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4003_D | RES_0x4003_D |

### TAB_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Modus 0 |
| 0x01 | Modus 1 |
| 0x02 | Modus 2 |
| 0x03 | Modus 3 |
| 0x04 | Modus 4 |
| 0x05 | Modus 5 |
| 0x06 | Modus 6 |
| 0x07 | Modus 7 |

### TAB_MR_ABS_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Abbruch |
| 0x04 | Fehler |
| 0x05 | Phasenende |
| 0xFF | Ungültig |

### TAB_MR_ABS_VARIANTENCODIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Fahrzeugcodierung |
| 0x01 | Generische Kodierung Strasse (17 Zoll vorne / 17 Zoll hinten) |
| 0x02 | Generische Kodierung GS (19 Zoll vorne / 17 Zoll hinten) |
| 0x03 | Generische Kodierung Offroad (21 Zoll vorne / 17 Zoll hinten) |
| 0x04 | Generische Kodierung Scooter (15 Zoll vorne / 15 Zoll hinten) |
| 0xB0 | K48 ohne HSC ohne ABS Pro |
| 0xB1 | K48 mit HSC ohne ABS Pro |
| 0xB2 | K48 ohne HSC mit ABS Pro |
| 0xB3 | K48 mit HSC mit ABS Pro |
| 0xB4 | K17 |
| 0xB5 | K18 MUE/K19 MUE |
| 0xB6 | K08/K09 |
| 0xB7 | K07 |
| 0xB8 | K50 ohne HSC ohne ABS Pro |
| 0xB9 | K51 ohne HSC ohne ABS Pro |
| 0xBA | K52 ohne HSC ohne ABS Pro |
| 0xBB | K53/54 ohne HSC ohne ABS Pro |
| 0xBC | Reserviert |
| 0xBD | K50 mit HSC ohne ABS Pro |
| 0xBE | K51 mit HSC ohne ABS Pro |
| 0xBF | K52 mit HSC ohne ABS Pro |
| 0xC0 | K53/K54 mit HSC ohne ABS Pro |
| 0xC1 | Reserviert |
| 0xC2 | K46 MUE2 ohne ABS Pro |
| 0xC3 | K47 ohne ABS Pro |
| 0xC4 | K49 ohne HSC ohne ABS Pro |
| 0xC5 | K49 ohne HSC mit ABS Pro |
| 0xC6 | K49 mit HSC ohne ABS Pro |
| 0xC7 | K49 mit HSC mit ABS Pro |
| 0xC8 | K50 ohne HSC mit ABS Pro |
| 0xC9 | K51 ohne HSC mit ABS Pro |
| 0xCA | K52 ohne HSC mit ABS Pro |
| 0xCB | K53/K54 ohne HSC mit ABS Pro |
| 0xCC | K50 mit HSC mit ABS Pro |
| 0xCD | K51 mit HSC mit ABS Pro |
| 0xCE | K52 mit HSC mit ABS Pro |
| 0xCF | K53/K54 mit HSC mit ABS Pro |
| 0xD0 | K46 MUE2 mit ABS Pro |
| 0xD1 | K47 mit ABS Pro |
| 0xD2 | K02 |
| 0xD3 | K03/K01 |
| 0xD4 | U69 |
| 0xD5 | K21 TUE |
| 0xD6 | K22/K32 |
| 0xD7 | K23/K33 |
| 0xD8 | Reserviert |
| 0xD9 | K80 ohne ABS Pro |
| 0xDA | K81 ohne ABS Pro |
| 0xDB | K82 ohne ABS Pro |
| 0xDC | K83 ohne ABS Pro |
| 0xDD | K84 ohne ABS Pro |
| 0xDE | Reserviert |
| 0xDF | Reserviert |
| 0xE0 | K80 mit ABS Pro |
| 0xE1 | K81 mit ABS Pro |
| 0xE2 | K82 mit ABS Pro |
| 0xE3 | K83 mit ABS Pro |
| 0xE4 | K84 mit ABS Pro |
| 0xE5 | K67 |
| 0xE6 | K69 |
| 0xE7 | Reserviert |
| 0xE8 | K50 mit ABS Pro, mit HSC Pro und DBC |
| 0xE9 | K51 mit ABS Pro, mit HSC Pro und DBC |
| 0xEA | K52 mit ABS Pro, mit HSC Pro und DBC |
| 0xEB | K53/K54 mit ABS Pro, mit HSC Pro und DBC |
| 0xEC | K48 mit ABS Pro, mit HSC Pro und DBC |
| 0xFF | Signal ungueltig |

### TAB_MR_ABS_VENTILE

| WERT | TEXT |
| --- | --- |
| 0 | nv |
| 1 | Pumpe |
| 2 | Einlassventil vorne (EVV) |
| 3 | Einlassventil hinten (EVH) |
| 4 | Auslassventil vorne (AVV) |
| 5 | Auslassventil hinten (AVH) |
| 6 | Vorladeventil hinten (LPF) |
| 7 | Trennventil hinten (MCI) |

### TAB_MR_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht aktiv |
| 0x01 | aktiv |

### TAB_MR_ARG_PHASE

| WERT | TEXT |
| --- | --- |
| 0x07 | erster Entlüftungszyklus |
| 0x05 | Entlüftung Sekundärkreis (intern verwendet) |
| 0x06 | Entlüftung Primärkreis (MIB) |
| 0x08 | zweiter Entlüftungszyklus |

### TAB_MR_BREMSENSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Bremse hinten nicht betätigt / Bremse vorne nicht betätigt |
| 0x01 | Bremse hinten nicht betätigt / Bremse vorne betätigt |
| 0x10 | Bremse hinten betätigt / Bremse vorne nicht betätigt |
| 0x11 | Bremse hinten betätigt / Bremse vorne betätigt |
| 0xF0 | Bremse hinten fehlerhaft / Bremse vorne nicht betätigt |
| 0xF1 | Bremse hinten fehlerhaft / Bremse vorne betätigt |
| 0x0F | Bremse hinten nicht betätigt / Bremse vorne fehlerhaft |
| 0x1F | Bremse hinten betätigt / Bremse vorne fehlerhaft |

### TAB_MR_ECU_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Normalbetrieb |
| 0x02 | Normalbetrieb/Ueberspannung |
| 0x03 | Normalbetrieb/Unterspannung |
| 0x04 | Diagnose |
| 0x05 | Diagnose/Ueberspannung |
| 0x06 | Diagnose/Unterspannung |
| 0x07 | PowerDown |
| 0x08 | PowerSave |
| 0x09 | Nicht verfuegbar |
| 0x0A | Reset |
| 0x0B | Reserviert 11 |
| 0x0C | Reserviert 12 |
| 0x0D | Reserviert 13 |
| 0x0E | Reserviert 14 |
| 0x0F | Ungueltig |

### TAB_MR_PHASE_VAKUUMBEF

| WERT | TEXT |
| --- | --- |
| 0x00 | reserviert |
| 0x01 | evakuieren |
| 0x02 | füllen |
| 0x03 | nivellieren |

### TAB_MR_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stillstand |
| 0x01 | Vorwärts |
| 0x02 | Rückwärts |
| 0x03 | Nicht definiert |

### TAB_ROUTINE_ABS

| WERT | TEXT |
| --- | --- |
| 0x00 | Routinestatus unbekannt |
| 0x01 | Routine läuft |
| 0x02 | Routine erfolgreich abgeschlossen |
| 0x03 | Routine abgebrochen |
| 0x04 | Fehler im Routineablauf |
| 0xFF | ungültig |

### TAB_STATUS_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Abbruch |
| 0x04 | Fehler |
| 0x05 | Phasenende |
| 0xFF | Ungültig |

### TAB_0X4002

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 |

### TAB_0XE0E1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 | 0x0011 | 0x0012 | 0x0013 |
