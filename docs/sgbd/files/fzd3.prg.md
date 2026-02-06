# fzd3.prg

## General

|  |  |
| --- | --- |
| File | fzd3.prg |
| Type | PRG |
| Jobs | 42 |
| Tables | 122 |
| Origin | BMW EI-61 Herter |
| Revision | 1.160 |
| Author | Delphi PE/SW van_der_Linde, Delphi PE/SW Pessara, Delphi PE/SW |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Funktionszentrum-Dach |  |  |
| ORIGIN | string | BMW EI-61 Herter |  |  |
| REVISION | string | 1.160 |  |  |
| AUTHOR | string | Delphi PE/SW van_der_Linde, Delphi PE/SW Pessara, Delphi PE/SW  |  |  |
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

### STATUS_ALARMSPEICHER

Alarmspeicherspeicher lesen (alle Alarme) UDS  : $22 ReadDataByIdentifier UDS  : $FD DID_MSB UDS  : $DC DID_LSB

_No arguments._

### STATUS_BEWERTUNG_KENNLINIEN

Auslesen der gespeicherten Kennlinien/Adaptionsdaten fuer den Einklemmschutz

| Name | Type | Description |
| --- | --- | --- |
| BAUREIHE | string | Auswahl der Baureihe F01, F02, F03, F04, F07, F10, RR4 |
| ELEMENT | string | FA:  Fenster Fahrerseite BF:  Fenster Beifahrerseite FAH: Fenster Fahrerseite hinten BFH: Fenster Beifahrerseite hinten SHD: Schiebedach ESH: Elektrischer Schiebehimmel |
| KENNLINIE | int | optional: nur für SHD und ESH 1: Schieben 2: Heben bzw. Zwangsspalt |

### SHD_VERFAHREN_ANLIEFERPOS

Move Sunroof to delivery position with service SHD_POSITION_ANFAHREN

| Name | Type | Description |
| --- | --- | --- |
| BAUREIHE | string | Auswahl der Baureihe F01, F02, F07, F10, F11, F25, RR4 |

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
| 0x4C00 | Klimabedienteil | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
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
| 0x0066 | Valeo SA |
| 0x0067 | Defond Holding / BJAutomotive |
| 0x0068 | Industrie Saleri S. p. A. |
| 0x0069 | ROHM Semiconductor GmbH |
| 0x0070 | Alfmeier AG |
| 0x0071 | Sanden Corporation |
| 0x0072 | Huf Hülsbeck & Fürst GmbH&Co KG |
| 0x0073 | ebm-papst St. Georgen GmbH&Co. KG |
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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Diebstahlwarnanlage, Innenlicht: dekativiert |
| 0x01 | Spezieller Energiesparmode | Diebstahlwarnanlage, Innenlicht: dekativiert |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | Diebstahlwarnanlage, Innenlicht: dekativiert |
| 0x04 | Betriebsmode 4 | Diebstahlwarnanlage, Innenlicht: dekativiert |
| 0x05 | Betriebsmode 5 | Diebstahlwarnanlage, Innenlicht: dekativiert |
| 0x06 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x025600 | Energiesparmode aktiv | 0 |
| 0x02FF56 | Diagnosemaster Test-DTC Applikation | 0 |
| 0x030200 | SHD, Relais Öffnen, fehlende Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030201 | SHD, Relais Schliessen, keine Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030202 | SHD, Relais Öffnen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030203 | SHD, Relais Schliessen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030205 | SHD, Hallelement A: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030206 | SHD, Hallelement B: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030207 | SHD, Hallelemente A und B: Motoreinheit defekt oder Leitungsunterbrechung | 0 |
| 0x030209 | SHD, Hallelemente A und B: Kurzschluss zwischen Zuleitung oder Motoreinheit defekt | 0 |
| 0x03020A | SHD, Hallelement A: Kurzschluss nach Masse | 0 |
| 0x03020B | SHD, Hallelement B: Kurzschluss nach Masse | 0 |
| 0x03020C | SHD, Hallelement A: Kurzschluss nach Ubatt | 0 |
| 0x03020D | SHD, Hallelement B: Kurzschluss nach Ubatt | 0 |
| 0x03020E | SHD, Hallelement A: Leitungsunterbrechung | 0 |
| 0x03020F | SHD, Hallelement B: Leitungsunterbrechung | 0 |
| 0x030210 | SHD, Hallelemente zeigen fallsche Drehrichtung: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030212 | SHD: Timeout Ansteuerung, keine Blockerkennung | 0 |
| 0x030213 | SHD: Position fehlerhaft, Normierungsverlust | 0 |
| 0x030215 | SHD: ungültige Kennlinie, keine Normierung vorhanden | 0 |
| 0x030280 | ESH, Relais Öffnen, fehlende Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030281 | ESH, Relais Schliessen, keine Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030282 | ESH, Relais Öffnen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030283 | ESH, Relais Schliessen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030285 | ESH, Hallelement A: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030286 | ESH, Hallelement B: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030287 | ESH, Hallelemente A und B: Motoreinheit defekt oder Leitungsunterbrechung | 0 |
| 0x030289 | ESH, Hallelemente A und B: Kurzschluss zwischen Zuleitung oder Motoreinheit defekt | 0 |
| 0x03028A | ESH, Hallelement A: Kurzschluss nach Masse | 0 |
| 0x03028B | ESH, Hallelement B: Kurzschluss nach Masse | 0 |
| 0x03028C | ESH, Hallelement A: Kurzschluss nach Ubatt | 0 |
| 0x03028D | ESH, Hallelement B: Kurzschluss nach Ubatt | 0 |
| 0x03028E | ESH, Hallelement A: Leitungsunterbrechung | 0 |
| 0x03028F | ESH, Hallelement B: Leitungsunterbrechung | 0 |
| 0x030290 | ESH, Hallelemente zeigen falsche Drehrichtung: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030292 | ESH: Timeout Ansteuerung, keine Blockerkennung | 0 |
| 0x030293 | ESH: Ungültige Position, Normierungsverlust | 0 |
| 0x030295 | ESH: ungültige Kennlinie, keine Normierung vorhanden | 0 |
| 0x801A00 | Diebstahlwarnanlage, Ultraschallsensorik: ein oder zwei Kanäle defekt | 0 |
| 0x801A01 | Diebstahlwarnanlage: LED oder Leitung LED Kurzschluss nach Plus | 0 |
| 0x801A02 | Kodierdaten: Steuergerät ist nicht  codiert | 0 |
| 0x801A03 | Schiebe-Hebe-Dach: Bedienschalter: unzulässige Kombination der Schaltereingänge | 0 |
| 0x801A04 | Kodierdaten: Prüfsummenfehler | 0 |
| 0x801A05 | Kodierdaten: Fehler während Codierdaten-Transaktion aufgetreten | 0 |
| 0x801A06 | Kodierdaten: Signatur über Nettocodierdaten ungültig | 0 |
| 0x801A07 | Kodierdaten: Steuergerät ist nicht für das Fahrzeug kodiert in welchem es verbaut ist | 0 |
| 0x801A08 | Kodierdaten: Die während einer Codierdaten-Transaktion gesendeten Daten sind unplausibel | 0 |
| 0x801A0A | EEPROM: Schreibfehler | 0 |
| 0x801A0B | EEPROM: Lesefehler | 0 |
| 0x801A0C | EEPROM: Fehler Ablaufsteuerung | 0 |
| 0x801A0D | EEPROM: Löschfehler | 0 |
| 0x801A0E | EEPROM: Schreibfehler „alle Blöcke schreiben“ | 0 |
| 0x801A0F | EEPROM: Lesefehler „alle Blöcke lesen“ | 0 |
| 0x801A10 | EEPROM: ID  ungültig | 0 |
| 0x801A22 | Leselicht vorn rechts: Kurzschluss nach Masse | 0 |
| 0x801A24 | Leselicht vorn links: Kurzschluss nach Masse | 0 |
| 0x801A26 | Leselicht hinten rechts: Kurzschluss nach Masse | 0 |
| 0x801A27 | Leselicht hinten rechts: Leitungsbruch oder Leuchtmittel defekt | 0 |
| 0x801A28 | Leselicht hinten links: Leitungsbruch oder Leuchtmittel defekt | 0 |
| 0x801A29 | Leselicht hinten links: Kurzschluss nach Masse | 0 |
| 0x801A2A | Make-Up Beleuchtung vorne rechts: Kurzschluss nach Masse | 0 |
| 0x801A2C | Make-Up Beleuchtung vorne links: Kurzschluss nach Masse | 0 |
| 0x801A2E | Make-Up Beleuchtung hinten rechts: Kurzschluss nach Masse | 0 |
| 0x801A30 | Make-Up Beleuchtung hinten links: Kurzschluss nach Masse | 0 |
| 0x801A32 | Schiebe-Hebe-Dach, Bedienschalter: Taster hängt | 0 |
| 0x801A33 | Leselicht vorn links: Taster hängt | 0 |
| 0x801A34 | Leselicht vorn rechts: Taster hängt | 0 |
| 0x801A35 | Leselicht hinten links: Taster hängt | 0 |
| 0x801A36 | Leselicht hinten rechts: Taster hängt | 0 |
| 0x801A37 | Programmspeicher: Prüfsummenfehler | 0 |
| 0x801A4D | SINE: EEPROM fehlerhaft | 0 |
| 0x801A4E | SINE: Aktiver Schutz fehlerhaft | 0 |
| 0x801A4F | SINE: Aufweckzeit fehlerhaft | 0 |
| 0x801A50 | SINE: Sirenenschaltkreis defekt | 0 |
| 0x801A51 | SINE: Neigungsgeber defekt | 0 |
| 0x801A52 | SINE: Kodierdaten Schreibfehler | 0 |
| 0x801A53 | SINE: Kodierdaten Lesefehler | 0 |
| 0x801A54 | Diebstahlwarnanlage: DWA-LED: Kurzschluß nach Masse | 0 |
| 0x801a56 | Temperatursensor 1 defekt | 0 |
| 0x801a57 | Temperatursensor 2 defekt | 0 |
| 0x801a58 | LIN-Bus Kurzschluss nach Masse | 0 |
| 0x801a59 | Leselicht vorn links: Taster toggelt | 0 |
| 0x801a5a | Leselicht vorn rechts: Taster toggelt | 0 |
| 0x801a5b | Leselicht hinten links: Taster toggelt | 0 |
| 0x801a5c | Leselicht hinten rechts: Taster toggelt | 0 |
| 0xDE8468 | Body-CAN Control Module Bus OFF | 0 |
| 0xDE8C5E | LIN Sine, Kommunikationsfehler | 0 |
| 0xDE9430 | Systemzeit für DEM konnte nicht initialisiert werden (keine Systemzeit empfangen) | 0 |
| 0x030216 | SHD: Kein Motorstart wegen Übertemperatur | 1 |
| 0x030217 | SHD: Motorlauf wegen Übertemperatur unterbrochen | 1 |
| 0x030218 | SHD: Kein Motorstart wegen Überspannung/Unterspannung | 1 |
| 0x03021C | SHD: Keine Initialisierung aufgrund ungültiger Randbedingungen | 1 |
| 0x03021D | SHD: Abschaltung Hallvorsorgung wegen Überspannung | 1 |
| 0x03021E | SHD: Motoransteuerung nicht möglich,  keine Spannung am Relaiseingang | 1 |
| 0x030296 | ESH: Kein Motorstart wegen Übertemperatur | 1 |
| 0x030297 | ESH: Motorlauf wegen Übertemperatur unterbrochen | 1 |
| 0x030298 | ESH: Kein Motorstart wegen Überspannung/Unterspannung | 1 |
| 0x03029C | ESH: Keine Initialisierung aufgrund ungültiger Randbedingungen | 1 |
| 0x801A38 | Unterspannung | 1 |
| 0x801A39 | Überspannung | 1 |
| 0x801A3A | DWA-Alarm, Details im Alarmspeicher | 1 |
| 0x801A4A | Deaktivierung IRS und Neigungsgeber per Kundenfunktion | 1 |
| 0x801A4B | SINE: Externe Versorgung Unterspannung | 1 |
| 0x801A4C | SINE: Interne Versorgung Unterspannung | 1 |
| 0x801a55 | Abschaltung Lasten wegen Übertemperatur | 1 |
| 0x801a5d | CAN-Eingangssignal ST_STSR_ENB per Diagnose übersteuert | 1 |
| 0x801a5e | SHD: Schlafbereitschaft per Diagnose abgeschaltet | 1 |
| 0x801a5f | SHD: Thermoschutz per Diagnose abgeschaltet | 1 |
| 0x801a60 | ESH: Thermoschutz per Diagnose abgeschaltet | 1 |
| 0x801a61 | SHD: Freigabe des Panikmodus per Diagnose erzwungen | 1 |
| 0x801a62 | SHD: Einklemmschutz per Diagnose abgeschaltet | 1 |
| 0x801a63 | ESH: Einklemmschutz per Diagnose abgeschaltet | 1 |
| 0xDE8BFF | Diagnosemaster Test-DTC Netzwerk | 1 |
| 0xDE9400 | Botschaft (2CA, Aussentemperatur): Ausfall | 1 |
| 0xDE9403 | Botschaft (256, Challenge Passive Access): Ausfall | 1 |
| 0xDE9406 | Botschaft (3F9, Daten Antriebsstrang 2): Ausfall | 1 |
| 0xDE9409 | Botschaft (202, Dimmung): Ausfall | 1 |
| 0xDE940C | Botschaft (388, Fahrzeugtyp): Ausfall | 1 |
| 0xDE940F | Botschaft (3A0, Fahrzeugzustand): Ausfall | 1 |
| 0xDE9412 | Botschaft (1A1, Geschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xDE9415 | Botschaft (12F, Klemmen): Ausfall | 1 |
| 0xDE9418 | Botschaft (3D6, Konfiguration DWA CKM): Ausfall | 1 |
| 0xDE941B | Botschaft (3AC, Nachlaufzeit Klemme 30 fehlergesteuert): Ausfall | 1 |
| 0xDE941E | Botschaft (3B8, Position Fenterheber BFT): Ausfall | 1 |
| 0xDE9421 | Botschaft (3B9, Position Fenterheber BFTH): Ausfall | 1 |
| 0xDE9424 | Botschaft (3B6, Position Fenterheber FAT): Ausfall | 1 |
| 0xDE9427 | Botschaft (3B7, Position Fenterheber FATH): Ausfall | 1 |
| 0xDE942A | Botschaft (226, Regensensor Wischergeschwindigkeit): Ausfall | 1 |
| 0xDE942D | Botschaft (328, Relativzeit): Ausfall | 1 |
| 0xDE9433 | Botschaft (23A, Status Funkschlüssel): Ausfall | 1 |
| 0xDE9436 | Botschaft (32E, Status Klima Interne Regelinfo): Ausfall | 1 |
| 0xDE9439 | Botschaft (2F0, Status Klima Standfunktion): Ausfall | 1 |
| 0xDE943C | Botschaft (0F2, Status Zentralverriegelung): Ausfall | 1 |
| 0xDE943F | Botschaft (284, Steuerung Fernstart Sicherheitsfahrzeug): Ausfall | 1 |
| 0xDE9442 | Botschaft (26E, Steuerung FH/SHD Zentrale (Komfort)): Ausfall | 1 |
| 0xDE9445 | Botschaft (2F6, Steuerung Licht): Ausfall | 1 |
| 0xDE9448 | Botschaft (2F8, Uhrzeit/Datum): Ausfall | 1 |
| 0xDE944B | Botschaft (2FC, ZV und Klappenzustand): Ausfall | 1 |
| 0xDE944C | Botschaft (242, Status Klima Front): Ausfall | 1 |
| 0xDE944E | Botschaft (97, Status Precrash Master): Ausfall | 1 |
| 0xDE9450 | Botschaft (97, CRC error in Status Precrash Master): Ausfall | 1 |
| 0xDE9451 | Botschaft (19B, Status Steuerung Crash): Ausfall | 1 |
| 0xDE9453 | Botschaft (19B, CRC error in Steuerung Crash): Ausfall | 1 |
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
| 0x4000 | SUB-Tabelle | 0/1 | - | 0xFFFFFFFF | - | - | - | - |
| 0x4001 | SUB-Tabelle | 0/1 | - | 0xFFFF | - | - | - | - |
| 0x0001 | Position Fenster vorn Fahrerseite | 0-n | high | 0x000F0000 | DWA_FH_POS_FAT | - | - | - |
| 0x0002 | Position Fenster vorn Beifahrerseite | 0-n | high | 0x0F000000 | DWA_FH_POS_BFT | - | - | - |
| 0x0003 | Position Fenster hinten Fahrerseite | 0-n | high | 0x00F00000 | DWA_FH_POS_FATH | - | - | - |
| 0x0004 | Position Fenster hinten Beifahrerseite | 0-n | high | 0xF0000000 | DWA_FH_POS_BFTH | - | - | - |
| 0x0005 | Position SHD | 0-n | high | 0x00000F00 | DWA_FH_POS_SHD | - | - | - |
| 0x0006 | Außentemperatur | 0-n | high | 0x000000F8 | DWA_TEMP | - | - | - |
| 0x0007 | Status Standheizung | 0/1 | high | 0x00000002 | - | - | - | - |
| 0x0008 | Status Standlüftung | 0/1 | high | 0x00000001 | - | - | - | - |
| 0x0009 | Triggerhistory: Tür vorn Fahrerseite | 0/1 | low | 0x0001 | - | - | - | - |
| 0x000A | Triggerhistory: Tür vorn Beifahrerseite | 0/1 | low | 0x0002 | - | - | - | - |
| 0x000B | Triggerhistory: Tür hinten Fahrerseite | 0/1 | low | 0x0004 | - | - | - | - |
| 0x000C | Triggerhistory: Tür hinten Beifahrerseite | 0/1 | low | 0x0008 | - | - | - | - |
| 0x000D | Triggerhistory: Motorhaube | 0/1 | low | 0x0010 | - | - | - | - |
| 0x000E | Triggerhistory: Kofferraum | 0/1 | low | 0x0020 | - | - | - | - |
| 0x000F | Triggerhistory: Tür Heckscheibe | 0/1 | low | 0x0040 | - | - | - | - |
| 0x0010 | Triggerhistory: Innenraumschutz | 0/1 | low | 0x0080 | - | - | - | - |
| 0x0011 | Triggerhistory: Neigungsgeber XY-Achse | 0/1 | low | 0x0100 | - | - | - | - |
| 0x0012 | Triggerhistory: Neigungsgeber X-Achse | 0/1 | low | 0x0200 | - | - | - | - |
| 0x0013 | Triggerhistory: Neigungsgeber Y-Achse | 0/1 | low | 0x0400 | - | - | - | - |
| 0x0014 | Triggerhistory: SINE | 0/1 | low | 0x0800 | - | - | - | - |
| 0x0015 | Triggerhistory: DWA-Bus Sensor | 0/1 | low | 0x1000 | - | - | - | - |
| 0x0016 | Triggerhistory: Sine Kommunikation | 0/1 | low | 0x2000 | - | - | - | - |
| 0x0017 | Triggerhistory: Authentisierung fehlgeschlagen | 0/1 | low | 0x4000 | - | - | - | - |
| 0x0018 | Triggerhistory: Panikalarm | 0/1 | low | 0x8000 | - | - | - | - |
| 0xFFFF | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x560001 | Ultraschall-Sensorik | 0 |
| 0x560002 | Innenraumsensor / Neigungssensor | 1 |
| 0x560003 | Letzter Reset wurde durch internen Watchdog ausgelöst | 0 |
| 0x560004 | Undefinierter Op Code erkannt | 0 |
| 0x560005 | zulaessige Umgebungstemperatur ueberschritten | 1 |
| 0x560008 | Diagnosemaster: Warteschlange ist voll | 1 |
| 0x560009 | Diagnosemaster: Warteschlange wurde gelöscht | 1 |
| 0x03029B | ESH, Reversierung im Emergency-Modus | 1 |
| 0x03029A | ESH, Reversierung im Panik-Modus | 1 |
| 0x03029F | ESH, Keine OSEK Rechenzeit für Einklemmschutzalgorithmus zugeteilt | 1 |
| 0x030219 | SHD, Codierdaten unplausibel | 1 |
| 0x03021A | SHD, Reversierung im Panik-Modus | 1 |
| 0x03021B | SHD, Reversierung im Emergency-Modus | 1 |
| 0x03021F | SHD, Keine OSEK Rechenzeit für Einklemmschutzalgorithmus zugeteilt | 1 |
| 0x030221 | SHD: Manuelle Initialisierung | 1 |
| 0x030222 | SHD: Autoinitialisierung | 1 |
| 0x030223 | SHD: Initialisierung abgebrochen | 1 |
| 0x560006 | Initialisierung nicht abgeschlossen | 1 |
| 0x560007 | Anzahl zulässiger Codierungen überschritten | 1 |
| 0x56001c | interner Wakeup | 1 |
| 0x56001d | externer Wakeup | 1 |
| 0x560020 | DEM Event Queue voll | 0 |
| 0x560021 | Alarmspeicher Fehler in der Ablaufsteuerung | 1 |
| 0x560022 | Alarmspeicher nicht definierter Zustand | 1 |
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
| BUS_IN_GESCHW_STATUS | 0xDAAB | STAT_BUS_IN_GESCHWINDIGKEIT_WERT | Eingehende Busnachricht aktuelle Fahrzeuggeschwindigkeit (Telegramm 1A1h) | km/h | - | - | int | - | 0,015625 | - | - | - | 22 | - | - |
| BUS_IN_KONTAKT_HECKKLAPPE | 0xDAA1 | STAT_BUS_IN_KONTAKT_HECKKLAPPE_NR | Bus signal Heckklappe | 0-n | - | - | char | TAB_BUS_KONTAKT_3 | - | - | - | - | 22 | - | - |
| BUS_IN_KONTAKT_HECKSCHEIBE | 0xDAAA | STAT_BUS_IN_KONTAKT_HECKSCHEIBE_NR | Bus signal Heckscheibe | 0-n | - | - | char | TAB_BUS_KONTAKT_3 | - | - | - | - | 22 | - | - |
| BUS_IN_KONTAKT_MOTORHAUBE | 0xDAA2 | STAT_BUS_IN_KONTAKT_MOTORHAUBE_NR | Rückgabe des Status des Motorhaubenkontaktschalters. | 0-n | - | - | char | TAB_BUS_KONTAKT_3 | - | - | - | - | 22 | - | - |
| BUS_IN_TUERKONTAKT_BF | 0xDAA4 | STAT_BUS_IN_TUERKONTAKT_BF_NR | Eingehende Busnachricht Türkontakt Beifahrerseite   (Telegramm 2FCh) | 0-n | - | - | char | TAB_BUS_TUERKONTAKT | - | - | - | - | 22 | - | - |
| BUS_IN_TUERKONTAKT_BFH | 0xDAA3 | STAT_BUS_IN_TUERKONTAKT_BFH_NR | Eingehende Busnachricht Türkontakt Beifahrerseite hinten  (Telegramm 2FCh) | 0-n | - | - | char | TAB_BUS_TUERKONTAKT | - | - | - | - | 22 | - | - |
| BUS_IN_TUERKONTAKT_FA | 0xDAA6 | STAT_BUS_IN_TUERKONTAKT_FA_NR | Eingehende Busnachricht Türkontakt Fahrerseite  (Telegramm 2FCh) | 0-n | - | - | char | TAB_BUS_TUERKONTAKT | - | - | - | - | 22 | - | - |
| BUS_IN_TUERKONTAKT_FAH | 0xDAA5 | STAT_BUS_IN_TUERKONTAKT_FAH_NR | Eingehende Busnachricht Türkontakt Fahrerseite hinten  (Telegramm 2FCh) | 0-n | - | - | char | TAB_BUS_TUERKONTAKT | - | - | - | - | 22 | - | - |
| BUS_IN_ZV_KLAPPENKONTAKT | 0xDAA9 | STAT_BUS_IN_ZV_KLAPPENKONTAKT | CAN aktuell empfangener ZV-Status: Status der ZV von der JBBF. | 0-n | - | - | int | TAB_BUS_IN_ZV | - | - | - | - | 22 | - | - |
| DWA_ALARM_ANZAHL | 0xDCB6 | - | Anzahl durch Innenraumschutz ausgelöste Alarme | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCB6 |
| DWA_ALARM_ANZAHL_LOESCHEN | 0xAA7A | - | Anzahl Alarme löschen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DWA_ALARM_AUSGELOEST | 0xDCB0 | - | Status, welcher Alarm ausgelöst hat | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCB0 |
| DWA_CAR_KEY_MEMORY | 0xDCAA | - | Status / Steuern CarKeyMemory-Funktionalität der DWA | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDCAA | RES_0xDCAA |
| DWA_CAR_KEY_MEMORY_RESET | 0xAA7B | - | Reset des CarKeyMemorys auf die ursprünglichen Codierwerte | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA7B | - |
| DWA_INTERN | 0xDCAC | STAT_DWA_INTERN_NR | Abfrage Status DWA | 0-n | - | - | int | TAB_DWA_INTERN | - | - | - | - | 22 | - | - |
| DWA_IRS_EMPFINDLICHKEIT | 0xDCB2 | STAT_IRS_SENS_EMPFINDLICHKEIT_NR | aktuelle Empfindlichkeitsstufe Sensor Innenraumschutz | 0-n | - | - | int | TAB_DWA_IRS_EMPF | - | - | - | - | 22 | - | - |
| DWA_IRS_EMPFINDLICHKEIT_SETZEN | 0xAA77 | - | Steuern der Empfindlichkeit des Innenraumschutzes | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA77 | - |
| DWA_LED | 0xDCA8 | - | Status/Steuern DWA-LED. Für Details siehe Sub-Tabelle(n) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDCA8 | RES_0xDCA8 |
| DWA_SCHAERFEN | 0xAA79 | - | 0: DWA entschärfen 1: DWA schärfen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA79 | - |
| DWA_SCHNELLTEST | 0xDCB5 | - | Aktiviert den DWA-Schnelltest Modus (Sensoren werden geschaerft) 0: Vorgang beenden 1: leise 2: normale Lautstärke | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCB5 | - |
| DWA_SELBSTTEST | 0xAA76 | - | Selbsttest DWA-System. Gefundene Fehler werden im Fehlerspeicher abgelegt | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA76 | RES_0xAA76 |
| DWA_SINE | 0xDCA2 | - | Status der Sirene / Neigungsgeber | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCA2 |
| DWA_SINE_ANSTEUERUNG | 0xAA70 | - | Ansteuerung der Sirene für maximal 5 Sekunden | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DWA_SINE_BATT_LEVEL | 0xDCA3 | STAT_SIRENE_INTERNER_BATTERIE_LEVEL_NR | Status Auslesen der internen Batterie (Güte der Batterie?) | 0-n | - | - | char | TAB_SINE_BATT_LEVEL | - | - | - | - | 22 | - | - |
| DWA_SINE_BATT_LEVEL_RESET | 0xAA71 | - | Reset des Batterie-Levels. Nur nach Austausch der Batterie durchführen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DWA_SINE_LIN | 0xDCA1 | STAT_VORHANDEN_LIN_SIRENE | Einkodierungs Status einer LIN-Sine im Master-SG | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| DWA_SINE_NEIGUNG | 0xDCA9 | - | Neigungswinkel (X- und Y-Achse) des Fahrzeugs. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCA9 |
| DWA_VORHANDEN | 0xDCB1 | STAT_VORHANDEN_DWA | DWA vorhanden / codiert | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| ESH | 0xD193 | - | Status el. Schiebehimmel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD193 |
| ESH_INIT | 0xD174 | STAT_ESH_INIT | 1: el. Schiebehimmel eingelernt | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| LESELICHT_HINTEN | 0xD553 | - | Status Leselicht hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD553 |
| LESELICHT_HINTEN_LINKS_TASTER | 0xD587 | STAT_TASTER_LESELICHT_HINTEN_LINKS_EIN | 1: Taster Leselicht hinten links betätigt | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| LESELICHT_HINTEN_RECHTS_TASTER | 0xD54E | STAT_TASTER_LESELICHT_HINTEN_RECHTS_EIN | 1: Taster Leselicht hinten rechts betätigt | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| LESELICHT_HINTEN_VORHANDEN | 0xD545 | STAT_VORHANDEN_LESELICHT_HINTEN | 1: Leselicht hinten vorhanden | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| LESELICHT_MAKEUP_STEUERN | 0xD53B | - | Ansteuerung Leselichter / Freigabe MakeUp-Leuchten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD53B | - |
| LESELICHT_VORNE | 0xD53A | - | Status Leselicht vorne | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD53A |
| LESELICHT_VORNE_LINKS_TASTER | 0xD589 | STAT_TASTER_LESELICHT_VORNE_LINKS_EIN | 1: Taster Leselicht vorne links betätigt | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| LESELICHT_VORNE_RECHTS_TASTER | 0xD588 | STAT_TASTER_LESELICHT_VORNE_RECHTS_EIN | 1: Taster Leselicht vorne rechts betätigt | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| LESELICHT_VORNE_VORHANDEN | 0xD544 | STAT_VORHANDEN_LESELICHT_VORNE | 1: Leselicht vorne vorhanden | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| MAKEUP_LICHT | 0xD53C | - | Status-Abfrage MakeUp-Licht | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD53C |
| MAKEUP_VORHANDEN | 0xD546 | STAT_VORHANDEN_MAKEUP | Makeup-Spiegel vorhanden. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SHD | 0xD191 | - | Status Schiebedach (über Motortreiber) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD191 |
| SHD_DENORMIEREN | 0xA176 | - | Denormierung Schiebedach und Schiebehimmel Keine Argument notwendig | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SHD_EINLERNEN | 0xA172 | - | Einlernen des Schiebedachs Argument siehe Sub-Tabelle Result kann nur bei RRR abgefragt werden | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA172 | RES_0xA172 |
| SHD_INIT | 0xD175 | STAT_SHD_INIT | 1: Schiebedach eingelernt | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| SHD_POSITION | 0xD196 | - | Angabe der Position des Schiebedachs in Prozent | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD196 |
| SHD_POSITION_ANFAHREN | 0xA17A | - | Verfahren Schiebedach auf best. Position | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17A | - |
| SHD_SW_VERSION_BEDIENKONZEPT | 0xD1A6 | STAT_SHD_SW_VERSION_WERT | Ausgabe Software-Version des Bedienkonzeptes | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| SHD_TASTER | 0xD192 | - | Status / Simulation Taster Schiebedach | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD192 | RES_0xD192 |
| SHD_TASTER_VORHANDEN | 0xD194 | STAT_VORHANDEN_TASTER_SHD_EIN | 1: Taster SHD vorhanden | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| SHD_VORHANDEN | 0xD195 | STAT_VORHANDEN_SHD | 0: Kein Schiebedach vorhanden 1: Schiebedach vorhanden | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| SPANNUNG_KLEMME_30B_WERT | 0xDAD9 | STAT_SPANNUNG_KLEMME_30B_WERT | Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| SPANNUNG_KLEMME_30E_WERT | 0xDADA | STAT_SPANNUNG_KLEMME_30E_WERT | Auslesen des Spannungswerts der Klemme 30E. Hinweise:  - Aufruf über Standardjob STATUS_LESEN mit Argument SPANNUNG_KLEMME_30E. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| SPANNUNG_KLEMME_30L_WERT | 0xDADD | STAT_SPANNUNG_KLEMME_30L_WERT | Auslesen des Spannungswerts der Klemme 30L. Hinweise:  - Aufruf über Standardjob STATUS_LESEN mit Argument SPANNUNG_KLEMME_30L. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| BUS_IN_FAHRZEUGGESCHWINDIGKEIT | 0xFE25 | - | Signalname CAN: V_VEH_COG | - | - | - | - | - | - | - | - | - | 2F | ARG_0xFE25 | - |
| BUS_IN_STATUS_PANIK_MODUS | 0xFE67 | STAT_STATUS_PANIK_MODUS | Eingehende Busnachricht Status_Panik_Modus | 0-n | - | - | unsigned char | TAB_PANIK_MODUS | - | - | - | - | 22 | - | - |
| DWA_ALARMSPEICHER_LOESCHEN | 0xF018 | - | - | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ESH_DENORMLOGGER_LOESCHEN | 0xF023 | - | Löschen des ESH Denormloggers | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ESH_DENORM_REASON | 0xFE06 | - | Denormierlogger des ESH-Antriebs (Himmel) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFE06 |
| ESH_EINKLEMMSCHUTZ | 0xFE29 | - | - | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFE29 | RES_0xFE29 |
| ESH_KENNLINIE_LOESCHEN | 0xF029 | - | ESH Kennlinie löschen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ESH_LOGGER_REVERSIERER_LOESCHEN | 0xF025 | - | Löschen des ESH Reversierloggers | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ESH_MOTORSTOP_REASON | 0xFE02 | STAT_ESH_MOTORSTOP_REASON_NR | - | 0-n | - | - | unsigned char | TAB_STAT_MOTORSTOP_REASON | - | - | - | - | 22 | - | - |
| ESH_REL_AUF | 0xFE23 | - | Ansteuern des ESH Relais über Zeit | - | - | - | - | - | - | - | - | - | 2F | ARG_0xFE23 | - |
| ESH_REL_ZU | 0xFE24 | - | Ansteuern des ESH Relais über Zeit | - | - | - | - | - | - | - | - | - | 2F | ARG_0xFE24 | - |
| ESH_REVERSIER_LOGGER | 0xFE04 | - | Reversierlogger des ESH Antriebs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFE04 |
| ESH_THERMOSCHUTZ | 0xFE2B | - | - | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFE2B | RES_0xFE2B |
| ESH_VERFAHREN_MONTAGEPOS | 0xF02C | - | ESH Verfahren zur Montageposition | - | - | - | - | - | - | - | - | - | 31 | - | - |
| MAKEUP_STROM_SENSE_VL | 0x5000 | STAT_MAKEUP_STROM_SENSE_VL_WERT | Spannung Strom-Sense Highside-Treiber MakeUp-Leuchte vorn links: min: 0,55V --> 240mA max: 1,78V --> 420mA | V | - | low | unsigned int | - | - | 1000 | - | - | 22 | - | - |
| MAKEUP_STROM_SENSE_VR | 0x5001 | STAT_MAKEUP_STROM_SENSE_VR_WERT | Spannung Strom-Sense Highside-Treiber MakeUp-Leuchte vorn  rechts: min: 0,55V --> 240mA max: 1,78V --> 420mA | V | - | low | unsigned int | - | - | 1000 | - | - | 22 | - | - |
| SHD_DENORMLOGGER_LOESCHEN | 0xF022 | - | Löschen des SHD Denormloggers | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SHD_DENORM_REASON | 0xFE05 | - | Denormierlogger des SHD-Antriebs (Deckel) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFE05 |
| SHD_EINKLEMMSCHUTZ | 0xFE28 | - | - | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFE28 | RES_0xFE28 |
| SHD_EINSCHLAFEN_ERLAUBT | 0xFE27 | - | - | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFE27 | RES_0xFE27 |
| SHD_ESH_HALLELEMENTE | 0xFE89 | - | Diagnosedaten Hallsensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFE89 |
| SHD_FREIGABE | 0xFE26 | - | - | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFE26 | RES_0xFE26 |
| SHD_KENNLINIE_LOESCHEN | 0xF028 | - | SHD Kennlinie löschen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SHD_LOGGER_REVERSIERER_LOESCHEN | 0xF024 | - | Löschen des SHD Reversierloggers | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SHD_MOTORSTOP_REASON | 0xFE01 | STAT_SHD_MOTORSTOP_REASON_NR | - | 0-n | - | - | unsigned char | TAB_STAT_MOTORSTOP_REASON | - | - | - | - | 22 | - | - |
| SHD_PANIKFREIGABE | 0xFE2C | - | - | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFE2C | RES_0xFE2C |
| SHD_REL_AUF | 0xFE21 | - | Ansteuern des SHD Relais über Zeit | - | - | - | - | - | - | - | - | - | - | ARG_0xFE21 | - |
| SHD_REL_ZU | 0xFE22 | - | Ansteuern des ESH Relais über Zeit | - | - | - | - | - | - | - | - | - | 2F | ARG_0xFE22 | - |
| SHD_REVERSIER_LOGGER | 0xFE03 | - | Reversierlogger des SHD-Antriebs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFE03 |
| SHD_STATUS_FREISCHALTUNG | 0xFE69 | STAT_STATUS_SCHIEBE_HEBE_DACH_FREISCHALTUNG | Eingehende Busnachricht Status_Schiebe-/Hebedach_Freischaltung | 0-n | - | - | unsigned char | TAB_STATUS_SHD_FREISCHALTUNG | - | - | - | - | 22 | - | - |
| SHD_STATUS_RELAIS | 0xFE83 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFE83 |
| SHD_TESTSTAND_GESCHWINDIGKEIT | 0xFE88 | STAT_SHD_TESTSTAND_GESCHWINDIGKEIT_WERT | Eingehende Busnachricht Geschwindigkeit_Fahrzeug_Schwerpunkt | km/h | - | - | unsigned int | - | 64 | - | - | - | 22 | - | - |
| SHD_THERMOSCHUTZ | 0xFE2A | - | - | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFE2A | RES_0xFE2A |
| SHD_TREIBER_VARIANTE | 0x5004 | STAT_SHD_TREIBER_VARIANTE_NR | 0 = kein Treiber codiert 1 = Webasto Treiber codiert 2 = Continental (Siemens) Treiber codiert | 0-n | - | - | unsigned char | TAB_SHD_VARIANTE | - | - | - | - | 22 | - | - |
| SHD_VERFAHREN_MONTAGEPOS | 0xF02B | - | SHD Verfahren zur Montageposition | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SHD_VERFAHREN_ZEIT | 0xF02A | - | SHD Verfahren nach Zeit | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF02A | - |
| _ESH_DENORMIEREN_ONLY | 0xF027 | - | Denormiere nur ESH | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _SHD_DENORMIEREN_ONLY | 0xF026 | - | Denormiere nur SHD | - | - | - | - | - | - | - | - | - | 31 | - | - |

### DIGITAL_OUTPUT_AUSWAHL

| DIGITAL_OUTPUT_ID | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0x00 | LESELICHT_VL | Leselicht vorn links |
| 0x01 | LESELICHT_VR | Leselicht vorn rechts |
| 0x02 | LESELICHT_HL | Leselicht hinten links |
| 0x03 | LESELICHT_HR | Leselicht hinten rechts |

### LICHTKANAL

| KANAL_ID | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0 | LL_VL | abc |
| 1 | LL_VR | def |

### TAB_INNENLICHT_KANNAL

| WERT | TEXT |
| --- | --- |
| 0x00 | MAPLICHT_FL |
| 0x01 | MAPLICHT_FR |
| 0x02 | MAPLICHT_RL |
| 0x03 | MAPLICHT_RR |
| 0x04 | MAKEUPLICHT_FL |
| 0x05 | MAKEUPLICHT_FR |
| 0x06 | MAKEUPLICHT_RL |
| 0x07 | MAKEUPLICHT_RR |

### TAB_SHD_EINLERNVORGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung nicht gestartet |
| 0x01 | Initialisierung läuft |
| 0x02 | Initialisierung abgeschlossen |
| 0x03 | Fehler: nicht bereit |
| 0x04 | Fehler: Abbruch durch Benutzer |
| 0x05 | Fehler: Reversieren |
| 0x06 | Fehler: Initialisierung |
| 0xFF | ungültiger Wert |

### TAB_0X4000

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 |

### TAB_0X4001

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 |

### DWA_FH_POS_SHD

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kleiner  2cm |
| 0x01 | 2cm bis 4cm |
| 0x02 | 4cm bis 6cm |
| 0x03 | 6cm bis 8cm |
| 0x04 | 8cm bis 10cm |
| 0x05 | 10cm bis 12cm |
| 0x06 | 12cm bis 14cm |
| 0x07 | 14cm bis 16cm |
| 0x08 | 16cm bis 18cm |
| 0x09 | 18cm bis 20cm |
| 0x0A | 20cm bis 22cm |
| 0x0B | 22cm bis 24cm |
| 0x0C | 24cm bis 26cm |
| 0x0D | 26cm bis 28cm |
| 0x0E | 28cm bis 30cm |
| 0x0f | größer 30cm |
| 0xXY | unplausibel |

### DWA_TEMP

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kleiner -36,5°C |
| 0x08 | -36°C bis -32,5°C |
| 0x10 | -32°C bis -28,5°C |
| 0x18 | -28°C bis -24,5°C |
| 0x20 | -24°C bis -20,5°C |
| 0x28 | -20°C bis -16,5°C |
| 0x30 | -16°C bis -12,5°C |
| 0x38 | -12°C bis -8,5°C |
| 0x40 | -8°C bis -4,5°C |
| 0x48 | -4°C bis -0,5°C |
| 0x50 | 0°C bis 3,5°C |
| 0x58 | 4°C bis 7,5°C |
| 0x60 | 8°C bis 11,5°C |
| 0x68 | 12°C bis 15,5°C |
| 0x70 | 16°C bis 19,5°C |
| 0x78 | 20°C bis 23,5°C |
| 0x80 | 24°C bis 27,5°C |
| 0x88 | 28°C bis 31,5°C |
| 0x90 | 32°C bis 35,5°C |
| 0x98 | 36°C bis 39,5°C |
| 0xA0 | 40°C bis 33,5°C |
| 0xA8 | 44°C bis 47,5°C |
| 0xB0 | 48°C bis 51,5°C |
| 0xB8 | 52°C bis  55,5°C |
| 0xC0 | 56°C bis 59,5°C |
| 0xC8 | 60°C bis 63,5°C |
| 0xD0 | 64°C bis 67,5°C |
| 0xD8 | 68°C bis 71,5°C |
| 0xE0 | 72°C bis 75,5°C |
| 0xE8 | 76°C bis 79,5°C |
| 0xF0 | 80°C bis 83,5°C |
| 0xF8 | größer 84°C |
| 0xXY | unplausibel |

### DWA_FH_POS_FAT

| WERT | UWTEXT |
| --- | --- |
| 0x000000 | kleiner  2cm |
| 0x010000 | 2cm bis 4cm |
| 0x020000 | 4cm bis 6cm |
| 0x030000 | 6cm bis 8cm |
| 0x040000 | 8cm bis 10cm |
| 0x050000 | 10cm bis 12cm |
| 0x060000 | 12cm bis 14cm |
| 0x070000 | 14cm bis 16cm |
| 0x080000 | 16cm bis 18cm |
| 0x090000 | 18cm bis 20cm |
| 0x0A0000 | 20cm bis 22cm |
| 0x0B0000 | 22cm bis 24cm |
| 0x0C0000 | 24cm bis 26cm |
| 0x0D0000 | 26cm bis 28cm |
| 0x0E0000 | 28cm bis 30cm |
| 0x0f0000 | größer 30cm |
| 0xXY | unplausibel |

### DWA_FH_POS_FATH

| WERT | UWTEXT |
| --- | --- |
| 0x0000000 | kleiner  2cm |
| 0x0100000 | 2cm bis 4cm |
| 0x0200000 | 4cm bis 6cm |
| 0x0300000 | 6cm bis 8cm |
| 0x0400000 | 8cm bis 10cm |
| 0x0500000 | 10cm bis 12cm |
| 0x0600000 | 12cm bis 14cm |
| 0x0700000 | 14cm bis 16cm |
| 0x0800000 | 16cm bis 18cm |
| 0x0900000 | 18cm bis 20cm |
| 0x0A00000 | 20cm bis 22cm |
| 0x0B00000 | 22cm bis 24cm |
| 0x0C00000 | 24cm bis 26cm |
| 0x0D00000 | 26cm bis 28cm |
| 0x0E00000 | 28cm bis 30cm |
| 0x0f00000 | größer 30cm |
| 0xXY | unplausibel |

### DWA_FH_POS_BFT

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | kleiner  2cm |
| 0x01000000 | 2cm bis 4cm |
| 0x02000000 | 4cm bis 6cm |
| 0x03000000 | 6cm bis 8cm |
| 0x04000000 | 8cm bis 10cm |
| 0x05000000 | 10cm bis 12cm |
| 0x06000000 | 12cm bis 14cm |
| 0x07000000 | 14cm bis 16cm |
| 0x08000000 | 16cm bis 18cm |
| 0x09000000 | 18cm bis 20cm |
| 0x0A000000 | 20cm bis 22cm |
| 0x0B000000 | 22cm bis 24cm |
| 0x0C000000 | 24cm bis 26cm |
| 0x0D000000 | 26cm bis 28cm |
| 0x0E000000 | 28cm bis 30cm |
| 0x0f000000 | größer 30cm |
| 0xXY | unplausibel |

### DWA_FH_POS_BFTH

| WERT | UWTEXT |
| --- | --- |
| 0x000000000 | kleiner  2cm |
| 0x010000000 | 2cm bis 4cm |
| 0x020000000 | 4cm bis 6cm |
| 0x030000000 | 6cm bis 8cm |
| 0x040000000 | 8cm bis 10cm |
| 0x050000000 | 10cm bis 12cm |
| 0x060000000 | 12cm bis 14cm |
| 0x070000000 | 14cm bis 16cm |
| 0x080000000 | 16cm bis 18cm |
| 0x090000000 | 18cm bis 20cm |
| 0x0A0000000 | 20cm bis 22cm |
| 0x0B0000000 | 22cm bis 24cm |
| 0x0C0000000 | 24cm bis 26cm |
| 0x0D0000000 | 26cm bis 28cm |
| 0x0E0000000 | 28cm bis 30cm |
| 0x0f0000000 | größer 30cm |
| 0xXY | unplausibel |

### TAB_BUS_IN_ZV

| WERT | TEXT |
| --- | --- |
| 0x0000 | Bisher keinen gültigen Status empfangen |
| 0x0001 | Mindestens eine Tür entriegelt |
| 0x0002 | Mindestens eine Tür verriegelt |
| 0x0003 | Mindestens eine Tür entriegelt, mindestens eine Tür verrriegelt |
| 0x0004 | Interner ZV-Master gesichert |
| 0x0005 | Interner ZV-Master gesichert, mindestens eine Tür entriegelt |
| 0x0006 | Interner ZV-Master gesichert, mindestens eine Tür verriegelt |
| 0x0007 | Interner ZV-Master gesichert, mindestens eine Tür entriegelt, mindestens eine Tür verriegelt |
| 0x000F | Signal ungültig |
| 0xXXYY | ungültiger Wert |

### TAB_ALM_SHD_NEIGUNG

| WERT | TEXT |
| --- | --- |
| 0 | SHD nicht gehoben |
| 1 | SHD Neigung: Zwischenstellung |
| 2 | SHD maximal gehoben |
| 3 | SHD Neigung: ungueltiger Wert |

### TAB_ALM_ID

| WERT | TEXT |
| --- | --- |
| 1 | Alarmtrigger Motorhaubenkontakt |
| 2 | Alarmtrigger Heckklappe |
| 3 | Alarmtrigger Fahrertuerkontakt |
| 4 | Alarmtrigger Beifahrertuerkontakt |
| 5 | Alarmtrigger Kontakt Fahrertuer hinten |
| 6 | Alarmtrigger Kontakt Beifahrertuer hinten |
| 7 | Alarmtrigger LIN-Ueberwachung |
| 8 | Authentisierung |
| 9 | Heckscheibenkontakt |
| 10 | Panikalarm |
| 11 | Ultraschallalarm |
| 12 | Alarm Neigungssensor x-Achse |
| 13 | Alarm Neigungssensor y-Achse |
| 14 | Alarm Neigungssensor xy-Achse |
| 15 | Alarm, Manipulation Spannungsversorgung SINE |
| 16 | Alarm LIN Kommunikationsfehler |
| 17 | SiNe Autarker Alarm |
| 18 | Alarmtrigger unbekannt |

### ARG_0XAA7B

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OPT_ENTSCHAERFEN | + | - | 0/1 | - | char | - | - | - | - | - | 0 | 1 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| AKUST_ENTSCHAERFEN | + | - | 0/1 | - | char | - | - | - | - | - | 0 | 1 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| OPT_SCHAERFEN | + | - | 0/1 | - | char | - | - | - | - | - | 0 | 1 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| AKUST_SCHAERFEN | + | - | 0/1 | - | char | - | - | - | - | - | 0 | 1 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| OPT_SCHAERFEN_KLAPPE | + | - | 0/1 | - | char | - | - | - | - | - | 0 | 1 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| AKUST_SCHAERFEN_KLAPPE | + | - | 0/1 | - | char | - | - | - | - | - | 0 | 1 | 0: keine Aktion  1: Auf Codierwerte zurücksetzen |

### RES_0XD191

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_AUF | 0/1 | - | char | - | - | - | - | - | 0: Schiebedach oeffnen nicht aktiv 1: Schiebedach oeffnen aktiv |
| STAT_SHD_ZU | 0/1 | - | char | - | - | - | - | - | 0: Schiebedach schliessen nicht aktiv 1: Schiebedach schliessen aktiv |
| STAT_SHD_HEBEN | 0/1 | - | char | - | - | - | - | - | 0: Schiebedach heben nicht aktiv 1: Schiebedach heben aktiv |
| STAT_SHD_NR | 0-n | - | char | - | TAB_SHD_AUSGANG | - | - | - | 0 = Keine Bewegung 1 = Oeffnen 2 = Schliessen 3 = Heben / Zwangsspalt |
| STAT_SHD_OFFEN_KOPMPLETT | 0/1 | - | char | - | - | - | - | - | 0: Schiebedach nicht vollständig geoeffnet 1: Schiebedach vollständig geoeffnet |
| STAT_SHD_GESCHLOSSEN_KOMPLETT | 0/1 | - | char | - | - | - | - | - | 0: Schiebedach nicht vollständig geschlossen 1: Schiebedach vollständig geschlossen |
| STAT_SHD_GEHOBEN_EIN | 0/1 | - | char | - | - | - | - | - | 0: Schiebedach nicht in Position gehoben 1: Schiebedach in Position gehoben |
| STAT_SHD_THERMOSCHUTZ_AKTIV | 0/1 | - | char | - | - | - | - | - | 0: Thermoschutz nicht aktiv 1: Thermoschutz aktiv |
| STAT_SHD_SPIELSCHUTZ_AKTIV | 0/1 | - | char | - | - | - | - | - | 0: Spielschutz nicht aktiv 1: Spielschutz aktiv |
| STAT_SHD_KENNLINIE_SCHLIESSEN_EIN | 0/1 | - | char | - | - | - | - | - | 0: Kennlinie Schiebedach schliessen nicht eingelernt 1: Kennlinie Schiebedach schliessen eingelernt |
| STAT_SHD_KENNLINIE_HEBEN_EIN | 0/1 | - | char | - | - | - | - | - | 0: Kennlinie Schiebedach heben nicht eingelernt 1: Kennlinie Schiebedach heben eingelernt |
| STAT_SHD_EINLERNENVORGANG_AKTIV | 0/1 | - | char | - | - | - | - | - | 0: Einlernvorgang nicht aktiv 1: Einlernvorgang aktiv |

### TAB_SHD_AUSGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Bewegung |
| 0x01 | Auf |
| 0x02 | Zu |
| 0x03 | Heben |
| 0xFF | ungültiger Wert |

### RES_0XD53C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAKEUP_LICHT_LINKS_EIN | 0/1 | - | int | - | - | - | - | - | 0: Freigabe für Make-Up-Leuchte links nicht vorhanden; 1: Freigabe für Make-Up-Leuchte links vorhanden |
| STAT_MAKEUP_LICHT_RECHTS_EIN | 0/1 | - | int | - | - | - | - | - | 0: Freigabe für Make-Up-Leuchte nicht vorhanden; 1: Freigabe für Make-Up-Leuchte vorhanden |

### ARG_0XDCB5

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | int | - | TAB_DWA_SCHNELLTEST | - | - | - | - | - | 0: Vorgang abbrechen; 1: Schnelltest leise 2: Schnelltest normal |

### TAB_DWA_SCHNELLTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Abbrechen |
| 0x01 | Schnelltest leise |
| 0x02 | Schnelltest normal |

### RES_0XD193

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ESH_AUF | 0/1 | - | int | - | - | - | - | - | 0: Elektrischer Schiebehimmel oeffnen nicht aktiv 1: Elektrischer Schiebehimmel oeffnen aktiv |
| STAT_ESH_GEHOBEN | 0/1 | - | int | - | - | - | - | - | 0: Elektrischer Schiebehimmel nicht in Position Gehoben 1: Elektrischer Schiebehimmel in Position Gehoben |
| STAT_ESH_GESCHLOSSEN_KOMPLETT | 0/1 | - | int | - | - | - | - | - | 0: Elektrischer Schiebehimmel nicht vollstaendig geschlossen 1: Elektrischer Schiebehimmel vollständig geschlossen |
| STAT_ESH_HEBEN | 0/1 | - | int | - | - | - | - | - | 0: Elektrischer Schiebehimmel heben nicht aktiv 1: Elektrischer Schiebehimmel heben aktiv |
| STAT_ESH_KENNLINIE_HEBEN_EIN | 0/1 | - | int | - | - | - | - | - | 0: Kennlinie Elektrischer Schiebehimmel heben nicht eingelernt 1: Kennlinie Elektrischer Schiebehimmel heben eingelernt |
| STAT_ESH_KENNLINIE_SCHLIESSEN_EIN | 0/1 | - | int | - | - | - | - | - | 0: Kennlinie Elektrischer Schiebehimmel schliessen nicht eingelernt 1: Kennlinie Elektrischer Schiebehimmel schliessen eingelernt |
| STAT_ESH_OFFEN_KOPMPLETT | 0/1 | - | int | - | - | - | - | - | 0: Elektrischer Schiebehimmel nicht vollständig geoeffnet 1: Elektrischer Schiebehimmel vollständig geoeffnet |
| STAT_ESH_ZU | 0/1 | - | int | - | - | - | - | - | 0: Elektrischer Schiebehimmel schliessen nicht  aktiv 1: Elektrischer Schiebehimmel schliessen aktiv |
| STAT_ESH_POSITION_ZWANGSSPALT_WERT | % | - | int | - | - | - | - | - | Angabe der Position des el. Schiebehimmels in Prozent 0 - 100 Prozent 0 ESH Zwangsspalt 100 ESH geschlossen 0xFF bei ungültig |
| STAT_ESH_POSITION_HORIZONTAL_WERT | % | - | int | - | - | - | - | - | Angabe der Position des el. Schiebehimmels in Prozent 0 - 100 Prozent 0 el. Schiebedach offen 100 el. Schiebedach geschlossen 0xFF bei ungültig |

### TAB_DWA_INTERN

| WERT | TEXT |
| --- | --- |
| 0x00 | DWA entschärft |
| 0x01 | DWA wird entschärft |
| 0x02 | DWA in Schärfung |
| 0x03 | DWA geschärft |
| 0x04 | DWA geschärft - Klappenkontakte noch ausgeblendet |
| 0x05 | DWA geschärft - Hotelstellung aktiv |
| 0x06 | DWA geschärft - IRS nicht aktiv |
| 0x07 | DWA geschärft - Neigungssensor nicht aktiv |
| 0x08 | DWA geschärft - IRS und Neigungsgeber |
| 0x09 | DWA geschärft - IRS und Neigungsgeber durch Benutzer deaktiviert |
| 0x0A | DWA geschärft - Distributionsmodus |
| 0x0B | DWA Alarm |
| 0x0C | DWA Pause nach Alarm |
| 0x0D | DWA Panik Alarm Mode |
| 0x0E | DWA Transportmode |
| 0x0F | DWA Werkstattmode |
| 0x10 | DWA Fertigungsmode |
| 0x11 | DWA Energiesparmode wird beendet |
| 0x12 | DWA Powerdown Mode |
| 0x13 | DWA Schnelltest aktiv |
| 0x14 | DWA Selbstest aktiv |
| 0xFF | unbekannter Status |

### RES_0XDCA8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_LED_NR | 0-n | - | char | - | TAB_DWA_LED | - | - | - | 0: AUS 1: Dauer-Ein 2: Blinken 3: Blitzen |

### ARG_0XDCA8

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | int | - | TAB_DWA_LED | - | - | - | 0 | 3 | Ansteuerung der DWA-LED 0: Aus  1: Dauer-Ein  2: Blinken  3: Blitzen |
| ZEIT | ms | - | int | - | - | - | - | - | - | - | Angabe der Zeit in ms |

### TAB_DWA_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Dauer-Ein |
| 0x02 | Blinken |
| 0x03 | Blitzen |
| 0xFF | unbekannter Zustand |

### ARG_0XA17A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL | + | - | 0-n | - | unsigned char | - | TAB_SHD_POSITION_ANFAHREN | - | - | - | - | - | 0x01: Schiebedach verfahren 0x02: Schiebedach heben 0x03: Elektrischer Schiebehimmel verfahren 0x04: Elektrischer Schiebehimmel heben |
| POSITION | + | - | % | - | char | - | - | - | - | - | - | - | 0 - 100 % 0 %: vollständig offen 100 %: vollständig geschlossen |

### TAB_SHD_POSITION_ANFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Aktion abbrechen |
| 0x01 | Schiebedach verfahren |
| 0x02 | Schiebedach heben |
| 0x03 | ESH verfahren |
| 0x04 | ESH Zwangsspalt |

### RES_0XA172

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORGANG_GESTARTET_NR | - | - | + | 0-n | - | int | - | TAB_FH_SHD_EINLERNVORGANG | - | - | - | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |

### ARG_0XA172

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | - | char | - | TAB_SHD_EINLERNEN | - | - | - | 0 | 5 | Art der Ansteuerung |

### TAB_FH_SHD_EINLERNVORGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung nicht gestartet |
| 0x01 | Initialisierung läuft |
| 0x02 | Initialisierung abgeschlossen |
| 0x03 | Fehler: nicht bereit |
| 0x04 | Fehler: Abbruch durch Benutzer |
| 0x05 | Fehler: Reversieren |
| 0x06 | Fehler: Initialisierung |
| 0xFE | Element nicht unterstützt |
| 0xFF | ungültiger Wert |

### TAB_SHD_EINLERNEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Ansteuerung |
| 0x01 | Einlernen ohne Kraftbegrenzung |
| 0x02 | Einlernen mit Kraftbegrenzung |
| 0x03 | Einlernen mit Kraftbegrenzung und Not-Stopp |
| 0x04 | Schiebedach normieren |
| 0x05 | Schiebehimmel normieren |

### ARG_0XAA77

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | - | char | - | TAB_DWA_IRS_EMPF | - | - | - | - | - | Steuern der Empfindlichkeit des Sensors. Nach Klemmenwechsel sollte der Default-Wert wieder verwendet werden |

### RES_0XDCA9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NEIGUNG_X_ACHSE_WERT | Grad | - | int | - | - | - | 5 | -25.4 | Neigungswinkel der X-Achse in Grad |
| STAT_NEIGUNG_Y_ACHSE_WERT | Grad | - | int | - | - | - | 5 | -25.4 | Neigungswinkel der Y-Achse in Grad |

### RES_0XAA76

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_SELBSTTEST_NR | - | - | + | 0-n | - | char | - | TAB_DWA_SELBSTTEST_ERG | - | - | - | 0: Selbsttest NIO  1: Selbsstest IO 2: Selbsttest läuft |

### ARG_0XAA76

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL | + | - | 0-n | - | char | - | TAB_DWA_SELBSTTEST | - | - | - | - | - | optionales Argument; 0: Abbruch; 1: Selbsttest komplettes DWA-System; 2: Selbsttest Innenraumschutz; 3 Selbsttest Neigungsgeber; DEFAULT: 1 |

### TAB_DWA_SELBSTTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Abbruch |
| 0x01 | Selbsttest Komplettes DWA-System |
| 0x02 | Selbsttest Innenraumschutz |
| 0x03 | Selbsttest Neigungssgeber |

### TAB_DWA_SELBSTTEST_ERG

| WERT | TEXT |
| --- | --- |
| 0x00 | Selbsttest NIO |
| 0x01 | Selbsttest IO |
| 0x02 | Selbsttest läuft |

### RES_0XDCB0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_ALARM_BFT_AUSGELOEST_EIN | 0/1 | - | char | - | - | - | - | - | 0= DWA-Alarm nicht ausgelöst durch Beifahrertür; 1= DWA-Alarm ausgelöst durch Beifahrertür |
| STAT_DWA_ALARM_BFTH_AUSGELOEST_EIN | 0/1 | - | char | - | - | - | - | - | 0= DWA-Alarm nicht ausgelöst durch Beifahrertür hinten ; 1= DWA-Alarm ausgelöst durch Beifahrertür hinten |
| STAT_DWA_ALARM_DISTRIBUTION_AUSGELOEST_EIN | 0/1 | - | char | - | - | - | - | - | 0= DWA-Alarm nicht ausgelöst durch Distribution ; 1= DWA-Alarm ausgelöst durch Distribution |
| STAT_DWA_ALARM_FAT_AUSGELOEST_EIN | 0/1 | - | char | - | - | - | - | - | 0= DWA-Alarm nicht ausgelöst durch Fahrertür; 1= DWA-Alarm ausgelöst durch Fahrertür |
| STAT_DWA_ALARM_FATH_AUSGELOEST_EIN | 0/1 | - | char | - | - | - | - | - | 0= DWA-Alarm nicht ausgelöst durch Fahrertür hinten; 1= DWA-Alarm ausgelöst durch Fahrertür hinten |
| STAT_DWA_ALARM_HECKKLAPPE_AUSGELOEST_EIN | 0/1 | - | char | - | - | - | - | - | 0= DWA-Alarm nicht ausgelöst durch Heckklappe; 1= DWA-Alarm ausgelöst durch Heckklappe |
| STAT_DWA_ALARM_IRS_AUSGELOEST_EIN | 0/1 | - | char | - | - | - | - | - | 0= DWA-Alarm nicht ausgelöst durch Innenraumschutz; 1= DWA-Alarm ausgelöst durch Innenraumschutz |
| STAT_DWA_ALARM_MOTORHAUBE_AUSGELOEST_EIN | 0/1 | - | char | - | - | - | - | - | 0= DWA-Alarm nicht ausgelöst durch Motorhaube; 1= DWA-Alarm ausgelöst durch Motorhaube |
| STAT_DWA_ALARM_NEIGUNGSGEBER_AUSGELOEST_EIN | 0/1 | - | char | - | - | - | - | - | 0= DWA-Alarm nicht ausgelöst durch Neigungsgeber; 1= DWA-Alarm ausgelöst durch Neigungsgeber |

### RES_0XDCAA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_CKM_OPT_ENTSCHAERFEN_EIN | 0/1 | - | char | - | - | - | - | - | 0= Optische Bestätigung bei entschärfen AUS; 1=  Optische Bestätigung bei entschärfen EIN |
| STAT_DWA_CKM_AKUST_ENTSCHAERFEN_EIN | 0/1 | - | char | - | - | - | - | - | 0= Akustische Bestätigung bei entschärfen AUS 1= Akustische Bestätigung bei entschärfen EIN |
| STAT_DWA_CKM_OPT_SCHAERFEN_EIN | 0/1 | - | char | - | - | - | - | - | 0= Optische Bestätigung bei schärfen AUS; 1=  Optische Bestätigung bei schärfen EIN |
| STAT_DWA_CKM_AKUST_SCHAERFEN_EIN | 0/1 | - | char | - | - | - | - | - | 0= Akustische Bestätigung bei schärfen AUS 1= Akustische Bestätigung bei schärfen EIN |
| STAT_DWA_CKM_OPT_SCHAERFEN_KLAPPE_EIN | 0/1 | - | char | - | - | - | - | - | 0= Optische Bestätigung bei schärfen über Klappe AUS; 1=  Optische Bestätigung bei schärfen über Klappe EIN |
| STAT_DWA_CKM_AKUST_SCHAERFEN_KLAPPE_EIN | 0/1 | - | char | - | - | - | - | - | 0= Akustische Bestätigung bei schärfen über Klappe AUS 1= Akustische Bestätigung bei schärfen über Klappe EIN |

### ARG_0XDCAA

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OPT_ENTSCHAERFEN | 0/1 | - | char | - | - | - | - | - | 0 | 1 | 0= Optische Bestätigung bei entschärfen AUS  1= Optische Bestätigung bei entschärfen EIN |
| AKUST_ENTSCHAERFEN | 0/1 | - | char | - | - | - | - | - | 0 | 1 | 0= Akustische Bestätigung bei entschärfen AUS  1= Akustische Bestätigung bei entschärfen EIN |
| OPT_SCHAERFEN | 0/1 | - | char | - | - | - | - | - | 0 | 1 | 0= Optische Bestätigung bei schärfen AUS  1= Optische Bestätigung bei schärfen EIN |
| AKUST_SCHAERFEN | 0/1 | - | char | - | - | - | - | - | 0 | 1 | 0= Akustische Bestätigung bei schärfen AUS  1= Akustische Bestätigung bei schärfen EIN |
| OPT_SCHAERFEN_KLAPPE | 0/1 | - | char | - | - | - | - | - | 0 | 1 | 0= Optische Bestätigung bei schärfen über Klappe AUS  1= Optische Bestätigung bei schärfen über Klappe EIN |
| AKUST_SCHAERFEN_KLAPPE | 0/1 | - | char | - | - | - | - | - | 0 | 1 | 0= Akustische Bestätigung bei schärfen über Klappe AUS  1= Akustische Bestätigung bei schärfen über Klappe EIN |

### ARG_0XAA79

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0/1 | - | int | - | - | - | - | - | - | - | 0 oder kein Argument: DWA entschärfen; 1: DWA schärfen |

### RES_0XDCA2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEITUNG_NR | 0-n | - | char | - | TAB_DWA_SINE_INTERN | - | - | - | Status der Leitungsüberwachung |
| STAT_UNTERSPANNUNG_EXT_NR | 0-n | - | char | - | TAB_DWA_SINE_INTERN | - | - | - | Status Unterspannungsüberwachung der externen Batterie |
| STAT_EEPROM_NR | 0-n | - | char | - | TAB_DWA_SINE_INTERN | - | - | - | Status Überwachnung EEPROM |
| STAT_AKTIVER_SCHUTZ_NR | 0-n | - | char | - | TAB_DWA_SINE_INTERN | - | - | - | Status Aktiver Schutz |
| STAT_WAKE_UP_NR | 0-n | - | char | - | TAB_DWA_SINE_INTERN | - | - | - | Status Überwachung der WakeUp-Zeit |
| STAT_SIRENE_AKUSTIK_NR | 0-n | - | char | - | TAB_DWA_SINE_INTERN | - | - | - | Status Sirenenschaltkreis (Akustik) |
| STAT_TILT_NR | 0-n | - | char | - | TAB_DWA_SINE_INTERN | - | - | - | Status Neigungsgeber |

### TAB_DWA_SINE_INTERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Fehler aktiv |
| 0x02 | Fehler war aktiv |
| 0x03 | ungültig |

### RES_0XDCB6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ALARME_IRS_VORNE_WERT | - | - | int | - | - | - | - | - | Anzahl Alarme Innenraumschutz vorne |
| STAT_ALARME_IRS_HINTEN_WERT | - | - | int | - | - | - | - | - | Anzahl Alarme Innenraumschutz hinten |
| STAT_ALARME_ANZAHL_WERT | - | - | int | - | - | - | - | - | Anzahl der ausgelösten Alarme Gesamtsystem |

### TAB_DWA_IRS_EMPF

| WERT | TEXT |
| --- | --- |
| 0x00 | Innenraumschutz (IRS) inaktiv |
| 0x01 | IRS Normalmode |
| 0x02 | Fenster / Dach offen |
| 0x03 | Klimaanlage / Zuheizer |
| 0xFF | ungültiger Wert |

### ARG_0XD53B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | int | - | TAB_LESELICHT_MAKEUP | - | - | - | - | - | Auswahl Leselicht oder Freigabe MakeUp |
| ZEIT | ms | - | int | - | - | - | - | - | - | - | Angabe der Zeit in ms; 0 bedeutet aus |

### TAB_LESELICHT_MAKEUP

| WERT | TEXT |
| --- | --- |
| 0x00 | Leselicht vorne links |
| 0x01 | Leselicht vorne rechts |
| 0x02 | Leselicht hinten links |
| 0x03 | Leselicht hinten rechts |
| 0x04 | Freigabe MakeUp-Leuchte vorne links |
| 0x05 | Freigabe MakeUp-Leuchte vorne rechts |
| 0x06 | Freigabe MakeUp-Leuchte hinten links |
| 0x07 | Freigabe MakeUp-Leuchte hinten rechts |

### RES_0XD196

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_POSITION_HORIZONTAL_WERT | % | - | int | - | - | - | - | - | Angabe der Position des Schiebedachs in Prozent:  0 - 100 Prozent: 0 Schiebedach offen; 100 Schiebedach geschlossen; 0xFF bei ungültig |
| STAT_SHD_POSITION_HEBEN_WERT | % | - | int | - | - | - | - | - | Angabe der Postion in Prozent (0 Schiebedach offen, 100 Schiebedach geschlossen) |

### TAB_BUS_KONTAKT_3

| WERT | TEXT |
| --- | --- |
| 0x00 | Geschlossen |
| 0x01 | Offen |
| 0x03 | Signal ungültig |

### RES_0XD192

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_SHD_AUF | 0/1 | - | char | - | - | - | - | - | 0: Taster Schiebedach oeffnen nicht betaetigt 1: Taster Schiebedach oeffnen betaetigt |
| STAT_TASTER_SHD_MAUT_AUF | 0/1 | - | char | - | - | - | - | - | 0: Taster Schiebedach Maut oeffnen nicht betaetigt 1: Taster Schiebedach Maut oeffnen betaetigt |
| STAT_TASTER_SHD_ZU | 0/1 | - | char | - | - | - | - | - | 0: Taster Schiebedach schliessen nicht betaetigt 1: Taster Schiebedach schliessen betaetigt |
| STAT_TASTER_SHD_MAUT_ZU | 0/1 | - | char | - | - | - | - | - | 0: Taster Schiebedach Maut schliessen nicht betaetigt 1: Taster Schiebedach Maut schliessen betaetigt |
| STAT_TASTER_SHD_HEBEN | 0/1 | - | char | - | - | - | - | - | 0: Taster Schiebedach heben nicht betaetigt 1: Taster Schiebedach heben betaetigt |
| STAT_TASTER_SHD_NR | 0-n | - | char | - | TAB_SHD_VERFAHREN | - | - | - | 0 = Taster nicht betaetigt 1 = Oeffnen 2 = Maut oeffnen 3 = Schliessen 4 = Maut schliessen 5 = Heben / Zwangsspalt |

### ARG_0XD192

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_SCHALTER | 0-n | - | char | - | TAB_SHD_VERFAHREN | - | - | - | - | - | Auswahl siehe Tabelle TAB_SHD_TASTER |
| ZEIT | ms | - | unsigned int | - | - | - | - | - | - | - | Angabe der Zeit in ms. Ab 100 ms ist eine Auswirkung sichtbar |

### TAB_SHD_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Oeffnen |
| 0x02 | Maut oeffnen |
| 0x03 | Schliessen |
| 0x04 | Maut schliessen |
| 0x05 | Heben / Zwangsspalt |

### RES_0XD53A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LESELICHT_LINKS_VORNE | 0/1 | - | int | - | - | - | - | - | 1: Leselicht links vorne ein |
| STAT_LESELICHT_RECHTS_VORNE | 0/1 | - | int | - | - | - | - | - | 1: Leselicht rechts vorne ein |

### TAB_SINE_BATT_LEVEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Status vorhanden |
| 0x01 | Batterie Sirene leer |
| 0x02 | Batterie Sirene gut |
| 0x03 | Batterie Sirene neu |
| 0xFF | ungültiger Wert |

### TAB_BUS_TUERKONTAKT

| WERT | TEXT |
| --- | --- |
| 0x00 | Tür geschlossen |
| 0x01 | Tür offen |
| 0x02 | Signal unplausibel |
| 0x03 | Signal ungültig |
| 0xFF | ungültiger Wert |

### RES_0XD553

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LESELICHT_LINKS_HINTEN | 0/1 | - | int | - | - | - | - | - | 1= Leselicht links hinten ein |
| STAT_LESELICHT_RECHTS_HINTEN | 0/1 | - | int | - | - | - | - | - | 1: Leselicht rechts hinten ein |

### TAB_SHD_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | kein SHD-Treiber codiert |
| 0x01 | Webasto Treiber codiert |
| 0x02 | Continental (Siemens) Treiber codiert |
| 0xFF | ungültiger Wert |

### ARG_0XFE25

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAHRZEUGGESCHWINDIGKEIT | km/h | - | unsigned int | - | - | 64 | - | - | - | - | - |

### TAB_PANIK_MODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Panikmodus nicht freigeschaltet |
| 0x01 | Panikmodus freigeschaltet |
| 0x03 | Signal ungültig |

### TAB_STATUS_SHD_FREISCHALTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | SHD/CVM nicht freigeschaltet |
| 0x01 | SHD/CVM freigeschaltet |
| 0x03 | Signal ungültig |

### RES_0XFE83

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_FEEDBACK_EIN | 0-n | - | unsigned char | - | TAB_RELAIS_FEEDBACK | - | - | - | 0: SHD-Relais nicht angesteuert (weder auf noch zu) 1: SHD-Relais in Richtung auf oder zu angesteuert |
| STAT_ESH_FEEDBACK_EIN | 0-n | - | unsigned char | - | TAB_RELAIS_FEEDBACK | - | - | - | 0: ESH-Relais nicht angesteuert (weder auf noch zu) 1: ESH-Relais in Richtung auf oder zu angesteuert |
| STAT_RELAIS_SHD_1_EIN | 0-n | - | unsigned char | - | TAB_STATUS_RELAIS | - | - | - | 0: Relais nicht angesteuert 1: Relais angesteuert |
| STAT_RELAIS_SHD_2_EIN | 0-n | - | unsigned char | - | TAB_STATUS_RELAIS | - | - | - | 0: Relais nicht angesteuert 1: Relais angesteuert |
| STAT_RELAIS_ESH_1_EIN | 0-n | - | unsigned char | - | TAB_STATUS_RELAIS | - | - | - | 0: Relais nicht angesteuert 1: Relais angesteuert |
| STAT_RELAIS_ESH_2_EIN | 0-n | - | unsigned char | - | TAB_STATUS_RELAIS | - | - | - | 0: Relais nicht angesteuert 1: Relais angesteuert |

### TAB_RELAIS_FEEDBACK

| WERT | TEXT |
| --- | --- |
| 0x00 | Relais nicht angesteuert (weder auf noch zu) |
| 0x01 | Relais in Richtung auf oder zu angesteuert |
| 0xXY | ungültig |

### TAB_STATUS_HALLELEMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | aus |
| 0x01 | ein |
| 0x02 | Unterbrechung |
| 0x03 | Kurzschluss nach Masse |
| 0x04 | Kurzschluss nach Plus |
| 0xXY | ungültig |

### TAB_SHD_SLEEPIND

| WERT | TEXT |
| --- | --- |
| 0x00 | SHD nicht schlafbereit |
| 0x01 | SHD schlafbereit |
| 0xXY | ungültig |

### TAB_THERMOSCHUTZ

| WERT | TEXT |
| --- | --- |
| 0x00 | Thermoschutz wird ignoriert |
| 0x01 | Thermoschutz wird beachtet |
| 0xXY | ungültig |

### RES_0XFE26

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_FREIGABE | 0-n | - | unsigned char | - | TAB_SHD_FREIGABE | - | - | - | 0 = Freigabe nicht erzwungen Default-Verhalten 1 = Freigabe erzwungen |

### ARG_0XFE26

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_FREIGABE | 0-n | - | unsigned char | - | TAB_SHD_FREIGABE | - | - | - | - | - | 0 = Freigabe nicht erzwungen Default-Verhalten 1 = Freigabe erzwungen |

### TAB_SHD_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | Freigabe nicht erzwungen, Default-Verhalten |
| 0x01 | Freigabe erzwungen |
| 0xXY | ungültig |

### RES_0XFE27

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_EINSCHLAFEN_ERLAUBT | 0-n | - | unsigned char | - | TAB_SHD_SLEEPIND | - | - | - | Schlafbereitschaft |

### ARG_0XFE27

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SHD_EINSCHLAFEN_ERLAUBT | 0-n | - | unsigned char | - | TAB_SHD_SLEEPIND | - | - | - | - | - | Schlafbereitschaft (0: schaltet Schlefbereitschaft nicht flüchtig ab) |

### RES_0XFE28

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_EINKLEMMSCHUTZ | 0-n | - | unsigned char | - | TAB_EKS | - | - | - | Einklemmschutzfunktion SHD |

### ARG_0XFE28

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SHD_EINKLEMMSCHUTZ | 0-n | - | unsigned char | - | TAB_EKS | - | - | - | - | - | Einklemmschutzfunktion SHD |

### RES_0XFE29

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_EINKLEMMSCHUTZ | 0-n | - | unsigned char | - | TAB_EKS | - | - | - | Einklemmschutzfunktion ESH |

### ARG_0XFE29

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SHD_EINKLEMMSCHUTZ | 0-n | - | unsigned char | - | TAB_EKS | - | - | - | - | - | Einklemmschutzfunktion ESH |

### TAB_EKS

| WERT | TEXT |
| --- | --- |
| 0x00 | Einklemmschutz abgeschaltet |
| 0x01 | Einklemmschutz aktiv (Default-Verhalten) |
| 0xXY | ungültig |

### RES_0XFE2B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ESH_THERMOSCHUTZ_EIN | 0-n | - | unsigned char | - | TAB_THERMOSCHUTZ | - | - | - | ESH: Thermoschutz aktiv/inaktiv |
| STAT_ESH_THERMOSCHUTZ_WERT | Grad | - | unsigned char | - | - | - | - | -40 | Temperatur in Grad C |
| STAT_ESH_THERMOSCHUTZ_ZUSTAND_NR | 0-n | - | unsigned char | - | STAT_SHD_THERMOSCHUTZ_ZUSTAND | - | - | - | Zustand Schwelle |

### ARG_0XFE2B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ESH_THERMOSCHUTZ | 0-n | - | unsigned char | - | TAB_THERMOSCHUTZ | - | - | - | - | - | ESH: Thermoschutz aktiv/inaktiv |

### RES_0XFE2A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_THERMOSCHUTZ_EIN | 0-n | - | unsigned char | - | TAB_THERMOSCHUTZ | - | - | - | SHD: Thermoschutz aktiv/inaktiv |
| STAT_SHD_THERMOSCHUTZ_WERT | Grad | - | unsigned char | - | - | 1 | - | -40 | Temperatur in Grad C |
| STAT_SHD_THERMOSCHUTZ_ZUSTAND_NR | 0-n | - | unsigned char | - | STAT_SHD_THERMOSCHUTZ_ZUSTAND | - | - | - | Schwelle erreicht |

### ARG_0XFE2A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SHD_THERMOSCHUTZ | 0-n | - | unsigned char | - | TAB_THERMOSCHUTZ | - | - | - | - | - | SHD: Thermoschutz aktiv/inaktiv |

### RES_0XFE2C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_PANIKFREIGABE | 0-n | - | unsigned char | - | TAB_SHD_PANIK_FG | - | - | - | Übersteuerung der Panikfreigabe (CAN-Signal ST_PANIC_MOD): 0: Standardverhalten 1: Panikfunktion immer möglich |

### ARG_0XFE2C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_PANIKFREIGABE | 0-n | - | unsigned char | - | TAB_SHD_PANIK_FG | - | - | - | - | - | Übersteuerung der Panikfreigabe (CAN-Signal ST_PANIC_MOD): 0: Standardverhalten 1: Panikfunktion immer möglich |

### TAB_SHD_PANIK_FG

| WERT | TEXT |
| --- | --- |
| 0x00 | Freigabe der Panikfunktion wird durch das CAN-Signal ST_PANIC_MOD gesteuert |
| 0x01 | Freigabe der Panikfunktion erzwungen |
| 0xXY | ungültig |

### ARG_0XFE22

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | ms | - | unsigned int | - | - | - | - | - | - | - | - |

### ARG_0XFE23

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | ms | - | unsigned int | - | - | - | - | - | - | - | - |

### ARG_0XFE24

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | ms | - | unsigned int | - | - | - | - | - | - | - | - |

### ARG_0XFE21

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | ms | - | unsigned int | - | - | - | - | - | - | - | - |

### ARG_0XF02A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_SCHALTER | + | - | 0-n | - | unsigned char | - | TAB_SHD_VERFAHREN_ZEIT | - | - | - | - | - | - |
| ZEIT | + | - | ms | - | unsigned int | - | - | - | - | - | - | - | - |

### TAB_SHD_VERFAHREN_ZEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Öffnen |
| 0x02 | Schliessen |
| 0x03 | Heben/Zwangsspalt |

### STAT_SHD_THERMOSCHUTZ_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Unterhalb Schwelle |
| 1 | 90% Schwelle erreicht |
| 2 | 100% Schwelle erreicht |

### RES_0XFE89

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_HALLELEMENT_A_EIN | 0-n | - | unsigned char | - | TAB_STATUS_RELAIS | - | - | - | Aktueller Status SHD Hallsensor A   0 - AUS  1 - EIN |
| STAT_SHD_HALLELEMENT_B_EIN | 0-n | - | unsigned char | - | TAB_STATUS_RELAIS | - | - | - | Aktueller Status SHD Hallsensor B   0 - AUS  1 - EIN |
| STAT_ESH_HALLELEMENT_A_EIN | 0-n | - | unsigned char | - | TAB_STATUS_RELAIS | - | - | - | Aktueller Status ESH Hallsensor A   0 - AUS  1 - EIN |
| STAT_ESH_HALLELEMENT_B_EIN | 0-n | - | unsigned char | - | TAB_STATUS_RELAIS | - | - | - | Aktueller Status ESH Hallsensor B   0 - AUS  1 - EIN |
| STAT_SHD_HALLELEMENT_A_DIAG_SPANNUNG_WERT | Digits | - | unsigned int | - | - | - | - | - | Spannung SHD Hallsensor A in ADC Digits |
| STAT_SHD_HALLELEMENT_B_DIAG_SPANNUNG_WERT | Digits | - | unsigned int | - | - | - | - | - | Spannung SHD Hallsensor B in ADC Digits |
| STAT_ESH_HALLELEMENT_A_DIAG_SPANNUNG_WERT | Digits | - | unsigned int | - | - | - | - | - | Spannung ESH Hallsensor A in ADC Digits |
| STAT_ESH_HALLELEMENT_B_DIAG_SPANNUNG_WERT | Digits | - | unsigned int | - | - | - | - | - | Spannung ESH Hallsensor B in ADC Digits |
| STAT_HALLELEMENTE_REFERENZ_SPANNUNG_WERT | Digits | - | unsigned int | - | - | - | - | - | Hallsensor Referenzspannung in ADC Digits |
| STAT_HALLVERSORGUNG_EIN | 0-n | - | unsigned char | - | TAB_HALLVERSORGUNG | - | - | - | Aktueller Status Hallsensorversorgung 0 - AUS  1 - EIN |

### TAB_STATUS_RELAIS

| WERT | TEXT |
| --- | --- |
| 0 | Relais nicht angesteuert |
| 1 | Relais angesteuert |

### TAB_HALLVERSORGUNG

| WERT | TEXT |
| --- | --- |
| 0 | Hall Sensorversorgung ausgeschaltet |
| 1 | Hall Sensorversorgung eingeschaltet |

### TAB_STAT_MOTORSTOP_REASON

| WERT | TEXT |
| --- | --- |
| 0 | PDD_DIAG_NOT_STOPPED   Motor is running |
| 1 | PDD_DIAG_POSITION_REACHED  Target position reached |
| 2 | PDD_DIAG_STOP_MOVE    User logic terminated movement |
| 3 | PDD_DIAG_NORM_FINISHED  Normalization run finished |
| 4 | PDD_DIAG_RENORM_FINISHED  Renormalization run finished |
| 5 | PDD_DIAG_PINCHING    Pinching detected |
| 6 | PDD_DIAG_REV_POS_REACHED  Reversing position reached |
| 7 | PDD_DIAG_STALLING    Stalling detected |
| 8 | PDD_DIAG_NO_MOVE   Motor is not moving |
| 9 | PDD_DIAG_SAFETY_TIMER   Safety timer elapsed |
| 10 | PDD_DIAG_INVALID_TARGET_POS_LOW Target position to low |
| 11 | PDD_DIAG_INVALID_TARGET_POS_HIGH Target position to high |
| 12 | PDD_DIAG_HIGH_TEMP    Temperature protection active |
| 13 | PDD_DIAG_DRIVER_BAD   Driver hardware error |
| 14 | PDD_DIAG_RESET     Reset during motor movement |
| 15 | PDD_DIAG_MOTOR_VOLTAGE_RANGE Motor voltage out of range |
| 16 | PDD_DIAG_HALL_ERROR    Hall sensor error |

### RES_0XFE03

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REVERSIER_START_POSITION_1_WERT | mm | - | unsigned char | - | - | - | - | - | Startposition in [mm] bei letztem Reversieren |
| STAT_UMGEBUNGSTEMPERATUR_1_WERT | Grad C | - | unsigned char | - | - | - | - | 40 | Umgebungstemperatur  in [°C+40°C] bei letztem Reversieren |
| STAT_FAHRZEUG_GESCHWINDIGKEIT_1_WERT | km/h | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkei in [km/h] bei letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SPANNUNGSVERSORGUNG_1_WERT | V | - | unsigned char | - | - | - | - | - | Spannung SHD-Versorgung (Klemme 30Last) in [V] bei letztem Reversieren, bei Webastotreiber immer FF |
| STAT_KILOMETERSTAND_1_WERT | km | - | unsigned int | - | - | 4 | - | - | Kilometerstand in [4*km] bei letztem Reversieren, bei Webastotreiber immer FFFF |
| STAT_SHD_TREIBER_INTERN_1_A_WERT | Dez | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz a bei letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_1_B_WERT | Dez | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz b bei letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_1_C_WERT | Dez | - | unsigned int | - | - | - | - | - | treiberinterner Datensatz c bei letztem Reversieren, bei Webastotreiber immer FF |
| STAT_REVERSIER_START_POSITION_2_WERT | mm | - | unsigned char | - | - | - | - | - | Startposition in [mm] bei 2.-letztem Reversieren |
| STAT_UMGEBUNGSTEMPERATUR_2_WERT | Grad C | - | unsigned char | - | - | - | - | 40 | Umgebungstemperatur  in [°C+40°C] bei 2.-letztem Reversieren |
| STAT_FAHRZEUG_GESCHWINDIGKEIT_2_WERT | km/h | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkei in [km/h] bei 2.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SPANNUNGSVERSORGUNG_2_WERT | V | - | unsigned char | - | - | - | - | - | Spannung SHD-Versorgung (Klemme 30Last) in [V] bei 2.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_KILOMETERSTAND_2_WERT | km | - | unsigned int | - | - | 4 | - | - | Kilometerstand in [4*km] bei 2.-letztem Reversieren, bei Webastotreiber immer FFFF |
| STAT_SHD_TREIBER_INTERN_2_A_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz a bei 2.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_2_B_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz b bei 2.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_2_C_WERT | - | - | unsigned int | - | - | - | - | - | treiberinterner Datensatz c bei 2.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_REVERSIER_START_POSITION_3_WERT | mm | - | unsigned char | - | - | - | - | - | Startposition in [mm] bei 3.-letztem Reversieren |
| STAT_UMGEBUNGSTEMPERATUR_3_WERT | Grad C | - | unsigned char | - | - | - | - | 40 | Umgebungstemperatur  in [°C+40°C] bei 3.-letztem Reversieren |
| STAT_FAHRZEUG_GESCHWINDIGKEIT_3_WERT | km/h | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkei in [km/h] bei 3.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SPANNUNGSVERSORGUNG_3_WERT | V | - | unsigned char | - | - | - | - | - | Spannung SHD-Versorgung (Klemme 30Last) in [V] bei 3.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_KILOMETERSTAND_3_WERT | km | - | unsigned int | - | - | 4 | - | - | Kilometerstand in [4*km] bei 3.-letztem Reversieren, bei Webastotreiber immer FFFF |
| STAT_SHD_TREIBER_INTERN_3_A_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz a bei 3.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_3_B_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz b bei 3.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_3_C_WERT | - | - | unsigned int | - | - | - | - | - | treiberinterner Datensatz c bei 3.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_REVERSIER_START_POSITION_4_WERT | mm | - | unsigned char | - | - | - | - | - | Startposition in [mm] bei 4.-letztem Reversieren |
| STAT_UMGEBUNGSTEMPERATUR_4_WERT | Grad C | - | unsigned char | - | - | - | - | 40 | Umgebungstemperatur  in [°C+40°C] bei 4.-letztem Reversieren |
| STAT_FAHRZEUG_GESCHWINDIGKEIT_4_WERT | km/h | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkei in [km/h] bei 4.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SPANNUNGSVERSORGUNG_4_WERT | V | - | unsigned char | - | - | - | - | - | Spannung SHD-Versorgung (Klemme 30Last) in [V] bei 4.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_KILOMETERSTAND_4_WERT | km | - | unsigned int | - | - | 4 | - | - | Kilometerstand in [4*km] bei 4.-letztem Reversieren, bei Webastotreiber immer FFFF |
| STAT_SHD_TREIBER_INTERN_4_A_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz a bei 4.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_4_B_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz b bei 4.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_4_C_WERT | - | - | unsigned int | - | - | - | - | - | treiberinterner Datensatz c bei 4.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_REVERSIER_START_POSITION_5_WERT | mm | - | unsigned char | - | - | - | - | - | Startposition in [mm] bei 5.-letztem Reversieren |
| STAT_UMGEBUNGSTEMPERATUR_5_WERT | Grad C | - | unsigned char | - | - | - | - | 40 | Umgebungstemperatur  in [°C+40°C] bei 5.-letztem Reversieren |
| STAT_FAHRZEUG_GESCHWINDIGKEIT_5_WERT | km/h | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkei in [km/h] bei 5.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SPANNUNGSVERSORGUNG_5_WERT | V | - | unsigned char | - | - | - | - | - | Spannung SHD-Versorgung (Klemme 30Last) in [V] bei 5.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_KILOMETERSTAND_5_WERT | km | - | unsigned int | - | - | 4 | - | - | Kilometerstand in [4*km] bei 5.-letztem Reversieren, bei Webastotreiber immer FFFF |
| STAT_SHD_TREIBER_INTERN_5_A_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz a bei 5.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_5_B_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz b bei 5.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_5_C_WERT | - | - | unsigned int | - | - | - | - | - | treiberinterner Datensatz c bei 5.-letztem Reversieren, bei Webastotreiber immer FF |

### RES_0XFE05

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DENORMIER_GRUND_1_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_2_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_3_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_4_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_5_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_6_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_7_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_8_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_9_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_10_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |

### TAB_DENORMIERLOGGER_GRUND

| WERT | TEXT |
| --- | --- |
| 0 | Normiert, Sollzustand |
| 1 | Start Initialisierung |
| 2 | Normierungsbit durch Diagnose gelöscht |
| 3 | Fehler in Codierdaten |
| 4 | Hall abgeschaltet bei laufendem Motor |
| 5 | Eine falsche Position entdeckt bei stehendem Motor |
| 6 | Eine falsche Position entdeckt bei laufendem Motor |
| 7 | Keine Positionen gefunden nach Reset |
| 8 | Ein Hall-Sensor Fehler |
| 9 | Nach Reset war keine Normierung mehr da |

### RES_0XFE06

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DENORMIER_GRUND_1_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_2_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_3_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_4_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_5_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_6_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_7_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_8_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_9_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |
| STAT_DENORMIER_GRUND_10_NR | 0-n | - | unsigned char | - | TAB_DENORMIERLOGGER_GRUND | - | - | - | - |

### RES_0XFE04

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REVERSIER_START_POSITION_1_WERT | mm | - | unsigned char | - | - | - | - | - | Startposition in [mm] bei letztem Reversieren |
| STAT_UMGEBUNGSTEMPERATUR_1_WERT | Grad | - | unsigned char | - | - | - | - | 40 | Umgebungstemperatur  in [°C+40°C] bei letztem Reversieren |
| STAT_FAHRZEUG_GESCHWINDIGKEIT_1_WERT | km/h | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkei in [km/h] bei letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SPANNUNGSVERSORGUNG_1_WERT | V | - | unsigned char | - | - | - | - | - | Spannung SHD-Versorgung (Klemme 30Last) in [V] bei letztem Reversieren, bei Webastotreiber immer FF |
| STAT_KILOMETERSTAND_1_WERT | km | - | unsigned int | - | - | 4 | - | - | Kilometerstand in [4*km] bei letztem Reversieren, bei Webastotreiber immer FFFF |
| STAT_SHD_TREIBER_INTERN_1_A_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz a bei letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_1_B_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz b bei letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_1_C_WERT | - | - | unsigned int | - | - | - | - | - | treiberinterner Datensatz c bei letztem Reversieren, bei Webastotreiber immer FFFF |
| STAT_REVERSIER_START_POSITION_2_WERT | mm | - | unsigned char | - | - | - | - | - | Startposition in [mm] bei 2.-letztem Reversieren |
| STAT_UMGEBUNGSTEMPERATUR_2_WERT | Grad | - | unsigned char | - | - | - | - | 40 | Umgebungstemperatur  in [°C+40°C] bei 2.-letztem Reversieren |
| STAT_FAHRZEUG_GESCHWINDIGKEIT_2_WERT | km/h | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkei in [km/h] bei 2.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SPANNUNGSVERSORGUNG_2_WERT | V | - | unsigned char | - | - | - | - | - | Spannung SHD-Versorgung (Klemme 30Last) in [V] bei 2.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_KILOMETERSTAND_2_WERT | km | - | unsigned int | - | - | 4 | - | - | Kilometerstand in [4*km] bei 2.-letztem Reversieren, bei Webastotreiber immer FFFF |
| STAT_SHD_TREIBER_INTERN_2_A_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz a bei 2.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_2_B_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz b bei 2.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_2_C_WERT | - | - | unsigned int | - | - | - | - | - | treiberinterner Datensatz c bei 2.-letztem Reversieren, bei Webastotreiber immer FFFF |
| STAT_REVERSIER_START_POSITION_3_WERT | mm | - | unsigned char | - | - | - | - | - | Startposition in [mm] bei 3.-letztem Reversieren |
| STAT_UMGEBUNGSTEMPERATUR_3_WERT | Grad | - | unsigned char | - | - | - | - | 40 | Umgebungstemperatur  in [°C+40°C] bei 3.-letztem Reversieren |
| STAT_FAHRZEUG_GESCHWINDIGKEIT_3_WERT | km/h | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkei in [km/h] bei 3.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SPANNUNGSVERSORGUNG_3_WERT | V | - | unsigned char | - | - | - | - | - | Spannung SHD-Versorgung (Klemme 30Last) in [V] bei 3.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_KILOMETERSTAND_3_WERT | km | - | unsigned int | - | - | 4 | - | - | Kilometerstand in [4*km] bei 3.-letztem Reversieren, bei Webastotreiber immer FFFF |
| STAT_SHD_TREIBER_INTERN_3_A_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz a bei 3.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_3_B_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz b bei 3.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_3_C_WERT | - | - | unsigned int | - | - | - | - | - | treiberinterner Datensatz c bei 3.-letztem Reversieren, bei Webastotreiber immer FFFF |
| STAT_REVERSIER_START_POSITION_4_WERT | mm | - | unsigned char | - | - | - | - | - | Startposition in [mm] bei 4.-letztem Reversieren |
| STAT_UMGEBUNGSTEMPERATUR_4_WERT | Grad | - | unsigned char | - | - | - | - | 40 | Umgebungstemperatur  in [°C+40°C] bei 4.-letztem Reversieren |
| STAT_FAHRZEUG_GESCHWINDIGKEIT_4_WERT | km/h | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkei in [km/h] bei 4.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SPANNUNGSVERSORGUNG_4_WERT | V | - | unsigned char | - | - | - | - | - | Spannung SHD-Versorgung (Klemme 30Last) in [V] bei 4.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_KILOMETERSTAND_4_WERT | km | - | unsigned int | - | - | 4 | - | - | Kilometerstand in [4*km] bei 4.-letztem Reversieren, bei Webastotreiber immer FFFF |
| STAT_SHD_TREIBER_INTERN_4_A_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz a bei 4.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_4_B_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz b bei 4.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_4_C_WERT | - | - | unsigned int | - | - | - | - | - | treiberinterner Datensatz c bei 4.-letztem Reversieren, bei Webastotreiber immer FFFF |
| STAT_REVERSIER_START_POSITION_5_WERT | mm | - | unsigned char | - | - | - | - | - | Startposition in [mm] bei 5.-letztem Reversieren |
| STAT_UMGEBUNGSTEMPERATUR_5_WERT | Grad | - | unsigned char | - | - | - | - | 40 | Umgebungstemperatur  in [°C+40°C] bei 5.-letztem Reversieren |
| STAT_FAHRZEUG_GESCHWINDIGKEIT_5_WERT | km/h | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkei in [km/h] bei 5.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SPANNUNGSVERSORGUNG_5_WERT | V | - | unsigned char | - | - | - | - | - | Spannung SHD-Versorgung (Klemme 30Last) in [V] bei 5.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_KILOMETERSTAND_5_WERT | km | - | unsigned int | - | - | 4 | - | - | Kilometerstand in [4*km] bei 5.-letztem Reversieren, bei Webastotreiber immer FFFF |
| STAT_SHD_TREIBER_INTERN_5_A_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz a bei 5.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_5_B_WERT | - | - | unsigned char | - | - | - | - | - | treiberinterner Datensatz b bei 5.-letztem Reversieren, bei Webastotreiber immer FF |
| STAT_SHD_TREIBER_INTERN_5_C_WERT | - | - | unsigned int | - | - | - | - | - | treiberinterner Datensatz c bei 5.-letztem Reversieren, bei Webastotreiber immer FFFF |
