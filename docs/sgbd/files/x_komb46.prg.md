# x_komb46.prg

## General

|  |  |
| --- | --- |
| File | x_komb46.prg |
| Type | PRG |
| Jobs | 31 |
| Tables | 90 |
| Origin | BMW UX-EE-2 Wallner |
| Revision | 2.002 |
| Author | Dräxlmaier UX-EE-1 Rätscher, Dräxlmaier UX-EE-1 Utter |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad Instrumentenkombi K46 |  |  |
| ORIGIN | string | BMW UX-EE-2 Wallner |  |  |
| REVISION | string | 2.002 |  |  |
| AUTHOR | string | Dräxlmaier UX-EE-1 Rätscher, Dräxlmaier UX-EE-1 Utter |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.49 |  |  |
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
| 0x0000B7 | Robert Bosch Battery Systems GmbH |
| 0x0000B8 | KYOCERA Display Corporation |
| 0x0000B9 | MAGNA Powertrain AG & Co KG |
| 0x0000BA | BorgWarner |
| 0x0000BB | BMW - Fahrzeugsimulator |
| 0x0000BC | Benteler Duncan Plant |
| 0x0000BD | U-Shin |
| 0x0000BE | Schaeffler Technologies |
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

### ARG_0XE010_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HUPE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Horn; 1=EIN, 0=AUS |

### ARG_0XE012_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WECKLEITUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Vorgabe Weckleitung: 0 = aus, 1 = ein |

### ARG_0XE03F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL | 1/min | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | 0.0 | 25500.0 | Vorgegebene Drehzahl |

### ARG_0XE05E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GRIFFHEIZUNG_RECHTS | % | high | unsigned char | - | - | 254.0 | 100.0 | 0.0 | 0.0 | 100.0 | PWM Vorgabe Griffheizung rechts |
| GRIFFHEIZUNG_LINKS | % | high | unsigned char | - | - | 254.0 | 100.0 | 0.0 | 0.0 | 100.0 | PWM Vorgabe Griffheizung links |

### ARG_0XE05F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RUECKLICHT | % | high | unsigned char | - | - | 254.0 | 100.0 | 0.0 | 0.0 | 100.0 | PWM Vorgabe Rücklicht |

### ARG_0XE060_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STANDLICHT | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Vorgabe Standlicht: 0 = aus, 1 = ein |

### ARG_0XE061_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BLINKER_VL | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Vorgabe Blinker vorne links: 0 = aus, 1 = ein |
| BLINKER_VR | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Vorgabe Blinker vorne rechts: 0 = aus, 1 = ein |
| BLINKER_HL | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Vorgabe Blinker hinten links: 0 = aus, 1 = ein |
| BLINKER_HR | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Vorgabe Blinker hinten rechts: 0 = aus, 1 = ein |

### ARG_0XE063_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABBLENDLICHT | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Vorgabe Abblendlicht: 0 = aus, 1 = ein |

### ARG_0XE064_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TANKINHALT | l | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | 1.5 | 12.5 | Vorgabe Tankinhalt in l |

### ARG_0XE066_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TESTMUSTER | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Vorgabe Testmuster: 0 = aus, 1 = ein |

### ARG_0XE067_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONTROLLLEUCHTE | 0-n | high | unsigned char | - | TAB_MR_KONTROLLLEUCHTEN_K46 | - | - | - | - | - | Anzusteuernde Kontrollleuchte |
| EIN_AUS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Zu schaltender Zustand für die ausgewählte Kontrollleuchte: 0 = aus, 1 = ein |

### ARG_0XE068_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONTROLL | % | high | unsigned char | - | - | 254.0 | 100.0 | 0.0 | 0.0 | 100.0 | Vorgabe PWM Wert Kontrollleuchten |
| HINTERGRUND | % | high | unsigned char | - | - | 254.0 | 100.0 | 0.0 | 0.0 | 100.0 | Vorgabe PWM Wert Hintergrundbeleuchtung |
| ZIFFERNBLATT | % | high | unsigned char | - | - | 254.0 | 100.0 | 0.0 | 0.0 | 100.0 | Vorgabe PWM Wert Ziffernblattbeleuchtung |
| SCHALTBLITZ | % | high | unsigned char | - | - | 254.0 | 100.0 | 0.0 | 0.0 | 100.0 | Vorgabe PWM Wert Schaltblitzhelligkeit |

### ARG_0XE069_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TEMPERATUR | °C | high | unsigned char | - | - | 1.0 | 1.0 | 40.0 | -40.0 | 50.0 | Vorgabe Ansauglufttemperatur für Anzeige |

### ARG_0XE06A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TEMPERATUR | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Vorgabe Motortemperatur Anzeige |

### ARG_0XE06B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MENUE_AKTIV | 0-n | high | unsigned char | - | TAB_MR_ARG_FAHRMODUS_MENUE | - | - | - | - | - | Zustand Modus Menü |
| MODUS_VORGEWAEHLT | 0-n | high | unsigned char | - | TAB_MR_ARG_FAHRMODUS | - | - | - | - | - | Vorgewählter Fahrmodus |
| MODUS_AKTIV | 0-n | high | unsigned char | - | TAB_MR_ARG_FAHRMODUS | - | - | - | - | - | Aktiver Fahrmodus |

### ARG_0XE06C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LIVE_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | 90.0 | -90.0 | 89.0 | Anzuzeigender Schräglagen-Live-Wert |
| MAX_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | 90.0 | -90.0 | 89.0 | Anzuzeigender Schräglagen-Max-Wert |

### ARG_0XE06D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LIVE_WERT | m/s² | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 12.0 | Anzuzeigender ABS Live Wert Verzögerung |
| MAX_WERT | m/s² | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 12.0 | Anzuzeigender ABS Max Wert Verzögerung |

### ARG_0XE06E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LIVE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Anzuzeigender DTC Live Wert Drehmomentenreduzierung |
| MAX_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Anzuzeigender DTC Max Wert Drehmomentenreduzierung |

### ARG_0XE080_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HBG_VOL_RESET | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1 = Anzeige zurücksetzen, 0 = Anzeige nicht zurücksetzen |

### ARG_0XE083_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FERNLICHT | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Fernlicht schalten: 0 = aus, 1 = ein |

### ARG_0XE09C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SZ_STECKER_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Sonderzubehör Stecker |

### ARG_0XE119_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GWSZ_SCHREIBEN | km | - | long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | GWSZ im Kombi auf neuen Wert setzen |

### ARG_0XE125_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL | 1/min | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe der aktuell im Kombi anzuzeigenden Drehzahl |

### ARG_0XE126_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GESCHWINDIGKEIT | km/h | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe der aktuell im Kombi anzuzeigenden Geschwindigkeit |

### ARG_0XE12B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KOMBI_STUNDE_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 23.0 | Stunde |
| KOMBI_MINUTE_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 59.0 | Minute |
| KOMBI_SEKUNDE_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 59.0 | Sekunde |
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

### ARG_0XF190_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FGNR17 | - | - | string[17] | - | - | 1.0 | 1.0 | 0.0 | - | - | 17-stellige Fahrgestellnummer |

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
| 0x026000 | Energiesparmode aktiv | 0 |
| 0xB7F600 | Hardwarefehler Steuergeraet | 0 |
| 0xB7F601 | Softwarefehler Steuergeraet | 0 |
| 0xB7F602 | LIN Schalterblock_links: Busausfall | 1 |
| 0xB7F603 | LIN Schalterblock_links: Zeitüberschreitung | 1 |
| 0xB7F604 | Kilometerstand  manipuliert | 0 |
| 0xB7F605 | Codierung : Codierdatenübertragungsfehler | 0 |
| 0xB7F606 | Codierung : Codiersignaturfehler | 0 |
| 0xB7F607 | NVM_E_READ_FAILED | 0 |
| 0xB7F608 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0xB7F609 | NVM_E_WRITE_FAILED | 0 |
| 0xB7F60A | NVM_E_WRONG_CONFIG_ID | 0 |
| 0xB7F60B | NVM_E_CONTROL_FAILED | 0 |
| 0xB7F60C | NVM_E_ERASE_FAILED | 0 |
| 0xB7F60D | NVM_E_READ_ALL_FAILED | 0 |
| 0xB7F60F | Blinker HR: Kurzschluß | 0 |
| 0xB7F610 | Griffheizung: Leitungsunterbrechung | 0 |
| 0xB7F612 | Abblendlicht: Leitungsunterbrechung | 0 |
| 0xB7F613 | Blinker HL: Leitungsunterbrechung | 0 |
| 0xB7F614 | Griffheizung: Kurzschluß | 0 |
| 0xB7F616 | Standlicht: Leitungsunterbrechung | 0 |
| 0xB7F617 | Abblendlicht: Kurzschluß | 0 |
| 0xB7F618 | Blinker HL: Kurzschluß | 0 |
| 0xB7F61A | Blinker VR: Leitungsunterbrechung | 0 |
| 0xB7F61B | Ueberspannung Batterie | 1 |
| 0xB7F61D | Unterspannung Batterie | 1 |
| 0xB7F61E | Blinker VL: Kurzschluß | 0 |
| 0xB7F620 | Blinker VL: Leitungsunterbrechung | 0 |
| 0xB7F621 | Blinker VR: Kurzschluß | 0 |
| 0xB7F622 | Tankgeber: defekt | 0 |
| 0xB7F623 | Standlicht: Kurzschluß | 0 |
| 0xB7F625 | Rücklicht: Kurzschluß | 0 |
| 0xB7F626 | SZ-Stecker Kurzschluss nach Masse oder Ueberlast | 0 |
| 0xB7F627 | Rücklicht: Leitungsunterbrechung | 0 |
| 0xB7F628 | Produktionsmode aktiv | 0 |
| 0xB7F62A | Weckleitung: Kurzschluß | 1 |
| 0xB7F62B | Horn Leitungsunterbrechung | 0 |
| 0xB7F62D | Horn Kurzschluss nach Masse | 0 |
| 0xB7F62E | Blinker HR: Leitungsunterbrechung | 0 |
| 0xB7F62F | Codierung : Steuergerät ist nicht codiert | 0 |
| 0xB7F630 | Fernlicht: Kurzschluß | 0 |
| 0xB7F631 | Fernlicht: Leitungsunterbrechung | 0 |
| 0xE1045F | CAN Bus Off | 1 |
| 0xE11422 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11424 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11428 | CAN DME Nachricht Motordaten_1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1142A | CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11432 | CAN DWA Nachricht Status_DWA_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11438 | CAN ESA-SAF Nachricht Status_Federbein_Verstellung_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11440 | CAN DME Nachricht Wegstrecke_Redundant_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11442 | CAN ABS-BCO Nachricht Wegstrecke_Relativ_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11446 | CAN DME Nachricht Modus_Fahrzeug_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xE1144A | CAN DME Nachricht Status_DTC_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xE11454 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: CRC Fehler | 1 |
| 0xE11455 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Alive Fehler | 1 |
| 0xE11456 | CAN DME Nachricht Modus_Fahrzeug_Motorrad_2010  CRC Fehler | 1 |
| 0xE11457 | CAN DME Nachricht Modus_Fahrzeug_Motorrad_2010  Alive Fehler | 1 |
| 0xE11480 | CAN DME Nachricht Temperatur_Ansaugluft_Motorrad_2010: Zeitüberschreitung | 1 |
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
| F_HLZ | nein |
| F_SEVERITY | nein |

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

### RES_0XB004_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_MR_ROUTINE | - | - | - | Aktueller Zustand Routine |

### RES_0XD10D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABSOLUT_GWSZ_RAM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Liefert den absoluten Gesamtwegstreckenzähler aus dem RAM. |
| STAT_ABSOLUT_GWSZ_EEP_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Liefert den absoluten Gesamtwegstreckenzähler aus dem EEPROM. |

### RES_0XE010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUPE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Horn; 1=EIN, 0=AUS |

### RES_0XE012_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WECKLEITUNG | 0/1 | - | unsigned char | - | - | - | - | - | Status Weckleitung: 0 = aus, 1 = ein |

### RES_0XE03F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_WERT | 1/min | high | unsigned char | - | - | 100.0 | 1.0 | 0.0 | Aktuelle Drehzahl |

### RES_0XE05D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRIFFZEIZUNG_RECHTS_WERT | A | high | unsigned int | - | - | 7050.0 | 4808100.0 | 0.0 | Stromwert rechte Griffheizung |
| STAT_GRIFFZEIZUNG_LINKS_WERT | A | high | unsigned int | - | - | 7050.0 | 4808100.0 | 0.0 | Stromwert linke Griffheizung |

### RES_0XE05E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRIFFHEIZUNG_RECHTS_WERT | % | high | unsigned char | - | - | 100.0 | 254.0 | 0.0 | PWM Wert Griffheizung rechts |
| STAT_GRIFFHEIZUNG_LINKS_WERT | % | high | unsigned char | - | - | 100.0 | 254.0 | 0.0 | PWM Wert Griffheizung links |

### RES_0XE05F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RUECKLICHT_WERT | % | high | unsigned char | - | - | 100.0 | 254.0 | 0.0 | PWM Wert Rücklicht |

### RES_0XE060_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STANDLICHT | 0/1 | high | unsigned char | - | - | - | - | - | Status Standlicht: 0 = aus, 1 = ein |

### RES_0XE061_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLINKER_VL | 0/1 | high | unsigned char | - | - | - | - | - | Status Blinker vorne links: 0 = aus, 1 = ein |
| STAT_BLINKER_VR | 0/1 | high | unsigned char | - | - | - | - | - | Status Blinker vorne rechts: 0 = aus, 1 = ein |
| STAT_BLINKER_HL | 0/1 | high | unsigned char | - | - | - | - | - | Status Blinker hinten links: 0 = aus, 1 = ein |
| STAT_BLINKER_HR | 0/1 | high | unsigned char | - | - | - | - | - | Status Blinker hinten rechts: 0 = aus, 1 = ein |

### RES_0XE062_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLINKER_VL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert Blinker vorne links |
| STAT_BLINKER_VR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert Blinker vorne rechts |
| STAT_BLINKER_HL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert Blinker hinten links |
| STAT_BLINKER_HR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert Blinker hinten rechts |

### RES_0XE063_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABBLENDLICHT | 0/1 | high | unsigned char | - | - | - | - | - | Status Abblendlicht: 0 = aus, 1 = ein |

### RES_0XE064_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANKINHALT_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Tankinhalt in l |
| STAT_GEBERWIDERSTAND_WERT | Ohm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Widerstandswert Tankgeber |

### RES_0XE066_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TESTMUSTER | 0/1 | high | unsigned char | - | - | - | - | - | Status Testmuster: 0 = aus, 1 = ein |

### RES_0XE067_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARN_GELB | 0/1 | high | unsigned char | - | - | - | - | - | Status Warnlampe gelb |
| STAT_WARN_ROT | 0/1 | high | unsigned char | - | - | - | - | - | Status Warnlampe rot |
| STAT_NEUTRAL | 0/1 | high | unsigned char | - | - | - | - | - | Status Neutrallampe |
| STAT_ABS | 0/1 | high | unsigned char | - | - | - | - | - | Status ABS Lampe |
| STAT_BLINKER_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | Status Lampe Blinker rechts |
| STAT_RESERVE | 0/1 | high | unsigned char | - | - | - | - | - | Status Reservelampe/Tagfahrlicht |
| STAT_FERNLICHT | 0/1 | high | unsigned char | - | - | - | - | - | Status Lampe Fernlicht |
| STAT_BLINKER_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | Status Lampe Blinker links |
| STAT_DWA_LED | 0/1 | high | unsigned char | - | - | - | - | - | Status DWA LED |
| STAT_ASC | 0/1 | high | unsigned char | - | - | - | - | - | Status ASC Lampe |
| STAT_MOTOR | 0/1 | high | unsigned char | - | - | - | - | - | Status Motorlampe |
| STAT_BEST_LAP | 0/1 | high | unsigned char | - | - | - | - | - | Status Lampe BESTE RUNDE/Zusatzscheinwerfer |
| STAT_CRUISE_CONTROL | 0/1 | high | unsigned char | - | - | - | - | - | Status Lampe Tempomat |
| STAT_GEAR_SHIFT | 0/1 | high | unsigned char | - | - | - | - | - | Status Schaltblitz |

### RES_0XE068_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTROLL_WERT | % | high | unsigned char | - | - | 100.0 | 254.0 | 0.0 | PWM Wert Kontrollleuchten |
| STAT_HINTERGRUND_WERT | % | high | unsigned char | - | - | 100.0 | 254.0 | 0.0 | PWM Wert Hintergrundbeleuchtung |
| STAT_ZIFFERNBLATT_WERT | % | high | unsigned char | - | - | 100.0 | 254.0 | 0.0 | PWM Wert Ziffernblattbeleuchtung |
| STAT_SCHALTBLITZ_WERT | % | high | unsigned char | - | - | 100.0 | 254.0 | 0.0 | PWM Wert Schaltblitzhelligkeit |

### RES_0XE069_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Angezeigte Ansauglufttemperatur |

### RES_0XE06A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzeige Motortemperatur |

### RES_0XE06B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MENUE_AKTIV | 0-n | high | unsigned char | - | TAB_MR_RES_FAHRMODUS_MENUE | - | - | - | Zustand Modus Menü |
| STAT_MODUS_VORGEWAEHLT | 0-n | high | unsigned char | - | TAB_MR_RES_FAHRMODUS | - | - | - | Vorgewählter Fahrmodus |
| STAT_MODUS_AKTIV | 0-n | high | unsigned char | - | TAB_MR_RES_FAHRMODUS | - | - | - | Aktiver Fahrmodus |

### RES_0XE06C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LIVE_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | -90.0 | Angezeigter Schräglagen-Live-Wert |
| STAT_MAX_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | -90.0 | Angezeigter Schräglagen-Max-Wert |

### RES_0XE06D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LIVE_WERT | m/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Angezeigter ABS Live Wert Verzögerung |
| STAT_MAX_WERT | m/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Angezeigter ABS Max Wert Verzögerung |

### RES_0XE06E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LIVE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Angezeigter DTC Live Wert Drehmomentenreduzierung |
| STAT_MAX_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Angezeigter DTC Max Wert Drehmomentenreduzierung |

### RES_0XE083_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FERNLICHT | 0/1 | high | unsigned char | - | - | - | - | - | Zustand Fernlicht: 0 = aus, 1 = ein |

### RES_0XE09C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SZ_STECKER_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sonderzubehör Stecker |
| STAT_SZ_STECKER_STROM_WERT | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laststrom Sonderzubehör Stecker; Bereich von 0 bis 2000 mA |

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

### RES_0XE125_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_WERT | 1/min | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuell im Kombi angezeigte Drehzahl |

### RES_0XE126_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_WERT | km/h | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuell im Kombi angezeigte Geschwindigkeit |

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

### RES_0XF190_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FGNR17_WERT | - | - | string[17] | - | - | 1.0 | 1.0 | 0.0 | 17-Stellige Fahrgestellnummer |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SELBSTTEST_DISPLAY | 0xB004 | - | Display Selbsttest | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xB004_R |
| GWSZ_ABSOLUT_WERT | 0xD10D | - | Aboluter Gesamtwegstreckenzähler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD10D_D |
| GWSZ_RESET | 0xD114 | STAT_GWSZ_OFFSET_WERT | Rueckgabe des Anzeigeoffset des GWSZ. | km | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GWSZ_ANZEIGE_WERT | 0xD122 | STAT_GWSZ_ANZEIGE_WERT | Aufruf liefert den angezeigten Gesamtwegstreckenzähler | km | - | - | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HUPE_MR | 0xE010 | - | Hupe | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE010_D | RES_0xE010_D |
| WECKLEITUNG | 0xE012 | - | Ansteuerung Weckleitung | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE012_D | RES_0xE012_D |
| FOTOSENSOR | 0xE03E | STAT_FOTOSENSOR_WERT | Helligkeitswert Fotosensor | % | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DREHZAHLMESSER | 0xE03F | - | Ansteuerung Drehzahlmesser | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE03F_D | RES_0xE03F_D |
| GRIFFHEIZUNG_STROM | 0xE05D | - | Stromwerte Griffheizungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE05D_D |
| GRIFFHEIZUNG_PWM | 0xE05E | - | PWM Ansteuerung Griffheizung | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE05E_D | RES_0xE05E_D |
| RUECKLICHT | 0xE05F | - | Ansteuerung Rücklicht | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE05F_D | RES_0xE05F_D |
| STANDLICHT | 0xE060 | - | Ansteuerung Standlicht | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE060_D | RES_0xE060_D |
| BLINKER | 0xE061 | - | Ansteuerung Blinker | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE061_D | RES_0xE061_D |
| BLINKER_ANALOG | 0xE062 | - | Stromwerte Blinker | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE062_D |
| ABBLENDLICHT | 0xE063 | - | Ansteuerung Abblendlicht | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE063_D | RES_0xE063_D |
| TANKGEBER | 0xE064 | - | Ansteuerung Tankgeber | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE064_D | RES_0xE064_D |
| LAMPENDIAGNOSE | 0xE065 | STAT_LAMPENDIAGNOSE | Status Lampendiagnose: 0 = nicht aktiv, 1 = aktiv | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LCD_TESTMUSTER | 0xE066 | - | Testmuster LCD ein/aus | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE066_D | RES_0xE066_D |
| KONTROLLLEUCHTEN | 0xE067 | - | Ansteuerung Kontrollleuchten | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE067_D | RES_0xE067_D |
| HELLIGKEIT_INSTRUMENTE | 0xE068 | - | Ansteuerung Instrumentenhelligkeit | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE068_D | RES_0xE068_D |
| ANSAUGLUFTTEMPERATUR | 0xE069 | - | Anzeige Ansauglufttemperatur | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE069_D | RES_0xE069_D |
| MOTORTEMPERATUR | 0xE06A | - | Anzeige Motortemperatur | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE06A_D | RES_0xE06A_D |
| FAHRMODUS | 0xE06B | - | Ansteuerung Fahrmodusanzeige | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE06B_D | RES_0xE06B_D |
| SCHRAEGLAGE_ANZEIGE | 0xE06C | - | Ansteuerung Schräglagenanzeige | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE06C_D | RES_0xE06C_D |
| ABS_LIVE_ANZEIGE | 0xE06D | - | Ansteuerung ABS Live Anzeige | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE06D_D | RES_0xE06D_D |
| DTC_LIVE_ANZEIGE | 0xE06E | - | Ansteuerung DTC Live Anzeige | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE06E_D | RES_0xE06E_D |
| HBG_VOL_RESET | 0xE080 | - | Setzt die internen Variablen für die Berechnung der Tankanzeige zurück | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE080_D | - |
| FERNLICHT | 0xE083 | - | Fernlicht ein/aus | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE083_D | RES_0xE083_D |
| TASTER_GRIFFHEIZUNG | 0xE084 | STAT_TASTER | Zustand Taster: 0 = aus, 1 = ein | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| SZ_STECKER_MR | 0xE09C | - | Sonderzubehör Stecker | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE09C_D | RES_0xE09C_D |
| PRODUKTIONSMODE_MR | 0xE0FF | - | Produktionsmode interne Vorgabe RDZ MDZ | - | - | - | - | - | - | - | - | - | 2F | - | - |
| WEGSTRECKENEINHEIT_MR | 0xE117 | STAT_EINHEIT | Im Kombi dargestellte Wegstreckeneinheit: 0 = km, 1 = Meilen | 0/1 | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GWSZ_MR | 0xE119 | - | Gesamtwegstreckenzähler Motorrad | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE119_D | RES_0xE119_D |
| LIN_SCHALTERBLOCK_LINKS_MR | 0xE120 | - | Status der Tasten am linken Lenkerschalterblock (dieser ist über LIN am Kombi angeschlossen) nicht gedrückt/ gedrückt | bit | - | - | BITFIELD | RES_0xE120_D | - | - | - | - | 22 | - | - |
| LIN_MMC_BEDIENUNG_MR | 0xE121 | - | Status MMC-Bedienung (MMC ist über LIN am Kombi angeschlossen) links- / rechts gedrückt;  Position der AUF-/AB-Bewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE121_D |
| DREHZAHLANZEIGE_MR | 0xE125 | - | Ansteuern und Auslesen Drehzahl für Drehzahlmesser-Zeiger in U/min | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE125_D | RES_0xE125_D |
| GESCHWINDIGKEIT_ANZEIGE_MR | 0xE126 | - | Ansteuern und Auslesen Geschwindigkeit für Tacho-Zeiger in km/h | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE126_D | RES_0xE126_D |
| UHRZEIT_DATUM_MR | 0xE12B | - | Uhrzeit und Datum im Kombi | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12B_D | RES_0xE12B_D |
| SERVICE_DATUM_MR | 0xE12C | - | Auslesen und Schreiben der bis zum nächsten fälligen Service verbleibende Zeit | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE12C_D | RES_0xE12C_D |
| SERVICE_RESTWEG_MR | 0xE12D | - | Auslesen und Schreiben der bis zum nächsten fälligen Service verbleibende Weg | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12D_D | RES_0xE12D_D |
| BATTERIESPANNUNG_MR | 0xE142 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| VIN | 0xF190 | - | Fahrgestellnummer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xF190_D | RES_0xF190_D |

### TAB_MMC_BED

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Bedienung |
| 0x01 | Betätigung nach links |
| 0x02 | Betätigung nach rechts |
| 0xFF | nicht definiert |

### TAB_MR_ARG_FAHRMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Display ausgegraut |
| 0x01 | Modus 1 RAIN |
| 0x02 | Modus 2 SPORT |
| 0x03 | Modus 3 RACE |
| 0x04 | Modus 4 SLICK |
| 0x05 | Modus 5 ENDURO PRO |

### TAB_MR_ARG_FAHRMODUS_MENUE

| WERT | TEXT |
| --- | --- |
| 0x00 | Menüauswahl aus |
| 0x1F | Menüauswahl ein |

### TAB_MR_FAHRMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Display ausgegraut |
| 0x01 | Modus 1: RAIN |
| 0x02 | Modus 2: K46: SPORT \| K48, K17: ROAD |
| 0x03 | Modus 3: K46: RACE \| K48: DYNAMIC \| K17: ECO |
| 0x04 | Modus 4: K46: SLICK \| K50: ENDURO \| K17: CITY |
| 0x05 | Modus 5: K50: ENDURO PRO \| K17: SAIL |
| 0xFF | Ungültig |

### TAB_MR_FAHRMODUS_MENUE

| WERT | TEXT |
| --- | --- |
| 0x00 | Menüauswahl aus |
| 0x1F | Menüauswahl ein |
| 0xFF | Ungültig |

### TAB_MR_KONTROLLLEUCHTEN_K46

| WERT | TEXT |
| --- | --- |
| 0x00 | Warnlampe gelb |
| 0x01 | Warnlampe rot |
| 0x02 | Neutralganglampe |
| 0x03 | ABS Lampe |
| 0x04 | Blinker rechts |
| 0x05 | Reservelampe/Tagfahrlicht |
| 0x06 | Fernlicht |
| 0x07 | Blinker links |
| 0x08 | DWA LED |
| 0x09 | ASC Lampe |
| 0x0A | Motorlampe |
| 0x0B | Lampe BESTE RUNDE/Zusatzscheinwerfer |
| 0x0C | Lampe Tempomat |
| 0x0D | Lampe Schaltblitz |

### TAB_MR_RES_FAHRMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Display ausgegraut |
| 0x01 | Modus 1 RAIN |
| 0x02 | Modus 2 SPORT |
| 0x03 | Modus 3 RACE |
| 0x04 | Modus 4 SLICK |
| 0x05 | Modus 5 ENDURO PRO |
| 0xFF | Ungültig |

### TAB_MR_RES_FAHRMODUS_MENUE

| WERT | TEXT |
| --- | --- |
| 0x00 | Menüauswahl aus |
| 0x1F | Menüauswahl ein |
| 0xFF | Ungültig |

### TAB_MR_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Routine läuft |
| 0x01 | Routine abgebrochen |
| 0x02 | Routine beendet |
| 0xFF | unbekannt |
