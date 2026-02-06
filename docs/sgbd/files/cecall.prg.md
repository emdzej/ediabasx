# cecall.prg

## General

|  |  |
| --- | --- |
| File | cecall.prg |
| Type | PRG |
| Jobs | 45 |
| Tables | 44 |
| Origin | BMW EI43 Thomas_Sykora |
| Revision | 3.000 |
| Author | Harman/Becker EDB2 RGoeckelmann, Harman/Becker EDB1 FAnschuetz, |
| ECU Comment | COMBOX_ECALL [13] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | COMBOX Emergency Call |  |  |
| ORIGIN | string | BMW EI43 Thomas_Sykora |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | Harman/Becker EDB2 RGoeckelmann, Harman/Becker EDB1 FAnschuetz, |  |  |
| COMMENT | string | COMBOX_ECALL [13] |  |  |
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

### SCHREIBEN_CONFIGURATION

UDS:     $31   RoutineControl $01   StartRoutine $F001 SCHREIBEN_CONFIGURATION

| Name | Type | Description |
| --- | --- | --- |
| ARG_PFAD | string | Pfad |

### LESEN_CONFIGURATION

UDS:     $31   RoutineControl $01   StartRoutine $F002 LESEN_CONFIGURATION

| Name | Type | Description |
| --- | --- | --- |
| ARG_PFAD | string | Pfad (optional) |

### LESEN_DPAS

UDS:     $31   RoutineControl $01   StartRoutine $F004 LESEN_DPAS

| Name | Type | Description |
| --- | --- | --- |
| ARG_PFAD | string | Pfad (optional) |

### STEUERN_LED

Einschalten der eCall Button LED für die Werksdiagnose

_No arguments._

### STATUS_POWERMANAGEMENT_NEC

Auslesen der gespeicherten internen Powermanagement Transitionen 

| Name | Type | Description |
| --- | --- | --- |
| ARG_DATASET | unsigned char | Dataset number requested Index starts with 0x01 |

### STATUS_POWERMANAGEMENT_NAD

Auslesen der gespeicherten internen Powermanagement Transitionen 

| Name | Type | Description |
| --- | --- | --- |
| ARG_DATASET | unsigned char | Dataset number requested |

### STATUS_ECALL_LOGGING

Auslesen der gespeicherten internen EU ecall Loggings 

| Name | Type | Description |
| --- | --- | --- |
| ARG_DATASET | unsigned char | Dataset number requested Index starts with 0x01 |

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
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x026100 | Energiesparmode aktiv | 0 |
| 0x02FF61 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0xB7F301 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0xB7F302 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0xB7F303 | Codierung: Signatur für Daten ungültig | 0 |
| 0xB7F304 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0xB7F305 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0xB7F306 | Speicherfehler (NVM_E_WRITE_FAILED) | 0 |
| 0xB7F307 | Speicherfehler (NVM_E_READ_FAILED) | 0 |
| 0xB7F308 | Speicherfehler (NVM_E_CONTROL_FAILED) | 0 |
| 0xB7F309 | Speicherfehler (NVM_E_ERASE_FAILED) | 0 |
| 0xB7F30A | Speicherfehler (NVM_E_WRITE_ALL_FAILED) | 0 |
| 0xB7F30B | Speicherfehler (NVM_E_WRONG_CONFIG_ID) | 0 |
| 0xB7F30C | Speicherfehler (NVM_E_READ_ALL_FAILED) | 0 |
| 0xB7F30D | Keine Kommunikation mit GPS-Empfänger | 0 |
| 0xB7F30F | Keine Kommunikation mit internem Empfangsmodul | 0 |
| 0xB7F311 | Kein Zugriff auf interne SIM-Karte | 0 |
| 0xB7F313 | SIM-Karte gesperrt | 0 |
| 0xB7F314 | SIM-Karte nicht freigeschaltet | 0 |
| 0xB7F315 | GPS-Antenne: Kurzschluss nach Plus | 0 |
| 0xB7F316 | GPS-Antenne: Unterbrechung | 0 |
| 0xB7F318 | Notruf-LED Fehler | 0 |
| 0xB7F319 | Notruf-Taster: Kurzschluss | 0 |
| 0xB7F31A | Notruf-Taster: Unterbrechung | 0 |
| 0xB7F31B | Mikrofon 1: Kurzschluss nach Plus | 0 |
| 0xB7F31C | Mikrofon 2: Kurzschluss nach Plus | 0 |
| 0xB7F31D | GSM-Backup-Antenne: Kurzschluss nach Plus | 0 |
| 0xB7F31E | GSM-Antenne: Kurzschluss nach Plus | 0 |
| 0xB7F31F | GSM-Antenne: Kurzschluss nach Masse | 0 |
| 0xB7F320 | Hardware Reset | 0 |
| 0xB7F321 | Software Reset | 0 |
| 0xB7F322 | Alive Signal Airbag fehlt beim Aufstart | 1 |
| 0xB7F323 | Alive Signal Airbag fehlerhaft | 1 |
| 0xB7F324 | Notruf-Lautsprecher: Kurzschluss nach Plus | 0 |
| 0xB7F325 | Notruf-Lautsprecher: Unterbrechung | 0 |
| 0xB7F326 | Notruf-Lautsprecher: Kurzschluss nach Masse | 0 |
| 0xB7F327 | Mikrofon 1: Kurzschluss nach Masse | 0 |
| 0xB7F328 | Mikrofon 1: Unterbrechung | 0 |
| 0xB7F329 | Mikrofon 2: Kurzschluss nach Masse | 0 |
| 0xB7F32A | Mikrofon 2: Unterbrechung | 0 |
| 0xB7F32B | GSM-Antenne: Unterbrechung | 0 |
| 0xB7F32C | GSM-Backup-Antenne: Kurzschluss nach Masse | 0 |
| 0xB7F32D | GSM-Backup-Antenne: Unterbrechung | 0 |
| 0xB7F330 | Speicherfehler (FLS_E_EREASE_FAILED) | 0 |
| 0xB7F331 | Speicherfehler (FLS_E_WRITE_FAILED) | 0 |
| 0xB7F332 | Speicherfehler (FLS_E_READ_FAILED) | 0 |
| 0xB7F333 | Speicherfehler (FLS_E_COMPARE_FAILED) | 0 |
| 0xB7F334 | Aufstart aus unbekanntem Grund | 0 |
| 0xE1445F | BODY-CAN Physikalischer Busfehler | 0 |
| 0xE14468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xE14BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur fuer Testzwecke | 1 |
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
| 0x619400 | VSM_EVENT_VEHICLESTATE | 0 |
| 0x61A000 | ECALL_ASSIST_DISABLED | 0 |
| 0x61A001 | ECALL_ASSIST_NOT_AVAILABLE | 0 |
| 0x61A002 | ECALL_TRIGGERED | 0 |
| 0x61A003 | SIM-Karte nicht freigeschaltet | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ECALL_ENABLE | 0xA076 | - | Notruf (Ecall) einschalten bzw. ausschalten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA076 | RES_0xA076 |
| PROVISIONING_ECALL | 0xA07A | - | Status des Provisionierungsprozess | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA07A |
| RESET_TO_DEFAULTCONFIG | 0xA079 | - | Setzt die standard Telematik Konfigurationswerte zurück und löscht die OTA (Over The Air) Daten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA079 |
| SELBSTTEST | 0xA022 | - | Selbsttests des Steuergerätes Sie sollen einen evtl. notwendigen Tausch von Software/Hardware erkennen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA022 | RES_0xA022 |
| STATUS_GPS | 0xD038 | STAT_GPS | Rückgabe des GPS-Status. | 0-n | - | - | unsigned char | TGpsStatus | - | - | - | - | 22 | - | - |
| STATUS_GPS_RECEIVER_SW_VERSION | 0xD03B | STAT_GPS_RECEIVER_SW_VERSION_WERT | not defined in diagnosis database | - | - | - | string | - | - | - | - | - | 22 | - | - |
| STATUS_ICC_ID_LESEN | 0xD05A | STAT_ICC_ID_WERT | Auslesen des ICC (Integrated Circuit Card) -ID des internen Telefonmoduls | - | - | - | string | - | - | - | - | - | 22 | - | - |
| STATUS_IMEI_LESEN | 0xD06B | STAT_IMEI_WERT | Auslesen des IMEI (International Mobile Equipment Identity) des internen Telefonmoduls | - | - | - | string | - | - | - | - | - | 22 | - | - |
| STATUS_NAD_FIRMWARE_VERSION | 0xD06D | STAT_NAD_FIRMWARE_VERSION_WERT | Auslesen der Firmware Version des NAD (Network Access Module) | - | - | - | string | - | - | - | - | - | 22 | - | - |
| STATUS_NAD_USERWARE_VERSION | 0xD06E | STAT_NAD_USERWARE_VERSION_WERT | Auslesen der Userware Version des NAD (Network Access Module) | - | - | - | string | - | - | - | - | - | 22 | - | - |
| STEUERN_SOS_SPEAKER_TEST | 0xA086 | - | Spielt einen Ton mit parametrierbarer Frequenz, Dauer, Lautstärke | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA086 | - |
| TEST_ANTENNE_ECALL | 0xA05E | - | Startet und bewertet die Prüfung für eine oder mehrere Antennen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA05E | RES_0xA05E |
| TEST_VERBAU_ECALL | 0xA05F | - | Test Verbau CECALL | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA05F | RES_0xA05F |

### TGPSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht unterstuetzt: Kein GPS |
| 0x01 | Nicht unterstuetzt: Kommunikationsfehler |
| 0x02 | Receiverfehler |
| 0x03 | Kein almanac |
| 0x04 | Suche Satelliten |
| 0x05 | Ortung Satellit 1 |
| 0x06 | Ortung Satellit 2 |
| 0x07 | Ortung Satellit 3 |
| 0x08 | Ortung Satellit 4 |
| 0x09 | Ortung Satellit 5 |
| 0x0A | Ortung Satellit 6 |
| 0x0B | 2D Position |
| 0x0C | 3D Position |
| 0xFF | Nicht definiert |

### RES_0XA022

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELBSTTEST_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TSelbsttestRoutine | - | - | - | Routine(n), die getestet wurde(n). Tabelle  TSelbsttestRoutine |
| STAT_SELBSTTEST | - | - | + | 0-n | - | unsigned char | - | TTestStatus | - | - | - | Gibt den Status des Tests wieder. |

### ARG_0XA022

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SELBSTTEST_ROUTINE | + | - | - | - | unsigned long | - | - | - | - | - | - | - | Routinen, die getestet werden sollen. Die Tabelle TSelbsttestRoutine wird in der SGBD von der Entwicklung bzw. vom Zulieferer befüllt und gepflegt. |

### TSELBSTTESTROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Routinen |
| 0xFFFFFFFF | Nicht definiert |

### RES_0XA05E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt an, welche Antenne(n) getestet wurden. |
| STAT_TEST_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TTestStatus | - | - | - | Gibt den Status des gesamten Tests oder der entsprechenden Antennen wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_ANTENNEN_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 2 oder 3 meldet. Gibt wieder, wie viele Fehler während des Tests gefunden wurden. |
| STAT_FEHLER_1_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | Rückgabe der Antenne, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_1_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_1_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_2_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_2_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_3_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_3_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_4_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_4_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_5_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_5_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_6_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_6_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_7_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_7_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_8_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_8_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_9_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_9_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_10_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_10_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_11_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_11_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_12_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_12_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_13_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_13_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_14_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_14_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_15_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_15_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_16_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_16_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |

### ARG_0XA05E

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ANTENNE | + | - | 0-n | - | unsigned long | - | TAntenneCEALL | - | - | - | 0.0 | - | Antenne(n) die getestet werden sollen. Tabelle TAntenneCEALL |

### TANTENNECEALL

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle |
| 0x00000001 | GSM_Telematik |
| 0x00000002 | GSM_Backup |
| 0x00000004 | GPS_Antenne |
| 0xFFFFFFFF | nicht definiert |

### TANTENNEFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Falscher Antennfuß oder Diversity |
| 0xFF | Nicht definiert |

### RES_0XA05F

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAU_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TVerbauCECALL | - | - | - | Ausgeführte Testroutine(n). |
| STAT_TEST_VERBAU | - | - | + | 0-n | - | unsigned char | - | TTestStatus | - | - | - | Gibt den Status des Verbautests wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |

### ARG_0XA05F

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VERBAU_ROUTINE | + | - | 0-n | - | unsigned long | - | TVerbauCECALL | - | - | - | - | - | Routinen, die getestet werden sollen. Tabelle TVerbauCECALL |

### TVERBAUCECALL

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle |
| 0x00000001 | GSM-Telematik |
| 0x00000002 | GSM-Backup |
| 0x00000004 | GSM-Antenne |
| 0x00000008 | Backup-Lautsprecher |
| 0x00000010 | E-Call-Button |
| 0x00000020 | E-Call-LED |
| 0x00000040 | E-Batterie |
| 0x00000080 | Airbag-Leitung |
| 0x00000100 | Wakeup-Leitung-CAS |
| 0x00000200 | Mikrophon1 |
| 0x00000400 | Mikrophon2 |
| 0xFFFFFFFF | nicht definiert |

### TTESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### RES_0XA076

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECALL | - | - | + | 0/1 | - | char | - | - | - | - | - | Status Notruf (Ecall);  0 = ECall deaktiviert  1 = ECall aktiviert |

### ARG_0XA076

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ECALL | + | - | 0/1 | - | char | - | - | - | - | - | 0.0 | - | Notruf (Ecall);  0 = ECall deaktivieren  1 = ECall aktivieren |

### RES_0XA079

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_TO_DEFAULT_CONFIG | - | - | + | 0-n | - | unsigned char | - | TResetStatus | - | - | - | Status Reset Werte gemäß Tabelle TResetStatus 0 UNKNOWN - unbekannt 1 ACTIVE - läuft noch 2 SUCCESS - alles OK 3 FAILED - mit Fehler beendet 4 IDLE - wurde nicht gestartet |

### TRESETSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | unbekannt |
| 0x01 | läuft noch |
| 0x02 | alles OK |
| 0x03 | mit Fehler |
| 0x04 | wurde nicht gestartet |
| 0xFF | undefinierter Zustand |

### RES_0XA07A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROVISIONING | - | - | + | 0-n | - | unsigned char | - | TProvisioningStatusEcall | - | - | - | Status des Provisionierungsprozess Werte gemäß Tabelle TProvisioningStatusEcall |
| STAT_ECALL_OTA_ID_WERT | - | - | + | - | - | string | - | - | - | - | - | Version von den aktuellen OTA Daten |
| STAT_ECALL_DAS_ID_WERT | - | - | + | - | - | string | - | - | - | - | - | Version von den aktuellen DAS Daten |

### TPROVISIONINGSTATUSECALL

| WERT | TEXT |
| --- | --- |
| 0x00 | unbekannt |
| 0x01 | läuft noch |
| 0x02 | alles OK |
| 0x03 | mit Fehler beendet |
| 0x04 | wurde nicht gestartet |
| 0xFF | nicht definiert |

### ARG_0XA086

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | + | - | Hz | high | unsigned int | - | - | - | - | - | - | - | Frequenz in Hertz. Bereich 400 bis 3400 Hz. Sonst Request out of range |
| ARG_LAUTSTAERKE | + | - | - | high | unsigned char | - | - | - | - | - | - | - | Lautstaerke von 0-15. Minimal- und Maximalbereich eincodiert. Bei ungueltigen Einganben kommt Request out of range |
| ARG_DAUER | + | - | - | high | unsigned char | - | - | - | - | - | - | - | Dauer des Tons. Wertebereich von 0 bis 255 |

### TPOWERSTATENEC

| WERT | TEXT |
| --- | --- |
| 0x00 | Default; This state should never be logged |
| 0x01 | Sleepmode Power Off |
| 0x02 | Sleepmode Power On |
| 0x03 | Silent Operation |
| 0x04 | Normal Operation |
| 0x05 | Reset |
| 0x06 | Prepare Shutdown |
| 0x07 | High Temperature Shutdown |
| 0x0A | Wake up MB |
| 0x0B | Time Update1 |
| 0x0C | Time Update2 |
| 0xFF | Nicht definiert |

### TPOWEREVENTNEC

| WERT | TEXT |
| --- | --- |
| 0x00 | No change |
| 0x01 | Clamp R On |
| 0x02 | Active eCall |
| 0x03 | NAD Wake-Up |
| 0x04 | eCall Button |
| 0x05 | Airbag active |
| 0x06 | CAN on |
| 0x07 | First-Switch-To-Power |
| 0x08 | Wakeup Error |
| 0x09 | Wakeup Vehicle Request |
| 0x0A | Wakeup MB Request |
| 0x0B | NAD Always On expired |
| 0x0C | MAX RS activation reached |
| 0x0D | Network lost |
| 0x0E | High Power Timer expired |
| 0x15 | !Clamp R On && ! Active eCall On && !RST |
| 0x16 | Go to Sleep Power On |
| 0x17 | Go to Sleep Power Off |
| 0x18 | Go to Sleep Power Diagnostic |
| 0x19 | Over Temperature detected |
| 0x1A | NAD Off |
| 0x1E | NAD error |
| 0x1F | Request by Coding; Diagnostic reset |
| 0x20 | Wakeup by eCall; Only during shutdown sequence |
| 0x21 | Wakeup by NAD; Only during shutdown sequence |
| 0x22 | Wakeup by Clamp R On; Only during shutdown sequence |
| 0x23 | Wakeup by Can; Only during shutdown sequence |
| 0x24 | Wakeup by Airbag Crash; Only during shutdown sequence |
| 0x25 | Wakeup by Airbag; Only during shutdown sequence |
| 0x26 | Watchdog |
| 0x27 | Over Temperature Timer expired |
| 0xFF | Nicht definiert |

### TPOWERSTATENAD

| WERT | TEXT |
| --- | --- |
| 0x00 | Default; This state should never be logged |
| 0x01 | Sleep Power Off |
| 0x02 | Nad Always On |
| 0x03 | Normal Operation |
| 0x04 | Active ECall |
| 0x05 | Wakeup Nec |
| 0x06 | Wakeup Main Bord |
| 0x0B | Wakeup Vehicle |
| 0x0C | Time Update 1 |
| 0x0D | Time Update 2 |
| 0x0E | Main Bord Active |
| 0x0F | Main Bord Inactive |
| 0xFF | Nicht definiert |

### TPOWEREVENTNAD

| WERT | TEXT |
| --- | --- |
| 0x00 | No Change |
| 0x01 | Main Bord Active |
| 0x02 | Main Bord Inactive |
| 0x03 | Active ECall |
| 0x04 | NAD Always On Expired |
| 0x05 | RST |
| 0x06 | Wakeup Vehicle Request |
| 0x07 | Max RS Activation |
| 0x08 | Network Lost |
| 0x09 | Wakeup By Nec |
| 0x0A | Temperature Threshold |
| 0xFF | Nicht definiert |

### TSTATEECALLLOG

| WERT | TEXT |
| --- | --- |
| 0x0000 | DEFAULT |
| 0x0A00 | RELEASE_CALL_NORMAL |
| 0x0A01 | RELEASE_CALL_HANGUP |
| 0x0A02 | RELEASE_CALL_DROPPED |
| 0x0A03 | RELEASE_CALL_CANCELLED |
| 0x0B00 | OPERATION_RESULT_UNDEFINED |
| 0x0B01 | OPERATION_RESULT_DISABLED |
| 0x0B02 | OPERATION_RESULT_FAILED |
| 0x0B03 | OPERATION_RESULT_SUCCESS |
| 0x0C00 | OPERATION_RESULT_UNDEFINED |
| 0x0C01 | OPERATION_RESULT_DISABLED |
| 0x0C02 | OPERATION_RESULT_FAILED |
| 0x0C03 | OPERATION_RESULT_SUCCESS |
| 0x0D00 | OPERATION_RESULT_UNDEFINED |
| 0x0D01 | OPERATION_RESULT_DISABLED |
| 0x0D02 | OPERATION_RESULT_FAILED |
| 0x0D03 | OPERATION_RESULT_SUCCESS |
| 0x0E00 | UNDEFINED |
| 0x0E01 | ASSIST_MANUAL |
| 0x0E02 | ASSIST_AUTOMATIC |
| 0x0E03 | PSAP_VOICE_MANUAL |
| 0x0E04 | PSAP_VOICE_AUTOMATIC |
| 0x0E05 | ASSIST_AUTOMAIC_FAILED_PSAP_ACTIVATED |
| 0x0E06 | ASSIST_MANUAL_FAILED_PSAP_ACTIVATED |
| 0x1100 | FAILED |
| 0x1101 | SUCCESSFUL |
| 0x1200 | ECALL_BROADER_SHUTTER |
| 0x1201 | ECALL_MOST_MESSAGE |
| 0x1202 | ECALL_EMERGENCY_BUTTON |
| 0x1203 | ECALL_AUTOMATIC |
| 0x1204 | ECALL_EXTERNAL_TRIGGERS |
| 0x1205 | ECALL_TRIGGER_SOURCE_UNDEFINED |
| 0xFFFF | Nicht definiert |

### TEVENTECALLLOG

| WERT | TEXT |
| --- | --- |
| 0x00 | DEFAULT |
| 0x01 | TIME_UPDATE_1 |
| 0x02 | TIME_UPDATE_2 |
| 0x03 | MILAGE_1 |
| 0x04 | MILAGE_2 |
| 0x05 | MILAGE_3 |
| 0x06 | MILAGE_4 |
| 0x0A | VOICE_CALL_RELEASE_STATE |
| 0x0B | SEND_BACKUP_SMS_RESULT |
| 0x0C | SEND_MAIN_SMS_RESULT |
| 0x0D | SEND_SECOND_BACKUP_SMS_RESULT |
| 0x0E | TYPE |
| 0x0F | DIAL_ATTEMPT |
| 0x10 | SMS_ATTEMPT |
| 0x11 | ECALL_RESULT |
| 0x12 | TRIGGER_SOURCE |
| 0x14 | TIME_BACKUP_SMS_SENT |
| 0x15 | TIME_DIAL |
| 0x16 | TIME_SEND_MAIN_SMS |
| 0x17 | TIME_SEND_DTMF |
| 0x18 | TIME_PREPARE_FOR_TERMINATE_EVENT_RECEIVED |
| 0x19 | TIME_TERMINATE_EVENT_RECEIVED |
| 0x1A | TIME_VOICE_CALL_RELEASE |
| 0x1B | TIME_SEND_SECOND_BACKUP_SMS |
| 0x1C | TIME_ECALL_FINISHED |
| 0x1D | TIME_ECALL_REOPENED_BY_OPERATOR_CALL_BACK |
| 0x1E | TIME_ECALL_REOPENED_BY_REQUEST_UPDATE |
| 0x1F | TIME_CALLBACK_MODE_ENDED |
| 0x20 | TIME_MFL_HANGUP_RECEIVED |
| 0x21 | TIME_ECALL_CANCELLED |
| 0x22 | TIME_POSITION_UPDATE_RECEIVED0 |
| 0x23 | TIME_POSITION_UPDATE_RECEIVED1 |
| 0x24 | TIME_POSITION_UPDATE_RECEIVED2 |
| 0x25 | TIME_POSITION_UPDATE_RECEIVED3 |
| 0x26 | TIME_POSITION_UPDATE_RECEIVED4 |
| 0xFF | Nicht definiert |
