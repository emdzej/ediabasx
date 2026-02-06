# eps_25.prg

## General

|  |  |
| --- | --- |
| File | eps_25.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 99 |
| Origin | BMW EF-440 Dirk_Feldmann |
| Revision | 1.127 |
| Author | BMW EF-440 Dirk_Feldmann, TKP PSW Andras_Schall, TKP PSW Laszlo |
| ECU Comment | EPS [61] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Electrical Power - Assist - Steering |  |  |
| ORIGIN | string | BMW EF-440 Dirk_Feldmann |  |  |
| REVISION | string | 1.127 |  |  |
| AUTHOR | string | BMW EF-440 Dirk_Feldmann, TKP PSW Andras_Schall, TKP PSW Laszlo |  |  |
| COMMENT | string | EPS [61] |  |  |
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

### GARAGE_DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen UDS  : $10 StartDiagnosticSession Modus: einstellbar mit diesem Job

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
| 0xFF | ungültiger Betriebsmode | Invalid |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x023000 | Energiesparmode - aktiv | 0 |
| 0x02FF30 | Diagnosemaster - Dummy Application DTC | 1 |
| 0x48238C | Steuergerät intern - Übertemperatur Abschaltung Lenkunterstützung | 0 |
| 0x48238D | Ruhestrom Plausibilisierung Kl15N lokal mit Bus-Signal | 0 |
| 0x48238E | Spannungsversorgung - Globale Überspannung | 0 |
| 0x48238F | Spannungsversorgung - Lokale Überspannung Reduzierung Lenkunterstützung | 0 |
| 0x482390 | Energiebordnetz - Bordnetzrestwelligkeit zu hoch | 0 |
| 0x482391 | Energiebordnetz - Bordnetzhochohmigkeit | 0 |
| 0x482392 | Energiebordnetz - Bordnetzhochohmigkeit Abschaltung Lenkunterstützung | 0 |
| 0x482394 | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert | 0 |
| 0x482395 | Lenkgetriebe - Reibung zu hoch | 0 |
| 0x482396 | Lenkgetriebe - Antriebsriemen gerissen | 0 |
| 0x482397 | Steuergerät intern - Defekt | 0 |
| 0x482399 | Spannungsversorgung - Lokale Überspannung Abschaltung Lenkunterstützung | 1 |
| 0x48239A | Sensor - Drehmoment - Lenkmoment - Leitungsfehler | 1 |
| 0x48239B | Sensor - Drehmoment - Lenkmoment - Außerhalb Temperaturbereich | 1 |
| 0x48239C | Sensor - Lenkwinkel Index - Defekt | 0 |
| 0x48239D | Steuergerät intern - TKP - Software - Schwerer Ausnahmefehler | 0 |
| 0x48239E | Steuergerät intern - TKP - Software - Falsche Version | 0 |
| 0x4823A0 | Steuergerät intern - TKP - Hardware - RAM defekt | 0 |
| 0x4823A1 | Steuergerät intern - TKP - Hardware - Sternpunkt-Relais defekt | 0 |
| 0x4823A2 | Steuergerät intern - TKP - Hardware - FLASH defekt | 0 |
| 0x4823C0 | Steuergerät intern - TKP - Software Fehler | 0 |
| 0x4823C1 | Steuergerät intern - Minimale Reduzierung Lenkunterstützung aufgrund Unter-oder Übertemperatur | 0 |
| 0x4823C2 | Sensor - Rotorlage - Lenkwinkel - Geradeauslauf nicht gelernt | 0 |
| 0x4823C3 | Steuergerät intern - TKP - Hardware - EEPROM defekt | 0 |
| 0x4823C4 | Spannungsversorgung - Minimale Reduzierung Lenkunterstützung aufgrund Lokale Unterspannung | 0 |
| 0x4823C6 | Sensor - Motor - Allgemeiner Fehler | 0 |
| 0x4823C8 | Codierung - Transaktion gescheitert | 0 |
| 0x4823C9 | Codierung - Signatur fehlerhaft | 0 |
| 0x4823CA | Codierung - ungueltige Daten | 0 |
| 0x4823CB | Codierung - Steuergeraet nicht codiert | 0 |
| 0x4823CC | Codierung - Falsches Fahrzeug | 0 |
| 0x4823D1 | Nichtflüchtiger Speicher - allgemeiner Fehler | 0 |
| 0x4823D2 | Sensor - Rotorlage - Lenkwinkel - Hardware defekt | 0 |
| 0x4823D4 | Spannungsversorgung - Globale Unterspannung | 0 |
| 0x4823D5 | Spannungsversorgung - Steuergeräte Reset | 0 |
| 0x4823E4 | Spannungsversorgung Motortreiber Über- oder Unterspannung | 0 |
| 0x4823EC | Sensor - Drehmoment - Lenkmoment - Defekt | 0 |
| 0x4823F9 | Steuergerät intern - Übertemperatur Reduzierung Lenkunterstützung | 0 |
| 0x4823FC | Spannungsversorgung - Lokale Unterspannung Reduzierung Lenkunterstützung | 1 |
| 0x4823FD | Spannungsversorgung - Lokale Unterspannung Abschaltung Lenkunterstützung | 1 |
| 0x482452 | Sensor - Lenkwinkel Index Riemensprung erkannt | 0 |
| 0xD5041F | Busfehler (Flexray) - Physikalischer Bus Fehler | 0 |
| 0xD50420 | Busfehler (Flexray) - Controller Fehler | 0 |
| 0xD50BFF | Diagnosemaster - Dummy Network DTC | 1 |
| 0xD51414 | Botschaftsfehler (Spannung Bordnetz, ID: U_BN) Sender: DME1 - Timeout | 1 |
| 0xD51415 | Botschaftsfehler (Spannung Bordnetz, ID: U_BN) Sender: DME1 - Alive | 1 |
| 0xD51428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD5144E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Ungültig | 1 |
| 0xD51458 | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) Sender:  - Timeout | 1 |
| 0xD51459 | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) Sender:  - Checksumme | 1 |
| 0xD5145A | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) Sender:  - Alive | 1 |
| 0xD5145B | Signalfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) Sender:  - Ungültig | 1 |
| 0xD5145C | Signalfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) Sender:  - Undefiniert | 1 |
| 0xD51476 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Ungültig | 1 |
| 0xD51482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Timeout | 1 |
| 0xD51496 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) Sender: PMA - Alive | 1 |
| 0xD514AA | Signalfehler (Fehlerspeicher Bordnetz Spannung, ID: ERRM_BN_U) Sender: DME1 - Ungültig | 1 |
| 0xD514AB | Signalfehler (Fehlerspeicher Bordnetz Spannung, ID: ERRM_BN_U) Sender: DME1 - Undefiniert | 1 |
| 0xD514AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Timeout | 1 |
| 0xD514B2 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Ungültig | 1 |
| 0xD514B3 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Undefiniert | 1 |
| 0xD514B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD514B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD514BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD514BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Ungültig | 1 |
| 0xD514BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Undefiniert | 1 |
| 0xD514C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD514E8 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Timeout | 1 |
| 0xD514EA | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Alive | 1 |
| 0xD514EE | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Ungültig | 1 |
| 0xD514EF | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Undefiniert | 1 |
| 0xD514F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD514F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD514F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Timeout | 1 |
| 0xD514FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Alive | 1 |
| 0xD514FC | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Ungültig | 1 |
| 0xD514FD | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Undefiniert | 1 |
| 0xD5150A | Botschaftsfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) Sender: ICM_QL - Timeout | 1 |
| 0xD51510 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) Sender: ICM_QL - Ungültig | 1 |
| 0xD51511 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) Sender: ICM_QL - Undefiniert | 1 |
| 0xD51513 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Alive | 1 |
| 0xD51542 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Sender: ICM_QL - Timeout | 1 |
| 0xD5158C | Botschaftsfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD51590 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD51744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Timeout | 1 |
| 0xD51746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Alive | 1 |
| 0xD518E1 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Timeout | 1 |
| 0xD518E6 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) Sender: PMA - Timeout | 1 |
| 0xD51996 | Signalfehler (Status Parkassistent, ID: ST_PMA) Sender: PMA - Ungültig | 1 |
| 0xD519AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Ungültig | 1 |
| 0xD51A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Qualifier | 1 |
| 0xD51A53 | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Qualifier | 1 |
| 0xD51C12 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Timeout | 1 |
| 0xD51C13 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Checksumme | 1 |
| 0xD51C14 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Alive | 1 |
| 0xD51C1B | Botschaftsfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) Sender: DME1 - Timeout | 1 |
| 0xD51C1F | Botschaftsfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) Sender: DME1 - Timeout | 1 |
| 0xD51C20 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Timeout | 1 |
| 0xD51C21 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Checksumme | 1 |
| 0xD51C22 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Alive | 1 |
| 0xD52C0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Undefiniert | 1 |
| 0xD52C19 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Undefiniert | 1 |
| 0xD52C3D | Signalfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Ungültig | 1 |
| 0xD52C3E | Signalfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Undefiniert | 1 |
| 0xD52C3F | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Ungültig | 1 |
| 0xD52C40 | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Undefiniert | 1 |
| 0xD52C44 | Signalfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) Sender: DME1 - Ungültig | 1 |
| 0xD52C45 | Signalfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) Sender: DME1 - Undefiniert | 1 |
| 0xD52C53 | Signalfehler (Status Parkassistent, ID: ST_PMA) Sender: PMA - Undefiniert | 1 |
| 0xD52C5C | Signalfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) Sender: DME1 - Ungültig | 1 |
| 0xD52C5D | Signalfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) Sender: DME1 - Undefiniert | 1 |
| 0xD52C79 | Signalfehler (Spannung Bordnetz, ID: U_BN) Sender: DME1 - Ungültig | 1 |
| 0xD52C7A | Signalfehler (Spannung Bordnetz, ID: U_BN) Sender: DME1 - Undefiniert | 1 |
| 0xD52D54 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Qualifier | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 8 |
| F_HLZ_VIEW | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | Vorkommen Occurence | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4001 | Kennung Identifier | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4002 | Status Wort State word | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x400e | KL15N Status und KL30 Spannung KL15N state and KL30 voltage level | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4005 | Klemme und Fahrzeug Status Clamp and vehicle status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4006 | Fahrzeuggeschwindigkeit Vehicle speed | km/h | high | unsigned char | - | 4 | 1 | 0 |
| 0x4007 | Generator Load Relieving | - | high | unsigned char | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x300000 | DEM_EVENT_SK_FAILURE | 0 |
| 0x300001 | DEM_EVENT_ADC_FAILURE_SD | 0 |
| 0x300003 | DEM_EVENT_CB1_FAILURE_SD | 0 |
| 0x300004 | DEM_EVENT_EEPROM_FAILURE | 0 |
| 0x300009 | DEM_EVENT_P40_FAILURE_NA | 0 |
| 0x30000B | DEM_EVENT_P41_FAILURE_NA | 0 |
| 0x30000E | DEM_EVENT_TMD_FAILURE_NA | 0 |
| 0x30000F | DEM_EVENT_TMD_FAILURE_SD | 0 |
| 0x300014 | DEM_EVENT_VMD_FAILURE_NA | 0 |
| 0x300015 | DEM_EVENT_VMD_FAILURE_SD | 0 |
| 0x300016 | DEM_EVENT_TAH_FAILURE | 0 |
| 0x300017 | DEM_EVENT_TAH_FAILURE_SD | 0 |
| 0x30001E | DEM_EVENT_APP_FAILURE_SD | 0 |
| 0x30001F | DEM_EVENT_GDU_FAILURE_NA | 0 |
| 0x300020 | DEM_EVENT_GDU_FAILURE_SD | 0 |
| 0x300022 | DEM_EVENT_RPS_DATA_COMP | 0 |
| 0x300023 | DEM_EVENT_ATIC_ERROR_BYTE | 0 |
| 0x300024 | DEM_EVENT_STACK_OVERFLOW | 0 |
| 0x300025 | DEM_EVENT_TRQ_DATA_COMP | 0 |
| 0x300026 | DEM_EVENT_TRQ_MSG_NUM | 0 |
| 0x300027 | DEM_EVENT_ENVELOPE_CHK | 0 |
| 0x300028 | DEM_EVENT_TRQ_PAS4_PARITY | 0 |
| 0x30002A | DEM_EVENT_TRQ_PAS4_FRAME | 0 |
| 0x30002C | DEM_EVENT_UART_FRAME | 0 |
| 0x30002D | DEM_EVENT_TRQ_FRAME_NUM | 0 |
| 0x30002E | DEM_EVENT_BAT_UNDERVOLTAGE | 1 |
| 0x30002F | DEM_EVENT_TRQ_SUPPLY | 0 |
| 0x300030 | DEM_EVENT_OFFSET_COMP | 0 |
| 0x300031 | DEM_EVENT_RAM_CONTENT_MON | 0 |
| 0x300032 | DEM_EVENT_SPD_QUALIFIER | 1 |
| 0x300034 | DEM_EVENT_SPD_CRC | 1 |
| 0x300035 | DEM_EVENT_SPD_ALIVE_C | 1 |
| 0x300036 | DEM_EVENT_SANITY_CHK | 0 |
| 0x300037 | DEM_EVENT_TRQ_EST_DEV_CHK | 0 |
| 0x300038 | DEM_EVENT_CORE_SELF_TEST | 0 |
| 0x300039 | DEM_EVENT_5V_SUPPLY | 0 |
| 0x30003A | DEM_EVENT_CF | 0 |
| 0x30003B | DEM_EVENT_BAT_OVERVOLTAGE | 1 |
| 0x30003C | DEM_EVENT_ATIC_SUPPLY | 0 |
| 0x30003D | DEM_EVENT_TRQ_CUT_ERROR | 0 |
| 0x30003E | DEM_EVENT_TRQ_ERROR_FLAGS | 0 |
| 0x30003F | DEM_EVENT_QA | 0 |
| 0x300040 | DEM_EVENT_MCU_IO_VOLT_COMP | 0 |
| 0x300041 | DEM_EVENT_TSK_FAILURE_SD | 0 |
| 0x300043 | DEM_EVENT_VCD_FAILURE | 0 |
| 0x300046 | DEM_EVENT_BOARD_TEMP_RANGE | 0 |
| 0x300048 | DEM_EVENT_PARAMETER_CRC | 0 |
| 0x300049 | DEM_EVENT_PWM_TASK_TIMER_SYN | 0 |
| 0x30004A | DEM_EVENT_FLASH_CRC_CHK | 0 |
| 0x30004D | DEM_EVENT_BOARD_TEMP_PLAU | 0 |
| 0x30004E | DEM_EVENT_ASIC_SUPPLY | 0 |
| 0x30004F | DEM_EVENT_GATE_DRV_STARTUP | 0 |
| 0x300051 | DEM_EVENT_POWERM_TEMP_RANGE | 0 |
| 0x300053 | DEM_EVENT_MOT_TEMP_RANGE | 0 |
| 0x300055 | DEM_EVENT_SPR_DE_ICING | 0 |
| 0x300056 | DEM_EVENT_SPR_STARTUP | 0 |
| 0x300057 | DEM_EVENT_RPS_NOT_INIT | 0 |
| 0x300058 | DEM_EVENT_GDU_OVERCURRENT | 0 |
| 0x300059 | DEM_EVENT_REF_TRQ_PLA_CHK | 0 |
| 0x30005A | DEM_EVENT_AAD_FACTORY_DEF_ERR | 0 |
| 0x30005B | DEM_EVENT_TSS_TEMP_RANGE | 0 |
| 0x30005C | DEM_EVENT_FSSP_FAILURE | 0 |
| 0x30005D | DEM_EVENT_STATE_MACHINE | 0 |
| 0x30005E | DEM_EVENT_PAP_EEP_READ | 0 |
| 0x30005F | DEM_EVENT_PAP_EEP_WRITE | 0 |
| 0x300060 | DEM_EVENT_RE_DE_ICING | 0 |
| 0x300061 | DEM_EVENT_SET_COUNTER | 0 |
| 0x300062 | DEM_EVENT_RAM_ECC_SELF_TEST | 0 |
| 0x300063 | DEM_EVENT_ECC_STAT_MON | 0 |
| 0x300065 | DEM_EVENT_FR_PHY_BUS_SEC | 1 |
| 0x300066 | DEM_EVENT_SPI_FAILURE | 0 |
| 0x300067 | DEM_EVENT_FLASH_ECC_SELF_TEST | 0 |
| 0x300068 | DEM_EVENT_SK_DIAGNOSTIC | 0 |
| 0x300069 | DEM_EVENT_TSU_TEMP_PLAU | 0 |
| 0x30006A | DEM_EVENT_RDM_CONN_OVERH_SEC | 0 |
| 0x30006B | DEM_EVENT_RDM_ASS_DIST_SEC | 0 |
| 0x30006C | DEM_EVENT_HWAP_SEC | 0 |
| 0x30006D | DEM_EVENT_WD_RESET_OCCURED | 0 |
| 0x30006E | DEM_EVENT_DIVERSE_APP_SEC | 0 |
| 0x30006F | DEM_EVENT_DIVERSE_MOC_SEC | 0 |
| 0x300071 | DEM_EVENT_DIVERSE_SMD_SEC | 0 |
| 0x300072 | DEM_EVENT_PWM_CTRL_TIME_OUT | 0 |
| 0x300073 | DEM_EVENT_G_DRV_STARTUP_ASIC | 0 |
| 0x300074 | DEM_EVENT_G_DRV_STARTUP_MCU | 0 |
| 0x300075 | DEM_EVENT_VOLT_MEAS_CIRC | 0 |
| 0x300076 | DEM_EVENT_TASK_OVERFLOW | 0 |
| 0x300077 | DEM_EVENT_DIVERSE_ACT_CHK | 0 |
| 0x300078 | DEM_EVENT_CURR_OFFSET_ERROR | 0 |
| 0x300079 | DEM_EVENT_AAD_TIME_OUT | 0 |
| 0x30007A | DEM_EVENT_AAD_SLEEP_MODE_ERR | 0 |
| 0x30007B | DEM_EVENT_ATIC_HW_COUNTER | 0 |
| 0x30007C | DEM_EVENT_AC_CAP_FAILURE | 0 |
| 0x30007D | DEM_EVENT_GDU_SLEEP_MODE_ERR | 0 |
| 0x30007E | DEM_EVENT_ECU_SLEEP_MODE_ERR | 0 |
| 0x30007F | DEM_EVENT_EFI_FAILURE | 1 |
| 0x300080 | DEM_EVENT_ATIC_COUNTER_INIT | 0 |
| 0x300081 | DEM_EVENT_GDU_FUNC_STARTUP | 0 |
| 0x300082 | DEM_EVENT_PWM_PATTERN_CHECK | 0 |
| 0x300083 | DEM_EVENT_EVL_LIMIT | 0 |
| 0x300084 | DEM_EVENT_DMD_FAILURE | 0 |
| 0x300085 | DEM_EVENT_IDX_PLAU_CHK | 0 |
| 0x300086 | DEM_EVENT_INTERRUPT_FAILURE | 0 |
| 0x300087 | DEM_EVENT_DIVERSE_PAP | 0 |
| 0x300088 | DEM_EVENT_PAP_BELT_JUMP | 0 |
| 0x300089 | DEM_EVENT_BJC_CALC_CHECK | 0 |
| 0x300090 | DEM_EVENT_BJC_OFFS_CRC | 0 |
| 0x300091 | DEM_EVENT_NO_DTC_SEC | 0 |
| 0x300104 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x300105 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x300106 | NVM_E_READ_ALL_FAILED | 0 |
| 0x300108 | VSM_EVENT_VEHICLESTATE | 1 |
| 0x300110 | DEM_EVENT_CURRENT_GAIN | 0 |
| 0x300111 | DEM_EVENT_ATIC116_SPEEDCOMP | 0 |
| 0x300112 | DEM_EVENT_BJ_CO_UPDATE_OCCURED | 0 |
| 0x482380 | Nichtflüchtiger Speicher - Loeschen gescheitert | 0 |
| 0x482384 | Flash - Vergleich gescheitert | 0 |
| 0x482385 | Flash - Loeschen gescheitert | 0 |
| 0x482386 | Flash - Lesen gescheitert | 0 |
| 0x482387 | Flash - Schreiben gescheitert | 0 |
| 0x482388 | Pia - IO Fehler | 0 |
| 0x482389 | Nichtflüchtiger Speicher - Schreiben gescheitert | 0 |
| 0x48238A | Nichtflüchtiger Speicher - Lesen gescheitert | 0 |
| 0x48238B | Nichtflüchtiger Speicher - Kontrolle gescheitert | 0 |
| 0x4823CD | Diagnosemaster - Ausfall Relativzeit | 1 |
| 0x4823CE | Diagnosemaster - Warteschlange voll | 0 |
| 0x4823CF | Diagnosemaster - Warteschlange geloescht | 0 |
| 0x482451 | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert | 0 |
| 0x482453 | Sensor - Lenkwinkel Index Verdacht Riemensprung | 0 |
| 0x482454 | Lenkgetriebe - Reibung zu hoch | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | Occurence | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4001 | Identifier | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4002 | State word | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x400e | KL15N state and KL30 voltage level | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4005 | Clamp and vehicle status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4006 | Vehicle speed | km/h | high | unsigned char | - | 4 | 1 | 0 |
| 0x400f | Additional information | - | high | unsigned int | - | 1 | 1 | 0 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EPS_PENDELN | 0xAB56 | - | Start und Status EPS Pendelroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB56 | RES_0xAB56 |
| EPS_LENKWINKELSENSOR_KALIBRIERUNG_RESET | 0xAB69 | - | Start Reset Lenkwinkel Offset | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_INITIALISIERUNG_SERVICE | 0xAB6C | - | Starten, Stoppen und Status Initialisierungsroutine | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB6C |
| STEUERN_BORDNETZWELLIGKEIT_UEBERWACHUNG_RESET | 0xAB6D | - | Rücksetzen Bordnetzwelligkeitsüberwachung | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_BORDNETZWELLIGKEIT_STATISIK_RESET | 0xAB6F | - | Rücksetzen Bordnetzwelligkeitsstatistik | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_VERFAHREN | 0xAB71 | - | Starten, Stoppen und Status Lenkverfahrroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB71 | RES_0xAB71 |
| EPS_INITIALISIERUNG_WERK | 0xAB72 | - | Starten, Stoppen und Status Initialisierungsroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB72 | RES_0xAB72 |
| EPS_MOTORLAGEWINKELSENSOR | 0xDB56 | - | Auslesen Daten Sensor EPS Motorlagewinkel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB56 |
| EPS_RITZELWINKELSENSOR | 0xDB57 | - | Auslesen Daten EPS Ritzelwinkel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB57 |
| EPS_INIT | 0xDB58 | STAT_EPS_INIT_NR | Auslesen EPS Initialisierung | 0-n | - | - | char | TAB_INIT | - | - | - | - | 22 | - | - |
| EPS_ENDANSCHLAEGE_WINKEL | 0xDB59 | - | Auslesen Daten EPS Endanschlaege winkelbezogen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB59 |
| EPS_LENKWINKELSENSOR_KALIBRIERUNG | 0xDB5A | - | Auslesen und Vorgeben Lenkwinkel Offset | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDB5A | RES_0xDB5A |
| EPS_ZAHNSTANGENHUB | 0xDB6E | - | Auslesen Daten EPS Zahnstangenhub | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB6E |
| EPS_STROEME | 0xDB8B | - | Auslesen Strom EPS Motor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB8B |
| EPS_MOMENTENSENSOR | 0xDB99 | - | Auslesen Daten Sensor Lenkmoment | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB99 |
| EPS_GESAMTRITZELWINKEL | 0xDB9A | STAT_GESAMTRITZELWINKEL_WERT | Auslesen Daten EPS Gesamtritzelwinkel | ° | - | - | unsigned int | - | 1.0 | 32.0 | 0.0 | - | 22 | - | - |
| EPS_ENDANSCHLAEGE_HUB | 0xDBC4 | - | Auslesen Daten EPS Endanschlaege hubbezogen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBC4 |
| EPS_EIGENDIAGNOSE_REIBUNG | 0xAB20 | - | Prüft durch Verfahren der Lenkung die Reibung im Lenkungsstrang. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB20 | RES_0xAB20 |
| LENKMOMENTENSENSOR_OFFSET_LERNEN | 0xAB21 | - | Lernt durch Verfahren der Lenkung ein eventuell vorhandenes Offset des Lenkmomentensensors. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB21 |
| EPS_INDEXSENSOR_KALIBRIERUNG | 0xAB22 | - | Lernt durch Verfahren der Lenkung die genaue Lage der Indexflanken auf der Lenksäule. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB22 |
| READ_KM_STAND | 0x1700 | STAT_KM_WERT | km stand | km | - | high | data[3] | - | - | - | - | - | 22 | - | - |
| READ_RELATIVE_TIME | 0x1701 | STAT_REALTIVE_TIME_WERT | relative time | - | - | high | long | - | - | - | - | - | 22 | - | - |
| READ_SC_VERSION | 0x1720 | STAT_SC_VERSION_WERT | - | - | - | - | long | - | - | - | - | - | 22 | - | - |
| READ_CPS | 0x37fe | STAT_CPS_WERT | CPS | - | - | - | data[7] | - | - | - | - | - | 22 | - | - |
| CLEAR_DYNAMIC_OFFSET | 0xF00D | - | Clear dynamic offset | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_EIGENDIAGNOSE_BIS_10_09_501 | 0xF00E | - | - | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00E | RES_0xF00E |
| RESET_OVERFRICTION_COUNTER | 0xF00F | - | Reset the ovefriction counter | - | - | - | - | - | - | - | - | - | 31 | - | - |
| READ_SUPPLIER_NUMBER | 0xF18A | STAT_SUPPLIER_NUMBER_WERT | Supplier Number | - | - | high | data[3] | - | - | - | - | - | 22 | - | - |
| READ_ECU_MANUFACTURING_DATA | 0xF18B | STAT_ECU_MANUFACTURING_DATA_WERT | ECU manufacturing data | - | - | - | data[3] | - | - | - | - | - | 22 | - | - |
| READ_VIN | 0xF190 | STAT_VIN_WERT | VIN number | - | - | - | data[17] | - | - | - | - | - | 22 | - | - |
| READ_BATTERY_VOLTAGE | 0xFD02 | STAT_BATTERY_VOLTAGE_WERT | Battery Voltage | Volt | - | h | int | - | 1 | 128 | 0 | - | 22 | - | - |
| READ_ESTIMATED_RESISTANCE | 0xFD03 | STAT_ESTIMATED_RESISTANCE_WERT | Estimated resistance | Ohm | - | high | signed int | - | 1 | 1024 | 0 | - | 22 | - | - |
| READ_INDEX_EDGES | 0xFD05 | - | Index edges | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD05 |
| READ_MODUL_TEMPERATURE | 0xFD07 | STAT_MODUL_TEMPERATURE_WERT | Modul temperature | °C | - | high | int | - | 1 | 128 | 0 | - | 22 | - | - |
| READ_ESTIMATED_MOTOR_TEMPERATURE | 0xFD08 | STAT_ESTIMATED_MOTOR_TEMPERATURE_WERT | Estimated motor temperature | °C | - | high | int | - | 1 | 128 | 0 | - | 22 | - | - |
| READ_BOARD_TEMPERATURE | 0xFD09 | STAT_BOARD_TEMPERATURE_WERT | Board temperature | °C | - | high | int | - | 1 | 128 | 0 | - | 22 | - | - |
| READ_GEAR_TEMPERATURE | 0xFD0A | STAT_GEAR_TEMPERATURE_WERT | Gear temperature | °C | - | h | int | - | 1 | 128 | 0 | - | 22 | - | - |
| READ_REQUIRED_MOTOR_TORQUE | 0xFD0C | STAT_REQUIRED_MOTOR_TORQUE_WERT | Required motor torque | Nm | - | high | int | - | 1 | 128 | 0 | - | 22 | - | - |
| READ_REFERENCE_MOTOR_TORQUE | 0xFD0D | STAT_REFERENCE_MOTOR_TORQUE_WERT | Reference motor torque | Nm | - | high | int | - | 1 | 128 | 0 | - | 22 | - | - |
| READ_GEAR_TRANSMISSION_RATIO | 0xFD13 | STAT_GEAR_TRANSMISSION_RATIO_WERT | Gear transmission ratio | - | - | high | unsigned int | - | 1 | 128 | 0 | 0x30 | 22 | - | - |
| READ_ACTIVE_LIMITATIONS | 0xFD15 | - | - | - | - | - | - | - | - | - | - | 0x30 | 22 | - | RES_0xFD15 |
| READ_POWER_LIMITATION | 0xFD16 | STAT_POWER_LIMITATION_WERT | Received power limitation | W | - | high | int | - | 1 | 1 | 0 | 0x30 | 22 | - | - |
| READ_INT_SW_VERSION | 0xFD1E | STAT_INT_SW_VERSION_WERT | Internal SW version SWE1 | - | - | high | string | - | - | - | - | - | 22 | - | - |
| STATUS_BORDNETZWELLIGKEIT | 0xFD1F | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD1F |
| READ_CHIP_ID | 0xFD2B | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD2B |
| READ_ATIC_MANUFACTURING_ID | 0xFD2E | STAT_ATIC_MANUFACTURING_ID_WERT | ATIC manufacturing ID | HEX | - | high | unsigned long | - | - | - | - | - | 22 | - | - |
| _READ_RACT_BUFFER | 0xFD37 | - | Read Ract buffer (part of the offline garage diagnostic) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD37 |
| _READ_IRACT_BUFFER | 0xFD38 | - | Read Iract buffer (part of the offline garage diagnostic) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD38 |
| _READ_ALL_PASSED_FAILURE_BUFFER | 0xFD39 | STAT_ALL_PASSED_FAILURE_BUFFER_WERT | Items of the All_Passed failure buffer | - | - | - | data[16] | - | - | - | - | - | 22 | - | - |
| READ_RECALIB_RACK_MID_OFFSET | 0xFD3B | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD3B |

### TAB_EPS_SET

| WERT | TEXT |
| --- | --- |
| 0 | BMW plant calibration of steering wheel offset |
| 1 | TKPS calibration of steering wheel offset |

### RES_0XFD15

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACTIVE_LIMITATIONS_WERT | - | high | int | - | - | 1 | 1 | 0 |  Result = 1 : DEGRADE_LOW_BATT_VOLT; Result = 2 : DEGRADE_BATT_CURR_REGUL; Result = 3 : DEGRADE_BATT_POWER_LIMIT; Result = 4 : DEGRADE_SPEED_LIMIT; Result = 5 : DEGRADE_MOD_TEMP_LIM; Result = 6 : DEGRADE_BRD_TEMP_LIM; Result = 7 : DEGRADE_MOT_TEMP_LIM  |
| STAT_LIMITATION_VALUE_WERT | Nm | high | int | - | - | 1 | 128 | 0 | Limit value |

### RES_0XFD05

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INDEX_1_EDGE_WERT | mm | high | int | - | - | 0,0030517578125 | 1 | 0 | STAT_INDEX_1_EDGE_WERT |
| STAT_INDEX_2_EDGE_WERT | mm | high | int | - | - | 0,0030517578125 | 1 | 0 | STAT_INDEX_2_EDGE_WERT |
| STAT_INDEX_3_EDGE_WERT | mm | high | int | - | - | 0,0030517578125 | 1 | 0 | STAT_INDEX_3_EDGE_WERT |
| STAT_INDEX_4_EDGE_WERT | mm | high | int | - | - | 0,0030517578125 | 1 | 0 | STAT_INDEX_4_EDGE_WERT |
| STAT_INDEX_5_EDGE_WERT | mm | high | int | - | - | 0,0030517578125 | 1 | 0 | STAT_INDEX_5_EDGE_WERT |
| STAT_INDEX_6_EDGE_WERT | mm | high | int | - | - | 0,0030517578125 | 1 | 0 | STAT_INDEX_6_EDGE_WERT |
| STAT_INDEX_7_EDGE_WERT | mm | high | int | - | - | 0,0030517578125 | 1 | 0 | STAT_INDEX_7_EDGE_WERT |
| STAT_INDEX_8_EDGE_WERT | mm | high | int | - | - | 0,0030517578125 | 1 | 0 | STAT_INDEX_8_EDGE_WERT |
| STAT_INDEX_9_EDGE_WERT | mm | high | int | - | - | 0,0030517578125 | 1 | 0 | STAT_INDEX_9_EDGE_WERT |
| STAT_INDEX_10_EDGE_WERT | mm | high | int | - | - | 0,0030517578125 | 1 | 0 | STAT_INDEX_10_EDGE_WERT |
| STAT_INDEX_11_EDGE_WERT | mm | high | int | - | - | 0,0030517578125 | 1 | 0 | STAT_INDEX_11_EDGE_WERT |
| STAT_INDEX_12_EDGE_WERT | mm | high | int | - | - | 0,0030517578125 | 1 | 0 | STAT_INDEX_12_EDGE_WERT |

### RES_0XFD1F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FSSP_HYST_COUNT_1_WERT | - | high | unsigned long | - | - | - | - | - | FSSP Hystogram Counter 1 |
| STAT_FSSP_HYST_COUNT_2_WERT | - | high | unsigned long | - | - | - | - | - | FSSP Hystogram Counter 2 |
| STAT_FSSP_HYST_COUNT_3_WERT | - | high | unsigned long | - | - | - | - | - | FSSP Hystogram Counter 3 |
| STAT_FSSP_HYST_COUNT_4_WERT | - | high | unsigned long | - | - | - | - | - | FSSP Hystogram Counter 4 |

### RES_0XFD2B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHIDA_WERT | HEX | high | unsigned char | - | - | - | - | - |  CHIDA number |
| STAT_CHIDB_WERT | HEX | high | unsigned char | - | - | - | - | - |  CHIDB number |
| STAT_CHIDC_WERT | HEX | high | unsigned char | - | - | - | - | - |  CHIDC number |

### RES_0XF00E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_TYP_EIGENDIAGNOSE | - | - | + | 0-n | high | unsigned char | - | TAB_EPS_TYP_EIGENDIAGNOSE | - | - | - | Art der Eigendiagnose |
| STAT_EPS_DETAIL_EIGENDIAGNOSE | - | - | + | 0-n | high | unsigned char | - | TAB_EPS_DETAIL_EIGENDIAGNOSE | - | - | - | Ergebnis der Routine |
| STAT_OFFSET_ZAHNSTANGENMITTE_NEU_WERT | - | - | + | rad (Radian) | high | int | - | - | - | 256 | - | Nur bei STAT_EPS_TYP_EIGENDIAGNOSE_WERT = 4: Neuer Abstand der mittleren Index Flanke zur Zahnstangenmitte |
| STAT_OFFSET_ZAHNSTANGENMITTE_ALT_WERT | - | - | + | rad (Radian) | high | int | - | - | - | 256 | - | Nur bei STAT_EPS_TYP_EIGENDIAGNOSE_WERT = 4: Alter Abstand der mittleren Index Flanke zur Zahnstangenmitte |
| STAT_ZAHNSTANGENLAENGE_WERT | - | - | + | mm | high | unsigned int | - | - | - | 256 | - | Nur bei STAT_EPS_TYP_EIGENDIAGNOSE_WERT = 4: ermittelte Länge der Zahnstange |
| STAT_MOTORMOMENT_ANSCHLAG_LINKS_WERT | - | - | + | Nm | high | int | - | - | - | 256 | - | Nur bei STAT_EPS_TYP_EIGENDIAGNOSE_WERT = 4: gestelltes Motormoment im linken Anschlag |
| STAT_MOTORMOMENT_ANSCHLAG_RECHTS_WERT | - | - | + | Nm | high | int | - | - | - | 256 | - | Nur bei STAT_EPS_TYP_EIGENDIAGNOSE_WERT = 4: gestelltes Motormoment im rechten Anschlag |
| STAT_STUFFING | - | - | + | - | high | data[6] | - | - | - | - | - | DUMMY fuer Result Laenge noetig |

### ARG_0XF00E

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EPS_TYP_EIGENDIAGNOSE | + | - | - | - | unsigned char | - | TAB_EPS_TYP_EIGENDIAGNOSE | - | - | - | 1 | 4 | Type of the offline garage diagnostic |

### RESPONSE_OFFLINE_GARAGE_DIAG

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Finished, failure not found |
| 0x03 | Finished, failure found but corrected |
| 0x04 | Finished, failure found and not corrected |
| 0x0A | kein garage mode |
| 0x0B | Geschwindigkeit Fahrzeug zu hoch |
| 0x0C | Hands on detection |
| 0x0D | allgemeine Abschaltung |
| 0x0E | Index sensor error |
| 0x0F | Error during calibration |
| 0x10 | Steering wheel not in the middle position |
| 0x11 | Too high friction or car not elevated |
| 0x12 | Rack length is not correct |
| 0x13 | Disturbance during rack movement |
| 0x14 | Any degradation occurred |
| 0x15 | Belt split or slip happened |
| 0x16 | Error during EEPROM write access |
| 0x17 | Index sensor error |
| 0x20 | Increased friction |
| 0x21 | High friction |
| 0x80 | Finished successfully |
| 0xFF | Ungültig |

### RES_0XFD37

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RACT_BUFFER_WERT | - | - | data[16] | - | - | - | - | - | Items of the Ract buffer |
| STAT_RACT_BUFFER_COUNTER_WERT | - | - | unsigned char | - | - | - | - | - | Counter of the Ract buffer |

### RES_0XFD38

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IRACT_BUFFER_WERT | - | - | data[16] | - | - | - | - | - | Items of the Iract buffer |
| STAT_IRACT_BUFFER_COUNTER_WERT | - | - | unsigned char | - | - | - | - | - | Counter of the Iract buffer |

### RES_0XFD3B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RACK_MID_OFFSET_WERT | rad | high | int | - | - | 1 | 256 | 0 | Rack mid offset |
| STAT_KM_STATE_WERT | - | - | data[3] | - | - | - | - | - | KM state at the recalibration |

### RES_0XDB56

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORLAGEWINKEL_SENSOR1_WERT | ° | - | int | - | - | 1.0 | 128.0 | 0.0 | Motorlagewinkel Sensor 1 |
| STAT_MOTORLAGEWINKEL_SENSOR2_WERT | ° | - | int | - | - | 1.0 | 128.0 | 0.0 | Motorlagewinkel Sensor 2 |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | char | - | TAB_EPS_MOMENTENSENSOR | - | - | - | Zustand Motorlagewinkelsensor |

### RES_0XDB57

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RITZELWINKEL_WERT | ° | - | long | - | - | 1.0 | 100.0 | 0.0 | Ritzelwinkel |
| STAT_RITZELWINKELGESCHWINDIGKEIT_WERT | °/s | - | int | - | - | 1.0 | 1.0 | 0.0 | Ritzelwinkel Winkelgeschwindigkeit |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | char | - | TAB_EPS_WERT | - | - | - | Zustand Sensor Ritzelwinkelsensor |

### TAB_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | Initialisierung in Ordnung |
| 0xFF | Initialisierung nicht in Ordnung |

### RES_0XDB59

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENDANSCHLAG_LINKS_WERT | ° | - | long | - | - | 1.0 | 100.0 | 0.0 | Endanschlag bezogen offsetbehafteten Mitte (Lenkradmittenstellung) |
| STAT_ENDANSCHLAG_RECHTS_WERT | ° | - | long | - | - | 1.0 | 100.0 | 0.0 | Endanschlag bezogen offsetbehafteten Mitte (Lenkradmittenstellung) |
| STAT_ENDANSCHLAEGE_GELERNT_NR | 0-n | - | unsigned char | - | TAB_EPS_ENDANSCHLAEGE_GELERNT | - | - | - | Status Endanschlaege und Offset |

### RES_0XDB5A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LW_OFFSET_WERT | ° | - | int | - | - | 1.0 | 100.0 | 0.0 | Offset Lenkwinkel |

### ARG_0XDB5A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | ° | - | int | - | - | 100.0 | 1.0 | 0.0 | -15.0 | 15.0 | Offset Lenkwinkel |

### RES_0XDB6E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUB_ZAHNSTANGE_WERT | mm | - | int | - | - | 1.0 | 10.0 | 0.0 | Zahnstangenhub |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | char | - | TAB_EPS_WERT | - | - | - | Zustand Sensor |
| STAT_GESCHWINDIGKEIT_ZAHNSTANGE_WERT | m/s | - | int | - | - | 1.0 | 10000.0 | 0.0 | Zahnstangengeschwindigkeit |
| STAT_HUB_ZAHNSTANGE_GESAMT_WERT | mm | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Gesamtzahnstangenhub |

### RES_0XDB8B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORSTROM_1_WERT | A | - | int | - | - | 1.0 | 128.0 | 0.0 | Strom Phase 1 EPS Motor |
| STAT_MOTORSTROM_2_WERT | A | - | int | - | - | 1.0 | 128.0 | 0.0 | Strom Phase 2 EPS Motor |
| STAT_MOTORSTROM_3_WERT | A | - | int | - | - | 1.0 | 128.0 | 0.0 | Strom Phase 3 EPS Motor |

### RES_0XDB99

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOMENT_WERT | Nm | - | int | - | - | 1.0 | 128.0 | 0.0 | Aktuelles Moment |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | char | - | TAB_EPS_MOMENTENSENSOR | - | - | - | Zustand Sensor Lenkmoment |

### TAB_EPS_MOMENTENSENSOR

| WERT | TEXT |
| --- | --- |
| 0 | OK |
| 1 | NOK |

### RES_0XDBC4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUB_ENDANSCHLAG_LINKS_WERT | mm | - | int | - | - | 1.0 | 10.0 | 0.0 | Endanschlag bezogen offsetbehafteten Mitte (Lenkradmittenstellung) |
| STAT_HUB_ENDANSCHLAG_RECHTS_WERT | mm | - | int | - | - | 1.0 | 10.0 | 0.0 | Endanschlag bezogen offsetbehafteten Mitte (Lenkradmittenstellung) |
| STAT_ENDANSCHLAEGE_GELERNT_NR | 0-n | - | unsigned char | - | TAB_EPS_ENDANSCHLAEGE_GELERNT | - | - | - | Status Endanschlaege und Offset (0 - nicht gelernt; 1 - gelernt) |

### TAB_EPS_ENDANSCHLAEGE_GELERNT

| WERT | TEXT |
| --- | --- |
| 0 | nicht gelernt |
| 1 | gelernt |
| 2 | gelernt in Fahrt |
| 0xFF | ungültig |

### RES_0XAB20

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Routine Status |
| STAT_EPS_DETAIL_EIGENDIAGNOSE | - | - | + | 0-n | high | unsigned char | - | TAB_EPS_DETAIL_EIGENDIAGNOSE | - | - | - | Ergebnis der Routine |
| STAT_ZUSTAND_SPURSTANGE | - | - | + | 0-n | high | unsigned char | - | TAB_VERBAUT | - | - | - | Spurstangen eingehaengt ja oder nein |
| STAT_REIBUNG_DURCHSCHNITT_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf der gesamten Zahnstange |
| STAT_REIBUNG_SEGMENT_1_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 1. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_2_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 2. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_3_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 3. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_4_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 4. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_5_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 5. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_6_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 6. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_7_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 7. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_8_WERT | - | - | + | - | high | unsigned char | - | - | - | 128.0 | - | durchschnittliche Reibung auf dem 8. Segment der Zahnstange |

### ARG_0XAB20

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZUSTAND_SPURSTANGE | + | - | 0-n | high | unsigned char | - | TAB_VERBAUT | - | - | - | - | - | Spurstangen eingehaengt ja oder nein |

### TAB_VERBAUT

| WERT | TEXT |
| --- | --- |
| 0 | nicht verbaut |
| 1 | verbaut |

### RES_0XAB21

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Routine Status |
| STAT_EPS_DETAIL_EIGENDIAGNOSE | - | - | + | 0-n | high | unsigned char | - | TAB_EPS_DETAIL_EIGENDIAGNOSE | - | - | - | Ergebnis der Routine |
| STAT_MOMENTENSENSOR_OFFSET_WERT | - | - | + | Nm | high | int | - | - | - | 128.0 | - | gelernter Offset nach dem lernen des neuen Offset des Lenkmomentensensors |

### RES_0XAB22

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Routine Status |
| STAT_EPS_DETAIL_EIGENDIAGNOSE | - | - | + | 0-n | high | unsigned char | - | TAB_EPS_DETAIL_EIGENDIAGNOSE | - | - | - | Ergebnis der Routine |
| STAT_OFFSET_ZAHNSTANGENMITTE_NEU_WERT | - | - | + | rad | high | int | - | - | - | 256.0 | - | Neuer Abstand der mittleren Index Flanke zur Zahnstangenmitte |
| STAT_OFFSET_ZAHNSTANGENMITTE_ALT_WERT | - | - | + | rad | high | int | - | - | - | 256.0 | - | Alter Abstand der mittleren Index Flanke zur Zahnstangenmitte |
| STAT_ZAHNSTANGENLAENGE_WERT | - | - | + | mm | high | unsigned int | - | - | - | 256.0 | - | ermittelte Länge der Zahnstange |
| STAT_MOTORMOMENT_ANSCHLAG_LINKS_WERT | - | - | + | Nm | high | int | - | - | - | 256.0 | - | gestelltes Motormoment im linken Anschlag |
| STAT_MOTORMOMENT_ANSCHLAG_RECHTS_WERT | - | - | + | Nm | high | int | - | - | - | 256.0 | - | gestelltes Motormoment im rechten Anschlag |

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

### TAB_EPS_DETAIL_EIGENDIAGNOSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg - kein Problem erkannt |
| 0x03 | Erfolg - Problem behoben |
| 0x04 | Fehler - Problem nicht behoben, bitte Wiederholen |
| 0x0A | Routine in aktueller Session nicht ausführbar, GARAGE_MODE starten |
| 0x0B | Geschwindigkeit Fahrzeug zu hoch |
| 0x0C | Abbruch - Lenkradeingriff erfolgt |
| 0x0D | Abbruch - Sicherheitsabschaltung |
| 0x0E | Fehler - Indexsensor |
| 0x0F | Fehler - Kalibrierfehler |
| 0x10 | Abbruch - Lenkrad nicht in Mittenstellung |
| 0x11 | Abbruch - Vorderräder haben hohe Reibung |
| 0x13 | Abbruch - Vorderräder nicht frei beweglich |
| 0x14 | Fehler - Spannungsversorgung oder Temperatur |
| 0x15 | Fehler - Zahnriemen rutscht oder gerissen |
| 0x20 | Fehler - Reibung etwas erhöht |
| 0x21 | Fehler - Reibung stark erhöht |
| 0x80 | Erfolg |
| 0xFF | ungültig |

### RES_0XAB56

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_PENDELN_AKTIV_NR | - | - | + | 0-n | - | char | - | TAB_STATUS_ROUTINE_EPS | - | - | - | Ausführungsstatus |

### ARG_0XAB56

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQUENZ | + | - | Hz | - | unsigned char | - | - | 16.0 | 1.0 | 0.0 | 1.0 | 5.0 | Frequenz Pendelbewegung |
| MAX_AMPLITUDE | + | - | ° | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 15.0 | Maximale Amplitude Pendelbewegung |
| NUMBER_OF_CYCLES | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 50.0 | Anzahl Pendelbewegung |

### RES_0XAB6C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | - | - | - | Ausführungsstatus |
| STAT_LENKRADWINKEL_WERT | - | - | + | ° | - | int | - | - | 1.0 | 1.0 | 0.0 | Lenkradwinkel |
| STAT_SENSOR_ZUSTAND_NR | - | - | + | 0-n | - | char | - | TAB_EPS_WERT | - | - | - | Zustand Sensor Ritzelwinkelsensor |

### TAB_EPS_WERT

| WERT | TEXT |
| --- | --- |
| 0 | Index Position nicht gefunden |
| 1 | Index Position gefunden |
| 2 | Geradeauslauf-Offset geschrieben und Index Position nicht gefunden |
| 3 | Geradeauslauf-Offset geschrieben und Index Position gefunden und gespeichert |
| FF | ungültig |

### RES_0XAB71

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_VERFAHREN_AKTIV_NR | - | - | + | 0-n | - | char | - | TAB_STATUS_ROUTINE_EPS | - | - | - | Ausführungsstatus |

### ARG_0XAB71

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL | + | - | ° | - | int | - | - | 100.0 | 1.0 | 0.0 | -100.0 | 100.0 | Sollwinkel Lenkrad (relativ oder absolut) |
| WINKELGESCHWINDIGKEIT | + | - | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Winkelgeschwindigkeit Lenkrad |
| WINKELBESCHLEUNIGUNG | + | - | °/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 2000.0 | Winkelbeschleunigung Lenkrad |
| ABSOLUT_EIN | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Referenz Winkel (1 = absolutes Verfahren, 0 = relatives Verfahren) |

### RES_0XAB72

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | - | - | - | Ausführungsstatus |

### ARG_0XAB72

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL | + | - | ° | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 100.0 | Winkel Lenkrad (beidseitig) |
| WINKELGESCHWINDIGKEIT | + | - | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 100.0 | Winkelgeschwindigkeit Lenkrad |
| WINKELBESCHLEUNIGUNG | + | - | °/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 2000.0 | Winkelbeschleunigung Lenkrad |

### TAB_STATUS_ROUTINE_EPS

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Abbruch |
| 0x04 | Fehler |
| 0x05 | Phasenende |
| 0x0A | kein garage mode |
| 0x0B | Geschwindigkeit Fahrzeug zu hoch |
| 0x0C | Hands on detection |
| 0x0D | allgemeine Abschaltung |
| 0x0E | Index nicht gefunden |
| 0xFF | Ungültig |

### DM_TAB_ROE_ACTIVATED_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Aktive Fehlermeldung deaktiviert |
| 1 | Aktive Fehlermeldung aktiviert |
| 2 | Status der aktiven Fehlermeldung nicht feststellbar |
| 3 | Status der aktiven Fehlermeldung nicht feststellbar |
| 4 | Status der aktiven Fehlermeldung nicht feststellbar |
| 5 | Status der aktiven Fehlermeldung nicht feststellbar |
| 6 | Status der aktiven Fehlermeldung nicht feststellbar |
| 7 | Status der aktiven Fehlermeldung nicht feststellbar |
| 8 | Status der aktiven Fehlermeldung nicht feststellbar |
| 9 | Status der aktiven Fehlermeldung nicht feststellbar |
| 10 | Status der aktiven Fehlermeldung nicht feststellbar |
| 11 | Status der aktiven Fehlermeldung nicht feststellbar |
| 12 | Status der aktiven Fehlermeldung nicht feststellbar |
| 13 | Status der aktiven Fehlermeldung nicht feststellbar |
| 14 | Status der aktiven Fehlermeldung nicht feststellbar |
| 15 | Status der aktiven Fehlermeldung nicht feststellbar |
| 16 | Status der aktiven Fehlermeldung nicht feststellbar |
| 17 | Status der aktiven Fehlermeldung nicht feststellbar |
| 18 | Status der aktiven Fehlermeldung nicht feststellbar |
| 19 | Status der aktiven Fehlermeldung nicht feststellbar |
| 20 | Status der aktiven Fehlermeldung nicht feststellbar |
| 21 | Status der aktiven Fehlermeldung nicht feststellbar |
| 22 | Status der aktiven Fehlermeldung nicht feststellbar |
| 23 | Status der aktiven Fehlermeldung nicht feststellbar |
| 24 | Status der aktiven Fehlermeldung nicht feststellbar |
| 25 | Status der aktiven Fehlermeldung nicht feststellbar |
| 26 | Status der aktiven Fehlermeldung nicht feststellbar |
| 27 | Status der aktiven Fehlermeldung nicht feststellbar |
| 28 | Status der aktiven Fehlermeldung nicht feststellbar |
| 29 | Status der aktiven Fehlermeldung nicht feststellbar |
| 30 | Status der aktiven Fehlermeldung nicht feststellbar |
| 31 | Status der aktiven Fehlermeldung nicht feststellbar |
| 32 | Status der aktiven Fehlermeldung nicht feststellbar |
| 33 | Status der aktiven Fehlermeldung nicht feststellbar |
| 34 | Status der aktiven Fehlermeldung nicht feststellbar |
| 35 | Status der aktiven Fehlermeldung nicht feststellbar |
| 36 | Status der aktiven Fehlermeldung nicht feststellbar |
| 37 | Status der aktiven Fehlermeldung nicht feststellbar |
| 38 | Status der aktiven Fehlermeldung nicht feststellbar |
| 39 | Status der aktiven Fehlermeldung nicht feststellbar |
| 40 | Status der aktiven Fehlermeldung nicht feststellbar |
| 41 | Status der aktiven Fehlermeldung nicht feststellbar |
| 42 | Status der aktiven Fehlermeldung nicht feststellbar |
| 43 | Status der aktiven Fehlermeldung nicht feststellbar |
| 44 | Status der aktiven Fehlermeldung nicht feststellbar |
| 45 | Status der aktiven Fehlermeldung nicht feststellbar |
| 46 | Status der aktiven Fehlermeldung nicht feststellbar |
| 47 | Status der aktiven Fehlermeldung nicht feststellbar |
| 48 | Status der aktiven Fehlermeldung nicht feststellbar |
| 49 | Status der aktiven Fehlermeldung nicht feststellbar |
| 50 | Status der aktiven Fehlermeldung nicht feststellbar |
| 51 | Status der aktiven Fehlermeldung nicht feststellbar |
| 52 | Status der aktiven Fehlermeldung nicht feststellbar |
| 53 | Status der aktiven Fehlermeldung nicht feststellbar |
| 54 | Status der aktiven Fehlermeldung nicht feststellbar |
| 55 | Status der aktiven Fehlermeldung nicht feststellbar |
| 56 | Status der aktiven Fehlermeldung nicht feststellbar |
| 57 | Status der aktiven Fehlermeldung nicht feststellbar |
| 58 | Status der aktiven Fehlermeldung nicht feststellbar |
| 59 | Status der aktiven Fehlermeldung nicht feststellbar |
| 60 | Status der aktiven Fehlermeldung nicht feststellbar |
| 61 | Status der aktiven Fehlermeldung nicht feststellbar |
| 62 | Status der aktiven Fehlermeldung nicht feststellbar |
| 63 | Status der aktiven Fehlermeldung nicht feststellbar |
| 64 | Status der aktiven Fehlermeldung nicht feststellbar |
| 65 | Status der aktiven Fehlermeldung nicht feststellbar |
| 66 | Status der aktiven Fehlermeldung nicht feststellbar |
| 67 | Status der aktiven Fehlermeldung nicht feststellbar |
| 68 | Status der aktiven Fehlermeldung nicht feststellbar |
| 69 | Status der aktiven Fehlermeldung nicht feststellbar |
| 70 | Status der aktiven Fehlermeldung nicht feststellbar |
| 71 | Status der aktiven Fehlermeldung nicht feststellbar |
| 72 | Status der aktiven Fehlermeldung nicht feststellbar |
| 73 | Status der aktiven Fehlermeldung nicht feststellbar |
| 74 | Status der aktiven Fehlermeldung nicht feststellbar |
| 75 | Status der aktiven Fehlermeldung nicht feststellbar |
| 76 | Status der aktiven Fehlermeldung nicht feststellbar |
| 77 | Status der aktiven Fehlermeldung nicht feststellbar |
| 78 | Status der aktiven Fehlermeldung nicht feststellbar |
| 79 | Status der aktiven Fehlermeldung nicht feststellbar |
| 80 | Status der aktiven Fehlermeldung nicht feststellbar |
| 81 | Status der aktiven Fehlermeldung nicht feststellbar |
| 82 | Status der aktiven Fehlermeldung nicht feststellbar |
| 83 | Status der aktiven Fehlermeldung nicht feststellbar |
| 84 | Status der aktiven Fehlermeldung nicht feststellbar |
| 85 | Status der aktiven Fehlermeldung nicht feststellbar |
| 86 | Status der aktiven Fehlermeldung nicht feststellbar |
| 87 | Status der aktiven Fehlermeldung nicht feststellbar |
| 88 | Status der aktiven Fehlermeldung nicht feststellbar |
| 89 | Status der aktiven Fehlermeldung nicht feststellbar |
| 90 | Status der aktiven Fehlermeldung nicht feststellbar |
| 91 | Status der aktiven Fehlermeldung nicht feststellbar |
| 92 | Status der aktiven Fehlermeldung nicht feststellbar |
| 93 | Status der aktiven Fehlermeldung nicht feststellbar |
| 94 | Status der aktiven Fehlermeldung nicht feststellbar |
| 95 | Status der aktiven Fehlermeldung nicht feststellbar |
| 96 | Status der aktiven Fehlermeldung nicht feststellbar |
| 97 | Status der aktiven Fehlermeldung nicht feststellbar |
| 98 | Status der aktiven Fehlermeldung nicht feststellbar |
| 99 | Status der aktiven Fehlermeldung nicht feststellbar |
| 100 | Status der aktiven Fehlermeldung nicht feststellbar |
| 101 | Status der aktiven Fehlermeldung nicht feststellbar |
| 102 | Status der aktiven Fehlermeldung nicht feststellbar |
| 103 | Status der aktiven Fehlermeldung nicht feststellbar |
| 104 | Status der aktiven Fehlermeldung nicht feststellbar |
| 105 | Status der aktiven Fehlermeldung nicht feststellbar |
| 106 | Status der aktiven Fehlermeldung nicht feststellbar |
| 107 | Status der aktiven Fehlermeldung nicht feststellbar |
| 108 | Status der aktiven Fehlermeldung nicht feststellbar |
| 109 | Status der aktiven Fehlermeldung nicht feststellbar |
| 110 | Status der aktiven Fehlermeldung nicht feststellbar |
| 111 | Status der aktiven Fehlermeldung nicht feststellbar |
| 112 | Status der aktiven Fehlermeldung nicht feststellbar |
| 113 | Status der aktiven Fehlermeldung nicht feststellbar |
| 114 | Status der aktiven Fehlermeldung nicht feststellbar |
| 115 | Status der aktiven Fehlermeldung nicht feststellbar |
| 116 | Status der aktiven Fehlermeldung nicht feststellbar |
| 117 | Status der aktiven Fehlermeldung nicht feststellbar |
| 118 | Status der aktiven Fehlermeldung nicht feststellbar |
| 119 | Status der aktiven Fehlermeldung nicht feststellbar |
| 120 | Status der aktiven Fehlermeldung nicht feststellbar |
| 121 | Status der aktiven Fehlermeldung nicht feststellbar |
| 122 | Status der aktiven Fehlermeldung nicht feststellbar |
| 123 | Status der aktiven Fehlermeldung nicht feststellbar |
| 124 | Status der aktiven Fehlermeldung nicht feststellbar |
| 125 | Status der aktiven Fehlermeldung nicht feststellbar |
| 126 | Status der aktiven Fehlermeldung nicht feststellbar |
| 127 | Status der aktiven Fehlermeldung nicht feststellbar |
| 128 | Status der aktiven Fehlermeldung nicht feststellbar |
| 129 | Status der aktiven Fehlermeldung nicht feststellbar |
| 130 | Status der aktiven Fehlermeldung nicht feststellbar |
| 131 | Status der aktiven Fehlermeldung nicht feststellbar |
| 132 | Status der aktiven Fehlermeldung nicht feststellbar |
| 133 | Status der aktiven Fehlermeldung nicht feststellbar |
| 134 | Status der aktiven Fehlermeldung nicht feststellbar |
| 135 | Status der aktiven Fehlermeldung nicht feststellbar |
| 136 | Status der aktiven Fehlermeldung nicht feststellbar |
| 137 | Status der aktiven Fehlermeldung nicht feststellbar |
| 138 | Status der aktiven Fehlermeldung nicht feststellbar |
| 139 | Status der aktiven Fehlermeldung nicht feststellbar |
| 140 | Status der aktiven Fehlermeldung nicht feststellbar |
| 141 | Status der aktiven Fehlermeldung nicht feststellbar |
| 142 | Status der aktiven Fehlermeldung nicht feststellbar |
| 143 | Status der aktiven Fehlermeldung nicht feststellbar |
| 144 | Status der aktiven Fehlermeldung nicht feststellbar |
| 145 | Status der aktiven Fehlermeldung nicht feststellbar |
| 146 | Status der aktiven Fehlermeldung nicht feststellbar |
| 147 | Status der aktiven Fehlermeldung nicht feststellbar |
| 148 | Status der aktiven Fehlermeldung nicht feststellbar |
| 149 | Status der aktiven Fehlermeldung nicht feststellbar |
| 150 | Status der aktiven Fehlermeldung nicht feststellbar |
| 151 | Status der aktiven Fehlermeldung nicht feststellbar |
| 152 | Status der aktiven Fehlermeldung nicht feststellbar |
| 153 | Status der aktiven Fehlermeldung nicht feststellbar |
| 154 | Status der aktiven Fehlermeldung nicht feststellbar |
| 155 | Status der aktiven Fehlermeldung nicht feststellbar |
| 156 | Status der aktiven Fehlermeldung nicht feststellbar |
| 157 | Status der aktiven Fehlermeldung nicht feststellbar |
| 158 | Status der aktiven Fehlermeldung nicht feststellbar |
| 159 | Status der aktiven Fehlermeldung nicht feststellbar |
| 160 | Status der aktiven Fehlermeldung nicht feststellbar |
| 161 | Status der aktiven Fehlermeldung nicht feststellbar |
| 162 | Status der aktiven Fehlermeldung nicht feststellbar |
| 163 | Status der aktiven Fehlermeldung nicht feststellbar |
| 164 | Status der aktiven Fehlermeldung nicht feststellbar |
| 165 | Status der aktiven Fehlermeldung nicht feststellbar |
| 166 | Status der aktiven Fehlermeldung nicht feststellbar |
| 167 | Status der aktiven Fehlermeldung nicht feststellbar |
| 168 | Status der aktiven Fehlermeldung nicht feststellbar |
| 169 | Status der aktiven Fehlermeldung nicht feststellbar |
| 170 | Status der aktiven Fehlermeldung nicht feststellbar |
| 171 | Status der aktiven Fehlermeldung nicht feststellbar |
| 172 | Status der aktiven Fehlermeldung nicht feststellbar |
| 173 | Status der aktiven Fehlermeldung nicht feststellbar |
| 174 | Status der aktiven Fehlermeldung nicht feststellbar |
| 175 | Status der aktiven Fehlermeldung nicht feststellbar |
| 176 | Status der aktiven Fehlermeldung nicht feststellbar |
| 177 | Status der aktiven Fehlermeldung nicht feststellbar |
| 178 | Status der aktiven Fehlermeldung nicht feststellbar |
| 179 | Status der aktiven Fehlermeldung nicht feststellbar |
| 180 | Status der aktiven Fehlermeldung nicht feststellbar |
| 181 | Status der aktiven Fehlermeldung nicht feststellbar |
| 182 | Status der aktiven Fehlermeldung nicht feststellbar |
| 183 | Status der aktiven Fehlermeldung nicht feststellbar |
| 184 | Status der aktiven Fehlermeldung nicht feststellbar |
| 185 | Status der aktiven Fehlermeldung nicht feststellbar |
| 186 | Status der aktiven Fehlermeldung nicht feststellbar |
| 187 | Status der aktiven Fehlermeldung nicht feststellbar |
| 188 | Status der aktiven Fehlermeldung nicht feststellbar |
| 189 | Status der aktiven Fehlermeldung nicht feststellbar |
| 190 | Status der aktiven Fehlermeldung nicht feststellbar |
| 191 | Status der aktiven Fehlermeldung nicht feststellbar |
| 192 | Status der aktiven Fehlermeldung nicht feststellbar |
| 193 | Status der aktiven Fehlermeldung nicht feststellbar |
| 194 | Status der aktiven Fehlermeldung nicht feststellbar |
| 195 | Status der aktiven Fehlermeldung nicht feststellbar |
| 196 | Status der aktiven Fehlermeldung nicht feststellbar |
| 197 | Status der aktiven Fehlermeldung nicht feststellbar |
| 198 | Status der aktiven Fehlermeldung nicht feststellbar |
| 199 | Status der aktiven Fehlermeldung nicht feststellbar |
| 200 | Status der aktiven Fehlermeldung nicht feststellbar |
| 201 | Status der aktiven Fehlermeldung nicht feststellbar |
| 202 | Status der aktiven Fehlermeldung nicht feststellbar |
| 203 | Status der aktiven Fehlermeldung nicht feststellbar |
| 204 | Status der aktiven Fehlermeldung nicht feststellbar |
| 205 | Status der aktiven Fehlermeldung nicht feststellbar |
| 206 | Status der aktiven Fehlermeldung nicht feststellbar |
| 207 | Status der aktiven Fehlermeldung nicht feststellbar |
| 208 | Status der aktiven Fehlermeldung nicht feststellbar |
| 209 | Status der aktiven Fehlermeldung nicht feststellbar |
| 210 | Status der aktiven Fehlermeldung nicht feststellbar |
| 211 | Status der aktiven Fehlermeldung nicht feststellbar |
| 212 | Status der aktiven Fehlermeldung nicht feststellbar |
| 213 | Status der aktiven Fehlermeldung nicht feststellbar |
| 214 | Status der aktiven Fehlermeldung nicht feststellbar |
| 215 | Status der aktiven Fehlermeldung nicht feststellbar |
| 216 | Status der aktiven Fehlermeldung nicht feststellbar |
| 217 | Status der aktiven Fehlermeldung nicht feststellbar |
| 218 | Status der aktiven Fehlermeldung nicht feststellbar |
| 219 | Status der aktiven Fehlermeldung nicht feststellbar |
| 220 | Status der aktiven Fehlermeldung nicht feststellbar |
| 221 | Status der aktiven Fehlermeldung nicht feststellbar |
| 222 | Status der aktiven Fehlermeldung nicht feststellbar |
| 223 | Status der aktiven Fehlermeldung nicht feststellbar |
| 224 | Status der aktiven Fehlermeldung nicht feststellbar |
| 225 | Status der aktiven Fehlermeldung nicht feststellbar |
| 226 | Status der aktiven Fehlermeldung nicht feststellbar |
| 227 | Status der aktiven Fehlermeldung nicht feststellbar |
| 228 | Status der aktiven Fehlermeldung nicht feststellbar |
| 229 | Status der aktiven Fehlermeldung nicht feststellbar |
| 230 | Status der aktiven Fehlermeldung nicht feststellbar |
| 231 | Status der aktiven Fehlermeldung nicht feststellbar |
| 232 | Status der aktiven Fehlermeldung nicht feststellbar |
| 233 | Status der aktiven Fehlermeldung nicht feststellbar |
| 234 | Status der aktiven Fehlermeldung nicht feststellbar |
| 235 | Status der aktiven Fehlermeldung nicht feststellbar |
| 236 | Status der aktiven Fehlermeldung nicht feststellbar |
| 237 | Status der aktiven Fehlermeldung nicht feststellbar |
| 238 | Status der aktiven Fehlermeldung nicht feststellbar |
| 239 | Status der aktiven Fehlermeldung nicht feststellbar |
| 240 | Status der aktiven Fehlermeldung nicht feststellbar |
| 241 | Status der aktiven Fehlermeldung nicht feststellbar |
| 242 | Status der aktiven Fehlermeldung nicht feststellbar |
| 243 | Status der aktiven Fehlermeldung nicht feststellbar |
| 244 | Status der aktiven Fehlermeldung nicht feststellbar |
| 245 | Status der aktiven Fehlermeldung nicht feststellbar |
| 246 | Status der aktiven Fehlermeldung nicht feststellbar |
| 247 | Status der aktiven Fehlermeldung nicht feststellbar |
| 248 | Status der aktiven Fehlermeldung nicht feststellbar |
| 249 | Status der aktiven Fehlermeldung nicht feststellbar |
| 250 | Status der aktiven Fehlermeldung nicht feststellbar |
| 251 | Status der aktiven Fehlermeldung nicht feststellbar |
| 252 | Status der aktiven Fehlermeldung nicht feststellbar |
| 253 | Status der aktiven Fehlermeldung nicht feststellbar |
| 254 | Status der aktiven Fehlermeldung nicht feststellbar |
| 255 | Status der aktiven Fehlermeldung nicht feststellbar |

### RDTCI_04_LEV_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00 |
| 4 | reportDTCsnapshotRecordByDTCnumber |
| 20 | ISOSAEReserved_14_7F |
| 21 | ISOSAEReserved_14_7F |
| 22 | ISOSAEReserved_14_7F |
| 23 | ISOSAEReserved_14_7F |
| 24 | ISOSAEReserved_14_7F |
| 25 | ISOSAEReserved_14_7F |
| 26 | ISOSAEReserved_14_7F |
| 27 | ISOSAEReserved_14_7F |
| 28 | ISOSAEReserved_14_7F |
| 29 | ISOSAEReserved_14_7F |
| 30 | ISOSAEReserved_14_7F |
| 31 | ISOSAEReserved_14_7F |
| 32 | ISOSAEReserved_14_7F |
| 33 | ISOSAEReserved_14_7F |
| 34 | ISOSAEReserved_14_7F |
| 35 | ISOSAEReserved_14_7F |
| 36 | ISOSAEReserved_14_7F |
| 37 | ISOSAEReserved_14_7F |
| 38 | ISOSAEReserved_14_7F |
| 39 | ISOSAEReserved_14_7F |
| 40 | ISOSAEReserved_14_7F |
| 41 | ISOSAEReserved_14_7F |
| 42 | ISOSAEReserved_14_7F |
| 43 | ISOSAEReserved_14_7F |
| 44 | ISOSAEReserved_14_7F |
| 45 | ISOSAEReserved_14_7F |
| 46 | ISOSAEReserved_14_7F |
| 47 | ISOSAEReserved_14_7F |
| 48 | ISOSAEReserved_14_7F |
| 49 | ISOSAEReserved_14_7F |
| 50 | ISOSAEReserved_14_7F |
| 51 | ISOSAEReserved_14_7F |
| 52 | ISOSAEReserved_14_7F |
| 53 | ISOSAEReserved_14_7F |
| 54 | ISOSAEReserved_14_7F |
| 55 | ISOSAEReserved_14_7F |
| 56 | ISOSAEReserved_14_7F |
| 57 | ISOSAEReserved_14_7F |
| 58 | ISOSAEReserved_14_7F |
| 59 | ISOSAEReserved_14_7F |
| 60 | ISOSAEReserved_14_7F |
| 61 | ISOSAEReserved_14_7F |
| 62 | ISOSAEReserved_14_7F |
| 63 | ISOSAEReserved_14_7F |
| 64 | ISOSAEReserved_14_7F |
| 65 | ISOSAEReserved_14_7F |
| 66 | ISOSAEReserved_14_7F |
| 67 | ISOSAEReserved_14_7F |
| 68 | ISOSAEReserved_14_7F |
| 69 | ISOSAEReserved_14_7F |
| 70 | ISOSAEReserved_14_7F |
| 71 | ISOSAEReserved_14_7F |
| 72 | ISOSAEReserved_14_7F |
| 73 | ISOSAEReserved_14_7F |
| 74 | ISOSAEReserved_14_7F |
| 75 | ISOSAEReserved_14_7F |
| 76 | ISOSAEReserved_14_7F |
| 77 | ISOSAEReserved_14_7F |
| 78 | ISOSAEReserved_14_7F |
| 79 | ISOSAEReserved_14_7F |
| 80 | ISOSAEReserved_14_7F |
| 81 | ISOSAEReserved_14_7F |
| 82 | ISOSAEReserved_14_7F |
| 83 | ISOSAEReserved_14_7F |
| 84 | ISOSAEReserved_14_7F |
| 85 | ISOSAEReserved_14_7F |
| 86 | ISOSAEReserved_14_7F |
| 87 | ISOSAEReserved_14_7F |
| 88 | ISOSAEReserved_14_7F |
| 89 | ISOSAEReserved_14_7F |
| 90 | ISOSAEReserved_14_7F |
| 91 | ISOSAEReserved_14_7F |
| 92 | ISOSAEReserved_14_7F |
| 93 | ISOSAEReserved_14_7F |
| 94 | ISOSAEReserved_14_7F |
| 95 | ISOSAEReserved_14_7F |
| 96 | ISOSAEReserved_14_7F |
| 97 | ISOSAEReserved_14_7F |
| 98 | ISOSAEReserved_14_7F |
| 99 | ISOSAEReserved_14_7F |
| 100 | ISOSAEReserved_14_7F |
| 101 | ISOSAEReserved_14_7F |
| 102 | ISOSAEReserved_14_7F |
| 103 | ISOSAEReserved_14_7F |
| 104 | ISOSAEReserved_14_7F |
| 105 | ISOSAEReserved_14_7F |
| 106 | ISOSAEReserved_14_7F |
| 107 | ISOSAEReserved_14_7F |
| 108 | ISOSAEReserved_14_7F |
| 109 | ISOSAEReserved_14_7F |
| 110 | ISOSAEReserved_14_7F |
| 111 | ISOSAEReserved_14_7F |
| 112 | ISOSAEReserved_14_7F |
| 113 | ISOSAEReserved_14_7F |
| 114 | ISOSAEReserved_14_7F |
| 115 | ISOSAEReserved_14_7F |
| 116 | ISOSAEReserved_14_7F |
| 117 | ISOSAEReserved_14_7F |
| 118 | ISOSAEReserved_14_7F |
| 119 | ISOSAEReserved_14_7F |
| 120 | ISOSAEReserved_14_7F |
| 121 | ISOSAEReserved_14_7F |
| 122 | ISOSAEReserved_14_7F |
| 123 | ISOSAEReserved_14_7F |
| 124 | ISOSAEReserved_14_7F |
| 125 | ISOSAEReserved_14_7F |
| 126 | ISOSAEReserved_14_7F |
| 127 | ISOSAEReserved_14_7F |

### SWT_RC_SWS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | not available |
| 1 | loaded |
| 2 | accepted |
| 3 | rejected |

### ID_LIEF_TEXT_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Reinshagen => Delphi |
| 2 | Kostal |
| 3 | Hella |
| 4 | Siemens |
| 5 | Eaton |
| 6 | UTA |
| 7 | Helbako |
| 8 | Bosch |
| 9 | Loewe => Lear |
| 16 | VDO |
| 17 | Valeo |
| 18 | MBB |
| 19 | Kammerer |
| 20 | SWF |
| 21 | Blaupunkt |
| 22 | Philips |
| 23 | Alpine |
| 24 | Continental Teves |
| 25 | Elektromatik Suedafrika |
| 32 | Becker |
| 33 | Preh |
| 34 | Alps |
| 35 | Motorola |
| 36 | Temic |
| 37 | Webasto |
| 38 | MotoMeter |
| 39 | Delphi PHI |
| 40 | DODUCO => BERU |
| 41 | DENSO |
| 48 | NEC |
| 49 | DASA |
| 50 | Pioneer |
| 51 | Jatco |
| 52 | Fuba |
| 53 | UK-NSI |
| 54 | AABG |
| 55 | Dunlop |
| 56 | Sachs |
| 57 | ITT |
| 64 | FTE |
| 65 | Megamos |
| 66 | TRW |
| 67 | Wabco |
| 68 | ISAD Electronic Systems |
| 69 | HEC (Hella Electronics Corporation) |
| 70 | Gemel |
| 71 | ZF |
| 72 | GMPT |
| 73 | Harman Kardon |
| 80 | Remes |
| 81 | ZF Lenksysteme |
| 82 | Magneti Marelli |
| 83 | Borg Instruments |
| 84 | GETRAG |
| 85 | BHTC (Behr Hella Thermocontrol) |
| 86 | Siemens VDO Automotive |
| 87 | Visteon |
| 88 | Autoliv |
| 89 | Haberl |
| 96 | Magna Steyr |
| 97 | Marquardt |
| 98 | AB-Elektronik |
| 99 | Siemens VDO Borg |
| 100 | Hirschmann Electronics |
| 101 | Hoerbiger Electronics |
| 102 | Thyssen Krupp Automotive Mechatronics |
| 103 | Gentex GmbH |
| 104 | Atena GmbH |
| 105 | Magna-Donelly |
| 112 | Koyo Steering Europe |
| 113 | NSI B.V |
| 114 | AISIN AW CO.LTD |
| 115 | Shorlock |
| 116 | Schrader |
| 117 | BERU Electronics GmbH |
| 118 | CEL |
| 119 | Audio Mobil |
| 120 | rd electronic |
| 121 | iSYS RTS GmbH |
| 128 | Westfalia Automotive GmbH |
| 129 | Tyco Electronics |
| 130 | Paragon AG |
| 131 | IEE S.A |
| 132 | TEMIC AUTOMOTIVE of NA |
| 133 | AKsys GmbH |
| 134 | META System |
| 135 | Hülsbeck & Fürst GmbH & Co KG |
| 136 | Mann & Hummel Automotive GmbH |
| 137 | Brose Fahrzeugteile GmbH & Co |
| 144 | Keihin |
| 145 | Vimercati S.p.A. |
| 146 | CRH |
| 147 | TPO Display Corp. |
| 148 | KÜSTER Automotive Control |
| 149 | Hitachi Automotive |
| 150 | Continental Automotive |
| 151 | TI-Automotive |
| 152 | Hydro |
| 153 | Johnson Controls |
| 154 | Takata- Petri |
| 155 | Mitsubishi Electric B.V. (Melco) |
| 156 | Autokabel |
| 157 | GKN-Driveline |
| 158 | Zollner Elektronik AG |
| 159 | PEIKER acustics GmbH |
| 160 | Bosal-Oris |
| 161 | Cobasys |
| 162 | Lighting Reutlingen GmbH |
| 163 | CONTI VDO |
| 164 | ADC Automotive Distance Control Systems GmbH |
| 165 | Funkwerk Dabendorf GmbH |
| 166 | Lame |
| 167 | Magna/Closures |
| 168 | Wanyu |
| 16777215 | unbekannter Hersteller |

### SWT_RC_RCO_DOP

| WERT | TEXT |
| --- | --- |
| 1 | SWID_FUNKTIONAL_LESEN |
| 3 | SOFTWARE_SIGNATURE_LESEN |
| 4 | STATUS_LESEN |
| 5 | ZERTIFIKAT_PRUEFEN |
| 6 | ZERTIFIKAT_LESEN |
| 7 | FREISCHALTCODE_SCHREIBEN |
| 8 | ZERTIFIKAT_SCHREIBEN |
| 9 | FREISCHALTCODE_PRUEFEN |
| 10 | FREISCHALTCODE_STORNIEREN |
| 11 | FREISCHALTCODE_LESEN |
| 12 | PERIODISCHE_PRUEFUNG |
| 13 | SG_DATEN_LESEN |

### WDBI_FP13_PDT_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved_00 |
| 1 | programmingSystemL6 |
| 2 | reserved_02_2F |
| 3 | reserved_02_2F |
| 4 | reserved_02_2F |
| 5 | reserved_02_2F |
| 6 | reserved_02_2F |
| 7 | reserved_02_2F |
| 8 | reserved_02_2F |
| 9 | reserved_02_2F |
| 10 | reserved_02_2F |
| 11 | reserved_02_2F |
| 12 | reserved_02_2F |
| 13 | reserved_02_2F |
| 14 | reserved_02_2F |
| 15 | reserved_02_2F |
| 16 | reserved_02_2F |
| 17 | reserved_02_2F |
| 18 | reserved_02_2F |
| 19 | reserved_02_2F |
| 20 | reserved_02_2F |
| 21 | reserved_02_2F |
| 22 | reserved_02_2F |
| 23 | reserved_02_2F |
| 24 | reserved_02_2F |
| 25 | reserved_02_2F |
| 26 | reserved_02_2F |
| 27 | reserved_02_2F |
| 28 | reserved_02_2F |
| 29 | reserved_02_2F |
| 30 | reserved_02_2F |
| 31 | reserved_02_2F |
| 32 | reserved_02_2F |
| 33 | reserved_02_2F |
| 34 | reserved_02_2F |
| 35 | reserved_02_2F |
| 36 | reserved_02_2F |
| 37 | reserved_02_2F |
| 38 | reserved_02_2F |
| 39 | reserved_02_2F |
| 40 | reserved_02_2F |
| 41 | reserved_02_2F |
| 42 | reserved_02_2F |
| 43 | reserved_02_2F |
| 44 | reserved_02_2F |
| 45 | reserved_02_2F |
| 46 | reserved_02_2F |
| 47 | reserved_02_2F |
| 48 | programmingSystemL4_30_3F |
| 49 | programmingSystemL4_30_3F |
| 50 | programmingSystemL4_30_3F |
| 51 | programmingSystemL4_30_3F |
| 52 | programmingSystemL4_30_3F |
| 53 | programmingSystemL4_30_3F |
| 54 | programmingSystemL4_30_3F |
| 55 | programmingSystemL4_30_3F |
| 56 | programmingSystemL4_30_3F |
| 57 | programmingSystemL4_30_3F |
| 58 | programmingSystemL4_30_3F |
| 59 | programmingSystemL4_30_3F |
| 60 | programmingSystemL4_30_3F |
| 61 | programmingSystemL4_30_3F |
| 62 | programmingSystemL4_30_3F |
| 63 | programmingSystemL4_30_3F |
| 64 | reserved_40_FF |
| 65 | reserved_40_FF |
| 66 | reserved_40_FF |
| 67 | reserved_40_FF |
| 68 | reserved_40_FF |
| 69 | reserved_40_FF |
| 70 | reserved_40_FF |
| 71 | reserved_40_FF |
| 72 | reserved_40_FF |
| 73 | reserved_40_FF |
| 74 | reserved_40_FF |
| 75 | reserved_40_FF |
| 76 | reserved_40_FF |
| 77 | reserved_40_FF |
| 78 | reserved_40_FF |
| 79 | reserved_40_FF |
| 80 | reserved_40_FF |
| 81 | reserved_40_FF |
| 82 | reserved_40_FF |
| 83 | reserved_40_FF |
| 84 | reserved_40_FF |
| 85 | reserved_40_FF |
| 86 | reserved_40_FF |
| 87 | reserved_40_FF |
| 88 | reserved_40_FF |
| 89 | reserved_40_FF |
| 90 | reserved_40_FF |
| 91 | reserved_40_FF |
| 92 | reserved_40_FF |
| 93 | reserved_40_FF |
| 94 | reserved_40_FF |
| 95 | reserved_40_FF |
| 96 | reserved_40_FF |
| 97 | reserved_40_FF |
| 98 | reserved_40_FF |
| 99 | reserved_40_FF |
| 100 | reserved_40_FF |
| 101 | reserved_40_FF |
| 102 | reserved_40_FF |
| 103 | reserved_40_FF |
| 104 | reserved_40_FF |
| 105 | reserved_40_FF |
| 106 | reserved_40_FF |
| 107 | reserved_40_FF |
| 108 | reserved_40_FF |
| 109 | reserved_40_FF |
| 110 | reserved_40_FF |
| 111 | reserved_40_FF |
| 112 | reserved_40_FF |
| 113 | reserved_40_FF |
| 114 | reserved_40_FF |
| 115 | reserved_40_FF |
| 116 | reserved_40_FF |
| 117 | reserved_40_FF |
| 118 | reserved_40_FF |
| 119 | reserved_40_FF |
| 120 | reserved_40_FF |
| 121 | reserved_40_FF |
| 122 | reserved_40_FF |
| 123 | reserved_40_FF |
| 124 | reserved_40_FF |
| 125 | reserved_40_FF |
| 126 | reserved_40_FF |
| 127 | reserved_40_FF |
| 128 | reserved_40_FF |
| 129 | reserved_40_FF |
| 130 | reserved_40_FF |
| 131 | reserved_40_FF |
| 132 | reserved_40_FF |
| 133 | reserved_40_FF |
| 134 | reserved_40_FF |
| 135 | reserved_40_FF |
| 136 | reserved_40_FF |
| 137 | reserved_40_FF |
| 138 | reserved_40_FF |
| 139 | reserved_40_FF |
| 140 | reserved_40_FF |
| 141 | reserved_40_FF |
| 142 | reserved_40_FF |
| 143 | reserved_40_FF |
| 144 | reserved_40_FF |
| 145 | reserved_40_FF |
| 146 | reserved_40_FF |
| 147 | reserved_40_FF |
| 148 | reserved_40_FF |
| 149 | reserved_40_FF |
| 150 | reserved_40_FF |
| 151 | reserved_40_FF |
| 152 | reserved_40_FF |
| 153 | reserved_40_FF |
| 154 | reserved_40_FF |
| 155 | reserved_40_FF |
| 156 | reserved_40_FF |
| 157 | reserved_40_FF |
| 158 | reserved_40_FF |
| 159 | reserved_40_FF |
| 160 | reserved_40_FF |
| 161 | reserved_40_FF |
| 162 | reserved_40_FF |
| 163 | reserved_40_FF |
| 164 | reserved_40_FF |
| 165 | reserved_40_FF |
| 166 | reserved_40_FF |
| 167 | reserved_40_FF |
| 168 | reserved_40_FF |
| 169 | reserved_40_FF |
| 170 | reserved_40_FF |
| 171 | reserved_40_FF |
| 172 | reserved_40_FF |
| 173 | reserved_40_FF |
| 174 | reserved_40_FF |
| 175 | reserved_40_FF |
| 176 | reserved_40_FF |
| 177 | reserved_40_FF |
| 178 | reserved_40_FF |
| 179 | reserved_40_FF |
| 180 | reserved_40_FF |
| 181 | reserved_40_FF |
| 182 | reserved_40_FF |
| 183 | reserved_40_FF |
| 184 | reserved_40_FF |
| 185 | reserved_40_FF |
| 186 | reserved_40_FF |
| 187 | reserved_40_FF |
| 188 | reserved_40_FF |
| 189 | reserved_40_FF |
| 190 | reserved_40_FF |
| 191 | reserved_40_FF |
| 192 | reserved_40_FF |
| 193 | reserved_40_FF |
| 194 | reserved_40_FF |
| 195 | reserved_40_FF |
| 196 | reserved_40_FF |
| 197 | reserved_40_FF |
| 198 | reserved_40_FF |
| 199 | reserved_40_FF |
| 200 | reserved_40_FF |
| 201 | reserved_40_FF |
| 202 | reserved_40_FF |
| 203 | reserved_40_FF |
| 204 | reserved_40_FF |
| 205 | reserved_40_FF |
| 206 | reserved_40_FF |
| 207 | reserved_40_FF |
| 208 | reserved_40_FF |
| 209 | reserved_40_FF |
| 210 | reserved_40_FF |
| 211 | reserved_40_FF |
| 212 | reserved_40_FF |
| 213 | reserved_40_FF |
| 214 | reserved_40_FF |
| 215 | reserved_40_FF |
| 216 | reserved_40_FF |
| 217 | reserved_40_FF |
| 218 | reserved_40_FF |
| 219 | reserved_40_FF |
| 220 | reserved_40_FF |
| 221 | reserved_40_FF |
| 222 | reserved_40_FF |
| 223 | reserved_40_FF |
| 224 | reserved_40_FF |
| 225 | reserved_40_FF |
| 226 | reserved_40_FF |
| 227 | reserved_40_FF |
| 228 | reserved_40_FF |
| 229 | reserved_40_FF |
| 230 | reserved_40_FF |
| 231 | reserved_40_FF |
| 232 | reserved_40_FF |
| 233 | reserved_40_FF |
| 234 | reserved_40_FF |
| 235 | reserved_40_FF |
| 236 | reserved_40_FF |
| 237 | reserved_40_FF |
| 238 | reserved_40_FF |
| 239 | reserved_40_FF |
| 240 | reserved_40_FF |
| 241 | reserved_40_FF |
| 242 | reserved_40_FF |
| 243 | reserved_40_FF |
| 244 | reserved_40_FF |
| 245 | reserved_40_FF |
| 246 | reserved_40_FF |
| 247 | reserved_40_FF |
| 248 | reserved_40_FF |
| 249 | reserved_40_FF |
| 250 | reserved_40_FF |
| 251 | reserved_40_FF |
| 252 | reserved_40_FF |
| 253 | reserved_40_FF |
| 254 | reserved_40_FF |
| 255 | reserved_40_FF |

### PROG_DEP_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | correctResult |
| 2 | incorrectResult |
| 3 | incorrectResult error SWE - HWE |
| 4 | incorrectResult error SWE - SWE |
| 5 | reserved |
| 6 | reserved |
| 7 | reserved |
| 8 | reserved |
| 9 | reserved |
| 10 | reserved |
| 11 | reserved |
| 12 | reserved |
| 13 | reserved |
| 14 | reserved |
| 15 | reserved |
| 16 | reserved |
| 17 | reserved |
| 18 | reserved |
| 19 | reserved |
| 20 | reserved |
| 21 | reserved |
| 22 | reserved |
| 23 | reserved |
| 24 | reserved |
| 25 | reserved |
| 26 | reserved |
| 27 | reserved |
| 28 | reserved |
| 29 | reserved |
| 30 | reserved |
| 31 | reserved |
| 32 | reserved |
| 33 | reserved |
| 34 | reserved |
| 35 | reserved |
| 36 | reserved |
| 37 | reserved |
| 38 | reserved |
| 39 | reserved |
| 40 | reserved |
| 41 | reserved |
| 42 | reserved |
| 43 | reserved |
| 44 | reserved |
| 45 | reserved |
| 46 | reserved |
| 47 | reserved |
| 48 | reserved |
| 49 | reserved |
| 50 | reserved |
| 51 | reserved |
| 52 | reserved |
| 53 | reserved |
| 54 | reserved |
| 55 | reserved |
| 56 | reserved |
| 57 | reserved |
| 58 | reserved |
| 59 | reserved |
| 60 | reserved |
| 61 | reserved |
| 62 | reserved |
| 63 | reserved |
| 64 | reserved |
| 65 | reserved |
| 66 | reserved |
| 67 | reserved |
| 68 | reserved |
| 69 | reserved |
| 70 | reserved |
| 71 | reserved |
| 72 | reserved |
| 73 | reserved |
| 74 | reserved |
| 75 | reserved |
| 76 | reserved |
| 77 | reserved |
| 78 | reserved |
| 79 | reserved |
| 80 | reserved |
| 81 | reserved |
| 82 | reserved |
| 83 | reserved |
| 84 | reserved |
| 85 | reserved |
| 86 | reserved |
| 87 | reserved |
| 88 | reserved |
| 89 | reserved |
| 90 | reserved |
| 91 | reserved |
| 92 | reserved |
| 93 | reserved |
| 94 | reserved |
| 95 | reserved |
| 96 | reserved |
| 97 | reserved |
| 98 | reserved |
| 99 | reserved |
| 100 | reserved |
| 101 | reserved |
| 102 | reserved |
| 103 | reserved |
| 104 | reserved |
| 105 | reserved |
| 106 | reserved |
| 107 | reserved |
| 108 | reserved |
| 109 | reserved |
| 110 | reserved |
| 111 | reserved |
| 112 | reserved |
| 113 | reserved |
| 114 | reserved |
| 115 | reserved |
| 116 | reserved |
| 117 | reserved |
| 118 | reserved |
| 119 | reserved |
| 120 | reserved |
| 121 | reserved |
| 122 | reserved |
| 123 | reserved |
| 124 | reserved |
| 125 | reserved |
| 126 | reserved |
| 127 | reserved |
| 128 | Debug-Information (system supplier specific) |
| 129 | Debug-Information (system supplier specific) |
| 130 | Debug-Information (system supplier specific) |
| 131 | Debug-Information (system supplier specific) |
| 132 | Debug-Information (system supplier specific) |
| 133 | Debug-Information (system supplier specific) |
| 134 | Debug-Information (system supplier specific) |
| 135 | Debug-Information (system supplier specific) |
| 136 | Debug-Information (system supplier specific) |
| 137 | Debug-Information (system supplier specific) |
| 138 | Debug-Information (system supplier specific) |
| 139 | Debug-Information (system supplier specific) |
| 140 | Debug-Information (system supplier specific) |
| 141 | Debug-Information (system supplier specific) |
| 142 | Debug-Information (system supplier specific) |
| 143 | Debug-Information (system supplier specific) |
| 144 | Debug-Information (system supplier specific) |
| 145 | Debug-Information (system supplier specific) |
| 146 | Debug-Information (system supplier specific) |
| 147 | Debug-Information (system supplier specific) |
| 148 | Debug-Information (system supplier specific) |
| 149 | Debug-Information (system supplier specific) |
| 150 | Debug-Information (system supplier specific) |
| 151 | Debug-Information (system supplier specific) |
| 152 | Debug-Information (system supplier specific) |
| 153 | Debug-Information (system supplier specific) |
| 154 | Debug-Information (system supplier specific) |
| 155 | Debug-Information (system supplier specific) |
| 156 | Debug-Information (system supplier specific) |
| 157 | Debug-Information (system supplier specific) |
| 158 | Debug-Information (system supplier specific) |
| 159 | Debug-Information (system supplier specific) |
| 160 | Debug-Information (system supplier specific) |
| 161 | Debug-Information (system supplier specific) |
| 162 | Debug-Information (system supplier specific) |
| 163 | Debug-Information (system supplier specific) |
| 164 | Debug-Information (system supplier specific) |
| 165 | Debug-Information (system supplier specific) |
| 166 | Debug-Information (system supplier specific) |
| 167 | Debug-Information (system supplier specific) |
| 168 | Debug-Information (system supplier specific) |
| 169 | Debug-Information (system supplier specific) |
| 170 | Debug-Information (system supplier specific) |
| 171 | Debug-Information (system supplier specific) |
| 172 | Debug-Information (system supplier specific) |
| 173 | Debug-Information (system supplier specific) |
| 174 | Debug-Information (system supplier specific) |
| 175 | Debug-Information (system supplier specific) |
| 176 | Debug-Information (system supplier specific) |
| 177 | Debug-Information (system supplier specific) |
| 178 | Debug-Information (system supplier specific) |
| 179 | Debug-Information (system supplier specific) |
| 180 | Debug-Information (system supplier specific) |
| 181 | Debug-Information (system supplier specific) |
| 182 | Debug-Information (system supplier specific) |
| 183 | Debug-Information (system supplier specific) |
| 184 | Debug-Information (system supplier specific) |
| 185 | Debug-Information (system supplier specific) |
| 186 | Debug-Information (system supplier specific) |
| 187 | Debug-Information (system supplier specific) |
| 188 | Debug-Information (system supplier specific) |
| 189 | Debug-Information (system supplier specific) |
| 190 | Debug-Information (system supplier specific) |
| 191 | Debug-Information (system supplier specific) |
| 192 | Debug-Information (system supplier specific) |
| 193 | Debug-Information (system supplier specific) |
| 194 | Debug-Information (system supplier specific) |
| 195 | Debug-Information (system supplier specific) |
| 196 | Debug-Information (system supplier specific) |
| 197 | Debug-Information (system supplier specific) |
| 198 | Debug-Information (system supplier specific) |
| 199 | Debug-Information (system supplier specific) |
| 200 | Debug-Information (system supplier specific) |
| 201 | Debug-Information (system supplier specific) |
| 202 | Debug-Information (system supplier specific) |
| 203 | Debug-Information (system supplier specific) |
| 204 | Debug-Information (system supplier specific) |
| 205 | Debug-Information (system supplier specific) |
| 206 | Debug-Information (system supplier specific) |
| 207 | Debug-Information (system supplier specific) |
| 208 | Debug-Information (system supplier specific) |
| 209 | Debug-Information (system supplier specific) |
| 210 | Debug-Information (system supplier specific) |
| 211 | Debug-Information (system supplier specific) |
| 212 | Debug-Information (system supplier specific) |
| 213 | Debug-Information (system supplier specific) |
| 214 | Debug-Information (system supplier specific) |
| 215 | Debug-Information (system supplier specific) |
| 216 | Debug-Information (system supplier specific) |
| 217 | Debug-Information (system supplier specific) |
| 218 | Debug-Information (system supplier specific) |
| 219 | Debug-Information (system supplier specific) |
| 220 | Debug-Information (system supplier specific) |
| 221 | Debug-Information (system supplier specific) |
| 222 | Debug-Information (system supplier specific) |
| 223 | Debug-Information (system supplier specific) |
| 224 | Debug-Information (system supplier specific) |
| 225 | Debug-Information (system supplier specific) |
| 226 | Debug-Information (system supplier specific) |
| 227 | Debug-Information (system supplier specific) |
| 228 | Debug-Information (system supplier specific) |
| 229 | Debug-Information (system supplier specific) |
| 230 | Debug-Information (system supplier specific) |
| 231 | Debug-Information (system supplier specific) |
| 232 | Debug-Information (system supplier specific) |
| 233 | Debug-Information (system supplier specific) |
| 234 | Debug-Information (system supplier specific) |
| 235 | Debug-Information (system supplier specific) |
| 236 | Debug-Information (system supplier specific) |
| 237 | Debug-Information (system supplier specific) |
| 238 | Debug-Information (system supplier specific) |
| 239 | Debug-Information (system supplier specific) |
| 240 | Debug-Information (system supplier specific) |
| 241 | Debug-Information (system supplier specific) |
| 242 | Debug-Information (system supplier specific) |
| 243 | Debug-Information (system supplier specific) |
| 244 | Debug-Information (system supplier specific) |
| 245 | Debug-Information (system supplier specific) |
| 246 | Debug-Information (system supplier specific) |
| 247 | Debug-Information (system supplier specific) |
| 248 | Debug-Information (system supplier specific) |
| 249 | Debug-Information (system supplier specific) |
| 250 | Debug-Information (system supplier specific) |
| 251 | Debug-Information (system supplier specific) |
| 252 | Debug-Information (system supplier specific) |
| 253 | Debug-Information (system supplier specific) |
| 254 | Debug-Information (system supplier specific) |
| 255 | reserved |

### CC_CTP_HIGH_NIBBLE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Disable/Enable communication Type in all connected subnets |
| 1 | Disable/Enable subnet 01 |
| 2 | Disable/Enable subnet 02 |
| 3 | Disable/Enable subnet 03 |
| 4 | Disable/Enable subnet 04 |
| 5 | Disable/Enable subnet 05 |
| 6 | Disable/Enable subnet 06 |
| 7 | Disable/Enable subnet 07 |
| 8 | Disable/Enable subnet 08 |
| 9 | Disable/Enable subnet 09 |
| 10 | Disable/Enable subnet 10 |
| 11 | Disable/Enable subnet 11 |
| 12 | Disable/Enable subnet 12 |
| 13 | Disable/Enable subnet 13 |
| 14 | Disable/Enable subnet 14 |
| 15 | Disable/Enable subnet with receiving node |

### CC_CTP_LOW_HALF_NIBBLE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved |
| 1 | normalCommunicationMessages |
| 2 | networkManagementCommunicationMessages |
| 3 | networkManagement- and normalCommunicationMessages |

### TAB_ENERGIESPARMODE_DOP

| WERT | TEXT |
| --- | --- |
| -1 | Mode ungültig |
| 0 | Energiesparmode nicht aktiv |
| 1 | Produktionsmode |
| 2 | Transportmode |
| 3 | Flashmode |

### RDTCI_06_LEV_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00 |
| 6 | reportDTCextendedDataRecordByDTCnumber |
| 20 | ISOSAEReserved_14_7F |
| 21 | ISOSAEReserved_14_7F |
| 22 | ISOSAEReserved_14_7F |
| 23 | ISOSAEReserved_14_7F |
| 24 | ISOSAEReserved_14_7F |
| 25 | ISOSAEReserved_14_7F |
| 26 | ISOSAEReserved_14_7F |
| 27 | ISOSAEReserved_14_7F |
| 28 | ISOSAEReserved_14_7F |
| 29 | ISOSAEReserved_14_7F |
| 30 | ISOSAEReserved_14_7F |
| 31 | ISOSAEReserved_14_7F |
| 32 | ISOSAEReserved_14_7F |
| 33 | ISOSAEReserved_14_7F |
| 34 | ISOSAEReserved_14_7F |
| 35 | ISOSAEReserved_14_7F |
| 36 | ISOSAEReserved_14_7F |
| 37 | ISOSAEReserved_14_7F |
| 38 | ISOSAEReserved_14_7F |
| 39 | ISOSAEReserved_14_7F |
| 40 | ISOSAEReserved_14_7F |
| 41 | ISOSAEReserved_14_7F |
| 42 | ISOSAEReserved_14_7F |
| 43 | ISOSAEReserved_14_7F |
| 44 | ISOSAEReserved_14_7F |
| 45 | ISOSAEReserved_14_7F |
| 46 | ISOSAEReserved_14_7F |
| 47 | ISOSAEReserved_14_7F |
| 48 | ISOSAEReserved_14_7F |
| 49 | ISOSAEReserved_14_7F |
| 50 | ISOSAEReserved_14_7F |
| 51 | ISOSAEReserved_14_7F |
| 52 | ISOSAEReserved_14_7F |
| 53 | ISOSAEReserved_14_7F |
| 54 | ISOSAEReserved_14_7F |
| 55 | ISOSAEReserved_14_7F |
| 56 | ISOSAEReserved_14_7F |
| 57 | ISOSAEReserved_14_7F |
| 58 | ISOSAEReserved_14_7F |
| 59 | ISOSAEReserved_14_7F |
| 60 | ISOSAEReserved_14_7F |
| 61 | ISOSAEReserved_14_7F |
| 62 | ISOSAEReserved_14_7F |
| 63 | ISOSAEReserved_14_7F |
| 64 | ISOSAEReserved_14_7F |
| 65 | ISOSAEReserved_14_7F |
| 66 | ISOSAEReserved_14_7F |
| 67 | ISOSAEReserved_14_7F |
| 68 | ISOSAEReserved_14_7F |
| 69 | ISOSAEReserved_14_7F |
| 70 | ISOSAEReserved_14_7F |
| 71 | ISOSAEReserved_14_7F |
| 72 | ISOSAEReserved_14_7F |
| 73 | ISOSAEReserved_14_7F |
| 74 | ISOSAEReserved_14_7F |
| 75 | ISOSAEReserved_14_7F |
| 76 | ISOSAEReserved_14_7F |
| 77 | ISOSAEReserved_14_7F |
| 78 | ISOSAEReserved_14_7F |
| 79 | ISOSAEReserved_14_7F |
| 80 | ISOSAEReserved_14_7F |
| 81 | ISOSAEReserved_14_7F |
| 82 | ISOSAEReserved_14_7F |
| 83 | ISOSAEReserved_14_7F |
| 84 | ISOSAEReserved_14_7F |
| 85 | ISOSAEReserved_14_7F |
| 86 | ISOSAEReserved_14_7F |
| 87 | ISOSAEReserved_14_7F |
| 88 | ISOSAEReserved_14_7F |
| 89 | ISOSAEReserved_14_7F |
| 90 | ISOSAEReserved_14_7F |
| 91 | ISOSAEReserved_14_7F |
| 92 | ISOSAEReserved_14_7F |
| 93 | ISOSAEReserved_14_7F |
| 94 | ISOSAEReserved_14_7F |
| 95 | ISOSAEReserved_14_7F |
| 96 | ISOSAEReserved_14_7F |
| 97 | ISOSAEReserved_14_7F |
| 98 | ISOSAEReserved_14_7F |
| 99 | ISOSAEReserved_14_7F |
| 100 | ISOSAEReserved_14_7F |
| 101 | ISOSAEReserved_14_7F |
| 102 | ISOSAEReserved_14_7F |
| 103 | ISOSAEReserved_14_7F |
| 104 | ISOSAEReserved_14_7F |
| 105 | ISOSAEReserved_14_7F |
| 106 | ISOSAEReserved_14_7F |
| 107 | ISOSAEReserved_14_7F |
| 108 | ISOSAEReserved_14_7F |
| 109 | ISOSAEReserved_14_7F |
| 110 | ISOSAEReserved_14_7F |
| 111 | ISOSAEReserved_14_7F |
| 112 | ISOSAEReserved_14_7F |
| 113 | ISOSAEReserved_14_7F |
| 114 | ISOSAEReserved_14_7F |
| 115 | ISOSAEReserved_14_7F |
| 116 | ISOSAEReserved_14_7F |
| 117 | ISOSAEReserved_14_7F |
| 118 | ISOSAEReserved_14_7F |
| 119 | ISOSAEReserved_14_7F |
| 120 | ISOSAEReserved_14_7F |
| 121 | ISOSAEReserved_14_7F |
| 122 | ISOSAEReserved_14_7F |
| 123 | ISOSAEReserved_14_7F |
| 124 | ISOSAEReserved_14_7F |
| 125 | ISOSAEReserved_14_7F |
| 126 | ISOSAEReserved_14_7F |
| 127 | ISOSAEReserved_14_7F |

### CDTCI_GODTC_DOP

| WERT | TEXT |
| --- | --- |
| 0 | EMISSION_REL |
| 16777210 | DEM_DTC_GROUP_NETWORK_COM_DTCS |
| 16777211 | DEM_DTC_GROUP_POWERTRAIN_DTCS |
| 16777212 | DEM_DTC_GROUP_CHASSIS_DTCS |
| 16777213 | DEM_DTC_GROUP_BODY_DTCS |

### EXTENDED_ENERGY_MODE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Erweiterter Betriebsmodus nicht gesetzt |
| 1 | Erweiterter Betriebsmodus 1 |
| 2 | Erweiterter Betriebsmodus 2 |
| 3 | Erweiterter Betriebsmodus 3 |
| 4 | Erweiterter Betriebsmodus 4 |
| 5 | Erweiterter Betriebsmodus 5 |
| 6 | Erweiterter Betriebsmodus 6 |
| 7 | Erweiterter Betriebsmodus 7 |
| 8 | Erweiterter Betriebsmodus 8 |
| 9 | Erweiterter Betriebsmodus 9 |
| 10 | Erweiterter Betriebsmodus 10 |
| 11 | Erweiterter Betriebsmodus 11 |
| 12 | Erweiterter Betriebsmodus 12 |
| 13 | Erweiterter Betriebsmodus 13 |
| 14 | Erweiterter Betriebsmodus 14 |
| 15 | Erweiterter Betriebsmodus 15 |

### RC_SEM_RCO_DOP

| WERT | TEXT |
| --- | --- |
| 0 | DeactivateFlashMode |
| 1 | ActivateFertigungsMode |
| 2 | ActivateTransportMode |
| 3 | ActivateFlashMode |

### SWT_RC_FSCS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | not available |
| 1 | loaded |
| 2 | accepted |
| 3 | rejected |
| 4 | cancelled |

### RC_RSWEPS_SWEPS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reservedByMemoryErasedDefaultValue_00 |
| 1 | SWENotFound |
| 2 | eraseMemoryStarted |
| 3 | dataTransferStarted |
| 4 | checkSignatureStarted |
| 5 | checkSignatureOK |
| 6 | checkSignatureNOK |
| 7 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 8 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 9 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 10 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 11 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 12 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 13 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 14 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 15 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 16 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 17 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 18 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 19 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 20 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 21 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 22 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 23 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 24 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 25 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 26 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 27 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 28 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 29 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 30 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 31 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 32 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 33 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 34 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 35 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 36 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 37 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 38 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 39 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 40 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 41 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 42 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 43 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 44 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 45 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 46 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 47 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 48 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 49 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 50 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 51 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 52 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 53 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 54 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 55 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 56 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 57 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 58 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 59 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 60 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 61 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 62 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 63 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 64 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 65 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 66 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 67 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 68 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 69 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 70 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 71 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 72 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 73 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 74 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 75 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 76 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 77 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 78 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 79 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 80 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 81 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 82 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 83 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 84 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 85 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 86 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 87 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 88 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 89 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 90 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 91 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 92 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 93 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 94 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 95 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 96 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 97 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 98 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 99 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 100 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 101 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 102 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 103 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 104 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 105 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 106 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 107 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 108 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 109 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 110 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 111 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 112 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 113 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 114 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 115 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 116 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 117 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 118 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 119 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 120 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 121 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 122 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 123 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 124 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 125 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 126 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 127 | reservedForFutureVehicleManufacturerSpecificStatusDefinitions_07_7F |
| 128 | systemSupplierSpecificStatusDefinitions_80_FE |
| 129 | systemSupplierSpecificStatusDefinitions_80_FE |
| 130 | systemSupplierSpecificStatusDefinitions_80_FE |
| 131 | systemSupplierSpecificStatusDefinitions_80_FE |
| 132 | systemSupplierSpecificStatusDefinitions_80_FE |
| 133 | systemSupplierSpecificStatusDefinitions_80_FE |
| 134 | systemSupplierSpecificStatusDefinitions_80_FE |
| 135 | systemSupplierSpecificStatusDefinitions_80_FE |
| 136 | systemSupplierSpecificStatusDefinitions_80_FE |
| 137 | systemSupplierSpecificStatusDefinitions_80_FE |
| 138 | systemSupplierSpecificStatusDefinitions_80_FE |
| 139 | systemSupplierSpecificStatusDefinitions_80_FE |
| 140 | systemSupplierSpecificStatusDefinitions_80_FE |
| 141 | systemSupplierSpecificStatusDefinitions_80_FE |
| 142 | systemSupplierSpecificStatusDefinitions_80_FE |
| 143 | systemSupplierSpecificStatusDefinitions_80_FE |
| 144 | systemSupplierSpecificStatusDefinitions_80_FE |
| 145 | systemSupplierSpecificStatusDefinitions_80_FE |
| 146 | systemSupplierSpecificStatusDefinitions_80_FE |
| 147 | systemSupplierSpecificStatusDefinitions_80_FE |
| 148 | systemSupplierSpecificStatusDefinitions_80_FE |
| 149 | systemSupplierSpecificStatusDefinitions_80_FE |
| 150 | systemSupplierSpecificStatusDefinitions_80_FE |
| 151 | systemSupplierSpecificStatusDefinitions_80_FE |
| 152 | systemSupplierSpecificStatusDefinitions_80_FE |
| 153 | systemSupplierSpecificStatusDefinitions_80_FE |
| 154 | systemSupplierSpecificStatusDefinitions_80_FE |
| 155 | systemSupplierSpecificStatusDefinitions_80_FE |
| 156 | systemSupplierSpecificStatusDefinitions_80_FE |
| 157 | systemSupplierSpecificStatusDefinitions_80_FE |
| 158 | systemSupplierSpecificStatusDefinitions_80_FE |
| 159 | systemSupplierSpecificStatusDefinitions_80_FE |
| 160 | systemSupplierSpecificStatusDefinitions_80_FE |
| 161 | systemSupplierSpecificStatusDefinitions_80_FE |
| 162 | systemSupplierSpecificStatusDefinitions_80_FE |
| 163 | systemSupplierSpecificStatusDefinitions_80_FE |
| 164 | systemSupplierSpecificStatusDefinitions_80_FE |
| 165 | systemSupplierSpecificStatusDefinitions_80_FE |
| 166 | systemSupplierSpecificStatusDefinitions_80_FE |
| 167 | systemSupplierSpecificStatusDefinitions_80_FE |
| 168 | systemSupplierSpecificStatusDefinitions_80_FE |
| 169 | systemSupplierSpecificStatusDefinitions_80_FE |
| 170 | systemSupplierSpecificStatusDefinitions_80_FE |
| 171 | systemSupplierSpecificStatusDefinitions_80_FE |
| 172 | systemSupplierSpecificStatusDefinitions_80_FE |
| 173 | systemSupplierSpecificStatusDefinitions_80_FE |
| 174 | systemSupplierSpecificStatusDefinitions_80_FE |
| 175 | systemSupplierSpecificStatusDefinitions_80_FE |
| 176 | systemSupplierSpecificStatusDefinitions_80_FE |
| 177 | systemSupplierSpecificStatusDefinitions_80_FE |
| 178 | systemSupplierSpecificStatusDefinitions_80_FE |
| 179 | systemSupplierSpecificStatusDefinitions_80_FE |
| 180 | systemSupplierSpecificStatusDefinitions_80_FE |
| 181 | systemSupplierSpecificStatusDefinitions_80_FE |
| 182 | systemSupplierSpecificStatusDefinitions_80_FE |
| 183 | systemSupplierSpecificStatusDefinitions_80_FE |
| 184 | systemSupplierSpecificStatusDefinitions_80_FE |
| 185 | systemSupplierSpecificStatusDefinitions_80_FE |
| 186 | systemSupplierSpecificStatusDefinitions_80_FE |
| 187 | systemSupplierSpecificStatusDefinitions_80_FE |
| 188 | systemSupplierSpecificStatusDefinitions_80_FE |
| 189 | systemSupplierSpecificStatusDefinitions_80_FE |
| 190 | systemSupplierSpecificStatusDefinitions_80_FE |
| 191 | systemSupplierSpecificStatusDefinitions_80_FE |
| 192 | systemSupplierSpecificStatusDefinitions_80_FE |
| 193 | systemSupplierSpecificStatusDefinitions_80_FE |
| 194 | systemSupplierSpecificStatusDefinitions_80_FE |
| 195 | systemSupplierSpecificStatusDefinitions_80_FE |
| 196 | systemSupplierSpecificStatusDefinitions_80_FE |
| 197 | systemSupplierSpecificStatusDefinitions_80_FE |
| 198 | systemSupplierSpecificStatusDefinitions_80_FE |
| 199 | systemSupplierSpecificStatusDefinitions_80_FE |
| 200 | systemSupplierSpecificStatusDefinitions_80_FE |
| 201 | systemSupplierSpecificStatusDefinitions_80_FE |
| 202 | systemSupplierSpecificStatusDefinitions_80_FE |
| 203 | systemSupplierSpecificStatusDefinitions_80_FE |
| 204 | systemSupplierSpecificStatusDefinitions_80_FE |
| 205 | systemSupplierSpecificStatusDefinitions_80_FE |
| 206 | systemSupplierSpecificStatusDefinitions_80_FE |
| 207 | systemSupplierSpecificStatusDefinitions_80_FE |
| 208 | systemSupplierSpecificStatusDefinitions_80_FE |
| 209 | systemSupplierSpecificStatusDefinitions_80_FE |
| 210 | systemSupplierSpecificStatusDefinitions_80_FE |
| 211 | systemSupplierSpecificStatusDefinitions_80_FE |
| 212 | systemSupplierSpecificStatusDefinitions_80_FE |
| 213 | systemSupplierSpecificStatusDefinitions_80_FE |
| 214 | systemSupplierSpecificStatusDefinitions_80_FE |
| 215 | systemSupplierSpecificStatusDefinitions_80_FE |
| 216 | systemSupplierSpecificStatusDefinitions_80_FE |
| 217 | systemSupplierSpecificStatusDefinitions_80_FE |
| 218 | systemSupplierSpecificStatusDefinitions_80_FE |
| 219 | systemSupplierSpecificStatusDefinitions_80_FE |
| 220 | systemSupplierSpecificStatusDefinitions_80_FE |
| 221 | systemSupplierSpecificStatusDefinitions_80_FE |
| 222 | systemSupplierSpecificStatusDefinitions_80_FE |
| 223 | systemSupplierSpecificStatusDefinitions_80_FE |
| 224 | systemSupplierSpecificStatusDefinitions_80_FE |
| 225 | systemSupplierSpecificStatusDefinitions_80_FE |
| 226 | systemSupplierSpecificStatusDefinitions_80_FE |
| 227 | systemSupplierSpecificStatusDefinitions_80_FE |
| 228 | systemSupplierSpecificStatusDefinitions_80_FE |
| 229 | systemSupplierSpecificStatusDefinitions_80_FE |
| 230 | systemSupplierSpecificStatusDefinitions_80_FE |
| 231 | systemSupplierSpecificStatusDefinitions_80_FE |
| 232 | systemSupplierSpecificStatusDefinitions_80_FE |
| 233 | systemSupplierSpecificStatusDefinitions_80_FE |
| 234 | systemSupplierSpecificStatusDefinitions_80_FE |
| 235 | systemSupplierSpecificStatusDefinitions_80_FE |
| 236 | systemSupplierSpecificStatusDefinitions_80_FE |
| 237 | systemSupplierSpecificStatusDefinitions_80_FE |
| 238 | systemSupplierSpecificStatusDefinitions_80_FE |
| 239 | systemSupplierSpecificStatusDefinitions_80_FE |
| 240 | systemSupplierSpecificStatusDefinitions_80_FE |
| 241 | systemSupplierSpecificStatusDefinitions_80_FE |
| 242 | systemSupplierSpecificStatusDefinitions_80_FE |
| 243 | systemSupplierSpecificStatusDefinitions_80_FE |
| 244 | systemSupplierSpecificStatusDefinitions_80_FE |
| 245 | systemSupplierSpecificStatusDefinitions_80_FE |
| 246 | systemSupplierSpecificStatusDefinitions_80_FE |
| 247 | systemSupplierSpecificStatusDefinitions_80_FE |
| 248 | systemSupplierSpecificStatusDefinitions_80_FE |
| 249 | systemSupplierSpecificStatusDefinitions_80_FE |
| 250 | systemSupplierSpecificStatusDefinitions_80_FE |
| 251 | systemSupplierSpecificStatusDefinitions_80_FE |
| 252 | systemSupplierSpecificStatusDefinitions_80_FE |
| 253 | systemSupplierSpecificStatusDefinitions_80_FE |
| 254 | systemSupplierSpecificStatusDefinitions_80_FE |
| 255 | reservedByMemoryErasedDefaultValue_FF |

### FEHLERKLASSE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Keine Fehlerklasse verfuegbar |
| 1 | Ueberpruefung beim naechsten Werkstattbesuch |
| 2 | Ueberpruefung beim naechsten Halt |
| 4 | Ueberpruefung sofort erforderlich |

### RDTCI_DTCSVM_DOP

| WERT | TEXT |
| --- | --- |
| 0 | noSeverityAvailable |
| 32 | maintenanceOnly |
| 64 | checkAtNextHalt |
| 128 | checkImmediately |

### RC_CM_CM_DOP

| WERT | TEXT |
| --- | --- |
| 17 | addressedCheckValue |
| 18 | indicatedCheckValue |

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ECUMehrmalsProgrammierbar |
| 1 | ECUMindestensEinmalVollstaendigProgrammierbar |
| 2 | ECUNichtMehrProgrammierbar |
| 3 | reserved_03_FF |
| 4 | reserved_03_FF |
| 5 | reserved_03_FF |
| 6 | reserved_03_FF |
| 7 | reserved_03_FF |
| 8 | reserved_03_FF |
| 9 | reserved_03_FF |
| 10 | reserved_03_FF |
| 11 | reserved_03_FF |
| 12 | reserved_03_FF |
| 13 | reserved_03_FF |
| 14 | reserved_03_FF |
| 15 | reserved_03_FF |
| 16 | reserved_03_FF |
| 17 | reserved_03_FF |
| 18 | reserved_03_FF |
| 19 | reserved_03_FF |
| 20 | reserved_03_FF |
| 21 | reserved_03_FF |
| 22 | reserved_03_FF |
| 23 | reserved_03_FF |
| 24 | reserved_03_FF |
| 25 | reserved_03_FF |
| 26 | reserved_03_FF |
| 27 | reserved_03_FF |
| 28 | reserved_03_FF |
| 29 | reserved_03_FF |
| 30 | reserved_03_FF |
| 31 | reserved_03_FF |
| 32 | reserved_03_FF |
| 33 | reserved_03_FF |
| 34 | reserved_03_FF |
| 35 | reserved_03_FF |
| 36 | reserved_03_FF |
| 37 | reserved_03_FF |
| 38 | reserved_03_FF |
| 39 | reserved_03_FF |
| 40 | reserved_03_FF |
| 41 | reserved_03_FF |
| 42 | reserved_03_FF |
| 43 | reserved_03_FF |
| 44 | reserved_03_FF |
| 45 | reserved_03_FF |
| 46 | reserved_03_FF |
| 47 | reserved_03_FF |
| 48 | reserved_03_FF |
| 49 | reserved_03_FF |
| 50 | reserved_03_FF |
| 51 | reserved_03_FF |
| 52 | reserved_03_FF |
| 53 | reserved_03_FF |
| 54 | reserved_03_FF |
| 55 | reserved_03_FF |
| 56 | reserved_03_FF |
| 57 | reserved_03_FF |
| 58 | reserved_03_FF |
| 59 | reserved_03_FF |
| 60 | reserved_03_FF |
| 61 | reserved_03_FF |
| 62 | reserved_03_FF |
| 63 | reserved_03_FF |
| 64 | reserved_03_FF |
| 65 | reserved_03_FF |
| 66 | reserved_03_FF |
| 67 | reserved_03_FF |
| 68 | reserved_03_FF |
| 69 | reserved_03_FF |
| 70 | reserved_03_FF |
| 71 | reserved_03_FF |
| 72 | reserved_03_FF |
| 73 | reserved_03_FF |
| 74 | reserved_03_FF |
| 75 | reserved_03_FF |
| 76 | reserved_03_FF |
| 77 | reserved_03_FF |
| 78 | reserved_03_FF |
| 79 | reserved_03_FF |
| 80 | reserved_03_FF |
| 81 | reserved_03_FF |
| 82 | reserved_03_FF |
| 83 | reserved_03_FF |
| 84 | reserved_03_FF |
| 85 | reserved_03_FF |
| 86 | reserved_03_FF |
| 87 | reserved_03_FF |
| 88 | reserved_03_FF |
| 89 | reserved_03_FF |
| 90 | reserved_03_FF |
| 91 | reserved_03_FF |
| 92 | reserved_03_FF |
| 93 | reserved_03_FF |
| 94 | reserved_03_FF |
| 95 | reserved_03_FF |
| 96 | reserved_03_FF |
| 97 | reserved_03_FF |
| 98 | reserved_03_FF |
| 99 | reserved_03_FF |
| 100 | reserved_03_FF |
| 101 | reserved_03_FF |
| 102 | reserved_03_FF |
| 103 | reserved_03_FF |
| 104 | reserved_03_FF |
| 105 | reserved_03_FF |
| 106 | reserved_03_FF |
| 107 | reserved_03_FF |
| 108 | reserved_03_FF |
| 109 | reserved_03_FF |
| 110 | reserved_03_FF |
| 111 | reserved_03_FF |
| 112 | reserved_03_FF |
| 113 | reserved_03_FF |
| 114 | reserved_03_FF |
| 115 | reserved_03_FF |
| 116 | reserved_03_FF |
| 117 | reserved_03_FF |
| 118 | reserved_03_FF |
| 119 | reserved_03_FF |
| 120 | reserved_03_FF |
| 121 | reserved_03_FF |
| 122 | reserved_03_FF |
| 123 | reserved_03_FF |
| 124 | reserved_03_FF |
| 125 | reserved_03_FF |
| 126 | reserved_03_FF |
| 127 | reserved_03_FF |
| 128 | reserved_03_FF |
| 129 | reserved_03_FF |
| 130 | reserved_03_FF |
| 131 | reserved_03_FF |
| 132 | reserved_03_FF |
| 133 | reserved_03_FF |
| 134 | reserved_03_FF |
| 135 | reserved_03_FF |
| 136 | reserved_03_FF |
| 137 | reserved_03_FF |
| 138 | reserved_03_FF |
| 139 | reserved_03_FF |
| 140 | reserved_03_FF |
| 141 | reserved_03_FF |
| 142 | reserved_03_FF |
| 143 | reserved_03_FF |
| 144 | reserved_03_FF |
| 145 | reserved_03_FF |
| 146 | reserved_03_FF |
| 147 | reserved_03_FF |
| 148 | reserved_03_FF |
| 149 | reserved_03_FF |
| 150 | reserved_03_FF |
| 151 | reserved_03_FF |
| 152 | reserved_03_FF |
| 153 | reserved_03_FF |
| 154 | reserved_03_FF |
| 155 | reserved_03_FF |
| 156 | reserved_03_FF |
| 157 | reserved_03_FF |
| 158 | reserved_03_FF |
| 159 | reserved_03_FF |
| 160 | reserved_03_FF |
| 161 | reserved_03_FF |
| 162 | reserved_03_FF |
| 163 | reserved_03_FF |
| 164 | reserved_03_FF |
| 165 | reserved_03_FF |
| 166 | reserved_03_FF |
| 167 | reserved_03_FF |
| 168 | reserved_03_FF |
| 169 | reserved_03_FF |
| 170 | reserved_03_FF |
| 171 | reserved_03_FF |
| 172 | reserved_03_FF |
| 173 | reserved_03_FF |
| 174 | reserved_03_FF |
| 175 | reserved_03_FF |
| 176 | reserved_03_FF |
| 177 | reserved_03_FF |
| 178 | reserved_03_FF |
| 179 | reserved_03_FF |
| 180 | reserved_03_FF |
| 181 | reserved_03_FF |
| 182 | reserved_03_FF |
| 183 | reserved_03_FF |
| 184 | reserved_03_FF |
| 185 | reserved_03_FF |
| 186 | reserved_03_FF |
| 187 | reserved_03_FF |
| 188 | reserved_03_FF |
| 189 | reserved_03_FF |
| 190 | reserved_03_FF |
| 191 | reserved_03_FF |
| 192 | reserved_03_FF |
| 193 | reserved_03_FF |
| 194 | reserved_03_FF |
| 195 | reserved_03_FF |
| 196 | reserved_03_FF |
| 197 | reserved_03_FF |
| 198 | reserved_03_FF |
| 199 | reserved_03_FF |
| 200 | reserved_03_FF |
| 201 | reserved_03_FF |
| 202 | reserved_03_FF |
| 203 | reserved_03_FF |
| 204 | reserved_03_FF |
| 205 | reserved_03_FF |
| 206 | reserved_03_FF |
| 207 | reserved_03_FF |
| 208 | reserved_03_FF |
| 209 | reserved_03_FF |
| 210 | reserved_03_FF |
| 211 | reserved_03_FF |
| 212 | reserved_03_FF |
| 213 | reserved_03_FF |
| 214 | reserved_03_FF |
| 215 | reserved_03_FF |
| 216 | reserved_03_FF |
| 217 | reserved_03_FF |
| 218 | reserved_03_FF |
| 219 | reserved_03_FF |
| 220 | reserved_03_FF |
| 221 | reserved_03_FF |
| 222 | reserved_03_FF |
| 223 | reserved_03_FF |
| 224 | reserved_03_FF |
| 225 | reserved_03_FF |
| 226 | reserved_03_FF |
| 227 | reserved_03_FF |
| 228 | reserved_03_FF |
| 229 | reserved_03_FF |
| 230 | reserved_03_FF |
| 231 | reserved_03_FF |
| 232 | reserved_03_FF |
| 233 | reserved_03_FF |
| 234 | reserved_03_FF |
| 235 | reserved_03_FF |
| 236 | reserved_03_FF |
| 237 | reserved_03_FF |
| 238 | reserved_03_FF |
| 239 | reserved_03_FF |
| 240 | reserved_03_FF |
| 241 | reserved_03_FF |
| 242 | reserved_03_FF |
| 243 | reserved_03_FF |
| 244 | reserved_03_FF |
| 245 | reserved_03_FF |
| 246 | reserved_03_FF |
| 247 | reserved_03_FF |
| 248 | reserved_03_FF |
| 249 | reserved_03_FF |
| 250 | reserved_03_FF |
| 251 | reserved_03_FF |
| 252 | reserved_03_FF |
| 253 | reserved_03_FF |
| 254 | reserved_03_FF |
| 255 | reserved_03_FF |

### SVK_VERSION_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | SVKVersion_01 |
| 2 | reserved |
| 3 | reserved |
| 4 | reserved |
| 5 | reserved |
| 6 | reserved |
| 7 | reserved |
| 8 | reserved |
| 9 | reserved |
| 10 | reserved |
| 11 | reserved |
| 12 | reserved |
| 13 | reserved |
| 14 | reserved |
| 15 | reserved |
| 16 | reserved |
| 17 | reserved |
| 18 | reserved |
| 19 | reserved |
| 20 | reserved |
| 21 | reserved |
| 22 | reserved |
| 23 | reserved |
| 24 | reserved |
| 25 | reserved |
| 26 | reserved |
| 27 | reserved |
| 28 | reserved |
| 29 | reserved |
| 30 | reserved |
| 31 | reserved |
| 32 | reserved |
| 33 | reserved |
| 34 | reserved |
| 35 | reserved |
| 36 | reserved |
| 37 | reserved |
| 38 | reserved |
| 39 | reserved |
| 40 | reserved |
| 41 | reserved |
| 42 | reserved |
| 43 | reserved |
| 44 | reserved |
| 45 | reserved |
| 46 | reserved |
| 47 | reserved |
| 48 | reserved |
| 49 | reserved |
| 50 | reserved |
| 51 | reserved |
| 52 | reserved |
| 53 | reserved |
| 54 | reserved |
| 55 | reserved |
| 56 | reserved |
| 57 | reserved |
| 58 | reserved |
| 59 | reserved |
| 60 | reserved |
| 61 | reserved |
| 62 | reserved |
| 63 | reserved |
| 64 | reserved |
| 65 | reserved |
| 66 | reserved |
| 67 | reserved |
| 68 | reserved |
| 69 | reserved |
| 70 | reserved |
| 71 | reserved |
| 72 | reserved |
| 73 | reserved |
| 74 | reserved |
| 75 | reserved |
| 76 | reserved |
| 77 | reserved |
| 78 | reserved |
| 79 | reserved |
| 80 | reserved |
| 81 | reserved |
| 82 | reserved |
| 83 | reserved |
| 84 | reserved |
| 85 | reserved |
| 86 | reserved |
| 87 | reserved |
| 88 | reserved |
| 89 | reserved |
| 90 | reserved |
| 91 | reserved |
| 92 | reserved |
| 93 | reserved |
| 94 | reserved |
| 95 | reserved |
| 96 | reserved |
| 97 | reserved |
| 98 | reserved |
| 99 | reserved |
| 100 | reserved |
| 101 | reserved |
| 102 | reserved |
| 103 | reserved |
| 104 | reserved |
| 105 | reserved |
| 106 | reserved |
| 107 | reserved |
| 108 | reserved |
| 109 | reserved |
| 110 | reserved |
| 111 | reserved |
| 112 | reserved |
| 113 | reserved |
| 114 | reserved |
| 115 | reserved |
| 116 | reserved |
| 117 | reserved |
| 118 | reserved |
| 119 | reserved |
| 120 | reserved |
| 121 | reserved |
| 122 | reserved |
| 123 | reserved |
| 124 | reserved |
| 125 | reserved |
| 126 | reserved |
| 127 | reserved |
| 128 | reserved |
| 129 | reserved |
| 130 | reserved |
| 131 | reserved |
| 132 | reserved |
| 133 | reserved |
| 134 | reserved |
| 135 | reserved |
| 136 | reserved |
| 137 | reserved |
| 138 | reserved |
| 139 | reserved |
| 140 | reserved |
| 141 | reserved |
| 142 | reserved |
| 143 | reserved |
| 144 | reserved |
| 145 | reserved |
| 146 | reserved |
| 147 | reserved |
| 148 | reserved |
| 149 | reserved |
| 150 | reserved |
| 151 | reserved |
| 152 | reserved |
| 153 | reserved |
| 154 | reserved |
| 155 | reserved |
| 156 | reserved |
| 157 | reserved |
| 158 | reserved |
| 159 | reserved |
| 160 | reserved |
| 161 | reserved |
| 162 | reserved |
| 163 | reserved |
| 164 | reserved |
| 165 | reserved |
| 166 | reserved |
| 167 | reserved |
| 168 | reserved |
| 169 | reserved |
| 170 | reserved |
| 171 | reserved |
| 172 | reserved |
| 173 | reserved |
| 174 | reserved |
| 175 | reserved |
| 176 | reserved |
| 177 | reserved |
| 178 | reserved |
| 179 | reserved |
| 180 | reserved |
| 181 | reserved |
| 182 | reserved |
| 183 | reserved |
| 184 | reserved |
| 185 | reserved |
| 186 | reserved |
| 187 | reserved |
| 188 | reserved |
| 189 | reserved |
| 190 | reserved |
| 191 | reserved |
| 192 | reserved |
| 193 | reserved |
| 194 | reserved |
| 195 | reserved |
| 196 | reserved |
| 197 | reserved |
| 198 | reserved |
| 199 | reserved |
| 200 | reserved |
| 201 | reserved |
| 202 | reserved |
| 203 | reserved |
| 204 | reserved |
| 205 | reserved |
| 206 | reserved |
| 207 | reserved |
| 208 | reserved |
| 209 | reserved |
| 210 | reserved |
| 211 | reserved |
| 212 | reserved |
| 213 | reserved |
| 214 | reserved |
| 215 | reserved |
| 216 | reserved |
| 217 | reserved |
| 218 | reserved |
| 219 | reserved |
| 220 | reserved |
| 221 | reserved |
| 222 | reserved |
| 223 | reserved |
| 224 | reserved |
| 225 | reserved |
| 226 | reserved |
| 227 | reserved |
| 228 | reserved |
| 229 | reserved |
| 230 | reserved |
| 231 | reserved |
| 232 | reserved |
| 233 | reserved |
| 234 | reserved |
| 235 | reserved |
| 236 | reserved |
| 237 | reserved |
| 238 | reserved |
| 239 | reserved |
| 240 | reserved |
| 241 | reserved |
| 242 | reserved |
| 243 | reserved |
| 244 | reserved |
| 245 | reserved |
| 246 | reserved |
| 247 | reserved |
| 248 | reserved |
| 249 | reserved |
| 250 | reserved |
| 251 | reserved |
| 252 | reserved |
| 253 | reserved |
| 254 | reserved |
| 255 | reserved |

### SWT_RC_CT_DOP

| WERT | TEXT |
| --- | --- |
| 1 | SigS-Zertifikat |
| 2 | FSCS-Zertifikat |
| 3 | Root-Zertifikat |

### SWT_RC_FSCT_DOP

| WERT | TEXT |
| --- | --- |
| 1 | SWTclassic light |
| 2 | SWTclassic full |
| 3 | SWTpre-enabled light |
| 4 | SWTpre-enabled full |
| 5 | SWTshort |

### RC_EM_AC_DOP

| WERT | TEXT |
| --- | --- |
| 6 | ActivationCode |

### SWT_RC_RS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | OK |
| 204 | KEY_DERIVATION_NOT_ACTIVATED |
| 205 | KEY_FACTOR_NOT_EXISTENT |
| 208 | EXTENSION_CHECK_FAILURE |
| 209 | INVALID_FSC |
| 210 | FGN_ACCESS_FAILURE |
| 211 | NO_FREE_SPACE |
| 212 | WRONG_CERT_CONTENT_CRIT_ELEM |
| 213 | WRONG_FSC_CONTENT |
| 214 | BAD_PARAM |
| 215 | FSCS_CERT_REJECTED |
| 216 | MISSING_SG_DATA |
| 217 | NOT_AUTHENTICATED |
| 218 | FP_MECHANISM_NOT_OK |
| 219 | SIGS_ID_AND_CERT_NOT_MATCHING |
| 220 | VALIDITY_CHECK_FAILURE |
| 221 | FGN_INVALID |
| 222 | FGN_CHECK_FAILURE |
| 223 | FLASH_READ_ERROR |
| 224 | FLASH_WRITE_ERROR |
| 225 | WRONG_CERT_CONTENT_KEYUSAGE |
| 226 | WRONG_CERT_CONTENT_ISSUER |
| 227 | WRONG_CERT_CONTENT_VALIDITY |
| 228 | FSCS_CERT_CHECK_FAILURE |
| 229 | FSCS_CERT_INVALID |
| 230 | FSCS_CERT_NOT_CHECKED |
| 231 | FSCS_CERT_NOT_EXISTENT |
| 232 | SIGS_CERT_CHECK_FAILURE |
| 233 | SIGS_CERT_INVALID |
| 234 | SIGS_CERT_NOT_CHECKED |
| 235 | SIGS_CERT_NOT_EXISTENT |
| 236 | ROOT_CERT_INVALID |
| 237 | ROOT_CERT_REJECTED |
| 238 | ROOT_CERT_CORRUPT |
| 239 | ROOT_CERT_NOT_READABLE |
| 240 | ROOT_CERT_NOT_EXISTENT |
| 241 | CERT_REJECTED |
| 242 | CERT_NOT_EXISTENT |
| 243 | FSC_CHECK_FAILURE |
| 244 | FSC_CANCELLED |
| 245 | FSC_REJECTED |
| 246 | FSC_NOT_EXISTENT |
| 247 | WRONG_FSCS_ID_IN_FSC |
| 248 | INVALID_FSC_CREATION_DATE |
| 249 | SIG_CHECK_FAILURE |
| 250 | SWSIG_CHECK_FAILURE |
| 251 | SWSIG_STATE_REJECTED |
| 252 | SWID_CHECK_FAILURE |
| 253 | SW_NOT_ACTIVATED |
| 254 | SW_NOT_EXISTENT |
| 255 | UNKNOWN_ERROR |

### ENERGIESPARMODE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Normalmode |
| 1 | Fertigungsmode |
| 2 | Transportmode |
| 3 | Flashmode |

### WDBI_FP_TSID_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved_0_8 |
| 1 | reserved_0_8 |
| 2 | reserved_0_8 |
| 3 | reserved_0_8 |
| 4 | reserved_0_8 |
| 5 | reserved_0_8 |
| 6 | reserved_0_8 |
| 7 | reserved_0_8 |
| 8 | reserved_0_8 |
| 9 | independentRepairShop |
| 10 | service_BMW_HO |
| 11 | systemSupplier |
| 13 | vehiclePlant |
| 14 | replacementPlant |
| 15 | development |

### RDTCI_02_LEV_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00 |
| 2 | reportDTCByStatusMask |
| 20 | ISOSAEReserved_14_7F |
| 21 | ISOSAEReserved_14_7F |
| 22 | ISOSAEReserved_14_7F |
| 23 | ISOSAEReserved_14_7F |
| 24 | ISOSAEReserved_14_7F |
| 25 | ISOSAEReserved_14_7F |
| 26 | ISOSAEReserved_14_7F |
| 27 | ISOSAEReserved_14_7F |
| 28 | ISOSAEReserved_14_7F |
| 29 | ISOSAEReserved_14_7F |
| 30 | ISOSAEReserved_14_7F |
| 31 | ISOSAEReserved_14_7F |
| 32 | ISOSAEReserved_14_7F |
| 33 | ISOSAEReserved_14_7F |
| 34 | ISOSAEReserved_14_7F |
| 35 | ISOSAEReserved_14_7F |
| 36 | ISOSAEReserved_14_7F |
| 37 | ISOSAEReserved_14_7F |
| 38 | ISOSAEReserved_14_7F |
| 39 | ISOSAEReserved_14_7F |
| 40 | ISOSAEReserved_14_7F |
| 41 | ISOSAEReserved_14_7F |
| 42 | ISOSAEReserved_14_7F |
| 43 | ISOSAEReserved_14_7F |
| 44 | ISOSAEReserved_14_7F |
| 45 | ISOSAEReserved_14_7F |
| 46 | ISOSAEReserved_14_7F |
| 47 | ISOSAEReserved_14_7F |
| 48 | ISOSAEReserved_14_7F |
| 49 | ISOSAEReserved_14_7F |
| 50 | ISOSAEReserved_14_7F |
| 51 | ISOSAEReserved_14_7F |
| 52 | ISOSAEReserved_14_7F |
| 53 | ISOSAEReserved_14_7F |
| 54 | ISOSAEReserved_14_7F |
| 55 | ISOSAEReserved_14_7F |
| 56 | ISOSAEReserved_14_7F |
| 57 | ISOSAEReserved_14_7F |
| 58 | ISOSAEReserved_14_7F |
| 59 | ISOSAEReserved_14_7F |
| 60 | ISOSAEReserved_14_7F |
| 61 | ISOSAEReserved_14_7F |
| 62 | ISOSAEReserved_14_7F |
| 63 | ISOSAEReserved_14_7F |
| 64 | ISOSAEReserved_14_7F |
| 65 | ISOSAEReserved_14_7F |
| 66 | ISOSAEReserved_14_7F |
| 67 | ISOSAEReserved_14_7F |
| 68 | ISOSAEReserved_14_7F |
| 69 | ISOSAEReserved_14_7F |
| 70 | ISOSAEReserved_14_7F |
| 71 | ISOSAEReserved_14_7F |
| 72 | ISOSAEReserved_14_7F |
| 73 | ISOSAEReserved_14_7F |
| 74 | ISOSAEReserved_14_7F |
| 75 | ISOSAEReserved_14_7F |
| 76 | ISOSAEReserved_14_7F |
| 77 | ISOSAEReserved_14_7F |
| 78 | ISOSAEReserved_14_7F |
| 79 | ISOSAEReserved_14_7F |
| 80 | ISOSAEReserved_14_7F |
| 81 | ISOSAEReserved_14_7F |
| 82 | ISOSAEReserved_14_7F |
| 83 | ISOSAEReserved_14_7F |
| 84 | ISOSAEReserved_14_7F |
| 85 | ISOSAEReserved_14_7F |
| 86 | ISOSAEReserved_14_7F |
| 87 | ISOSAEReserved_14_7F |
| 88 | ISOSAEReserved_14_7F |
| 89 | ISOSAEReserved_14_7F |
| 90 | ISOSAEReserved_14_7F |
| 91 | ISOSAEReserved_14_7F |
| 92 | ISOSAEReserved_14_7F |
| 93 | ISOSAEReserved_14_7F |
| 94 | ISOSAEReserved_14_7F |
| 95 | ISOSAEReserved_14_7F |
| 96 | ISOSAEReserved_14_7F |
| 97 | ISOSAEReserved_14_7F |
| 98 | ISOSAEReserved_14_7F |
| 99 | ISOSAEReserved_14_7F |
| 100 | ISOSAEReserved_14_7F |
| 101 | ISOSAEReserved_14_7F |
| 102 | ISOSAEReserved_14_7F |
| 103 | ISOSAEReserved_14_7F |
| 104 | ISOSAEReserved_14_7F |
| 105 | ISOSAEReserved_14_7F |
| 106 | ISOSAEReserved_14_7F |
| 107 | ISOSAEReserved_14_7F |
| 108 | ISOSAEReserved_14_7F |
| 109 | ISOSAEReserved_14_7F |
| 110 | ISOSAEReserved_14_7F |
| 111 | ISOSAEReserved_14_7F |
| 112 | ISOSAEReserved_14_7F |
| 113 | ISOSAEReserved_14_7F |
| 114 | ISOSAEReserved_14_7F |
| 115 | ISOSAEReserved_14_7F |
| 116 | ISOSAEReserved_14_7F |
| 117 | ISOSAEReserved_14_7F |
| 118 | ISOSAEReserved_14_7F |
| 119 | ISOSAEReserved_14_7F |
| 120 | ISOSAEReserved_14_7F |
| 121 | ISOSAEReserved_14_7F |
| 122 | ISOSAEReserved_14_7F |
| 123 | ISOSAEReserved_14_7F |
| 124 | ISOSAEReserved_14_7F |
| 125 | ISOSAEReserved_14_7F |
| 126 | ISOSAEReserved_14_7F |
| 127 | ISOSAEReserved_14_7F |

### ATF_DOP

| WERT | TEXT |
| --- | --- |
| 1 | B1 |

### RTF_DOP

| WERT | TEXT |
| --- | --- |
| 1 | B1 |
| 2 | wait |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00 |
| 1 | defaultSession |
| 2 | programmingSession |
| 3 | extendedDiagnosticSession |
| 4 | safetySystemDiagnosticSession |
| 5 | ISOSAEReserved_05_3F |
| 6 | ISOSAEReserved_05_3F |
| 7 | ISOSAEReserved_05_3F |
| 8 | ISOSAEReserved_05_3F |
| 9 | ISOSAEReserved_05_3F |
| 10 | ISOSAEReserved_05_3F |
| 11 | ISOSAEReserved_05_3F |
| 12 | ISOSAEReserved_05_3F |
| 13 | ISOSAEReserved_05_3F |
| 14 | ISOSAEReserved_05_3F |
| 15 | ISOSAEReserved_05_3F |
| 16 | ISOSAEReserved_05_3F |
| 17 | ISOSAEReserved_05_3F |
| 18 | ISOSAEReserved_05_3F |
| 19 | ISOSAEReserved_05_3F |
| 20 | ISOSAEReserved_05_3F |
| 21 | ISOSAEReserved_05_3F |
| 22 | ISOSAEReserved_05_3F |
| 23 | ISOSAEReserved_05_3F |
| 24 | ISOSAEReserved_05_3F |
| 25 | ISOSAEReserved_05_3F |
| 26 | ISOSAEReserved_05_3F |
| 27 | ISOSAEReserved_05_3F |
| 28 | ISOSAEReserved_05_3F |
| 29 | ISOSAEReserved_05_3F |
| 30 | ISOSAEReserved_05_3F |
| 31 | ISOSAEReserved_05_3F |
| 32 | ISOSAEReserved_05_3F |
| 33 | ISOSAEReserved_05_3F |
| 34 | ISOSAEReserved_05_3F |
| 35 | ISOSAEReserved_05_3F |
| 36 | ISOSAEReserved_05_3F |
| 37 | ISOSAEReserved_05_3F |
| 38 | ISOSAEReserved_05_3F |
| 39 | ISOSAEReserved_05_3F |
| 40 | ISOSAEReserved_05_3F |
| 41 | ISOSAEReserved_05_3F |
| 42 | ISOSAEReserved_05_3F |
| 43 | ISOSAEReserved_05_3F |
| 44 | ISOSAEReserved_05_3F |
| 45 | ISOSAEReserved_05_3F |
| 46 | ISOSAEReserved_05_3F |
| 47 | ISOSAEReserved_05_3F |
| 48 | ISOSAEReserved_05_3F |
| 49 | ISOSAEReserved_05_3F |
| 50 | ISOSAEReserved_05_3F |
| 51 | ISOSAEReserved_05_3F |
| 52 | ISOSAEReserved_05_3F |
| 53 | ISOSAEReserved_05_3F |
| 54 | ISOSAEReserved_05_3F |
| 55 | ISOSAEReserved_05_3F |
| 56 | ISOSAEReserved_05_3F |
| 57 | ISOSAEReserved_05_3F |
| 58 | ISOSAEReserved_05_3F |
| 59 | ISOSAEReserved_05_3F |
| 60 | ISOSAEReserved_05_3F |
| 61 | ISOSAEReserved_05_3F |
| 62 | ISOSAEReserved_05_3F |
| 63 | ISOSAEReserved_05_3F |
| 64 | vehicleManufacturerSpecific_40 |
| 65 | codingSession |
| 66 | SWTSession |
| 67 | vehicleManufacturerSpecific_43_5F |
| 68 | vehicleManufacturerSpecific_43_5F |
| 69 | vehicleManufacturerSpecific_43_5F |
| 70 | vehicleManufacturerSpecific_43_5F |
| 71 | vehicleManufacturerSpecific_43_5F |
| 72 | vehicleManufacturerSpecific_43_5F |
| 73 | vehicleManufacturerSpecific_43_5F |
| 74 | vehicleManufacturerSpecific_43_5F |
| 75 | vehicleManufacturerSpecific_43_5F |
| 76 | vehicleManufacturerSpecific_43_5F |
| 77 | vehicleManufacturerSpecific_43_5F |
| 78 | vehicleManufacturerSpecific_43_5F |
| 79 | vehicleManufacturerSpecific_43_5F |
| 80 | vehicleManufacturerSpecific_43_5F |
| 81 | vehicleManufacturerSpecific_43_5F |
| 82 | vehicleManufacturerSpecific_43_5F |
| 83 | vehicleManufacturerSpecific_43_5F |
| 84 | vehicleManufacturerSpecific_43_5F |
| 85 | vehicleManufacturerSpecific_43_5F |
| 86 | vehicleManufacturerSpecific_43_5F |
| 87 | vehicleManufacturerSpecific_43_5F |
| 88 | vehicleManufacturerSpecific_43_5F |
| 89 | vehicleManufacturerSpecific_43_5F |
| 90 | vehicleManufacturerSpecific_43_5F |
| 91 | vehicleManufacturerSpecific_43_5F |
| 92 | vehicleManufacturerSpecific_43_5F |
| 93 | vehicleManufacturerSpecific_43_5F |
| 94 | vehicleManufacturerSpecific_43_5F |
| 95 | vehicleManufacturerSpecific_43_5F |
| 96 | systemSupplierSpecific |
| 97 | systemSupplierSpecific |
| 98 | systemSupplierSpecific |
| 99 | systemSupplierSpecific |
| 100 | systemSupplierSpecific |
| 101 | systemSupplierSpecific |
| 102 | systemSupplierSpecific |
| 103 | systemSupplierSpecific |
| 104 | systemSupplierSpecific |
| 105 | systemSupplierSpecific |
| 106 | systemSupplierSpecific |
| 107 | systemSupplierSpecific |
| 108 | systemSupplierSpecific |
| 109 | systemSupplierSpecific |
| 110 | systemSupplierSpecific |
| 111 | systemSupplierSpecific |
| 112 | systemSupplierSpecific |
| 113 | systemSupplierSpecific |
| 114 | systemSupplierSpecific |
| 115 | systemSupplierSpecific |
| 116 | systemSupplierSpecific |
| 117 | systemSupplierSpecific |
| 118 | systemSupplierSpecific |
| 119 | systemSupplierSpecific |
| 120 | systemSupplierSpecific |
| 121 | systemSupplierSpecific |
| 122 | systemSupplierSpecific |
| 123 | systemSupplierSpecific |
| 124 | systemSupplierSpecific |
| 125 | systemSupplierSpecific |
| 126 | systemSupplierSpecific |

### ROE_EWT_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00_01 |
| 1 | ISOSAEReserved_00_01 |
| 2 | infiniteTimeToResponse |
| 3 | vehicleManufacturerSpecific_03_7F |
| 4 | vehicleManufacturerSpecific_03_7F |
| 5 | vehicleManufacturerSpecific_03_7F |
| 6 | vehicleManufacturerSpecific_03_7F |
| 7 | vehicleManufacturerSpecific_03_7F |
| 8 | vehicleManufacturerSpecific_03_7F |
| 9 | vehicleManufacturerSpecific_03_7F |
| 10 | vehicleManufacturerSpecific_03_7F |
| 11 | vehicleManufacturerSpecific_03_7F |
| 12 | vehicleManufacturerSpecific_03_7F |
| 13 | vehicleManufacturerSpecific_03_7F |
| 14 | vehicleManufacturerSpecific_03_7F |
| 15 | vehicleManufacturerSpecific_03_7F |
| 16 | vehicleManufacturerSpecific_03_7F |
| 17 | vehicleManufacturerSpecific_03_7F |
| 18 | vehicleManufacturerSpecific_03_7F |
| 19 | vehicleManufacturerSpecific_03_7F |
| 20 | vehicleManufacturerSpecific_03_7F |
| 21 | vehicleManufacturerSpecific_03_7F |
| 22 | vehicleManufacturerSpecific_03_7F |
| 23 | vehicleManufacturerSpecific_03_7F |
| 24 | vehicleManufacturerSpecific_03_7F |
| 25 | vehicleManufacturerSpecific_03_7F |
| 26 | vehicleManufacturerSpecific_03_7F |
| 27 | vehicleManufacturerSpecific_03_7F |
| 28 | vehicleManufacturerSpecific_03_7F |
| 29 | vehicleManufacturerSpecific_03_7F |
| 30 | vehicleManufacturerSpecific_03_7F |
| 31 | vehicleManufacturerSpecific_03_7F |
| 32 | vehicleManufacturerSpecific_03_7F |
| 33 | vehicleManufacturerSpecific_03_7F |
| 34 | vehicleManufacturerSpecific_03_7F |
| 35 | vehicleManufacturerSpecific_03_7F |
| 36 | vehicleManufacturerSpecific_03_7F |
| 37 | vehicleManufacturerSpecific_03_7F |
| 38 | vehicleManufacturerSpecific_03_7F |
| 39 | vehicleManufacturerSpecific_03_7F |
| 40 | vehicleManufacturerSpecific_03_7F |
| 41 | vehicleManufacturerSpecific_03_7F |
| 42 | vehicleManufacturerSpecific_03_7F |
| 43 | vehicleManufacturerSpecific_03_7F |
| 44 | vehicleManufacturerSpecific_03_7F |
| 45 | vehicleManufacturerSpecific_03_7F |
| 46 | vehicleManufacturerSpecific_03_7F |
| 47 | vehicleManufacturerSpecific_03_7F |
| 48 | vehicleManufacturerSpecific_03_7F |
| 49 | vehicleManufacturerSpecific_03_7F |
| 50 | vehicleManufacturerSpecific_03_7F |
| 51 | vehicleManufacturerSpecific_03_7F |
| 52 | vehicleManufacturerSpecific_03_7F |
| 53 | vehicleManufacturerSpecific_03_7F |
| 54 | vehicleManufacturerSpecific_03_7F |
| 55 | vehicleManufacturerSpecific_03_7F |
| 56 | vehicleManufacturerSpecific_03_7F |
| 57 | vehicleManufacturerSpecific_03_7F |
| 58 | vehicleManufacturerSpecific_03_7F |
| 59 | vehicleManufacturerSpecific_03_7F |
| 60 | vehicleManufacturerSpecific_03_7F |
| 61 | vehicleManufacturerSpecific_03_7F |
| 62 | vehicleManufacturerSpecific_03_7F |
| 63 | vehicleManufacturerSpecific_03_7F |
| 64 | vehicleManufacturerSpecific_03_7F |
| 65 | vehicleManufacturerSpecific_03_7F |
| 66 | vehicleManufacturerSpecific_03_7F |
| 67 | vehicleManufacturerSpecific_03_7F |
| 68 | vehicleManufacturerSpecific_03_7F |
| 69 | vehicleManufacturerSpecific_03_7F |
| 70 | vehicleManufacturerSpecific_03_7F |
| 71 | vehicleManufacturerSpecific_03_7F |
| 72 | vehicleManufacturerSpecific_03_7F |
| 73 | vehicleManufacturerSpecific_03_7F |
| 74 | vehicleManufacturerSpecific_03_7F |
| 75 | vehicleManufacturerSpecific_03_7F |
| 76 | vehicleManufacturerSpecific_03_7F |
| 77 | vehicleManufacturerSpecific_03_7F |
| 78 | vehicleManufacturerSpecific_03_7F |
| 79 | vehicleManufacturerSpecific_03_7F |
| 80 | vehicleManufacturerSpecific_03_7F |
| 81 | vehicleManufacturerSpecific_03_7F |
| 82 | vehicleManufacturerSpecific_03_7F |
| 83 | vehicleManufacturerSpecific_03_7F |
| 84 | vehicleManufacturerSpecific_03_7F |
| 85 | vehicleManufacturerSpecific_03_7F |
| 86 | vehicleManufacturerSpecific_03_7F |
| 87 | vehicleManufacturerSpecific_03_7F |
| 88 | vehicleManufacturerSpecific_03_7F |
| 89 | vehicleManufacturerSpecific_03_7F |
| 90 | vehicleManufacturerSpecific_03_7F |
| 91 | vehicleManufacturerSpecific_03_7F |
| 92 | vehicleManufacturerSpecific_03_7F |
| 93 | vehicleManufacturerSpecific_03_7F |
| 94 | vehicleManufacturerSpecific_03_7F |
| 95 | vehicleManufacturerSpecific_03_7F |
| 96 | vehicleManufacturerSpecific_03_7F |
| 97 | vehicleManufacturerSpecific_03_7F |
| 98 | vehicleManufacturerSpecific_03_7F |
| 99 | vehicleManufacturerSpecific_03_7F |
| 100 | vehicleManufacturerSpecific_03_7F |
| 101 | vehicleManufacturerSpecific_03_7F |
| 102 | vehicleManufacturerSpecific_03_7F |
| 103 | vehicleManufacturerSpecific_03_7F |
| 104 | vehicleManufacturerSpecific_03_7F |
| 105 | vehicleManufacturerSpecific_03_7F |
| 106 | vehicleManufacturerSpecific_03_7F |
| 107 | vehicleManufacturerSpecific_03_7F |
| 108 | vehicleManufacturerSpecific_03_7F |
| 109 | vehicleManufacturerSpecific_03_7F |
| 110 | vehicleManufacturerSpecific_03_7F |
| 111 | vehicleManufacturerSpecific_03_7F |
| 112 | vehicleManufacturerSpecific_03_7F |
| 113 | vehicleManufacturerSpecific_03_7F |
| 114 | vehicleManufacturerSpecific_03_7F |
| 115 | vehicleManufacturerSpecific_03_7F |
| 116 | vehicleManufacturerSpecific_03_7F |
| 117 | vehicleManufacturerSpecific_03_7F |
| 118 | vehicleManufacturerSpecific_03_7F |
| 119 | vehicleManufacturerSpecific_03_7F |
| 120 | vehicleManufacturerSpecific_03_7F |
| 121 | vehicleManufacturerSpecific_03_7F |
| 122 | vehicleManufacturerSpecific_03_7F |
| 123 | vehicleManufacturerSpecific_03_7F |
| 124 | vehicleManufacturerSpecific_03_7F |
| 125 | vehicleManufacturerSpecific_03_7F |
| 126 | vehicleManufacturerSpecific_03_7F |
| 127 | vehicleManufacturerSpecific_03_7F |
| 128 | ISOSAEReserved_80_FF |
| 129 | ISOSAEReserved_80_FF |
| 130 | ISOSAEReserved_80_FF |
| 131 | ISOSAEReserved_80_FF |
| 132 | ISOSAEReserved_80_FF |
| 133 | ISOSAEReserved_80_FF |
| 134 | ISOSAEReserved_80_FF |
| 135 | ISOSAEReserved_80_FF |
| 136 | ISOSAEReserved_80_FF |
| 137 | ISOSAEReserved_80_FF |
| 138 | ISOSAEReserved_80_FF |
| 139 | ISOSAEReserved_80_FF |
| 140 | ISOSAEReserved_80_FF |
| 141 | ISOSAEReserved_80_FF |
| 142 | ISOSAEReserved_80_FF |
| 143 | ISOSAEReserved_80_FF |
| 144 | ISOSAEReserved_80_FF |
| 145 | ISOSAEReserved_80_FF |
| 146 | ISOSAEReserved_80_FF |
| 147 | ISOSAEReserved_80_FF |
| 148 | ISOSAEReserved_80_FF |
| 149 | ISOSAEReserved_80_FF |
| 150 | ISOSAEReserved_80_FF |
| 151 | ISOSAEReserved_80_FF |
| 152 | ISOSAEReserved_80_FF |
| 153 | ISOSAEReserved_80_FF |
| 154 | ISOSAEReserved_80_FF |
| 155 | ISOSAEReserved_80_FF |
| 156 | ISOSAEReserved_80_FF |
| 157 | ISOSAEReserved_80_FF |
| 158 | ISOSAEReserved_80_FF |
| 159 | ISOSAEReserved_80_FF |
| 160 | ISOSAEReserved_80_FF |
| 161 | ISOSAEReserved_80_FF |
| 162 | ISOSAEReserved_80_FF |
| 163 | ISOSAEReserved_80_FF |
| 164 | ISOSAEReserved_80_FF |
| 165 | ISOSAEReserved_80_FF |
| 166 | ISOSAEReserved_80_FF |
| 167 | ISOSAEReserved_80_FF |
| 168 | ISOSAEReserved_80_FF |
| 169 | ISOSAEReserved_80_FF |
| 170 | ISOSAEReserved_80_FF |
| 171 | ISOSAEReserved_80_FF |
| 172 | ISOSAEReserved_80_FF |
| 173 | ISOSAEReserved_80_FF |
| 174 | ISOSAEReserved_80_FF |
| 175 | ISOSAEReserved_80_FF |
| 176 | ISOSAEReserved_80_FF |
| 177 | ISOSAEReserved_80_FF |
| 178 | ISOSAEReserved_80_FF |
| 179 | ISOSAEReserved_80_FF |
| 180 | ISOSAEReserved_80_FF |
| 181 | ISOSAEReserved_80_FF |
| 182 | ISOSAEReserved_80_FF |
| 183 | ISOSAEReserved_80_FF |
| 184 | ISOSAEReserved_80_FF |
| 185 | ISOSAEReserved_80_FF |
| 186 | ISOSAEReserved_80_FF |
| 187 | ISOSAEReserved_80_FF |
| 188 | ISOSAEReserved_80_FF |
| 189 | ISOSAEReserved_80_FF |
| 190 | ISOSAEReserved_80_FF |
| 191 | ISOSAEReserved_80_FF |
| 192 | ISOSAEReserved_80_FF |
| 193 | ISOSAEReserved_80_FF |
| 194 | ISOSAEReserved_80_FF |
| 195 | ISOSAEReserved_80_FF |
| 196 | ISOSAEReserved_80_FF |
| 197 | ISOSAEReserved_80_FF |
| 198 | ISOSAEReserved_80_FF |
| 199 | ISOSAEReserved_80_FF |
| 200 | ISOSAEReserved_80_FF |
| 201 | ISOSAEReserved_80_FF |
| 202 | ISOSAEReserved_80_FF |
| 203 | ISOSAEReserved_80_FF |
| 204 | ISOSAEReserved_80_FF |
| 205 | ISOSAEReserved_80_FF |
| 206 | ISOSAEReserved_80_FF |
| 207 | ISOSAEReserved_80_FF |
| 208 | ISOSAEReserved_80_FF |
| 209 | ISOSAEReserved_80_FF |
| 210 | ISOSAEReserved_80_FF |
| 211 | ISOSAEReserved_80_FF |
| 212 | ISOSAEReserved_80_FF |
| 213 | ISOSAEReserved_80_FF |
| 214 | ISOSAEReserved_80_FF |
| 215 | ISOSAEReserved_80_FF |
| 216 | ISOSAEReserved_80_FF |
| 217 | ISOSAEReserved_80_FF |
| 218 | ISOSAEReserved_80_FF |
| 219 | ISOSAEReserved_80_FF |
| 220 | ISOSAEReserved_80_FF |
| 221 | ISOSAEReserved_80_FF |
| 222 | ISOSAEReserved_80_FF |
| 223 | ISOSAEReserved_80_FF |
| 224 | ISOSAEReserved_80_FF |
| 225 | ISOSAEReserved_80_FF |
| 226 | ISOSAEReserved_80_FF |
| 227 | ISOSAEReserved_80_FF |
| 228 | ISOSAEReserved_80_FF |
| 229 | ISOSAEReserved_80_FF |
| 230 | ISOSAEReserved_80_FF |
| 231 | ISOSAEReserved_80_FF |
| 232 | ISOSAEReserved_80_FF |
| 233 | ISOSAEReserved_80_FF |
| 234 | ISOSAEReserved_80_FF |
| 235 | ISOSAEReserved_80_FF |
| 236 | ISOSAEReserved_80_FF |
| 237 | ISOSAEReserved_80_FF |
| 238 | ISOSAEReserved_80_FF |
| 239 | ISOSAEReserved_80_FF |
| 240 | ISOSAEReserved_80_FF |
| 241 | ISOSAEReserved_80_FF |
| 242 | ISOSAEReserved_80_FF |
| 243 | ISOSAEReserved_80_FF |
| 244 | ISOSAEReserved_80_FF |
| 245 | ISOSAEReserved_80_FF |
| 246 | ISOSAEReserved_80_FF |
| 247 | ISOSAEReserved_80_FF |
| 248 | ISOSAEReserved_80_FF |
| 249 | ISOSAEReserved_80_FF |
| 250 | ISOSAEReserved_80_FF |
| 251 | ISOSAEReserved_80_FF |
| 252 | ISOSAEReserved_80_FF |
| 253 | ISOSAEReserved_80_FF |
| 254 | ISOSAEReserved_80_FF |
| 255 | ISOSAEReserved_80_FF |

### BITF_DOP

| WERT | TEXT |
| --- | --- |
| 0 | notSupported |
| 2 | wait |

### DFI_DOP

| WERT | TEXT |
| --- | --- |
| 0 | noCompressionMethod and noEncryptingMethod |
| 16 | NRV and noEncryptingMethod |

### CMTF_DOP

| WERT | TEXT |
| --- | --- |
| 1 | B1 |

### EMTF_DOP

| WERT | TEXT |
| --- | --- |
| 1 | B1 |

### RC_EM_EM_DOP

| WERT | TEXT |
| --- | --- |
| 1 | addressedErasing |
| 2 | indicatedErasing |
| 3 | specificErasing |

### SWT_RC_RCS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | not available |
| 2 | accepted |
| 3 | rejected |

### TAB_EPS_TYP_EIGENDIAGNOSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Lenkmomentensensor Offset lernen |
| 0x02 | EPS Eigendiagnose Reibung - Spurstangen eingehängt |
| 0x03 | EPS Eigendiagnose Reibung - Spurstangen nicht eingehängt |
| 0x04 | EPS Indexsensor Kalibrierung |
| 0xFF | ungültig |
