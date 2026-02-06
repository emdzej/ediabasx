# pma_20.prg

## General

|  |  |
| --- | --- |
| File | pma_20.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 54 |
| Origin | BMW EF-521 Schiek |
| Revision | 7.000 |
| Author | BMW EF-601 Jurthe, Bosch AE-BE/ÊPM1 Klee, Bosch AE-BE/EPM1 Stei |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Parkmanöver-Assistent |  |  |
| ORIGIN | string | BMW EF-521 Schiek |  |  |
| REVISION | string | 7.000 |  |  |
| AUTHOR | string | BMW EF-601 Jurthe, Bosch AE-BE/ÊPM1 Klee, Bosch AE-BE/EPM1 Stei |  |  |
| COMMENT | string | - |  |  |
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

### STATUS_SIGNALWEGE_SENSOREN

Gibt die Signalwege der Ultraschallsensoren der PDC aus. UDS: $22   ReadDataByIdentifier $D67C Direkte und indirekte Signalwege Modus  : Default

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

### ARG_0XD388

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNGSSIGNAL_PDC | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, wie das Aktivierungssignal für PDC simuliert  werden soll:  0 = AUS 1 = EIN |
| AKTIVIERUNGSSIGNAL_TV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, wie das Aktivierungssignal für TV simuliert  werden soll:  0 = AUS 1 = EIN |
| AKTIVIERUNGSSIGNAL_RV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, wie das Aktivierungssignal für Rückfahrkamera simuliert  werden soll:  0 = AUS 1 = EIN |
| AKTIVIERUNGSSIGNAL_PMA | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, wie das Aktivierungssignal für PMA simuliert  werden soll:  0 = AUS 1 = EIN |

### ARG_0XD673

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Startet den Sensortest für die Ultraschallsensoren. 1 = Start |

### ARG_0XD676

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schaltet das PDC-System an oder aus:  0 = AUS = PDC nicht aktiv,  1 = EIN = PDC aktiv |

### ARG_0XD687

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COR_FACT_WHL_MAG | % | high | unsigned char | - | - | 10.0 | 1.0 | -880.0 | 88.0 | 112.0 | Gewünschter Korrekturfaktor |

### ARG_0XD688

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | - Beschreibung: Schaltet die Aktualisierung des Korrektorfaktors an oder aus:  - 0 = AUS = Aktualisierung nicht aktiv,  - 1 = EIN = Aktualisierung aktiv |

### ARG_0XF010

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Startet den NVM Integritätstest. 1=Start |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### CDTCI_GODTC_DOP

| WERT | TEXT |
| --- | --- |
| 0 | EMISSION_REL |
| 16777210 | DEM_DTC_GROUP_NETWORK_COM_DTCS |
| 16777211 | DEM_DTC_GROUP_POWERTRAIN_DTCS |
| 16777212 | DEM_DTC_GROUP_CHASSIS_DTCS |
| 16777213 | DEM_DTC_GROUP_BODY_DTCS |

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
| 0x022C00 | Energiesparmode aktiv | 0 |
| 0x02FF2C | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x481E02 | PMA Funktion Hands-on erkannt | 1 |
| 0x481E03 | PMA Funktion Geöffnete Tür | 1 |
| 0x481E04 | PMA Funktion Falsche Gangwahl | 1 |
| 0x481E05 | PMA Funktion Falsche Blinkerwahl | 1 |
| 0x481E06 | PMA Funktion Erkannter Schlupf | 1 |
| 0x481E07 | PMA Funktion Keine geeignete Einparkroute vorhanden | 1 |
| 0x481E11 | PMA Codierung ungueltige Daten | 0 |
| 0x481E12 | PMA Codierung Steuergerät nicht codiert | 0 |
| 0x481E13 | Spannungsversorgung Globale Unterspannung extern | 1 |
| 0x481E14 | Spannungsversorgung Globale Überspannung extern | 1 |
| 0x481E15 | Spannungsversorgung Lokale Unterspannung | 1 |
| 0x481E16 | Spannungsversorgung Lokale Überspannung | 1 |
| 0x481E31 | PMA Codierung Transaktion gescheitert | 0 |
| 0x481E32 | PMA Codierung Signatur fehlerhaft | 0 |
| 0x481E33 | PMA Codierung falsches Fahrzeug | 0 |
| 0x481E45 | PMA Funktion max. Einparkgeschwindigkeit überschritten | 1 |
| 0x481E4D | PMA Steuergerät inter Interner ASIC Fehler | 0 |
| 0x481E4E | PMA Steuergerät inter SPI-Kommunikation ASIC-Prozessor fehlerhaft | 0 |
| 0x481E4F | PMA Sensorversorgungsspannung Kurzschluss nach Minus oder Übertemperatur | 0 |
| 0x481E50 | PMA Sensorversorgungsspannung Kurzschluss nach Plus oder Übertemperatur | 0 |
| 0x481E51 | PMA Sensorversorgungsspannung Überspannung | 0 |
| 0x481E52 | PMA Sensorversorgungsspannung Unterspannung | 0 |
| 0x481E55 | CANIF - CAN Interface - CAN Interface - Sendepuffer voll | 0 |
| 0x481E56 | CANIF - CAN Interface - CAN Interface - ungültige ID bei PDU-Senden | 0 |
| 0x481E57 | CANIF - CAN Interface - CAN Interface - ungültige ID bei PDU-Empfang | 0 |
| 0x481E5A | CANTP - CAN Transportprotokoll - CAN Transportprotokoll - fehlerhaft | 0 |
| 0x481E5C | Flashprozess Löschen gescheitert | 0 |
| 0x481E5E | Flashprozess Schreiben gescheitert | 0 |
| 0x481E60 | Flashprozess Lesen gescheitert | 0 |
| 0x481E61 | NVM - Nichtflüchtiger Speicher - Integrität gescheitert | 0 |
| 0x481E62 | NVM - Nichtflüchtiger Speicher - Anfrage gescheitert | 0 |
| 0x481E63 | Flashprozess Vergleich gescheitert | 0 |
| 0x481E64 | PMA Steuergerät Intern - Initialisierung fehlgeschlagen Parameter | 0 |
| 0x481E65 | PMA Steuergerät Intern - Flash Parameter-Sektion inkompatibel zu Software | 0 |
| 0x481E66 | PMA Steuergerät Intern - Initialisierung fehlgeschlagen Hardware Ursache | 0 |
| 0x481E67 | PMA Steuergerät Intern - NVM Parameter-Sektion inkompatibel zu Software | 0 |
| 0x481E68 | PMA Steuergerät Intern - RAM Fehler | 0 |
| 0x481E69 | PMA Steuergerät Intern - ROM Flash Checksummenfehler | 0 |
| 0x481E6A | PMA Steuergerät Intern - ADC Fehler Referenzspannung | 0 |
| 0x481E6B | PMA Steuergerät Intern - ADC Fehler Timeout | 0 |
| 0x481E6C | PMA Codierung Fehlerhaft | 0 |
| 0x481E6E | PMA Steuergerät Intern Software Fehler | 0 |
| 0x481E6F | CAN - CAN - Zeitüberschreitung | 0 |
| 0x481E72 | PMA Funktion - Bewegungsrichtung unbekannt | 1 |
| 0x481E73 | PMA Funktion - Wegstreckensignal unplausibel | 1 |
| 0x481E74 | PMA Funktion - Lenkwinkel VA unplausibel | 1 |
| 0x481E75 | PMA Funktion - Gangsignal unplausibel | 1 |
| 0x481E76 | PMA Funktion - Geschwindigkeit unplausibel | 1 |
| 0x481E77 | PMA Funktion - Abbruch Fehlbedienung Sammelfehler | 1 |
| 0x481E78 | PMA Funktion - Abbruch Systemereignis Sammelfehler | 1 |
| 0x803209 | Ultraschallsensor hinten Außen links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80320B | Ultraschallsensor hinten Außen links: Ausschwingzeit zu kurz | 0 |
| 0x80320D | Ultraschallsensor hinten Außen links: Sensor antwortet nicht | 0 |
| 0x80320E | Ultraschallsensor hinten Außen links: Programmierung fehlerhaft | 0 |
| 0x80320F | Ultraschallsensor hinten Mitte links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803211 | Ultraschallsensor hinten Mitte links: Ausschwingzeit zu kurz | 0 |
| 0x803213 | Ultraschallsensor hinten Mitte links: Sensor antwortet nicht | 0 |
| 0x803214 | Ultraschallsensor hinten Mitte links: Programmierung fehlerhaft | 0 |
| 0x803215 | Ultraschallsensor hinten Mitte rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803217 | Ultraschallsensor hinten Mitte rechts: Ausschwingzeit zu kurz | 0 |
| 0x803219 | Ultraschallsensor hinten Mitte rechts: Sensor antwortet nicht | 0 |
| 0x80321A | Ultraschallsensor hinten Mitte rechts: Programmierung fehlerhaft | 0 |
| 0x80321B | Ultraschallsensor hinten Außen rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80321D | Ultraschallsensor hinten Außen rechts: Ausschwingzeit zu kurz | 0 |
| 0x80321F | Ultraschallsensor hinten Außen rechts: Sensor antwortet nicht | 0 |
| 0x803220 | Ultraschallsensor hinten Außen rechts: Programmierung fehlerhaft | 0 |
| 0x80322D | Ultraschallsensor vorn Außen links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80322F | Ultraschallsensor vorn Außen links: Ausschwingzeit zu kurz | 0 |
| 0x803231 | Ultraschallsensor vorn Außen links: Sensor antwortet nicht | 0 |
| 0x803232 | Ultraschallsensor vorn Außen links: Programmierung fehlerhaft | 0 |
| 0x803233 | Ultraschallsensor vorn Mitte links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803235 | Ultraschallsensor vorn Mitte links: Ausschwingzeit zu kurz | 0 |
| 0x803237 | Ultraschallsensor vorn Mitte links: Sensor antwortet nicht | 0 |
| 0x803238 | Ultraschallsensor vorn Mitte links: Programmierung fehlerhaft | 0 |
| 0x803239 | Ultraschallsensor vorn Mitte rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80323B | Ultraschallsensor vorn Mitte rechts: Ausschwingzeit zu kurz | 0 |
| 0x80323D | Ultraschallsensor vorn Mitte rechts: Sensor antwortet nicht | 0 |
| 0x80323E | Ultraschallsensor vorn Mitte rechts: Programmierung fehlerhaft | 0 |
| 0x80323F | Ultraschallsensor vorn Außen rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803241 | Ultraschallsensor vorn Außen rechts: Ausschwingzeit zu kurz | 0 |
| 0x803243 | Ultraschallsensor vorn Außen rechts: Sensor antwortet nicht | 0 |
| 0x803244 | Ultraschallsensor vorn Außen rechts: Programmierung fehlerhaft | 0 |
| 0x803249 | PMA Sensor vorn Seite links Signalleitung Kurzschluss nach Plus | 0 |
| 0x80324B | PMA Sensor vorn Seite links Ausschwingzeit zu kurz | 0 |
| 0x80324D | PMA Sensor vorn Seite links Kommunikationsfehler | 0 |
| 0x80324E | PMA Sensor vorn Seite links Programmierung fehlerhaft | 0 |
| 0x80324F | PMA Sensor vorn Seite rechts Signalleitung Kurzschluss nach Plus | 0 |
| 0x803251 | PMA Sensor vorn Seite rechts Ausschwingzeit zu kurz | 0 |
| 0x803253 | PMA Sensor vorn Seite rechts Kommunikationsfehler | 0 |
| 0x803254 | PMA Sensor vorn Seite rechts Programmierung fehlerhaft | 0 |
| 0x803271 | Akustische Abstandswarnung nicht möglich | 1 |
| 0x803280 | PDC nicht aktivierbar | 0 |
| 0x803281 | TVC nicht aktivierbar | 1 |
| 0x803282 | RVC nicht aktivierbar | 1 |
| 0x803283 | PMA nicht aktivierbar | 0 |
| 0x803294 | PDC aktiv ohne Aktivierung | 0 |
| 0x803295 | TVC aktiv ohne Aktivierung | 0 |
| 0x803296 | RVC aktiv ohne Aktivierung | 0 |
| 0x803297 | PMA aktiv ohne Aktivierung | 0 |
| 0x8032B0 | Ultraschallsensor hinten Außen links, Leitung: Unterbrechung | 0 |
| 0x8032B1 | Ultraschallsensor hinten Außen links, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032B2 | Ultraschallsensor hinten Außen links: Ausschwingzeit zu lang | 0 |
| 0x8032B3 | Ultraschallsensor hinten Außen links: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032B4 | Ultraschallsensor hinten Außen links: Falscher Sensortyp verbaut | 0 |
| 0x8032B5 | Ultraschallsensor hinten Außen links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032B6 | Ultraschallsensor hinten Außen links: Nebenschluss Datenleitung (Signalpegel n,i.O.) | 0 |
| 0x8032B8 | Ultraschallsensor hinten Mitte links, Leitung: Unterbrechung | 0 |
| 0x8032B9 | Ultraschallsensor hinten Mitte links, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032BA | Ultraschallsensor hinten Mitte links: Ausschwingzeit zu lang | 0 |
| 0x8032BB | Ultraschallsensor hinten Mitte links: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032BC | Ultraschallsensor hinten Mitte links: Falscher Sensortyp verbaut | 0 |
| 0x8032BD | Ultraschallsensor hinten Mitte links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032BE | Ultraschallsensor hinten Mitte links: Nebenschluss Datenleitung  (Signalpegel n.i.O.) | 0 |
| 0x8032C0 | Ultraschallsensor hinten Mitte rechts, Leitung: Unterbrechung | 0 |
| 0x8032C1 | Ultraschallsensor hinten Mitte rechts, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032C2 | Ultraschallsensor hinten Mitte rechts: Ausschwingzeit zu lang | 0 |
| 0x8032C3 | Ultraschallsensor hinten Mitte rechts: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032C4 | Ultraschallsensor hinten Mitte rechts: Falscher Sensortyp verbaut | 0 |
| 0x8032C5 | Ultraschallsensor hinten Mitte rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032C6 | Ultraschallsensor hinten Mitte rechts: Nebenschluss Datenleitung (Signalpegel n.i.O.) | 0 |
| 0x8032C8 | Ultraschallsensor hinten Außen rechts, Leitung: Unterbrechung | 0 |
| 0x8032C9 | Ultraschallsensor hinten Außen rechts, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032CA | Ultraschallsensor hinten Außen rechts: Ausschwingzeit zu lang | 0 |
| 0x8032CB | Ultraschallsensor hinten Außen rechts: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032CC | Ultraschallsensor hinten Außen rechts: Falscher Sensortyp verbaut | 0 |
| 0x8032CD | Ultraschallsensor hinten Außen rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032CE | Ultraschallsensor hinten Außen rechts: Nebenschluss Datenleitung (Signalpegel n.i.O.) | 0 |
| 0x8032D0 | Ultraschallsensor vorn Außen links, Leitung: Unterbrechung | 0 |
| 0x8032D1 | Ultraschallsensor vorn Außen links, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032D2 | Ultraschallsensor vorn Außen links: Ausschwingzeit zu lang | 0 |
| 0x8032D3 | Ultraschallsensor vorn Außen links: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032D4 | Ultraschallsensor vorn Außen links: Falscher Sensortyp verbaut | 0 |
| 0x8032D5 | Ultraschallsensor vorn Außen links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032D6 | Ultraschallsensor vorn Außen links: Nebenschluss Datenleitung (Signalpegel n.i.O.) | 0 |
| 0x8032D8 | Ultraschallsensor vorn Mitte links, Leitung: Unterbrechung | 0 |
| 0x8032D9 | Ultraschallsensor vorn Mitte links, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032DA | Ultraschallsensor vorn Mitte links: Ausschwingzeit zu lang | 0 |
| 0x8032DB | Ultraschallsensor vorn Mitte links: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032DC | Ultraschallsensor vorn Mitte links: Falscher Sensortyp verbaut | 0 |
| 0x8032DD | Ultraschallsensor vorn Mitte links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032DE | Ultraschallsensor vorn Mitte links: Nebenschluss Datenleitung (Signalpegel n.i.O.) | 0 |
| 0x8032E0 | Ultraschallsensor vorn Mitte rechts, Leitung: Unterbrechung | 0 |
| 0x8032E1 | Ultraschallsensor vorn Mitte rechts, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032E2 | Ultraschallsensor vorn Mitte rechts: Ausschwingzeit zu lang | 0 |
| 0x8032E3 | Ultraschallsensor vorn Mitte rechts: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032E4 | Ultraschallsensor vorn Mitte rechts: Falscher Sensortyp verbaut | 0 |
| 0x8032E5 | Ultraschallsensor vorn Mitte rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032E6 | Ultraschallsensor vorn Mitte rechts: Nebenschluss Datenleitung (Signalpegel n.i.O.) | 0 |
| 0x8032E8 | Ultraschallsensor vorn Außen rechts, Leitung: Unterbrechung | 0 |
| 0x8032E9 | Ultraschallsensor vorn Außen rechts, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032EA | Ultraschallsensor vorn Außen rechts: Ausschwingzeit zu lang | 0 |
| 0x8032EB | Ultraschallsensor vorn Außen rechts: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032EC | Ultraschallsensor vorn Außen rechts: Falscher Sensortyp verbaut | 0 |
| 0x8032ED | Ultraschallsensor vorn Außen rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032EE | Ultraschallsensor vorn Außen rechts: Nebenschluss Datenleitung (Signalpegel n.i.O.) | 0 |
| 0x8032F0 | PMA Sensor vorn Seite links Leitung Unterbrechung | 0 |
| 0x8032F1 | PMA Sensor vorn Seite links Signalleitung Kurzschluss nach Minus | 0 |
| 0x8032F2 | PMA Sensor vorn Seite links Ausschwingzeit zu lang | 0 |
| 0x8032F3 | PMA Sensor vorn Seite links Interner Sensorabgleich nicht möglich | 0 |
| 0x8032F4 | PMA Sensor vorn Seite links Falscher Sensortyp verbaut | 0 |
| 0x8032F5 | PMA Sensor vorn Seite links Akustischer oder elektromagnetische Störung | 1 |
| 0x8032F6 | PMA Sensor vorn Seite links Nebenschluss Datenleitung Signalpegel n.i.O. | 0 |
| 0x8032F8 | PMA Sensor vorn Seite rechts Leitung Unterbrechung | 0 |
| 0x8032F9 | PMA Sensor vorn Seite rechts Signalleitung Kurzschluss nach Minus | 0 |
| 0x8032FA | PMA Sensor vorn Seite rechts Ausschwingzeit zu lang | 0 |
| 0x8032FB | PMA Sensor vorn Seite rechts Interner Sensorabgleich nicht möglich | 0 |
| 0x8032FC | PMA Sensor vorn Seite rechts Falscher Sensortyp verbaut | 0 |
| 0x8032FD | PMA Sensor vorn Seite rechts Akustischer oder elektromagnetische Störung | 1 |
| 0x8032FE | PMA Sensor vorn Seite rechts Nebenschluss Datenleitung Signalpegel n.i.O. | 0 |
| 0x803300 | Ultraschallsensor hinten Seite links Signalleitung Kurzschluss nach Plus | 0 |
| 0x803301 | Ultraschallsensor hinten Seite links Ausschwingzeit zu kurz | 0 |
| 0x803302 | Ultraschallsensor hinten Seite links Kommunikationsfehler | 0 |
| 0x803303 | Ultraschallsensor hinten Seite links Programmierung fehlerhaft | 0 |
| 0x803304 | Ultraschallsensor hinten Seite links Leitung Unterbrechung | 0 |
| 0x803305 | Ultraschallsensor hinten Seite links Signalleitung Kurzschluss nach Minus | 0 |
| 0x803307 | Ultraschallsensor hinten Seite links Interner Sensorabgleich nicht möglich | 0 |
| 0x803308 | Ultraschallsensor hinten Seite links Falscher Sensortyp verbaut | 0 |
| 0x80330A | Ultraschallsensor hinten Seite links Nebenschluss Datenleitung Signalpegel n.i.O. | 0 |
| 0x80330B | Ultraschallsensor hinten Seite rechts Signalleitung Kurzschluss nach Plus | 0 |
| 0x80330C | Ultraschallsensor hinten Seite rechts Ausschwingzeit zu kurz | 0 |
| 0x80330D | Ultraschallsensor hinten Seite rechts Kommunikationsfehler | 0 |
| 0x80330E | Ultraschallsensor hinten Seite rechts Programmierung fehlerhaft | 0 |
| 0x80330F | Ultraschallsensor hinten Seite rechts Leitung Unterbrechung | 0 |
| 0x803310 | Ultraschallsensor hinten Seite rechts Signalleitung Kurzschluss nach Minus | 0 |
| 0x803312 | Ultraschallsensor hinten Seite rechts Interner Sensorabgleich nicht möglich | 0 |
| 0x803313 | Ultraschallsensor hinten Seite rechts Falscher Sensortyp verbaut | 0 |
| 0x803315 | Ultraschallsensor hinten Seite rechts Nebenschluss Datenleitung Signalpegel n.i.O. | 0 |
| 0xD40468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xD40BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD41428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) - Timeout | 1 |
| 0xD4142C | Signalfehler (Außentemperatur, ID: A_TEMP) - Ungültig | 1 |
| 0xD41450 | Signalfehler (Blinken, ID: BLINKEN) - Ungültig | 1 |
| 0xD41451 | Botschaftsfehler (Blinken, ID: BLINKEN) - Timeout | 1 |
| 0xD41482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Timeout | 1 |
| 0xD4149D | Signalfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Qualifier | 1 |
| 0xD414A4 | Signalfehler (Anfrage Aktivierung Funktion Parken, ID: RQ_ACTVN_FN_PKG) - Ungültig | 1 |
| 0xD414A5 | Signalfehler (Anfrage Aktivierung Funktion Parken, ID: RQ_ACTVN_FN_PKG) - Undefiniert | 1 |
| 0xD414A6 | Botschaftsfehler (Bedienung Taster Parken, ID: OP_PUBU_PKG) - Timeout | 1 |
| 0xD414A7 | Signalfehler  (Bedienung Taster Parken, ID: OP_PUBU_PKG) - Ungültig | 1 |
| 0xD414A8 | Signalfehler (Bedienung Taster Parken, ID: OP_PUBU_PKG) - Undefiniert | 1 |
| 0xD414AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) - Timeout | 1 |
| 0xD414AD | Signalfehler (Status MMI Funktion PDC, ID: ST_MMI_FN_PDC ) - Ungültig | 1 |
| 0xD414AE | Signalfehler (Status MMI Funktion PDC, ID: ST_MMI_FN_PDC ) - Undefiniert | 1 |
| 0xD414B2 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Ungültig | 1 |
| 0xD414B4 | Botschaftsfehler (Status Qualifier Rear-View, ID: ST_QU_RV) - Timeout | 1 |
| 0xD414B5 | Botschaftsfehler (Status Qualifier Rear-View, ID: ST_QU_RV) - Checksumme | 1 |
| 0xD414B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 |
| 0xD414BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 |
| 0xD414BC | Botschaftsfehler (Status Qualifier Rear-View, ID: ST_QU_RV) - Alive | 1 |
| 0xD414BD | Signalfehler (Status Qualifier Rear-View, ID: ST_QU_RV) - Ungültig | 1 |
| 0xD414BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 |
| 0xD414BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Undefiniert | 1 |
| 0xD414C0 | Signalfehler (Status Qualifier Rear-View, ID: ST_QU_RV) - Undefiniert | 1 |
| 0xD414C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Timeout | 1 |
| 0xD414C4 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Alive | 1 |
| 0xD414C6 | Botschaftsfehler (Status Qualifier Top-View, ID: ST_QU_TVIEW) - Timeout | 1 |
| 0xD414C7 | Botschaftsfehler (Status Qualifier Top-View, ID: ST_QU_TVIEW) - Checksumme | 1 |
| 0xD414C8 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Ungültig | 1 |
| 0xD414C9 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Undefiniert | 1 |
| 0xD414CA | Botschaftsfehler (Status Qualifier Top-View, ID: ST_QU_TVIEW) - Alive | 1 |
| 0xD414CB | Signalfehler (Status Qualifier Top-View, ID: ST_QU_TVIEW) - Ungültig | 1 |
| 0xD414CF | Signalfehler (Status Qualifier Top-View, ID: ST_QU_TVIEW) - Undefiniert | 1 |
| 0xD414D3 | Botschaftsfehler (Wegstrecke Fahrzeug, ID: MILE_VEH) - Timeout | 1 |
| 0xD414D4 | Signalfehler (Wegstrecke Fahrzeug, ID: MILE_VEH) - Ungültig | 1 |
| 0xD414D9 | Botschaftsfehler (Wegstrecke Rad Hinterachse, ID: MILE_WHL_BAX) - Timeout | 1 |
| 0xD414DA | Signalfehler (Wegstrecke Rad Hinterachse, ID: MILE_WHL_BAX) - Ungültig | 1 |
| 0xD414DB | Signalfehler (Wegstrecke Rad Hinterachse, ID: MILE_WHL_BAX) - Undefiniert | 1 |
| 0xD414E1 | Signalfehler (Wegstrecke Rad Hinterachse, ID: MILE_WHL_BAX) - Qualifier | 1 |
| 0xD414E2 | Botschaftsfehler (Wegstrecke Rad Vorderachse, ID: MILE_WHL_FTAX) - Timeout | 1 |
| 0xD414E3 | Signalfehler (Wegstrecke Rad Vorderachse, ID: MILE_WHL_FTAX) - Ungültig | 1 |
| 0xD414E4 | Signalfehler (Wegstrecke Rad Vorderachse, ID: MILE_WHL_FTAX) - Undefiniert | 1 |
| 0xD414E6 | Signalfehler (Wegstrecke Rad Vorderachse, ID: MILE_WHL_FTAX) - Qualifier | 1 |
| 0xD414F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Timeout | 1 |
| 0xD414F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Timeout | 1 |
| 0xD414FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Alive | 1 |
| 0xD414FC | Signalfehler (Klemmen, ID: KLEMMEN) - Ungültig | 1 |
| 0xD414FD | Signalfehler (Klemmen, ID: KLEMMEN) - Undefiniert | 1 |
| 0xD4151C | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Ungültig | 1 |
| 0xD4151D | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Undefiniert | 1 |
| 0xD41526 | Signalfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Ungültig | 1 |
| 0xD41527 | Signalfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Undefiniert | 1 |
| 0xD41542 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Timeout | 1 |
| 0xD41544 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Alive | 1 |
| 0xD41548 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Ungültig | 1 |
| 0xD41549 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Undefiniert | 1 |
| 0xD4158C | Botschaftsfehler (Relativzeit, ID: RELATIVZEIT) - Timeout | 1 |
| 0xD415A0 | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) - Timeout | 1 |
| 0xD415A4 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Ungültig | 1 |
| 0xD415A5 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Undefiniert | 1 |
| 0xD415BC | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Timeout | 1 |
| 0xD415C2 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Ungültig | 1 |
| 0xD415C3 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Undefiniert | 1 |
| 0xD415C4 | Botschaftsfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Timeout | 1 |
| 0xD415C6 | Botschaftsfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Alive | 1 |
| 0xD415C8 | Signalfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Ungültig | 1 |
| 0xD415C9 | Signalfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Undefiniert | 1 |
| 0xD4161C | Botschaftsfehler (Toleranzabgleich Rad, ID: TOMA_WHL) - Timeout | 1 |
| 0xD41620 | Signalfehler (Toleranzabgleich Rad, ID: TOMA_WHL) - Ungültig | 1 |
| 0xD41621 | Signalfehler (Toleranzabgleich Rad, ID: TOMA_WHL) - Undefiniert | 1 |
| 0xD41652 | Botschaftsfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) - Timeout | 1 |
| 0xD41656 | Signalfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) - Ungültig | 1 |
| 0xD41657 | Signalfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) - Undefiniert | 1 |
| 0xD4167B | Botschaftsfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Timeout | 1 |
| 0xD4170F | Botschaftsfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Alive | 1 |
| 0xD41711 | Signalfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Ungültig | 1 |
| 0xD41744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 |
| 0xD4180D | Signalfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Undefiniert | 1 |
| 0xD419AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 |
| 0xD41A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Qualifier | 1 |
| 0xD41A3F | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Qualifier | 1 |
| 0xD41A57 | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Qualifier | 1 |
| 0xD41A62 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Qualifier | 1 |
| 0xD41A84 | Signalfehler (Toleranzabgleich Rad, ID: TOMA_WHL) - Qualifier | 1 |
| 0xD41B2C | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Timeout | 1 |
| 0xD41B2F | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Alive | 1 |
| 0xD41B36 | Botschaftsfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Timeout | 1 |
| 0xD41B38 | Botschaftsfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Alive | 1 |
| 0xD41C16 | Botschaftsfehler (Einheiten, ID: EINHEITEN) - Timeout | 1 |
| 0xD41C1C | Botschaftsfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) - Timeout | 1 |
| 0xD42C05 | Signalfehler (Außentemperatur, ID: A_TEMP) - Undefiniert | 1 |
| 0xD42C0A | Signalfehler (Blinken, ID: BLINKEN) - Undefiniert | 1 |
| 0xD42C0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Undefiniert | 1 |
| 0xD42C49 | Signalfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) - Ungültig | 1 |
| 0xD42C4A | Signalfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) - Undefiniert | 1 |
| 0xD42C65 | Signalfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Qualifier | 1 |
| 0xD42C67 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Qualifier | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x4000 | TEMPERATUR_AUSSEN | °C | High | unsigned char | - | 5.0 | 10.0 | -40.0 |
| 0x4001 | SPANNUNG_ECU | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x4008 | FEHLERSPEICHER_BORDNETZ_SPANNUNG | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

### ID_LIEF_TEXT_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Reinshagen => Delphi |
| 2 | Kostal |
| 3 | Hella |
| 4 | Siemens |
| 5 | Eaton |
| 6 | UTA |
| 7 | Helbako |
| 8 | Bosch |
| 9 | Loewe => Lear |
| 16 | VDO |
| 17 | Valeo |
| 18 | MBB |
| 19 | Kammerer |
| 20 | SWF |
| 21 | Blaupunkt |
| 22 | Philips |
| 23 | Alpine |
| 24 | Continental Teves |
| 25 | Elektromatik Suedafrika |
| 32 | Becker |
| 33 | Preh |
| 34 | Alps |
| 35 | Motorola |
| 36 | Temic |
| 37 | Webasto |
| 38 | MotoMeter |
| 39 | Delphi PHI |
| 40 | DODUCO => BERU |
| 41 | DENSO |
| 48 | NEC |
| 49 | DASA |
| 50 | Pioneer |
| 51 | Jatco |
| 52 | Fuba |
| 53 | UK-NSI |
| 54 | AABG |
| 55 | Dunlop |
| 56 | Sachs |
| 57 | ITT |
| 64 | FTE |
| 65 | Megamos |
| 66 | TRW |
| 67 | Wabco |
| 68 | ISAD Electronic Systems |
| 69 | HEC (Hella Electronics Corporation) |
| 70 | Gemel |
| 71 | ZF |
| 72 | GMPT |
| 73 | Harman Kardon |
| 80 | Remes |
| 81 | ZF Lenksysteme |
| 82 | Magneti Marelli |
| 83 | Borg Instruments |
| 84 | GETRAG |
| 85 | BHTC (Behr Hella Thermocontrol) |
| 86 | Siemens VDO Automotive |
| 87 | Visteon |
| 88 | Autoliv |
| 89 | Haberl |
| 96 | Magna Steyr |
| 97 | Marquardt |
| 98 | AB-Elektronik |
| 99 | Siemens VDO Borg |
| 100 | Hirschmann Electronics |
| 101 | Hoerbiger Electronics |
| 102 | Thyssen Krupp Automotive Mechatronics |
| 103 | Gentex GmbH |
| 104 | Atena GmbH |
| 105 | Magna-Donelly |
| 112 | Koyo Steering Europe |
| 113 | NSI B.V |
| 114 | AISIN AW CO.LTD |
| 115 | Shorlock |
| 116 | Schrader |
| 117 | BERU Electronics GmbH |
| 118 | CEL |
| 119 | Audio Mobil |
| 120 | rd electronic |
| 121 | iSYS RTS GmbH |
| 128 | Westfalia Automotive GmbH |
| 129 | Tyco Electronics |
| 130 | Paragon AG |
| 131 | IEE S.A |
| 132 | TEMIC AUTOMOTIVE of NA |
| 133 | AKsys GmbH |
| 134 | META System |
| 135 | Hülsbeck & Fürst GmbH & Co KG |
| 136 | Mann & Hummel Automotive GmbH |
| 137 | Brose Fahrzeugteile GmbH & Co |
| 144 | Keihin |
| 145 | Vimercati S.p.A. |
| 146 | CRH |
| 147 | TPO Display Corp. |
| 148 | KÜSTER Automotive Control |
| 149 | Hitachi Automotive |
| 150 | Continental Automotive |
| 151 | TI-Automotive |
| 152 | Hydro |
| 153 | Johnson Controls |
| 154 | Takata- Petri |
| 155 | Mitsubishi Electric B.V. (Melco) |
| 156 | Autokabel |
| 157 | GKN-Driveline |
| 158 | Zollner Elektronik AG |
| 159 | PEIKER acustics GmbH |
| 160 | Bosal-Oris |
| 161 | Cobasys |
| 162 | Lighting Reutlingen GmbH |
| 163 | CONTI VDO |
| 164 | ADC Automotive Distance Control Systems GmbH |
| 165 | Funkwerk Dabendorf GmbH |
| 166 | Lame |
| 167 | Magna/Closures |
| 168 | Wanyu |
| 16777215 | unbekannter Hersteller |

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
| 0x111111 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x111112 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0x481E34 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x481E35 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x481E47 | PMA Funktion Korrekturfaktor GPS fehlt | 1 |
| 0x481E5D | COMM - Start Übertragung fehlgeschlagen | 0 |
| 0x481E5F | COMM - Stop Übertragung fehlgeschlagen | 0 |
| 0x481E70 | PDU Router nicht initialisiert | 0 |
| 0x481E71 | PDU Router Überlauf | 0 |
| 0x481E76 | PMA Funktion - Geschwindigkeit unplausibel | 1 |
| 0x803280 | PDC nicht aktivierbar | 0 |
| 0x803281 | TVC nicht aktivierbar | 0 |
| 0x803282 | RVC nicht aktivierbar | 0 |
| 0x803283 | PMA nicht aktivierbar | 0 |
| 0x803294 | PDC aktiv ohne Aktivierung | 0 |
| 0x803295 | TVC aktiv ohne Aktivierung | 0 |
| 0x803296 | RVC aktiv ohne Aktivierung | 0 |
| 0x803297 | PMA aktiv ohne Aktivierung | 0 |
| 0x8032B2 | Ultraschallsensor hinten Außen links: Ausschwingzeit zu lang | 0 |
| 0x8032B5 | Ultraschallsensor hinten Außen links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032BA | Ultraschallsensor hinten Mitte links: Ausschwingzeit zu lang | 0 |
| 0x8032BD | Ultraschallsensor hinten Mitte links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032C2 | Ultraschallsensor hinten Mitte rechts: Ausschwingzeit zu lang | 0 |
| 0x8032C5 | Ultraschallsensor hinten Mitte rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032CA | Ultraschallsensor hinten Außen rechts: Ausschwingzeit zu lang | 0 |
| 0x8032CD | Ultraschallsensor hinten Außen rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032D2 | Ultraschallsensor vorn Außen links: Ausschwingzeit zu lang | 0 |
| 0x8032D5 | Ultraschallsensor vorn Außen links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032DA | Ultraschallsensor vorn Mitte links: Ausschwingzeit zu lang | 0 |
| 0x8032DD | Ultraschallsensor vorn Mitte links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032E2 | Ultraschallsensor vorn Mitte rechts: Ausschwingzeit zu lang | 0 |
| 0x8032E5 | Ultraschallsensor vorn Mitte rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032EA | Ultraschallsensor vorn Außen rechts: Ausschwingzeit zu lang | 0 |
| 0x8032ED | Ultraschallsensor vorn Außen rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032F2 | PMA Sensor vorn Seite links Ausschwingzeit zu lang | 0 |
| 0x8032F5 | PMA Sensor vorn Seite links Akustischer oder elektromagnetische Störung | 1 |
| 0x8032FA | PMA Sensor vorn Seite rechts Ausschwingzeit zu lang | 0 |
| 0x8032FD | PMA Sensor vorn Seite rechts Akustischer oder elektromagnetische Störung | 1 |
| 0x803306 | Ultraschallsensor hinten Seite links Ausschwingzeit zu lang | 0 |
| 0x803309 | Ultraschallsensor hinten Seite links Akustischer oder elektromagnetische Störung | 1 |
| 0x803311 | Ultraschallsensor hinten Seite rechts Ausschwingzeit zu lang | 0 |
| 0x803314 | Ultraschallsensor hinten Seite rechts Akustischer oder elektromagnetische Störung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x4000 | TEMPERATUR_AUSSEN | °C | High | unsigned char | - | 5.0 | 10.0 | -40.0 |
| 0x4001 | SPANNUNG_ECU | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x4008 | FEHLERSPEICHER_BORDNETZ_SPANNUNG | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

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

### RES_0XD388

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_PDC_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal für De-/ Aktivierung PDC über BUS:  0 = nicht aktiviert,  1 = aktiviert |
| STAT_BUS_IN_TV_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal für De-/ Aktivierung TV über BUS:  0 = nicht aktiviert,  1 = aktiviert |
| STAT_BUS_IN_RV_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal für De-/ Aktivierung Rückfahrkamera über BUS:  0 = nicht aktiviert,  1 = aktiviert |
| STAT_BUS_IN_PMA_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal für De-/ Aktivierung PMA über BUS:  0 = nicht aktiviert,  1 = aktiviert |

### RES_0XD66D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_ANHAENGER_VORHANDEN | 0/1 | - | unsigned char | 0x01 | - | 1.0 | 1.0 | 0.0 | Status des Anhängers:  0 = Anhänger nicht vorhanden 1 = Anhänger vorhanden |
| STAT_BUS_IN_STATUS_KUPPLUNG | 0/1 | - | unsigned char | 0x02 | - | 1.0 | 1.0 | 0.0 | Status Anhängervorrichtung: 0 = Anhängerkupplung eingefahren 1 = Anhängerkupplung ausgefahren |

### RES_0XD66F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PDC_ANZAHL_LAUTSPRECHER_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der direkt am Steuergerät angeschlossenen Lautsprecher |
| STAT_PDC_ANZAHL_SENSOREN_VORN_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der angeschlossenen PDC Sensoren vorn. |
| STAT_PDC_ANZAHL_SENSOREN_HINTEN_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der angeschlossenen PDC Sensoren hinten. |

### RES_0XD675

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_FUNCTION_PDC_EIN | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Zustand PDC: 0 = aus 1 = ein |
| STAT_LAST_FUNCTION_TVC_EIN | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Zustand TVC: 0 = aus 1 = ein |
| STAT_LAST_FUNCTION_RVC_EIN | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Zustand RVC: 0 = aus 1 = ein |
| STAT_LAST_FUNCTION_PMA_EIN | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Zustand PMA: 0 = aus 1 = ein |

### RES_0XD67C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HSL_HSL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HSL_HAL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HAL_HSL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HAL_HAL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HAL_HML_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HML_HAL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HML_HML_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HML_HMR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HMR_HML_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HMR_HMR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HMR_HAR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HAR_HMR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HAR_HAR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HAR_HSR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HSR_HAR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HSR_HSR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VSL_VSL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VSL_VAL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VAL_VSL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VAL_VAL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VAL_VML_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VML_VAL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VML_VML_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VML_VMR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VMR_VML_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VMR_VMR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VMR_VAR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VAR_VMR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VAR_VAR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VAR_VSR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VSR_VAR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VSR_VSR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |

### RES_0XD682

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PMA_AUSSCHWINGZEIT_LINKS_WERT | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausschwingzeit Membran links |
| STAT_PMA_ABSTAND_LINKS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abstand des detektierten Objekts mit dem kürzesten Abstand links (65533 = kein Objekt; 65534 = nicht verbaut; 65535 = Ungültig) |
| STAT_PMA_AUSSCHWINGZEIT_RECHTS_WERT | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausschwingzeit Membran rechts |
| STAT_PMA_ABSTAND_RECHTS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abstand des detektierten Objekts mit dem kürzesten Abstand rechts (65533 = kein Objekt; 65534 = nicht verbaut; 65535 = Ungültig) |

### RES_0XD683

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PMA_PARKLUECKE_LAENGE_LINKS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Länge Parklücke links |
| STAT_PMA_PARKLUECKE_TIEFE_LINKS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tiefe Parklücke links |
| STAT_PMA_STARTPOSITION_X_LINKS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | X Abstand Mittelpunkt Hinterachse zum Koordinatensystem P links |
| STAT_PMA_STARTPOSITION_Y_LINKS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Y Abstand Mittelpunkt Hinterachse zum Koordinatensystem P links |
| STAT_PMA_STARTWINKEL_LINKS_WERT | ° | - | int | - | - | 1.0 | 10.0 | 0.0 | Verdrehung Fahrzeuglängsachse zum Koordinatensystem P links |
| STAT_PMA_PARKLUECKE_LAENGE_RECHTS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Länge Parklücke rechts |
| STAT_PMA_PARKLUECKE_TIEFE_RECHTS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tiefe Parklücke rechts |
| STAT_PMA_STARTPOSITION_X_RECHTS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | X Abstand Mittelpunkt Hinterachse zum Koordinatensystem P rechts |
| STAT_PMA_STARTPOSITION_Y_RECHTS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Y Abstand Mittelpunkt Hinterachse zum Koordinatensystem P rechts |
| STAT_PMA_STARTWINKEL_RECHTS_WERT | ° | - | int | - | - | 1.0 | 10.0 | 0.0 | Verdrehung Fahrzeuglängsachse zum Koordinatensystem P rechts |

### ROE_EWT_DOP

| WERT | TEXT |
| --- | --- |
| 2 | infiniteTimeToResponse |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KORREKTURFAKTOR_RESET | 0xA1DD | - | KORREKTURFAKTOR_RESET | - | - | - | - | - | - | - | - | - | 31 | - | - |
| BUS_IN_GESCHWINDIGKEIT_WERT | 0xD240 | STAT_BUS_IN_GESCHWINDIGKEIT_WERT | Signal Geschwindigkeit des Fahrzeugs über BUS | km/h | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_AKTIVIERUNGSIGNAL | 0xD388 | - | Liefert oder simuliert die Signale der Aktivierung  von PDC, TV, RV und PMA, wie sie über BUS empfangen wird. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD388 | RES_0xD388 |
| PDC_FUNKTIONSANZEIGE | 0xD640 | STAT_FUNKTIONSANZEIGE_PDC | Status der Funktionsanzeige:  0= AUS; 1= EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAL_ABSTAND_WERT | 0xD645 | STAT_PDC_VAL_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VML_ABSTAND_WERT | 0xD646 | STAT_PDC_VML_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAR_ABSTAND_WERT | 0xD647 | STAT_PDC_VAR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VMR_ABSTAND_WERT | 0xD648 | STAT_PDC_VMR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HSL_ABSTAND_WERT | 0xD64A | STAT_PDC_HSL_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAL_ABSTAND_WERT | 0xD64B | STAT_PDC_HAL_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HML_ABSTAND_WERT | 0xD64C | STAT_PDC_HML_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAR_ABSTAND_WERT | 0xD64D | STAT_PDC_HAR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HMR_ABSTAND_WERT | 0xD64E | STAT_PDC_HMR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HSR_ABSTAND_WERT | 0xD64F | STAT_PDC_HSR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAL_ASZ_WERT | 0xD651 | STAT_PDC_VAL_ASZ_WERT | Ausschwingzeit Sensor vorn außen links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VML_ASZ_WERT | 0xD652 | STAT_PDC_VML_ASZ_WERT | Ausschwingzeit Sensor vorn mitte links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAR_ASZ_WERT | 0xD653 | STAT_PDC_VAR_ASZ_WERT | Ausschwingzeit Sensor vorn außen rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VMR_ASZ_WERT | 0xD654 | STAT_PDC_VMR_ASZ_WERT | Ausschwingzeit Sensor vorn mitte rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HSL_ASZ_WERT | 0xD656 | STAT_PDC_HSL_ASZ_WERT | Ausschwingzeit Sensor hinten seitlich links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAL_ASZ_WERT | 0xD657 | STAT_PDC_HAL_ASZ_WERT | Ausschwingzeit Sensor hinten außen links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HML_ASZ_WERT | 0xD658 | STAT_PDC_HML_ASZ_WERT | Ausschwingzeit Sensor hinten mitte links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAR_ASZ_WERT | 0xD659 | STAT_PDC_HAR_ASZ_WERT | Ausschwingzeit Sensor hinten außen rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PMA_VSL_ABSTAND_WERT | 0xD65C | STAT_PMA_VSL_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PMA_VSL_ASZ_WERT | 0xD65D | STAT_PMA_VSL_ASZ_WERT | Ausschwingzeit Sensor vorn Seite links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PMA_VSR_ABSTAND_WERT | 0xD65E | STAT_PMA_VSR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PMA_VSR_ASZ_WERT | 0xD65F | STAT_PMA_VSR_ASZ_WERT | Ausschwingzeit Sensor vorn Seite rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HMR_ASZ_WERT | 0xD66A | STAT_PDC_HMR_ASZ_WERT | Ausschwingzeit Sensor hinten mitte rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HSR_ASZ_WERT | 0xD66B | STAT_PDC_HSR_ASZ_WERT | Ausschwingzeit Sensor hinten seitlich rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_ANHAENGER_VORHANDEN | 0xD66D | - | Liefert den Status des Anhängers über Bus. | bit | - | - | BITFIELD | RES_0xD66D | - | - | - | - | 22 | - | - |
| BUS_IN_PDC_TASTE_EIN | 0xD66E | STAT_BUS_IN_PDC_TASTE_EIN | Auslesen Status der PDC-Taste über Bus : 0 = AUS, 1 = EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_KONFIGURATION | 0xD66F | - | Liefert die (zuvor) codierte Konfiguration des Systems | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD66F |
| BUS_IN_KILOMETERSTAND_WERT | 0xD670 | STAT_BUS_IN_KILOMETERSTAND_WERT | Signal Kilometerstand des Fahrzeugs über BUS | km | - | - | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_STAT_SYSTEM | 0xD671 | STAT_PDC_SYSTEM | Status des Systems:  0 = PDC nicht aktiv,  1 = PDC aktiv,  2 = PDC hat Fehler erkannt | 0-n | - | - | unsigned char | TAB_PDC_STATUS | - | - | - | - | 22 | - | - |
| PDC_STEUERN_SENSORTEST | 0xD673 | - | Startet die Eigendiagnose der Sensoren, Ergebnisse werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD673 | - |
| PDC_SENSORTEST | 0xD674 | STAT_PDC_SENSORTEST_NR | Ausgabe des Status des Sensortests:  Siehe Tabelle TAB_PDC_SENSORTEST | 0-n | - | - | unsigned char | TAB_PDC_SENSORTEST | - | - | - | - | 22 | - | - |
| PDC_LAST_FUNCTION | 0xD675 | - | Last Function Einstellung | bit | - | - | BITFIELD | RES_0xD675 | - | - | - | - | 22 | - | - |
| PDC_STEUERN_SYSTEM | 0xD676 | - | Aufruf aktiviert oder deaktiviert das PDC-System. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD676 | - |
| BUS_IN_STATUS_ROLLEN | 0xD679 | STAT_BUS_IN_STATUS_ROLLEN | Status der Fahrzeugbewegung:  0 = Fahrzeug steht,  1 = Fahrzeug fährt vorwärts, 2 = Fahrzeug fährt rückwärts, 3 = Fahrzeug fährt,  255 ungültig | 0-n | - | - | unsigned char | TAB_PDC_ROLLEN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_WEGSTRECKE_WERT | 0xD67A | STAT_BUS_IN_WEGSTRECKE_WERT | Signal Wegstrecke des Fahrzeugs über BUS | cm | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_RUECKWAERTSGANG | 0xD67B | STAT_BUS_IN_RUECKWAERTSGANG_EIN | Status des Rückwärtsgang:  0 = Rückwärtsgang nicht eingelegt;  1 = Rückwärtsgang eingelegt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_SIGNALWEGE_SENSOREN | 0xD67C | - | Gibt die Signalwege der Ultraschallsensoren der PDC aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD67C |
| _PMA_SENSORDATEN | 0xD682 | - | Auslesen Daten Sensor (links + rechts) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD682 |
| _PMA_PARKLUECKE | 0xD683 | - | Auslesen letzte Parklücke | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD683 |
| KORREKTURFAKTOR | 0xD687 | - | Setzt den gewünschten Korrekturfaktor | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD687 | - |
| KORREKTURFAKTOR_AKTUALISIERUNG | 0xD688 | - | Schaltet die Aktualisierung des Korrektorfaktors an oder aus: | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD688 | - |
| LESEN_KORREKTURFAKTOR | 0xD689 | STAT_COR_FACT_WHL_MAG_WERT | Liest den momentanen Korrekturfaktor | % | - | high | unsigned char | - | 0.1 | 1.0 | 88.0 | - | 22 | - | - |
| BUS_IN_TEMP_AUSSEN_WERT | 0xD96B | STAT_BUS_IN_TEMP_AUSSEN_WERT | Außentemperatur | °C | - | - | unsigned int | - | 1.0 | 2.0 | -40.0 | - | 22 | - | - |
| PMA_STEUERN_NVM_INTEGRITY_TEST | 0xF010 | - | Startet den NVM (Non-Volatile-Memory) Integritätstest | - | - | - | - | - | - | - | - | - | 2E | ARG_0xF010 | - |
| PMA_NVM_INTEGRITY_TEST | 0xF011 | STAT_PDC_NVM_INTEGRITY_TEST_NR | Statusabfrage über laufenden NVM Integritätscheck (Non-Volatile-Memory) | 0-n | - | - | unsigned char | TAB_NVM_INTEGRITY_TEST | - | - | - | - | 22 | - | - |

### SVK_VERSION_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | SVKVersion_01 |

### TAB_ENERGIESPARMODE_DOP

| WERT | TEXT |
| --- | --- |
| -1 | Mode ungültig |
| 0 | Energiesparmode nicht aktiv |
| 1 | Produktionsmode |
| 2 | Transportmode |
| 3 | Flashmode |

### TAB_ENTLASTUNG_GENERATOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Entlastungsfkt. Aktiv / Rücknahme |
| 0x01 | iGR-High |
| 0x02 | SULEV-Fkt |
| 0x03 | Entlastung nach Motorstart |
| 0x04 | Rennstart mit oder ohne AGM Batterie |
| 0x05 | ELMOTENTL Hitze |
| 0x06 | ELMOTENTL Kälte |
| 0x07 | Entlastung Anfahrschwäche wie P66,P85 |
| 0x08 | Übertemperatur Generator |
| 0x09 | Entlastung aus Sicherheitsgründen |
| 0x0A | Entlastung Begrenzung Lagerkräfte |
| 0x0B | Entlastung aus Komfortgründen |
| 0x0C | Entlastung aus funktionalen Gründen |
| 0x0D | Keine Entlastungsfkt. Aktiv / Rücknahme |
| 0x0E | Vorhalt |
| 0x0F | Signal ungültig |

### TAB_JA_NEIN

| WERT | TEXT |
| --- | --- |
| 0 | nein |
| 1 | ja |

### TAB_NVM_INTEGRITY_TEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht angefordert  oder Test  beendet als in Ordnung |
| 0x01 | Test beendet als nicht in Ordnung |
| 0x02 | Test läuft |

### TAB_PDC_LAST_FUNCTION

| WERT | TEXT |
| --- | --- |
| 0x00 | PDC+TVC |
| 0x01 | RVC+PMA |
| 0xFF | Unbekannt |

### TAB_PDC_ROLLEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Fahrzeug steht |
| 0x01 | Fahrzeug fährt vorwärts |
| 0x02 | Fahrzeug fährt rückwärts |
| 0x03 | Fahrzeug fährt |
| 0xFF | ungültiger Wert |

### TAB_PDC_SENSORTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht angefordert |
| 0x01 | Test läuft |
| 0x02 | Test Ergebnis OK |
| 0x03 | Test Ergebnis nicht OK |
| 0x04 | Test Stopp. System aktuell nicht bereit den Test zu starten oder Test abgebrochen. |
| 0xFF | Ungültiger Wert |

### TAB_PDC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | PDC nicht aktiv |
| 0x01 | PDC aktiv |
| 0x02 | PDC hat Fehler erkannt |

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
