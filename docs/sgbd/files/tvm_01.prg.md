# tvm_01.prg

## General

|  |  |
| --- | --- |
| File | tvm_01.prg |
| Type | PRG |
| Jobs | 50 |
| Tables | 58 |
| Origin | BMW EI-41 Groene_Alwin |
| Revision | 10.200 |
| Author | EurospaceGmbH EI-41 GuillermoBreymann, BMW EI-41 DanielZitzmann |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | TV-MODUL |  |  |
| ORIGIN | string | BMW EI-41 Groene_Alwin |  |  |
| REVISION | string | 10.200 |  |  |
| AUTHOR | string | EurospaceGmbH EI-41 GuillermoBreymann, BMW EI-41 DanielZitzmann |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.14 |  |  |
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

### STEUERN_MOST_3DB

3dB Leistungsabsenkung der MOST FOTs

_No arguments._

### STATUS_ABILITY_TO_WAKE

Gibt an ob SG Most Ring wecken darf

_No arguments._

### STATUS_AVERAGE_MESSAGE_RECEPTION_RATE

Liest die mittlere Nachrichtenabnahmerate des SGs während dieses Gerät geflasht wird, also in der ProgramminSession Auslesbar muss der Status jederzeit sein

_No arguments._

### STATUS_FOT_TEMPERATUR

Misst die Temperatur an der FOT

_No arguments._

### STATUS_ROUTING_ENGINE

Inhalt der Routing Engine

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

### STEUERN_ABILITY_TO_WAKE

Gibt an, ob das SG den MOST-Ring wecken darf.

| Name | Type | Description |
| --- | --- | --- |
| ARG_ABILITY_TO_WAKE | int | 0=off 1=on 2=critical |

### STATUS_MOST_3DB

xx Status der 3dB Leistungsabsenkung der MOST FOTs.

_No arguments._

### STEUERN_WATCHDOG_TRIGGER_STOP

Unterbindet das regelmäßige Rücksetzen des Applikations-Watchdogs nach ARG_TIME_WATCHDOG Sekunden. Wenn ARG_TIME_WATCHDOG nicht angegeben wird, wird der Wert 0 benutzt.

| Name | Type | Description |
| --- | --- | --- |
| ARG_TIME_WATCHDOG | unsigned int | Beschreibung: z.B. ARG_TIME_WATCHDOG = 4 bedeutet Abschalten des Watchdog-Triggers nach 4 Sekunden. nur positiven Zahlen und die 0. Skalierung: 1 entspricht 1 Sekunde |

### STATUS_SENSOR_TEMP

Queries the temperature of a heat sensor, set by the job STEUERN_SENSOR_TEMP

| Name | Type | Description |
| --- | --- | --- |
| ARG_TEMP_SENSOR | unsigned char | 0x01 = FOT Temperature, 0x02 = xxx, 0x03 = yyy |

### STEUERN_SENSOR_TEMP

With this function the temperature of a sensor can temporarily be set to arbitrary values for simulation and test purposes.

| Name | Type | Description |
| --- | --- | --- |
| ARG_TEMP_SENSOR | unsigned char | 0x01 = FOT Temperature, 0x02 = xxx, 0x03 = yyy |
| ARG_TEMP_CELSIUS | int | Temperatur am entsprechenden Sensors des SG in Celsius -32766 C bis +32767 C |
| ARG_SIMULATION_PERIOD | int | returns 0 if simulation shall be aborted |

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
| 0x024B00 | Energiesparmode aktiv | 0 |
| 0x02FF4B | DM_TEST_APPL - Dummy Appl DTC Diagnose Master | 0 |
| 0xB7FA80 | Steuergeraet nicht codiert  | 0 |
| 0xB7FA81 | Codierdaten-Transaktion fehlgeschlagen | 0 |
| 0xB7FA82 | Signatur über Nettocodierdaten ungueltig  | 0 |
| 0xB7FA83 | Steuergeraet falsch codiert | 0 |
| 0xB7FA84 | Codierdaten-Transaktion mit ungueltigen Daten | 0 |
| 0xB7FA85 | unused | 1 |
| 0xB7FA86 | Überspannung erkannt | 1 |
| 0xB7FA87 | Interner Steuergerätefehler Hardware | 0 |
| 0xB7FA88 | Interner Steuergerätefehler Software | 0 |
| 0xB7FA90 | FBAS-Ausgang 1: Kurzschluss | 0 |
| 0xB7FA91 | FBAS-Ausgang 1: Unterbrechung oder fehlerhafte Senke | 0 |
| 0xB7FA92 | Kurzschluss Antenne 1 | 0 |
| 0xB7FA93 | Antenne 1 nicht verbunden, hohe Impedanz | 0 |
| 0xB7FA94 | Kurzschluss Antenne 2 | 0 |
| 0xB7FA95 | Antenne 2 nicht verbunden, hohe Impedanz | 0 |
| 0xB7FA96 | Kurzschluss Antenne 3 | 0 |
| 0xB7FA97 | Antenne 3 nicht verbunden, hohe Impedanz | 0 |
| 0xB7FAA0 | FBAS-Ausgang 2: Kurzschluss | 0 |
| 0xB7FAA1 | FBAS-Ausgang 2: Unterbrechung oder fehlerhafte Senke | 0 |
| 0xDBC43F | Empfängerknoten: hat Nachricht nicht abgenommen; Puffer voll | 1 |
| 0xDBC440 | Überwachungsschaltung hat Reset ausgelöst | 0 |
| 0xDBC442 | Sender- Empfängerbaustein (FOT): Temperatur übersteigt kritische Schwelle | 1 |
| 0xDBC445 | EHC hat bei fatalem Fehler vom INIC einen Reset ausgelöst | 0 |
| 0xDBCBFF | DM_TEST_COM  - Dummy Network DTC Diagnose Master | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 3 |
| F_HLZ_VIEW | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1709 | MOST Message Header | TEXT | - | 6 | - | 1 | 1 | 0 |
| 0x170B | NPR: Node Position Register | TEXT | - | 1 | - | 1 | 1 | 0 |
| 0x170A | FOTTemp in °C | °C | - | signed char | - | 1 | 1 | 0 |
| 0x172D | MOSTMessOpType | TEXT | - | 9 | - | 1 | 1 | 0 |
| 0x1707 | DiagAdr | TEXT | - | 1 | - | 1 | 1 | 0 |
| 0x1708 | Klemmenstatus | TEXT | - | 3 | - | 1 | 1 | 0 |
| 0x170C | Ubat : Versorgungsspannung des SG in mV | mV | - | unsigned int | - | 1 | 1 | 0 |
| 0x170D | MemMirror | TEXT | - | 3 | - | 1 | 1 | 0 |
| 0x170E | ProgramCounter | TEXT | - | 3 | - | 1 | 1 | 0 |
| 0x170F | CallStack | TEXT | - | 3 | - | 1 | 1 | 0 |
| 0x171E | MOSTMessHeadErrCodeInfo | TEXT | - | 8 | - | 1 | 1 | 0 |
| 0x172E | HighSyncConnectionTable | TEXT | - | 20 | - | 1 | 1 | 0 |
| 0x172F | Notification Table | TEXT | - | 45 | - | 1 | 1 | 0 |
| 0xFD00 | MPEG | TEXT | - | 1 | - | 1 | 1 | 0 |
| 0x1721 | Subtabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x0010 | PreviousTaskId | 0-n | - | 0x0F | TTaskIDs | - | - | - |
| 0x0011 | CurrentTaskId | 0-n | - | 0xF0 | TTaskIDs | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x4B0001 | COM Flash Error | 0 |
| 0x4B0002 | COM EEPROM Error | 0 |
| 0x4B0006 | Toshiba HW Error - MPEG APPL FLASH | 0 |
| 0x4B0007 | Toshiba HW Error - MPEG APPL FPGA | 0 |
| 0x4B0008 | Toshiba HW Error - MPEG APPL I2C | 0 |
| 0x4B000A | Toshiba HW Error - MPEG APPL TUNERS | 0 |
| 0x4B000B | Toshiba HW Error - MPEG APPL DIBCOM | 0 |
| 0x4B000C | Toshiba HW Error - MPEG APPL TDA9899 | 0 |
| 0x4B000D | Toshiba HW Error - MPEG APPL SAA7113 | 0 |
| 0x4B000E | Toshiba HW Error - MPEG APPL TOSHIBA | 0 |
| 0x4B000F | Toshiba SW Error - MPEG APPL FRONTEND | 0 |
| 0x4B0010 | Toshiba SW Error - MPEG APPL BWL | 0 |
| 0x4B0011 | Toshiba SW Error - MPEG APPL TC90400 | 0 |
| 0x4B0013 | Toshiba SW Error - MPEG APPL BML | 0 |
| 0x4B0014 | Toshiba SW Error MPEG APPL Teletext | 0 |
| 0x4B0015 | Toshiba SW Error - MPEG BOOT, Component TV module incompatible | 0 |
| 0x4B0016 | TVM Fan Error | 0 |
| 0x4B0017 | Toshiba HW Error - MPEG APPL, BCAS Hardware | 1 |
| 0x4B0018 | Toshiba SW Error - MPEG APPL, BCAS Hardware | 1 |
| 0x4B0019 | COM UART Error - NEC/MPEG UART Communication | 1 |
| 0x4B0047 | DM_Queue_DELETED | 1 |
| 0x4B0048 | DTC zum Ausfall Botschaft | 1 |
| 0x4B0100 | COM_FAN | 0 |
| 0x4B0101 | COM_UART | 0 |
| 0x4B0102 | COM_I2C | 0 |
| 0x4B0103 | COM_TEMP_SENSOR | 0 |
| 0x4B0104 | COM_FLASH_INT_INTEGRITY | 0 |
| 0x4B0105 | COM_FLASH_EXT_INTEGRITY | 0 |
| 0x4B0106 | COM_FLASH_INT_COMPARE | 0 |
| 0x4B0107 | COM_FLASH_EXT_COMPARE | 0 |
| 0x4B0108 | TASK_DELAYED | 0 |
| 0x4B0109 | MOST_INIC_NO_COMMUNICATION | 0 |
| 0x4B0110 | EVENT_MPEG_WRONGAPPLICATION | 0 |
| 0x4B0111 | EVENT_MPEG_STARTUP_TIMEOUT_DELAYED | 0 |
| 0x4B0112 | EVENT_MPEG_SOFTWARE_WATCHDOG | 0 |
| 0x4B0113 | EVENT_MPEG_APPLICATION_NO_REACTION | 0 |
| 0x930000 | Timing-Master: kann Kanal nicht reservieren; Resource Allocation Table (RAT) voll | 1 |
| 0x930001 | Versorgungsspannung: Mindestwert unterschritten | 1 |
| 0x930002 | Sender- Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 1 | 0 |
| 0x930003 | Sender- Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 2 | 0 |
| 0x930004 | Diagnose-Master-Client: Datenzwischenablage im Active Response Handler übergelaufen | 1 |
| 0x930005 | Diagnose-Master-Client: Telegramm Systemzeit nicht fristgerecht erkannt | 1 |
| 0x930006 | MOST: Licht geht unerwartet aus | 0 |
| 0x930007 | MOST: Synchronisation (PLL) arbeitet nicht korrekt | 0 |
| 0x930008 | Systemzustand Ok nicht fristgerecht erkannt | 0 |
| 0x930009 | Funktionsblock (Methode mit Handle): Lebenszeichen kommt nicht fristgerecht | 1 |
| 0x93000A | Funktionsblock (Methode): Lebenszeichen kommt nicht fristgerecht | 1 |
| 0x930011 | MOST: Ringbruch | 1 |
| 0x930030 | Timing-Master: beschäftigt, kann Audiokanal nicht reservieren;(allokieren) | 1 |
| 0x930031 | Timing-Master: beschäftigt, kann Kanal nicht freigeben (deallokieren) | 1 |
| 0x930032 | Timing-Master: kann Kanal nicht freigeben; falsches Label | 1 |
| 0x930033 | Empfängerknoten: hat Nachricht nicht abgenommen; Empfänger existiert nicht | 1 |
| 0x930034 | Empfängerknoten: hat Nachricht nicht abgenommen fehlerhafte Check- Summe am Empfänger erkannt | 1 |
| 0x930035 | Übertragungsfehler im Hardware Abstraction Layer | 0 |
| 0x93003A | Empfängerknoten: Kommandointerpreter kennt Nachricht nicht | 0 |
| 0x93003B | Empfängerknoten: mindestens eine Nachricht (Group/Broadcast) nicht abgenommen | 0 |
| 0x93003C | MOST: Ring unerlaubt geweckt | 0 |
| 0x93003D | Senderknoten:adressierter Funktionsblock existiert nicht | 0 |
| 0x93003E | Senderknoten: falsche Parameter in der Nachricht | 0 |
| 0x93003F | Senderknoten: Fehler in adressierter Funktion | 0 |
| 0x930040 | Senderknoten: Fehler in Segmentierung | 0 |
| 0x930041 | Funktionsblock: sendet keine Werte trotz Notifizierung | 1 |
| 0x930042 | Funktionsblock: Notifizierung abgelehnt; Spalte der Notifizierungstabelle voll | 1 |
| 0x930043 | Funktionsblock: Notifizierung abgelehnt; keine freien Zeilen in Notifizierungstabelle | 1 |
| 0x930044 | Funktionsblock: Notifizierung abgelehnt; gewünschte Funktion existiert nicht | 1 |
| 0x930045 | Funktionsblock: Notifizierung abgelehnt; Grund unbekannt | 1 |
| 0x930046 | Funktionsblock: Notifizierung abgelehnt; Funktionswert momentan nicht vorhanden | 1 |
| 0x930047 | DM_Queue_DELETED | 1 |
| 0x930048 | DTC zum Ausfall Botschaft | 1 |
| 0xC90401 | DM_Queue_FULL | 1 |
| 0xC90402 | DM_Queue_DELETED | 1 |
| 0xE89400 | VSM_EVENT_VEHICLESTATE | 1 |
| 0xDBC440 | Überwachungsschaltung hat Reset ausgelöst | 0 |
| 0xDBC445 | EHC hat bei fatalem Fehler vom INIC einen Reset ausgelöst | 0 |
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
| 0x1709 | MOST Message Header | TEXT | - | 6 | - | 1 | 1 | 0 |
| 0x170B | NPR: Node Position Register | TEXT | - | 1 | - | 1 | 1 | 0 |
| 0x170A | FOTTemp in °C | °C | - | signed char | - | 1 | 1 | 0 |
| 0x172D | MOSTMessOpType | TEXT | - | 9 | - | 1 | 1 | 0 |
| 0x1707 | DiagAdr | TEXT | - | 1 | - | 1 | 1 | 0 |
| 0x1708 | Klemmenstatus | TEXT | - | 3 | - | 1 | 1 | 0 |
| 0x170C | Ubat : Versorgungsspannung des SG in mV | mV | - | unsigned int | - | 1 | 1 | 0 |
| 0x170D | MemMirror | TEXT | - | 3 | - | 1 | 1 | 0 |
| 0x170E | ProgramCounter | TEXT | - | 3 | - | 1 | 1 | 0 |
| 0x170F | CallStack | TEXT | - | 3 | - | 1 | 1 | 0 |
| 0x171E | MOSTMessHeadErrCodeInfo | TEXT | - | 8 | - | 1 | 1 | 0 |
| 0x172E | HighSyncConnectionTable | TEXT | - | 20 | - | 1 | 1 | 0 |
| 0x172F | Notification Table | TEXT | - | 45 | - | 1 | 1 | 0 |
| 0xFD00 | MPEG | TEXT | - | 1 | - | 1 | 1 | 0 |
| 0xFD01 | MNS_ERRORCODE | HEX | - | unsigned int | - | 1 | 1 | 0 |
| 0x1721 | Subtabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x0010 | PreviousTaskId | 0-n | - | 0x0F | TTaskIDs | - | - | - |
| 0x0011 | CurrentTaskId | 0-n | - | 0xF0 | TTaskIDs | - | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LUEFTER | 0xA03C | - | Steuerung und Status des Lüfters. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03C | RES_0xA03C |
| SELBSTTEST | 0xA022 | - | Selbsttests des Steuergerätes Sie sollen einen evtl. notwendigen Tausch von Software/Hardware erkennen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA022 | RES_0xA022 |
| SIGNALAUSGABE | 0xA01A | - | Steuert die Videosignalausgabe eines Steuergerätes (Videoquelle). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01A | - |
| STATUS_ANALOG_TEMPERATUR | 0xD026 | - | Abfrage der Temperaturen des Steuergerätes. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD026 |
| STATUS_HW_VARIANTE | 0xD04E | - | Liefert die HW-Variante der Headunit bzw. von TV/Video-Steuergeräten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD04E |
| STEUERN_ANTENNEN_SIGNAL_DIGITAL | 0xA043 | - | Liest die aktuelle Feldstärke auf der angegebenen Antenne aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA043 | RES_0xA043 |
| STEUERN_ANTENNE_FELDSTAERKE | 0xA042 | - | Liest die aktuelle Feldstärke auf der angegebenen Antenne aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA042 | RES_0xA042 |
| TEST_ANTENNE | 0xA018 | - | Startet und bewertet die Prüfung für eine oder mehrere Antennen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA018 | RES_0xA018 |
| TEST_VIDEOAUSGANG | 0xA01B | - | Steuert und bewertet den Test der Videoeingänge. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01B | RES_0xA01B |
| TVSETCHANNEL | 0xD050 | - | Einstellung und Auslesen des TV-Kanals. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD050 | RES_0xD050 |
| TVSETREGION | 0xD04F | - | Steuert und liest die eingestellte Ländernorm bzw. Region aus. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD04F | RES_0xD04F |
| STATUS_RESET_REASON | 0x1721 | - | Reset Reset is used to output current and previous  active task-IDs during a reset. | bit | - | - | BITFIELD | RES_0x1721 | - | - | - | - | 22 | - | - |

### TSELBSTTESTROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | alle Routinen |
| 0x00000001 | Internal Supply Voltages |
| 0x00000002 | FOT Temperature |
| 0x00000004 | Board Temperature |
| 0x00000008 | NEC-Flash Checksum |
| 0x00000010 | EEPROM Checksum |
| 0x00000020 | TOSHIBA-Flash Checksum |
| 0x00000040 | TOSHIBA-RAM Integrity |
| 0x00000080 | UART-Interface Communication: NEC / TOSHIBA |
| 0x00000100 | Host-interface Communication: FPGA / TOSHIBA |
| 0x00000200 | SPI-interface Communication: FPGA / NEC |
| 0x00000400 | not used |
| 0x00000800 | Internal PLL lock of Tuner-IC´s |
| 0x00001000 | Internal PLL lock of FPGA |
| 0x00002000 | I2C Device Status |
| 0x00004000 | Antenna Input |
| 0x00008000 | Video Output |
| 0x00010000 | Fan Rotation |
| 0x00020000 | Verify the application status |
| 0xFFFFFFFF | Nicht definiert |

### TFBLOCKIDTEXTE

| WERT | TEXT |
| --- | --- |
| 0x02 | NetworkMaster=0x02 |
| 0x03 | ConnectionMaster=0x03 |
| 0x04 | PowerMaster=0x04 |
| 0x05 | Vehicle=0x05 |
| 0x06 | Diagnose=0x06 |
| 0x07 | VideoSwitch=0x07 |
| 0x10 | ManMachineInterface=0x10 |
| 0x11 | Sprachverarbeitungssystem=0x11 |
| 0x15 | ControlElements=0x15 |
| 0x16 | Security=0x16 |
| 0x20 | AudioMaster=0x20 |
| 0x22 | AudioAmplifier=0x22 |
| 0x23 | HeadPhoneAmplifier=0x23 |
| 0x24 | AuxilliaryInput=0x24 |
| 0x31 | AudioDiscPlayer=0x31 |
| 0x32 | MultiMediaChanger=0x32 |
| 0x40 | AM/FM Tuner=0x40 |
| 0x41 | TMC Tuner=0x41 |
| 0x42 | TVTuner=0x42 |
| 0x43 | ExternSource=0x43 |
| 0x44 | SDARS=0x44 |
| 0x50 | TelefonFix=0x50 |
| 0x51 | PhoneBook=0x51 |
| 0x52 | Navigationssystem=0x52 |
| 0x6F | Monitor=0x6F |
| 0x71 | Climate=0x71 |
| 0x80 | MMI_Terminal=0x80 |
| 0x81 | KOMBI_Terminal=0x81 |
| 0x90 | Telematik=0x90 |
| 0xAB | EDIABAS4MOST=0xAB |
| 0xC9 | Service=0xC9 |
| 0xCA | KombiMiscFkts=0xCA |
| 0xCB | Bordcomputer=0xCB |
| 0xCC | ADASInterface=0xCC |
| 0xE0 | KombiInterface=0xE0 |
| 0xE1 | HUDInterface=0xE1 |
| 0xFD | Sahara=0xFD |

### TMOSTLIGHT

| WERT | TEXT |
| --- | --- |
| 0 | Lichtleistung abgesenkt |
| 1 | Volle Lichtleistung |

### TWAKEUPSTATUS

| WERT | TEXT | TEXT2 |
| --- | --- | --- |
| 0 | not initializied | off |
| 1 | SG will be woken up | on |
| 2 | SG are waked up | critical |

### RES_0XA01B

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Gibt wieder, als Integer, welche Ausgänge getestet wurden. 0 bedeutet alle Ausgänge wurden getestet. |
| STAT_TEST_VIDEOAUSGANG | - | - | + | 0-n | - | unsigned char | - | TTestStatus | - | - | - | Gibt den Status der getesteten Ausgänge wieder. Die offene Leitung zu erkennen ist optional, zwingend ist die Erkennung von Kurzschlüssen. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_AUSGAENGE_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 2 oder 3 meldet. Gibt wieder, auf wie vielen Ausgängen Fehler vorlagen. |
| STAT_FEHLER_1_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_1_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_2_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_2_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_3_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_3_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_4_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_4_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_5_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_5_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_6_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_6_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_7_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_7_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_8_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_8_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_9_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_9_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_10_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_10_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_11_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_11_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_12_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_12_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_13_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_13_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_14_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_14_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_15_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_15_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_16_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Fehler) meldet oder der Ausgang nicht existiert. Gibt wieder, als Integer, auf welchem Ausgang der X. Fehler gefunden wurde. |
| STAT_FEHLER_16_FEHLERART_AUSGANG | - | - | + | 0-n | - | unsigned char | - | TLeitungFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOAUSGANG nicht den Wert 3 (Feh-ler) meldet oder der Ausgang nicht existiert Gibt wieder, als Integer, welcher Art der X. Fehler war. |

### ARG_0XA01B

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_AUSGANG | + | - | - | - | unsigned int | - | - | - | - | - | - | - | Wählt den zu testenden Ausgang. Tabelle TVideoAusgang |

### TLEITUNGFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0xFF | Nicht definiert |

### RES_0XA042

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FELDSTAERKE_ANTENNE_WERT | + | - | - | dBµV | - | int | - | - | - | - | - | Antennen-Feldstärke. Bereich: 0..99  Dies ist die Feldstärke der Antenne in dBµV. Dabei bedeutet eine Rückgabe von 0 immer eine Feldstärke außerhalb des zulässigen Bereichs. |

### ARG_0XA042

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ANTENNE | + | - | - | - | unsigned int | - | - | - | - | - | 0 | 5 | Definiert die Antenne, deren Feldstärke wiedergegeben werden soll. |

### RES_0XD050

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CHANNEL_WERT | - | - | unsigned int | - | - | - | - | - | Eingestellter TV-Kanal. Mögliche Werte: 1 bis 99 |
| STAT_BOUQET_WERT | - | - | unsigned int | - | - | - | - | - | Einstellung des BOUQETS (nur für digitale Kanäle). |

### ARG_0XD050

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CHANNEL | - | - | unsigned int | - | - | - | - | - | 1 | 99 | Einstellung des TV-Kanals. Mögliche Werte: 1 bis 99 Dabei sind folgende Kanäle sowohl für ISDB-T als auch für analog auf der gleichen Frequenz (Analog/Digital): 21/13, 24/17, 27/21, 30/25, 33/29, 36/33, 39/37, 42/41, 45/45, 48/49, 51/53, 54/57, 57/61 |
| ARG_BOUQET | - | - | unsigned int | - | - | - | - | - | 0 | 64 | Einstellung des BOUQETS (nur für digitale Kanäle) |

### RES_0XD04E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_VARIANTE | 0-n | - | unsigned long | - | THwVariante | - | - | - | liefert nach Tabelle THwVariante(Bitkombination) eindeutig, welche Variante vorliegt.  Z.B. liefert ein CIC HIGH mit IBOC den Wert 0x10004 (=0x4+0x10000) |
| STAT_HW_VARIANTE_LIEFERANT | 0-n | - | unsigned char | - | THwLieferant | - | - | - | gibt den Lieferanten nach Tabelle THwLieferant aus. |
| STAT_HW_EINHEIT | 0-n | - | unsigned long | - | THwEinheit | - | - | - | liefert eine eindeutige ID der Hardwarevariante. Die Tabelle THwEinheit ist von der Entwicklung in der SGBD zu pflegen. 0xFFFFFFFF bedeutet  nicht definiert |

### THWVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00000020 | TV-Modul DVB-T |
| 0x00000040 | TV-Modul DVB-T RSE |
| 0x00000080 | TV-Modul ISDB-T |
| 0x000000A0 | TV-Modul China |
| 0xFFFFFFFF | Nicht definiert |

### THWLIEFERANT

| WERT | TEXT |
| --- | --- |
| 0x05 | Fuba |
| 0x06 | Hirschmann Car Communication |
| 0xFF | Nicht definiert |

### THWEINHEIT

| WERT | TEXT |
| --- | --- |
| 0x01050000 | TVM DVB-T - HW Version 005.000.000 |
| 0x01050001 | TVM DVB-T - HW Version 005.000.001 |
| 0x01050002 | TVM DVB-T - HW Version 005.000.002 |
| 0x01050003 | TVM DVB-T - HW Version 005.000.003 |
| 0x01050004 | TVM DVB-T - HW Version 005.000.004 |
| 0x01050005 | TVM DVB-T - HW Version 005.000.005 |
| 0x01050006 | TVM DVB-T - HW Version 005.000.006 |
| 0x01050007 | TVM DVB-T - HW Version 005.000.007 |
| 0x01050008 | TVM DVB-T - HW Version 005.000.008 |
| 0x01050009 | TVM DVB-T - HW Version 005.000.009 |
| 0x01050100 | TVM DVB-T - HW Version 005.001.000 |
| 0x01050101 | TVM DVB-T - HW Version 005.001.001 |
| 0x01050102 | TVM DVB-T - HW Version 005.001.002 |
| 0x01050103 | TVM DVB-T - HW Version 005.001.003 |
| 0x01050104 | TVM DVB-T - HW Version 005.001.004 |
| 0x01050105 | TVM DVB-T - HW Version 005.001.005 |
| 0x01050106 | TVM DVB-T - HW Version 005.001.006 |
| 0x01050107 | TVM DVB-T - HW Version 005.001.007 |
| 0x01050108 | TVM DVB-T - HW Version 005.001.008 |
| 0x01050109 | TVM DVB-T - HW Version 005.001.009 |
| 0x01050200 | TVM DVB-T - HW Version 005.002.000 |
| 0x01050201 | TVM DVB-T - HW Version 005.002.001 |
| 0x01050202 | TVM DVB-T - HW Version 005.002.002 |
| 0x01050203 | TVM DVB-T - HW Version 005.002.003 |
| 0x01050204 | TVM DVB-T - HW Version 005.002.004 |
| 0x01050205 | TVM DVB-T - HW Version 005.002.005 |
| 0x01050206 | TVM DVB-T - HW Version 005.002.006 |
| 0x01050207 | TVM DVB-T - HW Version 005.002.007 |
| 0x01050208 | TVM DVB-T - HW Version 005.002.008 |
| 0x01050209 | TVM DVB-T - HW Version 005.002.009 |
| 0x01050300 | TVM DVB-T - HW Version 005.003.000 |
| 0x01050301 | TVM DVB-T - HW Version 005.003.001 |
| 0x01050302 | TVM DVB-T - HW Version 005.003.002 |
| 0x01050303 | TVM DVB-T - HW Version 005.003.003 |
| 0x01050304 | TVM DVB-T - HW Version 005.003.004 |
| 0x01050305 | TVM DVB-T - HW Version 005.003.005 |
| 0x01050306 | TVM DVB-T - HW Version 005.003.006 |
| 0x01050307 | TVM DVB-T - HW Version 005.003.007 |
| 0x01050308 | TVM DVB-T - HW Version 005.003.008 |
| 0x01050309 | TVM DVB-T - HW Version 005.003.009 |
| 0x01050400 | TVM DVB-T - HW Version 005.004.000 |
| 0x01050401 | TVM DVB-T - HW Version 005.004.001 |
| 0x01050402 | TVM DVB-T - HW Version 005.004.002 |
| 0x01050403 | TVM DVB-T - HW Version 005.004.003 |
| 0x01050404 | TVM DVB-T - HW Version 005.004.004 |
| 0x01050405 | TVM DVB-T - HW Version 005.004.005 |
| 0x01050406 | TVM DVB-T - HW Version 005.004.006 |
| 0x01050407 | TVM DVB-T - HW Version 005.004.007 |
| 0x01050408 | TVM DVB-T - HW Version 005.004.008 |
| 0x01050409 | TVM DVB-T - HW Version 005.004.009 |
| 0x01050500 | TVM DVB-T - HW Version 005.005.000 |
| 0x01050501 | TVM DVB-T - HW Version 005.005.001 |
| 0x01050502 | TVM DVB-T - HW Version 005.005.002 |
| 0x01050503 | TVM DVB-T - HW Version 005.005.003 |
| 0x01050504 | TVM DVB-T - HW Version 005.005.004 |
| 0x01050505 | TVM DVB-T - HW Version 005.005.005 |
| 0x01050506 | TVM DVB-T - HW Version 005.005.006 |
| 0x01050507 | TVM DVB-T - HW Version 005.005.007 |
| 0x01050508 | TVM DVB-T - HW Version 005.005.008 |
| 0x01050509 | TVM DVB-T - HW Version 005.005.009 |
| 0x01050600 | TVM DVB-T - HW Version 005.006.000 |
| 0x01050601 | TVM DVB-T - HW Version 005.006.001 |
| 0x01050602 | TVM DVB-T - HW Version 005.006.002 |
| 0x01050603 | TVM DVB-T - HW Version 005.006.003 |
| 0x01050604 | TVM DVB-T - HW Version 005.006.004 |
| 0x01050605 | TVM DVB-T - HW Version 005.006.005 |
| 0x01050606 | TVM DVB-T - HW Version 005.006.006 |
| 0x01050607 | TVM DVB-T - HW Version 005.006.007 |
| 0x01050608 | TVM DVB-T - HW Version 005.006.008 |
| 0x01050609 | TVM DVB-T - HW Version 005.006.009 |
| 0x01050700 | TVM DVB-T - HW Version 005.007.000 |
| 0x01050701 | TVM DVB-T - HW Version 005.007.001 |
| 0x01050702 | TVM DVB-T - HW Version 005.007.002 |
| 0x01050703 | TVM DVB-T - HW Version 005.007.003 |
| 0x01050704 | TVM DVB-T - HW Version 005.007.004 |
| 0x01050705 | TVM DVB-T - HW Version 005.007.005 |
| 0x01050706 | TVM DVB-T - HW Version 005.007.006 |
| 0x01050707 | TVM DVB-T - HW Version 005.007.007 |
| 0x01050708 | TVM DVB-T - HW Version 005.007.008 |
| 0x01050709 | TVM DVB-T - HW Version 005.007.009 |
| 0x01050800 | TVM DVB-T - HW Version 005.008.000 |
| 0x01050801 | TVM DVB-T - HW Version 005.008.001 |
| 0x01050802 | TVM DVB-T - HW Version 005.008.002 |
| 0x01050803 | TVM DVB-T - HW Version 005.008.003 |
| 0x01050804 | TVM DVB-T - HW Version 005.008.004 |
| 0x01050805 | TVM DVB-T - HW Version 005.008.005 |
| 0x01050806 | TVM DVB-T - HW Version 005.008.006 |
| 0x01050807 | TVM DVB-T - HW Version 005.008.007 |
| 0x01050808 | TVM DVB-T - HW Version 005.008.008 |
| 0x01050809 | TVM DVB-T - HW Version 005.008.009 |
| 0x01050900 | TVM DVB-T - HW Version 005.009.000 |
| 0x01050901 | TVM DVB-T - HW Version 005.009.001 |
| 0x01050902 | TVM DVB-T - HW Version 005.009.002 |
| 0x01050903 | TVM DVB-T - HW Version 005.009.003 |
| 0x01050904 | TVM DVB-T - HW Version 005.009.004 |
| 0x01050905 | TVM DVB-T - HW Version 005.009.005 |
| 0x01050906 | TVM DVB-T - HW Version 005.009.006 |
| 0x01050907 | TVM DVB-T - HW Version 005.009.007 |
| 0x01050908 | TVM DVB-T - HW Version 005.009.008 |
| 0x01050909 | TVM DVB-T - HW Version 005.009.009 |
| 0x01060000 | TVM DVB-T - HW Version 006.000.000 |
| 0x01060001 | TVM DVB-T - HW Version 006.000.001 |
| 0x01060002 | TVM DVB-T - HW Version 006.000.002 |
| 0x01060003 | TVM DVB-T - HW Version 006.000.003 |
| 0x01060004 | TVM DVB-T - HW Version 006.000.004 |
| 0x01060005 | TVM DVB-T - HW Version 006.000.005 |
| 0x01060006 | TVM DVB-T - HW Version 006.000.006 |
| 0x01060007 | TVM DVB-T - HW Version 006.000.007 |
| 0x01060008 | TVM DVB-T - HW Version 006.000.008 |
| 0x01060009 | TVM DVB-T - HW Version 006.000.009 |
| 0x01060100 | TVM DVB-T - HW Version 006.001.000 |
| 0x01060101 | TVM DVB-T - HW Version 006.001.001 |
| 0x01060102 | TVM DVB-T - HW Version 006.001.002 |
| 0x01060103 | TVM DVB-T - HW Version 006.001.003 |
| 0x01060104 | TVM DVB-T - HW Version 006.001.004 |
| 0x01060105 | TVM DVB-T - HW Version 006.001.005 |
| 0x01060106 | TVM DVB-T - HW Version 006.001.006 |
| 0x01060107 | TVM DVB-T - HW Version 006.001.007 |
| 0x01060108 | TVM DVB-T - HW Version 006.001.008 |
| 0x01060109 | TVM DVB-T - HW Version 006.001.009 |
| 0x01060200 | TVM DVB-T - HW Version 006.002.000 |
| 0x01060201 | TVM DVB-T - HW Version 006.002.001 |
| 0x01060202 | TVM DVB-T - HW Version 006.002.002 |
| 0x01060203 | TVM DVB-T - HW Version 006.002.003 |
| 0x01060204 | TVM DVB-T - HW Version 006.002.004 |
| 0x01060205 | TVM DVB-T - HW Version 006.002.005 |
| 0x01060206 | TVM DVB-T - HW Version 006.002.006 |
| 0x01060207 | TVM DVB-T - HW Version 006.002.007 |
| 0x01060208 | TVM DVB-T - HW Version 006.002.008 |
| 0x01060209 | TVM DVB-T - HW Version 006.002.009 |
| 0x01060300 | TVM DVB-T - HW Version 006.003.000 |
| 0x01060301 | TVM DVB-T - HW Version 006.003.001 |
| 0x01060302 | TVM DVB-T - HW Version 006.003.002 |
| 0x01060303 | TVM DVB-T - HW Version 006.003.003 |
| 0x01060304 | TVM DVB-T - HW Version 006.003.004 |
| 0x01060305 | TVM DVB-T - HW Version 006.003.005 |
| 0x01060306 | TVM DVB-T - HW Version 006.003.006 |
| 0x01060307 | TVM DVB-T - HW Version 006.003.007 |
| 0x01060308 | TVM DVB-T - HW Version 006.003.008 |
| 0x01060309 | TVM DVB-T - HW Version 006.003.009 |
| 0x01060400 | TVM DVB-T - HW Version 006.004.000 |
| 0x01060401 | TVM DVB-T - HW Version 006.004.001 |
| 0x01060402 | TVM DVB-T - HW Version 006.004.002 |
| 0x01060403 | TVM DVB-T - HW Version 006.004.003 |
| 0x01060404 | TVM DVB-T - HW Version 006.004.004 |
| 0x01060405 | TVM DVB-T - HW Version 006.004.005 |
| 0x01060406 | TVM DVB-T - HW Version 006.004.006 |
| 0x01060407 | TVM DVB-T - HW Version 006.004.007 |
| 0x01060408 | TVM DVB-T - HW Version 006.004.008 |
| 0x01060409 | TVM DVB-T - HW Version 006.004.009 |
| 0x01060500 | TVM DVB-T - HW Version 006.005.000 |
| 0x01060501 | TVM DVB-T - HW Version 006.005.001 |
| 0x01060502 | TVM DVB-T - HW Version 006.005.002 |
| 0x01060503 | TVM DVB-T - HW Version 006.005.003 |
| 0x01060504 | TVM DVB-T - HW Version 006.005.004 |
| 0x01060505 | TVM DVB-T - HW Version 006.005.005 |
| 0x01060506 | TVM DVB-T - HW Version 006.005.006 |
| 0x01060507 | TVM DVB-T - HW Version 006.005.007 |
| 0x01060508 | TVM DVB-T - HW Version 006.005.008 |
| 0x01060509 | TVM DVB-T - HW Version 006.005.009 |
| 0x01060600 | TVM DVB-T - HW Version 006.006.000 |
| 0x01060601 | TVM DVB-T - HW Version 006.006.001 |
| 0x01060602 | TVM DVB-T - HW Version 006.006.002 |
| 0x01060603 | TVM DVB-T - HW Version 006.006.003 |
| 0x01060604 | TVM DVB-T - HW Version 006.006.004 |
| 0x01060605 | TVM DVB-T - HW Version 006.006.005 |
| 0x01060606 | TVM DVB-T - HW Version 006.006.006 |
| 0x01060607 | TVM DVB-T - HW Version 006.006.007 |
| 0x01060608 | TVM DVB-T - HW Version 006.006.008 |
| 0x01060609 | TVM DVB-T - HW Version 006.006.009 |
| 0x01060700 | TVM DVB-T - HW Version 006.007.000 |
| 0x01060701 | TVM DVB-T - HW Version 006.007.001 |
| 0x01060702 | TVM DVB-T - HW Version 006.007.002 |
| 0x01060703 | TVM DVB-T - HW Version 006.007.003 |
| 0x01060704 | TVM DVB-T - HW Version 006.007.004 |
| 0x01060705 | TVM DVB-T - HW Version 006.007.005 |
| 0x01060706 | TVM DVB-T - HW Version 006.007.006 |
| 0x01060707 | TVM DVB-T - HW Version 006.007.007 |
| 0x01060708 | TVM DVB-T - HW Version 006.007.008 |
| 0x01060709 | TVM DVB-T - HW Version 006.007.009 |
| 0x01060800 | TVM DVB-T - HW Version 006.008.000 |
| 0x01060801 | TVM DVB-T - HW Version 006.008.001 |
| 0x01060802 | TVM DVB-T - HW Version 006.008.002 |
| 0x01060803 | TVM DVB-T - HW Version 006.008.003 |
| 0x01060804 | TVM DVB-T - HW Version 006.008.004 |
| 0x01060805 | TVM DVB-T - HW Version 006.008.005 |
| 0x01060806 | TVM DVB-T - HW Version 006.008.006 |
| 0x01060807 | TVM DVB-T - HW Version 006.008.007 |
| 0x01060808 | TVM DVB-T - HW Version 006.008.008 |
| 0x01060809 | TVM DVB-T - HW Version 006.008.009 |
| 0x01060900 | TVM DVB-T - HW Version 006.009.000 |
| 0x01060901 | TVM DVB-T - HW Version 006.009.001 |
| 0x01060902 | TVM DVB-T - HW Version 006.009.002 |
| 0x01060903 | TVM DVB-T - HW Version 006.009.003 |
| 0x01060904 | TVM DVB-T - HW Version 006.009.004 |
| 0x01060905 | TVM DVB-T - HW Version 006.009.005 |
| 0x01060906 | TVM DVB-T - HW Version 006.009.006 |
| 0x01060907 | TVM DVB-T - HW Version 006.009.007 |
| 0x01060908 | TVM DVB-T - HW Version 006.009.008 |
| 0x01060909 | TVM DVB-T - HW Version 006.009.009 |
| 0x01070000 | TVM DVB-T - HW Version 007.000.000 |
| 0x01070001 | TVM DVB-T - HW Version 007.000.001 |
| 0x01070002 | TVM DVB-T - HW Version 007.000.002 |
| 0x01070003 | TVM DVB-T - HW Version 007.000.003 |
| 0x01070004 | TVM DVB-T - HW Version 007.000.004 |
| 0x01070005 | TVM DVB-T - HW Version 007.000.005 |
| 0x01070006 | TVM DVB-T - HW Version 007.000.006 |
| 0x01070007 | TVM DVB-T - HW Version 007.000.007 |
| 0x01070008 | TVM DVB-T - HW Version 007.000.008 |
| 0x01070009 | TVM DVB-T - HW Version 007.000.009 |
| 0x01070100 | TVM DVB-T - HW Version 007.001.000 |
| 0x01070101 | TVM DVB-T - HW Version 007.001.001 |
| 0x01070102 | TVM DVB-T - HW Version 007.001.002 |
| 0x01070103 | TVM DVB-T - HW Version 007.001.003 |
| 0x01070104 | TVM DVB-T - HW Version 007.001.004 |
| 0x01070105 | TVM DVB-T - HW Version 007.001.005 |
| 0x01070106 | TVM DVB-T - HW Version 007.001.006 |
| 0x01070107 | TVM DVB-T - HW Version 007.001.007 |
| 0x01070108 | TVM DVB-T - HW Version 007.001.008 |
| 0x01070109 | TVM DVB-T - HW Version 007.001.009 |
| 0x01070200 | TVM DVB-T - HW Version 007.002.000 |
| 0x01070201 | TVM DVB-T - HW Version 007.002.001 |
| 0x01070202 | TVM DVB-T - HW Version 007.002.002 |
| 0x01070203 | TVM DVB-T - HW Version 007.002.003 |
| 0x01070204 | TVM DVB-T - HW Version 007.002.004 |
| 0x01070205 | TVM DVB-T - HW Version 007.002.005 |
| 0x01070206 | TVM DVB-T - HW Version 007.002.006 |
| 0x01070207 | TVM DVB-T - HW Version 007.002.007 |
| 0x01070208 | TVM DVB-T - HW Version 007.002.008 |
| 0x01070209 | TVM DVB-T - HW Version 007.002.009 |
| 0x01070300 | TVM DVB-T - HW Version 007.003.000 |
| 0x01070301 | TVM DVB-T - HW Version 007.003.001 |
| 0x01070302 | TVM DVB-T - HW Version 007.003.002 |
| 0x01070303 | TVM DVB-T - HW Version 007.003.003 |
| 0x01070304 | TVM DVB-T - HW Version 007.003.004 |
| 0x01070305 | TVM DVB-T - HW Version 007.003.005 |
| 0x01070306 | TVM DVB-T - HW Version 007.003.006 |
| 0x01070307 | TVM DVB-T - HW Version 007.003.007 |
| 0x01070308 | TVM DVB-T - HW Version 007.003.008 |
| 0x01070309 | TVM DVB-T - HW Version 007.003.009 |
| 0x01070400 | TVM DVB-T - HW Version 007.004.000 |
| 0x01070401 | TVM DVB-T - HW Version 007.004.001 |
| 0x01070402 | TVM DVB-T - HW Version 007.004.002 |
| 0x01070403 | TVM DVB-T - HW Version 007.004.003 |
| 0x01070404 | TVM DVB-T - HW Version 007.004.004 |
| 0x01070405 | TVM DVB-T - HW Version 007.004.005 |
| 0x01070406 | TVM DVB-T - HW Version 007.004.006 |
| 0x01070407 | TVM DVB-T - HW Version 007.004.007 |
| 0x01070408 | TVM DVB-T - HW Version 007.004.008 |
| 0x01070409 | TVM DVB-T - HW Version 007.004.009 |
| 0x01070500 | TVM DVB-T - HW Version 007.005.000 |
| 0x01070501 | TVM DVB-T - HW Version 007.005.001 |
| 0x01070502 | TVM DVB-T - HW Version 007.005.002 |
| 0x01070503 | TVM DVB-T - HW Version 007.005.003 |
| 0x01070504 | TVM DVB-T - HW Version 007.005.004 |
| 0x01070505 | TVM DVB-T - HW Version 007.005.005 |
| 0x01070506 | TVM DVB-T - HW Version 007.005.006 |
| 0x01070507 | TVM DVB-T - HW Version 007.005.007 |
| 0x01070508 | TVM DVB-T - HW Version 007.005.008 |
| 0x01070509 | TVM DVB-T - HW Version 007.005.009 |
| 0x01070600 | TVM DVB-T - HW Version 007.006.000 |
| 0x01070601 | TVM DVB-T - HW Version 007.006.001 |
| 0x01070602 | TVM DVB-T - HW Version 007.006.002 |
| 0x01070603 | TVM DVB-T - HW Version 007.006.003 |
| 0x01070604 | TVM DVB-T - HW Version 007.006.004 |
| 0x01070605 | TVM DVB-T - HW Version 007.006.005 |
| 0x01070606 | TVM DVB-T - HW Version 007.006.006 |
| 0x01070607 | TVM DVB-T - HW Version 007.006.007 |
| 0x01070608 | TVM DVB-T - HW Version 007.006.008 |
| 0x01070609 | TVM DVB-T - HW Version 007.006.009 |
| 0x01070700 | TVM DVB-T - HW Version 007.007.000 |
| 0x01070701 | TVM DVB-T - HW Version 007.007.001 |
| 0x01070702 | TVM DVB-T - HW Version 007.007.002 |
| 0x01070703 | TVM DVB-T - HW Version 007.007.003 |
| 0x01070704 | TVM DVB-T - HW Version 007.007.004 |
| 0x01070705 | TVM DVB-T - HW Version 007.007.005 |
| 0x01070706 | TVM DVB-T - HW Version 007.007.006 |
| 0x01070707 | TVM DVB-T - HW Version 007.007.007 |
| 0x01070708 | TVM DVB-T - HW Version 007.007.008 |
| 0x01070709 | TVM DVB-T - HW Version 007.007.009 |
| 0x01070800 | TVM DVB-T - HW Version 007.008.000 |
| 0x01070801 | TVM DVB-T - HW Version 007.008.001 |
| 0x01070802 | TVM DVB-T - HW Version 007.008.002 |
| 0x01070803 | TVM DVB-T - HW Version 007.008.003 |
| 0x01070804 | TVM DVB-T - HW Version 007.008.004 |
| 0x01070805 | TVM DVB-T - HW Version 007.008.005 |
| 0x01070806 | TVM DVB-T - HW Version 007.008.006 |
| 0x01070807 | TVM DVB-T - HW Version 007.008.007 |
| 0x01070808 | TVM DVB-T - HW Version 007.008.008 |
| 0x01070809 | TVM DVB-T - HW Version 007.008.009 |
| 0x01070900 | TVM DVB-T - HW Version 007.009.000 |
| 0x01070901 | TVM DVB-T - HW Version 007.009.001 |
| 0x01070902 | TVM DVB-T - HW Version 007.009.002 |
| 0x01070903 | TVM DVB-T - HW Version 007.009.003 |
| 0x01070904 | TVM DVB-T - HW Version 007.009.004 |
| 0x01070905 | TVM DVB-T - HW Version 007.009.005 |
| 0x01070906 | TVM DVB-T - HW Version 007.009.006 |
| 0x01070907 | TVM DVB-T - HW Version 007.009.007 |
| 0x01070908 | TVM DVB-T - HW Version 007.009.008 |
| 0x01070909 | TVM DVB-T - HW Version 007.009.009 |
| 0x01080000 | TVM DVB-T - HW Version 008.000.000 |
| 0x01080001 | TVM DVB-T - HW Version 008.000.001 |
| 0x01080002 | TVM DVB-T - HW Version 008.000.002 |
| 0x01080003 | TVM DVB-T - HW Version 008.000.003 |
| 0x01080004 | TVM DVB-T - HW Version 008.000.004 |
| 0x01080005 | TVM DVB-T - HW Version 008.000.005 |
| 0x01080006 | TVM DVB-T - HW Version 008.000.006 |
| 0x01080007 | TVM DVB-T - HW Version 008.000.007 |
| 0x01080008 | TVM DVB-T - HW Version 008.000.008 |
| 0x01080009 | TVM DVB-T - HW Version 008.000.009 |
| 0x01080100 | TVM DVB-T - HW Version 008.001.000 |
| 0x01080101 | TVM DVB-T - HW Version 008.001.001 |
| 0x01080102 | TVM DVB-T - HW Version 008.001.002 |
| 0x01080103 | TVM DVB-T - HW Version 008.001.003 |
| 0x01080104 | TVM DVB-T - HW Version 008.001.004 |
| 0x01080105 | TVM DVB-T - HW Version 008.001.005 |
| 0x01080106 | TVM DVB-T - HW Version 008.001.006 |
| 0x01080107 | TVM DVB-T - HW Version 008.001.007 |
| 0x01080108 | TVM DVB-T - HW Version 008.001.008 |
| 0x01080109 | TVM DVB-T - HW Version 008.001.009 |
| 0x01080200 | TVM DVB-T - HW Version 008.002.000 |
| 0x01080201 | TVM DVB-T - HW Version 008.002.001 |
| 0x01080202 | TVM DVB-T - HW Version 008.002.002 |
| 0x01080203 | TVM DVB-T - HW Version 008.002.003 |
| 0x01080204 | TVM DVB-T - HW Version 008.002.004 |
| 0x01080205 | TVM DVB-T - HW Version 008.002.005 |
| 0x01080206 | TVM DVB-T - HW Version 008.002.006 |
| 0x01080207 | TVM DVB-T - HW Version 008.002.007 |
| 0x01080208 | TVM DVB-T - HW Version 008.002.008 |
| 0x01080209 | TVM DVB-T - HW Version 008.002.009 |
| 0x01080300 | TVM DVB-T - HW Version 008.003.000 |
| 0x01080301 | TVM DVB-T - HW Version 008.003.001 |
| 0x01080302 | TVM DVB-T - HW Version 008.003.002 |
| 0x01080303 | TVM DVB-T - HW Version 008.003.003 |
| 0x01080304 | TVM DVB-T - HW Version 008.003.004 |
| 0x01080305 | TVM DVB-T - HW Version 008.003.005 |
| 0x01080306 | TVM DVB-T - HW Version 008.003.006 |
| 0x01080307 | TVM DVB-T - HW Version 008.003.007 |
| 0x01080308 | TVM DVB-T - HW Version 008.003.008 |
| 0x01080309 | TVM DVB-T - HW Version 008.003.009 |
| 0x01080400 | TVM DVB-T - HW Version 008.004.000 |
| 0x01080401 | TVM DVB-T - HW Version 008.004.001 |
| 0x01080402 | TVM DVB-T - HW Version 008.004.002 |
| 0x01080403 | TVM DVB-T - HW Version 008.004.003 |
| 0x01080404 | TVM DVB-T - HW Version 008.004.004 |
| 0x01080405 | TVM DVB-T - HW Version 008.004.005 |
| 0x01080406 | TVM DVB-T - HW Version 008.004.006 |
| 0x01080407 | TVM DVB-T - HW Version 008.004.007 |
| 0x01080408 | TVM DVB-T - HW Version 008.004.008 |
| 0x01080409 | TVM DVB-T - HW Version 008.004.009 |
| 0x01080500 | TVM DVB-T - HW Version 008.005.000 |
| 0x01080501 | TVM DVB-T - HW Version 008.005.001 |
| 0x01080502 | TVM DVB-T - HW Version 008.005.002 |
| 0x01080503 | TVM DVB-T - HW Version 008.005.003 |
| 0x01080504 | TVM DVB-T - HW Version 008.005.004 |
| 0x01080505 | TVM DVB-T - HW Version 008.005.005 |
| 0x01080506 | TVM DVB-T - HW Version 008.005.006 |
| 0x01080507 | TVM DVB-T - HW Version 008.005.007 |
| 0x01080508 | TVM DVB-T - HW Version 008.005.008 |
| 0x01080509 | TVM DVB-T - HW Version 008.005.009 |
| 0x01080600 | TVM DVB-T - HW Version 008.006.000 |
| 0x01080601 | TVM DVB-T - HW Version 008.006.001 |
| 0x01080602 | TVM DVB-T - HW Version 008.006.002 |
| 0x01080603 | TVM DVB-T - HW Version 008.006.003 |
| 0x01080604 | TVM DVB-T - HW Version 008.006.004 |
| 0x01080605 | TVM DVB-T - HW Version 008.006.005 |
| 0x01080606 | TVM DVB-T - HW Version 008.006.006 |
| 0x01080607 | TVM DVB-T - HW Version 008.006.007 |
| 0x01080608 | TVM DVB-T - HW Version 008.006.008 |
| 0x01080609 | TVM DVB-T - HW Version 008.006.009 |
| 0x01080700 | TVM DVB-T - HW Version 008.007.000 |
| 0x01080701 | TVM DVB-T - HW Version 008.007.001 |
| 0x01080702 | TVM DVB-T - HW Version 008.007.002 |
| 0x01080703 | TVM DVB-T - HW Version 008.007.003 |
| 0x01080704 | TVM DVB-T - HW Version 008.007.004 |
| 0x01080705 | TVM DVB-T - HW Version 008.007.005 |
| 0x01080706 | TVM DVB-T - HW Version 008.007.006 |
| 0x01080707 | TVM DVB-T - HW Version 008.007.007 |
| 0x01080708 | TVM DVB-T - HW Version 008.007.008 |
| 0x01080709 | TVM DVB-T - HW Version 008.007.009 |
| 0x01080800 | TVM DVB-T - HW Version 008.008.000 |
| 0x01080801 | TVM DVB-T - HW Version 008.008.001 |
| 0x01080802 | TVM DVB-T - HW Version 008.008.002 |
| 0x01080803 | TVM DVB-T - HW Version 008.008.003 |
| 0x01080804 | TVM DVB-T - HW Version 008.008.004 |
| 0x01080805 | TVM DVB-T - HW Version 008.008.005 |
| 0x01080806 | TVM DVB-T - HW Version 008.008.006 |
| 0x01080807 | TVM DVB-T - HW Version 008.008.007 |
| 0x01080808 | TVM DVB-T - HW Version 008.008.008 |
| 0x01080809 | TVM DVB-T - HW Version 008.008.009 |
| 0x01080900 | TVM DVB-T - HW Version 008.009.000 |
| 0x01080901 | TVM DVB-T - HW Version 008.009.001 |
| 0x01080902 | TVM DVB-T - HW Version 008.009.002 |
| 0x01080903 | TVM DVB-T - HW Version 008.009.003 |
| 0x01080904 | TVM DVB-T - HW Version 008.009.004 |
| 0x01080905 | TVM DVB-T - HW Version 008.009.005 |
| 0x01080906 | TVM DVB-T - HW Version 008.009.006 |
| 0x01080907 | TVM DVB-T - HW Version 008.009.007 |
| 0x01080908 | TVM DVB-T - HW Version 008.009.008 |
| 0x01080909 | TVM DVB-T - HW Version 008.009.009 |
| 0x01090000 | TVM DVB-T - HW Version 009.000.000 |
| 0x01090001 | TVM DVB-T - HW Version 009.000.001 |
| 0x01090002 | TVM DVB-T - HW Version 009.000.002 |
| 0x01090003 | TVM DVB-T - HW Version 009.000.003 |
| 0x01090004 | TVM DVB-T - HW Version 009.000.004 |
| 0x01090005 | TVM DVB-T - HW Version 009.000.005 |
| 0x01090006 | TVM DVB-T - HW Version 009.000.006 |
| 0x01090007 | TVM DVB-T - HW Version 009.000.007 |
| 0x01090008 | TVM DVB-T - HW Version 009.000.008 |
| 0x01090009 | TVM DVB-T - HW Version 009.000.009 |
| 0x01090100 | TVM DVB-T - HW Version 009.001.000 |
| 0x01090101 | TVM DVB-T - HW Version 009.001.001 |
| 0x01090102 | TVM DVB-T - HW Version 009.001.002 |
| 0x01090103 | TVM DVB-T - HW Version 009.001.003 |
| 0x01090104 | TVM DVB-T - HW Version 009.001.004 |
| 0x01090105 | TVM DVB-T - HW Version 009.001.005 |
| 0x01090106 | TVM DVB-T - HW Version 009.001.006 |
| 0x01090107 | TVM DVB-T - HW Version 009.001.007 |
| 0x01090108 | TVM DVB-T - HW Version 009.001.008 |
| 0x01090109 | TVM DVB-T - HW Version 009.001.009 |
| 0x01090200 | TVM DVB-T - HW Version 009.002.000 |
| 0x01090201 | TVM DVB-T - HW Version 009.002.001 |
| 0x01090202 | TVM DVB-T - HW Version 009.002.002 |
| 0x01090203 | TVM DVB-T - HW Version 009.002.003 |
| 0x01090204 | TVM DVB-T - HW Version 009.002.004 |
| 0x01090205 | TVM DVB-T - HW Version 009.002.005 |
| 0x01090206 | TVM DVB-T - HW Version 009.002.006 |
| 0x01090207 | TVM DVB-T - HW Version 009.002.007 |
| 0x01090208 | TVM DVB-T - HW Version 009.002.008 |
| 0x01090209 | TVM DVB-T - HW Version 009.002.009 |
| 0x01090300 | TVM DVB-T - HW Version 009.003.000 |
| 0x01090301 | TVM DVB-T - HW Version 009.003.001 |
| 0x01090302 | TVM DVB-T - HW Version 009.003.002 |
| 0x01090303 | TVM DVB-T - HW Version 009.003.003 |
| 0x01090304 | TVM DVB-T - HW Version 009.003.004 |
| 0x01090305 | TVM DVB-T - HW Version 009.003.005 |
| 0x01090306 | TVM DVB-T - HW Version 009.003.006 |
| 0x01090307 | TVM DVB-T - HW Version 009.003.007 |
| 0x01090308 | TVM DVB-T - HW Version 009.003.008 |
| 0x01090309 | TVM DVB-T - HW Version 009.003.009 |
| 0x01090400 | TVM DVB-T - HW Version 009.004.000 |
| 0x01090401 | TVM DVB-T - HW Version 009.004.001 |
| 0x01090402 | TVM DVB-T - HW Version 009.004.002 |
| 0x01090403 | TVM DVB-T - HW Version 009.004.003 |
| 0x01090404 | TVM DVB-T - HW Version 009.004.004 |
| 0x01090405 | TVM DVB-T - HW Version 009.004.005 |
| 0x01090406 | TVM DVB-T - HW Version 009.004.006 |
| 0x01090407 | TVM DVB-T - HW Version 009.004.007 |
| 0x01090408 | TVM DVB-T - HW Version 009.004.008 |
| 0x01090409 | TVM DVB-T - HW Version 009.004.009 |
| 0x01090500 | TVM DVB-T - HW Version 009.005.000 |
| 0x01090501 | TVM DVB-T - HW Version 009.005.001 |
| 0x01090502 | TVM DVB-T - HW Version 009.005.002 |
| 0x01090503 | TVM DVB-T - HW Version 009.005.003 |
| 0x01090504 | TVM DVB-T - HW Version 009.005.004 |
| 0x01090505 | TVM DVB-T - HW Version 009.005.005 |
| 0x01090506 | TVM DVB-T - HW Version 009.005.006 |
| 0x01090507 | TVM DVB-T - HW Version 009.005.007 |
| 0x01090508 | TVM DVB-T - HW Version 009.005.008 |
| 0x01090509 | TVM DVB-T - HW Version 009.005.009 |
| 0x01090600 | TVM DVB-T - HW Version 009.006.000 |
| 0x01090601 | TVM DVB-T - HW Version 009.006.001 |
| 0x01090602 | TVM DVB-T - HW Version 009.006.002 |
| 0x01090603 | TVM DVB-T - HW Version 009.006.003 |
| 0x01090604 | TVM DVB-T - HW Version 009.006.004 |
| 0x01090605 | TVM DVB-T - HW Version 009.006.005 |
| 0x01090606 | TVM DVB-T - HW Version 009.006.006 |
| 0x01090607 | TVM DVB-T - HW Version 009.006.007 |
| 0x01090608 | TVM DVB-T - HW Version 009.006.008 |
| 0x01090609 | TVM DVB-T - HW Version 009.006.009 |
| 0x01090700 | TVM DVB-T - HW Version 009.007.000 |
| 0x01090701 | TVM DVB-T - HW Version 009.007.001 |
| 0x01090702 | TVM DVB-T - HW Version 009.007.002 |
| 0x01090703 | TVM DVB-T - HW Version 009.007.003 |
| 0x01090704 | TVM DVB-T - HW Version 009.007.004 |
| 0x01090705 | TVM DVB-T - HW Version 009.007.005 |
| 0x01090706 | TVM DVB-T - HW Version 009.007.006 |
| 0x01090707 | TVM DVB-T - HW Version 009.007.007 |
| 0x01090708 | TVM DVB-T - HW Version 009.007.008 |
| 0x01090709 | TVM DVB-T - HW Version 009.007.009 |
| 0x01090800 | TVM DVB-T - HW Version 009.008.000 |
| 0x01090801 | TVM DVB-T - HW Version 009.008.001 |
| 0x01090802 | TVM DVB-T - HW Version 009.008.002 |
| 0x01090803 | TVM DVB-T - HW Version 009.008.003 |
| 0x01090804 | TVM DVB-T - HW Version 009.008.004 |
| 0x01090805 | TVM DVB-T - HW Version 009.008.005 |
| 0x01090806 | TVM DVB-T - HW Version 009.008.006 |
| 0x01090807 | TVM DVB-T - HW Version 009.008.007 |
| 0x01090808 | TVM DVB-T - HW Version 009.008.008 |
| 0x01090809 | TVM DVB-T - HW Version 009.008.009 |
| 0x01090900 | TVM DVB-T - HW Version 009.009.000 |
| 0x01090901 | TVM DVB-T - HW Version 009.009.001 |
| 0x01090902 | TVM DVB-T - HW Version 009.009.002 |
| 0x01090903 | TVM DVB-T - HW Version 009.009.003 |
| 0x01090904 | TVM DVB-T - HW Version 009.009.004 |
| 0x01090905 | TVM DVB-T - HW Version 009.009.005 |
| 0x01090906 | TVM DVB-T - HW Version 009.009.006 |
| 0x01090907 | TVM DVB-T - HW Version 009.009.007 |
| 0x01090908 | TVM DVB-T - HW Version 009.009.008 |
| 0x01090909 | TVM DVB-T - HW Version 009.009.009 |
| 0x02050000 | TVM DVB-T RSE - HW Version 005.000.000 |
| 0x02050001 | TVM DVB-T RSE - HW Version 005.000.001 |
| 0x02050002 | TVM DVB-T RSE - HW Version 005.000.002 |
| 0x02050003 | TVM DVB-T RSE - HW Version 005.000.003 |
| 0x02050004 | TVM DVB-T RSE - HW Version 005.000.004 |
| 0x02050005 | TVM DVB-T RSE - HW Version 005.000.005 |
| 0x02050006 | TVM DVB-T RSE - HW Version 005.000.006 |
| 0x02050007 | TVM DVB-T RSE - HW Version 005.000.007 |
| 0x02050008 | TVM DVB-T RSE - HW Version 005.000.008 |
| 0x02050009 | TVM DVB-T RSE - HW Version 005.000.009 |
| 0x02050100 | TVM DVB-T RSE - HW Version 005.001.000 |
| 0x02050101 | TVM DVB-T RSE - HW Version 005.001.001 |
| 0x02050102 | TVM DVB-T RSE - HW Version 005.001.002 |
| 0x02050103 | TVM DVB-T RSE - HW Version 005.001.003 |
| 0x02050104 | TVM DVB-T RSE - HW Version 005.001.004 |
| 0x02050105 | TVM DVB-T RSE - HW Version 005.001.005 |
| 0x02050106 | TVM DVB-T RSE - HW Version 005.001.006 |
| 0x02050107 | TVM DVB-T RSE - HW Version 005.001.007 |
| 0x02050108 | TVM DVB-T RSE - HW Version 005.001.008 |
| 0x02050109 | TVM DVB-T RSE - HW Version 005.001.009 |
| 0x02050200 | TVM DVB-T RSE - HW Version 005.002.000 |
| 0x02050201 | TVM DVB-T RSE - HW Version 005.002.001 |
| 0x02050202 | TVM DVB-T RSE - HW Version 005.002.002 |
| 0x02050203 | TVM DVB-T RSE - HW Version 005.002.003 |
| 0x02050204 | TVM DVB-T RSE - HW Version 005.002.004 |
| 0x02050205 | TVM DVB-T RSE - HW Version 005.002.005 |
| 0x02050206 | TVM DVB-T RSE - HW Version 005.002.006 |
| 0x02050207 | TVM DVB-T RSE - HW Version 005.002.007 |
| 0x02050208 | TVM DVB-T RSE - HW Version 005.002.008 |
| 0x02050209 | TVM DVB-T RSE - HW Version 005.002.009 |
| 0x02050300 | TVM DVB-T RSE - HW Version 005.003.000 |
| 0x02050301 | TVM DVB-T RSE - HW Version 005.003.001 |
| 0x02050302 | TVM DVB-T RSE - HW Version 005.003.002 |
| 0x02050303 | TVM DVB-T RSE - HW Version 005.003.003 |
| 0x02050304 | TVM DVB-T RSE - HW Version 005.003.004 |
| 0x02050305 | TVM DVB-T RSE - HW Version 005.003.005 |
| 0x02050306 | TVM DVB-T RSE - HW Version 005.003.006 |
| 0x02050307 | TVM DVB-T RSE - HW Version 005.003.007 |
| 0x02050308 | TVM DVB-T RSE - HW Version 005.003.008 |
| 0x02050309 | TVM DVB-T RSE - HW Version 005.003.009 |
| 0x02050400 | TVM DVB-T RSE - HW Version 005.004.000 |
| 0x02050401 | TVM DVB-T RSE - HW Version 005.004.001 |
| 0x02050402 | TVM DVB-T RSE - HW Version 005.004.002 |
| 0x02050403 | TVM DVB-T RSE - HW Version 005.004.003 |
| 0x02050404 | TVM DVB-T RSE - HW Version 005.004.004 |
| 0x02050405 | TVM DVB-T RSE - HW Version 005.004.005 |
| 0x02050406 | TVM DVB-T RSE - HW Version 005.004.006 |
| 0x02050407 | TVM DVB-T RSE - HW Version 005.004.007 |
| 0x02050408 | TVM DVB-T RSE - HW Version 005.004.008 |
| 0x02050409 | TVM DVB-T RSE - HW Version 005.004.009 |
| 0x02050500 | TVM DVB-T RSE - HW Version 005.005.000 |
| 0x02050501 | TVM DVB-T RSE - HW Version 005.005.001 |
| 0x02050502 | TVM DVB-T RSE - HW Version 005.005.002 |
| 0x02050503 | TVM DVB-T RSE - HW Version 005.005.003 |
| 0x02050504 | TVM DVB-T RSE - HW Version 005.005.004 |
| 0x02050505 | TVM DVB-T RSE - HW Version 005.005.005 |
| 0x02050506 | TVM DVB-T RSE - HW Version 005.005.006 |
| 0x02050507 | TVM DVB-T RSE - HW Version 005.005.007 |
| 0x02050508 | TVM DVB-T RSE - HW Version 005.005.008 |
| 0x02050509 | TVM DVB-T RSE - HW Version 005.005.009 |
| 0x02050600 | TVM DVB-T RSE - HW Version 005.006.000 |
| 0x02050601 | TVM DVB-T RSE - HW Version 005.006.001 |
| 0x02050602 | TVM DVB-T RSE - HW Version 005.006.002 |
| 0x02050603 | TVM DVB-T RSE - HW Version 005.006.003 |
| 0x02050604 | TVM DVB-T RSE - HW Version 005.006.004 |
| 0x02050605 | TVM DVB-T RSE - HW Version 005.006.005 |
| 0x02050606 | TVM DVB-T RSE - HW Version 005.006.006 |
| 0x02050607 | TVM DVB-T RSE - HW Version 005.006.007 |
| 0x02050608 | TVM DVB-T RSE - HW Version 005.006.008 |
| 0x02050609 | TVM DVB-T RSE - HW Version 005.006.009 |
| 0x02050700 | TVM DVB-T RSE - HW Version 005.007.000 |
| 0x02050701 | TVM DVB-T RSE - HW Version 005.007.001 |
| 0x02050702 | TVM DVB-T RSE - HW Version 005.007.002 |
| 0x02050703 | TVM DVB-T RSE - HW Version 005.007.003 |
| 0x02050704 | TVM DVB-T RSE - HW Version 005.007.004 |
| 0x02050705 | TVM DVB-T RSE - HW Version 005.007.005 |
| 0x02050706 | TVM DVB-T RSE - HW Version 005.007.006 |
| 0x02050707 | TVM DVB-T RSE - HW Version 005.007.007 |
| 0x02050708 | TVM DVB-T RSE - HW Version 005.007.008 |
| 0x02050709 | TVM DVB-T RSE - HW Version 005.007.009 |
| 0x02050800 | TVM DVB-T RSE - HW Version 005.008.000 |
| 0x02050801 | TVM DVB-T RSE - HW Version 005.008.001 |
| 0x02050802 | TVM DVB-T RSE - HW Version 005.008.002 |
| 0x02050803 | TVM DVB-T RSE - HW Version 005.008.003 |
| 0x02050804 | TVM DVB-T RSE - HW Version 005.008.004 |
| 0x02050805 | TVM DVB-T RSE - HW Version 005.008.005 |
| 0x02050806 | TVM DVB-T RSE - HW Version 005.008.006 |
| 0x02050807 | TVM DVB-T RSE - HW Version 005.008.007 |
| 0x02050808 | TVM DVB-T RSE - HW Version 005.008.008 |
| 0x02050809 | TVM DVB-T RSE - HW Version 005.008.009 |
| 0x02050900 | TVM DVB-T RSE - HW Version 005.009.000 |
| 0x02050901 | TVM DVB-T RSE - HW Version 005.009.001 |
| 0x02050902 | TVM DVB-T RSE - HW Version 005.009.002 |
| 0x02050903 | TVM DVB-T RSE - HW Version 005.009.003 |
| 0x02050904 | TVM DVB-T RSE - HW Version 005.009.004 |
| 0x02050905 | TVM DVB-T RSE - HW Version 005.009.005 |
| 0x02050906 | TVM DVB-T RSE - HW Version 005.009.006 |
| 0x02050907 | TVM DVB-T RSE - HW Version 005.009.007 |
| 0x02050908 | TVM DVB-T RSE - HW Version 005.009.008 |
| 0x02050909 | TVM DVB-T RSE - HW Version 005.009.009 |
| 0x02060000 | TVM DVB-T RSE - HW Version 006.000.000 |
| 0x02060001 | TVM DVB-T RSE - HW Version 006.000.001 |
| 0x02060002 | TVM DVB-T RSE - HW Version 006.000.002 |
| 0x02060003 | TVM DVB-T RSE - HW Version 006.000.003 |
| 0x02060004 | TVM DVB-T RSE - HW Version 006.000.004 |
| 0x02060005 | TVM DVB-T RSE - HW Version 006.000.005 |
| 0x02060006 | TVM DVB-T RSE - HW Version 006.000.006 |
| 0x02060007 | TVM DVB-T RSE - HW Version 006.000.007 |
| 0x02060008 | TVM DVB-T RSE - HW Version 006.000.008 |
| 0x02060009 | TVM DVB-T RSE - HW Version 006.000.009 |
| 0x02060100 | TVM DVB-T RSE - HW Version 006.001.000 |
| 0x02060101 | TVM DVB-T RSE - HW Version 006.001.001 |
| 0x02060102 | TVM DVB-T RSE - HW Version 006.001.002 |
| 0x02060103 | TVM DVB-T RSE - HW Version 006.001.003 |
| 0x02060104 | TVM DVB-T RSE - HW Version 006.001.004 |
| 0x02060105 | TVM DVB-T RSE - HW Version 006.001.005 |
| 0x02060106 | TVM DVB-T RSE - HW Version 006.001.006 |
| 0x02060107 | TVM DVB-T RSE - HW Version 006.001.007 |
| 0x02060108 | TVM DVB-T RSE - HW Version 006.001.008 |
| 0x02060109 | TVM DVB-T RSE - HW Version 006.001.009 |
| 0x02060200 | TVM DVB-T RSE - HW Version 006.002.000 |
| 0x02060201 | TVM DVB-T RSE - HW Version 006.002.001 |
| 0x02060202 | TVM DVB-T RSE - HW Version 006.002.002 |
| 0x02060203 | TVM DVB-T RSE - HW Version 006.002.003 |
| 0x02060204 | TVM DVB-T RSE - HW Version 006.002.004 |
| 0x02060205 | TVM DVB-T RSE - HW Version 006.002.005 |
| 0x02060206 | TVM DVB-T RSE - HW Version 006.002.006 |
| 0x02060207 | TVM DVB-T RSE - HW Version 006.002.007 |
| 0x02060208 | TVM DVB-T RSE - HW Version 006.002.008 |
| 0x02060209 | TVM DVB-T RSE - HW Version 006.002.009 |
| 0x02060300 | TVM DVB-T RSE - HW Version 006.003.000 |
| 0x02060301 | TVM DVB-T RSE - HW Version 006.003.001 |
| 0x02060302 | TVM DVB-T RSE - HW Version 006.003.002 |
| 0x02060303 | TVM DVB-T RSE - HW Version 006.003.003 |
| 0x02060304 | TVM DVB-T RSE - HW Version 006.003.004 |
| 0x02060305 | TVM DVB-T RSE - HW Version 006.003.005 |
| 0x02060306 | TVM DVB-T RSE - HW Version 006.003.006 |
| 0x02060307 | TVM DVB-T RSE - HW Version 006.003.007 |
| 0x02060308 | TVM DVB-T RSE - HW Version 006.003.008 |
| 0x02060309 | TVM DVB-T RSE - HW Version 006.003.009 |
| 0x02060400 | TVM DVB-T RSE - HW Version 006.004.000 |
| 0x02060401 | TVM DVB-T RSE - HW Version 006.004.001 |
| 0x02060402 | TVM DVB-T RSE - HW Version 006.004.002 |
| 0x02060403 | TVM DVB-T RSE - HW Version 006.004.003 |
| 0x02060404 | TVM DVB-T RSE - HW Version 006.004.004 |
| 0x02060405 | TVM DVB-T RSE - HW Version 006.004.005 |
| 0x02060406 | TVM DVB-T RSE - HW Version 006.004.006 |
| 0x02060407 | TVM DVB-T RSE - HW Version 006.004.007 |
| 0x02060408 | TVM DVB-T RSE - HW Version 006.004.008 |
| 0x02060409 | TVM DVB-T RSE - HW Version 006.004.009 |
| 0x02060500 | TVM DVB-T RSE - HW Version 006.005.000 |
| 0x02060501 | TVM DVB-T RSE - HW Version 006.005.001 |
| 0x02060502 | TVM DVB-T RSE - HW Version 006.005.002 |
| 0x02060503 | TVM DVB-T RSE - HW Version 006.005.003 |
| 0x02060504 | TVM DVB-T RSE - HW Version 006.005.004 |
| 0x02060505 | TVM DVB-T RSE - HW Version 006.005.005 |
| 0x02060506 | TVM DVB-T RSE - HW Version 006.005.006 |
| 0x02060507 | TVM DVB-T RSE - HW Version 006.005.007 |
| 0x02060508 | TVM DVB-T RSE - HW Version 006.005.008 |
| 0x02060509 | TVM DVB-T RSE - HW Version 006.005.009 |
| 0x02060600 | TVM DVB-T RSE - HW Version 006.006.000 |
| 0x02060601 | TVM DVB-T RSE - HW Version 006.006.001 |
| 0x02060602 | TVM DVB-T RSE - HW Version 006.006.002 |
| 0x02060603 | TVM DVB-T RSE - HW Version 006.006.003 |
| 0x02060604 | TVM DVB-T RSE - HW Version 006.006.004 |
| 0x02060605 | TVM DVB-T RSE - HW Version 006.006.005 |
| 0x02060606 | TVM DVB-T RSE - HW Version 006.006.006 |
| 0x02060607 | TVM DVB-T RSE - HW Version 006.006.007 |
| 0x02060608 | TVM DVB-T RSE - HW Version 006.006.008 |
| 0x02060609 | TVM DVB-T RSE - HW Version 006.006.009 |
| 0x02060700 | TVM DVB-T RSE - HW Version 006.007.000 |
| 0x02060701 | TVM DVB-T RSE - HW Version 006.007.001 |
| 0x02060702 | TVM DVB-T RSE - HW Version 006.007.002 |
| 0x02060703 | TVM DVB-T RSE - HW Version 006.007.003 |
| 0x02060704 | TVM DVB-T RSE - HW Version 006.007.004 |
| 0x02060705 | TVM DVB-T RSE - HW Version 006.007.005 |
| 0x02060706 | TVM DVB-T RSE - HW Version 006.007.006 |
| 0x02060707 | TVM DVB-T RSE - HW Version 006.007.007 |
| 0x02060708 | TVM DVB-T RSE - HW Version 006.007.008 |
| 0x02060709 | TVM DVB-T RSE - HW Version 006.007.009 |
| 0x02060800 | TVM DVB-T RSE - HW Version 006.008.000 |
| 0x02060801 | TVM DVB-T RSE - HW Version 006.008.001 |
| 0x02060802 | TVM DVB-T RSE - HW Version 006.008.002 |
| 0x02060803 | TVM DVB-T RSE - HW Version 006.008.003 |
| 0x02060804 | TVM DVB-T RSE - HW Version 006.008.004 |
| 0x02060805 | TVM DVB-T RSE - HW Version 006.008.005 |
| 0x02060806 | TVM DVB-T RSE - HW Version 006.008.006 |
| 0x02060807 | TVM DVB-T RSE - HW Version 006.008.007 |
| 0x02060808 | TVM DVB-T RSE - HW Version 006.008.008 |
| 0x02060809 | TVM DVB-T RSE - HW Version 006.008.009 |
| 0x02060900 | TVM DVB-T RSE - HW Version 006.009.000 |
| 0x02060901 | TVM DVB-T RSE - HW Version 006.009.001 |
| 0x02060902 | TVM DVB-T RSE - HW Version 006.009.002 |
| 0x02060903 | TVM DVB-T RSE - HW Version 006.009.003 |
| 0x02060904 | TVM DVB-T RSE - HW Version 006.009.004 |
| 0x02060905 | TVM DVB-T RSE - HW Version 006.009.005 |
| 0x02060906 | TVM DVB-T RSE - HW Version 006.009.006 |
| 0x02060907 | TVM DVB-T RSE - HW Version 006.009.007 |
| 0x02060908 | TVM DVB-T RSE - HW Version 006.009.008 |
| 0x02060909 | TVM DVB-T RSE - HW Version 006.009.009 |
| 0x02070000 | TVM DVB-T RSE - HW Version 007.000.000 |
| 0x02070001 | TVM DVB-T RSE - HW Version 007.000.001 |
| 0x02070002 | TVM DVB-T RSE - HW Version 007.000.002 |
| 0x02070003 | TVM DVB-T RSE - HW Version 007.000.003 |
| 0x02070004 | TVM DVB-T RSE - HW Version 007.000.004 |
| 0x02070005 | TVM DVB-T RSE - HW Version 007.000.005 |
| 0x02070006 | TVM DVB-T RSE - HW Version 007.000.006 |
| 0x02070007 | TVM DVB-T RSE - HW Version 007.000.007 |
| 0x02070008 | TVM DVB-T RSE - HW Version 007.000.008 |
| 0x02070009 | TVM DVB-T RSE - HW Version 007.000.009 |
| 0x02070100 | TVM DVB-T RSE - HW Version 007.001.000 |
| 0x02070101 | TVM DVB-T RSE - HW Version 007.001.001 |
| 0x02070102 | TVM DVB-T RSE - HW Version 007.001.002 |
| 0x02070103 | TVM DVB-T RSE - HW Version 007.001.003 |
| 0x02070104 | TVM DVB-T RSE - HW Version 007.001.004 |
| 0x02070105 | TVM DVB-T RSE - HW Version 007.001.005 |
| 0x02070106 | TVM DVB-T RSE - HW Version 007.001.006 |
| 0x02070107 | TVM DVB-T RSE - HW Version 007.001.007 |
| 0x02070108 | TVM DVB-T RSE - HW Version 007.001.008 |
| 0x02070109 | TVM DVB-T RSE - HW Version 007.001.009 |
| 0x02070200 | TVM DVB-T RSE - HW Version 007.002.000 |
| 0x02070201 | TVM DVB-T RSE - HW Version 007.002.001 |
| 0x02070202 | TVM DVB-T RSE - HW Version 007.002.002 |
| 0x02070203 | TVM DVB-T RSE - HW Version 007.002.003 |
| 0x02070204 | TVM DVB-T RSE - HW Version 007.002.004 |
| 0x02070205 | TVM DVB-T RSE - HW Version 007.002.005 |
| 0x02070206 | TVM DVB-T RSE - HW Version 007.002.006 |
| 0x02070207 | TVM DVB-T RSE - HW Version 007.002.007 |
| 0x02070208 | TVM DVB-T RSE - HW Version 007.002.008 |
| 0x02070209 | TVM DVB-T RSE - HW Version 007.002.009 |
| 0x02070300 | TVM DVB-T RSE - HW Version 007.003.000 |
| 0x02070301 | TVM DVB-T RSE - HW Version 007.003.001 |
| 0x02070302 | TVM DVB-T RSE - HW Version 007.003.002 |
| 0x02070303 | TVM DVB-T RSE - HW Version 007.003.003 |
| 0x02070304 | TVM DVB-T RSE - HW Version 007.003.004 |
| 0x02070305 | TVM DVB-T RSE - HW Version 007.003.005 |
| 0x02070306 | TVM DVB-T RSE - HW Version 007.003.006 |
| 0x02070307 | TVM DVB-T RSE - HW Version 007.003.007 |
| 0x02070308 | TVM DVB-T RSE - HW Version 007.003.008 |
| 0x02070309 | TVM DVB-T RSE - HW Version 007.003.009 |
| 0x02070400 | TVM DVB-T RSE - HW Version 007.004.000 |
| 0x02070401 | TVM DVB-T RSE - HW Version 007.004.001 |
| 0x02070402 | TVM DVB-T RSE - HW Version 007.004.002 |
| 0x02070403 | TVM DVB-T RSE - HW Version 007.004.003 |
| 0x02070404 | TVM DVB-T RSE - HW Version 007.004.004 |
| 0x02070405 | TVM DVB-T RSE - HW Version 007.004.005 |
| 0x02070406 | TVM DVB-T RSE - HW Version 007.004.006 |
| 0x02070407 | TVM DVB-T RSE - HW Version 007.004.007 |
| 0x02070408 | TVM DVB-T RSE - HW Version 007.004.008 |
| 0x02070409 | TVM DVB-T RSE - HW Version 007.004.009 |
| 0x02070500 | TVM DVB-T RSE - HW Version 007.005.000 |
| 0x02070501 | TVM DVB-T RSE - HW Version 007.005.001 |
| 0x02070502 | TVM DVB-T RSE - HW Version 007.005.002 |
| 0x02070503 | TVM DVB-T RSE - HW Version 007.005.003 |
| 0x02070504 | TVM DVB-T RSE - HW Version 007.005.004 |
| 0x02070505 | TVM DVB-T RSE - HW Version 007.005.005 |
| 0x02070506 | TVM DVB-T RSE - HW Version 007.005.006 |
| 0x02070507 | TVM DVB-T RSE - HW Version 007.005.007 |
| 0x02070508 | TVM DVB-T RSE - HW Version 007.005.008 |
| 0x02070509 | TVM DVB-T RSE - HW Version 007.005.009 |
| 0x02070600 | TVM DVB-T RSE - HW Version 007.006.000 |
| 0x02070601 | TVM DVB-T RSE - HW Version 007.006.001 |
| 0x02070602 | TVM DVB-T RSE - HW Version 007.006.002 |
| 0x02070603 | TVM DVB-T RSE - HW Version 007.006.003 |
| 0x02070604 | TVM DVB-T RSE - HW Version 007.006.004 |
| 0x02070605 | TVM DVB-T RSE - HW Version 007.006.005 |
| 0x02070606 | TVM DVB-T RSE - HW Version 007.006.006 |
| 0x02070607 | TVM DVB-T RSE - HW Version 007.006.007 |
| 0x02070608 | TVM DVB-T RSE - HW Version 007.006.008 |
| 0x02070609 | TVM DVB-T RSE - HW Version 007.006.009 |
| 0x02070700 | TVM DVB-T RSE - HW Version 007.007.000 |
| 0x02070701 | TVM DVB-T RSE - HW Version 007.007.001 |
| 0x02070702 | TVM DVB-T RSE - HW Version 007.007.002 |
| 0x02070703 | TVM DVB-T RSE - HW Version 007.007.003 |
| 0x02070704 | TVM DVB-T RSE - HW Version 007.007.004 |
| 0x02070705 | TVM DVB-T RSE - HW Version 007.007.005 |
| 0x02070706 | TVM DVB-T RSE - HW Version 007.007.006 |
| 0x02070707 | TVM DVB-T RSE - HW Version 007.007.007 |
| 0x02070708 | TVM DVB-T RSE - HW Version 007.007.008 |
| 0x02070709 | TVM DVB-T RSE - HW Version 007.007.009 |
| 0x02070800 | TVM DVB-T RSE - HW Version 007.008.000 |
| 0x02070801 | TVM DVB-T RSE - HW Version 007.008.001 |
| 0x02070802 | TVM DVB-T RSE - HW Version 007.008.002 |
| 0x02070803 | TVM DVB-T RSE - HW Version 007.008.003 |
| 0x02070804 | TVM DVB-T RSE - HW Version 007.008.004 |
| 0x02070805 | TVM DVB-T RSE - HW Version 007.008.005 |
| 0x02070806 | TVM DVB-T RSE - HW Version 007.008.006 |
| 0x02070807 | TVM DVB-T RSE - HW Version 007.008.007 |
| 0x02070808 | TVM DVB-T RSE - HW Version 007.008.008 |
| 0x02070809 | TVM DVB-T RSE - HW Version 007.008.009 |
| 0x02070900 | TVM DVB-T RSE - HW Version 007.009.000 |
| 0x02070901 | TVM DVB-T RSE - HW Version 007.009.001 |
| 0x02070902 | TVM DVB-T RSE - HW Version 007.009.002 |
| 0x02070903 | TVM DVB-T RSE - HW Version 007.009.003 |
| 0x02070904 | TVM DVB-T RSE - HW Version 007.009.004 |
| 0x02070905 | TVM DVB-T RSE - HW Version 007.009.005 |
| 0x02070906 | TVM DVB-T RSE - HW Version 007.009.006 |
| 0x02070907 | TVM DVB-T RSE - HW Version 007.009.007 |
| 0x02070908 | TVM DVB-T RSE - HW Version 007.009.008 |
| 0x02070909 | TVM DVB-T RSE - HW Version 007.009.009 |
| 0x02080000 | TVM DVB-T RSE - HW Version 008.000.000 |
| 0x02080001 | TVM DVB-T RSE - HW Version 008.000.001 |
| 0x02080002 | TVM DVB-T RSE - HW Version 008.000.002 |
| 0x02080003 | TVM DVB-T RSE - HW Version 008.000.003 |
| 0x02080004 | TVM DVB-T RSE - HW Version 008.000.004 |
| 0x02080005 | TVM DVB-T RSE - HW Version 008.000.005 |
| 0x02080006 | TVM DVB-T RSE - HW Version 008.000.006 |
| 0x02080007 | TVM DVB-T RSE - HW Version 008.000.007 |
| 0x02080008 | TVM DVB-T RSE - HW Version 008.000.008 |
| 0x02080009 | TVM DVB-T RSE - HW Version 008.000.009 |
| 0x02080100 | TVM DVB-T RSE - HW Version 008.001.000 |
| 0x02080101 | TVM DVB-T RSE - HW Version 008.001.001 |
| 0x02080102 | TVM DVB-T RSE - HW Version 008.001.002 |
| 0x02080103 | TVM DVB-T RSE - HW Version 008.001.003 |
| 0x02080104 | TVM DVB-T RSE - HW Version 008.001.004 |
| 0x02080105 | TVM DVB-T RSE - HW Version 008.001.005 |
| 0x02080106 | TVM DVB-T RSE - HW Version 008.001.006 |
| 0x02080107 | TVM DVB-T RSE - HW Version 008.001.007 |
| 0x02080108 | TVM DVB-T RSE - HW Version 008.001.008 |
| 0x02080109 | TVM DVB-T RSE - HW Version 008.001.009 |
| 0x02080200 | TVM DVB-T RSE - HW Version 008.002.000 |
| 0x02080201 | TVM DVB-T RSE - HW Version 008.002.001 |
| 0x02080202 | TVM DVB-T RSE - HW Version 008.002.002 |
| 0x02080203 | TVM DVB-T RSE - HW Version 008.002.003 |
| 0x02080204 | TVM DVB-T RSE - HW Version 008.002.004 |
| 0x02080205 | TVM DVB-T RSE - HW Version 008.002.005 |
| 0x02080206 | TVM DVB-T RSE - HW Version 008.002.006 |
| 0x02080207 | TVM DVB-T RSE - HW Version 008.002.007 |
| 0x02080208 | TVM DVB-T RSE - HW Version 008.002.008 |
| 0x02080209 | TVM DVB-T RSE - HW Version 008.002.009 |
| 0x02080300 | TVM DVB-T RSE - HW Version 008.003.000 |
| 0x02080301 | TVM DVB-T RSE - HW Version 008.003.001 |
| 0x02080302 | TVM DVB-T RSE - HW Version 008.003.002 |
| 0x02080303 | TVM DVB-T RSE - HW Version 008.003.003 |
| 0x02080304 | TVM DVB-T RSE - HW Version 008.003.004 |
| 0x02080305 | TVM DVB-T RSE - HW Version 008.003.005 |
| 0x02080306 | TVM DVB-T RSE - HW Version 008.003.006 |
| 0x02080307 | TVM DVB-T RSE - HW Version 008.003.007 |
| 0x02080308 | TVM DVB-T RSE - HW Version 008.003.008 |
| 0x02080309 | TVM DVB-T RSE - HW Version 008.003.009 |
| 0x02080400 | TVM DVB-T RSE - HW Version 008.004.000 |
| 0x02080401 | TVM DVB-T RSE - HW Version 008.004.001 |
| 0x02080402 | TVM DVB-T RSE - HW Version 008.004.002 |
| 0x02080403 | TVM DVB-T RSE - HW Version 008.004.003 |
| 0x02080404 | TVM DVB-T RSE - HW Version 008.004.004 |
| 0x02080405 | TVM DVB-T RSE - HW Version 008.004.005 |
| 0x02080406 | TVM DVB-T RSE - HW Version 008.004.006 |
| 0x02080407 | TVM DVB-T RSE - HW Version 008.004.007 |
| 0x02080408 | TVM DVB-T RSE - HW Version 008.004.008 |
| 0x02080409 | TVM DVB-T RSE - HW Version 008.004.009 |
| 0x02080500 | TVM DVB-T RSE - HW Version 008.005.000 |
| 0x02080501 | TVM DVB-T RSE - HW Version 008.005.001 |
| 0x02080502 | TVM DVB-T RSE - HW Version 008.005.002 |
| 0x02080503 | TVM DVB-T RSE - HW Version 008.005.003 |
| 0x02080504 | TVM DVB-T RSE - HW Version 008.005.004 |
| 0x02080505 | TVM DVB-T RSE - HW Version 008.005.005 |
| 0x02080506 | TVM DVB-T RSE - HW Version 008.005.006 |
| 0x02080507 | TVM DVB-T RSE - HW Version 008.005.007 |
| 0x02080508 | TVM DVB-T RSE - HW Version 008.005.008 |
| 0x02080509 | TVM DVB-T RSE - HW Version 008.005.009 |
| 0x02080600 | TVM DVB-T RSE - HW Version 008.006.000 |
| 0x02080601 | TVM DVB-T RSE - HW Version 008.006.001 |
| 0x02080602 | TVM DVB-T RSE - HW Version 008.006.002 |
| 0x02080603 | TVM DVB-T RSE - HW Version 008.006.003 |
| 0x02080604 | TVM DVB-T RSE - HW Version 008.006.004 |
| 0x02080605 | TVM DVB-T RSE - HW Version 008.006.005 |
| 0x02080606 | TVM DVB-T RSE - HW Version 008.006.006 |
| 0x02080607 | TVM DVB-T RSE - HW Version 008.006.007 |
| 0x02080608 | TVM DVB-T RSE - HW Version 008.006.008 |
| 0x02080609 | TVM DVB-T RSE - HW Version 008.006.009 |
| 0x02080700 | TVM DVB-T RSE - HW Version 008.007.000 |
| 0x02080701 | TVM DVB-T RSE - HW Version 008.007.001 |
| 0x02080702 | TVM DVB-T RSE - HW Version 008.007.002 |
| 0x02080703 | TVM DVB-T RSE - HW Version 008.007.003 |
| 0x02080704 | TVM DVB-T RSE - HW Version 008.007.004 |
| 0x02080705 | TVM DVB-T RSE - HW Version 008.007.005 |
| 0x02080706 | TVM DVB-T RSE - HW Version 008.007.006 |
| 0x02080707 | TVM DVB-T RSE - HW Version 008.007.007 |
| 0x02080708 | TVM DVB-T RSE - HW Version 008.007.008 |
| 0x02080709 | TVM DVB-T RSE - HW Version 008.007.009 |
| 0x02080800 | TVM DVB-T RSE - HW Version 008.008.000 |
| 0x02080801 | TVM DVB-T RSE - HW Version 008.008.001 |
| 0x02080802 | TVM DVB-T RSE - HW Version 008.008.002 |
| 0x02080803 | TVM DVB-T RSE - HW Version 008.008.003 |
| 0x02080804 | TVM DVB-T RSE - HW Version 008.008.004 |
| 0x02080805 | TVM DVB-T RSE - HW Version 008.008.005 |
| 0x02080806 | TVM DVB-T RSE - HW Version 008.008.006 |
| 0x02080807 | TVM DVB-T RSE - HW Version 008.008.007 |
| 0x02080808 | TVM DVB-T RSE - HW Version 008.008.008 |
| 0x02080809 | TVM DVB-T RSE - HW Version 008.008.009 |
| 0x02080900 | TVM DVB-T RSE - HW Version 008.009.000 |
| 0x02080901 | TVM DVB-T RSE - HW Version 008.009.001 |
| 0x02080902 | TVM DVB-T RSE - HW Version 008.009.002 |
| 0x02080903 | TVM DVB-T RSE - HW Version 008.009.003 |
| 0x02080904 | TVM DVB-T RSE - HW Version 008.009.004 |
| 0x02080905 | TVM DVB-T RSE - HW Version 008.009.005 |
| 0x02080906 | TVM DVB-T RSE - HW Version 008.009.006 |
| 0x02080907 | TVM DVB-T RSE - HW Version 008.009.007 |
| 0x02080908 | TVM DVB-T RSE - HW Version 008.009.008 |
| 0x02080909 | TVM DVB-T RSE - HW Version 008.009.009 |
| 0x02090000 | TVM DVB-T RSE - HW Version 009.000.000 |
| 0x02090001 | TVM DVB-T RSE - HW Version 009.000.001 |
| 0x02090002 | TVM DVB-T RSE - HW Version 009.000.002 |
| 0x02090003 | TVM DVB-T RSE - HW Version 009.000.003 |
| 0x02090004 | TVM DVB-T RSE - HW Version 009.000.004 |
| 0x02090005 | TVM DVB-T RSE - HW Version 009.000.005 |
| 0x02090006 | TVM DVB-T RSE - HW Version 009.000.006 |
| 0x02090007 | TVM DVB-T RSE - HW Version 009.000.007 |
| 0x02090008 | TVM DVB-T RSE - HW Version 009.000.008 |
| 0x02090009 | TVM DVB-T RSE - HW Version 009.000.009 |
| 0x02090100 | TVM DVB-T RSE - HW Version 009.001.000 |
| 0x02090101 | TVM DVB-T RSE - HW Version 009.001.001 |
| 0x02090102 | TVM DVB-T RSE - HW Version 009.001.002 |
| 0x02090103 | TVM DVB-T RSE - HW Version 009.001.003 |
| 0x02090104 | TVM DVB-T RSE - HW Version 009.001.004 |
| 0x02090105 | TVM DVB-T RSE - HW Version 009.001.005 |
| 0x02090106 | TVM DVB-T RSE - HW Version 009.001.006 |
| 0x02090107 | TVM DVB-T RSE - HW Version 009.001.007 |
| 0x02090108 | TVM DVB-T RSE - HW Version 009.001.008 |
| 0x02090109 | TVM DVB-T RSE - HW Version 009.001.009 |
| 0x02090200 | TVM DVB-T RSE - HW Version 009.002.000 |
| 0x02090201 | TVM DVB-T RSE - HW Version 009.002.001 |
| 0x02090202 | TVM DVB-T RSE - HW Version 009.002.002 |
| 0x02090203 | TVM DVB-T RSE - HW Version 009.002.003 |
| 0x02090204 | TVM DVB-T RSE - HW Version 009.002.004 |
| 0x02090205 | TVM DVB-T RSE - HW Version 009.002.005 |
| 0x02090206 | TVM DVB-T RSE - HW Version 009.002.006 |
| 0x02090207 | TVM DVB-T RSE - HW Version 009.002.007 |
| 0x02090208 | TVM DVB-T RSE - HW Version 009.002.008 |
| 0x02090209 | TVM DVB-T RSE - HW Version 009.002.009 |
| 0x02090300 | TVM DVB-T RSE - HW Version 009.003.000 |
| 0x02090301 | TVM DVB-T RSE - HW Version 009.003.001 |
| 0x02090302 | TVM DVB-T RSE - HW Version 009.003.002 |
| 0x02090303 | TVM DVB-T RSE - HW Version 009.003.003 |
| 0x02090304 | TVM DVB-T RSE - HW Version 009.003.004 |
| 0x02090305 | TVM DVB-T RSE - HW Version 009.003.005 |
| 0x02090306 | TVM DVB-T RSE - HW Version 009.003.006 |
| 0x02090307 | TVM DVB-T RSE - HW Version 009.003.007 |
| 0x02090308 | TVM DVB-T RSE - HW Version 009.003.008 |
| 0x02090309 | TVM DVB-T RSE - HW Version 009.003.009 |
| 0x02090400 | TVM DVB-T RSE - HW Version 009.004.000 |
| 0x02090401 | TVM DVB-T RSE - HW Version 009.004.001 |
| 0x02090402 | TVM DVB-T RSE - HW Version 009.004.002 |
| 0x02090403 | TVM DVB-T RSE - HW Version 009.004.003 |
| 0x02090404 | TVM DVB-T RSE - HW Version 009.004.004 |
| 0x02090405 | TVM DVB-T RSE - HW Version 009.004.005 |
| 0x02090406 | TVM DVB-T RSE - HW Version 009.004.006 |
| 0x02090407 | TVM DVB-T RSE - HW Version 009.004.007 |
| 0x02090408 | TVM DVB-T RSE - HW Version 009.004.008 |
| 0x02090409 | TVM DVB-T RSE - HW Version 009.004.009 |
| 0x02090500 | TVM DVB-T RSE - HW Version 009.005.000 |
| 0x02090501 | TVM DVB-T RSE - HW Version 009.005.001 |
| 0x02090502 | TVM DVB-T RSE - HW Version 009.005.002 |
| 0x02090503 | TVM DVB-T RSE - HW Version 009.005.003 |
| 0x02090504 | TVM DVB-T RSE - HW Version 009.005.004 |
| 0x02090505 | TVM DVB-T RSE - HW Version 009.005.005 |
| 0x02090506 | TVM DVB-T RSE - HW Version 009.005.006 |
| 0x02090507 | TVM DVB-T RSE - HW Version 009.005.007 |
| 0x02090508 | TVM DVB-T RSE - HW Version 009.005.008 |
| 0x02090509 | TVM DVB-T RSE - HW Version 009.005.009 |
| 0x02090600 | TVM DVB-T RSE - HW Version 009.006.000 |
| 0x02090601 | TVM DVB-T RSE - HW Version 009.006.001 |
| 0x02090602 | TVM DVB-T RSE - HW Version 009.006.002 |
| 0x02090603 | TVM DVB-T RSE - HW Version 009.006.003 |
| 0x02090604 | TVM DVB-T RSE - HW Version 009.006.004 |
| 0x02090605 | TVM DVB-T RSE - HW Version 009.006.005 |
| 0x02090606 | TVM DVB-T RSE - HW Version 009.006.006 |
| 0x02090607 | TVM DVB-T RSE - HW Version 009.006.007 |
| 0x02090608 | TVM DVB-T RSE - HW Version 009.006.008 |
| 0x02090609 | TVM DVB-T RSE - HW Version 009.006.009 |
| 0x02090700 | TVM DVB-T RSE - HW Version 009.007.000 |
| 0x02090701 | TVM DVB-T RSE - HW Version 009.007.001 |
| 0x02090702 | TVM DVB-T RSE - HW Version 009.007.002 |
| 0x02090703 | TVM DVB-T RSE - HW Version 009.007.003 |
| 0x02090704 | TVM DVB-T RSE - HW Version 009.007.004 |
| 0x02090705 | TVM DVB-T RSE - HW Version 009.007.005 |
| 0x02090706 | TVM DVB-T RSE - HW Version 009.007.006 |
| 0x02090707 | TVM DVB-T RSE - HW Version 009.007.007 |
| 0x02090708 | TVM DVB-T RSE - HW Version 009.007.008 |
| 0x02090709 | TVM DVB-T RSE - HW Version 009.007.009 |
| 0x02090800 | TVM DVB-T RSE - HW Version 009.008.000 |
| 0x02090801 | TVM DVB-T RSE - HW Version 009.008.001 |
| 0x02090802 | TVM DVB-T RSE - HW Version 009.008.002 |
| 0x02090803 | TVM DVB-T RSE - HW Version 009.008.003 |
| 0x02090804 | TVM DVB-T RSE - HW Version 009.008.004 |
| 0x02090805 | TVM DVB-T RSE - HW Version 009.008.005 |
| 0x02090806 | TVM DVB-T RSE - HW Version 009.008.006 |
| 0x02090807 | TVM DVB-T RSE - HW Version 009.008.007 |
| 0x02090808 | TVM DVB-T RSE - HW Version 009.008.008 |
| 0x02090809 | TVM DVB-T RSE - HW Version 009.008.009 |
| 0x02090900 | TVM DVB-T RSE - HW Version 009.009.000 |
| 0x02090901 | TVM DVB-T RSE - HW Version 009.009.001 |
| 0x02090902 | TVM DVB-T RSE - HW Version 009.009.002 |
| 0x02090903 | TVM DVB-T RSE - HW Version 009.009.003 |
| 0x02090904 | TVM DVB-T RSE - HW Version 009.009.004 |
| 0x02090905 | TVM DVB-T RSE - HW Version 009.009.005 |
| 0x02090906 | TVM DVB-T RSE - HW Version 009.009.006 |
| 0x02090907 | TVM DVB-T RSE - HW Version 009.009.007 |
| 0x02090908 | TVM DVB-T RSE - HW Version 009.009.008 |
| 0x02090909 | TVM DVB-T RSE - HW Version 009.009.009 |
| 0x03050000 | TVM ISDB-T - HW Version 005.000.000 |
| 0x03050001 | TVM ISDB-T - HW Version 005.000.001 |
| 0x03050002 | TVM ISDB-T - HW Version 005.000.002 |
| 0x03050003 | TVM ISDB-T - HW Version 005.000.003 |
| 0x03050004 | TVM ISDB-T - HW Version 005.000.004 |
| 0x03050005 | TVM ISDB-T - HW Version 005.000.005 |
| 0x03050006 | TVM ISDB-T - HW Version 005.000.006 |
| 0x03050007 | TVM ISDB-T - HW Version 005.000.007 |
| 0x03050008 | TVM ISDB-T - HW Version 005.000.008 |
| 0x03050009 | TVM ISDB-T - HW Version 005.000.009 |
| 0x03050100 | TVM ISDB-T - HW Version 005.001.000 |
| 0x03050101 | TVM ISDB-T - HW Version 005.001.001 |
| 0x03050102 | TVM ISDB-T - HW Version 005.001.002 |
| 0x03050103 | TVM ISDB-T - HW Version 005.001.003 |
| 0x03050104 | TVM ISDB-T - HW Version 005.001.004 |
| 0x03050105 | TVM ISDB-T - HW Version 005.001.005 |
| 0x03050106 | TVM ISDB-T - HW Version 005.001.006 |
| 0x03050107 | TVM ISDB-T - HW Version 005.001.007 |
| 0x03050108 | TVM ISDB-T - HW Version 005.001.008 |
| 0x03050109 | TVM ISDB-T - HW Version 005.001.009 |
| 0x03050200 | TVM ISDB-T - HW Version 005.002.000 |
| 0x03050201 | TVM ISDB-T - HW Version 005.002.001 |
| 0x03050202 | TVM ISDB-T - HW Version 005.002.002 |
| 0x03050203 | TVM ISDB-T - HW Version 005.002.003 |
| 0x03050204 | TVM ISDB-T - HW Version 005.002.004 |
| 0x03050205 | TVM ISDB-T - HW Version 005.002.005 |
| 0x03050206 | TVM ISDB-T - HW Version 005.002.006 |
| 0x03050207 | TVM ISDB-T - HW Version 005.002.007 |
| 0x03050208 | TVM ISDB-T - HW Version 005.002.008 |
| 0x03050209 | TVM ISDB-T - HW Version 005.002.009 |
| 0x03050300 | TVM ISDB-T - HW Version 005.003.000 |
| 0x03050301 | TVM ISDB-T - HW Version 005.003.001 |
| 0x03050302 | TVM ISDB-T - HW Version 005.003.002 |
| 0x03050303 | TVM ISDB-T - HW Version 005.003.003 |
| 0x03050304 | TVM ISDB-T - HW Version 005.003.004 |
| 0x03050305 | TVM ISDB-T - HW Version 005.003.005 |
| 0x03050306 | TVM ISDB-T - HW Version 005.003.006 |
| 0x03050307 | TVM ISDB-T - HW Version 005.003.007 |
| 0x03050308 | TVM ISDB-T - HW Version 005.003.008 |
| 0x03050309 | TVM ISDB-T - HW Version 005.003.009 |
| 0x03050400 | TVM ISDB-T - HW Version 005.004.000 |
| 0x03050401 | TVM ISDB-T - HW Version 005.004.001 |
| 0x03050402 | TVM ISDB-T - HW Version 005.004.002 |
| 0x03050403 | TVM ISDB-T - HW Version 005.004.003 |
| 0x03050404 | TVM ISDB-T - HW Version 005.004.004 |
| 0x03050405 | TVM ISDB-T - HW Version 005.004.005 |
| 0x03050406 | TVM ISDB-T - HW Version 005.004.006 |
| 0x03050407 | TVM ISDB-T - HW Version 005.004.007 |
| 0x03050408 | TVM ISDB-T - HW Version 005.004.008 |
| 0x03050409 | TVM ISDB-T - HW Version 005.004.009 |
| 0x03050500 | TVM ISDB-T - HW Version 005.005.000 |
| 0x03050501 | TVM ISDB-T - HW Version 005.005.001 |
| 0x03050502 | TVM ISDB-T - HW Version 005.005.002 |
| 0x03050503 | TVM ISDB-T - HW Version 005.005.003 |
| 0x03050504 | TVM ISDB-T - HW Version 005.005.004 |
| 0x03050505 | TVM ISDB-T - HW Version 005.005.005 |
| 0x03050506 | TVM ISDB-T - HW Version 005.005.006 |
| 0x03050507 | TVM ISDB-T - HW Version 005.005.007 |
| 0x03050508 | TVM ISDB-T - HW Version 005.005.008 |
| 0x03050509 | TVM ISDB-T - HW Version 005.005.009 |
| 0x03050600 | TVM ISDB-T - HW Version 005.006.000 |
| 0x03050601 | TVM ISDB-T - HW Version 005.006.001 |
| 0x03050602 | TVM ISDB-T - HW Version 005.006.002 |
| 0x03050603 | TVM ISDB-T - HW Version 005.006.003 |
| 0x03050604 | TVM ISDB-T - HW Version 005.006.004 |
| 0x03050605 | TVM ISDB-T - HW Version 005.006.005 |
| 0x03050606 | TVM ISDB-T - HW Version 005.006.006 |
| 0x03050607 | TVM ISDB-T - HW Version 005.006.007 |
| 0x03050608 | TVM ISDB-T - HW Version 005.006.008 |
| 0x03050609 | TVM ISDB-T - HW Version 005.006.009 |
| 0x03050700 | TVM ISDB-T - HW Version 005.007.000 |
| 0x03050701 | TVM ISDB-T - HW Version 005.007.001 |
| 0x03050702 | TVM ISDB-T - HW Version 005.007.002 |
| 0x03050703 | TVM ISDB-T - HW Version 005.007.003 |
| 0x03050704 | TVM ISDB-T - HW Version 005.007.004 |
| 0x03050705 | TVM ISDB-T - HW Version 005.007.005 |
| 0x03050706 | TVM ISDB-T - HW Version 005.007.006 |
| 0x03050707 | TVM ISDB-T - HW Version 005.007.007 |
| 0x03050708 | TVM ISDB-T - HW Version 005.007.008 |
| 0x03050709 | TVM ISDB-T - HW Version 005.007.009 |
| 0x03050800 | TVM ISDB-T - HW Version 005.008.000 |
| 0x03050801 | TVM ISDB-T - HW Version 005.008.001 |
| 0x03050802 | TVM ISDB-T - HW Version 005.008.002 |
| 0x03050803 | TVM ISDB-T - HW Version 005.008.003 |
| 0x03050804 | TVM ISDB-T - HW Version 005.008.004 |
| 0x03050805 | TVM ISDB-T - HW Version 005.008.005 |
| 0x03050806 | TVM ISDB-T - HW Version 005.008.006 |
| 0x03050807 | TVM ISDB-T - HW Version 005.008.007 |
| 0x03050808 | TVM ISDB-T - HW Version 005.008.008 |
| 0x03050809 | TVM ISDB-T - HW Version 005.008.009 |
| 0x03050900 | TVM ISDB-T - HW Version 005.009.000 |
| 0x03050901 | TVM ISDB-T - HW Version 005.009.001 |
| 0x03050902 | TVM ISDB-T - HW Version 005.009.002 |
| 0x03050903 | TVM ISDB-T - HW Version 005.009.003 |
| 0x03050904 | TVM ISDB-T - HW Version 005.009.004 |
| 0x03050905 | TVM ISDB-T - HW Version 005.009.005 |
| 0x03050906 | TVM ISDB-T - HW Version 005.009.006 |
| 0x03050907 | TVM ISDB-T - HW Version 005.009.007 |
| 0x03050908 | TVM ISDB-T - HW Version 005.009.008 |
| 0x03050909 | TVM ISDB-T - HW Version 005.009.009 |
| 0x03060000 | TVM ISDB-T - HW Version 006.000.000 |
| 0x03060001 | TVM ISDB-T - HW Version 006.000.001 |
| 0x03060002 | TVM ISDB-T - HW Version 006.000.002 |
| 0x03060003 | TVM ISDB-T - HW Version 006.000.003 |
| 0x03060004 | TVM ISDB-T - HW Version 006.000.004 |
| 0x03060005 | TVM ISDB-T - HW Version 006.000.005 |
| 0x03060006 | TVM ISDB-T - HW Version 006.000.006 |
| 0x03060007 | TVM ISDB-T - HW Version 006.000.007 |
| 0x03060008 | TVM ISDB-T - HW Version 006.000.008 |
| 0x03060009 | TVM ISDB-T - HW Version 006.000.009 |
| 0x03060100 | TVM ISDB-T - HW Version 006.001.000 |
| 0x03060101 | TVM ISDB-T - HW Version 006.001.001 |
| 0x03060102 | TVM ISDB-T - HW Version 006.001.002 |
| 0x03060103 | TVM ISDB-T - HW Version 006.001.003 |
| 0x03060104 | TVM ISDB-T - HW Version 006.001.004 |
| 0x03060105 | TVM ISDB-T - HW Version 006.001.005 |
| 0x03060106 | TVM ISDB-T - HW Version 006.001.006 |
| 0x03060107 | TVM ISDB-T - HW Version 006.001.007 |
| 0x03060108 | TVM ISDB-T - HW Version 006.001.008 |
| 0x03060109 | TVM ISDB-T - HW Version 006.001.009 |
| 0x03060200 | TVM ISDB-T - HW Version 006.002.000 |
| 0x03060201 | TVM ISDB-T - HW Version 006.002.001 |
| 0x03060202 | TVM ISDB-T - HW Version 006.002.002 |
| 0x03060203 | TVM ISDB-T - HW Version 006.002.003 |
| 0x03060204 | TVM ISDB-T - HW Version 006.002.004 |
| 0x03060205 | TVM ISDB-T - HW Version 006.002.005 |
| 0x03060206 | TVM ISDB-T - HW Version 006.002.006 |
| 0x03060207 | TVM ISDB-T - HW Version 006.002.007 |
| 0x03060208 | TVM ISDB-T - HW Version 006.002.008 |
| 0x03060209 | TVM ISDB-T - HW Version 006.002.009 |
| 0x03060300 | TVM ISDB-T - HW Version 006.003.000 |
| 0x03060301 | TVM ISDB-T - HW Version 006.003.001 |
| 0x03060302 | TVM ISDB-T - HW Version 006.003.002 |
| 0x03060303 | TVM ISDB-T - HW Version 006.003.003 |
| 0x03060304 | TVM ISDB-T - HW Version 006.003.004 |
| 0x03060305 | TVM ISDB-T - HW Version 006.003.005 |
| 0x03060306 | TVM ISDB-T - HW Version 006.003.006 |
| 0x03060307 | TVM ISDB-T - HW Version 006.003.007 |
| 0x03060308 | TVM ISDB-T - HW Version 006.003.008 |
| 0x03060309 | TVM ISDB-T - HW Version 006.003.009 |
| 0x03060400 | TVM ISDB-T - HW Version 006.004.000 |
| 0x03060401 | TVM ISDB-T - HW Version 006.004.001 |
| 0x03060402 | TVM ISDB-T - HW Version 006.004.002 |
| 0x03060403 | TVM ISDB-T - HW Version 006.004.003 |
| 0x03060404 | TVM ISDB-T - HW Version 006.004.004 |
| 0x03060405 | TVM ISDB-T - HW Version 006.004.005 |
| 0x03060406 | TVM ISDB-T - HW Version 006.004.006 |
| 0x03060407 | TVM ISDB-T - HW Version 006.004.007 |
| 0x03060408 | TVM ISDB-T - HW Version 006.004.008 |
| 0x03060409 | TVM ISDB-T - HW Version 006.004.009 |
| 0x03060500 | TVM ISDB-T - HW Version 006.005.000 |
| 0x03060501 | TVM ISDB-T - HW Version 006.005.001 |
| 0x03060502 | TVM ISDB-T - HW Version 006.005.002 |
| 0x03060503 | TVM ISDB-T - HW Version 006.005.003 |
| 0x03060504 | TVM ISDB-T - HW Version 006.005.004 |
| 0x03060505 | TVM ISDB-T - HW Version 006.005.005 |
| 0x03060506 | TVM ISDB-T - HW Version 006.005.006 |
| 0x03060507 | TVM ISDB-T - HW Version 006.005.007 |
| 0x03060508 | TVM ISDB-T - HW Version 006.005.008 |
| 0x03060509 | TVM ISDB-T - HW Version 006.005.009 |
| 0x03060600 | TVM ISDB-T - HW Version 006.006.000 |
| 0x03060601 | TVM ISDB-T - HW Version 006.006.001 |
| 0x03060602 | TVM ISDB-T - HW Version 006.006.002 |
| 0x03060603 | TVM ISDB-T - HW Version 006.006.003 |
| 0x03060604 | TVM ISDB-T - HW Version 006.006.004 |
| 0x03060605 | TVM ISDB-T - HW Version 006.006.005 |
| 0x03060606 | TVM ISDB-T - HW Version 006.006.006 |
| 0x03060607 | TVM ISDB-T - HW Version 006.006.007 |
| 0x03060608 | TVM ISDB-T - HW Version 006.006.008 |
| 0x03060609 | TVM ISDB-T - HW Version 006.006.009 |
| 0x03060700 | TVM ISDB-T - HW Version 006.007.000 |
| 0x03060701 | TVM ISDB-T - HW Version 006.007.001 |
| 0x03060702 | TVM ISDB-T - HW Version 006.007.002 |
| 0x03060703 | TVM ISDB-T - HW Version 006.007.003 |
| 0x03060704 | TVM ISDB-T - HW Version 006.007.004 |
| 0x03060705 | TVM ISDB-T - HW Version 006.007.005 |
| 0x03060706 | TVM ISDB-T - HW Version 006.007.006 |
| 0x03060707 | TVM ISDB-T - HW Version 006.007.007 |
| 0x03060708 | TVM ISDB-T - HW Version 006.007.008 |
| 0x03060709 | TVM ISDB-T - HW Version 006.007.009 |
| 0x03060800 | TVM ISDB-T - HW Version 006.008.000 |
| 0x03060801 | TVM ISDB-T - HW Version 006.008.001 |
| 0x03060802 | TVM ISDB-T - HW Version 006.008.002 |
| 0x03060803 | TVM ISDB-T - HW Version 006.008.003 |
| 0x03060804 | TVM ISDB-T - HW Version 006.008.004 |
| 0x03060805 | TVM ISDB-T - HW Version 006.008.005 |
| 0x03060806 | TVM ISDB-T - HW Version 006.008.006 |
| 0x03060807 | TVM ISDB-T - HW Version 006.008.007 |
| 0x03060808 | TVM ISDB-T - HW Version 006.008.008 |
| 0x03060809 | TVM ISDB-T - HW Version 006.008.009 |
| 0x03060900 | TVM ISDB-T - HW Version 006.009.000 |
| 0x03060901 | TVM ISDB-T - HW Version 006.009.001 |
| 0x03060902 | TVM ISDB-T - HW Version 006.009.002 |
| 0x03060903 | TVM ISDB-T - HW Version 006.009.003 |
| 0x03060904 | TVM ISDB-T - HW Version 006.009.004 |
| 0x03060905 | TVM ISDB-T - HW Version 006.009.005 |
| 0x03060906 | TVM ISDB-T - HW Version 006.009.006 |
| 0x03060907 | TVM ISDB-T - HW Version 006.009.007 |
| 0x03060908 | TVM ISDB-T - HW Version 006.009.008 |
| 0x03060909 | TVM ISDB-T - HW Version 006.009.009 |
| 0x03070000 | TVM ISDB-T - HW Version 007.000.000 |
| 0x03070001 | TVM ISDB-T - HW Version 007.000.001 |
| 0x03070002 | TVM ISDB-T - HW Version 007.000.002 |
| 0x03070003 | TVM ISDB-T - HW Version 007.000.003 |
| 0x03070004 | TVM ISDB-T - HW Version 007.000.004 |
| 0x03070005 | TVM ISDB-T - HW Version 007.000.005 |
| 0x03070006 | TVM ISDB-T - HW Version 007.000.006 |
| 0x03070007 | TVM ISDB-T - HW Version 007.000.007 |
| 0x03070008 | TVM ISDB-T - HW Version 007.000.008 |
| 0x03070009 | TVM ISDB-T - HW Version 007.000.009 |
| 0x03070100 | TVM ISDB-T - HW Version 007.001.000 |
| 0x03070101 | TVM ISDB-T - HW Version 007.001.001 |
| 0x03070102 | TVM ISDB-T - HW Version 007.001.002 |
| 0x03070103 | TVM ISDB-T - HW Version 007.001.003 |
| 0x03070104 | TVM ISDB-T - HW Version 007.001.004 |
| 0x03070105 | TVM ISDB-T - HW Version 007.001.005 |
| 0x03070106 | TVM ISDB-T - HW Version 007.001.006 |
| 0x03070107 | TVM ISDB-T - HW Version 007.001.007 |
| 0x03070108 | TVM ISDB-T - HW Version 007.001.008 |
| 0x03070109 | TVM ISDB-T - HW Version 007.001.009 |
| 0x03070200 | TVM ISDB-T - HW Version 007.002.000 |
| 0x03070201 | TVM ISDB-T - HW Version 007.002.001 |
| 0x03070202 | TVM ISDB-T - HW Version 007.002.002 |
| 0x03070203 | TVM ISDB-T - HW Version 007.002.003 |
| 0x03070204 | TVM ISDB-T - HW Version 007.002.004 |
| 0x03070205 | TVM ISDB-T - HW Version 007.002.005 |
| 0x03070206 | TVM ISDB-T - HW Version 007.002.006 |
| 0x03070207 | TVM ISDB-T - HW Version 007.002.007 |
| 0x03070208 | TVM ISDB-T - HW Version 007.002.008 |
| 0x03070209 | TVM ISDB-T - HW Version 007.002.009 |
| 0x03070300 | TVM ISDB-T - HW Version 007.003.000 |
| 0x03070301 | TVM ISDB-T - HW Version 007.003.001 |
| 0x03070302 | TVM ISDB-T - HW Version 007.003.002 |
| 0x03070303 | TVM ISDB-T - HW Version 007.003.003 |
| 0x03070304 | TVM ISDB-T - HW Version 007.003.004 |
| 0x03070305 | TVM ISDB-T - HW Version 007.003.005 |
| 0x03070306 | TVM ISDB-T - HW Version 007.003.006 |
| 0x03070307 | TVM ISDB-T - HW Version 007.003.007 |
| 0x03070308 | TVM ISDB-T - HW Version 007.003.008 |
| 0x03070309 | TVM ISDB-T - HW Version 007.003.009 |
| 0x03070400 | TVM ISDB-T - HW Version 007.004.000 |
| 0x03070401 | TVM ISDB-T - HW Version 007.004.001 |
| 0x03070402 | TVM ISDB-T - HW Version 007.004.002 |
| 0x03070403 | TVM ISDB-T - HW Version 007.004.003 |
| 0x03070404 | TVM ISDB-T - HW Version 007.004.004 |
| 0x03070405 | TVM ISDB-T - HW Version 007.004.005 |
| 0x03070406 | TVM ISDB-T - HW Version 007.004.006 |
| 0x03070407 | TVM ISDB-T - HW Version 007.004.007 |
| 0x03070408 | TVM ISDB-T - HW Version 007.004.008 |
| 0x03070409 | TVM ISDB-T - HW Version 007.004.009 |
| 0x03070500 | TVM ISDB-T - HW Version 007.005.000 |
| 0x03070501 | TVM ISDB-T - HW Version 007.005.001 |
| 0x03070502 | TVM ISDB-T - HW Version 007.005.002 |
| 0x03070503 | TVM ISDB-T - HW Version 007.005.003 |
| 0x03070504 | TVM ISDB-T - HW Version 007.005.004 |
| 0x03070505 | TVM ISDB-T - HW Version 007.005.005 |
| 0x03070506 | TVM ISDB-T - HW Version 007.005.006 |
| 0x03070507 | TVM ISDB-T - HW Version 007.005.007 |
| 0x03070508 | TVM ISDB-T - HW Version 007.005.008 |
| 0x03070509 | TVM ISDB-T - HW Version 007.005.009 |
| 0x03070600 | TVM ISDB-T - HW Version 007.006.000 |
| 0x03070601 | TVM ISDB-T - HW Version 007.006.001 |
| 0x03070602 | TVM ISDB-T - HW Version 007.006.002 |
| 0x03070603 | TVM ISDB-T - HW Version 007.006.003 |
| 0x03070604 | TVM ISDB-T - HW Version 007.006.004 |
| 0x03070605 | TVM ISDB-T - HW Version 007.006.005 |
| 0x03070606 | TVM ISDB-T - HW Version 007.006.006 |
| 0x03070607 | TVM ISDB-T - HW Version 007.006.007 |
| 0x03070608 | TVM ISDB-T - HW Version 007.006.008 |
| 0x03070609 | TVM ISDB-T - HW Version 007.006.009 |
| 0x03070700 | TVM ISDB-T - HW Version 007.007.000 |
| 0x03070701 | TVM ISDB-T - HW Version 007.007.001 |
| 0x03070702 | TVM ISDB-T - HW Version 007.007.002 |
| 0x03070703 | TVM ISDB-T - HW Version 007.007.003 |
| 0x03070704 | TVM ISDB-T - HW Version 007.007.004 |
| 0x03070705 | TVM ISDB-T - HW Version 007.007.005 |
| 0x03070706 | TVM ISDB-T - HW Version 007.007.006 |
| 0x03070707 | TVM ISDB-T - HW Version 007.007.007 |
| 0x03070708 | TVM ISDB-T - HW Version 007.007.008 |
| 0x03070709 | TVM ISDB-T - HW Version 007.007.009 |
| 0x03070800 | TVM ISDB-T - HW Version 007.008.000 |
| 0x03070801 | TVM ISDB-T - HW Version 007.008.001 |
| 0x03070802 | TVM ISDB-T - HW Version 007.008.002 |
| 0x03070803 | TVM ISDB-T - HW Version 007.008.003 |
| 0x03070804 | TVM ISDB-T - HW Version 007.008.004 |
| 0x03070805 | TVM ISDB-T - HW Version 007.008.005 |
| 0x03070806 | TVM ISDB-T - HW Version 007.008.006 |
| 0x03070807 | TVM ISDB-T - HW Version 007.008.007 |
| 0x03070808 | TVM ISDB-T - HW Version 007.008.008 |
| 0x03070809 | TVM ISDB-T - HW Version 007.008.009 |
| 0x03070900 | TVM ISDB-T - HW Version 007.009.000 |
| 0x03070901 | TVM ISDB-T - HW Version 007.009.001 |
| 0x03070902 | TVM ISDB-T - HW Version 007.009.002 |
| 0x03070903 | TVM ISDB-T - HW Version 007.009.003 |
| 0x03070904 | TVM ISDB-T - HW Version 007.009.004 |
| 0x03070905 | TVM ISDB-T - HW Version 007.009.005 |
| 0x03070906 | TVM ISDB-T - HW Version 007.009.006 |
| 0x03070907 | TVM ISDB-T - HW Version 007.009.007 |
| 0x03070908 | TVM ISDB-T - HW Version 007.009.008 |
| 0x03070909 | TVM ISDB-T - HW Version 007.009.009 |
| 0x03080000 | TVM ISDB-T - HW Version 008.000.000 |
| 0x03080001 | TVM ISDB-T - HW Version 008.000.001 |
| 0x03080002 | TVM ISDB-T - HW Version 008.000.002 |
| 0x03080003 | TVM ISDB-T - HW Version 008.000.003 |
| 0x03080004 | TVM ISDB-T - HW Version 008.000.004 |
| 0x03080005 | TVM ISDB-T - HW Version 008.000.005 |
| 0x03080006 | TVM ISDB-T - HW Version 008.000.006 |
| 0x03080007 | TVM ISDB-T - HW Version 008.000.007 |
| 0x03080008 | TVM ISDB-T - HW Version 008.000.008 |
| 0x03080009 | TVM ISDB-T - HW Version 008.000.009 |
| 0x03080100 | TVM ISDB-T - HW Version 008.001.000 |
| 0x03080101 | TVM ISDB-T - HW Version 008.001.001 |
| 0x03080102 | TVM ISDB-T - HW Version 008.001.002 |
| 0x03080103 | TVM ISDB-T - HW Version 008.001.003 |
| 0x03080104 | TVM ISDB-T - HW Version 008.001.004 |
| 0x03080105 | TVM ISDB-T - HW Version 008.001.005 |
| 0x03080106 | TVM ISDB-T - HW Version 008.001.006 |
| 0x03080107 | TVM ISDB-T - HW Version 008.001.007 |
| 0x03080108 | TVM ISDB-T - HW Version 008.001.008 |
| 0x03080109 | TVM ISDB-T - HW Version 008.001.009 |
| 0x03080200 | TVM ISDB-T - HW Version 008.002.000 |
| 0x03080201 | TVM ISDB-T - HW Version 008.002.001 |
| 0x03080202 | TVM ISDB-T - HW Version 008.002.002 |
| 0x03080203 | TVM ISDB-T - HW Version 008.002.003 |
| 0x03080204 | TVM ISDB-T - HW Version 008.002.004 |
| 0x03080205 | TVM ISDB-T - HW Version 008.002.005 |
| 0x03080206 | TVM ISDB-T - HW Version 008.002.006 |
| 0x03080207 | TVM ISDB-T - HW Version 008.002.007 |
| 0x03080208 | TVM ISDB-T - HW Version 008.002.008 |
| 0x03080209 | TVM ISDB-T - HW Version 008.002.009 |
| 0x03080300 | TVM ISDB-T - HW Version 008.003.000 |
| 0x03080301 | TVM ISDB-T - HW Version 008.003.001 |
| 0x03080302 | TVM ISDB-T - HW Version 008.003.002 |
| 0x03080303 | TVM ISDB-T - HW Version 008.003.003 |
| 0x03080304 | TVM ISDB-T - HW Version 008.003.004 |
| 0x03080305 | TVM ISDB-T - HW Version 008.003.005 |
| 0x03080306 | TVM ISDB-T - HW Version 008.003.006 |
| 0x03080307 | TVM ISDB-T - HW Version 008.003.007 |
| 0x03080308 | TVM ISDB-T - HW Version 008.003.008 |
| 0x03080309 | TVM ISDB-T - HW Version 008.003.009 |
| 0x03080400 | TVM ISDB-T - HW Version 008.004.000 |
| 0x03080401 | TVM ISDB-T - HW Version 008.004.001 |
| 0x03080402 | TVM ISDB-T - HW Version 008.004.002 |
| 0x03080403 | TVM ISDB-T - HW Version 008.004.003 |
| 0x03080404 | TVM ISDB-T - HW Version 008.004.004 |
| 0x03080405 | TVM ISDB-T - HW Version 008.004.005 |
| 0x03080406 | TVM ISDB-T - HW Version 008.004.006 |
| 0x03080407 | TVM ISDB-T - HW Version 008.004.007 |
| 0x03080408 | TVM ISDB-T - HW Version 008.004.008 |
| 0x03080409 | TVM ISDB-T - HW Version 008.004.009 |
| 0x03080500 | TVM ISDB-T - HW Version 008.005.000 |
| 0x03080501 | TVM ISDB-T - HW Version 008.005.001 |
| 0x03080502 | TVM ISDB-T - HW Version 008.005.002 |
| 0x03080503 | TVM ISDB-T - HW Version 008.005.003 |
| 0x03080504 | TVM ISDB-T - HW Version 008.005.004 |
| 0x03080505 | TVM ISDB-T - HW Version 008.005.005 |
| 0x03080506 | TVM ISDB-T - HW Version 008.005.006 |
| 0x03080507 | TVM ISDB-T - HW Version 008.005.007 |
| 0x03080508 | TVM ISDB-T - HW Version 008.005.008 |
| 0x03080509 | TVM ISDB-T - HW Version 008.005.009 |
| 0x03080600 | TVM ISDB-T - HW Version 008.006.000 |
| 0x03080601 | TVM ISDB-T - HW Version 008.006.001 |
| 0x03080602 | TVM ISDB-T - HW Version 008.006.002 |
| 0x03080603 | TVM ISDB-T - HW Version 008.006.003 |
| 0x03080604 | TVM ISDB-T - HW Version 008.006.004 |
| 0x03080605 | TVM ISDB-T - HW Version 008.006.005 |
| 0x03080606 | TVM ISDB-T - HW Version 008.006.006 |
| 0x03080607 | TVM ISDB-T - HW Version 008.006.007 |
| 0x03080608 | TVM ISDB-T - HW Version 008.006.008 |
| 0x03080609 | TVM ISDB-T - HW Version 008.006.009 |
| 0x03080700 | TVM ISDB-T - HW Version 008.007.000 |
| 0x03080701 | TVM ISDB-T - HW Version 008.007.001 |
| 0x03080702 | TVM ISDB-T - HW Version 008.007.002 |
| 0x03080703 | TVM ISDB-T - HW Version 008.007.003 |
| 0x03080704 | TVM ISDB-T - HW Version 008.007.004 |
| 0x03080705 | TVM ISDB-T - HW Version 008.007.005 |
| 0x03080706 | TVM ISDB-T - HW Version 008.007.006 |
| 0x03080707 | TVM ISDB-T - HW Version 008.007.007 |
| 0x03080708 | TVM ISDB-T - HW Version 008.007.008 |
| 0x03080709 | TVM ISDB-T - HW Version 008.007.009 |
| 0x03080800 | TVM ISDB-T - HW Version 008.008.000 |
| 0x03080801 | TVM ISDB-T - HW Version 008.008.001 |
| 0x03080802 | TVM ISDB-T - HW Version 008.008.002 |
| 0x03080803 | TVM ISDB-T - HW Version 008.008.003 |
| 0x03080804 | TVM ISDB-T - HW Version 008.008.004 |
| 0x03080805 | TVM ISDB-T - HW Version 008.008.005 |
| 0x03080806 | TVM ISDB-T - HW Version 008.008.006 |
| 0x03080807 | TVM ISDB-T - HW Version 008.008.007 |
| 0x03080808 | TVM ISDB-T - HW Version 008.008.008 |
| 0x03080809 | TVM ISDB-T - HW Version 008.008.009 |
| 0x03080900 | TVM ISDB-T - HW Version 008.009.000 |
| 0x03080901 | TVM ISDB-T - HW Version 008.009.001 |
| 0x03080902 | TVM ISDB-T - HW Version 008.009.002 |
| 0x03080903 | TVM ISDB-T - HW Version 008.009.003 |
| 0x03080904 | TVM ISDB-T - HW Version 008.009.004 |
| 0x03080905 | TVM ISDB-T - HW Version 008.009.005 |
| 0x03080906 | TVM ISDB-T - HW Version 008.009.006 |
| 0x03080907 | TVM ISDB-T - HW Version 008.009.007 |
| 0x03080908 | TVM ISDB-T - HW Version 008.009.008 |
| 0x03080909 | TVM ISDB-T - HW Version 008.009.009 |
| 0x03090000 | TVM ISDB-T - HW Version 009.000.000 |
| 0x03090001 | TVM ISDB-T - HW Version 009.000.001 |
| 0x03090002 | TVM ISDB-T - HW Version 009.000.002 |
| 0x03090003 | TVM ISDB-T - HW Version 009.000.003 |
| 0x03090004 | TVM ISDB-T - HW Version 009.000.004 |
| 0x03090005 | TVM ISDB-T - HW Version 009.000.005 |
| 0x03090006 | TVM ISDB-T - HW Version 009.000.006 |
| 0x03090007 | TVM ISDB-T - HW Version 009.000.007 |
| 0x03090008 | TVM ISDB-T - HW Version 009.000.008 |
| 0x03090009 | TVM ISDB-T - HW Version 009.000.009 |
| 0x03090100 | TVM ISDB-T - HW Version 009.001.000 |
| 0x03090101 | TVM ISDB-T - HW Version 009.001.001 |
| 0x03090102 | TVM ISDB-T - HW Version 009.001.002 |
| 0x03090103 | TVM ISDB-T - HW Version 009.001.003 |
| 0x03090104 | TVM ISDB-T - HW Version 009.001.004 |
| 0x03090105 | TVM ISDB-T - HW Version 009.001.005 |
| 0x03090106 | TVM ISDB-T - HW Version 009.001.006 |
| 0x03090107 | TVM ISDB-T - HW Version 009.001.007 |
| 0x03090108 | TVM ISDB-T - HW Version 009.001.008 |
| 0x03090109 | TVM ISDB-T - HW Version 009.001.009 |
| 0x03090200 | TVM ISDB-T - HW Version 009.002.000 |
| 0x03090201 | TVM ISDB-T - HW Version 009.002.001 |
| 0x03090202 | TVM ISDB-T - HW Version 009.002.002 |
| 0x03090203 | TVM ISDB-T - HW Version 009.002.003 |
| 0x03090204 | TVM ISDB-T - HW Version 009.002.004 |
| 0x03090205 | TVM ISDB-T - HW Version 009.002.005 |
| 0x03090206 | TVM ISDB-T - HW Version 009.002.006 |
| 0x03090207 | TVM ISDB-T - HW Version 009.002.007 |
| 0x03090208 | TVM ISDB-T - HW Version 009.002.008 |
| 0x03090209 | TVM ISDB-T - HW Version 009.002.009 |
| 0x03090300 | TVM ISDB-T - HW Version 009.003.000 |
| 0x03090301 | TVM ISDB-T - HW Version 009.003.001 |
| 0x03090302 | TVM ISDB-T - HW Version 009.003.002 |
| 0x03090303 | TVM ISDB-T - HW Version 009.003.003 |
| 0x03090304 | TVM ISDB-T - HW Version 009.003.004 |
| 0x03090305 | TVM ISDB-T - HW Version 009.003.005 |
| 0x03090306 | TVM ISDB-T - HW Version 009.003.006 |
| 0x03090307 | TVM ISDB-T - HW Version 009.003.007 |
| 0x03090308 | TVM ISDB-T - HW Version 009.003.008 |
| 0x03090309 | TVM ISDB-T - HW Version 009.003.009 |
| 0x03090400 | TVM ISDB-T - HW Version 009.004.000 |
| 0x03090401 | TVM ISDB-T - HW Version 009.004.001 |
| 0x03090402 | TVM ISDB-T - HW Version 009.004.002 |
| 0x03090403 | TVM ISDB-T - HW Version 009.004.003 |
| 0x03090404 | TVM ISDB-T - HW Version 009.004.004 |
| 0x03090405 | TVM ISDB-T - HW Version 009.004.005 |
| 0x03090406 | TVM ISDB-T - HW Version 009.004.006 |
| 0x03090407 | TVM ISDB-T - HW Version 009.004.007 |
| 0x03090408 | TVM ISDB-T - HW Version 009.004.008 |
| 0x03090409 | TVM ISDB-T - HW Version 009.004.009 |
| 0x03090500 | TVM ISDB-T - HW Version 009.005.000 |
| 0x03090501 | TVM ISDB-T - HW Version 009.005.001 |
| 0x03090502 | TVM ISDB-T - HW Version 009.005.002 |
| 0x03090503 | TVM ISDB-T - HW Version 009.005.003 |
| 0x03090504 | TVM ISDB-T - HW Version 009.005.004 |
| 0x03090505 | TVM ISDB-T - HW Version 009.005.005 |
| 0x03090506 | TVM ISDB-T - HW Version 009.005.006 |
| 0x03090507 | TVM ISDB-T - HW Version 009.005.007 |
| 0x03090508 | TVM ISDB-T - HW Version 009.005.008 |
| 0x03090509 | TVM ISDB-T - HW Version 009.005.009 |
| 0x03090600 | TVM ISDB-T - HW Version 009.006.000 |
| 0x03090601 | TVM ISDB-T - HW Version 009.006.001 |
| 0x03090602 | TVM ISDB-T - HW Version 009.006.002 |
| 0x03090603 | TVM ISDB-T - HW Version 009.006.003 |
| 0x03090604 | TVM ISDB-T - HW Version 009.006.004 |
| 0x03090605 | TVM ISDB-T - HW Version 009.006.005 |
| 0x03090606 | TVM ISDB-T - HW Version 009.006.006 |
| 0x03090607 | TVM ISDB-T - HW Version 009.006.007 |
| 0x03090608 | TVM ISDB-T - HW Version 009.006.008 |
| 0x03090609 | TVM ISDB-T - HW Version 009.006.009 |
| 0x03090700 | TVM ISDB-T - HW Version 009.007.000 |
| 0x03090701 | TVM ISDB-T - HW Version 009.007.001 |
| 0x03090702 | TVM ISDB-T - HW Version 009.007.002 |
| 0x03090703 | TVM ISDB-T - HW Version 009.007.003 |
| 0x03090704 | TVM ISDB-T - HW Version 009.007.004 |
| 0x03090705 | TVM ISDB-T - HW Version 009.007.005 |
| 0x03090706 | TVM ISDB-T - HW Version 009.007.006 |
| 0x03090707 | TVM ISDB-T - HW Version 009.007.007 |
| 0x03090708 | TVM ISDB-T - HW Version 009.007.008 |
| 0x03090709 | TVM ISDB-T - HW Version 009.007.009 |
| 0x03090800 | TVM ISDB-T - HW Version 009.008.000 |
| 0x03090801 | TVM ISDB-T - HW Version 009.008.001 |
| 0x03090802 | TVM ISDB-T - HW Version 009.008.002 |
| 0x03090803 | TVM ISDB-T - HW Version 009.008.003 |
| 0x03090804 | TVM ISDB-T - HW Version 009.008.004 |
| 0x03090805 | TVM ISDB-T - HW Version 009.008.005 |
| 0x03090806 | TVM ISDB-T - HW Version 009.008.006 |
| 0x03090807 | TVM ISDB-T - HW Version 009.008.007 |
| 0x03090808 | TVM ISDB-T - HW Version 009.008.008 |
| 0x03090809 | TVM ISDB-T - HW Version 009.008.009 |
| 0x03090900 | TVM ISDB-T - HW Version 009.009.000 |
| 0x03090901 | TVM ISDB-T - HW Version 009.009.001 |
| 0x03090902 | TVM ISDB-T - HW Version 009.009.002 |
| 0x03090903 | TVM ISDB-T - HW Version 009.009.003 |
| 0x03090904 | TVM ISDB-T - HW Version 009.009.004 |
| 0x03090905 | TVM ISDB-T - HW Version 009.009.005 |
| 0x03090906 | TVM ISDB-T - HW Version 009.009.006 |
| 0x03090907 | TVM ISDB-T - HW Version 009.009.007 |
| 0x03090908 | TVM ISDB-T - HW Version 009.009.008 |
| 0x03090909 | TVM ISDB-T - HW Version 009.009.009 |
| 0x04010100 | TVM DTMB - HW Version 001.001.000 |
| 0x04020000 | TVM DTMB - HW Version 002.000.000 |
| 0x04020001 | TVM DTMB - HW Version 002.000.001 |
| 0x04020002 | TVM DTMB - HW Version 002.000.002 |
| 0x04020003 | TVM DTMB - HW Version 002.000.003 |
| 0x04020004 | TVM DTMB - HW Version 002.000.004 |
| 0x04020005 | TVM DTMB - HW Version 002.000.005 |
| 0x04020006 | TVM DTMB - HW Version 002.000.006 |
| 0x04020007 | TVM DTMB - HW Version 002.000.007 |
| 0x04020008 | TVM DTMB - HW Version 002.000.008 |
| 0x04020009 | TVM DTMB - HW Version 002.000.009 |
| 0x04020100 | TVM DTMB - HW Version 002.001.000 |
| 0x04020101 | TVM DTMB - HW Version 002.001.001 |
| 0x04020102 | TVM DTMB - HW Version 002.001.002 |
| 0x04020103 | TVM DTMB - HW Version 002.001.003 |
| 0x04020104 | TVM DTMB - HW Version 002.001.004 |
| 0x04020105 | TVM DTMB - HW Version 002.001.005 |
| 0x04020106 | TVM DTMB - HW Version 002.001.006 |
| 0x04020107 | TVM DTMB - HW Version 002.001.007 |
| 0x04020108 | TVM DTMB - HW Version 002.001.008 |
| 0x04020109 | TVM DTMB - HW Version 002.001.009 |
| 0x04020200 | TVM DTMB - HW Version 002.002.000 |
| 0x04020201 | TVM DTMB - HW Version 002.002.001 |
| 0x04020202 | TVM DTMB - HW Version 002.002.002 |
| 0x04020203 | TVM DTMB - HW Version 002.002.003 |
| 0x04020204 | TVM DTMB - HW Version 002.002.004 |
| 0x04020205 | TVM DTMB - HW Version 002.002.005 |
| 0x04020206 | TVM DTMB - HW Version 002.002.006 |
| 0x04020207 | TVM DTMB - HW Version 002.002.007 |
| 0x04020208 | TVM DTMB - HW Version 002.002.008 |
| 0x04020209 | TVM DTMB - HW Version 002.002.009 |
| 0x04020300 | TVM DTMB - HW Version 002.003.000 |
| 0x04020301 | TVM DTMB - HW Version 002.003.001 |
| 0x04020302 | TVM DTMB - HW Version 002.003.002 |
| 0x04020303 | TVM DTMB - HW Version 002.003.003 |
| 0x04020304 | TVM DTMB - HW Version 002.003.004 |
| 0x04020305 | TVM DTMB - HW Version 002.003.005 |
| 0x04020306 | TVM DTMB - HW Version 002.003.006 |
| 0x04020307 | TVM DTMB - HW Version 002.003.007 |
| 0x04020308 | TVM DTMB - HW Version 002.003.008 |
| 0x04020309 | TVM DTMB - HW Version 002.003.009 |
| 0x04030400 | TVM DTMB - HW Version 003.004.000 |
| 0x04030401 | TVM DTMB - HW Version 003.004.001 |
| 0x04030402 | TVM DTMB - HW Version 003.004.002 |
| 0x04030403 | TVM DTMB - HW Version 003.004.003 |
| 0x04030404 | TVM DTMB - HW Version 003.004.004 |
| 0x04030405 | TVM DTMB - HW Version 003.004.005 |
| 0x04030406 | TVM DTMB - HW Version 003.004.006 |
| 0x04030407 | TVM DTMB - HW Version 003.004.007 |
| 0x04030408 | TVM DTMB - HW Version 003.004.008 |
| 0x04030409 | TVM DTMB - HW Version 003.004.009 |
| 0x04030500 | TVM DTMB - HW Version 003.005.000 |
| 0x04030501 | TVM DTMB - HW Version 003.005.001 |
| 0x04030502 | TVM DTMB - HW Version 003.005.002 |
| 0x04030503 | TVM DTMB - HW Version 003.005.003 |
| 0x04030504 | TVM DTMB - HW Version 003.005.004 |
| 0x04030505 | TVM DTMB - HW Version 003.005.005 |
| 0x04030506 | TVM DTMB - HW Version 003.005.006 |
| 0x04030507 | TVM DTMB - HW Version 003.005.007 |
| 0x04030508 | TVM DTMB - HW Version 003.005.008 |
| 0x04030509 | TVM DTMB - HW Version 003.005.009 |
| 0x04030600 | TVM DTMB - HW Version 003.006.000 |
| 0x04030601 | TVM DTMB - HW Version 003.006.001 |
| 0x04030602 | TVM DTMB - HW Version 003.006.002 |
| 0x04030603 | TVM DTMB - HW Version 003.006.003 |
| 0x04030604 | TVM DTMB - HW Version 003.006.004 |
| 0x04030605 | TVM DTMB - HW Version 003.006.005 |
| 0x04030606 | TVM DTMB - HW Version 003.006.006 |
| 0x04030607 | TVM DTMB - HW Version 003.006.007 |
| 0x04030608 | TVM DTMB - HW Version 003.006.008 |
| 0x04030609 | TVM DTMB - HW Version 003.006.009 |
| 0x04030700 | TVM DTMB - HW Version 003.007.000 |
| 0x04030701 | TVM DTMB - HW Version 003.007.001 |
| 0x04030702 | TVM DTMB - HW Version 003.007.002 |
| 0x04030703 | TVM DTMB - HW Version 003.007.003 |
| 0x04030704 | TVM DTMB - HW Version 003.007.004 |
| 0x04030705 | TVM DTMB - HW Version 003.007.005 |
| 0x04030706 | TVM DTMB - HW Version 003.007.006 |
| 0x04030707 | TVM DTMB - HW Version 003.007.007 |
| 0x04030708 | TVM DTMB - HW Version 003.007.008 |
| 0x04030709 | TVM DTMB - HW Version 003.007.009 |
| 0x04030800 | TVM DTMB - HW Version 003.008.000 |
| 0x04030801 | TVM DTMB - HW Version 003.008.001 |
| 0x04030802 | TVM DTMB - HW Version 003.008.002 |
| 0x04030803 | TVM DTMB - HW Version 003.008.003 |
| 0x04030804 | TVM DTMB - HW Version 003.008.004 |
| 0x04030805 | TVM DTMB - HW Version 003.008.005 |
| 0x04030806 | TVM DTMB - HW Version 003.008.006 |
| 0x04030807 | TVM DTMB - HW Version 003.008.007 |
| 0x04030808 | TVM DTMB - HW Version 003.008.008 |
| 0x04030809 | TVM DTMB - HW Version 003.008.009 |
| 0x04030900 | TVM DTMB - HW Version 003.009.000 |
| 0x04030901 | TVM DTMB - HW Version 003.009.001 |
| 0x04030902 | TVM DTMB - HW Version 003.009.002 |
| 0x04030903 | TVM DTMB - HW Version 003.009.003 |
| 0x04030904 | TVM DTMB - HW Version 003.009.004 |
| 0x04030905 | TVM DTMB - HW Version 003.009.005 |
| 0x04030906 | TVM DTMB - HW Version 003.009.006 |
| 0x04030907 | TVM DTMB - HW Version 003.009.007 |
| 0x04030908 | TVM DTMB - HW Version 003.009.008 |
| 0x04030909 | TVM DTMB - HW Version 003.009.009 |
| 0x04040000 | TVM DTMB - HW Version 004.000.000 |
| 0x04040001 | TVM DTMB - HW Version 004.000.001 |
| 0x04040002 | TVM DTMB - HW Version 004.000.002 |
| 0x04040003 | TVM DTMB - HW Version 004.000.003 |
| 0x04040004 | TVM DTMB - HW Version 004.000.004 |
| 0x04040005 | TVM DTMB - HW Version 004.000.005 |
| 0x04040006 | TVM DTMB - HW Version 004.000.006 |
| 0x04040007 | TVM DTMB - HW Version 004.000.007 |
| 0x04040008 | TVM DTMB - HW Version 004.000.008 |
| 0x04040009 | TVM DTMB - HW Version 004.000.009 |
| 0x04040100 | TVM DTMB - HW Version 004.001.000 |
| 0x04040101 | TVM DTMB - HW Version 004.001.001 |
| 0x04040102 | TVM DTMB - HW Version 004.001.002 |
| 0x04040103 | TVM DTMB - HW Version 004.001.003 |
| 0x04040104 | TVM DTMB - HW Version 004.001.004 |
| 0x04040105 | TVM DTMB - HW Version 004.001.005 |
| 0x04040106 | TVM DTMB - HW Version 004.001.006 |
| 0x04040107 | TVM DTMB - HW Version 004.001.007 |
| 0x04040108 | TVM DTMB - HW Version 004.001.008 |
| 0x04040109 | TVM DTMB - HW Version 004.001.009 |
| 0x04040200 | TVM DTMB - HW Version 004.002.000 |
| 0x04040201 | TVM DTMB - HW Version 004.002.001 |
| 0x04040202 | TVM DTMB - HW Version 004.002.002 |
| 0x04040203 | TVM DTMB - HW Version 004.002.003 |
| 0x04040204 | TVM DTMB - HW Version 004.002.004 |
| 0x04040205 | TVM DTMB - HW Version 004.002.005 |
| 0x04040206 | TVM DTMB - HW Version 004.002.006 |
| 0x04040207 | TVM DTMB - HW Version 004.002.007 |
| 0x04040208 | TVM DTMB - HW Version 004.002.008 |
| 0x04040209 | TVM DTMB - HW Version 004.002.009 |
| 0x04040300 | TVM DTMB - HW Version 004.003.000 |
| 0x04040301 | TVM DTMB - HW Version 004.003.001 |
| 0x04040302 | TVM DTMB - HW Version 004.003.002 |
| 0x04040303 | TVM DTMB - HW Version 004.003.003 |
| 0x04040304 | TVM DTMB - HW Version 004.003.004 |
| 0x04040305 | TVM DTMB - HW Version 004.003.005 |
| 0x04040306 | TVM DTMB - HW Version 004.003.006 |
| 0x04040307 | TVM DTMB - HW Version 004.003.007 |
| 0x04040308 | TVM DTMB - HW Version 004.003.008 |
| 0x04040309 | TVM DTMB - HW Version 004.003.009 |
| 0x04040400 | TVM DTMB - HW Version 004.004.000 |
| 0x04040401 | TVM DTMB - HW Version 004.004.001 |
| 0x04040402 | TVM DTMB - HW Version 004.004.002 |
| 0x04040403 | TVM DTMB - HW Version 004.004.003 |
| 0x04040404 | TVM DTMB - HW Version 004.004.004 |
| 0x04040405 | TVM DTMB - HW Version 004.004.005 |
| 0x04040406 | TVM DTMB - HW Version 004.004.006 |
| 0x04040407 | TVM DTMB - HW Version 004.004.007 |
| 0x04040408 | TVM DTMB - HW Version 004.004.008 |
| 0x04040409 | TVM DTMB - HW Version 004.004.009 |
| 0x04040500 | TVM DTMB - HW Version 004.005.000 |
| 0x04040501 | TVM DTMB - HW Version 004.005.001 |
| 0x04040502 | TVM DTMB - HW Version 004.005.002 |
| 0x04040503 | TVM DTMB - HW Version 004.005.003 |
| 0x04040504 | TVM DTMB - HW Version 004.005.004 |
| 0x04040505 | TVM DTMB - HW Version 004.005.005 |
| 0x04040506 | TVM DTMB - HW Version 004.005.006 |
| 0x04040507 | TVM DTMB - HW Version 004.005.007 |
| 0x04040508 | TVM DTMB - HW Version 004.005.008 |
| 0x04040509 | TVM DTMB - HW Version 004.005.009 |
| 0x04040600 | TVM DTMB - HW Version 004.006.000 |
| 0x04040601 | TVM DTMB - HW Version 004.006.001 |
| 0x04040602 | TVM DTMB - HW Version 004.006.002 |
| 0x04040603 | TVM DTMB - HW Version 004.006.003 |
| 0x04040604 | TVM DTMB - HW Version 004.006.004 |
| 0x04040605 | TVM DTMB - HW Version 004.006.005 |
| 0x04040606 | TVM DTMB - HW Version 004.006.006 |
| 0x04040607 | TVM DTMB - HW Version 004.006.007 |
| 0x04040608 | TVM DTMB - HW Version 004.006.008 |
| 0x04040609 | TVM DTMB - HW Version 004.006.009 |
| 0x04040700 | TVM DTMB - HW Version 004.007.000 |
| 0x04040701 | TVM DTMB - HW Version 004.007.001 |
| 0x04040702 | TVM DTMB - HW Version 004.007.002 |
| 0x04040703 | TVM DTMB - HW Version 004.007.003 |
| 0x04040704 | TVM DTMB - HW Version 004.007.004 |
| 0x04040705 | TVM DTMB - HW Version 004.007.005 |
| 0x04040706 | TVM DTMB - HW Version 004.007.006 |
| 0x04040707 | TVM DTMB - HW Version 004.007.007 |
| 0x04040708 | TVM DTMB - HW Version 004.007.008 |
| 0x04040709 | TVM DTMB - HW Version 004.007.009 |
| 0x04040800 | TVM DTMB - HW Version 004.008.000 |
| 0x04040801 | TVM DTMB - HW Version 004.008.001 |
| 0x04040802 | TVM DTMB - HW Version 004.008.002 |
| 0x04040803 | TVM DTMB - HW Version 004.008.003 |
| 0x04040804 | TVM DTMB - HW Version 004.008.004 |
| 0x04040805 | TVM DTMB - HW Version 004.008.005 |
| 0x04040806 | TVM DTMB - HW Version 004.008.006 |
| 0x04040807 | TVM DTMB - HW Version 004.008.007 |
| 0x04040808 | TVM DTMB - HW Version 004.008.008 |
| 0x04040809 | TVM DTMB - HW Version 004.008.009 |
| 0x04040900 | TVM DTMB - HW Version 004.009.000 |
| 0x04040901 | TVM DTMB - HW Version 004.009.001 |
| 0x04040902 | TVM DTMB - HW Version 004.009.002 |
| 0x04040903 | TVM DTMB - HW Version 004.009.003 |
| 0x04040904 | TVM DTMB - HW Version 004.009.004 |
| 0x04040905 | TVM DTMB - HW Version 004.009.005 |
| 0x04040906 | TVM DTMB - HW Version 004.009.006 |
| 0x04040907 | TVM DTMB - HW Version 004.009.007 |
| 0x04040908 | TVM DTMB - HW Version 004.009.008 |
| 0x04040909 | TVM DTMB - HW Version 004.009.009 |
| 0xFFFFFFFF | Nicht definiert |

### RES_0XD026

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_FOT_WERT | °C | - | char | - | - | - | - | - | liefert die Temperatur des Fibre Optical Transceivers (FOT). Bereich: -127,&,127 |
| STAT_TEMP_ENDSTU_WERT | °C | - | int | - | - | - | - | - | liefert die Temperatur der Endstufe. Bereich: -32767,&, 32767 |
| STAT_TEMP_GYRO_WERT | °C | - | char | - | - | - | - | - | liefert die Temperatur des Gyro. Bereich: -127,&,127 |
| STAT_TEMP_MOD_WERT | °C | - | char | - | - | - | - | - | liefert die Temperatur des Moduls (normalerweise prozessornah). Bereich: -127,&,127 |
| STAT_TEMP_HDD_WERT | °C | - | char | - | - | - | - | - | liefert die Temperatur des HDD-Laufwerks. Bereich: -127,&,127 |
| STAT_TEMP_DVD_WERT | °C | - | char | - | - | - | - | - | liefert die Temperatur des DVD-Laufwerks. Bereich: -127,&,127 |

### RES_0XA043

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FELDSTAERKE_ANTENNE_WERT | + | - | - | dBµV | - | unsigned int | - | - | - | - | - | Antennen-Feldstärke. Bereich: 0..99  Dies ist die Feldstärke der Antenne in dBµV. Dabei bedeutet eine Rückgabe von 0 immer eine Feldstärke außerhalb des zulässigen Bereichs. |
| STAT_BER_WERT | + | - | - | - | - | unsigned int | - | - | - | - | - | Bitfehlerrate auf der angegebenen Antenne. |

### ARG_0XA043

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ANTENNE | + | - | - | - | unsigned int | - | - | - | - | - | 0 | 5 | Definiert die Antenne, deren Feldstärke wiedergegeben werden soll. |

### RES_0XA018

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt an, welche Antenne(n) getestet wurden. |
| STAT_TEST_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TTestStatus | - | - | - | Gibt den Status des gesamten Tests oder der entsprechenden Antennen wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_ANTENNEN_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 2 oder 3 meldet. Gibt wieder, wie viele Fehler während des Tests gefunden wurden. |
| STAT_FEHLER_1_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | Rückgabe der Antenne, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_1_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_1_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_2_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_2_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_3_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_3_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_4_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_4_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_5_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_5_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_6_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_6_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_7_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_7_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_8_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_8_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_9_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_9_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_10_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_10_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_11_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_11_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_12_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_12_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_13_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_13_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_14_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_14_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_15_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_15_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |
| STAT_FEHLER_16_ANTENNE | - | - | + | 0-n | - | unsigned long | - | TAntenne | - | - | - | gibt die Antenne wieder, bei der der Fehler X auftrat. Dieses Result wird mit 0xFFFFFFFF belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet oder die Antenne nicht existiert. |
| STAT_FEHLER_16_FEHLERART_ANTENNE | - | - | + | 0-n | - | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_MESSWERT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | - | unsigned int | - | - | - | - | - | der auf der fehlerhaften Antenne X gemessene Widerstand in 0.1 kOhm. |

### ARG_0XA018

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ANTENNE | + | - | - | - | unsigned long | - | - | - | - | - | 0 | - | Antenne(n) die getestet werden sollen. Tabelle TAntenne |

### TANTENNE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Antennen |
| 0x00000001 | AM/FM Antenne |
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
| 0xFFFFFFFF | Nicht definiert |

### TANTENNEFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Falscher Antennfuß oder Diversity |
| 0xFF | Nicht definiert |

### RES_0XA022

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELBSTTEST_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TSelbsttestRoutine | - | - | - | Routine(n), die getestet wurde(n). Tabelle  TSelbsttestRoutine |
| STAT_SELBSTTEST | - | - | + | 0-n | - | unsigned char | - | TTestStatus | - | - | - | Gibt den Status des Tests wieder. |

### ARG_0XA022

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SELBSTTEST_ROUTINE | + | - | - | - | unsigned long | - | - | - | - | - | - | - | Routinen, die getestet werden sollen. Die Tabelle TSelbsttestRoutine wird in der SGBD von der Entwicklung bzw. vom Zulieferer befüllt und gepflegt. |

### TTESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### ARG_0XA01A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SIGNALART | + | - | 0-n | - | unsigned char | - | TSignalArt | - | - | - | - | - | Art der Signalausgabe. |
| ARG_AUSGANG | + | + | - | - | unsigned int | - | - | - | - | - | - | - | Default: 0 Alle Ausgänge des Steuergerätes müssen einzeln und kombiniert anwählbar sein. |
| ARG_TIMEOUT | + | - | - | - | unsigned char | - | - | - | - | - | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die das Testbild ausgegeben wird. Default: 255 Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis: -der Job erneut mit Parameter 0 aufgerufen wird -das Steuergerät neu startet (Aufwachen, Reset, &) |

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

### RES_0XD04F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGION | 0-n | - | unsigned char | - | TTvRegion | - | - | - | Eingestellte Region. |

### ARG_0XD04F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_REGION | 0-n | - | unsigned char | - | TTvRegion | - | - | - | - | - | Einstellung der Region. |

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
| 0x10 | Westeuropa |
| 0x11 | Osteuropa |
| 0x12 | Nordosteuropa |
| 0x13 | Türkei |
| 0x14 | Griechenland |
| 0x15 | Israel |
| 0x16 | Mittel-/Südafrika |
| 0xFF | Nicht definiert |

### RES_0XA03C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER | - | - | + | 0-n | - | unsigned char | - | TLuefterStatus | - | - | - | Status des Lüfters. |
| STAT_LUEFTER_DREHZAHL_WERT | - | - | + | Hz | - | unsigned int | - | - | - | - | - | Aktuelle Frequenz des Lüfters in Hz. (Wenn nicht abfragbar, wird 0xFFFF zurückgegeben) |

### ARG_0XA03C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DURATION | + | - | - | - | unsigned char | - | - | - | - | - | 0 | 30 | legt die Dauer in Sekunden fest, die der Lüfter auf Maximum läuft. |

### TLUEFTERSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Lüfter steht |
| 0x01 | Lüfter läuft, aber nicht mit der erwarteteten Drehzahl |
| 0x02 | Lüfter läuft mit der erwarteteten Drehzahl |
| 0xFE | Lüfter läuft mit unbekannter Drehzahl |
| 0xFF | Nicht definiert |

### TTASKIDS

| WERT | UWTEXT | TEXT |
| --- | --- | --- |
| 0x00 | OS_IDLE_TASK | OS_IDLE_TASK |
| 0x01 | OS_PWRMD_TASK | OS_PWRMD_TASK |
| 0x02 | OS_NONVOL_TASK | OS_NONVOL_TASK |
| 0x03 | OS_DIAGNOSTIC_TASK | OS_DIAGNOSTIC_TASK |
| 0x04 | OS_TASK_COMM_NET | OS_TASK_COMM_NET |
| 0x05 | OS_TASK_TVAPI | OS_TASK_TVAPI |
| 0x06 | OS_TV_API_CON_TASK | OS_TV_API_CON_TASK |
| 0x07 | OS_MOST_TASK | OS_MOST_TASK |
| 0x08 | OS_SPI_API_TASK | OS_SPI_API_TASK |
| 0x09 | OS_MOST_COM_TASK | OS_MOST_COM_TASK |
| 0x0A | OS_PERIODIC_TASK | OS_PERIODIC_TASK |
| 0x0B | OS_MOST_TASK | OS_MOST_TASK |
| 0x0C | OS_SPI_API_TASK | OS_SPI_API_TASK |
| 0x0D | OS_NOTASK_RSVD_C | OS_NOTASK_RSVD_D |
| 0x0E | OS_NOTASK_MOST_LLD_RESET | OS_NOTASK_MOST_LLD_RESET |
| 0x0F | OS_NOTAKS_RSVD_F | OS_NOTAKS_RSVD_F |
| 0x10 | OS_NONVOL_TASK | OS_NONVOL_TASK |
| 0x20 | OS_PWRMD_TASK | OS_PWRMD_TASK |
| 0x30 | OS_DIAGNOSTIC_TASK | OS_DIAGNOSTIC_TASK |
| 0x40 | OS_TASK_COMM_NET | OS_TASK_COMM_NET |
| 0x50 | OS_TASK_TVAPI | OS_TASK_TVAPI |
| 0x60 | OS_TV_API_CON_TASK | OS_TV_API_CON_TASK |
| 0x70 | OS_MOST_TASK | OS_MOST_TASK |
| 0x80 | OS_SPI_API_TASK | OS_SPI_API_TASK |
| 0x90 | OS_MOST_COM_TASK | OS_MOST_COM_TASK |
| 0xA0 | OS_PERIODIC_TASK | OS_PERIODIC_TASK |
| 0xB0 | OS_MOST_TASK | OS_MOST_TASK |
| 0xC0 | OS_SPI_API_TASK | OS_SPI_API_TASK |
| 0xD0 | OS_NOTASK_RSVD_C | OS_NOTASK_RSVD_D |
| 0xE0 | OS_NOTASK_MOST_LLD_RESET | OS_NOTASK_MOST_LLD_RESET |
| 0xF0 | OS_NOTASK_RSVD_F | OS_NOTASK_RSVD_F |
| 0xFF | Nicht definiert | Nicht definiert |

### RES_0X1721

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PREV_TASK | 0-n | - | char | 0x0F | TTaskIds | - | - | - | OS-TaskID of Previous Task |
| STAT_CUR_TASK | 0-n | - | char | 0xF0 | TTaskIds | - | - | - | OS-TaskID of Current Task |

### TAB_0X1721

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0010 | 0x0011 |
