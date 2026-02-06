# cvm_rr6.prg

## General

|  |  |
| --- | --- |
| File | cvm_rr6.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 77 |
| Origin | BMW EI-61 RalfPompl |
| Revision | 2.000 |
| Author | HelbakoGmbH E-S GuidoGlissmann |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Cabrio Verdeck Modul |  |  |
| ORIGIN | string | BMW EI-61 RalfPompl |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | HelbakoGmbH E-S GuidoGlissmann |  |  |
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

### UDS_TAB_ROE_AKTIV

| NR | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung deaktiviert |
| 0x01 | Aktive Fehlermeldung aktiviert |
| 0xFF | Status der aktiven Fehlermeldung nicht feststellbar |

### ARG_0XA1A4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_CV_ELEMENT | - | - | - | - | - | Auswahl des Verdeckelements oder Verdeckfunktion (siehe TAB_CV_ELEMENT) |
| ARG_RICHTUNG | + | - | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERRICHTUNG | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_CV_ANSTEUERRICHTUNG) |
| ARG_ZEIT | + | - | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung in ms (0 bis 65534 ms) |

### ARG_0XA1A5_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VENTIL_V1 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ventil 1 ansteuern: 0=aus, 1=ein |
| VENTIL_V2 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ventil 2 ansteuern: 0=aus, 1=ein |
| VENTIL_V3 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ventil 3 ansteuern: 0=aus, 1=ein |
| VENTIL_V4 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ventil 4 ansteuern: 0=aus, 1=ein |

### ARG_0XA1A6_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DIAG_ANSTEUERUNG | + | - | 0-n | high | unsigned char | - | TAB_CV_ANST_BAUGRUPPE | - | - | - | - | - | Ansteuerung (siehe TAB_CV_ANST_BAUGRUPPE) Achtung: Vor der Ansteuerung sicherstellen, dass keine Kollisionsgefahr besteht! |

### ARG_0XD1DD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen aller bisher gespeicherten Daten |

### ARG_0XD2A5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREIGABE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | vom SG-Verbund unabhängige Ansteuerung des CV erlauben 0x00 unabhängige Ansteuerung verboten 0x01 unabhängige Ansteuerung erlaubt |

### ARG_0XD2A7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Statistikzähler löschen |

### ARG_0XD2AD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RELAIS | 0-n | high | unsigned char | - | TAB_CV_RELAIS | - | - | - | - | - | Auswahl angesteuertes Relais (siehe TAB_CV_RELAIS) |
| ARG_RICHTUNG | 0-n | high | unsigned char | - | TAB_CV_RELAIS_RICHTUNG | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_CV_RELAIS_RICHTUNG) |

### ARG_0XD2AE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANSTEUERUNG | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERUNG | - | - | - | - | - | Ansteuerung (siehe TAB_CV_ANSTEUERUNG) |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERRICHTUNG | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_CV_ANSTEUERRICHTUNG) |

### ARG_0XF002

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HYDRAULIK_OUTPUTS | + | - | HEX | - | unsigned char | - | - | - | - | - | - | - | - |
| VERRIEGELUNGSMOTOR | + | - | HEX | - | unsigned char | - | - | - | - | - | - | - | - |
| LED | + | - | HEX | - | unsigned char | - | - | - | - | - | - | - | - |

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
| 0x022400 | Energiesparmode aktiv | 0 |
| 0x022408 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x022409 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02240A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02240B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02240C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF24 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x805000 | Verdeck, Position Dachpaket/Verdeck aufgestellt, VSW 1.1 : Unterbrechung oder Kurzschluss | 0 |
| 0x805001 | Verdeck, Position Dachpaket/Verdeck aufgestellt, VSW 1.1 : Signal ungültig | 0 |
| 0x805002 | Verdeck, Position Dachpaket/Verdeck abgelegt, VSW 1.2 : Unterbrechung oder Kurzschluss | 0 |
| 0x805003 | Verdeck, Position Dachpaket/Verdeck abgelegt, VSW 1.2 : Signal ungültig | 0 |
| 0x805008 | Verdeck, Verriegelung Windlauf verriegelt, VSW 4.1 : Unterbrechung oder Kurzschluss | 0 |
| 0x805009 | Verdeck, Verriegelung Windlauf verriegelt, VSW 4.1 : Signal ungültig | 0 |
| 0x80500C | Verdeck, Verdeckklappe geschlossen, VSW 5.1 : Unterbrechung oder Kurzschluss | 0 |
| 0x80500D | Verdeck, Verdeckklappe geschlossen, VSW 5.1 : Signal ungültig | 0 |
| 0x80500E | Verdeck, Verdeckklappe/Beladehilfe offen, VSW 5.2 : Unterbrechung oder Kurzschluss | 0 |
| 0x80500F | Verdeck, Verdeckklappe/Beladehilfe offen, VSW 5.2 : Signal ungültig | 0 |
| 0x805028 | Verdeck, Spannbügel/Finne aufgestellt, VSW 2.2 : Unterbrechung oder Kurzschluss | 0 |
| 0x805029 | Verdeck, Spannbügel/Finne aufgestellt, VSW 2.2 : Signal ungültig | 0 |
| 0x805030 | Verdeck, Spannbügel in Ablageposition, VSW 2.5 : Unterbrechung oder Kurzschluss | 0 |
| 0x805031 | Verdeck, Spannbügel in Ablageposition, VSW 2.5 : Signal ungültig | 0 |
| 0x805032 | Verdeck, Spannbügel/Finne im Totpunkt, VSW 2.1 : Unterbrechung oder Kurzschluss | 0 |
| 0x805033 | Verdeck, Spannbügel im Totpunkt, VSW 2.1 : Signal ungültig | 0 |
| 0x805036 | Verdeck, Inkrementalgeber Windlauf, VSW 4.3 : Unterbrechung oder Kurzschluss | 0 |
| 0x805037 | Verdeck, Inkrementalgeber Windlauf, VSW 4.3 : Signal ungültig | 0 |
| 0x805038 | Verdeck, Inkrementalgeber Windlauf, VSW 4.3 : nicht angelernt | 0 |
| 0x80503F | Verdeckstecker nicht gesteckt | 0 |
| 0x805040 | Versorgungsspannung der Positionssensoren Verdeckstecker: Kurzschluss | 0 |
| 0x805041 | Versorgungsspannung der Positionssensoren Karosseriestecker: Kurzschluss | 0 |
| 0x805042 | Versorgungsspannung der Endlagensensoren Verdeckstecker: Kurzschluss | 0 |
| 0x805043 | Versorgungsspannung der Endlagensensoren Karosseriestecker: Kurzschluss | 0 |
| 0x805045 | Klemme 30 Spannung fehlerhaft | 1 |
| 0x805048 | Verdeckschalter Zu: Unterbrechung oder Kurzschluss nach Minus | 0 |
| 0x80504A | Verdeckschalter Auf: Unterbrechung oder Kurzschluss nach Minus | 0 |
| 0x80504C | Schalter Verdeckkastenboden / Gepäckraumabtrennung: Signal unplausibel | 0 |
| 0x80504F | Masse-Schalter (Bedientaster, SCA-Kontakte, Verdeckkastenboden): Kurzschluss nach Plus | 0 |
| 0x805060 | Ventil V1: Unterbrechung oder Kurzschluss | 0 |
| 0x805061 | Ventil V2: Unterbrechung oder Kurzschluss | 0 |
| 0x805062 | Ventil V3: Unterbrechung oder Kurzschluss | 0 |
| 0x805063 | Ventil V4: Unterbrechung oder Kurzschluss | 0 |
| 0x805067 | Relais PM1: Unterbrechung oder Kurzschluss | 0 |
| 0x805068 | Relais PM2: Unterbrechung oder Kurzschluss | 0 |
| 0x80506F | Verriegelungsmotor Windlauf: Unterbrechung oder Kurzschluss | 0 |
| 0x805080 | Speicherfehler RAM | 0 |
| 0x805081 | Speicherfehler ROM | 0 |
| 0x805082 | Funktionseinschränkung: Motorstartautomatik aktiv | 1 |
| 0x805083 | Funktionseinschränkung: Standverbraucherabschaltung aktiv | 1 |
| 0x805084 | Geschwindigkeit in Zwischenposition zu hoch | 1 |
| 0x805085 | Funktionseinschränkung: Außentemperatur zu niedrig | 1 |
| 0x805086 | Funktionseinschränkung: Fensterheberposition unbekannt | 1 |
| 0x805087 | Funktionseinschränkung: Geschwindigkeit zu hoch | 1 |
| 0x805088 | Funktionseinschränkung: Heckklappe offen | 1 |
| 0x805089 | Funktionseinschränkung: Unbekannte Dachposition | 1 |
| 0x80508A | Funktionseinschränkung: ID-Geber hat Nahbereich verlassen | 1 |
| 0x80508B | Funktionseinschränkung: Verdeckkastenboden nicht abgesenkt | 1 |
| 0x80508C | Funktionseinschränkung: Wiederholsperre Hydraulikpumpe | 1 |
| 0x80508D | Funktionseinschränkung: Wiederholsperre Verriegelungsmotor/Faltdachantrieb | 1 |
| 0x80508E | Funktionseinschränkung: Überlastschutz Ventile | 1 |
| 0x80508F | Funktionseinschränkung: Zeitüberschreitung Freigabe SHD/CVM/CTM | 1 |
| 0x805090 | Funktionseinschränkung: Zeitüberschreitung beim Ablegen-Ausheben des Verdecks | 1 |
| 0x805091 | Funktionseinschränkung: Zeitüberschreitung beim Ent-Verriegeln | 1 |
| 0x805092 | Zeitüberschreitung beim Öffnen-Schliessen der Verdeckklappe | 1 |
| 0x805095 | Funktionseinschränkung wegen Unterspannung | 1 |
| 0x805096 | Funktionseinschränkung wegen Überspannung | 1 |
| 0x805098 | Überspannung erkannt | 1 |
| 0x805099 | Unterspannung erkannt | 1 |
| 0x80509B | Funktionseinschränkung: Querbeschleunigung zu hoch in Zwischenstellung | 1 |
| 0x80509C | Funktionseinschränkung: Zeitüberschreitung beim Anheben/Ausspannen des/der Spannbügels/Finnen | 1 |
| 0x80509F | Funktionseinschränkung: Fahrzeug verriegelt oder gesichert | 1 |
| 0x8050A2 | Funktionseinschränkung: Verdeckklappe/Verdeckkastendeckel unplausibel | 1 |
| 0x8050A4 | Funktionseinschränkung: Dachpaket/Hauptsäule unplausibel | 1 |
| 0x8050A7 | Funktionseinschränkung: Spannbügel/Finne unplausibel | 1 |
| 0x8050A9 | Funktionseinschränkung: Abbruch wegen fehlender Freigabe | 1 |
| 0x8050C8 | Verdeck, Spannbügel/Finne im Totpunkt rechts, VSW 2.6 : Unterbrechung oder Kurzschluss | 0 |
| 0x8050C9 | Verdeck, Spannbügel/Finne im Totpunkt rechts, VSW 2.6 : Signal ungültig | 0 |
| 0x8050CA | Verdeck, Verdeckklappe geschlossen rechts, VSW 5.5: Unterbrechung oder Kurzschluss | 0 |
| 0x8050CB | Verdeck, Verdeckklappe geschlossen rechts, VSW 5.5: Signal ungültig | 0 |
| 0x8050CC | Verdeck, Verdeckklappe offen rechts, VSW 5.6: Unterbrechung oder Kurzschluss | 0 |
| 0x8050CD | Verdeck, Verdeckklappe offen rechts, VSW 5.6: Signal ungültig | 0 |
| 0x8050E5 | Verdeck, Hauptsäule Mittelstellung, VSW 1.3 : Unterbrechung oder Kurzschluss | 0 |
| 0x8050E6 | Verdeck, Hauptsäule Mittelstellung, VSW 1.3 : Signal ungültig | 0 |
| 0xD20468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xD20BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD21400 | Ausfall Botschaft GESCHWINDIGKEIT | 1 |
| 0xD21401 | Ausfall Botschaft KLEMMEN | 1 |
| 0xD21402 | Ausfall Botschaft POWERMGMT_CTR_COS | 1 |
| 0xD21403 | Ausfall Botschaft CTR_FH_FAT | 1 |
| 0xD21404 | Ausfall Botschaft CTR_FH_SHD_ZENTRALE | 1 |
| 0xD21405 | Ausfall Botschaft STAT_ZV_KLAPPEN | 1 |
| 0xD21406 | Ausfall Botschaft A_TEMP | 1 |
| 0xD21407 | Ausfall Botschaft DT_PT_2 | 1 |
| 0xD21408 | Ausfall Botschaft Fahrzeugzustand | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4600 | Aussentemperatur | °C | - | signed char | - | - | - | - |
| 0x4601 | Datum_Tag | - | - | unsigned char | - | - | - | - |
| 0x4602 | Datum_Monat | - | - | unsigned char | - | - | - | - |
| 0x4603 | Datum_Jahr | - | low | unsigned int | - | - | - | - |
| 0x4604 | Spannung_Kl30 | V | - | unsigned char | - | 1 | 10 | 0 |
| 0x4605 | Bedienquelle | 0-n | - | 0xff | TAB_CV_BEDIENANFORDERUNG | - | - | - |
| 0x4608 | Sensoren | 0-n | high | 0xffff | TAB_FF_SENSOREN_RR6 | - | - | - |
| 0x460A | Verriegelung | 0-n | - | 0xFf | TAB_CV_VERRIEGELUNG | - | - | - |
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
| 0x240005 | DM_Queue_FULL | 0 |
| 0x240006 | DM_Queue_DELETED | 0 |
| 0x24000F | Botschaft (328h, Relativzeit): Ausfall | 0 |
| 0x240015 | NVM_E_ERASE_FAILED | 0 |
| 0x240016 | NVM_E_READ_FAILED | 0 |
| 0x240030 | NVM_E_READ_ALL_FAILED | 0 |
| 0x240031 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x240032 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x240033 | NVM_E_WRITE_FAILED | 0 |
| 0x240034 | NVM_E_CONTROL_FAILED | 0 |
| 0x240070 | Relaisfehler während Relaistest erkannt | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4000_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL_HAUPTSAEULE_AUFGESTELLT | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_HALL_HAUPTSAEULE_ABGELEGT | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_HALL_SPANNBUEGEL_TOTPUNKT_LINKS | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_HALL_SPANNBUEGEL_AUFGESTELLT | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_HALL_SPANNBUEGEL_ABLAGEPOS | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_HALL_VKLAPPE_VERRIEGELT_LINKS | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_HALL_HAUPTSAEULE_MITTELSTELLUNG | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_HALL_VERSCHLUSS_VERRIEGELT | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_VERRIEGELUNG | 0-n | - | unsigned char | - | TAB_VERRIEGELUNG | - | - | - | - |
| STAT_VENTIL1 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_VENTIL2 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_VENTIL3 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_VENTIL4 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_RELAIS1 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_RELAIS2 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_RELAIS3 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_RELAIS4 | 0/1 | - | unsigned char | - | - | - | - | - | - |
| STAT_MOT1 | 0-n | - | unsigned char | - | TAB_STAT_AUSGANG_MOTOR | - | - | - | Zustand siehe Tabelle TAB_STAT_AUSGANG_MOTOR |
| STAT_MOT2 | 0-n | - | unsigned char | - | TAB_STAT_AUSGANG_MOTOR | - | - | - | Zustand siehe Tabelle TAB_STAT_AUSGANG_MOTOR |
| STAT_VENTIL | BIT | - | BITFIELD | - | TAB_VENTILSTATUS | - | - | - | Status der Highsidetreiber-Statusleitungen |
| STAT_TABELLENSTATUS_WERT | HEX | - | unsigned char | - | - | - | - | - | State Ablaufsteuerung |
| STAT_HALL_SPANNBUEGEL_TOTPUNKT_RECHTS | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_HALL_VKLAPPE_VERRIEGELT_RECHTS | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_HALL_VKLAPPE_OFFEN_RECHTS | 0-n | - | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |

### RES_0X4020

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL01_WERT | HEX | - | unsigned char | - | - | - | - | - | Mikroschalter Verdeckklappe verriegelt rechts |
| STAT_HALL02_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Verriegelung geschlossen |
| STAT_HALL05_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Spannbübel Ablageposition |
| STAT_HALL06_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Verdeckklappe offen rechts |
| STAT_HALL07_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Hauptsäule aufgestellt |
| STAT_HALL08_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Hauptsäule abgelegt |
| STAT_HALL09_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Inkrementalgeber Verriegelung |
| STAT_HALL12_WERT | HEX | - | unsigned char | - | - | - | - | - | Mikroschalter Verdeckklappe verriegelt links |
| STAT_HALL14_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Spannbügel über Totpunkt links |
| STAT_12VSW_A1_WERT | HEX | - | unsigned char | - | - | - | - | - | Versorgungsspannung Hallsensoren Karossriestecker Gruppe 1 |
| STAT_12VSW_A2_WERT | HEX | - | unsigned char | - | - | - | - | - | Versorgungsspannung Hallsensoren Karossriestecker Gruppe 2 |
| STAT_12VSW_B1_WERT | HEX | - | unsigned char | - | - | - | - | - | Versorgungsspannung Hallsensoren Verdeckstecker Gruppe 1 |
| STAT_12VSW_B2_WERT | HEX | - | unsigned char | - | - | - | - | - | Versorgungsspannung Hallsensoren Verdeckstecker Gruppe 2 |
| STAT_KLEMME30_WERT | HEX | - | unsigned char | - | - | - | - | - | Spannung Klemme 30 |
| STAT_KLEMME15_WERT | HEX | - | unsigned char | - | - | - | - | - | Spannung Klemme 15 |
| STAT_I_MOT_WERT | HEX | - | unsigned char | - | - | - | - | - | Strom Motor |
| STAT_U_MOT1_WERT | HEX | - | unsigned char | - | - | - | - | - | Spannung Ausgang Mot1 |
| STAT_U_MOT2_WERT | HEX | - | unsigned char | - | - | - | - | - | Spannung Ausgang Mot2 |
| STAT_U_MOT3_WERT | HEX | - | unsigned char | - | - | - | - | - | Spannung Ausgang Mot3 |
| STAT_NTC_WERT | HEX | - | unsigned char | - | - | - | - | - | Temperaturfühler Pumpe |
| STAT_HALL03_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor HALL03 |
| STAT_HALL04_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Spannbügel über Totpunkt rechts |
| STAT_HALL10_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor  HALL10 |
| STAT_HALL11_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor  HALL11 |
| STAT_HALL13_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor  HALL13 |
| STAT_HALL15_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor  Spannbügel aufgestellt |
| STAT_HALL16_WERT | HEX | - | unsigned char | - | - | - | - | - | Hallsensor Verdeckklappe offen links |
| STAT_FINNEN_WERT | HEX | - | unsigned char | - | - | - | - | - | Drehwinkelgeber DWG1 |
| STAT_HAUTSAEULE_WERT | HEX | - | unsigned char | - | - | - | - | - | Drehwinkelgeber DWG2 |
| STAT_5VSW_WERT | HEX | - | unsigned char | - | - | - | - | - | Versorgungsspannung Drewinkelgeber |

### RES_0X4100

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SWFL_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_BTLD_WERT | HEX | - | unsigned int | - | - | - | - | - | - |
| STAT_LAYOUT_WERT | HEX | - | unsigned char | - | - | - | - | - | - |

### RES_0XA1A4_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STAT_ROUTINE | - | - | - | Ergebnis der Routineausführung (siehe TAB_CV_STAT_ROUTINE) |

### RES_0XA1A5_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STAT_ROUTINE | - | - | - | Ergebnis der Routineausführung (siehe TAB_CV_STAT_ROUTINE) |

### RES_0XA1A6_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STAT_ROUTINE | - | - | - | Ergebnis der Routineausführung (siehe TAB_CV_STAT_ROUTINE) |

### RES_0XD1DD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_LETZT_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzte maximale Geschwindigkeitsüberschreitung |
| STAT_DATUM_LETZT_WERT | HEX | high | unsigned long | - | - | - | - | - | Datum der letzten Geschwindigkeitsüberschreitung |
| STAT_DAUER_LETZT_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer der letzten Geschwindigkeitsüberschreitung |
| STAT_KILOMETER_LETZT_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand der letzten Geschwindigkeitsüberschreitung |
| STAT_ATEMP_LETZT_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur der letzten Geschwindigkeitsüberschreitung |
| STAT_SENSOR_POS_VERDECK_ABGEL_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Verdeck abgelegt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_POS_VERDECK_AUFGEST_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Verdeck aufgestellt  Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_VERRIEG_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Windlauf verriegelt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_INK_LETZT_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | -30000.0 | Inkrementgeber Windlauf Position  0x00: Nicht verbaut  0x01: Ein |
| STAT_SENSOR_VKL_GESCHL_LH_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe geschlossen links Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VKL_GESCHL_RH_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe geschlossen rechts Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VKL_OFF_LETZT_LH_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe offen links Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VKL_OFF_LETZT_RH_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe offen rechts Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_SPANNBUEGEL_AUFGESTELLT_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Spannbügel aufgestellt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_SPANNBUEGEL_ABGELEGT_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Spannbügel abgelegt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_SPANNBUEGEL_TOTPUNKT_LH_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Spannbügel Totpunk links Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_SPANNBUEGEL_TOTPUNKT_RH_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Spannbügel Totpunk rechts Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VERDECK_MTTELST_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Schaltzustand 0x00: Aus 0x01: Ein |
| STAT_GESCHWINDIGKEIT_MAX_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzte maximale Geschwindigkeitsüberschreitung |
| STAT_DATUM_MAX_WERT | HEX | high | unsigned long | - | - | - | - | - | Datum der letzten Geschwindigkeitsüberschreitung |
| STAT_DAUER_MAX_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer der maximalen Geschwindigkeitsüberschreitung |
| STAT_KILOMETER_MAX_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand der maximalen Geschwindigkeitsüberschreitung |
| STAT_ATEMP_MAX_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur der maximalen Geschwindigkeitsüberschreitung |
| STAT_SENSOR_POS_VERDECK_ABGEL_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Verdeck abgelegt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_POS_VERDECK_AUFGEST_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Position Verdeck aufgestellt  Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_VERRIEG_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Windlauf verriegelt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_WINDL_INK_MAX_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | -30000.0 | Inkrementgeber Windlauf Position  0x00: Nicht verbaut  0x01: Ein |
| STAT_SENSOR_VKL_GESCHL_LH_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe geschlossen links Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VKL_GESCHL_RH_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe geschlossen rechts Schaltzustand 0x00: Aus  0x01: Ein |
| STAT_SENSOR_VKL_OFF_MAX_LH_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe offen links Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VKL_OFF_MAX_RH_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Verdeckklappe offen rechts Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_SPANNBUEGEL_AUFGESTELLT_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Spannbügel aufgestellt Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_SPANNBUEGEL_ABGELEGT_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Spannbügel in Abalgeposition Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_SPANNBUEGEL_TOTPUNKT_LH_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dach in Beladestellung Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_SPANNBUEGEL_TOTPUNKT_RH_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Dach in Beladestellung Schaltzustand  0x00: Aus  0x01: Ein |
| STAT_SENSOR_VERDECK_MTTELST_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Schaltzustand 0x00: Aus 0x01: Ein |

### RES_0XD206_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VENTIL_V1_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Ventil 1 0 = AUS 1 = EIN |
| STAT_VENTIL_V2_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Ventil 2 0 = AUS 1 = EIN |
| STAT_VENTIL_V3_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Ventil 3 0 = AUS 1 = EIN |
| STAT_VENTIL_V4_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Ventil 4 0 = AUS 1 = EIN |
| STAT_VENTIL_RES_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Ventil Reserve 0 = AUS 1 = EIN |
| STAT_RELAIS_WLV1_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Relais WLV 1 0 = AUS 1 = EIN |
| STAT_RELAIS_WLV1_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais WLV 1 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_WLV2_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Relais WLV 2 0 = AUS 1 = EIN |
| STAT_RELAIS_WLV2_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais WLV 2 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_PUMPE1_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Relais Pumpe 1 0 = AUS 1 = EIN |
| STAT_RELAIS_PUMPE2_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Relais Pumpe 2 0 = AUS 1 = EIN |
| STAT_RELAIS_RES1_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Relais Reserve 1 0 = AUS 1 = EIN |
| STAT_RELAIS_RES1_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais Reserve 1 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_RES2_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Relais Reserve 2 0 = AUS 1 = EIN |
| STAT_RELAIS_RES2_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais Reserve 2 (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_MOTOR_WINDLAUF_NR | 0-n | high | unsigned char | - | TAB_CVM_MOTOR_WINDLAUF | 1.0 | 1.0 | 0.0 | Interpretation siehe Tabelle TAB_CVM_MOTOR_WINDLAUF |

### RES_0XD2A0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_GESTEUERTE_HECKSCHEIBE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: gesteuerte Heckscheibe nicht vorhanden 0x01: gesteuerte Heckscheibe vorhanden |
| STAT_VORHANDEN_TASTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Kein Verdeck-Taster vorhanden 0x01: Verdeck-Taster vorhanden |
| STAT_VORHANDEN_BELADEHILFE_TASTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Kein Verdeck-Taster vorhanden 0x01: Verdeck-Taster vorhanden |
| STAT_VORHANDEN_NAHBEREICHSERKENNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Keine Nahbereichserkennung vorhanden 0x01: Nahbereichserkennung vorhanden |
| STAT_VORHANDEN_BELADEHILFSFUNKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Keine Beladehilfsfunktion vorhanden 0x01:  Beladehilfsfunktion vorhanden |
| STAT_VORHANDEN_SHD | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: elektrisches Schiebedach nicht vorhanden 0x01: elektrisches Schiebedach vorhanden |
| STAT_VORHANDEN_ESH | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: elektrischer Schiebehimmel nicht vorhanden 0x01: elektrischer Schiebehimmel vorhanden |
| STAT_VORHANDEN_WINDSCHOTT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: elektrisches Windschott nicht vorhanden 0x01: elektrisches Windschott vorhanden |

### RES_0XD2A1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_KL30_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungswert Lastkreis (KL30) |
| STAT_VERSORGUNG_LAST_KL30 | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Status Spannung Lastkreis (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SPANNUNG_KL15_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungswert Logikkreis (KL15) |
| STAT_VERSORGUNG_LOGIK_KL15 | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Status Spannung Logikkreis (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENS_SUPPLY_A_PERMANENT_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |
| STAT_SENSOR_SUPPLY_A_PERMANENT | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Sensorversorgung (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENS_SUPPLY_A_TEMPORAER_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |
| STAT_SENSOR_SUPPLY_A_TEMPORAER | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Sensorversorgung (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENS_SUPPLY_C_PERMANENT_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |
| STAT_SENSOR_SUPPLY_C_PERMANENT | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Sensorversorgung (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENS_SUPPLY_C_TEMPORAER_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |
| STAT_SENSOR_SUPPLY_C_TEMPORAER | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Sensorversorgung (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_FUSSPUNKT_SENSOR_PERMANENT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Sensorversorgung |
| STAT_FUSSPUNKT_SENSOR_TEMPORAER_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Sensorversorgung |
| STAT_SUPPLY_C_SCHALTER_ANALOG_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |

### RES_0XD2A4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_CV_NR | 0-n | high | unsigned char | - | TAB_CV_BEDIENTASTER_VERDECK | 1.0 | 1.0 | 0.0 | Tasteranforderung siehe Tabelle TAB_CV_BEDIENTASTER_VERDECK |
| STAT_TASTER_BELADEHILFE_NR | 0-n | high | unsigned char | - | TAB_CV_BEDIENTASTER_BELADEHILFE | 1.0 | 1.0 | 0.0 | Tasteranforderung siehe Tabelle TAB_CV_BEDIENTASTER_BELADEHILFE |

### RES_0XD2A5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | vom SG-Verbund unabhängige Ansteuerung des CV erlauben 0x00 unabhängige Ansteuerung verboten 0x01 unabhängige Ansteuerung erlaubt |

### RES_0XD2A7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORGANG_VERDECK_OEFFNEN_10_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Oeffnen Verdeck im Bereich ab 0-10 km/h (einschließlich) |
| STAT_VORGANG_VERDECK_SCHLIESSEN_10_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen Verdeck im Bereich ab 0-10 km/h (einschließlich) |
| STAT_VORGANG_VERDECK_OEFFNEN_30_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Öffnen Verdeck im Bereich ab 10-30 km/h (einschließlich) |
| STAT_VORGANG_VERDECK_SCHLIESSEN_30_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen Verdeck im Bereich ab 10-30 km/h (einschließlich) |
| STAT_VORGANG_VERDECK_OEFFNEN_50_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Öffnen Verdeck im Bereich ab 30-50 km/h (einschließlich) |
| STAT_VORGANG_VERDECK_SCHLIESSEN_50_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen Verdeck im Bereich ab 30-50 km/h (einschließlich) |
| STAT_VORGANG_VERDECK_OEFFNEN_300_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Öffnen Verdeck im Bereich >50 km/h |
| STAT_VORGANG_VERDECK_SCHLIESSEN_300_KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen Verdeck im Bereich >50 km/h |
| STAT_BETAETIGUNG_VERDECK_BEI_KLEINER_0_GRAD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betätigungen bei kleiner 0 Grad Verdeck |
| STAT_BETAETIGUNG_BEI_MINUS_10_GRAD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve Ergebnis wird nicht benutzt |
| STAT_BEDIENUNG_FBD_SCHLIESSZYLINDER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Betätigung Verdeck über FBD oder Schließzylinder Bedienstelle |
| STAT_VORGANG_BELADEHILFE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Betätigung Beladehilfe |

### RES_0XD2AE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERRIEGELUNG | 0-n | high | unsigned char | - | TAB_CV_VERRIEGELUNG | - | - | - | Status der Verriegelung (siehe TAB_CV_VERRIEGELUNG) |
| STAT_HALLZAEHLER_POS_VERRIEGELUNG_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | -30000.0 | Zählerstand Hallinkremente Verriegelung (kein Hallzähler vorhanden, wenn Wert -30000 ausgegeben wird) |

### RES_0XD9E6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_HAUPTS_AUFGEST | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_HAUPTS_ABGEL | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_SPANNB_TOTPUNKT_LINKS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_SPANNB_AUFGEST | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_SPANNB_ABLAGEPOS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_SPANNB_TOTPUNKT_RECHTS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_WINDL_VERRIEG | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_WINDL_INKREMENTALGEBER_STATUS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_WINDL_INKREMENTALGEBER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Inkremente |
| STAT_SENSOR_VKL_GESCHL_LINKS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_VKL_OFF_LINKS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_VKL_GESCHL_RECHTS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_VKL_OFF_RECHTS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_VERDECK_MITTELST | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |
| STAT_SENSOR_RESERVE2 | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Zustand siehe Tabelle TAB_CV_SENSORIK_ZUSTAND |

### RES_0XDDD5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN_SCHALTZUSTAND_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gepäckraumabtrennung in Position Schaltzustand 0x00: Aus 0x01: Ein |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN_VERSORGUNG_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Gepäckraumabtrennung in Position Versorgung 0 = Aus 1 = Ein |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN_FEHLERZUSTAND_NR | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Gepäckraumabtrennung in Position siehe Tabelle TAB_CV_SENSORIK_FEHLERZUSTAND |
| STAT_SCHALTER_RES1 | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XDDD9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_VENTILE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stand Zähler Wiederholsperre Ventile |
| STAT_SPERRE_VENTILE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Sperre Ventile |
| STAT_FREIGABE_VENTILE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Freigabe Ventile |
| STAT_ZAEHLER_HYDRAULIKPUMPE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stand Zähler Wiederholsperre Hydraulikpumpe |
| STAT_SPERRE_HYDRAULIKPUMPE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Sperre Hydraulikpumpe |
| STAT_FREIGABE_HYDRAULIKPUMPE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Freigabe Hydraulikpumpe |
| STAT_ZAEHLER_VERRIEGELUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stand Zähler Wiederholsperre Verriegelung |
| STAT_SPERRE_VERRIEGELUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Sperre Verriegelung |
| STAT_FREIGABE_VERRIEGELUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Freigabe Verriegelung |
| STAT_ZAEHLER_HECKSCHEIBE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stand Zähler Wiederholsperre Heckscheibe |
| STAT_SPERRE_HECKSCHEIBE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Sperre Heckscheibe |
| STAT_FREIGABE_HECKSCHEIBE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Freigabe Heckscheibe |

### RES_0XDDDF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über BUS |
| STAT_TEMPERATUR_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Außentemperatur über BUS |
| STAT_HECKKLAPPE | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_HECKKLAPPE | 1.0 | 1.0 | 0.0 | Zustand Heckklappe Interpretation siehe Tabelle |
| STAT_FENSTER_FAT | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | 1.0 | 1.0 | 0.0 | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_FENSTER_BFT | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | 1.0 | 1.0 | 0.0 | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_FENSTER_FATH | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | 1.0 | 1.0 | 0.0 | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_FENSTER_BFTH | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | 1.0 | 1.0 | 0.0 | Im SG erkannter Zustand des Fensters Fahrertür: Interpretation siehe Tabelle |
| STAT_POS_FENSTER_FAT_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Position Fenster |
| STAT_POS_FENSTER_BFT_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Position Fenster |
| STAT_POS_FENSTER_FATH_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Position Fenster |
| STAT_POS_FENSTER_BFTH_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Position Fenster |
| STAT_KOMFORT_FUNKTION | 0-n | high | unsigned char | - | TAB_CVM_KOMFORT_FUNKTION | 1.0 | 1.0 | 0.0 | Status Komfort Funktion Interpretation siehe Tabelle |
| STAT_MSA | 0-n | high | unsigned char | - | TAB_CVM_STAT_MSA | 1.0 | 1.0 | 0.0 | Status Motor Start Automatik |
| STAT_KLEMMEN | 0-n | high | unsigned char | - | TAB_CVM_KLEMMEN_STATUS | 1.0 | 1.0 | 0.0 | Status Zustand Klemmen Interpretation siehe Tabelle |
| STAT_VERBRAUCHERSTEUERUNG | 0-n | high | unsigned char | - | TAB_VERBRAUCHERSTEUERUNG | 1.0 | 1.0 | 0.0 | Status Verbrauchersteuerung Interpretation siehe Tabelle |
| STAT_FREIGABE_VERDECK | 0-n | high | unsigned char | - | TAB_CVM_FREIGABE | 1.0 | 1.0 | 0.0 | Status Freigabe Verdeck Interpretation siehe Tabelle |
| STAT_FREIGABE_FENSTER | 0-n | high | unsigned char | - | TAB_CVM_FREIGABE | 1.0 | 1.0 | 0.0 | Status Freigabe Fenster Interpretation siehe Tabelle |
| STAT_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Kilometerstand |
| STAT_RELATIVZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Relativzeit Fahrzeug |
| STAT_ZENTRALVERRIEGELUNG | 0-n | high | unsigned char | - | TAB_STAT_ZENTRALVERRIEGELUNG | - | - | - | Status Zentralverriegelung Fahrzeug Interpretation siehe Tabelle |

### RES_0XDDE1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPERR_UNTERSPANNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_UEBERSPANNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_SENSORVERSORGUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_VERDECKKASTENBODEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_BELADEHILFE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_KODIERDATEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_TIMEOUT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_POSITION_WINDLAUF | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_SENSORIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_AKTORIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_MOTOR_WINDLAUF | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_HYDRAULIKPUMPE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_VENTILE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_AUSSENTEMPERATUR | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_GESCHWINDIGKEIT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_HECKKLAPPE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_STANDVERBRAUCHER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_MOTORSTART | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_NEIGUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_BESCHLEUNIGUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_GESCHWINDIGKEIT_FAHRT | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Sperrbedingung nicht relevant |
| STAT_SPERR_WIEDERHOLSPERRE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_FREIGABE_CV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_POSITION_VERDECK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_SCHEIBEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CV_STEUERN_TASTEN | 0xA1A4 | - | Verdeckansteuerung durch Simulation Tastenbedienung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA1A4_R | RES_0xA1A4_R |
| CV_STEUERN_VENTILE_ST | 0xA1A5 | - | Ventile ansteuern beim Verdeck | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA1A5_R | RES_0xA1A5_R |
| CV_STEUERN_BAUGRUPPE | 0xA1A6 | - | Baugruppe ansteuern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA1A6_R | RES_0xA1A6_R |
| CV_ZUSATZINFO_GESCHWINDIGKEIT_RR6 | 0xD1DD | - | Abfrage der einzelenen Geschwindigkeiten im Verdecksystem | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD1DD_D | RES_0xD1DD_D |
| CV_AKTORIK_RR6 | 0xD206 | - | Abfrage der einzelnen Aktoren beim RR6 Verdecksystem | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD206_D |
| CV_AUSSTATTUNG | 0xD2A0 | - | Cabrioverdeck Ausstattung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2A0_D |
| CV_SPANNUNGSVERSORGUNG | 0xD2A1 | - | Status Spannungsversorgung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2A1_D |
| CV_BEDIENTASTER | 0xD2A4 | - | Cabrioverdeck Bedientaster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2A4_D |
| CV_FREIGABE | 0xD2A5 | - | Cabrioverdeck Freigabe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD2A5_D | RES_0xD2A5_D |
| CV_STATISTIKZAEHLER | 0xD2A7 | - | Cabrioverdeck Statistikzähler | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD2A7_D | RES_0xD2A7_D |
| CV_RELAIS | 0xD2AD | - | Relais Cabrioverdeck | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD2AD_D | - |
| CV_VERRIEGELUNG | 0xD2AE | - | Windlaufverriegelung Cabrioverdeck | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD2AE_D | RES_0xD2AE_D |
| CV_SENSORIK_RR6 | 0xD9E6 | - | Abfrage der einzelnen Sensoren beim Verdecksystem RR6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD9E6_D |
| CV_POSITION_VERDECK | 0xDDD0 | STAT_VERDECK_POSITION | Status Verdeckposition Interpretation siehe Tabelle | 0-n | - | high | unsigned char | TAB_VERDECK_POSITION | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CV_SCHALTER | 0xDDD5 | - | Cabrioverdeck Schalter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDD5_D |
| CV_WIEDERHOLSPERREN | 0xDDD9 | - | Status der Wiederholsperren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDD9_D |
| CV_BUS_IN_DATEN | 0xDDDF | - | Status Fahrzeug und Bordnetz | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDDF_D |
| CV_SPERRBEDINGUNGEN | 0xDDE1 | - | Cabrioverdeck Sperrbedingungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDE1_D |
| _STATUS_INTERN | 0x4000 | - | Status Aktorik, Sensorik, Tabellensteuerung | - | - | - | - | - | - | - | - | 0x24 | 22 | - | RES_0x4000_D |
| _ROHDATEN | 0x4020 | - | Auslesen der AD-Wandlerdaten | - | - | - | - | - | - | - | - | 0x24 | 22 | - | RES_0x4020 |
| _CV_HELBAKO_SW_VERSION | 0x4100 | - | Helbako SW-Versionen | - | - | - | - | - | - | - | - | 0x24 | 22 | - | RES_0x4100 |
| _CV_OUTPUTS | 0xF002 | - | Ansteuerung aller Ausgänge ohne Begrenzung | - | - | - | - | - | - | - | - | 0x24 | 31 | ARG_0xF002 | - |

### TAB_CVM_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht freigegeben |
| 0x01 | Freigegeben |
| 0xFF | Signal ungültig |

### TAB_CVM_KLEMMEN_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Init |
| 0x01 | Reserve |
| 0x02 | KL30 |
| 0x03 | KL30F Änderung |
| 0x04 | KL30F EIN |
| 0x05 | KL30B Änderung |
| 0x06 | KL30B EIN |
| 0x07 | KLR Änderung |
| 0x08 | KLR EIN |
| 0x09 | KL15 Änderung |
| 0x0A | KL15 EIN |
| 0x0B | KL50 Verzögerung |
| 0x0C | KL50 Änderung |
| 0x0D | KL50 EIN |
| 0x0E | Fehler |
| 0xFF | Signal ungültig |

### TAB_CVM_KOMFORT_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Komfortöffnen |
| 0x02 | Komfortschließen |
| 0x05 | Komfortöffnen Schließzylinder |
| 0x06 | Komfortschließen Schließzylinder |
| 0x09 | Komfortöffnen Funkschlüssel |
| 0x0A | Komfortschließen Funkschlüssel |
| 0x0D | Komfortöffnen ID-Geber im Nahbereich |
| 0x0E | Komfortschließen ID-Geber im Nahbereich |
| 0x0B | Beladeposition anfahren |
| 0x08 | Beladeposition ablegen |
| 0xFF | Signal ungültig |

### TAB_CVM_MOTOR_WINDLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor steht |
| 0x01 | Windlauf öffnet |
| 0x02 | Windlauf schließt |
| 0xFF | Status unbekannt |

### TAB_CVM_STAT_MSA

| WERT | TEXT |
| --- | --- |
| 0x00 | Verbrennungsmotor steht durch Fahrerwunsch |
| 0x08 | Verbrennungsmotor steht durch MSA-Anforderung |
| 0x04 | Startankündigung des Verbrennungsmotors durch Fahrerwunschq |
| 0x0C | Startankündigung des Verbrennungsmotors durch MSA-Anforderung |
| 0x01 | Verbrennungsmotor startet durch Fahrerwunsch |
| 0x05 | Verbrennungsmotor startet durch MSA-Anforderung |
| 0x02 | Verbrennungsmotor läuft |
| 0x06 | Stopankündigung des Verbrennungsmotors durch Fahrerwunsch |
| 0x0E | Stoppankündigung des Verbrennungsmotors durch MSA-Anforderung |
| 0x12 | Verbrennungsmotor im Auslauf durch Fahrerwunsch |
| 0x19 | Verbrennungsmotor im Auslauf durch MSA-Anforderung |
| 0x1E | Verbrennungsmotor im Auslauf mit Startankündigung durch MSA-Anforderung |
| 0xFF | Signal ungültig |

### TAB_CVM_ZUSTAENDE_FENSTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Geschlossen |
| 0x01 | Zwischenstellung |
| 0x02 | Geoeffnet |
| 0xFF | Ungueltig |

### TAB_CVM_ZUSTAENDE_HECKKLAPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Geschlossen |
| 0x01 | Geöffnet |
| 0xFF | Ungültig |

### TAB_CV_ANSTEUERRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stopp |
| 0x01 | Oeffnen |
| 0x02 | Schliessen |

### TAB_CV_ANSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Applikation |
| 0x01 | Diagnose |

### TAB_CV_ANST_BAUGRUPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Ansteuerung |
| 0x33 | Verriegelung öffnen |
| 0x55 | Verriegelung schließen |
| 0xAA | Verdeckklappe schließen |
| 0xCC | Verdeckklappe öffnen |
| 0xFF | Ansteuerung ungültig |

### TAB_CV_BEDIENANFORDERUNG

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Keine Bedienanforderung |
| 0x01 | Bedientaster Öffnen |
| 0x02 | Bedientaster Schließen |
| 0x05 | Komfortöffnen Türschloss |
| 0x06 | Komfortschließen Türschloss |
| 0x09 | Komfortöffnen ID-Geber |
| 0x0A | Komfortschließen ID-Geber |
| 0x11 | Komfortöffnen Funkschlüssel |
| 0x12 | Komfortschließen Funkschlüssel |
| 0xFF | Bedienanforderung ungültig |

### TAB_CV_BEDIENTASTER_BELADEHILFE

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Betätigung |
| 0x01 | Richtung öffnen betätigt |
| 0x02 | Richtung schließen betätigt |
| 0xFF | ungültig |

### TAB_CV_BEDIENTASTER_VERDECK

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Betätigung |
| 0x01 | Richtung öffnen betätigt |
| 0x02 | Richtung schließen betätigt |
| 0xFF | ungültig |

### TAB_CV_ELEMENT

| WERT | TEXT |
| --- | --- |
| 0x01 | Verdeck |
| 0x02 | Beladehilfe |
| 0x03 | Heckscheibe |

### TAB_CV_RELAIS

| WERT | TEXT |
| --- | --- |
| 0x01 | SCA 1 |
| 0x02 | SCA 2 |
| 0x03 | SCA 3 |
| 0x04 | Beladehilfe 1 |
| 0x05 | Beladehilfe 2 |
| 0x06 | Beladehilfe 3 |
| 0x07 | Windlaufverriegelung 1 |
| 0x08 | Windlaufverriegelung 2 |
| 0x09 | Relais 9 |
| 0x0A | Relais 10 |

### TAB_CV_RELAIS_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Ausgang auf Ubatt |
| 0x01 | Ausgang auf Masse |

### TAB_CV_SENSORIK_FEHLERZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Kurzschluss nach Masse oder Leitungsunterbrechung |
| 0x02 | Kurzschluss nach Ubatt |
| 0x03 | Signal ungültig |

### TAB_CV_SENSORIK_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Sensor inaktiv |
| 0x01 | Sensor aktiv |
| 0x02 | Sensorsignal ungültig |
| 0x03 | Kurzschluss nach KL31 |
| 0x04 | Weicher Kurzschluss nach KL30 |
| 0x05 | Harter Kurzschluss nach KL30 |
| 0x06 | Versorgungsspannung ist abgeschaltet oder fehlerhaft |
| 0x07 | Sensor auscodiert oder noch nicht vorhanden |

### TAB_CV_STAT_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Service noch nicht angefordert |
| 0x01 | Pending (Auftrag angekommen, Verfahren noch nicht gestartet) |
| 0x02 | Routine kann nicht ausgeführt werden |
| 0x03 | Routine wird ausgeführt |
| 0x04 | Routine erfolgreich beendet |
| 0x05 | Routine beendet mit Fehler |
| 0x06 | Routine abgebrochen |
| 0xFF | ungültig |

### TAB_CV_STAT_SPANNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Spannung ausgeschaltet |
| 0x01 | Normalspannung |
| 0x02 | Unterspannung |
| 0x03 | Überspannung |
| 0x04 | Spannung fehlerhaft |
| 0x05 | Spannung abgeschaltet, wegen Fehler |
| 0x06 | Spannungsfilter Neustart |
| 0x07 | Positive Flanke an Spannung |
| 0x0F | Initialisierung |
| 0xFF | ungültig |

### TAB_CV_VERRIEGELUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Verriegelung geschlossen |
| 0x01 | Verriegelung in Zwischenstellung |
| 0x02 | Verriegelung offen |
| 0x03 | Verriegelung nicht initialisiert |
| 0x04 | Blockfahrt |
| 0xFF | Signal ungültig |

### TAB_FF_SENSOREN_RR6

| WERT | TEXT |
| --- | --- |
| 0x0001 | Verdeckklappe verriegelt rechts |
| 0x0002 | Frontverschluss verriegelt |
| 0x0008 | Spannbügel über Totpunkt rechts |
| 0x0010 | Spannbügel Ablageposition |
| 0x0020 | Verdeckklappe offen rechts |
| 0x0040 | Verdeck aufgestellt |
| 0x0080 | Verdeck abgelegt |
| 0x0100 | Frontverschluss geöffnet |
| 0x0800 | Verdeckklappe verriegelt links |
| 0x2000 | Spannbügel über Totpunkt links |
| 0x4000 | Spannbügel aufgestellt |
| 0x8000 | Verdeckklappe offen links |
| 0x0801 | Verdeckklappe verriegelt links und rechts |
| 0x8020 | Verdeckklappe offen links und rechts |
| 0x2008 | Spannbügel über Totpunkt links und rechts |
| 0xFFFF | ungültiger Sensor |

### TAB_STAT_AUSGANG_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Ausgang Tristate |
| 0x01 | Ausgang an KL30 |
| 0x02 | Ausgang an KL31 |
| 0xff | Status ungültig |

### TAB_STAT_ZENTRALVERRIEGELUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Status empfangen |
| 0x01 | Mindestens eine Tür entriegelt |
| 0x02 | Mindestens eine Tür verriegelt |
| 0x03 | Mindestens eine Tür entriegelt / mind eine Tür verriegelt |
| 0x04 | interner ZV-Master gesichert |
| 0x05 | interner ZV-Master gesichert |
| 0x06 | interner ZV-Master gesichert |
| 0x07 | interner ZV-Master gesichert |
| 0x0f | Signal ungültig |

### TAB_VENTILSTATUS

| RESULTNAME | EINHEIT | L/H | DATENTYP | NAME | MASKE | INFO | MUL | DIV | ADD | LABEL |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VENTIL1_3_OK | 0/1 | - | unsigned char | - | 0x01 | - | - | - | - | - |
| STAT_VENTIL2_4_OK | 0/1 | - | unsigned char | - | 0x02 | - | - | - | - | - |
| STAT_RELAIS2_4_OK | 0/1 | - | unsigned char | - | 0x04 | - | - | - | - | - |
| STAT_RELAIS1_3_OK | 0/1 | - | unsigned char | - | 0x08 | - | - | - | - | - |

### TAB_VERBRAUCHERSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Spezielle Standverbraucher dürfen sich einschalten |
| 0x02 | Standverbraucher müssen sich abschalten |
| 0xFF | Signal ungültig |

### TAB_VERDECK_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Komplett geschlossen und verriegelt |
| 0x01 | Zwischenstellung |
| 0x02 | Komplett geöffnet und verriegelt |
| 0x03 | Beladeposition |
| 0x04 | Hardtop aufgesetzt |
| 0x05 | Komplett geschlossen |
| 0x06 | Komplett geöffnet |
| 0x08 | Notverriegelung durchgeführt |
| 0x09 | Beladehilfe in Zwischenstellung |
| 0xFF | Ungültig |

### TAB_VERRIEGELUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht initialisiert |
| 0x01 | Verriegelung geschlossen |
| 0x02 | Verriegelung in Zwischenstellung |
| 0x03 | Verriegelung offen |
| 0x04 | Blockfahrt |
| 0xff | ungültig |
