# tvm2_t2.prg

## General

|  |  |
| --- | --- |
| File | tvm2_t2.prg |
| Type | PRG |
| Jobs | 46 |
| Tables | 76 |
| Origin | HIRSCHMANN EI-71 Schneider |
| Revision | 4.000 |
| Author | HIRSCHMANN EI-71 Schneider |
| ECU Comment | Version 1.0 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | TV-Modul2 DVB-T2 |  |  |
| ORIGIN | string | HIRSCHMANN EI-71 Schneider |  |  |
| REVISION | string | 4.000 |  |  |
| AUTHOR | string | HIRSCHMANN EI-71 Schneider |  |  |
| COMMENT | string | Version 1.0 |  |  |
| PACKAGE | string | 1.47 |  |  |
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

### STATUS_VERSION_MOST_CONTROLLER

Return Version of MOST Controller

_No arguments._

### STATUS_VERSORGUNGSSPANNUNG

Betriebsspannung am SG. Darstellung mit Millivolt-Auflösung.

_No arguments._

### STATUS_WAKEUP_STATUS

Gibt an, ob das SG den MOST-Ring geweckt hat oder geweckt wurde.

_No arguments._

### STATUS_ABILITY_TO_WAKE

Gibt an ob SG Most Ring wecken darf

_No arguments._

### STATUS_AVERAGE_MESSAGE_RECEPTION_RATE

Liest die mittlere Nachrichtenabnahmerate des SGs während dieses Gerät geflasht wird, also in der ProgramminSession Auslesbar muss der Status jederzeit sein

_No arguments._

### STATUS_FOT_TEMPERATUR

Temperatur am FOT

_No arguments._

### STEUERN_SENSOR_TEMP

Simulates the temperature of a definite sensor.

| Name | Type | Description |
| --- | --- | --- |
| ARG_SENSOR | unsigned char | Sensor for which the temperature must be simulated |
| ARG_TEMPERATURE | char | Temperature that must be simulated |
| ARG_DURATION | unsigned char | Duration of the temperature simulation |

### STEUERN_WATCHDOG_TRIGGER_STOP

Unterbindet das regelmäßige Rücksetzen des Applikations-Watchdogs nach ARG_TIME_WATCHDOG Sekunden. Wenn ARG_TIME_WATCHDOG nicht angegeben wird, wird der Wert 0 benutzt.

| Name | Type | Description |
| --- | --- | --- |
| ARG_TIME_WATCHDOG | unsigned int | Beschreibung: z.B. ARG_TIME_WATCHDOG = 4 bedeutet Abschalten des Watchdog-Triggers nach 4 Sekunden. nur positiven Zahlen und die 0. Skalierung: 1 entspricht 1 Sekunde |

### STATUS_SENSOR_TEMP

Returns the temperature of the desired sensor (no matter if the temperature is currently being simulated or not).

| Name | Type | Description |
| --- | --- | --- |
| ARG_SENSOR | unsigned char | Sensor for which the temperature must be returned |

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

### STATUS_HW_VARIANTE

Liefert die HW-Variante des Tuners

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

### TFBLOCKIDTEXTE

| WERT | TEXT |
| --- | --- |
| 0x01 | NetBlock |
| 0x02 | NetworkMaster |
| 0x03 | ConnectionMaster |
| 0x04 | PowerMaster |
| 0x05 | Vehicle |
| 0x06 | Diagnosis |
| 0x07 | VideoSwitch |
| 0x0F | EnhancedTestability |
| 0x10 | MMI |
| 0x11 | SVS |
| 0x14 | BCStatistic |
| 0x15 | ControlElements |
| 0x20 | AudioMaster |
| 0x22 | AudioAmplifier / AudioAmplifier_HU |
| 0x23 | HeadPhoneAmplifier |
| 0x24 | AuxiliaryInput |
| 0x26 | MicrophoneInput |
| 0x2E | AudioSinkRouter |
| 0x2F | AudioSourceRouter |
| 0x30 | AudioTapePlayer |
| 0x31 | AudioDiskPlayer |
| 0x32 | MultiMediaPlayer |
| 0x40 | AmFmTuner |
| 0x41 | TMCTuner |
| 0x42 | TVTuner |
| 0x43 | DABTuner |
| 0x44 | SatRadio |
| 0x50 | Telephone |
| 0x51 | GeneralPhoneBook / MobileOffice |
| 0x52 | Navigation / NavigationStd |
| 0x54 | Bluetooth |
| 0x6F | Monitor |
| 0x70 | PDC |
| 0x71 | Climate |
| 0x74 | EBA/Services |
| 0x80 | MMI_Terminal |
| 0x81 | Kombi_Terminal |
| 0x82 | HUD_Terminal |
| 0x90 | Telematik |
| 0x91 | InternalAudioSource |
| 0x92 | InternalAudioSink |
| 0xA0 | WLAN |
| 0xA1 | Kleer |
| 0xAB | TollCollect |
| 0xBE | Browser |
| 0xC0 | CANDevices |
| 0xC1 | MPEG-TS_Decoder |
| 0xC9 | Services |
| 0xCA | KombiMiscFKts |
| 0xCB | BordComputer |
| 0xCC | ADASInterface |
| 0xCD | NavigationInfo |
| 0xCE | iSpeech |
| 0xCF | HMIControl |
| 0xD0 | Security |
| 0xD1 | SystemFunction |
| 0xD2 | MultiMediaServer |
| 0xD3 | MassStorageControl |
| 0xD4 | SWUpdate |
| 0xD5 | VirtualControlElements |
| 0xD6 | Vehicle2 |
| 0xD7 | VideoConnectionMaster |
| 0xD8 | VideoSink |
| 0xD9 | EarlyVideoControl |
| 0xDA | MapControl |
| 0xDB | Titelematics |
| 0xDC | DataComIP |
| 0xDD | DUMM |
| 0xDE | TelematikTCU / jetzt TelematicAssist |
| 0xDF | TeleX |
| 0xE0 | KombiInterface |
| 0xE1 | HUDInterface |
| 0xE2 | Camera |
| 0xE3 | MOSTFileSystem |
| 0xE4 | XFCD / Jingle / SoundApplications |
| 0xE5 | CentralControlUnit / CentralControlSystem |
| 0xE6 | TripMemory |
| 0xE7 | RemoteApplication |
| 0xE8 | VideoOutSettings |
| 0xE9 | SoundSignalService |
| 0xEA | PDC |
| 0xEB | DebugApplication |
| 0xED | PIM |
| 0xEE | DataCommunication |
| 0xFF | Nicht definiert |

### TWAKEUPSTATUS

| WERT | TEXT | TEXT2 |
| --- | --- | --- |
| 0 | not initialised | off |
| 1 | SG will be waked up | on |
| 2 | SG are waked up | critical |

### ARG_0XA018_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ANTENNE | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Antenne(n) die getestet werden sollen. Tabelle TAntenne |

### ARG_0XA01A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SIGNALART | + | - | 0-n | - | unsigned char | - | TSignalArt | 1.0 | 1.0 | 0.0 | - | - | Art der Signalausgabe. |
| ARG_AUSGANG | + | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | - | - | Default: 0 Alle Ausgänge des Steuergerätes müssen einzeln und kombiniert anwählbar sein. |
| ARG_TIMEOUT | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die das Testbild ausgegeben wird. Default: 255 Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis: -der Job erneut mit Parameter 0 aufgerufen wird -das Steuergerät neu startet (Aufwachen, Reset, &) |

### ARG_0XA01B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_AUSGANG | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wählt den zu testenden Ausgang. Tabelle TVideoAusgang |

### ARG_0XA022_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SELBSTTEST_ROUTINE | + | - | 0-n | - | unsigned long | - | TSelbsttestRoutine | - | - | - | - | - | Routinen, die getestet werden sollen. Die Tabelle TSelbsttestRoutine wird in der SGBD von der Entwicklung bzw. vom Zulieferer befüllt und gepflegt |

### ARG_0XA042_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ANTENNE | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 5.0 | Definiert die Antenne, deren Feldstärke wiedergegeben werden soll. |

### ARG_0XA043_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ANTENNE | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 5.0 | Definiert die Antenne, deren Feldstärke wiedergegeben werden soll. |

### ARG_0XA08E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANTENNE | + | - | 0-n | high | unsigned char | - | TAB_TVM_ANTENNEN | 1.0 | 1.0 | 0.0 | - | - | Nummer der Antenne für die zu schaltenden Phantomspannung |
| ON_OFF | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = OFF, 1 = ON |

### ARG_0XD04F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_REGION | 0-n | - | unsigned char | - | TTvRegion | 1.0 | 1.0 | 0.0 | - | - | Einstellung der Region. |

### ARG_0XD050_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CHANNEL | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 99.0 | Einstellung des TV-Kanals. Mögliche Werte: 1 bis 99 Dabei sind folgende Kanäle sowohl für ISDB-T als auch für analog auf der gleichen Frequenz (Analog/Digital): 21/13, 24/17, 27/21, 30/25, 33/29, 36/33, 39/37, 42/41, 45/45, 48/49, 51/53, 54/57, 57/61 |
| ARG_BOUQET | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 64.0 | Einstellung des BOUQETS (nur für digitale Kanäle) |

### ARG_0XD0C4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Löscht aller Kundeneinstellungen mit Übergabe des Wertes 0x01 beim Argument AKTION |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

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
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | nein |

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
| 0x024B00 | Energiesparmode aktiv | 0 |
| 0x02FF4B | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0xB7FA80 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0xB7FA81 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0xB7FA82 | Codierung: Signatur für Daten ungültig | 0 |
| 0xB7FA83 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0xB7FA84 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0xB7FA85 | Unterspannung erkannt | 1 |
| 0xB7FA86 | Überspannung erkannt | 1 |
| 0xB7FA87 | Interner Steuergerätefehler Hardware | 0 |
| 0xB7FA88 | Interner Steuergerätefehler Software | 0 |
| 0xB7FA90 | FBAS-Ausgang 1: Kurzschluss | 0 |
| 0xB7FA91 | FBAS-Ausgang 1: Unterbrechung oder fehlerhafte Senke | 0 |
| 0xB7FA92 | Antenne 1: Kurzschluss | 0 |
| 0xB7FA93 | Antenne 1: nicht verbunden, hohe Impedanz | 0 |
| 0xB7FA94 | Antenne 2: Kurzschluss | 0 |
| 0xB7FA95 | Antenne 2: nicht verbunden, hohe Impedanz | 0 |
| 0xB7FA96 | Antenne 3: Kurzschluss | 0 |
| 0xB7FA97 | Antenne 3: nicht verbunden, hohe Impedanz | 0 |
| 0xB7FAA0 | FBAS-Ausgang 2: Kurzschluss | 0 |
| 0xB7FAA1 | FBAS-Ausgang 2: Unterbrechung oder fehlerhafte Senke | 0 |
| 0xDBC43F | MOST: Empfänger hat Nachricht nicht abgenommen | 1 |
| 0xDBC440 | Reset | 0 |
| 0xDBC442 | Abschaltung Übertemperatur | 1 |
| 0xDBC445 | MOST: Reset | 0 |
| 0xDBCBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1709 | MOSTMesHeader | Text | High | 6 | - | - | - | - |
| 0x170A | FOTTemp Celsius | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
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
| 0x4B0001 | COM_I2C: Kommunikation fehlerhaft | 0 |
| 0x4B0003 | SW Watchdog | 0 |
| 0x4B0004 | HW Watchdog | 0 |
| 0x4B0006 | A/V nicht decodierbar | 0 |
| 0x930000 | Timing-Master: kann Kanal nicht reservieren; Resource Allocation Table (RAT) ist voll | 1 |
| 0x930001 | Versorgungsspannung: Mindestwert unterschritten | 1 |
| 0x930003 | Sender-Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 2 | 0 |
| 0x930004 | Diagnosemaster-Client: Datenzwischenablage im Active Response Handler übergelaufen | 1 |
| 0x930005 | Diagnosemaster-Client: Telegramm Systemzeit nicht fristgerecht erkannt | 1 |
| 0x930006 | MOST: Licht geht unerwartet aus | 0 |
| 0x930007 | MOST: Synchronisation (Phase Locked Loop) arbeitet nicht korrekt | 0 |
| 0x930008 | Systemzustand OK nicht fristgerecht erkannt | 0 |
| 0x930009 | FBlock mit Methode SenderHandle: Lebenszeichen kommt nicht fristgerecht | 1 |
| 0x93000A | FBlock mit Methode: Lebenszeichen kommt nicht fristgerecht | 1 |
| 0x930011 | MOST: Ringbruch | 1 |
| 0x930030 | Timing-Master: beschäftigt, kann Audiokanal nicht reservieren (allokieren) | 1 |
| 0x930031 | Timing-Master: beschäftigt, kann Audiokanal nicht freigeben (deallokieren) | 1 |
| 0x930032 | Timing-Master: kann Kanal nicht freigeben; falsches Label | 1 |
| 0x930033 | Empfängerknoten: hat Nachricht nicht abgenommen; Empfänger existiert nicht | 1 |
| 0x930034 | Empfängerknoten: hat Nachricht nicht abgenommen; fehlerhafte Checksumme am Empfänger erkannt | 1 |
| 0x930035 | Übertragungsfehler im Hardware Abstraction Layer | 0 |
| 0x93003A | Empfängerknoten: Kommandointerpreter kennt Nachricht nicht | 0 |
| 0x93003B | Empfängerknoten: mindestens eine Nachricht (Group/Broadcast) nicht abgenommen | 0 |
| 0x93003C | WakeUp MOST: Ring unerlaubt geweckt | 0 |
| 0x93003D | Senderknoten: adressierter Funktionsblock existiert nicht | 0 |
| 0x93003E | Senderknoten: falsche Parameter in Nachricht | 0 |
| 0x93003F | MOST Operation Senderknoten: Fehler in adressierter Funktion | 0 |
| 0x930040 | Senderknoten: Fehler in Segmentierung | 0 |
| 0x930041 | Funktionsblock: sendet keine Werte trotz Notifizierung | 1 |
| 0x930042 | Funktionsblock: Notifizierung abgelehnt; Spalte der Notifizierungstabelle voll | 1 |
| 0x930043 | Funktionsblock: Notifizierung abgelehnt; keine freien Zeilen in Notifizierungstabelle | 1 |
| 0x930044 | Funktionsblock: Notifizierung abgelehnt; gewünschte Funktion existiert nicht | 1 |
| 0x930045 | Funktionsblock: Notifizierung abgelehnt; Grund unbekannt | 1 |
| 0x930046 | Funktionsblock: Notifizierung abgelehnt; Funktionswert momentan nicht vorhanden | 1 |
| 0x930047 | Audiosenke: Audioeinstellungen nicht korrekt ausgeführt | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1709 | MOSTMesHeader | Text | High | 6 | - | - | - | - |
| 0x170B | Node Position Register | HEX | High | unsigned char | - | - | - | - |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x171E | MOSTMesErrorCodeInfo | Text | High | 8 | - | - | - | - |
| 0x172D | MOSTMesOpType | Text | High | 9 | - | - | - | - |
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

### RES_0X4001_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CRYPTOKEY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 CryptoKey_No 1 CryptoKey_Test 2 CryptoKey_Final |
| STAT_CRYPTOKEYINTRODUCTION | 0/1 | high | unsigned char | - | - | - | - | - | 0 CryptoKeyIntroduction_Automatic 1 CryptoKeyIntroduction_Manual |
| STAT_FRONTENDHARDWARE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FrontendHardware Werte von 0 bis 0xF möglich. |

### RES_0XA018_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt an, welche Antenne(n) getestet wurden. |
| STAT_TEST_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAB_TESTSTATUS | - | - | - | Gibt den Status des gesamten Tests oder der entsprechenden Antennen wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_ANTENNEN_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 2 oder 3 meldet. Gibt wieder, wie viele Fehler während des Tests gefunden wurden. |
| STAT_FEHLER_1_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | Rückgabe der Antenne, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_1_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_1_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_2_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_2_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_3_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_3_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_4_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_4_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_5_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_5_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_6_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_6_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_7_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_7_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_8_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_8_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_9_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_9_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_10_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_10_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_11_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_11_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_12_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_12_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_13_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_13_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_14_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_14_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_15_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_15_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_16_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | 1.0 | 1.0 | 0.0 | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_16_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |

### RES_0XA01B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Gibt wieder, als Integer, welche Ausgänge getestet wurden. 0 bedeutet alle Ausgänge wurden getestet. |
| STAT_TEST_VIDEOAUSGANG | - | - | + | 0-n | - | unsigned char | - | TAB_TESTSTATUS | 1.0 | 1.0 | 0.0 | Gibt den Status der getesteten Ausgänge wieder. Die offene Leitung zu erkennen ist optional, zwingend ist die Erkennung von Kurzschlüssen. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_AUSGAENGE_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 2 oder 3 meldet. Gibt wieder, auf wie vielen Ausgängen Fehler vorlagen. |
| STAT_FEHLER_1_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_1_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_2_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_2_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_3_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_3_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_4_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_4_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_5_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_5_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_6_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_6_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_7_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_7_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_8_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_8_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_9_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_9_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_10_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_10_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_11_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_11_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_12_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_12_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_13_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_13_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_14_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_14_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_15_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_15_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_16_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_16_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |

### RES_0XA022_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELBSTTEST_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TSelbsttestRoutine | - | - | - | Routine(n), die getestet wurde(n). Tabelle  TSelbsttestRoutine |
| STAT_SELBSTTEST | - | - | + | 0-n | - | unsigned char | - | TAB_TESTSTATUS | - | - | - | Gibt den Status des Tests wieder. |

### RES_0XA042_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FELDSTAERKE_ANTENNE_WERT | + | - | - | dBµV | - | int | - | - | 1.0 | 1.0 | 0.0 | Antennen-Feldstärke. Bereich: 0..99  Dies ist die Feldstärke der Antenne in dBµV. Dabei bedeutet eine Rückgabe von 0 immer eine Feldstärke außerhalb des zulässigen Bereichs. |

### RES_0XA043_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FELDSTAERKE_ANTENNE_WERT | + | - | - | dBµV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Antennen-Feldstärke. Bereich: 0..99  Dies ist die Feldstärke der Antenne in dBµV. Dabei bedeutet eine Rückgabe von 0 immer eine Feldstärke außerhalb des zulässigen Bereichs. |
| STAT_BER_WERT | + | - | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Bitfehlerrate auf der angegebenen Antenne. |

### RES_0XA08E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTENNE_PHANTOM_SUPPLY | - | - | + | 0-n | high | unsigned char | - | TAB_TVM_ANTENNEN | - | - | - | Gewählte Antenne(n), Details siehe Tabelle TAB_TVM_ANTENNEN |
| STAT_ANTENNE_1_PHANTOM_SUPPLY_ON | - | - | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Phantomspannung der Antenne 1: 0 = Phantomspannung ausgeschaltet 1 = Phantomspannung eingeschaltet |
| STAT_ANTENNE_1_PHANTOM_SUPPLY_CURRENT_STATUS | - | - | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Strommessergebnis der Antenne 1: 0 = Phantom Supply konnte nicht gemessen werden  1 = PhantomSupply konnte gemessen werden |
| STAT_ANTENNE_1_PHANTOM_SUPPLY_CURRENT_WERT | - | - | + | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom der Phantomspannung Antenne 1. |
| STAT_ANTENNE_2_PHANTOM_SUPPLY_ON | - | - | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Phantomspannung der Antenne 2: 0 = Phantomspannung ausgeschaltet 1 = Phantomspannung eingeschaltet |
| STAT_ANTENNE_2_PHANTOM_SUPPLY_CURRENT_STATUS | - | - | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Strommessergebnis der Antenne 2: 0 = Phantom Supply konnte nicht gemessen werden  1 = PhantomSupply konnte gemessen werden |
| STAT_ANTENNE_2_PHANTOM_SUPPLY_CURRENT_WERT | - | - | + | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom der Phantomspannung Antenne 2. |
| STAT_ANTENNE_3_PHANTOM_SUPPLY_ON | - | - | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Phantomspannung der Antenne 3: 0 = Phantomspannung ausgeschaltet 1 = Phantomspannung eingeschaltet |
| STAT_ANTENNE_3_PHANTOM_SUPPLY_CURRENT_STATUS | - | - | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Strommessergebnis der Antenne 3: 0 = Phantom Supply konnte nicht gemessen werden  1 = PhantomSupply konnte gemessen werden |
| STAT_ANTENNE_3_PHANTOM_SUPPLY_CURRENT_WERT | - | - | + | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strom der Phantomspannung Antenne 3. |
| STAT_PHANTOM_POWER_ANTENNA_1_SUPPLY | + | - | - | 0-n | high | unsigned char | - | TAB_PHANTOM_POWER_SUPPLY_RESULT | - | - | - | Rückmeldung, ob Ansteuerung der Antenne 1 erfolgreich gestartet werden konnte. Siehe TAB_PHANTOM_POWER_SUPPLY_RESULT. Wurde die Antenne nicht angesteuert, wird der aktuelle Status ausgegeben. |
| STAT_PHANTOM_POWER_ANTENNA_2_SUPPLY | + | - | - | 0-n | high | unsigned char | - | TAB_PHANTOM_POWER_SUPPLY_RESULT | - | - | - | Rückmeldung, ob Ansteuerung der Antenne 2 erfolgreich gestartet werden konnte. Siehe TAB_PHANTOM_POWER_SUPPLY_RESULT. Wurde die Antenne nicht angesteuert, wird der aktuelle Status ausgegeben. |
| STAT_PHANTOM_POWER_ANTENNA_3_SUPPLY | + | - | - | 0-n | high | unsigned char | - | TAB_PHANTOM_POWER_SUPPLY_RESULT | - | - | - | Rückmeldung, ob Ansteuerung der Antenne 3 erfolgreich gestartet werden konnte. Siehe TAB_PHANTOM_POWER_SUPPLY_RESULT. Wurde die Antenne nicht angesteuert, wird der aktuelle Status ausgegeben. |

### RES_0XD026_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_FOT_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des Fibre Optical Transceivers (FOT). Bereich: -127,&,127 |
| STAT_TEMP_ENDSTU_WERT | °C | - | int | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur der Endstufe. Bereich: -32767,&, 32767 |
| STAT_TEMP_GYRO_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des Gyro. Bereich: -127,&,127 |
| STAT_TEMP_MOD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des Moduls (normalerweise prozessornah). Bereich: -127,&,127 |
| STAT_TEMP_HDD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des HDD-Laufwerks. Bereich: -127,&,127 |
| STAT_TEMP_DVD_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des DVD-Laufwerks. Bereich: -127,&,127 |

### RES_0XD04F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGION | 0-n | - | unsigned char | - | TTvRegion | 1.0 | 1.0 | 0.0 | Eingestellte Region. |

### RES_0XD050_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHANNEL_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestellter TV-Kanal. Mögliche Werte: 1 bis 99 |
| STAT_BOUQET_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Einstellung des BOUQETS (nur für digitale Kanäle). |

### RES_0XD0C3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FIRMWARESIANODVBT_TEXT | TEXT | high | string[55] | - | - | 1.0 | 1.0 | 0.0 | STATUS_FirmwareSianoDVBT auslesen. Gültig für TVM2_T2 |
| STAT_FIRMWARESIANODVBT2_TEXT | TEXT | high | string[55] | - | - | 1.0 | 1.0 | 0.0 | STATUS_FirmwareSianoDVBT2 auslesen. Gültig für TVM2_T2 |
| STAT_HW_INIC_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | STATUS_HW_INIC auslesen. Gültig für TVM2_T2 |
| STAT_FW_INIC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | STATUS_FW_INIC auslesen. Gültig für TVM2_T2 |
| STAT_FW_INIC_DATE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | STATUS_FW_INIC_DATE auslesen. Gültig für TVM2_T2 |
| STAT_NS_INIC_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | STATUS_NS_INIC auslesen. Gültig für TVM2_T2 |
| STAT_CS_INIC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | STATUS_CS_INIC auslesen. Gültig für TVM2_T2 |
| STAT_API_INIC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | STATUS_API_INIC auslesen. Gültig für TVM2_T2 |

### ROE_EWT_DOP

| WERT | TEXT |
| --- | --- |
| 2 | infiniteTimeToResponse |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TEST_ANTENNE | 0xA018 | - | Startet und bewertet die Prüfung für eine oder mehrere Antennen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA018_R | RES_0xA018_R |
| SIGNALAUSGABE | 0xA01A | - | Steuert die Videosignalausgabe eines Steuergerätes (Videoquelle). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01A_R | - |
| TEST_VIDEOAUSGANG | 0xA01B | - | Steuert und bewertet den Test der Videoeingänge. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01B_R | RES_0xA01B_R |
| SELBSTTEST | 0xA022 | - | Selbsttests des Steuergerätes Sie sollen einen evtl. notwendigen Tausch von Software/Hardware erkennen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA022_R | RES_0xA022_R |
| STEUERN_ANTENNE_FELDSTAERKE | 0xA042 | - | Liest die aktuelle Feldstärke auf der angegebenen Antenne aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA042_R | RES_0xA042_R |
| STEUERN_ANTENNEN_SIGNAL_DIGITAL | 0xA043 | - | Liest die aktuelle Feldstärke auf der angegebenen Antenne aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA043_R | RES_0xA043_R |
| TVM_PHANTOM_POWER_SUPPLY | 0xA08E | - | Schaltet die Phantomspannung für die Antennen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA08E_R | RES_0xA08E_R |
| STATUS_ANALOG_TEMPERATUR | 0xD026 | - | Abfrage der Temperaturen des Steuergerätes. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD026_D |
| TVSETREGION | 0xD04F | - | Steuert und liest die eingestellte Ländernorm bzw. Region aus. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD04F_D | RES_0xD04F_D |
| TVSETCHANNEL | 0xD050 | - | Einstellung und Auslesen des TV-Kanals. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD050_D | RES_0xD050_D |
| TVM_FIRMWARE_VERSION | 0xD0C3 | - | TVM Firmware-Versionen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0C3_D |
| TVM_FACTORY_DEFAULTS | 0xD0C4 | - | Löscht alle Einstellungen des Kunden | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0C4_D | - |
| CI_MODUL_STATUS | 0xD0F8 | STAT_CI_ENTRY | Status CI Einschub | 0-n | - | high | unsigned char | TAB_CI_ENTRY | - | - | - | - | 22 | - | - |
| TVM_CI_CRYPTOKEY | 0x4001 | - | TVM_CI_CRYPTOKEY | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4001_D |

### SVK_VERSION_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | SVKVersion_01 |

### TAB_ABILITY_TO_WAKE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | off |
| 1 | on |
| 2 | critical |

### TAB_CI_ENTRY

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein CA-Modul gesteckt |
| 0x02 | CA-Modul gesteckt, Kommunikation nicht in Ordnung |
| 0x03 | CA-Modul gesteckt und betriebsbereit |
| 0xFF | Ungültiger Wert |

### TAB_ENERGIESPARMODE_DOP

| WERT | TEXT |
| --- | --- |
| -1 | Mode ungültig |
| 0 | Energiesparmode nicht aktiv |
| 1 | Produktionsmode |
| 2 | Transportmode |
| 3 | Flashmode |

### TAB_PHANTOM_POWER_SUPPLY_RESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | Phantomspannung nicht aktiviert |
| 0x01 | Phantomspannung aktiv |
| 0x02 | Phantomspannung konnte nicht aktiviert werden |
| 0x03 | Phantomspannung konnte nicht deaktiviert werden |
| 0xFF | Ungültiger Wert |

### TAB_RESET_REASON_DOP

| WERT | TEXT |
| --- | --- |
| 255 | keine Ursache fuer Reset bekannt |

### TAB_SENSOR_TEMP_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Sensor unbekannt |
| 1 | FOT |

### TAB_TESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0xFF | Nicht definiert |

### TAB_TVM_ANTENNEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Alle Antennen |
| 0x01 | Antenne 1 |
| 0x02 | Antenne 2 |
| 0x03 | Antenne 3 |

### TAB_TVM_KARTENTYP

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Kartenleser vorhanden |
| 0x01 | keine Karte gesteckt |
| 0x02 | MediaFlo-Card |
| 0x03 | CMMB-Card |
| 0x04 | ISBD-T-Card (BCAS) |
| 0xFF | Ungültiger Wert |

### TAB_WAKE_UP_STATUS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | nicht initialisiert |
| 1 | Steuergeraet hat geweckt |
| 2 | Steuergeraet wurde geweckt |

### TANTENNE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Antennen |
| 0x00000001 | AM/FM Antenne (FM1/AM Phasendiversity) |
| 0x00000002 | GPS Antenne |
| 0x00000004 | DAB L-BAND Antenne |
| 0x00000008 | DAB BAND III Antenne |
| 0x00000010 | VICS FM Antenne |
| 0x00000020 | VICS Beacon Antenne |
| 0x00000040 | TV1 Antenne |
| 0x00000080 | TV2 Antenne |
| 0x00000100 | TV3 Antenne |
| 0x00000200 | SDARS Antenne |
| 0x00000400 | Bluetooth Antenne |
| 0x00000800 | FM2 Phasendiversity |
| 0x00001000 | WLAN Antenne |
| 0xFFFFFFFF | Nicht definiert |

### TANTENNEFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | AntennaDisconnectedFromAntennaAmplifier |
| 0x03 | Falscher Antennfuß oder Diversity |
| 0x04 | Antenne nicht gesteckt ( nur für BT- Antenne 12-07) |
| 0xFF | Nicht definiert |

### THWEINHEIT

| WERT | TEXT |
| --- | --- |
| 0xFF | Nicht definiert |

### THWLIEFERANT

| WERT | TEXT |
| --- | --- |
| 0x00 | Harman Becker |
| 0x01 | Continental |
| 0x02 | Visteon |
| 0x03 | Alpine |
| 0x04 | Lear |
| 0x05 | Fuba |
| 0x06 | Hirschmann Car Communication |
| 0x07 | Magneti Marelli |
| 0xFF | Nicht definiert |

### THWVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Headunit Stufe 1 (Radio Business) |
| 0x00000001 | Headunit Stufe 2 (Radio Professional) |
| 0x00000002 | Headunit Stufe 3 (Navigation Business) |
| 0x00000004 | Headunit Stufe 4 (Navigation Professional) |
| 0x00000008 | RearSeatEntertainment Mid |
| 0x00000010 | RearSeatEntertainment High |
| 0x00000020 | TV-Modul DVB-T |
| 0x00000040 | TV-Modul DVB-T RSE |
| 0x00000080 | TV-Modul ISDB-T |
| 0x000000A0 | TV-Modul China |
| 0x000000C0 | TV-Modul DVB-T2 |
| 0x00000100 | VideoSwitch Mid |
| 0x00000200 | VideoSwitch High |
| 0x00010000 | mit Funktion IBOC |
| 0x00020000 | mit Funktion DAB |
| 0x00040000 | mit Funktion Video-in |
| 0x00080000 | mit Funktion SDARS |
| 0x00100000 | mit Funktion Telefon |
| 0x00200000 | mit Funktion I-Speech |
| 0x00400000 | (Headunit Stufe 1 (Radio Business)) mit Funktion CD-Laufwerk |
| 0x00800000 | mit Funktion MSA |
| 0x01000000 | als Japan-Variante |
| 0x02000000 | als China/Korea-Variante |
| 0x04000000 | mit Funktion CD-Laufwerk |
| 0x08000000 | mit Funktion Media-USB |
| 0x10000000 | mit Funktion WLAN |
| 0xFFFFFFF1 | --- Bitkombinationen Headunit Stufe 1 (Radio Business) --- |
| 0x00410000 | Headunit Stufe 1 (Radio Business) mit Funktion IBOC und CD-Laufwerk |
| 0x00420000 | Headunit Stufe 1 (Radio Business) mit Funktion DAB und CD-Laufwerk |
| 0x00480000 | Headunit Stufe 1 (Radio Business) mit Funktion SDARS und CD-Laufwerk |
| 0x00490000 | Headunit Stufe 1 (Radio Business) mit Funktion IBOC, SDARS und CD-Laufwerk |
| 0x00C00000 | Headunit Stufe 1 (Radio Business) mit Funktion MSA und CD-Laufwerk |
| 0x00C20000 | Headunit Stufe 1 (Radio Business) mit Funktion MSA, DAB und CD-Laufwerk |
| 0xFFFFFFF2 | --- Bitkombinationen Headunit Stufe 2 (Radio Professional) --- |
| 0x00400001 | Headunit Stufe 2 (Radio Professional) mit Funktion CD-Laufwerk |
| 0x04000001 | Headunit Stufe 2 (Radio Professional) mit Funktion CD-Laufwerk |
| 0x00010001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC |
| 0x00410001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC und CD-Laufwerk |
| 0x04010001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC und CD-Laufwerk |
| 0x00110001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC und Telefon |
| 0x00510001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, Telefon und CD-Laufwerk |
| 0x04110001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, Telefon und CD-Laufwerk |
| 0x00090001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC und SDARS |
| 0x00490001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS und CD-Laufwerk |
| 0x04090001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS und CD-Laufwerk |
| 0x002D0001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In und I-Speech |
| 0x006D0001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In, I-Speech und CD-Laufwerk |
| 0x040D0001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In und CD-Laufwerk |
| 0x042D0001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In, I-Speech und CD-Laufwerk |
| 0x00590001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Telefon und CD-Laufwerk |
| 0x005D0001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In, Telefon und CD-Laufwerk |
| 0x007D0001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In, Telefon, I-Speech und CD-Laufwerk |
| 0x087D0001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In, Telefon, I-Speech, Media-USB und CD-Laufwerk |
| 0x0C3D0001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In, Telefon, I-Speech, Media-USB und CD-Laufwerk |
| 0x00500001 | Headunit Stufe 2 (Radio Professional) mit Funktion Telefon und CD-Laufwerk |
| 0x00240001 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In und I-Speech |
| 0x00640001 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In, I-Speech und CD-Laufwerk |
| 0x00520001 | Headunit Stufe 2 (Radio Professional) mit Funktion DAB Telefon und CD-Laufwerk |
| 0x00360001 | Headunit Stufe 2 (Radio Professional) mit Funktion DAB, Video-In, Telefon und I-Speech |
| 0x00760001 | Headunit Stufe 2 (Radio Professional) mit Funktion DAB, Video-In, Telefon, I-Speech und CD-Laufwerk |
| 0x08760001 | Headunit Stufe 2 (Radio Professional) mit Funktion DAB, Video-In, Telefon, I-Speech, Media-USB und CD-Laufwerk |
| 0x0C360001 | Headunit Stufe 2 (Radio Professional) mit Funktion DAB, Video-In, Telefon, I-Speech, Media-USB und CD-Laufwerk |
| 0x00340001 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In, Telefon und I-Speech |
| 0x00740001 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In, Telefon, I-Speech und CD-Laufwerk |
| 0x08740001 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In, Telefon, I-Speech, Media-USB und CD-Laufwerk |
| 0x0C340001 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In, Telefon, I-Speech, Media-USB und CD-Laufwerk |
| 0x00C00001 | Headunit Stufe 2 (Radio Professional) mit Funktion MSA und CD-Laufwerk |
| 0x00D00001 | Headunit Stufe 2 (Radio Professional) mit Funktion MSA, Telefon und CD-Laufwerk |
| 0x00D20001 | Headunit Stufe 2 (Radio Professional) mit Funktion MSA, DAB, Telefon und CD-Laufwerk |
| 0xFFFFFFF3 | --- Bitkombinationen Headunit Stufe 3 (Navigation Business) --- |
| 0x00400002 | Headunit Stufe 3 (Navigation Business) und CD-Laufwerk |
| 0x04000002 | Headunit Stufe 3 (Navigation Business) und CD-Laufwerk |
| 0x00300002 | Headunit Stufe 3 (Navigation Business) mit Funktion Telefon und I-Speech |
| 0x00700002 | Headunit Stufe 3 (Navigation Business) mit Funktion Telefon, I-Speech und CD-Laufwerk |
| 0x04300002 | Headunit Stufe 3 (Navigation Business) mit Funktion Telefon, I-Speech und CD-Laufwerk |
| 0x0C300002 | Headunit Stufe 3 (Navigation Business) mit Funktion Telefon, I-Speech, Media-USB und CD-Laufwerk |
| 0x00240002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in und I-Speech |
| 0x00640002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in, I-Speech und CD-Laufwerk |
| 0x04240002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in, I-Speech und CD-Laufwerk |
| 0x05240002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in, I-Speech und CD-Laufwerk als Japan-Variante |
| 0x06240002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in, I-Speech und CD-Laufwerk als China/Korea-Variante |
| 0x04040002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in und CD-Laufwerk |
| 0x05040002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in und CD-Laufwerk als Japan-Variante |
| 0x06040002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in und CD-Laufwerk als China/Korea-Variante |
| 0x00340002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in, Telefon und I-Speech |
| 0x00740002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in, Telefon, I-Speech und CD-Laufwerk |
| 0x04340002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in, Telefon, I-Speech und CD-Laufwerk |
| 0x0C340002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in, Telefon, I-Speech, Media-USB und CD-Laufwerk |
| 0x00320002 | Headunit Stufe 3 (Navigation Business) mit Funktion DAB, Telefon und I-Speech |
| 0x00720002 | Headunit Stufe 3 (Navigation Business) mit Funktion DAB, Telefon, I-Speech und CD-Laufwerk |
| 0x04320002 | Headunit Stufe 3 (Navigation Business) mit Funktion DAB, Telefon, I-Speech und CD-Laufwerk |
| 0x0C320002 | Headunit Stufe 3 (Navigation Business) mit Funktion DAB, Telefon, I-Speech, Media-USB und CD-Laufwerk |
| 0x00360002 | Headunit Stufe 3 (Navigation Business) mit Funktion DAB, Video-in, Telefon und I-Speech |
| 0x00760002 | Headunit Stufe 3 (Navigation Business) mit Funktion DAB, Video-in, Telefon, I-Speech und CD-Laufwerk |
| 0x04360002 | Headunit Stufe 3 (Navigation Business) mit Funktion DAB, Video-in, Telefon, I-Speech und CD-Laufwerk |
| 0x0C360002 | Headunit Stufe 3 (Navigation Business) mit Funktion DAB, Video-in, Telefon, I-Speech, Media-USB und CD-Laufwerk |
| 0x00090002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC und SDARS |
| 0x00490002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC, SDARS und CD-Laufwerk |
| 0x04090002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC, SDARS und CD-Laufwerk |
| 0x00290002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC, SDARS und I-Speech |
| 0x00690002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC, SDARS, I-Speech und CD-Laufwerk |
| 0x04290002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC, SDARS, I-Speech und CD-Laufwerk |
| 0x002D0002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC,Video-In, SDARS und I-Speech |
| 0x006D0002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC,Video-In, SDARS, I-Speech und CD-Laufwerk |
| 0x042D0002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC,Video-In, SDARS, I-Speech und CD-Laufwerk |
| 0x043D0002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC,Video-In, Telefon, SDARS, I-Speech und CD-Laufwerk |
| 0x0C3D0002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC,Video-In, Telefon, SDARS, I-Speech, Media-USB und CD-Laufwerk |
| 0xFFFFFFF4 | --- Bitkombinationen Headunit Stufe 4 (Navigation Professional) --- |
| 0x00040004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in |
| 0x00050004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC und Video-in |
| 0x00060004 | Headunit Stufe 4 (Navigation Professional) mit Funktion DAB und Video-in |
| 0x000D0004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC, SDARS und Video-in |
| 0x01040004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in als Japan-Variante |
| 0x02040004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in als China/Korea-Variante |
| 0x00140004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in und Telefon |
| 0x00150004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC und Video-in und Telefon |
| 0x00160004 | Headunit Stufe 4 (Navigation Professional) mit Funktion DAB und Video-in und Telefon |
| 0x001D0004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC, SDARS und Video-in und Telefon |
| 0x01140004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in und Telefon als Japan-Variante |
| 0x02140004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in und Telefon als China/Korea-Variante |
| 0xFFFFFFF5 | --- Bitkombinationen RearSeatEntertainment Mid --- |
| 0x00040008 | RearSeatEntertainment Mid mit Funktion Video-in |
| 0x01000008 | RearSeatEntertainment Mid als Japan-Variante |
| 0x02000008 | RearSeatEntertainment Mid als China/Korea-Variante |
| 0x01040008 | RearSeatEntertainment Mid mit Funktion Video-in als Japan-Variante |
| 0x02040008 | RearSeatEntertainment Mid mit Funktion Video-in als China/Korea-Variante |
| 0xFFFFFFF6 | --- Bitkombinationen RearSeatEntertainment High --- |
| 0x00040010 | RearSeatEntertainment High mit Funktion Video-in |
| 0x01000010 | RearSeatEntertainment High als Japan-Variante |
| 0x02000010 | RearSeatEntertainment High als China/Korea-Variante |
| 0x01040010 | RearSeatEntertainment High mit Funktion Video-in als Japan-Variante |
| 0x02040010 | RearSeatEntertainment High mit Funktion Video-in als China/Korea-Variante |
| 0xFFFFFFFF | Nicht definiert |

### TLEITUNGFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0xFF | Nicht definiert |

### TSELBSTTESTROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Routinen |
| 0xFFFFFFFF | Nicht definiert |

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

### TTESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### TTVREGION

| WERT | TEXT |
| --- | --- |
| 0x01 | Nordamerika |
| 0x02 | Mittelamerika |
| 0x03 | Südamerika |
| 0x04 | Karibik |
| 0x05 | Europa/Mitteleuropa |
| 0x06 | Frankreich |
| 0x07 | Russland |
| 0x08 | Afrika/Nordafrika |
| 0x09 | Naher Osten |
| 0x0A | Asien |
| 0x0B | Pazifik |
| 0x0C | Ozeanien/Australien |
| 0x0D | China |
| 0x0E | Hong Kong |
| 0x0F | Taiwan |
| 0xFF | Nicht definiert |
| 0x10 | Westeuropa |
| 0x11 | Osteuropa |
| 0x12 | Nordosteuropa |
| 0x13 | Türkei |
| 0x14 | Griechenland |
| 0x15 | Israel |
| 0x16 | Mittel-/Südafrika |

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

### THWVAR_DEVICE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Headunit Stufe 1 (Radio Business) |
| 0x00000001 | Headunit Stufe 2 (Radio Professional) |
| 0x00000002 | Headunit Stufe 3 (Navigation Business) |
| 0x00000004 | Headunit Stufe 4 (Navigation Professional) |
| 0x00000008 | RearSeatEntertainment Mid |
| 0x00000010 | RearSeatEntertainment High |
| 0x00000020 | TV-Modul DVB-T |
| 0x00000040 | TV-Modul DVB-T RSE |
| 0x00000080 | TV-Modul ISDB-T |
| 0x000000A0 | TV-Modul China |
| 0x00000100 | VideoSwitch Mid |
| 0x00000200 | VideoSwitch High |
| 0xFFFFFFFF | Nicht definiert |

### THWVAR_FUNCTION

| WERT | TEXT |
| --- | --- |
| 0x00010000 | IBOC |
| 0x00020000 | DAB |
| 0x00040000 | Video-in |
| 0x00080000 | SDARS |
| 0x00100000 | Telefon |
| 0x00200000 | I-Speech |
| 0x00400000 | CD-Laufwerk |
| 0x00800000 | MSA |
| 0x01000000 | als Japan-Variante |
| 0x02000000 | als China/Korea-Variante |
| 0x04000000 | CD-Laufwerk |
| 0x08000000 | Media-USB |
| 0xFFFFFFFF | Nicht definiert |
