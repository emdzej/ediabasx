# icm_25.prg

## General

|  |  |
| --- | --- |
| File | icm_25.prg |
| Type | PRG |
| Jobs | 40 |
| Tables | 181 |
| Origin | BMW EF-630 Laengst |
| Revision | 3.021 |
| Author | BMW EF-311 Nikolov |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Längs und Querdynamik Management |  |  |
| ORIGIN | string | BMW EF-630 Laengst |  |  |
| REVISION | string | 3.021 |  |  |
| AUTHOR | string | BMW EF-311 Nikolov |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.52 |  |  |
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

### CALID_CVN_LESEN

OBD Calibration ID, CVN Calibration verification number UDS  : $22   ReadDataByIdentifier UDS  : $2541 CAL-ID Calibration ID and CVN Calibration verification number

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

### STATUS_VIN

HW_NR UDS  : $22   ReadDataByIdentifier UDS  : $F190 Sub-Parameter VIN Modus: Default

_No arguments._

### SG_VARIANTE_LESEN

Aktueller Steuergeraetevariante UDS  : $22   ReadDataByIdentifier UDS  : $F151 Sub-Parameter SG_VARIANTE Modus: Default

_No arguments._

### _HL_SW_VERSION_LESEN_LESEN

Aktuelle Highlevelsoftwareversion UDS  : $22   ReadDataByIdentifier UDS  : $5000 Sub-Parameter HL_SW_VERSION_LESEN Modus: Default

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

### ARG_0XA08D

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LENKWINKEL | + | - | ° | high | int | - | - | 100.0 | 1.0 | 0.0 | -15.0 | 15.0 | Der mit der Lenkradmesswaage gemesene Lenkradwinkel wird übergeben. Lenkeinschlag rechts entspricht einem negativen Winkelwert. Lenkeinschlag links entspricht einem positiven Winkelwert. |

### ARG_0XAB55

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EIGENDIAGNOSE | + | - | 0-n | - | char | - | TAB_HC_EIGENDIAGNOSE | - | - | - | 1.0 | 2.0 | Starten der Eigendiagnose der Spurwechselwarnung/Spurverlasswarnung HC |

### ARG_0XD140

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_HDC_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Stellung Taster HDC (0 = nicht betätigt , 1 = betätigt) |

### ARG_0XD142

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_PDC_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Stellung Taster PDC (0 = nicht betätigt , 1 = betätigt) |

### ARG_0XD14A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_PDC_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | LED PDC (0 = aus, 1 = an) |

### ARG_0XD17F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_HDC_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | LED HDC (0 = aus, 1 = an) |

### ARG_0XD610

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | high | unsigned char | - | TAB_FES_WIPPE | 1.0 | 1.0 | 0.0 | - | - | Taste der FES Wippe Vorne oder hinten |
| AKTION | 0-n | high | unsigned char | - | TAB_TASTER_AKTION | 1.0 | 1.0 | 0.0 | - | - | Aktion der Taste |
| STEUERN_TASTE_ZEIT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Ansteuerung der Taste über Zeit in ms |

### ARG_0XD613

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FES_MODUS | 0-n | high | unsigned char | - | TAB_MODUS_FAHRERLEBNIS | 1.0 | 1.0 | 0.0 | - | - | Steuern des FES Modus |

### ARG_0XD61A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_DSC_TASTER | 0-n | high | unsigned char | - | TAB_TASTER_AKTION | 1.0 | 1.0 | 0.0 | - | - | Simulation des DSC Tasters TAB_TASTER_AKTION |
| STEUERN_TASTE_ZEIT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Ansteuerung der Taste über Zeit in ms |

### ARG_0XD626

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_FES_LASTMODE | 0-n | high | unsigned char | - | TAB_MODUS_FAHRERLEBNIS | 1.0 | 1.0 | 0.0 | - | - | Aufstart Modus |
| STEUERN_FES_SLEEPTIME_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeit bei Kl15 aus |

### ARG_0XDB43

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TOPSIDEVIEW_TASTER_EIN | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Stellung Taster TopSideView (0 = nicht betätigt , 1 = betätigt) |

### ARG_0XDB98

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | char | - | TAB_ROLLENMODUS | - | - | - | - | - | Setzen / Rücksetzen Rollenmodus (2=Setzen Rollenmodus Innenraum; 1 = Setzen Werksrollenmodus; 0 =  Rücksetzen) |

### ARG_0XDBF9

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_LED | 0-n | - | char | - | TAB_LED_AUSSENSPIEGEL | - | - | - | - | - | Ansteuerung der LED im Spiegel |

### ARG_0XDBFA

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_VIBRATION | 0-n | - | char | - | TAB_AKTIV | 1.0 | 1.0 | 0.0 | - | - | Ansteuern der Vibration |

### ARG_0XDBFC

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AL_INITMODE | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Betriebsart für Init mode (1 = aktiviert; 0 = deaktiviert) |

### ARG_0XDBFF

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | - | int | - | TAB_ADAPTIVDATEN | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XDC2C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_HOEHENSTAND_VL_WERT | mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | -100.0 | 100.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand vorn links in mm. |

### ARG_0XDC2D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_HOEHENSTAND_VR_WERT | mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | -100.0 | 100.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand vorn rechts in mm. |

### ARG_0XDC2E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_HOEHENSTAND_HL_WERT | mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | -100.0 | 100.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand hinten links in mm. |

### ARG_0XDC2F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_HOEHENSTAND_HR_WERT | mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | -100.0 | 100.0 | Übergabe Offset Wert/Nullpunktabgleich für Sensor Höhenstand hinten rechts in mm. |

### ARG_0XDC32

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRD_PWR_EL_EPS | kW | - | char | - | - | 10.0 | 1.0 | 0.0 | -12.0 | 12.0 | Stellwert |

### ARG_0XDC38

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEVEL_VIBRATION_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 15.0 | Ansteuern der Vibration |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | - | - | - | - | supplierInfo |

### BF_SG_ZUSTANDSMASTER_AB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INTERNER_STEUERGERAETEZUSTAND_ECUM_STATE | 0-n | high | unsigned char | 0xF0 | TAB_ECUM_STATE | - | - | - | INTERNER_STEUERGERAETEZUSTAND_ECUM_STATE |
| STAT_OPERATION_MODE_OPMM_STATE | 0-n | low | unsigned char | 0x0F | TAB_OPMM_STATE | - | - | - | OPERATION_MODE_OPMM_STATE |

### BF_SG_ZUSTANDSMASTER_CD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_GRUND_RSTM_STATE | 0-n | high | unsigned char | 0xF0 | TAB_RSTM_STATE | - | - | - | RESET_GRUND_RSTM_STATE |
| STAT_VERSORGUNGSSPANNUNG | 0-n | low | unsigned char | 0x0F | TAB_VERSORGUNGSSPANNUNG | - | - | - | VERSORGUNGSSPANNUNG |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### DM_TAB_ROE_ACTIVATED_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Aktive Fehlermeldung deaktiviert |
| 1 | Aktive Fehlermeldung aktiviert |

### ENERGIESPARMODE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Normalmode |
| 1 | Fertigungsmode |
| 2 | Transportmode |
| 3 | Flashmode |

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

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FEHLERKLASSE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Keine Fehlerklasse verfuegbar |
| 1 | Ueberpruefung beim naechsten Werkstattbesuch |
| 2 | Ueberpruefung beim naechsten Halt |
| 4 | Ueberpruefung sofort erforderlich |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021C00 | Energiesparmode - aktiv | 0 |
| 0x02FF1C | Diagnosemaster - Dummy Application DTC | 1 |
| 0x03058A | QDMFzgZuPa-SBS Funktion Inkorrekter Rollenbetrieb erkannt | 0 |
| 0x030803 | FAS - Frontschutz - Automatische Deaktivierung Aktive Gefahrenbremsung | 0 |
| 0x030804 | FAS - Frontschutz - Anbremsen - Sicherheitsabschaltung | 0 |
| 0x030805 | FAS - Stauassistent - Sicherheitsabschaltung | 0 |
| 0x030806 | FAS - Parkfunktion Längsführung - Sicherheitsabschaltung | 0 |
| 0x030820 | FAS - Abschaltung - Unerwartete Reaktion eines Kommunikationspartners | 1 |
| 0x030852 | FAS - Systemgrenzen für Testbetrieb aufgeweitet | 0 |
| 0x480004 | HC Koordinator Haptik - Betriebsbereitschaft - Spurverlassenswarnung (TLC) nicht bereit | 0 |
| 0x480005 | HC2 Funktion - Betriebsbereitschaft - Klemmen-Steuerung | 0 |
| 0x480006 | Lokale Spannungsversorgung Unterspannung | 0 |
| 0x480007 | Lokale Spannungsversorgung Überspannung | 0 |
| 0x48000A | Codierung - Vergleich Fahrgestellnummer | 0 |
| 0x48000B | Codierung - Codierdatenfehler | 0 |
| 0x48000F | Aktivlenkung Funktion - Motorlage AFS ungültig | 0 |
| 0x480010 | HSR Funktion - Motorlage HSR ungültig | 0 |
| 0x480011 | Aktivlenkung Funktion - SZL Neuverbau | 0 |
| 0x480012 | Aktivlenkung Funktion - Stoerung Lenkwinkelsynchronistion | 0 |
| 0x480013 | Aktivlenkung Funktion - Pausenmodus und Fzg. rollt | 0 |
| 0x480014 | Aktivlenkung Funktion - Inaktiv und Fzg. rollt | 0 |
| 0x48001F | LDM Funktion - High-Level Abschaltung Hauptrechner | 0 |
| 0x480020 | LDM Funktion - High-Level Abschaltung Überwachungsrechner | 0 |
| 0x480021 | LDM Funktion - High-Level Sicherheitsabschaltung Überwachungsrechner | 0 |
| 0x480023 | LDM Funktion - High-Level Rücküberwachung | 0 |
| 0x480024 | LDM Funktion - High-Level Sicherheitsabschaltung Antrieb | 0 |
| 0x480025 | LDM Funktion - High-Level Sicherheitsabschaltung Bremse | 0 |
| 0x480026 | LDM Funktion - High-Level Stillstandsmanagement | 0 |
| 0x48002A | LDM Funktion - High-Level Bereitschaft Fahrpedal | 0 |
| 0x48002C | LDM Funktion - High-Level Betriebsbereitschaft Bremsensteuergerät | 0 |
| 0x48002D | LDM Funktion - High-Level Betriebsbereitschaft Kombi | 0 |
| 0x48002E | LDM Funktion - High-Level Betriebsbereitschaft Motorsteuergerät | 0 |
| 0x480032 | LDM Funktion - High-Level DSC ANZ unplausibel | 0 |
| 0x480033 | LDM Funktion - High-Level OBR Offset Gierrate | 0 |
| 0x480040 | Airbagsensorik Airbag Interface Controller nicht aufgestartet | 0 |
| 0x480041 | Airbagsensorik Airbag Interface Controller nicht funktionsfähig | 0 |
| 0x480046 | SBS Funktion - Aktiver Rollenmodus | 0 |
| 0x480048 | HC2 Funktion - Betriebsbereitschaft - Kamerasystem nicht bereit | 0 |
| 0x480049 | HC2 Funktion - Betriebsbereitschaft - Rückwärtige Radarsensoren nicht bereit | 0 |
| 0x48004A | HC Koordinator Haptik - Betriebsbereitschaft - Vibrationsaktuator Lenkrad nicht bereit | 0 |
| 0x48004B | HC2 Funktion - Betriebsbereitschaft - Warn-LEDs Aussenspiegel nicht bereit | 0 |
| 0x48004C | HC2 Funktion - Betriebsbereitschaft - Taster oder Funktionsbeleuchtung Spurwechselwarnung nicht bereit | 0 |
| 0x48004D | HC1 Funktion - Betriebsbereitschaft - Taster oder Funktionsbeleuchtung Spurverlassenswarnung nicht bereit | 0 |
| 0x48004F | HC2 Funktion - Betriebsbereitschaft - Fahrlichtsensor nicht bereit | 0 |
| 0x480051 | HC Koordinator Haptik - Betriebsbereitschaft - Strassenzustand nicht verfügbar | 0 |
| 0x480052 | HC2 Funktion - Betriebsbereitschaft - Blinkeransteuerung | 0 |
| 0x480067 | Höhenstandssensoren - Vorn links, Spannungsversorgung | 0 |
| 0x480068 | Höhenstandssensoren - Vorn links, Spannungsversorgung messen größer Maximum | 0 |
| 0x480069 | Höhenstandssensoren - Vorn links, Spannungsversorgung messen kleiner Minimum | 0 |
| 0x48006A | Höhenstandssensoren - Vorn rechts, Spannungsversorgung | 0 |
| 0x48006B | Höhenstandssensoren - Vorn rechts, Spannungsversorgung messen größer Maximum | 0 |
| 0x48006C | Höhenstandssensoren - Vorn rechts, Spannungsversorgung messen kleiner Minimum | 0 |
| 0x48006D | Höhenstandssensoren - Hinten links, Spannungsversorgung | 0 |
| 0x48006E | Höhenstandssensoren - Hinten links, Spannungsversorgung messen größer Maximum | 0 |
| 0x48006F | Höhenstandssensoren - Hinten links, Spannungsversorgung messen kleiner Minimum | 0 |
| 0x480070 | Höhenstandssensoren - Hinten rechts, Spannungsversorgung | 0 |
| 0x480071 | Höhenstandssensoren - Hinten rechts, Spannungsversorgung messen größer Maximum | 0 |
| 0x480072 | Höhenstandssensoren - Hinten rechts, Spannungsversorgung messen kleiner Minimum | 0 |
| 0x480073 | SBS Funktion - Beschleunigung - Adaptivdaten für Sensortoleranz auf Maximalwert | 0 |
| 0x480075 | Aktivlenkung Funktion - Fehlermodus | 0 |
| 0x480076 | Aktivlenkung Funktion - Zustand undefiniert | 0 |
| 0x480078 | Aktivlenkung Funktion - Werksmodus | 0 |
| 0x480079 | Aktivlenkung Funktion - Aktuatorbegrenzung gestört | 0 |
| 0x48007C | HC1 Funktion - Betriebsbereitschaft - Kamerasystem nicht bereit | 0 |
| 0x48007E | HC1 Funktion - Betriebsbereitschaft - Bremsregelsystem | 0 |
| 0x480080 | HC1 Funktion - Betriebsbereitschaft - EPS nicht bereit | 0 |
| 0x4800A0 | Steuergerät intern Rollrate aufgrund Sensordefekt | 0 |
| 0x4800A1 | Steuergerät intern Nickrate aufgrund Sensordefekt | 0 |
| 0x4800A2 | Steuergerät intern Gierrate aufgrund Sensordefekt | 0 |
| 0x4800A3 | Steuergerät intern redundante Gierrate Sensordefekt | 0 |
| 0x480100 | HSR Funktion - Stoerung Lenkwinkelsynchronistion | 0 |
| 0x48010D | Fahrdynamikschalter - Sport - Leitungsunterbrechung | 0 |
| 0x48010E | Fahrdynamikschalter - Komfort - Leitungsunterbrechung | 0 |
| 0x48010F | Dynamic Traction Control Taster - Leitungsunterbrechung | 0 |
| 0x480110 | HSR Funktion - Dynamik zu gering, Fehleramplitude zu groß | 0 |
| 0x480111 | Fahrdynamikschalter - Sport - Deaktivierung Handtaschen Funktion | 0 |
| 0x480112 | Fahrdynamikschalter - Komfort - Deaktivierung Handtaschen Funktion | 0 |
| 0x480113 | Dynamic Traction Control Taster - Deaktivierung Handtaschen Funktion | 0 |
| 0x480114 | Fahrdynamikschalter - Sperrung, aufgrund Fehler in Partnersteuergerät oder Reifendruckverlust | 0 |
| 0x480116 | Höhenstandssensoren - Abgleich, Nicht durchgeführt | 0 |
| 0x480117 | Höhenstandssensoren - Abgleich, Werte unplausibel | 0 |
| 0x48011A | SBS Funktion - Querbeschleunigungssensor - Redundanzfehler | 0 |
| 0x48011B | SBS Funktion - Querbeschleunigungssensor - Modellfehler, Sensor 1 | 0 |
| 0x48011C | SBS Funktion - Querbeschleunigungssensor - Signalqualität, Sensor 1 | 0 |
| 0x48011D | SBS Funktion - Querbeschleunigungssensor - Modellfehler, Sensor 2 | 0 |
| 0x48011E | SBS Funktion - Querbeschleunigungssensor - Signalqualität, Sensor 2 | 0 |
| 0x48011F | SBS Funktion - Gierratensensor - Redundanzfehler | 0 |
| 0x480121 | SBS Funktion - Gierratensensor - Modellfehler, Sensor 1 | 0 |
| 0x480122 | SBS Funktion - Gierratensensor - Signalqualität, Sensor 1 | 0 |
| 0x480123 | SBS Funktion - Gierratensensor - Modellfehler, Sensor 2 | 0 |
| 0x480124 | SBS Funktion - Gierratensensor - Signalqualität, Sensor 2 | 0 |
| 0x480125 | SBS Funktion - Längsbeschleunigungssensor - Modellfehler | 0 |
| 0x480126 | SBS Funktion - Längsbeschleunigungssensor - Signalqualität | 0 |
| 0x480128 | SBS Funktion - Lenkwinkel effektiv - Modellfehler | 0 |
| 0x480129 | SBS Funktion - Lenkwinkel effektiv - Randüberwachung | 0 |
| 0x48012A | SBS Funktion - Querbeschleunigungssensor - Diversitäres Rechnen | 0 |
| 0x48012B | SBS Funktion - Gierratensensor - Diversitäres Rechnen | 0 |
| 0x48012C | SBS Funktion - Längsbeschleunigungssensor - Diversitäres Rechnen | 0 |
| 0x48012D | SBS Funktion - Lenkwinkel Fahrer - Diversitäres Rechnen | 0 |
| 0x48012E | SBS Funktion - Lenkwinkel effektiv - Diversitäres Rechnen HL Software | 0 |
| 0x480131 | SBS Funktion - Diversitäres Rechnen VX | 0 |
| 0x480132 | Aktivlenkung Funktion - Falschcodierung, Drehrichtung AL | 0 |
| 0x480134 | SBS Funktion - Fahrtrichtung unsicher bei vx größer 2 m/s | 0 |
| 0x480135 | Aktivlenkung Funktion - Neuabgleich SZL | 0 |
| 0x480136 | Aktivlenkung Funktion - Schnelle Lenkwinkelsynchronisation | 0 |
| 0x480137 | HSR Funktion - Fahrzeug rollt im inaktiven Zustand | 0 |
| 0x480138 | HSR Funktion - Inaktiv und Fzg rollt | 0 |
| 0x480139 | HSR Funktion - Undefinierte Statemaschine Zustand | 0 |
| 0x48013B | HSR Funktion - Schnelle Lenkwinkelsynchronisation | 0 |
| 0x48013D | LDM Funktion - BBS Betriebsbereitschaft Ausgabe PCW | 0 |
| 0x48013E | LDM Funktion - BBS Betriebsbereitschaft Schalten PCW Vorwarnung | 0 |
| 0x48013F | LDM Funktion - BBS Betriebsbereitschaft Verstellen PCW Warnstufen | 0 |
| 0x480140 | LDM Funktion - BBS Betriebsbereitschaft Vorbefüllung Bremse | 0 |
| 0x480141 | LDM Funktion - BBS Betriebsbereitschaft Parametrieren DBC Bremse | 0 |
| 0x480142 | LDM Funktion - BBS Betriebsbereitschaft Schlupfregel Stabilisierung DSC | 0 |
| 0x480143 | LDM Funktion - BBS Betriebsbereitschaft Bedienung Tempomat | 0 |
| 0x480144 | LDM Funktion - BBS funktionale Deaktivierung | 0 |
| 0x480151 | Fahrdynamikschalter - Sport - Kurzschluss nach Masse | 0 |
| 0x480152 | Fahrdynamikschalter - Komfort - Kurzschluss nach Masse | 0 |
| 0x480153 | Dynamic Traction Control Taster - Kurzschluss nach Masse | 0 |
| 0x480154 | HSR Funktion - SG im Errormodus | 0 |
| 0x48015F | LDM Funktion - LDM Stillstandsmanagement nicht verfügbar | 0 |
| 0x480160 | Codierung - Steuergeraet nicht codiert | 0 |
| 0x480161 | Codierung - Transaktion gescheitert | 0 |
| 0x480162 | Codierung - Signatur fehlerhaft | 0 |
| 0x480163 | Codierung - Falsches Fahrzeug | 0 |
| 0x480164 | Codierung - ungueltige Daten | 0 |
| 0x482605 | Kodierdaten von ZFM nicht plausibel | 0 |
| 0x482608 | ARS Servicequalifier Funktionsfehler oder defekt | 0 |
| 0x482609 | SBS Funktion - Längsbeschleunigungssensor - Fehlertoleranz auf Signal | 0 |
| 0x48260F | SBS Funktion - Lenkwinkel Fahrer - Adaptivdaten für Lenkwinkeltoleranz auf Maximalwert | 0 |
| 0x482611 | LDM Funktion - LDM Stillstandsmanagement Bremse | 0 |
| 0x482614 | SBS Funktion - Überwachungsschwellen der Querbeschleunigungsüberwachung über Kodierung aufgeweitet | 0 |
| 0x482615 | LDM Funktion - iBrake Fehler Funktionsbeleuchtung | 0 |
| 0x482616 | LDM Funktion - LDM Empfangsschicht Unterbrechung | 0 |
| 0x482617 | LDM Funktion - LDM Sensortask Rechenzeitüberschreitung | 0 |
| 0x482618 | Fahrdynamikschalter - Komfort - Tracker-Spannung | 0 |
| 0x482619 | Fahrdynamikschalter - Sport - Tracker-Spannung | 0 |
| 0x48261A | Dynamic Traction Control Taster - Tracker-Spannung | 0 |
| 0x48261C | SBS Funktion - Gierratensensor - Fehleramplitude aufgrund Fehlerverdacht | 0 |
| 0x48261D | SBS Funktion - Querbeschleunigungssensor - Fehleramplitude auf Querbeschleunigungsnutzsignal aufgrund Fehlerverdacht ay | 0 |
| 0x48261E | SBS Funktion - Längsbeschleunigungssensor - Fehleramplitude aufgrund Fehlerverdacht | 0 |
| 0x48261F | SBS Funktion - Lenkwinkel effektiv - Fehleramplitude aufgrund Fehlerverdacht | 0 |
| 0x48262B | HC2 Funktion - Betriebsbereitschaft - Aussen-Spiegel Warnung rechts | 0 |
| 0x482633 | LDM Funktion - SLD Sicherheit Sicherheitsabschaltung | 0 |
| 0x482635 | LDM Funktion - HDC Sicherheitsabschaltung | 0 |
| 0x482638 | LDM Funktion - Sicherheit Abschaltung durch Sicherheitskoordinator Betriebsmodus FMK | 0 |
| 0x482639 | LDM Funktion  High-Level SIK Abschaltung Sicherheit angefordert | 0 |
| 0x482643 | HC2 Funktion - Betriebsbereitschaft - Aussen-Spiegel Warnung nur links | 0 |
| 0x482701 | Steuergerät intern CPU Startup Controllerüberwachung | 0 |
| 0x482702 | Steuergerät intern CPU CRC-Prüfung über PCP-Codebereich | 0 |
| 0x482703 | Steuergerät intern CPU Parameter Überwachungen | 0 |
| 0x482705 | Steuergerät intern CPU RAM Doppelbitfehler | 0 |
| 0x482706 | Steuergerät intern CPU Hardware Ausnahmebehandlung Fatal | 0 |
| 0x482707 | Steuergerät intern CPU Hardware Ausnahmebehandlung Non-Fatal | 0 |
| 0x482708 | Steuergerät intern CPU Hardware Ausnahmebehandlung Arithmetic | 0 |
| 0x482709 | Steuergerät intern CPU Hardware Ausnahmebehandlung FPU | 0 |
| 0x48270B | Steuergerät intern Externer Watchdog RST5 | 0 |
| 0x48270C | Steuergerät intern Externer Watchdog RSTC | 0 |
| 0x48270D | Steuergerät intern Hardware Abschaltpfadfehler | 0 |
| 0x48270E | Steuergerät intern Task Laufzeitschutzverletzung | 0 |
| 0x48270F | Steuergerät intern Speicherschutzverletzung Basis Software | 0 |
| 0x482710 | Steuergerät intern Speicherschutzverletzung Applikation Software | 0 |
| 0x482711 | Hill Descent Control Taster Leitungsunterbrechung | 0 |
| 0x482712 | Hill Descent Control Taster Kurzschluss nach Masse | 0 |
| 0x482713 | Hill Descent Control Taster Deaktivierung Handtaschen Funktion | 0 |
| 0x482714 | PDC Leitungsunterbrechung | 0 |
| 0x482715 | PDC Kurzschluss nach Masse | 0 |
| 0x482716 | PDC - Deaktivierung Handtaschen Funktion | 0 |
| 0x482717 | Gierratensensor, PsiP Sensor 1 Sporadischer Fehler | 0 |
| 0x482718 | Gierratensensor, PsiP Sensor 1 Permanenter Fehler | 0 |
| 0x48271C | Gierratensensor, PsiP Sensor 2 Sporadischer Fehler | 0 |
| 0x48271D | Gierratensensor, PsiP Sensor 2 Permanenter Fehler | 0 |
| 0x482721 | Längsbeschleunigungssensor, AX Sporadischer Fehler | 0 |
| 0x482722 | Längsbeschleunigungssensor, AX Permanenter Fehler | 0 |
| 0x482724 | Nickratensensor Sporadischer Fehler | 0 |
| 0x482725 | Nickratensensor Permanenter Fehler | 0 |
| 0x48272A | Querbeschleunigungssensor, AY Sensor 1 Sporadischer Fehler | 0 |
| 0x48272B | Querbeschleunigungssensor, AY Sensor 1 Permanenter Fehler | 0 |
| 0x48272D | Querbeschleunigungssensor, AY Sensor 2 Sporadischer Fehler | 0 |
| 0x48272E | Querbeschleunigungssensor, AY Sensor 2 Permanenter Fehler | 0 |
| 0x482730 | Vertikalbeschleunigungssensor, AZ Sporadischer Fehler | 0 |
| 0x482731 | Vertikalbeschleunigungssensor, AZ Permanenter Fehler | 0 |
| 0x482734 | Wankratensensor Sporadischer Fehler | 0 |
| 0x482735 | Wankratensensor Permanenter Fehler | 0 |
| 0x48273C | LDM Funktion - LDM Software-Fehler | 0 |
| 0x482776 | Autosar - StandardCore - CPU - Prozessor - Ungültiger Befehl | 0 |
| 0x482777 | Autosar - StandardCore - CPU - Prozessor - Übersetzung fehlt | 0 |
| 0x48277B | LDM Funktion - Navigationsdaten fehlerhaft | 0 |
| 0x48277C | LDM Funktion Anfahrbereitschaft nicht erfüllt | 1 |
| 0x48277D | LDM Funktion FAS Bedienfeld fehlerhaft | 1 |
| 0x48277E | LDM Funktion HDC Bedienfeld fehlerhaft | 1 |
| 0x48277F | LDM Funktion Fahreranwesenheitssenorik fehlerhaft | 1 |
| 0x48278F | LDM Funktion High Level Betriebsbereitschaft KAFAS | 1 |
| 0x482790 | LDM Funktion High Level Codierung Fahrfunktion | 1 |
| 0x482791 | LDM Funktion High Level Navigationsdaten fehlerhaft | 1 |
| 0x482793 | Höhenstandssensoren - Vorn links - außerhalb Spezifikation | 0 |
| 0x482794 | Höhenstandssensoren - Vorn rechts - außerhalb Spezifikation | 0 |
| 0x482795 | Höhenstandssensoren - Hinten links - außerhalb Spezifikation | 0 |
| 0x482796 | Höhenstandssensoren - Hinten rechts - außerhalb Spezifikation | 0 |
| 0x482797 | M-Drive - EDC - Leitungsunterbrechung | 0 |
| 0x482798 | M-Drive - EDC - Kurzschluss nach Masse | 0 |
| 0x482799 | M-Drive - EDC - Tracker-Spannung | 0 |
| 0x48279B | Globale Spannungsversorgung Unterspannung extern | 0 |
| 0x48279C | Globale Spannungsversorgung Überspannung extern | 0 |
| 0x48279D | SBS Funktion - Rollrate - Diversitaeres Rechnen HL-Software | 0 |
| 0x48279E | SBS Funktion - Rollrate - Signalueberwachung: Modellfehler | 0 |
| 0x48279F | SBS Funktion - Rollrate - Signalueberwachung: Signalqualitaet ungenuegend | 0 |
| 0x4827A1 | SBS Funktion - Nickrate - Diversitaeres Rechnen HL-Software | 0 |
| 0x4827A2 | SBS Funktion - Nickrate - Signalueberwachung: Modellfehler | 0 |
| 0x4827A3 | SBS Funktion - Nickrate - Signalueberwachung: Signalqualitaet ungenuegend | 0 |
| 0x4827A5 | SBS Funktion - Vertikalbeschleunigung - Diversitaeres Rechnen HL-Software | 0 |
| 0x4827A6 | SBS Funktion - Vertikalbeschleunigung - Signalueberwachung: Modellfehler | 0 |
| 0x4827A7 | SBS Funktion - Vertikalbeschleunigung - Signalueberwachung: Signalqualitaet ungenuegend | 0 |
| 0x4827A9 | SBS Funktion - Vertikalbeschleunigung - Signaltoleranz aufgrund nicht ausgeführtem Initialisierung | 0 |
| 0x4827AA | Autosar - StandardCore - CAN - defekt | 0 |
| 0x4827AB | Autosar - StandardCore - Netzwerkmanagement - defekt | 0 |
| 0x4827AC | Autosar - StandardCore - ECU - defekt | 0 |
| 0x4827AD | Autosar - StandardCore - Flash - defekt | 0 |
| 0x4827AE | Autosar - StandardCore - MCU - defekt | 0 |
| 0x4827AF | Autosar - StandardCore - WDG - defekt | 0 |
| 0x4827B0 | Autosar - StandardCore - CPU - defekt | 0 |
| 0x4827B1 | Steuergerät intern AD-Wandler Spannungsüberwachung fehlerhaft | 0 |
| 0x4827B4 | Lokale Spannungsversorgung ICM Keine FlexRay-Kommunikation Unterspannung | 0 |
| 0x4827B5 | Steuergerät intern Task Ablaufverletzung | 0 |
| 0x4827B6 | Steuergerät intern Task Redundanzfehler | 0 |
| 0x4827B7 | Steuergerät intern Inertialsensor CRC Fehler | 0 |
| 0x4827B8 | Steuergerät intern Sensor Bandendeabgleich fehlt | 0 |
| 0x4827B9 | LDM Funktion HighLevel Betriebsbereitschaft Parkbremse | 0 |
| 0x4827BA | LDM Funktion HighLevel Betriebsbereitschaft ICM | 0 |
| 0x4827BB | Steuergerät intern Software Datenübergabe vom Startup-Block (Gruppe) | 0 |
| 0x4827BC | Steuergerät intern Software Datenübergabe vom Startup-Block (Info) | 0 |
| 0x4827BE | Steuergerät intern Software Datenübergabe vom Startup-Block (Typ) | 0 |
| 0x4827BF | LDM Funktion HighLevel Betriebsbereitschaft ACC-Sensorik | 0 |
| 0x4827C1 | Steuergerät intern CPU Protection Hook | 0 |
| 0x4827C2 | LDM Funktion High-Level Plausibilisierung Richtung Vorwaerts | 0 |
| 0x4827C3 | LDM Funktion  High-Level SIK Abschaltung durchgeführt | 0 |
| 0x4827C4 | LDM Funktion  High-Level SIK interner Fehler | 0 |
| 0x4827C8 | Steuergerät intern Interne Referenzspannung zu hoch | 0 |
| 0x4827C9 | Steuergerät intern Interne Referenzspannung zu niedrig | 0 |
| 0x4827CC | LDM Funktion - High-Level Abschaltung SIH | 0 |
| 0x4827CD | LDM Funktion - High-Level Abschaltung USI | 0 |
| 0x4827CF | Globale Spannungsversorgung Unterspannung intern | 0 |
| 0x4827D0 | Steuergerät intern HW-Spannungsüberwachungslatch Rücksetzung nicht möglich | 0 |
| 0x4827D1 | Steuergerät intern HW-Spannungsüberwachungslatch setzen nicht möglich | 0 |
| 0x4827D2 | Steuergerät intern Unplausibler Zustand HW-Pins VMO1 im Abschaltpfad | 0 |
| 0x4827D3 | Steuergerät intern - Unplausibler Zustand HW-Pins FR_BGE_Off im Abschaltpfad | 0 |
| 0x4827D4 | Steuergerät intern Unerlaubter Zustand HW-Pins VMO1 im Abschaltpfad | 0 |
| 0x4827D5 | Steuergerät intern Undefinierter Zustand während HW-Spannungsüberwachungslatch-Test | 0 |
| 0x4827D6 | Steuergerät intern HW-Spannungsüberwachung erkennt keine Überspannung | 0 |
| 0x4827D7 | Steuergerät intern HW-Spannungsüberwachungstest Timeout | 0 |
| 0x4827D8 | Steuergerät intern Startuptest Abschaltpfad WDA-Pin | 0 |
| 0x4827D9 | Steuergerät intern Startuptest Abschaltpfad FR_BGE-Signal ungültig | 0 |
| 0x4827DA | Steuergerät intern Flash PFlash Doppelbitfehler | 0 |
| 0x4827DC | Steuergerät intern Flash DFlash Doppelbitfehler | 0 |
| 0x4827DE | Steuergerät intern PCP Peripheriecontroller Trap Fehler | 0 |
| 0x4827DF | Globale Spannungsversorgung Überspannung intern | 0 |
| 0x4827E0 | Autosar - StandardCore - Analog-Digitalwandler - defekt | 0 |
| 0x4827E1 | Top - Side View Camera Taster Leitungsunterbrechung | 0 |
| 0x4827E2 | Top - Side View Camera Taster Kurzschluss nach Masse | 0 |
| 0x4827E4 | Hill Descent Control Taster LED Kurzschluss nach Masse | 0 |
| 0x4827E5 | Hill Descent Control Taster LED Kurzschluss nach Plus | 0 |
| 0x4827E6 | Hill Descent Control Taster LED Leitungsunterbrechnung | 0 |
| 0x4827E7 | PDC LED Kurzschluss nach Masse | 0 |
| 0x4827E8 | PDC LED Kurzschluss nach Plus | 0 |
| 0x4827E9 | PDC LED Leitungsunterbrechung | 0 |
| 0x4827EA | Steuergerät intern Überspannung VBG20 Plausibilisierung ADC | 0 |
| 0x4827EB | Steuergerät intern Überspannung VBG21 Plausibilisierung ADC | 0 |
| 0x4827EC | Steuergerät intern Unterspannung VBG20 Plausibilisierung ADC | 0 |
| 0x4827ED | Steuergerät intern Unterspannung VBG21 Plausibilisierung ADC | 0 |
| 0x4827EE | M-Drive - EPS - Leitungsunterbrechung | 0 |
| 0x4827EF | M-Drive - EPS - Kurzschluss nach Masse | 0 |
| 0x4827F1 | M-Drive - EPS - Tracker-Spannung | 0 |
| 0x4827F2 | Steuergerät intern Safety Driver - Opcode-Check Fehlererkennung | 0 |
| 0x4827F3 | FAS Signalfehler – Undefinierter Inhalt oder unzureichende Qualität | 1 |
| 0x4827FA | Gierratensensor PsiP Sensor 1 Fehler | 0 |
| 0x4827FB | Längsbeschleunigungssensor AX Fehler | 0 |
| 0x4827FC | Querbeschleunigungssensor AY Sensor 1 Fehler | 0 |
| 0x4827FD | Temperatursensor Plausibilität | 0 |
| 0x4827FE | Temperatursensor Wertebereich Verletzung | 0 |
| 0x4827FF | Sensorik Digitalteil Fehler | 0 |
| 0x482800 | Sensorik Überspannung | 0 |
| 0x482801 | Sensorik Kommunikationsfehler | 0 |
| 0x482802 | Sensorik Watchdog Fehler | 0 |
| 0xD0041F | Busfehler (Flexray) - Physikalischer Bus Fehler | 0 |
| 0xD00420 | Busfehler (Flexray) - Controller Fehler | 0 |
| 0xD0046A | Busfehler (Private CAN) - Bus Performance | 0 |
| 0xD00472 | Busfehler (Private CAN) - Bus OFF | 0 |
| 0xD00BFF | Diagnosemaster - Dummy Network DTC | 1 |
| 0xD00C02 | Busfehler (S/SF-CAN) - Bus Performance | 0 |
| 0xD00C0A | Busfehler (S/SF-CAN) - Bus OFF | 0 |
| 0xD01411 | Botschaftsfehler (Sensor Daten Frontraumüberwachung, ID: SEN_DT_HDWOBS) - Timeout | 1 |
| 0xD01413 | Botschaftsfehler (Sensor Daten Frontraumüberwachung, ID: SEN_DT_HDWOBS) - Alive | 1 |
| 0xD01418 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Timeout | 1 |
| 0xD01419 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Checksumme | 1 |
| 0xD0141A | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Alive | 1 |
| 0xD01428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) - Timeout | 1 |
| 0xD0142C | Signalfehler (Außentemperatur, ID: A_TEMP) - Ungültig | 1 |
| 0xD0142D | Botschaftsfehler (Konfiguration DSC, ID: SU_DSC) - Timeout | 1 |
| 0xD0142F | Signalfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Qualifier | 1 |
| 0xD01430 | Signalfehler (Konfiguration DSC, ID: SU_DSC) - Ungültig | 1 |
| 0xD01431 | Signalfehler (Konfiguration DSC, ID: SU_DSC) - Undefiniert | 1 |
| 0xD01432 | Botschaftsfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Timeout | 1 |
| 0xD01433 | Botschaftsfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Checksumme | 1 |
| 0xD01436 | Botschaftsfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Alive | 1 |
| 0xD01437 | Signalfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Ungültig | 1 |
| 0xD01438 | Signalfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Undefiniert | 1 |
| 0xD01439 | Botschaftsfehler (Lenkwinkel LWS Oben, ID: STEA_LWS_TOP) - Timeout | 1 |
| 0xD0143C | Botschaftsfehler (Lenkwinkel LWS Oben, ID: STEA_LWS_TOP) - Checksumme | 1 |
| 0xD0143D | Botschaftsfehler (Lenkwinkel LWS Oben, ID: STEA_LWS_TOP) - Alive | 1 |
| 0xD0143F | Signalfehler (Lenkwinkel LWS Oben, ID: STEA_LWS_TOP) - Ungültig | 1 |
| 0xD01440 | Signalfehler (Lenkwinkel LWS Oben, ID: STEA_LWS_TOP) - Undefiniert | 1 |
| 0xD01441 | Botschaftsfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Timeout | 1 |
| 0xD01442 | Signalfehler (Bedienung Fahrwerk, ID: BEDIENUNG_FAHRWERK) - Ungültig | 1 |
| 0xD01443 | Signalfehler (Bedienung Fahrwerk, ID: BEDIENUNG_FAHRWERK) - Undefiniert | 1 |
| 0xD01444 | Botschaftsfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) - Timeout | 1 |
| 0xD01445 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Checksumme | 1 |
| 0xD01448 | Signalfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) - Ungültig | 1 |
| 0xD0144E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Ungültig | 1 |
| 0xD0144F | Botschaftsfehler (Abstandsmeldung PDC Hinten, ID: GAP_PDC_RS) - Timeout | 1 |
| 0xD01450 | Signalfehler (Blinken, ID: BLINKEN) - Ungültig | 1 |
| 0xD01451 | Botschaftsfehler (Blinken, ID: BLINKEN) - Timeout | 1 |
| 0xD01476 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Ungültig | 1 |
| 0xD01482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Timeout | 1 |
| 0xD01484 | Botschaftsfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) - Alive | 1 |
| 0xD0148A | Botschaftsfehler (Status M-Drive 2, ID: ST_MDRV_2) - Timeout | 1 |
| 0xD0148C | Botschaftsfehler (Status M-Drive 2, ID: ST_MDRV_2) - Alive | 1 |
| 0xD0148D | Signalfehler (Status M-Drive 2, ID: ST_MDRV_2) - Ungültig | 1 |
| 0xD0148E | Signalfehler (Status M-Drive 2, ID: ST_MDRV_2) -  Undefiniert | 1 |
| 0xD01494 | Botschaftsfehler (Fahrzeugtyp, ID: FAHRZEUGTYP) - Timeout | 1 |
| 0xD01495 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Checksumme | 1 |
| 0xD01496 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Alive | 1 |
| 0xD01498 | Signalfehler (Fahrzeugtyp, ID: FAHRZEUGTYP) - Ungültig | 1 |
| 0xD01499 | Signalfehler (Fahrzeugtyp, ID: FAHRZEUGTYP) - Undefiniert | 1 |
| 0xD0149B | Signalfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) - Qualifier | 1 |
| 0xD0149D | Signalfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Qualifier | 1 |
| 0xD0149E | Signalfehler (Status Funktion PDC, ID: ST_FN_PDC) - Qualifier | 1 |
| 0xD014A1 | Signalfehler (Ist Position EPS, ID: AVL_PO_EPS) - Qualifier | 1 |
| 0xD014A2 | Signalfehler (Lenkwinkel LWS Oben, ID: STEA_LWS_TOP) - Qualifier | 1 |
| 0xD014AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) - Timeout | 1 |
| 0xD014B2 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Ungültig | 1 |
| 0xD014B3 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Undefiniert | 1 |
| 0xD014B6 | Signalfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Ungültig | 1 |
| 0xD014D6 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Timeout | 1 |
| 0xD014D7 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Checksumme | 1 |
| 0xD014D8 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Alive | 1 |
| 0xD014DC | Signalfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Ungültig | 1 |
| 0xD014DD | Signalfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Undefiniert | 1 |
| 0xD014E5 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Checksumme | 1 |
| 0xD014F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Timeout | 1 |
| 0xD014F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Ungültig | 1 |
| 0xD014F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Timeout | 1 |
| 0xD014F9 | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Checksumme | 1 |
| 0xD014FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Alive | 1 |
| 0xD014FC | Signalfehler (Klemmen, ID: KLEMMEN) - Ungültig | 1 |
| 0xD014FD | Signalfehler (Klemmen, ID: KLEMMEN) - Undefiniert | 1 |
| 0xD01508 | Signalfehler (Status Funktion PDC, ID: ST_FN_PDC) - Ungültig | 1 |
| 0xD01509 | Signalfehler (Status Funktion PDC, ID: ST_FN_PDC) - Undefiniert | 1 |
| 0xD01513 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Alive | 1 |
| 0xD01514 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 00, ID: DISP_CC_DRDY_00) - Ungültig | 1 |
| 0xD01515 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 01, ID: DISP_CC_DRDY_01) - Ungültig | 1 |
| 0xD0151A | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) - Ungültig | 1 |
| 0xD01532 | Botschaftsfehler (Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) - Timeout | 1 |
| 0xD01536 | Signalfehler (Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) - Ungültig | 1 |
| 0xD01537 | Signalfehler (Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) - Undefiniert | 1 |
| 0xD0153C | Signalfehler (Anzeige Checkcontrol Fahrdynamik 02, ID: DISP_CC_DRDY_02) - Ungültig | 1 |
| 0xD0153D | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 00, ID: DISP_CC_DRDY_00) - Timeout | 1 |
| 0xD01546 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 00, ID: DISP_CC_DRDY_00) - Alive | 1 |
| 0xD01547 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 00, ID: DISP_CC_DRDY_00) - Checksumme | 1 |
| 0xD01552 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Ungültig | 1 |
| 0xD01553 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Undefiniert | 1 |
| 0xD01557 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Timeout | 1 |
| 0xD01558 | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Timeout | 1 |
| 0xD01559 | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Checksumme | 1 |
| 0xD0155A | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Alive | 1 |
| 0xD0155E | Signalfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Ungültig | 1 |
| 0xD0156C | Signalfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Ungültig | 1 |
| 0xD0156D | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Timeout | 1 |
| 0xD01570 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Timeout | 1 |
| 0xD01571 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Checksumme | 1 |
| 0xD01572 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Alive | 1 |
| 0xD01575 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 01, ID: DISP_CC_DRDY_01) - Timeout | 1 |
| 0xD01577 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Qualifier | 1 |
| 0xD0157A | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Ungültig | 1 |
| 0xD0157B | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Undefiniert | 1 |
| 0xD01580 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 01, ID: DISP_CC_DRDY_01) - Alive | 1 |
| 0xD01581 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 01, ID: DISP_CC_DRDY_01) - Checksumme | 1 |
| 0xD01584 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Ungültig | 1 |
| 0xD01585 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Undefiniert | 1 |
| 0xD01586 | Botschaftsfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) - Timeout | 1 |
| 0xD0158A | Signalfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) - Ungültig | 1 |
| 0xD0158B | Signalfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) - Undefiniert | 1 |
| 0xD0158C | Botschaftsfehler (Relativzeit, ID: RELATIVZEIT) - Timeout | 1 |
| 0xD0158E | Signalfehler (Abstandsmeldung PDC Hinten, ID: GAP_PDC_RS) - Ungültig | 1 |
| 0xD01590 | Signalfehler (Relativzeit, ID: RELATIVZEIT) - Ungültig | 1 |
| 0xD01591 | Signalfehler (Relativzeit, ID: RELATIVZEIT) - Undefiniert | 1 |
| 0xD015A0 | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) - Timeout | 1 |
| 0xD015A4 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Ungültig | 1 |
| 0xD015A5 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Undefiniert | 1 |
| 0xD015A6 | Botschaftsfehler (Status ARS, ID: ST_ARS) - Timeout | 1 |
| 0xD015A7 | Botschaftsfehler (Status ARS, ID: ST_ARS) - Checksumme | 1 |
| 0xD015A8 | Botschaftsfehler (Status ARS, ID: ST_ARS) - Alive | 1 |
| 0xD015AA | Signalfehler (Status ARS, ID: ST_ARS) - Ungültig | 1 |
| 0xD015AB | Signalfehler (Status ARS, ID: ST_ARS) - Undefiniert | 1 |
| 0xD015AC | Botschaftsfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) - Timeout | 1 |
| 0xD015B0 | Signalfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) - Ungültig | 1 |
| 0xD015B1 | Signalfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) - Undefiniert | 1 |
| 0xD015BC | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Timeout | 1 |
| 0xD015BD | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Checksumme | 1 |
| 0xD015BE | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Alive | 1 |
| 0xD015C2 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Ungültig | 1 |
| 0xD015C3 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Undefiniert | 1 |
| 0xD015C4 | Botschaftsfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Timeout | 1 |
| 0xD015C5 | Botschaftsfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Checksumme | 1 |
| 0xD015C6 | Botschaftsfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Alive | 1 |
| 0xD015C8 | Signalfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Ungültig | 1 |
| 0xD015C9 | Signalfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Undefiniert | 1 |
| 0xD015CA | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Timeout | 1 |
| 0xD015CB | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Checksumme | 1 |
| 0xD015CC | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Alive | 1 |
| 0xD015D0 | Signalfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Ungültig | 1 |
| 0xD015D1 | Signalfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Undefiniert | 1 |
| 0xD015DC | Botschaftsfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) - Timeout | 1 |
| 0xD015DE | Botschaftsfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) - Alive | 1 |
| 0xD015FC | Botschaftsfehler (Status Helligkeit Umgebung, ID: BRIG_SURR) Timeout | 1 |
| 0xD015FD | Botschaftsfehler (Daten Fahrspurerkennung 4, ID: DT_LNDT_4) Timeout | 1 |
| 0xD015FE | Botschaftsfehler (Daten Fahrspurerkennung 5, ID: DT_LNDT_5) Timeout | 1 |
| 0xD01602 | Botschaftsfehler (Status Servotronic ECO, ID: ST_SVT_ECO) - Timeout | 1 |
| 0xD01604 | Botschaftsfehler (Status Servotronic ECO, ID: ST_SVT_ECO) - Alive | 1 |
| 0xD01608 | Signalfehler (Status Servotronic ECO, ID: ST_SVT_ECO) - Ungültig | 1 |
| 0xD01609 | Signalfehler (Status Servotronic ECO, ID: ST_SVT_ECO) - Undefiniert | 1 |
| 0xD01628 | Botschaftsfehler (Status Lenkung Vorderachse, ID: ST_STE_FTAX) - Timeout | 1 |
| 0xD01629 | Botschaftsfehler (Status Lenkung Vorderachse, ID: ST_STE_FTAX) - Checksumme | 1 |
| 0xD0162A | Botschaftsfehler (Status Lenkung Vorderachse, ID: ST_STE_FTAX) - Alive | 1 |
| 0xD01641 | Signalfehler (Status Helligkeit Umgebung, ID: BRIG_SURR) Ungültig | 1 |
| 0xD01642 | Signalfehler (Daten Fahrspurerkennung 4, ID: DT_LNDT_4) Ungültig | 1 |
| 0xD01643 | Signalfehler (Daten Fahrspurerkennung 5, ID: DT_LNDT_5) Ungültig | 1 |
| 0xD01646 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Timeout | 1 |
| 0xD01647 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Checksumme | 1 |
| 0xD01648 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Alive | 1 |
| 0xD0164C | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Ungültig | 1 |
| 0xD0164D | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Undefiniert | 1 |
| 0xD01658 | Botschaftsfehler (Status Reifen, ID: ST_TYR) - Timeout | 1 |
| 0xD01659 | Botschaftsfehler (Status Reifen, ID: ST_TYR) - Checksumme | 1 |
| 0xD0165A | Botschaftsfehler (Status Reifen, ID: ST_TYR) - Alive | 1 |
| 0xD01660 | Botschaftsfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) - Timeout | 1 |
| 0xD01661 | Botschaftsfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) - Checksumme | 1 |
| 0xD01662 | Botschaftsfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) - Alive | 1 |
| 0xD01665 | Signalfehler (Abstandsmeldung PDC Hinten, ID: GAP_PDC_RS) - Undefiniert | 1 |
| 0xD01666 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) - Ungültig | 1 |
| 0xD01667 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) - Qualifier | 1 |
| 0xD01669 | Signalfehler (Stellanforderung Parkbremse, ID: PRQ_PBRK) - Undefiniert | 1 |
| 0xD01677 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Qualifier | 1 |
| 0xD0167B | Botschaftsfehler (Anfrage Aktivierung Funktion Parken, ID: RQ_ACTVN_FN_PKG_2) Timeout | 1 |
| 0xD0167D | Botschaftsfehler (Einheiten BN2020, ID: EINHEITEN_BN2020) Timeout | 1 |
| 0xD0167F | Botschaftsfehler (Daten Elektrische-Lenkung, ID: DT_EST) Timeout | 1 |
| 0xD01681 | Botschaftsfehler (Night-Vision Frontraumüberwachung, ID: NIVI_HDWOBS) - Timeout | 1 |
| 0xD01691 | Botschaftsfehler (Status Heckspoiler BN2020, ID: ST_RSP_BN2020) Timeout | 1 |
| 0xD01697 | Botschaftsfehler (Status System Parken 2, ID: ST_SY_PKG_2) Timeout | 1 |
| 0xD0169B | Botschaftsfehler (Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Timeout | 1 |
| 0xD016A5 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 02, ID: DISP_CC_DRDY_02) - Timeout | 1 |
| 0xD016A7 | Botschaftsfehler (Abstandsmeldung PDC Vorne, ID: GAP_PDC_FS) - Timeout | 1 |
| 0xD016A9 | Botschaftsfehler (Status Spurverlassenswarnsystem, ID: ST_TLC) - Timeout | 1 |
| 0xD016AB | Signalfehler (Abstandsmeldung PDC Vorne, ID: GAP_PDC_FS) - Ungültig | 1 |
| 0xD016AD | Signalfehler (Abstandsmeldung PDC Vorne, ID: GAP_PDC_FS) - Undefiniert | 1 |
| 0xD016B3 | Botschaftsfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Timeout | 1 |
| 0xD016B4 | Botschaftsfehler (Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) - Timeout | 1 |
| 0xD016B6 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 02, ID: DISP_CC_DRDY_02) - Alive | 1 |
| 0xD016B7 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 02, ID: DISP_CC_DRDY_02) - Checksumme | 1 |
| 0xD016CB | Botschaftsfehler (Status Heckspoiler BN2020, ID: ST_RSP_BN2020) Checksumme | 1 |
| 0xD016DC | Botschaftsfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) - Timeout | 1 |
| 0xD016DD | Botschaftsfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) - Checksumme | 1 |
| 0xD016DE | Botschaftsfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) - Alive | 1 |
| 0xD016E1 | Signalfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) - Ungültig | 1 |
| 0xD016E2 | Signalfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) - Undefiniert | 1 |
| 0xD016E4 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Timeout | 1 |
| 0xD016E5 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Checksumme | 1 |
| 0xD016E6 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Alive | 1 |
| 0xD016F2 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 03, ID: DISP_CC_DRDY_03) - Timeout | 1 |
| 0xD016F3 | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 03, ID: DISP_CC_DRDY_03) - Alive | 1 |
| 0xD016F5 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Timeout | 1 |
| 0xD016F6 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Alive | 1 |
| 0xD016F7 | Botschaftsfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Checksumme | 1 |
| 0xD016F9 | Botschaftsfehler (GPS Rohdaten, ID:GPS_RWDT) Timeout | 1 |
| 0xD016FB | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 03, ID: DISP_CC_DRDY_03) - Checksumme | 1 |
| 0xD016FC | Botschaftsfehler (Daten Elektrische-Lenkung, ID: DT_EST) Checksumme | 1 |
| 0xD01703 | Botschaftsfehler (Daten Fahrspurerkennung 4, ID: DT_LNDT_4) Checksumme | 1 |
| 0xD01704 | Botschaftsfehler (Daten Fahrspurerkennung 5, ID: DT_LNDT_5) Checksumme | 1 |
| 0xD01705 | Botschaftsfehler (Anforderung Drehmoment Kurbelwelle ARS, ID: RQ_TORQ_CRSH_ARS) - Timeout | 1 |
| 0xD01706 | Botschaftsfehler (Anforderung Drehmoment Kurbelwelle ARS, ID: RQ_TORQ_CRSH_ARS) - Alive | 1 |
| 0xD01707 | Botschaftsfehler (Anforderung Drehmoment Kurbelwelle ARS, ID: RQ_TORQ_CRSH_ARS) - Checksumme | 1 |
| 0xD01709 | Signalfehler (Anforderung Drehmoment Kurbelwelle ARS, ID: RQ_TORQ_CRSH_ARS) - Ungültig | 1 |
| 0xD0170A | Signalfehler (Anforderung Drehmoment Kurbelwelle ARS, ID: RQ_TORQ_CRSH_ARS) - Undefiniert | 1 |
| 0xD0170F | Botschaftsfehler (Anfrage Aktivierung Funktion Parken, ID: RQ_ACTVN_FN_PKG_2) Alive | 1 |
| 0xD01711 | Signalfehler (Anfrage Aktivierung Funktion Parken, ID: RQ_ACTVN_FN_PKG_2) Ungültig | 1 |
| 0xD01713 | Signalfehler (Einheiten BN2020, ID: EINHEITEN_BN2020) Ungültig | 1 |
| 0xD01715 | Signalfehler (Abstand Meldung Sensor Seite Vorne, ID: GAP_MESS_SEN_Side_FS) Ungültig | 1 |
| 0xD01717 | Signalfehler (Night-Vision Frontraumüberwachung, ID: NIVI_HDWOBS) - Ungültig | 1 |
| 0xD01719 | Signalfehler (Konfiguration EPS, ID: SU_EPS) - Ungültig | 1 |
| 0xD01722 | Signalfehler (Bedienung I-Drive FAS, ID: OP_IDRV_FAS) - Ungültig | 1 |
| 0xD01723 | Signalfehler (Bedienung I-Drive FAS, ID: OP_IDRV_FAS) - Undefiniert | 1 |
| 0xD0172A | Botschaftsfehler (Status System Parken 2, ID: ST_SY_PKG_2) Alive | 1 |
| 0xD01730 | Botschaftsfehler (Status Heckspoiler BN2020, ID: ST_RSP_BN2020) Alive | 1 |
| 0xD01732 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) - Timeout | 1 |
| 0xD01733 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) - Checksumme | 1 |
| 0xD01734 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) - Alive | 1 |
| 0xD01736 | Signalfehler (Bedienung Tempomat, ID: OP_CCTR) - Ungültig | 1 |
| 0xD01744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 |
| 0xD01745 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Checksumme | 1 |
| 0xD01746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Alive | 1 |
| 0xD01748 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 03, ID: DISP_CC_DRDY_03) - Ungültig | 1 |
| 0xD01749 | Botschaftsfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) - Timeout | 1 |
| 0xD0174A | Botschaftsfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) - Checksumme | 1 |
| 0xD0174B | Botschaftsfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) - Alive | 1 |
| 0xD0174C | Botschaftsfehler (Status Spurverlassenswarnsystem, ID: ST_TLC) - Alive | 1 |
| 0xD0174D | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Checksumme | 1 |
| 0xD0174E | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Alive | 1 |
| 0xD01751 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Checksumme | 1 |
| 0xD01752 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Alive | 1 |
| 0xD01753 | Botschaftsfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Alive | 1 |
| 0xD0175B | Botschaftsfehler (Daten Elektrische-Lenkung, ID: DT_EST) Alive | 1 |
| 0xD01761 | Botschaftsfehler (Daten Fahrspurerkennung 4, ID: DT_LNDT_4) Alive | 1 |
| 0xD01762 | Botschaftsfehler (Daten Fahrspurerkennung 5, ID: DT_LNDT_5) Alive | 1 |
| 0xD0177A | Signalfehler (Status System Parken 2, ID: ST_SY_PKG_2) Ungültig | 1 |
| 0xD0177D | Signalfehler (Status Heckspoiler BN2020, ID: ST_RSP_BN2020) Ungültig | 1 |
| 0xD01782 | Botschaftsfehler (Daten Funktion HDC, ID: DT_FN_HDC) - Timeout | 1 |
| 0xD01783 | Botschaftsfehler (Daten Funktion HDC, ID: DT_FN_HDC) - Checksumme | 1 |
| 0xD01784 | Botschaftsfehler (Daten Funktion HDC, ID: DT_FN_HDC) - Alive | 1 |
| 0xD01786 | Signalfehler (Daten Funktion HDC, ID: DT_FN_HDC) - Ungültig | 1 |
| 0xD01787 | Signalfehler (Daten Funktion HDC, ID: DT_FN_HDC) - Undefiniert | 1 |
| 0xD01788 | Signalfehler (Status Spurverlassenswarnsystem, ID: ST_TLC) - Ungültig | 1 |
| 0xD01793 | Signalfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Ungültig | 1 |
| 0xD01799 | Signalfehler (Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Ungültig | 1 |
| 0xD0179A | Signalfehler (Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) - Ungültig | 1 |
| 0xD0179D | Signalfehler (GPS Rohdaten, ID:GPS_RWDT) Ungültig | 1 |
| 0xD0179E | Signalfehler (Daten Elektrische-Lenkung, ID: DT_EST) Ungültig | 1 |
| 0xD0179F | Botschaftsfehler (Ist Anzahl Geberflanken Rad, ID: AVL_QUAN_EES_WHL) - Timeout | 1 |
| 0xD017A1 | Botschaftsfehler (Ist Anzahl Geberflanken Rad, ID: AVL_QUAN_EES_WHL) - Alive | 1 |
| 0xD017A3 | Signalfehler (Ist Anzahl Geberflanken Rad, ID: AVL_QUAN_EES_WHL) - Ungültig | 1 |
| 0xD017A4 | Signalfehler (Ist Anzahl Geberflanken Rad, ID: AVL_QUAN_EES_WHL) - Undefiniert | 1 |
| 0xD017AB | Botschaftsfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) - Timeout | 1 |
| 0xD017AC | Botschaftsfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) - Checksumme | 1 |
| 0xD017AD | Botschaftsfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) - Alive | 1 |
| 0xD017AF | Signalfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) - Ungültig | 1 |
| 0xD017B0 | Signalfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) - Undefiniert | 1 |
| 0xD017B7 | Botschaftsfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Timeout | 1 |
| 0xD017B8 | Botschaftsfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Checksumme | 1 |
| 0xD017B9 | Botschaftsfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Alive | 1 |
| 0xD017BB | Signalfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Ungültig | 1 |
| 0xD017BC | Signalfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Undefiniert | 1 |
| 0xD017C1 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Timeout | 1 |
| 0xD017C2 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Checksumme | 1 |
| 0xD017C3 | Botschaftsfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Alive | 1 |
| 0xD017C5 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Ungültig | 1 |
| 0xD017C6 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Undefiniert | 1 |
| 0xD017DF | Signalfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) Qualifier | 1 |
| 0xD017E4 | Botschaftsfehler (Lampenzustand, ID: LAMPENZUSTAND) - Timeout | 1 |
| 0xD017E8 | Signalfehler (Lampenzustand, ID: LAMPENZUSTAND) - Ungültig | 1 |
| 0xD017E9 | Signalfehler (Lampenzustand, ID: LAMPENZUSTAND) - Undefiniert | 1 |
| 0xD017EA | Botschaftsfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) - Timeout | 1 |
| 0xD017F0 | Botschaftsfehler (Lenkwinkel Fahrer Diagnose, ID: STEA_DV_DIAG) - Timeout | 1 |
| 0xD017FD | Botschaftsfehler (Navigation GPS 1, ID: NAV_GPS1) - Timeout | 1 |
| 0xD01801 | Signalfehler (Navigation GPS 1, ID: NAV_GPS1) - Ungültig | 1 |
| 0xD01802 | Signalfehler (Navigation GPS 1, ID: NAV_GPS1) - Undefiniert | 1 |
| 0xD01804 | Signalfehler (Objektdaten KAFAS erweitert***, ID: OBJDT_KAFAS_EXT_*** ) Sender:  KAFAS Qualifier | 1 |
| 0xD01805 | Botschaftsfehler (Navigation GPS 2, ID: NAV_GPS2) - Timeout | 1 |
| 0xD01809 | Signalfehler (Navigation GPS 2, ID: NAV_GPS2) - Ungültig | 1 |
| 0xD0180A | Signalfehler (Navigation GPS 2, ID: NAV_GPS2) - Undefiniert | 1 |
| 0xD0180C | Signalfehler (Status Objektdaten KAFAS, ID: ST_OBJDT_KAFAS) Qualifier | 1 |
| 0xD0180D | Signalfehler (Anfrage Aktivierung Funktion Parken, ID: RQ_ACTVN_FN_PKG_2) Undefiniert | 1 |
| 0xD01811 | Botschaftsfehler (Navigation System Information, ID: NAV_SYS_INF) - Timeout | 1 |
| 0xD01812 | Signalfehler (Abstand Meldung Sensor Seite Vorne, ID: GAP_MESS_SEN_Side_FS) Undefiniert | 1 |
| 0xD01814 | Signalfehler (Night-Vision Frontraumüberwachung, ID: NIVI_HDWOBS) - Undefiniert | 1 |
| 0xD01815 | Signalfehler (Navigation System Information, ID: NAV_SYS_INF) - Ungültig | 1 |
| 0xD01816 | Signalfehler (Navigation System Information, ID: NAV_SYS_INF) - Undefiniert | 1 |
| 0xD01818 | Signalfehler (Konfiguration EPS, ID: SU_EPS) - Undefiniert | 1 |
| 0xD0181F | Signalfehler (Navigationsgraph, ID: NAV_GRAPH) - Ungültig | 1 |
| 0xD01820 | Signalfehler (Navigationsgraph, ID: NAV_GRAPH) - Undefiniert | 1 |
| 0xD01826 | Signalfehler (Status Heckspoiler BN2020, ID: ST_RSP_BN2020) Undefiniert | 1 |
| 0xD0182A | Signalfehler (Status System Parken 2, ID: ST_SY_PKG_2) Undefiniert | 1 |
| 0xD01831 | Botschaftsfehler (Navigationsgraph Fahrspur, ID: NAV_GRAPH_LNE) - Timeout | 1 |
| 0xD01835 | Signalfehler (Navigationsgraph Fahrspur, ID: NAV_GRAPH_LNE) - Ungültig | 1 |
| 0xD01836 | Signalfehler (Navigationsgraph Fahrspur, ID: NAV_GRAPH_LNE) - Undefiniert | 1 |
| 0xD0183A | Signalfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Undefiniert | 1 |
| 0xD0183F | Signalfehler (Navigationsgraph Geschwindigkeit, ID: NAV_GRAPH_V) - Ungültig | 1 |
| 0xD01840 | Signalfehler (Navigationsgraph Geschwindigkeit, ID: NAV_GRAPH_V) - Undefiniert | 1 |
| 0xD01842 | Signalfehler (GPS Rohdaten, ID:GPS_RWDT) Undefiniert | 1 |
| 0xD01846 | Signalfehler (Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) - Undefiniert | 1 |
| 0xD01849 | Signalfehler (Daten Elektrische-Lenkung, ID: DT_EST) Undefiniert | 1 |
| 0xD01850 | Signalfehler (Daten Fahrspurerkennung 4, ID: DT_LNDT_4) Undefiniert | 1 |
| 0xD01852 | Signalfehler (Daten Fahrspurerkennung 5, ID: DT_LNDT_5) Undefiniert | 1 |
| 0xD01855 | Signalfehler (PIA Daten Anfrage, ID: PIA_DT_INQY) - Ungültig | 1 |
| 0xD01856 | Signalfehler (PIA Daten Anfrage, ID: PIA_DT_INQY) - Undefiniert | 1 |
| 0xD0185E | Signalfehler (PIA Daten Setzen, ID: PIA_DT_SET) - Ungültig | 1 |
| 0xD0185F | Signalfehler (PIA Daten Setzen, ID: PIA_DT_SET) - Undefiniert | 1 |
| 0xD01868 | Signalfehler (PIA Konfiguration, ID: PIA_SU) - Ungültig | 1 |
| 0xD01869 | Signalfehler (PIA Konfiguration, ID: PIA_SU) - Undefiniert | 1 |
| 0xD0186C | Botschaftsfehler (PIA Transaktion, ID: PIA_TRANA) - Timeout | 1 |
| 0xD01870 | Signalfehler (PIA Transaktion, ID: PIA_TRANA) - Ungültig | 1 |
| 0xD01871 | Signalfehler (PIA Transaktion, ID: PIA_TRANA) - Undefiniert | 1 |
| 0xD01872 | Signalfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) - Ungültig | 1 |
| 0xD0189B | Botschaftsfehler (Soll Vibration Lenkrad Warnung Fahrspurverlassen, ID: TAR_VIB_STW_WARN_LNDP) - Timeout | 1 |
| 0xD0189D | Botschaftsfehler (Soll Vibration Lenkrad Warnung Fahrspurverlassen, ID: TAR_VIB_STW_WARN_LNDP) - Alive | 1 |
| 0xD0189F | Signalfehler (Soll Vibration Lenkrad Warnung Fahrspurverlassen, ID: TAR_VIB_STW_WARN_LNDP) - Ungültig | 1 |
| 0xD018B5 | Botschaftsfehler (Status Anzeige Kombi, ID: ST_DISP_KI) - Timeout | 1 |
| 0xD018B9 | Signalfehler (Status Anzeige Kombi, ID: ST_DISP_KI) - Ungültig | 1 |
| 0xD018BA | Signalfehler (Status Anzeige Kombi, ID: ST_DISP_KI) - Undefiniert | 1 |
| 0xD018BB | Botschaftsfehler (Status Anzeige Warnung Fahrspurwechsel, ID: ST_DISP_WARN_LNCH) - Timeout | 1 |
| 0xD018BF | Signalfehler (Status Anzeige Warnung Fahrspurwechsel, ID: ST_DISP_WARN_LNCH) - Ungültig | 1 |
| 0xD018C0 | Signalfehler (Status Anzeige Warnung Fahrspurwechsel, ID: ST_DISP_WARN_LNCH) - Undefiniert | 1 |
| 0xD018C7 | Botschaftsfehler (Status Bedienelement Warnung Fahrspurverlassen, ID: ST_OPEL_WARN_LNDP) - Timeout | 1 |
| 0xD018CB | Signalfehler (Status Bedienelement Warnung Fahrspurverlassen, ID: ST_OPEL_WARN_LNDP) - Ungültig | 1 |
| 0xD018CC | Signalfehler (Status Bedienelement Warnung Fahrspurverlassen, ID: ST_OPEL_WARN_LNDP) - Undefiniert | 1 |
| 0xD018CF | Botschaftsfehler (Status Bedienelement Warnung Fahrspurwechsel, ID: ST_OPEL_WARN_LNCH) - Timeout | 1 |
| 0xD018D3 | Signalfehler (Status Bedienelement Warnung Fahrspurwechsel, ID: ST_OPEL_WARN_LNCH) - Ungültig | 1 |
| 0xD018D4 | Signalfehler (Status Bedienelement Warnung Fahrspurwechsel, ID: ST_OPEL_WARN_LNCH) - Undefiniert | 1 |
| 0xD018D7 | Botschaftsfehler (Status Fahrlicht, ID: STAT_FAHRLICHT) - Timeout | 1 |
| 0xD018D9 | Signalfehler (Status Fahrlicht, ID: STAT_FAHRLICHT) - Ungültig | 1 |
| 0xD018DA | Signalfehler (Status Fahrlicht, ID: STAT_FAHRLICHT) - Undefiniert | 1 |
| 0xD018DC | Botschaftsfehler (Status Funktion PDC, ID: ST_FN_PDC) - Timeout | 1 |
| 0xD018DD | Botschaftsfehler (Status Funktion PDC, ID: ST_FN_PDC) - Checksumme | 1 |
| 0xD018DE | Botschaftsfehler (Status Funktion PDC, ID: ST_FN_PDC) - Alive | 1 |
| 0xD018E1 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Timeout | 1 |
| 0xD018E6 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Timeout | 1 |
| 0xD018E8 | Botschaftsfehler (Status Reifen RDC, ID: ST_TYR_RDC) - Timeout | 1 |
| 0xD018E9 | Botschaftsfehler (Status Reifen RDC, ID: ST_TYR_RDC) - Checksumme | 1 |
| 0xD018EA | Botschaftsfehler (Status Reifen RDC, ID: ST_TYR_RDC) - Alive | 1 |
| 0xD018EC | Signalfehler (Status Reifen RDC, ID: ST_TYR_RDC) - Ungültig | 1 |
| 0xD018F8 | Signalfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Ungültig | 1 |
| 0xD018F9 | Signalfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Undefiniert | 1 |
| 0xD01901 | Botschaftsfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) - Timeout | 1 |
| 0xD01903 | Signalfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) - Ungültig | 1 |
| 0xD01904 | Signalfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) - Undefiniert | 1 |
| 0xD01914 | Signalfehler (Synchronisation Navigationsgraph, ID: NAV_GRAPH_SYNC) - Ungültig | 1 |
| 0xD01915 | Signalfehler (Synchronisation Navigationsgraph, ID: NAV_GRAPH_SYNC) - Undefiniert | 1 |
| 0xD01922 | Botschaftsfehler (Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) - Timeout | 1 |
| 0xD01926 | Signalfehler (Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) - Ungültig | 1 |
| 0xD01927 | Signalfehler (Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) - Undefiniert | 1 |
| 0xD01932 | Botschaftsfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Timeout | 1 |
| 0xD01936 | Signalfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Ungültig | 1 |
| 0xD01937 | Signalfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Undefiniert | 1 |
| 0xD0193C | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) - Timeout | 1 |
| 0xD0193E | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) - Alive | 1 |
| 0xD01940 | Signalfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) - Ungültig | 1 |
| 0xD01941 | Signalfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) - Undefiniert | 1 |
| 0xD0194E | Botschaftsfehler (Wankmoment Fahrzeug, ID: MX_VEH) - Timeout | 1 |
| 0xD01952 | Signalfehler (Wankmoment Fahrzeug, ID: MX_VEH) - Ungültig | 1 |
| 0xD01953 | Signalfehler (Wankmoment Fahrzeug, ID: MX_VEH) - Undefiniert | 1 |
| 0xD0195B | Botschaftsfehler (Warnung Fahrspurwechsel, ID: WARN_LNCH) - Timeout | 1 |
| 0xD0195D | Botschaftsfehler (Warnung Fahrspurwechsel, ID: WARN_LNCH) - Alive | 1 |
| 0xD0195F | Signalfehler (Warnung Fahrspurwechsel, ID: WARN_LNCH) - Ungültig | 1 |
| 0xD01960 | Signalfehler (Warnung Fahrspurwechsel, ID: WARN_LNCH) - Undefiniert | 1 |
| 0xD0196C | Botschaftsfehler (Bremsassistent Frontraumüberwachung, ID: BRAS_HDWOBS) - Timeout | 1 |
| 0xD0196D | Signalfehler (Lenkwinkel Fahrer Diagnose, ID: STEA_DV_DIAG) - Ungültig | 1 |
| 0xD0197E | Botschaftsfehler (Bremsassistent Frontraumüberwachung, ID: BRAS_HDWOBS) - Checksumme | 1 |
| 0xD0198F | Botschaftsfehler (Bremsassistent Frontraumüberwachung, ID: BRAS_HDWOBS) - Alive | 1 |
| 0xD01994 | Signalfehler (Status Lenkung Vorderachse, ID: ST_STE_FTAX) - Ungültig | 1 |
| 0xD01995 | Signalfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) - Ungültig | 1 |
| 0xD01996 | Signalfehler (Status Parkassistent, ID: ST_PMA)- Ungültig | 1 |
| 0xD019A9 | Signalfehler (Bremsassistent Frontraumüberwachung, ID: BRAS_HDWOBS) - Ungültig | 1 |
| 0xD019AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 |
| 0xD019B7 | Botschaftsfehler (Dimmung, ID: DIMMUNG) - Timeout | 1 |
| 0xD019B9 | Signalfehler (Dimmung, ID: DIMMUNG) - Ungültig | 1 |
| 0xD019BF | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Timeout | 1 |
| 0xD019C0 | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Checksumme | 1 |
| 0xD019C1 | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Alive | 1 |
| 0xD019C3 | Signalfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Ungültig | 1 |
| 0xD019EE | Botschaftsfehler (Objektdaten Frontraumüberwachung***, ID: OBJDT_HDWOBS_***) - Timeout | 1 |
| 0xD019F0 | Signalfehler (Objektdaten Frontraumüberwachung***, ID: OBJDT_HDWOBS_***) - Ungültig | 1 |
| 0xD01A08 | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Timeout | 1 |
| 0xD01A09 | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Checksumme | 1 |
| 0xD01A0A | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Alive | 1 |
| 0xD01A0C | Signalfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Ungültig | 1 |
| 0xD01A0D | Signalfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Undefiniert | 1 |
| 0xD01A16 | Botschaftsfehler (Status Frontraumüberwachung, ID: ST_HDWOBS) - Timeout | 1 |
| 0xD01A17 | Signalfehler (Status Frontraumüberwachung, ID: ST_HDWOBS) - Undefiniert | 1 |
| 0xD01A18 | Botschaftsfehler (Status Frontraumüberwachung, ID: ST_HDWOBS) - Alive | 1 |
| 0xD01A1A | Signalfehler (Status Frontraumüberwachung, ID: ST_HDWOBS) - Ungültig | 1 |
| 0xD01A1B | Botschaftsfehler (Status Giermomentverteilung, ID: ST_YMR) - Timeout | 1 |
| 0xD01A1C | Botschaftsfehler (Status Giermomentverteilung, ID: ST_YMR) - Checksumme | 1 |
| 0xD01A1D | Botschaftsfehler (Status Giermomentverteilung, ID: ST_YMR) - Alive | 1 |
| 0xD01A1F | Signalfehler (Status Giermomentverteilung, ID: ST_YMR) - Ungültig | 1 |
| 0xD01A28 | Botschaftsfehler (Status System Parken, ID: ST_SY_PKG) - Timeout | 1 |
| 0xD01A29 | Botschaftsfehler (Status System Parken, ID: ST_SY_PKG) - Checksumme | 1 |
| 0xD01A2A | Botschaftsfehler (Status System Parken, ID: ST_SY_PKG) - Alive | 1 |
| 0xD01A2C | Signalfehler (Status System Parken, ID: ST_SY_PKG) - Ungültig | 1 |
| 0xD01A2D | Signalfehler (Status System Parken, ID: ST_SY_PKG) - Undefiniert | 1 |
| 0xD01A77 | Botschaftsfehler (Status Schneekette, ID: ST_SNC) - Alive | 1 |
| 0xD01A7C | Signalfehler (Status Servotronic ECO, ID: ST_SVT_ECO) - Qualifier | 1 |
| 0xD01A7D | Botschaftsfehler (Status Schneekette, ID: ST_SNC) - Timeout | 1 |
| 0xD01A7E | Botschaftsfehler (Status Schneekette, ID: ST_SNC) - Checksumme | 1 |
| 0xD01A7F | Signalfehler (Status Schneekette, ID: ST_SNC) - Ungültig | 1 |
| 0xD01A94 | Signalfehler (Wankmoment Fahrzeug, ID: MX_VEH) - Qualifier | 1 |
| 0xD01B00 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Timeout | 1 |
| 0xD01B01 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Checksumme | 1 |
| 0xD01B02 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Alive | 1 |
| 0xD01B03 | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Qualifier | 1 |
| 0xD01B04 | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Ungültig | 1 |
| 0xD01B05 | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Undefiniert | 1 |
| 0xD01B06 | Botschaftsfehler (Anteil Wankmoment Stabilisierung, ID: QTA_MX_STAB) - Timeout | 1 |
| 0xD01B08 | Signalfehler (Anteil Wankmoment Stabilisierung, ID: QTA_MX_STAB) - Ungültig | 1 |
| 0xD01B09 | Signalfehler (Anteil Wankmoment Stabilisierung, ID: QTA_MX_STAB) - Undefiniert | 1 |
| 0xD01B0A | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 04, ID: DISP_CC_DRDY_04) - Timeout | 1 |
| 0xD01B0B | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 04, ID: DISP_CC_DRDY_04) - Checksumme | 1 |
| 0xD01B0C | Botschaftsfehler (Anzeige Checkcontrol Fahrdynamik 04, ID: DISP_CC_DRDY_04) - Alive | 1 |
| 0xD01B0E | Signalfehler (Anzeige Checkcontrol Fahrdynamik 04, ID: DISP_CC_DRDY_04) - Ungültig | 1 |
| 0xD01B11 | Signalfehler (Bedienung Individualisierung Schalter Fahrdynamik, ID: OP_IDVL_SW_DRDY) - Ungültig | 1 |
| 0xD01B14 | Signalfehler (Bedienung Schalter Schneekette, ID: OP_SW_SNC) - Ungültig | 1 |
| 0xD01B15 | Botschaftsfehler (Dienste - PIA_Dienst, ID: PIA_SVC) - Timeout | 1 |
| 0xD01B17 | Signalfehler (Dienste - PIA_Dienst, ID: PIA_SVC) - Ungültig | 1 |
| 0xD01B26 | Botschaftsfehler (Ist Position EPS, ID: AVL_PO_EPS) - Timeout | 1 |
| 0xD01B27 | Botschaftsfehler (Ist Position EPS, ID: AVL_PO_EPS) - Checksumme | 1 |
| 0xD01B28 | Botschaftsfehler (Ist Position EPS, ID: AVL_PO_EPS) - Alive | 1 |
| 0xD01B2A | Signalfehler (Ist Position EPS, ID: AVL_PO_EPS) - Ungültig | 1 |
| 0xD01B2B | Signalfehler (Ist Position EPS, ID: AVL_PO_EPS) - Undefiniert | 1 |
| 0xD01B3A | Botschaftsfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) - Timeout | 1 |
| 0xD01B3B | Botschaftsfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) - Checksumme | 1 |
| 0xD01B3C | Botschaftsfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) - Alive | 1 |
| 0xD01B3E | Signalfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) - Ungültig | 1 |
| 0xD01B3F | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Timeout | 1 |
| 0xD01B40 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Checksumme | 1 |
| 0xD01B41 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Alive | 1 |
| 0xD01B4C | Botschaftsfehler (Soll Bremsmoment Summe Koordiniert, ID: BRTORQ_SUM_COOTD) - Timeout | 1 |
| 0xD01B4D | Botschaftsfehler (Soll Bremsmoment Summe Koordiniert, ID: BRTORQ_SUM_COOTD) - Checksumme | 1 |
| 0xD01B4E | Botschaftsfehler (Soll Bremsmoment Summe Koordiniert, ID: BRTORQ_SUM_COOTD) - Alive | 1 |
| 0xD01B50 | Signalfehler (Soll Bremsmoment Summe Koordiniert, ID: BRTORQ_SUM_COOTD) - Ungültig | 1 |
| 0xD01B51 | Signalfehler (Soll Bremsmoment Summe Koordiniert, ID: BRTORQ_SUM_COOTD) - Undefiniert | 1 |
| 0xD01B63 | Botschaftsfehler (Status Reifen RPA, ID: ST_TYR_RPA) - Timeout | 1 |
| 0xD01B64 | Botschaftsfehler (Status Reifen RPA, ID: ST_TYR_RPA) - Checksumme | 1 |
| 0xD01B65 | Botschaftsfehler (Status Reifen RPA, ID: ST_TYR_RPA) - Alive | 1 |
| 0xD01B67 | Signalfehler (Status Reifen RPA, ID: ST_TYR_RPA) - Ungültig | 1 |
| 0xD01B7C | Botschaftsfehler (Status Niveauregulierung Fahrzeug, ID: ST_LCS_VEH) - Timeout | 1 |
| 0xD01B80 | Signalfehler (Status Niveauregulierung Fahrzeug, ID: ST_LCS_VEH) - Ungültig | 1 |
| 0xD01B81 | Signalfehler (Status Niveauregulierung Fahrzeug, ID: ST_LCS_VEH) - Undefiniert | 1 |
| 0xD01C00 | Botschaftsfehler (Daten Fahrspurerkennung 2, ID: DT_LNDT_2) - Timeout | 1 |
| 0xD01C02 | Botschaftsfehler (Daten Fahrspurerkennung 2, ID: DT_LNDT_2) - Alive | 1 |
| 0xD01C03 | Botschaftsfehler (Daten Fahrspurerkennung 3, ID: DT_LNDT_3) - Timeout | 1 |
| 0xD01C05 | Botschaftsfehler (Daten Fahrspurerkennung 3, ID: DT_LNDT_3) - Alive | 1 |
| 0xD01C0A | Botschaftsfehler (Diagnose Lenkwinkelsensor***, ID: DIAG_LWS***) - Timeout | 1 |
| 0xD01C0C | Botschaftsfehler (Ist Kraft Zahnstange, ID: AVL_FORC_GRD) - Timeout | 1 |
| 0xD01C0D | Botschaftsfehler (Ist Kraft Zahnstange, ID: AVL_FORC_GRD) - Checksumme | 1 |
| 0xD01C0E | Botschaftsfehler (Ist Kraft Zahnstange, ID: AVL_FORC_GRD) - Alive | 1 |
| 0xD01C0F | Botschaftsfehler (PreCrash Erkennung SF-CAN, ID: PCSH_RCOG_SFCAN) - Timeout | 1 |
| 0xD01C11 | Botschaftsfehler (PreCrash Erkennung SF-CAN, ID: PCSH_RCOG_SFCAN) - Alive | 1 |
| 0xD01C18 | Botschaftsfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) - Timeout | 1 |
| 0xD01C1A | Botschaftsfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) - Alive | 1 |
| 0xD01C1C | Botschaftsfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) - Timeout | 1 |
| 0xD01C1D | Botschaftsfehler (Status Kontakt Handbremse, ID: STAT_CT_HABR) - Timeout | 1 |
| 0xD01C1F | Botschaftsfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) - Timeout | 1 |
| 0xD01C37 | Signalfehler (PreCrash Erkennung SF-CAN, ID: PCSH_RCOG_SFCAN) - Ungültig | 1 |
| 0xD02503 | Signalfehler (Objektdaten KAFAS erweitert***, ID: OBJDT_KAFAS_EXT_*** ) - Ungültig | 1 |
| 0xD02504 | Signalfehler (Objektdaten KAFAS erweitert***, ID: OBJDT_KAFAS_EXT_*** ) Sender:  KAFAS Undefiniert | 1 |
| 0xD02506 | Botschaftsfehler (Objektdaten KAFAS***, ID: OBJDT_KAFAS_***) - Timeout | 1 |
| 0xD02509 | Signalfehler (Objektdaten KAFAS***, ID: OBJDT_KAFAS_***) Sender: KAFAS  Ungültig | 1 |
| 0xD0250A | Signalfehler (Objektdaten KAFAS***, ID: OBJDT_KAFAS_***) Sender: KAFAS  Undefiniert | 1 |
| 0xD02513 | Botschaftsfehler (Objektdaten KAFAS erweitert***, ID: OBJDT_KAFAS_EXT_*** ) - Timeout | 1 |
| 0xD02518 | Botschaftsfehler (Status Objektdaten KAFAS, ID: ST_OBJDT_KAFAS ) - Timeout | 1 |
| 0xD0251B | Signalfehler (Status Objektdaten KAFAS, ID: ST_OBJDT_KAFAS ) - Ungültig | 1 |
| 0xD0251C | Signalfehler (Status Objektdaten KAFAS, ID: ST_OBJDT_KAFAS ) - Undefiniert | 1 |
| 0xD02C00 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 00, ID: DISP_CC_DRDY_00) - Undefiniert | 1 |
| 0xD02C01 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 01, ID: DISP_CC_DRDY_01) - Undefiniert | 1 |
| 0xD02C02 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 02, ID: DISP_CC_DRDY_02) - Undefiniert | 1 |
| 0xD02C03 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 03, ID: DISP_CC_DRDY_03) - Undefiniert | 1 |
| 0xD02C04 | Signalfehler (Anzeige Checkcontrol Fahrdynamik 04, ID: DISP_CC_DRDY_04) - Undefiniert | 1 |
| 0xD02C05 | Signalfehler (Außentemperatur, ID: A_TEMP) - Undefiniert | 1 |
| 0xD02C06 | Signalfehler (Bedienung Individualisierung Schalter Fahrdynamik, ID: OP_IDVL_SW_DRDY) - Undefiniert | 1 |
| 0xD02C07 | Signalfehler (Bedienung Schalter Schneekette, ID: OP_SW_SNC) - Undefiniert | 1 |
| 0xD02C08 | Signalfehler (Bedienung Tempomat, ID: OP_CCTR) - Undefiniert | 1 |
| 0xD02C09 | Signalfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) - Undefiniert | 1 |
| 0xD02C0A | Signalfehler (Blinken, ID: BLINKEN) - Undefiniert | 1 |
| 0xD02C0C | Signalfehler (Bremsassistent Frontraumüberwachung, ID: BRAS_HDWOBS) - Undefiniert | 1 |
| 0xD02C0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Undefiniert | 1 |
| 0xD02C0E | Signalfehler (Daten Fahrspurerkennung 1, ID: DT_LNDT_1) - Undefiniert | 1 |
| 0xD02C0F | Signalfehler (Daten Fahrspurerkennung 2, ID: DT_LNDT_2) - Ungültig | 1 |
| 0xD02C10 | Signalfehler (Daten Fahrspurerkennung 2, ID: DT_LNDT_2) - Undefiniert | 1 |
| 0xD02C11 | Signalfehler (Daten Fahrspurerkennung 3, ID: DT_LNDT_3) - Ungültig | 1 |
| 0xD02C12 | Signalfehler (Daten Fahrspurerkennung 3, ID: DT_LNDT_3) - Undefiniert | 1 |
| 0xD02C17 | Signalfehler (Dienste - PIA_Dienst, ID: PIA_SVC) - Undefiniert | 1 |
| 0xD02C18 | Signalfehler (Dimmung, ID: DIMMUNG) - Undefiniert | 1 |
| 0xD02C19 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Undefiniert | 1 |
| 0xD02C1A | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Undefiniert | 1 |
| 0xD02C1F | Signalfehler (Diagnose Lenkwinkelsensor***, ID: DIAG_LWS***) - Ungültig | 1 |
| 0xD02C20 | Signalfehler (Diagnose Lenkwinkelsensor***, ID: DIAG_LWS***) - Undefiniert | 1 |
| 0xD02C24 | Signalfehler (Ist Kraft Zahnstange, ID: AVL_FORC_GRD) - Ungültig | 1 |
| 0xD02C25 | Signalfehler (Ist Kraft Zahnstange, ID: AVL_FORC_GRD) - Undefiniert | 1 |
| 0xD02C27 | Signalfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Undefiniert | 1 |
| 0xD02C2A | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Undefiniert | 1 |
| 0xD02C2C | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) - Undefiniert | 1 |
| 0xD02C2D | Signalfehler (Lenkwinkel Fahrer Diagnose, ID: STEA_DV_DIAG) - Undefiniert | 1 |
| 0xD02C34 | Signalfehler (Objektdaten Frontraumüberwachung***, ID: OBJDT_HDWOBS_***) - Undefiniert | 1 |
| 0xD02C38 | Signalfehler (PreCrash Erkennung SF-CAN, ID: PCSH_RCOG_SFCAN) - Undefiniert | 1 |
| 0xD02C39 | Signalfehler (Qualifier Service ECBA, ID: QU_SER_ECBA) - Undefiniert | 1 |
| 0xD02C3A | Signalfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Undefiniert | 1 |
| 0xD02C3B | Signalfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Undefiniert | 1 |
| 0xD02C41 | Signalfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) - Ungültig | 1 |
| 0xD02C42 | Signalfehler (Soll Radlenkwinkel Vorderachse Parkassistent, ID: TAR_WSTA_FTAX_PMA) - Undefiniert | 1 |
| 0xD02C43 | Signalfehler (Soll Vibration Lenkrad Warnung Fahrspurverlassen, ID: TAR_VIB_STW_WARN_LNDP) - Undefiniert | 1 |
| 0xD02C49 | Signalfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) - Ungültig | 1 |
| 0xD02C4A | Signalfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) - Undefiniert | 1 |
| 0xD02C4B | Signalfehler (Status Giermomentverteilung, ID: ST_YMR) - Undefiniert | 1 |
| 0xD02C4C | Signalfehler (Status Kontakt Handbremse, ID: STAT_CT_HABR) - Ungültig | 1 |
| 0xD02C4E | Signalfehler (Status Lenkung Vorderachse, ID: ST_STE_FTAX) - Undefiniert | 1 |
| 0xD02C52 | Signalfehler (Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) - Undefiniert | 1 |
| 0xD02C53 | Signalfehler (Status Parkassistent, ID: ST_PMA) - Undefiniert | 1 |
| 0xD02C54 | Signalfehler (Status Reifen RDC, ID: ST_TYR_RDC) - Undefiniert | 1 |
| 0xD02C55 | Signalfehler (Status Reifen RPA, ID: ST_TYR_RPA) - Undefiniert | 1 |
| 0xD02C56 | Signalfehler (Status Schneekette, ID: ST_SNC) - Undefiniert | 1 |
| 0xD02C5A | Signalfehler (Steuerung LED Funktion Parken, ID: CTR_LED_FN_PKG) - Ungültig | 1 |
| 0xD02C5B | Signalfehler (Steuerung LED Funktion Parken, ID: CTR_LED_FN_PKG) - Undefiniert | 1 |
| 0xD02C5C | Signalfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) - Ungültig | 1 |
| 0xD02C5D | Signalfehler (Vorgabe Leistung Elektrisch, ID: SPEC_PWR_EL) - Undefiniert | 1 |
| 0xD02C60 | Signalfehler (Status Anzeige Fahrdynamik, ID: ST_DISP_DRDY) - Qualifier | 1 |
| 0xD02C67 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Qualifier | 1 |
| 0xD02C75 | Signalfehler (Sensor Daten Frontraumüberwachung, ID: SEN_DT_HDWOBS) - Ungültig | 1 |
| 0xD02C76 | Signalfehler (Sensor Daten Frontraumüberwachung, ID: SEN_DT_HDWOBS) - Undefiniert | 1 |
| 0xD02C7D | Signalfehler (Status Reifen, ID: ST_TYR) - Ungültig | 1 |
| 0xD02C7E | Signalfehler (Status Reifen, ID: ST_TYR) - Undefiniert | 1 |
| 0xD02C7F | Signalfehler (Status Reifen, ID: ST_TYR) - Qualifier | 1 |
| 0xD02C81 | Signalfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Ungültig | 1 |
| 0xD02C82 | Signalfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Undefiniert | 1 |
| 0xD02C8E | Signalfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Undefiniert | 1 |
| 0xD02C8F | Signalfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Qualifier | 1 |
| 0xD02D01 | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Qualifier | 1 |
| 0xD02D02 | Signalfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Qualifier | 1 |
| 0xD02D03 | Signalfehler (Ist Bremsmoment Rad, ID: AVL_BRTORQ_WHL) - Qualifier | 1 |
| 0xD02D04 | Signalfehler (Ist Anzahl Geberflanken Rad, ID: AVL_QUAN_EES_WHL) - Qualifier | 1 |
| 0xD02D05 | Signalfehler (Ist Drehzahl Rad, ID: AVL_RPM_WHL) - Qualifier | 1 |
| 0xD02D06 | Signalfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Qualifier | 1 |
| 0xD02D07 | Signalfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Qualifier | 1 |
| 0xD02D0E | Botschaftsfehler (Parken Querführung Umgebung, ID:PKG_LAG_ENVI) - Timeout | 1 |
| 0xD02D11 | Signalfehler (Parken Querführung Umgebung, ID:PKG_LAG_ENVI) - Ungültig | 1 |
| 0xD02D12 | Signalfehler (Parken Querführung Umgebung, ID:PKG_LAG_ENVI) - Undefiniert | 1 |
| 0xD02D14 | Botschaftsfehler (Abstand Meldung Sensor Seite Vorne, ID: GAP_MESS_SEN_Side_FS) Timeout | 1 |
| 0xD02D15 | Botschaftsfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Checksumme | 1 |
| 0xD02D16 | Botschaftsfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Alive | 1 |
| 0xD02D17 | Signalfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Ungültig | 1 |
| 0xD02D19 | Botschaftsfehler (Anzeige Schalter Fahrdynamik Technik Erleben, ID:DISP_SW_DRYD_TECGY_EXPI) - Timeout | 1 |
| 0xD02D1C | Signalfehler (Anzeige Schalter Fahrdynamik Technik Erleben, ID:DISP_SW_DRYD_TECGY_EXPI) - Ungültig | 1 |
| 0xD02D1D | Signalfehler (Anzeige Schalter Fahrdynamik Technik Erleben, ID:DISP_SW_DRYD_TECGY_EXPI) - Undefiniert | 1 |
| 0xD02D1F | Botschaftsfehler (Navigationsgraph Karten Daten, ID: NAV_GRAPH_MAPDATA)  - Timeout | 1 |
| 0xD02D22 | Signalfehler (Navigationsgraph Karten Daten, ID: NAV_GRAPH_MAPDATA)   - Ungültig | 1 |
| 0xD02D23 | Signalfehler (Navigationsgraph Karten Daten, ID: NAV_GRAPH_MAPDATA) -  Undefiniert | 1 |
| 0xD02D24 | Signalfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Qualifier | 1 |
| 0xD02D25 | Botschaftsfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Timeout | 1 |
| 0xD02D27 | Botschaftsfehler (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2 ) - Alive | 1 |
| 0xD02D29 | Signalfehler (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2 ) - Undefiniert | 1 |
| 0xD02D2B | Botschaftsfehler (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2 ) - Timeout | 1 |
| 0xD02D2E | Signalfehler (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2 ) - Ungültig | 1 |
| 0xD02D2F | Signalfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Undefiniert | 1 |
| 0xD02D31 | Botschaftsfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS) - Timeout | 1 |
| 0xD02D33 | Botschaftsfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS)  - Alive | 1 |
| 0xD02D34 | Signalfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Ungültig | 1 |
| 0xD02D35 | Signalfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS)  - Undefiniert | 1 |
| 0xD02D3A | Signalfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS)  - Ungültig | 1 |
| 0xD02D3D | Botschaftsfehler (Vorgabe Parametrisierung Night-Vision I-Brake ID: SPEC_PRMSN_NIVI_IBRK) - Timeout | 1 |
| 0xD02D40 | Signalfehler (Vorgabe Parametrisierung Night-Vision I-Brake ID: SPEC_PRMSN_NIVI_IBRK) - Ungültig | 1 |
| 0xD02D41 | Signalfehler (Vorgabe Parametrisierung Night-Vision I-Brake ID: SPEC_PRMSN_NIVI_IBRK) - Undefiniert | 1 |
| 0xD02D44 | Signalfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Qualifier | 1 |
| 0xD02D47 | Signalfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Qualifier | 1 |
| 0xD02D48 | Signalfehler (Status Lenkung Vorderachse, ID: ST_STE_FTAX) - Qualifier | 1 |
| 0xD02D54 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Qualifier | 1 |
| 0xD02D58 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Qualifier | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x286C | Beladungsindex_final | - | high | unsigned char | - | 1 | 100 | -0.2 |
| 0x286D | Beladungsindex_Höhenstand_VL | - | high | unsigned char | - | 1 | 100 | -0.2 |
| 0x286E | Beladungsindex_Höhenstand_HL | - | high | unsigned char | - | 1 | 100 | -0.2 |
| 0x286F | Beladungsindex_Höhenstand_HR | - | high | unsigned char | - | 1 | 100 | -0.2 |
| 0x2870 | Sensor_VL_Statt_HR_verwendet | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4000 | Aufrufende Funktion | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4001 | Info 16 Bit | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4002 | Info 32 Bit 1 | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4003 | Info 32 Bit 2 | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4100 | KL30 Spannung | V | high | unsigned char | - | 1 | 10 | 0 |
| 0x4200 | Geschwindigkeit | km/h | high | unsigned char | - | 2 | 1 | -100 |
| 0x4201 | Längsbeschleunigung | m/s^2 | high | signed char | - | 1 | 10 | 0 |
| 0x4202 | Querbeschleunigung | m/s^2 | high | signed char | - | 1 | 2 | 0 |
| 0x4203 | Gierrate | °/s | high | signed char | - | 1 | 0.77 | 0 |
| 0x4204 | Ritzelwinkel Vorderachse | ° | high | signed int | - | 1 | 1 | 0 |
| 0x4205 | Lenkwinkel Fahrer | ° | high | signed int | - | 1 | 23 | 0 |
| 0x4300 | ERRORMODE Register 1 | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4301 | ERRORMODE Register 2 | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4302 | ERRORMODE Register 3 | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4400 | ErrorManager Status ICMQL | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4401 | Aussentemperatur | °C | high | signed char | - | 1 | 1 | 0 |
| 0x4402 | Status Querbeschleunigung | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4403 | Status Querbeschleunigung 1 | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4404 | Status Querbeschleunigung 2 | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4405 | Status_Gierrate | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4406 | Status_Gierrate 1 | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4407 | Status_Gierrate 2 | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4408 | Status Sensor Längsbeschleunigung 1 | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4409 | Status Fahrerlenkwinkel | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x440A | Status Radlenkwinkel | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x440B | Längsbeschleunigung | m/s^2 | high | signed char | - | 1 | 10 | 0 |
| 0x440C | Lenkwinkel Fahrer | rad | high | signed char | - | 1 | 15 | 0 |
| 0x440D | Lenkwinkel VA | rad | high | signed char | - | 1 | 75 | 0 |
| 0x440E | Status Seitenneigung | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x440F | Längsgeschwindigkeit | km/h | high | unsigned char | - | 2 | 1 | -200 |
| 0x4410 | Status Aktuatorwinkel | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4411 | Fahrzustand | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4412 | Toleranz Abgleich ax | m/s^2 | high | unsigned char | - | 1 | 50 | 0 |
| 0x4413 | Querbeschleunigung 1 | m/s^2 | high | signed char | - | 1 | 2 | 0 |
| 0x4414 | Gierrate 1 | rad/s | high | signed char | - | 1 | 44 | 0 |
| 0x4415 | Längsbeschleunigung | m/s^2 | high | signed char | - | 1 | 10 | 0 |
| 0x4416 | R_SBS_0IN_de_D | rad | high | signed char | - | 1 | 8 | 0 |
| 0x4417 | Status Referenzgeschwindigkeit | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4418 | Querbeschleunigung 2 | m/s^2 | high | signed char | - | 1 | 2 | 0 |
| 0x4419 | Gierrate 2 | rad/s | high | signed char | - | 1 | 44 | 0 |
| 0x441A | Lenkwinkel Fahrer | rad | high | signed char | - | 1 | 15 | 0 |
| 0x441B | R_SBS_0IN_de_A | rad | high | signed char | - | 1 | 8 | 0 |
| 0x441C | R_SBS_0IN_de_wheel_R | rad | high | signed char | - | 1 | 1200 | 0 |
| 0x441E | Status Längsbeschleunigung Nutzsignal | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x441F | Status Vertikalbeschleunigung Nutzsignal | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4420 | Status Sensor Vertikalbeschleunigung | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4421 | Status Sensor Rollrate | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4422 | Status Rollrate Nutzsignal | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4423 | Status Sensor Nickrate | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4424 | Status Nickrate Nutzsignal | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4425 | Status Zahnstangenhub | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4426 | Status Lenkwinkequelle | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4427 | Rollrate | rad/s | high | signed int | - | 1 | 1 | 0 |
| 0x4428 | Vertikalbeschleunigung SBS | m/s^2 | high | signed int | - | 1 | 1 | 0 |
| 0x4429 | Rollrate SBS | rad/s | high | signed int | - | 1 | 1 | 0 |
| 0x442A | Drehzahl_Rad_VL | rad/s | high | unsigned int | - | 1 | 64 | -512 |
| 0x442B | Drehzahl_Rad_VR | rad/s | high | unsigned int | - | 1 | 64 | -512 |
| 0x442C | Drehzahl_Rad_HL | rad/s | high | unsigned int | - | 1 | 64 | -512 |
| 0x442D | Drehzahl_Rad_HR | rad/s | high | unsigned int | - | 1 | 64 | -512 |
| 0x442F | I_SBS_2VX_drive_stat | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4430 | Nickrate SBS | rad/s | high | signed int | - | 1 | 1 | 0 |
| 0x4431 | Vertikalbeschleunigung | m/s^2 | high | signed int | - | 1 | 1 | 0 |
| 0x4432 | Nickrate | rad/s | high | signed int | - | 1 | 1 | 0 |
| 0x4440 | Sensortemperatur | °C | high | signed int | - | 1 | 100 | 0 |
| 0x4441 | Sensor Rohwert Omega X | °/s | high | signed char | - | 1.882353 | 1 | 0 |
| 0x4442 | Sensor Rohwert Omega Y | °/s | high | signed char | - | 1.882353 | 1 | 0 |
| 0x4443 | Sensor Rohwert Omega Z | °/s | high | signed char | - | 1.462857 | 1 | 0 |
| 0x4444 | Sensor Rohwert A_X | g | high | signed char | - | 0.0383998 | 1 | 0 |
| 0x4445 | Sensor Rohwert A_Y | g | high | signed char | - | 0.0383998 | 1 | 0 |
| 0x4446 | Sensor Rohwert A_Z | g | high | signed char | - | 0.0383998 | 1 | 0 |
| 0x4447 | Wegstrecke_ECO_Segeln_ein | m | high | signed long | - | 1 | 1 | 0 |
| 0x4448 | Wegstrecke_ECO_Segeln_aus | m | high | signed long | - | 1 | 1 | 0 |
| 0x4449 | Wegstrecke_COMFORT | m | high | signed long | - | 1 | 1 | 0 |
| 0x444A | RNA_integral_ECO_Segeln_ein | m^2/s^2 | high | signed long | - | 1 | 1 | 0 |
| 0x444B | RNA_integral_ECO_Segeln_aus | m^2/s^2 | high | signed long | - | 1 | 1 | 0 |
| 0x444C | RNA_integral_COMFORT | m^2/s^2 | high | signed long | - | 1 | 1 | 0 |
| 0x444D | RPA_integral_ECO_Segeln_ein | m^2/s^2 | high | signed long | - | 1 | 1 | 0 |
| 0x444E | RPA_integral_ECO_Segeln_aus | m^2/s^2 | high | signed long | - | 1 | 1 | 0 |
| 0x444F | RPA_integral_COMFORT | m^2/s^2 | high | signed long | - | 1 | 1 | 0 |
| 0x4450 | GPS Geschwindigkeit | km/h | high | unsigned int | - | 1 | 200 | 0 |
| 0x4451 | SKR Wegstrecke | m | high | signed long | - | 1 | 1 | 0 |
| 0x4452 | SKR Lernzeit | s | high | unsigned int | - | 1 | 1 | 0 |
| 0x4453 | Strassentyp | hex | high | unsigned char | TAB_TYP_STRASSE | 1 | 1 | 0 |
| 0x4454 | ISO Country Code | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x4455 | Korrekturfaktor Radradius 1 | % | high | signed int | - | 1 | 100 | 0 |
| 0x4456 | Korrekturfaktor Radradius 2 | % | high | signed int | - | 1 | 100 | 0 |
| 0x4457 | Geschwindigkeit 2 Byte | km/h | high | signed int | - | 1 | 100 | 0 |
| 0x4458 | EPS-Autoerkennung Lenkungsvariante | 0-n | High | 0xFF | TAB_EPS_VARIANTE | - | - | - |
| 0x4459 | EPS-Autoerkennung-Uebersetzungsvariante | 0-n | High | 0xFF | TAB_EPS_UEBERSETZUNG | - | - | - |
| 0x4500 | Lenkwinkel VA | rad | high | signed char | - | 1 | 5 | 0 |
| 0x4501 | Lenkwinkel VA Qualifier | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4502 | Lenkwinkel VA | rad | high | signed char | - | 1 | 5 | 0 |
| 0x4503 | Lenkwinkel VA Fehleramplitude | rad | high | unsigned char | - | 1 | 190 | 0 |
| 0x4504 | Cnvlyr_r_lwVA_akt_max_dyn | rad/s | high | unsigned char | - | 1 | 22 | 0 |
| 0x4505 | ASA Qualifier | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4506 | Lenkwinkel VA Qualifier | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4600 | Lenkwinkel HA soll | rad | high | signed char | - | 1 | 80 | 0 |
| 0x4601 | Lenkwinkel HA Qualifier | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4602 | Lenkwinkel HA ist | rad | high | signed char | - | 1 | 80 | 0 |
| 0x4603 | Lenkwinkel HA Fehleramplitude | rad | high | unsigned char | - | 1 | 1300 | 0 |
| 0x4604 | Cnvlyr_r_lwHA_akt_max_dyn | rad/s | high | unsigned char | - | 1 | 895 | 0 |
| 0x4605 | HSR Qualifier | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4606 | Lenkwinkel HA NutzSigQualifier | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4700 | Schneekettenerkennung FunktionsQualifier | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4701 | Cnvlyr_i_schalter_SK_HU | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4702 | EEprom_b_status_SK | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4750 | Sbs_i_1QE_1QI_Errmgr | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4751 | I_SBS_1QE_beta_stat | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4752 | I_SBS_1QI_stat | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4753 | I_SBS_1QI_Status_Info | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4754 | Schwimmwinkel | rad | high | signed int | - | 1 | 1 | 0 |
| 0x4755 | Sbs_r_beta_fzb_famp | rad | high | signed int | - | 1 | 1 | 0 |
| 0x4756 | Sbs_r_vy_fzb | m/s | high | signed int | - | 1 | 1 | 0 |
| 0x4757 | Sbs_r_vy_fzb_famp | m/s | high | signed int | - | 1 | 1 | 0 |
| 0x4758 | Sbs_r_betaP_fzb | rad/s | high | signed int | - | 1 | 1 | 0 |
| 0x4759 | Sbs_r_betaP_fzb_famp | rad/s | high | signed int | - | 1 | 1 | 0 |
| 0x475A | SBS_Control_vx_max | km/h | high | signed char | - | 2 | 1 | -100 |
| 0x475B | SBS_Control_vx_min | km/h | high | signed char | - | 2 | 1 | -100 |
| 0x475C | SBS_Control_vx_stat | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x475D | R_SBS_3AX_beta | rad | high | signed char | - | 1 | 100 | 0 |
| 0x475E | FdsWrA_i_FSP_Vektor | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4800 | Lernwert beide Kurven | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4801 | Lernwert Linkskurven | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4802 | Lernwert Rechtskurven | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4803 | Lernintervall beide Kurven | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4804 | Lerninterval Linkskurven | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4805 | Lerninterval Rechtskurven | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4806 | Status Lernalgorithmus | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4807 | Lenkwinkel Offset | rad | high | signed char | - | 1 | 500 | 0 |
| 0x4808 | Lenkwinkel Offset - Toleranz | rad | high | signed char | - | 1 | 500 | 0 |
| 0x4880 | LDM_Fahrzeuggeschwindigkeit | m/s | high | signed int | - | 1 | 10 | 0 |
| 0x4881 | LDM_Wunschgeschwindigkeit | - | high | signed int | - | 1 | 10 | 0 |
| 0x4882 | LDM_SCO_Status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4883 | LDM_ZSL_Status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4884 | LDM_HAK_Status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4885 | LDM_FAK_Status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4886 | LDM_Antriebsmoment | Nm | high | signed int | - | 1 | 1 | 0 |
| 0x4887 | LDM_Bremsmoment | Nm | high | signed int | - | 1 | 1 | 0 |
| 0x4888 | FAK_HAK_Status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4889 | ZSL_KFS_Status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x488A | LDM_Err_ID | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x488B | v_Wunsch_Red | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x488C | SIK_Dump | - | high | Motorola float | - | 1 | 1 | 0 |
| 0x488D | USI_Dump | - | high | Motorola float | - | 1 | 1 | 0 |
| 0x488E | SIH_Dump | - | high | Motorola float | - | 1 | 1 | 0 |
| 0x4900 | Zahnstangenkraft | kN | high | unsigned char | - | 1 | 5 | -25 |
| 0x4901 | Zahnstangengeschwindigkeit | mm/s | high | unsigned char | - | 2 | 1 | 0 |
| 0x4902 | Istleistung EPS | kW | high | unsigned char | - | 1 | 10 | -12 |
| 0x4903 | Prädizierte Leistung EPS | kW | high | unsigned char | - | 1 | 10 | -12 |
| 0x4904 | USP_Kaltstart_vorhanden | hex | high | unsigned int | - | 1 | 1 | 1 |
| 0x4905 | USP_MSA_Start_vorhanden | hex | high | unsigned int | - | 1 | 1 | 1 |
| 0x4906 | USP_Motor_laeuft | hex | high | unsigned char | - | 1 | 1 | 1 |
| 0x4907 | USP_Status_Generatorentlastung | hex | high | unsigned char | - | 1 | 1 | 1 |
| 0x4908 | USP_DTC_ursaechlicher_Fehler | hex | high | signed long | - | 1 | 1 | 1 |
| 0x4909 | USP_globale_Bits_verfuegbar | hex | high | unsigned char | - | 1 | 1 | 1 |
| 0x490A | Nr verletzte Spannungsschwelle | 0-n | high | 0xff | TAB_SPANNUNGSSCHWELLE | 1 | 1 | 1 |
| 0xD62D | FES_MASTER_SW_FEHLER_INFO | hex | high | signed long | - | 1 | 1 | 0 |
| 0xD62E | FES_COORDINT_SW_FEHLER_INFO | hex | high | signed long | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### HW_MODEL

| WERT | TEXT |
| --- | --- |
| 0x00 | A-Muster |
| 0x40 | B-Muster |
| 0x80 | C-Muster |
| 0xC0 | D-Muster |
| 0xFF | Wert ungültig |

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
| 0x030591 | QDM - SBS Diversitäres Rechnen VX Info | 0 |
| 0x0305B0 | QDMFzgZuPa-QDMBs Beladungsschätzer Höhenstände zueinander unplausibel | 0 |
| 0x030760 | FES Koordinator Innenraum Softwarefehler | 0 |
| 0x030761 | FES Master Softwarefehler | 0 |
| 0x030813 | FAS - Frontschutz - Aktive Gefahrenbremsung ausgelöst | 0 |
| 0x030814 | FAS - pFGS - Verzögerungsanforderung | 0 |
| 0x030815 | FAS - CCM - Verzögerungsanforderung | 0 |
| 0x03081E | FAS - Kommunikationsfehler | 0 |
| 0x03081F | FAS - Frontschutz - Akutwarnung ausgelöst | 0 |
| 0x030850 | FAS - Frontschutz - Anbremsen Stufe 1 ausgelöst | 0 |
| 0x030851 | FAS - Frontschutz - Anbremsen Stufe 2 ausgelöst | 0 |
| 0x480028 | LDM Funktion - High-Level Vorwarnung Beschleunigungsüberwachung | 0 |
| 0x480029 | LDM Funktion - High-Level Vorwarnung Verzögerungsüberwachung | 0 |
| 0x480042 | Steuergerät intern Conversion Layer Fehler Signalumrechnung | 0 |
| 0x480077 | Aktivlenkung Funktion - Kann nicht in den aktiven Modus wechseln | 0 |
| 0x480115 | Fahrdynamikschalter - Zwangsaktivierung DSC | 0 |
| 0x480118 | Powermanagement Interface - EF Verbraucherschnittstelle ungültig | 0 |
| 0x480119 | Powermanagement Interface - Ansteuerung E-Lüfter auf Ersatzwert | 0 |
| 0x480120 | HSR Funktion - Kundenüberstimmung der SKE | 0 |
| 0x480130 | CC Koordinator - CC-Meldungsbedarf der internen Schnittstelle FAS | 0 |
| 0x480133 | SBS Funktion - Einachs-Rollenpruefstandserkennung, Rolle erkannt | 0 |
| 0x48013A | HSR Funktion - Kann nicht in den aktiven Modus wechseln | 0 |
| 0x48013C | CC Koordinator - CC-Meldungsbedarf der internen Schnittstelle ZFM | 0 |
| 0x480144 | LDM Funktion - BBS funktionale Deaktivierung | 0 |
| 0x480155 | HSR Funktion - Zwangsaktivierung im SK Modus | 0 |
| 0x480156 | HSR Funktion - Erinnerung SK Modus aktiv | 0 |
| 0x480157 | HSR Funktion - SKE Erinnerung | 0 |
| 0x48015D | SBS Funktion - Gierratensensor - Ackermanngierrate ungültig | 0 |
| 0x482606 | SBS Funktion - Lenkwinkel effektiv - Signaltoleranz aufgrund Abgleichstoleranz | 0 |
| 0x482607 | SBS Funktion - Längsbeschleunigungssensor - Signaltoleranz aufgrund nicht ausgeführtem Werksmodus | 0 |
| 0x48260A | SBS Funktion - Querbeschleunigungssensor - Fehlertoleranz auf Signal ay | 0 |
| 0x48260B | SBS Funktion - Lenkwinkel effektiv - Fehlertoleranz auf Signal psiP | 0 |
| 0x48260C | SBS Funktion - Lenkwinkel effektiv - Fehlertoleranz auf Signal Ist-Lenkwinkel VA | 0 |
| 0x48260D | Fahrzustandsbeobachter (FZB) - VCH an oberer Lerngrenze | 0 |
| 0x48260E | Fahrzustandsbeobachter (FZB) - VCH an unterter Lerngrenze | 0 |
| 0x482613 | Handling-Tabelle übergelaufen | 0 |
| 0x482627 | Zentrale Fehlerspeichersperre aktiv | 0 |
| 0x48264F | Schwimmwinkelschätzer - Fehlertoleranz SBS zu hoch | 0 |
| 0x482650 | Schwimmwinkelschätzer - Fehlertoleranz FZB zu hoch | 0 |
| 0x482651 | Schwimmwinkelschätzer - Inputs nicht gültig SBS | 0 |
| 0x482652 | Schwimmwinkelschätzer - Inputs nicht gültig FZB | 0 |
| 0x482653 | Schwimmwinkelschätzer - eingeschr. Modellgültigkeit | 0 |
| 0x482654 | Schwimmwinkelschätzer - Plausibilisierungsfehler | 0 |
| 0x482655 | Schwimmwinkelschätzer - Funktion nicht vorhanden oder Applikation | 0 |
| 0x482656 | Schwimmwinkelschätzer - interne Degradation wegen SBS | 0 |
| 0x482657 | Schwimmwinkelschätzer - interne Degradation wegen FZB | 0 |
| 0x482704 | Steuergerät intern CPU RAM Einzelbitfehler | 0 |
| 0x48270A | Steuergerät intern CPU Error Hook | 0 |
| 0x48273A | LLP - Geschwindigkeit (VX_ENTRY) fehlerhaft | 0 |
| 0x48273B | Lenkwinkel-Aufsetzalgorithmus - Korrektur der Ist-Position EPS | 0 |
| 0x48273D | Autosar - StandardCore - Analog-Digitalwandler - Wandlungszeit überschritten | 0 |
| 0x48273E | Autosar - StandardCore - Analog-Digitalwandler - Speicherzeit überschritten | 0 |
| 0x48273F | Autosar - StandardCore - CAN - Zeitüberschreitung | 0 |
| 0x482740 | Autosar - StandardCore - CAN - Interface - Sendepuffer voll | 0 |
| 0x482741 | Autosar - StandardCore - CAN - Interface - Nicht konsistentes Netzwerk | 0 |
| 0x482742 | Autosar - StandardCore - CAN - Interface - ungültige ID bei PDU-Empfang | 0 |
| 0x482743 | Autosar - StandardCore - CAN - Interface - ungültige ID bei PDU-Senden | 0 |
| 0x482744 | Autosar - StandardCore - CAN - Interface - angehalten | 0 |
| 0x482745 | Autosar - StandardCore - CAN - Netzwerkmanagement - Sendefehler | 0 |
| 0x482746 | Autosar - StandardCore - CAN - Netzwerkmanagement - Initialisierungsfehler | 0 |
| 0x482747 | Autosar - StandardCore - CAN - Transportprotokoll - fehlerhaft | 0 |
| 0x482748 | Autosar - StandardCore - CAN - Transportprotokoll - Operation wird nicht unterstützt | 0 |
| 0x482749 | Autosar - StandardCore - Netzwerkmanagement - Schlafbereitschaft  unerwartet | 0 |
| 0x48274A | Autosar - StandardCore - Netzwerkmanagement - Senden fehlgeschlagen | 0 |
| 0x48274B | Autosar - StandardCore - Netzwerkmanagement - Empfang NM Nachricht während Sendeverbot | 0 |
| 0x48274C | Autosar - StandardCore - Netzwerkmanagement - Start Übertragung fehlgeschlagen | 0 |
| 0x48274D | Autosar - StandardCore - Netzwerkmanagement - Stop Übertragung fehlgeschlagen | 0 |
| 0x48274E | Autosar - StandardCore - Diagnosemaster - Warteschlange voll | 0 |
| 0x48274F | Autosar - StandardCore - Diagnosemaster - Warteschlange geloescht | 0 |
| 0x482750 | Autosar - StandardCore - Diagnosemaster - ZEITBOTSCHAFTTIMEOUT | 1 |
| 0x482751 | Autosar - StandardCore - ECU - Manager - Alle laufenden Anforderungen abgebrochen | 0 |
| 0x482752 | Autosar - StandardCore - Flash - EEPROM Emulation - Lesefehler Cache | 0 |
| 0x482753 | Autosar - StandardCore - Flash - EEPROM Emulation - Initialisierungsfehler | 0 |
| 0x482754 | Autosar - StandardCore - Flash - EEPROM Emulation - Daten ungültig | 0 |
| 0x482755 | Autosar - StandardCore - Flash - EEPROM Emulation - Lesen gescheitert | 0 |
| 0x482756 | Autosar - StandardCore - Flash - EEPROM Emulation - Schreiben gescheitert | 0 |
| 0x482757 | Autosar - StandardCore - Flash - EEPROM Emulation - Schreibzyklen abgelaufen | 0 |
| 0x482758 | Autosar - StandardCore - Flash - EEPROM Emulation - Schreiben gescheitert | 0 |
| 0x482759 | Autosar - StandardCore - Flash - EEPROM Emulation - Übersetzung fehlt! | 0 |
| 0x48275A | Autosar - StandardCore - Flash - EEPROM Emulation - Übersetzung fehlt! | 0 |
| 0x48275B | Autosar - StandardCore - Flash - EEPROM Emulation - Übersetzung fehlt! | 0 |
| 0x48275C | Autosar - StandardCore - Flash - Loeschen gescheitert | 0 |
| 0x48275D | Autosar - StandardCore - Flash - Schreiben gescheitert | 0 |
| 0x48275E | Autosar - StandardCore - Flash - Lesen gescheitert | 0 |
| 0x48275F | Autosar - StandardCore - Flash - Vergleich gescheitert | 0 |
| 0x482760 | Autosar - StandardCore - Flexray - POC Status Halt | 0 |
| 0x482761 | Autosar - StandardCore - Flexray - Zugriffsfehler | 0 |
| 0x482762 | Autosar - StandardCore - Flexray - Fehler Datenkorrektur | 0 |
| 0x482763 | Autosar - StandardCore - Flexray - Fehler CRC | 0 |
| 0x482764 | Autosar - StandardCore - Flexray - Fehler Offsetkorrektur | 0 |
| 0x482765 | Autosar - StandardCore - Flexray - Fehler Geschwindigkeitskorrektur | 0 |
| 0x482766 | Autosar - StandardCore - Flexray - Synchronisierung verloren | 0 |
| 0x482767 | Autosar - StandardCore - Flexray - Spannung VBAT zu niedrig | 0 |
| 0x482768 | Autosar - StandardCore - Flexray - Spannung VCC zu niedrig | 0 |
| 0x482769 | Autosar - StandardCore - Flexray - Spannung VIO zu niedrig | 0 |
| 0x48276A | Autosar - StandardCore - Flexray - Job List Execution Synchronisation verloren | 0 |
| 0x48276B | Autosar - StandardCore - Flexray - Transceiver Kommunikation fehlerhaft | 0 |
| 0x48276C | Autosar - StandardCore - MCU - Prozessor - Fehler bei Takterzeugung | 0 |
| 0x48276D | Autosar - StandardCore - MCU - Prozessor - PLL nicht eingerastet | 0 |
| 0x48276E | Autosar - StandardCore - Nichtflüchtiger Speicher - Integität gescheitert | 0 |
| 0x48276F | Autosar - StandardCore - Nichtflüchtiger Speicher - Anfrage gescheitert | 0 |
| 0x482770 | Autosar - StandardCore - PIA - IO Fehler | 0 |
| 0x482771 | Autosar - StandardCore - VSM - Timeout Botschaft Fahrzeugzustand | 0 |
| 0x482772 | Autosar - StandardCore - WDG - Watchdog - abschalten nicht möglich | 0 |
| 0x482773 | Autosar - StandardCore - WDG - Watchdog - Modeumschaltung nicht möglich | 0 |
| 0x482774 | Autosar - StandardCore - WDG - Watchdog - Fehler bei der Aliveüberwachung | 0 |
| 0x482775 | Autosar - StandardCore - WDG - Watchdog - Fehler bei der Modeumschaltung | 0 |
| 0x482778 | Autosar - StandardCore - Flexray - Flexray Comm - Sendekonflikt | 0 |
| 0x482779 | Autosar - StandardCore - Flexray - Flexray NM - Interface nicht verfügbar | 0 |
| 0x48277A | Autosar - StandardCore - Flexray - Flexray Transceiver - nicht ansprechbar | 0 |
| 0x482780 | SBS Funktion - Lenkwinkel Fahrer - Ist Position EPS- Qualifier | 0 |
| 0x482781 | Lenkwinkel-Aufsetzalgorithmus - Aufgesetzt mittels Modellvergleich bzw. Anschlag lenken | 0 |
| 0x482782 | Lenkwinkel-Aufsetzalgorithmus - Aufgesetzt mittels Indexsignal | 0 |
| 0x482783 | LLP - AX_KORR fehlerhaft | 0 |
| 0x482784 | LLP - STOP fehlerhaft | 0 |
| 0x482785 | LLP - RETURN fehlerhaft | 0 |
| 0x482786 | LLP - EXTRAP_PEL fehlerhaft | 0 |
| 0x482787 | LLP - EXTRAP_FZS fehlerhaft | 0 |
| 0x482788 | LLP - FZSREDUC_BRAKE fehlerhaft | 0 |
| 0x482789 | LLP - TEMP_A fehlerhaft | 0 |
| 0x48278A | SBS Funktion - Querbeschleunigungssensor - Fehleramplitude auf Querbeschleunigungsnutzsignal aufgrund Fehlerverdacht ay | 0 |
| 0x48278B | SBS Funktion - Gierratensensor - Fehleramplitude aufgrund Fehlerverdacht | 0 |
| 0x48278C | SBS Funktion - Längsbeschleunigungssensor - Fehleramplitude aufgrund Fehlerverdacht | 0 |
| 0x48278D | SBS Funktion - Lenkwinkel effektiv - Fehleramplitude aufgrund Fehlerverdacht | 0 |
| 0x48278E | Fahrdynamikschalter - Sperrung, aufgrund Fehler in Partnersteuergerät oder Reifendruckverlust | 0 |
| 0x482792 | LDM Funktion Überwachung KOM-Fehler | 1 |
| 0x48279A | HSR Funktion - Automatische Aktivierung von DSC auf HSR Funktionsfehler | 0 |
| 0x4827A0 | SBS Funktion - Rollrate - Fehleramplitude aufgrund Fehlerverdacht | 0 |
| 0x4827A4 | SBS Funktion - Nickrate - Fehleramplitude aufgrund Fehlerverdacht | 0 |
| 0x4827A8 | SBS Funktion - Vertikalbeschleunigung - Fehleramplitude aufgrund Fehlerverdacht | 0 |
| 0x4827B2 | Steuergerät intern - Overvoltage at Terminal 30 | 0 |
| 0x4827B3 | Steuergerät intern - Undervoltage at Terminal 30 | 0 |
| 0x4827BD | Steuergerät intern - Unerwarteter Reset erkannt (WDT, TRAP, HWRESET) | 0 |
| 0x4827C0 | Autosar - StandardCore - Netzwerkmanagement - IPDUM Sendefehler | 0 |
| 0x4827C5 | Steuergerät intern - 5V - Versorgung ausgefallen | 0 |
| 0x4827C6 | Lenkwinkelsensor AFS Schwerwiegender interner Fehler | 0 |
| 0x4827C7 | Lenkwinkelsensor AFS interner Fehler | 0 |
| 0x4827CA | Lenkwinkelsensor AFS allgemeiner Kalibrierungsfehler | 0 |
| 0x4827CB | Lenkwinkelsensor AFS Master-Slave Fehler | 0 |
| 0x4827CE | LDM Funktion LDM Software-Info | 0 |
| 0x4827DB | Steuergerät intern Flash PFlash Einfachbitfehler | 0 |
| 0x4827DD | Steuergerät intern Flash DFlash Einfachbitfehler | 0 |
| 0x4827E3 | Airbagsensorik Fehlerhaft | 0 |
| 0x4827F0 | Steuergerät intern Task Sequence Monitoring | 0 |
| 0x4827F4 | Botschaftsfehler (Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) - Timeout | 0 |
| 0x4827F5 | Botschaftsfehler (Navigation System Information, ID: NAV_SYS_INF) - Timeout | 0 |
| 0x4827F6 | Fahrdynamikschalter - Statistik Segeln Wegstrecken | 0 |
| 0x4827F7 | Fahrdynamikschalter - Statistik Segeln Integrale | 0 |
| 0x4827F8 | QDM-SKR - Korrekturfaktor Radradius - Lernbedingung 1 | 0 |
| 0x4827F9 | QDM-SKR - Korrekturfaktor Radradius - Lernbedingung 2 | 0 |
| 0xD02400 | Busfehler (Flexray) - Initialisierung fehlgeschlagen | 0 |
| 0xD02401 | Busfehler (Flexray) - Synchronisierung verloren | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x286C | Beladungsindex_final | - | high | unsigned char | - | 1 | 100 | -0.2 |
| 0x286D | Beladungsindex_Höhenstand_VL | - | high | unsigned char | - | 1 | 100 | -0.2 |
| 0x286E | Beladungsindex_Höhenstand_HL | - | high | unsigned char | - | 1 | 100 | -0.2 |
| 0x286F | Beladungsindex_Höhenstand_HR | - | high | unsigned char | - | 1 | 100 | -0.2 |
| 0x2870 | Sensor_VL_Statt_HR_verwendet | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4000 | Aufrufende Funktion | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4001 | Info 16 Bit | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4002 | Info 32 Bit 1 | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4003 | Info 32 Bit 2 | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4100 | KL30 Spannung | V | high | unsigned char | - | 1 | 10 | 0 |
| 0x4200 | Geschwindigkeit | km/h | high | unsigned char | - | 2 | 1 | -100 |
| 0x4201 | Längsbeschleunigung | m/s^2 | high | signed char | - | 1 | 10 | 0 |
| 0x4202 | Querbeschleunigung | m/s^2 | high | signed char | - | 1 | 2 | 0 |
| 0x4203 | Gierrate | °/s | high | signed char | - | 1 | 0.77 | 0 |
| 0x4204 | Ritzelwinkel Vorderachse | ° | high | signed int | - | 1 | 1 | 0 |
| 0x4205 | Lenkwinkel Fahrer | ° | high | signed int | - | 1 | 23 | 0 |
| 0x4300 | ERRORMODE Register 1 | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4301 | ERRORMODE Register 2 | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4302 | ERRORMODE Register 3 | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4400 | ErrorManager Status ICMQL | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4401 | Aussentemperatur | °C | high | signed char | - | 1 | 1 | 0 |
| 0x4402 | Status Querbeschleunigung | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4403 | Status Querbeschleunigung 1 | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4404 | Status Querbeschleunigung 2 | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4405 | Status_Gierrate | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4406 | Status_Gierrate 1 | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4407 | Status_Gierrate 2 | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4408 | Status Sensor Längsbeschleunigung 1 | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4409 | Status Fahrerlenkwinkel | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x440A | Status Radlenkwinkel | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x440B | Längsbeschleunigung | m/s^2 | high | signed char | - | 1 | 10 | 0 |
| 0x440C | Lenkwinkel Fahrer | rad | high | signed char | - | 1 | 15 | 0 |
| 0x440D | Lenkwinkel VA | rad | high | signed char | - | 1 | 75 | 0 |
| 0x440E | Status Seitenneigung | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x440F | Längsgeschwindigkeit | km/h | high | unsigned char | - | 2 | 1 | -200 |
| 0x4410 | Status Aktuatorwinkel | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4411 | Fahrzustand | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4412 | Toleranz Abgleich ax | m/s^2 | high | unsigned char | - | 1 | 50 | 0 |
| 0x4413 | Querbeschleunigung 1 | m/s^2 | high | signed char | - | 1 | 2 | 0 |
| 0x4414 | Gierrate 1 | rad/s | high | signed char | - | 1 | 44 | 0 |
| 0x4415 | Längsbeschleunigung | m/s^2 | high | signed char | - | 1 | 10 | 0 |
| 0x4416 | R_SBS_0IN_de_D | rad | high | signed char | - | 1 | 8 | 0 |
| 0x4417 | Status Referenzgeschwindigkeit | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4418 | Querbeschleunigung 2 | m/s^2 | high | signed char | - | 1 | 2 | 0 |
| 0x4419 | Gierrate 2 | rad/s | high | signed char | - | 1 | 44 | 0 |
| 0x441A | Lenkwinkel Fahrer | rad | high | signed char | - | 1 | 15 | 0 |
| 0x441B | R_SBS_0IN_de_A | rad | high | signed char | - | 1 | 8 | 0 |
| 0x441C | R_SBS_0IN_de_wheel_R | rad | high | signed char | - | 1 | 1200 | 0 |
| 0x441E | Status Längsbeschleunigung Nutzsignal | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x441F | Status Vertikalbeschleunigung Nutzsignal | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4420 | Status Sensor Vertikalbeschleunigung | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4421 | Status Sensor Rollrate | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4422 | Status Rollrate Nutzsignal | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4423 | Status Sensor Nickrate | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4424 | Status Nickrate Nutzsignal | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4425 | Status Zahnstangenhub | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4426 | Status Lenkwinkequelle | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4427 | Rollrate | rad/s | high | signed int | - | 1 | 1 | 0 |
| 0x4428 | Vertikalbeschleunigung SBS | m/s^2 | high | signed int | - | 1 | 1 | 0 |
| 0x4429 | Rollrate SBS | rad/s | high | signed int | - | 1 | 1 | 0 |
| 0x442A | Drehzahl_Rad_VL | rad/s | high | unsigned int | - | 1 | 64 | -512 |
| 0x442B | Drehzahl_Rad_VR | rad/s | high | unsigned int | - | 1 | 64 | -512 |
| 0x442C | Drehzahl_Rad_HL | rad/s | high | unsigned int | - | 1 | 64 | -512 |
| 0x442D | Drehzahl_Rad_HR | rad/s | high | unsigned int | - | 1 | 64 | -512 |
| 0x442F | I_SBS_2VX_drive_stat | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4430 | Nickrate SBS | rad/s | high | signed int | - | 1 | 1 | 0 |
| 0x4431 | Vertikalbeschleunigung | m/s^2 | high | signed int | - | 1 | 1 | 0 |
| 0x4432 | Nickrate | rad/s | high | signed int | - | 1 | 1 | 0 |
| 0x4440 | Sensortemperatur | °C | high | signed int | - | 1 | 100 | 0 |
| 0x4441 | Sensor Rohwert Omega X | °/s | high | signed char | - | 1.882353 | 1 | 0 |
| 0x4442 | Sensor Rohwert Omega Y | °/s | high | signed char | - | 1.882353 | 1 | 0 |
| 0x4443 | Sensor Rohwert Omega Z | °/s | high | signed char | - | 1.462857 | 1 | 0 |
| 0x4444 | Sensor Rohwert A_X | g | high | signed char | - | 0.0383998 | 1 | 0 |
| 0x4445 | Sensor Rohwert A_Y | g | high | signed char | - | 0.0383998 | 1 | 0 |
| 0x4446 | Sensor Rohwert A_Z | g | high | signed char | - | 0.0383998 | 1 | 0 |
| 0x4447 | Wegstrecke_ECO_Segeln_ein | m | high | signed long | - | 1 | 1 | 0 |
| 0x4448 | Wegstrecke_ECO_Segeln_aus | m | high | signed long | - | 1 | 1 | 0 |
| 0x4449 | Wegstrecke_COMFORT | m | high | signed long | - | 1 | 1 | 0 |
| 0x444A | RNA_integral_ECO_Segeln_ein | m^2/s^2 | high | signed long | - | 1 | 1 | 0 |
| 0x444B | RNA_integral_ECO_Segeln_aus | m^2/s^2 | high | signed long | - | 1 | 1 | 0 |
| 0x444C | RNA_integral_COMFORT | m^2/s^2 | high | signed long | - | 1 | 1 | 0 |
| 0x444D | RPA_integral_ECO_Segeln_ein | m^2/s^2 | high | signed long | - | 1 | 1 | 0 |
| 0x444E | RPA_integral_ECO_Segeln_aus | m^2/s^2 | high | signed long | - | 1 | 1 | 0 |
| 0x444F | RPA_integral_COMFORT | m^2/s^2 | high | signed long | - | 1 | 1 | 0 |
| 0x4450 | GPS Geschwindigkeit | km/h | high | unsigned int | - | 1 | 200 | 0 |
| 0x4451 | SKR Wegstrecke | m | high | signed long | - | 1 | 1 | 0 |
| 0x4452 | SKR Lernzeit | s | high | unsigned int | - | 1 | 1 | 0 |
| 0x4453 | Strassentyp | hex | high | unsigned char | TAB_TYP_STRASSE | 1 | 1 | 0 |
| 0x4454 | ISO Country Code | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x4455 | Korrekturfaktor Radradius 1 | % | high | signed int | - | 1 | 100 | 0 |
| 0x4456 | Korrekturfaktor Radradius 2 | % | high | signed int | - | 1 | 100 | 0 |
| 0x4457 | Geschwindigkeit 2 Byte | km/h | high | signed int | - | 1 | 100 | 0 |
| 0x4458 | EPS-Autoerkennung Lenkungsvariante | 0-n | high | 0xFF | TAB_EPS_VARIANTE | 1 | 1 | 0 |
| 0x4459 | EPS-Autoerkennung-Uebersetzungsvariante | 0-n | high | 0xFF | TAB_EPS_UEBERSETZUNG | 1 | 1 | 0 |
| 0x4500 | Lenkwinkel VA | rad | high | signed char | - | 1 | 5 | 0 |
| 0x4501 | Lenkwinkel VA Qualifier | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4502 | Lenkwinkel VA | rad | high | signed char | - | 1 | 5 | 0 |
| 0x4503 | Lenkwinkel VA Fehleramplitude | rad | high | unsigned char | - | 1 | 190 | 0 |
| 0x4504 | Cnvlyr_r_lwVA_akt_max_dyn | rad/s | high | unsigned char | - | 1 | 22 | 0 |
| 0x4505 | ASA Qualifier | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4506 | Lenkwinkel VA Qualifier | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4600 | Lenkwinkel HA soll | rad | high | signed char | - | 1 | 80 | 0 |
| 0x4601 | Lenkwinkel HA Qualifier | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4602 | Lenkwinkel HA ist | rad | high | signed char | - | 1 | 80 | 0 |
| 0x4603 | Lenkwinkel HA Fehleramplitude | rad | high | unsigned char | - | 1 | 1300 | 0 |
| 0x4604 | Cnvlyr_r_lwHA_akt_max_dyn | rad/s | high | unsigned char | - | 1 | 895 | 0 |
| 0x4605 | HSR Qualifier | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4606 | Lenkwinkel HA NutzSigQualifier | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4700 | Schneekettenerkennung FunktionsQualifier | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4701 | Cnvlyr_i_schalter_SK_HU | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4702 | EEprom_b_status_SK | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4750 | Sbs_i_1QE_1QI_Errmgr | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4751 | I_SBS_1QE_beta_stat | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4752 | I_SBS_1QI_stat | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4753 | I_SBS_1QI_Status_Info | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4754 | Schwimmwinkel | rad | high | signed int | - | 1 | 1 | 0 |
| 0x4755 | Sbs_r_beta_fzb_famp | rad | high | signed int | - | 1 | 1 | 0 |
| 0x4756 | Sbs_r_vy_fzb | m/s | high | signed int | - | 1 | 1 | 0 |
| 0x4757 | Sbs_r_vy_fzb_famp | m/s | high | signed int | - | 1 | 1 | 0 |
| 0x4758 | Sbs_r_betaP_fzb | rad/s | high | signed int | - | 1 | 1 | 0 |
| 0x4759 | Sbs_r_betaP_fzb_famp | rad/s | high | signed int | - | 1 | 1 | 0 |
| 0x475A | SBS_Control_vx_max | km/h | high | signed char | - | 2 | 1 | -100 |
| 0x475B | SBS_Control_vx_min | km/h | high | signed char | - | 2 | 1 | -100 |
| 0x475C | SBS_Control_vx_stat | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x475D | R_SBS_3AX_beta | rad | high | signed char | - | 1 | 100 | 0 |
| 0x475E | FdsWrA_i_FSP_Vektor | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x4800 | Lernwert beide Kurven | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4801 | Lernwert Linkskurven | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4802 | Lernwert Rechtskurven | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4803 | Lernintervall beide Kurven | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4804 | Lerninterval Linkskurven | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4805 | Lerninterval Rechtskurven | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x4806 | Status Lernalgorithmus | hex | high | signed long | - | 1 | 1 | 0 |
| 0x4807 | Lenkwinkel Offset | rad | high | signed char | - | 1 | 500 | 0 |
| 0x4808 | Lenkwinkel Offset - Toleranz | rad | high | signed char | - | 1 | 500 | 0 |
| 0x4880 | LDM_Fahrzeuggeschwindigkeit | m/s | high | signed int | - | 1 | 10 | 0 |
| 0x4881 | LDM_Wunschgeschwindigkeit | - | high | signed int | - | 1 | 10 | 0 |
| 0x4882 | LDM_SCO_Status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4883 | LDM_ZSL_Status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4884 | LDM_HAK_Status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4885 | LDM_FAK_Status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4886 | LDM_Antriebsmoment | Nm | high | signed int | - | 1 | 1 | 0 |
| 0x4887 | LDM_Bremsmoment | Nm | high | signed int | - | 1 | 1 | 0 |
| 0x4888 | FAK_HAK_Status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4889 | ZSL_KFS_Status | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x488A | LDM_Err_ID | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x488B | v_Wunsch_Red | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x488C | SIK_Dump | - | high | Motorola float | - | 1 | 1 | 0 |
| 0x488D | USI_Dump | - | high | Motorola float | - | 1 | 1 | 0 |
| 0x488E | SIH_Dump | - | high | Motorola float | - | 1 | 1 | 0 |
| 0x4900 | Zahnstangenkraft | kN | high | unsigned char | - | 1 | 5 | -25 |
| 0x4901 | Zahnstangengeschwindigkeit | mm/s | high | unsigned char | - | 2 | 1 | 0 |
| 0x4902 | Istleistung EPS | kW | high | unsigned char | - | 1 | 10 | -12 |
| 0x4903 | Prädizierte Leistung EPS | kW | high | unsigned char | - | 1 | 10 | -12 |
| 0x4904 | USP_Kaltstart_vorhanden | hex | high | unsigned int | - | 1 | 1 | 1 |
| 0x4905 | USP_MSA_Start_vorhanden | hex | high | unsigned int | - | 1 | 1 | 1 |
| 0x4906 | USP_Motor_laeuft | hex | high | unsigned char | - | 1 | 1 | 1 |
| 0x4907 | USP_Status_Generatorentlastung | hex | high | unsigned char | - | 1 | 1 | 1 |
| 0x4908 | USP_DTC_ursaechlicher_Fehler | hex | high | signed long | - | 1 | 1 | 1 |
| 0x4909 | USP_globale_Bits_verfuegbar | hex | high | unsigned char | - | 1 | 1 | 1 |
| 0x490A | Nr verletzte Spannungsschwelle | 0-n | high | 0xff | TAB_SPANNUNGSSCHWELLE | 1 | 1 | 1 |
| 0xD62D | FES_MASTER_SW_FEHLER_INFO | hex | high | signed long | - | 1 | 1 | 0 |
| 0xD62E | FES_COORDINT_SW_FEHLER_INFO | hex | high | signed long | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### PROG_DEP_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | correctResult |
| 2 | incorrectResult |
| 3 | incorrectResult error SWE - HWE |
| 4 | incorrectResult error SWE - SWE |
| 255 | reserved |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00 |
| 1 | defaultSession |
| 2 | programmingSession |
| 3 | extendedDiagnosticSession |
| 4 | safetySystemDiagnosticSession |
| 64 | vehicleManufacturerSpecific_40 |
| 65 | codingSession |
| 66 | SWTSession |

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ECUMehrmalsProgrammierbar |
| 1 | ECUMindestensEinmalVollstaendigProgrammierbar |
| 2 | ECUNichtMehrProgrammierbar |

### RDTCI_LEV_DOP

| WERT | TEXT |
| --- | --- |
| 2 | reportDTCByStatusMask |
| 4 | reportDTCsnapshotRecordByDTCnumber |
| 6 | reportDTCextendedDataRecordByDTCnumber |
| 7 | reportNumberOfDTCbySeverityMaskRecord |
| 8 | reportDTCbySeverityMaskRecord |
| 9 | reportSeverityInformationOfDTC |
| 10 | reportSupportedDTC |
| 18 | reportNumberOfEmissionsRelatedOBDDTCByStatusMask |
| 19 | reportEmissionsRelatedOBDDTCByStatusMask |

### RES_0X2541

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALID_TEXT | TEXT | high | string[16] | - | - | 1.0 | 1.0 | 0.0 | Cal-ID auslesen (hier muss die Cal-ID wie bei Mode $09 (PID $04) ausgegeben werden). |
| STAT_CVN_WERT | HEX | high | unsigned long | - | - | - | - | - | CVN auslesen (hier muss die CVN wie bei Mode $09 (PID $06) ausgegeben werden) |

### RES_0X6000

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SG_ZUSTANDSMASTER_AB | Bit | high | BITFIELD | - | BF_SG_ZUSTANDSMASTER_AB | - | - | - | SG_ZUSTANDSMASTER_AB |
| STAT_SG_ZUSTANDSMASTER_CD | Bit | high | BITFIELD | - | BF_SG_ZUSTANDSMASTER_CD | - | - | - | SG_ZUSTANDSMASTER_CD |

### RES_0XA051

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA052

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA053

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA055

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA059

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA05B

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_DATEN_SCHREIBEN_AKTIV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Information ob der Schreibvorgang der Adaptivdaten läuft. |

### RES_0XA08D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Abarbeitungsstatus von der Routine |
| STAT_LENKRADWINKEL_IST_WERT | - | - | + | ° | high | long | - | - | 1.0 | 100.0 | 0.0 | aktueller  Istwert vom Lenkwinkelsensor  , reale Lenkwinkelwerte liegen im Bereich von -779.99° ... 779.94°, wenn FFFFFFFFh dann Default Wert (Fehler) |
| STAT_KALIBRIERUNG_ZAEHLER_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erfolgreich abgeschlossenen Kalibriervorgänge. FF Default Wert. Nach Überlauf wird wieder bei 0 weitergezaehlt . |

### RES_0XAB5B

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_EEPROM_SICHERN_NR | - | - | + | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der EEPROM Sicherung  0=Sicherung erfolgreich 1= Sicherung läuft |

### RES_0XD09A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_IST_GMK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-Zustand der GMK-Funktion (abhängig von Qualifiern der Eingänge) |
| STAT_ZUSTAND_SOLL_GMK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Soll-Zustand der GMK-Funktion |
| STAT_MMOTOR_OFFSET_EPS_WERT | Nm | high | char | - | - | 1.0 | 100.0 | 0.0 | Offset-Motormoment, das die EPS dem eigenen Motormoment additiv überlagert |
| STAT_OFFSET_EPS_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Qualifier zum OffsetMotormoment (2 = umsetzen; 14 = nicht umsetzen) |
| STAT_FUNKTION_GMK_CODIERUNG_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GMK-Funktion (1 = eincodiert; 0 = auscodiert) |
| STAT_MMOTOR_OFFSET_GMK_EPS_WERT | Nm | high | char | - | - | 1.0 | 100.0 | 0.0 | Offset-Motormoment, welches die EPS aufgrund der GMK Funktion zu stellen hat |
| STAT_LENKUNG_VERBAUT_FAHRZEUG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datensatz EPS ohne IAS (1..ja,0..nein) |
| STAT_EPS_FAKT_MOM_SERVICE_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Service-Qualifier der EPS für Umsetzung der Faktoren und des Offset-Motormoments (alles i.O wenn 32 od 33) |
| STAT_FUNKTION_GBR_KENNLINIE_NUMMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktiver GBR Kennliniensatz |

### RES_0XD140

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_HDC_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Stellung Taster HDC (0 = nicht betätigt , 1 = betätigt) |

### RES_0XD142

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_PDC_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Stellung Taster PDC (0 = nicht betätigt , 1 = betätigt) |

### RES_0XD14A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_PDC_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LED PDC (0 = aus, 1 = an) |

### RES_0XD17F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_HDC_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LED HDC (0 = aus, 1 = an) |

### RES_0XD612

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECO_GRUPPE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ECO und ECO+ |
| STAT_COMFORT_GRUPPE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Basis und Komfort |
| STAT_SONSTIGE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sonstige Modi |

### RES_0XD614

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WIPPE_VORNE | 0-n | high | unsigned char | - | TAB_TASTER_AKTION | 1.0 | 1.0 | 0.0 | Status Wippe Vorne TAB_TASTER_AKTION |
| STAT_WIPPE_HINTEN | 0-n | high | unsigned char | - | TAB_TASTER_AKTION | 1.0 | 1.0 | 0.0 | Status Wippe hinten TAB_TASTER_AKTION |

### RES_0XD625

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FES_LASTMODE | 0-n | high | unsigned char | - | TAB_MODUS_FAHRERLEBNIS | 1.0 | 1.0 | 0.0 | Aufstart Modus |
| STAT_FES_SLEEPTIME_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit bei Kl15 aus |

### RES_0XDB43

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TOPSIDEVIEW_TASTER_EIN | 0/1 | high | int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Zustand Taster 1=gedrueckt, 0=nicht betaetigt |

### RES_0XDBB8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GUELTIGKEIT_MLW_NR | 0-n | - | unsigned char | - | TAB_MLWSTATE_EAS | - | - | - | Status Motorlagewinkel |
| STAT_LINKER_ANSCHLAG_GELERNT_NR | 0-n | - | unsigned char | - | TAB_MLWSTATE_EAS | - | - | - | Status Endanschlag links |
| STAT_RECHTER_ANSCHLAG_GELERNT_NR | 0-n | - | unsigned char | - | TAB_MLWSTATE_EAS | - | - | - | Status Endanschlag rechts |

### RES_0XDBD1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORLAGEWINKEL_ISTWERT_AL_GRAD_WERT | ° | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Motorlagewinkel Absoult Istwert in Grad Quantisierung: ( (PH) = 0,04395 * (HEX) [rad] ) Skalierungsfaktor: ( (PH)[grad] = 180 / 3.141592 * (HEX) ) Wertebereich: ( -1440 grad...+1440 grad ) |
| STAT_MOTORLAGEWINKEL_ISTWERT_AL_QUALIFIER_NR | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | Beurteilung des AFS Motorlagewinkel Istwert 0 -- > Initialisierung 1 -- > Signalwert ist gueltig und abgesichert 2 -- > Signal ist gueltig 3 -- > Signal ist nicht vertrauenswuerdig 4 -- > Ersatzwert ist im Nutzsignal gesetzt 5 -- > Signal zu oft entprellt 6 -- > Signalwert ist ungueltig 7 -- > Sensor nicht vorhanden oder Signal ungueltig |
| STAT_AL_SERVICEQUALIFIER_NR | 0-n | - | char | - | TAB_OPERATINGSYSTEM_ICM_ASA | - | - | - | Beurteilung des AFS Servicequalifier: 33 -- > Drive Standby  34 -- > Drive 49 -- > Drive Standby, USW1 53 -- > Drive Standby, USW2  57 -- > Drive Standby, USW3 54 -- > Drive, USW1 50 -- > Drive, USW2 58 -- > Drive, USW3 104 -- > Error 128 -- > Initialisierung 224 -- > Postrun 225 -- > ReadyforDrive 227 -- > Drive_RampZero 228 -- > WaitForRLWSet 233 -- > ReadyForDrive Unterspannung 235 -- > Drive_RampZero Unterspannung 255 -- > Invalid |
| STAT_AL_SERVICEQUALIFIER_MLW_IST_NR | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | Beurteilung des MLW Istwert Service qualifier: 0 -- > Initialisierung 1 -- > Signalwert ist gueltig und abgesichert 2 -- > Signal ist gueltig 3 -- > Signal ist nicht vertrauenswuerdig 4 -- > Ersatzwert ist im Nutzsignal gesetzt 5 -- > Signal zu oft entprellt 6 -- > Signalwert ist ungueltig 7 -- > Sensor nicht vorhanden oder Signal ungueltig |
| STAT_MOTORLAGEWINKEL_SOLLWERT_AL_GRAD_WERT | ° | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Motorlagewinkel Absolut Sollwert in Grad Quantisierung: ( (PH) = 0,04395 * (HEX) [rad] ) Skalierungsfaktor: ( (PH)[grad] = 180 / 3.141592 * (HEX) ) Wertebereich: ( -1440 grad...+1440 grad ) |
| STAT_MOTORLAGEWINKEL_SOLLWERT_AL_QUALIFIER_NR | 0-n | - | char | - | TAB_MLW_QUAL | - | - | - | Qualifier MLW Aktivlenkung |
| STAT_ZFMDKVQ_I_ZS_VX_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMDKRQ_I_ZS_RQ_AFS_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMDKFQ_I_ZS_FQ_GRRPLUS_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMDKVQ_B_LWVA_STG_UMG_FMP_S1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMDKVQ_B_LWVA_STG_UMG_FMP_S2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMABLEN_I_ASA_AKT_ZST_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0XDBD4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRER_LENKWINKEL_GRAD_WERT | ° | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Fahrerlenkwinkel |
| STAT_GUELTIGKEIT_FAHRER_LENKWINKEL_NR | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | - |
| STAT_MOTORLAGEWINKEL_ABSOLUT_AL_GRAD_ISTWERT_WERT | ° | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Motorlagewinkel der Aktivlenkung: Absolut Istwert in Grad |
| STAT_GUELTIGKEIT_MOTORLAGEWINKEL_ABSOLUT_AL_ISTWERT_NR | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | Aktueller Status des Motorlagewinkel Ist 0 = MLW ungültig 1 = MLW gültig 2 = Initialisierung 3 = Timeout |
| STAT_MOTORLAGEWINKEL_ABSOLUT_AL_GRAD_SOLLWERT_WERT | ° | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Motorlagewinkel der Aktivlenkung: Absolut Sollwert in Grad |
| STAT_GUELTIGKEIT_MOTORLAGEWINKEL_ABSOLUT_SOLLWERT_NR | 0-n | - | char | - | TAB_MLW_QUAL | - | - | - | Aktueller Status des Motorlagewinkel Soll 0 = Sollwert nicht umsetzen 1 = Sollwert umsetzen 2 = Rotorlage in ASA SG gültig setzen 3 = Rotorlage in ASA SG ungültig setzen |
| STAT_SUMMENLENKWINKELROH_GRAD_WERT | ° | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | intern berechneter Summenlenkwinkel in Grad. Virtueller Wert - kein Sensor ist vorhanden |
| STAT_GUELTIGKEIT_SUMMENWINKELROH_NR | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | Gueltigkeitsbeurteilung des Summenlenkwinkel 0 -- > Initialisierung 1 -- > Signalwert ist gueltig und abgesichert 2 -- > Signal ist gueltig 3 -- > Signal ist nicht vertrauenswuerdig 4 -- > Ersatzwert ist im Nutzsignal gesetzt 5 -- > nicht definiert 6 -- > Signalwert ist ungueltig 7 -- > Sensor ist nicht vorhanden oder Signal ungueltig |

### RES_0XDBD5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AL_GUELTIGKEIT_MLW_NR | 0-n | - | char | - | TAB_MLW_GUELTIGKEIT | - | - | - | Aktueller Status des Motorlagewinkel |
| STAT_AL_GUELTIGKEIT_MLW_INITMODE_NR | 0-n | - | char | - | TAB_MLWGUE | - | - | - | Aktueller Status des Motorlagewinkel |

### RES_0XDBD6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERVO_VENTIL_STROM_IST_WERT | A | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aktueller Strom am Servo Ventil. |
| STAT_SERVO_VENTIL_ZUSTAND_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Zustand des Servo Ventil. |
| STAT_SERVO_VENTIL_ZUSTAND_STEUERUNG | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Servo Ventil 0 - SERVO Ventil aus Modell (Normalbetrieb SG) angesteuert 1 - SERVO Ventil über Diagnosejob angesteuert. |

### RES_0XDBD7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECO_VENTIL_STROM_IST_WERT | A | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aktueller Strom am Eco Ventil. |
| STAT_ECO_VENTIL_ZUSTAND_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Zustand des Eco Ventil. |
| STAT_ECO_VENTIL_ZUSTAND_STEUERUNG | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Eco Ventil 0 - ECO Ventil aus Modell (Normalbetrieb SG) angesteuert 1 - ECO Ventil über Diagnosejob angesteuert. |

### RES_0XDBD9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GIERRATE_SENSOR_WERT | °/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gierrate. Gemittelter Wert aus SBS für Sensor 1 und 2. |
| STAT_GIERRATE_SENSOR_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung Sensor |

### RES_0XDBDA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Querbeschleunigung (Gemittelter Wert Sensor 1 und 2) |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung Sensor |

### RES_0XDBDB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAENGSBESCHLEUNIGUNG_SENSOR1_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Längsbeschleunigung Sensor 1 |
| STAT_LAENGSBESCHLEUNIGUNG_SENSOR1_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung Sensor 1 |

### RES_0XDBDC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DSC_TASTE_NR | 0-n | - | char | - | TAB_TASTER | - | - | - | Betätigungszustand DSC Taster |
| STAT_DSC_TASTE_ZUSTAND_NR | 0-n | - | char | - | TAB_TASTE_ZUSTAND | - | - | - | Funktionsbeurteilung DSC Taster |
| STAT_SPORT_TASTE_SPORT_NR | 0-n | - | char | - | TAB_TASTER | 1.0 | 1.0 | 0.0 | Betätigungszustand Fahrdynamik Taster in Richtung  Sport + (Sport-Taste) |
| STAT_SPORT_TASTE_SPORT_ZUSTAND_NR | 0-n | - | char | - | TAB_TASTE_ZUSTAND | - | - | - | Funktionsbeurteilung Sport Taster Richtung Sport |
| STAT_SPORT_TASTE_COMFORT_NR | 0-n | - | char | - | TAB_TASTER | - | - | - | Betätigungszustand Fahrdynamik Taster in Richtung Comfort -(Sport-Taste) |
| STAT_SPORT_TASTE_COMFORT_ZUSTAND_NR | 0-n | - | char | - | TAB_TASTE_ZUSTAND | - | - | - | Funktionsbeurteilung Sport Taster Richtung Comfort |
| STAT_SPORT_TASTE_NR | 0-n | - | char | - | TAB_TASTER_SPORT | - | - | - | Betätigungszustand Fahrdynamik Taster (Sport-Taste) |

### RES_0XDBE6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SZL_SNR_OFFSET_GUELTIG | 0/1 | low | unsigned char | 0x01 | - | 1.0 | 1.0 | 0.0 | Zustand: SZL Seriennummer oder SZL Offset. Ist dieser Wert ungültig, kann AFS nicht in Betrieb genommen werden. Zuordnung: 0 = In Ordnung ; 1 = Nicht in Ordnung |
| STAT_EPS_HANDMOMENT_GUELTIG | 0/1 | low | unsigned char | 0x02 | - | 1.0 | 1.0 | 0.0 | Zustand: EPS Handmoment. Ist dieser Wert ungültig, kann AFS nicht in Betrieb genommen werden. Zuordnung: 0 = In Ordnung ; 1 = Nicht in Ordnung |
| STAT_FAHRERLENKWINKEL_GUELTIG | 0/1 | low | unsigned char | 0x04 | - | 1.0 | 1.0 | 0.0 | Zustand: Fahrerlenkwinkel. Ist dieser Wert ungültig, kann AFS nicht in Betrieb genommen werden. Zuordnung: 0 = In Ordnung ; 1 = Nicht in Ordnung |
| STAT_EPS_QUALIFIER_GUELTIG | 0/1 | low | unsigned char | 0x08 | - | 1.0 | 1.0 | 0.0 | Zustand: EPS Funktionsqualifier. Ist dieser Wert ungültig, kann AFS nicht in Betrieb genommen werden. Zuordnung: 0 = In Ordnung ; 1 = Nicht in Ordnung |
| STAT_EPS_RUECKFALLEBENE_GUELTIG | 0/1 | low | unsigned char | 0x10 | - | 1.0 | 1.0 | 0.0 | Zustand: EPS Rückfallebene. Ist dieser Wert ungültig, kann AFS nicht in Betrieb genommen werden. Zuordnung: 0 = In Ordnung ; 1 = Nicht in Ordnung |
| STAT_ANSCHLAG_LINKS_GELERNT | 0/1 | low | unsigned char | 0x20 | - | 1.0 | 1.0 | 0.0 | Zustand: Linker Anschlag des AFS gelernt. Zuordnung: 0 = nicht gelernt ; 1 = gelernt |
| STAT_ANSCHLAG_RECHTS_GELERNT | 0/1 | low | unsigned char | 0x40 | - | 1.0 | 1.0 | 0.0 | Zustand: Rechter Anschlag des AFS gelernt. Zuordnung: 0 = nicht gelernt ; 1 = gelernt |
| STAT_EPS_RITZELWINKEL_GUELTIG | 0/1 | low | unsigned char | 0x80 | - | 1.0 | 1.0 | 0.0 | Zustand: EPS Ritzelwinkel. Ist dieser Wert ungültig, kann AFS nicht in Betrieb genommen werden. Zuordnung: 0 = In Ordnung ; 1 = Nicht in Ordnung |

### RES_0XDBEC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GIERRATE_1_SENSOR_ROHSIGNAL_WERT | °/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Rohsignal vom Gierratensensor 1 |
| STAT_GIERRATE_1_SENSOR_ROHSIGNAL_NR | 0-n | - | char | - | TAB_GUE_ROH | 1.0 | 1.0 | 0.0 | Plausibilisierung Sensor Rohsignal 1 |

### RES_0XDBED

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_1_ROHSIGNAL_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Rohsignal Querbeschleunigungssensor 1 |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_1_ROHSIGNAL_NR | 0-n | - | char | - | TAB_GUE_ROH | 1.0 | 1.0 | 0.0 | Plausibilisierung Sensor 1 |

### RES_0XDBEE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_2_ROHSIGNAL_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Rohsignal Querbeschleunigungssensor 2 |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_2_ROHSIGNAL_NR | 0-n | - | char | - | TAB_GUE_ROH | 1.0 | 1.0 | 0.0 | Plausibilisierung Sensor 2 |

### RES_0XDBEF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GIERRATE_SENSOR_2_ROHSIGNAL_WERT | °/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Rohsignal vom Gierratensensor 2 |
| STAT_GIERRATE_SENSOR_2_ROHSIGNAL_NR | 0-n | - | char | - | TAB_GUE_ROH | 1.0 | 1.0 | 0.0 | Plausibilisierung Sensor Rohsignal 2 |

### RES_0XDBF0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERVO_VENTIL_ZUSTAND_BIT0 | 0/1 | - | char | 0x01 | - | 1.0 | 1.0 | 0.0 | Fehlerzustand Servo Ventil 0 - SERVO Ventil fehlerhaft 1 - SERVO Ventil in Ordnung |
| STAT_SERVO_VENTIL_ZUSTAND_BIT1 | 0/1 | - | char | 0x02 | - | 1.0 | 1.0 | 0.0 | Fehlerzustand Servo Ventil 0 - SERVO Ventil nicht verbaut 1 - SERVO Ventil verbaut |
| STAT_SERVO_VENTIL_ZUSTAND_BIT3 | 0/1 | - | char | 0x08 | - | 1.0 | 1.0 | 0.0 | Fehlerzustand Servo Ventil 0 - SERVO Ventil nicht verfügbar 1 - SERVO Ventil verfügbar |

### RES_0XDBF1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECO_VENTIL_ZUSTAND_BIT0 | 0/1 | - | char | 0x01 | - | 1.0 | 1.0 | 0.0 | Fehlerzustand Eco Ventil 0 - Eco Ventil fehlerhaft 1 - Eco Ventil in Ordnung |
| STAT_ECO_VENTIL_ZUSTAND_BIT1 | 0/1 | - | char | 0x02 | - | 1.0 | 1.0 | 0.0 | Fehlerzustand ECO Ventil 0 - ECO Ventil nicht verbaut 1 - ECO Ventil verbaut |
| STAT_ECO_VENTIL_ZUSTAND_BIT3 | 0/1 | - | char | 0x08 | - | 1.0 | 1.0 | 0.0 | Fehlerzustand ECO Ventil 0 - ECO Ventil nicht verfügbar 1 - ECO Ventil verfügbar |

### RES_0XDBF3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAENGSBESCHLEUNIGUNG_SENSOR_1_ROHSIGNAL_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Rohsignal Längsbeschleunigungssensor 1 |
| STAT_LAENGSBESCHLEUNIGUNG_SENSOR_1_ROHSIGNAL_NR | 0-n | - | char | - | TAB_GUE_ROH | 1.0 | 1.0 | 0.0 | Plausibilisierung Sensor 1 |

### RES_0XDBFE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORLAGEWINKEL_ISTWERT_HSR_GRAD_WERT | ° | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Motorlagewinkel Absoult Istwert in Grad Quantisierung: ( (PH) = 0,04395 * (HEX) [rad] ) Skalierungsfaktor: ( (PH)[grad] = 180 / 3.141592 * (HEX) ) Wertebereich: ( -1440 grad...+1440 grad ) |
| STAT_MOTORLAGEWINKEL_ISTWERT_SR_QUALIFIER_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT_CHAR | - | - | - | Beurteilung des HSR Motorlagewinkel Istwert 0 -- > Initialisierung 1 -- > Signalwert ist gueltig und abgesichert 2 -- > Signal ist gueltig 3 -- > Signal ist nicht vertrauenswuerdig 4 -- > Ersatzwert ist im Nutzsignal gesetzt 5 -- > Signal zu oft entprellt 6 -- > Signalwert ist ungueltig 7 -- > Sensor nicht vorhanden oder Signal ungueltig |
| STAT_HSR_SERVICEQUALIFIER_NR | 0-n | - | char | - | TAB_OPERATINGSYSTEM_ICM_HSR | - | - | - | Beurteilung des HSR Service qualifier: 33 -- > Drive Standby  34 -- > Drive 49 -- > Drive Standby, USW1 53 -- > Drive Standby, USW2  57 -- > Drive Standby, USW3 54 -- > Drive, USW1 50 -- > Drive, USW2 58 -- > Drive, USW3 104 -- > Error 128 -- > Initialisierung 224 -- > Postrun 225 -- > ReadyforDrive 227 -- > Drive_RampZero 228 -- > WaitForRLWSet 233 -- > ReadyForDrive Unterspannung 235 -- > Drive_RampZero Unterspannung 255 -- > Invalid |
| STAT_HSR_SERVICEQUALIFIER_MLW_IST_NR | 0-n | - | char | - | TAB_SBS_GUELTIGKEIT_CHAR | - | - | - | Beurteilung des MLW Istwert Service qualifier: 0 -- > Initialisierung 1 -- > Signalwert ist gueltig und abgesichert 2 -- > Signal ist gueltig 3 -- > Signal ist nicht vertrauenswuerdig 4 -- > Ersatzwert ist im Nutzsignal gesetzt 5 -- > Signal zu oft entprellt 6 -- > Signalwert ist ungueltig 7 -- > Sensor nicht vorhanden oder Signal ungueltig |
| STAT_MOTORLAGEWINKEL_SOLLWERT_HSR_GRAD_WERT | ° | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Motorlagewinkel Absoult Sollwert in Grad Quantisierung: ( (PH) = 0,04395 * (HEX) [rad] ) Skalierungsfaktor: ( (PH)[grad] = 180 / 3.141592 * (HEX) ) Wertebereich: ( -1440 grad...+1440 grad ) |
| STAT_MOTORLAGEWINKEL_SOLLWERT_HSR_QUALIFIER_NR | 0-n | - | char | - | TAB_HSR_QUAL | - | - | - | Qualifier für MLW von HSR |
| STAT_ZFMDKVQ_I_ZS_HSRGIERKOMP_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMDKVQ_I_ZS_HSRFKT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMDKRQ_I_ZS_RQ_HSR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMDKSQ_I_ZS_SQ_HSR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMDKVQ_B_LWHA_STG_UMG_FMP_S1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMDKVQ_B_LWHA_STG_UMG_FMP_S2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMABLEN_I_HSR_AKT_ZST_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0XDC01

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SBS2EV_R_VCH_INTRO_B_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwerttoleranz (Beide Kurven) |
| STAT_SBS2EV_R_VCH_INTRO_L_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwerttoleranz (Linke Kurve) |
| STAT_SBS2EV_R_VCH_INTRO_R_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwerttoleranz (Rechte Kurve) |
| STAT_SBS_2EV_R_VCH_WERT0_B_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwert (Beide Kurven) |
| STAT_SBS_2EV_R_VCH_WERT0_L_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwert (Links Kurven) |
| STAT_SBS_2EV_R_VCH_WERT0_R_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwert (Rechts Kurven) |
| STAT_COMP_KYR_XR1_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Korrekturfaktor Rollrate (Kompensation Gierratenübersprechen) |
| STAT_COMP_OFS_AX1_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Längsbeschleunigungssensor 1 |
| STAT_COMP_OFS_AX1_TOL_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Längsbeschleunigung 1 |
| STAT_COMP_OFS_AY1_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Querbeschleunigungssensor 1 |
| STAT_COMP_OFS_AY1_TOL_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Querbeschleunigung 1 |
| STAT_COMP_OFS_AY2_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Querbeschleunigungssensor 2 |
| STAT_COMP_OFS_AY2_TOL_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Querbeschleunigung 2 |
| STAT_COMP_OFS_DE_WERT | rad | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Ritzelwinkel |
| STAT_COMP_OFS_DE_TOL_WERT | rad | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Ritzelwinkel |
| STAT_COMP_OFS_XR1_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Rollratensensor 1 |
| STAT_COMP_OFS_XR1_TOL_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Rollrate 1 |
| STAT_COMP_OFS_YR1_DRV_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 1 (aus Fahrtabgleich) |
| STAT_COMP_OFS_YR1_STST1_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 1 (aus Stillstandsabgleich) |
| STAT_COMP_OFS_YR1_TOL_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Gierrate 1 |
| STAT_COMP_OFS_YR2_DRV_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 2 (aus Fahrtabgleich) |
| STAT_COMP_OFS_YR2_STST_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 2 (aus Stillstandsabgleich) |
| STAT_COMP_OFS_YR2_TOL_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Gierrate 2 |
| STAT_COMP_SENS_AX1_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Längsbeschleunigungssensor 1 |
| STAT_COMP_SENS_VWHL_HL_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz hinten links |
| STAT_COMP_SENS_VWHL_HR_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz hinten rechts |
| STAT_COMP_SENS_VWHL_VL_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz vorne links |
| STAT_COMP_SENS_VWHL_VR_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz vorne rechts |
| STAT_COMP_SENS_XR1_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Rollratensensor 1 |
| STAT_COMP_SENS_YR1_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Gierratensensor 1 |
| STAT_COMP_SENS_YR2_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Gierratensensor 2 |
| STAT_I_SBS_3DE_IDE_CODE_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Lenkwinkelkodierüberwachung |
| STAT_I_AY1_SGN_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Querbeschleunigung 1 |
| STAT_I_AY2_SGN_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Querbeschleunigung 2 |
| STAT_I_YR1_SGN_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Gierrate 1 |
| STAT_I_YR2_SGN_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Gierrate 2 |
| STAT_I_YR_WH_SGN_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Gierrate (aus Radgeschwindigkeiten) |
| STAT_B_STATUS_SK_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Status Schneekettenerkennung |
| STAT_ZFMFS_OFS_AXM_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Längsbeschleunigung Motormoment |
| STAT_COMP_OFS_DEYR_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Lenkwinkelabgleich Gierrate |
| STAT_LWA_EPS_OFFSET_BESTAET_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Bestätigung EPS Positionsoffset |
| STAT_LWA_EPS_OFFS_KORR_ZAEHL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Korrekturzählerwert EPS Positionsoffset |
| STAT_COMP_OFS_AZ1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Vertikalbeschleunigungssensor 1 |
| STAT_COMP_OFS_AZ1_TOL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Vertikalbeschleunigungssensor 1 |
| STAT_COMP_OFS_RY1_STST_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Nickratensensor 1 Stillstandsabgleich |
| STAT_COMP_OFS_RY1_DRV_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Nickratensensor 1 Fahrtabgleich |
| STAT_COMP_OFS_RY1_TOL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Nickratensensor 1 |
| STAT_COMP_KYR_RY1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Korrekturfaktor Nickrate Kompensation Gierratenübersprechen |
| STAT_COMP_SENS_AZ1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Vertikalbeschleunigungssensor 1 |
| STAT_COMP_OFS_DEW_LT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Ritzelwinkel Rad |

### RES_0XDC05

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_VL_WERT | mm | - | motorola float | - | - | 1000.0 | 1.0 | 0.0 | Ausgabe des Höhenstandes vorn links in mm. |
| STAT_HOEHENSTAND_VR_WERT | mm | - | motorola float | - | - | 1000.0 | 1.0 | 0.0 | Ausgabe des Höhenstandes vorn rechts in mm. |
| STAT_HOEHENSTAND_HL_WERT | mm | - | motorola float | - | - | 1000.0 | 1.0 | 0.0 | Ausgabe des Höhenstandes hinten links in mm. |
| STAT_HOEHENSTAND_HR_WERT | mm | - | motorola float | - | - | 1000.0 | 1.0 | 0.0 | Ausgabe des Höhenstandes hinten rechts in mm. |

### RES_0XDC06

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_SENSOR_VL_NR | 0-n | - | int | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustandsabfrage Höhenstandssensor vorn links. |
| STAT_HOEHENSTAND_SENSOR_VR_NR | 0-n | - | int | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustandsabfrage Höhenstandssensor vorn rechts. |
| STAT_HOEHENSTAND_SENSOR_HL_NR | 0-n | - | int | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustandsabfrage Höhenstandssensor hinten links. |
| STAT_HOEHENSTAND_SENSOR_HR_NR | 0-n | - | int | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustandsabfrage Höhenstandssensor hinten rechts. |

### RES_0XDC07

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_ROHWERT_VL_WERT | V | - | int | - | - | 1.0 | 1000.0 | 0.0 | Rohsignal Sensor Höhenstand vorn links |
| STAT_HOEHENSTAND_ROHWERT_VR_WERT | V | - | int | - | - | 1.0 | 1000.0 | 0.0 | Rohsignal Sensor Höhenstand vorn rechts |
| STAT_HOEHENSTAND_ROHWERT_HL_WERT | V | - | int | - | - | 1.0 | 1000.0 | 0.0 | Rohsignal Sensor Höhenstand hinten links |
| STAT_HOEHENSTAND_ROHWERT_HR_WERT | V | - | int | - | - | 1.0 | 1000.0 | 0.0 | Rohsignal Sensor Höhenstand hinten rechts |

### RES_0XDC08

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_VERSORGUNG_VL_WERT | V | - | int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Versorgungsspannung des Sensor Höhenstand vorn links in mV. |
| STAT_HOEHENSTAND_VERSORGUNG_VR_WERT | V | - | int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Versorgungsspannung des Sensor Höhenstand vorn rechts in mV. |
| STAT_HOEHENSTAND_VERSORGUNG_HL_WERT | V | - | int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Versorgungsspannung des Sensor Höhenstand hinten links in mV. |
| STAT_HOEHENSTAND_VERSORGUNG_HR_WERT | V | - | int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Versorgungsspannung des Sensor Höhenstand hinten rechts in mV. |

### RES_0XDC0B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRADIENT_C0_VL_WERT | mV/mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C0 vorne links (mV/mm) |
| STAT_GRADIENT_C0_VR_WERT | mV/mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C0 vorne rechts (mV/mm) |
| STAT_GRADIENT_C0_HL_WERT | mV/mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C0 hinten links (mV/mm) |
| STAT_GRADIENT_C0_HR_WERT | mV/mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C0 hinten rechts (mV/mm) |
| STAT_GRADIENT_C1_VL_WERT | mV/mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C1 vorne links (mV/mm) |
| STAT_GRADIENT_C1_VR_WERT | mV/mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C1 vorne rechts (mV/mm) |
| STAT_GRADIENT_C1_HL_WERT | mV/mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C1 hinten links (mV/mm) |
| STAT_GRADIENT_C1_HR_WERT | mV/mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C1 hinten rechts (mV/mm) |
| STAT_OFFSET_S0_VL_WERT | mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S0 vorne links (mm) |
| STAT_OFFSET_S0_VR_WERT | mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S0 vorne rechts (mm) |
| STAT_OFFSET_S0_HL_WERT | mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S0 hinten links (mm) |
| STAT_OFFSET_S0_HR_WERT | mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S0 hinten rechts (mm) |
| STAT_OFFSET_S1_VL_WERT | mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S1 vorne links (mm) |
| STAT_OFFSET_S1_VR_WERT | mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S1 vorne rechts (mm) |
| STAT_OFFSET_S1_HL_WERT | mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S1 hinten links (mm) |
| STAT_OFFSET_S1_HR_WERT | mm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S1 hinten rechts (mm) |

### RES_0XDC13

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIVDATEN_RUECKSETZEN_AJ_DATA | DATA | - | data[2] | - | - | 1.0 | 1.0 | 0.0 | Adaptivdaten Grundeinstellung gesetzt |
| STAT_ADAPTIVDATEN_RUECKSETZEN_NR | 0-n | - | int | - | TAB_ADAPTIVDATEN_RESET | - | - | - | Adaptivdaten Grundeinstellung gesetzt |
| STAT_AX_AY_ABGLEICH_AJ_DATA | DATA | - | data[1] | - | - | 1.0 | 1.0 | 0.0 | Ablgeich Beschleunigungssensoren erfolgt |
| STAT_AX_AY_ABGLEICH_NR | 0-n | - | char | - | TAB_AX_AY_ABGLEICH | - | - | - | Ablgeich Beschleunigungssensoren erfolgt |
| STAT_ADAPTIVDATEN_WERKSMODUS_AJ_DATA | DATA | - | data[2] | - | - | 1.0 | 1.0 | 0.0 | Adaptivdaten Werkseinstellung gesetzt |
| STAT_ADAPTIVDATEN_WERKSMODUS_NR | 0-n | - | char | - | TAB_ADAPTIVDATEN_WERK | - | - | - | Adaptivdaten Werkseinstellung gesetzt |
| STAT_ADAPTIVDATEN_LERNWERTE_AKTIV_AJ_DATA | DATA | - | data[1] | - | - | 1.0 | 1.0 | 0.0 | Adaptivdaten im Lernbereich |
| STAT_ADAPTIVDATEN_LERNWERTE_AKTIV_NR | 0-n | - | char | - | TAB_ADAPTIVDATEN_LERNEN | - | - | - | Adaptivdaten im Lernbereich |

### RES_0XDC1C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKRADWINKEL_IST_WERT | ° | high | long | - | - | 1.0 | 100.0 | 0.0 | aktueller  Istwert vom Lenkwinkelsensor  , reale Lenkwinkelwerte liegen im Bereich von -779.99° ... 779.94°, wenn FFFFFFFFh dann Default Wert (Fehler) |
| STAT_SERIENUMMER_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Seriennummer 3 Bytes, Das höchstwertige Byte wird mit 0x00 belegt.  (BCD-Codiert) |
| STAT_BMW_TEILENUMMER_T1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabe BMW Teilenummer (BCD-Codiert) Teil 1, Byte 0...3 |
| STAT_BMW_TEILENUMMER_T2_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabe BMW Teilenummer (BCD-Codiert) Teil 2, Byte 4...7 |
| STAT_HERSTELLDATUM_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Herstelldatum 3 Bytes, Jahr Monat Tag, Das höchstwertige Byte wird mit 0x00 belegt.  (BCD-Codiert) |
| STAT_KALIBRIERUNG_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erfolgreich abgeschlossenen Kalibriervorgänge. FF Default Wert. Nach Überlauf wird wieder bei 0 weitergezaehlt . |

### RES_0XDC21

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CC_ZfmAbAfs_i_Errmgr_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_CC_MELDUNG_AFS_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Check Control Meldung |

### RES_0XDC22

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CC_ZfmAbHsr_i_Errmgr | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_CC_MELDUNG_HSR | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Checkcontrol Meldungen HSR (ZfmAbHsr_i_Ccmm). Statusbit ID669:0000 1000, Statusbit ID497:0001 0000, Statusbit ID496:0010 0000, Statusbit ID499:0100 0000, Statusbit ID500:1000 0000 |

### RES_0XDC23

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SKE_FQ_NR | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | - |
| STAT_QUAL_STAT_SKE_FQ_NR | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | - |
| STAT_SCHALTER_VON_HU_NR | 0-n | - | unsigned char | - | TAB_SCHNEEKETTE_SCHALTER_SK_HU | - | - | - | - |
| STAT_QUAL_STAT_SCHALTER_VON_HU_NR | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | - |
| STAT_ANZEIGE_VON_HU_NR | 0-n | - | unsigned char | - | TAB_SCHNEEKETTE_INIT | - | - | - | - |
| STAT_QUAL_STAT_ANZEIGE_VON_HU_NR | 0-n | - | unsigned char | - | TAB_SBS_GUELTIGKEIT | - | - | - | - |
| STAT_SCHALTER_AN_HU_NR | 0-n | - | unsigned char | - | TAB_SCHNEEKETTE_SCHALTER_SK_HU | - | - | - | - |
| STAT_ANZEIGE_AN_HU_NR | 0-n | - | unsigned char | - | TAB_SCHNEEKETTE_INIT | - | - | - | - |
| STAT_HSR_PASSIV_SK_NR | 0-n | - | unsigned char | - | TAB_HSR_AKTIV | - | - | - | - |

### RES_0XDC24

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VX_FS_QUAL | 0-n | - | char | - | - | 1.0 | 1.0 | 0.0 | VX Qualifier |
| STAT_REFERENZGESCHWINDIGKEIT_VX_WERT | km/h | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | VX - Fahrzeugreferenzgeschwindigkeit |
| STAT_ZFMFS_I_FAHRZUSTAND | 0-n | - | char | - | TAB_FAHRZUSTAND | - | - | - | Fahrzustand |
| STAT_ZFMABLEN_HSR_STAT_ASG_AKTIV | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMABLEN_HSR_STAT_ZSTACTDIAG_AKTIV | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMABLEN_HSR_ACTDIAG_FREIGABE_AKTIV | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0XDC25

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERUNG_EPS_AKTIV | 0/1 | - | char | 0x01 | - | 1.0 | 1.0 | 0.0 | Anforderung EPS: 0 = passiv ; 1 = aktiv |
| STAT_ANFORDERUNG_AL_LENKWINKELGESCHWINDIGKEIT_AKTIV | 0/1 | - | char | 0x02 | - | 1.0 | 1.0 | 0.0 | Anforderung Aktivlenkung Lenkwinkelgeschwindigkeit: 0 = passiv ; 1 = aktiv |
| STAT_ANFORDERUNG_AL_REGLER_AKTIV | 0/1 | - | char | 0x04 | - | 1.0 | 1.0 | 0.0 | Anforderung Aktivlenkung Regler: 0 = passiv ; 1 = aktiv |

### RES_0XDC26

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORSTEUERANTEIL_ASA_WERT | ° | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | ZfmVqLen_r_lw_VA_stg/Vorsteueranteil in Grad |
| STAT_REGLERANTEIL_ASA_WERT | ° | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | ZfmPvVs_r_lw_VA_reg/Regleranteil in Grad |
| STAT_UMSETZUNG_VORSTEUERWERT_FAMPDYN_ASA_NR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ZfmDkVq_b_lwVA_stg_umg_fmp_s2 0 Vorsteuerwert wird nicht umgeesetzt 1 Vorsteuerwert wird umgesetzt, Fehleramplitude und Max-Dynamik berücksichtigt |
| STAT_UMSETZUNG_VORSTEUERWERT_DYN_ASA_NR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ZfmDkVq_b_lwVA_stg_umg_fmp_s1 0 Vorsteuerwert wird nicht umgeesetzt 1 Vorsteuerwert wird umgesetzt, Fehleramplitude und Max-Dynamik berücksichtigt |
| STAT_VORSTEUERUNG_ASA_NR | 0-n | - | unsigned char | - | TAB_VORSTEUERUNG | 1.0 | 1.0 | 0.0 | ZfmVq_i_ZI_vx/Funktion Vorsteuerung |
| STAT_REGLER_ASA_NR | 0-n | - | unsigned char | - | TAB_VORSTEUERUNG | 1.0 | 1.0 | 0.0 | ZfmPvVs_i_ZI_Rq_AFS/Funktion Regler ASA |
| STAT_GRRPLUS_ASA_NR | 0-n | - | unsigned char | - | TAB_VORSTEUERUNG | 1.0 | 1.0 | 0.0 | ZfmFqFiMs_i_ZI_Fq_GRRplus/Funktion Regler GRRplus ASA |

### RES_0XDC27

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORSTEUERANTEIL_HSR_WERT | ° | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | ZfmVqLen_r_lw_HA_stg/Vorsteueranteil in Grad |
| STAT_REGLERANTEIL_HSR_WERT | ° | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | ZfmPvVs_r_lw_HA_reg/Regleranteil in Grad |
| STAT_UMSETZUNG_VORSTEUERWERT_FAMPDYN_HSR_NR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ZfmDkVq_b_lwHA_stg_umg_fampdyn 0 Vorsteuerwert wird nicht umgeesetzt 1 Vorsteuerwert wird umgesetzt, Fehleramplitude und Max-Dynamik berücksichtigt |
| STAT_UMSETZUNG_VORSTEUERWERT_DYN_HSR_NR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ZfmDkVq_b_lwHA_stg_umg_dyn 0 Vorsteuerwert wird nicht umgeesetzt 1 Vorsteuerwert wird umgesetzt, Fehleramplitude und Max-Dynamik berücksichtigt |
| STAT_REGLER_HSR_NR | 0-n | - | unsigned char | - | TAB_VORSTEUERUNG | 1.0 | 1.0 | 0.0 | ZfmPvVs_i_ZI_Rq_HSR/Funktion Regler HSR |

### RES_0XDC2A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NICKRATE_WERT | °/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Nickrate |
| STAT_NICKRATE_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung |

### RES_0XDC31

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_VL_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandsoffset |
| STAT_HOEHENSTAND_VR_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandsoffset |
| STAT_HOEHENSTAND_HL_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandsoffset |
| STAT_HOEHENSTAND_HR_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandsoffset |

### RES_0XDC33

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WANKRATE_WERT | °/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Wankrate |
| STAT_WANKRATE_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung |

### RES_0XDC34

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZfmDkVq_i_ZS_ArsSvSoll_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmDkVl_i_ZS_Vl_ArsSvSoll_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmDkRq_i_ZS_Rq_ARS_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmDkSq_i_ZS_Sq_ARS_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmDkRl_i_ZS_RL_ARS_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |

### RES_0XDC35

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZfmDkVq_i_ZS_GmvhSvSoll_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmDkVq_i_ZS_GmvhDvSoll_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmDkRq_i_ZS_Rq_GMVH_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmDkSq_i_ZS_Sq_GMVH_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmDkRq_i_ZS_Rq_GMVV_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmDkSq_i_ZS_Sq_GMVV_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |

### RES_0XDC37

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IST_DREHMOMENT_WERT | Nm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | PmiVk_r_mKW_ist/EF-Ist-Drehmoment [Nm] |
| STAT_SOLL_DREHMOMENT_WERT | Nm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | PmiVk_r_mKW_soll/EF-Ist-Drehmoment [Nm] |
| STAT_VORAUSSAGE_DREHMOMENT_WERT | Nm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | PmiVk_r_mKW_Voraussage/Voraussage [Nm] |
| STAT_MAXIMAL_DREHMOMENT_WERT | Nm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | PmiVk_r_mKW_soll_max/Maximales-EF-Drehmoment [Nm] |
| STAT_LUEFTERSTUFE | 0-n | - | unsigned char | - | - | - | - | - | PmiLsl_i_Luefterstufe [0-255] (wenn nicht verbaut = 255) |

### RES_0XDC39

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZfmDkVq_i_ZS_GmvhSvSoll_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmDkVq_i_ZS_GmvhDvSoll_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmDkRq_i_ZS_Rq_GMVH_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmDkSq_i_ZS_Sq_GMVH_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmDkRq_i_ZS_Rq_GMVV_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmDkSq_i_ZS_Sq_GMVV_NR | 0-n | - | unsigned char | - | TAB_FUNKTIONSREGLER | 1.0 | 1.0 | 0.0 | - |
| STAT_ZfmAbGmv_i_GMVH_akt_zst_NR | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Byteauswertung: ---- ---1 Aktor Fehler; ---- --1- Aktor nicht verbaut; ---- -1-- Aktor eingeschränkt verfügbar; ---- 1--- Aktor nicht verfügbar |
| STAT_ZfmAbGmv_i_GMVV_akt_zst_NR | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Byteauswertung: ---- ---1 Aktor Fehler; ---- --1- Aktor nicht verbaut; ---- -1-- Aktor eingeschränkt verfügbar; ---- 1--- Aktor nicht verfügbar |

### RES_0XDC3A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAKTORU_EPS_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Faktor, über den die GBR die Lenkunterstützung der EPS beeinflusst |
| STAT_FAKTORARD_EPS_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Faktor, über den die GBR die Dämpfung der EPS beinflusst |
| STAT_FAKTORARZ_EPS_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Faktor, über den die GBR den aktiven Rücklauf der EPS beeinflusst |
| STAT_MMOTOR_OFFSET_EPS_WERT | - | high | char | - | - | 1.0 | 100.0 | 0.0 | Offset-Motormoment, das die EPS dem eigenen Motormoment additiv überlagert |
| STAT_FAKTOR_EPS_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Qualifier zu den 3 Faktoren (2 = umsetzen, 14 = nicht umsetzen) |
| STAT_OFFSET_EPS_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Qualifier zum OffsetMotormoment (2 = umsetzen; 14 = nicht umsetzen) |
| STAT_FUNKTION_GBR_CODIERUNG_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GBR-Funktion (1 = eincodiert; 0 = auscodiert) |
| STAT_FUNKTION_GBR_KENNLINIE_NUMMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktiver GBR Kennliniensatz |
| STAT_EPS_FAKT_MOM_SERVICE_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Service-Qualifier der EPS für Umsetzung der Faktoren und des Offset-Motormoments (alles i.O wenn 32 od 33) |
| STAT_ZUSTAND_GRENZBEREICHSREUCKMELDUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-Zustand der GBR-Funktion (abhängig von Qualifiern der Eingänge) |

### RES_0XDC3B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_Cnvlyr_i_eps_mLenk_sq_NR | 0-n | - | unsigned char | - | TAB_MLWQUAL | 1.0 | 1.0 | 0.0 | Servicequalifier Schnittstelle EPS |
| STAT_ZfmWrA_i_mk_mHand_hc_sq_NR | 0-n | - | unsigned int | - | TAB_MLWQUAL | 1.0 | 1.0 | 0.0 | Servicequalifier Handmoment HC |
| STAT_ZfmWrE_r_mHandOffset_hc_WERT | Nm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Handmoment HC |
| STAT_ZfmWrA_r_mHandOffset_eps_WERT | Nm | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Handmoment EPS |

### RES_0XDC3C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SBS2EV_R_VCH_INTRO_B_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwerttoleranz (Beide Kurven) |
| STAT_SBS2EV_R_VCH_INTRO_L_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwerttoleranz (Linke Kurve) |
| STAT_SBS2EV_R_VCH_INTRO_R_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwerttoleranz (Rechte Kurve) |
| STAT_SBS_2EV_R_VCH_WERT0_B_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwert (Beide Kurven) |
| STAT_SBS_2EV_R_VCH_WERT0_L_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwert (Links Kurven) |
| STAT_SBS_2EV_R_VCH_WERT0_R_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwert (Rechts Kurven) |
| STAT_COMP_KYR_XR1_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Korrekturfaktor Rollrate (Kompensation Gierratenübersprechen) |
| STAT_COMP_OFS_AX1_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Längsbeschleunigungssensor 1 |
| STAT_COMP_OFS_AX1_TOL_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Längsbeschleunigung 1 |
| STAT_COMP_OFS_AY1_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Querbeschleunigungssensor 1 |
| STAT_COMP_OFS_AY1_TOL_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Querbeschleunigung 1 |
| STAT_COMP_OFS_AY2_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Querbeschleunigungssensor 2 |
| STAT_COMP_OFS_AY2_TOL_WERT | m/s² | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Querbeschleunigung 2 |
| STAT_COMP_OFS_DE_WERT | rad | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Ritzelwinkel |
| STAT_COMP_OFS_DE_TOL_WERT | rad | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Ritzelwinkel |
| STAT_COMP_OFS_XR1_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Rollratensensor 1 |
| STAT_COMP_OFS_XR1_TOL_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Rollrate 1 |
| STAT_COMP_OFS_YR1_DRV_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 1 (aus Fahrtabgleich) |
| STAT_COMP_OFS_YR1_STST1_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 1 (aus Stillstandsabgleich) |
| STAT_COMP_OFS_YR1_TOL_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Gierrate 1 |
| STAT_COMP_OFS_YR2_DRV_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 2 (aus Fahrtabgleich) |
| STAT_COMP_OFS_YR2_STST_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 2 (aus Stillstandsabgleich) |
| STAT_COMP_OFS_YR2_TOL_WERT | rad/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Gierrate 2 |
| STAT_COMP_SENS_AX1_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Längsbeschleunigungssensor 1 |
| STAT_COMP_SENS_VWHL_HL_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz hinten links |
| STAT_COMP_SENS_VWHL_HR_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz hinten rechts |
| STAT_COMP_SENS_VWHL_VL_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz vorne links |
| STAT_COMP_SENS_VWHL_VR_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz vorne rechts |
| STAT_COMP_SENS_XR1_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Rollratensensor 1 |
| STAT_COMP_SENS_YR1_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Gierratensensor 1 |
| STAT_COMP_SENS_YR2_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Gierratensensor 2 |
| STAT_I_SBS_3DE_IDE_CODE_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Lenkwinkelkodierüberwachung |
| STAT_I_AY1_SGN_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Querbeschleunigung 1 |
| STAT_I_AY2_SGN_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Querbeschleunigung 2 |
| STAT_I_YR1_SGN_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Gierrate 1 |
| STAT_I_YR2_SGN_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Gierrate 2 |
| STAT_I_YR_WH_SGN_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Gierrate (aus Radgeschwindigkeiten) |
| STAT_B_STATUS_SK_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Status Schneekettenerkennung |
| STAT_ZFMFS_OFS_AXM_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Längsbeschleunigung Motormoment |
| STAT_COMP_OFS_DEYR_WERT | - | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Lenkwinkelabgleich Gierrate |
| STAT_LWA_EPS_OFFSET_BESTAET_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Bestätigung EPS Positionsoffset |
| STAT_LWA_EPS_OFFS_KORR_ZAEHL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Korrekturzählerwert EPS Positionsoffset |
| STAT_COMP_OFS_AZ1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Vertikalbeschleunigungssensor 1 |
| STAT_COMP_OFS_AZ1_TOL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Vertikalbeschleunigungssensor 1 |
| STAT_COMP_OFS_RY1_STST_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Nickratensensor 1 Stillstandsabgleich |
| STAT_COMP_OFS_RY1_DRV_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Nickratensensor 1 Fahrtabgleich |
| STAT_COMP_OFS_RY1_TOL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Nickratensensor 1 |
| STAT_COMP_KYR_RY1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Korrekturfaktor Nickrate Kompensation Gierratenübersprechen |
| STAT_COMP_SENS_AZ1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Vertikalbeschleunigungssensor 1 |
| STAT_COMP_OFS_DEW_LT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Ritzelwinkel Rad |

### RES_0XDC3D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SZL_SN_GUELTIGKEIT_NR | 0-n | - | unsigned char | - | TAB_SZL_STATE | - | - | - | Zustandsabfrage Seriennummer SZL |
| STAT_SZL_SERIENNUMMER | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabe SZL Seriennummer |
| STAT_SZL_OFFSET_GUELTIG_NR | 0-n | - | unsigned char | - | TAB_SZL_OFFSET_GUELTIG | - | - | - | Gültigkeit Signal Offset bei  SZL Abgleich |
| STAT_SZL_OFFSET_WERT | ° | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | letzter Offset bei  SZL Abgleich |

### RES_0XDC42

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LLP_MANI_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Manueller Eingriff (0= nicht aktiv; 1 = aktiv) |
| STAT_LLP_MANI_WERT | kW | - | char | - | - | 1.0 | 10.0 | 0.0 | Manueller Wert |
| STAT_LLP_CALC_WERT | kW | - | char | - | - | 1.0 | 10.0 | 0.0 | Berechneter Wert |
| STAT_LLP_PEL_IST_WERT | kW | - | char | - | - | 1.0 | 10.0 | 0.0 | Gemessener Wert |
| STAT_LLP_FZS_WERT | N | high | int | - | - | 1.0 | 1.0 | 0.0 | Kraft Zahnstange |
| STAT_LLP_RITZELWINKEL_WERT | ° | high | int | - | - | 1.0 | 1.0 | 0.0 | Ritzelwinkel |
| STAT_LLP_ANTEIL_HUB_WERT | % | - | char | - | - | 1.0 | 1.0 | 0.0 | Normierter Zahnstangenhub |
| STAT_LLP_V_ZS_WERT | m/s | high | int | - | - | 1.0 | 1000.0 | 0.0 | Geschwindigkeit Zahnstange |
| STAT_LLP_FAHRERHANDMOMENT_WERT | Nm | - | int | - | - | 1.0 | 100.0 | 0.0 | Drehmoment Lenkrad (Fahrer) |
| STAT_LLP_VX_ENTRY | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit fehlerhaft |
| STAT_LLP_AX_KORR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Längsbeschleunigung fehlerhaft |
| STAT_LLP_RETURN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wenden erkannt |
| STAT_LLP_STOP | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Parken erkannt |
| STAT_LLP_EXTRAP_PEL | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Elektrische Leistung extrapoliert |
| STAT_LLP_EXTRAP_FZS | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kraft Zahnstange extrapoliert |
| STAT_LLP_FZSREDUC_BRAKE | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorderachse entbremst |
| STAT_LLP_PMA | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Parkenmanöverassistent erkannt |
| STAT_LLP_PDC | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Park Distance Control erkannt |
| STAT_LLP_TEMP_A | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Außentemperatur erkannt |
| STAT_LLP_RAIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Regen erkannt |
| STAT_LLP_FLAG_AX | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Längsbeschleunigung aktiv |
| STAT_LLP_FLAG_STOP | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Parken aktiv |
| STAT_LLP_FLAG_RAIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Regen aktiv |
| STAT_LLP_FLAG_PMA | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Parkenmanöverassistent aktiv |
| STAT_LLP_FLAG_PDC | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Park Distance Control aktiv |
| STAT_LLP_FLAG_RETURN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wenden aktiv |
| STAT_LLP_FLAG_TEMP_A | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Außentemperatur aktiv |
| STAT_LLP_FLAG_EXTRAP_FZS | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kraft Zahnstange aktiv |
| STAT_LLP_FLAG_EXTRAP_PEL | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Elektrische Leistung aktiv |
| STAT_LLP_FLAG_FZSREDUC_BRAKE | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorderachse aktiv |

### RES_0XDC4D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NICKRATE_ROHSIGNAL_WERT | °/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Rohsignal Sensor Nickrate |
| STAT_NICKRATE_ROHSIGNAL_NR | 0-n | - | char | - | TAB_GUE_ROH | 1.0 | 1.0 | 0.0 | Plausibilisierung |

### RES_0XDC4E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WANKRATE_ROHSIGNAL_WERT | °/s | - | motorola float | - | - | 1.0 | 1.0 | 0.0 | Rohsignal Sensor Wankrate |
| STAT_WANKRATE_ROHSIGNAL_NR | 0-n | - | char | - | TAB_GUE_ROH | 1.0 | 1.0 | 0.0 | Plausibilisierung |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### ROE_EWT_DOP

| WERT | TEXT |
| --- | --- |
| 101 | 101 |
| 102 | 102 |
| 103 | 103 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATUS_CALCVN | 0x2541 | - | Cal-ID (Calibration-ID) und CVN(Calibration Verification Number) auslesen. (OBD-Umfänge)   Byte-Layout: 20 Byte lang 00-15 = STAT_CALID_WERT 16-19 = STAT_CVN_EINH als Hex  unit32 im Intel Format | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2541 |
| START_ADAPTIVDATEN_RUECKSETZEN | 0xA051 | - | Start und Status Ruecksetzen Adaptivdaten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA051 |
| STEUERN_AX_AY_ABGLEICH | 0xA052 | - | Starten und Status Abgleich Beschleunigungssensoren | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA052 |
| START_ADAPTIVDATEN_WERKSMODUS | 0xA053 | - | Starten und Status Standardisierung Adaptivdaten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA053 |
| START_AL_MLW_RUECKSETZEN | 0xA055 | - | Start und Status Reset Motorlagewinkel | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA055 |
| STEUERN_AL_LW_CODIERUNG_INIT | 0xA058 | - | Adapivwerte auf Basiswerte setzen. Wird z.B benötigt um das SG bei fehlcodierter Aktivlenkung wieder flashbar zu machen. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| START_AL_MLW_OFFSET_SETZEN | 0xA059 | - | Start und Status Initialisierung AFS (im Energiesparmode gelernten MLW Offset an ASA senden) | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA059 |
| STEUERN_ADAPTIVDATEN_SLW_RESET | 0xA05B | - | Start und Status Summenlenkwinkel Reset | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA05B |
| DAC_RESET | 0xA087 | - | Starten DAC Reset Routine | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DAC_AUSLOESUNG | 0xA088 | - | Starten DAC Ausloese Routine | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LWS_OFFSET_ABGLEICH | 0xA08D | - | LWS wird zurückgesetzt und der mit dem Argument übergebene Parameter an den LWS übergeben. Der Job kann bei Geschwindigkeit bis 10 km/h gestartet werden. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA08D | RES_0xA08D |
| DAC_TESTNVRAM | 0xA090 | - | Start Routine DAC_TESTNVRAM | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_LWA_UEBERSETZUNG_EPS_RESET | 0xA1EE | - | Rücksetzen Übersetzung EPS Mit diesem Job wird der EEPROM-Wert Eeprom_LWA_uebersetzung_EPS auf 0 zurückgesetzt | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_HC_EIGENDIAGNOSE | 0xAB55 | - | Ansteuern der HC Eigendiagnose Spurwechselwarnung/Spurverlasswarnung. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB55 | - |
| STEUERN_EEPROM_SCHREIBEN | 0xAB5B | - | Start und Status Abspeichern Lerndaten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB5B |
| STEUERN_HOEHENSTAENDE_OFFSET_RESET | 0xAB78 | - | Starten Reset Höhenstand Offset | - | - | - | - | - | - | - | - | - | 31 | - | - |
| GMK_DATEN | 0xD09A | - | Auslesen GMK Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD09A |
| TASTER_HDC_EIN | 0xD140 | - | Auslesen und Vorgeben Stellung Taster HDC (0 = nicht betätigt , 1 = betätigt) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xD140 | RES_0xD140 |
| TASTER_PDC_EIN | 0xD142 | - | Auslesen und Vorgeben Stellung Taster PDC (0 = nicht betätigt , 1 = betätigt) | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xD142 | RES_0xD142 |
| LED_PDC_EIN | 0xD14A | - | Auslesen und Vorgeben LED PDC (0 = aus , 1 = an) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xD14A | RES_0xD14A |
| LED_HDC_EIN | 0xD17F | - | Auslesen und Vorgeben LED HDC (0 = aus , 1 = an) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xD17F | RES_0xD17F |
| STEUERN_FES_WIPPE | 0xD610 | - | Simulation eines Tastendrucks der FES Wippe | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD610 | - |
| STATUS_FES_MODUS | 0xD611 | STAT_FES_MODUS | aktueller FES Modus | 0-n | - | high | unsigned char | TAB_MODUS_FAHRERLEBNIS | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_FES_STATISTIK | 0xD612 | - | STATUS_FES_STATISTIK | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD612 |
| STEUERN_FES_MODUS | 0xD613 | - | Steuern des FES Modus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD613 | - |
| STATUS_FES_WIPPE | 0xD614 | - | Tastenstatus der FES Wippe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD614 |
| STATUS_VERBAU_FES_WIPPE | 0xD615 | STAT_VERBAU_FES_WIPPE | Gibt an ob die FES Wippe verbaut ist | 0/1 | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_DSC_TASTE | 0xD618 | STAT_DSC_TASTE | Status DSC Taste TAB_TASTER_AKTION | 0-n | - | high | unsigned char | TAB_TASTER_AKTION | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_VERBAU_DSC_TASTE | 0xD619 | STAT_VERBAU_DSC_TASTE | Status Verbau DSC Taste | 0/1 | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_DSC_TASTER | 0xD61A | - | STEUERN_DSC_TASTER | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD61A | - |
| STATUS_FES_DATEN | 0xD625 | - | Status FES Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD625 |
| STEUERN_FES_DATEN | 0xD626 | - | Steuern FES Daten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD626 | - |
| STATUS_LWA_UEBERSETZUNG_EPS | 0xDB3F | STAT_EEPROM_LWA_UEBERSETZUNG_EPS_WERT | Übersetzung EPS | m | - | high | motorola float | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_TOPSIDEVIEW_EIN | 0xDB43 | - | Auslesen Zustand Taster 1=gedrueckt, 0=nicht betaetigt | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDB43 | RES_0xDB43 |
| STATUS_MODUS_ROLLENPRUEFSTAND | 0xDB5B | STAT_ROLLENMODUS_NR | Statusabfrage Rollenmodus aktiv im ICM | 0-n | - | - | char | TAB_STATUS_ROLLENMODUS | - | - | - | - | 22 | - | - |
| STEUERN_MODUS_ROLLENPRUEFSTAND | 0xDB98 | - | Vorgeben Rollenmodus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB98 | - |
| MOTORLAGEWINKEL_INITIALISIERUNG_EAS | 0xDBB8 | - | Auslesen Status EAS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBB8 |
| STATUS_AL_ICM_VERBUND | 0xDBD1 | - | Auslesen Status AFS ICM Verbund | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD1 |
| STATUS_AL_MLWOFFSET_SETZEN | 0xDBD3 | STAT_MLW_GELERNT_WERT | Bei der Anschlag/Anschlag Lenkroutine gelernter Motorlagewinkeloffset | ° | - | - | motorola float | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_AL_WINKELWERTE | 0xDBD4 | - | Auslesen  AFS Winkel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD4 |
| STATUS_AL_MLW_INIT | 0xDBD5 | - | Auslesen Status AFS  Motorlagewinkel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD5 |
| STATUS_SERVO_VENTIL | 0xDBD6 | - | Auslesen Servoventil | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD6 |
| STATUS_ECO_VENTIL | 0xDBD7 | - | Auslesen ECO Ventil | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD7 |
| STATUS_GIERRATE | 0xDBD9 | - | Auslesen Gierrate | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD9 |
| STATUS_QUERBESCHLEUNIGUNG | 0xDBDA | - | Auslesen Querbeschleunigung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDA |
| STATUS_LAENGSBESCHLEUNIGUNG | 0xDBDB | - | Auslesen Laengsbeschleunigung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDB |
| STATUS_FAHRDYNAMIK_TASTEN | 0xDBDC | - | Auslesen Tasten Fahrdynamik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDC |
| STATUS_AL_INIT | 0xDBE6 | - | Auslesen Status AFS Inbetriebnahme | bit | - | - | BITFIELD | RES_0xDBE6 | - | - | - | - | 22 | - | - |
| STATUS_GIERRATE_1_ROHSIGNAL | 0xDBEC | - | Auslesen Rohsignal Gierrate 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBEC |
| STATUS_QUERBESCHLEUNIGUNG_1_ROHSIGNAL | 0xDBED | - | Auslesen Rohsignal Querbeschleunigung 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBED |
| STATUS_QUERBESCHLEUNIGUNG_2_ROHSIGNAL | 0xDBEE | - | Auslesen Rohsignal Querbeschleunigung 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBEE |
| STATUS_GIERRATE_2_ROHSIGNAL | 0xDBEF | - | Auslesen Rohsignal Gierrate 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBEF |
| STATUS_SERVO_VENTIL_ZUSTAND | 0xDBF0 | - | Auslesen Zustand Servoventil | bit | - | - | BITFIELD | RES_0xDBF0 | - | - | - | - | 22 | - | - |
| STATUS_ECO_VENTIL_ZUSTAND | 0xDBF1 | - | Ausgabe des aktuellen Zustand Eco Ventil | bit | - | - | BITFIELD | RES_0xDBF1 | - | - | - | - | 22 | - | - |
| STATUS_LAENGSBESCHLEUNIGUNG_1_ROHSIGNAL | 0xDBF3 | - | Auslesen Rohsignal Längsbeschleunigung 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF3 |
| STATUS_AKTIVIERUNG_SPURWECHSELWARNUNG | 0xDBF7 | STAT_SPURWECHSELWARNUNG_NR | Abfrage Spurwechselwarnung aktiv. | 0-n | - | - | char | TAB_HC_AKTIV | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_AKTIVIERUNG_SPURVERLASSSWARNUNG | 0xDBF8 | STAT_SPURVERLASSWARNUNG_NR | Abfrage Spurverlasswarnung aktiv. | 0-n | - | - | char | TAB_HC_AKTIV | - | - | - | - | 22 | - | - |
| STEUERN_AUSSENSPIEGEL_LED | 0xDBF9 | - | Ansteuern der Aussenspiegel LED durch HC | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDBF9 | - |
| STEUERN_LENKRAD_VIBRATION | 0xDBFA | - | Ansteuern der Lenkradvibration | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDBFA | - |
| STEUERN_AL_INITMODE | 0xDBFC | - | Vorgabe Status Aktivlenkung (AFS) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDBFC | - |
| STATUS_AL_INITMODE | 0xDBFD | STAT_AL_INITMODE_NR | Aktueller Status des AL Init mode | 0-n | - | - | char | TAB_AL_INITMODE | - | - | - | - | 22 | - | - |
| STATUS_HSR_ICM_VERBUND | 0xDBFE | - | Auslesen Status HSR ICM Verbund | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBFE |
| STEUERN_ADAPTIVWERTE_SETZEN | 0xDBFF | - | Vorgabe Adaptivdaten (nur Entwicklung) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDBFF | - |
| STATUS_ADAPTIVDATEN_LESEN | 0xDC01 | - | Auslesen Adaptivdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC01 |
| STATUS_HOEHENSTAENDE_LESEN | 0xDC05 | - | Auslesen Höhenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC05 |
| STATUS_HOEHENSTAENDE_SENSOREN | 0xDC06 | - | Auswertung / Zustandserkennung der Höhenstandssensoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC06 |
| STATUS_HOEHENSTAENDE_ROHWERTE_LESEN | 0xDC07 | - | Ausgabe Rohwert Höhenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC07 |
| STATUS_HOEHENSTAENDE_VERSORGUNG_LESEN | 0xDC08 | - | Auslesen Versorgungsspannung Höhenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC08 |
| STATUS_HOEHENSTAENDE_KALIBRIERUNG_LESEN | 0xDC0B | - | AusLesen Nullpunkt Hoehenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC0B |
| STATUS_FAHRDYNAMIK | 0xDC12 | STAT_FAHRDYNAMIK_NR | Angewähltes Fahrdynamikprogramm | 0-n | - | - | char | TAB_FAHRDYNAMIK | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ADAPTIVDATEN_ZUSTAND | 0xDC13 | - | Auslesen Status Adaptivdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC13 |
| LWS_WERTE | 0xDC1C | - | Auslesen Lenkwinkelsensor. Der Job kann bei Geschwindigkeit bis 10 km/h gestartet werden. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC1C |
| STATUS_AFS_CHECKCONTROL_MELDUNGEN_AKTUATOR | 0xDC21 | - | Auslesen Check Control Meldung (Aktuatorüberwachung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC21 |
| STATUS_HSR_CHECKCONTROL_MELDUNGEN | 0xDC22 | - | Check Control Meldung von ICM an Kombi. Ausgelöst durch Aktuatorüberwachung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC22 |
| STATUS_SCHNEEKETTENERKENNUNG | 0xDC23 | - | Zustandserkennung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC23 |
| STATUS_FREIGABE_AKTIVE_DIAGNOSE_HSR | 0xDC24 | - | Freigabe Aktive Diagnose HSR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC24 |
| STATUS_AEP_AL_HSR_EPS | 0xDC25 | - | not defined in diagnosis database | bit | - | - | BITFIELD | RES_0xDC25 | - | - | - | - | 22 | - | - |
| STATUS_FUNKTIONSNETZ_AL | 0xDC26 | - | Funktionsstatus Aktivlenkung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC26 |
| STATUS_FUNKTIONSNETZ_HSR | 0xDC27 | - | Funktionsstatus Aktivlenkung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC27 |
| STATUS_NICKRATE | 0xDC2A | - | Auslesen Nickrate | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC2A |
| STEUERN_HOEHENSTAENDE_OFFSET_VL | 0xDC2C | - | Vorgabe Nullpunkt Hoehenstandssensor vorne links | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC2C | - |
| STEUERN_HOEHENSTAENDE_OFFSET_VR | 0xDC2D | - | Vorgabe Nullpunkt Hoehenstandssensor vorne rechts | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC2D | - |
| STEUERN_HOEHENSTAENDE_OFFSET_HL | 0xDC2E | - | Vorgabe Nullpunkt Hoehenstandssensor hinten links | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC2E | - |
| STEUERN_HOEHENSTAENDE_OFFSET_HR | 0xDC2F | - | Vorgabe Nullpunkt Hoehenstandssensor hinten rechts | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC2F | - |
| STATUS_HOEHENSTAENDE_OFFSET_ZUSTAND | 0xDC31 | - | Auslesen Zustand Nullpunkt Hoehenstandssensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC31 |
| OUTPUT_LLP | 0xDC32 | - | Vorgabe geschätzte Lenkleistung | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDC32 | - |
| STATUS_WANKRATE | 0xDC33 | - | Auslesen Wankrate | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC33 |
| STATUS_ARS_ICM_VERBUND | 0xDC34 | - | Auslesen Status ARS ICM Verbund | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC34 |
| STATUS_GMV_ICM_VERBUND | 0xDC35 | - | Auslesen Status GMV ICM Verbund | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC35 |
| STATUS_PMI | 0xDC37 | - | Status Powermanagementinterface | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC37 |
| STEUERN_LENKRAD_VIBRATION_AMPLITUDE | 0xDC38 | - | Ansteuern der Lenkradvibration durch HC | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC38 | - |
| STATUS_GMV_ICM_VERBUND_2 | 0xDC39 | - | Auslesen Status GMV ICM Verbund | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC39 |
| STATUS_GBRPLUS | 0xDC3A | - | Auslesen Daten Grenzbereichsrückmeldung (GBR) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC3A |
| STATUS_MOMENTENKOORDINATOR_EPS | 0xDC3B | - | Auslesen Momentenkoordinator Lenkrad | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC3B |
| STATUS_ADAPTIVDATEN_PU_LESEN | 0xDC3C | - | Auslesen Adaptivdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC3C |
| STATUS_SZL_LESEN | 0xDC3D | - | Status SZL | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC3D |
| STATUS_LLP | 0xDC42 | - | Auslesen Daten Lenkleistungsprädiktion | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC42 |
| STATUS_NICKRATE_ROHSIGNAL | 0xDC4D | - | Auslesen Nickrate Rohsignal | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC4D |
| STATUS_WANKRATE_ROHSIGNAL | 0xDC4E | - | Auslesen Wankrate Rohsignal | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC4E |
| VARIANTENINDEX | 0xF151 | STAT_SG_VARIANTE_WERT | TAB_SG_VARIANTE | HEX | - | high | unsigned int | - | - | - | - | - | 22 | - | - |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| SG_ZUSTANDSMASTER_LESEN | 0x6000 | - | SG_Zustandmaster_Lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6000 |

### SUPPLIERINFO_FIELD

| WERT | TEXT |
| --- | --- |
| 0x00 | Defaultwert |
| 0xFF | Wert ungültig |

### SVK_VERSION_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | SVKVersion_01 |

### TAB_ADAPTIVDATEN

| WERT | TEXT |
| --- | --- |
| 0 | VCH Lernwerttoleranz (Beide Kurven) |
| 1 | VCH Lernwerttoleranz (Linke Kurve) |
| 2 | VCH Lernwerttoleranz (Rechte Kurve) |
| 3 | VCH Lernwert (beide Kurven) |
| 4 | VCH Lernwert (Linke Kurve) |
| 5 | VCH Lernwert (Rechte Kurve) |
| 6 | Korrekturfaktor für die Rollrate zur Kompensation des Gierratenuebersprechens |
| 7 | Offsetwert des Laengsbeschleunigungssensors 1 |
| 8 | Signaltoleranz des Laengsbeschleunigungsnutzsignals |
| 9 | Offsetwert des Querbeschleunigungssensors 1 |
| 10 | Signaltoleranz des Querbeschleunigungsnutzsignals 1 |
| 11 | Offsetwert des Querbeschleunigungssensors 2 |
| 12 | Signaltoleranz des Querbeschleunigungsnutzsignals |
| 13 | Offsetwert des Ritzelwinkels |
| 14 | Signaltoleranz des Ritzelwinkelnutzsignal |
| 15 | Offsetwert des Rollratensensors 1 |
| 16 | Signaltoleranz des Rollratennutzsignals 1 |
| 17 | Offsetwert des Gierratensensors 1 aus Fahrtabgleich |
| 18 | Offsetwert des Gierratensensors 1 aus Stillstandsabgleich |
| 19 | Signaltoleranz des Gierratennutzsignals 1 |
| 20 | Offsetwert des Gierratensensors 2 aus Fahrtabgleich |
| 21 | Offsetwert des Gierratensensors 2 aus Stillstandsabgleich |
| 22 | Signaltoleranz des Gierratennutzsignals 2 |
| 23 | Empfindlichkeit des Laengsbeschleunigungssensors 1 |
| 24 | Radtoleranz hinten links |
| 25 | Radtoleranz hinten rechts |
| 26 | Radtoleranz vorne links |
| 27 | Radtoleranz vorne rechts |
| 28 | Empfindlichkeit Rollratensensor 1 |
| 29 | Empfindlichkeit Gierratensensor 1 |
| 30 | Empfindlichkeit Gierratensensor 2 |
| 31 | Lernwert für die Lenkwinkelkodierueberwachung |
| 32 | Lernwert für die Vorzeichenueberwachung Querbeschleunigung 1 |
| 33 | Lernwert für die Vorzeichenueberwachung Querbeschleunigung 2 |
| 34 | Lernwert für die Vorzeichenueberwachung Gierrate 1 |
| 35 | Lernwert für die Vorzeichenueberwachung Gierrate 2 |
| 36 | Lernwert für die Vorzeichenueberwachung Gierrate aus Radgeschwindigkeiten |
| 37 | Status Schneekettenerkennung |
| 38 | Offset der Laengsbeschleunigung aus Motormoment |
| 39 | Offset des Lenkwinkelabgleich zur Gierrate |
| 40 | Bestaetigung EPS Positionsoffset |
| 41 | Korrekturzaehlerwert EPS Positionsoffset |
| 42 | Offsetwert des Vertikalbeschleunigungssensors 1 |
| 43 | Signaltoleranz des Vertikalbeschleunigungssensors 1 |
| 44 | Offsetwert des Nickratensensors 1 aus Stillstandsabgleich |
| 45 | Offsetwert des Nickratensensors 1 aus Fahrtabgleich |
| 46 | Signaltoleranz des Nickratensensors 1 |
| 47 | Korrekturfaktor für die Nickrate zur Kompensation des Gierratenuebersprechens |
| 48 | Empfindlichkeit Vertikalbeschleunigungssensor 1 |
| 49 | Offsetwert des Ritzelwinkels_Rad |
| 50 | Signaltoleranz des Ritzelwinkelnutzsignal_Rad |
| 51 | Offset des Lenkwinkelabgleich zur Gierrate_Rad |
| 255 | unbekannter Zustand |

### TAB_ADAPTIVDATEN_LERNEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Adaptivdaten nicht im Lernbereich |
| 0x01 | Adaptivdaten im Lernbereich |
| 0xFF | unbekannter Zustand |

### TAB_ADAPTIVDATEN_RESET

| WERT | TEXT |
| --- | --- |
| 0x00 | Adaptivdaten nicht auf Defaultwerte gesetzt |
| 0x01 | Adaptivdaten auf Defaultwerte gesetzt |
| 0xFF | unbekannter Zustand |

### TAB_ADAPTIVDATEN_WERK

| WERT | TEXT |
| --- | --- |
| 0x00 | Adaptivdaten nicht auf Werksdaten gesetzt |
| 0x01 | Adaptivdaten auf Werksdaten gesetzt |
| 0xFF | unbekannter Zustand |

### TAB_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Inaktiv |
| 0x01 | Aktiv |
| 0xFF | unbekannt |

### TAB_AL_INITMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | AL Initmode deaktiviert |
| 0x01 | AL Initmode aktiviert |

### TAB_AX_AY_ABGLEICH

| WERT | TEXT |
| --- | --- |
| 0x00 | Abgleich ax_ay muss noch erfolgen |
| 0x01 | Abgleich ax_ay erfolgt |
| 0xFF | unbekannter Zustand |

### TAB_ECUM_AND_OPMM_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | undefiniert |
| 0x11 | EcuM-State: StartUp, OpmM-State: Normal |
| 0x12 | EcuM-State: StartUp, OpmM-State: Error1 |
| 0x14 | EcuM-State: StartUp, OpmM-State: Error2 |
| 0x21 | EcuM-State: WakeUp, OpmM-State: Normal |
| 0x22 | EcuM-State: WakeUp, OpmM-State: Error1 |
| 0x24 | EcuM-State: WakeUp, OpmM-State: Error2 |
| 0x31 | EcuM-State: Run, OpmM-State: Normal |
| 0x32 | EcuM-State: Run, OpmM-State: Error1 |
| 0x34 | EcuM-State: Run, OpmM-State: Error2 |
| 0x41 | EcuM-State: Shutdown, OpmM-State: Normal |
| 0x42 | EcuM-State: Shutdown, OpmM-State: Error1 |
| 0x44 | EcuM-State: Shutdown, OpmM-State: Error2 |
| 0x51 | EcuM-State: Sleep, OpmM-State: Normal |
| 0x52 | EcuM-State: Sleep, OpmM-State: Error1 |
| 0x54 | EcuM-State: Sleep, OpmM-State: Error2 |
| 0x81 | EcuM-State: Off, OpmM-State: Normal |
| 0x82 | EcuM-State: Off, OpmM-State: Error1 |
| 0x84 | EcuM-State: Off, OpmM-State: Error2 |
| 0x91 | EcuM-State: Reset, OpmM-State: Normal |
| 0x92 | EcuM-State: Reset, OpmM-State: Error1 |
| 0x94 | EcuM-State: Reset, OpmM-State: Error2 |
| 0xFF | Ungültig |

### TAB_ECUM_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | undefiniert |
| 0x10 | Startup |
| 0x20 | WakeUp |
| 0x30 | Run |
| 0x40 | Shutdown |
| 0x50 | Sleep |
| 0x80 | Off |
| 0x90 | Reset |

### TAB_EPS_UEBERSETZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Variante erkannt |
| 0x01 | Uebersetzung aus EPS-Konfig |
| 0x02 | Uebersetzung aus Eeprom-Wert |
| 0x03 | reserviert |
| 0x04 | Uebersetzung aus Default-Wert |
| 0x05 | reserviert |
| 0x06 | reserviert |
| 0x07 | reserviert |
| 0x08 | Uebersetzung aus Eeprom-Wert. Default-Wert deaktiviert! |

### TAB_EPS_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Variante zum Aufsetzen erkannt |
| 0x01 | EPS-TKPS Lenkung erkannt |
| 0x02 | EPS-ZFLS Lenkung erkannt |
| 0x03 | EPS-ZFLS-M Lenkung erkannt |
| 0x04 | reserviert |
| 0x05 | reserviert |

### TAB_FAHRDYNAMIK

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Traktion |
| 0x02 | Comfort |
| 0x03 | Normal (Basis) |
| 0x04 | Sport |
| 0x05 | Sport + |
| 0x06 | DSC Off (Race) |
| 0x07 | ECO |
| 0xFF | Unbekannter Wert |

### TAB_FAHRZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Fahrzeug steht |
| 1 | Fahrzeug fährt vorwärts |
| 2 | Fahrzeug fährt rückwärts |
| 3 | Fahrzeug fährt (Richtung unsicher) |
| 7 | Signal ungültig |
| 255 | unbekannter Zustand |

### TAB_FES_WIPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | vorne |
| 0x01 | hinten |

### TAB_FUNKTIONSREGLER

| WERT | TEXT |
| --- | --- |
| 0 | passiv |
| 1 | bereit passiv |
| 2 | bereit aktiv |
| 3 | aktiv |
| 255 | unbekannter Zustand |

### TAB_GUE_ROH

| WERT | TEXT |
| --- | --- |
| 0 | Gültig |
| 1 | Fehler |
| 2 | Timeout |
| 4 | Double Sample |
| 8 | Signal noch nie empfangen |
| 16 | Nutzsignalqualifier des Signals enthält die Ungültigkeitsbezeichnung |

### TAB_HC_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | unbekannt |
| 0x01 | inaktiv |
| 0x02 | aktiv |
| 0x0F | ungültig |

### TAB_HC_EIGENDIAGNOSE

| WERT | TEXT |
| --- | --- |
| 1 | Eigendiagnose Spurwechselwarnung ausfuehren |
| 2 | Eigendiagnose Spurverlasswarnung ausfuehren |

### TAB_HOEHENSTAND_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Kalibrierung Offset nicht erfolgreich |
| 1 | Kalibrierung Offset erfolgreich |
| 2 | Sensor ausstattungsbedingt (Codierung) nicht verbaut |
| 255 | unbekannter Zustand |

### TAB_HOHENSTAND_SENSOR

| WERT | TEXT |
| --- | --- |
| 0 | Sensor in Ordnung |
| 1 | Sensor fehlerhaft |
| 255 | Sensor fehlerhaft |

### TAB_HSR_AKTIV

| WERT | TEXT |
| --- | --- |
| 0 | HSR kann aktiv gehen |
| 1 | Passivierung HSR durch SK |

### TAB_HSR_QUAL

| WERT | TEXT |
| --- | --- |
| 4 | Sollwert umsetzen, Diagnosefreigabe |
| 32 | Sollwert umsetzen |
| 96 | Fehler |
| 112 | Sollwert nicht vorhanden |
| 128 | Initialisierung |
| 224 | Sollwert nicht umsetzen |
| 228 | Sollwert nicht umsetzen, Diagnosefreigabe |
| 255 | Signal ungültig |

### TAB_LED_AUSSENSPIEGEL

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | Links Dauerlicht |
| 0x02 | Links Blinken |
| 0x03 | Rechts Dauerlicht |
| 0x04 | Rechts Blinken |
| 0x05 | Beidseitig Dauerlicht |
| 0x06 | Beidseitig Blinken |

### TAB_MLWGUE

| WERT | TEXT |
| --- | --- |
| 0 | Motorlagewinkel ungültig |
| 1 | Motorlagewinkel gültig |
| 2 | Initialisierung |
| 3 | Timeout |
| 4 | nicht definiert |
| 5 | Kommunikationsfehler |
| 255 | unbekannter Zustand |

### TAB_MLWQUAL

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Signalwert ist gültig und abgesichert |
| 2 | Signal ist gültig |
| 3 | Signal ist nicht vertrauenswürdig |
| 4 | Ersatzwert ist im Nutzsignal gesetzt |
| 5 | Signal zu oft entprellt |
| 6 | Signalwert ist ungültig |
| 7 | Sensor nicht vorhanden oder Signal ungültig |

### TAB_MLWSTATE_EAS

| WERT | TEXT |
| --- | --- |
| 0 | nicht gelernt |
| 1 | gelernt |
| 4 | Randbedingung Routine verletzt |
| 10 | kein EAS Fahrzeug (Codierung) |
| 255 | ungültiger Wert |

### TAB_MLW_GUELTIGKEIT

| WERT | TEXT |
| --- | --- |
| 0 | Motorlagewinkel ungültig - Bereit zur Initialisierung |
| 1 | Motorlagewinkel gültig und abgesichert |
| 2 | Motorlagewinkel gültig |
| 3 | Motorlagewinkel nicht vertrauenswürdig |
| 4 | Motorlagewinkel - Ersatzwert im Nutzsignal gesetzt |
| 5 | Motorlagewinkel - Signal Timeout |
| 6 | Motorlagewinkel ungültig |
| 7 | Motorlagewinkel - Signal nicht vorhanden oder ungültig |
| 255 | unbekannter Zustand |

### TAB_MLW_QUAL

| WERT | TEXT |
| --- | --- |
| 32 | Sollwert umsetzen |
| 96 | Fehler |
| 112 | Sollwert nicht vorhanden |
| 128 | Initialisierung |
| 224 | Sollwert nicht umsetzen |
| 225 | Sollwert nicht umsetzen, Set RLW valid |
| 226 | Sollwert nicht umsetzen, Set RLW invalid |
| 255 | Signal ungültig |

### TAB_MODUS_FAHRERLEBNIS

| WERT | TEXT |
| --- | --- |
| 0x00 | Initalisierung |
| 0x01 | Modus Traction gesetzt |
| 0x02 | Modus Komfort gesetzt |
| 0x03 | Modus Basis gesetzt |
| 0x04 | Modus Sport gesetzt |
| 0x05 | Modus Sport + gesetzt |
| 0x06 | Modus Race gesetzt |
| 0x07 | Modus ECO gesetzt |
| 0x08 | Modus ECO + gesetzt |
| 0xFF | ungültig |

### TAB_OPERATINGSYSTEM_ICM_ASA

| WERT | TEXT |
| --- | --- |
| 33 | Drive Standby |
| 34 | Drive |
| 49 | Drive Standby, USW1 |
| 50 | Drive, USW2 |
| 53 | Drive Standby, USW2 |
| 54 | Drive, USW1 |
| 57 | Drive Standby, USW3 |
| 58 | Drive, USW3 |
| 104 | Error |
| 128 | Initialisierung |
| 224 | POSTRUN |
| 225 | ReadyforDrive |
| 227 | Drive_RampZero |
| 228 | WaitForRLWSet |
| 233 | ReadyForDrive Unterspannung |
| 235 | Drive_RampZero Unterspannung |
| 255 | ungültiges Signal |

### TAB_OPERATINGSYSTEM_ICM_HSR

| WERT | TEXT |
| --- | --- |
| 33 | Drive Standby |
| 34 | Drive |
| 49 | Drive Standby, USW1 |
| 50 | Drive, USW2 |
| 53 | Drive Standby, USW2 |
| 54 | Drive, USW1 |
| 57 | Drive Standby, USW3 |
| 58 | Drive, USW3 |
| 104 | Error |
| 128 | Initialisierung |
| 224 | POSTRUN |
| 225 | ReadyforDrive |
| 227 | Drive_RampZero |
| 228 | WaitForRLWSet |
| 233 | ReadyForDrive Unterspannung |
| 235 | Drive_RampZero Unterspannung |
| 255 | ungültiges Signal |

### TAB_OPMM_STATE

| WERT | TEXT |
| --- | --- |
| 0x0 | undefiniert |
| 0x1 | Normal |
| 0x2 | Error 1 |
| 0x3 | Error 2 |

### TAB_ROLLENMODUS

| WERT | TEXT |
| --- | --- |
| 0 | Rücksetzen |
| 1 | Setzen Werksrollenmodus |
| 2 | Setzen Rollenmodus Innenraum |

### TAB_RSTM_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | PowerOn |
| 0x10 | HWReset |
| 0x20 | WDT |
| 0x30 | WakeUp |
| 0x40 | Trap |
| 0x50 | SartupBlock |
| 0x60 | CustomerBlock |

### TAB_RSTM_STATE_VERSORGUNGSSPANNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | RSTM-State: PowerOn   Versorgungsspannung: Init |
| 0x01 | RSTM-State: PowerOn   Versorgungsspannung: Normal |
| 0x02 | RSTM-State: PowerOn   Versorgungsspannung: LocalUndervoltageStartupDelayed |
| 0x03 | RSTM-State: PowerOn   Versorgungsspannung: LocalUndervoltageStartupFlexrayDelayed |
| 0x04 | RSTM-State: PowerOn   Versorgungsspannung: LocalUndervoltageStartupDelayedFlexrayDelayed |
| 0x05 | RSTM-State: PowerOn   Versorgungsspannung: LocalUndervoltage |
| 0x06 | RSTM-State: PowerOn   Versorgungsspannung: LocalUndervoltageMSADelayed |
| 0x07 | RSTM-State: PowerOn   Versorgungsspannung: LocalUndervoltageMSA |
| 0x08 | RSTM-State: PowerOn   Versorgungsspannung: LocalUndervoltageColdStart |
| 0x09 | RSTM-State: PowerOn   Versorgungsspannung: GlobalUndervoltage |
| 0x0A | RSTM-State: PowerOn   Versorgungsspannung: LocalOvervoltageDelayed |
| 0x0B | RSTM-State: PowerOn   Versorgungsspannung: LocalOvervoltage |
| 0x0C | RSTM-State: PowerOn   Versorgungsspannung: GlobalOvervoltage |
| 0x0D | RSTM-State: PowerOn   Versorgungsspannung: RST5SensorUndervoltage |
| 0x10 | RSTM-State: HWReset    Versorgungsspannung: Init |
| 0x11 | RSTM-State: HWReset    Versorgungsspannung: Normal |
| 0x12 | RSTM-State: HWReset    Versorgungsspannung: LocalUndervoltageStartupDelayed |
| 0x13 | RSTM-State: HWReset    Versorgungsspannung: LocalUndervoltageStartupFlexrayDelayed |
| 0x14 | RSTM-State: HWReset    Versorgungsspannung: LocalUndervoltageStartupDelayedFlexrayDelayed |
| 0x15 | RSTM-State: HWReset    Versorgungsspannung: LocalUndervoltage |
| 0x16 | RSTM-State: HWReset   Versorgungsspannung: LocalUndervoltageMSADelayed |
| 0x17 | RSTM-State: HWReset    Versorgungsspannung: LocalUndervoltageMSA |
| 0x18 | RSTM-State: HWReset    Versorgungsspannung: LocalUndervoltageColdStart |
| 0x19 | RSTM-State: HWReset    Versorgungsspannung: GlobalUndervoltage |
| 0x1A | RSTM-State: HWReset    Versorgungsspannung: LocalOvervoltageDelayed |
| 0x1B | RSTM-State: HWReset    Versorgungsspannung: LocalOvervoltage |
| 0x1C | RSTM-State: HWReset    Versorgungsspannung: GlobalOvervoltage |
| 0x1D | RSTM-State: HWReset    Versorgungsspannung: RST5SensorUndervoltage |
| 0x20 | RSTM-State: WDT    Versorgungsspannung: Init |
| 0x21 | RSTM-State: WDT    Versorgungsspannung: Normal |
| 0x22 | RSTM-State: WDT    Versorgungsspannung: LocalUndervoltageStartupDelayed |
| 0x23 | RSTM-State: WDT    Versorgungsspannung: LocalUndervoltageStartupFlexrayDelayed |
| 0x24 | RSTM-State: WDT    Versorgungsspannung: LocalUndervoltageStartupDelayedFlexrayDelayed |
| 0x25 | RSTM-State: WDT   Versorgungsspannung: LocalUndervoltage |
| 0x26 | RSTM-State: WDT   Versorgungsspannung: LocalUndervoltageMSADelayed |
| 0x27 | RSTM-State: WDT    Versorgungsspannung: LocalUndervoltageMSA |
| 0x28 | RSTM-State: WDT    Versorgungsspannung: LocalUndervoltageColdStart |
| 0x29 | RSTM-State: WDT    Versorgungsspannung: GlobalUndervoltage |
| 0x2A | RSTM-State: WDT    Versorgungsspannung: LocalOvervoltageDelayed |
| 0x2B | RSTM-State: WDT    Versorgungsspannung: LocalOvervoltage |
| 0x2C | RSTM-State: WDT   Versorgungsspannung: GlobalOvervoltage |
| 0x2D | RSTM-State: WDT    Versorgungsspannung: RST5SensorUndervoltage |
| 0x30 | RSTM-State: WakeUp    Versorgungsspannung: Init |
| 0x31 | RSTM-State: WakeUp    Versorgungsspannung: Normal |
| 0x32 | RSTM-State: WakeUp    Versorgungsspannung: LocalUndervoltageStartupDelayed |
| 0x33 | RSTM-State: WakeUp    Versorgungsspannung: LocalUndervoltageStartupFlexrayDelayed |
| 0x34 | RSTM-State: WakeUp   Versorgungsspannung: LocalUndervoltageStartupDelayedFlexrayDelayed |
| 0x35 | RSTM-State: WakeUp   Versorgungsspannung: LocalUndervoltage |
| 0x36 | RSTM-State: WakeUp   Versorgungsspannung: LocalUndervoltageMSADelayed |
| 0x37 | RSTM-State: WakeUp    Versorgungsspannung: LocalUndervoltageMSA |
| 0x38 | RSTM-State: WakeUp    Versorgungsspannung: LocalUndervoltageColdStart |
| 0x39 | RSTM-State: WakeUp    Versorgungsspannung: GlobalUndervoltage |
| 0x3A | RSTM-State: WakeUp    Versorgungsspannung: LocalOvervoltageDelayed |
| 0x3B | RSTM-State: WakeUp    Versorgungsspannung: LocalOvervoltage |
| 0x3C | RSTM-State: WakeUp   Versorgungsspannung: GlobalOvervoltage |
| 0x3D | RSTM-State: WakeUp    Versorgungsspannung: RST5SensorUndervoltage |
| 0x40 | RSTM-State: Trap    Versorgungsspannung: Init |
| 0x41 | RSTM-State: Trap    Versorgungsspannung: Normal |
| 0x42 | RSTM-State: Trap    Versorgungsspannung: LocalUndervoltageStartupDelayed |
| 0x43 | RSTM-State: Trap    Versorgungsspannung: LocalUndervoltageStartupFlexrayDelayed |
| 0x44 | RSTM-State: Trap   Versorgungsspannung: LocalUndervoltageStartupDelayedFlexrayDelayed |
| 0x45 | RSTM-State: Trap   Versorgungsspannung: LocalUndervoltage |
| 0x46 | RSTM-State: Trap   Versorgungsspannung: LocalUndervoltageMSADelayed |
| 0x47 | RSTM-State: Trap    Versorgungsspannung: LocalUndervoltageMSA |
| 0x48 | RSTM-State: Trap    Versorgungsspannung: LocalUndervoltageColdStart |
| 0x49 | RSTM-State: Trap    Versorgungsspannung: GlobalUndervoltage |
| 0x4A | RSTM-State: Trap    Versorgungsspannung: LocalOvervoltageDelayed |
| 0x4B | RSTM-State: Trap    Versorgungsspannung: LocalOvervoltage |
| 0x4C | RSTM-State: Trap   Versorgungsspannung: GlobalOvervoltage |
| 0x4D | RSTM-State: Trap    Versorgungsspannung: RST5SensorUndervoltage |
| 0x50 | RSTM-State: StartupBlock    Versorgungsspannung: Init |
| 0x51 | RSTM-State: StartupBlock    Versorgungsspannung: Normal |
| 0x52 | RSTM-State: StartupBlock    Versorgungsspannung: LocalUndervoltageStartupDelayed |
| 0x53 | RSTM-State: StartupBlock    Versorgungsspannung: LocalUndervoltageStartupFlexrayDelayed |
| 0x54 | RSTM-State: StartupBlock   Versorgungsspannung: LocalUndervoltageStartupDelayedFlexrayDelayed |
| 0x55 | RSTM-State: StartupBlock   Versorgungsspannung: LocalUndervoltage |
| 0x56 | RSTM-State: StartupBlock   Versorgungsspannung: LocalUndervoltageMSADelayed |
| 0x57 | RSTM-State: StartupBlock    Versorgungsspannung: LocalUndervoltageMSA |
| 0x58 | RSTM-State: StartupBlock    Versorgungsspannung: LocalUndervoltageColdStart |
| 0x59 | RSTM-State: StartupBlock    Versorgungsspannung: GlobalUndervoltage |
| 0x5A | RSTM-State: StartupBlock    Versorgungsspannung: LocalOvervoltageDelayed |
| 0x5B | RSTM-State: StartupBlock    Versorgungsspannung: LocalOvervoltage |
| 0x5C | RSTM-State: StartupBlock   Versorgungsspannung: GlobalOvervoltage |
| 0x5D | RSTM-State: StartupBlock    Versorgungsspannung: RST5SensorUndervoltage |
| 0x60 | RSTM-State: CustomerBlock    Versorgungsspannung: Init |
| 0x61 | RSTM-State: CustomerBlock    Versorgungsspannung: Normal |
| 0x62 | RSTM-State: CustomerBlock   Versorgungsspannung: LocalUndervoltageStartupDelayed |
| 0x63 | RSTM-State: CustomerBlock    Versorgungsspannung: LocalUndervoltageStartupFlexrayDelayed |
| 0x64 | RSTM-State: CustomerBlock   Versorgungsspannung: LocalUndervoltageStartupDelayedFlexrayDelayed |
| 0x65 | RSTM-State: CustomerBlock   Versorgungsspannung: LocalUndervoltage |
| 0x66 | RSTM-State: CustomerBlock   Versorgungsspannung: LocalUndervoltageMSADelayed |
| 0x67 | RSTM-State: CustomerBlock    Versorgungsspannung: LocalUndervoltageMSA |
| 0x68 | RSTM-State: CustomerBlock    Versorgungsspannung: LocalUndervoltageColdStart |
| 0x69 | RSTM-State: CustomerBlock    Versorgungsspannung: GlobalUndervoltage |
| 0x6A | RSTM-State: CustomerBlock    Versorgungsspannung: LocalOvervoltageDelayed |
| 0x6B | RSTM-State: CustomerBlock    Versorgungsspannung: LocalOvervoltage |
| 0x6C | RSTM-State: CustomerBlock   Versorgungsspannung: GlobalOvervoltage |
| 0x6D | RSTM-State: CustomerBlock    Versorgungsspannung: RST5SensorUndervoltage |
| 0x70 | RSTM-State: Softreset    Versorgungsspannung: Init |
| 0x71 | RSTM-State: Softreset    Versorgungsspannung: Normal |
| 0x72 | RSTM-State: Softreset    Versorgungsspannung: LocalUndervoltageStartupDelayed |
| 0x73 | RSTM-State: Softreset     Versorgungsspannung: LocalUndervoltageStartupFlexrayDelayed |
| 0x74 | RSTM-State: Softreset    Versorgungsspannung: LocalUndervoltageStartupDelayedFlexrayDelayed |
| 0x75 | RSTM-State: Softreset    Versorgungsspannung: LocalUndervoltage |
| 0x76 | RSTM-State: Softreset    Versorgungsspannung: LocalUndervoltageMSADelayed |
| 0x77 | RSTM-State: Softreset     Versorgungsspannung: LocalUndervoltageMSA |
| 0x78 | RSTM-State: Softreset     Versorgungsspannung: LocalUndervoltageColdStart |
| 0x79 | RSTM-State: Softreset    Versorgungsspannung: GlobalUndervoltage |
| 0x7A | RSTM-State: Softreset     Versorgungsspannung: LocalOvervoltageDelayed |
| 0x7B | RSTM-State: Softreset     Versorgungsspannung: LocalOvervoltage |
| 0x7C | RSTM-State: Softreset   Versorgungsspannung: GlobalOvervoltage |
| 0x7D | RSTM-State: Softreset     Versorgungsspannung: RST5SensorUndervoltage |
| 0xB0 | RSTM-State: Applikations-Reset     Versorgungsspannung: Init |
| 0xB1 | RSTM-State: Applikations-Reset     Versorgungsspannung: Normal |
| 0xB2 | RSTM-State: Applikations-Reset    Versorgungsspannung: LocalUndervoltageStartupDelayed |
| 0xB3 | RSTM-State: Applikations-Reset      Versorgungsspannung: LocalUndervoltageStartupFlexrayDelayed |
| 0xB4 | RSTM-State: Applikations-Reset     Versorgungsspannung: LocalUndervoltageStartupDelayedFlexrayDelayed |
| 0xB5 | RSTM-State: Applikations-Reset     Versorgungsspannung: LocalUndervoltage |
| 0xB6 | RSTM-State: Applikations-Reset     Versorgungsspannung: LocalUndervoltageMSADelayed |
| 0xB7 | RSTM-State: Applikations-Reset      Versorgungsspannung: LocalUndervoltageMSA |
| 0xB8 | RSTM-State: Applikations-Reset      Versorgungsspannung: LocalUndervoltageColdStart |
| 0xB9 | RSTM-State: Applikations-Reset    Versorgungsspannung: GlobalUndervoltage |
| 0xBA | RSTM-State: Applikations-Reset      Versorgungsspannung: LocalOvervoltageDelayed |
| 0xBB | RSTM-State: Applikations-Reset     Versorgungsspannung: LocalOvervoltage |
| 0xBC | RSTM-State: Applikations-Reset    Versorgungsspannung: GlobalOvervoltage |
| 0xBD | RSTM-State: Applikations-Reset     Versorgungsspannung: RST5SensorUndervoltage |
| 0xC0 | RSTM-State: PowerOn-Reset    Versorgungsspannung: Init |
| 0xC1 | RSTM-State: PowerOn-Reset    Versorgungsspannung: Normal |
| 0xC2 | RSTM-State: PowerOn-Reset    Versorgungsspannung: LocalUndervoltageStartupDelayed |
| 0xC3 | RSTM-State: PowerOn-Reset      Versorgungsspannung: LocalUndervoltageStartupFlexrayDelayed |
| 0xC4 | RSTM-State: PowerOn-Reset     Versorgungsspannung: LocalUndervoltageStartupDelayedFlexrayDelayed |
| 0xC5 | RSTM-State: PowerOn-Reset    Versorgungsspannung: LocalUndervoltage |
| 0xC6 | RSTM-State: PowerOn-Reset     Versorgungsspannung: LocalUndervoltageMSADelayed |
| 0xC7 | RSTM-State: PowerOn-Reset     Versorgungsspannung: LocalUndervoltageMSA |
| 0xC8 | RSTM-State: PowerOn-Reset      Versorgungsspannung: LocalUndervoltageColdStart |
| 0xC9 | RSTM-State: PowerOn-Reset    Versorgungsspannung: GlobalUndervoltage |
| 0xCA | RSTM-State: PowerOn-Reset     Versorgungsspannung: LocalOvervoltageDelayed |
| 0xCB | RSTM-State:PowerOn-Reset     Versorgungsspannung: LocalOvervoltage |
| 0xCC | RSTM-State: PowerOn-Reset    Versorgungsspannung: GlobalOvervoltage |
| 0xCD | RSTM-State: PowerOn-Reset      Versorgungsspannung: RST5SensorUndervoltage |
| 0xFF | Invalid |

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

### TAB_SBS_GUELTIGKEIT_CHAR

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
| 127 | unbekannter Zustand |

### TAB_SBS_GUELTIGKEIT_UINT

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Signalwert ist gültig und abgesichert |
| 2 | Signalwert ist gültig |
| 3 | Signalwert ist nicht vertrauenswürdig |
| 4 | Ersatzweret ist im Nutzsignal gesetzt |
| 5 | Signal zu oft entprellt |
| 6 | Signalwert ist ungültig |
| 7 | Sensor nicht vorhanden oder Signal ungültig |
| 65535 | unbekannter Zustand |

### TAB_SCHNEEKETTE_INIT

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Menü geschlossen |
| 2 | Menü offen |
| 3 | ungültig |
| 255 | ungültiger Wert |

### TAB_SCHNEEKETTE_SCHALTER_SK_HU

| WERT | TEXT |
| --- | --- |
| 0 | Schalter ausgegraut / Initialisierung |
| 1 | keine Kette |
| 2 | Kette |
| 3 | ungültig |
| 255 | unbekannter Zustand |

### TAB_SG_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0x0000 | Default |
| 0x0001 | ICM Plus |
| 0x0002 | ICM Plus RoSe, ICM High RoSe+ ACC |
| 0x0003 | ICM Plus VDC,  ICM High VDC, ICM High ACC |
| 0x0004 | ICM High VDC AFS |
| 0x0005 | ICM Plus RoSe (ED) |
| 0x0006 | ICM High VDC (ED) |
| 0x0007 | ICM High AFS, ICM High RoSe+ VDC+ AFS |
| 0xFFFF | ungültige Variante |

### TAB_SG_ZUSTANDSMASTER_VERSORGUNGSSPANNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Init |
| 0x01 | Normal |
| 0x02 | LocalUndervoltageStartupDelayed |
| 0x03 | LocalUndervoltageStartupFlexrayDelayed |
| 0x04 | LocalUndervoltageStartupDelayedFlexrayDelayed |
| 0x05 | LocalUndervoltage |
| 0x06 | LocalUndervoltageMSADelayed |
| 0x07 | LocalUndervoltageMSA |
| 0x08 | LocalUndervoltageColdStart |
| 0x09 | GlobalUndervoltage |
| 0x0A | GlobalUndervoltageMSA |
| 0x0B | LocalOvervoltageDelayed |
| 0x0C | LocalOvervoltage |
| 0x0D | GlobalOvervoltage |
| 0x0E | RST5SensorUndervoltage |

### TAB_SPANNUGSSCHWELLE

| WERT | TEXT |
| --- | --- |
| 0x00 | KL30_VOLT_OK |
| 0x01 | KL30_UNDERVOLTAGE |
| 0x02 | KL30_OVERVOLTAGE |
| 0x10 | MSA_START |
| 0x20 | KALT_START |
| 0x80 | RST5_SENSOR_UNDERVOLTAGE |
| 0x81 | RST5_SENSOR_UNDERVOLTAGE +KL30_UNDERVOLTAGE |
| 0xFF | Default |

### TAB_SPANNUNGSSCHWELLE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KL30_VOLT_OK |
| 0x01 | KL30_UNDERVOLTAGE |
| 0x02 | KL30_OVERVOLTAGE |
| 0x10 | MSA_START |
| 0x20 | KALT_START |
| 0x80 | RST5_SENSOR_UNDERVOLTAGE |
| 0x81 | RST5_SENSOR_UNDERVOLTAGE + KL30_UNDERVOLTAGE |
| 0xff | Default |

### TAB_STATUS_ROLLENMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Rolle |
| 0x01 | 1-Achsrolle Vorderachse (Fzg mit Kombi-Menue) oder Bandenderolle |
| 0x02 | 1-Achsrolle Hinterachse |
| 0x03 | 2-Achsrolle |
| 0x04 | Bandenderolle (Werk) |
| 0x0E | ungueltig |

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

### TAB_SZL_OFFSET_GUELTIG

| WERT | TEXT |
| --- | --- |
| 0 | Offset ungültig |
| 1 | Offset gültig |
| 255 | unbekannter Zustand |

### TAB_SZL_STATE

| WERT | TEXT |
| --- | --- |
| 0 | SZL Seriennummer ungültig |
| 1 | SZL Seriennummer gültig  empfangen |
| 255 | unbekannter Zustand |

### TAB_TASTER

| WERT | TEXT |
| --- | --- |
| 0 | Taster nicht gedrückt |
| 1 | Taster gedrückt |
| 2 | Taster ungültig |

### TAB_TASTER_AKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gedrückt |
| 0x01 | gedrückt |
| 0xFF | ungültig |

### TAB_TASTER_SPORT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht betätigt |
| 0x01 | Taster Richtung Sport + |
| 0x02 | Taster Richtung Komfort - |
| 0xFF | unbekannter Zustand |

### TAB_TASTE_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Fehler |
| 0xFF | Fehler |

### TAB_TYP_STRASSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Gleis |
| 0x01 | Verkehrsberuhigte Zone (hin und zurück) |
| 0x02 | Verkehrsberuhigte  Zone (Einbahnstraße) |
| 0x03 | Wohngebiet (hin und zurück) |
| 0x04 | Wohngebiet (Einbahnstraße) |
| 0x05 | städtisch (hin und zurück) |
| 0x06 | städtisch (Einbahnstraße) |
| 0x07 | städtisch mit Teilung |
| 0x08 | Stadt-Autobahn |
| 0x09 | Stadt-Autobahn mit Teilung |
| 0x0A | Landstraße |
| 0x0B | Landstraße mit Teilung |
| 0x0C | Bundesstraße |
| 0x0D | Bundesstraße mit Teilung |
| 0x0E | Bundesstraßen-Auffahrt |
| 0x0F | Bundesstraßen-Ausfahrt |
| 0x10 | Bundesstraßen-Auf- und -Ausfahrt |
| 0x11 | Autobahn |
| 0x12 | Autobahn-Auffahrt |
| 0x13 | Autobahn-Ausfahrt |
| 0x14 | Autobahn-Auf- und Ausfahrt |
| 0x15 | Fähre |
| 0x16 | Rennstrecke |
| 0x1D | Straßentyp nicht verfügbar |
| 0x1E | Straßentyp nicht verfügbar (Funktion meldet Fehler) |
| 0x1F | Signal ungültig |

### TAB_VERSORGUNGSSPANNUNG

| WERT | TEXT |
| --- | --- |
| 0x0 | Init |
| 0x1 | Normal |
| 0x2 | LocalUndervoltageStartupDelayed |
| 0x3 | LocalUndervoltageStartupFlexrayDelayed |
| 0x4 | LocalUndervoltageStartupDelayedFlexrayDelayed |
| 0x5 | LocalUndervoltage |
| 0x6 | LocalUndervoltageMSADelayed |
| 0x7 | LocalUndervoltageMSA |
| 0x8 | LocalUndervoltageColdStart |
| 0x9 | GlobalUndervoltage |
| 0xA | GlobalUndervoltageMSA |
| 0xB | LocalOvervoltageDelayed |
| 0xC | LocalOvervoltage |
| 0xD | GlobalOvervoltage |
| 0xE | RST5SensorUndervoltage |

### TAB_VORSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0 | passiv |
| 1 | bereit passiv |
| 2 | bereit aktiv |
| 3 | aktiv |
| 255 | unbekannter Zustand |
