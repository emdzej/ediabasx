# tsvc01.prg

## General

|  |  |
| --- | --- |
| File | tsvc01.prg |
| Type | PRG |
| Jobs | 25 |
| Tables | 75 |
| Origin | BMW EI-61 Armin Zeller |
| Revision | 0.003 |
| Author | CEL R&D Sivaganan Sivaganan |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | TSVC |  |  |
| ORIGIN | string | BMW EI-61 Armin Zeller |  |  |
| REVISION | string | 0.003 |  |  |
| AUTHOR | string | CEL R&D Sivaganan Sivaganan |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.22 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

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

### HERSTELLINFO_LESEN

Lieferant und Herstelldatum lesen UDS  : $22   ReadDataByIdentifier UDS  : $F18A SystemSupplierIdentifier UDS  : $F18B ECUManufactoringData Modus: Default

_No arguments._

### ENERGIESPARMODE

Einstellen des Energiesparmodes UDS   : $31   RoutineControlRequestServiceID UDS   : $01   startRoutine UDS   : $0F0C DataIdentifier ControlEnergySavingMode UDS   : $??   Mode Modus : Default

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | 0x00: Normalmode 0x01: Fertigungsmode 0x02: Transportmode 0x03: Flashmode |

### STATUS_ENERGIESPARMODE

Energy-Saving-Mode auslesen UDS  : $22   ReadDataByIdentifier UDS  : $100A DataIdentifier EnergySavingMode Modus: Default

_No arguments._

### SENSOREN_ANZAHL_LESEN

Anzahl der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers Modus: Default

_No arguments._

### SENSOREN_IDENT_LESEN

Identifikation der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers UDS  : $16xx SubbusMemberSerialNumber Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_NR | long | optionales Argument gewuenschter Sensor xx (0x01 - 0xFF) |

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

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
| 0x000072 | ASIN AWCO.LTD |
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

### VERBAUORTTABELLE

| ORT | ORTTEXT |
| --- | --- |
| 0x0100 | Batteriesensor |
| 0x0200 | Elektrische Wasserpumpe |
| 0x0300 | Generator 1 |
| 0x0350 | Generator 2 |
| 0x0400 | Schaltzentrum Lenksäule |
| 0x0500 | DSC Sensor-Cluster |
| 0x0600 | Nahbereichsradarsensor links |
| 0x0700 | Nahbereichsradarsensor rechts |
| 0x0800 | Funkempfänger |
| 0x0900 | Elektrische Lenksäulenverriegelung |
| 0x0A00 | Regen- Lichtsensor |
| 0x290A00 | DSC Hydraulikblock |
| 0x0B00 | Nightvision Kamera |
| 0xFFFF | unbekannter Verbauort |

### PARTNRTABELLE

| PART_NR | BMW_NR | KOMMENTAR |
| --- | --- | --- |
| -- | -- | unbekannte Teilenummer |

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
| 0x020600 | Energiesparmode aktiv | 0 |
| 0x001002 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT_ZGW | 0 |
| 0x002711 | CODING_EVENT_NOT_CODED | 0 |
| 0x002713 | CODING_EVENT_SIGNATURE_ERROR | 0 |
| 0x002712 | CODING_EVENT_TRANSACTION_FAILED | 0 |
| 0x002714 | CODING_EVENT_WRONG_VEHICLE | 0 |
| 0x002715 | CODING_EVENT_INVALID_DATA | 0 |
| 0x800B80 | Deadjusted TV_r | 0 |
| 0x800B81 | Deadjusted, TV_l | 0 |
| 0x800B82 | LVDS- Transfer, TV_r | 0 |
| 0x800B83 | LVDS- Transfer, TV_l | 0 |
| 0x800B84 | LVDS- Transfer,  SV_r | 0 |
| 0x800B85 | LVDS- Transfer SV_l | 0 |
| 0x800B86 | LVDS- Transfer RV | 0 |
| 0x800B87 | Sensor pixel failure TV_r | 0 |
| 0x800B88 | Sensor pixel failure, TV_l | 0 |
| 0x800B89 | Sensor pixel failure, SV_r | 0 |
| 0x800B8A | Sensor pixel failure, SV_l | 0 |
| 0x800B8B | Sensor pixel failure RV | 0 |
| 0x800B8C | Max.Supply Current, TV_r | 0 |
| 0x800B8D | Max.Supply Current, TV_l | 0 |
| 0x800B8E | Max.Supply Current, SV_r | 0 |
| 0x800B8F | Max.Supply Current, SV_l | 0 |
| 0x800B90 | Max.Supply Current, RV ok | 0 |
| 0x800B97 | Adjustment not executed,TV_r | 1 |
| 0x800B98 | Adjustment not executed, TV_l | 1 |
| 0x800B99 | Adjustment not executed, RV | 1 |
| 0x800B9A | ECU: HW Defect | 0 |
| 0x800B9B | ECU: Flash Modules Host  don’t match | 0 |
| 0x800B9C | ECU: Flash Modules DSP don’t match | 0 |
| 0x800B9D | ECU  Overtemperature | 1 |
| 0x800B9E | ECU: Voltage Supply Overvoltage | 1 |
| 0x800B9F | ECU: Voltage Supply Undervoltage | 1 |
| 0x800BA1 | Memory Error, TV_r | 0 |
| 0x800BA2 | Memory Error, TV_l | 0 |
| 0x800BA4 | Memory Error, SV-l | 0 |
| 0x800BA5 | Memory Error, RV | 0 |
| 0x800BA7 | Internal voltage error | 0 |
| 0x800BA8 | Processor error | 0 |
| 0x800BA9 | Error in FBAS output, shortcut | 0 |
| 0x800BB0 | Internal voltage error | 0 |
| 0x800BB1 | ECU: SW-ERROR Host | 0 |
| 0x800BB2 | ECU: SW-ERROR DSP | 0 |
| 0x800BB3 | Picture freeze | 0 |
| 0xCA840B | CAN-Fehler | 0 |
| 0xCA8414 | CAN BUS OFF | 0 |
| 0xCA8C00 | Lin-Bus error, TV_r ok | 0 |
| 0xCA8C01 | Lin-Bus error, TV_l | 0 |
| 0xCA8C02 | Lin-Bus error, SV_r | 0 |
| 0xCA8C03 | Lin-Bus error, SV_l | 0 |
| 0xCA8C04 | Lin-Bus error, RV  ok | 0 |
| 0xCA9400 | K-CAN ID  3A4h (Sekundenzähler SysFkt) | 0 |
| 0xCA9401 | K-CAN ID 330h (Kilometerstand/Reichweite) | 0 |
| 0xCA9402 | K-CAN ID 1A1h (Geschwindigkeit Fahrzeug) | 0 |
| 0xCA9403 | K-CAN ID 3A0h (Fahrzeugzustand) | 0 |
| 0xCA9404 | K-CAN ID 21Ah (Lampenzustand) | 0 |
| 0xCA9405 | K-CAN ID 387h (Bedienung Taster SideView)  | 0 |
| 0xCA9406 | K-CAN ID 301h (IST Lenkwinkel K-CAN ) | 0 |
| 0xCA9407 | K-CAN ID 12Fh (Klemmen) | 0 |
| 0xCA9408 | K-CAN ID 2E4h (Status Anhänger) | 0 |
| 0xCA9409 | K-CAN ID 314h (Status Fahrlicht) | 0 |
| 0xCA940A | K-CAN ID 304h (Status Gang) | 0 |
| 0xCA940B | K-CAN ID 3B0h (Status Gang Rückwärts) | 0 |
| 0xCA940C | K-CAN ID 1A6h (Wegstrecke) | 0 |
| 0xCA940D | K-CAN ID 2FCh (ZV und Klappenzustand) | 0 |
| 0xCAAC00 | K-CAN ID  3A4h  (Sekundenzähler SysFkt) | 0 |
| 0xCAAC01 | K-CAN ID 330h (Kilometerstand/Reichweite) | 0 |
| 0xCAAC02 | K-CAN ID 1A1h (Geschwindigkeit Fahrzeug) | 0 |
| 0xCAAC03 | K-CAN ID 3A0h (Fahrzeugzustand) | 0 |
| 0xCAAC04 | K-CAN ID 21Ah (Lampenzustand) | 0 |
| 0xCAAC05 | K-CAN ID 387h (Bedienung Taster SideView)  | 0 |
| 0xCAAC06 | K-CAN ID 301h (IST Lenkwinkel K-CAN ) | 0 |
| 0xCAAC07 | K-CAN ID 12Fh (Klemmen) | 0 |
| 0xCAAC08 | K-CAN ID 2E4h (Status Anhänger) | 0 |
| 0xCAAC09 | K-CAN ID 314h (Status Fahrlicht) | 0 |
| 0xCAAC0A | K-CAN ID 304h (Status Gang) | 0 |
| 0xCAAC0B | K-CAN ID 3B0h (Status Gang Rückwärts) | 0 |
| 0xCAAC0C | K-CAN ID 1A6h (Wegstrecke) | 0 |
| 0xCAAC0D | K-CAN ID 2FCh (ZV und Klappenzustand) | 0 |
| 0x800BAA | Error in FBAS output, not connnected | 0 |
| 0x800BA3 | Memory Error, SV_r | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | ja |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | BATERIE_SPANNUNG | V | - | unsigned int | - | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x002847 | PIA_E_IO_ERROR | 0 |
| 0x001001 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 0 |
| 0x002001 | NVM_E_WRITE_FAILED | 0 |
| 0x002002 | NVM_E_READ_FAILED | 0 |
| 0x002003 | NVM_E_CONTROL_FAILED | 0 |
| 0x002004 | NVM_E_ERASE_FAILED | 0 |
| 0x002006 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x002010 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x002007 | NVM_E_READ_ALL_FAILED | 0 |
| 0x800bb1 | DEM_EVENT_HOST_SW_ERROR | 0 |
| 0x800bb2 | DEM_EVENT_DSP_SW_ERROR | 0 |
| 0x800bb3 | DEM_EVENT_DSP_PICTURE_FREEZE | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | ja |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BUS_IN_TASTE_SV_EIN | 0xD37D | STAT_BUS_IN_TASTE_SV_EIN | Status des Tasters für die SideView-Kamera über den Bus ausgeben. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| TVC_KALIB_VERDREHUNG_SERVICE | 0xD3B3 | - | Startet die Kalibrierung der TopView- und Rückfahrkameras mit Hilfe der Software im Service. Es wird solange das Referenzbild angezeigt, bis Argument REFERENZBILD wieder auf 0 geht. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3B3 | - |
| AUSSTATTUNG_TRSVC | 0xD37F | - | Gibt den Verbau der Top-/ Side-/ und RearViewkameras zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD37F |
| WINKELVERDREHUNG_TV_KAM_RECHTS | 0xD378 | - | Gibt die Kalibrierdaten für die Verdrehung der Kameras aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD378 |
| KALIBRIERUNG_TV_MONTAGE | 0xD39C | - | Gibt den Status der automatischen Kalibrierung der TopViewCameras im Werk aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD39C |
| KALIBRIERUNG_TV_INIT | 0xD381 | - | Liest den Status der Kalibrierung der TopView-Kameras aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD381 |
| SPANNUNG_KLEMME_15N_WERT | 0xDAD2 | STAT_SPANNUNG_KLEMME_15N_WERT | Job zum Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| BUS_IN_GESCHWINDIGKEIT_WERT | 0xD240 | STAT_BUS_IN_GESCHWINDIGKEIT_WERT | Liefert das Signale der Geschwindigkeit, wie sie über BUS empfangen wird. | km/h | - | - | int | - | - | - | - | - | 22 | - | - |
| ABWEICHUNG_TV_KAM_RECHTS | 0xD37B | - | Gibt die Abweichung in Pixel bei der Kalibrierung der Kamera aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD37B |
| WINKELVERDREHUNG_RV_KAM | 0xD3B6 | - | Gibt die Kalibrierdaten für die Verdrehung der Rückfahrkameras aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3B6 |
| TVC_KALIB_ABWEICHUNG_SERVICE | 0xD3B2 | - | Startet die Kalibrierung der TopView- und RearView-Kameras mit Hilfe der Software im Service. Es wird solange das Referenzbild angezeigt, bis Argument REFERENZBILD wieder auf 0 geht. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3B2 | - |
| STROMAUFNAHME_RV_KAM | 0xD39E | STAT_STROM_KAM_RV_WERT | Gibt die Stromaufnahme der Rückfahrkamera in mA aus. | mA | - | - | int | - | - | - | - | - | 22 | - | - |
| KALIBRIERUNG_TRVC_MONTAGE | 0xD37C | - | Startet die automatische Kalibrierung der TopView- und Rückfahrkamera in der Montage. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD37C | RES_0xD37C |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | Job liefert den Status der Klemme(n) im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| ABWEICHUNG_RV_KAM | 0xD3B5 | - | Gibt die Abweichung in Pixel bei der Kalibrierung der Rückfahrkamera aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3B5 |
| KALIBRIERUNG_RV_INIT | 0xD39F | STAT_KALIBRIERUNG_RV_INIT | Liest den Status der Kalibrierung der Rückfahrkameras aus. | 0-n | - | - | int | TAB_0xD39F | - | - | - | - | 22 | - | - |
| STEUERN_HEIZUNG_RFK_KAM | 0xD3A0 | - | Steuert die Heizung an der Rückfahrkamera an. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3A0 | - |
| WINKELVERDREHUNG_TV_KAM_LINKS | 0xD379 | - | Gibt die Kalibrierdaten für die Verdrehung der Kameras aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD379 |
| STROMAUFNAHME_TSV_KAM | 0xD380 | - | Gibt die Stromaufnahme der Top-SideView-Kameras in mA aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD380 |
| HEIZUNG_RFK_KAM_EIN | 0xD3A0 | STAT_HEIZUNG_RFK_KAM_EIN | Gibt den Status der Heizung an der Rückfahrkamera aus. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| ABWEICHUNG_TV_KAM_LINKS | 0xD37A | - | Gibt die Abweichung in Pixel bei der Kalibrierung der Kamera aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD37A |
| TESTBILD_KAMERA | 0xD3B4 | - | Startet die Testbildausgabe in den Kameras. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3B4 | - |
| KALIBRIERUNG_RV_MONTAGE | 0xD39D | STAT_KALIBRIERUNG_RV_MONTAGE | Gibt den Status der automatischen Kalibrierung der Rüchfahrkamera im Werk aus. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STEUERN_KALIB_KAM_RESET | 0xD38E | - | RESET der Kamera-Kalibrierung in den Anlieferzustand. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD38E | - |
| NACHLAUFZEIT_KLEMME_15N | 0xDB2D | STAT_NACHLAUFZEIT_KLEMME_15N_WERT | Nachlaufzeit der Klemme 15N über BUS-Nachrich in Sekunden: Interpretation siehe BN-DB | s | - | - | int | - | - | - | - | - | 22 | - | - |
| STEUERN_SIGNALAUSGABE | 0xA01A | - | Gibt das Ausgangssignal einer Quelle vor. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01A | - |
| STEUERN_TEST_VIDEOAUSGANG | 0xA01B | - | Führt an den Ausgängen der Quelle eine Impedanzmessung durch. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01B | RES_0xA01B |
| ECU_VARIANT | 0x4100 | - | ECU variant functionality (common S/W)  Normally read-only, write for supplier development use only. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4100 | RES_0x4100 |
| HOST_APPLICATION_SUPPLIER_VERSION | 0x4101 | STAT_HOST_APPLICATION_SUPPLIER_VERSION_WERT | Supplier s version string for host application. | ASCII | - | - | string[48] | - | - | - | - | - | 22 | - | - |
| DSP_APPLICATION_SUPPLIER_VERSION | 0x4102 | STAT_DSP_APPLICATION_SUPPLIER_VERSION_WERT | Supplier s version string for DSP application. | ASCII | - | - | string[48] | - | - | - | - | - | 22 | - | - |
| DSP_PBL-A_SUPPLIER_VERSION | 0x4103 | STAT_DSP_PBL-A_SUPPLIER_VERSION_WERT | Supplier s version string for DSP PBL-A. | ASCII | - | - | string[48] | - | - | - | - | - | 22 | - | - |
| DSP_PBL-B_SUPPLIER_VERSION | 0x4104 | STAT_DSP_PBL-B_SUPPLIER_VERSION_WERT | Supplier s version string for DSP PBL-B. | ASCII | - | - | string[48] | - | - | - | - | - | 22 | - | - |
| DSP_PRE-PBL_SUPPLIER_VERSION | 0x4105 | STAT_DSP_PRE-PBL_SUPPLIER_VERSION_WERT | Supplier s version string for DSP Pre-PBL. | ASCII | - | - | string[48] | - | - | - | - | - | 22 | - | - |
| ECU_TEMPERATURE | 0x4106 | STAT_ECU_TEMPERATURE_WERT | ECU internal temperature | °C | - | - | char | - | - | - | - | - | 22 | - | - |
| TV_RIGHT_CAMERA_SERIAL_NUMBER | 0x4107 | STAT_TV_RIGHT_CAMERA_SERIAL_NUMBER_WERT | ECU cached camera serial numbe | - | - | - | data[9] | - | - | - | - | - | 22 | - | - |
| TV_LEFT_CAMERA_SERIAL_NUMBER | 0x4108 | STAT_TV_LEFT_CAMERA_SERIAL_NUMBER_WERT | ECU cached camera serial numbe | - | - | - | data[9] | - | - | - | - | - | 22 | - | - |
| SV_RIGHT_CAMERA_SERIAL_NUMBER | 0x4109 | STAT_SV_RIGHT_CAMERA_SERIAL_NUMBER_WERT | ECU cached camera serial number | - | - | - | data[9] | - | - | - | - | - | 22 | - | - |
| SV LEFT_CAMERA_SERIAL_NUMBER | 0x410A | STAT_SV_LEFT_CAMERA_SERIAL_NUMBER_WERT | ECU cached camera serial number | - | - | - | data[9] | - | - | - | - | - | 22 | - | - |
| REAR_CAMERA_SERIAL_NUMBER | 0x410B | STAT_REAR_CAMERA_SERIAL_NUMBER_WERT | ECU cached camera serial number | - | - | - | data[9] | - | - | - | - | - | 22 | - | - |
| TV_RIGHT_CAMERA_STATUS | 0x410C | STAT_TV_RIGHT_CAMERA_STATUS_WERT | Camera status (via LIN) | HEX | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| TV_LEFT_CAMERA_STATUS | 0x410D | STAT_TV_LEFT_CAMERA_STATUS_WERT | Camera status (via LIN) | HEX | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SV_RIGHT_CAMERA_STATUS | 0x410E | STAT_SV_RIGHT_CAMERA_STATUS_WERT | Camera status (via LIN) | HEX | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SV_LEFT_CAMERA_STATUS | 0x410F | STAT_SV_LEFT_CAMERA_STATUS_WERT | Camera status (via LIN) | HEX | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| REAR_CAMERA_STATUS | 0x4110 | STAT_REAR_CAMERA_STATUS_WERT | Camera status (via LIN) | HEX | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| TV_RIGHT_CAMERA_ID | 0x4111 | STAT_TV_RIGHT_CAMERA_ID_WERT | Camera CMOS module ID (via LIN) | HEX | - | - | unsigned long | - | - | - | - | - | 22 | - | - |
| TV_LEFT_CAMERA_ID | 0x4112 | STAT_TV_LEFT_CAMERA_ID_WERT | Camera CMOS module ID (via LIN) | HEX | - | - | unsigned long | - | - | - | - | - | 22 | - | - |
| SV_RIGHT_CAMERA_ID | 0x4113 | STAT_SV_RIGHT_CAMERA_ID_WERT | Camera CMOS module ID (via LIN) | HEX | - | - | unsigned long | - | - | - | - | - | 22 | - | - |
| SV_LEFT_CAMERA_ID | 0x4114 | STAT_SV_LEFT_CAMERA_ID_WERT | Camera CMOS module ID (via LIN) | HEX | - | - | unsigned long | - | - | - | - | - | 22 | - | - |
| REAR_CAMERA_ID | 0x4115 | STAT_REAR_CAMERA_ID_WERT | Camera CMOS module ID (via LIN) | HEX | - | - | unsigned long | - | - | - | - | - | 22 | - | - |
| TV_RIGHT_CAMERA_CALIBRATION_DATA | 0x4116 | STAT_TV_RIGHT_CAMERA_CALIBRATION_DATA_WERT | Access camera calibration data. | - | - | - | data[3] | - | - | - | - | - | 22 | - | - |
| TV_LEFT_CAMERA_CALIBRATION_DATA | 0x4117 | STAT_TV_LEFT_CAMERA_CALIBRATION_DATA_WERT | Access camera calibration data. | - | - | - | data[3] | - | - | - | - | - | 22 | - | - |
| REAR_CAMERA_CALIBRATION_DATA | 0x4118 | STAT_REAR_CAMERA_CALIBRATION_DATA_WERT | Access camera calibration data. | - | - | - | data[3] | - | - | - | - | - | 22 | - | - |
| TV_FADE-IN_LENGTH(PICTURE LEFT) | 0x4123 | STAT_TV_FADE-IN_LENGTH_WERT | Top view fade-in for left hand side of output screen. | PIXELS | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| TV_FADE-IN_LENGTH(PICTURE RIGHT) | 0x4124 | STAT_TV_FADE-IN_LENGTH_WERT | Top view fade-in for right hand side of output screen. | PIXELS | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| TV_SIDE_VIEW_REAR_VIEW_JOIN BLURRING | 0x4125 | STAT_TV_SIDE_VIEW_REAR_VIEW_JOINBLURRING_WERT | Apply blurring where side-view and rear-view camera images are joined. | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| TV_RIGHT_FISHEYE_FILTER_PARAMS | 0x4128 | STAT_TV_RIGHT_FISHEYE_FILTER_PARAMS_WERT | Fisheye filter parameters. | - | - | - | data[11] | - | - | - | - | - | 22 | - | - |
| TV_LEFT_FISHEYE_FILTER_PARAMS | 0x4129 | STAT_TV_LEFT_FISHEYE_FILTER_PARAMS_WERT | Fisheye filter parameters. | - | - | - | data[11] | - | - | - | - | - | 22 | - | - |
| TV_REAR_FISHEYE_FILTER_PARAMS | 0x412A | STAT_TV_REAR_FISHEYE_FILTER_PARAMS_WERT | Fisheye filter parameters. | - | - | - | data[11] | - | - | - | - | - | 22 | - | - |
| FULL_SCREEN_REAR_FISHEYE_FILTER_PARAMS | 0x412B | STAT_FULL_SCREEN_REAR_FISHEYE_FILTER_PARAMS_WERT | Fisheye filter parameters. | - | - | - | data[11] | - | - | - | - | - | 22 | - | - |
| FULL_SCREEN_TV_RIGHT_FISHEYE_FILTER_PARAMS | 0x412C | STAT_FULL_SCREEN_TV_RIGHT_FISHEYE_FILTER_PARAMS_WERT | Fisheye filter parameters. | - | - | - | data[11] | - | - | - | - | - | 22 | - | - |
| FULL_SCREEN_TV_LEFT_FISHEYE_FILTER_PARAMS | 0x412D | STAT_FULL_SCREEN_TV_LEFT_FISHEYE_FILTER_PARAMS_WERT | Fisheye filter parameters. | - | - | - | data[11] | - | - | - | - | - | 22 | - | - |
| CALIBRATION_OVERLAY_GRID | 0x412E | STAT_CALIBRATION_OVERLAY_GRID_WERT | Display calibration overlay grid for CEL manufacturing use. | - | - | - | data[8] | - | - | - | - | - | 22 | - | - |
| CURRENT_CAMERAS_DEAD_PIXELS | 0x412F | STAT_CURRENT_CAMERAS_DEAD_PIXELS_WERT | Read current dead pixel count for all cameras. | PIXELS | - | - | data[10] | - | - | - | - | - | 22 | - | - |
| CURRENT_CAMERAS_SOILING | 0x4130 | STAT_CURRENT_CAMERAS_SOILING_WERT | Read current soiling count for all cameras. | HEX | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| STEERING_GUIDING_LINE_PARAMETERS | 0x4131 | STAT_STEERING_GUIDING_LINE_PARAMETERS_WERT | Guiding Lines Parameters, e.g.  Thickness, RGB, transparency etc. | HEX | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| ECU_DSP_PROCESSOR_PERFORMANCE | 0x4132 | STAT_ECU_DSP_PROCESSOR_PERFORMANCE_WERT | DSP Processor performance stats: Where frame counters are 32-bit (big-endian), indexed by: 0 = Play 1 = Video capture 1 2 = Video capture 2 3 = Video capture 3 4 = Video display 5 = Video status  Task stacks are 32-bit (big-endian), indexed by: 0 = Play back 1 = Display 2 = Video capture 1 3 = Video capture 2 4 = Video capture 3 | - | - | - | data[68] | - | - | - | - | - | 22 | - | - |
| CEL_SERIAL_NUMBER | 0x4133 | STAT_CEL_SERIAL_NUMBER_WERT | CEL Serial number (should be allowed to be written multiple times to cope with manufacturing rework) | - | - | - | data[16] | - | - | - | - | - | 22 | - | - |
| LVDS_LOCK_INDICATION | 0x4134 | STAT_LVDS_LOCK_INDICATION_WERT | CBit mask representing LVDS lock status: 0x01 = Left MUX d LVDS Locked 0x02 = Right MUX d LVDS locked 0x04 =Rear LVDS locked 0x40 = Left MUX current control value. 0x80 = Right MUX current control value. Either SV or TV mode should be selected to get MUX into correct state. | BIT MASK | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| VIDEO_FRAME_SYNC_INDICATION | 0x4135 | STAT_VIDEO_FRAME_SYNC_INDICATION_WERT | Bit mask representing video frame sync detection status: 0x01 = Left MUX d LVDS video present 0x02 = Right MUX d LVDS video present 0x04 =Rear LVDS video present 0x40 = Left MUX current control value. 0x80 = Right MUX current control value.  Either SV or TV mode should be selected to get MUX into correct state. | BIT MASK | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| POWER_RAIL_FEEDBACK | 0x4136 | STAT_POWER_RAIL_FEEDBACK_WERT | Power Rail Values: Byte 1: VBAT Byte 2: 3V3 Byte 3: 5V Byte 4: AVCC Byte 5: 1V4 | mV | - | - | data[5] | - | - | - | - | - | 22 | - | - |
| RAW_ECU_VARIANT_CONFIG_PINS | 0x4137 | STAT_RAW_ECU_VARIANT_CONFIG_PINS_WERT | Raw ECU variant config. Byte 1: Host (bit 0 = TP47, bit 1 = TP48, bit 2 = TP49) Byte 2: DSP | HEX | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| TEST_POINTS_AND_LEDS | 0x4138 | STAT_TEST_POINTS_AND_LEDS_WERT | Test points and LEDs. Byte 1: Host 0x01 = TS20 0x02 = TS21 0x04 = TS22 0x08 = Host LED (active high) Byte 2: DSP 0x01 = TS17 0x02 = TS18 0x04 = TS19 0x08 = TS1 DSP LED D4 (active low) 0x10 = TS2 DSP LED D6 (active low) | HEX | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| VIDEO_ENCODER_FAULT_INDICATION | 0x4139 | STAT_VIDEO_ENCODER_FAULT_INDICATION_WERT | Video encoder /fault indication Byte 1 = 0x01 /Fault indication | HEX | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| DSP_IIC | 0x413A | STAT_DSP_IIC_WERT | DSP IIC Data Byte 1: 0x01 = DSP IIC Clock 0x02 = DSP IIC Data | BIT MASK | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| DSP_FLASH_A19_AND_A20 | 0x413B | STAT_DSP_FLASH_A19_AND_A20_WERT | 0x01 = FLASH A19 0x02 = FLASH A20 | BIT MASK | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| LVDS_RELAYED_DATA_FROM_CAMERA | 0x413C | STAT_LVDS_RELAYED_DATA_FROM_CAMERA_WERT | LVDS relayed data from camera. Data Byte 1: 0x01 = VID1_LIN_ERR_BUF 0x02 = VID2_3_LIN_ERR_BUF 0x04 = VID4_5_LIN_ERR_BUF 0x08 = VID1_I2C_ERR_BUF 0x10 = VID2_3_I2C_ERR_BUF 0x20 = VID4_5_I2C_ERR_BUF | BIT MASK | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| CAMERA_POWER_CONTROL | 0x413D | STAT_CAMERA_POWER_CONTROL_WERT | Camera Power Control. Data Byte 1: 0x01 = Camera 1 (J7 RV) 0x02 = Camera 2 (J3 TVL) 0x04 = Camera 3 (J4 SVL) 0x08 = Camera 4 (J5 TVR) 0x10 = Camera 5 (J6 SVR) | BIT MASK | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| CAMERA_POWER_CONTROL | 0x413E | STAT_CAMERA_POWER_CONTROL_WERT | Camera Power Control. Data Byte 1: 0x01 = Camera 1 (J7 RV) 0x02 = Camera 2 (J3 TVL) 0x04 = Camera 3 (J4 SVL) 0x08 = Camera 4 (J5 TVR) 0x10 = Camera 5 (J6 SVR) | BIT MASK | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| CAMERA_POWER_FEEDBACK | 0x413F | STAT_CAMERA_POWER_FEEDBACK_WERT | Camera Power Feedback. Data Byte 1: 0x01 = /CAM2_3_PFAIL (Left SV\|TV) 0x02 = /CAM4_5_PFAIL (Right SV\|TV) | - | - | - | data[9] | - | - | - | - | - | 22 | - | - |
| SILICON_REVISIONS | 0x4140 | STAT_SILICON_REVISIONS_WERT | Silicon Revisions. Byte 1: Host Processor (PARTIDH) Byte 2: Host Processor (PARTIDL) Byte 3: DSP CPU-ID (MSB) Byte 4: DSP CPU-ID (LSB) Byte 5: DSP Revision ID (MSB) Byte 6: DSP Revision ID (LSB) Byte 7: Video Encoder Revision Code (MR30) Byte 8: DSP FLASH Manufacturer Byte 9: DSP FLASH ID | HEX | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| LIN_VSYNC | 0x4141 | STAT_LIN_VSYNC_WERT | LIN Vsync. Byte 1: 0x01 LIN Vsync | HEX | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| CAN_TRANSCEIVER | 0x4142 | STAT_CAN_TRANSCEIVER_WERT | CAN Transceiver. Byte 1: 0x01 = /STB 0x02 = /EN 0x04 = /ERR | HEX | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| HPI_INPUTS(ICT_MODE_ONLY) | 0x4143 | STAT_HPI_INPUTS(ICT_MODE_ONLY)_WERT | HPI Inputs. Data Byte 1: 0x01 = /HOSTINT 0x02 = /EWAIT | HEX | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| CURRENT_USER_BRIGHTNESS | 0x4144 | STAT_CURRENT_USER_BRIGHTNESS_WERT | Current user brightness (offset), for TV, SV and RV. | - | - | - | data[3] | - | - | - | - | - | 22 | - | - |
| CURRENT_USER_CONTRAST | 0x4145 | STAT_CURRENT_USER_CONTRAST_WERT | Current user brightness (offset), for TV, SV and RV. | - | - | - | data[3] | - | - | - | - | - | 22 | - | - |
| CEL_MANUFACTURING_CALIBRATION_SOLVER_PARAMETERS | 0x4146 | STAT_CEL_MANUFACTURING_CALIBRATION_SOLVER_PARAMETERS_WERT | Calibration solver parameters for CEL manufacturing. | - | - | - | data[30] | - | - | - | - | - | 22 | - | - |
| CEL_MANUFACTURING_CALIBRATION_TOP_VIEW_FULL_SCREEN_LEFT_FISHEYE_PARAMETERS | 0x4147 | STAT_CEL_CALIBRATION_TV_FS_LEFT_FISHEYE_PARAMETERS_WERT | Read current soiling count for all cameras. | - | - | - | data[11] | - | - | - | - | - | 22 | - | - |
| CEL_MANUFACTURING_CALIBRATION_TOP_VIEW_FULL_SCREEN_LEFT_FISHEYE_REGION | 0x4148 | STAT_CEL_CALIBRATION_TV_FS_LEFT_FISHEYE_REGION_WERT | Area of the top view left full screen to perform the fisheye calibration on. | PIXELS | - | - | data[8] | - | - | - | - | - | 22 | - | - |
| CEL_MANUFACTURING_CALIBRATION_TOP_VIEW_FULL_SCREEN_LEFT_GRID_DETECTION_REGION | 0x4149 | STAT_CEL_CALIBRATION_TV_FS_LEFT_GRID_DETECTION_REGION_WERT | Area of the top view left full screen to expect the camera calibration pattern to be in. | PIXLES | - | - | data[8] | - | - | - | - | - | 22 | - | - |
| CEL_MANUFACTURING_CALIBRATION_TOP_VIEW_LEFT_MERGED_GRID_LAYOUT | 0x414A | STAT_CEL_CALIBRATION_TV_LEFT_MERGED_GRID_LAYOUT_WERT | Expected style of top view left camera calibration pattern. | - | - | - | data[7] | - | - | - | - | - | 22 | - | - |
| CEL_MANUFACTURING_CALIBRATION_TOP_VIEW_FULL_SCREEN_RIGHT_FISHEYE_PARAMETERS | 0x414B | STAT_CEL_CALIBRATION_TV_FS_RIGHT_FISHEYE_PARAMETERS_WERT | None | - | - | - | data[11] | - | - | - | - | - | 22 | - | - |
| CEL_MANUFACTURING_CALIBRATION_TOP_VIEW_FULL_SCREEN_RIGHT_FISHEYE_REGION | 0x414C | STAT_CEL_CALIBRATION_TV_FS_RIGHT_FISHEYE_REGION_WERT | Area of the top view right full screen to perform the fisheye calibration on | PIXELS | - | - | data[8] | - | - | - | - | - | 22 | - | - |
| CEL_MANUFACTURING_CALIBRATION_TOP_VIEW_FULL_SCREEN_RIGHT_GRID_DETECTION_REGION | 0x414D | STAT_CEL_CALIBRATION_TV_FS_RIGHT_GRID_DETECTION_REGION_WERT | Area of the top view right full screen to expect the camera calibration pattern to be in. | PIXELS | - | - | data[8] | - | - | - | - | - | 22 | - | - |
| CEL_MANUFACTURING_CALIBRATION_TOP_VIEW_RIGHT_MERGED_GRID_LAYOUT | 0x414E | STAT_CEL_CALIBRATION_TV_RIGHT_MERGED_GRID_LAYOUT_WERT | Expected style of top view right camera calibration pattern. | - | - | - | data[7] | - | - | - | - | - | 22 | - | - |
| CEL_MANUFACTURING_CALIBRATION_REAR_VIEW_FULL_SCREEN_FISHEYE_PARAMETERS | 0x414F | STAT_CEL_CALIBRATION_RV_FS_FISHEYE_PARAMETERS_WERT | None | - | - | - | data[11] | - | - | - | - | - | 22 | - | - |
| CEL_MANUFACTURING_CALIBRATION_REAR_VIEW_FULL_SCREEN_FISHEYE_REGION | 0x4150 | STAT_CEL_CALIBRATION_RV_FS_FISHEYE_REGION_WERT | Area of the rear view full screen to perform the fisheye calibration on. | - | - | - | data[8] | - | - | - | - | - | 22 | - | - |
| CEL_MANUFACTURING_CALIBRATION_REAR_VIEW_FULL_SCREEN_GRID_DETECTION_REGION | 0x4151 | STAT_CEL_CALIBRATION_RV_FS_GRID_DETECTION_REGION_WERT | Area of the rear view full screen to expect the camera calibration pattern to be in. | - | - | - | data[8] | - | - | - | - | - | 22 | - | - |
| CEL_MANUFACTURING_CALIBRATION_REAR_VIEW_MERGED_GRID_LAYOUT | 0x4152 | STAT_CEL_CALIBRATION_RV_MERGED_GRID_LAYOUT_WERT | Expected style of rear view camera calibration pattern. | - | - | - | data[7] | - | - | - | - | - | 22 | - | - |
| BMW_ASSEMBLY_CALIBRATION_SOLVER_PARAMETERS | 0x4153 | STAT_BMW_ASSEMBLY_CALIBRATION_SOLVER_PARAMETERS_WERT | Expected style of top view left camera calibration pattern. | - | - | - | data[30] | - | - | - | - | - | 22 | - | - |
| BMW_ASSEMBLY_CALIBRATION_TOP_VIEW_MERGED_LEFT_GRID_DETECTION_REGION | 0x4154 | STAT_BMW_CALIBRATION_TVL_MERGED_GRID_DETECTION_REGION_WERT | Area of the top view left merged screen to expect the floor calibration pattern to be in. | - | - | - | data[8] | - | - | - | - | - | 22 | - | - |
| BMW_ASSEMBLY_CALIBRATION_TOP_VIEW_MERGED_LEFT_GRID_LAYOUT | 0x4155 | STAT_BMW_CALIBRATION_TVL_MERGED_GRID_LAYOUT_WERT | Expected style of top view left merged floor calibration pattern. | - | - | - | data[7] | - | - | - | - | - | 22 | - | - |
| BMW_ASSEMBLY_CALIBRATION_TOP_VIEW_MERGED_RIGHT_GRID_DETECTION_REGION | 0x4156 | STAT_BMW_CALIBRATION_TVR_MERGED_GRID_DETECTION_REGION_WERT | Area of the top view right merged screen to expect the floor calibration pattern to be in. | - | - | - | data[8] | - | - | - | - | - | 22 | - | - |
| BMW_ASSEMBLY_CALIBRATION_TOP_VIEW_MERGED_RIGHT_GRID_LAYOUT | 0x4157 | STAT_BMW_CALIBRATION_TVR_MERGED_GRID_LAYOUT_WERT | Expected style of top view right merged floor calibration pattern. | - | - | - | data[7] | - | - | - | - | - | 22 | - | - |
| CEL_DEVELOPMENT_USE_ONLY_ENABLE-DISABLE_CALIBRATION | 0x4158 | STAT_CEL_DEVELOPMENT_USE_ONLY_ENABLE-DISABLE_CALIBRATION_WERT | This will be replaced by a control routine. For CEL development use only. | HEX | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| CALIBRATION_PERFORMED_STATUS | 0x4159 | STAT_CALIBRATION_PERFORMED_STATUS_WERT | Calibration performed status mask. If bit is set calibration has been performed. If bit is clear calibration needs to be performed.  0x01 = Top view left. 0x02 = Top view right. 0x10 = Rear view.  Note: The mask bits are the same as the LIN ID. | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| ECU_NVM_CONFIGURATION_BLOCK_INFORMATION | 0x415A | STAT_ECU_NVM_CONFIGURATION_BLOCK_INFORMATION_WERT | NVM configuration block information. All multibyte fields are big endian encoded. KeepVersion: The version number as stored in the area of NVM that is kept on S/W updates. This will contain the initial version of S/W that created the keep region. RebuildVersion: The curent version of S/W NVM version number, for the area that is always rebuilt on a new S/W load. KeepSize: The size in bytes of the keep region. RebuildSize: The size in bytes of the rebuild region. AppIpgFlags: IPG flags for application. Decode can be used to detect if DSP thinks NVM version or sizes don t match, or clamping of values has occurred. | - | - | - | data[10] | - | - | - | - | - | 22 | - | - |
| READ_CAMERA_REGISTER | 0xF000 | - | Read camera I2C register (via LIN) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF000 | RES_0xF000 |
| WRITE_CAMERA_REGISTER | 0xF001 | - | Write camera I2C register (via LIN) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF001 | - |
| READ_CAMERA_DATA(EEPROM) | 0xF002 | - | Read camera EEPROM (via LIN) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF002 | RES_0xF002 |
| WRITE_CAMERA_DATA(EEPROM) | 0xF003 | - | Write camera EEPROM (via LIN) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF003 | - |
| CAMERA_MASTER_COMMAND_FRAME | 0xF004 | - | - | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF004 | - |
| OUTPUT_VIDEO_TEST_PATTERN | 0xF005 | - | Output video test pattern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF005 | - |
| POWER_UP/DOWN_DSP_&_CAMERAS | 0xF006 | - | Force DSP & Cameras to be powered up / down. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF006 | - |
| ENABLE_TOP_VIEW_MODE | 0xF007 | - | Enable normal merged top view display mode. (No parameters or arguments needed) | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ENABLE_SIDE_VIEW_MODE | 0xF008 | - | Enable normal merged side view display mode. (No parameters or arguments needed) | - | - | - | - | - | - | - | - | - | - | - | - |
| ENABLE_FULL_SCREEN_REAR_VIEW_MODE | 0xF009 | - | Enable full screen rear view display mode. (No parameters or arguments needed) | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ENABLE_FULL_SCREEN_TV_RIGHT_VIEW_MODE_(FISHEYE_CORRECTION_ACTIVE) | 0xF00A | - | Enable full screen top view right display mode with fisheye active. | - | - | - | - | - | - | - | - | - | - | ARG_0xF00A | - |
| ENABLE_FULL_SCREEN_TV_LEFT_VIEW_MODE_(FISHEYE_CORRECTION_ACTIVE) | 0xF00B | - | Enable full screen top view left display mode with fisheye active. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00B | - |
| CALIBRATION__FOR_BMW_ASSEMBLY | 0xF00C | - | Perform BMW assembly calibration. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00C | RES_0xF00C |
| CONTROL_POWER_RAILS_&_RESET | 0xF00D | - | Bit mask to turn on/off power rails | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00D | - |
| TEST_POINTS_&_LEDS | 0xF00E | - | Test points and LEDs | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00E | - |
| VIDEO_MUX_CONTROL | 0xF00F | - | Video MUX control | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00F | - |
| DSP_IIC | 0xF010 | - | DSP IIC | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF010 | - |
| DSP_FLASH_A19_&_A20 | 0xF011 | - | DSP FLASH address lines | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF011 | - |
| CAMERA_POWER | 0xF012 | - | Camera Power Control | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF012 | - |
| HPI_CONTROL_PINS(ICT_MODE_ONLY) | 0xF013 | - | HPI Control Pins | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF013 | - |
| LIN_VSYNC | 0xF014 | - | LIN Vertical Sync. | - | - | - | - | - | - | - | - | - | - | ARG_0xF014 | - |
| CAN_TRANSCEIVER | 0xF015 | - | CAN Tranceiver | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF015 | - |
| LIN_ENABLE | 0xF016 | - | LIN enable. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF016 | - |
| VIDEO_PATTERN_CHECK | 0xF017 | - | Check for expected video pattern in video input frame buffer for a particular camera. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF017 | - |
| ENABLE_FULL_SCREEN_SV_RIGHT_VIEW_MODE | 0xF018 | - | Enable full screen side view right display mode. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF018 | - |
| ENABLE_FULL_SCREEN_SV_LEFT_VIEW_MODE | 0xF019 | - | Enable full screen side view left display mode. | - | - | - | - | - | - | - | - | - | - | ARG_0xF019 | - |
| CEL_CAMERA_CALIBRATION_JIG_SETUP | 0xF01A | - | Perform CEL camera jib calibration. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF01A | RES_0xF01A |
| CEL_CAMERA_CALIBRATION | 0xF01B | - | Perform CEL camera calibration. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF01B | RES_0xF01B |
| BMW_SERVICE_CAMERA_LEARN | 0xF01C | - | Perform Learning of new unbranded cameras. Intended to be run in BMW service.  Note: This routine needs to be run when an ECU has previosuly had a fully learnt set of cameras present, and a new camera has been introduced.  Automatic learning occurs when the ECU has no cached camera serial numbers (i.e. in BMW manufacturing), or if a camera is introduced that it already branded. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ECU_VARIANT | 0x4100 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4100 |

### ARG_0XD3B3

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | 0-n | - | int | - | - | - | - | - | - | - | Gibt an, welche Kamera kalibriert werden soll: 0 = TV_L, 1 = TV_R, 2 = RV |
| REFERENZBILD | 0/1 | - | int | - | - | - | - | - | - | - | 0 = Daten übernehmen und zurück zur normalen Ansicht, 1 = Referenzbild mit Ansicht der Justagelinien |
| VERDREHUNGX | Grad | - | int | - | - | - | - | - | - | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| VERDREHUNGY | Grad | - | int | - | - | - | - | - | - | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| VERDREHUNGZ | Grad | - | int | - | - | - | - | - | - | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |

### RES_0XD37F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_TOPVIEW_KAM | 0/1 | - | int | - | - | - | - | - | TopView-Kameras: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_SIDEVIEW_KAM | 0/1 | - | int | - | - | - | - | - | SideView-Kameras: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_REARVIEW_KAM | 0/1 | - | int | - | - | - | - | - | Rückfahrkamera: 0=nicht vorhanden, 1=vorhanden |

### RES_0XD378

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERDREHUNGX_KAM_TV_R_WERT | Grad | - | int | - | - | - | - | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| STAT_VERDREHUNGY_KAM_TV_R_WERT | Grad | - | int | - | - | - | - | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| STAT_VERDREHUNGZ_KAM_TV_R_WERT | Grad | - | int | - | - | - | - | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |

### RES_0XD39C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERUNG_TV_L_MONTAGE | 0/1 | - | int | - | - | - | - | - | Status der Kalibrierung TopViewCam links: 0 = abgeschlossen oder nicht angefordert, 1 = Kalibrierung läuft |
| STAT_KALIBRIERUNG_TV_R_MONTAGE | 0/1 | - | int | - | - | - | - | - | Status der Kalibrierung TopViewCam rechts: 0 = abgeschlossen oder nicht angefordert, 1 = Kalibrierung läuft |

### RES_0XD381

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERUNG_TV_L_INIT | 0-n | - | int | - | TAB_0xD381_1 | - | - | - | 0 (0x00) = nicht initialisiert, 1 (0x01) =  Initialisierung in Ordnung, 255 (0xFF) = Initialisierung nicht in Ordnung |
| STAT_KALIBRIERUNG_TV_R_INIT | 0-n | - | int | - | TAB_0xD381_2 | - | - | - | 0 (0x00) = nicht initialisiert, 1 (0x01) =  Initialisierung in Ordnung, 255 (0xFF) = Initialisierung nicht in Ordnung |

### RES_0XD37B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABWEICHUNGX_KAM_TV_R_WERT | Pixel | - | int | - | - | - | - | - | Abweichung von der x-Achse in Pixel |
| STAT_ABWEICHUNGY_KAM_TV_R_WERT | Pixel | - | int | - | - | - | - | - | Abweichung von der y-Achse in Pixel |
| STAT_ABWEICHUNGZ_KAM_TV_R_WERT | Pixel | - | int | - | - | - | - | - | Abweichung von der z-Achse in Pixel |

### RES_0XD3B6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERDREHUNGX_KAM_RV_WERT | Grad | - | int | - | - | - | - | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| STAT_VERDREHUNGY_KAM_RV_WERT | Grad | - | int | - | - | - | - | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| STAT_VERDREHUNGZ_KAM_RV_WERT | Grad | - | int | - | - | - | - | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |

### ARG_0XD3B2

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | 0-n | - | int | - | - | - | - | - | - | - | Gibt an, welche Kamera kalibriert werden soll: 0 = TV_L, 1 = TV_R, 2 = RV |
| REFERENZBILD | 0/1 | - | int | - | - | - | - | - | - | - | 0 = Daten übernehmen und zurück zur normalen Ansicht, 1 = Referenzbild mit Anzeige der Justagelinien |
| ABWEICHUNGX | Pixel | - | int | - | - | - | - | - | - | - | Abweichung von der x-Achse in Pixel |
| ABWEICHUNGY | Pixel | - | int | - | - | - | - | - | - | - | Abweichung von der y-Achse in Pixel |
| ABWEICHUNGZ | Pixel | - | int | - | - | - | - | - | - | - | Abweichung von der z-Achse in Pixel |

### RES_0XD37C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_START_KALIB_KAM_TV_L | 0/1 | - | int | - | - | - | - | - | 0 = nicht gestartet, Kalibrierung nicht angefordert; 1 = gestartet |
| STAT_START_KALIB_KAM_TV_R | 0/1 | - | int | - | - | - | - | - | 0 = nicht gestartet, Kalibrierung nicht angefordert; 1 = gestartet |
| STAT_START_KALIB_KAM_RV | 0/1 | - | int | - | - | - | - | - | 0 = nicht gestartet, Kalibrierung nicht angefordert; 1 = gestartet |

### ARG_0XD37C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | 0-n | - | int | - | - | - | - | - | - | - | Gibt an, welche Kamera kalibriert werden soll: 0 = TV_L, 1= TV_L, 2 = RV |

### RES_0XD3B5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABWEICHUNGX_KAM_RV_WERT | Pixel | - | int | - | - | - | - | - | Abweichung von der x-Achse in Pixel |
| STAT_ABWEICHUNGY_KAM_RV_WERT | Pixel | - | int | - | - | - | - | - | Abweichung von der y-Achse in Pixel |
| STAT_ABWEICHUNGZ_KAM_RV_WERT | Pixel | - | int | - | - | - | - | - | Abweichung von der z-Achse in Pixel |

### ARG_0XD3A0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | Steuert die Heizung an der Rückfahrkamera an: 0 = AUS, 1 = EIN |

### RES_0XD379

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERDREHUNGX_KAM_TV_L_WERT | Grad | - | int | - | - | - | - | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| STAT_VERDREHUNGY_KAM_TV_L_WERT | Grad | - | int | - | - | - | - | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| STAT_VERDREHUNGZ_KAM_TV_L_WERT | Grad | - | int | - | - | - | - | - | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |

### RES_0XD380

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_KAM_SV_L_WERT | mA | - | int | - | - | - | - | - | Gibt die Stromaufnahme der Kamera in mA aus |
| STAT_STROM_KAM_SV_R_WERT | mA | - | int | - | - | - | - | - | Gibt die Stromaufnahme der Kamera in mA aus |
| STAT_STROM_KAM_TV_L_WERT | mA | - | int | - | - | - | - | - | Gibt die Stromaufnahme der Kameras in mA aus. |
| STAT_STROM_KAM_TV_R_WERT | mA | - | int | - | - | - | - | - | Gibt die Stromaufnahme der Kameras in mA aus. |

### RES_0XD37A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABWEICHUNGX_KAM_TV_L_WERT | Pixel | - | int | - | - | - | - | - | Abweichung von der x-Achse in Pixel |
| STAT_ABWEICHUNGY_KAM_TV_L_WERT | Pixel | - | int | - | - | - | - | - | Abweichung von der y-Achse in Pixel |
| STAT_ABWEICHUNGZ_KAM_TV_L_WERT | Pixel | - | int | - | - | - | - | - | Abweichung von der z-Achse in Pixel |

### ARG_0XD3B4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | 0-n | - | int | - | - | - | - | - | - | - | Gibt an, welche Kamera ein Testbild ausgeben soll: 0 = TV_L, 1 = TV_R, 2 = RV, 3 = SV_L, 4 = SV_R |
| TESTBILD | 0-n | - | int | - | - | - | - | - | - | - | 0 = Realbild, 1  = Testbild (blauer Hintergund, weißen Schrift für KAM), 2 = Schwarzes Testbild, 3 = Weißes Testbild |
| TIMEOUT | Sekunden | - | int | - | - | - | - | - | - | - | Ausgabezeit für das Testbild in Sekunden fest. Default: 10, Bereich: 1-30, 0 = Normalbetrieb, 255 ohne Timeout. |

### ARG_0XD38E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | 0-n | - | int | - | - | - | - | - | - | - | 0 = TV_L, 1 = TV_R, 2 = RV |

### ARG_0XA01A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SIGNALART | - | - | int | - | - | - | - | - | - | - | Gibt das Ausgangssignal einer Quelle an: 1 = Realbild, 2 = Testbild, 3 = Bild abschalten |
| ARG_AUSGANG | - | - | int | - | - | - | - | - | - | - | Gibt den anzusteuernden Ausgang an: 0 = Alle Ausgänge, 1 = Ausgang Nr.1, 2 = Ausgang Nr.2, usw. |
| ARG_TIMEOUT | Sekunden | - | int | - | - | - | - | - | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die das Testbild ausgegeben wird. Default: 255 Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis - der Job erneut mit Parameter 0 aufgerufen wird - das Steuergerät neu startet (Aufwachen, Reset, &) |

### RES_0XA01B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_FEHLERHAFTE_AUSGAENGE | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 2 oder 3 meldet. Gibt wieder, auf wie vielen Ausgängen Fehler vorlagen. |
| STAT_TEST_VIDEOAUSGANG | 0-n | - | int | - | - | - | - | - | Wert Beschreibung: 0 Test nicht gestartet, 1 Test läuft, 2 Test beendet ohne Fehler, 3 Test beendet mit Fehlern, 4 Test unterbrochen, 255 Nicht definiert. Gibt den Status der getesteten Ausgänge wie-der. Die offene Leitung zu erkennen ist optional, zwingend ist die Erkennung von Kurzschlüs-sen. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_AUSGANG | 0-n | - | int | - | - | - | - | - | Wert Test: 0 Alle Ausgänge, 1 Ausgang Nr.1, 2 Ausgang Nr.2, 4 & Gibt wieder, als Integer, welche Ausgänge getestet wurden. In den Kommentaren des Jobs muss eine eindeutige Zuweisung des Ausgangs möglich sein.  Beispiele:  -Headunit: LVDS Leitung zum RSE -Videoswitch: Ausgang1 (PINs X,Y). Es wird der zuletzt getestete Ausgang wieder-gegeben. 0 bedeutet alle Ausgänge wurden getestet. |
| STAT_FEHLER_1_AUSGANG | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 Alle Ausgänge, 1 Ausgang Nr.1, 2 Ausgang Nr.2, 4 & Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. In den Kommentaren des Jobs muss eine ein-deutige Zuweisung des Ausgangs möglich sein.  Beispiele:  -Videoswitch: Ausgang1 (PINs X,Y) |
| STAT_FEHLER_1_FEHLERART_AUSGANG | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet. Wert Text: 0 Kurzschluss nach Plus, 1 Kurzschluss nach Masse, 2 Leitungsunterbrechung, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_2_AUSGANG | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 Alle Ausgänge, 1 Ausgang Nr.1, 2 Ausgang Nr.2, 4 & Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. In den Kommentaren des Jobs muss eine ein-deutige Zuweisung des Ausgangs möglich sein.  Beispiele:  -Videoswitch: Ausgang1 (PINs X,Y) |
| STAT_FEHLER_2_FEHLERART_AUSGANG | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet. Wert Text: 0 Kurzschluss nach Plus, 1 Kurzschluss nach Masse, 2 Leitungsunterbrechung, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_3_AUSGANG | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 Alle Ausgänge, 1 Ausgang Nr.1, 2 Ausgang Nr.2, 4 & Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. In den Kommentaren des Jobs muss eine ein-deutige Zuweisung des Ausgangs möglich sein.  Beispiele:  -Videoswitch: Ausgang1 (PINs X,Y) |
| STAT_FEHLER_3_FEHLERART_AUSGANG | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet. Wert Text: 0 Kurzschluss nach Plus, 1 Kurzschluss nach Masse, 2 Leitungsunterbrechung, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_4_AUSGANG | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 Alle Ausgänge, 1 Ausgang Nr.1, 2 Ausgang Nr.2, 4 & Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. In den Kommentaren des Jobs muss eine ein-deutige Zuweisung des Ausgangs möglich sein.  Beispiele:  -Videoswitch: Ausgang1 (PINs X,Y) |
| STAT_FEHLER_4_FEHLERART_AUSGANG | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet. Wert Text: 0 Kurzschluss nach Plus, 1 Kurzschluss nach Masse, 2 Leitungsunterbrechung, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_5_AUSGANG | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 Alle Ausgänge, 1 Ausgang Nr.1, 2 Ausgang Nr.2, 4 & Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. In den Kommentaren des Jobs muss eine ein-deutige Zuweisung des Ausgangs möglich sein.  Beispiele:  -Videoswitch: Ausgang1 (PINs X,Y) |
| STAT_FEHLER_5_FEHLERART_AUSGANG | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet. Wert Text: 0 Kurzschluss nach Plus, 1 Kurzschluss nach Masse, 2 Leitungsunterbrechung, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_6_AUSGANG | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 Alle Ausgänge, 1 Ausgang Nr.1, 2 Ausgang Nr.2, 4 & Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. In den Kommentaren des Jobs muss eine ein-deutige Zuweisung des Ausgangs möglich sein.  Beispiele:  -Videoswitch: Ausgang1 (PINs X,Y) |
| STAT_FEHLER_6_FEHLERART_AUSGANG | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet. Wert Text: 0 Kurzschluss nach Plus, 1 Kurzschluss nach Masse, 2 Leitungsunterbrechung, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_7_AUSGANG | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 Alle Ausgänge, 1 Ausgang Nr.1, 2 Ausgang Nr.2, 4 & Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. In den Kommentaren des Jobs muss eine ein-deutige Zuweisung des Ausgangs möglich sein.  Beispiele:  -Videoswitch: Ausgang1 (PINs X,Y) |
| STAT_FEHLER_7_FEHLERART_AUSGANG | 0-n | - | int | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet. Wert Text: 0 Kurzschluss nach Plus, 1 Kurzschluss nach Masse, 2 Leitungsunterbrechung, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |

### ARG_0XA01B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_AUSGANG | 0-n | - | int | - | - | - | - | - | - | - | Wert Test: 0 Alle Ausgänge, 1 Ausgang Nr.1, 2 Ausgang Nr.2, 4 & In den Kommentaren des Jobs muss eine eindeutige Zuweisung des Ausgangs möglich sein. Alle Ausgänge des Steuer-gerätes müssen einzeln und kombiniert testbar sein. |

### RES_0X410F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SV_LEFT_CAMERA_STATUS_WERT |  |  | int |  |  |  |  |  | Camera status (via LIN) |

### RES_0X4115

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REAR_CAMERA_ID_WERT | - | - | - | - | - | - | - | - | Camera CMOS module ID (via LIN) |

### RES_0X410D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TV_LEFT_CAMERA_STATUS_WERT | - | - | int | - | - | - | - | - | Camera status (via LIN) |

### ARG_0XF000

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CAMERA_ID | - | - | unsigned char | - | - | - | - | - | - | - | Camera ID: 0x01 = TVL 0x02 = TVR 0x04 = SVL 0x08 = SVR 0x10 = RV Multiple cameras can be read at once by simply adding the required camera Ids e.g. For TVL and TVR = 0x01 + 0x02 = 0x03 or for all cameras 0x1F |
| ARG_REGISTER | - | - | unsigned char | - | - | - | - | - | - | - | Register Nr: 0x00 to 0xFF |

### ARG_0XF001

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CAMERA_ID | - | - | unsigned char | - | - | - | - | - | - | - | Camera ID: 0x01 = TVL 0x02 = TVR 0x04 = SVL 0x08 = SVR 0x10 = RV Multiple cameras can be read at once by simply adding the required camera Ids e.g. For TVL and TVR = 0x01 + 0x02 = 0x03 or for all cameras 0x1F |
| ARG_REGISTER | - | - | unsigned char | - | - | - | - | - | - | - | Register Nr: 0x00 .. 0xFF |
| ARG_DATA | - | - | unsigned char | - | - | - | - | - | - | - | Data : 0x00 .. 0xFF |

### ARG_0XF002

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CAMERA_ID | - | - | unsigned char | - | - | - | - | - | - | - | Camera ID: Only one camera at time supported 0x01 = TVL 0x02 = TVR 0x04 = SVL 0x08 = SVR 0x10 = RV |
| ARG_ADDRESS | - | - | unsigned int | - | - | - | - | - | - | - | Address-LSB, addressr-MSB |
| ARG_SIZE | - | - | unsigned char | - | - | - | - | - | - | - | Size: Bit 2 to Bit 5; Bit 0,1,6,7 reserved  0x04 =1 Byte 0x08 =2 Bytes 0x0C =3 Bytes 0x10 =4 Bytes 0x14 =5 Bytes 0x18 =6 Bytes 0x1C =7 Bytes 0x20 =8 Bytes |

### ARG_0XF003

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CAMERA_ID | - | - | unsigned char | - | - | - | - | - | - | - | Camera ID: 0x01 = TVL 0x02 = TVR 0x04 = SVL 0x08 = SVR 0x10 = RV Multiple cameras can be read at once by simply adding the required camera Ids e.g. For TVL and TVR = 0x01 + 0x02 = 0x03 or for all cameras 0x1F |
| ARG_ADDRESS | - | - | unsigned int | - | - | - | - | - | - | - | Address-LSB, addressr-MSB |
| ARG_SIZE_TYPE | - | - | unsigned char | - | - | - | - | - | - | - | Type & Size: bit 0 : 0 = EEPROM; 1 = Reserved bit 1 .. 5 : Size ( Max 8 bytes) bit 6..7 : Reserved |
| ARG_DATA | - | - | data[8] | - | - | - | - | - | - | - | Always 8 bytes. Please fill the unused ones with 00 |

### ARG_0XF004

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CAMERA_ID | - | - | unsigned char | - | - | - | - | - | - | - | Camera ID: 0x01 = TVL 0x02 = TVR 0x04 = SVL 0x08 = SVR 0x10 = RV Multiple cameras can be read at once by simply adding the required camera Ids e.g. For TVL and TVR = 0x01 + 0x02 = 0x03 or for all cameras 0x1F |
| ARG_DATA | - | - | data[8] | - | - | - | - | - | - | - | Data : 8 bytes |

### ARG_0XF005

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SOURCE | - | - | unsigned char | - | - | - | - | - | - | - | Where source is: 0 = ECU image generated by DSP 1 .. 5 = Specified Camera (via LIN) 6 = ECU image generated by NTSC encoder |
| ARG_PATTERN | - | - | unsigned char | - | - | - | - | - | - | - | Patterns: 0 = Colour bar (only one supported for cameras) 1 = RGB (10-bit stored in 16-bits per colour). 2 = Checkerboard (small) 3 = Checkerboard (large) 4 = Single pixel on (X, Y parameter). 5 = Single pixel off  (X, Y parameter). 6 = Alignment cross pattern. |
| ARG_DATA | - | - | data[6] | - | - | - | - | - | - | - | Data:  <16-bit R><16-bit G><16-bit B> or <16-bit X><16-bit Y><16-bit n/a> |

### ARG_0XF006

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_MODE | - | - | unsigned char | - | - | - | - | - | 0 | 1 | Mode: 0 = off, 1 = on. |

### ARG_0XF00B

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_OVERLAY | - | - | char | - | - | - | - | - | - | - | 0 = Overlay on 1 = Overlay off |

### ARG_0XF00A

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_OVERLAY | - | - | char | - | - | - | - | - | - | - | 0 = Overlay on 1 = Overlay off |

### ARG_0XF00C

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CAMERA_ID | - | - | char | - | - | - | - | - | - | - | Camera IDs (only one permitted): 0x01 = TVL 0x02 = TVR 0x10 = RV |
| ARG_CALIB_ACTIVE | - | - | char | - | - | - | - | - | - | - | Calib-acitve is a boolean that instructs the system to perform a calibrate (0x01) and turn the display off on completion. If set to 0x00 then the video mode is left on, so the capture status can be seen, and when cancelled will return the capture status via grid-locked. |

### ARG_0XF00D

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | unsigned int | - | - | - | - | - | - | - | byte 1 is data values, byte 2 is a mask: 0x01 = DSP 3V3 and 1V4 0x02 = AVCC 0x04 = DSP Reset  |

### ARG_0XF00E

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | unsigned long | - | - | - | - | - | - | - | data followed by mask/ Data Byte 1: Host 0x01 = TS20 0x02 = TS21 0x04 = TS22 0x08 = Host LED (active high) Data Byte 2: DSP 0x01 = TS17 0x02 = TS18 0x04 = TS19 0x08 = TS1 DSP LED D4 (active low) 0x10 = TS2 DSP LED D6 (active low) Mask Byte 3: Host (as above) Mask Byte 4: DSP (as above) |

### ARG_0XF00F

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | unsigned int | - | - | - | - | - | - | - | data followed by mask. Data Byte 1: 0x01 = Left MUX 0x02 = Right MUX Mask Byte 2: (as above) |

### ARG_0XF010

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | unsigned int | - | - | - | - | - | - | - | data followed by mask. Data Byte 1: 0x01 = DSP IIC Clock 0x02 = DSP IIC Data Mask Byte 2: (as above) |

### ARG_0XF011

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | unsigned int | - | - | - | - | - | - | - | data followed by mask. Data Byte 1: 0x01 = FLASH A19 0x02 = FLASH A20 Mask Byte 2: (as above) |

### ARG_0XF012

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | unsigned int | - | - | - | - | - | - | - | data followed by mask. Data Byte 1: 0x01 = Camera 1 (J7 RV) 0x02 = Camera 2 (J3 TVL) 0x04 = Camera 3 (J4 SVL) 0x08 = Camera 4 (J5 TVR) 0x10 = Camera 5 (J6 SVR) Mask Byte 2: (as above) |

### ARG_0XF013

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA1 | - | - | unsigned int | - | - | - | - | - | - | - | data followed by mask. Note: Will require ICT to pull-down a nonimated input (TBD) during host boot, to stop host processor from extering expanded addressing mode. Data Byte 1: 0x01 = /CS 0x02 = Addr 1 0x04 = Addr 2 0x08 = Addr 3 0x10 = Addr 4 0x20 = /WE 0x40 = /RE Data Byte 2: D15 to D8 |
| ARG_DATA2 | - | - | char | - | - | - | - | - | - | - | Data Byte 3: D7 to D0 |
| ARG_MASK1 | - | - | char | - | - | - | - | - | - | - | Mask Byte 4: (as above) |
| ARG_MASK2 | - | - | char | - | - | - | - | - | - | - | Mask Byte 5: (as above) |
| ARG_MASK3 | - | - | char | - | - | - | - | - | - | - | Mask Byte 6: (as above) |

### ARG_0XF014

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | char | - | - | - | - | - | - | - | data followed by mask. Data Byte 1: 0x01 = /STB 0x02 = /EN Mask Byte 1: (as above) |

### ARG_0XF016

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | char | - | - | - | - | - | - | - | Data Byte 1: 0x01 = Enable |

### ARG_0XF017

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_PATTERN | - | - | char | - | - | - | - | - | - | - | Data Byte 1: Pattern # (TBD) |
| ARG_CAMERA | - | - | char | - | - | - | - | - | - | - | Data Byte 2: 0x01 = Camera 1 (J7 RV) 0x02 = Camera 2 (J3 TVL) 0x04 = Camera 3 (J4 SVL) 0x08 = Camera 4 (J5 TVR) 0x10 = Camera 5 (J6 SVR) |

### ARG_0XF018

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | char | - | - | - | - | - | - | - | 0 = Off 1 = On |

### ARG_0XF019

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | char | - | - | - | - | - | - | - | 0 = Off 1 = On |

### ARG_0XF01A

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CAMERA_ID | - | - | char | - | - | - | - | - | - | - | Camera IDs (only one permitted): 0x01 = TVL 0x02 = TVR 0x10 = RV |
| ARG_CALIB_ACTIVE | - | - | char | - | - | - | - | - | - | - | Calib-acitve is a boolean that instructs the system to perform a calibrate (0x01) and turn the display off on completion. If set to 0x00 then the video mode is left on, so the capture status can be seen, and when cancelled will return the capture status via grid-locked. |

### ARG_0XF01B

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CAMERA_ID | - | - | char | - | - | - | - | - | - | - | Camera IDs (only one permitted): 0x01 = TVL 0x02 = TVR 0x10 = RV |
| ARG_CALIB_ACTIVE | - | - | char | - | - | - | - | - | - | - | Calib-acitve is a boolean that instructs the system to perform a calibrate (0x01) and turn the display off on completion. If set to 0x00 then the video mode is left on, so the capture status can be seen, and when cancelled will return the capture status via grid-locked. |

### ARG_0X4100

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | - | - | - | - | - | - | - | - | 0 = Use H/W build configured variant value.  1 = TV. 2 = TV + SV 3 = TV + Rear 4 = TV + SV + Rear Write value 0 to restore normal behaviour |
|  | - | - | - |  |  |  |  |  |  |  |  |
|  | - | - | - |  |  |  |  |  |  |  |  |
|  | - | - | - |  |  |  |  |  |  |  |  |
|  | - | - | - |  |  |  |  |  |  |  |  |

### ARG_0XF015

| ARGUMENTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DATA | - | - | char | - | - | - | - | - | - | - | data followed by mask. Data Byte 1: 0x01 = /STB 0x02 = /EN Mask Byte 1: (as above) |

### RES_0XF000

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_READ_CAMERA_REGISTER_WERT | - | - | + | - | - | data[15] | - | - | - | - | - | Rsp: [TVL] <register>, <value>,  [TVR] <register>, <value>,  [SVL] <register>, <value>, [SVR] <register>, <value>,  [RV] <register>, <value> |

### RES_0XF002

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_READ_CAMERA_DATA(EEPROM)_WERT | - | - | + | - | - | data[9] | - | - | - | - | - | Rsp: <cameria-id><data …> <cameria-id><data …> ...  ((1+Len) * NumCams) |

### RES_0XF00C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIBRATION__FOR_BMW_ASSEMBLY_WERT | - | - | + | - | - | data[11] | - | - | - | - | - | Rsp: <camera-id>, <initial err LSB>, <intial err MSB>, <final error LSB>, <final error MSB>, <calib-active>, <success>, <grid-locked>, <_padding>, <camera-updated-ok>, <calib-complete> |

### RES_0XF01A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CEL_CAMERA_CALIBRATION_JIG_SETUP_WERT | - | - | + | - | - | data[11] | - | - | - | - | - | Rsp: <camera-id>, <initial err LSB>, <intial err MSB>, <final error LSB>, <final error MSB>, <calib-active>, <success>, <grid-locked>, <_padding>, <camera-updated-ok>, <calib-complete> |

### RES_0XF01B

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CEL_CAMERA_CALIBRATION_WERT | - | - | + | - | - | data[11] | - | - | - | - | - | Rsp: <camera-id>, <initial err LSB>, <intial err MSB>, <final error LSB>, <final error MSB>, <calib-active>, <success>, <grid-locked>, <_padding>, <camera-updated-ok>, <calib-complete> |

### RES_0X4100

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECU_VARIANT | - | - | - | 0-n | - | unsigned char |  | - | - | - | - | ECU variant functionality (common S/W): 0 = Use H/W build configured variant value. 1 = TV. 2 = TV + SV 3 = TV + Rear 4 = TV + SV + Rear |
