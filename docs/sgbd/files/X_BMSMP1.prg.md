# X_BMSMP1.prg

## General

|  |  |
| --- | --- |
| File | X_BMSMP1.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 161 |
| Origin | BMW/ist EA-362 Ulbricht |
| Revision | 8.000 |
| Author | ist_GmbH EA-362 Ulbricht |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad Motorsteuerung BMSMP |  |  |
| ORIGIN | string | BMW/ist EA-362 Ulbricht |  |  |
| REVISION | string | 8.000 |  |  |
| AUTHOR | string | ist_GmbH EA-362 Ulbricht |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.68 |  |  |
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

### CALID_CVN_LESEN

OBD Calibration ID, CVN Calibration verification number UDS  : $22   ReadDataByIdentifier UDS  : $2541 CAL-ID Calibration ID and CVN Calibration verification number

_No arguments._

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

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

### STATUS_EWS4_SK

Lesen des SecretKey des Client für EWS4 UDS   : $22   ReadDataByIdentifier UDS   : $C002 Sub-Parameter

_No arguments._

### STEUERN_EWS4_SK

17 "EWS4-data" schreiben UDS   : $2E   WriteDataByIdentifier UDS   : $C001 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Byte0 LOCK_CLIENT_SK WRITE_CLIENT_SK UNLOCK_CLIENT_SK UNLOCK_DELETE_CLIENT_HASH_SK |
| DATEN | string | Byte1...16 16 Byte Daten (SecretKey), falls: MODE = WRITE_CLIENT_SK (0x03) MODE = UNLOCK_CLIENT_SK (0x07) MODE = UNLOCK_DELETE_CLIENT_HASH_SK (0x11) KEINE Daten nötig, falls MODE = LOCK_CLIENT_SK (0x01) |

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
| 0x000001 | Reinshagen / Delphi |
| 0x000002 | Leopold Kostal GmbH & Co. KG |
| 0x000003 | Hella Fahrzeugkomponenten GmbH |
| 0x000004 | Siemens |
| 0x000005 | Eaton |
| 0x000006 | UTA |
| 0x000007 | Helbako GmbH |
| 0x000008 | Robert Bosch GmbH |
| 0x000009 | Lear Corporation |
| 0x000010 | VDO |
| 0x000011 | Valeo GmbH |
| 0x000012 | MBB |
| 0x000013 | Kammerer |
| 0x000014 | SWF |
| 0x000015 | Blaupunkt |
| 0x000016 | Philips |
| 0x000017 | Alpine Electronics GmbH |
| 0x000018 | Continental Teves AG & Co. OHG |
| 0x000019 | Elektromatik Südafrika |
| 0x000020 | Harman Becker Automotive Systems |
| 0x000021 | Preh GmbH |
| 0x000022 | Alps Electric Co. Ltd. |
| 0x000023 | Motorola |
| 0x000024 | Temic |
| 0x000025 | Webasto SE |
| 0x000026 | MotoMeter |
| 0x000027 | Delphi Automotive PLC |
| 0x000028 | DODUCO (Beru) |
| 0x000029 | DENSO |
| 0x000030 | NEC |
| 0x000031 | DASA |
| 0x000032 | Pioneer Corporation |
| 0x000033 | Jatco |
| 0x000034 | FUBA Automotive GmbH & Co. KG |
| 0x000035 | UK-NSI |
| 0x000036 | AABG |
| 0x000037 | Dunlop |
| 0x000038 | Sachs |
| 0x000039 | ITT |
| 0x000040 | FTE (Fahrzeugtechnik Ebern) |
| 0x000041 | Megamos |
| 0x000042 | TRW Automotive GmbH |
| 0x000043 | WABCO Fahrzeugsysteme GmbH |
| 0x000044 | ISAD Electronic Systems |
| 0x000045 | HEC Hella Electronics Corporation |
| 0x000046 | Gemel |
| 0x000047 | ZF Friedrichshafen AG |
| 0x000048 | GMPT |
| 0x000049 | Harman Becker Automotive Systems GmbH |
| 0x000050 | Remes GmbH |
| 0x000051 | ZF Lenksysteme GmbH |
| 0x000052 | Magneti Marelli S.p.A. |
| 0x000053 | Johnson Controls Inc. |
| 0x000054 | GETRAG Getriebe- und Zahnradf. Hermann Hagenmeyer GmbH & Co. KG |
| 0x000055 | Behr-Hella Thermocontrol GmbH |
| 0x000056 | Siemens VDO Automotive |
| 0x000057 | Visteon Innovation & Technology GmbH |
| 0x000058 | Autoliv AB |
| 0x000059 | Haberl Electronic GmbH & Co. KG |
| 0x000060 | Magna International Inc. |
| 0x000061 | Marquardt GmbH |
| 0x000062 | AB Elektronik GmbH |
| 0x000063 | SDVO/BORG |
| 0x000064 | Hirschmann Car Communication GmbH |
| 0x000065 | hoerbiger-electronics |
| 0x000066 | Thyssen Krupp Automotive |
| 0x000067 | Gentex Corporation |
| 0x000068 | Atena GmbH |
| 0x000069 | Magna-Donelly |
| 0x000070 | Koyo Steeting Europe |
| 0x000071 | NSI Beheer B.V. |
| 0x000072 | Aisin AW Co. Ltd. |
| 0x000073 | Schorlock |
| 0x000074 | Schrader Electronics Ltd. |
| 0x000075 | Huf-Electronics Bretten GmbH |
| 0x000076 | CEL |
| 0x000077 | AUDIO MOBIL Elektronik GmbH |
| 0x000078 | rd electronic |
| 0x000079 | iSYS RTS GmbH |
| 0x000080 | Westfalia-Automotive GmbH |
| 0x000081 | Tyco Electronics |
| 0x000082 | Paragon AG |
| 0x000083 | IEE S.A. |
| 0x000084 | TEMIC AUTOMOTIVE of NA |
| 0x000085 | Sonceboz S.A. |
| 0x000086 | Meta System S.p.A. |
| 0x000087 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x000088 | MANN+HUMMEL GmbH |
| 0x000089 | Brose Fahrzeugteile GmbH & Co. |
| 0x000090 | Keihin |
| 0x000091 | Vimercati S.p.a |
| 0x000092 | CRH |
| 0x000093 | TPO Display Corp |
| 0x000094 | Küster Automotive GmbH |
| 0x000095 | Hitachi Automotive |
| 0x000096 | Continental AG |
| 0x000097 | TI-Automotive |
| 0x000098 | Hydro |
| 0x000099 | Johnson Controls Inc. |
| 0x00009A | Takata-Petri |
| 0x00009B | Mitsubishi Electric B.V. (Melco) |
| 0x00009C | Autokabel |
| 0x00009D | GKN Plc |
| 0x00009E | Zollner Elektronik AG |
| 0x00009F | peiker acustic GmbH & Co. KG |
| 0x0000A0 | Bosal-Oris |
| 0x0000A1 | Cobasys |
| 0x0000A2 | Automotive Lighting Reutlingen GmbH |
| 0x0000A3 | CONTI VDO |
| 0x0000A4 | A.D.C. Automotive Distance Control Systems GmbH |
| 0x0000A5 | Novero Dabendorf GmbH |
| 0x0000A6 | LAMES S.p.a. |
| 0x0000A7 | Magna/Closures |
| 0x0000A8 | Harbin Wan Yu Technology Co |
| 0x0000A9 | ThyssenKrupp Presta AG |
| 0x0000AA | ArvinMeritor |
| 0x0000AB | Kongsberg Automotive GmbH |
| 0x0000AC | SMR Automotive Mirrors Stuttgart GmbH |
| 0x0000AD | So.Ge.Mi. |
| 0x0000AE | MTA S.p.A. |
| 0x0000AF | Alfmeier Präzision AG |
| 0x0000B0 | Eltek Deutechland GmbH |
| 0x0000B1 | OMRON Automotive Electronics Europe GmbH |
| 0x0000B2 | ASK Industries GmbH |
| 0x0000B3 | CML Innovative Technologies GmbH & Co. KG |
| 0x0000B4 | APAG Elektronik AG |
| 0x0000B5 | Nexteer Automotive |
| 0x0000B6 | Hans Widmaier Fernmelde- und Feinwerktechnik |
| 0x0000B7 | Robert Bosch Battery Systems GmbH |
| 0x0000B8 | Kyocera Display Europe GmbH |
| 0x0000B9 | Magna Powertrain AG & Co. KG |
| 0x0000BA | BorgWarner Beru Systems GmbH |
| 0x0000BB | BMW AG |
| 0x0000BC | Benteler Duncan Plant |
| 0x0000BD | U-Shin Deutschland Zugangssysteme GmbH |
| 0x0000BE | Schaeffler Technologies AG & Co. KG |
| 0x0000BF | JTEKT Corporation |
| 0x0000C0 | VLF |
| 0x0000C1 | Flextronics |
| 0x0000C2 | LG Chem |
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

### ARG_0X6440_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GRUPPENAUSWAHL | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | 511.0 | bitweise Angabe der zu löschenden Adaptionsgruppen: 0 = nicht zugeordnete Funktionen; 1 = Kraftstoffgemisch; 2 = Leerlaufvorsteuerung; 3 = Getriebe; 4 = EGAS-Lageregelung; 5 = Sensorik Fahrwertgeber; 6 = Sensorik Drosselklappenwinkel; 7 = ASC; 8 = Klopfregelung |

### ARG_0X6442_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NOCKENWELLENDIAGNOSE_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | De-/Aktivierung Nockenwellendiagnose: 0 == DEAKTIVIEREN; 1 == AKTIVIEREN |

### ARG_0X6444_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ADAPTION_GETRIEBE_NEUTRAL | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den Neutralgang in Volt |
| ADAPTION_GETRIEBE_GANG1 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 1. Gang in Volt |
| ADAPTION_GETRIEBE_GANG2 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 2. Gang in Volt |
| ADAPTION_GETRIEBE_GANG3 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 3. Gang in Volt |
| ADAPTION_GETRIEBE_GANG4 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 4. Gang in Volt |
| ADAPTION_GETRIEBE_GANG5 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 5. Gang in Volt |
| ADAPTION_GETRIEBE_GANG6 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 6. Gang in Volt |

### ARG_0X6445_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ADAPTION_LAMBDAREGELUNG_BANKNR | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 2.0 | Banknummer der auszulesenden Lambdaregeladaptionsdaten |
| ADAPTION_LAMBDAREGELUNG_LABEL | 0-n | high | unsigned char | - | TAB_MR_LAMBDAADAPTION_LABEL | - | - | - | - | - | auszulesendes Label der Lambdaregeladaption |
| ADAPTION_LAMBDAREGELUNG_TEILENR | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 4.0 | Teilenummer des auszulesenden Labels |

### ARG_0X6446_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ADAPTION_LAMBDAREGELUNG_BANKNR | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 2.0 | Banknummer der auszulesenden Lambdaregeladaptionsdaten |
| ADAPTION_LAMBDAREGELUNG_LABEL | 0-n | high | unsigned char | - | TAB_MR_LAMBDAADAPTION_LABEL | - | - | - | - | - | auszulesendes Label der Lambdaregeladaption |
| ADAPTION_LAMBDAREGELUNG_TEILENR | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 4.0 | Teilenummer des auszulesenden Labels |
| ADAPTION_LAMBDAREGELUNG_DATEN_DATA | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | - | - | durch  Banknummer, Label und Teilenummer spezifizierte Daten der Lambdaregelungsadaption |

### ARG_0X6447_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERBAUDIAGNOSE_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | - | - | De-/aktivierung der Verbaudiagnose des Leerlaufsteppers: 1 == aktiv, 0 == inaktiv |
| VERBAUDIAGNOSE_DAUER | s | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | - | - | zulässige Gesamtdauer der Verbaudiagnose des Leerlaufsteppers in Sekunden |

### ARG_0X6450_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EV_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die mit EV_ANSTEUERN_NUMMER ausgewählten Einspritzventile |
| EV_ANSTEUERN_NUMMER | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | bitcodierte Angabe der anzusteuernden Einspritzventile in Zündreihenfolge, z.B. 9 -> 0b00001001 -> Ansteuerung des 1. und des 4. EVs in Zündreihenfolge |

### ARG_0X6451_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SLV_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Sekundärluftventil in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X6452_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TEV_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Tankentlüftungsventil in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| TEV_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 100.0 | Tastverhältnis der Ansteuerung des Tankentlüftungsventils in Prozent |

### ARG_0X6453_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EKP_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Elektrokraftstoffpumpe in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| EKP_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 100.0 | Tastverhältnis der Ansteuerung der Elektrokraftstoffpumpe in Prozent |

### ARG_0X6454_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELUE_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den elektrischen Motorlüfter in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X6455_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LSH_ANSTEUERN_NUMMER | - | high | unsigned char | - | - | 1.0 | 1.0 | -1.0 | - | 2.0 | Banknummer der anzusteuernden Lambdasondenheizung |
| LSH_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Lambdasondenheizung in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| LSH_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 100.0 | Tastverhältnis der Ansteuerung der Lambdasondenheizung in Prozent; war Pausenzeit in x*100ms |

### ARG_0X6456_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UETM_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Übertemperaturleuchte in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X6457_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MIL_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Motorwarnleuchte in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X6458_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AGKL_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den Abgasklappensteller in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| AGKL_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 10.0 | 90.0 | Tastverhältnis der Ansteuerung des Abgasklappenstellers in Prozent |

### ARG_0X6459_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IFRKL_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den Interferenzrohrklappensteller in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| IFRKL_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 10.0 | 90.0 | Tastverhältnis der Ansteuerung des Interferenzrohrklappenstellers in Prozent |

### ARG_0X645A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DISA_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Schaltsaugrohres in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| DISA_ANSTEUERN_SZ | 0-n | high | unsigned char | - | TAB_MR_SCHALTSAUGROHR | - | - | - | - | - | Sollzustand des Schaltsaugrohres bei Ansteuerung |

### ARG_0X645B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DKM_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung des Drosselklappenmotors in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| DKM_ANSTEUERN_START | % | high | signed int | - | - | 100.0 | 1.0 | 0.0 | -95.0 | 95.0 | Startposition der Ansteuerung des Drosselklappenmotors in Prozent |
| DKM_ANSTEUERN_ENDE | % | high | signed int | - | - | 100.0 | 1.0 | 0.0 | -95.0 | 95.0 | Endposition der Ansteuerung des Drosselklappenmotors in Prozent |
| DKM_ANSTEUERN_GRADIENT | %/s | high | unsigned long | - | - | 2147483648.0 | 50000.0 | 0.0 | 0.0 | 99999.9999 | Gradient der Ansteuerung des Drosselklappenmotors in Prozent je Sekunde |

### ARG_0X645C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DKR_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung/Stimulierung der Drosselklappenlageregelung in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| DKR_ANSTEUERN_START | % | high | unsigned int | - | - | 65536.0 | 1600.0 | 0.0 | 0.0 | 100.0 | Startposition/-sollwert der Stimulierung der Drosselklappenlageregelung in Prozent |
| DKR_ANSTEUERN_ENDE | % | high | unsigned int | - | - | 65536.0 | 1600.0 | 0.0 | 0.0 | 100.0 | Endposition/-sollwert der Stimulierung der Drosselklappenlageregelung in Prozent |
| DKR_ANSTEUERN_GRADIENT | %/s | high | unsigned long | - | - | 2147483648.0 | 50000.0 | 0.0 | 0.0 | 50000.0 | Gradient der Ansteuerung/Stimulierung der Drosselklappenlageregelung in Prozent je Sekunde |

### ARG_0X645D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKL_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Akustikklappenventil in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X645E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EVEKP_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der gemeinsamen Ansteuerung für die mit EVEKP_ANSTEUERN_EVNUMMER ausgewählten Einspritzventile und die EKP |
| EVEKP_ANSTEUERN_EVNUMMER | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | bitcodierte Angabe der anzusteuernden Einspritzventile in Zündreihenfolge, z.B. 9 -> 0b00001001 -> Ansteuerung des 1. und des 4. EVs in Zündreihenfolge |
| EVEKP_ANSTEUERN_PULSDAUER | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Pulsdauer der Ansteuerung der über EVEKP_ANSTEUERN_EVNUMMER ausgewählten Einspritzventile in Mikrosekunden |
| EVEKP_ANSTEUERN_EKPTV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 100.0 | Tastverhältnis der Ansteuerung der Elektrokraftstoffpumpe (bei gemeinsamer Ansteuerung mit Einspritzventilen) in Prozent |

### ARG_0X645F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LLSTP_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den Leerlaufstepper in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| LLSTP_ANSTEUERN_POSITION | % | high | unsigned int | - | - | 65536.0 | 100.0 | 0.0 | - | - | anzusteuernde Position des Leerlaufsteppers in Prozent |

### ARG_0X6460_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RFHST_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den Steller der Rückfahrhilfe in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| RFHST_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 10.0 | 90.0 | Tastverhältnis der Ansteuerung des Steller der Rückfahrhilfe in Prozent |

### ARG_0X6470_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAHRGESTELLNUMMER | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | - | - | EWS-Fahrgestellnummer |

### ARG_0X6471_D

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

### ARG_0X6472_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAG | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 31.0 | Tag des Schlüsselanlerndatums |
| MONAT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | Monat des Schlüsselanlerndatums |
| JAHR | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 2009.0 | 2256.0 | Jahr des Schlüsselanlerndatums |
| ORT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ort des Schlüsselanlernens |

### ARG_0X6473_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STARTCODE | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Startcode zum Starten des EWS-Schlüsselanlernprozesses |

### ARG_0X6474_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHLUESSELCODE | TEXT | high | string[5] | - | - | 1.0 | 1.0 | 0.0 | - | - | mechanischer Schlüsselcode in ASCII |

### ARG_0X6475_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERRIEGELUNGCODE | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Code zur Verriegelung des SGs |

### ARG_0X6476_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHLUESSEL_NUMMER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 10.0 | Nummer des zu sperrenden Schlüssels |

### ARG_0X6477_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHLUESSEL_NUMMER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 10.0 | Nummer des freizugebenden Schlüssels |

### ARG_0X6479_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHLUESSEL_NUMBER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 10.0 | Nummer des Schlüssels, dessen Daten ausgelesen werden sollen |

### ARG_0X64A1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPERRUNG_EKP | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | De-/Aktivierung der Sperrung von EKP, Anlasser und Einspritzung: 0 == DEAKTIVIERUNG, 1 == AKTIVIERUNG |

### ARG_0X64A2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LOESCHUNG | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 1.0 | Löschen der Überdrehzahlereignisse: 1 == Löschen |

### ARG_0X64A3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VARIANTE_AKUSTIK | 0/1 | high | unsigned char | - | - | - | - | - | - | - | De-/Aktivierung der länderspezifischen Datenvariante der Funktion AKUSTIK: 1 == AKTIVIERUNG, 0 == DEAKTIVIERUNG |

### ARG_0X64A4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL_WERK_BEGRENZUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Drehzahlbegrenzung für das Werk: 0 == DEAKTIVIEREN; 1 == AKTIVIEREN |

### ARG_0X64A5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPERRUNG_TEV | 0/1 | high | unsigned char | - | - | - | - | - | - | - | De-/Aktivierung der Sperrung des Tankentlüftungsventils: 0 == DEAKTIVIERUNG, 1 == AKTIVIERUNG |

### ARG_0X64A6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WERKSPROZESS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | De-/Aktivierung des Werksprozess: 0 == DEAKTIVIERUNG, 1 == AKTIVIERUNG |

### ARG_0X64C1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERVICE_KMSTAND | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Servicekilometerstand |

### ARG_0XE119_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GWSZ_SCHREIBEN | km | - | signed long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | GWSZ im Kombi auf neuen Wert setzen |

### ARG_0XE12C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERVICE_TAG | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Tag, an dem der nächste Service fällig ist |
| SERVICE_MONAT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Monat, an dem der nächste Service fällig ist |
| SERVICE_JAHR | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Jahr, an dem der nächste Service fällig ist |

### ARG_0XE12D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESTWEG | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzen des Wegstreckenintervalles bis zur nächsten Seviceanzeige |

### BF_TAB_MR_ADAPTIONSFREIGABE_GETRIEBE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_GETRIEBE_FREIGABE_NEUTRAL | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Freigabe Adaption Neutralgang: 1=vorhanden; 0=nicht vorhanden |
| STAT_ADAPTION_GETRIEBE_FREIGABE_GANG1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Freigabe Adaption 1. Gang: 1=vorhanden; 0=nicht vorhanden |
| STAT_ADAPTION_GETRIEBE_FREIGABE_GANG2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Freigabe Adaption 2. Gang: 1=vorhanden; 0=nicht vorhanden |
| STAT_ADAPTION_GETRIEBE_FREIGABE_GANG3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Freigabe Adaption 3. Gang: 1=vorhanden; 0=nicht vorhanden |
| STAT_ADAPTION_GETRIEBE_FREIGABE_GANG4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Freigabe Adaption 4. Gang: 1=vorhanden; 0=nicht vorhanden |
| STAT_ADAPTION_GETRIEBE_FREIGABE_GANG5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Freigabe Adaption 5. Gang: 1=vorhanden; 0=nicht vorhanden |
| STAT_ADAPTION_GETRIEBE_FREIGABE_GANG6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Freigabe Adaption 6. Gang: 1=vorhanden; 0=nicht vorhanden |

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
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 3 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021200 | Energiesparmodus aktiv | 0 |
| 0x3A1000 | Abgasklappe Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1001 | Abgasklappe Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1002 | Abgasklappe Endstufe, Leitungsabfall | 0 |
| 0x3A1003 | Abgasklappe Endstufe, Übertemperatur | 0 |
| 0x3A1020 | elektrische Kraftstoffpumpe Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1021 | elektrische Kraftstoffpumpe Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1022 | elektrische Kraftstoffpumpe Endstufe, Leitungsabfall | 0 |
| 0x3A1023 | elektrische Kraftstoffpumpe Endstufe, Übertemperatur | 0 |
| 0x3A1030 | Interferenzrohrklappe Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1031 | Interferenzrohrklappe Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1032 | Interferenzrohrklappe Endstufe, Leitungsabfall | 0 |
| 0x3A1033 | Interferenzrohrklappe Endstufe, Übertemperatur | 0 |
| 0x3A1040 | Sprunglambdasondenheizung 1 Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1041 | Sprunglambdasondenheizung 1 Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1042 | Sprunglambdasondenheizung 1 Endstufe, Leitungsabfall | 0 |
| 0x3A1043 | Sprunglambdasondenheizung 1 Endstufe, Übertemperatur | 0 |
| 0x3A1050 | Sprunglambdasondenheizung 2 Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1051 | Sprunglambdasondenheizung 2 Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1052 | Sprunglambdasondenheizung 2 Endstufe, Leitungsabfall | 0 |
| 0x3A1053 | Sprunglambdasondenheizung 2 Endstufe, Übertemperatur | 0 |
| 0x3A1060 | Elektrokraftstoffpumpe Low-Side Endstufe intern, Kurzschluss nach Masse | 0 |
| 0x3A1061 | Elektrokraftstoffpumpe Low-Side Endstufe intern, Kurzschluss nach UBatt | 0 |
| 0x3A1062 | Elektrokraftstoffpumpe Low-Side Endstufe intern, Leitungsabfall | 0 |
| 0x3A1063 | Elektrokraftstoffpumpe Low-Side Endstufe intern, Übertemperatur | 0 |
| 0x3A1070 | Rückfahrhilfe Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1071 | Rückfahrhilfe Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1072 | Rückfahrhilfe Endstufe, Leitungsabfall | 0 |
| 0x3A1073 | Rückfahrhilfe Endstufe, Übertemperatur | 0 |
| 0x3A1080 | Sekundärluftventil Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1081 | Sekundärluftventil Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1082 | Sekundärluftventil Endstufe, Leitungsabfall | 0 |
| 0x3A1083 | Sekundärluftventil Endstufe, Übertemperatur | 0 |
| 0x3A1090 | Starterrelais Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1091 | Starterrelais Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1092 | Starterrelais Endstufe, Leitungsabfall | 0 |
| 0x3A1093 | Starterrelais Endstufe, Übertemperatur | 0 |
| 0x3A10A0 | Tankentlüftungsventil Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A10A1 | Tankentlüftungsventil Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A10A2 | Tankentlüftungsventil Endstufe, Leitungsabfall | 0 |
| 0x3A10A3 | Tankentlüftungsventil Endstufe, Übertemperatur | 0 |
| 0x3A10D0 | Schaltsaugrohr Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A10D1 | Schaltsaugrohr Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A10D2 | Schaltsaugrohr Endstufe, Leitungsabfall | 0 |
| 0x3A10D3 | Schaltsaugrohr Endstufe, Übertemperatur | 0 |
| 0x3A10E0 | Hauptrelais Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A10E1 | Hauptrelais Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A10E2 | Hauptrelais Endstufe, Leitungsabfall | 0 |
| 0x3A1101 | Elektrokraftstoffpumpe Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Unterspannung | 0 |
| 0x3A1102 | Elektrokraftstoffpumpe Bauteileschutz Sicherungsfunktion, Überstrom | 0 |
| 0x3A1111 | System Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Unterspannung | 0 |
| 0x3A1112 | System Bauteileschutz Sicherungsfunktion, Überstrom | 0 |
| 0x3A1121 | Zündung Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Unterspannung | 0 |
| 0x3A1122 | Zündung Bauteileschutz Sicherungsfunktion, Überstrom | 0 |
| 0x3A1131 | E-Lüfter Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Unterspannung | 0 |
| 0x3A1132 | E-Lüfter Bauteileschutz Sicherungsfunktion, Überstrom | 0 |
| 0x3A1140 | Killschalter, Signal prellt zu stark | 0 |
| 0x3A1150 | Klemme 15, unplausibles Signal oder Wert | 0 |
| 0x3A1161 | Batterie, Spannung zu niedrig | 0 |
| 0x3A1172 | Kupplungsschalter 1, Kupplung geschlossen, Fehler Plausibilisierung im Schubbetrieb | 0 |
| 0x3A1173 | Kupplungsschalter 1, Kupplung offen, Signal unplausibel | 0 |
| 0x3A1180 | Getriebeschaltwalzenpotentiometer, Signal oder Wert oberhalb Schwelle | 0 |
| 0x3A1181 | Getriebeschaltwalzenpotentiometer, Signal oder Wert unterhalb Schwelle | 0 |
| 0x3A1182 | Getriebeschaltwalzenpotentiometer, unplausibles Signal oder Wert | 0 |
| 0x3A1183 | Getriebeschaltwalzenpotentiometer, unvollständige Gangadaption bei freigeschaltetem Schaltassistent | 0 |
| 0x3A1190 | Schalthebelsensor, Spannung oberhalb Schwelle | 0 |
| 0x3A1191 | Schalthebelsensor, Spannung unterhalb Schwelle | 0 |
| 0x3A1192 | Schalthebelsensor, unplausible Spannung | 0 |
| 0x3A1193 | Schalthebelsensor, fehlerhafte Spannung | 0 |
| 0x3A1194 | Schalthebelsensor, Adaption nicht abgeschlossen | 0 |
| 0x3A11A0 | ASC-ABS-Taster, unplausibles Signal oder Wert | 0 |
| 0x3A11B0 | Hinterradgeschwindigkeit ABS, unplausibles Signal oder Wert | 0 |
| 0x3A11C0 | Vorderradgeschwindigkeit ABS, unplausibles Signal oder Wert | 0 |
| 0x3A11D0 | Fahrzeuggeschwindigkeit CAN, kein Signal oder Wert | 0 |
| 0x3A11E0 | Bremslichtschalter hinten, Signal oder Wert oberhalb Schwelle | 1 |
| 0x3A11F0 | Bremslichtschalter vorne, Signal oder Wert oberhalb Schwelle | 1 |
| 0x3A1203 | CAN-Botschaft Eingang Schalterblock Links, Fehler Overrun | 1 |
| 0x3A1213 | CAN-Botschaft Geschwindigkeit, Fehler Overrun | 1 |
| 0x3A1223 | CAN-Botschaft Sensorbox ID1, Fehler Overrun | 1 |
| 0x3A1233 | CAN-Botschaft Sensorbox ID4, Fehler Overrun | 1 |
| 0x3A1243 | CAN-Botschaft Sensorbox ID7, Fehler Overrun | 1 |
| 0x3A1253 | CAN-Botschaft Bedienung Fahrzeug, Fehler Overrun | 1 |
| 0x3A1263 | CAN-Botschaft Kombidaten, Fehler Overrun | 1 |
| 0x3A1273 | CAN-Botschaft Status Fahrzeug Zugriff, Fehler Overrun | 1 |
| 0x3A1283 | CAN-Botschaft Steuerung Einstellung, Fehler Overrun | 1 |
| 0x3A1293 | CAN-Botschaft Status Federbein Verstellung, Fehler Overrun | 1 |
| 0x3A12C3 | CAN-Botschaft Temperatur Bremsen, Fehler Overrun | 1 |
| 0x3A12D3 | CAN-Botschaft Steuerung Einstellung 2, Fehler Overrun | 1 |
| 0x3A12E3 | CAN-Botschaft Zusatzinformation Grund Funktion, Fehler Overrun | 1 |
| 0x3A1300 | Sensorbox, Fehler Spannungsversorgung | 0 |
| 0x3A1301 | Sensorbox, Zeitüberschreitung CAN-Nachricht | 0 |
| 0x3A1302 | Sensorbox, Sensor- oder Signalfehler | 0 |
| 0x3A1310 | Sturzsensor, Kurzschluss nach UBatt | 0 |
| 0x3A1311 | Sturzsensor, Kurzschluss nach Masse | 0 |
| 0x3A1312 | Sturzsensor, Sturz erkannt | 0 |
| 0x3A1320 | Längsbeschleunigungssensor, Signal unplausibel | 0 |
| 0x3A1330 | Seitenstützenschalter, Signale beider Kanäle zueinander unplausibel | 0 |
| 0x3A1331 | Seitenstützenschalter, nicht eingeklappter Seitenstützständer während der Fahrt | 0 |
| 0x3A1332 | Seitenstützenschalter, unplausible Signale während der Fahrt | 0 |
| 0x3A1340 | Ölniveaugeber, Sensorfehler | 0 |
| 0x3A1350 | Ölniveaugeber, Ölstand zu hoch | 0 |
| 0x3A1360 | Drucksensor, Umgebung, Signal oder Wert oberhalb Schwelle | 0 |
| 0x3A1361 | Drucksensor, Umgebung, Signal oder Wert unterhalb Schwelle | 0 |
| 0x3A1362 | Drucksensor, Umgebung, unplausibles Signal oder Wert | 0 |
| 0x3A1370 | Drucksensor, Kraftstoff, Signal oder Wert oberhalb Schwelle | 0 |
| 0x3A1371 | Drucksensor, Kraftstoff, Signal oder Wert unterhalb Schwelle | 0 |
| 0x3A1372 | Drucksensor, Kraftstoff, unplausibles Signal oder Wert | 0 |
| 0x3A1380 | Temperatursensor, Ansaugluft, Signal oder Wert unterhalb Schwelle | 0 |
| 0x3A1381 | Temperatursensor, Ansaugluft, Signal oder Wert oberhalb Schwelle | 0 |
| 0x3A1382 | Temperatursensor, Ansaugluft, unplausibles Signal oder Wert | 0 |
| 0x3A1390 | Temperatursensor, Motor, Signal oder Wert oberhalb Schwelle | 0 |
| 0x3A1391 | Temperatursensor, Motor, Signal oder Wert unterhalb Schwelle | 0 |
| 0x3A1392 | Temperatursensor, Motor, unplausibles Signal oder Wert | 0 |
| 0x3A13A0 | Temperatursensor, Öl, Signal oder Wert oberhalb Schwelle | 0 |
| 0x3A13A1 | Temperatursensor, Öl, Signal oder Wert unterhalb Schwelle | 0 |
| 0x3A13A2 | Temperatursensor, Öl, unplausibles Signal oder Wert | 0 |
| 0x3A13B0 | Lambdasonde vor Kat, Signal oder Wert unterhalb Schwelle | 0 |
| 0x3A13B1 | Lambdasonde vor Kat, Signal oder Wert oberhalb Schwelle | 0 |
| 0x3A13B2 | Lambdasonde vor Kat, kein Signal oder Wert | 0 |
| 0x3A13B3 | Lambdasonde vor Kat, unplausibles Signal oder Wert | 0 |
| 0x3A13C0 | Lambdasonde 2 vor Kat, Signal oder Wert unterhalb Schwelle | 0 |
| 0x3A13C1 | Lambdasonde 2 vor Kat, Signal oder Wert oberhalb Schwelle | 0 |
| 0x3A13C2 | Lambdasonde 2 vor Kat, kein Signal oder Wert | 0 |
| 0x3A13C3 | Lambdasonde 2 vor Kat, unplausibles Signal oder Wert | 0 |
| 0x3A13D0 | Fahrwertgeber, Vergleichsfehler, Rohwerte | 0 |
| 0x3A13D1 | Fahrwertgeber, Vergleichsfehler, adaptierte Werte | 0 |
| 0x3A13D2 | Fahrwertgeber, Sensor, Kanal 1, MIN-Bereichsfehler | 0 |
| 0x3A13D3 | Fahrwertgeber, Sensor, Kanal 1, MAX-Bereichsfehler | 0 |
| 0x3A13D4 | Fahrwertgeber, Sensor, Kanal 2, MIN-Bereichsfehler | 0 |
| 0x3A13D5 | Fahrwertgeber, Sensor, Kanal 2, MAX-Bereichsfehler | 0 |
| 0x3A13D6 | Fahrwertgeber, Adaption nicht abgeschlossen | 0 |
| 0x3A13D7 | Fahrwertgeber, Sensor, Kanal 1, Kurzschluss nach Masse | 0 |
| 0x3A13D8 | Fahrwertgeber, Sensor, Kanal 1, Kurzschluss nach UBatt | 0 |
| 0x3A13D9 | Fahrwertgeber, Sensor, Kanal 2, Kurzschluss nach Masse | 0 |
| 0x3A13DA | Fahrwertgeber, Sensor, Kanal 2, Kurzschluss nach UBatt | 0 |
| 0x3A13E0 | Kupplungsschalter 2, Kupplung geschlossen, Fehler Plausibilisierung im Schubbetrieb | 0 |
| 0x3A13E1 | Kupplungsschalter 2, Kupplung offen, Signal unplausibel | 0 |
| 0x3A13E2 | Kupplungsschalter 2, Fehler Plausibilisierung beider Kupplungschalter | 0 |
| 0x3A1400 | Drosselklappe 1, Vergleichsfehler, adaptierte Werte | 0 |
| 0x3A1401 | Drosselklappe 1, Vergleichsfehler, Rohwerte | 0 |
| 0x3A1402 | Drosselklappe 1, Sensor, Kanal 1, MIN-Bereichsfehler | 0 |
| 0x3A1403 | Drosselklappe 1, Sensor, Kanal 1, MAX-Bereichsfehler | 0 |
| 0x3A1404 | Drosselklappe 1, Sensor, Kanal 2, MIN-Bereichsfehler | 0 |
| 0x3A1405 | Drosselklappe 1, Sensor, Kanal 2, MAX-Bereichsfehler | 0 |
| 0x3A1406 | Drosselklappe 1, Sensor, Kanal 1, Kurzschluss nach Masse | 0 |
| 0x3A1407 | Drosselklappe 1, Sensor, Kanal 1, Kurzschluss nach UBatt | 0 |
| 0x3A1408 | Drosselklappe 1, Sensor, Kanal 2, Kurzschluss nach Masse | 0 |
| 0x3A1409 | Drosselklappe 1, Sensor, Kanal 2, Kurzschluss nach UBatt | 0 |
| 0x3A1410 | Drosselklappe 1, Initialisierung, Fehler Adaption | 0 |
| 0x3A1411 | Drosselklappe 1, Initialisierung, Fehler Abschaltpfad oder Notlaufpunkt | 0 |
| 0x3A1412 | Drosselklappe 1, Initialisierung, Fehler DK-Motor | 0 |
| 0x3A1420 | Drosselklappe 1, Regelung, Regelanschlag oben | 0 |
| 0x3A1421 | Drosselklappe 1, Regelung, Regelanschlag unten | 0 |
| 0x3A1422 | Drosselklappe 1, Regelung, Lageregelung instabil | 0 |
| 0x3A1423 | Drosselklappe 1, Regelung, Abweichung Ist-Sollwert | 0 |
| 0x3A1430 | Drosselklappe 2, Vergleichsfehler, adaptierte Werte | 0 |
| 0x3A1431 | Drosselklappe 2, Vergleichsfehler, Rohwerte | 0 |
| 0x3A1432 | Drosselklappe 2, Sensor, Kanal 1, MIN-Bereichsfehler | 0 |
| 0x3A1433 | Drosselklappe 2, Sensor, Kanal 1, MAX-Bereichsfehler | 0 |
| 0x3A1434 | Drosselklappe 2, Sensor, Kanal 2, MIN-Bereichsfehler | 0 |
| 0x3A1435 | Drosselklappe 2, Sensor, Kanal 2, MAX-Bereichsfehler | 0 |
| 0x3A1436 | Drosselklappe 2, Sensor, Kanal 1, Kurzschluss nach Masse | 0 |
| 0x3A1437 | Drosselklappe 2, Sensor, Kanal 1, Kurzschluss nach UBatt | 0 |
| 0x3A1438 | Drosselklappe 2, Sensor, Kanal 2, Kurzschluss nach Masse | 0 |
| 0x3A1439 | Drosselklappe 2, Sensor, Kanal 2, Kurzschluss nach UBatt | 0 |
| 0x3A1440 | Drosselklappe 2, Initialisierung, Fehler Adaption | 0 |
| 0x3A1441 | Drosselklappe 2, Initialisierung, Fehler Abschaltpfad oder Notlaufpunkt | 0 |
| 0x3A1442 | Drosselklappe 2, Initialisierung, Fehler DK-Motor | 0 |
| 0x3A1450 | Drosselklappe 2, Regelung, Regelanschlag oben | 0 |
| 0x3A1451 | Drosselklappe 2, Regelung, Regelanschlag unten | 0 |
| 0x3A1452 | Drosselklappe 2, Regelung, Lageregelung instabil | 0 |
| 0x3A1453 | Drosselklappe 2, Regelung, Abweichung Ist-Sollwert | 0 |
| 0x3A1460 | Abgasklappe, Stellmotor, unplausibles Signal oder Wert | 0 |
| 0x3A1461 | Abgasklappe, Stellmotor, Fehler Abgleich | 0 |
| 0x3A1462 | Abgasklappe, Stellmotor, mechanischer Fehler oder Blockade | 0 |
| 0x3A1463 | Abgasklappe, Stellmotor, keine Rückmeldung | 0 |
| 0x3A1470 | Interferenzrohrklappe, Stellmotor, unplausibles Signal oder Wert | 0 |
| 0x3A1471 | Interferenzrohrklappe, Stellmotor, Fehler Abgleich | 0 |
| 0x3A1472 | Interferenzrohrklappe, Stellmotor, mechanischer Fehler oder Blockade | 0 |
| 0x3A1473 | Interferenzrohrklappe, Stellmotor, keine Rückmeldung | 0 |
| 0x3A1480 | Motorlüfter, Signal oder Wert unterhalb Schwelle | 0 |
| 0x3A1481 | Motorlüfter, Signal oder Wert oberhalb Schwelle | 0 |
| 0x3A1491 | Signalqualität Drosselklappensensor, eingeschränkt, Stufe 2 | 0 |
| 0x3A1510 | Leerlaufsteller offen, Überdrehzahlfehler | 0 |
| 0x3A1511 | Leerlaufsteller geschlossen, Unterdrehzahlfehler | 0 |
| 0x3A1530 | elektrisches Kraftstoffsystem, Signal oder Wert unterhalb Schwelle | 0 |
| 0x3A1541 | Fahrgeschwindigkeitsregler, SET-Schalter gesetzt bei Hauptschalter aus | 0 |
| 0x3A1542 | Fahrgeschwindigkeitsregler, RES-Schalter gesetzt bei Hauptschalter aus | 0 |
| 0x3A1543 | Fahrgeschwindigkeitsregler, SET- und RES-Schalter gleichzeitig gesetzt | 0 |
| 0x3A1544 | Fahrgeschwindigkeitsregler, Abschaltung über Schlechtwegerkennung SAF | 0 |
| 0x3A1545 | Fahrgeschwindigkeitsregler, Freigabe verweigert | 0 |
| 0x3A1550 | EWS3, Logistikdatenfehler | 0 |
| 0x3A1551 | EWS3, Signalfehler | 0 |
| 0x3A1560 | EWS4, CAN, Timeout Response CAS | 0 |
| 0x3A1561 | EWS4, CAN, Response CAS nicht authentisch | 0 |
| 0x3A1562 | EWS4, CAN, Nachricht ungültig | 0 |
| 0x3A1563 | EWS4, Datenablage, Schreibfehler | 0 |
| 0x3A1564 | EWS4, Datenablage, Plausibilitätsfehler | 0 |
| 0x3A1565 | EWS4, kein SecretKey programmiert | 0 |
| 0x3A1570 | LR-Adaption, Bank 1, Gemischkorrekturfaktor oberhalb Schwelle | 0 |
| 0x3A1571 | LR-Adaption, Bank 1, Gemischkorrekturfaktor unterhalb Schwelle | 0 |
| 0x3A1580 | LR-Adaption, Bank 2, Gemischkorrekturfaktor oberhalb Schwelle | 0 |
| 0x3A1581 | LR-Adaption, Bank 2, Gemischkorrekturfaktor unterhalb Schwelle | 0 |
| 0x3A1590 | Elektrokraftstoffpumpe, Sperrung | 0 |
| 0x3A15A1 | Klopfregelung, Klopfsensor 1, Leitungsabfall | 0 |
| 0x3A15A2 | Klopfregelung, Klopfsensor 2, Leitungsabfall | 0 |
| 0x3A15C0 | Startfreigabe Sonderzubehör, Sperrung, fehlende Bedatung oder Freischaltcode | 0 |
| 0x3A15C1 | Startfreigabe Sonderzubehör, falsche Konfiguration | 0 |
| 0x3A15F0 | Bremse, Vorderrad, Temperatur zu hoch | 1 |
| 0x3A1600 | Sicherheitskonzept Überwachung Drosselklappenwinkel 1, Abweichung FWG/DK1-Winkel, Rohwerte | 0 |
| 0x3A1601 | Sicherheitskonzept Überwachung Drosselklappenwinkel 1, Abweichung FWG/DK1-Winkel, adaptierte Werte | 0 |
| 0x3A1610 | Sicherheitskonzept Überwachung Drosselklappenwinkel 2, Abweichung FWG/DK2-Winkel, Rohwerte | 0 |
| 0x3A1611 | Sicherheitskonzept Überwachung Drosselklappenwinkel 2, Abweichung FWG/DK2-Winkel, adaptierte Werte | 0 |
| 0x3A1620 | Ebene 2, Überwachung, Drehzahl | 0 |
| 0x3A1621 | Ebene 2, Überwachung, Notlauf | 0 |
| 0x3A1622 | Ebene 2, Überwachung, Drosselklappe 1 | 0 |
| 0x3A1623 | Ebene 2, Überwachung, Drosselklappe 2 | 0 |
| 0x3A1624 | Ebene 2, Überwachung, Fahrwertgeber | 0 |
| 0x3A1625 | Ebene 2, Tempomat, Sollwertüberschreitung, Drosselklappe 1 | 0 |
| 0x3A1626 | Ebene 2, Tempomat, Sollwertüberschreitung, Drosselklappe 2 | 0 |
| 0x3A1627 | Ebene 2, Überwachung, Motortemperatur | 0 |
| 0x3A1628 | Ebene 2, Sollwertüberschreitung, Drosselklappe 1 | 0 |
| 0x3A1629 | Ebene 2, Sollwertüberschreitung, Drosselklappe 2 | 0 |
| 0x3A162A | Ebene 2, Vergleichsfehler, Berechnungswerte Ebene 1 | 0 |
| 0x3A162B | Ebene 2, Berechnung, Fahrzeugmodus | 0 |
| 0x3A162C | Ebene 2, Überwachung, Fehlerreaktion | 0 |
| 0x3A162D | Ebene 2, Berechnung, Zündwinkel | 0 |
| 0x3A162E | Ebene 2, Berechnung, Sollwert, Drosselklappe 1 | 0 |
| 0x3A162F | Ebene 2, Berechnung, Sollwert, Drosselklappe 2 | 0 |
| 0x3A1630 | Ebene 2, Schaltassistent | 0 |
| 0x3A17D3 | CAN-Botschaft Status Rueckwaertsfahren, Fehler Overrun | 1 |
| 0x3A17F3 | CAN-Botschaft Wegstrecke Relativ, Fehler Overrun | 1 |
| 0x3A1800 | ABS-Raddrehzahlsensor, Vorderrad, Sensorfehler | 1 |
| 0x3A1801 | ABS-Raddrehzahlsensor, Hinterrad, Sensorfehler | 1 |
| 0x3A1810 | Unterstützung Gangwechsel, Grenzwertüberschreitung Drosselklappen-Zähler | 0 |
| 0x3A1820 | Rückfahrhilfe, Stellmotor, unplausibles Signal oder Wert | 0 |
| 0x3A1821 | Rückfahrhilfe, Stellmotor, Fehler Abgleich | 0 |
| 0x3A1822 | Rückfahrhilfe, Stellmotor, mechanischer Fehler oder Blockade | 0 |
| 0x3A1823 | Rückfahrhilfe, Stellmotor, keine Rückmeldung | 0 |
| 0x3A1824 | Rückfahrhilfe, Stellmotor, zulässige Anzahl Einlegeversuche überschritten | 0 |
| 0x3A1830 | H-Brücke 1 Drosselklappe/Bypassstepper, Ausgang 1, Kurzschluss nach Masse | 0 |
| 0x3A1831 | H-Brücke 1 Drosselklappe/Bypassstepper, Ausgang 1, Kurzschluss nach UBatt | 0 |
| 0x3A1832 | H-Brücke 1 Drosselklappe/Bypassstepper, Ausgang 2, Kurzschluss nach Masse | 0 |
| 0x3A1833 | H-Brücke 1 Drosselklappe/Bypassstepper, Ausgang 2, Kurzschluss nach UBatt | 0 |
| 0x3A1834 | H-Brücke 1 Drosselklappe/Bypassstepper, Leitungsabfall | 0 |
| 0x3A1835 | H-Brücke 1 Drosselklappe/Bypassstepper, Übertemperatur | 0 |
| 0x3A1840 | H-Brücke 2 Drosselklappe/Bypassstepper, Ausgang 1, Kurzschluss nach Masse | 0 |
| 0x3A1841 | H-Brücke 2 Drosselklappe/Bypassstepper, Ausgang 1, Kurzschluss nach UBatt | 0 |
| 0x3A1842 | H-Brücke 2 Drosselklappe/Bypassstepper, Ausgang 2, Kurzschluss nach Masse | 0 |
| 0x3A1843 | H-Brücke 2 Drosselklappe/Bypassstepper, Ausgang 2, Kurzschluss nach UBatt | 0 |
| 0x3A1844 | H-Brücke 2 Drosselklappe/Bypassstepper, Leitungsabfall | 0 |
| 0x3A1845 | H-Brücke 2 Drosselklappe/Bypassstepper, Übertemperatur | 0 |
| 0x3A1850 | Werksprozess, Aktivierung | 0 |
| 0x3A1A00 | Codierung : falsches Fahrzeug | 0 |
| 0x3A1A01 | Codierung : unplausible Daten während Transaktion | 0 |
| 0x3A1A02 | Codierung : Steuergerät ist nicht codiert | 0 |
| 0x3A1A03 | Codierung : Codiersignaturfehler | 0 |
| 0x3A1A04 | Codierung : Codierdatenübertragungsfehler | 0 |
| 0x3A1A10 | SPI-Kommunikation TriCore <-> CY327 | 0 |
| 0x3A1A20 | CY327, Spannungsversorgung, 5V, Überspannung | 0 |
| 0x3A1A21 | CY327, Spannungsversorgung, 5V, Unterspannung | 0 |
| 0x3A1A30 | CY327, Spannungsversorgung Sensoren 1, Spannungsfehler | 0 |
| 0x3A1A31 | CY327, Spannungsversorgung Sensoren 1, Überspannung | 0 |
| 0x3A1A32 | CY327, Spannungsversorgung Sensoren 1, Kurzschluss nach Masse | 0 |
| 0x3A1A33 | CY327, Spannungsversorgung Sensoren 1, Unterspannung | 0 |
| 0x3A1A40 | CY327, Spannungsversorgung Sensoren 2, Spannungsfehler | 0 |
| 0x3A1A41 | CY327, Spannungsversorgung Sensoren 2, Überspannung | 0 |
| 0x3A1A42 | CY327, Spannungsversorgung Sensoren 2, Kurzschluss nach Masse | 0 |
| 0x3A1A43 | CY327, Spannungsversorgung Sensoren 2, Unterspannung | 0 |
| 0x3A1A50 | CY327, Spannungsversorgung Sensoren 3, Spannungsfehler | 0 |
| 0x3A1A51 | CY327, Spannungsversorgung Sensoren 3, Überspannung | 0 |
| 0x3A1A52 | CY327, Spannungsversorgung Sensoren 3, Kurzschluss nach Masse | 0 |
| 0x3A1A53 | CY327, Spannungsversorgung Sensoren 3, Unterspannung | 0 |
| 0x3A1A60 | CY327, Spannungsversorgung Sensoren 4, Spannungsfehler | 0 |
| 0x3A1A61 | CY327, Spannungsversorgung Sensoren 4, Überspannung | 0 |
| 0x3A1A62 | CY327, Spannungsversorgung Sensoren 4, Kurzschluss nach Masse | 0 |
| 0x3A1A63 | CY327, Spannungsversorgung Sensoren 4, Unterspannung | 0 |
| 0x3A1A70 | Zündung, Endstufe, Identifikation Bausteintreiber | 0 |
| 0x3A1A71 | Zündung, Endstufe, Initialisierung CK200 | 0 |
| 0x3A1A72 | Zündung, Endstufe, SPI-Kommunikation | 0 |
| 0x3A1A80 | Zündendstufe Zylinder 1, Kurzschluss nach UBatt | 0 |
| 0x3A1A81 | Zündendstufe Zylinder 1, Kurzschluss nach Masse | 0 |
| 0x3A1A82 | Zündendstufe Zylinder 1, Leitungsabfall | 0 |
| 0x3A1A90 | Zündendstufe Zylinder 2, Kurzschluss nach UBatt | 0 |
| 0x3A1A91 | Zündendstufe Zylinder 2, Kurzschluss nach Masse | 0 |
| 0x3A1A92 | Zündendstufe Zylinder 2, Leitungsabfall | 0 |
| 0x3A1AA0 | Zündendstufe Zylinder 3, Kurzschluss nach UBatt | 0 |
| 0x3A1AA1 | Zündendstufe Zylinder 3, Kurzschluss nach Masse | 0 |
| 0x3A1AA2 | Zündendstufe Zylinder 3, Leitungsabfall | 0 |
| 0x3A1AB0 | Zündendstufe Zylinder 4, Kurzschluss nach UBatt | 0 |
| 0x3A1AB1 | Zündendstufe Zylinder 4, Kurzschluss nach Masse | 0 |
| 0x3A1AB2 | Zündendstufe Zylinder 4, Leitungsabfall | 0 |
| 0x3A1AC0 | Zündendstufe Zylinder 5, Kurzschluss nach UBatt | 0 |
| 0x3A1AC1 | Zündendstufe Zylinder 5, Kurzschluss nach Masse | 0 |
| 0x3A1AC2 | Zündendstufe Zylinder 5, Leitungsabfall | 0 |
| 0x3A1AD0 | Zündendstufe Zylinder 6, Kurzschluss nach UBatt | 0 |
| 0x3A1AD1 | Zündendstufe Zylinder 6, Kurzschluss nach Masse | 0 |
| 0x3A1AD2 | Zündendstufe Zylinder 6, Leitungsabfall | 0 |
| 0x3A1AE0 | Einspritzventil Zylinder 1, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1AE1 | Einspritzventil Zylinder 1, Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1AE2 | Einspritzventil Zylinder 1, Endstufe, Leitungsabfall | 0 |
| 0x3A1AF0 | Einspritzventil Zylinder 2, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1AF1 | Einspritzventil Zylinder 2, Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1AF2 | Einspritzventil Zylinder 2, Endstufe, Leitungsabfall | 0 |
| 0x3A1B00 | Einspritzventil Zylinder 3, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1B01 | Einspritzventil Zylinder 3, Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1B02 | Einspritzventil Zylinder 3, Endstufe, Leitungsabfall | 0 |
| 0x3A1B10 | Einspritzventil Zylinder 4, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1B11 | Einspritzventil Zylinder 4, Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1B12 | Einspritzventil Zylinder 4, Endstufe, Leitungsabfall | 0 |
| 0x3A1B20 | Einspritzventil Zylinder 5, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1B21 | Einspritzventil Zylinder 5, Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1B22 | Einspritzventil Zylinder 5, Endstufe, Leitungsabfall | 0 |
| 0x3A1B30 | Einspritzventil Zylinder 6, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1B31 | Einspritzventil Zylinder 6, Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1B32 | Einspritzventil Zylinder 6, Endstufe, Leitungsabfall | 0 |
| 0x3A1B40 | Einspritzventil 2 Zylinder 1 bei Saugrohrdusche, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1B41 | Einspritzventil 2 Zylinder 1 bei Saugrohrdusche, Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1B42 | Einspritzventil 2 Zylinder 1 bei Saugrohrdusche, Endstufe, Leitungsabfall | 0 |
| 0x3A1B50 | Einspritzventil 2 Zylinder 2 bei Saugrohrdusche, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1B51 | Einspritzventil 2 Zylinder 2 bei Saugrohrdusche, Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1B52 | Einspritzventil 2 Zylinder 2 bei Saugrohrdusche, Endstufe, Leitungsabfall | 0 |
| 0x3A1B60 | Nockenwelle, keine Signalflanke vorhanden, Eingangspegel high | 0 |
| 0x3A1B61 | Nockenwelle, keine Signalflanke vorhanden, Eingangspegel low | 0 |
| 0x3A1B62 | Nockenwelle, Anzahl und-oder Position der Flanken unplausibel | 0 |
| 0x3A1B70 | Kurbelwelle, Signalstörung | 0 |
| 0x3A1B71 | Kurbelwelle, Signalausfall | 0 |
| 0x3A1B80 | Klopfsensor 1, Leitung A, Kurzschluss nach UBatt | 0 |
| 0x3A1B81 | Klopfsensor 1, Leitung A, Kurzschluss nach Masse | 0 |
| 0x3A1B90 | Klopfsensor 1, Leitung B, Kurzschluss nach UBatt | 0 |
| 0x3A1B91 | Klopfsensor 1, Leitung B, Kurzschluss nach Masse | 0 |
| 0x3A1BA0 | Klopfsensor 2, Leitung A, Kurzschluss nach UBatt | 0 |
| 0x3A1BA1 | Klopfsensor 2, Leitung A, Kurzschluss nach Masse | 0 |
| 0x3A1BB0 | Klopfsensor 2, Leitung B, Kurzschluss nach UBatt | 0 |
| 0x3A1BB1 | Klopfsensor 2, Leitung B, Kurzschluss nach Masse | 0 |
| 0x3A1BD1 | EEPROM: Lesen mehrerer Blöcke fehlgeschlagen | 0 |
| 0x3A1BE0 | Funktionsüberwachung, Prüfung ADC-Leerlauftestimpuls | 0 |
| 0x3A1BE1 | Funktionsüberwachung, Prüfung ADC-Testspannung | 0 |
| 0x3A1BE2 | Funktionsüberwachung, Überwachungsmodul | 0 |
| 0x3A1BE3 | Funktionsüberwachung, Endstufenabschaltung nach Frage-Antwort Fehler | 0 |
| 0x3A1BF2 | Softwarereset FSW, Gruppe 2 | 0 |
| 0x3A1C01 | CAN, Knoten B, BusOff Fehler | 0 |
| 0x3A1C02 | CAN, Knoten C - Diagnose-CAN, BusOff Fehler | 0 |
| 0x3A1C03 | CAN, Knoten D - Applikations-CAN, BusOff Fehler | 0 |
| 0x3A1C04 | CAN, Fehler Hardware | 0 |
| 0x3A1C10 | CJ135, Linearlambdasonde 1, ASIC-Diagnose | 0 |
| 0x3A1C11 | CJ135, Linearlambdasonde 1, SPI-Diagnose | 0 |
| 0x3A1C12 | CJ135, Linearlambdasonde 1, Leitungsdiagnose, Leitungsabfall APE | 0 |
| 0x3A1C13 | CJ135, Linearlambdasonde 1, Leitungsdiagnose, Leitungsabfall IPE | 0 |
| 0x3A1C14 | CJ135, Linearlambdasonde 1, Leitungsdiagnose, Leitungsabfall MES | 0 |
| 0x3A1C15 | CJ135, Linearlambdasonde 1, Leitungsdiagnose, Leitungsabfall RE | 0 |
| 0x3A1C16 | CJ135, Linearlambdasonde 1, Leitungsdiagnose, Kurzschluss nach UBatt | 0 |
| 0x3A1C17 | CJ135, Linearlambdasonde 1, Leitungsdiagnose, Kurzschluss nach Masse | 0 |
| 0x3A1C20 | CJ135, Linearlambdasonde 2, ASIC-Diagnose | 0 |
| 0x3A1C21 | CJ135, Linearlambdasonde 2, SPI-Diagnose | 0 |
| 0x3A1C22 | CJ135, Linearlambdasonde 2, Leitungsdiagnose, Leitungsabfall APE | 0 |
| 0x3A1C23 | CJ135, Linearlambdasonde 2, Leitungsdiagnose, Leitungsabfall IPE | 0 |
| 0x3A1C24 | CJ135, Linearlambdasonde 2, Leitungsdiagnose, Leitungsabfall MES | 0 |
| 0x3A1C25 | CJ135, Linearlambdasonde 2, Leitungsdiagnose, Leitungsabfall RE | 0 |
| 0x3A1C26 | CJ135, Linearlambdasonde 2, Leitungsdiagnose, Kurzschluss nach UBatt | 0 |
| 0x3A1C27 | CJ135, Linearlambdasonde 2, Leitungsdiagnose, Kurzschluss nach Masse | 0 |
| 0x3A1C30 | Linearlambdasondenheizung 1, Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1C31 | Linearlambdasondenheizung 1, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1C32 | Linearlambdasondenheizung 1, Endstufe, Leitungsabfall | 0 |
| 0x3A1C33 | Linearlambdasondenheizung 1, Steuerung, Heizungsfehler | 0 |
| 0x3A1C40 | Linearlambdasondenheizung 2, Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1C41 | Linearlambdasondenheizung 2, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1C42 | Linearlambdasondenheizung 2, Endstufe, Leitungsabfall | 0 |
| 0x3A1C43 | Linearlambdasondenheizung 2, Steuerung, Heizungsfehler | 0 |
| 0x3A1C50 | Batterie, Spannung zu hoch, Grundsystem | 0 |
| 0x3A1C51 | Batterie, Spannung zu niedrig, Grundsystem | 0 |
| 0x3A1C60 | Hauptrelais, Kurzschluss nach Masse | 0 |
| 0x3A1C61 | Hauptrelais, zu früher Abfall | 0 |
| 0x3A1C62 | Hauptrelais klemmt | 0 |
| 0x3A1C70 | Zündendstufe Zylinder 1, Nebenkerze, Kurzschluss nach UBatt | 0 |
| 0x3A1C71 | Zündendstufe Zylinder 1, Nebenkerze, Kurzschluss nach Masse | 0 |
| 0x3A1C72 | Zündendstufe Zylinder 1, Nebenkerze, Leitungsabfall | 0 |
| 0x3A1C80 | Zündendstufe Zylinder 2, Nebenkerze, Kurzschluss nach UBatt | 0 |
| 0x3A1C81 | Zündendstufe Zylinder 2, Nebenkerze, Kurzschluss nach Masse | 0 |
| 0x3A1C82 | Zündendstufe Zylinder 2, Nebenkerze, Leitungsabfall | 0 |
| 0x3A1C90 | Einspritzventil 2 Zylinder 3 bei Saugrohrdusche, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1C91 | Einspritzventil 2 Zylinder 3 bei Saugrohrdusche, Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1C92 | Einspritzventil 2 Zylinder 3 bei Saugrohrdusche, Endstufe, Leitungsabfall | 0 |
| 0x3A1CA0 | Einspritzventil 2 Zylinder 4 bei Saugrohrdusche, Endstufe, Kurzschluss nach UBatt | 0 |
| 0x3A1CA1 | Einspritzventil 2 Zylinder 4 bei Saugrohrdusche, Endstufe, Kurzschluss nach Masse | 0 |
| 0x3A1CA2 | Einspritzventil 2 Zylinder 4 bei Saugrohrdusche, Endstufe, Leitungsabfall | 0 |
| 0xCD845F | CAN, Knoten A - Fahrzeug-CAN, BusOff Fehler | 1 |
| 0xCD941C | CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9420 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0xCD9422 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9426 | CAN KOMBI Nachricht Kombidaten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD942C | CAN SEB Nachricht Sensorbox_ID1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD942E | CAN SEB Nachricht Sensorbox_ID4_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9436 | CAN SLZ Nachricht Status_Fahrzeug_Zugriff_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xCD9438 | CAN ESA-SAF Nachricht Status_Federbein_Verstellung_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9442 | CAN ABS-BCO Nachricht Wegstrecke_Relativ_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9452 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: CRC Fehler | 1 |
| 0xCD9453 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Alive Fehler | 1 |
| 0xCD9454 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: CRC Fehler | 1 |
| 0xCD9455 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Alive Fehler | 1 |
| 0xCD9462 | CAN KOMBI Nachricht Steuerung_Einstellung_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9468 | CAN SEB Nachricht Sensorbox_ID7_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9469 | CAN SEB Nachricht Sensorbox_ID7_Motorrad_2010: Alive Fehler | 1 |
| 0xCD946A | CAN SEB Nachricht Sensorbox_ID7_Motorrad_2010: CRC Fehler | 1 |
| 0xCD946B | CAN KOMBI Nachricht Steuerung_Einstellung_Motorrad_2010: Alive Fehler | 1 |
| 0xCD946C | CAN KOMBI Nachricht Steuerung_Einstellung_Motorrad_2010: CRC Fehler | 1 |
| 0xCD9476 | CAN SEB Nachricht Sensorbox_ID1_Motorrad_2010: Alive Fehler | 1 |
| 0xCD9477 | CAN SEB Nachricht Sensorbox_ID1_Motorrad_2010: CRC Fehler | 1 |
| 0xCD9478 | CAN SEB Nachricht Sensorbox_ID4_Motorrad_2010: Alive Fehler | 1 |
| 0xCD9479 | CAN SEB Nachricht Sensorbox_ID4_Motorrad_2010: CRC Fehler | 1 |
| 0xCD9487 | CAN BCO Nachricht Zusatzinformation_Grund_Funktion_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD948C | CAN KOMBI Nachricht Steuerung_Einstellung_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD948D | CAN KOMBI Nachricht Steuerung_Einstellung_2_Motorrad_2010: Alive Fehler | 1 |
| 0xCD948E | CAN KOMBI Nachricht Steuerung_Einstellung_2_Motorrad_2010: CRC Fehler | 1 |
| 0xCD948F | CAN ABS Nachricht Temperatur_Bremse_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9490 | CAN ABS Nachricht Temperatur_Bremse_Motorrad_2010: Alive Fehler | 1 |
| 0xCD9491 | CAN ABS Nachricht Temperatur_Bremse_Motorrad_2010: CRC Fehler | 1 |
| 0xCD949E | CAN Nachricht Status_Rückwärts_Fahren_Motorrad_2010 : Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x6500 | Ansauglufttemperatur (tans_w) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x6501 | Batteriespannung (ub_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6502 | Drosselklappenwinkel bezogen auf DK- Anschlag (wdkba_w) | % DK | high | signed int | - | 1600 | 65536 | 0 |
| 0x6503 | Motortemperatur (tmot_w) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x6504 | Lambda Regelfaktor Bank 1 (fr_w[0]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6505 | Lambda Regelfaktor Bank 2 (fr_w[1]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6506 | relative Luftfüllung (rl_w) | % | high | unsigned int | - | 0,75 | 32 | 0 |
| 0x6507 | Motordrehzahl (nmot_w) | 1/min | high | unsigned int | - | 0,25 | 1 | 0 |
| 0x6508 | Fahrzeuggeschwindigkeit (vfzg_w) | km/h | high | unsigned int | - | 512 | 65536 | 0 |
| 0x6509 | Spannung System-BTS (uubts_sys_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650A | Spannung Zündungs-BTS (uubts_zdg_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650B | Spannung EKP-BTS (uubts_ekp_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650C | Spannung ELUE-BTS (uubts_elue_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650D | Abgastemperatur vor Kat aus Modell (für LSH bei Boxer-Motoren); (tabgmls) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x650E | Lambdasondenspannung Bank 1 (usvk_w[0]) | V | high | signed int | - | 0,001 | 1 | 0 |
| 0x650F | Lambdasondenspannung Bank 2 (usvk_w[1]) | V | high | signed int | - | 0,001 | 1 | 0 |
| 0x6510 | schneller Mittelwert des Lambdaregelfaktors Bank 1 (frm_w[0]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6511 | schneller Mittelwert des Lambdaregelfaktors Bank 2 (frm_w[1]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6512 | Spannungswert von Getriebeschaltwalze Sensor 1 (ugetrg1_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6513 | Spannungswert Schalthebelsensor (ushs_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6514 | ADC-Spannung Schalthebelsensor Kanal 1 (ushs1_w) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x6515 | ADC-Spannung Schalthebelsensor Kanal 2 (ushs2_w) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x6516 | Winkel Schalthebelsensor in Neutralstellung adaptiert (wadpshssass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6517 | Zeit nach Motorstart (tnse_w) | s | high | unsigned int | - | 0,1 | 1 | 0 |
| 0x6518 | Einspritzzeit (te_w) | ms | high | unsigned int | - | 8 | 1000 | 0 |
| 0x6519 | Letzter berechneter Zündwinkel (zw) | ° KW | Low | signed int | - | 191,25 | 65280 | 0 |
| 0x651A | ADC-Spannung Ansauglufttemperatur (utans_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x651B | Fahrzeuggeschwindigkeit aus Übersetzungsverhältnis und Drehzahl (vfzggang_w) | km/h | high | unsigned int | - | 512 | 65536 | 0 |
| 0x651C | Umgebungsdruck (pu_w) | hPa | high | unsigned int | - | 10 | 256 | 0 |
| 0x651D | gemessener Kraftstoffdruck (frps_meas) | hPa | high | signed int | - | 1 | 5 | 0 |
| 0x651E | Motortemperatur, linearisiert und umgerechnet (tmotlin_w) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x651F | ADC-Wert Batteriespannung/Kl15 (ukl15_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6520 | Rohwert Fahrwertgeber Kanal 1 (fwg1r) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6521 | Rohwert Fahrwertgeber Kanal 2 (fwg2r) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6522 | Fahrwertgeber (fwg_w) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6523 | Fahrwertgeber Kanal 1 adaptiert (fwgad1) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6524 | Fahrwertgeber Kanal 2 adaptiert (fwgad2) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6525 | Spannung Drosselklappenwinkel 1 von Drosselklappe 1 (udkp1r[0]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6526 | Spannung Drosselklappenwinkel 2 von Drosselklappe 1 (udkp2r[0]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6527 | Spannung Drosselklappenwinkel 1 von Drosselklappe 2 (udkp1r[1]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6528 | Spannung Drosselklappenwinkel 2 von Drosselklappe 2 (udkp2r[1]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6529 | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 1 (dkp1r[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652A | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 1 (dkp2r[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652B | Drosselklappenwinkel Kanal 1 adaptiert von Drosselklappe 1 (dkpad1[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x652C | Drosselklappenwinkel Kanal 2 adaptiert von Drosselklappe 1 (dkpad2[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x652D | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 2 (dkp1r[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652E | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 2 (dkp1r[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652F | Drosselklappenwinkel Kanal 1 adaptiert von Drosselklappe 2 (dkpad1[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6530 | Drosselklappenwinkel Kanal 2 adaptiert von Drosselklappe 2 (dkpad2[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6531 | Sollwert des Drosselklappenwinkels der Drosselklappe 1 (wdks_w[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x6532 | Sollwert des Drosselklappenwinkels der Drosselklappe 2 (wdks_w[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x6533 | Rohwert Fahrwertgeber Kanal 1, Ebene 2 (fwg1r_um) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6534 | Rohwert Fahrwertgeber Kanal 2, Ebene 2 (fwg2r_um) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6535 | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 1, Ebene 2 (dkp1r_um[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6536 | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 1, Ebene 2 (dkp2r_um[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6537 | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 2, Ebene 2 (dkp1r_um[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6538 | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 2, Ebene 2 (dkp2r_um[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6539 | Drosselklappenwinkel der Drosselklappe 1, Ebene 2 (wdkba_ar_um[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x653A | Drosselklappenwinkel der Drosselklappe 2, Ebene 2 (wdkba_ar_um[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x653B | zulässige Drosselklappenöffnung für Drosselklappe 1, Ebene 2 (wdkzul_ar_um[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653C | zulässige Drosselklappenöffnung für Drosselklappe 2, Ebene 2 (wdkzul_ar_um[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653D | zulässige Drosselklappenöffnung für Drosselklappe 1 durch FGR, Ebene 2 (wdkzul_fgr_um[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653E | zulässige Drosselklappenöffnung für Drosselklappe 2 durch FGR, Ebene 2 (wdkzul_fgr_um[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653F | mittlere zulässige Drosselklappenöffnung, Ebene 2 (wdkzul_um) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x6540 | Fehlerort Modul (dsys_merker[0]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6541 | Parameter 1 (dsys_merker[1]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6542 | Parameter 2 (dsys_merker[2]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6543 | Parameter 3 (dsys_merker[3]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6544 | Sicherheitskonzept Zustand für Fehlerreaktion Drosselklappensensorik (sk_reak_dkp) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6545 | Sicherheitskonzept Zustand des Fahrwertgebers (sk_zust_fwg) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6546 | Statusbyte Sensorikfehler in Ebene 2 (e_flags_um) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6547 | Statusbyte Fehlerreaktionen Ebene 1, 2 und 3 (r_flags_um) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6548 | Motordrehzahl, Ebene 2 (nmotseg_um) | 1/min | high | unsigned int | - | 0,25 | 1 | 0 |
| 0x6549 | Motortemperatur unbegrenzt, Ebene 2 (tmotubeg_um) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x654A | Endwert relative Momentenforderung der ASC-Regelung (reltrq_end) | - | high | unsigned int | - | 1 | 65536 | 0 |
| 0x654B | Maximum aus Kl.15- und BTS-Spannungen (wub) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x654C | Anzahl der Fehlerspeichereinträge durch die Fahrwertgeberdiagnose bezüglich des Leerlaufanschlags (cntfwglldiag) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x654D | Bedingung Kupplungsschalter 1 betätigt (Kraftschluß getrennt) (B_kuppl) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x654E | Ist-Gang (gangi) | 0-n | high | 0xFFFF | TAB_MR_GETRIEBE | 1 | 1 | 0 |
| 0x654F | KtEwsError (kt_ews_error) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6550 | KtEwsResult (kt_ews_result) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6551 | EwsInfoState (ews_info_state) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6552 | Zustand History ENVRAM (Eep_EnvRamHist) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6553 | Zustand Ungültigkeit ENVRAM (Eep_EnvRamInvld) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6554 | Bedingung Initialisierung aller Adaptionswerte aufgrund ungültiger NV-RAM Daten (B_adpini_eepnpl) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6555 | Status gruppenweises Initialisieren von Adaptionswerten, Gruppen 1-15 (st_adpini_uwb_low) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6556 | im Kombi angezeigter ASC-Status (asc_status_uwb) | 0-n | high | 0xFFFF | TAB_MR_ASC_STATUS | 1 | 1 | 0 |
| 0x6557 | Modus der ASC-Funktion (asc_modus_uwb) | 0-n | high | 0xFFFF | TAB_MR_ASC_MODUS | 1 | 1 | 0 |
| 0x6558 | Integrator Klopfregelung Zylinder 1 (ikr[0]) | - | high | unsigned int | - | 1 | 100 | 0 |
| 0x6559 | Integrator Klopfregelung Zylinder 2 (ikr[1]) | - | high | unsigned int | - | 1 | 100 | 0 |
| 0x655A | letzte nicht maskierte Reset-Condition (uwb_reset_hist) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655B | Statuswort Freigabe Fahrgeschwindigkeitsregler, Bedingungen 0 - 15 (st_fgr_freigabe_uwb_low) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655C | Eingangssignal vom Schalter 1 des Seitenstützständers (ES_sst1) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655D | Eingangssignal vom Schalter 2 des Seitenstützständers (ES_sst2) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655E | Statuswort Freigabe Fahrgeschwindigkeitsregler, Bedingungen 16 - 31 (st_fgr_freigabe_uwb_high) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655F | Winkel Schalthebelsensor ohne Korrektur (wrohshssass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6560 | Bedingung Adaption Schalthebelsensor abgeschlossen (B_shsadpsass) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6561 | Betriebsbedingung Adaption Schalthebelsensor für Schaltassistent (B_bshsadpsass) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6562 | Bedingung Readaption Schalthebelsensor notwendig (B_rshsadpsass) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6563 | Winkel Schalthebelsensor 1 ohne Korrektur (wrohshs1sass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6564 | Winkel Schalthebelsensor 2 ohne Korrektur (wrohshs2sass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6565 | Modelltemperatur des vorderen Bremssattels (temp_sattel_v_mdl) | °C | high | unsigned int | - | 1 | 20 | 0 |
| 0x6566 | Modelltemperatur des vorderen Bremssattels bei Kl15 aus (temp_sattel_v_mdl_kl15off) | °C | high | unsigned int | - | 1 | 20 | 0 |
| 0x6567 | berechnete Temperatur der vorderen Bremsscheibe (temp_bremsscheibe_v) | °C | high | signed int | - | 1 | 20 | 0 |
| 0x6568 | berechneter zulässiger Gesamtstrom System-BTS (isys_ber_ges) | A | high | unsigned int | - | 25,6 | 32767 | 0 |
| 0x6569 | berechneter zulässiger Gesamtstrom Zündungs-BTS (izdg_ber_ges) | A | high | unsigned int | - | 25,6 | 32767 | 0 |
| 0x656A | Strom am System-BTS bei Überschreitung Auslösestromquadrat (isys_uwb) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656B | Strom am Zündungs-BTS bei Überschreitung Auslösestromquadrat (izdg_uwb) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656C | Strom am EKP-BTS bei Überschreitung Auslösestromquadrat (iekp_uwb) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656D | aktueller Strom am ELUE-BTS (ielue) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656E | Diagnose Signalqualität Drosselklappe - Fehlerzähler Abweichung, Level1 (ddkp_sig_abwcnt[0]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x656F | Diagnose Signalqualität Drosselklappe - Fehlerzähler Abweichung, Level2 (ddkp_sig_abwcnt[1]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x3A1160 | Batterie, Spannung zu hoch | 0 |
| 0x3A1162 | Batterie, unplausible Spannung | 0 |
| 0x3A1351 | Ölniveaugeber, Ölstand zu niedrig | 0 |
| 0x3A1464 | Abgasklappe, Stellmotor, kein Abgleich aufgrund Temperaturüberschreitung SG | 0 |
| 0x3A1474 | Interferenzrohrklappe, Stellmotor, kein Abgleich aufgrund Temperaturüberschreitung SG | 0 |
| 0x3A1490 | Signalqualität Drosselklappensensor, eingeschränkt, Stufe 1 | 0 |
| 0x3A1500 | Systemfehler | 0 |
| 0x3A1520 | Fahrwertgeber, Leerlaufanschlag, Position innerhalb Fenster 1 | 0 |
| 0x3A1521 | Fahrwertgeber, Leerlaufanschlag, Position innerhalb Fenster 2 | 0 |
| 0x3A1522 | Fahrwertgeber, Leerlaufanschlag, Position innerhalb Fenster 3 | 0 |
| 0x3A1523 | Fahrwertgeber, Leerlaufanschlag, Position innerhalb Fenster 4 | 0 |
| 0x3A1540 | Fahrgeschwindigkeitsregler, maximale Fahrzeugbeschleunigung überschritten | 0 |
| 0x3A1552 | EWS3, KT-Fehler | 0 |
| 0x3A1553 | EWS3, FSW-Fehler | 0 |
| 0x3A15A0 | Klopfregelung, Fehler Signalerfassung | 0 |
| 0x3A15D0 | LR-Adaption, Warteschlange, Pufferfüllstand Lambdaadaption Bank 1 zu hoch | 0 |
| 0x3A15D1 | LR-Adaption, Warteschlange, Pufferfüllstand Lambdaadaption Bank 2 zu hoch | 0 |
| 0x3A15E0 | Resetüberwachung, unerwarteter Reset erkannt | 0 |
| 0x3A1B63 | Nockenwelle, unzulässige Verdrehung | 0 |
| 0x3A1BD2 | EEPROM: Schreiben eines Blocks fehlgeschlagen | 0 |
| 0x3A1BF0 | Softwarereset FSW, Gruppe 0 | 0 |
| 0x3A1BF1 | Softwarereset FSW, Gruppe 1 | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x6500 | Ansauglufttemperatur (tans_w) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x6501 | Batteriespannung (ub_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6502 | Drosselklappenwinkel bezogen auf DK- Anschlag (wdkba_w) | % DK | high | signed int | - | 1600 | 65536 | 0 |
| 0x6503 | Motortemperatur (tmot_w) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x6504 | Lambda Regelfaktor Bank 1 (fr_w[0]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6505 | Lambda Regelfaktor Bank 2 (fr_w[1]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6506 | relative Luftfüllung (rl_w) | % | high | unsigned int | - | 0,75 | 32 | 0 |
| 0x6507 | Motordrehzahl (nmot_w) | 1/min | high | unsigned int | - | 0,25 | 1 | 0 |
| 0x6508 | Fahrzeuggeschwindigkeit (vfzg_w) | km/h | high | unsigned int | - | 512 | 65536 | 0 |
| 0x6509 | Spannung System-BTS (uubts_sys_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650A | Spannung Zündungs-BTS (uubts_zdg_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650B | Spannung EKP-BTS (uubts_ekp_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650C | Spannung ELUE-BTS (uubts_elue_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650D | Abgastemperatur vor Kat aus Modell (für LSH bei Boxer-Motoren); (tabgmls) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x650E | Lambdasondenspannung Bank 1 (usvk_w[0]) | V | high | signed int | - | 0,001 | 1 | 0 |
| 0x650F | Lambdasondenspannung Bank 2 (usvk_w[1]) | V | high | signed int | - | 0,001 | 1 | 0 |
| 0x6510 | schneller Mittelwert des Lambdaregelfaktors Bank 1 (frm_w[0]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6511 | schneller Mittelwert des Lambdaregelfaktors Bank 2 (frm_w[1]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6512 | Spannungswert von Getriebeschaltwalze Sensor 1 (ugetrg1_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6513 | Spannungswert Schalthebelsensor (ushs_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6514 | ADC-Spannung Schalthebelsensor Kanal 1 (ushs1_w) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x6515 | ADC-Spannung Schalthebelsensor Kanal 2 (ushs2_w) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x6516 | Winkel Schalthebelsensor in Neutralstellung adaptiert (wadpshssass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6517 | Zeit nach Motorstart (tnse_w) | s | high | unsigned int | - | 0,1 | 1 | 0 |
| 0x6518 | Einspritzzeit (te_w) | ms | high | unsigned int | - | 8 | 1000 | 0 |
| 0x6519 | Letzter berechneter Zündwinkel (zw) | ° KW | Low | signed int | - | 191,25 | 65280 | 0 |
| 0x651A | ADC-Spannung Ansauglufttemperatur (utans_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x651B | Fahrzeuggeschwindigkeit aus Übersetzungsverhältnis und Drehzahl (vfzggang_w) | km/h | high | unsigned int | - | 512 | 65536 | 0 |
| 0x651C | Umgebungsdruck (pu_w) | hPa | high | unsigned int | - | 10 | 256 | 0 |
| 0x651D | gemessener Kraftstoffdruck (frps_meas) | hPa | high | signed int | - | 1 | 5 | 0 |
| 0x651E | Motortemperatur, linearisiert und umgerechnet (tmotlin_w) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x651F | ADC-Wert Batteriespannung/Kl15 (ukl15_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6520 | Rohwert Fahrwertgeber Kanal 1 (fwg1r) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6521 | Rohwert Fahrwertgeber Kanal 2 (fwg2r) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6522 | Fahrwertgeber (fwg_w) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6523 | Fahrwertgeber Kanal 1 adaptiert (fwgad1) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6524 | Fahrwertgeber Kanal 2 adaptiert (fwgad2) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6525 | Spannung Drosselklappenwinkel 1 von Drosselklappe 1 (udkp1r[0]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6526 | Spannung Drosselklappenwinkel 2 von Drosselklappe 1 (udkp2r[0]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6527 | Spannung Drosselklappenwinkel 1 von Drosselklappe 2 (udkp1r[1]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6528 | Spannung Drosselklappenwinkel 2 von Drosselklappe 2 (udkp2r[1]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6529 | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 1 (dkp1r[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652A | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 1 (dkp2r[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652B | Drosselklappenwinkel Kanal 1 adaptiert von Drosselklappe 1 (dkpad1[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x652C | Drosselklappenwinkel Kanal 2 adaptiert von Drosselklappe 1 (dkpad2[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x652D | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 2 (dkp1r[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652E | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 2 (dkp1r[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652F | Drosselklappenwinkel Kanal 1 adaptiert von Drosselklappe 2 (dkpad1[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6530 | Drosselklappenwinkel Kanal 2 adaptiert von Drosselklappe 2 (dkpad2[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6531 | Sollwert des Drosselklappenwinkels der Drosselklappe 1 (wdks_w[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x6532 | Sollwert des Drosselklappenwinkels der Drosselklappe 2 (wdks_w[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x6533 | Rohwert Fahrwertgeber Kanal 1, Ebene 2 (fwg1r_um) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6534 | Rohwert Fahrwertgeber Kanal 2, Ebene 2 (fwg2r_um) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6535 | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 1, Ebene 2 (dkp1r_um[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6536 | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 1, Ebene 2 (dkp2r_um[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6537 | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 2, Ebene 2 (dkp1r_um[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6538 | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 2, Ebene 2 (dkp2r_um[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6539 | Drosselklappenwinkel der Drosselklappe 1, Ebene 2 (wdkba_ar_um[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x653A | Drosselklappenwinkel der Drosselklappe 2, Ebene 2 (wdkba_ar_um[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x653B | zulässige Drosselklappenöffnung für Drosselklappe 1, Ebene 2 (wdkzul_ar_um[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653C | zulässige Drosselklappenöffnung für Drosselklappe 2, Ebene 2 (wdkzul_ar_um[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653D | zulässige Drosselklappenöffnung für Drosselklappe 1 durch FGR, Ebene 2 (wdkzul_fgr_um[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653E | zulässige Drosselklappenöffnung für Drosselklappe 2 durch FGR, Ebene 2 (wdkzul_fgr_um[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653F | mittlere zulässige Drosselklappenöffnung, Ebene 2 (wdkzul_um) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x6540 | Fehlerort Modul (dsys_merker[0]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6541 | Parameter 1 (dsys_merker[1]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6542 | Parameter 2 (dsys_merker[2]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6543 | Parameter 3 (dsys_merker[3]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6544 | Sicherheitskonzept Zustand für Fehlerreaktion Drosselklappensensorik (sk_reak_dkp) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6545 | Sicherheitskonzept Zustand des Fahrwertgebers (sk_zust_fwg) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6546 | Statusbyte Sensorikfehler in Ebene 2 (e_flags_um) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6547 | Statusbyte Fehlerreaktionen Ebene 1, 2 und 3 (r_flags_um) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6548 | Motordrehzahl, Ebene 2 (nmotseg_um) | 1/min | high | unsigned int | - | 0,25 | 1 | 0 |
| 0x6549 | Motortemperatur unbegrenzt, Ebene 2 (tmotubeg_um) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x654A | Endwert relative Momentenforderung der ASC-Regelung (reltrq_end) | - | high | unsigned int | - | 1 | 65536 | 0 |
| 0x654B | Maximum aus Kl.15- und BTS-Spannungen (wub) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x654C | Anzahl der Fehlerspeichereinträge durch die Fahrwertgeberdiagnose bezüglich des Leerlaufanschlags (cntfwglldiag) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x654D | Bedingung Kupplungsschalter 1 betätigt (Kraftschluß getrennt) (B_kuppl) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x654E | Ist-Gang (gangi) | 0-n | high | 0xFFFF | TAB_MR_GETRIEBE | 1 | 1 | 0 |
| 0x654F | KtEwsError (kt_ews_error) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6550 | KtEwsResult (kt_ews_result) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6551 | EwsInfoState (ews_info_state) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6552 | Zustand History ENVRAM (Eep_EnvRamHist) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6553 | Zustand Ungültigkeit ENVRAM (Eep_EnvRamInvld) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6554 | Bedingung Initialisierung aller Adaptionswerte aufgrund ungültiger NV-RAM Daten (B_adpini_eepnpl) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6555 | Status gruppenweises Initialisieren von Adaptionswerten, Gruppen 1-15 (st_adpini_uwb_low) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6556 | im Kombi angezeigter ASC-Status (asc_status_uwb) | 0-n | high | 0xFFFF | TAB_MR_ASC_STATUS | 1 | 1 | 0 |
| 0x6557 | Modus der ASC-Funktion (asc_modus_uwb) | 0-n | high | 0xFFFF | TAB_MR_ASC_MODUS | 1 | 1 | 0 |
| 0x6558 | Integrator Klopfregelung Zylinder 1 (ikr[0]) | - | high | unsigned int | - | 1 | 100 | 0 |
| 0x6559 | Integrator Klopfregelung Zylinder 2 (ikr[1]) | - | high | unsigned int | - | 1 | 100 | 0 |
| 0x655A | letzte nicht maskierte Reset-Condition (uwb_reset_hist) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655B | Statuswort Freigabe Fahrgeschwindigkeitsregler, Bedingungen 0 - 15 (st_fgr_freigabe_uwb_low) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655C | Eingangssignal vom Schalter 1 des Seitenstützständers (ES_sst1) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655D | Eingangssignal vom Schalter 2 des Seitenstützständers (ES_sst2) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655E | Statuswort Freigabe Fahrgeschwindigkeitsregler, Bedingungen 16 - 31 (st_fgr_freigabe_uwb_high) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655F | Winkel Schalthebelsensor ohne Korrektur (wrohshssass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6560 | Bedingung Adaption Schalthebelsensor abgeschlossen (B_shsadpsass) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6561 | Betriebsbedingung Adaption Schalthebelsensor für Schaltassistent (B_bshsadpsass) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6562 | Bedingung Readaption Schalthebelsensor notwendig (B_rshsadpsass) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6563 | Winkel Schalthebelsensor 1 ohne Korrektur (wrohshs1sass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6564 | Winkel Schalthebelsensor 2 ohne Korrektur (wrohshs2sass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6565 | Modelltemperatur des vorderen Bremssattels (temp_sattel_v_mdl) | °C | high | unsigned int | - | 1 | 20 | 0 |
| 0x6566 | Modelltemperatur des vorderen Bremssattels bei Kl15 aus (temp_sattel_v_mdl_kl15off) | °C | high | unsigned int | - | 1 | 20 | 0 |
| 0x6567 | berechnete Temperatur der vorderen Bremsscheibe (temp_bremsscheibe_v) | °C | high | signed int | - | 1 | 20 | 0 |
| 0x6568 | berechneter zulässiger Gesamtstrom System-BTS (isys_ber_ges) | A | high | unsigned int | - | 25,6 | 32767 | 0 |
| 0x6569 | berechneter zulässiger Gesamtstrom Zündungs-BTS (izdg_ber_ges) | A | high | unsigned int | - | 25,6 | 32767 | 0 |
| 0x656A | Strom am System-BTS bei Überschreitung Auslösestromquadrat (isys_uwb) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656B | Strom am Zündungs-BTS bei Überschreitung Auslösestromquadrat (izdg_uwb) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656C | Strom am EKP-BTS bei Überschreitung Auslösestromquadrat (iekp_uwb) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656D | aktueller Strom am ELUE-BTS (ielue) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656E | Diagnose Signalqualität Drosselklappe - Fehlerzähler Abweichung, Level1 (ddkp_sig_abwcnt[0]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x656F | Diagnose Signalqualität Drosselklappe - Fehlerzähler Abweichung, Level2 (ddkp_sig_abwcnt[1]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | ISOSAEReserved_00 |
| 0x01 | defaultSession |
| 0x02 | programmingSession |
| 0x03 | extendedDiagnosticSession |
| 0x04 | safetySystemDiagnosticSession |
| 0x40 | vehicleManufacturerSpecific_40 |
| 0x41 | codingSession |
| 0x42 | SWTSession |
| 0x43 | HDDUpdateSession |
| 0xff | ungültig |

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
| STAT_FASTA_LASTKOLLEKTIV1_ZEIT_MINUTEN_TEIL1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lastkollektiv1-Arrays mit 4-min Zählern (Teil 1) |
| STAT_FASTA_LASTKOLLEKTIV1_ZEIT_MINUTEN_TEIL2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lastkollektiv1-Arrays mit 4-min Zählern (Teil 2) |
| STAT_FASTA_LASTKOLLEKTIV1_ZEIT_MINUTEN_TEIL3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lastkollektiv1-Arrays mit 4-min Zählern (Teil 3) |
| STAT_FASTA_LASTKOLLEKTIV1_ZEIT_MINUTEN_TEIL4_DATA | DATA | high | data[126] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lastkollektiv1-Arrays mit 4-min Zählern (Teil 4) |
| STAT_FASTA_LASTKOLLEKTIV1_ZEIT_SEKUNDEN_TEIL1_DATA | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lastkollektiv1-Arrays mit Sekundenzählern (Teil 1) |
| STAT_FASTA_LASTKOLLEKTIV1_ZEIT_SEKUNDEN_TEIL2_DATA | DATA | high | data[238] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lastkollektiv1-Arrays mit Sekundenzählern (Teil 2) |
| STAT_FASTA_LASTKOLLEKTIV1_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2330_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_LAMBDADATEN1_LRA_ADAP_CNT_BANK1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl durchgeführter Berechnungen der Lambdaadaption (Bank 1) |
| STAT_FASTA_LAMBDADATEN1_LRA_ADAP_CNT_BANK2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl durchgeführter Berechnungen der Lambdaadaption (Bank 2) |

### RES_0X233D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_LAMBDADATEN4_LRA_STUETZ_NMOT_MX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motordrehzahl |
| STAT_FASTA_LAMBDADATEN4_LRA_STUETZ_WDKBA_MX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Drosselklappenwinkel |
| STAT_FASTA_LAMBDADATEN4_LRA_STUETZ_TMOT_MX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motortemperatur |
| STAT_FASTA_LAMBDADATEN4_LRA_STUETZ_NMOT_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motordrehzahl |
| STAT_FASTA_LAMBDADATEN4_LRA_STUETZ_WDKBA_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Stützstellen kflra für Berechnung Lambdaadaption für Dimension Drosselklappenwinkel |
| STAT_FASTA_LAMBDADATEN4_LRA_STUETZ_TMOT_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motortemperatur |

### RES_0X233E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_LAMBDADATEN5_LRA_GEWICHT_NMOT_X_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Gewichtung Abstand (abhängig von Drehzahl) für Berechnung Lambdaadaption; X-Achse |
| STAT_FASTA_LAMBDADATEN5_LRA_GEWICHT_NMOT_W_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Gewichtung Abstand (abhängig von Drehzahl) für Berechnung Lambdaadaption; Werte |
| STAT_FASTA_LAMBDADATEN5_LRA_GEWICHT_WDKBA_X_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Gewichtung Abstand (abhängig von Drosselklappenwinkel) für Berechnung Lambdaadaption; X-Achse |
| STAT_FASTA_LAMBDADATEN5_LRA_GEWICHT_WDKBA_W_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Gewichtung Abstand (abhängig von Drosselklappenwinkel) für Berechnung Lambdaadaption; Werte |
| STAT_FASTA_LAMBDADATEN5_LRA_GEWICHT_TMOT_X_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Gewichtung Abstand (abhängig von Temperatur) für Berechnung Lambdaadaption; X-Achse |
| STAT_FASTA_LAMBDADATEN5_LRA_GEWICHT_TMOT_W_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Gewichtung Abstand (abhängig von Temperatur) für Berechnung Lambdaadaption; Werte |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X6400_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_ANSAUGLUFT_WERT | °C | high | signed int | - | - | 0.05 | 1.0 | 0.0 | Ansauglufttemperatur in Grad Celsius |
| STAT_SPANNUNG_ADC_ANSAUGLUFTTEMP_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | ADC-Spannung des Ansauglufttemperatursensors in Volt |
| STAT_TEMPERATUR_MOTOR_WERT | °C | high | signed int | - | - | 0.05 | 1.0 | 0.0 | Motortemperatur in Grad Celsius |
| STAT_SPANNUNG_ADC_MOTORTEMP_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | ADC-Spannung des Motortemperatursensors in Volt |
| STAT_TEMPERATUR_OEL_WERT | °C | high | signed int | - | - | 0.05 | 1.0 | 0.0 | Motoroeltemperatur in Grad Celsius |
| STAT_SPANNUNG_ADC_OELTEMP_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | ADC-Spannung des Oeltemperatursensors in Volt |

### RES_0X6401_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_CAN_VORDERRAD_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Vorderradgeschwindigkeit aus ABS-CAN-Botschaft in Kilometer pro Stunde |
| STAT_GESCHWINDIGKEIT_CAN_HINTERRAD_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Hinterradgeschwindigkeit aus ABS-CAN-Botschaft in Kilometer pro Stunde |
| STAT_GESCHWINDIGKEIT_FAHRZEUG_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Fahrzeuggeschwindigkeit aus plausibilisierten CAN-Geschwindigkeiten in Kilometer pro Stunde |
| STAT_GESCHWINDIGKEIT_ABS_VORDERRAD_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Vorderradgeschwindigkeit vom ABS-SG in Kilometer pro Stunde |
| STAT_GESCHWINDIGKEIT_ABS_HINTERRAD_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Hinterradgeschwindigkeit vom ABS-SG in Kilometer pro Stunde |

### RES_0X6402_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRUCK_UMGEBUNG_WERT | hPa | high | unsigned int | - | - | 10.0 | 256.0 | 0.0 | gefilterter Umgebungsluftdruck in Hektopascal |
| STAT_SPANNUNG_ADC_UMGEBUNGSDRUCK_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Umgebungsdrucksensors in Volt |
| STAT_DRUCK_KRAFTSTOFF_WERT | hPa | high | signed int | - | - | 1.0 | 5.0 | 0.0 | gefilterter Kraftstoffdruck in Hektopascal |
| STAT_SPANNUNG_ADC_KRAFTSTOFFDRUCK_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Kraftstoffdrucksensors in Volt |

### RES_0X6403_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_MOTOR_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Motordrehzahl in Umdrehungen pro Minute |
| STAT_DREHZAHL_LEERLAUF_SOLL_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Leerlaufsolldrehzahl in Umdrehungen pro Minute |
| STAT_DREHZAHL_UMDREHUNG_NOCKENWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 16.0 | 0.0 | Umdrehungszähler der Nockenwelle 1 |
| STAT_DREHZAHL_UMDREHUNG_NOCKENWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 16.0 | 0.0 | Umdrehungszähler der Nockenwelle 2 |
| STAT_DREHZAHL_FLANKEN_NOCKENWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erkannten Nockenwellenflanken der laufenden Nockenwellenumdrehung der Nockenwelle 1 |
| STAT_DREHZAHL_FLANKEN_NOCKENWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erkannten Nockenwellenflanken der laufenden Nockenwellenumdrehung der Nockenwelle 2 |
| STAT_DREHZAHL_NOCKENWELLE_WERT | 1/min | high | signed int | - | - | 1.0 | 4.0 | 0.0 | Nockenwellendrehzahl in Umdrehungen pro Minute |

### RES_0X6404_D

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

### RES_0X6410_D

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
| STAT_DROSSELKLAPPE_ISTWERT_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Drosselklappenwinkel bezogen auf DK-Anschläge in Prozent |
| STAT_DROSSELKLAPPE1_SOLLWERT_WERT | % | high | unsigned int | - | - | 1600.0 | 65536.0 | 0.0 | Sollwert für den Drosselklappenwinkel 1 in Prozent |
| STAT_DROSSELKLAPPE2_SOLLWERT_WERT | % | high | unsigned int | - | - | 1600.0 | 65536.0 | 0.0 | Sollwert für den Drosselklappenwinkel 2 in Prozent |
| STAT_STATUS_DROSSELKLAPPE1_REGELUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statusbyte der Drosselklappenregelung 1 |
| STAT_STATUS_DROSSELKLAPPE2_REGELUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statusbyte der Drosselklappenregelung 2 |
| STAT_DROSSELKLAPPE1_ANSTEUERUNG_WERT | % | high | signed int | - | - | 100.0 | 32768.0 | 0.0 | PWM-Ansteuerwert des Drosselklappenmotors 1 in Prozent |
| STAT_DROSSELKLAPPE2_ANSTEUERUNG_WERT | % | high | signed int | - | - | 100.0 | 32768.0 | 0.0 | PWM-Ansteuerwert des Drosselklappenmotors 2 in Prozent |
| STAT_DROSSELKLAPPE1_ABSCHALTUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abschaltung der Drosselklappenendstufe 1: 1=EIN, 0=AUS |
| STAT_DROSSELKLAPPE2_ABSCHALTUNG | 0/1 | high | unsigned char | - | - | - | - | - | Abschaltung der Drosselklappenendstufe 2: 1=EIN, 0=AUS |
| STAT_DROSSELKLAPPE1_KANAL1_ADP_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Drosselklappenwinkel 1 vom Kanal 1 bezogen auf den unteren und oberen Adaptionswert  in Prozent |
| STAT_DROSSELKLAPPE1_KANAL2_ADP_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Drosselklappenwinkel 1 vom Kanal 2 bezogen auf den unteren und oberen Adaptionswert  in Prozent |
| STAT_DROSSELKLAPPE2_KANAL1_ADP_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Drosselklappenwinkel 2 vom Kanal 1 bezogen auf den unteren und oberen Adaptionswert  in Prozent |
| STAT_DROSSELKLAPPE2_KANAL2_ADP_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Drosselklappenwinkel 2 vom Kanal 2 bezogen auf den unteren und oberen Adaptionswert  in Prozent |

### RES_0X6411_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRWERTGEBER_KANAL1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 1 des Fahrwertgebers in Prozent |
| STAT_SPANNUNG_ADC_FWG_KANAL1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 1 des Fahrwertgebers in Volt |
| STAT_FAHRWERTGEBER_KANAL2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 2 des Fahrwertgebers in Prozent |
| STAT_SPANNUNG_ADC_FWG_KANAL2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 2 des Fahrwertgebers in Volt |
| STAT_FAHRWERTGEBER_ISTWERT_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Istwert des Fahrwertgebers in Prozent |
| STAT_FAHRWERTGEBER_KANAL1_ADP_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Fahrwertgeberwert vom Kanal 1 bezogen auf den unteren und oberen Adaptionswert  in Prozent |
| STAT_FAHRWERTGEBER_KANAL2_ADP_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Fahrwertgeberwert vom Kanal 2 bezogen auf den unteren und oberen Adaptionswert  in Prozent |

### RES_0X6412_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSORBOX_DREHRATE1_WERT | °/s | high | signed int | - | - | 1.0 | 200.0 | 0.0 | Drehrate 1 der Sensorbox (aus CAN-Botschaft) in Grad pro Sekunde |
| STAT_SENSORBOX_DREHRATE2_WERT | °/s | high | signed int | - | - | 1.0 | 200.0 | 0.0 | Drehrate 2 der Sensorbox (aus CAN-Botschaft) in Grad pro Sekunde |
| STAT_SENSORBOX_BESCHLEUNIGUNG1_WERT | m/s² | high | signed int | - | - | 1.0 | 800.0 | 0.0 | Beschleunigung 1 der Sensorbox (aus CAN-Botschaft) in Meter pro Quadratsekunde |
| STAT_SENSORBOX_BESCHLEUNIGUNG2_WERT | m/s² | high | signed int | - | - | 1.0 | 800.0 | 0.0 | Beschleunigung 2 der Sensorbox (aus CAN-Botschaft) in Meter pro Quadratsekunde |
| STAT_SENSORBOX_SCHRAEGLAGE_WERT | ° | high | signed int | - | - | 0.0439 | 1.0 | 0.0 | Schräglagenwinkel des Motorrads (berechnet aus Sensorboxsignalen) in Grad |
| STAT_SENSORBOX_BESCHLEUNIGUNG3_WERT | m/s² | high | signed int | - | - | 1.0 | 800.0 | 0.0 | Beschleunigung 3 der Sensorbox (aus CAN-Botschaft) in Meter pro Quadratsekunde |

### RES_0X6413_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GETRIEBE_ISTGANG | 0-n | high | unsigned char | - | TAB_MR_GETRIEBE | 1.0 | 1.0 | 0.0 | Istwert der Getriebeschaltwalzenposition als Ganginformation |
| STAT_SPANNUNG_ADC_GETRIEBE_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Wert des Getriebeschaltwalzenpotentiometers in Volt |

### RES_0X6414_D

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

### RES_0X6415_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANLASSER_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Anlasseransteuerung: 1=AKTIV ; 0=INAKTIV |
| STAT_ANLASSER_SCHUTZ | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Anlasserschutzes: 1=AKTIV; 0=INAKTIV |
| STAT_ANLASSER_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Anlasserfreigabe: 1=AKTIV; 0=INAKTIV |
| STAT_ANLASSER_MOTORSTOP | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Motorstop-Flags: 1=AKTIV; 0=INAKTIV |

### RES_0X6416_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SONDENHEIZUNG_ANSTEUERUNG_BANK1 | 0/1 | high | unsigned char | - | - | - | - | - | Ansteuerung der Endstufe(n) der Lambdasondenheizung(en) durch FSW oder Tester, Bank 1: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_ANSTEUERUNG_BANK2 | 0/1 | high | unsigned char | - | - | - | - | - | Ansteuerung der Endstufe(n) der Lambdasondenheizung(en) durch FSW oder Tester, Bank 2: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_TESTERKONTROLLE_BANK1 | 0/1 | high | unsigned char | - | - | - | - | - | Testerkontrolle über Ansteuerung der Endstufe(n) der Lambdasondenheizung(en), Bank 1: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_TESTERKONTROLLE_BANK2 | 0/1 | high | unsigned char | - | - | - | - | - | Testerkontrolle über Ansteuerung der Endstufe(n) der Lambdasondenheizung(en), Bank 2: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_ANSTEUERUNG_TESTER_BANK1 | 0/1 | high | unsigned char | - | - | - | - | - | Ansteuerung der Endstufe(n) der Lambdasondenheizung(en) durch Tester, Bank 1: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_ANSTEUERUNG_TESTER_BANK2 | 0/1 | high | unsigned char | - | - | - | - | - | Ansteuerung der Endstufe(n) der Lambdasondenheizung(en) durch Tester, Bank 2: 1=AKTIV; 0=INAKTIV |

### RES_0X6417_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KRAFTSTOFFPUMPE_BTS_EKP_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freigabe Bauteilschutz Elektrokraftstoffpumpe: 1=AKTIV; 0=INAKTIV |
| STAT_KRAFTSTOFFPUMPE_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Elektrokraftstoffpumpe: 1=AKTIV; 0=INAKTIV |
| STAT_KRAFTSTOFFPUMPE_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Elektrokraftstoffpumpe: 1=AKTIV; 0=INAKTIV |
| STAT_KRAFTSTOFFPUMPE_BTS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bauteilschutz Elektrokraftstoffpumpe: 1=EIN; 0=AUS |

### RES_0X6418_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELUEFTER_BTS_ELUE_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freigabe Bauteilschutz E-Lüfter: 1=AKTIV; 0=INAKTIV |
| STAT_ELUEFTER_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung E-Lüfter: 1=AKTIV; 0=INAKTIV |
| STAT_ELUEFTER_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung E-Lüfter: 1=AKTIV; 0=INAKTIV |

### RES_0X6419_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEKUNDAERLUFTVENTIL_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Sekundärluftventil: 1=AKTIV; 0=INAKTIV |
| STAT_SEKUNDAERLUFTVENTIL_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Sekundärluftventil: 1=AKTIV; 0=INAKTIV |
| STAT_SEKUNDAERLUFTVENTIL_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Sekundärluftventil: 1=AKTIV; 0=INAKTIV |

### RES_0X641A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANKENTLUEFTUNGSVENTIL_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Tankentlüftungsventil: 1=AKTIV; 0=INAKTIV |
| STAT_TANKENTLUEFTUNGSVENTIL_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Öffnung Tankentlüftungsventil: 1=AKTIV; 0=INAKTIV |
| STAT_TANKENTLUEFTUNGSVENTIL_ENTLUEFTUNGSPHASE | 0/1 | high | unsigned char | - | - | - | - | - | Entlüftungsphase desTankentlüftungsventils: 1=EIN; 0=AUS |
| STAT_TANKENTLUEFTUNGSVENTIL_TANKENTLUEFTUNG | 0/1 | high | unsigned char | - | - | - | - | - | Tankentlüftung: 1=AKTIV; 0=INAKTIV |
| STAT_TANKENTLUEFTUNGSVENTIL_TV_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | ausgegebenes Tastverhältnis für das Tankentlüftungsventil in Prozent |

### RES_0X641B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UEBERTEMPERATURLEUCHTE_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Übertemperaturleuchte: 1=AKTIV; 0=INAKTIV |
| STAT_UEBERTEMPERATURLEUCHTE_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Übertemperaturleuchte: 1=AKTIV; 0=INAKTIV |
| STAT_UEBERTEMPERATURLEUCHTE_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Übertemperaturleuchte: 1=AKTIV; 0=INAKTIV |

### RES_0X641C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORWARNLEUCHTE_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Motorwarnleuchte: 1=AKTIV; 0=INAKTIV |
| STAT_MOTORWARNLEUCHTE_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Motorwarnleuchte: 1=AKTIV; 0=INAKTIV |
| STAT_MOTORWARNLEUCHTE_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Motorwarnleuchte: 1=AKTIV; 0=INAKTIV |

### RES_0X641D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABGASKLAPPENSTELLER_POSITION_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Position des Abgasklappenstellers in Prozent |
| STAT_ABGASKLAPPENSTELLER_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Diagnosefreigabe für Abgasklappensteller: 1=AKTIV, 0=INAKTIV |
| STAT_ABGASKLAPPENSTELLER_ABGLEICH | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_ABGLEICH | - | - | - | Abgleichstatus des Abgasklappenstellers |
| STAT_ABGASKLAPPENSTELLER_FEHLER | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_FEHLER | - | - | - | Fehler des Abgasklappenstellers |
| STAT_ABGASKLAPPENSTELLER_SPERRE | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_SPERRE | 1.0 | 1.0 | 0.0 | Abgleichsperre des Abgasklappenstellers |

### RES_0X641E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INTERFERENZROHRKLAPPENSTELLER_POSITION_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Position des Interferenzrohrklappenstellers in Prozent |
| STAT_INTERFERENZROHRKLAPPENSTELLER_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Diagnosefreigabe für Interferenzrohrklappensteller: 1=AKTIV, 0=INAKTIV |
| STAT_INTERFERENZROHRKLAPPENSTELLER_ABGLEICH | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_ABGLEICH | 1.0 | 1.0 | 0.0 | Abgleichstatus des Interferenzrohrklappenstellers |
| STAT_INTERFERENZROHRKLAPPENSTELLER_FEHLER | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_FEHLER | 1.0 | 1.0 | 0.0 | Fehler des Interferenzrohrklappenstellers |
| STAT_INTERFERENZROHRKLAPPENSTELLER_SPERRE | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_SPERRE | 1.0 | 1.0 | 0.0 | Abgleichsperre des Interferenzrohrklappenstellers |

### RES_0X6420_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKUSTIKKLAPPENVENTIL_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Akustikklappenventil: 1=AKTIV; 0=INAKTIV |
| STAT_AKUSTIKKLAPPENVENTIL_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Akustikklappenventil: 1=AKTIV; 0=INAKTIV |
| STAT_AKUSTIKKLAPPENVENTIL_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Akustikklappenventil: 1=AKTIV; 0=INAKTIV |

### RES_0X6421_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTHEBEL_SENSOR1_WERT | % | high | signed int | - | - | 100.0 | 32768.0 | 0.0 | Rohwert des Schalthebelsensors 1 in Prozent |
| STAT_SPANNUNG_ADC_SCHALTHEBEL_SENSOR1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Schalthebelsensors 1 |
| STAT_SCHALTHEBEL_SENSOR2_WERT | % | high | signed int | - | - | 100.0 | 32768.0 | 0.0 | Rohwert des Schalthebelsensors 2 in Prozent |
| STAT_SPANNUNG_ADC_SCHALTHEBEL_SENSOR2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Schalthebelsensors 2 |
| STAT_SCHALTHEBEL_SENSOR_WERT | % | high | signed int | - | - | 100.0 | 32768.0 | 0.0 | plausibilisierter Rohwert der Schalthebelsensoren in Prozent |

### RES_0X6422_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSORBOXDATEN_BESCHLEUNIGUNG1_WERT | m/s² | high | signed int | - | - | 1.0 | 800.0 | 0.0 | Querbeschleunigung des Sensorboxdatensatzes 1 in Meter pro Quadratsekunde |
| STAT_SENSORBOXDATEN_BESCHLEUNIGUNG2_WERT | m/s² | high | signed int | - | - | 1.0 | 800.0 | 0.0 | Querbeschleunigung des Sensorboxdatensatzes 2 in Meter pro Quadratsekunde |
| STAT_SENSORBOXDATEN_BESCHLEUNIGUNG3_WERT | m/s² | high | signed int | - | - | 1.0 | 800.0 | 0.0 | Querbeschleunigung des Sensorboxdatensatzes 3 in Meter pro Quadratsekunde |
| STAT_SENSORBOXDATEN_BESCHLEUNIGUNG4_WERT | m/s² | high | signed int | - | - | 1.0 | 800.0 | 0.0 | Querbeschleunigung des Sensorboxdatensatzes 4 in Meter pro Quadratsekunde |
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

### RES_0X6423_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEERLAUFSTEPPER_SOLLPOSITION_WERT | % | high | unsigned int | - | - | 100.0 | 65536.0 | 0.0 | relative Sollposition des Leerlaufsteppers in Prozent |
| STAT_LEERLAUFSTEPPER_ISTPOSITION_WERT | % | high | unsigned int | - | - | 100.0 | 65536.0 | 0.0 | relative Istposition des Leerlaufsteppers in Prozent |
| STAT_LEERLAUFSTEPPER_STATUS_ANSTEUERUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Ansteuerung des Leerlaufsteppers |
| STAT_LEERLAUFSTEPPER_STATUS_INITIALISIERUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Initialisierung des Leerlaufsteppers |

### RES_0X6424_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RUECKFAHRHILFENSTELLER_POSITION_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Position des Rückfahrhilfenstellers in Prozent |
| STAT_RUECKFAHRHILFENSTELLER_FREIGABE | 0/1 | high | unsigned char | - | - | - | - | - | Diagnosefreigabe für Rückfahrhilfensteller: 1=AKTIV, 0=INAKTIV |
| STAT_RUECKFAHRHILFENSTELLER_ABGLEICH | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_ABGLEICH | - | - | - | Abgleichstatus des Rückfahrhilfenstellers |
| STAT_RUECKFAHRHILFENSTELLER_FEHLER | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_FEHLER | - | - | - | Fehler des Rückfahrhilfenstellers |
| STAT_RUECKFAHRHILFENSTELLER_SPERRE | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_SPERRE | - | - | - | Abgleichsperre des Rückfahrhilfenstellers |

### RES_0X6430_D

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
| - | Bit | high | BITFIELD | - | BF_TAB_MR_ADAPTIONSFREIGABE_GETRIEBE | - | - | - | Status Freigabe Adaption Getriebe für den jeweiligen Gang |
| STAT_ADAPTION_GETRIEBE_FREIGABEZAEHLER_NEUTRAL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der Freigabebedingungen für die Adaption des Neutralganges |
| STAT_ADAPTION_GETRIEBE_FREIGABEZAEHLER_GANG1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der Freigabebedingungen für die Adaption des 1. Ganges |
| STAT_ADAPTION_GETRIEBE_FREIGABEZAEHLER_GANG2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der Freigabebedingungen für die Adaption des 2. Ganges |
| STAT_ADAPTION_GETRIEBE_FREIGABEZAEHLER_GANG3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der Freigabebedingungen für die Adaption des 3. Ganges |
| STAT_ADAPTION_GETRIEBE_FREIGABEZAEHLER_GANG4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der Freigabebedingungen für die Adaption des 4. Ganges |
| STAT_ADAPTION_GETRIEBE_FREIGABEZAEHLER_GANG5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der Freigabebedingungen für die Adaption des 5. Ganges |
| STAT_ADAPTION_GETRIEBE_FREIGABEZAEHLER_GANG6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der Freigabebedingungen für die Adaption des 6. Ganges |

### RES_0X6431_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_DROSSELKLAPPE1_KANAL1_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 1 der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_KANAL1_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 1 der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_KANAL2_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 2 der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_KANAL2_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 2 der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Adaption Drosselklappe 1: 1=abgeschlossen; 0=nicht abgeschlossen |
| STAT_ADAPTION_DROSSELKLAPPE1_NOTLAUFPUNKT_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Adaptionswert Notlaufpunkt der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_KANAL1_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 1 der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_KANAL1_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 1 der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_KANAL2_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 2 der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_KANAL2_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 2 der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Adaption Drosselklappe 2: 1=abgeschlossen; 0=nicht abgeschlossen |
| STAT_ADAPTION_DROSSELKLAPPE2_NOTLAUFPUNKT_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Adaptionswert Notlaufpunkt der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_ABWEICHUNG_ADAPTION_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert Interkanalabweichung der Adaptionswerte der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_ABWEICHUNG_ADAPTION_MAX_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert maximale Interkanalabweichung der Adaptionswerte der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_ABWEICHUNG_ROHWERT_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert Interkanalabweichung der Rohwerte der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_ABWEICHUNG_ROHWERT_MAX_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert maximale Interkanalabweichung der Rohwerte der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_ABWEICHUNG_ADAPTION_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert Interkanalabweichung der Adaptionswerte der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_ABWEICHUNG_ADAPTION_MAX_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert maximale Interkanalabweichung der Adaptionswerte der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_ABWEICHUNG_ROHWERT_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert Interkanalabweichung der Rohwerte der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_ABWEICHUNG_ROHWERT_MAX_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert maximale Interkanalabweichung der Rohwerte der Drosselklappe 2 in Prozent |

### RES_0X6432_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL1_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 1 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL1_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 1 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL2_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 2 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL2_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 2 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Adaption Fahrwertgeber: 1=abgeschlossen; 0=nicht abgeschlossen |

### RES_0X6434_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_SCHRAEGLAGE_GIERRATE_WERT | °/s | high | signed int | - | - | 1.0 | 2000.0 | 0.0 | Nullpunktadaptionswert der Gierrate in Grad pro Sekunde |
| STAT_ADAPTION_SCHRAEGLAGE_ROLLRATE_WERT | °/s | high | signed int | - | - | 1.0 | 2000.0 | 0.0 | Nullpunktadaptionswert der Rollrate in Grad pro Sekunde |

### RES_0X6435_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_LEERLAUF_VORSTEUERUNG_WERT | % | high | signed int | - | - | 100.0 | 32768.0 | 0.0 | Adaptionswert der Leerlaufvorsteuerung in Prozent |
| STAT_ARRAY_TEMP_ADAPTION_LEERLAUF_VORSTEUERUNG_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Mittlere Motortemperatur im Temperaturfenster für Freigabe der Adaption Leerlaufvorsteuerung (TMLLAD), Rohwerte |
| STAT_ARRAY_ADAPTION_LEERLAUF_VORSTEUERUNG_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Adaptionswert Array Adaption Leerlaufvorsteuerung (dvad_ar), Rohwerte |

### RES_0X6438_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_KLOPFREGELUNG_VKS1_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 1 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS2_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 2 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS3_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 3 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS4_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 4 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS5_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 5 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS6_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 6 |

### RES_0X6439_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_LAMBDAREGELUNG_BANKNR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Banknummer der auszulesenden Lambdaregeladaptionsdaten |
| STAT_ADAPTION_LAMBDAREGELUNG_LABEL | 0-n | high | unsigned char | - | TAB_MR_LAMBDAADAPTION_LABEL | - | - | - | auszulesendes Label der Lambdaregeladaption |
| STAT_ADAPTION_LAMBDAREGELUNG_TEILENR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Teilenummer des auszulesenden Labels |
| STAT_ADAPTION_LAMBDAREGELUNG_DATEN_DATA | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | durch  Banknummer, Label und Teilenummer spezifizierte Daten der Lambdaregelungsadaption |

### RES_0X643A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS1_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 1. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS2_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 2. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS3_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 3. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS4_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 4. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS5_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 5. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS6_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 6. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS7_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 7. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS8_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 8. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS9_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 9. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS10_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 10. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_VERDREHWINKEL_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | gefilterter Nockenwellenverdrehwinkel |

### RES_0X6470_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRGESTELLNUMMER_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | EWS-Fahrgestellnummer |

### RES_0X6471_D

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

### RES_0X6472_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANLERNDATUM_ORT_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag des Schlüsselanlerndatums |
| STAT_ANLERNDATUM_ORT_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat des Schlüsselanlerndatums |
| STAT_ANLERNDATUM_ORT_JAHR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Jahr des Schlüsselanlerndatums |
| STAT_ANLERNDATUM_ORT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ort des Schlüsselanlernens |

### RES_0X6473_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHLUESSELANLERNEN_STATUS_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Status des EWS-Schlüsselanlernprozesses |

### RES_0X6474_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MECHANISCHER_SCHLUESSELCODE_TEXT | TEXT | high | string[5] | - | - | 1.0 | 1.0 | 0.0 | mechanischer Schlüsselcode in ASCII |

### RES_0X6475_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SGVERRIEGELUNG_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Status der Verriegelung des SGs |

### RES_0X6478_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHLUESSEL_AKTUELL_KEY_NR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlüsselnummer: 0 == kein aktueller Schlüssel, 1-10 == aktueller Schlüssel |
| STAT_SCHLUESSEL_AKTUELL_KEY_TYPE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlüsseltyp: 1 == Geldbörsenschlüssel, 2 == Standardschlüssel, 3 == Nachschlüssel |
| STAT_SCHLUESSEL_AKTUELL_KEY_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweiser Schlüsselstatus: Bit 0 == reserviert, Bit 1 == gesperrt, Bit 2 == Daten plausibel, Bit 3 == angelernt, Bit 4 == Automatisches Anlernen gesetzt, Bit 5 == Ignoriere MSC gesetzt |
| STAT_SCHLUESSEL_AKTUELL_AUTH_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweiser Authentisierungsstatus: Bit 0 == Schlüssel in BMSX bekannt, Bit 1 == Reserviert, Bit 2 == Reserviert, Bit 3 == SG verriegelt, Bit 4 == Anlernfunktion aktiviert |
| STAT_SCHLUESSEL_AKTUELL_SYS_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweiser Systemstatus: Bit 0 == Kommunikationsfehler |
| STAT_SCHLUESSEL_AKTUELL_MECH_KEY_CODE_TEXT | TEXT | high | string[5] | - | - | 1.0 | 1.0 | 0.0 | mechanischer Schlüsselcode |

### RES_0X647A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWS_DIAGNOSE_ENV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweise Umgebungsinformation: Bit 0 == Stromversorgung Ringantenne vorhanden, Bit 1 == Killschalter während EWS-Funktion gezogen, Bit 2 == Killschalter gezogen |
| STAT_EWS_DIAGNOSE_LOGSTATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweise Logistikinformation: Bit 0 == Schlüssel ist der BMSX bekannt, Bit 1 == Authentisierung erfolgt, Bit 2 == BMSX ist verriegelt, Bit 3 == Anlernfunktion ist aktiv |
| STAT_EWS_DIAGNOSE_AKT_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktueller Status: 0 == EWS Funktion beendet, >0 == EWS aktiv |
| STAT_EWS_DIAGNOSE_AKT_ERROR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktueller Fehler: 0 == kein Fehler,  >0 == Fehler |
| STAT_EWS_DIAGNOSE_LEARN_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktueller Anlernstatus: 0 == nicht aktiv, 1 == aktiv, 2 == Anlernen i.O., > 2 == Fehler |
| STAT_EWS_DIAGNOSE_RDX_DATA | DATA | high | data[127] | - | - | 1.0 | 1.0 | 0.0 | Interne Nutzung EA |
| STAT_EWS_DIAGNOSE_CBL_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Interne Nutzung EA |

### RES_0X647B_D

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

### RES_0X6490_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAMBDAREGELUNG_BANK1_FAKTOR_WERT | - | high | unsigned int | - | - | 2.0 | 65536.0 | 0.0 | Ausgangswert des Lambdaregelfaktors der Bank 1 |
| STAT_LAMBDAREGELUNG_BANK2_FAKTOR_WERT | - | high | unsigned int | - | - | 2.0 | 65536.0 | 0.0 | Ausgangswert des Lambdaregelfaktors der Bank 2 |
| STAT_LAMBDAREGELUNG_BANK1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lambdaregelung Bank 1: 1=AKTIV, 0=INAKTIV |
| STAT_LAMBDAREGELUNG_BANK2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lambdaregelung Bank 2: 1=AKTIV, 0=INAKTIV |

### RES_0X6491_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_LEERLAUF | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Leerlauf des Motors: 1=AKTIV; 0=INAKTIV |
| STAT_LAST_VOLLLAST | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Volllast des Motors: 1=AKTIV; 0=INAKTIV |

### RES_0X6492_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUENDUNG_WINKEL_IST_WERT | ° | high | signed char | - | - | 191.25 | 255.0 | 0.0 | aktueller Zündwinkel in Grad Kurbelwelle |
| STAT_ZUENDUNG_SCHLIESSZEIT_ZUENDSPULEN_WERT | ms | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Schließzeiten der Zündspulen in Millisekunden |

### RES_0X6493_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINSPRITZUNG_DAUER_BANK1_WERT | ms | high | unsigned int | - | - | 8.0 | 1000.0 | 0.0 | effektive Einspritzdauer Bank 1 in Millisekunden |
| STAT_EINSPRITZUNG_DAUER_BANK2_WERT | ms | high | unsigned int | - | - | 8.0 | 1000.0 | 0.0 | effektive Einspritzdauer Bank 2 in Millisekunden |

### RES_0X6494_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASC_REGELUNG_DAUER_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Dauer aller ASC-Regelungen in Sekunden |
| STAT_ASC_REGELUNG_INTENSITAET_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | mittlere Intensität/Momentrücknahme aller ASC-Regelungen in Prozent |
| STAT_ASC_STATUS | 0-n | high | unsigned char | - | TAB_MR_ASC_STATUS | 1.0 | 1.0 | 0.0 | aktueller Status der ASC-Funktion |
| STAT_ASC_MODUS | 0-n | high | unsigned char | - | TAB_MR_ASC_MODUS | 1.0 | 1.0 | 0.0 | gewählter Modus der ASC-Funktion |
| STAT_ASC_TASTER | 0-n | high | unsigned char | - | TAB_MR_ASC_TASTER | 1.0 | 1.0 | 0.0 | ASC-Taster |
| STAT_ASC_RADIUSKORREKTUR_WERT | mm | high | signed int | - | - | 4000.0 | 65536.0 | 0.0 | gesamte Radiuskorrektur der Reifenradiusadaption in Millimeter |

### RES_0X6495_D

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
| STAT_KLOPFREGELUNG_KR_IKRMX_HOLD_TEIL1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | maximal aufgetretene ikr ohne erkanntes Klopfen (zylinderindividuell) als Rohdaten - Teil 1 |
| STAT_KLOPFREGELUNG_KR_IKRMX_HOLD_TEIL2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | maximal aufgetretene ikr ohne erkanntes Klopfen (zylinderindividuell) als Rohdaten - Teil 2 |
| STAT_KLOPFREGELUNG_KR_IKRMX_HOLD_TEIL3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | maximal aufgetretene ikr ohne erkanntes Klopfen (zylinderindividuell) als Rohdaten - Teil 3 |
| STAT_KLOPFREGELUNG_KR_IKRMX_HOLD_TEIL4_DATA | DATA | high | data[114] | - | - | 1.0 | 1.0 | 0.0 | maximal aufgetretene ikr ohne erkanntes Klopfen (zylinderindividuell) als Rohdaten - Teil 4 |

### RES_0X6496_D

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
| STAT_FAHRZEUGMODUSSPEICHER_MODUSZUORDNUNG_TEXT | TEXT | high | string[101] | - | - | 1.0 | 1.0 | 0.0 | Fahrzeugmoduszuordnung als ASCII-Text |

### RES_0X64A1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPERRUNG_EKP | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus von EKP, Anlasser und Einspritzung: 0 == INAKTIV; 1 == AKTIV |

### RES_0X64A2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UEBERDREHZAHL_GRENZE_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Motorüberdrehzahlgrenzwert in Umdrehungen pro Minute |
| STAT_UEBERDREHZAHL_MAX_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | vorgekommene Maximaldrehzahl in Umdrehungen pro Minute |
| STAT_UEBERDREHZAHL_KMSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand der letzten Überschreitung des Motorüberdrehzahlgrenzwertes in Kilometer |
| STAT_UEBERDREHZAHL_ANZAHL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Überschreitungen des Motorüberdrehzahlgrenzwertes |

### RES_0X64A3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKUSTIK_VARIANTE | 0/1 | high | unsigned char | - | - | - | - | - | Aktivierungsstatus der länderspezifischen Datenvariante der Funktion AKUSTIK: 1 == AKTIV, 0 == INAKTIV |

### RES_0X64A4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_WERK_BEGRENZUNG | 0/1 | high | unsigned char | - | - | - | - | - | Aktivierungsstatus Drehzahlbegrenzung Werk: 1=AKTIV; 0=INAKTIV |

### RES_0X64A5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPERRUNG_TEV | 0/1 | high | unsigned char | - | - | - | - | - | Sperrstatus des Tankentlüftungsventils: 0 == INAKTIV; 1 == AKTIV |

### RES_0X64A6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WERKSPROZESS | 0/1 | high | unsigned char | - | - | - | - | - | testerseitiger Aktivierungsstatus des Werksprozesses: 0 == INAKTIV; 1 == AKTIV |

### RES_0X64B3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NETTOCODIERDATEN_BLOCK_3300_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Codierdatenarray 3300 (BSZR - betriebsstundenzählerrelevant) |
| STAT_NETTOCODIERDATEN_BLOCK_3320_DATA | DATA | high | data[64] | - | - | 1.0 | 1.0 | 0.0 | Codierdatenarray 3320 (BSZU - betriebsstundenzählerunabhängig) |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE00_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 0 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE01_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 1 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE02_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 2 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE03_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 3 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE04_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 4 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE05_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 5 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE06_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 6 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE07_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 7 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE08_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 8 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE09_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 9 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE10_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 10 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE11_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 11 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE12_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 12 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE13_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 13 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE14_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 14 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE15_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 15 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE16_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 16 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE17_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 17 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE18_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 18 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE19_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 19 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE20_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 20 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE21_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 21 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE22_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 22 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE23_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 23 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE24_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 24 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE25_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 25 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE26_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 26 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE27_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 27 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE28_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 28 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE29_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 29 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE30_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 30 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE31_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 31 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE32_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 32 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE33_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 33 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE34_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 34 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE35_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 35 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE36_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 36 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE37_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 37 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE38_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 38 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE39_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 39 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE40_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 40 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE41_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 41 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE42_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 42 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE43_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 43 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE44_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 44 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE45_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 45 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE46_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 46 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE47_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 47 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE48_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 48 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE49_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 49 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE50_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 50 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE51_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 51 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE52_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 52 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE53_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 53 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE54_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 54 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE55_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 55 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE56_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 56 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE57_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 57 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE58_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 58 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE59_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 59 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE60_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 60 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE61_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 61 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE62_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 62 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE63_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 63 des Codierdatenarrays 3320 |

### RES_0X64B4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VARIANTENINFO_DATEN0_TEXT | TEXT | high | string[26] | - | - | 1.0 | 1.0 | 0.0 | Datensatz-/Varianteninformation (Datenfeld 0) als ASCII-Text |
| STAT_VARIANTENINFO_DATEN1_TEXT | TEXT | high | string[40] | - | - | 1.0 | 1.0 | 0.0 | Datensatz-/Varianteninformation (Datenfeld 1) als ASCII-Text |
| STAT_VARIANTENINFO_DATEN2_TEXT | TEXT | high | string[40] | - | - | 1.0 | 1.0 | 0.0 | Datensatz-/Varianteninformation (Datenfeld 2) als ASCII-Text |
| STAT_VARIANTENINFO_DATEN3_TEXT | TEXT | high | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datensatz-/Varianteninformation (Datenfeld 3) als ASCII-Text |
| STAT_VARIANTENINFO_DATEN4_TEXT | TEXT | high | string[40] | - | - | 1.0 | 1.0 | 0.0 | Datensatz-/Varianteninformation (Datenfeld 4) als ASCII-Text |
| STAT_VARIANTENINFO_DATEN5_TEXT | TEXT | high | string[40] | - | - | 1.0 | 1.0 | 0.0 | Datensatz-/Varianteninformation (Datenfeld 5) als ASCII-Text |
| STAT_VARIANTENINFO_DATEN6_TEXT | TEXT | high | string[40] | - | - | 1.0 | 1.0 | 0.0 | Datensatz-/Varianteninformation (Datenfeld 6) als ASCII-Text |

### RES_0X64B5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODIERUNG_DATEN_RADIUS_VORDERRAD_WERT | m | high | unsigned int | - | - | 2.0 | 65536.0 | 0.0 | unkorrigierter Radius des Vorderrades in Meter |
| STAT_CODIERUNG_DATEN_RADIUS_HINTERRAD_WERT | m | high | unsigned int | - | - | 2.0 | 65536.0 | 0.0 | Radius des Hinterrades in Meter |
| STAT_CODIERUNG_DATEN_BEGRENZUNG_DREHZAHL_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Motorbegrenzungsdrehzahl in Umdrehungen pro Minute |
| STAT_CODIERUNG_DATEN_BEGRENZUNG_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | zulässige Maximalgeschwindigkeit in Kilometer pro Stunde |

### RES_0X64C1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERVICE_KMSTAND_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Servicekilometerstand |

### RES_0XE119_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GWSZ_WERT | km | - | signed long | - | - | 1.0 | 1.0 | 0.0 | aktueller GWSZ-Wert |

### RES_0XE12C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERVICE_TAG_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Tag, an dem der nächste Service fällig ist |
| STAT_SERVICE_MONAT_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Monat, an dem der nächste Service fällig ist |
| STAT_SERVICE_JAHR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Jahr, an dem der nächste Service fällig ist |

### RES_0XE12D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESTWEG_WERT | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | verbleibendes Wegstreckenintervall bis wegabhängiger Service als überfällig angezeigt wird |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| KL_15_HW_DIGITAL_MR | 0xE013 | STAT_KL_15_HW_DIGITAL_EIN | Status Klemme 15 Hardware digital | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GWSZ_MR | 0xE119 | - | Gesamtwegstreckenzähler Motorrad | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE119_D | RES_0xE119_D |
| SERVICE_DATUM_MR | 0xE12C | - | Auslesen und Schreiben der bis zum nächsten fälligen Service verbleibende Zeit | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12C_D | RES_0xE12C_D |
| SERVICE_RESTWEG_MR | 0xE12D | - | Auslesen und Schreiben der bis zum nächsten fälligen Service verbleibende Weg | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12D_D | RES_0xE12D_D |
| BATTERIESPANNUNG_MR | 0xE142 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | high | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
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
| FASTA_LAMBDADATEN1_MR | 0x2330 | - | Auslesen der Daten des FASTA-Lambdadatenblocks 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2330_D |
| FASTA_LAMBDADATEN2_BANK1_TEIL1_MR | 0x2331 | STAT_FASTA_LAMBDADATEN2_KFLRA_BANK1_TEIL1_DATA | adaptiertes Kennfeld für die Lambdaregelung Bank 1 als Messgröße (Teil 1) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN2_BANK1_TEIL2_MR | 0x2332 | STAT_FASTA_LAMBDADATEN2_KFLRA_BANK1_TEIL2_DATA | adaptiertes Kennfeld für die Lambdaregelung Bank 1 als Messgröße (Teil 2) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN2_BANK2_TEIL1_MR | 0x2333 | STAT_FASTA_LAMBDADATEN2_KFLRA_BANK2_TEIL1_DATA | adaptiertes Kennfeld für die Lambdaregelung Bank 2 als Messgröße (Teil 1) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN2_BANK2_TEIL2_MR | 0x2334 | STAT_FASTA_LAMBDADATEN2_KFLRA_BANK2_TEIL2_DATA | adaptiertes Kennfeld für die Lambdaregelung Bank 2 als Messgröße (Teil 2) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK1_TEIL1_MR | 0x2335 | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK1_TEIL1_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 1 als Messgröße (Teil 1) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK1_TEIL2_MR | 0x2336 | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK1_TEIL2_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 1 als Messgröße (Teil 2) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK1_TEIL3_MR | 0x2337 | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK1_TEIL3_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 1 als Messgröße (Teil 3) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK1_TEIL4_MR | 0x2338 | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK1_TEIL4_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 1 als Messgröße (Teil 4) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK2_TEIL1_MR | 0x2339 | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK2_TEIL1_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 2 als Messgröße (Teil 1) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK2_TEIL2_MR | 0x233A | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK2_TEIL2_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 2 als Messgröße (Teil 2) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK2_TEIL3_MR | 0x233B | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK2_TEIL3_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 2 als Messgröße (Teil 3) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK2_TEIL4_MR | 0x233C | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK2_TEIL4_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 2 als Messgröße (Teil 4) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN4_MR | 0x233D | - | Auslesen der Daten des FASTA-Lambdadatenblocks 4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x233D_D |
| FASTA_LAMBDADATEN5_MR | 0x233E | - | Auslesen der Daten des FASTA-Lambdadatenblocks 5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x233E_D |
| BETRIEBSSTUNDENZAEHLER_MR | 0x4AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | Betriebsstundenzähler des Motors in Sekunden | s | - | high | unsigned long | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_MR | 0x6400 | - | Auslesen der vom SG verwendeten Temperaturen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6400_D |
| GESCHWINDIGKEIT_MR | 0x6401 | - | Auslesen der vom SG verwendeten Geschwindigkeiten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6401_D |
| DRUCK_MR | 0x6402 | - | Auslesen der vom SG verwendeten Drücke | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6402_D |
| DREHZAHL_MR | 0x6403 | - | Auslesen der vom SG verwendeten Drehzahlen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6403_D |
| SPANNUNG_MR | 0x6404 | - | Auslesen der vom SG verwendeten Spannungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6404_D |
| DROSSELKLAPPE_MR | 0x6410 | - | Auslesen von Drosselklappenwerten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6410_D |
| FAHRWERTGEBER_MR | 0x6411 | - | Auslesen von Fahrwertgeberwerten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6411_D |
| SENSORBOX_MR | 0x6412 | - | Auslesen der vom SG verwendeten Signale der Sensorbox sowie daraus berechneter Werte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6412_D |
| GETRIEBE_MR | 0x6413 | - | Auslesen von Getriebewerten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6413_D |
| SCHALTER_MR | 0x6414 | - | Auslesen von Schaltereingängen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6414_D |
| ANLASSER_MR | 0x6415 | - | Auslesen von anlasserrelevanten Stati | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6415_D |
| LAMBDASONDENHEIZUNG_MR | 0x6416 | - | Auslesen von Ansteuerstati der Lambdasondenheizung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6416_D |
| KRAFTSTOFFPUMPE_MR | 0x6417 | - | Auslesen von Ansteuerstati der Elektrokraftstoffpumpe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6417_D |
| ELUEFTER_MR | 0x6418 | - | Auslesen von Ansteuerstati des E-Lüfters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6418_D |
| SEKUNDAERLUFTVENTIL_MR | 0x6419 | - | Auslesen von Ansteuerstati des Sekundärluftventils | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6419_D |
| TANKENTLUEFTUNGSVENTIL_MR | 0x641A | - | Auslesen von Stati und Werten des Tankentlüftungsventils | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x641A_D |
| UEBERTEMPERATURLEUCHTE_MR | 0x641B | - | Auslesen von Ansteuerstati der Übertemperaturleuchte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x641B_D |
| MOTORWARNLEUCHTE_MR | 0x641C | - | Auslesen von Ansteuerstati der Motorwarnleuchte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x641C_D |
| ABGASKLAPPENSTELLER_MR | 0x641D | - | Auslesen von Werten des Abgasklappenstellers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x641D_D |
| INTERFERENZROHRKLAPPENSTELLER_MR | 0x641E | - | Auslesen von Werten des Interferenzrohrklappenstellers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x641E_D |
| SCHALTSAUGROHR_MR | 0x641F | STAT_SCHALTSAUGROHR_POSITION_WERT | Position des Schaltsaugrohres in Prozent | % | - | high | signed int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| AKUSTIKKLAPPENVENTIL_MR | 0x6420 | - | Auslesen von Ansteuerstati des Akustikklappenventils | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6420_D |
| SCHALTHEBEL_MR | 0x6421 | - | Auslesen von Werten der Schalthebelsensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6421_D |
| SENSORBOXDATEN_MR | 0x6422 | - | Auslesen von Sensorboxdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6422_D |
| LEERLAUFSTEPPER_MR | 0x6423 | - | Auslesen von Werten des Leerlaufsteppers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6423_D |
| RUECKFAHRHILFENSTELLER_MR | 0x6424 | - | Auslesen von Werten des Rückfahrhilfenstellers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6424_D |
| ADAPTION_GETRIEBE_LESEN_MR | 0x6430 | - | Auslesen der Adaptionswerte des Getriebeschaltwalzenpotentiometers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6430_D |
| ADAPTION_DROSSELKLAPPE_LESEN_MR | 0x6431 | - | Auslesen der Adaptionswerte der Drosselklappe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6431_D |
| ADAPTION_FAHRWERTGEBER_LESEN_MR | 0x6432 | - | Auslesen der Adaptionswerte des Fahrwertgebers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6432_D |
| ADAPTION_SCHRAEGLAGE_LESEN_MR | 0x6434 | - | Auslesen von Adaptionswerten der Schräglagenberechnung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6434_D |
| ADAPTION_LEERLAUF_LESEN_MR | 0x6435 | - | Auslesen von Adaptionswerten der Leerlaufvorsteuerung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6435_D |
| ADAPTION_SCHALTHEBEL_LESEN_MR | 0x6436 | STAT_ADAPTION_SCHALTHEBEL_SENSOR_WERT | Adaptionswert des Schalthebelsensors in Prozent | % | - | high | signed int | - | 100.0 | 32768.0 | 0.0 | - | 22 | - | - |
| ADAPTION_LAUFUNRUHE_LESEN_MR | 0x6437 | STAT_ADAPTION_LAUFUNRUHE_WERT | Adaptionswert der Laufunruheberechnung in Prozent | % | - | high | signed int | - | 1024.0 | 1953125.0 | 0.0 | - | 22 | - | - |
| ADAPTION_KLOPFREGELUNG_LESEN_MR | 0x6438 | - | Auslesen der Adaptionswerte der Klopfregelung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6438_D |
| ADAPTION_LAMBDAREGELUNG_LESEN_MR | 0x6439 | - | Auslesen von Daten der Lambdaregelungsadaption, die zuvor über ADAPTION_LAMBDAREGELUNG_AUSWAHL_MR ausgewählt wurden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6439_D |
| ADAPTION_NOCKENWELLE_LESEN_MR | 0x643A | - | Auslesen von Adaptionswerten der Nockenwelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x643A_D |
| ADAPTION_GANGWECHSEL_LESEN_MR | 0x643B | STAT_ADAPTION_GANGWECHSEL_ZAEHLER_DKVER_WERT | adaptiver Maximalwert von cnt_dkver_um nach Momenteneingriff durch die Gangwechselunterstützung | - | - | high | unsigned int | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| ADAPTION_LOESCHEN_MR | 0x6440 | - | Löschen von Adaptionswertegruppen.  Bei Motordrehzahl == 0 wird direkt nach Jobausführung ein Reset ausgelöst und damit die Adaptionswerte in den gesetzten Gruppen initialisiert. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6440_D | - |
| NOCKENWELLENDIAGNOSE_MR | 0x6442 | - | De-/Aktivierung der Nockenwellendiagnose | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6442_D | - |
| ADAPTION_GETRIEBE_SCHREIBEN_MR | 0x6444 | - | Schreiben von Werten der Getriebeadaption | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6444_D | - |
| ADAPTION_LAMBDAREGELUNG_AUSWAHL_MR | 0x6445 | - | Auswahl der Kennfelddaten, die nachfolgend mit ADAPTION_LAMBDAREGELUNG_LESEN_MR ausgelesen werden sollen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6445_D | - |
| ADAPTION_LAMBDAREGELUNG_SCHREIBEN_MR | 0x6446 | - | Schreiben von Daten der Lambdaregelungsadaption, die zuvor mit ADAPTION_LAMBDAREGELUNG_LESEN_MR ausgelesen wurden | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6446_D | - |
| VERBAUDIAGNOSE_LEERLAUFSTEPPER_MR | 0x6447 | - | Steuerung der Verbaudiagnose des Leerlaufsteppers | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6447_D | - |
| EINSPRITZVENTIL_ANSTEUERN_MR | 0x6450 | - | Ansteuern der Einspritzventile | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6450_D | - |
| SEKUNDAERLUFTVENTIL_ANSTEUERN_MR | 0x6451 | - | Ansteuern des Sekundärluftventils | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6451_D | - |
| TANKENTLUEFTUNGVENTIL_ANSTEUERN_MR | 0x6452 | - | Ansteuern des Tankentlüftungsventils | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6452_D | - |
| ELEKTROKRAFTSTOFFPUMPE_ANSTEUERN_MR | 0x6453 | - | Ansteuern der Elektrokraftstoffpumpe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6453_D | - |
| MOTORLUEFTER_ANSTEUERN_MR | 0x6454 | - | Ansteuern des elektrischen Motorlüfters | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6454_D | - |
| LAMBDASONDENHEIZUNG_ANSTEUERN_MR | 0x6455 | - | Ansteuern der Lambdasondenheizungen | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6455_D | - |
| UEBERTEMPERATURLEUCHTE_ANSTEUERN_MR | 0x6456 | - | Ansteuern der Übertemperaturleuchte | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6456_D | - |
| MOTORWARNLEUCHTE_ANSTEUERN_MR | 0x6457 | - | Ansteuern der Motorwarnleuchte | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6457_D | - |
| ABGASKLAPPENSTELLER_ANSTEUERN_MR | 0x6458 | - | Ansteuern des Abgasklappenstellers | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6458_D | - |
| INTERFERENZROHRKLAPPENSTELLER_ANSTEUERN_MR | 0x6459 | - | Ansteuern des Interferenzrohrklappenstellers | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6459_D | - |
| SCHALTSAUGROHR_ANSTEUERN_MR | 0x645A | - | Ansteuern des Schaltsaugrohres | - | - | - | - | - | - | - | - | - | 2F | ARG_0x645A_D | - |
| DROSSELKLAPPENMOTOR_ANSTEUERN_MR | 0x645B | - | Ansteuern des Drosselklappenmotors | - | - | - | - | - | - | - | - | - | 2F | ARG_0x645B_D | - |
| DROSSELKLAPPENREGLER_ANSTEUERN_MR | 0x645C | - | Ansteuern bzw. Stimulieren der Drosselklappenlageregelung durch eine Sollwertvorgabe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x645C_D | - |
| AKUSTIKKLAPPENVENTIL_ANSTEUERN_MR | 0x645D | - | Ansteuern des Akustikklappenventils | - | - | - | - | - | - | - | - | - | 2F | ARG_0x645D_D | - |
| EINSPRITZVENTIL_EKP_ANSTEUERN_MR | 0x645E | - | gemeinsames Ansteuern von Einspritzventilen und Elektrokraftstoffpumpe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x645E_D | - |
| LEERLAUFSTEPPER_ANSTEUERN_MR | 0x645F | - | Ansteuern des Leerlaufsteppers | - | - | - | - | - | - | - | - | - | 2F | ARG_0x645F_D | - |
| RUECKFAHRHILFENSTELLER_ANSTEUERN_MR | 0x6460 | - | Ansteuerung des Stellers für die Rückfahrhilfe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6460_D | - |
| FAHRGESTELLNUMMER_MR | 0x6470 | - | Auslesen und Schreiben der EWS-Fahrgestellnummer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6470_D | RES_0x6470_D |
| SCHLUESSELDATEN_MR | 0x6471 | - | Auslesen und Schreiben der EWS-Schlüsseldaten; Vor dem Auslesen der Schlüsseldaten muß mit STEUERN_SCHLUESSELDATEN_AUSWAHL_MR die Schlüsselnummer gesetzt werden. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6471_D | RES_0x6471_D |
| ANLERNDATUM_ORT_MR | 0x6472 | - | Auslesen und Schreiben des EWS-Schlüsselanlerndatums/-orts | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6472_D | RES_0x6472_D |
| SCHLUESSELANLERNEN_MR | 0x6473 | - | Auslesen des Status bzw. Starten des EWS-Schlüsselanlernprozesses | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6473_D | RES_0x6473_D |
| MECHANISCHER_SCHLUESSELCODE_MR | 0x6474 | - | Auslesen und Schreiben des mechanischen Schlüsselcodes | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6474_D | RES_0x6474_D |
| SGVERRIEGELUNG_MR | 0x6475 | - | Auslesen des Verriegelungsstatus bzw. Verriegelung des SG | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6475_D | RES_0x6475_D |
| SCHLUESSEL_SPERREN_MR | 0x6476 | - | Sperren eines Schlüssels | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6476_D | - |
| SCHLUESSEL_FREIGEBEN_MR | 0x6477 | - | Freigeben eines Schlüssels | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6477_D | - |
| SCHLUESSEL_AKTUELL_MR | 0x6478 | - | Auslesen aktueller Schlüsseldaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6478_D |
| SCHLUESSELDATEN_AUSWAHL_MR | 0x6479 | - | Auswahl des Schlüssels für den nachfolgend mit STATUS_SCHLUESSELDATEN_MR die Schlüsseldaten ausgelesen werden können | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6479_D | - |
| EWS_DIAGNOSE_MR | 0x647A | - | EWS-Diagnoseinformationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x647A_D |
| SCHLUESSEL_SPERRSTATI_MR | 0x647B | - | Auslesen der Sperrstati aller Schlüssel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x647B_D |
| LAMBDAREGELUNG_MR | 0x6490 | - | Auslesen von Werten der Lambdaregelung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6490_D |
| LAST_MR | 0x6491 | - | Auslesen der Lastzustände des Motors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6491_D |
| ZUENDUNG_MR | 0x6492 | - | Auslesen von Werten der Zündung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6492_D |
| EINSPRITZUNG_MR | 0x6493 | - | Auslesen von Werten der Einspritzung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6493_D |
| ASC_MR | 0x6494 | - | Auslesen von ASC-relevanten Werten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6494_D |
| KLOPFREGELUNG_MR | 0x6495 | - | Auslesen von Betriebsdaten der Klopfregelung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6495_D |
| FAHRZEUGMODUSSPEICHER_MR | 0x6496 | - | Auslesen des Fahrzeugmodusspeichers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6496_D |
| RUECKFAHRHILFE_MR | 0x6497 | STAT_RUECKFAHRHILFE_FREIGABE | Status der Freigabe der Rückfahrhilfe: 1=vorhanden; 0=nicht vorhanden | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| VERBAUDIAGNOSE_LEERLAUFSTEPPER_LESEN_MR | 0x6498 | STAT_VERBAUDIAGNOSE_LEERLAUFSTEPPER_STATUS_WERT | aktueller Status der Verbaudiagnose des Leerlaufsteppers | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPERRUNG_EKP_MR | 0x64A1 | - | Auslesen des Sperrstatus bzw. De-/Aktivierung der Sperrung von EKP, Anlasser und Einspritzung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x64A1_D | RES_0x64A1_D |
| UEBERDREHZAHL_MR | 0x64A2 | - | Auslesen und Löschen von Informationen zu Überdrehzahlereignissen | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x64A2_D | RES_0x64A2_D |
| AKUSTIK_VARIANTE_MR | 0x64A3 | - | Auslesen des Aktivierungsstatus bzw. De-/Aktivierung der länderspezifischen Datenvariante der Funktion AKUSTIK | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x64A3_D | RES_0x64A3_D |
| DREHZAHL_WERK_MR | 0x64A4 | - | Auslesen des Status und De-/Aktivierung der Drehzahlbegrenzung für das Werk | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x64A4_D | RES_0x64A4_D |
| SPERRUNG_TEV_MR | 0x64A5 | - | Auslesen des Sperrstatus bzw. De-/Aktivierung der Sperrung des Tankentlüftungsventils | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x64A5_D | RES_0x64A5_D |
| WERKSPROZESS_MR | 0x64A6 | - | Auslesen des Aktivierungsstatus bzw De-/Aktivierung des Werksprozesses | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x64A6_D | RES_0x64A6_D |
| DATENSATZ_MR | 0x64B0 | STAT_DATENSATZ_TEXT | Datensatzinformation als ASCII-Text | TEXT | - | high | string[251] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ROZ_VARIANTE_MR | 0x64B1 | STAT_ROZ_VARIANTE | codierte Kraftstoffvariante (ROZ): 0 == Applikation ROZ-Variante 1 (Serie) aktiv, 1 == Applikation ROZ-Variante 2 aktiv | 0-n | - | high | unsigned char | TAB_MR_ROZ_VARIANTE | - | - | - | - | 22 | - | - |
| GETRIEBE_VARIANTE_MR | 0x64B2 | STAT_GETRIEBE_VARIANTE | codierte Getriebevariante: 0 == Applikation Getriebe-Variante 1 (Serie) aktiv, 1 == Applikation Getriebe-Variante 2 aktiv | 0-n | - | high | unsigned char | TAB_MR_GETRIEBE_VARIANTE | - | - | - | - | 22 | - | - |
| NETTOCODIERDATEN_MR | 0x64B3 | - | Auslesen der Nettocodierdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x64B3_D |
| VARIANTENINFO_MR | 0x64B4 | - | Datensatz-/Varianteninformationen als ASCII-Texte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x64B4_D |
| CODIERUNG_DATEN_MR | 0x64B5 | - | Auslesen von durch Codierung beeinflussten Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x64B5_D |
| SERVICE_KMSTAND_MR | 0x64C1 | - | Auslesen und Schreiben des Service-Kilometerstandes | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x64C1_D | RES_0x64C1_D |
| ADAPTION_FAHRWERTGEBER_MR | 0xF500 | - | Adaptierung des Fahrwertgebers | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ADAPTION_GETRIEBE_MR | 0xF501 | - | Anstossen der Adaption der Getriebepotispannungen für alle Gänge | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ADAPTION_LAMBDA_UEBERNAHME_MR | 0xF502 | - | Übernahme der über ADAPTION_LAMBDAREGELUNG_SCHREIBEN_MR eingebrachten Daten in die Lambdaregelungsadaption | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ADAPTION_LEERLAUFSTEPPER_MR | 0xF503 | - | Anstossen der Adaption des Leerlaufsteppers | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ABGLEICH_ABGASKLAPPE_MR | 0xF510 | - | Anstossen des Abgleichs der Abgasklappe | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ABGLEICH_INTERFERENZROHRKLAPPE_MR | 0xF511 | - | Anstossen des Abgleichs der Interferenzrohrklappe | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ABGLEICH_RUECKFAHRHILFENSTELLER_MR | 0xF512 | - | Abgleich des Rückfahrhilfen-Stellers | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LOESCHUNG_FASTA_MR | 0xF520 | - | Anstossen der Löschung aller gesammelten FASTA-Daten | - | - | - | - | - | - | - | - | - | 31 | - | - |

### STATCLIENTAUTHTXT

| SB | TEXT |
| --- | --- |
| 0x00 | Freigabe von Zuendung und Einspritzung (noch) nicht erteilt (noch nicht versucht oder Kommunikation gestört, Motorlauf gesperrt) |
| 0x01 | Freigabe von Zuendung und Einspritzung erteilt (Challenge-Response erfolgreich) |
| 0x02 | Freigabe von Zuendung und Einspritzung abgelehnt (Challenge-Response fehlgeschlagen, falsche Response, Kommunikation i.O.) |
| 0x03 | nicht definiert |

### STATEWSVERTXT

| SB | TEXT |
| --- | --- |
| 0x01 | Direktschreiben des SecretKey |
| 0x02 | Direktschreiben des SecretKey und DH-Abgleich |
| 0xXY | unbekannt |

### STATFREESKTXT

| SB | TEXT |
| --- | --- |
| 0xFE | Ablage unbegrenzt |
| 0xFF | ungültig |
| 0xXY | freie Ablagen |

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

### TAB_MR_LAMBDAADAPTION_LABEL

| WERT | TEXT |
| --- | --- |
| 1 | lra_adap_cnt (Anzahl durchgeführte Berechnungen der Lambdaadaption Bank1/2); 1-teilig |
| 2 | kflra/2 (adaptiertes Kennfeld für die Lambdaregelung Bank1/2 als Messgröße); 2-teilig |
| 3 | kflra_sum_gewicht/2 (Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank1/2 als Messgröße; 4-teilig) |
| 4 | LRA_STUETZ_NMOT (Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motordrehzahl; 1-teilig) |
| 5 | LRA_STUETZ_WDKBA (Stützstellen kflra für Berechnung Lambdaadaption für Dimension Drosselklappenwinkel; 1-teilig) |
| 6 | LRA_STUETZ_TMOT (Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motortemperatur; 1-teilig) |
| 7 | LRA_GEWICHT_NMOT, X-Achse (Gewichtung Abstand (abhängig von Drehzahl) für Berechnung Lambdaadaption; 1-teilig) |
| 8 | LRA_GEWICHT_NMOT, Werte (Gewichtung Abstand (abhängig von Drehzahl) für Berechnung Lambdaadaption; 1-teilig) |
| 9 | LRA_GEWICHT_WDKBA, X-Achse (Gewichtung Abstand (abhängig von Drosselklappenwinkel) für Berechnung Lambdaadaption; 1-teilig) |
| 10 | LRA_GEWICHT_WDKBA, Werte (Gewichtung Abstand (abhängig von Drosselklappenwinkel) für Berechnung Lambdaadaption; 1-teilig) |
| 11 | LRA_GEWICHT_TMOT, X-Achse (Gewichtung Abstand (abhängig von Temperatur) für Berechnung Lambdaadaption; 1-teilig) |
| 12 | LRA_GEWICHT_TMOT, Werte (Gewichtung Abstand (abhängig von Temperatur) für Berechnung Lambdaadaption; 1-teilig) |
| 13 | LRA_STUETZ_NMOT_MX (maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motordrehzahl; 1-teilig) |
| 14 | LRA_STUETZ_WDKBA_MX (maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Drosselklappenwinkel; 1-teilig) |
| 15 | LRA_STUETZ_TMOT_MX (maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motortemperatur; 1-teilig) |

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
