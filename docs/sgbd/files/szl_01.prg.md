# szl_01.prg

## General

|  |  |
| --- | --- |
| File | szl_01.prg |
| Type | PRG |
| Jobs | 37 |
| Tables | 62 |
| Origin | BMW EI-702 Schwerin |
| Revision | 1.013 |
| Author | Valeo ITC-E-SW Wigger, Valeo ITC-E-SW Haas |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Schaltzentrum Lenksäule (mit Lenkwinkelsensor) |  |  |
| ORIGIN | string | BMW EI-702 Schwerin |  |  |
| REVISION | string | 1.013 |  |  |
| AUTHOR | string | Valeo ITC-E-SW Wigger, Valeo ITC-E-SW Haas |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.45 |  |  |
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

### ARG_0XD071_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: LED AUS 1: LED EIN |

### ARG_0XD074_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Lenkradheizung aus 1-255: Lenkradheizung ein in Sekunden |

### ARG_0XD082_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | - | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 0.0 | Abgleichwert wird zurückgesetzt 0x00 muss übergeben werden |

### ARG_0XD083_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | - | - | int | - | - | 64.0 | 1.0 | 0.0 | - | - | Angabe des Offset-Wertes in Grad. Auflösung 1/64 Grad, Wertebereich von -15 bis 15 Grad |

### ARG_0XD08B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ASE_MITTEN_FREQUENZ | Hz | - | unsigned char | - | - | 10.0 | 1.0 | -373.0 | 43.7 | 56.3 | Zulässiger Wertebereich 43,7...56,3 Hz |

### ARG_0XD361_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: LED AUS 1: LED EIN |

### ARG_0XD399_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | s | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 25.0 | Ansteuerzeit in Sekunden Maximal 25 Sekunden 0 = AUS |

### ARG_0XD3F3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNGSZUSTAND | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1 = Aktivierung der HOD-Elektronik (Überschreiben der Bus-Anforderung) 0 = Durchschleifen der Bus-Anforderung (keine Aktivierung per Diagnose) |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | kein Betriebsmode |
| 0x01 | Spezieller Energiesparmode 1 | Lenkradheizung deaktiviert |
| 0x03 | MOST-Mode 3 | Lenkradheizung deaktiviert |
| 0x04 | Betriebsmode 4 | Lenkradheizung deaktiviert |
| 0x05 | Betriebsmode 5 | Lenkradheizung deaktiviert |
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
| 0x020200 | Energiesparmode aktiv | 0 |
| 0x02FF02 | DM_TEST_APPL | 1 |
| 0x030360 | Hands OFF Detection (HOD) (LIN ) Versorgungsspannung | 0 |
| 0x030361 | Hands OFF Detection (HOD) (LIN ) Steuergerät defekt | 0 |
| 0x030362 | Hands OFF Detection (HOD) (LIN ) Sensormatte defekt | 0 |
| 0x030364 | Hands OFF Detection (HOD) (LIN ) Sensor fehlender LIN-Slave | 0 |
| 0x030365 | Hands OFF Detection (HOD) (LIN ) Sensor unerwarteter LIN-Slave | 0 |
| 0x030410 | Multifunktions-Lenkrad (MFL): fehlender LIN-Slave | 0 |
| 0x030411 | Multifunktions-Lenkrad (MFL): falsche Variante | 0 |
| 0x030490 | Lenkradelektronik (LRE) (LIN): fehlender LIN-Slave | 0 |
| 0x030491 | Lenkradelektronik (LRE) (LIN): falsche Variante | 0 |
| 0x030492 | Lenkradelektronik (LRE) (LIN): unerwarteter LIN-Slave | 0 |
| 0x803400 | Lenkstock Blinker/Fernlicht, Taster Bordcomputer: Taster haengt | 0 |
| 0x803401 | Lenkstock Blinker/Fernlicht, Redundanzleitung zu Fussraummodul: Leitungsbruch | 0 |
| 0x803402 | Lenkstock Blinker/Fernlicht: Taster haengt | 1 |
| 0x803403 | Lenkstock Blinker/Fernlicht: Taster unplausibel | 0 |
| 0x803404 | Hupe Schalter haengt | 1 |
| 0x803405 | Interner Steuergeraetefehler | 0 |
| 0x803406 | Lenkradheizungsschalter (LHZ) haengt | 1 |
| 0x803407 | Elektrische Lenksäulenverstellung (ELSV), Leitung zum Taster: Kurzschluss nach Plus oder Leitungsbruch | 0 |
| 0x803408 | Elektrische Lenksäulenverstellung (ELSV), Leitung zum Taster: Kurzschluss nach Masse | 0 |
| 0x80340A | Elektrische Lenksäulenverstellung (ELSV): Taster hängt | 1 |
| 0x80340B | Lenkwinkelsensor: Lenkradwinkel über maximal zulässigem Wert | 0 |
| 0x80340C | Lenkwinkelsensor: Lenkradwinkelgeschwindigkeit über maximal zulässigem Wert | 0 |
| 0x80340D | Lenkwinkelsensor: nicht abgeglichen | 0 |
| 0x80340E | Lenkwinkelsensor: defekt | 0 |
| 0x803422 | Lenkstock Wischer, Intervall-Rändel: Leitungsbruch | 0 |
| 0x803423 | Lenkstock Wischer, Intervall-Rändel: unplausibel | 0 |
| 0x803424 | Lenkstock Wischer: axialer Taster (Regensensor) hängt | 1 |
| 0x803425 | Lenkstock Wischer: Lenkstock hängt | 1 |
| 0x803426 | Lenkstock Wischer: Signal unplausibel | 0 |
| 0x803427 | Ueberspannung LIN | 1 |
| 0x803428 | Unterspannung LIN | 1 |
| 0x803429 | Wakeupschaltung (15WUP) Kurzschluß nach Masse | 0 |
| 0x80342A | Wakeupschaltung (15WUP) unplausibel | 0 |
| 0x80342B | Schaltwippen (SMG), Analogport: Kurzschluss nach Masse | 0 |
| 0x80342C | Schaltwippen (SMG), Analogport: Kurzschluss nach Plus oder Leitungsbruch | 0 |
| 0x80342D | Schaltwippen (SMG): Wippe hängt | 1 |
| 0x803430 | LIN Master KL30b Stromversorgung LIN Slaves Kurzschluß nach Masse | 0 |
| 0x803431 | LIN Master KL30b Stromversorgung LIN Slaves Kurzschluß nach Plus | 0 |
| 0x803433 | Ueberspannung SZL | 1 |
| 0x803434 | Unterspannung SZL | 1 |
| 0x803435 | Ruhmestrom SZL zu hoch | 0 |
| 0x803437 | Lenkstock Blinker/Fernlicht, Taster Fernlichtassistent: Taster haengt | 1 |
| 0x803440 | Steuergerät ist nicht codiert | 0 |
| 0x803441 | Fehler während der Codierdaten-Transaktion aufgetreten | 0 |
| 0x803442 | Signatur über Nettocodierdaten ist ungültig | 0 |
| 0x803443 | Steuergerät ist nicht für das Fahrzeug codiert, in welchem es verbaut ist | 0 |
| 0x803444 | Die während einer Codierdaten-Transaktion gesendeten Daten sind unplausibel | 0 |
| 0xC98401 | FlexRay Botschaft (CTR_VIB_STW): Alive-Zaehler-Fehler | 1 |
| 0xC98402 | FlexRay Botschaft (CTR_VIB_STW): Ausfall | 1 |
| 0xC98403 | FlexRay Botschaft (CTR_VIB_STW): Pruefsummen-Fehler | 1 |
| 0xC9841F | FlexRay physical bus error on BUS | 0 |
| 0xC98420 | FlexRay controller error on BUS | 0 |
| 0xC98421 | FlexRay Botschaft (DISP_DRASY): Ausfall | 1 |
| 0xC98BFF | DM_TEST_COM | 1 |
| 0xC98C00 | K_LIN_11 Botschaft (ST_STW_LIN): Pruefsummen-Fehler | 1 |
| 0xC98C01 | K_LIN_11 Botschaft (ST_STW_LIN): Alive-Zaehler-Fehler | 1 |
| 0xC98C02 | K_LIN_11 Botschaft (ST_STW_LIN): Ausfall | 1 |
| 0xC98C03 | K_LIN_11 Botschaft (ERR_ST_LRE_LIN): Ausfall | 1 |
| 0xC98C04 | K_LIN_11 Botschaft (ST_LRE_LIN): Ausfall | 1 |
| 0xC9AC00 | K_LIN_11 Signal Fehler_Status_Leistungsversorgung_Vibration_Lenkrad_LIN: Aktuator nicht Angeschlossen | 0 |
| 0xC9AC01 | K_LIN_11 Signal Fehler_Status_Intern_Lenkrad_LIN: interner Fehler MFL Slave | 0 |
| 0xC9AC02 | K_LIN_11 Signal Fehler_Status_Übertemperatur_Vibration_Lenkrad_LIN: Übertemperatur | 1 |
| 0xC9AC03 | K_LIN_11 Signal Fehler_Status_Überstrom_Vibration_Lenkrad_LIN: Überstrom | 0 |
| 0xC9AC04 | K_LIN_11 Signal Fehler_Status_Spannung_Vibration_Lenkrad_LIN: Versorgungsspannung fehlerhaft | 1 |
| 0xC9AC05 | K_LIN_11 Signal Fehler_Status_Blockierung_Vibration_Lenkrad_LIN : Aktuator blockiert | 0 |
| 0xC9AC06 | K_LIN_11 Signal Fehler_Status_Leistungsversorgung_Vibration_Lenkrad_LIN: Aktuator Kurzschluß | 0 |
| 0xC9AC07 | K_LIN_11 Signal Fehler_Status_Intern_LRE_LIN: Interner Fehler | 0 |
| 0xC9AC08 | K_LIN_11 Signal Fehler_Status_Kurzschluß_Lenkradheizung_LIN: Lenkradheizung Kurzschluß | 0 |
| 0xC9AC09 | K_LIN_11 Signal Fehler_Status_Kontakt_NTC_Lenkradheizung_LIN: Temperatur-Fuehler unterbrochen | 0 |
| 0xC9AC0A | K_LIN_11 Signal Fehler_Status_Unterspannung_Lenkradheizung_LIN: Unterspannung | 1 |
| 0xC9AC0B | K_LIN_11 Signal Fehler_Status_Ueberspannung_Lenkradheizung_LIN: Ueberspannung | 1 |
| 0xC9AC0C | K_LIN_11 Signal Fehler_Status_Last_Lenkradheizung_LIN: Lenkradheizung unterbrochen | 0 |
| 0xC9AC0D | K_LIN_11 Signal Fehler_Status_Lenkrad_LIN: MFL Schalterblock links defekt | 0 |
| 0xC9AC0E | K_LIN_11 Signal Fehler_Status_Lenkrad_LIN: MFL Schalterblock rechts defekt | 0 |
| 0xC9AC0F | K_LIN_11 Signal Fehler_Status_Lenkrad_LIN: MFL Tipprändel Widerspruch | 0 |
| 0xC9AC10 | K_LIN_11 Signal Fehler_Status_Lenkrad_LIN: MFL Rändel Widerspruch | 0 |
| 0xC9AC11 | K_LIN_11 Signal Fehler_Status_Lenkrad_LIN: MFL Wippe Widerspruch | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4030 | Batteriespannung | Volt | - | unsigned char | - | - | 10 | - |
| 0x4031 | Interner LWS Fehler MC-1 | - | - | unsigned char | - | - | - | - |
| 0x4032 | Interner LWS Fehler MC-2 | - | - | unsigned char | - | - | - | - |
| 0x4033 | Interner ECU Fehler | - | - | unsigned char | - | - | - | - |
| 0x4034 | Außentemperatur | °C | - | unsigned char | - | 0,5 | - | -40 |
| 0x4035 | Klemmenstatus | 0-n | - | 0xFF | TAB_KLEMMEN_STATUS | - | - | - |
| 0x4036 | Interner Fehler Hands Off Detection (HOD) | 0-n | - | 0xFF | TAB_HOD_ERROR | - | - | - |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

### HOD_STATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | Hands-Off nicht erkannt |
| 0x05 | Energiesparmodus |
| 0x09 | Hands-Off erkannt |
| 0x0D | Hands-Off nicht verfügbar |
| 0x0E | Fehler |
| 0x0F | Signal ungültig |
| 0xFF | ungültiger Wert |

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
| 0x803450 | NVRAM Manager: Write Failed | 0 |
| 0x803451 | NVRAM Manager: Read Failed | 0 |
| 0x803452 | NVRAM Manager: Control Failed | 0 |
| 0x803453 | NVRAM Manager: Erase Failed | 0 |
| 0x803454 | NVRAM Manager: Write All Failed | 0 |
| 0x803455 | NVRAM Manager: Read All Failed | 0 |
| 0x803456 | NVRAM Manager: Wrong Config ID | 0 |
| 0x803460 | Diag Master: Queue full | 1 |
| 0x803461 | Diag Master: Queue deleted | 1 |
| 0xC9A400 | Zeitbotschaft: Timeout | 1 |
| 0xC9A401 | VSM: Event Vehiclestate | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4030 | Batteriespannung | Volt | - | unsigned char | - | - | 10 | - |
| 0x4031 | Interner LWS Fehler MC-1 | - | - | unsigned char | - | - | - | - |
| 0x4032 | Interner LWS Fehler MC-2 | - | - | unsigned char | - | - | - | - |
| 0x4033 | Interner ECU Fehler | - | - | unsigned char | - | - | - | - |
| 0x4034 | Außentemperatur | °C | - | unsigned char | - | 0,5 | - | -40 |
| 0x4035 | Klemmenstatus | 0-n | - | 0xFF | TAB_KLEMMEN_STATUS | - | - | - |
| 0x4036 | Interner Fehler Hands Off Detection (HOD) | 0-n | - | 0xFF | TAB_HOD_ERROR | - | - | - |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4001

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MC1_JAHR_WERT | HEX | - | int | - | - | - | - | - | Build Datum Jahr |
| STAT_MC1_MONAT_WERT | HEX | - | char | - | - | - | - | - | Build Datum Monat |
| STAT_MC1_TAG_WERT | HEX | - | char | - | - | - | - | - | Build Datum Tag |
| STAT_MC1_STUNDE_WERT | HEX | - | char | - | - | - | - | - | Build Datum Stunde |
| STAT_MC1_MINUTE_WERT | HEX | - | char | - | - | - | - | - | Build Datum Minute |
| STAT_MC1_SECUNDE_WERT | HEX | - | char | - | - | - | - | - | Build Datum Sekunde |
| STAT_MC2_JAHR_WERT | HEX | - | int | - | - | - | - | - | Build Datum Jahr |
| STAT_MC2_MONAT_WERT | HEX | - | char | - | - | - | - | - | Build Datum Monat |
| STAT_MC2_TAG_WERT | HEX | - | char | - | - | - | - | - | Build Datum Tag |
| STAT_MC2_STUNDE_WERT | HEX | - | char | - | - | - | - | - | Build Datum Stunde |
| STAT_MC2_MINUTE_WERT | HEX | - | char | - | - | - | - | - | Build Datum Minute |
| STAT_MC2_SECUNDE_WERT | HEX | - | char | - | - | - | - | - | Build Datum Sekunde |

### RES_0X4004

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BC_RAW_EIN | 0/1 | - | char | - | - | - | - | - | Rohwert BC Taster (1=EIN; 0=AUS) |
| STAT_FLA_RAW_EIN | 0/1 | - | char | - | - | - | - | - | Rohwert FLA Taster (1=EIN; 0=AUS) |
| STAT_AIC_RAW_EIN | 0/1 | - | char | - | - | - | - | - | Rohwert Regensensortaster (1=EIN; 0=AUS) |
| STAT_LHZ_RAW_EIN | 0/1 | - | char | - | - | - | - | - | Rohwert Lenkradheizung (1=EIN; 0=AUS) |
| STAT_LVR_LEFT_VER_DONW_WERT | % | - | unsigned char | - | - | 100.0 | 255.0 | 0.0 | Linker Hebel vertikal unten |
| STAT_LVR_LEFT_VER_UP_WERT | % | - | unsigned char | - | - | 100.0 | 255.0 | 0.0 | Linker Hebel vertikal oben |
| STAT_LVR_LEFT_HOR_WERT | % | - | unsigned char | - | - | 100.0 | 255.0 | 0.0 | Linker Hebel horizontal |
| STAT_RIGHT_VER_WERT | % | - | unsigned char | - | - | 100.0 | 255.0 | 0.0 | Rechter Hebel vertikal |
| STAT_RIGHT_HOR_WERT | % | - | unsigned char | - | - | 100.0 | 255.0 | 0.0 | Rechter Hebel horizontal |
| STAT_RIGHT_RAD_1_WERT | % | - | unsigned char | - | - | 100.0 | 255.0 | 0.0 | Wischerrändel |
| STAT_MFL_HORN_WERT | % | - | unsigned char | - | - | 100.0 | 255.0 | 0.0 | Signalhorn |
| STAT_MFL_SMG_WERT | % | - | unsigned char | - | - | 100.0 | 255.0 | 0.0 | Schaltpaddle links/rechts |
| STAT_LSV_WERT | % | - | unsigned char | - | - | 100.0 | 255.0 | 0.0 | LSV Hebel |
| STAT_FAS_RED_WERT | % | - | unsigned char | - | - | 100.0 | 255.0 | 0.0 | FAS_RED Signalwert |
| STAT_MFL_SMG_UNDEB_WERT | % | - | unsigned char | - | - | 100.0 | 255.0 | 0.0 | Schaltpaddle links/rechts nicht entprellt |
| STAT_V_BAT_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Batteriespannung |

### RES_0XD070_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_ELSV_HINTEN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster eLSV nach hinten nicht betätigt 1: Taster eLSV nach hinten betätigt |
| STAT_TASTER_ELSV_OBEN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster eLSV nach oben nicht betätigt 1: Taster eLSV nach oben betätigt |
| STAT_TASTER_ELSV_UNTEN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster eLSV nach unten nicht betätigt 1: Taster eLSV nach unten betätigt |
| STAT_TASTER_ELSV_VORNE_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster eLSV nach vorne nicht betätigt 1: Taster eLSV nach vorne betätigt |
| STAT_TASTER_ELSV_NR | 0-n | - | char | - | TAB_ELSV_TASTER | 1.0 | 1.0 | 0.0 | 0: Taster eLSV nicht betätigt 1: Taster eLSV nach hinten betätigt 2: Taster eLSV nach oben betätigt 3: Taster eLSV nach vorne betätigt 4: Taster eLSV nach unten betätigt 5: Signal ungültig |

### RES_0XD074_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKRADHEIZUNG_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkradheizung ist AUS; 1: Lenkradheizung ist EIN |
| STAT_LENKRADHEIZUNG_LED_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkradheizung Status LED ist AUS; 1: Lenkradheizung Status LED ist EIN |
| STAT_LENKRADHEIZUNG_STROM_WERT | A | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromaufnahme Lenkradheizung. Bereich: 0 - 25,4 Ampere |
| STAT_LENKRADHEIZUNG_AKTUATOR_STATUS_NR | 0-n | - | char | - | TAB_LIMIT | 1.0 | 1.0 | 0.0 | Zustand Aktuator Lenkradheizung |
| STAT_VORHANDEN_LENKRADHEIZUNG_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 1: Lenkradheizung codiert |

### RES_0XD076_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKWINKEL_QUALIFIER_NR | 0-n | high | char | - | TAB_LWS_QUALIFIER | - | - | - | - |
| STAT_LENKWINKEL_ECU_STATUS_NR | 0-n | - | char | - | TAB_LWS_ECU_STATUS | 1.0 | 1.0 | 0.0 | - |

### RES_0XD080_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_LENKRAD_SCHALTWIPPE_MINUS_LINKS_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Linke Schaltwippe minus nicht betätigt 1: Linke Schaltwippe minus betätigt |
| STAT_TASTER_LENKRAD_SCHALTWIPPE_PLUS_LINKS_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Linke Schaltwippe plus nicht betätigt 1: Linke Schaltwippe plus betätigt |
| STAT_TASTER_LENKRAD_SCHALTWIPPE_PLUS_RECHTS_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Rechte Schaltwippe plus nicht betätigt 1: Rechte Schaltwippe plus betätigt |
| STAT_TASTER_LENKRAD_SCHALTWIPPE_MINUS_RECHTS_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Rechte Schaltwippe minus nicht betätigt 1: Rechte Schaltwippe minus betätigt |

### RES_0XD081_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_LENKRAD_MFL_FGR_SET_EIN | 0-n | - | char | - | TAB_TASTER_MFL_2 | - | - | - | 0: FGR-Taste SET nicht betätigt 1: FGR-Taste SET betätigt |
| STAT_TASTER_LENKRAD_MFL_FGR_TIPPRAENDEL_NR | 0-n | - | char | - | TAB_MFL_RAENDEL_FGR | 1.0 | 1.0 | 0.0 | 0: Keine Betätigung  1: Rändel auf Stufe 2 unten 2: Rändel auf Stufe 1 unten 3: Rändel auf Stufe 1 oben 4: Rändel auf Stufe 2 oben 5: ungültige Position |
| STAT_TASTER_LENKRAD_MFL_FGR_RES_EIN | 0-n | - | char | - | TAB_TASTER_MFL_2 | - | - | - | 0: FGR-Taste RES (Wiederaufnahme) nicht betätigt  1: FGR-Taste RES (Wiederaufnahme) betätigt |
| STAT_TASTER_LENKRAD_MFL_UMSCHALT_TASTE_EIN | 0-n | - | char | - | TAB_TASTER_MFL_1 | 1.0 | 1.0 | 0.0 | 0: Umschalttaste ACC/ DCC nicht betätigt  1: Umschalttaste ACC/ DCC betätigt |
| STAT_TASTER_LENKRAD_MFL_ACC_ABSTAND_EIN | 0-n | - | char | - | TAB_TASTER_MFL_3 | - | - | - | 0: FGR-Taste ACC-Abstand nicht betätigt  1: FGR-Taste ACC-Abstand betätigt |
| STAT_TASTER_LENKRAD_MFL_FGR_OFF_EIN | 0-n | - | char | - | TAB_TASTER_MFL_2 | - | - | - | 0: FGR-Taste OFF nicht betätigt 1: FGR-Taste OFF betätigt |
| STAT_TASTER_LENKRAD_MFL_PUSH_TO_TALK_EIN | 0-n | - | char | - | TAB_TASTER_MFL_1 | 1.0 | 1.0 | 0.0 | 0: Push to talk nicht betätigt  1: Push to talk betätigt |
| STAT_TASTER_LENKRAD_MFL_MODE_TASTE | 0-n | - | char | - | TAB_TASTER_MFL_1 | 1.0 | 1.0 | 0.0 | 0: Taste Source / Mode nicht betätigt 1: Taste Source / Mode betätigt |
| STAT_TASTER_LENKRAD_MFL_TIPPRAENDEL_BC_NR | 0-n | - | char | - | TAB_MFL_TIPPRAENDEL | 1.0 | 1.0 | 0.0 | 0: Tipprändel Bordcomputer (BC) nicht betätigt 1: Tipprändel Bordcomputer gedrückt  2: Tipprändel nach unten 3: Tipprändel nach oben 4: ungültige Position |
| STAT_TASTER_LENKRAD_MFL_TEL_EIN | 0-n | - | char | - | TAB_TASTER_MFL_1 | - | - | - | 0: Telefontaste nicht betätigt  1: Telefontaste betätigt |
| STAT_TASTER_LENKRAD_MFL_VOL_MINUS_EIN | 0-n | - | char | - | TAB_TASTER_MFL_1 | 1.0 | 1.0 | 0.0 | 0: Taste Volume/Lautstärke minus nicht betätigt 1: Taste Volume/Lautstärke minus betätigt |
| STAT_TASTER_LENKRAD_MFL_VOL_PLUS_EIN | 0-n | - | char | - | TAB_TASTER_MFL_1 | 1.0 | 1.0 | 0.0 | 0: Taste Volume/Lautstärke plus nicht betätigt 1: Taste Volume/Lautstärke plus betätigt |
| STAT_TASTER_LENKRAD_MFL1_NR | 0-n | - | char | - | TAB_MFL_TASTEN1 | 1.0 | 1.0 | 0.0 | VS-Result 0: keine Aktion 1-n: siehe Sub-Tabelle TAB_MFL_TASTEN1 Numerierung bleibt erhalten, auch bei Entfall einer oder mehrerer Funktionen. |
| STAT_TASTER_LENKRAD_MFL2_NR | 0-n | - | char | - | TAB_MFL_TASTEN2 | 1.0 | 1.0 | 0.0 | VS-Result 0: keine Aktion 1-n: siehe Sub-Tabelle TAB_MFL_TASTEN2 Numerierung bleibt erhalten, auch bei Entfall einer oder mehrerer Funktionen. |

### RES_0XD085

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKRAD_MFL_VERSORGUNG_AKTIV | 0/1 | - | char | - | - | - | - | - | 0: MFL nicht versorgt 1: MFL versorgt |
| STAT_LENKRAD_MFL_SPANNUNG_WERT | V | - | unsigned char | - | - | - | 10 | - | Ausgangsspannung vom SZL zum MFL |

### RES_0XD08B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASE_MITTEN_FREQUENZ_WERT | Hz | - | unsigned char | - | - | 0.1 | 1.0 | 37.3 | Gelesene Mittenfrequenz des LRE LIN Slaves. |

### RES_0XD35B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKSTOCK_WISCHER_TASTER_AXIAL_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer Taster axial nicht betätigt; 1= Lenkstock Wischer Taster axial betätigt |
| STAT_LENKSTOCK_WISCHER_FRONTWASCHEN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Frontwaschen;  1= Lenkstock Wischer in Stellung Frontwaschen |
| STAT_LENKSTOCK_WISCHER_HECKWASCHEN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Heckwaschen;  1= Lenkstock Wischer in Stellung Heckwaschen |
| STAT_LENKSTOCK_WISCHER_HECKWISCHEN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Heckwischen;  1= Lenkstock Wischer in Stellung Heckwischen |
| STAT_LENKSTOCK_WISCHER_POS_INTERVALL | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Intervall; 1= Lenkstock Wischer in Stellung Intervall |
| STAT_LENKSTOCK_WISCHER_NULLSTELLUNG | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht Nullstellung;  1= Lenkstock Wischer Nullstellung;  Hinweis: Bei einem Schalter entspricht die Nullstellung der Stufe Aus, bei einem Taster entspricht die Nullstellung der Mittelstellung |
| STAT_LENKSTOCK_WISCHER_POS_1 | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Position 1;  1= Lenkstock Wischer in Position 1 |
| STAT_LENKSTOCK_WISCHER_POS_2 | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Position 2;  1= Lenkstock Wischer in Position 2 |
| STAT_LENKSTOCK_WISCHER_RAENDEL_NR | 0-n | - | char | - | TAB_WISCHER_RAENDEL | 1.0 | 1.0 | 0.0 | VS-Result Lenkstock Wischer;  0= Wischer Rändelrad Stufe 1;  1= Wischer Rändelrad Stufe 2;  2= Wischer Rändelrad Stufe 3;  3= Wischer Rändelrad Stufe 4;  4= Wischer Rändelrad ungültige Position; Hinweis: Numerierung bleibt erhalten, auch bei Entfall einer oder mehrerer Funktionen |
| STAT_LENKSTOCK_WISCHER_TIPPWISCHEN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Tippwischen;  1= Lenkstock Wischer in Stellung Tippwischen |
| STAT_LENKSTOCK_WISCHER_NR | 0-n | - | char | - | TAB_LENKSTOCK_WISCHER | - | - | - | VS-Result Lenkstock Wischer; Siehe Sub-Tabelle |

### RES_0XD361_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENSKTOCK_WISCHER_RLD_LED_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: LED AUS 1: LED EIN |

### RES_0XD399_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TLC_AKTUATOR_STROM_WERT | mA | - | char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Stromaufnahme des Aktuators in Auflösung < 10mA |
| STAT_TLC_AKTUATOR_STATUS_NR | 0-n | - | unsigned char | - | TAB_LIMIT | - | - | - | 0x01: unterhalb des Limits; 0x02: normal; 0x03 oberhalb des Limits; 0xFF ungültig |
| STAT_TLC_AKTUATOR_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | 0: Aktuator nicht aktiv 1: Aktuator aktiv |
| STAT_TLC_AKTUATOR_HW_LEITUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Status Spannungswert Hardwareleitung |

### RES_0XD582_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKSTOCK_BLINKER_LINKS_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker nicht in Stellung Blinker Tipp links; 1: Lenkstock Blinker in Stellung Blinker links |
| STAT_LENKSTOCK_BLINKER_LINKS_DAUER_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker nicht in Stellung Blinker Dauer links; 1: Lenkstock Blinker in Stellung Blinker Dauer links |
| STAT_LENKSTOCK_BLINKER_RECHTS_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker nicht in Stellung Blinker Tipp rechts; 1: Lenkstock Blinker in Stellung Blinker rechts |
| STAT_LENKSTOCK_BLINKER_RECHTS_DAUER_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker nicht in Stellung Blinker Dauer rechts; 1: Lenkstock Blinker in Stellung Blinker Dauer rechts |
| STAT_LENKSTOCK_BLINKER_NULLSTELLUNG_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker nicht in Nullstellung; 1: Lenkstock Blinker in Nullstellung |
| STAT_LENKSTOCK_BLINKER_NR | 0-n | - | char | - | TAB_LENKSTOCK_BLINKER | 1.0 | 1.0 | 0.0 | Auflistung siehe Sub-Tabelle |

### RES_0XD583_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKSTOCK_BLINKER_FERNLICHT_BETAETIGT | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker Taster Fernlicht nicht betätigt; 1: Lenkstock Blinker Taster Fernlicht nicht betätigt |
| STAT_LENKSTOCK_BLINKER_LICHTHUPE_BETAETIGT | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker Taster Lichthupe nicht betätigt; 1: Lenkstock Blinker Taster Lichthupe betätigt |

### RES_0XD584_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKSTOCK_BLINKER_FAS_RED_SPANNUNG_WERT | V | high | unsigned char | - | - | 5.0 | 232.0 | 0.0 | Analogsignal FAS-RED-Leitung |
| STAT_LENKSTOCK_BLINKER_FAS_RED_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Signal der Leitung 0-100 % |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HOD_KALIBRIERUNG | 0xA093 | - | Kalibrierung Hands Off Detection | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ELSV_TASTER | 0xD070 | - | Status Taster elektrische Lenksäulenverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD070_D |
| LENKRADHEIZUNG_LED | 0xD071 | - | 0: LED AUS  1: LED EIN | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD071_D | - |
| LENKRADHEIZUNG_TASTER | 0xD073 | STAT_TASTER_LENKRADHEIZUNG_EIN | 0: Lenkradheizung Taster nicht betätigt; 1: Lenkradheizung Taster betätigt | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKRADHEIZUNG | 0xD074 | - | Status / Steuern Lenkradheizung (Aktiv, LED und analoger Wert) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD074_D | RES_0xD074_D |
| LWS_ABGLEICH_MOEGLICH | 0xD075 | STAT_ABGLEICH_MOEGLICH | Bedeutung siehe Tabelle | 0-n | - | high | unsigned char | TAB_SZL_LWS_MOEGLICH | - | - | - | - | 22 | - | - |
| LWS_STATUS | 0xD076 | - | Ausgabe Service-Qualifier und ECU-Status Lenkwinklesensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD076_D |
| LWS_ABGEGLICHEN | 0xD077 | STAT_LENKWINKEL_ABGEGLICHEN | 0: LWS nicht abgeglichen 1: LWS abgeglichen | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LWS_WINKELWERT | 0xD079 | STAT_LENKWINKEL_WERT | Aktueller Winkel des Sensors | Grad | - | - | unsigned int | - | 0.0439453125 | 1.0 | -1439,9560546875 | - | 22 | - | - |
| LWS_ABGLEICH_OFFSET | 0xD07A | STAT_ABGLEICH_OFFSET_WERT | Bereich von XXX Grad bis XXX Grad | Grad | - | - | unsigned int | - | 0.0439453125 | 1.0 | -180.0 | - | 22 | - | - |
| LWS_WINKELGESCHWINDIGKEIT | 0xD07D | STAT_LENKRAD_WINKELGESCHWINDIGKEIT_WERT | Ausgelesene Winkelgeschwindigkeit | Grad/s | - | - | unsigned int | - | 0.087890625 | 1.0 | -2879.912109375 | - | 22 | - | - |
| ELSV_TASTER_VORHANDEN | 0xD07E | STAT_VORHANDEN_TASTER_ELSV_EIN | Taster el. Lenksäulenverstellung 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKRAD_SCHALTWIPPEN | 0xD080 | - | Abfrage Schaltwippen am Lenkrad | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD080_D |
| LENKRAD_MFL | 0xD081 | - | Status der MFL-Tasten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD081_D |
| LWS_ABGLEICH_RESET | 0xD082 | - | Abgleich des Lenkwinkelsensors zurücksetzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD082_D | - |
| LWS_ABGLEICH | 0xD083 | - | Vorgabe Lenkwinkelsensor Offset | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD083_D | - |
| LENKRAD_MFL_VERSORGUNG | 0xD085 | - | Status der MFL-Versorgung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD085 |
| ASE_ABGLEICH_MITTEN_FREQUENZ | 0xD08B | - | Liest bzw. schreibt die Mittenfrequenz des LRE LIN Slave. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD08B_D | RES_0xD08B_D |
| HUPE_TASTER | 0xD297 | STAT_TASTER_HUPE_EIN | 0= Taster Hupe nicht betätigt  1= Taster Hupe betätigt | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKSTOCK_WISCHER | 0xD35B | - | Liefert den Zustand der einzelnen Wischerschalter am Lenkstock | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD35B_D |
| LENKSTOCK_WISCHER_RLS_LED | 0xD361 | - | Status / Steuern LED Regensensor | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD361_D | RES_0xD361_D |
| TLC_AKTUATOR | 0xD399 | - | Status / Steuern TLC-Aktuator | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD399_D | RES_0xD399_D |
| HOD_LENKRAD | 0xD3F0 | STAT_HOD_STATUS_NR | Liefert den Status des HOD Sensors | 0-n | - | high | unsigned char | HOD_STATUS | - | - | - | - | 22 | - | - |
| HOD_ZUSTAND_GAP | 0xD3F1 | STAT_ADC_ROHWERT_WERT | Vom A/D-Wandler gemessener Rohwert des Abstands bzw. der Berührungsfläche zwischen Hand und Lenkrad | - | - | high | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HOD_AKTIVIERUNG | 0xD3F3 | - | Aktivierung der HOD-Elektronik per Diagnose | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3F3_D | - |
| LENKSTOCK_BLINKER_TASTER_FLA | 0xD580 | STAT_LENKSTOCK_BLINKER_TASTER_FLA_EIN | 0: Lenkstock Blinker axialer Taster Fernlichtassistent nicht betätigt; 1: Lenkstock Blinker axialer Taster Fernlichtassistent betätigt | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKSTOCK_BLINKER_TASTER_BC | 0xD581 | STAT_LENKSTOCK_BLINKER_TASTER_BC_EIN | 0: Lenkstock Blinker axialer Taster Bordcomputer nicht betätigt; 1: Lenkstock Blinker axialer Taster Bordcomputer betätigt | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKSTOCK_BLINKER_FRA | 0xD582 | - | Status Taster Fahrrichtungsanzeiger. Resultbeschreibung in der Sub-Tabelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD582_D |
| LENKSTOCK_BLINKER_LICHTHUPE_FERNLICHT | 0xD583 | - | Status Lichthupe / Fernlicht. Resultbeschreibung in der Sub-Tabelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD583_D |
| LENKSTOCK_BLINKER_FAS_RED | 0xD584 | - | Status FAS-RED Leitung vom SZL | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD584_D |
| SPANNUNG_KLEMME_30_WERT | 0xDAD8 | STAT_SPANNUNG_KLEMME_30_WERT | Spannungswert am Steuergerät an Klemme 30 (auf eine Nachkommastelle genau) | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| STATUS_SW_BUILD_INFO | 0x4001 | - | SW Versions Datum | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4001 |
| STATUS_SCHALTER_ROHWERTE | 0x4004 | - | Rohwerte der Schalter am SZL | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4004 |

### TAB_ELSV_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht betätigt |
| 0x01 | Taster nach hinten |
| 0x02 | Taster nach oben |
| 0x03 | Taster nach vorne |
| 0x04 | Taster nach unten |
| 0xFF | ungültiger Wert |

### TAB_HOD_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | EEPROM nicht verfügbar |
| 0x02 | ROM-Fehler |
| 0x03 | Watchdog Fehler |
| 0x04 | CPU-Fehler |
| 0x05 | Lenkrad, Unterbrechung Schirm |
| 0x06 | Lenkrad, Unterbrechung Messleitung |
| 0x07 | CPU defekt oder Sensor Kurzschluß |
| 0x08 | Unterspannung |
| 0x09 | Überspannung |
| 0x0A | Kodierfehler |
| 0x0B | Allgemeiner Systemfehler 2 |
| 0x0F | Signal ungültig |
| 0xFF | ungültiger Wert |

### TAB_KLEMMEN_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Reserve |
| 0x02 | KL30 |
| 0x03 | KL30F-Änderung |
| 0x04 | KL30F-Ein |
| 0x05 | KL30B-Änderung |
| 0x06 | KL30B-Ein |
| 0x07 | KLR-Änderung |
| 0x08 | KLR-Ein |
| 0x09 | KL15-Änderung |
| 0x0A | KL15-Ein |
| 0x0B | KL50-Verzögerung |
| 0x0C | KL50-Änderung |
| 0x0D | KL50-Ein |
| 0x0E | Fehler |
| 0x0F | Signal ungültig |
| 0xFF | ungültiger Wert |

### TAB_LENKSTOCK_BLINKER

| WERT | TEXT |
| --- | --- |
| 0x00 | Lenkstock in Nullstellung |
| 0x01 | Blinker rechts tipp |
| 0x02 | Blinker rechts Dauer |
| 0x03 | Blinker links tipp |
| 0x04 | Blinker links Dauer |
| 0x05 | Fernlicht |
| 0x06 | Lichthupe |
| 0x07 | Mehrfachbetätigung |
| 0xFF | ungültiger Wert |

### TAB_LENKSTOCK_WISCHER

| WERT | TEXT |
| --- | --- |
| 0x00 | Nullstellung |
| 0x01 | Tippwischen |
| 0x02 | Wischer Stufe 1 |
| 0x03 | Wischer Stufe 2 |
| 0x04 | Frontwaschen |
| 0x05 | Intervall |
| 0x06 | Heckwischen |
| 0x07 | Heckwaschen |
| 0x08 | Mehrfachbetätigung |
| 0xFF | ungültiger Wert |

### TAB_LIMIT

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aussage |
| 0x01 | unterhalb Limit |
| 0x02 | normal Zustand |
| 0x03 | oberhalb Limit |
| 0xFF | ungültiger Wert |

### TAB_LWS_ECU_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Zustand Initialisierung |
| 0x01 | Zustand Normalbetrieb |
| 0x02 | Zustand Normalbetrieb/Überspannung sensiert |
| 0x03 | Zustand Normalbetrieb/Unterspannung sensiert |
| 0x04 | Zustand Diagnose |
| 0x05 | Zustand Diagnose/Überspannung sensiert |
| 0x06 | Zustand Diagnose/Unterspannung sensiert |
| 0x07 | Zustand Powerdown |
| 0x08 | Zustand PowerSave |
| 0x09 | Zustand Nicht verfügbar |
| 0x0A | Zustand Reset |
| 0x0B | Zustand Reserviert 11 |
| 0x0C | Zustand Reserviert 12 |
| 0x0D | Zustand Reserviert 13 |
| 0x0E | Zustand Reserviert 14 |
| 0x0F | Signal ungültig |
| 0xFF | ungültiger Wert |

### TAB_LWS_QUALIFIER

| WERT | TEXT |
| --- | --- |
| 0x01 | Signalwert ist gültig und abgesichert und plausibilisiert, Zustand/Status permanent |
| 0x02 | Signalwert ist gültig, Zustand/Status permanent |
| 0x03 | Signalwert ist nicht vertrauenswürdig, Zustand/Status permanent |
| 0x04 | Ersatzwert ist im Nutzsignal gesetzt,  Zustand/Status permanent |
| 0x06 | Signalwert ist ungültig, Zustand/Status permanent |
| 0x07 | Sensor nicht vorhanden |
| 0x08 | Initialisierung |
| 0x09 | Signalwert ist gültig und abgesichert, Zustand/Status temporär |
| 0x0A | Signalwert ist gültig und abgesichert, Zustand/Status temporär |
| 0x0B | Signalwert ist nicht vertrauenswürdig, Zustand/Status temporär |
| 0x0C | Abgleichwert ist im Nutzsignal gesetzt,  Zustand/Status temporär |
| 0x0E | Signalwert ist ungültig, Zustand/Status temporär |
| 0xFF | ungültiger Wert |

### TAB_MFL_RAENDEL_FGR

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Betätigung |
| 0x01 | Rändel auf Stufe 2 unten |
| 0x02 | Rändel auf Stufe 1 unten |
| 0x03 | Rändel auf Stufe 1 oben |
| 0x04 | Rändel auf Stufe 2 oben |
| 0x05 | ungültige Position |

### TAB_MFL_TASTEN1

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Betätigung |
| 0x01 | Taste FGR SET betätigt |
| 0x02 | Umschalttaste ACC / DCC betätigt |
| 0x03 | Taste FGR RES betätigt |
| 0x04 | Taste ACC-Abstand betätigt |
| 0x05 | Rändel FGR Stufe 2 unten betätigt |
| 0x06 | Rändel FGR Stufe 1 unten betätigt |
| 0x07 | Rändel FGR Stufe 1 oben betätigt |
| 0x08 | Rändel FGR Stufe 2 oben betätigt |
| 0x09 | Taste FGR OFF betätigt |
| 0x0A | Mehrfachbetätigung |
| 0xFF | ungültiger Wert |

### TAB_MFL_TASTEN2

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Betätigung |
| 0x01 | Taste Source / Mode betätigt |
| 0x02 | BC-Rändel gedrückt |
| 0x03 | BC-Rändel nach unten |
| 0x04 | BC-Rändel nach oben |
| 0x05 | Taste Telefon betätigt |
| 0x06 | Taste Volume Minus betätigt |
| 0x07 | Taste Volume Plus betätigt |
| 0x08 | Taste Push-To-talk betätigt |
| 0x09 | Mehrfachbetätigung |
| 0xFF | ungültiger Wert |

### TAB_MFL_TIPPRAENDEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Tipprändel BC nicht betätigt |
| 0x01 | Tipprändel BC gedrückt |
| 0x02 | Tipprändel nach unten |
| 0x03 | Tipprändel nach oben |
| 0xFF | ungültiger Wert |

### TAB_SZL_LWS_MOEGLICH

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aussage möglich |
| 0x01 | Abgleich in Nullage möglich |
| 0x02 | Abgleich nicht möglich, da außerhalb Bereich |
| 0x03 | Abgleich nicht möglich, LWS-Fehler erkannt |
| 0x04 | Abgleich nicht möglich, Geschwindigkeit zu hoch oder ungültig |
| 0xFF | ungültiger Wert |

### TAB_TASTER_MFL_1

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aktion |
| 0x01 | Taster gedrückt |
| 0x03 | ungültig |

### TAB_TASTER_MFL_2

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aktion |
| 0x01 | Taste gedrückt |
| 0x0F | ungültig |

### TAB_TASTER_MFL_3

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aktion |
| 0x01 | Taster/Wippe oben gedrückt |
| 0x05 | Taster/Wippe unter gedrückt |
| 0x0F | ungültig |

### TAB_WISCHER_RAENDEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Rändel in Stufe 1 |
| 0x01 | Rändel in Stufe 2 |
| 0x02 | Rändel in Stufe 3 |
| 0x03 | Rändel in Stufe 4 |
| 0xFF | ungültiger Wert |
