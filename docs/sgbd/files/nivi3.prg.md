# nivi3.prg

## General

|  |  |
| --- | --- |
| File | nivi3.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 102 |
| Origin | BMW EI-611 Schneider |
| Revision | 2.000 |
| Author | Autoliv AEE/D Wienecke |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Nightvision Generation 3 |  |  |
| ORIGIN | string | BMW EI-611 Schneider |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | Autoliv AEE/D Wienecke |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.39 |  |  |
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

### ARG_0X4000_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CONTROL_SHUTTER_TIME | s | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | CONTROL_SHUTTER_TIME |

### ARG_0X4002_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MCU_ADC_PORT | HEX | high | char | - | - | 1.0 | 1.0 | 0.0 | - | - | MCU_ADC_PORT |
| MCU_ADC_VALUE | HEX | high | unsigned int | - | - | - | - | - | - | - | MCU_ADC_VALUE |

### ARG_0X4004_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MCU_IO_PORT | HEX | high | char | - | - | 1.0 | 1.0 | 0.0 | - | - | - |
| MCU_IO_VALUE | HEX | high | char | - | - | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XA01A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SIGNALART | + | - | 0-n | - | unsigned char | - | TSignalArt | 1.0 | 1.0 | 0.0 | - | - | Art der Signalausgabe. |
| ARG_AUSGANG | + | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | - | - | Default: 0 Alle Ausgänge des Steuergerätes müssen einzeln und kombiniert anwählbar sein. |
| ARG_TIMEOUT | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die das Testbild ausgegeben wird. Default: 255 Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis: -der Job erneut mit Parameter 0 aufgerufen wird -das Steuergerät neu startet (Aufwachen, Reset, &) |

### ARG_0XA380_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODUS | + | - | 0-n | high | unsigned char | - | PIXELTEST_MODUS | - | - | - | - | - | Modus |

### ARG_0XA381_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SEITE | + | - | 0-n | high | unsigned char | - | SEITE | - | - | - | - | - | Angesteuertes Licht: 0x01 = Linke Seite 0x02 = Rechte Seite |
| WINKEL | + | - | ° | high | unsigned char | - | - | 1.0 | 0.1 | 125.0 | - | - | Winkel für Anleuchten ( -12.5 ... 12.5°) |
| DISTANZ | + | - | m | high | unsigned char | - | - | 1.0 | 5.0 | -4.0 | - | - | Virtuelle Distanz: (20 ... 90 m) |

### ARG_0XA383_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE | + | - | 0-n | high | unsigned char | - | TAB_MODE_JUSTAGELINIEN | 1.0 | 1.0 | 0.0 | - | - | Mode der Justagelinienanzeige: 0x01 = Mode1: Im Bild zentiert 0x02 = Mode 2: Mit Korrektur aus Online-Kalibrierung 0x03 = Mode 3: |

### ARG_0XD384_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ROTATIONSWINKEL | Grad | - | char | - | - | 10.0 | 1.0 | 0.0 | - | - | Im Werksprozess (CASCADE) festgestellten Winkel am Halter, Winkel aufgelöst in 0,1° Schritten im Bereich +/- 12,7°  0-127 entspricht 0° - 12,7°  128-255 entspricht (-12,7°) - (-0,1°) |
| NICKWINKEL | Grad | - | char | - | - | 10.0 | 1.0 | 0.0 | - | - | Angabe des in der ECU zu speichernden Nickwinkels auf 10-tel Grad genau (z.B. 2,3 °). |
| GIERWINKEL | Grad | - | char | - | - | 10.0 | 1.0 | 0.0 | - | - | Angabe des in der ECU zu speichernden Gierwinkels auf 10-tel Grad genau (z.B. 2,3 °). |

### ARG_0XD385_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IDENTIFIER | hex | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Ausgabe der gewünschten Zeile des Sensors.  IDENTIFIER = XX YY Hex,  XX h =  0x01: Pixel 1 - 160 der Zeile,  0x02: Pixel 161 - 320 der Zeile,  YY h =  0x01 - 0xF0: für die Zeile (1 - 240) |

### ARG_0XD3AC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BETRIEBSMODUS | 0-n | - | unsigned char | - | TAB_MODUS_PERSONENERKENNUNG | 1.0 | 1.0 | 0.0 | - | - | STOPP = Ansteuerung beenden, AUS = Personenerkennung AUS, EIN = Personenerkennung EIN (unabhängig von Umweltbedingungen), AUTO = Personenerkennung AUTO (mit Umweltbedingungsprüfung) |

### ARG_0XD3AE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_BLENDE | 1.0 | 1.0 | 0.0 | - | - | Ansteuerung der Blende der NiVi-Kamera: Argument siehe TAB_BLENDE |

### ARG_0XD3AF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_ARG_LINSENHEIZUNG | 1.0 | 1.0 | 0.0 | - | - | Ansteuerung der Linsenheizung der NiVi-Kamera: Argumente siehe TAB_ARG_LINSENHEIZUNG |

### ARG_0XD3B1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REFERENZBILD | 0-n | - | unsigned char | - | TAB_KALIBRIERUNG_NIVI | 1.0 | 1.0 | 0.0 | - | - | 0 = Abbrechen Kalibrierung ohne Speichern der Daten und zurück zur normalen Ansicht 1 = Referenzbild mit Ansicht der Justagelinien durch die Veränderung der Werte in Argumenten 2 = Beenden Kalibrierung mit Speichern der Daten und zurück zur normalen Ansicht |
| RICHTUNG | 0-n | - | unsigned char | - | TAB_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Angabe der Richtung der Verstellung in Pixel.  1 = OBEN = nach oben,  2 = UNTEN = nach unten |
| ANZ_SCHRITTE | Pixel | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vertikale Verschiebung um die Anzahl der Zeile nach oben bzw unten. 1 - 20 Zeilen. Default = 1, wenn nicht gesetzt. |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | kein Betriebsmode |
| 0x01 | Spezieller Energiesparmode | Night Vision 2 deaktiviert |
| 0x02 | ECOS-Mode | Night Vision 2 deaktiviert |
| 0x04 | MOST-Mode | Night Vision 2 deaktiviert |
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
| 0x8004B6 | Blindheit erkannt | 1 |
| 0xDEE41F | Botschaft (0x12F, Klemmen): Ausfall | 1 |
| 0xDEE415 | Botschaft (0x163, Neigung Fahrbahn): Ausfall | 1 |
| 0xDEE407 | Botschaft (0x199, Längsbeschleunigung Schwerpunkt): Ausfall | 1 |
| 0xDEE404 | Botschaft (0x19F, Giergeschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xDEE403 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xDEE413 | Botschaft (0x1BE, Status GZA Links): Ausfall | 1 |
| 0xDEE412 | Botschaft (0x1D7, Status GZA Rechts): Ausfall | 1 |
| 0xDEE410 | Botschaft (0x213, Status HUD): Ausfall | 1 |
| 0xDEE406 | Botschaft (0x21A, Lampenzustand): Ausfall | 1 |
| 0xDEE40B | Botschaft (0x23A, Status Funkschlüssel): Ausfall | 1 |
| 0xDEE400 | Botschaft (0x28A, Bedienung Taster Night-Vision): Ausfall | 1 |
| 0xDEE40D | Botschaft (0x2A5, Status Helligkeit Umgebung): Ausfall | 1 |
| 0xDEE40E | Botschaft (0x2CA, Aussentemperatur): Ausfall | 1 |
| 0xDEE40A | Botschaft (0x314, Status Fahrlicht): Ausfall | 1 |
| 0xDEE409 | Botschaft (0x328, Relativzeit): Ausfall | 1 |
| 0xDEE405 | Botschaft (0x330, Kilometerstand/Reichweite): Ausfall | 1 |
| 0xDEE40C | Botschaft (0x380, Fahrgestellnummer): Ausfall | 1 |
| 0xDEE402 | Botschaft (0x3A0, Fahrzeugzustand): Ausfall | 1 |
| 0xDEE411 | Botschaft (0x3F9, Daten Antriebsstrang 2): Ausfall | 1 |
| 0xDEE414 | Botschaft (0x95, Objektdaten blendfreier Fernlicht-Assistent): Ausfall | 1 |
| 0xDEE416 | Botschaft (Status Objekt Koordination, ID: STAT_OBJ_COOR) - Timeout | 1 |
| 0x8004B3 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x8004B1 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x8004B2 | Codierung: Signatur für Daten nicht gültig | 0 |
| 0x8004B0 | Codierung: Steuergerät nicht codiert | 0 |
| 0x8004B4 | Codierung: unplausible Daten während der Transaktion | 0 |
| 0x800497 | Diebstahlschutz: Freischaltcode für Kamera ungültig | 0 |
| 0x8004B7 | Diebstahlschutz: Freischaltcode für Sicherheitsfahrzeuge ungültig | 0 |
| 0x800496 | Diebstahlschutz: Freischaltcode für Steuergerät ungültig | 0 |
| 0x800495 | Diebstahlschutz: falsche Zuordnung der Komponenten | 0 |
| 0x02FF57 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0xDECBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0x025700 | Energiesparmode aktiv | 0 |
| 0xDEC40A | FA-CAN Control Module Bus OFF | 0 |
| 0xDEC401 | FA-CAN Physikalischer Busfehler | 0 |
| 0x8004B5 | Gezieltes Anleuchten konnte nicht ausgeführt werden | 0 |
| 0x800484 | LVDS-Leitungen: Defekt erkannt | 0 |
| 0x80048C | NiVi-Kamera: Abschaltung wegen Übertemperatur | 0 |
| 0x800492 | NiVi-Kamera: Blendenmotor defekt | 0 |
| 0x8004B9 | NiVi-Kamera: EEPROM Fehler | 0 |
| 0x800498 | NiVi-Kamera: Eingefrorenes Bild | 0 |
| 0x80048E | NiVi-Kamera: Heizwendel der Linse defekt | 0 |
| 0x800491 | NiVi-Kamera: IR-Sensor defekt | 0 |
| 0x800494 | NiVi-Kamera: Interner Softwarefehler | 0 |
| 0x800490 | NiVi-Kamera: Kamera dejustiert | 1 |
| 0x800493 | NiVi-Kamera: Maximale Anzahl defekter Pixel überschritten | 0 |
| 0x800487 | NiVi-Kamera: Unterspannung erkannt | 0 |
| 0x8004B8 | NiVi-Kamera: Überspannung erkannt | 0 |
| 0x800480 | NiVi-Steuergerät, FBAS-Ausgang (+): Kurzschluss nach Plus | 0 |
| 0x800481 | NiVi-Steuergerät, FBAS-Ausgang (-): Kurzschluss nach Plus | 0 |
| 0x800486 | NiVi-Steuergerät, Video-Eingangssignal: Kein Sync-Signal oder Video-Signal von Kamera | 0 |
| 0x80049B | NiVi-Steuergerät: Abschaltung wegen Übertemperatur | 0 |
| 0x80049E | NiVi-Steuergerät: Eingefrorenes Bild | 0 |
| 0x8004BA | NiVi-Steuergerät: Fehler ECU DSP Speicher | 0 |
| 0x80049C | NiVi-Steuergerät: Interner Hardwarefehler | 0 |
| 0x80049A | NiVi-Steuergerät: Interner Softwarefehler | 0 |
| 0x800488 | NiVi-Steuergerät: Stromaufnahme der Kamera zu hoch | 0 |
| 0x80048A | NiVi-Steuergerät: Unterspannung erkannt | 0 |
| 0x800499 | NiVi-Steuergerät: Unzulässige Softwarekonfiguration; Codierung nicht durchgeführt | 0 |
| 0x80048B | NiVi-Steuergerät: Überspannung erkannt | 0 |
| 0x80049D | NiVi-Taster: Unzulässigen Tastenstatus erkannt (bei E70) | 1 |
| 0xDEEC01 | Signal (0x12F) ungültig empfangen: Signal Klemmen Fehler (Status Klemme) | 1 |
| 0xDEEC13 | Signal (0x163) ungültig empfangen: Neigung_Fahrbahn | 1 |
| 0xDEEC09 | Signal (0x199) ungültig empfangen: Längsbeschleunigung_Schwerpunkt | 1 |
| 0xDEEC07 | Signal (0x19F) ungültig empfangen: Giergeschwindigkeit_Fahrzeug | 1 |
| 0xDEEC10 | Signal (0x213) ungültig empfangen: Status_Backlight_HUD | 1 |
| 0xDEEC00 | Signal (0x21C) ungültig empfangen: Bedienung Night Vision (Bildzustand Ein / Aus)  | 1 |
| 0xDEEC03 | Signal (0x21C) ungültig empfangen: Bedienung Night Vision(Objekterkennung)  | 1 |
| 0xDEEC0A | Signal (0x226) ungültig empfangen: Status_Regensensor | 1 |
| 0xDEEC0F | Signal (0x252) ungültig empfangen: Position_Wischerblatt | 1 |
| 0xDEEC04 | Signal (0x28A) ungültig empfangen: Bedienung_Taster_Night-Vision | 1 |
| 0xDEEC0D | Signal (0x2A5) ungültig empfangen: Wert_Helligkeit_Umgebung | 1 |
| 0xDEEC0E | Signal (0x2CA) ungültig empfangen: Aussentemperatur | 1 |
| 0xDEEC0B | Signal (0x314) ungültig empfangen: Status_Sensor_Fahrlicht | 1 |
| 0xDEEC0C | Signal (0x380) ungültig empfangen: Nummer_Fahrgestell | 1 |
| 0xDEEC11 | Signal (0x3F9) ungültig empfangen: Status_Antrieb_Fahrzeug | 1 |
| 0xDEEC12 | Signal (0x95) ungültig empfangen: Objektdaten blendfreier Fernlicht-Assistent | 1 |
| 0xDEEC16 | Signal STAT_OBJ_COOR:ST_AVAI_CHAIN_WARN (0x21F) is invalid | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x6F00 | OPERATION_VEH_FZM | 0-n | High | 0xFF | TAB_VEH_CON | - | - | - |
| 0x6F01 | KAMERA_STROM | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x6F02 | BETRIEBS_SPANNUNG_ECU | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x6F03 | ECU_TEMPERATUR | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6F04 | CAM_LINK_STATUS | 0-n | High | 0xFF | TAB_KAM_LINK_STATUS | - | - | - |
| 0x6F05 | TEMP_CAM | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6F06 | OPERATING_HOURS_CAM | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6F07 | KAMERA_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x6F08 | HEATER_TEMPERATURE | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6F10 | QUALIFIER | 0-n | High | 0xFF | TAB_QUALIFIER | - | - | - |
| 0x6F11 | SYS_EC | HEX | High | signed long | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | ja |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x570000 | ERR_MCU_NVM_WRITE_FAILED | 0 |
| 0x570001 | ERR_MCU_NVM_READ_FAILED | 0 |
| 0x570002 | ERR_MCU_NVM_CONTROL_FAILED | 0 |
| 0x570003 | ERR_MCU_NVM_E_ERASE_FAILED | 0 |
| 0x570004 | ERR_MCU_NVM_E_WRITE_ALL_FAILED | 0 |
| 0x570005 | ERR_MCU_NVM_E_WRONG_CONFIG_ID | 0 |
| 0x570006 | ERR_MCU_NVM_E_READ_ALL_FAILED | 0 |
| 0x570007 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x570008 | PIA_E_IO_ERROR | 0 |
| 0x570009 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x57000A | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x57000B | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0x8BAC50 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x8BAC82 | VSM_EVENT_VEHICLESTATE | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x6F02 | BETRIEBS_SPANNUNG_ECU | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x6F03 | ECU_TEMPERATUR | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6F11 | SYS_EC | HEX | High | signed long | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### PIXELTEST_MODUS

| WERT | TEXT |
| --- | --- |
| 00 | Default Modus, Initialisierung mit automatisch gefundenen defekten Pixeln. |
| 01 | Werkseingestellte defekte Pixel Tabelle laden. |

### RES_0X2300_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_IMAGE_BRIGHTNESS_1_1_WERT | - | - | unsigned int | - | - | - | - | - | 0 <= B <= 20 - Driver 1 |
| STAT_NV_IMAGE_BRIGHTNESS_2_1_WERT | - | - | unsigned int | - | - | - | - | - | 20 <= B <= 40 - Driver 1 |
| STAT_NV_IMAGE_BRIGHTNESS_3_1_WERT | - | - | unsigned int | - | - | - | - | - | 40 < B <= 60 - Driver 1 |
| STAT_NV_IMAGE_BRIGHTNESS_4_1_WERT | - | - | unsigned int | - | - | - | - | - | 60 < B <= 80 - Driver 1 |
| STAT_NV_IMAGE_BRIGHTNESS_5_1_WERT | - | - | unsigned int | - | - | - | - | - | 80 < B <= 100 - Driver 1 |
| STAT_NV_IMAGE_BRIGHTNESS_6_1_WERT | - | - | unsigned int | - | - | - | - | - | 100 <= B <= 120 - Driver 1 |
| STAT_NV_IMAGE_BRIGHTNESS_7_1_WERT | - | - | unsigned int | - | - | - | - | - | 120 <= B <= 140 - Driver 1 |
| STAT_NV_IMAGE_BRIGHTNESS_8_1_WERT | - | - | unsigned int | - | - | - | - | - | 140 <= B <= 160 - Driver 1 |
| STAT_NV_IMAGE_BRIGHTNESS_9_1_WERT | - | - | unsigned int | - | - | - | - | - | 160 <= B <= 180 - Driver 1 |
| STAT_NV_IMAGE_BRIGHTNESS_10_1_WERT | - | - | unsigned int | - | - | - | - | - | 180 <= B <= 200 - Driver 1 |
| STAT_NV_IMAGE_BRIGHTNESS_11_1_WERT | - | - | unsigned int | - | - | - | - | - | 200 <= B <= 220 - Driver 1 |
| STAT_NV_IMAGE_BRIGHTNESS_12_1_WERT | - | - | unsigned int | - | - | - | - | - | 220 <= B <= 240 - Driver 1 |
| STAT_NV_IMAGE_BRIGHTNESS_13_1_WERT | - | - | unsigned int | - | - | - | - | - | 240 <= B <= 254 - Driver 1 |
| STAT_NV_IMAGE_BRIGHTNESS_1_2_WERT | - | - | unsigned int | - | - | - | - | - | 0 <= B <= 20 - Driver 2 |
| STAT_NV_IMAGE_BRIGHTNESS_2_2_WERT | - | - | unsigned int | - | - | - | - | - | 20 <= B <= 40 - Driver 2 |
| STAT_NV_IMAGE_BRIGHTNESS_3_2_WERT | - | - | unsigned int | - | - | - | - | - | 40 < B <= 60 - Driver 2 |
| STAT_NV_IMAGE_BRIGHTNESS_4_2_WERT | - | - | unsigned int | - | - | - | - | - | 60 < B <= 80 - Driver 2 |
| STAT_NV_IMAGE_BRIGHTNESS_5_2_WERT | - | - | unsigned int | - | - | - | - | - | 80 < B <= 100 - Driver 2 |
| STAT_NV_IMAGE_BRIGHTNESS_6_2_WERT | - | - | unsigned int | - | - | - | - | - | 100 <= B <= 120 - Driver 2 |
| STAT_NV_IMAGE_BRIGHTNESS_7_2_WERT | - | - | unsigned int | - | - | - | - | - | 120 <= B <= 140 - Driver 2 |
| STAT_NV_IMAGE_BRIGHTNESS_8_2_WERT | - | - | unsigned int | - | - | - | - | - | 140 <= B <= 160 - Driver 2 |
| STAT_NV_IMAGE_BRIGHTNESS_9_2_WERT | - | - | unsigned int | - | - | - | - | - | 160 <= B <= 180 - Driver 2 |
| STAT_NV_IMAGE_BRIGHTNESS_10_2_WERT | - | - | unsigned int | - | - | - | - | - | 180 <= B <= 200 - Driver 2 |
| STAT_NV_IMAGE_BRIGHTNESS_11_2_WERT | - | - | unsigned int | - | - | - | - | - | 200 <= B <= 220 - Driver 2 |
| STAT_NV_IMAGE_BRIGHTNESS_12_2_WERT | - | - | unsigned int | - | - | - | - | - | 220 <= B <= 240 - Driver 2 |
| STAT_NV_IMAGE_BRIGHTNESS_13_2_WERT | - | - | unsigned int | - | - | - | - | - | 240 <= B <= 254 - Driver 2 |
| STAT_NV_IMAGE_BRIGHTNESS_1_3_WERT | - | - | unsigned int | - | - | - | - | - | 0 <= B <= 20 - Driver 3 |
| STAT_NV_IMAGE_BRIGHTNESS_2_3_WERT | - | - | unsigned int | - | - | - | - | - | 20 <= B <= 40 - Driver 3 |
| STAT_NV_IMAGE_BRIGHTNESS_3_3_WERT | - | - | unsigned int | - | - | - | - | - | 40 < B <= 60 - Driver 3 |
| STAT_NV_IMAGE_BRIGHTNESS_4_3_WERT | - | - | unsigned int | - | - | - | - | - | 60 < B <= 80 - Driver 3 |
| STAT_NV_IMAGE_BRIGHTNESS_5_3_WERT | - | - | unsigned int | - | - | - | - | - | 80 < B <= 100 - Driver 3 |
| STAT_NV_IMAGE_BRIGHTNESS_6_3_WERT | - | - | unsigned int | - | - | - | - | - | 100 <= B <= 120 - Driver 3 |
| STAT_NV_IMAGE_BRIGHTNESS_7_3_WERT | - | - | unsigned int | - | - | - | - | - | 120 <= B <= 140 - Driver 3 |
| STAT_NV_IMAGE_BRIGHTNESS_8_3_WERT | - | - | unsigned int | - | - | - | - | - | 140 <= B <= 160 - Driver 3 |
| STAT_NV_IMAGE_BRIGHTNESS_9_3_WERT | - | - | unsigned int | - | - | - | - | - | 160 <= B <= 180 - Driver 3 |
| STAT_NV_IMAGE_BRIGHTNESS_10_3_WERT | - | - | unsigned int | - | - | - | - | - | 180 <= B <= 200 - Driver 3 |
| STAT_NV_IMAGE_BRIGHTNESS_11_3_WERT | - | - | unsigned int | - | - | - | - | - | 200 <= B <= 220 - Driver 3 |
| STAT_NV_IMAGE_BRIGHTNESS_12_3_WERT | - | - | unsigned int | - | - | - | - | - | 220 <= B <= 240 - Driver 3 |
| STAT_NV_IMAGE_BRIGHTNESS_13_3_WERT | - | - | unsigned int | - | - | - | - | - | 240 <= B <= 254 - Driver 3 |

### RES_0X2301_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_1_500_WERT | - | - | unsigned int | - | - | - | - | - | 0 <= B <= 20 - 500 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_2_500_WERT | - | - | unsigned int | - | - | - | - | - | 20 <= B <= 40 - 500 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_3_500_WERT | - | - | unsigned int | - | - | - | - | - | 40 < B <= 60 - 500 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_4_500_WERT | - | - | unsigned int | - | - | - | - | - | 60 < B <= 80 - 500 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_5_500_WERT | - | - | unsigned int | - | - | - | - | - | 80 < B <= 100 - 500 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_6_500_WERT | - | - | unsigned int | - | - | - | - | - | 100 <= B <= 120 - 500 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_7_500_WERT | - | - | unsigned int | - | - | - | - | - | 120 <= B <= 140 - 500 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_8_500_WERT | - | - | unsigned int | - | - | - | - | - | 140 <= B <= 160 - 500 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_9_500_WERT | - | - | unsigned int | - | - | - | - | - | 160 <= B <= 180 - 500 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_10_500_WERT | - | - | unsigned int | - | - | - | - | - | 180 <= B <= 200 - 500 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_11_500_WERT | - | - | unsigned int | - | - | - | - | - | 200 <= B <= 220 - 500 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_12_500_WERT | - | - | unsigned int | - | - | - | - | - | 220 <= B <= 240 - 500 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_13_500_WERT | - | - | unsigned int | - | - | - | - | - | 240 <= B <= 254 - 500 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_1_1000_WERT | - | - | unsigned int | - | - | - | - | - | 0 <= B <= 20 - 1000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_2_1000_WERT | - | - | unsigned int | - | - | - | - | - | 20 <= B <= 40 - 1000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_3_1000_WERT | - | - | unsigned int | - | - | - | - | - | 40 < B <= 60 - 1000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_4_1000_WERT | - | - | unsigned int | - | - | - | - | - | 60 < B <= 80 - 1000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_5_1000_WERT | - | - | unsigned int | - | - | - | - | - | 80 < B <= 100 - 1000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_6_1000_WERT | - | - | unsigned int | - | - | - | - | - | 100 <= B <= 120 - 1000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_7_1000_WERT | - | - | unsigned int | - | - | - | - | - | 120 <= B <= 140 - 1000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_8_1000_WERT | - | - | unsigned int | - | - | - | - | - | 140 <= B <= 160 - 1000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_9_1000_WERT | - | - | unsigned int | - | - | - | - | - | 160 <= B <= 180 - 1000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_10_1000_WERT | - | - | unsigned int | - | - | - | - | - | 180 <= B <= 200 - 1000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_11_1000_WERT | - | - | unsigned int | - | - | - | - | - | 200 <= B <= 220 - 1000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_12_1000_WERT | - | - | unsigned int | - | - | - | - | - | 220 <= B <= 240 - 1000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_13_1000_WERT | - | - | unsigned int | - | - | - | - | - | 240 <= B <= 254 - 1000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_1_2000_WERT | - | - | unsigned int | - | - | - | - | - | 0 <= B <= 20 - 2000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_2_2000_WERT | - | - | unsigned int | - | - | - | - | - | 20 <= B <= 40 - 2000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_3_2000_WERT | - | - | unsigned int | - | - | - | - | - | 40 < B <= 60 - 2000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_4_2000_WERT | - | - | unsigned int | - | - | - | - | - | 60 < B <= 80 - 2000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_5_2000_WERT | - | - | unsigned int | - | - | - | - | - | 80 < B <= 100 - 2000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_6_2000_WERT | - | - | unsigned int | - | - | - | - | - | 100 <= B <= 120 - 2000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_7_2000_WERT | - | - | unsigned int | - | - | - | - | - | 120 <= B <= 140 - 2000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_8_2000_WERT | - | - | unsigned int | - | - | - | - | - | 140 <= B <= 160 - 2000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_9_2000_WERT | - | - | unsigned int | - | - | - | - | - | 160 <= B <= 180 - 2000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_10_2000_WERT | - | - | unsigned int | - | - | - | - | - | 180 <= B <= 200 - 2000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_11_2000_WERT | - | - | unsigned int | - | - | - | - | - | 200 <= B <= 220 - 2000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_12_2000_WERT | - | - | unsigned int | - | - | - | - | - | 220 <= B <= 240 - 2000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_13_2000_WERT | - | - | unsigned int | - | - | - | - | - | 240 <= B <= 254 - 2000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_1_5000_WERT | - | - | unsigned int | - | - | - | - | - | 0 <= B <= 20 - 5000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_2_5000_WERT | - | - | unsigned int | - | - | - | - | - | 20 <= B <= 40 - 5000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_3_5000_WERT | - | - | unsigned int | - | - | - | - | - | 40 < B <= 60 - 5000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_4_5000_WERT | - | - | unsigned int | - | - | - | - | - | 60 < B <= 80 - 5000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_5_5000_WERT | - | - | unsigned int | - | - | - | - | - | 80 < B <= 100 - 5000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_6_5000_WERT | - | - | unsigned int | - | - | - | - | - | 100 <= B <= 120 - 5000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_7_5000_WERT | - | - | unsigned int | - | - | - | - | - | 120 <= B <= 140 - 5000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_8_5000_WERT | - | - | unsigned int | - | - | - | - | - | 140 <= B <= 160 - 5000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_9_5000_WERT | - | - | unsigned int | - | - | - | - | - | 160 <= B <= 180 - 5000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_10_5000_WERT | - | - | unsigned int | - | - | - | - | - | 180 <= B <= 200 - 5000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_11_5000_WERT | - | - | unsigned int | - | - | - | - | - | 200 <= B <= 220 - 5000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_12_5000_WERT | - | - | unsigned int | - | - | - | - | - | 220 <= B <= 240 - 5000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_13_5000_WERT | - | - | unsigned int | - | - | - | - | - | 240 <= B <= 254 - 5000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_1_10000_WERT | - | - | unsigned int | - | - | - | - | - | 0 <= B <= 20 - 10000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_2_10000_WERT | - | - | unsigned int | - | - | - | - | - | 20 <= B <= 40 - 10000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_3_10000_WERT | - | - | unsigned int | - | - | - | - | - | 40 < B <= 60 - 10000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_4_10000_WERT | - | - | unsigned int | - | - | - | - | - | 60 < B <= 80 - 10000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_5_10000_WERT | - | - | unsigned int | - | - | - | - | - | 80 < B <= 100 - 10000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_6_10000_WERT | - | - | unsigned int | - | - | - | - | - | 100 <= B <= 120 - 10000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_7_10000_WERT | - | - | unsigned int | - | - | - | - | - | 120 <= B <= 140 - 10000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_8_10000_WERT | - | - | unsigned int | - | - | - | - | - | 140 <= B <= 160 - 10000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_9_10000_WERT | - | - | unsigned int | - | - | - | - | - | 160 <= B <= 180 - 10000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_10_10000_WERT | - | - | unsigned int | - | - | - | - | - | 180 <= B <= 200 - 10000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_11_10000_WERT | - | - | unsigned int | - | - | - | - | - | 200 <= B <= 220 - 10000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_12_10000_WERT | - | - | unsigned int | - | - | - | - | - | 220 <= B <= 240 - 10000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_13_10000_WERT | - | - | unsigned int | - | - | - | - | - | 240 <= B <= 254 - 10000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_1_20000_WERT | - | - | unsigned int | - | - | - | - | - | 0 <= B <= 20 - 20000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_2_20000_WERT | - | - | unsigned int | - | - | - | - | - | 20 <= B <= 40 - 20000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_3_20000_WERT | - | - | unsigned int | - | - | - | - | - | 40 < B <= 60 - 20000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_4_20000_WERT | - | - | unsigned int | - | - | - | - | - | 60 < B <= 80 - 20000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_5_20000_WERT | - | - | unsigned int | - | - | - | - | - | 80 < B <= 100 - 20000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_6_20000_WERT | - | - | unsigned int | - | - | - | - | - | 100 <= B <= 120 - 20000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_7_20000_WERT | - | - | unsigned int | - | - | - | - | - | 120 <= B <= 140 - 20000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_8_20000_WERT | - | - | unsigned int | - | - | - | - | - | 140 <= B <= 160 - 20000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_9_20000_WERT | - | - | unsigned int | - | - | - | - | - | 160 <= B <= 180 - 20000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_10_20000_WERT | - | - | unsigned int | - | - | - | - | - | 180 <= B <= 200 - 20000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_11_20000_WERT | - | - | unsigned int | - | - | - | - | - | 200 <= B <= 220 - 20000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_12_20000_WERT | - | - | unsigned int | - | - | - | - | - | 220 <= B <= 240 - 20000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_13_20000_WERT | - | - | unsigned int | - | - | - | - | - | 240 <= B <= 254 - 20000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_1_50000_WERT | - | - | unsigned int | - | - | - | - | - | 0 <= B <= 20 - 50000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_2_50000_WERT | - | - | unsigned int | - | - | - | - | - | 20 <= B <= 40 - 50000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_3_50000_WERT | - | - | unsigned int | - | - | - | - | - | 40 < B <= 60 - 50000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_4_50000_WERT | - | - | unsigned int | - | - | - | - | - | 60 < B <= 80 - 50000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_5_50000_WERT | - | - | unsigned int | - | - | - | - | - | 80 < B <= 100 - 50000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_6_50000_WERT | - | - | unsigned int | - | - | - | - | - | 100 <= B <= 120 - 50000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_7_50000_WERT | - | - | unsigned int | - | - | - | - | - | 120 <= B <= 140 - 50000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_8_50000_WERT | - | - | unsigned int | - | - | - | - | - | 140 <= B <= 160 - 50000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_9_50000_WERT | - | - | unsigned int | - | - | - | - | - | 160 <= B <= 180 - 50000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_10_50000_WERT | - | - | unsigned int | - | - | - | - | - | 180 <= B <= 200 - 50000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_11_50000_WERT | - | - | unsigned int | - | - | - | - | - | 200 <= B <= 220 - 50000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_12_50000_WERT | - | - | unsigned int | - | - | - | - | - | 220 <= B <= 240 - 50000 |
| STAT_NV_IMAGE_BRIGHTNESS_HISTO_13_50000_WERT | - | - | unsigned int | - | - | - | - | - | 240 <= B <= 254 - 50000 |

### RES_0X2302_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_IMAGE_CONTRAST_1_1_WERT | - | - | unsigned int | - | - | - | - | - | -127 <= C <= -120  - Driver 1 |
| STAT_NV_IMAGE_CONTRAST_2_1_WERT | - | - | unsigned int | - | - | - | - | - | -120 < C <= -100 - Driver 1 |
| STAT_NV_IMAGE_CONTRAST_3_1_WERT | - | - | unsigned int | - | - | - | - | - | -100 < C <= -80 - Driver 1 |
| STAT_NV_IMAGE_CONTRAST_4_1_WERT | - | - | unsigned int | - | - | - | - | - | -80 < C <= -60 - Driver 1 |
| STAT_NV_IMAGE_CONTRAST_5_1_WERT | - | - | unsigned int | - | - | - | - | - | -60 < C <= -40 - Driver 1 |
| STAT_NV_IMAGE_CONTRAST_6_1_WERT | - | - | unsigned int | - | - | - | - | - | -40 < C <= -20 - Driver 1 |
| STAT_NV_IMAGE_CONTRAST_7_1_WERT | - | - | unsigned int | - | - | - | - | - | -20 < C <= 0 - Driver 1 |
| STAT_NV_IMAGE_CONTRAST_8_1_WERT | - | - | unsigned int | - | - | - | - | - | 0 < C <= 20 - Driver 1 |
| STAT_NV_IMAGE_CONTRAST_9_1_WERT | - | - | unsigned int | - | - | - | - | - | 20 < C <= 40 - Driver 1 |
| STAT_NV_IMAGE_CONTRAST_10_1_WERT | - | - | unsigned int | - | - | - | - | - | 40 < C <= 60 - Driver 1 |
| STAT_NV_IMAGE_CONTRAST_11_1_WERT | - | - | unsigned int | - | - | - | - | - | 60 < C <= 80 - Driver 1 |
| STAT_NV_IMAGE_CONTRAST_12_1_WERT | - | - | unsigned int | - | - | - | - | - | 80 < C <= 100 - Driver 1 |
| STAT_NV_IMAGE_CONTRAST_13_1_WERT | - | - | unsigned int | - | - | - | - | - | 100 < C <= 120 - Driver 1 |
| STAT_NV_IMAGE_CONTRAST_14_1_WERT | - | - | unsigned int | - | - | - | - | - | 120 < C <= 127 - Driver 1 |
| STAT_NV_IMAGE_CONTRAST_1_2_WERT | - | - | unsigned int | - | - | - | - | - | -127 <= C <= -120  - Driver 2 |
| STAT_NV_IMAGE_CONTRAST_2_2_WERT | - | - | unsigned int | - | - | - | - | - | -120 < C <= -100 - Driver 2 |
| STAT_NV_IMAGE_CONTRAST_3_2_WERT | - | - | unsigned int | - | - | - | - | - | -100 < C <= -80 - Driver 2 |
| STAT_NV_IMAGE_CONTRAST_4_2_WERT | - | - | unsigned int | - | - | - | - | - | -80 < C <= -60 - Driver 2 |
| STAT_NV_IMAGE_CONTRAST_5_2_WERT | - | - | unsigned int | - | - | - | - | - | -60 < C <= -40 - Driver 2 |
| STAT_NV_IMAGE_CONTRAST_6_2_WERT | - | - | unsigned int | - | - | - | - | - | -40 < C <= -20 - Driver 2 |
| STAT_NV_IMAGE_CONTRAST_7_2_WERT | - | - | unsigned int | - | - | - | - | - | -20 < C <= 0 - Driver 2 |
| STAT_NV_IMAGE_CONTRAST_8_2_WERT | - | - | unsigned int | - | - | - | - | - | 0 < C <= 20 - Driver 2 |
| STAT_NV_IMAGE_CONTRAST_9_2_WERT | - | - | unsigned int | - | - | - | - | - | 20 < C <= 40 - Driver 2 |
| STAT_NV_IMAGE_CONTRAST_10_2_WERT | - | - | unsigned int | - | - | - | - | - | 40 < C <= 60 - Driver 2 |
| STAT_NV_IMAGE_CONTRAST_11_2_WERT | - | - | unsigned int | - | - | - | - | - | 60 < C <= 80 - Driver 2 |
| STAT_NV_IMAGE_CONTRAST_12_2_WERT | - | - | unsigned int | - | - | - | - | - | 80 < C <= 100 - Driver 2 |
| STAT_NV_IMAGE_CONTRAST_13_2_WERT | - | - | unsigned int | - | - | - | - | - | 100 < C <= 120 - Driver 2 |
| STAT_NV_IMAGE_CONTRAST_14_2_WERT | - | - | unsigned int | - | - | - | - | - | 120 < C <= 127 - Driver 2 |
| STAT_NV_IMAGE_CONTRAST_1_3_WERT | - | - | unsigned int | - | - | - | - | - | -127 <= C <= -120  - Driver 3 |
| STAT_NV_IMAGE_CONTRAST_2_3_WERT | - | - | unsigned int | - | - | - | - | - | -120 < C <= -100 - Driver 3 |
| STAT_NV_IMAGE_CONTRAST_3_3_WERT | - | - | unsigned int | - | - | - | - | - | -100 < C <= -80 - Driver 3 |
| STAT_NV_IMAGE_CONTRAST_4_3_WERT | - | - | unsigned int | - | - | - | - | - | -80 < C <= -60 - Driver 3 |
| STAT_NV_IMAGE_CONTRAST_5_3_WERT | - | - | unsigned int | - | - | - | - | - | -60 < C <= -40 - Driver 3 |
| STAT_NV_IMAGE_CONTRAST_6_3_WERT | - | - | unsigned int | - | - | - | - | - | -40 < C <= -20 - Driver 3 |
| STAT_NV_IMAGE_CONTRAST_7_3_WERT | - | - | unsigned int | - | - | - | - | - | -20 < C <= 0 - Driver 3 |
| STAT_NV_IMAGE_CONTRAST_8_3_WERT | - | - | unsigned int | - | - | - | - | - | 0 < C <= 20 - Driver 3 |
| STAT_NV_IMAGE_CONTRAST_9_3_WERT | - | - | unsigned int | - | - | - | - | - | 20 < C <= 40 - Driver 3 |
| STAT_NV_IMAGE_CONTRAST_10_3_WERT | - | - | unsigned int | - | - | - | - | - | 40 < C <= 60 - Driver 3 |
| STAT_NV_IMAGE_CONTRAST_11_3_WERT | - | - | unsigned int | - | - | - | - | - | 60 < C <= 80 - Driver 3 |
| STAT_NV_IMAGE_CONTRAST_12_3_WERT | - | - | unsigned int | - | - | - | - | - | 80 < C <= 100 - Driver 3 |
| STAT_NV_IMAGE_CONTRAST_13_3_WERT | - | - | unsigned int | - | - | - | - | - | 100 < C <= 120 - Driver 3 |
| STAT_NV_IMAGE_CONTRAST_14_3_WERT | - | - | unsigned int | - | - | - | - | - | 120 < C <= 127 - Driver 3 |

### RES_0X2303_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_IMAGE_CONTRAST_HISTO_1_500_WERT | - | - | unsigned int | - | - | - | - | - | -127 <= C <= -120  - 500 |
| STAT_NV_IMAGE_CONTRAST_HISTO_2_500_WERT | - | - | unsigned int | - | - | - | - | - | -120 < C <= -100 - 500 |
| STAT_NV_IMAGE_CONTRAST_HISTO_3_500_WERT | - | - | unsigned int | - | - | - | - | - | -100 < C <= -80 - 500 |
| STAT_NV_IMAGE_CONTRAST_HISTO_4_500_WERT | - | - | unsigned int | - | - | - | - | - | -80 < C <= -60 - 500 |
| STAT_NV_IMAGE_CONTRAST_HISTO_5_500_WERT | - | - | unsigned int | - | - | - | - | - | -60 < C <= -40 - 500 |
| STAT_NV_IMAGE_CONTRAST_HISTO_6_500_WERT | - | - | unsigned int | - | - | - | - | - | -40 < C <= -20 - 500 |
| STAT_NV_IMAGE_CONTRAST_HISTO_7_500_WERT | - | - | unsigned int | - | - | - | - | - | -20 < C <= 0 - 500 |
| STAT_NV_IMAGE_CONTRAST_HISTO_8_500_WERT | - | - | unsigned int | - | - | - | - | - | 0 < C <= 20 - 500 |
| STAT_NV_IMAGE_CONTRAST_HISTO_9_500_WERT | - | - | unsigned int | - | - | - | - | - | 20 < C <= 40 - 500 |
| STAT_NV_IMAGE_CONTRAST_HISTO_10_500_WERT | - | - | unsigned int | - | - | - | - | - | 40 < C <= 60 - 500 |
| STAT_NV_IMAGE_CONTRAST_HISTO_11_500_WERT | - | - | unsigned int | - | - | - | - | - | 60 < C <= 80 - 500 |
| STAT_NV_IMAGE_CONTRAST_HISTO_12_500_WERT | - | - | unsigned int | - | - | - | - | - | 80 < C <= 100 - 500 |
| STAT_NV_IMAGE_CONTRAST_HISTO_13_500_WERT | - | - | unsigned int | - | - | - | - | - | 100 < C <= 120 - 500 |
| STAT_NV_IMAGE_CONTRAST_HISTO_14_500_WERT | - | - | unsigned int | - | - | - | - | - | 120 < C <= 127 - 500 |
| STAT_NV_IMAGE_CONTRAST_HISTO_1_1000_WERT | - | - | unsigned int | - | - | - | - | - | -127 <= C <= -120  - 1000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_2_1000_WERT | - | - | unsigned int | - | - | - | - | - | -120 < C <= -100 - 1000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_3_1000_WERT | - | - | unsigned int | - | - | - | - | - | -100 < C <= -80 - 1000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_4_1000_WERT | - | - | unsigned int | - | - | - | - | - | -80 < C <= -60 - 1000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_5_1000_WERT | - | - | unsigned int | - | - | - | - | - | -60 < C <= -40 - 1000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_6_1000_WERT | - | - | unsigned int | - | - | - | - | - | -40 < C <= -20 - 1000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_7_1000_WERT | - | - | unsigned int | - | - | - | - | - | -20 < C <= 0 - 1000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_8_1000_WERT | - | - | unsigned int | - | - | - | - | - | 0 < C <= 20 - 1000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_9_1000_WERT | - | - | unsigned int | - | - | - | - | - | 20 < C <= 40 - 1000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_10_1000_WERT | - | - | unsigned int | - | - | - | - | - | 40 < C <= 60 - 1000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_11_1000_WERT | - | - | unsigned int | - | - | - | - | - | 60 < C <= 80 - 1000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_12_1000_WERT | - | - | unsigned int | - | - | - | - | - | 80 < C <= 100 - 1000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_13_1000_WERT | - | - | unsigned int | - | - | - | - | - | 100 < C <= 120 - 1000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_14_1000_WERT | - | - | unsigned int | - | - | - | - | - | 120 < C <= 127 - 1000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_1_2000_WERT | - | - | unsigned int | - | - | - | - | - | -127 <= C <= -120  - 2000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_2_2000_WERT | - | - | unsigned int | - | - | - | - | - | -120 < C <= -100 - 2000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_3_2000_WERT | - | - | unsigned int | - | - | - | - | - | -100 < C <= -80 - 2000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_4_2000_WERT | - | - | unsigned int | - | - | - | - | - | -80 < C <= -60 - 2000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_5_2000_WERT | - | - | unsigned int | - | - | - | - | - | -60 < C <= -40 - 2000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_6_2000_WERT | - | - | unsigned int | - | - | - | - | - | -40 < C <= -20 - 2000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_7_2000_WERT | - | - | unsigned int | - | - | - | - | - | -20 < C <= 0 - 2000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_8_2000_WERT | - | - | unsigned int | - | - | - | - | - | 0 < C <= 20 - 2000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_9_2000_WERT | - | - | unsigned int | - | - | - | - | - | 20 < C <= 40 - 2000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_10_2000_WERT | - | - | unsigned int | - | - | - | - | - | 40 < C <= 60 - 2000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_11_2000_WERT | - | - | unsigned int | - | - | - | - | - | 60 < C <= 80 - 2000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_12_2000_WERT | - | - | unsigned int | - | - | - | - | - | 80 < C <= 100 - 2000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_13_2000_WERT | - | - | unsigned int | - | - | - | - | - | 100 < C <= 120 - 2000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_14_2000_WERT | - | - | unsigned int | - | - | - | - | - | 120 < C <= 127 - 2000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_1_5000_WERT | - | - | unsigned int | - | - | - | - | - | -127 <= C <= -120  - 5000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_2_5000_WERT | - | - | unsigned int | - | - | - | - | - | -120 < C <= -100 - 5000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_3_5000_WERT | - | - | unsigned int | - | - | - | - | - | -100 < C <= -80 - 5000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_4_5000_WERT | - | - | unsigned int | - | - | - | - | - | -80 < C <= -60 - 5000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_5_5000_WERT | - | - | unsigned int | - | - | - | - | - | -60 < C <= -40 - 5000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_6_5000_WERT | - | - | unsigned int | - | - | - | - | - | -40 < C <= -20 - 5000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_7_5000_WERT | - | - | unsigned int | - | - | - | - | - | -20 < C <= 0 - 5000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_8_5000_WERT | - | - | unsigned int | - | - | - | - | - | 0 < C <= 20 - 5000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_9_5000_WERT | - | - | unsigned int | - | - | - | - | - | 20 < C <= 40 - 5000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_10_5000_WERT | - | - | unsigned int | - | - | - | - | - | 40 < C <= 60 - 5000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_11_5000_WERT | - | - | unsigned int | - | - | - | - | - | 60 < C <= 80 - 5000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_12_5000_WERT | - | - | unsigned int | - | - | - | - | - | 80 < C <= 100 - 5000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_13_5000_WERT | - | - | unsigned int | - | - | - | - | - | 100 < C <= 120 - 5000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_14_5000_WERT | - | - | unsigned int | - | - | - | - | - | 120 < C <= 127 - 5000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_1_10000_WERT | - | - | unsigned int | - | - | - | - | - | -127 <= C <= -120  - 10000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_2_10000_WERT | - | - | unsigned int | - | - | - | - | - | -120 < C <= -100 - 10000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_3_10000_WERT | - | - | unsigned int | - | - | - | - | - | -100 < C <= -80 - 10000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_4_10000_WERT | - | - | unsigned int | - | - | - | - | - | -80 < C <= -60 - 10000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_5_10000_WERT | - | - | unsigned int | - | - | - | - | - | -60 < C <= -40 - 10000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_6_10000_WERT | - | - | unsigned int | - | - | - | - | - | -40 < C <= -20 - 10000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_7_10000_WERT | - | - | unsigned int | - | - | - | - | - | -20 < C <= 0 - 10000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_8_10000_WERT | - | - | unsigned int | - | - | - | - | - | 0 < C <= 20 - 10000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_9_10000_WERT | - | - | unsigned int | - | - | - | - | - | 20 < C <= 40 - 10000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_10_10000_WERT | - | - | unsigned int | - | - | - | - | - | 40 < C <= 60 - 10000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_11_10000_WERT | - | - | unsigned int | - | - | - | - | - | 60 < C <= 80 - 10000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_12_10000_WERT | - | - | unsigned int | - | - | - | - | - | 80 < C <= 100 - 10000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_13_10000_WERT | - | - | unsigned int | - | - | - | - | - | 100 < C <= 120 - 10000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_14_10000_WERT | - | - | unsigned int | - | - | - | - | - | 120 < C <= 127 - 10000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_1_20000_WERT | - | - | unsigned int | - | - | - | - | - | -127 <= C <= -120  - 20000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_2_20000_WERT | - | - | unsigned int | - | - | - | - | - | -120 < C <= -100 - 20000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_3_20000_WERT | - | - | unsigned int | - | - | - | - | - | -100 < C <= -80 - 20000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_4_20000_WERT | - | - | unsigned int | - | - | - | - | - | -80 < C <= -60 - 20000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_5_20000_WERT | - | - | unsigned int | - | - | - | - | - | -60 < C <= -40 - 20000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_6_20000_WERT | - | - | unsigned int | - | - | - | - | - | -40 < C <= -20 - 20000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_7_20000_WERT | - | - | unsigned int | - | - | - | - | - | -20 < C <= 0 - 20000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_8_20000_WERT | - | - | unsigned int | - | - | - | - | - | 0 < C <= 20 - 20000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_9_20000_WERT | - | - | unsigned int | - | - | - | - | - | 20 < C <= 40 - 20000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_10_20000_WERT | - | - | unsigned int | - | - | - | - | - | 40 < C <= 60 - 20000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_11_20000_WERT | - | - | unsigned int | - | - | - | - | - | 60 < C <= 80 - 20000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_12_20000_WERT | - | - | unsigned int | - | - | - | - | - | 80 < C <= 100 - 20000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_13_20000_WERT | - | - | unsigned int | - | - | - | - | - | 100 < C <= 120 - 20000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_14_20000_WERT | - | - | unsigned int | - | - | - | - | - | 120 < C <= 127 - 20000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_1_50000_WERT | - | - | unsigned int | - | - | - | - | - | -127 <= C <= -120  - 50000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_2_50000_WERT | - | - | unsigned int | - | - | - | - | - | -120 < C <= -100 - 50000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_3_50000_WERT | - | - | unsigned int | - | - | - | - | - | -100 < C <= -80 - 50000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_4_50000_WERT | - | - | unsigned int | - | - | - | - | - | -80 < C <= -60 - 50000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_5_50000_WERT | - | - | unsigned int | - | - | - | - | - | -60 < C <= -40 - 50000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_6_50000_WERT | - | - | unsigned int | - | - | - | - | - | -40 < C <= -20 - 50000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_7_50000_WERT | - | - | unsigned int | - | - | - | - | - | -20 < C <= 0 - 50000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_8_50000_WERT | - | - | unsigned int | - | - | - | - | - | 0 < C <= 20 - 50000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_9_50000_WERT | - | - | unsigned int | - | - | - | - | - | 20 < C <= 40 - 50000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_10_50000_WERT | - | - | unsigned int | - | - | - | - | - | 40 < C <= 60 - 50000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_11_50000_WERT | - | - | unsigned int | - | - | - | - | - | 60 < C <= 80 - 50000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_12_50000_WERT | - | - | unsigned int | - | - | - | - | - | 80 < C <= 100 - 50000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_13_50000_WERT | - | - | unsigned int | - | - | - | - | - | 100 < C <= 120 - 50000 |
| STAT_NV_IMAGE_CONTRAST_HISTO_14_50000_WERT | - | - | unsigned int | - | - | - | - | - | 120 < C <= 127 - 50000 |

### RES_0X2304_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_OBJECT_DETECTION_1_1_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected pedestrians - Driver 1 |
| STAT_NV_OBJECT_DETECTION_2_1_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected animals - Driver 1 |
| STAT_NV_OBJECT_DETECTION_3_1_WERT | - | - | unsigned long | - | - | - | - | - | Number of non-acute pedestrians warnings - Driver 1 |
| STAT_NV_OBJECT_DETECTION_4_1_WERT | - | - | unsigned long | - | - | - | - | - | Number of acute pedestrians warnings - Driver 1 |
| STAT_NV_OBJECT_DETECTION_5_1_WERT | - | - | unsigned long | - | - | - | - | - | Number of animal warnings - Driver 1 |
| STAT_NV_OBJECT_DETECTION_6_1_WERT | - | - | unsigned long | - | - | - | - | - | Number of pedestrians marked with marking lights - Driver 1 |
| STAT_NV_OBJECT_DETECTION_7_1_WERT | - | - | unsigned long | - | - | - | - | - | Number of animals marked with marking lights - Driver 1 |
| STAT_NV_OBJECT_DETECTION_1_2_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected pedestrians - Driver 2 |
| STAT_NV_OBJECT_DETECTION_2_2_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected animals - Driver 2 |
| STAT_NV_OBJECT_DETECTION_3_2_WERT | - | - | unsigned long | - | - | - | - | - | Number of non-acute pedestrians warnings - Driver 2 |
| STAT_NV_OBJECT_DETECTION_4_2_WERT | - | - | unsigned long | - | - | - | - | - | Number of acute pedestrians warnings - Driver 2 |
| STAT_NV_OBJECT_DETECTION_5_2_WERT | - | - | unsigned long | - | - | - | - | - | Number of animal warnings - Driver 2 |
| STAT_NV_OBJECT_DETECTION_6_2_WERT | - | - | unsigned long | - | - | - | - | - | Number of pedestrians marked with marking lights - Driver 2 |
| STAT_NV_OBJECT_DETECTION_7_2_WERT | - | - | unsigned long | - | - | - | - | - | Number of animals marked with marking lights - Driver 2 |
| STAT_NV_OBJECT_DETECTION_1_3_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected pedestrians - Driver 3 |
| STAT_NV_OBJECT_DETECTION_2_3_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected animals - Driver 3 |
| STAT_NV_OBJECT_DETECTION_3_3_WERT | - | - | unsigned long | - | - | - | - | - | Number of non-acute pedestrians warnings - Driver 3 |
| STAT_NV_OBJECT_DETECTION_4_3_WERT | - | - | unsigned long | - | - | - | - | - | Number of acute pedestrians warnings - Driver 3 |
| STAT_NV_OBJECT_DETECTION_5_3_WERT | - | - | unsigned long | - | - | - | - | - | Number of animal warnings - Driver 3 |
| STAT_NV_OBJECT_DETECTION_6_3_WERT | - | - | unsigned long | - | - | - | - | - | Number of pedestrians marked with marking lights - Driver 3 |
| STAT_NV_OBJECT_DETECTION_7_3_WERT | - | - | unsigned long | - | - | - | - | - | Number of animals marked with marking lights - Driver 3 |

### RES_0X2305_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_OBJECT_DETECTION_1_500_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected pedestrians - 500 |
| STAT_NV_OBJECT_DETECTION_2_500_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected animals - 500 |
| STAT_NV_OBJECT_DETECTION_3_500_WERT | - | - | unsigned long | - | - | - | - | - | Number of non-acute pedestrians warnings - 500 |
| STAT_NV_OBJECT_DETECTION_4_500_WERT | - | - | unsigned long | - | - | - | - | - | Number of acute pedestrians warnings - 500 |
| STAT_NV_OBJECT_DETECTION_5_500_WERT | - | - | unsigned long | - | - | - | - | - | Number of animal warnings - 500 |
| STAT_NV_OBJECT_DETECTION_6_500_WERT | - | - | unsigned long | - | - | - | - | - | Number of pedestrians marked with marking lights - 500 |
| STAT_NV_OBJECT_DETECTION_7_500_WERT | - | - | unsigned long | - | - | - | - | - | Number of animals marked with marking lights - 500 |
| STAT_NV_OBJECT_DETECTION_1_1000_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected pedestrians - 1000 |
| STAT_NV_OBJECT_DETECTION_2_1000_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected animals - 1000 |
| STAT_NV_OBJECT_DETECTION_3_1000_WERT | - | - | unsigned long | - | - | - | - | - | Number of non-acute pedestrians warnings - 1000 |
| STAT_NV_OBJECT_DETECTION_4_1000_WERT | - | - | unsigned long | - | - | - | - | - | Number of acute pedestrians warnings - 1000 |
| STAT_NV_OBJECT_DETECTION_5_1000_WERT | - | - | unsigned long | - | - | - | - | - | Number of animal warnings - 1000 |
| STAT_NV_OBJECT_DETECTION_6_1000_WERT | - | - | unsigned long | - | - | - | - | - | Number of pedestrians marked with marking lights - 1000 |
| STAT_NV_OBJECT_DETECTION_7_1000_WERT | - | - | unsigned long | - | - | - | - | - | Number of animals marked with marking lights - 1000 |
| STAT_NV_OBJECT_DETECTION_1_2000_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected pedestrians - 2000 |
| STAT_NV_OBJECT_DETECTION_2_2000_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected animals - 2000 |
| STAT_NV_OBJECT_DETECTION_3_2000_WERT | - | - | unsigned long | - | - | - | - | - | Number of non-acute pedestrians warnings - 2000 |
| STAT_NV_OBJECT_DETECTION_4_2000_WERT | - | - | unsigned long | - | - | - | - | - | Number of acute pedestrians warnings - 2000 |
| STAT_NV_OBJECT_DETECTION_5_2000_WERT | - | - | unsigned long | - | - | - | - | - | Number of animal warnings - 2000 |
| STAT_NV_OBJECT_DETECTION_6_2000_WERT | - | - | unsigned long | - | - | - | - | - | Number of pedestrians marked with marking lights - 2000 |
| STAT_NV_OBJECT_DETECTION_7_2000_WERT | - | - | unsigned long | - | - | - | - | - | Number of animals marked with marking lights - 2000 |
| STAT_NV_OBJECT_DETECTION_1_5000_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected pedestrians - 5000 |
| STAT_NV_OBJECT_DETECTION_2_5000_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected animals - 5000 |
| STAT_NV_OBJECT_DETECTION_3_5000_WERT | - | - | unsigned long | - | - | - | - | - | Number of non-acute pedestrians warnings - 5000 |
| STAT_NV_OBJECT_DETECTION_4_5000_WERT | - | - | unsigned long | - | - | - | - | - | Number of acute pedestrians warnings - 5000 |
| STAT_NV_OBJECT_DETECTION_5_5000_WERT | - | - | unsigned long | - | - | - | - | - | Number of animal warnings - 5000 |
| STAT_NV_OBJECT_DETECTION_6_5000_WERT | - | - | unsigned long | - | - | - | - | - | Number of pedestrians marked with marking lights - 5000 |
| STAT_NV_OBJECT_DETECTION_7_5000_WERT | - | - | unsigned long | - | - | - | - | - | Number of animals marked with marking lights - 5000 |
| STAT_NV_OBJECT_DETECTION_1_10000_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected pedestrians - 10000 |
| STAT_NV_OBJECT_DETECTION_2_10000_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected animals - 10000 |
| STAT_NV_OBJECT_DETECTION_3_10000_WERT | - | - | unsigned long | - | - | - | - | - | Number of non-acute pedestrians warnings - 10000 |
| STAT_NV_OBJECT_DETECTION_4_10000_WERT | - | - | unsigned long | - | - | - | - | - | Number of acute pedestrians warnings - 10000 |
| STAT_NV_OBJECT_DETECTION_5_10000_WERT | - | - | unsigned long | - | - | - | - | - | Number of animal warnings - 10000 |
| STAT_NV_OBJECT_DETECTION_6_10000_WERT | - | - | unsigned long | - | - | - | - | - | Number of pedestrians marked with marking lights - 10000 |
| STAT_NV_OBJECT_DETECTION_7_10000_WERT | - | - | unsigned long | - | - | - | - | - | Number of animals marked with marking lights - 10000 |
| STAT_NV_OBJECT_DETECTION_1_20000_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected pedestrians - 20000 |
| STAT_NV_OBJECT_DETECTION_2_20000_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected animals - 20000 |
| STAT_NV_OBJECT_DETECTION_3_20000_WERT | - | - | unsigned long | - | - | - | - | - | Number of non-acute pedestrians warnings - 20000 |
| STAT_NV_OBJECT_DETECTION_4_20000_WERT | - | - | unsigned long | - | - | - | - | - | Number of acute pedestrians warnings - 20000 |
| STAT_NV_OBJECT_DETECTION_5_20000_WERT | - | - | unsigned long | - | - | - | - | - | Number of animal warnings - 20000 |
| STAT_NV_OBJECT_DETECTION_6_20000_WERT | - | - | unsigned long | - | - | - | - | - | Number of pedestrians marked with marking lights - 20000 |
| STAT_NV_OBJECT_DETECTION_7_20000_WERT | - | - | unsigned long | - | - | - | - | - | Number of animals marked with marking lights - 20000 |
| STAT_NV_OBJECT_DETECTION_1_50000_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected pedestrians - 50000 |
| STAT_NV_OBJECT_DETECTION_2_50000_WERT | - | - | unsigned long | - | - | - | - | - | Number of detected animals - 50000 |
| STAT_NV_OBJECT_DETECTION_3_50000_WERT | - | - | unsigned long | - | - | - | - | - | Number of non-acute pedestrians warnings - 50000 |
| STAT_NV_OBJECT_DETECTION_4_50000_WERT | - | - | unsigned long | - | - | - | - | - | Number of acute pedestrians warnings - 50000 |
| STAT_NV_OBJECT_DETECTION_5_50000_WERT | - | - | unsigned long | - | - | - | - | - | Number of animal warnings - 50000 |
| STAT_NV_OBJECT_DETECTION_6_50000_WERT | - | - | unsigned long | - | - | - | - | - | Number of pedestrians marked with marking lights - 50000 |
| STAT_NV_OBJECT_DETECTION_7_50000_WERT | - | - | unsigned long | - | - | - | - | - | Number of animals marked with marking lights - 50000 |

### RES_0X2306_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_YAW_ONLINE_CALIB_1_1_WERT | - | - | unsigned int | - | - | - | - | - | -1.5 <= C <= -1.4 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_2_1_WERT | - | - | unsigned int | - | - | - | - | - | -1.4 < C <= -1.3 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_3_1_WERT | - | - | unsigned int | - | - | - | - | - | -1.3 < C <= -1.2 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_4_1_WERT | - | - | unsigned int | - | - | - | - | - | -1.2 < C <= -1.1 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_5_1_WERT | - | - | unsigned int | - | - | - | - | - | -1.1 < C <= -1.0 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_6_1_WERT | - | - | unsigned int | - | - | - | - | - | -1.0 < C <= -0.9 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_7_1_WERT | - | - | unsigned int | - | - | - | - | - | -0.9 < C <= -0.8 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_8_1_WERT | - | - | unsigned int | - | - | - | - | - | -0.8 < C <= -0.7 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_9_1_WERT | - | - | unsigned int | - | - | - | - | - | -0.7 < C <= -0.6 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_10_1_WERT | - | - | unsigned int | - | - | - | - | - | -0.6 < C <= -0.5 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_11_1_WERT | - | - | unsigned int | - | - | - | - | - | -0.5 < C <= -0.4 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_12_1_WERT | - | - | unsigned int | - | - | - | - | - | -0.4 < C <= -0.3 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_13_1_WERT | - | - | unsigned int | - | - | - | - | - | -0.3 < C <= -0.2 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_14_1_WERT | - | - | unsigned int | - | - | - | - | - | -0.2 < C <= -0.1 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_15_1_WERT | - | - | unsigned int | - | - | - | - | - | -0.1 < C <= -0.2 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_16_1_WERT | - | - | unsigned int | - | - | - | - | - | 0    < C <= 0.1 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_17_1_WERT | - | - | unsigned int | - | - | - | - | - | 0.1 < C <= 0.2 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_18_1_WERT | - | - | unsigned int | - | - | - | - | - | 0.2 < C <= 0.3 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_19_1_WERT | - | - | unsigned int | - | - | - | - | - | 0.3 < C <= 0.4 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_20_1_WERT | - | - | unsigned int | - | - | - | - | - | 0.4 < C <= 0.5 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_21_1_WERT | - | - | unsigned int | - | - | - | - | - | 0.5 < C <= 0.6 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_22_1_WERT | - | - | unsigned int | - | - | - | - | - | 0.6 < C <= 0.7 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_23_1_WERT | - | - | unsigned int | - | - | - | - | - | 0.7 < C <= 0.8 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_24_1_WERT | - | - | unsigned int | - | - | - | - | - | 0.8 < C <= 0.9 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_25_1_WERT | - | - | unsigned int | - | - | - | - | - | 0.9 < C <= 1.0 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_26_1_WERT | - | - | unsigned int | - | - | - | - | - | 1.0 < C <= 1.1 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_27_1_WERT | - | - | unsigned int | - | - | - | - | - | 1.1 < C <= 1.2 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_28_1_WERT | - | - | unsigned int | - | - | - | - | - | 1.2 < C <= 1.3 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_29_1_WERT | - | - | unsigned int | - | - | - | - | - | 1.3 < C <= 1.4 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_30_1_WERT | - | - | unsigned int | - | - | - | - | - | 1.4 < C <= 1.5 Driver 1 |
| STAT_NV_YAW_ONLINE_CALIB_1_2_WERT | - | - | unsigned int | - | - | - | - | - | -1.5 <= C <= -1.4 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_2_2_WERT | - | - | unsigned int | - | - | - | - | - | -1.4 < C <= -1.3 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_3_2_WERT | - | - | unsigned int | - | - | - | - | - | -1.3 < C <= -1.2 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_4_2_WERT | - | - | unsigned int | - | - | - | - | - | -1.2 < C <= -1.1 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_5_2_WERT | - | - | unsigned int | - | - | - | - | - | -1.1 < C <= -1.0 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_6_2_WERT | - | - | unsigned int | - | - | - | - | - | -1.0 < C <= -0.9 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_7_2_WERT | - | - | unsigned int | - | - | - | - | - | -0.9 < C <= -0.8 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_8_2_WERT | - | - | unsigned int | - | - | - | - | - | -0.8 < C <= -0.7 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_9_2_WERT | - | - | unsigned int | - | - | - | - | - | -0.7 < C <= -0.6 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_10_2_WERT | - | - | unsigned int | - | - | - | - | - | -0.6 < C <= -0.5 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_11_2_WERT | - | - | unsigned int | - | - | - | - | - | -0.5 < C <= -0.4 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_12_2_WERT | - | - | unsigned int | - | - | - | - | - | -0.4 < C <= -0.3 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_13_2_WERT | - | - | unsigned int | - | - | - | - | - | -0.3 < C <= -0.2 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_14_2_WERT | - | - | unsigned int | - | - | - | - | - | -0.2 < C <= -0.1 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_15_2_WERT | - | - | unsigned int | - | - | - | - | - | -0.1 < C <= -0.2 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_16_2_WERT | - | - | unsigned int | - | - | - | - | - | 0    < C <= 0.1 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_17_2_WERT | - | - | unsigned int | - | - | - | - | - | 0.1 < C <= 0.2 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_18_2_WERT | - | - | unsigned int | - | - | - | - | - | 0.2 < C <= 0.3 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_19_2_WERT | - | - | unsigned int | - | - | - | - | - | 0.3 < C <= 0.4 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_20_2_WERT | - | - | unsigned int | - | - | - | - | - | 0.4 < C <= 0.5 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_21_2_WERT | - | - | unsigned int | - | - | - | - | - | 0.5 < C <= 0.6 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_22_2_WERT | - | - | unsigned int | - | - | - | - | - | 0.6 < C <= 0.7 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_23_2_WERT | - | - | unsigned int | - | - | - | - | - | 0.7 < C <= 0.8 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_24_2_WERT | - | - | unsigned int | - | - | - | - | - | 0.8 < C <= 0.9 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_25_2_WERT | - | - | unsigned int | - | - | - | - | - | 0.9 < C <= 1.0 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_26_2_WERT | - | - | unsigned int | - | - | - | - | - | 1.0 < C <= 1.1 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_27_2_WERT | - | - | unsigned int | - | - | - | - | - | 1.1 < C <= 1.2 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_28_2_WERT | - | - | unsigned int | - | - | - | - | - | 1.2 < C <= 1.3 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_29_2_WERT | - | - | unsigned int | - | - | - | - | - | 1.3 < C <= 1.4 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_30_2_WERT | - | - | unsigned int | - | - | - | - | - | 1.4 < C <= 1.5 Driver 2 |
| STAT_NV_YAW_ONLINE_CALIB_1_3_WERT | - | - | unsigned int | - | - | - | - | - | -1.5 <= C <= -1.4 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_2_3_WERT | - | - | unsigned int | - | - | - | - | - | -1.4 < C <= -1.3 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_3_3_WERT | - | - | unsigned int | - | - | - | - | - | -1.3 < C <= -1.2 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_4_3_WERT | - | - | unsigned int | - | - | - | - | - | -1.2 < C <= -1.1 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_5_3_WERT | - | - | unsigned int | - | - | - | - | - | -1.1 < C <= -1.0 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_6_3_WERT | - | - | unsigned int | - | - | - | - | - | -1.0 < C <= -0.9 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_7_3_WERT | - | - | unsigned int | - | - | - | - | - | -0.9 < C <= -0.8 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_8_3_WERT | - | - | unsigned int | - | - | - | - | - | -0.8 < C <= -0.7 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_9_3_WERT | - | - | unsigned int | - | - | - | - | - | -0.7 < C <= -0.6 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_10_3_WERT | - | - | unsigned int | - | - | - | - | - | -0.6 < C <= -0.5 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_11_3_WERT | - | - | unsigned int | - | - | - | - | - | -0.5 < C <= -0.4 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_12_3_WERT | - | - | unsigned int | - | - | - | - | - | -0.4 < C <= -0.3 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_13_3_WERT | - | - | unsigned int | - | - | - | - | - | -0.3 < C <= -0.2 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_14_3_WERT | - | - | unsigned int | - | - | - | - | - | -0.2 < C <= -0.1 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_15_3_WERT | - | - | unsigned int | - | - | - | - | - | -0.1 < C <= -0.2 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_16_3_WERT | - | - | unsigned int | - | - | - | - | - | 0    < C <= 0.1 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_17_3_WERT | - | - | unsigned int | - | - | - | - | - | 0.1 < C <= 0.2 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_18_3_WERT | - | - | unsigned int | - | - | - | - | - | 0.2 < C <= 0.3 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_19_3_WERT | - | - | unsigned int | - | - | - | - | - | 0.3 < C <= 0.4 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_20_3_WERT | - | - | unsigned int | - | - | - | - | - | 0.4 < C <= 0.5 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_21_3_WERT | - | - | unsigned int | - | - | - | - | - | 0.5 < C <= 0.6 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_22_3_WERT | - | - | unsigned int | - | - | - | - | - | 0.6 < C <= 0.7 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_23_3_WERT | - | - | unsigned int | - | - | - | - | - | 0.7 < C <= 0.8 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_24_3_WERT | - | - | unsigned int | - | - | - | - | - | 0.8 < C <= 0.9 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_25_3_WERT | - | - | unsigned int | - | - | - | - | - | 0.9 < C <= 1.0 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_26_3_WERT | - | - | unsigned int | - | - | - | - | - | 1.0 < C <= 1.1 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_27_3_WERT | - | - | unsigned int | - | - | - | - | - | 1.1 < C <= 1.2 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_28_3_WERT | - | - | unsigned int | - | - | - | - | - | 1.2 < C <= 1.3 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_29_3_WERT | - | - | unsigned int | - | - | - | - | - | 1.3 < C <= 1.4 Driver 3 |
| STAT_NV_YAW_ONLINE_CALIB_30_3_WERT | - | - | unsigned int | - | - | - | - | - | 1.4 < C <= 1.5 Driver 3 |

### RES_0X2307_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_1_500_WERT | - | - | unsigned int | - | - | - | - | - | -1.5 <= B <= -1.4 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_2_500_WERT | - | - | unsigned int | - | - | - | - | - | -1.4 < C <= -1.3 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_3_500_WERT | - | - | unsigned int | - | - | - | - | - | -1.3 < C <= -1.2 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_4_500_WERT | - | - | unsigned int | - | - | - | - | - | -1.2 < C <= -1.1 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_5_500_WERT | - | - | unsigned int | - | - | - | - | - | -1.1 < C <= -1.0 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_6_500_WERT | - | - | unsigned int | - | - | - | - | - | -1.0 < C <= -0.9 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_7_500_WERT | - | - | unsigned int | - | - | - | - | - | -0.9 < C <= -0.8 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_8_500_WERT | - | - | unsigned int | - | - | - | - | - | -0.8 < C <= -0.7 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_9_500_WERT | - | - | unsigned int | - | - | - | - | - | -0.7 < C <= -0.6 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_10_500_WERT | - | - | unsigned int | - | - | - | - | - | -0.6 < C <= -0.5 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_11_500_WERT | - | - | unsigned int | - | - | - | - | - | -0.5 < C <= -0.4 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_12_500_WERT | - | - | unsigned int | - | - | - | - | - | -0.4 < C <= -0.3 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_13_500_WERT | - | - | unsigned int | - | - | - | - | - | -0.3 < C <= -0.2 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_14_500_WERT | - | - | unsigned int | - | - | - | - | - | -0.2 < C <= -0.1 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_15_500_WERT | - | - | unsigned int | - | - | - | - | - | -0.1 < C <= -0.2 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_16_500_WERT | - | - | unsigned int | - | - | - | - | - | 0    < C <= 0.1 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_17_500_WERT | - | - | unsigned int | - | - | - | - | - | 0.1 < C <= 0.2 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_18_500_WERT | - | - | unsigned int | - | - | - | - | - | 0.2 < C <= 0.3 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_19_500_WERT | - | - | unsigned int | - | - | - | - | - | 0.3 < C <= 0.4 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_20_500_WERT | - | - | unsigned int | - | - | - | - | - | 0.4 < C <= 0.5 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_21_500_WERT | - | - | unsigned int | - | - | - | - | - | 0.5 < C <= 0.6 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_22_500_WERT | - | - | unsigned int | - | - | - | - | - | 0.6 < C <= 0.7 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_23_500_WERT | - | - | unsigned int | - | - | - | - | - | 0.7 < C <= 0.8 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_24_500_WERT | - | - | unsigned int | - | - | - | - | - | 0.8 < C <= 0.9 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_25_500_WERT | - | - | unsigned int | - | - | - | - | - | 0.9 < C <= 1.0 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_26_500_WERT | - | - | unsigned int | - | - | - | - | - | 1.0 < C <= 1.1 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_27_500_WERT | - | - | unsigned int | - | - | - | - | - | 1.1 < C <= 1.2 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_28_500_WERT | - | - | unsigned int | - | - | - | - | - | 1.2 < C <= 1.3 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_29_500_WERT | - | - | unsigned int | - | - | - | - | - | 1.3 < C <= 1.4 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_30_500_WERT | - | - | unsigned int | - | - | - | - | - | 1.4 < C <= 1.5 - 500 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_1_1000_WERT | - | - | unsigned int | - | - | - | - | - | -1.5 <= B <= -1.4 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_2_1000_WERT | - | - | unsigned int | - | - | - | - | - | -1.4 < C <= -1.3 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_3_1000_WERT | - | - | unsigned int | - | - | - | - | - | -1.3 < C <= -1.2 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_4_1000_WERT | - | - | unsigned int | - | - | - | - | - | -1.2 < C <= -1.1 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_5_1000_WERT | - | - | unsigned int | - | - | - | - | - | -1.1 < C <= -1.0 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_6_1000_WERT | - | - | unsigned int | - | - | - | - | - | -1.0 < C <= -0.9 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_7_1000_WERT | - | - | unsigned int | - | - | - | - | - | -0.9 < C <= -0.8 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_8_1000_WERT | - | - | unsigned int | - | - | - | - | - | -0.8 < C <= -0.7 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_9_1000_WERT | - | - | unsigned int | - | - | - | - | - | -0.7 < C <= -0.6 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_10_1000_WERT | - | - | unsigned int | - | - | - | - | - | -0.6 < C <= -0.5 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_11_1000_WERT | - | - | unsigned int | - | - | - | - | - | -0.5 < C <= -0.4 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_12_1000_WERT | - | - | unsigned int | - | - | - | - | - | -0.4 < C <= -0.3 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_13_1000_WERT | - | - | unsigned int | - | - | - | - | - | -0.3 < C <= -0.2 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_14_1000_WERT | - | - | unsigned int | - | - | - | - | - | -0.2 < C <= -0.1 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_15_1000_WERT | - | - | unsigned int | - | - | - | - | - | -0.1 < C <= -0.2 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_16_1000_WERT | - | - | unsigned int | - | - | - | - | - | 0    < C <= 0.1 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_17_1000_WERT | - | - | unsigned int | - | - | - | - | - | 0.1 < C <= 0.2 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_18_1000_WERT | - | - | unsigned int | - | - | - | - | - | 0.2 < C <= 0.3 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_19_1000_WERT | - | - | unsigned int | - | - | - | - | - | 0.3 < C <= 0.4 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_20_1000_WERT | - | - | unsigned int | - | - | - | - | - | 0.4 < C <= 0.5 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_21_1000_WERT | - | - | unsigned int | - | - | - | - | - | 0.5 < C <= 0.6 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_22_1000_WERT | - | - | unsigned int | - | - | - | - | - | 0.6 < C <= 0.7 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_23_1000_WERT | - | - | unsigned int | - | - | - | - | - | 0.7 < C <= 0.8 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_24_1000_WERT | - | - | unsigned int | - | - | - | - | - | 0.8 < C <= 0.9 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_25_1000_WERT | - | - | unsigned int | - | - | - | - | - | 0.9 < C <= 1.0 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_26_1000_WERT | - | - | unsigned int | - | - | - | - | - | 1.0 < C <= 1.1 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_27_1000_WERT | - | - | unsigned int | - | - | - | - | - | 1.1 < C <= 1.2 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_28_1000_WERT | - | - | unsigned int | - | - | - | - | - | 1.2 < C <= 1.3 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_29_1000_WERT | - | - | unsigned int | - | - | - | - | - | 1.3 < C <= 1.4 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_30_1000_WERT | - | - | unsigned int | - | - | - | - | - | 1.4 < C <= 1.5 - 1000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_1_2000_WERT | - | - | unsigned int | - | - | - | - | - | -1.5 <= B <= -1.4 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_2_2000_WERT | - | - | unsigned int | - | - | - | - | - | -1.4 < C <= -1.3 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_3_2000_WERT | - | - | unsigned int | - | - | - | - | - | -1.3 < C <= -1.2 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_4_2000_WERT | - | - | unsigned int | - | - | - | - | - | -1.2 < C <= -1.1 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_5_2000_WERT | - | - | unsigned int | - | - | - | - | - | -1.1 < C <= -1.0 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_6_2000_WERT | - | - | unsigned int | - | - | - | - | - | -1.0 < C <= -0.9 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_7_2000_WERT | - | - | unsigned int | - | - | - | - | - | -0.9 < C <= -0.8 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_8_2000_WERT | - | - | unsigned int | - | - | - | - | - | -0.8 < C <= -0.7 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_9_2000_WERT | - | - | unsigned int | - | - | - | - | - | -0.7 < C <= -0.6 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_10_2000_WERT | - | - | unsigned int | - | - | - | - | - | -0.6 < C <= -0.5 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_11_2000_WERT | - | - | unsigned int | - | - | - | - | - | -0.5 < C <= -0.4 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_12_2000_WERT | - | - | unsigned int | - | - | - | - | - | -0.4 < C <= -0.3 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_13_2000_WERT | - | - | unsigned int | - | - | - | - | - | -0.3 < C <= -0.2 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_14_2000_WERT | - | - | unsigned int | - | - | - | - | - | -0.2 < C <= -0.1 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_15_2000_WERT | - | - | unsigned int | - | - | - | - | - | -0.1 < C <= -0.2 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_16_2000_WERT | - | - | unsigned int | - | - | - | - | - | 0    < C <= 0.1 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_17_2000_WERT | - | - | unsigned int | - | - | - | - | - | 0.1 < C <= 0.2 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_18_2000_WERT | - | - | unsigned int | - | - | - | - | - | 0.2 < C <= 0.3 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_19_2000_WERT | - | - | unsigned int | - | - | - | - | - | 0.3 < C <= 0.4 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_20_2000_WERT | - | - | unsigned int | - | - | - | - | - | 0.4 < C <= 0.5 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_21_2000_WERT | - | - | unsigned int | - | - | - | - | - | 0.5 < C <= 0.6 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_22_2000_WERT | - | - | unsigned int | - | - | - | - | - | 0.6 < C <= 0.7 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_23_2000_WERT | - | - | unsigned int | - | - | - | - | - | 0.7 < C <= 0.8 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_24_2000_WERT | - | - | unsigned int | - | - | - | - | - | 0.8 < C <= 0.9 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_25_2000_WERT | - | - | unsigned int | - | - | - | - | - | 0.9 < C <= 1.0 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_26_2000_WERT | - | - | unsigned int | - | - | - | - | - | 1.0 < C <= 1.1 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_27_2000_WERT | - | - | unsigned int | - | - | - | - | - | 1.1 < C <= 1.2 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_28_2000_WERT | - | - | unsigned int | - | - | - | - | - | 1.2 < C <= 1.3 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_29_2000_WERT | - | - | unsigned int | - | - | - | - | - | 1.3 < C <= 1.4 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_30_2000_WERT | - | - | unsigned int | - | - | - | - | - | 1.4 < C <= 1.5 - 2000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_1_5000_WERT | - | - | unsigned int | - | - | - | - | - | -1.5 <= B <= -1.4 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_2_5000_WERT | - | - | unsigned int | - | - | - | - | - | -1.4 < C <= -1.3 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_3_5000_WERT | - | - | unsigned int | - | - | - | - | - | -1.3 < C <= -1.2 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_4_5000_WERT | - | - | unsigned int | - | - | - | - | - | -1.2 < C <= -1.1 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_5_5000_WERT | - | - | unsigned int | - | - | - | - | - | -1.1 < C <= -1.0 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_6_5000_WERT | - | - | unsigned int | - | - | - | - | - | -1.0 < C <= -0.9 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_7_5000_WERT | - | - | unsigned int | - | - | - | - | - | -0.9 < C <= -0.8 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_8_5000_WERT | - | - | unsigned int | - | - | - | - | - | -0.8 < C <= -0.7 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_9_5000_WERT | - | - | unsigned int | - | - | - | - | - | -0.7 < C <= -0.6 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_10_5000_WERT | - | - | unsigned int | - | - | - | - | - | -0.6 < C <= -0.5 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_11_5000_WERT | - | - | unsigned int | - | - | - | - | - | -0.5 < C <= -0.4 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_12_5000_WERT | - | - | unsigned int | - | - | - | - | - | -0.4 < C <= -0.3 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_13_5000_WERT | - | - | unsigned int | - | - | - | - | - | -0.3 < C <= -0.2 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_14_5000_WERT | - | - | unsigned int | - | - | - | - | - | -0.2 < C <= -0.1 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_15_5000_WERT | - | - | unsigned int | - | - | - | - | - | -0.1 < C <= -0.2 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_16_5000_WERT | - | - | unsigned int | - | - | - | - | - | 0    < C <= 0.1 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_17_5000_WERT | - | - | unsigned int | - | - | - | - | - | 0.1 < C <= 0.2 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_18_5000_WERT | - | - | unsigned int | - | - | - | - | - | 0.2 < C <= 0.3 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_19_5000_WERT | - | - | unsigned int | - | - | - | - | - | 0.3 < C <= 0.4 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_20_5000_WERT | - | - | unsigned int | - | - | - | - | - | 0.4 < C <= 0.5 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_21_5000_WERT | - | - | unsigned int | - | - | - | - | - | 0.5 < C <= 0.6 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_22_5000_WERT | - | - | unsigned int | - | - | - | - | - | 0.6 < C <= 0.7 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_23_5000_WERT | - | - | unsigned int | - | - | - | - | - | 0.7 < C <= 0.8 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_24_5000_WERT | - | - | unsigned int | - | - | - | - | - | 0.8 < C <= 0.9 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_25_5000_WERT | - | - | unsigned int | - | - | - | - | - | 0.9 < C <= 1.0 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_26_5000_WERT | - | - | unsigned int | - | - | - | - | - | 1.0 < C <= 1.1 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_27_5000_WERT | - | - | unsigned int | - | - | - | - | - | 1.1 < C <= 1.2 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_28_5000_WERT | - | - | unsigned int | - | - | - | - | - | 1.2 < C <= 1.3 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_29_5000_WERT | - | - | unsigned int | - | - | - | - | - | 1.3 < C <= 1.4 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_30_5000_WERT | - | - | unsigned int | - | - | - | - | - | 1.4 < C <= 1.5 - 5000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_1_10000_WERT | - | - | unsigned int | - | - | - | - | - | -1.5 <= B <= -1.4 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_2_10000_WERT | - | - | unsigned int | - | - | - | - | - | -1.4 < C <= -1.3 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_3_10000_WERT | - | - | unsigned int | - | - | - | - | - | -1.3 < C <= -1.2 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_4_10000_WERT | - | - | unsigned int | - | - | - | - | - | -1.2 < C <= -1.1 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_5_10000_WERT | - | - | unsigned int | - | - | - | - | - | -1.1 < C <= -1.0 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_6_10000_WERT | - | - | unsigned int | - | - | - | - | - | -1.0 < C <= -0.9 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_7_10000_WERT | - | - | unsigned int | - | - | - | - | - | -0.9 < C <= -0.8 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_8_10000_WERT | - | - | unsigned int | - | - | - | - | - | -0.8 < C <= -0.7 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_9_10000_WERT | - | - | unsigned int | - | - | - | - | - | -0.7 < C <= -0.6 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_10_10000_WERT | - | - | unsigned int | - | - | - | - | - | -0.6 < C <= -0.5 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_11_10000_WERT | - | - | unsigned int | - | - | - | - | - | -0.5 < C <= -0.4 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_12_10000_WERT | - | - | unsigned int | - | - | - | - | - | -0.4 < C <= -0.3 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_13_10000_WERT | - | - | unsigned int | - | - | - | - | - | -0.3 < C <= -0.2 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_14_10000_WERT | - | - | unsigned int | - | - | - | - | - | -0.2 < C <= -0.1 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_15_10000_WERT | - | - | unsigned int | - | - | - | - | - | -0.1 < C <= -0.2 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_16_10000_WERT | - | - | unsigned int | - | - | - | - | - | 0    < C <= 0.1 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_17_10000_WERT | - | - | unsigned int | - | - | - | - | - | 0.1 < C <= 0.2 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_18_10000_WERT | - | - | unsigned int | - | - | - | - | - | 0.2 < C <= 0.3 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_19_10000_WERT | - | - | unsigned int | - | - | - | - | - | 0.3 < C <= 0.4 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_20_10000_WERT | - | - | unsigned int | - | - | - | - | - | 0.4 < C <= 0.5 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_21_10000_WERT | - | - | unsigned int | - | - | - | - | - | 0.5 < C <= 0.6 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_22_10000_WERT | - | - | unsigned int | - | - | - | - | - | 0.6 < C <= 0.7 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_23_10000_WERT | - | - | unsigned int | - | - | - | - | - | 0.7 < C <= 0.8 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_24_10000_WERT | - | - | unsigned int | - | - | - | - | - | 0.8 < C <= 0.9 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_25_10000_WERT | - | - | unsigned int | - | - | - | - | - | 0.9 < C <= 1.0 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_26_10000_WERT | - | - | unsigned int | - | - | - | - | - | 1.0 < C <= 1.1 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_27_10000_WERT | - | - | unsigned int | - | - | - | - | - | 1.1 < C <= 1.2 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_28_10000_WERT | - | - | unsigned int | - | - | - | - | - | 1.2 < C <= 1.3 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_29_10000_WERT | - | - | unsigned int | - | - | - | - | - | 1.3 < C <= 1.4 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_30_10000_WERT | - | - | unsigned int | - | - | - | - | - | 1.4 < C <= 1.5 - 10000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_1_20000_WERT | - | - | unsigned int | - | - | - | - | - | -1.5 <= B <= -1.4 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_2_20000_WERT | - | - | unsigned int | - | - | - | - | - | -1.4 < C <= -1.3 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_3_20000_WERT | - | - | unsigned int | - | - | - | - | - | -1.3 < C <= -1.2 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_4_20000_WERT | - | - | unsigned int | - | - | - | - | - | -1.2 < C <= -1.1 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_5_20000_WERT | - | - | unsigned int | - | - | - | - | - | -1.1 < C <= -1.0 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_6_20000_WERT | - | - | unsigned int | - | - | - | - | - | -1.0 < C <= -0.9 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_7_20000_WERT | - | - | unsigned int | - | - | - | - | - | -0.9 < C <= -0.8 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_8_20000_WERT | - | - | unsigned int | - | - | - | - | - | -0.8 < C <= -0.7 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_9_20000_WERT | - | - | unsigned int | - | - | - | - | - | -0.7 < C <= -0.6 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_10_20000_WERT | - | - | unsigned int | - | - | - | - | - | -0.6 < C <= -0.5 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_11_20000_WERT | - | - | unsigned int | - | - | - | - | - | -0.5 < C <= -0.4 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_12_20000_WERT | - | - | unsigned int | - | - | - | - | - | -0.4 < C <= -0.3 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_13_20000_WERT | - | - | unsigned int | - | - | - | - | - | -0.3 < C <= -0.2 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_14_20000_WERT | - | - | unsigned int | - | - | - | - | - | -0.2 < C <= -0.1 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_15_20000_WERT | - | - | unsigned int | - | - | - | - | - | -0.1 < C <= -0.2 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_16_20000_WERT | - | - | unsigned int | - | - | - | - | - | 0    < C <= 0.1 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_17_20000_WERT | - | - | unsigned int | - | - | - | - | - | 0.1 < C <= 0.2 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_18_20000_WERT | - | - | unsigned int | - | - | - | - | - | 0.2 < C <= 0.3 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_19_20000_WERT | - | - | unsigned int | - | - | - | - | - | 0.3 < C <= 0.4 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_20_20000_WERT | - | - | unsigned int | - | - | - | - | - | 0.4 < C <= 0.5 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_21_20000_WERT | - | - | unsigned int | - | - | - | - | - | 0.5 < C <= 0.6 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_22_20000_WERT | - | - | unsigned int | - | - | - | - | - | 0.6 < C <= 0.7 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_23_20000_WERT | - | - | unsigned int | - | - | - | - | - | 0.7 < C <= 0.8 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_24_20000_WERT | - | - | unsigned int | - | - | - | - | - | 0.8 < C <= 0.9 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_25_20000_WERT | - | - | unsigned int | - | - | - | - | - | 0.9 < C <= 1.0 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_26_20000_WERT | - | - | unsigned int | - | - | - | - | - | 1.0 < C <= 1.1 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_27_20000_WERT | - | - | unsigned int | - | - | - | - | - | 1.1 < C <= 1.2 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_28_20000_WERT | - | - | unsigned int | - | - | - | - | - | 1.2 < C <= 1.3 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_29_20000_WERT | - | - | unsigned int | - | - | - | - | - | 1.3 < C <= 1.4 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_30_20000_WERT | - | - | unsigned int | - | - | - | - | - | 1.4 < C <= 1.5 - 20000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_1_50000_WERT | - | - | unsigned int | - | - | - | - | - | -1.5 <= B <= -1.4 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_2_50000_WERT | - | - | unsigned int | - | - | - | - | - | -1.4 < C <= -1.3 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_3_50000_WERT | - | - | unsigned int | - | - | - | - | - | -1.3 < C <= -1.2 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_4_50000_WERT | - | - | unsigned int | - | - | - | - | - | -1.2 < C <= -1.1 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_5_50000_WERT | - | - | unsigned int | - | - | - | - | - | -1.1 < C <= -1.0 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_6_50000_WERT | - | - | unsigned int | - | - | - | - | - | -1.0 < C <= -0.9 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_7_50000_WERT | - | - | unsigned int | - | - | - | - | - | -0.9 < C <= -0.8 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_8_50000_WERT | - | - | unsigned int | - | - | - | - | - | -0.8 < C <= -0.7 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_9_50000_WERT | - | - | unsigned int | - | - | - | - | - | -0.7 < C <= -0.6 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_10_50000_WERT | - | - | unsigned int | - | - | - | - | - | -0.6 < C <= -0.5 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_11_50000_WERT | - | - | unsigned int | - | - | - | - | - | -0.5 < C <= -0.4 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_12_50000_WERT | - | - | unsigned int | - | - | - | - | - | -0.4 < C <= -0.3 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_13_50000_WERT | - | - | unsigned int | - | - | - | - | - | -0.3 < C <= -0.2 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_14_50000_WERT | - | - | unsigned int | - | - | - | - | - | -0.2 < C <= -0.1 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_15_50000_WERT | - | - | unsigned int | - | - | - | - | - | -0.1 < C <= -0.2 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_16_50000_WERT | - | - | unsigned int | - | - | - | - | - | 0    < C <= 0.1 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_17_50000_WERT | - | - | unsigned int | - | - | - | - | - | 0.1 < C <= 0.2 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_18_50000_WERT | - | - | unsigned int | - | - | - | - | - | 0.2 < C <= 0.3 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_19_50000_WERT | - | - | unsigned int | - | - | - | - | - | 0.3 < C <= 0.4 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_20_50000_WERT | - | - | unsigned int | - | - | - | - | - | 0.4 < C <= 0.5 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_21_50000_WERT | - | - | unsigned int | - | - | - | - | - | 0.5 < C <= 0.6 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_22_50000_WERT | - | - | unsigned int | - | - | - | - | - | 0.6 < C <= 0.7 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_23_50000_WERT | - | - | unsigned int | - | - | - | - | - | 0.7 < C <= 0.8 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_24_50000_WERT | - | - | unsigned int | - | - | - | - | - | 0.8 < C <= 0.9 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_25_50000_WERT | - | - | unsigned int | - | - | - | - | - | 0.9 < C <= 1.0 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_26_50000_WERT | - | - | unsigned int | - | - | - | - | - | 1.0 < C <= 1.1 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_27_50000_WERT | - | - | unsigned int | - | - | - | - | - | 1.1 < C <= 1.2 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_28_50000_WERT | - | - | unsigned int | - | - | - | - | - | 1.2 < C <= 1.3 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_29_50000_WERT | - | - | unsigned int | - | - | - | - | - | 1.3 < C <= 1.4 - 50000 |
| STAT_NV_YAW_ONLINE_CALIB_HISTO_30_50000_WERT | - | - | unsigned int | - | - | - | - | - | 1.4 < C <= 1.5 - 50000 |

### RES_0X2308_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIMERS_CITY_1_1_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - Driver 1 |
| STAT_TIMERS_CITY_2_1_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - Driver 1 |
| STAT_TIMERS_CITY_3_1_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - Driver 1 |
| STAT_TIMERS_CITY_4_1_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - Driver 1 |
| STAT_TIMERS_CITY_5_1_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - Driver 1 |
| STAT_TIMERS_CITY_6_1_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - Driver 1 |
| STAT_TIMERS_CITY_7_1_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - Driver 1 |
| STAT_TIMERS_CITY_8_1_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - Driver 1 |
| STAT_TIMERS_CITY_9_1_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - Driver 1 |
| STAT_TIMERS_CITY_10_1_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - Driver 1 |
| STAT_TIMERS_CITY_11_1_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - Driver 1 |
| STAT_TIMERS_CITY_1_2_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - Driver 2 |
| STAT_TIMERS_CITY_2_2_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - Driver 2 |
| STAT_TIMERS_CITY_3_2_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - Driver 2 |
| STAT_TIMERS_CITY_4_2_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - Driver 2 |
| STAT_TIMERS_CITY_5_2_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - Driver 2 |
| STAT_TIMERS_CITY_6_2_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - Driver 2 |
| STAT_TIMERS_CITY_7_2_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - Driver 2 |
| STAT_TIMERS_CITY_8_2_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - Driver 2 |
| STAT_TIMERS_CITY_9_2_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - Driver 2 |
| STAT_TIMERS_CITY_10_2_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - Driver 2 |
| STAT_TIMERS_CITY_11_2_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - Driver 2 |
| STAT_TIMERS_CITY_1_3_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - Driver 3 |
| STAT_TIMERS_CITY_2_3_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - Driver 3 |
| STAT_TIMERS_CITY_3_3_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - Driver 3 |
| STAT_TIMERS_CITY_4_3_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - Driver 3 |
| STAT_TIMERS_CITY_5_3_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - Driver 3 |
| STAT_TIMERS_CITY_6_3_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - Driver 3 |
| STAT_TIMERS_CITY_7_3_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - Driver 3 |
| STAT_TIMERS_CITY_8_3_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - Driver 3 |
| STAT_TIMERS_CITY_9_3_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - Driver 3 |
| STAT_TIMERS_CITY_10_3_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - Driver 3 |
| STAT_TIMERS_CITY_11_3_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - Driver 3 |

### RES_0X2309_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIMERS_CITY_HISTO_1_500_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - 500 |
| STAT_TIMERS_CITY_HISTO_2_500_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - 500 |
| STAT_TIMERS_CITY_HISTO_3_500_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - 500 |
| STAT_TIMERS_CITY_HISTO_4_500_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - 500 |
| STAT_TIMERS_CITY_HISTO_5_500_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - 500 |
| STAT_TIMERS_CITY_HISTO_6_500_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - 500 |
| STAT_TIMERS_CITY_HISTO_7_500_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - 500 |
| STAT_TIMERS_CITY_HISTO_8_500_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - 500 |
| STAT_TIMERS_CITY_HISTO_9_500_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - 500 |
| STAT_TIMERS_CITY_HISTO_10_500_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - 500 |
| STAT_TIMERS_CITY_HISTO_11_500_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - 500 |
| STAT_TIMERS_CITY_HISTO_1_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - 1000 |
| STAT_TIMERS_CITY_HISTO_2_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - 1000 |
| STAT_TIMERS_CITY_HISTO_3_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - 1000 |
| STAT_TIMERS_CITY_HISTO_4_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - 1000 |
| STAT_TIMERS_CITY_HISTO_5_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - 1000 |
| STAT_TIMERS_CITY_HISTO_6_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - 1000 |
| STAT_TIMERS_CITY_HISTO_7_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - 1000 |
| STAT_TIMERS_CITY_HISTO_8_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - 1000 |
| STAT_TIMERS_CITY_HISTO_9_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - 1000 |
| STAT_TIMERS_CITY_HISTO_10_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - 1000 |
| STAT_TIMERS_CITY_HISTO_11_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - 1000 |
| STAT_TIMERS_CITY_HISTO_1_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - 2000 |
| STAT_TIMERS_CITY_HISTO_2_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - 2000 |
| STAT_TIMERS_CITY_HISTO_3_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - 2000 |
| STAT_TIMERS_CITY_HISTO_4_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - 2000 |
| STAT_TIMERS_CITY_HISTO_5_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - 2000 |
| STAT_TIMERS_CITY_HISTO_6_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - 2000 |
| STAT_TIMERS_CITY_HISTO_7_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - 2000 |
| STAT_TIMERS_CITY_HISTO_8_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - 2000 |
| STAT_TIMERS_CITY_HISTO_9_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - 2000 |
| STAT_TIMERS_CITY_HISTO_10_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - 2000 |
| STAT_TIMERS_CITY_HISTO_11_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - 2000 |
| STAT_TIMERS_CITY_HISTO_1_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - 5000 |
| STAT_TIMERS_CITY_HISTO_2_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - 5000 |
| STAT_TIMERS_CITY_HISTO_3_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - 5000 |
| STAT_TIMERS_CITY_HISTO_4_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - 5000 |
| STAT_TIMERS_CITY_HISTO_5_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - 5000 |
| STAT_TIMERS_CITY_HISTO_6_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - 5000 |
| STAT_TIMERS_CITY_HISTO_7_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - 5000 |
| STAT_TIMERS_CITY_HISTO_8_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - 5000 |
| STAT_TIMERS_CITY_HISTO_9_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - 5000 |
| STAT_TIMERS_CITY_HISTO_10_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - 5000 |
| STAT_TIMERS_CITY_HISTO_11_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - 5000 |
| STAT_TIMERS_CITY_HISTO_1_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - 10000 |
| STAT_TIMERS_CITY_HISTO_2_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - 10000 |
| STAT_TIMERS_CITY_HISTO_3_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - 10000 |
| STAT_TIMERS_CITY_HISTO_4_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - 10000 |
| STAT_TIMERS_CITY_HISTO_5_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - 10000 |
| STAT_TIMERS_CITY_HISTO_6_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - 10000 |
| STAT_TIMERS_CITY_HISTO_7_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - 10000 |
| STAT_TIMERS_CITY_HISTO_8_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - 10000 |
| STAT_TIMERS_CITY_HISTO_9_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - 10000 |
| STAT_TIMERS_CITY_HISTO_10_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - 10000 |
| STAT_TIMERS_CITY_HISTO_11_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - 10000 |
| STAT_TIMERS_CITY_HISTO_1_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - 20000 |
| STAT_TIMERS_CITY_HISTO_2_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - 20000 |
| STAT_TIMERS_CITY_HISTO_3_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - 20000 |
| STAT_TIMERS_CITY_HISTO_4_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - 20000 |
| STAT_TIMERS_CITY_HISTO_5_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - 20000 |
| STAT_TIMERS_CITY_HISTO_6_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - 20000 |
| STAT_TIMERS_CITY_HISTO_7_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - 20000 |
| STAT_TIMERS_CITY_HISTO_8_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - 20000 |
| STAT_TIMERS_CITY_HISTO_9_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - 20000 |
| STAT_TIMERS_CITY_HISTO_10_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - 20000 |
| STAT_TIMERS_CITY_HISTO_11_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - 20000 |
| STAT_TIMERS_CITY_HISTO_1_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - 50000 |
| STAT_TIMERS_CITY_HISTO_2_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - 50000 |
| STAT_TIMERS_CITY_HISTO_3_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - 50000 |
| STAT_TIMERS_CITY_HISTO_4_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - 50000 |
| STAT_TIMERS_CITY_HISTO_5_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - 50000 |
| STAT_TIMERS_CITY_HISTO_6_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - 50000 |
| STAT_TIMERS_CITY_HISTO_7_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - 50000 |
| STAT_TIMERS_CITY_HISTO_8_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - 50000 |
| STAT_TIMERS_CITY_HISTO_9_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - 50000 |
| STAT_TIMERS_CITY_HISTO_10_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - 50000 |
| STAT_TIMERS_CITY_HISTO_11_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - 50000 |

### RES_0X230A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIMERS_RURAL_1_1_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - Driver 1 |
| STAT_TIMERS_RURAL_2_1_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - Driver 1 |
| STAT_TIMERS_RURAL_3_1_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - Driver 1 |
| STAT_TIMERS_RURAL_4_1_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - Driver 1 |
| STAT_TIMERS_RURAL_5_1_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - Driver 1 |
| STAT_TIMERS_RURAL_6_1_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - Driver 1 |
| STAT_TIMERS_RURAL_7_1_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - Driver 1 |
| STAT_TIMERS_RURAL_8_1_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - Driver 1 |
| STAT_TIMERS_RURAL_9_1_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - Driver 1 |
| STAT_TIMERS_RURAL_10_1_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - Driver 1 |
| STAT_TIMERS_RURAL_11_1_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - Driver 1 |
| STAT_TIMERS_RURAL_1_2_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - Driver 2 |
| STAT_TIMERS_RURAL_2_2_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - Driver 2 |
| STAT_TIMERS_RURAL_3_2_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - Driver 2 |
| STAT_TIMERS_RURAL_4_2_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - Driver 2 |
| STAT_TIMERS_RURAL_5_2_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - Driver 2 |
| STAT_TIMERS_RURAL_6_2_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - Driver 2 |
| STAT_TIMERS_RURAL_7_2_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - Driver 2 |
| STAT_TIMERS_RURAL_8_2_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - Driver 2 |
| STAT_TIMERS_RURAL_9_2_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - Driver 2 |
| STAT_TIMERS_RURAL_10_2_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - Driver 2 |
| STAT_TIMERS_RURAL_11_2_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - Driver 2 |
| STAT_TIMERS_RURAL_1_3_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - Driver 3 |
| STAT_TIMERS_RURAL_2_3_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - Driver 3 |
| STAT_TIMERS_RURAL_3_3_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - Driver 3 |
| STAT_TIMERS_RURAL_4_3_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - Driver 3 |
| STAT_TIMERS_RURAL_5_3_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - Driver 3 |
| STAT_TIMERS_RURAL_6_3_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - Driver 3 |
| STAT_TIMERS_RURAL_7_3_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - Driver 3 |
| STAT_TIMERS_RURAL_8_3_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - Driver 3 |
| STAT_TIMERS_RURAL_9_3_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - Driver 3 |
| STAT_TIMERS_RURAL_10_3_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - Driver 3 |
| STAT_TIMERS_RURAL_11_3_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - Driver 3 |

### RES_0X230B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIMERS_RURAL_HISTO_1_500_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - 500 |
| STAT_TIMERS_RURAL_HISTO_2_500_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - 500 |
| STAT_TIMERS_RURAL_HISTO_3_500_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - 500 |
| STAT_TIMERS_RURAL_HISTO_4_500_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - 500 |
| STAT_TIMERS_RURAL_HISTO_5_500_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - 500 |
| STAT_TIMERS_RURAL_HISTO_6_500_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - 500 |
| STAT_TIMERS_RURAL_HISTO_7_500_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - 500 |
| STAT_TIMERS_RURAL_HISTO_8_500_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - 500 |
| STAT_TIMERS_RURAL_HISTO_9_500_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - 500 |
| STAT_TIMERS_RURAL_HISTO_10_500_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - 500 |
| STAT_TIMERS_RURAL_HISTO_11_500_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - 500 |
| STAT_TIMERS_RURAL_HISTO_1_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - 1000 |
| STAT_TIMERS_RURAL_HISTO_2_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - 1000 |
| STAT_TIMERS_RURAL_HISTO_3_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - 1000 |
| STAT_TIMERS_RURAL_HISTO_4_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - 1000 |
| STAT_TIMERS_RURAL_HISTO_5_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - 1000 |
| STAT_TIMERS_RURAL_HISTO_6_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - 1000 |
| STAT_TIMERS_RURAL_HISTO_7_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - 1000 |
| STAT_TIMERS_RURAL_HISTO_8_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - 1000 |
| STAT_TIMERS_RURAL_HISTO_9_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - 1000 |
| STAT_TIMERS_RURAL_HISTO_10_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - 1000 |
| STAT_TIMERS_RURAL_HISTO_11_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - 1000 |
| STAT_TIMERS_RURAL_HISTO_1_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - 2000 |
| STAT_TIMERS_RURAL_HISTO_2_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - 2000 |
| STAT_TIMERS_RURAL_HISTO_3_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - 2000 |
| STAT_TIMERS_RURAL_HISTO_4_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - 2000 |
| STAT_TIMERS_RURAL_HISTO_5_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - 2000 |
| STAT_TIMERS_RURAL_HISTO_6_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - 2000 |
| STAT_TIMERS_RURAL_HISTO_7_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - 2000 |
| STAT_TIMERS_RURAL_HISTO_8_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - 2000 |
| STAT_TIMERS_RURAL_HISTO_9_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - 2000 |
| STAT_TIMERS_RURAL_HISTO_10_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - 2000 |
| STAT_TIMERS_RURAL_HISTO_11_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - 2000 |
| STAT_TIMERS_RURAL_HISTO_1_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - 5000 |
| STAT_TIMERS_RURAL_HISTO_2_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - 5000 |
| STAT_TIMERS_RURAL_HISTO_3_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - 5000 |
| STAT_TIMERS_RURAL_HISTO_4_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - 5000 |
| STAT_TIMERS_RURAL_HISTO_5_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - 5000 |
| STAT_TIMERS_RURAL_HISTO_6_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - 5000 |
| STAT_TIMERS_RURAL_HISTO_7_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - 5000 |
| STAT_TIMERS_RURAL_HISTO_8_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - 5000 |
| STAT_TIMERS_RURAL_HISTO_9_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - 5000 |
| STAT_TIMERS_RURAL_HISTO_10_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - 5000 |
| STAT_TIMERS_RURAL_HISTO_11_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - 5000 |
| STAT_TIMERS_RURAL_HISTO_1_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - 10000 |
| STAT_TIMERS_RURAL_HISTO_2_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - 10000 |
| STAT_TIMERS_RURAL_HISTO_3_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - 10000 |
| STAT_TIMERS_RURAL_HISTO_4_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - 10000 |
| STAT_TIMERS_RURAL_HISTO_5_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - 10000 |
| STAT_TIMERS_RURAL_HISTO_6_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - 10000 |
| STAT_TIMERS_RURAL_HISTO_7_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - 10000 |
| STAT_TIMERS_RURAL_HISTO_8_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - 10000 |
| STAT_TIMERS_RURAL_HISTO_9_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - 10000 |
| STAT_TIMERS_RURAL_HISTO_10_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - 10000 |
| STAT_TIMERS_RURAL_HISTO_11_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - 10000 |
| STAT_TIMERS_RURAL_HISTO_1_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - 20000 |
| STAT_TIMERS_RURAL_HISTO_2_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - 20000 |
| STAT_TIMERS_RURAL_HISTO_3_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - 20000 |
| STAT_TIMERS_RURAL_HISTO_4_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - 20000 |
| STAT_TIMERS_RURAL_HISTO_5_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - 20000 |
| STAT_TIMERS_RURAL_HISTO_6_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - 20000 |
| STAT_TIMERS_RURAL_HISTO_7_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - 20000 |
| STAT_TIMERS_RURAL_HISTO_8_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - 20000 |
| STAT_TIMERS_RURAL_HISTO_9_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - 20000 |
| STAT_TIMERS_RURAL_HISTO_10_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - 20000 |
| STAT_TIMERS_RURAL_HISTO_11_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - 20000 |
| STAT_TIMERS_RURAL_HISTO_1_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active - 50000 |
| STAT_TIMERS_RURAL_HISTO_2_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time klemme 15 is active during night  - 50000 |
| STAT_TIMERS_RURAL_HISTO_3_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time system is active - 50000 |
| STAT_TIMERS_RURAL_HISTO_4_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection active - 50000 |
| STAT_TIMERS_RURAL_HISTO_5_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time object detection is not active due to overtemperature - 50000 |
| STAT_TIMERS_RURAL_HISTO_6_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time FIR imager is blocked - 50000 |
| STAT_TIMERS_RURAL_HISTO_7_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active - 50000 |
| STAT_TIMERS_RURAL_HISTO_8_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time in seconds video output is active at night - 50000 |
| STAT_TIMERS_RURAL_HISTO_9_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is active - 50000 |
| STAT_TIMERS_RURAL_HISTO_10_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is active - 50000 |
| STAT_TIMERS_RURAL_HISTO_11_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time design light in the marking light unit is switched on. - 50000 |

### RES_0X230C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_1_1_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to permanent errors - Driver 1 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_2_1_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to permanent errors - Driver 1 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_3_1_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light is unavailable due to temporary error - Driver 1 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_4_1_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light is unavailable due to temporary error - Driver 1 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_5_1_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to alive counter not updated. - Driver 1 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_6_1_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to alive counter not updated. - Driver 1 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_7_1_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to not receving message ST_GZA_LH - Driver 1 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_8_1_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to not receving message ST_GZA_RH - Driver 1 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_1_2_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to permanent errors - Driver 2 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_2_2_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to permanent errors - Driver 2 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_3_2_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light is unavailable due to temporary error - Driver 2 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_4_2_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light is unavailable due to temporary error - Driver 2 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_5_2_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to alive counter not updated. - Driver 2 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_6_2_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to alive counter not updated. - Driver 2 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_7_2_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to not receving message ST_GZA_LH - Driver 2 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_8_2_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to not receving message ST_GZA_RH - Driver 2 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_1_3_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to permanent errors - Driver 3 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_2_3_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to permanent errors - Driver 3 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_3_3_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light is unavailable due to temporary error - Driver 3 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_4_3_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light is unavailable due to temporary error - Driver 3 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_5_3_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to alive counter not updated. - Driver 3 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_6_3_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to alive counter not updated. - Driver 3 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_7_3_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to not receving message ST_GZA_LH - Driver 3 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_8_3_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to not receving message ST_GZA_RH - Driver 3 |

### RES_0X230D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_1_500_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to permanent errors - 500 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_2_500_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to permanent errors - 500 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_3_500_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light is unavailable due to temporary error - 500 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_4_500_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light is unavailable due to temporary error - 500 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_5_500_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to alive counter not updated. - 500 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_6_500_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to alive counter not updated. - 500 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_7_500_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to not receving message ST_GZA_LH - 500 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_8_500_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to not receving message ST_GZA_RH - 500 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_1_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to permanent errors - 1000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_2_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to permanent errors - 1000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_3_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light is unavailable due to temporary error - 1000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_4_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light is unavailable due to temporary error - 1000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_5_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to alive counter not updated. - 1000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_6_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to alive counter not updated. - 1000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_7_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to not receving message ST_GZA_LH - 1000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_8_1000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to not receving message ST_GZA_RH - 1000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_1_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to permanent errors - 2000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_2_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to permanent errors - 2000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_3_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light is unavailable due to temporary error - 2000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_4_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light is unavailable due to temporary error - 2000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_5_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to alive counter not updated. - 2000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_6_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to alive counter not updated. - 2000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_7_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to not receving message ST_GZA_LH - 2000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_8_2000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to not receving message ST_GZA_RH - 2000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_1_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to permanent errors - 5000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_2_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to permanent errors - 5000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_3_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light is unavailable due to temporary error - 5000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_4_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light is unavailable due to temporary error - 5000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_5_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to alive counter not updated. - 5000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_6_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to alive counter not updated. - 5000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_7_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to not receving message ST_GZA_LH - 5000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_8_5000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to not receving message ST_GZA_RH - 5000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_1_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to permanent errors - 10000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_2_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to permanent errors - 10000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_3_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light is unavailable due to temporary error - 10000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_4_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light is unavailable due to temporary error - 10000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_5_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to alive counter not updated. - 10000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_6_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to alive counter not updated. - 10000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_7_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to not receving message ST_GZA_LH - 10000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_8_10000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to not receving message ST_GZA_RH - 10000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_1_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to permanent errors - 20000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_2_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to permanent errors - 20000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_3_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light is unavailable due to temporary error - 20000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_4_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light is unavailable due to temporary error - 20000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_5_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to alive counter not updated. - 20000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_6_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to alive counter not updated. - 20000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_7_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to not receving message ST_GZA_LH - 20000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_8_20000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to not receving message ST_GZA_RH - 20000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_1_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to permanent errors - 50000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_2_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to permanent errors - 50000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_3_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light is unavailable due to temporary error - 50000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_4_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light is unavailable due to temporary error - 50000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_5_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to alive counter not updated. - 50000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_6_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to alive counter not updated. - 50000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_7_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time left marking light unit is unavailable due to not receving message ST_GZA_LH - 50000 |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTO_8_50000_WERT | - | - | unsigned long | - | - | - | - | - | Time right marking light unit is unavailable due to not receving message ST_GZA_RH - 50000 |

### RES_0X230E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_LEFT_ANGLE_1_1_WERT | - | - | unsigned long | - | - | - | - | - | -3 <= D <= -2 - Driver 1 |
| STAT_NV_LEFT_ANGLE_2_1_WERT | - | - | unsigned long | - | - | - | - | - | -2 < D <= -1 - Driver 1 |
| STAT_NV_LEFT_ANGLE_3_1_WERT | - | - | unsigned long | - | - | - | - | - | -1 < D <= 0 - Driver 1 |
| STAT_NV_LEFT_ANGLE_4_1_WERT | - | - | unsigned long | - | - | - | - | - | 0 < D <= 1  - Driver 1 |
| STAT_NV_LEFT_ANGLE_5_1_WERT | - | - | unsigned long | - | - | - | - | - | 1 < D <= 2 - Driver 1 |
| STAT_NV_LEFT_ANGLE_6_1_WERT | - | - | unsigned long | - | - | - | - | - | 2 < D <= 3  - Driver 1 |
| STAT_NV_LEFT_ANGLE_7_1_WERT | - | - | unsigned long | - | - | - | - | - | 3 < D <= 4  - Driver 1 |
| STAT_NV_LEFT_ANGLE_8_1_WERT | - | - | unsigned long | - | - | - | - | - | 4 < D <= 5  - Driver 1 |
| STAT_NV_LEFT_ANGLE_9_1_WERT | - | - | unsigned long | - | - | - | - | - | 5 < D <= 6  - Driver 1 |
| STAT_NV_LEFT_ANGLE_10_1_WERT | - | - | unsigned long | - | - | - | - | - | 6 < D <= 7  - Driver 1 |
| STAT_NV_LEFT_ANGLE_11_1_WERT | - | - | unsigned long | - | - | - | - | - | 7 < D <= 8  - Driver 1 |
| STAT_NV_LEFT_ANGLE_12_1_WERT | - | - | unsigned long | - | - | - | - | - | 8 < D <= 9  - Driver 1 |
| STAT_NV_LEFT_ANGLE_13_1_WERT | - | - | unsigned long | - | - | - | - | - | 9 < D <= 10  - Driver 1 |
| STAT_NV_LEFT_ANGLE_14_1_WERT | - | - | unsigned long | - | - | - | - | - | 10 < D <= 11 - Driver 1 |
| STAT_NV_LEFT_ANGLE_15_1_WERT | - | - | unsigned long | - | - | - | - | - | 11 < D <= 12 - Driver 1 |
| STAT_NV_LEFT_ANGLE_1_2_WERT | - | - | unsigned long | - | - | - | - | - | -3 <= D <= -2 - Driver 2 |
| STAT_NV_LEFT_ANGLE_2_2_WERT | - | - | unsigned long | - | - | - | - | - | -2 < D <= -1 - Driver 2 |
| STAT_NV_LEFT_ANGLE_3_2_WERT | - | - | unsigned long | - | - | - | - | - | -1 < D <= 0 - Driver 2 |
| STAT_NV_LEFT_ANGLE_4_2_WERT | - | - | unsigned long | - | - | - | - | - | 0 < D <= 1  - Driver 2 |
| STAT_NV_LEFT_ANGLE_5_2_WERT | - | - | unsigned long | - | - | - | - | - | 1 < D <= 2 - Driver 2 |
| STAT_NV_LEFT_ANGLE_6_2_WERT | - | - | unsigned long | - | - | - | - | - | 2 < D <= 3  - Driver 2 |
| STAT_NV_LEFT_ANGLE_7_2_WERT | - | - | unsigned long | - | - | - | - | - | 3 < D <= 4  - Driver 2 |
| STAT_NV_LEFT_ANGLE_8_2_WERT | - | - | unsigned long | - | - | - | - | - | 4 < D <= 5  - Driver 2 |
| STAT_NV_LEFT_ANGLE_9_2_WERT | - | - | unsigned long | - | - | - | - | - | 5 < D <= 6  - Driver 2 |
| STAT_NV_LEFT_ANGLE_10_2_WERT | - | - | unsigned long | - | - | - | - | - | 6 < D <= 7  - Driver 2 |
| STAT_NV_LEFT_ANGLE_11_2_WERT | - | - | unsigned long | - | - | - | - | - | 7 < D <= 8  - Driver 2 |
| STAT_NV_LEFT_ANGLE_12_2_WERT | - | - | unsigned long | - | - | - | - | - | 8 < D <= 9  - Driver 2 |
| STAT_NV_LEFT_ANGLE_13_2_WERT | - | - | unsigned long | - | - | - | - | - | 9 < D <= 10  - Driver 2 |
| STAT_NV_LEFT_ANGLE_14_2_WERT | - | - | unsigned long | - | - | - | - | - | 10 < D <= 11 - Driver 2 |
| STAT_NV_LEFT_ANGLE_15_2_WERT | - | - | unsigned long | - | - | - | - | - | 11 < D <= 12 - Driver 2 |
| STAT_NV_LEFT_ANGLE_1_3_WERT | - | - | unsigned long | - | - | - | - | - | -3 <= D <= -2 - Driver 3 |
| STAT_NV_LEFT_ANGLE_2_3_WERT | - | - | unsigned long | - | - | - | - | - | -2 < D <= -1 - Driver 3 |
| STAT_NV_LEFT_ANGLE_3_3_WERT | - | - | unsigned long | - | - | - | - | - | -1 < D <= 0 - Driver 3 |
| STAT_NV_LEFT_ANGLE_4_3_WERT | - | - | unsigned long | - | - | - | - | - | 0 < D <= 1  - Driver 3 |
| STAT_NV_LEFT_ANGLE_5_3_WERT | - | - | unsigned long | - | - | - | - | - | 1 < D <= 2 - Driver 3 |
| STAT_NV_LEFT_ANGLE_6_3_WERT | - | - | unsigned long | - | - | - | - | - | 2 < D <= 3  - Driver 3 |
| STAT_NV_LEFT_ANGLE_7_3_WERT | - | - | unsigned long | - | - | - | - | - | 3 < D <= 4  - Driver 3 |
| STAT_NV_LEFT_ANGLE_8_3_WERT | - | - | unsigned long | - | - | - | - | - | 4 < D <= 5  - Driver 3 |
| STAT_NV_LEFT_ANGLE_9_3_WERT | - | - | unsigned long | - | - | - | - | - | 5 < D <= 6  - Driver 3 |
| STAT_NV_LEFT_ANGLE_10_3_WERT | - | - | unsigned long | - | - | - | - | - | 6 < D <= 7  - Driver 3 |
| STAT_NV_LEFT_ANGLE_11_3_WERT | - | - | unsigned long | - | - | - | - | - | 7 < D <= 8  - Driver 3 |
| STAT_NV_LEFT_ANGLE_12_3_WERT | - | - | unsigned long | - | - | - | - | - | 8 < D <= 9  - Driver 3 |
| STAT_NV_LEFT_ANGLE_13_3_WERT | - | - | unsigned long | - | - | - | - | - | 9 < D <= 10  - Driver 3 |
| STAT_NV_LEFT_ANGLE_14_3_WERT | - | - | unsigned long | - | - | - | - | - | 10 < D <= 11 - Driver 3 |
| STAT_NV_LEFT_ANGLE_15_3_WERT | - | - | unsigned long | - | - | - | - | - | 11 < D <= 12 - Driver 3 |

### RES_0X230F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_LEFT_ANGLE_HISTO_1_500_WERT | - | - | unsigned long | - | - | - | - | - | -3 <= D <= -2 - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_2_500_WERT | - | - | unsigned long | - | - | - | - | - | -2 < D <= -1 - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_3_500_WERT | - | - | unsigned long | - | - | - | - | - | -1 < D <= 0 - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_4_500_WERT | - | - | unsigned long | - | - | - | - | - | 0 < D <= 1  - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_5_500_WERT | - | - | unsigned long | - | - | - | - | - | 1 < D <= 2 - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_6_500_WERT | - | - | unsigned long | - | - | - | - | - | 2 < D <= 3  - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_7_500_WERT | - | - | unsigned long | - | - | - | - | - | 3 < D <= 4  - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_8_500_WERT | - | - | unsigned long | - | - | - | - | - | 4 < D <= 5  - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_9_500_WERT | - | - | unsigned long | - | - | - | - | - | 5 < D <= 6  - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_10_500_WERT | - | - | unsigned long | - | - | - | - | - | 6 < D <= 7  - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_11_500_WERT | - | - | unsigned long | - | - | - | - | - | 7 < D <= 8  - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_12_500_WERT | - | - | unsigned long | - | - | - | - | - | 8 < D <= 9  - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_13_500_WERT | - | - | unsigned long | - | - | - | - | - | 9 < D <= 10  - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_14_500_WERT | - | - | unsigned long | - | - | - | - | - | 10 < D <= 11 - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_15_500_WERT | - | - | unsigned long | - | - | - | - | - | 11 < D <= 12 - 500 |
| STAT_NV_LEFT_ANGLE_HISTO_1_1000_WERT | - | - | unsigned long | - | - | - | - | - | -3 <= D <= -2 - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_2_1000_WERT | - | - | unsigned long | - | - | - | - | - | -2 < D <= -1 - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_3_1000_WERT | - | - | unsigned long | - | - | - | - | - | -1 < D <= 0 - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_4_1000_WERT | - | - | unsigned long | - | - | - | - | - | 0 < D <= 1  - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_5_1000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < D <= 2 - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_6_1000_WERT | - | - | unsigned long | - | - | - | - | - | 2 < D <= 3  - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_7_1000_WERT | - | - | unsigned long | - | - | - | - | - | 3 < D <= 4  - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_8_1000_WERT | - | - | unsigned long | - | - | - | - | - | 4 < D <= 5  - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_9_1000_WERT | - | - | unsigned long | - | - | - | - | - | 5 < D <= 6  - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_10_1000_WERT | - | - | unsigned long | - | - | - | - | - | 6 < D <= 7  - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_11_1000_WERT | - | - | unsigned long | - | - | - | - | - | 7 < D <= 8  - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_12_1000_WERT | - | - | unsigned long | - | - | - | - | - | 8 < D <= 9  - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_13_1000_WERT | - | - | unsigned long | - | - | - | - | - | 9 < D <= 10  - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_14_1000_WERT | - | - | unsigned long | - | - | - | - | - | 10 < D <= 11 - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_15_1000_WERT | - | - | unsigned long | - | - | - | - | - | 11 < D <= 12 - 1000 |
| STAT_NV_LEFT_ANGLE_HISTO_1_2000_WERT | - | - | unsigned long | - | - | - | - | - | -3 <= D <= -2 - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_2_2000_WERT | - | - | unsigned long | - | - | - | - | - | -2 < D <= -1 - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_3_2000_WERT | - | - | unsigned long | - | - | - | - | - | -1 < D <= 0 - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_4_2000_WERT | - | - | unsigned long | - | - | - | - | - | 0 < D <= 1  - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_5_2000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < D <= 2 - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_6_2000_WERT | - | - | unsigned long | - | - | - | - | - | 2 < D <= 3  - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_7_2000_WERT | - | - | unsigned long | - | - | - | - | - | 3 < D <= 4  - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_8_2000_WERT | - | - | unsigned long | - | - | - | - | - | 4 < D <= 5  - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_9_2000_WERT | - | - | unsigned long | - | - | - | - | - | 5 < D <= 6  - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_10_2000_WERT | - | - | unsigned long | - | - | - | - | - | 6 < D <= 7  - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_11_2000_WERT | - | - | unsigned long | - | - | - | - | - | 7 < D <= 8  - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_12_2000_WERT | - | - | unsigned long | - | - | - | - | - | 8 < D <= 9  - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_13_2000_WERT | - | - | unsigned long | - | - | - | - | - | 9 < D <= 10  - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_14_2000_WERT | - | - | unsigned long | - | - | - | - | - | 10 < D <= 11 - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_15_2000_WERT | - | - | unsigned long | - | - | - | - | - | 11 < D <= 12 - 2000 |
| STAT_NV_LEFT_ANGLE_HISTO_1_5000_WERT | - | - | unsigned long | - | - | - | - | - | -3 <= D <= -2 - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_2_5000_WERT | - | - | unsigned long | - | - | - | - | - | -2 < D <= -1 - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_3_5000_WERT | - | - | unsigned long | - | - | - | - | - | -1 < D <= 0 - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_4_5000_WERT | - | - | unsigned long | - | - | - | - | - | 0 < D <= 1  - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_5_5000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < D <= 2 - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_6_5000_WERT | - | - | unsigned long | - | - | - | - | - | 2 < D <= 3  - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_7_5000_WERT | - | - | unsigned long | - | - | - | - | - | 3 < D <= 4  - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_8_5000_WERT | - | - | unsigned long | - | - | - | - | - | 4 < D <= 5  - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_9_5000_WERT | - | - | unsigned long | - | - | - | - | - | 5 < D <= 6  - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_10_5000_WERT | - | - | unsigned long | - | - | - | - | - | 6 < D <= 7  - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_11_5000_WERT | - | - | unsigned long | - | - | - | - | - | 7 < D <= 8  - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_12_5000_WERT | - | - | unsigned long | - | - | - | - | - | 8 < D <= 9  - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_13_5000_WERT | - | - | unsigned long | - | - | - | - | - | 9 < D <= 10  - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_14_5000_WERT | - | - | unsigned long | - | - | - | - | - | 10 < D <= 11 - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_15_5000_WERT | - | - | unsigned long | - | - | - | - | - | 11 < D <= 12 - 5000 |
| STAT_NV_LEFT_ANGLE_HISTO_1_10000_WERT | - | - | unsigned long | - | - | - | - | - | -3 <= D <= -2 - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_2_10000_WERT | - | - | unsigned long | - | - | - | - | - | -2 < D <= -1 - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_3_10000_WERT | - | - | unsigned long | - | - | - | - | - | -1 < D <= 0 - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_4_10000_WERT | - | - | unsigned long | - | - | - | - | - | 0 < D <= 1  - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_5_10000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < D <= 2 - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_6_10000_WERT | - | - | unsigned long | - | - | - | - | - | 2 < D <= 3  - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_7_10000_WERT | - | - | unsigned long | - | - | - | - | - | 3 < D <= 4  - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_8_10000_WERT | - | - | unsigned long | - | - | - | - | - | 4 < D <= 5  - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_9_10000_WERT | - | - | unsigned long | - | - | - | - | - | 5 < D <= 6  - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_10_10000_WERT | - | - | unsigned long | - | - | - | - | - | 6 < D <= 7  - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_11_10000_WERT | - | - | unsigned long | - | - | - | - | - | 7 < D <= 8  - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_12_10000_WERT | - | - | unsigned long | - | - | - | - | - | 8 < D <= 9  - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_13_10000_WERT | - | - | unsigned long | - | - | - | - | - | 9 < D <= 10  - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_14_10000_WERT | - | - | unsigned long | - | - | - | - | - | 10 < D <= 11 - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_15_10000_WERT | - | - | unsigned long | - | - | - | - | - | 11 < D <= 12 - 10000 |
| STAT_NV_LEFT_ANGLE_HISTO_1_20000_WERT | - | - | unsigned long | - | - | - | - | - | -3 <= D <= -2 - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_2_20000_WERT | - | - | unsigned long | - | - | - | - | - | -2 < D <= -1 - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_3_20000_WERT | - | - | unsigned long | - | - | - | - | - | -1 < D <= 0 - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_4_20000_WERT | - | - | unsigned long | - | - | - | - | - | 0 < D <= 1  - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_5_20000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < D <= 2 - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_6_20000_WERT | - | - | unsigned long | - | - | - | - | - | 2 < D <= 3  - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_7_20000_WERT | - | - | unsigned long | - | - | - | - | - | 3 < D <= 4  - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_8_20000_WERT | - | - | unsigned long | - | - | - | - | - | 4 < D <= 5  - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_9_20000_WERT | - | - | unsigned long | - | - | - | - | - | 5 < D <= 6  - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_10_20000_WERT | - | - | unsigned long | - | - | - | - | - | 6 < D <= 7  - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_11_20000_WERT | - | - | unsigned long | - | - | - | - | - | 7 < D <= 8  - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_12_20000_WERT | - | - | unsigned long | - | - | - | - | - | 8 < D <= 9  - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_13_20000_WERT | - | - | unsigned long | - | - | - | - | - | 9 < D <= 10  - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_14_20000_WERT | - | - | unsigned long | - | - | - | - | - | 10 < D <= 11 - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_15_20000_WERT | - | - | unsigned long | - | - | - | - | - | 11 < D <= 12 - 20000 |
| STAT_NV_LEFT_ANGLE_HISTO_1_50000_WERT | - | - | unsigned long | - | - | - | - | - | -3 <= D <= -2 - 50000 |
| STAT_NV_LEFT_ANGLE_HISTO_2_50000_WERT | - | - | unsigned long | - | - | - | - | - | -2 < D <= -1 - 50000 |
| STAT_NV_LEFT_ANGLE_HISTO_3_50000_WERT | - | - | unsigned long | - | - | - | - | - | -1 < D <= 0 - 50000 |
| STAT_NV_LEFT_ANGLE_HISTO_4_50000_WERT | - | - | unsigned long | - | - | - | - | - | 0 < D <= 1  - 50000 |
| STAT_NV_LEFT_ANGLE_HISTO_5_50000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < D <= 2 - 50000 |
| STAT_NV_LEFT_ANGLE_HISTO_6_50000_WERT | - | - | unsigned long | - | - | - | - | - | 2 < D <= 3  - 50000 |
| STAT_NV_LEFT_ANGLE_HISTO_7_50000_WERT | - | - | unsigned long | - | - | - | - | - | 3 < D <= 4  - 50000 |
| STAT_NV_LEFT_ANGLE_HISTO_8_50000_WERT | - | - | unsigned long | - | - | - | - | - | 4 < D <= 5  - 50000 |
| STAT_NV_LEFT_ANGLE_HISTO_9_50000_WERT | - | - | unsigned long | - | - | - | - | - | 5 < D <= 6  - 50000 |
| STAT_NV_LEFT_ANGLE_HISTO_10_50000_WERT | - | - | unsigned long | - | - | - | - | - | 6 < D <= 7  - 50000 |
| STAT_NV_LEFT_ANGLE_HISTO_11_50000_WERT | - | - | unsigned long | - | - | - | - | - | 7 < D <= 8  - 50000 |
| STAT_NV_LEFT_ANGLE_HISTO_12_50000_WERT | - | - | unsigned long | - | - | - | - | - | 8 < D <= 9  - 50000 |
| STAT_NV_LEFT_ANGLE_HISTO_13_50000_WERT | - | - | unsigned long | - | - | - | - | - | 9 < D <= 10  - 50000 |
| STAT_NV_LEFT_ANGLE_HISTO_14_50000_WERT | - | - | unsigned long | - | - | - | - | - | 10 < D <= 11 - 50000 |
| STAT_NV_LEFT_ANGLE_HISTO_15_50000_WERT | - | - | unsigned long | - | - | - | - | - | 11 < D <= 12 - 50000 |

### RES_0X2310_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_RIGHT_ANGLE_1_1_WERT | - | - | unsigned long | - | - | - | - | - | 2 <= B <= 3 - Driver 1 |
| STAT_NV_RIGHT_ANGLE_2_1_WERT | - | - | unsigned long | - | - | - | - | - | 1 < B <= 2 - Driver 1 |
| STAT_NV_RIGHT_ANGLE_3_1_WERT | - | - | unsigned long | - | - | - | - | - | 0 < B <= 1 - Driver 1 |
| STAT_NV_RIGHT_ANGLE_4_1_WERT | - | - | unsigned long | - | - | - | - | - | -1 < B <= 0  - Driver 1 |
| STAT_NV_RIGHT_ANGLE_5_1_WERT | - | - | unsigned long | - | - | - | - | - | -2 < B <= -1 - Driver 1 |
| STAT_NV_RIGHT_ANGLE_6_1_WERT | - | - | unsigned long | - | - | - | - | - | -3 < B <= -2 - Driver 1 |
| STAT_NV_RIGHT_ANGLE_7_1_WERT | - | - | unsigned long | - | - | - | - | - | -4 < B <= -3 - Driver 1 |
| STAT_NV_RIGHT_ANGLE_8_1_WERT | - | - | unsigned long | - | - | - | - | - | -5 < B <= -4  - Driver 1 |
| STAT_NV_RIGHT_ANGLE_9_1_WERT | - | - | unsigned long | - | - | - | - | - | -6 < B <= -5  - Driver 1 |
| STAT_NV_RIGHT_ANGLE_10_1_WERT | - | - | unsigned long | - | - | - | - | - | -7 < B <= -6 - Driver 1 |
| STAT_NV_RIGHT_ANGLE_11_1_WERT | - | - | unsigned long | - | - | - | - | - | -8 < B <= -7 - Driver 1 |
| STAT_NV_RIGHT_ANGLE_12_1_WERT | - | - | unsigned long | - | - | - | - | - | -9 < B <= -8  - Driver 1 |
| STAT_NV_RIGHT_ANGLE_13_1_WERT | - | - | unsigned long | - | - | - | - | - | -10 < B <= -9  - Driver 1 |
| STAT_NV_RIGHT_ANGLE_14_1_WERT | - | - | unsigned long | - | - | - | - | - | -11 < B <= -10 - Driver 1 |
| STAT_NV_RIGHT_ANGLE_15_1_WERT | - | - | unsigned long | - | - | - | - | - | -12 < B <= -11 - Driver 1 |
| STAT_NV_RIGHT_ANGLE_1_2_WERT | - | - | unsigned long | - | - | - | - | - | 2 <= B <= 3 - Driver 2 |
| STAT_NV_RIGHT_ANGLE_2_2_WERT | - | - | unsigned long | - | - | - | - | - | 1 < B <= 2 - Driver 2 |
| STAT_NV_RIGHT_ANGLE_3_2_WERT | - | - | unsigned long | - | - | - | - | - | 0 < B <= 1 - Driver 2 |
| STAT_NV_RIGHT_ANGLE_4_2_WERT | - | - | unsigned long | - | - | - | - | - | -1 < B <= 0  - Driver 2 |
| STAT_NV_RIGHT_ANGLE_5_2_WERT | - | - | unsigned long | - | - | - | - | - | -2 < B <= -1 - Driver 2 |
| STAT_NV_RIGHT_ANGLE_6_2_WERT | - | - | unsigned long | - | - | - | - | - | -3 < B <= -2 - Driver 2 |
| STAT_NV_RIGHT_ANGLE_7_2_WERT | - | - | unsigned long | - | - | - | - | - | -4 < B <= -3 - Driver 2 |
| STAT_NV_RIGHT_ANGLE_8_2_WERT | - | - | unsigned long | - | - | - | - | - | -5 < B <= -4  - Driver 2 |
| STAT_NV_RIGHT_ANGLE_9_2_WERT | - | - | unsigned long | - | - | - | - | - | -6 < B <= -5  - Driver 2 |
| STAT_NV_RIGHT_ANGLE_10_2_WERT | - | - | unsigned long | - | - | - | - | - | -7 < B <= -6 - Driver 2 |
| STAT_NV_RIGHT_ANGLE_11_2_WERT | - | - | unsigned long | - | - | - | - | - | -8 < B <= -7 - Driver 2 |
| STAT_NV_RIGHT_ANGLE_12_2_WERT | - | - | unsigned long | - | - | - | - | - | -9 < B <= -8  - Driver 2 |
| STAT_NV_RIGHT_ANGLE_13_2_WERT | - | - | unsigned long | - | - | - | - | - | -10 < B <= -9  - Driver 2 |
| STAT_NV_RIGHT_ANGLE_14_2_WERT | - | - | unsigned long | - | - | - | - | - | -11 < B <= -10 - Driver 2 |
| STAT_NV_RIGHT_ANGLE_15_2_WERT | - | - | unsigned long | - | - | - | - | - | -12 < B <= -11 - Driver 2 |
| STAT_NV_RIGHT_ANGLE_1_3_WERT | - | - | unsigned long | - | - | - | - | - | 2 <= B <= 3 - Driver 3 |
| STAT_NV_RIGHT_ANGLE_2_3_WERT | - | - | unsigned long | - | - | - | - | - | 1 < B <= 2 - Driver 3 |
| STAT_NV_RIGHT_ANGLE_3_3_WERT | - | - | unsigned long | - | - | - | - | - | 0 < B <= 1 - Driver 3 |
| STAT_NV_RIGHT_ANGLE_4_3_WERT | - | - | unsigned long | - | - | - | - | - | -1 < B <= 0  - Driver 3 |
| STAT_NV_RIGHT_ANGLE_5_3_WERT | - | - | unsigned long | - | - | - | - | - | -2 < B <= -1 - Driver 3 |
| STAT_NV_RIGHT_ANGLE_6_3_WERT | - | - | unsigned long | - | - | - | - | - | -3 < B <= -2 - Driver 3 |
| STAT_NV_RIGHT_ANGLE_7_3_WERT | - | - | unsigned long | - | - | - | - | - | -4 < B <= -3 - Driver 3 |
| STAT_NV_RIGHT_ANGLE_8_3_WERT | - | - | unsigned long | - | - | - | - | - | -5 < B <= -4  - Driver 3 |
| STAT_NV_RIGHT_ANGLE_9_3_WERT | - | - | unsigned long | - | - | - | - | - | -6 < B <= -5  - Driver 3 |
| STAT_NV_RIGHT_ANGLE_10_3_WERT | - | - | unsigned long | - | - | - | - | - | -7 < B <= -6 - Driver 3 |
| STAT_NV_RIGHT_ANGLE_11_3_WERT | - | - | unsigned long | - | - | - | - | - | -8 < B <= -7 - Driver 3 |
| STAT_NV_RIGHT_ANGLE_12_3_WERT | - | - | unsigned long | - | - | - | - | - | -9 < B <= -8  - Driver 3 |
| STAT_NV_RIGHT_ANGLE_13_3_WERT | - | - | unsigned long | - | - | - | - | - | -10 < B <= -9  - Driver 3 |
| STAT_NV_RIGHT_ANGLE_14_3_WERT | - | - | unsigned long | - | - | - | - | - | -11 < B <= -10 - Driver 3 |
| STAT_NV_RIGHT_ANGLE_15_3_WERT | - | - | unsigned long | - | - | - | - | - | -12 < B <= -11 - Driver 3 |

### RES_0X2311_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_RIGHT_ANGLE_HISTO_1_500_WERT | - | - | unsigned long | - | - | - | - | - | 2 <= B <= 3 - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_2_500_WERT | - | - | unsigned long | - | - | - | - | - | 1 < B <= 2 - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_3_500_WERT | - | - | unsigned long | - | - | - | - | - | 0 < B <= 1 - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_4_500_WERT | - | - | unsigned long | - | - | - | - | - | -1 < B <= 0  - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_5_500_WERT | - | - | unsigned long | - | - | - | - | - | -2 < B <= -1 - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_6_500_WERT | - | - | unsigned long | - | - | - | - | - | -3 < B <= -2 - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_7_500_WERT | - | - | unsigned long | - | - | - | - | - | -4 < B <= -3 - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_8_500_WERT | - | - | unsigned long | - | - | - | - | - | -5 < B <= -4  - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_9_500_WERT | - | - | unsigned long | - | - | - | - | - | -6 < B <= -5  - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_10_500_WERT | - | - | unsigned long | - | - | - | - | - | -7 < B <= -6 - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_11_500_WERT | - | - | unsigned long | - | - | - | - | - | -8 < B <= -7 - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_12_500_WERT | - | - | unsigned long | - | - | - | - | - | -9 < B <= -8  - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_13_500_WERT | - | - | unsigned long | - | - | - | - | - | -10 < B <= -9  - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_14_500_WERT | - | - | unsigned long | - | - | - | - | - | -11 < B <= -10 - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_15_500_WERT | - | - | unsigned long | - | - | - | - | - | -12 < B <= -11 - 500 |
| STAT_NV_RIGHT_ANGLE_HISTO_1_1000_WERT | - | - | unsigned long | - | - | - | - | - | 2 <= B <= 3 - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_2_1000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < B <= 2 - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_3_1000_WERT | - | - | unsigned long | - | - | - | - | - | 0 < B <= 1 - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_4_1000_WERT | - | - | unsigned long | - | - | - | - | - | -1 < B <= 0  - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_5_1000_WERT | - | - | unsigned long | - | - | - | - | - | -2 < B <= -1 - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_6_1000_WERT | - | - | unsigned long | - | - | - | - | - | -3 < B <= -2 - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_7_1000_WERT | - | - | unsigned long | - | - | - | - | - | -4 < B <= -3 - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_8_1000_WERT | - | - | unsigned long | - | - | - | - | - | -5 < B <= -4  - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_9_1000_WERT | - | - | unsigned long | - | - | - | - | - | -6 < B <= -5  - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_10_1000_WERT | - | - | unsigned long | - | - | - | - | - | -7 < B <= -6 - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_11_1000_WERT | - | - | unsigned long | - | - | - | - | - | -8 < B <= -7 - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_12_1000_WERT | - | - | unsigned long | - | - | - | - | - | -9 < B <= -8  - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_13_1000_WERT | - | - | unsigned long | - | - | - | - | - | -10 < B <= -9  - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_14_1000_WERT | - | - | unsigned long | - | - | - | - | - | -11 < B <= -10 - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_15_1000_WERT | - | - | unsigned long | - | - | - | - | - | -12 < B <= -11 - 1000 |
| STAT_NV_RIGHT_ANGLE_HISTO_1_2000_WERT | - | - | unsigned long | - | - | - | - | - | 2 <= B <= 3 - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_2_2000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < B <= 2 - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_3_2000_WERT | - | - | unsigned long | - | - | - | - | - | 0 < B <= 1 - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_4_2000_WERT | - | - | unsigned long | - | - | - | - | - | -1 < B <= 0  - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_5_2000_WERT | - | - | unsigned long | - | - | - | - | - | -2 < B <= -1 - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_6_2000_WERT | - | - | unsigned long | - | - | - | - | - | -3 < B <= -2 - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_7_2000_WERT | - | - | unsigned long | - | - | - | - | - | -4 < B <= -3 - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_8_2000_WERT | - | - | unsigned long | - | - | - | - | - | -5 < B <= -4  - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_9_2000_WERT | - | - | unsigned long | - | - | - | - | - | -6 < B <= -5  - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_10_2000_WERT | - | - | unsigned long | - | - | - | - | - | -7 < B <= -6 - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_11_2000_WERT | - | - | unsigned long | - | - | - | - | - | -8 < B <= -7 - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_12_2000_WERT | - | - | unsigned long | - | - | - | - | - | -9 < B <= -8  - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_13_2000_WERT | - | - | unsigned long | - | - | - | - | - | -10 < B <= -9  - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_14_2000_WERT | - | - | unsigned long | - | - | - | - | - | -11 < B <= -10 - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_15_2000_WERT | - | - | unsigned long | - | - | - | - | - | -12 < B <= -11 - 2000 |
| STAT_NV_RIGHT_ANGLE_HISTO_1_5000_WERT | - | - | unsigned long | - | - | - | - | - | 2 <= B <= 3 - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_2_5000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < B <= 2 - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_3_5000_WERT | - | - | unsigned long | - | - | - | - | - | 0 < B <= 1 - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_4_5000_WERT | - | - | unsigned long | - | - | - | - | - | -1 < B <= 0  - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_5_5000_WERT | - | - | unsigned long | - | - | - | - | - | -2 < B <= -1 - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_6_5000_WERT | - | - | unsigned long | - | - | - | - | - | -3 < B <= -2 - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_7_5000_WERT | - | - | unsigned long | - | - | - | - | - | -4 < B <= -3 - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_8_5000_WERT | - | - | unsigned long | - | - | - | - | - | -5 < B <= -4  - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_9_5000_WERT | - | - | unsigned long | - | - | - | - | - | -6 < B <= -5  - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_10_5000_WERT | - | - | unsigned long | - | - | - | - | - | -7 < B <= -6 - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_11_5000_WERT | - | - | unsigned long | - | - | - | - | - | -8 < B <= -7 - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_12_5000_WERT | - | - | unsigned long | - | - | - | - | - | -9 < B <= -8  - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_13_5000_WERT | - | - | unsigned long | - | - | - | - | - | -10 < B <= -9  - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_14_5000_WERT | - | - | unsigned long | - | - | - | - | - | -11 < B <= -10 - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_15_5000_WERT | - | - | unsigned long | - | - | - | - | - | -12 < B <= -11 - 5000 |
| STAT_NV_RIGHT_ANGLE_HISTO_1_10000_WERT | - | - | unsigned long | - | - | - | - | - | 2 <= B <= 3 - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_2_10000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < B <= 2 - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_3_10000_WERT | - | - | unsigned long | - | - | - | - | - | 0 < B <= 1 - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_4_10000_WERT | - | - | unsigned long | - | - | - | - | - | -1 < B <= 0  - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_5_10000_WERT | - | - | unsigned long | - | - | - | - | - | -2 < B <= -1 - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_6_10000_WERT | - | - | unsigned long | - | - | - | - | - | -3 < B <= -2 - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_7_10000_WERT | - | - | unsigned long | - | - | - | - | - | -4 < B <= -3 - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_8_10000_WERT | - | - | unsigned long | - | - | - | - | - | -5 < B <= -4  - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_9_10000_WERT | - | - | unsigned long | - | - | - | - | - | -6 < B <= -5  - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_10_10000_WERT | - | - | unsigned long | - | - | - | - | - | -7 < B <= -6 - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_11_10000_WERT | - | - | unsigned long | - | - | - | - | - | -8 < B <= -7 - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_12_10000_WERT | - | - | unsigned long | - | - | - | - | - | -9 < B <= -8  - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_13_10000_WERT | - | - | unsigned long | - | - | - | - | - | -10 < B <= -9  - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_14_10000_WERT | - | - | unsigned long | - | - | - | - | - | -11 < B <= -10 - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_15_10000_WERT | - | - | unsigned long | - | - | - | - | - | -12 < B <= -11 - 10000 |
| STAT_NV_RIGHT_ANGLE_HISTO_1_20000_WERT | - | - | unsigned long | - | - | - | - | - | 2 <= B <= 3 - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_2_20000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < B <= 2 - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_3_20000_WERT | - | - | unsigned long | - | - | - | - | - | 0 < B <= 1 - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_4_20000_WERT | - | - | unsigned long | - | - | - | - | - | -1 < B <= 0  - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_5_20000_WERT | - | - | unsigned long | - | - | - | - | - | -2 < B <= -1 - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_6_20000_WERT | - | - | unsigned long | - | - | - | - | - | -3 < B <= -2 - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_7_20000_WERT | - | - | unsigned long | - | - | - | - | - | -4 < B <= -3 - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_8_20000_WERT | - | - | unsigned long | - | - | - | - | - | -5 < B <= -4  - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_9_20000_WERT | - | - | unsigned long | - | - | - | - | - | -6 < B <= -5  - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_10_20000_WERT | - | - | unsigned long | - | - | - | - | - | -7 < B <= -6 - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_11_20000_WERT | - | - | unsigned long | - | - | - | - | - | -8 < B <= -7 - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_12_20000_WERT | - | - | unsigned long | - | - | - | - | - | -9 < B <= -8  - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_13_20000_WERT | - | - | unsigned long | - | - | - | - | - | -10 < B <= -9  - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_14_20000_WERT | - | - | unsigned long | - | - | - | - | - | -11 < B <= -10 - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_15_20000_WERT | - | - | unsigned long | - | - | - | - | - | -12 < B <= -11 - 20000 |
| STAT_NV_RIGHT_ANGLE_HISTO_1_50000_WERT | - | - | unsigned long | - | - | - | - | - | 2 <= B <= 3 - 50000 |
| STAT_NV_RIGHT_ANGLE_HISTO_2_50000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < B <= 2 - 50000 |
| STAT_NV_RIGHT_ANGLE_HISTO_3_50000_WERT | - | - | unsigned long | - | - | - | - | - | 0 < B <= 1 - 50000 |
| STAT_NV_RIGHT_ANGLE_HISTO_4_50000_WERT | - | - | unsigned long | - | - | - | - | - | -1 < B <= 0  - 50000 |
| STAT_NV_RIGHT_ANGLE_HISTO_5_50000_WERT | - | - | unsigned long | - | - | - | - | - | -2 < B <= -1 - 50000 |
| STAT_NV_RIGHT_ANGLE_HISTO_6_50000_WERT | - | - | unsigned long | - | - | - | - | - | -3 < B <= -2 - 50000 |
| STAT_NV_RIGHT_ANGLE_HISTO_7_50000_WERT | - | - | unsigned long | - | - | - | - | - | -4 < B <= -3 - 50000 |
| STAT_NV_RIGHT_ANGLE_HISTO_8_50000_WERT | - | - | unsigned long | - | - | - | - | - | -5 < B <= -4  - 50000 |
| STAT_NV_RIGHT_ANGLE_HISTO_9_50000_WERT | - | - | unsigned long | - | - | - | - | - | -6 < B <= -5  - 50000 |
| STAT_NV_RIGHT_ANGLE_HISTO_10_50000_WERT | - | - | unsigned long | - | - | - | - | - | -7 < B <= -6 - 50000 |
| STAT_NV_RIGHT_ANGLE_HISTO_11_50000_WERT | - | - | unsigned long | - | - | - | - | - | -8 < B <= -7 - 50000 |
| STAT_NV_RIGHT_ANGLE_HISTO_12_50000_WERT | - | - | unsigned long | - | - | - | - | - | -9 < B <= -8  - 50000 |
| STAT_NV_RIGHT_ANGLE_HISTO_13_50000_WERT | - | - | unsigned long | - | - | - | - | - | -10 < B <= -9  - 50000 |
| STAT_NV_RIGHT_ANGLE_HISTO_14_50000_WERT | - | - | unsigned long | - | - | - | - | - | -11 < B <= -10 - 50000 |
| STAT_NV_RIGHT_ANGLE_HISTO_15_50000_WERT | - | - | unsigned long | - | - | - | - | - | -12 < B <= -11 - 50000 |

### RES_0X2312_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_ML_ON_HIST_1_1_WERT | - | - | unsigned long | - | - | - | - | - | 0s <= t <= 0.5s  - Driver 1 |
| STAT_NV_ML_ON_HIST_2_1_WERT | - | - | unsigned long | - | - | - | - | - | 0.5 < t <= 1  - Driver 1 |
| STAT_NV_ML_ON_HIST_3_1_WERT | - | - | unsigned long | - | - | - | - | - | 1 < t <= 1.5  - Driver 1 |
| STAT_NV_ML_ON_HIST_4_1_WERT | - | - | unsigned long | - | - | - | - | - | 1.5 < t <= 2   - Driver 1 |
| STAT_NV_ML_ON_HIST_5_1_WERT | - | - | unsigned long | - | - | - | - | - | 2 < t <= 2.5  - Driver 1 |
| STAT_NV_ML_ON_HIST_6_1_WERT | - | - | unsigned long | - | - | - | - | - | 2.5 < t <= 3  - Driver 1 |
| STAT_NV_ML_ON_HIST_7_1_WERT | - | - | unsigned long | - | - | - | - | - | 3 < t <= 3.5  - Driver 1 |
| STAT_NV_ML_ON_HIST_8_1_WERT | - | - | unsigned long | - | - | - | - | - | 3.5 < t <= 4   - Driver 1 |
| STAT_NV_ML_ON_HIST_9_1_WERT | - | - | unsigned long | - | - | - | - | - | 4 < t <= 4.5   - Driver 1 |
| STAT_NV_ML_ON_HIST_10_1_WERT | - | - | unsigned long | - | - | - | - | - | 4.5 < t <= 5  - Driver 1 |
| STAT_NV_ML_ON_HIST_11_1_WERT | - | - | unsigned long | - | - | - | - | - | 5 < t <= 5.5  - Driver 1 |
| STAT_NV_ML_ON_HIST_12_1_WERT | - | - | unsigned long | - | - | - | - | - | 5.5 < t <= 6   - Driver 1 |
| STAT_NV_ML_ON_HIST_13_1_WERT | - | - | unsigned long | - | - | - | - | - | 6. < t <= 6.5   - Driver 1 |
| STAT_NV_ML_ON_HIST_14_1_WERT | - | - | unsigned long | - | - | - | - | - | 6.5 < t <= 7  - Driver 1 |
| STAT_NV_ML_ON_HIST_15_1_WERT | - | - | unsigned long | - | - | - | - | - | 7 < t <= 7.5  - Driver 1 |
| STAT_NV_ML_ON_HIST_16_1_WERT | - | - | unsigned long | - | - | - | - | - | 7.5 < t <= 8  - Driver 1 |
| STAT_NV_ML_ON_HIST_17_1_WERT | - | - | unsigned long | - | - | - | - | - | 8 < t <= 8.5  - Driver 1 |
| STAT_NV_ML_ON_HIST_18_1_WERT | - | - | unsigned long | - | - | - | - | - | 8.5 < t <= 9  - Driver 1 |
| STAT_NV_ML_ON_HIST_19_1_WERT | - | - | unsigned long | - | - | - | - | - | 9 < t <= 9.5  - Driver 1 |
| STAT_NV_ML_ON_HIST_20_1_WERT | - | - | unsigned long | - | - | - | - | - | 9.5 < t <= 10  - Driver 1 |
| STAT_NV_ML_ON_HIST_21_1_WERT | - | - | unsigned long | - | - | - | - | - | 10 < t   - Driver 1 |
| STAT_NV_ML_ON_HIST_1_2_WERT | - | - | unsigned long | - | - | - | - | - | 0s <= t <= 0.5s  - Driver 2 |
| STAT_NV_ML_ON_HIST_2_2_WERT | - | - | unsigned long | - | - | - | - | - | 0.5 < t <= 1  - Driver 2 |
| STAT_NV_ML_ON_HIST_3_2_WERT | - | - | unsigned long | - | - | - | - | - | 1 < t <= 1.5  - Driver 2 |
| STAT_NV_ML_ON_HIST_4_2_WERT | - | - | unsigned long | - | - | - | - | - | 1.5 < t <= 2   - Driver 2 |
| STAT_NV_ML_ON_HIST_5_2_WERT | - | - | unsigned long | - | - | - | - | - | 2 < t <= 2.5  - Driver 2 |
| STAT_NV_ML_ON_HIST_6_2_WERT | - | - | unsigned long | - | - | - | - | - | 2.5 < t <= 3  - Driver 2 |
| STAT_NV_ML_ON_HIST_7_2_WERT | - | - | unsigned long | - | - | - | - | - | 3 < t <= 3.5  - Driver 2 |
| STAT_NV_ML_ON_HIST_8_2_WERT | - | - | unsigned long | - | - | - | - | - | 3.5 < t <= 4   - Driver 2 |
| STAT_NV_ML_ON_HIST_9_2_WERT | - | - | unsigned long | - | - | - | - | - | 4 < t <= 4.5   - Driver 2 |
| STAT_NV_ML_ON_HIST_10_2_WERT | - | - | unsigned long | - | - | - | - | - | 4.5 < t <= 5  - Driver 2 |
| STAT_NV_ML_ON_HIST_11_2_WERT | - | - | unsigned long | - | - | - | - | - | 5 < t <= 5.5  - Driver 2 |
| STAT_NV_ML_ON_HIST_12_2_WERT | - | - | unsigned long | - | - | - | - | - | 5.5 < t <= 6   - Driver 2 |
| STAT_NV_ML_ON_HIST_13_2_WERT | - | - | unsigned long | - | - | - | - | - | 6. < t <= 6.5   - Driver 2 |
| STAT_NV_ML_ON_HIST_14_2_WERT | - | - | unsigned long | - | - | - | - | - | 6.5 < t <= 7  - Driver 2 |
| STAT_NV_ML_ON_HIST_15_2_WERT | - | - | unsigned long | - | - | - | - | - | 7 < t <= 7.5  - Driver 2 |
| STAT_NV_ML_ON_HIST_16_2_WERT | - | - | unsigned long | - | - | - | - | - | 7.5 < t <= 8  - Driver 2 |
| STAT_NV_ML_ON_HIST_17_2_WERT | - | - | unsigned long | - | - | - | - | - | 8 < t <= 8.5  - Driver 2 |
| STAT_NV_ML_ON_HIST_18_2_WERT | - | - | unsigned long | - | - | - | - | - | 8.5 < t <= 9  - Driver 2 |
| STAT_NV_ML_ON_HIST_19_2_WERT | - | - | unsigned long | - | - | - | - | - | 9 < t <= 9.5  - Driver 2 |
| STAT_NV_ML_ON_HIST_20_2_WERT | - | - | unsigned long | - | - | - | - | - | 9.5 < t <= 10  - Driver 2 |
| STAT_NV_ML_ON_HIST_21_2_WERT | - | - | unsigned long | - | - | - | - | - | 10 < t   - Driver 2 |
| STAT_NV_ML_ON_HIST_1_3_WERT | - | - | unsigned long | - | - | - | - | - | 0s <= t <= 0.5s  - Driver 3 |
| STAT_NV_ML_ON_HIST_2_3_WERT | - | - | unsigned long | - | - | - | - | - | 0.5 < t <= 1  - Driver 3 |
| STAT_NV_ML_ON_HIST_3_3_WERT | - | - | unsigned long | - | - | - | - | - | 1 < t <= 1.5  - Driver 3 |
| STAT_NV_ML_ON_HIST_4_3_WERT | - | - | unsigned long | - | - | - | - | - | 1.5 < t <= 2   - Driver 3 |
| STAT_NV_ML_ON_HIST_5_3_WERT | - | - | unsigned long | - | - | - | - | - | 2 < t <= 2.5  - Driver 3 |
| STAT_NV_ML_ON_HIST_6_3_WERT | - | - | unsigned long | - | - | - | - | - | 2.5 < t <= 3  - Driver 3 |
| STAT_NV_ML_ON_HIST_7_3_WERT | - | - | unsigned long | - | - | - | - | - | 3 < t <= 3.5  - Driver 3 |
| STAT_NV_ML_ON_HIST_8_3_WERT | - | - | unsigned long | - | - | - | - | - | 3.5 < t <= 4   - Driver 3 |
| STAT_NV_ML_ON_HIST_9_3_WERT | - | - | unsigned long | - | - | - | - | - | 4 < t <= 4.5   - Driver 3 |
| STAT_NV_ML_ON_HIST_10_3_WERT | - | - | unsigned long | - | - | - | - | - | 4.5 < t <= 5  - Driver 3 |
| STAT_NV_ML_ON_HIST_11_3_WERT | - | - | unsigned long | - | - | - | - | - | 5 < t <= 5.5  - Driver 3 |
| STAT_NV_ML_ON_HIST_12_3_WERT | - | - | unsigned long | - | - | - | - | - | 5.5 < t <= 6   - Driver 3 |
| STAT_NV_ML_ON_HIST_13_3_WERT | - | - | unsigned long | - | - | - | - | - | 6. < t <= 6.5   - Driver 3 |
| STAT_NV_ML_ON_HIST_14_3_WERT | - | - | unsigned long | - | - | - | - | - | 6.5 < t <= 7  - Driver 3 |
| STAT_NV_ML_ON_HIST_15_3_WERT | - | - | unsigned long | - | - | - | - | - | 7 < t <= 7.5  - Driver 3 |
| STAT_NV_ML_ON_HIST_16_3_WERT | - | - | unsigned long | - | - | - | - | - | 7.5 < t <= 8  - Driver 3 |
| STAT_NV_ML_ON_HIST_17_3_WERT | - | - | unsigned long | - | - | - | - | - | 8 < t <= 8.5  - Driver 3 |
| STAT_NV_ML_ON_HIST_18_3_WERT | - | - | unsigned long | - | - | - | - | - | 8.5 < t <= 9  - Driver 3 |
| STAT_NV_ML_ON_HIST_19_3_WERT | - | - | unsigned long | - | - | - | - | - | 9 < t <= 9.5  - Driver 3 |
| STAT_NV_ML_ON_HIST_20_3_WERT | - | - | unsigned long | - | - | - | - | - | 9.5 < t <= 10  - Driver 3 |
| STAT_NV_ML_ON_HIST_21_3_WERT | - | - | unsigned long | - | - | - | - | - | 10 < t   - Driver 3 |

### RES_0X2313_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_ML_ON_HIST_HISTO_1_500_WERT | - | - | unsigned long | - | - | - | - | - | 0s <= t <= 0.5s  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_2_500_WERT | - | - | unsigned long | - | - | - | - | - | 0.5 < t <= 1  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_3_500_WERT | - | - | unsigned long | - | - | - | - | - | 1 < t <= 1.5  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_4_500_WERT | - | - | unsigned long | - | - | - | - | - | 1.5 < t <= 2   - 500 |
| STAT_NV_ML_ON_HIST_HISTO_5_500_WERT | - | - | unsigned long | - | - | - | - | - | 2 < t <= 2.5  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_6_500_WERT | - | - | unsigned long | - | - | - | - | - | 2.5 < t <= 3  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_7_500_WERT | - | - | unsigned long | - | - | - | - | - | 3 < t <= 3.5  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_8_500_WERT | - | - | unsigned long | - | - | - | - | - | 3.5 < t <= 4   - 500 |
| STAT_NV_ML_ON_HIST_HISTO_9_500_WERT | - | - | unsigned long | - | - | - | - | - | 4 < t <= 4.5   - 500 |
| STAT_NV_ML_ON_HIST_HISTO_10_500_WERT | - | - | unsigned long | - | - | - | - | - | 4.5 < t <= 5  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_11_500_WERT | - | - | unsigned long | - | - | - | - | - | 5 < t <= 5.5  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_12_500_WERT | - | - | unsigned long | - | - | - | - | - | 5.5 < t <= 6   - 500 |
| STAT_NV_ML_ON_HIST_HISTO_13_500_WERT | - | - | unsigned long | - | - | - | - | - | 6. < t <= 6.5   - 500 |
| STAT_NV_ML_ON_HIST_HISTO_14_500_WERT | - | - | unsigned long | - | - | - | - | - | 6.5 < t <= 7  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_15_500_WERT | - | - | unsigned long | - | - | - | - | - | 7 < t <= 7.5  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_16_500_WERT | - | - | unsigned long | - | - | - | - | - | 7.5 < t <= 8  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_17_500_WERT | - | - | unsigned long | - | - | - | - | - | 8 < t <= 8.5  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_18_500_WERT | - | - | unsigned long | - | - | - | - | - | 8.5 < t <= 9  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_19_500_WERT | - | - | unsigned long | - | - | - | - | - | 9 < t <= 9.5  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_20_500_WERT | - | - | unsigned long | - | - | - | - | - | 9.5 < t <= 10  - 500 |
| STAT_NV_ML_ON_HIST_HISTO_21_500_WERT | - | - | unsigned long | - | - | - | - | - | 10 < t   - 500 |
| STAT_NV_ML_ON_HIST_HISTO_1_1000_WERT | - | - | unsigned long | - | - | - | - | - | 0s <= t <= 0.5s  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_2_1000_WERT | - | - | unsigned long | - | - | - | - | - | 0.5 < t <= 1  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_3_1000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < t <= 1.5  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_4_1000_WERT | - | - | unsigned long | - | - | - | - | - | 1.5 < t <= 2   - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_5_1000_WERT | - | - | unsigned long | - | - | - | - | - | 2 < t <= 2.5  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_6_1000_WERT | - | - | unsigned long | - | - | - | - | - | 2.5 < t <= 3  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_7_1000_WERT | - | - | unsigned long | - | - | - | - | - | 3 < t <= 3.5  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_8_1000_WERT | - | - | unsigned long | - | - | - | - | - | 3.5 < t <= 4   - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_9_1000_WERT | - | - | unsigned long | - | - | - | - | - | 4 < t <= 4.5   - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_10_1000_WERT | - | - | unsigned long | - | - | - | - | - | 4.5 < t <= 5  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_11_1000_WERT | - | - | unsigned long | - | - | - | - | - | 5 < t <= 5.5  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_12_1000_WERT | - | - | unsigned long | - | - | - | - | - | 5.5 < t <= 6   - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_13_1000_WERT | - | - | unsigned long | - | - | - | - | - | 6. < t <= 6.5   - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_14_1000_WERT | - | - | unsigned long | - | - | - | - | - | 6.5 < t <= 7  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_15_1000_WERT | - | - | unsigned long | - | - | - | - | - | 7 < t <= 7.5  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_16_1000_WERT | - | - | unsigned long | - | - | - | - | - | 7.5 < t <= 8  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_17_1000_WERT | - | - | unsigned long | - | - | - | - | - | 8 < t <= 8.5  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_18_1000_WERT | - | - | unsigned long | - | - | - | - | - | 8.5 < t <= 9  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_19_1000_WERT | - | - | unsigned long | - | - | - | - | - | 9 < t <= 9.5  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_20_1000_WERT | - | - | unsigned long | - | - | - | - | - | 9.5 < t <= 10  - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_21_1000_WERT | - | - | unsigned long | - | - | - | - | - | 10 < t   - 1000 |
| STAT_NV_ML_ON_HIST_HISTO_1_2000_WERT | - | - | unsigned long | - | - | - | - | - | 0s <= t <= 0.5s  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_2_2000_WERT | - | - | unsigned long | - | - | - | - | - | 0.5 < t <= 1  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_3_2000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < t <= 1.5  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_4_2000_WERT | - | - | unsigned long | - | - | - | - | - | 1.5 < t <= 2   - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_5_2000_WERT | - | - | unsigned long | - | - | - | - | - | 2 < t <= 2.5  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_6_2000_WERT | - | - | unsigned long | - | - | - | - | - | 2.5 < t <= 3  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_7_2000_WERT | - | - | unsigned long | - | - | - | - | - | 3 < t <= 3.5  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_8_2000_WERT | - | - | unsigned long | - | - | - | - | - | 3.5 < t <= 4   - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_9_2000_WERT | - | - | unsigned long | - | - | - | - | - | 4 < t <= 4.5   - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_10_2000_WERT | - | - | unsigned long | - | - | - | - | - | 4.5 < t <= 5  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_11_2000_WERT | - | - | unsigned long | - | - | - | - | - | 5 < t <= 5.5  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_12_2000_WERT | - | - | unsigned long | - | - | - | - | - | 5.5 < t <= 6   - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_13_2000_WERT | - | - | unsigned long | - | - | - | - | - | 6. < t <= 6.5   - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_14_2000_WERT | - | - | unsigned long | - | - | - | - | - | 6.5 < t <= 7  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_15_2000_WERT | - | - | unsigned long | - | - | - | - | - | 7 < t <= 7.5  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_16_2000_WERT | - | - | unsigned long | - | - | - | - | - | 7.5 < t <= 8  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_17_2000_WERT | - | - | unsigned long | - | - | - | - | - | 8 < t <= 8.5  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_18_2000_WERT | - | - | unsigned long | - | - | - | - | - | 8.5 < t <= 9  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_19_2000_WERT | - | - | unsigned long | - | - | - | - | - | 9 < t <= 9.5  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_20_2000_WERT | - | - | unsigned long | - | - | - | - | - | 9.5 < t <= 10  - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_21_2000_WERT | - | - | unsigned long | - | - | - | - | - | 10 < t   - 2000 |
| STAT_NV_ML_ON_HIST_HISTO_1_5000_WERT | - | - | unsigned long | - | - | - | - | - | 0s <= t <= 0.5s  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_2_5000_WERT | - | - | unsigned long | - | - | - | - | - | 0.5 < t <= 1  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_3_5000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < t <= 1.5  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_4_5000_WERT | - | - | unsigned long | - | - | - | - | - | 1.5 < t <= 2   - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_5_5000_WERT | - | - | unsigned long | - | - | - | - | - | 2 < t <= 2.5  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_6_5000_WERT | - | - | unsigned long | - | - | - | - | - | 2.5 < t <= 3  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_7_5000_WERT | - | - | unsigned long | - | - | - | - | - | 3 < t <= 3.5  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_8_5000_WERT | - | - | unsigned long | - | - | - | - | - | 3.5 < t <= 4   - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_9_5000_WERT | - | - | unsigned long | - | - | - | - | - | 4 < t <= 4.5   - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_10_5000_WERT | - | - | unsigned long | - | - | - | - | - | 4.5 < t <= 5  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_11_5000_WERT | - | - | unsigned long | - | - | - | - | - | 5 < t <= 5.5  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_12_5000_WERT | - | - | unsigned long | - | - | - | - | - | 5.5 < t <= 6   - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_13_5000_WERT | - | - | unsigned long | - | - | - | - | - | 6. < t <= 6.5   - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_14_5000_WERT | - | - | unsigned long | - | - | - | - | - | 6.5 < t <= 7  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_15_5000_WERT | - | - | unsigned long | - | - | - | - | - | 7 < t <= 7.5  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_16_5000_WERT | - | - | unsigned long | - | - | - | - | - | 7.5 < t <= 8  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_17_5000_WERT | - | - | unsigned long | - | - | - | - | - | 8 < t <= 8.5  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_18_5000_WERT | - | - | unsigned long | - | - | - | - | - | 8.5 < t <= 9  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_19_5000_WERT | - | - | unsigned long | - | - | - | - | - | 9 < t <= 9.5  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_20_5000_WERT | - | - | unsigned long | - | - | - | - | - | 9.5 < t <= 10  - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_21_5000_WERT | - | - | unsigned long | - | - | - | - | - | 10 < t   - 5000 |
| STAT_NV_ML_ON_HIST_HISTO_1_10000_WERT | - | - | unsigned long | - | - | - | - | - | 0s <= t <= 0.5s  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_2_10000_WERT | - | - | unsigned long | - | - | - | - | - | 0.5 < t <= 1  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_3_10000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < t <= 1.5  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_4_10000_WERT | - | - | unsigned long | - | - | - | - | - | 1.5 < t <= 2   - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_5_10000_WERT | - | - | unsigned long | - | - | - | - | - | 2 < t <= 2.5  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_6_10000_WERT | - | - | unsigned long | - | - | - | - | - | 2.5 < t <= 3  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_7_10000_WERT | - | - | unsigned long | - | - | - | - | - | 3 < t <= 3.5  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_8_10000_WERT | - | - | unsigned long | - | - | - | - | - | 3.5 < t <= 4   - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_9_10000_WERT | - | - | unsigned long | - | - | - | - | - | 4 < t <= 4.5   - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_10_10000_WERT | - | - | unsigned long | - | - | - | - | - | 4.5 < t <= 5  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_11_10000_WERT | - | - | unsigned long | - | - | - | - | - | 5 < t <= 5.5  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_12_10000_WERT | - | - | unsigned long | - | - | - | - | - | 5.5 < t <= 6   - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_13_10000_WERT | - | - | unsigned long | - | - | - | - | - | 6. < t <= 6.5   - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_14_10000_WERT | - | - | unsigned long | - | - | - | - | - | 6.5 < t <= 7  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_15_10000_WERT | - | - | unsigned long | - | - | - | - | - | 7 < t <= 7.5  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_16_10000_WERT | - | - | unsigned long | - | - | - | - | - | 7.5 < t <= 8  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_17_10000_WERT | - | - | unsigned long | - | - | - | - | - | 8 < t <= 8.5  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_18_10000_WERT | - | - | unsigned long | - | - | - | - | - | 8.5 < t <= 9  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_19_10000_WERT | - | - | unsigned long | - | - | - | - | - | 9 < t <= 9.5  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_20_10000_WERT | - | - | unsigned long | - | - | - | - | - | 9.5 < t <= 10  - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_21_10000_WERT | - | - | unsigned long | - | - | - | - | - | 10 < t   - 10000 |
| STAT_NV_ML_ON_HIST_HISTO_1_20000_WERT | - | - | unsigned long | - | - | - | - | - | 0s <= t <= 0.5s  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_2_20000_WERT | - | - | unsigned long | - | - | - | - | - | 0.5 < t <= 1  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_3_20000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < t <= 1.5  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_4_20000_WERT | - | - | unsigned long | - | - | - | - | - | 1.5 < t <= 2   - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_5_20000_WERT | - | - | unsigned long | - | - | - | - | - | 2 < t <= 2.5  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_6_20000_WERT | - | - | unsigned long | - | - | - | - | - | 2.5 < t <= 3  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_7_20000_WERT | - | - | unsigned long | - | - | - | - | - | 3 < t <= 3.5  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_8_20000_WERT | - | - | unsigned long | - | - | - | - | - | 3.5 < t <= 4   - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_9_20000_WERT | - | - | unsigned long | - | - | - | - | - | 4 < t <= 4.5   - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_10_20000_WERT | - | - | unsigned long | - | - | - | - | - | 4.5 < t <= 5  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_11_20000_WERT | - | - | unsigned long | - | - | - | - | - | 5 < t <= 5.5  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_12_20000_WERT | - | - | unsigned long | - | - | - | - | - | 5.5 < t <= 6   - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_13_20000_WERT | - | - | unsigned long | - | - | - | - | - | 6. < t <= 6.5   - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_14_20000_WERT | - | - | unsigned long | - | - | - | - | - | 6.5 < t <= 7  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_15_20000_WERT | - | - | unsigned long | - | - | - | - | - | 7 < t <= 7.5  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_16_20000_WERT | - | - | unsigned long | - | - | - | - | - | 7.5 < t <= 8  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_17_20000_WERT | - | - | unsigned long | - | - | - | - | - | 8 < t <= 8.5  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_18_20000_WERT | - | - | unsigned long | - | - | - | - | - | 8.5 < t <= 9  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_19_20000_WERT | - | - | unsigned long | - | - | - | - | - | 9 < t <= 9.5  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_20_20000_WERT | - | - | unsigned long | - | - | - | - | - | 9.5 < t <= 10  - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_21_20000_WERT | - | - | unsigned long | - | - | - | - | - | 10 < t   - 20000 |
| STAT_NV_ML_ON_HIST_HISTO_1_50000_WERT | - | - | unsigned long | - | - | - | - | - | 0s <= t <= 0.5s  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_2_50000_WERT | - | - | unsigned long | - | - | - | - | - | 0.5 < t <= 1  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_3_50000_WERT | - | - | unsigned long | - | - | - | - | - | 1 < t <= 1.5  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_4_50000_WERT | - | - | unsigned long | - | - | - | - | - | 1.5 < t <= 2   - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_5_50000_WERT | - | - | unsigned long | - | - | - | - | - | 2 < t <= 2.5  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_6_50000_WERT | - | - | unsigned long | - | - | - | - | - | 2.5 < t <= 3  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_7_50000_WERT | - | - | unsigned long | - | - | - | - | - | 3 < t <= 3.5  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_8_50000_WERT | - | - | unsigned long | - | - | - | - | - | 3.5 < t <= 4   - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_9_50000_WERT | - | - | unsigned long | - | - | - | - | - | 4 < t <= 4.5   - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_10_50000_WERT | - | - | unsigned long | - | - | - | - | - | 4.5 < t <= 5  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_11_50000_WERT | - | - | unsigned long | - | - | - | - | - | 5 < t <= 5.5  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_12_50000_WERT | - | - | unsigned long | - | - | - | - | - | 5.5 < t <= 6   - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_13_50000_WERT | - | - | unsigned long | - | - | - | - | - | 6. < t <= 6.5   - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_14_50000_WERT | - | - | unsigned long | - | - | - | - | - | 6.5 < t <= 7  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_15_50000_WERT | - | - | unsigned long | - | - | - | - | - | 7 < t <= 7.5  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_16_50000_WERT | - | - | unsigned long | - | - | - | - | - | 7.5 < t <= 8  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_17_50000_WERT | - | - | unsigned long | - | - | - | - | - | 8 < t <= 8.5  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_18_50000_WERT | - | - | unsigned long | - | - | - | - | - | 8.5 < t <= 9  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_19_50000_WERT | - | - | unsigned long | - | - | - | - | - | 9 < t <= 9.5  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_20_50000_WERT | - | - | unsigned long | - | - | - | - | - | 9.5 < t <= 10  - 50000 |
| STAT_NV_ML_ON_HIST_HISTO_21_50000_WERT | - | - | unsigned long | - | - | - | - | - | 10 < t   - 50000 |

### RES_0X2314_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_DRIVER_REACTION_1_1_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a pedestrian warning   - Driver 1 |
| STAT_NV_DRIVER_REACTION_2_1_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after a pedestrian warning   - Driver 1 |
| STAT_NV_DRIVER_REACTION_3_1_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after a pedestrian warning  - Driver 1 |
| STAT_NV_DRIVER_REACTION_4_1_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after an acute pedestrian warning   - Driver 1 |
| STAT_NV_DRIVER_REACTION_5_1_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an acute pedestrian warning   - Driver 1 |
| STAT_NV_DRIVER_REACTION_6_1_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an acute pedestrian warning  - Driver 1 |
| STAT_NV_DRIVER_REACTION_7_1_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a animal warning   - Driver 1 |
| STAT_NV_DRIVER_REACTION_8_1_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an animal warning   - Driver 1 |
| STAT_NV_DRIVER_REACTION_9_1_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an animal warning  - Driver 1 |
| STAT_NV_DRIVER_REACTION_10_1_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver cancels the marking light marking.  - Driver 1 |
| STAT_NV_DRIVER_REACTION_1_2_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a pedestrian warning   - Driver 2 |
| STAT_NV_DRIVER_REACTION_2_2_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after a pedestrian warning   - Driver 2 |
| STAT_NV_DRIVER_REACTION_3_2_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after a pedestrian warning  - Driver 2 |
| STAT_NV_DRIVER_REACTION_4_2_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after an acute pedestrian warning   - Driver 2 |
| STAT_NV_DRIVER_REACTION_5_2_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an acute pedestrian warning   - Driver 2 |
| STAT_NV_DRIVER_REACTION_6_2_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an acute pedestrian warning  - Driver 2 |
| STAT_NV_DRIVER_REACTION_7_2_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a animal warning   - Driver 2 |
| STAT_NV_DRIVER_REACTION_8_2_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an animal warning   - Driver 2 |
| STAT_NV_DRIVER_REACTION_9_2_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an animal warning  - Driver 2 |
| STAT_NV_DRIVER_REACTION_10_2_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver cancels the marking light marking.  - Driver 2 |
| STAT_NV_DRIVER_REACTION_1_3_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a pedestrian warning   - Driver 3 |
| STAT_NV_DRIVER_REACTION_2_3_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after a pedestrian warning   - Driver 3 |
| STAT_NV_DRIVER_REACTION_3_3_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after a pedestrian warning  - Driver 3 |
| STAT_NV_DRIVER_REACTION_4_3_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after an acute pedestrian warning   - Driver 3 |
| STAT_NV_DRIVER_REACTION_5_3_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an acute pedestrian warning   - Driver 3 |
| STAT_NV_DRIVER_REACTION_6_3_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an acute pedestrian warning  - Driver 3 |
| STAT_NV_DRIVER_REACTION_7_3_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a animal warning   - Driver 3 |
| STAT_NV_DRIVER_REACTION_8_3_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an animal warning   - Driver 3 |
| STAT_NV_DRIVER_REACTION_9_3_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an animal warning  - Driver 3 |
| STAT_NV_DRIVER_REACTION_10_3_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver cancels the marking light marking.  - Driver 3 |

### RES_0X2315_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_DRIVER_REACTION_HISTO_1_500_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a pedestrian warning   - 500 |
| STAT_NV_DRIVER_REACTION_HISTO_2_500_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after a pedestrian warning   - 500 |
| STAT_NV_DRIVER_REACTION_HISTO_3_500_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after a pedestrian warning  - 500 |
| STAT_NV_DRIVER_REACTION_HISTO_4_500_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after an acute pedestrian warning   - 500 |
| STAT_NV_DRIVER_REACTION_HISTO_5_500_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an acute pedestrian warning   - 500 |
| STAT_NV_DRIVER_REACTION_HISTO_6_500_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an acute pedestrian warning  - 500 |
| STAT_NV_DRIVER_REACTION_HISTO_7_500_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a animal warning   - 500 |
| STAT_NV_DRIVER_REACTION_HISTO_8_500_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an animal warning   - 500 |
| STAT_NV_DRIVER_REACTION_HISTO_9_500_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an animal warning  - 500 |
| STAT_NV_DRIVER_REACTION_HISTO_10_500_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver cancels the marking light marking.  - 500 |
| STAT_NV_DRIVER_REACTION_HISTO_1_1000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a pedestrian warning   - 1000 |
| STAT_NV_DRIVER_REACTION_HISTO_2_1000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after a pedestrian warning   - 1000 |
| STAT_NV_DRIVER_REACTION_HISTO_3_1000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after a pedestrian warning  - 1000 |
| STAT_NV_DRIVER_REACTION_HISTO_4_1000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after an acute pedestrian warning   - 1000 |
| STAT_NV_DRIVER_REACTION_HISTO_5_1000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an acute pedestrian warning   - 1000 |
| STAT_NV_DRIVER_REACTION_HISTO_6_1000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an acute pedestrian warning  - 1000 |
| STAT_NV_DRIVER_REACTION_HISTO_7_1000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a animal warning   - 1000 |
| STAT_NV_DRIVER_REACTION_HISTO_8_1000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an animal warning   - 1000 |
| STAT_NV_DRIVER_REACTION_HISTO_9_1000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an animal warning  - 1000 |
| STAT_NV_DRIVER_REACTION_HISTO_10_1000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver cancels the marking light marking.  - 1000 |
| STAT_NV_DRIVER_REACTION_HISTO_1_2000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a pedestrian warning   - 2000 |
| STAT_NV_DRIVER_REACTION_HISTO_2_2000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after a pedestrian warning   - 2000 |
| STAT_NV_DRIVER_REACTION_HISTO_3_2000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after a pedestrian warning  - 2000 |
| STAT_NV_DRIVER_REACTION_HISTO_4_2000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after an acute pedestrian warning   - 2000 |
| STAT_NV_DRIVER_REACTION_HISTO_5_2000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an acute pedestrian warning   - 2000 |
| STAT_NV_DRIVER_REACTION_HISTO_6_2000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an acute pedestrian warning  - 2000 |
| STAT_NV_DRIVER_REACTION_HISTO_7_2000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a animal warning   - 2000 |
| STAT_NV_DRIVER_REACTION_HISTO_8_2000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an animal warning   - 2000 |
| STAT_NV_DRIVER_REACTION_HISTO_9_2000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an animal warning  - 2000 |
| STAT_NV_DRIVER_REACTION_HISTO_10_2000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver cancels the marking light marking.  - 2000 |
| STAT_NV_DRIVER_REACTION_HISTO_1_5000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a pedestrian warning   - 5000 |
| STAT_NV_DRIVER_REACTION_HISTO_2_5000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after a pedestrian warning   - 5000 |
| STAT_NV_DRIVER_REACTION_HISTO_3_5000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after a pedestrian warning  - 5000 |
| STAT_NV_DRIVER_REACTION_HISTO_4_5000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after an acute pedestrian warning   - 5000 |
| STAT_NV_DRIVER_REACTION_HISTO_5_5000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an acute pedestrian warning   - 5000 |
| STAT_NV_DRIVER_REACTION_HISTO_6_5000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an acute pedestrian warning  - 5000 |
| STAT_NV_DRIVER_REACTION_HISTO_7_5000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a animal warning   - 5000 |
| STAT_NV_DRIVER_REACTION_HISTO_8_5000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an animal warning   - 5000 |
| STAT_NV_DRIVER_REACTION_HISTO_9_5000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an animal warning  - 5000 |
| STAT_NV_DRIVER_REACTION_HISTO_10_5000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver cancels the marking light marking.  - 5000 |
| STAT_NV_DRIVER_REACTION_HISTO_1_10000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a pedestrian warning   - 10000 |
| STAT_NV_DRIVER_REACTION_HISTO_2_10000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after a pedestrian warning   - 10000 |
| STAT_NV_DRIVER_REACTION_HISTO_3_10000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after a pedestrian warning  - 10000 |
| STAT_NV_DRIVER_REACTION_HISTO_4_10000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after an acute pedestrian warning   - 10000 |
| STAT_NV_DRIVER_REACTION_HISTO_5_10000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an acute pedestrian warning   - 10000 |
| STAT_NV_DRIVER_REACTION_HISTO_6_10000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an acute pedestrian warning  - 10000 |
| STAT_NV_DRIVER_REACTION_HISTO_7_10000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a animal warning   - 10000 |
| STAT_NV_DRIVER_REACTION_HISTO_8_10000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an animal warning   - 10000 |
| STAT_NV_DRIVER_REACTION_HISTO_9_10000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an animal warning  - 10000 |
| STAT_NV_DRIVER_REACTION_HISTO_10_10000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver cancels the marking light marking.  - 10000 |
| STAT_NV_DRIVER_REACTION_HISTO_1_20000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a pedestrian warning   - 20000 |
| STAT_NV_DRIVER_REACTION_HISTO_2_20000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after a pedestrian warning   - 20000 |
| STAT_NV_DRIVER_REACTION_HISTO_3_20000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after a pedestrian warning  - 20000 |
| STAT_NV_DRIVER_REACTION_HISTO_4_20000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after an acute pedestrian warning   - 20000 |
| STAT_NV_DRIVER_REACTION_HISTO_5_20000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an acute pedestrian warning   - 20000 |
| STAT_NV_DRIVER_REACTION_HISTO_6_20000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an acute pedestrian warning  - 20000 |
| STAT_NV_DRIVER_REACTION_HISTO_7_20000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a animal warning   - 20000 |
| STAT_NV_DRIVER_REACTION_HISTO_8_20000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an animal warning   - 20000 |
| STAT_NV_DRIVER_REACTION_HISTO_9_20000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an animal warning  - 20000 |
| STAT_NV_DRIVER_REACTION_HISTO_10_20000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver cancels the marking light marking.  - 20000 |
| STAT_NV_DRIVER_REACTION_HISTO_1_50000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a pedestrian warning   - 50000 |
| STAT_NV_DRIVER_REACTION_HISTO_2_50000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after a pedestrian warning   - 50000 |
| STAT_NV_DRIVER_REACTION_HISTO_3_50000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after a pedestrian warning  - 50000 |
| STAT_NV_DRIVER_REACTION_HISTO_4_50000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after an acute pedestrian warning   - 50000 |
| STAT_NV_DRIVER_REACTION_HISTO_5_50000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an acute pedestrian warning   - 50000 |
| STAT_NV_DRIVER_REACTION_HISTO_6_50000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an acute pedestrian warning  - 50000 |
| STAT_NV_DRIVER_REACTION_HISTO_7_50000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver brakes within a reaction time after a animal warning   - 50000 |
| STAT_NV_DRIVER_REACTION_HISTO_8_50000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver steers away within a reaction time after an animal warning   - 50000 |
| STAT_NV_DRIVER_REACTION_HISTO_9_50000_WERT | - | - | unsigned int | - | - | - | - | - | Number of times the driver switches off pedestrian detection within a long reaction time after an animal warning  - 50000 |
| STAT_NV_DRIVER_REACTION_HISTO_10_50000_WERT | - | - | unsigned long | - | - | - | - | - | Number of times the driver cancels the marking light marking.  - 50000 |

### RES_0X2316_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_HIST_AMB_TEMP_1_1_WERT | s | - | unsigned long | - | - | - | - | - | -inf <= T <= -40  - Driver 1 |
| STAT_NV_HIST_AMB_TEMP_2_1_WERT | s | - | unsigned long | - | - | - | - | - | -40 < T <= -30   - Driver 1 |
| STAT_NV_HIST_AMB_TEMP_3_1_WERT | s | - | unsigned long | - | - | - | - | - | -30 < T <= -20   - Driver 1 |
| STAT_NV_HIST_AMB_TEMP_4_1_WERT | s | - | unsigned long | - | - | - | - | - | -20 < T <= -10   - Driver 1 |
| STAT_NV_HIST_AMB_TEMP_5_1_WERT | s | - | unsigned long | - | - | - | - | - | -10 < T <= 0  - Driver 1 |
| STAT_NV_HIST_AMB_TEMP_6_1_WERT | s | - | unsigned long | - | - | - | - | - | 0 < T <= 10   - Driver 1 |
| STAT_NV_HIST_AMB_TEMP_7_1_WERT | s | - | unsigned long | - | - | - | - | - | 10 < T <= 20   - Driver 1 |
| STAT_NV_HIST_AMB_TEMP_8_1_WERT | s | - | unsigned long | - | - | - | - | - | 20 < T <= 30   - Driver 1 |
| STAT_NV_HIST_AMB_TEMP_9_1_WERT | s | - | unsigned long | - | - | - | - | - | 30 < T <= 40   - Driver 1 |
| STAT_NV_HIST_AMB_TEMP_10_1_WERT | s | - | unsigned long | - | - | - | - | - | 40 < B <= 50   - Driver 1 |
| STAT_NV_HIST_AMB_TEMP_11_1_WERT | s | - | unsigned long | - | - | - | - | - | 50 < B <= 60   - Driver 1 |
| STAT_NV_HIST_AMB_TEMP_12_1_WERT | s | - | unsigned long | - | - | - | - | - | 60 < B <= 70   - Driver 1 |
| STAT_NV_HIST_AMB_TEMP_13_1_WERT | s | - | unsigned long | - | - | - | - | - | 70 < B <= +inf   - Driver 1 |
| STAT_NV_HIST_AMB_TEMP_1_2_WERT | s | - | unsigned long | - | - | - | - | - | -inf <= T <= -40  - Driver 2 |
| STAT_NV_HIST_AMB_TEMP_2_2_WERT | s | - | unsigned long | - | - | - | - | - | -40 < T <= -30   - Driver 2 |
| STAT_NV_HIST_AMB_TEMP_3_2_WERT | s | - | unsigned long | - | - | - | - | - | -30 < T <= -20   - Driver 2 |
| STAT_NV_HIST_AMB_TEMP_4_2_WERT | s | - | unsigned long | - | - | - | - | - | -20 < T <= -10   - Driver 2 |
| STAT_NV_HIST_AMB_TEMP_5_2_WERT | s | - | unsigned long | - | - | - | - | - | -10 < T <= 0  - Driver 2 |
| STAT_NV_HIST_AMB_TEMP_6_2_WERT | s | - | unsigned long | - | - | - | - | - | 0 < T <= 10   - Driver 2 |
| STAT_NV_HIST_AMB_TEMP_7_2_WERT | s | - | unsigned long | - | - | - | - | - | 10 < T <= 20   - Driver 2 |
| STAT_NV_HIST_AMB_TEMP_8_2_WERT | s | - | unsigned long | - | - | - | - | - | 20 < T <= 30   - Driver 2 |
| STAT_NV_HIST_AMB_TEMP_9_2_WERT | s | - | unsigned long | - | - | - | - | - | 30 < T <= 40   - Driver 2 |
| STAT_NV_HIST_AMB_TEMP_10_2_WERT | s | - | unsigned long | - | - | - | - | - | 40 < B <= 50   - Driver 2 |
| STAT_NV_HIST_AMB_TEMP_11_2_WERT | s | - | unsigned long | - | - | - | - | - | 50 < B <= 60   - Driver 2 |
| STAT_NV_HIST_AMB_TEMP_12_2_WERT | s | - | unsigned long | - | - | - | - | - | 60 < B <= 70   - Driver 2 |
| STAT_NV_HIST_AMB_TEMP_13_2_WERT | s | - | unsigned long | - | - | - | - | - | 70 < B <= +inf   - Driver 2 |
| STAT_NV_HIST_AMB_TEMP_1_3_WERT | s | - | unsigned long | - | - | - | - | - | -inf <= T <= -40  - Driver 3 |
| STAT_NV_HIST_AMB_TEMP_2_3_WERT | s | - | unsigned long | - | - | - | - | - | -40 < T <= -30   - Driver 3 |
| STAT_NV_HIST_AMB_TEMP_3_3_WERT | s | - | unsigned long | - | - | - | - | - | -30 < T <= -20   - Driver 3 |
| STAT_NV_HIST_AMB_TEMP_4_3_WERT | s | - | unsigned long | - | - | - | - | - | -20 < T <= -10   - Driver 3 |
| STAT_NV_HIST_AMB_TEMP_5_3_WERT | s | - | unsigned long | - | - | - | - | - | -10 < T <= 0  - Driver 3 |
| STAT_NV_HIST_AMB_TEMP_6_3_WERT | s | - | unsigned long | - | - | - | - | - | 0 < T <= 10   - Driver 3 |
| STAT_NV_HIST_AMB_TEMP_7_3_WERT | s | - | unsigned long | - | - | - | - | - | 10 < T <= 20   - Driver 3 |
| STAT_NV_HIST_AMB_TEMP_8_3_WERT | s | - | unsigned long | - | - | - | - | - | 20 < T <= 30   - Driver 3 |
| STAT_NV_HIST_AMB_TEMP_9_3_WERT | s | - | unsigned long | - | - | - | - | - | 30 < T <= 40   - Driver 3 |
| STAT_NV_HIST_AMB_TEMP_10_3_WERT | s | - | unsigned long | - | - | - | - | - | 40 < B <= 50   - Driver 3 |
| STAT_NV_HIST_AMB_TEMP_11_3_WERT | s | - | unsigned long | - | - | - | - | - | 50 < B <= 60   - Driver 3 |
| STAT_NV_HIST_AMB_TEMP_12_3_WERT | s | - | unsigned long | - | - | - | - | - | 60 < B <= 70   - Driver 3 |
| STAT_NV_HIST_AMB_TEMP_13_3_WERT | s | - | unsigned long | - | - | - | - | - | 70 < B <= +inf   - Driver 3 |

### RES_0X2317_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_HIST_AMB_TEMP_HISTO_1_500_WERT | s | - | unsigned long | - | - | - | - | - | -inf <= T <= -40  - 500 |
| STAT_NV_HIST_AMB_TEMP_HISTO_2_500_WERT | s | - | unsigned long | - | - | - | - | - | -40 < T <= -30   - 500 |
| STAT_NV_HIST_AMB_TEMP_HISTO_3_500_WERT | s | - | unsigned long | - | - | - | - | - | -30 < T <= -20   - 500 |
| STAT_NV_HIST_AMB_TEMP_HISTO_4_500_WERT | s | - | unsigned long | - | - | - | - | - | -20 < T <= -10   - 500 |
| STAT_NV_HIST_AMB_TEMP_HISTO_5_500_WERT | s | - | unsigned long | - | - | - | - | - | -10 < T <= 0  - 500 |
| STAT_NV_HIST_AMB_TEMP_HISTO_6_500_WERT | s | - | unsigned long | - | - | - | - | - | 0 < T <= 10   - 500 |
| STAT_NV_HIST_AMB_TEMP_HISTO_7_500_WERT | s | - | unsigned long | - | - | - | - | - | 10 < T <= 20   - 500 |
| STAT_NV_HIST_AMB_TEMP_HISTO_8_500_WERT | s | - | unsigned long | - | - | - | - | - | 20 < T <= 30   - 500 |
| STAT_NV_HIST_AMB_TEMP_HISTO_9_500_WERT | s | - | unsigned long | - | - | - | - | - | 30 < T <= 40   - 500 |
| STAT_NV_HIST_AMB_TEMP_HISTO_10_500_WERT | s | - | unsigned long | - | - | - | - | - | 40 < B <= 50   - 500 |
| STAT_NV_HIST_AMB_TEMP_HISTO_11_500_WERT | s | - | unsigned long | - | - | - | - | - | 50 < B <= 60   - 500 |
| STAT_NV_HIST_AMB_TEMP_HISTO_12_500_WERT | s | - | unsigned long | - | - | - | - | - | 60 < B <= 70   - 500 |
| STAT_NV_HIST_AMB_TEMP_HISTO_13_500_WERT | s | - | unsigned long | - | - | - | - | - | 70 < B <= +inf   - 500 |
| STAT_NV_HIST_AMB_TEMP_HISTO_1_1000_WERT | s | - | unsigned long | - | - | - | - | - | -inf <= T <= -40  - 1000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_2_1000_WERT | s | - | unsigned long | - | - | - | - | - | -40 < T <= -30   - 1000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_3_1000_WERT | s | - | unsigned long | - | - | - | - | - | -30 < T <= -20   - 1000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_4_1000_WERT | s | - | unsigned long | - | - | - | - | - | -20 < T <= -10   - 1000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_5_1000_WERT | s | - | unsigned long | - | - | - | - | - | -10 < T <= 0  - 1000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_6_1000_WERT | s | - | unsigned long | - | - | - | - | - | 0 < T <= 10   - 1000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_7_1000_WERT | s | - | unsigned long | - | - | - | - | - | 10 < T <= 20   - 1000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_8_1000_WERT | s | - | unsigned long | - | - | - | - | - | 20 < T <= 30   - 1000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_9_1000_WERT | s | - | unsigned long | - | - | - | - | - | 30 < T <= 40   - 1000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_10_1000_WERT | s | - | unsigned long | - | - | - | - | - | 40 < B <= 50   - 1000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_11_1000_WERT | s | - | unsigned long | - | - | - | - | - | 50 < B <= 60   - 1000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_12_1000_WERT | s | - | unsigned long | - | - | - | - | - | 60 < B <= 70   - 1000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_13_1000_WERT | s | - | unsigned long | - | - | - | - | - | 70 < B <= +inf   - 1000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_1_2000_WERT | s | - | unsigned long | - | - | - | - | - | -inf <= T <= -40  - 2000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_2_2000_WERT | s | - | unsigned long | - | - | - | - | - | -40 < T <= -30   - 2000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_3_2000_WERT | s | - | unsigned long | - | - | - | - | - | -30 < T <= -20   - 2000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_4_2000_WERT | s | - | unsigned long | - | - | - | - | - | -20 < T <= -10   - 2000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_5_2000_WERT | s | - | unsigned long | - | - | - | - | - | -10 < T <= 0  - 2000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_6_2000_WERT | s | - | unsigned long | - | - | - | - | - | 0 < T <= 10   - 2000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_7_2000_WERT | s | - | unsigned long | - | - | - | - | - | 10 < T <= 20   - 2000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_8_2000_WERT | s | - | unsigned long | - | - | - | - | - | 20 < T <= 30   - 2000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_9_2000_WERT | s | - | unsigned long | - | - | - | - | - | 30 < T <= 40   - 2000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_10_2000_WERT | s | - | unsigned long | - | - | - | - | - | 40 < B <= 50   - 2000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_11_2000_WERT | s | - | unsigned long | - | - | - | - | - | 50 < B <= 60   - 2000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_12_2000_WERT | s | - | unsigned long | - | - | - | - | - | 60 < B <= 70   - 2000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_13_2000_WERT | s | - | unsigned long | - | - | - | - | - | 70 < B <= +inf   - 2000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_1_5000_WERT | s | - | unsigned long | - | - | - | - | - | -inf <= T <= -40  - 5000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_2_5000_WERT | s | - | unsigned long | - | - | - | - | - | -40 < T <= -30   - 5000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_3_5000_WERT | s | - | unsigned long | - | - | - | - | - | -30 < T <= -20   - 5000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_4_5000_WERT | s | - | unsigned long | - | - | - | - | - | -20 < T <= -10   - 5000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_5_5000_WERT | s | - | unsigned long | - | - | - | - | - | -10 < T <= 0  - 5000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_6_5000_WERT | s | - | unsigned long | - | - | - | - | - | 0 < T <= 10   - 5000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_7_5000_WERT | s | - | unsigned long | - | - | - | - | - | 10 < T <= 20   - 5000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_8_5000_WERT | s | - | unsigned long | - | - | - | - | - | 20 < T <= 30   - 5000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_9_5000_WERT | s | - | unsigned long | - | - | - | - | - | 30 < T <= 40   - 5000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_10_5000_WERT | s | - | unsigned long | - | - | - | - | - | 40 < B <= 50   - 5000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_11_5000_WERT | s | - | unsigned long | - | - | - | - | - | 50 < B <= 60   - 5000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_12_5000_WERT | s | - | unsigned long | - | - | - | - | - | 60 < B <= 70   - 5000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_13_5000_WERT | s | - | unsigned long | - | - | - | - | - | 70 < B <= +inf   - 5000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_1_10000_WERT | s | - | unsigned long | - | - | - | - | - | -inf <= T <= -40  - 10000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_2_10000_WERT | s | - | unsigned long | - | - | - | - | - | -40 < T <= -30   - 10000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_3_10000_WERT | s | - | unsigned long | - | - | - | - | - | -30 < T <= -20   - 10000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_4_10000_WERT | s | - | unsigned long | - | - | - | - | - | -20 < T <= -10   - 10000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_5_10000_WERT | s | - | unsigned long | - | - | - | - | - | -10 < T <= 0  - 10000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_6_10000_WERT | s | - | unsigned long | - | - | - | - | - | 0 < T <= 10   - 10000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_7_10000_WERT | s | - | unsigned long | - | - | - | - | - | 10 < T <= 20   - 10000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_8_10000_WERT | s | - | unsigned long | - | - | - | - | - | 20 < T <= 30   - 10000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_9_10000_WERT | s | - | unsigned long | - | - | - | - | - | 30 < T <= 40   - 10000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_10_10000_WERT | s | - | unsigned long | - | - | - | - | - | 40 < B <= 50   - 10000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_11_10000_WERT | s | - | unsigned long | - | - | - | - | - | 50 < B <= 60   - 10000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_12_10000_WERT | s | - | unsigned long | - | - | - | - | - | 60 < B <= 70   - 10000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_13_10000_WERT | s | - | unsigned long | - | - | - | - | - | 70 < B <= +inf   - 10000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_1_20000_WERT | s | - | unsigned long | - | - | - | - | - | -inf <= T <= -40  - 20000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_2_20000_WERT | s | - | unsigned long | - | - | - | - | - | -40 < T <= -30   - 20000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_3_20000_WERT | s | - | unsigned long | - | - | - | - | - | -30 < T <= -20   - 20000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_4_20000_WERT | s | - | unsigned long | - | - | - | - | - | -20 < T <= -10   - 20000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_5_20000_WERT | s | - | unsigned long | - | - | - | - | - | -10 < T <= 0  - 20000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_6_20000_WERT | s | - | unsigned long | - | - | - | - | - | 0 < T <= 10   - 20000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_7_20000_WERT | s | - | unsigned long | - | - | - | - | - | 10 < T <= 20   - 20000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_8_20000_WERT | s | - | unsigned long | - | - | - | - | - | 20 < T <= 30   - 20000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_9_20000_WERT | s | - | unsigned long | - | - | - | - | - | 30 < T <= 40   - 20000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_10_20000_WERT | s | - | unsigned long | - | - | - | - | - | 40 < B <= 50   - 20000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_11_20000_WERT | s | - | unsigned long | - | - | - | - | - | 50 < B <= 60   - 20000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_12_20000_WERT | s | - | unsigned long | - | - | - | - | - | 60 < B <= 70   - 20000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_13_20000_WERT | s | - | unsigned long | - | - | - | - | - | 70 < B <= +inf   - 20000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_1_50000_WERT | s | - | unsigned long | - | - | - | - | - | -inf <= T <= -40  - 50000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_2_50000_WERT | s | - | unsigned long | - | - | - | - | - | -40 < T <= -30   - 50000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_3_50000_WERT | s | - | unsigned long | - | - | - | - | - | -30 < T <= -20   - 50000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_4_50000_WERT | s | - | unsigned long | - | - | - | - | - | -20 < T <= -10   - 50000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_5_50000_WERT | s | - | unsigned long | - | - | - | - | - | -10 < T <= 0  - 50000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_6_50000_WERT | s | - | unsigned long | - | - | - | - | - | 0 < T <= 10   - 50000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_7_50000_WERT | s | - | unsigned long | - | - | - | - | - | 10 < T <= 20   - 50000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_8_50000_WERT | s | - | unsigned long | - | - | - | - | - | 20 < T <= 30   - 50000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_9_50000_WERT | s | - | unsigned long | - | - | - | - | - | 30 < T <= 40   - 50000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_10_50000_WERT | s | - | unsigned long | - | - | - | - | - | 40 < B <= 50   - 50000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_11_50000_WERT | s | - | unsigned long | - | - | - | - | - | 50 < B <= 60   - 50000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_12_50000_WERT | s | - | unsigned long | - | - | - | - | - | 60 < B <= 70   - 50000 |
| STAT_NV_HIST_AMB_TEMP_HISTO_13_50000_WERT | s | - | unsigned long | - | - | - | - | - | 70 < B <= +inf   - 50000 |

### RES_0X2330_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_HIST_ECU_DSP_TEMP_1_WERT | s | - | unsigned long | - | - | - | - | - | -inf <= T <= -40 |
| STAT_NV_HIST_ECU_DSP_TEMP_2_WERT | s | - | unsigned long | - | - | - | - | - | -40 < T <= -20 |
| STAT_NV_HIST_ECU_DSP_TEMP_3_WERT | s | - | unsigned long | - | - | - | - | - | -20 < T <= 0 |
| STAT_NV_HIST_ECU_DSP_TEMP_4_WERT | s | - | unsigned long | - | - | - | - | - | 0 < T <= 10 |
| STAT_NV_HIST_ECU_DSP_TEMP_5_WERT | s | - | unsigned long | - | - | - | - | - | 10 < T <= 20 |
| STAT_NV_HIST_ECU_DSP_TEMP_6_WERT | s | - | unsigned long | - | - | - | - | - | 20 < T <= 30 |
| STAT_NV_HIST_ECU_DSP_TEMP_7_WERT | s | - | unsigned long | - | - | - | - | - | 30 < T <= 40 |
| STAT_NV_HIST_ECU_DSP_TEMP_8_WERT | s | - | unsigned long | - | - | - | - | - | 40 < T <= 50 |
| STAT_NV_HIST_ECU_DSP_TEMP_9_WERT | s | - | unsigned long | - | - | - | - | - | 50 < T <= 60 |
| STAT_NV_HIST_ECU_DSP_TEMP_10_WERT | s | - | unsigned long | - | - | - | - | - | 60 < T <= 70 |
| STAT_NV_HIST_ECU_DSP_TEMP_11_WERT | s | - | unsigned long | - | - | - | - | - | 70 < T <= 80 |
| STAT_NV_HIST_ECU_DSP_TEMP_12_WERT | s | - | unsigned long | - | - | - | - | - | 80 < T <= 92 |
| STAT_NV_HIST_ECU_DSP_TEMP_13_WERT | s | - | unsigned long | - | - | - | - | - | 92 < T <= 102 |
| STAT_NV_HIST_ECU_DSP_TEMP_14_WERT | s | - | unsigned long | - | - | - | - | - | 102 < T <= +inf |

### RES_0X2332_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_HIST_ECU_DDR_TEMP_1_WERT | s | - | unsigned long | - | - | - | - | - | -inf <= T <= -40 |
| STAT_NV_HIST_ECU_DDR_TEMP_2_WERT | s | - | unsigned long | - | - | - | - | - | -40 < T <= -20 |
| STAT_NV_HIST_ECU_DDR_TEMP_3_WERT | s | - | unsigned long | - | - | - | - | - | -20 < T <= 0 |
| STAT_NV_HIST_ECU_DDR_TEMP_4_WERT | s | - | unsigned long | - | - | - | - | - | 0 < T <= 10 |
| STAT_NV_HIST_ECU_DDR_TEMP_5_WERT | s | - | unsigned long | - | - | - | - | - | 10 < T <= 20 |
| STAT_NV_HIST_ECU_DDR_TEMP_6_WERT | s | - | unsigned long | - | - | - | - | - | 20 < T <= 30 |
| STAT_NV_HIST_ECU_DDR_TEMP_7_WERT | s | - | unsigned long | - | - | - | - | - | 30 < T <= 40 |
| STAT_NV_HIST_ECU_DDR_TEMP_8_WERT | s | - | unsigned long | - | - | - | - | - | 40 < T <= 50 |
| STAT_NV_HIST_ECU_DDR_TEMP_9_WERT | s | - | unsigned long | - | - | - | - | - | 50 < T <= 60 |
| STAT_NV_HIST_ECU_DDR_TEMP_10_WERT | s | - | unsigned long | - | - | - | - | - | 60 < T <= 70 |
| STAT_NV_HIST_ECU_DDR_TEMP_11_WERT | s | - | unsigned long | - | - | - | - | - | 70 < T <= 80 |
| STAT_NV_HIST_ECU_DDR_TEMP_12_WERT | s | - | unsigned long | - | - | - | - | - | 80 < T <= 92 |
| STAT_NV_HIST_ECU_DDR_TEMP_13_WERT | s | - | unsigned long | - | - | - | - | - | 92 < T <= 102 |
| STAT_NV_HIST_ECU_DDR_TEMP_14_WERT | s | - | unsigned long | - | - | - | - | - | 102 < T <= +inf |

### RES_0X2333_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_HIST_FIR_SENSOR_TEMP_1_WERT | s | - | unsigned long | - | - | - | - | - | -inf <= T <= -40 |
| STAT_NV_HIST_FIR_SENSOR_TEMP_2_WERT | s | - | unsigned long | - | - | - | - | - | -40 < T <= -20 |
| STAT_NV_HIST_FIR_SENSOR_TEMP_3_WERT | s | - | unsigned long | - | - | - | - | - | -20 < T <= 0 |
| STAT_NV_HIST_FIR_SENSOR_TEMP_4_WERT | s | - | unsigned long | - | - | - | - | - | 0 < T <= 10 |
| STAT_NV_HIST_FIR_SENSOR_TEMP_5_WERT | s | - | unsigned long | - | - | - | - | - | 10 < T <= 20 |
| STAT_NV_HIST_FIR_SENSOR_TEMP_6_WERT | s | - | unsigned long | - | - | - | - | - | 20 < T <= 30 |
| STAT_NV_HIST_FIR_SENSOR_TEMP_7_WERT | s | - | unsigned long | - | - | - | - | - | 30 < T <= 35 |
| STAT_NV_HIST_FIR_SENSOR_TEMP_8_WERT | s | - | unsigned long | - | - | - | - | - | 35 < T <= 40 |
| STAT_NV_HIST_FIR_SENSOR_TEMP_9_WERT | s | - | unsigned long | - | - | - | - | - | 40 < T <= 50 |
| STAT_NV_HIST_FIR_SENSOR_TEMP_10_WERT | s | - | unsigned long | - | - | - | - | - | 50 < T <= 60 |
| STAT_NV_HIST_FIR_SENSOR_TEMP_11_WERT | s | - | unsigned long | - | - | - | - | - | 60 < T <= 70 |
| STAT_NV_HIST_FIR_SENSOR_TEMP_12_WERT | s | - | unsigned long | - | - | - | - | - | 70 < T <= 80 |
| STAT_NV_HIST_FIR_SENSOR_TEMP_13_WERT | s | - | unsigned long | - | - | - | - | - | 80 < T <= 85 |
| STAT_NV_HIST_FIR_SENSOR_TEMP_14_WERT | s | - | unsigned long | - | - | - | - | - | 85 < T <= +inf |

### RES_0X2334_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED_1_WERT | s | - | unsigned long | - | - | - | - | - | -inf <= T <= -40 |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED_2_WERT | s | - | unsigned long | - | - | - | - | - | -40 < T <= -20 |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED_3_WERT | s | - | unsigned long | - | - | - | - | - | -20 < T <= 0 |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED_4_WERT | s | - | unsigned long | - | - | - | - | - | 0 < T <= 10 |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED_5_WERT | s | - | unsigned long | - | - | - | - | - | 10 < T <= 20 |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED_6_WERT | s | - | unsigned long | - | - | - | - | - | 20 < T <= 30 |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED_7_WERT | s | - | unsigned long | - | - | - | - | - | 30 < T <= 35 |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED_8_WERT | s | - | unsigned long | - | - | - | - | - | 35 < T <= 40 |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED_9_WERT | s | - | unsigned long | - | - | - | - | - | 40 < T <= 50 |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED_10_WERT | s | - | unsigned long | - | - | - | - | - | 50 < T <= 60 |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED_11_WERT | s | - | unsigned long | - | - | - | - | - | 60 < T <= 70 |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED_12_WERT | s | - | unsigned long | - | - | - | - | - | 70 < T <= 80 |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED_13_WERT | s | - | unsigned long | - | - | - | - | - | 80 < T <= 85 |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED_14_WERT | s | - | unsigned long | - | - | - | - | - | 85 < T <= +inf |

### RES_0X2335_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_FIR_STATISTICS_1_WERT | s | - | unsigned long | - | - | - | - | - | FIR uptime for the whole lifetime |
| STAT_NV_FIR_STATISTICS_2_WERT | - | - | unsigned long | - | - | - | - | - | Shutter count since power on |
| STAT_NV_FIR_STATISTICS_3_WERT | - | - | unsigned long | - | - | - | - | - | Shutter count for whole lifetime |
| STAT_NV_FIR_STATISTICS_4_WERT | s | - | unsigned long | - | - | - | - | - | Heater time since power on |

### RES_0X2336_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MCU_uptime_WERT | s | - | unsigned long | - | - | - | - | - | MCU uptime |
| STAT_VP_uptime_WERT | s | - | unsigned long | - | - | - | - | - | VP uptime |
| STAT_CAM_uptime_WERT | s | - | unsigned long | - | - | - | - | - | CAM uptime |
| STAT_VP_restarts_WERT | - | - | unsigned int | - | - | - | - | - | VP restarts |
| STAT_CAM_restarts_WERT | - | - | unsigned int | - | - | - | - | - | CAM restarts |

### RES_0X4001_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VIDEO_DAC__3V_WERT | V | high | unsigned int | - | - | - | - | - | Port00: Video_DAC-Referenz -3V |
| STAT_CORE_VOLTAGE_1.2V_WERT | V | high | unsigned int | - | - | 3.3 | 1024.0 | 0.0 | Port01: Core Spannung 1.2V |
| STAT_CORE_VOLTAGE_1.4V_WERT | V | high | unsigned int | - | - | 3.3 | 1024.0 | 0.0 | Port02: Core Spannung 1.4 V |
| STAT_IO_VOLTAGE_2.5V_WERT | V | high | unsigned int | - | - | 3.3 | 1024.0 | 0.0 | Port03: IO Spannung 2.5V |
| STAT_IO_VOLTAGE_5V_WERT | V | high | unsigned int | - | - | 6.6 | 1024.0 | 0.0 | Port04: IO Spannung 5V |
| STAT_SYSTEM_TEMPERATUR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port05: Temperature Sensor at DSP A |
| STAT_SWITCHED_BATT_VOLTAGE_WERT | V | high | unsigned int | - | - | 36.3 | 1024.0 | 0.64 | Port06: geschaltete Batteriespannung |
| STAT_VIDEO_OUT_POS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port07: positiver Videoausgang |
| STAT_VIDEO_OUT_NEG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port08: negativer Videoausgang |
| STAT_CAM_PWR_VOLTAGE_WERT | V | high | unsigned int | - | - | 36.3 | 1024.0 | 0.73 | Port09: Kamera Betriebsspannung |
| STAT_CAM_PWR_CURRENT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port0A: Kamera Betriebsstrom |
| STAT_DFBAS_IN_POS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port0B: Videoausgang, pos. DFBAS |
| STAT_DFBAS_IN_NEG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port0C: Videoausgang, neg. DFBAS |
| STAT_PU_BU_VOLTAGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port0D: Ein/Aus-Tastensignal |
| STAT_CAM_CAN_MEAN_VOLTAGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port0E: Kamera-CAN_Bus-Mittelwertspannung |
| STAT_VEH_CAN_MEAN_VOLTAGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port0F: Fahrzeug-CAN_Bus-Mittelwertspannung |
| STAT_WUP_SIGNAL_VOLTAGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port10: Weckleitung (Wake Up)-Signalspannung - nicht benutzt |
| STAT_SYSTEM_TEMPERATUR2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port11:Temperature Sensor at Video DAC |
| STAT_SYSTEM_TEMPERATUR3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port12: Temperature Sensor at FPGA |
| STAT_SYSTEM_TEMPERATUR4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port13: Temperature Sensor at DSP B |
| STAT_HW_IDENT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Port14: Hardware Identification |

### RES_0X4003_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PORT_BYTE_0_WERT | HEX | high | char | - | - | 1.0 | 1.0 | 0.0 | Port 00..07 |
| STAT_PORT_BYTE_1_WERT | HEX | high | char | - | - | 1.0 | 1.0 | 0.0 | Port 08..15 |
| STAT_PORT_BYTE_2_WERT | HEX | high | char | - | - | 1.0 | 1.0 | 0.0 | Port 16..23 |
| STAT_PORT_BYTE_3_WERT | HEX | high | char | - | - | 1.0 | 1.0 | 0.0 | Port 24..31. Maske = 0x1f |

### RES_0X4005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERIAL_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | SERIAL |
| STAT_ASSEMBLY_TEXT | TEXT | high | string[20] | - | - | 1.0 | 1.0 | 0.0 | ASSEMBLY |
| STAT_FIRMWARE_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | FIRMWARE |
| STAT_SOFTWARE_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | SOFTWARE |

### RES_0X4007_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AMB_CAM_M20C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for T < -20 C Hours |
| STAT_AMB_CAM_M20C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for T<-20 C Minutes |
| STAT_AMB_CAM_M20C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for T<-20 C Seconds |
| STAT_AMB_CAM_M20C__0C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for -20<T<=0 C Hours |
| STAT_AMB_CAM_M20C__0C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for -20<T<=0 C Minutes |
| STAT_AMB_CAM_M20C__0C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for -20<T<=0 C Seconds |
| STAT_AMB_CAM_0C__30C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for 0<T<=30 C Hours |
| STAT_AMB_CAM_0C__30C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for 0<T<=30 C Minutes |
| STAT_AMB_CAM_0C__30C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for 0<T<=30 C Seconds |
| STAT_AMB_CAM_30C__60C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for 30<T<=60 C Hours |
| STAT_AMB_CAM_30C__60C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for 30<T<=60 C Minutes |
| STAT_AMB_CAM_30C__60C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for 30<T<=60 C Seconds |
| STAT_AMB_CAM_60C__80C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for 60<T<=80 C Hours |
| STAT_AMB_CAM_60C__80C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for 60<T<=80 C Minutes |
| STAT_AMB_CAM_60C__80C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for 60<T<=80 C Seconds |
| STAT_AMB_CAM_80C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for T>80 C Hours |
| STAT_AMB_CAM_80C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for T>80 C Minutes |
| STAT_AMB_CAM_80C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ambient temperature camera operating time for T>80 C Seconds |

### RES_0X4008_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INT_MCU_M20C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for T<-20 C Hours |
| STAT_INT_MCU_M20C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for T<-20 C Minutes |
| STAT_INT_MCU_M20C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for T<-20 C Seconds |
| STAT_INT_MCU_M20C__0C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for -20<T<=0 C Hours |
| STAT_INT_MCU_M20C__0C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for -20<T<=0 C Minutes |
| STAT_INT_MCU_M20C__0C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for -20<T<=0 C Seconds |
| STAT_INT_MCU_0C__30C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for 0<T<=30 C Hours |
| STAT_INT_MCU_0C__30C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for 0<T<=30 C Minutes |
| STAT_INT_MCU_0C__30C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for 0<T<=30 C Seconds |
| STAT_INT_MCU_30C__60C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for 30<T<=60 C Hours |
| STAT_INT_MCU_30C__60C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for 30<T<=60 C Minutes |
| STAT_INT_MCU_30C__60C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for 30<T<=60 C Seconds |
| STAT_INT_MCU_60C__80C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for 60<T<=80 C Hours |
| STAT_INT_MCU_60C__80C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for 60<T<=80 C Minutes |
| STAT_INT_MCU_60C__80C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for 60<T<=80 C Seconds |
| STAT_INT_MCU_80C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for T>80 C Hours |
| STAT_INT_MCU_80C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for T>80 C Minutes |
| STAT_INT_MCU_80C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal MCU operating time for T>80 C Seconds |

### RES_0X4009_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INT_CAM_M20C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for T<-20 C Hours |
| STAT_INT_CAM_M20C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for T<-20 C Minutes |
| STAT_INT_CAM_M20C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for T<-20 C Seconds |
| STAT_INT_CAM_M20C__0C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for -20<T<=0 C Hours |
| STAT_INT_CAM_M20C__0C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for -20<T<=0 C Minutes |
| STAT_INT_CAM_M20C__0C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for -20<T<=0 C Seconds |
| STAT_INT_CAM_0C__30C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for 0<T<=30 C Hours |
| STAT_INT_CAM_0C__30C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for 0<T<=30 C Minutes |
| STAT_INT_CAM_0C__30C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for  0<T<=30 C Seconds |
| STAT_INT_CAM_30C__60C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for  30<T<=60 C Hours |
| STAT_INT_CAM_30C__60C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for  30<T<=60 C Minutes |
| STAT_INT_CAM_30C__60C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for  30<T<=60 C Seconds |
| STAT_INT_CAM_60C__80C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for 60<T<=80 C Hours |
| STAT_INT_CAM_60C__80C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for 60<T<=80 C Minutes |
| STAT_INT_CAM_60C__80C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for 60<T<=80 C Seconds |
| STAT_INT_CAM_80C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for T>80 C Hours |
| STAT_INT_CAM_80C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for  T>80 C Minutes |
| STAT_INT_CAM_80C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Internal camera temperature operating time for  T>80 C Seconds |

### RES_0X400A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INT_MCU_VP_M20C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for T<-20 C Hours |
| STAT_INT_MCU_VP_M20C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for T<-20 C Minutes |
| STAT_INT_MCU_VP_M20C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for T<-20 C Seconds |
| STAT_INT_MCU_VP_20C__0C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for -20<T<=0 C Hours |
| STAT_INT_MCU_VP_20C__0C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for -20<T<=0 C Minutes |
| STAT_INT_MCU_VP_20C__0C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for -20<T<=0 C Seconds |
| STAT_INT_MCU_VP_0C__30C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for 0<T<=30 C Hours |
| STAT_INT_MCU_VP_0C__30C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for 0<T<=30 C Minutes |
| STAT_INT_MCU_VP_0C__30C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for 0<T<=30 C Seconds |
| STAT_INT_MCU_VP_30C__60C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for 30<T<=60 C Hours |
| STAT_INT_MCU_VP_30C__60C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for 30<T<=60 C Minutes |
| STAT_INT_MCU_VP_30C__60C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for 30<T<=60 C Seconds |
| STAT_INT_MCU_VP_60C__80C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for 60<T<=80 C Hours |
| STAT_INT_MCU_VP_60C__80C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for 60<T<=80 C Minutes |
| STAT_INT_MCU_VP_60C__80C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for 60<T<=80 C Seconds |
| STAT_INT_MCU_VP_80C_H_WERT | h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for T>80 C Hours |
| STAT_INT_MCU_VP_80C_M_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for T>80 C Minutes |
| STAT_INT_MCU_VP_80C_S_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | internal temperature MCU+VP operating time for T>80 C Seconds |

### RES_0X41F1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MCU_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MCU uptime |
| STAT_VP_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | VP uptime |
| STAT_CAM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Camera uptime |
| STAT_VP_RESTARTS_WERT | count | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Number of VP restarts |
| STAT_CAM_RESTARTS_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of Camera restarts |
| STAT_ERROR_BI_TRANS_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of errors in boot info transmission |
| STAT_ERROR_AL_TRANS_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of errors in application loader transmission |
| STAT_TIMEOUT_DSB_RESET_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of timeouts for DSPB reset |
| STAT_ERROR_ID_TRANS_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of errors in initdata transmission |

### RES_0XA380_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PIXELTEST_NR | - | - | + | 0-n | - | unsigned char | - | TAB_NIVI_PIXELTEST | 1.0 | 1.0 | 0.0 | 0 = Test abgebrochen, nicht angefordert,  1 = Test in Ausführung,  2 = Test erfolgreich abgeschlossen,  3 = Test fehlgeschlagen |
| STAT_NIVI_KAM_DEFEKTE_PIXEL_WERT | - | - | + | Pixel | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Anzahl defekter Pixel. |
| STAT_NIVI_KAM_DEFEKTE_CLUSTER_WERT | - | - | + | Cluster | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Anzahl defekter Cluster (Bereiche zusammenhängender defekter Pixel). |

### RES_0XD384_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROTATIONSWINKEL_WERT | Grad | - | char | - | - | 1.0 | 10.0 | 0.0 | Ausgabe des in der ECU gespeicherten Rotationswinkels bis auf 10-tel Grad (z.B. 2,3 °). |
| STAT_NICKWINKEL_WERT | Grad | - | char | - | - | 1.0 | 10.0 | 0.0 | Ausgabe des in der ECU gespeicherten Nickwinkels bis auf 10-tel Grad (z.B. 2,3 °). |
| STAT_GIERWINKEL_WERT | Grad | - | char | - | - | 1.0 | 10.0 | 0.0 | Ausgabe des in der ECU gespeicherten Gierwinkels bis auf 10-tel Grad (z.B. 2,3 °). |

### RES_0XD385_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NIVI_KAM_ZEILEN_DATA | DATA | - | data[160] | - | - | 1.0 | 1.0 | 0.0 | Ergebnis [IDENTIFIER, Byte 1, ... , Byte 160] IDENTIFIER = XX YY Hex Byte 1 bis Byte 160 sind die Pixelwerte |

### RES_0XD38A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NIVI_KAM_FUNKTION | 0-n | - | unsigned char | - | TAB_STAT_NIVI_CAM | 1.0 | 1.0 | 0.0 | Ausgabe des Betriebsstatus der Kamera. Siehe Tabelle TAB_STAT_NIVI_CAM |
| STAT_NIVI_KAM_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Ausgabe der Kamerabetriebsspannung bis auf 10-tel Volt. |
| STAT_NIVI_KAM_STROM_WERT | mA | - | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Ausgabe der Stromaufnahme der Kamera in mA. |
| STAT_NIVI_KAM_TEMP_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Temperatur der Kamera. |
| STAT_NIVI_KAM_BLENDE_ZYKLUSZEIT_WERT | s | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Zykluszeit der Blende in Sekunden. |
| STAT_NIVI_KAM_BLENDE | 0-n | - | unsigned char | - | TAB_MODUS_BLENDE | 1.0 | 1.0 | 0.0 | Ausgabe des Betriebsmodus der Blende: Results siehe TAB_MODUS_BLENDE |
| STAT_NIVI_KAM_TEMP_HEIZUNG_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Temperatur der Linsen vor der Kamera. |
| STAT_NIVI_KAM_LINSENHEIZUNG_EIN | 0-n | - | unsigned char | - | TAB_LINSENHEIZUNG | 1.0 | 1.0 | 0.0 | Ausgabe des Status der Linsenheizung: Results siehe TAB_LINSENHEIZUNG |
| STAT_NIVI_KAM_BETRIEBSSTUNDEN_WERT | Stunden | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Betriebsstunden der Kamera in Stunden. |

### RES_0XD38C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NIVI_SYSTEM | 0-n | - | unsigned char | - | TAB_NIVI_STATUS | 1.0 | 1.0 | 0.0 | Gibt aus, ob Night-Vision eingeschaltet ist: Results siehe TAB_NIVI_STATUS |
| STAT_NIVI_PERSONENERKENNUNG | 0-n | - | unsigned char | - | TAB_PERSONENERKENNUNG | - | - | - | Gibt aus, ob Personenerkennung eingeschaltet ist: Results siehe TAB_PERSONENERKENNUNG |
| STAT_NIVI_ECU_TEMP_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Temperatur des Steuergerätes. |

### RES_0XD3CF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTRAST_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kontrast der Kamera |
| STAT_DAUER_BIS_CCM_BLINDHEIT_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer der Blindheit in Minuten (0-254), 0xFF wenn Blindheit beim Aufstarten erkannt. Zeit = (Coding-Wert) ¿ (Zeit seit Blockade im Bild) |
| STAT_DAUER_BIS_CCM_NACH_BLINDHEIT_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer in Sekunden (0-254) nach Blindheit, wenn Erkennung wieder aktiv , 0xFF wenn keine Blindheit erkannt wurde. Zeit = (Coding-Wert-2)-(Zeit Ohne Blockade) |

### SEITE

| WERT | TEXT |
| --- | --- |
| 01 | Links |
| 02 | Rechts |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SIGNALAUSGABE | 0xA01A | - | Steuert die Videosignalausgabe eines Steuergerätes (Videoquelle). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01A_R | - |
| PIXELTEST_NIVI_KAM | 0xA380 | - | Auslösen der Korrektur toter Pixel in der Kamera.  Zu diesem Zweck wird das Bild mit/ohne Shutter verglichen.  Die Anzahl toter Pixel und Cluster kann nach Ausführung ausgelesen werden. | - | Modus | - | - | - | - | - | - | - | 31 | ARG_0xA380_R | RES_0xA380_R |
| GZA_TEST_MODE | 0xA381 | - | Demomode für gezieltes Anleuchten | - | Seite | - | - | - | - | - | - | - | 31 | ARG_0xA381_R | - |
| DEMO_MODE_GEZIELTES_ANLEUCHTEN | 0xA382 | - | Demo Mode für gezieltes Anleuchten | - | - | - | - | - | - | - | - | - | 31 | - | - |
| JUSTAGELINIEN | 0xA383 | - | Blendet Justagelinien ins NIVI Bild ein. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA383_R | - |
| BUS_IN_TASTE_NIVI_EIN | 0xD382 | STAT_BUS_IN_TASTE_NIVI_EIN | Signal Taster NIVI über BUS, 0= Taster nicht gedrückt, 1= Taster gedrückt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KALIBRIERUNG_NIVI | 0xD384 | - | Der Aufruf liest oder schreibt den Rotations- Nick- und Gierwinkel für die Kamerajustage NIVI. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD384_D | RES_0xD384_D |
| _SENSOR_ZEILEN_LESEN | 0xD385 | - | Auslesen der gewünschten Sensor-Zeile. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD385_D | RES_0xD385_D |
| DIEBSTAHLSCHUTZ_NIVI | 0xD387 | STAT_DIEBSTAHLSCHUTZ_NIVI | Results siehe TAB_DIEBSTAHLSCHUTZ | 0-n | - | - | unsigned char | TAB_DIEBSTAHLSCHUTZ | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| NIVI_KAMERA | 0xD38A | - | Ausgabe der verschieden Stati der NiVi-Kamera. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD38A_D |
| KALIBRIERUNG_NIVI_INIT | 0xD38B | STAT_KALIBRIERUNG_NIVI_INIT | 0 (0x00) = nicht initialisiert, 1 (0x01) =  Initialisierung in Ordnung, 255 (0xFF) = Initialisierung nicht in Ordnung | 0-n | - | - | unsigned char | TAB_INIT | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| NIVI_STEUERGERAET | 0xD38C | - | Ausgabe der verschiedenen Betriebsstati des NiVi-Steuergerätes. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD38C_D |
| PERSONENERKENNUNG_NIVI | 0xD3AC | - | Einschalten der Personenerkennung, auch wenn aufgrund der Umweltbedingungen eine Deaktivierung erfolgen würde. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3AC_D | - |
| STEUERN_NIVI_KAM_BLENDE | 0xD3AE | - | Ansteuerung des Blendenmotors der NiVi-Kamera. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3AE_D | - |
| STEUERN_NIVI_KAM_HEIZUNG | 0xD3AF | - | Ansteuerung der Linsenheizung der NiVi-Kamera. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3AF_D | - |
| KALIBRIERUNG_SERVICE_NIVI | 0xD3B1 | - | Startet die Kalibrierung der NIVI-Kameras mit Hilfe der Software im Service. Es wird solange das  Referenzbild angezeigt, bis Argument REFERENZBILD wieder auf 0 oder 2 geht. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3B1_D | - |
| BLINDHEITSERKENNUNG | 0xD3CF | - | Status Blindheitserkennung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3CF_D |
| SPANNUNG_KLEMME_15N_WERT | 0xDAD2 | STAT_SPANNUNG_KLEMME_15N_WERT | Spannungswert am Steuergerät an Klemme 15N (auf eine Nachkommastelle genau) | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | Status Klemme 15 im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| NACHLAUFZEIT_KLEMME_15N | 0xDB2D | STAT_NACHLAUFZEIT_KLEMME_15N_WERT | Das Result enthält die Nachlaufzeit der Klemme 15N in Sekunden. | s | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STAT_NV_IMAGE_BRIGHTNESS | 0x2300 | - | Read Histogram for Image Brightness - Lifetime data since reset | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2300_D |
| STAT_NV_IMAGE_BRIGHTNESS_HISTORICAL | 0x2301 | - | Read Histogram for Image Brightness - Historical Data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2301_D |
| STAT_NV_IMAGE_CONTRAST | 0x2302 | - | Read Histogram for Image Contrast - Lifetime data since last reset | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2302_D |
| STAT_NV_IMAGE_CONTRAST_HISTORICAL | 0x2303 | - | Read Histogram for Image Contrast - Historical data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2303_D |
| STAT_OBJECT_DETECTION | 0x2304 | - | Read Statistics for Object Detection - Lifetime data since reset | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2304_D |
| STAT_OBJECT_DETECTION_HISTORICAL | 0x2305 | - | Read Statistics for Object Detection - Historical Data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2305_D |
| STAT_NV_YAW_ONLINE_CALIB | 0x2306 | - | Read Histogram for Yaw Online Calibration - Lifetime data since last reset | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2306_D |
| STAT_NV_YAW_ONLINE_CALIB_HISTORICAL | 0x2307 | - | Read Histogram for Yaw Online Calibration - Historical Data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2307_D |
| STAT_TIMERS_CITY | 0x2308 | - | Read Statistics Timers for City Area - Lifetime data since last reset | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2308_D |
| STAT_TIMERS_CITY_HISTORICAL | 0x2309 | - | Read Statistics Timers for City Area - Historical Data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2309_D |
| STAT_TIMERS_RURAL | 0x230A | - | Read Statistics Timers for Rural Area - Lifetime data since last reset | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230A_D |
| STAT_TIMERS_RURAL_HISTORICAL | 0x230B | - | Read Statistics Timers for Rural Area - Historical Data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230B_D |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE | 0x230C | - | Read Timers for Marking Light Unavailable - Lifetime data since last reset | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230C_D |
| STAT_NV_MARKING_LIGHT_UNAVAILABLE_HISTORICAL | 0x230D | - | Read Timers for Marking Light Unavailable - Historical Data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230D_D |
| STAT_NV_LEFT_ANGLE | 0x230E | - | Read Histogram for Left Marking Light Direction - Lifetime data since last reset | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230E_D |
| STAT_NV_LEFT_ANGLE_HISTORICAL | 0x230F | - | Read Histogram for Left Marking Light Direction - Historical Data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230F_D |
| STAT_NV_RIGHT_ANGLE | 0x2310 | - | Read Histogram for Right Marking Light Direction - Lifetime data since last reset | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2310_D |
| STAT_NV_RIGHT_ANGLE_HISTORICAL | 0x2311 | - | Read Histogram for Right Marking Light Direction - Historical Data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2311_D |
| STAT_NV_ML_ON_HIST | 0x2312 | - | Read Histogram for the Time Objects are Marked with the Marking Light - Lifetime data since last reset | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2312_D |
| STAT_NV_ML_ON_HIST_HISTORICAL | 0x2313 | - | Read Histogram for the Time Objects are Marked with the Marking Light - Historical Data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2313_D |
| STAT_NV_DRIVER_REACTION | 0x2314 | - | Read Statistics for Driver Reaction at NV Warnings - Lifetime data since last reset | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2314_D |
| STAT_NV_DRIVER_REACTION_HISTORICAL | 0x2315 | - | Read Statistics for Driver Reaction at NV Warnings - Historical data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2315_D |
| STAT_NV_HIST_AMB_TEMP | 0x2316 | - | Read Histogram of Car Ambient Air Temperature - Lifetime Data since Last Reset | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2316_D |
| STAT_NV_HIST_AMB_TEMP_HISTORICAL | 0x2317 | - | Read Histogram of Car Ambient Air Temperature - Historical Data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2317_D |
| STAT_NV_HIST_ECU_DSP_TEMP | 0x2330 | - | This service reads the histogram of the ECU DSP temperature | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2330_D |
| STAT_NV_HIST_ECU_DDR_TEMP | 0x2332 | - | This service reads the histogram of the ECU DDR temperature. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2332_D |
| STAT_NV_HIST_FIR_SENSOR_TEMP | 0x2333 | - | This service reads the histogram of the FIR sensor temperature when FIR is powered. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2333_D |
| STAT_NV_HIST_AMB_TEMP_FIR_UNPOWERED | 0x2334 | - | This service reads the histogram of the car ambient temperature when FIR is unpowered. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2334_D |
| STAT_NV_FIR_STATISTICS | 0x2335 | - | This service reads statistics about the FIR imager | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2335_D |
| STAT_NV_UPTIME_STATUS | 0x2336 | - | The ECU shall report the uptime status according to the following: MCU uptime  VP uptime  CAM uptime  VP restarts  CAM restarts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2336_D |
| _STEUERN_BLENDE_ZYKLUSZEIT | 0x4000 | - | Der Job setzt die Zykluszeit des Shutters. Hinweis: die Zykluszeit wird auch von der Temperatur beeinflusst. Es kannn zu Shutteroperationen innerhalb der gesetzten Zykluszeit kommen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4000_D | - |
| _STATUS_MCU_ADC | 0x4001 | - | Der Job liest die Spannungswerte der 1. Port-Klasse des bidirektionalen Analog/Digital-Konverters aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4001_D |
| _STEUERN_MCU_ADC | 0x4002 | - | Der Job setzt den gewählten Port des ADC auf definierten Wert. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4002_D | - |
| _STATUS_MCU_IO | 0x4003 | - | Der Job gibt die eingestellten Binärwerte der IO-Ports zurück. Hierbei gilt, jedes Bit entspricht entprechend der Position im Byte einem Port. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4003_D |
| _STEUERN_MCU_IO | 0x4004 | - | Der Job setzt den gewählten IO-Port auf den definierten Wert. PORT_VALUE=0x00 nicht aktiv, PORT_VALUE=0x01 aktiv. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4004_D | - |
| _STATUS_CAM_VERSION | 0x4005 | - | Job reports following camera informations: serial number, assembly number, firmware number, software number. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4005_D |
| _STAT_TASTER | 0x4006 | STAT_TASTER | NIVI-Button not activated->0, activated->1 | 0/1 | - | high | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _STATUS_OPERATING_HOURS__AMB_CAM | 0x4007 | - | Ambient camera temperature operating time for        T < -20C; STAT_..._M20C_WERT  -20C< T <=  0C; STAT_..._M20C__0C_WERT    0C< T <= 30C; STAT_..._0C__30C_WERT   30C< T <= 60C; STAT_..._30C__60C_WERT   60C< T <= 80C; STAT_..._60C__80C_WERT   80C< T       ; STAT_..._80C_WERT | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4007_D |
| _STATUS_OPERATING_HOURS__INT_MCU | 0x4008 | - | Ambient ecu temperature operating hours for        T < -20C; STAT_..._M20C_WERT  -20C< T <=  0C; STAT_..._M20C__0C_WERT    0C< T <= 30C; STAT_..._0C__30C_WERT   30C< T <= 60C; STAT_..._30C__60C_WERT   60C< T <= 80C; STAT_..._60C__80C_WERT   80C< T       ; STAT_..._80C_WERT | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4008_D |
| _STATUS_OPERATING_HOURS__INT_CAM | 0x4009 | - | Internal camera temperature operating hours for        T < -20C; STAT_..._M20C_WERT  -20C< T <=  0C; STAT_..._M20C__0C_WERT    0C< T <= 30C; STAT_..._0C__30C_WERT   30C< T <= 60C; STAT_..._30C__60C_WERT   60C< T <= 80C; STAT_..._60C__80C_WERT   80C< T       ; STAT_..._80C_WERT | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4009_D |
| _STATUS_OPERATION_HOURS__INT_MCU_VP | 0x400A | - | Internal ecu temperature operating hours for        T < -20C; STAT_..._M20C_WERT  -20C< T <=  0C; STAT_..._M20C__0C_WERT    0C< T <= 30C; STAT_..._0C__30C_WERT   30C< T <= 60C; STAT_..._30C__60C_WERT   60C< T <= 80C; STAT_..._60C__80C_WERT   80C< T       ; STAT_..._80C_WERT | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400A_D |
| _STATUS_UPTIME | 0x41F1 | - | ECU shall report the uptime status. Each counter shall be counted up from 0 seconds at power-on of the component (MCU/VP/CAM) and increment by one each second. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x41F1_D |

### TAB_ARG_LINSENHEIZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0x02 | Automatische Heizungssteuerung |

### TAB_BLENDE

| WERT | TEXT |
| --- | --- |
| 0x00 | Blende öffnen |
| 0x01 | Blende schließen |
| 0x02 | Automatische Blendensteuerung |
| 0x03 | Flat Field Correction |

### TAB_DIEBSTAHLSCHUTZ

| WERT | TEXT |
| --- | --- |
| 0x00 | Zuordnung in Ordnung |
| 0x01 | Kamera passt nicht zur ECU |
| 0x02 | ECU passt nicht zum Fahrzeug |
| 0x03 | Kamera passt nicht zur ECU und ECU nicht zum Fahrzeug. |
| 0x04 | Freischaltcode nicht vollständig geprüft oder Standard FSC-Prüfung fehlgeschlagen |
| 0xFF | Ungültiger Wert |

### TAB_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | Initialisierung in Ordnung |
| 0xFF | Initialisierung nicht in Ordnung |

### TAB_KALIBRIERUNG_NIVI

| WERT | TEXT |
| --- | --- |
| 0x00 | ABBRUCH |
| 0x01 | REFERENZBILD |
| 0x02 | SPEICHERN |

### TAB_KAM_LINK_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Camera link not OK |
| 1 | Camera link OK |

### TAB_LINSENHEIZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0x02 | Defekt |
| 0xFF | undefinierter Status |

### TAB_MODE_JUSTAGELINIEN

| WERT | TEXT |
| --- | --- |
| 0x01 | Mode 1: Im Bild zentriert |
| 0x02 | Mode 2: Mit Korrektur aus Onlinekalibrierung |
| 0x03 | Mode 3 |

### TAB_MODUS_BLENDE

| WERT | TEXT |
| --- | --- |
| 0x00 | Offen |
| 0x01 | Geschlossen |
| 0x02 | Automatische Steuerung |
| 0x03 | FFC ist in Bewegung (Blende geschlossen) |
| 0xFF | Undefinierter Modus |

### TAB_MODUS_PERSONENERKENNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | STOPP |
| 0x01 | AUS |
| 0x02 | EIN |
| 0x03 | AUTO |

### TAB_NIVI_PIXELTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Test abgebrochen oder nicht angefordert |
| 0x01 | Test läuft |
| 0x02 | Test erfolgreich abgeschlossen |
| 0x03 | Test fehlgeschlagen |

### TAB_NIVI_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | System ausgeschaltet (kein Bild) |
| 0x01 | Systeme eingeschaltet (Bild) |
| 0x02 | Testbild (STEUERN_SIGNALAUSGABE) |
| 0x03 | System AUS |
| 0xFF | undefinierter Zustand |

### TAB_PERSONENERKENNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Personenerkennung nicht aktiv |
| 0x01 | Personenerkennung aktiv |
| 0x02 | nicht verwendet |
| 0x03 | Detektion AUTOMATISCH |
| 0xFF | unbekannter Zustand |

### TAB_QUALIFIER

| WERT | TEXT |
| --- | --- |
| 8 | Initialisierung |
| 1 | Reserviert |
| 9 | Reserviert |
| 2 | Signalwert ist gültig |
| 10 | Signalwert ist gültig. zustand/status temporär |
| 3 | Signalqualität bzw. Überwachung eingeschränkt |
| 11 | Signalqualität bzw. Überwachung eingeschränkt. zustand/status temporär |
| 4 | Reserviert |
| 12 | Ersatzwert ost im Nutzsignal gesetzt. Zustand/Status temporär |
| 6 | Signalwert ist ungültig |
| 14 | Signalwert ist ungültig.Zustand/Status temporär |
| 15 | Qualifier signal ungültig |

### TAB_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x01 | OBEN |
| 0x02 | UNTEN |

### TAB_STAT_NIVI_CAM

| WERT | TEXT |
| --- | --- |
| 0x00 | Kamera aus, Zuordnung OK, Temperatur OK |
| 0x01 | Kamera an, Zuordnung OK, Temperatur OK |
| 0x02 | Kamera aus, Zuordnung nicht OK, Temperatur OK |
| 0x03 | Kamera an, Zuordnung nicht OK, Temperatur OK |
| 0x04 | Kamera aus, Zuordnung OK, Temperatur zu hoch |
| 0x05 | Kamera an, Zuordnung OK, Temperatur zu hoch |
| 0x06 | Kamera aus, Zuordnung nicht OK, Temperatur zu hoch |
| 0x07 | Kamera an, Zuordnung nicht OK, Temperatur zu hoch |
| 0xFF | Ungültig |

### TAB_VEH_CON

| WERT | TEXT |
| --- | --- |
| 0 | Initial |
| 1 | Standby, Fahrer abwesend |
| 2 | Bassbetrieb Fahrer anwsend |
| 3 | Basisbetrieb, Fahrzueg rollt |
| 4 | Motornachlauf |
| 5 | Zündung ein |
| 6 | Zündung ein, Fahrzueg rollt |
| 7 | Motor an, Fahrzueg steht |
| 8 | Fahrt |
| 9 | Bevorstehender Motorstart |
| 10 | Bevorstehender Motorstart, Fahrzeug rollt |
| 11 | Motorstart |
| 12 | Motorstart,Fahrzeug rollt |
| 13 | Waschstrassenbetrieb |
| 14 | Fehler |
| 15 | Signal ungültig |

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
