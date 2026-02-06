# icmv.prg

## General

|  |  |
| --- | --- |
| File | icmv.prg |
| Type | PRG |
| Jobs | 47 |
| Tables | 71 |
| Origin | BMW EF-632 Dirk Gebhardt |
| Revision | 3.101 |
| Author | ContiTemic CC-Elektronik GewenigerW, ContiTemic CCHSCE AndersM, |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Vertikaldynamikmanagement |  |  |
| ORIGIN | string | BMW EF-632 Dirk Gebhardt |  |  |
| REVISION | string | 3.101 |  |  |
| AUTHOR | string | ContiTemic CC-Elektronik GewenigerW, ContiTemic CCHSCE AndersM, |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.18 |  |  |
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

### _DUMMY

Zur Definition eines beliebigen Jobs Freie Auswahl eines Single Frames interner TEMIC-Job

| Name | Type | Description |
| --- | --- | --- |
| JOB_LAENGE | char | soll: Anzahl der Parameter + 1 kann frei gewählt werden (0...21) |
| SG_ADRESSE | char | soll: Adresse des Ziel-SG (ICMV: 0x39) |
| TESTER_ADRESSE | char | soll: Adresse des Testers (normal: 0xF4 Ethernet) |
| JOB_NR | char | soll: Job nach UDS |
| PARAMETER_1 | char | Freie Wahl |
| PARAMETER_2 | char | Freie Wahl |
| PARAMETER_3 | char | Freie Wahl |
| PARAMETER_4 | char | Freie Wahl |
| PARAMETER_5 | char | Freie Wahl |
| PARAMETER_6 | char | Freie Wahl |
| PARAMETER_7 | char | Freie Wahl |
| PARAMETER_8 | char | Freie Wahl |
| PARAMETER_9 | char | Freie Wahl |
| PARAMETER_10 | char | Freie Wahl |
| PARAMETER_11 | char | Freie Wahl |
| PARAMETER_12 | char | Freie Wahl |
| PARAMETER_13 | char | Freie Wahl |
| PARAMETER_14 | char | Freie Wahl |
| PARAMETER_15 | char | Freie Wahl |
| PARAMETER_16 | char | Freie Wahl |
| PARAMETER_17 | char | Freie Wahl |
| PARAMETER_18 | char | Freie Wahl |
| PARAMETER_19 | char | Freie Wahl |
| PARAMETER_20 | char | Freie Wahl |

### _DUMMY_LONG

Zur Definition eines beliebigen Jobs interner TEMIC-Job

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Job-Länge (SID + Daten) Byte 1              : SG-Adresse Byte 2              : Tester-Adresse Byte 3              : SID Byte 4..Byte x      : Daten |

### _ETST_PRODDATE_WRITE

Schreiben des Produktionsdatum UDS  : $2E   WriteDataByIdentifier UDS  : $4002 Sub-Parameter Produktionsdatum Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATUM | string | Produktionsdatum im Format tt.mm.yy |

### _ETST_PRODDATE_READ

Lesen des Produktionsdatum UDS  : $22   WriteDataByIdentifier UDS  : $F18B Sub-Parameter Produktionsdatum Modus: Default

_No arguments._

### _ETST_SERIALNR_WRITE

Schreiben der Seriennummer UDS  : $2E   WriteDataByIdentifier UDS  : $4001 Sub-Parameter Produktionsdatum Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SN | unsigned long | Seriennummer |

### _ETST_HWE_WRITE

Schreiben der Hardwareeinheit (Prozessklasse und Version) UDS  : $2E   WriteDataByIdentifier UDS  : $4004 Sub-Parameter HWE Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| HWTYP | string | Hardwarevariante: ARS oder VDC |
| HWVERSION | string | Hardwareversion: xx.yy.zz |

### _ETST_FP_WRITE

Schreiben des Fingerprint UDS  : $2E   WriteDataByIdentifier UDS  : $4005 Sub-Parameter Fingerprint Modus: Default

_No arguments._

### _ETST_SVK_SYSSUP_WRITE

Schreiben der SVK System Supplier UDS  : $2E   WriteDataByIdentifier UDS  : $4006 Sub-Parameter SVK System Supplier Modus: Default

_No arguments._

### _ETST_SVK_SYSSUP_WRITE_VDC1

Schreiben der SVK System Supplier UDS  : $2E   WriteDataByIdentifier UDS  : $4006 Sub-Parameter SVK System Supplier Modus: Default

_No arguments._

### _ETST_SVK_SYSSUP_WRITE_ONLY_BB_VDC1

Schreiben der SVK System Supplier (nur Bootloader) UDS  : $2E   WriteDataByIdentifier UDS  : $4006 Sub-Parameter SVK System Supplier Modus: Default

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
| 0x00 | erweiterter Betriebsmode 0 | ARS Ventile deaktiviert |
| 0x01 | erweiterter Betriebsmode 1 | ARS Ventile deaktiviert |
| 0x03 | erweiterter Betriebsmode 3 | ARS Ventile deaktiviert |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x023900 | Energiesparmode aktiv | 0 |
| 0x02FF39 | DM_TEST_APPL | 0 |
| 0x480B80 | KL30 Überspannung | 1 |
| 0x480B81 | KL30 Unterspannung | 1 |
| 0x480B82 | KL15N Überspannung | 1 |
| 0x480B83 | KL15N Unterspannung | 1 |
| 0x480B90 | Steuergerätefehler | 0 |
| 0x480B91 | logischer Flexray Transceiver Fehler: Power Sequenzing Reset durchgeführt | 0 |
| 0x480B92 | Fehlerspeicher defekt | 0 |
| 0x480B93 | Codierdatenfehler: falsches Fahrzeug (VIN) | 0 |
| 0x480B94 | Codierdatenfehler: Transaktion gescheitert | 0 |
| 0x480B95 | Codierdatenfehler: Signatur fehlerhaft | 0 |
| 0x480B96 | Steuergerät nicht codiert | 0 |
| 0x480B97 | Codierdatenfehler: ungültige Daten | 0 |
| 0x480B98 | Codierdatenfehler: falsche Variante | 0 |
| 0x480BA0 | Strommessung Proportionalventil-HA, unplausibel | 0 |
| 0x480BA1 | Strommessung Proportionalventil-HA, nicht kalibriert | 0 |
| 0x480BA2 | Strommessung Proportionalventil-VA, unplausibel | 0 |
| 0x480BA3 | Strommessung Proportionalventil-VA, nicht kalibriert | 0 |
| 0x480BA4 | Strommessung Richtungsventil, unplausibel | 0 |
| 0x480BA5 | Strommessung Richtungsventil, nicht kalibriert | 0 |
| 0x480BA6 | Strommessung Saugdrosselventil, unplausibel | 0 |
| 0x480BA7 | Strommessung Saugdrosselventil, nicht kalibriert | 0 |
| 0x480BA8 | Strommessung Fail-Safe-Ventil, unplausibel | 0 |
| 0x480BA9 | Strommessung Fail-Safe-Ventil, nicht kalibriert | 0 |
| 0x480BB0 | Lernen Drucksensor-VA, Nullpunkt konnte nicht gelernt werden | 0 |
| 0x480BB1 | Lernen Drucksensor-VA, Sensorparameter fehlerhaft | 0 |
| 0x480BB2 | Lernen Drucksensor-VA, nicht kalibriert | 0 |
| 0x480BB3 | Lernen Drucksensor-HA, Nullpunkt konnte nicht gelernt werden | 0 |
| 0x480BB4 | Lernen Drucksensor-HA, Sensorparameter fehlerhaft | 0 |
| 0x480BB5 | Lernen Drucksensor-HA, nicht kalibriert | 0 |
| 0x480BB6 | Offset Drucksensoren zu groß (bei stehendem Motor) | 0 |
| 0x480BC0 | Versorgung Drucksensor-VA, Überspannung | 0 |
| 0x480BC1 | Versorgung Drucksensor-VA, Unterspannung | 0 |
| 0x480BC2 | Versorgung Drucksensor-VA, Abriss Versorgung | 0 |
| 0x480BC3 | Versorgung Drucksensor-VA, Abriss Masse | 0 |
| 0x480BC4 | Versorgung Drucksensor HA, Überspannung | 0 |
| 0x480BC5 | Versorgung Drucksensor HA, Unterspannung | 0 |
| 0x480BC6 | Versorgung Drucksensor HA, Abriss Versorgung | 0 |
| 0x480BC7 | Versorgung Drucksensor HA, Abriss Masse | 0 |
| 0x480BC8 | Versorgung Schaltstellungssensor, Überspannung | 0 |
| 0x480BC9 | Versorgung Schaltstellungssensor, Unterspannung | 0 |
| 0x480BCA | Schaltstellungssensor, Signal zu niedrig | 0 |
| 0x480BCB | Schaltstellungssensor, Signal zu hoch | 0 |
| 0x480BCC | Oelstandssensor, Überspannung | 0 |
| 0x480BCD | Oelstandssensor, Unterspannung | 0 |
| 0x480BCE | Oelstandssensor, Abriss Versorgung | 0 |
| 0x480BCF | Oelstandssensor, Abriss Masse | 0 |
| 0x480BD0 | Sensorkabelbaum abgesteckt oder unterbrochen | 0 |
| 0x480BD1 | Ventilkabelbaum abgesteckt oder unterbrochen | 0 |
| 0x480BE0 | Sicherheitsventil, Kurzschluss KL30 | 0 |
| 0x480BE1 | Sicherheitsventil, Kurzschluss KL31 | 0 |
| 0x480BE2 | Sicherheitsventil, offene Leitung | 0 |
| 0x480BE3 | Sicherheitsventil, Kurzschluss Ventil | 0 |
| 0x480BE4 | Richtungsventil, Kurzschluss KL30 | 0 |
| 0x480BE5 | Richtungsventil, Kurzschluss KL31 | 0 |
| 0x480BE6 | Richtungsventil, offene Leitung | 0 |
| 0x480BE7 | Richtungsventil, Kurzschluss Ventil | 0 |
| 0x480BE8 | Saugdrosselventil, Kurzschluss KL30 | 0 |
| 0x480BE9 | Saugdrosselventil, Kurzschluss KL31 | 0 |
| 0x480BEA | Saugdrosselventil, offene Leitung | 0 |
| 0x480BEB | Saugdrosselventil, Kurzschluss Ventil | 0 |
| 0x480BEC | Proportionalventil-VA, Kurzschluss KL30 | 0 |
| 0x480BED | Proportionalventil-VA, Kurzschluss KL31 | 0 |
| 0x480BEE | Proportionalventil-VA, offene Leitung | 0 |
| 0x480BEF | Proportionalventil-VA, Kurzschluss Ventil | 0 |
| 0x480BF0 | Proportionalventil-HA, Kurzschluss KL30 | 0 |
| 0x480BF1 | Proportionalventil-HA, Kurzschluss KL31 | 0 |
| 0x480BF2 | Proportionalventil-HA, offene Leitung | 0 |
| 0x480BF3 | Proportionalventil-HA, Kurzschluss Ventil | 0 |
| 0x480BF4 | Sicherheitsventil, Fehler bei Onlineüberwachung | 0 |
| 0x480BF5 | Richtungsventil, Fehler bei Onlineüberwachung | 0 |
| 0x480BF6 | Saugdrosselventil, Fehler bei Onlineüberwachung | 0 |
| 0x480BF7 | Proportionalventil-VA, Fehler bei Onlineüberwachung | 0 |
| 0x480BF8 | Proportionalventil-HA, Fehler bei Onlineüberwachung | 0 |
| 0x480C00 | Ölstand zu niedrig oder kein Signal (Motor steht) | 0 |
| 0x480C01 | Ölstand zu niedrig oder kein Signal (Motor läuft,Fzg. steht) | 0 |
| 0x480C02 | Ölstand zu niedrig oder kein Signal (Fzg. fährt) | 0 |
| 0x480C0A | Status Richtungsventil unplausibel | 0 |
| 0x480C0B | Druckkonsistenz Gesamtsystem. Druck zu niedrig | 0 |
| 0x480C10 | Druckkonsistenz VA, Druck zu niedrig | 0 |
| 0x480C11 | Druckkonsistenz VA, Druck zu hoch | 0 |
| 0x480C12 | Druckkonsistenz HA, Druck zu niedrig | 0 |
| 0x480C13 | Druckkonsistenz HA, Druck zu hoch | 0 |
| 0x480C14 | Drucksensor VA Signal zu niedrig (kein Hydraulikfehler) | 0 |
| 0x480C15 | Drucksensor VA Signal zu hoch (kein Hydraulikfehler) | 0 |
| 0x480C16 | Drucksensor HA Signal zu niedrig (kein Hydraulikfehler) | 0 |
| 0x480C17 | Drucksensor HA Signal zu hoch (kein Hydraulikfehler) | 0 |
| 0x480C20 | Lenkwinkelgradient zu hoch | 1 |
| 0x480C22 | Fehleramplitude des Querbeschleunigungssignals zu hoch | 1 |
| 0x480C30 | PreDrv: FS- und VA-Ventil unbestromt zu oder Sensor pVA defekt | 0 |
| 0x480C31 | PreDrv: FS- und HA-Ventil unbestromt zu | 0 |
| 0x480C32 | PreDrv: Volumenstrom zu gering (oder VA- und HA-Ventil bestromt offen) | 0 |
| 0x480C33 | PreDrv: FS-Ventil unbestromt zu | 0 |
| 0x480C34 | PreDrv: FS-Ventil unbestromt zu und VA-Ventil bestromt offen | 0 |
| 0x480C35 | PreDrv: VA-Ventil bestromt offen | 0 |
| 0x480C36 | PreDrv: FS-, HA-, VA- oder SD-Ventil, Strom zu hoch (kein Hydraulikfehler, SG-Fehler) | 0 |
| 0x480C37 | PreDrv: Umlaufdruck temporär zu hoch wegen Tieftemperatur | 0 |
| 0x480C38 | PreDrv: Umlaufdruck dauerhaft zu hoch (mindestens 15min) | 0 |
| 0x480C39 | Motor während Fahrt gestoppt (DME/DDE-Problem) | 0 |
| 0x480C3A | SG-Zuschalten während Fahrt (Versorgungsunterbrechung oder SG-Reset) | 0 |
| 0x480C3B | PreDrv: Drucksensoren vertauscht | 0 |
| 0x480C3C | PreDrv: Proportionalventile vertauscht | 0 |
| 0x480C3D | PreDrv: Saugdrosselventil klemmt in Stellung gedrosselt | 0 |
| 0x480C3E | PreDrv: Saugdrosselventil klemmt in Stellung ungedrosselt | 0 |
| 0x480C40 | PreDrv: Aufheizphase wegen Tieftemperatur | 0 |
| 0x480C41 | PreDrv: Umlaufdruck temporär zu hoch | 0 |
| 0x480C42 | PreDrv: VA-Ventil klemmt vor dem Ventiltest | 0 |
| 0x480C43 | PreDrv: VA-Ventil klemmt nach dem Ventiltest | 0 |
| 0x480C50 | Eigendiagnose: kein Start wegen externer Ursache | 1 |
| 0x480C51 | Eigendiagnose: Abbruch durch Tester oder LL-Schicht | 1 |
| 0x480C53 | Eigendiagnose: Abbruch wegen externer Ursache | 1 |
| 0x480C5F | Eigendiagnose: Sammelfehler | 0 |
| 0x480CD0 | Inbetriebnahme: Staudruck an Vorderachse oder Hinterachse zu hoch (Dynamiktest VA) | 0 |
| 0x480CD1 | Inbetriebnahme: VA-Ventil klemmt offen oder Drucksensor VA defekt (Druck kleiner 20 bar bei Dynamiktest VA) | 0 |
| 0x480CD2 | Inbetriebnahme: VA-Ventil klemmt oder Drucksensor VA defekt (Druck kleiner 70 bar bei Dynamiktest VA) | 0 |
| 0x480CD3 | Inbetriebnahme: Solldruck Vorderachse nicht erreicht (Druck größer 70 bar bei Dynamiktest VA) | 0 |
| 0x480CD4 | Inbetriebnahme: Druckaufbau Vorderachse zu schnell (Dynamiktest VA) | 0 |
| 0x480CD5 | Inbetriebnahme: Druckaufbau Vorderachse zu langsam (Dynamiktest VA) | 0 |
| 0x480CD6 | Inbetriebnahme: Solldruck Vorderachse erreicht, Toleranzband unterschritten (Dynamiktest VA) | 0 |
| 0x480CD7 | Inbetriebnahme: Solldruck Vorderachse erreicht, Toleranzband überschritten (Dynamiktest VA) | 0 |
| 0x480CD8 | Inbetriebnahme: Enddruck an Vorderachse zu hoch (Dynamiktest VA) | 0 |
| 0x480CE0 | Inbetriebnahme: Staudruck an Vorderachse oder Hinterachse zu hoch (Dynamiktest HA) | 0 |
| 0x480CE1 | Inbetriebnahme: HA-Ventil klemmt (Druck kleiner 20 bar bei Dynamiktest HA) | 0 |
| 0x480CE2 | Inbetriebnahme: HA-Ventil klemmt (Druck kleiner 70 bar bei Dynamiktest HA) | 0 |
| 0x480CE3 | Inbetriebnahme: Solldruck Hinterachse nicht erreicht (Druck größer 70 bar bei Dynamiktest HA) | 0 |
| 0x480CE4 | Inbetriebnahme: Druckaufbau Hinterachse zu schnell (Dynamiktest HA) | 0 |
| 0x480CE5 | Inbetriebnahme: Druckaufbau Hinterachse zu langsam (Dynamiktest HA) | 0 |
| 0x480CE6 | Inbetriebnahme: Solldruck Hinterachse erreicht, Toleranzband unterschritten (Dynamiktest HA) | 0 |
| 0x480CE7 | Inbetriebnahme: Solldruck Hinterachse erreicht, Toleranzband überschritten (Dynamiktest HA) | 0 |
| 0x480CE8 | Inbetriebnahme: Enddruck an Hinterachse zu hoch (Dynamiktest HA) | 0 |
| 0x480CE9 | Inbetriebnahme: Druckdifferenz Vorderachse zu Hinterachse zu groß (Differenz größer 7 bar bei Dynamiktest HA) | 0 |
| 0x480CEA | Inbetriebnahme: dauerhaft Luft im System (Dynamiktest HA), Maßnahme: Inbetriebnahme nach 10min wiederholen | 0 |
| 0x480CEB | Inbetriebnahme: FS-Ventil bestromt offen oder kein Volumenstrom (Druck kleiner 20bar bei Dynamiktest VA und HA) | 0 |
| 0x480CEC | Inbetriebnahme: FS-Ventil bestromt offen oder kaum Volumenstrom (Druck kleiner 70bar bei Dynamiktest VA und HA) | 0 |
| 0x480CED | Inbetriebnahme: Solldruck nicht erreicht (Druck größer 70bar bei Dynamiktest VA und HA) | 0 |
| 0x480CEE | Inbetriebnahme: Druckaufbau zu langsam (Dynamiktest VA und HA) | 0 |
| 0x480CF0 | Inbetriebnahme: Strom/Druck Korrelation an Vorderachse zu niedrig | 0 |
| 0x480CF1 | Inbetriebnahme: Strom/Druck Korrelation an Vorderachse zu hoch | 0 |
| 0x480CF2 | Inbetriebnahme: Strom/Druck Korrelation an Hinterachse zu niedrig | 0 |
| 0x480CF3 | Inbetriebnahme: Strom/Druck Korrelation an Hinterachse zu hoch | 0 |
| 0x480CF4 | Inbetriebnahme: Sicherheitsdruck überschritten (Druck größer 180 bar bei Strom/Druck Test) | 0 |
| 0x480CF5 | Inbetriebnahme: Druckminderung bei Bestromung SD-Ventil zu gering (SD-Ventil klemmt) | 0 |
| 0x480CFA | Inbetriebnahme: kein Start wegen externer Ursache | 0 |
| 0x480CFB | Inbetriebnahme: Abbruch durch Tester oder LL-Schicht | 0 |
| 0x480CFC | Inbetriebnahme: Abbruch wegen externer Ursache | 0 |
| 0x480D00 | Stromaufnahme RK-L zu hoch | 0 |
| 0x480D01 | Stromaufnahme RK-L zu niedrig | 0 |
| 0x480D02 | Stromaufnahme RK-R zu hoch | 0 |
| 0x480D03 | Stromaufnahme RK-R zu niedrig | 0 |
| 0x480D04 | Höhenstand VL, unplausibel | 0 |
| 0x480D05 | Höhenstand VR, unplausibel | 0 |
| 0x480D06 | Höhenstand HL, unplausibel | 0 |
| 0x480D07 | Höhenstand HR, unplausibel | 0 |
| 0x480D08 | Radbeschleunigung VL unplausibel | 0 |
| 0x480D09 | Radbeschleunigung VR unplausibel | 0 |
| 0x480D0A | Radbeschleunigung HL unplausibel | 0 |
| 0x480D0B | Radbeschleunigung HR unplausibel | 0 |
| 0x480D10 | Versorgung Radknoten links, Kurzschluss KL30 | 0 |
| 0x480D11 | Versorgung Radknoten links, Kurzschluss KL31 | 0 |
| 0x480D12 | Versorgung Radknoten rechts, Kurzschluss KL30 | 0 |
| 0x480D13 | Versorgung Radknoten rechts, Kurzschluss KL31 | 0 |
| 0xD7441F | FlexRay physical bus error | 0 |
| 0xD74420 | FlexRay controller error | 0 |
| 0xD74BFF | DM_TEST_COM | 1 |
| 0xD75400 | Botschaft (55.3.4, Geschwindigkeit Fahrzeug): nicht empfangen | 1 |
| 0xD75401 | Botschaft (55.3.4, Geschwindigkeit Fahrzeug): ausgefallen | 1 |
| 0xD75402 | Botschaft (55.3.4, Geschwindigkeit Fahrzeug): Alive Fehler | 1 |
| 0xD75403 | Botschaft (55.3.4, Geschwindigkeit Fahrzeug): CRC Fehler | 1 |
| 0xD75410 | Botschaft (40.1.4, Drehmoment Kurbelwelle 1): nicht empfangen | 1 |
| 0xD75411 | Botschaft (40.1.4, Drehmoment Kurbelwelle 1): ausgefallen | 1 |
| 0xD75412 | Botschaft (40.1.4, Drehmoment Kurbelwelle 1): Alive Fehler | 1 |
| 0xD75413 | Botschaft (40.1.4, Drehmoment Kurbelwelle 1): CRC Fehler | 1 |
| 0xD75420 | Botschaft (39.1.2, Soll Anteil Steuerung Lenkung):  nicht empfangen | 1 |
| 0xD75421 | Botschaft (39.1.2, Soll Anteil Steuerung Lenkung): ausgefallen | 1 |
| 0xD75422 | Botschaft (39.1.2, Soll Anteil Steuerung Lenkung): Alive Fehler | 1 |
| 0xD75423 | Botschaft (39.1.2, Soll Anteil Steuerung Lenkung): CRC Fehler | 1 |
| 0xD75430 | Botschaft (55.0.2, Querbeschleunigung Schwerpunkt): nicht empfangen | 1 |
| 0xD75431 | Botschaft (55.0.2, Querbeschleunigung Schwerpunkt): ausgefallen | 1 |
| 0xD75432 | Botschaft (55.0.2, Querbeschleunigung Schwerpunkt): Alive Fehler | 1 |
| 0xD75433 | Botschaft (55.0.2, Querbeschleunigung Schwerpunkt): CRC Fehler | 1 |
| 0xD75440 | Botschaft (272.4.8, Konfiguration Schalter Fahrdynamik): nicht empfangen | 1 |
| 0xD75441 | Botschaft (272.4.8, Konfiguration Schalter Fahrdynamik): ausgefallen | 1 |
| 0xD75442 | Botschaft (272.4.8, Konfiguration Schalter Fahrdynamik): Alive Fehler | 1 |
| 0xD75443 | Botschaft (272.4.8, Konfiguration Schalter Fahrdynamik): CRC Fehler | 1 |
| 0xD75450 | Botschaft (116.0.2, Klemmen): nicht empfangen | 1 |
| 0xD75451 | Botschaft (116.0.2, Klemmen): ausgefallen | 1 |
| 0xD75452 | Botschaft (116.0.2, Klemmen): Alive Fehler | 1 |
| 0xD75453 | Botschaft (116.0.2, Klemmen): CRC Fehler | 1 |
| 0xD75460 | Botschaft (252.1.4, Außentemperatur): nicht empfangen | 1 |
| 0xD75461 | Botschaft (252.1.4, Außentemperatur): ausgefallen | 1 |
| 0xD75470 | Botschaft (230.0.2, Daten Antriebsstrang 2): nicht empfangen | 1 |
| 0xD75471 | Botschaft (230.0.2, Daten Antriebsstrang 2): ausgefallen | 1 |
| 0xD75472 | Botschaft (230.0.2, Daten Antriebsstrang 2): Alive Fehler | 1 |
| 0xD75473 | Botschaft (230.0.2, Daten Antriebsstrang 2): CRC Fehler | 1 |
| 0xD75480 | Botschaft (18.0.1, Daten Roll-Over Sensor): nicht empfangen | 1 |
| 0xD75481 | Botschaft (18.0.1, Daten Roll-Over Sensor): ausgefallen | 1 |
| 0xD75482 | Botschaft (18.0.1, Daten Roll-Over Sensor): Alive Fehler | 1 |
| 0xD75483 | Botschaft (18.0.1, Daten Roll-Over Sensor): CRC Fehler | 1 |
| 0xD75490 | Botschaft (276.4.8, Kilometerstand): nicht empfangen | 1 |
| 0xD75491 | Botschaft (276.4.8, Kilometerstand): ausgefallen | 1 |
| 0xD754A0 | Botschaft (39.1.2, Anforderung Verteilung Wankmoment): nicht empfangen | 1 |
| 0xD754A1 | Botschaft (39.1.2, Anforderung Verteilung Wankmoment): ausgefallen | 1 |
| 0xD754A2 | Botschaft (39.1.2, Anforderung Verteilung Wankmoment): Alive Fehler | 1 |
| 0xD754A3 | Botschaft (39.1.2, Anforderung Verteilung Wankmoment): CRC Fehler | 1 |
| 0xD754B0 | Botschaft (109.0.2, Eigenlenkverhalten Fahrzeug): nicht empfangen | 1 |
| 0xD754B1 | Botschaft (109.0.2, Eigenlenkverhalten Fahrzeug): ausgefallen | 1 |
| 0xD754B2 | Botschaft (109.0.2, Eigenlenkverhalten Fahrzeug): Alive Fehler | 1 |
| 0xD754B3 | Botschaft (109.0.2, Eigenlenkverhalten Fahrzeug): CRC Fehler | 1 |
| 0xD754C0 | Botschaft (3.0.1, Status Radknoten VL): nicht empfangen | 1 |
| 0xD754C1 | Botschaft (3.0.1, Status Radknoten VL): ausgefallen | 1 |
| 0xD754C2 | Botschaft (3.0.1, Status Radknoten VL): Alive Fehler | 1 |
| 0xD754C3 | Botschaft (3.0.1, Status Radknoten VL): CRC Fehler | 1 |
| 0xD754D0 | Botschaft (4.0.1, Status Radknoten VR): nicht empfangen | 1 |
| 0xD754D1 | Botschaft (4.0.1, Status Radknoten VR): ausgefallen | 1 |
| 0xD754D2 | Botschaft (4.0.1, Status Radknoten VR): Alive Fehler | 1 |
| 0xD754D3 | Botschaft (4.0.1, Status Radknoten VR): CRC Fehler | 1 |
| 0xD754E0 | Botschaft (1.0.1, Status Radknoten HL): nicht empfangen | 1 |
| 0xD754E1 | Botschaft (1.0.1, Status Radknoten HL): ausgefallen | 1 |
| 0xD754E2 | Botschaft (1.0.1, Status Radknoten HL): Alive Fehler | 1 |
| 0xD754E3 | Botschaft (1.0.1, Status Radknoten HL): CRC Fehler | 1 |
| 0xD754F0 | Botschaft (2.0.1, Status Radknoten HR): nicht empfangen | 1 |
| 0xD754F1 | Botschaft (2.0.1, Status Radknoten HR): ausgefallen | 1 |
| 0xD754F2 | Botschaft (2.0.1, Status Radknoten HR): Alive Fehler | 1 |
| 0xD754F3 | Botschaft (2.0.1, Status Radknoten HR): CRC Fehler | 1 |
| 0xD75500 | Botschaft (7.0.1, Höhenstand Fahrzeug): nicht empfangen | 1 |
| 0xD75501 | Botschaft (7.0.1, Höhenstand Fahrzeug): ausgefallen | 1 |
| 0xD75502 | Botschaft (7.0.1, Höhenstand Fahrzeug): Alive Fehler | 1 |
| 0xD75503 | Botschaft (7.0.1, Höhenstand Fahrzeug): CRC Fehler | 1 |
| 0xD75510 | Botschaft (55.0.2, Längsbeschleunigung Schwerpunkt): nicht empfangen | 1 |
| 0xD75511 | Botschaft (55.0.2, Längsbeschleunigung Schwerpunkt): ausgefallen | 1 |
| 0xD75512 | Botschaft (55.0.2, Längsbeschleunigung Schwerpunkt): Alive Fehler | 1 |
| 0xD75513 | Botschaft (55.0.2, Längsbeschleunigung Schwerpunkt): CRC Fehler | 1 |
| 0xD75520 | Botschaft (47.1.2, Status Stabilisierung DSC): nicht empfangen | 1 |
| 0xD75521 | Botschaft (47.1.2, Status Stabilisierung DSC): ausgefallen | 1 |
| 0xD75522 | Botschaft (47.1.2, Status Stabilisierung DSC): Alive Fehler | 1 |
| 0xD75523 | Botschaft (47.1.2, Status Stabilisierung DSC): CRC Fehler | 1 |
| 0xD75530 | Botschaft (43.3.4, Ist Bremsmoment Summe): nicht empfangen | 1 |
| 0xD75531 | Botschaft (43.3.4, Ist Bremsmoment Summe): ausgefallen | 1 |
| 0xD75532 | Botschaft (43.3.4, Ist Bremsmoment Summe): Alive Fehler | 1 |
| 0xD75533 | Botschaft (43.3.4, Ist Bremsmoment Summe): CRC Fehler | 1 |
| 0xD75540 | Botschaft (40.3.4, Radmoment Antrieb 5): nicht empfangen | 1 |
| 0xD75541 | Botschaft (40.3.4, Radmoment Antrieb 5): ausgefallen | 1 |
| 0xD75542 | Botschaft (40.3.4, Radmoment Antrieb 5): Alive Fehler | 1 |
| 0xD75543 | Botschaft (40.3.4, Radmoment Antrieb 5): CRC Fehler | 1 |
| 0xD75550 | Botschaft (259.3.4, Status Niveauregulierung Fahrzeug): nicht empfangen | 1 |
| 0xD75551 | Botschaft (259.3.4, Status Niveauregulierung Fahrzeug): ausgefallen | 1 |
| 0xD75552 | Botschaft (259.3.4, Status Niveauregulierung Fahrzeug): Alive Fehler | 1 |
| 0xD75553 | Botschaft (259.3.4, Status Niveauregulierung Fahrzeug): CRC Fehler | 1 |
| 0xD75560 | Botschaft (56.0.2, Giergeschwindigkeit Fahrzeug): nicht empfangen | 1 |
| 0xD75561 | Botschaft (56.0.2, Giergeschwindigkeit Fahrzeug): ausgefallen | 1 |
| 0xD75562 | Botschaft (56.0.2, Giergeschwindigkeit Fahrzeug): Alive Fehler | 1 |
| 0xD75563 | Botschaft (56.0.2, Giergeschwindigkeit Fahrzeug): CRC Fehler | 1 |
| 0xD75570 | Botschaft (63.1.4, Soll Bremsmoment Summe Koordiniert): nicht empfangen | 1 |
| 0xD75571 | Botschaft (63.1.4, Soll Bremsmoment Summe Koordiniert): ausgefallen | 1 |
| 0xD75572 | Botschaft (63.1.4, Soll Bremsmoment Summe Koordiniert): Alive Fehler | 1 |
| 0xD75573 | Botschaft (63.1.4, Soll Bremsmoment Summe Koordiniert): CRC Fehler | 1 |
| 0xD75580 | Botschaft (46.0.1, Ist Drehzahl Rad): nicht empfangen | 1 |
| 0xD75581 | Botschaft (46.0.1, Ist Drehzahl Rad): ausgefallen | 1 |
| 0xD75582 | Botschaft (46.0.1, Ist Drehzahl Rad): Alive Fehler | 1 |
| 0xD75583 | Botschaft (46.0.1, Ist Drehzahl Rad): CRC Fehler | 1 |
| 0xD75590 | Botschaft (41.3.4, Radmoment Antrieb 1): nicht empfangen | 1 |
| 0xD75591 | Botschaft (41.3.4, Radmoment Antrieb 1): ausgefallen | 1 |
| 0xD75592 | Botschaft (41.3.4, Radmoment Antrieb 1): Alive Fehler | 1 |
| 0xD75593 | Botschaft (41.3.4, Radmoment Antrieb 1): CRC Fehler | 1 |
| 0xD76C00 | Signal (55.3.4, Geschwindigkeit_Fahrzeug_Schwerpunkt): Wert ungültig | 1 |
| 0xD76C01 | Signal (55.3.4, Geschwindigkeit_Fahrzeug_Schwerpunkt): Qualifier ungültig | 1 |
| 0xD76C02 | Signal (55.3.4, Geschwindigkeit_Fahrzeug_Schwerpunkt): Qualifier fehlerhaft | 1 |
| 0xD76C03 | Signal (55.3.4, Fahrzustand_Fahrzeug): Wert ungültig | 1 |
| 0xD76C10 | Signal (40.1.4, Ist_Drehzahl_Motor_Kurbelwelle): Wert ungültig | 1 |
| 0xD76C11 | Signal (40.1.4, Ist_Drehzahl_Motor_Kurbelwelle): Qualifier ungültig | 1 |
| 0xD76C12 | Signal (40.1.4, Ist_Drehzahl_Motor_Kurbelwelle): Qualifier fehlerhaft | 1 |
| 0xD76C20 | Signal (39.1.2, Soll_Lenkwinkel_HA_Steuerung_Teilwert): Wert ungültig | 1 |
| 0xD76C21 | Signal (39.1.2, Soll_Lenkwinkel_HA_Steuerung_Teilwert): Qualifier ungültig | 1 |
| 0xD76C22 | Signal (39.1.2, Soll_Lenkwinkel_HA_Steuerung_Teilwert): Qualifier fehlerhaft | 1 |
| 0xD76C30 | Signal (39.1.2, Soll_Lenkwinkel_VA_Steuerung_Teilwert): Wert ungültig | 1 |
| 0xD76C31 | Signal (39.1.2, Soll_Lenkwinkel_VA_Steuerung_Teilwert): Qualifier ungültig | 1 |
| 0xD76C32 | Signal (39.1.2, Soll_Lenkwinkel_VA_Steuerung_Teilwert): Qualifier fehlerhaft | 1 |
| 0xD76C40 | Signal (55.0.2, Querbeschleunigung_Schwerpunkt): Wert ungültig | 1 |
| 0xD76C41 | Signal (55.0.2, Querbeschleunigung_Schwerpunkt): Qualifier ungültig | 1 |
| 0xD76C42 | Signal (55.0.2, Querbeschleunigung_Schwerpunkt): Qualifier fehlerhaft | 1 |
| 0xD76C43 | Signal (55.0.2, Querbeschleunigung_Schwerpunkt): Fehleramplitude ungültig | 1 |
| 0xD76C50 | Signal (272.4.8, Anforderung_Konfiguration_Schalter_Fahrdynamik): Wert ungültig | 1 |
| 0xD76C60 | Signal (116.0.2, Status_Klemme): Wert ungültig | 1 |
| 0xD76C61 | Signal (116.0.2, Status_Klemme_15n): Wert ungültig | 1 |
| 0xD76C70 | Signal (252.1.4, Temperatur_Außen): Wert ungültig | 1 |
| 0xD76C80 | Signal (230.0.2, Temperatur_Motor_Antrieb): Wert ungültig | 1 |
| 0xD76C90 | Signal (18.0.1, Wankgeschwindigkeit_Fahrzeug_Rohdaten): Wert ungültig | 1 |
| 0xD76C91 | Signal (18.0.1, Wankgeschwindigkeit_Fahrzeug_Rohdaten): Qualifier ungültig | 1 |
| 0xD76C92 | Signal (18.0.1, Wankgeschwindigkeit_Fahrzeug_Rohdaten): Qualifier fehlerhaft | 1 |
| 0xD76CA0 | Signal (276.4.8, Wegstrecke_Kilometer): Wert ungültig | 1 |
| 0xD76CB0 | Signal (39.1.2, Anforderung_Änderung_Verteilung_Wankmoment): Wert ungültig | 1 |
| 0xD76CB1 | Signal (39.1.2, Anforderung_Änderung_Verteilung_Wankmoment): Qualifier ungültig | 1 |
| 0xD76CB2 | Signal (39.1.2, Anforderung_Änderung_Verteilung_Wankmoment): Qualifier fehlerhaft | 1 |
| 0xD76CC0 | Signal (109.0.2, Charakteristische_Geschwindigkeit): Wert ungültig | 1 |
| 0xD76CC1 | Signal (109.0.2, Charakteristische_Geschwindigkeit): Qualifier ungültig | 1 |
| 0xD76CC2 | Signal (109.0.2, Charakteristische_Geschwindigkeit): Qualifier fehlerhaft | 1 |
| 0xD76CC3 | Signal (109.0.2, Charakteristische_Geschwindigkeit): Fehleramplitude ungültig | 1 |
| 0xD76CD0 | Signal (3.0.1, Beschleunigung_Rad_VL): Wert ungültig | 1 |
| 0xD76CD1 | Signal (3.0.1, Beschleunigung_Rad_VL): Qualifier ungültig | 1 |
| 0xD76CD2 | Signal (3.0.1, Beschleunigung_Rad_VL): Qualifier fehlerhaft | 1 |
| 0xD76CE0 | Signal (4.0.1, Beschleunigung_Rad_VR): Wert ungültig | 1 |
| 0xD76CE1 | Signal (4.0.1, Beschleunigung_Rad_VR): Qualifier ungültig | 1 |
| 0xD76CE2 | Signal (4.0.1, Beschleunigung_Rad_VR): Qualifier fehlerhaft | 1 |
| 0xD76CF0 | Signal (1.0.1, Beschleunigung_Rad_HL): Wert ungültig | 1 |
| 0xD76CF1 | Signal (1.0.1, Beschleunigung_Rad_HL): Qualifier ungültig | 1 |
| 0xD76CF2 | Signal (1.0.1, Beschleunigung_Rad_HL): Qualifier fehlerhaft | 1 |
| 0xD76D00 | Signal (2.0.1, Beschleunigung_Rad_HR): Wert ungültig | 1 |
| 0xD76D01 | Signal (2.0.1, Beschleunigung_Rad_HR): Qualifier ungültig | 1 |
| 0xD76D02 | Signal (2.0.1, Beschleunigung_Rad_HR): Qualifier fehlerhaft | 1 |
| 0xD76D10 | Signal (7.0.1, Höhenstand_Fahrzeug_VL): Wert ungültig | 1 |
| 0xD76D11 | Signal (7.0.1, Höhenstand_Fahrzeug_VL): Qualifier ungültig | 1 |
| 0xD76D12 | Signal (7.0.1, Höhenstand_Fahrzeug_VL): Qualifier fehlerhaft | 1 |
| 0xD76D13 | Signal (7.0.1, Höhenstand_Fahrzeug_VR): Wert ungültig | 1 |
| 0xD76D14 | Signal (7.0.1, Höhenstand_Fahrzeug_VR): Qualifier ungültig | 1 |
| 0xD76D15 | Signal (7.0.1, Höhenstand_Fahrzeug_VR): Qualifier fehlerhaft | 1 |
| 0xD76D16 | Signal (7.0.1, Höhenstand_Fahrzeug_HL): Wert ungültig | 1 |
| 0xD76D17 | Signal (7.0.1, Höhenstand_Fahrzeug_HL): Qualifier ungültig | 1 |
| 0xD76D18 | Signal (7.0.1, Höhenstand_Fahrzeug_HL): Qualifier fehlerhaft | 1 |
| 0xD76D19 | Signal (7.0.1, Höhenstand_Fahrzeug_HR): Wert ungültig | 1 |
| 0xD76D1A | Signal (7.0.1, Höhenstand_Fahrzeug_HR): Qualifier ungültig | 1 |
| 0xD76D1B | Signal (7.0.1, Höhenstand_Fahrzeug_HR): Qualifier fehlerhaft | 1 |
| 0xD76D30 | Signal (55.0.2, Längsbeschleunigung Schwerpunkt): Wert ungültig | 1 |
| 0xD76D31 | Signal (55.0.2, Längsbeschleunigung Schwerpunkt): Qualifier ungültig | 1 |
| 0xD76D32 | Signal (55.0.2, Längsbeschleunigung Schwerpunkt): Qualifier fehlerhaft | 1 |
| 0xD76D40 | Signal (3.0.1, Funktion_Radknoten_VL): Qualifier ungültig | 1 |
| 0xD76D41 | Signal (3.0.1, Funktion_Radknoten_VL): Qualifier fehlerhaft | 1 |
| 0xD76D50 | Signal (4.0.1, Funktion_Radknoten_VR): Qualifier ungültig | 1 |
| 0xD76D51 | Signal (4.0.1, Funktion_Radknoten_VR): Qualifier fehlerhaft | 1 |
| 0xD76D60 | Signal (1.0.1, Funktion_Radknoten_HL): Qualifier ungültig | 1 |
| 0xD76D61 | Signal (1.0.1, Funktion_Radknoten_HL): Qualifier fehlerhaft | 1 |
| 0xD76D70 | Signal (2.0.1, Funktion_Radknoten_HR): Qualifier ungültig | 1 |
| 0xD76D71 | Signal (2.0.1, Funktion_Radknoten_HR): Qualifier fehlerhaft | 1 |
| 0xD76D80 | Signal (47.1.2, Funktion_FDR): Qualifier ungültig | 1 |
| 0xD76D81 | Signal (47.1.2, Funktion_FDR): Qualifier fehlerhaft | 1 |
| 0xD76D90 | Signal (47.1.2, Funktion_ABS): Qualifier ungültig | 1 |
| 0xD76D91 | Signal (47.1.2, Funktion_ABS): Qualifier fehlerhaft | 1 |
| 0xD76DA0 | Signal (47.1.2, Funktion_ASC): Qualifier ungültig | 1 |
| 0xD76DA1 | Signal (47.1.2, Funktion_ASC): Qualifier fehlerhaft | 1 |
| 0xD76DB0 | Signal (43.3.4, Ist_Bremsmoment_Summe): Wert ungültig | 1 |
| 0xD76DB1 | Signal (43.3.4, Ist_Bremsmoment_Summe): Qualifier ungültig | 1 |
| 0xD76DB2 | Signal (43.3.4, Ist_Bremsmoment_Summe): Qualifier fehlerhaft | 1 |
| 0xD76DC0 | Signal (40.3.4, Soll_Radmoment_Antriebsstrang_Summe_Koordiniert): Wert ungültig | 1 |
| 0xD76DD0 | Signal (259.3.4, Funktion_LCS): Qualifier ungültig | 1 |
| 0xD76DD1 | Signal (259.3.4, Funktion_LCS): Qualifier fehlerhaft | 1 |
| 0xD76DE0 | Signal (56.0.2, Giergeschwindigkeit_Fahrzeug): Wert ungültig | 1 |
| 0xD76DE1 | Signal (56.0.2, Giergeschwindigkeit_Fahrzeug): Qualifier ungültig | 1 |
| 0xD76DE2 | Signal (56.0.2, Giergeschwindigkeit_Fahrzeug): Qualifier fehlerhaft | 1 |
| 0xD76DF0 | Signal (63.1.4, Soll_Bremsmoment_Summe_Koordiniert): Wert ungültig | 1 |
| 0xD76DF2 | Signal (63.1.4, Soll_Bremsmoment_Summe_Koordiniert): Qualifier fehlerhaft | 1 |
| 0xD76E00 | Signal (230.0.2, Status_Antrieb_Fahrzeug): Wert ungültig | 1 |
| 0xD76E10 | Signal (230.0.2, Status_Gangwahl_Antrieb): Wert ungültig | 1 |
| 0xD76E20 | Signal (46.0.1, Ist_Drehzahl_Rad_HL): Wert ungültig | 1 |
| 0xD76E21 | Signal (46.0.1, Ist_Drehzahl_Rad_HL): Qualifier ungültig | 1 |
| 0xD76E22 | Signal (46.0.1, Ist_Drehzahl_Rad_HL): Qualifier fehlerhaft | 1 |
| 0xD76E30 | Signal (46.0.1, Ist_Drehzahl_Rad_HR): Wert ungültig | 1 |
| 0xD76E31 | Signal (46.0.1, Ist_Drehzahl_Rad_HR): Qualifier ungültig | 1 |
| 0xD76E32 | Signal (46.0.1, Ist_Drehzahl_Rad_HR): Qualifier fehlerhaft | 1 |
| 0xD76F01 | Signal (41.3.4, Ist_Radmoment_Antriebsstrang_Summe): Qualifier ungültig | 1 |
| 0xD76F02 | Signal (41.3.4, Ist_Radmoment_Antriebsstrang_Summe): Qualifier fehlerhaft | 1 |
| 0xD76F10 | Botschaft (72.1.2, Vorgabe Dämpfer Anteil passiv): nicht empfangen | 1 |
| 0xD76F11 | Botschaft (72.1.2, Vorgabe Dämpfer Anteil passiv): ausgefallen | 1 |
| 0xD76F12 | Botschaft (72.1.2, Vorgabe Dämpfer Anteil passiv): Alive Fehler | 1 |
| 0xD76F13 | Botschaft (72.1.2, Vorgabe Dämpfer Anteil passiv): CRC Fehler | 1 |
| 0xD76F14 | Signal (72.1.2, Vorgabe Dämpfer Anteil passiv): Wert ungültig | 1 |
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
| 0x6000 | Klemme 15N | Volt | - | unsigned int | - | 1 | 10 | - |
| 0x6001 | Klemme 30 | Volt | - | unsigned int | - | 1 | 10 | - |
| 0x6002 | Iststrom Proportionalventil Hinterachse Pfad 1 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6003 | Iststrom Proportionalventil Hinterachse Pfad 2 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6004 | Iststrom Proportionalventil Vorderachse Pfad 1 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6005 | Iststrom Proportionalventil Vorderachse Pfad 2 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6006 | Iststrom Richtungsventil Pfad 1 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6007 | Iststrom Richtungsventil Pfad 2 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6008 | Iststrom Saugdrosselventil | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6009 | Iststrom Sicherheitsventil Pfad 1 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x600a | Iststrom Sicherheitsventil Pfad 2 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x600b | Sensorspannung Druck Vorderachse | Volt | - | unsigned int | - | 1 | 1000 | - |
| 0x600c | Sensorspannung Druck Hinterachse | Volt | - | unsigned int | - | 1 | 1000 | - |
| 0x600d | Sensorspannung Ölstand | Volt | - | unsigned int | - | 1 | 1000 | - |
| 0x600e | Sensorspannung Schaltstellung bei RV Fehler | Volt | - | unsigned char | - | 1 | 42 | - |
| 0x600f | Sensorspannung Schaltstellung bei Druck Fehler | Volt | - | unsigned char | - | 1 | 42 | - |
| 0x6010 | Versorgungsspannung Drucksensor Vorderachse | Volt | - | unsigned int | - | 1 | 1000 | - |
| 0x6011 | Versorgungsspannung Drucksensor Hinterachse | Volt | - | unsigned int | - | 1 | 1000 | - |
| 0x6012 | Versorgungsspannung Schaltstellungssensor | Volt | - | unsigned int | - | 1 | 1000 | - |
| 0x6013 | Sollstellung Schaltstellungssensor | Zustand | - | unsigned char | - | - | - | - |
| 0x6014 | Istdruck Vorderachse bei RV Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6015 | Solldruck Vorderachse bei Druck Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6016 | Istdruck Vorderachse bei Druck Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6017 | Istdruck Hinterachse bei Druck Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6018 | Solldruck Hinterachse bei Druck Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6019 | Staudruck Vorderachse bei Predrive Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x601a | Staudruck Hinterachse bei Predrive Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x601b | relative Druckerhöhung Vorderachse bei Predrive Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x601c | Druckerhöhung Hinterachse bei Predrive Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x601d | Minimalstrom PDB Vorderachse bei Predrive Fehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x601e | Minimalstrom PDB Hinterachse bei Predrive Fehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x601f | Minimalstrom Fail-Safe bei Predrive Fehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6020 | Staudruck Vorderachse TP | bar | - | signed int | - | 1 | 10 | - |
| 0x6021 | Staudruck Hinterachse TP | bar | - | signed int | - | 1 | 10 | - |
| 0x6022 | Motortemperatur | °C | - | unsigned char | - | 1 | 1 | -48 |
| 0x6023 | Motordrehzahl | 1/min | - | unsigned int | - | 0.25 | 1 | - |
| 0x6024 | Fahrzeuggeschwindigkeit | km/h | - | unsigned int | - | 0.015625 | 1 | - |
| 0x6025 | Querbeschleunigung | m/s² | - | unsigned int | - | 0.002 | 1 | -65 |
| 0x6026 | Außentemperatur | °C | - | unsigned char | - | 0.5 | 1 | -40 |
| 0x6027 | QUALI_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | Zustand | - | unsigned char | - | - | - | - |
| 0x6028 | QUALI_IST_DREHZAHL_MOTOR_KURBELWELLE | Zustand | - | unsigned char | - | - | - | - |
| 0x6029 | QUALI_SOLL_LENKWINKEL_HA_STEUERUNG_TEILWERT | Zustand | - | unsigned char | - | - | - | - |
| 0x602a | QUALI_SOLL_LENKWINKEL_VA_STEUERUNG_TEILWERT | Zustand | - | unsigned char | - | - | - | - |
| 0x602b | QUALI_WANKGESCHWINDIGKEIT_FAHRZEUG_ROHDATEN | Zustand | - | unsigned char | - | - | - | - |
| 0x602c | QUALI_ANFORDERUNG_AENDERUNG_VERTEILUNG_WANKMOMENT | Zustand | - | unsigned char | - | - | - | - |
| 0x602d | QUALI_CHARAKTERISTISCHE_GESCHWINDIGKEIT | Zustand | - | unsigned char | - | - | - | - |
| 0x602e | QUALI_FAKTOR_FAHRZEUG_ADAPTION | Zustand | - | unsigned char | - | - | - | - |
| 0x602f | Fehler_kritisch_LL | Zustand | - | unsigned int | - | - | - | - |
| 0x6030 | Fail-Safe Druck Vorderachse bei Druck Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6031 | Fail-Safe Druck Hinterachse bei Druck Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6032 | Druckabfall Vorderachse wegen SD-Ventil bei Predrive Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6033 | Querbeschleunigung bei Druck Fehler | m/s² | - | unsigned int | - | 0.002 | 1 | -65 |
| 0x6034 | Motordrehzahl bei Druck Fehler | 1/min | - | unsigned int | - | 0.25 | 1 | - |
| 0x6035 | Fahrzeuggeschwindigkeit bei Druck Fehler | km/h | - | unsigned char | - | 2 | 1 | - |
| 0x6036 | Staudruck Vorderachse | bar | - | signed int | - | 1 | 10 | - |
| 0x6037 | Staudruck Hinterachse | bar | - | signed int | - | 1 | 10 | - |
| 0x6040 | effektive Pumpendrehzahl bei InbDynHA | 1/min | - | unsigned char | - | 25 | 1 | - |
| 0x6041 | Enddruck Hinterachse bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6042 | Enddruck Vorderachse bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6043 | max. erreichter Druck Hinterachse bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6044 | max. erreichter Druck Vorderachse bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6045 | Staudruck Hinterachse bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6046 | Staudruck Vorderachse bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6047 | max. Druck HA Toleranzbandprüfung bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6048 | min. Druck HA Toleranzbandprüfung bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6049 | Druckabbauzeit von 180 bis 13bar bei InbDynHA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x604A | Stellung Richtungsventil bei InbDynHA | Zustand | - | unsigned char | - | - | - | - |
| 0x604B | Druckaufbauzeit (20 bis 180bar) bei InbDynHA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x604C | Druckaufbauzeit (0 bis 20bar) bei InbDynHA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x604D | Zyklen mit Luft im System RV unbestromt bei InbDynHA | Anzahl | - | unsigned char | - | 1 | 1 | - |
| 0x604E | Zyklen mit Luft im System RV bestromt bei InbDynHA | Anzahl | - | unsigned char | - | 1 | 1 | - |
| 0x604F | Druckaufbauzeit (0 bis 20bar) RV bestromt bei InbDynHA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6050 | Druckaufbauzeit (0 bis 20bar) RV unbestromt bei InbDynHA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6051 | max. zul. Druckaufbauzeit (20 bis 180bar) bei InbDynHA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6052 | Zeit des Überschwingers bei InbDynHA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6060 | effektive Pumpendrehzahl bei InbDynVA | 1/min | - | unsigned char | - | 25 | 1 | - |
| 0x6061 | Enddruck Hinterachse bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x6062 | Enddruck Vorderachse bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x6063 | max. erreichter Druck Vorderachse bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x6064 | max. erreichter Druck Hinterachse bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x6065 | Staudruck Hinterachse bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x6066 | Staudruck Vorderachse bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x6067 | Druckaufbauzeit (0 bis 20bar) RV unbestromt bei InbDynVA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6068 | Druckaufbauzeit (0 bis 20bar) RV bestromt bei InbDynVA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6069 | Druckabbauzeit von 180 bis 13bar bei InbDynVA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x606A | max. Druck VA Toleranzbandprüfung bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x606B | min. Druck VA Toleranzbandprüfung bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x606C | Stellung Richtungsventil bei InbDynVA | Zustand | - | unsigned char | - | - | - | - |
| 0x606D | Druckaufbauzeit (20 bis 180bar) bei InbDynVA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x606E | Druckaufbauzeit (0 bis 20bar) bei InbDynVA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x606F | max. zul. Druckaufbauzeit (20 bis 180bar) bei InbDynVA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6070 | Zeit des Überschwingers bei InbDynVA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6080 | Abweichung vom Solldruck HA bei P1 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6081 | Abweichung vom Solldruck VA bei P1 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6082 | Abweichung vom Solldruck HA bei P2 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6083 | Abweichung vom Solldruck VA bei P2 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6084 | Abweichung vom Solldruck HA bei P3 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6085 | Druckabfall HA bei SD bestromen bei P3 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6086 | Abweichung vom Solldruck VA bei P3 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6087 | Istdruck HA bei P1 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6088 | Istdruck VA bei P1 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6089 | Istdruck HA bei P2 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x608A | Istdruck VA bei P2 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x608B | Istdruck HA bei P3 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x608C | Istdruck HA bei SD bestromen bei P3 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x608D | Istdruck VA bei P3 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6090 | minimale Pumpendrehzahl | 1/min | - | unsigned char | - | 25 | 1 | - |
| 0x6091 | maximale Pumpendrehzahl | 1/min | - | unsigned char | - | 25 | 1 | - |
| 0x60A0 | Eigendiagnose Bereitschaftsfehler | 0-n | - | 0x00FF | TAB_UW_READYNESS_ERR_DETAIL | - | - | - |
| 0x60A1 | Eigendiagnose Sammelfehler | Zustand | - | unsigned int | - | - | - | - |
| 0x60B0 | Inbetriebnahme Warnstatus | Zustand | - | unsigned int | - | - | - | - |
| 0x60B1 | Inbetriebnahme Bereitschaftsfehler | 0-n | - | 0x00FF | TAB_UW_READYNESS_ERR_DETAIL | - | - | - |
| 0x60C0 | QUALI_QUERBESCHLEUNIGUNG_SCHWERPUNKT | Zustand | - | unsigned char | - | - | - | - |
| 0x60C1 | QUALI_GIERGESCHWINDIGKEIT_FAHRZEUG | Zustand | - | unsigned char | - | - | - | - |
| 0x60C2 | QUALI_BESCHLEUNIGUNG_RAD_VL | Zustand | - | unsigned char | - | - | - | - |
| 0x60C3 | QUALI_BESCHLEUNIGUNG_RAD_VR | Zustand | - | unsigned char | - | - | - | - |
| 0x60C4 | QUALI_BESCHLEUNIGUNG_RAD_HL | Zustand | - | unsigned char | - | - | - | - |
| 0x60C5 | QUALI_BESCHLEUNIGUNG_RAD_HR | Zustand | - | unsigned char | - | - | - | - |
| 0x60C6 | QUALI_FUNKTION_RADKNOTEN_VL | Zustand | - | unsigned char | - | - | - | - |
| 0x60C7 | QUALI_FUNKTION_RADKNOTEN_VR | Zustand | - | unsigned char | - | - | - | - |
| 0x60C8 | QUALI_FUNKTION_RADKNOTEN_HL | Zustand | - | unsigned char | - | - | - | - |
| 0x60C9 | QUALI_FUNKTION_RADKNOTEN_HR | Zustand | - | unsigned char | - | - | - | - |
| 0x60CA | QUALI_HOEHENSTAND_FAHRZEUG_VL | Zustand | - | unsigned char | - | - | - | - |
| 0x60CB | QUALI_HOEHENSTAND_FAHRZEUG_VR | Zustand | - | unsigned char | - | - | - | - |
| 0x60CC | QUALI_HOEHENSTAND_FAHRZEUG_HL | Zustand | - | unsigned char | - | - | - | - |
| 0x60CD | QUALI_HOEHENSTAND_FAHRZEUG_HR | Zustand | - | unsigned char | - | - | - | - |
| 0x60CE | QUALI_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | Zustand | - | unsigned char | - | - | - | - |
| 0x60CF | QUALI_QUERBESCHLEUNIGUNG_AIRBAG_ROHDATEN | Zustand | - | unsigned char | - | - | - | - |
| 0x60D0 | QUALI_FUNKTION_FDR | Zustand | - | unsigned int | - | - | - | - |
| 0x60D1 | QUALI_FUNKTION_ABS | Zustand | - | unsigned int | - | - | - | - |
| 0x60D2 | QUALI_FUNKTION_ASC | Zustand | - | unsigned int | - | - | - | - |
| 0x60D3 | QUALI_FUNKTION_NIVEAUREGULIERUNG_FAHRZEUG | Zustand | - | unsigned int | - | - | - | - |
| 0x60D4 | QUALI_IST_BREMSMOMENT_SUMME | Zustand | - | unsigned char | - | - | - | - |
| 0x60D5 | QUALI_IST_DREHZAHL_RAD_HL | Zustand | - | unsigned char | - | - | - | - |
| 0x60D6 | QUALI_IST_DREHZAHL_RAD_HR | Zustand | - | unsigned char | - | - | - | - |
| 0x60D7 | QUALI_IST_RADMOMENT_ANTRIEBSSTRANG_SUMME | Zustand | - | unsigned char | - | - | - | - |
| 0x60E0 | Offsetdruck VA | bar | - | signed int | - | 1 | 10 | - |
| 0x60E1 | Offsetdruck HA | bar | - | signed int | - | 1 | 10 | - |
| 0x60F0 | Pumpendrehzahl bei Start des Predrive | 1/min | - | unsigned char | - | 25 | 1 | - |
| 0x60F1 | Außentemperatur bei Start des Predrive | °C | - | unsigned char | - | 0.5 | 1 | -40 |
| 0x60F2 | Motortemperatur bei Start des Predrive | °C | - | unsigned char | - | 1 | 1 | -48 |
| 0x60F3 | minimales relatives Druckdelta bei Predrive | bar | - | signed int | - | 1 | 10 | - |
| 0x60F4 | minimaler Druckabfall VA wegen SD-Ventil | bar | - | signed int | - | 1 | 10 | - |
| 0x60F5 | Minimalstrom Saugdrosselventil bei Predrive Fehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x60F6 | Motortemperatur am Ende des Predrive | °C | - | unsigned char | - | 1 | 1 | -48 |
| 0x60F7 | Zeit beim Predrive nach Entstromen des PDBVA, bis zu der das VA-Ventil wieder nahezu offen ist | s | - | unsigned char | - | 1 | 100 | - |
| 0x60F8 | Staudruck Vorderachse bei einem Predrive Fehler, nach dem Ventiltest | bar | - | signed int | - | 1 | 10 | - |
| 0x60F9 | erste Schaltzeit des Richtungsventils von unbestromt nach bestromt, vor der Aufheizphase | s | - | unsigned char | - | 1 | 100 | - |
| 0x60FA | erste Schaltzeit des Richtungsventils von bestromt nach unbestromt, vor der Aufheizphase | s | - | unsigned char | - | 1 | 100 | - |
| 0x60FB | Aufheizzeit, bis die Schaltzeiten des Richtungsventils i.O. waren | s | - | unsigned int | - | 1 | 100 | - |
| 0x60FC | Umlaufdruck während der Aufheizphase an VA (VA-Ventil bestromt) | bar | - | signed int | - | 1 | 10 | - |
| 0x60FD | Umlaufdruck während der Aufheizphase an HA (VA-Ventil bestromt) | bar | - | signed int | - | 1 | 10 | - |
| 0x6100 | WCET der defekten Task | µs | - | unsigned int | - | 1 | 1 | - |
| 0x6101 | Nummer der defekten Task | Zustand | - | unsigned char | - | - | - | - |
| 0x6102 | Grund des Taskfehlers | 0-n | - | 0xFF | TAB_UW_REASON_TASK_ERROR | - | - | - |
| 0x6110 | Statuswort des TJA1080 | Zustand | - | unsigned int | - | - | - | - |
| 0x6120 | Motordrehzahl bei SD Konsistenzfehler | 1/min | - | unsigned int | - | 0.25 | 1 | - |
| 0x6121 | Fahrzeuggeschwindigkeit bei SD Konsistenzfehler | km/h | - | unsigned char | - | 2 | 1 | - |
| 0x6122 | Querbeschleunigung bei SD Konsistenzfehler | m/s² | - | unsigned int | - | 0.002 | 1 | -65 |
| 0x6123 | Solldruck Vorderachse bei SD Konsistenzfehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6124 | Istdruck Vorderachse bei SD Konsistenzfehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6125 | Solldruck Hinterachse bei SD Konsistenzfehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6126 | Istdruck Hinterachse bei SD Konsistenzfehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6127 | Druckschwelle bei SD Konsistenzfehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6128 | Iststrom Saugdrosselventil bei SD Konsistenzfehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6130 | Ventilstrom Pfad 1 bei Onlinefehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6131 | Ventilstrom Pfad 2 bei Onlinefehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6132 | Highsidespannung des Ventils bei Onlinefehler | V | - | unsigned int | - | 1 | 1000 | - |
| 0x6133 | Lowsidespannung des Ventils bei Onlinefehler | V | - | unsigned int | - | 1 | 1000 | - |
| 0x6134 | Stromobergrenze des Ventils bei Onlinefehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6135 | Stromuntergrenze des Ventils bei Onlinefehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6136 | Tastverhältnis der Ansteuerung des Ventils bei Onlinefehler | % | - | unsigned int | - | 1 | 1000 | - |
| 0x6137 | betroffenes Ventil bei Onlinefehler | 0-n | - | 0xFF | TAB_UW_VENTIL | - | - | - |
| 0x6138 | Spulenwiderstand bei Onlinefehler | Ohm | - | unsigned int | - | 1 | 1000 | - |
| 0x6140 | Ventilstrom Pfad 1 bei SD-Ventil Onlinefehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6141 | Highsidespannung des SD-Ventils bei Onlinefehler | V | - | unsigned int | - | 1 | 1000 | - |
| 0x6142 | Lowsidespannung des SD-Ventils bei Onlinefehler | V | - | unsigned int | - | 1 | 1000 | - |
| 0x6143 | Stromobergrenze des SD-Ventils bei Onlinefehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6144 | Stromuntergrenze des SD-Ventils bei Onlinefehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6145 | Tastverhältnis der Ansteuerung des SD-Ventils bei Onlinefehler | % | - | unsigned int | - | 1 | 1000 | - |
| 0x6146 | betroffenes SD-Ventil bei Onlinefehler | 0-n | - | 0xFF | TAB_UW_VENTIL | - | - | - |
| 0x6147 | Spulenwiderstand bei SD-Ventil Onlinefehler | Ohm | - | unsigned int | - | 1 | 1000 | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x002010 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x002007 | NVM_E_READ_ALL_FAILED | 0 |
| 0x002006 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x002004 | NVM_E_ERASE_FAILED | 0 |
| 0x002003 | NVM_E_CONTROL_FAILED | 0 |
| 0x002002 | NVM_E_READ_FAILED | 0 |
| 0x002001 | NVM_E_WRITE_FAILED | 0 |
| 0x39fffe | Timeout Zeitbotschaft | 1 |
| 0x39fffd | DM_Queue_FULL | 0 |
| 0x39fffc | DM_Queue_DELETED | 0 |
| 0x39fffb | Timeout Botschaft Fahrzeugzustand | 1 |
| 0x390100 | interner Steuergerätefehler Eeprom reinitialisiert | 0 |
| 0x390101 | interner Steuergerätefehler Betriebssystem | 0 |
| 0x390102 | interner Steuergerätefehler Hardware | 0 |
| 0x390103 | interner Steuergerätefehler Prozessor | 0 |
| 0x390104 | interner Steuergerätefehler Exception | 0 |
| 0x390200 | PLL-Lock Fehler | 0 |
| 0x392000 | Detektierter Fehler Höhenstand oder Radbeschleunigung VL | 0 |
| 0x392001 | Detektierter Fehler Höhenstand oder Radbeschleunigung VR | 0 |
| 0x392002 | Detektierter Fehler Höhenstand oder Radbeschleunigung HL | 0 |
| 0x392003 | Detektierter Fehler Höhenstand oder Radbeschleunigung HR | 0 |
| 0x392004 | Querbeschleunigungssignal nicht abgesichert | 1 |
| 0x392005 | Detektierter Fehler Höhenstand oder Radbeschleunigung an min. einer Fahrzeugecke | 0 |
| 0x392006 | Detektierter Fehler Radbeschleunigung an der linken Fahrzeugseite | 0 |
| 0x392007 | Detektierter Fehler Radbeschleunigung an der rechten Fahrzeugseite | 0 |
| 0x392008 | Detektierter Fehler Höhenstand an der linken Fahrzeugseite | 0 |
| 0x392009 | Detektierter Fehler Höhenstand an der rechten Fahrzeugseite | 0 |
| 0x39200A | Sammelfehler | 0 |
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
| 0x6000 | Klemme 15N | Volt | - | unsigned int | - | 1 | 10 | - |
| 0x6001 | Klemme 30 | Volt | - | unsigned int | - | 1 | 10 | - |
| 0x6002 | Iststrom Proportionalventil Hinterachse Pfad 1 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6003 | Iststrom Proportionalventil Hinterachse Pfad 2 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6004 | Iststrom Proportionalventil Vorderachse Pfad 1 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6005 | Iststrom Proportionalventil Vorderachse Pfad 2 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6006 | Iststrom Richtungsventil Pfad 1 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6007 | Iststrom Richtungsventil Pfad 2 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6008 | Iststrom Saugdrosselventil | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6009 | Iststrom Sicherheitsventil Pfad 1 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x600a | Iststrom Sicherheitsventil Pfad 2 | A | - | unsigned int | - | 1 | 1000 | - |
| 0x600b | Sensorspannung Druck Vorderachse | Volt | - | unsigned int | - | 1 | 1000 | - |
| 0x600c | Sensorspannung Druck Hinterachse | Volt | - | unsigned int | - | 1 | 1000 | - |
| 0x600d | Sensorspannung Ölstand | Volt | - | unsigned int | - | 1 | 1000 | - |
| 0x600e | Sensorspannung Schaltstellung bei RV Fehler | Volt | - | unsigned char | - | 1 | 42 | - |
| 0x600f | Sensorspannung Schaltstellung bei Druck Fehler | Volt | - | unsigned char | - | 1 | 42 | - |
| 0x6010 | Versorgungsspannung Drucksensor Vorderachse | Volt | - | unsigned int | - | 1 | 1000 | - |
| 0x6011 | Versorgungsspannung Drucksensor Hinterachse | Volt | - | unsigned int | - | 1 | 1000 | - |
| 0x6012 | Versorgungsspannung Schaltstellungssensor | Volt | - | unsigned int | - | 1 | 1000 | - |
| 0x6013 | Sollstellung Schaltstellungssensor | Zustand | - | unsigned char | - | - | - | - |
| 0x6014 | Istdruck Vorderachse bei RV Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6015 | Solldruck Vorderachse bei Druck Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6016 | Istdruck Vorderachse bei Druck Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6017 | Istdruck Hinterachse bei Druck Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6018 | Solldruck Hinterachse bei Druck Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6019 | Staudruck Vorderachse bei Predrive Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x601a | Staudruck Hinterachse bei Predrive Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x601b | relative Druckerhöhung Vorderachse bei Predrive Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x601c | Druckerhöhung Hinterachse bei Predrive Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x601d | Minimalstrom PDB Vorderachse bei Predrive Fehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x601e | Minimalstrom PDB Hinterachse bei Predrive Fehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x601f | Minimalstrom Fail-Safe bei Predrive Fehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6020 | Staudruck Vorderachse TP | bar | - | signed int | - | 1 | 10 | - |
| 0x6021 | Staudruck Hinterachse TP | bar | - | signed int | - | 1 | 10 | - |
| 0x6022 | Motortemperatur | °C | - | unsigned char | - | 1 | 1 | -48 |
| 0x6023 | Motordrehzahl | 1/min | - | unsigned int | - | 0.25 | 1 | - |
| 0x6024 | Fahrzeuggeschwindigkeit | km/h | - | unsigned int | - | 0.015625 | 1 | - |
| 0x6025 | Querbeschleunigung | m/s² | - | unsigned int | - | 0.002 | 1 | -65 |
| 0x6026 | Außentemperatur | °C | - | unsigned char | - | 0.5 | 1 | -40 |
| 0x6027 | QUALI_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | Zustand | - | unsigned char | - | - | - | - |
| 0x6028 | QUALI_IST_DREHZAHL_MOTOR_KURBELWELLE | Zustand | - | unsigned char | - | - | - | - |
| 0x6029 | QUALI_SOLL_LENKWINKEL_HA_STEUERUNG_TEILWERT | Zustand | - | unsigned char | - | - | - | - |
| 0x602a | QUALI_SOLL_LENKWINKEL_VA_STEUERUNG_TEILWERT | Zustand | - | unsigned char | - | - | - | - |
| 0x602b | QUALI_WANKGESCHWINDIGKEIT_FAHRZEUG_ROHDATEN | Zustand | - | unsigned char | - | - | - | - |
| 0x602c | QUALI_ANFORDERUNG_AENDERUNG_VERTEILUNG_WANKMOMENT | Zustand | - | unsigned char | - | - | - | - |
| 0x602d | QUALI_CHARAKTERISTISCHE_GESCHWINDIGKEIT | Zustand | - | unsigned char | - | - | - | - |
| 0x602e | QUALI_FAKTOR_FAHRZEUG_ADAPTION | Zustand | - | unsigned char | - | - | - | - |
| 0x602f | Fehler_kritisch_LL | Zustand | - | unsigned int | - | - | - | - |
| 0x6030 | Fail-Safe Druck Vorderachse bei Druck Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6031 | Fail-Safe Druck Hinterachse bei Druck Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6032 | Druckabfall Vorderachse wegen SD-Ventil bei Predrive Fehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6033 | Querbeschleunigung bei Druck Fehler | m/s² | - | unsigned int | - | 0.002 | 1 | -65 |
| 0x6034 | Motordrehzahl bei Druck Fehler | 1/min | - | unsigned int | - | 0.25 | 1 | - |
| 0x6035 | Fahrzeuggeschwindigkeit bei Druck Fehler | km/h | - | unsigned char | - | 2 | 1 | - |
| 0x6036 | Staudruck Vorderachse | bar | - | signed int | - | 1 | 10 | - |
| 0x6037 | Staudruck Hinterachse | bar | - | signed int | - | 1 | 10 | - |
| 0x6040 | effektive Pumpendrehzahl bei InbDynHA | 1/min | - | unsigned char | - | 25 | 1 | - |
| 0x6041 | Enddruck Hinterachse bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6042 | Enddruck Vorderachse bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6043 | max. erreichter Druck Hinterachse bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6044 | max. erreichter Druck Vorderachse bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6045 | Staudruck Hinterachse bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6046 | Staudruck Vorderachse bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6047 | max. Druck HA Toleranzbandprüfung bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6048 | min. Druck HA Toleranzbandprüfung bei InbDynHA | bar | - | signed int | - | 1 | 10 | - |
| 0x6049 | Druckabbauzeit von 180 bis 13bar bei InbDynHA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x604A | Stellung Richtungsventil bei InbDynHA | Zustand | - | unsigned char | - | - | - | - |
| 0x604B | Druckaufbauzeit (20 bis 180bar) bei InbDynHA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x604C | Druckaufbauzeit (0 bis 20bar) bei InbDynHA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x604D | Zyklen mit Luft im System RV unbestromt bei InbDynHA | Anzahl | - | unsigned char | - | 1 | 1 | - |
| 0x604E | Zyklen mit Luft im System RV bestromt bei InbDynHA | Anzahl | - | unsigned char | - | 1 | 1 | - |
| 0x604F | Druckaufbauzeit (0 bis 20bar) RV bestromt bei InbDynHA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6050 | Druckaufbauzeit (0 bis 20bar) RV unbestromt bei InbDynHA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6051 | max. zul. Druckaufbauzeit (20 bis 180bar) bei InbDynHA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6052 | Zeit des Überschwingers bei InbDynHA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6060 | effektive Pumpendrehzahl bei InbDynVA | 1/min | - | unsigned char | - | 25 | 1 | - |
| 0x6061 | Enddruck Hinterachse bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x6062 | Enddruck Vorderachse bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x6063 | max. erreichter Druck Vorderachse bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x6064 | max. erreichter Druck Hinterachse bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x6065 | Staudruck Hinterachse bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x6066 | Staudruck Vorderachse bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x6067 | Druckaufbauzeit (0 bis 20bar) RV unbestromt bei InbDynVA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6068 | Druckaufbauzeit (0 bis 20bar) RV bestromt bei InbDynVA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6069 | Druckabbauzeit von 180 bis 13bar bei InbDynVA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x606A | max. Druck VA Toleranzbandprüfung bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x606B | min. Druck VA Toleranzbandprüfung bei InbDynVA | bar | - | signed int | - | 1 | 10 | - |
| 0x606C | Stellung Richtungsventil bei InbDynVA | Zustand | - | unsigned char | - | - | - | - |
| 0x606D | Druckaufbauzeit (20 bis 180bar) bei InbDynVA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x606E | Druckaufbauzeit (0 bis 20bar) bei InbDynVA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x606F | max. zul. Druckaufbauzeit (20 bis 180bar) bei InbDynVA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6070 | Zeit des Überschwingers bei InbDynVA | ms | - | unsigned int | - | 1 | 1 | - |
| 0x6080 | Abweichung vom Solldruck HA bei P1 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6081 | Abweichung vom Solldruck VA bei P1 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6082 | Abweichung vom Solldruck HA bei P2 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6083 | Abweichung vom Solldruck VA bei P2 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6084 | Abweichung vom Solldruck HA bei P3 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6085 | Druckabfall HA bei SD bestromen bei P3 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6086 | Abweichung vom Solldruck VA bei P3 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6087 | Istdruck HA bei P1 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6088 | Istdruck VA bei P1 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6089 | Istdruck HA bei P2 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x608A | Istdruck VA bei P2 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x608B | Istdruck HA bei P3 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x608C | Istdruck HA bei SD bestromen bei P3 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x608D | Istdruck VA bei P3 (InbPITest) | bar | - | signed int | - | 1 | 10 | - |
| 0x6090 | minimale Pumpendrehzahl | 1/min | - | unsigned char | - | 25 | 1 | - |
| 0x6091 | maximale Pumpendrehzahl | 1/min | - | unsigned char | - | 25 | 1 | - |
| 0x60A0 | Eigendiagnose Bereitschaftsfehler | 0-n | - | 0x00FF | TAB_UW_READYNESS_ERR_DETAIL | - | - | - |
| 0x60A1 | Eigendiagnose Sammelfehler | Zustand | - | unsigned int | - | - | - | - |
| 0x60B0 | Inbetriebnahme Warnstatus | Zustand | - | unsigned int | - | - | - | - |
| 0x60B1 | Inbetriebnahme Bereitschaftsfehler | 0-n | - | 0x00FF | TAB_UW_READYNESS_ERR_DETAIL | - | - | - |
| 0x60C0 | QUALI_QUERBESCHLEUNIGUNG_SCHWERPUNKT | Zustand | - | unsigned char | - | - | - | - |
| 0x60C1 | QUALI_GIERGESCHWINDIGKEIT_FAHRZEUG | Zustand | - | unsigned char | - | - | - | - |
| 0x60C2 | QUALI_BESCHLEUNIGUNG_RAD_VL | Zustand | - | unsigned char | - | - | - | - |
| 0x60C3 | QUALI_BESCHLEUNIGUNG_RAD_VR | Zustand | - | unsigned char | - | - | - | - |
| 0x60C4 | QUALI_BESCHLEUNIGUNG_RAD_HL | Zustand | - | unsigned char | - | - | - | - |
| 0x60C5 | QUALI_BESCHLEUNIGUNG_RAD_HR | Zustand | - | unsigned char | - | - | - | - |
| 0x60C6 | QUALI_FUNKTION_RADKNOTEN_VL | Zustand | - | unsigned char | - | - | - | - |
| 0x60C7 | QUALI_FUNKTION_RADKNOTEN_VR | Zustand | - | unsigned char | - | - | - | - |
| 0x60C8 | QUALI_FUNKTION_RADKNOTEN_HL | Zustand | - | unsigned char | - | - | - | - |
| 0x60C9 | QUALI_FUNKTION_RADKNOTEN_HR | Zustand | - | unsigned char | - | - | - | - |
| 0x60CA | QUALI_HOEHENSTAND_FAHRZEUG_VL | Zustand | - | unsigned char | - | - | - | - |
| 0x60CB | QUALI_HOEHENSTAND_FAHRZEUG_VR | Zustand | - | unsigned char | - | - | - | - |
| 0x60CC | QUALI_HOEHENSTAND_FAHRZEUG_HL | Zustand | - | unsigned char | - | - | - | - |
| 0x60CD | QUALI_HOEHENSTAND_FAHRZEUG_HR | Zustand | - | unsigned char | - | - | - | - |
| 0x60CE | QUALI_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | Zustand | - | unsigned char | - | - | - | - |
| 0x60CF | QUALI_QUERBESCHLEUNIGUNG_AIRBAG_ROHDATEN | Zustand | - | unsigned char | - | - | - | - |
| 0x60D0 | QUALI_FUNKTION_FDR | Zustand | - | unsigned int | - | - | - | - |
| 0x60D1 | QUALI_FUNKTION_ABS | Zustand | - | unsigned int | - | - | - | - |
| 0x60D2 | QUALI_FUNKTION_ASC | Zustand | - | unsigned int | - | - | - | - |
| 0x60D3 | QUALI_FUNKTION_NIVEAUREGULIERUNG_FAHRZEUG | Zustand | - | unsigned int | - | - | - | - |
| 0x60D4 | QUALI_IST_BREMSMOMENT_SUMME | Zustand | - | unsigned char | - | - | - | - |
| 0x60D5 | QUALI_IST_DREHZAHL_RAD_HL | Zustand | - | unsigned char | - | - | - | - |
| 0x60D6 | QUALI_IST_DREHZAHL_RAD_HR | Zustand | - | unsigned char | - | - | - | - |
| 0x60D7 | QUALI_IST_RADMOMENT_ANTRIEBSSTRANG_SUMME | Zustand | - | unsigned char | - | - | - | - |
| 0x60E0 | Offsetdruck VA | bar | - | signed int | - | 1 | 10 | - |
| 0x60E1 | Offsetdruck HA | bar | - | signed int | - | 1 | 10 | - |
| 0x60F0 | Pumpendrehzahl bei Start des Predrive | 1/min | - | unsigned char | - | 25 | 1 | - |
| 0x60F1 | Außentemperatur bei Start des Predrive | °C | - | unsigned char | - | 0.5 | 1 | -40 |
| 0x60F2 | Motortemperatur bei Start des Predrive | °C | - | unsigned char | - | 1 | 1 | -48 |
| 0x60F3 | minimales relatives Druckdelta bei Predrive | bar | - | signed int | - | 1 | 10 | - |
| 0x60F4 | minimaler Druckabfall VA wegen SD-Ventil | bar | - | signed int | - | 1 | 10 | - |
| 0x60F5 | Minimalstrom Saugdrosselventil bei Predrive Fehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x60F6 | Motortemperatur am Ende des Predrive | °C | - | unsigned char | - | 1 | 1 | -48 |
| 0x60F7 | Zeit beim Predrive nach Entstromen des PDBVA, bis zu der das VA-Ventil wieder nahezu offen ist | s | - | unsigned char | - | 1 | 100 | - |
| 0x60F8 | Staudruck Vorderachse bei einem Predrive Fehler, nach dem Ventiltest | bar | - | signed int | - | 1 | 10 | - |
| 0x60F9 | erste Schaltzeit des Richtungsventils von unbestromt nach bestromt, vor der Aufheizphase | s | - | unsigned char | - | 1 | 100 | - |
| 0x60FA | erste Schaltzeit des Richtungsventils von bestromt nach unbestromt, vor der Aufheizphase | s | - | unsigned char | - | 1 | 100 | - |
| 0x60FB | Aufheizzeit, bis die Schaltzeiten des Richtungsventils i.O. waren | s | - | unsigned int | - | 1 | 100 | - |
| 0x60FC | Umlaufdruck während der Aufheizphase an VA (VA-Ventil bestromt) | bar | - | signed int | - | 1 | 10 | - |
| 0x60FD | Umlaufdruck während der Aufheizphase an HA (VA-Ventil bestromt) | bar | - | signed int | - | 1 | 10 | - |
| 0x6100 | WCET der defekten Task | µs | - | unsigned int | - | 1 | 1 | - |
| 0x6101 | Nummer der defekten Task | Zustand | - | unsigned char | - | - | - | - |
| 0x6102 | Grund des Taskfehlers | 0-n | - | 0xFF | TAB_UW_REASON_TASK_ERROR | - | - | - |
| 0x6110 | Statuswort des TJA1080 | Zustand | - | unsigned int | - | - | - | - |
| 0x6120 | Motordrehzahl bei SD Konsistenzfehler | 1/min | - | unsigned int | - | 0.25 | 1 | - |
| 0x6121 | Fahrzeuggeschwindigkeit bei SD Konsistenzfehler | km/h | - | unsigned char | - | 2 | 1 | - |
| 0x6122 | Querbeschleunigung bei SD Konsistenzfehler | m/s² | - | unsigned int | - | 0.002 | 1 | -65 |
| 0x6123 | Solldruck Vorderachse bei SD Konsistenzfehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6124 | Istdruck Vorderachse bei SD Konsistenzfehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6125 | Solldruck Hinterachse bei SD Konsistenzfehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6126 | Istdruck Hinterachse bei SD Konsistenzfehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6127 | Druckschwelle bei SD Konsistenzfehler | bar | - | signed int | - | 1 | 10 | - |
| 0x6128 | Iststrom Saugdrosselventil bei SD Konsistenzfehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6130 | Ventilstrom Pfad 1 bei Onlinefehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6131 | Ventilstrom Pfad 2 bei Onlinefehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6132 | Highsidespannung des Ventils bei Onlinefehler | V | - | unsigned int | - | 1 | 1000 | - |
| 0x6133 | Lowsidespannung des Ventils bei Onlinefehler | V | - | unsigned int | - | 1 | 1000 | - |
| 0x6134 | Stromobergrenze des Ventils bei Onlinefehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6135 | Stromuntergrenze des Ventils bei Onlinefehler | A | - | unsigned int | - | 1 | 1000 | - |
| 0x6136 | Tastverhältnis der Ansteuerung des Ventils bei Onlinefehler | % | - | unsigned int | - | 1 | 1000 | - |
| 0x6137 | betroffenes Ventil bei Onlinefehler | 0-n | - | 0xFF | TAB_UW_VENTIL | - | - | - |
| 0x6138 | Spulenwiderstand bei Onlinefehler | Ohm | - | unsigned int | - | 1 | 1000 | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_START_OFFSET_WERTE | 0xAB66 | - | Nullpunkt der ARS Drucksensoren lernen Bedingung: -alle 4 Radgeschwindigkeiten kleiner 4 km/h -DSC Status ungleich 0x7 (Signal Ungueltig) | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB66 |
| ARS_EIGENDIAGNOSE | 0xAB75 | - | ARS Eigendiagnose | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB75 |
| STATUS_FR_DREHZAHL_ARS | 0xDB8D | - | liefert Flexray-Signale: aktuelle Motordrehzahl sowie Status Drehzahl | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB8D |
| ARS_DRUCKSENSOREN | 0xDB52 | - | ARS Sensorik - Werte und Zustände Drucksensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB52 |
| ARS_PROPORTIONALVENTILE | 0xDB54 | - | ARS Proportionalventile - Werte und Zustände | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB54 |
| STEUERN_DIAGSTAT_SETZEN | 0xDB72 | - | Einschalten Diagnosemodus des Steuergerätes. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB72 | - |
| STATUS_VERSORGUNG_RADKNOTEN | 0xDB8E | - | Spannungsversorgung Radknoten mit Status u. Fehler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB8E |
| VDC_VERBAUKENNUNG | 0xAB67 | - | Prüfung zur Radknotenverbaukennung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB67 |
| ARS_INBETRIEBNAHME | 0xAB73 | - | ARS Inbetriebnahme | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB73 |
| ARS_DATEN_DREHZAHLANHEBUNG_EIGENDIAGNOSE | 0xDB5F | - | Auslesen der benötigten Leerlaufdrehzahl bei der ARS Eigendiagnose | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB5F |
| ARS_OELSTANDSENSOR | 0xDB53 | - | ARS Sensorik - Werte und Zustände Ölstandsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB53 |
| ARS_VERSORGUNG_SENSOREN | 0xDB50 | - | Auslesen der Versorgungsspannungen der ARS Sensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB50 |
| SPANNUNG_KLEMME_30_WERT | 0xDAD8 | STAT_SPANNUNG_KLEMME_30_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| STATUS_FR_TRANSCEIVER_TJA1080 | 0xDB8F | - | Statuswort des Flexray Transceivers TJA 1080. | bit | - | - | BITFIELD | RES_0xDB8F | - | - | - | - | 22 | - | - |
| ARS_SCHALTVENTILE | 0xDB55 | - | ARS Schaltventile - Werte und Zustände | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB55 |
| ARS_DATEN_PREDRIVE_BACKUP | 0xDB5E | - | Auslesen der gespeicherten Predrive Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB5E |
| ARS_SCHALTSTELLUNGSSENSOR | 0xDB51 | - | ARS Sensorik - Werte und Zustände Schaltstellungssensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB51 |
| ARS_DATEN_DREHZAHLANHEBUNG | 0xDB95 | - | Auslesen der benötigten Leerlaufdrehzahl bei der ARS Inbetriebnahme | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB95 |
| STEUERN_DIAG_PARAMETER | 0xDB73 | - | Einstellung Rampenparameter | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB73 | - |
| ARS_DATEN_INBETRIEBNAHME | 0xDB5C | - | Abfragen der aktuellen Inbetriebnahme Daten VA= Vorderachse  HA= Hinterachse | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB5C |
| ARS_DATEN_PREDRIVE_AKTUELL | 0xDB5D | - | Auslesen der aktuellen Predrive Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB5D |
| SPANNUNG_KLEMME_15N_WERT | 0xDAD2 | STAT_SPANNUNG_KLEMME_15N_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| STATUS_FR_TRANSCEIVER_E910_54 | 0xDB96 | - | Lesen Flexray Transceiver Statuswort (ELMOS) | bit | - | - | BITFIELD | RES_0xDB96 | - | - | - | - | 22 | - | - |
| STATUS_VERSION_LLSW | 0x4100 | - | Version Low Level Software | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4100 |
| ARS_DATEN_EIGENDIAGNOSE | 0x4102 | - | Abfragen der aktuellen Eigendiagnose Daten VA= Vorderachse  HA= Hinterachse | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4102 |

### ARG_0XF101

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATUS_WORT | - | - | int | - | - | - | - | - | - | - | Diagnosemodus des Steuergerätes einschalten :Bit1 = nicht belegt; Bit2 = nicht belegt; Bit3 = Modus Inbetriebnahme; Bit4 = Rampmode active; Bit5 = diag pSynt; Bit6 = diag iSynt; Bit7 = diag sSynt; Bit8 = nicht belegt; Bit9 = FehlerSimMode; Bit10 = nicht belegt; Bit11 = nicht belegt; Bit12 = nicht belegt; Bit13 = nicht belegt; Bit14 = nicht belegt; Bit15 = nicht belegt; Bit16 = nicht belegt; |

### ARG_0XF102

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DIAG_RAMP_CTRL_STATUS | - | - | int | - | - | - | - | - | - | - | Rampenansteuerung via 16Bit Schlüssel: Bit1 = Rampe HA Halt; Bit2 = Rampe HA Ab; Bit3 = Rampe HA Auf; Bit4 = Rampe VA Halt; Bit5 = Rampe VA Ab; Bit6 = Rampe VA Auf; Bit7 = Rampe zusammen (bits 4-6 auf bits 1-3 spiegeln); Bit8 = nicht belegt; Bit9 = nicht belegt; Bit10 = nicht belegt; Bit11 = nicht belegt; Bit12 = nicht belegt; Bit13 = nicht belegt; Bit14 = nicht belegt; Bit15 = nicht belegt; Bit16 = nicht belegt; |
| DIAG_RAMP_TIME_VA | ms | - | int | - | - | - | 10 | - | - | - | Dauer der Rampe VA in ms |
| DIAG_RAMP_TIME_HA | ms | - | int | - | - | - | 10 | - | - | - | Dauer der Rampe HA in ms |
| DIAG_RAMP_HIGHLIMIT_VA | - | - | int | - | - | - | - | - | - | - | Maxwert der Rampe VA abhängig von Diagnosemodus |
| DIAG_RAMP_HIGHLIMIT_HA | - | - | int | - | - | - | - | - | - | - | Maxwert der Rampe HA abhängig von Diagnosemodus |
| DIAG_RAMP_RV_FS_STATUS | - | - | int | - | - | - | - | - | - | - | Rampenmodus  Failsafe  oder  Richtungsventil  wählen - 16 bit Schlüssel: Bit 1 = nicht belegt; Bit 2 = nicht belegt; Bit 3 = Modus Failsafe(MI fails); Bit 4 = nicht belegt; Bit 5 =Modus Richtungsventilvorgabe(MI reli); Bit 6 = nicht belegt; Bit 7 = nicht belegt; Bit 8 = nicht belegt; Bit 9 = nicht belegt; Bit 10 = nicht belegt; Bit11 = nicht belegt; Bit 12 = nicht belegt; Bit 13 = nicht belegt; Bit 14 = nicht belegt; Bit 15 = nicht belegt; Bit 16 = nicht belegt; |

### RES_0X4100

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_WERT | HEX | - | char | - | - | - | - | - | Haupt Version Low Level Software |
| STAT_UV_WERT | HEX | - | char | - | - | - | - | - | Unter Version Low Level Software |
| STAT_PV_WERT | HEX | - | char | - | - | - | - | - | Patch Haupt Version Low Level Software |

### TAB_UW_READYNESS_ERR_DETAIL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Verhinderungsgrund |
| 0x01 | ARS nicht freigegeben |
| 0x02 | Diagnosestatus falsch |
| 0x03 | Unterspannung |
| 0x04 | elektrischer Sensor- oder Ventilfehler |
| 0x05 | Status Richtungsventil falsch |
| 0x06 | Hydraulikölstand zu niedrig |
| 0x07 | Botschaftsfehler Motordrehzahl |
| 0x08 | Predrive-Fehler |
| 0x09 | minimale Motordrehzahl unterschritten |
| 0x0A | maximale Motordrehzahl überschritten |
| 0x0B | Hydrauliköl nicht betriebswarm |
| 0x0C | Botschafsfehler Höhenstand und Querbeschleunigung |
| 0x0D | VDC-Fehler: keine Weichkennung möglich |
| 0x0E | Offset Drucksensoren zu groß |
| 0x0F | Saugdrosselventil elektrischer Fehler |
| 0x10 | Fahrzeug steht nicht |
| 0xFF | ungültiger Wert |

### TAB_UW_REASON_TASK_ERROR

| WERT | UWTEXT |
| --- | --- |
| 0x00 | WCET Überschreitung |
| 0x01 | Taskausfall |
| 0xFF | ungültiger Wert |

### TAB_UW_VENTIL

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Failsafe-Ventil |
| 0x02 | Richtungsventil |
| 0x03 | Proportionalventil Vorderachse |
| 0x04 | Proportionalventil Hinterachse |
| 0x05 | Saugdrosselventil |
| 0xFF | ungültiger Wert |

### RES_0XAB66

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFSET_HA_WERT | - | - | + | mV | - | unsigned int | - | - | 1 | 1 | 0 | gelernter Offset Wert in mV Hinterachse |
| STAT_OFFSET_ERROR_HA_NR | - | - | + | 0-n | - | unsigned char | - | TAB_ARS_SENSOREN | - | - | - | Lernfehler Hinterachse |
| STAT_OFFSET_VA_WERT | - | - | + | mV | - | unsigned int | - | - | 1 | 1 | 0 | gelernter Offset Wert in mV Vorderachse |
| STAT_OFFSET_ERROR_VA_NR | - | - | + | 0-n | - | unsigned char | - | TAB_ARS_SENSOREN | - | - | - | Lernfehler Vorderachse |

### RES_0XAB75

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FORTSCHRITT_NR | - | - | + | 0-n | - | unsigned char | - | TAB_EIGDIAG_FORTSCHRITT | - | - | - | Fortschritt der Eigendiagnose |
| STAT_AKTIV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_PRUEFUNG | - | - | - | Indikator, ob Eigendiagnose derzeit läuft |
| STAT_ERGEBNIS_NR | - | - | + | 0-n | - | unsigned char | - | TAB_EIGDIAG_ERGEBNIS | - | - | - | Gesamtergebnis der Eigendiagnose |
| STAT_READYNESS_NR | - | - | + | 0-n | - | unsigned char | - | TAB_INBE_READYNESS | - | - | - | Status der Verfügbarkeit der Eigendiagnose |
| STAT_READYNESS_ERROR_DETAIL_NR | - | - | + | 0-n | - | unsigned int | - | TAB_INBE_READYNESS_DETAIL | - | - | - | Detailinformation für die Verfügbarkeit der Eigendiagnose |
| STAT_FEHLER_ID_WERT | - | - | + | - | - | unsigned int | - | - | - | - | - | Fehler ID Eigendiagnose |

### TAB_EIGDIAG_FORTSCHRITT

| WERT | TEXT |
| --- | --- |
| 0x00 | Eigendiagnose noch nicht gelaufen |
| 0x01 | Eigendiagnose läuft (1) |
| 0x02 | Eigendiagnose läuft (2) |
| 0x03 | Eigendiagnose läuft (3) |
| 0x04 | Eigendiagnose läuft (4) |
| 0x05 | Eigendiagnose läuft (5) |
| 0x06 | Eigendiagnose läuft (6) |
| 0x07 | Eigendiagnose läuft (7) |
| 0x08 | Eigendiagnose läuft (8) |
| 0x09 | Eigendiagnose läuft (9) |
| 0x0a | Eigendiagnose läuft (10) |
| 0x0b | Eigendiagnose läuft (11) |
| 0x0c | Eigendiagnose läuft (12) |
| 0x0d | Eigendiagnose läuft (13) |
| 0x0e | Eigendiagnose läuft (14) |
| 0x0f | Eigendiagnose läuft (15) |
| 0x10 | Eigendiagnose läuft (16) |
| 0x11 | Eigendiagnose läuft (17) |
| 0x12 | Eigendiagnose läuft (18) |
| 0x13 | Eigendiagnose läuft (19) |
| 0x14 | Eigendiagnose läuft (20) |
| 0x15 | Eigendiagnose läuft (21) |
| 0x16 | Eigendiagnose läuft (22) |
| 0x17 | Eigendiagnose läuft (23) |
| 0x63 | Eigendiagnose Ende mit Fehler |
| 0x64 | Eigendiagnose Ende ohne Fehler |
| 0xff | undefiniert |

### TAB_EIGDIAG_ERGEBNIS

| WERT | TEXT |
| --- | --- |
| 0 | Eigendiagnose noch nicht durchgelaufen |
| 1 | Eigendiagnose fertig |
| 255 | ungültiger Status |

### RES_0XDB8D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_MOTOR_WERT | 1/min | - | unsigned int | - | - | 0.25 | 1 | - | Signal Drehzahl Motor |
| STAT_FEHLER_DREHZAHL_MOTOR_WERT | - | - | unsigned char | - | - | - | - | - | Qualifier Signal Drehzahl Motor |

### RES_0XDB52

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRUCKSENSOR_HA_HW_WERT | V | - | int | - | - | - | 1000 | - | gelesener Sensor Wert Hinterachse |
| STAT_DRUCKSENSOR_HA_SW_WERT | bar | - | int | - | - | - | 100 | - | Druckwert Sensor Hinterachse |
| STAT_DRUCKSENSOR_VA_HW_WERT | V | - | int | - | - | - | 1000 | - | gelesener Sensor Wert Vorderachse |
| STAT_DRUCKSENSOR_VA_SW_WERT | bar | - | int | - | - | - | 100 | - | Druckwert Sensor Vorderachse |
| STAT_DRUCKSENSOR_HA_NR | 0-n | - | unsigned int | - | TAB_ARS_SENSOREN | - | - | - | Zustand des Drucksensor Hinterachse/ Ausgabe als Wert - Tabelle TAB_ARS_SENSOREN |
| STAT_DRUCKSENSOR_VA_NR | 0-n | - | int | - | TAB_ARS_SENSOREN | - | - | - | Zustand des Drucksensor Vorderachse/ Ausgabe als Wert - Tabelle TAB_ARS_SENSOREN |

### RES_0XDB54

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STEUERSTROM_HA_WERT | A | - | unsigned int | - | - | - | 1000 | - | Iststeuerstromwert Hinterachsventil |
| STAT_STEUERSTROM_VA_WERT | A | - | unsigned int | - | - | - | 1000 | - | Iststeuerstromwert Vorderachsventil |
| STAT_SOLLSTROM_HA_WERT | A | - | unsigned int | - | - | - | 1000 | - | Sollsteuerstromwert Hinterachsventil |
| STAT_SOLLSTROM_VA_WERT | A | - | unsigned int | - | - | - | 1000 | - | Sollsteuerstromwert Vorderachsventil |
| STAT_VENTIL_HA_NR | 0-n | - | unsigned int | - | TAB_ARS_VENTILE | - | - | - | Fehlercodes zugeordnet zu den Steuerventilen / Ausgabe als Hex Wert - table TAB_ARS_VENTILE |
| STAT_VENTIL_VA_NR | 0-n | - | unsigned int | - | TAB_ARS_VENTILE | - | - | - | Fehlercodes zugeordnet zu den Steuerventilen / Ausgabe als Hex Wert - table TAB_ARS_VENTILE |
| STAT_PWM_HA_WERT | % | - | unsigned int | - | - | - | 10 | - | Reglerausgang zum Hinterachsventil |
| STAT_PWM_VA_WERT | % | - | unsigned int | - | - | - | 10 | - | Reglerausgang zum Vorderachsventil |

### ARG_0XDB72

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATUS_WORT | 0-n | - | int | - | TAB_DIAG_STATUS | - | - | - | - | - | Einschalten Diagnosemodus des Steuergerätes: Bit0 = nicht belegt; Bit1 = nicht belegt; Bit2 = Modus Inbetriebnahme; Bit3 = Rampenmodus aktiv; Bit4 = diag pSynt; Bit5 = diag iSynt; Bit6 = diag sSynt; Bit7 = Eigendiagnose; Bit8 = nicht belegt; Bit9 = Fehler SimMode; Bit10 = nicht belegt; Bit11 = nicht belegt;  Bit12 = nicht belegt; Bit13 = nicht belegt; Bit14 = nicht belegt; Bit15 = Verbaukennung Radknoten; |

### TAB_DIAG_STATUS

| WERT | TEXT |
| --- | --- |
| 0x0018 | Rampe_Druck |
| 0x0028 | Rampe_Strom |
| 0x0048 | Rampe_PWM |
| 0x8000 | Verbaukennung_RK |
| 0x0004 | Inbetriebnahme |
| 0x0080 | Eigendiagnose |

### RES_0XDB8E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSORGUNG_RK_LINKS_WERT | Volt | - | unsigned int | - | - | 1 | 1000 | 0 | Spannung Radknotenversorgung links |
| STAT_ISTSTROM_RK_LINKS_WERT | A | - | unsigned int | - | - | 1 | 1000 | 0 | Stromaufnahme Radknotenversorgung links |
| STAT_RK_LINKS_FEHLER_NR | 0-n | - | unsigned int | - | TAB_ARS_VENTILE | - | - | - | Fehler Radknotenversorgung links |
| STAT_RK_LINKS_STATUS_NR | 0-n | - | unsigned char | - | TAB_STATEMACHINE | - | - | - | Status Radknotenversorgung links |
| STAT_VERSORGUNG_RK_RECHTS_WERT | Volt | - | unsigned int | - | - | 1 | 1000 | 0 | Spannung Radknotenversorgung rechts |
| STAT_ISTSTROM_RK_RECHTS_WERT | A | - | unsigned int | - | - | 1 | 1000 | 0 | Stromaufnahme Radknotenversorgung rechts |
| STAT_RK_RECHTS_FEHLER_NR | 0-n | - | unsigned int | - | TAB_ARS_VENTILE | - | - | - | Fehler Radknotenversorgung rechts |
| STAT_RK_RECHTS_STATUS_NR | 0-n | - | unsigned char | - | TAB_STATEMACHINE | - | - | - | Status Radknotenversorgung rechts |

### TAB_STATEMACHINE

| WERT | TEXT |
| --- | --- |
| 1 | Initialisierung (INIT) |
| 2 | Normalbetrieb (RUN) |
| 4 | Kalibrierung |
| 8 | Fehler |
| 0xFF | unbekannter Status |

### RES_0XAB67

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_HR_NR | - | - | + | 0-n | - | unsigned char | - | TAB_RK_VERBAU | - | - | - | Ergebnis der Prüfung HR |
| STAT_RESULT_VR_NR | - | - | + | 0-n | - | unsigned char | - | TAB_RK_VERBAU | - | - | - | Ergebnis der Prüfung VR |
| STAT_RESULT_HL_NR | - | - | + | 0-n | - | unsigned char | - | TAB_RK_VERBAU | - | - | - | Ergebnis der Prüfung HL |
| STAT_RESULT_VL_NR | - | - | + | 0-n | - | unsigned char | - | TAB_RK_VERBAU | - | - | - | Ergebnis der Prüfung VL |
| STAT_PRUEFUNG_LAEUFT_NR | - | - | + | 0-n | - | unsigned char | - | TAB_PRUEFUNG | - | - | - | Status Prüfung |

### TAB_RK_VERBAU

| WERT | TEXT |
| --- | --- |
| 0x00 | in diesem KL15N Zyklus nicht durchgeführt |
| 0x01 | durchgeführt und in Ordnung |
| 0x02 | Status ungültig |
| 0x03 | durchgeführt, aber RK über FR nicht ansprechbar |
| 0x04 | Status ungültig |
| 0x05 | durchgeführt, aber kein Stromanstieg auf der richtigen Seite gemessen |
| 0x06 | Status ungültig |
| 0x07 | Status ungültig |
| 0x08 | Status ungültig |
| 0x09 | Status ungültig |
| 0x0a | Status ungültig |
| 0x0b | Status ungültig |
| 0x0c | Status ungültig |
| 0x0d | Status ungültig |
| 0x0e | Status ungültig |
| 0x0f | läuft noch |
| 0xFF | ungültiger Wert |

### RES_0XAB73

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FORTSCHRITT_NR | - | - | + | 0-n | - | unsigned char | - | TAB_INBE_FORTSCHRITT | - | - | - | Fortschritt der Inbetriebnahme |
| STAT_AKTIV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_PRUEFUNG | - | - | - | Indikator, ob Inbetriebnahme derzeit läuft |
| STAT_ERGEBNIS_NR | - | - | + | 0-n | - | unsigned char | - | TAB_INBE_ERGEBNIS | - | - | - | Gesamtergebnis der Inbetriebnahme |
| STAT_DYNAMIKTEST_VA_NR | - | - | + | 0-n | - | unsigned int | - | TAB_INBE_DYNAMIKTEST_VA | - | - | - | Einzelergebnis des Dynamiktests Vorderachse |
| STAT_DYNAMIKTEST_HA_NR | - | - | + | 0-n | - | unsigned int | - | TAB_INBE_DYNAMIKTEST_HA | - | - | - | Einzelergebnis des Dynamiktests Hinterachse |
| STAT_PI_KENNLINIENTEST_NR | - | - | + | 0-n | - | unsigned char | - | TAB_INBE_PI_KENNLINIE | - | - | - | Einzelergebnis des PI Kennlinientests |
| STAT_SAUGDROSSELTEST_NR | - | - | + | 0-n | - | unsigned char | - | TAB_INBE_SAUGDROSSEL | - | - | - | Einzelergebnis des Saugdrosseltests |
| STAT_READYNESS_NR | - | - | + | 0-n | - | unsigned char | - | TAB_INBE_READYNESS | - | - | - | Status der Verfügbarkeit der Inbetriebnahme |
| STAT_WARNUNG_DREHZAHL_NR | - | - | + | 0-n | - | unsigned char | - | TAB_INBE_WARNUNG_DREHZAHL | - | - | - | Warnung, falls Leerlaufdrehzahl nicht im definierten Bereich |
| STAT_WARNUNG_LUFT_NR | - | - | + | 0-n | - | unsigned char | - | TAB_INBE_WARNUNG_LUFT | - | - | - | Warnung, falls Luft im System |
| STAT_READYNESS_ERROR_DETAIL_NR | - | - | + | 0-n | - | unsigned char | - | TAB_INBE_READYNESS_DETAIL | - | - | - | Detailinformation für die Verfügbarkeit der Inbetriebnahme |

### TAB_INBE_FORTSCHRITT

| WERT | TEXT |
| --- | --- |
| 0x00 | noch keine Inbetriebnahme durchgelaufen |
| 0x01 | Dynamiktest Vorderachse |
| 0x02 | Dynamiktest Hinterachse |
| 0x03 | PI-Kennlinientest Vorderachse |
| 0x04 | PI-Kennlinientest Hinterachse |
| 0x05 | Saugdrosseltest |
| 0x63 | Inbetriebnahme beendet |
| 0xFF | ungültiger Status |

### TAB_PRUEFUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | läuft nicht |
| 0x01 | läuft |
| 0xFF | ungültig |

### TAB_INBE_ERGEBNIS

| WERT | TEXT |
| --- | --- |
| 0x00 | Inbetriebnahme noch nicht durchgelaufen |
| 0x01 | Inbetriebnahme fertig mit Fehler |
| 0x02 | Inbetriebnahme fertig ohne Fehler |
| 0xFF | ungültiger Status |

### TAB_INBE_DYNAMIKTEST_VA

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler |
| 0x0001 | Staudruck zu hoch (Dynamiktest Vorderachse) |
| 0x0002 | Vorderachs-Ventil klemmt offen (Druck kleiner 20 bar bei Dynamiktest Vorderachse) |
| 0x0004 | Vorderachs-Ventil klemmt oder Drucksensor Vorderachse defekt (Druck kleiner 70 bar bei Dynamiktest Vorderachse) |
| 0x0008 | Solldruck Vorderachse nicht erreicht (Druck größer 70 bar bei Dynamiktest Vorderachse) |
| 0x0010 | Druckaufbau Vorderachse zu schnell (Dynamiktest Vorderachse) |
| 0x0020 | Druckaufbau Vorderachse zu langsam (Dynamiktest Vorderachse) |
| 0x0040 | Solldruck Vorderachse erreicht, Toleranzband unterschritten (Dynamiktest Vorderachse) |
| 0x0080 | Solldruck Vorderachse erreicht, Toleranzband überschritten (Dynamiktest Vorderachse) |
| 0x0100 | Enddruck zu hoch (Dynamiktest Vorderachse) |
| 0x8000 | Doppelfehler (Dynamiktest Vorderachse und Hinterachse, siehe Fehlerdetails bei Dynamiktest Hinterachse) |
| 0xFFFF | ungültiger Wert |

### TAB_INBE_DYNAMIKTEST_HA

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler |
| 0x0001 | Staudruck zu hoch (Dynamiktest Hinterachse) |
| 0x0002 | Hinterachs-Ventil klemmt (Druck kleiner 20 bar bei Dynamiktest Hinterachse) |
| 0x0004 | Hinterachs-Ventil klemmt (Druck kleiner 70 bar bei Dynamiktest Hinterachse) |
| 0x0008 | Solldruck Hinterachse nicht erreicht (Druck größer 70 bar bei Dynamiktest Hinterachse) |
| 0x0010 | Druckaufbau Hinterachse zu schnell (Dynamiktest Hinterachse) |
| 0x0020 | Druckaufbau Hinterachse zu langsam (Dynamiktest Hinterachse) |
| 0x0040 | Solldruck Hinterachse erreicht, Toleranzband unterschritten (Dynamiktest Hinterachse) |
| 0x0080 | Solldruck Hinterachse erreicht, Toleranzband überschritten (Dynamiktest Hinterachse) |
| 0x0100 | Enddruck zu hoch (Dynamiktest Hinterachse) |
| 0x0200 | Druckdifferenz Vorderachse zu Hinterachse zu groß (Differenz größer 6 bar bei Dynamiktest Hinterachse) |
| 0x0400 | dauerhaft Luft im System (Dynamiktest Hinterachse) |
| 0x0800 | FS-Ventil bestromt offen oder kein Volumenstrom (Druck kleiner 20 bar bei Dynamiktest Vorderachse und Hinterachse) |
| 0x1000 | FS-Ventil bestromt offen oder kaum Volumenstrom (Druck kleiner 70 bar bei Dynamiktest Vorderachse und Hinterachse) |
| 0x2000 | Solldruck nicht erreicht (Druck größer 70 bar bei Dynamiktest Vorderachse und Hinterachse) |
| 0x4000 | Druckaufbau zu langsam (Dynamiktest Vorderachse und Hinterachse) |
| 0xFFFF | ungültiger Wert |

### TAB_INBE_PI_KENNLINIE

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Strom/Druck Korrelation an Vorderachse zu niedrig |
| 0x02 | Strom/Druck Korrelation an Vorderachse zu hoch |
| 0x04 | Strom/Druck Korrelation an Hinterachse zu niedrig |
| 0x05 | Strom/Druck Korrelation  an Vorderachse und HA zu niedrig |
| 0x06 | Strom/Druck Korrelation an Vorderachse zu hoch und Hinterachse zu niedrig |
| 0x08 | Strom/Druck Korrelation an Hinterachse zu hoch |
| 0x09 | Strom/Druck Korrelation  an Vorderachse zu niedrig und Hinterachse zu hoch |
| 0x0A | Strom/Druck Korrelation  an Vorderachse und Hinterachse zu hoch |
| 0x10 | Sicherheitsdruck überschritten (Druck größer 180 bar bei Strom/Druck Test) |
| 0x11 | Sicherheitsdruck überschritten (Druck größer 180 bar bei Strom/Druck Test) |
| 0x12 | Sicherheitsdruck überschritten (Druck größer 180 bar bei Strom/Druck Test) |
| 0x14 | Sicherheitsdruck überschritten (Druck größer 180 bar bei Strom/Druck Test) |
| 0x15 | Sicherheitsdruck überschritten (Druck größer 180 bar bei Strom/Druck Test) |
| 0x16 | Sicherheitsdruck überschritten (Druck größer 180 bar bei Strom/Druck Test) |
| 0x18 | Sicherheitsdruck überschritten (Druck größer 180 bar bei Strom/Druck Test) |
| 0x19 | Sicherheitsdruck überschritten (Druck größer 180 bar bei Strom/Druck Test) |
| 0x1A | Sicherheitsdruck überschritten (Druck größer 180 bar bei Strom/Druck Test) |
| 0xFF | ungültiger Wert |

### TAB_INBE_SAUGDROSSEL

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht getestet oder SD-Ventil nicht vorhanden |
| 0x01 | Saugdrosselventil klemmt (PI-Test-Saugdrossel) |
| 0x02 | Saugdrosselventil i.O. (PI-Test-Saugdrossel) |
| 0xFF | ungültiger Wert |

### TAB_INBE_READYNESS

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Verhinderungsgrund |
| 0x01 | kein Start möglich wegen externer Ursachen |
| 0x02 | Abbruch durch Diagnose |
| 0x04 | Abbruch wegen externer Ursachen |
| 0xFF | ungültiger Wert |

### TAB_INBE_WARNUNG_DREHZAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | Motordrehzahl war in Ordnung |
| 0x01 | Motordrehzahl unterschritten |
| 0x02 | Motordrehzahl überschritten |
| 0x03 | Motordrehzahl unter- und überschritten |
| 0xFF | ungültiger Wert |

### TAB_INBE_WARNUNG_LUFT

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Luft erkannt |
| 0x01 | Luft bei Dynamiktest Vorderachse erkannt |
| 0x02 | Luft bei Dynamiktest Hinterachse erkannt |
| 0x03 | Luft bei Dynamiktest Vorder- und Hinterachse erkannt |
| 0xFF | ungültiger Wert |

### TAB_INBE_READYNESS_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Verhinderungsgrund |
| 0x01 | ARS nicht freigegeben |
| 0x02 | Diagnosestatus falsch |
| 0x03 | Unterspannung |
| 0x04 | elektrischer Sensor- oder Ventilfehler |
| 0x05 | Status Richtungsventil falsch |
| 0x06 | Hydraulikölstand zu niedrig |
| 0x07 | Botschaftsfehler Motordrehzahl |
| 0x08 | Predrive-Fehler |
| 0x09 | minimale Motordrehzahl unterschritten |
| 0x0A | maximale Motordrehzahl überschritten |
| 0x0B | Hydrauliköl nicht betriebswarm |
| 0x0C | Botschafsfehler Höhenstand und Querbeschleunigung |
| 0x0D | VDC-Fehler: keine Weichkennung möglich |
| 0x0E | Offset Drucksensoren zu groß |
| 0x0F | Saugdrosselventil elektrischer Fehler |
| 0x10 | Fahrzeug steht nicht |
| 0xFF | ungültiger Wert |

### RES_0XDB5F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORDREHZAHL_WERT | 1/min | - | unsigned int | - | - | - | - | - | Eigendiagnose Soll-Motordrehzahl |
| STAT_PUMPENDREHZAHL_WERT | 1/min | - | unsigned int | - | - | - | - | - | Eigendiagnose Soll-Pumpendrehzahl |
| STAT_PUMPENDREHZAHL_IST_WERT | 1/min | - | unsigned int | - | - | - | - | - | momentane Pumpendrehzahl |
| STAT_PUMPE_UEBERSETZUNG_WERT | - | - | unsigned int | - | - | 1 | 100 | - | Pumpenübersetzung |
| STAT_MAX_TOL_MOTORDREHZAHL_WERT | 1/min | - | unsigned int | - | - | - | - | - | zulässige Abweichung der Motordrehzahl bei Eigendiagnose |
| STAT_MAX_TOL_PUMPENDREHZAHL_WERT | 1/min | - | unsigned int | - | - | - | - | - | zulässige Abweichung der Pumpendrehzahl bei Eigendiagnose |
| STAT_MAX_TOL_ABBRUCH_MOTORDREHZAHL_WERT | 1/min | - | unsigned int | - | - | - | - | - | zulässige Abweichung der Motordrehzahl bis Abbruch der Eigendiagnose |
| STAT_MAX_TOL_ABBRUCH_PUMPENDREHZAHL_WERT | 1/min | - | unsigned int | - | - | - | - | - | zulässige Abweichung der Pumpendrehzahl bis Abbruch der Eigendiagnose |

### RES_0XDB53

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OELSTAND_HW_WERT | Volt | - | int | - | - | - | 1000 | - | gelesener Sensor Wert Ölstand |
| STAT_OELSTAND_SW_NR | 0-n | - | unsigned int | - | TAB_EIN_AUS | - | - | - | Abfrage des Ölstandschalters - Ausgabe als Hex Wert - Tabelle TAB_EIN_AUS |

### TAB_EIN_AUS

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xFF | unbekannt |

### RES_0XDB50

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSORGUNG_SCHALTSENSOR_WERT | Volt | - | int | - | - | - | 1000 | - | Versorgungsspannung am Schaltstellungssensor |
| STAT_VERSORGUNG_HA_WERT | Volt | - | int | - | - | - | 1000 | - | Versorgungsspannung am Drucksensor Hinterachse |
| STAT_VERSORGUNG_VA_WERT | Volt | - | int | - | - | - | 1000 | - | Versorgungsspannung am Drucksensor Vorderachse |

### RES_0XDB8F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_S0_WAKEUP_NR | 0/1 | - | unsigned int | 0x1000 | - | - | - | - | local wakeup source flag |
| STAT_S1_WAKEUP_SOURCE_NR | 0/1 | - | unsigned int | 0x0800 | - | - | - | - | remote wakeup source flag |
| STAT_S2_NODE_CONFIG_NR | 0/1 | - | unsigned int | 0x0400 | - | - | - | - | node configuration flag |
| STAT_S3_PWON_NR | 0/1 | - | unsigned int | 0x0200 | - | - | - | - | power on flag |
| STAT_S4_BUS_ERROR_NR | 0/1 | - | unsigned int | 0x0100 | - | - | - | - | bus error flag |
| STAT_S5_TEMP_HIGH_NR | 0/1 | - | unsigned int | 0x0080 | - | - | - | - | temperature high flag |
| STAT_S6_TEMP_MEDIUM_NR | 0/1 | - | unsigned int | 0x0040 | - | - | - | - | temperature medium flag |
| STAT_S7_TXEN_BGE_CLAMPED_NR | 0/1 | - | unsigned int | 0x0020 | - | - | - | - | Transmit enable bus guardian clamped flag |
| STAT_S8_UVVBAT_NR | 0/1 | - | unsigned int | 0x0010 | - | - | - | - | UV VBAT flag |
| STAT_S9_UVVCC_NR | 0/1 | - | unsigned int | 0x0008 | - | - | - | - | UV VCC flag |
| STAT_S10_UVVIO_NR | 0/1 | - | unsigned int | 0x0004 | - | - | - | - | UV VIO flag |
| STAT_S11_STAR_LOCKED_NR | 0/1 | - | unsigned int | 0x0002 | - | - | - | - | Star-locked mode |
| STAT_S12_TRXD_COLLISION_NR | 0/1 | - | unsigned int | 0x0001 | - | - | - | - | TRXD collision |

### RES_0XDB55

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ISTSTROM_SICHERHEITSVENTIL_WERT | A | - | unsigned int | - | - | - | 1000 | - | Iststeuerstromwert des Sicherheitsventils |
| STAT_ISTSTROM_RICHTUNGSVENTIL_WERT | A | - | unsigned int | - | - | - | 1000 | - | Iststeuerstromwert des Richtungsventils |
| STAT_ISTSTROM_SAUGDROSSELVENTIL_WERT | A | - | unsigned int | - | - | - | 1000 | - | Iststeuerstromwert des Saugdrosselventils |
| STAT_SOLLSTROM_SICHERHEITSVENTIL_WERT | A | - | unsigned int | - | - | - | 1000 | - | Sollsteuerstromwert des Sicherheitsventils |
| STAT_SOLLSTROM_RICHTUNGSVENTIL_WERT | A | - | unsigned int | - | - | - | 1000 | - | Sollsteuerstromwert des Richtungsventils |
| STAT_SOLLSTROM_SAUGDROSSELVENTIL_WERT | A | - | unsigned int | - | - | - | 1000 | - | Sollsteuerstromwert des Saugdrosselventils |
| STAT_PWM_SICHERHEITSVENTIL_WERT | % | - | unsigned int | - | - | - | 10 | - | Reglerausgang zum Sicherheitsventil |
| STAT_PWM_RICHTUNGSVENTIL_WERT | % | - | unsigned int | - | - | - | 10 | - | Reglerausgang zum Richtungsventil |
| STAT_PWM_SAUGDROSSELVENTIL_WERT | % | - | unsigned int | - | - | - | 10 | - | Reglerausgang zum Saugdrosselventil |
| STAT_SICHERHEITSVENTIL_NR | 0-n | - | unsigned int | - | TAB_ARS_VENTILE | - | - | - | Fehlercodes zugeordnet zum Sicherheitsventil / Ausgabe als Hex Wert - table TAB_ARS_VENTILE |
| STAT_RICHTUNGSVENTIL_NR | 0-n | - | unsigned int | - | TAB_ARS_VENTILE | - | - | - | Fehlercodes zugeordnet zum Richtungsventil / Ausgabe als Hex Wert - table TAB_ARS_VENTILE |
| STAT_SAUGDROSSELVENTIL_NR | 0-n | - | unsigned int | - | TAB_ARS_VENTILE | - | - | - | Fehlercodes zugeordnet zum Saugdrosselventil / Ausgabe als Hex Wert - table TAB_ARS_VENTILE |

### TAB_ARS_VENTILE

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler |
| 0x0001 | Kurzschluss nach Klemme 30 |
| 0x0002 | Kurzschluss nach Masse |
| 0x0004 | Signalleitung unterbrochen |
| 0x0008 | Ventilkurzschluss |
| 0x0010 | Redundante Strommessung inkonsistent |
| 0x0020 | Ventilstrommessung nicht kalibriert |
| 0x0040 | keine Endstufenfreigabe über Watchdog |
| 0x0080 | Signal unplausibel |
| 0x0100 | Allgemeiner Ventilfehler bei Onlineprüfung |
| 0x0200 | Ventilprüfung abgebrochen |
| 0xFFFF | unbekannter Fehler |

### RES_0XDB5E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PREDR_LAUFENDE_ID_WERT | - | - | unsigned int | - | - | - | - | - | Laufende Nummer eines durchgeführten Predrive |
| STAT_PREDR_ANZAHL_WERT | - | - | unsigned char | - | - | - | - | - | Anzahl der durchgeführten Predrive im aktuellen Zyklus |
| STAT_PREDR_DURCHGELAUFEN_WERT | - | - | unsigned char | - | - | - | - | - | Status, ob ein Predrive durchgeführt wurde |
| STAT_PREDR_AKTIV_WERT | - | - | unsigned char | - | - | - | - | - | Status, ob ein Predrive aktiv ist |
| STAT_PREDR_TIEFTEMP_PHASE_WERT | - | - | unsigned char | - | - | - | - | - | Status, ob ein Predrive in der Tieftemperaturphase ist |
| STAT_PREDR_P_UMLAUF_ZU_HOCH_WERT | - | - | unsigned char | - | - | - | - | - | Status, ob ein Predrive einen zu großen Umlaufdruck hat |
| STAT_PREDR_PVA_STAU_WERT | bar | - | int | - | - | 1 | 10 | - | Staudruck an VA vor dem Predrive Test |
| STAT_PREDR_PHA_STAU_WERT | bar | - | int | - | - | 1 | 10 | - | Staudruck an HA vor dem Predrive Test |
| STAT_PREDR_DPVA_MIN_WERT | bar | - | int | - | - | 1 | 10 | - | drehzahl- und temperaturabhängige minimal erwarteter Druckanstieg beim Predrive VA- oder HA-Ventiltest |
| STAT_PREDR_DPVA_REL_WERT | bar | - | int | - | - | 1 | 10 | - | relative Druckänderung bei Predrive VA-Ventiltest |
| STAT_PREDR_DPHA_WERT | bar | - | int | - | - | 1 | 10 | - | Druckänderung an HA beim Predrive HA-Ventiltest |
| STAT_PREDR_DPVA_MIN_SDU2SDB_WERT | bar | - | int | - | - | 1 | 10 | - | drehzahlabhängiger minimal erwarteter Druckabfall beim Predrive SD-Ventiltest |
| STAT_PREDR_UW_DPVA_REL_SDU2SDB_WERT | bar | - | int | - | - | 1 | 10 | - | Druckänderung an VA beim Predrive SD-Ventiltest |
| STAT_PREDR_WZ_TEST_SD_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | benötigte Zeit bis zum Erreichen des minimalen Druckabfalls beim Predrive SD-Ventiltest |
| STAT_PREDR_STROM_VA_WERT | Ampere | - | unsigned int | - | - | 1 | 1000 | - | Stromwert an VA-Ventil bei Erreichen der Grenzströme (vor Predrive) |
| STAT_PREDR_STROM_HA_WERT | Ampere | - | unsigned int | - | - | 1 | 1000 | - | Stromwert an HA-Ventil bei Erreichen der Grenzströme (vor Predrive) |
| STAT_PREDR_STROM_FS_WERT | Ampere | - | unsigned int | - | - | 1 | 1000 | - | Stromwert an FS-Ventil bei Erreichen der Grenzströme (vor Predrive) |
| STAT_PREDR_STROM_SD_WERT | Ampere | - | unsigned int | - | - | 1 | 1000 | - | Stromwert an SD-Ventil bei Erreichen der Grenzströme (vor Predrive) |
| STAT_PREDR_WZ_STROMLOS_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | benötigte Zeit bis zum Unterschreiten der Grenzströme an VA-,HA-,FS- und  SD-Ventil (vor Predrive) |
| STAT_PREDR_N_PUMPE_WERT | 1/min | - | unsigned char | - | - | 25 | 1 | - | Pumpendrehzahl beim Predrive-Test |
| STAT_PREDR_T_AUSSEN_WERT | °C | - | unsigned char | - | - | 0,5 | 1 | -40 | Außentemperatur beim Predrive-Test |
| STAT_PREDR_T_MOTOR_WERT | °C | - | unsigned char | - | - | 1 | 1 | -48 | Motortemperatur beim Predrive-Test |
| STAT_FSP_PREDR_ERR_WERT | - | - | unsigned int | - | - | - | - | - | Fehlerstatus des Predrive-Tests |
| STAT_FSP_PREDR_WARN_WERT | - | - | unsigned int | - | - | - | - | - | Warnstatus des Predrive-Tests |

### RES_0XDB51

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTPOSITION_HW_WERT | Volt | - | int | - | - | - | 1000 | - | gelesener SensorWert Richtungsventil |
| STAT_SCHALTPOSITION_SW_WERT | - | - | char | - | - | - | - | - | interpretierter SensorWert Richtungsventil (-1,0,1) |
| STAT_SCHALTPOSITION_NR | 0-n | - | unsigned int | - | TAB_ARS_SENSOREN | - | - | - | Zustand des Schaltstellungssensor. Siehe Tabelle TAB_ARS_SENSOREN |

### TAB_ARS_SENSOREN

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler |
| 0x0001 | Signal zu hoch |
| 0x0002 | Signal zu niedrig |
| 0x0004 | Signalleitung unterbrochen |
| 0x0008 | Leitungsunterbrechung Sensormasse |
| 0x0010 | Sensorversorgung nicht kalibriert |
| 0x0020 | Sensorparameter nicht gelernt |
| 0x0040 | Sensoreinbaulage nicht gelernt |
| 0x0080 | Signal unplausibel |
| 0xFFFF | unbekannter Fehler |

### RES_0XDB95

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORDREHZAHL_WERT | 1/min | - | unsigned int | - | - | - | - | - | Inbetriebnahme Motordrehzahl |
| STAT_PUMPENDREHZAHL_WERT | 1/min | - | unsigned int | - | - | - | - | - | Inbetriebnahme Pumpendrehzahl |
| STAT_PUMPE_UEBERSETZUNG_WERT | - | - | unsigned int | - | - | 1 | 100 | - | Pumpenübersetzung |
| STAT_MAX_TOL_MOTORDREHZAHL_WERT | 1/min | - | unsigned int | - | - | - | - | - | Zulässige Abweichung der Motordrehzahl |
| STAT_MAX_TOL_PUMPENDREHZAHL_WERT | 1/min | - | unsigned int | - | - | - | - | - | Zulässige Abweichung der Pumpendrehzahl |

### ARG_0XDB73

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DIAG_RAMP_CTRL_STATUS | 0-n | - | int | - | TAB_RAMP_CTRL_STATUS | - | - | - | - | - | Rampenansteuerung via 16Bit Schlüssel: Bit1 = Rampe HA Halt; Bit2 = Rampe HA Ab; Bit3 = Rampe HA Auf; Bit4 = Rampe VA Halt; Bit5 = Rampe VA Ab; Bit6 = Rampe VA Auf; Bit7 = Rampe zusammen (bits 4-6 auf bits 1-3 spiegeln); Bit8 = nicht belegt; Bit9 = nicht belegt; Bit10 = nicht belegt; Bit11 = nicht belegt; Bit12 = nicht belegt; Bit13 = nicht belegt; Bit14 = nicht belegt; Bit15 = nicht belegt; Bit16 = nicht belegt; |
| DIAG_RAMP_TIME_VA | ms | - | int | - | - | 1 | 10 | 0 | - | - | Dauer der Rampe VA in ms |
| DIAG_RAMP_TIME_HA | ms | - | int | - | - | 1 | 10 | 0 | - | - | Dauer der Rampe HA in ms |
| DIAG_RAMP_HIGHLIMIT_VA | - | - | int | - | - | - | - | - | - | - | Maxwert der Rampe VA abhängig von Diagnosemodus |
| DIAG_RAMP_HIGHLIMIT_HA | - | - | int | - | - | - | - | - | - | - | Maxwert der Rampe HA abhängig von Diagnosemodus |
| DIAG_RAMP_SCHALTVENTILE_STATUS | 0-n | - | int | - | TAB_RAMP_SCHALTVENTILE_STATUS | - | - | - | - | - | Rampenmodus Schaltventile wählen - 16 bit Schlüssel:  Bit 0 = nicht belegt; Bit 1 = nicht belegt; Bit 2 = Modus Failsafeventilvorgabe; Bit 3 = nicht belegt;  Bit 4 = Modus Richtungsventilvorgabe; Bit 5 = nicht belegt Bit 6 = nicht belegt; Bit 7 = nicht belegt; Bit 8 = Modus Saugdrosselventilvorgabe; Bit 9 = nicht belegt;  Bit 10 = nicht belegt; Bit 11 = nicht belegt; Bit 12 = nicht belegt; Bit 13 = nicht belegt;  Bit 14 = nicht belegt; Bit 15 = nicht belegt; |

### TAB_RAMP_CTRL_STATUS

| WERT | TEXT |
| --- | --- |
| 0x0009 | VA_halt_HA_halt |
| 0x000A | VA_halt_HA_ab |
| 0x000C | VA_halt_HA_auf |
| 0x0011 | VA_ab_HA_halt |
| 0x0012 | VA_ab_HA_ab |
| 0x0014 | VA_ab_HA_auf |
| 0x0021 | VA_auf_HA_halt |
| 0x0022 | VA_auf_HA_ab |
| 0x0024 | VA_auf_HA_auf |
| 0x0040 | VA_HA_zusammen |
| 0x0050 | VA_HA_zusammen_ab |
| 0x0060 | VA_HA_zusammen_auf |
| 0xFFFF | ungueltiger Wert |

### TAB_RAMP_SCHALTVENTILE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x0000 | alle_aus |
| 0x0004 | FS_ein_RV_aus_SD_aus |
| 0x0010 | FS_aus_RV_ein_SD_aus |
| 0x0014 | FS_ein_RV_ein_SD_aus |
| 0x0100 | FS_aus_RV_aus_SD_ein |
| 0x0104 | FS_ein_RV_aus_SD_ein |
| 0x0110 | FS_aus_RV_ein_SD_ein |
| 0x0114 | FS_ein_RV_ein_SD_ein |
| 0xFFFF | ungueltiger Wert |

### RES_0XDB5C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INB_ID_WERT | - | - | unsigned int | - | - | - | - | - | ID der Inbetriebnahme |
| STAT_INB_UW_T_MOTOR_WERT | °C | - | unsigned char | - | - | 1 | 1 | -48 | Motortemperatur beim Start der Inbetriebnahme |
| STAT_INB_UW_T_AUSSEN_WERT | °C | - | unsigned char | - | - | 0,5 | 1 | -40 | Außentemperatur beim Start der Inbetriebnahme |
| STAT_FSP_INB_WARNSTATUS_WERT | - | - | unsigned int | - | - | - | - | - | Warnstatus der Inbetriebnahme |
| STAT_FSP_INB_DYN_VA_ERR_STATUS_WERT | - | - | unsigned int | - | - | - | - | - | Fehlerstatus des Dynamiktests VA |
| STAT_FSP_INB_DYN_HA_ERR_STATUS_WERT | - | - | unsigned int | - | - | - | - | - | Fehlerstatus des Dynamiktests HA |
| STAT_FSP_INB_PI_TEST_ERR_STATUS_WERT | - | - | unsigned char | - | - | - | - | - | Fehlerstatus des PI-Kennlinientests |
| STAT_FSP_INB_PI_TEST_SD_ERR_STATUS_WERT | - | - | unsigned char | - | - | - | - | - | Fehlerstatus des Saugdrosselventiltests |
| STAT_INB_DYN_VA_UW_RV_WERT | - | - | unsigned char | - | - | - | - | - | letzte Richtungsventilstellung (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_PSTAU_VA_WERT | bar | - | int | - | - | 1 | 10 | - | Staudruck VA (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_PSTAU_HA_WERT | bar | - | int | - | - | 1 | 10 | - | Staudruck HA (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_WZ_LUFT_RV_U_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | Druckaufbauzeit bis 20bar RV unbestromt (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_WZ_LUFT_RV_B_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | Druckaufbauzeit bis 20bar RV bestromt (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_WZ_LUFT_AKT_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | Druckaufbauzeit bis 20bar aktuell (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_WZ_LUFT_2SOLL_AKT_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | benötigte Druckaufbauzeit 20 bis 180bar (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_WZ_LUFT_2SOLL_RV_U_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | benötigte Druckaufbauzeit 20 bis 180bar RV unbestromt (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_WZ_LUFT_2SOLL_RV_B_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | benötigte Druckaufbauzeit 20 bis 180bar RV bestromt (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_WZ_MAX_LUFT_2SOLL_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | tolerierte Druckaufbauzeit 20 bis 180bar (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_PREACH_VA_WERT | bar | - | int | - | - | 1 | 10 | - | maximal erreichter Druck VA (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_PREACH_HA_WERT | bar | - | int | - | - | 1 | 10 | - | maximal erreichter Druck HA (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_WZ_REACH_2TOL_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | Zeit zwischen erreichtem Solldruck und Einhaltung des Toleranzbandes (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_PTOL_VA_MIN_WERT | bar | - | unsigned int | - | - | 1 | 10 | - | minimaler Druck VA bei Toleranzbandüberwachung (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_PTOL_VA_MAX_WERT | bar | - | unsigned int | - | - | 1 | 10 | - | maximaler Druck VA bei Toleranzbandüberwachung (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_WZ_ENDE_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | Druckabbauzeit von 180 bis 13bar (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_PENDE_VA_WERT | bar | - | unsigned int | - | - | 1 | 10 | - | Enddruck VA (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_PENDE_HA_WERT | bar | - | unsigned int | - | - | 1 | 10 | - | Enddruck HA (Dynamiktest VA) |
| STAT_INB_DYN_VA_UW_PUMPE_EFF_WERT | 1/min | - | unsigned char | - | - | 25 | 1 | - | Effektive Pumpendrehzahl (Dynamiktest VA) |
| STAT_INB_DYN_HA_UW_RV_WERT | - | - | unsigned char | - | - | - | - | - | letzte Richtungsventilstellung (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_PSTAU_VA_WERT | bar | - | int | - | - | 1 | 10 | - | Staudruck VA (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_PSTAU_HA_WERT | bar | - | int | - | - | 1 | 10 | - | Staudruck HA (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_WZ_LUFT_RV_U_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | Druckaufbauzeit bis 20bar RV unbestromt (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_WZ_LUFT_RV_B_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | Druckaufbauzeit bis 20bar RV bestromt (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_WZ_LUFT_AKT_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | Druckaufbauzeit bis 20bar aktuell (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_LUFTZYKLEN_RV_U_WERT | - | - | unsigned char | - | - | 1 | 1 | - | Zyklen mit Luft im System bei RV unbestromt (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_LUFTZYKLEN_RV_B_WERT | - | - | unsigned char | - | - | 1 | 1 | - | Zyklen mit Luft im System bei RV bestromt (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_WZ_LUFT_2SOLL_AKT_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | benötigte Druckaufbauzeit 20 bis 180bar (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_WZ_LUFT_2SOLL_RV_U_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | benötigte Druckaufbauzeit 20 bis 180bar RV unbestromt (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_WZ_LUFT_2SOLL_RV_B_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | benötigte Druckaufbauzeit 20 bis 180bar RV bestromt (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_WZ_MAX_LUFT_2SOLL_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | tolerierte Druckaufbauzeit 20 bis 180bar (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_PREACH_VA_WERT | bar | - | int | - | - | 1 | 10 | - | maximal erreichter Druck VA (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_PREACH_HA_WERT | bar | - | int | - | - | 1 | 10 | - | maximal erreichter Druck HA (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_WZ_REACH_2TOL_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | Zeit zwischen erreichtem Solldruck und Einhaltung des Toleranzbandes (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_PTOL_HA_MIN_WERT | bar | - | int | - | - | 1 | 10 | - | minimaler Druck HA bei Toleranzbandüberwachung (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_PTOL_HA_MAX_WERT | bar | - | int | - | - | 1 | 10 | - | maximaler Druck HA bei Toleranzbandüberwachung (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_WZ_ENDE_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | Druckabbauzeit von 180 bis 13bar (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_PENDE_VA_WERT | bar | - | int | - | - | 1 | 10 | - | Enddruck VA (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_PENDE_HA_WERT | bar | - | int | - | - | 1 | 10 | - | Enddruck HA (Dynamiktest HA) |
| STAT_INB_DYN_HA_UW_PUMPE_EFF_WERT | 1/min | - | unsigned char | - | - | 25 | 1 | - | Effektive Pumpendrehzahl (Dynamiktest HA) |
| STAT_INB_PI_TEST_UW_P1_VA_WERT | bar | - | int | - | - | 1 | 10 | - | Druck VA Strompunkt 1 (PI-Kennlinientest VA) |
| STAT_INB_PI_TEST_UW_DP1_VA_WERT | bar | - | int | - | - | 1 | 10 | - | Druckabweichung VA Strompunkt 1 (PI-Kennlinientest VA) |
| STAT_INB_PI_TEST_UW_P2_VA_WERT | bar | - | int | - | - | 1 | 10 | - | Druck VA Strompunkt 2 (PI-Kennlinientest VA) |
| STAT_INB_PI_TEST_UW_DP2_VA_WERT | bar | - | int | - | - | 1 | 10 | - | Druckabweichung VA Strompunkt 2 (PI-Kennlinientest VA) |
| STAT_INB_PI_TEST_UW_P3_VA_WERT | bar | - | int | - | - | 1 | 10 | - | Druck VA Strompunkt 3 (PI-Kennlinientest VA) |
| STAT_INB_PI_TEST_UW_DP3_VA_WERT | bar | - | int | - | - | 1 | 10 | - | Druckabweichung VA Strompunkt 3 (PI-Kennlinientest VA) |
| STAT_INB_PI_TEST_UW_P1_HA_WERT | bar | - | int | - | - | 1 | 10 | - | Druck HA Strompunkt 1 (PI-Kennlinientest HA) |
| STAT_INB_PI_TEST_UW_DP1_HA_WERT | bar | - | int | - | - | 1 | 10 | - | Druckabweichung HA Strompunkt 1 (PI-Kennlinientest HA) |
| STAT_INB_PI_TEST_UW_P2_HA_WERT | bar | - | int | - | - | 1 | 10 | - | Druck HA Strompunkt 2 (PI-Kennlinientest HA) |
| STAT_INB_PI_TEST_UW_DP2_HA_WERT | bar | - | int | - | - | 1 | 10 | - | Druckabweichung HA Strompunkt 2 (PI-Kennlinientest HA) |
| STAT_INB_PI_TEST_UW_P3_HA_WERT | bar | - | int | - | - | 1 | 10 | - | Druck HA Strompunkt 3 (PI-Kennlinientest HA) |
| STAT_INB_PI_TEST_UW_DP3_HA_WERT | bar | - | int | - | - | 1 | 10 | - | Druckabweichung HA Strompunkt 3 (PI-Kennlinientest HA) |
| STAT_INB_PI_TEST_UW_P3_SD_HA_WERT | bar | - | int | - | - | 1 | 10 | - | Druck HA Strompunkt 3 mit Saugdrossel (PI-Kennlinientest HA) |
| STAT_INB_PI_TEST_UW_DP3_SD_HA_WERT | bar | - | int | - | - | 1 | 10 | - | Druckabweichung HA Strompunkt 3 mit Saugdrossel (PI-Kennlinientest HA) |
| STAT_INB_UW_NPUMPE_MIN_WERT | 1/min | - | unsigned char | - | - | 25 | 1 | - | minimale Pumpendrehzahl (gesamte Inbetriebnahme) |
| STAT_INB_UW_NPUMPE_MAX_WERT | 1/min | - | unsigned char | - | - | 25 | 1 | - | maximale Pumpendrehzahl (gesamte Inbetriebnahme) |

### RES_0XDB5D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PREDR_LAUFENDE_ID_WERT | - | - | unsigned int | - | - | - | - | - | Laufende Nummer eines durchgeführten Predrive |
| STAT_PREDR_ANZAHL_WERT | - | - | unsigned char | - | - | - | - | - | Anzahl der durchgeführten Predrive im aktuellen Zyklus |
| STAT_PREDR_DURCHGELAUFEN_WERT | - | - | unsigned char | - | - | - | - | - | Status, ob ein Predrive durchgeführt wurde |
| STAT_PREDR_AKTIV_WERT | - | - | unsigned char | - | - | - | - | - | Status, ob ein Predrive aktiv ist |
| STAT_PREDR_TIEFTEMP_PHASE_WERT | - | - | unsigned char | - | - | - | - | - | Status, ob ein Predrive in der Tieftemperaturphase ist |
| STAT_PREDR_P_UMLAUF_ZU_HOCH_WERT | - | - | unsigned char | - | - | - | - | - | Status, ob ein Predrive einen zu großen Umlaufdruck hat |
| STAT_PREDR_PVA_STAU_WERT | bar | - | int | - | - | 1 | 10 | - | Staudruck an VA vor dem Predrive Test |
| STAT_PREDR_PHA_STAU_WERT | bar | - | int | - | - | 1 | 10 | - | Staudruck an HA vor dem Predrive Test |
| STAT_PREDR_DPVA_MIN_WERT | bar | - | int | - | - | 1 | 10 | - | drehzahl- und temperaturabhängige minimal erwarteter Druckanstieg beim Predrive VA- oder HA-Ventiltest |
| STAT_PREDR_DPVA_REL_WERT | bar | - | int | - | - | 1 | 10 | - | relative Druckänderung bei Predrive VA-Ventiltest |
| STAT_PREDR_DPHA_WERT | bar | - | int | - | - | 1 | 10 | - | Druckänderung an HA beim Predrive HA-Ventiltest |
| STAT_PREDR_DPVA_MIN_SDU2SDB_WERT | bar | - | int | - | - | 1 | 10 | - | drehzahlabhängiger minimal erwarteter Druckabfall beim Predrive SD-Ventiltest |
| STAT_PREDR_UW_DPVA_REL_SDU2SDB_WERT | bar | - | int | - | - | 1 | 10 | - | Druckänderung an VA beim Predrive SD-Ventiltest |
| STAT_PREDR_WZ_TEST_SD_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | benötigte Zeit bis zum Erreichen des minimalen Druckabfalls beim Predrive SD-Ventiltest |
| STAT_PREDR_STROM_VA_WERT | Ampere | - | unsigned int | - | - | 1 | 1000 | - | Stromwert an VA-Ventil bei Erreichen der Grenzströme (vor Predrive) |
| STAT_PREDR_STROM_HA_WERT | Ampere | - | unsigned int | - | - | 1 | 1000 | - | Stromwert an HA-Ventil bei Erreichen der Grenzströme (vor Predrive) |
| STAT_PREDR_STROM_FS_WERT | Ampere | - | unsigned int | - | - | 1 | 1000 | - | Stromwert an FS-Ventil bei Erreichen der Grenzströme (vor Predrive) |
| STAT_PREDR_STROM_SD_WERT | Ampere | - | unsigned int | - | - | 1 | 1000 | - | Stromwert an SD-Ventil bei Erreichen der Grenzströme (vor Predrive) |
| STAT_PREDR_WZ_STROMLOS_WERT | ms | - | unsigned int | - | - | 1 | 1 | - | benötigte Zeit bis zum Unterschreiten der Grenzströme an VA-,HA-,FS- und  SD-Ventil (vor Predrive) |
| STAT_PREDR_N_PUMPE_WERT | 1/min | - | unsigned char | - | - | 25 | 1 | - | Pumpendrehzahl beim Predrive-Test |
| STAT_PREDR_T_AUSSEN_WERT | °C | - | unsigned char | - | - | 0,5 | 1 | -40 | Außentemperatur beim Predrive-Test |
| STAT_PREDR_T_MOTOR_WERT | °C | - | unsigned char | - | - | 1 | 1 | -48 | Motortemperatur beim Predrive-Test |
| STAT_FSP_PREDR_ERR_WERT | - | - | unsigned int | - | - | - | - | - | Fehlerstatus des Predrive-Tests |
| STAT_FSP_PREDR_WARN_WERT | - | - | unsigned int | - | - | - | - | - | Warnstatus des Predrive-Tests |

### RES_0XDB96

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_00_VCCOK_NR | 0/1 | - | unsigned int | 0x0001 | - | - | - | - | Versorgungsspannung VCC i.O. |
| STAT_01_VIOOK_NR | 0/1 | - | unsigned int | 0x0002 | - | - | - | - | Versorgungsspannung VIO i.O. |
| STAT_02_NR | 0/1 | - | unsigned int | 0x0004 | - | - | - | - | nicht belegt, immer 1 |
| STAT_03_OTEMP_NR | 0/1 | - | unsigned int | 0x0008 | - | - | - | - | Übertemperatur |
| STAT_04_TXENLOW_NR | 0/1 | - | unsigned int | 0x0010 | - | - | - | - | Tx Enable permanent low |
| STAT_05_BP2GND_NR | 0/1 | - | unsigned int | 0x0020 | - | - | - | - | Bus Plus Kurzschluss nach Masse |
| STAT_06_BP2VSUP_NR | 0/1 | - | unsigned int | 0x0040 | - | - | - | - | Bus Plus Kurzschluss nach Versorgung |
| STAT_07_BM2GND_NR | 0/1 | - | unsigned int | 0x0080 | - | - | - | - | Bus Minus Kurzschluss nach Masse |
| STAT_08_BM2VSUP_NR | 0/1 | - | unsigned int | 0x0100 | - | - | - | - | Bus Minus Kurzschluss nach Versorgung |
| STAT_09_OLOAD_NR | 0/1 | - | unsigned int | 0x0200 | - | - | - | - | Buslast zu hoch (Terminierung) |
| STAT_10_ULOAD_NR | 0/1 | - | unsigned int | 0x0400 | - | - | - | - | Buslast zu niedrig (Terminierung) |
| STAT_11_NR | 0/1 | - | unsigned int | 0x0800 | - | - | - | - | nicht belegt, immer 0 |
| STAT_12_OPERATIONSTATE_NR | 0/1 | - | unsigned int | 0x1000 | - | - | - | - | Betriebszustand (1=normal/0=Standby) |
| STAT_13_NR | 0/1 | - | unsigned int | 0x2000 | - | - | - | - | nicht belegt, immer 0 |
| STAT_14_NR | 0/1 | - | unsigned int | 0x4000 | - | - | - | - | nicht belegt, immer 0 |
| STAT_15_NR | 0/1 | - | unsigned int | 0x8000 | - | - | - | - | nicht belegt |

### RES_0X4102

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EIGDIAG_P_VA_U0_FSU_PRECHECK_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an VA, mit FSV unbestromt, am Anfang von Test Precheck |
| STAT_EIGDIAG_P_HA_U0_FSU_PRECHECK_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an HA, mit FSV unbestromt, am Anfang von Test Precheck |
| STAT_EIGDIAG_P_VA_U0_FSB_PRECHECK_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an VA, mit FSV bestromt, beim Test Precheck |
| STAT_EIGDIAG_P_HA_U0_FSB_PRECHECK_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an HA, mit FSV bestromt, beim Test Precheck |
| STAT_EIGDIAG_P_VA_UE_PRECHECK_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an VA, mit FSV unbestromt, am Ende von Test Precheck |
| STAT_EIGDIAG_P_HA_UE_PRECHECK_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an HA, mit FSV unbestromt, am Ende von Test Precheck |
| STAT_EIGDIAG_I_HA_MIN_FSUH_WERT | A | - | unsigned char | - | - | 1 | 100 | 0 | Strom am PDBV-HA, bei dem erstmals eine Reaktion im Druck zu erkennen ist (Vorbestromungspunkt) beim Test fsuH |
| STAT_EIGDIAG_P_VA_OE_RVU_FSUH_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an VA, bei voller Bestromung des PDBV-HA (FSV unbestromt, RV unbestromt), beim Test fsuH |
| STAT_EIGDIAG_P_HA_OE_RVU_FSUH_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an HA, bei voller Bestromung des PDBV-HA (FSV unbestromt, RV unbestromt), beim Test fsuH |
| STAT_EIGDIAG_P_VA_OE_RVB_FSUH_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an VA, bei voller Bestromung des PDBV-HA (FSV unbestromt, RV bestromt), beim Test fsuH |
| STAT_EIGDIAG_P_HA_OE_RVB_FSUH_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an HA, bei voller Bestromung des PDBV-HA (FSV unbestromt, RV bestromt), beim Test fsuH |
| STAT_EIGDIAG_T_P_HA_OE_DOWN_FSUH_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit, die zum signifikanten Abbau des Druckes an HA benötigt wird, nachdem beim PDBV-HA der Strom abgeschaltet wurde, beim Test fsuH |
| STAT_EIGDIAG_P_VA_UE_FSUH_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an VA, am Ende von Test fsuH |
| STAT_EIGDIAG_P_HA_UE_FSUH_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an HA, am Ende von Test fsuH |
| STAT_EIGDIAG_RPM2LOW_FSUH_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Statusflag, ob die zulässige Pumpendrehzahl unterschritten wurde, beim Test fsuH |
| STAT_EIGDIAG_RPM2HIGH_FSUH_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Statusflag, ob die zulässige Pumpendrehzahl überschritten wurde, beim Test fsuH |
| STAT_EIGDIAG_I_VA_MIN_FSUV_WERT | A | - | unsigned char | - | - | 1 | 100 | 0 | Strom am PDBVVA, bei dem erstmals eine Reaktion im Druck zu erkennen ist (Vorbestromungspunkt) beim Test fsuV |
| STAT_EIGDIAG_P_VA_OE_RVU_FSUV_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an VA, bei voller Bestromung des PDBV-VA (FSV unbestromt, RV unbestromt), beim Test fsuV |
| STAT_EIGDIAG_P_VA_OE_RVB_FSUV_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an VA, bei voller Bestromung des PDBV-VA (FSV unbestromt, RV bestromt), beim Test fsuV |
| STAT_EIGDIAG_T_P_VA_OE_DOWN_FSUV_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit, die zum signifikanten Abbau des Druckes an VA benötigt wird, nachdem beim PDBV-VA der Strom abgeschaltet wurde, beim Test fsuV |
| STAT_EIGDIAG_P_VA_UE_FSUV_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an VA, am Ende von Test fsuV |
| STAT_EIGDIAG_P_HA_UE_FSUV_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an HA, am Ende von Test fsuV |
| STAT_EIGDIAG_RPM2LOW_FSUV_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Statusflag, ob die zulässige Pumpendrehzahl unterschritten wurde, beim Test fsuV |
| STAT_EIGDIAG_RPM2HIGH_FSUV_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Statusflag, ob die zulässige Pumpendrehzahl überschritten wurde, beim Test fsuV |
| STAT_EIGDIAG_P_VA_U0_FSBHR_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an VA, am Anfang von Test fsbHr |
| STAT_EIGDIAG_P_HA_U0_FSBHR_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an HA, am Anfang von Test fsbHr |
| STAT_EIGDIAG_I_HA_MIN_FSBHR_WERT | A | - | unsigned char | - | - | 1 | 100 | 0 | Strom am PDBV-HA, bei dem erstmals eine Reaktion im Druck zu erkennen ist (Vorbestromungspunkt) beim Test fsbHr |
| STAT_EIGDIAG_P_VA_OE_FSBHR_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an VA, bei voller Bestromung des PDBV-HA (FSV bestromt, RV unbestromt), beim Test fsbHr |
| STAT_EIGDIAG_P_HA_OE_FSBHR_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an HA, bei voller Bestromung des PDBV-HA (FSV bestromt, RV unbestromt), beim Test fsbHr |
| STAT_EIGDIAG_T_LUFT_FSBHR_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit beim Solldrucksprung HA, die benötigt wurde, um die Luftschwelle (20 bar) zu erreichen, beim Test fsbHr |
| STAT_EIGDIAG_T_LUFT2SOLL_FSBHR_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit beim Solldrucksprung HA, die ab der Luftschwelle (20 bar) benötigt wurde, um den Solldruck (180 bar) zu erreichen, beim Test fsbHr |
| STAT_EIGDIAG_N_PUMPE_DS_FSBHR_WERT | 1/min | - | unsigned int | - | - | 1 | 1 | 0 | durchschnittliche Pumpendrehzahl beim Solldrucksprung HA, bis zum Erreichen des Solldruckes, beim Test fsbHr |
| STAT_EIGDIAG_DH_U0_OE_FSBHR_WERT | mm | - | char | - | - | 1 | 1 | 0 | virtuelle Höhenstandsänderung beim Solldrucksprung HA, zwischen Umlaufdruck und Solldruck, beim Test fsbHr |
| STAT_EIGDIAG_T_P_HA_OE_DOWN_FSBHR_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit, die zum signifikanten Abbau des Druckes an HA benötigt wird, nachdem beim PDBV-HA der Strom abgeschaltet wurde, beim Test fsbHr |
| STAT_EIGDIAG_P_HA_RV1_FSBHR_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an HA, vor dem Schalten des RV beim Test fsbHr |
| STAT_EIGDIAG_T_RV_DOWN_FSBHR_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit beim RV-Schalten, bis zu der ein signifikanter Druckabbau an der HA detektiert wurde, beim Test fsbHr |
| STAT_EIGDIAG_T_RV_UP_FSBHR_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit beim RV-Schalten, bis zu der ein erneuter signifikanter Druckaufbau an der HA detektiert wurde, beim Test fsbHr |
| STAT_EIGDIAG_DH_RV13_FSBHR_WERT | mm | - | char | - | - | 1 | 1 | 0 | virtuelle Höhenstandsänderung zwischen vor und kurz nach dem Schalten des RV, beim Test fsbHr |
| STAT_EIGDIAG_P_HA_RV4_FSBHR_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an HA, nach dem Schalten des RV, beim Test fsbHr |
| STAT_EIGDIAG_DH_RV14_FSBHR_WERT | mm | - | char | - | - | 1 | 1 | 0 | virtuelle Höhenstandsänderung zwischen vor und deutlich nach dem Schalten des RV, beim Test fsbHr |
| STAT_EIGDIAG_P_HA_RV_MIN_FSBHR_WERT | bar | - | int | - | - | 1 | 100 | 0 | minimaler Druck an HA, der während des RV-Schalten auftrat, beim Test fsbHr |
| STAT_EIGDIAG_P_HA_RV_MAX_FSBHR_WERT | bar | - | int | - | - | 1 | 100 | 0 | maximaler Druck an HA, der während des RV-Schalten auftrat, beim Test fsbHr |
| STAT_EIGDIAG_P_VA_UE_FSBHR_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an VA, am Ende von Test fsbHr |
| STAT_EIGDIAG_P_HA_UE_FSBHR_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an HA, am Ende von Test fsbHr |
| STAT_EIGDIAG_RPM2LOW_FSBHR_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Statusflag, ob die zulässige Pumpendrehzahl unterschritten wurde, beim Test fsbHr |
| STAT_EIGDIAG_RPM2HIGH_FSBHR_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Statusflag, ob die zulässige Pumpendrehzahl überschritten wurde, beim Test fsbHr |
| STAT_EIGDIAG_P_VA_U0_FSBHL_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an VA, am Anfang von Test fsbHl |
| STAT_EIGDIAG_P_HA_U0_FSBHL_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an HA, am Anfang von Test fsbHl |
| STAT_EIGDIAG_I_HA_MIN_FSBHL_WERT | A | - | unsigned char | - | - | 1 | 100 | 0 | Strom am PDBV-HA, bei dem erstmals eine Reaktion im Druck zu erkennen ist (Vorbestromungspunkt), beim Test fsbHl |
| STAT_EIGDIAG_P_VA_OE_FSBHL_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an VA, bei voller Bestromung des PDBV-HA (FSV bestromt, RV bestromt), beim Test fsbHl |
| STAT_EIGDIAG_P_HA_OE_FSBHL_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an HA, bei voller Bestromung des PDBV-HA (FSV bestromt, RV bestromt), beim Test fsbHl |
| STAT_EIGDIAG_T_LUFT_FSBHL_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit beim Solldrucksprung HA, die benötigt wurde, um die Luftschwelle (20 bar) zu erreichen, beim Test fsbHl |
| STAT_EIGDIAG_T_LUFT2SOLL_FSBHL_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit beim Solldrucksprung HA, die ab der Luftschwelle (20 bar) benötigt wurde, um den Solldruck (180 bar) zu erreichen, beim Test fsbHl |
| STAT_EIGDIAG_N_PUMPE_DS_FSBHL_WERT | 1/min | - | unsigned int | - | - | 1 | 1 | 0 | durchschnittliche Pumpendrehzahl beim Solldrucksprung HA, bis zum Erreichen des Solldruckes, beim Test fsbHl |
| STAT_EIGDIAG_DH_U0_OE_FSBHL_WERT | mm | - | char | - | - | 1 | 1 | 0 | virtuelle Höhenstandsänderung beim Solldrucksprung HA, zwischen Umlaufdruck und Solldruck, beim Test fsbHl |
| STAT_EIGDIAG_T_P_HA_OE_DOWN_FSBHL_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit, die zum signifikanten Abbau des Druckes an HA benötigt wird, nachdem beim PDBV-HA der Strom abgeschaltet wurde, beim Test fsbHl |
| STAT_EIGDIAG_P_HA_RV1_FSBHL_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an HA, vor dem Schalten des RV, beim Test fsbHl |
| STAT_EIGDIAG_T_RV_DOWN_FSBHL_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit beim RV-Schalten, bis zu der ein signifikanter Druckabbau an der HA detektiert wurde, beim Test fsbHl |
| STAT_EIGDIAG_T_RV_UP_FSBHL_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit beim RV-Schalten, bis zu der ein erneuter signifikanter Druckaufbau an der HA detektiert wurde, beim Test fsbHl |
| STAT_EIGDIAG_DH_RV13_FSBHL_WERT | mm | - | char | - | - | 1 | 1 | 0 | virtuelle Höhenstandsänderung zwischen vor und kurz nach dem Schalten des RV, beim Test fsbHl |
| STAT_EIGDIAG_P_HA_RV4_FSBHL_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an HA, nach dem Schalten des RV, beim Test fsbHl |
| STAT_EIGDIAG_DH_RV14_FSBHL_WERT | mm | - | char | - | - | 1 | 1 | 0 | virtuelle Höhenstandsänderung zwischen vor und deutlich nach dem Schalten des RV, beim Test fsbHl |
| STAT_EIGDIAG_P_HA_RV_MIN_FSBHL_WERT | bar | - | int | - | - | 1 | 100 | 0 | minimaler Druck an HA, der während des RV-Schalten auftrat, beim Test fsbHl |
| STAT_EIGDIAG_P_HA_RV_MAX_FSBHL_WERT | bar | - | int | - | - | 1 | 100 | 0 | maximaler Druck an HA, der während des RV-Schalten auftrat, beim Test fsbHl |
| STAT_EIGDIAG_P_VA_UE_FSBHL_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an VA, am Ende von Test fsbHl |
| STAT_EIGDIAG_P_HA_UE_FSBHL_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an HA, am Ende von Test fsbHl |
| STAT_EIGDIAG_RPM2LOW_FSBHL_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Statusflag, ob die zulässige Pumpendrehzahl unterschritten wurde, beim Test fsbHl |
| STAT_EIGDIAG_RPM2HIGH_FSBHL_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Statusflag, ob die zulässige Pumpendrehzahl überschritten wurde, beim Test fsbHl |
| STAT_EIGDIAG_I_VA_MIN_FSBVR_WERT | A | - | unsigned char | - | - | 1 | 100 | 0 | Strom am PDBV-VA, bei dem erstmals eine Reaktion im Druck zu erkennen ist (Vorbestromungspunkt), beim Test fsbVr |
| STAT_EIGDIAG_P_VA_OE_FSBVR_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an VA, bei voller Bestromung des PDBV-VA (FSV bestromt, RV unbestromt), beim Test fsbVr |
| STAT_EIGDIAG_P_HA_OE_FSBVR_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an HA, bei voller Bestromung des PDBV-VA (FSV bestromt, RV unbestromt), beim Test fsbVr |
| STAT_EIGDIAG_T_LUFT_FSBVR_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit beim Solldrucksprung VA, die benötigt wurde, um die Luftschwelle (20 bar) zu erreichen, beim Test fsbVr |
| STAT_EIGDIAG_T_LUFT2SOLL_FSBVR_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit beim Solldrucksprung VA, die ab der Luftschwelle (20 bar) benötigt wurde, um den Solldruck (180 bar) zu erreichen, beim Test fsbVr |
| STAT_EIGDIAG_N_PUMPE_DS_FSBVR_WERT | 1/min | - | unsigned int | - | - | 1 | 1 | 0 | durchschnittliche Pumpendrehzahl beim Solldrucksprung HA, bis zum Erreichen des Solldruckes, beim Test fsbVr |
| STAT_EIGDIAG_DH_U0_OE_FSBVR_WERT | mm | - | char | - | - | 1 | 1 | 0 | virtuelle Höhenstandsänderung beim Solldrucksprung VA, zwischen Umlaufdruck und Solldruck, beim Test fsbVr |
| STAT_EIGDIAG_T_P_VA_OE_DOWN_FSBVR_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit, die zum signifikanten Abbau des Druckes an VA benötigt wird, nachdem beim PDBV-VA der Strom abgeschaltet wurde, beim Test fsbVr |
| STAT_EIGDIAG_P_VA_RV1_FSBVR_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an VA, vor dem Schalten des RV, beim Test fsbVr |
| STAT_EIGDIAG_T_RV_DOWN_FSBVR_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit beim RV-Schalten, bis zu der ein signifikanter Druckabbau an der VA detektiert wurde, beim Test fsbVr |
| STAT_EIGDIAG_T_RV_UP_FSBVR_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit beim RV-Schalten, bis zu der ein erneuter signifikanter Druckaufbau an der VA detektiert wurde, beim Test fsbVr |
| STAT_EIGDIAG_DH_RV13_FSBVR_WERT | mm | - | char | - | - | 1 | 1 | 0 | virtuelle Höhenstandsänderung zwischen vor und kurz nach dem Schalten des RV, beim Test fsbVr |
| STAT_EIGDIAG_P_VA_RV4_FSBVR_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an VA, nach dem Schalten des RV, beim Test fsbVr |
| STAT_EIGDIAG_DH_RV14_FSBVR_WERT | mm | - | char | - | - | 1 | 1 | 0 | virtuelle Höhenstandsänderung  zwischen vor und deutlich nach dem Schalten des RV, beim Test fsbVr |
| STAT_EIGDIAG_P_VA_RV_MIN_FSBVR_WERT | bar | - | int | - | - | 1 | 100 | 0 | minimaler Druck an VA, der während des RV-Schalten auftrat, beim Test fsbVr |
| STAT_EIGDIAG_P_VA_RV_MAX_FSBVR_WERT | bar | - | int | - | - | 1 | 100 | 0 | maximaler Druck an VA, der während des RV-Schalten auftrat, beim Test fsbVr |
| STAT_EIGDIAG_P_VA_UE_FSBVR_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an VA, am Ende von Test fsbVr |
| STAT_EIGDIAG_P_HA_UE_FSBVR_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an HA, am Ende von Test fsbVr |
| STAT_EIGDIAG_RPM2LOW_FSBVR_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Statusflag, ob die zulässige Pumpendrehzahl unterschritten wurde, beim Test fsbVr |
| STAT_EIGDIAG_RPM2HIGH_FSBVR_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Statusflag, ob die zulässige Pumpendrehzahl überschritten wurde, beim Test fsbVr |
| STAT_EIGDIAG_I_VA_MIN_FSBVL_WERT | A | - | unsigned char | - | - | 1 | 100 | 0 | Strom am PDBV-VA, bei dem erstmals eine Reaktion im Druck zu erkennen ist (Vorbestromungspunkt), beim Test fsbVl |
| STAT_EIGDIAG_P_VA_OE_FSBVL_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an VA, bei voller Bestromung des PDBV-VA (FSV bestromt, RV bestromt), beim Test fsbVl |
| STAT_EIGDIAG_P_HA_OE_FSBVL_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an HA, bei voller Bestromung des PDBV-VA (FSV bestromt, RV bestromt), beim Test fsbVl |
| STAT_EIGDIAG_T_LUFT_FSBVL_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit beim Solldrucksprung VA, die benötigt wurde, um die Luftschwelle (20 bar) zu erreichen, beim Test fsbVl |
| STAT_EIGDIAG_T_LUFT2SOLL_FSBVL_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit beim Solldrucksprung VA, die ab der Luftschwelle (20 bar) benötigt wurde, um den Solldruck (180 bar) zu erreichen, beim Test fsbVl |
| STAT_EIGDIAG_N_PUMPE_DS_FSBVL_WERT | 1/min | - | unsigned int | - | - | 1 | 1 | 0 | durchschnittliche Pumpendrehzahl beim Solldrucksprung HA, bis zum Erreichen des Solldruckes, beim Test fsbVl |
| STAT_EIGDIAG_DH_U0_OE_FSBVL_WERT | mm | - | char | - | - | 1 | 1 | 0 | virtuelle Höhenstandsänderung beim Solldrucksprung VA, zwischen Umlaufdruck und Solldruck, beim Test fsbVl |
| STAT_EIGDIAG_DP_VA_SD_FSBVL_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druckänderung an VA, zwischen SDV unbestromt und bestromt bei Solldruckniveau (Feststrom), beim Test fsbVl |
| STAT_EIGDIAG_P_VA_FSU_FSBVL_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an VA, nach dem Entsstromen des FSV und Beibehaltung des PDBV-VA-Stromes, beim Test fsbVl |
| STAT_EIGDIAG_DH_FSU_FSBVL_WERT | mm | - | char | - | - | 1 | 1 | 0 | virtuelle Höhenstandsänderung zwischen Entstromung des FSV bei anliegendem Solldruck an VA und einer Wartezeit von 4 Sekunden, beim Test fsbVl |
| STAT_EIGDIAG_T_P_VA_FSU_DOWN_FSBVL_WERT | ms | - | unsigned int | - | - | 10 | 1 | 0 | Zeit, die zum signifikanten Abbau des Druckes an VA benötigt wird, nachdem beim PDBV-VA der Strom abgeschaltet wurde, beim Test fsbVl |
| STAT_EIGDIAG_P_VA_UE_FSBVL_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an VA, am Ende von Test fsbVl |
| STAT_EIGDIAG_P_HA_UE_FSBVL_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an HA, am Ende von Test fsbVl |
| STAT_EIGDIAG_RPM2LOW_FSBVL_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Statusflag, ob die zulässige Pumpendrehzahl unterschritten wurde, beim Test fsbVl |
| STAT_EIGDIAG_RPM2HIGH_FSBVL_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Statusflag, ob die zulässige Pumpendrehzahl überschritten wurde, beim Test fsbVl |
| STAT_EIGDIAG_P_HA_U1_FSBVH800_WERT | bar | - | int | - | - | 1 | 100 | 0 | Basisdruck an HA, vor Bestromung des PDBV-VA, (bei Basisbestromung des PDBV-HA), beim Test fsbVH800 |
| STAT_EIGDIAG_P_VA_O1_FSBVH800_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an VA, nach Bestromung des PDBV-VA, (bei Basisbestromung des PDBV-HA), beim Test fsbVH800 |
| STAT_EIGDIAG_P_HA_O1_FSBVH800_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druck an HA, nach Bestromung des PDBV-VA, (bei Basisbestromung des PDBV-HA), beim Test fsbVH800 |
| STAT_EIGDIAG_DP_HA_U1O1_FSBVH800_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druckdelta an HA, zwischen unbestromtem und bestromtem PDBV-VA, (bei Basisbestromung des PDBV-HA), beim Test fsbVH800 |
| STAT_EIGDIAG_P_VA_UE_FSBVH800_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an VA, am Ende von Test fsbVH800 |
| STAT_EIGDIAG_P_HA_UE_FSBVH800_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an HA, am Ende von Test fsbVH800 |
| STAT_EIGDIAG_STATUS_PDBVA_FSBV66PZT_WERT | - | - | char | - | - | 1 | 1 | 0 | Ventilstatus vom PDBV-VA, beim Drucksprung-Überschwingertest (möglich: -2, -1,+1,+2,+3=IO), beim Test fsbV66pzt |
| STAT_EIGDIAG_P_VA_OE2_FSBV66PZT_WERT | bar | - | int | - | - | 1 | 100 | 0 | Solldruck an VA, beim VA-Drucksprung/Überschwingertest zwischen erstem Hochpunkt und erstem Tiefpunkt (nach Überschwinger) des Druckverlaufes, beim Test fsbV66pzt |
| STAT_EIGDIAG_DP_VA_O1O2_FSBV66PZT_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druckdelta an VA, beim VA-Drucksprung/Überschwingertest zwischen erstem Tiefpunkt (nach Überschwinger) und zweitem Hochpunkt des Druckverlaufes, beim Test fsbV66pzt |
| STAT_EIGDIAG_DP_VA_O2O3_FSBV66PZT_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druckdelta an VA, beim Test fsbV66pzt |
| STAT_EIGDIAG_P_VA_UE_FSBV66PZT_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an VA, am Ende von Test fsbV66pzt |
| STAT_EIGDIAG_P_HA_UE_FSBV66PZT_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an HA, am Ende von Test fsbV66pzt |
| STAT_EIGDIAG_STATUS_PDBHA_FSBH66PZT_WERT | - | - | char | - | - | 1 | 1 | 0 | Ventilstatus vom PDBV-HA, beim Überschwingertest (möglich: -2, -1,+1,+2,+3=IO), beim Test fsbH66pzt |
| STAT_EIGDIAG_P_HA_OE2_FSBH66PZT_WERT | bar | - | int | - | - | 1 | 100 | 0 | Solldruck an HA, der beim HA-Drucksprung/Überschwingertest angesprungen wird, beim Test fsbH66pzt |
| STAT_EIGDIAG_DP_HA_O1O2_FSBH66PZT_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druckdelta an HA, beim HA-Drucksprung/Überschwingertest zwischen erstem Hochpunkt und erstem Tiefpunkt (nach Überschwinger) des Druckverlaufes, beim Test fsbH66pzt |
| STAT_EIGDIAG_DP_HA_O2O3_FSBH66PZT_WERT | bar | - | int | - | - | 1 | 100 | 0 | Druckdelta an HA, beim HA-Drucksprung/Überschwingertest zwischen erstem Tiefpunkt (nach Überschwinger) und zweitem Hochpunkt des Druckverlaufes, beim Test fsbH66pzt |
| STAT_EIGDIAG_P_VA_UE_FSBH66PZT_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an VA, am Ende von Test fsbH66pzt |
| STAT_EIGDIAG_P_HA_UE_FSBH66PZT_WERT | bar | - | int | - | - | 1 | 100 | 0 | Umlaufdruck an HA, am Ende von Test fsbH66pzt |

### TAB_EIGDIAG_FEHLER_ID

| FEHLER_ID_WERT | FEHLER_TEXT_Z1 | FEHLER_TEXT_Z2 | MASSNAHME_TEXT_Z1 | MASSNAHME_TEXT_Z2 | MASSNAHME_TEXT_Z3 | MASSNAHME_TEXT_Z4 | MASSNAHME_TEXT_Z5 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | Das hydraulische Verhalten des ARS-System ist IO | - | keine Maßnahme nötig | - | - | - | - |
| 3101 | Nullpunkt der Drucksensoren fehlerhaft (Abweichung >1 bar) | - | Nullpunkt der Drucksensoren neu lernen | - | - | - | - |
| 3201 | Druckwert an HA unplausibel | - | Leitungen und Spannungsversorgung vom Steuergerät zu den Drucksensoren überprüfen | Ventilblock tauschen | - | - | - |
| 3202 | PDB-Ventil VA klemmt | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3203 | Druckwert an VA unplausibel | - | Leitungen und Spannungsversorgung vom Steuergerät zu den Drucksensoren überprüfen | Ventilblock tauschen | - | - | - |
| 3204 | Umlaufdruck zu hoch | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Leitungen und Spannungsversorgung vom Steuergerät zu den Drucksensoren überprüfen | Ventilblock tauschen | - | - |
| 3205 | Rücklaufdruck zu hoch | - | Rücklauf von Ventilblock zum Ölbehälter auf Quetschungen prüfen | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - |
| 3206 | PDB-Ventil HA klemmt | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3301 | Druckwert an HA unplausibel | - | Leitungen und Spannungsversorgung vom Steuergerät zu den Drucksensoren überprüfen | Ventilblock tauschen | - | - | - |
| 3302 | PDB-Ventile oder Drucksensoren defekt | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | Leitungen und Spannungsversorgung vom Steuergerät zu den Drucksensoren überprüfen | - | - | - |
| 3401 | Signal vom Schaltsstellungssensor fehlerhaft | - | Leitungen und Spannungsversorgung vom Steuergerät zum SSE-Sensor überprüfen | Ventilblock tauschen | - | - | - |
| 3402 | Richtungsventil klemmt | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | Leitungen und Spannungsversorgung vom Steuergerät zum SSE-Sensor überprüfen | - | - | - |
| 3501 | Druckwert an HA unplausibel | - | Leitungen und Spannungsversorgung vom Steuergerät zu den Drucksensoren überprüfen | Ventilblock tauschen | - | - | - |
| 3502 | Druckwert an VA unplausibel | - | Leitungen und Spannungsversorgung vom Steuergerät zu den Drucksensoren überprüfen | Ventilblock tauschen | - | - | - |
| 3503 | Druckwerte zueinander unplausibel | - | Leitungen und Spannungsversorgung vom Steuergerät zu den Drucksensoren überprüfen | Ventilblock tauschen | - | - | - |
| 3504 | PDB-Ventile VA und HA vertauscht | - | Leitungen von den PDB-Ventilen zum Steuergerät überprüfen | Steckercodierung und Steckerbelegung nach Schaltplan kontrollieren | - | - | - |
| 3505 | Sporadisch: PDB-Ventil VA klemmt zu | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - |
| 3506 | Druckwert an HA unplausibel | - | Leitungen und Spannungsversorgung vom Steuergerät zu den Drucksensoren überprüfen | Ventilblock tauschen | - | - | - |
| 3507 | Druckwert an VA unplausibel | - | Leitungen und Spannungsversorgung vom Steuergerät zu den Drucksensoren überprüfen | Ventilblock tauschen | - | - | - |
| 3508 | Druckwerte zueinander unplausibel | - | Leitungen und Spannungsversorgung vom Steuergerät zu den Drucksensoren überprüfen | Ventilblock tauschen | - | - | - |
| 3699 | Maximale Drehzahl überschritten | - | Eigendiagnose wiederholen und richtigen Leerlaufdrehzahl sicherstellen, u.U. DME/DDE kontrollieren | - | - | - | - |
| 3601 | PDB-Ventile oder Drucksensoren defekt | - | Ventilblock tauschen | - | - | - | - |
| 3602 | Kennlinie PDB-Ventil HA falsch | - | Ventilblock tauschen | - | - | - | - |
| 3603 | Kennlinie PDB-Ventil VA falsch | - | Ventilblock tauschen | - | - | - | - |
| 3604 | Sporadisch: PDB-Ventil VA klemmt zu | - | Ventilblock tauschen | - | - | - | - |
| 3798 | Minimale Drehzahl unterschritten | - | Eigendiagnose wiederholen und richtigen Leerlaufdrehzahl sicherstellen, u.U. DME/DDE kontrollieren | - | - | - | - |
| 3711 | Volumenstrom zu gering | - | Hydraulikpumpe prüfen (Akustik, Antrieb, Zulauf, Ölbehälter, Leckage) | Ventilblock tauschen | - | - | - |
| 3712 | Volumenstrom zu gering | - | Hydraulikpumpe prüfen (Akustik, Antrieb, Zulauf, Ölbehälter, Leckage) | Ventilblock tauschen | - | - | - |
| 3713 | Saugdrosselventil klemmt in Stellung gedrosselt | - | Leitungen vom SD-Ventil (Saugdrossel in Tandempumpe) zum Steuergerät überprüfen | Hydraulikpumpe prüfen (Akustik, Antrieb, Zulauf, Ölbehälter, Leckage) | - | - | - |
| 3714 | PDB-Ventil VA und HA klemmt | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3715 | Volumenstrom zu gering oder PDB-Ventil VA und HA | - | Hydraulikpumpe prüfen (Akustik, Antrieb, Zulauf, Ölbehälter, Leckage) | Ventilblock tauschen | - | - | - |
| 3716 | Stabi VA hat interne Leckage | - | Aktiven Stabilisator an VA tauschen | - | - | - | - |
| 3717 | FS-Ventil klemmt in Stellung unbestromt | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3718 | Stabi VA hat interne Leckage | - | Aktiven Stabilisator an VA tauschen | - | - | - | - |
| 3719 | FS-Ventil klemmt in Stellung unbestromt | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3720 | Stabi VA hat interne Leckage | - | Aktiven Stabilisator an VA tauschen | - | - | - | - |
| 3721 | Volumenstrom stark druckabhängig | - | Hydraulikpumpe prüfen (Akustik, Antrieb, Zulauf, Ölbehälter, Leckage) | Aktiven Stabilisator an VA tauschen | - | - | - |
| 3722 | Kennlinie PDB-Ventil VA und HA falsch | - | Ventilblock tauschen | - | - | - | - |
| 3723 | PDB-Ventil VA und HA klemmen oder kaum Volumenstrom | - | Hydraulikpumpe prüfen (Akustik, Antrieb, Zulauf, Ölbehälter, Leckage) | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - |
| 3731 | Drucksensoren VA und HA vertauscht | - | Leitungen und Spannungsversorgung vom Steuergerät zu den Drucksensoren überprüfen | Steckercodierung und Steckerbelegung nach Schaltplan kontrollieren | - | - | - |
| 3732 | PDB-Ventil VA klemmt auf | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3733 | Stabi VA hat interne Leckage | - | Aktiven Stabilisator an VA tauschen | - | - | - | - |
| 3734 | PDB-Ventil VA klemmt auf | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3735 | Stabi VA hat interne Leckage | - | Aktiven Stabilisator an VA tauschen | - | - | - | - |
| 3736 | PDB-Ventil VA klemmt auf | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3737 | PDB-Ventil VA klemmt auf | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3738 | Stabi VA Leckage oder PDB-Ventil VA klemmt auf | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | Ventilblock tauschen | - | - |
| 3751 | Stabi VA hat interne Leckage | - | Aktiven Stabilisator an VA tauschen | - | - | - | - |
| 3752 | PDB-Ventil HA klemmt auf | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3753 | Stabi VA hat interne Leckage | - | Aktiven Stabilisator an VA tauschen | - | - | - | - |
| 3754 | PDB-Ventil HA klemmt auf | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3755 | Stabi HA Leckage oder PDB-Ventil HA klemmt auf | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an HA tauschen | Ventilblock tauschen | - | - |
| 3756 | Stabi VA oder HA Leckage oder PDB-Ventil VA klemmt auf | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an HA tauschen | Aktiven Stabilisator an VA tauschen | Ventilblock tauschen | - |
| 3757 | PDB-Ventil HA klemmt auf oder SchweMo HA | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Ventilblock tauschen | Aktiven Stabilisator an HA tauschen | - | - |
| 3758 | Stabi HA hat interne Leckage oder PDB-Ventil HA klemmt | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an HA tauschen | Ventilblock tauschen | - | - |
| 3771 | Sporadisch: Stabi VA Leckage | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | - | - | - |
| 3772 | Sporadisch: Stabi VA Leckage | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | - | - | - |
| 3773 | Sporadisch: Stabi VA Leckage | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | - | - | - |
| 3774 | Sporadisch: Stabi VA Leckage | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | - | - | - |
| 3899 | Maximale Drehzahl überschritten | - | Eigendiagnose wiederholen und richtigen Leerlaufdrehzahl sicherstellen, u.U. DME/DDE kontrollieren | - | - | - | - |
| 3801 | FS-Ventil klemmt in Stellung bestromt | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3802 | Sporadisch: FS-Ventil klemmt in Regelpos. | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3803 | Druckwert an HA zu hoch | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Ventilblock tauschen | - | - | - |
| 3810 | Sporadisch: FS-Ventil klemmt in Regelpos. | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Ventilblock tauschen | - | - | - |
| 3998 | Minimale Drehzahl unterschritten | - | Eigendiagnose wiederholen und richtigen Leerlaufdrehzahl sicherstellen, u.U. DME/DDE kontrollieren | - | - | - | - |
| 3902 | Volumenstrom zu gering | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Hydraulikpumpe prüfen (Akustik, Antrieb, Zulauf, Ölbehälter, Leckage) | - | - | - |
| 3903 | Saugdrosselventil klemmt in Stellung gedrosselt | - | Hydraulikpumpe prüfen (Akustik, Antrieb, Zulauf, Ölbehälter, Leckage) | Leitungen vom SD-Ventil (Saugdrossel in Tandempumpe) zum Steuergerät überprüfen | - | - | - |
| 3904 | Drücke über FS-Ventil zu gering | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - |
| 3905 | PDB-Ventil VA klemmt auf | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3906 | Druckwert an VA zu niedrig | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3907 | PDB-Ventil HA klemmt auf | - | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - | - |
| 3908 | Sporadisch: PDB-Ventil HA klemmt auf | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - |
| 3909 | Saugdrosselventil klemmt in Stellung ungedrosselt | - | Leitungen vom SD-Ventil (Saugdrossel in Tandempumpe) zum Steuergerät überprüfen | Hydraulikpumpe prüfen (Akustik, Antrieb, Zulauf, Ölbehälter, Leckage) | - | - | - |
| 4001 | PDB-Ventil HA klemmt auf oder SchweMo VA | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Ventilblock tauschen | Aktiven Stabilisator an VA tauschen | - | - |
| 4002 | Sporadisch: Stabi VA Leckage | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | Ventilblock tauschen | - | - |
| 4003 | PDB-Ventil HA oder SchweMo VA oder HA | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Ventilblock tauschen | Aktiven Stabilisator an VA tauschen | Aktiven Stabilisator an HA tauschen | - |
| 4004 | Sporadisch: Stabi VA oder HA Leckage | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | Aktiven Stabilisator an HA tauschen | - | - |
| 4005 | Stabi VA oder HA mechanisch lose | - | Stabilisatoren und Pendelstützen auf Beschädigung (Befestigung, Bruch, Knicken) prüfen | - | - | - | - |
| 4006 | Wankbewegung zu langsam | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Verstelldämpfung auf Leichtgängigkeit Prüfen (Radknoten mit INPA auf weich stellen!) | Ventilblock tauschen | - | - |
| 4007 | Fahrwerk oder Schwenkmotor schwergängig | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Luftfeder (EHC) Schiefstand kontrollieren und ggf. korrigieren | Verstelldämpfung auf Leichtgängigkeit Prüfen (Radknoten mit INPA auf weich stellen!) | je eine Pendelstütze lösen und Leichtgängigkeit der Stabis VA/HA prüfen (Motor muss laufen wegen FS-Ventil!) | Ventilblock tauschen |
| 4198 | Minimale Drehzahl unterschritten | - | Eigendiagnose wiederholen und richtigen Leerlaufdrehzahl sicherstellen, u.U. DME/DDE kontrollieren | - | - | - | - |
| 4101 | Stabi VA hat interne Leckage | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | - | - | - |
| 4102 | Nix gefunden | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | Hydraulikpumpe prüfen (Akustik, Antrieb, Zulauf, Ölbehälter, Leckage) | - | - |
| 4103 | Sporadisch: Stabi VA Leckage oder Volumenstrom zu klein | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | Hydraulikpumpe prüfen (Akustik, Antrieb, Zulauf, Ölbehälter, Leckage) | - | - |
| 4104 | PDB-Ventil HA klemmt | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - |
| 4105 | Nix gefunden | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | - | - | - |
| 4106 | Druckaufbauzeit an VA etwas zu langsam | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | Aktiven Stabilisator an HA tauschen | - |
| 4107 | Sporadisch: Stabi VA Leckage | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | - | - | - |
| 4108 | Sporadisch: Stabi VA Leckage oder PDB-Ventil VA klemmt | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - |
| 4109 | Sporadisch: PDB-Ventil HA klemmt | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | - | - | - |
| 4110 | Luft im System | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Bei kurvenreicher Fahrt wird das System u.U. besser entlüftet | - | - | - |
| 4111 | Sporadisch: Stabi VA oder HA oder PDB-Ventil VA | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | Aktiven Stabilisator an HA tauschen | - | - |
| 4112 | Sporadisch: Stabi VA Leckage | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | - | - | - |
| 4113 | Sporadisch: Stabi VA oder HA Leckage | - | Eigendiagnose wiederholen, ggf. mehrmals (mindestens 3 mal mit Fehler!) erst dann Teile tauschen | Aktiven Stabilisator an VA tauschen | Ventilblock tauschen und auf Schmutz im Öl achten, u. U. Verschmutzungsquellen ermitteln | Aktiven Stabilisator an HA tauschen | - |
| 4201 | PDB-Ventil VA, Vorbestromungspunkt zu hoch | - | Ventilblock tauschen | - | - | - | - |
| 4202 | PDB-Ventil HA, Vorbestromungspunkt zu hoch | - | Ventilblock tauschen | - | - | - | - |
| 4203 | PDB-Ventil VA und HA, Vorbestromungspunkt zu hoch | - | Ventilblock tauschen | - | - | - | - |
| 4204 | PDB-Ventil VA, Vorbestromungspunkt zu niedrig | - | Ventilblock tauschen | - | - | - | - |
| 4205 | PDB-Ventil HA, Vorbestromungspunkt zu niedrig | - | Ventilblock tauschen | - | - | - | - |
| 4206 | PDB-Ventil VA und HA, Vorbestromungspunkt zu niedrig | - | Ventilblock tauschen | - | - | - | - |
| 4301 | Fahrzeug wankt zu wenig (einseitig) | - | Luftfeder (EHC) Schiefstand kontrollieren und ggf. korrigieren | Fahrwerk auf Leichtgängigkeit überprüfen (Radknoten mit INPA auf weich und Motor läuft wegen FS-Ventil!) | Verstelldämpfung auf Leichtgängigkeit Prüfen (Radknoten mit INPA auf weich stellen!) | Ventilblock tauschen | - |
| 4302 | Fahrzeug wankt zu wenig (einseitig) | - | Luftfeder (EHC) Schiefstand kontrollieren und ggf. korrigieren | Fahrwerk auf Leichtgängigkeit überprüfen (Radknoten mit INPA auf weich und Motor läuft wegen FS-Ventil!) | Verstelldämpfung auf Leichtgängigkeit Prüfen (Radknoten mit INPA auf weich stellen!) | Ventilblock tauschen | - |
| 4303 | Fahrzeug wankt zu wenig (beidseitig) | - | Fahrwerk auf Leichtgängigkeit überprüfen (Radknoten mit INPA auf weich und Motor läuft wegen FS-Ventil!) | Verstelldämpfung auf Leichtgängigkeit Prüfen (Radknoten mit INPA auf weich stellen!) | Luftfeder (EHC) Schiefstand kontrollieren und ggf. korrigieren | Ventilblock tauschen | - |
| 9999 | unbekannter Fehler | - | - | - | - | - | - |
