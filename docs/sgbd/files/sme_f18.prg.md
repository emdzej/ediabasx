# sme_f18.prg

## General

|  |  |
| --- | --- |
| File | sme_f18.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 83 |
| Origin | BMW EA-431 Haberberger |
| Revision | 3.040 |
| Author | Robert_Bosch_Battery_GmbH BBSD/ENA4 Neff, Robert_Bosch_Battery_ |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Speicher Management Elektronik, SGBD-Index: 0F1DB0 hex |  |  |
| ORIGIN | string | BMW EA-431 Haberberger |  |  |
| REVISION | string | 3.040 |  |  |
| AUTHOR | string | Robert_Bosch_Battery_GmbH BBSD/ENA4 Neff, Robert_Bosch_Battery_ |  |  |
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

### STEUERN_MONTAGEMODUS

0x3101F043 STEUERN_MONTAGEMODUS Ansteuern Montage-Modus.

_No arguments._

### STEUERN_ENDE_MONTAGEMODUS

0x3102F043 STEUERN_ENDE_MONTAGEMODUS Ende Montage-Modus

_No arguments._

### STATUS_MONTAGEMODUS

0x3103F043 STATUS_MONTAGEMODUS Auslesen Montage-Modus

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

### ARG_0X5003_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHUETZ_K1_ZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | aktuelle Schaltungen für Schütz K1 |
| STAT_SCHUETZ_K2_ZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | aktuelle Schaltungen für Schütz K2 |
| STAT_SCHUETZ_K3_ZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | aktuelle Schaltungen für Schütz K3 |

### ARG_0X5010_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht setzen, 1= EOL Werte setzen |

### ARG_0X6509_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| SERIENNUMMER | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Seriennummer |

### ARG_0X6512_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_MB_SENDEN | - | - | - | - | - | 0 (DCAN & CCP) off 1 DCAN on + CCP off 2 (DCAN & CCP) on |

### ARG_0XAD6E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_ZELLE | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zelle desen Spannung ermittelt werden soll |

### ARG_0XDD61_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = nicht freigegeben; 1 = freigegeben |

### ARG_0XDD6F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KUEHLKREISLAUF_VENTIL | 0-n | high | unsigned char | - | TAB_KUEHLERKREISLAUF_VENTIL | 1.0 | 1.0 | 0.0 | - | - | Steuern des Kühlmittel-Ventils: Geschlossen oder offen |

### ARG_0XDDA1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLLDREHZAHL_KUEHLMITTELPUMPE | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Ansteuerung der Kühlmittelpumpe in Prozent (0-100%) |
| ZEITDAUER | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1000.0 | Vorgabe der Zeitdauer während der die Kühlmittelpumpe aktiv ist |

### ARG_0XDDCC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= kein Reset; 1= Reset durchführen |

### ARG_0XDDCD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZUSTAND_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Aktivieren / Deaktivierung des Sendens von CC-Meldung (0 = Senden nicht aktiv; 1 = Senden aktiv) |

### ARG_0XDF7B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Servicejobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### ENTLUEFTUNG_KUEHLKREIS_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Funktion nicht gestartet |
| 1 | Funktion läuft |
| 2 | Funktion beendet |
| 0xFF | ungültiger Wert |

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
| 0x020700 | Energiesparmode aktiv | 0 |
| 0x02FF07 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x21F000 | Batteriespannung: Toleranzüberschreitung obere Spannungsbegrenzung | 1 |
| 0x21F001 | Batteriespannung: Toleranzüberschreitung untere Spannungsbegrenzung | 1 |
| 0x21F003 | HVS: Abschaltung - unregelmäßige Abschaltung Schwelle überschritten | 0 |
| 0x21F011 | HVS: Flashprogrammierung: Hauptschalter bei Beginn des Flashvorgangs geschlossen | 0 |
| 0x21F013 | HVS: Zellspannung CSC0: hoch (Fehlerschwelle) | 0 |
| 0x21F014 | HVS: Zellspannung CSC1: hoch (Fehlerschwelle) | 0 |
| 0x21F015 | HVS: Zellspannung CSC2: hoch (Fehlerschwelle) | 0 |
| 0x21F016 | HVS: Zellspannung CSC3: hoch (Fehlerschwelle) | 0 |
| 0x21F017 | HVS: Zellspannung CSC4: hoch (Fehlerschwelle) | 0 |
| 0x21F018 | HVS: Zellspannung CSC5: hoch (Fehlerschwelle) | 0 |
| 0x21F019 | HVS: Zellspannung CSC6: hoch (Fehlerschwelle) | 0 |
| 0x21F01A | HVS: Zellspannung CSC7: hoch (Fehlerschwelle) | 0 |
| 0x21F01B | HVS: Zellspannung CSC0: niedrig (Fehlerschwelle) | 0 |
| 0x21F01C | HVS: Zellspannung CSC1: niedrig (Fehlerschwelle) | 0 |
| 0x21F01D | HVS: Zellspannung CSC2: niedrig (Fehlerschwelle) | 0 |
| 0x21F01E | HVS: Zellspannung CSC3: niedrig (Fehlerschwelle) | 0 |
| 0x21F01F | HVS: Zellspannung CSC4: niedrig (Fehlerschwelle) | 0 |
| 0x21F020 | HVS: Zellspannung CSC5: niedrig (Fehlerschwelle) | 0 |
| 0x21F021 | HVS: Zellspannung CSC6: niedrig (Fehlerschwelle) | 0 |
| 0x21F022 | HVS: Zellspannung CSC7: niedrig (Fehlerschwelle) | 0 |
| 0x21F02B | HVS: Stromsensor 0: Offset bei geöffneten Hauptschaltern zu groß | 0 |
| 0x21F02C | HVS: Stromsensor 0: Plausibilisierungsfehler Strom- / Spannungsverauf, Strom zu hoch | 0 |
| 0x21F02D | HVS: Stromsensor 0: Plausibilisierungsfehler Strom- / Spannungsverauf, Strom zu niedrig | 0 |
| 0x21F02E | HVS: Stromsensor 0: Keine Änderung des Stromwertes | 0 |
| 0x21F030 | Stromüberwachung: Toleranzüberschreitung obere Strombegrenzung | 1 |
| 0x21F031 | Stromüberwachung: Toleranzüberschreitung untere Strombegrenzung | 1 |
| 0x21F032 | Stromüberwachung: Überstrom erkannt | 1 |
| 0x21F033 | Stromüberwachung: Überstrom erkannt | 1 |
| 0x21F034 | HVS: Modultemperatur 0: Temperatur niedrig | 0 |
| 0x21F035 | HVS: Modultemperatur 1: Temperatur niedrig | 0 |
| 0x21F036 | HVS: Modultemperatur 2: Temperatur niedrig | 0 |
| 0x21F037 | HVS: Modultemperatur 3: Temperatur niedrig | 0 |
| 0x21F038 | HVS: Modultemperatur 4: Temperatur niedrig | 0 |
| 0x21F039 | HVS: Modultemperatur 5: Temperatur niedrig | 0 |
| 0x21F03A | HVS: Modultemperatur 6: Temperatur niedrig | 0 |
| 0x21F03B | HVS: Modultemperatur 7: Temperatur niedrig | 0 |
| 0x21F03C | HVS: Modultemperatur 8: Temperatur niedrig | 0 |
| 0x21F03D | HVS: Modultemperatur 9: Temperatur niedrig | 0 |
| 0x21F03E | HVS: Modultemperatur 10: Temperatur niedrig | 0 |
| 0x21F03F | HVS: Modultemperatur 11: Temperatur niedrig | 0 |
| 0x21F040 | HVS: Modultemperatur 0: Temperatur hoch | 0 |
| 0x21F041 | HVS: Modultemperatur 1: Temperatur hoch | 0 |
| 0x21F042 | HVS: Modultemperatur 2: Temperatur hoch | 0 |
| 0x21F043 | HVS: Modultemperatur 3: Temperatur hoch | 0 |
| 0x21F044 | HVS: Modultemperatur 4: Temperatur hoch | 0 |
| 0x21F045 | HVS: Modultemperatur 5: Temperatur hoch | 0 |
| 0x21F046 | HVS: Modultemperatur 6: Temperatur hoch | 0 |
| 0x21F047 | HVS: Modultemperatur 7: Temperatur hoch | 0 |
| 0x21F048 | HVS: Modultemperatur 8: Temperatur hoch | 0 |
| 0x21F049 | HVS: Modultemperatur 9: Temperatur hoch | 0 |
| 0x21F04A | HVS: Modultemperatur 10: Temperatur hoch | 0 |
| 0x21F04B | HVS: Modultemperatur 11: Temperatur hoch | 0 |
| 0x21F04C | HVS: Modultemperatur 12: Temperatur hoch | 0 |
| 0x21F04D | HVS: Modultemperatur 13: Temperatur hoch | 0 |
| 0x21F04E | HVS: Modultemperatur 14: Temperatur hoch | 0 |
| 0x21F04F | HVS: Modultemperatur 15: Temperatur hoch | 0 |
| 0x21F050 | HVS: Isolationsüberwachung -  interner Isolationsfehler (offene Schütze) | 0 |
| 0x21F051 | Isolationsüberwachung -  Isolationsfehler im Gesamtsystem (geschlossene Schütze) | 0 |
| 0x21F052 | Isolationsüberwachung - Isolationswarnung im Gesamtsystem | 0 |
| 0x21F054 | HVS: Isolationsüberwachung -  Isolationsüberwachung deaktivert | 0 |
| 0x21F055 | HVS: Modultemperatur 12: Temperatur niedrig | 0 |
| 0x21F056 | HVS: Modultemperatur 13: Temperatur niedrig | 0 |
| 0x21F057 | HVS: Modultemperatur 14: Temperatur niedrig | 0 |
| 0x21F058 | HVS: Modultemperatur 15: Temperatur niedrig | 0 |
| 0x21F059 | HVS: Ladezustand: Differenz zu groß | 0 |
| 0x21F05D | HVS: Isolationsüberwachung -  Isolationsüberwachung Zeitueberschreitung fuer ungueltige Eingangswerte | 0 |
| 0x21F05E | HVS: Isolationsüberwachung -  Isolationsüberwachung Zeitueberschreitung fuer repeated Eingangswerte | 0 |
| 0x21F061 | HVS: Modultemperatur: hoch (Warnschwelle) | 0 |
| 0x21F062 | HVS: Modultemperatur: hoch (Fehlerschwelle) | 1 |
| 0x21F063 | HVS: Modultemperatur: niedrig (Fehlerschwelle) | 0 |
| 0x21F070 | HVS: Hauptschalter: pos. Schütze lassen sich nicht schließen | 0 |
| 0x21F077 | HVS: Endstufe Hauptschalter: pos. Schütz Hi Kurzschluss Fahrzeugmasse | 1 |
| 0x21F078 | HVS: Endstufe Hauptschalter: pos. Schütz Lo Kurzschluss Fahrzeugmasse | 1 |
| 0x21F079 | HVS: Endstufe Hauptschalter: pos. Schütz Hi Kurzschluss Versorgungsspannung | 1 |
| 0x21F07A | HVS: Endstufe Hauptschalter: pos. Schütz Lo Kurzschluss Versorgungsspannung | 1 |
| 0x21F07B | HVS: Endstufe Hauptschalter: pos. Schütz Leitungsunterbrechung | 1 |
| 0x21F07D | HVS: Endstufe Hauptschalter: pos. Schütz Lo Übertemperatur | 1 |
| 0x21F080 | HVS: Hauptschalter: neg. Schütze lassen sich nicht schließen | 0 |
| 0x21F081 | HVS: Hauptschalter: neg. Schütze kleben | 0 |
| 0x21F086 | HVS: Endstufe Hauptschalter: neg. Schütz Hi Kurzschluss Fahrzeugmasse | 1 |
| 0x21F087 | HVS: Endstufe Hauptschalter: neg. Schütz Lo Kurzschluss Fahrzeugmasse | 1 |
| 0x21F088 | HVS: Endstufe Hauptschalter: neg. Schütz Hi Kurzschluss Versorgungsspannung | 1 |
| 0x21F089 | HVS: Endstufe Hauptschalter: neg. Schütz Lo Kurzschluss Versorgungsspannung | 1 |
| 0x21F08A | HVS: Endstufe Hauptschalter: neg. Schütz Leitungsunterbrechung | 1 |
| 0x21F08C | HVS: Endstufe Hauptschalter: neg. Schütz Lo Übertemperatur | 1 |
| 0x21F090 | HVS: Hauptschalter: pre. Schütz lässt sich nicht schließen | 1 |
| 0x21F096 | HVS: Endstufe Hauptschalter: pre. Schütz Hi Kurzschluss Fahrzeugmasse | 1 |
| 0x21F097 | HVS: Endstufe Hauptschalter: pre. Schütz Lo Kurzschluss Fahrzeugmasse | 1 |
| 0x21F098 | HVS: Endstufe Hauptschalter: pre. Schütz Hi Kurzschluss Versorgungsspannung | 1 |
| 0x21F099 | HVS: Endstufe Hauptschalter: pre. Schütz Lo Kurzschluss Versorgungsspannung | 1 |
| 0x21F09A | HVS: Endstufe Hauptschalter: pre. Schütz Leitungsunterbrechung | 1 |
| 0x21F09B | HVS: Endstufe Hauptschalter: pre. Schütz Lo Übertemperatur | 1 |
| 0x21F0A1 | Hauptschalter: Abschaltung unter Last festgestellt | 0 |
| 0x21F0A3 | HVS: Deaktivierung Hauptschalter nach Fehler (CAT6) | 0 |
| 0x21F0A4 | Deaktivierung Hauptschalter nach Fehler | 0 |
| 0x21F0B1 | Vorladung: Zeit zu kurz | 1 |
| 0x21F0B2 | Vorladung: Kurzschluss im Zwischenkreis detektiert | 1 |
| 0x21F0C0 | HVS: Zuschaltung verhindert -  Transport-Bit gesetzt | 0 |
| 0x21F0C5 | HVS: Zuschaltung verhindert -  Entladeschutz aktiv, CSC im Standby | 0 |
| 0x21F0E0 | HVS: Endstufe Kühlmittelpumpe: Pumpe nicht angeschlossen | 1 |
| 0x21F0E1 | HVS: Endstufe Kühlmittelpumpe: Kurzschluss Masse | 1 |
| 0x21F0E2 | HVS: Endstufe Kühlmittelpumpe: Kurzschluss Versorgungsspannung | 1 |
| 0x21F0E4 | HVS: Endstufe Kühlmittelpumpe: Versorgungsspannung zu niedrig | 1 |
| 0x21F0E5 | HVS: Endstufe Kühlmittelpumpe: Versorgungsspannung zu hoch | 1 |
| 0x21F0E6 | HVS: Modultemperatur: hoch (Alarmschwelle) | 1 |
| 0x21F0F2 | HVS: Endstufe Kühlventil: Ventil nicht angeschlossen | 1 |
| 0x21F0F3 | HVS: Endstufe Kühlventil: Kurzschluss Masse | 1 |
| 0x21F0F4 | HVS: Endstufe Kühlventil: Kurzschluss Versorgungsspannung | 1 |
| 0x21F108 | HVS: RTC: Wakeup fehlgeschlagen | 0 |
| 0x21F110 | HV-Interlock: Kurzschluss nach Ubatt | 0 |
| 0x21F111 | HV-Interlock: Kurzschluss nach Masse | 0 |
| 0x21F112 | HV-Interlock: offene Leitung | 0 |
| 0x21F12D | HVS: Endstufe Stromsensor: Fehler Endstufe 1 | 0 |
| 0x21F130 | Service Disconnect: steckt nicht | 1 |
| 0x21F132 | HVS: Endstufe Stromsensor: Fehler Endstufe 2 | 0 |
| 0x21F135 | HVS: Zellspannung CSC0: Differenz zu groß | 0 |
| 0x21F136 | HVS: Zellspannung CSC1: Differenz zu groß | 0 |
| 0x21F137 | HVS: Zellspannung CSC2: Differenz zu groß | 0 |
| 0x21F138 | HVS: Zellspannung CSC3: Differenz zu groß | 0 |
| 0x21F139 | HVS: Zellspannung CSC4: Differenz zu groß | 0 |
| 0x21F13A | HVS: Zellspannung CSC5: Differenz zu groß | 0 |
| 0x21F13B | HVS: Zellspannung CSC6: Differenz zu groß | 0 |
| 0x21F13C | HVS: Zellspannung CSC7: Differenz zu groß | 0 |
| 0x21F13D | HVS: Zellspannung CSC0: Differenz zu klein | 0 |
| 0x21F13E | HVS: Zellspannung CSC1: Differenz zu klein | 0 |
| 0x21F13F | HVS: Zellspannung CSC2: Differenz zu klein | 0 |
| 0x21F150 | HVS: Zellspannung CSC3: Differenz zu klein | 0 |
| 0x21F151 | HVS: Zellspannung CSC4: Differenz zu klein | 0 |
| 0x21F152 | HVS: Zellspannung CSC5: Differenz zu klein | 0 |
| 0x21F153 | HVS: Zellspannung CSC6: Differenz zu klein | 0 |
| 0x21F154 | HVS: Zellspannung CSC7: Differenz zu klein | 0 |
| 0x21F155 | HVS: Zellspannung CSC0: Verletzung des physikalischen Bereichs unten | 0 |
| 0x21F156 | HVS: Zellspannung CSC1: Verletzung des physikalischen Bereichs unten | 0 |
| 0x21F157 | HVS: Zellspannung CSC2: Verletzung des physikalischen Bereichs unten | 0 |
| 0x21F158 | HVS: Zellspannung CSC3: Verletzung des physikalischen Bereichs unten | 0 |
| 0x21F159 | HVS: Zellspannung CSC4: Verletzung des physikalischen Bereichs unten | 0 |
| 0x21F15A | HVS: Zellspannung CSC5: Verletzung des physikalischen Bereichs unten | 0 |
| 0x21F15B | HVS: Zellspannung CSC6: Verletzung des physikalischen Bereichs unten | 0 |
| 0x21F15C | HVS: Zellspannung CSC7: Verletzung des physikalischen Bereichs unten | 0 |
| 0x21F15D | HVS: Zellspannung CSC0: Verletzung des physikalischen Bereichs oben | 0 |
| 0x21F15E | HVS: Zellspannung CSC1: Verletzung des physikalischen Bereichs oben | 0 |
| 0x21F15F | HVS: Zellspannung CSC2: Verletzung des physikalischen Bereichs oben | 0 |
| 0x21F168 | HVS: Zellspannung CSC3: Verletzung des physikalischen Bereichs oben | 0 |
| 0x21F169 | HVS: Zellspannung CSC4: Verletzung des physikalischen Bereichs oben | 0 |
| 0x21F16A | HVS: Zellspannung CSC5: Verletzung des physikalischen Bereichs oben | 0 |
| 0x21F16B | HVS: Zellspannung CSC6: Verletzung des physikalischen Bereichs oben | 0 |
| 0x21F16C | HVS: Zellspannung CSC7: Verletzung des physikalischen Bereichs oben | 0 |
| 0x21F170 | Crashüberwachung (KL 30 C): Unterspannung | 1 |
| 0x21F171 | Crashüberwachung (KL 30 C): Überspannung | 1 |
| 0x21F172 | Crash: Crash I (ACAN, reversibel) festgestellt | 1 |
| 0x21F173 | Crash: Crash II (ACAN und KL30C, irreversibel) festgestellt | 1 |
| 0x21F180 | Unterspannung erkannt | 1 |
| 0x21F196 | HVS: CSC0: Boardtemperatur niedrig | 0 |
| 0x21F197 | HVS: CSC2: Boardtemperatur niedrig | 0 |
| 0x21F198 | HVS: CSC3: Boardtemperatur niedrig | 0 |
| 0x21F199 | HVS: CSC1: Boardtemperatur niedrig | 0 |
| 0x21F19A | HVS: CSC6: Boardtemperatur niedrig | 0 |
| 0x21F19B | HVS: CSC5: Boardtemperatur niedrig | 0 |
| 0x21F19C | HVS: CSC7: Boardtemperatur niedrig | 0 |
| 0x21F19D | HVS: CSC4: Boardtemperatur niedrig | 0 |
| 0x21F19E | HVS: CSC0: Boardtemperatur hoch | 0 |
| 0x21F19F | HVS: CSC2: Boardtemperatur hoch | 0 |
| 0x21F1A0 | HVS: FUSI-Abschaltung: Fehler Hauptschalter | 1 |
| 0x21F1A1 | HVS: FUSI-Abschaltung: IAcq | 1 |
| 0x21F1A2 | HVS: FUSI-Abschaltung: IChk | 1 |
| 0x21F1A3 | HVS: FUSI-Abschaltung: Fehler Stromsensor | 1 |
| 0x21F1A4 | HVS: FUSI-Abschaltung: Fehler OpenLine | 1 |
| 0x21F1A5 | HVS: FUSI-Abschaltung: TAcq | 1 |
| 0x21F1A6 | HVS: FUSI-Abschaltung: Übertemperatur Batteriemodul | 1 |
| 0x21F1A7 | HVS: FUSI-Abschaltung: Untertemperatur Batteriemodul | 1 |
| 0x21F1A8 | HVS: FUSI-Abschaltung: Plausibilisierung Modultemperaturen | 1 |
| 0x21F1A9 | HVS: FUSI-Abschaltung: UAcq | 1 |
| 0x21F1AA | HVS: FUSI-Abschaltung: UBatt | 1 |
| 0x21F1AB | HVS: FUSI-Abschaltung: Verletzung Zellspannungsgrenzen | 1 |
| 0x21F1AC | HVS: FUSI-Abschaltung: UChk | 1 |
| 0x21F1AD | HVS: FUSI-Abschaltung: UTest | 1 |
| 0x21F1AE | HVS: FUSI-Abschaltung: Hochvolt-Battery Schutz Diagnose nicht durchgefuehrt | 0 |
| 0x21F1B0 | HVS: CSC6: Boardtemperatur hoch | 0 |
| 0x21F1B1 | HVS: CSC5: Boardtemperatur hoch | 0 |
| 0x21F1B2 | HVS: CSC7: Boardtemperatur hoch | 0 |
| 0x21F1B3 | HVS: CSC4: Boardtemperatur hoch | 0 |
| 0x21F1B4 | HVS: Spannungsversorgung: Unterspannung während Fahrbetrieb | 0 |
| 0x21F1B5 | HVS: Spannungsversorgung: Unterspannung während Startphase | 0 |
| 0x21F1B6 | HVS: CSC1: Boardtemperatur hoch | 0 |
| 0x21F1B7 | HVS: CSC3: Boardtemperatur hoch | 0 |
| 0x21F1D0 | HVS: Batteriealterung: SOH niedrig (Fehlerschwelle) | 0 |
| 0x21F1D1 | HVS: Batteriealterung: SOH-R zu groß (Fehlerschwelle) | 0 |
| 0x21F1DB | HVS: Ladezustand: niedrig (Alarmschwelle) | 0 |
| 0x21F1DC | HVS: Ladezustand: niedrig (Fehlerschwelle) | 0 |
| 0x21F1E8 | HVS: System Control: Fehler | 0 |
| 0x21F1EE | HVS: Speicherkühlung: Ausfall der Kühlung | 0 |
| 0x21F1FA | HVS: Stromsensor 0: Kommunikationsfehler | 0 |
| 0x21F1FB | HVS: Stromsensor 0: Kommunikationsfehler, Signal dauerhaft high | 0 |
| 0x21F1FC | HVS: Stromsensor 0: Kommunikationsfehler, Signal dauerhaft low | 0 |
| 0x21F1FD | HVS: Stromsensor 0: Stromsignal hat obere Grenze erreicht | 0 |
| 0x21F1FE | HVS: Stromsensor 0: Stromsignal hat untere Grenze erreicht | 0 |
| 0x21F203 | HVS: Stromsensor 1: Hardwarefehler | 0 |
| 0x21F206 | HVS: Stromsensor 1: Kommunikationsfehler | 0 |
| 0x21F208 | HVS: Stromsensor 1: Kommunikationsfehler, Signal dauerhaft low | 0 |
| 0x21F209 | HVS: Stromsensor 1: Stromsignal hat obere Grenze erreicht | 0 |
| 0x21F20A | HVS: Stromsensor 1: Stromsignal hat untere Grenze erreicht | 0 |
| 0x21F20B | HVS: Stromsensor 1: Versorgungsspannung zu hoch | 0 |
| 0x21F210 | HVS: Stromsensor 1: Versorgungsspannung zu  niedrig | 0 |
| 0x21F214 | HVS: Stromsensor 1: Offset bei geöffneten Hauptschaltern zu groß | 0 |
| 0x21F215 | HVS: Stromsensor 1: Plausibilisierungsfehler Strom- / Spannungsverauf, Strom zu hoch | 0 |
| 0x21F216 | HVS: Stromsensor 1: Plausibilisierungsfehler Strom- / Spannungsverauf, Strom zu niedrig | 0 |
| 0x21F217 | HVS: Stromsensor 1: Keine Änderung des Stromwertes | 0 |
| 0x21F21C | HVS: Zwischenkreisspannung: Fehler bei Spannungsmessung (Neg.) | 0 |
| 0x21F21D | HVS: Zwischenkreisspannung: Verletzung des physikalischen Bereichs oben (Neg.) | 0 |
| 0x21F21E | HVS: Zwischenkreisspannung: Fehler bei Spannungsmessung (Pos. Hi) | 0 |
| 0x21F21F | HVS: Zwischenkreisspannung: Fehler bei Spannungsmessung (Pos. Lo) | 0 |
| 0x21F220 | HVS: Zwischenkreisspannung: Verletzung des physikalischen Bereichs oben (Pos.) | 0 |
| 0x21F221 | HVS: Zwischenkreisspannung: Verletzung des physikalischen Bereichs unten (Pos.) | 0 |
| 0x21F222 | HVS: Zwischenkreisspannung: Messleitung hat Kurzschluss nach Fahrzeugmasse | 0 |
| 0x21F223 | HVS: Batteriespannung: Fehler bei Spannungsmessung (Hi) | 0 |
| 0x21F224 | HVS: Batteriespannung: Fehler bei Spannungsmessung (Lo) | 0 |
| 0x21F225 | HVS: Batteriespannung: Verletzung des physikalischen Bereichs oben | 0 |
| 0x21F226 | HVS: Batteriespannung: Verletzung des physikalischen Bereichs unten | 0 |
| 0x21F227 | HVS: Batteriespannung: Messleitung hat Kurzschluss nach Fahrzeugmasse | 0 |
| 0x21F228 | HVS: HV-Interlock: Fehler Signalgenerierung | 0 |
| 0x21F22C | HVS: Isolationsüberwachung: Selbsttest fehlgeschlagen | 0 |
| 0x21F22D | HVS: Funktion Monitoring: Fehler während Shut-Off-Path Test | 0 |
| 0x21F22E | HVS: Modultemperatur: Überprüfung auf fehlerhafte Temperatursensoren fehlgeschlagen | 0 |
| 0x21F234 | HVS: Stop Counter: Kommunikationsfehler | 0 |
| 0x21F235 | HVS: Stop Counter: Timer Fehler | 0 |
| 0x21F236 | HVS: Stop Counter: Timer Fehler | 0 |
| 0x21F23E | HVS: Endstufe Kühlventil: Versorgungsspannung zu hoch | 1 |
| 0x21F23F | HVS: Endstufe Kühlventil: Versorgungsspannung zu niedrig | 1 |
| 0x21F309 | HVS: Modultemperatur: Differenz zu groß (Fehlerschwelle) | 0 |
| 0x21F314 | HVS: CSC: Abschaltung des CSC-CAN | 0 |
| 0x21F31F | HVS: Kühlsystem: Teilweise blockiert | 0 |
| 0x21F322 | HVS: Sensor Kühlmitteltemperatur: Physikalische maximale Temperatur Fehler | 0 |
| 0x21F324 | HVS: Sensor Kühlmitteltemperatur: Physikalische minimale Temperatur Fehler | 0 |
| 0x21F329 | HVS: Endstufendiagnose: deaktiviert, LV-Spannung zu hoch | 0 |
| 0x21F32A | HVS: Endstufendiagnose: deaktiviert, LV-Spannung zu niedrig | 0 |
| 0x21F34C | HVS: Funktion Monitoring: Modulfehler der ECU | 0 |
| 0x21F34E | HVS: Montagemodus aktiv | 0 |
| 0x21F358 | HVS: Fehler der Sensorversorgung 1 | 0 |
| 0x21F359 | HVS: Fehler der Sensorversorgung 2 | 0 |
| 0x21F35A | HVS: Fehler der Sensorversorgung 3 | 0 |
| 0x21F35E | HVS: Hauptschalter: pre. oder pos. Schütze kleben | 0 |
| 0x21F400 | HVS: Coolant Temperature Inlet Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F401 | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F402 | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F403 | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F404 | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F405 | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F406 | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F407 | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F408 | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F409 | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F40A | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F40B | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F40C | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F40D | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F40E | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F40F | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F410 | HVS: Module Temperature Sensor Plausibilization (Sensor too high) | 0 |
| 0x21F420 | HVS: Coolant Temperature Inlet Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F421 | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F422 | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F423 | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F424 | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F425 | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F426 | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F427 | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F428 | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F429 | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F42A | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F42B | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F42C | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F42D | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F42E | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F42F | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F430 | HVS: Module Temperature Sensor Plausibilization (Sensor too low) | 0 |
| 0x21F490 | HVS: EEPROM: Fehler beim Fehlerspeicher löschen | 1 |
| 0x21F491 | HVS: EEPROM: Fehler beim Lesen | 1 |
| 0x21F492 | HVS: EEPROM: Fehler beim Schreiben | 1 |
| 0xCAC485 | A-CAN Control Module Hardware Fehler | 0 |
| 0xCAC486 | A-CAN Control Module Bus OFF | 0 |
| 0xCACBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xCAD400 | Botschaft (CTR_CR, 0x19B) fehlt, Empfänger SME, Sender ACSM | 1 |
| 0xCAD401 | Botschaft (CTR_CR, 0x19B) fehlerhaft, Empfänger SME, Sender ACSM | 1 |
| 0xCAD402 | Botschaft (CTR_CR, 0x19B) nicht aktuell, Empfänger SME, Sender ACSM | 1 |
| 0xCAD403 | Botschaft (CTR_CR, 0x19B) Prüfsumme falsch, Empfänger SME, Sender ACSM | 1 |
| 0xCAD404 | Botschaft (DT_PT_2, 0x3F9) fehlt, Empfänger SME, Sender DME1 | 1 |
| 0xCAD405 | Botschaft (DT_PT_2, 0x3F9) fehlerhaft, Empfänger SME, Sender DME1 | 1 |
| 0xCAD406 | Botschaft (DT_PT_2, 0x3F9) nicht aktuell, Empfänger SME, Sender DME1 | 1 |
| 0xCAD407 | Botschaft (DT_PT_2, 0x3F9) Prüfsumme falsch, Empfänger SME, Sender DME1 | 1 |
| 0xCAD40E | Botschaft (A_TEMP, 0x2CA) fehlt, Empfänger SME, Sender KOMBI | 1 |
| 0xCAD40F | Botschaft (A_TEMP, 0x2CA) fehlerhaft, Empfänger SME, Sender KOMBI | 1 |
| 0xCAD410 | Botschaft (CHGNG_ST, 0x3E9) fehlt, Empfänger SME, Sender EME_AE | 1 |
| 0xCAD411 | Botschaft (CHGNG_ST, 0x3E9) fehlerhaft, Empfänger SME, Sender EME_AE | 1 |
| 0xCAD413 | Botschaft (FZZSTD, 0x3A0) fehlerhaft, Empfänger SME, Sender JBBF | 1 |
| 0xCAD414 | Botschaft (KILOMETERSTAND, 0x330) fehlt, Empfänger SME, Sender KOMBI | 1 |
| 0xCAD415 | Botschaft (KILOMETERSTAND, 0x330) fehlerhaft, Empfänger SME, Sender KOMBI | 1 |
| 0xCAD416 | Botschaft (KLEMMEN, 0x12F) fehlt, Empfänger SME, Sender CAS | 1 |
| 0xCAD417 | Botschaft (KLEMMEN, 0x12F) fehlerhaft, Empfänger SME, Sender CAS | 1 |
| 0xCAD418 | Botschaft (KLEMMEN, 0x12F) nicht aktuell, Empfänger SME, Sender CAS | 1 |
| 0xCAD419 | Botschaft (KLEMMEN, 0x12F) Prüfsumme falsch, Empfänger SME, Sender CAS | 1 |
| 0xCAD41A | Botschaft (RELATIVZEIT, 0x328) fehlt, Empfänger SME, Sender KOMBI | 1 |
| 0xCAD41B | Botschaft (RELATIVZEIT, 0x328) fehlerhaft, Empfänger SME, Sender KOMBI | 1 |
| 0xCAD41C | Botschaft (RLS_COOL_HVSTO, 0x37B) fehlt, Empfänger SME, Sender IHKA | 1 |
| 0xCAD41D | Botschaft (RLS_COOL_HVSTO, 0x37B) fehlerhaft, Empfänger SME, Sender IHKA | 1 |
| 0xCAD41E | Botschaft (SPEC_DCSW_HVSTO, 0x10B) fehlt, Empfänger SME, Sender EME_AE | 1 |
| 0xCAD41F | Botschaft (SPEC_DCSW_HVSTO, 0x10B) fehlerhaft, Empfänger SME, Sender EME_AE | 1 |
| 0xCAD420 | Botschaft (SPEC_DCSW_HVSTO, 0x10B) nicht aktuell, Empfänger SME, Sender EME_AE | 1 |
| 0xCAD421 | Botschaft (SPEC_DCSW_HVSTO, 0x10B) Prüfsumme falsch, Empfänger SME, Sender EME_AE | 1 |
| 0xCAD422 | Botschaft (SPEC_HVSTO, 0x433) fehlt, Empfänger SME, Sender EME_AE | 1 |
| 0xCAD423 | Botschaft (SPEC_HVSTO, 0x433) fehlerhaft, Empfänger SME, Sender EME_AE | 1 |
| 0xCAD424 | Botschaft (V_VEH, 0x1A1) fehlt, Empfänger SME, Sender ICM_QL | 1 |
| 0xCAD425 | Botschaft (V_VEH, 0x1A1) fehlerhaft, Empfänger SME, Sender ICM_QL | 1 |
| 0xCAD426 | Botschaft (V_VEH, 0x1A1) nicht aktuell, Empfänger SME, Sender ICM_QL | 1 |
| 0xCAD427 | Botschaft (V_VEH, 0x1A1) Prüfsumme falsch, Empfänger SME, Sender ICM_QL | 1 |
| 0xCAD429 | Signal (PRD_SIT_COOL_HVSTO, 0x433) ungültig, Sender EME_AE | 1 |
| 0xCAD42A | Signal (ST_FRT_AC, 0x37B) ungültig, Sender IHKA | 1 |
| 0xCAD432 | Signal (TEMP_EX, 0x2CA) ungültig, Sender KOMBI | 1 |
| 0xCAD433 | Signal (FRC_PWR_CHGNG, 0x3E9) ungültig, Sender EME_AE | 1 |
| 0xCAD434 | Signal (RQ_CHGRDI, 0x3E9) ungültig, Sender EME_AE | 1 |
| 0xCAD435 | Signal (WISH_UTS_ENC, 0x3E9) ungültig, Sender EME_AE | 1 |
| 0xCAD436 | Signal (CTR_CLSY_CR, 0x19B) ungültig, Sender ACSM | 1 |
| 0xCAD437 | Signal (CTR_AUTOM_ECAL_CR, 0x19B) ungültig, Sender ACSM | 1 |
| 0xCAD438 | Signal (CTR_ITLI_CR, 0x19B) ungültig, Sender ACSM | 1 |
| 0xCAD439 | Signal (CTR_SWO_EKP_CR, 0x19B) ungültig, Sender ACSM | 1 |
| 0xCAD43A | Signal (CTR_HAZW_CR, 0x19B) ungültig, Sender ACSM | 1 |
| 0xCAD43B | Signal (CTR_PCSH_MST, 0x19B) ungültig, Sender ACSM | 1 |
| 0xCAD43C | Signal (CTR_PHTR_CR, 0x19B) ungültig, Sender ACSM | 1 |
| 0xCAD43D | Signal (ST_EXCE_ACLN_THRV, 0x19B) ungültig, Sender ACSM | 1 |
| 0xCAD43E | Signal (ST_DRV_VEH, 0x3F9) ungültig, Sender DME1 | 1 |
| 0xCAD443 | Signal (ST_ILK_ERRM_FZM, 0x3A0) ungültig, Sender JBBF | 1 |
| 0xCAD444 | Signal (MILE_KM, 0x330) ungültig, Sender KOMBI | 1 |
| 0xCAD445 | Signal (ST_VEH_CON, 0x12F) ungültig, Sender CAS | 1 |
| 0xCAD446 | Signal (ST_KL, 0x12F) ungültig, Sender CAS | 1 |
| 0xCAD447 | Signal (ST_KL_30B, 0x12F) ungültig, Sender CAS | 1 |
| 0xCAD448 | Signal (RLS_COOL_HVSTO, 0x37B) ungültig, Sender IHKA | 1 |
| 0xCAD449 | Signal (RQ_PAIC, 0x37B) ungültig, Sender IHKA | 1 |
| 0xCAD44A | Signal (RQ_CSOV_HVSTO, 0x37B) ungültig, Sender IHKA | 1 |
| 0xCAD44B | Signal (ST_DCHG_LINK_2, 0x10B) ungültig, Sender EME_AE | 1 |
| 0xCAD44C | Signal (RQ_DCSW_HVSTO_CLO, 0x10B) ungültig, Sender EME_AE | 1 |
| 0xCAD44E | Signal (CTR_MEASMT_ISL, 0x433) ungültig, Sender EME_AE | 1 |
| 0xCAD44F | Signal (ST_HT_HVSTO, 0x433) ungültig, Sender EME_AE | 1 |
| 0xCAD454 | Signal (V_VEH_COG, 0x1A1) ungültig, Sender ICM_QL | 1 |
| 0xCAD455 | Signal (QU_V_VEH_COG, 0x1A1) ungültig, Sender ICM_QL | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | Aussentemperatur | °C | High | unsigned char | - | 0.5 | 1.0 | -40.0 |
| 0x4001 | Status Klemmen | 0-n | High | 0xFF | TAB_KLEMME30F | - | - | - |
| 0x4002 | Gesamtstrom | A | High | unsigned int | - | 0.1 | 1.0 | -819.2 |
| 0x4003 | Spannung HV-Speicher | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4004 | Zwischenkreisspannung | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4005 | Batterietemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x4006 | SOC | % | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4007 | Schuetzstatus | 0-n | High | 0xFF | TAB_SCHUETZ_SCHALTER | - | - | - |
| 0x4008 | Ladebetrieb | 0-n | High | 0xFF | TAB_LADEBETRIEB | - | - | - |
| 0x4009 | BMS Ist-Modus | 0-n | High | 0xFF | TAB_BMS_MODUS | - | - | - |
| 0x400A | Terminal15_state | 0-n | High | 0xFF | TAB_T15STATE | - | - | - |
| 0x400B | I_Dyn_Max_Chg | A | High | unsigned int | - | 0.1 | 1.0 | -819.2 |
| 0x400C | I_Dyn_Max_DChg | A | High | unsigned int | - | 0.1 | 1.0 | -819.2 |
| 0x400D | Min Zellspannung | V | High | unsigned int | - | 5.0 | 65536.0 | 0.0 |
| 0x400E | Index Min. Zellspannung | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x400F | Max. Zellspannung | V | High | unsigned int | - | 5.0 | 65536.0 | 0.0 |
| 0x4010 | Index max. Zellspannung | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4011 | OLD Fehler Index | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4012 | Isolationswiderstand Pos. | kOhm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4013 | Isolationswiderstand neg. | kOhm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4014 | HVSTO minimale Zelltemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x4015 | HVSTO maximale Zelltemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x4016 | HVSTO Kuelmittel Einlasstemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x4017 | Sollwert Kuehlmittelpumpe | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4018 | Sollwert Ventil Chiller-Kreis | 0-n | High | 0xFF | TAB_COOLTSWTVLV | - | - | - |
| 0x4019 | Status BMS Kuehlung | 0-n | High | 0xFF | TAB_BATTTCTRLMOD | - | - | - |
| 0x401A | Klemmen30F | mV | High | signed int | - | 20.0 | 1.0 | 0.0 |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

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
| 0x21F05A | HVS: Hauptschalter: neg. Schütz Lebensdauerende erreicht | 0 |
| 0x21F05B | HVS: Hauptschalter: pos. Schütz Lebensdauerende erreicht | 0 |
| 0x21F05C | HVS: Hauptschalter: pre. Schütz Lebensdauerende erreicht | 0 |
| 0x21F16D | HVS: CSC0: Fehler bei Initialisierung | 0 |
| 0x21F16E | HVS: CSC1: Fehler bei Initialisierung | 0 |
| 0x21F16F | HVS: CSC2: Fehler bei Initialisierung | 0 |
| 0x21F174 | HVS: CSC3: Fehler bei Initialisierung | 0 |
| 0x21F175 | HVS: CSC4: Fehler bei Initialisierung | 0 |
| 0x21F176 | HVS: CSC5: Fehler bei Initialisierung | 0 |
| 0x21F177 | HVS: CSC6: Fehler bei Initialisierung | 0 |
| 0x21F178 | HVS: CSC7: Fehler bei Initialisierung | 0 |
| 0x21F179 | HVS: CSC0: Reset im Betrieb | 0 |
| 0x21F17A | HVS: CSC1: Reset im Betrieb | 0 |
| 0x21F17B | HVS: CSC2: Reset im Betrieb | 0 |
| 0x21F17C | HVS: CSC3: Reset im Betrieb | 0 |
| 0x21F17D | HVS: CSC4: Reset im Betrieb | 0 |
| 0x21F17E | HVS: CSC5: Reset im Betrieb | 0 |
| 0x21F17F | HVS: CSC6: Reset im Betrieb | 0 |
| 0x21F183 | HVS: CSC7: Reset im Betrieb | 0 |
| 0x21F184 | HVS: CSC0: Kommunikationsfehler im Betrieb | 0 |
| 0x21F185 | HVS: CSC1: Kommunikationsfehler im Betrieb | 0 |
| 0x21F186 | HVS: CSC2: Kommunikationsfehler im Betrieb | 0 |
| 0x21F187 | HVS: CSC3: Kommunikationsfehler im Betrieb | 0 |
| 0x21F188 | HVS: CSC4: Kommunikationsfehler im Betrieb | 0 |
| 0x21F189 | HVS: CSC5: Kommunikationsfehler im Betrieb | 0 |
| 0x21F18A | HVS: CSC6: Kommunikationsfehler im Betrieb | 0 |
| 0x21F18B | HVS: CSC7: Kommunikationsfehler im Betrieb | 0 |
| 0x21F192 | HVS: Zellkapazität: Alarm | 0 |
| 0x21F1CF | HVS: Hauptschalter: Haltespannung zu niedrig | 0 |
| 0x21F1DD | HVS: Ladezustand: niedrig (Warnschwelle) | 0 |
| 0x21F1EB | HVS: Zellkapazität: Warnung | 0 |
| 0x21F1F2 | HVS: DFC_IsoObsCplErr | 0 |
| 0x21F20A | HVS: CSC0: Fehler im Betrieb | 0 |
| 0x21F20B | HVS: CSC1: Fehler im Betrieb | 0 |
| 0x21F20C | HVS: CSC2: Fehler im Betrieb | 0 |
| 0x21F20D | HVS: CSC3: Fehler im Betrieb | 0 |
| 0x21F20E | HVS: CSC4: Fehler im Betrieb | 0 |
| 0x21F20F | HVS: CSC5: Fehler im Betrieb | 0 |
| 0x21F210 | HVS: CSC6: Fehler im Betrieb | 0 |
| 0x21F211 | HVS: CSC7: Fehler im Betrieb | 0 |
| 0x21F30A | HVS: Zellspannung: Differenz zu groß (Fehlerschwelle) | 0 |
| 0x21F459 | HVS: Kommunikationsfehler nC | 0 |
| 0x21F493 | HVS: SW-Reset 0 | 1 |
| 0x21F494 | HVS: SW-Reset 1 | 1 |
| 0x21F4FE | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x21F4FF | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0xCAD412 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0xCAD428 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | Aussentemperatur | °C | High | unsigned char | - | 0.5 | 1.0 | -40.0 |
| 0x4001 | Status Klemmen | 0-n | High | 0xFF | TAB_KLEMME30F | - | - | - |
| 0x4002 | Gesamtstrom | A | High | unsigned int | - | 0.1 | 1.0 | -819.2 |
| 0x4003 | Spannung HV-Speicher | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4004 | Zwischenkreisspannung | V | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4005 | Batterietemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x4006 | SOC | % | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x4007 | Schuetzstatus | 0-n | High | 0xFF | TAB_SCHUETZ_SCHALTER | - | - | - |
| 0x4008 | Ladebetrieb | 0-n | High | 0xFF | TAB_LADEBETRIEB | - | - | - |
| 0x4009 | BMS Ist-Modus | 0-n | High | 0xFF | TAB_BMS_MODUS | - | - | - |
| 0x400A | Terminal15_state | 0-n | High | 0xFF | TAB_T15STATE | - | - | - |
| 0x400B | I_Dyn_Max_Chg | A | High | unsigned int | - | 0.1 | 1.0 | -819.2 |
| 0x400C | I_Dyn_Max_DChg | A | High | unsigned int | - | 0.1 | 1.0 | -819.2 |
| 0x400D | Min Zellspannung | V | High | unsigned int | - | 5.0 | 65536.0 | 0.0 |
| 0x400E | Index Min. Zellspannung | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x400F | Max. Zellspannung | V | High | unsigned int | - | 5.0 | 65536.0 | 0.0 |
| 0x4010 | Index max. Zellspannung | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4011 | OLD Fehler Index | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4012 | Isolationswiderstand Pos. | kOhm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4013 | Isolationswiderstand neg. | kOhm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x401A | Klemmen30F | mV | High | signed int | - | 20.0 | 1.0 | 0.0 |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X5003_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHUETZ_K1_ZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktuelle Schaltungen für Schütz K1 |
| STAT_SCHUETZ_K2_ZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktuelle Schaltungen für Schütz K2 |
| STAT_SCHUETZ_K3_ZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktuelle Schaltungen für Schütz K3 |

### RES_0X5005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIBALHSTG_CELL_00_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 00 |
| STAT_TIBALHSTG_CELL_01_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 01 |
| STAT_TIBALHSTG_CELL_02_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 02 |
| STAT_TIBALHSTG_CELL_03_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 03 |
| STAT_TIBALHSTG_CELL_04_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 04 |
| STAT_TIBALHSTG_CELL_05_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 05 |
| STAT_TIBALHSTG_CELL_06_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 06 |
| STAT_TIBALHSTG_CELL_07_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 07 |
| STAT_TIBALHSTG_CELL_08_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 08 |
| STAT_TIBALHSTG_CELL_09_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 09 |
| STAT_TIBALHSTG_CELL_10_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 10 |
| STAT_TIBALHSTG_CELL_11_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 11 |
| STAT_TIBALHSTG_CELL_12_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 12 |
| STAT_TIBALHSTG_CELL_13_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 13 |
| STAT_TIBALHSTG_CELL_14_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 14 |
| STAT_TIBALHSTG_CELL_15_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 15 |
| STAT_TIBALHSTG_CELL_16_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 16 |
| STAT_TIBALHSTG_CELL_17_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 17 |
| STAT_TIBALHSTG_CELL_18_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 18 |
| STAT_TIBALHSTG_CELL_19_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 19 |
| STAT_TIBALHSTG_CELL_20_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 20 |
| STAT_TIBALHSTG_CELL_21_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 21 |
| STAT_TIBALHSTG_CELL_22_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 22 |
| STAT_TIBALHSTG_CELL_23_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 23 |
| STAT_TIBALHSTG_CELL_24_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 24 |
| STAT_TIBALHSTG_CELL_25_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 25 |
| STAT_TIBALHSTG_CELL_26_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 26 |
| STAT_TIBALHSTG_CELL_27_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 27 |
| STAT_TIBALHSTG_CELL_28_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 28 |
| STAT_TIBALHSTG_CELL_29_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 29 |
| STAT_TIBALHSTG_CELL_30_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 30 |
| STAT_TIBALHSTG_CELL_31_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 31 |
| STAT_TIBALHSTG_CELL_32_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 32 |
| STAT_TIBALHSTG_CELL_33_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 33 |
| STAT_TIBALHSTG_CELL_34_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 34 |
| STAT_TIBALHSTG_CELL_35_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 35 |
| STAT_TIBALHSTG_CELL_36_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 36 |
| STAT_TIBALHSTG_CELL_37_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 37 |
| STAT_TIBALHSTG_CELL_38_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 38 |
| STAT_TIBALHSTG_CELL_39_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 39 |
| STAT_TIBALHSTG_CELL_40_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 40 |
| STAT_TIBALHSTG_CELL_41_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 41 |
| STAT_TIBALHSTG_CELL_42_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 42 |
| STAT_TIBALHSTG_CELL_43_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 43 |
| STAT_TIBALHSTG_CELL_44_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 44 |
| STAT_TIBALHSTG_CELL_45_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 45 |
| STAT_TIBALHSTG_CELL_46_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 46 |
| STAT_TIBALHSTG_CELL_47_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 47 |
| STAT_TIBALHSTG_CELL_48_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 48 |
| STAT_TIBALHSTG_CELL_49_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 49 |
| STAT_TIBALHSTG_CELL_50_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 50 |
| STAT_TIBALHSTG_CELL_51_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 51 |
| STAT_TIBALHSTG_CELL_52_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 52 |
| STAT_TIBALHSTG_CELL_53_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 53 |
| STAT_TIBALHSTG_CELL_54_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 54 |
| STAT_TIBALHSTG_CELL_55_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 55 |
| STAT_TIBALHSTG_CELL_56_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 56 |
| STAT_TIBALHSTG_CELL_57_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 57 |
| STAT_TIBALHSTG_CELL_58_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 58 |
| STAT_TIBALHSTG_CELL_59_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 59 |
| STAT_TIBALHSTG_CELL_60_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 60 |
| STAT_TIBALHSTG_CELL_61_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 61 |
| STAT_TIBALHSTG_CELL_62_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 62 |
| STAT_TIBALHSTG_CELL_63_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 63 |
| STAT_TIBALHSTG_CELL_64_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 64 |
| STAT_TIBALHSTG_CELL_65_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 65 |
| STAT_TIBALHSTG_CELL_66_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 66 |
| STAT_TIBALHSTG_CELL_67_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 67 |
| STAT_TIBALHSTG_CELL_68_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 68 |
| STAT_TIBALHSTG_CELL_69_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 69 |
| STAT_TIBALHSTG_CELL_70_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 70 |
| STAT_TIBALHSTG_CELL_71_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 71 |
| STAT_TIBALHSTG_CELL_72_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 72 |
| STAT_TIBALHSTG_CELL_73_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 73 |
| STAT_TIBALHSTG_CELL_74_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 74 |
| STAT_TIBALHSTG_CELL_75_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 75 |
| STAT_TIBALHSTG_CELL_76_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 76 |
| STAT_TIBALHSTG_CELL_77_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 77 |
| STAT_TIBALHSTG_CELL_78_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 78 |
| STAT_TIBALHSTG_CELL_79_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 79 |
| STAT_TIBALHSTG_CELL_80_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 80 |
| STAT_TIBALHSTG_CELL_81_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 81 |
| STAT_TIBALHSTG_CELL_82_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 82 |
| STAT_TIBALHSTG_CELL_83_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 83 |
| STAT_TIBALHSTG_CELL_84_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 84 |
| STAT_TIBALHSTG_CELL_85_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 85 |
| STAT_TIBALHSTG_CELL_86_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 86 |
| STAT_TIBALHSTG_CELL_87_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 87 |
| STAT_TIBALHSTG_CELL_88_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 88 |
| STAT_TIBALHSTG_CELL_89_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 89 |
| STAT_TIBALHSTG_CELL_90_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 90 |
| STAT_TIBALHSTG_CELL_91_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 91 |
| STAT_TIBALHSTG_CELL_92_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 92 |
| STAT_TIBALHSTG_CELL_93_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 93 |
| STAT_TIBALHSTG_CELL_94_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 94 |
| STAT_TIBALHSTG_CELL_95_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit Zelle 95 |
| STAT_CNTRQDEMAXHSTG_RNG1_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl maximalen Ladungsabweichungen im Bereich kleiner 30 Amin |
| STAT_CNTRQDEMAXHSTG_RNG2_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl maximalen Ladungsabweichungen im Bereich von 30 Amin bis 46 Amin |
| STAT_CNTRQDEMAXHSTG_RNG3_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl maximalen Ladungsabweichungen im Bereich von 46 Amin bis 62 Amin |
| STAT_CNTRQDEMAXHSTG_RNG4_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl maximalen Ladungsabweichungen im Bereich von 62 Amin bis 78 Amin |
| STAT_CNTRQDEMAXHSTG_RNG5_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl maximalen Ladungsabweichungen im Bereich von 78 Amin bis 110 Amin |
| STAT_CNTRQDEMAXHSTG_RNG6_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl maximalen Ladungsabweichungen im Bereich größer 110 Amin |
| STAT_CNTRBALMASKA_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Symmetrierungen für Mask A |
| STAT_CNTRBALMASKB_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Symmetrierungen für Mask B |
| STAT_CNTRBALINTRPT_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Unterbrechungen der Zellsymmetrierung |
| STAT_TIBALSOCPCKHSTG_RNG01_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit im Pack SOC Bereich  kleiner 19% |
| STAT_TIBALSOCPCKHSTG_RNG02_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit im Pack SOC Bereich von 19% bis 29% |
| STAT_TIBALSOCPCKHSTG_RNG03_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit im Pack SOC Bereich von 29% bis 39% |
| STAT_TIBALSOCPCKHSTG_RNG04_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit im Pack SOC Bereich von 39% bis 49% |
| STAT_TIBALSOCPCKHSTG_RNG05_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit im Pack SOC Bereich von 49% bis 59% |
| STAT_TIBALSOCPCKHSTG_RNG06_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit im Pack SOC Bereich von 59% bis 69% |
| STAT_TIBALSOCPCKHSTG_RNG07_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit im Pack SOC Bereich  von 69% bis 79% |
| STAT_TIBALSOCPCKHSTG_RNG08_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit im Pack SOC Bereich  von 79% bis 85% |
| STAT_TIBALSOCPCKHSTG_RNG09_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit im Pack SOC Bereich von 85% bis 92% |
| STAT_TIBALSOCPCKHSTG_RNG10_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Symmetrierungszeit im Pack SOC Bereich größer 92% |

### RES_0X5007_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RATICHRGHSTGTH_01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer bei T > 0°C quadratischer Ladestrom Quotient im Bereich kleiner 0.16 |
| STAT_RATICHRGHSTGTH_02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer bei T > 0°C quadratischer Ladestrom Quotient im Bereich von 0.16 bis 0.359 |
| STAT_RATICHRGHSTGTH_03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer bei T > 0°C quadratischer Ladestrom Quotient im Bereich von 0.359 bis 0.489 |
| STAT_RATICHRGHSTGTH_04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer bei T > 0°C quadratischer Ladestrom Quotient im Bereich von 0.489 bis 1.03 |
| STAT_RATICHRGHSTGTH_05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer bei T > 0°C quadratischer Ladestrom Quotient im Bereich größer 1.03 |
| STAT_RATICHRGHSTGTL_01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer bei T < 0°C quadratischer Ladestrom Quotient im Bereich kleiner 0.16 |
| STAT_RATICHRGHSTGTL_02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer bei T < 0°C quadratischer Ladestrom Quotient im Bereich von 0.16 bis 0.359 |
| STAT_RATICHRGHSTGTL_03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer bei T < 0°C quadratischer Ladestrom Quotient im Bereich von 0.359 bis 0.489 |
| STAT_RATICHRGHSTGTL_04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer bei T < 0°C quadratischer Ladestrom Quotient im Bereich von 0.489 bis 1.03 |
| STAT_RATICHRGHSTGTL_05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer bei T < 0°C quadratischer Ladestrom Quotient im Bereich größer 1.03 |
| STAT_RATIDCHAHSTG_01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer quadratischer Entladestrom Quotient im Bereich kleiner 0.16 |
| STAT_RATIDCHAHSTG_02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer quadratischer Entladestrom Quotient im Bereich von 0.16 bis 0.359 |
| STAT_RATIDCHAHSTG_03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer quadratischer Entladestrom Quotient im Bereich von 0.359 bis 0.489 |
| STAT_RATIDCHAHSTG_04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer quadratischer Entladestrom Quotient im Bereich von 0.489 bis 1.03 |
| STAT_RATIDCHAHSTG_05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer quadratischer Entladestrom Quotient im Bereich größer 1.03 |
| STAT_CNTRIINVLD_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitzähler bei ungültigem Temperatursignal |

### RES_0X5008_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIHVOFF_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausschaltdauer der HV-Batterie seit der Fertigung |
| STAT_TIHVON_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Einschaltdauer der HV-Batterie seit der Fertigung |
| STAT_TILF_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlebensdauer der HV-Batterie seit der Fertigung |
| STAT_TIOFF_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtdauer seit dem BOL wenn das SG ist aus oder in Sleep Zustand |
| STAT_CNTPLINSOCHSTG_01_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Plugin Laden im Pack SOC Bereich kleiner 10% |
| STAT_CNTPLINSOCHSTG_02_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Plugin Laden im Pack SOC Bereich von 10% bis 20% |
| STAT_CNTPLINSOCHSTG_03_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Plugin Laden im Pack SOC Bereich von 20% bis 30% |
| STAT_CNTPLINSOCHSTG_04_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Plugin Laden im Pack SOC Bereich von 30% bis 40% |
| STAT_CNTPLINSOCHSTG_05_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Plugin Laden im Pack SOC Bereich von 40% bis 50% |
| STAT_CNTPLINSOCHSTG_06_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Plugin Laden im Pack SOC Bereich von 50% bis 60% |
| STAT_CNTPLINSOCHSTG_07_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Plugin Laden im Pack SOC Bereich von 60% bis 70% |
| STAT_CNTPLINSOCHSTG_08_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Plugin Laden im Pack SOC Bereich von 70% bis 80% |
| STAT_CNTPLINSOCHSTG_09_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Plugin Laden im Pack SOC Bereich größer 80% |
| STAT_CNTPLINTIHSTG_01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer Plugin Ladezeit im Bereich kleiner 3600s |
| STAT_CNTPLINTIHSTG_02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer Plugin Ladezeit im Bereich von 3600s bis 10800s |
| STAT_CNTPLINTIHSTG_03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer Plugin Ladezeit im Bereich von 10800s bis 21600s |
| STAT_CNTPLINTIHSTG_04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer Plugin Ladezeit im Bereich von 21600s bis 32400s |
| STAT_CNTPLINTIHSTG_05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer Plugin Ladezeit im Bereich von 32400s bis 43200s |
| STAT_CNTPLINTIHSTG_06_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer Plugin Ladezeit im Bereich größer 43200s |
| STAT_CNTPLINCHRG_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Plugin Laden Events |

### RES_0X5009_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IMAXPREC_01_WERT | A | - | long | - | - | 25.0 | 4194304.0 | 0.0 | Ringspeicher 01 - Maximaler Strom während der Vorladung der HV-Schuetzansteuerung |
| STAT_IMAXPREC_02_WERT | A | - | long | - | - | 25.0 | 4194304.0 | 0.0 | Ringspeicher 02 - Maximaler Strom während der Vorladung der HV-Schuetzansteuerung |
| STAT_IMAXPREC_03_WERT | A | - | long | - | - | 25.0 | 4194304.0 | 0.0 | Ringspeicher 03 - Maximaler Strom während der Vorladung der HV-Schuetzansteuerung |
| STAT_IMAXPREC_04_WERT | A | - | long | - | - | 25.0 | 4194304.0 | 0.0 | Ringspeicher 04 - Maximaler Strom während der Vorladung der HV-Schuetzansteuerung |
| STAT_IMAXPREC_05_WERT | A | - | long | - | - | 25.0 | 4194304.0 | 0.0 | Ringspeicher 05 - Maximaler Strom während der Vorladung der HV-Schuetzansteuerung |
| STAT_TIPREC_01_WERT | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 01 - Dauer der Vorladungsphase der HV-Schuetzansteuerung |
| STAT_TIPREC_02_WERT | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 02 - Dauer der Vorladungsphase der HV-Schuetzansteuerung |
| STAT_TIPREC_03_WERT | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 03 - Dauer der Vorladungsphase der HV-Schuetzansteuerung |
| STAT_TIPREC_04_WERT | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 04 - Dauer der Vorladungsphase der HV-Schuetzansteuerung |
| STAT_TIPREC_05_WERT | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 05 - Dauer der Vorladungsphase der HV-Schuetzansteuerung |
| STAT_STPREC_01_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 01 - Status (gültig/ungültig) der Messung der Vorladungsphase der HV-Schuetzansteuerung |
| STAT_STPREC_02_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 02 - Status (gültig/ungültig) der Messung der Vorladungsphase der HV-Schuetzansteuerung |
| STAT_STPREC_03_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 03 - Status (gültig/ungültig) der Messung der Vorladungsphase der HV-Schuetzansteuerung |
| STAT_STPREC_04_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 04 - Status (gültig/ungültig) der Messung der Vorladungsphase der HV-Schuetzansteuerung |
| STAT_STPREC_05_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 05 - Status (gültig/ungültig) der Messung der Vorladungsphase der HV-Schuetzansteuerung |

### RES_0X500A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RCELLMAXBUF_01_WERT | mOhm | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 01 - Zellen max Innenwiderstand |
| STAT_RCELLMAXBUF_02_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 02 - Zellen max Innenwiderstand |
| STAT_RCELLMAXBUF_03_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 03 - Zellen max Innenwiderstand |
| STAT_RCELLMAXBUF_04_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 04 - Zellen max Innenwiderstand |
| STAT_RCELLMAXBUF_05_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 05 - Zellen max Innenwiderstand |
| STAT_RCELLMAXBUF_06_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 06 - Zellen max Innenwiderstand |
| STAT_RCELLMAXBUF_07_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 07 - Zellen max Innenwiderstand |
| STAT_RCELLMAXBUF_08_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 08 - Zellen max Innenwiderstand |
| STAT_RCELLMAXBUF_09_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 09 - Zellen max Innenwiderstand |
| STAT_RCELLMAXBUF_10_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 10 - Zellen max Innenwiderstand |
| STAT_RCELLMINBUF_01_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 01 - Zellen min Innenwiderstand |
| STAT_RCELLMINBUF_02_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 02 - Zellen min Innenwiderstand |
| STAT_RCELLMINBUF_03_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 03 - Zellen min Innenwiderstand |
| STAT_RCELLMINBUF_04_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 04 - Zellen min Innenwiderstand |
| STAT_RCELLMINBUF_05_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 05 - Zellen min Innenwiderstand |
| STAT_RCELLMINBUF_06_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 06 - Zellen min Innenwiderstand |
| STAT_RCELLMINBUF_07_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 07 - Zellen min Innenwiderstand |
| STAT_RCELLMINBUF_08_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 08 - Zellen min Innenwiderstand |
| STAT_RCELLMINBUF_09_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 09 - Zellen min Innenwiderstand |
| STAT_RCELLMINBUF_10_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 10 - Zellen min Innenwiderstand |
| STAT_RCSCMAXBUF_01_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 01 - CSC max Innenwiderstand |
| STAT_RCSCMAXBUF_02_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 02 - CSC max Innenwiderstand |
| STAT_RCSCMAXBUF_03_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 03 - CSC max Innenwiderstand |
| STAT_RCSCMAXBUF_04_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 04 - CSC max Innenwiderstand |
| STAT_RCSCMAXBUF_05_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 05 - CSC max Innenwiderstand |
| STAT_RCSCMAXBUF_06_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 06 - CSC max Innenwiderstand |
| STAT_RCSCMAXBUF_07_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 07 - CSC max Innenwiderstand |
| STAT_RCSCMAXBUF_08_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 08 - CSC max Innenwiderstand |
| STAT_RCSCMAXBUF_09_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 09 - CSC max Innenwiderstand |
| STAT_RCSCMAXBUF_10_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 10 - CSC max Innenwiderstand |
| STAT_RCSCMINBUF_01_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 01 - CSC min Innenwiderstand |
| STAT_RCSCMINBUF_02_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 02 - CSC min Innenwiderstand |
| STAT_RCSCMINBUF_03_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 03 - CSC min Innenwiderstand |
| STAT_RCSCMINBUF_04_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 04 - CSC min Innenwiderstand |
| STAT_RCSCMINBUF_05_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 05 - CSC min Innenwiderstand |
| STAT_RCSCMINBUF_06_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 06 - CSC min Innenwiderstand |
| STAT_RCSCMINBUF_07_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 07 - CSC min Innenwiderstand |
| STAT_RCSCMINBUF_08_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 08 - CSC min Innenwiderstand |
| STAT_RCSCMINBUF_09_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 09 - CSC min Innenwiderstand |
| STAT_RCSCMINBUF_10_WERT | mOhm | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ringspeicher 10 - CSC min Innenwiderstand |
| STAT_NRCELLMAXBUF_01_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 01 - Zellenummer mit max Innenwiderstand |
| STAT_NRCELLMAXBUF_02_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 02 - Zellenummer mit max Innenwiderstand |
| STAT_NRCELLMAXBUF_03_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 03 - Zellenummer mit max Innenwiderstand |
| STAT_NRCELLMAXBUF_04_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 04 - Zellenummer mit max Innenwiderstand |
| STAT_NRCELLMAXBUF_05_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 05 - Zellenummer mit max Innenwiderstand |
| STAT_NRCELLMAXBUF_06_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 06 - Zellenummer mit max Innenwiderstand |
| STAT_NRCELLMAXBUF_07_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 07 - Zellenummer mit max Innenwiderstand |
| STAT_NRCELLMAXBUF_08_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 08 - Zellenummer mit max Innenwiderstand |
| STAT_NRCELLMAXBUF_09_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 09 - Zellenummer mit max Innenwiderstand |
| STAT_NRCELLMAXBUF_10_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 10 - Zellenummer mit max Innenwiderstand |
| STAT_NRCELLMINBUF_01_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 01 - Zellenummer mit min Innenwiderstand |
| STAT_NRCELLMINBUF_02_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 02 - Zellenummer mit min Innenwiderstand |
| STAT_NRCELLMINBUF_03_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 03 - Zellenummer mit min Innenwiderstand |
| STAT_NRCELLMINBUF_04_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 04 - Zellenummer mit min Innenwiderstand |
| STAT_NRCELLMINBUF_05_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 05 - Zellenummer mit min Innenwiderstand |
| STAT_NRCELLMINBUF_06_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 06 - Zellenummer mit min Innenwiderstand |
| STAT_NRCELLMINBUF_07_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 07 - Zellenummer mit min Innenwiderstand |
| STAT_NRCELLMINBUF_08_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 08 - Zellenummer mit min Innenwiderstand |
| STAT_NRCELLMINBUF_09_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 09 - Zellenummer mit min Innenwiderstand |
| STAT_NRCELLMINBUF_10_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 10 - Zellenummer mit min Innenwiderstand |
| STAT_NRCSCMAXBUF_01_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 01 - CSC nummer mit max Innenwiderstand |
| STAT_NRCSCMAXBUF_02_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 02 - CSC nummer mit max Innenwiderstand |
| STAT_NRCSCMAXBUF_03_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 03 - CSC nummer mit max Innenwiderstand |
| STAT_NRCSCMAXBUF_04_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 04 - CSC nummer mit max Innenwiderstand |
| STAT_NRCSCMAXBUF_05_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 05 - CSC nummer mit max Innenwiderstand |
| STAT_NRCSCMAXBUF_06_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 06 - CSC nummer mit max Innenwiderstand |
| STAT_NRCSCMAXBUF_07_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 07 - CSC nummer mit max Innenwiderstand |
| STAT_NRCSCMAXBUF_08_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 08 - CSC nummer mit max Innenwiderstand |
| STAT_NRCSCMAXBUF_09_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 09 - CSC nummer mit max Innenwiderstand |
| STAT_NRCSCMAXBUF_10_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 10 - CSC nummer mit max Innenwiderstand |
| STAT_NRCSCMINBUF_01_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 01 - CSC nummer mit min Innenwiderstand |
| STAT_NRCSCMINBUF_02_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 02 - CSC nummer mit min Innenwiderstand |
| STAT_NRCSCMINBUF_03_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 03 - CSC nummer mit min Innenwiderstand |
| STAT_NRCSCMINBUF_04_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 04 - CSC nummer mit min Innenwiderstand |
| STAT_NRCSCMINBUF_05_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 05 - CSC nummer mit min Innenwiderstand |
| STAT_NRCSCMINBUF_06_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 06 - CSC nummer mit min Innenwiderstand |
| STAT_NRCSCMINBUF_07_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 07 - CSC nummer mit min Innenwiderstand |
| STAT_NRCSCMINBUF_08_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 08 - CSC nummer mit min Innenwiderstand |
| STAT_NRCSCMINBUF_09_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 09 - CSC nummer mit min Innenwiderstand |
| STAT_NRCSCMINBUF_10_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 10 - CSC nummer mit min Innenwiderstand |

### RES_0X500B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DELTASOCOPERHSTG_01_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Delta SOC im Bereich bis 5% SOC |
| STAT_DELTASOCOPERHSTG_02_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Delta SOC im Bereich von 5-10% SOC |
| STAT_DELTASOCOPERHSTG_03_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Delta SOC im Bereich von 10-15% SOC |
| STAT_DELTASOCOPERHSTG_04_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Delta SOC im Bereich von 15-20% SOC |
| STAT_DELTASOCOPERHSTG_05_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Delta SOC im Bereich von 20-25% SOC |
| STAT_DELTASOCOPERHSTG_06_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Delta SOC im Bereich von 25-30% SOC |
| STAT_DELTASOCOPERHSTG_07_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Delta SOC im Bereich von 30-35% SOC |
| STAT_DELTASOCOPERHSTG_08_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Delta SOC im Bereich von 35-40% SOC |
| STAT_DELTASOCOPERHSTG_09_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Delta SOC im Bereich von 40-45% SOC |
| STAT_DELTASOCOPERHSTG_10_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Delta SOC im Bereich von 45-50% SOC |
| STAT_DELTASOCOPERHSTG_11_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Histogramm Delta SOC im Bereich größer 50% SOC |
| STAT_DRVFEAT1_WERT | As | - | unsigned long | - | - | 1.0 | 8000.0 | 0.0 | Driving Feature 1 |
| STAT_DRVFEAT2_WERT | As | - | unsigned long | - | - | 1.0 | 8000.0 | 0.0 | Driving Feature 2 |
| STAT_SOCPCKOPERHSTG_01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer im Pack SOC Bereich kleiner 10% |
| STAT_SOCPCKOPERHSTG_02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer im Pack SOC Bereich von 10% bis 20% |
| STAT_SOCPCKOPERHSTG_03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer im Pack SOC Bereich von 20% bis 30% |
| STAT_SOCPCKOPERHSTG_04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer im Pack SOC Bereich von 30% bis 40% |
| STAT_SOCPCKOPERHSTG_05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer im Pack SOC Bereich von 40% bis 50% |
| STAT_SOCPCKOPERHSTG_06_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer im Pack SOC Bereich von 50% bis 60% |
| STAT_SOCPCKOPERHSTG_07_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer im Pack SOC Bereich von 60% bis 70% |
| STAT_SOCPCKOPERHSTG_08_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer im Pack SOC Bereich von 70% bis 80% |
| STAT_SOCPCKOPERHSTG_09_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer im Pack SOC Bereich von 80% bis 90% |
| STAT_SOCPCKOPERHSTG_10_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer im Pack SOC Bereich größer 90% |
| STAT_TIDEEPDCHA_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Tiefentladung |
| STAT_TISHDWN_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit des letzten Shutdowns |
| STAT_CNTRDEEPDCHA_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Tiefentladungen |

### RES_0X500C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TOPERHSTG_CSC01_T_RNG01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer Modultemperatur im Bereich kleiner 10°C |
| STAT_TOPERHSTG_CSC01_T_RNG02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer Modultemperatur im Bereich von 10°C bis 20°C |
| STAT_TOPERHSTG_CSC01_T_RNG03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer Modultemperatur im Bereich von 20°C bis 30°C |
| STAT_TOPERHSTG_CSC01_T_RNG04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer Modultemperatur im Bereich von 30°C bis 35°C |
| STAT_TOPERHSTG_CSC01_T_RNG05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer Modultemperatur im Bereich von 35°C bis 40°C |
| STAT_TOPERHSTG_CSC01_T_RNG06_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer Modultemperatur im Bereich von 40°C bis 45°C |
| STAT_TOPERHSTG_CSC01_T_RNG07_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer Modultemperatur im Bereich von 45°C bis 50°C |
| STAT_TOPERHSTG_CSC01_T_RNG08_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer Modultemperatur im Bereich von 50°C bis 55°C |
| STAT_TOPERHSTG_CSC01_T_RNG09_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer Modultemperatur im Bereich von 55°C bis 60°C |
| STAT_TOPERHSTG_CSC01_T_RNG10_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer Modultemperatur im Bereich größer 60°C |
| STAT_TOPERHSTG_CSC02_T_RNG01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer Modultemperatur im Bereich kleiner 10°C |
| STAT_TOPERHSTG_CSC02_T_RNG02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer Modultemperatur im Bereich von 10°C bis 20°C |
| STAT_TOPERHSTG_CSC02_T_RNG03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer Modultemperatur im Bereich von 20°C bis 30°C |
| STAT_TOPERHSTG_CSC02_T_RNG04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer Modultemperatur im Bereich von 30°C bis 35°C |
| STAT_TOPERHSTG_CSC02_T_RNG05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer Modultemperatur im Bereich von 35°C bis 40°C |
| STAT_TOPERHSTG_CSC02_T_RNG06_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer Modultemperatur im Bereich von 40°C bis 45°C |
| STAT_TOPERHSTG_CSC02_T_RNG07_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer Modultemperatur im Bereich von 45°C bis 50°C |
| STAT_TOPERHSTG_CSC02_T_RNG08_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer Modultemperatur im Bereich von 50°C bis 55°C |
| STAT_TOPERHSTG_CSC02_T_RNG09_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer Modultemperatur im Bereich von 55°C bis 60°C |
| STAT_TOPERHSTG_CSC02_T_RNG10_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer Modultemperatur im Bereich größer 60°C |
| STAT_TOPERHSTG_CSC03_T_RNG01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer Modultemperatur im Bereich kleiner 10°C |
| STAT_TOPERHSTG_CSC03_T_RNG02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer Modultemperatur im Bereich von 10°C bis 20°C |
| STAT_TOPERHSTG_CSC03_T_RNG03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer Modultemperatur im Bereich von 20°C bis 30°C |
| STAT_TOPERHSTG_CSC03_T_RNG04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer Modultemperatur im Bereich von 30°C bis 35°C |
| STAT_TOPERHSTG_CSC03_T_RNG05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer Modultemperatur im Bereich von 35°C bis 40°C |
| STAT_TOPERHSTG_CSC03_T_RNG06_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer Modultemperatur im Bereich von 40°C bis 45°C |
| STAT_TOPERHSTG_CSC03_T_RNG07_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer Modultemperatur im Bereich von 45°C bis 50°C |
| STAT_TOPERHSTG_CSC03_T_RNG08_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer Modultemperatur im Bereich von 50°C bis 55°C |
| STAT_TOPERHSTG_CSC03_T_RNG09_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer Modultemperatur im Bereich von 55°C bis 60°C |
| STAT_TOPERHSTG_CSC03_T_RNG10_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer Modultemperatur im Bereich größer 60°C |
| STAT_TOPERHSTG_CSC04_T_RNG01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer Modultemperatur im Bereich kleiner 10°C |
| STAT_TOPERHSTG_CSC04_T_RNG02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer Modultemperatur im Bereich von 10°C bis 20°C |
| STAT_TOPERHSTG_CSC04_T_RNG03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer Modultemperatur im Bereich von 20°C bis 30°C |
| STAT_TOPERHSTG_CSC04_T_RNG04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer Modultemperatur im Bereich von 30°C bis 35°C |
| STAT_TOPERHSTG_CSC04_T_RNG05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer Modultemperatur im Bereich von 35°C bis 40°C |
| STAT_TOPERHSTG_CSC04_T_RNG06_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer Modultemperatur im Bereich von 40°C bis 45°C |
| STAT_TOPERHSTG_CSC04_T_RNG07_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer Modultemperatur im Bereich von 45°C bis 50°C |
| STAT_TOPERHSTG_CSC04_T_RNG08_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer Modultemperatur im Bereich von 50°C bis 55°C |
| STAT_TOPERHSTG_CSC04_T_RNG09_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer Modultemperatur im Bereich von 55°C bis 60°C |
| STAT_TOPERHSTG_CSC04_T_RNG10_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer Modultemperatur im Bereich größer 60°C |
| STAT_TOPERHSTG_CSC05_T_RNG01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer Modultemperatur im Bereich kleiner 10°C |
| STAT_TOPERHSTG_CSC05_T_RNG02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer Modultemperatur im Bereich von 10°C bis 20°C |
| STAT_TOPERHSTG_CSC05_T_RNG03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer Modultemperatur im Bereich von 20°C bis 30°C |
| STAT_TOPERHSTG_CSC05_T_RNG04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer Modultemperatur im Bereich von 30°C bis 35°C |
| STAT_TOPERHSTG_CSC05_T_RNG05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer Modultemperatur im Bereich von 35°C bis 40°C |
| STAT_TOPERHSTG_CSC05_T_RNG06_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer Modultemperatur im Bereich von 40°C bis 45°C |
| STAT_TOPERHSTG_CSC05_T_RNG07_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer Modultemperatur im Bereich von 45°C bis 50°C |
| STAT_TOPERHSTG_CSC05_T_RNG08_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer Modultemperatur im Bereich von 50°C bis 55°C |
| STAT_TOPERHSTG_CSC05_T_RNG09_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer Modultemperatur im Bereich von 55°C bis 60°C |
| STAT_TOPERHSTG_CSC05_T_RNG10_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer Modultemperatur im Bereich größer 60°C |
| STAT_TOPERHSTG_CSC06_T_RNG01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer Modultemperatur im Bereich kleiner 10°C |
| STAT_TOPERHSTG_CSC06_T_RNG02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer Modultemperatur im Bereich von 10°C bis 20°C |
| STAT_TOPERHSTG_CSC06_T_RNG03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer Modultemperatur im Bereich von 20°C bis 30°C |
| STAT_TOPERHSTG_CSC06_T_RNG04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer Modultemperatur im Bereich von 30°C bis 35°C |
| STAT_TOPERHSTG_CSC06_T_RNG05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer Modultemperatur im Bereich von 35°C bis 40°C |
| STAT_TOPERHSTG_CSC06_T_RNG06_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer Modultemperatur im Bereich von 40°C bis 45°C |
| STAT_TOPERHSTG_CSC06_T_RNG07_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer Modultemperatur im Bereich von 45°C bis 50°C |
| STAT_TOPERHSTG_CSC06_T_RNG08_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer Modultemperatur im Bereich von 50°C bis 55°C |
| STAT_TOPERHSTG_CSC06_T_RNG09_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer Modultemperatur im Bereich von 55°C bis 60°C |
| STAT_TOPERHSTG_CSC06_T_RNG10_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer Modultemperatur im Bereich größer 60°C |
| STAT_TOPERHSTG_CSC07_T_RNG01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer Modultemperatur im Bereich kleiner 10°C |
| STAT_TOPERHSTG_CSC07_T_RNG02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer Modultemperatur im Bereich von 10°C bis 20°C |
| STAT_TOPERHSTG_CSC07_T_RNG03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer Modultemperatur im Bereich von 20°C bis 30°C |
| STAT_TOPERHSTG_CSC07_T_RNG04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer Modultemperatur im Bereich von 30°C bis 35°C |
| STAT_TOPERHSTG_CSC07_T_RNG05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer Modultemperatur im Bereich von 35°C bis 40°C |
| STAT_TOPERHSTG_CSC07_T_RNG06_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer Modultemperatur im Bereich von 40°C bis 45°C |
| STAT_TOPERHSTG_CSC07_T_RNG07_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer Modultemperatur im Bereich von 45°C bis 50°C |
| STAT_TOPERHSTG_CSC07_T_RNG08_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer Modultemperatur im Bereich von 50°C bis 55°C |
| STAT_TOPERHSTG_CSC07_T_RNG09_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer Modultemperatur im Bereich von 55°C bis 60°C |
| STAT_TOPERHSTG_CSC07_T_RNG10_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer Modultemperatur im Bereich größer 60°C |
| STAT_TOPERHSTG_CSC08_T_RNG01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer Modultemperatur im Bereich kleiner 10°C |
| STAT_TOPERHSTG_CSC08_T_RNG02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer Modultemperatur im Bereich von 10°C bis 20°C |
| STAT_TOPERHSTG_CSC08_T_RNG03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer Modultemperatur im Bereich von 20°C bis 30°C |
| STAT_TOPERHSTG_CSC08_T_RNG04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer Modultemperatur im Bereich von 30°C bis 35°C |
| STAT_TOPERHSTG_CSC08_T_RNG05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer Modultemperatur im Bereich von 35°C bis 40°C |
| STAT_TOPERHSTG_CSC08_T_RNG06_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer Modultemperatur im Bereich von 40°C bis 45°C |
| STAT_TOPERHSTG_CSC08_T_RNG07_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer Modultemperatur im Bereich von 45°C bis 50°C |
| STAT_TOPERHSTG_CSC08_T_RNG08_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer Modultemperatur im Bereich von 50°C bis 55°C |
| STAT_TOPERHSTG_CSC08_T_RNG09_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer Modultemperatur im Bereich von 55°C bis 60°C |
| STAT_TOPERHSTG_CSC08_T_RNG10_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer Modultemperatur im Bereich größer 60°C |
| STAT_CNTRTOPERINVLD_01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer Modultemperatur ungültig |
| STAT_CNTRTOPERINVLD_02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer Modultemperatur ungültig |
| STAT_CNTRTOPERINVLD_03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer Modultemperatur ungültig |
| STAT_CNTRTOPERINVLD_04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer Modultemperatur ungültig |
| STAT_CNTRTOPERINVLD_05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer Modultemperatur ungültig |
| STAT_CNTRTOPERINVLD_06_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer Modultemperatur ungültig |
| STAT_CNTRTOPERINVLD_07_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer Modultemperatur ungültig |
| STAT_CNTRTOPERINVLD_08_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer Modultemperatur ungültig |
| STAT_CNTRTSOCSLEEPHSTGINVLD_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl fehlerhafte Updates von den Temperaturhistogrammen |
| STAT_T_RNG01_SOC_RNG01_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur kleiner 15°C - Zeitdauer in Sleep Phase im Pack SOC Bereich kleiner 10% |
| STAT_T_RNG01_SOC_RNG02_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur kleiner 15°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 10% bis 20% |
| STAT_T_RNG01_SOC_RNG03_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur kleiner 15°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 20% bis 30% |
| STAT_T_RNG01_SOC_RNG04_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur kleiner 15°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 30% bis 40% |
| STAT_T_RNG01_SOC_RNG05_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur kleiner 15°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 40% bis 50% |
| STAT_T_RNG01_SOC_RNG06_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur kleiner 15°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 50% bis 60% |
| STAT_T_RNG01_SOC_RNG07_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur kleiner 15°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 60% bis 70% |
| STAT_T_RNG01_SOC_RNG08_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur kleiner 15°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 70% bis 80% |
| STAT_T_RNG01_SOC_RNG09_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur kleiner 15°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 80% bis 90% |
| STAT_T_RNG01_SOC_RNG10_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur kleiner 15°C - Zeitdauer in Sleep Phase im Pack SOC Bereich größer 90% |
| STAT_T_RNG02_SOC_RNG01_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 15°C bis 25°C - Zeitdauer in Sleep Phase im Pack SOC Bereich kleiner 10% |
| STAT_T_RNG02_SOC_RNG02_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 15°C bis 25°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 10% bis 20% |
| STAT_T_RNG02_SOC_RNG03_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 15°C bis 25°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 20% bis 30% |
| STAT_T_RNG02_SOC_RNG04_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 15°C bis 25°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 30% bis 40% |
| STAT_T_RNG02_SOC_RNG05_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 15°C bis 25°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 40% bis 50% |
| STAT_T_RNG02_SOC_RNG06_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 15°C bis 25°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 50% bis 60% |
| STAT_T_RNG02_SOC_RNG07_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 15°C bis 25°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 60% bis 70% |
| STAT_T_RNG02_SOC_RNG08_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 15°C bis 25°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 70% bis 80% |
| STAT_T_RNG02_SOC_RNG09_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 15°C bis 25°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 80% bis 90% |
| STAT_T_RNG02_SOC_RNG10_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 15°C bis 25°C - Zeitdauer in Sleep Phase im Pack SOC Bereich größer 90% |
| STAT_T_RNG03_SOC_RNG01_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 30°C - Zeitdauer in Sleep Phase im Pack SOC Bereich kleiner 10% |
| STAT_T_RNG03_SOC_RNG02_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 30°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 10% bis 20% |
| STAT_T_RNG03_SOC_RNG03_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 30°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 20% bis 30% |
| STAT_T_RNG03_SOC_RNG04_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 30°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 30% bis 40% |
| STAT_T_RNG03_SOC_RNG05_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 30°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 40% bis 50% |
| STAT_T_RNG03_SOC_RNG06_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 30°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 50% bis 60% |
| STAT_T_RNG03_SOC_RNG07_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 30°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 60% bis 70% |
| STAT_T_RNG03_SOC_RNG08_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 30°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 70% bis 80% |
| STAT_T_RNG03_SOC_RNG09_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 30°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 80% bis 90% |
| STAT_T_RNG03_SOC_RNG10_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 30°C - Zeitdauer in Sleep Phase im Pack SOC Bereich größer 90% |
| STAT_T_RNG04_SOC_RNG01_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 40°C - Zeitdauer in Sleep Phase im Pack SOC Bereich kleiner 10% |
| STAT_T_RNG04_SOC_RNG02_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 40°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 10% bis 20% |
| STAT_T_RNG04_SOC_RNG03_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 40°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 20% bis 30% |
| STAT_T_RNG04_SOC_RNG04_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 40°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 30% bis 40% |
| STAT_T_RNG04_SOC_RNG05_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 40°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 40% bis 50% |
| STAT_T_RNG04_SOC_RNG06_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 40°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 50% bis 60% |
| STAT_T_RNG04_SOC_RNG07_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 40°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 60% bis 70% |
| STAT_T_RNG04_SOC_RNG08_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 40°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 70% bis 80% |
| STAT_T_RNG04_SOC_RNG09_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 40°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 80% bis 90% |
| STAT_T_RNG04_SOC_RNG10_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 25°C bis 40°C - Zeitdauer in Sleep Phase im Pack SOC Bereich größer 90% |
| STAT_T_RNG05_SOC_RNG01_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 40°C bis 50°C - Zeitdauer in Sleep Phase im Pack SOC Bereich kleiner 10% |
| STAT_T_RNG05_SOC_RNG02_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 40°C bis 50°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 10% bis 20% |
| STAT_T_RNG05_SOC_RNG03_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 40°C bis 50°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 20% bis 30% |
| STAT_T_RNG05_SOC_RNG04_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 40°C bis 50°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 30% bis 40% |
| STAT_T_RNG05_SOC_RNG05_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 40°C bis 50°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 40% bis 50% |
| STAT_T_RNG05_SOC_RNG06_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 40°C bis 50°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 50% bis 60% |
| STAT_T_RNG05_SOC_RNG07_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 40°C bis 50°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 60% bis 70% |
| STAT_T_RNG05_SOC_RNG08_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 40°C bis 50°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 70% bis 80% |
| STAT_T_RNG05_SOC_RNG09_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 40°C bis 50°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 80% bis 90% |
| STAT_T_RNG05_SOC_RNG10_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 40°C bis 50°C - Zeitdauer in Sleep Phase im Pack SOC Bereich größer 90% |
| STAT_T_RNG06_SOC_RNG01_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 50°C bis 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich kleiner 10% |
| STAT_T_RNG06_SOC_RNG02_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 50°C bis 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 10% bis 20% |
| STAT_T_RNG06_SOC_RNG03_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 50°C bis 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 20% bis 30% |
| STAT_T_RNG06_SOC_RNG04_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 50°C bis 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 30% bis 40% |
| STAT_T_RNG06_SOC_RNG05_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 50°C bis 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 40% bis 50% |
| STAT_T_RNG06_SOC_RNG06_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 50°C bis 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 50% bis 60% |
| STAT_T_RNG06_SOC_RNG07_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 50°C bis 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 60% bis 70% |
| STAT_T_RNG06_SOC_RNG08_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 50°C bis 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 70% bis 80% |
| STAT_T_RNG06_SOC_RNG09_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 50°C bis 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 80% bis 90% |
| STAT_T_RNG06_SOC_RNG10_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur von 50°C bis 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich größer 90% |
| STAT_T_RNG07_SOC_RNG01_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur größer 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich kleiner 10% |
| STAT_T_RNG07_SOC_RNG02_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur größer 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 10% bis 20% |
| STAT_T_RNG07_SOC_RNG03_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur größer 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 20% bis 30% |
| STAT_T_RNG07_SOC_RNG04_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur größer 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 30% bis 40% |
| STAT_T_RNG07_SOC_RNG05_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur größer 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 40% bis 50% |
| STAT_T_RNG07_SOC_RNG06_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur größer 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 50% bis 60% |
| STAT_T_RNG07_SOC_RNG07_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur größer 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 60% bis 70% |
| STAT_T_RNG07_SOC_RNG08_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur größer 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 70% bis 80% |
| STAT_T_RNG07_SOC_RNG09_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur größer 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich von 80% bis 90% |
| STAT_T_RNG07_SOC_RNG10_SLEEPHSTG_WERT | min | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bereich Packtemperatur größer 60°C - Zeitdauer in Sleep Phase im Pack SOC Bereich größer 90% |

### RES_0X500D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CNTACTVNCOOLTHSTG_01_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Kühlungsaktivierungen für Dauer im Bereich kleiner 300s |
| STAT_CNTACTVNCOOLTHSTG_02_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Kühlungsaktivierungen für Dauer im Bereich von 300s bis 600s |
| STAT_CNTACTVNCOOLTHSTG_03_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Kühlungsaktivierungen für Dauer im Bereich von 600s bis 1200s |
| STAT_CNTACTVNCOOLTHSTG_04_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Kühlungsaktivierungen für Dauer im Bereich größer 1200s |
| STAT_TITDECOOLTHSTG_01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kühlungsdauer mit Modulemperaturdifferenz im Bereich kleiner 2°C |
| STAT_TITDECOOLTHSTG_02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kühlungsdauer mit Modulemperaturdifferenz im Bereich von 2°C bis 4°C |
| STAT_TITDECOOLTHSTG_03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kühlungsdauer mit Modulemperaturdifferenz im Bereich von 4°C bis 6°C |
| STAT_TITDECOOLTHSTG_04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kühlungsdauer mit Modulemperaturdifferenz im Bereich von 6°C bis 8°C |
| STAT_TITDECOOLTHSTG_05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kühlungsdauer mit Modulemperaturdifferenz im Bereich von 8°C bis 10°C |
| STAT_TITDECOOLTHSTG_06_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kühlungsdauer mit Modulemperaturdifferenz im Bereich größer 10°C |
| STAT_CNTRSTRTUPCOOLT_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl sofortige Kühlung nach Start-Up |
| STAT_CNTRMAXROWEMGYCOOLT_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Anzahl der aufeinanderfolgenden Wachzyklen, in denen eine dringende Kühlung erforderlich war |

### RES_0X500E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UMODLERRARY_01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer mit ungültigem Spannungssignal |
| STAT_UMODLERRARY_02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer mit ungültigem Spannungssignal |
| STAT_UMODLERRARY_03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer mit ungültigem Spannungssignal |
| STAT_UMODLERRARY_04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer mit ungültigem Spannungssignal |
| STAT_UMODLERRARY_05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer mit ungültigem Spannungssignal |
| STAT_UMODLERRARY_06_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer mit ungültigem Spannungssignal |
| STAT_UMODLERRARY_07_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer mit ungültigem Spannungssignal |
| STAT_UMODLERRARY_08_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer mit ungültigem Spannungssignal |
| STAT_UMODL_01_RNG 01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer  im Modulspannung Bereich kleiner 2.69 V |
| STAT_UMODL_02_RNG 01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer  im Modulspannung Bereich kleiner 2.69 V |
| STAT_UMODL_03_RNG 01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer  im Modulspannung Bereich kleiner 2.69 V |
| STAT_UMODL_04_RNG 01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer  im Modulspannung Bereich kleiner 2.69 V |
| STAT_UMODL_05_RNG 01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer  im Modulspannung Bereich kleiner 2.69 V |
| STAT_UMODL_06_RNG 01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer  im Modulspannung Bereich kleiner 2.69 V |
| STAT_UMODL_07_RNG 01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer  im Modulspannung Bereich kleiner 2.69 V |
| STAT_UMODL_08_RNG 01_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer  im Modulspannung Bereich kleiner 2.69 V |
| STAT_UMODL_01_RNG 02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer  im Modulspannung Bereich von 2.69 V bis 3.00 V |
| STAT_UMODL_02_RNG 02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer  im Modulspannung Bereich von 2.69 V bis 3.00 V |
| STAT_UMODL_03_RNG 02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer  im Modulspannung Bereich von 2.69 V bis 3.00 V |
| STAT_UMODL_04_RNG 02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer  im Modulspannung Bereich von 2.69 V bis 3.00 V |
| STAT_UMODL_05_RNG 02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer  im Modulspannung Bereich von 2.69 V bis 3.00 V |
| STAT_UMODL_06_RNG 02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer  im Modulspannung Bereich von 2.69 V bis 3.00 V |
| STAT_UMODL_07_RNG 02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer  im Modulspannung Bereich von 2.69 V bis 3.00 V |
| STAT_UMODL_08_RNG 02_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer  im Modulspannung Bereich von 2.69 V bis 3.00 V |
| STAT_UMODL_01_RNG 03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer  im Modulspannung Bereich von 3.00 V bis 4.00 V |
| STAT_UMODL_02_RNG 03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer  im Modulspannung Bereich von 3.00 V bis 4.00 V |
| STAT_UMODL_03_RNG 03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer  im Modulspannung Bereich von 3.00 V bis 4.00 V |
| STAT_UMODL_04_RNG 03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer  im Modulspannung Bereich von 3.00 V bis 4.00 V |
| STAT_UMODL_05_RNG 03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer  im Modulspannung Bereich von 3.00 V bis 4.00 V |
| STAT_UMODL_06_RNG 03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer  im Modulspannung Bereich von 3.00 V bis 4.00 V |
| STAT_UMODL_07_RNG 03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer  im Modulspannung Bereich von 3.00 V bis 4.00 V |
| STAT_UMODL_08_RNG 03_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer  im Modulspannung Bereich von 3.00 V bis 4.00 V |
| STAT_UMODL_01_RNG 04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer  im Modulspannung Bereich von 4.00 V bis 4.12 V |
| STAT_UMODL_02_RNG 04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer  im Modulspannung Bereich von 4.00 V bis 4.12 V |
| STAT_UMODL_03_RNG 04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer  im Modulspannung Bereich von 4.00 V bis 4.12 V |
| STAT_UMODL_04_RNG 04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer  im Modulspannung Bereich von 4.00 V bis 4.12 V |
| STAT_UMODL_05_RNG 04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer  im Modulspannung Bereich von 4.00 V bis 4.12 V |
| STAT_UMODL_06_RNG 04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer  im Modulspannung Bereich von 4.00 V bis 4.12 V |
| STAT_UMODL_07_RNG 04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer  im Modulspannung Bereich von 4.00 V bis 4.12 V |
| STAT_UMODL_08_RNG 04_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer  im Modulspannung Bereich von 4.00 V bis 4.12 V |
| STAT_UMODL_01_RNG 05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC0: Zeitdauer  im Modulspannung Bereich größer 4.12 V |
| STAT_UMODL_02_RNG 05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC1: Zeitdauer  im Modulspannung Bereich größer 4.12 V |
| STAT_UMODL_03_RNG 05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC2: Zeitdauer  im Modulspannung Bereich größer 4.12 V |
| STAT_UMODL_04_RNG 05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC3: Zeitdauer  im Modulspannung Bereich größer 4.12 V |
| STAT_UMODL_05_RNG 05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC4: Zeitdauer  im Modulspannung Bereich größer 4.12 V |
| STAT_UMODL_06_RNG 05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC5: Zeitdauer  im Modulspannung Bereich größer 4.12 V |
| STAT_UMODL_07_RNG 05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC6: Zeitdauer  im Modulspannung Bereich größer 4.12 V |
| STAT_UMODL_08_RNG 05_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | CSC7: Zeitdauer  im Modulspannung Bereich größer 4.12 V |
| STAT_UCELLSIGERR_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl ungültige Zellspannungssignale |
| STAT_UCELLMINBUF_01_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 01 - Minimale Zellspannung |
| STAT_UCELLMINBUF_02_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 02 - Minimale Zellspannung |
| STAT_UCELLMINBUF_03_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 03 - Minimale Zellspannung |
| STAT_UCELLMINBUF_04_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 04 - Minimale Zellspannung |
| STAT_UCELLMINBUF_05_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 05 - Minimale Zellspannung |
| STAT_UCELLMINBUF_06_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 06 - Minimale Zellspannung |
| STAT_UCELLMINBUF_07_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 07 - Minimale Zellspannung |
| STAT_UCELLMINBUF_08_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 08 - Minimale Zellspannung |
| STAT_UCELLMINBUF_09_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 09 - Minimale Zellspannung |
| STAT_UCELLMINBUF_10_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 10 - Minimale Zellspannung |
| STAT_UCELLMINBUF_11_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 11 - Minimale Zellspannung |
| STAT_UCELLMINBUF_12_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 12 - Minimale Zellspannung |
| STAT_UCELLMINBUF_13_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 13 - Minimale Zellspannung |
| STAT_UCELLMINBUF_14_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 14 - Minimale Zellspannung |
| STAT_UCELLMINBUF_15_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 15 - Minimale Zellspannung |
| STAT_UCELLMINBUF_16_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 16 - Minimale Zellspannung |
| STAT_UCELLMINBUF_17_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 17 - Minimale Zellspannung |
| STAT_UCELLMINBUF_18_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 18 - Minimale Zellspannung |
| STAT_UCELLMINBUF_19_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 19 - Minimale Zellspannung |
| STAT_UCELLMINBUF_20_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 20 - Minimale Zellspannung |
| STAT_UCELLMAXBUF_01_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 01 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_02_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 02 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_03_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 03 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_04_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 04 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_05_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 05 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_06_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 06 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_07_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 07 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_08_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 08 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_09_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 09 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_10_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 10 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_11_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 11 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_12_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 12 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_13_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 13 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_14_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 14 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_15_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 15 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_16_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 16 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_17_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 17 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_18_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 18 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_19_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 19 - Maximale Zellspannung |
| STAT_UCELLMAXBUF_20_WERT | V | - | unsigned int | - | - | 5.0 | 65536.0 | 0.0 | Ringspeicher 20 - Maximale Zellspannung |
| STAT_UCELLMAXNRBUF_01_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 01 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_02_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 02 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_03_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 03 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_04_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 04 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_05_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 05 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_06_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 06 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_07_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 07 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_08_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 08 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_09_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 09 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_10_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 10 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_11_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 11 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_12_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 12 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_13_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 13 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_14_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 14 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_15_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 15 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_16_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 16 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_17_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 17 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_18_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 18 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_19_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 19 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMAXNRBUF_20_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 20 - Nummer der Zelle mit der maximalen Spannung |
| STAT_UCELLMINNRBUF_01_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 01 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_02_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 02 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_03_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 03 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_04_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 04 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_05_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 05 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_06_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 06 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_07_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 07 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_08_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 08 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_09_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 09 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_10_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 10 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_11_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 11 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_12_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 12 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_13_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 13 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_14_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 14 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_15_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 15 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_16_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 16 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_17_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 17 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_18_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 18 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_19_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 19 - Nummer der Zelle mit der minimalen Spannung |
| STAT_UCELLMINNRBUF_20_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 20 - Nummer der Zelle mit der minimalen Spannung |

### RES_0X500F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QTOTLFCHRG_WERT | Ah | - | unsigned long | - | - | 1.0 | 36000.0 | 0.0 | Kumulierte Ladungsmenge (Ladevorgänge) seit BOL |
| STAT_PWRHRCHRG_WERT | kWh | - | unsigned long | - | - | 1.0 | 36000.0 | 0.0 | Gesamtenergiedurchsatz (Leistung über Zeit)  bei Ladevorgängen seit BOL |
| STAT_QTOTLFDCHA_WERT | Ah | - | unsigned long | - | - | 1.0 | 36000.0 | 0.0 | Kumulierte Ladungsmenge (Entladevorgänge) seit BOL |
| STAT_PWRHRDCHA_WERT | kWh | - | unsigned long | - | - | 1.0 | 36000.0 | 0.0 | Gesamtenergiedurchsatz (Leistung über Zeit)  bei Entladevorgängen seit BOL |
| STAT_NRPLINFULLCHRGCYC_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl erflogreich beendeten Vollladezyklen (PlugInLadevorgänge) |

### RES_0XAD61_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MESSUNG_ERFOLGREICH | - | - | + | 0-n | high | unsigned char | - | TAB_ISOLATION_ERFOLGREICH | 1.0 | 1.0 | 0.0 | aktueller Zustand Isolationsmessung |
| STAT_MESSUNG_ISOLATIONSFEHLER | - | - | + | 0-n | high | unsigned char | - | TAB_ISOLATION_ISOLATIONSFEHLER | 1.0 | 1.0 | 0.0 | aktueller Zustand des Isolationsfehlers |

### RES_0XAD66_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAPAZITAET_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kapazitätsschätzwert in % (Wertebereich 0-100%) bezogen auf Nennkapazität |
| STAT_AKTUELLER_ZUSTAND_NR | - | - | + | 0-n | high | unsigned char | - | TAB_SME_ERMITTLUNG | - | - | - | Rückgabe Ermittlung läuft, erfolgreich oder mit Fehler beendet |

### RES_0XAD69_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NV_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | TAB_NV_DATEN_SCHREIBEN | - | - | - | Status für Sichern von Daten im NV-RAM (0 = beendet / 1 = noch aktiv) |

### RES_0XAD6E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_WERT | - | - | + | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | aktuell gemessener Spannungswert der Zelle x |

### RES_0XAD7B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | ENTLUEFTUNG_KUEHLKREIS_STATUS | - | - | - | Status der Routine |

### RES_0XDD61_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHUETZ_FREIGABE | 0-n | high | unsigned char | - | TAB_SCHUETZ_FREIGABE | 1.0 | 1.0 | 0.0 | Liest das Bit zur Freigabe oder Sperrung der Schützschalter |

### RES_0XDD6A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ISOWIDERSTAND_EXT_TRG_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ermittelter Isowiderstand vom Gesamtsystem im Nachlauf (geschlossene Schütze) |
| STAT_ISOWIDERSTAND_EXT_STD_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ermittelter Isowiderstand vom Gesamtsystem im Betrieb (geschlossene Schütze) |
| STAT_ISOWIDERSTAND_INT_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ermittelter interner Isowiderstand (offene Schütze); wird nur auf Anfrage per Service-Routine STEUERN_ISOLATION bei offenen Schützen gemessen |
| STAT_ISOWIDERSTAND_EXT_TRG_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Gesamtsystem im Nachlauf: 0 = Isolationswiderstand nicht plausibel, 1 = Isolationswiderstand plausibel |
| STAT_ISOWIDERSTAND_EXT_STD_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Gesamtsystem im Betrieb: 0 = Isolationswiderstand nicht plausibel, 1 = Isolationswiderstand plausibel |
| STAT_ISOWIDERSTAND_INT_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Intern: 0 = Isolationswiderstand nicht plausibel, 1 = Isolationswiderstand plausibel; wird nur auf Anfrage per Service-Routine STEUERN_ISOLATION bei offenen Schützen gemessen |

### RES_0XDD6F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KUEHLKREISLAUF_VENTIL | 0-n | high | unsigned char | - | TAB_KUEHLKREISLAUF_VENTIL_RUECKGABE | - | - | - | Status Kühlmittel-Ventil: Geschlossen oder offen |

### RES_0XDD7D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADESTROMGRENZE_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | maximal erlaubter Ladestrom |
| STAT_ENTLADESTROMGRENZE_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | maximal erlaubter Entladesstrom |

### RES_0XDD7E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADESPANNUNGSGRENZE_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | maximal erlaubte Ladespannung |
| STAT_ENTLADESPANNUNGSGRENZE_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | maximal erlaubte Entladespannung |

### RES_0XDD91_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_SOC_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 1: %0 < SOC <= %10 |
| STAT_ZEIT_SOC_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 2: %10 < SOC <= %20 |
| STAT_ZEIT_SOC_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 3: %20 < SOC <= %30 |
| STAT_ZEIT_SOC_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 4: %30 < SOC <= %40 |
| STAT_ZEIT_SOC_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 5: %40 < SOC <= %50 |
| STAT_ZEIT_SOC_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 6: %50 < SOC <= %60 |
| STAT_ZEIT_SOC_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 7: %60 < SOC <= %70 |
| STAT_ZEIT_SOC_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 8: %70 < SOC <= %80 |
| STAT_ZEIT_SOC_9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 9: %80 < SOC <= %90 |
| STAT_ZEIT_SOC_10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 10: SOC > %90 |

### RES_0XDDA1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLLDREHZAHL_KUEHLMITTELPUMPE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktuelle Ansteuerung der Kühlmittelumpe in % |

### RES_0XDDBC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | aktueller Anzeige Soc |
| STAT_MAXIMALE_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | obere Grenze des Anzeige Soc |
| STAT_MINIMALE_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | untere Grenze des Anzeige Soc |

### RES_0XDDBE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_VORLADUNG_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | zuletzt benötigte Vorladezeit |
| STAT_ZEIT_VORLADUNG_1_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (1 Vorgang zuvor) |
| STAT_ZEIT_VORLADUNG_2_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (2 Vorgänge zuvor) |
| STAT_ZEIT_VORLADUNG_3_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (3 Vorgänge zuvor) |
| STAT_ZEIT_VORLADUNG_4_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (4 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_WERT | A | high | int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (letzte Vorladung) |
| STAT_MAX_STROM_VORLADUNG_1_WERT | A | high | int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (1 Vorgang zuvor) |
| STAT_MAX_STROM_VORLADUNG_2_WERT | A | high | int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (2 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_3_WERT | A | high | int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (3 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_4_WERT | A | high | int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (4 Vorgänge zuvor) |

### RES_0XDDBF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UCELL_MIN_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | minimale Einzelzellspannung aller Einzelzellen |
| STAT_UCELL_MAX_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | maximale Einzelzellspannung aller Einzelzellen |

### RES_0XDDC0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TMOD_MIN_WERT | °C | high | int | - | - | 1.0 | 100.0 | 0.0 | minimale Messtemperatur |
| STAT_TMOD_MAX_WERT | °C | high | int | - | - | 1.0 | 100.0 | 0.0 | maximale Messtemperatur |
| STAT_TMOD_MEAN_WERT | °C | high | int | - | - | 1.0 | 100.0 | 0.0 | durchschnittliche Messtemperatur |
| STAT_TCORE_MAX_WERT | °C | high | int | - | - | 1.0 | 100.0 | 0.0 | maximale Zellkerntemperatur |

### RES_0XDDC4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SOC der HV-Batterie |
| STAT_SOC_PLAUSIBILITAET_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Plausibilität des HV-Batterie SOC (0 = plausibel, 1 = unplausibel) |

### RES_0XDDCB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_SOC_GRENZE_WERT | % | high | int | - | - | 1.0 | 100.0 | 0.0 | aktuell gültige minimale SOC Grenze |
| STAT_MAX_SOC_GRENZE_WERT | % | high | int | - | - | 1.0 | 100.0 | 0.0 | aktuell gültige maximale SOC Grenze |

### RES_0XDDCC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHUETZ_K1_RESTZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktuell noch mögliche Schaltungen für Schütz K1 |
| STAT_SCHUETZ_K2_RESTZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktuell noch mögliche Schaltungen für Schütz K2 |
| STAT_SCHUETZ_K3_RESTZAEHLER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktuell noch mögliche Schaltungen für Schütz K3 |

### RES_0XDF65_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_SPREIZUNG_MAX_WERT | °C | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Vorderfinierter maximaler Temperaturspreizungswert in Celcius  (projektspezifisch) |
| STAT_TEMP_SPREIZUNG_SYS_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 1: 0 < dT <= dTmax*0.2 |
| STAT_TEMP_SPREIZUNG_SYS_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 2: dTmax*0.2 < dT <= dTmax*0.4 |
| STAT_TEMP_SPREIZUNG_SYS_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 3: dTmax*0.4 < dT <= dTmax*0.6 |
| STAT_TEMP_SPREIZUNG_SYS_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 4: dTmax*0.6 < dT <= dTmax*0.8 |
| STAT_TEMP_SPREIZUNG_SYS_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 5: dTmax*0.8 < dT <= dTmax |
| STAT_TEMP_SPREIZUNG_SYS_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Minuten bei Kühlung an Klasse 6: dT > dTmax |

### RES_0XDF71_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_ZELLEN_INSGESAMT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Zellen des HV-Speichers |
| STAT_ANZAHL_ZELLEN_PRO_MODUL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Zellen pro Modul |
| STAT_ANZAHL_MODULE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Module des HV-Speichers |
| STAT_ANZAHL_TEMPERATURSENSOREN_PRO_MODUL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Temperatursensoren pro Modul |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ISOLATION | 0xAD61 | - | Ergebnis Isolationstest | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAD61_R |
| KAPAZITAET_BESTIMMUNG | 0xAD66 | - | Bestimmung der Kapazität | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAD66_R |
| NV_DATEN_SCHREIBEN | 0xAD69 | - | Sichern von Daten im NV-RAM | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAD69_R |
| ZELLSPANNUNG_LESEN | 0xAD6E | - | Zelle deren Spannung ermittelt werden soll | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAD6E_R | RES_0xAD6E_R |
| ENTLUEFTUNG_KUEHLKREIS | 0xAD7B | - | Routine zum Entlüften des Kühlmittelkreislaufs (Eigene Kühlung für HV-Speicher) | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAD7B_R |
| SCHUETZ_SCHALTER | 0xDD60 | STAT_SCHUETZ_SCHALTER | Status der Schützschalter: geschlossen, offen, verschweißte Kontakte oder nicht definiert. Ergebnisse siehe Tabelle TAB_SCHUETZ_SCHALTER | 0-n | - | high | unsigned char | TAB_SCHUETZ_SCHALTER | - | - | - | - | 22 | - | - |
| SCHUETZ_FREIGABE | 0xDD61 | - | Schreibt bzw. liest das Bit zur Freigabe oder Sperrung der Schützschalter. Job ist Klemmensicher | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDD61_D | RES_0xDD61_D |
| HVIL | 0xDD64 | STAT_GUELTIG | Ergebnis HVIL-Prüfung | 0-n | - | high | unsigned char | TAB_STATUS_HVIL | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HV_SPANNUNG | 0xDD66 | STAT_HV_SPANNUNG_WERT | Zwischenkreisspannung zum HV-Anschlussstecker, abhängig vom Schützzustand | V | - | high | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| ANZAHL_KUEHLANFORDERUNG_DRINGEND | 0xDD67 | STAT_ANZAHL_KUEHLANFORDERUNG_DRINGEND_WERT | Anzahl aufeinanderfolgenender Wachzyklen mit dringender Kühlanforderung (Lebensdauer-Max.wert) | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HV_STROM | 0xDD69 | STAT_HV_STROM_WERT | HV-Strom in A | A | - | high | long | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| ISOLATIONSWIDERSTAND | 0xDD6A | - | Auslesen des aktuell anliegenden Isolationswiderstands | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD6A_D |
| KUEHLKREISLAUF_TEMP | 0xDD6C | STAT_TEMP_KUEHLKREISLAUF_WERT | Temperatur des Kühlmediums in °C (327,67 = unplausibel) | °C | - | high | int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| KUEHLKREISLAUF_VENTIL | 0xDD6F | - | Status / Steuern Kühlmittel-Ventil: Geschlossen oder offen / schliessen oder öffnen | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDD6F_D | RES_0xDD6F_D |
| CUMULATIVE_LADUNG | 0xDD73 | STAT_LADUNG_AMP_STUNDEN_WERT | Die kumulierte Ladung für Ladevorgänge in Ah | Ah | - | low | unsigned long | - | 1.0 | 3600.0 | 0.0 | - | 22 | - | - |
| CUMULATIVE_ENTLADUNG | 0xDD74 | STAT_ENTLADUNG_AMP_STUNDEN_WERT | Die kumulierte Ladung für Entladevorgänge in Ah | Ah | - | low | unsigned long | - | 1.0 | 3600.0 | 0.0 | - | 22 | - | - |
| STATUS_KL30C_SPANNUNG | 0xDD76 | STAT_KL30C_SPANNUNG_WERT | Spannung Klemme 30C in V | V | - | high | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| STROMGRENZEN | 0xDD7D | - | Stromgrenzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD7D_D |
| SPANNUNGSGRENZEN | 0xDD7E | - | Spannungsgrenzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD7E_D |
| ZEIT_SOC_KLASSE | 0xDD91 | - | Zeit seit Einbau in SOC-Klassen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD91_D |
| KUEHLMITTELPUMPE | 0xDDA1 | - | Resultwerte oder Steuerung der Kühlmittelpumpe für die Kühlung des Hochvoltspeichers in % (0-100%) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDDA1_D | RES_0xDDA1_D |
| HV_SPANNUNG_BATTERIE | 0xDDB4 | STAT_HV_SPANNUNG_BATT_WERT | Batteriespannung hinter den Schützen, unabhängig vom Schützzustand | V | - | high | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| ALTERUNG_INNENWIDERSTAND | 0xDDB6 | STAT_ALTERUNG_INNENWIDERSTAND_WERT | Alterung des Innenwiderstands in Prozent: Innenwiderstand des Speichers im Neuzustand auf den aktuellen Wert des Innenwiderstands bezogen  (R_neu /R_akt) *100   (100% = Neuzustand, sinkt mit Alterung) | % | - | high | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| REFERENZ_KAPAZITAET | 0xDDB7 | STAT_SOH_KAPAZITAET_GEFILTERT_WERT | Restkapazität des Speichers, prozentualer Wert: ( C_akt/C_nenn(neu) ) * 100, 0 = Lebensdauerende erreicht, 100 = Neuzustand | % | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ANZEIGE_SOC | 0xDDBC | - | aktueller Anzeige Soc | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDBC_D |
| SERVICE_DISCONNECT | 0xDDBD | STAT_SERVICE_DISCONNECT | Status Service Disconnect (0 = offen, 1 = geschlossen) | 0/1 | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORLADUNG | 0xDDBE | - | Info über Zeit, Strom und Temperaturen bei Vorladung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDBE_D |
| ZELLSPANNUNGEN_MIN_MAX | 0xDDBF | - | minimale und maximale Einzelzellspannungen werden ausgegeben | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDBF_D |
| TEMPERATUREN | 0xDDC0 | - | Ausgabe minimale Messtemperatur, maximale Messtemperatur, durchschnittliche Messtemperatur, maximale Zellkerntemperatur | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC0_D |
| SOC | 0xDDC4 | - | Auslesen SOC Wert (in %) und Plausibilität oder Vorgabe des SOC Werts (0-100%) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC4_D |
| SERIENNUMMER_ECU | 0xDDCA | STAT_SERIENNUMMER_ECU_TEXT | Seriennummer des SME Steuergeräts | TEXT | - | high | string[10] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOC_GRENZEN | 0xDDCB | - | Auslesen und Ändern der SOC Grenzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDCB_D |
| SCHUETZ_RESTZAEHLER | 0xDDCC | - | Auslesen oder Rücksetzen (0 = kein Reset; 1 = Reset) des Zählers für die noch möglichen Schaltungen der Schütze K1, K2, K3 | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDDCC_D | RES_0xDDCC_D |
| CC_MELDUNG | 0xDDCD | - | Aktivieren / Deaktivierung des Sendens von CC-Meldung (0 = Senden nicht aktiv; 1 = Senden aktiv) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDDCD_D | - |
| TEMP_SPREIZUNG_SYSTEM | 0xDF65 | - | Zeit in verschiedenen dT-Klassen bei aktiver Kühlung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF65_D |
| PROJEKT_PARAMETER | 0xDF71 | - | Auslesen der projektspezifischen Parametern | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF71_D |
| RESET_ISOLATIONSMESSWERTE | 0xDF7B | - | Zurücksetzen der Isolationswiderstandsmesswerte | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDF7B_D | - |
| _SCHUETZ_ZAEHLER | 0x5003 | - | Auslesen oder Setzen der Zähler der Schaltspiele der Schütze K1, K2, K3 | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x5003_D | RES_0x5003_D |
| BATTRCDR_RECBAL | 0x5005 | - | Datenprotokollierung der Symmetrierung Variablen der HV-Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5005_D |
| BATTRCDR_RECCNTCR | 0x5006 | STAT_MAIRLYCLSCNTR_WERT | Zähler für das Schliessen der Hauptschütze | - | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BATTRCDR_RECI | 0x5007 | - | Datenprotokollierung der Variablen im Zusammenhang mit dem Strom der Hv-Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5007_D |
| BATTRCDR_RECOPTI | 0x5008 | - | Datenprotokollierung von Zeiten unter verschiedenen Baetriebsarten der HV-Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5008_D |
| BATTRCDR_RECPREC | 0x5009 | - | Datenprotokollierung während der Vorladung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5009_D |
| BATTRCDR_RECR | 0x500A | - | Datenprotokollierung von Widerstand Variablen der HV-Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x500A_D |
| BATTRCDR_RECSOC | 0x500B | - | Datenprotokollierung von SOC Variablen der HV-Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x500B_D |
| BATTRCDR_RECT | 0x500C | - | Datenprotokollierung von Temperatur Variablen der HV-Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x500C_D |
| BATTRCDR_RECTCTRL | 0x500D | - | Datenprotokollierung von Variablen aus Thermomanagement Modul | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x500D_D |
| BATTRCDR_RECU | 0x500E | - | Datenprotokollierung von Spannung Variablen der HV-Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x500E_D |
| BATTRCDR_RECUSELF | 0x500F | - | Datenprotokollierung der Variablen im Zusammenhand mit dem Gebrauch über die Lebensdauer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x500F_D |
| EOL_SOH_C_SOH_R | 0x5010 | - | Setzen SOH-C/R mit EOL Werten | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5010_D | - |
| _SERIENNUMMER | 0x6509 | - | Speicherseriennummer | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6509_D | - |
| MESSBOTSCHAFTEN | 0x6512 | - | Messbotschaften ein/ausschalten | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6512_D | - |

### TAB_BATTTCTRLMOD

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Idle |
| 2 | Bereit |
| 4 | Fahrt |
| 8 | Rennen |
| 16 | Laden AC |
| 32 | Laden DC |
| 64 | Spülung |
| 128 | Notlauf Kuehlung |
| 256 | Notlauf aus |
| 1024 | Produktion |
| 32768 | Fehlermode |

### TAB_BMS_MODUS

| WERT | TEXT |
| --- | --- |
| 0 | Daten erwartet |
| 1 | Hochfahren |
| 3 | laufend |
| 4 | ausschalten |

### TAB_COOLTSWTVLV

| WERT | TEXT |
| --- | --- |
| 0 | Geschlossen |
| 1 | Offen |

### TAB_ISOLATION_ERFOLGREICH

| WERT | TEXT |
| --- | --- |
| 0x00 | Isolationsmessung nicht erfolgreich |
| 0x01 | Isolationsmessung erfolgreich |
| 0x02 | Isolationsmessung läuft! |
| 0xFF | nicht definiert |

### TAB_ISOLATION_ISOLATIONSFEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Isolationswarnung liegt vor |
| 0x02 | Isolationsfehler liegt vor |
| 0xFF | nicht definiert |

### TAB_KLEMME30F

| WERT | TEXT |
| --- | --- |
| 0 | Init |
| 1 | Reserve |
| 2 | KL30 |
| 3 | KL30F-Änderung |
| 4 | KL30F-Ein |
| 5 | KL30B-Änderung |
| 6 | KL30B-Ein |
| 7 | KLR-Änderung |
| 8 | KLR-Ein |
| 9 | KL15-Änderung |
| 10 | KL15-Ein |
| 11 | KL50-Verzögerung |
| 12 | KL50-Änderung |
| 13 | KL50-Ein |
| 14 | Fehler |
| 15 | Signal ungültig |

### TAB_KUEHLERKREISLAUF_VENTIL

| WERT | TEXT |
| --- | --- |
| 0x00 | geschlossen |
| 0x01 | offen |
| 0x02 | geregelt |
| 0xFF | nicht definiert |

### TAB_KUEHLKREISLAUF_VENTIL_RUECKGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | geschlossen |
| 0x01 | offen |
| 0x02 | Fehler |
| 0xFF | ungültiger Wert |

### TAB_LADEBETRIEB

| WERT | TEXT |
| --- | --- |
| 0 | kein Laden |
| 1 | Plug & Charge |
| 2 | Laden mit Abfahrtszeit und Konditionierung |

### TAB_MB_SENDEN

| WERT | TEXT |
| --- | --- |
| 0 | (DCAN & CCP) off |
| 1 | DCAN on + CCP off |
| 2 | (DCAN & CCP) on |

### TAB_NV_DATEN_SCHREIBEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x05 | Funktion läuft noch |
| 0x07 | Funktion beendet mit Fehler |
| 0x08 | Funktion vollständig durchlaufen |
| 0xFF | Wert ungültig |

### TAB_SCHUETZ_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht freigegeben |
| 0x01 | freigegeben |
| 0xFF | nicht definiert |

### TAB_SCHUETZ_SCHALTER

| WERT | TEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | geschlossen |
| 0x02 | verschweisste Kontakte |
| 0x03 | nicht definiert |

### TAB_SME_ERMITTLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Ermittlung läuft nicht |
| 0x01 | Ermittlung läuft: Entladungsphase bis SoC min |
| 0x02 | Ermittlung läuft: Ladungsphase bis SoC max |
| 0x03 | Ermittlung läuft: Entladungsphase bis mittleren SoC |

### TAB_STATUS_HVIL

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht ok |
| 0x01 | ok |
| 0xFF | nicht definiert |

### TAB_T15STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | T15 aus |
| 0x01 | T15 an |

### TAB_AE_FUNKSTAT_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Start-/Ansteuerbedingung nicht erfuellt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | nicht verfuegbarer Wert |
| 0x05 | Funktion laeuft |
| 0x06 | Funktion beendet (ohne Ergebnis) |
| 0x07 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 0x08 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und kein Fehler erkannt |
| 0x09 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und Fehler erkannt |
| 0xFE | nicht definiert |
| 0xFF | ungueltiger Wert |

### TAB_AE_STAT_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Montage-Modus ist inaktiv |
| 0x01 | Montage-Modus ist aktiv |
| 0xFE | nicht definiert |
| 0xFF | ungueltiger Wert |
