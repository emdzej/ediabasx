# x_asw.prg

## General

|  |  |
| --- | --- |
| File | x_asw.prg |
| Type | PRG |
| Jobs | 25 |
| Tables | 46 |
| Origin | BMW UX-EE-3 Ernst |
| Revision | 4.000 |
| Author | BMW UX-EE-1 Kiesewetter, Dräxlmaier UX-EE-1 Rätscher |
| ECU Comment | ASW_MOTBK_2010 [3] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Aktiv_Scheinwerfer_Motorrad |  |  |
| ORIGIN | string | BMW UX-EE-3 Ernst |  |  |
| REVISION | string | 4.000 |  |  |
| AUTHOR | string | BMW UX-EE-1 Kiesewetter, Dräxlmaier UX-EE-1 Rätscher |  |  |
| COMMENT | string | ASW_MOTBK_2010 [3] |  |  |
| PACKAGE | string | 1.19 |  |  |
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
| 0x0000AF | Alfmeier |
| 0x0000B0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0x0000B1 | Omron Automotive Electronics Europe Group |
| 0x0000B2 | ASK |
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
| 0x04 | GWTB | Gateway-Tabelle |
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
| 0x48248E | Unterspannung Batterie | 1 |
| 0x482485 | Hoehenstandssensor vorn: Signal ausserhalb normalem Bereich | 0 |
| 0xD1845F | CAN Bus Off | 1 |
| 0xD19426 | CAN KOMBI Nachricht Kombidaten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0x4824A7 | Referenzlauf nicht abgeschlossen | 0 |
| 0x482488 | Spannungsversorgung: Überspannung analoge Höhenstandssensoren HSS | 0 |
| 0xD19424 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0x48249C | NVM_E_READ_FAILED | 0 |
| 0x48248B | fehlende Nullpunkt Kalibrierung | 0 |
| 0xD1942A | CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0x4824A4 | Codierung : Codierdatenübertragungsfehler | 0 |
| 0x4824A3 | Codierung : Codiersignaturfehler | 0 |
| 0x482480 | vertikaler Steppermotor (LWR) - elektrisch | 1 |
| 0x4824A5 | Codierung : falsches Fahrzeug | 0 |
| 0x48249F | NVM_E_CONTROL_FAILED | 0 |
| 0x482495 | Referenzlauf nicht in Ordnung | 1 |
| 0x482489 | Spannungsversorgung: Unterspannung RWR Sensoren | 0 |
| 0x48249E | NVM_E_ERASE_FAILED | 0 |
| 0x482487 | Spannungsversorgung: Unterspannung analoge Höhenstandssensoren HSS | 0 |
| 0x48248D | SG Spannungsversorgung Kl30b unterbrochen | 1 |
| 0x4824AB | CAN-Signal Schräglage_Winkel_Motorrad_2010 ungültig | 0 |
| 0x48249D | NVM_E_READ_ALL_FAILED | 0 |
| 0x482496 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x4824AC | CAN-Signal Helligkeit_Motorrad_2010 ungültig | 0 |
| 0x482486 | Höhenstandssensor hinten: Signal ausserhalb normalem Bereich | 0 |
| 0x48248C | SG Default-Werte aktiv | 0 |
| 0x482499 | Hardwarefehler Steuergeraet | 0 |
| 0xD19420 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0x482497 | interner Temperatur Sensor Fehler | 0 |
| 0x48249B | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x482481 | horizontaler Steppermotor (RWR) - elektrisch | 0 |
| 0x4824AA | beide CAN-Signale der Radgeschwindigkeiten ungültig | 0 |
| 0x48248F | Ueberspannung Batterie | 1 |
| 0x4824A9 | CAN-Signal Drehzahl_Motor_Motorrad_2010 ungültig | 0 |
| 0x482492 | SG Übertemperatur | 0 |
| 0x482498 | NVM_E_WRITE_FAILED | 0 |
| 0x482494 | Motor Übertemperatur Fehler | 0 |
| 0x022200 | Energiesparmode  aktiv | 0 |
| 0x4824A2 | Codierung : Steuergerät ist nicht codiert | 0 |
| 0x4824A6 | Codierung : unplausible Daten während Transaktion | 0 |
| 0x482484 | horizontaler Steppermotor (RWR) - klemmt | 0 |
| 0xD19422 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0x4824A8 | CAN-Signal Status_Klemme_50_Motorrad_2010 ungültig | 0 |
| 0x482482 | RWR Sensor Position defekt | 0 |
| 0x482483 | vertikaler Steppermotor (LWR) - klemmt | 0 |
| 0x48248A | Spannungsversorgung: Überspannung RWR Sensoren | 0 |
| 0xD1941C | CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### DTCBEREICHE

| DTC-TYP | MINIMALWERT | MAXIMALWERT | BESCHREIBUNG |
| --- | --- | --- | --- |
| AllgemeinerDTC | 020000 | 02FFFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |
| SystembusDTC | D18401 | D1840A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D1841F | D1843E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D18487 | D1848F | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930000 | 930011 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D1850B | D18514 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D1843F | D18449 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D1845F | D18468 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D18469 | D18472 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930030 | 930055 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D18473 | D1847C | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D18415 | D1841E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D18501 | D1850A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D1840B | D18414 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | D1847D | D18486 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SubbusDTC | D18C00 | D193FF | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SignalDTC | D19400 | D1C3FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | D18BFF | D18BFF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | D19400 | D1C3FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| KomponentenDTC | 482480 | 4824FF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |
| KomponentenDTC | 482E80 | 482F7F | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x2001 | Motorfehler LWR | 0/1 | Low | 0xFF | TAB_MR_SIGNALSTATUS | 1.0 | 1.0 | 0.0 |
| 0x2002 | Motorfehler RWR | 0/1 | Low | 0xFF | TAB_MR_SIGNALSTATUS | 1.0 | 1.0 | 0.0 |
| 0x2003 | Sensorsignal vorne unplausibel | 0-n | Low | 0xFF | TAB_MR_SIGNALSTATUS | 1.0 | 1.0 | 0.0 |
| 0x2004 | Sensorsignal hinten unplausibel | 0-n | Low | 0xFF | TAB_MR_SIGNALSTATUS | 1.0 | 1.0 | 0.0 |
| 0x2005 | Fehlerstatus LWR | 0-n | Low | 0xFF | TAB_MR_MOTORSTATUS | 1.0 | 1.0 | 0.0 |
| 0x2006 | Fehlerstatus RWR | 0-n | Low | 0xFF | TAB_MR_MOTORSTATUS | 1.0 | 1.0 | 0.0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xD1941D | SEK_CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD1942B | SEK_CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0x482493 | Motor Übertemperatur Warnung | 0 |
| 0xD19423 | SEK_CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD19421 | SEK_CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0x482490 | SEK Ueberspannung Batterie | 1 |
| 0xD19425 | SEK_CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0x482491 | SEK Unterspannung Batterie | 1 |
| 0x4824A0 | DM_Queue_FULL | 0 |
| 0x4824A1 | DM_Queue_DELETED | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x2001 | Motorfehler LWR | 0/1 | Low | 0xFF | TAB_MR_SIGNALSTATUS | 1.0 | 1.0 | 0.0 |
| 0x2002 | Motorfehler RWR | 0/1 | Low | 0xFF | TAB_MR_SIGNALSTATUS | 1.0 | 1.0 | 0.0 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RWR_VERFAHREN_MR | 0xB080 | - | Steuern der RWR | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB080 | RES_0xB080 |
| LWR_VERFAHREN_MR | 0xB081 | - | Steuern der LWR | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB081 | RES_0xB081 |
| REFERENZLAUF_MR | 0xB082 | - | Referenzlauf RWR / LWR | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB082 | RES_0xB082 |
| LWR_HSS_KALIBRIERUNG_MR | 0xB084 | - | Kalibrierung LWR Höhenstandssensor | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xB084 |
| RWR_VERFAHREN_ABSOLUT_MR | 0xB085 | - | Verfahren des RWR über die Vorgabe eines Winkels | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB085 | RES_0xB085 |
| LWR_VERFAHREN_ABSOLUT_MR | 0xB086 | - | Verfahren des LWR über die Vorgabe eines Winkels | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB086 | RES_0xB086 |
| RWR_AKTIVIERUNG_STILLSTAND_MR | 0xB087 | - | Aktivierung RWR | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xB087 |
| LWR_SENSOR_EINGANGSWERTE_MR | 0xE132 | - | LWR Sensor Eingangswerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE132 |
| SENSOREN_VERSORGUNGSSPANNUNG_MR | 0xE135 | - | Versorgungsspannung der Sensoren in Volt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE135 |
| BATTERIESPANNUNG_MR | 0xE142 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| KLEMME_56B_SPANNUNG_MR | 0xE146 | STAT_KLEMME_56B_SPANNUNG_WERT | Spannung an Kl56b | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |

### MR_TAB_REFERENZ

| WERT | TEXT |
| --- | --- |
| 01 | Referenzlauf RWR und LWR |
| 02 | Referenzlauf RWR |
| 03 | Referenzlauf LWR |
| FF | ungueltig |

### TAB_MR_KURZSCHLUSSSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | undefiniert |
| 1 | Kurzschluss gegen Masse |
| 2 | Kurzschluss gegen Vbat |

### ARG_0XB080

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RWR | + | - | 0-n | - | unsigned char | - | TAB_MR_RWR_VERFAHREN | 1.0 | 1.0 | 0.0 | - | - | RWR Verfahren |

### ARG_0XB081

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LWR | + | - | 0-n | - | unsigned char | - | TAB_MR_LWR_VERFAHREN | 1.0 | 1.0 | 0.0 | - | - | LWR Verfahren |

### ARG_0XB082

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REFERENZ | + | - | 0-n | - | unsigned char | - | TAB_MR_REFERENZ_ASW | 1.0 | 1.0 | 0.0 | - | - | Steuern Referenzlauf |

### ARG_0XB085

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RWR_ABSOLUT_WINKEL | + | - | ° | - | int | - | - | 1000.0 | 25.0 | 0.0 | -15.0 | 15.0 | RWR Einstellen über die Eingabe eines absoluten Winkels zwischen -15° und +15° |
| RWR_ABSOLUT_GESCHWINDIGKEIT | + | - | A | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 31.0 | Geschwindigkeit, mit der der Winkel verstellt werden soll |

### ARG_0XB086

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LWR_ABSOLUT_WINKEL | + | - | ° | - | int | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 18.0 | Eingabe eines Winkels in ° zwischen 0 und 18 |
| LWR_ABSOLUT_GESCHWINDIGKEIT | + | - | A | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 7.0 | Geschwindigkeit, mit der der Winkel verstellt werden soll |

### RES_0XB080

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEWEGUNGSSTATUS | - | - | + | 0-n | - | unsigned char | - | TAB_MR_BEWEGUNGSSTATUS | 1.0 | 1.0 | 0.0 | Bewegungsstatus |
| STAT_BEWEGUNGSERGEBNIS | - | - | + | 0-n | - | unsigned char | - | TAB_MR_BEWEGUNGSERGEBNIS | 1.0 | 1.0 | 0.0 | Bewegungsergebnis |

### RES_0XB081

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEWEGUNGSSTATUS | - | - | + | 0-n | - | unsigned char | - | TAB_MR_BEWEGUNGSSTATUS | 1.0 | 1.0 | 0.0 | Bewegungsstatus |
| STAT_BEWEGUNGSERGEBNIS | - | - | + | 0-n | - | unsigned char | - | TAB_MR_BEWEGUNGSERGEBNIS | 1.0 | 1.0 | 0.0 | Bewegungsergebnis |

### RES_0XB082

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEWEGUNGSSTATUS | - | - | + | 0-n | - | unsigned char | - | TAB_MR_BEWEGUNGSSTATUS_REF | 1.0 | 1.0 | 0.0 | Bewegungsstatus |
| STAT_BEWEGUNGSERGEBNIS | - | - | + | 0-n | - | unsigned char | - | TAB_MR_BEWEGUNGSERGEBNIS | 1.0 | 1.0 | 0.0 | Bewegungsergebnis |

### RES_0XB084

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LWR_HSS_ABGLEICH | - | - | + | 0-n | high | unsigned char | - | TAB_MR_ESA_KALIBRIERUNG | 1.0 | 1.0 | 0.0 | Bewegungsergebnis |
| STAT_LWR_HSS_ABGLEICH_VORN_WERT | - | - | + | V | - | unsigned int | - | - | 5.0 | 1023.0 | 0.0 | Wert LWR Höhenstands Sensor Kalibrierung vorn |
| STAT_LWR_HSS_ABGLEICH_HINTEN_WERT | - | - | + | V | - | unsigned int | - | - | 5.0 | 1023.0 | 0.0 | Wert LWR Höhenstands Sensor Kalibrierung hinten |

### RES_0XB085

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RWR_ABSOLUT_WINKEL_WERT | - | - | + | ° | - | int | - | - | 25.0 | 1000.0 | 0.0 | RWR Rückgabewert des absoluten Winkels in ° |

### RES_0XB086

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LWR_ABSOLUT_WINKEL_WERT | - | - | + | ° | - | int | - | - | 1.0 | 100.0 | 0.0 | LWR eingestellter Winkel in ° zwischen 0 und 18° |

### RES_0XB087

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RWR_AKTIVIERUNG_STILLSTAND | - | - | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktivierungsergebnis 0 in Ordnung 1 fehlgeschlagen |

### RES_0XE132

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LWR_SENSOR_NIVEAU_VORNE_WERT | V | - | unsigned int | - | - | 5.0 | 1023.0 | 0.0 | LWR Sensor Stand vorne |
| STAT_LWR_SENSOR_NIVEAU_HINTEN_WERT | V | - | unsigned int | - | - | 5.0 | 1023.0 | 0.0 | LWR Sensor Stand hinten |

### RES_0XE135

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACHS_SENSOR_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Wert der Versorgungsspannung an den Höhenstands-Sensoren |
| STAT_KL_SENSOR_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Wert der Versorgungsspannung an dem Referenz-Sensoren für den Rollwinkelausgleich |

### TAB_MR_RWR_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Verfahren in Position Max |
| 0x01 | Verfahren in Position 0 |
| 0x02 | Verfahren in Position Min |
| 0x03 | Verfahren schrittweise rechstläufig |
| 0x04 | Verfahren schrittweise linksläufig |

### TAB_MR_REFERENZ_ASW

| WERT | TEXT |
| --- | --- |
| 0x01 | Referenzlauf RWR und LWR |
| 0x02 | Referenzlauf RWR |
| 0x03 | Referenzlauf LWR |

### TAB_MR_BEWEGUNGSSTATUS_REF

| WERT | TEXT |
| --- | --- |
| 0x00 | LWR Motor verfährt |
| 0x01 | LWR Motor Anwender Eingabe abgebrochen |
| 0x02 | LWR Motor Ausfall |
| 0x03 | LWR Motor Prozess abgeschlossen |
| 0x04 | RWR Motor verfährt |
| 0x05 | RWR Motor Anwender Eingabe abgebrochen |
| 0x06 | RWR Motor Ausfall |
| 0x07 | RWR Motor Prozess abgeschlossen |
| 0x08 | Motoren Prozess abgeschlossen |
| 0x09 | LWR Motor Prozess abgeschlossenRWR Motor ausgefallen |
| 0x0A | LWR Motor ausgefallenRWR Motor Prozess abgeschlossen |
| 0x0B | LWR Motor ausgefallenRWR Motor ausgefallen |
| 0xFF | undefinierter Zustand |

### TAB_MR_MOTORSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | undefiniert |
| 1 | anderer Fehler (interner Referenzstromfehler) |
| 2 | offener Ausgang (fehlende Last, Open Load) |
| 3 | Übertemperaturabschaltung |
| 4 | Überspannung |
| 5 | Unterspannung |
| 6 | Überstrom |

### TAB_MR_LWR_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Verfahren in Position Max |
| 0x01 | Verfahren in Position 0 |
| 0x02 | Verfahren in Postition Min |

### TAB_MR_BEWEGUNGSERGEBNIS

| WERT | TEXT |
| --- | --- |
| 0x00 | Verfahren in Ordnung |
| 0x01 | Temperatur nicht im zulässigen Bereich |
| 0x02 | Spannung nicht im zulässigen Bereich |
| 0x03 | mechanische Blockierung |
| 0xFF | anderer Grund |

### TAB_MR_BEWEGUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor verfährt |
| 0x01 | Motor Anwender Eingabe abgebrochen |
| 0x02 | Motor Ausfall |
| 0x03 | Motor Prozess abgeschlossen |
| 0xFF | undefinierter Zustand |

### TAB_MR_SIGNALSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | undefiniert |
| 1 | Leitungsunterbrechung oder Kurzschluss gegen Masse |
| 2 | Kurzschluss gegen Vbat |

### TAB_MR_ESA_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Verfahren in Ordnung |
| 0x01 | Sensorwert Vorne nicht im zulässigen Bereich |
| 0x02 | Sensorwert Hinten nicht im zulässigen Bereich |
| 0x03 | Sensorwert Vorne und Hinten nicht im zulässigen Bereich |
| 0x04 | anderer Grund |
| 0xFF | ungueltig |
