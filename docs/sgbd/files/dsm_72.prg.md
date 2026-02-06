# dsm_72.prg

## General

|  |  |
| --- | --- |
| File | dsm_72.prg |
| Type | PRG |
| Jobs | 21 |
| Tables | 28 |
| Origin | BMW EA_514 Blass |
| Revision | 2.103 |
| Author | ESG_GmbH EA-514 Palm, TietoEnator AMS Wegener, TietoEnator AMS |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Direct Select Module (Parksperrensteuergerät) |  |  |
| ORIGIN | string | BMW EA_514 Blass |  |  |
| REVISION | string | 2.103 |  |  |
| AUTHOR | string | ESG_GmbH EA-514 Palm, TietoEnator AMS Wegener, TietoEnator AMS  |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.07 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $02 ReadDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

_No arguments._

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

### _CHECK_ECU_LIVES

Sends a telegramm and checks for an answer

_No arguments._

### _TEL_ROH

Ausführen eines Telegramms nur mit Übergabe der Daten ignoriert Leerzeichen Format 001122 ....

| Name | Type | Description |
| --- | --- | --- |
| TELEGRAMMEINGABE | binary | Daten ohne Header Format 00 11 22 .... |

### STATUS_DSM_PARKPOSITION

StatusDSMParkPositiondaten UDS  : $22   ReadDataByIdentifier UDS  : $3F31 Sub-Parameter SGBD-Index Modus: Default

_No arguments._

### STATUS_DSM_NOTPFAD

StausDSMNotpfaddaten UDS  : $22   ReadDataByIdentifier UDS  : $3F33 Sub-Parameter SGBD-Index Modus: Default

_No arguments._

### STATUS_DSM

StausDSMdaten UDS  : $22   ReadDataByIdentifier UDS  : $3F35 Sub-Parameter SGBD-Index Modus: Default

_No arguments._

### STATUS_DSM_FASTA

StausDSMFasta UDS  : $22   ReadDataByIdentifier UDS  : $3F37 Sub-Parameter SGBD-Index Modus: Default

_No arguments._

### SERIENNUMMER_LESEN

Seriennummer des Steuergeraets UDS  : $22   ReadDataByIdentifier UDS  : $F18C Sub-Parameter ECUSerialNumber Modus: Default

_No arguments._

### FS_LESEN_DETAIL

Fehlerspeicher lesen (einzelner Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $06 reportDTCExtendedDataRecordByDTCNumber Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Fehlercode |

### IDENT

Identdaten UDS  : $22   ReadDataByIdentifier UDS  : $3F30 Sub-Parameter SGBD-Index Modus: Default

_No arguments._

### AIF_LESEN

Auslesen des Anwender Informations Feldes Standard Flashjob Modus   : Default

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
| 0x40 | ECUEOL | ECUEndOfLineSession |
| 0x41 | ECUCODE | ECUCodingSession |
| 0x42 | ECUSWT | ECUSwtSession |
| 0x4F | ECUDEVELOP | ECUDevelopmentSession |
| 0xXY | -- | unbekannter Diagnose-Mode |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERSTELLEN | 0x2011 | - | Drive to position P, R, N or D | - | - | - | - | - | - | - | - | 0x95 | 31 | ARG_0x2011 | - |
| STEUERGERAETEMODUS | 0x1000 | - | Switch Device Mode | - | - | - | - | - | - | - | - | 0x95 | 2F | ARG_0x1000 | RES_0x1000 |
| LADENDSMRUECKFALLSYSTEM | 0x2012 | - | Load whole P in emergency concept | - | - | - | - | - | - | - | - | 0x95 | 31 | - | - |
| ANLERNEN | 0x2019 | - | Learning of drive positions | - | - | - | - | - | - | - | - | 0x95 | 31 | - | - |

### ARG_0X1000

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERGERAETEMODUS | - | - | char | - | TAB_MODUS | - | - | - | 0 | 2 | - |

### TAB_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | P |
| 0x01 | R |
| 0x02 | N |
| 0x03 | D |
| 0x10 | P slow |
| 0x11 | R slow |
| 0x12 | N slow |
| 0x13 | D slow |
| 0x23 | 3° before D |

### RES_0X1000

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DSM_MODUS_NR | 0-n | - | char | - | TAB_MODUS | - | - | - | - |

### TAB_MODUS

| WERT | TEXT |
| --- | --- |
| 0x02 | Testmodus |
| 0x01 | Slavemode |

### ARG_0X2011

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POSITION | + | - | - | - | char | - | TAB_POSITION | - | - | - | 0 | 100 | - |

### HYBRID_LIEF

| NR | TEXT |
| --- | --- |
| 0003 | Bosch |
| 0040 | Delphi |
| 007E | Hitachi |
| 009C | Cobasys |
| 0008 | Siemens |
| FFFF | undefinierter Lieferant |

### DATUM_MONAT

| KW | MON |
| --- | --- |
| 0x01 | 0x01 |
| 0x02 | 0x01 |
| 0x03 | 0x01 |
| 0x04 | 0x01 |
| 0x05 | 0x01 |
| 0x06 | 0x02 |
| 0x07 | 0x02 |
| 0x08 | 0x02 |
| 0x09 | 0x02 |
| 0x0A | 0x03 |
| 0x0B | 0x03 |
| 0x0C | 0x03 |
| 0x0D | 0x03 |
| 0x0E | 0x04 |
| 0x0F | 0x04 |
| 0x10 | 0x04 |
| 0x11 | 0x04 |
| 0x12 | 0x04 |
| 0x13 | 0x05 |
| 0x14 | 0x05 |
| 0x15 | 0x05 |
| 0x16 | 0x05 |
| 0x17 | 0x06 |
| 0x18 | 0x06 |
| 0x19 | 0x06 |
| 0x1A | 0x06 |
| 0x1B | 0x07 |
| 0x1C | 0x07 |
| 0x1D | 0x07 |
| 0x1E | 0x07 |
| 0x1F | 0x07 |
| 0x20 | 0x08 |
| 0x21 | 0x08 |
| 0x22 | 0x08 |
| 0x23 | 0x08 |
| 0x24 | 0x09 |
| 0x25 | 0x09 |
| 0x26 | 0x09 |
| 0x27 | 0x09 |
| 0x28 | 0x0A |
| 0x29 | 0x0A |
| 0x2A | 0x0A |
| 0x2B | 0x0A |
| 0x2C | 0x0A |
| 0x2D | 0x0B |
| 0x2E | 0x0B |
| 0x2F | 0x0B |
| 0x30 | 0x0B |
| 0x31 | 0x0C |
| 0x32 | 0x0C |
| 0x33 | 0x0C |
| 0x34 | 0x0C |
| 0xFF | 0x00 |

### POSITION_SOLL_NR

| NR | TEXT |
| --- | --- |
| 0x00 | HCP fordert Position IDLE |
| 0x05 | HCP fordert Position D |
| 0x06 | HCP fordert Position N |
| 0x07 | HCP fordert Position R |
| 0x08 | HCP fordert Position P |
| 0x0f | HCP hat sendet keine oder ungültige Parkposition (Signal not available) |

### POSITION_IST_NR

| NR | TEXT |
| --- | --- |
| 0x05 | DSM in Position D |
| 0x06 | DSM in Position N |
| 0x07 | DSM in Position R |
| 0x08 | DSM in Position P |
| 0x0b | DSM zwischen Position N und D |
| 0x0c | DSM zwischen Position R und N |
| 0x0d | DSM zwischen Position P und R |
| 0x0f | DSM kann Position nicht ermitteln (Signal not available) |

### SERVICEQUALIFIER_NR

| NR | TEXT |
| --- | --- |
| 0x01 | Normalbetrieb |
| 0x02 | P in Emergency |
| 0x03 | Limphome Aux-Motor |
| 0x08 | Power Latch |
| 0x09 | Limphome temporary emergency |
| 0x0b | Limphome permanent emergency |
| 0x0c | Testmode |
| 0x0d | Init |
| 0x0f | SNA (Signal not available) |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x440000 | DSM:  Leitungsfehler.  KL30 Unterspannung | 0 |
| 0x440001 | DSM:  Leitungsfehler.  KL30 Überspannung | 0 |
| 0x440002 | DSM:  Leitungsfehler.  AUX Versorgung Kurzschluss nach Plus oder Dauer-Bestromung durch HCP | 0 |
| 0x440010 | DSM: interner Fehler. Laufzeit-Fehler | 0 |
| 0x440011 | DSM: interner Fehler. Testroutine fehlerhaft | 0 |
| 0x440012 | DSM: interner Fehler. Leichter EEPROM Fehler | 0 |
| 0x440013 | DSM: interner Fehler. Unerwartete Prozessor Anweisung | 0 |
| 0x440019 | DSM: interner Fehler. Schwerer EEPROM Fehler | 0 |
| 0x440014 | DSM: interner Fehler. RAM Check | 0 |
| 0x440015 | DSM: interner Fehler. ROM Check | 0 |
| 0x440016 | DSM: interner Fehler. Frequenz- oder Pulsweiten-Modulation fehlerhaft | 0 |
| 0x440017 | DSM: interner Fehler. Positionssensor fehlerhaft | 0 |
| 0x440018 | DSM: interner Fehler. Bauteil H-Brücke Hauptmotor fehlerhaft | 0 |
| 0x440020 | DSM: interner Fehler. Abgleichwerte fehlen | 0 |
| 0x440021 | DSM: interner Fehler. AUX Motor Sensor | 0 |
| 0x440022 | DSM: interner Fehler. Bauteil H-Brücke Hilfsmotor fehlerhaft | 0 |
| 0x440030 | DSM: Sollposition unerreichbar. Fehler Motorfunktion oder Parksperre | 0 |
| 0x440031 | DSM: Sollposition unerreichbar. Fehler Notmotor oder Rückstellfeder | 0 |
| 0x440032 | DSM: Sollposition unerreichbar. Fehler AUX Motor Rückstellung | 0 |
| 0x440033 | DSM: Sollposition unerreichbar. Rückfallebene deaktiviert. Fehlerfallzähler größer 100 | 0 |
| 0x440034 | DSM: Sollposition unerreichbar. Kalibrierung/ Einlernroutine fehlerhaft durchgeführt | 0 |
| 0x440040 | DSM: Ereignisfehler. Ersatzsystem ausgelöst | 0 |
| 0x440041 | DSM: Ereignisfehler. Programmierbedingungen unerfüllt | 0 |
| 0x440042 | DSM: Ereignisfehler. Eigenständiges P-Einlegen infolge fehlender Information des HCP | 0 |
| 0x440043 | DSM: Ereignisfehler. DSM Ruhestromfehler | 0 |
| 0x440044 | DSM: Ereignisfehler. EWS unerlaubterweise aktiv | 0 |
| 0x440045 | DSM: Ereignisfehler. Kalibrierung verloren oder Einlernroutine nicht durchgeführt | 0 |
| 0x440046 | DSM: Ereignisfehler. Unterspannung während Verstellung Parksperre | 0 |
| 0x440047 | DSM: Ereignisfehler. Unterspannung während Spannen der Rückstellfeder | 0 |
| 0xEE4400 | DSM: HL-CAN: Kommunikationsfehler | 0 |
| 0xEE5401 | Botschaft (Daten HCP,  0x300) fehlt, Empfänger DSM, Sender HCP | 0 |
| 0xEE5402 | Botschaft (Daten HCP, 0x300) nicht aktuell, Empfänger DSM, Sender HCP | 0 |
| 0xEE5403 | Botschaft (Daten HCP, 0x300) Prüfsumme falsch, Empfänger DSM, Sender HCP | 0 |
| 0xEE5404 | Botschaft (Radgeschwindigkeit Hybrid, 0xB2) fehlt, Empfänger DSM, Sender HIM | 0 |
| 0xEE5405 | Botschaft (ETEI Hybrid General Status 1, 0xB4) fehlt, Empfänger DSM, Sender HCP | 0 |
| 0xEE5406 | Botschaft (Klemmenstatus Hybrid, 0x130) fehlt, Empfänger DSM, Sender HIM | 0 |
| 0xEE5407 | Botschaft (Klemmenstatus Hybrid, 0x130) nicht aktuell, Empfänger DSM, Sender HIM | 0 |
| 0xEE5408 | Botschaft (Klemmenstatus Hybrid, 0x130) Prüfsumme falsch, Empfänger DSM, Sender HIM | 0 |
| 0xEE5409 | Botschaft (PPEI_Vehicle_Speed_and_Distance, 0x3E9) fehlt, Empfänger DSM, Sender DME | 0 |
| 0xEE5410 | Botschaft (KOMBI_39Fh, 0x39F) fehlt, Empfänger DSM, Sender HIM | 0 |
| 0xEE5411 | Botschaft (HGM100, 0x396) fehlt, Empfänger DSM, Sender HIM | 0 |
| 0xEE6C00 | Schnittstelle HCP (SL_POSN_RQ, 0x300): Signal ungültig | 0 |
| 0xEE6C01 | Schnittstelle HIM (KM_KI, 0x396): Signal ungültig | 0 |
| 0xEE6C02 | Schnittstelle HIM (ST_KL_15_HYB, 0x130): Signal ungültig | 0 |
| 0xEE6C03 | Schnittstelle HIM (DAT_ZEIT_JAHR, 0x39F): Signal ungültig | 0 |
| 0xEE6C04 | Schnittstelle HIM (DAT_ZEIT_MONAT,  0x39F): Signal ungültig | 0 |
| 0xEE6C05 | Schnittstelle HIM (DAT_ZEIT_TAG, 0x39F): Signal ungültig | 0 |
| 0xEE6C06 | Schnittstelle HIM (V_WHL_RRH_HYB, 0xB2): Signal ungültig | 0 |
| 0xEE6C07 | Schnittstelle HIM (V_WHL_RLH_HYB, 0xB2): Signal ungültig | 0 |
| 0xEE6C08 | Schnittstelle HIM (V_WHL_FRH_HYB, 0xB2): Signal ungültig | 0 |
| 0xEE6C09 | Schnittstelle HIM (V_WHL_FLH_HYB, 0xB2): Signal ungültig | 0 |
| 0xEE6C10 | Schnittstelle DME (VehSpdAvgNDrvnV, 0x3E9): Signal ungültig | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FORTUMWELTNR

| ORT | F_UW1_NR | F_UW2_NR | F_UW3_NR | F_UW4_NR | F_UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 0x440000 |  |  |  |  |  |
| 0x440001 |  |  |  |  |  |
| 0x440002 |  |  |  |  |  |
| 0x440010 |  |  |  |  |  |
| 0x440011 |  |  |  |  |  |
| 0x440012 | 58 | 59 | 20 | 21 | 22 |
| 0x440013 |  |  |  |  |  |
| 0x440019 | 58 | 59 | 20 | 21 | 22 |
| 0x440014 |  |  |  |  |  |
| 0x440015 |  |  |  |  |  |
| 0x440016 |  |  |  |  |  |
| 0x440017 | 54 | 55 | 56 | 57 |  |
| 0x440018 | 9 | 10 | 11 | 12 |  |
| 0x440020 |  |  |  |  |  |
| 0x440021 |  |  |  |  |  |
| 0x440022 | 9 | 10 | 11 | 12 |  |
| 0x440030 | 31 | 52 | 53 | 60 |  |
| 0x440031 | 31 |  |  |  |  |
| 0x440032 | 31 |  |  |  |  |
| 0x440033 |  |  |  |  |  |
| 0x440034 | 31 |  |  |  |  |
| 0x440040 | 41 |  |  |  |  |
| 0x440041 |  |  |  |  |  |
| 0x440042 | 37 | 38 |  |  |  |
| 0x440043 |  |  |  |  |  |
| 0x440044 | 44 | 45 |  |  |  |
| 0x440045 |  |  |  |  |  |
| 0x440046 |  |  |  |  |  |
| 0x440047 |  |  |  |  |  |
| 0xEE4400 |  |  |  |  |  |
| 0xEE5401 |  |  |  |  |  |
| 0xEE5402 |  |  |  |  |  |
| 0xEE5403 |  |  |  |  |  |
| 0xEE5404 |  |  |  |  |  |
| 0xEE5405 |  |  |  |  |  |
| 0xEE5406 |  |  |  |  |  |
| 0xEE5407 |  |  |  |  |  |
| 0xEE5408 |  |  |  |  |  |
| 0xEE5409 |  |  |  |  |  |
| 0xEE5410 |  |  |  |  |  |
| 0xEE5411 |  |  |  |  |  |
| 0xEE6C00 |  |  |  |  |  |
| 0xEE6C01 |  |  |  |  |  |
| 0xEE6C02 |  |  |  |  |  |
| 0xEE6C03 |  |  |  |  |  |
| 0xEE6C04 |  |  |  |  |  |
| 0xEE6C05 |  |  |  |  |  |
| 0xEE6C06 | 28 | 29 | 30 |  |  |
| 0xEE6C07 | 27 | 29 | 30 |  |  |
| 0xEE6C08 | 27 | 28 | 29 |  |  |
| 0xEE6C09 | 27 | 28 | 30 |  |  |
| 0xEE6C10 |  |  |  |  |  |
