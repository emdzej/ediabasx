# x_rdc.prg

## General

|  |  |
| --- | --- |
| File | x_rdc.prg |
| Type | PRG |
| Jobs | 27 |
| Tables | 47 |
| Origin | BMW UX-EE-2 Christina_Seidel |
| Revision | 2.000 |
| Author | in-tech UX-EE-1 Anne_Breitkreutz, Dräxlmaier UX-EE-1 Werner_Rät |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad Reifendruckkontrolle |  |  |
| ORIGIN | string | BMW UX-EE-2 Christina_Seidel |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | in-tech UX-EE-1 Anne_Breitkreutz, Dräxlmaier UX-EE-1 Werner_Rät |  |  |
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

### ARG_0X4110_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RDC_DEBUG_MESSAGE_MR_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Einschalten der Debug-Nachricht durch 1 und Ausschalten durch 0 |

### ARG_0XB030_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SENSOR_POSITION_MR | + | - | 0-n | - | unsigned char | - | TAB_MR_TRANSMITTER_ORT | 1.0 | 1.0 | 0.0 | - | - | Ort des anzulernenden Sensors |
| ANZAHL_FRAMES_MR | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 5.0 | 25.0 | Anzahl der für den Anlernvorgang benötigten Frames (5 - 25) |
| TIMEOUT_MR | + | - | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 5.0 | Nach Ablauf dieser Zeit (1..5 min) wird die Routine beendet |

### ARG_0XB031_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SENSOR_POSITION_MR | + | - | 0-n | - | unsigned char | - | TAB_MR_TRANSMITTER_ORT | - | - | - | - | - | Ort des zu löschenden Sensors |

### ARG_0XB032_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TIMEOUT_MR | + | - | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 10.0 | Nach Ablauf dieser Zeit (1..10 min) wird die Routine beendet |

### ARG_0XE081_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TRANSMITTER_ID_VORNE_MR | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 1.6777215E7 | Schreiben der Transmitter-ID vorne 3 Byte von 1 bis 16777215 |

### ARG_0XE082_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TRANSMITTER_ID_HINTEN_MR | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 1.6777215E7 | Schreiben der Transmitter-ID hinten 3 Byte von 1 bis 16777215 |

### ARG_0XF001_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATENSATZ_NR | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 39.0 | Datensatz-Nummer (0..39) |

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
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x022000 | Energiesparmode  aktiv | 0 |
| 0x481F80 | RDC Transmitter vorn: Unterspannung  | 0 |
| 0x481F81 | RDC Transmitter hinten: Unterspannung | 0 |
| 0x481F82 | Hardwarefehler Steuergeraet | 0 |
| 0x481F84 | Unterspannung Batterie | 1 |
| 0x481F85 | Ueberspannung Batterie | 1 |
| 0x481F8A | RDC Transmitter vorn: Fehler | 0 |
| 0x481F8B | RDC Transmitter hinten: Fehler | 0 |
| 0x481F8E | NVM_E_READ_ALL_FAILED | 0 |
| 0x481F8F | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x481F90 | RDC Transmitter vorn: kein ID programmiert | 0 |
| 0x481F91 | RDC Transmitter hinten: kein ID programmiert | 0 |
| 0x481F92 | NVM_E_CONTROL_FAILED | 0 |
| 0x481F93 | NVM_E_ERASE_FAILED | 0 |
| 0x481F94 | NVM_E_READ_FAILED | 0 |
| 0x481F95 | NVM_E_WRITE_FAILED | 0 |
| 0x481F96 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x481F97 | Codierung : Steuergerät ist nicht codiert | 0 |
| 0x481F98 | Codierung : unplausible Daten während Transaktion | 0 |
| 0x481F99 | Codierung : Codiersignaturfehler | 0 |
| 0x481F9A | RDC Transmitter vorn: Empfangsstörung | 0 |
| 0x481F9B | RDC Transmitter hinten: Empfangsstörung | 0 |
| 0x481F9C | Codierung : Codierdatenübertragungsfehler | 0 |
| 0xD1045F | CAN Bus Off | 1 |
| 0xD11422 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD11424 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD11426 | CAN KOMBI Nachricht Kombidaten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD1142A | CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
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
| F_HLZ | ja |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x481F86 | SEK Ueberspannung Batterie | 1 |
| 0x481F87 | SEK Unterspannung Batterie | 1 |
| 0xD11423 | SEK_CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD11425 | SEK_CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xD1142B | SEK_CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4110_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RDC_DEBUG_MESSAGE_MR_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Debug-Nachricht aktiv bei 1 und nicht aktiv bei 0 |

### RES_0X4200_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEL_SW_HAUPTVER_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SEL Software Hauptversionsnummer |
| STAT_SEL_SW_NEBENVER_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SEL Software Nebenversionsnummer |
| STAT_SEL_SW_INTERNVER_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SEL Software interne Versionsnummer |
| STAT_RELEASE_TYPE | 0-n | - | unsigned char | - | TAB_MR_RDC_RELEASE_TYPE | 1.0 | 1.0 | 0.0 | Freigabestand |

### RES_0X4211_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_RAUSCHPEGEL_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Statischer Rauschpegel bei hoher Verstärkung (Anzahl RSSI) |
| STAT_MITTLERER_RAUSCHPEGEL_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlerer Rauschpegel (Anzahl RSSI) |
| STAT_SNR_VORNE_WERT | Counts | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Signal-Rausch-Abstand Rad vorne (Anzahl RSSI) |
| STAT_SNR_HINTEN_WERT | Counts | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Signal-Rausch-Abstand Rad hinten (Anzahl RSSI) |
| STAT_EMPFANGSRATE_VORNE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangsrate Datenpakete Rad vorne |
| STAT_EMPFANGSRATE_HINTEN_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangsrate Datenpakete Rad hinten |

### RES_0X4213_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_RAUSCHPEGEL_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Statischer Rauschpegel bei hoher Verstärkung (Anzahl RSSI) |
| STAT_MITTLERER_RAUSCHPEGEL_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlerer Rauschpegel (Anzahl RSSI) |
| STAT_MAX_RAUSCHPEGEL_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximaler Rauschpegel (Anzahl RSSI) |
| STAT_MIN_RAUSCHPEGEL_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimaler Rauschpegel (Anzahl RSSI) |
| STAT_SNR_VORNE_WERT | Counts | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Signal-Rausch-Abstand Rad vorne (Anzahl RSSI) |
| STAT_SNR_HINTEN_WERT | Counts | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Signal-Rausch-Abstand Rad hinten (Anzahl RSSI) |
| STAT_EMPFANGSRATE_VORNE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangsrate Datenpakete Rad vorne |
| STAT_EMPFANGSRATE_HINTEN_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangsrate Datenpakete Rad hinten |
| STAT_SEL_RF_STATISTIK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Schrader RF Statistik |
| STAT_DURCHSCHNITTSGESCHWINDIGKEIT_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittsgeschwindigkeit |
| STAT_KM_ANFANG_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand am Beginn des Messintervalls |
| STAT_KM_ENDE_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand am Ende des Messintervalls |

### RES_0XB030_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TRANSMITTER_POSITION_MR | - | - | + | 0-n | - | unsigned char | - | TAB_MR_TRANSMITTER_ORT | - | - | - | Ort des angelernten Sensors |
| STAT_RDC_TRANSMITTER_ANLERNEN_MR | - | - | + | 0-n | - | unsigned char | - | TAB_MR_RDC_ANLERNEN | - | - | - | Status der ausgeführten Routine |

### RES_0XB031_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TRANSMITTER_POSITION_MR | - | - | + | 0-n | - | unsigned char | - | TAB_MR_TRANSMITTER_ORT | - | - | - | Ort  des gelöschten Sensors |
| STAT_RDC_TRANSMITTER_ANLERNEN_MR | - | - | + | 0-n | - | unsigned char | - | TAB_MR_RDC_ANLERNEN | - | - | - | Status der ausgeführten Routine |

### RES_0XB032_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RDC_EOL_MODE | - | - | + | 0-n | - | unsigned char | - | TAB_MR_PROZESS_STATUS | - | - | - | Liefert den Zustand der EOL Routine zurück |
| STAT_TRANSMITTER_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_MR_TRANSMITTER_SUCHE | - | - | - | Liefert den Erkennungsstatus der Transmitter vorne und hinten |

### RES_0XE070_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REIFEN_DRUCK_WARN_MR | 0-n | - | unsigned char | - | TAB_MR_RDC_WARN | 1.0 | 1.0 | 0.0 | Beschreibt den Warn-Status und damit die Ansteuerung der Warnsignale |
| STAT_REIFEN_FEHLER_MR | 0-n | - | unsigned char | - | TAB_MR_RDC_FEHLER | 1.0 | 1.0 | 0.0 | Information in welchem Reifen sich ein Fehler befindet |
| STAT_BAT_RDC_SENSOR_VORN_WARN_MR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Information über den kritischenBatterie-Status im RDC-Sensor, wobei 1 logisch  ein  bedeutet, d.h. der Batterie-Status ist kritisch Symbol wird eingeschalted und bei 0 ist der Wert unkritisch |
| STAT_BAT_RDC_SENSOR_HINTEN_WARN_MR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Information über den kritischenBatterie-Status im RDC-Sensor, wobei 1 logisch  ein  bedeutet, d.h. der Batterie-Status ist kritisch Symbol wird eingeschalted und bei 0 ist der Wert unkritisch |
| STAT_REIFEN_DRUCK_VORN_WERT | bar | - | unsigned char | - | - | 2.0 | 100.0 | 0.0 | Reifendruck vorne in bar (CAN-Wert) |
| STAT_REIFEN_DRUCK_HINTEN_WERT | bar | - | unsigned char | - | - | 2.0 | 100.0 | 0.0 | Reifendruck hinten in bar (CAN-Wert) |
| STAT_TEMP_VORN_WERT | °C | - | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Reifentemperatur vorne |
| STAT_TEMP_HINTEN_WERT | °C | - | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Reifentemperatur hinten |
| STAT_TRANSMITTER_ID_VORN_MR_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ID des vorderen Transmitter in 3 Byte von 1 bis 16777215 |
| STAT_TRANSMITTER_ID_HINTEN_MR_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ID des hinteren Transmitter in 3 Byte von 1 bis 16777215 |

### RES_0XE071_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TRANSMITTER_ID_POSITION_MR | 0-n | - | unsigned char | - | TAB_MR_RDC_POSITION | - | - | - | Beschreibt, an welcher Position der ID zuletzt geschrieben wurde |
| STAT_TRANSMITTER_ID_STATUS_MR | 0-n | - | unsigned char | - | TAB_MR_RDC_STATUS_ID_SCHREIBEN | - | - | - | Beschreibt, ob der ID akzeptiert oder an welcher Stelle er bereits programmiert wurde |

### RES_0XE075_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TRANSMITTER_ID_VORN_MR_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ID des vorderen Transmitter in 3 Byte von 1 bis 16777215 |
| STAT_TRANSMITTER_ID_HINTEN_MR_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ID des hinteren Transmitter in 3 Byte von 1 bis 16777215 |

### RES_0XF001_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MITTLERER_RAUSCHPEGEL_WERT | - | - | + | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittlerer Rauschpegel (Anzahl RSSI) |
| STAT_SNR_VORNE_WERT | - | - | + | Counts | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Signal-Rausch-Abstand Rad vorne (Anzahl RSSI) |
| STAT_SNR_HINTEN_WERT | - | - | + | Counts | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Signal-Rausch-Abstand Rad hinten (Anzahl RSSI) |
| STAT_SEL_RF_STATISTIK_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Schrader RF Statistik |
| STAT_DURCHSCHNITTSGESCHWINDIGKEIT_WERT | - | - | + | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittsgeschwindigkeit |
| STAT_EMPFANGSRATE_VORNE_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangsrate Datenpakete Rad vorne |
| STAT_EMPFANGSRATE_HINTEN_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangsrate Datenpakete Rad hinten |
| STAT_TRANSMITTER_ID_VORNE_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ID des vorderen Transmitter in 3 Byte von 1 bis 16777215 |
| STAT_TRANSMITTER_ID_HINTEN_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ID des hinteren Transmitter in 3 Byte von 1 bis 16777215 |
| STAT_KM_STAND_WERT | - | - | + | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_FEHLERCODE_WERT | - | - | + | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Fehlercode (DTC) |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RDC_TRANSMITTER_ANLERNEN_MR | 0xB030 | - | RID zum automatischen Anlernen der RDC-Transmitter | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB030_R | RES_0xB030_R |
| RDC_TRANSMITTER_ID_LOESCHEN_MR | 0xB031 | - | Routine-ID zum Löschen einzelner Transmitter-IDs | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB031_R | RES_0xB031_R |
| RDC_EOL_MODE_MR | 0xB032 | - | Startet den EOL Modus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB032_R | RES_0xB032_R |
| RDC_SG_AUSGABE_MR | 0xE070 | - | Identifier zur Ausgabe RDC-berechneter Größen, die das SG auf den CAN legt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE070_D |
| RDC_STAT_TRANSMITTER_ID_SCHREIBEN_MR | 0xE071 | - | Ergebnis des Transmitter ID Schreibvorgangs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE071_D |
| RDC_TRANSMITTER_ID_LESEN_MR | 0xE075 | - | DID zum Lesen des Transmitter ID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE075_D |
| RDC_TRANSMITTER_ID_VORNE_MR | 0xE081 | - | Schreibt die Transmitter ID vorne | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE081_D | - |
| RDC_TRANSMITTER_ID_HINTEN_MR | 0xE082 | - | Schreibt die Transmitter ID hinten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE082_D | - |
| BATTERIESPANNUNG_MR | 0xE142 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| RDC_DEBUG_MESSAGE_MR | 0x4110 | - | Aktivieren und Deaktivieren der Debug-Botschaft | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4110_D | RES_0x4110_D |
| RDC_SEL_VERSIONS_MR | 0x4200 | - | Liest die aktuelle Softwareversion und Speicherversion aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4200_D |
| RDC_LANGZEIT_LOGGER_MR | 0x4211 | - | Langzeit-Datenlogger | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4211_D |
| RDC_DATA_LOGGER_MR | 0x4213 | - | Erfasst RDC Daten über einen gewissen km-Stand-Bereich | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4213_D |
| RDC_SEL_SERIENNUMMER_MR | 0x4217 | STAT_SERIENNUMMER_TEXT | Schrader Seriennummer | TEXT | - | high | string[19] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RDC_SNAPSHOT_HISTORY_MR | 0xF001 | - | Die letzten 40 Fehler-Datensätze | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF001_R | RES_0xF001_R |
| RDC_RESET_DATA_LOGGER_MR | 0xF002 | - | Setzt den Daten-Logger zurück | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RDC_RESET_LANGZEIT_LOGGER_MR | 0xF003 | - | Setzt den Langzeit-Logger zurück | - | - | - | - | - | - | - | - | - | 31 | - | - |

### TAB_MR_PROZESS_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Prozess nicht gestartet |
| 0x01 | Prozess gestartet aber nicht beendet |
| 0x02 | IDs nicht programmiert oder ungültig |
| 0x03 | Prozess unterbrochen |
| 0x04 | Prozess erfolgreich beendet |
| 0xFF | Ungültig |

### TAB_MR_RDC_ANLERNEN

| WERT | TEXT | TEXT ENGLISCH |
| --- | --- | --- |
| 0x00 | Service nicht angestoßen | service not yet started |
| 0x01 | Service angestoßen, aber nicht beendet | service started but not completed |
| 0x02 | Anlernprozess unterbrochen (ohne Erfolg) | learning process interrupted (not successfully) |
| 0x03 | Transmitter erfolgreich angelernt | ID learned successfully |
| 0x04 | Transmitter-Id wird nicht akzeptiert (bereits für eine andere Rad-Position gespeichert) | ID is not accepted (already existing for another tyre position) |
| 0xFF | ungültig | invalid |

### TAB_MR_RDC_FEHLER

| WERT | TEXT | TEXT ENGLISCH |
| --- | --- | --- |
| 0x00 | kein Fehler |  |
| 0x01 | Fehler im Reifen vorn |  |
| 0x02 | Fehler im Reifen hinten |  |
| 0x03 | Fehler in beiden Reifen |  |
| 0x07 | Signal ungültig |  |

### TAB_MR_RDC_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Vorne |
| 0x01 | Hinten |
| 0xFF | Ungültig |

### TAB_MR_RDC_RELEASE_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Release Candidate |
| 0x01 | Special Release |
| 0x02 | Alpha Release |
| 0x03 | Beta Release |

### TAB_MR_RDC_STATUS_ID_SCHREIBEN

| WERT | TEXT |
| --- | --- |
| 0x00 | ID akzeptiert |
| 0x01 | ID abgelehnt, da bereits VORNE programmiert |
| 0x02 | ID abgelehnt, da bereits HINTEN programmiert |
| 0xFF | Ungültig |

### TAB_MR_RDC_WARN

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Warnung |
| 0x01 | Status Warnung |
| 0x02 | Status Alarm 1 |
| 0x03 | Status Alarm 2 |
| 0x07 | Signal ungültig |

### TAB_MR_TRANSMITTER_ORT

| WERT | TEXT |
| --- | --- |
| 0x00 | Vorne |
| 0x01 | Hinten |
| 0xFF | Wert ungültig |

### TAB_MR_TRANSMITTER_SUCHE

| WERT | TEXT |
| --- | --- |
| 0x00 | Transmitter vorne und hinten nicht erkannt |
| 0x01 | Transmitter vorne erkannt, Transmitter hinten nicht erkannt |
| 0x02 | Transmitter vorne nicht erkannt, Transmitter hinten erkannt |
| 0x03 | Transmitter vorne und hinten erkannt |
| 0xFF | Ungültig |
