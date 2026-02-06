# eps_01.prg

## General

|  |  |
| --- | --- |
| File | eps_01.prg |
| Type | PRG |
| Jobs | 42 |
| Tables | 60 |
| Origin | BMW EF Jungmann,Michael |
| Revision | 1.401 |
| Author | ZFLS EEPA Meixner, BMW EF-601 Jurthe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | elektr. Servolenkung |  |  |
| ORIGIN | string | BMW EF Jungmann,Michael |  |  |
| REVISION | string | 1.401 |  |  |
| AUTHOR | string | ZFLS EEPA Meixner, BMW EF-601 Jurthe |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.07 |  |  |
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

### _STEUERN_WRITE_LLP_OUTPUT

Setzen des Ausgangswertes der Lenkleistungsprädiktion Es muss immer ein Argument im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. UDS  : $2E   WriteDataByIdentifier UDS  : $40A1 WRITE_LLP_OUTPUT Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| LLP_OUTPUT | int | Bereich: 0-255 bzw. 0x00-0xFF |

### _STEUERN_WRITE_LLP_AKTIV

Eín-Ausschalten der Lenkleistungsprädiktion Es muß immer ein Argument im Bereich von 0-255 bzw. 0x00-0xFF übergeben werden. UDS  : $2E   WriteDataByIdentifier UDS  : $40A2 WRITE_LLP_AKTIV Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| LLP_AKTIV | int | Bereich: 0-255 bzw. 0x00-0xFF |

### _STATUS_READ_LLP

Lesen des Status der Lenkleistungsprädiktion Keine Argumente UDS  : $22   ReadDataByIdentifier UDS  : $40A0 READ_LLP_STATUS Modus: Default

_No arguments._

### _STATUS_READ_LLP_VERSION

Lesen der Version der Lenkleistungsprädiktion Keine Argumente UDS  : $22   ReadDataByIdentifier UDS  : $40A3 READ_LLP_VERSIONINFO Modus: Default

_No arguments._

### _STATUS_READ_DEGMON

Lesen des Degradationsmonitors Keine Argumente UDS  : $22   ReadDataByIdentifier UDS  : $40A4 READ_DEGMON Modus: Default

_No arguments._

### _RESET_DEGMON

Reset Degradationsmonitor SG muss sich im Energiersparmode befinden UDS  : $31   RoutineControl UDS  : $01   startRoutine UDS  : $FD09 DataIdentifier Reset Degmon Modus: Default

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
| 0x40 | ECUEOL | ECUEndOfLineSession |
| 0x41 | ECUCODE | ECUCodingSession |
| 0x42 | ECUSWT | ECUSwtSession |
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
| 0x003000 | FLS_E_ERASE_FAILED | 0 |
| 0x003001 | FLS_E_WRITE_FAILED | 0 |
| 0x003002 | FLS_E_READ_FAILED | 0 |
| 0x003003 | FLS_E_COMPARE_FAILED | 0 |
| 0x023000 | VSM_EVENT_OPMODE | 0 |
| 0x02ff30 | DM_TEST_APPL | 1 |
| 0x301002 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT_ZGW | 1 |
| 0x4823C8 | CODING_EVENT_TRANSACTION_FAILED | 0 |
| 0x4823C9 | CODING_EVENT_SIGNATURE_ERROR | 0 |
| 0x4823CA | CODING_EVENT_INVALID_DATA | 0 |
| 0x4823CB | CODING_EVENT_NOT_CODED | 0 |
| 0x4823CC | CODING_EVENT_WRONG_VEHICLE | 0 |
| 0x4823E0 | EPS Steuergerät: nicht benutzter Fehlerort | 0 |
| 0x4823E1 | EPS Steuergerät: Hardware defekt | 0 |
| 0x4823E2 | EPS Steuergerät: Softwarefehler | 0 |
| 0x4823E3 | EPS Steuergerät: Stromversorgung defekt | 0 |
| 0x4823E4 | EPS Steuergerät: nicht benutzter Fehlerort | 0 |
| 0x4823E5 | EPS Steuergerät: Differenz zwischen Rotorwinkel und Lenkwinkel zu hoch | 0 |
| 0x4823E6 | EPS Steuergerät Hardware: Powerpack defekt | 0 |
| 0x4823E7 | EPS Steuergerät Software: LLP- Fehler | 1 |
| 0x4823E8 | EPS Steuergerät: nicht benutzter Fehlerort | 0 |
| 0x4823E9 | EPS Steuergerät Hardware: Temperatursensor defekt | 0 |
| 0x4823EA | EPS Steuergerät Software: Endanschläge nicht gelernt | 0 |
| 0x4823EB | EPS Steuergerät: nicht benutzter Fehlerort | 0 |
| 0x4823EC | EPS Steuergerät Hardware: Lenkmomentensensor defekt | 0 |
| 0x4823ED | EPS Steuergerät Software: Applikationsdaten manipuliert | 0 |
| 0x4823EE | EPS Steuergerät Hardware: EEPROM defekt | 0 |
| 0x4823EF | EPS Steuergerät: nicht benutzter Fehlerort | 0 |
| 0x4823F0 | EPS Steuergerät: nicht benutzter Fehlerort | 0 |
| 0x4823F1 | EPS Steuergerät: nicht benutzter Fehlerort | 0 |
| 0x4823F2 | EPS Steuergerät: nicht benutzter Fehlerort | 0 |
| 0x4823F3 | EPS Steuergerät: nicht benutzter Fehlerort | 0 |
| 0x4823F4 | EPS Steuergerät: nicht benutzter Fehlerort | 0 |
| 0x4823F5 | EPS Steuergerät: Botschaftsfehler AVL_STEA_FTAX | 1 |
| 0x4823F6 | EPS Steuergerät: Botschaftsfehler V_VEH | 1 |
| 0x4823F7 | EPS Steuergerät: Botschaftsfehler TORQ_CRSH_1 | 1 |
| 0x4823F8 | EPS Lenkgetriebe: Rattern erkannt | 0 |
| 0x4823F9 | EPS Steuergerät: Reduktion wegen Übertemperatur | 0 |
| 0x4823FA | EPS Steuergerät: Reduktion wegen Überlast | 0 |
| 0x4823FB | EPS Steuergerät Hardware Rotorlagesensor: Nicht eingelernt | 0 |
| 0x4823FC | EPS Steuergerät Reduktion: Spannung zu niedrig | 1 |
| 0x4823FD | EPS Steuergerät Abschaltung: Spannung zu niedrig | 1 |
| 0x4823FE | EPS Steuergerät: EEPROM Kopie verwendet | 0 |
| 0x4823FF | EPS Steuergerät: Spannungsversorgung unterbrochen | 1 |
| 0xC90401 | DM_Queue_FULL | 0 |
| 0xC90402 | DM_Queue_DELETED | 0 |
| 0xD5041F | FlexRay physical bus error on BUS | 0 |
| 0xD50420 | FlexRay controller error on BUS | 0 |
| 0xD5043F | Empfängerknoten: hat Nachricht nicht abgenommen; Puffer voll | 0 |
| 0xD50440 | Überwachungsschaltung hat Reset ausgelöst | 0 |
| 0xD50441 | MOST: Ringbruch | 0 |
| 0xD50442 | Sender- Empfängerbaustein (FOT): Temperatur übersteigt kritische Schwelle | 0 |
| 0xD50443 | Sender- Empfängerbaustein (FOT): Temperatur übersteigt kritische Schwelle in anderem SG | 0 |
| 0xD50444 | MOST: Ring wacht nicht auf | 0 |
| 0xD50445 | Host hat bei fatalem Fehler vom INIC einen Reset ausgelöst | 0 |
| 0xD50446 | MOST-Knoten: nicht auf Monitoringanfrage geantwortet | 0 |
| 0xD50447 | MOST-Knoten: alle Funktionsblöcke abgemeldet | 0 |
| 0xD50448 | not available | 0 |
| 0xD50BFF | DM_TEST_COM | 0 |
| 0xD51428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD5142C | Signalfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD5144F | Botschaftsfehler (Abstandsmeldung PDC Hinten, ID: GAP_PDC_RS) Sender: PDC - Timeout | 1 |
| 0xD51450 | Signalfehler (Blinken, ID: BLINKEN) Sender: FEM, FRMFA - Ungültig | 1 |
| 0xD51451 | Botschaftsfehler (Blinken, ID: BLINKEN) Sender: FEM, FRMFA - Timeout | 1 |
| 0xD51476 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Ungültig | 1 |
| 0xD51495 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) Sender: PMA - Checksumme | 1 |
| 0xD51496 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) Sender: PMA - Alive | 1 |
| 0xD514AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Timeout | 1 |
| 0xD514B2 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Ungültig | 1 |
| 0xD514B3 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Undefiniert | 1 |
| 0xD514B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD514B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD514BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD514BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Ungültig | 1 |
| 0xD514BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Undefiniert | 1 |
| 0xD514C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD514C3 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD514C4 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD514C8 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Ungültig | 1 |
| 0xD514C9 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Undefiniert | 1 |
| 0xD514D6 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: ICM_QL, SZL_LWS - Timeout | 1 |
| 0xD514D7 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: ICM_QL, SZL_LWS - Checksumme | 1 |
| 0xD514D8 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: ICM_QL, SZL_LWS - Alive | 1 |
| 0xD514DC | Signalfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: ICM_QL, SZL_LWS - Ungültig | 1 |
| 0xD514DD | Signalfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: ICM_QL, SZL_LWS - Undefiniert | 1 |
| 0xD514E5 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Checksumme | 1 |
| 0xD514E8 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Timeout | 1 |
| 0xD514E9 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Checksumme | 1 |
| 0xD514EA | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Alive | 1 |
| 0xD514EE | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Ungültig | 1 |
| 0xD514EF | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Undefiniert | 1 |
| 0xD514F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD514F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD514F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Timeout | 1 |
| 0xD514F9 | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Checksumme | 1 |
| 0xD514FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Alive | 1 |
| 0xD514FC | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Ungültig | 1 |
| 0xD514FD | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Undefiniert | 1 |
| 0xD51508 | Signalfehler (Status Funktion PDC, ID: ST_FN_PDC) Sender: PDC - Ungültig | 1 |
| 0xD51509 | Signalfehler (Status Funktion PDC, ID: ST_FN_PDC) Sender: PDC - Undefiniert | 1 |
| 0xD51513 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Alive | 1 |
| 0xD5151C | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Ungültig | 1 |
| 0xD5151D | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Undefiniert | 1 |
| 0xD51529 | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD5152A | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD5152E | Signalfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) Sender: ICM_QL - Ungültig | 1 |
| 0xD5152F | Signalfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) Sender: ICM_QL - Undefiniert | 1 |
| 0xD51538 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Timeout | 1 |
| 0xD51539 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Checksumme | 1 |
| 0xD5153A | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Alive | 1 |
| 0xD5153E | Signalfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Ungültig | 1 |
| 0xD5153F | Signalfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Undefiniert | 1 |
| 0xD51542 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Sender: ICM_QL - Timeout | 1 |
| 0xD51543 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Sender: ICM_QL - Checksumme | 1 |
| 0xD51544 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Sender: ICM_QL - Alive | 1 |
| 0xD51548 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Sender: ICM_QL - Ungültig | 1 |
| 0xD51549 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Sender: ICM_QL - Undefiniert | 1 |
| 0xD51570 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Timeout | 1 |
| 0xD51571 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Checksumme | 1 |
| 0xD51572 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Alive | 1 |
| 0xD51577 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Qualifier | 1 |
| 0xD5157A | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Ungültig | 1 |
| 0xD5157B | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Undefiniert | 1 |
| 0xD51586 | Botschaftsfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) Sender: FEM, JBBF - Timeout | 1 |
| 0xD5158A | Signalfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) Sender: FEM, JBBF - Ungültig | 1 |
| 0xD5158B | Signalfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) Sender: FEM, JBBF - Undefiniert | 1 |
| 0xD5158C | Botschaftsfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD5158E | Signalfehler (Abstandsmeldung PDC Hinten, ID: GAP_PDC_RS) Sender: PDC - Ungültig | 1 |
| 0xD51590 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD51591 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD515BC | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Timeout | 1 |
| 0xD515BD | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Checksumme | 1 |
| 0xD515BE | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Alive | 1 |
| 0xD515C2 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Ungültig | 1 |
| 0xD515C3 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD51646 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Timeout | 1 |
| 0xD51647 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Checksumme | 1 |
| 0xD51648 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Alive | 1 |
| 0xD5164C | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Ungültig | 1 |
| 0xD5164D | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Undefiniert | 1 |
| 0xD51665 | Signalfehler (Abstandsmeldung PDC Hinten, ID: GAP_PDC_RS) Sender: PDC - Undefiniert | 1 |
| 0xD51672 | Signalfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) Sender: ICM_QL - Qualifier | 1 |
| 0xD516A7 | Botschaftsfehler (Abstandsmeldung PDC Vorne, ID: GAP_PDC_FS) Sender: PDC - Timeout | 1 |
| 0xD516AB | Signalfehler (Abstandsmeldung PDC Vorne, ID: GAP_PDC_FS) Sender: PDC - Ungültig | 1 |
| 0xD516AD | Signalfehler (Abstandsmeldung PDC Vorne, ID: GAP_PDC_FS) Sender: PDC - Undefiniert | 1 |
| 0xD51744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Timeout | 1 |
| 0xD51745 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Checksumme | 1 |
| 0xD51746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Alive | 1 |
| 0xD517AB | Botschaftsfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) Sender: DSC_Modul - Timeout | 1 |
| 0xD517AC | Botschaftsfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) Sender: DSC_Modul - Checksumme | 1 |
| 0xD517AD | Botschaftsfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) Sender: DSC_Modul - Alive | 1 |
| 0xD517AF | Signalfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) Sender: DSC_Modul - Ungültig | 1 |
| 0xD517B0 | Signalfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) Sender: DSC_Modul - Undefiniert | 1 |
| 0xD518DC | Botschaftsfehler (Status Funktion PDC, ID: ST_FN_PDC) Sender: PDC - Timeout | 1 |
| 0xD518DD | Botschaftsfehler (Status Funktion PDC, ID: ST_FN_PDC) Sender: PDC - Checksumme | 1 |
| 0xD518DE | Botschaftsfehler (Status Funktion PDC, ID: ST_FN_PDC) Sender: PDC - Alive | 1 |
| 0xD518E1 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Timeout | 1 |
| 0xD518E6 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) Sender: PMA - Timeout | 1 |
| 0xD51996 | Signalfehler (Status Parkassistent, ID: ST_PMA) Sender: PMA - Ungültig | 1 |
| 0xD519AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Ungültig | 1 |
| 0xD51A3B | Botschaftsfehler (Fahrzeug Adaption, ID: VEH_ADPT) Sender: ICM_QL - Timeout | 1 |
| 0xD51A3D | Signalfehler (Fahrzeug Adaption, ID: VEH_ADPT) Sender: ICM_QL - Ungültig | 1 |
| 0xD51A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Qualifier | 1 |
| 0xD51A3F | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Qualifier | 1 |
| 0xD51A53 | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Qualifier | 1 |
| 0xD51A57 | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Qualifier | 1 |
| 0xD51A62 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Sender: ICM_QL - Qualifier | 1 |
| 0xD51B2C | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Timeout | 1 |
| 0xD51B2E | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Checksumme | 1 |
| 0xD51B2F | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Alive | 1 |
| 0xD51C12 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Timeout | 1 |
| 0xD51C13 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Checksumme | 1 |
| 0xD51C14 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Alive | 1 |
| 0xD51C18 | Botschaftsfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) Sender: PMA - Timeout | 1 |
| 0xD51C19 | Botschaftsfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) Sender: PMA - Checksumme | 1 |
| 0xD51C1A | Botschaftsfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) Sender: PMA - Alive | 1 |
| 0xD51C1C | Botschaftsfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) Sender: FEM, FRMFA - Timeout | 1 |
| 0xD51C1F | Botschaftsfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) Sender: DME1 - Timeout | 1 |
| 0xD51C20 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Timeout | 1 |
| 0xD51C21 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Checksumme | 1 |
| 0xD51C22 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Alive | 1 |
| 0xD52C05 | Signalfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD52C0A | Signalfehler (Blinken, ID: BLINKEN) Sender: FEM, FRMFA - Undefiniert | 1 |
| 0xD52C0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Undefiniert | 1 |
| 0xD52C19 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Undefiniert | 1 |
| 0xD52C2A | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD52C3E | Signalfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Sender: ICM_QL - Undefiniert | 1 |
| 0xD52C3F | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Ungültig | 1 |
| 0xD52C40 | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Sender: ICM_QL - Undefiniert | 1 |
| 0xD52C41 | Signalfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) Sender: PMA - Ungültig | 1 |
| 0xD52C42 | Signalfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) Sender: PMA - Undefiniert | 1 |
| 0xD52C44 | Signalfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) Sender: DME1 - Ungültig | 1 |
| 0xD52C45 | Signalfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) Sender: DME1 - Undefiniert | 1 |
| 0xD52C49 | Signalfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) Sender: FEM, FRMFA - Ungültig | 1 |
| 0xD52C4A | Signalfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) Sender: FEM, FRMFA - Undefiniert | 1 |
| 0xD52C53 | Signalfehler (Status Parkassistent, ID: ST_PMA) Sender: PMA - Undefiniert | 1 |
| 0xD52C5C | Signalfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) Sender: DME1 - Ungültig | 1 |
| 0xD52C5D | Signalfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) Sender: DME1 - Undefiniert | 1 |
| 0xD52C63 | Signalfehler (Fahrzeug Adaption, ID: VEH_ADPT) Sender: ICM_QL - Qualifier | 1 |
| 0xD52C67 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) Sender: DSC_Modul - Qualifier | 1 |
| 0xD52D01 | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Qualifier | 1 |
| 0xD52D03 | Signalfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) Sender: DSC_Modul - Qualifier | 1 |
| 0xD52D06 | Signalfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: ICM_QL, SZL_LWS - Qualifier | 1 |
| 0xD52D54 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Qualifier | 1 |
| 0xd50bff | DM_TEST_COM | 0 |
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
| 0xb031 | ZFLS Zeitstempel | s | - | signed long | - | - | - | - |
| 0xb051 | ZFLS Kilometerstand | km | - | signed long | - | 1 | 1 | 0 |
| 0xb055 | ZFLS Status Endstufenspannung | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb073 | ZFLS Endstufenspannung ungefiltert | V | - | unsigned int | - | 1 | 64 | 0 |
| 0xb053 | ZFLS Endstufenspannung ungefiltert | V | - | unsigned int | - | 1 | 64 | 0 |
| 0xb033 | ZFLS Systemstatus | 0-n | - | 0xff | ZFLS_SYS_STATES | 1 | 1 | 0 |
| 0xb008 | ZFLS Temperatur gefiltert | °C | - | unsigned char | - | 1 | 1 | -70 |
| 0xb032 | ZFLS Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0xb034 | ZFLS Lenkmoment | Nm | - | unsigned int | - | 1 | 1 | 0 |
| 0xb035 | ZFLS Motorsollmoment begrenzt | Nm | - | unsigned int | - | 1 | 1 | 0 |
| 0xb003 | ZFLS Wert sin Rotorlagesensor 1 | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb004 | ZFLS Wert cos Rotorlagesensor 1 | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb009 | ZFLS Wert sin Rotorlagesensor 2 | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb010 | ZFLS Wert cos Rotorlagesensor 2 | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb005 | ZFLS Faktor sin Rotorlagesensor 1 | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb006 | ZFLS Faktor cos Rotorlagesensor 1 | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb011 | ZFLS Faktor sin Rotorlagesensor 2 | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb012 | ZFLS Faktor cos Rotorlagesensor 2 | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb007 | ZFLS Status Rotorlagesensor 1 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb013 | ZFLS Status Rotorlagesensor 2 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb056 | ZFLS Diagnosestatus PASA | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb057 | ZFLS Diagnosestatus PASB | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb058 | ZFLS Versorgungsspannung PASA | V | - | unsigned char | - | 1 | 1 | 0 |
| 0xb059 | ZFLS Versorgungsspannung PASB | V | - | unsigned char | - | 1 | 1 | 0 |
| 0xb014 | ZFLS Motorstrom Phase 1 | A | high | signed int | - | 1 | 16 | 0 |
| 0xb015 | ZFLS Motorstrom Phase 2 | A | high | signed int | - | 1 | 16 | 0 |
| 0xb016 | ZFLS Motorstrom Phase 3 | A | high | signed int | - | 1 | 16 | 0 |
| 0xb017 | ZFLS Status und Test Endstufe | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb019 | ZFLS Prio PWM Coordinator | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb054 | ZFLS Status ECU-Versorgungsspannung | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb002 | ZFLS ECU-Versorgungsspannung ungefiltert | V | - | unsigned int | - | 1 | 64 | 0 |
| 0xb024 | ZFLS ECU-Versorgungsspannung 1.5V | V | - | unsigned int | - | 1 | 64 | 0 |
| 0xb044 | ZFLS Batteriespannung ungefiltert | V | - | unsigned char | - | 1 | 64 | 0 |
| 0xb052 | ZFLS Batteriespannung gefiltert | V | - | unsigned int | - | 1 | 64 | 0 |
| 0xb025 | ZFLS Adresse ROM Bereich | text | - | 4 | - | 1 | 1 | 0 |
| 0xb026 | ZFLS Adresse RAM Zelle | text | - | 2 | - | 1 | 1 | 0 |
| 0xb027 | ZFLS Position RAM Zelle | text | - | 1 | - | 1 | 1 | 0 |
| 0xb028 | ZFLS Nummer fehlerhafte Watchdog-Antwort | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb036 | ZFLS ID L1 | 0-n | - | 0xffff | ZFLS_ID_L1 | 1 | 1 | 0 |
| 0xb037 | ZFLS origina Vergleichswert L1 | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb038 | ZFLS negiert Vergleichswert L1 | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb041 | ZFLS ID L2 | 0-n | - | 0xffff | ZFLS_ID_L2 | 1 | 1 | 0 |
| 0xb018 | ZFLS ASIC REQULO | text | - | 1 | - | 1 | 1 | 0 |
| 0xb020 | ZFLS ASIC LWS_STATE | text | - | 1 | - | 1 | 1 | 0 |
| 0xb021 | ZFLS ASIC DIA1 | text | - | 1 | - | 1 | 1 | 0 |
| 0xb022 | ZFLS ASIC DIA2 | text | - | 1 | - | 1 | 1 | 0 |
| 0xb023 | ZFLS ASIC MR2_STATE | text | - | 1 | - | 1 | 1 | 0 |
| 0xb039 | ZFLS min Diff original und negiert Vergleichswert | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb040 | ZFLS max Diff original und negiert Vergleichswert | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb042 | ZFLS Rotorgeschwindigkeit | 1/min | - | unsigned int | - | 1 | 1 | 0 |
| 0xb043 | ZFLS interner Lenkwinkel | ° | - | unsigned int | - | 1 | 1 | 0 |
| 0xb048 | ZFLS Indexsignal | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb060 | ZFLS SoH Counter | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb061 | ZFLS SoC Counter | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0c0 | ZFLS Fehlercode | 0-n | - | 0xff | ZFLS_ERRCODE | 1 | 1 | 0 |
| 0xb0c1 | ZFLS Fehlerart | 0-n | - | 0xffff | ZFLS_ERRTYPE | 1 | 1 | 0 |
| 0xb0c2 | ZFLS Statuswort | 0/1 | - | 0xffff | - | 1 | 1 | 0 |
| 0xb0c3 | ZFLS Fehlerhäufigkeit | text | - | 1 | - | 1 | 1 | 0 |
| 0xb0c4 | ZFLS Rückwärtszähler | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0c5 | ZFLS Sequenzzähler | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xc000 | ZFLS Statuswort: CARB confirmed | 0/1 | - | 0x0100 | - | 1 | 1 | 0 |
| 0xc001 | ZFLS Statuswort: CARB pending | 0/1 | - | 0x0080 | - | 1 | 1 | 0 |
| 0xc002 | ZFLS Statuswort: Schattenfehler | 0/1 | - | 0x0040 | - | 1 | 1 | 0 |
| 0xc003 | ZFLS Statuswort: sporadischer Fehler | 0/1 | - | 0x0020 | - | 1 | 1 | 0 |
| 0xc004 | ZFLS Statuswort: Ersatzfunktion aktiv | 0/1 | - | 0x0010 | - | 1 | 1 | 0 |
| 0xc005 | ZFLS Statuswort: Fehler aktiv | 0/1 | - | 0x0008 | - | 1 | 1 | 0 |
| 0xc006 | ZFLS Statuswort: im aktuellen Zyklus erkannt | 0/1 | - | 0x0004 | - | 1 | 1 | 0 |
| 0xc007 | ZFLS Statuswort: Störung vorhanden | 0/1 | - | 0x0002 | - | 1 | 1 | 0 |
| 0xc008 | ZFLS Statuswort: Prüfbedingung erreicht | 0/1 | - | 0x0001 | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x001001 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 1 |
| 0x303001 | NVM_E_WRITE_FAILED | 0 |
| 0x303002 | NVM_E_READ_FAILED | 0 |
| 0x303003 | NVM_E_CONTROL_FAILED | 0 |
| 0x303000 | NVM_E_ERASE_FAILED | 0 |
| 0x002006 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x002007 | NVM_E_READ_ALL_FAILED | 0 |
| 0x002010 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x002847 | PIA_E_IO_ERROR | 0 |
| 0x482300 | MPTY RROR MSGE (NO_BLDY_IDEA_WHAT_2_PUT_HERE) | 1 |
| 0x482301 | Temperatursensor (FC_TEMPSENS) | 0 |
| 0x482302 | Plausibilisierung Temperatursensor (CS_FC_TEM_COMP) | 0 |
| 0x482303 | Rotorlagesensor 1 (CS_FC_ROTPOS_SENS1) | 0 |
| 0x482304 | Rotorlagesensor 2 (CS_FC_ROTPOS_SENS2) | 0 |
| 0x482305 | Aktuell nicht benutzt (RB_FC_05) | 0 |
| 0x482306 | Indexsensor (CS_FC_INDEX) | 0 |
| 0x482307 | Serielle Schnittstelle CSI30 (CS_FC_CSI30) | 0 |
| 0x482308 | ASIC Cl220 (CS_FC_CL220) | 0 |
| 0x482309 | Rotorlagesensor 1 nicht eingelernt (CS_FC_ROTPOS_LEARN_SENS1) | 0 |
| 0x48230A | Rotorlagesensor 2 nicht eingelernt (CS_FC_ROTPOS_LEARN_SENS2) | 0 |
| 0x48230B | Watchdog | 0 |
| 0x48230C | KL30 Versorgungsspannung (auch bei nicht plausiblem Wert) | 0 |
| 0x48230D | Enstufenüberwachung (nur Drive) | 0 |
| 0x48230E | Internal RAM (CS_FC_RAM) | 0 |
| 0x48230F | Funktionstest Endstufe im Predrive (CS_FC_FUNCTEST_OPS) | 0 |
| 0x482310 | Analog Digital Wandler (CS_FC_ADC) | 0 |
| 0x482311 | Phasenstrom (CS_FC_SMCURR) | 0 |
| 0x482312 | Shut Down Unit (CS_FC_SHUT_DOWN) | 0 |
| 0x482313 | internal voltages (CS_FC_INT_VOLT) | 0 |
| 0x482314 | ROM (CS_FC_ROM) | 0 |
| 0x482315 | boot core test (RAM March9 test) (CS_FC_RKT) | 0 |
| 0x482316 | PWM validity check (CS_FC_PWM_VALIDITY_CHECK) | 0 |
| 0x482317 | Register Test (CS_FC_REGISTER) | 0 |
| 0x482318 | Endstufenversorgungsspannung (auch bei nicht plausiblem Wert) (CS_FC_OSV) | 0 |
| 0x482319 | Serielle Schnittstelle CSI31 (CS_FC_CSI31) | 0 |
| 0x48231A | ASIC Cl202 (CS_FC_CL202 ) | 0 |
| 0x48231B | Elektronisches Sternpunktrelais (CS_FC_ESPR) | 0 |
| 0x48231C | Flexray (CS_FC_FLEXRAY) | 1 |
| 0x48231D | Aktuell nicht benutzt (RB_FC_29) | 0 |
| 0x48231E | Aktuell nicht benutzt (RB_FC_30) | 0 |
| 0x48231F | EEPROM-Fehler, kein Risiko (KFC_EEPROMNR) | 0 |
| 0x482320 | EEPROM-Fehler, kein Einschalten (KFC_EEPROMHR) | 0 |
| 0x482321 | Lenkmomentsensorfehler Sensor 0 (KFC_STORQUE_0) | 0 |
| 0x482322 | Lenkmomentsensorfehler Sensor 1 (KFC_STORQUE_1) | 0 |
| 0x482323 | Rotordrehzahlgeberfehler (KFC_SMSPEED) | 0 |
| 0x482324 | Vergleich zwischen gemessenen und berechneten Lenkwinkel (KFC_ROTANG) | 0 |
| 0x482325 | Lenkwinkelsignal nicht korrekt (KFC_STANGLE) | 1 |
| 0x482326 | Fehler in der Motordiagnose (Regelung) (KFC_FOR) | 0 |
| 0x482327 | Programmablauf nicht korrekt (KFC_PROG) | 0 |
| 0x482328 | interner LWS nicht kalibriert (KFC_STAN_NOCALIB) | 0 |
| 0x482329 | Fehler auf dem BUS (KFC_FLX) | 1 |
| 0x48232A | BUS-Gateway (KFC_GATEWAY) | 1 |
| 0x48232B | BUS-Parklenkassistent (KFC_PLA) | 1 |
| 0x48232C | BUS-Hybridfunktionalität (KFC_HYBRID) | 1 |
| 0x48232D | Applikationsdaten manipuliert (KFC_APPLDATA) | 0 |
| 0x48232E | BUS-HeadingControl (KFC_HCA) | 1 |
| 0x48232F | BUS-ESP (KFC_ESP) | 1 |
| 0x482330 | BUS-Verbrennungsmotor (KFC_MOTOR) | 1 |
| 0x482331 | BUS-Fehlerlampe (KFC_LAMP) | 0 |
| 0x482332 | Beanspruchung Schneckenradgetriebe: Warnung (KFC_GEARLR) | 0 |
| 0x482333 | Beanspruchung Schneckenradgetriebe: Defekt (KFC_GEARHR) | 0 |
| 0x482334 | aktiver Endanschlag (KFC_ENDSTOP) | 0 |
| 0x482335 | leerer Eintrag | 0 |
| 0x482336 | Rattererkennung (Chatter Recognition)-Unterstützung kleiner als Grenze (KFC_CR_RED) | 0 |
| 0x482337 | Reduzierung der Unterstützung: Endstufentemperatur zu hoch (KFC_CCU_RED) | 0 |
| 0x482338 | Reduzierung der Unterstützung: Versorgungsspannung zu niedrig (KFC_UCU_RED) | 0 |
| 0x482339 | Reduzierung der Unterstützung: Leistungsdichte zu hoch (KFC_OVERLOAD) | 0 |
| 0x48233A | Fehlerhafte Task-Aktivierung (KFC_OS) | 0 |
| 0x48233B | Abschalten der Unterstützung aufgrund der Versorgungsspannung (KFC_UCU) | 0 |
| 0x48233C | RAM Fehler (KFC_RAM) | 0 |
| 0x48233D | Tasklaufzeit (KFC_RUN_TIME) | 0 |
| 0x48233E | Batterie ab Erkennung (KFC_BATTAB) | 0 |
| 0x48233F | Lenkmomentsensorfehler (KFC_STORQUE) | 0 |
| 0x482340 | Lenkwinkelplausibilisierung (KFC_LWSPLAUSI) | 0 |
| 0x482341 | Radiusüberwachung Momentensensor (KFC_STORQUE_RAD) | 0 |
| 0x482342 | Fehler beim Vergleicher Level 1 (KFC_COMP_L1) | 0 |
| 0x482343 | Fehler beim Vergleicher Level 2 (KFC_COMP_L2) | 0 |
| 0x482344 | LLP Fehler | 1 |
| 0x482345 | Bordnetzhochohmigkeitserkennung | 1 |
| 0x482346 | Status Trennelement | 1 |
| 0x482347 | Reibung im Lenkgetriebe zu hoch | 0 |
| 0xc90401 | DM_Queue_FULL | 1 |
| 0xc90402 | DM_Queue_DELETED | 1 |
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
| 0xb031 | ZFLS Zeitstempel | s | - | signed long | - | - | - | - |
| 0xb051 | ZFLS Kilometerstand | km | - | signed long | - | 1 | 1 | 0 |
| 0xb055 | ZFLS Status Endstufenspannung | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb073 | ZFLS Endstufenspannung ungefiltert | V | - | unsigned int | - | 1 | 64 | 0 |
| 0xb053 | ZFLS Endstufenspannung ungefiltert | V | - | unsigned int | - | 1 | 64 | 0 |
| 0xb033 | ZFLS Systemstatus | 0-n | - | 0xff | ZFLS_SYS_STATES | 1 | 1 | 0 |
| 0xb008 | ZFLS Temperatur gefiltert | °C | - | unsigned char | - | 1 | 1 | -70 |
| 0xb032 | ZFLS Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0xb034 | ZFLS Lenkmoment | Nm | - | signed int | - | 1 | 68 | 0 |
| 0xb035 | ZFLS Motorsollmoment begrenzt | Nm | - | signed int | - | 1 | 1024 | 0 |
| 0xb003 | ZFLS Wert sin Rotorlagesensor 1 | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb004 | ZFLS Wert cos Rotorlagesensor 1 | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb009 | ZFLS Wert sin Rotorlagesensor 2 | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb010 | ZFLS Wert cos Rotorlagesensor 2 | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb005 | ZFLS Faktor sin Rotorlagesensor 1 | - | - | unsigned int | - | 80 | 1024 | 0 |
| 0xb006 | ZFLS Faktor cos Rotorlagesensor 1 | - | - | unsigned int | - | 80 | 1024 | 0 |
| 0xb011 | ZFLS Faktor sin Rotorlagesensor 2 | - | - | unsigned int | - | 80 | 1024 | 0 |
| 0xb012 | ZFLS Faktor cos Rotorlagesensor 2 | - | - | unsigned int | - | 80 | 1024 | 0 |
| 0xb007 | ZFLS Status Rotorlagesensor 1 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb013 | ZFLS Status Rotorlagesensor 2 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb056 | ZFLS Diagnosestatus PASA | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb057 | ZFLS Diagnosestatus PASB | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb058 | ZFLS Versorgungsspannung PASA | V | - | unsigned char | - | 9.9 | 255 | 0 |
| 0xb059 | ZFLS Versorgungsspannung PASB | V | - | unsigned char | - | 9.9 | 255 | 0 |
| 0xb014 | ZFLS Motorstrom Phase 1 | A | high | signed int | - | 1 | 64 | 0 |
| 0xb015 | ZFLS Motorstrom Phase 2 | A | high | signed int | - | 1 | 64 | 0 |
| 0xb016 | ZFLS Motorstrom Phase 3 | A | high | signed int | - | 1 | 64 | 0 |
| 0xb017 | ZFLS Status und Test Endstufe | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb019 | ZFLS Prio PWM Coordinator | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb054 | ZFLS Status ECU-Versorgungsspannung | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb002 | ZFLS ECU-Versorgungsspannung ungefiltert | V | - | unsigned int | - | 1 | 64 | 0 |
| 0xb024 | ZFLS ECU-Versorgungsspannung 1.5V | V | - | unsigned int | - | 3.3 | 1023 | 0 |
| 0xb044 | ZFLS Batteriespannung ungefiltert | V | - | unsigned char | - | 1 | 64 | 0 |
| 0xb052 | ZFLS Batteriespannung gefiltert | V | - | unsigned int | - | 1 | 64 | 0 |
| 0xb062 | ZFLS Adresse ROM DAMOS | text | - | 4 | - | 1 | 1 | 0 |
| 0xb063 | ZFLS Adresse ROM Zelle | text | - | 2 | - | 1 | 1 | 0 |
| 0xb064 | ZFLS Adresse fehlerhaftes Register | text | - | 4 | - | 1 | 1 | 0 |
| 0xb025 | ZFLS Adresse RAM DAMOS | text | - | 4 | - | 1 | 1 | 0 |
| 0xb026 | ZFLS Adresse RAM Zelle | text | - | 2 | - | 1 | 1 | 0 |
| 0xb027 | ZFLS Position RAM Zelle | text | - | 1 | - | 1 | 1 | 0 |
| 0xb028 | ZFLS Nummer fehlerhafte Watchdog-Antwort | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xb036 | ZFLS ID L1 | 0-n | - | 0xffff | ZFLS_ID_L1 | 1 | 1 | 0 |
| 0xb037 | ZFLS positiver Vergleichswert L1 | - | - | signed int | - | 1 | 1 | 0 |
| 0xb038 | ZFLS negativer Vergleichswert L1 | - | - | signed int | - | 1 | 1 | 0 |
| 0xb041 | ZFLS ID L2 | 0-n | - | 0xffff | ZFLS_ID_L2 | 1 | 1 | 0 |
| 0xb018 | ZFLS ASIC REQULO | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xb020 | ZFLS ASIC LWS_STATE | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xb021 | ZFLS ASIC DIA1 | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xb022 | ZFLS ASIC DIA2 | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xb023 | ZFLS ASIC MR2_STATE | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xb039 | ZFLS min Diff zwischen pos und neg Vergleichswert | - | - | signed int | - | 1 | 1 | 0 |
| 0xb040 | ZFLS max Diff zwischen pos und neg Vergleichswert | - | - | signed int | - | 1 | 1 | 0 |
| 0xb042 | ZFLS Rotorgeschwindigkeit | 1/min | - | signed int | - | 1 | 1 | 0 |
| 0xb043 | ZFLS interner Lenkwinkel | ° | - | unsigned int | - | 1 | 1 | 0 |
| 0xb048 | ZFLS Indexsignal | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb060 | ZFLS SoH Counter | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb061 | ZFLS SoC Counter | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0c0 | ZFLS Fehlercode | 0-n | - | 0xff | ZFLS_ERRCODE | 1 | 1 | 0 |
| 0xb0c1 | ZFLS Fehlerart | 0-n | - | 0xffff | ZFLS_ERRTYPE | 1 | 1 | 0 |
| 0xb0c2 | ZFLS Statuswort | 0/1 | - | 0xffff | - | 1 | 1 | 0 |
| 0xb0c3 | ZFLS Fehlerhäufigkeit | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0c4 | ZFLS Rückwärtszähler | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xb0c5 | ZFLS Sequenzzähler | dec | - | unsigned char | - | 1 | 1 | 0 |
| 0xb080 | ZFLS LLP AVL_STEA_FTAX_PNI | 0-n | - | 0xffff | LLP16 | 1 | 1 | 0 |
| 0xb081 | ZFLS LLP AVL_PWR_EL_EPS | 0-n | - | 0xff | LLP8 | 1 | 1 | 0 |
| 0xb082 | ZFLS LLP PRD_PWR_EL_EPS | 0-n | - | 0xff | LLP8 | 1 | 1 | 0 |
| 0xb083 | ZFLS LLP FEHLERART | 0-n | - | 0xffff | LLP16 | 1 | 1 | 0 |
| 0xc000 | ZFLS Statuswort: CARB confirmed | 0/1 | - | 0x0100 | - | 1 | 1 | 0 |
| 0xc001 | ZFLS Statuswort: CARB pending | 0/1 | - | 0x0080 | - | 1 | 1 | 0 |
| 0xc002 | ZFLS Statuswort: Schattenfehler | 0/1 | - | 0x0040 | - | 1 | 1 | 0 |
| 0xc003 | ZFLS Statuswort: sporadischer Fehler | 0/1 | - | 0x0020 | - | 1 | 1 | 0 |
| 0xc004 | ZFLS Statuswort: Ersatzfunktion aktiv | 0/1 | - | 0x0010 | - | 1 | 1 | 0 |
| 0xc005 | ZFLS Statuswort: Fehler aktiv | 0/1 | - | 0x0008 | - | 1 | 1 | 0 |
| 0xc006 | ZFLS Statuswort: Fehler im aktuellen Zyklus erkannt | 0/1 | - | 0x0004 | - | 1 | 1 | 0 |
| 0xc007 | ZFLS Statuswort: Störung vorhanden | 0/1 | - | 0x0002 | - | 1 | 1 | 0 |
| 0xc008 | ZFLS Statuswort: Prüfbedingung erreicht | 0/1 | - | 0x0001 | - | 1 | 1 | 0 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_TABELLENSPEICHER_BNE_BATTERIE_LOESCHEN | 0xDBC3 | - | Funktionswerte werden zurückgesetzt | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_TABELLENSPEICHER_BNE_BATTERIE | 0xDBA0 | - | Status der Bordnetzerweiterung lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBA0 |
| STEUERN_LW_OFFSET_RUECKSETZEN | 0xAB81 | - | Lenkwinkel Offset zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_STROEME | 0xDB86 | - | Offset Strom 1 (DUMMY) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB86 |
| STATUS_EPS | 0xDB84 | - | Diverse Stati des EPS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB84 |
| STATUS_ROTORLAGESENSOR | 0xDB83 | - | Rotorlage und Rotordrehzahl | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB83 |
| STEUERN_TAUSCH_ENERGIESPEICHER_REGISTRIEREN | 0xDBBD | - | Nach dem Tausch der 2. Batterie muss dieser im Steuergerät registriert werden. Außerdem werden einige Eingangswerte auf Default gesetzt. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_SW_ENDANSCHLAG_LERNWERTE_SPEICHERN | 0xAB82 | - | Die eingelernten SW-Endanschlagswerte speichern Vorbedingungen: -  SW-Endanschlag ist eingelernt  -  Fahrzeug steht  -  kein Lenkmoment  -  E-Motor steht  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_INPUT_SIGNALE | 0xDB87 | - | Eingangssignale des EPS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB87 |
| STEUERN_LERNWERT_RUECKSETZEN | 0xAB80 | - | Lernwerte zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_MOMENTENSENSOR | 0xDB82 | - | Werte des Momentensensor/Lenkradmoment | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB82 |
| STATUS_OUTPUT_SIGNALE | 0xDB85 | - | Ausgangssignale EPS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB85 |
| STATUS_LW_OFFSET | 0xDB80 | STAT_LW_OFFSET_WERT | Lenkwinkel Offset auslesen | Grad | - | - | int | - | 10000.0 | 228571.0 | - | - | 22 | - | - |
| STATUS_LENKRITZELWINKEL | 0xDB81 | - | Ritzelwinkel, interne und externe Signale | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB81 |
| EPS_DEGRADATIONSMONITOR | 0xDBBF | - | Auslesen Daten Degradationsmonitor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBBF |

### ZFLS_ERRCODE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | FC_TEMPSENS |
| 0x02 | CS_FC_TEM_COMP |
| 0x03 | CS_FC_ROTPOS_SENS1 |
| 0x04 | CS_FC_ROTPOS_SENS2 |
| 0x05 | RB_FC_05 |
| 0x06 | CS_FC_INDEX |
| 0x07 | CS_FC_CSI30 |
| 0x08 | CS_FC_CL220 |
| 0x09 | CS_FC_ROTPOS_LEARN_SENS1 |
| 0x0a | CS_FC_ROTPOS_LEARN_SENS2 |
| 0x0b | CS_FC_IWD |
| 0x0c | CS_FC_TML30 |
| 0x0d | CS_FC_OUTPUTSTAGE |
| 0x0e | CS_FC_RAM |
| 0x0f | CS_FC_FUNCTEST_OPS |
| 0x10 | CS_FC_ADC |
| 0x11 | CS_FC_SMCURR |
| 0x12 | CS_FC_SHUT_DOWN |
| 0x13 | CS_FC_INT_VOLT |
| 0x14 | CS_FC_ROM |
| 0x15 | CS_FC_RKT |
| 0x16 | CS_FC_PWM_VALIDITY_CHECK |
| 0x17 | CS_FC_REGISTER |
| 0x18 | CS_FC_OSV |
| 0x19 | CS_FC_CSI31 |
| 0x1a | CS_FC_CL202 |
| 0x1b | CS_FC_ESPR |
| 0x1c | CS_FC_FLEXRAY |
| 0x1d | RB_FC_29 |
| 0x1e | RB_FC_30 |
| 0x1f | KFC_EEPROMNR |
| 0x20 | KFC_EEPROMHR |
| 0x21 | KFC_STORQUE_0 |
| 0x22 | KFC_STORQUE_1 |
| 0x23 | KFC_SMSPEED |
| 0x24 | KFC_ROTANG |
| 0x25 | KFC_STANGLE |
| 0x26 | KFC_FOR |
| 0x27 | KFC_PROG |
| 0x28 | KFC_STAN_NOCALIB |
| 0x29 | KFC_CAN |
| 0x2a | KFC_GATEWAY |
| 0x2b | KFC_PLA |
| 0x2c | KFC_HYBRID |
| 0x2d | KFC_APPLDATA |
| 0x2e | KFC_HCA |
| 0x2f | KFC_ESP |
| 0x30 | KFC_MOTOR |
| 0x31 | KFC_LAMP |
| 0x32 | KFC_GEARLR |
| 0x33 | KFC_GEARHR |
| 0x34 | KFC_ENDSTOP |
| 0x35 | KFC_LOCK |
| 0x36 | KFC_CR_RED |
| 0x37 | KFC_CCU_RED |
| 0x38 | KFC_UCU_RED |
| 0x39 | KFC_OVERLOAD |
| 0x3a | KFC_OS |
| 0x3b | KFC_UCU |
| 0x3c | KFC_RAM |
| 0x3d | KFC_RUN_TIME |
| 0x3e | KFC_BATTAB |
| 0x3f | KFC_STORQUE |
| 0x40 | KFC_LWSPLAUSI |
| 0x41 | KFC_STORQUE_RAD |
| 0x42 | KFC_COMP_L1 |
| 0x43 | KFC_COMP_L2 |
| 0x44 | KFC_LLP |
| 0x45 | KFC_PS_RES |
| 0x46 | KFC_SEP |
| 0x47 | KFC_FRICTION |
| 0x48 | KFC_CODING |
| 0xXY | KFC nicht definiert |

### ZFLS_ERRTYPE

| WERT | UWTEXT |
| --- | --- |
| 1000 | CS_FT_GEN |
| 1001 | CS_FT_SCP |
| 1002 | CS_FT_SCM |
| 1003 | CS_FT_TMCHA |
| 1004 | CS_FT_WREL |
| 1005 | CS_FT_TIMEOUT |
| 1006 | CS_FT_WR_ERR |
| 1007 | CS_FT_RD_ERR |
| 1008 | CS_FT_WD |
| 1009 | CS_FT_DRIVER |
| 1010 | CS_FT_THIGH |
| 1011 | CS_FT_TLOW |
| 1012 | CS_FT_OC |
| 1013 | CS_FT_ERR_COUNT |
| 1014 | CS_FT_PARITY |
| 1015 | CS_FT_STATIC_ANSWER |
| 1016 | CS_FT_ANSWER_TIMEOUT |
| 1017 | CS_FT_DYN_ANSWER |
| 1018 | CS_FT_WD_OUT |
| 1019 | CS_FT_VCT |
| 1020 | CS_FT_ENA |
| 1021 | CS_FT_PWM |
| 1022 | CS_FT_WCKSM |
| 1023 | CS_FT_RAM |
| 1024 | CS_FT_SMCURR |
| 1025 | CS_FT_SCDL |
| 1026 | CS_FT_DISSPR |
| 1027 | CS_FT_PAS_SCP |
| 1028 | CS_FT_PAS |
| 1029 | CS_FT_DISSPR |
| 1030 | CS_FT_ECC |
| 0 | KFA_GEN |
| 1 | KFA_OC |
| 2 | KFA_THI |
| 3 | KFA_TLOW |
| 4 | KFA_ANGLE |
| 5 | KFA_TMCHA |
| 6 | KFA_WREL |
| 7 | KFA_CC |
| 8 | KFA_STTOHI |
| 9 | KFA_STTOLO |
| 10 | KFA_ERFLAG |
| 11 | KFA_ST |
| 12 | KFA_ST_NODATA |
| 13 | KFA_ST_TEMPTOHIGH |
| 14 | KFA_ST_VOLTTOLOW |
| 15 | KFA_ST_POSNOTFOUND |
| 16 | KFA_PAS |
| 17 | KFA_SEQUENCE |
| 18 | KFA_TIMEOUT |
| 19 | KFA_WR_ER |
| 20 | KFA_RD_ER |
| 21 | KFA_CRC |
| 22 | KFA_EE_INDEX |
| 23 | KFA_EE_UDI |
| 24 | KFA_EE_UDII |
| 25 | KFA_EE_UDIII |
| 26 | KFA_EE_UDIV |
| 27 | KFA_EE_SIC |
| 28 | KFA_EE_PROD |
| 29 | KFA_EE_BAT_AB_ERKENN |
| 30 | KFA_EE_BTG |
| 31 | KFA_EE_ZFLS |
| 32 | KFA_EE_FINAL_CHECK |
| 33 | KFA_EE_TORQUE |
| 34 | KFA_EE_STEERING |
| 35 | KFA_EE_VW |
| 36 | KFA_EE_VWI |
| 37 | KFA_EE_VWII |
| 38 | KFA_EE_VEHICLE_VARIANT |
| 39 | KFA_EE_ADAPTIVE |
| 40 | KFA_EE_SENSOR |
| 41 | KFA_EE_BOSCH1 |
| 42 | KFA_EE_BOSCH2 |
| 43 | KFA_EE_BOSCH3 |
| 44 | KFA_EE_BOSCH4 |
| 45 | KFA_EE_BOSCH5 |
| 46 | KFA_EE_BOSCH6 |
| 47 | KFA_EE_BOSCH7 |
| 48 | KFA_EE_BOSCH8 |
| 49 | KFA_EE_BOSCH9 |
| 50 | KFA_DAMOS |
| 51 | KFA_NOLEARN |
| 52 | KFA_NOCALIB |
| 53 | KFA_NOINIT |
| 54 | KFA_STACK |
| 55 | KFA_LENGTH |
| 56 | KFA_REGISTER |
| 57 | KFA_RUNTIME |
| 58 | KFA_PROGSEQ1TASK |
| 59 | KFA_PROGSEQ10TASK |
| 60 | KFA_CMP1 |
| 61 | KFA_CMP10 |
| 62 | KFA_CMP100 |
| 63 | KFA_WCOMB |
| 64 | KFA_WCKSM |
| 65 | KFA_MCURR |
| 66 | KFA_CI_1 |
| 67 | KFA_CI_2 |
| 68 | KFA_WD_REL |
| 69 | KFA_WD_OUT |
| 70 | KFA_WD_RESP |
| 71 | KFA_RESISTANCE |
| 72 | KFA_TEMP |
| 73 | KFA_SCP |
| 74 | KFA_SCM |
| 75 | KFA_TC |
| 76 | KFA_WD |
| 77 | KFA_DLC |
| 78 | KFA_CNT |
| 79 | KFA_CAN_T |
| 80 | KFA_DRIVER |
| 81 | KFA_TASK_1MS |
| 82 | KFA_TASK_APPL |
| 83 | KFA_BUSOFF |
| 84 | KFA_EE_BOOTMODE_DISPATCHER |
| 85 | KFA_M_FP |
| 86 | KFA_W_FP |
| 87 | KFA_NOCHA |
| 88 | KFA_EE_SCDIAG |
| 89 | KFA_EE_SCADAPT |
| 90 | KFA_EE_RDS_COMP |
| 91 | KFA_EE_ERRM |
| 92 | KFA_EE_ERRM_AMB1 |
| 93 | KFA_EE_ERRM_AMB2 |
| 94 | KFA_EE_SC_ERRM_STATUS |
| 95 | KFA_EE_SC_ERRM_PRI_00 |
| 96 | KFA_EE_SC_ERRM_PRI_01 |
| 97 | KFA_EE_SC_ERRM_PRI_02 |
| 98 | KFA_EE_SC_ERRM_PRI_03 |
| 99 | KFA_EE_SC_ERRM_PRI_04 |
| 100 | KFA_EE_SC_ERRM_PRI_05 |
| 101 | KFA_EE_SC_ERRM_PRI_06 |
| 102 | KFA_EE_SC_ERRM_PRI_07 |
| 103 | KFA_EE_SC_ERRM_PRI_08 |
| 104 | KFA_EE_SC_ERRM_PRI_09 |
| 105 | KFA_EE_SC_ERRM_PRI_10 |
| 106 | KFA_EE_SC_ERRM_PRI_11 |
| 107 | KFA_EE_SC_ERRM_PRI_12 |
| 108 | KFA_EE_SC_ERRM_PRI_13 |
| 109 | KFA_EE_SC_ERRM_PRI_14 |
| 110 | KFA_EE_SC_ERRM_PRI_15 |
| 111 | KFA_EE_SC_ERRM_PRI_16 |
| 112 | KFA_EE_SC_ERRM_PRI_17 |
| 113 | KFA_EE_SC_ERRM_PRI_18 |
| 114 | KFA_EE_SC_ERRM_PRI_19 |
| 115 | KFA_EE_SC_ERRM_SEC_00 |
| 116 | KFA_EE_SC_ERRM_SEC_01 |
| 117 | KFA_EE_SC_ERRM_SEC_02 |
| 118 | KFA_EE_SC_ERRM_SEC_03 |
| 119 | KFA_EE_SC_ERRM_SEC_04 |
| 120 | KFA_EE_SC_ERRM_SEC_05 |
| 121 | KFA_EE_SC_ERRM_SEC_06 |
| 122 | KFA_EE_SC_ERRM_SEC_07 |
| 123 | KFA_EE_SC_ERRM_SEC_08 |
| 124 | KFA_EE_SC_ERRM_SEC_09 |
| 125 | KFA_EE_SC_ERRM_SEC_10 |
| 126 | KFA_EE_SC_ERRM_SEC_11 |
| 127 | KFA_EE_SC_ERRM_SEC_12 |
| 128 | KFA_EE_SC_ERRM_SEC_13 |
| 129 | KFA_EE_SC_ERRM_SEC_14 |
| 130 | KFA_EE_SC_ERRM_SEC_15 |
| 131 | KFA_EE_SC_ERRM_SEC_16 |
| 132 | KFA_EE_SC_ERRM_SEC_17 |
| 133 | KFA_EE_SC_ERRM_SEC_18 |
| 134 | KFA_EE_SC_ERRM_SEC_19 |
| 135 | KFA_ST_WS |
| 136 | KFA_ST_DIFF |
| 137 | KFA_CD_OEM |
| 138 | KFA_CD_ZFLS |
| 139 | KFA_EE_DEGMON |
| 140 | KFA_EE_TEST_AREA_D |
| 141 | KFA_EE_TEST_AREA_S |
| 142 | KFA_EE_TEST_AREA_X |
| 143 | KFA_FLX_OK |
| 144 | KFA_FLX_NOK |
| 145 | KFA_FLX_SEND_ERROR |
| 146 | KFA_FLX_RECEIVE_ERROR |
| 147 | KFA_FLX_FLEXRAY_OFFLINE |
| 148 | KFA_FLX_CRC_ERROR |
| 149 | KFA_FLX_ALIVE_ERROR |
| 150 | KFA_FLX_QUALIFIER_ERROR |
| 151 | KFA_FLX_TIMEOUT_ERROR |
| 152 | KFA_FLX_VALUE_ERROR |
| 0xXXXX | KFA nicht definiert |

### ZFLS_SYS_STATES

| WERT | UWTEXT |
| --- | --- |
| 0x00 | PREDRIVE |
| 0x01 | DRIVEUP |
| 0x02 | DRIVEDOWN |
| 0x03 | FACTORYTEST |
| 0x04 | POSTRUN |
| 0x05 | SERVICE |
| 0x06 | ERROR |
| 0x07 | DIAGMODE |
| 0x08 | OFF |
| 0x0f | PREPREDRIVE |
| 0xXY | anschbieschifeid |

### TAB_0XB0C2

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 0xc000 | 0xc001 | 0xc002 | 0xc003 | 0xc004 | 0xc005 | 0xc006 | 0xc007 | 0xc008 |

### ZFLS_STWORD_FEHLERPRIO

| WERT | UWTEXT |
| --- | --- |
| 0x0 | niedrig |
| 0x1 | nicht ganz so niedrig |
| 0x2 | geht grad so |
| 0x3 | untere Mitte |
| 0x4 | obere Mitte |
| 0x5 | wird langsam ernst |
| 0x6 | fast hoch |
| 0x7 | hoch |

### ZFLS_STWORD_DIAG

| WERT | UWTEXT |
| --- | --- |
| 0x0 | null |
| 0x1 | eins |
| 0x2 | zwei |
| 0x3 | drei |

### ZFLS_ID_L1

| WERT | UWTEXT |
| --- | --- |
| 14685 | Motorregelung FOR |
| 13880 | Aktiver Rücklauf |
| 13882 | Berechnung Unterstützungsmoment |
| 13956 | SW Endanschlag |
| 13961 | Reibungskompensation |
| 13938 | Trägheitskompensation |
| 13428 | Lenkungsregler |
| 14082 | Momentenkoordinator |
| 15413 | Dämpfung bei hohen Drehzahlen |
| 14081 | Momentensensor Aufbereitung (2-kanalig) |
| 15362 | Momentensensor Aufbereitung (1-kanalig) |
| 13559 | Rotorlagesensor Aufbereitung |
| 13964 | Einfriererkennung |
| 14796 | Parklenkassistent |
| 15370 | Heading Control / DSR |
| 15076 | Torque Steer Compensation |
| 14864 | Parkierregler |
| 14785 | Aktive Fahrbahnrückmeldung |
| 0xYYYY | undefined L1 ID |

### ZFLS_ID_L2

| WERT | UWTEXT |
| --- | --- |
| 14622 | Motorregelung FOR |
| 14825 | Aktiver Rücklauf |
| 14744 | Berechnung Unterstützungsmoment |
| 14746 | SW Endanschlag |
| 14751 | Reibungskompensation |
| 14780 | Trägheitskompensation |
| 14745 | Lenkungsregler |
| 14855 | Momentenkoordinator |
| 14857 | Dämpfung bei hohen Drehzahlen |
| 14799 | Momentensensor Aufbereitung |
| 14897 | Rotorlagesensor Aufbereitung |
| 15414 | Einfriererkennung |
| 15491 | Parklenkassistent |
| 15466 | Heading Control / DSR |
| 15493 | Torque Steer Compensation |
| 14866 | Parkierregler |
| 15926 | Aktive Fahrbahnrückmeldung |
| 0xYYYY | undefined L2 ID |

### ZFLS_STATUSWORD

| WERT | TEXT |
| --- | --- |
| 0x0200 | CARB confirmed |
| 0x0100 | CARB pending |
| 0x0080 | Schattenfehler |
| 0x0040 | Fehler wirksam oder Ersatzfunktion aktiv |
| 0x0020 | sporadischer Fehler |
| 0x0010 | Ersatzfunktion aktiv |
| 0x0008 | Fehler aktiv |
| 0x0004 | Fehler im aktuellen Zyklus erkannt |
| 0x0002 | Störung vorhanden |
| 0x0001 | Prüfbedingung erreicht |

### TAB_EPS_LW_STATUS

| WERT | TEXT |
| --- | --- |
| 1 | gültig |
| 0 | ungültig |
| 255 | Signal nicht definiert |

### LLP16

| WERT | UWTEXT |
| --- | --- |
| 0 | . |
| 0xXXXX | . |

### LLP8

| WERT | UWTEXT |
| --- | --- |
| 0 | . |
| 0xXX | . |

### RES_0XDB85

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTERSTUFE_EPS_WERT | - | - | unsigned char | - | - | - | - | - | Ausgabe der aktiven Lüfterstufe: 0;1;2;3;4;5;6;7;8;9;10;11;12;13;14 |
| STAT_FEHLERLAMPE_EPS_EIN | 0-n | - | unsigned char | - | TAB_EPS_LED | - | - | - | Status der Fehlerlampe EPS: 0 = Lampe aus; 1 = Lampe ein; 255 = ungültig |
| STAT_MOTORSOLLMOMENT_WERT | Nm | - | int | - | - | - | 1024.0 | - | Sollmoment des EPS Motor |
| STAT_REDUZIERTES_MOTORSOLLMOMENT_WERT | Nm | - | int | - | - | - | 1024.0 | - | reduziertes Sollmoment des EPS Motor |
| STAT_REDUKTIONSFAKTOR_WERT | % | - | unsigned int | - | - | 100.0 | 32768.0 | - | Reduktionsfaktor |

### TAB_EPS_LED

| WERT | TEXT |
| --- | --- |
| 0 | Lampe aus |
| 1 | Lampe ein |
| 255 | ungültig |

### RES_0XDB82

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKRADMOMENT_MAIN_WERT | Nm | - | int | - | - | - | 68.0 | - | Main Lenkradmoment |
| STAT_LENKRADMOMENT_BACKUP_WERT | Nm | - | int | - | - | - | 68.0 | - | Backup Lenkradmoment |
| STAT_MOMENTENSENSOR | 0-n | - | unsigned char | - | TAB_EPS_MOMENTENSENSOR | - | - | - | Status Momentensensor |

### TAB_EPS_MOMENTENSENSOR

| WERT | TEXT |
| --- | --- |
| 0 | OK |
| 1 | NOK |

### RES_0XDB84

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSTEMSTATUS | 0-n | - | unsigned char | - | TAB_EPS_SYSTEMSTATUS | - | - | - | SW-Systemstatus EPS |
| STAT_VERSORGUNGSSPANNUNG | 0-n | - | unsigned char | - | TAB_EPS_VERSORGUNGSSPANNUNG | - | - | - | Status Versorgungsspannung intern |
| STAT_ZUENDUNG_BERECHNET | 0-n | - | unsigned char | - | TAB_EPS_ZUENDUNG_STATUS | - | - | - | Zündung berechnet |
| STAT_TEMPERATUR_STEUERGERAET_WERT | °C | - | unsigned char | - | - | - | - | -70.0 | Temperatur Steuergerät |
| STAT_DIAGNOSEBEDINGUNG_1 | 0-n | - | unsigned char | - | TAB_EPS_DIAGNOSEBEDINGUNG | - | - | - | Abfrage der FlexRay Diagnosebedingung 1 (DUMMY) |
| STAT_DIAGNOSEBEDINGUNG_2 | 0-n | - | unsigned char | - | TAB_EPS_DIAGNOSEBEDINGUNG | - | - | - | Abfrage der FlexRay Diagnosebedingung 2 (DUMMY) |
| STAT_BUS_OFF | 0-n | - | unsigned char | - | TAB_EPS_FLX | - | - | - | Abfrage FlexRay Bus Off: |
| STAT_FAHRZEUGGESCHWINDIGKEIT_GEFILTERT_WERT | km/h | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkeit gefiltert |
| STAT_SW_ENDANSCHLAG_MITTENOFFSET_WERT | Grad | - | int | - | - | 10000.0 | 28571.0 | - | SW Endanschlag Mittenoffset |
| STAT_SW_ENDANSCHLAG_TOLERANZ_LENKHUB_WERT | Grad | - | unsigned int | - | - | 10000.0 | 28571.0 | - | SW Endanschlag Toleranz Lenkhub |
| STAT_SW_BEZEICHNUNG_ZFLS_WERT | - | - | string[16] | - | - | - | - | - | ZFLS-Bezeichnung |
| STAT_SZE_AKTIV | 0-n | - | unsigned char | - | TAB_EPS_FUNKTIONSABFRAGE | - | - | - | Funktionsabfrage Speicherzustandserkennung |
| STAT_AEP_AKTIV | 0-n | - | unsigned char | - | TAB_EPS_FUNKTIONSABFRAGE | - | - | - | Funktionsabfrage Advanced Electrical Power |
| STAT_SCHNELLE_LENKWINKELKORREKTUR_AKTIV | 0-n | - | unsigned char | - | TAB_EPS_FUNKTIONSABFRAGE | - | - | - | Funktionsabfrage schnelle Lenkwinkelkorrektur |
| STAT_MSA_VORHANDEN | 0-n | - | unsigned char | - | TAB_EPS_VERBAUABFRAGE | - | - | - | Verbauabfrage MSA |
| STAT_MESSIDENTIFIER_DLOG_AKTIV | 0-n | - | unsigned char | - | TAB_EPS_FUNKTIONSABFRAGE | - | - | - | Funktionsabfrage Messidentifier (DLOG) aktiv |
| STAT_SWENDANSCHLAG_AKTIV | 0-n | - | unsigned char | - | TAB_EPS_FUNKTIONSABFRAGE | - | - | - | Funktionsabfrage SW Endanschlag aktiv |
| STAT_LUEFTERANSTEUERUNG_AKTIV | 0-n | - | unsigned char | - | TAB_EPS_FUNKTIONSABFRAGE | - | - | - | Funktionsabfrage Lüfteransteuerung aktiv |
| STAT_SPORTTASTER_VORHANDEN | 0-n | - | unsigned char | - | TAB_EPS_VERBAUABFRAGE | - | - | - | Verbauabfrage Sporttaster |
| STAT_FAHRBAHNRUECKMELDUNG_AKTIV | 0-n | - | unsigned char | - | TAB_EPS_FUNKTIONSABFRAGE | - | - | - | Funktionsabfrage Fahrbahnrückmeldung aktiv |
| STAT_VARIANTENCODIERUNG | 0-n | - | unsigned char | - | TAB_EPS_VARIANTENKODIERUNG | - | - | - | Variantencodierung: tbd |
| STAT_PRODUKTIONSSCHALTER_AKTIV | 0-n | - | unsigned char | - | TAB_EPS_FUNKTIONSABFRAGE | - | - | - | Funktionsabfrage Produktionsschalter aktiv |
| STAT_GETRIEBEVORZEICHEN | 0-n | - | unsigned char | - | TAB_EPS_VORZEICHEN | - | - | - | Getriebevorzeichen LL/RL: LL=positiv; RL=negativ |
| STAT_FEHLERSTATUS_ENDSTUFENTREIBER | 0-n | - | unsigned char | - | TAB_EPS_FEHLERSTATUS_ENSTUFENTREIBER | - | - | - | Fehlerstatus Endstufentreiber |

### TAB_EPS_SYSTEMSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Predrive |
| 0x01 | Driveup |
| 0x02 | Drivedown |
| 0x03 | Factorytest |
| 0x04 | Postrun |
| 0x05 | Service |
| 0x06 | Error |
| 0x07 | Diagmode |
| 0x08 | Off |
| 0x0F | Prepredrive |
| 0xFF | ungültig |

### TAB_EPS_VERSORGUNGSSPANNUNG

| WERT | TEXT |
| --- | --- |
| 0 | NOK |
| 1 | OK |

### TAB_EPS_ZUENDUNG_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | aus |
| 1 | ein |
| FF | ungültig |

### TAB_EPS_DIAGNOSEBEDINGUNG

| WERT | TEXT |
| --- | --- |
| 0 | nicht erfüllt |
| 1 | erfüllt |
| 255 | ungültig |

### TAB_EPS_FLX

| WERT | TEXT |
| --- | --- |
| 0 | FlexRay Bus on |
| 1 | FlexRay Bus off |
| 255 | ungültig |

### TAB_EPS_VERBAUABFRAGE

| WERT | TEXT |
| --- | --- |
| 0 | nicht verbaut |
| 1 | verbaut |
| 255 | ungültig |

### TAB_EPS_VARIANTENKODIERUNG

| WERT | TEXT |
| --- | --- |
| 0 | Variante 0 |
| 1 | Variante 1 |
| 2 | Variante 2 |
| 3 | Variante 3 |
| ff | ungültig |

### TAB_EPS_FUNKTIONSABFRAGE

| WERT | TEXT |
| --- | --- |
| 0 | inaktiv |
| 1 | aktiv |
| 255 | ungültig |

### TAB_EPS_VORZEICHEN

| WERT | TEXT |
| --- | --- |
| 0xfa | negativ |
| 0x2c | positiv |
| 0xXX | ungültig |

### TAB_EPS_FEHLERSTATUS_ENSTUFENTREIBER

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler |
| 1 | Unterspannung |
| 2 | Kurzschluss |
| 3 | Übertemperatur |
| 4 | load dump |
| ff | ungültig |

### RES_0XDB87

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSORGUNGSSPANNUNG_WERT | V | - | unsigned int | - | - | - | 64.0 | - | Versorgungsspannung EPS |
| STAT_ZUENDUNG_EIN | 0-n | - | unsigned char | - | TAB_EPS_ZUENDUNG | - | - | - | Zündungssignal über Flexray |
| STAT_ZUENDUNG | 0-n | - | unsigned char | - | TAB_EPS_GUELTIG | - | - | - | Status Zündung Signal von Flexray |
| STAT_WAKE_UP_AKTIV | 0-n | - | unsigned char | - | TAB_EPS_WAKEUP | - | - | - | Wake Up Signal |
| STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkeit über Flexray |
| STAT_FAHRZEUGGESCHWINDIGKEIT_GUELTIG | 0-n | - | unsigned char | - | TAB_EPS_GUELTIG | - | - | - | Status Fahrzeuggeschwindigkeit von Flexray: |
| STAT_MOTORLAEUFT_SIGNAL | 0-n | - | unsigned char | - | TAB_EPS_MOTORLAEUFT | - | - | - | Motor läuft Signal von Flexray |
| STAT_MOTORLAEUFT_SIGNAL_GUELTIG | 0-n | - | unsigned char | - | TAB_EPS_GUELTIG | - | - | - | Status Motor läuft Signal von Flexray |
| STAT_LENKRITZELWINKEL_WERT | Grad | - | int | - | - | 10000.0 | 228571.0 | - | Lenkritzelwinkel von Flexray |
| STAT_LENKRITZELWINKEL_GUELTIG | 0-n | - | unsigned char | - | TAB_EPS_GUELTIG | - | - | - | Status Signal Lenkritzelwinkel Flexray |
| STAT_GIERRATE_WERT | °/s | - | unsigned int | - | - | 5 | 1000 | -164 | Gierrate von Flexray |
| STAT_GIERRATE_GUELTIG | 0-n | - | unsigned char | - | TAB_EPS_GUELTIG | - | - | - | Status Signal Gierrate Flexray |
| STAT_QUERBESCHLEUNIGUNG_CAN_WERT | m/s² | - | unsigned int | - | - | 2 | 1000 | -65 | Querbeschleunigung von Flexray |
| STAT_QUERBESCHLEUNIGUNG | 0-n | - | unsigned char | - | TAB_EPS_GUELTIG | - | - | - | Status Signal Querbeschleunigung Flexray |

### TAB_EPS_ZUENDUNG

| WERT | TEXT |
| --- | --- |
| 0 | Zündung aus |
| 1 | Zündung ein |
| 255 | nicht definiert |

### TAB_EPS_WAKEUP

| WERT | TEXT |
| --- | --- |
| 0 | Wake Up Signal inaktiv |
| 1 | Wake Up Signal aktiv |
| 255 | nicht definiert |

### TAB_EPS_MOTORLAEUFT

| WERT | TEXT |
| --- | --- |
| 0 | Motor läuft nicht |
| 1 | Motor läuft |
| 255 | nicht definiert |

### TAB_EPS_GUELTIG

| WERT | TEXT |
| --- | --- |
| 0 | Signal ungültig |
| 1 | Signal gültig |
| 255 | nicht definiert |

### RES_0XDB81

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKRITZELWINKEL_FLX_WERT | Grad | - | int | - | - | 10000.0 | 228571.0 | - | Lenkritzelwinkel von Flexray eingelesen |
| STAT_LENKRITZELWINKEL_FLX_STATUS | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | Statusabfrage Ritzelwinkel via Flexray gültig |
| STAT_LENKRITZELWINKELTREIBER_TEXT | 0-n | - | unsigned char | - | TAB_EPS_LENKWINKELTREIBER | - | - | - | Statusabfrage Ritzelwinkeltreiber Flexray |
| STAT_INTERNER_LENKRITZELWINKEL_WERT | Grad | - | int | - | - | 10000.0 | 228571.0 | - | SG interner Lenkritzelwinkel |
| STAT_LENKRITZELWINKEL_NICHT_KORRIGIERT_WERT | Grad | - | int | - | - | 10000.0 | 228571.0 | - | nicht korrigierter Lenkritzelwinkel |
| STAT_LENKRITZELWINKEL_KORRIGIERT_WERT | Grad | - | int | - | - | 10000.0 | 228571.0 | - | korrigierter Lenkritzelwinkel |
| STAT_LENKRITZELWINKEL_LANGZEITKORREKTUR_WERT | Grad | - | int | - | - | 10000.0 | 228571.0 | - | Langzeit korrigierter Lenkradwinkel |
| STAT_LENKRITZELWINKEL_KURZZEITKORREKTUR_WERT | Grad | - | int | - | - | 10000.0 | 228571.0 | - | Kurzzeit korrigierter Lenkritzelwinkel |
| STAT_LENKRITZELWINKELGESCHWINDIGKEIT_WERT | Grad/s | - | int | - | - | - | 2.0 | - | interne Lenkritzelwinkelgeschwindigkeit |

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

### TAB_EPS_LENKWINKELTREIBER

| WERT | TEXT |
| --- | --- |
| 0 | NOK |
| 1 | OK |

### RES_0XDB86

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORSTROM_1_WERT | A | - | int | - | - | - | 64.0 | - | Motorstrom 1 |
| STAT_MOTORSTROM_2_WERT | A | - | int | - | - | - | 64.0 | - | Motorstrom 2 |
| STAT_MOTORSTROM_3_WERT | A | - | int | - | - | - | 64.0 | - | Motorstrom 3 |
| STAT_OFFSET_STROM_1_WERT | A | - | int | - | - | - | - | - | Offset Strom 1 (DUMMY) |
| STAT_OFFSET_STROM_2_WERT | A | - | int | - | - | - | - | - | Offset Strom 2 (DUMMY) |
| STAT_OFFSET_STROM_3_WERT | A | - | int | - | - | - | - | - | Offset Strom 3 (DUMMY) |

### RES_0XDB83

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROTORDREHZAHL_WERT | 1/min | - | int | - | - | - | - | - | Rotordrehzahl |
| STAT_ROTORLAGE_WERT | Grad | - | int | - | - | 180.0 | 3217.0 | - | Rotorlage |

### RES_0XDBA0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_SOH | 0-n | - | unsigned int | - | - | - | - | - | Alterungsgrad der BNE Batterie; 0 - 255 |
| STAT_ZAEHLER_SOC | 0-n | - | unsigned int | - | - | - | - | - | Ladezustand der BNE Batterie; 0 - 255 |
| STAT_BIT_SOC_GELADEN | 0/1 | - | char | - | - | - | - | - | Bit Ladezustand Werksprozess der BNE Batterie; 0 = nicht geladen; 1 = geladen |
| STAT_ZAEHLER_SOC_LETZTER_STAND | 0-n | - | int | - | - | - | - | - | Bit Ladezustand der BNE Batterie letzter Wert; 0 - 255 |
| STAT_ZAEHLER_SOC_VOR_1_START | 0-n | - | int | - | - | - | - | - | Ladezustand der BNE Batterie vor dem 1. Start |
| STAT_ZAEHLER_SOC_VOR_2_START | 0-n | - | int | - | - | - | - | - | Ladezustand der BNE Batterie vor dem 2. Start |
| STAT_ZAEHLER_SOC_VOR_3_START | 0-n | - | int | - | - | - | - | - | Ladezustand der BNE Batterie vor dem 3. Start |
| STAT_ZAEHLER_SOC_VOR_4_START | 0-n | - | int | - | - | - | - | - | Ladezustand der BNE Batterie vor dem 4. Start |
| STAT_KM_ZAEHLR_SOC_LETZTER_START | 0-n | - | int | - | - | - | - | - | Kilometerstand Ladezustand der BNE Batterie letzter Wert |
| STAT_KM_ZAEHLR_SOC_VOR_1_START | 0-n | - | int | - | - | - | - | - | Kilometerstand Ladezustand der BNE Batterie vor dem 1. Start |
| STAT_KM_ZAEHLR_SOC_VOR_2_START | 0-n | - | int | - | - | - | - | - | Kilometerstand Ladezustand der BNE Batterie vor dem 2. Start |
| STAT_KM_ZAEHLR_SOC_VOR_3_START | 0-n | - | int | - | - | - | - | - | Kilometerstand Ladezustand der BNE Batterie vor dem 3. Start |
| STAT_KM_ZAEHLR_SOC_VOR_4_START | 0-n | - | int | - | - | - | - | - | Kilometerstand Ladezustand der BNE Batterie vor dem 4. Start |
| STAT_ZAEHLER_SOH_LETZTER_START | 0-n | - | int | - | - | - | - | - | Alterungsgrad der BNE Batterie letzter Wert |
| STAT_ZAEHLER_SOH_VOR_1_START | 0-n | - | int | - | - | - | - | - | Alterungsgrad der BNE Batterie vor dem 1. Start |
| STAT_ZAEHLER_SOH_VOR_2_START | 0-n | - | int | - | - | - | - | - | Alterungsgrad der BNE Batterie vor dem 2. Start |
| STAT_ZAEHLER_SOH_VOR_3_START | 0-n | - | int | - | - | - | - | - | Alterungsgrad der BNE Batterie vor dem 3. Start |
| STAT_ZAEHLER_SOH_VOR_4_START | 0-n | - | int | - | - | - | - | - | Alterungsgrad der BNE Batterie vor dem 4. Start |
| STAT_KM_ZAEHLER_SOH_LETZTER_START | 0-n | - | int | - | - | - | - | - | Kilometerstand Alterungsgrad der BNE Batterie letzter Wert |
| STAT_KM_ZAEHLER_SOH_VOR_1_START | 0-n | - | int | - | - | - | - | - | Kilometerstand Alterungsgrad der BNE Batterie vor dem 1. Start |
| STAT_KM_ZAEHLER_SOH_VOR_2_START | 0-n | - | int | - | - | - | - | - | Kilometerstand Alterungsgrad der BNE Batterie vor dem 2. Start |
| STAT_KM_ZAEHLER_SOH_VOR_3_START | 0-n | - | int | - | - | - | - | - | Kilometerstand Alterungsgrad der BNE Batterie vor dem 3. Start |
| STAT_KM_ZAEHLER_SOH_VOR_4_START | 0-n | - | int | - | - | - | - | - | Kilometerstand Alterungsgrad der BNE Batterie vor dem 4. Start |
| STAT_KM_STAND_LETZTER_BATTERIETAUSCH | 0-n | - | int | - | - | - | - | - | Kilometerstand letzter Batterietausch |
| STAT_KM_STAND_LETZTER_BATTERIETAUSCH_2 | 0-n | - | int | - | - | - | - | - | Kilometerstand vorletzter Batterietausch |
| STAT_KM_STAND_LETZTER_BATTERIETAUSCH_3 | 0-n | - | int | - | - | - | - | - | Kilometerstand drittletzter Batterietausch |
| STAT_KM_STAND_LETZTER_BATTERIETAUSCH_4 | 0-n | - | int | - | - | - | - | - | Kilometerstand viertletzter Batterietausch |
| STAT_KM_STAND_LETZTER_BATTERIETAUSCH_5 | 0-n | - | int | - | - | - | - | - | Kilometerstand fünftletzter Batterietausch |
| STAT_HIS_U_KL_11_2 | 0-n | - | int | - | - | - | - | - | Histogramm Spannung BNE Batterie kleiner 11,2 V |
| STAT_HIS_U_KL_11_2_11_8 | 0-n | - | int | - | - | - | - | - | Histogramm Spannung BNE Batterie 11,2 V - 11,8 V |
| STAT_HIS_U_KL_11_8_12_4 | 0-n | - | int | - | - | - | - | - | Histogramm Spannung BNE Batterie 11,8 V - 12,4 V |
| STAT_HIS_U_KL_12_4_13_0 | 0-n | - | int | - | - | - | - | - | Histogramm Spannung BNE Batterie 12,4 V - 13,0 V |
| STAT_HIS_U_KL_13_0_13_6 | 0-n | - | int | - | - | - | - | - | Histogramm Spannung BNE Batterie 13,0 V - 13,6 V |
| STAT_HIS_U_KL_13_6_14_2 | 0-n | - | int | - | - | - | - | - | Histogramm Spannung BNE Batterie 13,6 V - 14,2 V |
| STAT_HIS_U_KL_GROESSER_14_2 | 0-n | - | int | - | - | - | - | - | Histogramm Spannung BNE Batterie grösser 14,2 V |

### RES_0XDBBF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KILOMETERSTAND_1_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand Eintrag 1 |
| STAT_SYSTEMZEIT_1_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit Eintrag 1 |
| STAT_ZEIT_MOTORSTART_1_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit seit Motorstart Eintrag 1 |
| STAT_TEMPERATUR_BATTERIE_1_WERT | °C | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Batterietemperatur Eintrag 1 |
| STAT_SPANNUNG_BATTERIE_1_WERT | V | - | unsigned long | - | - | 1.0 | 64.0 | 0.0 | Batteriespannung (Outputstage) Eintrag 1 |
| STAT_DEGRADTION_MAX_1_WERT | % | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Degradation Eintrag 1  |
| STAT_LENKWINKELAENDERUNG_1_WERT | ° | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Änderung Lenkwinkel Eintrag 1 |
| STAT_LENKWINKELGESCHWINDIGKEIT_MAX_1_WERT | °/s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | maximale Lenkwinkelgeschwindigkeit Eintrag 1 |
| STAT_SPANNUNG_MIN_1_WERT | V | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimale Spannung Eintrag 1 |
| STAT_GESCHWINDIGKEIT_MIN_1_WERT | km/h | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimale Geschwindigkeit Eintrag 1 |
| STAT_URSACHE_1_WERT | HEX | - | unsigned long | - | - | - | - | - | Ursache Degradation Eintrag 1 |
| STAT_BEGRENZUNG_1_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Begrenzung Motorenmoment Eintrag 1 |
| STAT_KILOMETERSTAND_2_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand Eintrag 2 |
| STAT_SYSTEMZEIT_2_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit Eintrag 2 |
| STAT_ZEIT_MOTORSTART_2_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit seit Motorstart Eintrag 2 |
| STAT_TEMPERATUR_BATTERIE_2_WERT | °C | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Batterietemperatur Eintrag 2 |
| STAT_SPANNUNG_BATTERIE_2_WERT | V | - | unsigned long | - | - | 1.0 | 64.0 | 0.0 | Batteriespannung (Outputstage) Eintrag 2 |
| STAT_DEGRADTION_MAX_2_WERT | % | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Degradation Eintrag 2 |
| STAT_LENKWINKELAENDERUNG_2_WERT | ° | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Änderung Lenkwinkel Eintrag 2 |
| STAT_LENKWINKELGESCHWINDIGKEIT_MAX_2_WERT | °/s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | maximale Lenkwinkelgeschwindigkeit Eintrag 2 |
| STAT_SPANNUNG_MIN_2_WERT | V | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimale Spannung Eintrag 2 |
| STAT_GESCHWINDIGKEIT_MIN_2_WERT | km/h | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimale Geschwindigkeit Eintrag 2 |
| STAT_URSACHE_2_WERT | HEX | - | unsigned long | - | - | - | - | - | Ursache Degradation Eintrag 2 |
| STAT_BEGRENZUNG_2_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Begrenzung Motorenmoment Eintrag 2 |
| STAT_KILOMETERSTAND_3_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand Eintrag 3 |
| STAT_SYSTEMZEIT_3_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit Eintrag 3 |
| STAT_ZEIT_MOTORSTART_3_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit seit Motorstart Eintrag 3 |
| STAT_TEMPERATUR_BATTERIE_3_WERT | °C | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Batterietemperatur Eintrag 3 |
| STAT_SPANNUNG_BATTERIE_3_WERT | V | - | unsigned long | - | - | 1.0 | 64.0 | 0.0 | Batteriespannung (Outputstage) Eintrag 3 |
| STAT_DEGRADTION_MAX_3_WERT | % | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Degradation Eintrag 3 |
| STAT_LENKWINKELAENDERUNG_3_WERT | ° | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Änderung Lenkwinkel Eintrag 3 |
| STAT_LENKWINKELGESCHWINDIGKEIT_MAX_3_WERT | °/s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | maximale Lenkwinkelgeschwindigkeit Eintrag 3 |
| STAT_SPANNUNG_MIN_3_WERT | V | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimale Spannung Eintrag 3 |
| STAT_GESCHWINDIGKEIT_MIN_3_WERT | km/h | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimale Geschwindigkeit Eintrag 3 |
| STAT_URSACHE_3_WERT | HEX | - | unsigned long | - | - | - | - | - | Ursache Degradation Eintrag 3 |
| STAT_BEGRENZUNG_3_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Begrenzung Motorenmoment Eintrag 3 |
| STAT_KILOMETERSTAND_4_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand Eintrag 4 |
| STAT_SYSTEMZEIT_4_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit Eintrag 4 |
| STAT_ZEIT_MOTORSTART_4_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit seit Motorstart Eintrag 4 |
| STAT_TEMPERATUR_BATTERIE_4_WERT | °C | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Batterietemperatur Eintrag 4 |
| STAT_SPANNUNG_BATTERIE_4_WERT | V | - | unsigned long | - | - | 1.0 | 64.0 | 0.0 | Batteriespannung (Outputstage) Eintrag 4 |
| STAT_DEGRADTION_MAX_4_WERT | % | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Degradation Eintrag 4 |
| STAT_LENKWINKELAENDERUNG_4_WERT | ° | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Änderung Lenkwinkel Eintrag 4 |
| STAT_LENKWINKELGESCHWINDIGKEIT_MAX_4_WERT | °/s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | maximale Lenkwinkelgeschwindigkeit Eintrag 4 |
| STAT_SPANNUNG_MIN_4_WERT | V | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimale Spannung Eintrag 4 |
| STAT_GESCHWINDIGKEIT_MIN_4_WERT | km/h | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimale Geschwindigkeit Eintrag 4 |
| STAT_URSACHE_4_WERT | HEX | - | unsigned long | - | - | - | - | - | Ursache Degradation Eintrag 4 |
| STAT_BEGRENZUNG_4_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Begrenzung Motorenmoment Eintrag 4 |
| STAT_KILOMETERSTAND_5_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand Eintrag 5 |
| STAT_SYSTEMZEIT_5_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit Eintrag 5 |
| STAT_ZEIT_MOTORSTART_5_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit seit Motorstart Eintrag 5 |
| STAT_TEMPERATUR_BATTERIE_5_WERT | °C | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Batterietemperatur Eintrag 5 |
| STAT_SPANNUNG_BATTERIE_5_WERT | V | - | unsigned long | - | - | 1.0 | 64.0 | 0.0 | Batteriespannung (Outputstage) Eintrag 5 |
| STAT_DEGRADTION_MAX_5_WERT | % | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Degradation Eintrag 5 |
| STAT_LENKWINKELAENDERUNG_5_WERT | ° | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Änderung Lenkwinkel Eintrag 5 |
| STAT_LENKWINKELGESCHWINDIGKEIT_MAX_5_WERT | °/s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | maximale Lenkwinkelgeschwindigkeit Eintrag 5 |
| STAT_SPANNUNG_MIN_5_WERT | V | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimale Spannung Eintrag 5 |
| STAT_GESCHWINDIGKEIT_MIN_5_WERT | km/h | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimale Geschwindigkeit Eintrag 5 |
| STAT_URSACHE_5_WERT | HEX | - | unsigned long | - | - | - | - | - | Ursache Degradation Eintrag 5 |
| STAT_BEGRENZUNG_5_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Begrenzung Motorenmoment Eintrag 5 |
