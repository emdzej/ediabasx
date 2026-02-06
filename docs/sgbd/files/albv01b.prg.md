# albv01b.prg

## General

|  |  |
| --- | --- |
| File | albv01b.prg |
| Type | PRG |
| Jobs | 23 |
| Tables | 45 |
| Origin | BMW EI-63 Andreas Rapp |
| Revision | 0.008 |
| Author | Bosch EB-AS/ESE3 Wandhammer, Bosch(extern) EB-AS/ESE3 Malcher |
| ECU Comment | SGBD für die aktive Lehnenbreitenverstellung 2 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Aktive_Lehnenbreitenverstellung_2 |  |  |
| ORIGIN | string | BMW EI-63 Andreas Rapp |  |  |
| REVISION | string | 0.008 |  |  |
| AUTHOR | string | Bosch EB-AS/ESE3 Wandhammer, Bosch(extern) EB-AS/ESE3 Malcher |  |  |
| COMMENT | string | SGBD für die aktive Lehnenbreitenverstellung 2 |  |  |
| PACKAGE | string | 0.24 |  |  |
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
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige Result table SG_Funktionen ARG RESULTNAME erzeugt |

### STEUERN

Vorgeben eines Status UDS  : $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG bzw. ID bzw. LABEL |
| WERT | string | Es muss mindestens ein Argument übergeben werden Argumente siehe table SG_Funktionen ARG_TABELLE |

### SERIENNUMMER_LESEN

Seriennummer des Steuergeraets UDS  : $22   ReadDataByIdentifier UDS  : $F18C Sub-Parameter ECUSerialNumber Modus: Default

_No arguments._

### STEUERN_IO

Vorgeben eines Status UDS  : $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG bzw. ID bzw. LABEL |
| STEUERPARAMETER | string | 'RCTECU' = returnControlToECU 'RTD'    = resetToDefault 'FCS'    = freezeCurrentState 'STA'    = shortTermAdjustment |
| WERT | string | Argumente siehe table SG_Funktionen ARG_TABELLE |

### STEUERN_ROUTINE

Vorgeben eines Status UDS  : $31 RoutineControl

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG bzw. ID bzw. LABEL |
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

### STATUS_BLOCK_LESEN

Lesen eines dynamisch definierten Datenblockes UDS  : $2C DynamicallyDefineDataIdentifier $03 ClearDynamicallyDefinedDataIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $2C DynamicallyDefineDataIdentifier $01 DefineByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $22 ReadDataByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  $2C$02 DefineByMemoryAddress wird nicht unterstützt 'Composite data blocks' werden nur komplett unterstützt

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | long | Nummer des Blockes 0..255 |
| NEU_DEFINIEREN | string | Wenn 'JA' oder 'YES' wird der Block im SG gelöscht und neu ins SG geschrieben Wenn 'NEIN' oder 'NO' wird der Block im SG nicht gelöscht und nicht geschrieben Anschließend wird der Block gelesen |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige Result table SG_Funktionen ARG RESULTNAME erzeugt |

### HERSTELLINFO_LESEN

Lieferant und Herstelldatum lesen UDS  : $22   ReadDataByIdentifier UDS  : $F18A SystemSupplierIdentifier UDS  : $F18B ECUManufactoringData Modus: Default

_No arguments._

### DIAGNOSE_AUFRECHT

Diagnosemode des SG aufrecht erhalten UDS  : $3E TesterPresent UDS  : $?0 suppressPosRspMsgIndication Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SG_ANTWORT | string | "ja"   -> SG soll antworten "nein" -> SG soll nicht antworten table DigitalArgument TEXT Default:  SG soll antworten |

### SLEEP_MODE

SG in Sleep-Mode versetzen UDS  : $11 ECUReset UDS  : $04 EnableRapidPowerShutDown Modus: Default

_No arguments._

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

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
| 0xFFFFFF | unbekannter Hersteller |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | keine Fehlerart verfügbar |
| 0x04 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x05 | Fehler gespeichert |
| 0x08 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x09 | Fehler gespeichert |
| 0x0C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x0D | Fehler gespeichert |
| 0x44 | Fehler momentan vorhanden und bereits gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler momentan vorhanden und bereits gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler momentan vorhanden und bereits gespeichert |
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
| 0xA0 | VEHI | Vehicle Info Spec |
| 0xA1 | COMS | Comparam Spec |
| 0xA2 | DIAG | Diag-Layer Container |
| 0xA3 | FLCU | Flash Datei |
| 0xA4 | JAJO | Java-Jobs |
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
| 0xFFFF | IDENTIFIER_UNKNOWN | - | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |

### FEHLERKLASSE

| NR | TEXT |
| --- | --- |
| 0x00 | Keine Fehlerklasse verfuegbar |
| 0x01 | Ueberpruefung bei naechstem Werkstattbesuch |
| 0x02 | Ueberpruefung bei naechstem Halt |
| 0x04 | Ueberpruefung sofort erforderlich ! |
| 0xFF | unbekannte Fehlerklasse |

### IARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | keine Fehlerart verfügbar |
| 0x04 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x05 | Fehler gespeichert |
| 0x08 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x09 | Fehler gespeichert |
| 0x0C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x0D | Fehler gespeichert |
| 0x44 | Fehler momentan vorhanden und bereits gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler momentan vorhanden und bereits gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler momentan vorhanden und bereits gespeichert |
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
| 0x025A00 | Energiesparmode aktiv | 1 |
| 0x02FF5A | DM: Debug Application DTC | 0 |
| 0x802501 | Steuergerät nicht codiert | 0 |
| 0x80250E | Temperatursensor Motor rechts: Kurschluss nach Minus | 0 |
| 0x80250F | Temperatursensor Motor rechts: Kurschluss nach Plus oder Unterbrechung | 0 |
| 0x802510 | Interner Steuergeraetefehler | 0 |
| 0x802511 | Unterspannung erkannt | 1 |
| 0x802512 | Ueberspannung erkannt | 1 |
| 0x802513 | Temperatursensor Motor links: Kurschluss nach Minus | 0 |
| 0x802514 | Temperatursensor Motor links: Kurschluss nach Plus oder Unterbrechung | 0 |
| 0x802515 | aLBV-Motor links: Kurzschluss nach Plus | 0 |
| 0x802516 | aLBV-Motor links: Kurzschluss nach Minus | 0 |
| 0x802517 | aLBV-Motor links: Unterbrechung | 0 |
| 0x802518 | aLBV-Motor rechts: Kurzschluss nach Plus | 0 |
| 0x802519 | aLBV-Motor rechts: Kurzschluss nach Minus | 0 |
| 0x80251A | aLBV-Motor rechts: Unterbrechung | 0 |
| 0x80251B | Fehler Endstufe Links | 0 |
| 0x80251C | Fehler Endstufe Rechts | 0 |
| 0x80251D | Hallsensor 1 links: Kurzschluss nach Minus | 0 |
| 0x80251E | Hallsensor 1 links: Kurzschluss nach Plus | 0 |
| 0x80251F | Hallsensor 1 links: Unterbrechung | 0 |
| 0x802520 | Hallsensor 2 links: Kurzschluss nach Minus | 0 |
| 0x802521 | Hallsensor 2 links: Kurzschluss nach Plus | 0 |
| 0x802522 | Hallsensor 2 links: Unterbrechung | 0 |
| 0x802523 | Hallsensor 1 rechts: Kurzschluss nach Minus | 0 |
| 0x802524 | Hallsensor 1 rechts: Kurzschluss nach Plus | 0 |
| 0x802525 | Hallsensor 1 rechts: Unterbrechung | 0 |
| 0x802526 | Hallsensor 2 rechts: Kurzschluss nach Minus | 0 |
| 0x802527 | Hallsensor 2 rechts: Kurzschluss nach Plus | 0 |
| 0x802528 | Hallsensor 2 rechts: Unterbrechung | 0 |
| 0x802529 | Endwertgeber links: Kurzschluss nach Minus | 0 |
| 0x80252A | Endwertgeber links: Kurzschluss nach Plus | 0 |
| 0x80252B | Endwertgeber links: Unterbrechung | 0 |
| 0x80252C | Endwertgeber rechts: Kurzschluss nach Minus | 0 |
| 0x80252D | Endwertgeber rechts: Kurzschluss nach Plus | 0 |
| 0x80252E | Endwertgeber rechts: Unterbrechung | 0 |
| 0x80252F | Timeout Ansteuerung aLBV Motor links | 0 |
| 0x802530 | Timeout Ansteuerung aLBV Motor rechts | 0 |
| 0x802531 | Fehler Checksumme Codierdaten | 0 |
| 0x802532 | SG-Reset erkannt | 0 |
| 0x802533 | Initialiersierungsverlsut | 0 |
| 0x802534 | Codierung nicht erfolgreich abgeschlossen | 0 |
| 0x802535 | Codierung: Signaturprüfung fehlerhaft | 0 |
| 0x802536 | Codierung: Falsche Fahrzeuginformationen | 0 |
| 0x802537 | Codierung: Ungültige Daten | 0 |
| 0x802538 | Temperaturschutz Motor links | 1 |
| 0x802539 | Temperaturschutz Motor rechts | 1 |
| 0xDF8BFF | DM: Debug Network DTC | 0 |
| 0xDF9400 | Botschaft (2CAh, Außentemperatur): Ausfall | 1 |
| 0xDF9401 | Botschaft (3F9h, Daten Antriebstrang 2): Ausfall | 1 |
| 0xDF9402 | Botschaft (1A1h, Geschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xDF9403 | Botschaft (19Fh, Giergeschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xDF9404 | Botschaft (301h, Ist-Lenkwinkel Fahrer): Ausfall | 1 |
| 0xDF9405 | Botschaft (12Fh, Klemmen): Ausfall | 1 |
| 0xDF9406 | Botschaft (199h, Längsbeschleunigung Schwerpunkt): Ausfall | 1 |
| 0xDF9407 | Botschaft (19Ah, Querbeschleunigung Schwerpunkt): Ausfall | 1 |
| 0xDF9408 | Botschaft (3A4h, Sekunden Zähler SysFkt): Ausfall | 1 |
| 0xDF9409 | Botschaft (2FAh, Sitzbelegung Gurtkontakte): Ausfall | 1 |
| 0xDFAC00 | Signal (2CAh) ungültig empfangen: Temperatur_Außen | 1 |
| 0xDFAC01 | Signal (1EFh) ungültig empfangen: Bedienung_Taster_Verstellung_Lehnenbreite_Aktiv_BF | 1 |
| 0xDFAC02 | Signal (D2h) ungültig empfangen: Bedienung_Verstellung_Lehnenbreite_BFS | 1 |
| 0xDFAC03 | Signal (3F9h) ungültig empfangen: Status_Gangwahl_Antrieb | 1 |
| 0xDFAC04 | Signal (3F9h) ungültig empfangen: Status_Motor_Läuft_Antrieb | 1 |
| 0xDFAC05 | Signal (1A1h) ungültig empfangen: Geschwindigkeit_Fahrzeug_Schwerpunkt | 1 |
| 0xDFAC06 | Signal (19Fh) ungültig empfangen: Giergeschwindigkeit_Fahrzeug | 1 |
| 0xDFAC07 | Signal (301h) ungültig empfangen: Ist_Lenkwinkel_Fahrer | 1 |
| 0xDFAC08 | Signal (301h) ungültig empfangen: Ist_Lenkwinkelgeschwindigkeit_Fahrer | 1 |
| 0xDFAC09 | Signal (12Fh) ungültig empfangen: Status_Klemme | 1 |
| 0xDFAC10 | Signal (199h) ungültig empfangen: Längsbeschleunigung_Schwerpunkt | 1 |
| 0xDFAC11 | Signal (22Ah) ungültig empfangen: Status_Modus_Memory_Speichern_BF | 1 |
| 0xDFAC13 | Signal (199h) ungültig empfangen: Querbeschleunigung_Schwerpunkt | 1 |
| 0xDFAC14 | Signal (3A4h) ungültig empfangen: Zeit_Sekunde_Zähler_Absolut | 1 |
| 0xDFAC15 | Signal (2FAh) ungültig empfangen: Schalter_Gurtschloß_BF | 1 |
| 0xDFAC16 | Signal (3B0h) ungültig empfangen: Status Gang Rückwärts | 1 |
| 0xDFAC17 | Signal (2FCh) ungültig empfangen: Status_Türkontakt_BFT | 1 |
| 0xDFAC18 | Lenkwinkel-Signal Offset ungültig | 1 |
| 0xDFAC19 | Querbeschleunigung-Signal Offset ungültig | 1 |
| 0xDF8468 | Body-CAN Control Module Bus OFF | 0 |
| 0xDF845F | Body-CAN Bus | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1705 | BATTERY_VOLTAGE | Volts | - | unsigned char | - | 1 | 10 | 0 |
| 0x1706 | RESERVED_BYTE | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x1707 | CODING_CHECKSUM | Hex | - | unsigned char | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x5A9303 | NVM: Falsche Konfiguration ID | 0 |
| 0x5A9304 | NVM: EEPROM Schreiben fehlerhaft | 0 |
| 0x5A9305 | NVM: EEEPROM Schreiben aller Blöcke fehlerhaft | 0 |
| 0x5A9306 | NVM: EEPROM Lesen aller Blöcke fehlerhaft | 0 |
| 0x5A9307 | NVM: EEPROM Löschen fehlerhaft | 0 |
| 0x5A9308 | NVM: EEPROM Kontroll fehlerhaft | 0 |
| 0x5A9309 | NVM EEPROM Lesen fehlerhaft | 0 |
| 0x5A930A | Unangeforderte Ansteuerung eines Motors | 0 |
| 0x5A930B | Hallsensor Auswerteschaltung defekt  | 0 |
| 0x5A930C | Versorgung PUP defekt  | 0 |
| 0x5A930D | Botschaft (328h, Relativzeit): Timeout Systemzeit | 1 |
| 0x5A930E | Fehler ALBV-Daten | 0 |
| 0x5A930F | PIA: IO Fehler | 0 |
| 0x5A9310 | DM: Queue deleted | 0 |
| 0x5A9311 | DM: Queue full | 0 |
| 0x5A9312 | Botschaft (3A0h, Fahrzeugzustand): Ausfall Fahrzeugzustand | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1705 | BATTERY_VOLTAGE | Volts | - | unsigned char | - | 1 | 10 | 0 |
| 0x1706 | RESERVED_BYTE | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x1707 | CODING_CHECKSUM | Hex | - | unsigned char | - | 1 | 1 | 0 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_STATUS_BF_SOLL_POSITION | 0x4000 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4000 |
| ARG_STATUS_BF_BFSYST_ALBV | 0x4001 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4001 |
| ARG_STEUERN_BF_ANLIEFERUNG_ZUSTAND | 0x4002 | - | - | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4002 | - |
| ARG_STATUS_BF_ALBV_INPUTS | 0x4003 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4003 |
| ARG_STATUS_BF_ALBV_OUTPUTS | 0x4004 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4004 |
| ARG_STATUS_BF_SW_ZUSTAND | 0x4005 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4005 |
| ARG_STEUERN_BF_MOT | 0x4006 | - | - | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4006 | - |
| ARG_STATUS_BF_HALLIMPULSE | 0x4007 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4007 |
| STATUS_KLEMME_50_EIN | 0xDB10 | STAT_STATUS_KLEMME_50_EIN | Job liefert den Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| BF_ANLERNVORGANG_ALBV_INIT | 0xD7FA | STAT_ALBV_BF_INIT | Liefert den Status des Initialisierungsvorgang | 0-n | - | - | int | TAB_INIT | - | - | - | - | 22 | - | - |
| BF_STEUERN_SOLLPOS_R | 0xD787 | - | Anfahren einer Sollposition für Motor rechts | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD787 | - |
| BF_STEUERN_QUER_OFFSET_ALBV_WERT | 0xD789 | - | Setzt den Wert des von dem ALBV-Steuergergät berechnete Querbeschleunigungsoffsets | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD789 | - |
| BF_BUS_NACHRICHTEN_ALBV | 0xD781 | - | Busnachrichten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD781 |
| BF_POSITION_MEMORY_ALBV | 0xD7FC | - | Liefert die im  Memory gespeicherten Sitz Positionen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7FC |
| BF_LW_OFFSET_ALBV_WERT | 0xD782 | STAT_LW_OFFSET_ALBV_WERT | Liefert den Wert des von dem ALBV-Steuergergät berechnete Lenkwinkeloffsets | Grad | - | - | int | - | - | 10 | - | - | 22 | - | - |
| STATUS_KLEMME_R_EIN | 0xDAFD | STAT_STATUS_KLEMME_R_EIN | Job liefert den Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SPANNUNG_KLEMME_30B_WERT | 0xDAD9 | STAT_SPANNUNG_KLEMME_30B_WERT | Job zum Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| BF_PIA_ALBV | 0xD7FD | - | Liefert die PIA Konfiguration der ALBV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7FD |
| BF_QUER_OFFSET_ALBV_WERT | 0xD783 | STAT_QUER_OFFSET_ALBV_WERT | Liefert den Wert des von dem ALBV-Steuergergät berechnete Querbeschleunigungsoffsets | m/s² | - | - | int | - | - | 100 | - | - | 22 | - | - |
| BF_STEUERN_ALBV_INIT | 0xA725 | - | Initialisierungsvorgang der ALBV | - | - | - | - | - | - | - | - | - | 31 | - | - |
| NACHLAUFZEIT_KLEMME_30B | 0xDB2E | STAT_NACHLAUFZEIT_KLEMME_30B_WERT | Nachlaufzeit der Klemme 30B über BUS-Nachrich in Sekunden: Interpretation siehe BN-DB | s | - | - | int | - | - | - | - | - | 22 | - | - |
| BF_BEWEGUNG_MOTOR_ALBV | 0xD78A | - | Liefert Stati über die Motoransteuerung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD78A |
| BF_EHALL_ALBV_WERT | 0xD780 | - | Liefert den Status der Endwertgeber | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD780 |
| BF_STEUERN_LW_OFFSET_ALBV_WERT | 0xD788 | - | Setzt den Wert des von dem ALBV-Steuergergät berechnete Lenkwinkeloffsets | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD788 | - |
| BF_QUER_KORR_ALBV_WERT | 0xD785 | STAT_QUER_KORR_ALBV_WERT | Liefert den Wert der von dem ALBV-Steuergergät berechnete Querbeschleunigung | m/s² | - | - | int | - | - | 100 | - | - | 22 | - | - |
| BF_POSITION_ALBV | 0xD7FB | - | Liefert die Position der Lehne | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7FB |
| BF_LW_KORR_ALBV_WERT | 0xD784 | STAT_LW_KORR_ALBV_WERT | Liefert den Wert des von dem ALBV-Steuergergät korrigierte Lenkwinkels | Grad | - | - | int | - | - | 10 | - | - | 22 | - | - |
| BF_STEUERN_SOLLPOS_L | 0xD786 | - | Anfahren einer Sollposition für Motor links | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD786 | - |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | Job liefert den Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| BF_STEUERN_TASTEN_ALBV | 0xD7FE | - | Simuliert die Signale der Tasten für den Heckklappenlift. Die Signale werden nach jedem Aufruf dieser Diagnose Jobs für 100ms simuliert. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD7FE | - |

### RES_0X4000

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLL_POSITION_ALBV_LINKS_WERT | 0-n | - | int | - | - | - | - | - | Soll Position Links |
| STAT_SOLL_POSITION_ALBV_RECHTS_WERT | 0-n | - | int | - | - | - | - | - | Soll Position Rechts |

### RES_0X4001

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_ALBV_LINKS_WERT | 0-n | - | int | - | - | - | - | - | Position des linken Motors |
| STAT_POSITION_ALBV_RECHTS_WERT | 0-n | - | int | - | - | - | - | - | Position des rechten Motors |
| STAT_INITIALISIERUNG_WERT | 0-n | - | int | - | - | - | - | - | 0 = System nicht initialisiert 1 = Initialisierung wird durchgeführt 2 = Initialisierung erfolgreich 3 = Fehler/Timeout bei der Initialisierung |
| STAT_DRIVE_MODE_WERT | 0-n | - | int | - | - | - | - | - | 0 = Kein Modus eingeschaltet 1 = LBV 2 = ALBV 3 = Initialisierung (Einstiegsautomatik) 4 = Memory |
| STAT_RESET_WERT | 0-n | - | int | - | - | - | - | - | 0 = Normalfunktin 1 = unerwarteter Reset erkannt |

### ARG_0X4002

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TEST_4002 | - | - | int | - | - | - | - | - | - | - | TEST VARIABLE |

### RES_0X4003

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ALBV_IN_HALL1A | 0/1 | - | int | - | - | - | - | - | Digital Signal Hall1A |
| STAT_ALBV_IN_HALL1B | 0/1 | - | int | - | - | - | - | - | Digital Signal Hall1B |
| STAT_ALBV_IN_HALL2A | 0/1 | - | int | - | - | - | - | - | Digital Signal Hall2A |
| STAT_ALBV_IN_HALL2B | 0/1 | - | int | - | - | - | - | - | Digital Signal Hall2B |
| STAT_ALBV_AD_IN_HALL1A_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert fuer Hall1A |
| STAT_ALBV_AD_IN_HALL1B_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert fuer Hall1B |
| STAT_ALBV_AD_IN_HALL2A_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert fuer Hall2A |
| STAT_ALBV_AD_IN_HALL2B_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert fuer Hall2B |
| STAT_ALBV_IN_EHALL1A | 0/1 | - | int | - | - | - | - | - | Digital Signal EHall1A |
| STAT_ALBV_IN_EHALL2A | 0/1 | - | int | - | - | - | - | - | Digital Signal EHall1B |
| STAT_ALBV_AD_IN_EHALL1A_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert fuer EHall1A |
| STAT_ALBV_AD_IN_EHALL1B_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert fuer EHall1B |
| STAT_ALBV_AD_IN_MOTTEMP_1A_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert fuer Mottemp1A |
| STAT_ALBV_AD_IN_MOTTEMP_2A_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert fuer Mottemp2A |
| STAT_ALBV_AD_IN_UBATT_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert fuer Versorgungspannung Ubatt |
| STAT_ALBV_AD_IN_CODIERUNG_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert fuer Codiereingang |
| STAT_ALBV_AD_IN_DIAG_MOT1A_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert für Signal DIAG_MOTOR_1A |
| STAT_ALBV_AD_IN_DIAG_MOT1B_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert für Signal DIAG_MOTOR_1B |
| STAT_ALBV_AD_IN_DIAG_MOT2A_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert für Signal DIAG_MOTOR_2A |
| STAT_ALBV_AD_IN_DIAG_MOT2B_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert für Signal DIAG_MOTOR_2B |
| STAT_ALBV_AD_IN_STROM_MOT_1_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert fuer Strom Motor 1 |
| STAT_ALBV_AD_IN_STROM_MOT_2_WERT | 0-n | - | int | - | - | - | - | - | AD-Wert fuer Strom Motor 2 |
| STAT_ALBV_IN_ENADIAGA_MOT1 | 0/1 | - | int | - | - | - | - | - | Digital Signal ENA/DIAGA Mot1 |
| STAT_ALBV_IN_ENBDIAGB_MOT1 | 0/1 | - | int | - | - | - | - | - | Digital Signal ENB/DIAGB Mot1 |
| STAT_ALBV_IN_ENADIAGA_MOT2 | 0/1 | - | int | - | - | - | - | - | Digital Signal ENA/DIAGA Mot2 |
| STAT_ALBV_IN_ENBDIAGB_MOT2 | 0/1 | - | int | - | - | - | - | - | Digital Signal ENB/DIAGB Mot2 |

### RES_0X4004

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ALBV_OUT_INA_MOT1 | 0/1 | - | int | - | - | - | - | - | Digital Signal INA Motor 1 |
| STAT_ALBV_OUT_ENA_MOT1 | 0/1 | - | int | - | - | - | - | - | Digital Signal ENA Motor 1 |
| STAT_ALBV_OUT_INB_MOT1 | 0/1 | - | int | - | - | - | - | - | Digital Signal INB Motor 1 |
| STAT_ALBV_OUT_ENB_MOT1 | 0/1 | - | int | - | - | - | - | - | Digital Signal ENB Motor 1 |
| STAT_ALBV_OUT_INA_MOT2 | 0/1 | - | int | - | - | - | - | - | Digital Signal INA Motor 2 |
| STAT_ALBV_OUT_ENA_MOT2 | 0/1 | - | int | - | - | - | - | - | Digital Signal ENA Motor 2 |
| STAT_ALBV_OUT_INB_MOT2 | 0/1 | - | int | - | - | - | - | - | Digital Signal INB Motor 2 |
| STAT_ALBV_OUT_ENB_MOT2 | 0/1 | - | int | - | - | - | - | - | Digital Signal ENB Motor 2 |
| STAT_ALBV_OUT_PWM_MOT1_WERT | 0-n | - | int | - | - | - | - | - | PWM-Wert fuer Motor 1 |
| STAT_ALBV_OUT_PWM_MOT2_WERT | 0-n | - | int | - | - | - | - | - | PWM-Wert fuer Motor 2 |
| STAT_ALBV_OUT_SELBSTHALTUNG | 0/1 | - | int | - | - | - | - | - | Digital Signal fuer Selbsthaltung |
| STAT_ALBV_OUT_VPUP | 0/1 | - | int | - | - | - | - | - | Digital Signal fuer Einschalten Versogungspannung VPUP |

### RES_0X4005

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTANDSVARIABLE1_WERT | 0-n | - | int | - | - | - | - | - | Zustandsvariable_1 |
| STAT_ZUSTANDSVARIABLE2_WERT | 0-n | - | int | - | - | - | - | - | Zustandsvariable_2 |
| STAT_ZUSTANDSVARIABLE3_WERT | 0-n | - | int | - | - | - | - | - | Zustandsvariable_3 |

### ARG_0X4006

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_M2 | - | - | unsigned char | - | - | - | - | - | - | - | PWM (0-100%) |
| DREHRICHTUNG_M1 | - | - | unsigned char | - | - | - | - | - | - | - | 0 : Freilauf; 1 : Drehrichtung Öffnen; 2 : Drehrichtung Schliessen; 3 : Aktiv Bremsen; |
| TIMEOUT_M1 | - | - | unsigned char | - | - | - | - | - | - | - | 0 = kein Timeout 1 - 255 = Timeout Zeit in 100ms Schritte |
| PWM_M1 | - | - | unsigned char | - | - | - | - | - | - | - | PWM (0-100%) |
| DREHRICHTUNG_M2 | - | - | unsigned char | - | - | - | - | - | - | - | 0 : Freilauf; 1 : Drehrichtung Öffnen; 2 : Drehrichtung Schliessen; 3 : Aktiv Bremsen; |
| PWM_M2 | - | - | unsigned char | - | - | - | - | - | - | - | PWM (0-100%) |
| TIMEOUT_M2 | - | - | unsigned char | - | - | - | - | - | - | - | 0 = kein Timeout 1 - 255 = Timeout Zeit in 100ms Schritte |

### RES_0X4007

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALLIMPULSE_SCHLIESSEN_L_WERT | 0-n | - | int | - | - | - | - | - | ZustAnzahl Hall-Impulse über Lebenzeit beim Schliessen (Links) |
| STAT_HALLIMPULSE_OEFFNEN_L_WERT | 0-n | - | int | - | - | - | - | - | Anzahl Hall-Impulse über Lebenzeit beim Öffnen (Links); |
| STAT_HALLIMPULSE_SCHLIESSEN_R_WERT | 0-n | - | int | - | - | - | - | - | Anzahl Hall-Impulse über Lebenzeit beim Schliessen (Rechts); |
| STAT_HALLIMPULSE_OEFFNEN_R_WERT | 0-n | - | int | - | - | - | - | - | Anzahl Hall-Impulse über Lebenzeit beim Öffnen (Rechts) |
| STAT_HALLIMPULSE_MAN_L_WERT | 0-n | - | int | - | - | - | - | - | Anzahl Hall-Impulse über Lebenzeit im LBV Modus (Links) |
| STAT_HALLIMPULSE_MAN_R_WERT | 0-n | - | int | - | - | - | - | - | Anzahl Hall-Impulse über Lebenzeit im LBV Modus (Rechts) |
| STAT_IMPULSE_OEFFNEN_ALBV_L_WERT | 0-n | - | int | - | - | - | - | - | Anzahl Hall-Impulse über Lebenzeit beim Öffnen im aLBV Modus (Links) |
| STAT_IMPULSE_SCHLIESSEN_ALBV_L_WERT | 0-n | - | int | - | - | - | - | - | Anzahl Hall-Impulse über Lebenzeit beim Schliessen im aLBV Modus (Links) |
| STAT_IMPULSE_OEFFNEN_ALBV_R_WERT | 0-n | - | int | - | - | - | - | - | Anzahl Hall-Impulse über Lebenzeit beim Öffnen im aLBV Modus (Rechts) |
| STAT_IMPULSE_SCHLIESSEN_ALBV_R_WERT | 0-n | - | int | - | - | - | - | - | Anzahl Hall-Impulse über Lebenzeit beim Schliessen im aLBV Modus (Rechts) |
| STAT_VERSTELLUNGEN_OEFFNEN_ALBV_L_WERT | 0-n | - | int | - | - | - | - | - | Anzahl Verstellung beim Öffnen im ALBV Modus (Links) |
| STAT_VERSTELLUNGEN_SCHLIESSEN_ALBV_L_WERT | 0-n | - | int | - | - | - | - | - | Anzahl Verstellung beim Schliessen im ALBV Modus (Links) |
| STAT_VERSTELLUNGEN_OEFFNEN_ALBV_R_WERT | 0-n | - | int | - | - | - | - | - | Anzahl Verstellung beim Öffnen im ALBV Modus (Rechts) |
| STAT_VERSTELLUNGEN_SCHLIESSEN_ALBV_R_WERT | 0-n | - | int | - | - | - | - | - | Anzahl Verstellung beim Schliessen im ALBV Modus (Rechts) |

### TAB_ENDWERT

| WERT | TEXT |
| --- | --- |
| 0x0000 | Endwertgebersignal Low (Motor links ist NICHT in der Endlage) |
| 0x0001 | Endwertgebersignal High (Motor links ist in der Endlage) |
| 0x00FF | Sensorwert ungültig bzw. Sensor nicht eingebaut |

### TAB_LBV_TASTER

| WERT | TEXT |
| --- | --- |
| 0x0000 | Taster nicht gedrueckt |
| 0x0001 | Taster öffnen |
| 0x0002 | Taster schliessen |

### TAB_MEMORY

| WERT | TEXT |
| --- | --- |
| 0x0000 | keine Aktion |
| 0x0001 | Memoryposition anfahren |
| 0x0002 | Memoryposition speichern |

### TAB_MOTORSTATUS

| WERT | TEXT |
| --- | --- |
| 0x0000 | Motor aus |
| 0x0001 | Motor startet |
| 0x0002 | Motor läuft |

### TAB_TASTER

| WERT | TEXT |
| --- | --- |
| 0x0001 | 1 |
| 0x0002 | 2 |
| 0x0003 | 3 |
| 0x0004 | 4 |
| 0x0005 | 5 |
| 0x0006 | 6 |

### TAB_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | Initialisierung in Ordnung |
| 0xFF | Initialisierung nicht in Ordnung |

### ARG_0XD787

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLL_POSITION | % | - | int | - | - | - | - | - | - | - | Anfahren einer Sollposition für Motor rechts,Sollposition (0-100%) |
| SOLL_GESCHWINDKEIT | % | - | int | - | - | - | - | - | - | - | Soll-Geschwindigkeit (0-100 %) |
| TIMEOUT | s | - | int | - | - | - | - | - | - | - | Maximale Ansteuerzeit in 100ms Schritte (Timeout) |

### ARG_0XD789

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLL_QUER_OFFSET_ALBV_WERT | m/s² | - | int | - | - | 100 | - | - | - | - | Setzt den Wert des von dem ALBV-Steuergergät berechnete Querbeschleunigungsoffsets |

### RES_0XD781

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_GESCHWINDIGKEIT_WERT | km/h | - | int | - | - | - | - | - | Liefert das Signal der Geschwindigkeit, wie sie über BUS empfangen wird. |
| STAT_BUS_IN_LAENGSBESCHLEUNIGUNG_WERT | m/s² | - | int | - | - | - | 100 | - | Signal Längsbeschleunigung des Fahrzeugs über BUS |
| STAT_BUS_IN_QUERSBESCHLEUNIGUNG_WERT | m/s² | - | int | - | - | - | 100 | - | Signal Querbeschleunigung des Fahrzeugs über BUS |
| STAT_BUS_IN_GIERRATE_WERT | Grad/s | - | int | - | - | - | 100 | - | Signal Gierrate des Fahrzeugs über BUS |
| STAT_BUS_IN_LENKRADWINKEL_WERT | Grad | - | int | - | - | - | 10 | - | Signal Lenkradwinkel des Fahrzeugs über BUS |
| STAT_BUS_IN_LENKRADWINKELGESCHW_WERT | Grad/s | - | int | - | - | - | 10 | - | Signal Lenkradwinkelgeschwindigeit des Fahrzeugs über BUS |
| STAT_BUS_IN_WINKELFAHRPEDAL_WERT | % | - | int | - | - | - | - | - | Signal Winkel Fahrpedal über BUS |
| STAT_BUS_IN_AUSSENTEMPERATUR_WERT | °C | - | int | - | - | - | - | - | Signal Aussentemperatur über BUS |
| STAT_BUS_IN_LBV_TASTER_NR | 0-n | - | int | - | TAB_LBV_TASTER | - | - | - | Signal Taster LBV über BUS, 0= Taster nicht gedrueckt, 1 = Taster öffnen, 2= Taster schliessen |
| STAT_BUS_IN_ALBV_TASTER_EIN | 0/1 | - | int | - | - | - | - | - | Signal Taster ALBV über BUS, 0= Taster nicht gedrueckt, 1= Taster gedrueckt |
| STAT_BUS_IN_MEMORY_TASTER_POS_WERT | - | - | int | - | - | - | - | - | Signal Taster Memory-Position über BUS (CKM) |
| STAT_BUS_IN_MEMORY_TASTER_FUNC_NR | 0-n | - | int | - | TAB_MEMORY | - | - | - | Signal Taster Memory Funktion über BUS (CKM): 0 = keine Aktion 1 = Memoryposition anfahren 2 = Memoryposition speichern |
| STAT_BUS_IN_KLR_EIN | 0/1 | - | int | - | - | - | - | - | Signal Klemme R.  0 = Klemme R aus; 1 = Klemme R ein |
| STAT_BUS_IN_KL15_EIN | 0/1 | - | int | - | - | - | - | - | Signal Klemme 15.  0 = Klemme 15 aus; 1 = Klemme 15 ein |
| STAT_BUS_IN_KL50_EIN | 0/1 | - | int | - | - | - | - | - | Signal Klemme 50.  0 = Klemme 50 aus; 1 = Klemme 50 ein |
| STAT_BUS_IN_MOTORSTATUS_NR | 0-n | - | int | - | TAB_MOTORSTATUS | - | - | - | Signal Motorstatus über BUS: 0 = Motor aus 1 = Motor startet 2 = Motor läuft |
| STAT_FA_BUS_IN_TUER_KONTAKT_EIN | 0/1 | - | int | - | - | - | - | - | Gibt den Status des Türkontakts aus: 0 = Tür geschlossen, 1 = Tür offen |
| STAT_FA_BUS_IN_RUECKWAERTSGANG_EIN | 0/1 | - | int | - | - | - | - | - | Gibt den Status des Rückwärtsganges aus: 0 = kein Rückwärtsgang, 1 = Rückwärtsgang eingeschaltet |

### RES_0XD7FC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_MEM_KEY_WERT | % | - | int | - | - | - | - | - | Liefert die aktuelle Soll-Memory-Position |
| STAT_POSITION_MEM_POS1_WERT | % | - | int | - | - | - | - | - | Liefert die aktuelle Position für Schlüssel 1  - Position 1 |
| STAT_POSITION_MEM_POS2_WERT | % | - | int | - | - | - | - | - | Liefert die aktuelle Position für Schlüssel 1  - Position 2 |
| STAT_POSITION_MEM_POS_KEY_WERT | % | - | int | - | - | - | - | - | Liefert die aktuelle Position für Schlüssel 1  - Key Position |

### RES_0XD7FD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PIA_SCHLUESSELNUMMER_WERT | - | - | int | - | - | - | - | - | Eingestellte  Schlüsselnummer |
| STAT_PIA_POSITION_ALBV_WERT | % | - | int | - | - | - | - | - | Eingestellte Position für PIA |

### RES_0XD78A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEWEGUNG_MOTOR_ALBV_LINKS_NR | 0-n | - | int | - | TAB_BEWEGUNG | - | - | - | Motor Ansteuerung links 0 = keine Bewegung 1 = Öffen 2 = Schliessen |
| STAT_BEWEGUNG_MOTOR_ALBV_RECHTS_NR | 0-n | - | int | - | TAB_BEWEGUNG | - | - | - | Motor Ansteuerung rechts 0 = keine Bewegung 1 = Öffen 2 = Schliessen |
| STAT_MOTORSTROM_ALBV_LINKS_WERT | A | - | int | - | - | - | 10 | - | Liefert den Wert des linken Motorstroms in Ampere |
| STAT_MOTORSTROM_ALBV_RECHTS_WERT | A | - | int | - | - | - | 10 | - | Liefert den Wert des rechten Motorstroms in Ampere |
| STAT_MOTORTEMPERATUR_ALBV_LINKS_WERT | °C | - | int | - | - | - | - | - | Liefert den Temperaturwert des linken Motor in Grad Celsius |
| STAT_MOTORTEMPERATUR_ALBV_RECHTS_WERT | °C | - | int | - | - | - | - | - | Liefert den Temperaturwert des rechten Motor in Grad Celsius |

### TAB_BEWEGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stopp |
| 0x01 | Oeffnen |
| 0x02 | Schliessen |

### RES_0XD780

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EHALL_ALBV_LINKS_NR | 0-n | - | int | - | TAB_ENDWERT | - | - | - | Liefert den Status des Endwertgebers links : 0 = Endwertgebersignal Low (Motor links ist NICHT in der Endlage) 1 = Endwertgebersignal High (Motor links ist in der Endlage) 255 = Sensorwert ungültig bzw. Sensor nicht eingebaut |
| STAT_EHALL_ALBV_RECHTS_NR | 0-n | - | int | - | TAB_ENDWERT | - | - | - | Liefert den Status des Endwertgebers rechts : 0 = Endwertgebersignal Low (Motor rechts ist NICHT in der Endlage) 1 = Endwertgebersignal High (Motor rechts ist in der Endlage) 255 = Sensorwert ungültig bzw. Sensor nicht eingebaut |

### ARG_0XD788

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLL_LW_OFFSET_ALBV_WERT | Grad | - | int | - | - | 10 | - | - | - | - | Setzt den Wert des von dem ALBV-Steuergergät berechnete Lenkwinkeloffsets |

### RES_0XD7FB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_ALBV_LINKS_WERT | % | - | int | - | - | - | - | - | Position des linken Motors |
| STAT_POSITION_ALBV_RECHTS_WERT | % | - | int | - | - | - | - | - | Position des rechten Motors |

### ARG_0XD786

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLL_POSITION | % | - | int | - | - | - | - | - | - | - | Anfahren einer Sollposition für Motor links,Sollposition (0-100%) |
| SOLL_GESCHWINDKEIT | % | - | int | - | - | - | - | - | - | - | Soll-Geschwindigkeit (0-100 %) |
| TIMEOUT | s | - | int | - | - | - | - | - | - | - | Maximale Ansteuerzeit in 100ms Schritte (Timeout) |

### ARG_0XD7FE

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER | 0-n | - | int | - | TAB_TASTER | - | - | - | - | - | Auswahl Taster : 1 = Taster LBV Öffnen; 2 = Taster LBV Schliessen; 3 = Taster ALBV im SZM; 4 = Memory Taster M; 5 = Memory Taster 1; 6 = Memory Taster 2 |
| AKTION | - | - | int | - | - | - | - | - | - | - | Simuliert die Signale der Tasten für den Heckklappenlift. 0=Taster nicht gedrückt, 1=Taster gedrückt |
