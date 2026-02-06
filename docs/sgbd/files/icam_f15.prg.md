# icam_f15.prg

## General

|  |  |
| --- | --- |
| File | icam_f15.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 205 |
| Origin | BMW EI-910 Wohlmuth |
| Revision | 5.000 |
| Author | ALTRAN-GMBH-&-CO.-KG EI-500 Engelhaupt, ALTRAN-GMBH-&-CO.-KG EI |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ICAM - Rundumsicht + Rückfahrkamera als Standalone System |  |  |
| ORIGIN | string | BMW EI-910 Wohlmuth |  |  |
| REVISION | string | 5.000 |  |  |
| AUTHOR | string | ALTRAN-GMBH-&-CO.-KG EI-500 Engelhaupt, ALTRAN-GMBH-&-CO.-KG EI |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.46 |  |  |
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

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime) gültig für LH Diagnosemaster V9 oder früher. (pre 35up)

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events [$02 eventWindowTime - infinite (nur 35up)] 35up: LH Diagnosemaster V11 oder höher pre35up: LH Diagnosemaster V6 - V9

_No arguments._

### STEUERN_ROE_START

Temporaeres Aktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $05 Start $02 (EventWindowTime) gültig für LH Diagnosemaster V9 oder früher. (pre 35up)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

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

### VERBAUORTTABELLE

| ORT | ORTTEXT | LIN_2_FORMAT |
| --- | --- | --- |
| 0x0100 | Batteriesensor BSD | - |
| 0x0150 | Ölqualitätsensor BSD | - |
| 0x0200 | Elektrische Wasserpumpe BSD | - |
| 0x0250 | Elektrische Kraftstoffpumpe BSD | - |
| 0x0300 | Generator 1 | - |
| 0x0350 | Generator 2 | - |
| 0x03A0 | Druck- Temperatursensor Tank | 1 |
| 0x03C0 | EAC-Sensor | - |
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
| 0x0F80 | Frontview Kamera vorne | 1 |
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1210 | Sideview Kamera Kotflügel vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
| 0x1310 | Sideview Kamera Kotflügel vorne rechts | 1 |
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
| 0x2D00 | Smart Opener | 1 |
| 0x2E00 | LED-Hauptlicht-Modul links | 1 |
| 0x2F00 | LED-Hauptlicht-Modul rechts | 1 |
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
| 0x3D80 | Lüfter | 1 |
| 0x3D88 | Lüfter 2 | 1 |
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3E80 | DCDC Versorgung Zustartbatterie | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x3F80 | Generator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4600 | Nackenwärmer | 1 |
| 0x4700 | Nackenwärmer Bedienschalter | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x4C00 | Klimabedienteil | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
| 0x6500 | Sense-Touch-Modul links | 1 |
| 0x6600 | Sense-Touch-Modul rechts | 1 |
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
| 0x5780 | Fussgängerschutzsensor statisch | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x57B0 | Fussgängerschutzsensor dynamisch 1 | 0 |
| 0x57B8 | Fussgängerschutzsensor dynamisch 2 | 0 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0x5A00 | Innenlichtelektronik | 1 |
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Fahrertür vorne oben | 1 |
| 0x5E06 | Innenbeleuchtung Fahrertür vorne Mitte | 1 |
| 0x5E07 | Innenbeleuchtung Fahrertür vorne unten | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Fahrertür hinten oben | 1 |
| 0x5E0A | Innenbeleuchtung Fahrertür hinten unten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Beifahrertür vorne oben | 1 |
| 0x5E0D | Innenbeleuchtung Beifahrertür vorne Mitte | 1 |
| 0x5E0E | Innenbeleuchtung Beifahrertür vorne unten | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Beifahrertür hinten oben | 1 |
| 0x5E11 | Innenbeleuchtung Beifahrertür hinten unten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung I-Tafel Fahrer oben | 1 |
| 0x5E14 | Innenbeleuchtung I-Tafel Fahrer unten | 1 |
| 0x5E15 | Innenbeleuchtung I-Tafel oben Mitte | 1 |
| 0x5E16 | Innenbeleuchtung I-Tafel unten Mitte | 1 |
| 0x5E17 | Innenbeleuchtung I-Tafel oben Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung I-Tafel unten Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
| 0x5F00 | Integrierte Fensterheber Elektronik Fahrer | 1 |
| 0x5F10 | Integrierte Fensterheber Elektronik Beifahrer | 1 |
| 0x5F20 | Integrierte Fensterheber Elektronik Fahrer hinten | 1 |
| 0x5F30 | Integrierte Fensterheber Elektronik Beifahrer hinten | 1 |
| 0x5F40 | Schalterblock Sitzmemory Fahrer | 1 |
| 0x5F50 | Schalterblock Sitzmemory Beifahrer | 1 |
| 0x5F60 | Schalterblock Sitzmemory Fahrer hinten | 1 |
| 0x5F70 | Schalterblock Sitzmemory Beifahrer hinten | 1 |
| 0x5F80 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x5F90 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x5FA0 | Bedieneinheit Mittelkonsole | 1 |
| 0x5FB0 | WB und SARAH Schalter | 1 |
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
| 0x7040 | Frontwischermotor | 1 |
| 0x7100 | NFC Leser Innenraum vorne | 1 |
| 0x7200 | Spurwechselradarsensor vorne rechts | 1 |
| 0x7208 | Spurwechselradarsensor vorne links | 1 |
| 0x7210 | Spurwechselradarsensor hinten rechts (Master) | 1 |
| 0x7218 | Spurwechselradarsensor hinten links | 1 |
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
| 0x0003 | Daimler AG |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars (Ford Group) |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis GmbH |
| 0x0014 | Microchip Technology Inc |
| 0x0015 | Centro Ricerche FIAT |
| 0x0016 | Renesas Technology Europe GmbH - Mitsubishi |
| 0x0017 | Atmel Germany GmbH |
| 0x0018 | Magneti Marelli S.p. A |
| 0x0019 | NEC Electronics GmbH |
| 0x001A | Fujitsu Microelectronics Europe GmbH |
| 0x001B | Adam Opel AG |
| 0x001C | Infineon Technologies AG |
| 0x001D | AMI Semiconductor Belguim BVBA |
| 0x001E | Vector Informatik GmbH |
| 0x001F | Brose Fahrzeugteile GmbH & Co |
| 0x0020 | Zentrum Mikroelektronik Dresden AG |
| 0x0021 | ihr GmbH |
| 0x0022 | Visteon Deutschland GmbH |
| 0x0023 | Elmos Semiconductor AG |
| 0x0024 | ON Semiconductor Germany GmbH |
| 0x0025 | Denso Corporation |
| 0x0026 | C&S Group GmbH |
| 0x0027 | Renault SA |
| 0x0028 | Renesas Technology Europe Ltd  - Hitachi |
| 0x0029 | Yazaki Europe Ltd |
| 0x002A | Trinamic Microchips GmbH |
| 0x002B | Allegro Microsystems, Inc |
| 0x002C | Toyota Motor Engineering and Manufacturing Europe N.V / S.A |
| 0x002D | PSA Peugeot Citroën |
| 0x002E | Forschungs - und Transferzentrum e.V. der Westsächsische Hochschule Zwickau |
| 0x002F | Micron Electronic Devices AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA & Co. |
| 0x0037 | Continental Automotive |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH - Robert Bosch |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electrics Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | DST Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0x0051 | MAGNA-Donnelly GmbH&Co.KG |
| 0x0052 | IEE S.A. |
| 0x0053 | austriamicrosystems AG |
| 0x0054 | Agilent Technologies, Inc. |
| 0x0055 | Lear Corporation  |
| 0x0056 | KOSTAL Ireland GmbH |
| 0x0057 | LIPOWSKY Industrie-Elektronik GmbH  |
| 0x0058 | Sanken Electric Co.,Ltd |
| 0x0059 | Elektrobit Automotive GmbH |
| 0x005A | VIMERCATI S.p.A. |
| 0x005B | VOLVO Technology Schweden |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic GmbH & Co. KG |
| 0x0061 | Flextronics / Sidler Automotive GmbH & Co. KG |
| 0x0062 | EAO Automotive GmbH & Co. KG |
| 0x0063 | helag-electronic gmbh |
| 0x0064 | Magna Electronics |
| 0x0065 | INTEVA Products, LLC |
| 0x0066 | Valeo SA |
| 0x0067 | Defond Holding / BJAutomotive / DAC |
| 0x0068 | Industrie Saleri S. p. A. |
| 0x0069 | ROHM Semicon GmbH |
| 0x0070 | Alfmeier Präzision AG |
| 0x0071 | Sanden Corporation |
| 0x0072 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x0073 | ebm-papst St. Georgen GmbH & Co. KG |
| 0x0074 | CATEM |
| 0x0075 | OMRON Automotive Electronics Technology GmbH |
| 0x0076 | Johnson Electric International |
| 0x0077 | A123 Systems |
| 0x0078 | IPG Automotive GmbH, Karlsruhe |
| 0x0079 | Daesung Electric Co. Ltd. |
| 0x007B | Bury GmbH & Co. KG |
| 0x007A | Kromberg & Schubert GmbH & Co. KG |
| 0x007E | Measurement Specialties Inc (MEAS) |
| 0x007F | MRS Electronic GmbH |
| 0x0082 | Dale Electronics Inc |
| 0x0083 | Mirror Controls international |
| 0x0084 | Keboda Technology Co. Ltd. |
| 0x0085 | SPD Control Systems Corporation |
| 0x0087 | Röchling Automotive AG & Co. KG |
| 0x0088 | AEV s.r.o |
| 0x0089 | Kongsberg Automotive AB/Mullsjö Works |
| 0x008A | May & Scofield Ltd |
| 0x008C | C&S Technology Inc |
| 0x008D | RDC Semiconductor Co., Ltd |
| 0x008E | Webasto AG |
| 0x008F | Accel Elektronika UAB |
| 0x0090 | FICOSA International S.A. |
| 0x0093 | Phoenix International |
| 0x0094 | John Deere |
| 0x0095 | Grayhill Inc |
| 0x0096 | AppliedSensor GmbH |
| 0x0097 | UST Umweltsensortechnik GmbH |
| 0x0098 | Digades GmbH |
| 0x009A | TriMark Corporation |
| 0x009B | KB Auto Tech Co., Ltd. |
| 0x0099 | Thomson Linear Motion |
| 0x009C | Methode Electronics, Inc |
| 0x0101 | Huber Automotive AG |
| 0x009D | Danlaw, Inc. |
| 0x0100 | Isabellenhuette Heusler GmbH & Co. KG |
| 0x0102 | Precision Motors Deutsche Minebea GmbH |
| 0x009F | Fujikoki Corporation |
| 0x0103 | TK Holdings Inc., Electronics |
| 0x0104 | Cobra Automotive Technologies S.P.A. |
| 0x0105 | Embed Limited |
| 0x0106 | Kissling Elektrotechnik GmbH |
| 0x0107 | Autoliv B.V. & Co. KG |
| 0x0108 | PST Electronics |
| 0x0109 | BCA Leisure Ltd |
| 0x010A | APAG Elektronik AG |
| 0x010B | RAFI GmbH & Co. KG |
| 0x010C | Sonceboz AutomotiveSA |
| 0x010D | i2s Intelligente Sensorsysteme Dresden GmbH |
| 0x010E | AGM Automotive, Inc. |
| 0x010F | S&T Motiv |
| 0x0111 | UG Systems GmbH & Co. KG |
| 0x0113 | CHANGJIANG AUTOMOBILE ELECTRONIC SYSTEM CO.,LTD |
| 0x0114 | MES S.A. |
| 0x0115 | SL Corporation |
| 0x0116 | Dura Automotive Systems |
| 0x0118 | Delta Electronics, Inc. |
| 0x0119 | Penny and Giles Controls Ltd |
| 0x011A | Curtiss Wright Controls Industrial |
| 0x011B | HKR Seuffer Automotive GmbH & Co. KG |
| 0x011C | DMK U.S.A. Inc |
| 0x0120 | Littelfuse |
| 0x0121 | Hyundai MOBIS |
| 0x0122 | Alpine Electronics of America |
| 0x0123 | Ford Motor Company |
| 0x0124 | Hangzhou Sanhua Research Inst. Co, Ltd. |
| 0x0125 | Delvis |
| 0x0126 | Louko |
| 0x0127 | Etratech |
| 0x0128 | HiRain |
| 0x0129 | elobau GmbH & Co. KG |
| 0x012A | I.G.Bauerhin GmbH |
| 0x012B | HANS WIDMAIER  |
| 0x012C | Gentherm Inc |
| 0x012D | LINAK A/S |
| 0x012E | Casco Products Corporation |
| 0x012F | Bühler Motor GmbH |
| 0x0130 | SphereDesign GmbH |
| 0x0131 | Cooper Standard |
| 0x0132 | KÜSTER Automotive Control Systems GmbH |
| 0x0133 | SEWS-Components Europe B.V. |
| 0x0134 | OLHO tronic GmbH |
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

### ARG_0X40C6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATISTICS_SCREEN | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | show current Statistics (inkl. Frames per Second) as Overlay in Output-Image 0 = off 1 = Basic statistic |

### ARG_0X4104_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POI_DATABASE | DATA | high | data[168] | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData char[167] |

### ARG_0X4107_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POI_ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | ID for the to be deleted POI |

### ARG_0X4109_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POI_ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | WriteData |

### ARG_0X4120_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DURATION | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0-254: Time in second 255:     During the complete drive cycle |

### ARG_0X4121_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LASTPOS | DATA | high | data[11] | - | - | 1.0 | 1.0 | 0.0 | - | - | LAT, LON, HDG, ALT |

### ARG_0X4125_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SET_AUTO_ACTIV | 0/1 | high | unsigned char | - | - | - | - | - | - | - | WriteData |

### ARG_0X4127_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SET_QUAL_TOLERANCE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

### ARG_0X4128_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAJOR_X0_MEMBPARAM | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |
| MAJOR_X1_MEMBPARAM | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |
| MAJOR_Y_MEMBPARAM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

### ARG_0X4129_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MINOR_X0_MEMBPARAM | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |
| MINOR_X1_MEMBPARAM | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |
| MINOR_Y_MEMBPARAM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

### ARG_0X412A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HEADING_X0_MEMBPARAM | ° | high | unsigned char | - | - | 1.0 | 1.5 | 0.0 | - | - | WriteData |
| HEADING_X1_MEMBPARAM | ° | high | unsigned char | - | - | 1.0 | 1.5 | 0.0 | - | - | WriteData |
| HEADING_X2_MEMBPARAM | ° | high | unsigned char | - | - | 1.0 | 1.5 | 0.0 | - | - | WriteData |
| HEADING_Y_MEMBPARAM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

### ARG_0X412B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPEED_X0_MEMBPARAM | km/h | high | unsigned int | - | - | 1.0 | 0.0156 | 0.0 | - | - | WriteData |
| SPEED_Y_MEMBPARAM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

### ARG_0X412C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACC_X0_MEMBPARAM | m/s² | high | unsigned int | - | - | 1.0 | 0.0020 | 32500.0 | - | - | WriteData |
| ACC_X1_MEMBPARAM | m/s² | high | unsigned int | - | - | 1.0 | 0.0020 | 32500.0 | - | - | WriteData |
| ACC_X2_MEMBPARAM | m/s² | high | unsigned int | - | - | 1.0 | 0.0020 | 32500.0 | - | - | WriteData |
| ACC_Y_MEMBPARAM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

### ARG_0X412D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ALT_X0_MEMBPARAM | m | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |
| ALT_X1_MEMBPARAM | m | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |
| ALT_X2_MEMBPARAM | m | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |
| ALT_Y_MEMBPARAM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

### ARG_0X413D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PARALLEL_LINES_ERR_SCALE | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 0-3: FLOAT ParallelLinesErrScale |
| FIXED_DIST_ERR_SCALE | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 4-7: FLOAT FixedDistErrScale |
| ORTHOGONAL_LINES_ERR_SCALE | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 8-11: FLOAT OrthogonalLinesErrScale |
| PARALLEL_LINES_TO_X_AXIS_SCALE | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 12-15:  FLOAT ParallelLinesToXaxisErrScale |
| POS_VAR_SCALE | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 16-19:  FLOAT PosVarScale |
| ROT_VAR_SCALE | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 20-23:  FLOAT RotVarScale |
| MAX_ROT_DELTA | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 24-27:  FLOAT MaxRotDelta |
| MAX_POS_DELTA | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 28-31:  FLOAT MaxPosDelta |

### ARG_0X413E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_X_POSITION_TVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | X position (mm) |
| STAT_Y_POSITION_TVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Y position (mm) |
| STAT_Z_POSITION_TVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Z position (mm) |
| STAT_X_ROTATION_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | X rotation deg |
| STAT_Z1_ROTATION_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Z1 rotation deg |
| STAT_Z2_ROTATION_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Z2 rotation deg |
| STAT_X_POSITION_TVR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | X position (mm) |
| STAT_Y_POSITION_TVR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Y position (mm) |
| STAT_Z_POSITION_TVR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Z position (mm) |
| STAT_X_ROTATION_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | X rotation deg |
| STAT_Z1_ROTATION_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Z1 rotation deg |
| STAT_Z2_ROTATION_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Z2 rotation deg |
| STAT_X_POSITION_RV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | X position (mm) |
| STAT_Y_POSITION_RV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Y position (mm) |
| STAT_Z_POSITION_RV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Z position (mm) |
| STAT_X_ROTATION_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | X rotation deg |
| STAT_Z1_ROTATION_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Z1 rotation deg |
| STAT_Z2_ROTATION_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Z2 rotation deg |
| STAT_X_POSITION_SVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | X position (mm) |
| STAT_Y_POSITION_SVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Y position (mm) |
| STAT_Z_POSITION_SVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Z position (mm) |
| STAT_X_ROTATION_SVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | X rotation deg |
| STAT_Z1_ROTATION_SVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Z1 rotation deg |
| STAT_Z2_ROTATION_SVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Z2 rotation deg |

### ARG_0X4140_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CYCLES_COMPLETED_RV_CAM | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Cycles completed  for Rearview camera |
| CYCLES_COMPLETED_TVR_CAM | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Cycles completed  for Topview right camera |
| CYCLES_COMPLETED_TVL_CAM | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Cycles completed  for Topview left camera |
| CYCLES_COMPLETED_FV_CAM | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Cycles completed  for Frontview camera |

### ARG_0X4143_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dummy value |
| STAT_PGM_HEIGHT_CALCULATION_ENABLE_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | bit 0: TVL bit 1: TVR bit 2: Rearview bit 3: Frontview |

### ARG_0X4144_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ATC_KERB_REJECTION_ENABLE_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | Bit 1: RV camera Bit 2: TVL camera Bit 3: TVR camera |

### ARG_0X4146_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_NUMBER_OBSERVATIONS_VALID_TRACK_RV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | min_number_of_observations_for_valid_track for rearview |
| STAT_MAX_NUMBER_OBSERVATIONS_VALID_TRACK_RV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | max_number_of_observations_for_valid_track for rearview |
| STAT_MAX_NUMBER_TRACKS_CALIBRATION_RV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - |  max_number_tracks_per_calibration for rearview |
| STAT_MIN_NUMBER_OBSERVATIONS_VALID_TRACK_TVR | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | min_number_of_observations_for_valid_track for topview right |
| STAT_MAX_NUMBER_OBSERVATIONS_VALID_TRACK_TVR | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | max_number_of_observations_for_valid_track for topview right |
| STAT_MAX_NUMBER_TRACKS_CALIBRATION_TVR | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - |  max_number_tracks_per_calibration for topview right |
| STAT_MIN_NUMBER_OBSERVATIONS_VALID_TRACK_TVL | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | min_number_of_observations_for_valid_track for topview left |
| STAT_MAX_NUMBER_OBSERVATIONS_VALID_TRACK_TVL | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | max_number_of_observations_for_valid_track for topview left |
| STAT_MAX_NUMBER_TRACKS_CALIBRATION_TVL | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - |  max_number_tracks_per_calibration for topview left |
| STAT_MIN_NUMBER_OBSERVATIONS_VALID_TRACK_FV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | min_number_of_observations_for_valid_track for frontview |
| STAT_MAX_NUMBER_OBSERVATIONS_VALID_TRACK_FV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | max_number_of_observations_for_valid_track for frontview |
| STAT_MAX_NUMBER_TRACKS_CALIBRATION_FV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - |  max_number_tracks_per_calibration for frontview |

### ARG_0X4148_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FILTER_TIME_CONSTANT_0_RV | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | filter_time_constant0 for rearview |
| STAT_FILTER_TIME_CONSTANT_1_RV | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | filter_time_constant1 for rearview |
| STAT_FILTER_TIME_CONSTANT_2_RV | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | filter_time_constant2 for rearview |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_0_RV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - |  filtering_period_frames_number0 for rearview |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_1_RV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - |  filtering_period_frames_number1 for rearview |
| STAT_FILTER_TIME_CONSTANT_0_TVR | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | filter_time_constant0 for topview right |
| STAT_FILTER_TIME_CONSTANT_1_TVR | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | filter_time_constant1 for topview right |
| STAT_FILTER_TIME_CONSTANT_2_TVR | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | filter_time_constant2 for topview right |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_0_TVR | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - |  filtering_period_frames_number0 for topview right |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_1_TVR | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - |  filtering_period_frames_number1 for topview right |
| STAT_FILTER_TIME_CONSTANT_0_TVL | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | filter_time_constant0 for topview left |
| STAT_FILTER_TIME_CONSTANT_1_TVL | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | filter_time_constant1 for topview left |
| STAT_FILTER_TIME_CONSTANT_2_TVL | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | filter_time_constant2 for topview left |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_0_TVL | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - |  filtering_period_frames_number0 for topview left |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_1_TVL | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - |  filtering_period_frames_number1 for topview left |
| STAT_FILTER_TIME_CONSTANT_0_FV | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | filter_time_constant0 for Frontview |
| STAT_FILTER_TIME_CONSTANT_1_FV | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | filter_time_constant1 for Frontview |
| STAT_FILTER_TIME_CONSTANT_2_FV | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | filter_time_constant2 for Frontview |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_0_FV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - |  filtering_period_frames_number0 for Frontview |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_1_FV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - |  filtering_period_frames_number1 for Frontview |

### ARG_0X4149_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_NUM_LINES | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | selMinNumLines |
| STAT_MAX_NUM_LINES | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | selMaxNumLines |
| STAT_MIN_CAM_OFFSET_X_MM_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | selMinCamOffsetXmm |
| STAT_MAX_CAM_OFFSET_X_MM_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | selMaxCamOffsetXmm |
| STAT_MIN_CAN_OFFSET_Y_MM_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | selMinCamOffsetYmm |
| STAT_MAX_CAM_OFFSET_Y_MM_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | selMaxCamOffsetYmm |
| STAT_MIN_ANGLE_DEG_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | selMinAngleDeg |
| STAT_MAX_ANGLE_DEG_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | selMaxAngleDeg |
| STAT_CAM1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | selCam1 |
| STAT_CAM2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | selCam2 |
| STAT_CAM3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | selCam3 |
| STAT_VERTICAL | 0/1 | high | unsigned char | - | - | - | - | - | - | - | selVertical |

### ARG_0X414B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TVL_LMD_NB_HORIZONTAL_SCANS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | TVL LMD parameters Byte 0-1: Number of horizontal scans |
| TVL_LMD_NB_VERTICAL_SCANS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | TVL LMD parameters Byte 2-3: Number of vertical scans |
| TVL_LMD_MIN_LINE_WIDTH | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | TVL LMD parameters Byte 4-7: Minimum Line Width |
| TVL_LMD_MAX_LINE_WIDTH | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | TVL LMD parameters Byte 8-11: Maximum Line Width |
| TVL_LMD_NUMBER_OF_LUM_THRES_REGIONS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | TVL LMD parameters Byte 12: Number of LumThreshRegions |
| TVL_LMD_EDGE_THRESHOLD | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | TVL LMD parameters Byte 13: edgeThreshold |
| TVL_LMD_HOUGH_THRESHOLD | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | TVL LMD parameters Byte 14: houghThreshold |
| TVL_LMD_MAX_HOUGH_NOISE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | TVL LMD parameters Byte 15-16: maxHoughNoise |
| TVR_LMD_NB_HORIZONTAL_SCANS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | TVR LMD parameters Byte 0-1: Number of horizontal scans |
| TVR_LMD_NB_VERTICAL_SCANS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | TVR LMD parameters Byte 2-3: Number of vertical scans |
| TVR_LMD_MIN_LINE_WIDTH | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | TVR LMD parameters Byte 4-7: Minimum Line Width |
| TVR_LMD_MAX_LINE_WIDTH | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | TVR LMD parameters Byte 8-11: Maximum Line Width |
| TVR_LMD_NUMBER_OF_LUM_THRES_REGIONS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | TVR LMD parameters Byte 12: Number of LumThreshRegions |
| TVR_LMD_EDGE_THRESHOLD | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | TVR LMD parameters Byte 13: edgeThreshold |
| TVR_LMD_HOUGH_THRESHOLD | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | TVR LMD parameters Byte 14: houghThreshold |
| TVR_LMD_MAX_HOUGH_NOISE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | TVR LMD parameters Byte 15-16: maxHoughNoise |
| RV_LMD_NB_HORIZONTAL_SCANS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | RV LMD parameters Byte 0-1: Number of horizontal scans |
| RV_LMD_NB_VERTICAL_SCANS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | RV LMD parameters Byte 2-3: Number of vertical scans |
| RV_LMD_MIN_LINE_WIDTH | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | RV LMD parameters Byte 4-7: Minimum Line Width |
| RV_LMD_MAX_LINE_WIDTH | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | RV LMD parameters Byte 8-11: Maximum Line Width |
| RV_LMD_NUMBER_OF_LUM_THRES_REGIONS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | RV LMD parameters Byte 12: Number of LumThreshRegions |
| RV_LMD_EDGE_THRESHOLD | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | RV LMD parameters Byte 13: edgeThreshold |
| RV_LMD_HOUGH_THRESHOLD | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | RV LMD parameters Byte 14: houghThreshold |
| RV_LMD_MAX_HOUGH_NOISE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | RV LMD parameters Byte 15-16: maxHoughNoise |
| FV_LMD_NB_HORIZONTAL_SCANS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | FV LMD parameters - Place holder Byte 0-1: Number of horizontal scans |
| FV_LMD_NB_VERTICAL_SCANS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | FV LMD parameters - Place holder Byte 2-3: Number of vertical scans |
| FV_LMD_MIN_LINE_WIDTH | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | FV LMD parameters - Place holder Byte 4-7: Minimum Line Width |
| FV_LMD_MAX_LINE_WIDTH | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | FV LMD parameters - Place holder Byte 8-11: Maximum Line Width |
| FV_LMD_NUMBER_OF_LUM_THRES_REGIONS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | FV LMD parameters - Place holder Byte 12: Number of LumThreshRegions |
| FV_LMD_EDGE_THRESHOLD | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | FV LMD parameters - Place holder Byte 13: edgeThreshold |
| FV_LMD_HOUGH_THRESHOLD | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | FV LMD parameters - Place holder Byte 14: houghThreshold |
| FV_LMD_MAX_HOUGH_NOISE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | FV LMD parameters - Place holder Byte 15-16: maxHoughNoise |

### ARG_0X414C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ATC_ALGORITHM_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | bit7: pgmEnabled bit6: lmcEnabled bit5: xx bit4: xx bit3: xx bit2: xx bit1: xx bit0: xx |

### ARG_0X414E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROT_DEVIATION_X_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | RV X Rotational deviation |
| STAT_ROT_DEVIATION_Y_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | RV Y Rotational deviation |
| STAT_ROT_DEVIATION_Z_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | RV Z rotational deviation |
| STAT_HEIGHT_DEVIATION_Z_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | RV Height deviation (Z position) |
| STAT_ROT_DEVIATION_X_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | TVR X Rotational deviation |
| STAT_ROT_DEVIATION_Y_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | TVR Y Rotational deviation |
| STAT_ROT_DEVIATION_Z_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | TVR Z rotational deviation |
| STAT_HEIGHT_DEVIATION_Z_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | TVR Height deviation (Z position) |
| STAT_ROT_DEVIATION_X_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | TVL X Rotational deviation |
| STAT_ROT_DEVIATION_Y_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | TVL Y Rotational deviation |
| STAT_ROT_DEVIATION_Z_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | TVL Z rotational deviation |
| STAT_HEIGHT_DEVIATION_Z_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | TVL Height deviation (Z position) |
| STAT_ROT_DEVIATION_X_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | FV X Rotational deviation |
| STAT_ROT_DEVIATION_Y_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | FV Y Rotational deviation |
| STAT_ROT_DEVIATION_Z_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | FV Z rotational deviation |
| STAT_HEIGHT_DEVIATION_Z_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | FV Height deviation (Z position) |

### ARG_0X414F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MIN_SPEED_LMC | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | MIN_SPEED_LMC |
| MAX_SPEED_LMC | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | MAX_SPEED_LMC |
| MAX_STEERING_LMC | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | MAX_STEERING_LMC |
| MIN_SPEED_PGM | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | MIN_SPEED_PGM |
| MAX_SPEED_PGM | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | MAX_SPEED_PGM |
| MAX_STEERING_PGM | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | MAX_STEERING_PGM |

### ARG_0X4150_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COMPLETED_TRACKS_RV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of completed tracks in last calibration for RV camera |
| STAT_ANALYSED_FRAMES_RV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of frames analysed in last calibration for RV camera |
| STAT_COMPLETED_TRACKS_TVR | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of completed tracks in last calibration for TVR camera |
| STAT_ANALYSED_FRAMES_TVR | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of frames analysed in last calibration for TVR camera |
| STAT_COMPLETED_TRACKS_TVL | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of completed tracks in last calibration for TVL camera |
| STAT_ANALYSED_FRAMES_TVL | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of frames analysed in last calibration for TVL camera |
| STAT_COMPLETED_TRACKS_FV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of completed tracks in last calibration for FV camera |
| STAT_ANALYSED_FRAMES_FV | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of frames analysed in last calibration for FV camera |

### ARG_0X4151_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIBRATION_QUALITY_RV | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Calibration quality of rear camera |
| STAT_CALIBRATION_QUALITY_TVR | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Calibration quality of Topvview right camera |
| STAT_CALIBRATION_QUALITY_TVL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Calibration quality of Topview left camera |
| STAT_CALIBRATION_QUALITY_FV | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Calibration quality of Frontview camera |

### ARG_0X4152_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIBRATION_CONFIDENCE_REARVIEW | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Calibration confidence of rear camera |
| STAT_CALIBRATION_CONFIDENCE_TOPVIEW_RIGHT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Calibration confidence of topview right camera |
| STAT_CALIBRATION_CONFIDENCE_TOPVIEW_LEFT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Calibration confidence of topview left camera |
| STAT_CALIBRATION_CONFIDENCE_FRONTVIEW | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Calibration confidence of frontview camera |

### ARG_0X4154_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_X_RV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_first_x_mm for rearview camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_Y_RV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_first_Y_mm for rearview camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_X_RV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_last_x_mm for rearview camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_Y_RV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_last_y_mm for rearview camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_X_TVR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_first_x_mm for topview right camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_Y_TVR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_first_Y_mm for topview right camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_X_TVR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_last_x_mm for topview right camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_Y_TVR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_last_y_mm for topview right camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_X_TVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_first_x_mm for topview left camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_Y_TVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_first_Y_mm for topview left camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_X_TVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_last_x_mm for topview left camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_Y_TVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_last_y_mm for topview left camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_X_FV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_first_x_mm for frontview camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_Y_FV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_first_Y_mm for frontview camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_X_FV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_last_x_mm for frontview camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_Y_FV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | initial_track_position_target_last_y_mm for frontview camera |

### ARG_0X4160_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RECW_TRIGGER_WARNING | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Triggers a warning for 3 seconds (1 = Trigger warning; 2 = Trigger acute warning) |

### ARG_0X416B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CTA_FRONT_ACTIVATION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Disactivate 1 = Activate |

### ARG_0X416C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUNC_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Algorithm function mode (0 = Normal Mode; 1 = Debug mode) |
| STAT_DEBUG_VISUAL_CONTENT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | specify the graphical overlay (ROIs, etc) to be drawn in debug mode |
| STAT_LOW_LIGHT_MODE_ENABLE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | enable/disable lowlight operational mode |
| STAT_RATE_DIVIDER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | specifies the  n  in  process every nth frame  |

### ARG_0X416D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CTA_REAR_ACTIVATION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Disactivate 1 = Activate |

### ARG_0X416E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUNC_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Algorithm function mode (0 = Normal Mode; 1 = Debug mode) |
| STAT_DEBUG_VISUAL_CONTENT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | specify the graphical overlay (ROIs, etc) to be drawn in debug mode |
| STAT_LOW_LIGHT_MODE_ENABLE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | enable/disable lowlight operational mode |
| STAT_RATE_DIVIDER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | specifies the  n  in  process every nth frame  |

### ARG_0X416F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAX_ALERT_TTC_50MS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Max time to display overlay for detected object crossing (multiple of 50ms) |
| MIN_ALERT_TTC_50MS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Min time to display overlay for detected object crossing (multiple of 50ms) |
| SAFETY_AREA_DM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Size of the safety area in decimeters |
| SAFETY_AREA_MULTIPLIER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | The multiplier for the ego speed values for size of safety area |
| ALERT_HYSTERESIS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | The hystersis time for the alert |
| ALERT_HYSTERESIS_MULTIPLIER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | The multiplier for the crossing speed values for hysteresis alert |

### ARG_0X4171_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SET_CANDEBUG | 0/1 | high | char | - | - | - | - | - | - | - | Setzen von CANDEBUG |

### ARG_0X4176_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTIVATION_SPEED_FORWARD_KMH | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | maximum speed in forward direction for which  CTA will be available |
| ACTIVATION_SPEED_BACKWARD_KMH | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | maximum speed in backward direction for which  CTA will be available |

### ARG_0X4177_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LD_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte Value: 0 = Disable; 1 = Normal mode; 2 = Debug mode |
| LD_ARG | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bit Mask: 0 = HMI; 1 = ROI; 2 = BLOBS; 3 = ALL LINES; 4 = VALID LINES; 5 = VANISHING POINT RECTANGLE; 6 = LANE DATA; 7 = PROFILING |

### ARG_0X4179_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAX_ALERT_TTC_50MS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Max time to display overlay for detected object crossing (multiple of 50ms) |
| MIN_ALERT_TTC_50MS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Min time to display overlay for detected object crossing (multiple of 50ms) |
| SAFETY_AREA_DM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Size of the safety area in decimeters |
| SAFETY_AREA_MULTIPLIER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | The multiplier for the ego speed values for size of safety area |
| ALERT_HYSTERESIS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | The hystersis time for the alert |
| ALERT_HYSTERESIS_MULTIPLIER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | The multiplier for the crossing speed values for hysteresis alert |

### ARG_0X417A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ALGORITHM_REAR | HEX | high | unsigned int | - | - | - | - | - | - | - | Algorithm bit mask of rear view |
| ALGORITHM_TOP | HEX | high | unsigned int | - | - | - | - | - | - | - | Algorithm bit mask of top view |
| ALGORITHM_REAR_ZOOM | HEX | high | unsigned int | - | - | - | - | - | - | - | Algorithm bit mask of rear zoom view |
| ALGORITHM_IDLE | HEX | high | unsigned int | - | - | - | - | - | - | - | Algorithm bit mask of idle view |
| ALGORITHM_SIDE | HEX | high | unsigned int | - | - | - | - | - | - | - | Algorithm bit mask of side view |
| ALGORITHM_SIDE_REAR | HEX | high | unsigned int | - | - | - | - | - | - | - | Algorithm bit mask of side rear view |

### ARG_0X417B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ROT_X_DEG_LEFT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | value in  rot_x_deg_left |
| ROT_Z1_DEG_LEFT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | rot_z1_deg_left |
| ROT_Z2_DEG_LEFT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | rot_z2_deg_left |
| CENTRE_X_MM_LEFT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | centre_x_mm_left |
| CENTRE_Y_MM_LEFT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | centre_y_mm_left |
| CENTRE_Z_MM_LEFT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | centre_z_mm_left |
| WIDTH_MM_LEFT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | width_mm_left |
| HEIGHT_MM_LEFT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | height_mm_left |
| ROT_X_DEG_RIGHT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | rot_x_deg_right |
| ROT_Z1_DEG_RIGHT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | rot_z1_deg_right |
| ROT_Z2_DEG_RIGHT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | rot_z2_deg_right |
| CENTRE_X_MM_RIGHT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | centre_x_mm_right |
| CENTRE_Y_MM_RIGHT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | centre_y_mm_right |
| CENTRE_Z_MM_RIGHT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | centre_z_mm_right |
| WIDTH_MM_RIGHT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | width_mm_right |
| HEIGHT_MM_RIGHT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | height_mm_right |

### ARG_0X417C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTIVATION_SPEED_LIMIT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | S.V. activation speed limit |
| DEACTIVATION_SPEED_LIMIT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | S.V. deactivation speed limit |

### ARG_0X4180_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTIVATION_SPEED_FORWARD | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | maximum speed in forward direction for which  CTA will be available |
| ACTIVATION_SPEED_BACKWARD | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | maximum speed in backward direction for which  CTA will be available |

### ARG_0X4181_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IQ_THRESHOLD_1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | IQ_Threshold_1 |
| IQ_THRESHOLD_2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | IQ_Threshold_2 |
| IQ_THRESHOLD_3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | IQ_Threshold_3 |
| IQ_TIME_THRESHOLD_100MS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | IQ_Time_Threshold_100ms |
| ARBC_QUALITY_THRESHOLD | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | ARBC_Quality_Threshold |
| ARBC_TIME_THRESHOLD_100MS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | ARBC_Time_Threshold_100ms |
| SD_SD2BITSTILEINFO_0 | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | - | - | SD_sd2BitsTileInfo_0 |
| SD_SD2BITSTILEINFO_1 | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | - | - | SD_sd2BitsTileInfo_1 |
| SD_TIME_THRESHOLD_100MS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | SD_Time_Threshold_100ms |
| AW_THRESHOLD | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | AW_threshold |
| AW_TIME_THRESHOLD_100MS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | AW_Time_Threshold_100ms |

### ARG_0X4182_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RECW_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Disable 1 = Normal mode 2 = Debug mode |
| STAT_RECW_ARG_DEBUG | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bit Mask: 0 = Adaboost bounding boxes 1 = Tracked bounding boxes 2= Show primary target information only |

### ARG_0X4184_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SET_SAW_DEBUG_MSSG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= disable 1 = enable Default = TRUE |

### ARG_0X4185_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DBG_OVERLAY_SHOW | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Show debug overlay Default: TRUE |
| STAT_DBG_OVERLAYS_CAMERA | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Debug Overlays Camera Default: 1 |
| STAT_DBG_OVERLAYS_PLAYMODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Debug Overlays Play Mode Default: 100 |
| STAT_DBG_OVERLAYS_SHOW_PROC_TIME | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Debug overlays show proc time Default = TRUE |

### ARG_0X4189_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEBUG_OUTPUT_ENABLE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = Disable 1 = Enable |

### ARG_0X418A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SHOW_WARN_SYMBOL | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Whether to show the warning symbol or not |
| SHOW_NA_SYMBOL | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Whether to show the non-availability symbol |

### ARG_0X418C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEBUG_OUTPUT_ENABLE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = Disable 1 = Enable |

### ARG_0X418D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHOW_WARN_SYMBOL | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Whether to show the warning symbol or not |
| STAT_SHOW_NA_SYMBOL | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Whether to show the non-availability symbol |

### ARG_0X418E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AVAILABILITY_CHECK_MODE_1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = normal 1 = on 2 = off |

### ARG_0X4190_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HMI_CONTROL_MASTER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | hmiControlMaster Default: 255 |
| INAVAILABLITY_ICON_POSITION_XY_1 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | inavailablityIconPositionXY Default = 0 |
| INAVAILABLITY_ICON_POSITION_XY_2 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | inavailablityIconPositionXY Default = 0 |
| WARNING_AREA_LONGITUNAL_START_MM | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | warningAreaLongitunalStart_mm Default = 0 (0m) |
| WARNING_AREA_LONGITUNAL_END_TIME_100MS | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | warningAreaLongitunalEnd_time_100ms Default = 15 |
| WARNING_AREA_LONGITUNAL_END_MIN_MM | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | warningAreaLongitunalEnd_min_mm Default = 3000 (3m) |
| WARNING_AREA_LATERAL_EXTRA_WIDTH_STATIC_MM | mm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | warningAreaLateralExtraWidthStatic_mm Default = 100 (0.1 m) |
| WARNING_AREA_LATERAL_EXTRA_WIDTH_DYNAMIC_MM | mm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | warningAreaLateralExtraWidthDynamic_mm Default = 0 |
| WARNING_ZONE_NUMBER_OF_STRIPES | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | warningZoneNumberOfStripes Default = 10 |
| WARNING_ZONE_NUMBER_OF_SIDE_STRIPES | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | warningZoneNumberOfSideSripes Default = 2 |
| WARNING_ZONE_STRIPE_WIDTH | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | warningZoneStripeWidth Default =  255u,255u,255u,255u,255u,255u,255u,255u,255u,255u |
| WARNING_ELEMENT_WIDTH_FRACTION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | warningElementWidthFraction Default = 255 |
| WARNING_ELEMENT_ASPECT_RATIO_10TH | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | warningElementAspectRatio_10th Default = 30 |
| INTERSECTION_MIN_STRIPE_OVERLAP_255THS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | intersectionMinStripeOverlap_255ths Default = 16 (10%) |
| WARNING_ELEMENT_TRANSPARENCY_TOP | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | warningElementTransparencyTop Default = 255 |
| WARNING_ELEMENT_TRANSPARENCY_BOT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | warningElementTransparencyBot Default = 0 |
| HMI_CELL_COLOURS_01_RGBA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | hmiCellColours01_rgba Default = 255u,0u,0u,255u |
| HMI_CELL_COLOURS_02_RGBA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | hmiCellColours02_rgba Default = 255u,255u,0u,255u |
| HMI_CELL_COLOURS_03_RGBA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | hmiCellColours03_rgba Default = 0u,255u,0u,255u |
| HMI_CELL_COLOURS_DIST_01_MM | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | hmiCellColours_dist01_mm Default = 0 |
| HMI_CELL_COLOURS_DIST_02_MM | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | hmiCellColours_dist02_mm Default = 5000 |
| HMI_CELL_COLOURS_DIST_03_MM | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | hmiCellColours_dist03_mm Default = 10000 |

### ARG_0X4191_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ENABLE_VISUAL | 0/1 | high | unsigned char | - | - | - | - | - | - | - | enableVisual Default = TRUE |
| ENABLE_ULTRASONIC | 0/1 | high | unsigned char | - | - | - | - | - | - | - | enableUltrasonic Default = TRUE |
| DEBUG_OUTPUT_ENABLE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | debugOutputEnable Default = TRUE |
| DEBUG_VISUAL_CONTENT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | debugVisualContent Default = 1 |
| LOW_LIGHT_MODE_ENABLE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | lowLightModeEnable Default = 0 |
| PARAMETER_SET_ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | parameterSetID Default = 1 |
| CAMERA_MASK | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | cameraMask Default = 2 |
| RATE_DIVIDER | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | rateDivider Default = 1 |

### ARG_0X4192_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| X1_PX | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | x1_px Default = 200 |
| Y1_PX | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | y1_px Default = 192 |
| WIDTH_PX | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | width_px Default = 896 |
| HEIGHT_PX | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | height_px Default = 384 |

### ARG_0X4193_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BIT_MASK_REARVIEW | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Algorithm bit mask of rear view |
| BIT_MASK_TOPVIEW | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Algorithm bit mask of top view |
| BIT_MASK_SIDEVIEW | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Algorithm bit mask of side view |
| BIT_MASK_IDLEVIEW | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Algorithm bit mask of idle view |

### ARG_0X4194_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SAW_RESET_TIMES | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reset SAW Times |

### ARG_0X4195_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIBRATION_INFO_ON_RV_SCREEN_ENABLED | 0/1 | high | unsigned char | - | - | - | - | - | - | - |  calibration_info_on_rv_screen_enabled |

### ARG_0X4196_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIBRATION_HELPER_LINES_ENABLED | 0/1 | high | unsigned char | - | - | - | - | - | - | - | calibration_helper_lines_enabled |

### ARG_0X4197_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VLINE_Y_COORD_WERT | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | vline_y_coord_mm |
| STAT_VLINE_WIDTH_WERT | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | vline_width_mm |
| STAT_HLINE_X_COORD0_WERT | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | hline_x_coord0_mm |
| STAT_HLINE_X_COORD1_WERT | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | hline_x_coord1_mm |
| STAT_HLINE_WIDTH_WERT | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | hline_width_mm |

### ARG_0X419B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_ACTIVATION | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x00  disable Gigabit port 0x01  enable Gigabit port and enable packets mirroring 0x02  enable Gigabit port and enable debug info output 0x03  enable Gigabit port and enable packets mirroring and enable debug info output |

### ARG_0X419C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RV_NUMBER_OF_SUCCESSFUL_CALIBRATIONS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_successful_calibrations |
| RV_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_unsuccessful_calibrations |
| RV_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_WITHOUT_TRACKS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_unsuccessful_calibrations_without_tracks |
| RV_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_DEADJUSTED | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_unsuccessful_calibrations_deadjusted |
| RV_RESULT_OF_LAST_CALIBRATION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | result_of_last_calibration |
| RV_ODOMETER_VALUE_OF_MATURE_CALIBRATION_KM | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | odometer_value_of_mature_calibration_km |
| TVL_NUMBER_OF_SUCCESSFUL_CALIBRATIONS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_successful_calibrations |
| TVL_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_unsuccessful_calibrations |
| TVL_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_WITHOUT_TRACKS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_unsuccessful_calibrations_without_tracks |
| TVL_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_DEADJUSTED | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_unsuccessful_calibrations_deadjusted |
| TVL_RESULT_OF_LAST_CALIBRATION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | result_of_last_calibration |
| TVL_ODOMETER_VALUE_OF_MATURE_CALIBRATION_KM | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | odometer_value_of_mature_calibration_km |
| TVR_NUMBER_OF_SUCCESSFUL_CALIBRATIONS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_successful_calibrations |
| TVR_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_unsuccessful_calibrations |
| TVR_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_WITHOUT_TRACKS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_unsuccessful_calibrations_without_tracks |
| TVR_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_DEADJUSTED | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_unsuccessful_calibrations_deadjusted |
| TVR_RESULT_OF_LAST_CALIBRATION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | result_of_last_calibration |
| TVR_ODOMETER_VALUE_OF_MATURE_CALIBRATION_KM | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | odometer_value_of_mature_calibration_km |
| FV_NUMBER_OF_SUCCESSFUL_CALIBRATIONS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_successful_calibrations |
| FV_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_unsuccessful_calibrations |
| FV_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_WITHOUT_TRACKS | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_unsuccessful_calibrations_without_tracks |
| FV_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_DEADJUSTED | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_unsuccessful_calibrations_deadjusted |
| FV_RESULT_OF_LAST_CALIBRATION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | result_of_last_calibration |
| FV_ODOMETER_VALUE_OF_MATURE_CALIBRATION_KM | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | odometer_value_of_mature_calibration_km |

### ARG_0X419D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RV_EXCESS_DEVIATION_THRESHOLD_DEG_1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | excess_deviation_threshold_deg[3] |
| RV_EXCESS_DEVIATION_THRESHOLD_DEG_2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | excess_deviation_threshold_deg[3] |
| RV_EXCESS_DEVIATION_THRESHOLD_DEG_3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | excess_deviation_threshold_deg[3] |
| RV_NUMBER_OF_CYCLES_FOR_MATURE_CALIBRATION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_cycles_for_mature_calibration |
| RV_NUMBER_OF_CYCLES_FOR_UNABLE_TO_CALIBRATE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_cycles_for_unable_to_calibrate |
| RV_NUMBER_OF_CYCLES_FOR_DEADJUSTED_CAMERA | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_cycles_for_deadjusted_camera |
| TVL_EXCESS_DEVIATION_THRESHOLD_DEG_1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | excess_deviation_threshold_deg[3] |
| TVL_EXCESS_DEVIATION_THRESHOLD_DEG_2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | excess_deviation_threshold_deg[3] |
| TVL_EXCESS_DEVIATION_THRESHOLD_DEG_3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | excess_deviation_threshold_deg[3] |
| TVL_NUMBER_OF_CYCLES_FOR_MATURE_CALIBRATION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_cycles_for_mature_calibration |
| TVL_NUMBER_OF_CYCLES_FOR_UNABLE_TO_CALIBRATE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_cycles_for_unable_to_calibrate |
| TVL_NUMBER_OF_CYCLES_FOR_DEADJUSTED_CAMERA | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_cycles_for_deadjusted_camera |
| TVR_EXCESS_DEVIATION_THRESHOLD_DEG_1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | excess_deviation_threshold_deg[3] |
| TVR_EXCESS_DEVIATION_THRESHOLD_DEG_2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | excess_deviation_threshold_deg[3] |
| TVR_EXCESS_DEVIATION_THRESHOLD_DEG_3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | excess_deviation_threshold_deg[3] |
| TVR_NUMBER_OF_CYCLES_FOR_MATURE_CALIBRATION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_cycles_for_mature_calibration |
| TVR_NUMBER_OF_CYCLES_FOR_UNABLE_TO_CALIBRATE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_cycles_for_unable_to_calibrate |
| TVR_NUMBER_OF_CYCLES_FOR_DEADJUSTED_CAMERA | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_cycles_for_deadjusted_camera |
| FV_EXCESS_DEVIATION_THRESHOLD_DEG_1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | excess_deviation_threshold_deg[3] |
| FV_EXCESS_DEVIATION_THRESHOLD_DEG_2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | excess_deviation_threshold_deg[3] |
| FV_EXCESS_DEVIATION_THRESHOLD_DEG_3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | excess_deviation_threshold_deg[3] |
| FV_NUMBER_OF_CYCLES_FOR_MATURE_CALIBRATION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_cycles_for_mature_calibration |
| FV_NUMBER_OF_CYCLES_FOR_UNABLE_TO_CALIBRATE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_cycles_for_unable_to_calibrate |
| FV_NUMBER_OF_CYCLES_FOR_DEADJUSTED_CAMERA | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | number_of_cycles_for_deadjusted_camera |

### ARG_0X41A0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FEATURE_BITMASK | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | bit0:     IPC watchdog enable                            0x0001    Enable/disable for IPC watchdog bit1:     sysmon enable                                       0x0002    Enable/disable for visionMid system monitoring bit15:   video output disconnection enable  0x8000    Enable/disable for the disconnection of video output in idle mode |

### ARG_0XA01A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SIGNALART | + | - | 0-n | - | unsigned char | - | TSignalArt | 1.0 | 1.0 | 0.0 | - | - | Art der Signalausgabe. |
| ARG_AUSGANG | + | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | - | - | Default: 0 Alle Ausgänge des Steuergerätes müssen einzeln und kombiniert anwählbar sein. |
| ARG_TIMEOUT | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die das Testbild ausgegeben wird. Default: 255 Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis: -der Job erneut mit Parameter 0 aufgerufen wird -das Steuergerät neu startet (Aufwachen, Reset, &) |

### ARG_0XA01B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_AUSGANG | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wählt den zu testenden Ausgang. Tabelle TVideoAusgang |

### ARG_0XA301_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOURCE | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welche Quelle für den Videoausgang verwendet werden soll: 0 = ECU-Testbild generiert von DSP 1 = Testbild der RV-Kamera 2 = Testbild der TV_L-Kamera 3 = Testbild der TV_R-Kamera 4 = Testbild der SV_L-Kamera 5 = Testbild der SV_R-Kamera 6 = Testbild der FV-Kamera 7 = ECU-Testbild generiert von NTSC-Encoder |

### ARG_0XA305_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | + | - | 0-n | high | unsigned char | - | TAB_KAMERA_ICAM | - | - | - | - | - | Gewählte Kamera für die Abfrage der Kameradaten. Siehe TAB_KAMERA_ICAM |

### ARG_0XA307_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAMERA | + | - | 0-n | high | unsigned char | - | TAB_CAMERA_UPDATE | - | - | - | - | - | Kamera |

### ARG_0XD38E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | 0-n | - | unsigned char | - | TAB_KAMERA_ICAM | - | - | - | - | - | Gewählte Kamera für RESET von Kamerakalibrierdaten. Siehe TAB_KAMERA_ICAM |

### ARG_0XD3B4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | 0-n | - | unsigned char | - | TAB_KAMERA_TESTBILD | - | - | - | - | - | Gibt an, welche Kamera ein Testbild ausgeben soll:  siehe Tabelle TAB_KAMERA_TESTBILD |
| TESTBILD | 0-n | - | unsigned char | - | TAB_TRSVC_TESTBILD | - | - | - | - | - | 0 = Realbild,  1  = Testbild (Farbeverlauf und Text welche Kamera) |
| TIMEOUT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ausgabezeit für das Testbild in Sekunden fest. Default: 10, Bereich: 1-30, 0 = Normalbetrieb, 255 ohne Timeout. |

### ARG_0XF000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ECU_ID | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | ECU ID |
| DEVICE_ID | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Device Id |
| REG_ADDR | + | - | HEX | high | unsigned int | - | - | - | - | - | - | - | Register Address (lsb, msb) |

### ARG_0XF001_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ECU_ID | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | ECU ID |
| DEVICE_ID | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Device Id |
| REG_ADDR | + | - | HEX | high | unsigned int | - | - | - | - | - | - | - | Register Address (lsb, msb) |
| DATA | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Data |

### ARG_0XF100_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODULE_ID | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | ACAN_MODULE_ID        0x01U APPM_MODULE_ID        0x02U AppPIA_MODULE_ID      0x03U CFGH_MODULE_ID         0x04U DGN_MODULE_ID           0x05U ERRH_MODULE_ID         0x06U PBA_MODULE_ID           0x07U PBAIF_MODULE_ID        0x08U SSM_MODULE_ID           0x09U VDC_MODULE_ID           0x0AU |

### ARG_0XF101_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POI_DATA_LAT_WERT | - | - | - | high | long | - | - | 1.0 | 1.0 | 0.0 | - | - | Latitude |
| STAT_POI_DATA_LON_WERT | - | - | - | high | long | - | - | 1.0 | 1.0 | 0.0 | - | - | Longitude |
| STAT_POI_DATA_HDG_WERT | - | - | - | high | unsigned char | - | - | 1.5 | 1.0 | 0.0 | - | - | HDG |
| STAT_POI_DATA_ALT_WERT | - | - | - | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Altitude |
| STAT_POI_DATA_QUA_WERT | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Qualifier  0--- ---- ---1     Dead Reckoning kalibriert   0--- ---- --1-     GPS 2D Fix   0--- ---- -1--     GPS 3D Fix   0--- ---- 1---     Differential GPS   0--- ---1 ----     Onroad/Offroad   0--- 000- ----    Longitude Standard deviation error 0--- 111- ----  0000 ---- ----    Lateral Standard deviation error 0111 ---- ----    1111 1111 1111    Signal ungültig   1111 1111 1110    Signal nicht verfügbar |
| POI_ID | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | POI Identifier |

### ARG_0XF102_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POI_ID | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | POI Identifier |
| POI_DATA_LAT | + | - | - | high | long | - | - | 1.0 | 1.0 | 0.0 | - | - | Latitude |
| POI_DATA_LON | + | - | - | high | long | - | - | 1.0 | 1.0 | 0.0 | - | - | Longitude |
| POI_DATA_HDG | + | - | - | high | unsigned char | - | - | 1.0 | 1.5 | 0.0 | - | - | HDG |
| POI_DATA_ALT | + | - | - | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Altitude |
| _POI_DATA_QUA | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Qualifier  0--- ---- ---1     Dead Reckoning kalibriert   0--- ---- --1-     GPS 2D Fix   0--- ---- -1--     GPS 3D Fix   0--- ---- 1---     Differential GPS   0--- ---1 ----     Onroad/Offroad   0--- 000- ----    Longitude Standard deviation error 0--- 111- ----  0000 ---- ----    Lateral Standard deviation error 0111 ---- ----    1111 1111 1111    Signal ungültig   1111 1111 1110    Signal nicht verfügbar |

### ARG_0XF103_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COMMAND_ID | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 nothing  1 activation_rq 2 AddPoi without Quality Check 3 PbaStartup 4 ¿ ¿ 255 |
| COMMAND_PARAMETER | + | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

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
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x020600 | Energiesparmode aktiv | 0 |
| 0x020608 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x020609 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02060A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02060B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02060C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF06 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x800B80 | Top View Kamera rechts: Kalibrierungs- oder Justagefehler erkannt | 0 |
| 0x800B81 | Top View Kamera links: Kalibrierungs- oder Justagefehler erkannt | 0 |
| 0x800B82 | Top View Kamera rechts: Verbindungsfehler | 0 |
| 0x800B83 | Top View Kamera links: Verbindungsfehler | 0 |
| 0x800B86 | Rear View Kamera: Verbindungsfehler | 0 |
| 0x800B96 | Rear View Kamera: Kalibrierungs- oder Justagefehler erkannt | 0 |
| 0x800B9A | Interner Steuergerätefehler | 0 |
| 0x800B9B | EEPROM Synchronization Error | 0 |
| 0x800B9E | Überspannung erkannt | 1 |
| 0x800B9F | Unterspannung erkannt | 1 |
| 0x800BA1 | Top View Kamera rechts: Interne Kamerafehler | 0 |
| 0x800BA2 | Top View Kamera links: Interne Kamerafehler | 0 |
| 0x800BA5 | Rear View Kamera: Interne Kamerafehler | 0 |
| 0x800BA9 | FBAS-Ausgang 1: Ausgang fehlerhaft | 0 |
| 0x800BAF | Rear View Kamera: Sensor Blindheit erkannt | 1 |
| 0x800BDD | Top View Kamera links: Kamera nicht angelernt | 0 |
| 0x800BDE | Top View Kamera rechts: Kamera nicht angelernt | 0 |
| 0x800BE1 | Rear View Kamera: Kamera nicht angelernt | 0 |
| 0x800BE2 | Front View Kamera: Verbindungsfehler | 0 |
| 0x800BE4 | Front View Kamera: Sensor Blindheit erkannt | 1 |
| 0x800BE5 | Front View Kamera: Kalibrierungs- oder Justagefehler erkannt | 0 |
| 0x800BE6 | Front View Kamera: Kamera nicht angelernt | 0 |
| 0x800BE9 | Front View Kamera: Interne Kamerafehler | 0 |
| 0xCA8468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xCA8514 | B2-CAN Control Module Bus OFF | 0 |
| 0xCA8BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xCA9400 | Botschaft (328h, Relativzeit): Timeout | 1 |
| 0xCA9401 | Botschaft (330h, Kilometerstand, Reichweite): Timeout | 1 |
| 0xCA9402 | Botschaft (1A1h, Geschwindigkeit Fahrzeug): Timeout | 1 |
| 0xCA9405 | Botschaft (387h, Bedienung Taster SideView): Timeout | 1 |
| 0xCA9406 | Botschaft (302h, IST Lenkwinkel CAN): Timeout | 1 |
| 0xCA9407 | Botschaft (12Fh, Klemmen): Timeout | 1 |
| 0xCA9408 | Botschaft (2E4h, Status Anhänger): Timeout | 1 |
| 0xCA940A | Botschaft (3F9h, Daten Antriebsstrang 2): Timeout | 1 |
| 0xCA940D | Botschaft (2FCh, ZV und Klappenzustand): Timeout | 1 |
| 0xCA9422 | Botschaft (36Dh, Abstandsmeldung PDC): Timeout | 1 |
| 0xCA9427 | Botschaft (2C1h, Status Aktivierung Funktion Parken2): Timeout | 1 |
| 0xCA9428 | Botschaft (377h, Status Funktion PDC): Timeout | 1 |
| 0xCA9429 | Botschaft (3B0h, Status Gang Rueckwaerts): Timeout | 1 |
| 0xCA942A | Botschaft (199h, Längbeschleunigung Schwerpunkt): Timeout | 1 |
| 0xCAAC00 | Signal (328h, Sekundenzähler SysFkt): Ungültig | 1 |
| 0xCAAC01 | Signal (330h, Kilometerstand/Reichweite): Ungültig | 1 |
| 0xCAAC02 | Signal (1A1h, Geschwindigkeit Fahrzeug): Ungültig | 1 |
| 0xCAAC05 | Signal (387h, Bedienung Taster SideView): Ungültig | 1 |
| 0xCAAC06 | Signal (302h, IST Lenkwinkel CAN): Ungültig | 1 |
| 0xCAAC07 | Signal (12Fh, Klemmen): Ungültig | 1 |
| 0xCAAC08 | Signal (2E4h, Status Anhänger): Ungültig | 1 |
| 0xCAAC0A | Signal (3F9h, Daten Antriebsstrang): Ungültig | 1 |
| 0xCAAC0D | Signal (2FCh, ZV und Klappenzustand): Ungültig | 1 |
| 0xCAAC0E | Signal (36Dh, Abstandsmeldung PDC): Ungültig | 1 |
| 0xCAAC12 | Signal (3B0h, Status Gang Rueckwaerts): Ungültig | 1 |
| 0xCAAC13 | Signal (2C1h, Status Aktivierung Funktion Parken2): Ungültig | 1 |
| 0xCAAC14 | Signal (377h, Status Funktion PDC): Ungültig | 1 |
| 0xCAAC15 | Signal (199h, Längbeschleunigung Schwerpunkt): Ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1610 | DEJUSTAGE | 0/1 | High | 0x01 | - | - | - | - |
| 0x1611 | KALIBRIERUNG | 0/1 | High | 0x01 | - | - | - | - |
| 0x1612 | KAMERAVERSORGUNG | 0-n | High | 0xFF | TAB_KAM_VERSORGUNG | - | - | - |
| 0x1613 | KAMERADATEN | 0-n | High | 0xFF | TAB_KAM_DATEN | - | - | - |
| 0x1614 | UEBERTEMPERATUR | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x1615 | VERBINDUNGSFEHLER | 0-n | High | 0xFF | TAB_VERBINDUNGSFEHLER_FBAS | - | - | - |
| 0x161D | CAM_ETHERNET_LINES | 0-n | High | 0xFF | TAB_KAM_ETHERNET | - | - | - |
| 0x4407 | SW_Updatestatus | 0/1 | High | 0xFF | - | - | - | - |
| 0x4408 | Cam_internal_error_status | 0/1 | High | 0xFFFF | - | - | - | - |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x000002 | ECUM_E_RAM_CHECKED_FAILED | 0 |
| 0x000033 | CANSM_E_MODE_CHANGE_NETWORK_0 | 0 |
| 0x000035 | CANSM_E_SETTRSCVMODE_NETWORK_0 | 0 |
| 0x000085 | MCU_E_LCLOCK_1_FAILURE | 0 |
| 0x000086 | MCU_E_HCLOCK_1_FAILURE | 0 |
| 0x000087 | MCU_E_RCCLOCK_1_FAILURE | 0 |
| 0x000088 | MCU_E_LOCK_1_FAILURE | 0 |
| 0x00008A | MCU_E_TIMEOUT_OSC_STABILITY | 0 |
| 0x00A8F8 | MCU_E_HCLOCK_0_FAILURE | 0 |
| 0x00CC78 | MCU_E_LOCK_0_FAILURE | 0 |
| 0x00D0AF | MCU_E_RCCLOCK_0_FAILURE | 0 |
| 0x060013 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 0 |
| 0x0D9964 | MCU_E_LCLOCK_0_FAILURE | 0 |
| 0x800AAC | VM Versorgungs Fehler | 0 |
| 0x800B9D | ECU Over Temperature | 0 |
| 0x800BA7 | Host Internal Voltages | 0 |
| 0x800BA8 | HOST RAM Error | 0 |
| 0x800BC2 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0x800BCA | PBA: Time out Fehler bei Übertragung des POI Datenbank | 1 |
| 0x800BCB | Cross Traffic Alert Rear (CTA rear) internal error | 0 |
| 0x800BCC | PBA: Mismatch der Datenbankgröße zwischen HU und Host-Komponent | 1 |
| 0x800BCE | PBA: no GPS1 message received for more then 1min, value for timeout TIMEOUT_GPSDATA_RECEPTION | 1 |
| 0x800BCF | Cross Traffic Alert Front (CTA front) internal error | 0 |
| 0x800BD0 | Interner Softwarefehler | 0 |
| 0x800BD5 | PBA_Interner_Fehler | 1 |
| 0x800BD6 | ECU_RESET_REASON | 0 |
| 0x800BF0 | Rear View Kamera: PTP Abweichung | 0 |
| 0x800BF1 | Top View Kamera rechts: PTP Abweichung | 0 |
| 0x800BF2 | Top View Kamera links: PTP Abweichung | 0 |
| 0x800BF3 | Front View Kamera: PTP Abweichung | 0 |
| 0x800C00 | Kamera MAC-Adresse nicht eindeutig | 0 |
| 0x813380 | MCU_E_QUARTZ_FAILURE | 0 |
| 0x81D009 | MCU_E_TIMEOUT_TRANSITION | 0 |
| 0x8BAC40 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 0 |
| 0x8BAC43 | DM_Queue_DELETED | 0 |
| 0x8BAC45 | DM_Queue_FULL | 0 |
| 0x8BAC50 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x8BAC51 | FEE_E_WRITE_FAILED | 0 |
| 0x8BAC53 | FLS_E_COMPARE_FAILED | 0 |
| 0x8BAC55 | FLS_E_ERASE_FAILED | 0 |
| 0x8BAC57 | FLS_E_READ_FAILED | 0 |
| 0x8BAC59 | FLS_E_WRITE_FAILED | 0 |
| 0x8BAC63 | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x8BAC66 | MCU_E_CLOCK_FAILURE | 0 |
| 0x8BAC70 | NVM_E_INTEGRITY_FAILED | 0 |
| 0x8BAC73 | NVM_E_REQ_FAILED | 0 |
| 0x8BAC78 | PIA_E_IO_ERROR | 0 |
| 0x8BAC79 | PDB_PROFILE_IO_ERROR | 0 |
| 0x8BAC82 | VSM_EVENT_VEHICLESTATE | 0 |
| 0x8BAC83 | WDG_E_DISABLE_REJECTED | 0 |
| 0x8BAC84 | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x8BAC85 | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x8BAC86 | WDGM_E_SET_MODE | 0 |
| 0xCA942C | Botschaft (34Ah, NAV_GPS1): Timeout | 1 |
| 0xCA942D | Botschaft (34Ch, NAV_GPS2): Timeout | 1 |
| 0xCAAC17 | Signal (34Ah, NAV_GPS1): Ungültig | 1 |
| 0xCAAC18 | Signal (34Ch, NAV_GPS2): Ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4400 | Softwarefehler BLUE_SCREEN | 0-n | High | 0xFF | TAB_CAM_ERROR | - | - | - |
| 0x4402 | Softwarefehler FUSI | 0-n | High | 0xFF | TAB_FUSI_ERROR | - | - | - |
| 0x4403 | Softwarefehler RPC | 0-n | High | 0xFF | TAB_CAM_ERROR | - | - | - |
| 0x4404 | Softwarefehler PTP-Master | 0-n | High | 0xFF | TAB_CAM_ERROR | - | - | - |
| 0x4405 | Softwarefehler IMAGER_SYNC_ERROR | 0-n | High | 0xFF | TAB_CAM_ERROR | - | - | - |
| 0x4406 | PTP_Deviation | 0/1 | High | 0xFF | - | - | - | - |
| 0x4409 | Handshaking Host - VM | 0-n | High | 0xFF | TAB_HANDSHAKE_HOST_VM | - | - | - |
| 0x440B | DEM_FFS_DID_VM_POWER_CONDITION | 0/1 | High | 0xFF | - | - | - | - |
| 0x4410 | Fehlerart des Reset | 0-n | High | 0xFF | TAB_ERROR_TYPE | - | - | - |
| 0x4411 | Art des DSP Reset | 0-n | High | 0xFF | TAB_DSP_RESET_TYPE | - | - | - |
| 0x4412 | Art des ECU Reset | 0-n | High | 0xFF | TAB_ECU_RESET_TYPE | - | - | - |
| 0x4413 | DET Module ID | 0-n | High | 0xFF | TAB_DET_MODULE_ID | - | - | - |
| 0x4414 | DET error ID | 0-n | High | 0xFF | TAB_DET_ERROR_ID | - | - | - |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X412E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAJOR_X0_MEMBPARAM_WERT | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |
| STAT_MAJOR_X1_MEMBPARAM_WERT | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |
| STAT_MAJOR_Y_MEMBPARAM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |

### RES_0X412F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MINOR_X0_MEMBPARAM_WERT | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |
| STAT_MINOR_X1_MEMBPARAM_WERT | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |
| STAT_MINOR_Y_MEMBPARAM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |

### RES_0X4130_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HEADING_X0_MEMBPARAM_WERT | ° | high | unsigned char | - | - | 1.5 | 1.0 | 0.0 | ReadData |
| STAT_HEADING_X1_MEMBPARAM_WERT | ° | high | unsigned char | - | - | 1.5 | 1.0 | 0.0 | ReadData |
| STAT_HEADING_X2_MEMBPARAM_WERT | ° | high | unsigned char | - | - | 1.5 | 1.0 | 0.0 | ReadData |
| STAT_HEADING_Y_MEMBPARAM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |

### RES_0X4131_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPEED_X0_MEMBPARAM_WERT | km/h | high | unsigned int | - | - | 0.0156 | 1.0 | 0.0 | ReadData |
| STAT_SPEED_Y_MEMBPARAM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |

### RES_0X4132_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACC_X0_MEMBPARAM_WERT | m/s² | high | unsigned int | - | - | 0.0020 | 1.0 | -65.0 | ReadData |
| STAT_ACC_X1_MEMBPARAM_WERT | m/s² | high | unsigned int | - | - | 0.0020 | 1.0 | -65.0 | ReadData |
| STAT_ACC_X2_MEMBPARAM_WERT | m/s² | high | unsigned int | - | - | 0.0020 | 1.0 | -65.0 | ReadData |
| STAT_ACC_Y_MEMBPARAM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |

### RES_0X4133_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ALT_X0_MEMBPARAM_1_WERT | m | high | int | - | - | 1.0 | 1.0 | 0.0 | ReadData |
| STAT_ALT_X1_MEMBPARAM_1_WERT | m | high | int | - | - | 1.0 | 1.0 | 0.0 | ReadData |
| STAT_ALT_X2_MEMBPARAM_1_WERT | m | high | int | - | - | 1.0 | 1.0 | 0.0 | ReadData |
| STAT_ALT_Y_MEMBPARAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |

### RES_0X413D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PARALLEL_LINES_ERR_SCALE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Byte 0-3: FLOAT ParallelLinesErrScale |
| STAT_FIXED_DIST_ERR_SCALE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Byte 4-7: FLOAT FixedDistErrScale |
| STAT_ORTHOGONAL_LINES_ERR_SCALE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Byte 8-11: FLOAT OrthogonalLinesErrScale |
| STAT_PARALLEL_LINES_TO_X_AXIS_SCALE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Byte 12-15:  FLOAT ParallelLinesToXaxisErrScale |
| STAT_POS_VAR_SCALE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Byte 16-19:  FLOAT PosVarScale |
| STAT_ROT_VAR_SCALE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Byte 20-23:  FLOAT RotVarScale |
| STAT_MAX_ROT_DELTA_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Byte 24-27:  FLOAT MaxRotDelta |
| STAT_MAX_POS_DELTA_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Byte 28-31:  FLOAT MaxPosDelta |

### RES_0X413E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_X_POSITION_TVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | X position (mm) |
| STAT_Y_POSITION_TVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Y position (mm) |
| STAT_Z_POSITION_TVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Z position (mm) |
| STAT_X_ROTATION_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | X rotation deg |
| STAT_Z1_ROTATION_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Z1 rotation deg |
| STAT_Z2_ROTATION_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Z2 rotation deg |
| STAT_X_POSITION_TVR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | X position (mm) |
| STAT_Y_POSITION_TVR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Y position (mm) |
| STAT_Z_POSITION_TVR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Z position (mm) |
| STAT_X_ROTATION_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | X rotation deg |
| STAT_Z1_ROTATION_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Z1 rotation deg |
| STAT_Z2_ROTATION_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Z2 rotation deg |
| STAT_X_POSITION_RV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | X position (mm) |
| STAT_Y_POSITION_RV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Y position (mm) |
| STAT_Z_POSITION_RV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Z position (mm) |
| STAT_X_ROTATION_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | X rotation deg |
| STAT_Z1_ROTATION_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Z1 rotation deg |
| STAT_Z2_ROTATION_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Z2 rotation deg |
| STAT_X_POSITION_SVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | X position (mm) |
| STAT_Y_POSITION_SVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Y position (mm) |
| STAT_Z_POSITION_SVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Z position (mm) |
| STAT_X_ROTATION_SVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | X rotation deg |
| STAT_Z1_ROTATION_SVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Z1 rotation deg |
| STAT_Z2_ROTATION_SVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Z2 rotation deg |

### RES_0X413F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROT_DEVIATION_X_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from X in PGM calibration for RV in degress |
| STAT_ROT_DEVIATION_Y_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Y in PGM calibration for RV in degress |
| STAT_ROT_DEVIATION_Z_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Z in PGM calibration for RV in degress |
| STAT_POSITION_Z_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Position diviation from Z in PGM calibration for RV in degrees |
| STAT_ROT_DEVIATION_X_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from X in PGM calibration for TVR in degress |
| STAT_ROT_DEVIATION_Y_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Y in PGM calibration for TVR in degress |
| STAT_ROT_DEVIATION_Z_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Z in PGM calibration for TVR in degress |
| STAT_POSITION_Z_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Position diviation from Z in PGM calibration for TVR in degrees |
| STAT_ROT_DEVIATION_X_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from X in PGM calibration for TVL in degress |
| STAT_ROT_DEVIATION_Y_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Y in PGM calibration for TVL in degress |
| STAT_ROT_DEVIATION_Z_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Z in PGM calibration for TVL in degress |
| STAT_POSITION_Z_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Position diviation from Z in PGM calibration for TVL in degrees |
| STAT_ROT_DEVIATION_X_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from X in PGM calibration for FV in degress |
| STAT_ROT_DEVIATION_Y_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Y in PGM calibration for FV in degress |
| STAT_ROT_DEVIATION_Z_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Z in PGM calibration for FV in degress |
| STAT_POSITION_Z_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Position diviation from Z in PGM calibration for FV in degrees |

### RES_0X4140_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CYCLES_COMPLETED_RV_CAM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Cycles completed  for Rearview camera |
| STAT_CYCLES_COMPLETED_TVR_CAM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Cycles completed  for Topview right camera |
| STAT_CYCLES_COMPLETED_TVL_CAM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Cycles completed  for Topview left camera |
| STAT_CYCLES_COMPLETED_FV_CAM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Cycles completed  for Frontview camera |

### RES_0X4141_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUMBER_COMPLETED_TRACKS_CURRENT_CALIB_RV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of completed tracks in current calibration for RV camera |
| STAT_NUMBER_FRAMES_ANALYSED_CURRENT_CALIB_RV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of frames analysed in current calibration for RV camera |
| STAT_NUMBER_COMPLETED_TRACKS_CURRENT_CALIB_TVR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of completed tracks in current calibration for Topview right camera |
| STAT_NUMBER_FRAMES_ANALYSED_CURRENT_CALIB_TVR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of frames analysed in current calibration for Topview right camera |
| STAT_NUMBER_COMPLETED_TRACKS_CURRENT_CALIB_TVL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of completed tracks in current calibration for Topview left camera |
| STAT_NUMBER_FRAMES_ANALYSED_CURRENT_CALIB_TVL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of frames analysed in current calibration for Topview left camera |
| STAT_NUMBER_COMPLETED_TRACKS_CURRENT_CALIB_FV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of completed tracks in current calibration for Frontview camera |
| STAT_NUMBER_FRAMES_ANALYSED_CURRENT_CALIB_FV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of frames analysed in current calibration for Frontview camera |

### RES_0X4143_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DUMMY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dummy value |
| STAT_PGM_HEIGHT_CALCULATION_ENABLE_WERT | HEX | high | unsigned char | - | - | - | - | - | bit 0: TVL bit 1: TVR bit 2: Rearview bit 3: Frontview |

### RES_0X4144_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ATC_KERB_REJECTION_ENABLE_WERT | HEX | high | unsigned char | - | - | - | - | - | Bit 1: RV camera Bit 2: TVL camera Bit 3: TVR camera |

### RES_0X4146_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_NUMBER_OBSERVATIONS_VALID_TRACK_RV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | min_number_of_observations_for_valid_track for rearview |
| STAT_MAX_NUMBER_OBSERVATIONS_VALID_TRACK_RV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | max_number_of_observations_for_valid_track for rearview |
| STAT_MAX_NUMBER_TRACKS_CALIBRATION_RV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | max_number_tracks_per_calibration for rearview |
| STAT_MIN_NUMBER_OBSERVATIONS_VALID_TRACK_TVR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | min_number_of_observations_for_valid_track for topview right |
| STAT_MAX_NUMBER_OBSERVATIONS_VALID_TRACK_TVR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | max_number_of_observations_for_valid_track for topview right |
| STAT_MAX_NUMBER_TRACKS_CALIBRATION_TVR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | max_number_tracks_per_calibration for topview right |
| STAT_MIN_NUMBER_OBSERVATIONS_VALID_TRACK_TVL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | min_number_of_observations_for_valid_track for topview left |
| STAT_MAX_NUMBER_OBSERVATIONS_VALID_TRACK_TVL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | max_number_of_observations_for_valid_track for topview left |
| STAT_MAX_NUMBER_TRACKS_CALIBRATION_TVL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | max_number_tracks_per_calibration for topview left |
| STAT_MIN_NUMBER_OBSERVATIONS_VALID_TRACK_FV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | min_number_of_observations_for_valid_track for frontview |
| STAT_MAX_NUMBER_OBSERVATIONS_VALID_TRACK_FV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | max_number_of_observations_for_valid_track for frontview |
| STAT_MAX_NUMBER_TRACKS_CALIBRATION_FV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | max_number_tracks_per_calibration for frontview |

### RES_0X4147_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROT_DEVIATION_X_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from X in PGM calibration for RV in degress |
| STAT_ROT_DEVIATION_Y_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Y in PGM calibration for RV in degress |
| STAT_ROT_DEVIATION_Z_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Z in PGM calibration for RV in degress |
| STAT_POSITION_Z_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Position diviation from Z in PGM calibration for RV in degrees |
| STAT_ROT_DEVIATION_X_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from X in PGM calibration for TVR in degress |
| STAT_ROT_DEVIATION_Y_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Y in PGM calibration for TVR in degress |
| STAT_ROT_DEVIATION_Z_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Z in PGM calibration for TVR in degress |
| STAT_POSITION_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Position diviation from Z in PGM calibration for TVR in degrees |
| STAT_ROT_DEVIATION_X_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from X in PGM calibration for TVL in degress |
| STAT_ROT_DEVIATION_Y_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Y in PGM calibration for TVL in degress |
| STAT_ROT_DEVIATION_Z_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Z in PGM calibration for TVL in degress |
| STAT_POSITION_Z_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Position diviation from Z in PGM calibration for TVL in degrees |
| STAT_ROT_DEVIATION_X_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from X in PGM calibration for FV in degress |
| STAT_ROT_DEVIATION_Y_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Y in PGM calibration for FV in degress |
| STAT_ROT_DEVIATION_Z_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Rotatational deviation from Z in PGM calibration for FV in degress |
| STAT_POSITION_Z_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Current Position diviation from Z in PGM calibration for FV in degrees |

### RES_0X4148_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FILTER_TIME_CONSTANT_0_RV_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | filter_time_constant0 for rearview |
| STAT_FILTER_TIME_CONSTANT_1_RV_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | filter_time_constant1 for rearview |
| STAT_FILTER_TIME_CONSTANT_2_RV_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | filter_time_constant2 for rearview |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_0_RV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 |  filtering_period_frames_number0 for rearview |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_1_RV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 |  filtering_period_frames_number1 for rearview |
| STAT_FILTER_TIME_CONSTANT_0_TVR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | filter_time_constant0 for topview right |
| STAT_FILTER_TIME_CONSTANT_1_TVR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | filter_time_constant1 for topview right |
| STAT_FILTER_TIME_CONSTANT_2_TVR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | filter_time_constant2 for topview right |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_0_TVR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 |  filtering_period_frames_number0 for topview right |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_1_TVR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 |  filtering_period_frames_number1 for topview right |
| STAT_FILTER_TIME_CONSTANT_0_TVL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | filter_time_constant0 for topview left |
| STAT_FILTER_TIME_CONSTANT_1_TVL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | filter_time_constant1 for topview left |
| STAT_FILTER_TIME_CONSTANT_2_TVL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | filter_time_constant2 for topview left |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_0_TVL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 |  filtering_period_frames_number0 for topview left |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_1_TVL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 |  filtering_period_frames_number1 for topview left |
| STAT_FILTER_TIME_CONSTANT_0_FV_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | filter_time_constant0 for Frontview |
| STAT_FILTER_TIME_CONSTANT_1_FV_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | filter_time_constant1 for frontview |
| STAT_FILTER_TIME_CONSTANT_2_FV_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | filter_time_constant2 for Frontview |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_0_FV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 |  filtering_period_frames_number0 for frontview |
| STAT_FILTERING_PERIOD_FRAMES_NUMBER_1_FV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 |  filtering_period_frames_number1 for Frontview |

### RES_0X4149_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_NUM_LINES_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | selMinNumLines |
| STAT_MAX_NUM_LINES_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | selMaxNumLines |
| STAT_MIN_CAM_OFFSET_X_MM_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | selMinCamOffsetXmm |
| STAT_MAX_CAM_OFFSET_X_MM_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | selMaxCamOffsetXmm |
| STAT_MIN_CAN_OFFSET_Y_MM_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | selMinCamOffsetYmm |
| STAT_MAX_CAM_OFFSET_Y_MM_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | selMaxCamOffsetYmm |
| STAT_MIN_ANGLE_DEG_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | selMinAngleDeg |
| STAT_MAX_ANGLE_DEG_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | selMaxAngleDeg |
| STAT_CAM1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | selCam1 |
| STAT_CAM2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | selCam2 |
| STAT_CAM3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | selCam3 |
| STAT_VERTICAL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | selVertical |

### RES_0X414B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TVL_LMD_NB_HORIZONTAL_SCANS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TVL LMD parameters Byte 0-1: Number of horizontal scans |
| STAT_TVL_LMD_NB_VERTICAL_SCANS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TVL LMD parameters Byte 2-3: Number of vertical scans |
| STAT_TVL_LMD_MIN_LINE_WIDTH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | TVL LMD parameters Byte 4-7: Minimum Line Width |
| STAT_TVL_LMD_MAX_LINE_WIDTH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | TVL LMD parameters Byte 8-11: Maximum Line Width |
| STAT_TVL_LMD_NUMBER_OF_LUM_THRES_REGIONS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | TVL LMD parameters Byte 12: Number of LumThreshRegions |
| STAT_TVL_LMD_EDGE_THRESHOLD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | TVL LMD parameters Byte 13: edgeThreshold |
| STAT_TVL_LMD_HOUGH_THRESHOLD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | TVL LMD parameters Byte 14: houghThreshold |
| STAT_TVL_LMD_MAX_HOUGH_NOISE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TVL LMD parameters Byte 15-16: maxHoughNoise |
| STAT_TVR_LMD_NB_HORIZONTAL_SCANS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TVR LMD parameters Byte 0-1: Number of horizontal scans |
| STAT_TVR_LMD_NB_VERTICAL_SCANS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TVR LMD parameters Byte 2-3: Number of vertical scans |
| STAT_TVR_LMD_MIN_LINE_WIDTH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | TVR LMD parameters Byte 4-7: Minimum Line Width |
| STAT_TVR_LMD_MAX_LINE_WIDTH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | TVR LMD parameters Byte 8-11: Maximum Line Width |
| STAT_TVR_LMD_NUMBER_OF_LUM_THRES_REGIONS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | TVR LMD parameters Byte 12: Number of LumThreshRegions |
| STAT_TVR_LMD_EDGE_THRESHOLD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | TVR LMD parameters Byte 13: edgeThreshold |
| STAT_TVR_LMD_HOUGH_THRESHOLD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | TVR LMD parameters Byte 14: houghThreshold |
| STAT_TVR_LMD_MAX_HOUGH_NOISE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TVR LMD parameters Byte 15-16: maxHoughNoise |
| STAT_RV_LMD_NB_HORIZONTAL_SCANS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | RV LMD parameters Byte 0-1: Number of horizontal scans |
| STAT_RV_LMD_NB_VERTICAL_SCANS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | RV LMD parameters Byte 2-3: Number of vertical scans |
| STAT_RV_LMD_MIN_LINE_WIDTH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | RV LMD parameters Byte 4-7: Minimum Line Width |
| STAT_RV_LMD_MAX_LINE_WIDTH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | RV LMD parameters Byte 8-11: Maximum Line Width |
| STAT_RV_LMD_NUMBER_OF_LUM_THRES_REGIONS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RV LMD parameters Byte 12: Number of LumThreshRegions |
| STAT_RV_LMD_EDGE_THRESHOLD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RV LMD parameters Byte 13: edgeThreshold |
| STAT_RV_LMD_HOUGH_THRESHOLD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RV LMD parameters Byte 14: houghThreshold |
| STAT_RV_LMD_MAX_HOUGH_NOISE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | RV LMD parameters Byte 15-16: maxHoughNoise |
| STAT_FV_LMD_NB_HORIZONTAL_SCANS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FV LMD parameters - Place holder Byte 0-1: Number of horizontal scans |
| STAT_FV_LMD_NB_VERTICAL_SCANS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FV LMD parameters - Place holder Byte 2-3: Number of vertical scans |
| STAT_FV_LMD_MIN_LINE_WIDTH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | FV LMD parameters - Place holder Byte 4-7: Minimum Line Width |
| STAT_FV_LMD_MAX_LINE_WIDTH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | FV LMD parameters - Place holder Byte 8-11: Maximum Line Width |
| STAT_FV_LMD_NUMBER_OF_LUM_THRES_REGIONS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FV LMD parameters - Place holder Byte 12: Number of LumThreshRegions |
| STAT_FV_LMD_EDGE_THRESHOLD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FV LMD parameters - Place holder Byte 13: edgeThreshold |
| STAT_FV_LMD_HOUGH_THRESHOLD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FV LMD parameters - Place holder Byte 14: houghThreshold |
| STAT_FV_LMD_MAX_HOUGH_NOISE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FV LMD parameters - Place holder Byte 15-16: maxHoughNoise |

### RES_0X414C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ATC_ALGORITHM_WERT | HEX | high | unsigned char | - | - | - | - | - | bit7: pgmEnabled bit6: lmcEnabled bit5: xx bit4: xx bit3: xx bit2: xx bit1: xx bit0: xx |

### RES_0X414E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROT_DEVIATION_X_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | RV X Rotational deviation |
| STAT_ROT_DEVIATION_Y_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | RV Y Rotational deviation |
| STAT_ROT_DEVIATION_Z_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | RV Z rotational deviation |
| STAT_HEIGHT_DEVIATION_Z_RV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | RV Height deviation (Z position) |
| STAT_ROT_DEVIATION_X_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | TVR X Rotational deviation |
| STAT_ROT_DEVIATION_Y_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | TVR Y Rotational deviation |
| STAT_ROT_DEVIATION_Z_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | TVR Z rotational deviation |
| STAT_HEIGHT_DEVIATION_Z_TVR_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | TVR Height deviation (Z position) |
| STAT_ROT_DEVIATION_X_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | TVL X Rotational deviation |
| STAT_ROT_DEVIATION_Y_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | TVL Y Rotational deviation |
| STAT_ROT_DEVIATION_Z_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | TVL Z rotational deviation |
| STAT_HEIGHT_DEVIATION_Z_TVL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | TVL Height deviation (Z position) |
| STAT_ROT_DEVIATION_X_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | FV X Rotational deviation |
| STAT_ROT_DEVIATION_Y_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | FV Y Rotational deviation |
| STAT_ROT_DEVIATION_Z_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | FV Z rotational deviation |
| STAT_HEIGHT_DEVIATION_Z_FV_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | FV Height deviation (Z position) |

### RES_0X414F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_SPEED_LMC_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MIN_SPEED_LMC |
| STAT_MAX_SPEED_LMC_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MAX_SPEED_LMC |
| STAT_MAX_STEERING_LMC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | MAX_STEERING_LMC |
| STAT_MIN_SPEED_PGM_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MIN_SPEED_PGM |
| STAT_MAX_SPEED_PGM_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MAX_SPEED_PGM |
| STAT_MAX_STEERING_PGM_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | MAX_STEERING_PGM |

### RES_0X4150_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COMPLETED_TRACKS_RV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of completed tracks in last calibration for RV camera |
| STAT_ANALYSED_FRAMES_RV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of frames analysed in last calibration for RV camera |
| STAT_COMPLETED_TRACKS_TVR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of completed tracks in last calibration for TVR camera |
| STAT_ANALYSED_FRAMES_TVR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of frames analysed in last calibration for TVR camera |
| STAT_COMPLETED_TRACKS_TVL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of completed tracks in last calibration for TVL camera |
| STAT_ANALYSED_FRAMES_TVL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of frames analysed in last calibration for TVL camera |
| STAT_COMPLETED_TRACKS_FV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of completed tracks in last calibration for FV camera |
| STAT_ANALYSED_FRAMES_FV_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of frames analysed in last calibration for FV camera |

### RES_0X4151_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIBRATION_QUALITY_RV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Calibration quality of rear camera |
| STAT_CALIBRATION_QUALITY_TVR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Calibration quality of Topvview right camera |
| STAT_CALIBRATION_QUALITY_TVL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Calibration quality of Topview left camera |
| STAT_CALIBRATION_QUALITY_FV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Calibration quality of Frontview camera |

### RES_0X4152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIBRATION_CONFIDENCE_REARVIEW_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Calibration confidence of rear camera |
| STAT_CALIBRATION_CONFIDENCE_TOPVIEW_RIGHT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Calibration confidence of topview right camera |
| STAT_CALIBRATION_CONFIDENCE_TOPVIEW_LEFT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Calibration confidence of topview left camera |
| STAT_CALIBRATION_CONFIDENCE_FRONTVIEW_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Calibration confidence of frontview camera |

### RES_0X4154_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_X_RV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_first_x_mm for rearview camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_Y_RV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_first_Y_mm for rearview camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_X_RV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_last_x_mm for rearview camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_Y_RV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_last_y_mm for rearview camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_X_TVR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_first_x_mm for topview right camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_Y_TVR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_first_Y_mm for topview right camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_X_TVR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_last_x_mm for topview right camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_Y_TVR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_last_y_mm for topview right camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_X_TVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_first_x_mm for topview left camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_Y_TVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_first_Y_mm for topview left camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_X_TVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_last_x_mm for topview left camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_Y_TVL_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_last_y_mm for topview left camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_X_FV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_first_x_mm for frontview camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_FIRST_Y_FV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_first_Y_mm for frontview camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_X_FV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_last_x_mm for frontview camera |
| STAT_INITIAL_TRACK_POSITION_TARGET_LAST_Y_FV_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | initial_track_position_target_last_y_mm for frontview camera |

### RES_0X416B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CTA_FRONT_ACTIVATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Disactivate 1 = Activate |

### RES_0X416C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUNC_MODE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Algorithm function mode (0 = Normal Mode; 1 = Debug mode) |
| STAT_DEBUG_VISUAL_CONTENT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | specify the graphical overlay (ROIs, etc) to be drawn in debug mode |
| STAT_LOW_LIGHT_MODE_ENABLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | enable/disable lowlight operational mode |
| STAT_RATE_DIVIDER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | specifies the  n  in  process every nth frame  |

### RES_0X416D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CTA_REAR_ACTIVATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Disactivate 1 = Activate |

### RES_0X416E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUNC_MODE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Algorithm function mode (0 = Normal Mode; 1 = Debug mode) |
| STAT_DEBUG_VISUAL_CONTENT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | specify the graphical overlay (ROIs, etc) to be drawn in debug mode |
| STAT_LOW_LIGHT_MODE_ENABLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | enable/disable lowlight operational mode |
| STAT_RATE_DIVIDER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | specifies the  n  in  process every nth frame  |

### RES_0X416F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAX_ALERT_TTC_50MS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Max time to display overlay for detected object crossing (multiple of 50ms) |
| STAT_MIN_ALERT_TTC_50MS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Min time to display overlay for detected object crossing (multiple of 50ms) |
| STAT_SAFETY_AREA_DM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Size of the safety area in decimeters |
| STAT_SAFETY_AREA_MULTIPLIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | The multiplier for the ego speed values for size of safety area |
| STAT_ALERT_HYSTERESIS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | The hystersis time for the alert |
| STAT_ALERT_HYSTERESIS_MULTIPLIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | The multiplier for the crossing speed values for hysteresis alert |

### RES_0X4174_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PBA_VERSION_MAIN_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Read PBA Version  - main version  - sub version  - patch version  - Date (YYYYMMDD) |
| STAT_PBA_VERSION_SUB_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Read PBA Version  - main version  - sub version  - patch version  - Date (YYYYMMDD) |
| STAT_PBA_VERSION_PATCH_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Read PBA Version  - main version  - sub version  - patch version  - Date (YYYYMMDD) |
| STAT_PBA_VERSION_DATE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Read PBA Version  - main version  - sub version  - patch version  - Date (YYYYMMDD) |

### RES_0X4176_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACTIVATION_SPEED_FORWARD_KMH_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximum speed in forward direction for which  CTA will be available |
| STAT_ACTIVATION_SPEED_BACKWARD_KMH_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximum speed in backward direction for which  CTA will be available |

### RES_0X4177_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LD_MODE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Byte Value: 0 = Disable; 1 = Normal mode; 2 = Debug mode |
| STAT_LD_ARG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit Mask: 0 = HMI; 1 = ROI; 2 = BLOBS; 3 = ALL LINES; 4 = VALID LINES; 5 = VANISHING POINT RECTANGLE; 6 = LANE DATA; 7 = PROFILING |

### RES_0X4179_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAX_ALERT_TTC_50MS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Max time to display overlay for detected object crossing (multiple of 50ms) |
| STAT_MIN_ALERT_TTC_50MS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Min time to display overlay for detected object crossing (multiple of 50ms) |
| STAT_SAFETY_AREA_DM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Size of the safety area in decimeters |
| STAT_SAFETY_AREA_MULTIPLIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | The multiplier for the ego speed values for size of safety area |
| STAT_ALERT_HYSTERESIS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | The hystersis time for the alert |
| STAT_ALERT_HYSTERESIS_MULTIPLIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | The multiplier for the crossing speed values for hysteresis alert |

### RES_0X417A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ALGORITHM_REAR_WERT | HEX | high | unsigned int | - | - | - | - | - | Algorithm bit mask of rear view |
| STAT_ALGORITHM_TOP_WERT | HEX | high | unsigned int | - | - | - | - | - | Algorithm bit mask of top view |
| STAT_ALGORITHM_REAR_ZOOM_WERT | HEX | high | unsigned int | - | - | - | - | - | Algorithm bit mask of rear zoom view |
| STAT_ALGORITHM_IDLE_WERT | HEX | high | unsigned int | - | - | - | - | - | Algorithm bit mask of idle view |
| STAT_ALGORITHM_SIDE_WERT | HEX | high | unsigned int | - | - | - | - | - | Algorithm bit mask of side view |
| STAT_ALGORITHM_SIDE_REAR_WERT | HEX | high | unsigned int | - | - | - | - | - | Algorithm bit mask of side rear view |

### RES_0X417B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROT_X_DEG_LEFT_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | value in  rot_x_deg_left |
| STAT_ROT_Z1_DEG_LEFT_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | rot_z1_deg_left |
| STAT_ROT_Z2_DEG_LEFT_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | rot_z2_deg_left |
| STAT_CENTRE_X_MM_LEFT_WERT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | centre_x_mm_left |
| STAT_CENTRE_Y_MM_LEFT_WERT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | centre_y_mm_left |
| STAT_CENTRE_Z_MM_LEFT_WERT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | centre_z_mm_left |
| STAT_WIDTH_MM_LEFT_WERT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | width_mm_left |
| STAT_HEIGHT_MM_LEFT_WERT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | height_mm_left |
| STAT_ROT_X_DEG_RIGHT_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | rot_x_deg_right |
| STAT_ROT_Z1_DEG_RIGHT_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | rot_z1_deg_right |
| STAT_ROT_Z2_DEG_RIGHT_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | rot_z2_deg_right |
| STAT_CENTRE_X_MM_RIGHT_WERT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | centre_x_mm_right |
| STAT_CENTRE_Y_MM_RIGHT_WERT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | centre_y_mm_right |
| STAT_CENTRE_Z_MM_RIGHT_WERT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | centre_z_mm_right |
| STAT_WIDTH_MM_RIGHT_WERT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | width_mm_right |
| STAT_HEIGHT_MM_RIGHT_WERT | mm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | height_mm_right |

### RES_0X417C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACTIVATION_SPEED_LIMIT_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | S.V. activation speed limit |
| STAT_DEACTIVATION_SPEED_LIMIT_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | S.V. deactivation speed limit |

### RES_0X4180_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACTIVATION_SPEED_FORWARD_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximum speed in forward direction for which  CTA will be available |
| STAT_ACTIVATION_SPEED_BACKWARD_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximum speed in backward direction for which  CTA will be available |

### RES_0X4181_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IQ_THRESHOLD_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | IQ_Threshold_1 |
| STAT_IQ_THRESHOLD_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | IQ_Threshold_2 |
| STAT_IQ_THRESHOLD_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | IQ_Threshold_3 |
| STAT_IQ_TIME_THRESHOLD_100MS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | IQ_Time_Threshold_100ms |
| STAT_ARBC_QUALITY_THRESHOLD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ARBC_Quality_Threshold |
| STAT_ARBC_TIME_THRESHOLD_100MS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ARBC_Time_Threshold_100ms |
| STAT_SD_SD2BITSTILEINFO_0_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | SD_sd2BitsTileInfo_0 |
| STAT_SD_SD2BITSTILEINFO_1_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | SD_sd2BitsTileInfo_1 |
| STAT_SD_TIME_THRESHOLD_100MS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SD_Time_Threshold_100ms |
| STAT_AW_THRESHOLD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AW_threshold |
| STAT_AW_TIME_THRESHOLD_100MS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AW_Time_Threshold_100ms |

### RES_0X4182_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RECW_MODE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Disable 1 = Normal mode 2 = Debug mode |
| STAT_RECW_ARG_DEBUG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit Mask: 0 = Adaboost bounding boxes 1 = Tracked bounding boxes 2= Show primary target information only |

### RES_0X4184_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DBG_MSG_ENABLED | 0/1 | high | unsigned char | - | - | - | - | - | 0 = enabled 1 = disbaled Default = TRUE |

### RES_0X4185_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DBG_OVERLAY_SHOW | 0/1 | high | unsigned char | - | - | - | - | - | Show debug overlay Default: TRUE |
| STAT_DBG_OVERLAYS_CAMERA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Debug Overlays Camera Default: 1 |
| STAT_DBG_OVERLAYS_PLAYMODE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Debug Overlays Play Mode Default: 100 |
| STAT_DBG_OVERLAYS_SHOW_PROC_TIME | 0/1 | high | unsigned char | - | - | - | - | - | Debug overlays show proc time Default = TRUE |

### RES_0X4186_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AVAILABILITY_STATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Not available 1 = Soiling Available 2 = Adverse Weather Available 3 = Both available |
| STAT_NON_AVAILABILITY_CAUSE_SOILING_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Function not ready 1 = Image Quality not good 2 = Calibration quality not good 3 = Watchdog active 4 = Timeout 5 = Function disabled 255 = N/A |
| STAT_NON_AVAILABILITY_CAUSE_ADVERSE_WEATHER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Function not ready 1 = Image Quality not good 2 = Calibration quality not good 3 = Watchdog active 4 = Timeout 5 = Function disabled 255 = N/A |
| STAT_AVAILABILITY_STATUS_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Not available 1 = Soiling Available 2 = Adverse Weather Available 3 = Both available |
| STAT_NON_AVAILABILITY_CAUSE_SOILING_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Function not ready 1 = Image Quality not good 2 = Calibration quality not good 3 = Watchdog active 4 = Timeout 5 = Function disabled 255 = N/A |
| STAT_NON_AVAILABILITY_CAUSE_ADVERSE_WEATHER_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Function not ready 1 = Image Quality not good 2 = Calibration quality not good 3 = Watchdog active 4 = Timeout 5 = Function disabled 255 = N/A |
| STAT_AVAILABILITY_STATUS_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Not available 1 = Soiling Available 2 = Adverse Weather Available 3 = Both available |
| STAT_NON_AVAILABILITY_CAUSE_SOILING_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Function not ready 1 = Image Quality not good 2 = Calibration quality not good 3 = Watchdog active 4 = Timeout 5 = Function disabled 255 = N/A |
| STAT_NON_AVAILABILITY_CAUSE_ADVERSE_WEATHER_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Function not ready 1 = Image Quality not good 2 = Calibration quality not good 3 = Watchdog active 4 = Timeout 5 = Function disabled 255 = N/A |
| STAT_AVAILABILITY_STATUS_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Not available 1 = Soiling Available 2 = Adverse Weather Available 3 = Both available |
| STAT_NON_AVAILABILITY_CAUSE_SOILING_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Function not ready 1 = Image Quality not good 2 = Calibration quality not good 3 = Watchdog active 4 = Timeout 5 = Function disabled 255 = N/A |
| STAT_NON_AVAILABILITY_CAUSE_ADVERSE_WEATHER_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Function not ready 1 = Image Quality not good 2 = Calibration quality not good 3 = Watchdog active 4 = Timeout 5 = Function disabled 255 = N/A |

### RES_0X4187_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SD_SOILED_TIME_S_0_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_SOILED_TIME_S_1_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_SOILED_TIME_S_2_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NOT_SOILED_TIME_S_0_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NOT_SOILED_TIME_S_1_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NOT_SOILED_TIME_S_2_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NA_TIME_S_0_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NA_TIME_S_1_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NA_TIME_S_2_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_CLEAR_TIME_S_0_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_CLEAR_TIME_S_1_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_CLEAR_TIME_S_2_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_SOMEWHAT_ADVERSE_TIME_S_0_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_SOMEWHAT_ADVERSE_TIME_S_1_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_SOMEWHAT_ADVERSE_TIME_S_2_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_ADVERSE_TIME_S_0_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_ADVERSE_TIME_S_1_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_ADVERSE_TIME_S_2_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_NA_TIME_S_0_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_NA_TIME_S_1_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_NA_TIME_S_2_CAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_SOILED_TIME_S_0_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_SOILED_TIME_S_1_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_SOILED_TIME_S_2_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NOT_SOILED_TIME_S_0_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NOT_SOILED_TIME_S_1_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NOT_SOILED_TIME_S_2_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NA_TIME_S_0_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NA_TIME_S_1_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NA_TIME_S_2_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_CLEAR_TIME_S_0_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_CLEAR_TIME_S_1_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_CLEAR_TIME_S_2_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_SOMEWHAT_ADVERSE_TIME_S_0_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_SOMEWHAT_ADVERSE_TIME_S_1_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_SOMEWHAT_ADVERSE_TIME_S_2_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_ADVERSE_TIME_S_0_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_ADVERSE_TIME_S_1_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_ADVERSE_TIME_S_2_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_NA_TIME_S_0_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_NA_TIME_S_1_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_NA_TIME_S_2_CAM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_SOILED_TIME_S_0_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_SOILED_TIME_S_1_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_SOILED_TIME_S_2_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NOT_SOILED_TIME_S_0_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NOT_SOILED_TIME_S_1_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NOT_SOILED_TIME_S_2_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NA_TIME_S_0_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NA_TIME_S_1_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NA_TIME_S_2_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_CLEAR_TIME_S_0_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_CLEAR_TIME_S_1_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_CLEAR_TIME_S_2_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_SOMEWHAT_ADVERSE_TIME_S_0_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_SOMEWHAT_ADVERSE_TIME_S_1_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_SOMEWHAT_ADVERSE_TIME_S_2_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_ADVERSE_TIME_S_0_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_ADVERSE_TIME_S_1_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_ADVERSE_TIME_S_2_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_NA_TIME_S_0_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_NA_TIME_S_1_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_NA_TIME_S_2_CAM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_SOILED_TIME_S_0_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_SOILED_TIME_S_1_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_SOILED_TIME_S_2_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NOT_SOILED_TIME_S_0_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NOT_SOILED_TIME_S_1_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NOT_SOILED_TIME_S_2_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NA_TIME_S_0_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NA_TIME_S_1_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_SD_NA_TIME_S_2_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_CLEAR_TIME_S_0_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_CLEAR_TIME_S_1_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_CLEAR_TIME_S_2_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_SOMEWHAT_ADVERSE_TIME_S_0_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_SOMEWHAT_ADVERSE_TIME_S_1_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_SOMEWHAT_ADVERSE_TIME_S_2_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_ADVERSE_TIME_S_0_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_ADVERSE_TIME_S_1_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_ADVERSE_TIME_S_2_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_NA_TIME_S_0_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_NA_TIME_S_1_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |
| STAT_AWD_NA_TIME_S_2_CAM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default = 0 |

### RES_0X4188_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SD_AVAILABLE_TIME_S_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Default: 0 |
| STAT_SD_NON_ROI_TILES_N_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default: 0 |
| STAT_SD_SOILED_TIME_PER_TILE_S_DATA | DATA | high | data[80] | - | - | 1.0 | 1.0 | 0.0 | uint16 stat_sd_soiled_time_per_tile_s[40] Default: 0 |

### RES_0X4189_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEBUG_OUTPUT_ENABLE | 0/1 | high | unsigned char | - | - | - | - | - | 0 = Disable 1 = Enable |

### RES_0X418A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHOW_WARN_SYMBOL | 0/1 | high | unsigned char | - | - | - | - | - | Whether to show the warning symbol or not |
| STAT_SHOW_NA_SYMBOL | 0/1 | high | unsigned char | - | - | - | - | - | Whether to show the non-availability symbol |

### RES_0X418C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEBUG_OUTPUT_ENABLE | 0/1 | high | unsigned char | - | - | - | - | - | 0 = Disable 1 = Enable |

### RES_0X418D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHOW_WARN_SYMBOL | 0/1 | high | unsigned char | - | - | - | - | - | Whether to show the warning symbol or not |
| STAT_SHOW_NA_SYMBOL | 0/1 | high | unsigned char | - | - | - | - | - | Whether to show the non-availability symbol |

### RES_0X418E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AVAILABILITY_CHECK_MODE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = normal 1 = on 2 = off |

### RES_0X418F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OD_ALG_STATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | odAlgStatus |
| STAT_N_OBJECTS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | nObjects |
| STAT_OBJECT_IN_DRIVING_TUBE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | objectInDrivingTube |
| STAT_OBJECT_CLOSEST_DISTANCE_WERT | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | objectClosestDistance_mm |
| STAT_N_OBJECTS_MAX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | nObjectsMax |
| STAT_VERSION_TEXT | TEXT | high | string[20] | - | - | 1.0 | 1.0 | 0.0 | Version |
| STAT_LOW_LIGHT_MODE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | lowLightMode |
| STAT_AVAILABILITY_REASON_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | availabilityReason |
| STAT_RUNTIME_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | runtime_us |
| STAT_TIMESTAMP_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | timestamp_us |
| STAT_FRAME_NUM_SYSTEM_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | frameNum_system |
| STAT_FRAME_NUM_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | frameNum |
| STAT_RUNTIME_BLOCKS_DATA | DATA | high | data[80] | - | - | 1.0 | 1.0 | 0.0 | runtimeBlocks_us |
| STAT_ID2NUM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID2Num |
| STAT_ERROR_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Error |

### RES_0X4190_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HMI_CONTROL_MASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | hmiControlMaster Default: 255 |
| STAT_INAVAILABLITY_ICON_POSITION_XY_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | inavailablityIconPositionXY Default = 0 |
| STAT_INAVAILABLITY_ICON_POSITION_XY_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | inavailablityIconPositionXY Default = 0 |
| STAT_WARNING_AREA_LONGITUNAL_START_MM_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | warningAreaLongitunalStart_mm Default = 0 (0m) |
| STAT_WARNING_AREA_LONGITUNAL_END_TIME_100MS_WERT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | warningAreaLongitunalEnd_time_100ms Default = 15 |
| STAT_WARNING_AREA_LONGITUNAL_END_MIN_MM_WERT | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | warningAreaLongitunalEnd_min_mm Default = 3000 (3m) |
| STAT_WARNING_AREA_LATERAL_EXTRA_WIDTH_STATIC_MM_WERT | mm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | warningAreaLateralExtraWidthStatic_mm Default = 100 (0.1 m) |
| STAT_WARNING_AREA_LATERAL_EXTRA_WIDTH_DYNAMIC_MM_WERT | mm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | warningAreaLateralExtraWidthDynamic_mm Default = 0 |
| STAT_WARNING_ZONE_NUMBER_OF_STRIPES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | warningZoneNumberOfStripes Default = 10 |
| STAT_WARNING_ZONE_NUMBER_OF_SIDE_STRIPES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | warningZoneNumberOfSideSripes Default = 2 |
| STAT_WARNING_ZONE_STRIPE_WIDTH_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | warningZoneStripeWidth Default =  255u,255u,255u,255u,255u,255u,255u,255u,255u,255u |
| STAT_WARNING_ELEMENT_WIDTH_FRACTION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | warningElementWidthFraction Default = 255 |
| STAT_WARNING_ELEMENT_ASPECT_RATIO_10TH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | warningElementAspectRatio_10th Default = 30 |
| STAT_INTERSECTION_MIN_STRIPE_OVERLAP_255THS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | intersectionMinStripeOverlap_255ths Default = 16 (10%) |
| STAT_WARNING_ELEMENT_TRANSPARENCY_TOP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | warningElementTransparencyTop Default = 255 |
| STAT_WARNING_ELEMENT_TRANSPARENCY_BOT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | warningElementTransparencyBot Default = 0 |
| STAT_HMI_CELL_COLOURS_01_RGBA_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | hmiCellColours01_rgba Default = 255u,0u,0u,255u |
| STAT_HMI_CELL_COLOURS_02_RGBA_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | hmiCellColours02_rgba Default = 255u,255u,0u,255u |
| STAT_HMI_CELL_COLOURS_03_RGBA_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | hmiCellColours03_rgba Default = 0u,255u,0u,255u |
| STAT_HMI_CELL_COLOURS_DIST_01_MM_WERT | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | hmiCellColours_dist01_mm Default = 0 |
| STAT_HMI_CELL_COLOURS_DIST_02_MM_WERT | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | hmiCellColours_dist02_mm Default = 5000 |
| STAT_HMI_CELL_COLOURS_DIST_03_MM_WERT | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | hmiCellColours_dist03_mm Default = 10000 |

### RES_0X4191_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENABLE_VISUAL | 0/1 | high | unsigned char | - | - | - | - | - | enableVisual Default = TRUE |
| STAT_ENABLE_ULTRASONIC | 0/1 | high | unsigned char | - | - | - | - | - | enableUltrasonic Default = TRUE |
| STAT_DEBUG_OUTPUT_ENABLE | 0/1 | high | unsigned char | - | - | - | - | - | debugOutputEnable Default = TRUE |
| STAT_DEBUG_VISUAL_CONTENT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | debugVisualContent Default = 1 |
| STAT_LOW_LIGHT_MODE_ENABLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | lowLightModeEnable Default = 0 |
| STAT_PARAMETER_SET_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | parameterSetID Default = 1 |
| STAT_CAMERA_MASK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | cameraMask Default = 2 |
| STAT_RATE_DIVIDER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | rateDivider Default = 1 |

### RES_0X4192_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_X1_PX_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | x1_px Default = 200 |
| STAT_Y1_PX_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | y1_px Default = 192 |
| STAT_WIDTH_PX_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | width_px Default = 896 |
| STAT_HEIGHT_PX_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | height_px Default = 384 |

### RES_0X4193_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BIT_MASK_REARVIEW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Algorithm bit mask of rear view |
| STAT_BIT_MASK_TOPVIEW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Algorithm bit mask of top view |
| STAT_BIT_MASK_SIDEVIEW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Algorithm bit mask of side view |
| STAT_BIT_MASK_IDLEVIEW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Algorithm bit mask of idle view |

### RES_0X4198_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SD_AVAILABLE_TIME_S_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Default: 0 |
| STAT_SD_NON_ROI_TILES_N_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default: 0 |
| STAT_SD_SOILED_TIME_PER_TILE_S_DATA | DATA | high | data[80] | - | - | 1.0 | 1.0 | 0.0 | uint16 stat_sd_soiled_time_per_tile_s[40] Default: 0 |

### RES_0X4199_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SD_AVAILABLE_TIME_S_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Default: 0 |
| STAT_SD_NON_ROI_TILES_N_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default: 0 |
| STAT_SD_SOILED_TIME_PER_TILE_S_DATA | DATA | high | data[80] | - | - | 1.0 | 1.0 | 0.0 | uint16 stat_sd_soiled_time_per_tile_s[40] Default: 0 |

### RES_0X419A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SD_AVAILABLE_TIME_S_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Default: 0 |
| STAT_SD_NON_ROI_TILES_N_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Default: 0 |
| STAT_SD_SOILED_TIME_PER_TILE_S_DATA | DATA | high | data[80] | - | - | 1.0 | 1.0 | 0.0 | uint16 stat_sd_soiled_time_per_tile_s[40] Default: 0 |

### RES_0X419C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RV_NUMBER_OF_SUCCESSFUL_CALIBRATIONS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_successful_calibrations |
| STAT_RV_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_unsuccessful_calibrations |
| STAT_RV_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_WITHOUT_TRACKS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_unsuccessful_calibrations_without_tracks |
| STAT_RV_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_DEADJUSTED_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_unsuccessful_calibrations_deadjusted |
| STAT_RV_RESULT_OF_LAST_CALIBRATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | result_of_last_calibration |
| STAT_RV_ODOMETER_VALUE_OF_MATURE_CALIBRATION_KM_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | odometer_value_of_mature_calibration_km |
| STAT_TVL_NUMBER_OF_SUCCESSFUL_CALIBRATIONS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_successful_calibrations |
| STAT_TVL_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_unsuccessful_calibrations |
| STAT_TVL_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_WITHOUT_TRACKS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_unsuccessful_calibrations_without_tracks |
| STAT_TVL_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_DEADJUSTED_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_unsuccessful_calibrations_deadjusted |
| STAT_TVL_RESULT_OF_LAST_CALIBRATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | result_of_last_calibration |
| STAT_TVL_ODOMETER_VALUE_OF_MATURE_CALIBRATION_KM_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | odometer_value_of_mature_calibration_km |
| STAT_TVR_NUMBER_OF_SUCCESSFUL_CALIBRATIONS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_successful_calibrations |
| STAT_TVR_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_unsuccessful_calibrations |
| STAT_TVR_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_WITHOUT_TRACKS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_unsuccessful_calibrations_without_tracks |
| STAT_TVR_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_DEADJUSTED_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_unsuccessful_calibrations_deadjusted |
| STAT_TVR_RESULT_OF_LAST_CALIBRATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | result_of_last_calibration |
| STAT_TVR_ODOMETER_VALUE_OF_MATURE_CALIBRATION_KM_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | odometer_value_of_mature_calibration_km |
| STAT_FV_NUMBER_OF_SUCCESSFUL_CALIBRATIONS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_successful_calibrations |
| STAT_FV_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_unsuccessful_calibrations |
| STAT_FV_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_WITHOUT_TRACKS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_unsuccessful_calibrations_without_tracks |
| STAT_FV_NUMBER_OF_UNSUCCESSFUL_CALIBRATIONS_DEADJUSTED_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_unsuccessful_calibrations_deadjusted |
| STAT_FV_RESULT_OF_LAST_CALIBRATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | result_of_last_calibration |
| STAT_FV_ODOMETER_VALUE_OF_MATURE_CALIBRATION_KM_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | odometer_value_of_mature_calibration_km |

### RES_0X419D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RV_EXCESS_DEVIATION_THRESHOLD_DEG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | excess_deviation_threshold_deg[3] |
| STAT_RV_EXCESS_DEVIATION_THRESHOLD_DEG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | excess_deviation_threshold_deg[3] |
| STAT_RV_EXCESS_DEVIATION_THRESHOLD_DEG_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | excess_deviation_threshold_deg[3] |
| STAT_RV_NUMBER_OF_CYCLES_FOR_MATURE_CALIBRATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | number_of_cycles_for_mature_calibration |
| STAT_RV_NUMBER_OF_CYCLES_FOR_UNABLE_TO_CALIBRATE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_cycles_for_unable_to_calibrate |
| STAT_RV_NUMBER_OF_CYCLES_FOR_DEADJUSTED_CAMERA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | number_of_cycles_for_deadjusted_camera |
| STAT_TVL_EXCESS_DEVIATION_THRESHOLD_DEG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | excess_deviation_threshold_deg[3] |
| STAT_TVL_EXCESS_DEVIATION_THRESHOLD_DEG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | excess_deviation_threshold_deg[3] |
| STAT_TVL_EXCESS_DEVIATION_THRESHOLD_DEG_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | excess_deviation_threshold_deg[3] |
| STAT_TVL_NUMBER_OF_CYCLES_FOR_MATURE_CALIBRATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | number_of_cycles_for_mature_calibration |
| STAT_TVL_NUMBER_OF_CYCLES_FOR_UNABLE_TO_CALIBRATE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_cycles_for_unable_to_calibrate |
| STAT_TVL_NUMBER_OF_CYCLES_FOR_DEADJUSTED_CAMERA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | number_of_cycles_for_deadjusted_camera |
| STAT_TVR_EXCESS_DEVIATION_THRESHOLD_DEG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | excess_deviation_threshold_deg[3] |
| STAT_TVR_EXCESS_DEVIATION_THRESHOLD_DEG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | excess_deviation_threshold_deg[3] |
| STAT_TVR_EXCESS_DEVIATION_THRESHOLD_DEG_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | excess_deviation_threshold_deg[3] |
| STAT_TVR_NUMBER_OF_CYCLES_FOR_MATURE_CALIBRATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | number_of_cycles_for_mature_calibration |
| STAT_TVR_NUMBER_OF_CYCLES_FOR_UNABLE_TO_CALIBRATE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_cycles_for_unable_to_calibrate |
| STAT_TVR_NUMBER_OF_CYCLES_FOR_DEADJUSTED_CAMERA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | number_of_cycles_for_deadjusted_camera |
| STAT_FV_EXCESS_DEVIATION_THRESHOLD_DEG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | excess_deviation_threshold_deg[3] |
| STAT_FV_EXCESS_DEVIATION_THRESHOLD_DEG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | excess_deviation_threshold_deg[3] |
| STAT_FV_EXCESS_DEVIATION_THRESHOLD_DEG_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | excess_deviation_threshold_deg[3] |
| STAT_FV_NUMBER_OF_CYCLES_FOR_MATURE_CALIBRATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | number_of_cycles_for_mature_calibration |
| STAT_FV_NUMBER_OF_CYCLES_FOR_UNABLE_TO_CALIBRATE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | number_of_cycles_for_unable_to_calibrate |
| STAT_FV_NUMBER_OF_CYCLES_FOR_DEADJUSTED_CAMERA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | number_of_cycles_for_deadjusted_camera |

### RES_0X41A0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FEATURE_BITMASK_WERT | HEX | high | unsigned int | - | - | - | - | - | bit0:     IPC watchdog enable                            0x0001    Enable/disable for IPC watchdog bit1:     sysmon enable                                       0x0002    Enable/disable for visionMid system monitoring bit15:   video output disconnection enable  0x8000    Enable/disable for the disconnection of video output in idle mode |

### RES_0X41A4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status |
| STAT_REASON_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reason |
| STAT_WARNING_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Warning |
| STAT_OVERLAY_STATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Overlay Status |

### RES_0X41A5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status |
| STAT_REASON_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reason |
| STAT_WARNING_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Warning |
| STAT_OVERLAY_STATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Overlay status |

### RES_0XA01B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Gibt wieder, als Integer, welche Ausgänge getestet wurden. 0 bedeutet alle Ausgänge wurden getestet. |
| STAT_TEST_VIDEOAUSGANG | - | - | + | 0-n | - | unsigned char | - | TTestStatus | 1.0 | 1.0 | 0.0 | Gibt den Status der getesteten Ausgänge wieder. Die offene Leitung zu erkennen ist optional, zwingend ist die Erkennung von Kurzschlüssen. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_AUSGAENGE_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 2 oder 3 meldet. Gibt wieder, auf wie vielen Ausgängen Fehler vorlagen. |
| STAT_FEHLER_1_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_1_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |

### RES_0XA302_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADR_RV_KAM | + | - | - | 0-n | - | unsigned char | - | TAB_TRSVC_AUTOADR | 1.0 | 1.0 | 0.0 | Ausgabe des Anlernstatus der Kamera: 0x00 = Anlernen abgeschlossen oder nicht angefordert 0x01 = Anlernen läuft 0x02 = Anlernen erfolgreich durchgeführt 0x03 = Fehler: Kamera nicht in SG kodiert 0x04 = Fehler: Kamera nicht angeschlossen 0x05 = Fehler: Falsche Kamera angeschlossen |
| STAT_ADR_TV_L_KAM | + | - | - | 0-n | - | unsigned char | - | TAB_TRSVC_AUTOADR | 1.0 | 1.0 | 0.0 | Ausgabe des Anlernstatus der Kamera: 0x00 = Anlernen abgeschlossen oder nicht angefordert 0x01 = Anlernen läuft 0x02 = Anlernen erfolgreich durchgeführt 0x03 = Fehler: Kamera nicht in SG kodiert 0x04 = Fehler: Kamera nicht angeschlossen 0x05 = Fehler: Falsche Kamera angeschlossen |
| STAT_ADR_TV_R_KAM | + | - | - | 0-n | - | unsigned char | - | TAB_TRSVC_AUTOADR | 1.0 | 1.0 | 0.0 | Ausgabe des Anlernstatus der Kamera: 0x00 = Anlernen abgeschlossen oder nicht angefordert 0x01 = Anlernen läuft 0x02 = Anlernen erfolgreich durchgeführt 0x03 = Fehler: Kamera nicht in SG kodiert 0x04 = Fehler: Kamera nicht angeschlossen 0x05 = Fehler: Falsche Kamera angeschlossen |
| STAT_ADR_SV_L_KAM | + | - | - | 0-n | - | unsigned char | - | TAB_TRSVC_AUTOADR | 1.0 | 1.0 | 0.0 | Ausgabe des Anlernstatus der Kamera: 0x00 = Anlernen abgeschlossen oder nicht angefordert 0x01 = Anlernen läuft 0x02 = Anlernen erfolgreich durchgeführt 0x03 = Fehler: Kamera nicht in SG kodiert 0x04 = Fehler: Kamera nicht angeschlossen 0x05 = Fehler: Falsche Kamera angeschlossen |
| STAT_ADR_SV_R_KAM | + | - | - | 0-n | - | unsigned char | - | TAB_TRSVC_AUTOADR | 1.0 | 1.0 | 0.0 | Ausgabe des Anlernstatus der Kamera: 0x00 = Anlernen abgeschlossen oder nicht angefordert 0x01 = Anlernen läuft 0x02 = Anlernen erfolgreich durchgeführt 0x03 = Fehler: Kamera nicht in SG kodiert 0x04 = Fehler: Kamera nicht angeschlossen 0x05 = Fehler: Falsche Kamera angeschlossen |
| STAT_ADR_FV_KAM | + | - | - | 0-n | - | unsigned char | - | TAB_TRSVC_AUTOADR | - | - | - | Ausgabe des Anlernstatus der Kamera: 0x00 = Anlernen abgeschlossen oder nicht angefordert 0x01 = Anlernen läuft 0x02 = Anlernen erfolgreich durchgeführt 0x03 = Fehler: Kamera nicht in SG kodiert 0x04 = Fehler: Kamera nicht angeschlossen 0x05 = Fehler: Falsche Kamera angeschlossen |

### RES_0XA305_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GEWAEHLTE_KAMERA | + | - | - | 0-n | high | unsigned char | - | TAB_KAMERA_ICAM | 1.0 | 1.0 | 0.0 | Gewählte Kamera. Siehe TAB_KAMERA_ICAM |
| STAT_KAMERA_KONFIG | + | - | - | 0-n | high | unsigned char | - | TAB_ICAM_KONFIG | 1.0 | 1.0 | 0.0 | Konfiguration von iCAM zur gewählten Kamera. Siehe TAB_ICAM_KONFIG |
| STAT_VERFUEGBARKEIT | + | - | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verfügbarkeit der Kamera: 0x00 = Kamera nicht verfügbar 0x01 = Kamera verfübar |
| STAT_KAMERAFEHLER | + | - | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerstatus der Kamera: 0x00 = kein Fehler erkannt 0x01 = Fehler erkannt |
| STAT_VERBINDUNG | + | - | - | 0-n | high | unsigned char | - | TAB_ICAM_VERBINDUNG | - | - | - | Verbindungsstatus der gewählten Kamera: Siehe TAB_ICAM_VERBINDUNG |
| STAT_FRAMERATE_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Framerate |
| STAT_IMAGER_STATUS | + | - | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status vom Imager: 0x00 = Imager nicht aktiv 0x01 = Imager aktiv |
| STAT_QUALITAET_ONLINEKALIBRIERUNG | + | - | - | 0-n | high | unsigned char | - | TAB_QUALITAET_ONLINEKALIBRIERUNG | 1.0 | 1.0 | 0.0 | Qualität der Onlinekalibrierung. Siehe TAB_QUALITAET_ONLINEKALIBRIERUNG |
| STAT_STROM_WERT | + | - | - | mA | high | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Stromaufnahme der Rückfahrkamera in mA. Die Stromangabe erfolgt nur für die RFK Satellitenkamera. Die RFK Standalone Variante liefert immer ungültig 0xFF zurück. |
| STAT_ABWEICHUNGX_WERT | + | - | - | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Abweichung der virtuellen Kameraposition von der x-Achse |
| STAT_ABWEICHUNGY_WERT | + | - | - | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Abweichung der virtuellen Kameraposition von der y-Achse |
| STAT_ABWEICHUNGZ_WERT | + | - | - | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Abweichung der virtuellen Kameraposition von der z-Achse |
| STAT_VERDREHUNGX_WERT | + | - | - | ° | low | float | - | - | 1.0 | 1.0 | 0.0 | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| STAT_VERDREHUNGY_WERT | + | - | - | ° | low | float | - | - | 1.0 | 1.0 | 0.0 | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |
| STAT_VERDREHUNGZ_WERT | + | - | - | ° | low | float | - | - | 1.0 | 1.0 | 0.0 | Abweichung der Winkelverdrehung bis auf 10-tel Grad (z.B. 2,3 °) |

### RES_0XA307_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAMERA_UPDATE_FV | - | - | + | 0-n | high | unsigned char | - | TAB_CAMERA_UPDATE_STATE | - | - | - | Ergebnis vom Update der FV-Kamera |
| STAT_CAMERA_UPDATE_RV | - | - | + | 0-n | high | unsigned char | - | TAB_CAMERA_UPDATE_STATE | - | - | - | Ergebnis vom Update der RV-Kamera |
| STAT_CAMERA_UPDATE_TVL | - | - | + | 0-n | high | unsigned char | - | TAB_CAMERA_UPDATE_STATE | - | - | - | Ergebnis vom Update der TVL-Kamera |
| STAT_CAMERA_UPDATE_TVR | - | - | + | 0-n | high | unsigned char | - | TAB_CAMERA_UPDATE_STATE | - | - | - | Ergebnis vom Update der TVR-Kamera |

### RES_0XD37F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_RV_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | Rückfahrkamera: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_TV_L_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | TopView-Kamera links: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_TV_R_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | TopView-Kamera rechts: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_SV_L_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | SideView-Kamera links: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_SV_R_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | SideView-Kamera rechts: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_FV_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | FrontView-Kameras: 0=nicht vorhanden, 1=vorhanden |

### RES_0XD3A1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOADR_RV | 0/1 | - | unsigned char | - | - | - | - | - | Status Anlernen RearViewCam: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |
| STAT_AUTOADR_TV_L | 0/1 | - | unsigned char | - | - | - | - | - | Status Anlernen TopViewCam links: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |
| STAT_AUTOADR_TV_R | 0/1 | - | unsigned char | - | - | - | - | - | Status Anlernen TopViewCam rechts: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |
| STAT_AUTOADR_SV_L | 0/1 | - | unsigned char | - | - | - | - | - | Status Anlernen SideViewCam links: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |
| STAT_AUTOADR_SV_R | 0/1 | - | unsigned char | - | - | - | - | - | Status Anlernen SideViewCam rechts: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |
| STAT_AUTOADR_FV | 0/1 | - | unsigned char | - | - | - | - | - | Status Anlernen FrontViewCam rechts: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |

### RES_0XD3D6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_PART_NR_TEXT | TEXT | high | string[13] | - | - | 1.0 | 1.0 | 0.0 | Teilenummer vom Sensor: Format KK-SSSSSSS-AA |
| STAT_SENSOR_SW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_BTLD_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand Bootloader vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_HW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Hardwarestand vom Sensor: Format xx.yy.zz |

### RES_0XD3D7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_PART_NR_TEXT | TEXT | high | string[13] | - | - | 1.0 | 1.0 | 0.0 | Teilenummer vom Sensor: Format KK-SSSSSSS-AA |
| STAT_SENSOR_SW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_BTLD_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand Bootloader vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_HW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Hardwarestand vom Sensor: Format xx.yy.zz |

### RES_0XD3D8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_PART_NR_TEXT | TEXT | high | string[13] | - | - | 1.0 | 1.0 | 0.0 | Teilenummer vom Sensor: Format KK-SSSSSSS-AA |
| STAT_SENSOR_SW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_BTLD_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand Bootloader vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_HW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Hardwarestand vom Sensor: Format xx.yy.zz |

### RES_0XD3D9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_PART_NR_TEXT | TEXT | high | string[13] | - | - | 1.0 | 1.0 | 0.0 | Teilenummer vom Sensor: Format KK-SSSSSSS-AA |
| STAT_SENSOR_SW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_BTLD_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand Bootloader vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_HW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Hardwarestand vom Sensor: Format xx.yy.zz |

### RES_0XD3DA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAMERA_UPDATE_NOT_REQUIRED | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0 = Update nicht erforderlich 1 = Update erforderlich |
| STAT_CAMERA_UPDATE_FV_REQUIRED | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0 = Update nicht erforderlich 1 = Update erforderlich |
| STAT_CAMERA_UPDATE_RV_REQUIRED | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0 = Update nicht erforderlich 1 = Update erforderlich |
| STAT_CAMERA_UPDATE_TVL_REQUIRED | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0 = Update nicht erforderlich 1 = Update erforderlich |
| STAT_CAMERA_UPDATE_TVR_REQUIRED | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0 = Update nicht erforderlich 1 = Update erforderlich |
| STAT_ECU_UPDATE_REQUIRED | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0 = Update nicht erforderlich 1 = Update erforderlich |

### RES_0XF000_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REG_DATA_WERT | - | - | + | HEX | high | unsigned char | - | - | - | - | - | Register Data |

### RES_0XF100_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODULE_ID_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Module Id: ACAN_MODULE_ID        0x01U APPM_MODULE_ID        0x02U AppPIA_MODULE_ID      0x03U CFGH_MODULE_ID         0x04U DGN_MODULE_ID           0x05U ERRH_MODULE_ID         0x06U PBA_MODULE_ID           0x07U PBAIF_MODULE_ID        0x08U SSM_MODULE_ID           0x09U VDC_MODULE_ID           0x0AU |
| STAT_MAJOR_VERSION_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Major Version |
| STAT_MINOR_VERSION_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minor Version |
| STAT_PATCH_VERSION_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patch Version |

### RES_0XF103_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COMMAND_RESULT_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | ReadData |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SIGNALAUSGABE | 0xA01A | - | Steuert die Videosignalausgabe eines Steuergerätes (Videoquelle). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01A_R | - |
| TEST_VIDEOAUSGANG | 0xA01B | - | Steuert und bewertet den Test der Videoeingänge. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01B_R | RES_0xA01B_R |
| STEUERN_TESTBILD_VIDEOAUSGABE | 0xA301 | - | Ansteuerung der Testbilder der Videoausgabe aus  verschiedenen Quellen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA301_R | - |
| STEUERN_AUTOADR_KAMERAS | 0xA302 | - | Anlernvorgang für Kameras mit Adressen-Zuweisung. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA302_R |
| KAMERA_DATEN_ICAM | 0xA305 | - | Kameradaten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA305_R | RES_0xA305_R |
| CAMERA_UPDATE | 0xA307 | - | Kamera Update Job | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA307_R | RES_0xA307_R |
| AUSSTATTUNG_TRSVC | 0xD37F | - | Rückgabe des Verbaus der Top-/ Side-/ Front- und RearViewkameras. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD37F_D |
| STEUERN_KALIB_KAM_RESET | 0xD38E | - | RESET der Kamera-Kalibrierung in den Anlieferzustand. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD38E_D | - |
| AUTOADRESSIERUNG_KAMERAS | 0xD3A1 | - | Ausgabe Status Autoadressierung der Kameras. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3A1_D |
| TESTBILD_KAMERA | 0xD3B4 | - | Startet die Testbildausgabe in den Kameras. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3B4_D | - |
| ECU_VARIANT | 0xD3C0 | STAT_ECU_VARIANTE | Abfrage der ECU Variante. Ergebnisse siehe Tabelle TAB_ECU_VARIANT | 0-n | - | High | unsigned char | TAB_ECU_VARIANT | - | - | - | - | 22 | - | - |
| ECU_TEMPERATURE | 0xD3C1 | STAT_ECU_TEMPERATURE_WERT | Interne Temperatur der ECU | °C | - | High | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TV_RIGHT_CAMERA_SERIAL_NUMBER | 0xD3C2 | STAT_TV_RIGHT_CAMERA_SERIAL_NUMBER_DATA | Im Host gecachte Seriennummer Kamera TV_R | DATA | - | High | data[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TV_LEFT_CAMERA_SERIAL_NUMBER | 0xD3C3 | STAT_TV_LEFT_CAMERA_SERIAL_NUMBER_DATA | Im Host gecachte Seriennummer Kamera TV_L | DATA | - | High | data[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| REAR_CAMERA_SERIAL_NUMBER | 0xD3C6 | STAT_REAR_CAMERA_SERIAL_NUMBER_DATA | Im Host gecachte Seriennummer Kamera RV | DATA | - | High | data[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CURRENT_USER_BRIGHTNESS | 0xD3C7 | STAT_CURRENT_USER_BRIGHTNESS_DATA | Aktuelle Helligkeitseinstellungen TV, SV und RV. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CURRENT_USER_CONTRAST | 0xD3C8 | STAT_CURRENT_USER_CONTRAST_DATA | Aktuelle Kontrasteinstellungen TV, SV und RV. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FV_CAMERA_SERIAL_NUMBER | 0xD3D5 | STAT_FV_CAMERA_SERIAL_NUMBER_DATA | Im Host gecachte Seriennummer Kamera FV | DATA | - | High | data[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TVR_CAMERA_INFO | 0xD3D6 | - | Teilenummer, Software- und Hardwarenummer von TVR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3D6_D |
| TVL_CAMERA_INFO | 0xD3D7 | - | Teilenummer, Software- und Hardwarenummer von TVL | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3D7_D |
| FV_CAMERA_INFO | 0xD3D8 | - | Teilenummer, Software- und Hardwarenummer von FV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3D8_D |
| RV_CAMERA_INFO | 0xD3D9 | - | Teilenummer, Software- und Hardwarenummer von RV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3D9_D |
| SW_UPDATE_REQUIRED | 0xD3DA | - | SW-Update erforderlich | Bit | - | - | BITFIELD | RES_0xD3DA_D | - | - | - | - | 22 | - | - |
| SPANNUNG_KLEMME_15N_WERT | 0xDAD2 | STAT_SPANNUNG_KLEMME_15N_WERT | Spannungswert am Steuergerät an Klemme 15N (auf eine Nachkommastelle genau) | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| _TV_STATISTICS_ON_SCREEN | 0x40C6 | - | show current Statistics (inkl. Frames per Second) as Overlay in Output-Image | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40C6_D | - |
| _SW_VERSION_IPF_LESEN | 0x4100 | STAT_IPF_VERSION_LESEN_DATA | This is returning currently the RECW version Byte1: Major Version Byte2: Minor Version | DATA | - | High | data[2] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_READ_POICOUNT | 0x4102 | STAT_POI_COUNT_WERT | ReadData | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_POI_IMPORT | 0x4104 | - | Write full POI data base (it means that all 12 possible POI data structures are written), it is done for the current key | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4104_D | - |
| _PBA_POI_EXPORT | 0x4105 | STAT_POI_DATABASE_DATA | ReadData char[167] | DATA | - | High | data[168] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_POI_LOESCHEN | 0x4107 | - | Delete a data slot of a POI for a given ID | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4107_D | - |
| _PBA_STORE_POI_FROM_BUS | 0x4109 | - | Permanent storage of a POI based on current nav data on CAN | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4109_D | - |
| _PBA_IGNORE_GPS | 0x4120 | - | Ignore the GPS information from CAN bus in order to test the car model | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4120_D | - |
| _PBA_LASTPOS_IMPORT | 0x4121 | - | Write last position data structure | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4121_D | - |
| _PBA_LASTPOS_EXPORT | 0x4122 | STAT_LASTPOS_DATA | LAT, LON, HDG, ALT | DATA | - | High | data[11] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_STATUS_AUTOACTIV | 0x4124 | STAT_AUTO_ACTIV | ReadData | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| _PBA_SET_AUTOACTIV | 0x4125 | - | Set PBA function status | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4125_D | - |
| _PBA_STATUS_TOLERANCE_AUTOCALC | 0x4126 | STAT_TOLERANCE_AUTOCALC | ReadData | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| _PBA_SET_MAP_QUAL_TOLERANCE | 0x4127 | - | Set qual tolerance scaling parameters | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4127_D | - |
| _PBA_MAJOR_MEMBPARAM_SCHREIBEN | 0x4128 | - | write ellipse major axis | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4128_D | - |
| _PBA_MINOR_MEMBPARAM_SCHREIBEN | 0x4129 | - | write ellipse minor axis | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4129_D | - |
| _PBA_HDG_MEMBPARAM_SCHREIBEN | 0x412A | - | Set the heading membership parameters | - | - | - | - | - | - | - | - | - | 2E | ARG_0x412A_D | - |
| _PBA_SPEED_MEMBPARAM_SCHREIBEN | 0x412B | - | Set the speed membership parameters | - | - | - | - | - | - | - | - | - | 2E | ARG_0x412B_D | - |
| _PBA_ACC_MEMBPARAM_SCHREIBEN | 0x412C | - | Set the acceleration membershop parameters | - | - | - | - | - | - | - | - | - | 2E | ARG_0x412C_D | - |
| _PBA_ALT_MEMBPARAM_SCHREIBEN | 0x412D | - | set the altitude membership parameter | - | - | - | - | - | - | - | - | - | 2E | ARG_0x412D_D | - |
| _PBA_MAJOR_MEMBPARAM_LESEN | 0x412E | - | read ellipse major axis | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412E_D |
| _PBA_MINOR_MEMBPARAM_LESEN | 0x412F | - | read ellipse minor axis | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412F_D |
| _PBA_HDG_MEMBPARAM_LESEN | 0x4130 | - | read the heading membership parameters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4130_D |
| _PBA_SPEED_MEMBPARAM_LESEN | 0x4131 | - | read the speed membership parameters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4131_D |
| _PBA_ACC_MEMBPARAM_LESEN | 0x4132 | - | read the acceleration membershop parameters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4132_D |
| _PBA_ALT_MEMBPARAM_LESEN | 0x4133 | - | read the altitude membership parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4133_D |
| _PBA_ELLIPSE_MEMBVALUE_LESEN | 0x4134 | STAT_ELLIPSE_MEMBVALUE_DATA | ReadData | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_HDG_MEMBVALUE_LESEN | 0x4135 | STAT_HEADING_MEMBVALUE_DATA | ReadData | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_ALT_MEMBVALUE_LESEN | 0x4136 | STAT_ALT_MEMBVALUE_DATA | ReadData | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_SPEED_MEMBVALUE_LESEN | 0x4137 | STAT_SPEED_MEMBVALUE_DATA | ReadData | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_ACC_MEMBVALUE_LESEN | 0x4138 | STAT_ACC_MEMBVALUE_DATA | ReadData | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_ACTIVATION_MEMBVALUE_LESEN | 0x4139 | STAT_ACTIV_MEMBVALUE_DATA | ReadData | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_DIST2POI_LESEN | 0x413A | STAT_DIST2POI_WERT_DATA | Foreach 4 Bytes (unsigned long): 0 - (2^32 - 1) = m 2^32              = invalid | DATA | - | High | data[48] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _ATC_SET_LMC_PARAMS_SOLVER | 0x413D | - |  FLOAT ParallelLinesErrScale  FLOAT FixedDistErrScale  FLOAT OrthogonalLinesErrScale  FLOAT ParallelLinesToXaxisErrScale  FLOAT PosVarScale  FLOAT RotVarScale  FLOAT MaxRotDelta  FLOAT MaxPosDelta One set | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x413D_D | RES_0x413D_D |
| _ATC_NOMINAL_CAMERA_POSITIONS | 0x413E | - | In XZZ absolute format. Deg 64ths, mm. As used historically. Not updated by the calibration | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x413E_D | RES_0x413E_D |
| _ATC_CURRENT_CALIBRATION_PGM | 0x413F | - | Outputs the deviation as a floating point number from the default CAD values for the vehicle variant  (X,Y,Z,h per camera) based on filtered PGM calibration results | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x413F_D |
| _ATC_NUMBER_COMPLETED_CYCLES | 0x4140 | - | Outputs the number of successful PGM & LMC calibrations completed per camera. Count should be persisted over power cycle and should only be cleared by a specific job. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4140_D | RES_0x4140_D |
| _ATC_PGM_TRACKS_GATHERED | 0x4141 | - | 1. Outputs the number of tracks used in the last coompleted PGM calibration per camera and the number of frames analysed to acquire them.  2. Outputs the number of tracks acquired for the current calibration and the number of frames analysed to acquire them. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4141_D |
| _ATC_PGM_HEIGHT_CALCULATION_ENABLE | 0x4143 | - | 1. Outputs the number of tracks used in the last coompleted PGM calibration per camera and the number of frames analysed to acquire them.  2. Outputs the number of tracks acquired for the current calibration and the number of frames analysed to acquire them. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4143_D | RES_0x4143_D |
| _ATC_KERB_REJECTION_ENABLE | 0x4144 | - | Allows us to enable or disable PGM height calculation for specific cameras. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4144_D | RES_0x4144_D |
| _ATC_SET_PGM_PARAMETERS | 0x4146 | - | Allows adjustment of PGM parameters for test: - Min No. of tracks per camera. - Max No. of tracks per camera. - No. of tracks required for solve. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4146_D | RES_0x4146_D |
| _ATC_CURRENT_CALIBRATION_LMC | 0x4147 | - | Outputs the deviation as a floating point number from the default CAD values for the vehicle variant  (X,Y,Z,h per camera) based on filtered LMC  calibration results | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4147_D |
| _ATC_SET_FILTERING_TC | 0x4148 | - | Allows adjustment of the amount of filtering applied to calibration result | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4148_D | RES_0x4148_D |
| _ATC_SET_LMC_PARAMS_SELECTORS | 0x4149 | - |  uint16 MinNumLines  uint16 MaxNumLines  FLOAT MinCamOffsetXmm  FLOAT MaxCamOffsetXmm  FLOAT MinCamOffsetYmm  FLOAT MaxCamOffsetYmm  FLOAT MinAngleDeg  FLOAT MaxAngleDeg  uint8 Cam1  uint8 Cam2  uint8 Cam3  bool Vertical One set for each selector (10 selectors) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4149_D | RES_0x4149_D |
| _ARBC_SET_LMD_PARAMETERS | 0x414B | - | Allows adjustment of LMD parameters on each camera for test: - numHorzScans & numVertScans (uint16) (requires restart) - minLineWidthMm & maxLineWidthMm (FLOAT) - numLumThreshRegions (uint8) (requires restart) - edgeThreshold (uint8) - houghThreshold (uint8) - maxHoughNoise (uint16) - houghGradStart & houghGradEnd & houghGradStep (FLOAT) (requires restart) - houghDispStart & houghDispEnd & houghDispStep (FLOAT) (requires restart) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x414B_D | RES_0x414B_D |
| _ATC_ALGORITHM | 0x414C | - | Determines which calibration algorithm will be activated, also allows us to select the cameras that are to be tested. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x414C_D | RES_0x414C_D |
| _ATC_CURRENT_CALIBRATION | 0x414E | - | Outputs the deviation of the current calibration in degrees and in mm from the default CAD values for the vehicle variant  (X,Y,Z,h per camera) based on PGM/LMC results. Will select the LMC or PGM based on the algorithm selected in DID 13. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x414E_D | RES_0x414E_D |
| _ATC_SPEED_STEERING_LIMITS | 0x414F | - | Min Speed for LMC (kph) (uint16) Max Speed for LMC (kph) (uint16) Min Speed for PGM (kph) (uint16) Max Speed for PGM (kph) (uint16) Max Absolute Steering for PGM (deg) (FLOAT) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x414F_D | RES_0x414F_D |
| _ATC_LAST_PGM_TRACKS_GATHERED | 0x4150 | - | Outputs number of tracks used  and frames analysed in the last PGM calibration per camera | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4150_D | RES_0x4150_D |
| _ATC_QUALITY_PER_CAMERA | 0x4151 | - | Calibration quality per camera | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4151_D | RES_0x4151_D |
| _ATC_CALIBRATION_CONFIDENCE | 0x4152 | - | Calibration confidence per camera | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4152_D | RES_0x4152_D |
| _ATC_SET_PGM_TRACKING_POSITIONS | 0x4154 | - | Set PGM Tracking positions | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4154_D | RES_0x4154_D |
| _RECW_TRIGGER_WARNING | 0x4160 | - | Setzt Warnungen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4160_D | - |
| _CTA_FRONT_ACTIVATION | 0x416B | - | Enable/Disable CTA | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x416B_D | RES_0x416B_D |
| _CTA_FRONT_FUNCTION_MODE | 0x416C | - | Mode of function | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x416C_D | RES_0x416C_D |
| _CTA_REAR_ACTIVATION | 0x416D | - | Enable/Disable CTA Rear | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x416D_D | RES_0x416D_D |
| _CTA_REAR_FUNCTION_MODE | 0x416E | - | Mode of function | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x416E_D | RES_0x416E_D |
| _CTA_REAR_PARAMETERS_FOR_COLLISION_RISK | 0x416F | - | Values that affect the logic for creation of an alert | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x416F_D | RES_0x416F_D |
| _PBA_STATUS_CANDEBUG | 0x4170 | STAT_STATUS_CANDEBUG | Status CANDEBUG | 0/1 | - | High | char | - | - | - | - | - | 22 | - | - |
| _PBA_SET_CANDEBUG | 0x4171 | - | An/Abschaltung des CAN Debug Interface Default Status wird angezeigt und auf Disabled nach jedem Reset und Kaltstart gesetzt. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4171_D | - |
| _PBA_LASTPOS_FROM_BUS_SCHREIBEN | 0x4172 | STAT_SCHREIBEN_STATUS | ReadData | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| _PBA_BEHAVIOR_MEMBVALUE_LESEN | 0x4173 | STAT_BEHAVIOR_MEMBVALUE_DATA | Read BEHAVIOR_MEMBVALUE unsigned char[12] | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_VERSION_LESEN | 0x4174 | - | PBA  software component Version lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4174_D |
| _CTA_REAR_SPEED_INTERVAL | 0x4176 | - | Activation Speed and tolerance | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4176_D | RES_0x4176_D |
| _LDS_FUNCTION_MODE | 0x4177 | - | Mode of the LDS user function | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4177_D | RES_0x4177_D |
| _CTA_FRONT_PARAMETERS_FOR_COLLISION_RISK | 0x4179 | - | Values that affect the logic for creation of an alert | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4179_D | RES_0x4179_D |
| _DSP_ALGORITHMS | 0x417A | - | DID diagnostic service used to read/write the algorithms bit masks of rear, top, side, and idle views respectively, two bytes per view, to/from the corresponding cfg. blocks. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x417A_D | RES_0x417A_D |
| _SV_VIEWPORT_PARAMETERS | 0x417B | - | DID diagnostic used to read/write the side-view view-port parameters for the left and right cameras. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x417B_D | RES_0x417B_D |
| _SV_SPEED_INTERVAL | 0x417C | - | Diagnostic DID service used to read/set the side view activation speed interval | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x417C_D | RES_0x417C_D |
| _CTA_FRONT_SPEED_INTERVAL | 0x4180 | - | Activation Speed and tolerance | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4180_D | RES_0x4180_D |
| _RECW_ACTIVATION | 0x4181 | - | Values that affect the logic that controls the activation/disactivation of the function | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4181_D | RES_0x4181_D |
| _RECW_FUNCTION_MODE | 0x4182 | - | Sets the mode of operation of the RECW function (e.g. normal, debug, etc.) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4182_D | RES_0x4182_D |
| _SAW_DEBUG_MSSG | 0x4184 | - | Enables/disables SAW debug messages | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4184_D | RES_0x4184_D |
| _SAW_DEBUG_IMAGE | 0x4185 | - | Enables/disables SAW debug image | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4185_D | RES_0x4185_D |
| _SAW_NON_AVAILABILITY_STATUS | 0x4186 | - | SAW availability status for each camera | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4186_D |
| _SAW_TIMES | 0x4187 | - | SAW timings for each camera | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4187_D |
| _SAW_GET_AREA_VALUES_CAM1 | 0x4188 | - | Get the SAW area values | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4188_D |
| _CTA_FRONT_DEBUG_MESSAGES | 0x4189 | - | Enable/Disable CTA Front debug messages | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4189_D | RES_0x4189_D |
| _CTA_FRONT_OVERLAY_CONTROL | 0x418A | - | Display/clear the warning symbol and the non-availability symbol | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x418A_D | RES_0x418A_D |
| _CTA_FRONT_FUNCTION_STATUS | 0x418B | STAT_AVAILABILITY_CHECK_MODE_WERT | 0=normal 1= on 2=off | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _CTA_REAR_DEBUG_MESSAGES | 0x418C | - | Enable/Disable CTA Rear debug messages | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x418C_D | RES_0x418C_D |
| _CTA_REAR_OVERLAY_CONTROL | 0x418D | - | The display of the static warning/information symbol can be enabled or disabled by coding. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x418D_D | RES_0x418D_D |
| _CTA_REAR_FUNCTION_STATUS | 0x418E | - | Status of CTA Rear function | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x418E_D | RES_0x418E_D |
| _BOP_READ_STATUS | 0x418F | - | Read BOP status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x418F_D |
| _BOP_HMI_WARNING_ZONE | 0x4190 | - | BOP HMI Warning Zone Parameters | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4190_D | RES_0x4190_D |
| _BOP_MODE_CONTROL | 0x4191 | - | BOP Mode Control | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4191_D | RES_0x4191_D |
| _BOP_ROI_RV | 0x4192 | - | BOP ROI RV | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4192_D | RES_0x4192_D |
| _ALG_ACTIVATION_MASK | 0x4193 | - | DID diagnostic service used to read/write the algorithms bit masks of rear, top, side, and idle views respectively, two bytes per view, to/from the corresponding cfg. blocks. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4193_D | RES_0x4193_D |
| _SAW_RESET_TIMES | 0x4194 | - | Reset SAW Times | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4194_D | - |
| _ATC_CALIBRATION_HELPER_RV_TABLE_ENABLE | 0x4195 | - | ATC calibration helper RV table enable | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4195_D | - |
| _ATC_CALIBRATION_HELPER_TOP_VIEW_GRID_ENABLE | 0x4196 | - | Enable/Disable ATC calibration helper top view grid | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4196_D | - |
| _ATC_ACCURACY_LINES_CONFIG | 0x4197 | - | ATC accuracy lines config | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4197_D | - |
| _SAW_GET_AREA_VALUES_CAM2 | 0x4198 | - | Get SAW area values | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4198_D |
| _SAW_GET_AREA_VALUES_CAM3 | 0x4199 | - | Get SAW area values | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4199_D |
| _SAW_GET_AREA_VALUES_CAM4 | 0x419A | - | Get SAW area values | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x419A_D |
| _GIGABIT_PORT_ACTIVATION | 0x419B | - | Gigabit Port Activation | - | - | - | - | - | - | - | - | - | 2E | ARG_0x419B_D | - |
| _PGM_STATES | 0x419C | - | PGM states | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x419C_D | RES_0x419C_D |
| _PGM_ADDITIONAL_CONFIG | 0x419D | - | PGM additional config | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x419D_D | RES_0x419D_D |
| _DEBUGGING_FEATURE_ENABLE | 0x41A0 | - | A diagnostic service used to read/write a cfg parameter that controls some debugging features in the system. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x41A0_D | RES_0x41A0_D |
| _CTA_REAR_NON_AVAILABILITY_DETECTION | 0x41A4 | - | Rear CTA Non Availability Detection | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x41A4_D |
| _CTA_FRONT_NON_AVAILABILITY_DETECTION | 0x41A5 | - | Front CTA Non Availability Detection | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x41A5_D |
| _IQ_READ_IMAGER_REGISTER | 0xF000 | - | Reads the data in the imagers registers | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF000_R | RES_0xF000_R |
| _IQ_WRITE_IMAGER_REGISTER | 0xF001 | - | Writes data to the imagers registers | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF001_R | - |
| _SW_VERSION_SC_LESEN | 0xF100 | - | Read out version number of all Autosar SWC | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF100_R | RES_0xF100_R |
| _PBA_POI_LESEN | 0xF101 | - | Read data slot for POI with given ID | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF101_R | - |
| _PBA_POI_SCHREIBEN | 0xF102 | - | Writes a data slot with phys values of POI with the a given POI-ID | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF102_R | - |
| _PBA_REQ_COMMAND | 0xF103 | - | Request auto activation, AddPoi within quality check, PbaStartup | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF103_R | RES_0xF103_R |

### TAB_CAMERA_UPDATE

| WERT | TEXT |
| --- | --- |
| 0x01 | FV |
| 0x02 | RV |
| 0x04 | TVL |
| 0x08 | TVR |
| 0x0F | Alle Kameras |

### TAB_CAMERA_UPDATE_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CAM_SW_UPDATE_FAILED |
| 0x01 | CAM_SW_UPDATE_RUNNING |
| 0x02 | CAM_SW_UP_TO_DATE |
| 0x03 | CAM_SW_UPDATE_IDLE |
| 0xFF | Ungültiger Wert |

### TAB_CAM_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Fehler |
| 0x01 | RV Kamerafehler |
| 0x02 | TVR Kamerafehler |
| 0x04 | TVL Kamerafehler |
| 0x08 | FV Kamerafehler |
| 0xFF | nicht definiert |

### TAB_DET_ERROR_ID

| WERT | TEXT |
| --- | --- |
| 0x00 | DET error ID placeholder |

### TAB_DET_MODULE_ID

| WERT | TEXT |
| --- | --- |
| 0x00 | Module ID placeholder |

### TAB_DSP_RESET_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | No DSP Reset |
| 0x01 | Video Freeze |
| 0x02 | IPC WDG trigger |

### TAB_ECU_RESET_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | MCU_POR_RESET |
| 0x01 | MCU_WDTO_RESET |
| 0x02 | MCU_SWR_RESET |
| 0x04 | MCU_TRAPR_RESET |
| 0x08 | MCU_IOPUWR_RESET |
| 0x10 | MCU_CM_RESET |
| 0x20 | MCU_EXTR_RESET |
| 0x40 | MCU_BOR_RESET |
| 0xFF | MCU_RESET_UNDEFIED |

### TAB_ECU_VARIANT

| WERT | TEXT |
| --- | --- |
| 0x00 | ICAM_RFK |
| 0x01 | ICAM_SVS |
| 0x02 | ICAM2_SVS |
| 0x03 | ICAM2_RFK |
| 0xFF | Ungültiger Wert |

### TAB_ERROR_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | No Error |
| 0x01 | ECU Reset |
| 0x02 | DSP Reset |
| 0x04 | DET Error |

### TAB_FUSI_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | No error |
| 0x01 | Thread monitoring |
| 0x02 | Core monitoring |
| 0x04 | IPC monitoring |
| 0x08 | IPC error out of range |
| 0x10 | other |
| 0xFF | nicht definiert |

### TAB_HANDSHAKE_HOST_VM

| WERT | TEXT |
| --- | --- |
| 0x00 | No error |
| 0x01 | Host error occured, but playmode successfully sent to VM |
| 0x02 | Host error occured, couldnt queue playmode |
| 0x04 | Host error occured, playmode queued, but no confirmation from VM |

### TAB_ICAM_KONFIG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht verbaut, nicht kodiert |
| 0x01 | verbaut, nicht kodiert |
| 0x02 | kodiert, nicht verbaut |
| 0x03 | kodiert und verbaut |
| 0xFF | ungültig |

### TAB_ICAM_VERBINDUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kameraverbindung in Ordnung |
| 0x01 | Fehler in Versorgungspfad |
| 0x02 | Fehler in Datenpfad |
| 0x04 | Ungültig |

### TAB_KAMERA_ICAM

| WERT | TEXT |
| --- | --- |
| 0x01 | Rear View Kamera |
| 0x02 | Top View Kamera links |
| 0x03 | Top View Kamera rechts |
| 0x04 | Side View Kamera links |
| 0x05 | Side View Kamera rechts |
| 0x06 | Front View Kamera |
| 0xFF | Wert ungültig |

### TAB_KAMERA_TESTBILD

| WERT | TEXT |
| --- | --- |
| 0x01 | Testbild der RV-Kamera |
| 0x02 | Testbild der TV_L-Kamera |
| 0x03 | Testbild der TV_R-Kamera |
| 0x04 | Testbild der SV_L-Kamera |
| 0x05 | Testbild der SV_R-Kamera |
| 0x06 | Testbild der FV-Kamera |

### TAB_KAM_DATEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Physikalischer Kamera Link ist UP |
| 0x01 | Physikalischer Kamera Link ist DOWN |
| 0xFF | Nicht definiert |

### TAB_KAM_ETHERNET

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Kurzschluss |
| 0x02 | Offene Leitung |
| 0xFF | Nicht definiert |

### TAB_KAM_VERSORGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Kurzschlussfehler |
| 0x02 | Unterbrechungsfehler |
| 0xFF | Nicht definiert |

### TAB_QUALITAET_ONLINEKALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht kalibriert |
| 0x01 | Basis-Kalibrierung (mind. 1 erfolgreicher Kalibrierzyklus) |
| 0x02 | Vollständige Kalibrierung |
| 0x05 | Kalibrierung nicht möglich |
| 0x06 | Kamera mechanisch dejustiert |
| 0xFF | Ungültig |

### TAB_TRSVC_AUTOADR

| WERT | TEXT |
| --- | --- |
| 0x00 | Anlernen abgeschlossen oder nicht angefordert |
| 0x01 | Anlernen läuft |
| 0x02 | Anlernen erfolgreich durchgeführt |
| 0x03 | Fehler: Kamera nicht in SG codiert |
| 0x04 | Fehler: Kamera nicht angeschlossen |
| 0x05 | Fehler: Falsche Kamera angeschlossen |

### TAB_TRSVC_TESTBILD

| WERT | TEXT |
| --- | --- |
| 0x00 | REALBILD |
| 0x01 | TESTBILD |

### TAB_VERBINDUNGSFEHLER_FBAS

| WERT | TEXT |
| --- | --- |
| 0x00 | Offene Leitung bei FBAS |
| 0x01 | Kurzschluss FBAS + gegen FBAS - |
| 0x04 | Kurzschluss gegen Masse |
| 0x05 | Kurzschluss gegen Vbat |
| 0xFF | Nicht definiert |

### TLEITUNGFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Leitungsunterbrechung |
| 0x01 | Kurzschluss FBAS+ gegen FBAS- |
| 0x02 | FBAS in Ordnung |
| 0x04 | Kurzschluss nach Masse |
| 0x05 | Kurzschluss nach Plus |
| 0xFF | Ungültiger Wert |

### TSIGNALART

| WERT | TEXT |
| --- | --- |
| 0x01 | Realbild |
| 0x02 | Testbild |
| 0x03 | Signal abschalten |
| 0x04 | Testbild mit Alive Counter (ACNT) |
| 0x05 | Testbild mit stehendem ACNT |
| 0x06 | Testbild mit leicht gestörtem ACNT |
| 0x07 | Testbild mit stark gestörtem ACNT |
| 0x08 | Testbild mit leicht springendem ACNT |
| 0x09 | Testbild mit stark springendem ACNT |

### TTESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### TVIDEOAUSGANG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Alle Ausgänge |
| 0x0001 | Ausgang 1 |
| 0x0002 | Ausgang 2 |
| 0x0004 | Ausgang 3 |
| 0x0008 | Ausgang 4 |
| 0x0010 | Ausgang 5 |
| 0x0020 | Ausgang 6 |
| 0x0040 | Ausgang 7 |
| 0x0080 | Ausgang 8 |
| 0x0100 | Ausgang 9 |
| 0xFFFF | Nicht definiert |
