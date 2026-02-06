# x_audio.prg

## General

|  |  |
| --- | --- |
| File | x_audio.prg |
| Type | PRG |
| Jobs | 26 |
| Tables | 77 |
| Origin | bertrand UX-EE-2 Heinrich |
| Revision | 2.000 |
| Author | in-tech UX-EE-1 Breitkreutz, Dräxlmaier UX-EE-1 Rätscher |
| ECU Comment | AUDIO_MOTBK_2010 [3] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Audioplattform_Motorrad  |  |  |
| ORIGIN | string | bertrand UX-EE-2 Heinrich |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | in-tech UX-EE-1 Breitkreutz, Dräxlmaier UX-EE-1 Rätscher |  |  |
| COMMENT | string | AUDIO_MOTBK_2010 [3] |  |  |
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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xE1D42A | CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0x026300 | Energiesparmode  aktiv | 0 |
| 0xB7F806 | Connector 2 nicht angeschlossen | 0 |
| 0xB7F802 | Kurzschluss nach Masse Lautsprecher links | 0 |
| 0xB7F801 | Leitungsunterbrechung Lautsprecher rechts | 0 |
| 0xB7F81C | Codierung : Codiersignaturfehler | 0 |
| 0xE1D422 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xB7F804 | Kurzschluss nach Plus Lautsprecher links | 0 |
| 0xB7F808 | Leitungsunterbrechung Bluetooth-Antenne | 0 |
| 0xB7F815 | Softwarefehler Steuergeraet | 0 |
| 0xB7F80A | Übertemperatur Verstärker | 0 |
| 0xB7F81A | Codierung : Steuergerät ist nicht codiert | 0 |
| 0xB7F811 | Überspannung USB | 0 |
| 0xB7F81E | Codierung : falsches Fahrzeug | 0 |
| 0xB7F819 | Kurzschluss Sirius Antenne | 0 |
| 0xB7F805 | Kurzschluss nach Plus Lautsprecher rechts | 0 |
| 0xB7F813 | Ueberspannung Batterie | 1 |
| 0xB7F818 | Leitungsunterbrechung Sirius Antenne | 0 |
| 0xB7F800 | Leitungsunterbrechung Lautsprecher links | 0 |
| 0xB7F812 | Unterspannung Batterie | 1 |
| 0xB7F80C | Unterspannung Verstärker | 0 |
| 0xB7F814 | Hardwarefehler Steuergeraet | 0 |
| 0xE1D424 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xB7F81B | Codierung : Codierdatenübertragungsfehler | 0 |
| 0xB7F81D | Codierung : unplausible Daten während Transaktion | 0 |
| 0xB7F809 | Abschalten nach Überhitzung Audioplattform | 0 |
| 0xB7F810 | FM/AM Tuner interner Fehler | 0 |
| 0xE1D41C | CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xB7F80B | Überspannung Verstärker | 0 |
| 0xB7F80E | Kurzschluss Lautsprecher links | 0 |
| 0xE1D426 | CAN KOMBI Nachricht Kombidaten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xB7F803 | Kurzschluss nach Masse Lautsprecher rechts | 0 |
| 0xE1C45F | CAN Bus Off | 1 |
| 0xB7F80F | Kurzschluss Lautsprecher rechts | 0 |
| 0xE1D420 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0xB7F807 | Connector 4 nicht angeschlossen | 0 |
| 0xB7F80D | Kurzschluss USB | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

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
| 0xE1D421 | SEK_CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0xE1D423 | SEK_CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1D42B | SEK_CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xB7F816 | SEK Ueberspannung Batterie | 1 |
| 0xE1D425 | SEK_CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xB7F817 | SEK Unterspannung Batterie | 1 |
| 0xE1D41D | SEK_CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
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
| RADIO_EIN_AUS_SCHALTEN_MR | 0xE040 | - | Identifier zur Beschreibung des Schaltzustandes des Radios. | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE040 | RES_0xE040 |
| VOLUME_MR | 0xE041 | - | Vom Nutzer eistellbare Lautstärke | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE041 | RES_0xE041 |
| MUTE_MR | 0xE042 | - | Audio-Funktion Mute | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE042 | RES_0xE042 |
| LOUDNESS_MR | 0xE043 | - | Audio-Funktion Loudness | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE043 | RES_0xE043 |
| GAL_MR | 0xE044 | - | Geschwindigkeits-Abhängige Lautstärke | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE044 | RES_0xE044 |
| BASS_MR | 0xE045 | - | Eingestelltes Bass-Levels | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE045 | RES_0xE045 |
| HOEHEN_MR | 0xE046 | - | Treble Einstellung der Audio-Funktion Höhen | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE046 | RES_0xE046 |
| BALANCE_MR | 0xE047 | - | Einstellung der Balance | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE047 | RES_0xE047 |
| FADER_MR | 0xE048 | - | Identifier zum Lesen und Schreiben des Fader-Wertes. | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE048 | RES_0xE048 |
| FREQUENZ_MR | 0xE049 | - | Frequenz des FM/AM Tuners | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE049 | RES_0xE049 |
| RDS_MR | 0xE04A | - | RDS Einstellungen | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE04A | RES_0xE04A |
| FREQUENZBAND_MR | 0xE04B | - | Frequenzbandumschaltung des FM/AM-Tuners | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE04B | RES_0xE04B |
| SOURCE_CONTROL_MR | 0xE04C | - | Umschalten der Entertainment-Quelle per Diagnose | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE04C | RES_0xE04C |
| AUDIO_INTERNE_TEMPERATUR_MR | 0xE04D | STAT_INTERNE_TEMPERATUR_WERT | Interne Temperatur der Audioplattform | °C | - | - | int | - | - | 10.0 | - | - | 22 | - | - |
| PARROT_BT_ADRESSE_MR | 0xE04E | - | Erlaubt den Zugriff auf die Bluetooth Adresse des internen Parrot chips | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE04E | RES_0xE04E |
| PARROT_SW_HW_VERS_MR | 0xE04F | STAT_PARROT_SW_HW_VERS_WERT | Zugriff auf die Parrot Software- und Hardware-Version | - | - | - | string[16] | - | - | - | - | - | 22 | - | - |
| FRONT_LAUTSPRECHER_EIN_AUS_MR | 0xE050 | - | Kontrolliert den Ein/Aus Zustand der Frontlautsprecher | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE050 | RES_0xE050 |
| HECK_LAUTSPRECHER_EIN_AUS_MR | 0xE051 | - | Ein/Aus Zustand der Lautsprecher hinten | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE051 | RES_0xE051 |
| BLUETOOTH_EIN_AUS_MR | 0xE052 | - | Zugriff auf Ein/Aus Zustand von Bluetooth | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE052 | RES_0xE052 |
| USB_IPOD_MR | 0xE053 | STAT_USB_IPOD | Zugriff auf den Verbindungszustand des iPod oder USB Sticks | 0-n | - | - | unsigned char | TAB_MR_USB_IPOD | - | - | - | - | 22 | - | - |
| SIRIUS_SN_MR | 0xE054 | STAT_SIRIUS_SN_WERT | Zugriff auf die interne Sirius ESN (Seriennummer) | - | - | - | string[12] | - | - | - | - | - | 22 | - | - |
| ANT_QFS_MR | 0xE055 | - | Zugriff auf die Signalqualität des eingestellten Senders | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE055 |
| SIRIUS_FW_MR | 0xE056 | STAT_SIRIUS_FW_WERT | Auslesen der Sirius Firmware Version | - | - | high | string[15] | - | - | - | - | - | 22 | - | - |
| SIRIUS_SIGNAL_MR | 0xE057 | - | Sirius Signalqualität | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE057 |
| SIRIUS_FACT_DEFAULT_MR | 0xE058 | - | Sirius Werkseinstellung | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE058 | RES_0xE058 |
| SIRIUS_TUNERMODE | 0xE059 | - | Sirius Tunermodus | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE059 | RES_0xE059 |
| SIRIUS_BITFEHLER_MR | 0xE05A | STAT_SIRIUS_BITFEHLER_WERT | Sirius Bitfehlerrate | Fehler | - | high | unsigned int | - | - | - | - | - | 22 | - | - |
| SIRIUS_SIGNALGEN_MR | 0xE05B | - | Bedienung Sirius im Signalgenerator-Modus | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE05B | RES_0xE05B |
| BATTERIESPANNUNG_MR | 0xE142 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | - | - | unsigned char | - | - | 10.0 | - | - | 22 | - | - |
| TUNER_SUCHLAUF_MR | 0xB050 | - | TUNER_SUCHLAUF Motorrad | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB050 | - |
| FIND_BEST_STATION_MR | 0xB051 | - | Sucht besten Sender | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xB051 |
| BLUETOOTH_EOL_TEST_MR | 0xB052 | - | Sucht Bluetooth Gerät mit angegebener BT-Adresse | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB052 | RES_0xB052 |
| AP_EOL | 0xF000 | - | Audioplattform EOL Test | - | - | - | - | - | - | - | - | - | 31 | - | - |

### TAB_TUNER_SUCHLAUF_MR

| WERT | TEXT |
| --- | --- |
| 0x00 | Start Abwärtssuchlauf |
| 0x01 | Start Aufwärtssuchlauf |
| 0xFF | Ungültig |

### RES_0XE040

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADIO_EIN_AUS_SCHALTEN_EIN | 0/1 | - | char | - | - | - | - | - | Schalt-Status des Radius. 1 bedeutet logisch  Ein  und  0  Aus . |

### ARG_0XE040

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RADIO_EIN_AUS_SCHALTEN | 0/1 | - | char | - | - | - | - | - | - | - | Übergabe von  1 , um das Radio einzuschalten oder  0 , um es auszuschalten |

### RES_0XE041

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VOLUME_MR_WERT | Inkremente | - | char | - | - | - | - | - | Ausgabe der eingestellten Lautstärke im Bereich von 0 (min) bis 20 (max) Inkrementen |

### ARG_0XE041

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VOLUME_MR | Inkremente | - | char | - | - | - | - | - | 0.0 | 20.0 | Übergabe-Wert der einzustellenden Lautstärke im Bereich 0(min) bis 20(max) Inkrementen |

### RES_0XE042

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MUTE_MR_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status der Funktion Mute, wobei 1 logisch  ein  bedeutet (gemuted) und 0  aus  bedeutet (nicht gemuted) |

### ARG_0XE042

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MUTE_MR_EIN | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Steuern der Audio-Funktion Mute, wobei 1 logisch  ein  (muten) und 0  aus  (nicht muten) bedeutet |

### RES_0XE043

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LOUDNESS_MR_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status der Audio-Funktion Loudness, wobei 1 logisch  ein  bedeutet und 0  aus  |

### ARG_0XE043

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LOUDNESS_MR_EIN | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Ansteuern der Audio-Funktion Loudness: mit 1 Einschalten der Funktion und mit 0 aussalten |

### RES_0XE044

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GAL_KURVE | 0-n | - | unsigned char | - | TAB_MR_GAL | - | - | - | Ausgabe der eingestellten GAL-Kurve |

### ARG_0XE044

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GAL_MR | 0-n | - | unsigned char | - | TAB_MR_GAL_ARG | - | - | - | - | - | Einzustellende GAL-Kurve |

### TAB_MR_GAL_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | GAL aus |
| 0x01 | GAL Kurve 1 |
| 0x02 | GAL Kurve 2 |
| 0x03 | GAL Kurve 3 |

### TAB_MR_GAL

| WERT | TEXT |
| --- | --- |
| 0x00 | GAL aus |
| 0x01 | GAL Kurve 1 |
| 0x02 | GAL Kurve 2 |
| 0x03 | GAL Kurve 3 |
| 0xFF | ungültig |

### RES_0XE045

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BASS_MR_WERT | - | - | char | - | - | - | - | - | Auslesen des eingestellten Bass-Levels von -6 (min)  bis +6 (max) |

### ARG_0XE045

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BASS_MR_WERT | - | - | char | - | - | - | - | - | -6.0 | 6.0 | Einstellen des Bass-Levels von -6 bis +6 |

### RES_0XE046

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHEN_MR_WERT | - | - | char | - | - | - | - | - | Status Treble Ausgabe der eingestellten Höhe |

### ARG_0XE046

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HOEHEN_MR | - | - | char | - | - | - | - | - | -6.0 | 6.0 | Treble Übergabewert für die einzustellende Höhe |

### RES_0XE047

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BALANCE_MR_WERT | - | - | char | - | - | - | - | - | Wert der aktuellen Einstellung der Balance von -10 bis 10 |

### ARG_0XE047

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BALANCE_MR | - | - | char | - | - | - | - | - | -10.0 | 10.0 | Wert im Bereich -10 bis 10 zur Einstellung der Balance |

### RES_0XE048

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FADER_MR_WERT | - | - | char | - | - | - | - | - | Liest den Fader-Wert im Bereich -10 (vorne) bis +10 (hinten) |

### ARG_0XE048

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FADER_MR | - | - | char | - | - | - | - | - | -10.0 | 10.0 | Setzt den Fader-Wert im Bereich -10 (hinten) bis +10 (vorne) |

### RES_0XE049

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREQUENZ_MR_WERT | kHz | - | unsigned long | - | - | - | - | - | aktuelle Tunerfrequenz im Bereich 150 - 108000 kHz |

### ARG_0XE049

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQUENZ_MR | kHz | - | unsigned long | - | - | - | - | - | 150.0 | 108000.0 | Frequenz des FM/AM Tuners im Bereich 150 - 108000 kHz |

### RES_0XE04A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TP_MR_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status TP 0 = aus, 1 = ein |
| STAT_AF_MR_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status AF 0 = aus, 1 = ein |
| STAT_RDS_MR_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status RDS 0 = aus, 1 = ein |

### ARG_0XE04A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TP_MR | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Steuern TP 0 = aus, 1 = ein |
| RDS_MR | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Steuern RDS 0 = aus, 1 = ein |

### RES_0XE04B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREQUENZBAND_MR | 0-n | - | unsigned char | - | TAB_MR_FREQUENZBAND | - | - | - | Aktuelles Frequenzband |

### ARG_0XE04B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQUENZBAND_MR | 0-n | - | unsigned char | - | TAB_MR_FREQUENZBAND_ARG | - | - | - | - | - | Einzustellendes Frequenzband |

### TAB_MR_FREQUENZBAND

| WERT | TEXT |
| --- | --- |
| 0x00 | FM |
| 0x01 | LW |
| 0x02 | MW |
| 0x03 | KW |
| 0x04 | WB |
| 0x05 | TRF |
| 0xFF | Frequenzband ungültig |

### TAB_MR_FREQUENZBAND_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | FM |
| 0x01 | LW |
| 0x02 | MW |
| 0x03 | KW |
| 0x04 | WB |
| 0x05 | TRF |

### RES_0XE04C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOURCE_CONTROL_MR | 0-n | - | unsigned char | - | TAB_MR_SOURCE_CONTROL | - | - | - | Ausgewählte Entertainment-Quelle aus der Tabelle TAB_MR_SOURCE_CONTROL |

### ARG_0XE04C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOURCE_CONTROL_MR | 0-n | - | unsigned char | - | TAB_MR_SOURCE_CONTROL_ARG | - | - | - | - | - | Einzustellende Entertainment-Quelle aus Tabelle TAB_MR_SOURCE_CONTROL |

### TAB_MR_SOURCE_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Quelle |
| 0x01 | AUX Eingang |
| 0x02 | USB/iPod |
| 0x03 | AM/FM Tuner |
| 0x04 | Sirius Tuner |
| 0x05 | Interner Sinus-Generator |
| 0xFF | Quelle nicht verfügbar |

### TAB_MR_SOURCE_CONTROL_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | AUX Eingang |
| 0x02 | USB/iPod |
| 0x03 | AM/FM Tuner |
| 0x04 | Sirius Tuner |
| 0x05 | Interner Sinus-Generator |

### RES_0XE04E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PARROT_BT_ADRESSE_WERT | - | - | string[12] | - | - | - | - | - | Zwölfstellige Parrot Bluetooth Adresse |

### ARG_0XE04E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PARROT_BT_ADRESSE | - | - | string[12] | - | - | - | - | - | - | - | Zwölfstellige Bluetooth Adresse |

### RES_0XE050

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONT_LAUTSPRECHER_EIN_AUS | 0/1 | - | unsigned char | - | - | - | - | - | Zustand der Lautsprecher vorne 0 = aus, 1 = ein |

### ARG_0XE050

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FRONT_LAUTSPRECHER_EIN_AUS | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Ein-/Ausschalten der vorderen Lautsprecher 0 = aus, 1 = ein |

### RES_0XE051

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECK_LAUTSPRECHER_EIN_AUS | 0/1 | - | unsigned char | - | - | - | - | - | Zustand der Lautsprecher hinten 0 = aus, 1 = ein |

### ARG_0XE051

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HECK_LAUTSPRECHER_EIN_AUS | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Schaltet den Lautsprecher hinten 0 = aus oder 1 = ein |

### RES_0XE052

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLUETOOTH_EIN_AUS | 0/1 | - | unsigned char | - | - | - | - | - | Bluetooth Zustand 0 = aus, 1 = ein |

### ARG_0XE052

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BLUETOOTH_EIN_AUS | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Schaltet Bluetooth aus = 0 oder ein = 1 |

### TAB_MR_USB_IPOD

| WERT | TEXT |
| --- | --- |
| 0x00 | USB/iPod nicht verbunden |
| 0x01 | USB verbunden und formatiert |
| 0x02 | USB verbunden aber nicht formatiert |
| 0x03 | USB verbunden und formatiert enthält aber keine Daten |
| 0x04 | iPod verbunden und wird unterstützt |
| 0x05 | iPod verbunden wird aber nicht unterstützt |
| 0xFF | Verbindung ungültig |

### RES_0XE055

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUALITAET_WERT | - | - | unsigned char | - | - | - | - | - | Empfangsqualität des Senders 0..15 (15 = beste Qualität) |
| STAT_FELDSTAERKE_WERT | Schritte | - | unsigned char | - | - | - | - | - | Feldstärke in 4 dBµV-Schritten (0 = 0 dBµV, 15 = 60 dBµV) |
| STAT_ANT_VERSORGUNG_WERT | Schritte | - | unsigned char | - | - | - | - | - | Stromversorgung der Aktiv-Antenne (0..15) |
| STAT_FELDSTAERKE_GENAU_WERT | dBµV | - | unsigned char | - | - | - | - | - | Genaue Angabe der Feldstärke (0 dBµV .. 250 dBµV, 255 = ungültige Messung) |
| STAT_FREQUENZ_WERT | kHz | - | unsigned long | - | - | - | - | - | Aktuelle Frequenz in kHz |

### RES_0XE057

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SAT_SIGNAL | 0-n | high | unsigned char | - | TAB_MR_SIRIUS_QLT | - | - | - | Qualität des Satelliten-Signals |
| STAT_TERR_SIGNAL | 0-n | high | unsigned char | - | TAB_MR_SIRIUS_QLT | - | - | - | Qualität des terrestrischen Signals |
| STAT_ZUS_SIGNAL | 0-n | high | unsigned char | - | TAB_MR_SIRIUS_QLT | - | - | - | Qualität des zusammengesetzten Signals |

### TAB_MR_SIRIUS_QLT

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Signal |
| 0x01 | Schwaches Signal |
| 0x02 | Gutes Signal |
| 0x03 | Hervorragendes Signal |
| 0xFF | Signal ungültig |

### RES_0XE058

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIRIUS_DEFAULT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Sirius Werkszustand 0 = nicht zurückgesetzt, 1 = zurückgesetzt |

### ARG_0XE058

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SIRIUS_DEFAULT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auf Werkseinstellung zurücksetzen 0 = nicht zurücksetzen, 1 = zurücksetzen |

### RES_0XE059

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIRIUS_TUNERMODE | 0-n | high | unsigned char | - | TAB_MR_SIRIUS_TUNERMODE | - | - | - | Sirius Tunermodus |

### ARG_0XE059

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SIRIUS_TUNERMODE | 0-n | high | unsigned char | - | TAB_MR_SIRIUS_TUNERMODE | - | - | - | - | - | Sirius Tunermodus |

### TAB_MR_SIRIUS_TUNERMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Ungültig |
| 0x01 | Signalgenerator-Modus |
| 0x02 | Bitfehlerrate-Modus |
| 0x03 | Sender-Modus |

### RES_0XE05B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIRIUS_LINKS_WERT | Hz | high | unsigned int | - | - | 10.0 | - | - | Frequenzwert linker Kanal |
| STAT_SIRIUS_RECHTS_WERT | Hz | high | unsigned int | - | - | 10.0 | - | - | Frequenzwert rechter Kanal |

### ARG_0XE05B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SIRIUS_LINKS | Hz | high | unsigned int | - | - | - | 10.0 | - | 0.0 | 15990.0 | Frequenzwert linker Kanal |
| SIRIUS_RECHTS | Hz | high | unsigned int | - | - | - | 10.0 | - | 0.0 | 15990.0 | Frequenzwert rechter Kanal |

### ARG_0XB050

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TUNER_SUCHLAUF_MR | + | - | 0-n | - | unsigned char | - | TAB_TUNER_SUCHLAUF_MR_ARG | - | - | - | - | - | Startet Sendersuchlauf |

### TAB_TUNER_SUCHLAUF_MR_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | Start Abwärtssuchlauf |
| 0x01 | Start Aufwärtssuchlauf |

### RES_0XB051

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SUCHPROZESS_MR | - | - | + | 0-n | - | unsigned char | - | TAB_MR_PROZESSSTATUS | - | - | - | Status des Suchprozesses |
| STAT_SENDERNAME_MR_WERT | - | - | + | - | - | string[8] | - | - | - | - | - | Name des gefundenen Senders |
| STAT_KENNNR_MR_WERT | - | - | + | - | - | unsigned int | - | - | - | - | - | Kennnummer des gefundenen Senders |
| STAT_FELDSTAERKE_MR_WERT | - | - | + | dBµV | - | unsigned char | - | - | - | - | - | Feldstärke des gefundenen Senders |
| STAT_QUALITAET_MR_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Qualität des gefundenen Senders |

### TAB_MR_PROZESSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Suchprozeß nicht gestartet |
| 0x01 | Suchprozeß läuft |
| 0x02 | Suchprozeß beendet und besten Sender gefunden |
| 0x03 | Suchprozeß beendet und keinen besten Sender gefunden |
| 0x04 | Suchprozeß angehalten |
| 0xFF | Suchprozeß ungültig |

### RES_0XB052

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLUETOOTH_EOL_TEST | - | - | + | 0-n | - | unsigned char | - | TAB_MR_BLUETOOTH_EOL_TEST | - | - | - | Zustand der Bluetooth Gerätesuche |

### ARG_0XB052

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BT_ADR | + | - | - | - | string[12] | - | - | - | - | - | - | - | Zwölfstellige Bluetooth Geräteadresse |

### TAB_MR_BLUETOOTH_EOL_TEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Suche wurde nicht beendet |
| 0x01 | Suche läuft |
| 0x02 | Suche wurde beendet und Gerät wurde gefunden |
| 0x03 | Suche wurde beendet und Gerät wurde nicht gefunden |
| 0xFF | Suche ungültig |
