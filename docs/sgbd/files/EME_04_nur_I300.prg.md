# EME_04_nur_I300.prg

## General

|  |  |
| --- | --- |
| File | EME_04_nur_I300.prg |
| Type | PRG |
| Jobs | 20 |
| Tables | 36 |
| Origin | BMW EA-412 Roland_Koeppl |
| Revision | 0.014 |
| Author | CAS DHS-F Joerg_Scheiner, CAS DHS-F Sven_Kasner |
| ECU Comment | Funktionalität für I-300 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektrische Maschine Elektronik Hybrid Gen. 1.5 |  |  |
| ORIGIN | string | BMW EA-412 Roland_Koeppl |  |  |
| REVISION | string | 0.014 |  |  |
| AUTHOR | string | CAS DHS-F Joerg_Scheiner, CAS DHS-F Sven_Kasner |  |  |
| COMMENT | string | Funktionalität für I-300 |  |  |
| PACKAGE | string | 1.04 |  |  |
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

### FS_SPERREN

Sperren bzw. Freigeben des Fehlerspeichers UDS  : $85 ControlDTCSetting UDS  : $?? Sperren ($02) / Freigabe ($01) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SPERREN | string | "ja"   -> Fehlerspeicher sperren "nein" -> Fehlerspeicher freigeben table DigitalArgument TEXT Default: "ja" |

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
| F_HLZ | ja |
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

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_TEMPERATUREN_LESEN | 0x6301 | - | Temperaturen lesen vom E-Motor DCB (Endstufen) Control Board | - | GETINVERTERTEMPERATURES | - | - | - | - | - | - | 0x1A | 22 | - | RES_0x6301 |
| STEUERN_EPSOFFSET_LESEN | 0x6300 | STAT_EPSOFF_WERT | EPS Offset -180,00° .. +180,00° | ° | GETEPSOFFSET | high | int | EPSOFF | - | 100 | - | 0x1A | 22 | - | - |

### RES_0X6301

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_E_MOTOR_WERT | °C | high | int | - | EMOTOR | - | 64 | - | E-Motor-Temperatur |
| STAT_DCB_WERT | °C | high | int | - | DCB | - | 64 | - | DCB-Temperatur |
| STAT_CONTROL_BOARD_WERT | °C | high | int | - | CTRLBRD | - | 64 | - | Control-Board-Temperatur |
| STAT_E_MOTOR_MIN_WERT | °C | high | int | - | MOTOR_VALID_RANGE_MIN | - | 64 | - | minimale gültige E-Motor-Temperatur -40°C |
| STAT_E_MOTOR_MAX_WERT | °C | high | int | - | MOTOR_VALID_RANGE_MAX | - | 64 | - | maximale gültige E-Motor-Temperatur +180°C |
| STAT_DCB_MIN_WERT | °C | high | int | - | DCB_VALID_RANGE_MIN | - | 64 | - | minimale gültige DCB-Temperatur -40°C |
| STAT_DCB_MAX_WERT | °C | high | int | - | DCB_VALID_RANGE_MAX | - | 64 | - | maximale gültige DCB-Temperatur +105°C |
| STAT_CONTROL_BOARD_MIN_WERT | °C | high | int | - | CTRLBRD_VALID_RANGE_MIN | - | 64 | - | minimale gültige Control-Board-Temperatur-Temperatur -40°C |
| STAT_CONTROL_BOARD_MAX_WERT | °C | high | int | - | CTRLBRD_VALID_RANGE_MAX | - | 64 | - | maximale gültige Control-Board-Temperatur-Temperatur +125°C |

### T_GATEWAY_FUNCTIONALITY

| WERT | TEXT |
| --- | --- |
| 0 | false |
| 1 | true |

### T_SOFTWARE_VALID

| WERT | TEXT |
| --- | --- |
| 0 | false |
| 1 | true |

### T_OFFON_1BIT

| WERT | TEXT |
| --- | --- |
| 0 | off |
| 1 | on |

### T_DIRECTION

| WERT | TEXT |
| --- | --- |
| 0 | Unknown |
| 1 | Forward |
| 2 | Reverse |
| 3 | Fault |

### T_TESTFAILEDSINCELASTCLEAR

| WERT | TEXT |
| --- | --- |
| 0 | false |
| 1 | true |

### T_CONFIRMEDDTC

| WERT | TEXT |
| --- | --- |
| 0 | false |
| 1 | true |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x21EE00 | Interlock unterbrochen | 0 |
| 0x21EE01 | Interlock Stromschleife Kurzschluss 12V | 0 |
| 0x21EE02 | Interlock Stromschleife Kurzschluss nach Masse | 0 |
| 0x21EE04 | Bereitgestellte 3.3V des CY320 fehlerhaft | 0 |
| 0x21EE05 | Bereitgestellte 5V des CY320 fehlerhaft | 0 |
| 0x21EE06 | Allgemeiner Interlock Fehler | 0 |
| 0x21EE07 | Interlock Performance Fehler | 0 |
| 0x21EE08 | Phase U unterbrochen | 0 |
| 0x21EE09 | Phase V unterbrochen | 0 |
| 0x21EE0A | Phase W unterbrochen | 0 |
| 0x21EE10 | Klemme50 fehlerhaft / unplausibel | 0 |
| 0x21EE18 | ROM-Fehler in der Initialisierungsphase aufgetreten | 0 |
| 0x21EE19 | ROM-Fehler zur Laufzeit aufgetreten | 0 |
| 0x21EE1A | RAM-Fehler in der Initialisierungsphase aufgetreten | 0 |
| 0x21EE1B | RAM-Fehler zur Laufzeit aufgetreten | 0 |
| 0x21EE1C | EEPROM fehlerhaft | 0 |
| 0x21EE1D | Konfigurations- oder Arbeitsregister des u-Controllers fehlerhaft | 0 |
| 0x21EE20 | ADC: Pulstest fehlgeschlagen | 0 |
| 0x21EE21 | Stromwert der Phase U, der im FADC gewandelt wird, ist gegenüber dem ADC-Wert zu hoch. | 0 |
| 0x21EE22 | Stromwert der Phase U, der im FADC gewandelt wird, ist gegenüber dem ADC-Wert zu niedrig. | 0 |
| 0x21EE23 | Stromwert der Phase V, der im FADC gewandelt wird, ist gegenüber dem ADC-Wert zu hoch. | 0 |
| 0x21EE24 | Stromwert der Phase V, der im FADC gewandelt wird, ist gegenüber dem ADC-Wert zu niedrig. | 0 |
| 0x21EE25 | Sinus-Wert des Rotorlagegebers, der im FADC gewandelt wird, ist gegenüber dem ADC-Wert zu hoch. | 0 |
| 0x21EE26 | Sinus-Wert des Rotorlagegebers, der im FADC gewandelt wird, ist gegenüber dem ADC-Wert zu niedrig. | 0 |
| 0x21EE27 | Cosinus-Wert des Rotorlagegebers, der im FADC gewandelt wird, ist gegenüber dem ADC-Wert zu hoch. | 0 |
| 0x21EE28 | Cosinus-Wert des Rotorlagegebers, der im FADC gewandelt wird, ist gegenüber dem ADC-Wert zu niedrig. | 0 |
| 0x21EE2C | Clock für CPLD ausgefallen/fehlerhaft | 0 |
| 0x21EE2E | Daten im ZFS-Parametersatz außerhalb des gültigen Bereichs | 0 |
| 0x21EE2F | Daten im CAS-Parametersatz außerhalb des gültigen Bereichs | 0 |
| 0x21EE30 | Versorgungsspannung zu hoch | 0 |
| 0x21EE31 | Redundante Versorgungsspannung zu hoch | 0 |
| 0x21EE32 | Versorgungsspannung zu niedrig | 0 |
| 0x21EE33 | Redundante Versorgungsspannung zu niedrig | 0 |
| 0x21EE34 | Softwareversion passt nicht zur Hardware | 0 |
| 0x21EE35 | HW Identifikation konnte nicht korrekt gelesen werden | 0 |
| 0x21EE36 | DCDC: U_DS-Fehler Halbleiter Tiefsetzsteller | 0 |
| 0x21EE37 | DCDC: U_DS-Fehler Halbleiter Hochsetzsteller | 0 |
| 0x21EE38 | DCDC: Störung Spannungsversorgung Treiberendstufen | 0 |
| 0x21EE39 | DCDC: HW-Initialisierungsfehler Versorgungsspg. Treiberendstufe | 0 |
| 0x21EE3A | DCDC: HW-Initfehler Versorgungsspg. Messelektronik | 0 |
| 0x21EE3B | DCDC: HW-Initfehler Analogkomparator | 0 |
| 0x21EE3C | DCDC: Temperatursensor fehlerhaft/unplausibel | 0 |
| 0x21EE3D | DCDC: Übertemperatur Leistungselektronik DC/DC-Wandler (out of Hardware-Ranges) | 0 |
| 0x21EE3E | DCDC: Übertemperatur Leistungselektronik DC/DC-Wandler (out of Software-Ranges) | 0 |
| 0x21EE3F | DCDC: Clock-Fehler | 0 |
| 0x21EE40 | DCDC: Watchdog-Fehler | 0 |
| 0x21EE41 | DCDC: Initialisierung Tiefsetzstellerbetrieb | 0 |
| 0x21EE42 | DCDC: Initialisierung Hochsetzstellerbetrieb | 0 |
| 0x21EE43 | DCDC: PSK-Error ungültiger Parameter | 0 |
| 0x21EE44 | DCDC: PSK-Error Not-Aus | 0 |
| 0x21EE45 | DCDC: PSK-Error Treiberausgang | 0 |
| 0x21EE46 | DCDC: PSK-Error PWM-Signal ungültig | 0 |
| 0x21EE47 | DCDC: PSK-Error Watchdog-Fehler | 0 |
| 0x21EE48 | DCDC: Fehler beim Aktivieren des FPGA-Clocks | 0 |
| 0x21EE49 | DCDC: HW-Initialisierungsfehler SPI-Kommunikation | 0 |
| 0x21EE4A | DCDC: HW-Initialisierungsfehler HW-Reset-Signal | 0 |
| 0x21EE4B | DCDC: HW-Initialisierungsfehler Fehlerstatussignal | 0 |
| 0x21EE4C | DCDC: Allgemeiner SPI-Kommunikationsfehler | 0 |
| 0x21EE4D | DCDC: Allgemeiner Fehler bei der HW-Deinitialisierung | 0 |
| 0x21EE4E | DCDC: DC/DC-Wandler-Zustand Passive unplausibel | 0 |
| 0x21EE4F | DCDC: DC/DC-Wandler-Zustand Lock-Out-  DCDC-Converter unplausibel | 0 |
| 0x21EE50 | DCDC: DC/DC-Wandler-Zustand BuckCon-Mode (Mode1) unplausibel | 0 |
| 0x21EE51 | DCDC: DC/DC-Wandler-Zustand BoostCon-Mode (Mode2) unplausibel | 0 |
| 0x21EE52 | DCDC: DC/DC-Wandler-Zustand BuckCon-Mode (Mode3) unplausibel | 0 |
| 0x21EE53 | DCDC: Zwischenkreisüberstrom (HW-Schwellenwerte) | 0 |
| 0x21EE54 | DCDC: Zwischenkreisüberspannung im Buck-Mode 1.Schwelle (SW-Schwellenwerte für DC/DC-Wandler) | 0 |
| 0x21EE55 | DCDC: Zwischenkreisüberspannungsschutz des DC/DC-Wandlers (HW-Schwellenwerte) | 0 |
| 0x21EE56 | DCDC: Zwischenkreisunterspannung im Buck-Mode (SW-Schwellenwerte für DC/DC-Wandler) | 0 |
| 0x21EE57 | DCDC: Zwischenkreisspannung unplausibel/fehlerhaft | 0 |
| 0x21EE58 | DCDC: Zwischenkreisüberspannung im Buck-Mode 2.Schwelle (SW-Schwellenwerte für DC/DC-Wandler) | 0 |
| 0x21EE59 | DCDC: Zwischenkreisüberspannung im Boost-Mode (SW-Schwellenwerte für DC/DC-Wandler) | 0 |
| 0x21EE5A | DCDC: Zwischenkreisunterspannung im Boost-Mode (SW-Schwellenwerte für DC/DC-Wandler) | 0 |
| 0x21EE5B | DCDC: Bordnetzüberstrom (SW-Schwellenwerte) im Buck-Mode | 0 |
| 0x21EE5C | DCDC: Bordnetzüberstrom (HW-Schwellenwerte) | 0 |
| 0x21EE5D | DCDC: Bordnetzüberspannung (HW-Schwellenwerte) | 0 |
| 0x21EE5E | DCDC: Bordnetzunterspannung | 0 |
| 0x21EE5F | DCDC: Bordnetzspannung unplausibel/fehlerhaft | 0 |
| 0x21EE60 | DCDC: Bordnetzstrom unplausibel/fehlerhaft | 0 |
| 0x21EE61 | DCDC: Bordnetzüberstrom (SW-Schwellenwerte) im Boost-Mode | 0 |
| 0x21EE62 | DCDC: Bordnetzüberspannung im Boost-Mode (SW-Schwellenwerte) | 0 |
| 0x21EE63 | DCDC: Bordnetzüberspannung im Buck-Mode (SW-Schwellenwerte) | 0 |
| 0x21EE64 | Zeitüberschreitung bei der Konfiguration des Buck Modes | 0 |
| 0x21EE65 | Zeitüberschreitung bei der Konfiguration des Boost Modes | 0 |
| 0x21EE66 | Zeitüberschreitung bei der Konfiguration des Passiv Modes | 0 |
| 0x21EE67 | Bereitgestellt 15V des SNT fehlerhaft | 0 |
| 0x21EE68 | Bereitgestellt -7V des SNT fehlerhaft | 0 |
| 0x21EE69 | Bereitgestellt 5V des SNT fehlerhaft | 0 |
| 0x21EE6A | Fehler bei der Massebanderkennung im Boost-Mode | 0 |
| 0x21EE6B | Fehler bei der Massebanderkennung im Buck-Mode | 0 |
| 0x21EE6C | es ist kein DC/DC Wandler vorhanden | 0 |
| 0x21EE6D | HW-Initialisierungsvoraussetzung nicht erfüllt | 0 |
| 0x21EE6E | Fehler der Temperatur Power Stage HV | 0 |
| 0x21EE6F | Fehler der Temperatur Power Stage LV | 0 |
| 0x21EE70 | Fehler der Temperatur Trafo | 0 |
| 0x21EE71 | Fehler der Temperatur DC/DC Control board | 0 |
| 0x21EE80 | Summe der Phasenström außerhalb des erlaubten Bereichs (Ebene1). | 0 |
| 0x21EE81 | Level 1: Irregulärer Powerdown detektiert | 0 |
| 0x21EE88 | Summe der Phasenström außerhalb des erlaubten Bereichs (Ebene2). | 0 |
| 0x21EE89 | Ebene 2: ADCReady-Interrupt-Zähler hat zu hohen Wert | 0 |
| 0x21EE8A | Ebene 2: ADCReady-Interrupt-Zähler hat zu niedrigen Wert | 0 |
| 0x21EE8B | Ebene 2: Snapshot-Funktions Zähler hat zu hohen Wert | 0 |
| 0x21EE8C | Ebene 2: Snapshot-Funktions Zähler hat zu niedrigen Wert | 0 |
| 0x21EE8D | Ebene 2: Vergleicher, der Iq aus Ebene 1 und Ebene 2 vergleicht, schlägt an | 0 |
| 0x21EE8E | Ebene 2: Vergleicher, der den gefilterten Iq aus Ebene 1 und Ebene 2 vergleicht, schlägt an | 0 |
| 0x21EE8F | Ebene 2: Vergleicher, der das Ist-Moment aus Ebene 1 und Ebene 2 vergleicht, schlägt an | 0 |
| 0x21EE90 | Ebene 2: Vergleicher, der das Ist-Moment aus Ebene 2  mit dem zulässigen E2-Moment vergleicht, schlägt an | 0 |
| 0x21EE91 | Winkelplausibiliesierung in der Ebene 2 ist fehlgeschlagen | 0 |
| 0x21EE92 | Drehzahlplausibilisierung in der Ebene 2 ist fehlgeschlagen | 0 |
| 0x21EE93 | Ebene 2 Programmablauffehler | 0 |
| 0x21EE94 | Redundante Datenablage in der Ebene 2 ist nicht konsistent (ZFS) | 0 |
| 0x21EE95 | Ebene 2: Zeitüberschreitung von CAN-Botschaft EM1_RQ_ENG vom Hybrid-Controller | 0 |
| 0x21EE96 | Ebene 2: CRC der Nutzdaten von CAN-Botschaft EM1_RQ_ENG fehlerhaft | 0 |
| 0x21EE97 | Ebene 2: Zähler von CAN-Botschaft EM1_RQ_ENG fehlerhaft | 0 |
| 0x21EE98 | Ebene 2: Deaktivierung des OEM-Moduls | 0 |
| 0x21EE99 | Ebene 2: Ermittelter e-Offset außerhalb der Toleranz | 0 |
| 0x21EE9A | Level 2: Unterschied Level 1 und Level 2 Limp Home Anforderung | 0 |
| 0x21EE9B | Redundante Datenablage in der Ebene 2 ist nicht konsistent (CAS) | 0 |
| 0x21EE9C | Level 2: Sensorwerte der Phasen U, V oder W außerhalb des gültigen Bereiches (Ebene2) | 0 |
| 0x21EE9D | Level 2: RCM Modul konnte nicht aus dem EEPROM lesen | 0 |
| 0x21EEA0 | Ebene 3: die maximales Resetanzahl eines spezifischen Fehlers erreicht | 0 |
| 0x21EEA1 | Level 3: Reset durch externes Überwachungsmodul | 0 |
| 0x21EEA8 | MMC: SBC (CY320) kann nicht konfiguriert werden. | 0 |
| 0x21EEA9 | MMC: Fehlerzähler des Überwachungsmoduls (Monitoring Module im CY320) größer 4 | 0 |
| 0x21EEAA | MMC: Fehlerzähler des Überwachungsmoduls verändert sich nicht z.B. bei falschen Antworten | 0 |
| 0x21EEAB | E2-Abschaltung (z.B. AKS) nicht aktiv, obwohl das Frage-Antwort-Verfahren im Tabellenmodus läuft | 0 |
| 0x21EEC0 | Temperatursensor der Kontrolleiterplatine fehlerhaft/unplausibel | 0 |
| 0x21EEC1 | Temperatursensorwert der Kontrolleiterplatine außerhalb des gültigen Bereiches (unten) | 0 |
| 0x21EEC2 | Temperatursensorwert der Kontrolleiterplatine außerhalb des gültigen Bereiches (oben) | 0 |
| 0x21EEC4 | Temperatursensor der Elektrischen Maschine fehlerhaft/unplausibel | 0 |
| 0x21EEC5 | Temperatursensor der Elektrischen Maschine außerhalb des gültigen Bereiches (unten) | 0 |
| 0x21EEC6 | Temperatursensor der Elektrischen Maschine außerhalb des gültigen Bereiches (oben) | 0 |
| 0x21EEC8 | Temperatursensor des Wechselrichters fehlerhaft/unplausibel | 0 |
| 0x21EEC9 | Temperatursensorwert des Wechselrichters außerhalb des gültigen Bereiches (unten) | 0 |
| 0x21EECA | Temperatursensorwert des Wechselrichters außerhalb des gültigen Bereiches (oben) | 0 |
| 0x21EF00 | Rotorlagesensor: Sinuswert fehlerhaft/unplausibel | 0 |
| 0x21EF01 | Rotorlagesensor: Sinuswert außerhalb des gültigen Bereiches (unten) | 0 |
| 0x21EF02 | Rotorlagesensor: Sinuswert außerhalb des gültigen Bereiches (oben) | 0 |
| 0x21EF03 | Rotorlagesensor: Cosinuswert fehlerhaft/unplausibel | 0 |
| 0x21EF04 | Rotorlagesensor: Cosinuswert außerhalb des gültigen Bereiches (unten) | 0 |
| 0x21EF05 | Rotorlagesensor: Cosinuswert außerhalb des gültigen Bereiches (oben) | 0 |
| 0x21EF08 | Übertemperatur Kontrollleiterplatte | 0 |
| 0x21EF09 | Übertemperatur Wechselrichter | 0 |
| 0x21EF0A | Übertemperatur Wechselrichter (1.Schwelle: PreSafe) | 0 |
| 0x21EF0B | Übertemperatur Wechselrichter (2.Schwelle: Abregeln) | 0 |
| 0x21EF0C | Spannungsabhängige Kalibrierdaten des Stromsensors außerhalb des gültigen Bereichs (Ebene1) | 0 |
| 0x21EF0D | Spannungsabhängige Kalibrierdaten des Stromsensors außerhalb des gültigen Bereichs (Ebene2) | 0 |
| 0x21EF0E | Übertemperatur Trafo DC/DC-Wandler | 0 |
| 0x21EF0F | DCB Temperatur Steigung zu stark | 0 |
| 0x21EF10 | Sensorwert der Phase U meldet einen Überstrom | 0 |
| 0x21EF11 | Sensorwert der Phase U fehlerhaft/unplausibel | 0 |
| 0x21EF12 | Sensorwert der Phase U außerhalb des gültigen Bereiches (unten) | 0 |
| 0x21EF13 | Sensorwert der Phase U außerhalb des gültigen Bereiches (oben) | 0 |
| 0x21EF14 | Sensor Phase U defekt und anderer Sensor bereits als defekt deklariert | 0 |
| 0x21EF15 | Offset des Stromsensors der Phase U außerhalb des gültigen Bereichs (Ebene1) | 0 |
| 0x21EF16 | Offset des Stromsensors der Phase U außerhalb des gültigen Bereichs (Ebene2) | 0 |
| 0x21EF18 | Sensorwert der Phase V meldet einen Überstrom | 0 |
| 0x21EF19 | Sensorwert der Phase V fehlerhaft/unplausibel | 0 |
| 0x21EF1A | Sensorwert der Phase V außerhalb des gültigen Bereiches (unten) | 0 |
| 0x21EF1B | Sensorwert der Phase V außerhalb des gültigen Bereiches (oben) | 0 |
| 0x21EF1C | Sensor Phase V defekt und anderer Sensor bereits als defekt deklariert | 0 |
| 0x21EF1D | Offset des Stromsensors der Phase V außerhalb des gültigen Bereichs (Ebene1) | 0 |
| 0x21EF1E | Offset des Stromsensors der Phase V außerhalb des gültigen Bereichs (Ebene2) | 0 |
| 0x21EF20 | Sensorwert der Phase W meldet einen Überstrom | 0 |
| 0x21EF21 | Sensorwert der Phase W fehlerhaft/unplausibel | 0 |
| 0x21EF22 | Sensorwert der Phase W außerhalb des gültigen Bereiches (unten) | 0 |
| 0x21EF23 | Sensorwert der Phase W außerhalb des gültigen Bereiches (oben) | 0 |
| 0x21EF24 | Sensor Phase W defekt und anderer Sensor bereits als defekt deklariert | 0 |
| 0x21EF25 | Offset des Stromsensors der Phase W außerhalb des gültigen Bereichs (Ebene1) | 0 |
| 0x21EF26 | Offset des Stromsensors der Phase W außerhalb des gültigen Bereichs (Ebene2) | 0 |
| 0x21EF30 | Collector-Emitter-Überspannung Phase U LowSide | 0 |
| 0x21EF31 | Collector-Emitter-Überspannung Phase V LowSide | 0 |
| 0x21EF32 | Collector-Emitter-Überspannung Phase W LowSide | 0 |
| 0x21EF33 | Collector-Emitter-Überspannung Phase U HighSide | 0 |
| 0x21EF34 | Collector-Emitter-Überspannung Phase V HighSide | 0 |
| 0x21EF35 | Collector-Emitter-Überspannung Phase W HighSide | 0 |
| 0x21EF38 | Bereitgestellt 5V des SNT LowSide fehlerhaft | 0 |
| 0x21EF39 | Bereitgestellt 5V des SNT HighSide fehlerhaft | 0 |
| 0x21EF3A | Bereitgestellt 15V des SNT HighSide fehlerhaft | 0 |
| 0x21EF40 | EM: Ermittelter e-Offset außerhalb der Toleranz | 0 |
| 0x21EF41 | EM: Übertemperatur (1.Schwelle) | 0 |
| 0x21EF42 | EM: Übertemperatur (2.Schwelle) | 0 |
| 0x21EF43 | EM: Überdrehzahl | 0 |
| 0x21EF44 | Abschaltpfad: WDA-Test fehlgeschlagen | 0 |
| 0x21EF45 | Abschaltpfad: CAN-Transceiver-Test fehlgeschlagen | 0 |
| 0x21EF46 | Abschaltpfad: Endstufen-Test fehlgeschlagen | 0 |
| 0x21EF48 | Fehler Crash Sensor | 0 |
| 0x21EF4C | Zwischenkreis: Überspannungsschutz des Wechselrichters (HW-Schwellenwerte) | 0 |
| 0x21EF4D | Zwischenkreis: Überspannung (SW-Schwellenwerte für Wechselrichter) | 0 |
| 0x21EF4E | Zwischenkreis: Unterspannung (SW-Schwellenwerte für Wechselrichter) | 0 |
| 0x21EF7E | Fehler im HF-Bus (HighSide) | 0 |
| 0x21EF7F | Fehler im HF-Bus (LowSide) | 0 |
| 0xCF8400 | CAN Bus Off Node 0 | 1 |
| 0xCF8401 | CAN Bus Off Node 1 | 1 |
| 0xCF8402 | CAN Bus Off Node 2 | 1 |
| 0xCF8403 | CAN Bus Off Node 3 | 1 |
| 0xCF8500 | Zähler auf FA-CAN von CAN-Botschaft ANG_ACPD fehlerhaft | 1 |
| 0xCF8501 | Zähler von CAN-Botschaft DIAG_OBD_HYB_1 fehlerhaft | 1 |
| 0xCF8502 | Zähler von CAN-Botschaft DIAG_OBD_HYB_2 fehlerhaft | 1 |
| 0xCF8503 | Zähler auf FA-CAN von CAN-Botschaft DT_DISP_GRDT fehlerhaft | 1 |
| 0xCF8504 | Zähler auf FA-CAN von CAN-Botschaft DT_PT_2 fehlerhaft | 1 |
| 0xCF8505 | Zähler auf A-CAN von CAN-Botschaft RQ_TORQ_DRV_HYB fehlerhaft | 1 |
| 0xCF8506 | Zähler auf FA-CAN von CAN-Botschaft TORQ_CRSH_1 fehlerhaft | 1 |
| 0xCF8507 | Zähler auf H-CAN von CAN-Botschaft TORQ_CRSH_HYB fehlerhaft | 1 |
| 0xCF8508 | Zähler von CAN-Botschaft TORQ_PT_HYB_1 fehlerhaft | 1 |
| 0xCF8600 | CRC auf FA-CAN der Nutzdaten von CAN-Botschaft ANG_ACPD fehlerhaft | 1 |
| 0xCF8601 | CRC auf FA-CAN der Nutzdaten von CAN-Botschaft DT_DISP_GRDT fehlerhaft | 1 |
| 0xCF8602 | CRC auf FA-CAN der Nutzdaten von CAN-Botschaft DT_PT_2 fehlerhaft | 1 |
| 0xCF8603 | CRC auf A-CAN der Nutzdaten von CAN-Botschaft RQ_TORQ_DRV_HYB fehlerhaft | 1 |
| 0xCF8604 | CRC auf FA-CAN der Nutzdaten von CAN-Botschaft TORQ_CRSH_1 fehlerhaft | 1 |
| 0xCF8605 | CRC auf H-CAN der Nutzdaten von CAN-Botschaft TORQ_CRSH_HYB fehlerhaft | 1 |
| 0xCF8606 | CRC der Nutzdaten von CAN-Botschaft TORQ_PT_HYB_1 fehlerhaft | 1 |
| 0xCF8700 | Zeitüberschreitung auf FA-CAN von CAN-Botschaft A_TEMP | 1 |
| 0xCF8701 | Zeitüberschreitung auf FA-CAN von CAN-Botschaft ANG_ACPD | 1 |
| 0xCF8702 | Zeitüberschreitung auf FA-CAN von CAN-Botschaft AVL_RPM_WHL_UPRT | 1 |
| 0xCF8703 | Zeitüberschreitung auf FA-CAN von CAN-Botschaft BN_UVL | 1 |
| 0xCF8704 | Zeitüberschreitung auf A-CAN von CAN-Botschaft CTR_COOL_DRV_EL | 1 |
| 0xCF8705 | Zeitüberschreitung auf FA-CAN von CAN-Botschaft CTR_CRASH_SWO_EKP | 1 |
| 0xCF8706 | Zeitüberschreitung auf FA-CAN von CAN-Botschaft DIAG_OBD_ENG | 1 |
| 0xCF8707 | Zeitüberschreitung von CAN-Botschaft DIAG_OBD_HYB_1 | 1 |
| 0xCF8708 | Zeitüberschreitung von CAN-Botschaft DIAG_OBD_HYB_2 | 1 |
| 0xCF8709 | Zeitüberschreitung von CAN-Botschaft COSA_HYB_RST | 1 |
| 0xCF870A | Zeitüberschreitung auf FA-CAN von CAN-Botschaft DT_DISP_GRDT | 1 |
| 0xCF870B | Zeitüberschreitung auf FA-CAN von CAN-Botschaft DT_GRDT | 1 |
| 0xCF870C | Zeitüberschreitung auf FA-CAN von CAN-Botschaft DT_PT_1 | 1 |
| 0xCF870D | Zeitüberschreitung auf FA-CAN von CAN-Botschaft DT_PT_2 | 1 |
| 0xCF870E | Zeitüberschreitung auf FA-CAN von CAN-Botschaft FZZSTD | 1 |
| 0xCF870F | Zeitüberschreitung auf A-CAN von CAN-Botschaft IDENT_HVSTO | 1 |
| 0xCF8710 | Zeitüberschreitung auf FA-CAN von CAN-Botschaft KLEMMEN | 1 |
| 0xCF8711 | Zeitüberschreitung auf A-CAN von CAN-Botschaft LIM_CHG_DCHG_HVSTO | 1 |
| 0xCF8712 | Zeitüberschreitung auf H-CAN von CAN-Botschaft PWMG_LV | 1 |
| 0xCF8713 | Zeitüberschreitung auf FA-CAN von CAN-Botschaft RELATIVZEIT | 1 |
| 0xCF8714 | Zeitüberschreitung auf FA-CAN von CAN-Botschaft RLS_COOL_HVSTO | 1 |
| 0xCF8715 | Zeitüberschreitung auf FA-CAN von CAN-Botschaft RQ_AIC | 1 |
| 0xCF8716 | Zeitüberschreitung auf A-CAN von CAN-Botschaft RQ_TORQ_DRV_HYB | 1 |
| 0xCF8717 | Zeitüberschreitung auf FA-CAN von CAN-Botschaft ST_BLT_CT_SOCCU | 1 |
| 0xCF8718 | Zeitüberschreitung auf A-CAN von CAN-Botschaft ST_GRB_ECU | 1 |
| 0xCF8719 | Zeitüberschreitung auf A-CAN von CAN-Botschaft ST_HVSTO_1 | 1 |
| 0xCF871A | Zeitüberschreitung von CAN-Botschaft ST_HYB_2 | 1 |
| 0xCF871B | Zeitüberschreitung auf FA-CAN von CAN-Botschaft ST_STAB_DSC | 1 |
| 0xCF871C | Zeitüberschreitung auf FA-CAN von CAN-Botschaft STAT_ENG_STA_AUTO | 1 |
| 0xCF871D | Zeitüberschreitung auf A-CAN von CAN-Botschaft STAT_ENG_STA_AUTO_A | 1 |
| 0xCF871E | Zeitüberschreitung auf A-CAN von CAN-Botschaft STAT_HVSTO_2 | 1 |
| 0xCF871F | Zeitüberschreitung auf FA-CAN von CAN-Botschaft STAT_ZV_KLAPPEN | 1 |
| 0xCF8720 | Zeitüberschreitung von CAN-Botschaft SVC_IHKA | 1 |
| 0xCF8721 | Zeitüberschreitung auf FA-CAN von CAN-Botschaft TORQ_CRSH_1 | 1 |
| 0xCF8722 | Zeitüberschreitung auf H-CAN von CAN-Botschaft TORQ_CRSH_HYB | 1 |
| 0xCF8723 | Zeitüberschreitung von CAN-Botschaft TORQ_PT_HYB_1 | 1 |
| 0xCF8724 | Zeitüberschreitung auf FA-CAN von CAN-Botschaft V_VEH | 1 |
| 0xCF8726 | Ebene2: Zeitüberschreitung von CAN-Botschaft EM1_RQ_ENG vom Hybrid-Controller | 1 |
| 0xCF8727 | Ebene2: CRC der Nutzdaten von CAN-Botschaft EM1_RQ_ENG fehlerhaft | 1 |
| 0xCF8728 | Ebene2: Zähler von CAN-BotschaftEM1_RQ_ENG fehlerhaft | 1 |
| 0x02FF1A | Applikationsfehler zum Testen | 0 |
| 0xCF8BFF | Netzwerkfehler zum Testen | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### T_TEST_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Failed |
| 1 | Indeterminate |
| 2 | Reserved |
| 3 | Passed |

### T_TESTNOTCOMPLETEDSINCELASTCLEAR

| WERT | TEXT |
| --- | --- |
| 0 | false |
| 1 | true |

### T_RUNNING_MODE

| WERT | TEXT |
| --- | --- |
| 0 | Running in Application |
| 1 | Running in Boot |

### T_ERASE_VERIFICATION

| WERT | TEXT |
| --- | --- |
| 0 | Erase Completed Succesfully |
| 1 | Erase Failed (general failure) |
| 2 | Erase Failed - voltage to high |
| 3 | Erase Failed - voltage to low |
| 4 | Erase Failed - microprocessor temperature to high |
| 5 | Erase Failed - microprocessor temperature to low |
| 6 | Reserved for future usage |
| 255 | Reserved |

### T_PROGRAMMABLE

| WERT | TEXT |
| --- | --- |
| 0 | false |
| 1 | true |

### T_NOT_PROOFED_FAILURE

| WERT | TEXT |
| --- | --- |
| 0 | not proofed |
| 1 | failure |

### T_TRUE_FALSE

| WERT | TEXT |
| --- | --- |
| 0 | False |
| 1 | True |

### T_TESTFAILED

| WERT | TEXT |
| --- | --- |
| 0 | false |
| 1 | true |

### T_DTC_FORMAT_IDENTIFIER_1BYTE

| WERT | TEXT |
| --- | --- |
| 0 | ISO15031-6 DTC Format |
| 1 | ISO14229-1 DTC Format |
| 2 | SAEJ1939-73 DTC Format |

### T_LOCALTABLE

| WERT | TEXT |
| --- | --- |
| 16777215 | All Groups |

### T_PASSED_FAILED

| WERT | TEXT |
| --- | --- |
| 0 | passed |
| 1 | failed |

### T_MISMATCH

| WERT | TEXT |
| --- | --- |
| 0 | no mismatch |
| 1 | mismatch occurred |
