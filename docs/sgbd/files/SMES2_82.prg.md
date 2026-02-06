# SMES2_82.prg

## General

|  |  |
| --- | --- |
| File | SMES2_82.prg |
| Type | PRG |
| Jobs | 39 |
| Tables | 115 |
| Origin | BMW EA-412 Mellersh |
| Revision | 1.000 |
| Author | BMW EA-412 Mellersh |
| ECU Comment | SME [2] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | SpeicherManagementElektronik fuer BEV10-Slave2 |  |  |
| ORIGIN | string | BMW EA-412 Mellersh |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | BMW EA-412 Mellersh |  |  |
| COMMENT | string | SME [2] |  |  |
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

### FS_LESEN_PERMANENT

permanente Fehler aus Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $15 ReportDTCWithPermanentStatus Modus: Default

_No arguments._

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
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige Result table SG_Funktionen ARG ID RESULTNAME erzeugt |

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

### _STATUS_FS_LESEN_CSC

JobHeaderFormat UDS  : $22 ReadDataByIdentifier 0x650A _FS_LESEN_CSC

| Name | Type | Description |
| --- | --- | --- |
| _CSC_NUMBER | unsigned char | Nummer des CSCs 0..12 |

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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x21F000 | Hauptschalter (K2 Mst): Kurzschluss nach Masse | 0 |
| 0x21F001 | Hauptschalter (K2 Mst): Kurzschluss nach Ubatt | 0 |
| 0x21F002 | Hauptschalter (K2 Mst): offene Leitung | 0 |
| 0x21F003 | Hauptschalter (K1 Mst): Kurzschluss nach Masse | 0 |
| 0x21F004 | Hauptschalter (K1 Mst): Kurzschluss nach Ubatt | 0 |
| 0x21F005 | Hauptschalter (K1 Mst): offene Leitung | 0 |
| 0x21F006 | Hauptschalter (K3 Mst): Kurzschluss nach Masse | 0 |
| 0x21F007 | Hauptschalter (K3 Mst): Kurzschluss nach Ubatt | 0 |
| 0x21F008 | Hauptschalter (K3 Mst): offene Leitung | 0 |
| 0x21F009 | EEPROM: NV-Daten stehen auf Initiialwerten | 0 |
| 0x21F00A | ECU: unerwarteter Powerdown festgestellt | 0 |
| 0x21F00B | INFO: Kuehlmittelpumpe nicht freigegeben | 0 |
| 0x21F00C | HPI: Heizleistung zu niedrig | 0 |
| 0x21F00D | ErSt_Heating: Temperatur zu hoch | 0 |
| 0x21F00E | ErSt_Cooling: Ventilfehler | 0 |
| 0x21F00F | CSC CAN: Steuerungsmodul BUS INVALID | 0 |
| 0x21F010 | Speichervorhaltewert_106 | 0 |
| 0x21F011 | Speichervorhaltewert_54 | 0 |
| 0x21F012 | Spannungsversorgung intern: 5V Spannung zu niedrig | 0 |
| 0x21F013 | Stromversorgung CSC: Kurzschluss nach Masse | 0 |
| 0x21F014 | Stromversorgung CSC: Kurzschluss nach Ubatt | 0 |
| 0x21F015 | Stromversorgung U/i-Sensor: Kurzschluss nach Masse | 0 |
| 0x21F016 | Stromversorgung U/i-Sensor: Kurzschluss nach Ubatt | 0 |
| 0x21F017 | RTC: Werte der Echtzeituhr unplausibel | 0 |
| 0x21F018 | RTC: Wakeup der Echtzeituhr fehlerhaft | 0 |
| 0x21F019 | Kühlventil: Kurzschluss nach Masse | 0 |
| 0x21F01A | Kühlventil: Kurzschluss nach Ubatt | 0 |
| 0x21F01B | Kühlventil: offene Leitung | 0 |
| 0x21F01C | Temp.-Sensor Kühlung: außerhalb Bereich (oben) | 1 |
| 0x21F01D | Temp.-Sensor Kühlung: außerhalb Bereich (unten) | 1 |
| 0x21F01E | Plausibilität Zelltemperatur: INVALID Ersatzwert im Einsatz | 0 |
| 0x21F01F | Temp.-Sensor Kühlung: Kurzschluss nach Masse | 1 |
| 0x21F020 | Temp.-Sensor Kühlung: Kurzschluß nach Ubatt oder offene Leitung | 0 |
| 0x21F021 | EEPROM, NV-Daten: Lesefehler | 0 |
| 0x21F022 | EEPROM, NV-Daten: Schreibfehler | 0 |
| 0x21F023 | Speichervorhaltewert_57 | 0 |
| 0x21F024 | ECU: unerwarteter Reset festgestellt | 0 |
| 0x21F025 | ECU: Temperatur zu hoch | 0 |
| 0x21F026 | RAM: Defekt in Initialisierungsphase | 0 |
| 0x21F027 | RAM: Defekt in Laufzeitphase | 0 |
| 0x21F028 | ROM: Defekt in Initialisierungsphase | 0 |
| 0x21F029 | ROM: Defekt in Laufzeitphase | 0 |
| 0x21F02A | Isolationsüberwachung: Fehler des Iso-Messkontakts | 0 |
| 0x21F02B | Isolationüberwachung: externe DC Isolationsmessung ungültig | 0 |
| 0x21F02C | Isolationsüberwachung: Offsetspannung ungültig | 0 |
| 0x21F02D | Isolationsüberwachung: HV Batteriespannung (Referenz) außerhalb Bereich | 0 |
| 0x21F02E | HVS: U/i-Sensor -  CRC-Fehler bei Empfang auf Sensor | 0 |
| 0x21F02F | HVS: U/i-Sensor -  Sensortemperatur außerhalb Bereich | 0 |
| 0x21F030 | HVS: U/i-Sensor -  CRC-Fehler Programmspeicher | 0 |
| 0x21F031 | HVS: U/i-Sensor -  CRC-Fehler Kalibrierdaten auf dem Hauptcontroller | 0 |
| 0x21F032 | HVS: U/i-Sensor -  Fehler Spannungsversorgung Frontend Baustein | 0 |
| 0x21F033 | HVS: U/i-Sensor -  Fehler Referenzspannung Frontend Baustein | 0 |
| 0x21F034 | HVS: U/i-Sensor -  Fehler Messung Überstromerkennung | 0 |
| 0x21F035 | HVS: U/i-Sensor -  Fehler Kalibrierungsdaten  Frontendbaustein | 0 |
| 0x21F036 | HVS: U/i-Sensor -  Leitungsbruch Strompfad | 0 |
| 0x21F037 | U/i-Sensor: Fehler in der Referenzspannung der Hardwarereissleine erkannt | 0 |
| 0x21F038 | U/i-Sensor: Fehler in den Kalibrierdaten der Hardwarereissleine erkannt | 0 |
| 0x21F039 | U/i-Sensor: Fehler im Programmspeicher der Hardwarereissleine erkannt | 1 |
| 0x21F03A | U/i-Sensor:  Fehler in der Konfiguration des Frontendbausteins | 1 |
| 0x21F03B | HVS: U/i-Sensor -  Fehler Betriebsmodus | 1 |
| 0x21F03C | HVS: U/i-Sensor -  unerwarteter Reset | 0 |
| 0x21F03D | Speichervorhaltewert_Network_10 | 1 |
| 0x21F03E | U/i-Sensor-Kurzstatus: KOM-Fehler erkannt auf Sensor | 0 |
| 0x21F03F | U/i-Sensor-Kurzstatus: Messfehler erkannt auf SME | 0 |
| 0x21F040 | U/i-Sensor-Kurzstatus: interner Sensor-Fehler erkannt auf SME | 0 |
| 0x21F041 | U/i-Sensor-Layer: CRC-Fehler erkannt auf SME | 0 |
| 0x21F042 | U/i-Sensor: Diagnose Timeout | 0 |
| 0x21F043 | Crashüberwachung (Kl. 30C): nicht plausibel / Fehler | 0 |
| 0x21F044 | Crashsensor (Kl. 30C): Wert außerhalb Bereich oben | 0 |
| 0x21F045 | Isolationsüberwachung: Fehler des Iso-Messkontakts Slave1 | 0 |
| 0x21F046 | Klemme30F: Wert außerhalb Bereich oben | 0 |
| 0x21F047 | Plausibillität Modulspannungsmessung: Kontrolle gegen Zellspannungen unplausibel | 0 |
| 0x21F048 | Klemme 15: Wert außerhalb Bereich oben | 0 |
| 0x21F049 | Plausibilität Stromwert: Strom unplausibel. Kein Ersatzwert vorhanden | 0 |
| 0x21F04A | Klemme 15: unplausibel / Fehler | 0 |
| 0x21F04B | Ladungszustand: kritische obere SoC-Grenze erreicht | 0 |
| 0x21F04C | HVS: Ebene2 -  Abschaltpfadtest Sicherheitsrechner fehlgeschlagen | 0 |
| 0x21F04D | HVS: Abschaltpfadtest Lowside fehlgeschlagen | 0 |
| 0x21F04E | HVS: Ebene1 -  Abschaltpfadtest K1 fehlgeschlagen | 0 |
| 0x21F04F | HVS: Ebene1 -  Abschaltpfadtest K2 fehlgeschlagen | 0 |
| 0x21F050 | CSC Funktion: mind. ein T-Sensor im Modul 9 außerhalb Bereich (oben) | 0 |
| 0x21F051 | CSC Funktion: mind. ein T-Sensor im Modul 9 außerhalb Bereich (unten) | 0 |
| 0x21F052 | CSC Funktion: mind. ein T-Sensor im Modul 10 außerhalb Bereich (oben) | 0 |
| 0x21F053 | CSC Funktion: mind. ein T-Sensor im Modul 10 außerhalb Bereich (unten) | 0 |
| 0x21F054 | CSC Funktion: mind. ein T-Sensor im Modul 11 außerhalb Bereich (oben) | 0 |
| 0x21F055 | CSC Funktion: mind. ein T-Sensor im Modul 11 außerhalb Bereich (unten) | 0 |
| 0x21F056 | CSC Funktion: mind. ein T-Sensor im Modul 12 außerhalb Bereich (oben) | 0 |
| 0x21F057 | CSC Funktion: mind. ein T-Sensor im Modul 12 außerhalb Bereich (unten) | 0 |
| 0x21F058 | CSC Funktion: mind. ein T-Sensor im Modul 13 außerhalb Bereich (oben) | 0 |
| 0x21F059 | CSC Funktion: mind. ein T-Sensor im Modul 13 außerhalb Bereich (unten) | 0 |
| 0x21F05A | CSC Funktion: Modulspannung 9 außerhalb Bereich (High) | 0 |
| 0x21F05B | CSC Funktion: Modulspannung 9 außerhalb Bereich (Low) | 0 |
| 0x21F05C | CSC Funktion: Modulspannung 10 außerhalb Bereich (High) | 0 |
| 0x21F05D | CSC Funktion: Modulspannung 10 außerhalb Bereich (Low) | 0 |
| 0x21F05E | CSC Funktion: Modulspannung 11 außerhalb Bereich (High) | 0 |
| 0x21F05F | CSC Funktion: Modulspannung 11 außerhalb Bereich (Low) | 1 |
| 0x21F060 | CSC Funktion: Modulspannung 12 außerhalb Bereich (High) | 0 |
| 0x21F061 | CSC Funktion: Modulspannung 12 außerhalb Bereich (Low) | 1 |
| 0x21F062 | CSC Funktion: Modulspannung 13 außerhalb Bereich (High) | 1 |
| 0x21F063 | CSC Funktion: Modulspannung 13 außerhalb Bereich (Low) | 1 |
| 0x21F064 | Hauptschalter: neg. Schütze kleben Slave 1 | 0 |
| 0x21F065 | Hauptschalter: neg. Schütze kleben Slave 2 | 0 |
| 0x21F066 | Hauptschalter: pos. Schütze kleben Slave 1 | 0 |
| 0x21F067 | Hauptschalter: pos. Schütze kleben Slave 2 | 0 |
| 0x21F068 | Hauptschalter: pos. Schütze lassen sich nicht schließen Slave 1 | 0 |
| 0x21F069 | Hauptschalter: pos. Schütze lassen sich nicht schließen Slave 2 | 0 |
| 0x21F06A | Hauptschalter: neg. Schütze lassen sich nicht schließen Master | 0 |
| 0x21F06B | Hauptschalter: neg. Schütze Schütze lassen sich nicht schließen Slave 1 | 0 |
| 0x21F06C | Hauptschalter: neg. Schütze Schütze lassen sich nicht schließen Slave 2 | 0 |
| 0x21F06D | Speichervorhaltewert_125 | 0 |
| 0x21F06E | HVS: Ebene2 -  Abschalten detektiert | 1 |
| 0x21F06F | HVS: Ebene2 -  Timeout Abschaltpfadtest Sicherheitsrechner | 1 |
| 0x21F070 | CSC CAN: CSC fehlt | 0 |
| 0x21F071 | CSC CAN: fehlende Zellspannungen | 0 |
| 0x21F072 | CSC Funktion: Standby-Befehl nicht akzeptiert | 0 |
| 0x21F073 | HVS: Temp.-Sensor Kühlung Master: unplausibel | 1 |
| 0x21F074 | HVS: Temp.-Sensor Kühlung Slave1: unplausibel | 0 |
| 0x21F075 | HVS: Temp.-Sensor Kühlung Slave2: unplausibel | 1 |
| 0x21F076 | Speichervorhaltewert_Network_9 | 1 |
| 0x21F077 | Speichervorhaltewert_Network_8 | 1 |
| 0x21F078 | Speichervorhaltewert_Network_7 | 1 |
| 0x21F079 | Speichervorhaltewert_Network_6 | 1 |
| 0x21F07A | Speichervorhaltewert_Network_5 | 1 |
| 0x21F07B | Isolationsfehler verbunden mit einen gleichzeitigem Schützkleber | 0 |
| 0x21F07C | Fehler-Kategorie 5 oder 6 während der Vorladung | 0 |
| 0x21F07D | Ebene2: Unterspannung Einzelzelle erkannt | 0 |
| 0x21F07E | Kühlventil: Ventil lässt sich nicht schließen | 0 |
| 0x21F07F | Kühlventil: Ventil lässt sich nicht öffnen | 0 |
| 0x21F080 | CSC Funktion: mind. eine Zellspannung im Modul 1 außerhalb Bereich (oben) | 1 |
| 0x21F081 | CSC Funktion: mind. eine Zellspannung im Modul 1 außerhalb Bereich (unten) | 1 |
| 0x21F082 | CSC Funktion: mind. eine Zellspannung im Modul 2 außerhalb Bereich (oben) | 1 |
| 0x21F083 | CSC Funktion: mind. eine Zellspannung im Modul 2 außerhalb Bereich (unten) | 1 |
| 0x21F084 | CSC Funktion: mind. eine Zellspannung im Modul 3 außerhalb Bereich (oben) | 1 |
| 0x21F085 | CSC Funktion: mind. eine Zellspannung im Modul 3 außerhalb Bereich (unten) | 1 |
| 0x21F086 | CSC Funktion: mind. eine Zellspannung im Modul 4 außerhalb Bereich (oben) | 1 |
| 0x21F087 | CSC Funktion: mind. eine Zellspannung im Modul 4 außerhalb Bereich (unten) | 1 |
| 0x21F088 | CSC Funktion: mind. eine Zellspannung im Modul 5 außerhalb Bereich (oben) | 1 |
| 0x21F089 | CSC Funktion: mind. eine Zellspannung im Modul 5 außerhalb Bereich (unten) | 1 |
| 0x21F08A | CSC Funktion: mind. eine Zellspannung im Modul 6 außerhalb Bereich (oben) | 1 |
| 0x21F08B | CSC Funktion: mind. eine Zellspannung im Modul 6 außerhalb Bereich (unten) | 1 |
| 0x21F08C | CSC Funktion: mind. eine Zellspannung im Modul 7 außerhalb Bereich (oben) | 1 |
| 0x21F08D | CSC Funktion: mind. eine Zellspannung im Modul 7 außerhalb Bereich (unten) | 1 |
| 0x21F08E | CSC Funktion: mind. eine Zellspannung im Modul 8 außerhalb Bereich (oben) | 1 |
| 0x21F08F | CSC Funktion: mind. eine Zellspannung im Modul 8 außerhalb Bereich (unten) | 0 |
| 0x21F090 | CSC Funktion: mind. ein T-Sensor im Modul 1 außerhalb Bereich (oben) | 0 |
| 0x21F091 | CSC Funktion: mind. ein T-Sensor im Modul 1 außerhalb Bereich (unten) | 0 |
| 0x21F092 | CSC Funktion: mind. ein T-Sensor im Modul 2 außerhalb Bereich (oben) | 0 |
| 0x21F093 | CSC Funktion: mind. ein T-Sensor im Modul 2 außerhalb Bereich (unten) | 0 |
| 0x21F094 | CSC Funktion: mind. ein T-Sensor im Modul 3 außerhalb Bereich (oben) | 0 |
| 0x21F095 | CSC Funktion: mind. ein T-Sensor im Modul 3 außerhalb Bereich (unten) | 0 |
| 0x21F096 | CSC Funktion: mind. ein T-Sensor im Modul 4 außerhalb Bereich (oben) | 0 |
| 0x21F097 | CSC Funktion: mind. ein T-Sensor im Modul 4 außerhalb Bereich (unten) | 0 |
| 0x21F098 | CSC Funktion: mind. ein T-Sensor im Modul 5 außerhalb Bereich (oben) | 0 |
| 0x21F099 | CSC Funktion: mind. ein T-Sensor im Modul 5 außerhalb Bereich (unten) | 0 |
| 0x21F09A | CSC Funktion: mind. ein T-Sensor im Modul 6 außerhalb Bereich (oben) | 0 |
| 0x21F09B | CSC Funktion: mind. ein T-Sensor im Modul 6 außerhalb Bereich (unten) | 0 |
| 0x21F09C | CSC Funktion: mind. ein T-Sensor im Modul 7 außerhalb Bereich (oben) | 0 |
| 0x21F09D | CSC Funktion: mind. ein T-Sensor im Modul 7 außerhalb Bereich (unten) | 0 |
| 0x21F09E | CSC Funktion: mind. ein T-Sensor im Modul 8 außerhalb Bereich (oben) | 0 |
| 0x21F09F | CSC Funktion: mind. ein T-Sensor im Modul 8 außerhalb Bereich (unten) | 0 |
| 0x21F0A0 | CSC Funktion: Modulspannung 1 außerhalb Bereich (High) | 0 |
| 0x21F0A1 | CSC Funktion: Modulspannung 1 außerhalb Bereich (Low) | 0 |
| 0x21F0A2 | CSC Funktion: Modulspannung 2 außerhalb Bereich (High) | 0 |
| 0x21F0A3 | CSC Funktion: Modulspannung 2 außerhalb Bereich (Low) | 1 |
| 0x21F0A4 | CSC Funktion: Modulspannung 3 außerhalb Bereich (High) | 1 |
| 0x21F0A5 | CSC Funktion: Modulspannung 3 außerhalb Bereich (Low) | 1 |
| 0x21F0A6 | CSC Funktion: Modulspannung 4 außerhalb Bereich (High) | 0 |
| 0x21F0A7 | CSC Funktion: Modulspannung 4 außerhalb Bereich (Low) | 1 |
| 0x21F0A8 | CSC Funktion: Modulspannung 5 außerhalb Bereich (High) | 0 |
| 0x21F0A9 | CSC Funktion: Modulspannung 5 außerhalb Bereich (Low) | 0 |
| 0x21F0AA | CSC Funktion: Modulspannung 6 außerhalb Bereich (High) | 1 |
| 0x21F0AB | CSC Funktion: Modulspannung 6 außerhalb Bereich (Low) | 1 |
| 0x21F0AC | CSC Funktion: Modulspannung 7 außerhalb Bereich (High) | 0 |
| 0x21F0AD | CSC Funktion: Modulspannung 7 außerhalb Bereich (Low) | 0 |
| 0x21F0AE | CSC Funktion: Modulspannung 8 außerhalb Bereich (High) | 1 |
| 0x21F0AF | CSC Funktion: Modulspannung 8 außerhalb Bereich (Low) | 0 |
| 0x21F0B0 | CSC Funktion: offene Leitung aufgetreten | 1 |
| 0x21F0B1 | CSC Funktion: Symmetriereinheit defekt | 0 |
| 0x21F0B2 | CSC Funktion: ECU-Temperatur zu hoch | 0 |
| 0x21F0B3 | CSC Funktion: thermisches Abschalten aufgetreten | 0 |
| 0x21F0B4 | CSC Funktion: Ungültige Anfrage empfangen | 0 |
| 0x21F0B5 | CSC Funktion: Symmetrierung nicht möglich, niedrigste Symmetrierspannung erreicht | 0 |
| 0x21F0B6 | CSC Funktion: CSC Wake-Up defekt | 0 |
| 0x21F0B7 | CSC Funktion: Kommunikation Frontend/CSC fehlgeschlagen | 0 |
| 0x21F0B8 | CSC Funktion: ungültige CAN DB | 0 |
| 0x21F0B9 | CSC Funktion: CAN Kommunikationsausfall detektiert | 0 |
| 0x21F0BA | CSC Funktion: ADC-Test 1 LTC6802 nicht bestanden | 0 |
| 0x21F0BB | CSC Funktion: ADC-Test 2 LTC6802 nicht bestanden | 0 |
| 0x21F0BC | CSC Funktion: LTC6801 Selbsttest nicht bestanden | 0 |
| 0x21F0BD | CSC Funktion: RAM Selbsttest nicht bestanden | 0 |
| 0x21F0BE | CSC Funktion: ROM Selbsttest nicht bestanden | 0 |
| 0x21F0BF | Speichervorhaltewert_12 | 0 |
| 0x21F0C0 | Zelltemperaturen: Modultemperatur 9/13 unplausibel | 0 |
| 0x21F0C1 | Zelltemperaturen: Modultemperatur 10/13 unplausibel | 1 |
| 0x21F0C2 | Zelltemperaturen: Modultemperatur 11/13 unplausibel | 1 |
| 0x21F0C3 | Zelltemperaturen: Modultemperatur 12/13 unplausibel | 1 |
| 0x21F0C4 | Zelltemperaturen: Modultemperatur 13/13 unplausibel | 1 |
| 0x21F0C5 | Zelltemperaturen: 9/13 Übertemperatur | 1 |
| 0x21F0C6 | Zelltemperaturen: 10/13Übertemperatur | 0 |
| 0x21F0C7 | Zelltemperaturen: 11/13Übertemperatur | 0 |
| 0x21F0C8 | Zelltemperaturen: 12/13 Übertemperatur | 0 |
| 0x21F0C9 | Zelltemperaturen: 13/13Übertemperatur | 0 |
| 0x21F0CA | Übertemperatur Kühlplatte Master-Speicher | 0 |
| 0x21F0CB | Übertemperatur Kühlplatte Slave1-Speicher | 0 |
| 0x21F0CC | Übertemperatur Kühlplatte Slave2-Speicher | 1 |
| 0x21F0CD | Überschreitung zulässiges Temperaturdelta Kühlplatte - Zellen | 0 |
| 0x21F0CE | Isolationsüberwachung: interne Isolationsmessung unplausibel S1 | 0 |
| 0x21F0CF | Isolationsüberwachung: interne Isolationsmessung unplausibel S2 | 0 |
| 0x21F0D0 | Isolationsüberwachung: interne Isolationwarnung S1 (offene Schütze, Nachlauf) | 0 |
| 0x21F0D1 | Isolationsüberwachung: interne Isolationwarnung S2 (offene Schütze, Nachlauf) | 0 |
| 0x21F0D2 | Isolationsüberwachung: interner Isolationsfehler S1 (offene Schütze, Nachlauf) | 0 |
| 0x21F0D3 | Isolationsüberwachung: interner Isolationsfehler S2 (offene Schütze, Nachlauf) | 0 |
| 0x21F0D4 | Init Slave1 nicht erfolgt | 0 |
| 0x21F0D5 | Init Slave2 nicht erfolgt | 0 |
| 0x21F0D6 | Fehlerhaftes Modul in Master-Speicher | 0 |
| 0x21F0D7 | Fehlerhaftes Modul in Slave1-Speicher | 0 |
| 0x21F0D8 | Fehlerhaftes Modul in Slave2-Speicher | 0 |
| 0x21F0D9 | HV-Slaves zu lang | 0 |
| 0x21F0DA | Vorladeschütz zu warm | 0 |
| 0x21F0DB | Speichervorhaltewert_53 | 1 |
| 0x21F0DC | Speichervorhaltewert_69 | 0 |
| 0x21F0DD | Speichervorhaltewert_70 | 0 |
| 0x21F0DE | Speichervorhaltewert_71 | 0 |
| 0x21F0DF | Speichervorhaltewert_72 | 0 |
| 0x21F0E0 | Speichervorhaltewert_73 | 0 |
| 0x21F0E1 | Speichervorhaltewert_74 | 0 |
| 0x21F0E2 | Speichervorhaltewert_75 | 0 |
| 0x21F0E3 | Speichervorhaltewert_76 | 0 |
| 0x21F0E4 | Speichervorhaltewert_77 | 0 |
| 0x21F0E5 | Speichervorhaltewert_78 | 0 |
| 0x21F0E6 | Speichervorhaltewert_79 | 0 |
| 0x21F0E7 | Speichervorhaltewert_80 | 1 |
| 0x21F0E8 | Speichervorhaltewert_81 | 1 |
| 0x21F0E9 | Speichervorhaltewert_82 | 1 |
| 0x21F0EA | Speichervorhaltewert_83 | 1 |
| 0x21F0EB | Speichervorhaltewert_84 | 1 |
| 0x21F0EC | Speichervorhaltewert_85 | 1 |
| 0x21F0ED | Speichervorhaltewert_86 | 1 |
| 0x21F0EE | Speichervorhaltewert_87 | 1 |
| 0x21F0EF | Speichervorhaltewert_88 | 1 |
| 0x21F0F0 | U/i-Sensor: Überlauf Messung Ubatt | 1 |
| 0x21F0F1 | Speichervorhaltewert_89 | 1 |
| 0x21F0F2 | Speichervorhaltewert_90 | 1 |
| 0x21F0F3 | Speichervorhaltewert_91 | 1 |
| 0x21F0F4 | Speichervorhaltewert_92 | 1 |
| 0x21F0F5 | Speichervorhaltewert_Network_2 | 1 |
| 0x21F0F6 | Temp.-Sensor Kühlung S1: außerhalb Bereich (oben oder unten) | 0 |
| 0x21F0F7 | Temp.-Sensor Kühlung S2: außerhalb Bereich (oben oder unten) | 0 |
| 0x21F0F8 | HVS: Hauptschalter (K2): Treiberfehler | 0 |
| 0x21F0F9 | HVS: Hauptschalter (K1): Treiberfehler | 0 |
| 0x21F0FA | HVS: Hauptschalter (K3): Treiberfehler | 0 |
| 0x21F0FB | Kühlventil: Treiberfehler | 0 |
| 0x21F0FC | HVS: CSC Treiberfehler | 0 |
| 0x21F0FD | HVS: Abschaltung der Hauptschütze -  Flashmode aktiv | 0 |
| 0x21F0FE | HVS: Hauptschalter: Treiberfehler Slave1 | 0 |
| 0x21F0FF | HVS: Hauptschalter: Treiberfehler Slave2 | 0 |
| 0x21F100 | Service Disconnect: steckt nicht | 0 |
| 0x21F101 | U/i-Sensor: Überlauf Strommessung | 0 |
| 0x21F102 | Crash: Crash I (ACAN, reversibel) festgestellt | 0 |
| 0x21F103 | Crash: Crash II (ACAN und KL30C, irreversibel) festgestellt | 0 |
| 0x21F104 | 12 V Versorgung (KL 30 F): Unterspannung | 0 |
| 0x21F105 | 12 V Versorgung (KL 30 F): Überspannung | 0 |
| 0x21F106 | Crashüberwachung (KL 30 C): Unterspannung | 0 |
| 0x21F107 | Speichervorhaltewert_58 | 0 |
| 0x21F108 | Speichervorhaltewert_59 | 0 |
| 0x21F109 | Hauptschalter: Warnung Schützalterung | 1 |
| 0x21F10A | Hauptschalter: Lebensdauerende erreicht | 1 |
| 0x21F10B | Hauptschalter: neg. Schütze kleben Master | 0 |
| 0x21F10C | U/i-Sensor: Überlauf Messung Uk2 | 1 |
| 0x21F10D | Stromüberwachung: Überstrom erkannt | 1 |
| 0x21F10E | Hauptschalter: pos. Schütze kleben Master | 0 |
| 0x21F10F | Hauptschalter: pos. Schütze lassen sich nicht schließen Master | 0 |
| 0x21F110 | Hauptschalter: Abschaltung unter Last festgestellt | 1 |
| 0x21F111 | Stromüberwachung: außerhalb Bereich (oben) | 1 |
| 0x21F112 | Stromüberwachung: außerhalb Bereich (unten) | 1 |
| 0x21F113 | Stromüberwachung: Toleranzüberschreitung untere Strombegrenzung | 1 |
| 0x21F114 | Stromüberwachung: Toleranzüberschreitung obere Strombegrenzung | 1 |
| 0x21F115 | U/i-Sensor: Überlauf Messung Uq | 0 |
| 0x21F116 | Stromüberwachung: Gewährleistungsüberschreitung Strombegrenzung | 1 |
| 0x21F117 | Speichervorhaltewert_60 | 0 |
| 0x21F118 | Speichervorhaltewert_61 | 0 |
| 0x21F119 | U/i-Sensor: Meßbereichsüberschreitung Stromsensor (oben) | 0 |
| 0x21F11A | U/i-Sensor: Meßbereichsüberschreitung Stromsensor (unten) | 0 |
| 0x21F11B | U/i-Sensor: Messbereichsüberschreitung Ubatt (oben) | 0 |
| 0x21F11C | U/i-Sensor: Messbereichsüberschreitung Ubatt (unten) | 0 |
| 0x21F11D | Speichervorhaltewert_62 | 0 |
| 0x21F11E | Speichervorhaltewert_63 | 0 |
| 0x21F11F | Speichervorhaltewert_64 | 0 |
| 0x21F120 | Speichervorhaltewert_65 | 0 |
| 0x21F121 | Zellspannung: Verletzung obere HW-Grenze | 1 |
| 0x21F122 | Zellspannung: Verletzung untere HW-Grenze | 1 |
| 0x21F123 | Zellspannung: Toleranzüberschreitung obere Spannungsbegrenzung | 1 |
| 0x21F124 | Zellspannung: Toleranzüberschreitung untere Spannungsbegrenzung | 1 |
| 0x21F125 | Zellspannung: Toleranzüberschreitung obere Spannungsbegrenzung (Gewährleistung) | 1 |
| 0x21F126 | Zellspannung: Toleranzüberschreitung untere Spannungsbegrenzung (Gewährleistung) | 1 |
| 0x21F127 | Batteriespannung: Toleranzüberschreitung obere Spannungsbegrenzung | 1 |
| 0x21F128 | Batteriespannung: Toleranzüberschreitung untere Spannungsbegrenzung | 1 |
| 0x21F129 | HV-Interlock: kein Signal erzeugt | 0 |
| 0x21F12A | HV-Interlock: offene Leitung | 0 |
| 0x21F12B | HV-Interlock: Kurzschluss in Schleife | 0 |
| 0x21F12C | HV-Interlock: Kurzschluss nach Ubatt | 0 |
| 0x21F12D | HV-Interlock: Kurzschluss nach Masse | 0 |
| 0x21F12E | HV-Interlock: Spannung zu hoch | 0 |
| 0x21F12F | HV-Interlock: Störung festgestellt | 0 |
| 0x21F130 | Isolationsüberwachung: externer DC Isolationsfehler (geschlossene Schütze, Betriebsphase) | 0 |
| 0x21F131 | U/i-Sensor: Messbereichsüberschreitung Uk2 (oben) | 0 |
| 0x21F132 | U/i-Sensor: Messbereichsüberschreitung Uk2 (unten) | 0 |
| 0x21F133 | Isolationsüberwachung: externe DC Isolationswarnung (geschlossene Schütze, Betriebsphase) | 0 |
| 0x21F134 | Isolationsüberwachung: externer AC Isolationsfehler (geschlossene Schütze, Nachlauf) | 0 |
| 0x21F135 | U/i-Sensor: Messbereichsüberschreitung Uq (oben) | 0 |
| 0x21F136 | U/i-Sensor: Messbereichsüberschreitung Uq (unten) | 1 |
| 0x21F137 | Isolationsüberwachung: externe AC Isolationswarnung (geschlossene Schütze, Nachlauf) | 0 |
| 0x21F138 | Isolationsüberwachung: interner Isolationsfehler MST (offene Schütze, Nachlauf) | 0 |
| 0x21F139 | U/i-Sensor: Range-Check-Verletzung Slave1 | 0 |
| 0x21F13A | Isolationsüberwachung: Isolationsüberwachung deaktivert | 0 |
| 0x21F13B | Isolationsüberwachung: interne Isolationwarnung MST (offene Schütze, Nachlauf) | 0 |
| 0x21F13C | Isolationsüberwachung: externe Isolationsmessung unplausibel (geschlossene Schütze) | 0 |
| 0x21F13D | Isolationsüberwachung: interne Isolationsmessung unplausibel MST | 0 |
| 0x21F13E | Vorladung: Strom zu hoch | 0 |
| 0x21F13F | Vorladung: falsche Stromrichtung | 1 |
| 0x21F140 | Vorladung: Zeit zu lang | 0 |
| 0x21F141 | Vorladung: Zeit zu kurz | 0 |
| 0x21F142 | Vorladung: Kurzschluss im Zwischenkreis detektiert | 1 |
| 0x21F143 | Speichervorhaltewert_66 | 0 |
| 0x21F144 | Plausibilität Batteriespannung: Spannung unplausibel, kein Ersatzwert vorhanden | 1 |
| 0x21F145 | U/i-Sensor: Range-Check-Verletzung Slave2 | 0 |
| 0x21F146 | HVS: Stromversorgung CSC- - offene Leitung | 0 |
| 0x21F147 | Plausibilität Zwischenkreisspannung: Spannung unplausibel, kein Ersatzwert vorhanden | 0 |
| 0x21F148 | HVS: Stromversorgung U/i-Sensor- - offene Leitung | 0 |
| 0x21F149 | Speichervorhaltewert_Network_3 | 1 |
| 0x21F14A | Zelltemperaturen: Modultemperatur 1/13 unplausibel | 0 |
| 0x21F14B | Zelltemperaturen: Modultemperatur 2/13 unplausibel | 0 |
| 0x21F14C | Zelltemperaturen: Modultemperatur 3/13 unplausibel | 0 |
| 0x21F14D | Zelltemperaturen: Modultemperatur 4/13 unplausibel | 0 |
| 0x21F14E | Zelltemperaturen: Modultemperatur 5/13 unplausibel | 0 |
| 0x21F14F | Zelltemperaturen: Modultemperatur 6/13 unplausibel | 0 |
| 0x21F150 | Zelltemperaturen: Modultemperatur 7/13 unplausibel | 1 |
| 0x21F151 | Zelltemperaturen: Modultemperatur 8/13 unplausibel | 1 |
| 0x21F152 | Speichervorhaltewert_Network_4 | 1 |
| 0x21F153 | Plausibilität Zelltemperatur: Ersatzwert im Einsatz | 1 |
| 0x21F154 | Plausibilität Zelltemperatur: kein Ersatzwert vorhanden | 0 |
| 0x21F155 | Zellspannungsmessung: alle Zellspannungen ungültig | 0 |
| 0x21F156 | Zellspannungsmessung: eine oder mehrere Zellspannungen ungültig | 1 |
| 0x21F157 | Plausibillität Modulspannungsmessung: Kontrolle gegen Zellspannungen unplausibel | 1 |
| 0x21F158 | Speichervorhaltewert_15 | 0 |
| 0x21F159 | Plausibilität Stromwert: Strom unplausibel. Kein Ersatzwert vorhanden | 0 |
| 0x21F15A | Speichervorhaltewert_16 | 0 |
| 0x21F15B | Speichervorhaltewert_17 | 0 |
| 0x21F15C | Speichervorhaltewert_18 | 0 |
| 0x21F15D | Speichervorhaltewert_19 | 0 |
| 0x21F15E | Speichervorhaltewert_20 | 0 |
| 0x21F15F | Speichervorhaltewert_21 | 0 |
| 0x21F160 | Speichervorhaltewert_22 | 0 |
| 0x21F161 | Speichervorhaltewert_23 | 0 |
| 0x21F162 | Speichervorhaltewert_24 | 1 |
| 0x21F163 | Speichervorhaltewert_25 | 0 |
| 0x21F164 | Speichervorhaltewert_26 | 0 |
| 0x21F165 | Speichervorhaltewert_27 | 0 |
| 0x21F166 | Speichervorhaltewert_28 | 0 |
| 0x21F167 | Speichervorhaltewert_29 | 0 |
| 0x21F168 | Speichervorhaltewert_30 | 0 |
| 0x21F169 | Speichervorhaltewert_31 | 0 |
| 0x21F16A | Speichervorhaltewert_32 | 0 |
| 0x21F16F | Zelltemperaturen: Zu viele Sensoren defekt oder unplausibel | 0 |
| 0x21F170 | Zelltemperaturen: 1/13 Übertemperatur | 0 |
| 0x21F171 | Zelltemperaturen: 2/13 Übertemperatur | 0 |
| 0x21F172 | Zelltemperaturen: 3/13 Übertemperatur | 0 |
| 0x21F173 | Zelltemperaturen: 4/13 Übertemperatur | 0 |
| 0x21F174 | Zelltemperaturen: 5/13 Übertemperatur | 0 |
| 0x21F175 | Zelltemperaturen: 6/13 Übertemperatur | 0 |
| 0x21F176 | Zelltemperaturen: 7/13 Übertemperatur | 0 |
| 0x21F177 | Zelltemperaturen: 8/13 Übertemperatur | 1 |
| 0x21F178 | CPI: Kühlleistung zu niedrig | 0 |
| 0x21F179 | Plausibilität Batteriespannung Master: Spannung unplausibel, kein Ersatzwert vorhanden | 1 |
| 0x21F17A | Plausibilität Batteriespannung Slave1: Spannung unplausibel, kein Ersatzwert vorhanden | 1 |
| 0x21F17B | Plausibilität Batteriespannung Slave2: Spannung unplausibel, kein Ersatzwert vorhanden | 1 |
| 0x21F17C | Plausibilität Batteriespannung: Ersatzwert im Einsatz | 0 |
| 0x21F17D | Plausibilität Batteriespannung Master: Ersatzwert im Einsatz | 1 |
| 0x21F17E | Plausibilität Batteriespannung Slave1: Ersatzwert im Einsatz | 0 |
| 0x21F17F | Plausibilität Batteriespannung Slave2: Ersatzwert im Einsatz | 0 |
| 0x21F180 | Batteriealterung: SOH niedrig (Warnschwelle) | 0 |
| 0x21F181 | Batteriealterung: SOH niedrig (Fehlerschwelle) | 1 |
| 0x21F182 | Ladungszustand: kritische obere SoC-Grenze erreicht | 0 |
| 0x21F183 | Speichervorhaltewert_67 | 0 |
| 0x21F184 | Ladungszustand: kritische untere SoC-Grenze erreicht | 1 |
| 0x21F185 | Ladungszustand:SoC unplausibel | 0 |
| 0x21F186 | Zellüberwachung: Zellen sind stark unsymmetriert | 0 |
| 0x21F187 | Zellüberwachung: Zelldefekt festgestellt | 0 |
| 0x21F188 | Drosselung: Herabsetzung der Entladungsstromgrenze wegen Temperatur / SOC-Grenze | 0 |
| 0x21F189 | Drosselung: Herabsetzung der Ladungsstromgrenze wegen Temperatur / SOC-Grenze | 1 |
| 0x21F18A | Deaktivierung Hauptschalter nach Fehler | 0 |
| 0x21F18B | Speichervorhaltewert_68 | 0 |
| 0x21F18C | Zuschaltung verhindert: Überhitzungsschutz | 0 |
| 0x21F18D | Zuschaltung verhindert: Maximale Anzahl Fehlversuche überschritten. | 0 |
| 0x21F18E | Zuschaltung verhindert: Zwischenkreisspannung außerhalb des zulässigen Bereichs | 0 |
| 0x21F18F | Zuschaltung verhindert: Sicherheitsmerkmale nicht erfüllt | 0 |
| 0x21F190 | Zuschaltung verhindert: Transport-Bit gesetzt | 0 |
| 0x21F192 | Strom ohne Leistungsanforderung | 1 |
| 0x21F196 | Plausibilität Zwischenkreisspannung: Ersatzwert im Einsatz | 0 |
| 0x21F1A0 | Ebene2: Übertemperatur erkannt | 1 |
| 0x21F1A1 | Ebene2: Überspannung Einzelzelle erkannt | 1 |
| 0x21F1A2 | Ebene2: Überstrom erkannt | 0 |
| 0x21F1A3 | Ebene2: Temperatur unplausibel | 0 |
| 0x21F1A4 | Ebene2: Zellspannung unplausibel | 0 |
| 0x21F1A5 | Ebene2: Strom unplausibel | 0 |
| 0x21F1A6 | Eskalation: KAT5 nach KAT6 | 1 |
| 0x21F1B0 | Sicherheitskonzept: Programmflußfehler | 1 |
| 0x21F1B1 | Sicherheitskonzept: abnormales Abschalten detektiert | 0 |
| 0x21F1B2 | Speichervorhaltewert_93 | 1 |
| 0x21F1B3 | Speichervorhaltewert_94 | 1 |
| 0x21F1B4 | Speichervorhaltewert_95 | 0 |
| 0x21F1B5 | Speichervorhaltewert_96 | 0 |
| 0x21F1B6 | Speichervorhaltewert_97 | 0 |
| 0x21F1B7 | Speichervorhaltewert_98 | 0 |
| 0x21F1B8 | Speichervorhaltewert_99 | 0 |
| 0x21F1B9 | Speichervorhaltewert_100 | 0 |
| 0x21F1BA | Speichervorhaltewert_101 | 0 |
| 0x21F1BB | Speichervorhaltewert_102 | 0 |
| 0x21F1BC | Speichervorhaltewert_103 | 0 |
| 0x21F1BD | Speichervorhaltewert_104 | 0 |
| 0x21F1BE | Speichervorhaltewert_105 | 0 |
| 0x21F1C0 | Hauptschalter (K1 Sl1): Kurzschluss nach Masse | 0 |
| 0x21F1C1 | Hauptschalter (K1 Sl1): Kurzschluss nach Ubatt | 0 |
| 0x21F1C2 | Hauptschalter (K1 Sl1): offene Leitung | 0 |
| 0x21F1C3 | Hauptschalter (K2 Sl1): Kurzschluss nach Masse | 0 |
| 0x21F1C4 | Hauptschalter (K2 Sl1): Kurzschluss nach Ubatt | 0 |
| 0x21F1C5 | Hauptschalter (K2 Sl1): offene Leitung | 0 |
| 0x21F1C6 | Hauptschalter (K1 Sl2): Kurzschluss nach Masse | 1 |
| 0x21F1C7 | Hauptschalter (K1 Sl2)): Kurzschluss nach Ubatt | 0 |
| 0x21F1C8 | Hauptschalter (K1 Sl2)): offene Leitung | 0 |
| 0x21F1C9 | Hauptschalter (K2 Sl2)): Kurzschluss nach Masse | 0 |
| 0x21F1CA | Hauptschalter (K2 Sl2)): Kurzschluss nach Ubatt | 0 |
| 0x21F1CB | Hauptschalter (K2 Sl2)): offene Leitung | 0 |
| 0x21F1CC | Speichervorhaltewert_107 | 0 |
| 0x21F1CD | Speichervorhaltewert_55 | 0 |
| 0x21F1CE | Speichervorhaltewert_108 | 0 |
| 0x21F1CF | Speichervorhaltewert_56 | 0 |
| 0x21F1D0 | Fehler in Spannungsversorgung 5V oder CPU Temp oder RTC oder cool_sens Slave 1 | 0 |
| 0x21F1D1 | Fehler in Spannungsversorgung 5V oder CPU Temp oder RTC oder cool_sens Slave 2 | 0 |
| 0x21F1D2 | Stromversorgung U/i-Sensor Slave 1: Kurzschluss nach Ubatt oder Ground | 0 |
| 0x21F1D3 | Stromversorgung U/i-Sensor Slave 2: Kurzschluss nach Ubatt oder Ground | 0 |
| 0x21F1D4 | Kühlpumpe: Kurzschluss nach Ubatt | 0 |
| 0x21F1D5 | Kühlpumpe: offene Leitung | 0 |
| 0x21F1D6 | Isolationüberwachung: externe DC Isolationsmessung ungültig  Slave1 | 0 |
| 0x21F1D7 | Isolationsüberwachung: Offsetspannung ungültig  Slave1 | 0 |
| 0x21F1D8 | Isolationsüberwachung: HV Batteriespannung (Referenz) außerhalb Bereich  Slave1 | 0 |
| 0x21F1D9 | Isolationsüberwachung: Fehler des Iso-Messkontakts  Slave2 | 0 |
| 0x21F1DA | Isolationüberwachung: externe DC Isolationsmessung ungültig  Slave2 | 0 |
| 0x21F1DB | Isolationsüberwachung: Offsetspannung ungültig  Slave2 | 0 |
| 0x21F1DC | Isolationsüberwachung: HV Batteriespannung (Referenz) außerhalb Bereich  Slave2 | 0 |
| 0x21F1DD | Kühlpumpe: Kurzschluss nach Masse | 0 |
| 0x21F1DE | U/i-Sensor: Fehler Slave 1 | 0 |
| 0x21F1DF | U/i-Sensor: Fehler Slave 2 | 0 |
| 0x21F1E0 | Klemme 30C Slave1: Fehler | 0 |
| 0x21F1E1 | Klemme 30F Slave1: Fehler | 1 |
| 0x21F1E2 | Klemme 15 Slave1: Fehler | 0 |
| 0x21F1E3 | Klemme 30C Slave2: Fehler | 0 |
| 0x21F1E4 | Klemme 30F Slave2: Fehler | 1 |
| 0x21F1E5 | Klemme 15 Slave2: Fehler | 0 |
| 0x21F1E6 | CSC Funktion: mind. eine Zellspannung im Modul 9 außerhalb Bereich (oben) | 0 |
| 0x21F1E7 | CSC Funktion: mind. eine Zellspannung im Modul 9 außerhalb Bereich (unten) | 0 |
| 0x21F1E8 | CSC Funktion: mind. eine Zellspannung im Modul 10 außerhalb Bereich (oben) | 0 |
| 0x21F1E9 | CSC Funktion: mind. eine Zellspannung im Modul 10 außerhalb Bereich (unten) | 0 |
| 0x21F1EA | CSC Funktion: mind. eine Zellspannung im Modul 11 außerhalb Bereich (oben) | 1 |
| 0x21F1EB | CSC Funktion: mind. eine Zellspannung im Modul 11 außerhalb Bereich (unten) | 1 |
| 0x21F1EC | CSC Funktion: mind. eine Zellspannung im Modul 12 außerhalb Bereich (oben) | 1 |
| 0x21F1ED | CSC Funktion: mind. eine Zellspannung im Modul 12 außerhalb Bereich (unten) | 1 |
| 0x21F1EE | CSC Funktion: mind. eine Zellspannung im Modul 13 außerhalb Bereich (oben) | 1 |
| 0x21F1EF | CSC Funktion: mind. eine Zellspannung im Modul 13 außerhalb Bereich (unten) | 0 |
| 0x21F1FA | Speichervorhaltewert_33 | 0 |
| 0x21F1FB | Speichervorhaltewert_34 | 0 |
| 0x21F1FC | Speichervorhaltewert_35 | 0 |
| 0x21F1FD | Speichervorhaltewert_36 | 0 |
| 0x21F1FE | Speichervorhaltewert_37 | 0 |
| 0xCAC400 | Speichervorhaltewert_38 | 0 |
| 0xCAC401 | Speichervorhaltewert_39 | 0 |
| 0xCAC402 | Speichervorhaltewert_40 | 0 |
| 0xCAC403 | Speichervorhaltewert_41 | 0 |
| 0xCAC404 | Speichervorhaltewert_42 | 0 |
| 0xCAC405 | Speichervorhaltewert_43 | 0 |
| 0xCAC406 | Speichervorhaltewert_44 | 0 |
| 0xCAC407 | Speichervorhaltewert_45 | 0 |
| 0xCAC408 | Hauptschalter: neg und pos Schütze kleben Slave 1 | 0 |
| 0xCAC409 | Hauptschalter: neg und pos Schütze kleben Slave 2 | 0 |
| 0xCAC40A | Dummy-Fehler (Netzwerk-DTC) | 0 |
| 0xCAC47D | A-CAN: Busfehler | 0 |
| 0xCAC486 | A-CAN: Steuerungsmodul BUS OFF | 0 |
| 0xCACC09 | CSC CAN: Steuerungsmodul BUS OFF | 0 |
| 0xCAD400 | CAN-Botschaft ungültig SPEC_DCSW_HVSTO | 1 |
| 0xCAD401 | CAN-Botschaft ungültig A_TEMP | 1 |
| 0xCAD402 | Speichervorhaltewert_46 | 1 |
| 0xCAD403 | Speichervorhaltewert_47 | 1 |
| 0xCAD404 | Speichervorhaltewert_48 | 1 |
| 0xCAD405 | Speichervorhaltewert_49 | 1 |
| 0xCAD406 | Speichervorhaltewert_50 | 1 |
| 0xCAD407 | CAN-Botschaft ungültig FAHRGESTELLNUMMER | 1 |
| 0xCAD408 | CAN-Botschaft ungültig FZZSTD | 1 |
| 0xCAD409 | CAN-Botschaft ungültig RLS_COOL_HVSTO | 1 |
| 0xCAD40A | CAN-Botschaft ungültig V_VEH | 1 |
| 0xCAD40B | CAN-Botschaft ungültig KILOMETERSTAND | 1 |
| 0xCAD40C | CAN-Botschaft ungültig KLEMMEN | 1 |
| 0xCAD40D | Speichervorhaltewert_51 | 1 |
| 0xCAD40E | CAN-Botschaft ungültig RELATIVZEIT | 1 |
| 0xCAD40F | CAN-Botschaft ungültig ST_DCDC | 1 |
| 0xCAD410 | CAN-Botschaft ungültig ST_HYB_2 | 1 |
| 0xCAD411 | CAN-Botschaft ungültig CTR_CRASH_SWO_EKP | 1 |
| 0xCAD412 | Speichervorhaltewert_52 | 1 |
| 0xCAD413 | CAN-Botschaft ungültig SPEC_HVSTO | 1 |
| 0xCAD414 | CAN-Botschaft ungültig STAT_ZV_KLAPPEN | 1 |
| 0xCAD415 | CAN-Botschaft ungültig ST_SME_S1 | 1 |
| 0xCAD416 | CAN-Botschaft ungültig ST_SME_S2 | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

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
| _SOC_GRENZEN | 0x6500 | - | State of Charge Grenzwerte | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6500 | - |
| _ISOLATION | 0x6501 | - | Isolationsüberwachung | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6501 | - |
| _UEBERLAST_SCHWELLE | 0x6502 | - | Lade- und Entladestromgrenzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6502 | - |
| _KURZSCHLUSS_STROMGRENZE | 0x6503 | - | Kurzschluss Stromgrenze | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6503 | - |
| _LADE_SPANNUNGSGRENZE | 0x6504 | - | Lade Spannungsgrenze | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6504 | - |
| _SCHUETZ_K1 | 0x6506 | - | K1 Schütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6506 | - |
| _SCHUETZ_K2 | 0x6507 | - | K2 Schütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6507 | - |
| _SCHUETZ_K3 | 0x6508 | - | K3 Schütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6508 | - |
| _SERIENNUMMER | 0x6509 | - | Speicherseriennummer | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6509 | - |
| _ENTLADE_SPANNUNGSGRENZE | 0x650B | - | Entlade-Spannungsgrenze | - | - | - | - | - | - | - | - | - | 2E | ARG_0x650B | - |
| _SCHUETZ_K4 | 0x650C | - | K4 Schütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0x650C | - |
| _SCHUETZ_K5 | 0x650D | - | K5 Schütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0x650D | - |
| _SCHUETZ_K6 | 0x650E | - | K6 Schütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0x650E | - |
| _SCHUETZ_K7 | 0x650F | - | K7 Schütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0x650F | - |
| _SYM_MODUS | 0x6511 | - | Symmetriemodus der SEM | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6511 | - |
| _MESSBOTSCHAFTEN | 0x6512 | - | Messbotschaften ein/ausschalten | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6512 | - |
| _FUSI_ENTPRELLZEITEN | 0x6514 | - | Entprellzeiten für FuSi-Ebene2-Funktionen hochsetzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6514 | - |
| _ST_SYM_MODUS | 0x6516 | STAT_SYM_MODUS | Status Symmetriermodus der SME | 0-n | - | high | unsigned char | TAB_SYM_MODUS | - | - | - | - | 22 | - | - |
| _CSC_INDIZIERUNG_BEV_10 | 0x6518 | - | CSC-Indizierung beim BEV-10 | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6518 | - |
| _CSC_STANDBY | 0x6519 | - | CSCs in Standby-Mode setzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6519 | - |
| _ANFORDERUNG_SCHUETZE_SCHLIESSEN | 0x651B | - | Schütze schließen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x651B | - |
| ISOLATION | 0xAD61 | - | Ergebnis Isolationstest | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAD61 |
| SCHUETZ_FREIGABE | 0xDD61 | - | Schreibt bzw. liest das Bit zur Freigabe oder Sperrung der Schützschalter. Job ist Klemmensicher | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDD61 | RES_0xDD61 |
| HV_STROM_MAX | 0xDD62 | - | maximaler HV Strom | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD62 |
| SCHUETZSCHALTUNGEN_ANZAHL | 0xDD63 | STAT_ANZAHL_SCHALTUNGEN_WERT | Anzahl der Schaltungen der Schützschalter (stromlos und unter Last) | - | - | high | unsigned long | - | - | - | - | - | 22 | - | - |
| HVIL | 0xDD64 | STAT_GUELTIG | Stören/Abschalten des Interlockgenerators im BMS / Ergebnis HVIL-Prüfung | 0-n | - | high | unsigned char | TAB_STATUS_HVIL | - | - | - | - | 22 | - | - |
| SOC_MIN_MAX | 0xDD65 | - | Min-/Maxwerte des SOC | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD65 |
| HV_SPANNUNG | 0xDD66 | STAT_HV_SPANNUNG_WERT | HV-Spannung des Zwischenkreises vor den Schützen | V | - | high | unsigned int | - | - | 100.0 | - | - | 22 | - | - |
| ANZAHL_KUEHLANFORDERUNG_DRINGEND | 0xDD67 | STAT_ANZAHL_KUEHLANFORDERUNG_DRINGEND_WERT | Zähler beschreibt wie häufig in aufeinanderfolgenden Klemmenzyklen in einen höheren Temperaturzustand gefahren wurde. (Maximalwert) | - | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| HV_SPANNUNG_BERECHNET | 0xDD68 | STAT_HV_SPANNUNG_BERECHNET_WERT | HV-Spannung berechnet aus den einzelnen Zellen (Batteriespannung hinter den Schützen) | V | - | high | unsigned int | - | - | 100.0 | - | - | 22 | - | - |
| HV_STROM | 0xDD69 | STAT_HV_STROM_WERT | HV-Strom | A | - | high | long | - | - | 100.0 | - | - | 22 | - | - |
| KUEHLKREISLAUF_VENTIL | 0xDD6F | - | Status / Steuern Kühlmittel-Ventil: Geschlossen oder offen / schliessen oder öffnen | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDD6F | RES_0xDD6F |
| AUFSTART_VERHINDERER | 0xDD72 | STAT_AUFSTART_VERHINDERER | Grund für nicht Aufstarten des HV-Systems | 0-n | - | high | unsigned char | TAB_AUFSTART_VERHINDERER | - | - | - | - | 22 | - | - |
| CUMULATIVE_LADUNG | 0xDD73 | STAT_LADUNG_AMP_STUNDEN_WERT | Status kumulierte Ladung | Ah | - | low | unsigned long | - | - | 36000.0 | - | - | 22 | - | - |
| CUMULATIVE_ENTLADUNG | 0xDD74 | STAT_ENTLADUNG_AMP_STUNDEN_WERT | Status kumulierte Entladung | Ah | - | low | unsigned long | - | - | 36000.0 | - | - | 22 | - | - |
| STATUS_KL30C_SPANNUNG | 0xDD76 | STAT_KL30C_SPANNUNG_WERT | Spannung Klemme 30C | V | - | high | unsigned char | - | - | 10.0 | - | - | 22 | - | - |
| REFERENZ_KAPAZITAET | 0xDD7B | - | Auslesen und Justieren Kapazität Batterie | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDD7B | RES_0xDD7B |
| GW_INFO | 0xDD7C | - | Gewährleistungsdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD7C |
| STROMGRENZEN | 0xDD7D | - | Stromgrenzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD7D |
| SPANNUNGSGRENZEN | 0xDD7E | - | Spannungsgrenzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD7E |
| HVB_HISTORIE_ZYKLEN | 0xDD8E | - | Ausgabe der Summe von Zyklisierungen im jeweiligen Bereich bei der Ladung / Entladung und Ausgabe der Strombelastungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD8E |
| ZEIT_TEMP_HISTOGRAMM | 0xDD90 | - | Zeit in verschiedenen Temperaturklasse und Hauptschalterzuständen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD90 |
| ZEIT_SOC_KLASSE | 0xDD91 | - | Zeit seit Einbau in SOC-Klassen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD91 |
| HVB_HISTORIE_MIN_SOC | 0xDD92 | - | Historie Ladungszustand Minimalwert der letzten fünf Tage | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD92 |
| HVB_HISTORIE_MAX_SOC | 0xDD93 | - | Historie Ladungszustand Maximalwert der letzten fünf Tage | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD93 |
| HV_BATT_HIST_SOC_T1 | 0xDD94 | - | Anzahl der Zyklen bei Temperatur < 0°C  und bei unterschiedlichen Werten von Strom und SoC | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD94 |
| HV_BATT_HIST_SOC_T2 | 0xDD95 | - | Anzahl der Zyklen bei Temperatur 0°C < T < 10°C und bei unterschiedlichen Werten von Strom und SoC | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD95 |
| HV_BATT_HIST_SOC_T3 | 0xDD96 | - | Anzahl der Zyklen bei Temperatur 10°C < T < 20°C und bei unterschiedlichen Werten von Strom und SoC. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD96 |
| HV_BATT_HIST_SOC_T4 | 0xDD97 | - | Anzahl der Zyklen bei Temperatur 20°C < T < 30°C und bei unterschiedlichen Werten von Strom und SoC | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD97 |
| HV_BATT_HIST_SOC_T5 | 0xDD98 | - | Anzahl der Zyklen bei Temperatur 30°C < T < 40°C und bei unterschiedlichen Werten von Strom und SoC. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD98 |
| HV_BATT_HIST_SOC_T6 | 0xDD99 | - | Anzahl der Zyklen bei Temperatur 40°C < T < 50°C und bei unterschiedlichen Werten von Strom und SoC | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD99 |
| HV_BATT_HIST_SOC_T7 | 0xDD9A | - | Werte für Histogramm der Hochvoltbatterie im Temperaturbereich über 50°C | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD9A |
| ZELLSPANNUNG_MODUL_9 | 0xDD9B | - | aktuell gemessene Zellspannungen Modul 9 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD9B |
| ZELLSPANNUNG_MODUL_10 | 0xDD9C | - | aktuell gemessene Zellspannungen Modul 10 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD9C |
| ZELLSPANNUNG_MODUL_11 | 0xDD9D | - | aktuell gemessene Zellspannungen Modul 11 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD9D |
| ZELLSPANNUNG_MODUL_12 | 0xDD9E | - | aktuell gemessene Zellspannungen Modul 12 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD9E |
| FAHRGESTELLNUMMER | 0xDD9F | STAT_FAHRGESTELLNUMMER_WERT | aktuelle Fahrgestellnummer des Fahrzeugs, in dem der Hochvoltspeicher verbaut ist | - | - | high | string[7] | - | - | - | - | - | 22 | - | - |
| KUEHLMITTELPUMPE | 0xDDA1 | - | Resultwerte oder Steuerung der Kühlmittelpumpe für die Kühlung des Hochvoltspeichers in % (0-100%) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDDA1 | RES_0xDDA1 |
| TEMP_SENSOREN_BEV10 | 0xDDA2 | - | Rückgabe der Temperaturwerte aller CSCs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDA2 |
| ZELLSPANNUNG_MODUL_13 | 0xDDA3 | - | aktuell gemessene Zellspannungen Modul 13 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDA3 |
| FREIGABE_KUEHLMITTELPUMPE | 0xDDA5 | - | Freigeben oder Auslesen Status der Kühlmittelpumpe (0 = nicht freigegeben, 1 = freigegeben) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDDA5 | RES_0xDDA5 |
| SCHUETZ_SCHALTER_BEV10 | 0xDDA6 | - | Status der drei Schützeschalter für die 3 HV-Batterien Getriebetunnel, Vorderbau, Tank | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDA6 |
| ISOLATIONSWIDERSTAND_BEV10 | 0xDDA7 | - | Wert aller Isolationswiderstände (alle HV-Batterien) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDA7 |
| CSC_IDS_BEV10 | 0xDDA8 | - | HW Nummern aller CSCs (Cell Supervisory Circuit) vom BEV2010 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDA8 |
| KUEHLKREISLAUF_TEMP_BEV10 | 0xDDA9 | - | Temperatur Kühlkreislauf BEV2010 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDA9 |
| HV_SPANNUNG_BATT_BEV10 | 0xDDAA | - | Werte für HV-Spannungen beim BEV2010 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDAA |
| VARIANTE_CSCS_BEV10 | 0xDDAD | - | Rückgabe der CSC Variante aller Module | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDAD |
| ZELLSPANNUNG_MODUL_4 | 0xDDAE | - | aktuell gemessene Zellspannungen Modul 4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDAE |
| ZELLSPANNUNG_MODUL_5 | 0xDDAF | - | aktuell gemessene Zellspannungen Modul 5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDAF |
| ZELLSPANNUNG_MODUL_6 | 0xDDB0 | - | aktuell gemessene Zellspannungen Modul 6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDB0 |
| ZELLSPANNUNG_MODUL_7 | 0xDDB1 | - | aktuell gemessene Zellspannungen Modul 7 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDB1 |
| ZELLSPANNUNG_MODUL_8 | 0xDDB2 | - | aktuell gemessene Zellspannungen Modul 8 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDB2 |
| ALTERUNG_INNENWIDERSTAND | 0xDDB6 | STAT_ALTERUNG_INNENWIDERSTAND_WERT | Widerstandserhöhung: Widerstand um x % erhöht, prozentualer Wert: (R_akt / R_neu - 1) *100, 0 = Lebensdauerende erreicht, 100 = Neuzustand | % | - | high | unsigned int | - | - | 10.0 | - | - | 22 | - | - |
| ALTERUNG_KAPAZITAET | 0xDDB7 | STAT_ALTERUNG_KAPAZITAET_WERT | Restkapazität des Speichers, prozentualer Wert: ( C_akt/C_nenn(neu) ) * 100, 0 = Lebensdauerende erreicht, 100 = Neuzustand | % | - | high | unsigned int | - | - | 10.0 | - | - | 22 | - | - |
| ZELLSPANNUNG_MODUL_1 | 0xDDB9 | - | aktuell gemessene Zellspannungen in V Modul 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDB9 |
| ZELLSPANNUNG_MODUL_2 | 0xDDBA | - | aktuell gemessene Zellspannungen Modul 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDBA |
| ZELLSPANNUNG_MODUL_3 | 0xDDBB | - | aktuell gemessene Zellspannungen in V Modul 3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDBB |
| ANZEIGE_SOC | 0xDDBC | - | aktueller Anzeige Soc | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDBC |
| SERVICE_DISCONNECT | 0xDDBD | STAT_SERVICE_DISCONNECT | Status des Service Disconnects (0 = offen,1 = geschlossen) | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| ZEIT_VORLADUNG | 0xDDBE | - | zuletzt benötigte Vorladezeit (Ringpuffer) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDBE |
| ZELLSPANNUNGEN_MIN_MAX | 0xDDBF | - | minimale und maximale Einzelzellspannungen werden ausgegeben | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDBF |
| TEMPSENSOREN_MIN_MAX | 0xDDC0 | - | Ausgabe der minimalen und maximalen Temperaturwerte aller Einzelzellen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC0 |
| ALTERUNG_PARAMETER | 0xDDC2 | - | Alterungswerte des seriellen/parallelen ohmschen Widerstandes und der parallelen Kapazität | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC2 |
| SOC | 0xDDC4 | - | Rückgabe SOC Wert (in %) und Plausibilität | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC4 |
| HISTO_SYM_DAUER | 0xDDC6 | - | Auslesen der Anzahl von Symmetriervorgängen in den jeweiligen Zeitklassen (Soll-Zeit in der die Symmetrierwiderstände aktiv geschaltet werden sollen). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC6 |
| HISTO_SYM_ZELLANZAHL | 0xDDC7 | - | Auslesen der Anzahl der Einschlafvorgänge in denen die jeweiligen Zellzahl zur Symmetrierung angewiesen wurden. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC7 |
| SYM_DELTASOC | 0xDDC8 | - | Maximale SoC-Differenz in % über den gesamten HVS. Ringspeicher der letzten 5 Fahrten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC8 |
| MAX_SYM_DAUER | 0xDDC9 | - | Maximale Symmetrierdauer der zuletzt erfolgreichen Symmetriervorgängen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC9 |
| SERIENNUMMER_ECU | 0xDDCA | STAT_SERIENNUMMER_ECU_WERT | Seriennummer SME Steuergerät | - | - | high | string[10] | - | - | - | - | - | 22 | - | - |

### TAB_HVIL_GENERATOR

| WERT | TEXT |
| --- | --- |
| 0 | ausschalten |
| 1 | einschalten |
| 255 | unbekannter Wert |

### RES_0XDD64

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GUELTIG | 0-n | high | unsigned char | - | TAB_STATUS_HVIL | - | - | - | Ergebnis HVIL-Prüfung |

### ARG_0XDD64

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANSTEUERUNG | 0-n | high | unsigned char | - | TAB_HVIL_GENERATOR_GEN2 | - | - | - | - | - | Stören/Abschalten des Interlockgenerators im BMS |

### TAB_HVIL_GENERATOR_GEN2

| WERT | TEXT |
| --- | --- |
| 0 | Aus |
| 1 | Ein |
| 2 | geregelt / Normalbetrieb |

### RES_0XDD61

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHUETZ_FREIGABE | 0-n | high | unsigned char | - | TAB_SCHUETZ_FREIGABE | - | - | - | Liest das Bit zur Freigabe oder Sperrung der Schützschalter |

### ARG_0XDD61

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = nicht freigegeben 1 = freigegeben |

### TAB_SCHUETZ_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht freigegeben |
| 0x01 | freigegeben |
| 0xFF | nicht definiert |

### RES_0XDD62

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_STROM_MAX_LADEN_WERT | A | high | long | - | - | - | 100.0 | - | zuletzt ermittelter maximaler HV Ladestrom |
| STAT_HV_STROM_MAX_ENTLADEN_WERT | A | high | long | - | - | - | 100.0 | - | zuletzt ermittelter maximaler HV Entladestrom |

### TAB_STATUS_HVIL

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht ok |
| 0x01 | ok |
| 0xFF | nicht definiert |

### RES_0XDD65

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_MAX_WERT | % | high | unsigned int | - | - | - | 100.0 | - | zuletzt ermittelter maximaler SOC |
| STAT_SOC_MIN_WERT | % | high | unsigned int | - | - | - | 100.0 | - | zuletzt ermittelter minimaler SOC |

### RES_0XDD6F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KUEHLKREISLAUF_VENTIL | 0-n | high | unsigned char | - | TAB_KUEHLKREISLAUF_VENTIL_RUECKGABE | - | - | - | Status Kühlmittel-Ventil: Geschlossen oder offen |

### ARG_0XDD6F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KUEHLKREISLAUF_VENTIL | 0-n | high | unsigned char | - | TAB_KUEHLERKREISLAUF_VENTIL | - | - | - | - | - | Steuern des Kühlmittel-Ventils: Geschlossen oder offen |

### TAB_KUEHLERKREISLAUF_VENTIL

| WERT | TEXT |
| --- | --- |
| 0x00 | geschlossen |
| 0x01 | offen |
| 0x02 | geregelt |
| 0xFF | nicht definiert |

### TAB_KUEHLKREISLAUF_VENTIL_RUECKGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | geschlossen |
| 0x01 | offen |
| 0x02 | Fehler |

### TAB_AUFSTART_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | interner Fehler |
| 0xFF | nicht definiert |

### RES_0XDD7B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAPAZITAET_WERT | Ah | high | unsigned long | - | - | - | 36000.0 | - | Auslesen der Justierung Kapazität Batterie |

### ARG_0XDD7B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAPAZITAET_JUSTIERUNG | Ah | - | unsigned long | - | - | 3600.0 | - | - | - | - | Justierung Kapazität Batterie |

### RES_0XDD7C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_POWER_DCHG_1_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Leistungsklasse 1 für Entladevorgänge |
| STAT_ZEIT_POWER_DCHG_2_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Leistungsklasse 2 für Entladevorgänge |
| STAT_ZEIT_POWER_DCHG_3_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Leistungsklasse 3 für Entladevorgänge |
| STAT_ZEIT_POWER_DCHG_4_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Leistungsklasse 4 für Entladevorgänge |
| STAT_ZEIT_POWER_DCHG_5_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Leistungsklasse 5 für Entladevorgänge |
| STAT_ZEIT_POWER_DCHG_6_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Leistungsklasse 6 für Entladevorgänge |
| STAT_ZEIT_POWER_DCHG_7_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Leistungsklasse 7 für Entladevorgänge |
| STAT_ZEIT_POWER_CHG_1_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Leistungsklasse 1 für Ladevorgänge |
| STAT_ZEIT_POWER_CHG_2_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Leistungsklasse 2 für Ladevorgänge |
| STAT_ZEIT_POWER_CHG_3_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Leistungsklasse 3 für Ladevorgänge |
| STAT_ZEIT_POWER_CHG_4_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Leistungsklasse 4 für Ladevorgänge |
| STAT_ZEIT_POWER_CHG_5_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Leistungsklasse 5 für Ladevorgänge |
| STAT_ZEIT_POWER_CHG_6_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Leistungsklasse 6 für Ladevorgänge |
| STAT_ZEIT_POWER_CHG_7_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Leistungsklasse 7 für Ladevorgänge |
| STAT_UCELLMAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | GW-Grenzverletzung der max. Einzelzellspannung eingetreten (1 = ja / 0 = nein). |
| STAT_UCELLMIN_EIN | 0/1 | high | unsigned char | - | - | - | - | - | GW-Grenzverletzung der min. Einzelzellspannung eingetreten (1 = ja / 0 = nein). |
| STAT_KM_STAND_WERT | km | high | unsigned long | - | - | - | - | - | Kilometerstand |
| STAT_IMAX_DCHG_WERT | A | high | unsigned long | - | - | - | 10.0 | - | maximal gemessener Entladestrom über Lebenszeit |
| STAT_IMAX_CHG_WERT | A | high | unsigned long | - | - | - | 10.0 | - | maximal gemessener Ladestrom über Lebenszeit |
| STAT_IMAX_LAD_ERROR_EIN | 0/1 | high | unsigned char | - | - | - | - | - | GW-Grenzverletzung des maximal erlaubten Ladestroms überschritten (1 = ja / 0 = nein) |
| STAT_TMAX_ERROR_OP_EIN | 0/1 | high | unsigned char | - | - | - | - | - | maximal erlaubte Temperatur während Betrieb überschritten (1 = ja, 0 = nein) |
| STAT_TMAX_ERROR_NO_OP_EIN | 0/1 | high | unsigned char | - | - | - | - | - | maximal erlaubte Temperatur ohne Betrieb überschritten (1 = ja, 0 = nein) |
| STAT_TMIN_ERROR_OP_EIN | 0/1 | high | unsigned char | - | - | - | - | - | minimal erlaubte Temperatur während Betrieb unterschritten (1 = ja, 0 = nein) |
| STAT_TMIN_ERROR_NO_OP_EIN | 0/1 | high | unsigned char | - | - | - | - | - | minimal erlaubte Temperatur ohne Betrieb unterschritten (1 = ja, 0 = nein) |
| STAT_CUMULATIVE_ENERGIE_LADUNG_WERT | Ws | high | unsigned long | - | - | - | - | - | Wert der kumulierten Energie für Ladevorgänge |
| STAT_CUMULATIVE_ENERGIE_ENTLADUNG_WERT | Ws | high | unsigned long | - | - | - | - | - | Wert der kumulierten Energie für Entladevorgänge |

### RES_0XDD7D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADESTROMGRENZE_WERT | A | high | unsigned int | - | - | - | 10.0 | - | maximal erlaubter Ladestrom |
| STAT_ENTLADESTROMGRENZE_WERT | A | high | unsigned int | - | - | - | 10.0 | - | maximal erlaubter Entladesstrom |

### RES_0XDD7E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADESPANNUNGSGRENZE_WERT | V | high | unsigned int | - | - | - | 100.0 | - | maximal erlaubte Ladespannung |
| STAT_ENTLADESPANNUNGSGRENZE_WERT | V | high | unsigned int | - | - | - | 100.0 | - | maximal erlaubte Entladespannung |

### RES_0XDD8E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SUM_OF_SOC_CHARGE_5_10_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Laden grösser gleich 5 bis kleiner 10 Prozent |
| STAT_SUM_OF_SOC_CHARGE_10_15_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Laden grösser gleich 10 bis kleiner 15 Prozent |
| STAT_SUM_OF_SOC_CHARGE_15_20_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Laden grösser gleich 15 bis kleiner 20 Prozent |
| STAT_SUM_OF_SOC_CHARGE_20_25_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Laden grösser gleich 20 bis kleiner 25 Prozent |
| STAT_SUM_OF_SOC_CHARGE_25_30_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Laden grösser gleich 25 bis kleiner 30 Prozent |
| STAT_SUM_OF_SOC_CHARGE_30_35_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Laden grösser gleich 30 bis kleiner 35 Prozent |
| STAT_SUM_OF_SOC_CHARGE_35_40_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Laden grösser gleich 35 bis kleiner 40 Prozent |
| STAT_SUM_OF_SOC_CHARGE_40_45_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Laden grösser gleich 40 bis kleiner 45 Prozent |
| STAT_SUM_OF_SOC_CHARGE_45_50_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Laden grösser gleich 45 bis kleiner 50 Prozent |
| STAT_SUM_OF_SOC_CHARGE_50_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Laden grösser gleich 50 Prozent |
| STAT_SUM_OF_SOC_DISCHARGE_5_10_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Entladen grösser gleich 5 bis kleiner 10 Prozent |
| STAT_SUM_OF_SOC_DISCHARGE_10_15_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Entladen grösser gleich 10 bis kleiner 15 Prozent |
| STAT_SUM_OF_SOC_DISCHARGE_15_20_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Entladen grösser gleich 15 bis kleiner 20 Prozent |
| STAT_SUM_OF_SOC_DISCHARGE_20_25_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Entladen grösser gleich 20 bis kleiner 25 Prozent |
| STAT_SUM_OF_SOC_DISCHARGE_25_30_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Entladen grösser gleich 25 bis kleiner 30 Prozent |
| STAT_SUM_OF_SOC_DISCHARGE_30_35_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Entladen grösser gleich 30 bis kleiner 35 Prozent |
| STAT_SUM_OF_SOC_DISCHARGE_35_40_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Entladen grösser gleich 35 bis kleiner 40 Prozent |
| STAT_SUM_OF_SOC_DISCHARGE_40_45_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Entladen grösser gleich 40 bis kleiner 45 Prozent |
| STAT_SUM_OF_SOC_DISCHARGE_45_50_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Entladen grösser gleich 45 bis kleiner 50 Prozent |
| STAT_SUM_OF_SOC_DISCHARGE_50_WERT | - | high | unsigned long | - | - | - | - | - | Summe Zyklisierungen Entladen grösser gleich 50 Prozent |
| STAT_I_HISTO_KL_MIN160A_WERT | min | high | unsigned long | - | - | - | - | - | Dauer HV-Batterie-Entladestrom grösser 160A |
| STAT_I_HISTO_GRGL_MIN160A_KL_MIN80A_WERT | min | high | unsigned long | - | - | - | - | - | Dauer HV-Batterie-Entladestrom grösser 80A und kleiner gleich 160A |
| STAT_I_HISTO_GRGL_MIN80A_KL_MIN5A_WERT | min | high | unsigned long | - | - | - | - | - | Dauer HV-Batterie-Entladestrom grösser 5A und kleiner gleich 80A |
| STAT_I_HISTO_GRGL_MIN5A_KL_0A_WERT | min | high | unsigned long | - | - | - | - | - | Dauer HV-Batterie-Entladestrom grösser 0A und kleiner gleich 5A |
| STAT_I_HISTO_GRGL_0A_KL_5A_WERT | min | high | unsigned long | - | - | - | - | - | Dauer HV-Batterie-Ladestrom grösser 0A und kleiner gleich 5A |
| STAT_I_HISTO_GRGL_5A_KL_80A_WERT | min | high | unsigned long | - | - | - | - | - | Dauer HV-Batterie-Ladestrom grösser 5A und kleiner gleich 80A |
| STAT_I_HISTO_GRGL_80A_KL_160A_WERT | min | high | unsigned long | - | - | - | - | - | Dauer HV-Batterie-Ladestrom grösser 80A und kleiner 160A |
| STAT_I_HISTO_GRGL_160A_WERT | min | high | unsigned long | - | - | - | - | - | Dauer HV-Batterie-Ladestrom grösser gleich 160A |

### RES_0XDD90

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_TEMP_TOTAL_1_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 1 bei geöffneten und geschlossenen Hauptschaltern |
| STAT_ZEIT_TEMP_TOTAL_2_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 2 bei geöffneten und geschlossenen Hauptschaltern |
| STAT_ZEIT_TEMP_TOTAL_3_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 3 bei geöffneten und geschlossenen Hauptschaltern |
| STAT_ZEIT_TEMP_TOTAL_4_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 4 bei geöffneten und geschlossenen Hauptschaltern |
| STAT_ZEIT_TEMP_TOTAL_5_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 5 bei geöffneten und geschlossenen Hauptschaltern |
| STAT_ZEIT_TEMP_TOTAL_6_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 6 bei geöffneten und geschlossenen Hauptschaltern |
| STAT_ZEIT_TEMP_TOTAL_7_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 7 bei geöffneten und geschlossenen Hauptschaltern |
| STAT_ZEIT_TEMP_TOTAL_8_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 8 bei geöffneten und geschlossenen Hauptschaltern |
| STAT_ZEIT_TEMP_TOTAL_9_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 9 bei geöffneten und geschlossenen Hauptschaltern |
| STAT_ZEIT_TEMP_TOTAL_10_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 10 bei geöffneten und geschlossenen Hauptschaltern |
| STAT_ZEIT_TEMP_HSOFFEN_1_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 1 bei geöffneten Hauptschaltern |
| STAT_ZEIT_TEMP_HSOFFEN_2_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 2 bei geöffneten Hauptschaltern |
| STAT_ZEIT_TEMP_HSOFFEN_3_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 3 bei geöffneten Hauptschaltern |
| STAT_ZEIT_TEMP_HSOFFEN_4_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 4 bei geöffneten Hauptschaltern |
| STAT_ZEIT_TEMP_HSOFFEN_5_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 5 bei geöffneten Hauptschaltern |
| STAT_ZEIT_TEMP_HSOFFEN_6_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 6 bei geöffneten Hauptschaltern |
| STAT_ZEIT_TEMP_HSOFFEN_7_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 7 bei geöffneten Hauptschaltern |
| STAT_ZEIT_TEMP_HSOFFEN_8_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 8 bei geöffneten Hauptschaltern |
| STAT_ZEIT_TEMP_HSOFFEN_9_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 9 bei geöffneten Hauptschaltern |
| STAT_ZEIT_TEMP_HSOFFEN_10_WERT | min | high | unsigned long | - | - | - | - | - | Zeit in Temperaturklasse 10 bei geöffneten Hauptschaltern |

### RES_0XDD91

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_SOC_1_WERT | min | high | unsigned long | - | - | - | - | - | Zeit seit Einbau in SOC-Klasse 1 |
| STAT_ZEIT_SOC_2_WERT | min | high | unsigned long | - | - | - | - | - | Zeit seit Einbau in SOC-Klasse 2 |
| STAT_ZEIT_SOC_3_WERT | min | high | unsigned long | - | - | - | - | - | Zeit seit Einbau in SOC-Klasse 3 |
| STAT_ZEIT_SOC_4_WERT | min | high | unsigned long | - | - | - | - | - | Zeit seit Einbau in SOC-Klasse 4 |
| STAT_ZEIT_SOC_5_WERT | min | high | unsigned long | - | - | - | - | - | Zeit seit Einbau in SOC-Klasse 5 |
| STAT_ZEIT_SOC_6_WERT | min | high | unsigned long | - | - | - | - | - | Zeit seit Einbau in SOC-Klasse 6 |
| STAT_ZEIT_SOC_7_WERT | min | high | unsigned long | - | - | - | - | - | Zeit seit Einbau in SOC-Klasse 7 |
| STAT_ZEIT_SOC_8_WERT | min | high | unsigned long | - | - | - | - | - | Zeit seit Einbau in SOC-Klasse 8 |
| STAT_ZEIT_SOC_9_WERT | min | high | unsigned long | - | - | - | - | - | Zeit seit Einbau in SOC-Klasse 9 |
| STAT_ZEIT_SOC_10_WERT | min | high | unsigned long | - | - | - | - | - | Zeit seit Einbau in SOC-Klasse 10 |

### RES_0XDD92

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_HV_BATT_ACTUAL_VALUE_MIN_WERT | % | high | unsigned int | - | - | - | 10.0 | - | Historie Ladungszustand aktueller Minimalwert |
| STAT_SOC_HV_BATT_DAY_BEFORE_1_MIN_WERT | % | high | unsigned int | - | - | - | 10.0 | - | Historie Ladungszustand Minimalwert des letzten Tages |
| STAT_SOC_HV_BATT_DAY_BEFORE_2_MIN_WERT | % | high | unsigned int | - | - | - | 10.0 | - | Historie Ladungszustand Minimalwert der letzten zwei Tage |
| STAT_SOC_HV_BATT_DAY_BEFORE_3_MIN_WERT | % | high | unsigned int | - | - | - | 10.0 | - | Historie Ladungszustand Minimalwert der letzten drei Tage |
| STAT_SOC_HV_BATT_DAY_BEFORE_4_MIN_WERT | % | high | unsigned int | - | - | - | 10.0 | - | Historie Ladungszustand Minimalwert der letzten vier Tage |
| STAT_SOC_HV_BATT_DAY_BEFORE_5_MIN_WERT | % | high | unsigned int | - | - | - | 10.0 | - | Historie Ladungszustand Minimalwert der letzten fünf Tage |

### RES_0XDD93

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_HV_BATT_ACTUAL_VALUE_MAX_WERT | % | high | unsigned int | - | - | - | 10.0 | - | Historie Ladungszustand aktueller Maximalwert |
| STAT_SOC_HV_BATT_DAY_BEFORE_1_MAX_WERT | % | high | unsigned int | - | - | - | 10.0 | - | Historie Ladungszustand Maximalwert des letzten Tages |
| STAT_SOC_HV_BATT_DAY_BEFORE_2_MAX_WERT | % | high | unsigned int | - | - | - | 10.0 | - | Historie Ladungszustand Maximalwert der letzten zwei Tage |
| STAT_SOC_HV_BATT_DAY_BEFORE_3_MAX_WERT | % | high | unsigned int | - | - | - | 10.0 | - | Historie Ladungszustand Maximalwert der letzten drei Tage |
| STAT_SOC_HV_BATT_DAY_BEFORE_4_MAX_WERT | % | high | unsigned int | - | - | - | 10.0 | - | Historie Ladungszustand Maximalwert der letzten vier Tage |
| STAT_SOC_HV_BATT_DAY_BEFORE_5_MAX_WERT | % | high | unsigned int | - | - | - | 10.0 | - | Historie Ladungszustand Maximalwert der letzten fünf Tage |

### RES_0XDD94

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T1_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur < 0 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC1_T1_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur < 0 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC1_T1_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur < 0 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC1_T1_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur < 0 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC1_T1_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur < 0 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC1_T1_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur < 0 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC1_T1_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur < 0 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC1_T1_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur < 0 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC1_T1_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur < 0 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC1_T1_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur < 0 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC2_T1_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur < 0 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC2_T1_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur < 0 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC2_T1_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur < 0 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC2_T1_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur < 0 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC2_T1_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur < 0 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC2_T1_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur < 0 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC2_T1_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur < 0 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC2_T1_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur < 0 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC2_T1_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur < 0 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC2_T1_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur < 0 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC3_T1_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur < 0 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC3_T1_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur < 0 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC3_T1_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur < 0 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC3_T1_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur < 0 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC3_T1_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur < 0 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC3_T1_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur < 0 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC3_T1_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur < 0 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC3_T1_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatu < 0 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC3_T1_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur < 0 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC3_T1_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur < 0 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC4_T1_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur < 0 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC4_T1_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur < 0 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC4_T1_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur < 0 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC4_T1_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur < 0 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC4_T1_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur < 0 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC4_T1_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur < 0 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC4_T1_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur < 0 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC4_T1_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur < 0 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC4_T1_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur < 0 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC4_T1_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur < 0 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC5_T1_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur < 0 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC5_T1_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur < 0 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC5_T1_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur < 0 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC5_T1_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur < 0 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC5_T1_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur < 0 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC5_T1_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur < 0 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC5_T1_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur < 0 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC5_T1_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur < 0 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC5_T1_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur < 0 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC5_T1_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur < 0 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC6_T1_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur < 0 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC6_T1_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur < 0 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC6_T1_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur < 0 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC6_T1_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur < 0 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC6_T1_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur < 0 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC6_T1_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur < 0 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC6_T1_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur < 0 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC6_T1_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur < 0 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC6_T1_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur < 0 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC6_T1_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur < 0 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC7_T1_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur < 0 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC7_T1_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur < 0 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC7_T1_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur < 0 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC7_T1_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur < 0 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC7_T1_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur < 0 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC7_T1_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur < 0 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC7_T1_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur < 0 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC7_T1_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur < 0 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC7_T1_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur < 0 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC7_T1_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur < 0 °C. Strom > 140 A |

### RES_0XDD95

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T2_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 0°C < Temperatur < 10 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC1_T2_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 0°C < Temperatur < 10 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC1_T2_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 0°C < Temperatur < 10 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC1_T2_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 0°C < Temperatur < 10 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC1_T2_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 0°C < Temperatur < 10 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC1_T2_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 0°C < Temperatur < 10 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC1_T2_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 0°C < Temperatur < 10 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC1_T2_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 0°C < Temperatur < 10 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC1_T2_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 0°C < Temperatur < 10 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC1_T2_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 0°C < Temperatur < 10 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC2_T2_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 0°C < Temperatur < 10 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC2_T2_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 0°C < Temperatur < 10 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC2_T2_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 0°C < Temperatur < 10 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC2_T2_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 0°C < Temperatur < 10 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC2_T2_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 0°C < Temperatur < 10 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC2_T2_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 0°C < Temperatur < 10 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC2_T2_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 0°C < Temperatur < 10 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC2_T2_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 0°C < Temperatur < 10 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC2_T2_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 0°C < Temperatur < 10 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC2_T2_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 0°C < Temperatur < 10 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC3_T2_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 0°C < Temperatur < 10 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC3_T2_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 0°C < Temperatur < 10 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC3_T2_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 0°C < Temperatur < 10 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC3_T2_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 0°C < Temperatur < 10 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC3_T2_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 0°C < Temperatur < 10 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC3_T2_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 0°C < Temperatur < 10 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC3_T2_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 0°C < Temperatur < 10 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC3_T2_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 0°C < Temperatur < 10 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC3_T2_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 0°C < Temperatur < 10 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC3_T2_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 0°C < Temperatur < 10 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC4_T2_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 0°C < Temperatur < 10 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC4_T2_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 0°C < Temperatur < 10 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC4_T2_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 0°C < Temperatur < 10 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC4_T2_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 0°C < Temperatur < 10 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC4_T2_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 0°C < Temperatur < 10 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC4_T2_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 0°C < Temperatur < 10 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC4_T2_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 0°C < Temperatur < 10 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC4_T2_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 0°C < Temperatur < 10 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC4_T2_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 0°C < Temperatur < 10 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC4_T2_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 0°C < Temperatur < 10 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC5_T2_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 0°C < Temperatur < 10 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC5_T2_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 0°C < Temperatur < 10 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC5_T2_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 0°C < Temperatur < 10 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC5_T2_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 0°C < Temperatur < 10 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC5_T2_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 0°C < Temperatur < 10 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC5_T2_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 0°C < Temperatur < 10 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC5_T2_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 0°C < Temperatur < 10 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC5_T2_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 0°C < Temperatur < 10 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC5_T2_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 0°C < Temperatur < 10 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC5_T2_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 0°C < Temperatur < 10 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC6_T2_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 0°C < Temperatur < 10 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC6_T2_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 0°C < Temperatur < 10 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC6_T2_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 0°C < Temperatur < 10 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC6_T2_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 0°C < Temperatur < 10 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC6_T2_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 0°C < Temperatur < 10 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC6_T2_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 0°C < Temperatur < 10 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC6_T2_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 0°C < Temperatur < 10 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC6_T2_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 0°C < Temperatur < 10 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC6_T2_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 0°C < Temperatur < 10 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC6_T2_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 0°C < Temperatur < 10 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC7_T2_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % SoC. 0°C < Temperatur < 10 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC7_T2_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 0°C < Temperatur < 10 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC7_T2_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 0°C < Temperatur < 10 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC7_T2_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 0°C < Temperatur < 10 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC7_T2_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 0°C < Temperatur < 10 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC7_T2_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 0°C < Temperatur < 10 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC7_T2_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 0°C < Temperatur < 10 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC7_T2_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 0°C < Temperatur < 10 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC7_T2_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 0°C < Temperatur < 10 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC7_T2_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 0°C < Temperatur < 10 °C. Strom > 140 A |

### RES_0XDD96

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T3_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 10°C < Temperatur < 20 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC1_T3_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 10°C < Temperatur < 20 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC1_T3_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 10°C < Temperatur < 20 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC1_T3_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 10°C < Temperatur < 20 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC1_T3_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 10°C < Temperatur < 20 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC1_T3_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 10°C < Temperatur < 20 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC1_T3_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 10°C < Temperatur < 20 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC1_T3_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 10°C < Temperatur < 20 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC1_T3_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 10°C < Temperatur < 20 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC1_T3_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 10°C < Temperatur < 20 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC2_T3_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 10°C < Temperatur < 20 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC2_T3_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 10°C < Temperatur < 20 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC2_T3_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 10°C < Temperatur < 20 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC2_T3_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 10°C < Temperatur < 20 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC2_T3_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 10°C < Temperatur < 20 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC2_T3_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 10°C < Temperatur < 20 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC2_T3_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 10°C < Temperatur < 20 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC2_T3_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 10°C < Temperatur < 20 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC2_T3_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 10°C < Temperatur < 20 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC2_T3_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 10°C < Temperatur < 20 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC3_T3_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 10°C < Temperatur < 20 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC3_T3_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 10°C < Temperatur < 20 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC3_T3_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 10°C < Temperatur < 20 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC3_T3_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 10°C < Temperatur < 20 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC3_T3_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 10°C < Temperatur < 20 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC3_T3_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 10°C < Temperatur < 20 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC3_T3_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 10°C < Temperatur < 20 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC3_T3_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 10°C < Temperatur < 20 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC3_T3_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 10°C < Temperatur < 20 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC3_T3_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 10°C < Temperatur < 20 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC4_T3_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 10°C < Temperatur < 20 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC4_T3_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 10°C < Temperatur < 20 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC4_T3_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 10°C < Temperatur < 20 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC4_T3_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 10°C < Temperatur < 20 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC4_T3_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 10°C < Temperatur < 20 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC4_T3_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 10°C < Temperatur < 20 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC4_T3_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 10°C < Temperatur < 20 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC4_T3_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 10°C < Temperatur < 20 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC4_T3_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 10°C < Temperatur < 20 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC4_T3_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 10°C < Temperatur < 20 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC5_T3_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 10°C < Temperatur < 20 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC5_T3_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 10°C < Temperatur < 20 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC5_T3_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 10°C < Temperatur < 20 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC5_T3_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 10°C < Temperatur < 20 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC5_T3_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 10°C < Temperatur < 20 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC5_T3_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 10°C < Temperatur < 20 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC5_T3_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 10°C < Temperatur < 20 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC5_T3_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 10°C < Temperatur < 20 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC5_T3_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 10°C < Temperatur < 20 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC5_T3_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 10°C < Temperatur < 20 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC6_T3_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 10°C < Temperatur < 20 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC6_T3_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 10°C < Temperatur < 20 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC6_T3_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 10°C < Temperatur < 20 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC6_T3_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 10°C < Temperatur < 20 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC6_T3_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 10°C < Temperatur < 20 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC6_T3_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 10°C < Temperatur < 20 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC6_T3_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 10°C < Temperatur < 20 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC6_T3_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 10°C < Temperatur < 20 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC6_T3_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 10°C < Temperatur < 20 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC6_T3_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 10°C < Temperatur < 20 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC7_T3_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 10°C < Temperatur < 20 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC7_T3_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 10°C < Temperatur < 20 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC7_T3_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 10°C < Temperatur < 20 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC7_T3_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 10°C < Temperatur < 20 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC7_T3_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 10°C < Temperatur < 20 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC7_T3_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 10°C < Temperatur < 20 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC7_T3_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 10°C < Temperatur < 20 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC7_T3_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 10°C < Temperatur < 20 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC7_T3_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 10°C < Temperatur < 20 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC7_T3_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 10°C < Temperatur < 20 °C. Strom > 140 A |

### RES_0XDD97

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T4_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 20°C < Temperatur < 30 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC1_T4_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 20°C < Temperatur < 30 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC1_T4_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 20°C < Temperatur < 30 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC1_T4_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 20°C < Temperatur < 30 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC1_T4_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 20°C < Temperatur < 30 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC1_T4_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 20°C < Temperatur < 30 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC1_T4_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 20°C < Temperatur < 30 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC1_T4_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 20°C < Temperatur < 30 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC1_T4_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 20°C < Temperatur < 30 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC1_T4_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 20°C < Temperatur < 30 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC2_T4_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 20°C < Temperatur < 30 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC2_T4_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 20°C < Temperatur < 30 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC2_T4_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 20°C < Temperatur < 30 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC2_T4_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 20°C < Temperatur < 30 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC2_T4_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 20°C < Temperatur < 30 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC2_T4_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 20°C < Temperatur < 30 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC2_T4_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 20°C < Temperatur < 30 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC2_T4_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 20°C < Temperatur < 30 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC2_T4_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 20°C < Temperatur < 30 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC2_T4_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 20°C < Temperatur < 30 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC3_T4_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 20°C < Temperatur < 30 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC3_T4_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 20°C < Temperatur < 30 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC3_T4_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 20°C < Temperatur < 30 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC3_T4_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 20°C < Temperatur < 30 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC3_T4_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 20°C < Temperatur < 30 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC3_T4_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 20°C < Temperatur < 30 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC3_T4_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 20°C < Temperatur < 30 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC3_T4_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 20°C < Temperatur < 30 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC3_T4_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 20°C < Temperatur < 30 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC3_T4_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 20°C < Temperatur < 30 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC4_T4_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 20°C < Temperatur < 30 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC4_T4_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 20°C < Temperatur < 30 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC4_T4_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 20°C < Temperatur < 30 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC4_T4_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 20°C < Temperatur < 30 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC4_T4_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 20°C < Temperatur < 30 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC4_T4_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 20°C < Temperatur < 30 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC4_T4_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 20°C < Temperatur < 30 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC4_T4_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 20°C < Temperatur < 30 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC4_T4_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 20°C < Temperatur < 30 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC4_T4_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 20°C < Temperatur < 30 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC5_T4_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 20°C < Temperatur < 30 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC5_T4_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 20°C < Temperatur < 30 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC5_T4_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 20°C < Temperatur < 30 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC5_T4_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 20°C < Temperatur < 30 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC5_T4_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 20°C < Temperatur < 30 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC5_T4_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 20°C < Temperatur < 30 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC5_T4_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 20°C < Temperatur < 30 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC5_T4_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 20°C < Temperatur < 30 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC5_T4_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 20°C < Temperatur < 30 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC5_T4_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 20°C < Temperatur < 30 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC6_T4_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 20°C < Temperatur < 30 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC6_T4_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 20°C < Temperatur < 30 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC6_T4_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 20°C < Temperatur < 30 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC6_T4_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 20°C < Temperatur < 30 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC6_T4_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 20°C < Temperatur < 30 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC6_T4_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 20°C < Temperatur < 30 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC6_T4_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 20°C < Temperatur < 30 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC6_T4_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 20°C < Temperatur < 30 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC6_T4_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 20°C < Temperatur < 30 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC6_T4_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 20°C < Temperatur < 30 °C. Strom > 140 A |
| STAT_HV_BATT_HIST_SOC7_T4_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 20°C < Temperatur < 30 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC7_T4_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 20°C < Temperatur < 30 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC7_T4_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 20°C < Temperatur < 30 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC7_T4_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 20°C < Temperatur < 30 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC7_T4_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 20°C < Temperatur < 30 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC7_T4_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 20°C < Temperatur < 30 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC7_T4_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 20°C < Temperatur < 30 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC7_T4_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 20°C < Temperatur < 30 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC7_T4_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 20°C < Temperatur < 30 °C. Strom 80 A bis 140 A |
| STAT_HV_BATT_HIST_SOC7_T4_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 20°C < Temperatur < 30 °C. Strom > 140 A |

### RES_0XDD98

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T5_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 30°C < Temperatur < 40 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC1_T5_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 30°C < Temperatur < 40 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC1_T5_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 30°C < Temperatur < 40 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC1_T5_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 30°C < Temperatur < 40 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC1_T5_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 30°C < Temperatur < 40 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC1_T5_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 30°C < Temperatur < 40 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC1_T5_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 30°C < Temperatur < 40 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC1_T5_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 30°C < Temperatur < 40 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC1_T5_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 30°C < Temperatur < 40 °C. Strom 80 A bis 160 A |
| STAT_HV_BATT_HIST_SOC1_T5_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 30°C < Temperatur < 40 °C. Strom > 160 A |
| STAT_HV_BATT_HIST_SOC2_T5_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 30°C < Temperatur < 40 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC2_T5_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 30°C < Temperatur < 40 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC2_T5_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 30°C < Temperatur < 40 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC2_T5_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 30°C < Temperatur < 40 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC2_T5_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 30°C < Temperatur < 40 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC2_T5_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 30°C < Temperatur < 40 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC2_T5_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 30°C < Temperatur < 40 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC2_T5_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 30°C < Temperatur < 40 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC2_T5_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 30°C < Temperatur < 40 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC2_T5_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 30°C < Temperatur < 40 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC3_T5_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 30°C < Temperatur < 40 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC3_T5_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 30°C < Temperatur < 40 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC3_T5_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 30°C < Temperatur < 40 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC3_T5_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 30°C < Temperatur < 40 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC3_T5_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 30°C < Temperatur < 40 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC3_T5_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 30°C < Temperatur < 40 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC3_T5_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 30°C < Temperatur < 40 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC3_T5_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 30°C < Temperatur < 40 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC3_T5_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 30°C < Temperatur < 40 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC3_T5_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 30°C < Temperatur < 40 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC4_T5_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 30°C < Temperatur < 40 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC4_T5_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 30°C < Temperatur < 40 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC4_T5_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 30°C < Temperatur < 40 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC4_T5_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 30°C < Temperatur < 40 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC4_T5_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 30°C < Temperatur < 40 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC4_T5_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 30°C < Temperatur < 40 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC4_T5_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 30°C < Temperatur < 40 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC4_T5_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 30°C < Temperatur < 40 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC4_T5_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 30°C < Temperatur < 40 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC4_T5_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 30°C < Temperatur < 40 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC5_T5_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 30°C < Temperatur < 40 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC5_T5_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 30°C < Temperatur < 40 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC5_T5_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 30°C < Temperatur < 40 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC5_T5_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 30°C < Temperatur < 40 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC5_T5_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 30°C < Temperatur < 40 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC5_T5_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 30°C < Temperatur < 40 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC5_T5_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 30°C < Temperatur < 40 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC5_T5_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 30°C < Temperatur < 40 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC5_T5_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 30°C < Temperatur < 40 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC5_T5_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 30°C < Temperatur < 40 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC6_T5_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 30°C < Temperatur < 40 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC6_T5_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 30°C < Temperatur < 40 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC6_T5_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 30°C < Temperatur < 40 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC6_T5_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 30°C < Temperatur < 40 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC6_T5_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 30°C < Temperatur < 40 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC6_T5_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 30°C < Temperatur < 40 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC6_T5_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 30°C < Temperatur < 40 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC6_T5_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 30°C < Temperatur < 40 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC6_T5_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 30°C < Temperatur < 40 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC6_T5_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 30°C < Temperatur < 40 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC7_T5_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 30°C < Temperatur < 40 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC7_T5_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 30°C < Temperatur < 40 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC7_T5_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 30°C < Temperatur < 40 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC7_T5_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 30°C < Temperatur < 40 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC7_T5_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 30°C < Temperatur < 40 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC7_T5_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 30°C < Temperatur < 40 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC7_T5_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 30°C < Temperatur < 40 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC7_T5_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 30°C < Temperatur < 40 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC7_T5_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 30°C < Temperatur < 40 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC7_T5_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 30°C < Temperatur < 40 °C. Strom > 80 A |

### RES_0XDD99

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T6_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 40°C < Temperatur < 50 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC1_T6_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 40°C < Temperatur < 50 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC1_T6_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 40°C < Temperatur < 50 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC1_T6_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 40°C < Temperatur < 50 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC1_T6_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 40°C < Temperatur < 50 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC1_T6_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 40°C < Temperatur < 50 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC1_T6_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 40°C < Temperatur < 50 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC1_T6_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 40°C < Temperatur < 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC1_T6_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 40°C < Temperatur < 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC1_T6_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. 40°C < Temperatur < 50 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC2_T6_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 40°C < Temperatur < 50 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC2_T6_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 40°C < Temperatur < 50 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC2_T6_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 40°C < Temperatur < 50 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC2_T6_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 40°C < Temperatur < 50 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC2_T6_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 40°C < Temperatur < 50 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC2_T6_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 40°C < Temperatur < 50 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC2_T6_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 40°C < Temperatur < 50 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC2_T6_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 40°C < Temperatur < 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC2_T6_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 40°C < Temperatur < 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC2_T6_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. 40°C < Temperatur < 50 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC3_T6_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 40°C < Temperatur < 50 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC3_T6_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 40°C < Temperatur < 50 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC3_T6_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 40°C < Temperatur < 50 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC3_T6_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 40°C < Temperatur < 50 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC3_T6_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 40°C < Temperatur < 50 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC3_T6_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 40°C < Temperatur < 50 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC3_T6_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 40°C < Temperatur < 50 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC3_T6_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 40°C < Temperatur < 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC3_T6_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 40°C < Temperatur < 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC3_T6_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. 40°C < Temperatur < 50 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC4_T6_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 40°C < Temperatur < 50 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC4_T6_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 40°C < Temperatur < 50 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC4_T6_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 40°C < Temperatur < 50 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC4_T6_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 40°C < Temperatur < 50 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC4_T6_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 40°C < Temperatur < 50 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC4_T6_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 40°C < Temperatur < 50 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC4_T6_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 40°C < Temperatur < 50 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC4_T6_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 40°C < Temperatur < 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC4_T6_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 40°C < Temperatur < 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC4_T6_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. 40°C < Temperatur < 50 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC5_T6_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 40°C < Temperatur < 50 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC5_T6_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 40°C < Temperatur < 50 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC5_T6_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 40°C < Temperatur < 50 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC5_T6_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 40°C < Temperatur < 50 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC5_T6_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 40°C < Temperatur < 50 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC5_T6_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 40°C < Temperatur < 50 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC5_T6_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 40°C < Temperatur < 50 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC5_T6_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 40°C < Temperatur < 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC5_T6_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 40°C < Temperatur < 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC5_T6_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. 40°C < Temperatur < 50 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC6_T6_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 40°C < Temperatur < 50 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC6_T6_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 40°C < Temperatur < 50 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC6_T6_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 40°C < Temperatur < 50 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC6_T6_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 40°C < Temperatur < 50 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC6_T6_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 40°C < Temperatur < 50 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC6_T6_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 40°C < Temperatur < 50 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC6_T6_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 40°C < Temperatur < 50 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC6_T6_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 40°C < Temperatur < 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC6_T6_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 40°C < Temperatur < 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC6_T6_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. 40°C < Temperatur < 50 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC7_T6_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 40°C < Temperatur < 50 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC7_T6_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 40°C < Temperatur < 50 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC7_T6_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 40°C < Temperatur < 50 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC7_T6_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 40°C < Temperatur < 50 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC7_T6_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 40°C < Temperatur < 50 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC7_T6_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 40°C < Temperatur < 50 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC7_T6_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 40°C < Temperatur < 50 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC7_T6_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 40°C < Temperatur < 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC7_T6_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 40°C < Temperatur < 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC7_T6_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. 40°C < Temperatur < 50 °C. Strom > 80 A |

### RES_0XDD9A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_BATT_HIST_SOC1_T7_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur > 50 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC1_T7_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur > 50 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC1_T7_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur > 50 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC1_T7_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur > 50 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC1_T7_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur > 50 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC1_T7_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur > 50 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC1_T7_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur > 50 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC1_T7_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur > 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC1_T7_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur > 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC1_T7_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei SoC < 30 %. Temperatur > 50 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC2_T7_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur > 50 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC2_T7_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur > 50 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC2_T7_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur > 50 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC2_T7_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur > 50 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC2_T7_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur > 50 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC2_T7_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur > 50 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC2_T7_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur > 50 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC2_T7_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur > 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC2_T7_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur > 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC2_T7_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 30 % < SoC < 40 %. Temperatur > 50 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC3_T7_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur > 50 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC3_T7_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur > 50 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC3_T7_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur > 50 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC3_T7_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur > 50 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC3_T7_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur > 50 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC3_T7_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur > 50 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC3_T7_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur > 50 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC3_T7_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur > 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC3_T7_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur > 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC3_T7_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 40 % < SoC < 50 %. Temperatur > 50 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC4_T7_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur > 50 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC4_T7_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur > 50 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC4_T7_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur > 50 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC4_T7_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur > 50 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC4_T7_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur > 50 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC4_T7_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur > 50 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC4_T7_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur > 50 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC4_T7_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur > 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC4_T7_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur > 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC4_T7_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 50 % < SoC < 60 %. Temperatur > 50 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC5_T7_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur > 50 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC5_T7_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur > 50 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC5_T7_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur > 50 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC5_T7_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur > 50 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC5_T7_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur > 50 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC5_T7_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur > 50 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC5_T7_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur > 50 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC5_T7_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur > 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC5_T7_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur > 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC5_T7_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 60 % < SoC < 70 %. Temperatur > 50 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC6_T7_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur > 50 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC6_T7_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur > 50 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC6_T7_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur > 50 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC6_T7_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur > 50 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC6_T7_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur > 50 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC6_T7_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur > 50 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC6_T7_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur > 50 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC6_T7_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur > 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC6_T7_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur > 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC6_T7_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 70 % < SoC < 80 %. Temperatur > 50 °C. Strom > 80 A |
| STAT_HV_BATT_HIST_SOC7_T7_I1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur > 50 °C. Strom < -160 A |
| STAT_HV_BATT_HIST_SOC7_T7_I2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur > 50 °C. Strom -160 A bis -80 A |
| STAT_HV_BATT_HIST_SOC7_T7_I3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur > 50 °C. Strom -80 A bis -40 A |
| STAT_HV_BATT_HIST_SOC7_T7_I4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur > 50 °C. Strom -40 A bis -10 A |
| STAT_HV_BATT_HIST_SOC7_T7_I5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur > 50 °C. Strom -10 A bis 0 A |
| STAT_HV_BATT_HIST_SOC7_T7_I6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur > 50 °C. Strom 0 A bis 10 A |
| STAT_HV_BATT_HIST_SOC7_T7_I7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur > 50 °C. Strom 10 A bis 40 A |
| STAT_HV_BATT_HIST_SOC7_T7_I8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur > 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC7_T7_I9_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur > 50 °C. Strom 40 A bis 80 A |
| STAT_HV_BATT_HIST_SOC7_T7_I10_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Zyklen bei 80 % < SoC. Temperatur > 50 °C. Strom > 80 A |

### RES_0XDD9B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_97_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 97 |
| STAT_ZELLSPANNUNG_98_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung  von Zelle 98 |
| STAT_ZELLSPANNUNG_99_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 99 |
| STAT_ZELLSPANNUNG_100_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 100 |
| STAT_ZELLSPANNUNG_101_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 101 |
| STAT_ZELLSPANNUNG_102_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 102 |
| STAT_ZELLSPANNUNG_103_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 103 |
| STAT_ZELLSPANNUNG_104_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 104 |
| STAT_ZELLSPANNUNG_105_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 105 |
| STAT_ZELLSPANNUNG_106_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 106 |
| STAT_ZELLSPANNUNG_107_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 107 |
| STAT_ZELLSPANNUNG_108_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 108 |

### RES_0XDD9C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_109_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 109 |
| STAT_ZELLSPANNUNG_110_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 110 |
| STAT_ZELLSPANNUNG_111_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 111 |
| STAT_ZELLSPANNUNG_112_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 112 |
| STAT_ZELLSPANNUNG_113_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 113 |
| STAT_ZELLSPANNUNG_114_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 114 |
| STAT_ZELLSPANNUNG_115_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 115 |
| STAT_ZELLSPANNUNG_116_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 116 |
| STAT_ZELLSPANNUNG_117_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 117 |
| STAT_ZELLSPANNUNG_118_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 118 |
| STAT_ZELLSPANNUNG_119_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 119 |
| STAT_ZELLSPANNUNG_120_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 120 |

### RES_0XDD9D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_121_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 121 |
| STAT_ZELLSPANNUNG_122_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 122 |
| STAT_ZELLSPANNUNG_123_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 123 |
| STAT_ZELLSPANNUNG_124_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 124 |
| STAT_ZELLSPANNUNG_125_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 125 |
| STAT_ZELLSPANNUNG_126_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 126 |
| STAT_ZELLSPANNUNG_127_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 127 |
| STAT_ZELLSPANNUNG_128_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 128 |
| STAT_ZELLSPANNUNG_129_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 129 |
| STAT_ZELLSPANNUNG_130_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 130 |
| STAT_ZELLSPANNUNG_131_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 131 |
| STAT_ZELLSPANNUNG_132_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 132 |

### RES_0XDD9E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_133_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 133 |
| STAT_ZELLSPANNUNG_134_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 134 |
| STAT_ZELLSPANNUNG_135_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 135 |
| STAT_ZELLSPANNUNG_136_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 136 |
| STAT_ZELLSPANNUNG_137_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 137 |
| STAT_ZELLSPANNUNG_138_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 138 |
| STAT_ZELLSPANNUNG_139_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 139 |
| STAT_ZELLSPANNUNG_140_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 140 |
| STAT_ZELLSPANNUNG_141_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 141 |
| STAT_ZELLSPANNUNG_142_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 142 |
| STAT_ZELLSPANNUNG_143_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 143 |
| STAT_ZELLSPANNUNG_144_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 144 |

### RES_0XDDA1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLLDREHZAHL_KUEHLMITTELPUMPE_WERT | % | high | unsigned char | - | - | - | - | - | aktuelle Ansteuerung der Kühlmittelumpe in % |

### ARG_0XDDA1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLLDREHZAHL_KUEHLMITTELPUMPE | % | high | unsigned char | - | - | - | - | - | 0.0 | 100.0 | Ansteuerung der Kühlmittelpumpe in Prozent (0-100%) |
| ZEITDAUER | s | high | unsigned int | - | - | - | - | - | 0.0 | 1000.0 | Vorgabe der Zeitdauer während der die Kühlmittelpumpe aktiv ist |

### RES_0XDDA2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_SENSOR_1_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 1 |
| STAT_TEMP_SENSOR_2_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 1 |
| STAT_TEMP_SENSOR_3_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 2 |
| STAT_TEMP_SENSOR_4_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 2 |
| STAT_TEMP_SENSOR_5_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 3 |
| STAT_TEMP_SENSOR_6_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 3 |
| STAT_TEMP_SENSOR_7_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 4 |
| STAT_TEMP_SENSOR_8_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 4 |
| STAT_TEMP_SENSOR_9_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 5 |
| STAT_TEMP_SENSOR_10_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 5 |
| STAT_TEMP_SENSOR_11_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 6 |
| STAT_TEMP_SENSOR_12_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 6 |
| STAT_TEMP_SENSOR_13_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 7 |
| STAT_TEMP_SENSOR_14_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 7 |
| STAT_TEMP_SENSOR_15_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 8 |
| STAT_TEMP_SENSOR_16_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 8 |
| STAT_TEMP_SENSOR_17_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 9 |
| STAT_TEMP_SENSOR_18_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 9 |
| STAT_TEMP_SENSOR_19_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 10 |
| STAT_TEMP_SENSOR_20_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 10 |
| STAT_TEMP_SENSOR_21_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 11 |
| STAT_TEMP_SENSOR_22_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 11 |
| STAT_TEMP_SENSOR_23_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 12 |
| STAT_TEMP_SENSOR_24_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 12 |
| STAT_TEMP_SENSOR_25_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 13 |
| STAT_TEMP_SENSOR_26_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 13 |
| STAT_TEMP_SENSOR_27_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 14 |
| STAT_TEMP_SENSOR_28_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 14 |
| STAT_TEMP_SENSOR_29_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 15 |
| STAT_TEMP_SENSOR_30_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 15 |
| STAT_TEMP_SENSOR_31_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 16 |
| STAT_TEMP_SENSOR_32_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 16 |
| STAT_TEMP_SENSOR_33_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 17 |
| STAT_TEMP_SENSOR_34_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 17 |
| STAT_TEMP_SENSOR_35_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 18 |
| STAT_TEMP_SENSOR_36_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 18 |
| STAT_TEMP_SENSOR_37_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 19 |
| STAT_TEMP_SENSOR_38_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 19 |
| STAT_TEMP_SENSOR_39_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 20 |
| STAT_TEMP_SENSOR_40_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 20 |
| STAT_TEMP_SENSOR_41_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 21 |
| STAT_TEMP_SENSOR_42_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 21 |
| STAT_TEMP_SENSOR_43_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 22 |
| STAT_TEMP_SENSOR_44_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 22 |
| STAT_TEMP_SENSOR_45_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 23 |
| STAT_TEMP_SENSOR_46_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 23 |
| STAT_TEMP_SENSOR_47_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 24 |
| STAT_TEMP_SENSOR_48_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 24 |
| STAT_TEMP_SENSOR_49_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 25 |
| STAT_TEMP_SENSOR_50_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 25 |
| STAT_TEMP_SENSOR_51_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 1 in °C von CSC 26 |
| STAT_TEMP_SENSOR_52_WERT | °C | high | int | - | - | - | 100.0 | - | aktuell gemessene Modul-Temperatur 2 in °C von CSC 26 |

### RES_0XDDA3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_145_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 145 |
| STAT_ZELLSPANNUNG_146_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 146 |
| STAT_ZELLSPANNUNG_147_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 147 |
| STAT_ZELLSPANNUNG_148_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 148 |
| STAT_ZELLSPANNUNG_149_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 149 |
| STAT_ZELLSPANNUNG_150_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 150 |
| STAT_ZELLSPANNUNG_151_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 151 |
| STAT_ZELLSPANNUNG_152_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 152 |
| STAT_ZELLSPANNUNG_153_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 153 |
| STAT_ZELLSPANNUNG_154_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 154 |
| STAT_ZELLSPANNUNG_155_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 155 |
| STAT_ZELLSPANNUNG_156_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung von Zelle 156 |

### RES_0XDDA5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREIGABE_KUEHLMITTELPUMPE_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status der Kühlmittelpumpe (0 = nicht freigegeben, 1 = freigegeben) |

### ARG_0XDDA5

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KUEHLMITTELPUMPE_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktivieren / Deaktivieren der Lauffähigkeit Kühlmittelpumpe (0 = deaktiviert, 1 = aktiviert) |

### RES_0XDDA6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHUETZ_SCHALTER_1 | 0-n | - | unsigned char | - | TAB_SCHUETZ_SCHALTER | - | - | - | Status der Schützschalter der HV-Batterie Getriebetunnel: geschlossen oder offen. Ergebnisse siehe Tabelle TAB_SCHUETZ_SCHALTER |
| STAT_SCHUETZ_SCHALTER_2 | 0-n | - | unsigned char | - | TAB_SCHUETZ_SCHALTER | - | - | - | Status der Schützschalter für HV-Batterie Vorderbau: geschlossen oder offen. Ergebnisse siehe Tabelle TAB_SCHUETZ_SCHALTER |
| STAT_SCHUETZ_SCHALTER_3 | 0-n | - | unsigned char | - | TAB_SCHUETZ_SCHALTER | - | - | - | Status der Schützschalter für HV-Batterie Tank: geschlossen oder offen. Ergebnisse siehe Tabelle TAB_SCHUETZ_SCHALTER |

### TAB_SCHUETZ_SCHALTER

| WERT | TEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | geschlossen |
| 0x02 | verschweisste Kontakte |
| 0x03 | nicht definiert |

### RES_0XDDA7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ISOWIDERSTAND_EXT_AC_WERT | kOhm | high | unsigned int | - | - | - | - | - | Wert des externen AC Isolationswiderstands |
| STAT_ISOWIDERSTAND_EXT_AC_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Plausibilität des externen AC Isolationswiderstandes (0 =  nicht plausibel, 1 =  plausibel) |
| STAT_ISOWIDERSTAND_EXT_DC_WERT | kOhm | high | unsigned int | - | - | - | - | - | Wert des externen DC Isolationswiderstands |
| STAT_ISOWIDERSTAND_EXT_DC_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Plausibilität des externen DC Isolationswiderstandes (0 =  nicht plausibel, 1 =  plausibel) |
| STAT_ISOWIDERSTAND_INT_DC_WERT | kOhm | high | unsigned int | - | - | - | - | - | Wert des internen DC Isolationswiderstands HV-Batterie  Getriebetunnel |
| STAT_ISOWIDERSTAND_INT_DC_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | plausibility of the internal DC insulation resistor for the HV battery transmission tunnel (0 =  implausible, 1 =  plausible) |
| STAT_ISOWIDERSTAND1_INT_DC_WERT | kOhm | high | unsigned int | - | - | - | - | - | Wert des internen DC Isolationswiderstands der HV-Batterie Vorderbau |
| STAT_ISOWIDERSTAND1_INT_DC_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Plausibilität des externen AC Isolationswiderstandes von HVB Vorderbau (0 =  nicht plausibel, 1 =  plausibel) |
| STAT_ISOWIDERSTAND2_INT_DC_WERT | kOhm | high | unsigned int | - | - | - | - | - | Wert des internen DC Isolationswiderstands der HV-Batterie Tank |
| STAT_ISOWIDERSTAND2_INT_DC_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Plausibilität des externen AC Isolationswiderstandes von HVB Tank (0 =  nicht plausibel, 1 =  plausibel) |
| STAT_ISOWIDERSTAND_INT_DC_GESAMT_WERT | kOhm | high | unsigned int | - | - | - | - | - | Wert des internen DC Isolationswiderstands des gesamten  HV-Speichers (Getriebetunnel und Vorderbau und Tank) |
| STAT_ISOWIDERSTAND_INT_DC_GESAMT_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Plausibilität des internen gesamten DC Isolationswiderstandes des gesamten HV-Speichers (0 =  nicht plausibel, 1 =  plausibel) |

### RES_0XDDA8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CSC_ID0_WERT | - | high | string[8] | - | - | - | - | - | Hardware ID der CSC 1 |
| STAT_CSC_ID1_WERT | - | high | string[8] | - | - | - | - | - | Hardware ID der CSC 2 |
| STAT_CSC_ID2_WERT | - | high | string[8] | - | - | - | - | - | Hardware ID der CSC 3 |
| STAT_CSC_ID3_WERT | - | high | string[8] | - | - | - | - | - | Hardware ID der CSC 4 |
| STAT_CSC_ID4_WERT | - | high | string[8] | - | - | - | - | - | Hardware ID der CSC 5 |
| STAT_CSC_ID5_WERT | - | high | string[8] | - | - | - | - | - | Hardware ID der CSC 6 |
| STAT_CSC_ID6_WERT | - | high | string[8] | - | - | - | - | - | Hardware ID der CSC 7 |
| STAT_CSC_ID7_WERT | - | high | string[8] | - | - | - | - | - | Hardware ID der CSC 8 |
| STAT_CSC_ID8_WERT | - | high | string[8] | - | - | - | - | - | Hardware ID der CSC 9 |
| STAT_CSC_ID9_WERT | - | high | string[8] | - | - | - | - | - | Hardware ID der CSC 10 |
| STAT_CSC_ID10_WERT | - | high | string[8] | - | - | - | - | - | Hardware ID der CSC 11 |
| STAT_CSC_ID11_WERT | - | high | string[8] | - | - | - | - | - | Hardware ID der CSC 12 |
| STAT_CSC_ID12_WERT | - | high | string[8] | - | - | - | - | - | Hardware ID der CSC 13 |

### RES_0XDDA9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_KUEHLKREISLAUF1_WERT | °C | high | int | - | - | - | 100.0 | - | Temperatur des Kühlmediums in °C in der HV-Batterie Getriebetunnel |
| STAT_TEMP_KUEHLKREISLAUF2_WERT | °C | high | int | - | - | - | 100.0 | - | Temperatur des Kühlmediums in °C in der HV-Batterie Vorderbau |
| STAT_TEMP_KUEHLKREISLAUF3_WERT | °C | high | int | - | - | - | 100.0 | - | Temperatur des Kühlmediums in °C in der HV-Batterie Tank |

### RES_0XDDAA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_U_BAT_GESAMT_WERT | V | high | unsigned int | - | - | - | 100.0 | - | gesamte HV-Spannung aller drei HV-Batterien Getriebetunnel, Vorderbau und Tank |
| STAT_U_ZK_GESAMT_WERT | V | high | unsigned int | - | - | - | 100.0 | - | Gesamte HV-Zwischenkreisspannung über alle drei HV-Batterien Getriebetunnel, Vorderbau und Tank. |
| STAT_U_BAT_TUNNEL_WERT | V | high | unsigned int | - | - | - | 100.0 | - | HV-Spannung der HV-Batterie Getriebetunnel |
| STAT_U_BAT_VORDERBAU_WERT | V | high | unsigned int | - | - | - | 100.0 | - | HV-Spannung der HV-Batterie Vorderbau |
| STAT_U_BAT_TANK_WERT | V | high | unsigned int | - | - | - | 100.0 | - | HV-Spannung der HV-Batterie Tank |
| STAT_U_K2_TUNNEL_WERT | V | high | unsigned int | - | - | - | 100.0 | - | HV-Spannung an dem Schützen der HV-Batterie Getriebetunnel |
| STAT_U_K2_VORDERBAU_WERT | V | high | unsigned int | - | - | - | 100.0 | - | HV-Spannung an dem Schützen der HV-Batterie Vorderbau |
| STAT_U_K2_TANK_WERT | V | high | unsigned int | - | - | - | 100.0 | - | HV-Spannung an den Schützen der HV-Batterie Tank |
| STAT_U_ZK_TUNNEL_WERT | V | high | unsigned int | - | - | - | 100.0 | - | HV-Zwischenkreisspannung an der HV-Batterie Getriebetunnel |
| STAT_U_ZK_VORDERBAU_WERT | V | high | unsigned int | - | - | - | 100.0 | - | HV-Zwischenkreisspannung an der HV-Batterie Vorderbau |
| STAT_U_ZK_TANK_WERT | V | high | unsigned int | - | - | - | 100.0 | - | HV-Zwischenkreisspannung an der HV-Batterie Tank |
| STAT_U_CB_TUNNEL_WERT | V | high | unsigned int | - | - | - | 100.0 | - | HV-Spannung gemessen zwischen einem Punkt innerhalb HV-Batterie Getriebetunnel und einem Punkt ausserhalb HV-Batterie Getriebetunnel |
| STAT_U_CB_VORDERBAU_WERT | V | high | unsigned int | - | - | - | 100.0 | - | HV-Spannung gemessen zwischen einem Punkt innerhalb HV-Batterie Vorderbau und einem Punkt ausserhalb HV-Batterie Vorderbau |
| STAT_U_CB_TANK_WERT | V | high | unsigned int | - | - | - | 100.0 | - | HV-Spannung gemessen zwischen einem Punkt innerhalb HV-Batterie Tank und einem Punkt ausserhalb HV-Batterie Tank |

### RES_0XDDAD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CSC_VARIANTE_MODUL_0_WERT | - | high | unsigned char | - | - | - | - | - | Variante der CSC vom Modul 1 (Werte von 1-8) |
| STAT_CSC_VARIANTE_MODUL_1_WERT | - | high | unsigned char | - | - | - | - | - | Variante der CSC vom Modul 2 (Werte von 1-8) |
| STAT_CSC_VARIANTE_MODUL_2_WERT | - | high | unsigned char | - | - | - | - | - | Variante der CSC vom Modul 3 (Werte von 1-8) |
| STAT_CSC_VARIANTE_MODUL_3_WERT | - | high | unsigned char | - | - | - | - | - | Variante der CSC vom Modul 4 (Werte von 1-8) |
| STAT_CSC_VARIANTE_MODUL_4_WERT | - | high | unsigned char | - | - | - | - | - | Variante der CSC vom Modul 5 (Werte von 1-8) |
| STAT_CSC_VARIANTE_MODUL_5_WERT | - | high | unsigned char | - | - | - | - | - | Variante der CSC vom Modul 6 (Werte von 1-8) |
| STAT_CSC_VARIANTE_MODUL_6_WERT | - | high | unsigned char | - | - | - | - | - | Variante der CSC vom Modul 7 (Werte von 1-8) |
| STAT_CSC_VARIANTE_MODUL_7_WERT | - | high | unsigned char | - | - | - | - | - | Variante der CSC vom Modul 8 (Werte von 1-8) |
| STAT_CSC_VARIANTE_MODUL_8_WERT | - | high | unsigned char | - | - | - | - | - | Variante der CSC vom Modul 9 (Werte von 1-8) |
| STAT_CSC_VARIANTE_MODUL_9_WERT | - | high | unsigned char | - | - | - | - | - | Variante der CSC vom Modul 10 (Werte von 1-8) |
| STAT_CSC_VARIANTE_MODUL_10_WERT | - | high | unsigned char | - | - | - | - | - | Variante der CSC vom Modul 11 (Werte von 1-8) |
| STAT_CSC_VARIANTE_MODUL_11_WERT | - | high | unsigned char | - | - | - | - | - | Variante der CSC vom Modul 12 (Werte von 1-8) |
| STAT_CSC_VARIANTE_MODUL_12_WERT | - | high | unsigned char | - | - | - | - | - | Variante der CSC vom Modul 13 (Werte von 1-8) |

### RES_0XDDAE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_37_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 37 |
| STAT_ZELLSPANNUNG_38_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 38 |
| STAT_ZELLSPANNUNG_39_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 39 |
| STAT_ZELLSPANNUNG_40_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 40 |
| STAT_ZELLSPANNUNG_41_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 41 |
| STAT_ZELLSPANNUNG_42_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 42 |
| STAT_ZELLSPANNUNG_43_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 43 |
| STAT_ZELLSPANNUNG_44_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 44 |
| STAT_ZELLSPANNUNG_45_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 45 |
| STAT_ZELLSPANNUNG_46_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 46 |
| STAT_ZELLSPANNUNG_47_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 47 |
| STAT_ZELLSPANNUNG_48_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 48 |

### RES_0XDDAF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_49_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 49 |
| STAT_ZELLSPANNUNG_50_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 50 |
| STAT_ZELLSPANNUNG_51_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 51 |
| STAT_ZELLSPANNUNG_52_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 52 |
| STAT_ZELLSPANNUNG_53_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 53 |
| STAT_ZELLSPANNUNG_54_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 54 |
| STAT_ZELLSPANNUNG_55_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 55 |
| STAT_ZELLSPANNUNG_56_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 56 |
| STAT_ZELLSPANNUNG_57_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 57 |
| STAT_ZELLSPANNUNG_58_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 58 |
| STAT_ZELLSPANNUNG_59_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 59 |
| STAT_ZELLSPANNUNG_60_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 60 |

### RES_0XDDB0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_61_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 61 |
| STAT_ZELLSPANNUNG_62_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 62 |
| STAT_ZELLSPANNUNG_63_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 63 |
| STAT_ZELLSPANNUNG_64_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 64 |
| STAT_ZELLSPANNUNG_65_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 65 |
| STAT_ZELLSPANNUNG_66_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 66 |
| STAT_ZELLSPANNUNG_67_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 67 |
| STAT_ZELLSPANNUNG_68_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 68 |
| STAT_ZELLSPANNUNG_69_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 69 |
| STAT_ZELLSPANNUNG_70_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 70 |
| STAT_ZELLSPANNUNG_71_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 71 |
| STAT_ZELLSPANNUNG_72_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 72 |

### RES_0XDDB1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_73_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 73 |
| STAT_ZELLSPANNUNG_74_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 74 |
| STAT_ZELLSPANNUNG_75_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 75 |
| STAT_ZELLSPANNUNG_76_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 76 |
| STAT_ZELLSPANNUNG_77_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 77 |
| STAT_ZELLSPANNUNG_78_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 78 |
| STAT_ZELLSPANNUNG_79_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 79 |
| STAT_ZELLSPANNUNG_80_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 80 |
| STAT_ZELLSPANNUNG_81_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 81 |
| STAT_ZELLSPANNUNG_82_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 82 |
| STAT_ZELLSPANNUNG_83_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 83 |
| STAT_ZELLSPANNUNG_84_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 84 |

### RES_0XDDB2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_85_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 85 |
| STAT_ZELLSPANNUNG_86_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 86 |
| STAT_ZELLSPANNUNG_87_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 87 |
| STAT_ZELLSPANNUNG_88_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 88 |
| STAT_ZELLSPANNUNG_89_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 89 |
| STAT_ZELLSPANNUNG_90_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 90 |
| STAT_ZELLSPANNUNG_91_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 91 |
| STAT_ZELLSPANNUNG_92_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 92 |
| STAT_ZELLSPANNUNG_93_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 93 |
| STAT_ZELLSPANNUNG_94_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 94 |
| STAT_ZELLSPANNUNG_95_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 95 |
| STAT_ZELLSPANNUNG_96_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 96 |

### RES_0XDDB9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_1_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 1 |
| STAT_ZELLSPANNUNG_2_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 2 |
| STAT_ZELLSPANNUNG_3_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 3 |
| STAT_ZELLSPANNUNG_4_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 4 |
| STAT_ZELLSPANNUNG_5_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 5 |
| STAT_ZELLSPANNUNG_6_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 6 |
| STAT_ZELLSPANNUNG_7_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 7 |
| STAT_ZELLSPANNUNG_8_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 8 |
| STAT_ZELLSPANNUNG_9_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 9 |
| STAT_ZELLSPANNUNG_10_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 10 |
| STAT_ZELLSPANNUNG_11_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 11 |
| STAT_ZELLSPANNUNG_12_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 12 |

### RES_0XDDBA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_13_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 13 |
| STAT_ZELLSPANNUNG_14_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 14 |
| STAT_ZELLSPANNUNG_15_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 15 |
| STAT_ZELLSPANNUNG_16_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 16 |
| STAT_ZELLSPANNUNG_17_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 17 |
| STAT_ZELLSPANNUNG_18_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 18 |
| STAT_ZELLSPANNUNG_19_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 19 |
| STAT_ZELLSPANNUNG_20_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 20 |
| STAT_ZELLSPANNUNG_21_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 21 |
| STAT_ZELLSPANNUNG_22_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 22 |
| STAT_ZELLSPANNUNG_23_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 23 |
| STAT_ZELLSPANNUNG_24_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 24 |

### RES_0XDDBB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_25_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 25 |
| STAT_ZELLSPANNUNG_26_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 26 |
| STAT_ZELLSPANNUNG_27_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 27 |
| STAT_ZELLSPANNUNG_28_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 28 |
| STAT_ZELLSPANNUNG_29_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 29 |
| STAT_ZELLSPANNUNG_30_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 30 |
| STAT_ZELLSPANNUNG_31_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 31 |
| STAT_ZELLSPANNUNG_32_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 32 |
| STAT_ZELLSPANNUNG_33_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 33 |
| STAT_ZELLSPANNUNG_34_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 34 |
| STAT_ZELLSPANNUNG_35_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 35 |
| STAT_ZELLSPANNUNG_36_WERT | V | high | unsigned int | - | - | - | 100.0 | - | aktuell gemessene Zellspannung in V von Zelle 36 |

### RES_0XDDBC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | - | 10.0 | - | aktueller Anzeige Soc |
| STAT_MAXIMALE_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | - | 10.0 | - | obere Grenze des Anzeige Soc |
| STAT_MINIMALE_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | - | 10.0 | - | untere Grenze des Anzeige Soc |

### RES_0XDDBE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_VORLADUNG_WERT | ms | high | unsigned int | - | - | - | - | - | zuletzt benötigte Vorladezeit |
| STAT_ZEIT_VORLADUNG_1_WERT | ms | high | unsigned int | - | - | - | - | - | benötigte Vorladezeit (1 Vorgang zuvor) |
| STAT_ZEIT_VORLADUNG_2_WERT | ms | high | unsigned int | - | - | - | - | - | benötigte Vorladezeit (2 Vorgänge zuvor) |
| STAT_ZEIT_VORLADUNG_3_WERT | ms | high | unsigned int | - | - | - | - | - | benötigte Vorladezeit (3 Vorgänge zuvor) |
| STAT_ZEIT_VORLADUNG_4_WERT | ms | high | unsigned int | - | - | - | - | - | benötigte Vorladezeit (4 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_WERT | A | high | int | - | - | - | 100.0 | - | maximaler Vorladestrom (letzte Vorladung) |
| STAT_MAX_STROM_VORLADUNG_1_WERT | A | high | int | - | - | - | 100.0 | - | maximaler Vorladestrom (1 Vorgang zuvor) |
| STAT_MAX_STROM_VORLADUNG_2_WERT | A | high | int | - | - | - | 100.0 | - | maximaler Vorladestrom (2 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_3_WERT | A | high | int | - | - | - | 100.0 | - | maximaler Vorladestrom (3 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_4_WERT | A | high | int | - | - | - | 100.0 | - | maximaler Vorladestrom (4 Vorgänge zuvor) |
| STAT_MAX_TEMP_VORLADUNG_WERT | °C | high | int | - | - | - | 10.0 | - | maximale Temperatur bei Vorladung (letzte Vorladung) |
| STAT_MAX_TEMP_VORLADUNG_1_WERT | °C | high | int | - | - | - | 10.0 | - | maximale Temperatur bei Vorladung (1 Vorgang zuvor) |
| STAT_MAX_TEMP_VORLADUNG_2_WERT | °C | high | int | - | - | - | 10.0 | - | maximale Temperatur bei Vorladung (2 Vorgänge zuvor) |
| STAT_MAX_TEMP_VORLADUNG_3_WERT | °C | high | int | - | - | - | 10.0 | - | maximale Temperatur bei Vorladung (3 Vorgänge zuvor) |
| STAT_MAX_TEMP_VORLADUNG_4_WERT | °C | high | int | - | - | - | 10.0 | - | maximale Temperatur bei Vorladung (4 Vorgänge zuvor) |

### RES_0XDDBF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UCELL_MIN_WERT | V | high | unsigned int | - | - | - | 100.0 | - | minimale Einzelzellspannung aller Einzelzellen |
| STAT_UCELL_MAX_WERT | V | high | unsigned int | - | - | - | 100.0 | - | maximale Einzelzellspannung aller Einzelzellen |

### RES_0XDDC0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPSENSOR_MIN_WERT | °C | high | int | - | - | - | 100.0 | - | Ausgabe des minimalen Temperaturwerts aller Einzelzellen |
| STAT_TEMPSENSOR_MAX_WERT | °C | high | int | - | - | - | 100.0 | - | Ausgabe des maximalen Temperaturwerts aller Einzelzellen |

### RES_0XDDC2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAKTOR_RS_ENTLADE_WERT | - | high | unsigned int | - | - | - | 100000.0 | - | Wert des seriellen ohmschen Widerstandes bei Entladung |
| STAT_FAKTOR_RS_LADE_WERT | - | high | unsigned int | - | - | - | 100000.0 | - | Wert des seriellen ohmschen Widerstandes bei Ladung |
| STAT_FAKTOR_RP_ENTLADE_WERT | - | high | unsigned int | - | - | - | 100000.0 | - | Wert des parallelen ohmschen Widerstandes bei Entladung |
| STAT_FAKTOR_RP_LADE_WERT | - | high | unsigned int | - | - | - | 100000.0 | - | Wert des parallelen ohmschen Widerstandes bei Ladung |
| STAT_FAKTOR_CP_ENTLADE_WERT | - | high | unsigned int | - | - | - | - | - | Wert der parallelen Kapazität (Doppelschicht-Kondensator) bei Entladung |
| STAT_FAKTOR_CP_LADE_WERT | - | high | unsigned int | - | - | - | - | - | Wert der parallelen Kapazität (Doppelschicht-Kondensator) bei Ladung |

### RES_0XDDC4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_WERT | % | high | unsigned int | - | - | - | 100.0 | - | SOC der HV-Batterie |
| STAT_SOC_PLAUSIBILITAET_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Plausibilität des HV-Batterie SOC (0 = plausibel, 1 = unplausibel) |

### RES_0XDDC6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HISTO_SYM_DAUER_1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl in Klasse 0-15 min |
| STAT_HISTO_SYM_DAUER_2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl in Klasse 15-75 min |
| STAT_HISTO_SYM_DAUER_3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl in Klasse 75-135 min |
| STAT_HISTO_SYM_DAUER_4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl in Klasse 135-195 min |
| STAT_HISTO_SYM_DAUER_5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl in Klasse 195-255 min |
| STAT_HISTO_SYM_DAUER_6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl in Klasse 255-315 min |
| STAT_HISTO_SYM_DAUER_7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl in Klasse 315-375 min |
| STAT_HISTO_SYM_DAUER_8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl in Klasse > 375 min |

### RES_0XDDC7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HISTO_SYM_ZELLANZAHL_1_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl Einschaltvorgänge bei 0 Zellen |
| STAT_HISTO_SYM_ZELLANZAHL_2_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl Einschaltvorgänge bei 1 Zelle |
| STAT_HISTO_SYM_ZELLANZAHL_3_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl Einschaltvorgänge bei 2-8 Zellen |
| STAT_HISTO_SYM_ZELLANZAHL_4_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl Einschaltvorgänge bei 9-48 Zellen |
| STAT_HISTO_SYM_ZELLANZAHL_5_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl Einschaltvorgänge bei 49-87 Zellen |
| STAT_HISTO_SYM_ZELLANZAHL_6_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl Einschaltvorgänge bei 88-94 Zellen |
| STAT_HISTO_SYM_ZELLANZAHL_7_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl Einschaltvorgänge bei 95 Zellen |
| STAT_HISTO_SYM_ZELLANZAHL_8_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl Einschaltvorgänge bei 96 Zellen |

### RES_0XDDC8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYM_DELTASOC_1_WERT | % | high | unsigned int | - | - | - | 100.0 | - | aktueller dSOC (zuletzt bestimmt) in % |
| STAT_SYM_DELTASOC_2_WERT | % | high | unsigned int | - | - | - | 100.0 | - | dSOC vor 1 Tag in % |
| STAT_SYM_DELTASOC_3_WERT | % | high | unsigned int | - | - | - | 100.0 | - | dSOC vor 2 Tagen in % |
| STAT_SYM_DELTASOC_4_WERT | % | high | unsigned int | - | - | - | 100.0 | - | dSOC vor 3 Tagen in % |
| STAT_SYM_DELTASOC_5_WERT | % | high | unsigned int | - | - | - | 100.0 | - | dSOC vor 4 Tagen in % |

### RES_0XDDC9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAX_SYM_DAUER_1_WERT | s | high | unsigned long | - | - | - | - | - | Maximale Symmetrierdauer des zuletzt erfolgreichen Symmetriervorgangs |
| STAT_MAX_SYM_ZEIT_1_WERT | s | high | unsigned long | - | - | - | - | - | Zeitstempel zu 1 |
| STAT_MAX_SYM_DAUER_2_WERT | s | high | unsigned long | - | - | - | - | - | Maximale Symmetrierdauer des zuletzt erfolgreichen Symmetriervorgangs |
| STAT_MAX_SYM_ZEIT_2_WERT | s | high | unsigned long | - | - | - | - | - | Zeitstempel zu 2 |
| STAT_MAX_SYM_DAUER_3_WERT | s | high | unsigned long | - | - | - | - | - | Maximale Symmetrierdauer des zuletzt erfolgreichen Symmetriervorgangs |
| STAT_MAX_SYM_ZEIT_3_WERT | s | high | unsigned long | - | - | - | - | - | Zeitstempel zu 3 |
| STAT_MAX_SYM_DAUER_4_WERT | s | high | unsigned long | - | - | - | - | - | Maximale Symmetrierdauer des zuletzt erfolgreichen Symmetriervorgangs |
| STAT_MAX_SYM_ZEIT_4_WERT | s | high | unsigned long | - | - | - | - | - | Zeitstempel zu 4 |
| STAT_MAX_SYM_DAUER_5_WERT | s | high | unsigned long | - | - | - | - | - | Maximale Symmetrierdauer des zuletzt erfolgreichen Symmetriervorgangs |
| STAT_MAX_SYM_ZEIT_5_WERT | s | high | unsigned long | - | - | - | - | - | Zeitstempel zu 5 |

### RES_0XAD61

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MESSUNG_ERFOLGREICH | - | + | + | 0-n | high | unsigned char | - | TAB_ISOLATION_ERFOLGREICH | - | - | - | siehe TAB_ISOLATION_ERFOLGREICH |
| STAT_MESSUNG_ISOLATIONSFEHLER | - | + | + | 0-n | high | unsigned char | - | TAB_ISOLATION_ISOLATIONSFEHLER | - | - | - | siehe TAB_ISOLATION_ISOLATIONSFEHLER |

### TAB_ISOLATION_ERFOLGREICH

| WERT | TEXT |
| --- | --- |
| 0x00 | Isolationsmessung nicht erfolgreich |
| 0x01 | Isolationsmessung erfolgreich |
| 0x02 | Isolationsmessung läuft! |
| 0xFF | nicht definiert |

### TAB_ISOLATION_ISOLATIONSFEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Isolationswarnung liegt vor |
| 0x02 | Isolationsfehler liegt vor |
| 0xFF | nicht definiert |

### ARG_0X6500

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6501

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6502

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6503

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6504

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6506

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6507

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6508

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6509

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| SERIENNUMMER | HEX | - | unsigned long | - | - | - | - | - | - | - | Seriennummer |

### ARG_0X650B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X650C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X650D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X650E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X650F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0X6511

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_SYM_MODUS | - | - | - | - | - | 0=Normalbetrieb, 1=rein spannungsgesteuert |

### ARG_0X6512

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht senden, 1=senden |

### ARG_0X6514

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=keine Aktion, 1=Entprellzeiten hochsetzen |

### ARG_0X6518

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |

### ARG_0X6519

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=kein Standby, 1=Standby |

### ARG_0X651B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=geregelt/keine Anforderung, 1=Schütze schließen |

### TAB_SYM_MODUS

| WERT | TEXT |
| --- | --- |
| 0 | Normalmodus |
| 1 | Spannungsgesteuerter Modus |
| 2 | Bitbalancing (Auswertung Cell-SOCs) |
| 3 | Zeitgesteuertes Balancing |

### _FORTTEXTE

| _ORT | _ORTTEXT |
| --- | --- |
| 0x00 | System |
| 0x10 | CAN |
| 0x20 | Voltage of 12-cell module |
| 0x21 | Temperature of NTC_SW1 |
| 0x22 | Temperature of NTC_SW2 |
| 0x23 | Monitoring WUP signal of the SME |
| 0x24 | Reference voltage of the LTC6802-2 |
| 0x25 | Internal temperature of CSC |
| 0x26 | Voltage of the reference voltage divider |
| 0x27 | Voltage at WD |
| 0x28 | Configuration of HW version |
| 0x29 | Temperature of NTC_HW1 |
| 0x2A | 5V-Suppy |
| 0x30 | BSM |
| 0x31 | BSM: internal temp. |
| 0x32 | BSM: Temp.-Sens 1 |
| 0x33 | BSM: Temp.-Sens 2 |
| 0x34 | BSM: Monitor-Baustein |
| 0x40 | Versorgung |
| 0x50 | Balancing |
| 0xFF | unknown error |

### _FARTTEXTE

| _ART | _ARTTEXT |
| --- | --- |
| 0x00 | generic |
| 0x01 | Out of Range Low |
| 0x02 | Out of Range High |
| 0x03 | Bus Off |
| 0x04 | Alive invalid |
| 0x05 | Under-voltage threshold reached |
| 0x06 | ADC self-test 1 |
| 0x07 | ADC self-test 2 |
| 0x08 | PEC-Error |
| 0x09 | VUV-Error |
| 0x0A | VOV-Error |
| 0x0B | Thermal shutdown |
| 0x0C | Over-temperature |
| 0x0D | Open connection |
| 0x0E | ROM |
| 0x0F | RAM |
| 0x10 | Bad request |
| 0x11 | Balancing unit defect |
| 0x12 | Compatibility |
| 0x13 | NVM |
| 0x14 | Plausibility check module voltage |
| 0x15 | Plausibility check temperature |
| 0x16 | Time-out communication to Front End |
| 0x17 | brief Plausibilitaet RAM |
| 0x18 | brief RAM Adressierung |
| 0x19 | brief Parameter im NVMS |
| 0xFF | unknown kind of error |

### _FOPTTEXTE

| _OPT | _OPTTEXT |
| --- | --- |
| 0x00 | no option |
| 0x01 | fault is active |
| 0x02 | fault may be reset by SME-Request |
| 0x80 | fault is permanent, reset only by SME-request |
| 0xFF | invalid option |

### _BALANCIERTEXTE

| _BAL | _BALTEXT |
| --- | --- |
| 0x00 | inaktiv |
| 0x01 | aktiv, SME gibt Grenze vor |
| 0x02 | aktiv, SME gibt Bitmap vor |
| 0x03 | aktiv, keine Ansteuerung |
| 0xFF | unbekannte Balancierart |

### _FEHLERMASKENTEXTE

| _MASK | _MASKTEXT |
| --- | --- |
| 0x00000000 | no CSC error;  |
| 0x00000001 | cell overvoltage occurred;  |
| 0x00000002 | cell undervoltage occurred;  |
| 0x00000004 | temp. sensor 1 open to U_ref;  |
| 0x00000008 | temp. sensor 1 short to ground;  |
| 0x00000010 | temp. sensor 2 open to U_ref;  |
| 0x00000020 | temp. sensor 2 short to ground;  |
| 0x00000040 | module volt. out of range (high);  |
| 0x00000080 | module volt. out of range (low);  |
| 0x00000100 | open wire detected;  |
| 0x00000200 | balancing unit defective;  |
| 0x00000400 | CSC ECU-temperature too high;  |
| 0x00000800 | thermal shutdown occurred;  |
| 0x00001000 | invalid request received;  |
| 0x00002000 | lowest balancing voltage reached;  |
| 0x00004000 | Wake-up (WUP_ISO) defective;  |
| 0x00008000 | SPI defective, Alive-Counter defective;  |
| 0x00010000 | Invalid CAN-database;  |
| 0x00020000 | CAN-Bus off detected;  |
| 0x00040000 | ADC-Test 1 of LTC6802 failed;  |
| 0x00080000 | ADC-Test 2 of LTC6802 failed;  |
| 0x00100000 | Self-test of LTC6801 failed;  |
| 0x00200000 | RAM-Test failed;  |
| 0x00400000 | ROM-Test failed;  |
| 0x00800000 | T1 open wire detected;  |
| 0x01000000 | T2 open wire detected;  |
| 0x02000000 | Ucell plausibility error;  |
| 0x04000000 | T plausibility error;  |
| 0x08000000 | critical HW defect, shut-off required;  |
| 0xFFFFFFFF | unknown error |
