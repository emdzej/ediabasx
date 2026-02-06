# KLE_82E.prg

## General

|  |  |
| --- | --- |
| File | KLE_82E.prg |
| Type | PRG |
| Jobs | 31 |
| Tables | 46 |
| Origin | BMW EA-453 Werner.Wolf |
| Revision | 2.000 |
| Author | Microfuzzy.GmbH extern.bei.EA-412 Reiner.Lederle |
| ECU Comment | KLE [1] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Komfort Lade Elektronik |  |  |
| ORIGIN | string | BMW EA-453 Werner.Wolf |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | Microfuzzy.GmbH extern.bei.EA-412 Reiner.Lederle |  |  |
| COMMENT | string | KLE [1] |  |  |
| PACKAGE | string | 1.25 |  |  |
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

### STEUERN_MONTAGEMODUS

0x3101F043 STEUERN_MONTAGEMODUS Ansteuern Montage-Modus.

_No arguments._

### STATUS_MONTAGEMODUS

0x3103F043 STATUS_MONTAGEMODUS Auslesen Montage-Modus

_No arguments._

### STEUERN_ENDE_MONTAGEMODUS

0x3102F043 STEUERN_ENDE_MONTAGEMODUS Ende Montage-Modus

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
| 0x0000B3 | CML Innovative Technologies GmbH & Co. KG |
| 0x0000B4 | APAG Elektronik AG |
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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x21E614 | KLE - Lademodul 3 defekt | 0 |
| 0x21E607 | KLE - Timeout Lademodul 1 | 0 |
| 0xCE4BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0x21E606 | KLE Hardware-Fehler erkannt | 0 |
| 0x21E619 | KLE - Ladeunterbrechung - Temperaturüberschreitung | 0 |
| 0xCE5402 | Botschaft-Gruppenfehler 1 Botschaft nicht aktuell, Empfänger KLE (A-CAN), Sender eDME (A-CAN) | 1 |
| 0x21E60A | KLE - Fehler Seriennummer Lademodul 1 | 0 |
| 0x21E60B | KLE - Fehler Seriennummer Lademodul 2 | 0 |
| 0x021500 | Energiesparmode aktiv | 0 |
| 0xCE5404 | Botschaft-Gruppenfehler 2 Botschaft nicht aktuell, Empfänger KLE (A-CAN), Sender AE (A-CAN) | 1 |
| 0xCE5403 | Botschaft-Gruppenfehler 2 Botschaft fehlt, Empfänger KLE (A-CAN), Sender AE (A-CAN) | 1 |
| 0x21E625 | Überwachung Klemme 30C: KL30C-Leitung unplausibel zur Botschaft CAS Klemmenstatus | 0 |
| 0xCE5405 | Botschaft-Gruppenfehler 3 Botschaft fehlt, Empfänger KLE (A-CAN), Sender SME (A-CAN) | 1 |
| 0x21E628 | KLE - COM signal gültig | 0 |
| 0x21E60F | KLE - Ladegerät interner Kommunikationsfehler | 0 |
| 0x21E613 | KLE - Lademodul 2 defekt | 0 |
| 0x21E60C | KLE - Fehler Seriennummer Lademodul 3 | 0 |
| 0x21E603 | Pilotsignal Fehler erkannt | 0 |
| 0x21E624 | Proximity: Kurzschluss gegen Versorgungsspannung | 0 |
| 0x21E612 | KLE - Lademodul 1 defekt | 0 |
| 0x21E61A | KLE - Ladeunterbrechung - Temperaturunterschreitung | 0 |
| 0xCE5401 | Botschaft-Gruppenfehler 1 Botschaft fehlt, Empfänger KLE (A-CAN), Sender eDME (A-CAN) | 1 |
| 0x21E626 | KLE - Fehler bei aktiver Entladung | 0 |
| 0x21E601 | Ladeunterbrechung - Kommunikationsausfall | 0 |
| 0x21E627 | KLE - COM Wake-up gültig | 0 |
| 0x21E623 | Proximity: Kurzschluss gegen Masse | 0 |
| 0x21E61B | KLE - DC Strombegrenzung | 0 |
| 0x21E611 | KLE - Lademodule Kontrollsystem Timeout | 0 |
| 0x21E620 | KLE - TCU interner Fehler | 0 |
| 0x21E602 | KLE - Selbstschutz Notaus | 0 |
| 0x21E617 | KLE - DC Unterspannung | 0 |
| 0x21E605 | Montagemodus aktiv | 0 |
| 0x21E608 | KLE - Timeout Lademodul 2 | 0 |
| 0x21E609 | KLE - Timeout Lademodul 3 | 0 |
| 0x21E615 | KLE - DC Überspannung | 0 |
| 0x21E629 | KLE - KL15 Wakeup durch CAS/JBBF wird nicht versendet | 0 |
| 0xCE5400 | A-CAN Timeout | 0 |
| 0x21E621 | TCU - hochohmiger Fehler | 0 |
| 0x21E61E | KLE - Weckleitung für Laden (TCU Wakeup): Kurzschluss gegen Masse | 0 |
| 0x21E610 | KLE - Lademodule interner Fehler | 0 |
| 0x21E618 | AC Unterspannung | 0 |
| 0xCE5406 | Botschaft-Gruppenfehler 3 Botschaft nicht aktuell, Empfänger KLE (A-CAN), Sender SME (A-CAN) | 1 |
| 0x21E622 | KLE - Pilot Hardware interner Fehler | 0 |
| 0x21E600 | Ladeunterbrechung - Gewalttrennung Ladekabel | 0 |
| 0x02FF15 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x21E61F | KLE - Weckleitung für Laden (TCU Wakeup): Kurzschluss gegen Versorgungsspannung | 0 |
| 0xCE4486 | A-CAN Control Module BUS OFF | 0 |
| 0x21E616 | AC Überspannung | 0 |
| 0x21E61D | Klemme 30 Unterspannung | 0 |
| 0x21E604 | Proximity-Fehler erkannt | 0 |
| 0x21E60E | KLE - Privat-CAN Kurzschluss | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | nein |

### DTCBEREICHE

| DTC-TYP | MINIMALWERT | MAXIMALWERT | BESCHREIBUNG |
| --- | --- | --- | --- |
| AllgemeinerDTC | 020000 | 02FFFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |
| SystembusDTC | CE4487 | CE448F | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CE4473 | CE447C | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CE440B | CE4414 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CE445F | CE4468 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CE4401 | CE440A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930000 | 930011 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CE4469 | CE4472 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CE4415 | CE441E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930030 | 930055 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CE450B | CE4514 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CE441F | CE443E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CE4501 | CE450A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CE447D | CE4486 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CE443F | CE4449 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SubbusDTC | CE4C00 | CE53FF | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SignalDTC | CE4BFF | CE4BFF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | CE5400 | CE83FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | CE5400 | CE83FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| KomponentenDTC | 21E600 | 21E6FF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |

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
| BETRIEBSART_AKTUELL | 0xDF20 | STAT_BETRIEBSART | Status aktuelle Betriebsart Ladeelektronik | 0-n | - | high | unsigned char | TAB_BETRIEBSART | - | - | - | - | 22 | - | - |
| FEHLERZUSTAENDE | 0xDF21 | - | Fehlerzustände der Ladeelektronik | bit | - | - | BITFIELD | RES_0xDF21 | - | - | - | - | 22 | - | - |
| URSACHE_DERATING | 0xDF22 | - | Status Derating (Ursache und Wert der Degradierung) | bit | - | - | BITFIELD | RES_0xDF22 | - | - | - | - | 22 | - | - |
| WIRKUNGSGRAD | 0xDF23 | STAT_WIRKUNGSGRAD_WERT | Status Wirkungsgrad | % | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WIRKUNGSGRAD_LADEZYKLUS | 0xDF24 | STAT_WIRKUNGSGRAD_LADEZYKLUS_WERT | Status Wirkungsgrad Ladezyklus | % | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AC_PHASENANZAHL | 0xDF25 | STAT_AC_PHASENANZAHL_WERT | Status AC-Phasenanzahl | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| NETZFREQUENZ | 0xDF26 | STAT_NETZFREQUENZ_WERT | Status Netzfrequenz pro Leiter | - | - | high | unsigned char | - | 1.0 | 4.0 | 0.0 | - | 22 | - | - |
| LADEDAUER | 0xDF27 | STAT_LADEDAUER_WERT | Status Ladedauer | s | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_LADEELEKTRONIK | 0xDF28 | STAT_TEMPERATUR_WERT | aktuelle Temperatur Ladeelektronik | °C | - | high | unsigned char | - | 1.0 | 1.0 | -48.0 | - | 22 | - | - |
| SME_BEGRENZUNGSGROESSEN | 0xDF29 | - | Begrenzungsgrößen der Ladeleistung durch SME | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF29 |
| URSACHE_LADEUNTERBRECHUNG | 0xDF2A | - | Status Ladeverhinderer Ladeelektronik | bit | - | - | BITFIELD | RES_0xDF2A | - | - | - | - | 22 | - | - |
| CHARGE_ENABLE_HW | 0xDF2B | STAT_CHARGE_ENABLE_HW | Status Charge Enable HW-Leitung | 0-n | - | high | unsigned char | TAB_CHARGE_ENABLE | - | - | - | - | 22 | - | - |
| PILOT_SIGNAL | 0xDF2C | STAT_PILOT_SIGNAL | Status Pilot Signal | 0-n | - | high | unsigned char | TAB_PILOT_SIGNAL | - | - | - | - | 22 | - | - |
| PROXIMITY_SIGNAL | 0xDF2D | - | Status Proximity | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF2D |
| HVDC_LEISTUNG | 0xDF2E | STAT_HVDC_LEISTUNG_WERT | Status HV-DC Leistung Ladeelektronik | W | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HVDC_LEISTUNG_MAX | 0xDF2F | STAT_HVDC_LEISTUNG_MAX_WERT | Status maximale HV-DC Leistung Ladeelektronik | W | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AC_WIRKLEISTUNG_LADEZYKLUS | 0xDF30 | STAT_AC_WIRKLEISTUNG_LADEZYKLUS_WERT | Status aus dem Netz entnommene Wirkleistung aktueller Ladezyklus | W | - | high | unsigned int | - | 5.0 | 1.0 | 0.0 | - | 22 | - | - |
| AC_SPANNUNG_EFFEKTIV | 0xDF31 | STAT_AC_SPANNUNG_EFFEKTIV_WERT | Status Effektivwerte der AC-Leiterspannungen pro Leiter | V | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HVDC_SPANNUNG | 0xDF32 | STAT_HVDC_SPANNUNG_WERT | HV-DC Spannung an der Ladeelektronik | V | - | high | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| HVDC_SPANNUNG_MAX | 0xDF33 | STAT_HVDC_SPANNUNG_MAX_WERT | maximale HV-DC Spannung an der Ladeelektronik | V | - | high | unsigned int | - | 1.0 | 4.0 | 0.0 | - | 22 | - | - |
| HVDC_STROM | 0xDF34 | STAT_HVDC_STROM_WERT | Status HV-DC Strom Ladeelektronik | A | - | high | unsigned int | - | 1.0 | 10.0 | -204.7 | - | 22 | - | - |
| HVDC_STROM_MAX | 0xDF35 | STAT_HVDC_STROM_MAX_WERT | Status maximaler HV-DC Strom Ladeelektronik | A | - | high | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| AC_STROM_EFFEKTIV_LEITER | 0xDF36 | STAT_AC_STROM_EFFEKTIV_LEITER_WERT | Status Effektivwerte der AC-Leiterströme pro Leiter | A | - | high | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| AC_STROM_MAX | 0xDF37 | STAT_AC_STROM_MAX_WERT | Status maximaler AC-Strom Ladeelektronik | A | - | high | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| KL30_SPANNUNG | 0xDF38 | STAT_SPANNUNG_KL30_WERT | Aktuelle Spannung an KL30 der Ladeelektronik | V | - | high | unsigned int | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| ABS_MAX_DC_STROM | 0xDF39 | - | Absolut gemessener maximal DC Strom | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF39 | RES_0xDF39 |
| ABS_MAX_AC_CURRENT | 0xDF3A | - | Absolut gemessener maximal AC Strom | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDF3A | RES_0xDF3A |
| ABS_MIN_MAX_TEMPERATUR | 0xDF3B | - | Absolut gemessene maximal und minimal Temperatur | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDF3B | RES_0xDF3B |
| SOFTWAREVERSION_LADEELEKTRONIK | 0xDF3D | STAT_SOFTWAREVERISON_LADEELEKTRONIK_TEXT | SW Version der Ladeelektronik | TEXT | - | high | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DIGITAL_IN_OUT | 0xDF3F | - | Werte der digitale In- und Outputs der Ladeelektronik | bit | - | - | BITFIELD | RES_0xDF3F | - | - | - | - | 22 | - | - |
| PROXIMITY_PIN | 0xDF43 | - | Spannung und Information über die Verbindung des Proximity Pin | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF43 |
| PILOT_HW | 0xDF44 | - | Information über Frequenz, Duty Cycle und Spannung des Pilot Pins | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF44 |

### ARG_0XDF39

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dummy-Wert |

### ARG_0XDF3A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dummy-Wert |

### ARG_0XDF3B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dummy-Wert |

### RES_0XDF21

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DERATING | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Derating: 1 = EIN; 0 = AUS |
| STAT_LADEUNTERBRECHUNG | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Ladeunterbrechung: 1 = EIN; 0 = AUS |
| STAT_FAILSAFE | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Failsafe: 1 = EIN; 0 = AUS |
| STAT_KOMMUNIKATIONSAUSFALL | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Kommunikationsausfall: 1 = EIN; 0 = AUS |
| STAT_UNGUELTIG | 0/1 | high | unsigned char | 0xFF | - | - | - | - | Signal ungültig: 1 = EIN; 0 = AUS |

### RES_0XDF22

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Übertemperatur: 0=Ok; 1=Zu Hoch |
| STAT_NETZFREQUENZ | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Netzfrequenz: 0=Ok; 1=Zu niedrig |
| STAT_LADEMODUL | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Lademodul: 0=Ok; 1=Ein oder mehrere ausgefallen |
| STAT_CURRENT_LIMIT | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Strombegrenzung; 0=Ok; 1=DC Strombegrenzung aktiv |
| STAT_POWER | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Leistung: 0=Ok, 1=Netzseitig verfügbare Leistung kleiner Nennleistung |
| STAT_UNGUELTIG | 0/1 | high | unsigned char | 0xFF | - | - | - | - | Signal ungültig |

### RES_0XDF29

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_I_MAX_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | -819.2 | Dynamische Stromgrenze bei Ladung |
| STAT_U_MAX_WERT | V | high | unsigned int | - | - | 1.0 | 10.0 | 1.0 | Spannungsgrenze bei Ladung |

### RES_0XDF2A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HARDWAREFEHLER_EIN | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Hardwarefehler: 1=EIN; 0=AUS |
| STAT_UNTERSPANNUNG_AC_EIN | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Unterspannung AC: 1=EIN; 0=AUS |
| STAT_UEBERSPANNUNG_AC_EIN | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Überspannung AC: 1=EIN; 0=AUS |
| STAT_UEBERSTROM_AC_EIN | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Überstrom AC: 1=EIN; 0=AUS |
| STAT_UNTERSPANNUNG_DC_EIN | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Unterspannung DC: 1=EIN; 0=AUS |
| STAT_UEBERSPANNUNG_DC_EIN | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Überspannung DC: 1=EIN; 0=AUS |
| STAT_UEBERSTROM_DC_EIN | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Überstrom DC: 1=EIN; 0=AUS |
| STAT_UEBERTEMPERATUR_EIN | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Temperatur: 1=EIN; 0=AUS |
| STAT_KOMMUNIKATIONSFEHLER | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Kommunikationsfehler: 1=EIN; 0=AUS |
| STAT_UNGUELTIG | 0/1 | high | unsigned int | 0x0FFF | - | - | - | - | Signal ungültig |

### RES_0XDF2D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROXIMITY_STECKER | 0-n | high | unsigned char | - | TAB_PROXIMITY_STECKER | - | - | - | Status Proximity Stecker |
| STAT_PROXIMITY_TASTER | 0-n | high | unsigned char | - | TAB_PROXIMITY_TASTER | - | - | - | Status Proximity Taster |

### RES_0XDF39

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DC_STROM_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | absolut gemessener maximal DC Strom |
| STAT_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -48.0 | absolut gemessene Temperatur |
| STAT_KILOMETER_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |

### RES_0XDF3A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AC_STROM_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | absolut gemessener maximal AC Strom |
| STAT_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -48.0 | absolut gemessene Temperatur |
| STAT_KILOMETER_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |

### RES_0XDF3B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_MAX_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -48.0 | absolut gemessene maximale Temperatur |
| STAT_TEMPERATUR_MIN_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -48.0 | absolut gemessene minimale Temperatur |

### RES_0XDF3F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIGITAL_INOUT_KL30_C | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Klemme 30C: 1 = AKTIV; 0 = INAKTIV |
| STAT_DIGITAL_INOUT_A_P_TCU_CON | 0/1 | high | unsigned char | 0x02 | - | - | - | - | TCU: 1 = AKTIV; 0 = INAKTIV |
| STAT_DIGITAL_INOUT_KL15_CON | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Klemme 15: 1 = AKTIV; 0 = INAKTIV |
| STAT_DIGITAL_INOUT_OUTPUT_DISCHA | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Ausgang Disch: 1 = AKTIV; 0 = INAKTIV |
| STAT_DIGITAL_INOUT_PILOT_CON | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Pilot Con: 1 = AKTIV; 0 = INAKTIV |
| STAT_DIGITAL_INOUT_XXX | 0/1 | high | unsigned char | 0x20 | - | - | - | - | XXX: 1 = AKTIV; 0 = INAKTIV |

### RES_0XDF43

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_AD_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AD-Wert für die Spannung am Proximity Pin |
| STAT_PROXY_CON_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verbindung: 1 = AN; 0 = AUS |

### RES_0XDF44

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PILOT_FREQUENZ_WERT | Hz | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Frequenz des Pilotsignals |
| STAT_PILOT_DUTY_CYCLE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert für Duty Cycle |
| STAT_PILOT_SPANNUNG_WERT | mV | high | unsigned int | - | - | 0.55 | 1.0 | 0.0 | Spannung am Pin für das Pilotsignal |
| STAT_PILOT_CON_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verbindung: 1 = AN; 0 = AUS |

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ECUMehrmalsProgrammierbar |
| 1 | ECUMindestensEinmalVollstaendigProgrammierbar |
| 2 | ECUNichtMehrProgrammierbar |

### TAB_PROXIMITY_STECKER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Kabel gesteckt |
| 0x01 | Kabel gesteckt |
| 0x02 | Fehler |
| 0x03 | Signal ungültig |

### PROG_DEP_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | correctResult |
| 2 | incorrectResult |
| 3 | incorrectResult error SWE - HWE |
| 4 | incorrectResult error SWE - SWE |
| 255 | reserved |

### TAB_CHARGE_ENABLE

| WERT | TEXT |
| --- | --- |
| 0x00 | aktiv |
| 0x01 | inaktiv |
| 0x03 | Signal ungültig |

### SVK_VERSION_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | SVKVersion_01 |

### TAB_PROXIMITY_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht betätigt |
| 0x01 | Taster betätigt |
| 0x03 | Signal ungültig |

### ENERGIESPARMODE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Normalmode |
| 1 | Fertigungsmode |
| 2 | Transportmode |
| 3 | Flashmode |

### FEHLERKLASSE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Keine Fehlerklasse verfuegbar |
| 1 | Ueberpruefung beim naechsten Werkstattbesuch |
| 2 | Ueberpruefung beim naechsten Halt |
| 4 | Ueberpruefung sofort erforderlich |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00 |
| 1 | defaultSession |
| 2 | programmingSession |
| 3 | extendedDiagnosticSession |
| 4 | safetySystemDiagnosticSession |
| 64 | vehicleManufacturerSpecific_40 |
| 65 | codingSession |
| 66 | SWTSession |

### TAB_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x01 | Standby |
| 0x02 | HV-DC Laden |
| 0x03 | Derating |
| 0x04 | Ladeunterbrechung |
| 0x05 | Error |
| 0x06 | Crash |
| 0x07 | Betriebsartwechsel |
| 0x08 | Ladeinitialisierung |
| 0x0F | Signal ungültig |

### TAB_PILOT_SIGNAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Pilotsignal erkannt |
| 0x01 | Pilotsignal erkannt, keine Ladebereitschaft |
| 0x02 | Pilotsignal erkannt, Ladebereitschaft |
| 0x03 | Fehler Pilotsignal |
| 0x07 | Signal ungültig |

### TAB_AE_FUNKSTAT_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Start-/Ansteuerbedingung nicht erfuellt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | nicht verfuegbarer Wert |
| 0x05 | Funktion laeuft |
| 0x06 | Funktion beendet (ohne Ergebnis) |
| 0x07 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 0x08 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und kein Fehler erkannt |
| 0x09 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und Fehler erkannt |
| 0xFE | nicht definiert |
| 0xFF | ungueltiger Wert |

### TAB_AE_STAT_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Montage-Modus ist inaktiv |
| 0x01 | Montage-Modus ist aktiv |
| 0xFE | nicht definiert |
| 0xFF | ungueltiger Wert |
