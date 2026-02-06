# vdc_25.prg

## General

|  |  |
| --- | --- |
| File | vdc_25.prg |
| Type | PRG |
| Jobs | 46 |
| Tables | 91 |
| Origin | BMW EF-441 Bernhard_Schmidt |
| Revision | 1.301 |
| Author | ContiTemic CCHSCE AndersM |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Vertical Dynamic Control |  |  |
| ORIGIN | string | BMW EF-441 Bernhard_Schmidt |  |  |
| REVISION | string | 1.301 |  |  |
| AUTHOR | string | ContiTemic CCHSCE AndersM |  |  |
| COMMENT | string |  |  |  |
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

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events [$02 eventWindowTime - infinite (nur 35up)]

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
| 0x027600 | Energiesparmode - aktiv --- (Transportmodus aktiv) | 0 |
| 0x02FF76 | Diagnosemaster - Dummy Application DTC --- (Test Diagnosemaster: unbedeutender Fehler ) | 1 |
| 0x482880 | Spannungsversorgung - KL30 Überspannung | 1 |
| 0x482881 | Spannungsversorgung - KL30 Unterspannung | 1 |
| 0x482882 | Spannungsversorgung - KL30 Niedrigspannung | 1 |
| 0x482884 | Spannungsversorgung - KL15 Überspannung | 1 |
| 0x482885 | Spannungsversorgung - KL15 Unterspannung | 1 |
| 0x482886 | Spannungsversorgung - KL15 Niedrigspannung | 1 |
| 0x482889 | Steuergerät intern - Software | 0 |
| 0x48288A | Steuergerät intern - Hardware | 0 |
| 0x482893 | Codierung - Falsches Fahrzeug | 0 |
| 0x482894 | Codierung - Transaktion gescheitert | 0 |
| 0x482895 | Codierung - Signatur fehlerhaft | 0 |
| 0x482896 | Codierung - Steuergeraet nicht codiert | 0 |
| 0x482897 | Codierung - ungueltige Daten | 0 |
| 0x48289F | Codierung - Variantencodierung - ungültig | 0 |
| 0x4828B0 | Statusfehler - Klemmen, ID: KLEMMEN | 0 |
| 0x4828B1 | Fahrzeugszustandsmanagement - Aktive Netzwerkfehlersperre - Ersatzeintrag | 0 |
| 0x482940 | Radbeschleunigungssensor - vorne links - Sensor 1 - - Wert - oberhalb Schwelle | 0 |
| 0x482941 | Radbeschleunigungssensor - vorne links - Sensor 1 - - Wert - unterhalb Schwelle | 0 |
| 0x482943 | Radbeschleunigungssensor - vorne links - Sensor 1 - - Wert - unplausibel | 0 |
| 0x482944 | Radbeschleunigungssensor - vorne rechts - Sensor 2 - - Wert - oberhalb Schwelle | 0 |
| 0x482945 | Radbeschleunigungssensor - vorne rechts - Sensor 2 - - Wert - unterhalb Schwelle | 0 |
| 0x482947 | Radbeschleunigungssensor - vorne rechts - Sensor 2 - - Wert - unplausibel | 0 |
| 0x482948 | Radbeschleunigungssensor - hinten links - Sensor 3 - - Wert - oberhalb Schwelle | 0 |
| 0x482949 | Radbeschleunigungssensor - hinten links - Sensor 3 - - Wert - unterhalb Schwelle | 0 |
| 0x48294B | Radbeschleunigungssensor - hinten links - Sensor 3 - - Wert - unplausibel | 0 |
| 0x48294C | Radbeschleunigungssensor - hinten rechts - Sensor 4 - - Wert - oberhalb Schwelle | 0 |
| 0x48294D | Radbeschleunigungssensor - hinten rechts - Sensor 4 - - Wert - unterhalb Schwelle | 0 |
| 0x48294F | Radbeschleunigungssensor - hinten rechts - Sensor 4 - - Wert - unplausibel | 0 |
| 0x482951 | Radbeschleunigungssensor - vorne links - Sensor 1 - - Lernen - Nullpunkt nicht gelernt | 0 |
| 0x482952 | Radbeschleunigungssensor - vorne links - Sensor 1 - - Lernen - Sensorparameter nicht codiert | 0 |
| 0x482955 | Radbeschleunigungssensor - vorne rechts - Sensor 2 - - Lernen - Nullpunkt nicht gelernt | 0 |
| 0x482956 | Radbeschleunigungssensor - vorne rechts - Sensor 2 - - Lernen - Sensorparameter nicht codiert | 0 |
| 0x482959 | Radbeschleunigungssensor - hinten links - Sensor 3 - - Lernen - Nullpunkt nicht gelernt | 0 |
| 0x48295A | Radbeschleunigungssensor - hinten links - Sensor 3 - - Lernen - Sensorparameter nicht codiert | 0 |
| 0x48295D | Radbeschleunigungssensor - hinten rechts - Sensor 4 - - Lernen - Nullpunkt nicht gelernt | 0 |
| 0x48295E | Radbeschleunigungssensor - hinten rechts - Sensor 4 - - Lernen - Sensorparameter nicht codiert | 0 |
| 0x482960 | Radbeschleunigungssensor - vorne links - Sensor 1 - - Versorgung - Überspannung | 0 |
| 0x482961 | Radbeschleunigungssensor - vorne links - Sensor 1 - - Versorgung - Unterspannung | 0 |
| 0x482964 | Radbeschleunigungssensor - vorne rechts - Sensor 2 - - Versorgung - Überspannung | 0 |
| 0x482965 | Radbeschleunigungssensor - vorne rechts - Sensor 2 - - Versorgung - Unterspannung | 0 |
| 0x482968 | Radbeschleunigungssensor - hinten links - Sensor 3 - - Versorgung - Überspannung | 0 |
| 0x482969 | Radbeschleunigungssensor - hinten links - Sensor 3 - - Versorgung - Unterspannung | 0 |
| 0x48296C | Radbeschleunigungssensor - hinten rechts - Sensor 4 - - Versorgung - Überspannung | 0 |
| 0x48296D | Radbeschleunigungssensor - hinten rechts - Sensor 4 - - Versorgung - Unterspannung | 0 |
| 0x482970 | Radbeschleunigungssensor - Allgemein - Verschränkungsplausibilität Achsplausi Vorne | 0 |
| 0x482971 | Radbeschleunigungssensor - Allgemein - Verschränkungsplausibilität Achsplausi Hinten | 0 |
| 0x4829C0 | Hoehenstandssensor - vorne links - Sensor 1 - - Wert - unplausibel | 0 |
| 0x4829C1 | Hoehenstandssensor - vorne rechts - Sensor 2 - - Wert - unplausibel | 0 |
| 0x4829C2 | Hoehenstandssensor - hinten links - Sensor 3 - - Wert - unplausibel | 0 |
| 0x4829C3 | Hoehenstandssensor - hinten rechts - Sensor 4 - - Wert - unplausibel | 0 |
| 0x482A10 | Ventilspule - vorne links - Strommessung unplausibel | 0 |
| 0x482A11 | Ventilspule - vorne links - keine Endstufenfreigabe über Watchdog | 0 |
| 0x482A13 | Ventilspule - vorne links - Strommessung nicht kalibriert | 0 |
| 0x482A14 | Ventilspule - vorne rechts - Strommessung unplausibel | 0 |
| 0x482A15 | Ventilspule - vorne rechts - keine Endstufenfreigabe über Watchdog | 0 |
| 0x482A17 | Ventilspule - vorne rechts - Strommessung nicht kalibriert | 0 |
| 0x482A18 | Ventilspule - hinten links - Strommessung unplausibel | 0 |
| 0x482A19 | Ventilspule - hinten links - keine Endstufenfreigabe über Watchdog | 0 |
| 0x482A1B | Ventilspule - hinten links - Strommessung nicht kalibriert | 0 |
| 0x482A1C | Ventilspule - hinten rechts - Strommessung unplausibel | 0 |
| 0x482A1D | Ventilspule - hinten rechts - keine Endstufenfreigabe über Watchdog | 0 |
| 0x482A1F | Ventilspule - hinten rechts - Strommessung nicht kalibriert | 0 |
| 0x482A20 | Ventilspule - vorne links - Kurzschluss KL15/KL30 | 0 |
| 0x482A21 | Ventilspule - vorne links - Kurzschluss KL31 | 0 |
| 0x482A22 | Ventilspule - vorne links - offene Leitung | 0 |
| 0x482A23 | Ventilspule - vorne links - Kurzschluss Ventil | 0 |
| 0x482A24 | Ventilspule - vorne rechts - Kurzschluss KL15/KL30 | 0 |
| 0x482A25 | Ventilspule - vorne rechts - Kurzschluss KL31 | 0 |
| 0x482A26 | Ventilspule - vorne rechts - offene Leitung | 0 |
| 0x482A27 | Ventilspule - vorne rechts - Kurzschluss Ventil | 0 |
| 0x482A28 | Ventilspule - hinten links - Kurzschluss KL15/KL30 | 0 |
| 0x482A29 | Ventilspule - hinten links - Kurzschluss KL31 | 0 |
| 0x482A2A | Ventilspule - hinten links - offene Leitung | 0 |
| 0x482A2B | Ventilspule - hinten links - Kurzschluss Ventil | 0 |
| 0x482A2C | Ventilspule - hinten rechts - Kurzschluss KL15/KL30 | 0 |
| 0x482A2D | Ventilspule - hinten rechts - Kurzschluss KL31 | 0 |
| 0x482A2E | Ventilspule - hinten rechts - offene Leitung | 0 |
| 0x482A2F | Ventilspule - hinten rechts - Kurzschluss Ventil | 0 |
| 0x482A30 | Ventilspule - vorne links - Stromreglerplausibilitätsfehler | 0 |
| 0x482A34 | Ventilspule - vorne rechts - Stromreglerplausibilitätsfehler | 0 |
| 0x482A38 | Ventilspule - hinten links - Stromreglerplausibilitätsfehler | 0 |
| 0x482A3C | Ventilspule - hinten rechts - Stromreglerplausibilitätsfehler | 0 |
| 0xE6841F | Busfehler (Flexray) - Physikalischer Bus Fehler | 1 |
| 0xE68420 | Busfehler (Flexray) - Controller Fehler | 1 |
| 0xE68BFF | Diagnosemaster - Dummy Network DTC --- (Test Diagnosemaster) | 1 |
| 0xE69416 | Botschaftsfehler (Status Cabrio Dach, ID: ST_CABRF) - Timeout | 1 |
| 0xE69417 | Botschaftsfehler (Status Cabrio Dach, ID: ST_CABRF) - Alive | 1 |
| 0xE6941B | Botschaftsfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) - Timeout | 1 |
| 0xE6941D | Botschaftsfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) - Alive | 1 |
| 0xE69428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) - Timeout | 1 |
| 0xE6942C | Signalfehler (Außentemperatur, ID: A_TEMP) - Ungültig | 1 |
| 0xE6943A | Signalfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Ungültig | 1 |
| 0xE6943B | Signalfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Undefiniert | 1 |
| 0xE6944E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Ungültig | 1 |
| 0xE69478 | Botschaftsfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) - Timeout | 1 |
| 0xE6947A | Botschaftsfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) - Alive | 1 |
| 0xE6947E | Signalfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) - Ungültig | 1 |
| 0xE6947F | Signalfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) - Undefiniert | 1 |
| 0xE69482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Timeout | 1 |
| 0xE694AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) - Timeout | 1 |
| 0xE694B2 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Ungültig | 1 |
| 0xE694B3 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Undefiniert | 1 |
| 0xE694B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 |
| 0xE694BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 |
| 0xE694BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 |
| 0xE694BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Undefiniert | 1 |
| 0xE694C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Timeout | 1 |
| 0xE694C4 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Alive | 1 |
| 0xE694C8 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Ungültig | 1 |
| 0xE694C9 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Undefiniert | 1 |
| 0xE694CC | Botschaftsfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) - Timeout | 1 |
| 0xE694CE | Botschaftsfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) - Alive | 1 |
| 0xE694D0 | Signalfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) - Ungültig | 1 |
| 0xE694D1 | Signalfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) - Undefiniert | 1 |
| 0xE694E8 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Timeout | 1 |
| 0xE694EA | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Alive | 1 |
| 0xE694EE | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Ungültig | 1 |
| 0xE694EF | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Undefiniert | 1 |
| 0xE694F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Timeout | 1 |
| 0xE694F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Ungültig | 1 |
| 0xE694F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Timeout | 1 |
| 0xE694FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Alive | 1 |
| 0xE694FC | Signalfehler (Klemmen, ID: KLEMMEN) - Ungültig | 1 |
| 0xE694FD | Signalfehler (Klemmen, ID: KLEMMEN) - Undefiniert | 1 |
| 0xE6950A | Botschaftsfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Timeout | 1 |
| 0xE6950C | Botschaftsfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Alive | 1 |
| 0xE69510 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Ungültig | 1 |
| 0xE69511 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Undefiniert | 1 |
| 0xE6951C | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Ungültig | 1 |
| 0xE6951D | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Undefiniert | 1 |
| 0xE69528 | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Timeout | 1 |
| 0xE6952A | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Alive | 1 |
| 0xE6952E | Signalfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Ungültig | 1 |
| 0xE6952F | Signalfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Undefiniert | 1 |
| 0xE69532 | Botschaftsfehler (Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) - Timeout | 1 |
| 0xE69536 | Signalfehler (Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) - Ungültig | 1 |
| 0xE69537 | Signalfehler (Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) - Undefiniert | 1 |
| 0xE69542 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Timeout | 1 |
| 0xE69544 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Alive | 1 |
| 0xE69548 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Ungültig | 1 |
| 0xE69549 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Undefiniert | 1 |
| 0xE69552 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Ungültig | 1 |
| 0xE69553 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Undefiniert | 1 |
| 0xE69557 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Timeout | 1 |
| 0xE69584 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Ungültig | 1 |
| 0xE69585 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Undefiniert | 1 |
| 0xE6958C | Botschaftsfehler (Relativzeit, ID: RELATIVZEIT) - Timeout | 1 |
| 0xE69590 | Signalfehler (Relativzeit, ID: RELATIVZEIT) - Ungültig | 1 |
| 0xE69591 | Signalfehler (Relativzeit, ID: RELATIVZEIT) - Undefiniert | 1 |
| 0xE69598 | Botschaftsfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) - Timeout | 1 |
| 0xE6959A | Botschaftsfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) - Alive | 1 |
| 0xE6959C | Signalfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) - Ungültig | 1 |
| 0xE6959D | Signalfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) - Undefiniert | 1 |
| 0xE695BC | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Timeout | 1 |
| 0xE695BE | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Alive | 1 |
| 0xE695C2 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Ungültig | 1 |
| 0xE695C3 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Undefiniert | 1 |
| 0xE695EA | Botschaftsfehler (Fahrzeug Dynamik Daten Geschätzt Abgesichert, ID:VEH_DYNMC_DT_ESTI_VRFD ) - Timeout | 1 |
| 0xE695EC | Botschaftsfehler (Fahrzeug Dynamik Daten Geschätzt Abgesichert, ID:VEH_DYNMC_DT_ESTI_VRFD ) - Alive | 1 |
| 0xE695F0 | Signalfehler (Fahrzeug Dynamik Daten Geschätzt Abgesichert, ID:VEH_DYNMC_DT_ESTI_VRFD ) -  Ungültig | 1 |
| 0xE695F1 | Signalfehler (Fahrzeug Dynamik Daten Geschätzt Abgesichert, ID:VEH_DYNMC_DT_ESTI_VRFD ) - Undefiniert | 1 |
| 0xE69658 | Botschaftsfehler (Status Reifen, ID: ST_TYR) - Timeout | 1 |
| 0xE6965A | Botschaftsfehler (Status Reifen, ID: ST_TYR) - Alive | 1 |
| 0xE69672 | Signalfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Qualifier | 1 |
| 0xE696D4 | Botschaftsfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Timeout | 1 |
| 0xE696D5 | Botschaftsfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Alive | 1 |
| 0xE69705 | Botschaftsfehler (Anforderung Drehmoment Kurbelwelle ARS / Status ARS,  ID: RQ_TORQ_CRSH_ARS_ST_ARS) - Timeout | 1 |
| 0xE69706 | Botschaftsfehler (Anforderung Drehmoment Kurbelwelle ARS / Status ARS,  ID: RQ_TORQ_CRSH_ARS_ST_ARS) - Alive | 1 |
| 0xE69709 | Signalfehler (Anforderung Drehmoment Kurbelwelle ARS / Status ARS,  ID: RQ_TORQ_CRSH_ARS_ST_ARS) - Ungültig | 1 |
| 0xE6970A | Signalfehler (Anforderung Drehmoment Kurbelwelle ARS / Status ARS,  ID: RQ_TORQ_CRSH_ARS_ST_ARS) - Undefiniert | 1 |
| 0xE69744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 |
| 0xE69746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Alive | 1 |
| 0xE69752 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Alive | 1 |
| 0xE697B7 | Botschaftsfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Timeout | 1 |
| 0xE697B9 | Botschaftsfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Alive | 1 |
| 0xE697BB | Signalfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Ungültig | 1 |
| 0xE697BC | Signalfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Undefiniert | 1 |
| 0xE697C1 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Timeout | 1 |
| 0xE697C3 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Alive | 1 |
| 0xE697C5 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Ungültig | 1 |
| 0xE697C6 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Undefiniert | 1 |
| 0xE699AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 |
| 0xE699F4 | Signalfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Qualifier | 1 |
| 0xE69A31 | Signalfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) - Qualifier | 1 |
| 0xE69A3B | Botschaftsfehler (Fahrzeug Adaption, ID: VEH_ADPT) - Timeout | 1 |
| 0xE69A3D | Signalfehler (Fahrzeug Adaption, ID: VEH_ADPT) - Ungültig | 1 |
| 0xE69A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Qualifier | 1 |
| 0xE69A3F | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Qualifier | 1 |
| 0xE69A41 | Signalfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) - Qualifier | 1 |
| 0xE69A53 | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Qualifier | 1 |
| 0xE69A57 | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Qualifier | 1 |
| 0xE69A62 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Qualifier | 1 |
| 0xE69A69 | Signalfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) - Qualifier | 1 |
| 0xE69A79 | Signalfehler (Fahrzeug Dynamik Daten Geschätzt Abgesichert, ID:VEH_DYNMC_DT_ESTI_VRFD ) - Qualifier | 1 |
| 0xE69B18 | Botschaftsfehler (Höhenstand Fahrzeug, ID: HGLV_VEH) - Timeout | 1 |
| 0xE69B1A | Botschaftsfehler (Höhenstand Fahrzeug, ID: HGLV_VEH) - Alive | 1 |
| 0xE69B1C | Signalfehler (Höhenstand Fahrzeug, ID: HGLV_VEH) - Ungültig | 1 |
| 0xE69B1D | Signalfehler (Höhenstand Fahrzeug, ID: HGLV_VEH) - Undefiniert | 1 |
| 0xE69B2C | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Timeout | 1 |
| 0xE69B2F | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Alive | 1 |
| 0xE69B3F | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Timeout | 1 |
| 0xE69B41 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Alive | 1 |
| 0xE69B4C | Botschaftsfehler (Soll Bremsmoment Summe Koordiniert, ID: BRTORQ_SUM_COOTD) - Timeout | 1 |
| 0xE69B4E | Botschaftsfehler (Soll Bremsmoment Summe Koordiniert, ID: BRTORQ_SUM_COOTD) - Alive | 1 |
| 0xE69B50 | Signalfehler (Soll Bremsmoment Summe Koordiniert, ID: BRTORQ_SUM_COOTD) - Ungültig | 1 |
| 0xE69B51 | Signalfehler (Soll Bremsmoment Summe Koordiniert, ID: BRTORQ_SUM_COOTD) - Undefiniert | 1 |
| 0xE69B7C | Botschaftsfehler (Status Niveauregulierung Fahrzeug, ID: ST_LCS_VEH) - Timeout | 1 |
| 0xE69B7E | Botschaftsfehler (Status Niveauregulierung Fahrzeug, ID: ST_LCS_VEH) - Alive | 1 |
| 0xE69B80 | Signalfehler (Status Niveauregulierung Fahrzeug, ID: ST_LCS_VEH) - Ungültig | 1 |
| 0xE69B81 | Signalfehler (Status Niveauregulierung Fahrzeug, ID: ST_LCS_VEH) - Undefiniert | 1 |
| 0xE6AC05 | Signalfehler (Außentemperatur, ID: A_TEMP) - Undefiniert | 1 |
| 0xE6AC0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Undefiniert | 1 |
| 0xE6AC1A | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Undefiniert | 1 |
| 0xE6AC1B | Signalfehler (Fahrzeug Adaption, ID: VEH_ADPT) - Undefiniert | 1 |
| 0xE6AC2A | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Undefiniert | 1 |
| 0xE6AC63 | Signalfehler (Fahrzeug Adaption, ID: VEH_ADPT) - Qualifier | 1 |
| 0xE6AC64 | Signalfehler (Höhenstand Fahrzeug, ID: HGLV_VEH) - Qualifier | 1 |
| 0xE6AC67 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Qualifier | 1 |
| 0xE6AC7B | Signalfehler (Status Cabrio Dach, ID: ST_CABRF) - Ungültig | 1 |
| 0xE6AC7C | Signalfehler (Status Cabrio Dach, ID: ST_CABRF) - Undefiniert | 1 |
| 0xE6AC7D | Signalfehler (Status Reifen, ID: ST_TYR) - Ungültig | 1 |
| 0xE6AC7E | Signalfehler (Status Reifen, ID: ST_TYR) - Undefiniert | 1 |
| 0xE6AC7F | Signalfehler (Status Reifen, ID: ST_TYR) - Qualifier | 1 |
| 0xE6AC84 | Signalfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) - Ungültig | 1 |
| 0xE6AC85 | Signalfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) - Undefiniert | 1 |
| 0xE6AC86 | Signalfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) - Qualifier | 1 |
| 0xE6AD02 | Signalfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Qualifier | 1 |
| 0xE6AD05 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Qualifier | 1 |
| 0xE6AD58 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Qualifier | 1 |
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
| 0xDAD8 | SPANNUNG_KLEMME_30 | Volt | - | signed int | - | 1 | 10 | 0 |
| 0xDAD2 | SPANNUNG_KLEMME_15N | Volt | - | signed int | - | 1 | 10 | 0 |
| 0x6000 | Wert Sensor 1 | m/s² oder mm | - | signed int | - | 1 | 100 | 0 |
| 0x6001 | Sensor 1_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x6002 | Versorgung Sensor 1 | Volt | - | signed int | - | 1 | 1000 | 0 |
| 0x6040 | Versorgung Sensor 1_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x6048 | Verbautyp Sensor 1 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUTYP | - | - | - |
| 0x6049 | Verbauposition Sensor 1 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUPOSITION | - | - | - |
| 0x6003 | Wert Sensor 2 | m/s² oder mm | - | signed int | - | 1 | 100 | 0 |
| 0x6004 | Sensor 2_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x6005 | Versorgung Sensor 2 | Volt | - | signed int | - | 1 | 1000 | 0 |
| 0x6041 | Versorgung Sensor 2_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x604A | Verbautyp Sensor 2 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUTYP | - | - | - |
| 0x604B | Verbauposition Sensor 2 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUPOSITION | - | - | - |
| 0x6006 | Wert Sensor 3 | m/s² oder mm | - | signed int | - | 1 | 100 | 0 |
| 0x6007 | Sensor 3_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x6008 | Versorgung Sensor 3 | Volt | - | signed int | - | 1 | 1000 | 0 |
| 0x6042 | Versorgung Sensor 3_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x604C | Verbautyp Sensor 3 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUTYP | - | - | - |
| 0x604D | Verbauposition Sensor 3 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUPOSITION | - | - | - |
| 0x6009 | Wert Sensor 4 | m/s² oder mm | - | signed int | - | 1 | 100 | 0 |
| 0x600A | Sensor 4_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x600B | Versorgung Sensor 4 | Volt | - | signed int | - | 1 | 1000 | 0 |
| 0x6043 | Versorgung Sensor 4_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x604E | Verbautyp Sensor 4 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUTYP | - | - | - |
| 0x604F | Verbauposition Sensor 4 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUPOSITION | - | - | - |
| 0x6018 | Ist-Strom Ventil VL | A | - | signed int | - | 1 | 1000 | 0 |
| 0x6019 | Soll-Strom Ventil VL | A | - | signed int | - | 1 | 1000 | 0 |
| 0x601A | iDmpIstVL_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_VENTILE_STATUS | - | - | - |
| 0x601B | Ist-Strom Ventil VR | A | - | signed int | - | 1 | 1000 | 0 |
| 0x601C | Soll-Strom Ventil VR | A | - | signed int | - | 1 | 1000 | 0 |
| 0x601D | iDmpIstVR_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_VENTILE_STATUS | - | - | - |
| 0x601E | Ist-Strom Ventil HL | A | - | signed int | - | 1 | 1000 | 0 |
| 0x601F | Soll-Strom Ventil HL | A | - | signed int | - | 1 | 1000 | 0 |
| 0x6020 | iDmpIstHL_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_VENTILE_STATUS | - | - | - |
| 0x6021 | Ist-Strom Ventil HR | A | - | signed int | - | 1 | 1000 | 0 |
| 0x6022 | Soll-Strom Ventil HR | A | - | signed int | - | 1 | 1000 | 0 |
| 0x6023 | iDmpIstHR_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_VENTILE_STATUS | - | - | - |
| 0x6050 | Klemme30_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x6051 | Klemme15_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x602D | Signalbelegung | 0-n | - | 0xFFFF | TAB_VDC_ENV_SIGNAL_INDEX | - | - | - |
| 0x602E | Qualifierbelegung | 0-n | - | 0xFF | TAB_VDC_ENV_QUALIFIER_INDEX | - | - | - |
| 0x6060 | Botschaftsnummer | 0-n | - | 0xFF | TAB_VDC_ENV_BOTSCHAFT_NR | - | - | - |
| 0x6061 | Fehler_Kritisch_LL | 0-n | - | 0xFFFF | TAB_VDC_ENV_FEHLER_KRITISCH_LL | - | - | - |
| 0x6062 | Fehler_Unkritisch_LL | 0-n | - | 0xFFFFFFFF | TAB_VDC_ENV_FEHLER_UNKRITISCH_LL | - | - | - |
| 0x6063 | Ohmscher Widerstand Ventil VL (gelernt) | Ohm | - | signed int | - | 1 | 1000 | 0 |
| 0x6064 | Ohmscher Widerstand Ventil VR (gelernt) | Ohm | - | signed int | - | 1 | 1000 | 0 |
| 0x6065 | Ohmscher Widerstand Ventil HL (gelernt) | Ohm | - | signed int | - | 1 | 1000 | 0 |
| 0x6066 | Ohmscher Widerstand Ventil HR (gelernt) | Ohm | - | signed int | - | 1 | 1000 | 0 |
| 0x6067 | SPANNUNG_KLEMME_30 | Volt | - | signed int | - | 1 | 1000 | 0 |
| 0x6068 | SPANNUNG_KLEMME_15N | Volt | - | signed int | - | 1 | 1000 | 0 |
| 0x6070 | Plausibilität Sensor 1 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_PLAUSI | - | - | - |
| 0x6071 | Plausibilität Sensor 2 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_PLAUSI | - | - | - |
| 0x6072 | Plausibilität Sensor 3 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_PLAUSI | - | - | - |
| 0x6073 | Plausibilität Sensor 4 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_PLAUSI | - | - | - |
| 0x6100 | WCET der defekten Task | µs | - | unsigned int | - | 1 | 1 | - |
| 0x6101 | Nummer der defekten Task | Zustand | - | unsigned char | - | - | - | - |
| 0x6102 | Grund des Taskfehlers | 0-n | - | 0xFF | TAB_VDC_ENV_REASON_TASK_ERROR | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xE6A400 | Busfehler (Flexray) - Initialisierung fehlgeschlagen | 1 |
| 0xE6A401 | Busfehler (Flexray) - Synchronisierung verloren | 1 |
| 0xE6A402 | Busfehler (Flexray) - POC Status Halt | 1 |
| 0x4828D2 | Diagnosemaster - Ausfall Zeitbotschaft | 0 |
| 0x4828D0 | Diagnosemaster - Warteschlange geloescht | 0 |
| 0x4828D1 | Diagnosemaster - Warteschlange voll | 0 |
| 0x4828D5 | Fahrzeugszustandsmanagement - Ausfall FZM Botschaft | 0 |
| 0x4828DF | Nichtflüchtiger Speicher - Falsche Config-ID | 0 |
| 0x4828DB | Nichtflüchtiger Speicher - Kontrolle gescheitert | 0 |
| 0x4828DE | Nichtflüchtiger Speicher - Lesen gesamt gescheitert | 0 |
| 0x4828DA | Nichtflüchtiger Speicher - Lesen gescheitert | 0 |
| 0x4828DC | Nichtflüchtiger Speicher - Loeschen gescheitert | 0 |
| 0x4828DD | Nichtflüchtiger Speicher - Schreiben gesamt gescheitert | 0 |
| 0x4828D9 | Nichtflüchtiger Speicher - Schreiben gescheitert | 0 |
| 0x4828A1 | Steuergerät intern - Betriebssystem Fehler | 0 |
| 0x4828A2 | Steuergerät intern - Betriebssystem nicht synchron | 0 |
| 0x4828A0 | Steuergerät intern - EEProm Fehler | 0 |
| 0x4828A6 | Steuergerät intern - Exception Fehler | 0 |
| 0x48288D | Steuergerät intern - FS defekt - Ablage nicht geschlossen | 0 |
| 0x48288C | Steuergerät intern - FS defekt - DTC rückgesetzt | 0 |
| 0x48288B | Steuergerät intern - Kennfeld Fehler | 0 |
| 0x4828A4 | Steuergerät intern - LL Check Fehler | 0 |
| 0x4828A3 | Steuergerät intern - Resets durchgeführt | 0 |
| 0x4828A5 | Steuergerät intern - Task Fehler | 0 |
| 0x482A1A | Ventilspule - hinten links - Ventilfehler bei Onlineprüfung | 0 |
| 0x482A1E | Ventilspule - hinten rechts - Ventilfehler bei Onlineprüfung | 0 |
| 0x482A12 | Ventilspule - vorne links - Ventilfehler bei Onlineprüfung | 0 |
| 0x482A16 | Ventilspule - vorne rechts - Ventilfehler bei Onlineprüfung | 0 |
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
| 0xDAD8 | SPANNUNG_KLEMME_30 | Volt | - | signed int | - | 1 | 10 | 0 |
| 0xDAD2 | SPANNUNG_KLEMME_15N | Volt | - | signed int | - | 1 | 10 | 0 |
| 0x6000 | Wert Sensor 1 | m/s² oder mm | - | signed int | - | 1 | 100 | 0 |
| 0x6001 | Sensor 1_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x6002 | Versorgung Sensor 1 | Volt | - | signed int | - | 1 | 1000 | 0 |
| 0x6040 | Versorgung Sensor 1_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x6048 | Verbautyp Sensor 1 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUTYP | - | - | - |
| 0x6049 | Verbauposition Sensor 1 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUPOSITION | - | - | - |
| 0x6003 | Wert Sensor 2 | m/s² oder mm | - | signed int | - | 1 | 100 | 0 |
| 0x6004 | Sensor 2_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x6005 | Versorgung Sensor 2 | Volt | - | signed int | - | 1 | 1000 | 0 |
| 0x6041 | Versorgung Sensor 2_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x604A | Verbautyp Sensor 2 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUTYP | - | - | - |
| 0x604B | Verbauposition Sensor 2 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUPOSITION | - | - | - |
| 0x6006 | Wert Sensor 3 | m/s² oder mm | - | signed int | - | 1 | 100 | 0 |
| 0x6007 | Sensor 3_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x6008 | Versorgung Sensor 3 | Volt | - | signed int | - | 1 | 1000 | 0 |
| 0x6042 | Versorgung Sensor 3_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x604C | Verbautyp Sensor 3 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUTYP | - | - | - |
| 0x604D | Verbauposition Sensor 3 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUPOSITION | - | - | - |
| 0x6009 | Wert Sensor 4 | m/s² oder mm | - | signed int | - | 1 | 100 | 0 |
| 0x600A | Sensor 4_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x600B | Versorgung Sensor 4 | Volt | - | signed int | - | 1 | 1000 | 0 |
| 0x6043 | Versorgung Sensor 4_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x604E | Verbautyp Sensor 4 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUTYP | - | - | - |
| 0x604F | Verbauposition Sensor 4 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_VERBAUPOSITION | - | - | - |
| 0x6018 | Ist-Strom Ventil VL | A | - | signed int | - | 1 | 1000 | 0 |
| 0x6019 | Soll-Strom Ventil VL | A | - | signed int | - | 1 | 1000 | 0 |
| 0x601A | iDmpIstVL_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_VENTILE_STATUS | - | - | - |
| 0x601B | Ist-Strom Ventil VR | A | - | signed int | - | 1 | 1000 | 0 |
| 0x601C | Soll-Strom Ventil VR | A | - | signed int | - | 1 | 1000 | 0 |
| 0x601D | iDmpIstVR_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_VENTILE_STATUS | - | - | - |
| 0x601E | Ist-Strom Ventil HL | A | - | signed int | - | 1 | 1000 | 0 |
| 0x601F | Soll-Strom Ventil HL | A | - | signed int | - | 1 | 1000 | 0 |
| 0x6020 | iDmpIstHL_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_VENTILE_STATUS | - | - | - |
| 0x6021 | Ist-Strom Ventil HR | A | - | signed int | - | 1 | 1000 | 0 |
| 0x6022 | Soll-Strom Ventil HR | A | - | signed int | - | 1 | 1000 | 0 |
| 0x6023 | iDmpIstHR_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_VENTILE_STATUS | - | - | - |
| 0x6050 | Klemme30_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x6051 | Klemme15_E | 0-n | - | 0xFFFF | TAB_VDC_ENV_SENSOR_STATUS | - | - | - |
| 0x602D | Signalbelegung | 0-n | - | 0xFFFF | TAB_VDC_ENV_SIGNAL_INDEX | - | - | - |
| 0x602E | Qualifierbelegung | 0-n | - | 0xFF | TAB_VDC_ENV_QUALIFIER_INDEX | - | - | - |
| 0x6060 | Botschaftsnummer | 0-n | - | 0xFF | TAB_VDC_ENV_BOTSCHAFT_NR | - | - | - |
| 0x6061 | Fehler_Kritisch_LL | 0-n | - | 0xFFFF | TAB_VDC_ENV_FEHLER_KRITISCH_LL | - | - | - |
| 0x6062 | Fehler_Unkritisch_LL | 0-n | - | 0xFFFFFFFF | TAB_VDC_ENV_FEHLER_UNKRITISCH_LL | - | - | - |
| 0x6063 | Ohmscher Widerstand Ventil VL (gelernt) | Ohm | - | signed int | - | 1 | 1000 | 0 |
| 0x6064 | Ohmscher Widerstand Ventil VR (gelernt) | Ohm | - | signed int | - | 1 | 1000 | 0 |
| 0x6065 | Ohmscher Widerstand Ventil HL (gelernt) | Ohm | - | signed int | - | 1 | 1000 | 0 |
| 0x6066 | Ohmscher Widerstand Ventil HR (gelernt) | Ohm | - | signed int | - | 1 | 1000 | 0 |
| 0x6067 | SPANNUNG_KLEMME_30 | Volt | - | signed int | - | 1 | 1000 | 0 |
| 0x6068 | SPANNUNG_KLEMME_15N | Volt | - | signed int | - | 1 | 1000 | 0 |
| 0x6070 | Plausibilität Sensor 1 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_PLAUSI | - | - | - |
| 0x6071 | Plausibilität Sensor 2 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_PLAUSI | - | - | - |
| 0x6072 | Plausibilität Sensor 3 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_PLAUSI | - | - | - |
| 0x6073 | Plausibilität Sensor 4 | 0-n | - | 0xFF | TAB_VDC_ENV_SENSOR_PLAUSI | - | - | - |
| 0x6100 | WCET der defekten Task | µs | - | unsigned int | - | 1 | 1 | - |
| 0x6101 | Nummer der defekten Task | Zustand | - | unsigned char | - | - | - | - |
| 0x6102 | Grund des Taskfehlers | 0-n | - | 0xFF | TAB_VDC_ENV_REASON_TASK_ERROR | - | - | - |
| 0x6103 | letzter Adresszugriff vor Exception | hex | - | signed long | - | - | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SC_VERSION | 0x1720 | - | Auslesen StandardCore Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1720 |
| SPANNUNG_KLEMME_15N_WERT | 0xDAD2 | STAT_SPANNUNG_KLEMME_15N_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10.0 | - | - | 22 | - | - |
| SPANNUNG_KLEMME_30_WERT | 0xDAD8 | STAT_SPANNUNG_KLEMME_30_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10.0 | - | - | 22 | - | - |
| STATUS_FR_TRANSCEIVER_E910_54 | 0xDB96 | - | Lesen Flexray Transceiver Statuswort (ELMOS) | bit | - | - | BITFIELD | RES_0xDB96 | - | - | - | - | 22 | - | - |
| VDC_ABGLEICH_BESCHLEUNIGUNGSSENSOREN | 0xAB84 | - | Starten und Status Abgleich Beschleunigungssensoren | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB84 | RES_0xAB84 |
| VDC_ABGLEICH_HOEHENSTANDSSENSOREN | 0xAB85 | - | Starten und Status Abgleich Höhenstandssensoren | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB85 | RES_0xAB85 |
| VDC_PIA_DATEN_EINZELN | 0xDC29 | - | Vorgeben PIA-Datum einzeln | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC29 | - |
| VDC_PIA_DATEN_KOMPLETT | 0xDC28 | - | Auslesen und Vorgeben PIA-Daten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC28 | RES_0xDC28 |
| VDC_SENSOR_SPANNUNG | 0xDC18 | - | Auslesen VDC-Sensoren Spannungswerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC18 |
| VDC_SENSOR_STATUS | 0xDC1A | - | Auslesen VDC-Sensoren Status allgemein | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC1A |
| VDC_SENSOR_WERTE | 0xDC17 | - | Auslesen VDC-Sensoren Werte allgemein | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC17 |
| VDC_VENTILE_STATUS | 0xDC1B | - | Auslesen Ventil Status allgemein | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC1B |
| VDC_VENTILE_STROM | 0xDC16 | - | Auslesen und Vorgeben Stromwerte Dämpfer Ventile | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDC16 | RES_0xDC16 |
| VDC_VENTILE_WERTE | 0xDC19 | - | Auslesen Ventil Werte allgemein | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC19 |
| _VDC_ECU_INTERN_SPEICHER | 0x418C | - | Auslesen Fehlerspeicher intern | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x418C |
| _VDC_MODULE_INTERN_STATUS | 0x4185 | - | Auslesen Zustand Module intern | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4185 |
| _VDC_RESET_ECU_INTERN_SPEICHER | 0xF041 | - | Starten und Status Loeschen ECU intern Speicher | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF041 |
| _VDC_RESET_TASK_ZEITEN | 0xF040 | - | Starten und Status Rücksetzen Task Zeiten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF040 | RES_0xF040 |
| _VDC_SENSOR_DATEN_DYNAMISCH | 0x4188 | - | Auslesen und Vorgeben VDC-Sensoren Daten zur Laufzeit ändern | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4188 | RES_0x4188 |
| _VDC_SENSOR_DATEN_STATISCH | 0x4187 | - | Auslesen VDC-Sensoren statische Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4187 |
| _VDC_SENSOR_DATEN_ZEITSYSNCHRON | 0x4189 | - | Auslesen VDC-Sensordaten  zeitsynchron zusammengefasst | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4189 |
| _VDC_SENSOR_PARAMETERSATZ_EEPROM | 0x418A | - | Auslesen und Vorgeben VDC-Sensoren Parameter EEPROM | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x418A | RES_0x418A |
| _VDC_STROMREGLER_PARAMETER | 0x418B | - | Auslesen und Vorgeben Stromregler Parameter | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x418B | RES_0x418B |
| _VDC_TASK_ZEITEN | 0x4186 | - | Auslesen Zeiten Task RAM | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4186 |
| _VDC_TASK_ZEITEN_EEPROM | 0x418D | - | Auslesen Zeiten Task EEPROM | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x418D |
| _VDC_TASTER | 0x4184 | - | Auslesen Taster Status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4184 |
| _VDC_VENTILE_DATEN_DYNAMISCH | 0x4181 | - | Auslesen und Vorgeben Ventil Daten dynamisch | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4181 | RES_0x4181 |
| _VDC_VENTILE_DATEN_STATISCH | 0x4182 | - | Auslesen Ventil Daten statisch | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4182 |
| _VDC_VENTILE_PWM | 0x4180 | - | Auslesen und Vorgeben PWM-Werte Dämpfer Ventile | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x4180 | RES_0x4180 |
| _VDC_VERSION_LLSW | 0x4183 | - | Auslesen LowLevel Software Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4183 |

### TAB_VDC_ECU_DIAGNOSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Zustände inaktiv |
| 0x01 | reserviert |
| 0x02 | Initialisierung |
| 0x04 | Codierung aktiv |
| 0x08 | Stromvorgabe aktiv |
| 0x10 | PWM-Vorgabe aktiv |
| 0x20 | Basis-Sensor-Parameter aktualisiert |
| 0x40 | Fehler ausblenden |
| 0x80 | reserviert |
| 0xFF | manuell auswerten |

### TAB_VDC_ENV_SENSOR_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x0001 | Signal zu hoch |
| 0x0002 | Signal zu niedrig |
| 0x0004 | reserviert |
| 0x0008 | reserviert |
| 0x0010 | reserviert |
| 0x0020 | Sensorparameter nicht codiert |
| 0x0040 | Sensoreinbaulage nicht gelernt |
| 0x0060 | Sensorparameter nicht codiert und Sensoreinbaulage nicht gelernt |
| 0x0080 | Signal unplausibel |
| 0x0100 | reserviert |
| 0x0200 | reserviert |
| 0x0400 | reserviert |
| 0x0800 | reserviert |
| 0x1000 | reserviert |
| 0x2000 | reserviert |
| 0x4000 | reserviert |
| 0x8000 | reserviert |
| 0xFFFF | manuell auswerten |

### TAB_VDC_ENV_VENTILE_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x0001 | Ventil Kurzschluss nach KL30 |
| 0x0002 | Ventil Kurzschluss nach KL31 |
| 0x0004 | Ventil offene Leitung |
| 0x0008 | Ventil Kurzschluss |
| 0x0010 | reserviert |
| 0x0020 | Ventilstrommessung nicht kalibriert |
| 0x0040 | keine Endstufenfreigabe über Watchdog |
| 0x0080 | Signal unplausibel |
| 0x0100 | allgemeiner Ventilfehler bei Onlineprüfung |
| 0x0200 | Hochlaufprüfung nicht durchgeführt |
| 0x0400 | Stromplausibilitaetsfehler |
| 0x0800 | reserviert |
| 0x1000 | reserviert |
| 0x2000 | reserviert |
| 0x4000 | reserviert |
| 0x8000 | reserviert |
| 0xFFFF | manuell auswerten |

### TAB_VDC_ENV_ECU_CODIERDATEN

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Codierung OK |
| 0x01 | reserviert |
| 0x02 | Initialisierung |
| 0x04 | Codiervorgang läuft |
| 0x08 | Ungültige Daten |
| 0x10 | Steuergerät nicht codiert |
| 0x20 | Transaktion gescheitert |
| 0x40 | Signatur fehlerhaft |
| 0x80 | Falsches Fahrzeug |
| 0xFF | manuell auswerten |

### TAB_VDC_ENV_ECU_KLEMME

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Fehler festgestellt |
| 0x01 | reserviert |
| 0x02 | Initialisierung |
| 0x04 | Niederspannung |
| 0x08 | Unterspannung |
| 0x10 | Überspannung |
| 0x20 | reserviert |
| 0x40 | reserviert |
| 0x80 | reserviert |
| 0xFF | manuell auswerten |

### TAB_VDC_ENV_ECU_MANAGER

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Fehler festgestellt |
| 0x01 | reserviert |
| 0x02 | Initialisierung |
| 0x04 | Software-Fehler |
| 0x08 | Hardware-Fehler |
| 0x10 | reserviert |
| 0x20 | reserviert |
| 0x40 | reserviert |
| 0x80 | reserviert |
| 0xFF | manuell auswerten |

### TAB_VDC_ENV_ECU_FLEXRAY_MANAGER

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Fehler festgestellt |
| 0x01 | reserviert |
| 0x02 | Initialisierung |
| 0x04 | Physikalischer Bus Fehler |
| 0x08 | Controller Fehler |
| 0x10 | Initialisierung fehlgeschlagen |
| 0x20 | Synchronisierung verloren |
| 0x40 | POC Status Halt |
| 0x80 | OS nicht synchron |
| 0xFF | manuell auswerten |

### TAB_VDC_ENV_ECU_EEPROMHANDLER

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Fehler festgestellt |
| 0x01 | reserviert |
| 0x02 | Initialisierung |
| 0x04 | EEProm in Bearbeitung |
| 0x08 | EEPROM-Fehler |
| 0x10 | Fehlerspeicher defekt - DTC rückgesetzt |
| 0x20 | Fehlerspeicher defekt - Ablage nicht abgeschlossen |
| 0x40 | reserviert |
| 0x80 | reserviert |
| 0xFF | manuell auswerten |

### TAB_VDC_ENV_SIGNAL_INDEX

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Signal angegeben |
| 0x01 | 1. Signal |
| 0x02 | 2. Signal |
| 0x04 | 3. Signal |
| 0x08 | 4. Signal |
| 0x10 | 5. Signal |
| 0x20 | 6. Signal |
| 0x40 | 7. Signal |
| 0x80 | 8. Signal |
| 0x100 | 9. Signal |
| 0xFFFF | manuell auswerten |

### TAB_VDC_ENV_QUALIFIER_INDEX

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Qualifier angegeben |
| 0x01 | 1. Qualifier |
| 0x02 | 2. Qualifier |
| 0x04 | 3. Qualifier |
| 0x08 | 4. Qualifier |
| 0x10 | 5. Qualifier |
| 0x20 | 6. Qualifier |
| 0x40 | 7. Qualifier |
| 0x80 | 8. Qualifier |
| 0xFF | manuell auswerten |

### TAB_VDC_ENV_FEHLER_KRITISCH_LL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Fehler festgestellt |
| 0x03 | ADC-Fehler |
| 0x04 | ALU-Fehler |
| 0x05 | Core-Spg.-Fehler |
| 0x07 | TLE Fehler |
| 0x08 | Watchdog Fehler |
| 0x28 | Taskfehler |
| 0x30 | Reset-unbekannte Ursache/unerwartet |
| 0x31 | External Reset (keine Anwendung im ICM-V, da keine Unterscheidung der Ursache möglich) |
| 0x32 | Loss-of-Lock-Reset |
| 0x33 | Loss-of-Clock-Reset |
| 0x34 | CPU WD Reset/Debug-Reset (keine Anwendung im ICM-V) |
| 0x36 | Checkstop-Reset |
| 0x37 | Software-System-Reset (keine Anwendung im ICM-V) |
| 0x38 | Software-external-Reset (keine Anwendung im ICM-V) |
| 0x40 | reserviert |
| 0x41 | Maschine-Check |
| 0x42 | Data-Storage |
| 0x43 | Instruction-Storage |
| 0x44 | External Interupt |
| 0x45 | Alignment |
| 0x46 | Program |
| 0x47 | Floating-point unavailbale |
| 0x48 | System-Call |
| 0x49 | AP unavailable |
| 0x4A | Dekrementer |
| 0x4B | Fixed Interval Timer |
| 0x4C | Watchdog Timer |
| 0x4D | Data TLB Error |
| 0x4E | Instruction TLB Error |
| 0x4F | Debug |
| 0x50 | reserviert |
| 0x51 | reserviert |
| 0x52 | reserviert |
| 0x53 | reserviert |
| 0x54 | reserviert |
| 0x55 | reserviert |
| 0x56 | reserviert |
| 0x57 | reserviert |
| 0x58 | reserviert |
| 0x59 | reserviert |
| 0x5A | reserviert |
| 0x5B | reserviert |
| 0x5C | reserviert |
| 0x5D | reserviert |
| 0x5E | reserviert |
| 0x5F | reserviert |
| 0x60 | SPE unavailbale Exc |
| 0x61 | SPE Data Exc |
| 0x69 | Deadline |
| 0x6B | Stack-Fehler |
| 0x70 | unbekannter OS-Fehler |
| 0xFF | manuell auswerten |

### TAB_VDC_ENV_FEHLER_UNKRITISCH_LL

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | kein Fehler festgestellt |
| 0x00000001 | FlexRay Transceiver Bus-Error |
| 0x00000002 | log. FlexRay Transceiver Error |
| 0x00000004 | FlexRay Bus-Off (Protokoll Halt) |
| 0x00000008 | OS nicht synchron |
| 0x00000010 | Knoten nicht synchron |
| 0x00000020 | PLL-Fehler |
| 0x00000100 | Task Fehler (WCET) |
| 0x00008000 | Kl30-Spannung inkonsistent |
| 0x00010000 | Fehler EEPROM-Diagnose |
| 0x00020000 | ROM Check Fehler |
| 0x00040000 | Strommessung inkonsistent |
| 0x00080000 | Coding (SC) - keine Codierdaten |
| 0x00100000 | Fehler Inbetriebnahmedaten |
| 0xFFFFFFFF | manuell auswerten |

### TAB_VDC_ENV_BOTSCHAFT_NR

| WERT | UWTEXT |
| --- | --- |
| 0 | keine Botschaftsnummer vorhanden |
| 1 | DT_PT_2 (Daten Antriebsstrang 2) |
| 2 | FZZSTD (Fahrzeugzustand) |
| 3 | V_VEH (Geschwindigkeit Fahrzeug) |
| 4 | AVL_RPM_WHL (Ist Drehzahl Rad) |
| 5 | AVL_BRTORQ_SUM (Ist Bremsmoment Summe) |
| 6 | KILOMETERSTAND (Kilometerstand/Reichweite) |
| 7 | KLEMMEN (Klemmen) |
| 8 | SU_SW_DRDY (Konfiguration Schalter Fahrdynamik) |
| 9 | ACLNX_MASSCNTR (Längsbeschleunigung Schwerpunkt) |
| 10 | ACLNY_MASSCNTR (Querbeschleunigung Schwerpunkt) |
| 11 | WMOM_DRV_5 (Radmoment Antrieb 5) |
| 12 | RELATIVZEIT (Relativzeit) |
| 13 | TAR_QTA_CTR_STE (Soll Anteil Steuerung Lenkung) |
| 14 | ST_STAB_DSC (Status Stabilisierung DSC) |
| 15 | ACLNZ_COG (Vertikalbeschleunigung Schwerpunkt) |
| 16 | VYAW_VEH (Giergeschwindigkeit Fahrzeug) |
| 17 | BRTORQ_SUM_COOTD (Soll Bremsmoment Summe Koordiniert) |
| 18 | VROLL_COG (Wankgeschwindigkeit Schwerpunkt) |
| 19 | VPI_COG (Nickgeschwindigkeit Schwerpunkt) |
| 20 | HGLV_VEH_FILT (Hoehenstand Fahrzeug gefiltert) |
| 21 | ST_CABRF (Status Cabrio Dach) |
| 22 | ST_TYR (Status Reifen) |
| 23 | WMOM_DRV_1 (Radmoment Antrieb 1) |
| 24 | A_TEMP (Außentemperatur) |
| 25 | VEH_ADPT (Fahrzeug Adaption) |
| 26 | HGLV_VEH (Höhenstand Fahrzeug) |
| 27 | DT_DRDYSEN_EXT (Daten Fahrdynamiksensor Erweitert) |
| 28 | FAHRGESTELLNUMMER (Fahrgestellnummer) |
| 29 | RSB_VEH (Eigenlenkverhalten Fahrzeug) |
| 30 | DT_STMD_DRDY (Daten Einspurmodell Fahrdynamik) |
| 31 | STAT_FUNKSCHLUESSEL (Status Funkschlüssel) |
| 32 | AVL_STEA_FTAX (Ist Lenkwinkel Vorderachse) |
| 33 | VEH_DYNMC_DT_ESTI_VRFD (Fahrzeug Dynamik Daten Geschätzt Abgesichert) |
| 34 | MASS_VEH (Masse/Gewicht Fahrzeug) |
| 35 | ST_LCS_VEH (Status Niveauregulierung Fahrzeug) |
| 36 | RQ_TORQ_CRSH_ARS_ST_ARS (Anforderung Drehmoment Kurbelwelle ARS / Status ARS) |
| 0xFF | keine Botschaft für diese Nummer hinterlegt |

### TAB_VDC_ENV_SENSOR_VERBAUTYP

| WERT | UWTEXT |
| --- | --- |
| 0 | ROM-Parameter Set1 (aRadsensor) |
| 1 | ROM-Parameter Set2 (aDomsensor) |
| 2 | ROM-Parameter Set3 (HSS) |
| 3 | EEPROM Set1 (aRadsensor) |
| 4 | EEPROM Set1 (aDomsensor) |
| 5 | EEPROM Set1 (HSS) |
| 6 | EEPROM Set1 (ohne Offset) |
| 255 | kein Sensor angeschlossen |

### TAB_VDC_ENV_SENSOR_VERBAUPOSITION

| WERT | UWTEXT |
| --- | --- |
| 1 | VL |
| 2 | VR |
| 3 | HL |
| 4 | HR |
| 255 | kein Sensor angeschlossen |

### RES_0X4187

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_1_STEIGUNG_WERT | - | - | + | V*s²/m  oder  V/mm | high | int | - | - | 1 | 10000 | 0 | Sensor_1 Steigung (Einheit: vergleiche SENSOR_1_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [V*s²/m] -- (Beschleunigungssensor)b)  [V/mm] --  (Höhenstandssensor) |
| STAT_SENSOR_1_BASISOFFSET_WERT | - | - | + | V | high | int | - | - | 1 | 1000 | 0 | Sensor_1 Basisoffset |
| STAT_SENSOR_2_STEIGUNG_WERT | - | - | + | V*s²/m  oder  V/mm | high | int | - | - | 1 | 10000 | 0 | Sensor_2 Steigung  (Einheit: vergleiche SENSOR_2_VERBAUTYP Service VDC_SENSOR_WERTE)  a)  [V*s²/m] -- (Beschleunigungssensor)b)  [V/mm] --  (Höhenstandssensor) |
| STAT_SENSOR_2_BASISOFFSET_WERT | - | - | + | V | high | int | - | - | 1 | 1000 | 0 | Sensor_2 Basisoffset |
| STAT_SENSOR_3_STEIGUNG_WERT | - | - | + | V*s²/m  oder  V/mm | high | int | - | - | 1 | 10000 | 0 | Sensor_3 Steigung (Einheit: vergleiche SENSOR_3_VERBAUTYP Service VDC_SENSOR_WERTE)  a)  [V*s²/m] -- (Beschleunigungssensor)b)  [V/mm] --  (Höhenstandssensor) |
| STAT_SENSOR_3_BASISOFFSET_WERT | - | - | + | V | high | int | - | - | 1 | 1000 | 0 | Sensor_3 Basisoffset |
| STAT_SENSOR_4_STEIGUNG_WERT | - | - | + | V*s²/m  oder  V/mm | high | int | - | - | 1 | 10000 | 0 | Sensor_4 Steigung  (Einheit: vergleiche SENSOR_4_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [V*s²/m] -- (Beschleunigungssensor)b)  [V/mm] --  (Höhenstandssensor) |
| STAT_SENSOR_4_BASISOFFSET_WERT | - | - | + | V | high | int | - | - | 1 | 1000 | 0 | Sensor_4 Basisoffset |

### RES_0X4189

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_1_PHYS_WERT | - | - | + | m/s²  oder mm | high | int | - | - | 1 | 100 | 0 | Sensor_1 physikalisch  zeitsynchron (Einheit: vergleiche SENSOR_1_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |
| STAT_SENSOR_1_ROHWERT_WERT | - | - | + | V | high | unsigned int | - | - | 1 | 1000 | 0 | Sensor_1 Rohwert zeitsynchron |
| STAT_SENSOR_1_OFFSET_DYNAMISCH_WERT | - | - | + | m/s²  oder mm | high | int | - | - | 1 | 100 | 0 | Sensor_1 Offset dynamisch zeitsynchron (Einheit: vergleiche SENSOR_1_VERBAUTYP Service VDC_SENSOR_WERTE) a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |
| STAT_SENSOR_2_PHYS_WERT | - | - | + | m/s²  oder mm | high | int | - | - | 1 | 100 | 0 | Sensor_2 physikalisch  zeitsynchron (Einheit: vergleiche SENSOR_2_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |
| STAT_SENSOR_2_ROHWERT_WERT | - | - | + | V | high | unsigned int | - | - | 1 | 1000 | 0 | Sensor_2 Rohwert zeitsynchron |
| STAT_SENSOR_2_OFFSET_DYNAMISCH_WERT | - | - | + | m/s²  oder mm | high | int | - | - | 1 | 100 | 0 | Sensor_2 Offset dynamisch zeitsynchron (Einheit: vergleiche SENSOR_2_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |
| STAT_SENSOR_3_PHYS_WERT | - | - | + | m/s²  oder mm | high | int | - | - | 1 | 100 | 0 | Sensor_3 physikalisch  zeitsynchron (Einheit: vergleiche SENSOR_3_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |
| STAT_SENSOR_3_ROHWERT_WERT | - | - | + | V | high | unsigned int | - | - | 1 | 1000 | 0 | Sensor_3 Rohwert zeitsynchron |
| STAT_SENSOR_3_OFFSET_DYNAMISCH_WERT | - | - | + | m/s²  oder mm | high | int | - | - | 1 | 100 | 0 | Sensor_3 Offset dynamisch   zeitsynchron (Einheit: vergleiche SENSOR_3_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |
| STAT_SENSOR_4_PHYS_WERT | - | - | + | m/s²  oder mm | high | int | - | - | 1 | 100 | 0 | Sensor_4 physikalisch  zeitsynchron (Einheit: vergleiche SENSOR_4_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |
| STAT_SENSOR_4_ROHWERT_WERT | - | - | + | V | high | unsigned int | - | - | 1 | 1000 | 0 | Sensor_4 Rohwert zeitsynchron |
| STAT_SENSOR_4_OFFSET_DYNAMISCH_WERT | - | - | + | m/s²  oder mm | high | int | - | - | 1 | 100 | 0 | Sensor_4 Offset dynamisch zeitsynchron (Einheit: vergleiche SENSOR_4_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |

### RES_0X4182

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAEMPFER_VENTIL_VL_NORMIND_WERT | - | - | + | mH | high | unsigned int | - | - | 1 | 100 | 0 | Ventil Induktivität statisch vorne links |
| STAT_DAEMPFER_VENTIL_VL_NORMR_WERT | - | - | + | Ohm | high | unsigned int | - | - | 1 | 1000 | 0 | Ventil Widerstand statisch vorne links |
| STAT_DAEMPFER_VENTIL_VR_NORMIND_WERT | - | - | + | mH | high | unsigned int | - | - | 1 | 100 | 0 | Ventil Induktivität statisch vorne rechts |
| STAT_DAEMPFER_VENTIL_VR_NORMR_WERT | - | - | + | Ohm | high | unsigned int | - | - | 1 | 1000 | 0 | Ventil Widerstand statisch vorne rechts |
| STAT_DAEMPFER_VENTIL_HL_NORMIND_WERT | - | - | + | mH | high | unsigned int | - | - | 1 | 100 | 0 | Ventil Induktivität statisch hinten links |
| STAT_DAEMPFER_VENTIL_HL_NORMR_WERT | - | - | + | Ohm | high | unsigned int | - | - | 1 | 1000 | 0 | Ventil Widerstand statisch hinten links |
| STAT_DAEMPFER_VENTIL_HR_NORMIND_WERT | - | - | + | mH | high | unsigned int | - | - | 1 | 100 | 0 | Ventil Induktivität statisch hinten rechts |
| STAT_DAEMPFER_VENTIL_HR_NORMR_WERT | - | - | + | Ohm | high | unsigned int | - | - | 1 | 1000 | 0 | Ventil Widerstand statisch hinten rechts |
| STAT_DAEMPFER_VENTIL_DITHERAMPLLOW_WERT | - | - | + | A | high | unsigned int | - | - | 1 | 1000 | 0 | Ventil Amplitude low |
| STAT_DAEMPFER_VENTIL_DITHERAMPLHIGH_WERT | - | - | + | A | high | unsigned int | - | - | 1 | 1000 | 0 | Ventil Amplitude high |
| STAT_DAEMPFER_VENTIL_DITHERFREQ_WERT | - | - | + | Hz | high | unsigned int | - | - | 1 | 1 | 0 | Ventil Frequenz |

### RES_0X4183

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAUPT_VERSION_WERT | - | - | + | - | high | unsigned char | - | - | 1 | 1 | 0 | Haupt - Version |
| STAT_UNTER_VERSION_WERT | - | - | + | - | high | unsigned char | - | - | 1 | 1 | 0 | Unter - Version |
| STAT_PATCH_VERSION_WERT | - | - | + | - | high | unsigned char | - | - | 1 | 1 | 0 | Patch - Version |

### RES_0X4184

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VDC_TASTER1_STATUS | - | - | + | 0-n | high | unsigned int | - | TAB_VDC_TASTER_STATUS | 1 | 1 | 0 | Status Taster1 |
| STAT_VDC_TASTER2_STATUS | - | - | + | 0-n | high | unsigned int | - | TAB_VDC_TASTER_STATUS | 1 | 1 | 0 | Status Taster2 |

### RES_0X4185

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEN_BORDSPANNUNG_E | - | - | + | 0-n | high | unsigned int | - | TAB_VDC_SENSOR_STATUS | 1 | 1 | 0 | Status Spannung KL30 |
| STAT_SEN_BORDNETZSPANNUNG_E | - | - | + | 0-n | high | unsigned int | - | TAB_VDC_SENSOR_STATUS | 1 | 1 | 0 | Status Spannung KL15 |
| STAT_FEHLER_KRITISCH_LL | - | - | + | 0-n | high | unsigned int | - | TAB_VDC_FEHLER_KRITISCH_LL | 1 | 1 | 0 | Status Fehler kritisch |
| STAT_FEHLER_UNKRITISCH_LL | - | - | + | 0-n | high | unsigned long | - | TAB_VDC_FEHLER_UNKRITISCH_LL | 1 | 1 | 0 | Status Fehler unkritisch |
| STAT_DAEMPFER_VENTIL_VL_VORGABE | - | - | + | 0-n | high | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | 1 | 1 | 0 | Vorgabe Ventil vorne links |
| STAT_DAEMPFER_VENTIL_VR_VORGABE | - | - | + | 0-n | high | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | 1 | 1 | 0 | Vorgabe Ventil vorne  rechts |
| STAT_DAEMPFER_VENTIL_HL_VORGABE | - | - | + | 0-n | high | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | 1 | 1 | 0 | Vorgabe Ventil hinten links |
| STAT_DAEMPFER_VENTIL_HR_VORGABE | - | - | + | 0-n | high | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | 1 | 1 | 0 | Vorgabe Ventil hinten rechts |

### RES_0X4186

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VDC_REGLERSCHNELL_2MS5_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 2ms5 Task Regler |
| STAT_VDC_REGLERSCHNELL_2MS5_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 2ms5 Task Regler plus Unterbrechungen |
| STAT_VDC_REGLERLANGSAM1_10MS_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 10ms Task Regler1 |
| STAT_VDC_REGLERLANGSAM1_10MS_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 10ms Task Regler1 plus Unterbrechungen |
| STAT_VDC_REGLERLANGSAM2_10MS_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 10ms Task Regler2 |
| STAT_VDC_REGLERLANGSAM2_10MS_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 10ms Task Regler2 plus Unterbrechungen |
| STAT_VDC_SYSTEMSTATUS_10MS_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 10ms Task Systemstatus |
| STAT_VDC_SYSTEMSTATUS_10MS_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 10ms Task Systemstatus plus Unterbrechungen |
| STAT_VDC_COMTASK1_CYC0_STATIC_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM1 |
| STAT_VDC_COMTASK1_CYC0_STATIC_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM1 plus Unterbrechungen |
| STAT_VDC_COMTASK2_CYC0_DYN_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM2 |
| STAT_VDC_COMTASK2_CYC0_DYN_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM2 plus Unterbrechungen |
| STAT_VDC_COMTASK3_CYC1_STATIC_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM3 |
| STAT_VDC_COMTASK3_CYC1_STATIC_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM3 plus Unterbrechungen |
| STAT_VDC_COMTASK4_CYC1_DYN_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM4 |
| STAT_VDC_COMTASK4_CYC1_DYN_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM4 plus Unterbrechungen |
| STAT_VDC_COMTASK5_CYC0_STATIC_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM5 |
| STAT_VDC_COMTASK5_CYC0_STATIC_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM5 plus Unterbrechungen |
| STAT_VDC_FLEXRAYSYNC_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task Flexraysync |
| STAT_VDC_FLEXRAYSYNC_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task Flexraysync plus Unterbrechungen |

### RES_0X418D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VDC_REGLERSCHNELL_2MS5_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 2ms5 Task Regler |
| STAT_VDC_REGLERSCHNELL_2MS5_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 2ms5 Task Regler plus Unterbrechungen |
| STAT_VDC_REGLERLANGSAM1_10MS_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 10ms Task Regler1 |
| STAT_VDC_REGLERLANGSAM1_10MS_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 10ms Task Regler1 plus Unterbrechungen |
| STAT_VDC_REGLERLANGSAM2_10MS_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 10ms Task Regler2 |
| STAT_VDC_REGLERLANGSAM2_10MS_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 10ms Task Regler2 plus Unterbrechungen |
| STAT_VDC_SYSTEMSTATUS_10MS_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 10ms Task Systemstatus |
| STAT_VDC_SYSTEMSTATUS_10MS_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit 10ms Task Systemstatus plus Unterbrechungen |
| STAT_VDC_COMTASK1_CYC0_STATIC_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM1 |
| STAT_VDC_COMTASK1_CYC0_STATIC_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM1 plus Unterbrechungen |
| STAT_VDC_COMTASK2_CYC0_DYN_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM2 |
| STAT_VDC_COMTASK2_CYC0_DYN_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM2 plus Unterbrechungen |
| STAT_VDC_COMTASK3_CYC1_STATIC_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM3 |
| STAT_VDC_COMTASK3_CYC1_STATIC_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM3 plus Unterbrechungen |
| STAT_VDC_COMTASK4_CYC1_DYN_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM4 |
| STAT_VDC_COMTASK4_CYC1_DYN_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM4 plus Unterbrechungen |
| STAT_VDC_COMTASK5_CYC0_STATIC_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM5 |
| STAT_VDC_COMTASK5_CYC0_STATIC_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task COM5 plus Unterbrechungen |
| STAT_VDC_FLEXRAYSYNC_NETTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task Flexraysync |
| STAT_VDC_FLEXRAYSYNC_BRUTTO_WERT | us | high | unsigned int | - | - | 1 | 1 | 0 | Laufzeit Task Flexraysync plus Unterbrechungen |

### RES_0X418A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_MIN_SENSOR_WERT | - | - | + | V | high | unsigned int | - | - | 1 | 1000 | 0 | Sensor Spannung Minimum |
| STAT_SPANNUNG_MAX_SENSOR_WERT | - | - | + | V | high | unsigned int | - | - | 1 | 1000 | 0 | Sensor Spannung Maximum |
| STAT_SPANNUNG_VERSORGUNG_MIN_SENSOR_WERT | - | - | + | V | high | unsigned int | - | - | 1 | 1000 | 0 | Sensor Spannung Versorgung Minimum |
| STAT_SPANNUNG_VERSORGUNG_MAX_SENSOR_WERT | - | - | + | V | high | unsigned int | - | - | 1 | 1000 | 0 | Sensor Spannung Versorgung  Maximum |
| STAT_SENSOR_STEIGUNG_WERT | - | - | + | V*s²/m  oder  V/mm | high | int | - | - | 1 | 10000 | 0 | Sensor Steigung (Einheit: vergleiche SENSOR_1_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [V*s²/m] -- (Beschleunigungssensor)b)  [V/mm] --  (Höhenstandssensor) |
| STAT_SENSOR_BASISOFFSET_WERT | - | - | + | V | high | int | - | - | 1 | 1000 | 0 | Sensor Basisoffset |

### ARG_0X418A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPANNUNG_MIN_SENSOR | + | - | V | high | unsigned int | - | - | 1000 | 1 | 0 | - | - | Sensor Spannung Minimum |
| SPANNUNG_MAX_SENSOR | + | - | V | high | unsigned int | - | - | 1000 | 1 | 0 | - | - | Sensor Spannung Maximum |
| SPANNUNG_VERSORGUNG_MIN_SENSOR | + | - | V | high | unsigned int | - | - | 1000 | 1 | 0 | - | - | Sensor Spannung Versorgung Minimum |
| SPANNUNG_VERSORGUNG_MAX_SENSOR | + | - | V | high | unsigned int | - | - | 1000 | 1 | 0 | - | - | Sensor Spannung Versorgung  Maximum |
| SENSOR_STEIGUNG | + | - | V*s²/m  oder  V/mm | high | int | - | - | 10000 | 1 | 0 | - | - | Sensor Steigung (Einheit: vergleiche SENSOR_1_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [V*s²/m] -- (Beschleunigungssensor)b)  [V/mm] --  (Höhenstandssensor) |
| SENSOR_BASISOFFSET | + | - | V | high | int | - | - | 1000 | 1 | 0 | - | - | Sensor Basisoffset |

### RES_0X4188

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_1_OFFSET_DYNAMISCH_WERT | m/s²  oder mm | high | int | - | - | 1 | 100 | 0 | Sensor_1 Offset dynamisch (Einheit: vergleiche SENSOR_1_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |
| STAT_SENSOR_2_OFFSET_DYNAMISCH_WERT | m/s²  oder mm | high | int | - | - | 1 | 100 | 0 | Sensor_2 Offset dynamisch (Einheit: vergleiche SENSOR_2_VERBAUTYP Service VDC_SENSOR_WERTE)  a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |
| STAT_SENSOR_3_OFFSET_DYNAMISCH_WERT | m/s²  oder mm | high | int | - | - | 1 | 100 | 0 | Sensor_3 Offset dynamisch (Einheit: vergleiche SENSOR_3_VERBAUTYP Service VDC_SENSOR_WERTE) a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |
| STAT_SENSOR_4_OFFSET_DYNAMISCH_WERT | m/s²  oder mm | high | int | - | - | 1 | 100 | 0 | Sensor_4 Offset dynamisch (Einheit: vergleiche SENSOR_4_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |

### ARG_0X4188

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SENSOR_1_OFFSET_DYNAMISCH | m/s²  oder mm | high | int | - | - | 100 | 1 | 0 | - | - | Sensor_1 Offset dynamisch (Einheit: vergleiche SENSOR_1_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |
| SENSOR_2_OFFSET_DYNAMISCH | m/s²  oder mm | high | int | - | - | 100 | 1 | 0 | - | - | Sensor_2  Offset dynamisch (Einheit: vergleiche SENSOR_2_VERBAUTYP Service VDC_SENSOR_WERTE)  a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |
| SENSOR_3_OFFSET_DYNAMISCH | m/s²  oder mm | high | int | - | - | 100 | 1 | 0 | - | - | Sensor_3 Offset dynamisch (Einheit: vergleiche SENSOR_3_VERBAUTYP Service VDC_SENSOR_WERTE) a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |
| SENSOR_4_OFFSET_DYNAMISCH | m/s²  oder mm | high | int | - | - | 100 | 1 | 0 | - | - | Sensor_4  Offset dynamisch (Einheit: vergleiche SENSOR_4_VERBAUTYP Service VDC_SENSOR_WERTE)a)  [m/s²] -- (Beschleunigungssensor)b)  [mm] --  (Höhenstandssensor) |

### RES_0X4181

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAEMPFER_VENTIL_VL_LERNIND_WERT | - | - | + | mH | high | unsigned int | - | - | 1 | 100 | 0 | Ventil Induktivität dynamisch vorne links |
| STAT_DAEMPFER_VENTIL_VL_LERNR_WERT | - | - | + | Ohm | high | unsigned int | - | - | 1 | 1000 | 0 | Ventil Widerstand dynamisch vorne links |
| STAT_DAEMPFER_VENTIL_VL_TEMP_WERT | - | - | + | °C | high | int | - | - | 1 | 10 | 0 | Ventil Temperatur vorne links |
| STAT_DAEMPFER_VENTIL_VR_LERNIND_WERT | - | - | + | mH | high | unsigned int | - | - | 1 | 100 | 0 | Ventil Induktivität dynamisch vorne rechts |
| STAT_DAEMPFER_VENTIL_VR_LERNR_WERT | - | - | + | Ohm | high | unsigned int | - | - | 1 | 1000 | 0 | Ventil Widerstand dynamisch vorne rechts |
| STAT_DAEMPFER_VENTIL_VR_TEMP_WERT | - | - | + | °C | high | int | - | - | 1 | 10 | 0 | Ventil Temperatur vorne rechts |
| STAT_DAEMPFER_VENTIL_HL_LERNIND_WERT | - | - | + | mH | high | unsigned int | - | - | 1 | 100 | 0 | Ventil Induktivität dynamisch hinten links |
| STAT_DAEMPFER_VENTIL_HL_LERNR_WERT | - | - | + | Ohm | high | unsigned int | - | - | 1 | 1000 | 0 | Ventil Widerstand dynamisch hinten links |
| STAT_DAEMPFER_VENTIL_HL_TEMP_WERT | - | - | + | °C | high | int | - | - | 1 | 10 | 0 | Ventil Temperatur hinten links |
| STAT_DAEMPFER_VENTIL_HR_LERNIND_WERT | - | - | + | mH | high | unsigned int | - | - | 1 | 100 | 0 | Ventil Induktivität dynamisch hinten rechts |
| STAT_DAEMPFER_VENTIL_HR_LERNR_WERT | - | - | + | Ohm | high | unsigned int | - | - | 1 | 1000 | 0 | Ventil Widerstand dynamisch hinten rechts |
| STAT_DAEMPFER_VENTIL_HR_TEMP_WERT | - | - | + | °C | high | int | - | - | 1 | 10 | 0 | Ventil Temperatur hinten rechts |

### ARG_0X4181

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAEMPFER_VENTIL_VL_LERNIND | + | - | mH | high | unsigned int | - | - | 100 | 1 | 0 | - | - | Ventil Induktivität dynamisch vorne links |
| DAEMPFER_VENTIL_VL_LERNR | + | - | Ohm | high | unsigned int | - | - | 1000 | 1 | 0 | - | - | Ventil Widerstand dynamisch vorne links |
| DAEMPFER_VENTIL_VL_TEMP | + | - | °C | high | int | - | - | 10 | 1 | 0 | - | - | Ventil Temperatur vorne links |
| DAEMPFER_VENTIL_VR_LERNIND | + | - | mH | high | unsigned int | - | - | 100 | 1 | 0 | - | - | Ventil Induktivität dynamisch vorne rechts |
| DAEMPFER_VENTIL_VR_LERNR | + | - | Ohm | high | unsigned int | - | - | 1000 | 1 | 0 | - | - | Ventil Widerstand dynamisch vorne rechts |
| DAEMPFER_VENTIL_VR_TEMP | + | - | °C | high | int | - | - | 10 | 1 | 0 | - | - | Ventil Temperatur vorne rechts |
| DAEMPFER_VENTIL_HL_LERNIND | + | - | mH | high | unsigned int | - | - | 100 | 1 | 0 | - | - | Ventil Induktivität dynamisch hinten links |
| DAEMPFER_VENTIL_HL_LERNR | + | - | Ohm | high | unsigned int | - | - | 1000 | 1 | 0 | - | - | Ventil Widerstand dynamisch hinten links |
| DAEMPFER_VENTIL_HL_TEMP | + | - | °C | high | int | - | - | 10 | 1 | 0 | - | - | Ventil Temperatur hinten links |
| DAEMPFER_VENTIL_HR_LERNIND | + | - | mH | high | unsigned int | - | - | 100 | 1 | 0 | - | - | Ventil Induktivität dynamisch hinten rechts |
| DAEMPFER_VENTIL_HR_LERNR | + | - | Ohm | high | unsigned int | - | - | 1000 | 1 | 0 | - | - | Ventil Widerstand dynamisch hinten rechts |
| DAEMPFER_VENTIL_HR_TEMP | + | - | °C | high | int | - | - | 10 | 1 | 0 | - | - | Ventil Temperatur hinten rechts |

### RES_0X418B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_I_SOLL_ON_LIMIT_WERT | A | high | motorola float | - | - | 1 | 1 | 0 | Soll Einschalt Stromschwelle |
| STAT_I_SOLL_OFF_LIMIT_WERT | A | high | motorola float | - | - | 1 | 1 | 0 | Soll Ausschalt Stromschwelle |
| STAT_I_IST_OFF_LIMIT_WERT | A | high | motorola float | - | - | 1 | 1 | 0 | Ist Ausschalt Stromschwelle |
| STAT_I_SOLL_MAX_LIMIT_WERT | A | high | motorola float | - | - | 1 | 1 | 0 | maximaler Wert für den Sollstrom |
| STAT_IREFCHG_DIDTLIMIT_WERT | A/s | high | motorola float | - | - | 1 | 1 | 0 | Detektionsschwelle für erhebliche Schwankung des Referenzstroms |
| STAT_IREFCHG_DECAYLIMIT_WERT | A | high | motorola float | - | - | 1 | 1 | 0 | Grenzwert für das Ende der DECAY Funktion |
| STAT_D3_MIN_WERT | - | high | motorola float | - | - | 1 | 1 | 0 | interner Faktor (Minimalwert) |
| STAT_D3_MAX_WERT | - | high | motorola float | - | - | 1 | 1 | 0 | interner Faktor (Maximalwert) |
| STAT_DW_MAX_CALC_CURR_WERT | mA | high | motorola float | - | - | 1 | 1 | 0 | maximaler Stromwert für interne Berechnungen |
| STAT_DW_MAX_OUT_CURR_WERT | mA | high | motorola float | - | - | 1 | 1 | 0 | maximal einzustellender Strom |
| STAT_R_MIN_WERT | mOhm | high | motorola float | - | - | 1 | 1 | 0 | Minimaler Lastwiderstand im Lastkreis |
| STAT_R_MAX_WERT | mOhm | high | motorola float | - | - | 1 | 1 | 0 | Maximaler Lastwiderstand im Lastkreis |
| STAT_R0_WERT | mOhm | high | motorola float | - | - | 1 | 1 | 0 | Widerstand im Lastkreis |
| STAT_L0_WERT | uH | high | motorola float | - | - | 1 | 1 | 0 | Spule und Gegeninduktivität |
| STAT_R_FACTOR_WERT | - | high | motorola float | - | - | 1 | 1 | 0 | Korrekturfaktor für Widerstand |
| STAT_L_FACTOR_WERT | - | high | motorola float | - | - | 1 | 1 | 0 | Korrekturfaktor für Induktivität |
| STAT_U_F_MIN_WERT | mV | high | motorola float | - | - | 1 | 1 | 0 | minimale Spannung an der Freilaufdiode |
| STAT_U_F_MAX_WERT | mV | high | motorola float | - | - | 1 | 1 | 0 | maximale Spannung an zwei Freilaufdioden |
| STAT_U_F_1D_WERT | mV | high | motorola float | - | - | 1 | 1 | 0 | Spannung an der Freilaufdiode |
| STAT_1_DURCHLAUFZEIT_WERT | us | high | motorola float | - | - | 1 | 1 | 0 | Laufzeit des Controllers auf dem Ziel Steuergerät |
| STAT_NENNER1_WERT | - | high | motorola float | - | - | 1 | 1 | 0 | Korrekturwert für den Gesamtwiderstand |
| STAT_I_MITTE_WERT | mA | high | motorola float | - | - | 1 | 1 | 0 | Strommittelwert (aus Imin und Imax gebildet) |
| STAT_FILTER_GRENZWERT_0_WERT | mA | high | motorola float | - | - | 1 | 1 | 0 | Filter Grenzwert 0 |
| STAT_FILTER_GRENZWERT_1_WERT | mA | high | motorola float | - | - | 1 | 1 | 0 | Filter Grenzwert 1 |
| STAT_VALVE_KL0_U_WERT | - | high | motorola float | - | - | 1 | 1 | 0 | Korrekturfaktor KL0 |
| STAT_VALVE_ML0_U_WERT | - | high | motorola float | - | - | 1 | 1 | 0 | Korrekturfaktor ML0 |
| STAT_PUSH_TIMER_1_WERT | Zyklen | high | unsigned int | - | - | 1 | 1 | 0 | Push Timer 1 |
| STAT_PUSH_TIMER_2_WERT | Zyklen | high | unsigned int | - | - | 1 | 1 | 0 | Push Timer 2 |
| STAT_PUSH_CURRENT_1_WERT | mA | high | motorola float | - | - | 1 | 1 | 0 | Stoß Strom 1 |
| STAT_PUSH_CURRENT_2_WERT | mA | high | motorola float | - | - | 1 | 1 | 0 | Stoß Strom 2 |
| STAT_DITHER_VALUE_1_WERT | - | high | motorola float | - | - | 1 | 1 | 0 | Dither Wert 1 |
| STAT_DITHER_VALUE_2_WERT | - | high | motorola float | - | - | 1 | 1 | 0 | Dither Wert 2 |
| STAT_DITHER_CURRENT_0_WERT | mA | high | motorola float | - | - | 1 | 1 | 0 | Dither Strom 0 |
| STAT_DITHER_CURRENT_1_WERT | mA | high | motorola float | - | - | 1 | 1 | 0 | Dither Strom 1 |
| STAT_DITHER_CURRENT_2_WERT | mA | high | motorola float | - | - | 1 | 1 | 0 | Dither Strom 2 |
| STAT_PUSH_CURRENT_REAL_WERT | mA | high | unsigned int | - | - | 1 | 1 | 0 | Strom für reale Pushphase |
| STAT_PUSH_TIMER_REAL_WERT | Zyklen | high | unsigned int | - | - | 1 | 1 | 0 | Zeit für reale Pushphase |

### ARG_0X418B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| I_SOLL_ON_LIMIT | A | high | motorola float | - | - | 1 | 1 | 0 | - | - | Soll Einschalt Stromschwelle |
| I_SOLL_OFF_LIMIT | A | high | motorola float | - | - | 1 | 1 | 0 | - | - | Soll Ausschalt Stromschwelle |
| I_IST_OFF_LIMIT | A | high | motorola float | - | - | 1 | 1 | 0 | - | - | Ist Ausschalt Stromschwelle |
| I_SOLL_MAX_LIMIT | A | high | motorola float | - | - | 1 | 1 | 0 | - | - | maximaler Wert für den Sollstrom |
| IREFCHG_DIDTLIMIT | A/s | high | motorola float | - | - | 1 | 1 | 0 | - | - | Detektionsschwelle für erhebliche Schwankung des Referenzstroms |
| IREFCHG_DECAYLIMIT | A | high | motorola float | - | - | 1 | 1 | 0 | - | - | Grenzwert für das Ende der DECAY Funktion |
| D3_MIN | - | high | motorola float | - | - | 1 | 1 | 0 | - | - | interner Faktor (Minimalwert) |
| D3_MAX | - | high | motorola float | - | - | 1 | 1 | 0 | - | - | interner Faktor (Maximalwert) |
| DW_MAX_CALC_CURR | mA | high | motorola float | - | - | 1 | 1 | 0 | - | - | maximaler Stromwert für interne Berechnungen |
| DW_MAX_OUT_CURR | mA | high | motorola float | - | - | 1 | 1 | 0 | - | - | maximal einzustellender Strom |
| R_MIN | mOhm | high | motorola float | - | - | 1 | 1 | 0 | - | - | Minimaler Lastwiderstand im Lastkreis |
| R_MAX | mOhm | high | motorola float | - | - | 1 | 1 | 0 | - | - | Maximaler Lastwiderstand im Lastkreis |
| R0 | mOhm | high | motorola float | - | - | 1 | 1 | 0 | - | - | Widerstand im Lastkreis |
| L0 | uH | high | motorola float | - | - | 1 | 1 | 0 | - | - | Spule und Gegeninduktivität |
| R_FACTOR | - | high | motorola float | - | - | 1 | 1 | 0 | - | - | Korrekturfaktor für Widerstand |
| L_FACTOR | - | high | motorola float | - | - | 1 | 1 | 0 | - | - | Korrekturfaktor für Induktivität |
| U_F_MIN | mV | high | motorola float | - | - | 1 | 1 | 0 | - | - | minimale Spannung an der Freilaufdiode |
| U_F_MAX | mV | high | motorola float | - | - | 1 | 1 | 0 | - | - | maximale Spannung an zwei Freilaufdioden |
| U_F_1D | mV | high | motorola float | - | - | 1 | 1 | 0 | - | - | Spannung an der Freilaufdiode |
| 1_DURCHLAUFZEIT | us | high | motorola float | - | - | 1 | 1 | 0 | - | - | Laufzeit des Controllers auf dem Ziel Steuergerät |
| NENNER1 | - | high | motorola float | - | - | 1 | 1 | 0 | - | - | Korrekturwert für den Gesamtwiderstand |
| I_MITTE | mA | high | motorola float | - | - | 1 | 1 | 0 | - | - | Strommittelwert (aus Imin und Imax gebildet) |
| FILTER_GRENZWERT_0 | mA | high | motorola float | - | - | 1 | 1 | 0 | - | - | Filter Grenzwert 0 |
| FILTER_GRENZWERT_1 | mA | high | motorola float | - | - | 1 | 1 | 0 | - | - | Filter Grenzwert 1 |
| VALVE_KL0_U | - | high | motorola float | - | - | 1 | 1 | 0 | - | - | Korrekturfaktor KL0 |
| VALVE_ML0_U | - | high | motorola float | - | - | 1 | 1 | 0 | - | - | Korrekturfaktor ML0 |
| PUSH_TIMER_1 | Zyklen | high | unsigned int | - | - | 1 | 1 | 0 | - | - | Push Timer 1 |
| PUSH_TIMER_2 | Zyklen | high | unsigned int | - | - | 1 | 1 | 0 | - | - | Push Timer 2 |
| PUSH_CURRENT_1 | mA | high | motorola float | - | - | 1 | 1 | 0 | - | - | Stoß Strom 1 |
| PUSH_CURRENT_2 | mA | high | motorola float | - | - | 1 | 1 | 0 | - | - | Stoß Strom 2 |
| DITHER_VALUE_1 | - | high | motorola float | - | - | 1 | 1 | 0 | - | - | Dither Wert 1 |
| DITHER_VALUE_2 | - | high | motorola float | - | - | 1 | 1 | 0 | - | - | Dither Wert 2 |
| DITHER_CURRENT_0 | mA | high | motorola float | - | - | 1 | 1 | 0 | - | - | Dither Strom 0 |
| DITHER_CURRENT_1 | mA | high | motorola float | - | - | 1 | 1 | 0 | - | - | Dither Strom 1 |
| DITHER_CURRENT_2 | mA | high | motorola float | - | - | 1 | 1 | 0 | - | - | Dither Strom 2 |
| PUSH_CURRENT_REAL | mA | high | unsigned int | - | - | 1 | 1 | 0 | - | - | Strom für reale Pushphase |
| PUSH_TIMER_REAL | Zyklen | high | unsigned int | - | - | 1 | 1 | 0 | - | - | Zeit für reale Pushphase |

### RES_0X4180

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAEMPFER_VENTIL_VL_PWM_WERT | - | - | + | % | high | unsigned int | - | - | 1 | 100 | 0 | Ventil PWM-Frequenz vorne links |
| STAT_DAEMPFER_VENTIL_VR_PWM_WERT | - | - | + | % | high | unsigned int | - | - | 1 | 100 | 0 | Ventil PWM-Frequenz vorne rechts |
| STAT_DAEMPFER_VENTIL_HL_PWM_WERT | - | - | + | % | high | unsigned int | - | - | 1 | 100 | 0 | Ventil PWM-Frequenz hinten links |
| STAT_DAEMPFER_VENTIL_HR_PWM_WERT | - | - | + | % | high | unsigned int | - | - | 1 | 100 | 0 | Ventil PWM-Frequenz hinten rechts |

### ARG_0X4180

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAEMPFER_VENTIL_VL_PWM | + | - | % | high | unsigned int | - | - | 100 | 1 | 0 | - | - | Ventil PWM-Frequenz vorne links |
| DAEMPFER_VENTIL_VR_PWM | + | - | % | high | unsigned int | - | - | 100 | 1 | 0 | - | - | Ventil PWM-Frequenz vorne rechts |
| DAEMPFER_VENTIL_HL_PWM | + | - | % | high | unsigned int | - | - | 100 | 1 | 0 | - | - | Ventil PWM-Frequenz hinten links |
| DAEMPFER_VENTIL_HR_PWM | + | - | % | high | unsigned int | - | - | 100 | 1 | 0 | - | - | Ventil PWM-Frequenz hinten rechts |

### RES_0XF040

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | 1 | 1 | 0 | Status Routine |

### RES_0XF041

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | 1 | 1 | 0 | Status Routine |

### RES_0X418C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LL_FEHLER_KRITISCH_1_WERT | - | - | unsigned int | - | - | - | - | - | kritischer Fehler 1 |
| STAT_LL_FEHLER_HAEUFIGKEIT_1_WERT | - | - | unsigned int | - | - | - | - | - | Häufigkeit 1 |
| STAT_LL_UMWELTBEDINGUNG_1_1_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 1 zu Fehler 1 |
| STAT_LL_UMWELTBEDINGUNG_1_2_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 2 zu Fehler 1 |
| STAT_LL_UMWELTBEDINGUNG_1_3_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 3 zu Fehler 1 |
| STAT_LL_UMWELTBEDINGUNG_1_4_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 4 zu Fehler 1 |
| STAT_LL_UMWELTBEDINGUNG_1_5_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 5 zu Fehler 1 |
| STAT_LL_FEHLER_KRITISCH_2_WERT | - | - | unsigned int | - | - | - | - | - | kritischer Fehler 2 |
| STAT_LL_FEHLER_HAEUFIGKEIT_2_WERT | - | - | unsigned int | - | - | - | - | - | Häufigkeit 2 |
| STAT_LL_UMWELTBEDINGUNG_2_1_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 1 zu Fehler 2 |
| STAT_LL_UMWELTBEDINGUNG_2_2_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 2 zu Fehler 2 |
| STAT_LL_UMWELTBEDINGUNG_2_3_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 3 zu Fehler 2 |
| STAT_LL_UMWELTBEDINGUNG_2_4_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 4 zu Fehler 2 |
| STAT_LL_UMWELTBEDINGUNG_2_5_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 5 zu Fehler 2 |
| STAT_LL_FEHLER_KRITISCH_3_WERT | - | - | unsigned int | - | - | - | - | - | kritischer Fehler 3 |
| STAT_LL_FEHLER_HAEUFIGKEIT_3_WERT | - | - | unsigned int | - | - | - | - | - | Häufigkeit 3 |
| STAT_LL_UMWELTBEDINGUNG_3_1_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 1 zu Fehler 3 |
| STAT_LL_UMWELTBEDINGUNG_3_2_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 2 zu Fehler 3 |
| STAT_LL_UMWELTBEDINGUNG_3_3_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 3 zu Fehler 3 |
| STAT_LL_UMWELTBEDINGUNG_3_4_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 4 zu Fehler 3 |
| STAT_LL_UMWELTBEDINGUNG_3_5_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 5 zu Fehler 3 |
| STAT_LL_FEHLER_KRITISCH_4_WERT | - | - | unsigned int | - | - | - | - | - | kritischer Fehler 4 |
| STAT_LL_FEHLER_HAEUFIGKEIT_4_WERT | - | - | unsigned int | - | - | - | - | - | Häufigkeit 4 |
| STAT_LL_UMWELTBEDINGUNG_4_1_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 1 zu Fehler 4 |
| STAT_LL_UMWELTBEDINGUNG_4_2_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 2 zu Fehler 4 |
| STAT_LL_UMWELTBEDINGUNG_4_3_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 3 zu Fehler 4 |
| STAT_LL_UMWELTBEDINGUNG_4_4_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 4 zu Fehler 4 |
| STAT_LL_UMWELTBEDINGUNG_4_5_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 5 zu Fehler 4 |
| STAT_LL_FEHLER_KRITISCH_5_WERT | - | - | unsigned int | - | - | - | - | - | kritischer Fehler 5 |
| STAT_LL_FEHLER_HAEUFIGKEIT_5_WERT | - | - | unsigned int | - | - | - | - | - | Häufigkeit 5 |
| STAT_LL_UMWELTBEDINGUNG_5_1_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 1 zu Fehler 5 |
| STAT_LL_UMWELTBEDINGUNG_5_2_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 2 zu Fehler 5 |
| STAT_LL_UMWELTBEDINGUNG_5_3_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 3 zu Fehler 5 |
| STAT_LL_UMWELTBEDINGUNG_5_4_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 4 zu Fehler 5 |
| STAT_LL_UMWELTBEDINGUNG_5_5_WERT | - | - | unsigned int | - | - | - | - | - | Umweltbedingung 5 zu Fehler 5 |

### TAB_VDC_TASTER_STATUS

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x8000 | Signal unplausibel |
| 0x4000 | reserviert |
| 0x2000 | Leitungsunterbrechung Versorgung-Masse |
| 0x1000 | Funktionsbeleuchtung - Überspannung |
| 0x0800 | Funktionsbeleuchtung - Unterspannung |
| 0x0400 | Funktionsbeleuchtung - Abriss Versorgung |
| 0x0200 | reserviert |
| 0x0100 | reserviert |
| 0x0080 | reserviert |
| 0x0040 | reserviert |
| 0x0020 | Leitungsunterbrechung Signal-Masse |
| 0x0010 | kein Signal |
| 0x0008 | Signal unterhalb Schwelle |
| 0x0004 | Signal oberhalb Schwelle |
| 0x0002 | Initialisierung |
| 0x0001 | reserviert |
| 0xFFFF | manuell auswerten |

### TAB_VDC_FEHLER_KRITISCH_LL

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x0003 | ADC-Fehler |
| 0x0004 | ALU-Fehler |
| 0x0005 | Core-Spg.-Fehler |
| 0x0007 | TLE Fehler |
| 0x0008 | Watchdog Fehler |
| 0x0028 | Taskfehler |
| 0x0030 | Reset-unbekannte Ursache/unerwartet |
| 0x0031 | External Reset (keine Anwendung im ICM-V, da keine Unterscheidung der Ursache möglich) |
| 0x0032 | Loss-of-Lock-Reset |
| 0x0033 | Loss-of-Clock-Reset |
| 0x0034 | CPU WD Reset/Debug-Reset (keine Anwendung im ICM-V) |
| 0x0036 | Checkstop-Reset |
| 0x0037 | Software-System-Reset (keine Anwendung im ICM-V) |
| 0x0038 | Software-external-Reset (keine Anwendung im ICM-V) |
| 0x0040 | Reserved |
| 0x0041 | Maschine-Check |
| 0x0042 | Data-Storage |
| 0x0043 | Instruction-Storage |
| 0x0044 | External Interupt |
| 0x0045 | Alignment |
| 0x0046 | Program |
| 0x0047 | Floating-point unavailbale |
| 0x0048 | System-Call |
| 0x0049 | AP unavailable |
| 0x004A | Dekrementer |
| 0x004B | Fixed Interval Timer |
| 0x004C | Watchdog Timer |
| 0x004D | Data TLB Error |
| 0x004E | Instruction TLB Error |
| 0x004F | Debug |
| 0x0050 | Reserved |
| 0x0051 | Reserved |
| 0x0052 | Reserved |
| 0x0053 | Reserved |
| 0x0054 | Reserved |
| 0x0055 | Reserved |
| 0x0056 | Reserved |
| 0x0057 | Reserved |
| 0x0058 | Reserved |
| 0x0059 | Reserved |
| 0x005A | Reserved |
| 0x005B | Reserved |
| 0x005C | Reserved |
| 0x005D | Reserved |
| 0x005E | Reserved |
| 0x005F | Reserved |
| 0x0060 | SPE unavailbale Exc |
| 0x0061 | SPE Data Exc |
| 0x0062 | SPE Round Exc |
| 0x0069 | Deadline |
| 0x006B | Stack-Fehler |
| 0x0070 | unbekannter OS-Fehler |

### TAB_VDC_FEHLER_UNKRITISCH_LL

| WERT | TEXT |
| --- | --- |
| 0x00000000 | kein Fehler festgestellt |
| 0x00000001 | FlexRay Transceiver Bus-Error |
| 0x00000002 | log. FlexRay Transceiver Error |
| 0x00000004 | FlexRay Bus-Off (Protokoll Halt) |
| 0x00000008 | OS nicht synchron |
| 0x00000010 | Knoten nicht synchron |
| 0x00000020 | PLL-Fehler |
| 0x00000100 | Task Fehler (WCET) |
| 0x00010000 | EEPROM-Diagnose |
| 0x00020000 | ROM Check Fehler |
| 0x00040000 | Strommessung inkonsistent |
| 0x00080000 | Coding (SC) - keine Codierdaten |
| 0x00100000 | Fehler Inbetriebnahmedaten |
| 0xFFFFFFFF | manuell auswerten |

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

### RES_0XDC16

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAEMPFER_VENTIL_VL_STROM_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ventilstrom vorne links |
| STAT_DAEMPFER_VENTIL_VR_STROM_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ventilstrom vorne rechts |
| STAT_DAEMPFER_VENTIL_HL_STROM_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ventilstrom hinten links |
| STAT_DAEMPFER_VENTIL_HR_STROM_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ventilstrom hinten rechts |

### ARG_0XDC16

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAEMPFER_VENTIL_VL_STROM | A | - | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Ventilstrom vorne links |
| DAEMPFER_VENTIL_VR_STROM | A | - | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Ventilstrom vorne rechts |
| DAEMPFER_VENTIL_HL_STROM | A | - | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Ventilstrom hinten links |
| DAEMPFER_VENTIL_HR_STROM | A | - | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Ventilstrom hinten rechts |

### RES_0XDC1B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAEMPFER_VENTIL_VL_STATUS | 0-n | - | unsigned int | - | TAB_VDC_VENTILE_STATUS | 1.0 | 1.0 | 0.0 | Ventil Status vorne links |
| STAT_DAEMPFER_VENTIL_VR_STATUS | 0-n | - | unsigned int | - | TAB_VDC_VENTILE_STATUS | 1.0 | 1.0 | 0.0 | Ventil Status vorne rechts |
| STAT_DAEMPFER_VENTIL_HL_STATUS | 0-n | - | unsigned int | - | TAB_VDC_VENTILE_STATUS | 1.0 | 1.0 | 0.0 | Ventil Status hinten links |
| STAT_DAEMPFER_VENTIL_HR_STATUS | 0-n | - | unsigned int | - | TAB_VDC_VENTILE_STATUS | 1.0 | 1.0 | 0.0 | Ventil Status hinten rechts |

### TAB_VDC_VENTILE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x0001 | Ventil Kurzschluss nach KL30 |
| 0x0002 | Ventil Kurzschluss nach KL31 |
| 0x0004 | Ventil offene Leitung |
| 0x0008 | Ventil Kurzschluss |
| 0x0010 | reserviert |
| 0x0020 | Ventilstrommessung nicht kalibriert |
| 0x0040 | keine Endstufenfreigabe über Watchdog |
| 0x0080 | Signal unplausibel |
| 0x0100 | allgemeiner Ventilfehler bei Onlineprüfung |
| 0x0200 | Hochlaufprüfung nicht durchgeführt |
| 0x0400 | Stromplausibilitätsfehler |
| 0x0800 | reserviert |
| 0x1000 | reserviert |
| 0x2000 | reserviert |
| 0x4000 | reserviert |
| 0x8000 | reserviert |
| 0xFFFF | manuell auswerten |

### RES_0XDC19

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAEMPFER_VENTIL_VERBAUKENNUNG | 0-n | - | unsigned char | - | TAB_VDC_VENTIL_VERBAUKENNUNG | 1.0 | 1.0 | 0.0 | Verbaukennung Ventil |
| STAT_DAEMPFER_VENTIL_VL_IIST_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Strom Ist Ventil vorne links |
| STAT_DAEMPFER_VENTIL_VL_ISOLL_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Strom Soll Ventil vorne links |
| STAT_DAEMPFER_VENTIL_VL_PWMSOLL_WERT | % | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM-Frequenz Soll Ventil vorne links |
| STAT_DAEMPFER_VENTIL_VR_IIST_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Strom Ist Ventil vorne  rechts |
| STAT_DAEMPFER_VENTIL_VR_ISOLL_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Strom Soll Ventil vorne  rechts |
| STAT_DAEMPFER_VENTIL_VR_PWMSOLL_WERT | % | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM-Frequenz Soll Ventil vorne rechts |
| STAT_DAEMPFER_VENTIL_HL_IIST_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Strom Ist Ventil hinten links |
| STAT_DAEMPFER_VENTIL_HL_ISOLL_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Strom Soll Ventil hinten links |
| STAT_DAEMPFER_VENTIL_HL_PWMSOLL_WERT | % | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM-Frequenz Soll Ventil hinten links |
| STAT_DAEMPFER_VENTIL_HR_IIST_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Strom Ist Ventil hinten rechts |
| STAT_DAEMPFER_VENTIL_HR_ISOLL_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Strom Soll Ventil hinten rechts |
| STAT_DAEMPFER_VENTIL_HR_PWMSOLL_WERT | % | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM-Frequenz Soll Ventil hinten rechts |
| STAT_DAEMPFER_VENTIL_VL_VORGABE | 0-n | - | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | - | - | - | Vorgabe Ventil vorne links |
| STAT_DAEMPFER_VENTIL_VR_VORGABE | 0-n | - | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | - | - | - | Vorgabe Ventil vorne  rechts |
| STAT_DAEMPFER_VENTIL_HL_VORGABE | 0-n | - | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | - | - | - | Vorgabe Ventil hinten links |
| STAT_DAEMPFER_VENTIL_HR_VORGABE | 0-n | - | unsigned char | - | TAB_VDC_VENTILE_VORGABE_ENDSTUFE | - | - | - | Vorgabe Ventil hinten rechts |

### TAB_VDC_VENTIL_VERBAUKENNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Tenneco |
| 0x01 | Sachs |
| 0x02 | Tenneco_Grenzfrequenz |
| 0x03 | Ventilparameter_Eeprom |
| 0xFF | Ungültig |

### TAB_VDC_VENTILE_VORGABE_ENDSTUFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Zustand Regeln soll verlassen werden |
| 0x01 | reserviert |
| 0x02 | Initialisierung |
| 0x04 | Verwende Sollstrom |
| 0x08 | Verwende Soll-PWM |
| 0x10 | Endstufe abschalten |
| 0x20 | Hochlaufprüfung starten |
| 0x40 | reserviert |
| 0x80 | Vorgaben invalid |
| 0xFF | nicht definiert |

### RES_0XDC28

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PERSONALISIERUNG_0 | 0-n | - | unsigned char | - | TAB_VDC_PIA_MODUS | - | - | - | Profil Personalisierung 0 |
| STAT_PERSONALISIERUNG_1 | 0-n | - | unsigned char | - | TAB_VDC_PIA_MODUS | - | - | - | Profil Personalisierung 1 |
| STAT_PERSONALISIERUNG_2 | 0-n | - | unsigned char | - | TAB_VDC_PIA_MODUS | - | - | - | Profil Personalisierung 2 |
| STAT_PERSONALISIERUNG_3 | 0-n | - | unsigned char | - | TAB_VDC_PIA_MODUS | - | - | - | Profil Personalisierung 3 |
| STAT_GAST | 0-n | - | unsigned char | - | TAB_VDC_PIA_MODUS | - | - | - | Profil Gast |
| STAT_DEFAULT | 0-n | - | unsigned char | - | TAB_VDC_PIA_MODUS | - | - | - | Profil Default |

### ARG_0XDC28

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PERSONALISIERUNG_0 | 0-n | - | unsigned char | - | TAB_VDC_PIA_MODUS | - | - | - | 0.0 | 255.0 | Profil Personalisierung 0 |
| PERSONALISIERUNG_1 | 0-n | - | unsigned char | - | TAB_VDC_PIA_MODUS | - | - | - | 0.0 | 255.0 | Profil Personalisierung 1 |
| PERSONALISIERUNG_2 | 0-n | - | unsigned char | - | TAB_VDC_PIA_MODUS | - | - | - | 0.0 | 255.0 | Profil Personalisierung 2 |
| PERSONALISIERUNG_3 | 0-n | - | unsigned char | - | TAB_VDC_PIA_MODUS | - | - | - | 0.0 | 255.0 | Profil Personalisierung 3 |
| GAST | 0-n | - | unsigned char | - | TAB_VDC_PIA_MODUS | - | - | - | 0.0 | 255.0 | Profil Gast |
| DEFAULT | 0-n | - | unsigned char | - | TAB_VDC_PIA_MODUS | - | - | - | 0.0 | 255.0 | Profil Default |

### RES_0XAB85

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Status Abgleichvorgang |
| STAT_VDC_DETAIL_VL | - | - | + | 0-n | - | unsigned char | - | TAB_VDC_DETAIL | - | - | - | Detail Abgleich vorne links |
| STAT_VDC_DETAIL_VR | - | - | + | 0-n | - | unsigned char | - | TAB_VDC_DETAIL | - | - | - | Detail Abgleich vorne rechts |
| STAT_VDC_DETAIL_HL | - | - | + | 0-n | - | unsigned char | - | TAB_VDC_DETAIL | - | - | - | Detail Abgleich hinten links |
| STAT_VDC_DETAIL_HR | - | - | + | 0-n | - | unsigned char | - | TAB_VDC_DETAIL | - | - | - | Detail Abgleich hinten rechts |

### ARG_0XAB85

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABGLEICH_POSITION | + | - | 0-n | - | unsigned char | - | TAB_VDC_POSITION | 1.0 | 1.0 | 0.0 | - | - | Abgleich Position |
| ABGLEICH_WERT_VL | + | - | mm | - | unsigned char | - | - | - | - | - | 0.0 | 127.0 | Abgleich Wert vorne links |
| ABGLEICH_WERT_VR | + | - | mm | - | unsigned char | - | - | - | - | - | 0.0 | 127.0 | Abgleich Wert vorne rechts |
| ABGLEICH_WERT_HL | + | - | mm | - | unsigned char | - | - | - | - | - | 0.0 | 127.0 | Abgleich Wert hinten links |
| ABGLEICH_WERT_HR | + | - | mm | - | unsigned char | - | - | - | - | - | 0.0 | 127.0 | Abgleich Wert hinten rechts |

### RES_0XAB84

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Status Abgleichvorgang |
| STAT_VDC_DETAIL_VL | - | - | + | 0-n | - | unsigned char | - | TAB_VDC_DETAIL | - | - | - | Detail Abgleich vorne links |
| STAT_VDC_DETAIL_VR | - | - | + | 0-n | - | unsigned char | - | TAB_VDC_DETAIL | - | - | - | Detail Abgleich vorne rechts |
| STAT_VDC_DETAIL_HL | - | - | + | 0-n | - | unsigned char | - | TAB_VDC_DETAIL | - | - | - | Detail Abgleich hinten links |
| STAT_VDC_DETAIL_HR | - | - | + | 0-n | - | unsigned char | - | TAB_VDC_DETAIL | - | - | - | Detail Abgleich hinten rechts |

### ARG_0XAB84

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABGLEICH_POSITION | + | - | 0-n | - | unsigned char | - | TAB_VDC_POSITION | 1.0 | 1.0 | 0.0 | - | - | Abgleich Position |

### TAB_VDC_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | KOMPLETT |
| 0x01 | VL |
| 0x02 | VR |
| 0x03 | HL |
| 0x04 | HR |
| 0x05 | VA |
| 0x06 | HA |
| 0xFF | undefiniert |

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

### TAB_VDC_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | siehe Fehlerspeicher |
| 0x02 | Umweltbedingung zum Abgleich nicht erfüllt: Fahrzeuggeschwindigkeit |
| 0x03 | Umweltbedingung zum Abgleich nicht erfüllt: Motordrehzahl |
| 0x04 | Abgleichwert außerhalb Toleranzband (min) |
| 0x05 | Abgleichwert außerhalb Toleranzband (max) |
| 0x06 | Sensor nicht verbaut |
| 0x07 | falscher Sensortyp verbaut |
| 0x08 | nicht abgeglichen in aktuellem Klemmenzyklus |
| 0xFF | nicht definiert |

### RES_0XDC18

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_1_ROHWERT_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor_1 Rohwert |
| STAT_SENSOR_1_VERSORGUNG_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor_1 Versorgung |
| STAT_SENSOR_2_ROHWERT_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor_2 Rohwert |
| STAT_SENSOR_2_VERSORGUNG_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor_2 Versorgung |
| STAT_SENSOR_3_ROHWERT_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor_3 Rohwert |
| STAT_SENSOR_3_VERSORGUNG_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor_3 Versorgung |
| STAT_SENSOR_4_ROHWERT_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor_4 Rohwert |
| STAT_SENSOR_4_VERSORGUNG_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensor_4 Versorgung |

### ARG_0XDC29

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PIA_PERSONUM | 0-n | - | unsigned char | - | TAB_VDC_PIA_DATEN_EINZELN | - | - | - | - | - | Profil Personalisierung |
| PIA_MODUS | 0-n | - | unsigned char | - | TAB_VDC_PIA_MODUS | - | - | - | - | - | Profil Modus |

### TAB_VDC_PIA_DATEN_EINZELN

| WERT | TEXT |
| --- | --- |
| 0x00 | Personalisierung 0 |
| 0x01 | Personalisierung 1 |
| 0x02 | Personalisierung 2 |
| 0x03 | Personalisierung 3 |
| 0x04 | Gast |
| 0x05 | default |

### TAB_VDC_PIA_MODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Basis |
| 0x01 | Sport |
| 0x02 | Komfort |
| 0xFF | nicht definiert |

### RES_0XDC1A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_1_PHYS_STATUS | 0-n | - | unsigned int | - | TAB_VDC_SENSOR_STATUS | 1.0 | 1.0 | 0.0 | Sensor_1 physikalisch Status |
| STAT_SENSOR_1_VERSORGUNG_STATUS | 0-n | - | unsigned int | - | TAB_VDC_SENSOR_STATUS | 1.0 | 1.0 | 0.0 | Sensor_1 Versorgung Status |
| STAT_SENSOR_2_PHYS_STATUS | 0-n | - | unsigned int | - | TAB_VDC_SENSOR_STATUS | 1.0 | 1.0 | 0.0 | Sensor_2 physikalisch Status |
| STAT_SENSOR_2_VERSORGUNG_STATUS | 0-n | - | unsigned int | - | TAB_VDC_SENSOR_STATUS | 1.0 | 1.0 | 0.0 | Sensor_2 Versorgung Status |
| STAT_SENSOR_3_PHYS_STATUS | 0-n | - | unsigned int | - | TAB_VDC_SENSOR_STATUS | 1.0 | 1.0 | 0.0 | Sensor_3 physikalisch Status |
| STAT_SENSOR_3_VERSORGUNG_STATUS | 0-n | - | unsigned int | - | TAB_VDC_SENSOR_STATUS | 1.0 | 1.0 | 0.0 | Sensor_3 Versorgung Status |
| STAT_SENSOR_4_PHYS_STATUS | 0-n | - | unsigned int | - | TAB_VDC_SENSOR_STATUS | 1.0 | 1.0 | 0.0 | Sensor_4 physikalisch Status |
| STAT_SENSOR_4_VERSORGUNG_STATUS | 0-n | - | unsigned int | - | TAB_VDC_SENSOR_STATUS | 1.0 | 1.0 | 0.0 | Sensor_4 Versorgung Status |

### TAB_VDC_SENSOR_STATUS

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x0001 | Signal zu hoch |
| 0x0002 | Signal zu niedrig |
| 0x0004 | Signalleitung unterbrochen |
| 0x0008 | Leitungsunterbrechung Sensormasse |
| 0x0010 | Spannungsversorgung Sensor nicht kalibriert |
| 0x0020 | Sensorparameter nicht codiert |
| 0x0040 | Sensoreinbaulage nicht gelernt |
| 0x0060 | Sensorparameter nicht codiert und Sensoreinbaulage nicht gelernt |
| 0x0080 | reserviert |
| 0x0100 | reserviert |
| 0x0200 | reserviert |
| 0x0400 | reserviert |
| 0x0800 | reserviert |
| 0x1000 | reserviert |
| 0x2000 | reserviert |
| 0x4000 | reserviert |
| 0x8000 | reserviert |
| 0xFFFF | manuell auswerten |

### RES_0XDC17

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_1_VERBAUTYP | 0-n | - | unsigned char | - | TAB_VDC_SENSOR_VERBAUTYP | 1.0 | 1.0 | 0.0 | Sensor_1 Verbautyp |
| STAT_SENSOR_1_VERBAUPOSITION | 0-n | - | unsigned char | - | TAB_VDC_SENSOR_VERBAUPOSITION | 1.0 | 1.0 | 0.0 | Sensor_1 Verbauposition |
| STAT_SENSOR_1_PHYS_WERT | - | - | int | - | - | 1.0 | 100.0 | 0.0 | Sensor_1 physikalisch  zeitsynchron Einheit: vergleiche SENSOR_2_VERBAUTYP Service VDC_SENSOR_WERTE)  Bei Beschleunigungssensor Einheit: m/s² Bei Höhenstandssensor Einheit: mm |
| STAT_SENSOR_1_OFFSET_ABGLEICH_WERT | V | - | int | - | - | 1.0 | 1000.0 | 0.0 | Sensor_1 Abgleich Spannung |
| STAT_SENSOR_2_VERBAUTYP | 0-n | - | unsigned char | - | TAB_VDC_SENSOR_VERBAUTYP | 1.0 | 1.0 | 0.0 | Sensor_2 Verbautyp |
| STAT_SENSOR_2_VERBAUPOSITION | 0-n | - | unsigned char | - | TAB_VDC_SENSOR_VERBAUPOSITION | 1.0 | 1.0 | 0.0 | Sensor_2 Verbauposition |
| STAT_SENSOR_2_PHYS_WERT | - | - | int | - | - | 1.0 | 100.0 | 0.0 | Sensor_2 physikalisch  zeitsynchron Einheit: vergleiche SENSOR_2_VERBAUTYP Service VDC_SENSOR_WERTE)  Bei Beschleunigungssensor Einheit: m/s² Bei Höhenstandssensor Einheit: mm |
| STAT_SENSOR_2_OFFSET_ABGLEICH_WERT | V | - | int | - | - | 1.0 | 1000.0 | 0.0 | Sensor_2 Abgleich Spannung |
| STAT_SENSOR_3_VERBAUTYP | 0-n | - | unsigned char | - | TAB_VDC_SENSOR_VERBAUTYP | 1.0 | 1.0 | 0.0 | Sensor_3 Verbautyp |
| STAT_SENSOR_3_VERBAUPOSITION | 0-n | - | unsigned char | - | TAB_VDC_SENSOR_VERBAUPOSITION | 1.0 | 1.0 | 0.0 | Sensor_3 Verbauposition |
| STAT_SENSOR_3_PHYS_WERT | - | - | int | - | - | 1.0 | 100.0 | 0.0 | Sensor_3 physikalisch  zeitsynchron Einheit: vergleiche SENSOR_3_VERBAUTYP Service VDC_SENSOR_WERTE)  Bei Beschleunigungssensor Einheit: m/s² Bei Höhenstandssensor Einheit: mm |
| STAT_SENSOR_3_OFFSET_ABGLEICH_WERT | V | - | int | - | - | 1.0 | 1000.0 | 0.0 | Sensor_3 Abgleich Spannung |
| STAT_SENSOR_4_VERBAUTYP | 0-n | - | unsigned char | - | TAB_VDC_SENSOR_VERBAUTYP | 1.0 | 1.0 | 0.0 | Sensor_4 Verbautyp |
| STAT_SENSOR_4_VERBAUPOSITION | 0-n | - | unsigned char | - | TAB_VDC_SENSOR_VERBAUPOSITION | 1.0 | 1.0 | 0.0 | Sensor_4 Verbauposition |
| STAT_SENSOR_4_PHYS_WERT | - | - | int | - | - | 1.0 | 100.0 | 0.0 | Sensor_4 physikalisch  zeitsynchron Einheit: vergleiche SENSOR_4_VERBAUTYP Service VDC_SENSOR_WERTE)  Bei Beschleunigungssensor Einheit: m/s² Bei Höhenstandssensor Einheit: mm |
| STAT_SENSOR_4_OFFSET_ABGLEICH_WERT | V | - | int | - | - | 1.0 | 1000.0 | 0.0 | Sensor_4 Abgleich Spannung |

### TAB_VDC_SENSOR_VERBAUTYP

| WERT | TEXT |
| --- | --- |
| 0x00 | Rad-Beschleunigungssensor (ROM-Parameter Set1) |
| 0x01 | Aufbau-Beschleunigungssensor (ROM-Parameter Set2) |
| 0x02 | Höhenstandssensor (ROM-Parameter Set3) |
| 0x03 | Rad-Beschleunigungssensor (EEPROM Set1) |
| 0x04 | Aufbau-Beschleunigungssensor (EEPROM Set1) |
| 0x05 | Höhenstandssensor (EEPROM Set1) |
| 0x06 | Sensor ohne Offset (EEPROM Set1) |
| 0xFF | kein Sensor angeschlossen |

### TAB_VDC_SENSOR_VERBAUPOSITION

| WERT | TEXT |
| --- | --- |
| 0x01 | vorn links |
| 0x02 | vorn rechts |
| 0x03 | hinten links |
| 0x04 | hinten rechts |
| 0xFF | kein Sensor angeschlossen |

### RES_0X1720

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAUPT_VERSION_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Haupt - Version |
| STAT_UNTER_VERSION_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Unter - Version |
| STAT_PATCH_VERSION_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | Patch - Version |
| STAT_RESERVED_WERT | - | - | unsigned char | - | - | 1 | 1 | 0 | reserviert |

### ARG_0XF040

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPEICHERORT | + | - | 0-n | - | unsigned char | - | TAB_VDC_SPEICHERORT | - | - | - | - | - | Speicherort der Taskzeiten |

### TAB_VDC_SPEICHERORT

| WERT | TEXT |
| --- | --- |
| 0x00 | alle |
| 0x01 | RAM |
| 0x02 | EEPROM |
| 0xFF | ungültiger Wert |

### TAB_VDC_ENV_SENSOR_PLAUSI

| WERT | UWTEXT |
| --- | --- |
| 0 | kein Fehler festgestellt |
| 1 | Offsetfehler |
| 2 | Gradientenfehler |
| 3 | Signal konstant |
| 4 | ExtendPlausi |
| 5 | ExtendPlausi mit Offsetfehler |
| 6 | ExtendPlausi mit Gradientenfehler |
| 7 | ExtendPlausi mit Signal konstant |
| 0xFF | manuell auswerten |

### TAB_VDC_ENV_REASON_TASK_ERROR

| WERT | UWTEXT |
| --- | --- |
| 0x00 | WCET Überschreitung |
| 0x01 | Taskausfall |
| 0xFF | ungültiger Wert |
