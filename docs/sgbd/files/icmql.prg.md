# icmql.prg

## General

|  |  |
| --- | --- |
| File | icmql.prg |
| Type | PRG |
| Jobs | 39 |
| Tables | 209 |
| Origin | BMW EF-611 Sinn_Christian |
| Revision | 1.077 |
| Author | BMW EF-612 Rüdiger_Magdon_(rm), BMW EF-612 Christian_Sinn_(cs), |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Integrated Chassis Modul_Quer/Längsdynamik (ICM_QL) |  |  |
| ORIGIN | string | BMW EF-611 Sinn_Christian |  |  |
| REVISION | string | 1.077 |  |  |
| AUTHOR | string | BMW EF-612 Rüdiger_Magdon_(rm), BMW EF-612 Christian_Sinn_(cs), |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.12 |  |  |
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

### SENSOREN_ANZAHL_LESEN

Anzahl der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers Modus: Default

_No arguments._

### SENSOREN_IDENT_LESEN

Identifikation der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers UDS  : $16xx SubbusMemberSerialNumber Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_NR | long | optionales Argument gewuenschter Sensor xx (0x01 - 0xFF) oder VERBAUORT eines bestimmten Sensors (table VerbauortTabelle ORT) |

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### STEUERN_ROE_STOP

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime)

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $04 report activated events

_No arguments._

### STEUERN_ROE_START

Temporaeres Aktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $05 Start $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime)

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

### STATUS_VERSION_INFO

Auslesen der OBR Version KWP2000: $21 $61 UDS    : $22 $4109

_No arguments._

### STATUS_AL_INIT_LESEN

Status der AFS Inbetriebnahme mit allen Randbedingungen JobHeaderFormat 0xDBE6 STATUS_AL_INIT

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

### VERBAUORTTABELLE

| ORT | ORTTEXT | LIN_2_FORMAT |
| --- | --- | --- |
| 0x0100 | Batteriesensor BSD | - |
| 0x0150 | Ölqualitätsensor BSD | - |
| 0x0200 | Elektrische Wasserpumpe BSD | - |
| 0x0250 | Elektrische Kraftstoffpumpe BSD | - |
| 0x0300 | Generator 1 | - |
| 0x0350 | Generator 2 | - |
| 0x0400 | Schaltzentrum Lenksäule | - |
| 0x0500 | DSC Sensor-Cluster | - |
| 0x0600 | Nahbereichsradarsensor links | - |
| 0x0700 | Nahbereichsradarsensor rechts | - |
| 0x0800 | Funkempfänger | - |
| 0x0900 | Elektrische Lenksäulenverriegelung | - |
| 0x0A00 | Regen- Lichtsensor | - |
| 0x290A00 | DSC Hydraulikblock | - |
| 0x0B00 | Nightvision Kamera | - |
| 0x0C00 | TLC Kamera | - |
| 0x0D00 | Spurwechselradarsensor hinten links | - |
| 0x0E00 | Heckklima Bedienteil rechts | 1 |
| 0x0F00 | Rearview Kamera hinten | 1 |
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
| 0x1400 | Wischermotor | 1 |
| 0x1500 | Regen- Lichtsensor | 1 |
| 0x1600 | Innenspiegel | 1 |
| 0x1700 | Garagentoröffner | 1 |
| 0x1800 | AUC-Sensor | 1 |
| 0x1900 | Druck- Temperatursensor | 1 |
| 0x1A20 | Schalterblock Sitzheizung hinten links | 1 |
| 0x1A40 | Schalterblock Sitzheizung hinten rechts | 1 |
| 0x1A60 | Sitzheizung Fahrer | 1 |
| 0x1A80 | Sitzheizung Beifahrer | 1 |
| 0x1AA0 | Sitzheizung Fahrer hinten | 1 |
| 0x1AC0 | Sitzheizung Beifahrer hinten | 1 |
| 0x1B00 | Schalterblock Sitzmemory/-massage Fahrer | 1 |
| 0x1C00 | Schalterblock Sitzmemory/-massage Beifahrer | 1 |
| 0x1C80 | Sitzverstellschalter Beifahrer über Fond | 1 |
| 0x1D00 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x1E00 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x1E40 | Heckklappenemblem | 1 |
| 0x1F00 | KAFAS Kamera | 1 |
| 0x2000 | Automatische Anhängevorrichtung | 1 |
| 0x2100 | SINE | 1 |
| 0x2110 | DWA Mikrowellensensor vorne rechts | 1 |
| 0x2120 | DWA Mikrowellensensor hinten rechts | 1 |
| 0x2130 | DWA Mikrowellensensor hinten links | 1 |
| 0x2140 | DWA Mikrowellensensor vorne links | 1 |
| 0x2150 | DWA Mikrowellensensor hinten | 1 |
| 0x2180 | DWA Ultraschallsensor | 1 |
| 0x2200 | Aussenspiegel Fahrer | - |
| 0x2300 | Aussenspiegel Beifahrer | - |
| 0x2400 | Schaltzentrum Tür | 1 |
| 0x2500 | Schalterblock Sitz Fahrer | 1 |
| 0x2600 | Schalterblock Sitz Beifahrer | 1 |
| 0x2700 | Gurtbringer Fahrer | 1 |
| 0x2800 | Gurtbringer Beifahrer | 1 |
| 0x2900 | Treibermodul Scheinwerfer links | 1 |
| 0x2A00 | Treibermodul Scheinwerfer rechts | 1 |
| 0x2B00 | Bedieneinheit Fahrerassistenzsysteme | 1 |
| 0x2C00 | Bedieneinheit Licht | 1 |
| 0x0910 | Elektrische Lenksäulenverriegelung | 1 |
| 0x3200 | Funkempfänger | 1 |
| 0x3300 | Funkempfänger 2 | 1 |
| 0x3400 | Türgriffelektronik Fahrer | - |
| 0x3500 | Türgriffelektronik Beifahrer | - |
| 0x3600 | Türgriffelektronik Fahrer hinten | - |
| 0x3700 | Türgriffelektronik Beifahrer hinten | - |
| 0x3800 | Telestart-Handsender 1 | - |
| 0x3900 | Telestart-Handsender 2 | - |
| 0x3A00 | Fond-Fernbedienung | - |
| 0x3B00 | Elektrische Wasserpumpe | 1 |
| 0x3B10 | Elektrische Wasserpumpe 1 | 1 |
| 0x3B20 | Elektrische Wasserpumpe 2 | 1 |
| 0x3B80 | Elektrische Zusatzwasserpumpe | 1 |
| 0x3C00 | Batteriesensor LIN | - |
| 0x3D00 | Aktives Kühlklappensystem | 1 |
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x3F80 | Generator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
| 0x5710 | Satellit Tür links | 0 |
| 0x5718 | Satellit Tür rechts | 0 |
| 0x5720 | Satellit B-Säule links X | 0 |
| 0x5728 | Satellit B-Säule rechts X | 0 |
| 0x5730 | Satellit B-Säule links Y | 0 |
| 0x5738 | Satellit B-Säule rechts Y | 0 |
| 0x5740 | Satellit Zentralsensor X | 0 |
| 0x5748 | Satellit Zentralsensor Y | 0 |
| 0x5750 | Satellit Zentralsensor Low g Y | 0 |
| 0x5758 | Satellit Zentralsensor Low g Z | 0 |
| 0x5760 | Satellit Zentralsensor Roll Achse | 0 |
| 0x5768 | Fussgängerschutz Sensor links | 0 |
| 0x5770 | Fussgängerschutz Sensor rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor mitte | 0 |
| 0x5780 | Fussgängerschutz Sensorband | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0xFFFF | unbekannter Verbauort | - |

### PARTNRTABELLE

| PART_NR | BMW_NR | KOMMENTAR |
| --- | --- | --- |
| -- | -- | unbekannte Teilenummer |

### LIEFERANTENLIN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x0001 | Audi |
| 0x0002 | BMW |
| 0x0003 | DaimlerChrysler |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars (Ford Group) |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis |
| 0x0014 | Microchip |
| 0x0015 | CRF |
| 0x0016 | Renesas Technology Europe GmbH |
| 0x0017 | Atmel |
| 0x0018 | Magnet Marelli |
| 0x0019 | NEC |
| 0x001A | Fujitsu |
| 0x001B | Opel |
| 0x001C | Infineon |
| 0x001D | AMI Semiconductor |
| 0x001E | Vector Informatik |
| 0x001F | Brose |
| 0x0020 | ZMD |
| 0x0021 | ihr |
| 0x0022 | Visteon |
| 0x0023 | ELMOS |
| 0x0024 | ON Semi |
| 0x0025 | Denso |
| 0x0026 | c&s |
| 0x0027 | Renault |
| 0x0028 | Renesas Technology Europe Limited |
| 0x0029 | Yazaki |
| 0x002A | Trinamic Microchips |
| 0x002B | Allegro Microsystems |
| 0x002C | Toyota |
| 0x002D | PSA Peugeot Citroën |
| 0x002E | Westsächsische Hochschule Zwickau |
| 0x002F | Micron AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt Ingenierbüro GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA Hueck & Co. |
| 0x0037 | Continental Temic microelectronic GmbH |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electric Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0x0051 | MAGNA-Donnelly GmbH&Co.KG |
| 0x0052 | IEE S.A. |
| 0x0053 | austriamicrosystems AG |
| 0x0054 | Agilent Technologies |
| 0x0055 | Lear Corporation  |
| 0x0056 | KOSTAL Ireland GmbH |
| 0x0057 | LIPOWSKY Industrie-Elektronik GmbH  |
| 0x0058 | Sanken Electric Co.,Ltd |
| 0x0059 | Elektrobit Automotive GmbH |
| 0x005A | VIMERCATI S.p.A. |
| 0x005B | AB Volvo |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic |
| 0x0061 | Flextronics / Sidler Automotive |
| 0x0062 | EAO Automotive |
| 0x0063 | helag-electronic |
| 0x0064 | Magna International |
| 0x0065 | ARVINMERITOR |
| 0x0067 | Defond Holding / BJAutomotive |
| 0xFFFF | unbekannter Hersteller |

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

### UDS_TAB_ROE_AKTIV

| NR | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung deaktiviert |
| 0x01 | Aktive Fehlermeldung aktiviert |
| 0xFF | Status der aktiven Fehlermeldung nicht feststellbar |

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
| 0x021C00 | SC-VSM Energiesparmodus aktiv VSM | 0 |
| 0x02FF1C | SC-DM TEST_APPL | 0 |
| 0x480002 | Betriebsbereitschaft Dimmung | 1 |
| 0x480004 | Betriebsbereitschaft TLC | 1 |
| 0x480005 | Betriebsbereitschaft Klemmen-Steuerung  [gueltig bis F001-08-09-I510] | 1 |
| 0x480006 | KL30 Unterspannung | 1 |
| 0x480007 | KL30 Überspannung | 1 |
| 0x480008 | Flexray - Sporadischer Busfehler (Flexray asynchron) | 0 |
| 0x480009 | S-CAN Bus Fehler | 0 |
| 0x48000A | Errormode Vergleich Fahrgestellnummer | 0 |
| 0x48000F | Motorlagewinkel AL ungueltig | 0 |
| 0x480010 | Motorlagewinkel HSR ungueltig | 1 |
| 0x480011 | SZL neu verbaut | 0 |
| 0x480012 | AL langsame Lenkwinkelsynchronisation | 0 |
| 0x480013 | AL im Pausemodus und Fahrzeug rollt | 0 |
| 0x480014 | AL inaktiv und Fahrzeug rollt | 0 |
| 0x48001F | Abschaltung Hauptrechner | 0 |
| 0x480020 | Abschaltung Überwachungsrechner | 0 |
| 0x480021 | Sicherheitsabschaltung Überwachungsrechner | 0 |
| 0x480023 | Rucküberwachung | 0 |
| 0x480024 | Sicherheitsabschaltung Antrieb | 0 |
| 0x480025 | Sicherheitsabschaltung Bremse | 0 |
| 0x480026 | Stillstandsmanagement | 0 |
| 0x48002A | Bereitschaft Fahrpedal | 1 |
| 0x48002C | Betriebsbereitschaft Bremsensteuergerät | 1 |
| 0x48002D | Betriebsbereitschaft Kombi | 1 |
| 0x48002E | Betriebsbereitschaft Motorsteuergerät | 1 |
| 0x480032 | DSC ANZ unplausibel | 0 |
| 0x480033 | OBR Offset Gierrate | 0 |
| 0x480035 | Rechter SRR dejustiert | 0 |
| 0x480036 | Linker SRR dejustiert | 0 |
| 0x480037 | SRR R Sensor SG Fehler | 0 |
| 0x480038 | SRR R Sensor temporärer Fehler | 0 |
| 0x480039 | SRR L Sensor SG Fehler | 0 |
| 0x48003A | SRR L Sensor temporärer Fehler | 0 |
| 0x48003B | SG Fehler LRR/FRR Status | 0 |
| 0x48003C | LRR/FRR dejustiert (LDM Fusionsalgorithmus) | 0 |
| 0x480043 | Errormode wegen Built in Selftest - Initialtest fehlgeschlagen | 0 |
| 0x480045 | Errormode wegen Built in Selftest - Zyklischer Test fehlgeschlagen | 0 |
| 0x480046 | Modus für Rollenprüfstand ist aktiv | 0 |
| 0x480048 | Betriebsbereitschaft Kamera System | 1 |
| 0x480049 | Betriebsbereitschaft Rück-Radar Sensoren | 1 |
| 0x48004A | Betriebsbereitschaft Vibrations-Aktuator Lenkrad | 1 |
| 0x48004B | Betriebsbereitschaft Aussen-Spiegel Warnung (ab F001_09_03 nur links)  [gueltig bis F001-09-09-I450] | 1 |
| 0x48004C | Betriebsbereitschaft Taster Spur-Wechsel Warnung | 1 |
| 0x48004D | Betriebsbereitschaft Taster Spur-Verlassen Warnung | 1 |
| 0x48004F | Betriebsbereitschaft Fahr-Licht Sensor | 1 |
| 0x480051 | Betriebsbereitschaft Vertikal-Dynamik-System | 1 |
| 0x480052 | Betriebsbereitschaft Blinker Ansteuerung  [gueltig bis F001-08-09-I510] | 1 |
| 0x480055 | EVV sporadischer Fehler | 0 |
| 0x480056 | EVV Unterbrechung Schaltkreis | 0 |
| 0x480057 | EVV Kurzschluss Masse gegen Low Side | 0 |
| 0x480058 | EVV Kurzschluss Klemme 30 gegen Low Side | 0 |
| 0x480059 | EVV Kurzschluss Masse gegen High Side | 0 |
| 0x48005A | EVV Kurzschluss Klemme 30 gegen High Side | 0 |
| 0x48005B | EVV Kurzschluss Spulenwindung | 0 |
| 0x48005C | EVV nicht lokalisierbarer Kurzschluss gegen Masse | 0 |
| 0x48005D | EVV nicht lokalisierbarer Kurzschluss gegen Klemme 30 | 0 |
| 0x48005E | Servo sporadischer Fehler | 0 |
| 0x48005F | Servo Unterbrechung Schaltkreis | 0 |
| 0x480060 | Servo Kurzschluss Masse gegen Low Side | 0 |
| 0x480061 | Servo Kurzschluss Klemme 30 gegen Low Side | 0 |
| 0x480062 | Servo Kurzschluss Masse gegen High Side | 0 |
| 0x480063 | Servo Kurzschluss Klemme 30 gegen High Side | 0 |
| 0x480064 | Servo Kurzschluss Spulenwindung | 0 |
| 0x480065 | Servo nicht lokalisierbarer Kurzschluss gegen Masse | 0 |
| 0x480066 | Servo nicht lokalisierbarer Kurzschluss gegen Klemme 30 | 0 |
| 0x480067 | Höhenstand VL Versorgungsspannung | 0 |
| 0x480068 | Höhenstand VL Messspannung grösser U max | 0 |
| 0x480069 | Höhenstand VL Messspannung kleiner U min | 0 |
| 0x48006A | Höhenstand VR Versorgungsspannung | 0 |
| 0x48006B | Höhenstand VR Messspannung grösser U max | 0 |
| 0x48006C | Höhenstand VR Messspannung kleiner U min | 0 |
| 0x48006D | Höhenstand HL Versorgungsspannung | 0 |
| 0x48006E | Höhenstand HL Messspannung grösser U max | 0 |
| 0x48006F | Höhenstand HL Messspannung kleiner U min | 0 |
| 0x480070 | Höhenstand HR Versorgungsspannung | 0 |
| 0x480071 | Höhenstand HR Messspannung grösser U max | 0 |
| 0x480072 | Höhenstand HR Messspannung kleiner U min | 0 |
| 0x480073 | Fehler Beschleunigungssensoren. Adaptivdaten für Sensortoleranz auf Maximalwert | 0 |
| 0x480075 | AL im Errormodus | 1 |
| 0x480076 | AL im undefinierten Statemaschine Zustand | 0 |
| 0x480078 | AL im Werksmodus | 0 |
| 0x480079 | AL AGB (Dynamik zu gering, Fehleramplitude zu groß) | 0 |
| 0x48007C | HC1 Kamera System | 1 |
| 0x48007D | HC1 Kombiinstrument  [gueltig bis F001-08-09-I510] | 1 |
| 0x48007E | HC1 Bremsregelsystem | 1 |
| 0x48007F | HC1 Vertikaldynamiksystem  [gueltig bis F001-08-09-I510] | 1 |
| 0x480080 | HC1 Betriebsbereitschaft EPS | 1 |
| 0x480082 | Errormode CPU1 wegen SU_TIMEOUT | 0 |
| 0x480083 | Errormode CPU1 wegen ECC | 0 |
| 0x480084 | Errormode CPU1 wegen IPC | 0 |
| 0x480085 | Errormode CPU1 wegen CPU2_MODE | 0 |
| 0x480086 | Errormode CPU1 wegen CPU2_SW | 0 |
| 0x480087 | Flexray asynchron  [gueltig bis F001-09-08-I450] | 0 |
| 0x480088 | Errormode CPU1 wegen OS_ASYNC | 0 |
| 0x480089 | Errormode CPU1 wegen RESET_CPU2 | 0 |
| 0x48008A | Errormode CPU1 wegen DIV_CALC | 0 |
| 0x48008B | Errormode CPU1 wegen CODING_DATA | 0 |
| 0x48008C | Errormode CPU1 wegen EXCEPTION_CPU | 0 |
| 0x48008D | Errormode CPU1 wegen FMPLL_LOC | 0 |
| 0x48008E | Errormode CPU1 wegen FMPLL_LOL | 0 |
| 0x48008F | Errormode CPU1 wegen UNDERVOLTAGE_MTA | 0 |
| 0x480090 | Errormode CPU1 wegen ERR_VOL_TLE | 0 |
| 0x480091 | Errormode CPU1 wegen ERR_VOL_LM | 0 |
| 0x480092 | Errormode CPU1 wegen DMA | 0 |
| 0x480093 | Errormode CPU1 wegen OS Deadline | 0 |
| 0x480094 | Errormode CPU1 wegen OS Sys Stackoverflow | 0 |
| 0x480096 | Errormode CPU2 wegen ECC | 0 |
| 0x480097 | Errormode CPU2 wegen IPC | 0 |
| 0x480098 | Errormode CPU2 wegen CODING_DATA | 0 |
| 0x480099 | Errormode CPU2 wegen EXCEPTION_CPU | 0 |
| 0x48009A | Errormode CPU2 wegen FMPLL_LOC | 0 |
| 0x48009B | Errormode CPU2 wegen FMPLL_LOL | 0 |
| 0x48009C | Errormode CPU2 wegen ERR_VOL_TLE  [gueltig bis F001-09-08-I450] | 0 |
| 0x48009D | Errormode CPU2 wegen ERR_VOL_LM  [gueltig bis F001-09-08-I450] | 0 |
| 0x48009E | Errormode CPU2 wegen DMA | 0 |
| 0x48009F | Sensor PsiP1 RefSpg zu hoch niedrig | 0 |
| 0x480100 | HSR langsame Lenkwinkelsynchronisation | 0 |
| 0x480101 | Sensor PsiP1 SPI Uebertragungs Fehler | 0 |
| 0x480102 | Sensor PsiP1 Passiver Selbsttest fehlgeschlagen | 0 |
| 0x480103 | Sensor PsiP2 Sig unterer Fehlerbereich | 0 |
| 0x480104 | Sensor PsiP2 Sig oberer Fehlerbereich | 0 |
| 0x480105 | Sensor PsiP2 RefSpg zu hoch niedrig | 0 |
| 0x480106 | Sensor PsiP2 SPI Uebertragungs Fehler | 0 |
| 0x480107 | Sensor PsiP2 Passiver Selbsttest fehlgeschlagen | 0 |
| 0x480108 | Sensor AX Sig unterer Fehlerbereich | 0 |
| 0x480109 | Sensor AX Sig oberer Fehlerbereich | 0 |
| 0x48010A | Sensor AX RefSpg zu hoch niedrig | 0 |
| 0x48010B | Sensor AX SPI Uebertragungs Fehler | 0 |
| 0x48010D | FDS Sport abgesteckt | 0 |
| 0x48010E | FDS Normal abgesteckt | 0 |
| 0x48010F | FDS DTC abgesteckt | 0 |
| 0x480110 | HSR AGB (Dynamik zu gering, Fehleramplitude zu groß) | 0 |
| 0x480111 | FDS Sport Deaktivierung Handtaschen Funktion | 0 |
| 0x480112 | FDS Normal Deaktivierung Handtaschen Funktion | 0 |
| 0x480113 | FDS DTC Deaktivierung Handtaschen Funktion | 0 |
| 0x480114 | Infoeintrag: Fahrdynamikschalter - Funktionale Einschränkung aufgrund eines ausgefallenen Partner-Steuergeräts | 1 |
| 0x480116 | Höhenstandsabgleich noch nicht durchgeführt | 0 |
| 0x480117 | Höhenstandsabgleich Werte unplausibel | 0 |
| 0x48011A | Fehler Gierrate ay - Signalueberwachung: Redundanzfehler | 0 |
| 0x48011B | Fehler Querbeschleunigung ay1 - Signalueberwachung: Modellfehler Sensor 1 | 0 |
| 0x48011C | Fehler Querbeschleunigung ay1 - Signalueberwachung: Signalqualität Sensor 1 ungenuegend | 0 |
| 0x48011D | Fehler Querbeschleunigung ay2 - Signalueberwachung: Modellfehler Sensor 2 | 0 |
| 0x48011E | Fehler Querbeschleunigung ay2 - Signalueberwachung: Signalqualität Sensor 2 ungenuegend | 0 |
| 0x48011F | Fehler Gierrate psiP - Signalueberwachung: Redundanzfehler | 0 |
| 0x480121 | Fehler Gierrate psiP1 - Signalueberwachung: Modellfehler Sensor 1 | 0 |
| 0x480122 | Fehler Gierrate psiP1 - Signalueberwachung: Signalqualität Sensor 1 ungenuegend | 0 |
| 0x480123 | Fehler Gierrate psiP2 - Signalueberwachung: Modellfehler Sensor 2 | 0 |
| 0x480124 | Fehler Gierrate psiP2 - Signalueberwachung: Signalqualität Sensor 2 ungenuegend | 0 |
| 0x480125 | Fehler Laengsbeschleunigung ax - Signalueberwachung: Modellfehler | 0 |
| 0x480126 | Fehler Laengsbeschleunigung ax - Signalueberwachung: Signalqualität ungenuegend | 0 |
| 0x480127 | Fehler Lenkwinkel Fahrer - Signalueberwachung: Modellfehler | 0 |
| 0x480128 | Fehler Lenkwinkel effektiv - Modellüberwachung zugeschlagen | 0 |
| 0x480129 | Fehler Lenkwinkel effektiv - Endanschlagsüberwachung zugeschlagen | 0 |
| 0x48012A | Fehler Querbeschleunigung ay - Diversitäres Rechnen HL-Software | 0 |
| 0x48012B | Fehler Gierrate psiP - Diversitäres Rechnen HL-Software | 0 |
| 0x48012C | Fehler Laengsbeschleunigung ax - Diversitäres Rechnen HL-Software | 0 |
| 0x48012D | Fehler Lenkwinkel Fahrer - Diversitäres Rechnen HL-Software | 0 |
| 0x48012E | Fehler Lenkwinkel effektiv - Diversitäres Rechnen HL-Software | 0 |
| 0x48012F | Fehler Querbeschleunigung aus Seitenneigung - Diversitäres Rechnen HL-Software | 0 |
| 0x480131 | Fehler Fahrgeschwindigkeit vx - Diversitäres Rechnen HL-Software | 0 |
| 0x480132 | Fehler Lenkwinkel Aktivlenkung - Vorzeichenfehler/ ASA falsch codiert | 0 |
| 0x480134 | Fahrtrichtung unsicher bei vx groeßer 2 m/s | 0 |
| 0x480135 | SZL neu abgeglichen | 0 |
| 0x480136 | AL schnelle Lenkwinkelsynchronisation | 0 |
| 0x480137 | HSR inaktiv und Fahrzeug rollt | 0 |
| 0x480138 | HSR im Pausemodus und Fahrzeug rollt | 0 |
| 0x480139 | HSR im undefinierten Statemaschine Zustand | 1 |
| 0x48013B | HSR schnelle Lenkwinkelsynchronisation | 0 |
| 0x48013D | Betriebsbereitschaft Ausgabe PCW | 1 |
| 0x48013E | Betriebsbereitschaft Schalten PCW Vorwarnung | 1 |
| 0x48013F | Betriebsbereitschaft Verstellen PCW Warnstufen | 1 |
| 0x480140 | Betriebsbereitschaft Vorbefüllung Bremse | 1 |
| 0x480141 | Betriebsbereitschaft Parametrieren DBC Bremse | 1 |
| 0x480142 | Betriebsbereitschaft Schlupfregel Stabilisierung DSC | 1 |
| 0x480143 | Betriebsbereitschaft Bedienung Tempomat | 1 |
| 0x480144 | LDM funktionale Deaktivierung | 1 |
| 0x480145 | Sensor AY1 Sig unterer Fehlerbereich | 0 |
| 0x480146 | Sensor AY1 Sig oberer Fehlerbereich | 0 |
| 0x480147 | Sensor AY1 RefSpg zu hoch niedrig | 0 |
| 0x480148 | Sensor AY1 SPI Uebertragungs Fehler | 0 |
| 0x48014A | Sensor AY2 Sig unterer Fehlerbereich | 0 |
| 0x48014B | Sensor AY2 Sig oberer Fehlerbereich | 0 |
| 0x48014C | Sensor AY2 RefSpg zu hoch niedrig | 0 |
| 0x48014D | Sensor AY2 SPI Uebertragungs Fehler | 0 |
| 0x48014F | Sensor PsiP1 Sig unterer Fehlerbereich | 0 |
| 0x480150 | Sensor PsiP1 Sig oberer Fehlerbereich | 0 |
| 0x480151 | FDS Sport Kurzschluss Masse | 0 |
| 0x480152 | FDS Normal Kurzschluss Masse | 0 |
| 0x480153 | FDS DTC Kurzschluss Masse | 0 |
| 0x480154 | HSR im Errormodus | 1 |
| 0x480158 | Errormode Status TLE fehlerhaft  [gueltig bis F001-09-08-I450] | 0 |
| 0x48015E | EMF defekt  [gueltig bis F001-08-09-I500] | 1 |
| 0x48015F | Stillstandsmanagement nicht verfügbar | 1 |
| 0x480160 | SC-Coding SG nicht codiert | 0 |
| 0x480161 | SC-Coding CODING_EVENT_TRANSACTION_FAILED | 0 |
| 0x480162 | SC-Coding Signaturfehler in Codierdaten | 0 |
| 0x480163 | SC-Coding Codierdaten im falschen Fahrzeug | 0 |
| 0x480164 | SC-Coding falsche Codierdaten | 0 |
| 0x482601 | Höhenstand VL Fehler in Gleichung | 0 |
| 0x482602 | Höhenstand VR Fehler in Gleichung | 0 |
| 0x482603 | Höhenstand HL Fehler in Gleichung | 0 |
| 0x482604 | Höhenstand HR Fehler in Gleichung | 0 |
| 0x482605 | Errormode Kodierdaten von ZFM nicht plausibel | 0 |
| 0x482608 | ARS Servicequalifier: Funktion fehler/ defekt: | 1 |
| 0x48260F | Adaptivdaten für Lenkwinkeltoleranz auf Maximalwert | 0 |
| 0x482611 | Stillstandsmanagement hat nicht übernommen | 0 |
| 0x482614 | Überwachungsschwellen der Querbeschleunigungsüberwachung über Kodierung aufgeweitet | 0 |
| 0x482615 | Fehler Funktionsbeleuchtung iBrake | 1 |
| 0x482616 | LDM-Empfangsschicht: Unterbrechung | 0 |
| 0x482617 | LDM-Sensortask: Rechenzeitüberschreitung | 0 |
| 0x482618 | FDS Normal Tracker-Spannung | 0 |
| 0x482619 | FDS Sport Tracker-Spannung | 0 |
| 0x48261A | FDS DTC Tracker-Spannung | 0 |
| 0x48261B | Conti Produktionsdaten ungültig oder SG ist keine Serien-HW | 0 |
| 0x48261C | Fehleramplitude auf Gierratenutzsignal aufgrund Fehlerverdacht | 0 |
| 0x48261D | Fehleramplitude auf Querbeschleunigungsnutzsignal aufgrund Fehlerverdacht | 0 |
| 0x48261E | Fehleramplitude auf Längsbeschleunigungsnutzsignal aufgrund Fehlerverdacht | 0 |
| 0x48261F | Fehleramplitude auf Lenkwinkelnutzsignal aufgrund Fehlerverdacht | 0 |
| 0x482620 | Sensor AX Aktiver Selbsttest fehlgeschlagen | 0 |
| 0x482621 | Sensor AY1 Aktiver Selbsttest fehlgeschlagen | 0 |
| 0x482622 | Sensor AY2 Aktiver Selbsttest fehlgeschlagen | 0 |
| 0x482623 | Sensor PsiP1 Aktiver Selbsttest fehlgeschlagen | 0 |
| 0x482624 | Sensor PsiP2 Aktiver Selbsttest fehlgeschlagen | 0 |
| 0x48262B | Betriebsbereitschaft Aussen-Spiegel Warnung rechts | 1 |
| 0x48262C | EPS liefert trotz Motor läuft keine Unterstützung | 1 |
| 0x48262E | Errormode CPU2 wegen OS Deadline | 0 |
| 0x48262F | Errormode CPU2 wegen OS Sys Stackoverflow | 0 |
| 0x482630 | Flexray - Ausfall aller Botschaften ohne Flexray-Asynchronität | 0 |
| 0x482631 | Kein SLD-fähiges Motorsteuergerät verbaut | 1 |
| 0x482632 | Sicherheit SLD: Antriebsfreigabe | 0 |
| 0x482633 | Sicherheit SLD: Sicherheitsabschaltung | 0 |
| 0x482634 | Sicherheit HDC: Antriebsfreigabe | 0 |
| 0x482635 | Sicherheit HDC: Sicherheitsabschaltung | 0 |
| 0x482636 | Abschaltung durch Sicherheitskoordinator: Antrieb | 0 |
| 0x482637 | Abschaltung durch Sicherheitskoordinator: Bremse | 0 |
| 0x482638 | Abschaltung durch Sicherheitskoordinator: Betriebsmodus FMK | 0 |
| 0x482639 | Abschaltung durch Sicherheitskoordinator: Sicherheitsabschaltung | 0 |
| 0x48263A | iBrake: Sicherheitsabschaltung durch Hauptrechner | 0 |
| 0x48263B | iBrake: Sicherheit iBrake Abschaltung Bremse | 0 |
| 0x48263C | iBrake: Sicherheit iBrake Vorwarnung Verzoegerungsueberwachung | 0 |
| 0x48263D | Info: OS Sync Sprung | 0 |
| 0x482640 | Betriebsbereitschaft DSC | 1 |
| 0x482643 | Betriebsbereitschaft Aussen-Spiegel Warnung nur links | 1 |
| 0x482644 | SLD: Abschaltung durch Überwachungsrechner | 0 |
| 0x482645 | SLD: Sicherheitsabschaltung durch Überwachungsrechner | 0 |
| 0x482646 | iBrake: Abschaltung durch Überwachungsrechner | 0 |
| 0x482647 | iBrake: Sicherheitsabschaltung durch Überwachungsrechner | 0 |
| 0x482648 | HDC: Abschaltung durch Überwachungsrechner | 0 |
| 0x482649 | HDC: Sicherheitsabschaltung durch Überwachungsrechner | 0 |
| 0x48264A | HDC: Betriebsbereitschaft HDC-Funktion im DSC | 1 |
| 0x48264B | Sicherheitskoordinator: Abschaltung durch Überwachungsrechner | 0 |
| 0x48264C | Sicherheitskoordinator: Sicherheitsabschaltung durch Überwachungsrechner | 0 |
| 0xD0041F | FlexRay Hardware Fehler | 0 |
| 0xD00420 | FlexRay Controller Fehler | 0 |
| 0xD00BFF | SC-DM TEST_COM | 0 |
| 0xD01401 | Botschaftsfehler (Synchronisation Navigationsgraph, ID: NAV_GRAPH_SYNC) Sender: ZGW_Navi - Timeout | 1 |
| 0xD01402 | Botschaftsfehler (Synchronisation Navigationsgraph, ID: NAV_GRAPH_SYNC) Sender: ZGW_Navi - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD01411 | Botschaftsfehler (SEN_DT_HDWOBS) Sender: FRR - Timeout | 1 |
| 0xD01428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi - Timeout | 1 |
| 0xD0142C | Signalfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi - Ungültig | 1 |
| 0xD0143E | Botschaftsfehler (Bedienung Fahrwerk, ID: BEDIENUNG_FAHRWERK) Sender: ZGW_Headunit - Timeout | 1 |
| 0xD01442 | Signalfehler (Bedienung Fahrwerk, ID: BEDIENUNG_FAHRWERK) Sender: ZGW_Headunit - Ungültig | 1 |
| 0xD01443 | Signalfehler (Bedienung Fahrwerk, ID: BEDIENUNG_FAHRWERK) Sender: ZGW_Headunit - Undefiniert | 1 |
| 0xD01444 | Botschaftsfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) Sender: SZL_LWS - Timeout | 1 |
| 0xD01445 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Checksumme | 1 |
| 0xD01448 | Signalfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) Sender: SZL_LWS - Ungültig | 1 |
| 0xD01449 | Botschaftsfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) Sender: SZL_LWS - Alive  [gueltig bis F001-08-09-I510] | 1 |
| 0xD0144E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS - Ungültig | 1 |
| 0xD01450 | Signalfehler (Blinken, ID: BLINKEN) Sender: FRMFA - Ungültig | 1 |
| 0xD01451 | Botschaftsfehler (Blinken, ID: BLINKEN) Sender: FRMFA - Timeout | 1 |
| 0xD01476 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME/DDE - Ungültig | 1 |
| 0xD01482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS - Timeout | 1 |
| 0xD01483 | Botschaftsfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) Sender: SZL_LWS - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD01484 | Botschaftsfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) Sender: SZL_LWS - Alive | 1 |
| 0xD01494 | Botschaftsfehler (Fahrzeugtyp, ID: FAHRZEUGTYP) Sender: CAS - Timeout | 1 |
| 0xD01495 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) Sender: PMA - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD01496 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) Sender: PMA - Alive | 1 |
| 0xD01498 | Signalfehler (Fahrzeugtyp, ID: FAHRZEUGTYP) Sender: CAS - Ungültig | 1 |
| 0xD01499 | Signalfehler (Fahrzeugtyp, ID: FAHRZEUGTYP) Sender: CAS - Undefiniert | 1 |
| 0xD014AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) Sender: JBBF - Timeout | 1 |
| 0xD014B2 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: JBBF - Ungültig | 1 |
| 0xD014B3 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: JBBF - Undefiniert | 1 |
| 0xD014B6 | Signalfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Ungültig | 1 |
| 0xD014B7 | Signalfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Undefiniert  [gueltig bis F001-08-09-I510] | 1 |
| 0xD014D6 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: SZL_LWS - Timeout | 1 |
| 0xD014D7 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: SZL_LWS - Checksumme | 1 |
| 0xD014D8 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: SZL_LWS - Alive | 1 |
| 0xD014DC | Signalfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: SZL_LWS - Ungültig | 1 |
| 0xD014DD | Signalfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: SZL_LWS - Undefiniert | 1 |
| 0xD014E5 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME/DDE - Checksumme | 1 |
| 0xD014F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi - Timeout | 1 |
| 0xD014F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi - Ungültig | 1 |
| 0xD014F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS - Timeout | 1 |
| 0xD014F9 | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS - Checksumme | 1 |
| 0xD014FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS - Alive | 1 |
| 0xD014FC | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS - Ungültig | 1 |
| 0xD014FD | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS - Undefiniert | 1 |
| 0xD01513 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME/DDE - Alive | 1 |
| 0xD01514 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 00, ID: DISP_CC_DRDY_00) Sender: DSC_Modul - Ungültig | 1 |
| 0xD01515 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 01, ID: DISP_CC_DRDY_01) Sender: ICM_V - Ungültig | 1 |
| 0xD0151A | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi - Ungültig  [gueltig bis F001-09-09-I450] | 1 |
| 0xD01532 | Botschaftsfehler (Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) Sender: CAS - Timeout | 1 |
| 0xD01536 | Signalfehler (Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) Sender: CAS - Ungültig | 1 |
| 0xD01537 | Signalfehler (Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) Sender: CAS - Undefiniert | 1 |
| 0xD0153C | Signalfehler (Anzeige Checkcontrol Fahrdynamik 02, ID: DISP_CC_DRDY_02) Sender: EPS - Ungültig | 1 |
| 0xD0153D | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 00, ID: DISP_CC_DRDY_00) Sender: DSC_Modul - Timeout | 1 |
| 0xD01546 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 00, ID: DISP_CC_DRDY_00) Sender: DSC_Modul - Alive | 1 |
| 0xD01547 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 00, ID: DISP_CC_DRDY_00) Sender: DSC_Modul - Checksumme | 1 |
| 0xD01552 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME/DDE - Ungültig | 1 |
| 0xD01553 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME/DDE - Undefiniert | 1 |
| 0xD01557 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME/DDE - Timeout | 1 |
| 0xD01558 | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) Sender: DME/DDE - Timeout | 1 |
| 0xD01559 | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) Sender: DME/DDE - Checksumme | 1 |
| 0xD0155A | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) Sender: DME/DDE - Alive | 1 |
| 0xD0155E | Signalfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) Sender: DME/DDE - Ungültig | 1 |
| 0xD0156C | Signalfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) Sender: DME/DDE - Ungültig | 1 |
| 0xD0156D | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) Sender: DME/DDE - Timeout | 1 |
| 0xD01570 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME/DDE - Timeout | 1 |
| 0xD01571 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME/DDE - Checksumme | 1 |
| 0xD01572 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME/DDE - Alive | 1 |
| 0xD01575 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 01, ID: DISP_CC_DRDY_01) Sender: ICM_V - Timeout | 1 |
| 0xD01577 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME/DDE - Qualifier | 1 |
| 0xD0157A | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME/DDE - Ungültig | 1 |
| 0xD0157B | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME/DDE - Undefiniert | 1 |
| 0xD01580 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 01, ID: DISP_CC_DRDY_01) Sender: ICM_V - Alive | 1 |
| 0xD01581 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 01, ID: DISP_CC_DRDY_01) Sender: ICM_V - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD01584 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME/DDE - Ungültig | 1 |
| 0xD01585 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME/DDE - Undefiniert | 1 |
| 0xD01586 | Botschaftsfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) Sender: JBBF - Timeout | 1 |
| 0xD0158A | Signalfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) Sender: JBBF - Ungültig | 1 |
| 0xD0158B | Signalfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) Sender: JBBF - Undefiniert | 1 |
| 0xD0158C | Botschaftsfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi - Timeout | 1 |
| 0xD01590 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi - Ungültig | 1 |
| 0xD01591 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi - Undefiniert | 1 |
| 0xD015A0 | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) Sender: AHM - Timeout | 1 |
| 0xD015A4 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) Sender: AHM - Ungültig | 1 |
| 0xD015A5 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) Sender: AHM - Undefiniert | 1 |
| 0xD015A6 | Botschaftsfehler (Status ARS, ID: ST_ARS) Sender: ICM_V - Timeout | 1 |
| 0xD015A7 | Botschaftsfehler (Status ARS, ID: ST_ARS) Sender: ICM_V - Checksumme | 1 |
| 0xD015A8 | Botschaftsfehler (Status ARS, ID: ST_ARS) Sender: ICM_V - Alive | 1 |
| 0xD015AA | Signalfehler (Status ARS, ID: ST_ARS) Sender: ICM_V - Ungültig | 1 |
| 0xD015AB | Signalfehler (Status ARS, ID: ST_ARS) Sender: ICM_V - Undefiniert | 1 |
| 0xD015AC | Botschaftsfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) Sender: FRMFA - Timeout | 1 |
| 0xD015B0 | Signalfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) Sender: FRMFA - Ungültig | 1 |
| 0xD015B1 | Signalfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) Sender: FRMFA - Undefiniert | 1 |
| 0xD015B4 | Botschaftsfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) Sender: ZBE - Timeout | 1 |
| 0xD015B8 | Signalfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) Sender: ZBE - Ungültig | 1 |
| 0xD015B9 | Signalfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) Sender: ZBE - Undefiniert | 1 |
| 0xD015BC | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Timeout | 1 |
| 0xD015BD | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Checksumme | 1 |
| 0xD015BE | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Alive | 1 |
| 0xD015C2 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Ungültig | 1 |
| 0xD015C3 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD015C4 | Botschaftsfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) Sender: EPS - Timeout | 1 |
| 0xD015C5 | Botschaftsfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) Sender: EPS - Checksumme | 1 |
| 0xD015C6 | Botschaftsfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) Sender: EPS - Alive | 1 |
| 0xD015C8 | Signalfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) Sender: EPS - Ungültig | 1 |
| 0xD015C9 | Signalfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) Sender: EPS - Undefiniert | 1 |
| 0xD015CA | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) Sender: HSR - Timeout | 1 |
| 0xD015CB | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) Sender: HSR - Checksumme | 1 |
| 0xD015CC | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) Sender: HSR - Alive | 1 |
| 0xD015D0 | Signalfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) Sender: HSR - Ungültig | 1 |
| 0xD015D1 | Signalfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) Sender: HSR - Undefiniert | 1 |
| 0xD015DC | Botschaftsfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) Sender: DSC_Modul - Timeout | 1 |
| 0xD015DD | Botschaftsfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) Sender: DSC_Modul - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD015DE | Botschaftsfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) Sender: DSC_Modul - Alive | 1 |
| 0xD01628 | Botschaftsfehler (Status Lenkung Vorderachse, ID: ST_STE_FTAX) Sender: ASA - Timeout | 1 |
| 0xD01629 | Botschaftsfehler (Status Lenkung Vorderachse, ID: ST_STE_FTAX) Sender: ASA - Checksumme | 1 |
| 0xD0162A | Botschaftsfehler (Status Lenkung Vorderachse, ID: ST_STE_FTAX) Sender: ASA - Alive | 1 |
| 0xD01646 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME/DDE - Timeout | 1 |
| 0xD01647 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME/DDE - Checksumme | 1 |
| 0xD01648 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME/DDE - Alive | 1 |
| 0xD0164C | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME/DDE - Ungültig | 1 |
| 0xD0164D | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME/DDE - Undefiniert | 1 |
| 0xD01652 | Botschaftsfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) Sender: CAS - Timeout | 1 |
| 0xD01656 | Signalfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) Sender: CAS - Ungültig | 1 |
| 0xD01657 | Signalfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) Sender: CAS - Undefiniert  [gueltig bis F001-08-09-I510] | 1 |
| 0xD01660 | Botschaftsfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Timeout | 1 |
| 0xD01661 | Botschaftsfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Checksumme | 1 |
| 0xD01662 | Botschaftsfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Alive | 1 |
| 0xD01666 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Ungültig | 1 |
| 0xD01667 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Qualifier | 1 |
| 0xD01669 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD01677 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME/DDE - Qualifier | 1 |
| 0xD016A5 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 02, ID: DISP_CC_DRDY_02) Sender: EPS - Timeout | 1 |
| 0xD016B6 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 02, ID: DISP_CC_DRDY_02) Sender: EPS - Alive | 1 |
| 0xD016B7 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 02, ID: DISP_CC_DRDY_02) Sender: EPS - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD016DC | Botschaftsfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) Sender: Kombi - Timeout | 1 |
| 0xD016DD | Botschaftsfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) Sender: Kombi - Checksumme | 1 |
| 0xD016DE | Botschaftsfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) Sender: Kombi - Alive | 1 |
| 0xD016E1 | Signalfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) Sender: Kombi - Ungültig | 1 |
| 0xD016E2 | Signalfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) Sender: Kombi - Undefiniert | 1 |
| 0xD016E4 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) Sender: LMV - Timeout | 1 |
| 0xD016E5 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) Sender: LMV - Checksumme | 1 |
| 0xD016E6 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) Sender: LMV - Alive | 1 |
| 0xD016F2 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 03, ID: DISP_CC_DRDY_03) Sender: ICM_V - Timeout | 1 |
| 0xD016F3 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 03, ID: DISP_CC_DRDY_03) Sender: ICM_V - Alive | 1 |
| 0xD016F5 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Timeout | 1 |
| 0xD016F6 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Alive | 1 |
| 0xD016FB | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 03, ID: DISP_CC_DRDY_03) Sender: ICM_V - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD01705 | Botschaftsfehler (Anforderung Drehmoment Kurbelwelle ARS, ID: RQ_TORQ_CRSH_ARS) Sender: ICM_V - Timeout | 1 |
| 0xD01706 | Botschaftsfehler (Anforderung Drehmoment Kurbelwelle ARS, ID: RQ_TORQ_CRSH_ARS) Sender: ICM_V - Alive | 1 |
| 0xD01707 | Botschaftsfehler (Anforderung Drehmoment Kurbelwelle ARS, ID: RQ_TORQ_CRSH_ARS) Sender: ICM_V - Checksumme | 1 |
| 0xD01709 | Signalfehler (Anforderung Drehmoment Kurbelwelle ARS, ID: RQ_TORQ_CRSH_ARS) Sender: ICM_V - Ungültig | 1 |
| 0xD0170A | Signalfehler (Anforderung Drehmoment Kurbelwelle ARS, ID: RQ_TORQ_CRSH_ARS) Sender: ICM_V - Undefiniert | 1 |
| 0xD0171E | Botschaftsfehler (Bedienung I-Drive FAS, ID: OP_IDRV_FAS) Sender: ZGW_Schalter - Timeout | 1 |
| 0xD01722 | Signalfehler (Bedienung I-Drive FAS, ID: OP_IDRV_FAS) Sender: ZGW_Schalter - Ungültig | 1 |
| 0xD01723 | Signalfehler (Bedienung I-Drive FAS, ID: OP_IDRV_FAS) Sender: ZGW_Schalter - Undefiniert | 1 |
| 0xD01732 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) Sender: SZL_LWS - Timeout | 1 |
| 0xD01733 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) Sender: SZL_LWS - Checksumme | 1 |
| 0xD01734 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) Sender: SZL_LWS - Alive | 1 |
| 0xD01736 | Signalfehler (Bedienung Tempomat, ID: OP_CCTR) Sender: SZL_LWS - Ungültig | 1 |
| 0xD01744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME/DDE - Timeout | 1 |
| 0xD01745 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME/DDE - Checksumme | 1 |
| 0xD01746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME/DDE - Alive | 1 |
| 0xD01748 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 03, ID: DISP_CC_DRDY_03) Sender: ICM_V - Ungültig | 1 |
| 0xD01749 | Botschaftsfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) Sender: KAFAS - Timeout | 1 |
| 0xD0174A | Botschaftsfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) Sender: KAFAS - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD0174B | Botschaftsfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) Sender: KAFAS - Alive | 1 |
| 0xD0174D | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) Sender: DME/DDE - Checksumme | 1 |
| 0xD0174E | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) Sender: DME/DDE - Alive | 1 |
| 0xD01751 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME/DDE - Checksumme | 1 |
| 0xD01752 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME/DDE - Alive | 1 |
| 0xD01782 | Botschaftsfehler (Daten Funktion HDC, ID: DT_FN_HDC) Sender: DSC_Modul - Timeout | 1 |
| 0xD01783 | Botschaftsfehler (Daten Funktion HDC, ID: DT_FN_HDC) Sender: DSC_Modul - Checksumme | 1 |
| 0xD01784 | Botschaftsfehler (Daten Funktion HDC, ID: DT_FN_HDC) Sender: DSC_Modul - Alive | 1 |
| 0xD01786 | Signalfehler (Daten Funktion HDC, ID: DT_FN_HDC) Sender: DSC_Modul - Ungültig | 1 |
| 0xD01787 | Signalfehler (Daten Funktion HDC, ID: DT_FN_HDC) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD0178C | Botschaftsfehler (Daten Roll-Over Sensor, ID: DT_ROV_SEN) Sender: ACSM - Timeout  [gueltig bis F001-09-08-I400] | 1 |
| 0xD0178D | Botschaftsfehler (Daten Roll-Over Sensor, ID: DT_ROV_SEN) Sender: ACSM - Checksumme  [gueltig bis F001-09-08-I400] | 1 |
| 0xD0178E | Botschaftsfehler (Daten Roll-Over Sensor, ID: DT_ROV_SEN) Sender: ACSM - Alive  [gueltig bis F001-09-08-I400] | 1 |
| 0xD01790 | Signalfehler (Daten Roll-Over Sensor, ID: DT_ROV_SEN) Sender: ACSM - Ungültig  [gueltig bis F001-09-08-I400] | 1 |
| 0xD01791 | Signalfehler (Daten Roll-Over Sensor, ID: DT_ROV_SEN) Sender: ACSM - Undefiniert  [gueltig bis F001-09-08-I400] | 1 |
| 0xD0179F | Botschaftsfehler (Ist Anzahl Geberflanken Rad, ID: AVL_QUAN_EES_WHL) Sender: DSC_Modul - Timeout | 1 |
| 0xD017A0 | Botschaftsfehler (Ist Anzahl Geberflanken Rad, ID: AVL_QUAN_EES_WHL) Sender: DSC_Modul - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD017A1 | Botschaftsfehler (Ist Anzahl Geberflanken Rad, ID: AVL_QUAN_EES_WHL) Sender: DSC_Modul - Alive | 1 |
| 0xD017A3 | Signalfehler (Ist Anzahl Geberflanken Rad, ID: AVL_QUAN_EES_WHL) Sender: DSC_Modul - Ungültig | 1 |
| 0xD017A4 | Signalfehler (Ist Anzahl Geberflanken Rad, ID: AVL_QUAN_EES_WHL) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD017AB | Botschaftsfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) Sender: DSC_Modul - Timeout | 1 |
| 0xD017AC | Botschaftsfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) Sender: DSC_Modul - Checksumme | 1 |
| 0xD017AD | Botschaftsfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) Sender: DSC_Modul - Alive | 1 |
| 0xD017AF | Signalfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) Sender: DSC_Modul - Ungültig | 1 |
| 0xD017B0 | Signalfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD017B7 | Botschaftsfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) Sender: DSC_Modul - Timeout | 1 |
| 0xD017B8 | Botschaftsfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) Sender: DSC_Modul - Checksumme | 1 |
| 0xD017B9 | Botschaftsfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) Sender: DSC_Modul - Alive | 1 |
| 0xD017BB | Signalfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) Sender: DSC_Modul - Ungültig | 1 |
| 0xD017BC | Signalfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD017C1 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) Sender: DSC_Modul - Timeout | 1 |
| 0xD017C2 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) Sender: DSC_Modul - Checksumme | 1 |
| 0xD017C3 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) Sender: DSC_Modul - Alive | 1 |
| 0xD017C5 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) Sender: DSC_Modul - Ungültig | 1 |
| 0xD017C6 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD017E4 | Botschaftsfehler (Lampenzustand, ID: LAMPENZUSTAND) Sender: FRMFA - Timeout | 1 |
| 0xD017E8 | Signalfehler (Lampenzustand, ID: LAMPENZUSTAND) Sender: FRMFA - Ungültig | 1 |
| 0xD017E9 | Signalfehler (Lampenzustand, ID: LAMPENZUSTAND) Sender: FRMFA - Undefiniert  [gueltig bis F001-08-09-I510] | 1 |
| 0xD017EA | Botschaftsfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi - Timeout  [gueltig bis F001-09-09-I450] | 1 |
| 0xD017EB | Botschaftsfehler (BRAS_LRR) Sender: LRR - Timeout | 1 |
| 0xD017F0 | Botschaftsfehler (Lenkwinkel Fahrer Diagnose, ID: STEA_DV_DIAG) Sender: SZL_LWS - Timeout | 1 |
| 0xD017FD | Botschaftsfehler (Navigation GPS 1, ID: NAV_GPS1) Sender: ZGW_Navi - Timeout | 1 |
| 0xD01801 | Signalfehler (Navigation GPS 1, ID: NAV_GPS1) Sender: ZGW_Navi - Ungültig | 1 |
| 0xD01802 | Signalfehler (Navigation GPS 1, ID: NAV_GPS1) Sender: ZGW_Navi - Undefiniert | 1 |
| 0xD01805 | Botschaftsfehler (Navigation GPS 2, ID: NAV_GPS2) Sender: ZGW_Navi - Timeout | 1 |
| 0xD01809 | Signalfehler (Navigation GPS 2, ID: NAV_GPS2) Sender: ZGW_Navi - Ungültig | 1 |
| 0xD0180A | Signalfehler (Navigation GPS 2, ID: NAV_GPS2) Sender: ZGW_Navi - Undefiniert | 1 |
| 0xD01811 | Botschaftsfehler (Navigation System Information, ID: NAV_SYS_INF) Sender: ZGW_Navi - Timeout | 1 |
| 0xD01815 | Signalfehler (Navigation System Information, ID: NAV_SYS_INF) Sender: ZGW_Navi - Ungültig | 1 |
| 0xD01816 | Signalfehler (Navigation System Information, ID: NAV_SYS_INF) Sender: ZGW_Navi - Undefiniert | 1 |
| 0xD0181B | Botschaftsfehler (Navigationsgraph, ID: NAV_GRAPH) Sender: ZGW_Navi - Timeout | 1 |
| 0xD0181F | Signalfehler (Navigationsgraph, ID: NAV_GRAPH) Sender: ZGW_Navi - Ungültig | 1 |
| 0xD01820 | Signalfehler (Navigationsgraph, ID: NAV_GRAPH) Sender: ZGW_Navi - Undefiniert | 1 |
| 0xD01831 | Botschaftsfehler (Navigationsgraph Fahrspur, ID: NAV_GRAPH_LNE) Sender: ZGW_Navi - Timeout | 1 |
| 0xD01835 | Signalfehler (Navigationsgraph Fahrspur, ID: NAV_GRAPH_LNE) Sender: ZGW_Navi - Ungültig | 1 |
| 0xD01836 | Signalfehler (Navigationsgraph Fahrspur, ID: NAV_GRAPH_LNE) Sender: ZGW_Navi - Undefiniert | 1 |
| 0xD0183B | Botschaftsfehler (Navigationsgraph Geschwindigkeit, ID: NAV_GRAPH_V) Sender: ZGW_Navi - Timeout | 1 |
| 0xD0183F | Signalfehler (Navigationsgraph Geschwindigkeit, ID: NAV_GRAPH_V) Sender: ZGW_Navi - Ungültig | 1 |
| 0xD01840 | Signalfehler (Navigationsgraph Geschwindigkeit, ID: NAV_GRAPH_V) Sender: ZGW_Navi - Undefiniert | 1 |
| 0xD01851 | Botschaftsfehler (PIA Daten Anfrage, ID: PIA_DT_INQY) Sender: ZGW_PIA - Timeout | 1 |
| 0xD01855 | Signalfehler (PIA Daten Anfrage, ID: PIA_DT_INQY) Sender: ZGW_PIA - Ungültig | 1 |
| 0xD01856 | Signalfehler (PIA Daten Anfrage, ID: PIA_DT_INQY) Sender: ZGW_PIA - Undefiniert | 1 |
| 0xD0185A | Botschaftsfehler (PIA Daten Setzen, ID: PIA_DT_SET) Sender: ZGW_PIA - Timeout | 1 |
| 0xD0185E | Signalfehler (PIA Daten Setzen, ID: PIA_DT_SET) Sender: ZGW_PIA - Ungültig | 1 |
| 0xD0185F | Signalfehler (PIA Daten Setzen, ID: PIA_DT_SET) Sender: ZGW_PIA - Undefiniert | 1 |
| 0xD01864 | Botschaftsfehler (PIA Konfiguration, ID: PIA_SU) Sender: ZGW_PIA - Timeout | 1 |
| 0xD01868 | Signalfehler (PIA Konfiguration, ID: PIA_SU) Sender: ZGW_PIA - Ungültig | 1 |
| 0xD01869 | Signalfehler (PIA Konfiguration, ID: PIA_SU) Sender: ZGW_PIA - Undefiniert | 1 |
| 0xD0186C | Botschaftsfehler (PIA Transaktion, ID: PIA_TRANA) Sender: ZGW_PIA - Timeout | 1 |
| 0xD01870 | Signalfehler (PIA Transaktion, ID: PIA_TRANA) Sender: ZGW_PIA - Ungültig | 1 |
| 0xD01871 | Signalfehler (PIA Transaktion, ID: PIA_TRANA) Sender: ZGW_PIA - Undefiniert | 1 |
| 0xD01872 | Signalfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) Sender: KAFAS - Ungültig | 1 |
| 0xD01881 | Botschaftsfehler (Schlafbereitschaft Global FZM, ID: SLRDI_GLB_FZM) Sender: ZGW - Timeout  [gueltig bis F010-10-01-I330] | 1 |
| 0xD01885 | Signalfehler (Schlafbereitschaft Global FZM, ID: SLRDI_GLB_FZM) Sender: ZGW - Ungültig  [gueltig bis F010-10-01-I330] | 1 |
| 0xD01886 | Signalfehler (Schlafbereitschaft Global FZM, ID: SLRDI_GLB_FZM) Sender: ZGW - Undefiniert  [gueltig bis F010-10-01-I330] | 1 |
| 0xD0189B | Botschaftsfehler (Soll Vibration Lenkrad Warnung Fahrspurverlassen, ID: TAR_VIB_STW_WARN_LNDP) Sender: KAFAS/TLC - Timeout | 1 |
| 0xD0189C | Botschaftsfehler (Soll Vibration Lenkrad Warnung Fahrspurverlassen, ID: TAR_VIB_STW_WARN_LNDP) Sender: KAFAS/TLC - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD0189D | Botschaftsfehler (Soll Vibration Lenkrad Warnung Fahrspurverlassen, ID: TAR_VIB_STW_WARN_LNDP) Sender: KAFAS/TLC - Alive | 1 |
| 0xD0189F | Signalfehler (Soll Vibration Lenkrad Warnung Fahrspurverlassen, ID: TAR_VIB_STW_WARN_LNDP) Sender: KAFAS/TLC - Ungültig | 1 |
| 0xD018B5 | Botschaftsfehler (Status Anzeige Kombi, ID: ST_DISP_KI) Sender: Kombi - Timeout | 1 |
| 0xD018B6 | Botschaftsfehler (Status Anzeige Kombi, ID: ST_DISP_KI) Sender: Kombi - Checksumme  [gueltig bis F010-10-01-I330] | 1 |
| 0xD018B7 | Botschaftsfehler (Status Anzeige Kombi, ID: ST_DISP_KI) Sender: Kombi - Alive  [gueltig bis F001-08-09-I510] | 1 |
| 0xD018B9 | Signalfehler (Status Anzeige Kombi, ID: ST_DISP_KI) Sender: Kombi - Ungültig | 1 |
| 0xD018BA | Signalfehler (Status Anzeige Kombi, ID: ST_DISP_KI) Sender: Kombi - Undefiniert | 1 |
| 0xD018BB | Botschaftsfehler (Status Anzeige Warnung Fahrspurwechsel, ID: ST_DISP_WARN_LNCH) Sender: FRMFA - Timeout | 1 |
| 0xD018BF | Signalfehler (Status Anzeige Warnung Fahrspurwechsel, ID: ST_DISP_WARN_LNCH) Sender: FRMFA - Ungültig | 1 |
| 0xD018C0 | Signalfehler (Status Anzeige Warnung Fahrspurwechsel, ID: ST_DISP_WARN_LNCH) Sender: FRMFA - Undefiniert | 1 |
| 0xD018C7 | Botschaftsfehler (Status Bedienelement Warnung Fahrspurverlassen, ID: ST_OPEL_WARN_LNDP) Sender: FRMFA - Timeout | 1 |
| 0xD018CB | Signalfehler (Status Bedienelement Warnung Fahrspurverlassen, ID: ST_OPEL_WARN_LNDP) Sender: FRMFA - Ungültig | 1 |
| 0xD018CC | Signalfehler (Status Bedienelement Warnung Fahrspurverlassen, ID: ST_OPEL_WARN_LNDP) Sender: FRMFA - Undefiniert | 1 |
| 0xD018CF | Botschaftsfehler (Status Bedienelement Warnung Fahrspurwechsel, ID: ST_OPEL_WARN_LNCH) Sender: FRMFA - Timeout | 1 |
| 0xD018D3 | Signalfehler (Status Bedienelement Warnung Fahrspurwechsel, ID: ST_OPEL_WARN_LNCH) Sender: FRMFA - Ungültig | 1 |
| 0xD018D4 | Signalfehler (Status Bedienelement Warnung Fahrspurwechsel, ID: ST_OPEL_WARN_LNCH) Sender: FRMFA - Undefiniert | 1 |
| 0xD018D7 | Botschaftsfehler (Status Fahrlicht, ID: STAT_FAHRLICHT) Sender: JBBF - Timeout | 1 |
| 0xD018D9 | Signalfehler (Status Fahrlicht, ID: STAT_FAHRLICHT) Sender: JBBF - Ungültig | 1 |
| 0xD018DA | Signalfehler (Status Fahrlicht, ID: STAT_FAHRLICHT) Sender: JBBF - Undefiniert | 1 |
| 0xD018E1 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME/DDE - Timeout | 1 |
| 0xD018E6 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) Sender: PMA - Timeout | 1 |
| 0xD018E8 | Botschaftsfehler (Status Reifen RDC, ID: ST_TYR_RDC) Sender: RDC - Timeout | 1 |
| 0xD018E9 | Botschaftsfehler (Status Reifen RDC, ID: ST_TYR_RDC) Sender: RDC - Checksumme | 1 |
| 0xD018EA | Botschaftsfehler (Status Reifen RDC, ID: ST_TYR_RDC) Sender: RDC - Alive | 1 |
| 0xD018EC | Signalfehler (Status Reifen RDC, ID: ST_TYR_RDC) Sender: RDC - Ungültig | 1 |
| 0xD018F8 | Signalfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) Sender: LMV - Ungültig | 1 |
| 0xD018F9 | Signalfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) Sender: LMV - Undefiniert | 1 |
| 0xD01901 | Botschaftsfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) Sender: SZL_LWS - Timeout | 1 |
| 0xD01903 | Signalfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) Sender: SZL_LWS - Ungültig | 1 |
| 0xD01904 | Signalfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) Sender: SZL_LWS - Undefiniert | 1 |
| 0xD0190D | Botschaftsfehler (Steuerung Elektrochrom Abblenden, ID: CTR_EC_ABBLENDEN) Sender: JBBF - Timeout  [gueltig bis F001-09-09-I450] | 1 |
| 0xD01912 | Botschaftsfehler (Synchronisation Navigationsgraph, ID: NAV_GRAPH_SYNC) Sender: ZGW_Navi - Alive  [gueltig bis F001-09-08-I450] | 1 |
| 0xD01914 | Signalfehler (Synchronisation Navigationsgraph, ID: NAV_GRAPH_SYNC) Sender: ZGW_Navi - Ungültig | 1 |
| 0xD01915 | Signalfehler (Synchronisation Navigationsgraph, ID: NAV_GRAPH_SYNC) Sender: ZGW_Navi - Undefiniert | 1 |
| 0xD01921 | Signalfehler (BRAS_LRR) Sender: LRR - Ungültig | 1 |
| 0xD01922 | Botschaftsfehler (Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) Sender: ZGW_Navi - Timeout | 1 |
| 0xD01926 | Signalfehler (Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) Sender: ZGW_Navi - Ungültig | 1 |
| 0xD01927 | Signalfehler (Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) Sender: ZGW_Navi - Undefiniert | 1 |
| 0xD01932 | Botschaftsfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) Sender: Kombi - Timeout | 1 |
| 0xD01936 | Signalfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) Sender: Kombi - Ungültig | 1 |
| 0xD01937 | Signalfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) Sender: Kombi - Undefiniert | 1 |
| 0xD0193C | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) Sender: ICM_V - Timeout | 1 |
| 0xD0193D | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) Sender: ICM_V - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD0193E | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) Sender: ICM_V - Alive | 1 |
| 0xD01940 | Signalfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) Sender: ICM_V - Ungültig | 1 |
| 0xD01941 | Signalfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) Sender: ICM_V - Undefiniert | 1 |
| 0xD0194E | Botschaftsfehler (Wankmoment Fahrzeug, ID: MX_VEH) Sender: ICM_V - Timeout | 1 |
| 0xD01952 | Signalfehler (Wankmoment Fahrzeug, ID: MX_VEH) Sender: ICM_V - Ungültig | 1 |
| 0xD01953 | Signalfehler (Wankmoment Fahrzeug, ID: MX_VEH) Sender: ICM_V - Undefiniert | 1 |
| 0xD0195B | Botschaftsfehler (Warnung Fahrspurwechsel, ID: WARN_LNCH) Sender: HC2 - Timeout | 1 |
| 0xD0195C | Botschaftsfehler (Warnung Fahrspurwechsel, ID: WARN_LNCH) Sender: HC2 - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD0195D | Botschaftsfehler (Warnung Fahrspurwechsel, ID: WARN_LNCH) Sender: HC2 - Alive | 1 |
| 0xD0195F | Signalfehler (Warnung Fahrspurwechsel, ID: WARN_LNCH) Sender: HC2 - Ungültig | 1 |
| 0xD01960 | Signalfehler (Warnung Fahrspurwechsel, ID: WARN_LNCH) Sender: HC2 - Undefiniert | 1 |
| 0xD01964 | Botschaftsfehler (Dombeschleunigung Fahrzeug, ID: DOMACLN_VEH) Sender: ICM_V - Timeout | 1 |
| 0xD01965 | Botschaftsfehler (Dombeschleunigung Fahrzeug, ID: DOMACLN_VEH) Sender: ICM_V - Checksumme  [gueltig bis F010-10-01-I330] | 1 |
| 0xD01966 | Botschaftsfehler (Dombeschleunigung Fahrzeug, ID: DOMACLN_VEH) Sender: ICM_V - Alive  [gueltig bis F010-10-01-I330] | 1 |
| 0xD01968 | Signalfehler (Dombeschleunigung Fahrzeug, ID: DOMACLN_VEH) Sender: ICM_V - Ungültig | 1 |
| 0xD01969 | Signalfehler (Dombeschleunigung Fahrzeug, ID: DOMACLN_VEH) Sender: ICM_V - Undefiniert | 1 |
| 0xD0196A | Signalfehler (Dombeschleunigung Fahrzeug, ID: DOMACLN_VEH) Sender: ICM_V - Qualifier | 1 |
| 0xD0196C | Botschaftsfehler (BRAS_FRR) Sender: FRR - Timeout | 1 |
| 0xD0196D | Signalfehler (Lenkwinkel Fahrer Diagnose, ID: STEA_DV_DIAG) Sender: SZL_LWS - Ungültig | 1 |
| 0xD01994 | Signalfehler (Status Lenkung Vorderachse, ID: ST_STE_FTAX) Sender: ASA - Ungültig | 1 |
| 0xD01995 | Signalfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) Sender: DSC_Modul - Ungültig | 1 |
| 0xD01996 | Signalfehler (Status Parkassistent, ID: ST_PMA) Sender: PMA - Ungültig | 1 |
| 0xD019A0 | Signalfehler (Steuerung Elektrochrom Abblenden, ID: CTR_EC_ABBLENDEN) Sender: JBBF - Ungültig  [gueltig bis F001-09-09-I450] | 1 |
| 0xD019A9 | Signalfehler (BRAS) Sender: FRR - Ungültig | 1 |
| 0xD019AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME/DDE - Ungültig | 1 |
| 0xD019B7 | Botschaftsfehler (Dimmung, ID: DIMMUNG) Sender: FRMFA - Timeout | 1 |
| 0xD019B9 | Signalfehler (Dimmung, ID: DIMMUNG) Sender: FRMFA - Ungültig | 1 |
| 0xD019BF | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) Sender: EPS - Timeout | 1 |
| 0xD019C0 | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) Sender: EPS - Checksumme | 1 |
| 0xD019C1 | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) Sender: EPS - Alive | 1 |
| 0xD019C3 | Signalfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) Sender: EPS - Ungültig | 1 |
| 0xD019EB | Botschaftsfehler (OBJEKTDATEN_LRR) Sender: LRR - Timeout | 1 |
| 0xD019ED | Signalfehler (OBJEKTDATEN_LRR) Sender: LRR - Ungültig | 1 |
| 0xD019EE | Botschaftsfehler (OBJDT_HDWOBS) Sender: FRR - Timeout | 1 |
| 0xD019F0 | Signalfehler (OBJDT_HDWOBS) Sender: FRR - Ungültig | 1 |
| 0xD019F1 | Botschaftsfehler (OBJEKTDATEN_SRR_L) Sender: SRR - Timeout | 1 |
| 0xD019F3 | Signalfehler (OBJEKTDATEN_SRR_L) Sender: SRR - Ungültig | 1 |
| 0xD019F6 | Botschaftsfehler (OBJEKTDATEN_SRR_R) Sender: SRR - Timeout | 1 |
| 0xD019F8 | Signalfehler (OBJEKTDATEN_SRR_R) Sender: SRR - Ungültig | 1 |
| 0xD01A08 | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) Sender: DME/DDE - Timeout | 1 |
| 0xD01A09 | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) Sender: DME/DDE - Checksumme | 1 |
| 0xD01A0A | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) Sender: DME/DDE - Alive | 1 |
| 0xD01A0C | Signalfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) Sender: DME/DDE - Ungültig | 1 |
| 0xD01A0D | Signalfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) Sender: DME/DDE - Undefiniert | 1 |
| 0xD01A11 | Botschaftsfehler (STAT_LRR) Sender: LRR - Timeout | 1 |
| 0xD01A15 | Signalfehler (STAT_LRR)Sender: LRR - Ungültig | 1 |
| 0xD01A16 | Botschaftsfehler (ST_HDWOBS) Sender: FRR - Timeout | 1 |
| 0xD01A17 | Signalfehler (ST_HDWOBS) Sender: FRR - Undefiniert | 1 |
| 0xD01A1A | Signalfehler (ST_HDWOBS) Sender: FRR - Ungültig | 1 |
| 0xD01A1B | Botschaftsfehler (Status Giermomentverteilung, ID: ST_YMR) Sender: DSC_Modul - Timeout | 1 |
| 0xD01A1C | Botschaftsfehler (Status Giermomentverteilung, ID: ST_YMR) Sender: DSC_Modul - Checksumme | 1 |
| 0xD01A1D | Botschaftsfehler (Status Giermomentverteilung, ID: ST_YMR) Sender: DSC_Modul - Alive | 1 |
| 0xD01A1F | Signalfehler (Status Giermomentverteilung, ID: ST_YMR) Sender: DSC_Modul - Ungültig | 1 |
| 0xD01A21 | Botschaftsfehler (STAT_SRR_L) Sender: SRR - Timeout | 1 |
| 0xD01A23 | Signalfehler (STAT_SRR_L) Sender: SRR - Ungültig | 1 |
| 0xD01A24 | Botschaftsfehler (STAT_SRR_R) Sender: SRR - Timeout | 1 |
| 0xD01A26 | Signalfehler (STAT_SRR_R) Sender: SRR - Ungültig | 1 |
| 0xD01A32 | Botschaftsfehler (FOBJ_OBJDT) Sender: LRR - Timeout | 1 |
| 0xD01A34 | Signalfehler (Vorausobjekt_Objektdaten) Sender: - Ungültig | 1 |
| 0xD01A77 | Botschaftsfehler (Status Schneekette, ID: ST_SNC) Sender: HSR - Alive | 1 |
| 0xD01A7D | Botschaftsfehler (Status Schneekette, ID: ST_SNC) Sender: HSR - Timeout | 1 |
| 0xD01A7E | Botschaftsfehler (Status Schneekette, ID: ST_SNC) Sender: HSR - Checksumme | 1 |
| 0xD01A7F | Signalfehler (Status Schneekette, ID: ST_SNC) Sender: HSR - Ungültig | 1 |
| 0xD01A94 | Signalfehler (Wankmoment Fahrzeug, ID: MX_VEH) Sender: ICM_V - Qualifier | 1 |
| 0xD01B00 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Timeout | 1 |
| 0xD01B01 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Checksumme | 1 |
| 0xD01B02 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Alive | 1 |
| 0xD01B04 | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Ungültig | 1 |
| 0xD01B05 | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Undefiniert | 1 |
| 0xD01B06 | Botschaftsfehler (Anteil Wankmoment Stabilisierung, ID: QTA_MX_STAB) Sender: ICM_V - Timeout | 1 |
| 0xD01B08 | Signalfehler (Anteil Wankmoment Stabilisierung, ID: QTA_MX_STAB) Sender: ICM_V - Ungültig | 1 |
| 0xD01B09 | Signalfehler (Anteil Wankmoment Stabilisierung, ID: QTA_MX_STAB) Sender: ICM_V - Undefiniert | 1 |
| 0xD01B0A | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 04, ID: DISP_CC_DRDY_04) Sender: PMA - Timeout | 1 |
| 0xD01B0B | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 04, ID: DISP_CC_DRDY_04) Sender: PMA - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD01B0C | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 04, ID: DISP_CC_DRDY_04) Sender: PMA - Alive | 1 |
| 0xD01B0E | Signalfehler (Anzeige Checkcontrol Fahrdynamik 04, ID: DISP_CC_DRDY_04) Sender: PMA - Ungültig | 1 |
| 0xD01B0F | Botschaftsfehler (Bedienung Individualisierung Schalter Fahrdynamik, ID: OP_IDVL_SW_DRDY) Sender: ZGW_Schalter - Timeout | 1 |
| 0xD01B11 | Signalfehler (Bedienung Individualisierung Schalter Fahrdynamik, ID: OP_IDVL_SW_DRDY) Sender: ZGW_Schalter - Ungültig | 1 |
| 0xD01B12 | Botschaftsfehler (Bedienung Schalter Schneekette, ID: OP_SW_SNC) Sender: ZGW_Schalter - Timeout | 1 |
| 0xD01B14 | Signalfehler (Bedienung Schalter Schneekette, ID: OP_SW_SNC) Sender: ZGW_Schalter - Ungültig | 1 |
| 0xD01B3A | Botschaftsfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) Sender: DSC_Modul - Timeout | 1 |
| 0xD01B3B | Botschaftsfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) Sender: DSC_Modul - Checksumme | 1 |
| 0xD01B3C | Botschaftsfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) Sender: DSC_Modul - Alive | 1 |
| 0xD01B3E | Signalfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) Sender: DSC_Modul - Ungültig | 1 |
| 0xD01B3F | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME/DDE - Timeout | 1 |
| 0xD01B40 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME/DDE - Checksumme | 1 |
| 0xD01B41 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME/DDE - Alive | 1 |
| 0xD01B4C | Botschaftsfehler (Soll Bremsmoment Summe Koordiniert, ID: BRTORQ_SUM_COOTD) Sender: DSC_Modul - Timeout | 1 |
| 0xD01B4D | Botschaftsfehler (Soll Bremsmoment Summe Koordiniert, ID: BRTORQ_SUM_COOTD) Sender: DSC_Modul - Checksumme | 1 |
| 0xD01B4E | Botschaftsfehler (Soll Bremsmoment Summe Koordiniert, ID: BRTORQ_SUM_COOTD) Sender: DSC_Modul - Alive | 1 |
| 0xD01B50 | Signalfehler (Soll Bremsmoment Summe Koordiniert, ID: BRTORQ_SUM_COOTD) Sender: DSC_Modul - Ungültig | 1 |
| 0xD01B51 | Signalfehler (Soll Bremsmoment Summe Koordiniert, ID: BRTORQ_SUM_COOTD) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD01B52 | Botschaftsfehler (Status Fahrzeugstillstand, ID: ST_VHSS) Sender: DSC_Modul - Timeout  [gueltig bis F001-09-08-I400] | 1 |
| 0xD01B53 | Botschaftsfehler (Status Fahrzeugstillstand, ID: ST_VHSS) Sender: DSC_Modul - Checksumme  [gueltig bis F001-09-08-I400] | 1 |
| 0xD01B54 | Botschaftsfehler (Status Fahrzeugstillstand, ID: ST_VHSS) Sender: DSC_Modul - Alive  [gueltig bis F001-09-08-I400] | 1 |
| 0xD01B56 | Signalfehler (Status Fahrzeugstillstand, ID: ST_VHSS) Sender: DSC_Modul - Ungültig  [gueltig bis F001-09-08-I400] | 1 |
| 0xD01B63 | Botschaftsfehler (Status Reifen RPA, ID: ST_TYR_RPA) Sender: DSC_Modul - Timeout | 1 |
| 0xD01B64 | Botschaftsfehler (Status Reifen RPA, ID: ST_TYR_RPA) Sender: DSC_Modul - Checksumme | 1 |
| 0xD01B65 | Botschaftsfehler (Status Reifen RPA, ID: ST_TYR_RPA) Sender: DSC_Modul - Alive | 1 |
| 0xD01B67 | Signalfehler (Status Reifen RPA, ID: ST_TYR_RPA) Sender: DSC_Modul - Ungültig | 1 |
| 0xD01B7C | Botschaftsfehler (Status Niveauregulierung Fahrzeug, ID: ST_LCS_VEH) Sender: EHC - Timeout | 1 |
| 0xD01B7D | Botschaftsfehler (Status Niveauregulierung Fahrzeug, ID: ST_LCS_VEH) Sender: EHC - Checksumme  [gueltig bis F001-08-09-I500] | 1 |
| 0xD01B7E | Botschaftsfehler (Status Niveauregulierung Fahrzeug, ID: ST_LCS_VEH) Sender: EHC - Alive  [gueltig bis F001-08-09-I510] | 1 |
| 0xD01B80 | Signalfehler (Status Niveauregulierung Fahrzeug, ID: ST_LCS_VEH) Sender: EHC - Ungültig | 1 |
| 0xD01B81 | Signalfehler (Status Niveauregulierung Fahrzeug, ID: ST_LCS_VEH) Sender: EHC - Undefiniert | 1 |
| 0xD01C00 | Botschaftsfehler (Daten Fahrspurerkennung 2, ID: DT_LNDT_2) Sender: KAFAS - Timeout | 1 |
| 0xD01C01 | Botschaftsfehler (Daten Fahrspurerkennung 2, ID: DT_LNDT_2) Sender: KAFAS - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD01C02 | Botschaftsfehler (Daten Fahrspurerkennung 2, ID: DT_LNDT_2) Sender: KAFAS - Alive | 1 |
| 0xD01C03 | Botschaftsfehler (Daten Fahrspurerkennung 3, ID: DT_LNDT_3) Sender: KAFAS - Timeout | 1 |
| 0xD01C04 | Botschaftsfehler (Daten Fahrspurerkennung 3, ID: DT_LNDT_3) Sender: KAFAS - Checksumme  [gueltig bis F001-09-08-I450] | 1 |
| 0xD01C05 | Botschaftsfehler (Daten Fahrspurerkennung 3, ID: DT_LNDT_3) Sender: KAFAS - Alive | 1 |
| 0xD01C06 | Botschaftsfehler (DGRG_HDWOBS) Sender: FRR - Timeout | 1 |
| 0xD01C0F | Botschaftsfehler (PCSH_RCOG) Sender: FRR - Timeout | 1 |
| 0xD01C18 | Botschaftsfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) Sender: PMA - Timeout | 1 |
| 0xD01C1A | Botschaftsfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) Sender: PMA - Alive | 1 |
| 0xD01C1F | Botschaftsfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) Sender: DME/DDE - Timeout | 1 |
| 0xD01C37 | Signalfehler (PCSH_RCOG) Sender: FRR - Ungültig | 1 |
| 0xD01C5C | Signalfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) Sender: DME/DDE - Ungültig | 1 |
| 0xD01C5D | Signalfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) Sender: DME/DDE - Undefiniert | 1 |
| 0xD02C00 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 00, ID: DISP_CC_DRDY_00) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD02C01 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 01, ID: DISP_CC_DRDY_01) Sender: ICM_V - Undefiniert | 1 |
| 0xD02C02 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 02, ID: DISP_CC_DRDY_02) Sender: EPS - Undefiniert | 1 |
| 0xD02C03 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 03, ID: DISP_CC_DRDY_03) Sender: ICM_V - Undefiniert | 1 |
| 0xD02C04 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 04, ID: DISP_CC_DRDY_04) Sender: PMA - Undefiniert | 1 |
| 0xD02C05 | Signalfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi - Undefiniert | 1 |
| 0xD02C06 | Signalfehler (Bedienung Individualisierung Schalter Fahrdynamik, ID: OP_IDVL_SW_DRDY) Sender: ZGW_Schalter - Undefiniert | 1 |
| 0xD02C07 | Signalfehler (Bedienung Schalter Schneekette, ID: OP_SW_SNC) Sender: ZGW_Schalter - Undefiniert | 1 |
| 0xD02C08 | Signalfehler (Bedienung Tempomat, ID: OP_CCTR) Sender: SZL_LWS - Undefiniert | 1 |
| 0xD02C09 | Signalfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) Sender: SZL_LWS - Undefiniert  [gueltig bis F001-08-09-I510] | 1 |
| 0xD02C0A | Signalfehler (Blinken, ID: BLINKEN) Sender: FRMFA - Undefiniert | 1 |
| 0xD02C0B | Signalfehler (BRAS_LRR) Sender: LRR - Undefiniert  [gueltig bis F001-08-09-I510] | 1 |
| 0xD02C0C | Signalfehler (BRAS_FRR) Sender: FRR - Undefiniert | 1 |
| 0xD02C0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME/DDE - Undefiniert | 1 |
| 0xD02C0E | Signalfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) Sender: KAFAS - Undefiniert | 1 |
| 0xD02C0F | Signalfehler (Daten Fahrspurerkennung 2, ID: DT_LNDT_2) Sender: KAFAS - Ungültig | 1 |
| 0xD02C10 | Signalfehler (Daten Fahrspurerkennung 2, ID: DT_LNDT_2) Sender: KAFAS - Undefiniert | 1 |
| 0xD02C11 | Signalfehler (Daten Fahrspurerkennung 3, ID: DT_LNDT_3) Sender: KAFAS - Ungültig | 1 |
| 0xD02C12 | Signalfehler (Daten Fahrspurerkennung 3, ID: DT_LNDT_3) Sender: KAFAS - Undefiniert | 1 |
| 0xD02C13 | Signalfehler (DGRG_HDWOBS) Sender: FRR - Ungültig | 1 |
| 0xD02C14 | Signalfehler (DGRG_HDWOBS) Sender: FRR - Undefiniert | 1 |
| 0xD02C18 | Signalfehler (Dimmung, ID: DIMMUNG) Sender: FRMFA - Undefiniert | 1 |
| 0xD02C19 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME/DDE - Undefiniert | 1 |
| 0xD02C1A | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS - Undefiniert | 1 |
| 0xD02C27 | Signalfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) Sender: EPS - Undefiniert | 1 |
| 0xD02C2A | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi - Undefiniert  [gueltig bis F001-08-09-I510] | 1 |
| 0xD02C2C | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi - Undefiniert  [gueltig bis F001-09-09-I450] | 1 |
| 0xD02C2D | Signalfehler (Lenkwinkel Fahrer Diagnose, ID: STEA_DV_DIAG) Sender: SZL_LWS - Undefiniert | 1 |
| 0xD02C33 | Signalfehler (OBJEKTDATEN_LRR) Sender: LRR - Undefiniert  [gueltig bis F001-08-09-I510] | 1 |
| 0xD02C34 | Signalfehler (OBJDT_HDWOBS) Sender: FRR - Undefiniert | 1 |
| 0xD02C35 | Signalfehler (OBJEKTDATEN_SRR_L) Sender: SRR - Undefiniert  [gueltig bis F001-08-09-I510] | 1 |
| 0xD02C36 | Signalfehler (OBJEKTDATEN_SRR_R) Sender: SRR - Undefiniert | 1 |
| 0xD02C38 | Signalfehler (PCSH_RCOG) Sender: FRR - Undefiniert | 1 |
| 0xD02C39 | Signalfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD02C3A | Signalfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) Sender: DME/DDE - Undefiniert | 1 |
| 0xD02C3B | Signalfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) Sender: DME/DDE - Undefiniert | 1 |
| 0xD02C41 | Signalfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) Sender: PMA - Ungültig | 1 |
| 0xD02C42 | Signalfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) Sender: PMA - Undefiniert | 1 |
| 0xD02C43 | Signalfehler (Soll Vibration Lenkrad Warnung Fahrspurverlassen, ID: TAR_VIB_STW_WARN_LNDP) Sender: KAFAS/TLC - Undefiniert | 1 |
| 0xD02C47 | Signalfehler (Status Fahrzeugstillstand, ID: ST_VHSS) Sender: DSC_Modul - Undefiniert  [gueltig bis F001-09-08-I400] | 1 |
| 0xD02C48 | Signalfehler (STAT_LRR) Sender: LRR - Undefiniert  [gueltig bis F001-08-09-I510] | 1 |
| 0xD02C4B | Signalfehler (Status Giermomentverteilung, ID: ST_YMR) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD02C4E | Signalfehler (Status Lenkung Vorderachse, ID: ST_STE_FTAX) Sender: ASA - Undefiniert | 1 |
| 0xD02C50 | Signalfehler (STAT_SRR_L) Sender: SRR - Undefiniert  [gueltig bis F001-08-09-I510] | 1 |
| 0xD02C51 | Signalfehler (STAT_SRR_R) Sender: SRR - Undefiniert  [gueltig bis F001-08-09-I510] | 1 |
| 0xD02C52 | Signalfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD02C53 | Signalfehler (Status Parkassistent, ID: ST_PMA) Sender: PMA - Undefiniert | 1 |
| 0xD02C54 | Signalfehler (Status Reifen RDC, ID: ST_TYR_RDC) Sender: RDC - Undefiniert | 1 |
| 0xD02C55 | Signalfehler (Status Reifen RPA, ID: ST_TYR_RPA) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD02C56 | Signalfehler (Status Schneekette, ID: ST_SNC) Sender: HSR - Undefiniert | 1 |
| 0xD02C59 | Signalfehler (Steuerung Elektrochrom Abblenden, ID: CTR_EC_ABBLENDEN) Sender: JBBF - Undefiniert  [gueltig bis F001-09-09-I450] | 1 |
| 0xD02C5E | Signalfehler (Vorausobjekt_Objektdaten) Sender: LRR - Undefiniert | 1 |
| 0xD02C60 | Signalfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) Sender: Kombi - Qualifier | 1 |
| 0xD02C75 | Signalfehler (SEN_DT_HDWOBS) Sender: FRR - Ungültig | 1 |
| 0xD02C76 | Signalfehler (SEN_DT_HDWOBS) Sender: FRR - Undefiniert | 1 |
| 0xD02D01 | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME/DDE - Qualifier | 1 |
| 0xD02D02 | Signalfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) Sender: DSC_Modul - Qualifier | 1 |
| 0xD02D03 | Signalfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) Sender: DSC_Modul - Qualifier | 1 |
| 0xD02D04 | Signalfehler (Ist Anzahl Geberflanken Rad, ID: AVL_QUAN_EES_WHL) Sender: DSC_Modul - Qualifier | 1 |
| 0xD02D05 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) Sender: DSC_Modul - Qualifier | 1 |
| 0xD02D06 | Signalfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: SZL_LWS - Qualifier | 1 |
| 0xD02D07 | Signalfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) Sender: EPS - Qualifier | 1 |
| 0xD02D18 | Signalfehler (Daten Roll-Over Sensor, ID: DT_ROV_SEN) Sender: ACSM - Qualifier  [gueltig bis F001-09-08-I400] | 1 |
| 0xD02D44 | Signalfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) Sender: LMV - Qualifier | 1 |
| 0xD02D47 | Signalfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) Sender: HSR - Qualifier | 1 |
| 0xD02D48 | Signalfehler (Status Lenkung Vorderachse, ID: ST_STE_FTAX) Sender: ASA - Qualifier | 1 |
| 0xD02D54 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME/DDE - Qualifier | 1 |
| 0xD02D58 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME/DDE - Qualifier | 1 |
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

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | KILOMETER | km | - | signed long | - | - | - | - |
| 0x1701 | ABSOLUTE_TIME | sec | - | signed long | - | - | - | - |
| 0x4000 | CALL_ID | hex | - | unsigned int | - | - | - | - |
| 0x4001 | DUMP_16 | hex | - | unsigned int | - | - | - | - |
| 0x4002 | DUMP_32_1 | hex | high | signed long | - | - | - | - |
| 0x4003 | DUMP_32_2 | hex | high | signed long | - | - | - | - |
| 0x4100 | VOLTAGE_KL30 | mV | - | unsigned char | - | 100 | - | - |
| 0x4200 | SBS_R_V | km/h | - | unsigned char | - | 2 | - | -50 |
| 0x4201 | SBS_R_AX_REF | m/s^2 | - | signed char | - | - | 10 | - |
| 0x4202 | SBS_R_AY | m/s^2 | - | signed char | - | - | 2 | - |
| 0x4203 | SBS_R_PSIP | ° (Grad)/sec | - | signed char | - | 1.3 | - | - |
| 0x4204 | SBS_LW_VA_SUM_RAW | ° (Grad) | - | signed char | - | 0.71625 | - | - |
| 0x4205 | CNVLYR_R_LWF | ° (Grad) | - | unsigned int | - | 0.04395 | - | -1440.11 |
| 0x4300 | CPU_EXCEPTION_REG1 | hex | high | signed long | - | - | - | - |
| 0x4301 | CPU_EXCEPTION_REG2 | hex | high | signed long | - | - | - | - |
| 0x4302 | CPU_EXCEPTION_REG3 | hex | high | signed long | - | - | - | - |
| 0x4400 | Errmgr_SG_Status | hex | - | unsigned int | - | - | - | - |
| 0x4401 | Cnvlyr_i_TEMP_EX | ° (Grad) Cel. | - | signed char | - | - | - | - |
| 0x4402 | I_SBS_3AY_ay_stat | hex | - | unsigned int | - | - | - | - |
| 0x4403 | I_SBS_3AY_ay1_stat | hex | - | unsigned int | - | - | - | - |
| 0x4404 | I_SBS_3AY_ay2_stat | hex | - | unsigned int | - | - | - | - |
| 0x4405 | I_SBS_3YR_yr_stat | hex | - | unsigned int | - | - | - | - |
| 0x4406 | I_SBS_3YR_yr1_stat | hex | - | unsigned int | - | - | - | - |
| 0x4407 | I_SBS_3YR_yr2_stat | hex | - | unsigned int | - | - | - | - |
| 0x4408 | I_SBS_3AX_ax1_stat | hex | - | unsigned int | - | - | - | - |
| 0x4409 | I_SBS_3DE_de_D_stat | hex | - | unsigned int | - | - | - | - |
| 0x440A | I_SBS_3DE_de_stat | hex | - | unsigned int | - | - | - | - |
| 0x440B | Sbs_r_ax | m/s^2 | - | signed char | - | - | 10 | - |
| 0x440C | Sbs_r_lw_fahrer | rad | - | signed char | - | - | 15 | - |
| 0x440D | Sbs_r_lw_VA_eff | rad | - | signed char | - | - | 75 | - |
| 0x440E | I_SBS_2SN_side_slope_stat | hex | - | signed char | - | - | - | - |
| 0x440F | R_SBS_2VX_vMod_x | km/h | - | unsigned char | - | 2 | - | -50 |
| 0x4410 | I_SBS_3DE_de_A_stat | hex | - | unsigned int | - | - | - | - |
| 0x4411 | Sbs_i_fahrzustand | hex | - | unsigned int | - | - | - | - |
| 0x4412 | R_SBS_4AX_comp_ofs_ax1_tol | m/s^2 | - | unsigned char | - | - | 50 | - |
| 0x4413 | Cnvlyr_r_ay1 | m/s^2 | - | signed char | - | - | 2 | - |
| 0x4414 | Cnvlyr_r_psiP1 | rad/sec | - | signed char | - | - | 44 | - |
| 0x4415 | Cnvlyr_r_ax | m/s^2 | - | signed char | - | - | 10 | - |
| 0x4416 | R_SBS_0IN_de_D | rad | - | signed char | - | - | 8 | - |
| 0x4417 | I_SBS_2VX_vMod_stat | hex | - | unsigned int | - | - | - | - |
| 0x4418 | Cnvlyr_r_ay2 | m/s^2 | - | signed char | - | - | 2 | - |
| 0x4419 | Cnvlyr_r_psiP2 | rad/sec | - | signed char | - | - | 44 | - |
| 0x441A | Cnvlyr_r_lwFahrer | rad | - | signed char | - | - | 15 | - |
| 0x441B | R_SBS_0IN_de_A | rad | - | signed char | - | - | 8 | - |
| 0x441C | R_SBS_0IN_de_wheel_R | rad | - | signed char | - | - | 1200 | - |
| 0x4500 | ZfmWrA_r_lw_VA_akt | rad | - | signed char | - | - | 5 | - |
| 0x4501 | ZfmWrA_i_lw_VA_swq | hex | - | unsigned char | - | - | - | - |
| 0x4502 | Cnvlyr_r_lwVA_akt_ist | rad | - | signed char | - | - | 5 | - |
| 0x4503 | Cnvlyr_r_lwVA_akt_ist_famp | rad | - | unsigned char | - | - | 190 | - |
| 0x4504 | Cnvlyr_r_lwVA_akt_max_dyn | rad/sec | - | unsigned char | - | - | 22 | - |
| 0x4505 | Cnvlyr_i_ASA_sq | hex | - | unsigned char | - | - | - | - |
| 0x4506 | Cnvlyr_i_lwVA_akt_ist_nsq | hex | - | unsigned char | - | - | - | - |
| 0x4600 | ZfmWrA_r_lw_HA | rad | - | signed char | - | - | 80 | - |
| 0x4601 | ZfmWrA_i_lw_HA_swq | hex | - | unsigned char | - | - | - | - |
| 0x4602 | Cnvlyr_r_lwHA_ist | rad | - | signed char | - | - | 80 | - |
| 0x4603 | Cnvlyr_r_lwHA_akt_ist_famp | rad | - | unsigned char | - | - | 1300 | - |
| 0x4604 | Cnvlyr_r_lwHA_akt_max_dyn | rad/sec | - | unsigned char | - | - | 595 | - |
| 0x4605 | Cnvlyr_i_HSR_sq | hex | - | unsigned char | - | - | - | - |
| 0x4606 | Cnvlyr_i_lwHA_ist_nsq | hex | - | unsigned char | - | - | - | - |
| 0x4700 | Cnvlyr_i_SKE_fq | hex | - | unsigned char | - | - | - | - |
| 0x4701 | Cnvlyr_i_schalter_SK_HU | hex | - | unsigned char | - | - | - | - |
| 0x4702 | EEprom_b_status_SK | hex | - | unsigned char | - | - | - | - |
| 0x4800 | R_SBS_2EV_vch_Lernwert_b | hex | - | unsigned char | - | - | - | - |
| 0x4801 | R_SBS_2EV_vch_Lernwert_l | hex | - | unsigned char | - | - | - | - |
| 0x4802 | R_SBS_2EV_vch_Lernwert_r | hex | - | unsigned char | - | - | - | - |
| 0x4803 | R_SBS_2EV_vch_Intervall_b | hex | - | unsigned char | - | - | - | - |
| 0x4804 | R_SBS_2EV_vch_Intervall_l | hex | - | unsigned char | - | - | - | - |
| 0x4805 | R_SBS_2EV_vch_Intervall_r | hex | - | unsigned char | - | - | - | - |
| 0x4806 | I_SBS_2EV_vch_stat | hex | - | signed long | - | - | - | - |
| 0x4807 | R_SBS_4DE_comp_ofs_de | rad | - | signed char | - | - | 500 | - |
| 0x4808 | R_SBS_4DE_comp_ofs_de_tol | rad | - | unsigned char | - | - | 500 | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x1CFFE0 | SC-NVM einzelner EEPROM Schreibzugriff fehlgeschlagen | 0 |
| 0x1CFFE1 | SC-NVM einzelner EEPROM Lesezugriff fehlgeschlagen | 0 |
| 0x1CFFE2 | SC-NVM kein EEPROM Zugriff möglich | 0 |
| 0x1CFFE3 | SC-NVM EEPROM Löschvorgang fehlgeschlagen | 0 |
| 0x1CFFE4 | SC-NVM kompletter Schreibzugriff EEPROM fehlgeschlagen | 0 |
| 0x1CFFE5 | SC-NVM falsche EEPROM CONFIG ID | 0 |
| 0x1CFFE6 | SC-NVM kompletter Lesezugriff EEPROM fehlgeschlagen | 0 |
| 0x1CFFE7 | SC-PIA EEPROM Ein/Ausgabe Fehler | 0 |
| 0x1CFFE8 | SC-DM TIMEOUT überschritten | 0 |
| 0x1CFFE9 | SC-DM Warteschlange voll | 0 |
| 0x1CFFEA | SC-DM Warteschlange gelöscht/leer | 0 |
| 0x480008 | FlexRay Knoten Sychronisationsfehler  [gueltig bis F001-09-08-I450] | 1 |
| 0x48001D | Vorhalt ICMQL_ERR_SEC_9 | 1 |
| 0x48001E | Errmgr-Debugging: Illegale Errmgr-Nr. verwendet | 1 |
| 0x480028 | Vorwarnung Beschleunigungsüberwachung | 0 |
| 0x480029 | Vorwarnung Verzögerungsüberwachung | 0 |
| 0x480044 | Built in Selftest - Unterbrechung aufgetreten | 0 |
| 0x480077 | AL kann nicht in aktiven Modus wechseln | 0 |
| 0x480115 | Infoeintrag: Fahrdynamikschalter Zwangsaktivierung DSC  [gueltig bis F001-09-08-I400] | 1 |
| 0x480118 | EF-Verbraucherschnittstelle ungültig | 0 |
| 0x480119 | Ansteuerung E-Lüfter auf Ersatzwert | 0 |
| 0x480120 | HSR Kundenüberstimmung der SKE | 0 |
| 0x480130 | CC-Meldungsbedarf der internen Schnittstelle FAS | 0 |
| 0x480133 | Einachs-Rollenpruefstandserkennung: Rolle erkannt | 0 |
| 0x48013A | HSR kann nicht in aktiven Modus wechseln | 0 |
| 0x48013C | CC-Meldungsbedarf der internen Schnittstelle ZFM | 0 |
| 0x480155 | HSR Zwangsaktivierung im SK-Modus | 0 |
| 0x480156 | HSR Erinnerung SK-Modus akiv | 0 |
| 0x480157 | HSR SKE Errormodus | 0 |
| 0x480159 | TLE-Reset | 0 |
| 0x48015A | Eigendiagnose Überwachungsrechner | 0 |
| 0x48015B | Errmgr - Botschaft wird entgegen Spezifikation eingetragen | 0 |
| 0x48015C | Errmgr - Signal wird entgegen Spezifikation eingetragen | 0 |
| 0x48015D | Ackermanngierrate ungültig  [gueltig bis F010-10-01-I330] | 0 |
| 0x482600 | TLE Reset erkannt | 0 |
| 0x482606 | Fehler Lenkwinkel effektiv - Signaltoleranz aufgrund Abgleichstoleranz | 0 |
| 0x482607 | Fehler Laengsbeschleunigung ax - Signaltoleranz aufgrund nicht ausgeführtem Werksmodus | 0 |
| 0x482609 | Fehlertoleranz auf Signal ax | 0 |
| 0x48260A | Fehlertoleranz auf Signal ay | 0 |
| 0x48260B | Fehlertoleranz auf Signal psiP | 0 |
| 0x48260C | Fehlertoleranz auf Signal Ist-Lenkwinkel VA | 0 |
| 0x48260D | vch an oberer Lerngrenze | 0 |
| 0x48260E | vch an unterer Lerngrenze | 0 |
| 0x482612 | Funktionale Deaktivierung iBrake | 0 |
| 0x482613 | Errmgr Handling-Tabelle übergelaufen | 0 |
| 0x482625 | Eigendiagnose Überwachungsrechner - Status fehlerhaft | 0 |
| 0x482626 | ECC-Fehler EEPROM-Emulation | 0 |
| 0x482627 | Zentrale Fehlerspeichersperre aktiv | 1 |
| 0x482628 | Bist Taskrange | 0 |
| 0x482629 | Bist Flexray OS Offsets | 0 |
| 0x48262A | Falscher CC-Meldungsbedarf eines Partner-SGs oder einer internen Funktion | 0 |
| 0x48262D | VPL - Fehler Transferstatus | 0 |
| 0x482641 | PLL Aufstartproblem CPU1 | 0 |
| 0x482642 | PLL Aufstartproblem CPU2 | 0 |
| 0xD02C20 | LDM: Signal ungültig empfangen: SBS | 0 |
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
| 0x1700 | KILOMETER | km | - | signed long | - | - | - | - |
| 0x1701 | ABSOLUTE_TIME | sec | - | signed long | - | - | - | - |
| 0x4000 | CALL_ID | hex | - | unsigned int | - | - | - | - |
| 0x4001 | DUMP_16 | hex | - | unsigned int | - | - | - | - |
| 0x4002 | DUMP_32_1 | hex | high | signed long | - | - | - | - |
| 0x4003 | DUMP_32_2 | hex | high | signed long | - | - | - | - |
| 0x4100 | VOLTAGE_KL30 | mV | - | unsigned char | - | 100 | - | - |
| 0x4200 | SBS_R_V | km/h | - | unsigned char | - | 2 | - | -50 |
| 0x4201 | SBS_R_AX_REF | m/s^2 | - | signed char | - | - | 10 | - |
| 0x4202 | SBS_R_AY | m/s^2 | - | signed char | - | - | 2 | - |
| 0x4203 | SBS_R_PSIP | ° (Grad)/sec | - | signed char | - | 1.3 | - | - |
| 0x4204 | SBS_LW_VA_SUM_RAW | ° (Grad) | - | signed char | - | 0.71625 | - | - |
| 0x4205 | CNVLYR_R_LWF | ° (Grad) | - | unsigned int | - | 0.04395 | - | -1440.11 |
| 0x4300 | CPU_EXCEPTION_REG1 | hex | high | signed long | - | - | - | - |
| 0x4301 | CPU_EXCEPTION_REG2 | hex | high | signed long | - | - | - | - |
| 0x4302 | CPU_EXCEPTION_REG3 | hex | high | signed long | - | - | - | - |
| 0x4400 | Errmgr_SG_Status | hex | - | unsigned int | - | - | - | - |
| 0x4401 | Cnvlyr_i_TEMP_EX | ° (Grad) Cel. | - | signed char | - | - | - | - |
| 0x4402 | I_SBS_3AY_ay_stat | hex | - | unsigned int | - | - | - | - |
| 0x4403 | I_SBS_3AY_ay1_stat | hex | - | unsigned int | - | - | - | - |
| 0x4404 | I_SBS_3AY_ay2_stat | hex | - | unsigned int | - | - | - | - |
| 0x4405 | I_SBS_3YR_yr_stat | hex | - | unsigned int | - | - | - | - |
| 0x4406 | I_SBS_3YR_yr1_stat | hex | - | unsigned int | - | - | - | - |
| 0x4407 | I_SBS_3YR_yr2_stat | hex | - | unsigned int | - | - | - | - |
| 0x4408 | I_SBS_3AX_ax1_stat | hex | - | unsigned int | - | - | - | - |
| 0x4409 | I_SBS_3DE_de_D_stat | hex | - | unsigned int | - | - | - | - |
| 0x440A | I_SBS_3DE_de_stat | hex | - | unsigned int | - | - | - | - |
| 0x440B | Sbs_r_ax | m/s^2 | - | signed char | - | - | 10 | - |
| 0x440C | Sbs_r_lw_fahrer | rad | - | signed char | - | - | 15 | - |
| 0x440D | Sbs_r_lw_VA_eff | rad | - | signed char | - | - | 75 | - |
| 0x440E | I_SBS_2SN_side_slope_stat | hex | - | signed char | - | - | - | - |
| 0x440F | R_SBS_2VX_vMod_x | km/h | - | unsigned char | - | 2 | - | -50 |
| 0x4410 | I_SBS_3DE_de_A_stat | hex | - | unsigned int | - | - | - | - |
| 0x4411 | Sbs_i_fahrzustand | hex | - | unsigned int | - | - | - | - |
| 0x4412 | R_SBS_4AX_comp_ofs_ax1_tol | m/s^2 | - | unsigned char | - | - | 50 | - |
| 0x4413 | Cnvlyr_r_ay1 | m/s^2 | - | signed char | - | - | 2 | - |
| 0x4414 | Cnvlyr_r_psiP1 | rad/sec | - | signed char | - | - | 44 | - |
| 0x4415 | Cnvlyr_r_ax | m/s^2 | - | signed char | - | - | 10 | - |
| 0x4416 | R_SBS_0IN_de_D | rad | - | signed char | - | - | 8 | - |
| 0x4417 | I_SBS_2VX_vMod_stat | hex | - | unsigned int | - | - | - | - |
| 0x4418 | Cnvlyr_r_ay2 | m/s^2 | - | signed char | - | - | 2 | - |
| 0x4419 | Cnvlyr_r_psiP2 | rad/sec | - | signed char | - | - | 44 | - |
| 0x441A | Cnvlyr_r_lwFahrer | rad | - | signed char | - | - | 15 | - |
| 0x441B | R_SBS_0IN_de_A | rad | - | signed char | - | - | 8 | - |
| 0x441C | R_SBS_0IN_de_wheel_R | rad | - | signed char | - | - | 1200 | - |
| 0x4500 | ZfmWrA_r_lw_VA_akt | rad | - | signed char | - | - | 5 | - |
| 0x4501 | ZfmWrA_i_lw_VA_swq | hex | - | unsigned char | - | - | - | - |
| 0x4502 | Cnvlyr_r_lwVA_akt_ist | rad | - | signed char | - | - | 5 | - |
| 0x4503 | Cnvlyr_r_lwVA_akt_ist_famp | rad | - | unsigned char | - | - | 190 | - |
| 0x4504 | Cnvlyr_r_lwVA_akt_max_dyn | rad/sec | - | unsigned char | - | - | 22 | - |
| 0x4505 | Cnvlyr_i_ASA_sq | hex | - | unsigned char | - | - | - | - |
| 0x4506 | Cnvlyr_i_lwVA_akt_ist_nsq | hex | - | unsigned char | - | - | - | - |
| 0x4600 | ZfmWrA_r_lw_HA | rad | - | signed char | - | - | 80 | - |
| 0x4601 | ZfmWrA_i_lw_HA_swq | hex | - | unsigned char | - | - | - | - |
| 0x4602 | Cnvlyr_r_lwHA_ist | rad | - | signed char | - | - | 80 | - |
| 0x4603 | Cnvlyr_r_lwHA_akt_ist_famp | rad | - | unsigned char | - | - | 1300 | - |
| 0x4604 | Cnvlyr_r_lwHA_akt_max_dyn | rad/sec | - | unsigned char | - | - | 595 | - |
| 0x4605 | Cnvlyr_i_HSR_sq | hex | - | unsigned char | - | - | - | - |
| 0x4606 | Cnvlyr_i_lwHA_ist_nsq | hex | - | unsigned char | - | - | - | - |
| 0x4700 | Cnvlyr_i_SKE_fq | hex | - | unsigned char | - | - | - | - |
| 0x4701 | Cnvlyr_i_schalter_SK_HU | hex | - | unsigned char | - | - | - | - |
| 0x4702 | EEprom_b_status_SK | hex | - | unsigned char | - | - | - | - |
| 0x4800 | R_SBS_2EV_vch_Lernwert_b | hex | - | unsigned char | - | - | - | - |
| 0x4801 | R_SBS_2EV_vch_Lernwert_l | hex | - | unsigned char | - | - | - | - |
| 0x4802 | R_SBS_2EV_vch_Lernwert_r | hex | - | unsigned char | - | - | - | - |
| 0x4803 | R_SBS_2EV_vch_Intervall_b | hex | - | unsigned char | - | - | - | - |
| 0x4804 | R_SBS_2EV_vch_Intervall_l | hex | - | unsigned char | - | - | - | - |
| 0x4805 | R_SBS_2EV_vch_Intervall_r | hex | - | unsigned char | - | - | - | - |
| 0x4806 | I_SBS_2EV_vch_stat | hex | - | signed long | - | - | - | - |
| 0x4807 | R_SBS_4DE_comp_ofs_de | rad | - | signed char | - | - | 500 | - |
| 0x4808 | R_SBS_4DE_comp_ofs_de_tol | rad | - | unsigned char | - | - | 500 | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MOTORLAGEWINKEL_INITIALISIERUNG_EAS | 0xDBB8 | - | Auslesen Status EAS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBB8 |
| START_ADAPTIVDATEN_RUECKSETZEN | 0xA051 | - | Start und Status Ruecksetzen Adaptivdaten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA051 |
| START_ADAPTIVDATEN_WERKSMODUS | 0xA053 | - | Starten und Status Standardisierung Adaptivdaten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA053 |
| START_AL_MLW_OFFSET_SETZEN | 0xA059 | - | Start und Status Initialisierung AFS (im Energiesparmode gelernten MLW Offset an ASA senden) | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA059 |
| START_AL_MLW_RUECKSETZEN | 0xA055 | - | Start und Status Reset Motorlagewinkel | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA055 |
| STATUS_ACC_BEDIENUNG_AKTUELL | 0xDBFB | - | FASTA Datenauswertung für ACC/LDM | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBFB |
| STATUS_ACC_BEDIENUNG_PROTOKOLL | 0xDC20 | - | FASTA Datenauswertung für ACC/LDM | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC20 |
| STATUS_ACC_LERNDATEN | 0xDB60 | - | Auslesen der Lerndaten des ACC. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB60 |
| STATUS_ADAPTIVDATEN_LESEN | 0xDC01 | - | Auslesen Adaptivdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC01 |
| STATUS_ADAPTIVDATEN_PU_LESEN | 0xDC3C | - | Auslesen Adaptivdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC3C |
| STATUS_ADAPTIVDATEN_ZUSTAND | 0xDC13 | - | Auslesen Status Adaptivdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC13 |
| STATUS_AEP_AL_HSR_EPS | 0xDC25 | - | not defined in diagnosis database | bit | - | - | BITFIELD | RES_0xDC25 | - | - | - | - | 22 | - | - |
| STATUS_AFS_CHECKCONTROL_MELDUNGEN_AKTUATOR | 0xDC21 | - | Auslesen Check Control Meldung (Aktuatorüberwachung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC21 |
| STATUS_AKTIVIERUNG_SPURVERLASSSWARNUNG | 0xDBF8 | STAT_SPURVERLASSWARNUNG_NR | Abfrage ob HC Spurverlasswarnung aktiv ist. | 0-n | - | - | char | TAB_HC_AKTIV | - | - | - | - | 22 | - | - |
| STATUS_AKTIVIERUNG_SPURWECHSELWARNUNG | 0xDBF7 | STAT_SPURWECHSELWARNUNG_NR | Abfrage ob HC Spurwechselwarnung aktiv ist. | 0-n | - | - | char | TAB_HC_AKTIV | - | - | - | - | 22 | - | - |
| STATUS_AL_ICM_VERBUND | 0xDBD1 | - | Auslesen Status AFS ICM Verbund | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD1 |
| STATUS_AL_INIT | 0xDBE6 | - | Auslesen Status AFS Inbetriebnahme | bit | - | - | BITFIELD | RES_0xDBE6 | - | - | - | - | 22 | - | - |
| STATUS_AL_INITMODE | 0xDBFD | STAT_AL_INITMODE_NR | Auslesen Status Aktivlenkung (AFS) | 0-n | - | - | char | TAB_AL_INITMODE | - | - | - | - | 22 | - | - |
| STATUS_AL_MLWOFFSET_SETZEN | 0xDBD3 | STAT_MLW_GELERNT_WERT | Ermittelter Motorlagewinkeloffset bei der AFS Initialisierung. | Grad | - | - | motorola float | - | - | - | - | - | 22 | - | - |
| STATUS_AL_MLW_INIT | 0xDBD5 | - | Auslesen Status AFS  Motorlagewinkel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD5 |
| STATUS_AL_WINKELWERTE | 0xDBD4 | - | Auslesen  AFS Winkel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD4 |
| STATUS_ARS_ICM_VERBUND | 0xDC34 | - | Auslesen Status ARS ICM Verbund | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC34 |
| STATUS_ECO_VENTIL | 0xDBD7 | - | Auslesen ECO Ventil | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD7 |
| STATUS_ECO_VENTIL_ZUSTAND | 0xDBF1 | - | Ausgabe des aktuellen Zustand Eco Ventil | bit | - | - | BITFIELD | RES_0xDBF1 | - | - | - | - | 22 | - | - |
| STATUS_EPS_ICM_VERBUND | 0xDC36 | - | Auslesen Status EPS ICM Verbund | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC36 |
| STATUS_FAHRDYNAMIK | 0xDC12 | STAT_FAHRDYNAMIK_NR | Auslesen Programm Fahrdynamik | 0-n | - | - | char | TAB_FAHRDYNAMIK | - | - | - | - | 22 | - | - |
| STATUS_FAHRDYNAMIK_TASTEN | 0xDBDC | - | Auslesen Tasten Fahrdynamik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDC |
| STATUS_FLEXRAY_BUS | 0xDBD8 | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD8 |
| STATUS_FREIGABE_AKTIVE_DIAGNOSE_HSR | 0xDC24 | - | Freigabe Aktive Diagnose HSR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC24 |
| STATUS_FUNKTIONSNETZ_AL | 0xDC26 | - | Funktionsstatus Aktivlenkung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC26 |
| STATUS_FUNKTIONSNETZ_HSR | 0xDC27 | - | Funktionsstatus Aktivlenkung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC27 |
| STATUS_GBRPLUS | 0xDC3A | - | Auslesen Daten Grenzbereichsrückmeldung (GBR) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC3A |
| STATUS_GIERRATE | 0xDBD9 | - | Auslesen Gierrate | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD9 |
| STATUS_GIERRATE_1_ROHSIGNAL | 0xDBEC | - | Auslesen Rohsignal Gierrate 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBEC |
| STATUS_GIERRATE_2_ROHSIGNAL | 0xDBEF | - | Auslesen Rohsignal Gierrate 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBEF |
| STATUS_GMV_ICM_VERBUND | 0xDC35 | - | Auslesen Status GMV ICM Verbund | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC35 |
| STATUS_HARDWARE | 0xDC02 | - | Information über im SG verbaute Hardware | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC02 |
| STATUS_HOEHENSTAENDE_KALIBRIERUNG_LESEN | 0xDC0B | - | AusLesen Nullpunkt Hoehenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC0B |
| STATUS_HOEHENSTAENDE_LESEN | 0xDC05 | - | Auslesen Höhenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC05 |
| STATUS_HOEHENSTAENDE_OFFSET_ZUSTAND | 0xDC31 | - | Auslesen Zustand Nullpunkt Hoehenstandssensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC31 |
| STATUS_HOEHENSTAENDE_ROHWERTE_LESEN | 0xDC07 | - | Ausgabe Rohwert Höhenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC07 |
| STATUS_HOEHENSTAENDE_SENSOREN | 0xDC06 | - | Auswertung / Zustandserkennung der Höhenstandssensoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC06 |
| STATUS_HOEHENSTAENDE_STEIGUNG_ZUSTAND | 0xDC30 | - | Zustandsbeurteilung Steigungswerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC30 |
| STATUS_HOEHENSTAENDE_VERSORGUNG_LESEN | 0xDC08 | - | Auslesen Versorgungsspannung Höhenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC08 |
| STATUS_HSR_CHECKCONTROL_MELDUNGEN | 0xDC22 | - | Check Control Meldung von ICM an Kombi. Ausgelöst durch Aktuatorüberwachung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC22 |
| STATUS_HSR_ICM_VERBUND | 0xDBFE | - | Auslesen Status HSR ICM Verbund | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBFE |
| STATUS_LAENGSBESCHLEUNIGUNG | 0xDBDB | - | Auslesen Laengsbeschleunigung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDB |
| STATUS_LAENGSBESCHLEUNIGUNG_1_ROHSIGNAL | 0xDBF3 | - | Auslesen Rohsignal Längsbeschleunigung 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF3 |
| STATUS_MODUS_ROLLENPRUEFSTAND | 0xDB5B | STAT_ROLLENMODUS_NR | Auslesen Status Rollenmodus | 0-n | - | - | char | TAB_AKTIV | - | - | - | - | 22 | - | - |
| STATUS_MOMENTENKOORDINATOR_EPS | 0xDC3B | - | Auslesen Momentenkoordinator Lenkrad | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC3B |
| STATUS_OPERATINGSYSTEM_ICMQL | 0xDBF2 | - | Zustand der Statemaschine ICMQL | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF2 |
| STATUS_PMI | 0xDC37 | - | Status Powermanagementinterface | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC37 |
| STATUS_QMVH_ICM_VERBUND | 0xDC40 | - | Auslesen Status QMVH ICM Verbund | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC40 |
| STATUS_QUERBESCHLEUNIGUNG | 0xDBDA | - | Auslesen Querbeschleunigung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDA |
| STATUS_QUERBESCHLEUNIGUNG_1_ROHSIGNAL | 0xDBED | - | Auslesen Rohsignal Querbeschleunigung 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBED |
| STATUS_QUERBESCHLEUNIGUNG_2_ROHSIGNAL | 0xDBEE | - | Auslesen Rohsignal Querbeschleunigung 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBEE |
| STATUS_SCHNEEKETTENERKENNUNG | 0xDC23 | - | Zustandserkennung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC23 |
| STATUS_SERVO_VENTIL | 0xDBD6 | - | Auslesen Servoventil | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD6 |
| STATUS_SERVO_VENTIL_ZUSTAND | 0xDBF0 | - | Auslesen Zustand Servoventil | bit | - | - | BITFIELD | RES_0xDBF0 | - | - | - | - | 22 | - | - |
| STATUS_SZL_LESEN | 0xDC3D | - | Status SZL | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC3D |
| STATUS_ZULIEFERER_DATEN_NR | 0xDC0C | STAT_KALIBRIERUNG_NR | Test der EOL Kalibrierwerte Höhenstände | 0-n | - | - | unsigned char | TAB_KALIBRIERDATEN | - | - | - | - | 22 | - | - |
| STEUERN_ADAPTIVDATEN_SLW_RESET | 0xA05B | - | Start und Status Summenlenkwinkel Reset | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA05B |
| STEUERN_ADAPTIVWERTE_SETZEN | 0xDBFF | - | Vorgabe Adaptivdaten (nur Entwicklung) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDBFF | - |
| STEUERN_AL_INITMODE | 0xDBFC | - | Vorgabe Status Aktivlenkung (AFS) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDBFC | - |
| STEUERN_AL_LW_CODIERUNG_INIT | 0xA058 | - | Adapivwerte auf Basiswerte setzen. Wird z.B benötigt um das SG bei fehlcodierter Aktivlenkung wieder flashbar zu machen. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_AUSSENSPIEGEL_LED | 0xDBF9 | - | Ansteuern der Aussenspiegel LED durch HC | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDBF9 | - |
| STEUERN_AX_AY_ABGLEICH | 0xA052 | - | Starten und Status Abgleich Beschleunigungssensoren | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA052 |
| STEUERN_ECO_VENTIL | 0xA057 | - | Start ECO Ventil Ansteuerung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA057 | - |
| STEUERN_EEPROM_SCHREIBEN | 0xAB5B | - | Start und Status Abspeichern Lerndaten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB5B |
| STEUERN_FAHRWINKEL_RESET_SRR_LINKS | 0xAB53 | - | Justage Short Range Radar Sensor linke Seite (in Fahrtrichtung)Fahrwinkeldejustage zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_FAHRWINKEL_RESET_SRR_RECHTS | 0xAB52 | - | Justage Short Range Radar Sensor rechte Seite (in Fahrtrichtung) Fahrdejustagewinkel zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_FAHRWINKEL_SRR_LINKS_LESEN | 0xAB5D | - | Anzeige abgespeicherter Justagewinkel für Short Range Radar Sensor links (in Fahrtrichung) | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB5D |
| STEUERN_FAHRWINKEL_SRR_RECHTS_LESEN | 0xAB5C | - | Anzeige von abgespeicherten Justagewinkel für Short Range Radar Sensor rechts (in Fahrtrichung) | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB5C |
| STEUERN_HARDWARENUMMER_SRR_LINKS_LESEN | 0xAB60 | - | Hardwarenummer SRR Sensor links anzeigen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB60 |
| STEUERN_HARDWARENUMMER_SRR_RECHTS_LESEN | 0xAB61 | - | Hardwarenummer SRR Sensor rechts anzeigen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB61 |
| STEUERN_HC_EIGENDIAGNOSE | 0xAB55 | - | Ansteuern der HC Eigendiagnose Spurwechselwarnung/Spurverlasswarnung. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB55 | - |
| STEUERN_HOEHENSTAENDE_OFFSET | 0xDC09 | - | Vorgabe Nullpunkt Hoehenstandssensoren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC09 | - |
| STEUERN_HOEHENSTAENDE_OFFSET_HL | 0xDC2E | - | Vorgabe Nullpunkt Hoehenstandssensor hinten links | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC2E | - |
| STEUERN_HOEHENSTAENDE_OFFSET_HR | 0xDC2F | - | Vorgabe Nullpunkt Hoehenstandssensor hinten rechts | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC2F | - |
| STEUERN_HOEHENSTAENDE_OFFSET_VL | 0xDC2C | - | Vorgabe Nullpunkt Hoehenstandssensor vorne links | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC2C | - |
| STEUERN_HOEHENSTAENDE_OFFSET_VR | 0xDC2D | - | Vorgabe Nullpunkt Hoehenstandssensor vorne rechts | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC2D | - |
| STEUERN_IBRAKE_AKUTWARNUNG_DATEN_LESEN | 0xA05C | - | Auslesen der Akutwarnungen von IBrake .  Es stehen 10 Blöcke mit jeweils 10 Results zur Verfügung. Selektion der Blöcke über Steuerparameter. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA05C | RES_0xA05C |
| STEUERN_IBRAKE_VORWARNUNG_DATEN_LESEN | 0xA05D | - | Auslesen der Vorwarnungen von IBrake.  Es stehen 10 Blöcke mit jeweils 10 Results zur Verfügung. Selektion  der Blöcke über Steuerparameter. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA05D | RES_0xA05D |
| STEUERN_JUSTAGE_SRR_LINKS_LESEN | 0xAB59 | - | Auslesen der abgespeicherten Justagewerte. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB59 |
| STEUERN_JUSTAGE_SRR_RECHTS_LESEN | 0xAB5A | - | Auslesen der aktuell detektierten Werte zum Radarziel | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB5A |
| STEUERN_LDM_EIGENDIAGNOSE | 0xDB9B | - | Auslösen der LDM Eigendiagnose. Fehler im ACC werden erkannt und in den Fehlerspeicher geschrieben. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB9B | - |
| STEUERN_LENKRAD_VIBRATION | 0xDBFA | - | Ansteuern der Lenkradvibration durch HC | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDBFA | - |
| STEUERN_LENKRAD_VIBRATION_AMPLITUDE | 0xDC38 | - | Ansteuern der Lenkradvibration durch HC | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC38 | - |
| STEUERN_LERNDATEN_BREMSENBELASTUNG_RESET | 0xDB66 | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB66 | - |
| STEUERN_LERNDATEN_SRR_RESET | 0xAB62 | - | LERNDATEN SRR RESET | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_MODUS_ROLLENPRUEFSTAND | 0xDB98 | - | Vorgeben Rollenmodus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB98 | - |
| STEUERN_ROMDATEN_SICHERN | 0xDC04 | - | Steuergerät neu starten. SG geht über den Nachlauf. Weiterhin werden RAM Werte gesichert. Achtung : Verursacht FS Einträge im Systemverbung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC04 | - |
| STEUERN_SERIENNUMMER_SRR_LINKS_LESEN | 0xAB5E | - | Seriennummer SRR Sensor links anzeigen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB5E |
| STEUERN_SERIENNUMMER_SRR_RECHTS_LESEN | 0xAB5F | - | Seriennummer SRR Sensor rechts anzeigen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB5F |
| STEUERN_SERVO_VENTIL | 0xA056 | - | Start Servo Ventil Ansteuerung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA056 | - |
| STEUERN_WERKSWINKEL_SRR_LINKS | 0xAB51 | - | Justage Short Range Radar Sensor linke Seite (in Fahrtrichtung) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB51 | - |
| STEUERN_WERKSWINKEL_SRR_LINKS_LESEN | 0xAB57 | - | Auslesen der abgespeicherten Werkswinkel. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB57 |
| STEUERN_WERKSWINKEL_SRR_RECHTS | 0xAB50 | - | Justage Short Range Radar Sensor rechte Seite (in Fahrtrichtung) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB50 | - |
| STEUERN_WERKSWINKEL_SRR_RECHTS_LESEN | 0xAB58 | - | Auslesen der abgespeicherten Werkswinkel. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB58 |
| STATUS_AL_CHECKCONTROL_MELDUNGEN_AKTUATOR_ZUSTAND | 0x405F | - | Bitmuster fuer ASA Checkcontrol Meldungen bezogen auf den Aktuator | bit | - | - | BITFIELD | RES_0x405F | - | - | - | - | 22 | - | - |
| STATUS_BOARD_EXCEPT_CPU1 | 0x4012 | - | Board Exception CPU1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4012 |
| STATUS_BOARD_EXCEPT_CPU2 | 0x4013 | - | Board Exception CPU2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4013 |
| STATUS_FLEXRAY_HARDWARE_COUNTER | 0x4055 | - | FLEXRAY HARDWARE Zähler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4055 |
| STATUS_FLEXRAY_HARDWARE_ERROR | 0x4053 | - | FLEXRAY HARDWARE Fehler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4053 |
| STATUS_FLEXRAY_HARDWARE_MESSAGE_BUFFER | 0x4052 | - | FLEXRAY HARDWARE Message Buffer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4052 |
| STATUS_FLEXRAY_HARDWARE_MISC | 0x4056 | - | FLEXRAY HARDWARE Diverses | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4056 |
| STATUS_FLEXRAY_HARDWARE_PAYLOAD_DATEN | 0x4051 | - | FLEXRAY HARDWARE Payload | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4051 |
| STATUS_FLEXRAY_HARDWARE_RAM_BUFFER | 0x4050 | - | FLEXRAY HARDWARE RAM Adressen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4050 |
| STATUS_FLEXRAY_HARDWARE_STATUS | 0x4054 | - | FLEXRAY HARDWARE Status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4054 |
| STATUS_FREIGABE_AKTIVE_DIAGNOSE_HSR_ZUSTAND | 0x405C | STAT_ZFMFS_I_FAHRZUSTAND_NR | - | 0-n | - | - | char | TAB_FAHRZEUGZUSTAND | - | - | - | - | 22 | - | - |
| STATUS_GBRPLUS_ZUSTAND | 0x4059 | - | Sollwertqualifier Faktoren, Sollwertqualifier Offset-Motormoment | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4059 |
| STATUS_HSR_CHECKCONTROL_MELDUNGEN_AKTUATOR_ZUSTAND | 0x405E | - | Bitmuster fuer HSR Checkcontrol Meldungen bezogen auf den Aktuator | bit | - | - | BITFIELD | RES_0x405E | - | - | - | - | 22 | - | - |
| STATUS_MOMENTENKOORDINATOR_EPS_ZUSTAND | 0x405A | - | Sollwertqualifier zum Offset-Handmoment von HC, Sollwertqualifier zum Offset-Handmoment an EPS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x405A |
| STATUS_PMI_ZUSTAND | 0x405B | - | Var.  PmiVk_i_mKW_nsq  | bit | - | - | BITFIELD | RES_0x405B | - | - | - | - | 22 | - | - |
| STATUS_SCHNEEKETTENERKENNUNG_ZUSTAND | 0x405D | - | Bitmuster Schneekettenzustand | bit | - | - | BITFIELD | RES_0x405D | - | - | - | - | 22 | - | - |
| STATUS_SGSTATE_CPU1 | 0x4010 | - | Steuergeraete Zustand auf CPU 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010 |
| STATUS_SGSTATE_CPU2 | 0x4011 | - | Steuergeraete Zustand auf CPU2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4011 |
| STATUS_ZFM_DK_COMP | 0x4075 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4075 |
| STATUS_ZFM_QES_AB_QMV | 0x4060 | STAT_ZFMABQMV_I_KKIN_ABQUAL_NR | ZFM QES AB QMV | 0-n | - | - | char | TAB_SBS_GUELTIGKEIT | - | - | - | - | 22 | - | - |
| STATUS_ZFM_QES_FS_I | 0x4073 | - | STATUS_ZFM_QES_FS_I | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4073 |
| STATUS_ZFM_QES_FS_I_ARS | 0x4071 | - | ZFM QES FS I ARS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4071 |
| STATUS_ZFM_QES_FS_I_LWHA | 0x406E | - | ZFM QES FS I LWHA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x406E |
| STATUS_ZFM_QES_FS_I_LWVA | 0x406D | - | ZFM QES FS I LW | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x406D |
| STATUS_ZFM_QES_FS_I_MOTOR | 0x4072 | - | ZFM QES FS I MOTOR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4072 |
| STATUS_ZFM_QES_FS_I_SENSORIK | 0x406F | - | ZFM QES FS I SENSORIK | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x406F |
| STATUS_ZFM_QES_FS_I_SQ | 0x4070 | - | ZFM QES FS I SQ | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4070 |
| STATUS_ZFM_QES_FS_I_V | 0x406C | - | ZFM QES FS I V | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x406C |
| STATUS_ZFM_QES_WRE_I_ERWARTET | 0x4074 | - | STATUS_ZFM_QES_WRE_I_ERWARTET | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4074 |
| STATUS_ZFM_QIS_DK_FQ | 0x4069 | - | ZFM QIS DK FQ | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4069 |
| STATUS_ZFM_QIS_DK_RQ | 0x406B | STAT_ZFMDKRQ_I_RQ_GRRPLUS_NSQ_NR | ZFM_QIS_DK_RQ | 0-n | - | - | char | TAB_SBS_GUELTIGKEIT | - | - | - | - | 22 | - | - |
| STATUS_ZFM_QIS_DK_SQ | 0x406A | - | ZFM QIS DK SQ | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x406A |
| STATUS_ZFM_QIS_DK_VQ | 0x4068 | - | ZFM QIS DK VQ | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4068 |
| STATUS_ZFM_QUALIFIER_1 | 0x4076 | - | STATUS_ZFM_QUALIFIER_1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4076 |
| STATUS_ZFM_QUALIFIER_2 | 0x4077 | - | STATUS_ZFM_QUALIFIER_2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4077 |
| STATUS_ZFM_ZAKT_ABLEN | 0x4061 | - | ZFM ZAKT ABLEN | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4061 |
| STATUS_ZFM_ZEF_FS | 0x4062 | - | ZFM ZEF FS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4062 |
| STATUS_ZFM_ZIF_DK_FQ | 0x4064 | - | ZFM ZIF DK FQ | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4064 |
| STATUS_ZFM_ZIF_DK_RL | 0x4065 | STAT_ZFMDKRL_I_ZS_RL_QMVH_NR | ZFM_ZIF_DK_RL | 0-n | - | - | char | TAB_ZIF_GUE | - | - | - | - | 22 | - | - |
| STATUS_ZFM_ZIF_DK_RQ | 0x4067 | - | ZFM ZIF DK RQ | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4067 |
| STATUS_ZFM_ZIF_DK_SQ | 0x4066 | - | ZFM ZIF DK SQ | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4066 |
| STATUS_ZFM_ZIF_DK_VQ | 0x4063 | - | ZFM ZIF DK VQ | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4063 |
| STEUERN_REIFENKONFIGURATION_SETZEN | 0x4020 | - | ReifenTyp und dazugeh. Parameter setzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4020 | - |

### TAB_AKTUATOREN_GUE

| WERT | TEXT |
| --- | --- |
| 0 | Gültig |
| 1 | Aktuator Fehler |
| 2 | Aktuator nicht verbaut |
| 4 | Aktuator eingeschraenkt verfuegbar |
| 8 | Aktuator nicht verfuegbar |
| 16 | Aktuator will Sollwert |

### TAB_ABSCHALTUNG_GUE

| WERT | TEXT |
| --- | --- |
| 0 | passiv |
| 1 | bereit |
| 2 | aktiv |
| 3 | Fehler |
| 4 | in Abschaltung |

### TAB_ZIF_GUE

| WERT | TEXT |
| --- | --- |
| 0 | passiv |
| 1 | bereit passiv |
| 2 | bereit aktiv |
| 3 | aktiv |

### RES_0X4061

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMABLEN_AFS_AKT_ZST_NR | - | - | - | 0-n | - | char | - | TAB_AKTUATOREN_GUE | - | - | - | Aktuator ASA |
| STAT_ZFMABLEN_HSR_AKT_ZST_NR | - | - | - | 0-n | - | char | - | TAB_AKTUATOREN_GUE | - | - | - | Aktuator HSR |
| STAT_ZFMABLEN_GMVV_AKT_ZST_NR | - | - | - | 0-n | - | char | - | TAB_AKTUATOREN_GUE | - | - | - | Giermomentenverteilung Vorderachse |
| STAT_ZFMABLEN_GMVH_AKT_ZST_NR | - | - | - | 0-n | - | char | - | TAB_AKTUATOREN_GUE | - | - | - | Giermomentenverteilung Hinterachse |
| STAT_ZFMABLEN_ARS_AKT_ZST_NR | - | - | - | 0-n | - | char | - | TAB_AKTUATOREN_GUE | - | - | - | Aktuator ARS |

### RES_0X4062

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMFS_I_DSC_ABS_FKT_ZST_NR | - | - | - | 0-n | - | char | - | TAB_ABSCHALTUNG_GUE | - | - | - | ZFM  DSC - ABS Zustand |
| STAT_ZFMFS_I_DSC_FZR_FKT_ZST_NR | - | - | - | 0-n | - | char | - | TAB_ABSCHALTUNG_GUE | - | - | - | ZFM DSC - FZR Zustand |
| STAT_ZFMFS_I_DSC_ROM_FKT_ZST_NR | - | - | - | 0-n | - | char | - | TAB_ABSCHALTUNG_GUE | - | - | - | ZFM DSC - ROM Zustand |

### RES_0X4063

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMDKVQ_I_ZS_VX_NR | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM DK VQ I ZS |
| STAT_ZFMDKVQ_I_ZS_AFSSVSOLL_NR | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM DK VQ I ZS |
| STAT_ZFMDKVQ_I_ZS_HSRSVSOLL_NR | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM DK VQ I ZS |
| STAT_ZFMDKVQ_I_ZS_ECO_SOLL_NR | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM DK VQ I ZS |
| STAT_ZFMDKVQ_I_ZS_SERVO_SOLL_NR | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM DK VQ I ZS |
| STAT_ZFMDKVQ_I_ZS_ARSSVSOLL_NR | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM DK VQ I ZS |
| STAT_ZFMDKVQ_I_ZS_HSRDVSOLL_NR | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM DK VQ I ZS |
| STAT_ZFMDKVQ_I_ZS_AFSDVSOLL_NR | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM DK VQ I ZS |
| STAT_ZFMDKVQ_I_ZS_GMVHSVSOLL_NR | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM DK VQ I ZS |
| STAT_ZFMDKVQ_I_ZS_LWHA_NR | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM DK VQ I ZS |
| STAT_ZFMDKVQ_I_ZS_HSRGIERKOMP_NR | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM DK VQ I ZS |
| STAT_ZFMDKVQ_I_ZS_HSRFKT_NR | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM DK VQ I ZS |
| STAT_ZFMDKVQ_I_ZS_GMVHDVSOLL_NR | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM DK VQ I ZS |
| STAT_ZFMDKVQ_I_ZS_LWVA_NR | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM DK VQ I ZS |

### RES_0X4064

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMDKFQ_I_ZS_FQ_PSIP_ACK_NR | - | - | - | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM ZIF DK FQ |
| STAT_ZFMDKFQ_I_ZS_FQ_GRRPLUS_NR | - | - | - | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM ZIF DK FQ |

### RES_0X4066

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMDKSQ_I_ZS_SQ_AFS_NR | - | - | - | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM_ZIF_DK_SQ |
| STAT_ZFMDKSQ_I_ZS_SQ_HSR_NR | - | - | - | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM_ZIF_DK_SQ |
| STAT_ZFMDKSQ_I_ZS_SQ_GMVH_NR | - | - | - | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM_ZIF_DK_SQ |
| STAT_ZFMDKSQ_I_ZS_SQ_GMVV_NR | - | - | - | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM_ZIF_DK_SQ |
| STAT_ZFMDKSQ_I_ZS_SQ_ARS_NR | - | - | - | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM_ZIF_DK_SQ |

### RES_0X4067

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMDKRQ_I_ZS_RQ_AFS_NR | - | - | - | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM_ZIF_DK_RQ |
| STAT_ZFMDKRQ_I_ZS_RQ_HSR_NR | - | - | - | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM_ZIF_DK_RQ |
| STAT_ZFMDKRQ_I_ZS_RQ_GMVV_NR | - | - | - | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM_ZIF_DK_RQ |
| STAT_ZFMDKRQ_I_ZS_RQ_GMVH_NR | - | - | - | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM_ZIF_DK_RQ |
| STAT_ZFMDKRQ_I_ZS_RQ_ARS_NR | - | - | - | 0-n | - | char | - | TAB_ZIF_GUE | - | - | - | ZFM_ZIF_DK_RQ |

### RES_0X4068

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMDKVQ_I_LWVA_STG_NSQ_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QIS_DK_VQ |
| STAT_ZFMDKVQ_I_LWHA_STG_NSQ_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QIS_DK_VQ |

### RES_0X4069

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMDKFQ_I_FQ_PSIP_ACK_NSQ_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QIS_DK_FQ |
| STAT_ZFMDKFQ_I_FQ_ESM_NSQ_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QIS_DK_FQ |
| STAT_ZFMDKFQ_I_FQ_AY_NSQ_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QIS_DK_FQ |
| STAT_ZFMDKFQ_I_FQ_IND_NSQ_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QIS_DK_FQ |
| STAT_ZFMDKFQ_I_FQ_MUESPLIT_NSQ_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QIS_DK_FQ |

### RES_0X406A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMDKSQ_I_SQ_AX_NSQ_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QIS_DK_SQ |
| STAT_ZFMDKSQ_I_SQ_BA_NSQ_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QIS_DK_SQ |
| STAT_ZFMDKSQ_I_SQ_GRRPLUS_NSQ_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QIS_DK_SQ |

### RES_0X406C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMFS_I_V_FSQUAL_UNBEHANDELT_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QES_FS_I_V |
| STAT_ZFMFS_I_VX_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QES_FS_I_V |
| STAT_ZFMFS_I_VCH_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QES_FS_I_V |
| STAT_ZFMFS_I_VX_REG_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QES_FS_I_V |

### RES_0X406D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMFS_I_LWFAHRER_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_LW |
| STAT_ZFMFS_I_LW_VA_IST_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_LW |
| STAT_ZFMFS_I_LW_VA_RITZEL_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_LW |
| STAT_ZFMFS_I_LW_VA_EFF_OFFSET_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_LW |
| STAT_ZFMFS_I_LW_VA_EFF_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_LW |
| STAT_ZFMFS_I_LWVA_AKT_IST_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_LW |
| STAT_ZFMFS_I_LWVA_AKT_MAX_DYN_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_LW |

### RES_0X406E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMFS_I_LWHA_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_LWHA |
| STAT_ZFMFS_I_LWHA_AKT_MAX_DYN_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_LWHA |
| STAT_ZFMFS_I_SX_DIFF_HA_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_LWHA |

### RES_0X406F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMFS_I_PSIP_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_SENSORIK |
| STAT_ZFMFS_I_AY_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_SENSORIK |
| STAT_ZFMFS_I_AY_SN_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_SENSORIK |
| STAT_ZFMFS_I_AX_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_SENSORIK |
| STAT_ZFMFS_I_AX_LS_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_SENSORIK |

### RES_0X4070

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMFS_I_GMV_SQ_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_xxx_SQ_FSQUAL |
| STAT_ZFMFS_I_ASA_SQ_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_xxx_SQ_FSQUAL |
| STAT_ZFMFS_I_HSR_SQ_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_xxx_SQ_FSQUAL |

### RES_0X4071

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMFS_I_ARS_FQ_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_ARS |
| STAT_ZFMFS_I_CROLL_VERTIKAL_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_ARS |
| STAT_ZFMFS_I_CROLL_MAX_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_ARS |
| STAT_ZFMFS_I_CROLL_MIN_FSQUAL_NR | - | - | - | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_ARS |

### RES_0X4072

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMFS_I_OMEGAMOTOR_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_MOTOR_RAD |
| STAT_ZFMFS_I_MRAD_ANTRIEB_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_MOTOR_RAD |
| STAT_ZFMFS_I_MRAD_ANTRIEB_FW_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_MOTOR_RAD |
| STAT_ZFMFS_I_MRAD_BREMS_FW_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_MOTOR_RAD |
| STAT_ZFMFS_I_OMEGARAD_HL_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_MOTOR_RAD |
| STAT_ZFMFS_I_OMEGARAD_HR_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFMFS_I_MOTOR_RAD |

### RES_0X4073

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMFS_I_LMV_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QES_FS_I |
| STAT_ZFMFS_I_DSC_ABS_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QES_FS_I |
| STAT_ZFMFS_I_BLS_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QES_FS_I |
| STAT_ZFMFS_I_ANHAENGER_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QES_FS_I |
| STAT_ZFMFS_I_KLEMME15_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QES_FS_I |
| STAT_ZFMFS_I_PWG_FSQUAL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | ZFM_QES_FS_I |

### TAB_SG_AKTIVE_FEHLER

| WERT | TEXT |
| --- | --- |
| 0 | Init |
| 1 | SU Timeout |
| 2 | ECC |
| 4 | IPC |
| 8 | CPU 2 Mode |
| 16 | CPU 2 SW |
| 32 | FLX Asynch |
| 64 | OS Asynch |
| 128 | Reset CPU2 |
| 256 | Div Calc |
| 512 | Coding Data |
| 1024 | Exception CPU |
| 2048 | FMPLL LOC |
| 4096 | FMPLL LOL |
| 8192 | Undervoltage MTA |
| 16384 | Err Vol TLE |
| 32768 | Err Vol LM |
| 65536 | DMA |
| 131072 | OS Deadline |
| 262144 | OS Sys Stackoverflow |
| 524288 | Fahrgestellnummer |
| 1048576 | Fahrgestellnummer ungueltig |
| 2097152 | ZFM Codierung |
| 4194304 | Shadow Flash |
| 8388608 | Err State TLE |
| 16777216 | Err WDG TLE |
| 0xFF | unbekannter Zustand |

### TAB_REIFENTYP

| WERT | TEXT |
| --- | --- |
| 0x01 | Allseason |
| 0x02 | Winterreifen |
| 0x03 | Sommerreifen |
| 0x04 | Mischbereifung |
| 0xFF | unbekannter Zustand |

### TAB_SG_ZUSTAND_AKTUELL

| WERT | TEXT |
| --- | --- |
| 0x00 | Boot Init |
| 0x11 | Boot Active |
| 0x22 | Boot Error |
| 0x33 | Boot Save |
| 0x44 | Appl Init |
| 0x55 | Appl Active |
| 0x66 | Appl Error |
| 0x77 | Appl Save |
| 0x88 | Appl Error 2 |
| 0xFF | unbekannter Status |

### RES_0X4074

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMWRE_B_ASA_SERVICE_NR | 0-n | - | char | - | TAB_SERVICE_ERWARTET | - | - | - | - |
| STAT_ZFMWRE_B_ECO_SERVICE_NR | 0-n | - | char | - | TAB_SERVICE_ERWARTET | - | - | - | - |
| STAT_ZFMWRE_B_GMV_SERVICE_NR | 0-n | - | char | - | TAB_SERVICE_ERWARTET | - | - | - | - |
| STAT_ZFMWRE_B_QMVH_SERVICE_NR | 0-n | - | char | - | TAB_SERVICE_ERWARTET | - | - | - | - |
| STAT_ZFMWRE_B_SERVO_SERVICE_NR | 0-n | - | char | - | TAB_SERVICE_ERWARTET | - | - | - | - |

### TAB_SERVICE_ERWARTET

| WERT | TEXT |
| --- | --- |
| 0x00 | Servive NICHT erwartet |
| 0x01 | Servive erwartet |
| 0xFF | unbekannter Status |

### RES_0X4010

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKTIVE_FEHLER_NR | 0-n | - | unsigned long | - | TAB_SG_AKTIVE_FEHLER | - | - | - | AKTIVE_FEHLER |
| STAT_AKTIVE_FEHLER_KOMPLEMENT_WERT | HEX | - | unsigned long | - | - | - | - | - | AKTIVE_FEHLER komplement |
| STAT_ZUSTAND_AKTUELL_NR | 0-n | - | char | - | TAB_SG_ZUSTAND_AKTUELL | - | - | - | ZUSTAND_AKTUELL |
| STAT_ZUSTAND_AKTUELL_KOMPLEMENT_WERT | HEX | - | char | - | - | - | - | - | ZUSTAND_AKTUELL komplement |
| STAT_ZUSTAND_MERKER_WERT | HEX | - | char | - | - | - | - | - | ZUSTAND_MERKER |
| STAT_ZUSTAND_MERKER_KOMPLEMENT_WERT | HEX | - | char | - | - | - | - | - | ZUSTAND_MERKER komplement |

### ARG_0X4020

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_REIFENTYP_NR | 0-n | - | char | - | TAB_REIFENTYP | - | - | - | - | - | - |
| STEUERN_PAR1_WERT | - | - | motorola float | - | - | - | - | - | - | - | - |
| STEUERN_PAR2_WERT | - | - | motorola float | - | - | - | - | - | - | - | - |
| STEUERN_PAR3_WERT | - | - | motorola float | - | - | - | - | - | - | - | - |
| STEUERN_PAR4_WERT | - | - | motorola float | - | - | - | - | - | - | - | - |
| STEUERN_PAR5_WERT | - | - | motorola float | - | - | - | - | - | - | - | - |

### RES_0X4011

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKTIVE_FEHLER_NR | 0-n | - | unsigned long | - | TAB_SG_AKTIVE_FEHLER | - | - | - | AKTIVE_FEHLER |
| STAT_AKTIVE_FEHLER_KOMPLEMENT_WERT | HEX | - | unsigned long | - | - | - | - | - | AKTIVE_FEHLER komplement |
| STAT_ZUSTAND_AKTUELL_NR | 0-n | - | char | - | TAB_SG_ZUSTAND_AKTUELL | - | - | - | ZUSTAND_AKTUELL |
| STAT_ZUSTAND_AKTUELL_KOMPLEMENT_WERT | HEX | - | char | - | - | - | - | - | ZUSTAND_AKTUELL komplement |
| STAT_ZUSTAND_MERKER_WERT | HEX | - | char | - | - | - | - | - | ZUSTAND_MERKER |
| STAT_ZUSTAND_MERKER_KOMPLEMENT_WERT | HEX | - | char | - | - | - | - | - | ZUSTAND_MERKER komplement |

### RES_0X4012

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADDRESS_CSRR0_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADDRESS_DEAR_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADDRESS_SRR0_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADDRESS_ECSM_FEAR_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADDRESS_ECSM_REAR_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADDRESS_CAUSE_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADDRESS_CHK_SUM_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADDRESS_ECSM_ESR_WERT | HEX | - | char | - | - | - | - | - | - |
| STAT_ADDRESS_ECSM_FEMR_WERT | HEX | - | char | - | - | - | - | - | - |
| STAT_ADDRESS_ECSM_FEAT_WERT | HEX | - | char | - | - | - | - | - | - |
| STAT_ADDRESS_ECSM_REMR_WERT | HEX | - | char | - | - | - | - | - | - |
| STAT_ADDRESS_ECSM_REAT_WERT | HEX | - | char | - | - | - | - | - | - |

### RES_0X4013

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADDRESS_CSRR0_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADDRESS_DEAR_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADDRESS_SRR0_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADDRESS_ECSM_FEAR_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADDRESS_ECSM_REAR_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADDRESS_CAUSE_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADDRESS_CHK_SUM_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADDRESS_ECSM_ESR_WERT | HEX | - | char | - | - | - | - | - | - |
| STAT_ADDRESS_ECSM_FEMR_WERT | HEX | - | char | - | - | - | - | - | - |
| STAT_ADDRESS_ECSM_FEAT_WERT | HEX | - | char | - | - | - | - | - | - |
| STAT_ADDRESS_ECSM_REMR_WERT | HEX | - | char | - | - | - | - | - | - |
| STAT_ADDRESS_ECSM_REAT_WERT | HEX | - | char | - | - | - | - | - | - |

### RES_0X4050

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADR_BUFFER_AREA_RAM_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_ADR_BUFFER_AREA_RAM_SYMBADHLR_WERT | HEX | - | unsigned long | - | - | - | - | - | - |

### RES_0X4051

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUFFFER_DATASIZE_SEG1_MBDSR_WERT | HEX | - | char | - | - | - | - | - | - |
| STAT_BUFFFER_DATASIZE_SEG2_MBDSR_WERT | HEX | - | char | - | - | - | - | - | - |

### RES_0X4052

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_USED_MESSAGE_BUFFER_MBSSUTR_WERT | HEX | - | char | - | - | - | - | - | - |
| STAT_LAST_BUFFER_SEG1_MBSSUTR_WERT | HEX | - | char | - | - | - | - | - | - |

### RES_0X4053

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROTOCOL_ERRORS_PIFR0_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_PROTOCOL_ERRORS_PIFR1_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_PROTOCOL_ERRORS_CHIER_WERT | HEX | - | unsigned int | - | - | - | - | - | - |

### RES_0X4054

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROTSTATUS_PSR0_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_PROTSTATUS_PSR1_WERT | HEX | - | unsigned int | - | - | - | - | - | - |

### RES_0X4055

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAKROTICK_COUNTER_NR | 0-n | - | unsigned int | - | - | - | - | - | - |
| STAT_CYCLE_COUNTER_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_SLOT_COUNTER_NR | 0-n | - | unsigned int | - | - | - | - | - | - |
| STAT_SYNC_FRAME_SFCNTR_COUNTER_NR | 0-n | - | unsigned int | - | - | - | - | - | - |
| STAT_CHANNELAERROR_COUNTER_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_TX_CONFLICT_COUNTER_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_BOUNDARYVIOLATION_COUNTER_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_CONTENTERROR_COUNTER_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_SYNTAXERROR_COUNTER_NR | 0-n | - | char | - | - | - | - | - | - |

### RES_0X4056

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RATE_CORRECTION_VALUE_NR | 0-n | - | unsigned int | - | - | - | - | - | - |
| STAT_OFFSET_CORRECTION_VALUE_NR | 0-n | - | unsigned int | - | - | - | - | - | - |
| STAT_RAM_ACCESS_TIMEOUT_SYMATOR_NR | 0-n | - | char | - | - | - | - | - | - |

### RES_0X405F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASA_FSP_BIT0 | 0/1 | - | unsigned long | 0x0000001 | - | - | - | - | Motorlagewinkel AL ungueltig |
| STAT_ASA_FSP_BIT1 | 0/1 | - | unsigned long | 0x0000002 | - | - | - | - | AL inaktiv und Fahrzeug rollt |
| STAT_ASA_FSP_BIT2 | 0/1 | - | unsigned long | 0x0000004 | - | - | - | - | AL im Pausemodus und Fahrzeug rollt (Motor abgewürgt, Unterspannung, …) |
| STAT_ASA_FSP_BIT3 | 0/1 | - | unsigned long | 0x0000008 | - | - | - | - | AL im Errormodus |
| STAT_ASA_FSP_BIT4 | 0/1 | - | unsigned long | 0x0000010 | - | - | - | - | AL im undefinierten Statemaschine Zustand (hängt im Init, Postrun fest) |
| STAT_ASA_FSP_BIT5 | 0/1 | - | unsigned long | 0x0000020 | - | - | - | - | AL kann nicht in aktiven Modus wechseln |
| STAT_ASA_FSP_BIT6 | 0/1 | - | unsigned long | 0x0000040 | - | - | - | - | AL im Werksmodus |
| STAT_ASA_FSP_BIT7 | 0/1 | - | unsigned long | 0x0000080 | - | - | - | - | SZL neu abgeglichen |
| STAT_ASA_FSP_BIT8 | 0/1 | - | unsigned long | 0x0000100 | - | - | - | - | SZL neu verbaut |
| STAT_ASA_FSP_BIT9 | 0/1 | - | unsigned long | 0x0000200 | - | - | - | - | AL gestoert: schnelle Lenkwinkelsynchronisation |
| STAT_ASA_FSP_BIT10 | 0/1 | - | unsigned long | 0x0000400 | - | - | - | - | AL gestoert: langsame Lenkwinkelsynchronisation |
| STAT_ASA_FSP_BIT11 | 0/1 | - | unsigned long | 0x0000800 | - | - | - | - | AL gestoert: AGB (verfuegbare Dynamikzu gering, Fehleramplitude zu groß) |
| STAT_ASA_FSP_BIT12 | 0/1 | - | unsigned long | 0x0001000 | - | - | - | - | Sbs_r_vx |
| STAT_ASA_FSP_BIT13 | 0/1 | - | unsigned long | 0x0002000 | - | - | - | - | ZfmFs_r_vx, Fahrsituation nicht plausibel |
| STAT_ASA_FSP_BIT14 | 0/1 | - | unsigned long | 0x0004000 | - | - | - | - | ZfmWrE_i_engine_run Kommunikation |
| STAT_ASA_FSP_BIT15 | 0/1 | - | unsigned long | 0x0008000 | - | - | - | - | ZfmWrE_i_ASA_sq Kommunikatio |
| STAT_ASA_FSP_BIT16 | 0/1 | - | unsigned long | 0x0010000 | - | - | - | - | ZfmWrE_r_lwVA_akt_max_dyn Kommunikation |
| STAT_ASA_FSP_BIT17 | 0/1 | - | unsigned long | 0x0020000 | - | - | - | - | ZfmWrE_r_lwVA_akt_max_dyn Inhalt bzw. Nutzsignalqualifier |

### RES_0X405E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HSR_FSP_BIT0 | 0/1 | - | unsigned long | 0x00000001 | - | - | - | - | Motorlagewinkel HSR ungueltig |
| STAT_HSR_FSP_BIT1 | 0/1 | - | unsigned long | 0x00000002 | - | - | - | - | HSR inaktiv und Fahrzeug rollt |
| STAT_HSR_FSP_BIT2 | 0/1 | - | unsigned long | 0x00000004 | - | - | - | - | HSR im Pausemodus und Fahrzeug rollt (Motor abgewürgt, Unterspannung, …) |
| STAT_HSR_FSP_BIT3 | 0/1 | - | unsigned long | 0x00000008 | - | - | - | - | HSR im Errormodus |
| STAT_HSR_FSP_BIT4 | 0/1 | - | unsigned long | 0x00000010 | - | - | - | - | HSR im undefinierten Statemaschine Zustand (hängt im Init, Postrun fest) |
| STAT_HSR_FSP_BIT5 | 0/1 | - | unsigned long | 0x00000020 | - | - | - | - | HSR kann nicht in aktiven modus wechseln |
| STAT_HSR_FSP_BIT6 | 0/1 | - | unsigned long | 0x00000040 | - | - | - | - | HSR Schneekettenmodus |
| STAT_HSR_FSP_BIT7 | 0/1 | - | unsigned long | 0x00000080 | - | - | - | - | HSR gestoert: schnelle Lenkwinkelsynchronisation |
| STAT_HSR_FSP_BIT8 | 0/1 | - | unsigned long | 0x00000100 | - | - | - | - | HSR gestoert: langsame Lenkwinkelsynchronisation |
| STAT_HSR_FSP_BIT9 | 0/1 | - | unsigned long | 0x00000200 | - | - | - | - | HSR gestoert: AGB (verfügbare Dynamikzu gering, Fehleramplitude zu groß) |
| STAT_HSR_FSP_BIT10 | 0/1 | - | unsigned long | 0x00000400 | - | - | - | - | Sbs_r_vx |
| STAT_HSR_FSP_BIT11 | 0/1 | - | unsigned long | 0x00000800 | - | - | - | - | ZfmFs_r_vx, Fahrsituation nicht plausibel |
| STAT_HSR_FSP_BIT12 | 0/1 | - | unsigned long | 0x00001000 | - | - | - | - | ZfmWrE_i_engine_run Kommunikation |
| STAT_HSR_FSP_BIT13 | 0/1 | - | unsigned long | 0x00002000 | - | - | - | - | ZfmWrE_i_ASA_sq Kommunikation |
| STAT_HSR_FSP_BIT14 | 0/1 | - | unsigned long | 0x00004000 | - | - | - | - | ZfmWrE_r_lwVA_akt_max_dyn Kommunikation |
| STAT_HSR_FSP_BIT15 | 0/1 | - | unsigned long | 0x00008000 | - | - | - | - | ZfmWrE_r_lwVA_akt_max_dyn Inhalt bzw. Nutzsignalqualifier |
| STAT_HSR_FSP_BIT16 | 0/1 | - | unsigned long | 0x00010000 | - | - | - | - | ZfmWrE_i_SKE_fq Kommunikation |
| STAT_HSR_FSP_BIT17 | 0/1 | - | unsigned long | 0x00020000 | - | - | - | - | ZfmWrE_i_schalter_SK_HU Kommunikation |
| STAT_HSR_FSP_BIT18 | 0/1 | - | unsigned long | 0x00040000 | - | - | - | - | ZfmWrE_i_anzeige_SK_HU Kommunikation |
| STAT_HSR_FSP_BIT19 | 0/1 | - | unsigned long | 0x00080000 | - | - | - | - | Unterschied zwischen automatischer Schneekettenerkennung und Menüeinstellung durch Kundenüberstimmung (Infospeicher) |
| STAT_HSR_FSP_BIT20 | 0/1 | - | unsigned long | 0x00100000 | - | - | - | - | HSR Zwangsaktivierung: zulässige Höchstgeschwindigkeit im Schneekettenmodus überschritten (Infospeicher) |
| STAT_HSR_FSP_BIT21 | 0/1 | - | unsigned long | 0x00200000 | - | - | - | - | Schneekettenmodus aktiv, Info fuer Fahrer nach Klemme 15 an oder eingeschlafen (Infospeicher) |
| STAT_HSR_FSP_BIT22 | 0/1 | - | unsigned long | 0x00400000 | - | - | - | - | Schneekettenerkennung im Errormodus |

### RES_0X405D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMFS_I_SKE_FQ_BIT7 | 0/1 | - | char | 0x10 | - | - | - | - | Initialisierung |
| STAT_ZFMFS_I_SKE_FQ_BIT0_BIS_7 | 0/1 | - | char | 0xFF | - | - | - | - | Signal ungueltig |
| STAT_ZFMFS_I_SKE_FQ_HIGHNIBBLE | 0-n | - | char | 0xF0 | TAB_HIGHNIBBLE | - | - | - | - |
| STAT_ZFMFS_I_SKE_FQ_LOWNIBBLE | 0-n | - | char | 0x0F | TAB_LOWNIBBLE | - | - | - | - |

### TAB_HIGHNIBBLE

| WERT | TEXT |
| --- | --- |
| 0x02 | SKE passiv |
| 0x03 | SKE Rückfallebene |
| 0x06 | SKE Error |
| 0x0A | SKE aktiv |
| 0xFF | unbekannter Status |

### TAB_LOWNIBBLE

| WERT | TEXT |
| --- | --- |
| 0x01 | zurückgesetzt, Ergebnis unsicher und nicht fertig |
| 0x05 | unsicheres Ergebnis |
| 0x06 | Rad ohne Kette sicher erkannt |
| 0x07 | Kette sicher erkannt |
| 0x0E | Rad ohne Kette erkannt durch logische Kriterien |
| 0x0F | Kette sicher erkannt durch logische Kriterien |
| 0xFF | unbekannter Status |

### TAB_FAHRZEUGZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Fahrzeug steht   - io |
| 1 | Fahrzeug fährt vorwaerts - io |
| 2 | Fahrzeug fährt rueckwaerts -nio |
| 3 | Fahrzeug fährt  -nio |
| 7 | Signal ungültig  -nio |
| 255 | unbekannter Zustand |

### RES_0X405B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PMIVK_I_MKW_NSQ_BIT0 | 0/1 | - | char | 0x01 | - | - | - | - | Bit0: AFS verbaut |
| STAT_PMIVK_I_MKW_NSQ_BIT1 | 0/1 | - | char | 0x02 | - | - | - | - | Bit1: EPS verbaut |
| STAT_PMIVK_I_MKW_NSQ_BIT2 | 0/1 | - | char | 0x04 | - | - | - | - | Bit2: ARS verbaut |
| STAT_PMIVK_I_MKW_NSQ_HIGH | 0-n | - | char | 0xF0 | TAB_SWQ | - | - | - | siehe Tabelle |

### TAB_SWQ

| WERT | TEXT |
| --- | --- |
| 0x02 | Sollwert umsetzen |
| 0x06 | Sollwert nicht umsetzen - Fehler |
| 0x07 | Sollwerte nicht vorhanden |
| 0x08 | Initialisierung |
| 0x0E | Standby: Sollwerte nicht umsetzen |
| 0x0F | Signal ungültig |
| 0xFF | unbekannter Status |

### RES_0X4059

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMWRA_I_FAKTOR_EPS_SWQ_NR | 0-n | - | char | - | TAB_SWQ | - | - | - | - |
| STAT_ZFMWRA_I_MMOTOROFFSET_EPS_SWQ_NR | 0-n | - | char | - | TAB_SWQ | - | - | - | - |
| STAT_ZFMABEPS_I_EPS_MLENK_AKT_ZST | 0-n | - | char | - | TAB_AKTUATOREN_GUE | - | - | - | - |

### RES_0X405A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMWRE_I_MHANDOFFSET_HC_SWQ_NR | 0-n | - | char | - | TAB_SWQ | - | - | - | - |
| STAT_ZFMWRA_I_MHANDOFFSET_EPS_SWQ_NR | 0-n | - | char | - | TAB_SWQ | - | - | - | - |

### RES_0X4076

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMDKFQ_I_FQ_PSIP_ACK_NSQ_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKFQ_I_FQ_ESM_NSQ_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKFQ_I_FQ_AY_NSQ_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKFQ_I_FQ_IND_NSQ_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKSQ_I_SQ_AX_NSQ_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKSQ_I_SQ_BA_NSQ_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKSQ_I_ZS_SQ_AXM_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKRQ_B_ZOR_AY_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_ANHAENGER_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_ANZEIGE_SK_HU_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_FMFS_I_ARS_FQ_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_ASA_SQ_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_AX_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_AX_LS_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_AX_M_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_AY_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_AY_FZB_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_AY_SN_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_AY_SN_FZB_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_BETA_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_BETAP_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_BLS_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_CROLL_IST_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_CROLL_MAX_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_CROLL_MIN_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_CROLL_VERTIKAL_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_DSC_ABS_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_DSC_FZR_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_EPS_FQ_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_EPS_MHAND_IST_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_EPS_MLENK_SQ_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_GMV_SQ_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_HSR_SQ_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_KL_DSC_QMVH_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_KLEMME15_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_KR_DSC_QMVH_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_LMV_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |

### RES_0X4077

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMFS_I_LWHA_AKT_FAMP_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_LWHA_AKT_MAX_DYN_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_LWHA_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_LWVA_AKT_FAMP_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_LWVA_AKT_IST_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_LWVA_AKT_MAX_DYN_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_LWVA_EFF_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_LWVA_EFF_OFFSET_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_LWVA_IST_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_LWVA_RITZEL_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_LWFAHRER_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_MRAD_ANTRIEB_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_MRAD_ANTRIEB_FW_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_MRAD_BREMS_FW_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_MUE_FZB_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_OMEGAMOTOR_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_OMEGARAD_HL_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_OMEGARAD_HR_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_PSIP_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_PSIP_FZB_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_PWG_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_QMVH_SQ_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_SCHALTER_SK_HU_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_SKE_FQ_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_STATUS_VTG_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_SX_DIFF_HA_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_SX_HL_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_SX_HR_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_SX_VL_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_SX_VR_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_TEMP_KUP_VTG_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_TEMP_MOT_VTG_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_V_FZB_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_VB_QMVH_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_VCH_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_VX_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_VX_RAD_HL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_VX_RAD_HR_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_VX_RAD_VL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_VX_RAD_VR_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_VX_REG_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_VX_SERVO_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMFS_I_VX_VQSVLEN_FSQUAL_NR | 0-n | - | char | - | - | - | - | - | - |

### RES_0X4075

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMDKVQ_I_ZS_ECO_SOLL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKVQ_I_ZS_SERVO_SOLL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKRQ_I_ZS_RQ_BETAR_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKRQ_I_ZS_EF_QMVHVQ_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKRQ_I_ZS_EF_GMVHVQ_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKRQ_B_ZOR_TB_GMVH_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKRQ_B_ZOR_EF_ARSVQ_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKRQ_B_ZOR_EF_ARSRL_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKRL_B_ZOR_RL_DTB_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKRL_B_ZOR_RL_AMK_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKRL_B_ZOR_RL_MUE_NR | 0-n | - | char | - | - | - | - | - | - |
| STAT_ZFMDKRQ_B_ZOR_EF_QMVHRL_NR | 0-n | - | char | - | - | - | - | - | - |

### RES_0XDB60

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LERNDATEN_1_WERT | - | - | data[48] | - | - | - | - | - | Ausgabe von LDM Lerndaten |
| STAT_ALPSTOFF_WERT | - | - | int | - | - | - | - | - | INFO FEHLT. |
| STAT_PSID_TOFF_TOTAL_WERT | - | - | int | - | - | - | - | - | INFO FEHLT. |
| STAT_COUNT_DEJUSTAGE_SRR_LEFT_WERT | - | - | long | - | - | - | - | - | Zähler für den Dejustagezustand Short Range Radar links (in Fahrtrichtung) |
| STAT_COUNT_DEJUSTAGE_SRR_RIGHT_WERT | - | - | long | - | - | - | - | - | Zähler für den Dejustagezustand Short Range Radar rechts (in Fahrtrichtung) |
| STAT_COUNT_DEJUSTAGE_LRR_WERT | - | - | long | - | - | - | - | - | Zähler für den Dejustagezustand LRR Range Radar  |
| STAT_WINKEL_DEJUSTAGE_SRR_PT1_LEFT_WERT | rad | - | char | - | - | 0.0016 | - | - | Winkel für den Dejustagezustand Short Range Radar links (in Fahrtrichtung) |
| STAT_WINKEL_DEJUSTAGE_SRR_PT1_RIGHT_WERT | rad | - | char | - | - | 0.0016 | - | - | Winkel für den Dejustagezustand Short Range Radar rechts (in Fahrtrichtung) |
| STAT_TRAFFIC_DIRECTION_WERT | - | - | char | - | - | - | - | - | kOMMENT TO DO |
| STAT_LERNDATEN_2_WERT | - | - | data[141] | - | - | - | - | - | Ausgabe von LDM Lerndaten |

### ARG_0XDB66

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TO_DO | - | - | unsigned char | - | - | - | - | - | - | - | TO_DO |

### ARG_0XDB98

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | - | - | - | - | - | Setzen / Rücksetzen Rollenmodus (1 = Setzen; 0 =  Rücksetzen)  |

### ARG_0XDB9B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | - | int | - | - | - | - | - | - | - | 1: Eigendiagnose antriggern. Kein Rücksetzen mit Parameter 0 erforderlich. Routine beendet sich nach Ablauf selbsttätig.  |

### RES_0XDBB8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GUELTIGKEIT_MLW_NR | 0-n | - | unsigned char | - | TAB_MLWSTATE_EAS | - | - | - | Status Motorlagewinkel |
| STAT_LINKER_ANSCHLAG_GELERNT_NR | 0-n | - | unsigned char | - | TAB_MLWSTATE_EAS | - | - | - | Status Endanschlag links |
| STAT_RECHTER_ANSCHLAG_GELERNT_NR | 0-n | - | unsigned char | - | TAB_MLWSTATE_EAS | - | - | - | Status Endanschlag rechts |

### TAB_MLWSTATE_EAS

| WERT | TEXT |
| --- | --- |
| 0 | nicht gelernt |
| 1 | gelernt |
| 4 | Randbedingung Routine verletzt |
| 10 | kein EAS Fahrzeug (Codierung) |
| 255 | ungültiger Wert |

### RES_0XDBD1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORLAGEWINKEL_ISTWERT_AL_GRAD_WERT | Grad | - | motorola float | - | - | - | - | - | Motorlagewinkel Absoult Istwert in Grad Quantisierung: ( (PH) = 0,04395 * (HEX) [rad] ) Skalierungsfaktor: ( (PH)[grad] = 180 / 3.141592 * (HEX) ) Wertebereich: ( -1440 grad...+1440 grad )  |
| STAT_MOTORLAGEWINKEL_ISTWERT_AL_QUALIFIER_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | Beurteilung des AFS Motorlagewinkel Istwert 0 -- > Initialisierung 1 -- > Signalwert ist gueltig und abgesichert 2 -- > Signal ist gueltig 3 -- > Signal ist nicht vertrauenswuerdig 4 -- > Ersatzwert ist im Nutzsignal gesetzt 5 -- > Signal zu oft entprellt 6 -- > Signalwert ist ungueltig 7 -- > Sensor nicht vorhanden oder Signal ungueltig  |
| STAT_AL_SERVICEQUALIFIER_NR | 0-n | - | char | - | TAB_OPERATINGSYSTEM_ICM_ASA | - | - | - | Beurteilung des AFS Servicequalifier: 33 -- > Drive Standby  34 -- > Drive 49 -- > Drive Standby, USW1 53 -- > Drive Standby, USW2  57 -- > Drive Standby, USW3 54 -- > Drive, USW1 50 -- > Drive, USW2 58 -- > Drive, USW3 104 -- > Error 128 -- > Initialisierung 224 -- > Postrun 225 -- > ReadyforDrive 227 -- > Drive_RampZero 228 -- > WaitForRLWSet 233 -- > ReadyForDrive Unterspannung 235 -- > Drive_RampZero Unterspannung 255 -- > Invalid   |
| STAT_AL_SERVICEQUALIFIER_MLW_IST_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | Beurteilung des MLW Istwert Service qualifier: 0 -- > Initialisierung 1 -- > Signalwert ist gueltig und abgesichert 2 -- > Signal ist gueltig 3 -- > Signal ist nicht vertrauenswuerdig 4 -- > Ersatzwert ist im Nutzsignal gesetzt 5 -- > Signal zu oft entprellt 6 -- > Signalwert ist ungueltig 7 -- > Sensor nicht vorhanden oder Signal ungueltig  |
| STAT_MOTORLAGEWINKEL_SOLLWERT_AL_GRAD_WERT | Grad | - | motorola float | - | - | - | - | - | Motorlagewinkel Absolut Sollwert in Grad Quantisierung: ( (PH) = 0,04395 * (HEX) [rad] ) Skalierungsfaktor: ( (PH)[grad] = 180 / 3.141592 * (HEX) ) Wertebereich: ( -1440 grad...+1440 grad ) |
| STAT_MOTORLAGEWINKEL_SOLLWERT_AL_QUALIFIER_NR | 0-n | - | char | - | TAB_MLW_QUAL | - | - | - | Qualifier MLW Aktivlenkung |
| STAT_ZFMDKVQ_I_ZS_VX_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_ZFMDKRQ_I_ZS_RQ_AFS_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_ZFMDKFQ_I_ZS_FQ_GRRPLUS_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_ZFMDKVQ_B_LWVA_STG_UMG_FMP_S1_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_ZFMDKVQ_B_LWVA_STG_UMG_FMP_S2_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_ZFMABLEN_I_ASA_AKT_ZST_WERT | - | - | unsigned char | - | - | - | - | - | - |

### TAB_OPERATINGSYSTEM_ICM_ASA

| WERT | TEXT |
| --- | --- |
| 33 | Drive Standby |
| 34 | Drive |
| 49 | Drive Standby, USW1 |
| 50 | Drive, USW2 |
| 53 | Drive Standby, USW2 |
| 54 | Drive, USW1 |
| 57 | Drive Standby, USW3 |
| 58 | Drive, USW3 |
| 104 | Error |
| 128 | Initialisierung |
| 224 | POSTRUN |
| 225 | ReadyforDrive |
| 227 | Drive_RampZero |
| 228 | WaitForRLWSet |
| 233 | ReadyForDrive Unterspannung |
| 235 | Drive_RampZero Unterspannung |
| 255 | ungültiges Signal |

### RES_0XDBD4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRER_LENKWINKEL_GRAD_WERT | Grad | - | motorola float | - | - | - | - | - | Fahrerlenkwinkel |
| STAT_GUELTIGKEIT_FAHRER_LENKWINKEL_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | - |
| STAT_MOTORLAGEWINKEL_ABSOLUT_AL_GRAD_ISTWERT_WERT | Grad | - | motorola float | - | - | - | - | - | Motorlagewinkel der Aktivlenkung: Absolut Istwert in Grad  |
| STAT_GUELTIGKEIT_MOTORLAGEWINKEL_ABSOLUT_AL_ISTWERT_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | Aktueller Status des Motorlagewinkel Ist 0 = MLW ungültig 1 = MLW gültig 2 = Initialisierung 3 = Timeout  |
| STAT_MOTORLAGEWINKEL_ABSOLUT_AL_GRAD_SOLLWERT_WERT | Grad | - | motorola float | - | - | - | - | - | Motorlagewinkel der Aktivlenkung: Absolut Sollwert in Grad  |
| STAT_GUELTIGKEIT_MOTORLAGEWINKEL_ABSOLUT_SOLLWERT_NR | 0-n | - | char | - | TAB_MLW_QUAL | - | - | - | Aktueller Status des Motorlagewinkel Soll 0 = Sollwert nicht umsetzen 1 = Sollwert umsetzen 2 = Rotorlage in ASA SG gültig setzen 3 = Rotorlage in ASA SG ungültig setzen  |
| STAT_SUMMENLENKWINKELROH_GRAD_WERT | Grad | - | motorola float | - | - | - | - | - | intern berechneter Summenlenkwinkel in Grad. Virtueller Wert - kein Sensor ist vorhanden |
| STAT_GUELTIGKEIT_SUMMENWINKELROH_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | Gueltigkeitsbeurteilung des Summenlenkwinkel 0 -- > Initialisierung 1 -- > Signalwert ist gueltig und abgesichert 2 -- > Signal ist gueltig 3 -- > Signal ist nicht vertrauenswuerdig 4 -- > Ersatzwert ist im Nutzsignal gesetzt 5 -- > nicht definiert 6 -- > Signalwert ist ungueltig 7 -- > Sensor ist nicht vorhanden oder Signal ungueltig  |

### TAB_MLW_QUAL

| WERT | TEXT |
| --- | --- |
| 32 | Sollwert umsetzen |
| 96 | Fehler |
| 112 | Sollwert nicht vorhanden |
| 128 | Initialisierung |
| 224 | Sollwert nicht umsetzen |
| 225 | Sollwert nicht umsetzen, Set RLW valid |
| 226 | Sollwert nicht umsetzen, Set RLW invalid |
| 255 | Signal ungültig |

### RES_0XDBD5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AL_GUELTIGKEIT_MLW_NR | 0-n | - | char | - | TAB_MLW_GUELTIGKEIT | - | - | - | Aktueller Status des Motorlagewinkel |
| STAT_AL_GUELTIGKEIT_MLW_INITMODE_NR | 0-n | - | char | - | TAB_MLWGUE | - | - | - | Aktueller Status des Motorlagewinkel |

### TAB_MLW_GUELTIGKEIT

| WERT | TEXT |
| --- | --- |
| 0 | Motorlagewinkel ungültig - Bereit zur Initialisierung |
| 1 | Motorlagewinkel gültig und abgesichert |
| 2 | Motorlagewinkel gültig |
| 3 | Motorlagewinkel nicht vertrauenswürdig |
| 4 | Motorlagewinkel - Ersatzwert im Nutzsignal gesetzt |
| 5 | Motorlagewinkel - Signal Timeout |
| 6 | Motorlagewinkel ungültig |
| 7 | Motorlagewinkel - Signal nicht vorhanden oder ungültig |
| 255 | unbekannter Zustand |

### TAB_MLWGUE

| WERT | TEXT |
| --- | --- |
| 0 | Motorlagewinkel ungültig |
| 1 | Motorlagewinkel gültig |
| 2 | Initialisierung |
| 3 | Timeout |
| 4 | nicht definiert |
| 5 | Kommunikationsfehler |
| 255 | unbekannter Zustand |

### RES_0XDBD6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERVO_VENTIL_STROM_IST_WERT | A | - | motorola float | - | - | - | - | - | Aktueller Strom am Servo Ventil. |
| STAT_SERVO_VENTIL_ZUSTAND_WERT | - | - | char | - | - | - | - | - | Zustand des Servo Ventil. |
| STAT_SERVO_VENTIL_ZUSTAND_STEUERUNG | 0/1 | - | char | - | - | - | - | - | Ansteuerung Servo Ventil 0 - SERVO Ventil aus Modell (Normalbetrieb SG) angesteuert 1 - SERVO Ventil über Diagnosejob angesteuert. |

### RES_0XDBD7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECO_VENTIL_STROM_IST_WERT | A | - | motorola float | - | - | - | - | - | Aktueller Strom am Eco Ventil. |
| STAT_ECO_VENTIL_ZUSTAND_WERT | - | - | char | - | - | - | - | - | Zustand des Eco Ventil. |
| STAT_ECO_VENTIL_ZUSTAND_STEUERUNG | 0/1 | - | char | - | - | - | - | - | Ansteuerung Eco Ventil 0 - ECO Ventil aus Modell (Normalbetrieb SG) angesteuert 1 - ECO Ventil über Diagnosejob angesteuert. |

### RES_0XDBD8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STARTUP_STATUS | 0-n | - | unsigned long | - | - | - | - | - | - |
| STAT_OS_ASYNC_COUNTER | 0-n | - | unsigned char | - | - | - | - | - | - |
| STAT_FR_CTR_ASYNC_COUNTER | 0-n | - | unsigned char | - | - | - | - | - | - |
| STAT_OSEKOS_TIME_DIFF_WERT | - | - | long | - | - | - | - | - | - |
| STAT_GLOBAL_TIME_WERT | µs | - | unsigned long | - | - | - | - | - | - |
| STAT_LOCAL_TIME_WERT | µs | - | unsigned long | - | - | - | - | - | - |

### RES_0XDBD9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GIERRATE_SENSOR_WERT | °/s | - | motorola float | - | - | - | - | - | Gierrate. Gemittelter Wert aus SBS für Sensor 1 und 2. |
| STAT_GIERRATE_SENSOR_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT | - | - | - | Plausibilisierung Sensor   |

### RES_0XDBDA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_WERT | m/s² | - | motorola float | - | - | - | - | - | Querbeschleunigung (Gemittelter Wert Sensor 1 und 2) |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT | - | - | - | Plausibilisierung Sensor |

### RES_0XDBDB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAENGSBESCHLEUNIGUNG_SENSOR1_WERT | m/s² | - | motorola float | - | - | - | - | - | Längsbeschleunigung Sensor 1 |
| STAT_LAENGSBESCHLEUNIGUNG_SENSOR1_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT | - | - | - | Plausibilisierung Sensor 1 |

### RES_0XDBDC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DSC_TASTE_NR | 0-n | - | char | - | TAB_TASTER | - | - | - | Betätigungszustand DSC Taster |
| STAT_DSC_TASTE_ZUSTAND_NR | 0-n | - | char | - | TAB_TASTE_ZUSTAND | - | - | - | Funktionsbeurteilung DSC Taster |
| STAT_SPORT_TASTE_SPORT_NR | 0-n | - | char | - | TAB_TASTER | - | - | - | Betätigungszustand Fahrdynamik Taster in Richtung  Sport + (Sport-Taste) |
| STAT_SPORT_TASTE_SPORT_ZUSTAND_NR | 0-n | - | char | - | TAB_TASTE_ZUSTAND | - | - | - | Funktionsbeurteilung Sport Taster Richtung Sport |
| STAT_SPORT_TASTE_COMFORT_NR | 0-n | - | char | - | TAB_TASTER | - | - | - | Betätigungszustand Fahrdynamik Taster in Richtung Comfort -(Sport-Taste) |
| STAT_SPORT_TASTE_COMFORT_ZUSTAND_NR | 0-n | - | char | - | TAB_TASTE_ZUSTAND | - | - | - | Funktionsbeurteilung Sport Taster Richtung Comfort |
| STAT_SPORT_TASTE_NR | 0-n | - | char | - | TAB_TASTER_SPORT | - | - | - | Betätigungszustand Fahrdynamik Taster (Sport-Taste) |

### TAB_TASTER

| WERT | TEXT |
| --- | --- |
| 0 | Taster nicht gedrückt |
| 1 | Taster gedrückt |
| 2 | Taster ungültig |

### TAB_TASTE_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Fehler |
| 0xFF | Fehler |

### TAB_TASTER_SPORT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht betätigt |
| 0x01 | Taster Richtung Sport + |
| 0x02 | Taster Richtung Komfort - |
| 0xFF | unbekannter Zustand |

### RES_0XDBE6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SZL_SNR_OFFSET_GUELTIG | 0/1 | low | unsigned char | 0x01 | - | - | - | - | Zustand: SZL Seriennummer oder SZL Offset. Ist dieser Wert ungültig, kann AFS nicht in Betrieb genommen werden. Zuordnung: 0 = In Ordnung ; 1 = Nicht in Ordnung   |
| STAT_EPS_HANDMOMENT_GUELTIG | 0/1 | low | unsigned char | 0x02 | - | - | - | - | Zustand: EPS Handmoment. Ist dieser Wert ungültig, kann AFS nicht in Betrieb genommen werden. Zuordnung: 0 = In Ordnung ; 1 = Nicht in Ordnung  |
| STAT_FAHRERLENKWINKEL_GUELTIG | 0/1 | low | unsigned char | 0x04 | - | - | - | - | Zustand: Fahrerlenkwinkel. Ist dieser Wert ungültig, kann AFS nicht in Betrieb genommen werden. Zuordnung: 0 = In Ordnung ; 1 = Nicht in Ordnung  |
| STAT_EPS_QUALIFIER_GUELTIG | 0/1 | low | unsigned char | 0x08 | - | - | - | - | Zustand: EPS Funktionsqualifier. Ist dieser Wert ungültig, kann AFS nicht in Betrieb genommen werden. Zuordnung: 0 = In Ordnung ; 1 = Nicht in Ordnung  |
| STAT_EPS_RUECKFALLEBENE_GUELTIG | 0/1 | low | unsigned char | 0x10 | - | - | - | - | Zustand: EPS Rückfallebene. Ist dieser Wert ungültig, kann AFS nicht in Betrieb genommen werden. Zuordnung: 0 = In Ordnung ; 1 = Nicht in Ordnung  |
| STAT_ANSCHLAG_LINKS_GELERNT | 0/1 | low | unsigned char | 0x20 | - | - | - | - | Zustand: Linker Anschlag des AFS gelernt. Zuordnung: 0 = nicht gelernt ; 1 = gelernt |
| STAT_ANSCHLAG_RECHTS_GELERNT | 0/1 | low | unsigned char | 0x40 | - | - | - | - | Zustand: Rechter Anschlag des AFS gelernt. Zuordnung: 0 = nicht gelernt ; 1 = gelernt  |
| STAT_EPS_RITZELWINKEL_GUELTIG | 0/1 | low | unsigned char | 0x80 | - | - | - | - | Zustand: EPS Ritzelwinkel. Ist dieser Wert ungültig, kann AFS nicht in Betrieb genommen werden. Zuordnung: 0 = In Ordnung ; 1 = Nicht in Ordnung  |

### RES_0XDBEC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GIERRATE_1_SENSOR_ROHSIGNAL_WERT | °/s | - | motorola float | - | - | - | - | - | Rohsignal vom Gierratensensor 1 |
| STAT_GIERRATE_1_SENSOR_ROHSIGNAL_NR | 0-n | - | char | - | TAB_GUE_ROH | - | - | - | Plausibilisierung Sensor Rohsignal 1  |

### RES_0XDBED

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_1_ROHSIGNAL_WERT | m/s² | - | motorola float | - | - | - | - | - | Rohsignal Querbeschleunigungssensor 1 |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_1_ROHSIGNAL_NR | 0-n | - | char | - | TAB_GUE_ROH | - | - | - | Plausibilisierung Sensor 1 |

### RES_0XDBEE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_2_ROHSIGNAL_WERT | m/s² | - | motorola float | - | - | - | - | - | Rohsignal Querbeschleunigungssensor 2 |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_2_ROHSIGNAL_NR | 0-n | - | char | - | TAB_GUE_ROH | - | - | - | Plausibilisierung Sensor 2 |

### RES_0XDBEF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GIERRATE_SENSOR_2_ROHSIGNAL_WERT | °/s | - | motorola float | - | - | - | - | - | Rohsignal vom Gierratensensor 2 |
| STAT_GIERRATE_SENSOR_2_ROHSIGNAL_NR | 0-n | - | char | - | TAB_GUE_ROH | - | - | - | Plausibilisierung Sensor Rohsignal 2  |

### RES_0XDBF0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERVO_VENTIL_ZUSTAND_BIT0 | 0/1 | - | char | 0x01 | - | - | - | - | Fehlerzustand Servo Ventil 0 - SERVO Ventil fehlerhaft 1 - SERVO Ventil in Ordnung |
| STAT_SERVO_VENTIL_ZUSTAND_BIT1 | 0/1 | - | char | 0x02 | - | - | - | - | Fehlerzustand Servo Ventil 0 - SERVO Ventil nicht verbaut 1 - SERVO Ventil verbaut |
| STAT_SERVO_VENTIL_ZUSTAND_BIT3 | 0/1 | - | char | 0x08 | - | - | - | - | Fehlerzustand Servo Ventil 0 - SERVO Ventil nicht verfügbar 1 - SERVO Ventil verfügbar |

### RES_0XDBF1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECO_VENTIL_ZUSTAND_BIT0 | 0/1 | - | char | 0x01 | - | - | - | - | Fehlerzustand Eco Ventil 0 - Eco Ventil fehlerhaft 1 - Eco Ventil in Ordnung |
| STAT_ECO_VENTIL_ZUSTAND_BIT1 | 0/1 | - | char | 0x02 | - | - | - | - | Fehlerzustand ECO Ventil 0 - ECO Ventil nicht verbaut 1 - ECO Ventil verbaut |
| STAT_ECO_VENTIL_ZUSTAND_BIT3 | 0/1 | - | char | 0x08 | - | - | - | - | Fehlerzustand ECO Ventil 0 - ECO Ventil nicht verfügbar 1 - ECO Ventil verfügbar |

### RES_0XDBF2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OPERATINGSYSTEM_NR | 0-n | - | char | - | TAB_OPERATINGSYSTEM_ICMQL | - | - | - | Zustand der Statemaschine |
| STAT_OS_ALIVE | 0-n | - | unsigned long | - | - | - | - | - | Alive Counter des Operating system |

### TAB_OPERATINGSYSTEM_ICMQL

| WERT | TEXT |
| --- | --- |
| 0 | Normal Betrieb |
| 1 | Aufstarten |
| 2 | Fehler Betrieb |

### RES_0XDBF3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAENGSBESCHLEUNIGUNG_SENSOR_1_ROHSIGNAL_WERT | m/s² | - | motorola float | - | - | - | - | - | Rohsignal Längsbeschleunigungssensor 1 |
| STAT_LAENGSBESCHLEUNIGUNG_SENSOR_1_ROHSIGNAL_NR | 0-n | - | char | - | TAB_GUE_ROH | - | - | - | Plausibilisierung Sensor 1 |

### TAB_GUE_ROH

| WERT | TEXT |
| --- | --- |
| 0 | Gültig |
| 1 | Fehler |
| 2 | Timeout |
| 4 | Double Sample |
| 8 | Signal noch nie empfangen |
| 16 | Nutzsignalqualifier des Signals enthält die Ungültigkeitsbezeichnung |

### TAB_HC_AKTIV

| WERT | TEXT |
| --- | --- |
| 0 | unbekannt |
| 1 | inaktiv |
| 2 | aktiv |
| F | ungültig |

### ARG_0XDBF9

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_LED | 0-n | - | char | - | TAB_LED_AUSSENSPIEGEL | - | - | - | - | - | Ansteuerung der LED im Spiegel durch HC |

### TAB_LED_AUSSENSPIEGEL

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | Links Dauerlicht |
| 0x02 | Links Blinken |
| 0x03 | Rechts Dauerlicht |
| 0x04 | Rechts Blinken |
| 0x05 | Beidseitig Dauerlicht |
| 0x06 | Beidseitig Blinken |

### ARG_0XDBFA

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_VIBRATION | 0-n | - | char | - | TAB_AKTIV | - | - | - | - | - | Ansteuern der Vibration |

### TAB_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Inaktiv |
| 0x01 | Aktiv |
| 0xFF | unbekannt |

### RES_0XDBFB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESAMTKILOMETER_FAHRZEUG_0_WERT | km | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamt KM Stand |
| STAT_ANZAHL_DEAKTIVIERUNG_ACC_BREMSPEDAL_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Anzahl ACC Deaktivierungen per Bremspedal   |
| STAT_ANZAHL_DEAKTIVIERUNG_ACC_BEDIENUNG_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Anzahl ACC Deaktivierungen per Bedienung   |
| STAT_ANZAHL_DEAKTIVIERUNG_ACC_REGELFUNKTION_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Anzahl ACC Deaktivierungen durch Regelfunktion   |
| STAT_ANZAHL_DEAKTIVIERUNG_ACC_BLIND_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Anzahl ACC Deaktivierungen durch Sensorenblindheit   |
| STAT_ANZAHL_DEAKTIVIERUNG_ACC_V_SCHWELLE_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Anzahl ACC Deaktivierungen durch Geschwindigkeitsschwelle   |
| STAT_ANZAHL_DEAKTIVIERUNG_DCC_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Anzahl DCC Deaktivierungen    |
| STAT_ANZAHL_AKTIVIERUNG_ACC_RESUME_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Anzahl ACC Aktivierungen per Resume Taste |
| STAT_ANZAHL_AKTIVIERUNG_ACC_SETZEN_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Anzahl ACC Aktivierungen per Set Taste |
| STAT_ANZAHL_UEBERTRETEN_ACC_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Anzahl ACC Übertretungen durch den Fahrer |
| STAT_GESAMTDAUER_UEBERTRETEN_ACC_0_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtdauer der ACC Übertretungen durch den Fahrer |
| STAT_BETRIEBSZEIT_DCC_0_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtzeit mit aktivem DCC |
| STAT_WUNSCHGESCHWINDIGKEIT_ACC_INTEGRAL_ABSTAND_1_0_WERT | km/h | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Integral der Wunschgeschwindigkeit für ACC bei der Abstandsstufe 1 |
| STAT_WUNSCHGESCHWINDIGKEIT_ACC_INTEGRAL_ABSTAND_2_0_WERT | km/h | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Integral der Wunschgeschwindigkeit für ACC bei der Abstandsstufe 2 |
| STAT_WUNSCHGESCHWINDIGKEIT_ACC_INTEGRAL_ABSTAND_3_0_WERT | km/h | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Integral der Wunschgeschwindigkeit für ACC bei der Abstandsstufe 3 |
| STAT_WUNSCHGESCHWINDIGKEIT_ACC_INTEGRAL_ABSTAND_4_0_WERT | km/h | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Integral der Wunschgeschwindigkeit für ACC bei der Abstandsstufe 4.   |
| STAT_BETRIEBSZEIT_ACC_ABSTANDSSTUFE_1_0_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamte ACC Betriebszeit bei eingestellter Abstandsstufe 1   |
| STAT_ANZAHL_UEBERNAHMEAUFFORDERUNG_ABSTAND_1_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Anzahl der Anforderungen für die Fahrerübernahme bei eingestellter ACC Abstandsstufe 1   |
| STAT_BETRIEBSZEIT_ACC_ABSTANDSSTUFE_2_0_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamte ACC Betriebszeit bei eingestellter Abstandsstufe 2   |
| STAT_ANZAHL_UEBERNAHMEAUFFORDERUNG_ABSTAND_2_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Anzahl der Anforderungen für die Fahrerübernahme bei eingestellter ACC Abstandsstufe 2   |
| STAT_BETRIEBSZEIT_ACC_ABSTANDSSTUFE_3_0_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamte ACC Betriebszeit bei eingestellter Abstandsstufe 3   |
| STAT_ANZAHL_UEBERNAHMEAUFFORDERUNG_ABSTAND_3_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Anzahl der Anforderungen für die Fahrerübernahme bei eingestellter ACC Abstandsstufe 3   |
| STAT_BETRIEBSZEIT_ACC_ABSTANDSSTUFE_4_0_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamte ACC Betriebszeit bei eingestellter Abstandsstufe 4   |
| STAT_ANZAHL_UEBERNAHMEAUFFORDERUNG_ABSTAND_4_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Anzahl der Anforderungen für die Fahrerübernahme bei eingestellter ACC Abstandsstufe 4   |
| STAT_RELATIVER_KILOMETERZAEHLER_0_WERT | km | - | unsigned int | - | - | 2.0 | - | - | FASTA Auswertung. Kilometeranzahl seit der letzten Archivierung der Bedienstatistikdaten ins Protokoll    |
| STAT_GESAMTBETRIEBSZEIT_FAHRZEUG_0_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des Fahrzeug   |
| STAT_GESAMTBETRIEBSZEIT_ACC_0_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des ACC   |
| STAT_GESAMTBETRIEBSZEIT_DCC_0_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des DCC   |
| STAT_ANZAHL_DEAKTIVIERUNG_ACC_GESAMT_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der ACC-Deaktivierungen   |
| STAT_ANZAHL_AENDERUNG_WUNSCHABSTAND_ACC_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschabstandsänderungen bei ACC   |
| STAT_ANZAHL_AENDERUNG_WUNSCHGESCHWINDIGKEIT_ACC_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschgeschwindigkeitsänderungen bei ACC   |
| STAT_ANZAHL_UEBERNAHMEAUFFORDERUNG_ACC_GESAMT_0 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Fahrerübernahmeaufforderungen bei ACC   |
| STAT_IBRK_ANZAHL_ANBREMSEN_0 | 0-n | - | unsigned int | - | - | - | - | - | FASTA Auswertung. Anzahl der Anbremsungen  |
| STAT_IBRK_DAUER_ANBREMSEN_0_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Dauer der Anbremsungen  |
| STAT_IBRK_ANZAHL_AUSLOESUNG_STUFE_1_0 | 0-n | - | unsigned int | - | - | - | - | - | FASTA Auswertung. Anzahl der Druckaufbauphase mit PBA-Parametrierung leicht erhöhte Empfindlichkeit.  |
| STAT_IBRK_ANZAHL_AUSLOESUNG_STUFE_2_0 | 0-n | - | unsigned int | - | - | - | - | - | FASTA Auswertung. Anzahl der Druckaufbauphase mit PBA-Parametrierung leicht erhöhte Empfindlichkeit.  |
| STAT_IBRK_ANZAHL_AUSLOESUNG_STUFE_3_0 | 0-n | - | unsigned int | - | - | - | - | - | FASTA Auswertung. Anzahl der Druckaufbauphase mit PBA-Parametrierung leicht erhöhte Empfindlichkeit.  |
| STAT_IBRK_ANZAHL_STANDARDAUSLOESUNG_0 | 0-n | - | unsigned int | - | - | - | - | - | FASTA Auswertung. Anzahl der Druckaufbauphase mit Standard Parameter  |
| STAT_IBRK_ANZAHL_VORBEFUELLUNG_0 | 0-n | - | unsigned int | - | - | - | - | - | FASTA Auswertung. Anzahl der Vorbefüllungen  |
| STAT_IBRK_DAUER_AUSLOESUNG_DBC_0_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Dauer der Druckaufbauphasen  |
| STAT_IBRK_DAUER_VORBEFUELLUNG_0_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Dauer der Vorbefuellung  |

### ARG_0XDBFC

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AL_INITMODE | 0/1 | - | char | - | - | - | - | - | - | - | Betriebsart für Init mode (1 = aktiviert; 0 = deaktiviert) |

### TAB_AL_INITMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | AL Initmode deaktiviert |
| 0x01 | AL Initmode aktiviert |

### RES_0XDBFE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORLAGEWINKEL_ISTWERT_HSR_GRAD_WERT | Grad | - | motorola float | - | - | - | - | - | Motorlagewinkel Absoult Istwert in Grad Quantisierung: ( (PH) = 0,04395 * (HEX) [rad] ) Skalierungsfaktor: ( (PH)[grad] = 180 / 3.141592 * (HEX) ) Wertebereich: ( -1440 grad...+1440 grad )  |
| STAT_MOTORLAGEWINKEL_ISTWERT_SR_QUALIFIER_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | Beurteilung des HSR Motorlagewinkel Istwert 0 -- > Initialisierung 1 -- > Signalwert ist gueltig und abgesichert 2 -- > Signal ist gueltig 3 -- > Signal ist nicht vertrauenswuerdig 4 -- > Ersatzwert ist im Nutzsignal gesetzt 5 -- > Signal zu oft entprellt 6 -- > Signalwert ist ungueltig 7 -- > Sensor nicht vorhanden oder Signal ungueltig  |
| STAT_HSR_SERVICEQUALIFIER_NR | 0-n | - | char | - | TAB_OPERATINGSYSTEM_ICM_HSR | - | - | - | Beurteilung des HSR Service qualifier: 33 -- > Drive Standby  34 -- > Drive 49 -- > Drive Standby, USW1 53 -- > Drive Standby, USW2  57 -- > Drive Standby, USW3 54 -- > Drive, USW1 50 -- > Drive, USW2 58 -- > Drive, USW3 104 -- > Error 128 -- > Initialisierung 224 -- > Postrun 225 -- > ReadyforDrive 227 -- > Drive_RampZero 228 -- > WaitForRLWSet 233 -- > ReadyForDrive Unterspannung 235 -- > Drive_RampZero Unterspannung 255 -- > Invalid   |
| STAT_HSR_SERVICEQUALIFIER_MLW_IST_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT | - | - | - | Beurteilung des MLW Istwert Service qualifier: 0 -- > Initialisierung 1 -- > Signalwert ist gueltig und abgesichert 2 -- > Signal ist gueltig 3 -- > Signal ist nicht vertrauenswuerdig 4 -- > Ersatzwert ist im Nutzsignal gesetzt 5 -- > Signal zu oft entprellt 6 -- > Signalwert ist ungueltig 7 -- > Sensor nicht vorhanden oder Signal ungueltig  |
| STAT_MOTORLAGEWINKEL_SOLLWERT_HSR_GRAD_WERT | Grad | - | motorola float | - | - | - | - | - | Motorlagewinkel Absoult Sollwert in Grad Quantisierung: ( (PH) = 0,04395 * (HEX) [rad] ) Skalierungsfaktor: ( (PH)[grad] = 180 / 3.141592 * (HEX) ) Wertebereich: ( -1440 grad...+1440 grad )  |
| STAT_MOTORLAGEWINKEL_SOLLWERT_HSR_QUALIFIER_NR | 0-n | - | char | - | TAB_HSR_QUAL | - | - | - | Qualifier für MLW von HSR |
| STAT_ZFMDKVQ_I_ZS_HSRGIERKOMP_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_ZFMDKVQ_I_ZS_HSRFKT_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_ZFMDKRQ_I_ZS_RQ_HSR_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_ZFMDKSQ_I_ZS_SQ_HSR_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_ZFMDKVQ_B_LWHA_STG_UMG_FMP_S1_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_ZFMDKVQ_B_LWHA_STG_UMG_FMP_S2_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_ZFMABLEN_I_HSR_AKT_ZST_WERT | - | - | unsigned char | - | - | - | - | - | - |

### TAB_OPERATINGSYSTEM_ICM_HSR

| WERT | TEXT |
| --- | --- |
| 33 | Drive Standby |
| 34 | Drive |
| 49 | Drive Standby, USW1 |
| 50 | Drive, USW2 |
| 53 | Drive Standby, USW2 |
| 54 | Drive, USW1 |
| 57 | Drive Standby, USW3 |
| 58 | Drive, USW3 |
| 104 | Error |
| 128 | Initialisierung |
| 224 | POSTRUN |
| 225 | ReadyforDrive |
| 227 | Drive_RampZero |
| 228 | WaitForRLWSet |
| 233 | ReadyForDrive Unterspannung |
| 235 | Drive_RampZero Unterspannung |
| 255 | ungültiges Signal |

### TAB_HSR_QUAL

| WERT | TEXT |
| --- | --- |
| 4 | Sollwert umsetzen, Diagnosefreigabe |
| 32 | Sollwert umsetzen |
| 96 | Fehler |
| 112 | Sollwert nicht vorhanden |
| 128 | Initialisierung |
| 224 | Sollwert nicht umsetzen |
| 228 | Sollwert nicht umsetzen, Diagnosefreigabe |
| 255 | Signal ungültig |

### ARG_0XDBFF

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | - | int | - | TAB_ADAPTIVDATEN | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | - | motorola float | - | - | - | - | - | - | - | Übergebener Wert |

### TAB_ADAPTIVDATEN

| WERT | TEXT |
| --- | --- |
| 0 | VCH Lernwerttoleranz (Beide Kurven) |
| 1 | VCH Lernwerttoleranz (Linke Kurve) |
| 2 | VCH Lernwerttoleranz (Rechte Kurve) |
| 3 | VCH Lernwert (beide Kurven) |
| 4 | VCH Lernwert (Linke Kurve) |
| 5 | VCH Lernwert (Rechte Kurve) |
| 6 | Korrekturfaktor für die Rollrate zur Kompensation des Gierratenübersprechens |
| 7 | Offsetwert des Längsbeschleunigungssensors 1 |
| 8 | Signaltoleranz des Längsbeschleunigungsnutzsignals  |
| 9 | Offsetwert des Querbeschleunigungssensors 1 |
| 10 | Signaltoleranz des Querbeschleunigungsnutzsignals 1 |
| 11 | Offsetwert des Querbeschleunigungssensors 2 |
| 12 | Signaltoleranz des Querbeschleunigungsnutzsignals  |
| 13 | Offsetwert des Ritzelwinkels |
| 14 | Signaltoleranz des Ritzelwinkelnutzsignal |
| 15 | Offsetwert des Rollratensensors 1 |
| 16 | Signaltoleranz des Rollratennutzsignals 1 |
| 17 | Offsetwert des Gierratensensors 1 aus Fahrtabgleic |
| 18 | Offsetwert des Gierratensensors 1 aus Stillstandsabgleich |
| 19 | Signaltoleranz des Gierratennutzsignals 1 |
| 20 | Offsetwert des Gierratensensors 2 aus Fahrtabgleic |
| 21 | Offsetwert des Gierratensensors 2 aus Stillstandsabgleich |
| 22 | Signaltoleranz des Gierratennutzsignals 2 |
| 23 | Empfindlichkeit des Längsbeschleunigungssensors 1 |
| 24 | Radtoleranz hinten links |
| 25 | Radtoleranz hinten rechts |
| 26 | Radtoleranz vorne links |
| 27 | Radtoleranz vorne rechts |
| 28 | Empfindlichkeit Rollratensensor 1 |
| 29 | Empfindlichkeit Gierratensensor 1 |
| 30 | Empfindlichkeit Gierratensensor 2 |
| 31 | Lernwert für die Lenkwinkelkodierüberwachung |
| 32 | Lernwert für die Vorzeichenüberwachung Querbeschleunigung 1 |
| 33 | Lernwert für die Vorzeichenüberwachung Querbeschleunigung 2 |
| 34 | Lernwert für die Vorzeichenüberwachung Gierrate 1 |
| 35 | Lernwert für die Vorzeichenüberwachung Gierrate 2 |
| 36 | Lernwert für die Vorzeichenüberwachung Gierrate aus Radgeschwindigkeiten |
| 37 | Status Schneekettenerkennung |
| 38 | Offset der Längsbeschleunigung aus Motormoment |
| 39 | Offset des Lenkwinkelabgleich zur Gierrate |
| 40 | Bestätigung EPS Positionsoffset |
| 41 | Korrekturzählerwert EPS Positionsoffset |
| 255 | unbekannter Zustand |

### RES_0XDC01

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SBS2EV_R_VCH_INTRO_B_WERT | m/s² | - | motorola float | - | - | - | - | - | VCH Lernwerttoleranz (Beide Kurven) |
| STAT_SBS2EV_R_VCH_INTRO_L_WERT | m/s² | - | motorola float | - | - | - | - | - | VCH Lernwerttoleranz (Linke Kurve) |
| STAT_SBS2EV_R_VCH_INTRO_R_WERT | m/s² | - | motorola float | - | - | - | - | - | VCH Lernwerttoleranz (Rechte Kurve) |
| STAT_SBS_2EV_R_VCH_WERT0_B_WERT | m/s² | - | motorola float | - | - | - | - | - | VCH Lernwert (Beide Kurven) |
| STAT_SBS_2EV_R_VCH_WERT0_L_WERT | m/s² | - | motorola float | - | - | - | - | - | VCH Lernwert (Links Kurven) |
| STAT_SBS_2EV_R_VCH_WERT0_R_WERT | m/s² | - | motorola float | - | - | - | - | - | VCH Lernwert (Rechts Kurven) |
| STAT_COMP_KYR_XR1_WERT | - | - | motorola float | - | - | - | - | - | Korrekturfaktor Rollrate (Kompensation Gierratenübersprechen) |
| STAT_COMP_OFS_AX1_WERT | m/s² | - | motorola float | - | - | - | - | - | Offset Längsbeschleunigungssensor 1 |
| STAT_COMP_OFS_AX1_TOL_WERT | m/s² | - | motorola float | - | - | - | - | - | Signaltoleranz Längsbeschleunigung 1 |
| STAT_COMP_OFS_AY1_WERT | m/s² | - | motorola float | - | - | - | - | - | Offset Querbeschleunigungssensor 1 |
| STAT_COMP_OFS_AY1_TOL_WERT | m/s² | - | motorola float | - | - | - | - | - | Signaltoleranz Querbeschleunigung 1 |
| STAT_COMP_OFS_AY2_WERT | m/s² | - | motorola float | - | - | - | - | - | Offset Querbeschleunigungssensor 2 |
| STAT_COMP_OFS_AY2_TOL_WERT | m/s² | - | motorola float | - | - | - | - | - | Signaltoleranz Querbeschleunigung 2 |
| STAT_COMP_OFS_DE_WERT | rad | - | motorola float | - | - | - | - | - | Offset Ritzelwinkel |
| STAT_COMP_OFS_DE_TOL_WERT | rad | - | motorola float | - | - | - | - | - | Signaltoleranz Ritzelwinkel |
| STAT_COMP_OFS_XR1_WERT | rad/s | - | motorola float | - | - | - | - | - | Offset Rollratensensor 1 |
| STAT_COMP_OFS_XR1_TOL_WERT | rad/s | - | motorola float | - | - | - | - | - | Signaltoleranz Rollrate 1 |
| STAT_COMP_OFS_YR1_DRV_WERT | rad/s | - | motorola float | - | - | - | - | - | Offset Gierratensensor 1 (aus Fahrtabgleich) |
| STAT_COMP_OFS_YR1_STST1_WERT | rad/s | - | motorola float | - | - | - | - | - | Offset Gierratensensor 1 (aus Stillstandsabgleich) |
| STAT_COMP_OFS_YR1_TOL_WERT | rad/s | - | motorola float | - | - | - | - | - | Signaltoleranz Gierrate 1 |
| STAT_COMP_OFS_YR2_DRV_WERT | rad/s | - | motorola float | - | - | - | - | - | Offset Gierratensensor 2 (aus Fahrtabgleich) |
| STAT_COMP_OFS_YR2_STST_WERT | rad/s | - | motorola float | - | - | - | - | - | Offset Gierratensensor 2 (aus Stillstandsabgleich) |
| STAT_COMP_OFS_YR2_TOL_WERT | rad/s | - | motorola float | - | - | - | - | - | Signaltoleranz Gierrate 2 |
| STAT_COMP_SENS_AX1_WERT | - | - | motorola float | - | - | - | - | - | Empfindlichkeit Längsbeschleunigungssensor 1 |
| STAT_COMP_SENS_VWHL_HL_WERT | - | - | motorola float | - | - | - | - | - | Radtoleranz hinten links |
| STAT_COMP_SENS_VWHL_HR_WERT | - | - | motorola float | - | - | - | - | - | Radtoleranz hinten rechts |
| STAT_COMP_SENS_VWHL_VL_WERT | - | - | motorola float | - | - | - | - | - | Radtoleranz vorne links |
| STAT_COMP_SENS_VWHL_VR_WERT | - | - | motorola float | - | - | - | - | - | Radtoleranz vorne rechts |
| STAT_COMP_SENS_XR1_WERT | - | - | motorola float | - | - | - | - | - | Empfindlichkeit Rollratensensor 1 |
| STAT_COMP_SENS_YR1_WERT | - | - | motorola float | - | - | - | - | - | Empfindlichkeit Gierratensensor 1 |
| STAT_COMP_SENS_YR2_WERT | - | - | motorola float | - | - | - | - | - | Empfindlichkeit Gierratensensor 2 |
| STAT_I_SBS_3DE_IDE_CODE_WERT | - | - | motorola float | - | - | - | - | - | Lernwert Lenkwinkelkodierüberwachung |
| STAT_I_AY1_SGN_WERT | - | - | motorola float | - | - | - | - | - | Lernwert Vorzeichenüberwachung Querbeschleunigung 1 |
| STAT_I_AY2_SGN_WERT | - | - | motorola float | - | - | - | - | - | Lernwert Vorzeichenüberwachung Querbeschleunigung 2 |
| STAT_I_YR1_SGN_WERT | - | - | motorola float | - | - | - | - | - | Lernwert Vorzeichenüberwachung Gierrate 1 |
| STAT_I_YR2_SGN_WERT | - | - | motorola float | - | - | - | - | - | Lernwert Vorzeichenüberwachung Gierrate 2 |
| STAT_I_YR_WH_SGN_WERT | - | - | motorola float | - | - | - | - | - | Lernwert Vorzeichenüberwachung Gierrate (aus Radgeschwindigkeiten) |
| STAT_B_STATUS_SK_WERT | - | - | motorola float | - | - | - | - | - | Status Schneekettenerkennung |
| STAT_ZFMFS_OFS_AXM_WERT | - | - | motorola float | - | - | - | - | - | Offset Längsbeschleunigung Motormoment |
| STAT_COMP_OFS_DEYR_WERT | - | - | motorola float | - | - | - | - | - | Offset Lenkwinkelabgleich Gierrate |

### RES_0XDC02

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HARDWAREKENNUNG_NR | 0-n | - | char | - | TAB_HARDAREMUSTER | - | - | - | verbauter Musterstand |
| STAT_SENSORKENNUNG_NR | 0-n | - | char | - | TAB_SENSORCLUSTER | - | - | - | verbauter Sensorcluster |
| STAT_HARDWAREMUSTER_WERT | - | - | data[1] | - | - | - | - | - | Hardware Muster |
| STAT_ISTUFE_WERT | - | - | data[1] | - | - | - | - | - | I_Stufe |
| STAT_SW_NUMMER_WERT | - | - | data[1] | - | - | - | - | - | SW Nummer |
| STAT_INFO1_WERT | - | - | data[1] | - | - | - | - | - | Info fehlt |
| STAT_INFO2_WERT | - | - | data[1] | - | - | - | - | - | Info fehlt |
| STAT_INFO3_WERT | - | - | data[1] | - | - | - | - | - | Info fehlt |
| STAT_INFO4_WERT | - | - | data[1] | - | - | - | - | - | Info fehlt |
| STAT_INFO5_WERT | - | - | data[1] | - | - | - | - | - | Info fehlt |

### TAB_HARDAREMUSTER

| WERT | TEXT |
| --- | --- |
| 0 | B0 - Muster |
| 1 | B1 - Muster |
| 2 | C0 - Muster |
| 3 | C1 - Muster |
| 4 | C2 - Muster |
| 5 | C3 - Muster |
| 6 | D0 - Muster |
| 7 | D1 - Muster |
| 8 | D2 - Muster |
| 9 | D3 - Muster |
| 10 | D4 - Muster |
| 11 | D5 - Muster |
| 12 | D4a - Muster |
| 13 | D6 - Muster |
| 14 | D7 - Muster |
| 15 | EVA - Board |
| 255 | unbekannte Hardware |

### TAB_SENSORCLUSTER

| WERT | TEXT |
| --- | --- |
| 0x01 | einfache Sensorik |
| 0x02 | redundante Sensorik |
| 0xFF | unbekannter Sensorcluster |

### ARG_0XDC04

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | - | - | - | - | - | 1: Speichern antriggern. Einmalige Ausführung. Kein Setzen auf 0 erforderlich. |

### RES_0XDC05

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_VL_WERT | mm | - | motorola float | - | - | 1000.0 | - | - | Ausgabe des Höhenstandes vorn links in mm. |
| STAT_HOEHENSTAND_VR_WERT | mm | - | motorola float | - | - | 1000.0 | - | - | Ausgabe des Höhenstandes vorn rechts in mm. |
| STAT_HOEHENSTAND_HL_WERT | mm | - | motorola float | - | - | 1000.0 | - | - | Ausgabe des Höhenstandes hinten links in mm. |
| STAT_HOEHENSTAND_HR_WERT | mm | - | motorola float | - | - | 1000.0 | - | - | Ausgabe des Höhenstandes hinten rechts in mm. |

### RES_0XDC06

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_SENSOR_VL_NR | 0-n | - | int | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustandsabfrage Höhenstandssensor vorn links. |
| STAT_HOEHENSTAND_SENSOR_VR_NR | 0-n | - | int | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustandsabfrage Höhenstandssensor vorn rechts. |
| STAT_HOEHENSTAND_SENSOR_HL_NR | 0-n | - | int | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustandsabfrage Höhenstandssensor hinten links. |
| STAT_HOEHENSTAND_SENSOR_HR_NR | 0-n | - | int | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustandsabfrage Höhenstandssensor hinten rechts. |

### TAB_HOHENSTAND_SENSOR

| WERT | TEXT |
| --- | --- |
| 0 | Sensor in Ordnung |
| 1 | Sensor fehlerhaft |
| 255 | Sensor fehlerhaft |

### RES_0XDC07

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_ROHWERT_VL_WERT | V | - | int | - | - | - | 1000.0 | - | Ausgabe des Rohsignal des Sensor Höhenstand vorn links in mV. |
| STAT_HOEHENSTAND_ROHWERT_VR_WERT | V | - | int | - | - | - | 1000.0 | - | Ausgabe des Rohsignal des Sensor Höhenstand vorn rechts in mV. |
| STAT_HOEHENSTAND_ROHWERT_HL_WERT | V | - | int | - | - | - | 1000.0 | - | Ausgabe des Rohsignal des Sensor Höhenstand hinten links in mV. |
| STAT_HOEHENSTAND_ROHWERT_HR_WERT | V | - | int | - | - | - | 1000.0 | - | Ausgabe des Rohsignal des Sensor Höhenstand hinten rechts in mV. |

### RES_0XDC08

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_VERSORGUNG_VL_WERT | V | - | int | - | - | - | 1000.0 | - | Ausgabe der Versorgungsspannung des Sensor Höhenstand vorn links in mV. |
| STAT_HOEHENSTAND_VERSORGUNG_VR_WERT | V | - | int | - | - | - | 1000.0 | - | Ausgabe der Versorgungsspannung des Sensor Höhenstand vorn rechts in mV. |
| STAT_HOEHENSTAND_VERSORGUNG_HL_WERT | V | - | int | - | - | - | 1000.0 | - | Ausgabe der Versorgungsspannung des Sensor Höhenstand hinten links in mV. |
| STAT_HOEHENSTAND_VERSORGUNG_HR_WERT | V | - | int | - | - | - | 1000.0 | - | Ausgabe der Versorgungsspannung des Sensor Höhenstand hinten rechts in mV. |

### ARG_0XDC09

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_HOEHENSTAND_VL_WERT | mm | - | motorola float | - | - | - | - | - | -50.0 | 50.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand vorn links in mm. |
| OFFSET_HOEHENSTAND_VR_WERT | mm | - | motorola float | - | - | - | - | - | -50.0 | 50.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand vorn rechts in mm. |
| OFFSET_HOEHENSTAND_HL_WERT | mm | - | motorola float | - | - | - | - | - | -50.0 | 50.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand hinten links in mm. |
| OFFSET_HOEHENSTAND_HR_WERT | mm | - | motorola float | - | - | - | - | - | -50.0 | 50.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand hinten rechts in mm. |

### RES_0XDC0B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRADIENT_C0_VL_WERT | mV/mm | - | motorola float | - | - | - | - | - | Werksjustage-Gradient_C0 vorne links (mV/mm) |
| STAT_GRADIENT_C0_VR_WERT | mV/mm | - | motorola float | - | - | - | - | - | Werksjustage-Gradient_C0 vorne rechts (mV/mm) |
| STAT_GRADIENT_C0_HL_WERT | mV/mm | - | motorola float | - | - | - | - | - | Werksjustage-Gradient_C0 hinten links (mV/mm) |
| STAT_GRADIENT_C0_HR_WERT | mV/mm | - | motorola float | - | - | - | - | - | Werksjustage-Gradient_C0 hinten rechts (mV/mm) |
| STAT_GRADIENT_C1_VL_WERT | mV/mm | - | motorola float | - | - | - | - | - | Werksjustage-Gradient_C1 vorne links (mV/mm) |
| STAT_GRADIENT_C1_VR_WERT | mV/mm | - | motorola float | - | - | - | - | - | Werksjustage-Gradient_C1 vorne rechts (mV/mm) |
| STAT_GRADIENT_C1_HL_WERT | mV/mm | - | motorola float | - | - | - | - | - | Werksjustage-Gradient_C1 hinten links (mV/mm) |
| STAT_GRADIENT_C1_HR_WERT | mV/mm | - | motorola float | - | - | - | - | - | Werksjustage-Gradient_C1 hinten rechts (mV/mm) |
| STAT_OFFSET_S0_VL_WERT | mm | - | motorola float | - | - | - | - | - | Werksjustage-Offset_S0 vorne links (mm) |
| STAT_OFFSET_S0_VR_WERT | mm | - | motorola float | - | - | - | - | - | Werksjustage-Offset_S0 vorne rechts (mm) |
| STAT_OFFSET_S0_HL_WERT | mm | - | motorola float | - | - | - | - | - | Werksjustage-Offset_S0 hinten links (mm) |
| STAT_OFFSET_S0_HR_WERT | mm | - | motorola float | - | - | - | - | - | Werksjustage-Offset_S0 hinten rechts (mm) |
| STAT_OFFSET_S1_VL_WERT | mm | - | motorola float | - | - | - | - | - | Werksjustage-Offset_S1 vorne links (mm) |
| STAT_OFFSET_S1_VR_WERT | mm | - | motorola float | - | - | - | - | - | Werksjustage-Offset_S1 vorne rechts (mm) |
| STAT_OFFSET_S1_HL_WERT | mm | - | motorola float | - | - | - | - | - | Werksjustage-Offset_S1 hinten links (mm) |
| STAT_OFFSET_S1_HR_WERT | mm | - | motorola float | - | - | - | - | - | Werksjustage-Offset_S1 hinten rechts (mm) |

### TAB_KALIBRIERDATEN

| WERT | TEXT |
| --- | --- |
| 0 | Keine korrekten Kalibrierdaten vorhanden |
| 1 | Kalibrierdaten vorhanden |
| 255 | unbekannter Zustand |

### TAB_FAHRDYNAMIK

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Traktion |
| 0x02 | Comfort |
| 0x03 | Normal (Basis) |
| 0x04 | Sport |
| 0x05 | Sport + |
| 0x06 | DSC Off (Race) |
| 0xFF | Unbekannter Wert |

### RES_0XDC13

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIVDATEN_RUECKSETZEN_AJ_WERT | - | - | data[2] | - | - | - | - | - | Adaptivdaten Grundeinstellung gesetzt |
| STAT_ADAPTIVDATEN_RUECKSETZEN_NR | 0-n | - | int | - | TAB_ADAPTIVDATEN_RESET | - | - | - | Adaptivdaten Grundeinstellung gesetzt |
| STAT_AX_AY_ABGLEICH_AJ_WERT | - | - | data[1] | - | - | - | - | - | Ablgeich Beschleunigungssensoren erfolgt |
| STAT_AX_AY_ABGLEICH_NR | 0-n | - | char | - | TAB_AX_AY_ABGLEICH | - | - | - | Ablgeich Beschleunigungssensoren erfolgt |
| STAT_ADAPTIVDATEN_WERKSMODUS_AJ_WERT | - | - | data[2] | - | - | - | - | - | Adaptivdaten Werkseinstellung gesetzt |
| STAT_ADAPTIVDATEN_WERKSMODUS_NR | 0-n | - | char | - | TAB_ADAPTIVDATEN_WERK | - | - | - | Adaptivdaten Werkseinstellung gesetzt |
| STAT_ADAPTIVDATEN_LERNWERTE_AKTIV_AJ_WERT | - | - | data[1] | - | - | - | - | - | Adaptivdaten im Lernbereich |
| STAT_ADAPTIVDATEN_LERNWERTE_AKTIV_NR | 0-n | - | char | - | TAB_ADAPTIVDATEN_LERNEN | - | - | - | Adaptivdaten im Lernbereich |

### TAB_ADAPTIVDATEN_RESET

| WERT | TEXT |
| --- | --- |
| 0x00 | Adaptivdaten nicht auf Defaultwerte gesetzt |
| 0x01 | Adaptivdaten auf Defaultwerte gesetzt |
| 0xFF | unbekannter Zustand |

### TAB_AX_AY_ABGLEICH

| WERT | TEXT |
| --- | --- |
| 0x00 | Abgleich ax_ay muss noch erfolgen |
| 0x01 | Abgleich ax_ay erfolgt |
| 0xFF | unbekannter Zustand |

### TAB_ADAPTIVDATEN_WERK

| WERT | TEXT |
| --- | --- |
| 0x00 | Adaptivdaten nicht auf Werksdaten gesetzt |
| 0x01 | Adaptivdaten auf Werksdaten gesetzt |
| 0xFF | unbekannter Zustand |

### TAB_ADAPTIVDATEN_LERNEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Adaptivdaten nicht im Lernbereich |
| 0x01 | Adaptivdaten im Lernbereich |
| 0xFF | unbekannter Zustand |

### RES_0XDC20

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELATIVER_KILOMETERZAEHLER_1_WERT | km | - | unsigned int | - | - | 2.0 | - | - | FASTA Auswertung. Kilometeranzahl seit der letzten Archivierung der Bedienstatistikdaten ins Protokoll  |
| STAT_GESAMTBETRIEBSZEIT_FAHRZEUG_1_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des Fahrzeug   |
| STAT_GESAMTBETRIEBSZEIT_ACC_1_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des ACC   |
| STAT_GESAMTBETRIEBSZEIT_DCC_1_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des DCC   |
| STAT_ANZAHL_DEAKTIVIERUNG_ACC_GESAMT_1 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der ACC-Deaktivierungen   |
| STAT_ANZAHL_AENDERUNG_WUNSCHABSTAND_ACC_1 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschabstandsänderungen bei ACC   |
| STAT_ANZAHL_AENDERUNG_WUNSCHGESCHWINDIGKEIT_ACC_1 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschgeschwindigkeitsänderungen bei ACC   |
| STAT_ANZAHL_UEBERNAHMEAUFFORDERUNG_ACC_GESAMT_1 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Fahrerübernahmeaufforderungen bei ACC   |
| STAT_RELATIVER_KILOMETERZAEHLER_2_WERT | km | - | unsigned int | - | - | 2.0 | - | - | FASTA Auswertung. Kilometeranzahl seit der letzten Archivierung der Bedienstatistikdaten ins Protokoll  |
| STAT_GESAMTBETRIEBSZEIT_FAHRZEUG_2_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des Fahrzeug   |
| STAT_GESAMTBETRIEBSZEIT_ACC_2_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des ACC   |
| STAT_GESAMTBETRIEBSZEIT_DCC_2_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des DCC   |
| STAT_ANZAHL_DEAKTIVIERUNG_ACC_GESAMT_2 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der ACC-Deaktivierungen   |
| STAT_ANZAHL_AENDERUNG_WUNSCHABSTAND_ACC_2 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschabstandsänderungen bei ACC   |
| STAT_ANZAHL_AENDERUNG_WUNSCHGESCHWINDIGKEIT_ACC_2 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschgeschwindigkeitsänderungen bei ACC   |
| STAT_ANZAHL_UEBERNAHMEAUFFORDERUNG_ACC_GESAMT_2 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Fahrerübernahmeaufforderungen bei ACC   |
| STAT_RELATIVER_KILOMETERZAEHLER_3_WERT | km | - | unsigned int | - | - | 2.0 | - | - | FASTA Auswertung. Kilometeranzahl seit der letzten Archivierung der Bedienstatistikdaten ins Protokoll  |
| STAT_GESAMTBETRIEBSZEIT_FAHRZEUG_3_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des Fahrzeug   |
| STAT_GESAMTBETRIEBSZEIT_ACC_3_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des ACC   |
| STAT_GESAMTBETRIEBSZEIT_DCC_3_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des DCC   |
| STAT_ANZAHL_DEAKTIVIERUNG_ACC_GESAMT_3 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der ACC-Deaktivierungen   |
| STAT_ANZAHL_AENDERUNG_WUNSCHABSTAND_ACC_3 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschabstandsänderungen bei ACC.   |
| STAT_ANZAHL_AENDERUNG_WUNSCHGESCHWINDIGKEIT_ACC_3 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschgeschwindigkeitsänderungen bei ACC   |
| STAT_ANZAHL_UEBERNAHMEAUFFORDERUNG_ACC_GESAMT_3 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Fahrerübernahmeaufforderungen bei ACC   |
| STAT_RELATIVER_KILOMETERZAEHLER_4_WERT | km | - | unsigned long | - | - | 2.0 | - | - | FASTA Auswertung. Kilometeranzahl seit der letzten Archivierung der Bedienstatistikdaten ins Protokoll  |
| STAT_GESAMTBETRIEBSZEIT_FAHRZEUG_4_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des Fahrzeug   |
| STAT_GESAMTBETRIEBSZEIT_ACC_4_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des ACC   |
| STAT_GESAMTBETRIEBSZEIT_DCC_4_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des DCC.   |
| STAT_ANZAHL_DEAKTIVIERUNG_ACC_GESAMT_4 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der ACC-Deaktivierungen   |
| STAT_ANZAHL_AENDERUNG_WUNSCHABSTAND_ACC_4 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschabstandsänderungen bei ACC   |
| STAT_ANZAHL_AENDERUNG_WUNSCHGESCHWINDIGKEIT_ACC_4 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschgeschwindigkeitsänderungen bei ACC   |
| STAT_ANZAHL_UEBERNAHMEAUFFORDERUNG_ACC_GESAMT_4 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Fahrerübernahmeaufforderungen bei ACC   |
| STAT_RELATIVER_KILOMETERZAEHLER_5_WERT | km | - | unsigned int | - | - | 2.0 | - | - | FASTA Auswertung. Kilometeranzahl seit der letzten Archivierung der Bedienstatistikdaten ins Protokoll  |
| STAT_GESAMTBETRIEBSZEIT_FAHRZEUG_5_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des Fahrzeug   |
| STAT_GESAMTBETRIEBSZEIT_ACC_5_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des ACC   |
| STAT_GESAMTBETRIEBSZEIT_DCC_5_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des DCC   |
| STAT_ANZAHL_DEAKTIVIERUNG_ACC_GESAMT_5 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der ACC-Deaktivierungen   |
| STAT_ANZAHL_AENDERUNG_WUNSCHABSTAND_ACC_5 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschabstandsänderungen bei ACC   |
| STAT_ANZAHL_AENDERUNG_WUNSCHGESCHWINDIGKEIT_ACC_5 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschgeschwindigkeitsänderungen bei ACC   |
| STAT_ANZAHL_UEBERNAHMEAUFFORDERUNG_ACC_GESAMT_5 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Fahrerübernahmeaufforderungen bei ACC   |
| STAT_RELATIVER_KILOMETERZAEHLER_6_WERT | km | - | unsigned int | - | - | 2.0 | - | - | FASTA Auswertung. Kilometeranzahl seit der letzten Archivierung der Bedienstatistikdaten ins Protokoll  |
| STAT_GESAMTBETRIEBSZEIT_FAHRZEUG_6_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des Fahrzeug   |
| STAT_GESAMTBETRIEBSZEIT_ACC_6_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des ACC   |
| STAT_GESAMTBETRIEBSZEIT_DCC_6_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des DCC   |
| STAT_ANZAHL_DEAKTIVIERUNG_ACC_GESAMT_6 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der ACC-Deaktivierungen   |
| STAT_ANZAHL_AENDERUNG_WUNSCHABSTAND_ACC_6 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschabstandsänderungen bei ACC   |
| STAT_ANZAHL_AENDERUNG_WUNSCHGESCHWINDIGKEIT_ACC_6 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschgeschwindigkeitsänderungen bei ACC   |
| STAT_ANZAHL_UEBERNAHMEAUFFORDERUNG_ACC_GESAMT_6 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Fahrerübernahmeaufforderungen bei ACC   |
| STAT_RELATIVER_KILOMETERZAEHLER_7_WERT | km | - | unsigned int | - | - | 2.0 | - | - | FASTA Auswertung. Kilometeranzahl seit der letzten Archivierung der Bedienstatistikdaten ins Protokoll  |
| STAT_GESAMTBETRIEBSZEIT_FAHRZEUG_7_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des Fahrzeug   |
| STAT_GESAMTBETRIEBSZEIT_ACC_7_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des ACC   |
| STAT_GESAMTBETRIEBSZEIT_DCC_7_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des DCC   |
| STAT_ANZAHL_DEAKTIVIERUNG_ACC_GESAMT_7 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der ACC-Deaktivierungen   |
| STAT_ANZAHL_AENDERUNG_WUNSCHABSTAND_ACC_7 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschabstandsänderungen bei ACC   |
| STAT_ANZAHL_AENDERUNG_WUNSCHGESCHWINDIGKEIT_ACC_7 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschgeschwindigkeitsänderungen bei ACC   |
| STAT_ANZAHL_UEBERNAHMEAUFFORDERUNG_ACC_GESAMT_7 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Fahrerübernahmeaufforderungen bei ACC   |
| STAT_RELATIVER_KILOMETERZAEHLER_8_WERT | km | - | unsigned int | - | - | 2.0 | - | - | FASTA Auswertung. Kilometeranzahl seit der letzten Archivierung der Bedienstatistikdaten ins Protokoll  |
| STAT_GESAMTBETRIEBSZEIT_FAHRZEUG_8_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des Fahrzeug   |
| STAT_GESAMTBETRIEBSZEIT_ACC_8_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des ACC   |
| STAT_GESAMTBETRIEBSZEIT_DCC_8_WERT | s | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtbetriebszeit des DCC   |
| STAT_ANZAHL_DEAKTIVIERUNG_ACC_GESAMT_8 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der ACC-Deaktivierungen   |
| STAT_ANZAHL_AENDERUNG_WUNSCHABSTAND_ACC_8 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschabstandsänderungen bei ACC   |
| STAT_ANZAHL_AENDERUNG_WUNSCHGESCHWINDIGKEIT_ACC_8 | 0-n | - | unsigned long | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Wunschgeschwindigkeitsänderungen bei ACC   |
| STAT_ANZAHL_UEBERNAHMEAUFFORDERUNG_ACC_GESAMT_8 | 0-n | - | unsigned int | - | - | - | - | - | FASTA Auswertung. Gesamtanzahl der Fahrerübernahmeaufforderungen bei ACC   |

### RES_0XDC21

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CC_ZfmAbAfs_i_Errmgr_WERT | HEX | - | unsigned long | - | - | - | - | - | - |
| STAT_CC_MELDUNG_AFS_WERT | HEX | - | unsigned long | - | - | - | - | - | Check Control Meldung |

### RES_0XDC22

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CC_ZfmAbHsr_i_Errmgr | 0-n | - | unsigned long | - | - | - | - | - | - |
| STAT_CC_MELDUNG_HSR | 0-n | - | unsigned long | - | - | - | - | - | Checkcontrol Meldungen HSR (ZfmAbHsr_i_Ccmm). Statusbit ID669:0000 1000, Statusbit ID497:0001 0000, Statusbit ID496:0010 0000, Statusbit ID499:0100 0000, Statusbit ID500:1000 0000 |

### RES_0XDC23

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SKE_FQ_NR | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | - |
| STAT_QUAL_STAT_SKE_FQ_NR | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | - |
| STAT_SCHALTER_VON_HU_NR | 0-n | - | unsigned char | - | TAB_SCHNEEKETTE_SCHALTER_SK_HU | - | - | - | - |
| STAT_QUAL_STAT_SCHALTER_VON_HU_NR | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | - |
| STAT_ANZEIGE_VON_HU_NR | 0-n | - | unsigned char | - | TAB_SCHNEEKETTE_INIT | - | - | - | - |
| STAT_QUAL_STAT_ANZEIGE_VON_HU_NR | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | - |
| STAT_SCHALTER_AN_HU_NR | 0-n | - | unsigned char | - | TAB_SCHNEEKETTE_SCHALTER_SK_HU | - | - | - | - |
| STAT_ANZEIGE_AN_HU_NR | 0-n | - | unsigned char | - | TAB_SCHNEEKETTE_INIT | - | - | - | - |
| STAT_HSR_PASSIV_SK_NR | 0-n | - | unsigned char | - | TAB_HSR_AKTIV | - | - | - | - |

### TAB_SCHNEEKETTE_SCHALTER_SK_HU

| WERT | TEXT |
| --- | --- |
| 0 | Schalter ausgegraut / Initialisierung |
| 1 | keine Kette |
| 2 | Kette |
| 3 | ungültig |
| 255 | unbekannter Zustand |

### TAB_SCHNEEKETTE_INIT

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Menü geschlossen |
| 2 | Menü offen |
| 3 | ungültig |
| 255 | ungültiger Wert |

### TAB_HSR_AKTIV

| WERT | TEXT |
| --- | --- |
| 0 | HSR kann aktiv gehen |
| 1 | Passivierung HSR durch SK |

### RES_0XDC24

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VX_FS_QUAL | 0-n | - | char | - | - | - | - | - | VX Qualifier |
| STAT_REFERENZGESCHWINDIGKEIT_VX_WERT | km/h | - | motorola float | - | - | - | - | - | VX - Fahrzeugreferenzgeschwindigkeit |
| STAT_ZFMFS_I_FAHRZUSTAND | 0-n | - | char | - | TAB_FAHRZUSTAND | - | - | - | Fahrzustand |
| STAT_ZFMABLEN_HSR_STAT_ASG_AKTIV | 0/1 | - | char | - | - | - | - | - | - |
| STAT_ZFMABLEN_HSR_STAT_ZSTACTDIAG_AKTIV | 0/1 | - | char | - | - | - | - | - | - |
| STAT_ZFMABLEN_HSR_ACTDIAG_FREIGABE_AKTIV | 0/1 | - | char | - | - | - | - | - | - |

### TAB_FAHRZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Fahrzeug steht |
| 1 | Fahrzeug fährt vorwärts |
| 2 | Fahrzeug fährt rückwärts |
| 3 | Fahrzeug fährt (Richtung unsicher) |
| 7 | Signal ungültig |
| 255 | unbekannter Zustand |

### RES_0XDC25

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERUNG_EPS_AKTIV | 0/1 | - | char | 0x01 | - | - | - | - | Anforderung EPS: 0 = passiv ; 1 = aktiv |
| STAT_ANFORDERUNG_AL_LENKWINKELGESCHWINDIGKEIT_AKTIV | 0/1 | - | char | 0x02 | - | - | - | - | Anforderung Aktivlenkung Lenkwinkelgeschwindigkeit: 0 = passiv ; 1 = aktiv |
| STAT_ANFORDERUNG_AL_REGLER_AKTIV | 0/1 | - | char | 0x04 | - | - | - | - | Anforderung Aktivlenkung Regler: 0 = passiv ; 1 = aktiv |

### RES_0XDC26

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORSTEUERANTEIL_ASA_WERT | Grad | - | motorola float | - | - | - | - | - | ZfmVqLen_r_lw_VA_stg/Vorsteueranteil in Grad |
| STAT_REGLERANTEIL_ASA_WERT | Grad | - | motorola float | - | - | - | - | - | ZfmPvVs_r_lw_VA_reg/Regleranteil in Grad |
| STAT_UMSETZUNG_VORSTEUERWERT_FAMPDYN_ASA_NR | 0/1 | - | unsigned char | - | - | - | - | - | ZfmDkVq_b_lwVA_stg_umg_fmp_s2 0 Vorsteuerwert wird nicht umgeesetzt 1 Vorsteuerwert wird umgesetzt, Fehleramplitude und Max-Dynamik berücksichtigt |
| STAT_UMSETZUNG_VORSTEUERWERT_DYN_ASA_NR | 0/1 | - | unsigned char | - | - | - | - | - | ZfmDkVq_b_lwVA_stg_umg_fmp_s1 0 Vorsteuerwert wird nicht umgeesetzt 1 Vorsteuerwert wird umgesetzt, Fehleramplitude und Max-Dynamik berücksichtigt |
| STAT_VORSTEUERUNG_ASA_NR | 0-n | - | unsigned char | - | TAB_VORSTEUERUNG | - | - | - | ZfmVq_i_ZI_vx/Funktion Vorsteuerung  |
| STAT_REGLER_ASA_NR | 0-n | - | unsigned char | - | TAB_VORSTEUERUNG | - | - | - | ZfmPvVs_i_ZI_Rq_AFS/Funktion Regler ASA  |
| STAT_GRRPLUS_ASA_NR | 0-n | - | unsigned char | - | TAB_VORSTEUERUNG | - | - | - | ZfmFqFiMs_i_ZI_Fq_GRRplus/Funktion Regler GRRplus ASA  |

### RES_0XDC27

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORSTEUERANTEIL_HSR_WERT | Grad | - | motorola float | - | - | - | - | - | ZfmVqLen_r_lw_HA_stg/Vorsteueranteil in Grad |
| STAT_REGLERANTEIL_HSR_WERT | Grad | - | motorola float | - | - | - | - | - | ZfmPvVs_r_lw_HA_reg/Regleranteil in Grad |
| STAT_UMSETZUNG_VORSTEUERWERT_FAMPDYN_HSR_NR | 0/1 | - | unsigned char | - | - | - | - | - | ZfmDkVq_b_lwHA_stg_umg_fampdyn 0 Vorsteuerwert wird nicht umgeesetzt 1 Vorsteuerwert wird umgesetzt, Fehleramplitude und Max-Dynamik berücksichtigt |
| STAT_UMSETZUNG_VORSTEUERWERT_DYN_HSR_NR | 0/1 | - | unsigned char | - | - | - | - | - | ZfmDkVq_b_lwHA_stg_umg_dyn 0 Vorsteuerwert wird nicht umgeesetzt 1 Vorsteuerwert wird umgesetzt, Fehleramplitude und Max-Dynamik berücksichtigt |
| STAT_REGLER_HSR_NR | 0-n | - | unsigned char | - | TAB_VORSTEUERUNG | - | - | - | ZfmPvVs_i_ZI_Rq_HSR/Funktion Regler HSR  |

### TAB_VORSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0 | passiv |
| 1 | bereit passiv |
| 2 | bereit aktiv |
| 3 | aktiv |
| 255 | unbekannter Zustand |

### ARG_0XDC2C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_HOEHENSTAND_VL_WERT | mm | - | motorola float | - | - | - | - | - | -100.0 | 100.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand vorn links in mm. |

### ARG_0XDC2D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_HOEHENSTAND_VR_WERT | mm | - | motorola float | - | - | - | - | - | -100.0 | 100.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand vorn rechts in mm. |

### ARG_0XDC2E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_HOEHENSTAND_HL_WERT | mm | - | motorola float | - | - | - | - | - | -100.0 | 100.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand hinten links in mm. |

### ARG_0XDC2F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_HOEHENSTAND_HR_WERT | mm | - | motorola float | - | - | - | - | - | -100.0 | 100.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand hinten rechts in mm. |

### RES_0XDC30

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_VL_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandssteigung |
| STAT_HOEHENSTAND_VR_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandssteigung |
| STAT_HOEHENSTAND_HL_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandssteigung |
| STAT_HOEHENSTAND_HR_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandssteigung |

### RES_0XDC31

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_VL_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandsoffset |
| STAT_HOEHENSTAND_VR_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandsoffset |
| STAT_HOEHENSTAND_HL_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandsoffset |
| STAT_HOEHENSTAND_HR_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandsoffset |

### TAB_HOEHENSTAND_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Kalibrierung Offset nicht erfolgreich |
| 1 | Kalibrierung Offset erfolgreich |
| 2 | Sensor ausstattungsbedingt (Codierung) nicht verbaut |
| 255 | unbekannter Zustand |

### RES_0XDC34

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZfmDkVq_i_ZS_ArsSvSoll_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |
| STAT_ZfmDkVl_i_ZS_Vl_ArsSvSoll_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |
| STAT_ZfmDkRq_i_ZS_Rq_ARS_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |
| STAT_ZfmDkSq_i_ZS_Sq_ARS_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |
| STAT_ZfmDkRl_i_ZS_RL_ARS_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |

### RES_0XDC35

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZfmDkVq_i_ZS_GmvhSvSoll_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |
| STAT_ZfmDkVq_i_ZS_GmvhDvSoll_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |
| STAT_ZfmDkRq_i_ZS_Rq_GMVH_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |
| STAT_ZfmDkSq_i_ZS_Sq_GMVH_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |
| STAT_ZfmDkRq_i_ZS_Rq_GMVV_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |
| STAT_ZfmDkSq_i_ZS_Sq_GMVV_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |

### RES_0XDC36

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZfmDkEps_i_ZS_gbr_NR | 0-n | - | unsigned char | - | TAB_EPS_ICM_VERBUND | - | - | - | Status GBR (Grenzbereichsrückmeldung) |
| STAT_ZfmDkEps_i_gbr_nsq_NR | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | Status GBR (Grenzbereichsrückmeldung) |

### TAB_EPS_ICM_VERBUND

| WERT | TEXT |
| --- | --- |
| 0 | passiv |
| 1 | bereit passiv |
| 2 | bereit aktiv |
| 3 | aktiv |
| 255 | ungültig oder nicht verfügbar |

### TAB_SBS_GUELTIGKEIT

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Signalwert ist gültig und abgesichert |
| 2 | Signalwert ist gültig |
| 3 | Signalwert ist nicht vertrauenswürdig |
| 4 | Ersatzwert ist im Nutzsignal gesetzt |
| 5 | Signal zu oft entprellt |
| 6 | Signalwert ist ungültig |
| 7 | Sensor nicht vorhanden oder Signal ungültig |
| 255 | unbekannter Zustand |

### RES_0XDC37

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IST_DREHMOMENT_WERT | Nm | - | motorola float | - | - | - | - | - | PmiVk_r_mKW_ist/EF-Ist-Drehmoment [Nm]  |
| STAT_SOLL_DREHMOMENT_WERT | Nm | - | motorola float | - | - | - | - | - | PmiVk_r_mKW_soll/EF-Ist-Drehmoment [Nm]  |
| STAT_VORAUSSAGE_DREHMOMENT_WERT | Nm | - | motorola float | - | - | - | - | - | PmiVk_r_mKW_Voraussage/Voraussage [Nm] |
| STAT_MAXIMAL_DREHMOMENT_WERT | Nm | - | motorola float | - | - | - | - | - | PmiVk_r_mKW_soll_max/Maximales-EF-Drehmoment [Nm] |
| STAT_LUEFTERSTUFE | 0-n | - | unsigned char | - | - | - | - | - | PmiLsl_i_Luefterstufe [0-255] |

### ARG_0XDC38

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEVEL_VIBRATION_WERT | - | - | unsigned char | - | - | - | - | - | 0.0 | 15.0 | Ansteuern der Vibration |

### RES_0XDC3A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAKTORU_EPS_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Faktor, über den die GBR die Lenkunterstützung der EPS beeinflusst |
| STAT_FAKTORARD_EPS_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Faktor, über den die GBR die Dämpfung der EPS beinflusst |
| STAT_FAKTORARZ_EPS_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Faktor, über den die GBR den aktiven Rücklauf der EPS beeinflusst |
| STAT_MMOTOR_OFFSET_EPS_WERT | - | high | char | - | - | 1.0 | 100.0 | 0.0 | Offset-Motormoment, das die EPS dem eigenen Motormoment additiv überlagert |
| STAT_FAKTOR_EPS_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Qualifier zu den 3 Faktoren (2 = umsetzen, 14 = nicht umsetzen) |
| STAT_OFFSET_EPS_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Qualifier zum OffsetMotormoment (2 = umsetzen; 14 = nicht umsetzen) |
| STAT_FUNKTION_GBR_CODIERUNG_EIN | 0/1 | high | unsigned char | - | - | - | - | - | GBR-Funktion (1 = eincodiert; 0 = auscodiert) |
| STAT_FUNKTION_GBR_KENNLINIE_NUMMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktiver GBR Kennliniensatz |
| STAT_EPS_FAKT_MOM_SERVICE_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Service-Qualifier der EPS für Umsetzung der Faktoren und des Offset-Motormoments (alles i.O wenn 32 od 33) |
| STAT_ZUSTAND_GRENZBEREICHSREUCKMELDUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-Zustand der GBR-Funktion (abhängig von Qualifiern der Eingänge)  |

### RES_0XDC3B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_Cnvlyr_i_eps_mLenk_sq_NR | 0-n | - | unsigned char | - | TAB_MLWQUAL | - | - | - | Servicequalifier Schnittstelle EPS |
| STAT_ZfmWrA_i_mk_mHand_hc_sq_NR | 0-n | - | unsigned int | - | TAB_MLWQUAL | - | - | - | Servicequalifier Handmoment HC |
| STAT_ZfmWrE_r_mHandOffset_hc_WERT | Nm | - | motorola float | - | - | - | - | - | Offset Handmoment HC  |
| STAT_ZfmWrA_r_mHandOffset_eps_WERT | Nm | - | motorola float | - | - | - | - | - | Offset Handmoment EPS |

### TAB_MLWQUAL

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Signalwert ist gültig und abgesichert |
| 2 | Signal ist gültig |
| 3 | Signal ist nicht vertrauenswürdig |
| 4 | Ersatzwert ist im Nutzsignal gesetzt |
| 5 | Signal zu oft entprellt |
| 6 | Signalwert ist ungültig |
| 7 | Sensor nicht vorhanden oder Signal ungültig |

### RES_0XDC3C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SBS2EV_R_VCH_INTRO_B_WERT | m/s² | - | motorola float | - | - | - | - | - | VCH Lernwerttoleranz (Beide Kurven) |
| STAT_SBS2EV_R_VCH_INTRO_L_WERT | m/s² | - | motorola float | - | - | - | - | - | VCH Lernwerttoleranz (Linke Kurve) |
| STAT_SBS2EV_R_VCH_INTRO_R_WERT | m/s² | - | motorola float | - | - | - | - | - | VCH Lernwerttoleranz (Rechte Kurve) |
| STAT_SBS_2EV_R_VCH_WERT0_B_WERT | m/s² | - | motorola float | - | - | - | - | - | VCH Lernwert (Beide Kurven) |
| STAT_SBS_2EV_R_VCH_WERT0_L_WERT | m/s² | - | motorola float | - | - | - | - | - | VCH Lernwert (Links Kurven) |
| STAT_SBS_2EV_R_VCH_WERT0_R_WERT | m/s² | - | motorola float | - | - | - | - | - | VCH Lernwert (Rechts Kurven) |
| STAT_COMP_KYR_XR1_WERT | - | - | motorola float | - | - | - | - | - | Korrekturfaktor Rollrate (Kompensation Gierratenübersprechen) |
| STAT_COMP_OFS_AX1_WERT | m/s² | - | motorola float | - | - | - | - | - | Offset Längsbeschleunigungssensor 1 |
| STAT_COMP_OFS_AX1_TOL_WERT | m/s² | - | motorola float | - | - | - | - | - | Signaltoleranz Längsbeschleunigung 1 |
| STAT_COMP_OFS_AY1_WERT | m/s² | - | motorola float | - | - | - | - | - | Offset Querbeschleunigungssensor 1 |
| STAT_COMP_OFS_AY1_TOL_WERT | m/s² | - | motorola float | - | - | - | - | - | Signaltoleranz Querbeschleunigung 1 |
| STAT_COMP_OFS_AY2_WERT | m/s² | - | motorola float | - | - | - | - | - | Offset Querbeschleunigungssensor 2 |
| STAT_COMP_OFS_AY2_TOL_WERT | m/s² | - | motorola float | - | - | - | - | - | Signaltoleranz Querbeschleunigung 2 |
| STAT_COMP_OFS_DE_WERT | rad | - | motorola float | - | - | - | - | - | Offset Ritzelwinkel |
| STAT_COMP_OFS_DE_TOL_WERT | rad | - | motorola float | - | - | - | - | - | Signaltoleranz Ritzelwinkel |
| STAT_COMP_OFS_XR1_WERT | rad/s | - | motorola float | - | - | - | - | - | Offset Rollratensensor 1 |
| STAT_COMP_OFS_XR1_TOL_WERT | rad/s | - | motorola float | - | - | - | - | - | Signaltoleranz Rollrate 1 |
| STAT_COMP_OFS_YR1_DRV_WERT | rad/s | - | motorola float | - | - | - | - | - | Offset Gierratensensor 1 (aus Fahrtabgleich) |
| STAT_COMP_OFS_YR1_STST1_WERT | rad/s | - | motorola float | - | - | - | - | - | Offset Gierratensensor 1 (aus Stillstandsabgleich) |
| STAT_COMP_OFS_YR1_TOL_WERT | rad/s | - | motorola float | - | - | - | - | - | Signaltoleranz Gierrate 1 |
| STAT_COMP_OFS_YR2_DRV_WERT | rad/s | - | motorola float | - | - | - | - | - | Offset Gierratensensor 2 (aus Fahrtabgleich) |
| STAT_COMP_OFS_YR2_STST_WERT | rad/s | - | motorola float | - | - | - | - | - | Offset Gierratensensor 2 (aus Stillstandsabgleich) |
| STAT_COMP_OFS_YR2_TOL_WERT | rad/s | - | motorola float | - | - | - | - | - | Signaltoleranz Gierrate 2 |
| STAT_COMP_SENS_AX1_WERT | - | - | motorola float | - | - | - | - | - | Empfindlichkeit Längsbeschleunigungssensor 1 |
| STAT_COMP_SENS_VWHL_HL_WERT | - | - | motorola float | - | - | - | - | - | Radtoleranz hinten links |
| STAT_COMP_SENS_VWHL_HR_WERT | - | - | motorola float | - | - | - | - | - | Radtoleranz hinten rechts |
| STAT_COMP_SENS_VWHL_VL_WERT | - | - | motorola float | - | - | - | - | - | Radtoleranz vorne links |
| STAT_COMP_SENS_VWHL_VR_WERT | - | - | motorola float | - | - | - | - | - | Radtoleranz vorne rechts |
| STAT_COMP_SENS_XR1_WERT | - | - | motorola float | - | - | - | - | - | Empfindlichkeit Rollratensensor 1 |
| STAT_COMP_SENS_YR1_WERT | - | - | motorola float | - | - | - | - | - | Empfindlichkeit Gierratensensor 1 |
| STAT_COMP_SENS_YR2_WERT | - | - | motorola float | - | - | - | - | - | Empfindlichkeit Gierratensensor 2 |
| STAT_I_SBS_3DE_IDE_CODE_WERT | - | - | motorola float | - | - | - | - | - | Lernwert Lenkwinkelkodierüberwachung |
| STAT_I_AY1_SGN_WERT | - | - | motorola float | - | - | - | - | - | Lernwert Vorzeichenüberwachung Querbeschleunigung 1 |
| STAT_I_AY2_SGN_WERT | - | - | motorola float | - | - | - | - | - | Lernwert Vorzeichenüberwachung Querbeschleunigung 2 |
| STAT_I_YR1_SGN_WERT | - | - | motorola float | - | - | - | - | - | Lernwert Vorzeichenüberwachung Gierrate 1 |
| STAT_I_YR2_SGN_WERT | - | - | motorola float | - | - | - | - | - | Lernwert Vorzeichenüberwachung Gierrate 2 |
| STAT_I_YR_WH_SGN_WERT | - | - | motorola float | - | - | - | - | - | Lernwert Vorzeichenüberwachung Gierrate (aus Radgeschwindigkeiten) |
| STAT_B_STATUS_SK_WERT | - | - | motorola float | - | - | - | - | - | Status Schneekettenerkennung |
| STAT_ZFMFS_OFS_AXM_WERT | - | - | motorola float | - | - | - | - | - | Offset Längsbeschleunigung Motormoment |
| STAT_COMP_OFS_DEYR_WERT | - | - | motorola float | - | - | - | - | - | Offset Lenkwinkelabgleich Gierrate |

### RES_0XDC3D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SZL_SN_GUELTIGKEIT_NR | 0-n | - | unsigned char | - | TAB_SZL_STATE | - | - | - | Zustandsabfrage Seriennummer SZL |
| STAT_SZL_SERIENNUMMER | 0-n | - | unsigned long | - | - | - | - | - | Ausgabe SZL Seriennummer |
| STAT_SZL_OFFSET_GUELTIG_NR | 0-n | - | unsigned char | - | TAB_SZL_OFFSET_GUELTIG | - | - | - | Gültigkeit Signal Offset bei  SZL Abgleich |
| STAT_SZL_OFFSET_WERT | ° | - | motorola float | - | - | - | - | - | letzter Offset bei  SZL Abgleich |

### TAB_SZL_STATE

| WERT | TEXT |
| --- | --- |
| 0 | SZL Seriennummer ungültig |
| 1 | SZL Seriennummer gültig empfangen |
| 255 | unbekannter Zustand |

### TAB_SZL_OFFSET_GUELTIG

| WERT | TEXT |
| --- | --- |
| 0 | Offset ungültig |
| 1 | Offset gültig |
| 255 | unbekannter Zustand |

### RES_0XDC40

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZfmDkVq_i_ZS_GmvhSvSoll_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |
| STAT_ZfmDkVq_i_ZS_GmvhDvSoll_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |
| STAT_ZfmDkRq_i_ZS_Rq_GMVH_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |
| STAT_ZfmDkSq_i_ZS_Sq_GMVH_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |
| STAT_ZfmDkRq_i_ZS_Rq_GMVV_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |
| STAT_ZfmDkSq_i_ZS_Sq_GMVV_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | - | - | - | - |

### TAB_FUNKTIONSREGLER

| WERT | TEXT |
| --- | --- |
| 0 | passiv |
| 1 | bereit passiv |
| 2 | bereit aktiv |
| 3 | aktiv |
| 255 | unbekannter Zustand |

### RES_0XA051

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XA052

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XA053

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XA055

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### ARG_0XA056

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERVO_VENTIL_STROM_SOLL_WERT | + | - | A | - | motorola float | - | - | - | - | - | 0.0 | 1.0 | - |

### ARG_0XA057

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ECO_VENTIL_STROM_SOLL_WERT | + | - | A | - | motorola float | - | - | - | - | - | 0.0 | 1.0 | zu stellender Strom fuer das ECO Ventil |

### RES_0XA059

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XA05B

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_DATEN_SCHREIBEN_AKTIV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Information ob der Schreibvorgang der Adaptivdaten läuft. |

### RES_0XA05C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABSTAND_KOLLISSIONSOBJEKT_WERT | + | - | + | m | - | unsigned int | - | - | 0.0625 | - | - | Differenzabstand zum Kollisionsobjekt    |
| STAT_GESCHWINDIGKEIT_KOLLISSIONSOBJEKT_WERT | + | - | + | km/h | - | unsigned int | - | - | 0.25 | - | -511.0 | Differenzgeschwindigkeit zum Kollisinsobjekt  |
| STAT_BESCHLEUNIGUNG_KOLLISSIONSOBJEKT_WERT | + | - | + | m/s² | - | unsigned int | - | - | 0.025 | - | -19.62 | Beschleunigung des Kollisionsobjekts   |
| STAT_KOLLISSIONSOBJEKT_NR | + | - | + | 0-n | - | unsigned char | - | TAB_KOLLISIONSOBJEKT | - | - | - | Status des Kollisionsobjekts   |
| STAT_EIGENGESCHWINDIGKEIT_WERT | + | - | + | m/s | - | int | - | - | 0.022 | - | 540.896 | Geschwindigkeit des eigenen Fahrzeugs  |
| STAT_EIGENBESCHLEUNIGUNG_WERT | + | - | + | m/s² | - | int | - | - | 6.0E-4 | - | - | Beschleunigung des eigenen Fahrzeugs   darstellbarer Bereich: -1025.6384 ...  1025.6071 m/s², Umrechnung: (PH) = 0.0313 * (HEX) [m/s²] |
| STAT_SITUATION_NR | + | - | + | 0-n | - | unsigned char | - | TAB_ACC_SITUATION | - | - | - | Situationsklassifikation des FBO  |
| STAT_STATEMACHINE_NR | + | - | + | 0-n | - | unsigned char | - | TAB_ACC_STATEMACHINE | - | - | - | Zustand des ACC  |

### ARG_0XA05C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATENBLOCK | + | - | - | - | unsigned char | - | - | - | - | - | - | - | Auswahl von Block 1 bis 10. |

### RES_0XA05D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABSTAND_KOLLISSIONSOBJEKT_WERT | + | - | + | m | - | unsigned int | - | - | 0.0625 | - | - | Differenzabstand zum Kollisionsobjekt    |
| STAT_GESCHWINDIGKEIT_KOLLISSIONSOBJEKT_WERT | + | - | + | km/h | - | unsigned int | - | - | 0.25 | - | -511.0 | Differenzgeschwindigkeit zum Kollisinsobjekt  |
| STAT_BESCHLEUNIGUNG_KOLLISSIONSOBJEKT_WERT | + | - | + | m/s² | - | unsigned int | - | - | 0.025 | - | -19.62 | Beschleunigung des Kollisionsobjekts   |
| STAT_KOLLISSIONSOBJEKT_NR | + | - | + | 0-n | - | unsigned char | - | TAB_KOLLISIONSOBJEKT | - | - | - | Status des Kollisionsobjekts  |
| STAT_EIGENGESCHWINDIGKEIT_WERT | + | - | + | m/s | - | int | - | - | 0.022 | - | 540.896 | Geschwindigkeit des eigenen Fahrzeugs  |
| STAT_EIGENBESCHLEUNIGUNG_WERT | + | - | + | m/s² | - | int | - | - | 6.0E-4 | - | - | Beschleunigung des eigenen Fahrzeugs    |
| STAT_WARNUNGSART_NR | + | - | + | 0-n | - | unsigned char | - | TAB_ACC_WARNUNG | - | - | - | Art der ACC Warnung  |
| STAT_FAHRERWAHL_NR | + | - | + | 0-n | - | unsigned char | - | TAB_ACC_FAHRERWAHL | - | - | - | Fahrerwahl zum Warnzeitpunkt. Einholen weiterer Informationen von LDM zum Result    |
| STAT_SITUATION_NR | + | - | + | 0-n | - | unsigned char | - | TAB_ACC_SITUATION | - | - | - | Situationsklassifikation des FBO  |
| STAT_STATEMACHINE_NR | + | - | + | 0-n | - | unsigned char | - | TAB_ACC_STATEMACHINE | - | - | - | Zustand des ACC  |

### ARG_0XA05D

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATENBLOCK | + | - | - | - | char | - | - | - | - | - | - | - | Auswahl von Block 1 bis 10. |

### TAB_KOLLISIONSOBJEKT

| WERT | TEXT |
| --- | --- |
| 0x01 | Bewegtes Objekt |
| 0x02 | Angehaltenes Objekt |
| 0x03 | Stehendes Objekt |
| 0xFF | Unbekannter Zustand |

### TAB_ACC_WARNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Vorwarnung |
| 0x01 | statische Vorwarnung |
| 0x02 | dynamische Vorwarnung |
| 0xFF | unbekannter Zustand |

### TAB_ACC_FAHRERWAHL

| WERT | TEXT |
| --- | --- |
| 1 | früh |
| 2 | mittel |
| 3 | spät |
| 255 | unbekannter Zustand |

### TAB_ACC_SITUATION

| WERT | TEXT |
| --- | --- |
| 0x01 | Freie Fahrt |
| 0x02 | Auffahren |
| 0x03 | Folgen |
| 0x04 | Folgen Bremsen |
| 0x05 | Davonziehen |
| 0x06 | Einscherer |
| 0x07 | Absicht Beschleunigung |
| 0x08 | Überholabsicht |
| 0x09 | Flying Overtake |

### TAB_ACC_STATEMACHINE

| WERT | TEXT |
| --- | --- |
| 0 | ungültig |
| 1 | Active |
| 2 | Brake Only Fehler |
| 3 | nicht belegt |
| 4 | Brake Only Resume |
| 5 | nicht belegt |
| 6 | Fehler |
| 7 | Passive |
| 8 | Show Reject - No Resume |
| 9 | Show Reject - Resume |
| 10 | nicht belegt |
| 11 | Standbye - Resume |
| 12 | Suspend |
| 13 | Go Request |
| 14 | Stand Active |
| 15 | Stand Prepare |
| 16 | Stand Wait |
| 17 | Go Check |
| 18 | Brake Only stehen |
| 255 | unbekannter Zustand |

### ARG_0XAB50

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL | + | - | Grad | - | char | - | - | 5.0 | - | - | -50.0 | 50.0 | Justagewert für Short Range Radar Sensor rechte Seite (in Fahrtrichtung) |

### ARG_0XAB51

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL | + | - | Grad | - | char | - | - | 5.0 | - | - | -50.0 | 50.0 | Justagewert für Short Range Radar Sensor linke Seite (in Fahrtrichtung) |

### ARG_0XAB55

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EIGENDIAGNOSE | + | - | 0-n | - | char | - | TAB_HC_EIGENDIAGNOSE | - | - | - | 1.0 | 2.0 | Starten der Eigendiagnose der Spurwechselwarnung/Spurverlasswarnung HC |

### TAB_HC_EIGENDIAGNOSE

| WERT | TEXT |
| --- | --- |
| 1 | Eigendiagnose Spurwechselwarnung ausführen |
| 2 | Eigendiagnose Spurverlasswarnung ausführen |

### RES_0XAB57

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WERKSWINKEL_SRR_LINKS_WERT | - | - | + | Grad | - | char | - | - | 0.2 | - | - | Auslesen des abgespeicherten Werkswinkel des SRR links |

### RES_0XAB58

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WERKSWINKEL_SRR_RECHTS_WERT | - | - | + | Grad | - | char | - | - | 0.2 | - | - | Auslesen des abgespeicherten Werkswinkel des SRR rechts |

### RES_0XAB59

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WINKEL_WERT | - | - | + | Grad | - | int | - | - | 0.2 | - | - | Detektierter Winkel für Short Range Radar Sensor links (in Fahrtrichtung) |
| STAT_ABSTAND_WERT | - | - | + | m | - | unsigned int | - | - | 0.01 | - | - | Detektierter Abstand für Short Range Radar Sensor links (in Fahrtrichtung) |

### RES_0XAB5A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WINKEL_WERT | - | - | + | Grad | - | int | - | - | 0.2 | - | - | Detektierter Winkel für Short Range Radar Sensor rechts (in Fahrtrichtung) |
| STAT_ABSTAND_WERT | - | - | + | m | - | unsigned int | - | - | 0.01 | - | - | Detektierter Abstand für Short Range Radar Sensor rechts (in Fahrtrichtung) |

### RES_0XAB5B

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_EEPROM_SICHERN_NR | - | - | + | 0-n | - | unsigned char | - | - | - | - | - | Status der EEPROM Sicherung  0=Sicherung erfolgreich 1= Sicherung läuft  |

### TAB_STATUS_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Abbruch |
| 0x04 | Fehler |
| 0x05 | Phasenende |
| 0xFF | Ungültig |

### RES_0XAB5C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WINKEL_WERT | - | - | + | Grad | - | char | - | - | 0.2 | - | - | Abgespeicherter Justagewinkel für Short Range Radar Sensor rechts (in Fahrtrichtung) |

### RES_0XAB5D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WINKEL_WERT | - | - | + | Grad | - | char | - | - | 0.2 | - | - | Abgespeicherter Justagewinkel für Short Range Radar Sensor links (in Fahrtrichtung) |

### RES_0XAB5E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERIENNUMMER | - | - | + | 0-n | - | unsigned long | - | - | - | - | - | Anzeige SRR Seriennummer Links |

### RES_0XAB5F

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERIENNUMMER | - | - | + | 0-n | - | unsigned long | - | - | - | - | - | Anzeige SRR Seriennummer rechts |

### RES_0XAB60

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HARDWARENUMMER | - | - | + | 0-n | - | unsigned int | - | - | - | - | - | Anzeige SRR Hardwarenummer Links |

### RES_0XAB61

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HARDWARENUMMER | - | - | + | 0-n | - | unsigned int | - | - | - | - | - | Anzeige SRR Hardwarenummer Rechts |
