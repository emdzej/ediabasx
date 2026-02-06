# x_bmsae1.prg

## General

|  |  |
| --- | --- |
| File | x_bmsae1.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 77 |
| Origin | BMW UX-EE-4 Einberger |
| Revision | 28.002 |
| Author | BMW UX-EE-4 Einberger |
| ECU Comment | Neue Version 28 feur K17TUE und alte K17 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad Antriebselektronik |  |  |
| ORIGIN | string | BMW UX-EE-4 Einberger |  |  |
| REVISION | string | 28.002 |  |  |
| AUTHOR | string | BMW UX-EE-4 Einberger |  |  |
| COMMENT | string | Neue Version 28 feur K17TUE und alte K17 |  |  |
| PACKAGE | string | 1.62 |  |  |
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

### DME_DIAGNOSE_TESTJOB_DATA

UDS-Job für DME Diagnosetest Datenbyteeingabe im Data-Format

| Name | Type | Description |
| --- | --- | --- |
| DATEN | binary | Datenbytes |

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

### ARG_0X6321_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ADAPTION_ROTOR_OFFSET_WERT | ° | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | - | - | Zu Schreibender Rotor-Offset Adaptions-Wert |

### ARG_0X632F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GRUPPENAUSWAHL | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Gruppe der beim Neustart des Steuergerätes zu löschenden Adaptions-Wert-Gruppe |

### ARG_0X633F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BTS_NR | 0-n | high | unsigned char | - | TAB_MR_BTS_ID | - | - | - | - | - | Nummer der BTS-Endstufe |
| BTS_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Status BTS-Ansteuerung: 1 == aktiv, 0 == inaktiv |

### ARG_0X6350_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANSTEUER_DAUER_WERT | - | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung in Sekunden |

### ARG_0X6351_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANSTEUER_DAUER_WERT | - | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Ansteuerungs-Dauer in Sekunden |
| NEW_PWM_STATE_WERT | % | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | - | - | Neuer Zustand: 0.00 % bis 100.00% |

### ARG_0X6352_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANSTEUER_DAUER_WERT | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Ansteuerungs-Dauer  in Sekunden |

### ARG_0X6353_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANSTEUER_DAUER_WERT | - | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Ansteuerungs-Dauer  in Sekunden |

### ARG_0X6370_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAHRGESTELLNUMMER | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | - | - | EWS Fahrgestellnummer |

### ARG_0X6382_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KMSTAND | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kilometerstand |

### ARG_0X6394_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATA | DATA | high | data[240] | - | - | 1.0 | 1.0 | 0.0 | - | - | Klassierkonfigurationsdaten zum schreiben. Wewnn dynamische Konfiguration |

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

### ARG_0XF301_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODUS_WERT | + | - | 0-n | high | unsigned char | - | TAB_MR_ROTOROFFSET_ERMITTELN | - | - | - | - | - | Modus für die Rotor-Offset-Ermittlung |

### ARG_0XF303_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UWB_1 | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 65535.0 | UWB-Code |
| UWB_2 | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 65535.0 | UWB-Code |
| UWB_3 | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 65535.0 | UWB-Code |
| UWB_4 | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 65535.0 | UWB-Code |
| UWB_5 | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 65535.0 | UWB-Code |

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
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021200 | Energiesparmode  aktiv | 0 |
| 0x3A0000 | Fahrwertgeber, Vergleichsfehler, Rohwerte | 0 |
| 0x3A0001 | Fahrwertgeber, Vergleichsfehler, adaptierte Werte | 0 |
| 0x3A0002 | Fahrwertgeber, Sensor, Kanal 1, MIN-Bereichsfehler | 0 |
| 0x3A0003 | Fahrwertgeber, Sensor, Kanal 1, MAX-Bereichsfehler | 0 |
| 0x3A0004 | Fahrwertgeber, Sensor, Kanal 2, MIN-Bereichsfehler | 0 |
| 0x3A0005 | Fahrwertgeber, Sensor, Kanal 2, MAX-Bereichsfehler | 0 |
| 0x3A0006 | Fahrwertgeber, Adaption nicht abgeschlossen | 0 |
| 0x3A0010 | RSC, Drucksensor Hinterrad, Signalfehler, Oberes Fehlerband | 0 |
| 0x3A0011 | RSC, Drucksensor Hinterrad, Signalfehler, Unteres Fehlerband | 0 |
| 0x3A0012 | RSC, Drucksensor Hinterrad, Signalfehler, Gradientenüberwachung | 0 |
| 0x3A0013 | RSC, Drucksensor Hinterrad, Signalfehler, Testpuls | 0 |
| 0x3A0014 | RSC, Drucksensor Hinterrad, Signalfehler, Offset | 0 |
| 0x3A0020 | Fahrzeuggeschwindigkeit, Hinterradgeschwindigkeit Raddrehzahlsensor/Motordrehzahl unplausibel | 0 |
| 0x3A0021 | Fahrzeuggeschwindigkeit, Raddrehzahlsensorgeschwindigkeit Hinterrad unplausibel | 0 |
| 0x3A0022 | Fahrzeuggeschwindigkeit, Vergleichsfehler Geschwindigkeiten Raddrehzahlsensor/CAN, Hinterrad | 0 |
| 0x3A0023 | Fahrzeuggeschwindigkeit, Raddrehzahlsensorgeschwindigkeit Vorderrad unplausibel | 0 |
| 0x3A0024 | Fahrzeuggeschwindigkeit, Vergleichsfehler Geschwindigkeiten Raddrehzahlsensor/CAN, Vorderrad | 0 |
| 0x3A0030 | elektrische Wasserpumpe, reduzierte Drehzahl | 0 |
| 0x3A0031 | elektrische Wasserpumpe, Blockade, Überstrom oder Minimaldrehzahlunterschreitung | 0 |
| 0x3A0032 | elektrische Wasserpumpe, Trockenlauf | 0 |
| 0x3A0033 | elektrische Wasserpumpe, Übertemperatur | 0 |
| 0x3A0034 | elektrische Wasserpumpe, Diagnose Lifebeat | 0 |
| 0x3A0040 | Batterie Niedervolt, Spannung zu hoch | 0 |
| 0x3A0041 | Batterie Niedervolt, Spannung zu niedrig | 0 |
| 0x3A0042 | Batterie Niedervolt, unplausible Spannung | 0 |
| 0x3A0050 | Wassertemperatursensor Kühlerausgang, Kurzschluss nach Masse | 0 |
| 0x3A0051 | Wassertemperatursensor Kühlerausgang, Kurzschluss nach UBatt | 0 |
| 0x3A0052 | Wassertemperatursensor Kühlerausgang, Spannungsgradient unplausibel | 0 |
| 0x3A0060 | HV: Temperatursensor, Motorwicklung, Phase 1, Kurzschluss nach Masse | 0 |
| 0x3A0061 | HV: Temperatursensor, Motorwicklung, Phase 1, Kurzschluss nach UBatt | 0 |
| 0x3A0062 | HV: Temperatursensor, Motorwicklung, Phase 1, Spannungsgradient unplausibel | 0 |
| 0x3A0070 | HV: Temperatursensor, Motorwicklung, Phase 2, Kurzschluss nach Masse | 0 |
| 0x3A0071 | HV: Temperatursensor, Motorwicklung, Phase 2, Kurzschluss nach UBatt | 0 |
| 0x3A0072 | HV: Temperatursensor, Motorwicklung, Phase 2, Spannungsgradient unplausibel | 0 |
| 0x3A0080 | HV: Temperatursensor, Motorwicklung, Phase 3, Kurzschluss nach Masse | 0 |
| 0x3A0081 | HV: Temperatursensor, Motorwicklung, Phase 3, Kurzschluss nach UBatt | 0 |
| 0x3A0082 | HV: Temperatursensor, Motorwicklung, Phase 3, Spannungsgradient unplausibel | 0 |
| 0x3A0090 | HV: Motorwicklungstemperatur (über SPI), Phase U, Temperatur zu niedrig | 0 |
| 0x3A0091 | HV: Motorwicklungstemperatur (über SPI), Phase U, Temperatur zu hoch | 0 |
| 0x3A00A0 | HV: Motorwicklungstemperatur (über SPI), Phase V, Temperatur zu niedrig | 0 |
| 0x3A00A1 | HV: Motorwicklungstemperatur (über SPI), Phase V, Temperatur zu hoch | 0 |
| 0x3A00B0 | HV: Motorwicklungstemperatur (über SPI), Phase W, Temperatur zu niedrig | 0 |
| 0x3A00B1 | HV: Motorwicklungstemperatur (über SPI), Phase W, Temperatur zu hoch | 0 |
| 0x3A00C0 | HV: Motorwicklungstemperaturen, Vergleich, Abweichungen zu hoch | 0 |
| 0x3A00D0 | Umrichtertemperatur, Phase U, Temperatur zu niedrig | 0 |
| 0x3A00D1 | Umrichtertemperatur, Phase U, Temperatur zu hoch | 0 |
| 0x3A00E0 | Umrichtertemperatur, Phase V, Temperatur zu niedrig | 0 |
| 0x3A00E1 | Umrichtertemperatur, Phase V, Temperatur zu hoch | 0 |
| 0x3A00F0 | Umrichtertemperatur, Phase W, Temperatur zu niedrig | 0 |
| 0x3A00F1 | Umrichtertemperatur, Phase W, Temperatur zu hoch | 0 |
| 0x3A0170 | Bauteilschutz SME, Selbstständige Abschaltung des BTS1 zum Bauteilschutz | 0 |
| 0x3A0171 | Bauteilschutz SME, Maximale Leistung an BTS1 überschritten | 0 |
| 0x3A0180 | Bauteilschutz EWAPU, Selbstständige Abschaltung des BTS2 zum Bauteilschutz | 0 |
| 0x3A0181 | Bauteilschutz EWAPU, Maximale Leistung an BTS2 überschritten | 0 |
| 0x3A0190 | Bauteilschutz ELUE, Selbstständige Abschaltung des BTS3 zum Bauteilschutz | 0 |
| 0x3A0191 | Bauteilschutz ELUE, Maximale Leistung an BTS3 überschritten | 0 |
| 0x3A01E0 | Batterie Kapazitaet Ueberwachung | 0 |
| 0x3A01E1 | Batterie Kapazitaet Ueberwachung Integral | 0 |
| 0x3A01F0 | Systemfehler | 0 |
| 0x3A01F1 | ECC-Fehler Daten | 0 |
| 0x3A01F2 | ECC-Fehler Code | 0 |
| 0x3A0200 | NVM_E_WRITE_FAILED | 0 |
| 0x3A0201 | NVM_E_READ_FAILED | 0 |
| 0x3A0202 | NVM_E_CONTROL_FAILED | 0 |
| 0x3A0203 | NVM_E_ERASE_FAILED | 0 |
| 0x3A0204 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x3A0205 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x3A0206 | NVM_E_READ_ALL_FAILED | 0 |
| 0x3A0207 | NVRAM, Datenblock Bootprogdata, Lesefehler | 0 |
| 0x3A0208 | NVRAM, Datenverlust, aus Backup wiederhergestellt | 0 |
| 0x3A0209 | NVRAM, Datenverlust, nicht wiederherstellbar | 0 |
| 0x3A020A | NVRAM, Backup-Area, Reserveschwelle unterschritten | 0 |
| 0x3A020B | NVRAM, Datenverlust NVRAM1 | 0 |
| 0x3A020C | NVRAM, Datenverlust NVRAM2 | 0 |
| 0x3A020D | NVRAM, geänderte Werte nicht geschrieben | 0 |
| 0x3A020E | NVRAM, Erststart ausgeführt | 0 |
| 0x3A020F | NVRAM, Adaptivwerte zurückgesetzt | 0 |
| 0x3A0210 | Codierung : Steuergerät ist nicht codiert | 0 |
| 0x3A0211 | Codierung : Codierdatenübertragungsfehler | 0 |
| 0x3A0212 | Codierung : Codiersignaturfehler | 0 |
| 0x3A0213 | Codierung : falsches Fahrzeug | 0 |
| 0x3A0214 | Codierung : unplausible Daten während Transaktion | 0 |
| 0x3A0220 | Bauteilschutz 4, Selbstständige Abschaltung des BTS4 zum Bauteilschutz | 0 |
| 0x3A0221 | Bauteilschutz 4, Maximale Leistung an BTS4 überschritten | 0 |
| 0x3A0230 | SPI Komponententreiber, Botschaft 0x1100, Timeoutfehler | 0 |
| 0x3A0231 | SPI Komponententreiber, Botschaft 0x1100, CRC Fehler | 0 |
| 0x3A0240 | SPI Komponententreiber, Botschaft 0x1101, Timeoutfehler | 0 |
| 0x3A0241 | SPI Komponententreiber, Botschaft 0x1101, CRC Fehler | 0 |
| 0x3A0250 | SPI Komponententreiber, Botschaft 0x1102, Timeoutfehler | 0 |
| 0x3A0251 | SPI Komponententreiber, Botschaft 0x1102, CRC Fehler | 0 |
| 0x3A0260 | SPI Komponententreiber, Botschaft 0x1103, Timeoutfehler | 0 |
| 0x3A0261 | SPI Komponententreiber, Botschaft 0x1103, CRC Fehler | 0 |
| 0x3A0270 | SPI Komponententreiber, Botschaft 0x1104, Timeoutfehler | 0 |
| 0x3A0271 | SPI Komponententreiber, Botschaft 0x1104, CRC Fehler | 0 |
| 0x3A0280 | SPI Komponententreiber, Botschaft 0x1105, Timeoutfehler | 0 |
| 0x3A0281 | SPI Komponententreiber, Botschaft 0x1105, CRC Fehler | 0 |
| 0x3A0290 | SPI Komponententreiber, Botschaft 0x1200, Timeoutfehler | 0 |
| 0x3A0291 | SPI Komponententreiber, Botschaft 0x1200, CRC Fehler | 0 |
| 0x3A02A0 | SPI Komponententreiber, Botschaft 0x1201, Timeoutfehler | 0 |
| 0x3A02A1 | SPI Komponententreiber, Botschaft 0x1201, CRC Fehler | 0 |
| 0x3A02B0 | SPI Komponententreiber, Botschaft 0x1202, Timeoutfehler | 0 |
| 0x3A02B1 | SPI Komponententreiber, Botschaft 0x1202, CRC Fehler | 0 |
| 0x3A02C0 | SPI Komponententreiber, Botschaft 0x1203, Timeoutfehler | 0 |
| 0x3A02C1 | SPI Komponententreiber, Botschaft 0x1203, CRC Fehler | 0 |
| 0x3A02D0 | SPI Komponententreiber, Botschaft 0x1204, Timeoutfehler | 0 |
| 0x3A02D1 | SPI Komponententreiber, Botschaft 0x1204, CRC Fehler | 0 |
| 0x3A02E0 | SPI Komponententreiber, Botschaft 0x1205, Timeoutfehler | 0 |
| 0x3A02E1 | SPI Komponententreiber, Botschaft 0x1205, CRC Fehler | 0 |
| 0x3A02F0 | SPI Komponententreiber, Botschaft 0x1106, Timeoutfehler | 0 |
| 0x3A02F1 | SPI Komponententreiber, Botschaft 0x1106, CRC Fehler | 0 |
| 0x3A0300 | SPI Komponententreiber, Botschaft 0x1206, Timeoutfehler | 0 |
| 0x3A0301 | SPI Komponententreiber, Botschaft 0x1206, CRC Fehler | 0 |
| 0x3A0310 | SPI Komponententreiber, Botschaft 0x1207, Timeoutfehler | 0 |
| 0x3A0311 | SPI Komponententreiber, Botschaft 0x1207, CRC Fehler | 0 |
| 0x3A0320 | SPI Komponententreiber, Botschaft 0x1407, Timeoutfehler | 0 |
| 0x3A0321 | SPI Komponententreiber, Botschaft 0x1407, CRC Fehler | 0 |
| 0x3A0330 | SPI Komponententreiber, Botschaft 0x1408, Timeoutfehler | 0 |
| 0x3A0331 | SPI Komponententreiber, Botschaft 0x1408, CRC Fehler | 0 |
| 0x3A0340 | SPI Komponententreiber, Botschaft 0x1409, Timeoutfehler | 0 |
| 0x3A0341 | SPI Komponententreiber, Botschaft 0x1409, CRC Fehler | 0 |
| 0x3A0350 | Umrichter, Wertebereich, Überdrehzahl | 0 |
| 0x3A0351 | Umrichter, Wertebereich, Sollmoment außerhalb gültigem Bereich | 0 |
| 0x3A0352 | Umrichter, Wertebereich, Sollvorgaben außerhalb gültigem Bereich | 0 |
| 0x3A0360 | Umrichter, Elektrische Signale, Summenstrom außerhalb der Toleranz | 0 |
| 0x3A0361 | Umrichter, Elektrische Signale, Überstrom U-Phase | 0 |
| 0x3A0362 | Umrichter, Elektrische Signale, Überstrom V-Phase | 0 |
| 0x3A0363 | Umrichter, Elektrische Signale, Überstrom W-Phase | 0 |
| 0x3A0364 | Umrichter, Elektrische Signale, Stromoffset U-Phase | 0 |
| 0x3A0365 | Umrichter, Elektrische Signale, Stromoffset V-Phase | 0 |
| 0x3A0366 | Umrichter, Elektrische Signale, Stromoffset W-Phase | 0 |
| 0x3A0367 | Umrichter, Elektrische Signale, Zwischenkreisspannung zu hoch | 0 |
| 0x3A0368 | Umrichter, Elektrische Signale, Zwischenkreisspannung zu niedrig | 0 |
| 0x3A0369 | Umrichter, Elektrische Signale, Test des Komparators der Zwischenkreisspannung | 0 |
| 0x3A036A | Umrichter, Elektrische Signale, Test des Überspannungskomparators | 0 |
| 0x3A036B | Umrichter, Elektrische Signale, HW Spannungsmessung | 0 |
| 0x3A0370 | Umrichter, Registerwerte, Zulässiger Sollwert für id-Regelung überschritten | 0 |
| 0x3A0371 | Umrichter, Registerwerte, Zulässige Stellgröße Ud für id-Regelung überschritten | 0 |
| 0x3A0372 | Umrichter, Registerwerte, Zulässige Stellgröße Uq für iq-Regelung überschritten | 0 |
| 0x3A0373 | Umrichter, Registerwerte, Zulässiger Sollwert Stellgröße Ud für id-Regelung überschritten | 0 |
| 0x3A0374 | Umrichter, Registerwerte, Zulässiger Sollwert Stellgröße Uq für iq-Regelung überschritten | 0 |
| 0x3A0380 | Umrichter, Rotorlageerfassung, Offset des Rotorlagesensors | 0 |
| 0x3A0381 | Umrichter, Rotorlageerfassung, Resolversignale sind zu klein | 0 |
| 0x3A0382 | Umrichter, Rotorlageerfassung, Resolveramplitudenkorrektur zu groß | 0 |
| 0x3A0383 | Umrichter, Rotorlageerfassung, Resolver-Abtastwerte Symmetrie nicht ausreichend | 0 |
| 0x3A0384 | Umrichter, Rotorlageerfassung, Resolver-Einheitskreis zu groß | 0 |
| 0x3A0385 | Umrichter, Rotorlageerfassung, Resolver-Einheitskreis zu klein | 0 |
| 0x3A0386 | Umrichter, Rotorlageerfassung, Offset sin / cos ausserhalb des Toleranzbereichs | 0 |
| 0x3A0387 | Umrichter, Rotorlageerfassung, Resolversignale sind zu groß | 0 |
| 0x3A0390 | Umrichter, Flash, Flash CRC | 0 |
| 0x3A0391 | Umrichter, Flash, Flash ist leer | 0 |
| 0x3A03A0 | Umrichterdiagnose, Selbsttest beim Start fehlgeschlagen | 0 |
| 0x3A03A1 | Umrichterdiagnose, Selbsttest während Betrieb fehlgeschlagen | 0 |
| 0x3A03A2 | Umrichterdiagnose, Laufzeitüberschreitung Fast ISR | 0 |
| 0x3A03A3 | Umrichterdiagnose, Laufzeitüberschreitung Slow ISR | 0 |
| 0x3A03A4 | Umrichterdiagnose, Laufzeitüberschreitung Idle | 0 |
| 0x3A03B0 | Umrichter, HV-Leistungs-Endstufe, Treiber, Kurzschluss, High-Side Phase U | 0 |
| 0x3A03B1 | Umrichter, HV-Leistungs-Endstufe, Treiber, Kurzschluss, Low-Side Phase U | 0 |
| 0x3A03B2 | Umrichter, HV-Leistungs-Endstufe, Treiber, Kurzschluss, High-Side Phase V | 0 |
| 0x3A03B3 | Umrichter, HV-Leistungs-Endstufe, Treiber, Kurzschluss, Low-Side Phase V | 0 |
| 0x3A03B4 | Umrichter, HV-Leistungs-Endstufe, Treiber, Kurzschluss, High-Side Phase W | 0 |
| 0x3A03B5 | Umrichter, HV-Leistungs-Endstufe, Treiber, Kurzschluss, Low-Side Phase W | 0 |
| 0x3A03C0 | Umrichter, HV-Leistungs-Endstufe, Treiber, Unterspannung, High-Side Phase U | 0 |
| 0x3A03C1 | Umrichter, HV-Leistungs-Endstufe, Treiber, Unterspannung, Low-Side Phase U | 0 |
| 0x3A03C2 | Umrichter, HV-Leistungs-Endstufe, Treiber, Unterspannung, High-Side Phase V | 0 |
| 0x3A03C3 | Umrichter, HV-Leistungs-Endstufe, Treiber, Unterspannung, Low-Side Phase V | 0 |
| 0x3A03C4 | Umrichter, HV-Leistungs-Endstufe, Treiber, Unterspannung, High-Side Phase W | 0 |
| 0x3A03C5 | Umrichter, HV-Leistungs-Endstufe, Treiber, Unterspannung, Low-Side Phase W | 0 |
| 0x3A03D0 | Umrichter, Temperatur, Übertemperatur Motor | 0 |
| 0x3A03D1 | Umrichter, Temperatur, Berechnung der Motortemperatur | 0 |
| 0x3A03D2 | Umrichter, Temperatur, Temperatursensor Motor Phase U | 0 |
| 0x3A03D3 | Umrichter, Temperatur, Temperatursensor Motor Phase V | 0 |
| 0x3A03D4 | Umrichter, Temperatur, Temperatursensor Motor Phase W | 0 |
| 0x3A03D5 | Umrichter, Temperatur, Übertemperatur HV-Leistungsendstufe | 0 |
| 0x3A03D6 | Umrichter, Temperatur, Berechnung der Leistungsendstufentemperatur | 0 |
| 0x3A03D7 | Umrichter, Temperatur, Temperatursensor Leistungsendstufe Phase U | 0 |
| 0x3A03D8 | Umrichter, Temperatur, Temperatursensor Leistungsendstufe Phase V | 0 |
| 0x3A03D9 | Umrichter, Temperatur, Temperatursensor Leistungsendstufe Phase W | 0 |
| 0x3A03DA | Umrichter, Temperatur, Zwischenkreiskondensatortemperatur zu hoch | 0 |
| 0x3A03DB | Umrichter, Temperatur, Zwischenkreiskondensator-Temperatursensor(Kurzschluss o. offene Klemmen) | 0 |
| 0x3A03DC | Umrichter, Temperatur, Temperaturdifferenz der drei Motortemperatursensoren zu groß | 0 |
| 0x3A03DD | Umrichter, Temperatur, Temperaturdifferenz der drei Endstufentemperatursensoren zu groß | 0 |
| 0x3A03DE | Umrichter, Temperatur, Zwischenkreiskondensator-Temperatursensorfehler in der Berechnung | 0 |
| 0x3A03E0 | Umrichter, SPI Kommunikation, Botschaftenzähler unplausibel | 0 |
| 0x3A03E1 | Umrichter, SPI Kommunikation, SPI-Telegramm in aktueller Sequenz nicht erlaubt | 0 |
| 0x3A03E2 | Umrichter, SPI Kommunikation, Messwerte vom Umrichter unvollständig übertragen | 0 |
| 0x3A03E3 | Umrichter, SPI Kommunikation, Applikationsdaten für Umrichter unvollständig übertragen | 0 |
| 0x3A03E4 | Umrichter, SPI Kommunikation, Flashvorgang über SPI fehlerhaft | 0 |
| 0x3A03E5 | Umrichter, SPI Kommunikation, Kommunikation fehlerhaft | 0 |
| 0x3A03F0 | Umrichter, Programmupdate, Update fehlgeschlagen | 0 |
| 0x3A03F1 | Umrichter, Programmupdate, Upadte aktiv | 0 |
| 0x3A03F2 | Umrichter, Programmupdate, Update initialisieren | 0 |
| 0x3A03F3 | Umrichter, Programmupdate, Update synchronisieren | 0 |
| 0x3A03F4 | Umrichter, Programmupdate, Update Leerlauf | 0 |
| 0x3A03F5 | Umrichter, Programmupdate, Update Version | 0 |
| 0x3A03F6 | Umrichter, Programmupdate, Update läuft | 0 |
| 0x3A03F7 | Umrichter, Programmupdate, Reset Anforderung | 0 |
| 0x3A0400 | Platinentemperatur, Raumdiagonale, Temperatur zu niedrig | 0 |
| 0x3A0401 | Platinentemperatur, Raumdiagonale, Temperatur zu hoch | 0 |
| 0x3A0410 | Platinentemperatur, Bauteilschutz, Temperatur zu niedrig | 0 |
| 0x3A0411 | Platinentemperatur, Bauteilschutz, Temperatur zu hoch | 0 |
| 0x3A0420 | Platinentemperatur, CY320, Temperatur zu niedrig | 0 |
| 0x3A0421 | Platinentemperatur, CY320, Temperatur zu hoch | 0 |
| 0x3A0430 | Platinentemperatur, Low-Side-Switch, Temperatur zu niedrig | 0 |
| 0x3A0431 | Platinentemperatur, Low-Side-Switch, Temperatur zu hoch | 0 |
| 0x3A0440 | Adaption Rotoroffset, Rotoroffsetbestimmung, Timeout (Fahrsoftware) | 0 |
| 0x3A0441 | Adaption Rotoroffset, Rotoroffsetbestimmung, unplausibles Ergebnis (Fahrsoftware) | 0 |
| 0x3A0442 | Adaption Rotoroffset, Rotoroffset nicht adaptiert | 0 |
| 0x3A0443 | Adaption Rotoroffset, Rotoroffsetbestimmung, Stromfehler | 0 |
| 0x3A0444 | Adaption Rotoroffset, Rotoroffsetbestimmung, Drehzahlfehler | 0 |
| 0x3A0445 | Adaption Rotoroffset, Rotoroffsetbestimmung, Drehrichtungsfehler | 0 |
| 0x3A0446 | Adaption Rotoroffset, Rotoroffsetbestimmung, Winkelfehler | 0 |
| 0x3A0447 | Adaption Rotoroffset, Rotoroffsetbestimmung, Timeout (Umrichter) | 0 |
| 0x3A0448 | Adaption Rotoroffset, Rotoroffsetbestimmung, unplausibles Ergebnis (Umrichter) | 0 |
| 0x3A0449 | Adaption Rotoroffset, Rotoroffsetbestimmung, Abbruch vor erfolgreichem Abschluss | 0 |
| 0x3A0450 | Adaption Stromsensoroffset, Stromsensoroffsets nicht adaptiert | 0 |
| 0x3A0451 | Adaption Stromsensoroffset, Stromsensoroffsets nicht plausibel | 0 |
| 0x3A0460 | Adaption Spannungsoffset, Spannungsoffset nicht adaptiert | 0 |
| 0x3A0461 | Adaption Spannungsoffset, Spannungsoffset nicht plausibel | 0 |
| 0x3A0470 | Umrichter, Sammelfehler | 0 |
| 0x3A0480 | Überwachungsfunktion, Fehler Leistungsüberwachung | 0 |
| 0x3A0487 | Überwachungsfunktion, Fehler Fahrwertgeberüberwachung Ebene 2 | 0 |
| 0x3A048B | Überwachungsfunktion, Fehler Fahrzeuggeschwindigkeit Ebene 2 | 0 |
| 0x3A048C | UF-Fehler (ausgeblendet) | 0 |
| 0x3A048D | UF-ADAP (ausgeblendet) | 0 |
| 0x3A048E | Überwachungsfunktion, Fehler Geberversorgung Ebene 2 | 0 |
| 0x3A0490 | Klemmenstatus, KL15 und KL15WUP nicht plausibel | 0 |
| 0x3A04A0 | HV: Schnellentladung, Entladungszeit, Gültiger Wert wurde überschritten | 0 |
| 0x3A04A1 | HV: Schnellentladung, Rückmessung, Unplausibles Signal | 0 |
| 0x3A04B0 | Hauptrelais, Endstufen, Diagnose, Kurzschluss nach Masse | 0 |
| 0x3A04B1 | Hauptrelais, Endstufen, Diagnose, Kurzschluss nach UBatt | 0 |
| 0x3A04B2 | Hauptrelais, Endstufen, Diagnose, Leitungsabfall | 0 |
| 0x3A04B3 | Hauptrelais, Endstufen, Diagnose, Übertemperatur | 0 |
| 0x3A04C0 | Kühlwasserlüfter, Endstufen, Diagnose, Kurzschluss nach Masse | 0 |
| 0x3A04C1 | Kühlwasserlüfter, Endstufen, Diagnose, Kurzschluss nach UBatt | 0 |
| 0x3A04C2 | Kühlwasserlüfter, Endstufen, Diagnose, Leitungsabfall | 0 |
| 0x3A04C3 | Kühlwasserlüfter, Endstufen, Diagnose, Übertemperatur | 0 |
| 0x3A04D0 | Regelventil, Endstufen, Diagnose, Kurzschluss nach Masse | 0 |
| 0x3A04D1 | Regelventil, Endstufen, Diagnose, Kurzschluss nach UBatt | 0 |
| 0x3A04D2 | Regelventil, Endstufen, Diagnose, Leitungsabfall | 0 |
| 0x3A04D3 | Regelventil, Endstufen, Diagnose, Übertemperatur | 0 |
| 0x3A04E0 | Elektrische Wasserpumpe, Endstufen, Diagnose, Kurzschluss nach Masse | 0 |
| 0x3A04E1 | Elektrische Wasserpumpe, Endstufen, Diagnose, Kurzschluss nach UBatt | 0 |
| 0x3A04E2 | Elektrische Wasserpumpe, Endstufen, Diagnose, Leitungsabfall | 0 |
| 0x3A04E3 | Elektrische Wasserpumpe, Endstufen, Diagnose, Übertemperatu | 0 |
| 0x3A04F0 | Batterieluefter, Endstufen, Diagnose, Kurzschluss nach Masse | 0 |
| 0x3A04F1 | Batterieluefter, Endstufen, Diagnose, Kurzschluss nach UBatt | 0 |
| 0x3A04F2 | Batterieluefter, Endstufen, Diagnose, Leitungsabfall | 0 |
| 0x3A04F3 | Batterieluefter, Endstufen, Diagnose, Übertemperatur | 0 |
| 0x3A0500 | Reserve 2, Endstufen, Diagnose, Kurzschluss nach Masse | 0 |
| 0x3A0501 | Reserve 2, Endstufen, Diagnose, Kurzschluss nach UBatt | 0 |
| 0x3A0502 | Reserve 2, Endstufen, Diagnose, Leitungsabfall | 0 |
| 0x3A0503 | Reserve 2, Endstufen, Diagnose, Übertemperatur | 0 |
| 0x3A0510 | Reserve 3, Endstufen, Diagnose, Kurzschluss nach Masse | 0 |
| 0x3A0511 | Reserve 3, Endstufen, Diagnose, Kurzschluss nach UBatt | 0 |
| 0x3A0512 | Reserve 3, Endstufen, Diagnose, Leitungsabfall | 0 |
| 0x3A0513 | Reserve 3, Endstufen, Diagnose, Übertemperatur | 0 |
| 0x3A0520 | Spannungsversorgung, Sensor 1, Diagnose, Unterspannung | 0 |
| 0x3A0521 | Spannungsversorgung, Sensor 1, Diagnose, Überspannung | 0 |
| 0x3A0530 | Spannungsversorgung, Sensor 2, Diagnose, Unterspannung | 0 |
| 0x3A0531 | Spannungsversorgung, Sensor 2, Diagnose, Überspannung | 0 |
| 0x3A0540 | Spannungsversorgung, Sensor 3, Diagnose, Unterspannung | 0 |
| 0x3A0541 | Spannungsversorgung, Sensor 3, Diagnose, Überspannung | 0 |
| 0x3A0550 | EWS4, CAN, Timeout Response CAS | 0 |
| 0x3A0551 | EWS4, CAN, Response CAS nicht authentisch | 0 |
| 0x3A0552 | EWS4, CAN, Nachricht ungültig | 0 |
| 0x3A0553 | EWS4, Datenablage, Schreibfehler | 0 |
| 0x3A0554 | EWS4, Datenablage, Plausibilitätsfehler | 0 |
| 0x3A0555 | EWS4, kein SecretKey programmiert | 0 |
| 0x3A0560 | Rechnerüberwachung, Fehler MPM Ebene 3 | 0 |
| 0x3A0561 | Rechnerüberwachung, Fehler PFC Ebene 3 | 0 |
| 0x3A0563 | Rechnerüberwachung, Fehler RAM-Test Ebene 3 | 0 |
| 0x3A0564 | Rechnerüberwachung, Fehler ROM-Test Ebene 3 | 0 |
| 0x3A0566 | Rechnerüberwachung, Fehler GPTA Ebene 3 | 0 |
| 0x3A0567 | Rechnerüberwachung, Fehler Komplementencheck Ebene 3 | 0 |
| 0x3A0568 | Rechnerüberwachung, Fehler RAM-Test inaktiv Ebene 3 | 0 |
| 0x3A0569 | Rechnerüberwachung, Fehler ROM-Test inaktiv Ebene 3 | 0 |
| 0x3A056A | Rechnerüberwachung, Fehler MPM inaktiv Ebene 3 | 0 |
| 0x3A056B | Rechnerüberwachung, Fehler MPM Reset Ebene 3 | 0 |
| 0x3A0570 | Überwachungsfunktion, Phasenströme, Fehler Summenstrom Phasenströme Ebene 2 | 0 |
| 0x3A0571 | Überwachungsfunktion, Phasenströme, Fehler Sensorspannung Phase U über Plausibilitätsgrenze Ebene 2 | 0 |
| 0x3A0572 | Überwachungsfunktion, Phasenströme, Fehler Sensorspannung Phase V über Plausibilitätsgrenze Ebene 2 | 0 |
| 0x3A0573 | Überwachungsfunktion, Phasenströme, Fehler Sensorspannung Phase W über Plausibilitätsgrenze Ebene 2 | 0 |
| 0x3A0574 | Überwachungsfunktion, Phasenströme, Fehler Sensorspannung Phase U unter Plausibilitätsgrenze Ebene 2 | 0 |
| 0x3A0575 | Überwachungsfunktion, Phasenströme, Fehler Sensorspannung Phase V unter Plausibilitätsgrenze Ebene 2 | 0 |
| 0x3A0576 | Überwachungsfunktion, Phasenströme, Fehler Sensorspannung Phase W unter Plausibilitätsgrenze Ebene 2 | 0 |
| 0x3A0580 | Überwachungsfunktion, Phasenspannungen, Fehler Phasenspannungen Phase U Ebene 2 | 0 |
| 0x3A0581 | Überwachungsfunktion, Phasenspannungen, Fehler Phasenspannungen Phase V Ebene 2 | 0 |
| 0x3A0582 | Überwachungsfunktion, Phasenspannungen, Fehler Phasenspannungen Phase W Ebene 2 | 0 |
| 0x3A0583 | Überwachungsfunktion, Phasenspannungen, Fehler Zwischenkreisspannung Ebene 2 | 0 |
| 0x3A0590 | Überwachungsfunktion, Antriebsadaption, Fehler Rotoroffset Ebene 2 | 0 |
| 0x3A0591 | Überwachungsfunktion, Antriebsadaption, Fehler Phasenstromsensoroffset Ebene 2 | 0 |
| 0x3A0592 | Überwachungsfunktion, Antriebsadaption, Fehler Zwischenkreisspannungsoffset Ebene 2 | 0 |
| 0x3A05A0 | Überwachungsfunktion, Trigger, Fehler Triggersignal Lage Sinussignal Ebene 2 | 0 |
| 0x3A05A1 | Überwachungsfunktion, Trigger, Fehler Triggersignal Lage Cosinussignal Ebene 2 | 0 |
| 0x3A05A2 | Überwachungsfunktion, Trigger, Fehler Triggersignal Frequenz Ebene 2 | 0 |
| 0x3A05A3 | Überwachungsfunktion, Trigger, Fehler Triggersignal Zeitabstand Ebene 2 | 0 |
| 0x3A05B0 | Überwachungsfunktion, Resolver, Fehler Einheitskreis Ebene 2 | 0 |
| 0x3A05B1 | Überwachungsfunktion, Resolver, Fehler gefiltertes Sinussignal Ebene 2 | 0 |
| 0x3A05B2 | Überwachungsfunktion, Resolver, Fehler gefiltertes Cosinussignal Ebene 2 | 0 |
| 0x3A05B3 | Überwachungsfunktion, Resolver, Fehler gefiltertes Erregersignal Ebene 2 | 0 |
| 0x3A05B4 | Überwachungsfunktion, Resolver, Fehler ungefiltertes Sinussignal Ebene 2 | 0 |
| 0x3A05B5 | Überwachungsfunktion, Resolver, Fehler ungefiltertes Cosinussignal Ebene 2 | 0 |
| 0x3A05B6 | Überwachungsfunktion, Resolver, Fehler ungefiltertes Erregersignal Ebene 2 | 0 |
| 0x3A05C0 | Überwachungsfunktion, Fahrzeugstabilität, Fehler Radgeschwindigkeitsüberwachung Ebene 2 | 0 |
| 0x3A05C1 | Überwachungsfunktion, Fahrzeugstabilität, Fehler Anfahrüberwachung Ebene 2 | 0 |
| 0x3A05C2 | Überwachungsfunktion, Fahrzeugstabilität, Fehler Hinterrad-Blockierüberwachung Ebene 2 | 0 |
| 0x3A05C3 | Überwachungsfunktion, Fahrzeugstabilität, Fehler Hinterrad-Schlupfüberwachung Ebene 2 | 0 |
| 0x3A05C4 | Überwachungsfunktion, Fahrzeugstabilität, Fehler Gradientenüberwachung Ebene 2 | 0 |
| 0x3A05D0 | Überwachungsfunktion, Motormoment, Fehler maximal zulässiges negatives Moment IU unterschritten Ebene 2 | 0 |
| 0x3A05D1 | Überwachungsfunktion, Motormoment, Fehler erlaubtes zulässiges negatives Moment IU bei positivem Moment unterschritten Ebene 2 | 0 |
| 0x3A05D2 | Überwachungsfunktion, Motormoment, Fehler erlaubtes zulässiges positives Moment IU bei negativem Moment überschritten Ebene 2 | 0 |
| 0x3A05D3 | Überwachungsfunktion, Motormoment, Fehler zulässiges positives Moment IU Integralwert überschritten Ebene 2 | 0 |
| 0x3A05D4 | Überwachungsfunktion, Motormoment, Fehler zulässiges negatives Moment IU Integralwert unterschritten Ebene 2 | 0 |
| 0x3A05D5 | Überwachungsfunktion, Motormoment, Fehler maximal zulässiges negatives Moment IPHI unterschritten Ebene 2 | 0 |
| 0x3A05D6 | Überwachungsfunktion, Motormoment, Fehler erlaubtes zulässiges negatives Moment IPHI bei positivem Moment unterschritten Ebene 2 | 0 |
| 0x3A05D7 | Überwachungsfunktion, Motormoment, Fehler erlaubtes zulässiges positives Moment IPHI bei negativem Moment überschritten Ebene 2 | 0 |
| 0x3A05D8 | Überwachungsfunktion, Motormoment, Fehler zulässiges positives Moment IPHI Integralwert überschritten Ebene 2 | 0 |
| 0x3A05D9 | Überwachungsfunktion, Motormoment, Fehler zulässiges negatives Moment IPHI Integralwert unterschritten Ebene 2 | 0 |
| 0x3A05E0 | Einheitskreis-Mittelwert, Mittelwert für Einheitskreisdiagnose nicht adaptiert | 0 |
| 0x3A05E1 | Einheitskreis-Mittelwert, Mittelwert für Einheitskreisdiagnose nicht plausibel | 0 |
| 0x3A05F0 | SPI Komponententreiber, Botschaft 0x1410, Timeoutfehler | 0 |
| 0x3A05F1 | SPI Komponententreiber, Botschaft 0x1410, CRC Fehler | 0 |
| 0x3A0600 | SPI Komponententreiber, Botschaft 0x1411, Timeoutfehler | 0 |
| 0x3A0601 | SPI Komponententreiber, Botschaft 0x1411, CRC Fehler | 0 |
| 0x3A0610 | SPI Komponententreiber, Botschaft 0x1412, Timeoutfehler | 0 |
| 0x3A0611 | SPI Komponententreiber, Botschaft 0x1412, CRC Fehler | 0 |
| 0x3A0620 | SPI Komponententreiber, Botschaft 0x1413, Timeoutfehler | 0 |
| 0x3A0621 | SPI Komponententreiber, Botschaft 0x1413, CRC Fehler | 0 |
| 0x3A0630 | SPI Komponententreiber, Botschaft 0x1414, Timeoutfehler | 0 |
| 0x3A0631 | SPI Komponententreiber, Botschaft 0x1414, CRC Fehler | 0 |
| 0x3A0640 | SPI Komponententreiber, Botschaft 0x1415, Timeoutfehler | 0 |
| 0x3A0641 | SPI Komponententreiber, Botschaft 0x1415, CRC Fehler | 0 |
| 0x3A0650 | SPI Komponententreiber, Botschaft 0x1416, Timeoutfehler | 0 |
| 0x3A0651 | SPI Komponententreiber, Botschaft 0x1416, CRC Fehler | 0 |
| 0x3A0660 | SPI Komponententreiber, Botschaft 0x1417, Timeoutfehler | 0 |
| 0x3A0661 | SPI Komponententreiber, Botschaft 0x1417, CRC Fehler | 0 |
| 0x3A0670 | SPI Komponententreiber, Botschaft 0x1418, Timeoutfehler | 0 |
| 0x3A0671 | SPI Komponententreiber, Botschaft 0x1418, CRC Fehler | 0 |
| 0x3A0680 | SPI Komponententreiber, Botschaft 0x1419, Timeoutfehler | 0 |
| 0x3A0681 | SPI Komponententreiber, Botschaft 0x1419, CRC Fehler | 0 |
| 0x3A0690 | SPI Komponententreiber, Botschaft 0x1420, Timeoutfehler | 0 |
| 0x3A0691 | SPI Komponententreiber, Botschaft 0x1420, CRC Fehler | 0 |
| 0x3A06A0 | SPI Komponententreiber, Botschaft 0x1999, Timeoutfehler | 0 |
| 0x3A06A1 | SPI Komponententreiber, Botschaft 0x1999, CRC Fehler | 0 |
| 0x3A06B0 | Abschaltpfadtest, Fehler Abschaltpfad Tricore Ebene 3 | 0 |
| 0x3A06B1 | Abschaltpfadtest, Fehler Abschaltpfad CY320 Ebene 3 | 0 |
| 0x3A06B2 | Abschaltpfadtest, Timeout Ebene 3 | 0 |
| 0x3A06B3 | Abschaltpfadtest, Ausfall Umrichter-Kommunikation Ebene 3 | 0 |
| 0x3A06C0 | Analog-Digital-Wandlung, Fehler Leerlaufspannungsprüfung Ebene 3 | 0 |
| 0x3A06C1 | Analog-Digital-Wandlung, Fehler Testspannungsprüfung Ebene 3 | 0 |
| 0x3A06C2 | Analog-Digital-Wandlung, Fehler Freigabe FWG Kanal 2 Ebene 3 | 0 |
| 0x3A06D0 | Umrichter, SPI-Kommunikation, Initialisierung | 0 |
| 0x3A06D1 | Umrichter, SPI-Kommunikation, Snychronisation | 0 |
| 0x3A06D2 | Umrichter, SPI-Kommunikation, Leerlauf | 0 |
| 0x3A06D3 | Umrichter, SPI-Kommunikation, Flash-Initialisierung | 0 |
| 0x3A06D4 | Umrichter, SPI-Kommunikation, Flash-Vorgang aktiv | 0 |
| 0x3A06D5 | Umrichter, SPI-Kommunikation, Flash-Vorgang abgeschlossen | 0 |
| 0x3A06D6 | Umrichter, SPI-Kommunikation, Start der Applikation | 0 |
| 0x3A06D7 | Umrichter, SPI-Kommunikation, Kommunikations-Fehler | 0 |
| 0x3A06DF | Umrichter, SPI-Kommunikation, Update fehlgeschlagen | 0 |
| 0x3A06E0 | SPI Komponententreiber, Botschaft 0x1421, Timeoutfehler | 0 |
| 0x3A06E1 | SPI Komponententreiber, Botschaft 0x1421, CRC Fehler | 0 |
| 0x3A06F0 | Umrichter, Nachführung Abtastzeitpunkt Resolversignale, Nachführung zu groß | 0 |
| 0x3A06F1 | Umrichter, Nachführung Abtastzeitpunkt Resolversignale, Nachführung zu klein | 0 |
| 0xCD845F | CAN Bus Off | 1 |
| 0xCD9420 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0xCD9422 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9426 | CAN KOMBI Nachricht Kombidaten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9436 | CAN SLZ Nachricht Status_Fahrzeug_Zugriff_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xCD9448 | CAN ABS Nachricht Status_ABS_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xCD9452 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: CRC Fehler | 1 |
| 0xCD9453 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Alive Fehler | 1 |
| 0xCD9454 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: CRC Fehler | 1 |
| 0xCD9455 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Alive Fehler | 1 |
| 0xCD9466 | CAN SME Nachricht Status_Hochvoltspeicher_Elektrisch_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9467 | CAN SME Nachricht Zustand_Hochvoltspeicher_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9471 | CAN SME Nachricht Begrenzung_Ladung_Entladung_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9472 | CAN SME Nachricht Begrenzung_Ladung_Entladung_Motorrad_2010: Alive Fehler | 1 |
| 0xCD9473 | CAN SME Nachricht Begrenzung_Ladung_Entladung_Motorrad_2010: CRC Fehler | 1 |
| 0xCD947A | CAN ABS Nachricht Status_ABS_Motorrad_2010: Alive Fehler | 1 |
| 0xCD947B | CAN ABS Nachricht Status_ABS_Motorrad_2010: CRC Fehler | 1 |
| 0xCD9481 | CAN SME Nachricht Zustand_Hochvoltspeicher_Motorrad_2010: Alive Fehler | 1 |
| 0xCD9482 | CAN SME Nachricht Zustand_Hochvoltspeicher_Motorrad_2010: CRC Fehler | 1 |
| 0xCD9484 | CAN SME Nachricht Leistung_Verfügbar_Hochvoltspeicher_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x6800 | Berechnetes Moment über die elektrische Leistung und die Drehzahl Ebene 2 (mdiun_um) | % | high | signed char | - | 256 | 327.68 | 0 |
| 0x6801 | Zulässiges Motormoment Ebene 2 (mdzul_um) | % | high | signed char | - | 256 | 327.68 | 0 |
| 0x6802 | Zwischenkreisspannung Ebene 2 (u_zwkreis_um) | V | high | unsigned char | - | 256 | 100 | 0 |
| 0x6803 | Mechanische Drehzahl berechnet über Winkeldifferenz und Quadraturzähler Ebene 2 (n_mech_um) | 1/min | high | unsigned char | - | 100 | 2 | -1000 |
| 0x6804 | Moment berrechnet aus Rotorlage und Strömen zur Momentenplausibilisierung Ebene 2 (mdiphi_um) | % | high | signed char | - | 256 | 327.68 | 0 |
| 0x6805 | Phasenstrom Rohwert i_u aktuell Ebene 2 (i_a_inv_cur_u_fusi_um) | V | high | unsigned char | - | 256 | 10000 | 0 |
| 0x6806 | Phasenstrom Rohwert i_v aktuell Ebene 2 (i_a_inv_cur_v_fusi_um) | V | high | unsigned char | - | 256 | 10000 | 0 |
| 0x6807 | Phasenstrom Rohwert i_w aktuell Ebene 2 (i_a_inv_cur_w_fusi_um) | V | high | unsigned char | - | 256 | 10000 | 0 |
| 0x6808 | Rohwert aus Fahrwertgeber 1 Ebene 2 (fwg1r_um) | % | high | unsigned char | - | 256 | 100 | 0 |
| 0x6809 | Rohwert aus Fahrwertgeber 2 Ebene 2 (fwg2r_um) | % | high | unsigned char | - | 256 | 100 | 0 |
| 0x680A | Abweichung Periodendauer PWM Ansteuerung Phase u Ebene 2 (tperabw_u_um) | µs | high | signed char | - | 256 | 65.356 | 0 |
| 0x680B | Abweichung Periodendauer PWM Ansteuerung Phase v Ebene 2 (tperabw_v_um) | µs | high | signed char | - | 256 | 65.356 | 0 |
| 0x680C | Abweichung Periodendauer PWM Ansteuerung Phase v Ebene 2 (tperabw_w_um) | µs | high | signed char | - | 256 | 65.356 | 0 |
| 0x680D | Rotoroffset berechnet zur Diagnose in Ebene 2 (rotoroffset_calc_um) | ° | high | signed char | - | 5625 | 1000 | 0 |
| 0x680E | Stromsensoroffset Rohwert Phase U Ebene 2 (i_a_offset_u_um) | V | high | unsigned char | - | 256 | 10000 | 0 |
| 0x680F | Stromsensoroffset Rohwert Phase V Ebene 2 (i_a_offset_v_um) | V | high | unsigned char | - | 256 | 10000 | 0 |
| 0x6810 | Stromsensoroffset Rohwert Phase W Ebene 2 (i_a_offset_w_um) | V | high | unsigned char | - | 256 | 10000 | 0 |
| 0x6811 | Abweichung Sinuspaar für Triggerdiagnose Ebene 2 (sin_abw_um) | V | high | unsigned char | - | 256 | 10000 | 0 |
| 0x6812 | Abweichung Cosinuspaar für Triggerdiagnose Ebene 2 (cos_abw_um) | V | high | unsigned char | - | 256 | 10000 | 0 |
| 0x6813 | Modulierter Wandlungszähler A/D-Konverter für Bestimmung Triggerfrequenz Ebene 2 (ring_count_mod_um) | - | high | unsigned char | - | 64 | 1 | 0 |
| 0x6814 | Minimaler Zeitabstand zwischen 2 Triggerereignissen innerhalb einer Task Ebene 2 (ttrigmn_um) | µs | high | unsigned char | - | 256 | 100 | 0 |
| 0x6815 | Wert Einheitskreis Ebene 2 (einheitskreis_um) | V^2 | high | unsigned char | - | 256 | 1000 | 0 |
| 0x6816 | Sinus-Signal Resolver Nulllinie gefiltert Ebene 2 (sin_filtmit_um) | V | high | signed char | - | 256 | 1000 | 0 |
| 0x6817 | Cosinus-Signal Resolver Nulllinie gefiltert Ebene 2 (cos_filtmit_um) | V | high | signed char | - | 256 | 1000 | 0 |
| 0x6818 | Erreger-Signal Resolver Nulllinie gefiltert Ebene 2 (erreg_filtmit_um) | V | high | signed char | - | 256 | 1000 | 0 |
| 0x6819 | Mittelwert Sinus-Signal Resolver aus vier Werten Ebene 2 (sin_mittelwert_um) | V | high | signed char | - | 256 | 1000 | 0 |
| 0x681A | Mittelwert Cosinus-Signal Resolver aus vier Werten Ebene 2 (cos_mittelwert_um) | V | high | signed char | - | 256 | 1000 | 0 |
| 0x681B | Mittelwert Erreger-Signal Resolver aus vier Werten Ebene 2 (erreg_mittelwert_um) | V | high | signed char | - | 256 | 1000 | 0 |
| 0x681C | Temperatur der Leistungs-Endstufe (tpowerstage) | °C | high | unsigned char | - | 2 | 1 | -50 |
| 0x681D | Maximaler Zeitabstand zwischen 2 Triggerereignissen innerhalb einer Task Ebene 2 (ttrigmx_um) | µs | high | unsigned char | - | 256 | 100 | 0 |
| 0x681E | Differenz Anfahrwerte Nullage Zwischenwert Ebene 2 (phi_rotoffmod_um) | ° | high | signed char | - | 5625 | 1000 | 0 |
| 0x681F | Differenzen des in der Ebene 1 und vom DSP abgespeicherten Rotoroffsets zum Rotoroffset der Ebene 2 (rotoroffset_diff_ar_um) | ° | high | signed char | - | 5625 | 1000 | 0 |
| 0x6820 | Differenz Dreherkennung von rechts 90° überstrichen Ebene 2 (phi_rotoffvorg1diff_um) | ° | high | unsigned char | - | 3 | 2 | 0 |
| 0x6821 | Differenz Dreherkennung von links 270° überstrichen Ebene 2 (phi_rotoffvorg2diff_um) | ° | high | unsigned char | - | 3 | 2 | 0 |
| 0x6822 | gespeicherter Rotoroffset (rotoroffset) | ° | high | unsigned char | - | 256 | 100 | 0 |
| 0x6823 | Fahrzeuggeschwindigkeit (vfzg) | km/h | high | unsigned char | - | 1 | 1 | -10 |
| 0x6824 | Wassertemperatur Ausgang Kuehler (twak) | °C | high | unsigned char | - | 2 | 1 | -50 |
| 0x6825 | Fahrzeuggeschwindigkeit Ebene 2 (vfzg_um) | km/h | high | unsigned char | - | 1 | 1 | -10 |
| 0x6826 | Geschwindigkeitsrohsignal am Hinterrad Ebene 2 (v_hrad_roh_um) | km/h | high | signed char | - | 256 | 100 | 0 |
| 0x6827 | Phasenstrom i_u aktuell Ebene 2 (i_u_um) | A | high | signed char | - | 512 | 10 | 0 |
| 0x6828 | Phasenstrom i_v aktuell Ebene 2 (i_v_um) | A | high | signed char | - | 512 | 10 | 0 |
| 0x6829 | Phasenstrom i_w aktuell Ebene 2 (i_w_um) | A | high | signed char | - | 512 | 10 | 0 |
| 0x682A | Frequenz Vorderrad Ebene 2 (e_f_radv_um) | Hz | high | unsigned char | - | 128 | 10 | 0 |
| 0x682B | Frequenz Hinterrad Ebene 2 (e_f_radh_um) | Hz | high | unsigned char | - | 128 | 10 | 0 |
| 0x682C | Begrenzendes Moment der Überwachungsfunktion (md_rsc_mn_um) | % | high | unsigned char | - | 1 | 2 | -100 |
| 0x682D | Reku-Sollmoment der Überwachungsfunktion (md_rsc_sk_mn_um) | % | high | unsigned char | - | 1 | 2 | -100 |
| 0x682E | Batteriespannung (ub) | V | high | unsigned char | - | 1 | 10 | 0 |
| 0x682F | Status Fahrzeugzustand (st_fzg) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6830 | Rohwert Bremsdruck Hinterradbremse (bwgh) | bar | high | unsigned char | - | 2 | 10 | 0 |
| 0x6831 | Zählerstand Start-up-counter (init_cnt) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6832 | Druckoffset Hinterradbremse (p_offset_bwgh) | bar | high | signed char | - | 2 | 10 | 0 |
| 0x6833 | Fehlerstatus SPI (B_err_spi) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6834 | Bedingung Fahrwertgeberadaption vollständig (B_fwgad_done) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6835 | Bedingung Stromfluss durch Schnellentladung über Schwelle (B_schnellentladung_akt) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6836 | Bedingung Diagnose Schnellentladung freigegeben (B_schnellentladung_frg) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6837 | Bedingung Abschaltpfadtest ist abgeschlossen Ebene 3 (B_sop_done_um) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6838 | Bedingung Applikationsdaten vollständig zum Umrichter übertragen (B_umr_appl_ok) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6839 | Sensorsignal Eingang Spannung Temperatursensor Motorwicklung Phase 1 (e_a_tmot1) | - | high | unsigned char | - | 2 | 100 | 0 |
| 0x683A | Sensorsignal Eingang Spannung Temperatursensor Motorwicklung Phase 2 (e_a_tmot2) | - | high | unsigned char | - | 2 | 100 | 0 |
| 0x683B | Sensorsignal Eingang Spannung Temperatursensor Motorwicklung Phase 3 (e_a_tmot3) | - | high | unsigned char | - | 2 | 100 | 0 |
| 0x683C | Sensorsignal Eingang Spannung Kühlwassertemperatur Ausgang Kühler (e_a_twak) | - | high | unsigned char | - | 2 | 100 | 0 |
| 0x683D | Eingang Zündschloss (e_s_kl15) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x683E | Eingang Wakeup-Leitung (e_s_kl15wup) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x683F | Der aktuelle Mittelwert der Einheitskreisauswertung im Umrichter zur Speicherung im TC (einheitskreis_mittel_meas) | - | high | signed char | - | 256 | 1 | 0 |
| 0x6840 | Fahrwertgeber (fwg) | % | high | unsigned char | - | 1 | 1 | -30 |
| 0x6841 | Rohwert Fahrwertgeber Kanal 1 (fwg1r) | % | high | unsigned char | - | 256 | 100 | 0 |
| 0x6842 | Rohwert Fahrwertgeber Kanal 2 (fwg2r) | % | high | unsigned char | - | 256 | 100 | 0 |
| 0x6843 | Fahrtwertgeber 1 adaptiert (fwgad1) | % | high | signed char | - | 256 | 40 | 0 |
| 0x6844 | Fahrtwertgeber 2 adaptiert (fwgad2) | % | high | signed char | - | 256 | 40 | 0 |
| 0x6845 | Aktueller Offset des Stromsensors in Phase U (i_dc_ofs_u_meas) | A | high | signed char | - | 4 | 1 | 0 |
| 0x6846 | Aktueller Offset des Stromsensors in Phase V (i_dc_ofs_v_meas) | A | high | signed char | - | 4 | 1 | 0 |
| 0x6847 | Aktueller Offset des Stromsensors in Phase W (i_dc_ofs_w_meas) | A | high | signed char | - | 4 | 1 | 0 |
| 0x6848 | Aktuelles Motormoment (md_ist_abs) | Nm | high | signed char | - | 7 | 6 | 0 |
| 0x6849 | Istmoment (md_ist) | % | high | signed char | - | 1 | 1 | 0 |
| 0x684A | Drehzahl (nmot) | 1/min | high | signed char | - | 100 | 1 | 0 |
| 0x684B | Einheitskreis (resolver_einheitskreis) | - | high | signed char | - | 256 | 1 | 0 |
| 0x684C | Actual value of Resolver Signal Sampling Time (samp_time_resolver_act) | - | high | unsigned char | - | 1 | 2000000 | 0 |
| 0x684D | Dieses Signal uebermittelt den Status des Trennschalters des Hochvoltspeichers (st_dcsw_motbk_2010) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x684E | Status der Rotoroffsetbestimmung (st_rotoroffset) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x684F | Zustand der Umrichter-Kommunikation am SPI (st_umr_spi) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6850 | Status Umrichter (st_umrichter) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6851 | Ermittelte Motortemperatur (tmot) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x6852 | Motortemperatur 1 (tmot1) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x6853 | Motortemperatur 2 (tmot2) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x6854 | Motortemperatur 3 (tmot3) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x6855 | Temperatur Motor Wicklung U (tmotu) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x6856 | Temperatur Motor Wicklung V (tmotv) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x6857 | Temperatur Motor Wicklung W (tmotw) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x6858 | Temperatur Umrichter HV-Leistungsendstufe Phase U (tpowerstageu) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x6859 | Temperatur Umrichter HV-Leistungsendstufe Phase V (tpowerstagev) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x685A | Temperatur Umrichter HV-Leistungsendstufe Phase W (tpowerstagew) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x685B | Wassertemperatur Ausgang Kuehler ungefiltert (twak_roh) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x685C | Spannung am BTS1 (u_bts1) | V | high | unsigned char | - | 1 | 16 | 0 |
| 0x685D | Spannung am BTS2 (u_bts2) | V | high | unsigned char | - | 1 | 16 | 0 |
| 0x685E | Spannung am BTS3 (u_bts3) | V | high | unsigned char | - | 1 | 16 | 0 |
| 0x685F | Spannung am BTS4 (u_bts4) | V | high | unsigned char | - | 1 | 16 | 0 |
| 0x6860 | Spannung im Zwischenkreis (u_dc) | V | high | unsigned char | - | 3 | 4 | 0 |
| 0x6861 | Dieses Signal uebermittelt die aktuell gemessenene Spannung des Hochvoltspeichers (u_hvsto_motbk_2010) | V | high | unsigned char | - | 3 | 4 | 0 |
| 0x6862 | Versorgungsspannung KL30B (u_kl30b) | V | high | unsigned char | - | 1 | 16 | 0 |
| 0x6863 | Status DSP (V_dspio_dspIstState) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6864 | Geschwindigkeitssignal am Hinterrad (v_hrad) | km/h | high | unsigned char | - | 1 | 1 | -55 |
| 0x6865 | Hinterradgeschwindigkeit aus Radsensorsignal (v_hrad_roh) | km/h | high | unsigned char | - | 1 | 1 | -55 |
| 0x6866 | Geschwindigkeitssignal aus Motordrehzahl (v_nmot) | km/h | high | unsigned char | - | 1 | 1 | -55 |
| 0x6867 | Vorderradgeschwindigkeit aus Radsensorsignal (v_vrad_roh) | km/h | high | unsigned char | - | 1 | 1 | -55 |
| 0x6868 | Dieses Signal enthaelt die Geschwindigkeit des Vorderrades in km/h (v_whl_ft_motbk_2010) | km/h | high | unsigned char | - | 1 | 1 | 0 |
| 0x6869 | Dieses Signal enthaelt die Geschwindigkeit des Hinterrades in km/h (v_whl_rr_motbk_2010) | km/h | high | unsigned char | - | 1 | 1 | 0 |
| 0x686A | Sensorsignal Bremswertgeber hinten 1 (e_a_bwgh1) | V | high | unsigned char | - | 5 | 64 | 0 |
| 0x686B | 5V Signalgeber-Versorgungs BWGH1 (a_5v_bwgh1) | V | high | unsigned char | - | 5 | 64 | 0 |
| 0x686C | Bremsreku-Sollmoment (md_bwg) | % | high | unsigned char | - | 1 | 2 | 0 |
| 0x686D | Bedingung Abschaltung des BTS1 erkannt (B_ibts1_swoff) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x686E | Bedingung Abschaltung des BTS2 erkannt (B_ibts2_swoff) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x686F | Bedingung Abschaltung des BTS3 erkannt (B_ibts3_swoff) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6870 | Bedingung Abschaltung des BTS4 erkannt (B_ibts4_swoff) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6871 | Bedingung System BTS1 Kurzschluss (B_bts1sc) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6872 | Bedingung System BTS2 Kurzschluss (B_bts2sc) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6873 | Bedingung System BTS3 Kurzschluss (B_bts3sc) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6874 | Bedingung System BTS4 Kurzschluss (B_bts4sc) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6875 | Bedingung Ueberstrom BTS1 (B_t_ibts1mx) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6876 | Bedingung Ueberstrom BTS2 (B_t_ibts2mx) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6877 | Bedingung Ueberstrom BTS3 (B_t_ibts3mx) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6878 | Bedingung Ueberstrom BTS4 (B_t_ibts4mx) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6879 | Überstromquadrat BTS1 (iibts1diff) | A^2 | high | unsigned char | - | 1 | 4 | 0 |
| 0x687A | Überstromquadrat BTS2 (iibts2diff) | A^2 | high | unsigned char | - | 1 | 4 | 0 |
| 0x687B | Überstromquadrat BTS3 (iibts3diff) | A^2 | high | unsigned char | - | 1 | 4 | 0 |
| 0x687C | Überstromquadrat BTS4 (iibts4diff) | A^2 | high | unsigned char | - | 1 | 4 | 0 |
| 0x687D | Mittlerer Strom über BTS1 (ibts1) | A | high | unsigned char | - | 1 | 4 | 0 |
| 0x687E | Mittlerer Strom über BTS2 (ibts2) | A | high | unsigned char | - | 1 | 4 | 0 |
| 0x687F | Mittlerer Strom über BTS3 (ibts3) | A | high | unsigned char | - | 1 | 4 | 0 |
| 0x6880 | Mittlerer Strom über BTS4 (ibts4) | A | high | unsigned char | - | 1 | 4 | 0 |
| 0x6881 | Bedingung System BTS1 aktiv / freigegeben (B_bts1) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6882 | Bedingung System BTS2 aktiv / freigegeben (B_bts2) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6883 | Bedingung System BTS3 aktiv / freigegeben (B_bts3) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6884 | Bedingung System BTS4 aktiv / freigegeben (B_bts4) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6885 | Sensorsignal Eingang Spannung Temperatursensor PU-Boardtemperatur Raumdiagonale (u_temp_bo) | V | high | unsigned char | - | 2 | 100 | 0 |
| 0x6886 | PU Boardtemperatur ungefiltert (tbo_roh) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x6887 | PU Boardtemperatur (tbo) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x6888 | Sensorsignal Eingang Spannung Temperatursensor PU-Board BTS temperatur (u_temp_bts) | V | high | unsigned char | - | 2 | 100 | 0 |
| 0x6889 | BTS Boardtemperatur ungefiltert (tbts_roh) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x688A | Sensorsignal Eingang Spannung Temperatursensor PU-Board CY320 temperatur (u_temp_cy0) | V | high | unsigned char | - | 2 | 100 | 0 |
| 0x688B | CY320 Boardtemperatur ungefiltert (tcy0_roh) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x688C | CY320 Boardtemperatur (tcy0) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x688D | Sensorsignal Eingang Spannung Temperatursensor PU-Board LSS temperatur (u_temp_lss1) | V | high | unsigned char | - | 2 | 100 | 0 |
| 0x688E | LSS1 Boardtemperatur ungefiltert (tlss1_roh) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x688F | LSS1 Boardtemperatur (tlss1) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x6890 | Status des Abschaltpfadtests (umr_st_sop) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6891 | Status Abschaltpfadtest Ebene 3 (st_sop_um) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6892 | Tastverhältnis Phase U Ebene 2 (tastv_u_um) | - | high | unsigned char | - | 1 | 256 | 0 |
| 0x6893 | Bedingung Abschaltpfadtest ist nach Freigabe durch Umrichter aktiv Ebene 3 (B_sop_aktiv_um) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6894 | Status AD-Wandlertest Ebene 3 (st_adc_um) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6895 | Freilaufender Zähler für Freigabe des AD-Wandler-Tests der Ebene 3 (cnt_task_ggfwg) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x6896 | Spannung am Eingang FWG Kanal 2 fvr AD-Wandlertest Ebene 3 (testspannung_adctest_um) | V | high | unsigned char | - | 256 | 10000 | 0 |
| 0x6897 | Spannung am Mess-Shunt von BTS1 (u_ibts1) | V | high | unsigned char | - | 1 | 1 | 0 |
| 0x6898 | Spannung am Mess-Shunt von BTS2 (u_ibts2) | V | high | unsigned char | - | 1 | 1 | 0 |
| 0x6899 | Spannung am Mess-Shunt von BTS3 (u_ibts3) | V | high | unsigned char | - | 1 | 1 | 0 |
| 0x689A | Spannung am Mess-Shunt von BTS4 (u_ibts4) | V | high | unsigned char | - | 1 | 1 | 0 |
| 0x689B | BTS Boardtemperatur (tbts) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x689C | Auslastung Fast ISR maximal (cpu_load_fast_mx) | % | high | unsigned char | - | 1 | 1 | 0 |
| 0x689D | Auslastung Slow ISR maximal (cpu_load_slow_mx) | % | high | unsigned char | - | 1 | 1 | 0 |
| 0x689E | Freigabe Ansteuerung HV Endstufentransistoren (hv_powerstage_en) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x689F | Feldbildender Strom (i_d) | A | high | signed char | - | 256 | 40 | 0 |
| 0x68A0 | Feldbildender Soll-Strom (i_d_soll) | A | high | signed char | - | 256 | 40 | 0 |
| 0x68A1 | Maximale Stromabgabe an Zwischenkreis (i_dc_mn) | A | high | signed char | - | 256 | 40 | 0 |
| 0x68A2 | Maximale Stromentnahme aus Zwischenkreis (i_dc_mx) | A | high | signed char | - | 256 | 40 | 0 |
| 0x68A3 | Stromsensoroffset Phase U (i_dc_ofs_u) | A | high | signed char | - | 256 | 40 | 0 |
| 0x68A4 | Stromsensoroffset Phase V (i_dc_ofs_v) | A | high | signed char | - | 256 | 40 | 0 |
| 0x68A5 | Stromsensoroffset Phase W (i_dc_ofs_w) | A | high | signed char | - | 256 | 40 | 0 |
| 0x68A6 | Phasenstrom U inklusive Korrektur durch i_dc_ofs_u_meas (i_pha_u) | A | high | signed char | - | 256 | 40 | 0 |
| 0x68A7 | Phasenstrom V inklusive Korrektur durch i_dc_ofs_v_meas (i_pha_v) | A | high | signed char | - | 256 | 40 | 0 |
| 0x68A8 | Phasenstrom W inklusive Korrektur durch i_dc_ofs_w_meas (i_pha_w) | A | high | signed char | - | 256 | 40 | 0 |
| 0x68A9 | Momentbildender Strom (i_q) | A | high | signed char | - | 256 | 40 | 0 |
| 0x68AA | Soll-Moment (md_soll_abs) | Nm | high | signed char | - | 256 | 400 | 0 |
| 0x68AB | Cosinuswert korrigiert (resolver_cos) | - | high | signed char | - | 64 | 1 | 0 |
| 0x68AC | Sinuswert korrigiert (resolver_sin) | - | high | signed char | - | 64 | 1 | 0 |
| 0x68AD | Sinus Amplituden Kalibrierungsfaktor (resolver_sin_kor_fak) | - | high | unsigned char | - | 128 | 1 | 0 |
| 0x68AE | Dauer Idle Loop maximal (t_idle_mx) | ms | high | unsigned char | - | 1 | 1 | 0 |
| 0x68AF | Temperatur Zwischenkreis-Kondensator (tdccap) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x68B0 | Maximale Temperatur aller gemessenen Temperaturen Motor Wicklung (tmotmax) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x68B1 | Maximale Temperatur aller gemessenen Temperaturen in der HV-Leistungsendstufe (tpowerstagemax) | °C | high | unsigned char | - | 1 | 1 | -40 |
| 0x68B2 | Feldbildende Spannung (u_d) | V | high | signed char | - | 16 | 10 | 0 |
| 0x68B3 | Gespeicherter Spannungsoffset (u_dc_ofs) | V | high | unsigned char | - | 8 | 10 | 0 |
| 0x68B4 | Momentbildende Spannung (u_q) | V | high | signed char | - | 16 | 10 | 0 |
| 0x68B5 | Stromreglerausgangsgröße Ucd (uc_d) | V | high | signed char | - | 16 | 10 | 0 |
| 0x68B6 | Stromreglerausgangsgröße Ucq (uc_q) | V | high | signed char | - | 16 | 10 | 0 |
| 0x68B7 | Status des Kill-Schalters am Umrichter (umr_kill) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x68B8 | Status der KL15 am Umrichter (umr_kl15) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x68B9 | FeeSwapCnt (Low Byte) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x68BA | FeeSwapCnt (High Byte) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x68BB | OS NvRomFree (Low Byte) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x68BC | OS NvRomFree (High Byte) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x68BD | OS OSEKERR Last (Low Byte) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x68BE | DSYS Merker 1 (Low Byte) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x68BF | DSYS Merker 1 (High Byte) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x68C0 | DSYS Merker 2 (Low Byte) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x68C1 | DSYS Merker 2 (High Byte) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x68C2 | DSYS Merker 3 (Low Byte) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

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
| 0x3A01E0 | Battery-mismatch | 0 |
| 0x3A01E1 | Battery-Mismatch | 0 |
| 0x3A01F0 | Systemfehler | 0 |
| 0x3A01F1 | ECC-Fehler Daten | 0 |
| 0x3A01F2 | ECC-Fehler  Code | 0 |
| 0x3A01F3 | Software-Fehler 3 | 0 |
| 0x3A01F4 | Software-Fehler 4 | 0 |
| 0x3A01F5 | Software-Fehler 5 | 0 |
| 0x3A01F6 | Software-Fehler 6 | 0 |
| 0x3A01F7 | Software-Fehler 7 | 0 |
| 0x3A01F8 | Software-Fehler 8 | 0 |
| 0x3A01F9 | Software-Fehler 9 | 0 |
| 0x3A01FA | Software-Fehler 10 | 0 |
| 0x3A01FB | Software-Fehler 11 | 0 |
| 0x3A01FC | Software-Fehler 12 | 0 |
| 0x3A01FD | Software-Fehler 13 | 0 |
| 0x3A01FE | Software-Fehler 14 | 0 |
| 0x3A01FF | Software-Fehler 15 | 0 |
| 0x3A0200 | NVRAM Schreibfehler | 0 |
| 0x3A0201 | NVRAM Lesefehler | 0 |
| 0x3A0202 | NVRAM Fehler | 0 |
| 0x3A0203 | NVRAM Fehler | 0 |
| 0x3A0204 | NVRAM Fehler | 0 |
| 0x3A0205 | NVRAM Fehler | 0 |
| 0x3A0206 | NVRAM Fehler | 0 |
| 0x3A0207 | NVRAM Fehler | 0 |
| 0x3A0208 | NVRAM, Datenverlust, aus Backup wiederhergestellt | 0 |
| 0x3A0209 | NVRAM Fehler | 0 |
| 0x3A020A | NVRAM Fehler | 0 |
| 0x3A020B | NVRAM Fehler | 0 |
| 0x3A020C | NVRAM Fehler | 0 |
| 0x3A020D | NVRAM Fehler | 0 |
| 0x3A020E | NVRAM, Erststart ausgeführt | 0 |
| 0x3A020F | Reset Adaptionsdaten ausgefuehrt | 0 |
| 0x3A0210 | Codierfehler | 0 |
| 0x3A0211 | Codierfehler | 0 |
| 0x3A0212 | Codierfehler | 0 |
| 0x3A0213 | Codierfehler VIN | 0 |
| 0x3A0214 | Codierfehler | 0 |
| 0x3A0560 | Rechnerüberwachung, Fehler MPM Ebene 3 | 0 |
| 0x3A0561 | Rechnerüberwachung, Fehler PFC Ebene 3 | 0 |
| 0x3A0563 | Rechnerüberwachung, Fehler RAM-Test Ebene 3 | 0 |
| 0x3A0564 | Rechnerüberwachung, Fehler ROM-Test Ebene 3 | 0 |
| 0x3A0566 | Rechnerüberwachung, Fehler GPTA Ebene 3 | 0 |
| 0x3A0567 | Rechnerüberwachung, Fehler Komplementencheck Ebene 3 | 0 |
| 0x3A0568 | Rechnerüberwachung, RAM-Test ausgeschaltet | 0 |
| 0x3A0569 | Rechnerüberwachung ROM-Test ausgeschaltet | 0 |
| 0x3A056A | Rechnerüberwachung MPM ausgeschaltet | 0 |
| 0x3A056B | Rechnerüberwachung, MPM-Reset ausgelöst | 0 |
| 0xCD9421 | SEK_CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0xCD9423 | SEK_CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9437 | SEK_CAN SLZ Nachricht Status_Fahrzeug_Zugriff_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xCD9447 | SEK_CAN ABS Nachricht Status_ABS_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x68BE | UWB_DSYS_MERKER_1_LO_MR | 0-n | High | 0xFF | - | - | - | - |
| 0x68BF | UWB_DSYS_MERKER_1_HI_MR | 0-n | High | 0xFF | - | - | - | - |
| 0x68C0 | UWB_DSYS_MERKER_2_LO_MR | 0-n | High | 0xFF | - | - | - | - |
| 0x68C1 | UWB_DSYS_MERKER_2_HI_MR | 0-n | High | 0xFF | - | - | - | - |
| 0x68C2 | UWB_DSYS_MERKER_3_LO_MR | 0-n | High | 0xFF | - | - | - | - |
| 0x68C5 | UWB_DSYS_MERKER_3_HI_MR | 0-n | High | 0xFF | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X6300_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_BATTERIE_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Berechnete Batteriespannung (KL30) in Volt |
| STAT_SPANNUNG_DSP_HVSPEICHER_WERT | V | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Gemessene Spannung am Hochvoltspeicher vom DSP in Volt |
| STAT_SPANNUNG_BTS_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Gemessene Spannung am BTS 1 in Volt |
| STAT_SPANNUNG_BTS_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Gemessene Spannung am BTS 2 in Volt |
| STAT_SPANNUNG_BTS_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Gemessene Spannung am BTS 3 in Volt |
| STAT_SPANNUNG_BTS_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Gemessene Spannung am BTS 4 in Volt |
| STAT_RESERVE_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Reserve |
| STAT_RESERVE_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Reserve |
| STAT_RESERVE_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Reserve |
| STAT_RESERVE_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Reserve |
| STAT_RESERVE_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Reserve |
| STAT_RESERVE_6_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Reserve |

### RES_0X6301_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_PHASE_U_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Strom der Phase U in Ampere |
| STAT_STROM_PHASE_V_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Strom der Phase V in Ampere |
| STAT_STROM_PHASE_W_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Strom der Phase W in Ampere |
| STAT_STROM_BTS_1_WERT | A | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Treiberstrom vom BTS 1 in Ampere |
| STAT_STROM_BTS_2_WERT | A | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Treiberstrom vom BTS 2 in Ampere |
| STAT_STROM_BTS_3_WERT | A | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Treiberstrom vom BTS 3 in Ampere |
| STAT_STROM_BTS_4_WERT | A | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Treiberstrom vom BTS 4 in Ampere |

### RES_0X6302_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_ADC_KUEHLWASSERTEMP_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Kühlwassertemperatursensors in Volt |
| STAT_TEMPERATUR_KUEHLWASSER_WERT | °C | high | signed int | - | - | 1.0 | 20.0 | 0.0 | Kühlwassertemperatur in Grad Celsius |
| STAT_SPANNUNG_ADC_ANTRIEBSELEKTRONIK_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung Temperatur-Sensor Antriebselektronik in Volt |
| STAT_TEMPERATUR_ANTRIEBSELEKTRONIK_WERT | °C | high | signed int | - | - | 1.0 | 20.0 | 0.0 | SG-Temperatur der Antriebselektronik in Grad Celsius |
| STAT_SPANNUNG_ADC_BAUTEILSCHUTZ_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung Temperatur-Sensor Bauteilschutz in Volt |
| STAT_TEMPERATUR_BAUTEILSCHUTZ_WERT | °C | high | signed int | - | - | 1.0 | 20.0 | 0.0 | SG-Temperatur der Bauteilschutz in Grad Celsius |
| STAT_SPANNUNG_ADC_CY320_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung Temperatur-Sensor CY320 in Volt |
| STAT_TEMPERATUR_CY320_WERT | °C | high | signed int | - | - | 1.0 | 20.0 | 0.0 | SG-Temperatur des CY320 in Grad Celsius |
| STAT_SPANNUNG_ADC_LOWSIDE_SWITCH_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung Temperatur-Sensor LSS in Volt |
| STAT_TEMPERATUR_LOWSIDE_SWITCH_WERT | °C | high | signed int | - | - | 1.0 | 20.0 | 0.0 | SG-Temperatur des LSS in Grad Celsius |
| STAT_SPANNUNG_ADC_MOTORWICKLUNG_U_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Temperatursensors der Motorwicklung U in Volt |
| STAT_TEMPERATUR_MOTORWICKLUNG_U_WERT | °C | high | signed int | - | - | 1.0 | 20.0 | 0.0 | Temperatur der Motorwicklung U in Grad Celsius |
| STAT_SPANNUNG_ADC_MOTORWICKLUNG_V_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Temperatursensors der Motorwicklung V in Volt |
| STAT_TEMPERATUR_MOTORWICKLUNG_V_WERT | °C | high | signed int | - | - | 1.0 | 20.0 | 0.0 | Temperatur der Motorwicklung V in Grad Celsius |
| STAT_SPANNUNG_ADC_MOTORWICKLUNG_W_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Temperatursensors der Motorwicklung W in Volt |
| STAT_TEMPERATUR_MOTORWICKLUNG_W_WERT | °C | high | signed int | - | - | 1.0 | 20.0 | 0.0 | Temperatur der Motorwicklung W in Grad Celsius |
| STAT_SPANNUNG_ADC_DSP_HVTREIBER_U_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Temperatur-Sensors HV-Treiber  U  in Volt |
| STAT_TEMPERATUR_DSP_HVTREIBER_U_WERT | °C | high | signed int | - | - | 1.0 | 20.0 | 0.0 | Temperatur der HV-Treiberendstufe für die Motorwicklung U vom DSP in Grad Celsius |
| STAT_SPANNUNG_ADC_DSP_HVTREIBER_V_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Temperatur-Sensors HV-Treiber  V  in Volt |
| STAT_TEMPERATUR_DSP_HVTREIBER_V_WERT | °C | high | signed int | - | - | 1.0 | 20.0 | 0.0 | Temperatur der HV-Treiberendstufe für die Motorwicklung V vom DSP in Grad Celsius |
| STAT_SPANNUNG_ADC_DSP_HVTREIBER_W_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Temperatur-Sensors HV-Treiber  W  in Volt |
| STAT_TEMPERATUR_DSP_HVTREIBER_W_WERT | °C | high | signed int | - | - | 1.0 | 20.0 | 0.0 | Temperatur der HV-Treiberendstufe für die Motorwicklung W vom DSP in Grad Celsius |

### RES_0X6303_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_ABS_VORDERRAD_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | gemessene Vorderradgeschwindigkeit in Kilometer pro Stunde |
| STAT_GESCHWINDIGKEIT_ABS_HINTERRAD_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | gemessene Hinterradgeschwindigkeit in Kilometer pro Stunde |

### RES_0X6304_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_DSP_EMOTOR_WERT | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | aus Resolverinformationen berechnete Drehzahl des E-Motors vom DSP in Umdrehungen pro Minute |
| STAT_DREHZAHL_WASSERPUMPE_SOLL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | auf Maximaldrehzahl bezogene relative Solldrehzahl der elektrischen Wasserpumpe in Prozent |

### RES_0X6305_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_ADC_BREMSDRUCK_VORN_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Bremsdrucksensors Vorderrad in Volt |
| STAT_DRUCK_BREMSE_VORN_1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Bremsdruck am Vorderrad in Bar |
| STAT_SPANNUNG_ADC_BREMSDRUCK_HINTEN_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Bremsdrucksensors Hinterrad in Volt |
| STAT_DRUCK_BREMSE_HINTEN_1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Bremsdruck am Hinterrad in Bar |
| STAT_SPANNUNG_ADC_BREMSDRUCK_VORN_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Bremsdrucksensors Vorderrad in Volt (Reserve) |
| STAT_DRUCK_BREMSE_VORN_2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Bremsdruck am Vorderrad in Bar (Reserve) |
| STAT_SPANNUNG_ADC_BREMSDRUCK_HINTEN_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Bremsdrucksensors Hinterrad in Volt (Reserve) |
| STAT_DRUCK_BREMSE_HINTEN_2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Bremsdruck am Hinterrad in Bar (Reserve) |

### RES_0X6306_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRTRICHTUNG_VORWAERTS | 0/1 | high | unsigned char | - | - | - | - | - | Fahrtrichtungs-Indikator Vorwärts |
| STAT_FAHRTRICHTUNG_RUECKWAERTS | 0/1 | high | unsigned char | - | - | - | - | - | Fahrtrichtungs-Indikator Rückwärts |

### RES_0X6310_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_KLEMME15 | 0/1 | high | unsigned char | - | - | - | - | - | Eingang des KL15-Schalters: 1 == betätigt; 0 == nicht betätigt |
| STAT_SCHALTER_KLEMME15_WAKEUP | 0/1 | high | unsigned char | - | - | - | - | - | Eingang des KL15-WakeUp-Schalters: 1 == betätigt; 0 == nicht betätigt |
| STAT_SCHALTER_START | 0/1 | high | unsigned char | - | - | - | - | - | Eingang des Startschalters: 1 == betätigt; 0 == nicht betätigt |
| STAT_SCHALTER_NOTAUS | 0/1 | high | unsigned char | - | - | - | - | - | Eingang des Notausschalters: 1 == betätigt; 0 == nicht betätigt |
| STAT_SCHALTER_SST_AUSGEKLAPPT | 0/1 | high | unsigned char | - | - | - | - | - | Eingang Ausgeklappt-Schalter des Seitenstützenständers: 1 == betätigt; 0 == nicht betätigt |
| STAT_SCHALTER_SST_EINGEKLAPPT | 0/1 | high | unsigned char | - | - | - | - | - | Eingang Eingeklappt-Schalter des Seitenstützenständers: 1 == betätigt; 0 == nicht betätigt |
| STAT_SCHALTER_SEITENSTUETZENSTAENDER | 0/1 | high | unsigned char | - | - | - | - | - | Zustand des Seitenstützenständers: 1 == eingeklappt; 0 == ausgeklappt |
| STAT_RESERVE_3 | 0/1 | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_SCHALTER_FAHRZEUGMODUS | 0/1 | high | unsigned char | - | - | - | - | - | Eingang des Fahrzeugmodustasters: 1 == betätigt; 0 == nicht betätigt |
| STAT_RESERVE_1 | 0/1 | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_2 | 0/1 | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE | 0/1 | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_SCHALTER_LUEFTERRELAIS | 0/1 | high | unsigned char | - | - | - | - | - | Ausgang Lüfterrelaisansteuerung: 1 == aktiv; 0 == inaktiv |
| STAT_SCHALTER_12V_SME | 0/1 | high | unsigned char | - | - | - | - | - | Zustand der Speichermanagmentelektronik(SME)-Versorgung: 1 == aktiv; 0 == inaktiv |
| STAT_SCHALTER_12V_WASSERPUMPE | 0/1 | high | unsigned char | - | - | - | - | - | Zustand der Versorgung Wasserpumpe: 1 == aktiv; 0 == inaktiv |
| STAT_SCHALTER_12V_LUEFTERRELAIS | 0/1 | high | unsigned char | - | - | - | - | - | Zustand der Versorgung Luefter-Relais: 1 == aktiv; 0 == inaktiv |
| STAT_SCHALTER_12V_RESERVE | 0/1 | high | unsigned char | - | - | - | - | - | Zustand der Versorgung (Reserve): 1 == aktiv; 0 == inaktiv |

### RES_0X6311_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROTORPOSITION_WINKEL_OFFSET_WERT | ° | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Winkeloffset des E-Motors in Grad |
| STAT_ROTORPOSITION_WINKEL_IST_WERT | ° | high | unsigned int | - | - | 360.0 | 65536.0 | 0.0 | Winkel-Istposition des E-Motors in Grad |

### RES_0X6312_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_ADC_FWG_KANAL1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 1 des Fahrwertgebers in Volt |
| STAT_FAHRWERTGEBER_KANAL1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 1 des Fahrwertgebers in Prozent |
| STAT_SPANNUNG_ADC_FWG_KANAL2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 2 des Fahrwertgebers in Volt |
| STAT_FAHRWERTGEBER_KANAL2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 2 des Fahrwertgebers in Prozent |
| STAT_FAHRWERTGEBER_IST_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Istwert des Fahrwertgeber in Prozent |

### RES_0X6320_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL1_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 1 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL1_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 1 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL2_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 2 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL2_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 2 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_OBEN_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Status Adaptionswert oben in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_UNTEN_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Status Adaptionswert unten in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_STATUS | 0/1 | high | unsigned char | - | - | - | - | - | Status Adaption Fahrwertgeber: 1 = abgeschlossen, 0 = nicht abgeschlossen |

### RES_0X6321_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_ROTOR_OFFSET_WERT | ° | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rotoroffset in Grad |
| STAT_ADAPTION_ROTOR_STATUS | 0-n | high | unsigned char | - | TAB_MR_ROTOROFFSET_ERMITTELN | - | - | - | Status Adaptionswert vom Rotor |

### RES_0X6322_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_STROMSENSOR_OFFSET_PHASE_U_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Offset des Stromsensors Phase U |
| STAT_ADAPTION_STROMSENSOR_OFFSET_PHASE_V_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Offset des Stromsensors Phase V |
| STAT_ADAPTION_STROMSENSOR_OFFSET_PHASE_W_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Offset des Stromsensors Phase W |

### RES_0X6324_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFSET_BREMSE_VORN_WERT | bar | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Bremsdurck-Adaptions-Wert Vorderrad |
| STAT_OFFSET_BREMSE_HINTEN_WERT | bar | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Bremsdurck-Adaptions-Wert Hinterrad |

### RES_0X6360_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID-Wert zur Identifikation |
| STAT_KFCNT_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of Histograms used, optional |
| STAT_KM_AKT_WERT | km | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand aktuell |
| STAT_KM_START_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand Start Messung |
| STAT_KL15CNT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Klemme15 Wechsel |
| STAT_REVCNT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Rueckwaertsfahrten (Knopf gedrueckt) |

### RES_0X6361_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID Vorhalt, Auswertung offen |
| STAT_VALCNT_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der benutzten Werte, (bei MODUS=7) |
| STAT_H01W01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Modus0 (Fahrsperre) Verweildauer |
| STAT_H01W02_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Modus1 (ROAD) Verweildauer |
| STAT_H01W03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Modus2 (SAIL) Verweildauer |
| STAT_H01W04_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Modus3 (DYNAMIC) Verweildauer |
| STAT_H01W05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Modus4 (ECO PRO) Verweildauer |
| STAT_H01W06_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Modus5 (REVERSE) Verweildauer |
| STAT_H01W07_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Modus6 (CHARGE) Verweildauer |

### RES_0X6362_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID, Auswertung noch offen |
| STAT_HISTSIZE_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of Values |
| STAT_H02W01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei negativem km/h |
| STAT_H02W02_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei -1..+1 km/h |
| STAT_H02W03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei 1-5 km/h |
| STAT_H02W04_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei 5-10 km/h |
| STAT_H02W05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei 10-20 km/h |
| STAT_H02W06_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei 20-30 km/h |
| STAT_H02W07_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei 30-40 km/h |
| STAT_H02W08_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei 40-50 km/h |
| STAT_H02W09_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei 50-60 km/h |
| STAT_H02W10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei 60-70 km/h |
| STAT_H02W11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei 70-80 km/h |
| STAT_H02W12_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei 80-90 km/h |
| STAT_H02W13_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei 90-100 km/h |
| STAT_H02W14_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei 100-110 km/h |
| STAT_H02W15_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei 110-120 km/h |
| STAT_H02W16_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei 120-130 km/h |
| STAT_H02W17_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verweildauer bei ueber 130 km/h |

### RES_0X6363_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID, Auswertung noch offen |
| STAT_HISTSIZE_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of Values |
| STAT_H03_NMOT1_MD1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [1][1] |
| STAT_H03_NMOT1_MD2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [1][2] |
| STAT_H03_NMOT1_MD3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [1][3] |
| STAT_H03_NMOT1_MD4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [1][4] |
| STAT_H03_NMOT1_MD5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [1][5] |
| STAT_H03_NMOT1_MD6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [1][6] |
| STAT_H03_NMOT1_MD7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [1][7] |
| STAT_H03_NMOT1_MD8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [1][8] |
| STAT_H03_NMOT2_MD1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [2][1] |
| STAT_H03_NMOT2_MD2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [2][2] |
| STAT_H03_NMOT2_MD3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [2][3] |
| STAT_H03_NMOT2_MD4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [2][4] |
| STAT_H03_NMOT2_MD5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [2][5] |
| STAT_H03_NMOT2_MD6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [2][6] |
| STAT_H03_NMOT2_MD7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [2][7] |
| STAT_H03_NMOT2_MD8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [2][8] |
| STAT_H03_NMOT3_MD1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [3][1] |
| STAT_H03_NMOT3_MD2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [3][2] |
| STAT_H03_NMOT3_MD3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [3][3] |
| STAT_H03_NMOT3_MD4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [3][4] |
| STAT_H03_NMOT3_MD5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [3][5] |
| STAT_H03_NMOT3_MD6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [3][6] |
| STAT_H03_NMOT3_MD7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [3][7] |
| STAT_H03_NMOT3_MD8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [3][8] |
| STAT_H03_NMOT4_MD1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [4][1] |
| STAT_H03_NMOT4_MD2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [4][2] |
| STAT_H03_NMOT4_MD3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [4][3] |
| STAT_H03_NMOT4_MD4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [4][4] |
| STAT_H03_NMOT4_MD5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [4][5] |
| STAT_H03_NMOT4_MD6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [4][6] |
| STAT_H03_NMOT4_MD7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [4][7] |
| STAT_H03_NMOT4_MD8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [4][8] |
| STAT_H03_NMOT5_MD1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [5][1] |
| STAT_H03_NMOT5_MD2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [5][2] |
| STAT_H03_NMOT5_MD3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [5][3] |
| STAT_H03_NMOT5_MD4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [5][4] |
| STAT_H03_NMOT5_MD5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [5][5] |
| STAT_H03_NMOT5_MD6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [5][6] |
| STAT_H03_NMOT5_MD7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [5][7] |
| STAT_H03_NMOT5_MD8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [5][8] |
| STAT_H03_NMOT6_MD1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [6][1] |
| STAT_H03_NMOT6_MD2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [6][2] |
| STAT_H03_NMOT6_MD3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [6][3] |
| STAT_H03_NMOT6_MD4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [6][4] |
| STAT_H03_NMOT6_MD5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [6][5] |
| STAT_H03_NMOT6_MD6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [6][6] |
| STAT_H03_NMOT6_MD7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [6][7] |
| STAT_H03_NMOT6_MD8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [6][8] |
| STAT_H03_NMOT7_MD1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [7][1] |
| STAT_H03_NMOT7_MD2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [7][2] |
| STAT_H03_NMOT7_MD3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [7][3] |
| STAT_H03_NMOT7_MD4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [7][4] |
| STAT_H03_NMOT7_MD5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [7][5] |
| STAT_H03_NMOT7_MD6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [7][6] |
| STAT_H03_NMOT7_MD7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [7][7] |
| STAT_H03_NMOT7_MD8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [7][8] |
| STAT_H03_NMOT8_MD1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [8][1] |
| STAT_H03_NMOT8_MD2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [8][2] |
| STAT_H03_NMOT8_MD3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [8][3] |
| STAT_H03_NMOT8_MD4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [8][4] |
| STAT_H03_NMOT8_MD5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [8][5] |
| STAT_H03_NMOT8_MD6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [8][6] |
| STAT_H03_NMOT8_MD7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [8][7] |
| STAT_H03_NMOT8_MD8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler sec  [8][8] |

### RES_0X6364_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID, Auswertung noch offen |
| STAT_HISTSIZE_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of Values |
| STAT_W01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W02_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W04_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W06_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W07_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W08_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W09_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |

### RES_0X6365_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID, Auswertung noch offen |
| STAT_HISTSIZE_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of Values |
| STAT_W01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W02_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W04_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W06_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W07_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W08_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W09_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |

### RES_0X6366_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID, Auswertung noch offen |
| STAT_HISTSIZE_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of Values |
| STAT_W01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W02_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W04_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W06_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W07_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W08_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W09_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |

### RES_0X6367_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID, Auswertung noch offen |
| STAT_HISTSIZE_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of Values |
| STAT_W01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W02_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W04_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W06_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W07_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W08_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W09_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |

### RES_0X6368_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID, Auswertung noch offen |
| STAT_HISTSIZE_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of Values |
| STAT_W01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W02_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W04_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W06_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W07_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W08_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W09_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |

### RES_0X6369_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID, auswertung noch offen |
| STAT_HISTSIZE_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of Values |
| STAT_W01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W02_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W04_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W06_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W07_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W08_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W09_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |
| STAT_W10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehler |

### RES_0X6370_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRGESTELLNUMMER_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | EWS Fahrgestellnummer |

### RES_0X6382_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KMSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |

### RES_0X6390_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_KL30B_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Spannung KL30B |
| STAT_SPANNUNG_BTS1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Spannung BTS1 |
| STAT_SPANNUNG_BTS2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Spannung BTS2 |
| STAT_SPANNUNG_BTS3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Spannung BTS3 |
| STAT_SPANNUNG_BTS4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Spannung BTS4 |
| STAT_SPANNUNG_ZWISCHENKREIS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert U_ZK |
| STAT_SPANNUNG_RESOLVER_SIN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Spannung Resolver Sinus |
| STAT_SPANNUNG_RESOLVER_COS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Spannung Resolver Cosinus |
| STAT_SPANNUNG_RESOLVER_EXC_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Spannung Resolver Exc |
| STAT_SPANNUNG_BREMSWERTGEBER_VORNE_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Spannung Rekuperationsgeber 1 |
| STAT_SPANNUNG_BREMSWERTGEBER_VORNE_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Spannung Rekuperationsgeber 2 |
| STAT_SPANNUNG_BREMSWERTGEBER_HINTEN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Spannung Rekuperationsgeber 3 |
| STAT_SPANNUNG_BREMSWERTGEBER_HINTEN_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Spannung Rekuperationsgeber 4 |
| STAT_RESERVE_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_SPANNUNG_RES3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert spannung Reserveeingang 3 |
| STAT_SPANNUNG_RES4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert spannung Reserveeingang 4 |
| STAT_SPANNUNG_RES5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert spannung Reserveeingang 5 |
| STAT_STROM_PHASE_U_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Strom Phase U |
| STAT_STROM_PHASE_V_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Strom Phase V |
| STAT_STROM_PHASE_W_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Strom Phase W |
| STAT_STROM_BTS1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Strom am BTS1 |
| STAT_STROM_BTS2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Strom am BTS2 |
| STAT_STROM_BTS3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Strom am BTS3 |
| STAT_STROM_BTS4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Strom am BTS4 |
| STAT_TEMPERATUR_KUEHLWASSER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Temperatur Kuehlwasser |
| STAT_TEMPERATUR_MOTOR1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Motortemperatur 1 |
| STAT_TEMPERATUR_MOTOR2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Motortemperatur 2 |
| STAT_TEMPERATUR_MOTOR3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Motortemperatur 3 |
| STAT_FAHRWERTGEBER_KANAL1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Fahrwertgeber1 |
| STAT_FAHRWERTGEBER_KANAL2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12-Bit ADC-Rohwert Fahrwertgeber2 |
| STAT_SCHALTER_KLEMME15 | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter KLEMME15 |
| STAT_SCHALTER_KLEMME15_WAKEUP | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter KLEMME15_WUP |
| STAT_SCHALTER_SST_AUSGEKLAPPT | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter SST2 |
| STAT_SCHALTER_SST_EINGEKLAPPT | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter SST1 |
| STAT_SCHALTER_FAHRTRICHTUNG | 0/1 | high | unsigned char | - | - | - | - | - | Vorhalt Status Schalter Fahrtrichtung |
| STAT_SCHALTER_FAHRZEUGMODUS | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter Fahrzeugmodus |
| STAT_SCHALTER_BREMSE_VORN | 0/1 | high | unsigned char | - | - | - | - | - | Vorhalt Status Schalter Bremse vorn |
| STAT_SCHALTER_BREMSE_HINTEN | 0/1 | high | unsigned char | - | - | - | - | - | Vorhalt Status Schalter Bremse hinten |
| STAT_SCHALTER_SPI0_MC0_CY_IN | 0/1 | high | unsigned char | - | - | - | - | - | Staus Schalter SPI0_MC0_CY_IN |
| STAT_SCHALTER_SPI1_MC0_MC2_IN | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter SPI1_MC0_MC2_IN |
| STAT_SCHALTER_FUSI_REQ_MC2 | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter FUSI_REQ_MC2 |
| STAT_SCHALTER_CY320_RST5_MC0 | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter CY320_RST5_MC0 |
| STAT_SCHALTER_FUSI_REQ_IGBT | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter FUSI_REQ_IGBT |
| STAT_SCHALTER_CY320_WDA_MC0 | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter CY320_WDA_MC0 |
| STAT_SCHALTER_KILL | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter KILL |
| STAT_SCHALTER_RES1 | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter Reserveeingang 1 |
| STAT_SCHALTER_RES2 | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter Reserveeingang 2 |
| STAT_SCHALTER_RES3 | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter Reserveeingang 3 |
| STAT_SCHALTER_RES4 | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter Reserveeingang 4 |
| STAT_SCHALTER_RES5 | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter Reserveeingang 5 |
| STAT_SCHALTER_DISCHRG_STATUS | 0/1 | high | unsigned char | - | - | - | - | - | Status SchalterDISCHRG_STATUS |

### RES_0X6392_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSION_BOOTMANAGER_TEXT | TEXT | high | string[13] | - | - | 1.0 | 1.0 | 0.0 | Versions-Bezeichnung des Boot-Managers |
| STAT_VERSION_DSP_TEXT | TEXT | high | string[19] | - | - | 1.0 | 1.0 | 0.0 | Versions-Bezeichnung DSP |
| STAT_HARDWARE_FLAGS_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Hardware-Flags (HEX) |
| STAT_FSCFLAGS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FSC ACCEPTED Bits |
| STAT_WUP_COUNT_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Number of Wakeups |
| STAT_BTLD_COUNT_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Call-Count of Bootloader invocations |
| STAT_ECC_COUNT_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Count singlebit failures (erros in Flash which could be corrected) |
| STAT_NVROM_FREE_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl noch freier Datenbloecke im Flash |
| STAT_NVRAM_PAGESWAP_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Seitenwechsel im NVRAM |

### RES_0X6394_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT__DATA | DATA | high | data[240] | - | - | 1.0 | 1.0 | 0.0 | Klassier-Konfigurations-Daten (zusaetzliche Felder im NVRAM), MAXIMAL 240 Byte (meist weniger!) End-Of_PDU waere besser |

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

### RES_0XF301_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_UDS | - | - | + | 0-n | high | unsigned char | - | TAB_MR_STATUS_ROTOROFFSET_UDS | - | - | - | Status der Funktion Rotor-Offset Ermitteln (Basis UDS) |
| STAT_STATUS_ROTOROFFSET | - | - | + | 0-n | high | unsigned int | - | TAB_MR_STATUS_ROTOROFFSET | - | - | - | Status der Rotor-Adaption (Basis Funktion) |
| STAT_ROTOROFFSET_ERROR | - | - | + | 0-n | high | unsigned int | - | TAB_MR_STATUS_ROTOROFFSET_ERROR | - | - | - | Fehler-Bezeichnung des Rotor-Offset-Status |

### RES_0XF303_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UWB_1_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ausgelesener Momentanwert, noch zu interpretieren |
| STAT_UWB_2_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ausgelesener Momentanwert, noch zu interpretieren |
| STAT_UWB_3_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ausgelesener Momentanwert, noch zu interpretieren |
| STAT_UWB_4_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ausgelesener Momentanwert, noch zu interpretieren |
| STAT_UWB_5_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ausgelesener Momentanwert, noch zu interpretieren |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GWSZ_MR | 0xE119 | - | Gesamtwegstreckenzähler Motorrad | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE119_D | RES_0xE119_D |
| SERVICE_DATUM_MR | 0xE12C | - | Auslesen und Schreiben der bis zum nächsten fälligen Service verbleibende Zeit | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12C_D | RES_0xE12C_D |
| EXHAUST_REGULATION_OR_TYPEAPPROVAL_NUMBER | 0xF196 | STAT_TYPPRUEFNUMMER_TEXT | Typprüfnummer | TEXT | - | high | string[17] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_MR | 0x6300 | - | Auslesen der vom SG verwendeten Spannungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6300_D |
| STROM_MR | 0x6301 | - | Auslesen der vom SG verwendeten Ströme | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6301_D |
| TEMPERATUR_MR | 0x6302 | - | Auslesen der Temperaturen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6302_D |
| GESCHWINDIGKEIT_MR | 0x6303 | - | Auslesen Geschwindigkeit | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6303_D |
| DREHZAHL_MR | 0x6304 | - | Auslesen der Drehzahlen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6304_D |
| DRUCK_MR | 0x6305 | - | Auslesen der Drücke | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6305_D |
| FAHRTRICHTUNG_MR | 0x6306 | - | Auslesen der aktuell gewählten Fahrtrichtung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6306_D |
| SCHALTER_MR | 0x6310 | - | Auslesen der Schalterstati | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6310_D |
| ROTORPOSITION_MR | 0x6311 | - | Auslesen der Motorposition | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6311_D |
| FAHRWERTGEBER_MR | 0x6312 | - | Auslesen Fahrwertgeber | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6312_D |
| FAHRZEUG_MR | 0x6313 | STAT_FAHRZEUG | Aktueller Fahrzeugzustand | 0-n | - | high | unsigned int | TAB_MR_STATUS_FAHRZEUG | - | - | - | - | 22 | - | - |
| WASSERPUMPE_MR | 0x6314 | STAT_WASSERPUMPE_AKTIV | Status der Wasserpumpe: 1 = Aktiv, 0 = Nicht aktiv | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| ADAPTION_FAHRWERTGEBER_LESEN_MR | 0x6320 | - | Auslesen der Adaptionswerte des Fahrwertgebers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6320_D |
| ADAPTION_ROTOR_MR | 0x6321 | - | Lesen/Schreiben der Adaptionswerte des Rotors | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6321_D | RES_0x6321_D |
| ADAPTION_STROMSENSOR_LESEN_MR | 0x6322 | - | Auslesen der Adaptionswerte vom Stromsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6322_D |
| ADAPTION_SPANNUNG_LESEN_MR | 0x6323 | STAT_ADAPTION_SPANNUNG_OFFSET_WERT | Adaptierter Spannungs-Offset | V | - | high | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| ADAPTION_DRUCK_LESEN_MR | 0x6324 | - | Auslesender Bremsdruck-Adaptions-Werte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6324_D |
| ADAPTION_RADRADIUS_LESEN_MR | 0x6325 | STAT_ADAPTION_RADRADIUSKORREKTUR_WERT | Prozentuale Abweichung des Rad-Radius | % | - | high | signed int | - | 100.0 | 32768.0 | 0.0 | - | 22 | - | - |
| ADAPTIONSWERTE_LOESCHEN_MR | 0x632F | - | Löschen der Adaptionswerte | - | - | - | - | - | - | - | - | - | 2E | ARG_0x632F_D | - |
| BAUTEILSCHUTZ_MR | 0x633F | - | Ansteuern der BTS-Endstufen (nur zur Inbetriebnahme) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x633F_D | - |
| SME_VERSORGUNG_ANSTEUERN_MR | 0x6350 | - | Ansteuern 12V Versorgung SME | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6350_D | - |
| ELEKTRISCHE_WASSERPUMPE_ANSTEUERN_MR | 0x6351 | - | Ansteuerung der elektrischen Wasserpumpe (BTS2) | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6351_D | - |
| KUEHLWASSERLUEFTER_ANSTEUERN_MR | 0x6352 | - | Ansteuerung des Kühlwasserlüfters (BTS3) | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6352_D | - |
| BTS4_RESERVE_ANSTEUERN_MR | 0x6353 | - | Platzhalter für Ansteuerung BTS4 | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6353_D | - |
| HIST_KM_ALLG_MR | 0x6360 | - | Start_KM, KL15_CNT, RG_CNT | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6360_D |
| HIST_FAHRMODI_MR | 0x6361 | - | Nutzungsdauer der Fahrmodi | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6361_D |
| HIST_VFZG_MR | 0x6362 | - | Geschwindigkeitsklassierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6362_D |
| HIST_N_MD_MR | 0x6363 | - | Klassierfeld nmot vs. md | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6363_D |
| KLASSIERDATEN4_MR | 0x6364 | - | FASTA Feld#4, wenn benutzt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6364_D |
| KLASSIERDATEN5_MR | 0x6365 | - | FASTA Feld #5, wenn benutzt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6365_D |
| KLASSIERDATEN6_MR | 0x6366 | - | FASTA Feld #6, wenn benutzt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6366_D |
| KLASSIERDATEN7_MR | 0x6367 | - | FASTA Feld#7, wenn benutzt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6367_D |
| KLASSIERDATEN8_MR | 0x6368 | - | FASTA Feld#8, wenn benutzt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6368_D |
| KLASSIERDATEN9_MR | 0x6369 | - | FASTA Feld #9, wenn benutzt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6369_D |
| FAHRGESTELLNUMMER_MR | 0x6370 | - | Lesen und Schreiben der Fahrgestellnummer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6370_D | RES_0x6370_D |
| SERVICE_KMSTAND_MR | 0x6382 | - | Lesen/Schreiben des Service-KM-Stand | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6382_D | RES_0x6382_D |
| FAHRZEUGMODUS_MR | 0x6386 | STAT_FAHRZEUGMODUS | Aktueller Fahrzeugmodus | 0-n | - | high | unsigned char | TAB_MR_FZG_MODUS | - | - | - | - | 22 | - | - |
| ROHWERTE_MR | 0x6390 | - | interne Rohwerte zur Inbetriebnahme | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6390_D |
| ERWEITERTE_VERSIONEN_MR | 0x6392 | - | Auslesen der zusätzlichen Versions-Bezeichnungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6392_D |
| SUPPLIER_TRACING_DATA_MR | 0x6393 | STAT_TRACE_ID_TEXT | Ausgabe der Trace ID | TEXT | - | high | string[240] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CLASSMEMDATA | 0x6394 | - | Inhalte der Klassierfelder lesen, bei Bedarf Klassierkonfiguration schreiben | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6394_D | RES_0x6394_D |
| ADAPTION_FAHRWERTGEBER_MR | 0xF300 | - | Adaption des Fahrwertgebers | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ROTOROFFSET_ERMITTELN_MR | 0xF301 | - | Steuerung der Funtkion zur Rotor-Offset-Ermittlung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF301_R | RES_0xF301_R |
| ANZEIGE_UWB_WERTE | 0xF303 | - | Routine zum anzeigen  der momentanen UWB-Werte | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF303_R | RES_0xF303_R |

### TAB_MR_BTS_ID

| WERT | TEXT |
| --- | --- |
| 1 | BTS 1 - SME-Versorgung/Trenner |
| 2 | BTS 2 - Elektrische Wasserpumpe |
| 3 | BTS 3 - Kühlwasser-Lüfter |
| 4 | BTS 4 - Reserve |

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
| 0 | Modus 0 (ungültig) |
| 0xFF | Wert ungültig |

### TAB_MR_ROTOROFFSET_ERMITTELN

| WERT | TEXT |
| --- | --- |
| 0 | Automatische Offset-Bestimmung |
| 1 | Offset-Bestimmung mit Start-Taste beginnen |
| 2 | Während Offset-Bestimmung Start-Taste betätigt halten |

### TAB_MR_STATUS_FAHRZEUG

| WERT | TEXT |
| --- | --- |
| 0 | 0: Aus |
| 10 | 10: Vorlauf |
| 20 | 20: Abschaltpfadtest |
| 30 | 30: Fahrsperre |
| 40 | 40: Fahrfreigabe |
| 50 | 50: Ausrollen |
| 60 | 60: Nachlauf |
| 70 | 70: Abschaltung |
| 256 | Ungültiger Fahrzustand |

### TAB_MR_STATUS_ROTOROFFSET

| WERT | TEXT |
| --- | --- |
| 0 | 0: Offsetbestimmung nicht angefordert |
| 10 | 10: Motordrehzahl prüfen |
| 20 | 20: Stromrampe für Sensorkalibrierung |
| 30 | 30: Sensorkalibrierung |
| 40 | 40: Abschluss der Sensorkalibrierung |
| 50 | 50: Stromrampe für statorfeste Sollposition 90° |
| 60 | 60: statorfeste Sollposition 90° |
| 70 | 70: Rampe der statorfesten Sollposition von 90° nach 0° |
| 80 | 80: Offsetbestimmung 1 |
| 90 | 90: Warten |
| 100 | 100: Stromrampe für statorfeste Sollposition 270° |
| 110 | 110: statorfeste Sollposition 270° |
| 120 | 120: Rampe der statorfesten Sollposition von 270° nach 360° |
| 130 | 130: Offsetbestimmung 2 |
| 140 | 140: Offsetberechnung aus Offset 1 und Offset 2 |
| 255 | 255: Offsetbestimmung erfolgreich abgeschlossen |
| 256 | Ungültiger Status |

### TAB_MR_STATUS_ROTOROFFSET_ERROR

| WERT | TEXT |
| --- | --- |
| 0 | 0: Kein Fehler |
| 1 | 1: Strom unterhalb der Grenze |
| 2 | 2: Strom oberhalb der Grenze |
| 5 | 5: Drehzahl zu hoch |
| 6 | 6: Drehrichtung falsch |
| 7 | 7: Winkelfehler |
| 8 | 8: Timeout |
| 9 | 9: Offset unplausibel (90° -> 0°) |
| 10 | 10: Offset unplausibel (270° -> 0°) |
| 11 | 11: Offset unplausibel (90° -> 0° UND 270° -> 0°) |
| 12 | 12: Offset unplausibel (0° -> 0°) |
| 13 | 13: Offset unplausibel (90° -> 0° UND 0° -> 0°) |
| 14 | 14: Offset unplausibel (270° -> 0° UND 0° -> 0°) |
| 15 | 15: Offset unplausibel (alle Kombinationen) |
| 255 | 255: Anforderung zur Offsetermittlung zurückgenommen |
| 256 | Ungültiger Status-Fehler |

### TAB_MR_STATUS_ROTOROFFSET_UDS

| WERT | TEXT |
| --- | --- |
| 0 | 0: Noch nicht gestartet |
| 1 | 1: Läuft |
| 2 | 2: Mit Stop beendet |
| 4 | 4: Mit Timeout beendet |
| 255 | 255: Fehler |

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
