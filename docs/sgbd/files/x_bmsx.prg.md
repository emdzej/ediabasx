# x_bmsx.prg

## General

|  |  |
| --- | --- |
| File | x_bmsx.prg |
| Type | PRG |
| Jobs | 37 |
| Tables | 141 |
| Origin | BMW/ist EA-362 Ulbricht |
| Revision | 19.000 |
| Author | ist_GmbH EA-362 Ulbricht |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad Motorsteuerung BMSX |  |  |
| ORIGIN | string | BMW/ist EA-362 Ulbricht |  |  |
| REVISION | string | 19.000 |  |  |
| AUTHOR | string | ist_GmbH EA-362 Ulbricht |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.56 |  |  |
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

### POWER_DOWN

SG im Nachlauf abschalten UDS  : $11 ECUReset UDS  : $41 PowerDownInErrorCase Modus: Default

_No arguments._

### STATUS_EWS

Zurücklesen verschiedener interner Stati für EWS UDS   : $22   ReadDataByIdentifier UDS   : $C000 Sub-Parameter

_No arguments._

### STEUERN_EWS4_SK

17 "EWS4-data" schreiben UDS   : $2E   WriteDataByIdentifier UDS   : $C001 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Byte0 LOCK_CLIENT_SK WRITE_CLIENT_SK UNLOCK_CLIENT_SK UNLOCK_DELETE_CLIENT_HASH_SK |
| DATEN | string | Byte1...16 16 Byte Daten (SecretKey), falls: MODE = WRITE_CLIENT_SK (0x03) MODE = UNLOCK_CLIENT_SK (0x07) MODE = UNLOCK_DELETE_CLIENT_HASH_SK (0x11) KEINE Daten nötig, falls MODE = LOCK_CLIENT_SK (0x01) |

### STATUS_EWS4_SK

Lesen des SecretKey des Client für EWS4 UDS   : $22   ReadDataByIdentifier UDS   : $C002 Sub-Parameter

_No arguments._

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
| 0x0000BE | Schaeffler Technologies |
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
| 0x1750 | PWF_Basinetz | 0-n | - | 0xFF | - | 1 | 1 | 0.000000 |
| 0x1751 | PWF_Teilnetz | 0-n | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |
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

### ARG_0X6230_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VENTILSPIELSERVICE_MODUS | 0-n | high | unsigned char | - | TAB_MR_VENTILSPIELSERVICE_MODUS | 1.0 | 1.0 | 0.0 | - | - | Auswahl des VSI-Modus |
| VENTILSPIELSERVICE_RESTWEG | km | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Restwegstrecke des Ventilspielserviceintervalls |
| VENTILSPIELSERVICE_ANZAHL_RESETS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl der Rücksetzungen des Ventilspielserviceintervalls |

### ARG_0X6231_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPERRUNG_EKP | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | De-/Aktivierung der Sperrung von EKP, Anlasser und Einspritzung: 0 == DEAKTIVIERUNG, 1 == AKTIVIERUNG |

### ARG_0X6232_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LOESCHUNG | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 1.0 | Löschen der Überdrehzahlereignisse: 1 == Löschen |

### ARG_0X6233_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VARIANTE_AKUSTIK | 0/1 | high | unsigned char | - | - | - | - | - | - | - | De-/Aktivierung der länderspezifischen Datenvariante der Funktion AKUSTIK: 1 == AKTIVIERUNG, 0 == DEAKTIVIERUNG |

### ARG_0X6240_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GRUPPENAUSWAHL | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | 511.0 | bitweise Angabe der zu löschenden Adaptionsgruppen: 0 = nicht zugeordnete Funktionen; 1 = Kraftstoffgemisch; 2 = Leerlaufvorsteuerung; 3 = Getriebe; 4 = EGAS-Lageregelung; 5 = Sensorik Fahrwertgeber; 6 = Sensorik Drosselklappenwinkel; 7 = ASC; 8 = Klopfregelung |

### ARG_0X6241_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL_WERK_BEGRENZUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Drehzahlbegrenzung für das Werk: 0 == DEAKTIVIEREN; 1 == AKTIVIEREN |

### ARG_0X6242_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NOCKENWELLENDIAGNOSE_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | De-/Aktivierung Nockenwellendiagnose: 0 == DEAKTIVIEREN; 1 == AKTIVIEREN |

### ARG_0X6243_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ADAPTION_LAMBDAREGELUNG_NUMMER | - | high | unsigned char | - | - | 1.0 | 1.0 | -1.0 | 1.0 | 2.0 | Banknummer zu den übertragenen Lambdaregeladaptionsdaten |
| ADAPTION_LAMBDAREGELUNG_DATEN_DATA | DATA | high | data[288] | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten der Lambdaregelungsadaption für eine Bank |

### ARG_0X6244_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ADAPTION_GETRIEBE_NEUTRAL | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den Neutralgang in Volt |
| ADAPTION_GETRIEBE_GANG1 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 1. Gang in Volt |
| ADAPTION_GETRIEBE_GANG2 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 2. Gang in Volt |
| ADAPTION_GETRIEBE_GANG3 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 3. Gang in Volt |
| ADAPTION_GETRIEBE_GANG4 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 4. Gang in Volt |
| ADAPTION_GETRIEBE_GANG5 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 5. Gang in Volt |
| ADAPTION_GETRIEBE_GANG6 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 6. Gang in Volt |

### ARG_0X6250_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EV_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die mit EV_ANSTEUERN_NUMMER ausgewählten Einspritzventile |
| EV_ANSTEUERN_NUMMER | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | bitcodierte Angabe der anzusteuernden Einspritzventile in Zündreihenfolge, z.B. 9 -> 0b00001001 -> Ansteuerung des 1. und des 4. EVs in Zündreihenfolge |

### ARG_0X6251_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SLV_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Sekundärluftventil in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X6252_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TEV_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Tankentlüftungsventil in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| TEV_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 100.0 | Tastverhältnis der Ansteuerung des Tankentlüftungsventils in Prozent |

### ARG_0X6253_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EKP_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Elektrokraftstoffpumpe in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| EKP_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 100.0 | Tastverhältnis der Ansteuerung der Elektrokraftstoffpumpe in Prozent |

### ARG_0X6254_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELUE_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den elektrischen Motorlüfter in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X6255_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LSH_ANSTEUERN_NUMMER | - | high | unsigned char | - | - | 1.0 | 1.0 | -1.0 | - | 2.0 | Banknummer der anzusteuernden Lambdasondenheizung |
| LSH_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Lambdasondenheizung in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| LSH_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 100.0 | Tastverhältnis der Ansteuerung der Lambdasondenheizung in Prozent; war Pausenzeit in x*100ms |

### ARG_0X6256_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UETM_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Übertemperaturleuchte in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X6257_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MIL_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Motorwarnleuchte in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X6258_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AGKL_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den Abgasklappensteller in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| AGKL_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 10.0 | 90.0 | Tastverhältnis der Ansteuerung des Abgasklappenstellers in Prozent |

### ARG_0X6259_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IFRKL_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den Interferenzrohrklappensteller in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| IFRKL_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 10.0 | 90.0 | Tastverhältnis der Ansteuerung des Interferenzrohrklappenstellers in Prozent |

### ARG_0X625A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DISA_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Schaltsaugrohres in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| DISA_ANSTEUERN_SZ | 0-n | high | unsigned char | - | TAB_MR_SCHALTSAUGROHR | - | - | - | - | - | Sollzustand des Schaltsaugrohres bei Ansteuerung |

### ARG_0X625B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DKM_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung des Drosselklappenmotors in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| DKM_ANSTEUERN_START | % | high | int | - | - | 100.0 | 1.0 | 0.0 | -95.0 | 95.0 | Startposition der Ansteuerung des Drosselklappenmotors in Prozent |
| DKM_ANSTEUERN_ENDE | % | high | int | - | - | 100.0 | 1.0 | 0.0 | -95.0 | 95.0 | Endposition der Ansteuerung des Drosselklappenmotors in Prozent |
| DKM_ANSTEUERN_GRADIENT | %/s | high | unsigned long | - | - | 2.147483648E9 | 50000.0 | 0.0 | 0.0 | 99999.9999 | Gradient der Ansteuerung des Drosselklappenmotors in Prozent je Sekunde |

### ARG_0X625C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DKR_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung/Stimulierung der Drosselklappenlageregelung in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| DKR_ANSTEUERN_START | % | high | unsigned int | - | - | 65536.0 | 1600.0 | 0.0 | 0.0 | 100.0 | Startposition/-sollwert der Stimulierung der Drosselklappenlageregelung in Prozent |
| DKR_ANSTEUERN_ENDE | % | high | unsigned int | - | - | 65536.0 | 1600.0 | 0.0 | 0.0 | 100.0 | Endposition/-sollwert der Stimulierung der Drosselklappenlageregelung in Prozent |
| DKR_ANSTEUERN_GRADIENT | %/s | high | unsigned long | - | - | 2.147483648E9 | 50000.0 | 0.0 | 0.0 | 50000.0 | Gradient der Ansteuerung/Stimulierung der Drosselklappenlageregelung in Prozent je Sekunde |

### ARG_0X625D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKL_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Akustikklappenventil in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X625E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EVEKP_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der gemeinsamen Ansteuerung für die mit EVEKP_ANSTEUERN_EVNUMMER ausgewählten Einspritzventile und die EKP |
| EVEKP_ANSTEUERN_EVNUMMER | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | bitcodierte Angabe der anzusteuernden Einspritzventile in Zündreihenfolge, z.B. 9 -> 0b00001001 -> Ansteuerung des 1. und des 4. EVs in Zündreihenfolge |
| EVEKP_ANSTEUERN_PULSDAUER | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Pulsdauer der Ansteuerung der über EVEKP_ANSTEUERN_EVNUMMER ausgewählten Einspritzventile in Mikrosekunden |
| EVEKP_ANSTEUERN_EKPTV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 100.0 | Tastverhältnis der Ansteuerung der Elektrokraftstoffpumpe (bei gemeinsamer Ansteuerung mit Einspritzventilen) in Prozent |

### ARG_0X6270_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAHRGESTELLNUMMER | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | - | - | EWS-Fahrgestellnummer |

### ARG_0X6271_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHLUESSEL_NUMMER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 10.0 | Schlüsselnummer |
| SCHLUESSEL_TYP | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 3.0 | Schlüsseltyp: 1 == Geldbörsenschlüssel; 2 == Hauptschlüssel; 3 == Nachschlüssel |
| AUTOINIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Autoinit: 0 == keine automatische Initialisierung; 1 == automatische Initialisierung |
| SCHLUESSEL_SPERRE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schlüsselsperrung: 0 == nicht sperren; 1 == sperren |
| SCHLUESSEL_ANLERNZUSTAND | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schlüsselanlernzustand: 0 == Schlüssel nicht angelernt; 1 == Schlüssel angelernt |
| MSC_HANDLING | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | mechanischen Schlüsselcode nicht lesen (Geldbörsenschlüssel) bzw. schreiben (andere Schlüssel): 0 ==  aktiv; 1 == inaktiv |
| SCHLUESSEL_ID | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Schlüsselidentifier |
| SECRET_KEY | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | - | - | Secret Key des Schlüssel |
| PASSWORD | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Secret Key des Schlüssel |

### ARG_0X6272_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAG | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 31.0 | Tag des Schlüsselanlerndatums |
| MONAT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | Monat des Schlüsselanlerndatums |
| JAHR | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 2009.0 | 2256.0 | Jahr des Schlüsselanlerndatums |
| ORT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ort des Schlüsselanlernens |

### ARG_0X6273_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STARTCODE | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Startcode zum Starten des EWS-Schlüsselanlernprozesses |

### ARG_0X6274_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHLUESSELCODE | TEXT | high | string[5] | - | - | 1.0 | 1.0 | 0.0 | - | - | mechanischer Schlüsselcode in ASCII |

### ARG_0X6275_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERRIEGELUNGCODE | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Code zur Verriegelung des SGs |

### ARG_0X6276_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHLUESSEL_NUMMER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 10.0 | Nummer des zu sperrenden Schlüssels |

### ARG_0X6277_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHLUESSEL_NUMMER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 10.0 | Nummer des freizugebenden Schlüssels |

### ARG_0X6279_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHLUESSEL_NUMBER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 10.0 | Nummer des Schlüssels, dessen Daten ausgelesen werden sollen |

### ARG_0X6282_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERVICE_KMSTAND | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Servicekilometerstand |

### ARG_0X6283_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERVICE_DATUM | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Servicedatum |

### ARG_0X6284_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GESAMTWEGSTRECKE | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | redundanter Gesamtwegstreckenzähler in Kilometer |

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
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 3 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021200 | Energiesparmodus aktiv | 0 |
| 0x21F500 | Abgasklappe Endstufe, Kurzschluss nach Masse | 0 |
| 0x21F501 | Abgasklappe Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21F502 | Abgasklappe Endstufe, Leitungsabfall | 0 |
| 0x21F503 | Abgasklappe Endstufe, Übertemperatur | 0 |
| 0x21F510 | Akustikklappe Endstufe, Kurzschluss nach Masse | 0 |
| 0x21F511 | Akustikklappe Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21F512 | Akustikklappe Endstufe, Leitungsabfall | 0 |
| 0x21F513 | Akustikklappe Endstufe, Übertemperatur | 0 |
| 0x21F520 | elektrische Kraftstoffpumpe Endstufe, Kurzschluss nach Masse | 0 |
| 0x21F521 | elektrische Kraftstoffpumpe Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21F522 | elektrische Kraftstoffpumpe Endstufe, Leitungsabfall | 0 |
| 0x21F523 | elektrische Kraftstoffpumpe Endstufe, Übertemperatur | 0 |
| 0x21F530 | Interferenzrohrklappe Endstufe, Kurzschluss nach Masse | 0 |
| 0x21F531 | Interferenzrohrklappe Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21F532 | Interferenzrohrklappe Endstufe, Leitungsabfall | 0 |
| 0x21F533 | Interferenzrohrklappe Endstufe, Übertemperatur | 0 |
| 0x21F540 | Lambdasondenheizung 1 Endstufe, Kurzschluss nach Masse | 0 |
| 0x21F541 | Lambdasondenheizung 1 Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21F542 | Lambdasondenheizung 1 Endstufe, Leitungsabfall | 0 |
| 0x21F543 | Lambdasondenheizung 1 Endstufe, Übertemperatur | 0 |
| 0x21F550 | Lambdasondenheizung 2 Endstufe, Kurzschluss nach Masse | 0 |
| 0x21F551 | Lambdasondenheizung 2 Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21F552 | Lambdasondenheizung 2 Endstufe, Leitungsabfall | 0 |
| 0x21F553 | Lambdasondenheizung 2 Endstufe, Übertemperatur | 0 |
| 0x21F560 | Lambdasondenheizung 3 Endstufe, Kurzschluss nach Masse | 0 |
| 0x21F561 | Lambdasondenheizung 3 Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21F562 | Lambdasondenheizung 3 Endstufe, Leitungsabfall | 0 |
| 0x21F563 | Lambdasondenheizung 3 Endstufe, Übertemperatur | 0 |
| 0x21F570 | Lambdasondenheizung 4 Endstufe, Kurzschluss nach Masse | 0 |
| 0x21F571 | Lambdasondenheizung 4 Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21F572 | Lambdasondenheizung 4 Endstufe, Leitungsabfall | 0 |
| 0x21F573 | Lambdasondenheizung 4 Endstufe, Übertemperatur | 0 |
| 0x21F580 | Sekundärluftventil Endstufe, Kurzschluss nach Masse | 0 |
| 0x21F581 | Sekundärluftventil Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21F582 | Sekundärluftventil Endstufe, Leitungsabfall | 0 |
| 0x21F583 | Sekundärluftventil Endstufe, Übertemperatur | 0 |
| 0x21F590 | Starterrelais Endstufe, Kurzschluss nach Masse | 0 |
| 0x21F591 | Starterrelais Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21F592 | Starterrelais Endstufe, Leitungsabfall | 0 |
| 0x21F593 | Starterrelais Endstufe, Übertemperatur | 0 |
| 0x21F5A0 | Tankentlüftungsventil Endstufe, Kurzschluss nach Masse | 0 |
| 0x21F5A1 | Tankentlüftungsventil Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21F5A2 | Tankentlüftungsventil Endstufe, Leitungsabfall | 0 |
| 0x21F5A3 | Tankentlüftungsventil Endstufe, Übertemperatur | 0 |
| 0x21F5B0 | VANOS 1 Endstufe, Kurzschluss nach Masse | 0 |
| 0x21F5B1 | VANOS 1 Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21F5B2 | VANOS 1 Endstufe, Leitungsabfall | 0 |
| 0x21F5B3 | VANOS 1 Endstufe, Übertemperatur | 0 |
| 0x21F5C0 | VANOS 2 Endstufe, Kurzschluss nach Masse | 0 |
| 0x21F5C1 | VANOS 2 Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21F5C2 | VANOS 2 Endstufe, Leitungsabfall | 0 |
| 0x21F5C3 | VANOS 2 Endstufe, Übertemperatur | 0 |
| 0x21F5D0 | Schaltsaugrohr Endstufe, Kurzschluss nach Masse | 0 |
| 0x21F5D1 | Schaltsaugrohr Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21F5D2 | Schaltsaugrohr Endstufe, Leitungsabfall | 0 |
| 0x21F5D3 | Schaltsaugrohr Endstufe, Übertemperatur | 0 |
| 0x21F5E0 | Elektrokraftstoffpumpe Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Überstrom | 0 |
| 0x21F5E1 | Elektrokraftstoffpumpe Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Unterspannung | 0 |
| 0x21F5E2 | Elektrokraftstoffpumpe Bauteileschutz Sicherungsfunktion, Überstrom | 0 |
| 0x21F5F0 | System Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Überstrom | 0 |
| 0x21F5F1 | System Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Unterspannung | 0 |
| 0x21F5F2 | System Bauteileschutz Sicherungsfunktion, Überstrom | 0 |
| 0x21F600 | Zündung Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Überstrom | 0 |
| 0x21F601 | Zündung Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Unterspannung | 0 |
| 0x21F602 | Zündung Bauteileschutz Sicherungsfunktion, Überstrom | 0 |
| 0x21F610 | E-Lüfter Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Überstrom | 0 |
| 0x21F611 | E-Lüfter Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Unterspannung | 0 |
| 0x21F612 | E-Lüfter Bauteileschutz Sicherungsfunktion, Überstrom | 0 |
| 0x21F620 | Killschalter, Signal prellt zu stark | 0 |
| 0x21F630 | Klemme 15, unplausibles Signal oder Wert | 0 |
| 0x21F641 | Batterie, Spannung zu niedrig | 0 |
| 0x21F650 | Kupplungsschalter, Fehler Plausibilisierung beider Kupplungsschalter | 0 |
| 0x21F651 | Kupplungsschalter, Fehler Plausibilisierung Kupplungsschalter im Schubbetrieb | 0 |
| 0x21F660 | Getriebeschaltwalzenpotentiometer, Signal oder Wert oberhalb Schwelle | 0 |
| 0x21F661 | Getriebeschaltwalzenpotentiometer, Signal oder Wert unterhalb Schwelle | 0 |
| 0x21F662 | Getriebeschaltwalzenpotentiometer, unplausibles Signal oder Wert | 0 |
| 0x21F670 | Schalthebelsensor, Spannung oberhalb Schwelle | 0 |
| 0x21F671 | Schalthebelsensor, Spannung unterhalb Schwelle | 0 |
| 0x21F672 | Schalthebelsensor, unplausible Spannung | 0 |
| 0x21F681 | CAN-Botschaft Eingang Schalterblock Links, Fehler Alive-Counter | 1 |
| 0x21F682 | CAN-Botschaft Eingang Schalterblock Links, Fehler CRC | 1 |
| 0x21F683 | CAN-Botschaft Eingang Schalterblock Links, Fehler Overrun | 1 |
| 0x21F691 | CAN-Botschaft Geschwindigkeit, Fehler Alive-Counter | 1 |
| 0x21F692 | CAN-Botschaft Geschwindigkeit, Fehler CRC | 1 |
| 0x21F693 | CAN-Botschaft Geschwindigkeit, Fehler Overrun | 1 |
| 0x21F6A1 | CAN-Botschaft Sensorbox ID1, Fehler Alive-Counter | 1 |
| 0x21F6A2 | CAN-Botschaft Sensorbox ID1, Fehler CRC | 1 |
| 0x21F6A3 | CAN-Botschaft Sensorbox ID1, Fehler Overrun | 1 |
| 0x21F6B1 | CAN-Botschaft Sensorbox ID4, Fehler Alive-Counter | 1 |
| 0x21F6B2 | CAN-Botschaft Sensorbox ID4, Fehler CRC | 1 |
| 0x21F6B3 | CAN-Botschaft Sensorbox ID4, Fehler Overrun | 1 |
| 0x21F6C0 | Fahrzeuggeschwindigkeit CAN, kein Signal oder Wert | 0 |
| 0x21F6C1 | Fahrzeuggeschwindigkeit CAN, unplausibles Signal, Vorderrad-Sensor | 1 |
| 0x21F6C2 | Fahrzeuggeschwindigkeit CAN, unplausibles Signal, Hinterrad-Sensor | 1 |
| 0x21F6E0 | Bremslichtschalter hinten, Signal oder Wert oberhalb Schwelle | 1 |
| 0x21F6F0 | Bremslichtschalter vorne, Signal oder Wert oberhalb Schwelle | 1 |
| 0x21F700 | Sensorbox, Fehler Spannungsversorgung | 0 |
| 0x21F701 | Sensorbox, Zeitüberschreitung CAN-Nachricht | 0 |
| 0x21F702 | Sensorbox, Sensor- oder Signalfehler | 0 |
| 0x21F710 | Sturzsensor, Kurzschluss nach UBatt | 0 |
| 0x21F711 | Sturzsensor, Kurzschluss nach Masse | 0 |
| 0x21F712 | Sturzsensor, Sturz erkannt | 0 |
| 0x21F720 | Hinterradgeschwindigkeit ABS, unplausibles Signal oder Wert | 0 |
| 0x21F730 | Vorderradgeschwindigkeit ABS, unplausibles Signal oder Wert | 0 |
| 0x21F740 | ASC-ABS-Taster, unplausibles Signal oder Wert | 0 |
| 0x21F750 | Ölniveaugeber, Sensorfehler | 0 |
| 0x21F760 | Ölniveaugeber, Ölstand zu hoch | 0 |
| 0x21F761 | Ölniveaugeber, Ölstand zu niedrig | 0 |
| 0x21F770 | Umgebungsdrucksensor, Signal oder Wert oberhalb Schwelle | 0 |
| 0x21F771 | Umgebungsdrucksensor, Signal oder Wert unterhalb Schwelle | 0 |
| 0x21F772 | Umgebungsdrucksensor, unplausibles Signal oder Wert | 0 |
| 0x21F780 | Temperatursensor, Ansaugluft, Signal oder Wert unterhalb Schwelle | 0 |
| 0x21F781 | Temperatursensor, Ansaugluft, Signal oder Wert oberhalb Schwelle | 0 |
| 0x21F782 | Temperatursensor, Ansaugluft, unplausibles Signal oder Wert | 0 |
| 0x21F790 | Temperatursensor, Motor, Signal oder Wert oberhalb Schwelle | 0 |
| 0x21F791 | Temperatursensor, Motor, Signal oder Wert unterhalb Schwelle | 0 |
| 0x21F792 | Temperatursensor, Motor, unplausibles Signal oder Wert | 0 |
| 0x21F7A0 | Temperatursensor, Öl, Signal oder Wert oberhalb Schwelle | 0 |
| 0x21F7A1 | Temperatursensor, Öl, Signal oder Wert unterhalb Schwelle | 0 |
| 0x21F7F0 | Leerlaufsteller offen, Überdrehzahlfehler | 0 |
| 0x21F7F1 | Leerlaufsteller geschlossen, Unterdrehzahlfehler | 0 |
| 0x21F820 | Kraftstoffdruck, Signal oder Wert oberhalb Schwelle | 0 |
| 0x21F821 | Kraftstoffdruck, Signal oder Wert unterhalb Schwelle | 0 |
| 0x21F822 | Kraftstoffdruck, unplausibles Signal oder Wert | 0 |
| 0x21F850 | elektrisches Kraftstoffsystem, Signal oder Wert unterhalb Schwelle | 0 |
| 0x21F860 | Lambdasonde vor Kat, Signal oder Wert unterhalb Schwelle | 0 |
| 0x21F861 | Lambdasonde vor Kat, Signal oder Wert oberhalb Schwelle | 0 |
| 0x21F862 | Lambdasonde vor Kat, kein Signal oder Wert | 0 |
| 0x21F863 | Lambdasonde vor Kat, unplausibles Signal oder Wert | 0 |
| 0x21F870 | Lambdasonde 2 vor Kat, Signal oder Wert unterhalb Schwelle | 0 |
| 0x21F871 | Lambdasonde 2 vor Kat, Signal oder Wert oberhalb Schwelle | 0 |
| 0x21F872 | Lambdasonde 2 vor Kat, kein Signal oder Wert | 0 |
| 0x21F873 | Lambdasonde 2 vor Kat, unplausibles Signal oder Wert | 0 |
| 0x21F950 | Fahrwertgeber, Vergleichsfehler, Rohwerte | 0 |
| 0x21F951 | Fahrwertgeber, Vergleichsfehler, adaptierte Werte | 0 |
| 0x21F952 | Fahrwertgeber, Sensor, Kanal 1, MIN-Bereichsfehler | 0 |
| 0x21F953 | Fahrwertgeber, Sensor, Kanal 1, MAX-Bereichsfehler | 0 |
| 0x21F954 | Fahrwertgeber, Sensor, Kanal 2, MIN-Bereichsfehler | 0 |
| 0x21F955 | Fahrwertgeber, Sensor, Kanal 2, MAX-Bereichsfehler | 0 |
| 0x21F956 | Fahrwertgeber, Adaption nicht abgeschlossen | 0 |
| 0x21F960 | Drosselklappe 1, Vergleichsfehler, adaptierte Werte | 0 |
| 0x21F961 | Drosselklappe 1, Vergleichsfehler, Rohwerte | 0 |
| 0x21F962 | Drosselklappe 1, Sensor, Kanal 1, MIN-Bereichsfehler | 0 |
| 0x21F963 | Drosselklappe 1, Sensor, Kanal 1, MAX-Bereichsfehler | 0 |
| 0x21F964 | Drosselklappe 1, Sensor, Kanal 2, MIN-Bereichsfehler | 0 |
| 0x21F965 | Drosselklappe 1, Sensor, Kanal 2, MAX-Bereichsfehler | 0 |
| 0x21F970 | Drosselklappe 1, Initialisierung, Fehler Adaption | 0 |
| 0x21F971 | Drosselklappe 1, Initialisierung, Fehler Abschaltpfad oder Notlaufpunkt | 0 |
| 0x21F972 | Drosselklappe 1, Initialisierung, Fehler DK-Motor | 0 |
| 0x21F980 | Drosselklappe 1, Regelung, Regelanschlag oben | 0 |
| 0x21F981 | Drosselklappe 1, Regelung, Regelanschlag unten | 0 |
| 0x21F982 | Drosselklappe 1, Regelung, Lageregelung instabil | 0 |
| 0x21F983 | Drosselklappe 1, Regelung, Abweichung Ist-Sollwert | 0 |
| 0x21F9A0 | Drosselklappe 2, Vergleichsfehler, adaptierte Werte | 0 |
| 0x21F9A1 | Drosselklappe 2, Vergleichsfehler, Rohwerte | 0 |
| 0x21F9A2 | Drosselklappe 2, Sensor, Kanal 1, MIN-Bereichsfehler | 0 |
| 0x21F9A3 | Drosselklappe 2, Sensor, Kanal 1, MAX-Bereichsfehler | 0 |
| 0x21F9A4 | Drosselklappe 2, Sensor, Kanal 2, MIN-Bereichsfehler | 0 |
| 0x21F9A5 | Drosselklappe 2, Sensor, Kanal 2, MAX-Bereichsfehler | 0 |
| 0x21F9B0 | Drosselklappe 2, Initialisierung, Fehler Adaption | 0 |
| 0x21F9B1 | Drosselklappe 2, Initialisierung, Fehler Abschaltpfad oder Notlaufpunkt | 0 |
| 0x21F9B2 | Drosselklappe 2, Initialisierung, Fehler DK-Motor | 0 |
| 0x21F9C0 | Drosselklappe 2, Regelung, Regelanschlag oben | 0 |
| 0x21F9C1 | Drosselklappe 2, Regelung, Regelanschlag unten | 0 |
| 0x21F9C2 | Drosselklappe 2, Regelung, Lageregelung instabil | 0 |
| 0x21F9C3 | Drosselklappe 2, Regelung, Abweichung Ist-Sollwert | 0 |
| 0x21F9E0 | Sicherheitskonzept Überwachung Drosselklappenwinkel 1, Abweichung FWG/DK1-Winkel, Rohwerte | 0 |
| 0x21F9E1 | Sicherheitskonzept Überwachung Drosselklappenwinkel 1, Abweichung FWG/DK1-Winkel, adaptierte Werte | 0 |
| 0x21F9F1 | Fahrgeschwindigkeitsregler, SET-Schalter gesetzt bei Hauptschalter aus | 0 |
| 0x21F9F2 | Fahrgeschwindigkeitsregler, RES-Schalter gesetzt bei Hauptschalter aus | 0 |
| 0x21F9F3 | Fahrgeschwindigkeitsregler, SET- und RES-Schalter gleichzeitig gesetzt | 0 |
| 0x21F9F4 | Fahrgeschwindigkeitsregler, Abschaltung über Schlechtwegerkennung SAF | 0 |
| 0x21FA00 | EWS3, Logistikdatenfehler | 0 |
| 0x21FA01 | EWS3, Signalfehler | 0 |
| 0x21FA10 | EWS4, CAN, Timeout Response CAS | 0 |
| 0x21FA11 | EWS4, CAN, Response CAS nicht authentisch | 0 |
| 0x21FA12 | EWS4, CAN, Nachricht ungültig | 0 |
| 0x21FA13 | EWS4, Datenablage, Schreibfehler | 0 |
| 0x21FA14 | EWS4, Datenablage, Plausibilitätsfehler | 0 |
| 0x21FA15 | EWS4, kein SecretKey programmiert | 0 |
| 0x21FA20 | Abgasklappe, Stellmotor, unplausibles Signal oder Wert | 0 |
| 0x21FA21 | Abgasklappe, Stellmotor, Fehler Abgleich | 0 |
| 0x21FA22 | Abgasklappe, Stellmotor, mechanischer Fehler oder Blockade | 0 |
| 0x21FA23 | Abgasklappe, Stellmotor, keine Rückmeldung | 0 |
| 0x21FA30 | Interferenzrohrklappe, Stellmotor, unplausibles Signal oder Wert | 0 |
| 0x21FA31 | Interferenzrohrklappe, Stellmotor, Fehler Abgleich | 0 |
| 0x21FA32 | Interferenzrohrklappe, Stellmotor, mechanischer Fehler oder Blockade | 0 |
| 0x21FA33 | Interferenzrohrklappe, Stellmotor, keine Rückmeldung | 0 |
| 0x21FA40 | Motorlüfter, Signal oder Wert unterhalb Schwelle | 0 |
| 0x21FA41 | Motorlüfter, Signal oder Wert oberhalb Schwelle | 0 |
| 0x21FA90 | Sicherheitskonzept Überwachung Drosselklappenwinkel 2, Abweichung FWG/DK2-Winkel, Rohwerte | 0 |
| 0x21FA91 | Sicherheitskonzept Überwachung Drosselklappenwinkel 2, Abweichung FWG/DK2-Winkel, adaptierte Werte | 0 |
| 0x21FAA0 | Ebene 2, Überwachung, Drehzahl | 0 |
| 0x21FAA1 | Ebene 2, Überwachung, Notlauf | 0 |
| 0x21FAA2 | Ebene 2, Überwachung, Drosselklappe 1 | 0 |
| 0x21FAA3 | Ebene 2, Überwachung, Drosselklappe 2 | 0 |
| 0x21FAA4 | Ebene 2, Überwachung, Fahrwertgeber | 0 |
| 0x21FAA5 | Ebene 2, Tempomat, Sollwertüberschreitung, Drosselklappe 1 | 0 |
| 0x21FAA6 | Ebene 2, Tempomat, Sollwertüberschreitung, Drosselklappe 2 | 0 |
| 0x21FAA7 | Ebene 2, Überwachung, Motortemperatur | 0 |
| 0x21FAA8 | Ebene 2, Sollwertüberschreitung, Drosselklappe 1 | 0 |
| 0x21FAA9 | Ebene 2, Sollwertüberschreitung, Drosselklappe 2 | 0 |
| 0x21FAAA | Ebene 2, Vergleichsfehler, Berechnungswerte Ebene 1 | 0 |
| 0x21FAAB | Ebene 2, Berechnung, Fahrzeugmodus | 0 |
| 0x21FAAC | Ebene 2, Überwachung, Fehlerreaktion | 0 |
| 0x21FAAD | Ebene 2, Berechnung, Zündwinkel | 0 |
| 0x21FAAE | Ebene 2, Berechnung, Sollwert, Drosselklappe 1 | 0 |
| 0x21FAAF | Ebene 2, Berechnung, Sollwert, Drosselklappe 2 | 0 |
| 0x21FAB3 | CAN-Botschaft Bedienung Fahrzeug, Fehler Overrun | 1 |
| 0x21FAC3 | CAN-Botschaft Kombidaten, Fehler Overrun | 1 |
| 0x21FAD3 | CAN-Botschaft Status Fahrzeug Zugriff, Fehler Overrun | 1 |
| 0x21FAE0 | Hauptrelais Endstufe, Kurzschluss nach Masse | 0 |
| 0x21FAE1 | Hauptrelais Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21FAE2 | Hauptrelais Endstufe, Leitungsabfall | 0 |
| 0x21FAF0 | Elektrokraftstoffpumpe, Sperrung | 0 |
| 0x21FB00 | Klopfregelung, Fehler Signalerfassung | 0 |
| 0x21FB01 | Klopfregelung, Klopfsensor 1, Leitungsabfall | 0 |
| 0x21FB02 | Klopfregelung, Klopfsensor 2, Leitungsabfall | 0 |
| 0x21FB10 | Längsbeschleunigungssensor, Signal unplausibel | 0 |
| 0x21FB20 | Seitenstützenschalter, Signale beider Kanäle zueinander unplausibel | 0 |
| 0x21FB21 | Seitenstützenschalter, nicht eingeklappter Seitenstützständer während der Fahrt | 0 |
| 0x21FB22 | Seitenstützenschalter, unplausible Signale während der Fahrt | 0 |
| 0x21FB31 | CAN-Botschaft Sensorbox ID7, Fehler Alive-Counter | 1 |
| 0x21FB32 | CAN-Botschaft Sensorbox ID7, Fehler CRC | 1 |
| 0x21FB33 | CAN-Botschaft Sensorbox ID7, Fehler Overrun | 1 |
| 0x21FB41 | CAN-Botschaft Steuerung Einstellung, Fehler Alive-Counter | 1 |
| 0x21FB42 | CAN-Botschaft Steuerung Einstellung, Fehler CRC | 1 |
| 0x21FB43 | CAN-Botschaft Steuerung Einstellung, Fehler Overrun | 1 |
| 0x21FB50 | Ebene 2, Schaltassistent | 0 |
| 0x21FB80 | Startfreigabe Sonderzubehör, Sperrung, fehlende Bedatung oder Freischaltcode | 0 |
| 0x21FB81 | Startfreigabe Sonderzubehör, falsche Konfiguration | 0 |
| 0x21FC03 | CAN-Botschaft Status Federbein Verstellung, Fehler Overrun | 1 |
| 0x21FCC3 | CAN-Botschaft Steuerung Einstellung 2, Fehler Overrun | 1 |
| 0x21FCE0 | Unterstützung Gangwechsel, Grenzwertüberschreitung Drosselklappen-Zähler | 0 |
| 0x21FD00 | Codierung : falsches Fahrzeug | 0 |
| 0x21FD01 | Codierung : unplausible Daten während Transaktion | 0 |
| 0x21FD02 | Codierung : Steuergerät ist nicht codiert | 0 |
| 0x21FD03 | Codierung : Codiersignaturfehler | 0 |
| 0x21FD04 | Codierung : Codierdatenübertragungsfehler | 0 |
| 0x21FD10 | SPI-Kommunikation TriCore <-> CY320 | 0 |
| 0x21FD21 | EEPROM: Lesen mehrerer Blöcke fehlgeschlagen | 0 |
| 0x21FD30 | Nockenwelle, Einlass, keine Signalflanke vorhanden, Eingangspegel high | 0 |
| 0x21FD31 | Nockenwelle, Einlass, keine Signalflanke vorhanden, Eingangspegel low | 0 |
| 0x21FD32 | Nockenwelle, Einlass, Anzahl und-oder Position der Flanken unplausibel | 0 |
| 0x21FD40 | Nockenwelle, Auslass, keine Signalflanke vorhanden, Eingangspegel high | 0 |
| 0x21FD41 | Nockenwelle, Auslass, keine Signalflanke vorhanden, Eingangspegel low | 0 |
| 0x21FD42 | Nockenwelle, Auslass, Anzahl und-oder Position der Flanken unplausibel | 0 |
| 0x21FD50 | Kurbelwelle, Signalstörung | 0 |
| 0x21FD51 | Kurbelwelle, Signalausfall | 0 |
| 0x21FD60 | Einspritzventil Zylinder 1 in Zündreihenfolge, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21FD61 | Einspritzventil Zylinder 1 in Zündreihenfolge, Endstufe, Kurzschluss nach Masse | 0 |
| 0x21FD62 | Einspritzventil Zylinder 1 in Zündreihenfolge, Endstufe, Leitungsabfall | 0 |
| 0x21FD70 | Einspritzventil Zylinder 2 in Zündreihenfolge, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21FD71 | Einspritzventil Zylinder 2 in Zündreihenfolge, Endstufe, Kurzschluss nach Masse | 0 |
| 0x21FD72 | Einspritzventil Zylinder 2 in Zündreihenfolge, Endstufe, Leitungsabfall | 0 |
| 0x21FD80 | Einspritzventil Zylinder 3 in Zündreihenfolge, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21FD81 | Einspritzventil Zylinder 3 in Zündreihenfolge, Endstufe, Kurzschluss nach Masse | 0 |
| 0x21FD82 | Einspritzventil Zylinder 3 in Zündreihenfolge, Endstufe, Leitungsabfall | 0 |
| 0x21FD90 | Einspritzventil Zylinder 4 in Zündreihenfolge, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21FD91 | Einspritzventil Zylinder 4 in Zündreihenfolge, Endstufe, Kurzschluss nach Masse | 0 |
| 0x21FD92 | Einspritzventil Zylinder 4 in Zündreihenfolge, Endstufe, Leitungsabfall | 0 |
| 0x21FDA0 | Einspritzventil Zylinder 5 oder EV 2 Zylinder 1 bei Saugrohrdusche in Zündreihenfolge, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21FDA1 | Einspritzventil Zylinder 5 oder EV 2 Zylinder 1 bei Saugrohrdusche in Zündreihenfolge, Endstufe, Kurzschluss nach Masse | 0 |
| 0x21FDA2 | Einspritzventil Zylinder 5 oder EV 2 Zylinder 1 bei Saugrohrdusche in Zündreihenfolge, Endstufe, Leitungsabfall | 0 |
| 0x21FDB0 | Einspritzventil Zylinder 6 oder EV 2 Zylinder 2 bei Saugrohrdusche in Zündreihenfolge, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21FDB1 | Einspritzventil Zylinder 6 oder EV 2 Zylinder 2 bei Saugrohrdusche in Zündreihenfolge, Endstufe, Kurzschluss nach Masse | 0 |
| 0x21FDB2 | Einspritzventil Zylinder 6 oder EV 2 Zylinder 2 bei Saugrohrdusche in Zündreihenfolge, Endstufe, Leitungsabfall | 0 |
| 0x21FDC0 | Einspritzventil 2 Zylinder 3 bei Saugrohrdusche in Zündreihenfolge, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21FDC1 | Einspritzventil 2 Zylinder 3 bei Saugrohrdusche in Zündreihenfolge, Endstufe, Kurzschluss nach Masse | 0 |
| 0x21FDC2 | Einspritzventil 2 Zylinder 3 bei Saugrohrdusche in Zündreihenfolge, Endstufe, Leitungsabfall | 0 |
| 0x21FDD0 | Einspritzventil 2 Zylinder 4 bei Saugrohrdusche in Zündreihenfolge, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x21FDD1 | Einspritzventil 2 Zylinder 4 bei Saugrohrdusche in Zündreihenfolge, Endstufe, Kurzschluss nach Masse | 0 |
| 0x21FDD2 | Einspritzventil 2 Zylinder 4 bei Saugrohrdusche in Zündreihenfolge, Endstufe, Leitungsabfall | 0 |
| 0x21FE00 | Zündung, Endstufe, Identifikation Bausteintreiber | 0 |
| 0x21FE01 | Zündung, Endstufe, Initialisierung CK200 | 0 |
| 0x21FE02 | Zündung, Endstufe, SPI-Kommunikation | 0 |
| 0x21FE10 | Zündendstufe 1 in Zündreihenfolge, Ansteuerung, Kurzschluss nach UBatt | 0 |
| 0x21FE11 | Zündendstufe 1 in Zündreihenfolge, Ansteuerung, Kurzschluss nach Masse | 0 |
| 0x21FE12 | Zündendstufe 1 in Zündreihenfolge, Ansteuerung, Leitungsabfall | 0 |
| 0x21FE20 | Zündendstufe 2 in Zündreihenfolge, Ansteuerung, Kurzschluss nach UBatt | 0 |
| 0x21FE21 | Zündendstufe 2 in Zündreihenfolge, Ansteuerung, Kurzschluss nach Masse | 0 |
| 0x21FE22 | Zündendstufe 2 in Zündreihenfolge, Ansteuerung, Leitungsabfall | 0 |
| 0x21FE30 | Zündendstufe 3 in Zündreihenfolge, Ansteuerung, Kurzschluss nach UBatt | 0 |
| 0x21FE31 | Zündendstufe 3 in Zündreihenfolge, Ansteuerung, Kurzschluss nach Masse | 0 |
| 0x21FE32 | Zündendstufe 3 in Zündreihenfolge, Ansteuerung, Leitungsabfall | 0 |
| 0x21FE40 | Zündendstufe 4 in Zündreihenfolge, Ansteuerung, Kurzschluss nach UBatt | 0 |
| 0x21FE41 | Zündendstufe 4 in Zündreihenfolge, Ansteuerung, Kurzschluss nach Masse | 0 |
| 0x21FE42 | Zündendstufe 4 in Zündreihenfolge, Ansteuerung, Leitungsabfall | 0 |
| 0x21FE50 | Zündendstufe 5 in Zündreihenfolge, Ansteuerung, Kurzschluss nach UBatt | 0 |
| 0x21FE51 | Zündendstufe 5 in Zündreihenfolge, Ansteuerung, Kurzschluss nach Masse | 0 |
| 0x21FE52 | Zündendstufe 5 in Zündreihenfolge, Ansteuerung, Leitungsabfall | 0 |
| 0x21FE60 | Zündendstufe 6 in Zündreihenfolge, Ansteuerung, Kurzschluss nach UBatt | 0 |
| 0x21FE61 | Zündendstufe 6 in Zündreihenfolge, Ansteuerung, Kurzschluss nach Masse | 0 |
| 0x21FE62 | Zündendstufe 6 in Zündreihenfolge, Ansteuerung, Leitungsabfall | 0 |
| 0x21FE70 | Klopfsensor 1, Leitung A, Kurzschluss nach UBatt | 0 |
| 0x21FE71 | Klopfsensor 1, Leitung A, Kurzschluss nach Masse | 0 |
| 0x21FE80 | Klopfsensor 1, Leitung B, Kurzschluss nach UBatt | 0 |
| 0x21FE81 | Klopfsensor 1, Leitung B, Kurzschluss nach Masse | 0 |
| 0x21FE90 | Klopfsensor 2, Leitung A, Kurzschluss nach UBatt | 0 |
| 0x21FE91 | Klopfsensor 2, Leitung A, Kurzschluss nach Masse | 0 |
| 0x21FEA0 | Klopfsensor 2, Leitung B, Kurzschluss nach UBatt | 0 |
| 0x21FEA1 | Klopfsensor 2, Leitung B, Kurzschluss nach Masse | 0 |
| 0x21FEB0 | Funktionsüberwachung, Prüfung ADC-Leerlauftestimpuls | 0 |
| 0x21FEB1 | Funktionsüberwachung, Prüfung ADC-Testspannung | 0 |
| 0x21FEB2 | Funktionsüberwachung, Überwachungsmodul | 0 |
| 0x21FEC0 | Spannungsversorgung 1 intern, 5V, Überspannung | 0 |
| 0x21FEC1 | Spannungsversorgung 1 intern, 5V, Unterspannung | 0 |
| 0x21FED0 | Spannungsversorgung 2 intern, 5V, Überspannung | 0 |
| 0x21FED1 | Spannungsversorgung 2 intern, 5V, Unterspannung | 0 |
| 0x21FEE0 | Spannungsversorgung Sensoren 1, Überwachung | 0 |
| 0x21FEE1 | Spannungsversorgung Sensoren 2, Überwachung | 0 |
| 0x21FEE2 | Spannungsversorgung Sensoren 3, Überwachung | 0 |
| 0x21FF01 | CAN, Knoten B, BusOff Fehler | 0 |
| 0x21FF02 | CAN, Knoten C - Diagnose-CAN, BusOff Fehler | 0 |
| 0x21FF03 | CAN, Knoten D - Applikations-CAN, BusOff Fehler | 0 |
| 0x21FF04 | CAN, Fehler Hardware | 0 |
| 0xCD845F | CAN, Knoten A - Fahrzeug-CAN, BusOff Fehler | 1 |
| 0xCD941C | CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9420 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0xCD9422 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9426 | CAN KOMBI Nachricht Kombidaten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD942C | CAN SEB Nachricht Sensorbox_ID1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD942E | CAN SEB Nachricht Sensorbox_ID4_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9436 | CAN SLZ Nachricht Status_Fahrzeug_Zugriff_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xCD9438 | CAN ESA-SAF Nachricht Status_Federbein_Verstellung_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9462 | CAN KOMBI Nachricht Steuerung_Einstellung_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9468 | CAN SEB Nachricht Sensorbox_ID7_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD948C | CAN KOMBI Nachricht Steuerung_Einstellung_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD948D | CAN KOMBI Nachricht Steuerung_Einstellung_2_Motorrad_2010: Alive Fehler | 1 |
| 0xCD948E | CAN KOMBI Nachricht Steuerung_Einstellung_2_Motorrad_2010: CRC Fehler | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x629D | Ansauglufttemperatur (tans_w) | Grad C | high | signed int | - | 0,05 | 1 | 0 |
| 0x629E | Batteriespannung (ub_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x629F | Drosselklappenwinkel bezogen auf DK- Anschlag (wdkba_w) | %DK | high | signed int | - | 1600 | 65536 | 0 |
| 0x62A0 | Motortemperatur (tmot_w) | Grad C | high | signed int | - | 0,05 | 1 | 0 |
| 0x62A1 | Lambda Regelfaktor Bank 1 (fr_w[0]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x62A2 | Lambda Regelfaktor Bank 2 (fr_w[1]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x62A3 | relative Luftfüllung (rl_w) | % | high | unsigned int | - | 0,75 | 32 | 0 |
| 0x62A4 | Motordrehzahl (nmot_w) | U/min | high | unsigned int | - | 0,25 | 1 | 0 |
| 0x62A5 | Fahrzeuggeschwindigkeit (vfzg_w) | km/h | high | unsigned int | - | 512 | 65536 | 0 |
| 0x62A6 | Spannung System-BTS (uubts_sys_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62A7 | Spannung Zündungs-BTS (uubts_zdg_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62A8 | Spannung EKP-BTS (uubts_ekp_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62A9 | Spannung ELUE-BTS (uubts_elue_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62AA | Abgastemperatur vor Kat aus Modell (für LSH bei Boxer-Motoren); (tabgmls) | Grad C | high | signed int | - | 0,05 | 1 | 0 |
| 0x62AB | Lambdasondenspannung Bank 1 (usvk_w[0]) | V | high | signed int | - | 0,001 | 1 | 0 |
| 0x62AC | Lambdasondenspannung Bank 2 (usvk_w[1]) | V | high | signed int | - | 0,001 | 1 | 0 |
| 0x62AD | reserviert | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x62AE | Spannungswert von Getriebeschaltwalze (ugetrg_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62AF | Zeit nach Motorstart(tnse_w) | s | high | unsigned int | - | 0,1 | 1 | 0 |
| 0x62B0 | Einspritzzeit(te_w) | ms | high | unsigned int | - | 8 | 1000 | 0 |
| 0x62B1 | Letzter berechneter Zündwinkel (zw) | Grad KW | low | signed int | - | 191,25 | 65280 | 0 |
| 0x62B2 | ADC-Spannung Ansauglufttemperatur (utans_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62B3 | Spannung Drosselklappenwinkel 1 von DK 1 (udkp1r_0) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62B4 | Spannung Drosselklappenwinkel 1 von DK 2 (udkp1r_1) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62B5 | Spannung Drosselklappenwinkel 2 von DK 1 (udkp2r_0) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62B6 | Spannung Drosselklappenwinkel 2 von DK 2 (udkp2r_1) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62B7 | Fahrzeuggeschwindigkeit aus Übersetzungsverhältnis und Drehzahl (vfzggang_w) | km/h | high | unsigned int | - | 512 | 65536 | 0 |
| 0x62B8 | Umgebungsdruck (pu_w) | hPa | high | unsigned int | - | 10 | 256 | 0 |
| 0x62B9 | gemessener Kraftstoffdruck (frps_meas) | hPa | high | signed int | - | 1 | 5 | 0 |
| 0x62BA | Motortemperatur, linearisiert und umgerechnet (tmotlin_w) | Grad C | high | signed int | - | 0,05 | 1 | 0 |
| 0x62BB | ADC-Wert Batteriespannung/Kl15 (ukl15_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62BC | Ist-Gang (gangi) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62BD | Spannungswert Schalthebelsensor (ushs_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62BE | reserviert | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62BF | reserviert | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62C0 | schneller Mittelwert des Lambdaregelfaktors Bank 1 (frm_w[0]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x62C1 | schneller Mittelwert des Lambdaregelfaktors Bank 2 (frm_w[1]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x62C2 | Fahrwertgeber (fwg_w) | %PED | high | signed int | - | 1600 | 65536 | 0 |
| 0x62C3 | Rohwert Fahrwertgeber Kanal 1 (fwg1r) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62C4 | Rohwert Fahrwertgeber Kanal 2 (fwg2r) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62C5 | Fahrwertgeber Kanal 1 adaptiert (fwgad1) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62C6 | Fahrwertgeber Kanal 2 adaptiert (fwgad2) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62C7 | Rohwert Drosselklappenwinkel Kanal 1 von DK 1 (dkp1r[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62C8 | Rohwert Drosselklappenwinkel Kanal 2 von DK 1 (dkp2r[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62C9 | Drosselklappenwinkel Kanal 1 adaptiert von DK 1 (dkpad1[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62CA | Drosselklappenwinkel Kanal 2 adaptiert von DK 1 (dkpad2[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62CB | Fehlerort Modul (dsys_merker[0]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x62CC | Parameter 1 (dsys_merker[1]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x62CD | Parameter 2 (dsys_merker[2]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x62CE | Parameter 3 (dsys_merker[3]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x62CF | Endwert relative Momentenforderung der ASC-Regelung (reltrq_end) | - | high | unsigned int | - | 1 | 65536 | 0 |
| 0x62D0 | Rohwert Drosselklappenwinkel Kanal 1 von DK 2 (dkp1r[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62D1 | Rohwert Drosselklappenwinkel Kanal 2 von DK 2 (dkp2r[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62D2 | Drosselklappenwinkel Kanal 1 adaptiert von DK 2 (dkpad1[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62D3 | Drosselklappenwinkel Kanal 2 adaptiert von DK 2 (dkpad2[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62D4 | Rohwert Drosselklappenwinkel Kanal 1 von DK 1, Ebene 2 (dkp1r_um[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62D5 | Rohwert Drosselklappenwinkel Kanal 1 von DK 2, Ebene 2 (dkp1r_um[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62D6 | Rohwert Drosselklappenwinkel Kanal 2 von DK 1, Ebene 2 (dkp2r_um[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62D7 | Rohwert Drosselklappenwinkel Kanal 2 von DK 2, Ebene 2 (dkp2r_um[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62D8 | Drosselklappenwinkel der Drosselklappe 1, Ebene 2 (wdkba_ar_um[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62D9 | Drosselklappenwinkel der Drosselklappe 2, Ebene 2 (wdkba_ar_um[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62DA | zulässige Drosselklappenöffnung für DK 1, Ebene 2 (wdkzul_ar_um[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x62DB | zulässige Drosselklappenöffnung für DK 2, Ebene 2 (wdkzul_ar_um[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x62DC | zulässige Drosselklappenöffnung für DK 1 durch FGR, Ebene 2 (wdkzul_fgr_um[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x62DD | zulässige Drosselklappenöffnung für DK 2 durch FGR, Ebene 2 (wdkzul_fgr_um[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x62DE | Statusbyte Sensorikfehler in Ebene 2 (e_flags_um) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62DF | Rohwert Fahrwertgeber Kanal 1, Ebene 2 (fwg1r_um) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62E0 | Rohwert Fahrwertgeber Kanal 2, Ebene 2 (fwg2r_um) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62E1 | Motordrehzahl, Ebene 2 (nmotseg_um) | U/min | high | unsigned int | - | 0,25 | 1 | 0 |
| 0x62E2 | Statusbyte Fehlerreaktionen Ebene 1, 2 und 3 (r_flags_um) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62E3 | Sicherheitskonzept Zustand für Fehlerreaktion Drosselklappensensorik (sk_reak_dkp) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62E4 | Sicherheitskonzept Zustand des Fahrwertgebers (sk_zust_fwg) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62E5 | Motortemperatur unbegrenzt, Ebene 2 (tmotubeg_um) | Grad C | high | signed int | - | 0,05 | 1 | 0 |
| 0x62E6 | mittlere zulässige Drosselklappenöffnung, Ebene 2 (wdkzul_um) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x62E7 | Maximum aus Kl.15- und BTS-Spannungen (wub) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x62E8 | Anzahl der Fehlerspeichereinträge durch die Fahrwertgeberdiagnose bezüglich des Leerlaufanschlags (cntfwglldiag) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x62E9 | Sollwert des Drosselklappenwinkels der DK1 (wdks_w[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x62EA | Sollwert des Drosselklappenwinkels der DK2 (wdks_w[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x62EB | Bedingung Kupplungsschalter 1 betätigt (Kraftschluß getrennt) (B_kuppl) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62EC | KtEwsError (kt_ews_error) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62ED | KtEwsResult (kt_ews_result) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62EE | EwsInfoState (ews_info_state) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62EF | Zustand History ENVRAM (Eep_EnvRamHist) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62F0 | Zustand Ungültigkeit ENVRAM (Eep_EnvRamInvld) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62F1 | Bedingung Initialisierung aller Adaptionswerte aufgrund ungültiger NV-RAM Daten (B_adpini_eepnpl) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62F2 | Status gruppenweises Initialisieren von Adaptionswerten, Gruppen 1-15 (st_adpini_uwb_low) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62F3 | ADC-Spannung Schalthebelsensor Kanal 1 (ushs1_w) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x62F4 | ADC-Spannung Schalthebelsensor Kanal 2 (ushs2_w) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x62F5 | Winkel Schalthebelsensor in Neutralstellung adaptiert (wadpshssass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x62F6 | im Kombi angezeigter ASC-Status (asc_status_uwb) | 0-n | - | 0xFFFF | TAB_MR_ASC_STATUS | 1 | 1 | 0 |
| 0x62F7 | Modus der ASC-Funktion (asc_modus_uwb) | 0-n | - | 0xFFFF | TAB_MR_ASC_MODUS | 1 | 1 | 0 |
| 0x62F8 | Integrator Klopfregelung Zylinder 1 (ikr[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62F9 | Integrator Klopfregelung Zylinder 2 (ikr[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62FA | letzte nicht maskierte Reset-Condition (uwb_reset_hist) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x62FB | Status der Aktivierungen der Funktion 'Unterstützung Gangwechsel' (st_ugw) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x21F640 | Batterie, Spannung zu hoch | 0 |
| 0x21F642 | Batterie, unplausible Spannung | 0 |
| 0x21F7D0 | Systemfehler | 0 |
| 0x21F9F0 | Fahrgeschwindigkeitsregler, maximale Fahrzeugbeschleunigung überschritten | 0 |
| 0x21FA02 | EWS3, KT-Fehler | 0 |
| 0x21FA03 | EWS3, FSW-Fehler | 0 |
| 0x21FA60 | Fahrwertgeber, Leerlaufanschlag, Position innerhalb Fenster 1 | 0 |
| 0x21FA61 | Fahrwertgeber, Leerlaufanschlag, Position innerhalb Fenster 2 | 0 |
| 0x21FA62 | Fahrwertgeber, Leerlaufanschlag, Position innerhalb Fenster 3 | 0 |
| 0x21FA63 | Fahrwertgeber, Leerlaufanschlag, Position innerhalb Fenster 4 | 0 |
| 0x21FA70 | LR-Adaption, Bank 1, Gemischkorrekturfaktor oberhalb Schwelle | 0 |
| 0x21FA71 | LR-Adaption, Bank 1, Gemischkorrekturfaktor unterhalb Schwelle | 0 |
| 0x21FA80 | LR-Adaption, Bank 2, Gemischkorrekturfaktor oberhalb Schwelle | 0 |
| 0x21FA81 | LR-Adaption, Bank 2, Gemischkorrekturfaktor unterhalb Schwelle | 0 |
| 0x21FCD0 | Resetüberwachung, unerwarteter Reset erkannt | 0 |
| 0x21FD20 | EEPROM: Löschen fehlgeschlagen | 0 |
| 0x21FD22 | EEPROM: Schreiben eines Blocks fehlgeschlagen | 0 |
| 0x21FD33 | Nockenwelle, Einlass, unzulässige Verdrehung | 0 |
| 0x21FD43 | Nockenwelle, Auslass, unzulässige Verdrehung | 0 |
| 0x21FDF0 | DiagService ResponseOnEvent, Sendequeue voll | 0 |
| 0x21FDF1 | DiagService ResponseOnEvent, Senden fehlgeschlagen | 0 |
| 0x21FDF2 | DiagService ResponseOnEvent, Test, Application-DTC | 0 |
| 0x21FDF3 | DiagService ResponseOnEvent, Test, Network-DTC | 0 |
| 0x21FEF0 | Softwarereset FSW, Gruppe 0 | 0 |
| 0x21FEF1 | Softwarereset FSW, Gruppe 1 | 0 |
| 0x21FEF2 | Softwarereset FSW, Gruppe 2 | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x629D | Ansauglufttemperatur (tans_w) | Grad C | high | signed int | - | 0,05 | 1 | 0 |
| 0x629E | Batteriespannung (ub_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x629F | Drosselklappenwinkel bezogen auf DK- Anschlag (wdkba_w) | %DK | high | signed int | - | 1600 | 65536 | 0 |
| 0x62A0 | Motortemperatur (tmot_w) | Grad C | high | signed int | - | 0,05 | 1 | 0 |
| 0x62A1 | Lambda Regelfaktor Bank 1 (fr_w[0]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x62A2 | Lambda Regelfaktor Bank 2 (fr_w[1]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x62A3 | relative Luftfüllung (rl_w) | % | high | unsigned int | - | 0,75 | 32 | 0 |
| 0x62A4 | Motordrehzahl (nmot_w) | U/min | high | unsigned int | - | 0,25 | 1 | 0 |
| 0x62A5 | Fahrzeuggeschwindigkeit (vfzg_w) | km/h | high | unsigned int | - | 512 | 65536 | 0 |
| 0x62A6 | Spannung System-BTS (uubts_sys_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62A7 | Spannung Zündungs-BTS (uubts_zdg_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62A8 | Spannung EKP-BTS (uubts_ekp_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62A9 | Spannung ELUE-BTS (uubts_elue_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62AA | Abgastemperatur vor Kat aus Modell (für LSH bei Boxer-Motoren); (tabgmls) | Grad C | high | signed int | - | 0,05 | 1 | 0 |
| 0x62AB | Lambdasondenspannung Bank 1 (usvk_w[0]) | V | high | signed int | - | 0,001 | 1 | 0 |
| 0x62AC | Lambdasondenspannung Bank 2 (usvk_w[1]) | V | high | signed int | - | 0,001 | 1 | 0 |
| 0x62AD | reserviert | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x62AE | Spannungswert von Getriebeschaltwalze (ugetrg_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62AF | Zeit nach Motorstart(tnse_w) | s | high | unsigned int | - | 0,1 | 1 | 0 |
| 0x62B0 | Einspritzzeit(te_w) | ms | high | unsigned int | - | 8 | 1000 | 0 |
| 0x62B1 | Letzter berechneter Zündwinkel (zw) | Grad KW | low | signed int | - | 191,25 | 65280 | 0 |
| 0x62B2 | ADC-Spannung Ansauglufttemperatur (utans_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62B3 | Spannung Drosselklappenwinkel 1 von DK 1 (udkp1r_0) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62B4 | Spannung Drosselklappenwinkel 1 von DK 2 (udkp1r_1) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62B5 | Spannung Drosselklappenwinkel 2 von DK 1 (udkp2r_0) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62B6 | Spannung Drosselklappenwinkel 2 von DK 2 (udkp2r_1) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62B7 | Fahrzeuggeschwindigkeit aus Übersetzungsverhältnis und Drehzahl (vfzggang_w) | km/h | high | unsigned int | - | 512 | 65536 | 0 |
| 0x62B8 | Umgebungsdruck (pu_w) | hPa | high | unsigned int | - | 10 | 256 | 0 |
| 0x62B9 | gemessener Kraftstoffdruck (frps_meas) | hPa | high | signed int | - | 1 | 5 | 0 |
| 0x62BA | Motortemperatur, linearisiert und umgerechnet (tmotlin_w) | Grad C | high | signed int | - | 0,05 | 1 | 0 |
| 0x62BB | ADC-Wert Batteriespannung/Kl15 (ukl15_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62BC | Ist-Gang (gangi) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62BD | Spannungswert Schalthebelsensor (ushs_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x62BE | reserviert | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62BF | reserviert | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62C0 | schneller Mittelwert des Lambdaregelfaktors Bank 1 (frm_w[0]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x62C1 | schneller Mittelwert des Lambdaregelfaktors Bank 2 (frm_w[1]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x62C2 | Fahrwertgeber (fwg_w) | %PED | high | signed int | - | 1600 | 65536 | 0 |
| 0x62C3 | Rohwert Fahrwertgeber Kanal 1 (fwg1r) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62C4 | Rohwert Fahrwertgeber Kanal 2 (fwg2r) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62C5 | Fahrwertgeber Kanal 1 adaptiert (fwgad1) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62C6 | Fahrwertgeber Kanal 2 adaptiert (fwgad2) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62C7 | Rohwert Drosselklappenwinkel Kanal 1 von DK 1 (dkp1r[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62C8 | Rohwert Drosselklappenwinkel Kanal 2 von DK 1 (dkp2r[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62C9 | Drosselklappenwinkel Kanal 1 adaptiert von DK 1 (dkpad1[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62CA | Drosselklappenwinkel Kanal 2 adaptiert von DK 1 (dkpad2[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62CB | Fehlerort Modul (dsys_merker[0]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x62CC | Parameter 1 (dsys_merker[1]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x62CD | Parameter 2 (dsys_merker[2]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x62CE | Parameter 3 (dsys_merker[3]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x62CF | Endwert relative Momentenforderung der ASC-Regelung (reltrq_end) | - | high | unsigned int | - | 1 | 65536 | 0 |
| 0x62D0 | Rohwert Drosselklappenwinkel Kanal 1 von DK 2 (dkp1r[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62D1 | Rohwert Drosselklappenwinkel Kanal 2 von DK 2 (dkp2r[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62D2 | Drosselklappenwinkel Kanal 1 adaptiert von DK 2 (dkpad1[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62D3 | Drosselklappenwinkel Kanal 2 adaptiert von DK 2 (dkpad2[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62D4 | Rohwert Drosselklappenwinkel Kanal 1 von DK 1, Ebene 2 (dkp1r_um[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62D5 | Rohwert Drosselklappenwinkel Kanal 1 von DK 2, Ebene 2 (dkp1r_um[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62D6 | Rohwert Drosselklappenwinkel Kanal 2 von DK 1, Ebene 2 (dkp2r_um[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62D7 | Rohwert Drosselklappenwinkel Kanal 2 von DK 2, Ebene 2 (dkp2r_um[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62D8 | Drosselklappenwinkel der Drosselklappe 1, Ebene 2 (wdkba_ar_um[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62D9 | Drosselklappenwinkel der Drosselklappe 2, Ebene 2 (wdkba_ar_um[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x62DA | zulässige Drosselklappenöffnung für DK 1, Ebene 2 (wdkzul_ar_um[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x62DB | zulässige Drosselklappenöffnung für DK 2, Ebene 2 (wdkzul_ar_um[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x62DC | zulässige Drosselklappenöffnung für DK 1 durch FGR, Ebene 2 (wdkzul_fgr_um[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x62DD | zulässige Drosselklappenöffnung für DK 2 durch FGR, Ebene 2 (wdkzul_fgr_um[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x62DE | Statusbyte Sensorikfehler in Ebene 2 (e_flags_um) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62DF | Rohwert Fahrwertgeber Kanal 1, Ebene 2 (fwg1r_um) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62E0 | Rohwert Fahrwertgeber Kanal 2, Ebene 2 (fwg2r_um) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62E1 | Motordrehzahl, Ebene 2 (nmotseg_um) | U/min | high | unsigned int | - | 0,25 | 1 | 0 |
| 0x62E2 | Statusbyte Fehlerreaktionen Ebene 1, 2 und 3 (r_flags_um) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62E3 | Sicherheitskonzept Zustand für Fehlerreaktion Drosselklappensensorik (sk_reak_dkp) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62E4 | Sicherheitskonzept Zustand des Fahrwertgebers (sk_zust_fwg) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62E5 | Motortemperatur unbegrenzt, Ebene 2 (tmotubeg_um) | Grad C | high | signed int | - | 0,05 | 1 | 0 |
| 0x62E6 | mittlere zulässige Drosselklappenöffnung, Ebene 2 (wdkzul_um) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x62E7 | Maximum aus Kl.15- und BTS-Spannungen (wub) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x62E8 | Anzahl der Fehlerspeichereinträge durch die Fahrwertgeberdiagnose bezüglich des Leerlaufanschlags (cntfwglldiag) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x62E9 | Sollwert des Drosselklappenwinkels der DK1 (wdks_w[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x62EA | Sollwert des Drosselklappenwinkels der DK2 (wdks_w[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x62EB | Bedingung Kupplungsschalter 1 betätigt (Kraftschluß getrennt) (B_kuppl) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62EC | KtEwsError (kt_ews_error) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62ED | KtEwsResult (kt_ews_result) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62EE | EwsInfoState (ews_info_state) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62EF | Zustand History ENVRAM (Eep_EnvRamHist) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62F0 | Zustand Ungültigkeit ENVRAM (Eep_EnvRamInvld) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62F1 | Bedingung Initialisierung aller Adaptionswerte aufgrund ungültiger NV-RAM Daten (B_adpini_eepnpl) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62F2 | Status gruppenweises Initialisieren von Adaptionswerten, Gruppen 1-15 (st_adpini_uwb_low) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0x62F3 | ADC-Spannung Schalthebelsensor Kanal 1 (ushs1_w) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x62F4 | ADC-Spannung Schalthebelsensor Kanal 2 (ushs2_w) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x62F5 | Winkel Schalthebelsensor in Neutralstellung adaptiert (wadpshssass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x62F6 | im Kombi angezeigter ASC-Status (asc_status_uwb) | 0-n | - | 0xFFFF | TAB_MR_ASC_STATUS | 1 | 1 | 0 |
| 0x62F7 | Modus der ASC-Funktion (asc_modus_uwb) | 0-n | - | 0xFFFF | TAB_MR_ASC_MODUS | 1 | 1 | 0 |
| 0x62F8 | Integrator Klopfregelung Zylinder 1 (ikr[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62F9 | Integrator Klopfregelung Zylinder 2 (ikr[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x62FA | letzte nicht maskierte Reset-Condition (uwb_reset_hist) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x62FB | Status der Aktivierungen der Funktion 'Unterstützung Gangwechsel' (st_ugw) | - | - | unsigned int | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X2300_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL1_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 1 als String |
| STAT_FASTA_PROFIL1_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 1 als String |
| STAT_FASTA_PROFIL1_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 1 in Minuten |
| STAT_FASTA_PROFIL1_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 1 in Minuten |
| STAT_FASTA_PROFIL1_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 1 in Minuten |
| STAT_FASTA_PROFIL1_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 1 in Minuten |
| STAT_FASTA_PROFIL1_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 1 in Minuten |
| STAT_FASTA_PROFIL1_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 1 in Minuten |
| STAT_FASTA_PROFIL1_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 1 in Minuten |
| STAT_FASTA_PROFIL1_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 1 als String |
| STAT_FASTA_PROFIL1_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2301_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL2_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 2 als String |
| STAT_FASTA_PROFIL2_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 2 als String |
| STAT_FASTA_PROFIL2_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 2 in Minuten |
| STAT_FASTA_PROFIL2_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 2 in Minuten |
| STAT_FASTA_PROFIL2_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 2 in Minuten |
| STAT_FASTA_PROFIL2_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 2 in Minuten |
| STAT_FASTA_PROFIL2_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 2 in Minuten |
| STAT_FASTA_PROFIL2_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 2 in Minuten |
| STAT_FASTA_PROFIL2_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 2 in Minuten |
| STAT_FASTA_PROFIL2_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 2 als String |
| STAT_FASTA_PROFIL2_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2302_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL3_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 3 als String |
| STAT_FASTA_PROFIL3_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 3 als String |
| STAT_FASTA_PROFIL3_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 3 in Minuten |
| STAT_FASTA_PROFIL3_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 3 in Minuten |
| STAT_FASTA_PROFIL3_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 3 in Minuten |
| STAT_FASTA_PROFIL3_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 3 in Minuten |
| STAT_FASTA_PROFIL3_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 3 in Minuten |
| STAT_FASTA_PROFIL3_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 3 in Minuten |
| STAT_FASTA_PROFIL3_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 3 in Minuten |
| STAT_FASTA_PROFIL3_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 3 als String |
| STAT_FASTA_PROFIL3_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2303_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL4_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 4 als String |
| STAT_FASTA_PROFIL4_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 4 als String |
| STAT_FASTA_PROFIL4_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 4 in Minuten |
| STAT_FASTA_PROFIL4_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 4 in Minuten |
| STAT_FASTA_PROFIL4_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 4 in Minuten |
| STAT_FASTA_PROFIL4_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 4 in Minuten |
| STAT_FASTA_PROFIL4_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 4 in Minuten |
| STAT_FASTA_PROFIL4_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 4 in Minuten |
| STAT_FASTA_PROFIL4_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 4 in Minuten |
| STAT_FASTA_PROFIL4_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 4 als String |
| STAT_FASTA_PROFIL4_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2304_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL5_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 5 als String |
| STAT_FASTA_PROFIL5_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 5 als String |
| STAT_FASTA_PROFIL5_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 5 in Minuten |
| STAT_FASTA_PROFIL5_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 5 in Minuten |
| STAT_FASTA_PROFIL5_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 5 in Minuten |
| STAT_FASTA_PROFIL5_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 5 in Minuten |
| STAT_FASTA_PROFIL5_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 5 in Minuten |
| STAT_FASTA_PROFIL5_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 5 in Minuten |
| STAT_FASTA_PROFIL5_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 5 in Minuten |
| STAT_FASTA_PROFIL5_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 5 als String |
| STAT_FASTA_PROFIL5_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2305_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL6_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 6 als String |
| STAT_FASTA_PROFIL6_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 6 als String |
| STAT_FASTA_PROFIL6_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 6 in Minuten |
| STAT_FASTA_PROFIL6_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 6 in Minuten |
| STAT_FASTA_PROFIL6_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 6 in Minuten |
| STAT_FASTA_PROFIL6_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 6 in Minuten |
| STAT_FASTA_PROFIL6_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 6 in Minuten |
| STAT_FASTA_PROFIL6_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 6 in Minuten |
| STAT_FASTA_PROFIL6_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 6 in Minuten |
| STAT_FASTA_PROFIL6_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 6 als String |
| STAT_FASTA_PROFIL6_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2306_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL7_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 7 als String |
| STAT_FASTA_PROFIL7_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 7 als String |
| STAT_FASTA_PROFIL7_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 7 in Minuten |
| STAT_FASTA_PROFIL7_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 7 in Minuten |
| STAT_FASTA_PROFIL7_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 7 in Minuten |
| STAT_FASTA_PROFIL7_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 7 in Minuten |
| STAT_FASTA_PROFIL7_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 7 in Minuten |
| STAT_FASTA_PROFIL7_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 7 in Minuten |
| STAT_FASTA_PROFIL7_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 7 in Minuten |
| STAT_FASTA_PROFIL7_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 7 als String |
| STAT_FASTA_PROFIL7_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2307_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL8_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 8 als String |
| STAT_FASTA_PROFIL8_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 8 als String |
| STAT_FASTA_PROFIL8_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 8 in Minuten |
| STAT_FASTA_PROFIL8_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 8 in Minuten |
| STAT_FASTA_PROFIL8_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 8 in Minuten |
| STAT_FASTA_PROFIL8_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 8 in Minuten |
| STAT_FASTA_PROFIL8_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 8 in Minuten |
| STAT_FASTA_PROFIL8_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 8 in Minuten |
| STAT_FASTA_PROFIL8_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 8 in Minuten |
| STAT_FASTA_PROFIL8_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 8 als String |
| STAT_FASTA_PROFIL8_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2308_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL9_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 9 als String |
| STAT_FASTA_PROFIL9_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 9 als String |
| STAT_FASTA_PROFIL9_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 9 in Minuten |
| STAT_FASTA_PROFIL9_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 9 in Minuten |
| STAT_FASTA_PROFIL9_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 9 in Minuten |
| STAT_FASTA_PROFIL9_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 9 in Minuten |
| STAT_FASTA_PROFIL9_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 9 in Minuten |
| STAT_FASTA_PROFIL9_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 9 in Minuten |
| STAT_FASTA_PROFIL9_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 9 in Minuten |
| STAT_FASTA_PROFIL9_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 9 als String |
| STAT_FASTA_PROFIL9_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2309_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL10_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 10 als String |
| STAT_FASTA_PROFIL10_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 10 als String |
| STAT_FASTA_PROFIL10_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 10 in Minuten |
| STAT_FASTA_PROFIL10_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 10 in Minuten |
| STAT_FASTA_PROFIL10_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 10 in Minuten |
| STAT_FASTA_PROFIL10_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 10 in Minuten |
| STAT_FASTA_PROFIL10_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 10 in Minuten |
| STAT_FASTA_PROFIL10_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 10 in Minuten |
| STAT_FASTA_PROFIL10_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 10 in Minuten |
| STAT_FASTA_PROFIL10_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 10 als String |
| STAT_FASTA_PROFIL10_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X230A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL11_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 11 als String |
| STAT_FASTA_PROFIL11_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 11 als String |
| STAT_FASTA_PROFIL11_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 11 in Minuten |
| STAT_FASTA_PROFIL11_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 11 in Minuten |
| STAT_FASTA_PROFIL11_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 11 in Minuten |
| STAT_FASTA_PROFIL11_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 11 in Minuten |
| STAT_FASTA_PROFIL11_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 11 in Minuten |
| STAT_FASTA_PROFIL11_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 11 in Minuten |
| STAT_FASTA_PROFIL11_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 11 in Minuten |
| STAT_FASTA_PROFIL11_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 11 als String |
| STAT_FASTA_PROFIL11_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X230B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL12_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 12 als String |
| STAT_FASTA_PROFIL12_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 12 als String |
| STAT_FASTA_PROFIL12_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 12 in Minuten |
| STAT_FASTA_PROFIL12_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 12 in Minuten |
| STAT_FASTA_PROFIL12_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 12 in Minuten |
| STAT_FASTA_PROFIL12_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 12 in Minuten |
| STAT_FASTA_PROFIL12_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 12 in Minuten |
| STAT_FASTA_PROFIL12_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 12 in Minuten |
| STAT_FASTA_PROFIL12_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 12 in Minuten |
| STAT_FASTA_PROFIL12_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 12 als String |
| STAT_FASTA_PROFIL12_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X230C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL13_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 13 als String |
| STAT_FASTA_PROFIL13_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 13 als String |
| STAT_FASTA_PROFIL13_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 13 in Minuten |
| STAT_FASTA_PROFIL13_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 13 in Minuten |
| STAT_FASTA_PROFIL13_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 13 in Minuten |
| STAT_FASTA_PROFIL13_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 13 in Minuten |
| STAT_FASTA_PROFIL13_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 13 in Minuten |
| STAT_FASTA_PROFIL13_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 13 in Minuten |
| STAT_FASTA_PROFIL13_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 13 in Minuten |
| STAT_FASTA_PROFIL13_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 13 als String |
| STAT_FASTA_PROFIL13_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X230D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL14_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 14 als String |
| STAT_FASTA_PROFIL14_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 14 als String |
| STAT_FASTA_PROFIL14_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 14 in Minuten |
| STAT_FASTA_PROFIL14_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 14 in Minuten |
| STAT_FASTA_PROFIL14_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 14 in Minuten |
| STAT_FASTA_PROFIL14_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 14 in Minuten |
| STAT_FASTA_PROFIL14_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 14 in Minuten |
| STAT_FASTA_PROFIL14_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 14 in Minuten |
| STAT_FASTA_PROFIL14_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 14 in Minuten |
| STAT_FASTA_PROFIL14_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 14 als String |
| STAT_FASTA_PROFIL14_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X230E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL15_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 15 als String |
| STAT_FASTA_PROFIL15_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 15 als String |
| STAT_FASTA_PROFIL15_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 15 in Minuten |
| STAT_FASTA_PROFIL15_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 15 in Minuten |
| STAT_FASTA_PROFIL15_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 15 in Minuten |
| STAT_FASTA_PROFIL15_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 15 in Minuten |
| STAT_FASTA_PROFIL15_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 15 in Minuten |
| STAT_FASTA_PROFIL15_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 15 in Minuten |
| STAT_FASTA_PROFIL15_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 15 in Minuten |
| STAT_FASTA_PROFIL15_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 15 als String |
| STAT_FASTA_PROFIL15_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2320_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_LASTKOLLEKTIV1_ZEIT_MINUTEN_DATA | DATA | high | data[876] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lastkollektiv1-Arrays mit 4-min Zählern |
| STAT_FASTA_LASTKOLLEKTIV1_ZEIT_SEKUNDEN_DATA | DATA | high | data[438] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lastkollektiv1-Arrays mit Sekundenzählern |
| STAT_FASTA_LASTKOLLEKTIV1_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X6200_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_ANSAUGLUFT_WERT | °C | high | int | - | - | 0.05 | 1.0 | 0.0 | Ansauglufttemperatur in Grad Celsius |
| STAT_SPANNUNG_ADC_ANSAUGLUFTTEMP_WERT | V | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | ADC-Spannung des Ansauglufttemperatursensors in Volt |
| STAT_TEMPERATUR_MOTOR_WERT | °C | high | int | - | - | 0.05 | 1.0 | 0.0 | Motortemperatur in Grad Celsius |
| STAT_SPANNUNG_ADC_MOTORTEMP_WERT | V | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | ADC-Spannung des Motortemperatursensors in Volt |
| STAT_TEMPERATUR_OEL_WERT | °C | high | int | - | - | 0.05 | 1.0 | 0.0 | Motoroeltemperatur in Grad Celsius |
| STAT_SPANNUNG_ADC_OELTEMP_WERT | V | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | ADC-Spannung des Oeltemperatursensors in Volt |

### RES_0X6201_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_CAN_VORDERRAD_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Vorderradgeschwindigkeit aus ABS-CAN-Botschaft in Kilometer pro Stunde |
| STAT_GESCHWINDIGKEIT_CAN_HINTERRAD_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Hinterradgeschwindigkeit aus ABS-CAN-Botschaft in Kilometer pro Stunde |
| STAT_GESCHWINDIGKEIT_FAHRZEUG_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Fahrzeuggeschwindigkeit aus plausibilisierten CAN-Geschwindigkeiten in Kilometer pro Stunde |
| STAT_GESCHWINDIGKEIT_ABS_VORDERRAD_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Vorderradgeschwindigkeit vom ABS-SG in Kilometer pro Stunde |
| STAT_GESCHWINDIGKEIT_ABS_HINTERRAD_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Hinterradgeschwindigkeit vom ABS-SG in Kilometer pro Stunde |

### RES_0X6202_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRUCK_UMGEBUNG_WERT | hPa | high | unsigned int | - | - | 10.0 | 256.0 | 0.0 | gefilterter Umgebungsluftdruck in Hektopascal |
| STAT_SPANNUNG_ADC_UMGEBUNGSDRUCK_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Umgebungsdrucksensors in Volt |
| STAT_DRUCK_KRAFTSTOFF_WERT | hPa | high | int | - | - | 1.0 | 5.0 | 0.0 | gefilterter Kraftstoffdruck in Hektopascal |
| STAT_SPANNUNG_ADC_KRAFTSTOFFDRUCK_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Kraftstoffdrucksensors in Volt |

### RES_0X6203_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_MOTOR_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Motordrehzahl in Umdrehungen pro Minute |
| STAT_DREHZAHL_LEERLAUF_SOLL_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Leerlaufsolldrehzahl in Umdrehungen pro Minute |
| STAT_DREHZAHL_UMDREHUNG_NOCKENWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 16.0 | 0.0 | Umdrehungszähler der Nockenwelle 1 |
| STAT_DREHZAHL_UMDREHUNG_NOCKENWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 16.0 | 0.0 | Umdrehungszähler der Nockenwelle 2 |
| STAT_DREHZAHL_FLANKEN_NOCKENWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erkannten Nockenwellenflanken der laufenden Nockenwellenumdrehung der Nockenwelle 1 |
| STAT_DREHZAHL_FLANKEN_NOCKENWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erkannten Nockenwellenflanken der laufenden Nockenwellenumdrehung der Nockenwelle 2 |
| STAT_DREHZAHL_NOCKENWELLE_WERT | 1/min | high | int | - | - | 1.0 | 4.0 | 0.0 | Nockenwellendrehzahl in Umdrehungen pro Minute |

### RES_0X6204_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_BATTERIE_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Batteriespannung in Volt |
| STAT_SPANNUNG_ADC_UB_KL15_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung der Klemme 15 in Volt |
| STAT_SPANNUNG_ADC_BTS_UZDG_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Zündungs-BTS in Volt |
| STAT_SPANNUNG_ADC_BTS_USYS_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des System-BTS in Volt |
| STAT_SPANNUNG_ADC_BTS_UEKP_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des EKP-BTS in Volt |
| STAT_SPANNUNG_ADC_CODIERSTECKER_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Reifencodiersteckers in Volt |
| STAT_SPANNUNG_ADC_LAMBDASONDE1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung der Lambdasonde 1 in Volt |
| STAT_SPANNUNG_ADC_LAMBDASONDE2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung der Lambdasonde 2 in Volt |
| STAT_SPANNUNG_ADC_LAMBDASONDE3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung der Lambdasonde 3 in Volt |
| STAT_SPANNUNG_ADC_LAMBDASONDE4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung der Lambdasonde 4 in Volt |
| STAT_SPANNUNG_ADC_BTS_UELUE_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des ELUE-BTS in Volt |
| STAT_SPANNUNG_ADC_VERSORGUNG_5V_AUSGANG_A_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Ausgang A der 5V-Versorgung in Volt |
| STAT_SPANNUNG_ADC_VERSORGUNG_5V_AUSGANG_B_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Ausgang B der 5V-Versorgung in Volt |
| STAT_SPANNUNG_ADC_VERSORGUNG_5V_AUSGANG_C_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Ausgang C der 5V-Versorgung in Volt |
| STAT_SPANNUNG_ADC_STURZSENSOR_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Sturzsensors in Volt |
| STAT_SPANNUNG_ADC_OELSTANDSGEBER_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Ölstandsgebers in Volt |
| STAT_SPANNUNG_ADC_VERSORGUNG_STARTERRELAIS_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung der Spannungsversorgung des Starterrelais in Volt |
| STAT_SPANNUNG_ADC_BTS_IZDG_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung am Strommessshunt des Zündungs-BTS in Volt |
| STAT_SPANNUNG_ADC_BTS_ISYS_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung am Strommessshunt des System-BTS in Volt |
| STAT_SPANNUNG_ADC_BTS_IEKP_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung am Strommessshunt des EKP-BTS in Volt |
| STAT_SPANNUNG_ADC_BTS_IELUE_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung am Strommessshunt des ELUE-BTS in Volt |

### RES_0X620A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAMBDAREGELUNG_BANK1_FAKTOR_WERT | - | high | unsigned int | - | - | 2.0 | 65536.0 | 0.0 | Ausgangswert des Lambdaregelfaktors der Bank 1 |
| STAT_LAMBDAREGELUNG_BANK2_FAKTOR_WERT | - | high | unsigned int | - | - | 2.0 | 65536.0 | 0.0 | Ausgangswert des Lambdaregelfaktors der Bank 2 |
| STAT_LAMBDAREGELUNG_BANK1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lambdaregelung Bank 1: 1=AKTIV, 0=INAKTIV |
| STAT_LAMBDAREGELUNG_BANK2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lambdaregelung Bank 2: 1=AKTIV, 0=INAKTIV |

### RES_0X620B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_LEERLAUF | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Leerlauf des Motors: 1=AKTIV; 0=INAKTIV |
| STAT_LAST_VOLLLAST | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Volllast des Motors: 1=AKTIV; 0=INAKTIV |

### RES_0X620C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUENDUNG_WINKEL_IST_WERT | ° | high | char | - | - | 191.25 | 255.0 | 0.0 | aktueller Zündwinkel in Grad Kurbelwelle |
| STAT_ZUENDUNG_SCHLIESSZEIT_ZUENDSPULEN_WERT | ms | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Schließzeiten der Zündspulen in Millisekunden |

### RES_0X620D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINSPRITZUNG_DAUER_BANK1_WERT | ms | high | unsigned int | - | - | 8.0 | 1000.0 | 0.0 | effektive Einspritzdauer Bank 1 in Millisekunden |
| STAT_EINSPRITZUNG_DAUER_BANK2_WERT | ms | high | unsigned int | - | - | 8.0 | 1000.0 | 0.0 | effektive Einspritzdauer Bank 2 in Millisekunden |

### RES_0X620E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASC_REGELUNG_DAUER_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Dauer aller ASC-Regelungen in Sekunden |
| STAT_ASC_REGELUNG_INTENSITAET_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | mittlere Intensität/Momentrücknahme aller ASC-Regelungen in Prozent |
| STAT_ASC_STATUS | 0-n | high | unsigned char | - | TAB_MR_ASC_STATUS | 1.0 | 1.0 | 0.0 | aktueller Status der ASC-Funktion |
| STAT_ASC_MODUS | 0-n | high | unsigned char | - | TAB_MR_ASC_MODUS | 1.0 | 1.0 | 0.0 | gewählter Modus der ASC-Funktion |
| STAT_ASC_TASTER | 0-n | high | unsigned char | - | TAB_MR_ASC_TASTER | 1.0 | 1.0 | 0.0 | ASC-Taster |
| STAT_ASC_RADIUSKORREKTUR_WERT | mm | high | int | - | - | 4000.0 | 65536.0 | 0.0 | gesamte Radiuskorrektur der Reifenradiusadaption in Millimeter |

### RES_0X620F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLOPFREGELUNG_DZW_KR_I_HOLD_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | maximal aufgetretene I-Anteile Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_DZW_KR_P_HOLDI_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | P-Anteile Klopfregelung bei max. I-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_NMOT_HOLDI_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Drehzahlen bei max. I-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_RL_HOLDI_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | relative Füllungen bei max. I-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_WDKBA_HOLDI_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Drosselklappenwinkel bei max. I-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_TANS_HOLDI_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Ansauglufttemperaturen bei max. I-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_TMOT_HOLDI_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Motortemperaturen bei max. I-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_PU_HOLDI_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Umgebungsdrücke bei max. I-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_DZW_KR_P_HOLD_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | maximal aufgetretene P-Anteile Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_DZW_KR_I_HOLDP_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | I-Anteile Klopfregelung bei max. P-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_NMOT_HOLDP_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Drehzahlen bei max. P-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_RL_HOLDP_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | relative Füllungen bei max. P-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_WDKBA_HOLDP_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Drosselklappenwinkel bei max. P-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_TANS_HOLDP_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Ansauglufttemperaturen bei max. P-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_TMOT_HOLDP_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Motortemperaturen bei max. P-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_PU_HOLDP_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Umgebungsdrücke bei max. P-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_IKRMX_HOLD_DATA | DATA | high | data[864] | - | - | 1.0 | 1.0 | 0.0 | maximal aufgetretene ikr ohne erkanntes Klopfen (zylinderindividuell) als Rohdaten |

### RES_0X6210_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DROSSELKLAPPE1_KANAL1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 1 des Drosselklappenwinkels 1 in Prozent |
| STAT_SPANNUNG_ADC_DK1_KANAL1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 1 des Drosselklappenwinkels 1 in Volt |
| STAT_DROSSELKLAPPE1_KANAL2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 2 des Drosselklappenwinkels 1 in Prozent |
| STAT_SPANNUNG_ADC_DK1_KANAL2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 2 des Drosselklappenwinkels 1 in Volt |
| STAT_DROSSELKLAPPE2_KANAL1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 1 des Drosselklappenwinkels 2 in Prozent |
| STAT_SPANNUNG_ADC_DK2_KANAL1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 1 des Drosselklappenwinkels 2 in Volt |
| STAT_DROSSELKLAPPE2_KANAL2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 2 des Drosselklappenwinkels 2 in Prozent |
| STAT_SPANNUNG_ADC_DK2_KANAL2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 2 des Drosselklappenwinkels 2 in Volt |
| STAT_DROSSELKLAPPE_ISTWERT_WERT | % | high | int | - | - | 1600.0 | 65536.0 | 0.0 | Drosselklappenwinkel bezogen auf DK-Anschläge in Prozent |
| STAT_DROSSELKLAPPE_SOLLWERT_WERT | % | high | unsigned int | - | - | 1600.0 | 65536.0 | 0.0 | Sollwert für den/die Drosselklappenwinkel in Prozent |
| STAT_STATUS_DROSSELKLAPPE_REGELUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statusbyte der Drosselklappenregelung |
| STAT_DROSSELKLAPPE1_ANSTEUERUNG_WERT | % | high | int | - | - | 100.0 | 32768.0 | 0.0 | PWM-Ansteuerwert des Drosselklappenmotors 1 in Prozent |
| STAT_DROSSELKLAPPE2_ANSTEUERUNG_WERT | % | high | int | - | - | 100.0 | 32768.0 | 0.0 | PWM-Ansteuerwert des Drosselklappenmotors 2 in Prozent |
| STAT_DROSSELKLAPPE1_ABSCHALTUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abschaltung der Drosselklappenendstufe 1: 1=EIN, 0=AUS |

### RES_0X6211_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRWERTGEBER_KANAL1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 1 des Fahrwertgebers in Prozent |
| STAT_SPANNUNG_ADC_FWG_KANAL1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 1 des Fahrwertgebers in Volt |
| STAT_FAHRWERTGEBER_KANAL2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 2 des Fahrwertgebers in Prozent |
| STAT_SPANNUNG_ADC_FWG_KANAL2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 2 des Fahrwertgebers in Volt |
| STAT_FAHRWERTGEBER_ISTWERT_WERT | % | high | int | - | - | 1600.0 | 65536.0 | 0.0 | Istwert des Fahrwertgebers in Prozent |

### RES_0X6212_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSORBOX_DREHRATE1_WERT | °/s | high | int | - | - | 1.0 | 200.0 | 0.0 | Drehrate 1 der Sensorbox (aus CAN-Botschaft) in Grad pro Sekunde |
| STAT_SENSORBOX_DREHRATE2_WERT | °/s | high | int | - | - | 1.0 | 200.0 | 0.0 | Drehrate 2 der Sensorbox (aus CAN-Botschaft) in Grad pro Sekunde |
| STAT_SENSORBOX_BESCHLEUNIGUNG1_WERT | m/s² | high | int | - | - | 1.0 | 800.0 | 0.0 | Beschleunigung 1 der Sensorbox (aus CAN-Botschaft) in Meter pro Quadratsekunde |
| STAT_SENSORBOX_BESCHLEUNIGUNG2_WERT | m/s² | high | int | - | - | 1.0 | 800.0 | 0.0 | Beschleunigung 2 der Sensorbox (aus CAN-Botschaft) in Meter pro Quadratsekunde |
| STAT_SENSORBOX_SCHRAEGLAGE_WERT | ° | high | int | - | - | 0.0439 | 1.0 | 0.0 | Schräglagenwinkel des Motorrads (berechnet aus Sensorboxsignalen) in Grad |
| STAT_SENSORBOX_BESCHLEUNIGUNG3_WERT | m/s² | high | int | - | - | 1.0 | 800.0 | 0.0 | Beschleunigung 3 der Sensorbox (aus CAN-Botschaft) in Meter pro Quadratsekunde |

### RES_0X6213_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GETRIEBE_ISTGANG | 0-n | high | unsigned char | - | TAB_MR_GETRIEBE | 1.0 | 1.0 | 0.0 | Istwert der Getriebeschaltwalzenposition als Ganginformation |
| STAT_SPANNUNG_ADC_GETRIEBE_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Wert des Getriebeschaltwalzenpotentiometers in Volt |

### RES_0X6214_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_SST_SCHALTER1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang Schalter 1 des Seitenstützenständers: 1=eingeklappt; 0=ausgeklappt |
| STAT_SCHALTER_SST_SCHALTER2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang Schalter 2 des Seitenstützenständers: 1=eingeklappt; 0=ausgeklappt |
| STAT_SCHALTER_SEITENSTUETZENSTAENDER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand des Seitenstützenständers: 1=eingeklappt; 0=ausgeklappt |
| STAT_SCHALTER_KUPPLUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Kupplungsschalters: 1=betätigt; 0=nicht betätigt |
| STAT_SCHALTER_OELNIVEAU | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Ölniveauschalters: 1=Ölniveau i.O.; 0=Ölniveau n.i.O. |
| STAT_SCHALTER_START | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Startschalters: 1=betätigt; 0=nicht betätigt |
| STAT_SCHALTER_KLEMME15 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des KL15-Schalters: 1=betätigt; 0=nicht betätigt |
| STAT_SCHALTER_NOTAUS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Notausschalters: 1=betätigt; 0=nicht betätigt |
| STAT_SCHALTER_BREMSLICHT_VORN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Bremslichtschalters vorn: 1=betätigt; 0=nicht betätigt |
| STAT_SCHALTER_BREMSLICHT_HINTEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Bremslichtschalters hinten: 1=betätigt; 0=nicht betätigt |
| STAT_SCHALTER_FAHRZEUGMODUS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Fahrzeugmodustasters: 1 == betätigt; 0 == nicht betätigt |
| STAT_SCHALTER_CODIERSTECKER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Codiersteckers Sondermodus: 1 == gesteckt; 0 == nicht gesteckt |
| STAT_SCHALTER_KUPPLUNG_2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Kupplungsschalters 2: 1=betätigt; 0=nicht betätigt |

### RES_0X6215_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANLASSER_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Anlasseransteuerung: 1=AKTIV ; 0=INAKTIV |
| STAT_ANLASSER_SCHUTZ | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Anlasserschutzes: 1=AKTIV; 0=INAKTIV |
| STAT_ANLASSER_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Anlasserfreigabe: 1=AKTIV; 0=INAKTIV |
| STAT_ANLASSER_MOTORSTOP | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Motorstop-Flags: 1=AKTIV; 0=INAKTIV |

### RES_0X6216_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SONDENHEIZUNG_ANSTEUERUNG_BANK1 | 0/1 | high | unsigned char | - | - | - | - | - | Ansteuerung der Endstufe(n) der Lambdasondenheizung(en) durch FSW oder Tester, Bank 1: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_ANSTEUERUNG_BANK2 | 0/1 | high | unsigned char | - | - | - | - | - | Ansteuerung der Endstufe(n) der Lambdasondenheizung(en) durch FSW oder Tester, Bank 2: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_TESTERKONTROLLE_BANK1 | 0/1 | high | unsigned char | - | - | - | - | - | Testerkontrolle über Ansteuerung der Endstufe(n) der Lambdasondenheizung(en), Bank 1: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_TESTERKONTROLLE_BANK2 | 0/1 | high | unsigned char | - | - | - | - | - | Testerkontrolle über Ansteuerung der Endstufe(n) der Lambdasondenheizung(en), Bank 2: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_ANSTEUERUNG_TESTER_BANK1 | 0/1 | high | unsigned char | - | - | - | - | - | Ansteuerung der Endstufe(n) der Lambdasondenheizung(en) durch Tester, Bank 1: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_ANSTEUERUNG_TESTER_BANK2 | 0/1 | high | unsigned char | - | - | - | - | - | Ansteuerung der Endstufe(n) der Lambdasondenheizung(en) durch Tester, Bank 2: 1=AKTIV; 0=INAKTIV |

### RES_0X6217_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KRAFTSTOFFPUMPE_BTS_EKP_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freigabe Bauteilschutz Elektrokraftstoffpumpe: 1=AKTIV; 0=INAKTIV |
| STAT_KRAFTSTOFFPUMPE_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Elektrokraftstoffpumpe: 1=AKTIV; 0=INAKTIV |
| STAT_KRAFTSTOFFPUMPE_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Elektrokraftstoffpumpe: 1=AKTIV; 0=INAKTIV |
| STAT_KRAFTSTOFFPUMPE_BTS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bauteilschutz Elektrokraftstoffpumpe: 1=EIN; 0=AUS |

### RES_0X6218_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELUEFTER_BTS_ELUE_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freigabe Bauteilschutz E-Lüfter: 1=AKTIV; 0=INAKTIV |
| STAT_ELUEFTER_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung E-Lüfter: 1=AKTIV; 0=INAKTIV |
| STAT_ELUEFTER_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung E-Lüfter: 1=AKTIV; 0=INAKTIV |

### RES_0X6219_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEKUNDAERLUFTVENTIL_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Sekundärluftventil: 1=AKTIV; 0=INAKTIV |
| STAT_SEKUNDAERLUFTVENTIL_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Sekundärluftventil: 1=AKTIV; 0=INAKTIV |
| STAT_SEKUNDAERLUFTVENTIL_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Sekundärluftventil: 1=AKTIV; 0=INAKTIV |

### RES_0X621A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANKENTLUEFTUNGSVENTIL_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Tankentlüftungsventil: 1=AKTIV; 0=INAKTIV |
| STAT_TANKENTLUEFTUNGSVENTIL_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Öffnung Tankentlüftungsventil: 1=AKTIV; 0=INAKTIV |

### RES_0X621B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UEBERTEMPERATURLEUCHTE_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Übertemperaturleuchte: 1=AKTIV; 0=INAKTIV |
| STAT_UEBERTEMPERATURLEUCHTE_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Übertemperaturleuchte: 1=AKTIV; 0=INAKTIV |
| STAT_UEBERTEMPERATURLEUCHTE_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Übertemperaturleuchte: 1=AKTIV; 0=INAKTIV |

### RES_0X621C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORWARNLEUCHTE_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Motorwarnleuchte: 1=AKTIV; 0=INAKTIV |
| STAT_MOTORWARNLEUCHTE_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Motorwarnleuchte: 1=AKTIV; 0=INAKTIV |
| STAT_MOTORWARNLEUCHTE_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Motorwarnleuchte: 1=AKTIV; 0=INAKTIV |

### RES_0X621D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABGASKLAPPENSTELLER_POSITION_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Position des Abgasklappenstellers in Prozent |
| STAT_ABGASKLAPPENSTELLER_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Diagnosefreigabe für Abgasklappensteller: 1=AKTIV, 0=INAKTIV |
| STAT_ABGASKLAPPENSTELLER_ABGLEICH | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_ABGLEICH | - | - | - | Abgleichstatus des Abgasklappenstellers |
| STAT_ABGASKLAPPENSTELLER_FEHLER | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_FEHLER | - | - | - | Fehler des Abgasklappenstellers |
| STAT_ABGASKLAPPENSTELLER_SPERRE | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_SPERRE | 1.0 | 1.0 | 0.0 | Abgleichsperre des Abgasklappenstellers |

### RES_0X621E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INTERFERENZROHRKLAPPENSTELLER_POSITION_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Position des Interferenzrohrklappenstellers in Prozent |
| STAT_INTERFERENZROHRKLAPPENSTELLER_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Diagnosefreigabe für Interferenzrohrklappensteller: 1=AKTIV, 0=INAKTIV |
| STAT_INTERFERENZROHRKLAPPENSTELLER_ABGLEICH | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_ABGLEICH | - | - | - | Abgleichstatus des Interferenzrohrklappenstellers |
| STAT_INTERFERENZROHRKLAPPENSTELLER_FEHLER | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_FEHLER | - | - | - | Fehler des Interferenzrohrklappenstellers |
| STAT_INTERFERENZROHRKLAPPENSTELLER_SPERRE | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_SPERRE | - | - | - | Abgleichsperre des Interferenzrohrklappenstellers |

### RES_0X6220_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_GETRIEBE_NEUTRAL_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Adaptionswert des Getriebeschaltwalzenpotentiometers für den Neutralgang in Volt |
| STAT_ADAPTION_GETRIEBE_GANG1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 1.Gang in Volt |
| STAT_ADAPTION_GETRIEBE_GANG2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 2.Gang in Volt |
| STAT_ADAPTION_GETRIEBE_GANG3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 3.Gang in Volt |
| STAT_ADAPTION_GETRIEBE_GANG4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 4.Gang in Volt |
| STAT_ADAPTION_GETRIEBE_GANG5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 5.Gang in Volt |
| STAT_ADAPTION_GETRIEBE_GANG6_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 6.Gang in Volt |
| STAT_ADAPTION_GETRIEBE | 0/1 | high | unsigned char | - | - | - | - | - | Status Adaption Getriebe: 1=für alle Gänge abgeschlossen; 0=nicht abgeschlossen |

### RES_0X6221_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_DROSSELKLAPPE1_KANAL1_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 1 der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_KANAL1_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 1 der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_KANAL2_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 2 der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_KANAL2_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 2 der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Adaption Drosselklappe 1: 1=abgeschlossen; 0=nicht abgeschlossen |
| STAT_ADAPTION_DROSSELKLAPPE1_NOTLAUFPUNKT_WERT | % | high | int | - | - | 1600.0 | 65536.0 | 0.0 | Adaptionswert Notlaufpunkt der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_KANAL1_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 1 der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_KANAL1_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 1 der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_KANAL2_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 2 der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_KANAL2_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 2 der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Adaption Drosselklappe 2: 1=abgeschlossen; 0=nicht abgeschlossen |
| STAT_ADAPTION_DROSSELKLAPPE2_NOTLAUFPUNKT_WERT | % | high | int | - | - | 1600.0 | 65536.0 | 0.0 | Adaptionswert Notlaufpunkt der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_ABWEICHUNG_ADAPTION_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert Interkanalabweichung der Adaptionswerte der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_ABWEICHUNG_ADAPTION_MAX_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert maximale Interkanalabweichung der Adaptionswerte der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_ABWEICHUNG_ROHWERT_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert Interkanalabweichung der Rohwerte der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_ABWEICHUNG_ROHWERT_MAX_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert maximale Interkanalabweichung der Rohwerte der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_ABWEICHUNG_ADAPTION_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert Interkanalabweichung der Adaptionswerte der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_ABWEICHUNG_ADAPTION_MAX_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert maximale Interkanalabweichung der Adaptionswerte der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_ABWEICHUNG_ROHWERT_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert Interkanalabweichung der Rohwerte der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_ABWEICHUNG_ROHWERT_MAX_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert maximale Interkanalabweichung der Rohwerte der Drosselklappe 2 in Prozent |

### RES_0X6222_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL1_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 1 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL1_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 1 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL2_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 2 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL2_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 2 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Adaption Fahrwertgeber: 1=abgeschlossen; 0=nicht abgeschlossen |

### RES_0X6223_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_LAMBDAREGELUNG_BANK1_DATA | DATA | high | data[288] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lambdaregelungskennfeldes KFLRA |
| STAT_ADAPTION_LAMBDAREGELUNG_BANK2_DATA | DATA | high | data[288] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lambdaregelungskennfeldes KFLRA2 |

### RES_0X6224_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_SCHRAEGLAGE_GIERRATE_WERT | °/s | high | int | - | - | 1.0 | 2000.0 | 0.0 | Nullpunktadaptionswert der Gierrate in Grad pro Sekunde |
| STAT_ADAPTION_SCHRAEGLAGE_ROLLRATE_WERT | °/s | high | int | - | - | 1.0 | 2000.0 | 0.0 | Nullpunktadaptionswert der Rollrate in Grad pro Sekunde |

### RES_0X6228_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_KLOPFREGELUNG_VKS1_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 1 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS2_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 2 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS3_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 3 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS4_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 4 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS5_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 5 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS6_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 6 |

### RES_0X6230_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VENTILSPIELSERVICE_RESTWEG_WERT | km | high | int | - | - | 1.0 | 1.0 | 0.0 | Restwegstrecke bis zur Ventileinstellung in Kilometer |
| STAT_VENTILSPIELSERVICE_ANZAHL_RESET_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Rücksetzungen des Serviceintervals |

### RES_0X6231_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPERRUNG_EKP | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus von EKP, Anlasser und Einspritzung: 0 == INAKTIV; 1 == AKTIV |

### RES_0X6232_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UEBERDREHZAHL_GRENZE_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Motorüberdrehzahlgrenzwert in Umdrehungen pro Minute |
| STAT_UEBERDREHZAHL_MAX_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | vorgekommene Maximaldrehzahl in Umdrehungen pro Minute |
| STAT_UEBERDREHZAHL_KMSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand der letzten Überschreitung des Motorüberdrehzahlgrenzwertes in Kilometer |
| STAT_UEBERDREHZAHL_ANZAHL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Überschreitungen des Motorüberdrehzahlgrenzwertes |

### RES_0X6233_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKUSTIK_VARIANTE | 0/1 | high | unsigned char | - | - | - | - | - | Aktivierungsstatus der länderspezifischen Datenvariante der Funktion AKUSTIK: 1 == AKTIV, 0 == INAKTIV |

### RES_0X623C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NETTOCODIERDATEN_BLOCK_3300_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Codierdatenarray 3300 (BSZR - betriebsstundenzählerrelevant) |
| STAT_NETTOCODIERDATEN_BLOCK_3320_DATA | DATA | high | data[64] | - | - | 1.0 | 1.0 | 0.0 | Codierdatenarray 3320 (BSZU - betriebsstundenzählerunabhängig) |

### RES_0X6241_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_WERK_BEGRENZUNG | 0/1 | high | unsigned char | - | - | - | - | - | Aktivierungsstatus Drehzahlbegrenzung Werk: 1=AKTIV; 0=INAKTIV |

### RES_0X6260_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKUSTIKKLAPPENVENTIL_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Akustikklappenventil: 1=AKTIV; 0=INAKTIV |
| STAT_AKUSTIKKLAPPENVENTIL_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Akustikklappenventil: 1=AKTIV; 0=INAKTIV |
| STAT_AKUSTIKKLAPPENVENTIL_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Akustikklappenventil: 1=AKTIV; 0=INAKTIV |

### RES_0X6261_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTHEBEL_SENSOR1_WERT | % | high | int | - | - | 100.0 | 32768.0 | 0.0 | Rohwert des Schalthebelsensors 1 in Prozent |
| STAT_SPANNUNG_ADC_SCHALTHEBEL_SENSOR1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Schalthebelsensors 1 |
| STAT_SCHALTHEBEL_SENSOR2_WERT | % | high | int | - | - | 100.0 | 32768.0 | 0.0 | Rohwert des Schalthebelsensors 2 in Prozent |
| STAT_SPANNUNG_ADC_SCHALTHEBEL_SENSOR2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Schalthebelsensors 2 |
| STAT_SCHALTHEBEL_SENSOR_WERT | % | high | int | - | - | 100.0 | 32768.0 | 0.0 | plausibilisierter Rohwert der Schalthebelsensoren in Prozent |

### RES_0X6270_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRGESTELLNUMMER_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | EWS-Fahrgestellnummer |

### RES_0X6271_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHLUESSELDATEN_SCHLUESSEL_NUMMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlüsselnummer |
| STAT_SCHLUESSELDATEN_SCHLUESSEL_TYP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlüsseltyp: 1 == Geldbörsenschlüssel; 2 == Hauptschlüssel; 3 == Nachschlüssel |
| STAT_SCHLUESSELDATEN_AUTOINIT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Autoinit: 0 == keine automatische Initialisierung; 1 == automatische Initialisierung |
| STAT_SCHLUESSELDATEN_SCHLUESSEL_SPERRE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlüsselsperrung: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSELDATEN_SCHLUESSEL_ANLERNZUSTAND_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlüsselanlernzustand: 0 == Schlüssel ist nicht angelernt; 1 == Schlüssel ist angelernt |
| STAT_SCHLUESSELDATEN_MSC_HANDLING_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand Handling mechanischer Schlüsselcode: 0 == lesen/schreiben; 1 == nicht lesen schreiben |
| STAT_SCHLUESSELDATEN_SCHLUESSEL_ID_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Schlüsselidentifier |
| STAT_SCHLUESSELDATEN_SECRETKEY_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Secret Key des Schlüssel |
| STAT_SCHLUESSELDATEN_PASSWORD_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Secret Key des Schlüssel |

### RES_0X6272_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANLERNDATUM_ORT_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag des Schlüsselanlerndatums |
| STAT_ANLERNDATUM_ORT_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat des Schlüsselanlerndatums |
| STAT_ANLERNDATUM_ORT_JAHR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Jahr des Schlüsselanlerndatums |
| STAT_ANLERNDATUM_ORT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ort des Schlüsselanlernens |

### RES_0X6273_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHLUESSELANLERNEN_STATUS_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Status des EWS-Schlüsselanlernprozesses |

### RES_0X6274_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MECHANISCHER_SCHLUESSELCODE_TEXT | TEXT | high | string[5] | - | - | 1.0 | 1.0 | 0.0 | mechanischer Schlüsselcode in ASCII |

### RES_0X6275_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SGVERRIEGELUNG_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Status der Verriegelung des SGs |

### RES_0X6278_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHLUESSEL_AKTUELL_KEY_NR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlüsselnummer: 0 == kein aktueller Schlüssel, 1-10 == aktueller Schlüssel |
| STAT_SCHLUESSEL_AKTUELL_KEY_TYPE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlüsseltyp: 1 == Geldbörsenschlüssel, 2 == Standardschlüssel, 3 == Nachschlüssel |
| STAT_SCHLUESSEL_AKTUELL_KEY_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweiser Schlüsselstatus: Bit 0 == reserviert, Bit 1 == gesperrt, Bit 2 == Daten plausibel, Bit 3 == angelernt, Bit 4 == Automatisches Anlernen gesetzt, Bit 5 == Ignoriere MSC gesetzt |
| STAT_SCHLUESSEL_AKTUELL_AUTH_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweiser Authentisierungsstatus: Bit 0 == Schlüssel in BMSX bekannt, Bit 1 == Reserviert, Bit 2 == Reserviert, Bit 3 == SG verriegelt, Bit 4 == Anlernfunktion aktiviert |
| STAT_SCHLUESSEL_AKTUELL_SYS_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweiser Systemstatus: Bit 0 == Kommunikationsfehler |
| STAT_SCHLUESSEL_AKTUELL_MECH_KEY_CODE_TEXT | TEXT | high | string[5] | - | - | 1.0 | 1.0 | 0.0 | mechanischer Schlüsselcode |

### RES_0X627A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWS_DIAGNOSE_ENV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweise Umgebungsinformation: Bit 0 == Stromversorgung Ringantenne vorhanden, Bit 1 == Killschalter während EWS-Funktion gezogen, Bit 2 == Killschalter gezogen |
| STAT_EWS_DIAGNOSE_LOGSTATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweise Logistikinformation: Bit 0 == Schlüssel ist der BMSX bekannt, Bit 1 == Authentisierung erfolgt, Bit 2 == BMSX ist verriegelt, Bit 3 == Anlernfunktion ist aktiv |
| STAT_EWS_DIAGNOSE_AKT_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktueller Status: 0 == EWS Funktion beendet, >0 == EWS aktiv |
| STAT_EWS_DIAGNOSE_AKT_ERROR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktueller Fehler: 0 == kein Fehler,  >0 == Fehler |
| STAT_EWS_DIAGNOSE_LEARN_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktueller Anlernstatus: 0 == nicht aktiv, 1 == aktiv, 2 == Anlernen i.O., > 2 == Fehler |
| STAT_EWS_DIAGNOSE_RDX_DATA | DATA | high | data[127] | - | - | 1.0 | 1.0 | 0.0 | Interne Nutzung EA |
| STAT_EWS_DIAGNOSE_CBL_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Interne Nutzung EA |
| STAT_EWS_DIAGNOSE_CBX1_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Interne Nutzung EA |
| STAT_EWS_DIAGNOSE_CBX2_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Interne Nutzung EA |

### RES_0X627B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHLUESSEL_SPERRSTATI_01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 1: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 2: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 3: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 4: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_05_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 5: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_06_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 6: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_07_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 7: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_08_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 8: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_09_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 9: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 10: 0 == nicht gesperrt; 1 == gesperrt |

### RES_0X6282_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERVICE_KMSTAND_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Servicekilometerstand |

### RES_0X6283_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERVICE_DATUM_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Servicedatum |

### RES_0X6284_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESAMTWEGSTRECKE_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | redundanter Gesamtwegstreckenzähler in Kilometer |

### RES_0X6286_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRZEUGMODUSSPEICHER_AKTUELL_KMSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Umschaltvorgang |
| STAT_FAHRZEUGMODUSSPEICHER_AKTUELL_MODUS | 0-n | high | unsigned char | - | TAB_MR_FZG_MODUS | - | - | - | aktuell aktiver Fahrzeugmodus |
| STAT_FAHRZEUGMODUSSPEICHER_AKTUELL_ASC | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ASC im aktuellen Fahrzyklus: 1 == ASC deaktiviert, 0 == ASC aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_AKTUELL_ABS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ABS im aktuellen Fahrzyklus: 1 == ABS deaktiviert, 0 == ABS aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_AKTUELL_SONDERCODIERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Reifencodiersteckers / der Sondercodierung im aktuellen Fahrzyklus: 1 == gesteckt / aktiv, 0 == nicht gesteckt / inaktiv |
| STAT_FAHRZEUGMODUSSPEICHER_ZWEITLETZT_KMSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim vorletzten Umschaltvorgang |
| STAT_FAHRZEUGMODUSSPEICHER_ZWEITLETZT_MODUS | 0-n | high | unsigned char | - | TAB_MR_FZG_MODUS | 1.0 | 1.0 | 0.0 | im vorletzten Fahrzyklus aktiver Fahrzeugmodus |
| STAT_FAHRZEUGMODUSSPEICHER_ZWEITLETZT_ASC | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ASC im vorletzten Fahrzyklus: 1 == ASC deaktiviert, 0 == ASC aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_ZWEITLETZT_ABS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ABS im vorletzten Fahrzyklus: 1 == ABS deaktiviert, 0 == ABS aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_ZWEITLETZT_SONDERCODIERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Reifencodiersteckers / der Sondercodierung im vorletzten Fahrzyklus: 1 == gesteckt / aktiv, 0 == nicht gesteckt / inaktiv |
| STAT_FAHRZEUGMODUSSPEICHER_DRITTLETZT_KMSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim drittletzten Umschaltvorgang |
| STAT_FAHRZEUGMODUSSPEICHER_DRITTLETZT_MODUS | 0-n | high | unsigned char | - | TAB_MR_FZG_MODUS | 1.0 | 1.0 | 0.0 | im drittletzten Fahrzyklus aktiver Fahrzeugmodus |
| STAT_FAHRZEUGMODUSSPEICHER_DRITTLETZT_ASC | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ASC im drittletzten Fahrzyklus: 1 == ASC deaktiviert, 0 == ASC aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_DRITTLETZT_ABS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ABS im drittletzten Fahrzyklus: 1 == ABS deaktiviert, 0 == ABS aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_DRITTLETZT_SONDERCODIERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Reifencodiersteckers / der Sondercodierung im drittletzten Fahrzyklus: 1 == gesteckt / aktiv, 0 == nicht gesteckt / inaktiv |
| STAT_FAHRZEUGMODUSSPEICHER_VIERTLETZT_KMSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim viertletzten Umschaltvorgang |
| STAT_FAHRZEUGMODUSSPEICHER_VIERTLETZT_MODUS | 0-n | high | unsigned char | - | TAB_MR_FZG_MODUS | 1.0 | 1.0 | 0.0 | im viertletzten Fahrzyklus aktiver Fahrzeugmodus |
| STAT_FAHRZEUGMODUSSPEICHER_VIERTLETZT_ASC | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ASC im viertletzten Fahrzyklus: 1 == ASC deaktiviert, 0 == ASC aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_VIERTLETZT_ABS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ABS im viertletzten Fahrzyklus: 1 == ABS deaktiviert, 0 == ABS aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_VIERTLETZT_SONDERCODIERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Reifencodiersteckers / der Sondercodierung im viertletzten Fahrzyklus: 1 == gesteckt / aktiv, 0 == nicht gesteckt / inaktiv |

### RES_0X6287_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSORBOXDATEN_BESCHLEUNIGUNG1_WERT | m/s² | high | int | - | - | 1.0 | 800.0 | 0.0 | Querbeschleunigung des Sensorboxdatensatzes 1 in Meter pro Quadratsekunde |
| STAT_SENSORBOXDATEN_BESCHLEUNIGUNG2_WERT | m/s² | high | int | - | - | 1.0 | 800.0 | 0.0 | Querbeschleunigung des Sensorboxdatensatzes 2 in Meter pro Quadratsekunde |
| STAT_SENSORBOXDATEN_BESCHLEUNIGUNG3_WERT | m/s² | high | int | - | - | 1.0 | 800.0 | 0.0 | Querbeschleunigung des Sensorboxdatensatzes 3 in Meter pro Quadratsekunde |
| STAT_SENSORBOXDATEN_BESCHLEUNIGUNG4_WERT | m/s² | high | int | - | - | 1.0 | 800.0 | 0.0 | Querbeschleunigung des Sensorboxdatensatzes 4 in Meter pro Quadratsekunde |
| STAT_SENSORBOXDATEN_STATUS1 | 0/1 | high | unsigned char | - | - | - | - | - | Status des Sensorboxdatensatzes 1: 1 = belegt, 0 = nicht belegt |
| STAT_SENSORBOXDATEN_STATUS2 | 0/1 | high | unsigned char | - | - | - | - | - | Status des Sensorboxdatensatzes 2: 1 = belegt, 0 = nicht belegt |
| STAT_SENSORBOXDATEN_STATUS3 | 0/1 | high | unsigned char | - | - | - | - | - | Status des Sensorboxdatensatzes 3: 1 = belegt, 0 = nicht belegt |
| STAT_SENSORBOXDATEN_STATUS4 | 0/1 | high | unsigned char | - | - | - | - | - | Status des Sensorboxdatensatzes 4: 1 = belegt, 0 = nicht belegt |
| STAT_SENSORBOXDATEN_GESCHWINDIGKEIT1_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Geschwindigkeit des Sensorboxdatensatzes 1 in Kilometer pro Stunde |
| STAT_SENSORBOXDATEN_GESCHWINDIGKEIT2_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Geschwindigkeit des Sensorboxdatensatzes 2 in Kilometer pro Stunde |
| STAT_SENSORBOXDATEN_GESCHWINDIGKEIT3_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Geschwindigkeit des Sensorboxdatensatzes 3 in Kilometer pro Stunde |
| STAT_SENSORBOXDATEN_GESCHWINDIGKEIT4_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Geschwindigkeit des Sensorboxdatensatzes 4 in Kilometer pro Stunde |
| STAT_SENSORBOXDATEN_KILOMETERSTAND1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand des Sensorboxdatensatzes 1 in Kilometer |
| STAT_SENSORBOXDATEN_KILOMETERSTAND2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand des Sensorboxdatensatzes 2 in Kilometer |
| STAT_SENSORBOXDATEN_KILOMETERSTAND3_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand des Sensorboxdatensatzes 3 in Kilometer |
| STAT_SENSORBOXDATEN_KILOMETERSTAND4_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand des Sensorboxdatensatzes 4 in Kilometer |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KL_15_HW_DIGITAL_MR | 0xE013 | STAT_KL_15_HW_DIGITAL_EIN | Status Klemme 15 Hardware digital | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BATTERIESPANNUNG_MR | 0xE142 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| EXHAUST_REGULATION_OR_TYPEAPPROVAL_NUMBER | 0xF196 | STAT_TYPPRUEFNUMMER_TEXT | Typprüfnummer | TEXT | - | high | string[17] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_PROFIL01_MR | 0x2300 | - | Auslesen der Daten des FASTA-Profils 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2300_D |
| FASTA_PROFIL02_MR | 0x2301 | - | Auslesen der Daten des FASTA-Profils 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2301_D |
| FASTA_PROFIL03_MR | 0x2302 | - | Auslesen der Daten des FASTA-Profils 3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2302_D |
| FASTA_PROFIL04_MR | 0x2303 | - | Auslesen der Daten des FASTA-Profils 4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2303_D |
| FASTA_PROFIL05_MR | 0x2304 | - | Auslesen der Daten des FASTA-Profils 5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2304_D |
| FASTA_PROFIL06_MR | 0x2305 | - | Auslesen der Daten des FASTA-Profils 6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2305_D |
| FASTA_PROFIL07_MR | 0x2306 | - | Auslesen der Daten des FASTA-Profils 7 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2306_D |
| FASTA_PROFIL08_MR | 0x2307 | - | Auslesen der Daten des FASTA-Profils 8 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2307_D |
| FASTA_PROFIL09_MR | 0x2308 | - | Auslesen der Daten des FASTA-Profils 9 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2308_D |
| FASTA_PROFIL10_MR | 0x2309 | - | Auslesen der Daten des FASTA-Profils 10 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2309_D |
| FASTA_PROFIL11_MR | 0x230A | - | Auslesen der Daten des FASTA-Profils 11 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230A_D |
| FASTA_PROFIL12_MR | 0x230B | - | Auslesen der Daten des FASTA-Profils 12 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230B_D |
| FASTA_PROFIL13_MR | 0x230C | - | Auslesen der Daten des FASTA-Profils 13 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230C_D |
| FASTA_PROFIL14_MR | 0x230D | - | Auslesen der Daten des FASTA-Profils 14 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230D_D |
| FASTA_PROFIL15_MR | 0x230E | - | Auslesen der Daten des FASTA-Profils 15 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230E_D |
| FASTA_LASTKOLLEKTIV1_MR | 0x2320 | - | Auslesen der Daten des Lastkollektivs 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2320_D |
| BETRIEBSSTUNDENZAEHLER_MR | 0x4AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | Betriebsstundenzähler des Motors in Sekunden | s | - | high | unsigned long | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_MR | 0x6200 | - | Auslesen der vom SG verwendeten Temperaturen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6200_D |
| GESCHWINDIGKEIT_MR | 0x6201 | - | Auslesen der vom SG verwendeten Geschwindigkeiten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6201_D |
| DRUCK_MR | 0x6202 | - | Auslesen der vom SG verwendeten Drücke | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6202_D |
| DREHZAHL_MR | 0x6203 | - | Auslesen der vom SG verwendeten Drehzahlen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6203_D |
| SPANNUNG_MR | 0x6204 | - | Auslesen der vom SG verwendeten Spannungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6204_D |
| LAMBDAREGELUNG_MR | 0x620A | - | Auslesen von Werten der Lambdaregelung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x620A_D |
| LAST_MR | 0x620B | - | Auslesen der Lastzustände des Motors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x620B_D |
| ZUENDUNG_MR | 0x620C | - | Auslesen von Werten der Zündung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x620C_D |
| EINSPRITZUNG_MR | 0x620D | - | Auslesen von Werten der Einspritzung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x620D_D |
| ASC_MR | 0x620E | - | Auslesen von ASC-relevanten Werten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x620E_D |
| KLOPFREGELUNG_MR | 0x620F | - | Auslesen von Betriebsdaten der Klopfregelung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x620F_D |
| DROSSELKLAPPE_MR | 0x6210 | - | Auslesen von Drosselklappenwerten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6210_D |
| FAHRWERTGEBER_MR | 0x6211 | - | Auslesen von Fahrwertgeberwerten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6211_D |
| SENSORBOX_MR | 0x6212 | - | Auslesen der vom SG verwendeten Signale der Sensorbox sowie daraus berechneter Werte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6212_D |
| GETRIEBE_MR | 0x6213 | - | Auslesen von Getriebewerten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6213_D |
| SCHALTER_MR | 0x6214 | - | Auslesen von Schaltereingängen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6214_D |
| ANLASSER_MR | 0x6215 | - | Auslesen von anlasserrelevanten Stati | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6215_D |
| LAMBDASONDENHEIZUNG_MR | 0x6216 | - | Auslesen von Ansteuerstati der Lambdasondenheizung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6216_D |
| KRAFTSTOFFPUMPE_MR | 0x6217 | - | Auslesen von Ansteuerstati der Elektrokraftstoffpumpe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6217_D |
| ELUEFTER_MR | 0x6218 | - | Auslesen von Ansteuerstati des E-Lüfters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6218_D |
| SEKUNDAERLUFTVENTIL_MR | 0x6219 | - | Auslesen von Ansteuerstati des Sekundärluftventils | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6219_D |
| TANKENTLUEFTUNGSVENTIL_MR | 0x621A | - | Auslesen von Ansteuerstati des Tankentlüftungsventils | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x621A_D |
| UEBERTEMPERATURLEUCHTE_MR | 0x621B | - | Auslesen von Ansteuerstati der Übertemperaturleuchte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x621B_D |
| MOTORWARNLEUCHTE_MR | 0x621C | - | Auslesen von Ansteuerstati der Motorwarnleuchte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x621C_D |
| ABGASKLAPPENSTELLER_MR | 0x621D | - | Auslesen von Werten des Abgasklappenstellers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x621D_D |
| INTERFERENZROHRKLAPPENSTELLER_MR | 0x621E | - | Auslesen von Werten des Interferenzrohrklappenstellers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x621E_D |
| SCHALTSAUGROHR_MR | 0x621F | STAT_SCHALTSAUGROHR_POSITION_WERT | Position des Schaltsaugrohres in Prozent | % | - | high | int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| ADAPTION_GETRIEBE_LESEN_MR | 0x6220 | - | Auslesen der Adaptionswerte des Getriebeschaltwalzenpotentiometers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6220_D |
| ADAPTION_DROSSELKLAPPE_LESEN_MR | 0x6221 | - | Auslesen der Adaptionswerte der Drosselklappe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6221_D |
| ADAPTION_FAHRWERTGEBER_LESEN_MR | 0x6222 | - | Auslesen der Adaptionswerte des Fahrwertgebers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6222_D |
| ADAPTION_GEMISCH_LESEN_MR | 0x6223 | - | Auslesen von Kennfeldinhalten der Lambdaregelungsadaption | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6223_D |
| ADAPTION_SCHRAEGLAGE_LESEN_MR | 0x6224 | - | Auslesen von Adaptionswerten der Schräglagenberechnung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6224_D |
| ADAPTION_LEERLAUF_LESEN_MR | 0x6225 | STAT_ADAPTION_LEERLAUF_VORSTEUERUNG_WERT | Adaptionswert der Leerlaufvorsteuerung in Prozent | % | - | high | int | - | 100.0 | 32768.0 | 0.0 | - | 22 | - | - |
| ADAPTION_SCHALTHEBEL_LESEN_MR | 0x6226 | STAT_ADAPTION_SCHALTHEBEL_SENSOR_WERT | Adaptionswert des Schalthebelsensors in Prozent | % | - | high | int | - | 100.0 | 32768.0 | 0.0 | - | 22 | - | - |
| ADAPTION_LAUFUNRUHE_LESEN_MR | 0x6227 | STAT_ADAPTION_LAUFUNRUHE_WERT | Adaptionswert der Laufunruheberechnung in Prozent | % | - | high | int | - | 1024.0 | 1953125.0 | 0.0 | - | 22 | - | - |
| ADAPTION_KLOPFREGELUNG_LESEN_MR | 0x6228 | - | Auslesen der Adaptionswerte der Klopfregelung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6228_D |
| ADAPTION_GANGWECHSEL_LESEN_MR | 0x6229 | STAT_ADAPTION_GANGWECHSEL_ZAEHLER_DKVER_WERT | adaptiver Maximalwert von cnt_dkver_um nach Momenteneingriff durch die Gangwechselunterstützung | - | - | high | unsigned int | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| VENTILSPIELSERVICE_MR | 0x6230 | - | Auslesen und Überschreiben von Werten des Ventilspielserviceintervals | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6230_D | RES_0x6230_D |
| SPERRUNG_EKP_MR | 0x6231 | - | Auslesen des Sperrstatus bzw. De-/Aktivierung der Sperrung von EKP, Anlasser und Einspritzung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6231_D | RES_0x6231_D |
| UEBERDREHZAHL_MR | 0x6232 | - | Auslesen und Löschen von Informationen zu Überdrehzahlereignissen | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6232_D | RES_0x6232_D |
| AKUSTIK_VARIANTE_MR | 0x6233 | - | Auslesen des Aktivierungsstatus bzw. De-/Aktivierung der länderspezifischen Datenvariante der Funktion AKUSTIK | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6233_D | RES_0x6233_D |
| NETTOCODIERDATEN_MR | 0x623C | - | Auslesen der Nettocodierdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x623C_D |
| GETRIEBE_VARIANTE_MR | 0x623D | STAT_GETRIEBE_VARIANTE | codierte Getriebevariante: 0 == Applikation Getriebe-Variante 1 (Serie) aktiv, 1 == Applikation Getriebe-Variante 2 aktiv | 0-n | - | high | unsigned char | TAB_MR_GETRIEBE_VARIANTE | - | - | - | - | 22 | - | - |
| ROZ_VARIANTE_MR | 0x623E | STAT_ROZ_VARIANTE | codierte Kraftstoffvariante (ROZ): 0 == Applikation ROZ-Variante 1 (Serie) aktiv, 1 == Applikation ROZ-Variante 2 aktiv | 0-n | - | high | unsigned char | TAB_MR_ROZ_VARIANTE | - | - | - | - | 22 | - | - |
| DATENSATZ_MR | 0x623F | STAT_DATENSATZ_TEXT | Datensatzinformation als ASCII-Text | TEXT | - | high | string[251] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ADAPTION_LOESCHEN_MR | 0x6240 | - | Löschen von Adaptionswertegruppen.  Bei Motordrehzahl == 0 wird direkt nach Jobausführung ein Reset ausgelöst und damit die Adaptionswerte in den gesetzten Gruppen initialisiert. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6240_D | - |
| DREHZAHL_WERK_MR | 0x6241 | - | Auslesen und De-/Aktivieren der Drehzahlbegrenzung für das Werk | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6241_D | RES_0x6241_D |
| NOCKENWELLENDIAGNOSE_MR | 0x6242 | - | De-/Aktivierung der Nockenwellendiagnose | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6242_D | - |
| ADAPTION_GEMISCH_SCHREIBEN_MR | 0x6243 | - | Schreiben von Werten der Lambdaregelungsadaption | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6243_D | - |
| ADAPTION_GETRIEBE_SCHREIBEN_MR | 0x6244 | - | Schreiben von Werten der Getriebeadaption | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6244_D | - |
| EINSPRITZVENTIL_ANSTEUERN_MR | 0x6250 | - | Ansteuern der Einspritzventile | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6250_D | - |
| SEKUNDAERLUFTVENTIL_ANSTEUERN_MR | 0x6251 | - | Ansteuern des Sekundärluftventils | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6251_D | - |
| TANKENTLUEFTUNGVENTIL_ANSTEUERN_MR | 0x6252 | - | Ansteuern des Tankentlüftungsventils | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6252_D | - |
| ELEKTROKRAFTSTOFFPUMPE_ANSTEUERN_MR | 0x6253 | - | Ansteuern der Elektrokraftstoffpumpe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6253_D | - |
| MOTORLUEFTER_ANSTEUERN_MR | 0x6254 | - | Ansteuern des elektrischen Motorlüfters | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6254_D | - |
| LAMBDASONDENHEIZUNG_ANSTEUERN_MR | 0x6255 | - | Ansteuern der Lambdasondenheizungen | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6255_D | - |
| UEBERTEMPERATURLEUCHTE_ANSTEUERN_MR | 0x6256 | - | Ansteuern der Übertemperaturleuchte | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6256_D | - |
| MOTORWARNLEUCHTE_ANSTEUERN_MR | 0x6257 | - | Ansteuern der Motorwarnleuchte | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6257_D | - |
| ABGASKLAPPENSTELLER_ANSTEUERN_MR | 0x6258 | - | Ansteuern des Abgasklappenstellers | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6258_D | - |
| INTERFERENZROHRKLAPPENSTELLER_ANSTEUERN_MR | 0x6259 | - | Ansteuern des Interferenzrohrklappenstellers | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6259_D | - |
| SCHALTSAUGROHR_ANSTEUERN_MR | 0x625A | - | Ansteuern des Schaltsaugrohres | - | - | - | - | - | - | - | - | - | 2F | ARG_0x625A_D | - |
| DROSSELKLAPPENMOTOR_ANSTEUERN_MR | 0x625B | - | Ansteuern des Drosselklappenmotors | - | - | - | - | - | - | - | - | - | 2F | ARG_0x625B_D | - |
| DROSSELKLAPPENREGLER_ANSTEUERN_MR | 0x625C | - | Ansteuern bzw. Stimulieren der Drosselklappenlageregelung durch eine Sollwertvorgabe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x625C_D | - |
| AKUSTIKKLAPPENVENTIL_ANSTEUERN_MR | 0x625D | - | Ansteuern des Akustikklappenventils | - | - | - | - | - | - | - | - | - | 2F | ARG_0x625D_D | - |
| EINSPRITZVENTIL_EKP_ANSTEUERN_MR | 0x625E | - | gemeinsames Ansteuern von Einspritzventilen und Elektrokraftstoffpumpe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x625E_D | - |
| AKUSTIKKLAPPENVENTIL_MR | 0x6260 | - | Auslesen von Ansteuerstati des Akustikklappenventils | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6260_D |
| SCHALTHEBEL_MR | 0x6261 | - | Auslesen von Werten der Schalthebelsensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6261_D |
| FAHRGESTELLNUMMER_MR | 0x6270 | - | Auslesen und Schreiben der EWS-Fahrgestellnummer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6270_D | RES_0x6270_D |
| SCHLUESSELDATEN_MR | 0x6271 | - | Auslesen und Schreiben der EWS-Schlüsseldaten; Vor dem Auslesen der Schlüsseldaten muß mit STEUERN_SCHLUESSELDATEN_AUSWAHL_MR die Schlüsselnummer gesetzt werden. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6271_D | RES_0x6271_D |
| ANLERNDATUM_ORT_MR | 0x6272 | - | Auslesen und Schreiben des EWS-Schlüsselanlerndatums/-orts | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6272_D | RES_0x6272_D |
| SCHLUESSELANLERNEN_MR | 0x6273 | - | Auslesen des Status bzw. Starten des EWS-Schlüsselanlernprozesses | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6273_D | RES_0x6273_D |
| MECHANISCHER_SCHLUESSELCODE_MR | 0x6274 | - | Auslesen und Schreiben des mechanischen Schlüsselcodes | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6274_D | RES_0x6274_D |
| SGVERRIEGELUNG_MR | 0x6275 | - | Auslesen des Verriegelungsstatus bzw. Verriegelung des SG | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6275_D | RES_0x6275_D |
| SCHLUESSEL_SPERREN_MR | 0x6276 | - | Sperren eines Schlüssels | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6276_D | - |
| SCHLUESSEL_FREIGEBEN_MR | 0x6277 | - | Freigeben eines Schlüssels | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6277_D | - |
| SCHLUESSEL_AKTUELL_MR | 0x6278 | - | Auslesen aktueller Schlüsseldaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6278_D |
| SCHLUESSELDATEN_AUSWAHL_MR | 0x6279 | - | Auswahl des Schlüssels für den nachfolgend mit STATUS_SCHLUESSELDATEN_MR die Schlüsseldaten ausgelesen werden können | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6279_D | - |
| EWS_DIAGNOSE_MR | 0x627A | - | EWS-Diagnoseinformationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x627A_D |
| SCHLUESSEL_SPERRSTATI_MR | 0x627B | - | Auslesen der Sperrstati aller Schlüssel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x627B_D |
| SERVICE_KMSTAND_MR | 0x6282 | - | Auslesen und Schreiben des Service-Kilometerstandes | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6282_D | RES_0x6282_D |
| SERVICE_DATUM_MR | 0x6283 | - | Auslesen und Schreiben des Service-Datums | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6283_D | RES_0x6283_D |
| GESAMTWEGSTRECKE_MR | 0x6284 | - | Auslesen und Überschreiben des redundanten Gesamtwegstreckenzählers | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6284_D | RES_0x6284_D |
| FAHRZEUGMODUSSPEICHER_MR | 0x6286 | - | Auslesen des Fahrzeugmodusspeichers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6286_D |
| SENSORBOXDATEN_MR | 0x6287 | - | Auslesen von Sensorboxdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6287_D |
| ADAPTION_FAHRWERTGEBER_MR | 0xF300 | - | Adaptierung des Fahrwertgebers | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ADAPTION_GETRIEBE_MR | 0xF301 | - | Anstossen der Adaption der Getriebepotispannungen für alle Gänge | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ABGLEICH_ABGASKLAPPE_MR | 0xF310 | - | Anstossen des Abgleichs der Abgasklappe | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ABGLEICH_INTERFERENZROHRKLAPPE_MR | 0xF311 | - | Anstossen des Abgleichs der Interferenzrohrklappe | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LOESCHUNG_FASTA_MR | 0xF320 | - | Anstossen der Löschung aller gesammelten FASTA-Daten | - | - | - | - | - | - | - | - | - | 31 | - | - |

### TAB_MR_ASC_MODUS

| WERT | TEXT |
| --- | --- |
| 7 | AUS |
| 1 | Modus 1 |
| 2 | Modus 2 |
| 10 | Modus 3 |
| 13 | Modus 4 |
| 16 | Modus 5 |

### TAB_MR_ASC_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | AUS |
| 1 | AKTIV |
| 2 | FEHLER |
| 3 | KEINE_FREIGABE |
| 4 | STANDBY |

### TAB_MR_ASC_TASTER

| WERT | TEXT |
| --- | --- |
| 0 | nicht betätigt |
| 1 | betätigt |
| 2 | NOT-AUS aktiv |

### TAB_MR_FZG_MODUS

| WERT | TEXT |
| --- | --- |
| 1 | Modus 1 |
| 2 | Modus 2 |
| 3 | Modus 3 |
| 4 | Modus 4 |
| 5 | Modus 5 |
| 6 | Modus 6 |
| 7 | Modus 7 |

### TAB_MR_GETRIEBE

| WERT | TEXT |
| --- | --- |
| 0x00 | Leergang |
| 0x01 | 1. Gang |
| 0x02 | 2. Gang |
| 0x03 | 3. Gang |
| 0x04 | 4. Gang |
| 0x05 | 5. Gang |
| 0x06 | 6. Gang |
| 0x0F | kein Gang |

### TAB_MR_GETRIEBE_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0 | Applikation Getriebe-Variante 1 (Serie) aktiv |
| 1 | Applikation Getriebe-Variante 2 aktiv |

### TAB_MR_KLAPPEN_ABGLEICH

| WERT | TEXT |
| --- | --- |
| 0 | Abgleich abgeschlossen |
| 1 | Abgleich fehlerhaft |
| 255 | Diagnose gesperrt, Abfrage Abgleichstatus nicht möglich |

### TAB_MR_KLAPPEN_FEHLER

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler |
| 1 | unzulässiges PWM-Signal |
| 2 | Abgleichfehler |
| 3 | mechanischer Fehler oder Blockade des Stellmotors |
| 4 | Leitungsunterbrechung PWM an Stellmotor |
| 255 | Diagnose gesperrt, Fehlerabfrage nicht möglich |

### TAB_MR_KLAPPEN_SPERRE

| WERT | TEXT |
| --- | --- |
| 0 | Abgleich frei |
| 1 | Sperrbedingung für Abgleich, Motor dreht |
| 255 | Diagnose gesperrt, Abfrage Sperrbedingung nicht möglich |

### TAB_MR_ROZ_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0 | Applikation ROZ-Variante 1 (Serie) aktiv |
| 1 | Applikation ROZ-Variante 2 aktiv |

### TAB_MR_SCHALTSAUGROHR

| WERT | TEXT |
| --- | --- |
| 1 | Bereitschaft |
| 2 | Position 1 |
| 3 | Position 2 |
| 4 | Takten zwischen Position 1 und Position 2 |

### TAB_MR_VENTILSPIELSERVICE_MODUS

| WERT | TEXT |
| --- | --- |
| 1 | SET - Überschreiben von Restwegstrecke und Löschzähler |
| 2 | RESET - Rücksetzen des Ventilspielserviceintervalls |

### STATCLIENTAUTHTXT

| SB | TEXT |
| --- | --- |
| 0x00 | Freigabe von Zuendung und Einspritzung (noch) nicht erteilt (noch nicht versucht oder Kommunikation gestört, Motorlauf gesperrt) |
| 0x01 | Freigabe von Zuendung und Einspritzung erteilt (Challenge-Response erfolgreich) |
| 0x02 | Freigabe von Zuendung und Einspritzung abgelehnt (Challenge-Response fehlgeschlagen, falsche Response, Kommunikation i.O.) |
| 0x03 | nicht definiert |

### STATFREESKTXT

| SB | TEXT |
| --- | --- |
| 0xFE | Ablage unbegrenzt |
| 0xFF | ungültig |
| 0xXY | freie Ablagen |

### STATEWSVERTXT

| SB | TEXT |
| --- | --- |
| 0x01 | Direktschreiben des SecretKey |
| 0x02 | Direktschreiben des SecretKey und DH-Abgleich |
| 0xXY | unbekannt |
