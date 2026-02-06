# ema_fa.prg

## General

|  |  |
| --- | --- |
| File | ema_fa.prg |
| Type | PRG |
| Jobs | 31 |
| Tables | 34 |
| Origin | BMW EI-620 Erik Schuster |
| Revision | 0.002 |
| Author | EDAG EI-620 Thieme,Arne |
| ECU Comment | Entwickler-SGBD |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektromotorischer Aufroller Fahrer |  |  |
| ORIGIN | string | BMW EI-620 Erik Schuster |  |  |
| REVISION | string | 0.002 |  |  |
| AUTHOR | string | EDAG EI-620 Thieme,Arne |  |  |
| COMMENT | string | Entwickler-SGBD |  |  |
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

### SLEEP_MODE

SG in Sleep-Mode versetzen UDS  : $11 ECUReset UDS  : $04 EnableRapidPowerShutDown Modus: Default

_No arguments._

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

### STEUERN_BETRIEBSMODE

Betriebsmode setzen SG muss sich im Energiersparmode befinden UDS  : $31   RoutineControl UDS  : $01   startRoutine UDS  : $1003 DataIdentifier Betriebsmode UDS  : $0?   Betriebsmode Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| BETRIEBSMODE | int | Betriebsmode setzen table Betriebsmode WERT 0     : Kein Betriebsmode gesetzt 1 - 16: Erweiterter Betriebsmode (Bedeutung siehe Tabelle) |

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

### POWER_DOWN_MODE

SG in Power_Down-Mode versetzen UDS  : $11 ECUReset UDS  : $41 PowerDown Modus: Default

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
| 0x024D00 | FeTraFla active | 0 |
| 0x481700 | INTERNAL_ERROR | 0 |
| 0x481705 | KL30B_UNDERVOLTAGE | 0 |
| 0x481706 | KL30B_OVERVOLTAGE | 0 |
| 0x481707 | KL30_UNDERVOLTAGE | 0 |
| 0x481708 | KL30_OVERVOLTAGE | 0 |
| 0x481709 | KL30_BREAK | 0 |
| 0x48170B | COD_CS_ERROR | 0 |
| 0x48170C | COD_TEST_STAMP_ERROR | 0 |
| 0x48170D | COD_NOT_CODED | 0 |
| 0x48170E | COD_SIGNATURE_ERROR | 0 |
| 0xDC4473 | Safety-CAN Bus | 0 |
| 0xDC4474 | Safety-CAN Bus Performance | 0 |
| 0xDC4475 | Safety-CAN Bus (+) Open | 0 |
| 0xDC4476 | Safety-CAN Bus(+) Low | 0 |
| 0xDC4477 | Safety-CAN Bus (+) High | 0 |
| 0xDC4478 | Safety-CAN Bus (-) Open | 0 |
| 0xDC4479 | Safety-CAN Bus (-) Low | 0 |
| 0xDC447A | Safety-CAN Bus (-) High | 0 |
| 0xDC447B | Safety-CAN Bus (-) shorted to Bus (+) | 0 |
| 0xDC447C | Safety-CAN Control Module Bus OFF | 0 |
| 0xDC5400 | message PCSH_RCOG (0xF6) timeout | 0 |
| 0xDC5401 | signal CRC_PCSH_RCOG crc error | 0 |
| 0xDC5402 | signal ALIV_PCSH_RCOG invalid | 0 |
| 0xDC5403 | signal ALIV_PCSH_RCOG alive error | 0 |
| 0xDC5404 | signal ST_ECU_PCSH_RCOG invalid | 0 |
| 0xDC5405 | signal QU_FN_PCSH_RCOG invalid | 0 |
| 0xDC5410 | message VYAW_VEH (0x19F) timeout | 0 |
| 0xDC5411 | signal CRC_YVAW_VEH crc error | 0 |
| 0xDC5412 | signal ALIV_VYAW_VEH invalid | 0 |
| 0xDC5413 | signal ALIV_YYAW_VEH alive error | 0 |
| 0xDC5414 | signal VYAW_VEH invalid | 0 |
| 0xDC5415 | signal VYAW_VEH_ERR_AMP invalid | 0 |
| 0xDC5416 | signal QU_VYAW_VEH invalid | 0 |
| 0xDC5420 | message ACLNX_MASSCNTR (0x199) timeout | 0 |
| 0xDC5421 | signal CRC_ACLNX_COG crc error | 0 |
| 0xDC5422 | signal ALIV_ACLNX_COG invalid | 0 |
| 0xDC5423 | signal ALIV_ACLNX_COG alive error | 0 |
| 0xDC5424 | signal ACLNX_COG invalid | 0 |
| 0xDC5425 | signal ACLNX_COG_ERR_AMP invalid | 0 |
| 0xDC5426 | signal QU_ACLNX_COG invalid | 0 |
| 0xDC5430 | message ACLNY_MASSCNTR (0x19A) timeout | 0 |
| 0xDC5431 | signal CRC_ACLNY_COG crc error | 0 |
| 0xDC5432 | signal ALIV_ACLNY_COG invalid | 0 |
| 0xDC5433 | signal ALIV_ACLNY_COG alive error | 0 |
| 0xDC5434 | signal ACLNY_COG invalid | 0 |
| 0xDC5435 | signal ACLNY_COG_ERR_AMP invalid | 0 |
| 0xDC5436 | signal QU_ACLNY_COG invalid | 0 |
| 0xDC5440 | message V_VEH (0x1A1) timeout | 0 |
| 0xDC5441 | signal CRC_V_VEH crc error | 0 |
| 0xDC5442 | signal ALIV_V_VEH invalid | 0 |
| 0xDC5443 | signal ALIV_V_VEH alive error | 0 |
| 0xDC5444 | signal ST_ECU_V_VEH invalid | 0 |
| 0xDC5445 | signal V_VEH_COG invalid | 0 |
| 0xDC5446 | signal QU_V_VEH_COG invalid | 0 |
| 0xDC5450 | message STEA_FTAX_EFFV (0x302) timeout | 0 |
| 0xDC5451 | signal CRC_STEA_FTAX_EFFV crc error | 0 |
| 0xDC5452 | signal ALIV_STEA_FTAX_EFFV invalid | 0 |
| 0xDC5453 | signal ALIV_STEA_FTAX_EFFV alive error | 0 |
| 0xDC5454 | signal STEA_FTAX_EFFV invalid | 0 |
| 0xDC5455 | signal QU_STEA_FTAX_EFFV invalid | 0 |
| 0xDC5460 | message AVL_BRTORQ_SUM (0xEF) timeout | 0 |
| 0xDC5461 | signal CRC_AVL_BRTORQ_SUM crc error | 0 |
| 0xDC5462 | signal ALIV_AVL_BRTORQ_SUM invalid | 0 |
| 0xDC5463 | signal ALIV_AVL_BRTORQ_SUM alive error | 0 |
| 0xDC5464 | signal ST_ECU_AVL_BRTORQ_SUM invalid | 0 |
| 0xDC5465 | signal AVL_BRTORQ_SUM invalid | 0 |
| 0xDC5466 | signal QU_AVL_BRTORQ_SUM invalid | 0 |
| 0xDC5467 | signal QU_SER_ECBA invalid | 0 |
| 0xDC5470 | message ANG_ACPD (0xD9) timeout | 0 |
| 0xDC5471 | signal CRC_ANG_ACPD crc error | 0 |
| 0xDC5472 | signal ALIV_ANG_ACPD invalid | 0 |
| 0xDC5473 | signal ALIV_ANG_ACPD alive error | 0 |
| 0xDC5474 | signal ST_ECU_ANG_ACPD invalid | 0 |
| 0xDC5475 | signal AVL_ANG_ACPD invalid | 0 |
| 0xDC5476 | signal QU_AVL_ANG_ACPD invalid | 0 |
| 0xDC5477 | signal AVL_ANG_ACPD_VIRT invalid | 0 |
| 0xDC5478 | signal GRAD_AVL_ANG_ACPD invalid | 0 |
| 0xDC5480 | message KLEMMEN (0x12F) timeout | 0 |
| 0xDC5481 | signal CRC_KL crc error | 0 |
| 0xDC5482 | signal ALIV_COU_KL invalid | 0 |
| 0xDC5483 | signal ALIV_COU_KL alive error | 0 |
| 0xDC5484 | signal ST_VEH_CON invalid | 0 |
| 0xDC5485 | signal ST_KL invalid | 0 |
| 0xDC5490 | message STAT_SITZBELEGUNG_GURT (0x2FA) timeout | 0 |
| 0xDC5491 | signal SW_BLTB_DR invalid | 0 |
| 0xDC5492 | signal SW_BLTB_PS invalid | 0 |
| 0xDC54A0 | message STAT_ZV_KLAPPEN (0x2FC) timeout | 0 |
| 0xDC54A1 | signal ST_DSW_DRD invalid | 0 |
| 0xDC54A2 | signal ST_DSW_PSD invalid | 0 |
| 0xDC54B0 | message CRASH (0x1FE) timeout | 0 |
| 0xDC54B1 | signal ST_EXCE_THRV_ACLN invalid | 0 |
| 0xDC54B2 | signal QUAN_TRG_SQBS Invalid | 0 |
| 0xDC54C0 | message FZZSTD (0x3A0) timeout | 0 |
| 0xDC54C1 | signal ST_CLCTR_CHAS_FZM invalid | 0 |
| 0xDC54C2 | signal ST_ENERG_FZM invalid | 0 |
| 0xDC54C3 | signal ST_ILK_ERRM_FZM invalid | 0 |
| 0xDC54D0 | message RELATIVZEIT (0x328) timeout | 0 |
| 0xDC54D1 | signal T_SEC_COU_REL invalid | 0 |
| 0xDC54E0 | message SEC_COU (0x3A4) timeout | 0 |
| 0xDC54E1 | signal T_SEC_COU_ABSL invalid | 0 |
| 0xDC54F0 | message KILOMETERSTAND (0x330) timeout | 0 |
| 0xDC54F1 | signal MILE_KM invalid | 0 |
| 0xDC5500 | message A_TEMP (0x2CA) timeout | 0 |
| 0xDC5501 | signal TEMP_EX invalid | 0 |
| 0xDC5510 | message NM_Safety_CAN (0x500…0x57F) timeout | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | System_Time_Start | s | high | unsigned long | - | - | - | - |
| 0x4008 | System_Time_Begin_Offset | s | high | unsigned char | - | 10 | - | - |
| 0x1727 | External_Temp | °C | - | unsigned char | - | - | 2 | -40 |
| 0x4002 | ECU_Internal_Temp | °C | - | unsigned char | - | - | 2 | -40 |
| 0x4003 | System_State | hex | - | unsigned char | - | - | - | - |
| 0x4004 | Time_After_POR | 0/1 | high | 0xFFFF | - | - | - | - |
| 0x4005 | PON_Counter | - | high | unsigned long | - | - | - | - |
| 0x4006 | Batterie_KL_30b | V | - | unsigned char | - | - | 10 | - |
| 0x4007 | Batterie_KL_30 | V | - | unsigned char | - | - | 10 | - |
| 0x1701 | Absolute_Time | s | high | unsigned long | - | - | - | - |
| 0x1728 | VSM_Status | hex | - | unsigned char | - | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x4D000A | MCU_ILLEGAL_AD_RESET | 0 |
| 0x4D000B | MCU_CLOCK_FAILURE_RESET | 0 |
| 0x4D000C | MCU_INT_COP_RESET | 0 |
| 0x4D000D | MCU_EXT_COP_RESET | 0 |
| 0x4D000E | MCU_UNIMPLEMENTED_INSTRUCTION_TRAP | 0 |
| 0x4D000F | MCU_ADC_FAILURE | 0 |
| 0x4D0010 | MCU_JUMP_TRACEING_ERROR | 0 |
| 0x4D001A | ECU_OVERHEAT | 0 |
| 0x4D002A | MOT_NOT_CONNECTED | 0 |
| 0x4D002B | MOT_BLOCKED | 0 |
| 0x4D002C | MOT_HALF_BRIDGE_1_SELF_PROTECTION | 0 |
| 0x4D002D | MOT_HALF_BRIDGE_2_SELF_PROTECTION | 0 |
| 0x4D002E | MOT_HALF_BRIDGE_1_ENABLE_SIGNAL_KO | 0 |
| 0x4D002F | MOT_HALF_BRIDGE_2_ENABLE_SIGNAL_KO | 0 |
| 0x4D0030 | MOT_HIGH_MOS_SHORT_CIRCUIT | 0 |
| 0x4D0031 | MOT_LOW_MOS_SHORT_CIRCUIT | 0 |
| 0x4D0032 | MOT_TENSIONNING_MOS_OPEN_CIRCUIT | 0 |
| 0x4D0033 | MOT_RELEASING_MOS_OPEN_CIRCUIT | 0 |
| 0x4D0034 | MOT_CURRENT_FAULT | 0 |
| 0x4D0035 | MOT_PWM_DUTY_CYCLE_FAULT | 0 |
| 0x4D003A | hall sensor motor | 0 |
| 0x4D003B | hall sensor motor | 0 |
| 0x4D003C | hall sensor motor | 0 |
| 0x4D003D | hall sensor motor | 0 |
| 0x4D003E | hall sensor motor | 0 |
| 0x4D004A | hall sensor belt | 0 |
| 0x4D004B | hall sensor belt | 0 |
| 0x4D004C | hall sensor belt | 0 |
| 0x4D004D | hall sensor belt | 0 |
| 0x4D004E | hall sensor belt | 0 |
| 0x4D00AA | NVM_HALF_BRIDG_CALIB_KO | 0 |
| 0x4D00B4 | NVM_PPC_PARAM_KO | 0 |
| 0x4D00B5 | NVM_BSE_PARAM_KO | 0 |
| 0x4D00C8 | PRECRASH_TENSION_FAILED_ST_ENERG_FZM | 0 |
| 0x4D00C9 | PRECRASH_TENSION_FAILED_UNDERVOLTAGE | 0 |
| 0x4D00CA | DRIVING_TENSION_FAILED_ST_ENERG_FZM | 0 |
| 0x4D00CB | DRIVING_TENSION_FAILED_UNDERVOLTAGE | 0 |
| 0x4D00CC | BELTSLACK_TENSION_FAILED_ST_ENERG_FZM | 0 |
| 0x4D00CD | BELTSLACK_TENSION_FAILED_UNDERVOLTAGE | 0 |
| 0x4D00CE | PARKING_TENSION_FAILED_ST_ENERG_FZM | 0 |
| 0x4D00CF | PARKING_TENSION_FAILED_UNDERVOLTAGE | 0 |
| 0x4D00D0 | WARNING_TENSION_FAILED_ST_ENERG_FZM | 0 |
| 0x4D00D1 | WARNING_TENSION_FAILED_UNDERVOLTAGE | 0 |
| 0x4D00D2 | OFFROAD_TENSION_FAILED_ST_ENERG_FZM | 0 |
| 0x4D00D3 | OFFROAD_TENSION_FAILED_UNDERVOLTAGE | 0 |
| 0x4D00DA | STATISTIC_CRASH | 0 |
| 0x4D00DB | STATISTIC_ACTIVATION | 0 |
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
| 0x4000 | System_Time_Start | s | high | unsigned long | - | - | - | - |
| 0x4008 | System_Time_Begin_Offset | s | high | unsigned char | - | 10 | - | - |
| 0x1727 | External_Temp | °C | - | unsigned char | - | - | 2 | -40 |
| 0x4002 | ECU_Internal_Temp | °C | - | unsigned char | - | - | 2 | -40 |
| 0x4003 | System_State | hex | - | unsigned char | - | - | - | - |
| 0x4004 | Time_After_POR | 0/1 | high | 0xFFFF | - | - | - | - |
| 0x4005 | PON_Counter | - | high | unsigned long | - | - | - | - |
| 0x4006 | Batterie_KL_30b | V | - | unsigned char | - | - | 10 | - |
| 0x4007 | Batterie_KL_30 | V | - | unsigned char | - | - | 10 | - |
| 0x1701 | Absolute_Time | s | high | unsigned long | - | - | - | - |
| 0x1728 | VSM_Status | hex | - | unsigned char | - | - | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BSR_EXTERNAL_ACTIVATION | 0xA511 | - | - | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA511 |
| PRECRASH_EXTERNAL_ACTIVATION | 0xA510 | - | - | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA510 | RES_0xA510 |
| BELT_DISPLACEMENT_SENSOR | 0xD522 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD522 |
| PRECRASH_FUNCTION_STATUS | 0xD510 | STAT_PRECRASH_FUNCTION | - | 0-n | - | high | char | STATES_D510 | 1 | 1 | 0 | - | 22 | - | - |
| BELT_SLACK_REDUCTION_FUNCTION_STATUS | 0xD511 | STAT_BSR_FUNCTION | - | 0-n | - | high | char | STATES_D511 | 1 | 1 | 0 | - | 22 | - | - |
| PRECRASH_ALGORITHM_FUNCTION_STATUS | 0xD519 | STAT_PRECRASH_ALGO_FUNCTION | - | 0-n | - | high | char | STATES_D519 | 1 | 1 | 0 | - | 22 | - | - |
| MOTOR_STATE_MANAGER_FUNCTION_STATUS | 0xD528 | STAT_MOTOR_STATE_MANAGER_FUNCTION | - | 0-n | - | high | char | STATES_D528 | 1 | 1 | 0 | - | 22 | - | - |
| TEMPERATURE_SENSOR | 0xD523 | STAT_TEMPERATURE_WERT | - | °C | - | high | int | - | 1 | 1 | 0 | - | 22 | - | - |
| ADC_RESULT | 0xD520 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD520 |
| ANALOG_VALUE | 0xD521 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD521 |
| SYSTEM_TIME | 0xD524 | STAT_SYSTEM_TIME_WERT | System Time in ms | ms | - | high | unsigned long | - | 1 | 1 | 0 | - | 22 | - | - |
| MOTOR_STATE | 0xD525 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD525 |

### RES_0XD520

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Stat_Channel0_Wert | - | high | unsigned int | - | - | - | - | - | ADC result (Kl30) |
| Stat_Channel1_Wert | - | high | unsigned int | - | - | - | - | - | ADC result (V+ Motor) |
| Stat_Channel2_Wert | - | high | unsigned int | - | - | - | - | - | ADC result (V- Motor) |
| Stat_Channel3_Wert | - | high | unsigned int | - | - | - | - | - | ADC result (Kl30b) |
| Stat_Channel4_Wert | - | high | unsigned int | - | - | - | - | - | ADC result (Is1 Motor) |
| Stat_Channel5_Wert | - | high | unsigned int | - | - | - | - | - | ADC result (Sensor Level) |
| Stat_Channel6_Wert | - | high | unsigned int | - | - | - | - | - | ADC result (Is2 Motor) |
| Stat_Channel7_Wert | - | high | unsigned int | - | - | - | - | - | ADC result (TestAdc) |

### ARG_0XA510

| ARGUMENTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DURATION OFPRECRASH_SITUATION | + | - | - | ms | high | unsigned int | - | - | 10 | - | - | - | - | - |

### RES_0XD522

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Stat_Bobbin_Sensor_Status_Wert | - | high | unsigned char | - | - | - | - | - |  |
| Stat_Bobbin_Sensor_Position_Wert | ° | high | int | - | - | - | - | - |  |
| Stat_Bobbin_Sensor_Direction_Wert | - | high | unsigned char | - | - | - | - | - |  |
| Stat_Bobbin_Sensor_Speed_Wert | °/s | high | unsigned int | - | - | - | - | - |  |
| Stat_Motor_Sensor_Status_Wert | - | high | unsigned char | - | - | - | - | - |  |
| Stat_Motor_Sensor_Position_Wert | ° | high | long | - | - | - | - | - |  |

### STATES_D511

| WERT | TEXT |
| --- | --- |
| 0 | Disabled |
| 1 | Startup |
| 2 | Not reduced |
| 3 | Internal activation |
| 4 | CAN external activation |
| 5 | DIAG external activation |
| 6 | Reduced |
| 7 | Problem |
| 8 | Trouble |
| 9 | Error |

### STATES_D519

| WERT | TEXT |
| --- | --- |
| 0 | Inactive |
| 1 | Active |
| 2 | Trouble |
| 3 | Error |

### STATES_D528

| WERT | TEXT |
| --- | --- |
| 0 | Check |
| 1 | Startup Release |
| 2 | Idle |
| 3 | Pch tensioning |
| 4 | Pch releasing |
| 5 | Bsr tensioning |
| 6 | Bsr releasing |
| 7 | Problem |
| 8 | Trouble |
| 9 | Error |

### STATES_D510

| WERT | TEXT |
| --- | --- |
| 0 | Disabled |
| 1 | Startup |
| 2 | Idle |
| 3 | Internal activation |
| 4 | CAN external activation |
| 5 | DIAG external activation |
| 6 | Problem |
| 7 | Trouble |
| 8 | Error |

### RES_0XD521

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Stat_Kl30_Wert | mV | high | unsigned int | - | - | - | - | - | - |
| Stat_Kl30b_Wert | mV | high | unsigned int | - | - | - | - | - | - |
| Stat_Vs1_Wert | mV | high | unsigned int | - | - | - | - | - | - |
| Stat_Vs2_Wert | mV | high | unsigned int | - | - | - | - | - | - |
| Stat_Is1_Wert | mA | high | unsigned int | - | - | - | - | - | - |
| Stat_Is2_Wert | mA | high | unsigned int | - | - | - | - | - | - |
| Stat_TestVoltage_Wert | - | high | unsigned int | - | - | - | - | - | - |
| Stat_Sensor_Level_Wert | - | high | unsigned int | - | - | - | - | - | - |

### RES_0XA511

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_WERT | - | - | + | - | high | unsigned char | - | - | 1 | 1 | 0 | - |

### RES_0XA510

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_WERT | - | - | + | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DURATION_WERT | + | - | - | ms | high | unsigned int | - | - | 10 | - | - | - |

### MOTOR_DIRECTIONS

| WERT | TEXT |
| --- | --- |
| 0 | STOP |
| 1 | TENSIONING |
| 2 | RELEASING |

### RES_0XD525

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIRECTION_WERT | - | high | unsigned char | - | MOTOR_DIRECTIONS | 1 | 1 | 0 | Direction |
| STAT_PWM_WERT | % | high | unsigned char | - | - | 1 | 1 | 0 | PWM Value |
| STAT_KL30_WERT | mV | high | unsigned int | - | - | 1 | 1 | 0 | Kl30 |
| STAT_VS1_WERT | mV | high | unsigned int | - | - | 1 | 1 | 0 | V+ Motor |
| STAT_VS2_WERT | mV | high | unsigned int | - | - | 1 | 1 | 0 | V- Motor |
| STAT_IS1_WERT | mA | high | unsigned int | - | - | 1 | 1 | 0 | Is1 Motor |
| STAT_IS2_WERT | mA | high | unsigned int | - | - | 1 | 1 | 0 | Is2 Motor |
| STAT_MOTOR_STATUS_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
