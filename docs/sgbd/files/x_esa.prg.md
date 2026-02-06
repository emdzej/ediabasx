# x_esa.prg

## General

|  |  |
| --- | --- |
| File | x_esa.prg |
| Type | PRG |
| Jobs | 27 |
| Tables | 47 |
| Origin | BMW UX-EE-2 Dreifke |
| Revision | 2.000 |
| Author | BMW UX-EE-1 Kiesewetter, BMW UX-EE-2 Dreifke, Dräxlmaier UX-EE- |
| ECU Comment | ESA_MOTBK_2010 [3] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektrische Federbeinverstellung |  |  |
| ORIGIN | string | BMW UX-EE-2 Dreifke |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | BMW UX-EE-1 Kiesewetter, BMW UX-EE-2 Dreifke, Dräxlmaier UX-EE- |  |  |
| COMMENT | string | ESA_MOTBK_2010 [3] |  |  |
| PACKAGE | string | 1.17 |  |  |
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

_No arguments._

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
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
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
| 0xA0 | ENTD | Entertainment Daten |
| 0xA1 | NAVD | Navigation Daten |
| 0xA2 | FCFN | Freischaltcode Funktion |
| 0xC0 | SWUP | Software-Update Package |
| 0xC1 | SWIP | Index Software-Update Package |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x480DC5 | Unterspannung Batterie | 1 |
| 0x480D9B | Sensor, Federverstellung vorn: elektrischer Fehler | 0 |
| 0x480D8A | Schrittmotor, Druckstufe hinten: Kurzschluss | 0 |
| 0xD71424 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD71422 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0x480DB4 | Motor, Federverstellung hinten:Übertemperatur | 0 |
| 0x480DA0 | Schrittmotor, Druckstufe vorn: Übertemperatur | 0 |
| 0xD71426 | CAN KOMBI Nachricht Kombidaten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0x480DB7 | Federverstellung hinten: Position nicht erreicht | 0 |
| 0x480D95 | Schrittmotor, Zugstufe hinten: Leitungsunterbrechung | 0 |
| 0x480DC3 | Ueberspannung Batterie | 1 |
| 0x480DAA | Schrittmotor, Zugstufe vorn: Übertemperatur | 0 |
| 0xD7142A | CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0x480D87 | Codierung : Codierdatenübertragungsfehler | 0 |
| 0x480D96 | Schrittmotor, Zugstufe hinten: Übertemperatur | 0 |
| 0x480D8B | Schrittmotor, Druckstufe hinten: Leitungsunterbrechung | 0 |
| 0x480D9F | Schrittmotor, Druckstufe vorn: Leitungsunterbrechung | 0 |
| 0x480DB3 | Motor, Federverstellung hinten: Leitungsunterbrechung | 0 |
| 0x480D9E | Schrittmotor, Druckstufe vorn: Kurzschluss | 0 |
| 0x480DD2 | DC-Motor hinten:Vollkalibrierung fehlgeschlagen | 0 |
| 0x480DC1 | Federverstellung vorn: Position nicht erreicht | 0 |
| 0xD7141C | CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0x480DBC | Motor, Federverstellung vorn: Kurzschluss | 0 |
| 0x480DB6 | Sensor, Federverstellung hinten: elektrischer Fehler | 0 |
| 0x480DBE | Motor, Federverstellung vorn: Übertemperatur | 0 |
| 0x480D86 | Codierung : Codiersignaturfehler | 0 |
| 0x023800 | Energiesparmode  aktiv | 0 |
| 0x480DB2 | Motor, Federverstellung hinten: Kurzschluss | 0 |
| 0xD7045F | CAN Bus Off | 1 |
| 0x480DC9 | Hardwarefehler Steuergeraet | 0 |
| 0x480D8C | Schrittmotor, Druckstufe hinten: Übertemperatur | 0 |
| 0x480D94 | Schrittmotor, Zugstufe hinten: Kurzschluss | 0 |
| 0xD7143A | CAN BCO Nachricht Status_Grund_Funktion_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0x480DA8 | Schrittmotor, Zugstufe vorn: Kurzschluss | 0 |
| 0x480DA9 | Schrittmotor, Zugstufe vorn: Leitungsunterbrechung | 0 |
| 0x480DD1 | DC-Motor vorne: Vollkalibrierung fehlgeschlagen | 0 |
| 0x480D83 | Codierung : Steuergerät ist nicht codiert | 0 |
| 0x480DBD | Motor, Federverstellung vorn: Leitungsunterbrechung | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | ja |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | STAT_KM_STAND | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1701 | Systemzeit | s | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4000 | Fahrzeuggeschwindigkeit | km/h | High | unsigned int | - | - | - | - |
| 0x4001 | Motordrehzahl | 1/min | High | unsigned int | - | 5.0 | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xD71425 | SEK_CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD7143B | SEK_CAN BCO Nachricht Status_Grund_Funktion_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xD7142B | SEK_CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0x480D80 | SEK Ueberspannung Batterie | 1 |
| 0xD7141D | SEK_CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD71423 | SEK_CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0x480D81 | SEK Unterspannung Batterie | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ESA_DC_MOTOR_PWM_MR | 0xE13F | - | ESA-DC-Motor Motorrad | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE13F |
| ESA_HALLSENSOR_MR | 0xE140 | - | Status Hallsensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE140 |
| ESA_TEMPERATURMODELL_MR | 0xE141 | - | Status Temperaturmodell | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE141 |
| BATTERIESPANNUNG_MR | 0xE142 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | - | - | unsigned char | - | - | 10.0 | - | - | 22 | - | - |
| ESA_IST_POSITION_MR | 0xE143 | - | Ist-Position DC Motoren Federbein und Schrittmotoren Dämpfung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE143 |
| ESA_FAHREREINSTELLUNG_MR | 0xB088 | - | Steuern und Statusabfrage Fahrereinstellung: Federrate und Daempfung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB088 | RES_0xB088 |
| ESA_FEDERBEIN_MR | 0xB089 | - | Steuern Federvorspannung relativ | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB089 | RES_0xB089 |
| ESA_DAEMPFUNG_MR | 0xB08A | - | Steuern Schrittmotoren Dämpfung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB08A | RES_0xB08A |
| ESA_KALIBRIERUNG_FEDERBEIN_MR | 0xB08B | - | Kalibrierung Federbein vorne und hinten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB08B | RES_0xB08B |

### TAB_RICHTUNG_FEDERBEIN

| WERT | TEXT |
| --- | --- |
| 0x00 | entspannen |
| 0x01 | spannen |

### TAB_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Druckstufe vorne |
| 0x01 | Zugstufe vorne |
| 0x02 | Druckstufe hinten |
| 0x03 | Zugstufe hinten |
| 0xFF | ungueltig |

### RES_0XE13F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DC_MOT_VO_PWM_WERT | % | - | int | - | - | - | 2.0 | - | PWM-Wert vorzeichenbehaftet in %, mit dem der DC-Motor vorne betrieben wird, Wertebereich 0% bis 100%, 0%  bedeutet aus |
| STAT_DC_MOT_HI_PWM_WERT | % | - | int | - | - | - | 2.0 | - | PWM-Wert vorzeichenbehaftet in %, mit dem der DC-Motor hinten betrieben wird, Wertebereich 0% bis 100%, 0% bedeutet aus |
| STAT_DC_MOT_VO | 0/1 | - | unsigned char | - | - | - | - | - | Aktueller Status der beiden digitalen Ausgänge für den DC Motor vorne - 0= beide aus, 1= ein Ausgang liefert Spannung |
| STAT_DC_MOT_HI | 0/1 | - | unsigned char | - | - | - | - | - | Aktueller Status der beiden digitalen Ausgänge für den DC Motor hinten bedeutet 0 = beide aus, 1 = ein Ausgang liefert Spannung |

### RES_0XE140

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL_SPANNUNG_VORNE_WERT | V | - | unsigned char | - | - | - | 10.0 | - | Spannung Hall-Sensor-Signal, Federbein vorne |
| STAT_HALL_SPANNUNG_HINTEN_WERT | V | - | unsigned char | - | - | - | 10.0 | - | Spannung Hall-Sensor-Signal, Federbein hinten |
| STAT_HALL_VORNE_PEGEL | 0/1 | - | unsigned char | - | - | - | - | - | Status Hall-Sensor-Signal, Federbein vorne 0 = Low-Pegel, 1 = High-Pegel |
| STAT_HALL_HINTEN_PEGEL | 0/1 | - | unsigned char | - | - | - | - | - | Status Hall-Sensor-Signal, Federbein hinten 0 = Low-Pegel, 1 = High-Pegell |
| STAT_HALL_VORNE_VERBAUT | 0/1 | - | unsigned char | - | - | - | - | - | 1 = Hallsensor vorne verbaut, 0 = Hallsensor vorne nicht verbaut |
| STAT_HALL_HINTEN_VERBAUT | 0/1 | - | unsigned char | - | - | - | - | - | 1 = Hallsensor hinten verbaut, 0 = Hallsensor hinten nicht verbaut |

### RES_0XE141

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SF_TEMPERATUR_WERT | °C | - | unsigned int | - | - | - | - | - | Temperatur laut Temperaturmodell, Federbein vorne |
| STAT_SR_TEMPERATUR_WERT | °C | - | unsigned int | - | - | - | 2.0 | -40.0 | Temperatur laut Temperaturmodell, Federbein hinten |
| STAT_SF_TEMP | 0/1 | - | unsigned char | - | - | - | - | - | Status Uebertemperatur, Federbein vorne 0 == Grenzwert nicht ueberschritten, Verstellung Federbein möglich 1 == Grenzwert überschritten, Verstellung Federbein nicht möglich |
| STAT_SR_TEMP | 0/1 | - | unsigned char | - | - | - | - | - | Status Uebertemperatur, Federbein hinten 0 == Grenzwert nicht ueberschritten, Verstellung Federbein möglich 1 == Grenzwert überschritten, Verstellung Federbein nicht möglich |

### RES_0XE143

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SF_IST_POS_WERT | Inkremente | - | int | - | - | - | - | - | Ist-Position DC Motor vorne - Inkremente = gezaehlte Low-High-Flanken und High-Low-Flanken |
| STAT_FC_IST_POS_WERT | Schritte | - | int | - | - | - | - | - | Ist-Position, Schrittmotor vorne Druckstufe - Schritte sind Halbschritte |
| STAT_FR_IST_POS_WERT | Schritte | - | int | - | - | - | - | - | Ist-Position Schrittmotor Zugstufe vorne - Schritte sind Halbschritte |
| STAT_SR_IST_POS_WERT | Inkremente | - | int | - | - | - | - | - | Ist-Position DC Motor hinten - Inkremente = gezaehlte Low-High-Flanken und High-Low-Flanken |
| STAT_RC_IST_POS_WERT | Schritte | - | int | - | - | - | - | - | Ist-Position Schrittmotor hinten Druckstufe - Schritte sind Halbschritte |
| STAT_RR_IST_POS_WERT | Schritte | - | int | - | - | - | - | - | Ist-Position Schrittmotor hinten Zugstufe - Schritte sind Halbschritte |

### RES_0XB088

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ESA_FEDERRATE | - | - | + | 0-n | - | unsigned char | - | TAB_FEDERRATE | - | - | - | Status ESA Federrate 0x00 == Verstellung: Stufe wird eingestellt; 0x01 == E: Einstellung Einzelfahrer; 0x02 == EB: Einstellung Einzelfahrer + Beladung; 0x03 == SO: Einstellung Soziusbetrieb; 0x04 == CC1: Einstellung Huegel; 0x05 == CC2: Einstellung Berg |
| STAT_ESA_DAEMPFUNG | - | - | + | 0-n | - | unsigned char | - | TAB_DAEMPFUNG | - | - | - | Status ESA Daempfung: 0x00 == Verstellung: Daempfung wird eingestellt 0x01 == C: Einstellung Comfort 0x02 == N: Einstellung Normal 0x03 == S: Einstellung Sport |
| STAT_ESA_SG | - | - | + | 0-n | - | unsigned char | - | TAB_ESA_SG | - | - | - | Status ESA Steuergerät |

### ARG_0XB088

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ESA_FEDERRATE | + | - | 0-n | - | unsigned char | - | TAB_FEDERRATE_ARG | - | - | - | - | - | Steuern ESA Federrate: 0x01 == E: Einstellung Einzelfahrer; 0x02 == EB: Einstellung Einzelfahrer + Beladung; 0x03 == SO: Einstellung Soziusbetrieb; 0x04 == CC1: Einstellung Huegel; 0x05 == CC2: Einstellung Berg |
| ESA_DAEMPFUNG | + | - | 0-n | - | unsigned char | - | TAB_DAEMPFUNG_ARG | - | - | - | - | - | Steuern ESA Daempfung: 0x01 == C: Einstellung Comfort 0x02 == N: Einstellung Normal 0x03 == S: Einstellung Sport |

### TAB_FEDERRATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Verstellung laeuft |
| 0x01 | E |
| 0x02 | EB |
| 0x03 | SO |
| 0x04 | CC1 |
| 0x05 | CC2 |
| 0xFF | undefiniert |

### TAB_DAEMPFUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Verstellung laeuft |
| 0x01 | C |
| 0x02 | N |
| 0x03 | S |
| 0xFF | undefiniert |

### TAB_ESA_SG

| WERT | TEXT |
| --- | --- |
| 0x00 | reserviert |
| 0x01 | ESA in Ordnung |
| 0x02 | ESA defekt: Systemfehler vorhanden |
| 0xFF | undefiniert |

### TAB_FEDERRATE_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | E |
| 0x02 | EB |
| 0x03 | SO |
| 0x04 | CC1 |
| 0x05 | CC2 |

### TAB_DAEMPFUNG_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | C |
| 0x02 | N |
| 0x03 | S |

### RES_0XB089

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SF_WERT | - | - | + | Schritte | - | int | - | - | - | - | - | Ist-Position DC Motor vorne (Spring front) |
| STAT_SR_WERT | - | - | + | Schritte | - | int | - | - | - | - | - | Ist-Position DC Motor hinten (Spring rear) |

### ARG_0XB089

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DC_MOTOR | + | - | 0-n | - | unsigned char | - | TAB_DC_MOTOR | - | - | - | - | - | Auswahl des DC Motor, der verstellt werden soll:  0x00 == Federverstellung vorne; 0x01 ==  Federverstellung hinten |
| RICHTUNG_DC | + | - | 0-n | - | unsigned char | - | TAB_MR_DREHRICHTUNG | - | - | - | - | - | Verstellrichtung: 0x00 == Feder entspannen 0x01 == Feder spannen |
| RELATIVWERT | + | - | Inkremente | - | int | - | - | - | - | - | 0.0 | 6000.0 | Übergabewert Verstellweg relativ in Inkrementen des Hall-Sensor-Messsystems |

### TAB_DC_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | DC-Motor vorne |
| 0x01 | DC-Motor hinten |

### TAB_MR_DREHRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | entspannen |
| 0x01 | spannen |

### RES_0XB08A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FC_WERT | - | - | + | Schritte | - | int | - | - | - | - | - | Ist-Position, Schrittmotor vorne Druckstufe (front compression) |
| STAT_FR_WERT | - | - | + | Schritte | - | int | - | - | - | - | - | Ist-Position, Schrittmotor, Zugstufe vorne |
| STAT_RC_WERT | - | - | + | Schritte | - | int | - | - | - | - | - | Ist-Position Schrittmotor hinten Druckstufe (rear compression |
| STAT_RR_WERT | - | - | + | Schritte | - | int | - | - | - | - | - | Ist-Position Schrittmotor hinten Zugstufe (rear rebound) |

### ARG_0XB08A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHRITTMOTOR | + | - | 0-n | - | unsigned char | - | TAB_MOTOR_ARG | - | - | - | - | - | Auswahl des Schrittmotor, der verstellt werden soll:  0x00 == Druckstufe vorne FC (=front compression); 0x01 == Zugstufe vorne FR (=front rebound);  0x02 == Druckstufe hinten RC (=rear compression); 0x03 == Zugstufe hinten RR (=rear rebound) |
| RICHTUNG_DAEMPFUNG | + | - | 0-n | - | unsigned char | - | TAB_RICHTUNG_DAEMPFUNG | - | - | - | - | - | Richtung, in der der Schrittmotor bewegt werden soll: 0x00 == oeffnen 0x01 == schließen |
| RELATIVWERT | + | - | Schritte | - | int | - | - | - | - | - | 0.0 | 65535.0 | Übergabewert Verstellweg relativ in Schritten |

### TAB_MOTOR_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | Druckstufe vorne |
| 0x01 | Zugstufe vorne |
| 0x02 | Druckstufe hinten |
| 0x03 | Zugstufe hinten |

### TAB_RICHTUNG_DAEMPFUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | oeffnen |
| 0x01 | schließen |

### RES_0XB08B

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ESA_VOLLKALIBRIERUNG_SF | - | - | + | 0-n | - | unsigned char | - | TAB_MR_ESA_STATUS_KALIBRIERUNG | - | - | - | Status Vollkalibrierung DC-Motor vorne (spring front) |
| STAT_ESA_VOLLKALIBRIERUNG_SR | - | - | + | 0-n | - | unsigned char | - | TAB_MR_ESA_STATUS_KALIBRIERUNG | - | - | - | Status Vollkalibrierung hinten (spring rear) |
| STAT_ESA_REKALIBRIERUNG_SF | - | - | + | 0-n | - | unsigned char | - | TAB_MR_ESA_STATUS_KALIBRIERUNG | - | - | - | Status Rekalibrierung vorne (spring front) |
| STAT_ESA_REKALIBRIERUNG_SR | - | - | + | 0-n | - | unsigned char | - | TAB_MR_ESA_STATUS_KALIBRIERUNG | - | - | - | Status Rekalibrierung hinten (spring rear) |
| STAT_SF | - | - | + | 0-n | - | unsigned char | - | TAB_MR_ESA_STATUS_DC_MOTOR | - | - | - | Status DC-Motor vorne (Spring front) |
| STAT_FC | - | - | + | 0-n | - | unsigned char | - | TAB_MR_ESA_STATUS_STEPPER | - | - | - | Status Schrittmotor Druckstufe vorne (front compression) |
| STAT_FR | - | - | + | 0-n | - | unsigned char | - | TAB_MR_ESA_STATUS_STEPPER | - | - | - | Status Schrittmotor Zugstufe vorne (front rebound) |
| STAT_SR | - | - | + | 0-n | - | unsigned char | - | TAB_MR_ESA_STATUS_DC_MOTOR | - | - | - | Status DC Motor hinten (Spring rear) |
| STAT_RC | - | - | + | 0-n | - | unsigned char | - | TAB_MR_ESA_STATUS_STEPPER | - | - | - | Status Schrittmotor  Druckstufe hinten (Rear compression) |
| STAT_RR | - | - | + | 0-n | - | unsigned char | - | TAB_MR_ESA_STATUS_STEPPER | - | - | - | Status Schrittmotor  Zugstufe hinten (Rear rebound) |
| STAT_SF_MAX_HALL_COUNTS_WERT | - | - | + | Inkremente | - | unsigned int | - | - | - | - | - | bei der Vollkalibrierung ermittelte maximale Anzahl von Hallsensor-Impulsen von Endanschlag bis Endanschlag  (Spring front) |
| STAT_SR_MAX_HALL_COUNTS_WERT | - | - | + | Inkremente | - | unsigned int | - | - | - | - | - | bei der Vollkalibrierung ermittelte maximale Anzahl von Hallsensor-Impulsen von Endanschlag bis Endanschlag (Spring rear) |
| STAT_REKALIBRIERUNG_FC | - | - | + | 0/1 | - | unsigned char | - | - | - | - | - | Status Kalibrierung Schrittmotor vorne Druckstufe (front compression):  0 == nicht kalibriert 1 == kalibriert |
| STAT_REKALIBRIERUNG_FR | - | - | + | 0/1 | - | unsigned char | - | - | - | - | - | Status Kalibrierung Schrittmotor vorne Zugstufe (front rebound):  0 == nicht kalibriert 1 == kalibriert |
| STAT_REKALIBRIERUNG_RC | - | - | + | 0/1 | - | unsigned char | - | - | - | - | - | Status Kalibrierung Schrittmotor hinten Druckstufe (rear compression): 0 == nicht kalibriert 1 == kalibriert |
| STAT_REKALIBRIERUNG_RR | - | - | + | 0/1 | - | unsigned char | - | - | - | - | - | Status Kalibrierung Schrittmotor hinten Zugstufe (rear rebound): 0 == nicht kalibriert 1 == kalibriert |

### ARG_0XB08B

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ART_KALIBRIERUNG | + | - | 0-n | - | unsigned char | - | TAB_ART_KALIBRIERUNG | - | - | - | - | - | Auswahl Kalibrierung Art: 0x00 == Vollkalibrierung 0x01 == Rekalibrierung |
| AUSWAHL_FEDERBEIN | + | - | 0-n | - | unsigned char | - | TAB_AUSWAHL_FEDERBEIN | - | - | - | - | - | Auswahl zu kalibrierendes Federbein: 0x00 == v: Kalibrierung Federbein vorne 0x01 == h: Kalibrierung Federbein hinten 0x02 == vh: Kalibrierung Federbein vorne und hinten |

### TAB_ART_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Vollkalibrierung |
| 0x01 | Rekalibrierung |

### TAB_AUSWAHL_FEDERBEIN

| WERT | TEXT |
| --- | --- |
| 0x01 | vorne |
| 0x02 | hinten |
| 0x03 | vorne und hinten |

### TAB_MR_ESA_STATUS_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierung Federbein laeuft |
| 0x01 | Fehler Kalibrierung |
| 0x02 | Kalibrierung Federbein erfolgreich |
| 0xFF | ungültig |

### TAB_MR_ESA_STATUS_DC_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Verstellung zur Soll-Position laeuft |
| 0x01 | Wiederholter Versuch aktiv |
| 0x02 | Soll-Position erreicht |
| 0x03 | Motorposiition nicht im Zielfenster |
| 0x04 | Ersatzposition: Abgestimmtes Fahrwerk bei Fehler |
| 0x05 | Motor nicht verbaut |
| 0x06 | Motor deaktiviert |
| 0x07 | Motor zu heiss |
| 0x08 | Fehler vorhanden |
| 0xFF | ungültig |

### TAB_MR_ESA_STATUS_STEPPER

| WERT | TEXT |
| --- | --- |
| 0x00 | Verstellung zur Soll-Position laeuft |
| 0x01 | Soll-Position erreicht |
| 0x02 | Motor nicht verbaut |
| 0x03 | Motor deaktiviert |
| 0x04 | Fehler vorhanden |
| 0xFF | ungültig |
